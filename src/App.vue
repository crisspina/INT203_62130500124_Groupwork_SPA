<template>
  <div id="nav" class="flex border bg-brown-dark py-3 pr-3 pl-10">
    <router-link to="/">Home</router-link> |  
    <router-link to="/event">Event</router-link> |  
    <router-link to="/contact">Contact Us</router-link> |   
  </div>
  <router-view />
</template>

<script>

export default {
  components: {
   
  },
   data() {
    return {

    };
  },
  methods: {
   
    },
  }
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color:  #eddcd2 ;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>