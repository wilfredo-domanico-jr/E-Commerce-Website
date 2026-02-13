<template>
  <div class="container mx-auto px-4 py-8">
    <h3 class="font-display text-2xl md:text-3xl font-bold mb-6 text-gray-800">
      Shop By Category
    </h3>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <ShopByCategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ShopByCategoryCard from "../common/ShopByCategoryCard.vue";

interface CategoryCard {
  id: number;
  icon: string;
  title: string;
  itemCount: number;
  gradientClass: string;
}

const categories = ref<CategoryCard[]>([]);

// ** Simulate fetching from API **
function fetchCategories() {
  categories.value = [
    {
      id: 1,
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      title: "Electronics",
      itemCount: 2543,
      gradientClass: "gradient-primary",
    },
    {
      id: 2,
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      title: "Fashion",
      itemCount: 5891,
      gradientClass: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      id: 3,
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      title: "Home & Living",
      itemCount: 3267,
      gradientClass: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      id: 4,
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      title: "Beauty",
      itemCount: 1982,
      gradientClass: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
  ];
}

onMounted(() => {
  fetchCategories();
});
</script>
