import { QuartzEmitterPlugin } from "../types"
import { QuartzComponentProps } from "../../components/types"
import HeaderConstructor from "../../components/Header"
import BodyConstructor from "../../components/Body"
import SearchConstructor from "../../components/Search"
import DarkmodeConstructor from "../../components/Darkmode"
import DrawerToggleConstructor from "../../components/DrawerToggle"
import SplashScreenConstructor from "../../components/SplashScreen"
import { pageResources, renderPage } from "../../components/renderPage"
import { FullPageLayout } from "../../cfg"
import { FilePath, pathToRoot } from "../../util/path"
import { defaultContentPageLayout, sharedPageComponents } from "../../../quartz.layout"
import { Content } from "../../components"
import chalk from "chalk"

export const ContentPage: QuartzEmitterPlugin<Partial<FullPageLayout>> = (userOpts) => {
  const opts: FullPageLayout = {
    ...sharedPageComponents,
    ...defaultContentPageLayout,
    pageBody: Content(),
    ...userOpts,
  }

  const { 
    head: Head,
    header,
    beforeBody,
    pageBody, 
    left, 
    right, 
    footer: Footer 
  } = opts
  const Header = HeaderConstructor()
  const Body = BodyConstructor()
  const Search = SearchConstructor()
  const DrawerToggle = DrawerToggleConstructor()
  const Darkmode = DarkmodeConstructor()
  const SplashScreen = SplashScreenConstructor()

  return {
    name: "ContentPage",
    getQuartzComponents() {
      return [
        Head,
        Header,
        Search,
        Darkmode,
        SplashScreen,
        DrawerToggle,
        Body,
        ...header,
        ...beforeBody,
        pageBody,
        ...left,
        ...right,
        Footer
      ]
    },
    async emit(ctx, content, resources, emit): Promise<FilePath[]> {
      const cfg = ctx.cfg.configuration
      const fps: FilePath[] = []
      const allFiles = content.map((c) => c[1].data)

      let containsIndex = false
      for (const [tree, file] of content) {
        const slug = file.data.slug!
        if (slug === "index") {
          containsIndex = true
        }

        const externalResources = pageResources(pathToRoot(slug), resources)
        const componentData: QuartzComponentProps = {
          fileData: file.data,
          externalResources,
          cfg,
          children: [],
          tree,
          allFiles,
        }

        const content = renderPage(slug, componentData, opts, externalResources)
        const fp = await emit({
          content,
          slug,
          ext: ".html",
        })

        fps.push(fp)
      }

      if (!containsIndex) {
        console.log(
          chalk.yellow(
            `\nWarning: you seem to be missing an \`index.md\` home page file at the root of your \`${ctx.argv.directory}\` folder. This may cause errors when deploying.`,
          ),
        )
      }

      return fps
    },
  }
}
