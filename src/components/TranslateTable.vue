<script setup>
import EditWord from "./EditWord.vue";
import { dataList } from "../mock";
import { ref, computed } from "vue";

const itemsPerPage = 5;
const currentPage = ref(1);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const visibleData = computed(() =>
  dataList.slice(startIndex.value, startIndex.value + itemsPerPage)
);

const totalPages = Math.ceil(dataList.length / itemsPerPage);

const nextPage = () => {
  if (currentPage.value < totalPages) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<template>
  <div class="border mt-[15px] ml-2 ">
    <div class="flex flex-col">
      <div class="pt-[16px] pl-6 flex gap-[14px] relative">
        <p class="absolute text-{12px} top-1 left-9 overflow-hidden">Поиск</p>
        <input
          type="text"
          placeholder="слово"
          class="w-[300px] h-14 pl-3 border rounded-md"
        />
        <button
          class="rounded-md w-[125px] my-custom-box-shadow h-14 bg-btnColor text-textNavbar font-fontLong  font-fontFamily text-{15px} "
        >
          Найти
        </button>
      </div>
      <div class="overflow-hidden">
        <div>
          <div class="overflow-hidden">
            <table class="text-sm text-left ">
              <thead class="border-b font-fontLong ">
                <tr class="text-{14px}">
                  <th scope="col" class="px-6">?</th>
                  <th scope="col" class="px-6 pt-3"></th>
                  <th scope="col" class="px-6 pt-3">#key</th>
                  <th scope="col" class="px-6 pt-3">RU</th>
                  <th scope="col" class="px-6 pt-3">EN</th>
                  <th scope="col" class="px-6 pt-3">ES</th>
                  <th scope="col" class="px-6 pt-3">FR</th>
                  <th scope="col" class="px-6 pt-3">DE</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b dark:border-neutral-500"
                  v-for="item in visibleData"
                  :key="item.id"
                >
                  <td class="px-6 py-4 font-medium whitespace-nowrap">
                    <img src="../assets/icons/phone-portrait.svg" alt="" />
                  </td>
                  <td class="px-6 py-4 font-medium whitespace-nowrap">
                    <img src="../assets/icons/Edit.svg" alt="" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ item.town }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.rustate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.enstate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.esstate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.frstate }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ item.destate }}
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex items-center justify-center pl-20 mt-5 ">
              <div class="px-3 py-1">Rows per pages {{ currentPage }}</div>
              <button
                class="px-3 py-1 rounded-l"
                :disabled="currentPage === 1"
                @click="prevPage"
              >
                <img src="../assets/icons/arrowLeft.svg" alt="" />
              </button>
              <button
                class="px-3 rounded-r py-"
                :disabled="currentPage === totalPages"
                @click="nextPage"
              >
                <img src="../assets/icons/arrowRight.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <EditWord />
</template>

<style lang="scss" scoped>
.my-custom-box-shadow {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
</style>
