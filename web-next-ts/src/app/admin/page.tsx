"use client"

import { useEffect, useState } from "react";

import DisplayAdmin from "@/components/DisplayAdmin";
import SidebarAdmin from "@/components/SidebarAdmin";
import SidebarTriggerAdmin from "@/components/SidebarTriggerAdmin";
import { ActiveOptionEnum, FormStatusEnum } from "@/libs/enum";
import { BlogData } from "@/libs/type";

export default function AdminPage(): JSX.Element {
  // UI state
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [formStatus, setFormStatus] = useState<FormStatusEnum>(FormStatusEnum.NONE)

  // Data state
  const [count, setCount] = useState<number>(60);
  const [data, setData] = useState<BlogData>([])

  // UI state can change data
  const [search, setSearch] = useState<string>("")
  const [limit, setLimit] = useState<number>(10)
  const [page, setPage] = useState<number>(1)
  const [activeOption, setActiveOption] = useState<ActiveOptionEnum>(ActiveOptionEnum.BLOGTAG)

  // UI handle
  const handleShowMenu = (): void => setShowMenu(true)
  const handleCloseMenu = (): void => setShowMenu(false)
  const handleFormStatus = (status: FormStatusEnum): void => setFormStatus(status)

  // Data handle
  const handleSearch = (text: string): void => setSearch(text)

  // UI can change data handle
  const handlePageChange = (newPage: number): void => setPage(newPage);
  const handleActiveOption = (option: ActiveOptionEnum): void => setActiveOption(option)
  const handleTotalPage = (): number => Math.ceil(count / limit)

  // Update data whenever UI data is changed
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCount = await fetch(`http://localhost:14003/api/${activeOption}/count?search=${search}`)
        const resultCount = await responseCount.json()
        setCount(resultCount.data) // Ensure this matches your expected structure

        const responseData = await fetch(`http://localhost:14003/api/${activeOption}?search=${search}&limit=${limit}&page=${page}`)
        const resultData = await responseData.json()
        setData(resultData.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [search, limit, page, activeOption])

  return (
    <>
      <SidebarTriggerAdmin handleShowMenu={handleShowMenu} />

      <SidebarAdmin
        showMenu={showMenu} handleCloseMenu={handleCloseMenu}
        handleActiveOption={handleActiveOption}
      />

      <DisplayAdmin
        formStatus={formStatus} handleFormStatus={handleFormStatus}
        data={data}
        handleSearch={handleSearch}
        page={page} handlePageChange={handlePageChange}
        handleTotalPage={handleTotalPage}
      />
    </>
  )
}
