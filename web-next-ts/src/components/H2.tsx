import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function H2(props: Props) {
  return (
    <h1 className="text-center text-xl font-bold">{props.children}</h1>
  )
}
