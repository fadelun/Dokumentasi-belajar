<script setup>
import Title from "./components/Title.vue";
import FormPengeluaran from "./components/FormPengeluaran.vue";
import ListPengeluaran from "./components/ListPengeluaran.vue";
import { ref, computed } from "vue";

const daftar = ref([
  // contoh isi daftar
  // {
  //   jumlah: 2000,
  //   keterangan: "Beli Aoka sedus",
  // },
  // {
  //   jumlah: 100,
  //   keterangan: "top up COC",
  // },
  // {
  //   jumlah: 500,
  //   keterangan: "tempe",
  // },
]);

// tampilkan daftar
const showList = computed(() => daftar.value.length > 0);

// menambahkan seluruh jumlah pengeluaran
const totalSemua = computed(() =>
  daftar.value.reduce((total, item) => total + parseFloat(item.jumlah), 0),
);

const catatPengeluaran = (jumlah, keterangan) => {
  if (jumlah.length > 0 && keterangan.length > 0) {
    return daftar.value.push({ jumlah, keterangan });
  }
  console.log(jumlah.length);
  console.log(keterangan.length > 0);
  console.log(totalSemua);

  alert("eror");
};
</script>

<template>
  <Title />
  <FormPengeluaran @form="catatPengeluaran" />
  <ListPengeluaran v-if="showList" :daftar="daftar" :totalSemua="totalSemua" />
</template>

<style></style>
