<template>
    <div>
        <!-- add users -->

    <div class="dropdown_2 btn-group dropstart">
                  
      <!-- Button trigger modal -->
      <button type="button" class="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_add_2"><b>+</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
      </svg></button>
      
      <!-- dropdown -->
      
      <form class="dropdown-menu p-4" id="form_for_dropdown" @submit.prevent="addUser">
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">First Name:</label>
          <input type="first_name" class="form-control" id="exampleDropdown" v-model="newUser.firstName" placeholder="First Name..." required oninvalid="this.setCustomValidity('Please Enter A First Name😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Last Name:</label>
          <input type="last_name" class="form-control" id="exampleDropdown" v-model="newUser.lastName" placeholder="Last Name..." required oninvalid="this.setCustomValidity('Please Enter A Last Name😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Age:</label>
          <input type="user_age" class="form-control" id="exampleDropdown" v-model="newUser.userAge" placeholder="User Age..." required oninvalid="this.setCustomValidity('Please Enter A User Age😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Gender:</label>
          <input type="gender" class="form-control" id="exampleDropdown" v-model="newUser.gender" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter A Gender😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Role:</label>
          <input type="user_role" class="form-control" id="exampleDropdown" v-model="newUser.userRole" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Insert An User Role😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Email Address:</label>
          <input type="email_address" class="form-control" id="exampleDropdown" v-model="newUser.emailAdd" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Insert An Email Address😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">Password:</label>
          <input type="password" class="form-control" id="exampleDropdown" v-model="newUser.userPass" placeholder="Password..." required oninvalid="this.setCustomValidity('Please Insert A Password😢')" oninput="this.setCustomValidity('')">
        </div>
        
        <div class="mb-3">
          <label for="exampleDropdown" class="form-label">User Profile:</label>
          <input type="user_profile" class="form-control" id="exampleDropdown" v-model="newUser.userProfile" placeholder="User Profile..." required oninvalid="this.setCustomValidity('Please Insert An User Profile😢')" oninput="this.setCustomValidity('')">
        </div>
        
        
        
        <button type="submit" class="btn" id="add_button_dropdown">Add</button>
      </form>
    </div>
    </div>
</template>

<script>
    export default {
data() {
  return {
    newUser: {
      firstName: '',
      lastName: '',
      userAge: '',
      gender: '',
      userRole: '',
      emailAdd:'',
      userPass:'',
      userProfile:''
    }
  }
},
methods: {
  addUser(){
    this.$store.dispatch('addUser', this.newUser);


    // clears all the inputs
    this.newUser = {
      firstName: '',
      lastName: '',
      userAge: '',
      gender: '',
      userRole: '',
      emailAdd:'',
      userPass:'',
      userProfile:''
    };


  }
}
  }
</script>

<style scoped>

</style>