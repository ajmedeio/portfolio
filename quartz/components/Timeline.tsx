import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/timeline.inline"
import style from "./styles/timeline.scss"
import { simplifySlug } from "../util/path"

interface TimelineEntry {
  title: string
  slug: string
  date: Date
}

export default (() => {
  function Timeline({ fileData, allFiles, displayClass }: QuartzComponentProps) {
    // Collect all files with timeline_date in frontmatter
    const entries: TimelineEntry[] = []

    for (const file of allFiles) {
      const timelineDate = file.frontmatter?.timeline_date
      if (!timelineDate) continue

      const date = new Date(timelineDate)
      if (isNaN(date.getTime())) continue

      const title = file.frontmatter?.title ?? file.slug ?? "Untitled"
      const slug = file.slug ?? ""

      entries.push({ title, slug, date })
    }

    // Sort chronologically
    entries.sort((a, b) => a.date.getTime() - b.date.getTime())

    if (entries.length === 0) return null

    // Compute year markers
    const years = new Set<number>()
    entries.forEach((e) => years.add(e.date.getFullYear()))

    // Build interleaved list of nodes and year markers
    const elements: preact.JSX.Element[] = []
    let lastYear = -1

    for (const entry of entries) {
      const year = entry.date.getFullYear()

      // Insert year marker when year changes
      if (year !== lastYear) {
        elements.push(
          <div class="timeline-year-marker" key={`year-${year}`}>
            <div class="timeline-year-tick"></div>
            <span class="timeline-year-label">{year}</span>
          </div>,
        )
        lastYear = year
      }

      const isActive = simplifySlug(entry.slug as any) === simplifySlug(fileData.slug!)

      elements.push(
        <a
          class={`timeline-node internal${isActive ? " active" : ""}`}
          href={`/${entry.slug}`}
          data-slug={entry.slug}
          key={entry.slug}
          title={`${entry.title} (${entry.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })})`}
        >
          <span class="timeline-year">
            {entry.date.toLocaleDateString("en-US", { month: "short", year: "2-digit" })}
          </span>
          <div class="timeline-dot"></div>
          <span class="timeline-label">{entry.title}</span>
        </a>,
      )
    }

    return (
      <div class={`timeline ${displayClass ?? ""}`}>
        <h3>Chronological View</h3>
        <div id="timeline-container">
          <div class="timeline-track">
            <div class="timeline-line"></div>
            <div class="timeline-glow-line"></div>
            {elements}
          </div>
        </div>
      </div>
    )
  }

  Timeline.css = style
  Timeline.afterDOMLoaded = script

  return Timeline
}) satisfies QuartzComponentConstructor
