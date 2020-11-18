<template>
  <div class="projects text-center">
      <navbar :on_projects="true"></navbar>
      <div class="w-100 ">

        <h2>Projects</h2>

        <div class="projectList">


          <a href="https://github.com/erthal11/Schroeder-s-Reverb" target="_blank">
            <img class="pluginClass projectImage" alt="Expect_Delays_Plugin" src="../assets/SchroederReverbImage.png">
            <div class ="box">
              <h4 >Schroeder Reverb</h4>
              <h5>A reverb plugin made with JUCE. Implemented using Schroeder's algorithm with delayLines making up all-pass filters and comb filters. Mix, size, decay, and gain sliders for each delay line output included.</h5>
            </div>
          </a>


          <a href="https://github.com/erthal11/Expect-Delays" target="_blank">
            <img class="pluginClass projectImage" alt="Expect_Delays_Plugin" src="../assets/ExpectDelays.png">
            <div class ="box">
              <h4 >Expect Delays</h4>
              <h5>Ping-pong delay plugin made with juce using dsp::delayLine. Includes adjustable rate, feedback left/right, width, left/right delay shifters, filters, mix, and output. GUI made using Foley's PluginGuiMagic includes interact-able visual representation for delayed signals.</h5>
            </div>
          </a>


          <a href="https://github.com/erthal11/Venom_Distortion" target="_blank">
            <img class="pluginClass projectImage" alt="Venom_Distortion_Plugin" src="../assets/Venom.png">
            <div class ="box">
              <h4>Venom Distortion</h4>
              <h5>Distortion plugin using JUCE. Includes softclip/hardclip option, input, drive, lowpass and highpass filters, output, and a mix knob.</h5>
            </div>
          </a>


          <a href="https://www.wonderBeats.love" target="_blank">
            <img class="wonderBeats projectImage" alt="Wonder Beats" src="../assets/wonderBeats.png">
            <div class ="box">
              <h4>Wonder Beats</h4>
              <h5>Web app for music production using vue and tone.js.</h5>
            </div>
          </a>

        </div>

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

.projectList{
  margin-top: 0;
}

.wonderBeats {
  width: 43%;
  max-width: 43vw;
  height: auto;
  border-radius: 1%;

  box-shadow: 0 3px 10px rgba(0, 0, 0, .25);
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
  .projectImage {
    margin-bottom: 10px;
    transition: all .2s ease-in-out;
  //margin-bottom: 50px;
  //text-align: center;
  }
}


.projectImage {
  border: 7px solid antiquewhite;
  border-radius: 2%;
  transition: all .2s ease-in-out;
  //margin-bottom: 50px;
  //text-align: center;
}

.projectImage:hover{
  transform: scale(1.05);
}

h3 {
  margin-bottom: 20px;
}

.box {
  width: 500px;
  height: auto;
  //height: 200px;
//background-color: #7D88B5;
  margin: 20px auto;
//padding-bottom: 10px;
//padding-top: 50px;
//background-color: #7D88B5;
//display: flex;
  margin-bottom: 30px;
}


@media screen and (max-width: 600px) {
  .box {
    width: auto;
    padding: 10px 10px 10px 10px;
    display: block;
  }

  .projectImage {
    border: 2px solid antiquewhite;
  }
}

a{
  letter-spacing: .004em;
//font-weight: 400;
  color: antiquewhite;
//font-size: 20px;
//text-shadow: 2px 2px black;

}

a:hover {
  color: #D4AF37;
  text-decoration: none;
}



</style>