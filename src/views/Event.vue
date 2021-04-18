<template>
<div class="logo mt-10">The event4</div> 
<div class="border bg-white opacity-70 rounded-lg p-5 mt-2 lg:mx-60 sm:mx-5 ">
        <p class="text-xl text-black font-extrabold pb-3 mt-5">Agreement for the transmission of the activity information</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </div>
<div class="text-2xl text-green-darkgreen font-extrabold mt-5 ">___________________________________________________________________</div> 
<h2 class="text-2xl text-green-darkgreen font-extrabold pb-3 mt-7">Add Event</h2>
  <div class="">
    <form @submit.prevent="addEvent">
      <div class="mt-5">
        <label class="" for="title"> Title:</label>
        <input
          class="text-black rounded-lg text-sm focus:outline-none py-0.5 w-80 pl-3 "
          cols=""
          id="title"
          type="text"
          v-model="enteredTitle"
          placeholder="Enter your Event Name"
          required
        />
      </div>
      <div class="pb-2">
        <h2 class="pb-1 pt-4 text-bold" for="description">Details about the activity:</h2>
        <textarea
          class="focus:outline-none text-black text-sm pl-3 pt-1 rounded-lg"
          cols="100"
          rows="9"
          id="description"
          type="text"
          v-model="enteredDescription"
          placeholder="Enter description"
          required
        />
      </div>
      <!-- submit but -->
      <div class="pt-2 pl-5 mx-48">
        <button class="focus:outline-none btn text-sm bg-green-darkgreen text-white rounded-2xl shadow px-3 py-2 my-1" >
          submit
        </button>
      </div>
    </form>

    <!-- delete -->
    <div
      class="container grid grid-cols-4 gap-10 place-items-center my-6 mx-auto px-4 pt-10"
    >
      <div class="list" v-for="result in AddEventShow" :key="result.id">
        <div class="bg-gray-50 rounded-2xl p-5">
          <div class="text-gray-900">
            <h2 class="text-center pb-2 text-red-900 text-lg font-extrabold">
              Event
            </h2>
            <h3 class=""></h3>
            <p class="pb-2">
              <span class="font-semibold text-red-800"> Title:</span>
              {{ result.title }}<br />
              <span class="font-semibold text-red-800"> Description: </span
              >{{ result.description }}<br />
            </p>
            <button
              class="focus:outline-none font-semibold text-red-900 hover:text-white hover:bg-red-900 border-2 border-red-900 rounded-full w-20 h-7 mr-10"
              @click="deleteEvent(result.id)"
            >
              delete
            </button>
            <button
              class="focus:outline-none font-semibold text-red-900 hover:text-white hover:bg-red-900 border-2 border-red-900 rounded-full w-20 h-7"
              @click="editSurvey"
            >
              edit
            </button>
          </div>

          <!-- edit -->
          <form @submit="editSubmit(result)" v-if="isEdit">
            <h2
              class="text-red-900 text-center text-lg font-extrabold pb-2 py-5"
            >
              Edit Event
            </h2>
            <label class="text-red-900 font-semibold" for="title"> </label>
            <input
              class="text-black bg-gray-200 rounded-lg text-sm w-auto focus:outline-none py-0.5 pl-3"
              id="title"
              type="text"
              v-model="oldTitle"
              placeholder="Enter your tiltle"
              required
            />
            <h2
              class="text-red-900 text-sm py-2 font-semibold"
              for="description"
            >
              Details about the activity.
            </h2>
            <textarea
              class="bg-gray-200 text-black rounded-lg text-sm focus:outline-none py-0.5 pl-3 w-full"
              id="description"
              type="text"
              v-model="oldDescription"
              placeholder="Enter description "
              required
            />
            <button
              class="float-right focus:outline-none btn text-sm bg-red-900 text-white rounded-2xl shadow px-3 py-2 my-1"
              :class="w - 20"
            >
              edit submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <About> </About>
</template>

<script>
export default {
  name: "Event",
  components: {
    
  },

  emits: ["btn-click"],

  data() {
    return {
      enteredTitle: "",
      enteredDescription: "",
      url: "http://localhost:3000/Results",
      AddEventShow: [],
      isEdit: false,
      oldTitle: "",
      oldDescription: "",
    };
  },
  methods: {
    async addEvent() {
      const newEvent = {
        title: this.enteredTitle,
        description: this.enteredDescription,
      };
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: newEvent.title,
          description: newEvent.description,
        }),
      });
      const data = await res.json();
      this.AddEventShow = [...this.AddEventShow, data];
      this.enteredTitle = "";
      this.enteredDescription = "";
    },
    //2
    async fetchAddEventShow() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },

    async deleteEvent(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.AddEventShow = this.AddEventShow.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
    editSurvey() {
      this.isEdit = true;
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: this.oldTitle,
          description: this.oldDescription,
        }),
      });
      const data = await res.json();
      this.AddEventShow = this.AddEventShow.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              title: data.title,
              description: data.description,
            }
          : survey
      );
      (this.isEdit = false), (this.oldTitle = ""), (this.oldDescription = "");
    },
  },
  //1
  async created() {
    this.AddEventShow = await this.fetchAddEventShow();
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.logo {
  font-family: 'Dancing Script' ;
  font-size: 70px;
  color: #6b705c;
  font-weight: 600 ;
}
</style>



