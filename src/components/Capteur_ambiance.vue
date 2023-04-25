
<script>
import WindowPortal from "@/components/WindowPortal.vue";
import Graphs from "@/components/Graphs.vue";


export default {
    name: "Capteur_ambiance",
    components: {Graphs, WindowPortal},
    props: {
        name: String,
        from: String,
        to: String
    },
    data() {
        return {
            open : false
        }
    },
    methods:{
        click(){
            if (this.open === false)
                this.open = true
            else
                this.open = false
        }
    }
}
</script>

<template>
    <button class="btn btn-primary" @click="click"/>
    <WindowPortal :open="open">
        <div class="text-center">
            <Graphs :name="name" :from="from" :to="to"/>
        </div>
    </WindowPortal>
</template>

<style scoped>
button{
    width: 30px;
    height: 30px;
    background-image: url("../assets/capteur_ambiance.png");
    background-size: contain;
    background-repeat: no-repeat;
}
button:hover{
    border-color: #2c3e50;
}
</style>