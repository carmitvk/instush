<template>
  <div class="posti-list-container">
    <div class="posti-list" v-for="posti in postis" :key="posti._id" >
      <posti-preview @addComment="addComment" @changeCommentLike="changeCommentLike" @changeLike="changeLike(posti)" :posti="posti" />
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
      this.$emit('changeLike', posti);
    },
    changeCommentLike(data){
      this.$emit('changeCommentLike', data);
    },
    addComment(data){
      this.$emit('addComment', data);
    },
  },
  components: {
    postiPreview,
  },
};
</script>