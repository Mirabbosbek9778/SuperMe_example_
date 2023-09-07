<script setup>
import { computed, ref } from "vue";

const navList = computed(() => [
  {
    title: "Dashboard",
    path: "/home",
    icon: "/src/assets/icons/homeIcon.svg",
  },
  {
    title: "Пользователи",
    path: "/users",
    icon: "/src/assets/icons/peopleIcon.svg",
  },
  {
    title: "Переводы",
    path: "/transactions",
    icon: "/src/assets/icons/globusIcons.svg",
  },
]);
const activeNavIndex = ref(null);
</script>

<template>
  <div class="h-screen wrapper">
    <ul>
      <li v-for="(nav, index) in navList" :key="nav">
        <router-link outer-link :to="nav.path">
          <div
            class="flex items-center gap-4 py-4 pl-4"
            @click="activeNavIndex = index"
            :class="{ 'active-nav': activeNavIndex === index }"
          >
            <img :src="nav.icon" alt="" />
            {{ nav.title }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.active-nav {
  background: rgba(33, 150, 243, 0.08);
  box-shadow: 0px 0px rgba(0, 0, 0, 0.25);
}
</style>
