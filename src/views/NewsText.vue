<template>
  <div id="app">
    <section
      class="fullpage"
      :class="$vuetify.breakpoint.mdAndDown ? 'fullheight' : ''"
    >
      <v-container
        fluid
        fill-height
        class="pa-0 d-flex justify-center align-center"
      >
        <v-btn plain class="backBtn" to="/blogs">blog</v-btn>
        <v-row class="fill-height">
          <v-col cols="10" offset="1" lg="6" offset-lg="3">
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-img
                  min-height="25vh"
                  src="../assets/images/the_little_prince.jpg"
                />
                <v-col cols="12" md="10" offset-md="1">
                  <div class="titleText pt-10 py-5">
                    The Little Prince:<br />The Child Philosopher
                  </div>
                  <div class="contentText">
                    "And now here is my secret, a very simple secret: it is only
                    with the heart that we see correctly; what is most important
                    is invisible to the eye." The Little Prince was first
                    published in 1943. And since then, it's sold 200 million
                    copies, in 300 languages. And we're still trying to figure
                    out what it is: a children's fable, a philosophical tale, or
                    even an autobiography of its author, Antoine de
                    Saint-Exupéry? Danny Braun of Radio-Canada presents his
                    documentary about the enduring magic of this deceptively
                    simple classic.
                    <br /><br />
                  </div>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section
      class="fullpage"
      :class="$vuetify.breakpoint.mdAndDown ? 'fullheight' : ''"
    >
      <v-container
        fluid
        fill-height
        class="pa-0 d-flex justify-center align-center"
      >
        <v-img
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor-placement="bottom-bottom"
          v-if="$vuetify.breakpoint.lgAndUp"
          class="snakeImg"
          src="../assets/images/Snake_Sneak.png"
        />
        <v-row class="fill-height">
          <v-col cols="10" offset="1" lg="6" offset-lg="3">
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-col cols="12" md="10" offset-md="1">
                  <div class="contentText pt-lg-16 pb-lg-6">
                    Antoine de Saint-Exupéry loved children. His nephew,
                    François d'Agay, still has warm memories of his uncle's
                    visits from decades earlier. The visits may not have been
                    frequent, but they always had an air of fun-filled urgency:
                    "It was always last-minute. He'd call and say he was driving
                    down from Paris overnight. He must've run over a lot of
                    chickens along the way, because he loved to drive fast! He'd
                    arrive in the morning and we'd all be waiting for him. Since
                    he'd been up all night, we'd serve him coffee and a
                    croissant, and then he'd take a nap."
                    <br />
                    <br />
                    Becoming a pilot sped up his uncle's trips, but did nothing
                    to diminish their frantic nature: "After he bought a plane,
                    he'd fly down. He'd arrive in the morning and circle the
                    house, twice. I'd be woken up by the sound. I'd look up and
                    see his red-and-white plane. He'd make his way to Cannes to
                    land and, within an hour, he'd be here."
                    <br /><br />
                    Yet the book's apparent simplicity is matched by its
                    sophistication, as its also a meditation on the meaning of
                    beauty, life and loss. According to editor Alban Cerisier of
                    Gallimard Publishing, "The Little Prince is a very difficult
                    book. It's a book of grieving, of mourning. Death is
                    extraordinarily present. It's a book that makes us stop and
                    think — even about whether we should be sharing it."
                    <br /><br />
                    Yet share it we do. Its astonishing sales numbers are more
                    than enviable for any author. They almost defy explanation.
                    <br /><br />
                    The mystique around the book intensified when the plane
                    piloted by St. Ex — who had returned to France to join its
                    air force, went down over the Mediterranean in July 1944 .
                    <br /><br />
                  </div>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section
      class="fullpage"
      :class="$vuetify.breakpoint.mdAndDown ? 'fullheight' : ''"
    >
      <v-container
        fluid
        fill-height
        class="pa-0 d-flex justify-center align-center"
      >
        <v-row class="fill-height">
          <v-col cols="10" offset="1" lg="6" offset-lg="3">
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-col cols="12" md="10" offset-md="1">
                  <div class="contentText pt-lg-16">
                    Luc Vanrell is a diver, an adventurer and lifelong lover of
                    The Little Prince: "For me, it made perfect sense that my
                    favourite hero had disappeared. Perhaps part of the reason
                    The Little Prince became so successful was because of
                    Saint-Exupéry's disappearance. The book was published during
                    his lifetime, but a lot more copies were sold after his
                    death."
                    <br /><br />
                    The parallel between the way the Little Prince dies and
                    disappears from the story, and how Saint-Exupéry went
                    missing during the war is both obvious and still deeply
                    compelling. But it's the story itself that continues to
                    speak to us, hauntingly and movingly, seventy-five years
                    after it was first published.
                    <br /><br />
                    <br /><br />
                  </div>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-img
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
          contain
          v-if="$vuetify.breakpoint.lgAndUp"
          class="foxImg"
          src="../assets/images/Fox_Sneak.png"
        />
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0,
  }),
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName("section");
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function (e) {
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function (e) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }

      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;

      if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;

      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if (this.inMove && !force) return false;

      this.activeSection = id;
      this.inMove = true;

      document
        .getElementsByTagName("section")
        [id].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    },
  },
  mounted() {
    this.calculateSectionOffsets();

    window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    window.addEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
  },
  unmounted() {
    window.removeEventListener("mousewheel", this.handleMouseWheel, {
      passive: false,
    }); // Other browsers
    window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
  },
};
</script>

<style lang="scss">
@import "../../node_modules/rfs/scss.scss";

.snakeImg {
  position: absolute;
  width: 680px;
  height: 680px;
  top: 21%;
  right: 5%;
}

.foxImg {
  position: absolute;
  width: 700px;
  height: 700px;
  bottom: 0%;
  right: 0%;
}

.fullpage {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.fullheight {
  height: fit-content;
}

.titleText {
  font-family: Rokkitt;
  font-weight: 500;
  @include font-size(60px);
  @include rfs(68px, line-height);
}

.contentText {
  font-family: Montserrat;
  font-weight: 400;
  @include font-size(18px);
  @include rfs(30px, line-height);
  text-align: justify;
}

.backBtn {
  position: fixed;
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
</style>
