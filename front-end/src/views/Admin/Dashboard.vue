<template>
  <div class="space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p class="text-gray-500 text-sm">
        Welcome back! Here’s your store performance.
      </p>
    </div>

    <!-- Stats -->
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

    <!-- SALES CHART -->
    <div class="bg-white p-5 rounded-xl shadow">
      <h2 class="text-lg font-semibold mb-4">Sales Overview</h2>

      <Line :data="chartData" :options="chartOptions" />
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
            <td class="text-green-600 font-medium">Delivered</td>
            <td>₱2,500</td>
          </tr>

          <tr class="border-b">
            <td class="py-2">#1002</td>
            <td>Maria Santos</td>
            <td class="text-yellow-600 font-medium">Pending</td>
            <td>₱1,200</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Chart Data
const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sales (₱)",
      data: [1200, 1900, 3000, 2500, 3200, 4000, 3800],
      borderColor: "#f97316",
      backgroundColor: "rgba(249,115,22,0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

// Chart Options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped>
/* control chart height */
div :deep(canvas) {
  height: 300px !important;
}
</style>
