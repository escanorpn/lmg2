<template>
  <div class="mTopu">
      
      <!-- <div style="background-color:#001529;height:63px;margin-top:-50px;" ></div> -->
 <md-progress-bar md-mode="indeterminate" v-if="sending" />
  <mdb-card style="width:99%;max-width:1200px;margin-bottom:3%;padding:0px;margin-top" >
    <mdb-card-body>
          <!-- <mdb-datatable-2 striped bordered small hover responsive fixedHeader
      arrows maxHeight="400px" v-model="data" /> -->
        <div>
    <a-tabs default-active-key="1" @change="callback">
      <!-- <a-tab-pane key="2" tab="Products">
      <form novalidate style="
    margin-left: auto;margin-right: auto;z-index:0;justify-content: space-around;" class="md-layout" @submit.prevent="validateUser1">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Products</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="gender">Category</label>
                <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="Motocycle">Motocycle</md-option>
                  <md-option value="Spareparts">Spareparts</md-option>
                </md-select>
                <span class="md-error">Product type is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid name</span>
              </md-field>
            </div>

          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Description</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Price</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.age.required">The Price is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid Price</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            
            <UploadImages  @changed="handleImages"/>
            
            <span class="md-error" v-if="!$v.form.email.required">An Image is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
        </md-card-content>
          <div class="text-center py-4 mt-3">
          <mdb-btn style="color:#e9ecef;background-color:#0c0f24;" color="" type="submit" :disabled="sending">Add</mdb-btn>
        </div>

      </md-card>

      <md-snackbar :md-active.sync="userSaved">The Product {{ lastUser }} was saved with success!</md-snackbar>
     
    </form>
      </a-tab-pane> -->
  <a-tab-pane key="3" tab="Portfolio" force-render>
    <form novalidate style="
    margin-left: auto;
    margin-right: auto;z-index:0;
    justify-content: space-around;" class="md-layout" @submit.prevent="validatePortfolio">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Portfolio</div>
          </md-card-header>

        <md-card-content>
     
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            
              <mdb-input
                type="textarea"
                outline
                inputClass="z-depth-1 p-3"
                label="Description"  :rows="3"
                :disabled="sending"
                v-model="desc1"
              />
              
             
          </div>
        </div>
        <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass2('pImages')">
            <UploadImages  @changed="handlePimages"/>
              <span class="md-error" v-if="!$v.form.pImages.required">An Image is required</span>
              </md-field>
             
            </div>
        </div>
  
        </md-card-content>
          <div class="text-center py-4 mt-3">
          <mdb-btn style="color:#e9ecef;background-color:#0c0f24;" color="" type="submit" :disabled="sending">Add</mdb-btn>
        </div>

      </md-card>
        <md-snackbar :md-active.sync="error1">{{ emsg1 }} </md-snackbar>
      </form>
      </a-tab-pane>

       <a-tab-pane key="2" tab="services" force-render>
        <form novalidate style="
    margin-left: auto;
    margin-right: auto;z-index:0;
    justify-content: space-around;" class="md-layout" @submit.prevent="validateForm">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Services</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
      
            <div class="md-layout-item md-small-size-100">
              <mdb-input type="text" label="Heading" outline :disabled="sending" 
              v-model="heading" name="heading" />

            </div>

       
          </div>
          <div class="md-layout md-gutter">
           
            <div class="md-layout-item md-small-size-100">
                          
              <mdb-input
                type="textarea"
                outline
                inputClass="z-depth-1 p-3"
                label="Description"  :rows="3"
                :disabled="sending"
                v-model="desc"
              />
          
            </div>
          </div>
                <div class="md-layout md-gutter">
           
            <div class="md-layout-item md-small-size-100">
                          
           <md-field :class="getValidationClass('sImages')">
            <!-- <label for="email">Image</label> -->
            
            <UploadImages  @changed="handleSimages"/>
            
            <span class="md-error" v-if="!$v.form.sImages.required">An Image is required</span>
           
          </md-field>
          
            </div>
          </div>
  
        
        </md-card-content>
          <div class="text-center py-4 mt-3">
          <mdb-btn style="color:#e9ecef;background-color:#0c0f24;" color="" type="submit" :disabled="sending">Add</mdb-btn>
        </div>

      </md-card>

      <md-snackbar :md-active.sync="error">{{ emsg }} </md-snackbar>
     
    </form>
      </a-tab-pane>

      
       <a-tab-pane key="1" tab="Gallery" force-render>
        <form novalidate style="
    margin-left: auto;
    margin-right: auto;z-index:0;
    justify-content: space-around;" class="md-layout" @submit.prevent="validateGallery">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Gallery</div>
        </md-card-header>

        <md-card-content>
      
       
                <div class="md-layout md-gutter">
           
            <div class="md-layout-item md-small-size-100">
                          
           <md-field :class="getValidationClass('gImages')">
            <!-- <label for="email">Image</label> -->
            
            <UploadImages  @changed="handleGimages"/>
            
            <span class="md-error" v-if="!$v.form.gImages.required">An Image is required</span>
           
          </md-field>
          
            </div>
          </div>
  
        
        </md-card-content>
          <div class="text-center py-4 mt-3">
          <mdb-btn style="color:#e9ecef;background-color:#0c0f24;" color="" type="submit" :disabled="sending">Add</mdb-btn>
        </div>

      </md-card>

      <md-snackbar :md-active.sync="error3">{{ emsg3 }} </md-snackbar>
     
    </form>
      </a-tab-pane>
    </a-tabs>
  </div>
    
    
    </mdb-card-body>
  </mdb-card>
  </div>
</template>

<script>
  import {  mdbCard, mdbCardBody,mdbBtn, mdbInput } from 'mdbvue';
  
 import UploadImages from "vue-upload-drop-images"
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
        UploadImages,
        mdbCard,
        mdbCardBody,
        mdbBtn,
        mdbInput,
        // mdbIcon,
        // mdbDatatable2 
      },
    name: 'Upload',
    mixins: [validationMixin],
    data: () => ({
      top: 50,
        collapsed: true,
       heading: null,
       desc: null,
       desc1: null,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        sImages: null,
        gImages: null,
        pImages: null,
        file:null
      },
      userSaved: false,
      error:false,
      error1:false,
      error3:false,
      emsg:null,
      emsg1:null,
      emsg3:null,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        // heading: {
        //   required,
        //   minLength: minLength(3)
        // },
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
        },
        sImages: {
          required,
          // sImages
        },
        gImages: {
          required,
        },
        pImages: {
          required,
          // sImages
        },
        desc1: {
          required,
          // sImages
        }
      }
    },
     mounted() {
  
      if(!this.$cookies.isKey("admin")){
    
        this.$router.push('/Admin');
      }

  },
    methods: {
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
    
         handlePimages(files){
          //  alert("foo"+files[0].name);
                console.log(files)
                this.pImages=files;
            },
            
         handleGimages(files){
          //  alert("foo"+files[0].name);
                console.log(files)
                this.gImages=files;
            },
         handleSimages(files){
          //  alert("foo"+files[0].name);
                console.log(files)
                this.sImages=files;
            },
         handleImages(files){
          //  alert("foo"+files[0].name);
                console.log(files)
                this.files=files;
            },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      getValidationClass1 (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      getValidationClass2 (fieldName) {
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
       this.files = null
      },
      clearForm3 () {
        this.gImages = null
      },
      clearForm1 () {
        this.heading = null
        this.desc = null
        this.sImages = null
      },
      clearForm2 () {
        // this.heading = null
        this.desc1 = null
        this.pImages = null
      },

      saveUser () {
        // alert("foo");
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
          this.clearForm()
        }, 1500)
      },
      savePortfolio (){
        this.sending = true
        var murl=this.$store.state.mUrl;
        var form_data = new FormData();

      form_data.append('desc',this.desc1);
      for( var i = 0; i < this.pImages.length; i++ ){
          let file = this.pImages[i];
          console.log(file);
          form_data.append('files[' + i + ']', file);
        }
        // console.log("svp")
       for (var pair of form_data.entries()) {
          console.log(pair[0]+ ' - ' + pair[1]); 
      }
      // console.log(JSON.stringify(form_data))
      axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_up2',
          data: form_data,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
        console.log("response: "+response);
        console.log("response1: "+ JSON.stringify(response.data));
       
        window.setTimeout(() => {
          if(response.data.code==1){ 
            this.emsg1 = response.data.message;
            //  this.clearForm1();
            this.error1 = true
           
          }
        }, 1500)
      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
         this.clearForm2();
          this.sending = false
          
        }, 1500)

      },
      saveService () {
        this.sending = true
        var murl=this.$store.state.mUrl;
        var form_data = new FormData();

      form_data.append('heading',this.heading);
      form_data.append('desc',this.desc);
      for( var i = 0; i < this.sImages.length; i++ ){
          let file = this.sImages[i];
          console.log(file);
          form_data.append('files[' + i + ']', file);
        }
       for (var pair of form_data.entries()) {
    console.log(pair[0]+ ' - ' + pair[1]); 
}
      axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_up1',
          data: form_data,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
        console.log("response: "+response);
        console.log("response1: "+ JSON.stringify(response.data));
       
   window.setTimeout(() => {
          if(response.data.code==1){ 
            this.emsg = response.data.message;
            //  this.clearForm1();
            this.error = true
           
          }
        }, 1500)
      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
         this.clearForm1();
          this.sending = false
          
        }, 1500)

      },
saveGallery(){
        this.sending = true
        var murl=this.$store.state.mUrl;
        var form_data = new FormData();

      form_data.append('heading',"Gallery");
  
      for( var i = 0; i < this.gImages.length; i++ ){
          let file = this.gImages[i];
          console.log(file);
          form_data.append('files[' + i + ']', file);
        }
       for (var pair of form_data.entries()) {
    console.log(pair[0]+ ' - ' + pair[1]); 
}
      axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_up3',
          data: form_data,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
        console.log("response: "+response);
        console.log("response3: "+ JSON.stringify(response.data));
       
   window.setTimeout(() => {
          if(response.data.code==1){ 
            this.emsg = response.data.message;
            //  this.clearForm1();
            this.error = true
           
          }
        }, 1500)
      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
         this.clearForm1();
          this.sending = false
          
        }, 1500)

      },

      validateUser1 () {
       
        this.$v.$touch()

          //  alert(this.files)
       
        if (!this.$v.$invalid) {
              if(this.files==undefined){
             alert("Please add atleast one image")
           }else{
             this.saveUser()
           }
          // 
            // alert("No error")
        }else{
          alert("There is an error")
          // alert(JSON.stringify(this.$v))
          // console.log(JSON.stringify(this.$v))
        }
      },
          validatePortfolio () {
            // this.$v.$touch()
            // alert(this.desc1)
     if(this.desc1==null){
          this.error1 = true;
          alert("There is an error")
          this.emsg1 = "Please add a description";
        }else if(this.pImages==null){
          this.error1 = true;
          alert("There is an error")
          this.emsg1 = "Please add an Image";
        }else{
          this.savePortfolio();
        }
   
      },
      validateForm () {
        // this.$v.$touch()
        // alert("gg")
        if(this.heading==null){
          this.error = true;
          this.emsg = "Please add a heading";
        }else if(this.desc==null){
          this.error = true;
          this.emsg = "Please add a description of the service";
        }else if(this.sImages==null){
          this.error = true;
          this.emsg = "Please add an Image of the service";
        }else{
          this.saveService();
        }
      console.log("heading= "+this.heading)
        // if (!this.$v.$invalid) {
        //   this.saveService()
        // }
      },

      validateGallery () {
      
    if(this.gImages==null){
        // alert(this.sImages)
          this.error3 = true;
          this.emsg3 = "Please add an Image ";
        }else{
          //  alert("Has Image")
          this.saveGallery();
        }
       
      }
    }
  }
</script>

<style lang="scss" scoped>
.card .card-body{
    padding: 0px;
}
  .md-progress-bar {
    position: fixed;
    height:7px;
    top: 48px;
    right: 0;
    left: 0;
    z-index: 3;
  }
   .card {
        max-width: 400px;
        width:80%;
        margin-left:auto;
        margin-right:auto;
    }
    $c1: rgb(167, 202, 164);
    $c2:  #001529;
    $c3:   rgba(0, 0, 0, 0.87) ;
    $c4:  rgba(0, 0, 0, 0.87);
    .mTop{
        /* margin-top: 73px; */
        // background: linear-gradient(337deg,$c1 15%,  $c4 4%);
        // background: linear-gradient($c2,$c3);
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