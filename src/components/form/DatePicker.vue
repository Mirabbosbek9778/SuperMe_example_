<script setup></script>

<template>
  <div class="flex mt-[26px] gap-5 w-full">
    <div class="input-group w-[130px]">
      <label class="input-group__label" for="myInput">Статус</label>
      <select name="" id="" class="input-group__input h-14">
        <option value="">Спящий</option>
        <option value="">Спящий2</option>
        <option value="">Спящий3</option>
        <option value="">Спящий4</option>
      </select>
    </div>
    <div class="input-group w-[217px]">
      <label class="input-group__label" for="myInput">Страна</label>
      <input type="text" class="input-group__input " placeholder="Россия" />
    </div>
    <div class="input-group w-[247px]">
      <label class="input-group__label" for="myInput">Город</label>
      <input type="text" class="input-group__input " placeholder="Москва" />
    </div>
    <div class="input-group w-[113px]">
      <label class="input-group__label" for="myInput">Пол</label>
      <select name="" id="" class="input-group__input h-14 ">
        <option value="">М</option>
        <option value="">Ж</option>
        <option value="">М1</option>
        <option value="">Ж1</option>
      </select>
    </div>
    <div class="input-group w-[191px]">
      <label class="input-group__label" for="myInput">Возраст</label>
      <input type="text" class="input-group__input " placeholder="Москва" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selectt {
  width: 130px;
}
.input-group {
  @supports (mix-blend-mode: darken) {
    position: relative;
    &__label {
      position: absolute;
      top: -0.5em;
      left: 16px;
      background: white;
    }
  }
  &__label {
    color: var(--text-secondary, rgba(0, 0, 0, 0.6));
    font-feature-settings: "clig" off, "liga" off;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.15px;
  }
  &__input {
    width: 100%;
    padding-left: 12px;
    border: 1px solid
      var(--components-input-outlined-enabled-border, rgba(0, 0, 0, 0.23));
  }
  border-radius: var(--borderRadius, 4px);
}
</style>
