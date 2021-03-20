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
        // changeStoreLike(state, {posti}) {

        // }
    },
    actions: {
        async loadPostis(contex) {
            try{
                contex.commit({ type: 'setLoadingState', val:true });
                const postis = await postiService.query()
                contex.commit({ type: 'setPostis', postis });
            }catch (err){
                console.log('Store: Cannot load postis...', err);
                throw new Error('Cannot load postis...');
            }finally{
                console.log('finally postis store')
                contex.commit({ type: 'setLoadingState', val:false });
            }
        },
        async changeLike(contex, {posti}) {
            try{
                var idx = this.posti.likedBy.findIndex((like) => {
                    return like._id === this.store.loggedinUser._id;
                });
                if (idx === -1){ //i did not signed as liked. so now add me to likedBy arr
                    posti.likedBy.push(this.store.loggedinUser._id);
                }else{  //i already liked, remove it
                    posti.likedBy.splice(idx, 1)
                }
                // const savedPosti = 
                await postiService.save(posti)
                // contex.commit({ type: 'changeStoreLike', savedPosti });
            }catch(err){
                console.log('Store: Cannot save posti', err);
                throw new Error('Cannot save posti');
            }
        }




        // var Idx = this.posti.likedBy.findIndex((like) => {
        //     return like._id === this.$store.getters.loggedinUser._id;
        // });
        // if (Idx === -1){ //i did not signed as liked. so now add me to likedBy arr
        //     likedBy.push(state.loggedInUser);
        // }else{  //i already liked, remove it
        //     likedBy.splice(idx, 1)
        // }




    },
}