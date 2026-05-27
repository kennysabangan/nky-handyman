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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Handyman Pros",
  phone: "(859) 555-0400",
  phoneE164: "+18595550400",
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
  heroTagline: "Northern Kentucky's Trusted Handyman Service",
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
        "Ceiling fans, light fixtures, faucets, toilets, TV mounting, shelving, and more. Professional installation done right the first time. Licensed and insured handyman service across Northern Kentucky.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Honey-Do Lists",
      slug: "honey-do-lists",
      description:
        "Got a list of tasks? We'll knock them all out in one visit. From hanging pictures to fixing squeaky doors to patching holes — we work through your list efficiently and affordably.",
      photo: "/photos/screen-cleaning.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does a handyman cost in Northern Kentucky?",
      answer:
        "Most handyman work runs $60-80 per hour with a 2-hour minimum. Flat-rate pricing available for specific jobs. Call (859) 555-0400 for a free estimate.",
    },
    {
      question: "Do you handle small jobs?",
      answer:
        "Yes. No job is too small. We're happy to hang a TV, fix a leaky faucet, or patch a hole in the wall. That's what we're here for.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. We're fully licensed and insured in Kentucky and Ohio. Your home is protected when we're working in it.",
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
        "Call us at (859) 555-0400. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
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
        "Florence homeowners count on NKY Handyman Pros for reliable home repairs and improvements. From drywall patching near Florence Mall to fixture installations in the neighborhoods off US-42, our team handles every job with care. We know the mix of older homes and newer builds throughout Florence, and we bring the right tools and expertise for each one. Whether it's a quick fix or a full honey-do list, Florence residents trust us to get it done right.",
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
        "Fort Mitchell homeowners expect quality work, and NKY Handyman Pros delivers. From stately homes along Dixie Highway to well-maintained colonials on quiet side streets, we provide the kind of meticulous handyman service Fort Mitchell deserves. Our technicians are background-checked, fully insured, and treat every home with respect. Fort Mitchell residents choose us for reliable repairs, fixture installations, and those nagging items on the to-do list.",
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
        "As one of the fastest-growing cities in Kenton County, Independence has plenty of homes that need upkeep and improvements. NKY Handyman Pros serves the newer subdivisions near Taylor Mill Road and the established neighborhoods closer to downtown. From post-move-in repairs to seasonal maintenance, Independence homeowners count on us for professional handyman services done right the first time.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport's revitalized neighborhoods and riverfront community need a reliable handyman, and NKY Handyman Pros is happy to fill that role. From the Newport on the Levee area to the residential streets of Clifton and Southgate, we handle home repairs, fixture installations, and honey-do lists for homeowners and landlords alike. Newport's mix of historic and modern properties keeps us busy — and we love it.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities. NKY Handyman Pros has served Edgewood homeowners for years, providing careful, professional handyman work for properties along Turkeyfoot Road and throughout the city's quiet cul-de-sacs. We handle everything from drywall repairs to fixture installations, always leaving your home looking better than we found it.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views and historic homes — properties that need a handyman with a careful touch. NKY Handyman Pros handles the unique challenges Fort Thomas presents: steep driveways, multi-level homes built into hillsides, and aging fixtures in older construction. From the homes near Tower Park to the quiet streets throughout the city, we deliver quality repairs that preserve your home's character.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout in Northern Kentucky. NKY Handyman Pros serves Bellevue residents and small business owners with reliable handyman services — from door and trim repairs to fixture installations and shelving. Whether your home overlooks the river hills or sits on a cozy side street, we bring the same professionalism to every job.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's rolling hills and spacious properties keep NKY Handyman Pros busy with all kinds of home repairs. Whether your home sits along Alexandria Pike or in one of Cold Spring's peaceful residential developments, we handle drywall, doors, trim, fixtures, and everything in between. Cold Spring homeowners trust us to show up on time, do quality work, and leave the job site clean.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Handyman Pros is proud to keep its homes in great shape. From the established neighborhoods along Taylor Mill Road to the newer developments, we provide handyman services that Taylor Mill residents rely on. We handle everything from small repairs to full honey-do lists, working efficiently and affordably every time.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the homes here deserve quality workmanship. NKY Handyman Pros delivers premium handyman services that match Villa Hills' standards — from fixture installations and trim work to general repairs and improvements. Villa Hills homeowners trust us because we never cut corners and always deliver lasting results.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Handyman Pros delivers it with every visit. We serve this close-knit community with professional handyman services — from repairs along Buttermilk Pike to installations in well-maintained neighborhoods throughout the city. We handle everything from simple fixes to more complex jobs, always working efficiently and respecting your time.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect top-tier service. NKY Handyman Pros is proud to serve Lakeside Park with professional handyman work that keeps homes looking great. From routine repairs to fixture installations on tree-lined streets and well-maintained properties, Lakeside Park homeowners know they can count on us for quality work.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location means unique homes with unique challenges. NKY Handyman Pros provides Park Hills homeowners with expert handyman services — from door repairs and drywall work to fixture installations in multi-story homes. We're experienced with the steep terrain and distinctive architecture throughout Park Hills, and we bring the right equipment and know-how to every job.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, just minutes from Northern Kentucky. NKY Handyman Pros extends our services to Walnut Hills homeowners and landlords — from the stately homes along Gilbert Avenue to apartments near Peeble's Corner. We handle repairs in older Victorian homes and modern units alike, bringing reliable handyman work to every property.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, and NKY Handyman Pros brings our professional handyman services across the river to serve its residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we handle repairs, installations, and improvements with the high standards Hyde Park homeowners expect.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city just a short drive from Northern Kentucky. NKY Handyman Pros serves Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable handyman work. From older homes with aging fixtures to duplexes and storefronts, we handle repairs and installations that keep Norwood properties in great shape.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes demand quality craftsmanship. NKY Handyman Pros extends our services to Montgomery homeowners who expect the best — from historic properties near the village center to sprawling estates on the outskirts. We bring the same meticulous attention to detail that has made us Northern Kentucky's most trusted handyman service.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati. NKY Handyman Pros is proud to bring our handyman services to this great neighborhood — from well-kept ranch homes along Blue Ash Road to two-story colonials in the side streets. We offer flexible scheduling, fair pricing, and the kind of dependable service that Deer Park homeowners appreciate.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Handyman Pros provides the premium handyman service that Amberley homes demand. Our fully insured, background-checked technicians deliver quality repairs and installations while protecting your property and respecting your privacy.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods. NKY Handyman Pros is excited to serve Westwood with the same reliable handyman work that Northern Kentucky residents have come to trust. From charming Victorians along Harrison Avenue to mid-century homes throughout the neighborhood, we handle every type of repair and installation Westwood needs.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky. NKY Handyman Pros brings our professional handyman services to Fort Heights homeowners who want the same quality their NKY neighbors enjoy. From general repairs to fixture installations on homes with elevated terrain and unique access challenges, we handle it all.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with steep streets and a mix of historic and modern properties. NKY Handyman Pros brings expert handyman services to Mt. Adams — the hillside homes and unique architecture require careful access and professional techniques, and our team is equipped to handle any challenge.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side. NKY Handyman Pros serves Mt. Lookout homeowners with professional handyman work — from older bungalows needing trim repairs to updated colonials requiring fixture installations. We handle every type of job this beloved Cincinnati neighborhood throws our way.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods with a thriving business district and new developments. NKY Handyman Pros is proud to serve Oakley's homes and businesses with reliable handyman services. From homes around Oakley Square to new builds throughout the area, we provide repairs and installations that are thorough, affordable, and dependable.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River. NKY Handyman Pros brings our professional services to this historic riverfront community, where homes range from restored 19th-century cottages to modern condos. We handle the unique repair needs that come with older construction and riverside living.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side. NKY Handyman Pros is happy to extend our handyman services to Pleasant Ridge residents — from classic foursquares needing repairs to updated ranches requiring fixture installations. Our team is fast, friendly, and thorough, leaving your home in better shape every time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Handyman Pros fixed everything on my honey-do list in one afternoon. Patched drywall, fixed a door that wouldn't close, hung shelves, and replaced a faucet. So convenient. Highly recommend in Florence.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We had a ceiling fan that needed installing and some trim work. They came out, did everything in 3 hours, and the price was fair. Great handyman service in Covington.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Finally found a handyman who actually shows up and does quality work. Fixed our deck railing, patched some holes, and installed a new light fixture. Best handyman in Northern Kentucky.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We use NKY Handyman Pros for all our home repairs. They've done everything from drywall to plumbing. Always reliable, always professional. Our go-to handyman in Edgewood.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Handyman Pros fixed everything on my honey-do list in one afternoon. Patched drywall, fixed a door that wouldn't close, hung shelves, and replaced a faucet. So convenient. Highly recommend their handyman service in Florence.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We had a ceiling fan that needed installing and some trim work. They came out, did everything in 3 hours, and the price was fair. Great handyman service in Covington. Will definitely use them again.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Finally found a handyman who actually shows up and does quality work. Fixed our deck railing, patched some holes, and installed a new light fixture. Best handyman in Northern Kentucky.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to fix a bunch of things at our restaurant in Erlanger — door closers, shelving, a leaky faucet. They worked around our business hours. Great handyman service. Our customers have noticed the improvements.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a new home in Independence and had a huge list of things to fix. NKY Handyman Pros knocked it all out in two visits. Drywall patches, door adjustments, fixture installs — they handled everything. Highly recommend.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for help with some home repairs in Newport. They gave us a fair price over the phone and came out the same week. Fixed a squeaky door, patched drywall, and installed a new bathroom faucet. Great service, great price.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We use NKY Handyman Pros for all our home repairs. They've done everything from drywall to plumbing. Always reliable, always professional. Our go-to handyman in Edgewood that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas home needed a bunch of small repairs — trim, doors, a ceiling fan. These guys handled it all in one visit. Quality work, cleaned up after themselves. Best handyman service in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
