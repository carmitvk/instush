<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import appHeader from './cmps/app-header' 
import appFooter from './cmps/app-footer' 

export default {
  created(){
      this.$store.dispatch({type:'loadPostis'});
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>