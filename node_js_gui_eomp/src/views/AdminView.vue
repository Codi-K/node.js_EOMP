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
              <li><a class="dropdown-item" href="#">Name</a></li>
              <li><a class="dropdown-item" href="#">Price</a></li>
            </ul>
        </div>

          <!-- sort -->
          <div class="dropdown">
            <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</a>
          
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Rolex</a></li>
              <li><a class="dropdown-item" href="#">Audemars Piguet</a></li>
              <li><a class="dropdown-item" href="#">Patek Philippe</a></li>
              <li><a class="dropdown-item" href="#">Hublot</a></li>
              <li><a class="dropdown-item" href="#">TAG Heuer</a></li>
            </ul>
          </div>
        
          
          <!-- search -->
        <form class="d-flex" role="search">
            <input id="search_input_style" class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit" id="search_button_style">Search</button>
          </form>
        
          
        </div>




        <!-- table for watches-->
        <div id="watches_table">
          <table class="container-fluid-2">
            <thead id="headings_for_watches_table">
              <th class="list">Watch ID</th>
              <th class="list">Watch Name</th>
              <th class="list">Quantity</th>
              <th class="list">Price</th>
              <th class="list">Category</th>
              <th class="list">Watch Url</th>
              <th class="list">Edit</th>
              <th class="list">Delete</th>
            </thead>


                <tbody id="product_list">
                  <tr v-for="watches in watches" :key="watches.watchID" class="list">
                    <td class="list">{{ watches.watchID }}</td>
                    <td class="list">{{ watches.watchName }}</td>
                    <td class="list">{{ watches.quantity }}</td>
                    <td class="list">R {{ watches.amount }}</td>
                    <td class="list">{{ watches.Category }}</td>
                    <td class="list"><img id="watches_cards_images" :src="watches.watchUrl" class="card-img" :alt="watches.watchName"></td>


                    <td id="product_edit_button" class="list">                      
                      <!-- dropdown for edit -->
                      <div class="dropdown btn-group dropstart">

                          <!-- Button trigger modal -->
                          <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_function_admin">Edit</button>

                          <!-- dropdown -->

                          <form class="dropdown-menu p-4" id="form_for_dropdown">

                            <div class="mb-3">
                              <label for="exampleDropdown" class="form-label">Watch Name:</label>
                              <input type="watch_name" class="form-control" id="exampleDropdown" placeholder="Watch Name..." required oninvalid="this.setCustomValidity('Please Enter A Watch Name😢')" oninput="this.setCustomValidity('')">
                            </div>
                            
                            <div class="mb-3">
                              <label for="exampleDropdown" class="form-label">Quantity:</label>
                              <input type="quantity" class="form-control" id="exampleDropdown" placeholder="Quantity..." required oninvalid="this.setCustomValidity('Please Enter A Quantity😢')" oninput="this.setCustomValidity('')">
                            </div>
                            
                            <div class="mb-3">
                              <label for="exampleDropdown" class="form-label">Price:</label>
                              <input type="price" class="form-control" id="exampleDropdown" placeholder="Price..." required oninvalid="this.setCustomValidity('Please Enter A Price😢')" oninput="this.setCustomValidity('')">
                            </div>
                            
                            <div class="mb-3">
                              <label for="exampleDropdown" class="form-label">Category:</label>
                              <input type="category" class="form-control" id="exampleDropdown" placeholder="Category..." required oninvalid="this.setCustomValidity('Please Enter A Category😢')" oninput="this.setCustomValidity('')">
                            </div>
                            
                            <div class="mb-3">
                              <label for="exampleDropdown" class="form-label">Image:</label>
                              <input type="image_url" class="form-control" id="exampleDropdown" placeholder="Image..." required oninvalid="this.setCustomValidity('Please Insert An Image😢')" oninput="this.setCustomValidity('')">
                            </div>

                          

                            <button type="submit" class="btn" id="edit_button_dropdown">Edit</button>
                          </form>
                        </div>
                        </td>


                        <td>
                          <button type="button" class="list btn" @click="deleteButton(event)" id="button_for_function_admin">Delete</button>
                        </td>
                     
                      </tr>
                </tbody>


            </table>
        </div>




        <!-- our users -->
      
      <!-- border line footer -->
      <div id="line_space">
        <div class="visually-hidden">Empty</div>
    </div>

      <h1 id="headings_in_admin_page"><b>Our Users</b></h1>

      
      
      
      <!-- table for users-->
      <div id="users_table">
        <table class="container-fluid-2">
          <thead id="headings_for_users_table">
            <th class="list">User ID</th>
            <th class="list">First Name</th>
            <th class="list">Last name</th>
            <th class="list">User Age</th>
            <th class="list">Gender</th>
            <th class="list">User Role</th>
            <th class="list">Email Address</th>
            <th class="list">User Profile</th>
          </thead>
          
          
          <tbody id="product_list">
            <tr v-for="users in users" :key="users.userID" class="list">
              <td class="list">{{ users.userID }}</td>
              <td class="list">{{ users.firstName }}</td>
              <td class="list">{{ users.lastName }}</td>
              <td class="list">R {{ users.userAge }}</td>
              <td class="list">{{ users.gender }}</td>
              <td class="list">{{ users.userRole }}</td>
              <td class="list">{{ users.emailAdd }}</td>
              <td class="list"><img id="users_cards_images" :src="users.userProfile" class="card-img" :alt="users.firstName"></td>


              <td id="user_edit_button" class="list">                      
                <!-- dropdown for edit -->
                <div class="dropdown btn-group dropstart">
                  
                    <!-- Button trigger modal -->
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_function_admin">Edit</button>
                    
                    <!-- dropdown -->
                    
                    <form class="dropdown-menu p-4" id="form_for_dropdown">
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">First Name:</label>
                        <input type="first_name" class="form-control" id="exampleDropdown" placeholder="First Name..." required oninvalid="this.setCustomValidity('Please Enter A First Name😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">Last Name:</label>
                        <input type="last_name" class="form-control" id="exampleDropdown" placeholder="Last Name..." required oninvalid="this.setCustomValidity('Please Enter A Last Name😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">User Age:</label>
                        <input type="user_age" class="form-control" id="exampleDropdown" placeholder="User Age..." required oninvalid="this.setCustomValidity('Please Enter A User Age😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">Gender:</label>
                        <input type="gender" class="form-control" id="exampleDropdown" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter A Gender😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">User Role:</label>
                        <input type="user_role" class="form-control" id="exampleDropdown" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Insert An User Role😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">Email Address:</label>
                        <input type="email_address" class="form-control" id="exampleDropdown" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Insert An Email Address😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      <div class="mb-3">
                        <label for="exampleDropdown" class="form-label">User Profile:</label>
                        <input type="user_profile" class="form-control" id="exampleDropdown" placeholder="User Profile..." required oninvalid="this.setCustomValidity('Please Insert An User Profile😢')" oninput="this.setCustomValidity('')">
                      </div>
                      
                      
                      
                      <button type="submit" class="btn" id="edit_button_dropdown">Edit</button>
                    </form>
                  </div>
                  </td>
                  
                  <td>
                    <button type="button" class="list btn" id="button_for_function_admin">Delete</button>
                  </td>
               
                </tr>
            </tbody>

            
          </table>
    </div>



    <!-- add buttons -->
    <!-- add watches -->

    <div class="dropdown_1 btn-group dropstart">

      <!-- Button trigger modal -->
      <button type="button" class="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_add_1"><b>+</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-watch" viewBox="0 0 16 16">
        <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z"/>
        <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"/>
      </svg></button>

      <!-- dropdown -->

      <form class="dropdown-menu p-4" id="form_for_dropdown">

        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Watch Name:</label>
          <input type="watch_name" class="form-control" id="exampleDropdown" placeholder="Watch Name..." required oninvalid="this.setCustomValidity('Please Enter A Watch Name😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Quantity:</label>
          <input type="quantity" class="form-control" id="exampleDropdown" placeholder="Quantity..." required oninvalid="this.setCustomValidity('Please Enter A Quantity😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Price:</label>
          <input type="price" class="form-control" id="exampleDropdown" placeholder="Price..." required oninvalid="this.setCustomValidity('Please Enter A Price😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Category:</label>
          <input type="category" class="form-control" id="exampleDropdown" placeholder="Category..." required oninvalid="this.setCustomValidity('Please Enter A Category😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Image:</label>
          <input type="image_url" class="form-control" id="exampleDropdown" placeholder="Image..." required oninvalid="this.setCustomValidity('Please Insert An Image😢')" oninput="this.setCustomValidity('')">
        </div>

      

        <button type="submit" class="btn" id="add_button_dropdown">Add</button>
      </form>
    </div>

    <!-- add users -->

    <div class="dropdown_2 btn-group dropstart">
                  
      <!-- Button trigger modal -->
      <button type="button" class="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_add_2"><b>+</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg></button>
      
      <!-- dropdown -->
      
      <form class="dropdown-menu p-4" id="form_for_dropdown">
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">First Name:</label>
          <input type="first_name" class="form-control" id="exampleDropdown" placeholder="First Name..." required oninvalid="this.setCustomValidity('Please Enter A First Name😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Last Name:</label>
          <input type="last_name" class="form-control" id="exampleDropdown" placeholder="Last Name..." required oninvalid="this.setCustomValidity('Please Enter A Last Name😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Age:</label>
          <input type="user_age" class="form-control" id="exampleDropdown" placeholder="User Age..." required oninvalid="this.setCustomValidity('Please Enter A User Age😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Gender:</label>
          <input type="gender" class="form-control" id="exampleDropdown" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter A Gender😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Role:</label>
          <input type="user_role" class="form-control" id="exampleDropdown" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Insert An User Role😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Email Address:</label>
          <input type="email_address" class="form-control" id="exampleDropdown" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Insert An Email Address😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Profile:</label>
          <input type="user_profile" class="form-control" id="exampleDropdown" placeholder="User Profile..." required oninvalid="this.setCustomValidity('Please Insert An User Profile😢')" oninput="this.setCustomValidity('')">
        </div>
        
        
        
        <button type="submit" class="btn" id="add_button_dropdown">Add</button>
      </form>
    </div>

  </div>
</template>

<script>
export default {
    computed: {
      watches() {
          return this.$store.state.watches
      },
      users() {
          return this.$store.state.users
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