<script>

import Capteur_ambiance from "@/components/Capteur_ambiance.vue";
import Form_date from "@/components/Form_date.vue"
import Capteur_elec from "@/components/Capteur_elec.vue";

export default {
    name: "Bat172",
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
    components: {Capteur_elec, Form_date, Capteur_ambiance}
}
</script>

<template>
    <header>
        <h1 class="text-center mb-5">Batiment 172</h1>
    </header>
    <div class="d-flex justify-content-center mb-4">
        <Form_date @start="sendFrom" @end="sendTo"/>
    </div>
    <div class="row justify-content-center, bat172">
        <div class="ambiance16">
            <capteur_ambiance name="ambiance16" :from="from" :to="to" />
        </div>
        <div class="tyness22">
            <capteur_elec name="tyness22" :from="from" :to="to" />
        </div>
    </div>
    <div class="d-flex justify-content-center mb-5">
        <a id="export" class="btn btn-dark" href="http://134.214.142.120/grafana/d/rmrY3R74k/squid?orgId=1&refresh=1m&inspect=4">Export</a>
    </div>
</template>


<style>
.bat172 {
    margin:auto;
    width: 896px;
    min-height: 690px;
    background-attachment: scroll;
    background-image: url("../assets/plan_Bat172.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.ambiance16 {
    margin-top: 216px;
    margin-left: 12px;
}
.tyness22{
    margin-top: 216px;
    margin-left: 6px;
}
.row>*{
    width: 0;
}
</style>