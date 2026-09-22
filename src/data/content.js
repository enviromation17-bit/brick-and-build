export const COMPANY = {
  name: "Brick & Built",
  fullName: "Brick & Built Developers",
  location: "Pakpattan, Punjab, Pakistan",
  whatsapp: "923011783333",
  whatsappDisplay: "03011783333",
  hours: "9:00 AM – 10:00 PM, daily",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Projects",
    to: "/projects",
    dropdown: [
      { label: "Pak City Housing Society", sub: "Pakpattan — completed / near-complete", to: "/projects/pak-city" },
      { label: "Toba Tek Singh", sub: "Coming soon · Current project", to: "/projects/toba-tek-singh" },
      { label: "All projects", sub: "Our growing portfolio", to: "/projects" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const MARQUEE_ITEMS = ["Pakpattan", "Toba Tek Singh", "Residential", "Commercial", "Land Development", "Punjab"];

export const SERVICES = [
  { n: "01", title: "Land development", body: "Housing colonies, plots and masterplans — as delivered at Pak City Housing Society.", to: "/projects/pak-city", img: "/assets/media/service-land.jpg" },
  { n: "02", title: "Commercial", body: "Retail and commercial plots and units for business owners and investors.", to: "/services", img: "/assets/media/service-commercial.jpg" },
  { n: "03", title: "Residential", body: "Homes and residential plots for families and individual buyers.", to: "/services", img: "/assets/media/service-residential.jpg" },
];

export const PROCESS = [
  { n: "01", title: "Acquire", body: "Land, title, and a clear brief before anything is announced." },
  { n: "02", title: "Masterplan", body: "Sectors, roads, parks and plot grain before a single facade." },
  { n: "03", title: "Develop", body: "Infrastructure and community elements, then homes and commercial stock." },
  { n: "04", title: "Steward", body: "Handover isn't an ending — we stay with the place as it's lived in." },
];

export const VALUES = [
  { title: "Two focus areas, one standard", body: "Residential and commercial real estate, under the same standard of transparency." },
  { title: "Land, then structure", body: "Masterplans, sectors and streets come before individual buildings." },
  { title: "Pakpattan as home base", body: "Our team, our land relationships, and our decisions all run through Pakpattan." },
  { title: "Honest by default", body: "Unverified details stay marked as pending — never presented as confirmed fact." },
];

export const CEO = {
  name: "Waseem Bari",
  title: "Chief Executive Officer, Brick & Build",
  note: "Waseem Bari have been working  in this field  more than ten years of hands-on experience in land development, residential and commercial projects across Punjab. His focus remains on transparent delivery .",
};

export const TOBA_FACTS = [
  { label: "Land area", value: "Pending", pending: true },
  { label: "Sectors", value: "Pending", pending: true },
  { label: "Residential plots", value: "Pending", pending: true },
  { label: "Commercial plots", value: "Pending", pending: true },
  { label: "Location", value: "Toba Tek Singh, Punjab" },
  { label: "Status", value: "Coming soon" },
  { label: "Represented by", value: "Brick & Build" },
  { label: "Legal approvals / NOC", value: "Pending", pending: true },
];

// All figures below are exactly as given in the Pak City Housing Society
// project detail sheet — nothing added, estimated, or rounded differently.
export const PAK_CITY = {
  name: "Pak City Housing Society",
  totalArea: "29 Acres",
  siteCount: "3 sites",
  region: "Pakpattan, Punjab",
  overview:
    "Pak City Housing Society is the umbrella name for a residential and commercial development spanning three sites in Pakpattan, Punjab. Together the sites total 29 acres and combine planned residential plots, a commercial hub, and supporting infrastructure such as carpeted roads, electricity, and landscaped community spaces.",
  sites: [
    {
      name: "Pak City Commercial",
      location: "Tibba Sher Kot, Pakpattan",
      area: "5 Acres",
      status: "Near completion — infrastructure fully developed; landscaping and plot finishing underway.",
      highlights: "Prime commercial location with strong accessibility and a range of plot sizes for different business needs.",
    },
    {
      name: "Pak City Colony",
      location: "Behram Pur, Pakpattan",
      area: "7 Acres",
      status: "80% of plots sold; infrastructure nearly complete.",
      highlights: "Well-planned residential area with high-quality infrastructure, near commercial centers, offering a peaceful living environment.",
    },
    {
      name: "Pak City Housing Society",
      location: "Sheikh Jamal, Pakpattan",
      area: "17 Acres",
      status: "85% of plots sold; carpeted roads and electricity installation ongoing.",
      highlights: "Large-scale residential community for modern living, with proximity to essential services and amenities.",
    },
  ],
  developmentServices: [
    "Site Planning & Infrastructure Development — roads, drainage, and utilities.",
    "Residential & Commercial Plot Development — construction tailored to client needs.",
    "Sales & Marketing Support for project plots.",
    "Post-Development Maintenance for long-term sustainability.",
  ],
  gallery: [
    { src: "/assets/media/pak-city-street.jpg", caption: "A developed street within a Pak City site — carpeted road, landscaping and completed homes." },
    { src: "/assets/media/pak-city-park.jpg", caption: "Community park area with landscaping and a children's play zone inside a Pak City site." },
  ],
  mapQuery: "Sheikh Jamal, Pakpattan, Punjab, Pakistan",
};
