<template>
  <div class="posti-list-container">
    <hr class = "line"/>
    <div class="posti-list" v-for="posti in postis" :key="posti._id" >
      <posti-preview @changeLike="changeLike(posti)" :posti="posti" />
    </div>
  </div>
</template>

<script>
import postiPreview from './posti-preview'
export default {
  name: "postiList",
  props: {
    postis: {
      type: Array,
    },
  },

  methods:{
    changeLike(posti){
      console.log('posti-list posti==',posti)
      this.$emit('changeLike', posti);
    }
  },
  components: {
    postiPreview,
  },
};
</script>