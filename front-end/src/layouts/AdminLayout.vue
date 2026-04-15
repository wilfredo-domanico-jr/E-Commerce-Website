<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- SIDEBAR -->
    <aside class="w-64 bg-white shadow-md hidden md:flex flex-col">
      <!-- Logo -->
      <div class="p-5 text-xl font-bold text-orange-500 border-b">ShopHub</div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <router-link
          to="/admin"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{ 'bg-orange-100 text-orange-600': isActive('/admin') }"
        >
          Dashboard
        </router-link>

        <router-link
          to="/admin/products"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{
            'bg-orange-100 text-orange-600': isActive('/admin/products'),
          }"
        >
          Products
        </router-link>

        <router-link
          to="/admin/orders"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{
            'bg-orange-100 text-orange-600': isActive('/admin/orders'),
          }"
        >
          Orders
        </router-link>

        <router-link
          to="/admin/users"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{ 'bg-orange-100 text-orange-600': isActive('/admin/users') }"
        >
          Users
        </router-link>

        <router-link
          to="/"
          class="block px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
        >
          Back to Store
        </router-link>
      </nav>

      <!-- Logout -->
      <div class="p-4 border-t">
        <button
          class="w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition"
          @click="logout"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col">
      <!-- TOP BAR -->
      <header
        class="bg-white shadow px-6 py-4 flex justify-between items-center"
      >
        <h1 class="font-semibold text-lg">Admin Panel</h1>
      </header>

      <!-- PAGE CONTENT -->
      <main class="p-6 flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

function isActive(path: string) {
  return route.path === path;
}

function logout() {
  // clear auth later (Pinia/localStorage)
  router.push("/admin/login");
}
</script>
