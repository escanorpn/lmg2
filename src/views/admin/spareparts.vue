<template>
  <Layout>
    <div style="margin-top: -15px; overflow-x: ;">
       <!-- <mdb-edge-header color="teal darken-2">
        <div class="home-page-background"></div>
      </mdb-edge-header> -->
           
    <!-- <mdb-container class="free-bird">
        <mdb-row>
          <mdb-col md="10" class="mx-auto white z-depth-1 py-2 px-2">
            <mdb-card-body>
              <h2 class="pb-4"><strong>Home page</strong></h2>
              
           
            </mdb-card-body>
          </mdb-col>
        </mdb-row>
      </mdb-container> -->
  
     </div>
    <mlist :posts="products" />
   
  </Layout>
</template>

<script>
import mlist from "./list.vue"
import axios from "axios"
// import { mdbContainer, mdbCol, mdbRow,  mdbEdgeHeader,  mdbCardBody } from 'mdbvue';
// import data from "./posts.json"

export default {
  components: {
    // Layout,
    // NewsFilter,
    mlist,
    // mdbContainer,
    // mdbCol,
    // mdbRow,
    // mdbEdgeHeader,
    
    // mdbCardBody
  },
  

  data() {
    return {
      products: [],
    }
  }, 

  methods: {
    // Helper function for extracting a nested image object
   
    async fetchNews() {
this.products=[];
        var murl=this.$store.state.mUrl;
       const mData = { 
    nm:"peter" ,
    // pass:this.pass
 };
    
axios({
          method: 'POST',
          // url: 'http://localhost/nw/vap/regApi.php?apicall=signup'
          url: murl+'api.php?apicall=a_spare',
          data: mData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response) => {
         const results = response.data
         const myData = response.data.data
        // console.log("response: "+JSON.stringify(response));
        console.log("response1: "+ JSON.stringify(myData));
        
        if(results.val==2){
          console.log(myData)
            this.products = myData.map(post => ({
            
          id: post.pro.pid,
          name: post.pro.name,
          images: post.pro.img,
          description: post.pro.description,
          type: post.pro.type,
          price: post.pro.price,
          im: post.im
          // created_at: post.name,
          // updated_at: post.name
         
        }))
        }
       

      })
      .catch(function (response) {
          //handle error
          console.log("error"+response)
      });

    
    },
  },
  mounted() {
      if(!this.$cookies.isKey("admin")){
    
        this.$router.push('/Admin');
      }
    this.fetchNews()
  },

}
</script>