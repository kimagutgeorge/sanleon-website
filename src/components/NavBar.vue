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
      show_phone_navigation: false,
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.show_phone_navigation = this.windowWidth >= 1170;
    },
  },
};
</script>

<template>
  <div class="w-full flex justify-center flex-wrap nav-bar">
    <!-- top red bar -->
    <div
      class="w-full section-to-hide custom-bg-red flex p-2 px-6 text-white font-semibold text-sm"
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
        <div
          v-for="(social, index) in socials"
          :key="index"
          class="social w-[25px] min-w-[25px] h-[25px] flex items-center justify-center bg-white rounded-full cursor-pointer overflow-hidden"
        >
          <i :class="`${social.icon} icon`" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <!-- phone menu toggle -->
    <div
      class="w-full phone-navigation flex justify-end gap-6 custom-bg-green py-4 px-6"
    >
      <div class="w-fit">
        <i class="fa-solid fa-search text-white text-xl" />
      </div>
      <div
        @click="show_phone_navigation = !show_phone_navigation"
        class="relative w-[40px] h-[24px] flex flex-col justify-between cursor-pointer"
      >
        <span
          :class="[
            'absolute top-0 left-0 w-full h-[3px] bg-white transition-all duration-300 origin-center',
            show_phone_navigation ? 'rotate-45 top-[10px]' : 'rotate-0 top-0',
          ]"
        ></span>
        <span
          :class="[
            'absolute top-[10px] left-0 w-full h-[3px] bg-white transition-all duration-300 origin-center',
            show_phone_navigation ? 'opacity-0' : 'opacity-100',
          ]"
        ></span>
        <span
          :class="[
            'absolute bottom-0 left-0 w-full h-[3px] bg-white transition-all duration-300 origin-center',
            show_phone_navigation
              ? '-rotate-45 bottom-[10px]'
              : 'rotate-0 bottom-0',
          ]"
        ></span>
      </div>
    </div>

    <!-- NAV AREA WITH TRANSITION -->
    <transition name="slide-fade">
      <div
        v-if="show_phone_navigation"
        class="w-full custom-bg-green p-4 px-6 flex gap-2 main-nav-bar overflow-hidden"
      >
        <div class="w-[15%] nav-to-w-full">
          <img src="/logo.png" class="max-w-[180px]" />
        </div>
        <div
          class="w-[35%] nav-to-w-full flex flex-col justify-center h-full px-4"
        >
          <div class="w-full flex gap-4 to-block">
            <p
              v-for="(page, index) in pages"
              :key="index"
              class="relative text-white font-semibold group"
            >
              <router-link :to="page.link" class="relative">
                {{ page.name }}
                <span
                  class="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
                ></span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="w-[20%] nav-to-w-full h-full flex flex-col justify-center">
          <div
            class="w-full flex flex-nowrap rounded-full p-2 px-4 border-2 border-white nav-bar-search"
          >
            <div class="h-full w-fit flex flex-col justify-center">
              <i class="fa-solid fa-magnifying-glass text-white text-lg" />
            </div>
            <div class="w-full h-full flex flex-col justify-center px-2">
              <input
                type="text"
                placeholder="Search"
                class="focus:outline-none bg-transparent placeholder-white font-thin"
              />
            </div>
          </div>
        </div>
        <div class="w-[30%] nav-to-w-full h-full flex justify-end">
          <div class="h-full flex flex-col justify-center">
            <button
              class="custom-bg-blue float-right p-4 w-[300px] max-w-full text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#15133e]"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
