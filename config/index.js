module.exports = {
  //-- SITE SETTINGS -----
  author: "@julesgabriel-dayaux",
  siteTitle: "Portfolio - Dayaux Jules | Développeur web",
  siteShortTitle: "Gatsby", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Portfolio minimaliste de Jules DAYAUX - Alternant, Développeur et freelance dans le digital. Je partage mes connaissances aux professionnels du digital qui souhaite en apprendre plus. J'accompagne aussi mes clients dans leurs projets les plus ambitieux",
  siteUrl: "https://julesdayaux.fr/",
  siteLanguage: "fr_FR",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Jules DAYAUX", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "G-QPR2ZRMYHG", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40julesgabriel-dayaux",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jules-dayaux-0b003a172/",
    },
    {
      name: "Medium",
      url: "https://julesgabriel-dayaux.medium.com/",
    },
    {
      name: "Github",
      url: "https://github.com/julesgabriel",
    },
    {
      name: "Mail",
      url: "mailto:julesgabriel.dayaux@gmail.com",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "À mon propos",
        url: "/#about",
      },
      {
        name: "Mes compétences",
        url: "/#projects",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "CV",
      fileName: "Jules-DAYAUX-Full-Stack.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Confidentialité",
      url: "/privacy",
    },
    {
      name: "Mentions",
      url: "/imprint",
    },
  ],
}
