<script>
export default {
  name: "Footer",
  props: {
    contacts: Array,
    products: Array,
  },
  data() {
    return {
      isOpen: false,
      activeIndex: 0,
      selectedProducts: [],
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
  <!-- request quote -->
  <div class="w-full h-[85vh] relative section-to-block section-quote mt-20">
    <!-- background image -->
    <div class="w-full h-full section-to-not-absolute absolute z-1">
      <img src="/static/request-quote.avif"
      alt="wall-mounted-toilet-cleaning-hotel-maid-cleans" class="w-full h-full
      object-cover section-to-hide "
    </div>
    <!-- background later -->
    <div
      class="w-full h-full custom-bg-green section-to-not-absolute absolute opacity-80 z-2 section-to-hide"
    ></div>
    <!-- text layer -->
    <div
      class="w-full h-full px-20 section-to-not-absolute absolute flex flex-to-wrap catalog-section"
    >
      <div class="w-1/2 h-full p-6 to-w-full smaller-padding to-second">
        <div
          class="h-full flex flex-col justify-center gap-2 p-4 smaller-padding"
        >
          <p class="text-white text-6xl mt-4 w-full font-light to-text-white">
            Our products & services provide high quality results with a focus on
            safety.
          </p>
          <h4 class="mt-8 text-white font-bold">Quick Links</h4>
          <p
            class="text-white mt-2 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/company">About us</router-link>
          </p>
          <p
            class="text-white mt-1 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/products">Products</router-link>
          </p>
          <p
            class="text-white mt-1 transition-all duration-300 ease-in-out hover:text-gray-200"
          >
            <router-link to="/contact-us">Contact us</router-link>
          </p>

          <!-- download button -->
          <div class="w-full mt-4 footer-button section-to-hide btn-to-center">
            <button
              class="bg-white p-4 w-fit min-w-[350px] max-w-full font-semibold custom-text-green rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200"
            >
              <i class="fa-solid fa-download mr-2" />DOWNLOAD PRODUCT CATALOG
            </button>
          </div>

          <!-- section to show -->
          <div class="w-full flex flex-col mt-6 gap-2 section-to-show">
            <p
              v-for="(contact, index) in contacts"
              :key="index"
              class="w-full flex flex-nowrap text-white"
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
        </div>
      </div>
      <div class="w-1/2 to-w-full to-first">
        <div class="w-[90%] to-w-full relative">
          <div
            class="h-[12vh] custom-bg-blue flex flex-col justify-center text-center text-4xl mt-[-12vh] rounded-t-xl text-white form-group"
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
