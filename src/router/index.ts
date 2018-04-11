import Vue from 'vue'
import VueRouter, { RouterOptions, RouterMode, Route } from 'vue-router'
import {Position} from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const options: RouterOptions = {
  mode: <RouterMode>process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: (
    to: Route,
    from: Route,
    savedPosition: Position | void) => ({x: (<Position>savedPosition).x, y: 0}),
  routes: routes
}

const Router = new VueRouter(options)

export default Router
