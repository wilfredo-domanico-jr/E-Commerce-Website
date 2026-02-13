import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ name: string; email: string } | null>(null);

  // Simulated login
  async function login(credentials: { email: string; password: string; remember?: boolean }) {
    // Here you would normally call an API
    // For demo purposes, we just fake a user
    if (credentials.email === "test@example.com" && credentials.password === "123456") {
      user.value = { name: "John Doe", email: credentials.email };
    } else {
      throw new Error("Invalid email or password");
    }
  }

  function logout() {
    user.value = null;
  }

  const isLoggedIn = () => !!user.value;

  return { user, login, logout, isLoggedIn };
});
