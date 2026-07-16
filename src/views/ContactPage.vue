<script setup>
import { useHead } from "@unhead/vue";
import { ldJsonScript, breadcrumbSchema } from "../js/seo";

useHead({
  title: "Contact Cool Plus Detergents | Cleaning Supplier Nairobi, Kenya",
  meta: [
    {
      name: "description",
      content:
        "Contact Cool Plus Limited for bulk cleaning detergent orders and quotes. Based in Industrial Area, Nairobi, serving clients across Kenya.",
    },
    {
      property: "og:title",
      content: "Contact Cool Plus Detergents | Cleaning Supplier Nairobi, Kenya",
    },
    {
      property: "og:description",
      content:
        "Get in touch with Cool Plus Limited for bulk cleaning detergent orders and quotes across Kenya.",
    },
    { property: "og:url", content: "https://coolplus.co.ke/contact-us" },
  ],
  link: [{ rel: "canonical", href: "https://coolplus.co.ke/contact-us" }],
  script: [
    ldJsonScript(
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact Us", path: "/contact-us" },
      ])
    ),
  ],
});
</script>

<script>
import Footer from "../components/Footer.vue";
// import HeroSection from "../components/HeroSection.vue";
import NavBar from "../components/NavBar.vue";
import Spinner from "../components/Spinner.vue";
import {
  socials as SOCIALS,
  contacts as CONTACTS,
  server_url as SERVER_URL,
} from "../js/universal";

export default {
  name: "ContactPage",
  components: { NavBar, /* HeroSection,*/ Footer, Spinner },
  data() {
    return {
      contacts: [],
      page_is_loading: typeof window === "undefined" ? false : true,
      socials: [],
      favorites: [],
      favorites_count: 0,
      mapLoaded: false,
      formData: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
      isSubmitting: false,
      submitMessage: "",
      submitMessageType: "", // 'success' or 'error'
      server_url: "",
    };
  },
  mounted() {
    this.load_favorites();
    try {
      this.socials = SOCIALS;
      this.contacts = CONTACTS;
      this.server_url = SERVER_URL;
      this.load_favorites();

      // Preload the map immediately
      this.preloadMap();
    } catch (error) {
      console.error("Error loading page");
    } finally {
      // Wait for minimum spinner time OR map to load
      Promise.all([
        new Promise((resolve) => setTimeout(resolve, 1000)),
        this.waitForMapLoad(),
      ]).then(() => {
        this.page_is_loading = false;
      });
    }
  },
  methods: {
    preloadMap() {
      // Create a hidden iframe to start loading the map
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7607180543773!2d36.8597354747632!3d-1.3192644356626115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f192028b77599%3A0x55929a6af4418b16!2sSanleon%20Limited!5e0!3m2!1sen!2ske!4v1762391124841!5m2!1sen!2ske";
      iframe.style.position = "absolute";
      iframe.style.left = "-9999px";
      iframe.style.width = "1px";
      iframe.style.height = "1px";

      iframe.onload = () => {
        this.mapLoaded = true;
        // Remove the hidden iframe after it loads
        setTimeout(() => {
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 100);
      };

      document.body.appendChild(iframe);
    },

    waitForMapLoad() {
      return new Promise((resolve) => {
        if (this.mapLoaded) {
          resolve();
        } else {
          const checkInterval = setInterval(() => {
            if (this.mapLoaded) {
              clearInterval(checkInterval);
              resolve();
            }
          }, 100);

          // Timeout after 3 seconds to prevent infinite waiting
          setTimeout(() => {
            clearInterval(checkInterval);
            resolve();
          }, 3000);
        }
      });
    },

    load_favorites() {
      const stored = localStorage.getItem("sanleon_favorites");
      if (stored) {
        this.favorites = JSON.parse(stored);
        this.favorites_count = this.favorites.length;
      }
    },
    validateForm() {
      if (!this.formData.fullName.trim()) {
        this.submitMessage = "Please enter your full name";
        this.submitMessageType = "error";
        return false;
      }
      if (
        !this.formData.email.trim() ||
        !this.isValidEmail(this.formData.email)
      ) {
        this.submitMessage = "Please enter a valid email address";
        this.submitMessageType = "error";
        return false;
      }
      if (!this.formData.message.trim()) {
        this.submitMessage = "Please enter a message";
        this.submitMessageType = "error";
        return false;
      }
      return true;
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async submitForm() {
      this.submitMessage = "";

      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;

      try {
        const formData = new FormData();
        formData.append("action", "submit_contact_form");
        formData.append("name", this.formData.fullName);
        formData.append("email", this.formData.email);
        formData.append("phone", this.formData.phone || "Not provided");
        formData.append("message", this.formData.message);
        formData.append("subject", "New Contact Enquiry From Website");
        formData.append("from_name", "Coolplus Website Contact Form");

        const response = await fetch(this.server_url, {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("Fetched data is: ", data);

        if (data.success) {
          this.submitMessage = data.message;
          this.submitMessageType = "success";

          // Clear form
          this.formData = {
            fullName: "",
            email: "",
            phone: "",
            message: "",
          };
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        this.submitMessage =
          "Sorry, there was an error sending your message. Please try again or contact us directly.";
        this.submitMessageType = "error";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
<template>
  <Spinner v-if="page_is_loading" />
  <div v-else class="w-full h-fit">
    <NavBar :favorites_count="favorites_count" />
    <!-- <HeroSection contact_us_hero /> -->
    <div class="w-full h-[60vh] map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.7632149011392!2d36.85967819!3d-1.31770615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a2a70f49af%3A0x57a9a30890c7a19c!2sUnifoods%20E.A%20LIMITED!5e0!3m2!1sen!2ske!4v1767951311304!5m2!1sen!2ske"
        class="w-full h-full"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="w-full mt-20 flex justify-center mb-[30vh]">
      <div class="w-[80%] to-w-full flex contact-page">
        <div class="w-1/2 p-6 px-8 contact-to-full">
          <h1 class="custom-text-red text-5xl font-normal max-w-[500px]">
            Contact Cool Plus Detergents
          </h1>
          <p class="mt-6">
            We take great pride in everything that we do, control over products
            allows us to ensure customers receive the best quality service and
            highest standards.
          </p>
          <!-- form -->
          <form @submit.prevent="submitForm" class="w-full mt-6">
            <div class="form-group mt-4 p-1">
              <label>Full Name</label>
              <input
                v-model="formData.fullName"
                type="text"
                class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal"
                placeholder="John Doe"
                :disabled="isSubmitting"
              />
            </div>

            <div class="form-group mt-2 flex group-to-wrap">
              <div class="w-1/2 p-1 group-to-full">
                <label>Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal"
                  placeholder="someone@example.com"
                  :disabled="isSubmitting"
                />
              </div>

              <div class="w-1/2 p-1 group-to-full">
                <label>Phone</label>
                <div
                  class="w-full flex flex-nowrap items-center p-3 px-4 border rounded-md mt-2 border-gray-300 gap-1"
                >
                  <div class="px-2 border-r border-gray-300">254</div>
                  <input
                    v-model="formData.phone"
                    type="number"
                    class="w-full focus:outline-none font-normal"
                    placeholder="712345678"
                    :disabled="isSubmitting"
                  />
                </div>
              </div>
            </div>

            <div class="form-group mt-4 p-1">
              <label>Message</label>
              <textarea
                v-model="formData.message"
                class="p-3 px-4 w-full border rounded-md border-gray-300 mt-2 focus:outline-none font-normal h-[150px]"
                placeholder="Type something"
                :disabled="isSubmitting"
              ></textarea>
            </div>

            <div class="w-full mt-4">
              <button
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
          </form>
        </div>
        <div class="w-1/2 p-6 px-10 rounded-xl custom-bg-red contact-to-full">
          <h2 class="text-white text-5xl font-normal max-w-[500px] to-small">
            We pride to innovate effective methods and focus on customer
            satisfaction.
          </h2>
          <div class="mt-10">
            <p class="text-white flex flex-nowrap font-semibold mt-4">
              <img
                src="/icons/location-on.png"
                class="mr-2 h-[24px] w-[24px]"
              />
              Cool Plus HQ, Industrial Area Road A, Nairobi, Kenya
            </p>
            <p
              v-for="(contact, index) in contacts.slice(1)"
              :key="index"
              class="text-white flex flex-nowrap font-semibold mt-4"
            >
              <img
                :src="contact.icon"
                class="mr-2 h-[24px] w-[24px]"
                :alt="contact.alt_text"
              />
              {{ contact.name }}
            </p>
          </div>
          <div class="mt-10 w-full flex gap-2">
            <div
              v-for="(social, index) in socials"
              :key="index"
              class="social w-[30px] min-w-[30px] h-[30px] flex items-center justify-center bg-white rounded-full cursor-pointer overflow-hidden"
            >
              <a :href="social.link" target="_blank">
                <i :class="`${social.icon} icon`" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
