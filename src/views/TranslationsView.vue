<script setup>
import TranslateTable from "../components/TranslateTable.vue";
import EmptyTable from "../components/EmptyTable.vue";
</script>

<template>
  <div class="w-full">
    <p class="text-48 e px-[19px] pt-16">Переводы</p>
    <TranslateTable v-if="true" />
    <EmptyTable v-else />
  </div>
</template>

<style lang="scss" scoped></style>
