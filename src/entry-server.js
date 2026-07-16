import { createSSRApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { createHead } from "@unhead/vue/server";
import { renderToString } from "@vue/server-renderer";
import App from "./App.vue";
import { routes } from "./router/routes";

export async function render(url) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });
  const head = createHead();

  const app = createSSRApp(App).use(router).use(head);

  router.push(url);
  await router.isReady();

  const appHtml = await renderToString(app);

  return { appHtml, head };
}
