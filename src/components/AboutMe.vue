<template>
  <div class="aboutMe text-center">
    <navbar :on_aboutMe="true"></navbar>
    <div class="container w-100 ">
      <img class="profileImage" alt="Nathan & Kaiser" src="../assets/Nathan&Kaiser.jpg">
      <h2 class="text-center">About Me</h2>

      <ul>
        <h4><span class="coolStuff">Education:</span> <br>BS in Computer Science from
          <a href="https://www.fiu.edu/" target="_blank">Florida International University</a> 2020
          <br>MS in Music Engineering Technology from <a href="https://welcome.miami.edu/" target="_blank">University of Miami</a> 2023</h4>
        <h4><span class="coolStuff">Work:</span>
          <br>System Verification Intern at <a href="https://www.shure.com/en-US" target="_blank">Shure</a>
          <br>DSP Course Graduate Teaching Assistant at <a href="https://www.shure.com/en-US" target="_blank">University of Miami</a>
          <br>Substitute Teacher at <a href="https://www.doralacademyprep.org/" target="_blank">Doral Academy Preparatory School</a>
          <br>Audio Engineer at <router-link to="/discography" target="_blank">Nate08 Records</router-link>
        </h4>
        <h4><span class="coolStuff">Skills:</span> <br>C++, Java, Javascript, C, Python, HTML, CSS, Vue, JUCE, SQL, Prolog, F#, Microsoft Office, Logic Pro</h4>
        <h4><span class="coolStuff">Languages:</span> <br>English, Portuguese, Spanish</h4>
        <h4><span class="coolStuff">Extracurricular:</span> <br>Audio/Video Technician at <a href="https://www.facebook.com/OurLadyofGuadalupeCatholicChurch/about/?ref=page_internal" target="_blank">Our Lady of Guadalupe Church</a>
          <br>Audio Engineer at <a href="https://www.youtube.com/channel/UCNwyQ00Cp78UGMiIRSEGxFg" target = "_blank">Garage Sound Records</a></h4>
        <h4><span class="coolStuff">Location:</span> <br>Doral, Florida</h4>
        <h4><span class="coolStuff">Nationality:</span> <br>Sâo Paulo, Brazil</h4>
      </ul>

      <div class="quoteBox">
        <h3 class="font-italic">“Success is the sum of small efforts repeated day in and day out.”</h3>
        <h3 class="float-right">- Robert Collier</h3>
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
name: "AboutMe",
  components: {
    Navbar
  },
}
</script>

<style scoped>

.coolStuff{
  color: #D4AF37;
}

.profileImage {
  max-width: 25vw;
  min-width: 25vw;
  height: auto;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
  border-radius: 6%;
}

@media screen and (max-width: 600px) {
  .profileImage {
    min-width: 50vw;
    height: auto;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .25);
    border-radius: 6%;
  }
}

ul {
  text-align: left;
}

h4 {
  margin-bottom: 40px;
}

h3{
  //color: #D4AF37;
}

a{
  letter-spacing: .004em;
//font-weight: 400;
  //color: antiquewhite;
  color: #D4AF37;
//font-size: 20px;
//text-shadow: 2px 2px black;
  text-decoration: none;
}

a:hover {
  color: #D4AF37;
  text-decoration: underline;
}

</style>