<template>
  <section class="posti-app">
    <div v-if="isPostisLoading" class="postisLoading">
      <img class="loading-gif" src="@/assets/img/reg-loading.gif">
    </div>
    <div v-else>
      <posti-list @changeLike="changeLike(posti)" :postis="postis" />
     </div>
  </section>
  <!-- TODO: add paging by scroll-->
</template>

<script>
import postiList from '../cmps/posti-list'

export default {
  name: "postiApp",

  methods:{
    changeLike(posti){
      console.log('posti-app posti==',posti)
        this.$store.dispatch({type:'changeLike', posti:posti});
    }
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
        this.$store.dispatch({type:'loadPostis'});
  },
  components: {
        postiList
  },
};
</script>
