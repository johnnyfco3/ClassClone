import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useMessage = defineStore('message', {
  state: () => ({
    notifications: [] as Notification[]
  }),
  actions: {
    close(index: number) {
        this.notifications.splice(index, 1);
    }
}
})

export interface Notification {
    type: 'success' | 'danger' | 'warning' | 'info';
    message: string;
}