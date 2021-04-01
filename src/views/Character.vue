<template>
  <div id="character">
    <v-container fluid fill-height>
      <v-row class="mt-lg-0 mt-15 d-flex fill-height align-center">
        <v-col cols="12" lg="1" class="loop">
          <v-row class="py-md-10">
            <v-col
              cols="2"
              lg="12"
              class="listCharacter pa-0"
              v-bind:class="{ currentActiveChar: currentChar == character.id }"
              v-for="character in characters"
              :key="character.id"
              v-on:click="changeText(character.id)"
            >
              <v-img
                max-height="12vh"
                class="my-3"
                contain
                :src="character.img"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex align-center">
          <v-img
            max-height="90vh"
            contain
            :src="characters[currentChar].img"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex align-center">
          <v-container>
            <v-row>
              <div class="characterTitle mx-lg-0 mx-4 mb-8">
                {{ characters[currentChar].name }}
              </div>
            </v-row>
            <v-row class="pr-xl-16">
              <div class="characterContent paddingText">
                {{ characters[currentChar].description }}
              </div>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    characters: [
      {
        id: 0,
        name: "Hoàng Tử Bé",
        img: require("../assets/images/Little_Prince_Char.png"),
        description:
          "Hoàng tử bé sống trên tiểu tinh cầu B612. Ở đó có ba ngọn núi lửa (hai ngọn đang hoạt động còn ngọn kia thì không) và một bông hoa hồng. Cậu chăm sóc cho tiểu hành tinh của mình hằng ngày, nhổ hết các cây bao báp định bám rễ, mọc lên tại đây. Những cái rễ đó sẽ xói đục hành tinh và làm cho thế giới cậu đang sống bị xé rách ra. Một ngày nọ, hoàng tử bé đã rời hành tinh của mình và đi xem phần còn lại của vũ trụ xem như thế nào và đã tới một vài tiểu tinh cầu khác",
      },
      {
        id: 1,
        name: "Rắn",
        img: require("../assets/images/Snake_Char.png"),
        description: "Con này là con rắn",
      },
      {
        id: 2,
        name: "Cáo",
        img: require("../assets/images/Fox_Char.png"),
        description: "Con này là con Cáo",
      },
      {
        id: 3,
        name: "Hoa Hồng",
        img: require("../assets/images/Rose_Char1.png"),
        description: "Đây là hoa hồng",
      },
      {
        id: 4,
        name: "Cừu Nhỏ",
        img: require("../assets/images/Sheep_Char.png"),
        description: "Còn con này là con cừu",
      },
      {
        id: 5,
        name: "Đức Vua",
        img: require("../assets/images/King_Char.png"),
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
#character {
  height: 100%;
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

.listCharacter {
  opacity: 0.5;
}

.paddingText{
  padding-bottom: 20rem;
}

.listCharacter:hover {
  opacity: 0.7;
}

.currentActiveChar {
  opacity: 1 !important;
}

@media screen and (max-width: 599.98px) {
  .paddingText {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
@media screen and (min-width: 599.98px) {
}
@media screen and (min-width: 959.98px) {
  .paddingText {
    padding-right: 4rem;
  }
}
@media screen and (min-width: 1263.95px) {
  .paddingText {
    padding-right: 15rem;
  }
}
</style>
