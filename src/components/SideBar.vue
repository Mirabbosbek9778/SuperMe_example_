<script setup>
import { computed } from "vue";
const navList = computed(() => [
  {
    title: "Dashboard",
    path: "/",
    icon: "@/assets/icons/home.svg",
  },
  {
    title: "Пользователи",
    path: "/users",
    icon: "@/assets/icons/people.svg",
  },
  {
    title: "Переводы",
    path: "/translations",
    icon: "@/assets/icons/globe.svg",
  },
]);
</script>

<template>
  <div class="border">
    <ul>
      <li v-for="nav in navList" :key="nav">
        <router-link :to="nav.path">{{ nav.title }} </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
