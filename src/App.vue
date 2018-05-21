<template>
  <div id="app">
    <div class="top">
      <SpinningTaco />
      <Header />
      <InputForm class="container"/>
    </div>
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>

import SpinningTaco from "@/components/SpinningTaco"
import Header from "@/components/Header"
import InputForm from "@/components/InputForm"

export default {
  name: "App",
  components: {
    Header,
    InputForm,
    SpinningTaco
  }
}
</script>

<style>
html {
  background-image: url("/Mexican_Background.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.top{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.container{
  width: 50%;
  align-self: center;
}
</style>
