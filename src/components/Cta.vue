<script>
export default {
  name: "Cta",
  props: {
    home_cta: Boolean,
    about_cta: Boolean,
  },
};
</script>
<template>
  <div class="w-full h-[60vh] mt-32 relative cta-holder">
    <!-- background image -->
    <div class="w-full h-full absolute z-1">
      <img
        v-if="home_cta"
        src="/static/cleaning-cta-image.avif"
        alt="woman-39-s-hands-in-yellow-gloves-cleaning-counter"
        class="w-full h-full object-cover"
      />
      <img
        v-if="about_cta"
        src="/static/cleaning-cta-about.avif"
        alt="cleaning-service-concept-close-up-of-female-hands"
        class="w-full h-full object-cover"
      />
    </div>
    <!-- background later -->
    <div class="w-full h-full bg-black absolute opacity-40 z-2"></div>
    <!-- text layer -->
    <div class="w-full h-full px-20 absolute">
      <div class="h-full flex flex-col justify-center gap-2">
        <p
          v-if="home_cta"
          class="text-white text-3xl leading-relaxed mt-4 w-full max-w-[800px] text-to-center"
        >
          Our core function is to manufacture, market, and service a wide range
          of cleaning products.
        </p>
        <p
          v-if="about_cta"
          class="text-white text-3xl leading-relaxed mt-4 w-full max-w-[800px] text-to-center"
        >
          The company provides free in-house training that helps clients’ staff
          improve cleaning efficiency, reduce costs, and use products correctly.
        </p>
        <div class="w-full btn-to-center">
          <router-link to="/contact-us">
            <button
              class="custom-bg-green p-6 w-fit min-w-[350px] max-w-full mt-6 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out hover:bg-[#66a039]"
            >
              CONTACT US
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
