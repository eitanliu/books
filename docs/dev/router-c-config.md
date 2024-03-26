# Router C

## 版本介绍

- ClashVerge：一个 Tarui 语言开发的多平台代理客户端[^clash-verge]
- MetaCubeX：ClashVerge 上使用的内核[^MetaCubeX]  

[^clash-verge]: [Clash Verge-Github](https://github.com/clash-verge-rev/clash-verge-rev)  
[^MetaCubeX]: [https://github.com/MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo)

## Proxies

ss/vmess 配置转换[^clash-proxy-converter]  

### Subscription Links

[ClashX-V2Ray-TopFreeProxy](https://github.com/WilliamStar007/ClashX-V2Ray-TopFreeProxy)  

- NodeFree: https://nodefree.org/dy/2023/09/20230928.yaml ★
- ClashNode: https://clashnode.com/wp-content/uploads/2023/09/20230928.yaml ★
- NiceVPN: https://sub.nicevpn.top/Clash.yaml ★
- Mfuu: https://raw.githubusercontent.com/mfuu/v2ray/master/clash.yaml
- Anaer: https://raw.githubusercontent.com/anaer/Sub/main/clash.yaml ★
- Pojiezhiyuanjun: https://raw.githubusercontent.com/pojiezhiyuanjun/2023/master/0928clash.yml
- Oslook: https://raw.githubusercontent.com/oslook/clash-freenode/main/clash.yaml
- Ermaozi: https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/clash.yml ★
- Learnhard-cn: https://cdn.jsdelivr.net/gh/learnhard-cn/free_proxy_ss@main/clash/clash.provider.yaml
- Tbbatbb: https://raw.githubusercontent.com/tbbatbb/Proxy/master/dist/clash.config.yaml
- Vveg26: https://raw.githubusercontent.com/vveg26/get_proxy/main/dist/clash.config.yaml
- OpenRunner: https://raw.githubusercontent.com/openrunner/clash-freenode/main/clash.yaml ★
- Xrayfree: https://tt.vg/freeclash

```
https://cdn.jsdelivr.net/gh/NiceVPN123/NiceVPN@main/Clash.yaml
https://cdn.jsdelivr.net/gh/mfuu/v2ray@master/merge/merge_clash.yaml
https://cdn.jsdelivr.net/gh/anaer/Sub@main/clash.yaml
https://cdn.jsdelivr.net/gh/oslook/clash-freenode@main/clash.yaml
https://cdn.jsdelivr.net/gh/ermaozi/get_subscribe@main/subscribe/clash.yml
https://cdn.jsdelivr.net/gh/learnhard-cn/free_proxy_ss@main/clash/clash.provider.yaml
https://cdn.jsdelivr.net/gh/tbbatbb/Proxy@master/dist/clash.config.yaml
https://cdn.jsdelivr.net/gh/vveg26/get_proxy@main/dist/clash.config.yaml
https://cdn.jsdelivr.net/gh/openrunner/clash-freenode@main/clash.yaml
```

### Credits

- NodeFree ([https://nodefree.org](https://nodefree.org/))
- ClashNode ([https://clashnode.com](https://clashnode.com/))
- NiceVPN (https://github.com/NiceVPN123/NiceVPN)
- Mfuu (https://github.com/mfuu/v2ray)
- Anaer (https://github.com/anaer/Sub)
- Pojiezhiyuanjun (https://github.com/pojiezhiyuanjun/2023)
- Oslook (https://github.com/oslook/clash-freenode)
- Ermaozi (https://github.com/ermaozi/get_subscribe)
- Learnhard-cn (https://github.com/learnhard-cn/free_proxy_ss)
- Tbbatbb (https://github.com/tbbatbb/Proxy)
- Vveg26 (https://github.com/vveg26/getProxy)
- OpenRunner (https://github.com/openRunner/clash-freenode)
- Xrayfree (https://github.com/xrayfree/free-ssr-ss-v2ray-vpn-clash)
- Lancellc (https://lancellc.gitbook.io/clash)

[^clash-proxy-converter]: [clash-proxy-converter](https://github.com/wangyuqi0706/clash-proxy-converter)

## Rules

dns-通配符域名匹配 [^dns-matching]  
使用星号 (`*`) 来匹配单级通配符子域名.  

| 表达式             | 匹配                            | 不匹配                     |
| :----------------- | :------------------------------ | :------------------------- |
| `*.google.com`     | `www.google.com`                | `google.com`               |
| `*.bar.google.com` | `foo.bar.google.com`            | `bar.google.com`           |
| `*.*.google.com`   | `thoughtful.sandbox.google.com` | `one.two.three.google.com` |

使用点号 (`.`) 来匹配多级通配符子域名.  

| 表达式        | 匹配                            | 不匹配       |
| :------------ | :------------------------------ | :----------- |
| `.google.com` | `www.google.com`                | `google.com` |
| `.google.com` | `thoughtful.sandbox.google.com` | `google.com` |
| `.google.com` | `one.two.three.google.com`      | `google.com` |

使用加号 (`+`) 来匹配多级通配符子域名.  
`+` 通配符的工作方式类似于 `DOMAIN-SUFFIX`, 您可以一次进行多级的快速匹配.  

| 表达式         | 匹配                            |
| :------------- | :------------------------------ |
| `+.google.com` | `google.com`                    |
| `+.google.com` | `www.google.com`                |
| `+.google.com` | `thoughtful.sandbox.google.com` |
| `+.google.com` | `one.two.three.google.com`      |

geoip 国家代码 [^geoname-statistics]

规则集 [^Loyalsoldier-clash-rules]

[^dns-matching]: [通配符域名匹配](https://clash.wiki/configuration/getting-started.html#dns-%E9%80%9A%E9%85%8D%E7%AC%A6%E5%9F%9F%E5%90%8D%E5%8C%B9%E9%85%8D)
[^geoname-statistics]: [GeoNames Country statistics](https://www.geonames.org/statistics/)  
[^Loyalsoldier-clash-rules]: [Loyalsoldier/clash-rules](https://github.com/Loyalsoldier/clash-rules/)

## DNS

```yaml
dns:
  nameserver-policy:
    '+.cn': '223.5.5.5'
```



[[Feature\] [DNS] 是否应该让不符合 fallback-filter 条件的DNS查询*只*采用 nameserver 中解析的结果？](https://github.com/Dreamacro/clash/issues/2386)  
[DNS污染对Clash（for Windows）的影响](https://github.com/Fndroid/clash_for_windows_pkg/wiki/DNS污染对Clash（for-Windows）的影响)  
[我有特别的DNS 配置和使用技巧 - Sukka's Blog](https://blog.skk.moe/post/i-have-my-unique-dns-setup/)  
[个人自用 Surge 规则](https://github.com/SukkaW/Surge)  
