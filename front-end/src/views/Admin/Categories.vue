<template>
  <div class="space-y-6">
    <!-- Header -->
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h1 class="text-2xl font-bold">Categories</h1>
        <p class="text-gray-500 text-sm">Manage product categories</p>
      </div>

      <button
        @click="openAdd"
        class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
      >
        + Add Category
      </button>
    </div>

    <!-- Search -->
    <div class="bg-white p-4 rounded-xl shadow">
      <input
        v-model="search"
        type="text"
        placeholder="Search categories..."
        class="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-orange-500"
      />
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow overflow-x-auto">
      <table class="w-full text-sm min-w-[600px]">
        <thead class="text-left text-gray-500 border-b">
          <tr>
            <th class="p-4">Category</th>
            <th>Products</th>
            <th>Status</th>
            <th class="text-right p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="c in filteredCategories"
            :key="c.id"
            class="border-b hover:bg-gray-50"
          >
            <!-- Category -->
            <td class="p-4 font-medium">
              {{ c.name }}
            </td>

            <!-- Product count -->
            <td>{{ c.products }} items</td>

            <!-- Status -->
            <td>
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="
                  c.active
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-500'
                "
              >
                {{ c.active ? "Active" : "Inactive" }}
              </span>
            </td>

            <!-- Actions -->
            <td class="text-right p-4 space-x-2">
              <button
                class="text-blue-500 hover:underline"
                @click="openEdit(c)"
              >
                Edit
              </button>

              <button
                class="text-red-500 hover:underline"
                @click="remove(c.id)"
              >
                Delete
              </button>
            </td>
          </tr>

          <tr v-if="filteredCategories.length === 0">
            <td colspan="4" class="text-center py-10 text-gray-400">
              No categories found
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
    >
      <div class="bg-white w-full max-w-md rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-bold">
          {{ isEdit ? "Edit Category" : "Add Category" }}
        </h2>

        <!-- Name -->
        <input
          v-model="form.name"
          type="text"
          placeholder="Category name"
          class="w-full border p-2 rounded"
        />

        <!-- Active -->
        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" v-model="form.active" />
          Active
        </label>

        <!-- Buttons -->
        <div class="flex justify-end gap-2 pt-2">
          <button class="px-4 py-2 text-gray-500" @click="closeModal">
            Cancel
          </button>

          <button
            class="bg-orange-500 text-white px-4 py-2 rounded"
            @click="save"
          >
            {{ isEdit ? "Update" : "Add" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Category {
  id: number;
  name: string;
  products: number;
  active: boolean;
}

const search = ref("");

const categories = ref<Category[]>([
  { id: 1, name: "Shoes", products: 12, active: true },
  { id: 2, name: "Shirts", products: 8, active: true },
  { id: 3, name: "Accessories", products: 5, active: false },
]);

// modal
const showModal = ref(false);
const isEdit = ref(false);

const form = ref<Category>({
  id: 0,
  name: "",
  products: 0,
  active: true,
});

// FILTER
const filteredCategories = computed(() => {
  return categories.value.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});

// OPEN ADD
function openAdd() {
  isEdit.value = false;
  form.value = { id: 0, name: "", products: 0, active: true };
  showModal.value = true;
}

// OPEN EDIT
function openEdit(cat: Category) {
  isEdit.value = true;
  form.value = { ...cat };
  showModal.value = true;
}

// CLOSE
function closeModal() {
  showModal.value = false;
}

// SAVE
function save() {
  if (!form.value.name) return;

  if (isEdit.value) {
    const i = categories.value.findIndex((c) => c.id === form.value.id);
    if (i !== -1) categories.value[i] = { ...form.value };
  } else {
    categories.value.push({
      ...form.value,
      id: Date.now(),
    });
  }

  closeModal();
}

// DELETE
function remove(id: number) {
  categories.value = categories.value.filter((c) => c.id !== id);
}
</script>
