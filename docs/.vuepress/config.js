module.exports = {
    //base: '/blog-of-yuan/',
    title: 'Yuan\'s Log',
    description: 'Hi! My name is Yuan Zhao.',
    themeConfig: {
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/tlzhaoyuan',
        // 自定义仓库链接文字。
        repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blogs', link: '/blog/FirstBlog.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/blog/FirstBlog.md', '我的第一篇博客'],
            ['/blog/SecondBlog.md', '我的第二篇博客']
          ]
        },
    markdown: {
    
          // 显示代码行号
        lineNumbers: true
      }
}