import { QuartzTransformerPlugin } from "../types"
import matter from "gray-matter"

export const Unpublished: QuartzTransformerPlugin = () => {
  return {
    name: "Unpublished",
    textTransform(_ctx, src) {
      src = src.toString()
      const { data, content } = matter(src.toString());
      const dateRegex = /(\d{4}-\d{2}-\d{2})/
      if (dateRegex.test(data.publish) && new Date(data.publish) > new Date()) {
        return matter.stringify(`Publishing on ${data.publish}`, data)
      } else {
        return src
      }
    },
  }
}
