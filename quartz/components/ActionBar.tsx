// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import { Darkmode } from "./Darkmode"
import { Search } from "./Search"
import style from "./styles/action-bar.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function ActionBar({ displayClass }: QuartzComponentProps) {
  return (
    <span class={`action-bar ${displayClass ?? ""}`}>
      <Search />
      <Darkmode />
    </span>
  )
}

ActionBar.css = style

export default (() => ActionBar) satisfies QuartzComponentConstructor
