import {postiService} from '../services/posti.service.js'

export const postiStore = {
    state: {
        postis : [],
        loading : false,
    },
    getters: {
        loading(state){
            return state.loading;
        },
        postis(state){
            return state.postis;
        },
    },

    mutations: {
        setPostis(state, {postis}) {
            state.postis = postis;
        },
        setLoadingState(state, {val}){
            state.loading = val;
        },
    },
    actions: {
        async loadPostis(contex) {
            contex.commit({ type: 'setLoadingState', val:true });
            try{
                console.log('before  postis store')
                const postis = await postiService.query()
                console.log('postis store=',postis)
                contex.commit({ type: 'setPostis', postis });
            }catch (err){
                console.log('Store: Cannot load postis...', err);
                throw new Error('Cannot load postis...');
            }finally{
                console.log('finally  postis store')
                contex.commit({ type: 'setLoadingState', val:false });
            }
        },

    },
}