<template>
   <div class="logo mt-10 mb-5">The event4</div>
    <box>
      <h1 class="text-green-darkgreen text-3xl font-bold">Contact Us</h1>
      <div class="text-green-darkgreen font-bold">
        Contact to send information for public relations
      </div>
      <h1 class="text-green-dark text-3xl font-bold mt-5">Address</h1>
      <p>51/96 myhome shiracha chonburi 20111</p>
      <h1 class="text-green-dark text-3xl font-bold mt-5">
        Phone number and Email
      </h1>
      <p>Tel : 099-7899964</p>
      <p>Email : natchaphannoi@gmail.com</p>
      <div class="flex">
       
      </div>
    </box>
<About> </About>
  <footer>
    <span class="footer">Created By <span class="create"> criss </span> 2020 All rights reserved.</span>
  </footer>
</template>

<script>
import box from "@/components/ModelBlock.vue";
export default {
  name: "Contact",
  components: {
    box
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
.create {
  font-weight: 600 ;
}

.footer {
font-family: 'Open Sans';
}
</style>


