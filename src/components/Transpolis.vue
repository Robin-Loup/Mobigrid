<script>
export default {
    name: "Transpolis"
}
</script>

<template>
  <header>
      <h1 class="text-center">Transpolis</h1>
  </header>
  <div class="row justify-content-center, transpolis">
      <a id="superviseur" class="btn btn-primary">Superviseur</a>
      <a id="bat" class="btn btn-primary">Bat 172</a>

      <a id="atelier" class="btn btn-primary">Atelier</a>
      <a id="bureau" class="btn btn-primary" href="src/bureau.html">Bureau</a>
  </div>
</template>



<style scoped>
.transpolis {
    width: 1875px;
    min-height: 960px;
    background-attachment: scroll;
    background-image: url("src/assets/plan_Transpolis.png");
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
</style>