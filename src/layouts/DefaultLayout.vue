<script setup>
import Header from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="">
    <Header />
    <div class="flex">
      <SideBar />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
