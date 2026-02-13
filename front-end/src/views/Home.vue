<template>
  <TopBanner />
  <Header />
  <CategoriesBar />
  <MainBannerCarousel />
  <FlashSaleSection />
  <ShopByCategorySection />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// COMMON
import TopBanner from "../components/common/TopBanner.vue";
import Header from "../components/common/Header.vue";

// PAGE SPECIFIC

import CategoriesBar from "../components/home/CategoriesBar.vue";
import MainBannerCarousel from "../components/home/MainBannerCarousel.vue";
import FlashSaleSection from "../components/home/FlashSaleSection.vue";
import ShopByCategorySection from "../components/home/ShopByCategorySection.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBanner,
    Header,
    CategoriesBar,
    MainBannerCarousel,
    FlashSaleSection,
    ShopByCategorySection,
  },
});
</script>
