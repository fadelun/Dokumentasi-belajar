<script setup>
import { ref, defineEmits, onMounted } from "vue";

const props = defineProps({
  baseURL: String,
});

const jumlah = ref("");
// declare a ref to hold the element reference
const selectInput = ref(null);
const keterangan = ref("");

const emits = defineEmits(["form", "reset", "unduh"]);

onMounted(() => {
  selectInput.value.focus();
});

const emitEnter = () => {
  emits("form", jumlah.value, keterangan.value);
  jumlah.value = "";
  keterangan.value = "";
};

const emitReset = () => {
  emits("reset");
};

const emitUnduh = () => {
  emits("unduh");
};
</script>
<template>
  <form @click.prevent="">
    <label for="jumlah">Jumlah:</label>
    <input
      ref="selectInput"
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
      <button @click="emitUnduh" class="download" disabled>
        <i class="fa-solid fa-download"></i>
      </button>
      <!-- <PopUp v-if="baseURL" :baseURL="baseURL" /> -->
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

.download {
  background-color: rgb(80, 80, 255);
  opacity: 0.4;
  color: whitesmoke;
}
</style>
