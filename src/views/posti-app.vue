<template>
  <section class="posti-app">
    <div v-if="isPostisLoading" class="postisLoading">
      <img class="loading-gif" src="@/assets/img/reg-loading.gif">
    </div>
    <div v-else>
      <posti-list :postis="postis" />
     </div>
  </section>
  <!-- TODO: add paging by scroll-->
</template>

<script>
import postiList from '../cmps/posti-list'

export default {
  name: "postiApp",
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
