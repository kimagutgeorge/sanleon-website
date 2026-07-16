export const SITE_URL = "https://coolplus.co.ke";
export const SITE_NAME = "Cool Plus Detergents";

export function absoluteUrl(path) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function productListSchema(products, pageUrlPath) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: absoluteUrl(pageUrlPath),
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: absoluteUrl(product.image),
        brand: {
          "@type": "Brand",
          name: SITE_NAME,
        },
        category: product.category,
      },
    })),
  };
}

export function productAlt(product) {
  const sizes = (product.available_quantities || [])
    .map((q) => q.quantity)
    .join(", ");
  return `${product.name} – ${product.category}${
    sizes ? `, available in ${sizes}` : ""
  }`;
}

export function ldJsonScript(schema) {
  return {
    type: "application/ld+json",
    innerHTML: JSON.stringify(schema),
  };
}
