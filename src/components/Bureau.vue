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
</style>