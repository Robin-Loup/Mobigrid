<script>

import Capteur_ambiance from "@/components/Capteur_ambiance.vue";
import Form_date from "@/components/Form_date.vue"
import Capteur_elec from "@/components/Capteur_elec.vue";

export default {
    name: "Atelier",
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
        <h1 class="text-center mb-5">Atelier</h1>
    </header>
    <div class="d-flex justify-content-center">
        <Form_date @start="sendFrom" @end="sendTo"/>
    </div>
    <div class="row justify-content-center, atelier">
        <div class="ambiance9">
            <capteur_ambiance name="ambiance9" :from="from" :to="to" />
        </div>
        <div class="ambiance10">
            <capteur_ambiance name="ambiance10" :from="from" :to="to" />
        </div>
        <div class="ambiance11">
            <capteur_ambiance name="ambiance11" :from="from" :to="to" />
        </div>
        <div class="tyness21">
            <capteur_elec name="tyness21" :from="from" :to="to" />
        </div>
        <div class="squid31">
            <capteur_elec name="squid31" :from="from" :to="to" />
        </div>
        <div class="squid32">
            <capteur_elec name="squid32" :from="from" :to="to" />
        </div>
    </div>
    <div class="d-flex justify-content-center mb-5">
        <a id="export" class="btn btn-dark" href="http://134.214.142.120/grafana/d/rmrY3R74k/squid?orgId=1&refresh=1m&inspect=4">Export</a>
    </div>
</template>


<style>
.atelier {
    margin:auto;
    width: 896px;
    min-height: 690px;
    background-attachment: scroll;
    background-image: url("../assets/plan_Atelier.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.ambiance9 {
    margin-top: 306px;
    margin-left: 605px;
}
.ambiance10 {
    margin-top: 347px;
    margin-left: -25px;
}
.ambiance11 {
    margin-top: 602px;
    margin-left: 174px;
}
.tyness21 {
    margin-top: 116px;
    margin-left: -222px;
}
.squid31 {
    margin-top: 147px;
    margin-left: -24px;
}
.squid32 {
    margin-top: 178px;
    margin-left: -24px;
}
.row>*{
    width: 0;
}
</style>