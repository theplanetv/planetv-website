import { FormStatusEnum } from "@/libs/enum"
import { FormEvent } from "react"

import { ToTitle } from "@/libs/string"
import FloatingLabelText from "./label/FloatingLabelText"

type Props = {
  formStatus: FormStatusEnum
  handleFormStatus: (status: FormStatusEnum) => void
}

function BlogTag(): JSX.Element {
  return (
    <div>
      <FloatingLabelText label="Id" />

      <FloatingLabelText label="Name" />
    </div>
  )
}

export default function FormAdmin(props: Props): JSX.Element {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <>
      {props.formStatus !== FormStatusEnum.NONE &&
        <form onSubmit={handleSubmit}>
          <div className="h-screen">
            <BlogTag />

            <div className="flex space-between">
              <button onClick={() => props.handleFormStatus(FormStatusEnum.NONE)}>Close</button>
              <button onClick={() => props.handleFormStatus(FormStatusEnum.INSERT)} type="submit">{ToTitle(props.formStatus)}</button>
            </div>
          </div>
        </form>
      }
    </>
  )
}
