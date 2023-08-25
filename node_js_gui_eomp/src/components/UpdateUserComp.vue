<template>
    <div>
        <!-- dropdown for edit -->
        <div class="dropdown btn-group dropstart">
                  
            <!-- Button trigger modal -->
            <routerlink  class="btn dropdown-toggle" :to="{name:'admin', params:{userID: editedUser.userID}}" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_function_admin">Edit</routerlink>
            
            <!-- dropdown -->
            
            <form class="dropdown-menu p-4" id="form_for_dropdown" @submit.prevent="updatedUser">
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">User ID:</label>
                <input type="user_id" class="form-control" id="exampleDropdown" v-model="editedUser.userID" placeholder="User ID..." required oninvalid="this.setCustomValidity('Please Enter A User ID😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">First Name:</label>
                <input type="first_name" class="form-control" id="exampleDropdown" v-model="editedUser.firstName" placeholder="First Name..." required oninvalid="this.setCustomValidity('Please Enter A First Name😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">Last Name:</label>
                <input type="last_name" class="form-control" id="exampleDropdown" v-model="editedUser.lastName" placeholder="Last Name..." required oninvalid="this.setCustomValidity('Please Enter A Last Name😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">User Age:</label>
                <input type="user_age" class="form-control" id="exampleDropdown" v-model="editedUser.userAge" placeholder="User Age..." required oninvalid="this.setCustomValidity('Please Enter A User Age😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">Gender:</label>
                <input type="gender" class="form-control" id="exampleDropdown" v-model="editedUser.gender" placeholder="Gender..." required oninvalid="this.setCustomValidity('Please Enter A Gender😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">User Role:</label>
                <input type="user_role" class="form-control" id="exampleDropdown" v-model="editedUser.userRole" placeholder="User Role..." required oninvalid="this.setCustomValidity('Please Insert An User Role😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">Email Address:</label>
                <input type="email_address" class="form-control" id="exampleDropdown" v-model="editedUser.emailAdd" placeholder="Email Address..." required oninvalid="this.setCustomValidity('Please Insert An Email Address😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">Password:</label>
                <input type="password" class="form-control" id="exampleDropdown" v-model="editedUser.userPass" placeholder="Password..." required oninvalid="this.setCustomValidity('Please Insert A Password😢')" oninput="this.setCustomValidity('')">
              </div>
              
              <div class="mb">
                <label for="exampleDropdown" class="form-label">User Profile:</label>
                <input type="user_profile" class="form-control" id="exampleDropdown" v-model="editedUser.userProfile" placeholder="User Profile..." required oninvalid="this.setCustomValidity('Please Insert An User Profile😢')" oninput="this.setCustomValidity('')">
              </div>
              
              
              
              <button type="submit" class="btn" id="edit_button_dropdown">Edit</button>
            </form>
          </div>
    </div>
</template>

<script>
    export default {
      data() {
    return {
      editedUser: {
        userID: '',
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
        updatedUser() {
        this.$store.dispatch("updatedUser", this.editedUser)
      }
      }
        
    }
</script>

<style scoped>

</style>