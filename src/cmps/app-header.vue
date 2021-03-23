<template>
  <section class="header">
    <router-link class="logo-routing-class" to="/">
      <span class="header-logo">Instush</span>
    </router-link>
    <el-input
      class="header-search"
      @input="debounce"
      placeholder="Search..."
      prefix-icon="el-icon-search"
      v-model="filter"
    >
    </el-input>

    <nav>
      <router-link class="routing-class" to="/">
      <span class="home-icon">
          <svg aria-label="Home" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"></path></svg>
      </span>
      </router-link>

      <router-link class="routing-class message" to="/">
          <svg aria-label="Direct" class="_8-yf5 " fill="#262626" height="22" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
      </router-link>

    <div class="routing-class add-icon">
        <img
            class="add-post-icon"
            @click="openNewPostiModal"
            src="../assets/img/plus4.svg" 
            alt="image"
        />
    </div>


      <router-link class="routing-class" :to="'/user/'+loggedInUser._id"
        ><img
          class="user-profile-icon"
          src="https://res.cloudinary.com/carmitvk/image/upload/v1615984344/instagram/users-pic/user3.jpg_clzrsm.jpg"
          alt="image"
      /></router-link>
    </nav>

    <posti-new @dialogClosed="dialogClosed" :dialogVisible="newPostiDialogVisible">
    </posti-new>

  
  </section>
</template>

<script>
import postiNew from '@/views/posti-new'
export default {
  data() {
    return {
      filter: '',
      isPressed: false,
      timerId: null,
      newPostiDialogVisible:false,

    };
  },
  computed:{
      loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    debounce() {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.setFilter();
      }, 500);
    },
    setFilter() {
      this.$store.dispatch({ type: "setFilter", filter:this.filter });
    },
    openNewPostiModal() { 
      this.newPostiDialogVisible = true;
    },
    dialogClosed(){
      this.newPostiDialogVisible=false
    },
  },
  components: {
    postiNew,
  }
};
</script>

