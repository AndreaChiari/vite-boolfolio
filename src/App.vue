<script>

import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import DetailPage from './pages/DetailPage.vue';

export default {
  name: 'App',
  components: { AppHeader, HomePage, DetailPage },
}
</script>

<template>
  <AppHeader></AppHeader>
  <main class="container">
    <RouterView></RouterView>
  </main>
</template>