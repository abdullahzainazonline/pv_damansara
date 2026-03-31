import re

with open('src/components/sections/UnitLayouts.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

new_units = '''    // IMPERIAL RESIDENCES
    {
      type: "Type H1",
      category: "IMPERIAL RESIDENCES",
      label: "4 Ensuites + Lanai",
      sqft: "3,380",
      floors: "Imperial Residences",
      image: "/pdh/imperial_resi_e-broc_p8_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["4 Ensuites", "Lanai", "314 sq.m."],
      highlight: true,
    },
    {
      type: "Type H1A",
      category: "IMPERIAL RESIDENCES",
      label: "3 Ensuites + Studio + Lanai",
      sqft: "3,380",
      floors: "Imperial Residences",
      image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["3 Ensuites + Studio", "Lanai", "314 sq.m."],
      highlight: false,
    },
    {
      type: "Type H2",
      category: "IMPERIAL RESIDENCES",
      label: "4 Ensuites + Lanai",
      sqft: "4,090",
      floors: "Imperial Residences",
      image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["4 Ensuites", "Lanai", "380 sq.m."],
      highlight: false,
    },
    {
      type: "Type H2A",
      category: "IMPERIAL RESIDENCES",
      label: "4 Ensuites + Lanai",
      sqft: "4,090",
      floors: "Imperial Residences",
      image: "/pdh/pdh_r1_&_r2_1br_e-br_p4_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["4 Ensuites", "Lanai", "380 sq.m."],
      highlight: true,
    },

    // ROYAL SUITES
    {
      type: "Type S1",
      category: "ROYAL SUITES",
      label: "Suite",
      sqft: "452",
      floors: "Royal Suites",
      image: "/pdh/imperial_resi_e-broc_p8_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["Suite", "42 sq.m."],
      highlight: true,
    },
    {
      type: "Type S2",
      category: "ROYAL SUITES",
      label: "Suite",
      sqft: "538",
      floors: "Royal Suites",
      image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["Suite", "50 sq.m."],
      highlight: false,
    },
    {
      type: "Type M1",
      category: "ROYAL SUITES",
      label: "2 Bedrooms + Study",
      sqft: "1,119",
      floors: "Royal Suites",
      image: "/pdh/pdh_overview_(luxury_p6_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["2 Bedrooms + Study", "104 sq.m."],
      highlight: false,
    },
    {
      type: "Type M2",
      category: "ROYAL SUITES",
      label: "3 Bedrooms + Study",
      sqft: "1,550",
      floors: "Royal Suites",
      image: "/pdh/pdh_r1_&_r2_1br_e-br_p4_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["3 Bedrooms + Study", "144 sq.m."],
      highlight: true,
    },
    {
      type: "Type DK1",
      category: "ROYAL SUITES",
      label: "2 Bedrooms + Studio (Dual Key)",
      sqft: "1,302",
      floors: "Royal Suites",
      image: "/pdh/imperial_resi_e-broc_p8_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["Dual Key", "2 Bedrooms + Studio", "121 sq.m."],
      highlight: false,
    },
    {
      type: "Type DK2",
      category: "ROYAL SUITES",
      label: "2 Bedrooms + Studio (Dual Key)",
      sqft: "1,679",
      floors: "Royal Suites",
      image: "/pdh/pdh_overview_(luxury_p10_img1.jpeg",
      bgImage: "/pdh/imperial_resi_e-broc_fullpage_p5.jpeg",
      features: ["Dual Key", "2 Bedrooms + Studio", "156 sq.m."],
      highlight: true,
    },
  ];'''

text = re.sub(r'// CORPORATE TOWER 1 \(FULLY SOLD\).*?\];', new_units, text, flags=re.DOTALL | re.MULTILINE)

with open('src/components/sections/UnitLayouts.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
