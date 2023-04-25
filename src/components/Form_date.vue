<template>
      <label class="me-2">From: </label>
      <input class="me-5" id="from" type="date" v-model="from">

      <label class="me-2">To: </label>
      <input id="to" type="date" v-model="to">
</template>

<script>
export default {
      name: "Form_date",
      data(){
          return{
                from:'',
                to:''
          }
      },
      watch:{
            from(newFrom){
                  if (newFrom){
                        let date = new Date(newFrom)
                        let timestamp = date.getTime()
                        this.$emit('start', timestamp.toString())
                  }
            },
            to(newTo){
                  if (newTo){
                        let date = new Date(newTo)
                        let timestamp = date.getTime()
                        this.$emit('end', timestamp.toString())
                  }
            }
      }
}
</script>

<style scoped>

</style>