import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
    host: 'localhost', // ip
    port: 8099, //端口号
    title: 'EitanLiu', // 设置网站标题
    description: 'Development notes',
    lang: "zh-CN",
    base: "/books/",
    theme: hopeTheme({
        sidebar: [
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

        // sidebar: {
        //     "/": "structure",
        //     "/spring/": "structure",
        //     "/dev/": "structure",
        // },
    }),
})