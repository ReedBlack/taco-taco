<template lang="html">
  <div class="">
    <InputForm :getBaseLayer="getBaseLayer" 
               :getShell="getShell"
               :getCondiment="getCondiment"
               :getMixin="getMixin"
                />
    <TacoRecipe 
                
                :getBaseLayer="getBaseLayer" 
                :showRecipe="showRecipe"
                
                :recipe="recipe" 
                :getCondiment="getCondiment"
                :getMixin="getMixin"
                :getShell="getShell"
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
      tacoData: [],

      recipe: {
        base_layer: {
          part: "",
          name: "",
          recipe: ""
        },
        condiment: {
          part: "",
          name: "",
          recipe: ""
        },
        mixin: {
          part: "",
          name: "",
          recipe: ""
        },
        shell: {
          part: "",
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
    });
  },
  methods: {
    getBaseLayer(tacoFeeling) {
      this.recipe.base_layer.part = `A Base of `;
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
    getShell() {
      this.recipe.shell.part = `and Served on `;
      const randomShell = this.tacoData[5][
        Math.floor(Math.random() * this.tacoData[5].length)
      ];

      this.recipe.shell.name = randomShell;
    },
    getCondiment() {
      this.recipe.condiment.part = `Topped with `;
      const randomCondiment = this.tacoData[3][
        Math.floor(Math.random() * this.tacoData[3].length)
      ];
      this.recipe.condiment.name = randomCondiment;
    },
    getMixin() {
      this.recipe.mixin.part = `Tossed with `;
      const randomMixin = this.tacoData[4][
        Math.floor(Math.random() * this.tacoData[4].length)
      ];

      this.recipe.mixin.name = randomMixin;
    }
  }
};
</script>

<style lang="css">
.container {
  width: 50%;
  align-self: center;
}
</style>
