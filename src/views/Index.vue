<template>
  <v-container fluid class="d-flex center" fill-height>
    <v-container class="m-auto">
      <v-row>
        <v-col align-self="center" cols="12" class="d-flex justify-center">
          <v-img max-width="25vw" src="../assets/images/Sheep_2.png" />
        </v-col>
      </v-row>
      <v-row>
        <v-col align-self="center" cols="12" class="d-flex justify-center">
          <span class="sSoundOn">Sound On?</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="d-flex justify-end">
          <v-btn plain>Yes</v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-start">
          <v-btn plain>No</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";
.sSoundOn {
  font-family: Rokkitt;
  @include font-size(30px);
  color: #aeaeae;
}
.homeContainer {
  width: 100%
};
</style>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
