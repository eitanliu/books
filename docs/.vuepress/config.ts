import { defineUserConfig } from 'vuepress';
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
        repo: 'https://github.com/eitanliu/books',
        headerDepth: headerRange.length,
        plugins: {
            autoCatalog: { // 目录生成
                frontmatter: (path) => {
                    console.error(path);
                    return {
                        order: 1,
                        dir: {
                            order: 1
                        },
                    }
                },
            },
            mdEnhance: {
                tabs: true, // 选项卡
                attrs: true, // H5 属性支持
                footnote: true, // 脚注
            },
        },
    }),
})