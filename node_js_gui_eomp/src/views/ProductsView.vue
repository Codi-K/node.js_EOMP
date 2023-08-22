<template>
    <div>

        <!-- welcome products -->
        <div id="welcome_products">
            <img id="welcome_product_image" src="https://i.postimg.cc/KvQ408Z9/female-bestseller-970x.jpg" alt="product_for_show">
            <div id="product_welcome_heading_and_text">
                <h3 id="products_sub-heading">Our Watches...</h3>
                <p id="products_welcome_text">Our watches offer comfort and pleasure to all our customers as well as style. All age groups can sport a fashionable accessory such as our watches in their daily lives. Which watch is right for you? Well our dedicated team at any branch will help you pick out a watch just right for any occasion. Our mission, to satisfy all our customers, because at the end of the day you happiness is what makes us happy</p>
            </div>
        </div>

        <!-- buttons and search -->

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
              <li><a class="dropdown-item" href="#">Tag Heuer</a></li>
            </ul>
          </div>
        
          
          <!-- search -->
        <form class="d-flex" role="search">
            <input id="search_input_style" class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline-secondary" type="submit" id="search_button_style">Search</button>
          </form>
        
          
        </div>



        <!-- displaying products -->
        <div id="products_page">
            <h1 id="heading_displayed_products">Get a watch that suits you...</h1>
          <div id="products_displaying">
              <div v-for="watches in watches" :key="watches.watchID" class="card text-bg-transparent" id="watches_card_styling">
                  <img id="watches_cards_images" :src="watches.watchUrl" class="card-img" :alt="watches.watchName">
                  <div class="card-img-overlay" id="product_text_display">
                    <h2 class="card-title"><b>{{ watches.watchName }}</b></h2>
                    <h5 id="product_category">{{ watches.Category }}</h5>
                    <h4 id="product_price">R{{ watches.amount }}</h4>
                  </div>
                </div>
          </div>
        </div>

    </div>
</template>

<script>
export default {
    computed: {
      watches() {
          return this.$store.state.watches
      }
  },
      mounted() {
          this.$store.dispatch('fetchWatches')
      }
};
</script>

<style scoped>

</style>