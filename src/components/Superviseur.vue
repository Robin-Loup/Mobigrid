<script>

import Capteur_ambiance from "@/components/Capteur_ambiance.vue";
import Form_date from "@/components/Form_date.vue";
import Capteur_elec from "@/components/Capteur_elec.vue";

export default {
    name: "Superviseur",
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
        <h1 class="text-center mb-5">Superviseur</h1>
    </header>
    <div class="d-flex justify-content-center">
        <Form_date @start="sendFrom" @end="sendTo"/>
    </div>
    <div class="row justify-content-center, superviseur">
        <div class="ambiance12">
            <capteur_ambiance name="ambiance12" :from="from" :to="to" />
        </div>
        <div class="ambiance13">
            <capteur_ambiance name="ambiance13" :from="from" :to="to" />
        </div>
        <div class="ambiance14">
            <capteur_ambiance name="ambiance14" :from="from" :to="to" />
        </div>
        <div class="ambiance15">
            <capteur_ambiance name="ambiance15" :from="from" :to="to" />
        </div>
        <div class="squid33">
            <capteur_elec name="squid33" :from="from" :to="to" />
        </div>
        <div class="squid34">
            <capteur_elec name="squid34" :from="from" :to="to" />
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <a id="export" class="btn btn-dark" href="http://134.214.142.120/grafana/d/rmrY3R74k/squid?orgId=1&refresh=1m&inspect=4">Export</a>
    </div>
</template>


<style>
.superviseur {
    margin:auto;
    width: 1000px;
    min-height: 900px;
    background-attachment: scroll;
    background-image: url("../assets/plan_Superviseur.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.ambiance12 {
    margin-top: 302px;
    margin-left: 321px;
}
.ambiance13 {
    margin-top: 731px;
    margin-left: 278px;
}
.ambiance14 {
    margin-top: 731px;
    margin-left: -105px;
}
.ambiance15 {
    margin-top: 277px;
    margin-left: -338px;
}
.squid33 {
    margin-top: 544px;
    margin-left: 68px;
}
.squid34 {
    margin-top: 581px;
    margin-left: -24px;
}
.row>*{
    width: 0;
}
</style>