<template>
  <nav class="navbar navbar-expand-lg bg-white nav-underline">
    <div class="container-fluid">
      <!-- Navbar Logo -->
      <a class="navbar-brand" href="#">
        <img id="navbar_logo_image_styling" src="../assets/images/STELLAR-removebg-preview.png" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        
        <!-- links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about">ABOUT US</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/products">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/admin">ADMIN</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/contact">CONTACT US</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>