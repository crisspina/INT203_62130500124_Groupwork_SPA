<template>
  <div class="">
    <h1 class="text-green-darkgreen text-3xl font-bold">Event</h1>
    <form @submit.prevent="addEvent">
      <h2 class="text-center text-2xl font-extrabold pb-5">Add The Event</h2>
      <div class="pb-2">
        <label class="" for="title"> Title:</label>
        <input
          class="text-black rounded-lg text-sm w-auto focus:outline-none py-0.5 pl-3"
          id="title"
          type="text"
          v-model="enteredTitle"
          placeholder="Enter your Event Tiltle"
          required
        />
      </div>
      <div class="pb-2">
        <h2 class="pb-1" for="description">Details about the activity.</h2>
        <textarea
          class="focus:outline-none text-black text-sm pl-3 pt-1 rounded-lg w-full"
          id="description"
          type="text"
          v-model="enteredDescription"
          placeholder="Enter description"
          required
        />
      </div>
      <!-- submit but -->
      <div class="pt-2 pl-5 mx-48">
        <button
          class="focus:outline-none btn text-sm bg-green-darkgreen text-white rounded-2xl shadow px-3 py-2 my-1">
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
              class="text-red-900 text-center text-lg font-extrabold pb-2 py-5">
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
</template>

<script>
export default {
  name: "Event",
  components: {},

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
    // async addEvent() {
    //   const newEvent = {
    //     title: this.enteredTitle,
    //     description: this.enteredDescription,
    //   };
    //   const res = await fetch(this.url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: newEvent.title,
    //       description: newEvent.description,
    //     }),
    //   });
    //   const data = await res.json();
    //   this.AddEventShow = [...this.AddEventShow, data];
    //   this.enteredTitle = "";
    //   this.enteredDescription = "";
    // },
    async addEvent(){
        const newEvent = {
           title: this.enteredTitle,
           description: this.enteredDescription
        }
        const res = await fetch(this.url,{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            title: newEvent.title,
            description: newEvent.description
            
          })
        })
        const data = await res.json()
        this.AddEventShow = [...this.AddEventShow,data]
        this.enteredTitle = ''
        this.enteredDescription = ''
    
      },

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
  async created() {
    this.AddEventShow = await this.fetchAddEventShow();
  },
};
</script>

