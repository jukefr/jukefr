export default {
  title: 'juke.fr',
  description: 'personnal blog of an open-sourcerer, I try new technologies all the time!',
  openGraph: {
    type: 'website',
    locale: 'en_FR',
    url: 'https://juke.fr/',
    title: 'juke.fr',
    description: 'personnal blog of an open-sourcerer, I try new technologies all the time!',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'juke.fr',
  },
  twitter: {
    handle: '@jukefr',
    site: '@jukefr',
    cardType: 'summary_large_image',
  },
};
