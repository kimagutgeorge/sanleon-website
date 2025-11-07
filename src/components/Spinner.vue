<template>
  <div class="w-full h-[100vh] flex justify-center">
    <div class="h-full flex flex-col justify-center">
      <svg
        class="spinner"
        width="35px"
        height="35px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="path"
          fill="none"
          stroke-width="6"
          stroke-linecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "Spinner",
};
</script>
