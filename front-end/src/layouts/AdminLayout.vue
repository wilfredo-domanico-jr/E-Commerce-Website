<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- BACKDROP (mobile only) -->
    <div
      v-if="isMobileOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click="closeSidebar"
    ></div>

    <!-- SIDEBAR -->
    <aside
      class="fixed md:static z-50 md:z-auto w-64 bg-white shadow-md flex flex-col h-full md:h-auto transform transition-transform duration-300"
      :class="
        isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      "
    >
      <!-- Logo + Close (mobile) -->
      <div class="p-5 flex items-center justify-between border-b">
        <div class="text-xl font-bold text-orange-500">ShopHub</div>

        <button class="md:hidden" @click="closeSidebar">✕</button>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <router-link
          to="/admin"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{ 'bg-orange-100 text-orange-600': isActive('/admin') }"
          @click="closeSidebar"
        >
          Dashboard
        </router-link>

        <router-link
          to="/admin/products"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{
            'bg-orange-100 text-orange-600': isActive('/admin/products'),
          }"
          @click="closeSidebar"
        >
          Products
        </router-link>

        <router-link
          to="/admin/orders"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{
            'bg-orange-100 text-orange-600': isActive('/admin/orders'),
          }"
          @click="closeSidebar"
        >
          Orders
        </router-link>

        <router-link
          to="/admin/categories"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{
            'bg-orange-100 text-orange-600': isActive('/admin/categories'),
          }"
          @click="closeSidebar"
        >
          Categories
        </router-link>

        <router-link
          to="/admin/users"
          class="block px-4 py-2 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition"
          :class="{ 'bg-orange-100 text-orange-600': isActive('/admin/users') }"
          @click="closeSidebar"
        >
          Users
        </router-link>

        <router-link
          to="/"
          class="block px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition"
          @click="closeSidebar"
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
    <div class="flex-1 flex flex-col w-full">
      <!-- TOP BAR -->
      <header
        class="bg-white shadow px-6 py-4 flex items-center justify-between"
      >
        <!-- Mobile menu button -->
        <button class="md:hidden text-gray-700" @click="openSidebar">☰</button>

        <h1 class="font-semibold text-lg">Admin Panel</h1>

        <div class="hidden md:block text-sm text-gray-500">Welcome Admin</div>
      </header>

      <!-- PAGE CONTENT -->
      <main class="p-6 flex-1">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const isMobileOpen = ref(false);

function openSidebar() {
  isMobileOpen.value = true;
}

function closeSidebar() {
  isMobileOpen.value = false;
}

function isActive(path: string) {
  return route.path === path;
}

function logout() {
  router.push("/admin/login");
}
</script>
