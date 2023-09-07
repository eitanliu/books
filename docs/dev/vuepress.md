# vuepress hope 配置

## 安装依赖
```sh
# 安装node
brew install node
# 安装 pmpm 包管理
npm install pnpm
# 创建项目
pnpm init
# 安装 vuepress 和 vuepress-theme-hope
pnpm i -D vue vuepress@next @vuepress/client@next vuepress-theme-hope
```

## 基础配置

### 运行配置

`package.json` 添加配置

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

终端执行

```sh
pnpm docs:dev
```

### 文档配置

基础配置[^pressCfg]、主题配置[^pressTheme]、Hope主题配置[^hopeTheme]

`.vuepress/config.js`

```ts
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

// 页面目录的标题深度
let headerRange = [2, 3, 4, 5];

export default defineUserConfig({
    host: 'localhost', // ip
    port: 8099, //端口号
    title: 'EitanLiu', // 设置网站标题
    description: 'Development notes',
    lang: "zh-CN", // 语言
    base: "/books/", // 网站路径
    markdown: {
        headers: {
            level: headerRange,
        },
        toc: {
            level: headerRange,
        },
    },
    theme: hopeTheme({ // 使用hope主题
        headerDepth: headerRange.length,
        plugins: {
            mdEnhance: {
                attrs: true, // H5 属性支持
                footnote: true, // 脚注
            },
        },
    }),
})
```

## Markdown 增强

VuePress Markdown 语法[^pressMD]，Hope Markdown语法增强 [^hopeMD]

[H5 属性支持](https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html)


[^pressCfg]: [VuePress 配置](https://v2.vuepress.vuejs.org/zh/reference/config.html)  
[^pressTheme]: [VuePress 主题配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)  
[^hopeTheme]: [Hope 主题配置](https://theme-hope.vuejs.press/zh/config/)  
[^pressMD]: [VuePress Markdown 指南](https://v2.vuepress.vuejs.org/zh/guide/markdown.html)  
[^hopeMD]: [Hope Markdown 增强](https://theme-hope.vuejs.press/zh/guide/markdown/)  
