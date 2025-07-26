import { createRouter, createWebHistory} from 'vue-router'
import SidePanel from '../components/SidePanel.vue'
import Dashboard from '../view/Dashboard.vue'
import User from '../view/Users.vue'
import Orders from '../view/Orders.vue'
import Report from '../view/Reports/Report.vue'
import Setting from '../settings/Settings.vue'

const routes = [
   {
      path:'/',
      name:'dashBoard',
      children :[
         {
            path:'',
            component: Dashboard,            
         },
         {
            path:'dashboard',
            component: Dashboard,            
         }
      ]
   },
   {
      path:'/users',
      name:'uses',
      component: User
   },
   {
      path:'/orders',
      name:'orders',
      component: Orders
   },
   {
      path:'/reports',
      name:'reports',
      component: Report
   },
   {
      path:'/settings',
      name:'/settings',
      component: Setting
   }
]
const router = createRouter( {
   history: createWebHistory(),
   routes
})

export default router;
