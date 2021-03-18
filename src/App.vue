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
      // <div v-if="isPostisLoading" class="postisLoading">
      //     <img src="https://res.cloudinary.com/carmitvk/image/upload/v1615995979/instagram/icons/loading_kym1kw.gif">
      // </div>
      // <div v-else>
  },
  components: {
    appHeader,
    appFooter
  }
}
</script>