"use client";

import { ActiveOptionEnum } from "@/libs/enum";
import { Drawer, Sidebar } from "flowbite-react";
import { FaFile, FaTag } from "react-icons/fa6";

type Props = {
  showMenu: boolean
  handleCloseMenu: () => void
  handleActiveOption: (option: ActiveOptionEnum) => void
}

export default function SidebarAdmin(props: Props): JSX.Element {
  return (
    <>
      <Drawer open={props.showMenu} onClose={() => props.handleCloseMenu()}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="hover:cursor-pointer" icon={FaTag} onClick={() => props.handleActiveOption(ActiveOptionEnum.BLOGTAG)}>
                      Blog Tag
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:cursor-pointer" icon={FaFile} onClick={() => props.handleActiveOption(ActiveOptionEnum.BLOGFILE)}>
                      Blog File
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

