<template>
  <header class="bg-gray-800 py-4 px-6 flex justify-between items-center">
    <h1 class="text-white text-lg font-bold">Mart Bakery & Pastry Management System</h1>
    <button class="text-white" @click="signOut">Sign Out</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const signOut = () => {
  // Implement your sign out logic here
}

export default defineComponent({
  setup() {
    return {
      signOut
    }
  }
})
</script>

<style scoped>
/* Add your custom styles here */
</style>

