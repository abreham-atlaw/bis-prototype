<template>
    <div>
      <h2 class="text-3xl">Product Management</h2>
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
                  Ingredients
                </th>
                <th
                  class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
                >
                  
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
                  {{ i.ingredients.join(", ") }}
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                >
                  <router-link to="/product" href="/" class="text-indigo-600 hover:text-indigo-900 mr-16" @click="() => {addMode = true; addItem(i)}">Edit Ingredients</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
  
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  interface InventoryItem {
    id: number;
    name: string;
    ingredients: string[];
  }
  
  export default defineComponent({
    setup() {
      const inventory = ref<InventoryItem[]>([
        { id: 1, name: 'Bread Type 1', ingredients: ["Flour", "Vegetable Oil"] },
        { id: 3, name: 'Break Type 2', ingredients: ["Flour", "Vegetable Oil"] },
        { id: 2, name: 'Black Forest Cake', ingredients: ["Flour", "Milk", "Eggs", "Vegetable Oil"] },
        { id: 3, name: 'Muffins', ingredients: ["Flour", "Milk", "Eggs", "Vegetable Oil"] },
        { id: 3, name: 'Cookies', ingredients: ["Flour", "Milk", "Eggs", "Butter"] },
      ]);
  
      const newItem = ref<InventoryItem>({ id: 0, name: '', quantity: 0 });
      const showAddForm = ref(false);
      const showEditForm = ref(false);
  
      let itemToEdit = ref<InventoryItem>(inventory.value[0]);
      let itemToAdd = ref<InventoryItem>(inventory.value[0]);
      let addValue = ref(0);
      let addMode = ref(true);
  
      const addItem = (item: InventoryItem) => {
        addValue.value = 0;
        open.value = true;
        itemToAdd.value = item;
      };
  
      const editItem = (item: InventoryItem) => {
        itemToEdit.value = item;
        editOpen.value=true;
      };
  
      const commitAdd = () => {
        if(addMode.value){
          itemToAdd.value.quantity += Number.parseFloat(addValue.value);
  
        }
        else{
          itemToAdd.value.quantity -= Number.parseFloat(addValue.value);
        }
      }
  
      const updateItem = () => {
        const index = inventory.value.findIndex(item => item.id === itemToEdit.value.id);
        if (index !== -1) {
          inventory.value[index] = { ...itemToEdit.value };
          itemToEdit.value = { id: 0, name: '', quantity: 0 };
          showEditForm.value = false;
        }
      };
  
      const deleteItem = (item: InventoryItem) => {
        const index = inventory.value.findIndex(i => i.id === item.id);
        if (index !== -1) {
          inventory.value.splice(index, 1);
        }
      };
  
      const toggleAddForm = () => {
        showAddForm.value = !showAddForm.value;
      };
  
      const editOpen = ref(false)
      const open = ref(false)
  
      return {
        inventory,
        newItem,
        itemToEdit,
        showAddForm,
        showEditForm,
        addItem,
        editItem,
        updateItem,
        deleteItem,
        toggleAddForm,
        editOpen: editOpen,
        open,
        commitAdd,
        addValue,
        addMode
      };
    }
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  
  