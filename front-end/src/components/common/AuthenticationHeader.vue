<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo & Mobile Menu Button -->
      <div class="flex items-center gap-2">
        <router-link
          to="/"
          class="lg:hidden text-gray-700 hover:text-orange-500 transition flex items-center"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </router-link>
        <router-link
          to="/"
          class="text-gradient-primary font-display text-2xl md:text-3xl font-bold"
          >ShopHub</router-link
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
