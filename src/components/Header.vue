<script setup></script>

<template>
  <div
    class="flex bg-[rgb(61,182,138)] h-16 items-center justify-between text-white font-normal wrapper"
  >
    <div class="flex pl-[30px] gap-3 cursor-pointer items-center">
      <img src="../assets/icons/Settings.svg" alt=" Settings" />
      <a href="/home">
        <h1>
          SuperMe
        </h1>
      </a>
    </div>
    <div class="flex pr-8 gap-[11px]">
      <span>Alex F.</span>
      <a href="/exit">
        <img src="../assets/icons/exitIcon.svg" alt="Exit Icon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}
.wrapper {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>
