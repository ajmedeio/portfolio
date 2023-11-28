// @ts-ignore
import script from "./scripts/drawerToggle.inline"
import style from "./styles/drawerToggle.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function DrawerToggle(opts: QuartzComponentProps) {
  return (
    <div id="drawer-toggle">
      <svg id="open-btn" viewBox="0 0 100 80" width="24" height="24">
        <rect width="100" height="20" rx="8"></rect>
        <rect y="30" width="100" height="20" rx="8"></rect>
        <rect y="60" width="100" height="20" rx="8"></rect>
      </svg>
    </div>
  )
}

DrawerToggle.afterDOMLoaded = script
DrawerToggle.css = style

export default (() => DrawerToggle) satisfies QuartzComponentConstructor
