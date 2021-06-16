import { createRouter, createWebHistory } from '@ionic/vue-router';

import routes from './routes'

const history = createWebHistory(process.env.BASE_URL)

const router = createRouter({
  history,
  routes
})

export default router
