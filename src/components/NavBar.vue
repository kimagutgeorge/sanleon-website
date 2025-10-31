<script>
export default {
  name: "NavBar",
  data() {
    return {
      contacts: [
        { name: "P.O BOX 213-00517, NAIROBI." },
        {
          name: "+254 798 534 123",
          icon: "/icons/call.png",
          alt_text: "white phone icon",
        },
        {
          name: "sanleonltd@gmail.com",
          icon: "/icons/mail.png",
          alt_text: "white email icon",
        },
        {
          name: "MON-FRI 9.00AM - 5:00PM | SAT: 8:AM-12:00PM",
          icon: "/icons/watch-later.png",
          alt_text: "white watch icon",
        },
      ],
      socials: [
        { icon: "fa-brands fa-facebook-f custom-text-red" },
        { icon: "fa-brands fa-instagram custom-text-red" },
        { icon: "fa-brands fa-x-twitter custom-text-red" },
        { icon: "fa-brands fa-linkedin-in custom-text-red" },
      ],
      pages: [
        { name: "HOME", link: "/" },
        { name: "COMPANY", link: "/company" },
        { name: "PRODUCTS", link: "/products" },
      ],
    };
  },
};
</script>
<template>
  <div class="w-full flex justify-center flex-wrap">
    <div
      class="w-full custom-bg-red flex p-2 px-6 text-white font-semibold text-sm"
    >
      <div class="w-[90%] flex gap-4">
        <p
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex flex-nowrap"
        >
          <img
            v-if="contact.icon"
            :src="contact.icon"
            :alt="contact.alt_text"
            class="max-h-[20px] mr-[5px]"
          />
          {{ contact.name }}
        </p>
      </div>
      <!-- socials -->
      <div class="w-[10%] flex gap-2 justify-end">
        <!-- Template -->
        <div
          v-for="(social, index) in socials"
          :key="index"
          class="social w-[25px] h-[25px] flex items-center justify-center bg-white rounded-full cursor-pointer overflow-hidden"
        >
          <!-- ensure the icon element has the class 'icon' as well as any icon library class -->
          <i :class="`${social.icon} icon`" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <!-- nav area -->
    <div class="w-full custom-bg-green p-4 px-6 flex gap-2">
      <div class="w-[15%]">
        <img src="/logo.png" class="max-w-[180px]" />
      </div>
      <div class="w-[35%] w-full flex flex-col justify-center h-full px-4">
        <div class="w-full flex gap-4">
          <span
            v-for="(page, index) in pages"
            :key="index"
            class="relative text-white font-semibold group"
          >
            <router-link :to="page.link" class="relative">
              {{ page.name }}
              <!-- Animated underline using after pseudo-element -->
              <span
                class="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
          </span>
        </div>
      </div>
      <div class="w-[20%] h-full flex flex-col justify-center">
        <div
          class="w-full flex flex-nowrap rounded-full p-2 px-4 border-2 border-white"
        >
          <div class="h-full w-fit flex flex-col justify-center">
            <i class="fa-solid fa-magnifying-glass text-white text-lg" />
          </div>
          <!-- input field -->
          <div class="w-full h-full flex flex-col justify-center px-2">
            <input
              type="text"
              placeholder="Search"
              class="focus:outline-none bg-transparent placeholder-white font-thin"
            />
          </div>
        </div>
      </div>
      <div class="w-[30%] h-full flex justify-end">
        <div class="h-full flex flex-col justify-center">
          <button
            class="custom-bg-blue float-right p-4 w-[300px] max-w-full text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#15133e]"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
