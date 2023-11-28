// @ts-ignore
import script from "./scripts/pageTitle.inline"
import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class="page-title-container">
      <a href={baseDir}>
        <h1 class={`page-title ${displayClass ?? ""}`}>
          <img id="profile-circle" alt="profile" src="/assets/profile-circle.png"/>
          <a href={baseDir}>{title}</a>
        </h1>
      </a>
    </div>
  )
}

PageTitle.afterDOMLoaded = script
PageTitle.css = `
.page-title-container {
  display: flex;
}
.page-title {
  display: flex;
  align-items: center;
  margin: 0 auto;
}
#profile-circle {
  width: 216px;
  height: 216px;
  margin: 0 auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
