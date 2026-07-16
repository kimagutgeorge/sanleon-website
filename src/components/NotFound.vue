<template>
  <!-- title -->
  <div class="w-full flex justify-center mt-10">
    <h1 class="text-4xl font-bold custom-text-green">Page Not Found</h1>
  </div>
  <!-- icon -->
  <div class="w-full flex justify-center" style="height: 50vh">
    <div class="h-full flex flex-col justify-center">
      <div class="relative rounded-sm" style="width: 200px; height: 150px">
        <!-- dot -->
        <div class="w-full flex justify-center absolute z-30">
          <div class="small-dot custom-bg-primary w-6 h-6 rounded-full"></div>
        </div>
        <!-- handle -->
        <div class="w-full flex justify-center position-absolute z-10">
          <div
            class="w-1/2 absolute border-l-4 border-t-4 border-[#19164B] rotate-45 rounded-s-sm mt-8"
            style="height: 100px"
          ></div>
        </div>
        <!-- box itself -->
        <div
          class="w-full absolute z-30 top-14 rounded-sm bg-white bounce-twice"
        >
          <div class="w-full mt-4">
            <p class="w-full flex justify-center p-2 text-2xl">Error</p>
            <p
              class="w-full flex justify-center p-2 text-5xl font-bold text-secondary"
            >
              404
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- other body -->
  <div class="mt-20 w-full">
    <div class="w-full flex justify-center">
      <router-link to="/" class="w-fit h-fit">
        <Button
          class="relative overflow-hidden p-6 px-8 custom-bg-primary text-white cursor-pointer group"
        >
          <span class="relative z-10">Go Home</span>
          <span
            class="absolute inset-0 bg-secondary transform scale-x-0 origin-left transition-transform duration-400 ease-in-out group-hover:scale-x-100 z-0"
          ></span> </Button
      ></router-link>
    </div>
    <div class="mt-8 w-full flex justify-center">
      <p class="w-full p-4 text-center">
        The page you are looking for does not exist or might be redirected to
        another url. Please go back home.
      </p>
    </div>
  </div>
</template>
<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Page Not Found | Cool Plus Detergents",
  meta: [{ name: "robots", content: "noindex, follow" }],
});
</script>

<script>
export default {
  name: "NotFound",
};
</script>
