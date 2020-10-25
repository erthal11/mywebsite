<template>
  <div class="projects text-center">
      <navbar :on_projects="true"></navbar>
      <div class="container w-100 ">
        <h2 class="text-center ">Projects</h2>

        <a href="https://github.com/erthal11/Venom_Distortion" target="_blank">
          <img class="pluginClass projectImage" alt="Venom_Distortion_Plugin" src="../assets/Venom.png">
        </a>

        <div>
        </div>

        <a href="https://www.wonderBeats.love" target="_blank">
          <img class="wonderBeats projectImage" alt="Wonder Beats" src="../assets/wonderBeats.png">
        </a>

        <a href="https://devpost.com/Erthal11" target="_blank">
          <h3>Check out my Devpost</h3>
        </a>

        <a href="https://github.com/erthal11" target="_blank">
          <h3>Check out my Github</h3>
        </a>

        <div class="quoteBox">
          <h3 class="font-italic">“You Don’t Have To Be Great To Start, But You Have To Start To Be Great.”</h3>
          <h3 class="float-right">– Zig Ziglar</h3>
        </div>

        <div>
          <img class="waves" alt="waves" src="../assets/audioWaves.png">
        </div>

      </div>

  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
name: "Projects",
  components: {
  Navbar
  },
}
</script>

<style scoped>

.wonderBeats {
  width: 43%;
  max-width: 43vw;
  height: auto;
  border-radius: 1%;

  box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
}

.pluginClass {

  width: 44%;
  max-width: 43vw;
  height: auto;
  border-radius: 1%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
}


@media screen and (max-width: 600px) {
  .wonderBeats {
    min-width: 80vw;
    height: auto;
  }
  .pluginClass{
    min-width: 80vw;
    height: auto;
  }
}


.projectImage {
  border: 7px solid antiquewhite;
  border-radius: 2%;
  transition: all .2s ease-in-out;
  margin-bottom: 50px;
  //text-align: center;
}

.projectImage:hover{
  transform: scale(1.05);
}

h3 {
  margin-bottom: 20px;
}

.fa-github{
  background: black;
  color: white;
}

.fa {
  padding: 20px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 30px;
  width: 70px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}



</style>