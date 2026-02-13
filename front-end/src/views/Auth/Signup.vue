<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center mb-6 text-gradient-primary">
        Create Your Account
      </h1>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mb-4 text-red-500 text-sm text-center">
        {{ errorMessage }}
      </div>

      <form @submit.prevent="handleSignup" class="space-y-4">
        <div>
          <label class="block mb-1 font-medium" for="name">Full Name</label>
          <input
            v-model="name"
            id="name"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="John Doe"
          />
        </div>

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
            minlength="6"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          {{ loading ? "Signing up..." : "Sign Up" }}
        </button>
      </form>

      <!-- Social Signup -->
      <div class="mt-6 flex flex-col gap-3">
        <button
          @click="handleGoogleSignup"
          class="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img src="" alt="Google" class="w-5 h-5" />
          Sign up with Google
        </button>

        <button
          @click="handleFacebookSignup"
          class="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
        >
          <img src="" alt="Facebook" class="w-5 h-5" />
          Sign up with Facebook
        </button>
      </div>

      <p class="mt-4 text-center text-sm text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-orange-500 hover:underline">
          Login
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

const auth = useAuthStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);

async function handleSignup() {
  errorMessage.value = "";
  loading.value = true;

  try {
    // Demo signup
    await auth.login({ name: name.value, email: email.value });
    router.push("/");
  } catch (error: any) {
    errorMessage.value = error.message || "Signup failed. Try again.";
  } finally {
    loading.value = false;
  }
}

// Simulated Google signup
function handleGoogleSignup() {
  auth.login({ name: "Google User", email: "google@example.com" });
  router.push("/");
}

// Simulated Facebook signup
function handleFacebookSignup() {
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
