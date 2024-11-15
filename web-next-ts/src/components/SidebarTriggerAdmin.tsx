import { FaList } from "react-icons/fa6";
import { Button } from "flowbite-react";

type Props = {
  handleShowMenu: () => void
}

export default function SidebarTriggerAdmin(props: Props): JSX.Element {
  return (
    <div className="top-0 left-0 sticky p-6">
      <Button onClick={() => props.handleShowMenu()}><FaList /></Button>
    </div>
  )
}
