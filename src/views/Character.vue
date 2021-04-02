<template>
  <v-container fluid fill-height class="pa-0">
    <v-btn plain class="backBtn" to="/discovery">DISCOVERY</v-btn>
    <v-row class="mt-lg-0 mt-15 d-flex fill-height align-center">
      <v-col
        cols="12"
        lg="3"
        offset-lg="1"
        class="loop d-flex justify-center align-center"
      >
        <v-row class="py-md-10 fixWidth" no-gutters>
          <v-col
            cols="2"
            lg="6"
            class="listCharacter pa-0"
            v-bind:class="{ currentActiveChar: currentChar == character.id }"
            v-for="character in characters"
            :key="character.id"
            v-on:click="changeText(character.id)"
          >
            <v-img
              max-height="21vh"
              class="my-3"
              contain
              :src="character.img_holder"
            >
              <v-container
                class="containerEffect d-flex justify-center align-end"
              >
                <div class="holderEffect">
                  <div class="textEffect">
                    {{ character.name }}
                  </div>
                </div>
              </v-container></v-img
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="3" offset-lg="1" class="d-flex align-center">
        <v-img max-height="90vh" contain :src="characters[currentChar].img">
        </v-img>
      </v-col>
      <v-col cols="12" lg="3" class="d-flex align-center mt-lg-16">
        <v-container>
          <v-row>
            <div class="characterTitle mx-lg-0 mx-4 pb-2">
              {{ characters[currentChar].name }}
            </div>
          </v-row>
          <v-row class="pr-xl-3">
            <div class="characterContent paddingText marginText">
              {{ characters[currentChar].description }}
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    characters: [
      {
        id: 0,
        name: "Hoàng Tử Bé",
        img: require("../assets/images/Little_Prince_Char.png"),
        img_holder: require("../assets/images/Little_Prince_Char.png"),
        description:
          "Hoàng tử bé sống trên tiểu tinh cầu B612. Ở đó có ba ngọn núi lửa (hai ngọn đang hoạt động còn ngọn kia thì không) và một bông hoa hồng. Cậu chăm sóc cho tiểu hành tinh của mình hằng ngày, nhổ hết các cây bao báp định bám rễ, mọc lên tại đây. Những cái rễ đó sẽ xói đục hành tinh và làm cho thế giới cậu đang sống bị xé rách ra. Một ngày nọ, hoàng tử bé đã rời hành tinh của mình và đi xem phần còn lại của vũ trụ xem như thế nào và đã tới một vài tiểu tinh cầu khác",
      },
      {
        id: 1,
        name: "Rắn",
        img: require("../assets/images/Snake_Char.png"),
        img_holder: require("../assets/images/Snake_Holder.png"),

        description: "Con này là con rắn",
      },
      {
        id: 2,
        name: "Cáo",
        img: require("../assets/images/Fox_Char.png"),
        img_holder: require("../assets/images/Fox_Holder.png"),

        description: "Con này là con Cáo",
      },
      {
        id: 3,
        name: "Hoa Hồng",
        img: require("../assets/images/Rose_gif.gif"),
        img_holder: require("../assets/images/Rose_Char1.png"),
        description: "Đây là hoa hồng",
      },
      {
        id: 4,
        name: "Cừu Nhỏ",
        img: require("../assets/images/Sheep_Char.png"),
        img_holder: require("../assets/images/Sheep_Holder.png"),

        description: "Còn con này là con cừu",
      },
      {
        id: 5,
        name: "Đức Vua",
        img: require("../assets/images/King_Char.png"),
        img_holder: require("../assets/images/King_Holder.png"),
        description: "Đây là ông vua",
      },
    ],
    currentChar: 0,
  }),
  methods: {
    changeText: function (index) {
      this.currentChar = index;
    },
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
.backBtn > span {
  @include font-size(20px);
}

#character {
  height: 100%;
}

.fixWidth {
  width: 100%;
}

.characterTitle {
  font-family: Rokkitt;
  font-weight: 600;
  @include font-size(80px);
  @include rfs(70px, line-height);
}

.characterContent {
  font-family: Montserrat;
  @include font-size(18px);
  @include rfs(30px, line-height);
}

.containerEffect {
  position: absolute;
  bottom: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.holderEffect {
  height: 0px;
  line-height: 25px;
  transition: all 0.3s ease-out;
}

.listCharacter:hover > div > div > .containerEffect {
  opacity: 0;
}

.listCharacter:hover > div > div > .containerEffect > .holderEffect {
  height: 0px;
}

.listCharacter {
  opacity: 0.5;
}

.listCharacter:hover {
  opacity: 0.7;
}

.currentActiveChar {
  opacity: 1 !important;
}

@media screen and (max-width: 599.98px) {
  .paddingText {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    padding-bottom: 5%;
  }
}
@media screen and (min-width: 599.98px) {
  .paddingText {
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    padding-bottom: 5%;
  }
}
@media screen and (min-width: 959.98px) {
  .paddingText {
    padding-top: 10%;
  }
}
@media screen and (min-width: 1263.95px) {
  .paddingText {
    padding-top: 10%;
  }
}
</style>
