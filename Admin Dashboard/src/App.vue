<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import SidePanel from './components/SidePanel.vue'
</script>

<template>
  <div class="page_content">
    <SidePanel />
    <div class="main_content ">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.page_content {
  display: flex;
  height: 100vh;
  gap: 3px;
  margin: 10px 0;
}

.main_content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}
</style>
