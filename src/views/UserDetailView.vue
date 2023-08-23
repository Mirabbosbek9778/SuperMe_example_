<script setup>
import Calendar from "../components/Calendar.vue";
import Message from "../components/Message.vue";
import UserInfo from "../components/UserInfo.vue";
import UserStats from "../components/UserStats.vue";
</script>
<template>
  <div class="">
    <h2>Максим Петров · М · 38 лет</h2>
    <div class="grid grid-cols-3">
      <div class="flex flex-col">
        <UserInfo />
        <UserStats />
      </div>
      <div class="flex flex-col">
        <Calendar v-for="i in 4" :key="i" />
      </div>
      <div class="flex flex-col">
        <Message v-for="i in 4" :key="i" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
