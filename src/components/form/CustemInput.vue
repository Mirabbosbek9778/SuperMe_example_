<script setup></script>

<template>
  <div>
    <div class="flex gap-5 mt-[26px] ">
      <div class="w-full">
        <label class="" for="Поиск">Поиск </label>
        <input
          placeholder="Имя, Фамилия, Email или ID"
          class="w-full pl-3 border-none custom-input h-14"
        />
      </div>
      <div class="btn-filter">
        <button class="bg-[#3DB68A] h-14 w-14 flex justify-center items-center">
          <img src="../../assets/icons/filterIcon.svg" alt="filter" />
        </button>
        <button class="bg-[#2196F3] w-[125px] h-14 text-white">Найти</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-filter {
  display: flex;
  align-items: center;
  gap: 13px;
}
button {
  border-radius: var(--borderRadius, 4px);
  color: var(--primary-contrast, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
}
.custom-input {
  border-radius: var(--borderRadius, 4px);
  border: 1px solid
    var(--components-input-outlined-enabled-border, rgba(0, 0, 0, 0.23));
}
</style>
