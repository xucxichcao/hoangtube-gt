<template>
  <v-app>
    <v-main>
      <audio
        src="../src/assets/audio/bg.mp3"
        hidden
        id="audio-player"
        loop="true"
      ></audio>
      <v-container v-if="$route.name !== 'Index'" class="cLogo mt-5 ml-5 pa-0">
        <v-row>
          <router-link to="/home"
            ><img class="iLogo" src="./assets/images/Final.png"
          /></router-link>
          <div class="d-flex align-center sLogo">
            <v-btn plain @click="toggleAudio()">{{
              isPlayingSound ? "Sound off" : "Sound on"
            }}</v-btn>
          </div>
        </v-row>
      </v-container>
      <v-container
        v-if="
          $route.name !== 'AnimationTrailer' &&
          $route.name !== 'Index' &&
          $route.name !== 'Author'
        "
        class="cSocial mt-5 ml-5 pa-0"
      >
        <v-row class="rSocial d-flex align-center justify-center" no-gutters>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn
              exact
              plain
              href="https://tiki.vn/hoang-tu-be-tai-ban-2019-p15267827.html"
              >Tiki</v-btn
            >
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn plain href="https://www.facebook.com/lepetitprinceofficiel"
              >Fbook</v-btn
            >
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn plain href="https://www.instagram.com/lepetitprinceofficiel"
              >Ins</v-btn
            >
          </v-col>
          <v-col cols="3" class="d-flex align-center justify-center">
            <v-btn
              plain
              href="https://www.goodreads.com/book/show/157993.The_Little_Prince"
              >Goodread</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    //
  },
  mounted() {
    this.checkAudio();
  },
  data: () => ({
    isPlayingSound: null,
  }),
  computed: {},
  methods: {
    toggleAudio() {
      var audio = document.getElementById("audio-player");
      if (audio.paused) {
        audio.play();
        this.isPlayingSound = true;
      } else {
        audio.pause();
        this.isPlayingSound = false;
      }
    },
    checkAudio() {
      var audio = document.getElementById("audio-player");
      if (audio.paused) {
        this.isPlayingSound = false;
      } else {
        this.isPlayingSound = true;
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-Regular.ttf");
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-ExtraBold.ttf");
  font-weight: 800;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-SemiBold.ttf");
  font-weight: 600;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-Light.ttf");
  font-weight: 300;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-ExtraLight.ttf");
  font-weight: 200;
}

@font-face {
  font-family: Rokkitt;
  src: url("../src/assets/font/Rokkitt-Thin.ttf");
  font-weight: 100;
}

@font-face {
  font-family: Montserrat;
  src: url("../src/assets/font/Montserrat-Regular.ttf");
}
@import "../node_modules/rfs/scss.scss";

.cLogo {
  display: inline-block;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 10000;
  width: fit-content !important;
}

.iLogo {
  display: inline-block;
  @include rfs(100px, max-width);
}

.sLogo {
  height: inherit;
  color: #c7c7c7;
  font-family: Rokkitt;
  @include font-size(1.3rem);
}

.cSocial {
  position: fixed;
  background-color: white;
  bottom: 0%;
  left: 0%;
  z-index: 1000;
  width: fit-content;
}

.rSocial {
  width: fit-content;
  font-family: Rokkitt;
  @include font-size(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
