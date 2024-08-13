"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { AddCircle } from "iconsax-react";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "~/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { cn } from "~/lib/utils";
import { createJadwalPenerbanganRequest, CreateJadwalPenerbanganRequest } from "~/lib/validation/jadwal-penerbangan.validation";
import { api } from "~/trpc/react";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';


export default function InputJadwal() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<CreateJadwalPenerbanganRequest>({
        resolver: zodResolver(createJadwalPenerbanganRequest),
        defaultValues: {
            status: "",
            tanggal: new Date(),
            jam: "",
            kota: "",
            maskapai: "",
        }
    })

    const addPenerbanganMutation = api.jadwal.createJadwalPenerbangan.useMutation({
        onMutate: () => setLoading(true),
        onSuccess: () => {
            form.reset();
            toast.success("Berita berhasil ditambahkan!");
            router.push("/dashboard/jadwal-penerbangan/departure");
        },
        onSettled: () => setLoading(false),
    })

    const submitJadwal: SubmitHandler<CreateJadwalPenerbanganRequest> = useCallback(
        async (data) => {
            // const res = await axios.post<{status: string}>(data);
            // console.log(res);
            // if (res.status === 200) {
                addPenerbanganMutation.mutate({
                    ...data
                });
            // }
            console.log(data)
        },
        [addPenerbanganMutation]
    )

    const [value, onChange] = useState('10:00');
    return (
        <>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className=" gap-x-2"><AddCircle/>Tambahkan</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Tambah Jadwal Penerbangan Perintis</DialogTitle>
                            {/* <DialogDescription>Input tanggal dan link google drive laporan kegiatan harian</DialogDescription> */}
                        </DialogHeader>
                        <div className=" w-full">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(submitJadwal)} className=" space-y-4">
                                    <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="status"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Departure / Arrival</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Keberangkatan / Kedatangan" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Departure">Departure</SelectItem>
                                                            <SelectItem value="Arrival">Arrival</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div className=" flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="tanggal"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tanggal Penerbangan</FormLabel>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn("w-full pl-3 text-left font-normal",
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
                                    <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="jam"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Waktu (WIB)</FormLabel>
                                                <FormControl>
                                                   <TimePicker onChange={field.onChange} value={field.value} locale="id" />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="kota"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Tujuan / Asal</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Tujuan / Asal" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Surabaya">Surabaya</SelectItem>
                                                            <SelectItem value="Sumenep">Sumenep</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <FormField
                                        control={form.control}
                                        name="maskapai"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Maskapai</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Maskapai" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Susi Air">Susi Air</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
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