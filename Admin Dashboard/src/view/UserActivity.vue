<script setup lang="ts">
import { ref } from 'vue'
import RecentOrders from './RecentOrders.vue';

const userActivitys = ref([
   { label: 'New', value: 70 },
   { label: 'Returning', value: 45 },
   { label: 'Inactive', value: 30 }
])

</script>
<template>
   <div class="user-activity-card">
      <div class="user-activity-header">
         <h2 class="user-activity-title">User Activity</h2>
      </div>
      <div class="user-activity-list">
         <div v-for="(userActivity, index) in userActivitys" :key="index" class="user-activity-item">
            <span class="activity-label">{{ userActivity.label }}</span>
            <div class="progress-bar">
               <div class="progress-fill" :style="{ width: userActivity.value + '%' }"></div>
            </div>
         </div>
      </div>
   </div>
   <div>
      <RecentOrders />
   </div>

</template>
<style scoped>
.user-activity-card {
   border: 2px solid #e8797933;
   padding: 10px;
   margin: 10px;
   border-radius: 8px;
   box-shadow: 0 2px 8px #0000000d;
}

.user-activity-title {
   padding: 5px;
   margin: 5px;
   font-size: 24px;
   font-weight: 600;
}

.user-activity-item {
   display: flex;
   align-items: center;
   gap: 10px;
   margin: 8px 0;
}

.activity-label {
   width: 80px;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: 2px;
   padding-right: 20px;
}

.progress-bar {
   flex: 1;
   height: 20px;
   background-color: #e5e7eb;
   border-radius: 4px;
   overflow: hidden;
}

.progress-fill {
   height: 100%;
   background-color: #3b82f6;
   transition: width 0.3s ease;
   border-radius: 6px 0 0 4px;
}
</style>