<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const navList = computed(() => [
  {
    title: "Dashboard",
    path: "/",
    icon: "/src/assets/icons/home.svg",
  },
  {
    title: "Пользователи",
    path: "/users",
    icon: "/src/assets/icons/people.svg",
  },
  {
    title: "Переводы",
    path: "/translations",
    icon: "/src/assets/icons/globe.svg",
  },
]);
const activeNavIndex = ref(null);

const route = useRoute();

for (let i = 0; i < navList.length; i++) {
  if (navList[i].path === route.path) {
    activeNavIndex.value = i;
    break;
  }
}
</script>

<template>
  <div class="border">
    <ul>
      <li
        v-for="(nav, index) in navList"
        :key="nav"
        @click="activeNavIndex = index"
        :class="{ 'active-nav': activeNavIndex === index }"
      >
        <router-link outer-link :to="nav.path">
          <div class="flex gap-8 pl-5 h-[50px] pt-5 ">
            <img :src="nav.icon" alt="" />
            {{ nav.title }}
          </div>
          <!-- <img src="@/assets/icons/home.svg" alt="" /> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.active-nav {
  background: rgba(33, 150, 243, 0.08);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
/* .border {
  width: 100%;
} */
</style>
