export const products = [
  {
    name: "Cool Plus LD 100 Clean",
    description:
      "Liquid laundry detergent Slightly scented. Can be used for hand washing and machine wash",
    application:
      "Dilute 10-5ml of product per KG x machine weight. If it is hard water, increase dilution",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-100-Clean.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD 200 Wash",
    description:
      "Basic (powder) detergent for soft water. Can be used for hand wash and machine wash",
    application: "Dilute 10-5gms per KG x machine weight",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "2kgs" }],
    image: "/products/PD-200-wash-5kg-Bucket.png",
    category: "Laundry Products",
  },
  {
    name: "Cool Plus PD 201 Ultra",
    description:
      "Premium powder product. Can be used on soft and hard water. It brightens and whitens the garments.",
    application: "Dilute 10-5gms per KG x machine weight",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "2kgs" }],
    image: "/products/Cool-Plus-PD-201-Ultra-Wash.png",
    category: "Laundry Products",
  },
  {
    name: "Cool Plus PD 202 Hard-Fix",
    description:
      "Premium detergent for hard water. Used with extremely concentrated salty/hard water. Only used in washing machine not for hands Can be used on colored and whites.",
    application: "Dilute 8-4gms per kg. Machine wash only",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/PD-202-Hard-fix.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Oxy Bright 300",
    description:
      "Oxygen Bleach (Liquid). Bleaches and disinfects linen simultaneously. Bleach for colored & whites. Gloves required.",
    application: "Dilute 10-5gms per KG x machine weight",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Oxy-bright-300.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD White X 301",
    description:
      "Chlorine bleach (powder). Only to be used for soaking. For whites only Gloves and masks required.",
    application:
      "Dilute 3-2gms per kg. Soak for maximum 15-10mins. Temperature of 65 degrees Celsius and below",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/PD-White-X-301.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD ION 302 Restore",
    description:
      "Ionizer (rust remover) to remove yellowing caused by hard water. For whites only. Only meant for soaking. Do not use in machine.",
    application:
      "Soaking time - overnight Temperature: 90-70 degrees Celsius Dilute 20-5gms per ltr",
    available_quantities: [{ quantity: "5kgs" }],
    image: "/products/PD-ION-302-Ion-restore.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Booster 400",
    description:
      "Liquid additive for oil, grease and fat removal on laundry. Boosts normal detergent.",
    application:
      "Machine wash/soaking. All linen types (whites and coloured). Add 2-1ml/ltr of water at 70°C during cleaning.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Booster-400-20-Ltr_Jerrican.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Soft 500",
    description:
      "Fabric Softener with anti-static properties. Gives a pleasant smell, soft touch and fiber resilience.",
    application: "All linen types. 2-1ml/ltr of water. Machine & handwash.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Soft-500.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Oil-Cut 600",
    description:
      "Dry cleaning & laundry premium pre spotter. Solvent based. Removes yellow stains/oil/sweat/ink.",
    application:
      "Wet the garment before spotting the stain & scrub gently. Normal wash after. Can be used on colored & whites",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Oil-cut-600.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus Spot-Out",
    description: "Weakens Ink/food/cosmetic/blood stains.",
    application:
      "Wet the garment before spotting the stain & scrub gently. Normal wash after. Can be used on colored & whites",
    available_quantities: [{ quantity: "1ltr" }, { quantity: "5lrs" }],
    image: "/products/Spot-Out.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus Laundry Rust Away",
    description: "Strong Rust Remover. Used for removing rust from garments.",
    application:
      "Wet the garment before spotting the stain & scrub gently. Normal wash after. Can be used on colored & whites. Gloves required.",
    available_quantities: [
      { quantity: "250ml" },
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
    ],
    image: "/products/Laundry-rust-away.png",
    category: "Laundry Products",
  },

  // ---------- HOUSEKEEPING (no numeric codes, keep original order) ----------

  {
    name: "Cool Plus Multipurpose",
    description:
      "Liquid general purpose neutral detergent. Soft on hands. Non-perfumed.",
    application: "Floor, dish washing (hand). All surfaces.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/5ltrs-Jeerrican-multipurpose-soap.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Toilet Cleaner",
    description:
      "Toilet Cleaner with tripple action. It's strong and effective.",
    application:
      "Ready to use. Dispence into toilet bowl then wash with toilet brush.",
    available_quantities: [
      { quantity: "500ml" },
      { quantity: "750ml" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Toilet-cleaner-5ltrs-Jeerrican.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Hand Wash",
    description:
      "Well scented. Moisturising. Removes dirt & germs effectively.",
    application:
      "Ready to use. Pump into palms. Add water. Wash 15 sec then rinse.",
    available_quantities: [
      { quantity: "250ml" },
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
    ],
    image: "/products/5ltrs-Jeerrican-Handwash.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Surface Rust Away",
    description:
      "Removes stubborn rust stains, lime scales esp. on toilet bowls.",
    application:
      "Dilute 1ltr of product to 1ltr of water. Rinse immediately after.",
    available_quantities: [
      { quantity: "500ml" },
      { quantity: "750ml" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Surface-rust-away.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Disinfectant",
    description:
      "Heavy duty disinfectant and antibacterial cleaner. Variants: Pine & Lavender.",
    application: "Dilute 1ltr into 80ltrs of water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Pine-disinfectant.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Tile Renew",
    description:
      "Concentrated acidic cleaner with detergency and de-scaling properties.",
    application: "Dilute 1ltr into 10ltrs of water. Scrub surface, then rinse.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-renew.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Tile Bright",
    description: "Used to remove stains on floor surfaces.",
    application:
      "Dilute 1ltr into 10ltrs of water. Scrub then rinse. Gloves required.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-bright.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Multi Clean powder",
    description:
      "Mildly alkaline germicidal powder. Removes stains and disinfects.",
    application:
      "Dilute 250gms into 20ltrs of water. Scrub, then rinse with water.",
    available_quantities: [{ quantity: "500 x 12gms" }],
    image: "/products/Multiclean-powder.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Carpet Shampoo",
    description: "Neutral product. Removes stains. Scented. Lathers well.",
    application:
      "Dilute 1ltr into 40ltrs of water. Works with machines or brush.",
    available_quantities: [
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/carpet-shampoo.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Hypochlorite disinfectant (3.5%)",
    description: "Chlorine based disinfectant with strong bacterial kill.",
    application: "Dilute 1ltr into 25ltrs of water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Hypochlorite-disinfectant-3.5.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Shower Gel",
    description: "Body washing cream, pleasantly perfumed. Ready to use.",
    application: "Ready to use.",
    available_quantities: [{ quantity: "500ml" }],
    image: "/products/Shower-gel.png",
    image_2: "/products/Shower-gel-Back.png",
    category: "Housekeeping Products",
  },
  {
    name: "Cool Plus Window Cleaner",
    description: "Glass & window cleaner. Neutral product.",
    application: "Spray then wipe.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Window cleaner.png",
    category: "Housekeeping Products",
  },

  // ---------- KITCHEN HYGIENE PRODUCTS ----------

  {
    name: "Cool Plus Degreaser",
    description:
      "Removes grease, fats & oils from surfaces & floor. Alkaline product.",
    application: "Dilute 250gms to 20ltrs of water. Scrub, then rinse.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Degreaser-powder.png",
    category: "Kitchen Hygiene Products",
  },
  {
    name: "Cool Plus Soak Out",
    description: "Chlorine based product for destaining crockery & flasks.",
    application: "Dilute 250gms to 20ltrs of warm water. Soak overnight.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Soak-Out.png",
    category: "Kitchen Hygiene Products",
  },
  {
    name: "Cool Plus Oven Cleaner",
    description: "Concentrated alkaline product for cleaning ovens.",
    application: "Apply, heat slightly, cool, scrub then rinse.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Oven-cleaner.png",
    category: "Kitchen Hygiene Products",
  },
  {
    name: "Cool Plus Drain Flush",
    description: "Used for removing oil, grease & fat in drainage systems.",
    application: "Dilute 200gms into 5ltrs of water or pour powder then water.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Drain-Flush.png",
    category: "Kitchen Hygiene Products",
  },
  {
    name: "Cool Plus Dishwashing Paste",
    description: "Cuts tough grease & removes stains from dishes.",
    application: "Rub brush on paste then wash dishes normally.",
    available_quantities: [{ quantity: "400gms" }, { quantity: "800gms" }],
    image: "/products/Dishwashing paste.png",
    category: "Kitchen Hygiene Products",
  },

  // ---------- FLOOR CARE PRODUCTS ----------

  {
    name: "Cool Plus Tile Shine remover",
    description: "For removal of emulsion floor polish. Not for use on wood.",
    application: "Dilute 1ltr into 10ltrs of water. Scrub to remove polish.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-shine-remover.png",
    category: "Floor Care Products",
  },
  {
    name: "Cool Plus Wood Shine",
    description: "Heavy duty cleaning & polishing for wooden floors.",
    application: "Ready to use. Buff for best results.",
    available_quantities: [{ quantity: "5ltrs" }],
    image: "/products/Wood-shine.png",
    category: "Floor Care Products",
  },
  {
    name: "Cool Plus Tile Shine",
    description: "Used for polishing surfaces to give long lasting high gloss.",
    application: "Ready to use. Apply with soft pad or cloth.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-shine.png",
    category: "Floor Care Products",
  },
  {
    name: "Cool Plus Wood Shine Remover",
    description: "Heavy duty solvent wax stripper for wooden floors.",
    application: "Ready to use.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Wood-shine-remover.png",
    category: "Floor Care Products",
  },
  {
    name: "Cool Plus Degreaser Powder",
    description: "Washing powder for degreasing floors or slippery surfaces.",
    application: "Dilute 500gms into 20ltrs water. Scrub then rinse.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Degreaser-powder.png",
    category: "Floor Care Products",
  },
];

export const socials = [
  {
    icon: "fa-brands fa-facebook-f custom-text-red",
    link: "https://www.facebook.com/share/1Dug6FnRcX/",
  },
  {
    icon: "fa-brands fa-instagram custom-text-red",
    link: "https://www.instagram.com/coolplus_detergent?igsh=MTI4aTF0eWR2NnhrZA==",
  },
  // { icon: "fa-brands fa-x-twitter custom-text-red" },
  {
    icon: "fa-brands fa-tiktok custom-text-red",
    link: "https://www.tiktok.com/@coolplus_detergent",
  },
];

export const contacts = [
  { name: "P.O BOX 213-00517, NAIROBI." },
  {
    name: "+254 798 534 123",
    icon: "/icons/call.png",
    alt_text: "white phone icon",
  },
  {
    name: "info@coolplus.co.ke",
    icon: "/icons/mail.png",
    alt_text: "white email icon",
  },
  {
    name: "MON-FRI 9.00AM - 5:00PM | SAT: 8:AM-12:00PM",
    icon: "/icons/watch-later.png",
    alt_text: "white watch icon",
  },
];

export const company_asset_link = "https://coolplus.co.ke/company-assets/";
export const server_url = "https://coolplus.co.ke/mailer/send_mail.php";
