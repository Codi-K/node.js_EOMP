<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>