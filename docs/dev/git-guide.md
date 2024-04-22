# Git 指南

## 部分克隆（Partial clone）

添加过滤 `blob` 对象 `--filter=blob:none` ，不自动检出`--no-checkout` [^partial-clone]  

稀疏检出`--sparse`  [^partial-clone-1] ，浅克隆`--dpeth 1`  [^partial-clone-2] [^partial-clone-3]  

```shell
# 开启稀疏检出
git config core.sparsecheckout true
```

## 分支操作

### 将远端分支全部变成本地分支[^git-clone-all]

```shell
mkdir some_repo
cd some_repo
git clone --bare https://xxx.git .git
git config --unset core.bare
git reset --hard
```

### 检出所有分支[^git-checkout-all]

```shell
for remote in `git branch -r | grep -v master `; do git checkout --track $remote ; done
```

### 将本地分支全部推到远端

```shell
git remote rename origin old_origin
git remote add origin https://github.com/your_name/yyy.git
git push -u origin --all
git push -u origin --tags
```

## Github CDN

### Proxy

#### GitHub Proxy

**[gh-proxy](https://github.com/hunshcn/gh-proxy)** 原始地址前添加代理服务器 [https://mirror.ghproxy.com/](https://mirror.ghproxy.com/)   
备用服务器：[GitHub 文件加速 (hunshcn.github.io)](https://hunshcn.github.io/gh-proxy/)、 [GitHub 文件加速 (99988866.xyz)](https://gh.api.99988866.xyz/) 、[GitHub 文件加速 - Moeyy](https://moeyy.cn/gh-proxy)  

#### GitMirror

[Github 文件加速服务 - GitMirror](https://gitmirror.com/files.html)

-  `文件` 在源网址前加上 `https://hub.gitmirror.com/` 

- `RAW` 将 `raw.githubusercontent.com` 替换为 `raw.gitmirror.com`

- `GIS` 将 `gist.githubusercontent.com` 替换为 `gist.gitmirror.com`

#### **jsDelivr** RAW 加速

`https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>@<发布版本号>/<文件路径>` [^jsdelivr]  

备选域名

```
https://fastly.jsdelivr.net/gh/
https://gcore.jsdelivr.net/gh/
https://purge.jsdelivr.net/gh/
```

### serctl网站下载加速

[https://d.serctl.com/](https://d.serctl.com/)

### 自建服务

#### Cloudflare

[gh-proxy: cf-worker版本部署](https://github.com/hunshcn/gh-proxy?tab=readme-ov-file#cf-worker版本部署)  
[gaboolic/cloudflare-reverse-proxy: cloudflare反向代理](https://github.com/gaboolic/cloudflare-reverse-proxy)  
[使用cloudflare制作GitHub“镜像站” - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/445303816)  
[利用CloudFlare的Workers和Pages反代Github并缓存实现Github文件加速访问](https://cloud.tencent.com/developer/article/2211557)  

```javascript
export default {
  async fetch(request, env, ctx) {
    const pathname = new URL(request.url).pathname;
    const pathparts = pathname.replace(/^\/+|\/+$/g,'').split('/');

    if(pathparts.length < 2) {
      return new Response(`Page not found ${JSON.stringify(pathname)}`, {
        status: 404
      });
    }

    const targetUrl = 'https://github.com';
    const response = await fetch(targetUrl + pathname, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  },
};
```

#### Nginx

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

[^partial-clone]: [部分克隆（Partial clone）介绍](https://help.aliyun.com/document_detail/309002.html)  
[^partial-clone-1]: [部分克隆 - GitLab文档](https://docs.gitlab.cn/jh/topics/git/partial_clone.html)
[^partial-clone-2]: [Git clone仓库的一个子目录](https://zhuanlan.zhihu.com/p/54581830)
[^partial-clone-3]: [How do I clone a subdirectory only of a Git repository?](https://stackoverflow.com/questions/600079/how-do-i-clone-a-subdirectory-only-of-a-git-repository)  
[^git-clone-all]: [git clone 所有分支，并push到另一个repo 转载](https://blog.csdn.net/p942005405/article/details/109109426)
[^git-checkout-all]: [迁移git项目到另一个仓库（保留所有分支、标签、历史记录）](https://www.kyleblog.cn/posts/git_migrate)
[^jsdelivr]: [jsDelivr](https://www.jsdelivr.com)  
