<script setup>
import {computed } from "vue"

const props = defineProps({
  daftar: Array,
});



</script>
<template>
    <h4>Total: </h4>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Jumlah</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in daftar" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.jumlah }}</td>
        <td>{{ item.keterangan }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: 100%;
  margin: 20px auto;
  table-layout: auto;
}
table,
td,
th {
  border-collapse: collapse;
}

table thead {
  background-color: var(--greentea);
}

th,
td {
  padding: 10px;
  border: solid 1px;
  text-align: center;
}
</style>
