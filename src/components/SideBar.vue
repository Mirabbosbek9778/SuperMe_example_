<script setup>
import { computed } from "vue";
const navList = computed(() => [
  {
    title: "Dashboard",
    path: "/",
    icon: "",
  },
  {
    title: "Пользователи",
    path: "/users",
    icon: "",
  },
  {
    title: "Переводы",
    path: "/translations",
    icon: "",
  },
]);
</script>

<template>
  <div>
    <ul>
      <li v-for="nav in navList" :key="nav">
        <router-link :to="nav.path"> {{ nav.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
