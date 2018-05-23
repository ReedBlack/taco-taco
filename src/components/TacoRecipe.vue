<template lang="html">
  <div class="recipe-section">
    <div class = "taco-title">
      <p class="recipe-title">
      {{recipe.base_layer.part}}
      <span class="loud base-layer">{{recipe.base_layer.name.name}}</span>,   
      {{recipe.condiment.part}}
      <span class ="loud condiment"> {{tacoData[2].condiment.name}}</span>, 
      {{recipe.mixin.part}}
      <span class="loud mixin"> {{tacoData[2].mixin.name}} </span>,  
      {{recipe.shell.part}}
      <span class="loud shell"> {{tacoData[2].shell.name}}</span>.</p>
    </div>
    <br>
    <div>
      <vue-showdown :markdown="recipe.base_layer.name.recipe" />
      <p>hi</p>
    </div>
  </div>
</template>

<script>
import VueShowdown from "vue-showdown";
import Vue from "vue";

export default {
  name: "tacoRecipe",
  components: {
    VueShowdown
  },
  props: ["recipe", "showRecipe", "tacoData", "tacoFeeling", "getBaseLayer"],
  methods: {}
};
</script>

<style lang="css">
.taco-title {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 2%;
}

.recipe-section {
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.1em;
}

.loud {
  font-weight: bold;
  font-size: 1.2em;
}

.base-layer {
  color: red;
}

.condiment {
  color: green;
}

.mixin {
  color: red;
}

.shell {
  color: green;
}
</style>