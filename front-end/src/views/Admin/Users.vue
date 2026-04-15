<template>
  <div class="space-y-6">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold">Users</h1>
        <p class="text-gray-500 text-sm">Manage registered users</p>
      </div>

      <!-- Search -->
      <input
        v-model="search"
        type="text"
        placeholder="Search name or email..."
        class="border px-4 py-2 rounded-lg w-full md:w-72 focus:outline-none focus:border-orange-500"
      />
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow overflow-x-auto">
      <table class="w-full text-sm min-w-[700px]">
        <thead class="text-left text-gray-500 border-b">
          <tr>
            <th class="p-4">User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th class="text-right p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="border-b hover:bg-gray-50"
          >
            <!-- User -->
            <td class="p-4 flex items-center gap-3">
              <img
                :src="user.avatar"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p class="font-medium">{{ user.name }}</p>
                <p class="text-xs text-gray-400">ID: {{ user.id }}</p>
              </div>
            </td>

            <!-- Email -->
            <td>{{ user.email }}</td>

            <!-- Role -->
            <td>
              <span
                class="px-2 py-1 text-xs rounded-full font-medium"
                :class="
                  user.role === 'Admin'
                    ? 'bg-purple-100 text-purple-600'
                    : 'bg-gray-100 text-gray-600'
                "
              >
                {{ user.role }}
              </span>
            </td>

            <!-- Status -->
            <td>
              <span
                class="px-2 py-1 text-xs rounded-full font-medium"
                :class="
                  user.status === 'Active'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                "
              >
                {{ user.status }}
              </span>
            </td>

            <!-- Actions -->
            <td class="text-right p-4 space-x-2">
              <button
                class="text-blue-500 hover:underline"
                @click="viewUser(user)"
              >
                View
              </button>

              <button
                class="text-orange-500 hover:underline"
                @click="toggleRole(user.id)"
              >
                Role
              </button>

              <button
                class="text-red-500 hover:underline"
                @click="toggleStatus(user.id)"
              >
                Suspend
              </button>
            </td>
          </tr>

          <tr v-if="filteredUsers.length === 0">
            <td colspan="5" class="text-center py-10 text-gray-400">
              No users found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Customer";
  status: "Active" | "Suspended";
  avatar: string;
}

const search = ref("");

const users = ref<User[]>([
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    role: "Customer",
    status: "Active",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    role: "Admin",
    status: "Active",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Suspended",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
]);

// SEARCH
const filteredUsers = computed(() => {
  return users.value.filter(
    (u) =>
      u.name.toLowerCase().includes(search.value.toLowerCase()) ||
      u.email.toLowerCase().includes(search.value.toLowerCase()),
  );
});

// ACTIONS
function viewUser(user: User) {
  console.log("View user:", user);
}

function toggleRole(id: number) {
  const user = users.value.find((u) => u.id === id);
  if (!user) return;

  user.role = user.role === "Admin" ? "Customer" : "Admin";
}

function toggleStatus(id: number) {
  const user = users.value.find((u) => u.id === id);
  if (!user) return;

  user.status = user.status === "Active" ? "Suspended" : "Active";
}
</script>
