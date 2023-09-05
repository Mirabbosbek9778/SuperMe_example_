<script setup>
import FilterBlock from "../components/FilterBlock.vue";
import UsersTable from "../components/UsersTable.vue";
import EmptyTable from "../components/EmptyTable.vue";
</script>

<template>
  <div class="ml-[19px]">
    <h1 class="mt-16 text-5xl ">Пользователи</h1>
    <div class="flex items-center justify-between">
      <h4 class="mt-8 ml-3 text-2xl">Всего пользователей (6000)</h4>
      <button class="text-sm text-[#3DB68A] filter">
        Очистить фильтр
      </button>
    </div>
    <p class="ml-3 text-sm activin">Активных (3000)</p>
    <FilterBlock />
    <UsersTable v-if="true" />
    <EmptyTable v-else />
  </div>
</template>

<style lang="scss" scoped>
.filter {
  color: #3db68a;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.17px;
}
.activin {
  color: var(--text-secondary, rgba(0, 0, 0, 0.6));
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 143%;
  letter-spacing: 0.17px;
}
</style>
