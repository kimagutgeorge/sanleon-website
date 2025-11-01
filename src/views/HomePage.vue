<script>
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomePage",
  components: { NavBar, HeroSection },
  data() {
    return {
      isOpen: false,
      selectedProducts: [],
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
      products: [
        {
          name: "Cool Plus Toilet Cleaner",
          image: "/products/5ltrs-toilet-cleaner 1.png",
        },
        {
          name: "Cool Plus Hand Wash",
          image: "/products/5ltrs-toilet-cleaner 1 (1).png",
        },
        {
          name: "Cool Plus Multipurpose Cleaner",
          image: "/products/5ltrs-toilet-cleaner 1 (1).png",
        },
      ],
      activeIndex: 0,
    };
  },
  computed: {
    availableProducts() {
      return this.products.filter(
        (product) =>
          !this.selectedProducts.some(
            (selected) => selected.name === product.name
          )
      );
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    addProduct(product) {
      this.selectedProducts.push(product);
      // Keep dropdown open for multiple selections
      // Remove this line if you want it to close after each selection
      // this.closeDropdown()
    },
    removeProduct(index) {
      this.selectedProducts.splice(index, 1);
    },
    scroll_to_item(index) {
      const container = this.$refs.catalogContainer;
      const child = container.children[index];
      if (child) {
        // scroll smoothly to selected item
        container.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
        this.activeIndex = index;
      }
    },
  },
};
</script>
<template>
  <NavBar />
  <!-- hero section -->
  <HeroSection />
  <!-- highlight -->
  <div class="w-full h-[100vh] flex mt-32 px-20 highlight flex-to-wrap">
    <div class="w-1/2 h-full flex flex-col justify-center gap-4 px-4 to-w-full">
      <h4 class="text-6xl font-normal text-to-center">
        Specialising in quality cleaning solutions for industrial and
        institutional markets
      </h4>
      <div class="w-full h-[80vh] relative mt-12 section-to-show">
        <div class="w-full flex justify-center">
          <div
            class="absolute w-full max-w-[400px] left-[20%] z-[20] top-[-30px]"
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
  <div class="w-full h-[50vh] mt-32 relative cta-holder">
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img src="/static/cleaning-cta-image.avif"
      alt="woman-39-s-hands-in-yellow-gloves-cleaning-counter" class="w-full
      h-full object-cover"
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-40 z-2"></div>
    <!-- text layer -->
    <div class="w-full h-full px-20 absolute">
      <div class="h-full flex flex-col justify-center gap-2">
        <p
          class="text-white text-3xl leading-relaxed mt-4 w-full max-w-[800px] text-to-center"
        >
          Our core function is to manufacture, market, and service a wide range
          of cleaning products.
        </p>
        <div class="w-full btn-to-center">
          <button
            class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  </div>
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
        v-for="(item, index) in products.concat(products)"
        :key="index"
        class="w-[32%] mx-[0.8%] catalog-card bg-white py-4 rounded-md flex-shrink-0 snap-start"
      >
        <img :src="item.image" class="max-h-[80%]" />

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
        v-for="(dot, index) in products.length * 2"
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
        class="w-[50%] to-w-full h-full flex gap-8 overflow-x-scroll no-scrollbar snap-x snap-mandatory"
      >
        <div v-for="index in 4" :key="index">
          <div
            class="h-[120px] w-[120px] rounded-full snap-start bg-gray-300 flex-shrink-0 client-card"
          ></div>
        </div>
      </div>
    </div>
  </div>
  <!-- request quote -->
  <div class="w-full h-[85vh] relative section-to-block mt-20">
    <!-- background image -->
    <div class="w-full h-full section-to-not-absolute absolute z-1">
      <img src="/static/request-quote.avif"
      alt="wall-mounted-toilet-cleaning-hotel-maid-cleans" class="w-full h-full
      object-cover section-to-hide section-to-hide"
    </div>
    <!-- background later -->
    <div
      class="w-full h-full custom-bg-green section-to-not-absolute absolute opacity-80 z-2 section-to-hide section-to-hide"
    ></div>
    <!-- text layer -->
    <div
      class="w-full h-full px-20 section-to-not-absolute absolute flex flex-to-wrap catalog-section"
    >
      <div class="w-1/2 h-full p-6 to-w-full smaller-padding">
        <div
          class="h-full flex flex-col justify-center gap-2 p-4 smaller-padding"
        >
          <p
            class="text-white section-to-hide to-text-green text-6xl mt-4 w-full font-light"
          >
            Our products & services provide high quality results with a focus on
            safety.
          </p>
          <h4 class="mt-8 text-white font-bold">Quick Links</h4>
          <p
            class="section-to-hide text-white mt-2 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/company">About us</router-link>
          </p>
          <p
            class="section-to-hide text-white mt-1 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/products">Products</router-link>
          </p>
          <p
            class="section-to-hide text-white mt-1 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/contact-us">About us</router-link>
          </p>
        </div>
      </div>
      <div class="w-1/2 to-w-full">
        <div class="w-[90%] to-w-full relative">
          <div
            class="h-[12vh] custom-bg-blue flex flex-col justify-center text-center text-4xl mt-[-12vh] rounded-t-xl text-white"
          >
            <h2>Requote a Quote</h2>
          </div>
          <!-- form -->
          <div
            class="w-full block p-6 pb-10 bg-white rounded-b-xl request-form"
          >
            <label>Request a quote</label>
            <div class="relative w-full mt-4 mb-6">
              <!-- Custom Select Box -->
              <div
                @click="toggleDropdown"
                class="min-h-[56px] p-3 border border-gray-200 rounded-md cursor-pointer bg-white flex flex-wrap gap-2 items-center"
                :class="{ 'border-blue-500': isOpen }"
              >
                <!-- Selected Products as Chips -->
                <div
                  v-for="(product, index) in selectedProducts"
                  :key="index"
                  class="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  @click.stop
                >
                  <span>{{ product.name }}</span>
                  <button
                    @click="removeProduct(index)"
                    class="hover:bg-blue-200 rounded-full w-5 h-5 flex items-center justify-center transition-colors"
                  >
                    ×
                  </button>
                </div>

                <!-- Placeholder when no products selected -->
                <span
                  v-if="selectedProducts.length === 0"
                  class="text-gray-400"
                >
                  Select products
                </span>

                <!-- Dropdown Arrow -->
                <div class="ml-auto">
                  <svg
                    class="w-5 h-5 text-gray-400 transition-transform"
                    :class="{ 'rotate-180': isOpen }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <!-- Dropdown Options -->
              <div
                v-if="isOpen"
                class="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto"
              >
                <div
                  v-if="availableProducts.length === 0"
                  class="p-4 text-gray-400 text-center"
                >
                  No more products available
                </div>
                <div
                  v-for="(item, index) in availableProducts"
                  :key="index"
                  @click="addProduct(item)"
                  class="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                >
                  {{ item.name }}
                </div>
              </div>

              <!-- Click outside to close -->
              <div
                v-if="isOpen"
                @click="closeDropdown"
                class="fixed inset-0 z-0"
              ></div>
            </div>

            <label>Quantity</label>
            <input
              type="number"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-6 rounded-md"
              placeholder="1"
            />
            <label>Email</label>
            <input
              type="email"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-6 rounded-md"
              placeholder="example@email.com"
            />
            <button
              class="custom-bg-green p-4 w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full text-center custom-bg-red px-20 p-4">
    <p class="text-white text-center">
      &copy; 2025 Sonleon Company Limited, All Rights Reserved.
    </p>
  </div>
</template>
