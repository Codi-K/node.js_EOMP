<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Name</h2>
    </div>
    <div id="products_displaying" v-if="watches">
        <div v-for="watches in watches" :key="watches.watchID" class="card text-bg-transparent" id="watches_card_styling">
            <img id="watches_cards_images_1" :src="watches.watchUrl" class="card-img" :alt="watches.watchName">
            <div class="card-img" id="product_text_display">
                <h4 id="product_line"></h4>   
              <h2 class="card-title"><b>{{ watches.watchName }}</b></h2>
              <h5 id="product_category">{{ watches.Category }}</h5>
              <h4 id="product_price">R{{ watches.amount }}</h4>
              
              <router-link to="/admin" id="view_more_button">Go Back</router-link>

          </div>
      </div>
    </div>
    <div v-else class="row justify-content-center gap-3" >
        <SpinnerComp/>
    </div>
  </div>
</template>
<script>
import SpinnerComp from '../components/SpinnerComp.vue';
export default {
    components: {
        SpinnerComp
    },
  computed: {
    watches() {
      return this.$store.state.watches;
    },
  },
  mounted() {
    this.$store.dispatch("fetchName");
  },
};
</script>
<style scoped></style>