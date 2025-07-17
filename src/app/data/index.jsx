// data.js (or data.jsx)

export const sidebarNav = [
  {
    title: "A.Bio",
    url: "/dashboard",
    icon: "/assets/icons/dashboard/home.svg",
  },
  {
    title: "Appearance",
    url: "/dashboard/appearance",
    icon: "/assets/icons/dashboard/appearance.svg",
  },
  {
    title: "Statistics",
    url: "/dashboard/statistics",
    icon: "/assets/icons/dashboard/statistics.svg",
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: "/assets/icons/dashboard/settings.svg",
  },
];

export const navLinks = [
  { label: "Template", href: "/template" },
  { label: "Store", href: "/store" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact-us" },
];

export const socialLinks = [
  { alt: "linkedin", src: "/icons/linkedin.svg", url: "https://www.linkedin.com/company/abio-profile" },
  { alt: "instagram", src: "/icons/instagram.svg", url: "https://www.instagram.com/abio_profile" },
  { alt: "tiktok", src: "/icons/tiktok.svg", url: "https://www.tiktok.com/@abio_profile" },
  { alt: "facebook", src: "/icons/facebook.svg", url: "https://www.facebook.com/abio_profile" },
];

export const testimonials = [
  {
    name: "Rea Thompson",
    role: "Influencer",
    quote: "Professional, responsive, and a total game-changer! A.bio has leveled up how I reach my fans and monetize my brand.",
    image: "/icons/avatar-1.svg",
  },
  {
    name: "Wole Shina",
    role: "Social Media enthusiast",
    quote: "My busy schedule needs simple tools. A.bio gives me total control and rich analytics in just a few clicks!",
    image: "/icons/avatar-2.svg",
  },
  {
    name: "Fehintun Mide",
    role: "Influencer",
    quote: "After switching to A.bio, my audience grew, and I could finally track what works best.",
    image: "/icons/avatar-3.svg",
  },
  {
    name: "Philip Jones",
    role: "Model",
    quote: "Professional, responsive, and a total game-changer! A.bio has leveled up how I reach my fans and monetize my brand.",
    image: "/icons/avatar-4.svg",
  },
];

export const offers = [
  {
    plan: "Free",
    description: "Start free. Upgrade anytime.",
    type: "Free",
    benefits: [
      "1 Smart Profile Page.",
      "Access to basic templates.",
      "Add your bio, profile image & social links",
      "Basic design themes (limited)",
      "QR code generator",
      "Basic analytics (visits & clicks)",
      "Community Support",
      "Add up to 5 extra external links",
      "Advanced analytics (CTR, devices, traffic sources).",
      "Priority customer support.",
      "Custom Analytics dashboard.",
      "Dedicated Support Manager",
      "Full design customization (fonts, backgrounds, themes."
    ]
  }
];

export const PLATFORMS = [
  { id: "youtube", name: "YouTube", icon: "/icons/youtube.svg" },
  { id: "tiktok", name: "Tiktok", icon: "/icons/tiktok.svg" },
  { id: "instagram", name: "Instagram", icon: "/icons/instagram.svg" },
  { id: "snapchat", name: "Snapchat", icon: "/icons/snapchat.svg" },
  { id: "facebook", name: "Facebook", icon: "/icons/facebook.svg" },
  { id: "pinterest", name: "Pinterest", icon: "/icons/pinterest.svg" },
  { id: "whatsapp", name: "WhatsApp", icon: "/icons/whatsapp.svg" },
  { id: "telegram", name: "Telegram", icon: "/icons/telegram.svg" },
  { id: "linkedin", name: "LinkedIn", icon: "/icons/linkedin.svg" },
];

const defaultProfile = {
  name: "David Osh",
  username: "davidosh",
  bio: "Product designer & Co founder",
  avatar: "/icons/osh.svg",
  location: "Lagos, Nigeria"
};

const defaultLinks = [
  { text: "Instagram", url: "#" },
  { text: "Behance", url: "#" },
  { text: "Snapchat", url: "#" },
  { text: "Twitter", url: "#" },
  { text: "My Portfolio", url: "#" },
];

export const templates = [
  {
    id: "minimal-pink",
    name: "Minimal Pink",
    profile: defaultProfile,
    links: defaultLinks,
    style: {
      textColor: "#333333",
      buttonColor: "#ffffff",
      buttonTextColor: "#333333",
      accentColor: "#ff6b8b",
      fontFamily: "'Inter', sans-serif",
      buttonStyle: "pill",
      buttonBorder: false,
      buttonEffect: "flat",
      backgroundImage: "url('/images/template-image.svg')",
    },
  },
  {
    id: "dark-gold-3d",
    name: "Dark Gold 3D",
    profile: defaultProfile,
    links: defaultLinks,
    style: {
      backgroundColor: "#121212",
      textColor: "#ffffff",
      buttonColor: "#1a1a1a",
      buttonTextColor: "#ffd700",
      accentColor: "#ffd700",
      fontFamily: "'Playfair Display', serif",
      buttonStyle: "pill",
      buttonBorder: false,
      buttonEffect: "3d",
      backgroundImage: "url('/images/template-image-2.svg')",
    },
  },
  {
    id: "earthy-brown-shadow",
    name: "Earthy Brown Shadow",
    profile: defaultProfile,
    links: defaultLinks,
    style: {
      backgroundColor: "#f5f5f5",
      textColor: "#333333",
      buttonColor: "#959595",
      buttonTextColor: "#fffffe",
      accentColor: "#777777",
      fontFamily: "'Roboto Mono', monospace",
      buttonStyle: "square",
      buttonBorder: true,
      buttonEffect: "minimal",
      backgroundImage: "url('/images/template-image-3.svg')",
    },
  },
];
