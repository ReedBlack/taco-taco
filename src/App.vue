<template>
  <div id="app">
    <div class="top">
      <SpinningTaco />
      <Header />
    </div>
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import SpinningTaco from "@/components/SpinningTaco";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
    SpinningTaco
  }
};
</script>

<style>
html {
  background-image: url("/Mexican_Background.png");
  background-size: cover;
  background-repeat: repeat;
}
.top {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
