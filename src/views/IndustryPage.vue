<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { ldJsonScript, breadcrumbSchema, faqSchema } from "../js/seo";
import { industries, CATEGORY_LABELS } from "../js/industries";

const route = useRoute();
const industry = computed(() => industries[route.params.slug]);

useHead(() =>
  industry.value
    ? {
        title: industry.value.title,
        meta: [
          { name: "description", content: industry.value.metaDescription },
          { property: "og:title", content: industry.value.title },
          {
            property: "og:description",
            content: industry.value.metaDescription,
          },
          {
            property: "og:url",
            content: `https://coolplus.co.ke/industries/${industry.value.slug}`,
          },
        ],
        link: [
          {
            rel: "canonical",
            href: `https://coolplus.co.ke/industries/${industry.value.slug}`,
          },
        ],
        script: [
          ldJsonScript(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Company", path: "/company" },
              {
                name: industry.value.h1,
                path: `/industries/${industry.value.slug}`,
              },
            ])
          ),
          ldJsonScript(faqSchema(industry.value.faqs)),
        ],
      }
    : {}
);
</script>

<script>
import Cta from "../components/Cta.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import Spinner from "../components/Spinner.vue";
import { industries } from "../js/industries";

export default {
  name: "IndustryPage",
  components: { NavBar, Footer, Cta, Spinner },
  props: ["slug"],
  data() {
    return {
      favorites: [],
      favorites_count: 0,
      page_is_loading: typeof window === "undefined" ? false : true,
    };
  },
  computed: {
    industry() {
      return industries[this.slug];
    },
  },
  mounted() {
    try {
      this.load_favorites();
    } catch (error) {
      console.error("Error loading page");
    } finally {
      setTimeout(() => {
        this.page_is_loading = false;
      }, 1000);
    }
  },
  methods: {
    load_favorites() {
      const stored = localStorage.getItem("sanleon_favorites");
      if (stored) {
        this.favorites = JSON.parse(stored);
        this.favorites_count = this.favorites.length;
      }
    },
  },
};
</script>

<template>
  <Spinner v-if="page_is_loading" />
  <div v-else-if="industry" class="w-full h-fit">
    <NavBar :favorites_count="favorites_count" />

    <!-- hero -->
    <div class="w-full h-[50vh] custom-bg-blue flex items-center px-20">
      <div class="w-full max-w-[900px]">
        <nav class="text-white text-sm mb-4" aria-label="Breadcrumb">
          <router-link to="/" class="hover:underline">Home</router-link>
          <span class="mx-2">/</span>
          <router-link to="/company" class="hover:underline"
            >Company</router-link
          >
          <span class="mx-2">/</span>
          <span>{{ industry.h1 }}</span>
        </nav>
        <h1 class="text-white text-4xl md:text-5xl font-bold">
          {{ industry.h1 }}
        </h1>
      </div>
    </div>

    <!-- intro -->
    <div class="w-full mt-20 px-20">
      <div class="w-full max-w-[900px]">
        <h2 class="custom-text-red text-4xl font-bold mb-6">Overview</h2>
        <p class="text-xl leading-relaxed">{{ industry.intro }}</p>
      </div>
    </div>

    <!-- relevant categories -->
    <div class="w-full mt-16 px-20">
      <h2 class="custom-text-blue text-4xl font-bold mb-8">
        Relevant Product Categories
      </h2>
      <div class="w-full flex flex-wrap gap-4">
        <router-link
          v-for="catSlug in industry.relevantCategories"
          :key="catSlug"
          :to="`/products/category/${catSlug}`"
          class="px-6 py-4 border border-gray-300 rounded-lg font-semibold custom-text-green hover:shadow-md transition-all duration-300"
        >
          {{ CATEGORY_LABELS[catSlug] }} &rarr;
        </router-link>
      </div>
    </div>

    <!-- why choose -->
    <div class="w-full mt-16 px-20">
      <h2 class="custom-text-red text-4xl font-bold mb-8">
        Why Choose Cool Plus
      </h2>
      <ul class="w-full max-w-[900px] flex flex-col gap-4">
        <li
          v-for="(point, index) in industry.whyPoints"
          :key="index"
          class="flex flex-nowrap"
        >
          <img
            src="/icons/check-circle.png"
            class="mr-2 w-[25px] h-[25px] flex-shrink-0"
            alt=""
          />
          {{ point }}
        </li>
      </ul>
    </div>

    <!-- faq -->
    <div class="w-full mt-16 px-20">
      <h2 class="custom-text-blue text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <div class="w-full max-w-[900px] flex flex-col gap-6">
        <div
          v-for="(faq, index) in industry.faqs"
          :key="index"
          class="border border-gray-300 rounded-lg p-6"
        >
          <h3 class="font-bold custom-text-red text-xl">
            {{ faq.question }}
          </h3>
          <p class="mt-2">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <Cta about_cta />
    <Footer />
  </div>
  <div v-else class="w-full h-fit">
    <NavBar :favorites_count="favorites_count" />
    <div class="w-full flex flex-col items-center justify-center py-32 gap-6">
      <h1 class="text-4xl font-bold custom-text-green">Industry Not Found</h1>
      <router-link to="/company" class="w-fit h-fit">
        <button
          class="custom-bg-green p-4 px-8 text-white text-lg font-semibold rounded-md"
        >
          View Industries We Serve
        </button>
      </router-link>
    </div>
    <Footer />
  </div>
</template>
