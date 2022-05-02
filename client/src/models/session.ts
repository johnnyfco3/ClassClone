import router from "../router"
import * as users from "../models/user"
import { useMessage } from "./messages"
import { api } from "./myFetch"
import { defineStore } from "pinia"
import { decodeJWT, loadScript } from "./utils"

export const useSession = defineStore('session', {
    state: () => ({
        user: undefined as users.User | undefined,
        destinationURL: null as string | null
    }),
    actions: {
        async GoogleLogin(){
            await loadScript('https://accounts.google.com/gsi/client', 'google-signin')
            google.accounts.id.initialize({
                client_id: <string>import.meta.env.VITE_GOOGLE_CLIENT_ID,
                callback: x => {
                    const user = decodeJWT(x.credential)
                    console.log(user)
                    this.user = {
                        _id: user.sub,
                        email: user.email,
                        firstName: user.given_name,
                        lastName: user.family_name,
                        pic: user.picture,
                        handle: user.email,
                        password: ''
                    }
                }
              });
            google.accounts.id.prompt(() => {});
        },
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
            this.user = undefined
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