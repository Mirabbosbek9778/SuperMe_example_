<script setup>
import FilterBlock from "../components/FilterBlock.vue";
import UsersTable from "../components/UsersTable.vue";
import EmptyTable from "../components/EmptyTable.vue";
</script>

<template>
  <div>
    <FilterBlock />
    <UsersTable v-if="true" />
    <EmptyTable v-else />
  </div>
</template>

<style lang="scss" scoped></style>
