<template>
  <section class="posti-app">
    <posti-list :postis="postis" />
  </section>
  <!-- TODO: add paging by scroll-->
</template>

<script>
import postiList from '../cmps/posti-list'
var postis = require('../../populate-data/postis.json');

export default {
  name: "postiApp",
  computed: {
       postis(){
            return postis  
        },
  },
  created() {
    // console.log("postis", postis);
  },
  components: {
    postiList
  },
};
</script>
