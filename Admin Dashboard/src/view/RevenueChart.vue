<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
   Chart as ChartJS,
   Title,
   Tooltip,
   Legend,
   LineElement,
   CategoryScale,
   LinearScale,
   PointElement
} from 'chart.js'
import RecentOrders from './RecentOrders.vue'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = ref(
   {
      labels: Array.from({ length: 9 }, (_, i) => i),
      datasets: [{
         label: 'Revenue',
         data: [1000, 3000, 2500, 5000, 4000, 6500, 6000, 8500,],
         fill: true,
         borderColor: '#3b82f6',
         backgroundColor: 'rgba(59, 130, 246, 0.1)',
         tension: 0.4
      }]
   }
)

const chartOptions = {
   responsive: true,
   plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: true }
   },
   scales: {
      y: {
         beginAtZero: true,
         ticks: {
            callback: function (value) {
               return value.toLocaleString()
            }
         }
      }
   }
}

onMounted(() => {
   setInterval(() => {
      const newValue = Math.floor(Math.random() * 7000) + 2000
      const currentData = chartData.value.datasets[0].data
      const updatedData = [...currentData.slice(1), newValue]
      chartData.value.datasets[0].data = updatedData
   }, 2000)
})
</script>
<template>
   <div class="revenue-chart-card">
      <h2 class="title">Revenue</h2>
      <Line :data="chartData" :options="chartOptions" />
   </div>
   <div>
      <RecentOrders />
   </div>
</template>
<style scoped>
.revenue-chart-card {
   padding: 16px;
   border-radius: 12px;
   box-shadow: 0 2px 8px #0000000d;
   background: #fff;
   width: 100%;
   max-width: 500px;
   border: 2px solid #e8797933;
   margin: 10px;
}

.title {
   font-size: 16px;
   margin-bottom: 8px;
   font-weight: 600;
}
</style>