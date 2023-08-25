<template>
    <div>

      <!-- our watches -->
      
      <!-- border line footer -->
      <div id="line_space">
        <div class="visually-hidden">Empty</div>
    </div>

      <h1 id="headings_in_admin_page"><b>Our Watches</b></h1>


      <!-- watches buttons and search -->
      <div id="all_buttons_display">
        <!-- filter -->
        <div class="dropdown">
        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sort</a>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="/name">Name</router-link></li>
          <li><router-link class="dropdown-item" to="/price">Price</router-link></li>
        </ul>
    </div>
      <!-- sort -->
      <div class="dropdown">
        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</a>
        <ul class="dropdown-menu">
          <li><router-link class="dropdown-item" to="/rolex">Rolex</router-link></li>
          <li><router-link class="dropdown-item" to="/ap">Audemars Piguet</router-link></li>
          <li><router-link class="dropdown-item" to="/pp">Patek Philippe</router-link></li>
          <li><router-link class="dropdown-item" to="/hublot">Hublot</router-link></li>
          <li><router-link class="dropdown-item" to="/th">TAG Heuer</router-link></li>
        </ul>
      </div>
          <!-- search -->
        <form class="d-flex" role="search">
            <input id="search_input_style" class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit" id="search_button_style">Search</button>
          </form>
        
          
        </div>




        <!-- table for watches-->
        <div id="watches_table" v-if="watches" class="container-fluid">
          <table class="container-fluid-2">
            <thead id="headings_for_watches_table">
              <th class="list" id="watch_url_media">Watch ID</th>
              <th class="list">Watch Name</th>
              <th class="list" id="watch_url_media">Quantity</th>
              <th class="list">Price</th>
              <th class="list" id="watch_url_media">Category</th>
              <th class="list" id="watch_url_media">Watch Url</th>
              <th class="list" id="watch_url_media">Edit</th>
              <th class="list">Delete</th>
            </thead>


                <tbody id="product_list">
                  <tr v-for="watch in watches" :key="watch.id" class="list">
                    <td class="list" id="watch_url_media">{{ watch.watchID }}</td>
                    <td class="list">{{ watch.watchName }}</td>
                    <td class="list" id="watch_url_media">{{ watch.quantity }}</td>
                    <td class="list">R {{ watch.amount }}</td>
                    <td class="list" id="watch_url_media">{{ watch.Category }}</td>
                    <td class="list" id="watch_url_media"><img id="watches_cards_images" :src="watch.watchUrl" class="card-img" :alt="watch.watchName"></td>


                    <td id="product_edit_button" class="list">                      
                      <UpdateProductComp/>
                        </td>


                        <td>
                          <button type="button" class="list btn" @click="deleteWatch(watch.watchID)" id="button_for_function_admin">Delete</button>
                        </td>
                        
                      </tr>
                    </tbody>
                    
                    

                  </table>
                </div>
                
                <!-- spinner -->
          <div v-else class="row justify-content-center gap-3">
            <SpinnerComp/>
          </div>



        <!-- our users -->
      
      <!-- border line footer -->
      <div id="line_space">
        <div class="visually-hidden">Empty</div>
    </div>

      <h1 id="headings_in_admin_page"><b>Our Users</b></h1>

      
      
      
      <!-- table for users-->
      <div id="users_table" v-if="users">
        <table class="container-fluid-2">
          <thead id="headings_for_users_table">
            <th class="list" id="watch_url_media">User ID</th>
            <th class="list">First Name</th>
            <th class="list">Last name</th>
            <th class="list" id="watch_url_media">User Age</th>
            <th class="list" id="watch_url_media">Gender</th>
            <th class="list" id="watch_url_media">User Role</th>
            <th class="list" id="watch_url_media">Email Address</th>
            <th class="list" id="watch_url_media">User Profile</th>
            <th class="list" id="watch_url_media">Edit</th>
            <th class="list">Delete</th>
          </thead>
          
          
          <tbody id="product_list">
            <tr v-for="user in users" :key="user.id" class="list">
              <td class="list" id="watch_url_media">{{ user.userID }}</td>
              <td class="list">{{ user.firstName }}</td>
              <td class="list">{{ user.lastName }}</td>
              <td class="list" id="watch_url_media">{{ user.userAge }}</td>
              <td class="list" id="watch_url_media">{{ user.gender }}</td>
              <td class="list" id="watch_url_media">{{ user.userRole }}</td>
              <td class="list" id="watch_url_media">{{ user.emailAdd }}</td>
              <td class="list" id="watch_url_media"><img id="users_cards_images" :src="user.userProfile" class="card-img" :alt="user.firstName"></td>


              <td id="user_edit_button" class="list">                      
                <UpdateUserComp/>
                  </td>
                  
                  <td>
                    <button type="button" class="list btn" @click="deleteUser(user.userID)" id="button_for_function_admin">Delete</button>
                  </td>
               
                </tr>
            </tbody>

            
            
          </table>
        </div>
        
        <!-- spinner -->
        <div v-else class="row justify-content-center gap-3">
         <SpinnerComp/>
       </div>


       <AddProductComp/>
       <AddUserComp/>
    

    

  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import AddProductComp from '@/components/AddProductComp.vue';
import AddUserComp from '@/components/AddUserComp.vue';
import UpdateProductComp from '../components/UpdateProductComp.vue';
import UpdateUserComp from '@/components/UpdateUserComp.vue';

export default {
  components: {
    SpinnerComp,
    AddProductComp,
    AddUserComp,
    UpdateProductComp,
    UpdateUserComp
},
    computed: {
      watches() {
          return this.$store.state.watches
      },
      users() {
          return this.$store.state.users
      }
  },
  methods: {
    deleteWatch(watchID) {
          this.$store.dispatch("deleteWatch", watchID)
        },
    deleteUser(userID) {
          this.$store.dispatch("deleteUser", userID)
        }
      },
      mounted() {
          this.$store.dispatch('fetchWatches')
          this.$store.dispatch('fetchUsers')
      }
};
</script>

<style scoped>
.dropdown-item:hover{
    background-color: #ffc851;
    color: black;
  }

  tr.list, td.list, th.list {
    border: 1px solid black;
    padding: 1rem;
}
th {
    font-size: large;
    padding: 0.5rem;
}
table {
    border: 1px solid black;
    width: 85%;
}
</style>