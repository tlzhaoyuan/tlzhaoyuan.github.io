module.exports = {
    base: '/blog-of-yuan/',
    title: 'blog-of-yuan',
    description: 'yuan zhao\'s personal blog',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/tlzhaoyuan/tlzhaoyuan.github.io',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'First Blog', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客']
          ]
        },
}