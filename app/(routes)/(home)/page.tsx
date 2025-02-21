"use client"
import { TreePalm } from "lucide-react";
import { LinkProfile } from "./components";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Link, User } from "@prisma/client";
import { LoaderProfile } from "@/components/Shared";

export default function HomePage() {
  const {user} = useUser();
  const [isFirstTime, setIsFirstTime] = useState(false)
  const [reload, setReload] = useState(false)
  const [infoUser, setInfoUser] = useState<(User & { links : Link[] })|null>(null)

  useEffect(() => {
    const checkFirstLogin = async () => {
      const response = await fetch("/api/info-user")
      const data = await response.json();
      setInfoUser(data);
      setIsFirstTime(data.firstLogin);
    }

    if(reload){
      checkFirstLogin();
      setReload(false);
    }

    checkFirstLogin()
  }, [user?.id, reload, user])
  
  if(!user || !infoUser){
    return <LoaderProfile/>
  }

  if(isFirstTime){
    return <p>PRIMERA VISITA</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
      <div>
        <LinkProfile/>


        {/* Profile Info */}
        <div>
          Profile info
        </div>

        {/* Profile Info */}
        <div className="mt-20 flex flex-col items-center">
          <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
            <TreePalm className="h-20 w-20" strokeWidth={1}/>
            <p>Enseña al mundo quien eres tú.</p>
            <p>Añade links para comenzar.</p>
          </div>
        </div>
      </div>

      <div>
        {/*Profile preview*/}
        <p>Vita previa del perfil</p>
      </div>

    </div>
  )
}
