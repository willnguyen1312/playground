<script setup lang="ts">
import { onMounted } from "vue";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

onMounted(async () => {
  console.log("mounted");
  const { data } = await axios.get("http://localhost:3000/api");
  console.log(data);

  const form = new FormData();
  form.append("Greeting", "Namaste");

  await axios.post("http://localhost:3000/api", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
});

const uploadOne = () => {
  const fileInput = document.getElementById("fileInput") as HTMLInputElement;
  const file = fileInput.files?.[0];
  if (!file) return;
  const form = new FormData();
  form.append("file", file);
  axios.post("http://localhost:3000/api/upload", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const uploadMultiple = () => {
  const fileInput = document.getElementById("fileInput") as HTMLInputElement;
  const files = fileInput.files;
  if (!files) return;
  const form = new FormData();
  for (let i = 0; i < files.length; i++) {
    form.append("files", files[i]);
  }
  axios.post("http://localhost:3000/api/uploads", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <input type="file" id="fileInput" multiple />
  <button @click="uploadMultiple">Submit</button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
