<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col cols="9">
        <v-row>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
        </v-row>
        <v-row>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
          <v-col cols="4"
            ><v-img src="../assets/images/Planet_Big.png"
          /></v-col>
        </v-row>
      </v-col>
      <v-col cols="3">
        <div class="titleText">Vũ trụ của Hoàng Tử Bé</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";
.titleText {
  text-transform: uppercase;
  font-family: Rokkitt;
  font-weight: 500;
  @include font-size(30px);
  @include rfs(34px, line-height);
}
</style>