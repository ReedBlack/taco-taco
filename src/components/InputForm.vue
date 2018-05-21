<template lang="html">
  <div class="input-form">
    <form class="form" action="index.html" method="post">
      <label for="select">Today I'm Feeling...</label>
      <br>
      <select class="" name="Feeling" v-model="tacoFeeling">
        <option value="earthy">earthy</option>
        <option value="fishy">fishy</option>
        <option value="dangerous">dangerous</option>
        <option value="beefy">beefy</option>
        <option value="porked">porked</option>
        <option value="vegged">vegged</option>
        <option value="feathered">feathered</option>
        <option value="baaaa">baaaa</option>
      </select>
      <br>
      <button type="submit" name="taco" @click.prevent="getRecipe" >TACO</button>
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tacoFeeling: ""
    };
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
select {
  font-family: "Las Locuras del emperador";
  font-size: 30px;
  background-color: yellow;
}

option {
  text-align: center;
}
button {
  font-size: 3vh;
  border-radius: 20%;
  font-family: "Nunito Sans", sans-serif;
  letter-spacing: 0.21vw;
  border: 5px inset rgb(120, 0, 0);
  width: 70%;
  align-self: center;
}
</style>
