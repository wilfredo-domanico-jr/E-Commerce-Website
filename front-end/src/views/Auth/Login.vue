<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center mb-6 text-gradient-primary">
        Login to ShopHub
      </h1>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mb-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block mb-1 font-medium" for="email">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium" for="password">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>

      <!-- Social Login -->
      <div class="mt-6 flex flex-col gap-3">
        <button
          @click="handleGoogleLogin"
          class="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img :src="GoogleSVG" alt="Google" class="w-5 h-5" />
          Login with Google
        </button>

        <button
          @click="handleFacebookLogin"
          class="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img :src="FacebookSVG" alt="Facebook" class="w-5 h-5" />
          Login with Facebook
        </button>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don't have an account?
        <router-link to="/signup" class="text-orange-500 hover:underline">
          Sign Up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

import GoogleSVG from "../../../public/icons/google_icon.svg";
import FacebookSVG from "../../../public/icons/facebook_icon.svg";

const auth = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);

async function handleLogin() {
  errorMessage.value = "";
  loading.value = true;

  try {
    await auth.login({ email: email.value, password: password.value });
    router.push("/"); // Redirect to home after login
  } catch (error: any) {
    errorMessage.value = error.message || "Login failed. Try again.";
  } finally {
    loading.value = false;
  }
}

// Simulated Google login
function handleGoogleLogin() {
  auth.login({ name: "Google User", email: "google@example.com" });
  router.push("/");
}

// Simulated Facebook login
function handleFacebookLogin() {
  auth.login({ name: "Facebook User", email: "facebook@example.com" });
  router.push("/");
}
</script>

<style scoped>
.text-gradient-primary {
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
