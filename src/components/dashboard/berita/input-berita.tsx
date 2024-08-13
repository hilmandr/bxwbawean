"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { createBeritaRequest, CreateBeritaRequest } from "~/lib/validation/berita.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { Input } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "~/components/ui/calendar";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import Image from "next/image";
import dynamic from "next/dynamic";

const Froala = dynamic(() => import("./froala-editor"), {
  ssr: false,
});


export default function BeritaForm() {
    // hooks
    const router = useRouter();

    // state
    const [isLoading, setIsLoading] = useState(false);
    const [thumbnail, setThumbnail] = useState<File | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    
    const form = useForm<CreateBeritaRequest>({
        resolver: zodResolver(createBeritaRequest),
        defaultValues: {
            judul: "",
            tanggal: new Date(),
            penulis: "admin",
            thumbnail: "",
            summary: "",
            konten: "",
        }
    })

    const addBeritaMutation = api.berita.createBerita.useMutation({
        onMutate: () => setLoading(true),
        onSuccess: () => {
            form.reset();
            toast.success("Berita berhasil ditambahkan!");
            router.push("/dashboard/berita");
        },
        onSettled: () => setLoading(false),
    });

    const submitBerita: SubmitHandler<CreateBeritaRequest> =  useCallback(
        async (data) => {
            if (thumbnail) {
                setLoading(true);
                console.log(thumbnail);
                const formData = new FormData();
                formData.append("file", thumbnail);
                formData.append("upload_preset", "s5f1eblu");

                const res = await axios.post<{secure_url: string}> (
                    `https://api.cloudinary.com/v1_1/dbi3iqa9k/image/upload`,
                    formData,
                );

                if (res.status === 200) {
                    addBeritaMutation.mutate({
                        ...data,
                        thumbnail:res.data.secure_url,
                    });
                    setLoading(true);
                }
            }
        },
        [addBeritaMutation, thumbnail]
    );

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles && acceptedFiles[0]) {
            setThumbnail(acceptedFiles[0]);
        }
    }, []);

    const {getRootProps, getInputProps, isDragActive, open} = useDropzone({
        onDrop,
    })
    return (
        <>
             <div className=" flex flex-col w-full items-center justify-center">
                {/* {JSON.stringify(form.formState.errors)} */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitBerita)} className=" w-full">
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
                                        <div {...getRootProps({
                                            className:
                                                "dropzone flex w-full aspect-[2/1] border items-center justify-center rounded-lg"
                                        })}>
                                            <input {...getInputProps()}/>
                                            {isDragActive ? (
                                                <p>{}</p>
                                            ) : (
                                                <p className="text-zinc-500 cursor-default">Drag or drop image files here, or click to select files</p>
                                            )}
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
                                            <Froala setValue={(value) => form.setValue("konten", value)}/>
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
                                <Button type="submit">Submit</Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}