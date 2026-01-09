<script>
export default {
  name: "HeroSection",
  props: {
    home_hero: Boolean,
    about_hero: Boolean,
    products_hero: Boolean,
    contact_us_hero: Boolean,
    selected_product: String,
    favourite_hero: Boolean,
    favorites_count: Number,
  },
  data() {
    return {
      filter_options: [
        { name: "Laundry", id: "Laundry Products" },
        { name: "Housekeeping", id: "Housekeeping Products" },
        { name: "Kitchen", id: "Kitchen Hygiene Products" },
        { name: "Floor", id: "Floor Care Products" },
      ],
      search_keyword: "",
    };
  },
};
</script>
<template>
  <div
    v-if="home_hero"
    class="w-full relative h-[90vh] hero-section transition-all duration-400 ease-in-out"
  >
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img src="/static/home-hero-pic.avif"
      alt="woman-39-s-hands-in-yellow-gloves-cleaning-counter" class="w-full
      h-full object-cover"
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-60 z-2"></div>
    <!-- text layer -->
    <div class="w-full h-full px-20 absolute hero-holder">
      <div class="h-full flex flex-col justify-center gap-2">
        <h1 class="text-8xl font-bold text-white">MANUFACTURES</h1>
        <h2 class="text-8xl font-bold text-white">OF CLEANING</h2>
        <h3 class="text-8xl font-bold text-white">DETERGENTS</h3>

        <p class="text-white text-lg font-semibold mt-4 w-full max-w-[500px]">
          Cool Plus Detergents is a locally owned manufacturing company under
          Sanleon Company Limited incorporated in 2016
        </p>
        <div class="w-full hero-btn-holder">
          <router-link to="/company" class="h-fit w-fit">
            <button
              class="custom-bg-green p-6 w-fit min-w-[350px] mt-6 max-w-full text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              ABOUT US
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- about us -->
  <div
    v-if="about_hero"
    class="w-full relative h-[70vh] hero-section hero-section-about transition-all duration-400 ease-in-out"
  >
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img src="/static/about-us.jpg"
      alt="woman-39-s-hands-in-yellow-gloves-cleaning-counter" class="w-full
      h-full object-cover"
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-60 z-2"></div>
    <!-- text layer -->
    <div
      class="w-[80%] ml-[10%] h-full flex justify-center px-20 absolute to-w-full hero-holder"
    >
      <div class="h-full flex flex-col justify-center gap-2">
        <h1 class="text-5xl font-normal text-white text-center">
          Cool Plus Detergents is a locally owned manufacturing company
          incorporated in 2016.
        </h1>
        <p class="text-white text-xl font-normal mt-6 w-full text-center">
          Specializing in quality cleaning solutions for industrial and
          institutional markets, our core function is to manufacture, market,
          and service a wide range of cleaning products. We maintain strict
          quality control and work with the Kenya Bureau of Standards to ensure
          our products meet local requirements and use eco-friendly materials.
        </p>
        <div class="w-full flex justify-center hero-btn-holder">
          <a
            class="w-fit h-fiit"
            href="https://coolplus.co.ke/company-assets/Company profile copy.pdf"
            target="_blank"
            download
          >
            <button
              class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              <i class="fa-solid fa-download mr-2" /> DOWNLOAD COMPANY PROFILE
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- products page -->
  <div
    v-if="products_hero"
    class="w-full relative h-[80vh] hero-section hero-section-products transition-all duration-400 ease-in-out"
  >
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img src="/static/products-hero-image.png"
      alt="manual-cleaning-of-concrete-and-stone-terraces" class="w-full h-full
      object-cover"
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-60 z-2"></div>
    <!-- text layer -->
    <div
      class="w-[80%] ml-[10%] h-full flex justify-center px-20 absolute to-w-full hero-holder"
    >
      <div class="h-full w-full gap-2">
        <div class="w-full flex justify-center hero-btn-holder mt-20">
          <a
            class="h-fit w-fit"
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
        <!-- search and filter -->
        <div class="w-full flex border-b border-white mt-10 search-panel">
          <div class="w-[70%] flex to-w-full-1">
            <div
              @click="$emit('toggle_category', filter.id)"
              v-for="(filter, index) in filter_options"
              :key="index"
              class="w-fit p-2 pb-5 font-bold text-xl border-b-4 cursor-pointer transition-all duration-300 hover:text-white hover:border-white"
              :class="
                selected_product == filter.id
                  ? ' border-white text-white'
                  : 'border-transparent custom-text-green'
              "
            >
              {{ filter.name }}
            </div>
          </div>
          <div class="w-[30%] pb-5 to-w-full-2">
            <div
              class="w-full border-2 border-white rounded-full p-4 px-4 flex gap-2 flex-nowrap items-center"
            >
              <i class="fa-solid fa-search text-white" />
              <input
                type="text"
                class="focus:outline-none w-full placeholder-white text-white bg-transparent"
                placeholder="Search keyword"
                v-model="search_keyword"
                @keyup="$emit('search_product', search_keyword)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- about us -->
  <div v-if="contact_us_hero" class="w-full h-[60vh] map">
    <!-- <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7607180543773!2d36.8597354747632!3d-1.3192644356626115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f192028b77599%3A0x55929a6af4418b16!2sSanleon%20Limited!5e0!3m2!1sen!2ske!4v1762391124841!5m2!1sen!2ske"
      class="w-full h-full"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe> -->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.7632149011392!2d36.85967819!3d-1.31770615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a2a70f49af%3A0x57a9a30890c7a19c!2sUnifoods%20E.A%20LIMITED!5e0!3m2!1sen!2ske!4v1767951311304!5m2!1sen!2ske"
      class="w-full h-full"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  <!-- favourites page -->
  <div v-if="favourite_hero" class="w-full h-fit mt-8">
    <div class="w-full gap-2 flex px-[5%]">
      <div class="w-[60%]">
        <h5 class="custom-text-blue text-4xl font-normal">Favourites</h5>
      </div>
      <div class="w-[40%] flex justify-end nav-item-to-hide">
        <h5>
          <span class="font-bold custom-text-red">Items on list: </span>
          {{ favorites_count }}
        </h5>
      </div>
    </div>
  </div>
</template>
