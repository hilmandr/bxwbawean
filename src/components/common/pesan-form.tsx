"use client"
import {Form, FormField, FormItem, FormLabel, FormControl} from "~/components/ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { ArrowRight } from "iconsax-react"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { createPesanRequest, CreatePesanRequest } from "~/lib/validation/pesan.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { api } from "~/trpc/react"
import { Pesan } from "~/server/db/schema"
import axios from "axios"
import { Loader2 } from "lucide-react"
export default function PesanForm() {
    const router = useRouter();
  const [isLoasing, setIsLoading] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<CreatePesanRequest>({
    resolver: zodResolver(createPesanRequest),
    defaultValues: {
      nama: "",
      email: "",
      telepon: "",
      pesan: "",
      tanggal: new Date(),
    }
  })

  const addPesanMutation = api.pesan.createPesan.useMutation({
    onMutate: () => setLoading(true),
    onSuccess: () => {
      form.reset();
      toast.success("Pesan Terkirim!");
      router.push("/kontak");
    },
    onSettled: () => setLoading(false),
  })

  const submitPesan: SubmitHandler<CreatePesanRequest> = useCallback(
    async (data) => {
      setLoading(true);
      const res = await axios.post<{ pesan: string }>("api/contact", data);
      console.log(res);
      if (res.status === 200) {
        addPesanMutation.mutate({
          ...data,
          pesan: data.pesan || "",
        })
      }
    },
    [addPesanMutation],
  )
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitPesan)} className=" space-y-4">
                  <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} className=" border border-neutral-400"/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} className=" border border-neutral-400"/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telepon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No Telepon</FormLabel>
                        <FormControl>
                          <Input type="text" {...field} className=" border border-neutral-400"/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pesan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pesan Anda</FormLabel>
                        <FormControl>
                          <Textarea {...field} className=" border border-neutral-400"/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  {loading ? (
                    <>
                        <Button variant="default" disabled className="border w-full rounded-lg bg-black text-neutral-100">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Harap Tunggu
                        </Button>
                    </>
                  ) : (
                    <>
                        <Button
                            variant="default"
                            className=" border w-full rounded-lg bg-black text-neutral-100 transition-all duration-200 hover:bg-black group px-6 mt-2"
                            onClick={() => submitPesan}
                        >
                            <p className=" left-2 relative group-hover:left-0 transition-all duration-200 ">
                            Kirim
                            </p>
                            <ArrowRight
                            size="20"
                            variant="Linear"
                            className=" relative opacity-0 group-hover:opacity-100 left-0 group-hover:left-2 transition-all duration-200"
                            />
                        </Button>
                    </>
                  )}
                </form>
              </Form>
        </>
    )
}