export default {
  title: "juke.fr",
  description:
    "personnal portfolio of an open-sourcerer. I develop backend applications in Node.js and Typescript. I ❤ REST APIs.",
  openGraph: {
    type: "website",
    locale: "en_FR",
    url: "https://juke.fr/",
    title: "juke.fr",
    description:
      "personnal blog of an open-sourcerer. I develop backend applications in Node.js and Typescript. I ❤ REST APIs.",
    defaultImageWidth: 1000,
    defaultImageHeight: 500,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: "https://juke.fr/static/clize/desktop-code.png",
        width: 1000,
        height: 500,
        alt: "Clize"
      },
      {
        url: "https://juke.fr/static/nodend/desktop-browser.png",
        width: 1000,
        height: 500,
        alt: "Nodend"
      }
    ],
    site_name: "juke.fr"
  },
  twitter: {
    handle: "@jukefr",
    site: "@jukefr",
    cardType: "summary_large_image"
  }
};
