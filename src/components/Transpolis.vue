<script>
import Capteur_ambiance from "@/components/Capteur_ambiance.vue";
import superviseur from "@/components/Superviseur.vue";
import bat172 from "@/components/Bat172.vue";
import atelier from "@/components/Atelier.vue";
import bureau from "@/components/Bureau.vue";
import plug from "@/components/Plug.vue";
import Superviseur from "@/components/Superviseur.vue";
export default {
    name: "Transpolis",
    components: {Capteur_ambiance}
}
</script>

<template>
  <header>
      <h1 class="text-center">Transpolis</h1>
  </header>
  <div class="row justify-content-center, transpolis">
      <router-link to="/superviseur" id="superviseur" class="btn btn-primary">Superviseur</router-link>
      <router-link to="/bat172" id="bat" class="btn btn-primary">Bat 172</router-link>
      <router-link to="/atelier" id="atelier" class="btn btn-primary">Atelier</router-link>
      <router-link to="/bureau" id="bureau" class="btn btn-primary">Bureau</router-link>
      <router-link to="/plug" id="plug" class="btn btn-primary">Plug</router-link>
  </div>
</template>



<style scoped>
.transpolis {
    width: 1875px;
    min-height: 960px;
    background-attachment: scroll;
    background-image: url("../public/plan_Transpolis_origin.png");
    background-size: contain;
    background-repeat: no-repeat;

}

#bat{
    margin-top: 250px;
    margin-left: 136px;
    width: 80px;
    height: 35px;
    opacity: 70%;
}

#superviseur{
    margin-top: 350px;
    margin-left: 520px;
    width: 110px;
    height: 35px;
    opacity: 70%;
}

#atelier{
    margin-top: 390px;
    margin-left: 815px;
    width: 70px;
    height: 42px;
    opacity: 70%;
}

#bureau{
    margin-top: 410px;
    margin-left: 2px;
    width: 80px;
    height: 42px;
    opacity: 70%;
}
#plug{
    margin-top: -651px;
    margin-left: 221px;
    width: 80px;
    height: 42px;
}
</style>