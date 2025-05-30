<script setup lang="ts">
import { useUsersStore } from '@/stores/useUsersStore'
import UserRow from './UserRow.vue'

const store = useUsersStore()
const add = () => store.addUser();
// const deleteRow = (index: number) => store.deleteUser(index);
</script>

<template>
  <div>
    <h2 class="text-xl">Учетные записи 
      <button class="border border-blue-500 text-gray-700 px-4 py-1 rounded mt-1" @click="add">+</button>
    </h2>
    <div class="user-row">
      <p class = "text-sm text-gray-800">
        Метка
      </p>
      <p class = "text-sm text-gray-800">
        Тип записи
      </p>
      <p class = "text-sm text-gray-800">
        Логин
      </p>
      <p class = "text-sm text-gray-800">
        Пароль
      </p>
    </div>
    <UserRow
      v-for="(user, i) in store.users"
      :key="user.id"
      :user="user"
      :index="i"
    />
  </div>
</template>
<style scoped>
.user-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
</style>
