export const products = [
  // ---------- LAUNDRY PRODUCTS ----------

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
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/PD-200-wash-5kg-Bucket.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD 201 Ultra",
    description:
      "Premium powder product. Can be used on soft and hard water. It brightens and whitens the garments.",
    application: "Dilute 10-5gms per KG x machine weight",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Cool-Plus-PD-201-Ultra-Wash.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD 202 Hard-Fix",
    description:
      "Premium detergent for hard water. Used with salty/hard water. Machine wash only.",
    application: "Dilute 8-4gms per kg.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/PD-202-Hard-fix.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Oxy Bright 300",
    description:
      "Oxygen Bleach (Liquid). Bleaches and disinfects linen simultaneously.",
    application: "Dilute 10-5gms per KG.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Oxy-bright-300.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD White X 301",
    description: "Chlorine bleach (powder). For whites only.",
    application: "Dilute 3-2gms per kg. Soak for 10-15 mins.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/PD-White-X-301.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus PD ION 302 Restore",
    description: "Ionizer (rust remover). For whites only.",
    application: "Soak overnight.",
    available_quantities: [{ quantity: "5kgs" }],
    image: "/products/PD-ION-302-Ion-restore.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Booster 400",
    description: "Liquid additive for oil, grease and fat removal.",
    application: "Add 2-1ml/ltr of water at 70°C.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Booster-400-20-Ltr_Jerrican.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Soft 500",
    description: "Fabric Softener with anti-static properties.",
    application: "2-1ml/ltr of water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Soft-500.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus LD Oil-Cut 600",
    description: "Pre-spotter for removing yellow stains/oil/ink.",
    application: "Wet garment, apply and scrub gently.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Oil-cut-600.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus Spot-Out",
    description: "Weakens Ink/food/cosmetic/blood stains.",
    application: "Spot garment then scrub gently.",
    available_quantities: [
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Spot-Out.png",
    category: "Laundry Products",
  },

  {
    name: "Cool Plus Laundry Rust Away",
    description: "Strong Rust Remover.",
    application: "Spot treatment.",
    available_quantities: [
      { quantity: "250ml" },
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
    ],
    image: "/products/Laundry-rust-away.png",
    category: "Laundry Products",
  },

  // ---------- HOUSEKEEPING PRODUCTS ----------

  {
    name: "Cool Plus Multipurpose",
    description: "General purpose neutral detergent.",
    application: "All surfaces.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/5ltrs-Jeerrican-multipurpose-soap.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Toilet Cleaner",
    description: "Triple action toilet cleaner.",
    application: "Ready to use.",
    available_quantities: [
      { quantity: "500ml x 24pcs" },
      { quantity: "750ml x 12pcs" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Toilet-cleaner-5ltrs-Jeerrican.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Hand Wash",
    description: "Well scented. Moisturising hand wash.",
    application: "Pump into palms and wash.",
    available_quantities: [
      { quantity: "500ml x 24pcs" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/5ltrs-Jeerrican-Handwash.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Surface Rust Away",
    description: "Removes rust stains and limescale.",
    application: "Dilute then rinse immediately.",
    available_quantities: [
      { quantity: "250ml" },
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
    ],
    image: "/products/Surface-rust-away.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Disinfectant",
    description: "Heavy duty disinfectant. Pine & Lavender.",
    application: "Dilute 1ltr into 80ltrs water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Pine-disinfectant.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Tile Renew",
    description: "Acidic cleaner for tiles.",
    application: "Dilute 1ltr into 10ltrs water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-renew.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Tile Bright",
    description: "Stain remover for floor surfaces.",
    application: "Dilute then scrub.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-bright.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Multi Clean powder",
    description: "Mildly alkaline germicidal powder.",
    application: "Dilute 250gms into 20ltrs water.",
    available_quantities: [
      { quantity: "500gms x 24pcs" },
      { quantity: "5kgs" },
      { quantity: "25kgs" },
    ],
    image: "/products/Multiclean-powder.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Carpet Shampoo",
    description: "Neutral product. Removes stains. Lathers well.",
    application: "Dilute 1ltr into 40ltrs water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/carpet-shampoo.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Hypochlorite disinfectant (3.5%)",
    description: "Chlorine based disinfectant.",
    application: "Dilute 1ltr into 25ltrs water.",
    available_quantities: [
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Hypochlorite-disinfectant-3.5.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Shower Gel",
    description: "Body washing cream.",
    application: "Ready to use.",
    available_quantities: [
      { quantity: "400ml x 24pcs" },
      { quantity: "800ml x 12pcs" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Shower-gel.png",
    image_2: "/products/Shower-gel-Back.png",
    category: "Housekeeping Products",
  },

  {
    name: "Cool Plus Window Cleaner",
    description: "Glass & window cleaner.",
    application: "Spray then wipe.",
    available_quantities: [
      { quantity: "500ml x 24pcs" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Window cleaner.png",
    category: "Housekeeping Products",
  },

  // ---------- KITCHEN HYGIENE PRODUCTS ----------

  {
    name: "Cool Plus Degreaser",
    description: "Removes grease, fats & oils from surfaces.",
    application: "Dilute 250gms into 20ltrs water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Degreaser-powder.png",
    category: "Kitchen Hygiene Products",
  },

  {
    name: "Cool Plus Soak Out",
    description: "Chlorine based destainer.",
    application: "Soak overnight.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Soak-Out.png",
    category: "Kitchen Hygiene Products",
  },

  {
    name: "Cool Plus Oven Cleaner",
    description: "Concentrated alkaline product.",
    application: "Apply, heat, cool, scrub.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Oven-cleaner.png",
    category: "Kitchen Hygiene Products",
  },

  {
    name: "Cool Plus Drain Flush",
    description: "Removes oil, grease & fat in drainage.",
    application: "Dilute or pour directly.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Drain-Flush.png",
    category: "Kitchen Hygiene Products",
  },

  {
    name: "Cool Plus Dishwashing Paste",
    description: "Cuts tough grease. Removes stains.",
    application: "Rub brush on paste.",
    available_quantities: [{ quantity: "400gms" }, { quantity: "800gms" }],
    image: "/products/Dishwashing paste.png",
    category: "Kitchen Hygiene Products",
  },

  // ---------- FLOOR CARE PRODUCTS ----------

  {
    name: "Cool Plus Tile Shine remover",
    description: "Removes emulsion floor polish.",
    application: "Dilute 1ltr into 10ltrs water.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-shine-remover.png",
    category: "Floor Care Products",
  },

  {
    name: "Cool Plus Wood Shine",
    description: "Cleaning & polishing wooden floors.",
    application: "Ready to use.",
    available_quantities: [{ quantity: "5ltrs" }],
    image: "/products/Wood-shine.png",
    category: "Floor Care Products",
  },

  {
    name: "Cool Plus Tile Shine",
    description: "Surface polish for long lasting gloss.",
    application: "Apply with soft pad.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-shine.png",
    category: "Floor Care Products",
  },

  {
    name: "Cool Plus Wood Shine Remover",
    description: "Solvent wax stripper for wooden floors.",
    application: "Ready to use.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Wood-shine-remover.png",
    category: "Floor Care Products",
  },

  {
    name: "Cool Plus Degreaser Powder",
    description: "Powder for degreasing floors or slippery surfaces.",
    application: "Dilute 500gms into 20ltrs water.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Degreaser-powder.png",
    category: "Floor Care Products",
  },
];

export const featuredProducts = [
  // 201 ultra
  {
    name: "Cool Plus PD 201 Ultra",
    description: "Premium powder product. Brightens and whitens garments.",
    application: "Dilute 10-5gms per KG.",
    available_quantities: [{ quantity: "5kgs" }, { quantity: "25kgs" }],
    image: "/products/Cool-Plus-PD-201-Ultra-Wash.png",
    category: "Laundry Products",
  },

  // Oxy bleach
  {
    name: "Cool Plus LD Oxy Bright 300",
    description: "Oxygen Bleach. Bleaches and disinfects linen.",
    application: "Dilute as required.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-Oxy-bright-300.png",
    category: "Laundry Products",
  },

  // Multipurpose
  {
    name: "Cool Plus Multipurpose",
    description: "General purpose neutral detergent.",
    application: "All surfaces.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/5ltrs-Jeerrican-multipurpose-soap.png",
    category: "Housekeeping Products",
  },

  // Degreaser
  {
    name: "Cool Plus Degreaser",
    description: "Removes grease, fats & oils from surfaces.",
    application: "Dilute then scrub.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Degreaser-powder.png",
    category: "Kitchen Hygiene Products",
  },

  // Toilet cleaner
  {
    name: "Cool Plus Toilet Cleaner",
    description: "Triple action toilet cleaner.",
    application: "Ready to use.",
    available_quantities: [
      { quantity: "500ml x 24pcs" },
      { quantity: "750ml x 12pcs" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Toilet-cleaner-5ltrs-Jeerrican.png",
    category: "Housekeeping Products",
  },

  // 100 clean
  {
    name: "Cool Plus LD 100 Clean",
    description: "Liquid laundry detergent.",
    application: "Dilute as required.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/LD-100-Clean.png",
    category: "Laundry Products",
  },

  // Spot out
  {
    name: "Cool Plus Spot-Out",
    description: "Weakens stains (ink, food, cosmetic, blood).",
    application: "Spot & scrub.",
    available_quantities: [
      { quantity: "1ltr" },
      { quantity: "5ltrs" },
      { quantity: "20ltrs" },
    ],
    image: "/products/Spot-Out.png",
    category: "Laundry Products",
  },

  // Tile bright
  {
    name: "Cool Plus Tile Bright",
    description: "Removes stains on floor surfaces.",
    application: "Dilute and scrub.",
    available_quantities: [{ quantity: "5ltrs" }, { quantity: "20ltrs" }],
    image: "/products/Tile-bright.png",
    category: "Housekeeping Products",
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
