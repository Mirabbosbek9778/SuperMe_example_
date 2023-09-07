<script setup></script>

<template>
  <div>
    <div class="flex gap-5 pt-[26px]">
      <div class="w-full">
        <div class="input-group">
          <label class="input-group__label" for="myInput">Поиск</label>
          <input
            type="text"
            class="input-group__input"
            placeholder="Имя, Фамилия, Email или ID"
          />
        </div>
      </div>
      <div class="btn-filter">
        <button class="bg-[#3DB68A] h-14 w-14 flex justify-center items-center">
          <div class="dropdown">
            <button class="dropButton">
              <img src="../../assets/icons/filterIcon.svg" alt="filter" />
            </button>
            <ul v-if="isOpen" class="dropdown-menu">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
            </ul>
          </div>
        </button>
        <button class="bg-[#2196F3] w-[125px] h-14 text-white">Найти</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropButton {
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background-color: #d82b2b;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
}
.dropdown-menu li {
  padding: 10px;
}
.dropdown-menu a {
  text-decoration: none;
  color: #333;
}
.dropdown-menu li:hover {
  background-color: #f2f2f2;
}
.isOpen + .dropdown-menu {
  display: block;
}
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
