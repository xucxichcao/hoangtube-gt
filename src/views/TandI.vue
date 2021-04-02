<template>
  <v-container
    fluid
    fill-height
    class="pa-0 d-flex justify-center align-center"
  >
    <v-btn plain class="backBtn" to="/blogs">blog</v-btn>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8">
          <v-row class="fill-height">
            <v-col
              class="d-flex justify-center align-center"
              lg="4"
              offset-lg="1"
              cols="6"
            >
              <v-img
                @click="forward('https://daman.co.id/mark-osborne-reads-the-little-prince-for-iwc-schaffhausens-timewellshared/')"
                contain
                height="65vh"
                width="55%"
                class="borderRadiusClass"
                src="../assets/images/mark_osborn.png"
              />
            </v-col>
            <v-col
              class="d-flex justify-center align-center"
              lg="4"
              offset-lg="1"
              cols="6"
            >
              <v-img
              @click="forward('https://theconversation.com/the-essential-is-invisible-to-the-eye-the-wisdom-of-the-little-prince-in-lockdown-143095')"
                contain
                height="65vh"
                class="borderRadiusClass"
                width="55%"
                src="../assets/images/ba_co.png"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col lg="4" v-if="$vuetify.breakpoint.lgAndUp">
          <v-img contain src="../assets/images/Walking-in-desert.gif" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  methods: {
    forward(myLink) {
      return window.open(myLink, "_blank");
    },
  },
};
</script>

<style lang="scss">
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
}
.backBtn > span {
  @include font-size(20px);
  text-transform: uppercase;
}
</style>
