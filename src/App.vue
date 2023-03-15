<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppCard from './components/AppCard.vue';
export default {
  name: 'App',
  components: { AppHeader, AppCard }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main class="container-fluid">
    <AppCard></AppCard>
  </main>
</template>