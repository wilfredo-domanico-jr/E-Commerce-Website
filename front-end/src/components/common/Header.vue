<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo & Mobile Menu Button -->
      <div class="flex items-center gap-2">
        <button
          class="lg:hidden text-gray-700 hover:text-orange-500 transition"
          @click="openMobileMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1
          class="text-gradient-primary font-display text-2xl md:text-3xl font-bold"
        >
          ShopHub
        </h1>
      </div>

      <!-- Desktop Search Bar -->
      <div class="hidden md:flex flex-1 max-w-2xl mx-8 relative">
        <input
          type="text"
          placeholder="Search for products, brands, and more..."
          class="w-full px-4 py-3 pr-12 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 transition"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 gradient-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      <!-- Desktop Header Icons / Account -->
      <div class="flex items-center gap-4">
        <!-- Guest: Login / Signup -->
        <div v-if="!auth.isLoggedIn()" class="hidden md:flex gap-2">
          <button
            @click="router.push('/login')"
            class="px-3 py-2 rounded hover:bg-orange-100 transition"
          >
            Login
          </button>
          <button
            @click="router.push('/signup')"
            class="px-3 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </div>

        <!-- Logged-in User -->
        <div v-else class="relative">
          <button
            @click="toggleDropdown"
            class="hidden md:flex items-center gap-2 hover:text-orange-500 transition"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="text-sm font-medium">{{ auth.user?.name }}</span>
          </button>

          <!-- User Dropdown -->
          <div
            v-if="showDropdown"
            class="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40"
          >
            <a href="/profile" class="block px-4 py-2 hover:bg-gray-100"
              >Profile</a
            >
            <button
              @click="handleLogout"
              class="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Notifications -->
        <button class="relative hover:text-orange-500 transition">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span
            class="notification-dot absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          ></span>
        </button>

        <!-- Cart -->
        <button
          @click="emit('open-cart')"
          class="relative hover:text-orange-500 transition"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span
            class="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartStore.count() }}
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Search -->
    <div class="md:hidden mt-3 px-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search products..."
          class="w-full px-4 py-2 pr-10 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      class="fixed inset-0 bg-white z-50 transform transition-transform duration-300 md:hidden"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center px-4 py-4 border-b">
        <h2 class="text-xl font-bold">Menu</h2>
        <button
          @click="closeMobileMenu"
          class="text-gray-700 hover:text-orange-500"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Links -->
      <nav class="px-4 py-4 flex flex-col gap-4">
        <a href="/" class="text-lg hover:text-orange-500">Home</a>
        <a href="/products" class="text-lg hover:text-orange-500">Products</a>
        <a href="/about" class="text-lg hover:text-orange-500">About</a>

        <!-- Mobile Login/Signup or Account -->
        <div v-if="!auth.isLoggedIn()" class="flex flex-col gap-2 mt-4">
          <button
            @click="router.push('/login')"
            class="px-4 py-2 rounded hover:bg-orange-100 transition"
          >
            Login
          </button>
          <button
            @click="router.push('/signup')"
            class="px-4 py-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </div>
        <div v-else class="flex flex-col gap-2 mt-4">
          <a href="/profile" class="px-4 py-2 rounded hover:bg-gray-100"
            >Profile</a
          >
          <button
            @click="handleLogout"
            class="px-4 py-2 rounded hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "../../stores/cart";
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const auth = useAuthStore();
const router = useRouter();
const emit = defineEmits<{ (e: "open-cart"): void }>();

const showDropdown = ref(false);
const isMobileMenuOpen = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function handleLogout() {
  auth.logout();
  showDropdown.value = false;
  isMobileMenuOpen.value = false;
  router.push("/");
}

function openMobileMenu() {
  isMobileMenuOpen.value = true;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}
</script>
