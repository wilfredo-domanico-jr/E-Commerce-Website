<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p class="text-gray-500 text-sm">
        Welcome back! Here’s what’s happening in your store today.
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-xl shadow">
        <p class="text-gray-500 text-sm">Total Sales</p>
        <h2 class="text-2xl font-bold text-orange-500">₱125,430</h2>
      </div>

      <div class="bg-white p-5 rounded-xl shadow">
        <p class="text-gray-500 text-sm">Orders</p>
        <h2 class="text-2xl font-bold">320</h2>
      </div>

      <div class="bg-white p-5 rounded-xl shadow">
        <p class="text-gray-500 text-sm">Products</p>
        <h2 class="text-2xl font-bold">58</h2>
      </div>

      <div class="bg-white p-5 rounded-xl shadow">
        <p class="text-gray-500 text-sm">Customers</p>
        <h2 class="text-2xl font-bold">1,240</h2>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="bg-white rounded-xl shadow p-5">
      <h2 class="text-lg font-semibold mb-4">Recent Orders</h2>

      <table class="w-full text-sm">
        <thead class="text-left text-gray-500 border-b">
          <tr>
            <th class="py-2">Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-b">
            <td class="py-2">#1001</td>
            <td>Juan Dela Cruz</td>
            <td>
              <span class="text-green-600 font-medium">Delivered</span>
            </td>
            <td>₱2,500</td>
          </tr>

          <tr class="border-b">
            <td class="py-2">#1002</td>
            <td>Maria Santos</td>
            <td>
              <span class="text-yellow-600 font-medium">Pending</span>
            </td>
            <td>₱1,200</td>
          </tr>

          <tr>
            <td class="py-2">#1003</td>
            <td>John Doe</td>
            <td>
              <span class="text-blue-600 font-medium">Shipped</span>
            </td>
            <td>₱3,800</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <button class="bg-orange-500 text-white p-4 rounded-xl hover:opacity-90">
        + Add Product
      </button>

      <button class="bg-white shadow p-4 rounded-xl hover:bg-gray-50">
        View Orders
      </button>

      <button class="bg-white shadow p-4 rounded-xl hover:bg-gray-50">
        Manage Users
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// later you can fetch API data here
</script>
