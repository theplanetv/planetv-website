"use client"

import { FormStatusEnum } from "@/libs/enum";
import { BlogData, BlogTag } from "@/libs/type";
import { Checkbox, Table, Pagination } from "flowbite-react";
import { useState, useRef } from "react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import FormAdmin from "./FormAdmin";

type Props = {
  formStatus: FormStatusEnum
  handleFormStatus: (newStatus: FormStatusEnum) => void
  data: BlogData
  handleSearch: (text: string) => void
  page: number
  handlePageChange: (newPage: number) => void
  handleTotalPage: () => number
}

export default function DisplayAdmin(props: Props): JSX.Element {
  const [search, setSearch] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.handleSearch(search)
    }
  }

  const handleBlur = () => {
    if (!inputRef.current?.contains(document.activeElement)) {
      setSearch("")
    }
  }

  return (
    <div className="mx-auto w-fit flex flex-col gap-y-10 items-center">
      <FormAdmin formStatus={props.formStatus} handleFormStatus={props.handleFormStatus} />

      <Pagination currentPage={props.page} totalPages={props.handleTotalPage()} onPageChange={props.handlePageChange} />

      <div className="w-full flex justify-between">
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder="Search"
          className="w-200 p-2 border rounded"
        />

        <button
          className="p-2 border border-green-500 rounded bg-green-500 items-center group hover:text-green-500 hover:bg-white"
          onClick={() => props.handleFormStatus(FormStatusEnum.INSERT)}
        >
          <FaPlusCircle className="text-md text-white group-hover:text-green-500" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Index</Table.HeadCell>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {props.data.length > 0 &&
              props.data.map((row: BlogTag, index: number) => {
                return (
                  <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>
                      {index}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {row.id}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {row.name}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-x-2">
                      <FaEdit className="hover:text-blue-500 hover:cursor-pointer" />
                      <FaTrash className="hover:text-red-500 hover:cursor-pointer" />
                    </Table.Cell>
                  </Table.Row>
                )
              })
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
