import { Metadata } from "next"
import React from "react";


export const metadata: Metadata = {
    title: 'Layout auth',
    description: 'Descripcion Admin'
};

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          { children }
        </div>
        <div className="bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover w-full h-full hidden md:block"></div>
    </div>
  )
}
