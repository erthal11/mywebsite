<template>
  <div class="wonderBeats">
    <navbar :on_projects="true"></navbar>
    <div class="container w-100 ">
      <h2 class="text-center">Wonder Beats</h2>



      <div>
        <img class="waves" alt="waves" src="../assets/audioWaves.png">
      </div>

    </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
name: "wonderBeats",
  components:{
  Navbar
  }
}
</script>

<style scoped>

</style>