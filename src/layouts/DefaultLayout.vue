<script setup>
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <div class="d-flex">
    <SideBar />
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
