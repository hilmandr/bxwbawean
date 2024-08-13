"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { format } from "date-fns";
import { AddCircle } from "iconsax-react";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { createLaporanHarianRequest, CreateLaporanHarianRequest } from "~/lib/validation/laporan-harian.validation";
import { api } from "~/trpc/react";


export default function InputKegiatanHarian() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<CreateLaporanHarianRequest>({
        resolver: zodResolver(createLaporanHarianRequest),
        defaultValues: {
            tanggal: new Date(),
            link: ""
        }
    })

    const addLaporanMutation = api.laporan.createLaporanHarian.useMutation({
        onMutate: () => setLoading(true),
        onSuccess: () => {
            form.reset();
            toast.success("Laporan Harian Berhasil di Submit");
            router.refresh()
            // router.push("/dashboard");
        },
        onSettled: () => setLoading(false),
    })

    const submitLaporan: SubmitHandler<CreateLaporanHarianRequest> = useCallback(
        async (data) => {
            const res = await axios.post<{link: string}>("api/trpc", data);
            console.log(res)
            if (res.status === 200) {
                addLaporanMutation.mutate({
                    ...data
                });
                setLoading(true);
            }
        },
        [addLaporanMutation]
    )
    return (
        <>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className=" gap-x-2"><AddCircle/>Tambahkan</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Tambah Laporan Kegiatan Harian</DialogTitle>
                            <DialogDescription>Input tanggal dan link google drive laporan kegiatan harian</DialogDescription>
                        </DialogHeader>
                        <div className=" w-full">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(submitLaporan)}>
                                    <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="tanggal"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Masukkan tanggal laporan kegiatan</FormLabel>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn("w-[240px] pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                                )}>
                                                                    {field.value ? (
                                                                        format(field.value, "PP")
                                                                    ) : (
                                                                        <span>Pilih Tanggal</span>
                                                                    )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                                            </Button>
                                                        </PopoverTrigger>   
                                                        <PopoverContent className=" w-auto p-0" align="start">
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
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="link"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Link Laporan Kegiatan Harian</FormLabel>
                                                    <FormControl>
                                                        <Input type="text" placeholder="Link Laporan Kegiatan Harian" {...field} />
                                                    </FormControl>
                                                    <FormDescription className=" text-red-700">Pastikan Akses Dokumen Sudah Dibuka!</FormDescription>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className=" flex w-full justify-end mt-4">
                                        {loading ? (
                                            <Button disabled>
                                                <Loader2 className=" mr-2 h-4 w-4 animate-spin"/> Harap Tunggu
                                            </Button>
                                        ) : (
                                            <Button type="submit">Submit</Button>
                                        )}
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    )
}