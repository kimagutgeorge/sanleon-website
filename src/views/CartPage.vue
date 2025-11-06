<script>
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "ProductCart",
  components: { HeroSection, NavBar, Footer },
  data() {
    return {
      favorites: [],
      favorites_count: 0,
      make_order: false,
    };
  },
  mounted() {
    this.load_favorites();
  },
  methods: {
    load_favorites() {
      const stored = localStorage.getItem("sanleon_favorites");
      if (stored) {
        this.favorites = JSON.parse(stored);

        // Initialize quantities and selected state for each product if not set
        this.favorites = this.favorites.map((product) => {
          if (!product.quantities) {
            product.quantities = product.available_quantities.map(() => 1);
          }
          if (!product.selected_quantities) {
            product.selected_quantities = product.available_quantities.map(
              () => false
            );
          }
          return product;
        });

        this.favorites_count = this.favorites.length;
      }
    },

    remove_from_favorites(index) {
      this.favorites.splice(index, 1);
      this.save_favorites();
    },

    toggle_quantity_selection(productIndex, availabilityIndex) {
      if (!this.favorites[productIndex].selected_quantities) {
        this.favorites[productIndex].selected_quantities = this.favorites[
          productIndex
        ].available_quantities.map(() => false);
      }

      // Toggle the selection
      this.favorites[productIndex].selected_quantities[availabilityIndex] =
        !this.favorites[productIndex].selected_quantities[availabilityIndex];

      this.save_favorites();
    },

    is_selected(productIndex, availabilityIndex) {
      if (!this.favorites[productIndex].selected_quantities) {
        return false;
      }
      return this.favorites[productIndex].selected_quantities[
        availabilityIndex
      ];
    },

    increase_quantity(productIndex, availabilityIndex) {
      if (!this.favorites[productIndex].quantities) {
        this.favorites[productIndex].quantities = this.favorites[
          productIndex
        ].available_quantities.map(() => 1);
      }
      this.favorites[productIndex].quantities[availabilityIndex]++;
      this.save_favorites();
    },

    decrease_quantity(productIndex, availabilityIndex) {
      if (!this.favorites[productIndex].quantities) {
        this.favorites[productIndex].quantities = this.favorites[
          productIndex
        ].available_quantities.map(() => 1);
      }

      if (this.favorites[productIndex].quantities[availabilityIndex] > 1) {
        this.favorites[productIndex].quantities[availabilityIndex]--;
        this.save_favorites();
      }
    },

    get_quantity(productIndex, availabilityIndex) {
      if (!this.favorites[productIndex].quantities) {
        return 1;
      }
      return this.favorites[productIndex].quantities[availabilityIndex] || 1;
    },

    save_favorites() {
      localStorage.setItem("sanleon_favorites", JSON.stringify(this.favorites));
      this.favorites_count = this.favorites.length;
    },
  },
};
</script>

<template>
  <!-- item description -->
  <div
    v-if="make_order"
    class="fixed inset-0 z-[2000] flex items-start justify-center overflow-y-auto"
  >
    <!-- Background overlay -->
    <div
      @click="make_order = false"
      class="fixed inset-0 bg-black opacity-60"
    ></div>

    <!-- Quote request modal - centered with scroll capability -->
    <div class="relative z-30 w-full max-w-[500px] my-20 mx-4">
      <div class="w-full p-4 custom-bg-blue flex rounded-t-md">
        <div class="w-full px-4">
          <h4 class="font-semibold text-xl text-white">
            Please enter your email
          </h4>
        </div>
        <div class="w-fit">
          <i
            @click="make_order = false"
            class="fa-solid fa-close text-white cursor-pointer"
          />
        </div>
      </div>

      <!-- body -->
      <div
        class="w-full flex flex-wrap flex-to-wrap p-4 bg-white rounded-b-md pb-10"
      >
        <h4 class="mt-2 text-2xl font-bold custom-text-red text-to-center">
          {{ product_name }}
        </h4>

        <label></label>
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

  <NavBar :favorites_count="favorites_count" />
  <HeroSection favourite_hero :favorites_count="favorites_count" />
  <div class="w-full mt-8 mb-[30vh] flex justify-center">
    <!-- cart -->
    <div class="w-[90%]">
      <div class="w-full flex justify-end">
        <button
          v-if="favorites.length > 0"
          @click="make_order = true"
          class="custom-bg-green p-4 w-full max-w-[300px] font-semibold text-white rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
        >
          Request Combined Quote
        </button>
      </div>

      <!-- Show message if no favorites -->
      <div v-if="favorites.length === 0" class="w-full text-center py-20">
        <i class="fa-regular fa-heart text-gray-300 text-6xl mb-4"></i>
        <h3 class="text-2xl text-gray-500">No items in favorites yet</h3>
        <p class="text-gray-400 mt-2">
          Add products to your favorites to see them here
        </p>
      </div>

      <div
        v-for="(product, productIndex) in favorites"
        :key="productIndex"
        class="w-full flex flex-wrap mt-6 border rounded-xl border-gray-300 shadow-md"
      >
        <div class="w-full flex justify-end p-4">
          <i
            @click="remove_from_favorites(productIndex)"
            class="fa-solid fa-heart custom-text-red text-xl cursor-pointer hover:scale-110 transition-all duration-300"
          ></i>
        </div>
        <div class="w-full flex flex-nowrap flex-to-wrap">
          <div class="w-[55%] flex flex-to-wrap to-w-full">
            <div class="w-[40%] flex justify-center to-w-full">
              <img :src="product.image" class="max-h-[40vh]" />
            </div>
            <div class="w-[60%] p-4 to-w-full">
              <h4
                class="mt-6 text-3xl font-semibold custom-text-red text-to-center"
              >
                {{ product.name }}
              </h4>
              <p class="mt-4 text-to-center">{{ product.description }}</p>
              <h5 class="mt-8 text-to-center">
                <span class="font-bold custom-text-red">Available in: </span>
                <span
                  v-for="(availability, index) in product.available_quantities"
                  :key="index"
                >
                  {{ availability.quantity
                  }}{{
                    index < product.available_quantities.length - 1 ? " | " : ""
                  }}
                </span>
              </h5>
            </div>
          </div>
          <div class="w-[45%] p-4 to-w-full">
            <div class="border-b py-2">
              <h5 class="custom-text-blue text-2xl font-normal">Quantity</h5>
            </div>
            <div class="w-full flex">
              <div class="w-full">
                <div
                  v-for="(
                    availability, availabilityIndex
                  ) in product.available_quantities"
                  :key="availabilityIndex"
                  class="flex flex-nowrap gap-1 mt-4 items-center"
                >
                  <div class="w-[70%] flex items-center">
                    <input
                      type="checkbox"
                      :checked="is_selected(productIndex, availabilityIndex)"
                      @change="
                        toggle_quantity_selection(
                          productIndex,
                          availabilityIndex
                        )
                      "
                      class="w-[20px] h-[20px] cursor-pointer"
                      style="accent-color: #7bc144"
                    />
                    <span class="ml-2 font-medium">{{
                      availability.quantity
                    }}</span>
                  </div>
                  <div class="w-[30%]">
                    <!-- Show quantity controls only when checkbox is checked -->
                    <div
                      v-if="is_selected(productIndex, availabilityIndex)"
                      class="flex flex-nowrap gap-4 items-center"
                    >
                      <i
                        @click="
                          decrease_quantity(productIndex, availabilityIndex)
                        "
                        class="fa-solid fa-minus text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                      />
                      <input
                        type="number"
                        :value="get_quantity(productIndex, availabilityIndex)"
                        readonly
                        class="focus:outline-none appearance-none w-[30px] text-center font-semibold"
                      />
                      <i
                        @click="
                          increase_quantity(productIndex, availabilityIndex)
                        "
                        class="fa-solid fa-plus text-gray-500 cursor-pointer hover:text-gray-700 transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
