<script>

import Capteur_ambiance from "@/components/Capteur_ambiance.vue";
import Form_date from "@/components/Form_date.vue"

export default {
    name: "Bureau",
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
    components: {Form_date, Capteur_ambiance}
}
</script>

<template>
<header>
    <h1 class="text-center mb-5">Bureau</h1>
</header>
    <div class="d-flex justify-content-center">
        <Form_date @start="sendFrom" @end="sendTo"/>
    </div>
    <div class="row justify-content-center, bureau">
        <div class="ambiance1">
            <capteur_ambiance name="ambiance1" :from="from" :to="to" />
        </div>
        <div class="ambiance2">
            <capteur_ambiance name="ambiance2" :from="from" :to="to" />
        </div>
        <div class="ambiance3">
            <capteur_ambiance name="ambiance3" :from="from" :to="to" />
        </div>
        <div class="ambiance4">
            <capteur_ambiance name="ambiance4" :from="from" :to="to" />
        </div>
        <div class="ambiance5">
            <capteur_ambiance name="ambiance5" :from="from" :to="to" />
        </div>
        <div class="ambiance6">
            <capteur_ambiance name="ambiance6" :from="from" :to="to" />
        </div>
        <div class="ambiance7">
            <capteur_ambiance name="ambiance7" :from="from" :to="to" />
        </div>
        <div class="ambiance8">
            <capteur_ambiance name="ambiance8" :from="from" :to="to" />
        </div>
    </div>
    <div class="d-flex justify-content-center mb-5">
        <a id="export" class="btn btn-dark" href="http://134.214.142.120/grafana/d/rmrY3R74k/squid?orgId=1&refresh=1m&inspect=4">Export</a>
    </div>
</template>


<style>
.bureau {
    width: 1875px;
    min-height: 960px;
    background-attachment: scroll;
    background-image: url("../assets/plan_Bureau.png");
    background-size: contain;
    background-repeat: no-repeat;
}
.ambiance1 {
    margin-top: 435px;
    margin-left: 251px;
}
.ambiance2 {
    margin-top: 435px;
    margin-left: 158px;
}
.ambiance3 {
    margin-top: 291px;
    margin-left: 369px;
}
.ambiance4 {
    margin-top: 405px;
    margin-left: -96px;
}
.ambiance5 {
    margin-top: 432px;
    margin-left: 205px;
}
.ambiance6 {
    margin-top: 339px;
    margin-left: 506px;
}
.ambiance7 {
    margin-top: 432px;
    margin-left: -321px;
}
.ambiance8 {
    margin-top: 432px;
    margin-left: 76px;
}
.row>*{
    width: 0;
}
</style>