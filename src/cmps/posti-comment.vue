<template>
    <section class="posti-comment">
    <span class="user-name" @hover="openModalUser(posti.creator)">{{ posti.creator.fullname }}</span>
    <span>{{ posti.description }}</span>
    
    <div class="comment" v-for="comment in posti.comments" :key="comment._id" >
      <div>
        <span class="user-name" @hover="openModalUser(comment.by)">{{ comment.by.fullname }}</span>
        <span>{{ comment.txt }}</span>
      </div>
      <div>
          <img v-if="isLike" class="comment-like" src="../assets/img/red-hart.svg" alt="image" />
          <img v-else class="comment-like" src="../assets/img/white-hart.svg" alt="image" />
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props: {
    posti: {
      type: Object,
    },
  },
    data(){
        return{
            
            // :computeCommentLike,
        }
    },
    methods:{
    openModalUser(user){
        console.log('openModalUser for userId=',user)
    },
    },
  computed: {
    isLike(){
        return true;
    },
  },
};
</script>