<template>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/AqKsMW74k/tyness?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=2'" width="100%" height="400"></iframe>
</template>

<script>
export default {
    name: "GraphT21",
    props:{
        from: String,
        to: String
    }
}
</script>

<style scoped>

</style>