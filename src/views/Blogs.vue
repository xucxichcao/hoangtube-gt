<template>
  <v-container fluid fill-height class="d-flex justify-center overflowhack">
    <div class="border-2 d-flex justify-center align-center animating">
      <router-link to="/news">
        <div class="planet04">
          <img src="../assets/images/Planet04.png" />
          <div class="textLink">News</div>
        </div>
      </router-link>
      <div class="border-1 d-flex justify-center align-center animating">
        <router-link to="/talkshow-interview">
          <div class="planet03">
            <img src="../assets/images/Planet03.png" />
            <div class="textLink" v-if="$vuetify.breakpoint.mdAndDown">T&I</div>
            <div class="textLink" v-if="$vuetify.breakpoint.lgAndUp">
              Talkshow <br />
              & Interview
            </div>
          </div>
        </router-link>
        <router-link to="/reviewer">
          <div class="planet01">
            <img src="../assets/images/Planet01.png" />
            <div class="textLink">Reviewer</div>
          </div>
        </router-link>
        <img class="planet02 animating" src="../assets/images/Planet02.png" />
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import "../../node_modules/rfs/scss.scss";

@keyframes zoomOuttttt {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: translateX(1);
  }
}

.smallText {
  @include font-size(10px);
}

.animating {
  animation: 1s ease-out 0s 1 zoomOuttttt;
}

.planet04 {
  position: absolute;
  right: -10%;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.planet04:hover {
  opacity: 1;
}

.planet04 > .textLink {
  bottom: 0%;
  @include font-size(20px);
}

.planet04 img {
  @include rfs(206px, width);
  @include rfs(206px, height);
}

.planet03 {
  position: absolute;
  top: -10%;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.planet03:hover {
  opacity: 1;
}

.planet03 > .textLink {
  bottom: 0%;
  @include font-size(20px);
}

.planet03 img {
  @include rfs(194px, width);
  @include rfs(194px, height);
}

.planet01 {
  position: absolute;
  bottom: -8%;
  left: -3%;
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.planet01:hover {
  opacity: 1;
}

.planet01 > .textLink {
  bottom: 15%;
  @include font-size(20px);
}

.planet01 img {
  @include rfs(234px, width);
  @include rfs(234px, height);
}

.planet02 {
  @include rfs(500px, width);
  @include rfs(500px, height);
}
.border-1 {
  @include rfs(600px, width);
  @include rfs(600px, height);
  border: 2px dashed rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
}

.border-2 {
  @include rfs(850px, width);
  @include rfs(850px, height);
  border: 2px dashed rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
}

.textLink {
  text-decoration: none;
  color: #606060;
  position: absolute;
  bottom: 5%;
  width: 100%;
  text-align: center;
  font-family: Rokkitt;
  @include font-size(30px);
}

@import "../../node_modules/rfs/scss.scss";
</style>
