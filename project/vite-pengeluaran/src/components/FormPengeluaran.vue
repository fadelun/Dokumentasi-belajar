<script setup>
import { ref, reactive, defineEmits, watch } from "vue";

const jumlah = ref("");
const keterangan = ref("");

const emits = defineEmits(["form", "reset"]);

const emitEnter = () => {
  emits("form", jumlah.value, keterangan.value);
  jumlah.value = "";
  keterangan.value = "";
};

const emitReset = () => {
  emits("reset");
};
</script>
<template>
  <form @click.prevent="">
    <label for="jumlah">Jumlah:</label>
    <input
      type="text"
      id="jumlah"
      name="jumlah"
      pattern="[0-9]+"
      v-model="jumlah"
    />
    <label for="keterangan">Keterangan:</label>
    <input type="text" id="keterangan" name="keterangan" v-model="keterangan" />
    <div class="wrapper-button">
      <button @click="emitEnter" class="primary">Enter</button>
      <button @click="emitReset" class="danger">Reset</button>
    </div>
  </form>
</template>
<style scoped>
form {
  border: 4px dashed black;
  padding: 32px;
  margin-bottom: 20px;
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

button {
  margin-right: 8px;
}
.primary {
  background-color: var(--greentea);
}
.danger {
  background-color: rgb(248, 28, 28);
}
</style>
