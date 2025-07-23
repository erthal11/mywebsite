<template>
  <div id="index" class="text-center">
      <navbar :on_index="true"></navbar>
        <div class="container w-100 ">
          <h2>Nathan Erthal</h2>
          <!--<img alt="title" src="../assets/"> -->
          <!--<img class="circular--landscape" alt="Nathan Erthal" src="../assets/Nathan&Kaiser.jpg">-->
          <div>
            <img class="profileImage" alt="Profile Image" src="../assets/Nathan_Profile.jpg">
          </div>

          <div>
            <h3 class="toggleLine"> Signal Processing <span class="coolStuff">/</span> Software <span class="coolStuff">/</span> Audio Engineer</h3>
          </div>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <!--font awesome icons -->
          <div class="socialMedia">
<!--            <a href="https://www.facebook.com/Erthal11/" target="_blank" class="fa fa-facebook"></a>-->
<!--            <a href="https://www.instagram.com/nate.o.eight/?hl=en" target="_blank" class="fa fa-instagram"></a>-->
            <!-- <a href="#" class="fa fa-youtube"></a> -->
            <a href="https://github.com/erthal11" target="_blank" class="fa fa-github"></a>
            <a href="https://drive.google.com/file/d/1vfQ52MmxCs7gAaxMX-tdQUz6lvK-ih4c/view?usp=drive_link" target="_blank">
              <img class ="fa fa-resume" alt="devpost" src="../assets/resumeIcon.png">
            </a>
            <a href="https://www.linkedin.com/in/nathan-erthal-a62bb419a/" target="_blank" class="fa fa-linkedin"></a>
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
name: "Index",
  components:
      {
        Navbar
      },
}


</script>

<style scoped>

.coolStuff{
  color: #D4AF37;
  font-size: xx-large;
}


.circular--landscape {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
  margin-left: -50px;
}


/* Style all font awesome icons */
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

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-file{
  background: antiquewhite;
  color: black;
}

.fa-youtube {
  background: #DC4539;
  color: white;
}

.fa-instagram {
  display: inline-block;
  text-align: center;
  color: #fff;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
}

.fa-github{
  background: black;
  color: white;
}

.fa-linkedin{
  background: #0e76a8;
  color: white;
}

.fa-devpost{
  background: white;
  color: white;
}

.fa-resume{
  background: white;
  color: black;
}

.profileImage {
  max-width: 21vw;
  min-width: 21vw;
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

  .toggleLine{

  }
}

.socialMedia{
//padding-bottom: 40px;
}
</style>
