<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  daftarStorage: Array,
  totalSemua: Number,
});

const emit = defineEmits(["hapus"]);

const handleHapus = (item) => {
  emit("hapus", item);
};
</script>
<template>
  <h2>Total: {{ totalSemua }}</h2>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Jumlah</th>
        <th>Keterangan</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in daftarStorage" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.jumlah }}</td>
        <td>{{ item.keterangan }}</td>
        <button class="btn-remove" @click="handleHapus(item)">
          <i class="fa-solid fa-eraser fa-lg"></i>
        </button>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  width: 100%;
  margin: 0px auto 20px;
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
tr {
  position: relative;
  height: 60px;
}
.btn-remove {
  position: absolute;
  right: -90px;
  top: 6px;
}
</style>
