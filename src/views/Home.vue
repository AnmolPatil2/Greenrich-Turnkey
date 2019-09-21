<template>
  <div class="home">
    <Navbar />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "@/components/navbar.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Navbar
  }
};
</script>
