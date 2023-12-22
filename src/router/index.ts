import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import InventoryManagement from '@/views/InventoryManagement.vue';
import InventoryReport from '@/views/InventoryReport.vue';
import RemainingInventory from '@/views/RemainingInventory.vue';
import SalesRegistration from '@/views/SalesRegistration.vue'
import DashboardView from '@/views/DashboardView.vue';
import EditProductView from '@/views/EditProductView.vue';
import ProductIngredientView from '@/views/ProductIngredientsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/",
      component: DashboardView,
      children: [
        {
          path: "/",
          component: Dashboard
        }, 
        {
          path: "/management",
          component: InventoryManagement
        },
        {
          path: "/report",
          component: InventoryReport
        },
        {
          path: "/remaining",
          component: RemainingInventory
        },
        {
          path: "/sales",
          component: SalesRegistration
        },
        {
          path: "/product",
          component: EditProductView
        },
        {
          path: "/ingredients",
          component: ProductIngredientView
        }

      ]
    },
    
  ]
})

export default router
