<template>
  <section class="posti-app">
    <div v-if="isPostisLoading" class="postisLoading">
      <img class="loading-gif" src="@/assets/img/reg-loading.gif">
    </div>
    <div v-else>
      <posti-list @addComment="addComment" @changeCommentLike="changeCommentLike" @changeLike="changeLike" :postis="postis" />
     </div>
  </section>
  <!-- TODO: add paging by scroll-->
</template>

<script>
import postiList from '../cmps/posti-list'

export default {
  name: "postiApp",

  methods:{
    changeLike(currPosti){
        this.$store.dispatch({type:'changeLike', data:{posti:currPosti, loggedinUser:this.$store.getters.loggedinUser}});
    },
    changeCommentLike(data){
      this.$store.dispatch({type:'changeCommentLike', data:{posti:data.posti, comment:data.comment, loggedinUser:this.$store.getters.loggedinUser}});
    },
    addComment(data){
      this.$store.dispatch({type:'addComment', data});
    },
  },
  computed: {
    postis(){
        return this.$store.getters.postis  
    },
    isPostisLoading(){
        return this.$store.getters.loading  
    }
  },
  created() {
        // this.$store.dispatch({type:'loadPostis'});
  },
  components: {
        postiList
  },
};
</script>
