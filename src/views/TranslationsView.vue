<script setup>
import TranslateTable from "../components/TranslateTable.vue";
import EmptyTable from "../components/EmptyTable.vue";
</script>

<template>
  <div>
    Переводы
    <TranslateTable v-if="true" />
    <EmptyTable v-else />
  </div>
</template>

<style lang="scss" scoped></style>
