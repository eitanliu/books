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
    }),
})