<script>
import { products } from "../js/universal";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "ProductsPage",
  components: { HeroSection, NavBar, Footer },
  data() {
    return {
      products: [],
      all_products_tracker: [],
      filtered_products: [],
      selected_product: "Laundry Products",
      activeIndex: "",
      favorites: [], // NEW
      favorites_count: 0, // NEW

      //view product details
      product_is_visible: false,
      product_name: "",
      product_image: "",
      product_description: "",
      product_availability: "",
      product_weight: [{ weight: "250ml" }, { weight: "1ltr" }],
    };
  },
  mounted() {
    this.products = products;
    this.all_products_tracker = products;
    this.filtered_products = products;

    this.load_favorites(); // NEW - Load favorites on mount
    this.toggle_category("Laundry Products"); // set laundry as first
  },
  methods: {
    load_favorites() {
      const stored = localStorage.getItem("sanleon_favorites");
      if (stored) {
        this.favorites = JSON.parse(stored);
        this.favorites_count = this.favorites.length;
      }
    },
    toggle_favorite(item, event) {
      event.stopPropagation(); // Prevent card click

      const index = this.favorites.findIndex((fav) => fav.name === item.name);

      if (index > -1) {
        // Remove from favorites
        this.favorites.splice(index, 1);
      } else {
        // Double-check it's not already in the list (extra safety)
        const exists = this.favorites.some((fav) => fav.name === item.name);

        if (!exists) {
          // Add to favorites only if it doesn't exist
          this.favorites.push(item);
        }
      }

      localStorage.setItem("sanleon_favorites", JSON.stringify(this.favorites));
      this.favorites_count = this.favorites.length;
    },

    is_favorite(item_name) {
      return this.favorites.some((fav) => fav.name === item_name);
    },
    toggle_category(name) {
      this.products = this.all_products_tracker;
      this.filtered_products = this.products.filter(
        (product) => product.category === name
      );
      // set products to filtered
      this.products = this.filtered_products;
      this.selected_product = name;
    },
    show_product(name, description, availability, image) {
      this.product_name = name;
      this.product_description = description;
      this.product_availability = availability;
      this.product_image = image;
      this.product_is_visible = true;
    },
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
      <div class="w-full flex flex-to-wrap p-4 bg-white rounded-b-md pb-10">
        <div class="w-[40%] to-w-full">
          <img :src="product_image" />
        </div>
        <div class="w-[60%] to-w-full">
          <h4 class="mt-2 text-2xl font-bold custom-text-red text-to-center">
            {{ product_name }}
          </h4>
          <p class="mt-4 text-to-center">{{ product_description }}</p>
          <h5 class="mt-6 text-to-center">
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

  <NavBar :favorites_count="favorites_count" />
  <HeroSection
    products_hero
    @toggle_category="toggle_category"
    :selected_product="selected_product"
  />
  <div class="w-full flex justify-center relative shop">
    <div
      ref="catalogContainer"
      class="w-[90%] to-w-full mt-[-17vh] h-full flex shop-products flex-wrap justify-center gap-[1%] gap-y-4 z-30"
    >
      <div
        v-for="(item, index) in products"
        :key="index"
        class="w-[29%] mx-[0.8%] bg-white shop-card py-4 rounded-md flex-shrink-0 snap-start border shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
        @click="
          show_product(
            item.name,
            item.description,
            item.availability,
            item.image
          )
        "
      >
        <!-- <div class="w-full flex p-2 justify-end"></div> -->
        <div class="w-full h-fit flex justify-center relative">
          <!-- ADD THIS BUTTON RIGHT HERE - at the top of each product card -->
          <button
            @click="toggle_favorite(item, $event)"
            class="absolute top-2 right-2 z-10 w-10 h-10 flex items-center bg-white justify-center rounded-full transition-all duration-300"
          >
            <i
              class="fa-solid text-xl transition-all duration-300"
              :class="
                is_favorite(item.name)
                  ? 'fa-heart text-red-500'
                  : 'fa-heart text-gray-600'
              "
            ></i>
          </button>
          <img :src="item.image" class="max-h-[50vh]" />
        </div>

        <h4 class="text-center mt-6 text-3xl font-bold custom-text-red px-10">
          {{ item.name }}
        </h4>
        <p class="mt-4 px-6 text-center">{{ item.description }}</p>
        <h5 class="mt-8 px-6 text-center">
          <span class="font-bold custom-text-red">Available in: </span>
          <span
            v-for="(availability, index) in item.available_quantities"
            :key="index"
          >
            {{ availability.quantity }}
          </span>
          <!-- {{ item.availability }} -->
        </h5>
        <div class="w-full px-6">
          <button
            class="custom-bg-green p-4 w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
          >
            Request a quote
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- navigation -->
  <div
    class="w-full flex justify-center gap-2 overflow-x-scroll no-scrollbar mt-2 mb-[30vh] nav-to-show p-4"
  >
    <div
      v-for="(dot, index) in products"
      :key="index"
      class="h-[20px] w-[20px] min-w-[20px] rounded-full cursor-pointer"
      :class="activeIndex === index ? 'custom-bg-red' : 'bg-gray-200'"
      @click="scroll_to_item(index)"
    ></div>
  </div>
  <Footer />
</template>
