import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        notificationsCount: 0,
        employee: null as null | { firstname: string, lastname: string }
    }),
    actions: {
        increaseNotificationsCount() {
            this.notificationsCount++;
        },
        diminishNotificationsCount() {
            this.notificationsCount--;
        }
    }
});
