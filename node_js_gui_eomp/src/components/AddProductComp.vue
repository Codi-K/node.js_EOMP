<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>