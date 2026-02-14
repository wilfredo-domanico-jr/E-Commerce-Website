import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
}

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem("token"));

  const isLoggedIn = computed(() => !!token.value);

  async function login(credentials: {
    email: string;
    password: string;
  }) {

    

    const res = await api.post<{ user: User; token: string }>("/login", {
      email: credentials.email,
      password: credentials.password,
    });

    user.value = res.data.user;
    token.value = res.data.token;

    localStorage.setItem("token", res.data.token);
  }

  function logout() {
    user.value = null;
    token.value = null;
    localStorage.removeItem("token");
  }

  async function fetchUser() {

  if (!token.value) return;

  try {
    const res = await api.get<User>("/me");
    user.value = res.data;
  } catch {
    logout();
  }
}

  return {
    user,
    token,
    isLoggedIn,
    login,
    logout,
    fetchUser,
  };
});
