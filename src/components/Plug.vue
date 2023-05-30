<script>

import Form_date from "@/components/Form_date.vue"

export default {
    name: "Plug",
    data(){
        return{
            from:'',
            to:''
        }
    },
    methods:{
        sendFrom(value){
            this.from = value
        },
        sendTo(value){
            this.to = value
        }
    },
    components: {Form_date}
}
</script>

<template>
    <header>
        <h1 class="text-center mb-5">Plug</h1>
    </header>
    <div class="d-flex justify-content-center mb-4">
        <Form_date @start="sendFrom" @end="sendTo"/>
    </div>
    <div class="d-flex justify-content-center">
        <iframe :src="'http://134.214.142.120/grafana/d-solo/H9bKu77Vz/plug?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=2'" width="450" height="200"></iframe>
        <iframe :src="'http://134.214.142.120/grafana/d-solo/H9bKu77Vz/plug?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=8'" width="450" height="200"></iframe>
        <iframe :src="'http://134.214.142.120/grafana/d-solo/H9bKu77Vz/plug?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=4'" width="450" height="200"></iframe>
        <iframe :src="'http://134.214.142.120/grafana/d-solo/H9bKu77Vz/plug?orgId=1&refresh=1m&from=' + from + '&to=' + to + '&panelId=7'" width="450" height="200"></iframe>
    </div>
    <div class="d-flex justify-content-center mb-5">
        <a id="export" class="btn btn-dark" href="http://134.214.142.120/grafana/d/rmrY3R74k/squid?orgId=1&refresh=1m&inspect=4">Export</a>
    </div>
</template>


<style>
iframe{
    margin: 10px;
}
</style>