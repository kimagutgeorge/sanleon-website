<script>
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
import { products } from "../js/universal";
export default {
  name: "HomePage",
  components: { NavBar, HeroSection, Footer, Cta },
  data() {
    return {
      isOpen: false,
      selectedProducts: [],
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
      services: [
        {
          icon: "/icons/detergent.png",
          title: "Detergents",
          description:
            "Our core business includes manufacturing high-quality detergents to meet diverse cleaning needs.",
        },
        {
          icon: "/icons/accessories.png",
          title: "Cleaning Accessories",
          description:
            "We source essential cleaning accessories from trusted suppliers, such as mops, brooms, brushes, air fresheners, toilet tissue, and hand paper towels.",
        },
        {
          icon: "/icons/machinery.png",
          title: "Cleaning Machinery",
          description:
            "We represent Truvox cleaning machines, bringing reliable machinery to local clients.",
        },
        {
          icon: "/icons/training.png",
          title: "Training Services",
          description:
            "We offer free training sessions and materials, empowering clients with knowledge for efficient, effective, and economical use of our products and machinery.",
        },
      ],
      products: [],
      activeIndex: 0,
      product_is_visible: false,
    };
  },
  mounted() {
    this.products = products;
  },

  methods: {
    scroll_to_item(index) {
      this.activeIndex = index;
      const container = this.$refs.catalogContainer;
      const cardWidth =
        container.scrollWidth / this.products.slice(0, 5).length;
      container.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    },
    show_product(name, description, availability, image) {
      this.product_name = name;
      this.product_description = description;
      this.product_availability = availability;
      this.product_image = image;
      this.product_is_visible = true;
    },
  },
};
</script>
<template>
  <!-- item description -->
  <div
    v-if="product_is_visible"
    class="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto"
  >
    <!-- Background overlay -->
    <div
      @click="product_is_visible = false"
      class="fixed inset-0 bg-black opacity-60"
    ></div>

    <!-- Quote request modal - centered with scroll capability -->
    <div class="relative z-30 w-full max-w-[800px] my-10 mx-4">
      <div class="w-full p-4 custom-bg-blue flex rounded-t-md">
        <div class="w-full px-4">
          <h4 class="font-semibold text-xl text-white">Request Quote</h4>
        </div>
        <div class="w-fit">
          <i
            @click="product_is_visible = false"
            class="fa-solid fa-close text-white cursor-pointer"
          />
        </div>
      </div>

      <!-- body -->
      <div class="w-full flex p-4 bg-white rounded-b-md pb-10">
        <div class="w-[40%]">
          <h4 class="mt-2 text-2xl font-bold custom-text-red">
            <img :src="product_image" />
          </h4>
        </div>
        <div class="w-[60%]">
          <h4 class="mt-2 text-2xl font-bold custom-text-red">
            {{ product_name }}
          </h4>
          <p class="mt-4">{{ product_description }}</p>
          <h5 class="mt-6">
            <span class="font-bold custom-text-red">Available in: </span>
            {{ product_availability }}
          </h5>

          <!-- form -->
          <div class="w-full mt-4">
            <label>Product Weight</label>
            <select
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-6 rounded-md"
            >
              <option v-for="(weight, index) in product_weight" :key="index">
                {{ weight.weight }}
              </option>
            </select>
            <input
              type="number"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-2 rounded-md"
              placeholder="1"
            />
            <label>Quantity</label>
            <input
              type="number"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-2 rounded-md"
              placeholder="1"
            />
            <label>Email</label>
            <input
              type="email"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-2 rounded-md"
              placeholder="example@email.com"
            />
            <button
              class="custom-bg-green p-4 w-full mt-2 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NavBar />
  <!-- hero section -->
  <HeroSection home_hero />
  <!-- highlight -->
  <div class="w-full h-[100vh] flex mt-32 px-20 highlight flex-to-wrap">
    <div
      class="w-1/2 h-full flex flex-col justify-center gap-4 px-4 to-w-full minus-p"
    >
      <h4 class="text-6xl font-normal text-to-center">
        Specialising in quality cleaning solutions for industrial and
        institutional markets
      </h4>
      <div class="w-full h-[80vh] relative mt-12 section-to-show">
        <div class="w-full flex justify-center">
          <div
            class="absolute w-fit max-w-[400px] left-[20%] z-[20] top-[-30px]"
          >
            <img src="/icons/stars.png" />
          </div>
          <img
            src="/static/highlight-washing-machine.avif"
            alt="white-bed-linen-in-the-wash"
            class="w-full max-w-[400px] absolute to-w-full"
          />
        </div>
        <!-- small image -->
        <div class="w-full absolute top-[60%] flex justify-center">
          <img
            src="/static/PD-White-X-301 1.avif"
            alt="PD-White-X-301"
            class="w-[60%] max-w-[200px] h-auto"
          />
        </div>
      </div>
      <p class="text-2xl mt-6 text-to-center">
        Our core function is to manufacture, market, and service a wide range of
        cleaning products.
      </p>
      <div class="w-full btn-to-center">
        <button
          class="custom-bg-green p-4 w-fit min-w-[200px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
        >
          OUR PRODUCTS
        </button>
      </div>
    </div>
    <div class="w-1/2 h-full section-to-hide relative to-w-full">
      <div class="w-full flex justify-end">
        <div
          class="absolute section-to-not-absolute w-[80%] left-[20%] z-[20] top-[-30px]"
        >
          <img src="/icons/stars.png" />
        </div>
        <img
          src="/static/highlight-washing-machine.avif"
          alt="white-bed-linen-in-the-wash"
          class="w-[90%] absolute to-w-full"
        />
      </div>
      <!-- small image -->
      <div class="w-full h-full section-to-hide absolute top-[50vh]">
        <img
          src="/static/PD-White-X-301 1.avif"
          alt="PD-White-X-301"
          class="h-[60vh]"
        />
      </div>
    </div>
  </div>
  <!-- cta -->
  <Cta home_cta />
  <!-- product and services -->
  <div class="w-full mt-20 px-20">
    <h2 class="text-5xl text-normal text-center custom-text-blue">
      Product & Services
    </h2>
    <div class="w-full mt-20 flex flex-wrap gap-[2%]">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="w-[46%] service-card border border-gray-300 rounded-xl mb-[80px] relative flex flex-wrap justify-center p-4"
      >
        <div class="w-full absolute flex justify-center">
          <div
            class="w-[100px] h-[100px] flex justify-center rounded-full shadow-lg mt-[-60px] bg-white"
          >
            <div class="h-full flex flex-col justify-center">
              <img :src="service.icon" class="h-[50px]" />
            </div>
          </div>
        </div>
        <div class="w-full mt-[80px] p-4">
          <h5 class="text-center custom-text-blue text-5xl">
            {{ service.title }}
          </h5>
          <p class="text-center mt-4">{{ service.description }}</p>
        </div>
      </div>
    </div>
    <!-- contact us -->
    <div class="w-full flex justify-center btn-to-center">
      <button
        class="custom-bg-green p-4 w-fit min-w-[350px] max-w-full text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
      >
        CONTACT US
      </button>
    </div>
  </div>
  <!-- catalogue  -->
  <div class="mt-20 w-full h-fit custom-bg-blue catalog-section p-20">
    <h2 class="text-center text-5xl font-bold text-white">Our Catalog</h2>

    <!-- scrollable container -->
    <div
      ref="catalogContainer"
      class="mt-20 w-full h-fit flex overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth"
    >
      <div
        v-for="(item, index) in products.slice(0, 5)"
        :key="index"
        class="w-[32%] mx-[0.8%] catalog-card bg-white py-4 rounded-md flex-shrink-0 snap-start"
        @click="
          show_product(
            item.name,
            item.description,
            item.availability,
            item.image
          )
        "
      >
        <div class="w-full h-fit flex justify-center">
          <img :src="item.image" class="max-h-[58vh]" />
        </div>

        <h4 class="text-center mt-6 text-3xl font-bold custom-text-red px-10">
          {{ item.name }}
        </h4>
        <div class="w-full px-6">
          <button
            class="custom-bg-green p-4 w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
          >
            Request a quote
          </button>
        </div>
      </div>
    </div>

    <!-- navigation -->
    <div class="w-full flex gap-2 mt-10 justify-center">
      <div
        v-for="(dot, index) in products.slice(0, 5).length"
        :key="index"
        class="h-[20px] w-[20px] rounded-full cursor-pointer"
        :class="activeIndex === index ? 'custom-bg-red' : 'bg-white'"
        @click="scroll_to_item(index)"
      ></div>
    </div>
  </div>
  <!-- partners -->
  <div class="mt-20 w-full h-fit p-20 client-section">
    <div
      class="w-full flex flex-to-wrap border inner-client-section border-gray-300 rounded-lg p-4 px-6 shadow-md"
    >
      <div class="w-[50%] to-w-full h-[120px] flex flex-col justify-center">
        <h4 class="custom-text-blue text-5xl">Our Clients</h4>
      </div>
      <div
        class="w-[50%] to-w-full h-full client-card-holder flex justify-center gap-8 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
      >
        <div
          v-for="index in 4"
          :key="index"
          class="h-[120px] w-[120px] rounded-full snap-start bg-gray-300 flex-shrink-0 client-card"
        ></div>
      </div>
    </div>
  </div>
  <Footer :products="products" :contacts="contacts" />
</template>
