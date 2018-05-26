<template lang="html">
  <div classs="about">
    <button class="button" type="button" @click.prevent="toggleAbout">About</button>
    <About v-show="displayAbout" />
    <h1 class="title-taco">¡taco taco!</h1>
  </div>
</template>

<script>
import About from "@/components/About";

export default {
  name: "Header",
  components: {
    About
  },
  data() {
    return {
      displayAbout: false
    };
  },
  methods: {
    toggleAbout() {
      this.displayAbout = !this.displayAbout;
    }
  }
};
</script>

<style lang="css">
.button {
  width: 20%;
  text-align: center;
  margin-left: 39%;
}
@font-face {
  font-family: "Las Locuras del emperador";
  src: url("/Las Locuras del emperador.TTF");
}

.title-taco {
  font-family: "Las Locuras del emperador";
  font-size: 72px;
  color: green;
  text-shadow: 2px 3px #ff0000;
  margin-top: 0px;
  text-align: center;
}

h1 {
  font-family: "Las Locuras del emperador";
  font-size: 40px;
  color: green;
  text-shadow: 1px 2px #ff0000;
  margin-top: 0px;
  text-align: center;
}

.about {
  display: flex;
  flex-direction: column;
}
</style>
