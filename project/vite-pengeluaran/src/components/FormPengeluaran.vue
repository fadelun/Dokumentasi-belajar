<script setup>
import { ref, reactive, defineEmits } from "vue";

const jumlah = ref(0);
const keterangan = ref("");

const emits = defineEmits(["form"]);

const sendEmit = () => {
  emits("form", jumlah.value, keterangan.value);
  jumlah.value = null;
  keterangan.value = "";
};
</script>
<template>
  <form @click.prevent="">
    <label for="jumlah">Jumlah:</label>
    <input
      type="number"
      id="jumlah"
      name="jumlah"
      pattern="[0-9]+"
      v-model.number="jumlah"
      placeholder="10000"
    />
    <label for="keterangan">Keterangan:</label>
    <input type="text" id="keterangan" name="keterangan" v-model="keterangan" />
    <button @click="sendEmit">Enter</button>
  </form>
</template>
<style scoped>
form {
  border: 4px dashed black;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

form label {
  margin-bottom: 8px;
}

form input {
  padding: 10px;
  font-size: 1.3rem;
  width: 100%;
  margin-bottom: 14px;
}
</style>
