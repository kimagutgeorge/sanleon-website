<script>
export default {
  name: "HeroSection",
};
</script>
<template>
  <div class="w-full relative h-[90vh] transition-all duration-400 ease-in-out">
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img src="/static/home-hero-pic.avif"
      alt="woman-39-s-hands-in-yellow-gloves-cleaning-counter" class="w-full
      h-full object-cover"
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-40 z-2"></div>
    <!-- text layer -->
    <div class="w-full h-full px-20 absolute">
      <div class="h-full flex flex-col justify-center gap-2">
        <h1 class="text-8xl font-bold text-white">MANUFACTURES</h1>
        <h2 class="text-8xl font-bold text-white">OF CLEANING</h2>
        <h3 class="text-8xl font-bold text-white">DETERGENTS</h3>

        <p class="text-white text-lg font-semibold mt-4 w-full max-w-[500px]">
          Sanleon Company Ltd is a locally owned manufacturing company
          incorporated in 2016.
        </p>
        <button
          class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
        >
          ABOUT US
        </button>
      </div>
    </div>
  </div>
</template>
