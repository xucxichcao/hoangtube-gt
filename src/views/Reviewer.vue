<template>
  <v-container
    fluid
    fill-height
    class="pa-0 d-flex justify-center align-center"
  >
    <v-btn plain class="backBtn" to="/blogs">blog</v-btn>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-row class="fill-height">
            <v-col
              class="d-flex justify-center align-center"
              cols="12"
              md="8"
              offset-md="4"
            >
              <v-img
                contain
                height="55vh"
                width="55%"
                class="borderRadiusClass"
                src="../assets/images/BuiGiang2.png"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" class="d-flex justify-center align-center">
          <v-row>
            <v-col cols="12" class="d-flex justify-center align-center">
              <div class="quoteText">
                "Tác phẩm thơ mộng nhất và u uẩn nhất trong những tác phẩm của
                Saint Exupéry."
              </div>
            </v-col>
            <v-col cols="12">
              <div class="nameText d-flex justify-center align-center">
                Bùi Giáng
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";

.quoteText {
  text-align: center;
  @include font-size(35px);
  font-family: Rokkitt;
  font-weight: 700;
  @include rfs(500px, width);
}

.nameText {
  text-align: center;
  @include font-size(25px);
  font-family: Rokkitt;
  font-weight: 500;
}

.borderRadiusClass {
  border-radius: 10%;
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
