<template>
  <div class="discography text-center">
    <navbar :on_discography="true"></navbar>
    <div class="w-100">

      <img class="NathanDrums" alt= "Drums" src="../assets/NathanDrums.jpg">

      <h2>Discography</h2>

      <div class="musicList">

        <div >
          <a href="https://distrokid.com/hyperfollow/nate081/the-grand-design-vol-1-3" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/CoverArt1.jpeg">
            <div ><h4>Nate08 - "The Grand Design (Vol 1)"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering</h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/purpleberryjam/violet" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/VioletAlbumCover.jpeg">
            <div ><h4>Purpleberry Jam - "Violet"</h4>
              <h5>Credits: Production, Recording Engineering, Mix Engineering</h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/purpleberryjam/fantasy" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/Fantasy.jpeg">
            <div ><h4>Purpleberry Jam - "Fantasy"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering</h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/purpleberryjam/android2022" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/Android.jpeg">
            <div ><h4>Purpleberry Jam - "Android"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering</h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/bloomdream/sleepwalking-in-the-garden-ep" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/SleepwalkingBloomDream.jpeg">
            <div ><h4>Bloom Dream - "Sleepwalking In The Garden"</h4>
              <h5>Credits: Mix Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/bloomdream/fever-dream" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/FeverDream.jpeg">
            <div >
              <h4 >Bloom Dream - "Fever Dream"</h4>
              <h5>Credits: Mix Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/purpleberryjam/lately" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/Lately.jpeg">
            <div >
              <h4 >Purpleberry Jam - "Lately"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering</h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/conscious5/break-off" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/BreakOff.png">
            <div >
              <h4 >Conscious & Waisman - "Break Off"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/conscious3/cold-feelings" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/coldFeelings.jpg">
            <div >
              <h4 >Conscious & Nate08 - "Cold Feelings"</h4>
              <h5>Credits: Production,Recording Engineering, Mix Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/conscious3/just-all-right" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/JustAlright.jpeg">
            <div >
              <h4 >Conscious & Carolena - "Just Alright"</h4>
              <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/nate08/where-to" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/WhereTo.jpg">
            <div >
              <h4>Nate08 - "Where To?"</h4>
              <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
            </div>
          </a>
        </div>


        <div >
          <a href="https://songwhip.com/conscious3/save-me" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/SaveMe.jpg">
            <div>
              <h4>Conscious & Ricky Gonz - "Save Me"</h4>
              <h5>Credits: Production, Recording Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/carolena/invitation" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/Invitation.jpeg">
            <div >
              <h4>Carolena & Conscious - "Invitation"</h4>
              <h5>Credits: Production, Recording Engineering </h5>
            </div>
          </a>
        </div>

        <div >
          <a href="https://songwhip.com/carolena/dame-tu-mano" target="_blank">
            <img class= "coverArt" alt="Cover Art" src="../assets/DTM.jpeg">
            <div >
              <h4>Conscious & Carolena - "Dame Tu Mano"</h4>
              <h5>Credits: Production, Recording Engineering, Mix Engineering </h5>
            </div>
          </a>
        </div>


      </div>

      <div class="quoteBox">
        <h3 class="font-italic">“Success is falling nine times and getting up ten"”</h3>
        <h3 class="float-right">- Jon Bon Jovi</h3>
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
name: "Discography",
  components: {
    Navbar
  },
}
</script>

<style scoped>

  .musicList{
    margin-top: 0px;
    margin-bottom: 35px;
    display: block;
  }

  .coverArt {
    //width: 40%;
    height:auto;
    max-height: 30vh;
    max-width: 30vw;
    //float: left;
    //align-self: center;
    padding: 5px 5px 5px 5px;
    transition: all .2s ease-in-out;
  }

  .coverArt:hover{
    transform: scale(1.1);
  }

  @media screen and (max-width: 600px) {
    .coverArt {
      min-width: 40vw;
      //min-height: 40vh;
      //min-height: 30vh;
      max-width: 40vw;
      //max-height: 40vh;
      height:auto;

      //float: none;
    }
  }

  .NathanDrums {
    width: 100%;
    max-width: 600px;
    height: auto;
    //border: 5px solid black;
    border-radius: 1%;
    padding-bottom: 20px;
  }

  .box {
    width: 500px;
    height: 200px;
    //background-color: #7D88B5;
    margin: 20px auto;
    //padding-bottom: 10px;
    //padding-top: 50px;
    //background-color: #7D88B5;
    display: block;
    margin-bottom: 30px;
  }

  .texPadding{
    width: 250px;
    margin-top: 35px;
    //float: right;

  }

  @media screen and (max-width: 600px) {
    .box {
      width: auto;
      height: 300px;
      //background-color: #7D88B5;
      margin: 20px auto;
      padding: 10px 10px 10px 10px;
      display: block;
    }

    .texPadding{
      margin-top: 0px;
      //float: bottom;
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

  img {
    //box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  }


</style>