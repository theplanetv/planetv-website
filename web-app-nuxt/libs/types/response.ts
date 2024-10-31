import type { BlogTag } from "@/libs/types/types"

export type BlogData = BlogTag[]

export type ResponseData = {
  message: string
  data: BlogData | number
}