<template>
  <div
    class="flex fixed inset-0 bg-black/50 z-50 items-center justify-center p-4"
  >
    <div
      class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
    >
      <div
        class="sticky top-0 bg-white border-b p-4 flex items-center justify-between"
      >
        <h3 class="font-display text-xl font-bold">Shopping Cart</h3>
        <button @click="close" class="text-gray-500 hover:text-gray-700">
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
            ></path>
          </svg>
        </button>
      </div>

      <div id="cartItems" class="p-4">
        <!-- Cart items will be added here -->
        <div class="text-center py-12 text-gray-400">
          <svg
            class="w-16 h-16 mx-auto mb-4 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <p class="font-medium">Your cart is empty</p>
          <p class="text-sm mt-1">Add some products to get started!</p>
        </div>
      </div>

      <div class="sticky bottom-0 bg-white border-t p-4">
        <div class="flex items-center justify-between mb-4">
          <span class="font-semibold">Total:</span>
          <span id="cartTotal" class="font-bold text-xl text-orange-500"
            >₱0</span
          >
        </div>
        <button
          class="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "close-cart"): void;
}>();

function close() {
  emit("close-cart");
}
</script>
