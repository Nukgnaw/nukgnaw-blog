module.exports = {
  title: '王坤的博客',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: '文章',
        link: '/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
    ],
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:kun7016@gmail.com',
        },
      ],
      copyright: [
        {
          text: 'VuePress 驱动',
          link: 'https://vuepress.vuejs.org/zh/'
        },
      ],
    },
    globalPagination: {
      prevText:'<',
      nextText:'>',
      lengthPerPage:'5',
      layout:'Pagination',
    },
  }
}