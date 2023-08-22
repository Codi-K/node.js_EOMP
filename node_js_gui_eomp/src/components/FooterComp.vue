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
#line_space {
    border-top: 2px solid black;
    margin: 2rem 10rem 2rem;
}

#footer_positioning {
    display: flex;
    flex-direction: column;
}

#links_for_footer {
    display: flex;
    justify-content: space-between;
    margin-right: 12rem;
    margin-left: 12rem;
}

#south_africa_text {
    text-decoration: none;
    color: #2c3e50;
}

#find_store_text {
    text-decoration: underline 1px;
    color: #2c3e50;
}


</style>