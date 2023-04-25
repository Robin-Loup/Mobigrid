<template>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/JgJQLgn4z/humidite?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=2'" width="450" height="200" frameborder="0"></iframe>
</template>

<script>
export default {
    name: "Graph1",
    props:{
        from: String,
        to: String
    }
}
</script>

<style scoped>

</style>