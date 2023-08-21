<script setup>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const layout = computed(() => {
  if (route.meta?.layout === "empty") {
    return "EmptyLayout";
  } else {
    return "DefaultLayout";
  }
});
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
