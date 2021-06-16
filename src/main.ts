import { createApp } from 'vue'

import { ConfigProvider, Button, Cell, Icon, Toast, Lazyload } from 'vant'

import App from './App.vue'

import router from './router'

function mount() {
  createApp(App)
    .use(ConfigProvider)
    .use(Button)
    .use(Cell)
    .use(Icon)
    .use(Lazyload)
    .use(Toast)
    .use(router)
    .mount('#app')
}

async function bootstrap() {
  // pass
}

// 启动应用
bootstrap().then(mount)

if (import.meta.env.DEV) {
  const mockFiles = import.meta.globEager('./mocks/**/*.mock.ts')
  console.log('[app]', 'include mock files:', Object.keys(mockFiles))
}
