<template>
    <h1>{{ name }}</h1>
    <div v-if="ambiance1">
        <Graph1 :from="from" :to="to"/>
    </div>
</template>

<script>
import Graph1 from "@/components/Graph1.vue";

export default {
    name: "Graphs",
    components: {Graph1},
    props: {
        name: String,
        from: String,
        to: String
    },
    data() {
        return {
            ambiance1: this.name == "ambiance1",
            counter: 0,
        };
    }
};
</script>