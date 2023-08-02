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
        // sidebar: [ // 自定义侧栏
        //     {
        //         text: "Introduce",
        //         link: "/",
        //         activeMatch: "^/$",
        //     },
        //     {
        //         text: "Spring",
        //         prefix: "/spring/",
        //         collapsible: true,
        //         children: "structure",
        //     },
        //     {
        //         text: "Dev",
        //         prefix: "/dev/",
        //         collapsible: true,
        //         children: "structure",
        //     },
        //     {
        //         text: "About",
        //         link: "/about",
        //     },
        // ],
    }),
})