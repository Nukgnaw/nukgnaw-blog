module.exports = {
  title: '王坤的博客',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        title: '文章',
        path: '/',
        itemPermalink: '/post/:slug',
      },
    ],
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
      {
        text: '推荐',
        link: '/recommend/'
      },
    ],
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:kun7016@gmail.com',
        },
        {
          type: 'github',
          link: 'https://github.com/Nukgnaw/nukgnaw-blog',
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
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'));
      md.use(require('markdown-it-sup'));
      md.use(require('markdown-it-sub'));
    }
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {},
    ],
  ],
}