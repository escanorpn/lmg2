<template>
  <div class="mTopu" style="
  /* max-width: 800px; */
    margin-left: auto;
    margin-right: auto;
    /* margin-top: -200px; */
    width: 90%;"
    >
      
      <!-- <div style="background-color:#001529;height:63px;margin-top:-50px;" ></div> -->
 <md-progress-bar md-mode="indeterminate" v-if="sending" />
  <mdb-card style="width:99%;max-width:1200px;margin-bottom:3%;padding-top:42px;padding-bottom:42px;margin-top; " >
    <mdb-card-body>
          <!-- <mdb-datatable-2 striped bordered small hover responsive fixedHeader
      arrows maxHeight="400px" v-model="data" /> -->
      
    <form novalidate style="
    margin-left: auto;
    margin-right: auto;z-index:0;
    justify-content: space-around;" class="md-layout" @submit.prevent="validateForm">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title text-center">Get a quote</div>
        </md-card-header>

        <md-card-content>
          
          <div class="md-layout md-gutter">
             

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('eventName')">

                <!-- <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.eventName" :disabled="sending" /> -->
                <a-input v-model="form.eventName" placeholder="Event Name" :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.eventName.required">The event name is required</span>
                <span class="md-error" v-else-if="!$v.form.eventName.minlength">Invalid name</span>
              </md-field>
            </div>

    
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('Location')">
           
                <a-input v-model="form.Location" placeholder="Location" :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.Location.required">The Locationis required</span>
                <span class="md-error" v-else-if="!$v.form.Location.minlength">Invalid Location</span>
              </md-field>
            </div>
           
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('mDate')">
               
                <a-input v-model="form.mDate" type="date"  placeholder="Date" />
                <span class="md-error" v-if="!$v.form.mDate.required">The Date is required</span>
                <span class="md-error" v-else-if="!$v.form.mDate.minlength">Invalid Date</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('stSize')">
           
                <a-input prefix="m2" type="number" v-model="form.stSize" placeholder=" Standard size in metres squared" :disabled="sending"/>
                <span class="md-error" v-if="!$v.form.stSize.required">The Standard Size required</span>
                <span class="md-error" v-else-if="!$v.form.stSize.minlength">Invalid Standard size</span>
              </md-field>
            </div>
          </div>
          
          
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('fullName')">
               
                <a-input v-model="form.fullName"  placeholder="Full name" />
                <span class="md-error" v-if="!$v.form.fullName.required">Please eneter your full name</span>
                <span class="md-error" v-else-if="!$v.form.fullName.minlength">Invalid name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('phone')" style="display:block">
           
             
                <VuePhoneNumberInput v-model="form.phone" />
                <span class="md-error" v-if="!$v.form.phone.required">Enter your phone number</span>
                <span class="md-error" v-else-if="!$v.form.phone.minlength">Invalid phone number </span>
              </md-field>
            </div>
          </div>

     

          <md-field :class="getValidationClass('email')">
            
             <md-input autocomplete="email"  type="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">A valid email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
               <div class="md-layout md-gutter">
            <div class="md-layout-item ">
                  <a-radio-group v-model="form.options">
                  <div class="row" >
                    <div class="col-md-6">
                       <p style="float:left;color:#0c0f24;">I need stand design construction & assembly</p>
                    </div>
                    <div class="col-md-6">
                      <a-radio :style="radioStyle" :value="1"></a-radio>
                    </div>
                    
                    <div class="col-md-6">
                        <p style="float:left; color:#0c0f24">I have stand design and only need construction & assembly</p>
                    </div>
                    <div class="col-md-6">
                      <a-radio :style="radioStyle" :value="2"></a-radio>
                    </div>
   
             
                  
                  </div>
              
                </a-radio-group>
              <md-field :class="getValidationClass('options')" style="margin-top:-32px">
                <span class="md-error" v-if="!$v.form.options.required">Please select one</span>
                <span class="md-error" v-else-if="!$v.form.options.minlength">Invalid Option selected</span>
              </md-field>
              
            </div>
          </div>
          <md-field :class="getValidationClass('aReq')">
          
            
             <a-textarea :rows="2" placeholder="Additional requirements" :maxlength="6" v-model="form.aReq" :disabled="sending" />
           
          </md-field>
        </md-card-content>

       


        <!-- <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Send Inquery</md-button>
        </md-card-actions> -->

            <div class="text-center py-4 mt-3">
          <mdb-btn style="color:#e9ecef;
background-color:#0c0f24;" color="" type="submit" :disabled="sending">Send Inquery</mdb-btn>
        </div>

      </md-card>

      <md-snackbar :md-active.sync="userSaved">The Form was submitted successfully!</md-snackbar>
     
    </form>
    
    </mdb-card-body>
  </mdb-card>
  </div>
</template>

<script>
  import {  mdbCard, mdbCardBody, mdbBtn } from 'mdbvue';
  import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
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
        mdbBtn,
        // UploadImages,
        mdbCard,
        mdbCardBody,
       VuePhoneNumberInput,
      },
    name: 'Upload',
    mixins: [validationMixin],
    data: () => ({
      top: 50,
        collapsed: true,
           radioStyle:{
              display: 'flex',
              height: '30px',
              lineHeight: '30px',
              
          },
       data: {
       
        
        },
      form: {
        eventName: null,
        Location: null,
        // gender: null,
        mDate:null,
        stSize:null,
        options:null,
        fullName:null,
        phone:null,
        email: null,
        aReq:null
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        eventName: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20)
        },
        Location: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(20)
        },
        mDate:{
        required,
        },
        stSize: {
          required,
        },
        options: {
          required,
        },
        fullName: {
          required
        },
        phone: {
          required
        },
        email: {
          required,
          email
        }
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
        this.form.eventName = null
        this.form.Location = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveForm () {
        // alert("sending")
         console.log("murl: " +murl)
        this.sending = true
        var murl=this.$store.state.mUrl;
        // var form_data = new FormData();

 
      // form_data.append('nm',this.form.eventName);
      // form_data.append('desc',this.form.Location);
      // form_data.append('type',this.form.gender);
      // form_data.append('am',this.form.age);
      // form_data.append(this.form);
      // console.log("murl: " +murl)
      // console.log("Sending: " +JSON.stringify(this.form))

      axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=quote',
          data: this.form,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
        // console.log("response: "+response);
        // console.log("response1: "+ JSON.stringify(response.data));
       

      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.eventName} ${this.form.Location}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateForm () {
        this.$v.$touch()

          // console.log("Phone: "+JSON.stringify(this.form.phone))
          // this.saveForm()
        if (!this.$v.$invalid) {
          console.log(JSON.stringify(this.form))
          this.saveForm()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.md-layout-item.md-size-50 {
  max-width: 99%;
  flex: none;
}
.btn-default {
  margin-left: 50%;
  margin-right:50%;
 color:#e9ecef;
 background-color:#0c0f24 !important
}
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