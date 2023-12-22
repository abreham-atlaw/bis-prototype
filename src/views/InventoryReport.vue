<template>
  <div>
    <h2>Inventory Report</h2>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in inventory" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="downloadReport">Download Report</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

export default defineComponent({
  setup() {
    const inventory = ref<InventoryItem[]>([
      { id: 1, name: 'Item 1', quantity: 10 },
      { id: 2, name: 'Item 2', quantity: 5 },
      { id: 3, name: 'Item 3', quantity: 8 },
    ]);

    const downloadReport = () => {
      // Implement your logic to download the report here
      // You can access the inventory data using inventory.value
      // You can generate a report in any format (e.g., CSV, PDF) and initiate the download
    };

    return {
      inventory,
      downloadReport
    };
  }
});
</script>

<style scoped>
/* Add your custom styles here */
</style>

