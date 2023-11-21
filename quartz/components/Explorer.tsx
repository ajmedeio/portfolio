import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import explorerStyle from "./styles/explorer.scss"

// @ts-ignore
import script from "./scripts/explorer.inline"
import { ExplorerNode, FileNode, Options } from "./ExplorerNode"
import { QuartzPluginData } from "../plugins/vfile"

// Options interface defined in `ExplorerNode` to avoid circular dependency
const defaultOptions = {
  title: "Tree View",
  folderClickBehavior: "link",
  folderDefaultState: "open",
  useSavedState: false,
  sortFn: (a, b) => {
    return 0
  },
  filterFn: (node) => node.name !== "tags",
  order: ["filter", "map", "sort"],
} satisfies Options

export default ((userOpts?: Partial<Options>) => {
  // Parse config
  const opts: Options = { ...defaultOptions, ...userOpts }

  // memoized
  let fileTree: FileNode
  let jsonTree: string

  function constructFileTree(allFiles: QuartzPluginData[]) {
    if (!fileTree) {
      // Construct tree from allFiles
      fileTree = new FileNode("")
      allFiles.forEach((file) => fileTree.add(file, 1))

      /**
       * Keys of this object must match corresponding function name of `FileNode`,
       * while values must be the argument that will be passed to the function.
       *
       * e.g. entry for FileNode.sort: `sort: opts.sortFn` (value is sort function from options)
       */
      const functions = {
        map: opts.mapFn,
        sort: opts.sortFn,
        filter: opts.filterFn,
      }

      // Execute all functions (sort, filter, map) that were provided (if none were provided, only default "sort" is applied)
      if (opts.order) {
        // Order is important, use loop with index instead of order.map()
        for (let i = 0; i < opts.order.length; i++) {
          const functionName = opts.order[i]
          if (functions[functionName]) {
            // for every entry in order, call matching function in FileNode and pass matching argument
            // e.g. i = 0; functionName = "filter"
            // converted to: (if opts.filterFn) => fileTree.filter(opts.filterFn)

            // @ts-ignore
            // typescript cant statically check these dynamic references, so manually make sure reference is valid and ignore warning
            fileTree[functionName].call(fileTree, functions[functionName])
          }
        }
      }

      // Get all folders of tree. Initialize with collapsed state
      const folders = fileTree.getFolderPaths(opts.folderDefaultState === "collapsed")

      // Stringify to pass json tree as data attribute ([data-tree])
      jsonTree = JSON.stringify(folders)
    }
  }

  function Explorer({ allFiles, displayClass, fileData }: QuartzComponentProps) {
    constructFileTree(allFiles)
    return (
      <div class={`explorer ${displayClass ?? ""}`}>
        <button
          type="button"
          id="explorer"
          data-behavior={opts.folderClickBehavior}
          data-collapsed={opts.folderDefaultState}
          data-savestate={opts.useSavedState}
          data-tree={jsonTree}
          style="cursor: initial"
        >
          <h1>{opts.title}</h1>
        </button>
        <div id="explorer-content">
          <ul class="overflow" id="explorer-ul">
            <ExplorerNode node={fileTree} opts={opts} fileData={fileData} />
            <li id="explorer-end" />
          </ul>
        </div>
      </div>
    )
  }
  Explorer.css = explorerStyle
  Explorer.afterDOMLoaded = script
  return Explorer
}) satisfies QuartzComponentConstructor
