<template>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/cjdMyRnVk/co2?orgId=1&from=' + from + '&to=' + to + '&panelId=11'" width="450" height="200"></iframe>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/JgJQLgn4z/humidite?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=11'" width="450" height="200"></iframe>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/4nLOERn4k/luminosite?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=13'" width="450" height="200"></iframe>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/ECZ8Eg74z/mouvement?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=7'" width="450" height="200"></iframe>
    <iframe :src="'http://134.214.142.120/grafana/d-solo/laX-IJM4z/temperature?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=13'" width="450" height="200"></iframe>
</template>

<script>
export default {
    name: "GraphA9",
    props:{
        from: String,
        to: String
    }
}
</script>

<style scoped>

</style>