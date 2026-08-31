import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"

const p = new DOMParser()
async function mouseEnterHandler(
  this: HTMLLinkElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = this
  const isTimeline = link.closest(".timeline") !== null

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: isTimeline ? "fixed" : "absolute",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      left: `${x}px`,
      top: `${y}px`,
    })
  }

  // For timeline links, check for body-appended popover
  if (isTimeline) {
    const existingPopover = document.querySelector(
      `.popover[data-popover-for="${link.dataset.slug}"]`,
    ) as HTMLElement | null
    if (existingPopover) {
      return setPosition(existingPopover)
    }
  }

  const hasAlreadyBeenFetched = () =>
    [...link.children].some((child) => child.classList.contains("popover"))

  // dont refetch if there's already a popover
  if (!isTimeline && hasAlreadyBeenFetched()) {
    return setPosition(link.lastChild as HTMLElement)
  }

  const thisUrl = new URL(document.location.href)
  thisUrl.hash = ""
  thisUrl.search = ""
  const targetUrl = new URL(link.href)
  const hash = targetUrl.hash
  targetUrl.hash = ""
  targetUrl.search = ""
  // prevent hover of the same page
  if (thisUrl.toString() === targetUrl.toString()) return

  const contents = await fetch(`${targetUrl}`)
    .then((res) => res.text())
    .catch((err) => {
      console.error(err)
    })

  // bailout if another popover exists
  if (!isTimeline && hasAlreadyBeenFetched()) {
    return
  }

  if (!contents) return
  const html = p.parseFromString(contents, "text/html")
  normalizeRelativeURLs(html, targetUrl)
  const elts = [...html.getElementsByClassName("popover-hint")]
  if (elts.length === 0) return

  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverElement.appendChild(popoverInner)
  elts.forEach((elt) => popoverInner.appendChild(elt))

  setPosition(popoverElement)

  if (isTimeline) {
    // Append to body so the popover escapes sidebar stacking contexts
    popoverElement.style.position = "fixed"
    popoverElement.style.zIndex = "9999"
    popoverElement.dataset.popoverFor = link.dataset.slug ?? ""
    document.body.appendChild(popoverElement)

    // Show the popover immediately
    popoverElement.style.visibility = "visible"
    popoverElement.style.opacity = "1"

    // Hide on mouse leave from both link and popover
    let hideTimeout: ReturnType<typeof setTimeout>
    const scheduleHide = () => {
      hideTimeout = setTimeout(() => {
        popoverElement.style.visibility = "hidden"
        popoverElement.style.opacity = "0"
      }, 100)
    }
    const cancelHide = () => clearTimeout(hideTimeout)

    link.addEventListener("mouseleave", scheduleHide)
    popoverElement.addEventListener("mouseenter", cancelHide)
    popoverElement.addEventListener("mouseleave", scheduleHide)
  } else {
    link.appendChild(popoverElement)
  }

  if (hash !== "") {
    const heading = popoverInner.querySelector(hash) as HTMLElement | null
    if (heading) {
      // leave ~12px of buffer when scrolling to a heading
      popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
    }
  }
}

document.addEventListener("nav", () => {
  // Clean up body-appended timeline popovers on navigation
  document.querySelectorAll(".popover[data-popover-for]").forEach((el) => el.remove())

  const links = [...document.getElementsByClassName("internal")] as HTMLLinkElement[]
  for (const link of links) {
    link.removeEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseenter", mouseEnterHandler)
  }
})

