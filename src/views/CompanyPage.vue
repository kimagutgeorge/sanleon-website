<script>
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "AboutUs",
  components: { NavBar, HeroSection, Footer, Cta, Spinner },
  data() {
    return {
      isOpen: false,
      selectedProducts: [],
      favorites: [],
      favorites_count: "",
      page_is_loading: true,

      contacts: [
        { name: "P.O BOX 213-00517, NAIROBI." },
        {
          name: "+254 798 534 123",
          icon: "/icons/call.png",
          alt_text: "white phone icon",
        },
        {
          name: "info@coolplus.co.ke",
          icon: "/icons/mail.png",
          alt_text: "white email icon",
        },
        {
          name: "MON-FRI 9.00AM - 5:00PM | SAT: 8:AM-12:00PM",
          icon: "/icons/watch-later.png",
          alt_text: "white watch icon",
        },
      ],
      advantages: [
        { name: "Flexible production formulations tailored to client needs" },
        { name: "Single-source for both products and accessories" },
        { name: "Technically skilled staff for optimal customer support" },
        { name: "Locally produced, high-quality industrial products" },
        {
          name: "Unique 5-step service concept, focused on solving customer cleaning challenges",
        },
        { name: "Competitive pricing" },
      ],
    };
  },
  mounted() {
    try {
      this.load_favorites();
    } catch (error) {
      console.error("Error loading page");
    } finally {
      setTimeout(() => {
        this.page_is_loading = false;
      }, 1000);
    }
  },
  methods: {
    load_favorites() {
      const stored = localStorage.getItem("sanleon_favorites");
      if (stored) {
        this.favorites = JSON.parse(stored);
        this.favorites_count = this.favorites.length;
      }
    },
  },
};
</script>
<template>
  <Spinner v-if="page_is_loading" />
  <div v-else class="w-full h-fit">
    <NavBar :favorites_count="favorites_count" />

    <HeroSection about_hero />
    <div class="w-full mt-32 px-20">
      <div class="w-full mt-20 flex flex-wrap gap-[2%]">
        <!-- mission -->
        <div
          class="w-[46%] service-card border border-gray-300 rounded-xl mb-[80px] relative flex flex-wrap justify-center p-4 shadow-md"
        >
          <div class="w-full absolute flex justify-center">
            <img
              src="/icons/mission.png"
              class="h-[145px] mt-[-85px] abt-img"
            />
          </div>
          <div class="w-full mt-[100px] p-4">
            <h5 class="text-center custom-text-green font-bold text-5xl">
              Mission
            </h5>
            <p class="text-center mt-6">
              To provide high quality and affordable cleaning products and
              services while promoting economic growth .we pride to innovate
              effective methods and focus on customer satisfaction
            </p>
          </div>
        </div>
        <!-- visiion -->
        <div
          class="w-[46%] service-card border border-gray-300 rounded-xl mb-[80px] relative flex flex-wrap justify-center p-4 shadow-md"
        >
          <div class="w-full absolute flex justify-center">
            <img src="/icons/vision.png" class="h-[145px] mt-[-85px] abt-img" />
          </div>
          <div class="w-full mt-[100px] p-4">
            <h5 class="text-center custom-text-green font-bold text-5xl">
              Vision
            </h5>
            <p class="text-center mt-6">
              Our vision is to streamline our personal values through every
              aspect of our business. From the quality of products we produce,
              to the level of customer service we provide, we want to
              demonstrate our values: do good, be good, exceed good.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- highlight section -->
    <div
      class="w-full flex mt-10 px-20 flex-to-wrap highlight about-us-highlight"
    >
      <div
        class="w-1/2 h-full flex flex-col justify-center gap-4 px-4 to-w-full minus-p"
      >
        <h4 class="text-6xl font-bold custom-text-red">
          Competitive Advantage
        </h4>

        <p
          v-for="(advantage, index) in advantages"
          :key="index"
          class="flex flex-nowrap"
          :class="index === 0 ? 'mt-6' : ''"
        >
          <img src="/icons/check-circle.png" class="mr-2 w-[25px] h-[25px]" />
          {{ advantage.name }}
        </p>
        <div class="w-full section-to-hide">
          <router-link to="/products" class="w-fit h-fit">
            <button
              class="custom-bg-green p-4 w-[50%] min-w-[200px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              OUR PRODUCTS
            </button>
          </router-link>
        </div>
      </div>
      <div class="w-1/2 h-fit to-w-full mt-4">
        <div class="w-full flex justify-end">
          <img
            src="/static/about-us-products.avif"
            alt="white-bed-linen-in-the-wash"
            class="w-[90%] to-w-full"
          />
        </div>
        <div class="w-full flex justify-center mt-10 section-to-show">
          <router-link to="/products" class="w-fit h-fit">
            <button
              class="custom-bg-green p-6 w-full max-w-[400px] min-w-[200px] mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              OUR PRODUCTS
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <Cta about_cta :class="!clients ? 'mb-[30vh]' : ''" />
    <!-- partners -->
    <div v-if="clients" class="mt-10 w-full h-fit p-20 client-section">
      <div
        class="w-full flex flex-wrap flex-to-wrap border inner-client-section border-gray-300 rounded-lg p-10 px-20 shadow-md"
      >
        <div class="w-full flex flex-col justify-center">
          <h4 class="custom-text-blue text-5xl text-center">Our Clients</h4>
          <p class="text-center mt-6 text-xl">
            Our clients include but not limited to: Hostels | Guest Houses |
            Lodges | Commercial Laundries | Dry Cleaners | Universities &
            Schools | Factories | Restaurants | Plastic Recyclers | Water &
            Beverage Bottlers.
          </p>
        </div>
        <div
          class="w-full mt-12 pb-10 to-w-full h-full client-card-holder flex justify-center gap-8 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
        >
          <div
            v-for="index in 4"
            :key="index"
            class="h-[120px] w-[120px] rounded-full snap-start bg-gray-300 flex-shrink-0 client-card"
          ></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
