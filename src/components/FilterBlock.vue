<script setup>
import CustemInput from "./form/CustemInput.vue";
import CustemSelect from "./form/CustemSelect.vue";
import DatePicker from "./form/DatePicker.vue";
</script>

<template>
  <div class="w-[170vh]">
    <CustemInput />
    <DatePicker />
    <CustemSelect />
  </div>
</template>

<style lang="scss" scoped>
.text {
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 116.7%;
}
</style>
