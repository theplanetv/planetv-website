"use client";

import { FormStatusEnum } from "@/libs/enum";
import { BlogData, BlogTag } from "@/libs/type";
import {
  Checkbox,
  Table,
  Pagination,
  Button,
  FloatingLabel,
} from "flowbite-react";
import { useState, useRef } from "react";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";
import FormAdmin from "./FormAdmin";

type Props = {
  formStatus: FormStatusEnum;
  handleFormStatus: (newStatus: FormStatusEnum) => void;
  data: BlogData;
  handleSearch: (text: string) => void;
  page: number;
  handlePageChange: (newPage: number) => void;
  handleTotalPage: () => number;
};

export default function DisplayAdmin(props: Props): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.handleSearch(search);
    }
  };

  const handleBlur = () => {
    if (!inputRef.current?.contains(document.activeElement)) {
      setSearch("");
    }
  };

  return (
    <div className="mx-auto w-fit py-10 flex flex-col gap-y-10 items-center">
      <FormAdmin
        formStatus={props.formStatus}
        handleFormStatus={props.handleFormStatus}
      />

      <Pagination
        currentPage={props.page}
        totalPages={props.handleTotalPage()}
        onPageChange={props.handlePageChange}
      />

      <div className="w-full flex justify-between">
        <FloatingLabel
          variant="outlined"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          type="text"
          className="w-200"
        />

        <Button
          color="success"
          onClick={() => props.handleFormStatus(FormStatusEnum.INSERT)}
        >
          <div className="flex items-center gap-x-1">
            <FaPlusCircle />
            <span>Insert</span>
          </div>
        </Button>
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
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>

                    <Table.Cell>{index}</Table.Cell>

                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {row.id}
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {row.name}
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex gap-x-2">
                      <Button
                        color="blue"
                        className="flex items-center gap-x-2"
                        onClick={() =>
                          props.handleFormStatus(FormStatusEnum.UPDATE)
                        }
                      >
                        <div className="flex items-center gap-x-1">
                          <FaEdit />
                          <span>Update</span>
                        </div>
                      </Button>
                      <Button
                        color="failure"
                        onClick={() =>
                          props.handleFormStatus(FormStatusEnum.REMOVE)
                        }
                      >
                        <div className="flex items-center gap-x-1">
                          <FaTrash />
                          <span>Remove</span>
                        </div>
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
