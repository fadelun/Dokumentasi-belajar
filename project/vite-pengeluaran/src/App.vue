<script setup>
import Title from "./components/Title.vue";
import FormPengeluaran from "./components/FormPengeluaran.vue";
import ListPengeluaran from "./components/ListPengeluaran.vue";
import { ref, computed, watch, onMounted } from "vue";

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

onMounted(() => {
  // load localstorage
  daftar.value = JSON.parse(localStorage.getItem("daftar")) || [];
  // console.log(daftar.value);
});

// tampilkan daftar
const showList = computed(() => daftar.value.length > 0);

// data yang akan ditampilkan
const daftarStorage = computed(() => daftar.value.map((item) => item));

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

  alert("Kolom belum terisi");
};

// menambahkan item daftar ke localstorage
watch(
  daftar,
  (newDaftar) => {
    localStorage.setItem("daftar", JSON.stringify(newDaftar));
    // console.log(daftarStorage.value);
  },
  { deep: true },
);

// hapus daftar
const hapusItem = (item) => {
  daftar.value = daftar.value.filter((t) => t !== item);
};

const hapusSemuaDaftar = () => {
  daftar.value = [];
};
</script>

<template>
  <Title />
  <FormPengeluaran @form="catatPengeluaran" @reset="hapusSemuaDaftar" />
  <ListPengeluaran
    v-if="showList"
    :daftarStorage="daftarStorage"
    :totalSemua="totalSemua"
    @hapus="hapusItem"
  />
</template>

<style></style>
