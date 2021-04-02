<template>
  <v-container fluid fill-height>
    <v-btn plain class="backBtn" to="/discovery">DISCOVERY</v-btn>
    <v-row>
      <v-col
        cols="12"
        class="d-flex align-center justify-center"
        v-if="$vuetify.breakpoint.mdAndDown"
      >
        <div class="titleText">Vũ trụ của Hoàng Tử Bé</div>
      </v-col>
      <v-col cols="12" lg="9">
        <v-container>
          <v-row :class="{ roomPadding: $vuetify.breakpoint.lgAndUp }">
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/1"
                ><v-img
                  class="borderRadiusClass"
                  aspect-ratio="1"
                  src="../assets/images/Planet_Big.png"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">VŨ TRỤ</div>
                    </div>
                  </v-container></v-img
                ></router-link
              ></v-col
            >
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/2"
                ><v-img
                  class="borderRadiusClass"
                  contain
                  aspect-ratio="1"
                  src="../assets/images/Walking-in-desert.gif"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">HOÀNG TỬ BÉ</div>
                    </div>
                  </v-container></v-img
                ></router-link
              ></v-col
            >
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/3"
                ><v-img
                  class="borderRadiusClass"
                  aspect-ratio="1"
                  src="../assets/images/Fox.png"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">CÁO</div>
                    </div>
                  </v-container></v-img
                ></router-link
              ></v-col
            >
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/4"
                ><v-img
                  class="borderRadiusClass"
                  contain
                  aspect-ratio="1"
                  src="../assets/images/Sheep_In_Universe.png"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">CỪU</div>
                    </div>
                  </v-container></v-img
                >
              </router-link></v-col
            >
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/5"
                ><v-img
                  class="borderRadiusClass"
                  aspect-ratio="1"
                  src="../assets/images/The_Well.png"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">GIẾNG NƯỚC</div>
                    </div>
                  </v-container></v-img
                ></router-link
              ></v-col
            >
            <v-col cols="6" lg="4"
              ><router-link to="/galleryView/6"
                ><v-img
                  class="borderRadiusClass"
                  aspect-ratio="1"
                  src="../assets/images/Comp-1_1.gif"
                  ><v-container
                    class="containerEffect2 d-flex justify-center align-end"
                  >
                    <div class="holderEffect2">
                      <div class="textEffect2">VŨ TRỤ</div>
                    </div>
                  </v-container></v-img
                ></router-link
              ></v-col
            >
          </v-row>
        </v-container>
      </v-col>
      <v-col
        cols="3"
        class="d-flex align-center"
        v-if="$vuetify.breakpoint.lgAndUp"
      >
        <div class="titleText">
          Vũ trụ của <br />
          Hoàng Tử Bé
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    choice: 0,
  }),
  computed: () => ({}),
  methods: {},
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

.containerEffect2 {
  position: absolute;
  bottom: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  background: rgba(174, 210, 209, 0.8);
}

.holderEffect2 {
  height: 0px;
  line-height: 70px;
  transition: all 0.3s ease-out;
}

.textEffect2 {
  font-family: Rokkitt;
  font-weight: 500;
  color: #fbfbfb;
  @include font-size(20px);
}

.borderRadiusClass:hover > div > .containerEffect2 {
  opacity: 1;
}

.borderRadiusClass:hover > div > .containerEffect2 > .holderEffect2 {
  height: 70px;
}

.borderRadiusClass {
  border-radius: 15%;
}

.roomPadding {
  padding: 10%;
}
</style>
