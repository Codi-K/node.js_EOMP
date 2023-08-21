<template>
  <div>
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
  </div>
  </template>
  
  <script>
  import NavBarComp from "@/components/NavBarComp.vue"
  import FooterComp from "@/components/FooterComp.vue"
  export default {
    components: {
      NavBarComp,
      FooterComp
    }
  }
  </script>
  
  <style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>