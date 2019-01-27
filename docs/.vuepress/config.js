module.exports = {
  title: 'MC Design Specs',
  description: 'A Collaborative Endeavour',
  base: '/spec/',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/intro/' },
      { text: 'Github', link: 'https://github.com/DecentralizeJustice/MultisigCryptoDesignSpec' },
      { text: 'Reddit', link: 'https://www.reddit.com/r/DecentralizeJustice' },
    ],
    sidebar: [
      '/intro/',
      '/exa/',
      '/exp/',
    ]
  }
}
