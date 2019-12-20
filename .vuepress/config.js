module.exports = {
  head: [["link", { rel: "icon", href: "/assets/img/favicon.ico" }]],
  title: "Beta Documentation",
  description: "New home for docs!",
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/img/logo-grey.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
      { text: "Old Docs", link: "https://docs.zumasys.com" }
    ],
    sidebar: [
      "/",
      ["/docs/", "Docs"],
      ["/docs/jbase/", "jBASE"],
      ["/docs/zumasys/accuterm-mobile/", "AccuTerm Mobile"],
      ["/docs/zumasys/accuterm-web/", "AccuTerm Web"],
      ["/docs/zumasys/customer-portal/", "Customer Portal"],
      ["/docs/zumasys/internal-applications/", "Internal Applications"],
      ["/docs/zumasys/mv-dashboard/", "MV Dashboard"],
      ["/docs/zumasys/mvconnect/", "MV Connect"]
    ],
    repo: "https://github.com/zumasys/docs",
    docsBranch: "master",
    editLinks: true,
    nextLinks: false,
    prevLinks: false,
    editLinkText: "Help us improve this page!"
  }
};
