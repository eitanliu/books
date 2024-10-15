# 应用商店跳转

以微信的包名com.tencent.mm为例

| 应用商店                   | 跳转方式    | 值                                                           |
| -------------------------- | ----------- | ------------------------------------------------------------ |
| GooglePlay（默认应用商店） | SCHEMA Link | [market://details?id=com.tencent.mm](market://details?id=com.tencent.mm) |
| GooglePlay                 | Web Link    | https://play.google.com/store/apps/details?id=com.tencent.mm |
| 小米应用商店               | SCHEMA Link | [mimarket://details?id=com.tencent.mm](mimarket://details?id=com.tencent.mm) |
| 小米应用商店               | Web Link    | https://app.xiaomi.com/details?id=com.tencent.mm             |
| 三星应用商店               | SCHEMA Link | [samsungapps://ProductDetail/com.tencent.mm](samsungapps://ProductDetail/com.tencent.mm) |
| 华为应用商店               | SCHEMA Link | [appmarket://details?id=com.tencent.mm](appmarket://details?id=com.tencent.mm) |
| 华为应用商店(自定义渠道)   | SCHEMA Link | [hiapplink://com.huawei.appmarket?appId=C5683](hiapplink://com.huawei.appmarket?appId=C5683) |
| 华为应用商店(自定义渠道)   | Web Link    | https://appgallery.cloud.huawei.com/ag/n/app/C5683           |
| OPPO应用商店               | SCHEMA Link | [oppomarket://details?packagename=com.tencent.mm](oppomarket://details?packagename=com.tencent.mm) |
| OPPO应用商店(私有)         | SCHEMA Link | [oaps://mk/dt?id=30412997](oaps://mk/dt?id=30412997)         |
| vivo应用商店               | SCHEMA Link | [vivomarket://details?id=com.tencent.mm&th_id=40413](vivomarket://details?id=com.tencent.mm&th_id=40413) |
| vivo应用商店               | Web Link    | https://h5coml.vivo.com.cn/h5coml/appdetail_h5/browser_v2/index.html?appId=40413&resource=301&source=7 |
| 魅族应用商店               | SCHEMA Link | [mstore://details?package_name=com.tencent.mm](mstore://details?package_name=com.tencent.mm) |
| 魅族应用商店               | Web Link    | [https://app.meizu.com/apps/public/detail?package_name=com.tencent.mm](http://app.meizu.com/apps/public/detail?package_name=com.tencent.mm) |



## UA判断

- [ua-parser-js](https://github.com/faisalman/ua-parser-js) //2021-10
- [phonecheck](https://github.com/suxianbaozi/phonecheck) //2021-4
- [ua-device.js](http://fex-team.github.io/ua-device/) 是由Baidu WebFE(FEX)团队开发的一个用于解析UA来得到用户终端信息的JS框架。//2017
- http://www.webapps-online.com/online-tools/user-agent-strings

## 引用

[国内厂商应用商店跳转链接 - 风雨雷电堂](https://www.70apps.com/blog/web/2021/10/21/Chinese_Android_Market_Schema.html)  

[H5页面拉起指定app或跳转到应用市场下载转载](https://blog.csdn.net/qq_41581588/article/details/139459263)

[2020-02-22-Android-引导用户跳转手机应用市场详情页进行评论.md](https://github.com/walymin/walymin.github.io/blob/master/_posts/2020-02-22-Android-%E5%BC%95%E5%AF%BC%E7%94%A8%E6%88%B7%E8%B7%B3%E8%BD%AC%E6%89%8B%E6%9C%BA%E5%BA%94%E7%94%A8%E5%B8%82%E5%9C%BA%E8%AF%A6%E6%83%85%E9%A1%B5%E8%BF%9B%E8%A1%8C%E8%AF%84%E8%AE%BA.md)  

[simplepeng/MarketHelper: 🔥🔥🔥 -跳转应用商店的帮助类](https://github.com/simplepeng/MarketHelper)
