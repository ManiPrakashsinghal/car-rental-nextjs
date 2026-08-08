// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE to rebrand the whole site with your own business
// details. Everything else pulls from here — you shouldn't need to
// touch component code just to change your phone number or city.
// ────────────────────────────────────────────────────────────────

export const siteConfig = {
  businessName: "Balaji Car Rental Jaipur",
  tagline: "cars, on your terms.",
  city: "Jaipur",
  region: "Rajasthan",
  country: "India",

  // Used for tel: links — keep the leading + and country code, no spaces.
  phoneRaw: "+919694261266",
  // Used for display only.
  phoneDisplay: "+91 9694261266",

  // WhatsApp number, digits only, with country code, NO plus sign.
  whatsappNumber: "919694261266",
  whatsappDefaultMessage: "Hi, I want to book a car.",

  email: "bookings@balajicarrentaljaipur.com",

  address: "Malviya Nagar, Jaipur, Rajasthan 302020",

  // Paste your own Google Maps embed src here (Maps → Share → Embed a map).
  mapsEmbedSrc:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6449.429329509838!2d75.78909526814152!3d26.842503405848685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67377871437%3A0x6d191b0b94eae76b!2sMalviya%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302017!5e0!3m2!1sen!2sin!4v1786170048051!5m2!1sen!2sin",
   // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0!2d75.8048!3d26.8080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJaipur!5e0!3m2!1sen!2sin!4v0000000000",



  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  // Used for SEO metadata, sitemap and JSON-LD. Change this once you
  // have a real domain and deploy.
  siteUrl: "https://www.balajicarrentaljaipur.com",

  googleSiteVerification: "", // paste Search Console verification code here
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message ?? siteConfig.whatsappDefaultMessage
  )}`;

export const telLink = () => `tel:${siteConfig.phoneRaw}`;

export const mailtoLink = (subject?: string) =>
  `mailto:${siteConfig.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
