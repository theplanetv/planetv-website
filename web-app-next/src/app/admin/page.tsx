"use client"

import { SidebarAdmin } from "@/components/sidebar/SidebarAdmin"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function AdminPage(): JSX.Element {
  return (
    <SidebarProvider>
      <SidebarAdmin />

      <div className="bg-red-500"></div>
    </SidebarProvider>
  )
}
