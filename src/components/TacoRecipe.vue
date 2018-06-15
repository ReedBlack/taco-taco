<template lang="html">
  <div class="recipe-section">
    <div class = "taco-title">
      <p class="recipe-title">
      {{recipe.base_layer.part}}
      <span class="loud base-layer">{{recipe.base_layer.name.name}}</span>   
      {{recipe.condiment.part}}
      <span class ="loud condiment"> {{recipe.condiment.name.name}}</span> 
      {{recipe.mixin.part}}
      <span class="loud mixin"> {{recipe.mixin.name.name}} </span>  
      {{recipe.shell.part}}
      <span class="loud shell"> {{recipe.shell.name.name}}</span></p>
    </div>
    <br>
    
      <div class="recipes">
        <vue-markdown :source="recipe.base_layer.name.recipe" />
        <vue-markdown :source="recipe.condiment.name.recipe" />
        <vue-markdown :source="recipe.mixin.name.recipe" />
        <vue-markdown :source="recipe.shell.name.recipe" />
          
        
      </div>
    
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Vue from "vue";

export default {
  name: "TacoRecipe",
  components: {
    VueMarkdown
  },
  props: [
    "recipe",
    "getTacoParts",
    "showRecipe",
    "getMixin",
    "tacoData",
    "getShell",
    "getCondiment",
    "getBaseLayer"
  ]
};
</script>

<style>
.taco-title {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 2%;
}

.recipes {
  background-color: rgba(255, 255, 255, 0.4);
  margin: 2%;
  padding: 2%;
  max-height: 26.5em;
  overflow: scroll;
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

li {
  list-style-image: url("/cactus.png");
}
</style>