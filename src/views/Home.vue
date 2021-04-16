<template>
  <div class="home">
    <h1 class="pt-10">EVENT4</h1>
    <!-- แทรกรูป -->
  </div>
  <div class="mt-10 ">
   <news></news>
  <div class="mt-5">
    <h3 class="text-brown-dark text-3xl font-black">| Activities</h3>
    <div class=" bg-cream-light border-solid border-opacity-75 rounded-lg mx-20 mt-4">
      <div class="flex flex-initial grid grid-cols-3  ">
      </div>
    </div>
    </div>
</div>
  <About > </About>

<footer>
    <span>Created By <a href="#">criss</a> | <span class="fa fa-copyright">
    </span> 2020 All rights reserved.</span>
</footer>
</template>

<script>
import About from "@/components/About.vue";
import News from '@/components/News.vue';


export default {
  name: "Home",
  components: {
    About, News
  },
};
</script>
