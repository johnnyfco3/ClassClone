import router from "../router"
import * as users from "../models/user"
import { useMessage } from "./messages"
import { api } from "./myFetch"
import { defineStore } from "pinia"

export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationURL: null as string | null
    }),
    actions: {
        async Login(email: string, password: string) {
            const messages = useMessage();
        
            try {
                const user = await api("users/login", {email, password} )
        
                if(user){
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}`
                    })
        
                    this.user = user
                    router.push(this.destinationURL ?? '/wall')
                }
                
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message
                })
            }
        },
        Logout(){
            this.user = null
            router.push('/login')
        }
    },
})