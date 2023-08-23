<script setup>
import EditWord from "./EditWord.vue";
import { dataList } from "../mock";
</script>

<template>
  <div class="">
    <di class="flex ">
      <input type="text" placeholder="слово" />
      <button class="w-btnWidth h-btnHight boder bg-btnColor">Найти</button>
    </di>
    <table class="">
      <thead class="border">
        <tr class="">
          <th>
            #key
          </th>
          <th>
            RU
          </th>
          <th>
            EN
          </th>
          <th>
            ES
          </th>
          <th>
            FR
          </th>
          <th>
            DE
          </th>
        </tr>
      </thead>
      <tbody class="">
        <tr class="p-6 border" v-for="item in dataList" :key="item.id">
          <th>
            {{ item.town }}
          </th>
          <th>
            {{ item.rustate }}
          </th>
          <th>
            {{ item.enstate }}
          </th>
          <th>
            {{ item.esstate }}
          </th>
          <th>
            {{ item.frstate }}
          </th>
          <th>
            {{ item.destate }}
          </th>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>

  <!-- modal -->
  <EditWord />
</template>

<style lang="scss" scoped></style>
