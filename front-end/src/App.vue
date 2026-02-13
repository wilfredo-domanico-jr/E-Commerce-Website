<template>
  <TopBanner />
  <Header @open-cart="openCart" />
  <CartModal v-if="showCartModal" @close-cart="closeCart" />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { ref } from "vue";

import TopBanner from "./components/common/TopBanner.vue";
import Header from "./components/common/Header.vue";
import CartModal from "./components/common/CartModal.vue";
import Footer from "./components/common/Footer.vue";

const showCartModal = ref(false);

function openCart() {
  showCartModal.value = true;
}

function closeCart() {
  showCartModal.value = false;
}
</script>
