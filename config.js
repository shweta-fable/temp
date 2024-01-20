import Header from "./.component/header/Header.jsx"
module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/",
    entries: {},
  },
  props: {
    header: {
      customComponent: Header,      
      logo: {
        imageUrl: 'https://sharefable.com/fable-logo.svg',
        title: 'Fable Docs',
      },
      navLinks: {
        alignment: 'center',
        links: [
          { title: 'Visit Fable', url: 'https://sharefable.com' }
        ]
      },
      cta: {
        title: 'Hello world',
        link: '#somewhere'
      },
      ctas: [
        {
          type: 'secondary',
          title: 'Join the waitlist',
          url: 'https://www.theden.ai/join-the-waitlist',
        },
      ]
    },
    sidepanel: {
      showSidePanel: true
    },
    content: {},
    footer: {
      logo: 'https://sharefable.com/fable_footer-logo.svg',
      copyright: 'Fable © 2024',
      links: [
        {
          heading: 'Solutions',
          links: [
            { title: 'Marketing', url: 'https://sharefable.com/solutions/marketing' },
            { title: 'Sales', url: 'https://sharefable.com/solutions/sales' },
            { title: 'Presales', url: 'https://sharefable.com/solutions/presales' },
            { title: 'Partnerships', url: 'https://sharefable.com/solutions/partnerships' },
          ]
        },
        {
          heading: 'Resources',
          links: [
            { title: 'Fable Champs', url: 'https://sharefable.com/growth-stories' },
            { title: 'Fable Untold', url: 'https://sharefable.com/podcast/mastering-b2b-demand-generation' },
            { title: 'E-books', url: 'https://sharefable.com/ebooks' },
            { title: 'Privacy Policy', url: 'https://sharefable.com/privacy-policy' },
          ]
        },
      ],
    }
  },
  theme: {
    colors: {
      primary: "#3730a3",
      textPrimary: "#1e293b",
      textSecondary: "#ffffff",
      textTertiary: "#ffffff",
      backgroundPrimary: "#f3f4f6",
      backgroundSecondary: "#f3f4f6",
      accent: "#c7d2fe",
      border: "#d1d5db",
    },
    typography: {
      fontSize: 16,
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      h1: {
        margin: '0 0 24px 0',
        padding: 0,
        fontSize: '38px',
        fontWeight: 700,
        lineHeight: '48px'
      },
      h2: {
        margin: '0 0 32px 0',
        padding: 0,
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '36px'
      },
      h3: {
        margin: '0 0 32px 0',
        padding: 0,
        fontSize: '20px',
        fontWeight: 600,
        lineHeight: '26px'
      },
      h4: {
        margin: '0 0 24px 0',
        padding: 0,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22px'
      },
      h5: {
        margin: '0 0 24px 0',
        padding: 0,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22px'
      },
      h6: {
        margin: '0 0 24px 0',
        padding: 0,
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22px'
      }
    },
  }
}
