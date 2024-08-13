import Link from "next/link";
import { useForm } from "react-hook-form";
import Container from "~/components/common/container";
import { Form } from "~/components/ui/form";
import { createBeritaRequest, CreateBeritaRequest } from "~/lib/validation/berita.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import FormEditBerita from "~/components/dashboard/berita/edit-berita";
import { api } from "~/trpc/server";
import { Berita } from "~/server/db/schema";

interface PageParams {
    params: {
        slug: string;
    };
}

export default async function EditBerita({params}: PageParams) {

    const editBerita = await api.berita.getBeritaBySlug({slug: params.slug})
    return (
        <>
            <div className="flex h-full w-full bg-white text-sm">
                <Container>
                <div className="flex w-full flex-col pt-8">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex w-full items-center gap-4">
                            <div className="">
                                <h1 className="text-lg font-bold">Edit Berita & Kegiatan</h1>
                            </div>
                        </div>
                    </div>
                    <div className=" flex w-full max-w-full mt-5">
                        <FormEditBerita berita={editBerita || ({} as Berita)}/>
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}