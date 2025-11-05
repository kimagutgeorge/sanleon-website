<script>
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
import { socials, contacts } from "../js/universal";

export default {
  name: "ContactPage",
  components: { NavBar, HeroSection, Footer },
  data() {
    return {
      contacts: [],
      socials: [],
    };
  },
  mounted() {
    this.socials = socials;
    this.contacts = contacts;
  },
};
</script>
<template>
  <NavBar />
  <HeroSection contact_us_hero />
  <div class="w-full mt-20 flex justify-center mb-[30vh]">
    <div class="w-[80%] to-w-full flex contact-page">
      <div class="w-1/2 p-6 px-8 contact-to-full">
        <h4 class="custom-text-red text-5xl font-normal max-w-[500px]">
          Get in touch
        </h4>
        <p class="mt-6">
          We take great pride in everything that we do, control over products
          allows us to ensure customers receive the best quality service and
          highest standards.
        </p>
        <!-- form -->
        <div class="w-full mt-6">
          <div class="form-group mt-4 p-1">
            <label>Full Name</label>
            <input
              type="text"
              class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal"
              placeholder="John Doe"
            />
          </div>

          <div class="form-group mt-2 flex group-to-wrap">
            <div class="w-1/2 p-1 group-to-full">
              <label>Email</label>
              <input
                type="email"
                class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal"
                placeholder="someone@example.com"
              />
            </div>

            <div class="w-1/2 p-1 group-to-full">
              <label>Phone</label>
              <div
                class="w-full flex flex-nowrap items-center p-3 px-4 border rounded-md mt-2 border-gray-300 gap-1"
              >
                <div class="px-2 border-r border-gray-300">254</div>
                <input
                  type="email"
                  class="w-full focus:outline-none font-normal"
                />
              </div>
            </div>
          </div>

          <div class="form-group mt-4 p-1">
            <label>Message</label>
            <textarea
              class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal h-[150px]"
              placeholder="Type something"
            ></textarea>
            <!-- <input
              type="text"
              class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal"
            /> -->
          </div>
          <div class="w-full mt-4">
            <button
              class="custom-bg-green p-4 w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-6 px-10 rounded-xl custom-bg-red contact-to-full">
        <h4 class="text-white text-5xl font-normal max-w-[500px] to-small">
          We pride to innovate effective methods and focus on customer
          satisfaction.
        </h4>
        <div class="mt-10">
          <p class="text-white flex flex-nowrap font-semibold mt-4">
            <img src="/icons/location-on.png" class="mr-2 h-[24px] w-[24px]" />
            Coolplus HQ, Industrial Area Road A, Nairobi, Kenya
          </p>
          <p
            v-for="(contact, index) in contacts.slice(1)"
            :key="index"
            class="text-white flex flex-nowrap font-semibold mt-4"
          >
            <img
              :src="contact.icon"
              class="mr-2 h-[24px] w-[24px]"
              :alt="contact.alt_text"
            />
            {{ contact.name }}
          </p>
        </div>
        <div class="mt-10 w-full flex gap-2">
          <div
            v-for="(social, index) in socials"
            :key="index"
            class="social w-[30px] min-w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full cursor-pointer overflow-hidden"
          >
            <i :class="`${social.icon} icon`" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
