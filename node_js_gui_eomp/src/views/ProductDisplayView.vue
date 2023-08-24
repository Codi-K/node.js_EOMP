<template>
    <div v-if="watch">
        <div v-for="watch in watch" :key="watch.watchID" id="view_one_position">
            <img id="view_once_image" :src="watch.watchUrl" :alt="watch.watchName">
            <div id="text_view_once">
                <h1 id="heading_for_view_once">{{watch.watchName}}</h1>
                <h6 id="sub-heading_for_view_once">{{watch.Category}}</h6>
                <h4 id="price_for_view_once">R{{ watch.amount }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["watchID"],
    created() {
            this.$store.dispatch("fetchWatch",this.watchID)
    },
    computed: {
        watch() {
              return this.$store.state.watch
            }
        }
    }
</script>
<style  scoped>
#view_once_image {
    height: 20rem;
    margin: 1rem;
    border-right: 1px solid black;
    padding-right: 2rem;
}

#view_one_position {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
}

#text_view_once {
    display: flex;
    flex-direction: column;
    text-align: left;
}

#heading_for_view_once {
    color: black;
}

#sub-heading_for_view_once {
    color: rgba(0, 0, 0, 0.458);
}

#price_for_view_once {
    color: #ffb413;
}
</style> 