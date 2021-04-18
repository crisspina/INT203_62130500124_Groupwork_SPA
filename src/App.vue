<template>
  <div id="nav" class="rounded-b-2xl flex border font-bold text-lg text-white active:text-green-darkgreen divide-x-2 bg-brown-dark py-3 pr-3 pl-10">
    <div> 
    <router-link to="/" class="px-3" >Home</router-link> 
    <router-link to="/event" class=" px-3">Event</router-link> 
    <router-link to="/contact" class="px-3" >Contact Us</router-link> 
    </div>
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

#nav a.router-link-exact-active {
  color: black;
}

#nav a.router-link-exact-active:hover {
  color: black;
}

body {
  background-color: #eddcd2;
}


</style>