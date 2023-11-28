import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const splashScreenScript = () => {
    return `
        if (sessionStorage.getItem('has-seen-splash') === null) {
            sessionStorage.setItem('has-seen-splash', 'false')
        }
        var splashScreen = document.querySelector('#splash-screen');
        if (sessionStorage.getItem('has-seen-splash') === 'false') {
            splashScreen.classList.remove('hidden-splash')
        }
        splashScreen.addEventListener('click', function() {
            splashScreen.style.opacity = 0;
            sessionStorage.setItem('has-seen-splash', 'true')
            setTimeout(function() {
                splashScreen.classList.add('hidden-splash')
            }, 300)
        })
    `
}

function SplashScreen() {
  return (
    <div id="splash-screen" class="hidden-splash" spa-preserve="true">
        {/* @ts-ignore */}
        <dotlottie-player id="splash-screen-animation" src="/assets/splash-screen-animation.lottie" background="transparent" speed="1" direction="1" mode="normal" autoplay></dotlottie-player>
        <div id="enter-site">(click anywhere to enter)</div>
        <script>{splashScreenScript()}</script>
    </div>
  )
}

export default (() => SplashScreen) satisfies QuartzComponentConstructor
