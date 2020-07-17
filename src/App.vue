<template>
  <div id="app">
      {{test}}
      <router-view></router-view>
  </div>
</template>

<script>

import{mapState} from  "vuex"
export default {
  name: 'App',
 computed:{
   ...mapState(["test"])
 },
 async mounted(){
   const seller = await this.$axios.get("/api/seller",{})
   console.log(seller.data)
 }
}
</script>

<style>

</style>
