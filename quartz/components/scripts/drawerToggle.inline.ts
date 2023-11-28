const toggle = () => {
    console.log("Toggled drawer")
    const leftSidebar = document.querySelector(".left.sidebar")
    if (leftSidebar?.classList.toggle("open")) {
        sessionStorage.setItem("isDrawerOpen", "true")
    } else {
        sessionStorage.setItem("isDrawerOpen", "false")
    }
}

const isDrawerOpenAccordingToSessionStorage = () => {
    const leftSidebar = document.querySelector(".left.sidebar")
    const sessionStorageIsDrawerOpen = sessionStorage.getItem("isDrawerOpen")
    if (sessionStorageIsDrawerOpen === null) {
        let isDrawerOpen: any = leftSidebar?.classList.contains("open")
        if (isDrawerOpen === undefined || isDrawerOpen === false) {
            isDrawerOpen = "false"
        } else {
            isDrawerOpen = "true"
        }
        sessionStorage.setItem("isDrawerOpen", isDrawerOpen)
        return isDrawerOpen
    } else {
        return sessionStorageIsDrawerOpen
    }
}

const tabletBreakpoint = 1000
document.addEventListener("nav", () => {
    const toggleBtn = document.getElementById("drawer-toggle") as HTMLElement
    const leftSidebar = document.querySelector(".left.sidebar")

    if (window.innerWidth > tabletBreakpoint) {
        console.log(["isDrawer open according to session storage", isDrawerOpenAccordingToSessionStorage()])
        if (isDrawerOpenAccordingToSessionStorage() === "true" && !(leftSidebar?.classList.contains("open"))) {
            leftSidebar?.classList.add("open")
        }
    }

    toggleBtn.removeEventListener("click", toggle)
    toggleBtn.addEventListener("click", toggle)
})
