<template>

    <div class="logo mt-10">The event4</div>
    <!-- แทรกรูป -->
  <div class="mt-10">
    <news></news>
    <div class="mt-20">
      <h3 class="text-brown-dark text-3xl font-black">| Activities</h3>
      <div class="grid">
      <div class="col-end-7 ">
      <router-link to="/Event">
          <BaseButton
            buttonLabel="+ Add Event"
            buttonColor="bg-brown-dark"
            textColor="text-brown-light"
            borderColor="border-transparent"
            class="text-xl"
          />
        </router-link>
      </div>
      </div>
      <div class="bg-cream-light border-solid border-opacity-75 rounded-lg mx-20 mt-4">
        <div class="flex-initial grid grid-rows p-5  ">
          <div class="list" v-for="result in AddEventShow" :key="result.id">
            <div class="bg-brown-light rounded-2xl p-5 my-2 ">
                <p class="pb-2 text-left">
                  <span class="font-black text-green-darkgreen "> Title:</span>
                  {{ result.title }}<br />
                  <span class="font-black text-green-darkgreen"  > Description: </span
                  ><span style="white-space: pre-wrap;">{{ result.description }} </span><br />
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <About> </About>

  <footer>
    <span class="footer">Created By <span class="create"> criss </span> 2020 All rights reserved.</span>
  </footer>
</template>

<script>
import News from "@/components/News.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Home",
  components: {
    News, BaseButton
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


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap');

.logo {
  font-family: 'Dancing Script' ;
  font-size: 70px;
  color: #6b705c;
  font-weight: 600 ;
;
}

.create {
  font-weight: 600 ;
}

.footer {
font-family: 'Open Sans';
}

</style>

