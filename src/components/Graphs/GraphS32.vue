<template>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/rmrY3R74k/squid?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=3'" width="100%" height="400"></iframe>
</template>

<script>
export default {
    name: "GraphS32",
    props:{
        from: String,
        to: String
    }
}
</script>

<style scoped>

</style>