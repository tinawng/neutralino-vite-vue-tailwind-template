import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/styles/tailwind.css'
import '@/assets/styles/base.postcss'

try {
  // 💫 Auto-updater
  (async () => {
    try {
      let url = NL_UPDATE_MANIFEST_URL
      let manifest = await Neutralino.updater.checkForUpdates(url)

      if (manifest.version != NL_APPVERSION) {
        await Neutralino.updater.install()
        await Neutralino.app.restartProcess()
      }
    } catch (err) {
      console.log(err)
    }
  })()

  Neutralino.init()
} catch (e) { /* Not in neutralino app */ }

const app = createApp(App);
app.mount('#app')
