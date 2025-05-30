<script setup lang="ts">
import { ref } from "vue";
import { TrashIcon } from "@heroicons/vue/24/outline";
import type { User } from "@/stores/useUsersStore";
import { useUsersStore } from "@/stores/useUsersStore";
import {EyeSlashIcon, EyeIcon} from "@heroicons/vue/24/solid";

defineProps<{ user: User; index: number }>();

const store = useUsersStore();
const deleteRow = (id) => store.deleteUser(id);
const passwordVisible = ref(false);

const toggleVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<template>
  <div class="user-row p-2 rounded">
    <input
      class="border border-gray-200 rounded px-2 py-1 w-40"
      v-model="user.meta"
      placeholder="Метка"
    />
    <select
      class="border border-gray-200 rounded px-2 py-1 w-40"
      v-model="user.type"
    >
      <option class="" value="Локальная">Локальная</option>
      <option value="LDAP">LDAP</option>
    </select>
    <input
     :class="user.type === 'Локальная' ? 'border border-gray-200 rounded px-2 py-1 w-40' : 'border border-gray-200 rounded px-2 py-1 w-82'"
      
      v-model="user.login"
      placeholder="Логин"
    />
    <div class="flex" v-if="user.type === 'Локальная'">
      <input
        :type="passwordVisible ? 'text' : 'password'"
        class="border border-gray-200 rounded px-2 py-1 w-40"
        v-model="user.password"
        placeholder="Пароль"
      >
      <button class="-ml-6" @click="toggleVisibility">
        <component
            :is="passwordVisible ? EyeSlashIcon : EyeIcon"
            class="w-5 h-5"
          />
      </button>
      </input>
    </div>
    <button class="ml-3" @click="deleteRow(user.id)">
      <TrashIcon class="h-5 w-5" />
    </button>
  </div>
</template>

<style scoped>
.user-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

</style>
