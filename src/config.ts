/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Handyman Pros",
  phone: "(714) 494-9486",
  phoneE164: "+17144949486",
  domain: "nkyhandymanpros.com",
  siteUrl: "https://nkyhandymanpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "handyman",
  serviceKeywordPlural: "handyman services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Handyman Service",
  heroSubtext: "No job too small. Reliable home repairs and improvements. Call for a free estimate.",
  heroAlt: "Professional handyman performing home repairs",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "General Home Repairs",
      slug: "general-home-repairs",
      description:
        "Drywall patching, door repairs, trim work, caulking, and all those small fixes you've been putting off. We handle it all so you don't have to. Serving Florence, Covington, Fort Mitchell, and all of NKY.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Fixture Installation",
      slug: "fixture-installation",
      description:
        "Ceiling fans, light fixtures, faucets, toilets, TV mounting, shelving, and more. Each fixture is installed, leveled, and tested before we leave.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Honey-Do Lists",
      slug: "honey-do-lists",
      description:
        "Got a list of tasks? We'll work through the whole list in one visit when we can. From hanging pictures to fixing squeaky doors to patching holes — we work through your list efficiently and affordably.",
      photo: "/photos/honey-do-list.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does a handyman cost in Northern Kentucky?",
      answer:
        "Call (714) 494-9486 for a free estimate. Pricing varies by job.",
    },
    {
      question: "Do you handle small jobs?",
      answer:
        "Yes. No job is too small. We're happy to hang a TV, fix a leaky faucet, or patch a hole in the wall. That's what we're here for.",
    },
    {
      question: "How quickly can you come out?",
      answer:
        "We can usually schedule within 2-3 days. For urgent repairs, we offer same-week service across Northern Kentucky.",
    },
    {
      question: "Do you provide materials?",
      answer:
        "For most jobs, we bring basic supplies. For specialty items (fixtures, fans, specific hardware), we can pick them up or you can provide them — your choice.",
    },
    {
      question: "Can you do plumbing or electrical work?",
      answer:
        "We handle minor plumbing (faucets, toilets, garbage disposals) and minor electrical (outlets, switches, fixtures). For major work requiring permits, we'll refer you to a licensed specialist.",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes. Call us and describe the work. We can usually give you a ballpark estimate over the phone. For larger jobs, we offer free in-home estimates.",
    },
    {
      question: "How do I schedule service?",
      answer:
        "Call us at (714) 494-9486. Our main service areas are Florence, Covington, Fort Thomas, Newport, Fort Mitchell, Erlanger, Edgewood, and Independence.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "Florence homeowners count on NKY Handyman Pros for reliable home repairs and improvements. From drywall patching near Florence Mall to fixture installations in the neighborhoods off US-42, our team handles every job with care. We know the mix of older homes and newer builds throughout Florence, and we bring the right tools and expertise for each one. Whether it's a quick fix or a full honey-do list, you'll get a price before the work starts.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and riverfront properties need a handyman who understands older construction. NKY Handyman Pros serves Covington from Licking Riverside to Madison Avenue, handling everything from trim repairs in Victorian homes to TV mounting in modern apartments near the Roebling Bridge. We respect the character of Covington properties while bringing them up to date with professional, lasting repairs.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell homeowners expect careful work. From stately homes along Dixie Highway to well-maintained colonials on quiet side streets, NKY Handyman Pros handles repairs, fixture installations, and those nagging items on the to-do list. We treat every home with respect and clean up before we leave.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents turn to NKY Handyman Pros for everything from door repairs to shelving installation. Whether you're in a ranch-style home near the city park or a two-story house off Stevenson Road, we handle all your home repair needs. We also serve Erlanger's growing commercial corridor with reliable handyman services. Our flexible scheduling means we work around your life.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has plenty of homes that need upkeep and improvements. NKY Handyman Pros serves the newer subdivisions near Taylor Mill Road and the established neighborhoods closer to downtown. From post-move-in repairs to seasonal maintenance, we help Independence homeowners keep up with the small jobs that pile up.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's revitalized neighborhoods and riverfront community need a reliable handyman, and NKY Handyman Pros is happy to fill that role. From the Newport on the Levee area to the residential streets of the East Row and Clifton, we handle home repairs, fixture installations, and honey-do lists for homeowners and landlords alike. Newport's mix of historic and modern properties means a wide variety of jobs, from sticking doors in older homes to TV mounts in new condos.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities. NKY Handyman Pros provides careful, professional handyman work for properties along Turkeyfoot Road and throughout the city's quiet cul-de-sacs. We handle everything from drywall repairs to fixture installations, always leaving your home looking better than we found it.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — properties that need a handyman with a careful touch. NKY Handyman Pros handles the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and aging fixtures in older construction. From the homes near Tower Park to the quiet streets throughout the city, we deliver quality repairs that preserve your home's character.",
    },
  ] as City[],
};
