import { userService } from "../services/user.service.js";

export const userStore = {
    state: {
        loggedinUser: userService.getLoggedinUser(),
    },
    getters: {
        loggedinUser(state) {
            return state.loggedinUser
        },
    },
    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },   
    },
    actions: {

        
    }
}