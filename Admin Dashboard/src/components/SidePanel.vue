<script setup lang="ts">
</script>
<template>
   <div class="admin-header">
      <div class="admin-header-panel">
         <div class="admin-header__logo">
            Admin Panel
         </div>
         <nav class="admin-header__nav">
            <router-link to="/dashboard" class="admin-header__link">Dashboard</router-link>
            <router-link to="/users" class="admin-header__link">Users</router-link>
            <router-link to="/orders" class="admin-header__link">Orders</router-link>
            <router-link to="/reports" class="admin-header__link">Reports</router-link>
            <router-link to="/settings" class="admin-header__link">Settings</router-link>
         </nav>
      </div>
   </div>

</template>
<style scoped>
.admin-header {
   background-color: #ffffff;
   display: flex;
}

.admin-header__nav,
.admin-header__logo {
   display: grid;
   grid-template-columns: auto;
   font-size: 16px;
   color: #ffffff;
   padding: 5px;
   word-spacing: 5px;
   letter-spacing: 1.5px;
   text-align: center;
}
.admin-header__logo {
   font-size: 24px;
   margin-bottom: 8px;
}
.admin-header__link.router-link-active {
   font-weight: bold;
   text-decoration: none;
   color: #ffffff;
   margin: 2px 5px;
   padding: 10px;
   background-color: #6f88ec;
   border: unset;
   outline: none;
}

.admin-header__link.router-link-active:hover {
   border: unset;
   outline: none;
}

.admin-header-panel {
   width: 200px;
   height: 100vh;
   border-radius: 3px;
   background-color: #2e3446;
}

.admin-header__link {
   text-decoration: none;
   color: #ffffff;
   margin: 2px 5px;
   padding: 10px;
}

.admin-header__link:hover {
   padding: 10px;
   border-radius: 3px;
   font-weight: 600;
   border: 1px solid #e8e8e8;
}
</style>