<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-indigo-600 px-6 py-4 flex items-center">
      <router-link
        to="/"
        class="text-white font-semibold text-lg hover:text-indigo-200 transition"
      >
        Home
      </router-link>
    </nav>

    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
