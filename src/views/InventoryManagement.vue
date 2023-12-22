<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Inventory Management
    </h3>
    <div class="mt-6">
      <div class="my-6 overflow-hidden bg-white rounded-md shadow">
        <table class="w-full text-left border-collapse">
          <thead class="border-b">
            <tr>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
              >
                Ingredient
              </th>
              <th
                class="px-5 py-3 text-sm font-medium text-gray-100 uppercase bg-indigo-800"
              >
                Remaining Quantity
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
                {{ i.quantity }} {{  i.unit }}
              </td>
              <td
                class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
              >
                <a href="#" class="text-indigo-600 hover:text-indigo-900 mr-16" @click="() => addItem(i)">Add</a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900" @click="() => editItem(i)">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div
      :class="`modal ${
        !editOpen && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="editOpen = false"
      />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">
              Edit Inventory Item
            </p>
            <div class="z-50 cursor-pointer modal-close" @click="editOpen = false">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="username">Name</label>
                <input
                  v-model="itemToEdit.name"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                >
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress">Remaining Quantity</label>
                <input
                  v-model="itemToEdit.quantity"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="email"
                >
              </div>
            </div>
          </form>

          <!-- Footer -->
          <div class="flex justify-end pt-10">
            <button
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              @click="editOpen = false"
            >
              Close
            </button>
            <button
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="editOpen = false"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      :class="`modal ${
        !open && 'opacity-0 pointer-events-none'
      } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
    >
      <div
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
        @click="open = false"
      />

      <div
        class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
      >
        <div
          class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
        >
          <svg
            class="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal -->
        <div class="px-6 py-4 text-left modal-content">
          <!-- Title -->
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl font-bold">
              Modal Title
            </p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false">
              <svg
                class="text-black fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                />
              </svg>
            </div>
          </div>

          <!-- Body -->
          <form @submit.prevent="() => {}">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="emailAddress">Quantity</label>
                <input
                  v-model="addValue"
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="email"
                >
              </div>
            </div>
          </form>


          <!-- Footer -->
          <div class="flex justify-end pt-2">
            <button
              class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
              @click="open = false"
            >
              Close
            </button>
            <button
              class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
              @click="() => {commitAdd(); open = false}"
            >
              Save
            </button>
          </div>
        </div>
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
  quantity: number;
  unit: string;
}

export default defineComponent({
  setup() {
    const inventory = ref<InventoryItem[]>([
      { id: 1, name: 'Flour', quantity: 1, unit: "kgs" },
      { id: 2, name: 'Sugar', quantity: 5, unit: "kgs" },
      { id: 3, name: 'Egg', quantity: 8, unit: "eggs" },
      { id: 3, name: 'Milk', quantity: 5, unit: "ltr" },
      { id: 3, name: 'Vegetable Oil', quantity: 3, unit: "ltr" },
    ]);

    const showAddForm = ref(false);
    const showEditForm = ref(false);

    let itemToEdit = ref<InventoryItem>(inventory.value[0]);
    let itemToAdd = ref<InventoryItem>(inventory.value[0]);
    let addValue = ref(0);

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
      itemToAdd.value.quantity += Number.parseFloat(addValue.value);
    }

    const toggleAddForm = () => {
      showAddForm.value = !showAddForm.value;
    };

    const editOpen = ref(false)
    const open = ref(false)

    return {
      inventory,
      itemToEdit,
      showAddForm,
      showEditForm,
      addItem,
      editItem,
      toggleAddForm,
      editOpen: editOpen,
      open,
      commitAdd,
      addValue
    };
  }
});
</script>

<style scoped>
/* Add your custom styles here */
</style>

