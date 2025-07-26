<script setup lang="ts">
import { ref } from 'vue';

const showAccount = ref(false);
const showNotification = ref(false);

</script>
<template>
   <div class="dashboard">
      <h2 class="admin-header-title">Admin DashBoard</h2>
      <div class="admin-header__actions">
         <button class="admin-header__search">🔍</button>
         <div>
            <button class="admin-header__notofication"
               @click="showNotification = showNotification == false ? true : false">🔔</button>
            <div class="admin-header__dropdown" v-if="showNotification">
               <p class="notification">Notification 1</p>
               <p class="notification">Notification 2</p>
               <p class="notification">Notification 3</p>
               <p class="notification">Notification 4</p>
            </div>
         </div>
         <div class="admin-header__profile-menu">
            <button class="admin-header__icon" @click="showAccount = showAccount == false ? true : false">👤</button>
            <div class="admin-header__dropdown" v-if="showAccount">
               <a href="#" class="admin-header__dropdown-link">Profile</a>
               <a href="#" class="admin-header__dropdown-link">Logout</a>
            </div>
         </div>

      </div>
   </div>
</template>
<style scoped>
.admin-header__actions {
   display: flex;
   gap: 3px;
   justify-content: flex-end;
}

.dashboard {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   margin: 10px;
}

.admin-header-title {
   padding: 0;
   margin: 0;
   display: inline;
}

.admin-header__search {
   flex-grow: 0;
   flex-shrink: 3;
}

.admin-header__profile-menu,
.admin-header__notofication {
   flex-grow: 0;
   position: relative;
}


.admin-header__dropdown {
   position: absolute;
   z-index: 1;
   background-color: #ffffff;
   width: 150px;
   right: 20px;
   border-radius: 3px;
   text-align: center;
   padding: 5px 0;
   margin-top: 8px;
}

.admin-header__dropdown-link,
.notification {
   display: block;
   padding: 2px;
   text-decoration: none;
   margin: 2px;
   word-spacing: 5px;
   letter-spacing: 1.5px;
}

.admin-header__dropdown-link:hover,
.notification:hover {
   background-color: #605858;
   color: #ffffff;
   border-radius: 2px;
   font-weight: 600;
}
</style>