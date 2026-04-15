<template>
  <div class="space-y-6">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold">Orders</h1>
        <p class="text-gray-500 text-sm">Manage customer orders</p>
      </div>

      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Search order ID or customer..."
        class="border px-4 py-2 rounded-lg w-full md:w-72 focus:outline-none focus:border-orange-500"
      />
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow overflow-x-auto">
      <table class="w-full text-sm min-w-[700px]">
        <thead class="text-left text-gray-500 border-b">
          <tr>
            <th class="p-4">Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th class="text-right p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="order in filteredOrders"
            :key="order.id"
            class="border-b hover:bg-gray-50"
          >
            <!-- Order ID -->
            <td class="p-4 font-medium">#{{ order.id }}</td>

            <!-- Customer -->
            <td>
              {{ order.customer }}
            </td>

            <!-- Items -->
            <td>{{ order.items }} item(s)</td>

            <!-- Total -->
            <td class="font-semibold">₱{{ order.total.toLocaleString() }}</td>

            <!-- Status -->
            <td>
              <span
                class="px-2 py-1 text-xs rounded-full font-medium"
                :class="statusClass(order.status)"
              >
                {{ order.status }}
              </span>
            </td>

            <!-- Actions -->
            <td class="text-right p-4 space-x-2">
              <button
                class="text-blue-500 hover:underline"
                @click="viewOrder(order)"
              >
                View
              </button>

              <button
                class="text-green-500 hover:underline"
                @click="markShipped(order.id)"
              >
                Ship
              </button>

              <button
                class="text-red-500 hover:underline"
                @click="cancelOrder(order.id)"
              >
                Cancel
              </button>
            </td>
          </tr>

          <tr v-if="filteredOrders.length === 0">
            <td colspan="6" class="text-center py-10 text-gray-400">
              No orders found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Order {
  id: number;
  customer: string;
  items: number;
  total: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
}

const search = ref("");

const orders = ref<Order[]>([
  {
    id: 1001,
    customer: "Juan Dela Cruz",
    items: 2,
    total: 2500,
    status: "Delivered",
  },
  {
    id: 1002,
    customer: "Maria Santos",
    items: 1,
    total: 1200,
    status: "Pending",
  },
  { id: 1003, customer: "John Doe", items: 3, total: 3800, status: "Shipped" },
  {
    id: 1004,
    customer: "Ana Reyes",
    items: 1,
    total: 900,
    status: "Cancelled",
  },
]);

// FILTER SEARCH
const filteredOrders = computed(() => {
  return orders.value.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.value.toLowerCase()) ||
      o.id.toString().includes(search.value),
  );
});

// STATUS STYLE
function statusClass(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Shipped":
      return "bg-blue-100 text-blue-600";
    case "Delivered":
      return "bg-green-100 text-green-600";
    case "Cancelled":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

// ACTIONS
function viewOrder(order: Order) {
  console.log("View order:", order);
}

function markShipped(id: number) {
  const order = orders.value.find((o) => o.id === id);
  if (order) order.status = "Shipped";
}

function cancelOrder(id: number) {
  const order = orders.value.find((o) => o.id === id);
  if (order) order.status = "Cancelled";
}
</script>
