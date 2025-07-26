<script setup lang="ts">
import AnalyticsSummaryCards from './AnalyticsSummaryCards.vue';
import RevenueChart from './RevenueChart.vue';
import UserActivity from './UserActivity.vue';

</script>

<template>
   <main>
      <AnalyticsSummaryCards />
      <div class="analytics-section">
         <div>
            <RevenueChart />
         </div>
         <div>
            <UserActivity />
         </div>
      </div>
   </main>
</template>
<style scoped>
.analytics-section {
   display: flex;
   gap: 20px;
   flex-wrap: nowrap;
}
.analytics-section div{
   width: 100%;
}
</style>
