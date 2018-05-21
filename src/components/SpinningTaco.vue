<template lang="html">
  <div class="spin-container">
    <img class="spinner" src="/Tacologo.png" alt="">
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
.spin-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

}

.spinner{
  margin-top: 2rem;
  align-self: center;
  height: 7rem;
  width: 7rem;

-webkit-animation-name: spin;
-webkit-animation-duration: 4500ms;
-webkit-animation-iteration-count: infinite;
-webkit-animation-timing-function: linear;
-moz-animation-name: spin;
-moz-animation-duration: 4500ms;
-moz-animation-iteration-count: infinite;
-moz-animation-timing-function: linear;
-ms-animation-name: spin;
-ms-animation-duration: 4500ms;
-ms-animation-iteration-count: infinite;
-ms-animation-timing-function: linear;

animation-name: spin;
animation-duration: 4500ms;
animation-iteration-count: infinite;
animation-timing-function: linear;
}
@-ms-keyframes spin {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
