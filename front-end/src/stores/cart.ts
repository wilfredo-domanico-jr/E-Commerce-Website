import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref<any[]>([]); // Cart items

  function addItem(product: any) {
    items.value.push(product);
  }

  function count() {
    return items.value.length;
  }

  function total() {
    return items.value.reduce((sum, item) => sum + item.price, 0);
  }

  return { items, addItem, count, total };
});
