import { reactive } from "vue"
import router from "../router"
import * as users from "../models/user"
import { useMessage } from "./messages"

const session = reactive({
    user: null as users.User | null,
    destinationURL: null as string | null
})

export async function Login(handle: String, password: String) {
    const user = users.list.find(u => u.handle === handle)
    const messages = useMessage();

    try {    
        if(!user){
            throw { message: 'User not found' };
        }
    
        if(user.password !== password){
            throw { message: 'Incorrect Password' }
        }
    
        messages.notifications.push({
            type: "success",
            message: `Welcome back ${user.firstName}`
        })

        session.user = user
        router.push(session.destinationURL ?? '/wall')
        
    } catch (error: any) {
        messages.notifications.push({
            type: "danger",
            message: error.message
        })
    }
}

export function Logout(){
    session.user = null
    router.push('/login')
}

export default session;