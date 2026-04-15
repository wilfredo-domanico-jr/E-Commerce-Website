<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Products</h1>
        <p class="text-gray-500 text-sm">Manage your store products</p>
      </div>

      <button
        @click="openAdd"
        class="bg-orange-500 text-white px-4 py-2 rounded-lg hover:opacity-90"
      >
        + Add Product
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow overflow-x-auto">
      <table class="w-full text-sm min-w-[600px]">
        <thead class="border-b text-left text-gray-500">
          <tr>
            <th class="p-4">Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th class="text-right p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="p in products"
            :key="p.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="p-4 flex items-center gap-3">
              <img :src="p.image" class="w-10 h-10 rounded object-cover" />
              <div>
                <p class="font-medium">{{ p.name }}</p>
                <p class="text-xs text-gray-400">ID: {{ p.id }}</p>
              </div>
            </td>

            <td>₱{{ p.price }}</td>
            <td>{{ p.stock }}</td>

            <td>
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="
                  p.stock > 0
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-500'
                "
              >
                {{ p.stock > 0 ? "Active" : "Out of stock" }}
              </span>
            </td>

            <td class="text-right p-4 space-x-2">
              <button class="text-blue-500" @click="openEdit(p)">Edit</button>

              <button class="text-red-500" @click="remove(p.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ================= ADD / EDIT MODAL ================= -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
    >
      <div class="bg-white w-full max-w-md rounded-xl p-6 space-y-4">
        <h2 class="text-xl font-bold">
          {{ isEdit ? "Edit Product" : "Add Product" }}
        </h2>

        <!-- Name -->
        <input
          v-model="form.name"
          type="text"
          placeholder="Product name"
          class="w-full border p-2 rounded"
        />

        <!-- Price -->
        <input
          v-model.number="form.price"
          type="number"
          placeholder="Price"
          class="w-full border p-2 rounded"
        />

        <!-- Stock -->
        <input
          v-model.number="form.stock"
          type="number"
          placeholder="Stock"
          class="w-full border p-2 rounded"
        />

        <!-- Image -->
        <input
          v-model="form.image"
          type="text"
          placeholder="Image URL"
          class="w-full border p-2 rounded"
        />

        <!-- Buttons -->
        <div class="flex justify-end gap-2 pt-2">
          <button class="px-4 py-2 text-gray-500" @click="closeModal">
            Cancel
          </button>

          <button
            class="bg-orange-500 text-white px-4 py-2 rounded"
            @click="saveProduct"
          >
            {{ isEdit ? "Update" : "Add" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    name: "Nike Air Max",
    price: 4500,
    stock: 10,
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Adidas Boost",
    price: 5200,
    stock: 0,
    image: "https://via.placeholder.com/100",
  },
]);

// modal state
const showModal = ref(false);
const isEdit = ref(false);

// form
const form = ref<Product>({
  id: 0,
  name: "",
  price: 0,
  stock: 0,
  image: "",
});

// OPEN ADD
function openAdd() {
  isEdit.value = false;
  form.value = { id: 0, name: "", price: 0, stock: 0, image: "" };
  showModal.value = true;
}

// OPEN EDIT
function openEdit(product: Product) {
  isEdit.value = true;
  form.value = { ...product };
  showModal.value = true;
}

// CLOSE MODAL
function closeModal() {
  showModal.value = false;
}

// SAVE (ADD OR UPDATE)
function saveProduct() {
  if (!form.value.name) return;

  if (isEdit.value) {
    const index = products.value.findIndex((p) => p.id === form.value.id);
    if (index !== -1) {
      products.value[index] = { ...form.value };
    }
  } else {
    products.value.push({
      ...form.value,
      id: Date.now(),
    });
  }

  closeModal();
}

// DELETE
function remove(id: number) {
  products.value = products.value.filter((p) => p.id !== id);
}
</script>
