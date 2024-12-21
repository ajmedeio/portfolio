import { QuartzTransformerPlugin } from "../types"
import matter from "gray-matter"

export const Unpublished: QuartzTransformerPlugin = () => {
  return {
    name: "Unpublished",
    textTransform(_ctx, src) {
      src = src.toString()
      const { data, content } = matter(src.toString());
      if (data.publish instanceof Date && data.publish > new Date()) {
        return matter.stringify(`Publishing on ${data.publish}`, data)
      } else {
        return src
      }
    },
  }
}
