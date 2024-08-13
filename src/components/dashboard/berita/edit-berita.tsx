"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Textarea } from "~/components/ui/textarea";
import { cn } from "~/lib/utils";
import { updateBeritaRequest, UpdateBeritaRequest } from "~/lib/validation/berita.validation";
import { Berita } from "~/server/db/schema"
import { api } from "~/trpc/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Froala = dynamic(() => import("./froala-editor"), {
  ssr: false,
});

interface PageParams {
    berita: Berita
}

export default function FormEditBerita({berita}: PageParams) {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<UpdateBeritaRequest>({
        resolver: zodResolver(updateBeritaRequest),
        defaultValues: {
            judul: "",
            tanggal: new Date(),
            penulis: "admin",
            summary: "",
            konten: "",
        }
    })

    const editBeritaMutation = api.berita.updateBerita.useMutation({
        onMutate: () => setLoading(true),
        onSuccess: () => {
            form.reset();
            toast.success("Berita berhasil di update!");
            router.push("/dashboard/berita");
        },
        onSettled: () => setLoading(false),
    })

    const onSubmit: SubmitHandler<UpdateBeritaRequest> = useCallback(
        async (data) => {
            console.log(data);
            const payload = {
                ...data,
                slug: berita.slug,
            };
            if (thumbnail) {
                setLoading(true);
                const formData = new FormData();
                formData.append("file", thumbnail);
                formData.append("upload_preset", "s5f1eblu");

                const res = await axios.post<{secure_url: string}> (
                    `https://api.cloudinary.com/v1_1/dbi3iqa9k/image/upload`,
                    formData,
                );

                if (res.status === 200) {
                    payload.thumbnail = res.data.secure_url;
                    setIsLoading(true);
                }
            }
            editBeritaMutation.mutate(payload);
        },
        [thumbnail, editBeritaMutation, berita]
    )

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles[0]) {
            setThumbnail(acceptedFiles[0])
        }
    },[])

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        maxFiles: 1,
    })

    useEffect(() => {
        form.setValue("judul", berita.judul);
        form.setValue("tanggal", berita.tanggal);
        form.setValue("summary", berita.summary);
        form.setValue("konten", berita.konten);
    }, [form, berita])
    return (
        <>
             <div className=" flex flex-col w-full items-center justify-center">
                {/* {JSON.stringify(form.formState.errors)} */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
                        <div className=" grid lg:grid-cols-2 gap-5 w-full">
                            <FormField
                                control={form.control}
                                name="judul"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Judul Berita</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Judul Berita atau Kegiatan" {...field} max={50}/>
                                        </FormControl>
                                        <FormDescription className=" text-xs">Max 50 Karakter</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tanggal"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tanggal Publish</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button variant="outline"
                                                    className={cn(" w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    onSelect={field.onChange}
                                                    disabled={(date) => 
                                                        date > new Date() ||
                                                        date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="summary"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ringkasan Berita</FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                placeholder="Ringkasan Berita atau Kegiatan" 
                                                className=" aspect-[2/1]" 
                                                {...field}/>
                                        </FormControl>
                                        <FormDescription className=" text-xs">Max 255 Karakter</FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className=" space-y-2">
                                <Label>Thumbnail Berita</Label>
                                {thumbnail ? (
                                    <>
                                        <div className=" flex w-full flex-col gap-y-1">
                                            <div className=" aspect-[2/1] relative w-full overflow-hidden rounded-lg" onClick={open}>
                                                <Image
                                                    src={URL.createObjectURL(thumbnail)}
                                                    alt=""
                                                    fill
                                                    className=" w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex w-full flex-col gap-y-1">
                                            <div
                                                className="relative aspect-[2/1] w-full overflow-hidden rounded-lg"
                                                onClick={open}
                                            >
                                                <Image
                                                    src={berita.thumbnail}
                                                    fill
                                                    alt=""
                                                    className="object-cover object-center"
                                                ></Image>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className=" flex w-full mt-5">
                            <FormField
                                control={form.control}
                                name="konten"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Isi Berita</FormLabel>
                                        <FormControl>
                                            <Froala {...field} setValue={(value) => form.setValue("konten", value)}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className=" mt-5 justify-end items-end w-full flex mb-10">
                            {loading ? (
                                <Button disabled>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Harap Tunggu
                                </Button>
                            ) : (
                                <Button type="submit">Update Berita</Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}