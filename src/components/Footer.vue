<script>
import { products, contacts, server_url } from "../js/universal";
export default {
  name: "Footer",
  props: {
    // contacts: Array,
    // products: Array,
  },
  data() {
    return {
      isOpen: false,
      activeIndex: 0,
      selectedProduct: null, // Changed from array to single object
      products: [],
      contacts: [],
      searchQuery: "",
      company_asset_link: "https://coolplus.co.ke/company-assets/",
      file_name: "New Cool Plus Products catalog copy Compressed.pdf",
      // Form data to send to server
      quantity: 1,
      email: "",
      isSubmitting: false,
      submitMessage: "",
      submitMessageType: "",
      server_url: "",
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery.trim()) {
        return this.products;
      }
      return this.searchByName(this.searchQuery);
    },
  },
  mounted() {
    this.products = products;
    this.contacts = contacts;
    this.server_url = server_url;
  },
  methods: {
    searchByName(query) {
      const searchTerm = query.toLowerCase().trim();
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
      this.searchQuery = "";
    },
    selectProduct(product) {
      this.selectedProduct = product;
      this.closeDropdown(); // Close dropdown after selection
    },
    clearProduct() {
      this.selectedProduct = null;
    },
    scroll_to_item(index) {
      const container = this.$refs.catalogContainer;
      const child = container.children[index];
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
        this.activeIndex = index;
      }
    },
    async submitRequest() {
      // Validate form data
      if (!this.selectedProduct) {
        this.submitMessage = "Please select a product";
        this.submitMessageType = "error";
        // alert("Please select a product");
        return;
      }
      if (!this.quantity || this.quantity < 1) {
        // alert("Please enter a valid quantity");
        this.submitMessage = "Please enter a valid quantity";
        this.submitMessageType = "error";
        return;
      }
      if (!this.email || !this.isValidEmail(this.email)) {
        // alert("Please enter a valid email address");
        this.submitMessage = "Please enter a valid email address";
        this.submitMessageType = "error";
        return;
      }

      // Prepare data to send to server
      const requestData = {
        productName: this.selectedProduct.name,
        productImage: this.selectedProduct.image,
        quantity: this.quantity,
        email: this.email,
      };

      this.isSubmitting = true;
      // form data
      try {
        const formData = new FormData();
        formData.append("action", "send_single_quote_request");
        formData.append("name", requestData.productName);
        formData.append("image", requestData.productImage);
        formData.append("quantity", requestData.quantity);
        formData.append("email", requestData.email);

        const response = await fetch(this.server_url, {
          method: "POST",
          body: formData,
        });
        const data = await response.json();

        // console.log("Fetched data: ", data);

        if (data.success) {
          this.submitMessage = data.message;
          this.submitMessageType = "success";

          setTimeout(() => {
            this.resetForm();
          }, 3000);
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error sending email: ", error);
        this.submitMessage =
          "Sorry, there was an error sending your message. Please try again or contact us directly.";
        this.submitMessageType = "error";
      } finally {
        this.isSubmitting = false;
      }
      // alert(
      //   `Quote request submitted!\nProduct: ${requestData.productName}\nImage:${requestData.productImage}\nQuantity: ${requestData.quantity}\nEmail: ${requestData.email}`
      // );
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    resetForm() {
      this.selectedProduct = null;
      this.quantity = 1;
      this.email = "";
      this.searchQuery = "";
      this.submitMessage = "";
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
          <div class="w-full mt-4 footer-button btn-to-center">
            <a
              class="w-fit h-fit"
              href="https://coolplus.co.ke/company-assets/New Cool Plus Products catalog copy Compressed .pdf"
              target="_blank"
              download
            >
              <button
                class="bg-white p-4 w-fit min-w-[350px] max-w-full font-semibold custom-text-green rounded-md transition-all duration-300 ease-in-out hover:bg-gray-200"
              >
                <i class="fa-solid fa-download mr-2" />DOWNLOAD PRODUCT CATALOG
              </button>
            </a>
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
            <h2 class="to-text-small font-semibold">Request a Quote</h2>
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
                class="min-h-[56px] p-3 border border-gray-200 rounded-md cursor-pointer bg-white flex items-center justify-between"
                :class="{ 'border-blue-500': isOpen }"
              >
                <!-- Selected Product -->
                <div
                  v-if="selectedProduct"
                  class="flex items-center gap-2 flex-1"
                  @click.stop
                >
                  <span class="text-gray-800">{{ selectedProduct.name }}</span>
                  <button
                    @click="clearProduct"
                    class="ml-auto hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors text-gray-600"
                  >
                    ×
                  </button>
                </div>

                <!-- Placeholder when no product selected -->
                <span v-else class="text-gray-400">
                  Search products by name
                </span>

                <!-- Dropdown Arrow -->
                <div class="ml-2">
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
                <!-- Search Input -->
                <div class="sticky top-0 bg-white border-b border-gray-200 p-2">
                  <input
                    v-model="searchQuery"
                    @click.stop
                    type="text"
                    placeholder="Type to search..."
                    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div
                  v-if="filteredProducts.length === 0"
                  class="p-4 text-gray-400 text-center"
                >
                  No products found
                </div>
                <div
                  v-for="(item, index) in filteredProducts"
                  :key="index"
                  @click="selectProduct(item)"
                  class="p-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                  :class="{
                    'bg-blue-50':
                      selectedProduct && selectedProduct.name === item.name,
                  }"
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
              v-model.number="quantity"
              type="number"
              min="1"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-6 rounded-md"
              placeholder="1"
            />
            <label>Email</label>
            <input
              v-model="email"
              type="email"
              class="p-4 border border-gray-200 focus:outline-none w-full mt-4 mb-6 rounded-md"
              placeholder="example@email.com"
            />
            <button
              @click="submitRequest"
              type="submit"
              :disabled="isSubmitting"
              class="custom-bg-green p-4 w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span v-if="!isSubmitting">Submit Request</span>
              <span v-else class="flex items-center gap-2">
                <svg
                  class="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            </button>
            <!-- Submit Message -->
            <div
              v-if="submitMessage"
              :class="[
                'mt-4 p-4 rounded-md text-sm',
                submitMessageType === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200',
              ]"
            >
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full text-center custom-bg-red px-20 p-4">
    <p class="text-white text-center">
      &copy; 2025 Cool Plus Detergents, All Rights Reserved.
    </p>
  </div>
</template>
