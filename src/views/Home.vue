<template>
  <v-container fluid fill-height>
    <v-img src="../assets/images/Planet.png" max-height="90vh" contain></v-img>
    <v-container
      tabindex="0"
      v-on:click="mouseclick"
      v-on:mouseleave="mouseleave"
      class="menuContainer d-flex justify-center align-center"
    >
      <div class="absoluteHolder">
        <div class="border-1 d-flex justify-center align-center">
          <router-link to="/blog">
            <div class="circle mid-left">
              <div class="textDiv under-left">Blog</div>
            </div>
          </router-link>
          <div class="border-2 d-flex justify-center align-center">
            <router-link to="/author">
              <div class="circle bot-left">
                <div class="textDiv under-mid">Author</div>
              </div>
            </router-link>
            <div class="border-3 d-flex justify-center align-center">
              <router-link to="/discovery">
                <div class="circle top-left">
                  <div class="textDiv top-right">Discovery</div>
                </div>
              </router-link>
              <div class="circle middle"></div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  onMount: {},
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/rfs/scss.scss";

.menuContainer {
  position: absolute;
  right: 1%;
  @include rfs(100px, width);
  @include rfs(100px, height);
}

.menuContainer:hover > .absoluteHolder > .border-1 {
  @include rfs(633px, width);
  @include rfs(633px, height);
  border-width: 2px;
}

.menuContainer:hover > .absoluteHolder > .border-1 > a > .circle {
  opacity: 0.7;
}

.menuContainer:hover > .absoluteHolder > .border-1 > .border-2 {
  @include rfs(376px, width);
  @include rfs(376px, height);
  border-width: 2px;
}

.menuContainer:hover > .absoluteHolder > .border-1 > .border-2 > a > .circle {
  opacity: 0.7;
}

.menuContainer:hover > .absoluteHolder > .border-1 > .border-2 > .border-3 {
  @include rfs(253px, width);
  @include rfs(253px, height);
  border-width: 3px;
}

.menuContainer:hover
  > .absoluteHolder
  > .border-1
  > .border-2
  > .border-3
  > a
  > .circle {
  opacity: 0.7;
}

.textDiv {
  text-decoration: none;
  font-family: Rokkitt;
  @include font-size(30px);
  @include rfs(34px, line-height);
  color: #606060;
  position: absolute;
}

.under-left {
  bottom: -100%;
  left: 100%;
}

.under-mid {
  bottom: -75%;
}

.top-right {
  top: -50%;
  right: 10%;
}

.top-left {
  position: absolute !important;
  top: 0%;
  left: 0%;
  @include rfs(75px, width);
  @include rfs(75px, height);
}

.bot-left {
  @include rfs(50px, width);
  @include rfs(50px, height);
  bottom: calc(9.5% - 0.5rem);
  left: calc(9.5% - 0.5rem);
  position: absolute !important;
}

.mid-left {
  @include rfs(25px, width);
  @include rfs(25px, height);
  left: calc(-1% - 0.5rem);
  position: absolute !important;
}

.middle {
  opacity: 1 !important;
  @include rfs(100px, width);
  @include rfs(100px, height);
}

.circle {
  background: #b5d1d1;
  border-radius: 50%;
  position: relative;
  opacity: 0;
  transition: opacity 0.2s ease-out;
}

.circle:hover {
  opacity: 1 !important;
}
.border-3 {
  @include rfs(100px, width);
  @include rfs(100px, height);
  position: relative;
  border-radius: 50%;
  border: 0px dashed rgba(0, 0, 0, 0.3);
  transition: width 1s, height 1s, border-width 1s ease-out;
}

.border-2 {
  position: relative;
  border: 0px dashed rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 0px;
  height: 0px;
  transition: width 1s, height 1s, border-width 1s ease-out;
}

.border-1 {
  position: relative;
  border: 0px dashed rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 0px;
  height: 0px;
  transition: width 1s, height 1s, border-width 1s ease-out;
}

.absoluteHolder {
  position: absolute;
}
</style>
