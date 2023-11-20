import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir}>
      <h1 class={`page-title ${displayClass ?? ""}`}>
        <img id="profile-circle" alt="profile" src="/assets/profile-circle.png"/>
        <a href={baseDir}>{title}</a>
      </h1>
    </a>
  )
}

PageTitle.css = `
#profile-circle {
  margin-right: 8px;
  min-width: 72px;
  min-height: 72px;
  width: 72px;
  height: 72px;
}
.page-title {
  display: flex;
  align-items: center;
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
