# Github CDN

## Proxy

### GitHub Proxy
原始地址前添加 `https://ghproxy.com/`  [^github-proxy]
```shell
git clone https://ghproxy.com/https://github.com/stilleshan/ServerStatus
git clone https://user:your_token@ghproxy.com/https://github.com/your_name/your_private_repo
wget https://ghproxy.com/https://github.com/stilleshan/ServerStatus/archive/master.zip
wget https://ghproxy.com/https://raw.githubusercontent.com/stilleshan/ServerStatus/master/Dockerfile
```

### GitMirror

`文件` 在源网址前加上 `https://hub.gitmirror.com/` [^github-mirror]

`RAW` 将 `raw.githubusercontent.com` 替换为 `raw.gitmirror.com`

`GIS` 将 `gist.githubusercontent.com` 替换为 `gist.gitmirror.com`

## RAW 加速

### raw.staticdn.net

将 raw.githubusercontent.com 替换为 raw.staticdn.net 

### jsDelivr 

`https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>@<发布版本号>/<文件路径>` [^jsdelivr]

```tex
https://fastly.jsdelivr.net/gh/
https://gcore.jsdelivr.net/gh/
https://purge.jsdelivr.net/gh/
```



### 当前证书无效

[ fastgit.org](https://hub.fastgit.org/) 

staticaly `https://cdn.staticaly.com/gh/<用户名>/<仓库名>/<发布版本号>/<文件路径>`

## 自建服务

[gh-proxy](https://github.com/hunshcn/gh-proxy)、

### Nginx

```ini
server {
    listen 80;
    server_name github.server.name;
    location /{
        proxy_pass https://github.com;
    }
}

server {
    listen 80;
    server_name raw.github.server.name;
    location /{
        proxy_pass https://raw.githubusercontent.com;
    }
}
```

[nginx本地反代github](https://zhuanlan.zhihu.com/p/411165246)

[^github-proxy]: [GitHub Proxy 代理加速](https://ghproxy.com/)
[^github-mirror]: [Github 文件加速服务 - GitMirror](https://gitmirror.com/files.html)
[^jsdelivr]: [jsDelivr](https://www.jsdelivr.com)