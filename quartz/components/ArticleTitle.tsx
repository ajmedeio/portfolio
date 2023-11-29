import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ArticleTitle({ fileData, displayClass }: QuartzComponentProps) {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={`article-title ${displayClass ?? ""}`}>{title}</h1>
  } else {
    return null
  }
}
ArticleTitle.css = `
.article-title {
  margin: 0;
  margin-top: 16px
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
