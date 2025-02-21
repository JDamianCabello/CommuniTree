"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function LinkProfile() {
    const [isCopiedLink, setIsCopiedLink] = useState(false)
    const copyLink = () => {
        const url = `${window.location.origin}/jdamiancabello`;

        navigator.clipboard.writeText(url);
        setIsCopiedLink(true);
    };

  return (
    <div className="bg-indigo-100 rounded-3xl">
        <div className="flex flex-col justify-center text-center py-4 px-4 items-center 
            gap-2 md:flex-row md:justify-between md:text-left">
                <span className="text-sm">
                    <span>🔥 Tu CommuniTree link es: </span>
                    {window.location.origin}/jdamiancabello
                </span>

                <Button
                    variant="outline"
                    className="rounded-full px-4 bg-white font-semibold text-xs md:text-[16px]"
                    onClick={copyLink}
                >
                    {isCopiedLink ? 'Copiado!' : 'Copiar link'}
                </Button>
        </div>
    </div>
  )
}
