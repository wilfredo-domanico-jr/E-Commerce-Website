<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex items-center justify-between mb-6">
      <h3 class="font-display text-2xl md:text-3xl font-bold text-gray-800">
        Trending Now
      </h3>
      <a
        href="#"
        class="text-orange-500 font-medium hover:text-orange-600 transition flex items-center gap-1"
      >
        View All
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
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <TrendingCard
        v-for="trending in trendings"
        :key="trending.id"
        :trending="trending"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TrendingCard from "../common/TrendingCard.vue";

interface TrendingCard {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  sold: number;
  discount: number;
}

const trendings = ref<TrendingCard[]>([]);

function fetchTrendings() {
  trendings.value = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 1499,
      originalPrice: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      sold: 156,
      discount: 50,
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: 2499,
      originalPrice: 4999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.8,
      sold: 203,
      discount: 50,
    },
    {
      id: 3,
      name: "Wireless Gaming Mouse",
      price: 799,
      originalPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      rating: 4.6,
      sold: 189,
      discount: 50,
    },
    {
      id: 4,
      name: "Mechanical Keyboard RGB",
      price: 1899,
      originalPrice: 3499,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop",
      rating: 4.7,
      sold: 142,
      discount: 46,
    },
    {
      id: 5,
      name: "4K Webcam Pro",
      price: 1299,
      originalPrice: 2599,
      image:
        "https://images.unsplash.com/photo-1600456899121-68eda5705257?w=300&h=300&fit=crop",
      rating: 4.4,
      sold: 98,
      discount: 50,
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 599,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.3,
      sold: 267,
      discount: 54,
    },
    {
      id: 7,
      name: "USB-C Hub Multiport",
      price: 899,
      originalPrice: 1799,
      image:
        "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop",
      rating: 4.5,
      sold: 178,
      discount: 50,
    },
    {
      id: 8,
      name: "Ergonomic Office Chair",
      price: 3999,
      originalPrice: 7999,
      image:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&h=300&fit=crop",
      rating: 4.9,
      sold: 89,
      discount: 50,
    },
    {
      id: 9,
      name: "LED Desk Lamp",
      price: 449,
      originalPrice: 899,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
      rating: 4.2,
      sold: 321,
      discount: 50,
    },
    {
      id: 10,
      name: "Phone Stand Holder",
      price: 199,
      originalPrice: 499,
      image:
        "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop",
      rating: 4.1,
      sold: 445,
      discount: 60,
    },
  ];
}

onMounted(() => {
  fetchTrendings();
});
</script>
