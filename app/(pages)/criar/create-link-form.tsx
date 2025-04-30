"use client"

import { createLink } from "@/app/actions/create-link"
import { verifyLink } from "@/app/actions/verify-link"
import Button from "@/app/components/ui/button"
import TextInput from "@/app/components/ui/text-input"
import { sanitizeLink } from "@/app/lib/utils"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function CreateLinkForm() {

    const router = useRouter();

    const [error, setError] = useState("")
    const [link, setLink] = useState("")

    function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
        setLink(sanitizeLink(e.target.value))
    }

    async function handleSubmit(e: FormEvent<HTMLInputElement>) {
        e.preventDefault;

        if (link.length === 0 ) return setError('Escolha um link primeiro!');

        const isLinkTaken = await verifyLink(link);
        if (isLinkTaken) return setError('Este link ja esta em uso!')

        const isLinkCreated = await createLink(link)
        if (!isLinkCreated) return setError('Erro ao criar perfil. Tente novamente!')

        router.push(`/${link}`)

    }

    return(
        <>
        <form action="" className="w-full flex items-center gap-2">
            <span className="text-white">projectinbio.com/</span>
            <TextInput value={link} onChange={handleLinkChange} />
            <Button className="w-[126px]">Criar</Button>
        </form>
        <div>
            <span className="text-accent-pink">{error}</span>
        </div>        
        </>
    )
}