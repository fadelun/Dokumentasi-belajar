<script setup>
import Title from "./components/Title.vue";
import FormPengeluaran from "./components/FormPengeluaran.vue";
import ListPengeluaran from "./components/ListPengeluaran.vue";
import { ref } from "vue";

const daftar = ref([
  // contoh isi daftar
  // {
  //   jumlah: 2000,
  //   keterangan: "Beli Aoka sedus",
  // },
  // {
  //   jumlah: 10000,
  //   keterangan: "top up COC",
  // },
  // {
  //   jumlah: 500,
  //   keterangan: "tempe",
  // },
]);

const catatPengeluaran = (jumlah, keterangan) => {
  daftar.value.push({ jumlah, keterangan });
};
</script>

<template>
  <Title />
  <FormPengeluaran @form="catatPengeluaran" />
  <ListPengeluaran :daftar="daftar" />
</template>

<style></style>
