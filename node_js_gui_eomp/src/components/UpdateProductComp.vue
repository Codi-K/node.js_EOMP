<template>
    <div>
        <!-- dropdown for edit -->
        <div class="dropdown btn-group dropstart">

            <!-- Button trigger modal -->
                  <routerlink  class="btn dropdown-toggle" :to="{name:'admin', params:{watchID: editedWatch.watchID}}" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside" id="button_for_function_admin">Edit</routerlink>
            <!-- dropdown -->

            <form class="dropdown-menu p-4" id="form_for_dropdown" @submit.prevent="updatedWatch">
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Watch ID:</label>
                <input type="watch_ID" class="form-control" id="exampleDropdown" v-model="editedWatch.watchID" placeholder="Watch ID..." required oninvalid="this.setCustomValidity('Please Enter A Watch ID:cry:')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Watch Name:</label>
                <input type="watch_name" class="form-control" id="exampleDropdown" v-model="editedWatch.watchName" placeholder="Watch Name..." required oninvalid="this.setCustomValidity('Please Enter A Watch Name:cry:')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Quantity:</label>
                <input type="quantity" class="form-control" id="exampleDropdown" v-model="editedWatch.quantity" placeholder="Quantity..." required oninvalid="this.setCustomValidity('Please Enter A Quantity:cry:')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Price:</label>
                <input type="price" class="form-control" id="exampleDropdown" v-model="editedWatch.amount" placeholder="Price..." required oninvalid="this.setCustomValidity('Please Enter A Price:cry:')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Category:</label>
                <input type="category" class="form-control" id="exampleDropdown" v-model="editedWatch.Category" placeholder="Category..." required oninvalid="this.setCustomValidity('Please Enter A Category:cry:')" oninput="this.setCustomValidity('')">
              </div>
              <div class="mb-3">
                <label for="exampleDropdown" class="form-label">Image:</label>
                <input type="image_url" class="form-control" id="exampleDropdown" v-model="editedWatch.watchUrl" placeholder="Image..." required oninvalid="this.setCustomValidity('Please Insert An Image:cry:')" oninput="this.setCustomValidity('')">
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
      editedWatch: {
        watchID: "",
        watchName: "",
        quantity: "",
        amount: "",
        Category: "",
        watchUrl:""
        }
      }
    },
      methods: {
        updatedWatch() {
        this.$store.dispatch("updatedWatch", this.editedWatch)
      }
      }
        
    }
</script>

<style scoped>

</style>