import { userService } from "../services/user.service.js";

export const userStore = {
    state: {
        loggedinUser: userService.getLoggedinUser(),
        fullUserData: null,
        users:null,
    },
    
    getters: {
        loggedinUser(state) {
            return state.loggedinUser
        },

        fullUserData(state) {
            return state.fullUserData
        },
    },

    mutations: {
        setUser(state, { user }) {
            state.loggedinUser = user;
        },
        setFullUserData(state, { fullUserData }){
            state.fullUserData = fullUserData;
        },
        loadUsers(state, { users }){
            state.users = users;
        },
    },

    actions: { 
        async loadUsers(contex){
            try{
                contex.commit({ type: 'setLoadingState', val:true });
                var users = await userService.getUsers()
                contex.commit({ type: 'loadUsers', users });
            }catch(err){
                console.log('loadUsers: cant load users', err);
                throw new Error('UserStore: cant load users');
            } finally{
                contex.commit({ type: 'setLoadingState', val:false });
            }
        },
        async setFullUserData(contex, {userId}){
            try{
                contex.commit({ type: 'setLoadingState', val:true });
                var fullUserData = await userService.getById(userId)
                contex.commit({ type: 'setFullUserData', fullUserData });
            }catch(err){
                console.log('UserStore: cant get user by Id', err);
                throw new Error('UserStore: cant get user by Id');
            } finally{
                contex.commit({ type: 'setLoadingState', val:false });
            }
        },
        
    }
}