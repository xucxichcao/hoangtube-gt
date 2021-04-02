<template>
  <v-container fluid fill-height class="pa-0" style="z-index: 10000">
    <v-img
      class="cursoClass"
      @click="forward('https://www.youtube.com/watch?v=9gARHWfXE40')"
      src="../assets/images/little-prince-fox_trans_NvBQzQNjv4Bq5CleMo9isD8GZWOb6mXbld3l1unMHLxBpRncRpoL11w.jpg"
      width="100vw"
      height="100vh"
    />
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

<style>
.cursoClass {
  cursor: pointer;
}
</style>
