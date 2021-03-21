<template>
  <section class="user-profile">
    <div class="creator">
          <img class="creator-img" :src="fullLoggedInData.imgUrl" alt="image" />
          <div class="user-data">
            <div>
                <span>{{ fullLoggedInData.username }}</span>
                <!-- <button>Edit Profile</button> -->
            </div>
            <div class="counters-container">
                <span><span class="num">{{ postsCount }}</span>{{posts}}</span>
                <span><span class="num">{{ followersCount }}</span>{{followers}}</span>
                <span><span class="num">{{ followingCount }}</span>{{following }}</span>
            </div>
            <div class="full-name">{{ fullLoggedInData.fullname }}</div>
          </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'userProfile',
  data(){
      return{
        // fullUserData:{},
      }
  },
  computed:{
      fullLoggedInData(){
          return this.$store.getters.fullUserData
      },
      posts(){
          return ' posts'
      },
      postsCount(){
          return `1`//temp - take from postiStore
      },
      followers(){
          return ' followers'
      },
      followersCount(){
          return this.fullLoggedInData.followers.length
      },
      following(){
          return ' following'
      },
      followingCount(){
          return this.fullLoggedInData.following.length
      }
  },
  created(){
      this.$store.dispatch({type:'setFullUserData', userId:this.$route.params.userId});
  },
  components: {
  }
}
</script>