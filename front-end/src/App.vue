<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>

    <router-view />
    <!-- this is where components render -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
nav a {
  margin-right: 1rem;
}
</style>
