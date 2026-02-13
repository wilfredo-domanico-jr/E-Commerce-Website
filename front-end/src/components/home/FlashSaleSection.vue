<template>
  <div class="container mx-auto px-4 py-8">
    <div class="gradient-primary rounded-2xl p-6 shadow-xl">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="bg-white rounded-lg p-2">
            <svg
              class="w-6 h-6 text-orange-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="font-display text-2xl md:text-3xl font-bold text-white">
            Flash Sale
          </h3>
        </div>

        <!-- Countdown Timer -->
        <div class="flex items-center gap-2 text-white">
          <span class="text-sm hidden md:block">Ends In:</span>
          <div class="flex gap-1">
            <div class="timer-box px-2 py-1 rounded text-center min-w-[40px]">
              <div class="font-bold text-lg">{{ hours }}</div>
              <div class="text-xs opacity-80">HRS</div>
            </div>
            <div class="text-2xl font-bold">:</div>
            <div class="timer-box px-2 py-1 rounded text-center min-w-[40px]">
              <div class="font-bold text-lg">{{ minutes }}</div>
              <div class="text-xs opacity-80">MIN</div>
            </div>
            <div class="text-2xl font-bold">:</div>
            <div class="timer-box px-2 py-1 rounded text-center min-w-[40px]">
              <div class="font-bold text-lg">{{ seconds }}</div>
              <div class="text-xs opacity-80">SEC</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <FlashSaleProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @select="onProductSelect"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import FlashSaleProductCard from "../common/FlashSaleProductCard.vue";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  sold: number;
  discount: number;
  image: string;
  progress: number;
}

const products = ref<Product[]>([]);

// ** Simulate fetching from API **
function fetchProducts() {
  products.value = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds Pro",
      price: 499,
      originalPrice: 1999,
      sold: 35,
      discount: 75,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      progress: 65,
    },
    {
      id: 2,
      name: "Smart Watch Fitness Tracker",
      price: 799,
      originalPrice: 1999,
      sold: 48,
      discount: 60,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      progress: 80,
    },
    {
      id: 3,
      name: "Premium Wireless Headphones",
      price: 1499,
      originalPrice: 2999,
      sold: 27,
      discount: 50,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      progress: 45,
    },
    {
      id: 4,
      name: "Running Shoes Athletic Sport",
      price: 899,
      originalPrice: 2999,
      sold: 54,
      discount: 70,
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop",
      progress: 90,
    },
    {
      id: 5,
      name: "Laptop Stand Aluminum",
      price: 449,
      originalPrice: 999,
      sold: 43,
      discount: 55,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
      progress: 72,
    },
  ];
}

// ** Countdown Timer **
const hours = ref("00");
const minutes = ref("00");
const seconds = ref("00");

const saleEndTime = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 hours from now
let timerInterval: number;

function updateTimer() {
  const now = new Date();
  const diff = saleEndTime.getTime() - now.getTime();
  if (diff <= 0) {
    clearInterval(timerInterval);
    hours.value = minutes.value = seconds.value = "00";
    return;
  }
  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  hours.value = h.toString().padStart(2, "0");
  minutes.value = m.toString().padStart(2, "0");
  seconds.value = s.toString().padStart(2, "0");
}

function onProductSelect(product: Product) {
  console.log("Selected product:", product);
}

onMounted(() => {
  fetchProducts();
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>
