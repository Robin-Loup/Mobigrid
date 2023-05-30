<template>
    <h1>{{ name }}</h1>
    <div v-if="ambiance1">
        <GraphA1 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance2">
        <GraphA2 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance3">
        <GraphA3 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance4">
        <GraphA4 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance5">
        <GraphA5 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance6">
        <GraphA6 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance7">
        <GraphA7 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance8">
        <GraphA8 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance9">
        <GraphA9 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance10">
        <GraphA10 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance11">
        <GraphA11 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance12">
        <GraphA12 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance13">
        <GraphA13 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance14">
        <GraphA14 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance15">
        <GraphA15 :from="from" :to="to"/>
    </div>
    <div v-if="ambiance16">
        <GraphA16 :from="from" :to="to"/>
    </div>
    <div v-if="tyness21">
        <GraphT21 :from="from" :to="to"/>
    </div>
    <div v-if="tyness22">
        <GraphT22 :from="from" :to="to"/>
    </div>
    <div v-if="squid31">
        <GraphS31 :from="from" :to="to"/>
    </div>
    <div v-if="squid32">
        <GraphS32 :from="from" :to="to"/>
    </div>
    <div v-if="squid33">
        <GraphS33 :from="from" :to="to"/>
    </div>
    <div v-if="squid34">
        <GraphS34 :from="from" :to="to"/>
    </div>
</template>

<script>
import GraphA1 from "@/components/Graphs/GraphA1.vue";
import GraphA2 from "@/components/Graphs/GraphA2.vue";
import GraphA3 from "@/components/Graphs/GraphA3.vue";
import GraphA4 from "@/components/Graphs/GraphA4.vue";
import GraphA5 from "@/components/Graphs/GraphA5.vue";
import GraphA6 from "@/components/Graphs/GraphA6.vue";
import GraphA7 from "@/components/Graphs/GraphA7.vue";
import GraphA8 from "@/components/Graphs/GraphA8.vue";
import GraphA9 from "@/components/Graphs/GraphA9.vue";
import GraphA10 from "@/components/Graphs/GraphA10.vue";
import GraphA11 from "@/components/Graphs/GraphA11.vue";
import GraphA12 from "@/components/Graphs/GraphA12.vue";
import GraphA13 from "@/components/Graphs/GraphA13.vue";
import GraphA14 from "@/components/Graphs/GraphA14.vue";
import GraphA15 from "@/components/Graphs/GraphA15.vue";
import GraphA16 from "@/components/Graphs/GraphA16.vue";
import GraphT21 from "@/components/Graphs/GraphT21.vue";
import GraphT22 from "@/components/Graphs/GraphT22.vue";
import GraphS31 from "@/components/Graphs/GraphS31.vue";
import GraphS32 from "@/components/Graphs/GraphS32.vue";
import GraphS33 from "@/components/Graphs/GraphS33.vue";
import GraphS34 from "@/components/Graphs/GraphS34.vue";
export default {
    name: "Graphs",
    components: {GraphA1, GraphA2, GraphA3, GraphA4, GraphA5, GraphA6, GraphA7, GraphA8, GraphA9, GraphA10,
        GraphA11, GraphA12, GraphA13, GraphA14, GraphA15, GraphA16, GraphT21, GraphT22, GraphS31, GraphS32,
        GraphS33, GraphS34},
    props: {
        name: String,
        from: String,
        to: String
    },
    data() {
        return {
            ambiance1: this.name == "ambiance1",
            ambiance2: this.name == "ambiance2",
            ambiance3: this.name == "ambiance3",
            ambiance4: this.name == "ambiance4",
            ambiance5: this.name == "ambiance5",
            ambiance6: this.name == "ambiance6",
            ambiance7: this.name == "ambiance7",
            ambiance8: this.name == "ambiance8",
            ambiance9: this.name == "ambiance9",
            ambiance10: this.name == "ambiance10",
            ambiance11: this.name == "ambiance11",
            ambiance12: this.name == "ambiance12",
            ambiance13: this.name == "ambiance13",
            ambiance14: this.name == "ambiance14",
            ambiance15: this.name == "ambiance15",
            ambiance16: this.name == "ambiance16",
            tyness21: this.name == "tyness21",
            tyness22: this.name == "tyness22",
            squid31: this.name == "squid31",
            squid32: this.name == "squid32",
            squid33: this.name == "squid33",
            squid34: this.name == "squid34",
            counter: 0,
        };
    }
};
</script>

<style>
iframe{
    margin: 10px;
}
</style>