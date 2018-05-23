<template lang="html">
  <div class="">
    <InputForm :getBaseLayer="getBaseLayer" />
    <TacoRecipe 
                
                :getBaseLayer="getBaseLayer" 
                :showRecipe="showRecipe"
                :tacoFeeling="tacoFeeling" 
                :recipe="recipe" 
                :getCondiments="getCondiments"
                :tacoData="tacoData" />
  </div>
</template>

<script>
import TacoRecipe from "@/components/TacoRecipe.vue";
import InputForm from "@/components/InputForm.vue";
import VueShowdown from "vue-showdown";
import Vue from "vue";

export default {
  name: "Main",
  components: {
    InputForm,
    TacoRecipe,
    VueShowdown
  },
  data() {
    return {
      API_URL: "/tacos.json",
      showRecipe: true,
      tacoFeeling: "",
      tacoData: [],
      recipe: {
        base_layer: {
          part: "A Base of ",
          name: "",
          recipe: ""
        },
        condiment: {
          part: "Topped with ",
          name: "",
          recipe: ""
        },
        mixin: {
          part: "Mixed in with ",
          name: "",
          recipe: ""
        },
        shell: {
          part: "and Served on ",
          name: "",
          recipe: ""
        }
      }
    };
  },
  mounted() {
    Promise.all([
      fetch("/tacos.json").then(res => res.json()),

      fetch("http://taco-randomizer.herokuapp.com/base_layers/").then(res =>
        res.json()
      ),

      fetch("http://taco-randomizer.herokuapp.com/random/").then(res =>
        res.json()
      ),

      fetch("http://taco-randomizer.herokuapp.com/condiments/").then(res =>
        res.json()
      ),

      fetch("http://taco-randomizer.herokuapp.com/mixins/").then(res =>
        res.json()
      ),

      fetch("http://taco-randomizer.herokuapp.com/shells/").then(res =>
        res.json()
      )
    ]).then(res => {
      this.tacoData = res;
      console.log(this.tacoData);
    });
  },
  methods: {
    getBaseLayer(tacoFeeling) {
      const getFeelings = this.tacoData[0].feelings;
      const getBases = this.tacoData[1];
      const feeling = getFeelings.find(feeling => {
        return feeling.feeling === tacoFeeling;
      });
      let matches = [];
      feeling.keywords.forEach(keyword => {
        matches = matches.concat(
          getBases.filter(baseRecipe => {
            return baseRecipe.name.toLowerCase().indexOf(keyword) > -1;
          })
        );
      });
      this.recipe.base_layer.name =
        matches[Math.floor(Math.random() * matches.length)];
    },
    getCondiments() {}
  }
};
</script>

<style lang="css">
.container {
  width: 50%;
  align-self: center;
}
</style>
