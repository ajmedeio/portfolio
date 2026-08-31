import { FullSlug } from "../../util/path"

// Persist scroll offset across SPA navigations so the timeline scrolls
// relative to the current view, not from the far left.
let persistedScrollOffset = 0

function setupTimeline(slug: FullSlug) {
  const container = document.getElementById("timeline-container")
  if (!container) return

  const track = container.querySelector<HTMLElement>(".timeline-track")
  if (!track) return

  const nodes = container.querySelectorAll<HTMLAnchorElement>(".timeline-node")
  if (nodes.length === 0) return

  // Find the active node matching the current slug
  let activeIndex = -1
  nodes.forEach((node, i) => {
    const nodeSlug = node.dataset.slug
    node.classList.remove("active", "glow-1", "glow-2", "glow-3", "glow-4")

    if (nodeSlug === slug) {
      activeIndex = i
      node.classList.add("active")
    }
  })

  // Apply glow to neighbors — fading with distance
  if (activeIndex >= 0) {
    const glowLevels = 4
    for (let dist = 1; dist <= glowLevels; dist++) {
      const leftIdx = activeIndex - dist
      const rightIdx = activeIndex + dist
      if (leftIdx >= 0) {
        nodes[leftIdx].classList.add(`glow-${dist}`)
      }
      if (rightIdx < nodes.length) {
        nodes[rightIdx].classList.add(`glow-${dist}`)
      }
    }

    // Create/update the glow gradient on the timeline line
    const glowLine = container.querySelector<HTMLElement>(".timeline-glow-line")
    const activeNode = nodes[activeIndex]
    if (glowLine && activeNode) {
      const trackWidth = track.scrollWidth
      const centerPx = activeNode.offsetLeft + activeNode.offsetWidth / 2
      const centerPct = (centerPx / trackWidth) * 100
      const spread = 15 // percentage spread of the glow

      glowLine.style.background = `linear-gradient(
        to right,
        transparent ${Math.max(0, centerPct - spread)}%,
        var(--tertiary) ${centerPct}%,
        transparent ${Math.min(100, centerPct + spread)}%
      )`
      glowLine.classList.add("active")
    }
  }

  // ── Transform-based horizontal scrolling ──
  // We use translateX on the track instead of native scroll so that the
  // container can use overflow-x:clip + overflow-y:visible, which allows
  // Quartz wiki-style popovers to escape vertically without being clipped.

  // Start from the persisted offset (where the user was last looking)
  let scrollOffset = persistedScrollOffset
  const getMaxOffset = () => Math.max(0, track.scrollWidth - container.clientWidth)

  function applyScroll(smooth = false) {
    scrollOffset = Math.max(0, Math.min(scrollOffset, getMaxOffset()))
    persistedScrollOffset = scrollOffset
    if (smooth) {
      track.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    } else {
      track.style.transition = "none"
    }
    track.style.transform = `translateX(-${scrollOffset}px)`
  }

  // Center the active node — smooth when navigating (relative scroll),
  // but from the persisted position, not from 0.
  if (activeIndex >= 0) {
    const activeNode = nodes[activeIndex]
    requestAnimationFrame(() => {
      const containerWidth = container.clientWidth
      const nodeLeft = activeNode.offsetLeft
      const nodeWidth = activeNode.offsetWidth
      const targetOffset = nodeLeft - containerWidth / 2 + nodeWidth / 2

      // If this is a fresh page load (no prior position), jump instantly.
      // If navigating between pages, scroll smoothly from current position.
      const hasExistingPosition = persistedScrollOffset > 0
      scrollOffset = targetOffset
      applyScroll(hasExistingPosition)
    })
  }

  // ── Drag to scroll ──
  let isDragging = false
  let startX = 0
  let dragStartOffset = 0
  let hasDragged = false

  container.addEventListener("mousedown", (e: MouseEvent) => {
    isDragging = true
    hasDragged = false
    startX = e.pageX
    dragStartOffset = scrollOffset
    container.style.cursor = "grabbing"
    container.style.userSelect = "none"
  })

  container.addEventListener("mousemove", (e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const dx = e.pageX - startX
    if (Math.abs(dx) > 3) hasDragged = true
    scrollOffset = dragStartOffset - dx
    applyScroll()
  })

  const stopDragging = () => {
    if (!isDragging) return
    isDragging = false
    container.style.cursor = "grab"
    container.style.userSelect = ""
  }

  container.addEventListener("mouseup", stopDragging)
  container.addEventListener("mouseleave", stopDragging)

  // Prevent click navigation when user was dragging
  container.addEventListener(
    "click",
    (e: MouseEvent) => {
      if (hasDragged) {
        e.preventDefault()
        e.stopPropagation()
        hasDragged = false
      }
    },
    true,
  )

  // ── Wheel to scroll horizontally ──
  container.addEventListener(
    "wheel",
    (e: WheelEvent) => {
      // Use whichever axis has more delta (supports trackpads and mice)
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (delta !== 0) {
        e.preventDefault()
        scrollOffset += delta
        applyScroll()
      }
    },
    { passive: false },
  )

  // ── Touch support ──
  let touchStartX = 0
  let touchStartOffset = 0

  container.addEventListener("touchstart", (e: TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].pageX
      touchStartOffset = scrollOffset
    }
  }, { passive: true })

  container.addEventListener("touchmove", (e: TouchEvent) => {
    if (e.touches.length === 1) {
      const dx = e.touches[0].pageX - touchStartX
      scrollOffset = touchStartOffset - dx
      applyScroll()
    }
  }, { passive: true })
}

document.addEventListener("nav", (e: unknown) => {
  const event = e as CustomEvent<{ url: FullSlug }>
  setupTimeline(event.detail.url)
})
