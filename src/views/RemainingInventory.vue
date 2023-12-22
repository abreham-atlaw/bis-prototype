<template>
  <div>
    <h2 class="text-2xl">Ingredients</h2>
    <div class="mt-6">
      <div class="my-6 overflow-hidden bg-white rounded-md shadow">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-red-800"
              >
                Ingredient
              </th>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-red-800"
              >
                Remaining Quantity
              </th>
              <th
                class="px-5 text-right py-3 text-sm font-medium text-gray-100 uppercase bg-red-800"
              >
                Usage(week)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, index) in inventory"
              :key="index"
              class="hover:bg-gray-200"
            >
              <td class="px-6 py-4 text-lg text-gray-700 border-b">
                {{ i.name }}
              </td>
              <td class="px-6 py-4 text-gray-500 border-b">
                {{ i.quantity }}
              </td>
              <td
                class="px-6 py-4 text-sm text-right font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                {{i.daily}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    <h2 class="text-2xl">Products</h2>

    <div class="mt-6">
      <div class="my-6 overflow-hidden bg-white rounded-md shadow">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
              >
                Product
              </th>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
              >
                Remaining Quantity
              </th>
              <th
                class="px-5 py-3 text-right text-sm font-medium text-gray-100 uppercase bg-indigo-800"
              >
                Sales(week)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(i, index) in products"
              :key="index"
              class="hover:bg-gray-200"
            >
              <td class="px-6 py-4 text-lg text-gray-700 border-b">
                {{ i.name }}
              </td>
              <td class="px-6 py-4 text-gray-500 border-b">
                {{ i.quantity }}
              </td>
              <td
                class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                {{ i.daily }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface InventoryItem {
  id: number;
  name: string;
  quantity: number,
  daily: string
}

export default defineComponent({
  setup() {
    const inventory = ref<InventoryItem[]>([
      { id: 1, name: 'Flour', quantity: "10 kgs", daily: "100 kgs" },
      { id: 2, name: 'Sugar', quantity: "5 kgs", daily: "50 kgs"  },
      { id: 3, name: 'Egg', quantity: "8 units", daily: "200 eggs"  },
      { id: 3, name: 'Milk', quantity: "5 ltr", daily: "50 ltr"  },
      { id: 3, name: 'Vegetable Oil', quantity: "3 ltr", daily: "30 ltr"  },
    ]);

    const products = ref<InventoryItem[]>([
      { id: 1, name: 'Bread Type 1', quantity: 10, daily: "500" },
      { id: 2, name: 'Bread Type 2', quantity: 5, daily: "1000"  },
      { id: 3, name: 'Black Forest Cake', quantity: 8, daily: "300"  },
      { id: 3, name: 'Muffins', quantity: 5, daily: "100"  },
    ]);

    return {
      inventory,
      products
    };
  }
});
</script>

<style scoped>
/* Add your custom styles here */
</style>

