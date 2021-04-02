<template>
  <v-container
    fluid
    fill-height
    class="pa-0 d-flex justify-center align-center"
  >
    <v-btn
      plain
      class="backBtn"
      :class="$vuetify.breakpoint.mdAndDown ? 'colorBlack' : 'colorWhite'"
      to="/blogs"
      >blog</v-btn
    >
    <v-row class="fill-height d-flex justify-center align-center">
      <v-col cols="12" lg="9">
        <v-row class="pb-7">
          <v-col
            cols="6"
            lg="5"
            offset-lg="1"
            class="d-flex align-center"
            :class="
              $vuetify.breakpoint.mdAndDown ? 'justify-end' : 'justify-center'
            "
          >
            <v-img
              @click="
                forward('https://www.britannica.com/topic/The-Little-Prince')
              "
              aspect-ratio="1"
              class="borderRadiusClass"
              :max-width="$vuetify.breakpoint.mdAndDown ? '45vw' : '20vw'"
              src="../assets/images/htb_1.png"
            />
          </v-col>
          <v-col cols="6" class="d-flex justify-start align-center">
            <v-img
              @click="
                forward(
                  'https://en.lyon-france.com/discover-lyon/heritage-unesco/Remarkable-sites-and-monuments/statue-of-antoine-de-saint-exupery'
                )
              "
              aspect-ratio="1"
              class="borderRadiusClass"
              :max-width="$vuetify.breakpoint.mdAndDown ? '45vw' : '20vw'"
              src="../assets/images/htb_2.png"
            />
          </v-col>
        </v-row>
        <v-row class="pt-7">
          <v-col
            cols="6"
            lg="5"
            offset-lg="1"
            class="d-flex align-center"
            :class="
              $vuetify.breakpoint.mdAndDown ? 'justify-end' : 'justify-center'
            "
          >
            <v-img
              @click="
                forward(
                  'https://hakone-japan.com/things-to-do/museums/the-little-prince-museum'
                )
              "
              aspect-ratio="1"
              class="borderRadiusClass"
              :max-width="$vuetify.breakpoint.mdAndDown ? '45vw' : '20vw'"
              src="../assets/images/htb_5.png"
            />
          </v-col>
          <v-col cols="6" class="d-flex justify-start align-center">
            <v-img
              @click="forward2"
              aspect-ratio="1"
              class="borderRadiusClass"
              :max-width="$vuetify.breakpoint.mdAndDown ? '45vw' : '20vw'"
              src="../assets/images/htb_4.png"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-0" v-if="$vuetify.breakpoint.lgAndUp" lg="3">
        <v-img height="100vh" src="../assets/images/Sheep_In_Universe.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    forward(myLink) {
      return window.open(myLink, "_blank");
    },
    forward2() {
      this.$router.push("/news-text");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/rfs/scss.scss";

.borderRadiusClass {
  border-radius: 10%;
  cursor: pointer;
}

.backBtn {
  position: absolute;
  top: 0%;
  right: 0%;
  font-family: Rokkitt;
  margin-top: 30px;
  z-index: 1000;
}
.backBtn > span {
  @include font-size(20px);
  text-transform: uppercase;
}
.colorBlack > span {
  color: black;
}

.colorWhite > span {
  color: white;
}
</style>
