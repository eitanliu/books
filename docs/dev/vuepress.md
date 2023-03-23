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

`.vuepress/config.js`

```ts
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    host: 'localhost', // ip
    port: 8099, //端口号
    title: 'EitanLiu', // 设置网站标题
    description: 'Development notes',
    lang: "zh-CN", // 语言
    base: "/books/", // 网站路径
    theme: hopeTheme({ // 使用hope主题
        sidebar: [ // 自定义侧栏
            {
                text: "Introduce",
                link: "/",
                activeMatch: "^/$",
            },
            {
                text: "Spring",
                prefix: "/spring/",
                collapsible: true,
                children: "structure",
            },
            {
                text: "Dev",
                prefix: "/dev/",
                collapsible: true,
                children: "structure",
            },
            {
                text: "About",
                link: "/about",
            },
        ],
    }),
})
```

