<template lang="html">
  <div class ="form-container">
    <div class="input-form">
      <form class="form" action="index.html" method="post">
        <label for="select">Today I'm Feeling...</label>
        <br>
        <select class="" name="Feeling" placeholder="Today I'm Feeling..." v-model="tacoFeeling">
          <option value="beefy">beefy</option>
          <option value="feathered">feathered</option>
          <option value="fishy">fishy</option>
          <option value="vegged">vegged</option>
          <option value="porked">porked</option>
          <option value="baaaa">baaaa</option>
          <option value="dangerous">dangerous</option>
        </select>
        <br>
        <button type="submit" name="taco" 
        @click.prevent="getBaseLayer(tacoFeeling); 
                        getShell()
                        getCondiment()
                        getMixin()
                        ;">TACO</button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueShowdown from "vue-showdown";
import VueMarkdown from "vue-markdown";

export default {
  name: "InputForm",
  data() {
    return {
      tacoFeeling: ""
    };
  },
  components: {
    VueShowdown,
    VueMarkdown
  },
  props: [
    "getTacoParts",
    "getCondiment",
    "showRecipe",
    "getShell",
    "getBaseLayer",
    "getMixin"
  ]
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
}
.input-form {
  width: 55%;
  text-align: center;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
}

select {
  font-family: "Chango", cursive;
  font-size: 3.6vh;
  background-color: yellow;
}

option {
  text-align: center;
}

button:hover {
  font-size: 3vh;
}

button {
  font-size: 2.8vh;
  border-radius: 20%;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 0.21vw;
  border: 5px inset rgb(120, 0, 0);
  width: 70%;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 15px;
}

label {
  font-family: "Nunito Sans", sans-serif;
  margin-bottom: -9px;
}
</style>
