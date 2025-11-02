<script>
export default {
  name: "HeroSection",
  props: {
    home_hero: Boolean,
    about_hero: Boolean,
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
          Sanleon Company Ltd is a locally owned manufacturing company
          incorporated in 2016.
        </p>
        <div class="w-full hero-btn-holder">
          <button
            class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
          >
            ABOUT US
          </button>
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
      <img src="/static/about_us_pic.avif"
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
          Sanleon Company Ltd is a locally owned manufacturing company
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
          <button
            class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
          >
            <i class="fa-solid fa-download mr-2" /> DOWNLOAD COMPANY PROFILE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
