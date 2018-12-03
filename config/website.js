const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Hashim Warren - Portfolio - Gatsby', // Navigation and Site Title
  siteTitleAlt: 'Hashim Warren', // Alternative Site title for SEO
  siteUrl: 'https://hashim-portfolio-gatsby.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Experiment with a starter site on Gatsby',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hashim_warren', // Twitter Username
  ogSiteName: 'Hashim Warren', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
