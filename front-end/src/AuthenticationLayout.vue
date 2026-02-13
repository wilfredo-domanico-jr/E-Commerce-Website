<template>
  <AuthenticationHeader />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import AuthenticationHeader from "./components/common/AuthenticationHeader.vue";
import Footer from "./components/common/Footer.vue";
</script>
