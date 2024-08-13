"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { login, LoginValidation } from "~/lib/validation/login.validation";
import Container from "./container";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { Eye, EyeSlash } from "iconsax-react";


export default function Login() {
    const [loading, setLoading] = useState<boolean>(false)
    const [password, setPassword] = useState<boolean>(false)
    const router = useRouter();
    const form = useForm<LoginValidation>({
        resolver: zodResolver(login),
        defaultValues: {
            username: "",
            password: "",
        }
    })
    const onSubmit: SubmitHandler<LoginValidation> = useCallback(
        async (data) => {
            setLoading(true);
            const res = await signIn("credentials", {
                username: data.username,
                password: data.password,
                callbackUrl: "/dashboard",
                redirect: false,
            });

            if (res?.error) {
                toast.error("error");
            } else {
                router.push("/dashboard");
                setLoading(true);
            }
        },
        [router]
    )
    return (
        <>
            <div className=" flex w-full h-screen relative">
        <div className=" flex flex-col w-full h-screen items-center justify-center bg-[url('/images/banner-1.JPG')] bg-cover bg-center shadow-lg ">
          <div className=" w-full h-screen bg-black/20 absolute z-0"></div>
          <Container className=" z-10">
            <div className=" grid lg:grid-cols-2 w-full items-center justify-center text-white gap-x-20">
              <div className=" flex flex-col items-start justify-center gap-8">
                <h1 className=" text-6xl font-bold">Selamat Datang!</h1>
                <div className=" w-24 h-1 bg-white"></div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  neque non debitis, eos numquam omnis, deserunt odio maxime
                  molestiae eius praesentium, libero minus dolores facere. Aut
                  voluptatibus iure quisquam ea.
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center">
                <div className=" flex flex-col w-full h-[540px] rounded-2xl items-center border-white/30 border justify-center gap-y-6 bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
                  <h1 className=" text-4xl font-bold">Login</h1>
                  <Form {...form}>
                    <form
                      action=""
                      onSubmit={form.handleSubmit(onSubmit)}
                      className=" w-full max-w-xs space-y-6"
                    >
                      <div className="grid w-full items-center gap-3">
                        <FormField
                          control={form.control}
                          name="username"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="username">Username</FormLabel>
                              <FormControl>
                                <Input
                                  type="username"
                                  id="username"
                                  placeholder="Username"
                                  className=" text-neutral-950"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid w-full items-center gap-3">
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel htmlFor="password">Password</FormLabel>
                              <FormControl>
                                <div className=" relative items-center justify-between">
                                    <Button type="button" variant={"ghost"} className=" absolute right-0" onClick={() => {setPassword((prev) => !prev)}}>
                                        {password ? (<Eye size={16} color="#3a3a3a"/>) : (<EyeSlash size={16} color="#3a3a3a"/>)}
                                    </Button>
                                    <Input
                                        type={password ? "text" : "password"}
                                        id="password"
                                        placeholder="Password"
                                        className=" text-neutral-950"
                                        {...field}
                                    />
                                </div>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className=" grid w-full max-w-xs items-center">
                        {loading ? (
                            <Button disabled className="h-11 w-full rounded-lg py-2">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            </Button>
                        ) : (
                            <Button
                            onClick={() => onSubmit}
                            type="submit"
                            className="flex h-11 w-full items-center justify-center font-bold rounded-lg border bg-white py-2 text-neutral-950 transition-all duration-150 hover:border-stone-800 hover:bg-black/75 hover:text-white"
                            >
                            <p className="text-center">Login</p>
                            </Button>
                        )}
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
        </>
    )
}