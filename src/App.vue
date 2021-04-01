<template>
  <v-app>
    <v-main>
      <v-container v-if="$route.name !== 'Index'" class="cLogo mt-5 ml-5 pa-0">
        <v-row>
          <router-link to="/home"
            ><img class="iLogo" src="./assets/images/Final.png"
          /></router-link>
          <div class="d-flex align-center sLogo">Sound On</div>
        </v-row>
      </v-container>
      <transition name="fade" mode="out-in">
        <router-view />
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

  data: () => ({
    //
  }),
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
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 10000;
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
body {
  overflow: hidden;
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
