import { defineStore } from "pinia";
import { api } from "./myFetch";

export const useUsers = defineStore('users', {
    state: () => ({
        list: [] as User[],
    }),
    actions: {
        async fetchUsers() {
            const users = (await api('users'))
            this.list = users.data
        },
    },
})

export interface User {
    firstName: string,
    lastName: string,
    handle: string,
    password: string,
    email: string,
    pic: string,
    _id: string,
    token?: string
}