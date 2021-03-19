<template>
    <section class="posti-comment">
      <span class="user-name" @hover="openModalUser(posti.creator)">{{ posti.creator.fullname }}</span>
      <span>{{ posti.description }}</span>
      <div class="all-comments" @click="openPostiDetails(posti.creator)">{{ allComments }}</div>
      
      <div class="comment" v-for="comment in posti.comments" :key="comment._id" >
          <comment-preview :comment="comment" />
      </div>
  </section>
</template>

<script>
import commentPreview from './comment-preview'
export default {
  props: {
    posti: {
      type: Object,
    },
  },
  data(){
      return{            
      }
  },
  methods:{
    openPostiDetails(user){//TODO - or pass id
      console.log('openPostiDetails for userId=',user)
    }
  },
  computed: {
    allComments(){
      return `View all ${this.posti.comments.length} comments`
    },
  },
  components: {
    commentPreview,
  },
};
</script>