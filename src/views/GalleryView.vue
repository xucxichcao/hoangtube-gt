<template>
  <v-container fluid fill-height class="pa-0 d-flex align-center">
    <v-btn plain class="backBtn" to="/gallery">BACK</v-btn>
    <v-row no-gutters>
      <v-col cols="12" md="8" offset-md="2">
        <vueper-slides
          class="no-shadow"
          :breakpoints="breakpoints"
          :slideRatio="12 / 20"
          :initSlide="choice"
          lazy-load-on-drag
          :bullets="false"
          arrows-outside
        >
          <template v-slot:arrow-left>
            <v-icon color="#FFB8B8" size="45px"
              >mdi-arrow-left-drop-circle</v-icon
            >
          </template>

          <template v-slot:arrow-right>
            <v-icon color="#FFB8B8" size="45px"
              >mdi-arrow-right-drop-circle</v-icon
            >
          </template>

          <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :title="slide.title"
            :image="slide.image"
          />
        </vueper-slides>
      </v-col>
      <v-col
        cols="12"
        v-if="$vuetify.breakpoint.mdAndUp"
        class="d-flex justify-center align-start"
      >
        <div class="titleText mt-5">Vũ trụ của Hoàng Tử Bé</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    slides: [
      {
        image: require("../assets/images/Planet_Big.png"),
        title: "Vũ trụ",
      },
      {
        image: require("../assets/images/Walking-in-desert.gif"),
        title: "Hoàng tử bé",
      },
      {
        image: require("../assets/images/Fox.png"),
        title: "Cáo",
      },
      {
        image: require("../assets/images/Sheep_In_Universe.png"),
        title: "Cừu",
      },
      {
        image: require("../assets/images/The_Well.png"),
        title: "Giếng nước",
      },
      {
        image: require("../assets/images/Comp-1_1.gif"),
        title: "Vũ trụ",
      },
    ],
    breakpoints: {
      1264: {
        slideRatio: 3 / 4,
      },
      960: {
        slideRatio: 1 / 1,
        arrows: false,
      },
      600: {
        slideRatio: 1 / 1,
        arrows: false,
      },
      // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
      1904: {
        slideRatio: 1 / 2,
      },
    },
    choice: 0,
  }),
  methods: {
    getSlug() {
      this.choice = this.$route.params.slug;
    },
  },
  created() {
    this.getSlug();
  },
};
</script>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";

.backBtn {
  position: absolute;
  top: 0%;
  right: 0%;
  font-family: Rokkitt;
  margin-top: 30px;
}
.vueperslide {
  background-size: contain !important;
}

.vueperslide__title {
  position: absolute;
  top: 3%;
  right: 1%;
  font-family: Rokkitt;
  font-weight: 500;
  @include font-size(35px);
  color: #aed2d1;
}

.backBtn > span {
  @include font-size(20px);
}

.titleText {
  text-transform: uppercase;
  font-family: Rokkitt;
  font-weight: 500;
  @include font-size(30px);
  @include rfs(34px, line-height);
}
.vueperslides__arrow--prev {
  right: auto;
  left: -9.5em !important;
}
.vueperslides__arrow--next {
  left: auto;
  right: -9.5em !important;
}
</style>
