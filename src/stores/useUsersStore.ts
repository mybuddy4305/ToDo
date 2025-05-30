import { defineStore } from 'pinia'

export interface User {
  id: number
  meta: string
  type: 'Локальная' | 'LDAP'
  login: string
  password: string
}

let idCounter = 0

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    addUser() {
      this.users.unshift({
        id: ++idCounter,
        meta: '',
        type: 'Локальная',
        login: '',
        password: '',
      })
    },
    deleteUser(index: number) {
      this.users.splice(index, 1)
    }
  },
})