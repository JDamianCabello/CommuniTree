
import { AdminSidebar } from "@/components/Shared"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"


export default function HomeLayout({ children }: {children : React.ReactNode}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="w-full bg-[F3F3F1]">
        <div className="px-3">
          <SidebarTrigger />
        </div>
        {children}
        <Toaster/>
      </main>
    </SidebarProvider>
  )
}
