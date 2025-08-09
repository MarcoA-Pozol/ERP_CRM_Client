<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from "axios";
import { useGlobalStore } from '../stores/global';

const data = ref(null);
const loading = ref(true);
const error = ref<string | null>(null);
const imageURL = ref("");
const globalContext = useGlobalStore();

watch(
  () => globalContext.notificationsCount, async() => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random");
      data.value = response.data;
      imageURL.value = response.data.message;
    } catch (err) {
      error.value = "Failed to fetch data";
    } finally {
      loading.value = false;
    }
  }
)


onMounted(async () => {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    data.value = response.data;
    imageURL.value = response.data.message;
  } catch (err) {
    error.value = "Failed to fetch data";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <p>Notifications total count: {{ globalContext.notificationsCount }}</p>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div class="data-container" v-else>
    <pre>{{ data }}</pre>
    <img :src="imageURL" style="width: 300px; object-fit: cover;"/>
  </div>
</template>

<style scoped>
    .data-container {
        background-color: wheat;
        color: indigo;
        font-weight: bold;
        text-align: center;
        display: block;
        border-radius: 5px;
        border: 2px solid indigo;
    }
</style>