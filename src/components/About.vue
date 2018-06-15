<template>
    <section class="about">
        <h1>about taco-taco</h1>
        <p>Sometimes we all just need a little taco-spiration in our lives. By telling us a little about how you're feeling, we'll generate the base of your taco along those guidelines. Keep clicking the "taco" button to generate endless taco possibilities.</p>
        <h3>Happy taco-ing!</h3>
        <small class="small">- team taco-taco</small>
    </section>
</template>
<script>
export default {};
</script>

<style scoped>
h3 {
  font-family: "Chango", cursive;
  font-size: 29px;
  color: green;
  text-shadow: 1px 2px #ff0000;
  margin-top: 0px;
  text-align: center;
}

.small {
  text-align: center;
  align-self: center;
}

p {
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.1em;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
}

.about {
  display: flex;
  flex-direction: column;
}
</style>