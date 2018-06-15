<template lang="html">
  <div class="header-section">
    <h1 class="title-taco">¡taco taco!</h1>
  </div>
</template>

<script>
import About from "@/components/About";

export default {
  name: "Header",
  components: {
    About
  }
};
</script>

<style lang="css">
.title-taco {
  font-family: "Chango", cursive;
  font-size: 72px;
  color: green;
  text-shadow: 2px 3px 2px #ff0000;
  margin-top: 0px;
  text-align: center;
}

h1 {
  font-family: "Chango", cursive;
  font-size: 37px;
  color: green;
  text-shadow: 1px 2px 1px #ff0000;
  margin-top: 0px;
  text-align: center;
}

.header-section {
  display: flex;
  flex-direction: column;
}
</style>
