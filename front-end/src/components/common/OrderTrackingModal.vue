<template>
  <div
    class="flex fixed inset-0 bg-black/50 z-50 items-center justify-center p-4"
  >
    <div
      class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn"
    >
      <!-- Header -->
      <div
        class="sticky top-0 bg-white border-b p-4 flex items-center justify-between"
      >
        <h3 class="font-display text-xl font-bold">Track Your Order</h3>

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
            />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-4 space-y-4">
        <p class="text-sm text-gray-500">
          Enter your tracking or reference number to check your order status.
        </p>

        <!-- Input -->
        <div>
          <label class="text-sm font-medium text-gray-700">
            Tracking / Reference Number
          </label>

          <input
            v-model="trackingNumber"
            type="text"
            placeholder="e.g. SHP-123456789"
            class="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500"
          />
        </div>

        <!-- Button -->
        <button
          @click="trackOrder"
          class="w-full gradient-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          :disabled="!trackingNumber"
        >
          Track Order
        </button>

        <!-- Result -->
        <div v-if="result" class="mt-4 p-4 border rounded-lg bg-gray-50">
          <p class="font-semibold text-sm">Order Status:</p>

          <p class="text-orange-500 font-bold mt-1">
            {{ result.status }}
          </p>

          <p class="text-xs text-gray-500 mt-1">
            Last update: {{ result.updatedAt }}
          </p>
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{ (e: "close-order-tracking"): void }>();

const trackingNumber = ref("");
const result = ref<any>(null);
const error = ref("");

function close() {
  emit("close-order-tracking");
}

// Mock tracking function (replace with API later)
function trackOrder() {
  error.value = "";
  result.value = null;

  if (!trackingNumber.value) {
    error.value = "Please enter a tracking number.";
    return;
  }

  // fake response (replace with backend call)
  result.value = {
    status: "In Transit 🚚",
    updatedAt: new Date().toLocaleString(),
  };
}
</script>
