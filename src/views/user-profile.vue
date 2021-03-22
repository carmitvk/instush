<template>
  <section class="user-profile">
    <div v-if="isLoading" class="loading">
      <img class="loading-gif" src="@/assets/img/reg-loading.gif">
    </div>
    <div v-else class="user-all-data">
        <div class="creator" v-if="fullLoggedInData">
            <img class="creator-img" :src="fullLoggedInData.imgUrl" alt="image" />
            <div class="user-data">
                <div>
                    <span>{{ fullLoggedInData.username }}</span>
                    <!-- <button>Edit Profile</button> -->
                </div>
                <div class="counters-container">
                    <span>
                        <span class="num">{{ loggedUserPostis.length }}</span>
                            <span class="num-title">posts</span>
                        </span>
                    <span @click="openFollowersModal" class="cursor">
                        <span class="num">{{ followersCount }}</span>
                        <span class="num-title">followers</span>
                    </span>
                    <span @click="openFollowingModal" class="cursor">
                        <span class="num">{{ followingCount }}</span>
                        <span class="num-title">following</span>
                    </span>
                </div>
                <user-list @dialogClosed="dialogClosed" :dialogVisible="dialogVisible" :users="users" 
                      :dialogTitle="title">
                </user-list>
                <div class="full-name">{{ fullLoggedInData.fullname }}</div>
            </div>
        </div>


        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :collapse-transition="true">
            <el-menu-item index="1">POSTS</el-menu-item>
            <el-menu-item index="2">SAVED</el-menu-item>
        </el-menu>

        <div v-if="activeIndex === '1'" class="posti-card-list card-grid"  >
            <posti-card v-for="(loggedUserPosti, index) in loggedUserPostis" :key="index" :posti="loggedUserPosti"></posti-card>
        </div>

        <div v-if="activeIndex === '2'" class="posti-card-list card-grid"  >
            <posti-card v-for="(savedUserPosti, index) in savedUserPostis" :key="index" :posti="savedUserPosti"></posti-card>
        </div>
    </div>
  </section>
</template>

<script>
import userList from '@/cmps/user-list'
import postiCard from '@/cmps/posti-card'

export default {
  name: 'userProfile',
  data(){
      return{
         dialogVisible: false, 
         users: null,
         title: '',
         activeIndex: '1',
      }
  },
  computed:{
      fullLoggedInData(){
          return this.$store.getters.fullUserData
      },

      loggedUserPostis(){
         return this.$store.getters.postis.filter((posti)=>{
              return posti.creator?._id === this.fullLoggedInData?._id
          })
      },

      savedUserPostis(){
          return this.$store.getters.postis.filter((posti)=>{
              return (posti.creator?._id === this.fullLoggedInData?._id && posti.isSaved === true)
          }) 
      },

      followersCount(){
          return this.fullLoggedInData?.followers?.length
      },
      followingCount(){
          return this.fullLoggedInData?.following?.length
      },
      isLoading(){
          return this.$store.getters.loading  
      },
      listUsers(){
          return this.listUsers;
      }
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log('index, indexPath' ,key, keyPath);
        this.activeIndex = key
      },

      openFollowersModal() { 
        this.title = 'Followers'
        this.users = this.fullLoggedInData?.followers
        this.dialogVisible = true;
      },

      openFollowingModal(){
          this.title = 'Following'
          this.users = this.fullLoggedInData?.following
          this.dialogVisible = true;
      },

      dialogClosed(){
        this.dialogVisible=false
      },
  },
  created(){
    //   this.$store.dispatch({type:'loadUsers'});
      this.$store.dispatch({type:'setFullUserData', userId:this.$route.params.userId});
  },
  components: {
      userList,
      postiCard,
  }
}
</script>