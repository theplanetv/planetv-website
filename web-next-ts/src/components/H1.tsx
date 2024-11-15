import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function H1(props: Props) {
  return (
    <h1 className="text-center text-3xl font-bold">{props.children}</h1>
  )
}
