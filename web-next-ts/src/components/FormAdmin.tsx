import { FormStatusEnum } from "@/libs/enum"
import { FormEvent } from "react"

import { ToTitle } from "@/libs/string"
import { Button, FloatingLabel } from "flowbite-react"

type Props = {
  formStatus: FormStatusEnum
  handleFormStatus: (status: FormStatusEnum) => void
}

type ChildProps = {
  formStatus: FormStatusEnum
}

function BlogTag(props: ChildProps): JSX.Element {
  const InsertComponent = (): JSX.Element => {
    return (
      <div>
        <FloatingLabel variant="outlined" label="Name" />
      </div>
    )
  }

  const UpdateComponent = (): JSX.Element => {
    return (
      <div>
        <FloatingLabel variant="outlined" label="Id" />
        <FloatingLabel variant="outlined" label="Name" />
      </div>
    )
  }

  const RemoveComponent = (): JSX.Element => {
    return (
      <div>
        <FloatingLabel variant="outlined" label="Id" disabled={true} />
        <FloatingLabel variant="outlined" label="Name" disabled={true} />
      </div>
    )
  }

  return (
    <div>
      {props.formStatus === FormStatusEnum.INSERT &&
        <InsertComponent />
      }

      {props.formStatus === FormStatusEnum.UPDATE &&
        <UpdateComponent />
      }

      {props.formStatus === FormStatusEnum.REMOVE &&
        <RemoveComponent />
      }
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
            <BlogTag formStatus={props.formStatus} />

            <div className="flex space-between">
              <Button onClick={() => props.handleFormStatus(FormStatusEnum.NONE)}>Close</Button>
              <Button onClick={() => props.handleFormStatus(FormStatusEnum.INSERT)} type="submit">{ToTitle(props.formStatus)}</Button>
            </div>
          </div>
        </form>
      }
    </>
  )
}
