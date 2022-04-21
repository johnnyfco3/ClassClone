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
                const user = await this.api("users/login", {email, password} )
        
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
        },
        async api(url: string, data?: any, method?: 'POST' | 'GET' | 'PUT' | 'DELETE', headers: any = {}){
            const messages = useMessage();

            if(this.user?.token){
                headers.Authorization = `Bearer ${this.user.token}`
            }

            try{
                const response = await api(url, data, method, headers)
                if(response.errors?.length){
                    throw { message: response.errors.join(', ') }
                }
                return await response.data
            }catch(error: any){
                messages.notifications.push({
                    type: "danger",
                    message: error.message
                })
            }
        }
    },
})

export interface ApiResult {
    data: any
    errors?: string[]
    success?: boolean
}