<template>
  <v-container
    fluid
    fill-height
    class="pa-0 d-flex justify-center align-center"
  >
    <div class="cuu1" v-if="$vuetify.breakpoint.lgAndUp">
      <v-img width="15vw" src="../assets/images/Sheep_3.png" />
    </div>
    <div class="cuu2" v-if="$vuetify.breakpoint.lgAndUp">
      <v-img width="10vw" src="../assets/images/Sheep_3.png" />
    </div>
    <v-btn plain class="backBtn" to="/discovery">discovery</v-btn>
    <v-container fluid class="d-block">
      <v-row class="d-flex align-center justify-center" no-gutters>
        <v-col lg="4" offset-lg="4" cols="8" offset="2" class="ma-auto">
          <div class="titleText mb-1">Hoàng tử bé</div>
          <div class="subText mb-6">The little prince</div>
          <div class="contentText">
            Một cô bé sống trong một thế giới của người trưởng thành với mẹ của
            mình, người đã cố gắng chuẩn bị mọi thứ cho cô ấy. Người hàng xóm
            của cô, Aviator, giới thiệu cô gái đến một thế giới phi thường, nơi
            mọi thứ đều có thể xảy ra, thế giới của Hoàng tử bé.
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-center" no-gutters>
        <v-col
          lg="4"
          offset-lg="4"
          cols="8"
          offset="2"
          class="pt-16 ma-auto d-flex align-center justify-center"
        >
          <v-btn color="#FFB8B8" class="btnText" plain to="/animation-trailer"
            >Watch</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";

.cuu1 {
  position: absolute;
  transform: rotate(20.87deg);
  bottom: 15%;
  right: 10%;
}

.cuu2 {
  position: absolute;
  transform: matrix(-0.93, 0.37, 0.37, 0.93, 0, 0);
  top: 13%;
  left: 15%;
}

.btnText > span {
  @include font-size(20px);
}

.backBtn {
  position: absolute;
  top: 0%;
  right: 0%;
  font-family: Rokkitt;
  margin-top: 30px;
}

.titleText {
  font-family: Rokkitt;
  text-transform: uppercase;
  font-weight: 500;
  @include font-size(30px);
  @include rfs(34px, line-height);
}

.subText {
  font-family: Rokkitt;
  font-weight: 300;
  text-transform: uppercase;
  @include font-size(30px);
  @include rfs(34px, line-height);
}

.contentText {
  font-family: Montserrat;
  font-weight: 400;
  @include font-size(18px);
  @include rfs(30px, line-height);
}

.backBtn > span {
  @include font-size(20px);
  text-transform: uppercase;
}
</style>
