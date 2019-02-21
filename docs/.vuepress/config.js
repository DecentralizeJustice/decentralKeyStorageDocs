module.exports = {
  title: 'MC Tecnical Specification',
  description: 'A Collaborative Endeavour',
  base: '/spec/',
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/DecentralizeJustice/MultisigCryptoTechSpec' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/DecentralizeJustice' }
    ],
    sidebar: [
      '/intro/',
      '/prepurchase/',
      '/purchase/',
      '/hardware/',
      '/support/',
      '/cautions/',
      '/behindthescene/'

    ]
  }
}
