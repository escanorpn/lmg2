<template>
  <div class="mTop" v-bind:style="{ backgroundColor: mcolor }" style="height:100%;">

  <a-layout id="components-layout-demo-responsive" >
    <a-affix :offset-top="top" class="mTop" >
    <a-layout-sider 
    
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"

    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['3']">
        <!-- <a-menu-item key="1" @click="mChange1">
          <a-icon type="user" />
          <span class="nav-text">Motocycle</span>
        </a-menu-item>
        <a-menu-item key="2" @click="mChange2">
          <a-icon type="tool" />
          <span class="nav-text">Spare parts</span>
        </a-menu-item> -->
        <a-menu-item key="3" @click="mChange1">
          <!-- <a-icon type="tool" /> -->
           <a-icon type="upload" />
          <span class="nav-text">Upload</span>
        </a-menu-item>
        <a-menu-item key="2" @click="mChange2">
         
          <span class="nav-text">Services</span>
        </a-menu-item>
        <a-menu-item key="1" @click="mChange3">
          <span class="nav-text">Portfolio</span>
        </a-menu-item>
        
        <a-menu-item key="4" @click="mChange4">
          <span class="nav-text">Gallery</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    </a-affix>
    <a-layout class="mTop">
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '54px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
           <!-- <mOto     v-if="mProduct === 1"/>
           <mSpare v-if="mProduct === 2" /> -->
           <mUpload v-if="mProduct === 1" />
           <mServices v-if="mProduct === 2" />
           <mFolio v-if="mProduct === 3" />
           <mGallery v-if="mProduct === 4" />
        </div>
      </a-layout-content>
      <!-- <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
    <div style="width: 100%">
  
   </div>
 
  
  </div>
</template>

<script>

// import mOto from "./motocycles.vue"
// import mSpare from "./spareparts.vue"
import mUpload from "./upload.vue"
import mServices from "./services.vue"
import mFolio from "./portfolio.vue"
import mGallery from "./gallery/gallery.vue"
  // import {  mdbCard, mdbCardBody,  } from 'mdbvue';
  
//  import UploadImages from "vue-upload-drop-images"
  import { validationMixin } from 'vuelidate';
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

const axios = require('axios');
  export default {
      components: {
        mUpload,
        // mOto,
        // mSpare,
        mServices,
        mFolio,
        mGallery,
        // UploadImages,
        // mdbCard,
        // mdbCardBody,
        // mdbIcon,
        // mdbDatatable2 
      },
    name: 'Products',
    mixins: [validationMixin],
    data: () => ({
      mcolor1:"#fff",
      top: 70,
        collapsed: true,
       mProduct:1,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        file:null
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(10)
        },
        gender: {
          required
        },
        email: {
          // required,
          email
        }
      }
    },
  
    methods: {
      mChange1(){
        this.mProduct=1;
      },
      mChange2(){
        this.mProduct=2;
      },
      mChange3(){
        this.mProduct=3;
      },
      mChange4(){
        this.mProduct=4;
      },
        onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
   toggleCollapsed() {
      this.collapsed = !this.collapsed;
      // alert( this.collapsed );
    },
         handleImages(files){
          //  alert("foo"+files[0].name);
                console.log(files)
                this.files=files;

                /*
                  [
                    {
                        "name": "Screenshot from 2021-02-23 12-36-33.png",
                        "size": 319775,
                        "type": "image/png",
                        "lastModified": 1614080193596
                        ...
                    },
                    ...
                    ]
                 */
            },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true
        var murl=this.$store.state.mUrl;
        var form_data = new FormData();

      // form_data.append("file[]", this.files);
      for( var i = 0; i < this.files.length; i++ ){
      let file = this.files[i];
      console.log(file);
      form_data.append('files[' + i + ']', file);
    }
      form_data.append('nm',this.form.firstName);
      form_data.append('desc',this.form.lastName);
      form_data.append('type',this.form.gender);
      form_data.append('am',this.form.age);

      console.log("f1: "+form_data.get("file[]"));
      console.log("form_data: "+JSON.stringify(this.files));
       for (var pair of form_data.entries()){
        console.log(pair[0]+', '+pair[1]);
      }
      
      axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_up',
          data: form_data,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
        console.log("response: "+response);
        console.log("response1: "+ JSON.stringify(response.data));
       

      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          // this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
   .card {
        max-width: 400px;
        width:80%;
        margin-left:auto;
      
      margin-right:auto;
    }
    // $c1: rgb(167, 202, 164);
    // $c2:  #001529;
    // $c3:   rgba(8, 8, 8, 0.87) ;
    // $c4:  rgba(0, 0, 0, 0.87);
    
    $c1: #275d2b;
    $c2:  #010902;
    $c3:   #45100f ;
    $c4:  #275d2b;
    .mTop{
        /* margin-top: 73px; */
        // background: linear-gradient(337deg,$c1 15%,  $c4 4%);
        background: linear-gradient($c2,$c3);
        background-attachment: fixed;
        
        // margin-top: -23%;
        // padding-top: 30%;
    }
        ul.ant-menu-inline-collapsed {
    width: 8px;

    }
        
    li.ant-menu-item{
        padding: 1px;
    }
</style>