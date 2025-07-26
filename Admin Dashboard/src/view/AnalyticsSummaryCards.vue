<script setup lang="js">
import {
   ShoppingCartIcon,
   UserIcon,
   ChartPieIcon,
   ShoppingBagIcon,
   EyeIcon
} from '@heroicons/vue/24/solid'
import RecentOrders from './RecentOrders.vue';
</script>
<template>
   <div class="dashboard-cards-wrapper">
      <div class="stat-card">
         <div class="stat-amount">
            <div class="stat-icon">
               <div class="my-icon ruppe">₹</div>
            </div>
            <div class="stat-value">12,340</div>
         </div>
         <div class="stat-label">Total Sales</div>
      </div>
      <div class="stat-card">
         <div class="stat-amount">
            <div class="stat-icon">
               <UserIcon class="my-icon" />
            </div>
            <div class="stat-value">1,340</div>
         </div>
         <div class="stat-label">Total Users</div>
      </div>
      <div class="stat-card">
         <div class="stat-amount">
            <div class="stat-icon">
               <ShoppingCartIcon class="my-icon" />
            </div>
            <div class="stat-value">12,340</div>
         </div>
         <div class="stat-label">Total Orders</div>
      </div>
      <div class="stat-card">
         <div class="stat-amount">
            <div class="stat-icon">
               <EyeIcon class="my-icon" />
            </div>
            <div class="stat-value">12,340</div>
         </div>
         <div class="stat-label">Current Visitors</div>
      </div>
   </div>
</template>
<style scoped>
.dashboard-cards-wrapper {
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   margin: 10px 0;
}

.stat-card {
   border: 2px solid #e8797933;
   box-shadow: 0 2px 8px #0000000d;
   align-items: baseline;
   align-content: center;
   padding: 5px;
   margin: 5px;
   min-width: 150px;
   min-height: 80px;
   max-width: 200px;
   text-align: left;
   font-size: 18px;
   font-weight: 400;
   border-radius: 8px;
}

.my-icon {
   width: 24px;
   height: 24px;
   fill: #e87979;
   color: #e87979;
}

.ruppe {
   margin-right: -10px !important;
}

.stat-amount {
   display: flex;
   justify-content: center;
   font-weight: 800;
   font-size: 24px;
}

.stat-card div {
   padding: 0 5px;
   margin: 0 5px;
}
</style>