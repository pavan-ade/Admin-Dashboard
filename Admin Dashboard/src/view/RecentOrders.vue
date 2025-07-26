<script setup lang="ts">

</script>
<template>
   <div class="table-container">
      <table class="customer-table">
         <thead>
            <tr>
               <th>ID</th>
               <th>Customer</th>
               <th>Date</th>
               <th>Amount</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>Pavan</td>
               <td>10-23-2005</td>
               <td>2,000</td>
            </tr>
            <tr>
               <td>1</td>
               <td>Pavan</td>
               <td>10-23-2005</td>
               <td>2,000</td>
            </tr>
         </tbody>
      </table>
   </div>

</template>
<style scoped>
.table-container {
   border: 2px solid #e8797933;
   margin: 10px;
   padding: 10px;
   box-shadow: 0 2px 8px #0000000d;
   border-radius: 8px;
}

.customer-table {
   width: 100%;
   border-collapse: collapse;
}
.customer-table th,
.customer-table td {
   border-collapse: collapse;
   text-align: center;
   letter-spacing: 1px;
   border-bottom: 2px solid #e879791a;
   margin: 5px 0;
   padding: 5px 0;
}
.customer-table th {
   font-weight: 800;
   font-size: 16px;
}
</style>