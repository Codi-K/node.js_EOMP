<template>
    <div v-if="watch">
        <h1>Single Watch View</h1>
        <div v-for="watch in watch" :key="watch.watchID">
            <h2>{{watch.watchName}}</h2>
            <img :src="watch.watchUrl" :alt="watch.watchName">
            <p>R{{ watch.amount }}</p>
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
</style> (edited) 