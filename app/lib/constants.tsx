export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
];

export const FEATURES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Discover Locally",
    description:
      "See language learners on a live map around you. Find people in your neighbourhood who speak the language you're learning.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Match by Language",
    description:
      "Browse profiles filtered by native and learning languages. Each match is a two-way exchange — you teach, they teach.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Chat Instantly",
    description:
      "Send a message the moment you find someone interesting. No waiting for a match — just open a conversation.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Show Your Spots",
    description:
      "Add favourite cafés and meeting places to your profile so others know where you like to practise in person.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Any Language",
    description:
      "From German and Japanese to Tagalog and Greek — TandeMate supports every language pair you can imagine.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Always Free",
    description:
      "No subscriptions, no paywalls. TandeMate is free to download and free to use — because language learning should be for everyone.",
  },
];

export const STEPS = [
  {
    number: "01",
    title: "Create your profile",
    description:
      "Add your native languages, the languages you are learning, a short bio, and your favourite meeting spots.",
  },
  {
    number: "02",
    title: "Explore the map",
    description:
      "Open the map to see who is nearby. Tap a cluster to zoom in, tap a pin to view a full profile.",
  },
  {
    number: "03",
    title: "Start the exchange",
    description:
      "Send a message, arrange a coffee, and practise together. Real conversations, real progress.",
  },
];

export const SCREENSHOTS = [
  { src: "/screen-map-ios.png", label: "Discover nearby" },
  { src: "/screen-users-ios.png", label: "Browse users" },
  { src: "/screen-chat-ios.png", label: "Chat with locals" },
  { src: "/screen-profile-ios.png", label: "Engaging profiles" },
  { src: "/screen-map-detail.png", label: "Live map view" },
  { src: "/screen-users-detail.png", label: "User list" },
  { src: "/screen-chat-ios2.png", label: "Conversations" },
  { src: "/screen-profile-ios2.png", label: "Your profile" },
];
