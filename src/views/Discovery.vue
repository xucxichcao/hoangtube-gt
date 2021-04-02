<template>
  <v-container fluid fill-height class="d-flex justify-center overflowhack">
    <div class="border-3 d-flex justify-center align-center animating">
      <router-link to="/character">
        <div class="planet04">
          <img src="../assets/images/Planet04.png" />
          <div class="textLink">Character</div>
        </div>
      </router-link>
      <div class="border-2 d-flex justify-center align-center animating">
        <router-link to="/book">
          <div class="planet02">
            <img src="../assets/images/Planet02.png" />
            <div class="textLink">Book</div>
          </div>
        </router-link>
        <router-link to="/animation">
          <div class="planet01">
            <img src="../assets/images/Planet01.png" />
            <div class="textLink">Animation</div>
          </div>
        </router-link>
        <div class="border-1 d-flex justify-center align-center animating">
          <router-link to="/gallery">
            <div class="planet03">
              <img src="../assets/images/Planet03.png" />
              <div class="textLink">Gallery</div>
            </div>
          </router-link>
          <img class="imgRose animating" src="../assets/images/Rose_gif.gif" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@keyframes zoomOuttttt {
  0% {
    transform: scale(0.1);
  }
  100% {
    transform: translateX(1);
  }
}

.animating {
  animation: 1s ease-out 0s 1 zoomOuttttt;
}

@import "../../node_modules/rfs/scss.scss";

.overflowhack {
  height: 100vh;
  white-space: nowrap;
  overflow: hidden;
}

.imgRose {
  @include rfs(471px, width);
  @include rfs(471px, height);
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

.planet01 {
  position: absolute;
  bottom: 0%;
  right: 0%;
  opacity: 0.7;
  transition: 0.3s opacity linear;
}
.planet01:hover {
  opacity: 1;
}

.planet01 img {
  @include rfs(234px, width);
  @include rfs(234px, height);
}

.planet03 {
  position: absolute;
  bottom: 0%;
  left: -12%;
  opacity: 0.7;
  transition: 0.3s opacity linear;
}

.planet03:hover {
  opacity: 1;
}

.planet03 img {
  @include rfs(194px, width);
  @include rfs(194px, height);
}

.planet04 {
  position: absolute;
  opacity: 0.7;
  transition: 0.3s opacity linear;
}

.planet04:hover {
  opacity: 1;
}

.planet04 img {
  @include rfs(211px, width);
  @include rfs(211px, height);
}

.planet02 {
  position: absolute;
  top: 0%;
  left: 0%;
  opacity: 0.7;
  transition: 0.3s opacity linear;
}

.planet02:hover {
  opacity: 1;
}

.planet02 img {
  @include rfs(236px, width);
  @include rfs(236px, height);
}

.border-1 {
  border: 5px dashed rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  @include rfs(470px, width);
  @include rfs(470px, height);
}

.border-2 {
  border: 3px dashed rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  @include rfs(800px, width);
  @include rfs(800px, height);
}

.border-3 {
  border: 1px dashed rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: fixed;
  box-sizing: content-box;
  width: calc(9.875rem + 75.5vw);
  height: calc(9.875rem + 75.5vw);
  display: inline-block;
}

@media screen and (max-width: 599.98px) {
  .planet04 {
    top: calc(0.7vh + 0.5vw);
    right: calc(-0.7vw + 2.5rem);
  }
}
@media screen and (min-width: 599.98px) {
  .planet04 {
    top: calc(10vw + 4rem);
    right: calc(-6vw + 0.7rem);
  }
}
@media screen and (min-width: 959.98px) {
  .planet04 {
    top: calc(10vw + 3rem);
    right: calc(-4.5vw + 1rem);
  }
}
@media screen and (min-width: 1263.95px) {
  .planet04 {
    top: calc(10vw + 22em);
    right: calc(-4vw - 1.3rem);
  }
}
</style>
