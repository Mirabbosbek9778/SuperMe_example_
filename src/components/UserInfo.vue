<script setup></script>

<template>
  <div class="w-full h-[575px] pl-[19px]">
    <h1 class="pl-[19px] text-[24px] pt-[31px]">Информация</h1>
    <table class="h-full mt-8 w">
      <tr class="border-b dark:border-gray-300">
        <th class="text-nowrap">Данные</th>
        <td>RU • Push • Geo</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th class="text-nowrap">Имя</th>
        <td>Максим</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Фамилия</th>
        <td>Петров</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Пол</th>
        <td>Мужской</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Страна</th>
        <td>Россия</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Город</th>
        <td>Москва</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Email</th>
        <td>mail@rmail.com</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Возраст</th>
        <td>38</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>День рождения</th>
        <td>38</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Дата регистрации</th>
        <td>12.12.2.2022</td>
      </tr>
      <tr class="border-b dark:border-gray-300">
        <th>Push</th>
        <td>Да</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
th {
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 143%;
  letter-spacing: 0.17px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  display: flex;
  align-items: flex-start;
}
th.text-nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* padding-right: 50px; */
  display: flex;
  align-items: flex-start;
}
.border-b {
  padding-left: 10px;
}
</style>
