<template>
  <div class="home">
    <h1 class="pt-10">EVENT4</h1>
    <!-- แทรกรูป -->
  </div>
  <div class="mt-10">
    <news></news>
    <div class="mt-5">
      <h3 class="text-brown-dark text-3xl font-black">| Activities</h3>
      <div
        class="bg-cream-light border-solid border-opacity-75 rounded-lg mx-20 mt-4"
      >
        <div class="flex flex-initial grid grid-cols-3">
          <!-- act -->
          <div class="list" v-for="result in AddEventShow" :key="result.id">
            <div class="bg-gray-50 rounded-2xl p-5">
              <div class="text-gray-900">
                <h2
                  class="text-center pb-2 text-red-900 text-lg font-extrabold"
                >
                  Event
                </h2>
                <h3 class=""></h3>
                <p class="pb-2">
                  <span class="font-semibold text-red-800"> Title:</span>
                  {{ result.title }}<br />
                  <span class="font-semibold text-red-800"> Description: </span
                  >{{ result.description }}<br />
                </p>
              </div>

              <!-- edit -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <About> </About>

  <footer>
    <span
      >Created By <a href="#">criss</a> |
      <span class="fa fa-copyright"> </span> 2020 All rights reserved.</span
    >
  </footer>
</template>

<script>
import News from "@/components/News.vue";

export default {
  name: "Home",
  components: {
    News,
  },
  data() {
    return {
      url: "http://localhost:3000/Results",
      AddEventShow: [],
    };
  },
  methods: {
    async fetchAddEventShow() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.AddEventShow = await this.fetchAddEventShow();
  },
};
</script>
