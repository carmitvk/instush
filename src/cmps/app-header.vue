<template>
    <section class="header">
        <span class="header-logo">Instush</span>
        <el-input
            class="header-search"
            placeholder="Search..."
            prefix-icon="el-icon-search"
            v-model="searchBy">
        </el-input>
        
        <nav>
            <router-link class="routing-class" to="/">
                <img  @click="isPressed=!isPressed" class="home-icon" :src="require(isPressed ? '../assets/img/home-black.svg' : '../assets/img/home-white.svg')" alt="image"/>
            </router-link> 
            <!-- <router-link v-else to="/"><img class="home-icon" src="../assets/img/home-white.svg" alt="image"/></router-link>  -->
            <router-link class="routing-class" to="/posti/edit/:postiId?"><img class="add-post-icon" src="../assets/img/add-post.svg" alt="image"/></router-link> 
            <router-link class="routing-class" to="/user/:id"><img class="user-profile-icon" src="https://res.cloudinary.com/carmitvk/image/upload/v1615984344/instagram/users-pic/user3.jpg_clzrsm.jpg" alt="image"/></router-link>
            <!-- <router-link to="/login">Login</router-link> 💬 -->
        </nav>

    </section>
</template>

<script>

export default {
    data(){
        return{
            searchBy:'',
            isPressed:false,
        }
    },
    computed:{

    }
}
</script>

