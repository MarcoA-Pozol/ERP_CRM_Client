<script setup lang="ts">
  import { ref } from 'vue';
  import { useGlobalStore } from '../stores/global';
  
  defineProps<{ msg: string, hidText: string }>();

  const count = ref<number>(0);
  const isTextHid = ref<boolean>(false);
  const globalContext = useGlobalStore();

  const doILikeCoding = ref<boolean>(isTextHid.value);
</script>

<template>
  <h1 class="message">{{ msg }}</h1>

  <h2>Do I like to code?: {{ doILikeCoding }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="isTextHid=!isTextHid;doILikeCoding=!doILikeCoding">toggle hid text visibility</button>
    <p v-show="isTextHid">{{ hidText }}</p>
    <code>
      <hr/>
      print("Hello world!");
      <hr/>
      console.log("Hello world!");
      <hr/>
      System.out.println("Hello world!");
      <hr/>
    </code>
  </div>

  <div>
    <p>Notifications count: {{ globalContext.notificationsCount }}</p>
    <button @click="globalContext.increaseNotificationsCount">Increase</button>
    <button @click="globalContext.diminishNotificationsCount">Diminish</button>
  </div>
</template>

<style scoped>
  .message {
    font-family: monospace;
    will-change: filter;
    transition: filter 300ms;
  }
  .message:hover {
    filter: drop-shadow(0 0 1em #f13202);
    cursor: pointer;
  }
</style>
