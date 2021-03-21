import {postiService} from '../services/posti.service.js'

export const postiStore = {
    state: {
        postis : [],
        loading : false,
        filter: '',
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
        setFilter(state, {filter}) {
            state.filter = filter;
        }
    },
    actions: {
        async loadPostis(contex) {
            try{
                contex.commit({ type: 'setLoadingState', val:true });
                const postis = await postiService.query(contex.state.filter)
                contex.commit({ type: 'setPostis', postis });
            }catch (err){
                console.log('Store: Cannot load postis...', err);
                throw new Error('Cannot load postis...');
            }finally{
                contex.commit({ type: 'setLoadingState', val:false });
            }
        },
        
        async changeLike(contex, {data}) {
            const {posti,loggedinUser} = data;
            try{
                var idx = posti.likedBy.findIndex((like) => {
                    return like._id === loggedinUser._id;
                });
                if (idx === -1){ //did not signed as liked. so now add me to likedBy arr
                    posti.likedBy.push(loggedinUser);
                }else{  //i already liked, remove it
                    posti.likedBy.splice(idx, 1)
                }
                await postiService.save(posti)
            }catch(err){
                console.log('changeLike - cannot save posti', err);
                throw new Error('changeLike - cannot save posti');
            }
        },
        async changeCommentLike(contex, {data}) {
            const {posti,comment,loggedinUser} = data;
            try{
                var idx = comment.likedBy.findIndex((likedByUser) => {
                    return likedByUser._id === loggedinUser._id;
                });
                if (idx === -1){ //did not signed as liked. so now add me to likedBy arr
                    comment.likedBy.push(loggedinUser);
                }else{  //i already liked, remove it
                    comment.likedBy.splice(idx, 1)
                }
                await postiService.save(posti)
                // contex.commit({ type: 'changeCommentLike', savedPosti });//ref so dont really needed here
            }catch(err){
                console.log('changeCommentLike: Cannot change like comment of posti', err);
                throw new Error('Cannot change like comment of posti');
            }
        },
        async addComment(contex, {data}) {
            const {posti,comment} = data;
            try{
                posti.comments.push(comment);
                await postiService.save(posti)
            }catch(err){
                console.log('addComment: Cannot add comment to posti', err);
                throw new Error('Cannot add comment to posti');
            }
        },
        async setFilter(contex, {filter}) {
            try{
                contex.commit({ type: 'setFilter', filter });
                this.dispatch({ type: 'loadPostis'}); //???
            }catch(err){
                console.log('setFilter: Cannot set filter', err);
                throw new Error('Cannot set filte');
            }
        }
    },
}