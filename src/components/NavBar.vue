<script>
import { socials, contacts } from "../js/universal";
export default {
  name: "NavBar",
  props: {
    favorites_count: Number,
  },
  data() {
    return {
      contacts: [],
      socials: [],
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
    //set universal variables
    this.socials = socials;
    this.contacts = contacts;
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
  <div
    class="w-full flex justify-center flex-wrap nav-bar sticky top-0 z-[1000]"
  >
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
          <a :href="social.link" target="_blank">
            <i :class="`${social.icon} icon`" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- phone menu toggle -->
    <div
      class="w-full phone-navigation flex justify-end gap-6 custom-bg-green py-4 px-2"
    >
      <div class="w-fit nav-to-w-full">
        <router-link to="/">
          <img src="/logo.png" class="w-[200px]" alt="cool plus logo" />
        </router-link>
      </div>
      <div class="w-full flex justify-end">
        <i class="fa-solid fa-search text-white text-lg" />
      </div>
      <!-- favourites -->
      <router-link to="/favourites">
        <div
          class="w-[20%] flex flex-col justify-center relative cursor-pointer nav-item-to-show"
        >
          <div
            v-if="favorites_count > 0"
            class="w-[20px] h-[20px] bg-[#ff6760] border-2 border-white rounded-full absolute z-10 mt-[-18px] left-[18px] flex justify-center"
          >
            <div class="h-full flex flex-col justify-center text-white">
              {{ favorites_count }}
            </div>
          </div>
          <i class="fa-solid fa-heart text-red-600 text-2xl" />
        </div>
      </router-link>
      <!-- end of favourites -->
      <div
        @click="show_phone_navigation = !show_phone_navigation"
        class="relative min-w-[30px] w-[30px] h-[24px] flex flex-col justify-between cursor-pointer ml-4"
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
          <router-link to="/">
            <img src="/logo.png" class="max-w-[180px]" alt="cool plus logo" />
          </router-link>
        </div>
        <div
          class="w-[30%] nav-to-w-full flex flex-col justify-center h-full px-4"
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
        <div
          class="w-[20%] nav-to-w-full h-full flex flex-nowrap gap-2 nav-item-to-hide"
        >
          <div class="w-full h-full flex flex-col justify-center">
            <div
              class="w-full flex flex-nowrap rounded-full p-2 px-4 border-2 border-white nav-bar-search nav-item-to-hide"
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
          <!-- favourites -->
        </div>
        <div
          class="w-[35%] nav-to-w-full h-full gap-2 flex justify-end item-to-start"
        >
          <div
            class="w-[20%] flex flex-col justify-center relative cursor-pointer nav-item-to-hide"
          >
            <router-link
              to="/favourites"
              class="w-full flex flex-col justify-center"
            >
              <!-- <div class="favorite-icon-container relative">
                <i class="fa-solid fa-heart"></i>
                <!-- Badge showing count ->
                <span
                  v-if="favorites_count > 0"
                  class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {{ favorites_count }}
                </span>
              </div> -->
              <div
                v-if="favorites_count > 0"
                class="w-[30px] h-[30px] bg-[#ff6760] border-2 border-white rounded-full absolute z-10 mt-[-18px] left-[25px] flex justify-center"
              >
                <div class="h-full flex flex-col justify-center text-white">
                  {{ favorites_count }}
                </div>
              </div>
              <i class="fa-solid fa-heart text-red-600 text-3xl" />
            </router-link>
          </div>

          <div class="h-full flex flex-col justify-center">
            <button
              class="custom-bg-blue float-right p-4 w-[300px] max-w-full text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#15133e]"
            >
              <router-link to="/contact-us"> CONTACT US </router-link>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
