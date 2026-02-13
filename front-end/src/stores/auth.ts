import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ name: string } | null>(null); // store user info

  function login(userData: { name: string }) {
    user.value = userData;
  }

  function logout() {
    user.value = null;
  }

  const isLoggedIn = () => !!user.value;

  return { user, login, logout, isLoggedIn };
});
