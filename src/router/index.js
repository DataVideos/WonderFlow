import VueRouter from 'vue-router'

import HomepageView from "@/views/webpage/HomepageView";
import GalleryView from "@/views/webpage/GalleryView";
import ExampleView from "@/views/webpage/ExampleView";
import LiveView from "@/views/LiveView";
import UploadView from "@/views/UploadView";

const routes = [
  {path: '/homepage', component: HomepageView},
  {path: '/gallery', component: GalleryView},
  {path: '/example', component: ExampleView},
  {path: '/upload', component: UploadView},
  {path: '/live', component: LiveView},


  {path: '/', redirect: '/homepage'}
]

export default new VueRouter({
  mode: 'hash',
  routes
})
