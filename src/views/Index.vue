<template>
  <v-container fluid class="d-flex center" fill-height>
    <v-container class="m-auto">
      <v-row>
        <v-col align-self="center" cols="12" class="d-flex justify-center">
          <v-img
            max-width="25vw"
            class="seesawEffect"
            src="../assets/images/Sheep_2.png"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col align-self="center" cols="12" class="d-flex justify-center">
          <span class="sSoundOn">Sound On?</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex justify-end">
          <router-link class="fontRkt" to="/home"
            ><v-btn plain @click="toggleAudio">Yes</v-btn></router-link
          >
        </v-col>
        <v-col cols="6" class="d-flex justify-start">
          <router-link class="fontRkt" to="/home"
            ><v-btn plain>No</v-btn></router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(5deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.seesawEffect {
  animation: animate 2s linear infinite;
}

.sSoundOn {
  font-family: Rokkitt;
  @include font-size(30px);
  color: #aeaeae;
}
.homeContainer {
  width: 100%;
}
.fontRkt {
  text-decoration: none;
}

.fontRkt > button > span {
  font-family: Rokkitt;
  text-decoration: none;
  font-size: 18px;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {
    toggleAudio() {
      var audio = document.getElementById("audio-player");
      audio.play();
    },
  },
};
</script>
