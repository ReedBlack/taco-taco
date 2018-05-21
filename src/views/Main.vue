<template lang="html">
  <div class="">
    <TacoRecipe />
 </div>
</template>

<script>
import TacoRecipe from "@/components/TacoRecipe.vue";

export default {
  name: "Main",
  components: {
    TacoRecipe
  },
  data() {
    return {
      API_URL: "/tacos.json",
      tacoFeeling: ""
    };
  },
  mounted() {
    Promise.all([
      fetch("http://taco-randomizer.herokuapp.com/base_layers/").then(res =>
        res.json()
      ),

      fetch("http://taco-randomizer.herokuapp.com/random/").then(res =>
        res.json()
      )
    ]).then(res => {
      console.log(res);
    });
  }
};
</script>

<style lang="css">
</style>
