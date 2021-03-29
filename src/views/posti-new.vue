<template>
    <el-dialog
      class="posti-new"
      width="60%"
      center
      :title="title"
      :visible.sync="dialogVisible"
      :before-close="dialogClosed"
    >
       <section v-if="postiToEdit" >
        <form>
            <textarea class="description" placeholder=" Write your desceiption here..." name="description" rows="3" cols="100" v-model="postiToEdit.description"></textarea>

            <el-select
                class="tags-picker"
                v-model="postiToEdit.tags"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="Pick tags for post">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <img class="picture" v-if="postiToEdit.imgUrl" :src="postiToEdit.imgUrl" alt="image"/>
            <!-- <img v-if="require(postiToEdit.imgUrl)" :src="require(postiToEdit.imgUrl)" class="picture"> -->
            <!-- <label v-if="!isLoading" for="imgUploader" was>  -->
                <!-- <img class="upload" src="@/assets/img/drag-icon.png" alt=""> -->

<!-- <el-upload
  class="input-file"
  id="imgUploader"
  :on-change="onUploadImg"
  drag
  action="https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/instush/post-imgs"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  >
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
</el-upload> -->

            <!-- </label>  -->

<!-- <img-upload/> -->
<!-- <img-upload v-if="!isLoading"/> -->

            <!-- <img class="loading" v-else src="@/assets/img/reg-loading.gif" alt=""> -->



            <input btn class="input-file"  placeholder="Upload file" type="file" id="imgUploader" @change="onUploadImg" />





            

            <!-- <button>Save</button> -->
            <!-- <button @click="goBack">Cancel</button> -->
            <!-- <div class="final-action"> -->
                <el-button class="btn" @click="save" type="primary" :loading="btnPressed">Save</el-button>
                <!-- <el-button class="btn" @click="goBack" type="primary" :loading="btnPressed">Cancel</el-button> -->
            <!-- </div> -->
        </form>
      </section>


    </el-dialog>
</template>

<script>

import {postiService} from '../services/posti.service.js'
import { uploadImg } from "../services/img-upload.service.js";
// import imgUpload from "@/cmps/img-upload";

export default {
    name: "postiNew",
    props: {
        users: {
        type: Array,
        },
        dialogVisible: {
        type: Boolean,
        },
        dialogTitle: {
        type: String,
        },
    },
   data() {
        return {
            postiToEdit: null,
            isLoading: false,
            btnPressed:false,
            
            options: [{
                value: 'Nature',
                label: 'Nature'
            }, {
                value: 'Animals',
                label: 'Animals'
            }, {
                value: 'Funny',
                label: 'Funny'
            }],
        }
    },
    methods: {
        save() {
            if (this.postiToEdit.imgUrl){
                this.$store.dispatch({ type: 'savePosti', posti:this.postiToEdit })
                // CLOSE MODAL
                this.dialogClosed();
            }else{
                console.log('NewPosti: Cannot add post. pick a picture first');
            }
        },

        // goBack(){
        dialogClosed() {
            // this.$router.push('/');
            this.$emit("dialogClosed");
        },

        async onUploadImg(ev) {
            try{
                this.btnPressed = true;
                // this.postiToEdit.imgUrl = '@/assets/img/forest.jpg';
                console.log('UPLOAD',ev)

                this.isLoading = true
                const res = await uploadImg(ev)
                this.postiToEdit.imgUrl = res.url


                console.log('this.postiToEdit.imgUrl' ,this.postiToEdit.imgUrl)
                // this.$emit('save', res.url)
                this.btnPressed = false;
            }catch(err){
                console.log('postiEdit: Cannot save posti...', err);
                throw new Error('Cannot save posti...');
            }finally{
                this.isLoading = false
            }
        },

         handleRemove(file, fileList) {
            console.log(file, fileList);
        },

        handlePreview(file) {
            console.log(file);
        }
    },
    computed: {
        imgUrl(){
            return this.postiToEdit.imgUrl
        },
        title() {
            // return 'Posti Add'
            return 'Add your own post'
        },
        postiId() {
            return this.$route.params.postiId
        }
    },
    created() {
        this.postiToEdit = postiService.getEmptyPosti();
    },
   components: {
    //    imgUpload,
  }, 
}
</script>