import LayoutDefault from '../layouts/default.vue'
import PageIndex from '../pages/index.vue'
import FourZeroFour from '../pages/404.vue'
import {RouteConfig} from 'vue-router'
const routes : RouteConfig[] = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { path: '', component: PageIndex }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: FourZeroFour
  }
]
export default routes
