<template>
    <div>

        <!-- border line footer -->
        <div id="line_space">
            <div class="visually-hidden">Empty</div>
        </div>

        <!-- links -->

          <div id="links_for_footer">
            <p>Copyright &copy; {{ cYear }} StellarWrist. All rights reserved.</p>
            <p><a href="#" id="find_store_text">Find a StellarWrist store</a> near you.</p>
            <a href="#" id="south_africa_text">South Africa</a>
          </div>

          
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cYear: new Date().getUTCFullYear()
            }
        }
    }
</script>

<style scoped>

</style>