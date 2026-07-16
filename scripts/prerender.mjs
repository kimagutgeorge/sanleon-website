import fs from "node:fs";
import path from "node:path";
import { transformHtmlTemplate } from "@unhead/vue/server";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

const ROUTES_TO_PRERENDER = [
  "/",
  "/company",
  "/products",
  "/products/category/laundry-products",
  "/products/category/housekeeping-products",
  "/products/category/kitchen-hygiene-products",
  "/products/category/floor-care-products",
  "/industries/hospitality",
  "/industries/commercial-laundry",
  "/industries/industrial-factories",
  "/contact-us",
];

async function main() {
  const { render } = await import(
    path.join(ROOT, "dist-server/entry-server.js")
  );
  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  for (const url of ROUTES_TO_PRERENDER) {
    const { appHtml, head } = await render(url);
    const htmlWithApp = template.replace(
      '<div id="app"></div>',
      `<div id="app">${appHtml}</div>`
    );
    const finalHtml = await transformHtmlTemplate(head, htmlWithApp);

    const outDir =
      url === "/" ? DIST : path.join(DIST, url.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), finalHtml);
    console.log(`prerendered ${url} -> ${path.relative(ROOT, outDir)}/index.html`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
