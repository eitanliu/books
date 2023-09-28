# Router V

[配置文档 V5](https://www.v2fly.org/v5/config/overview)、 [配置文档 V4](https://www.v2fly.org/config/overview.html)

## Nginx

nginx 反代配置匹配

[nginx反向代理location与proxy_pass配置规则总结](https://blog.51cto.com/u_2225052/5873280)

[Nginx - 反向代理location与proxy_pass配置规则总结（附样例）](https://www.hangge.com/blog/cache/detail_2979.html)

[nginx反向代理正则匹配示例及nginx内置变量详解](https://www.cnblogs.com/chenjw-note/p/14388257.html)

ssl 证书生成  

[使用openssl创建https证书-腾讯云开发者社区](https://cloud.tencent.com/developer/article/1548350)

第一步，生成服务器私钥：

```shell
openssl genrsa -out server.key 1024
```

第二步，根据私钥和输入的信息生成证书请求文件：

```shell
openssl req -new -key server.key -out server.csr
```

第三步：用第一步的私钥和第二步的请求文件生成证书：

```shell
openssl x509 -req -in server.csr -out server.crt -signkey server.key -days 3650
```

## Example

### Meek

#### Service 

config file `/usr/local/etc/v2ray/config.json` [^meek-example] [^v5view] [^v5example]

```json
{
  "log": {
    "error": {
      "level": "Info",
      "type": "Console"
    },
    "access": {
      "type": "None"
    }
  },
  "outbounds": [
    {
      "protocol": "freedom"
    }
  ],
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": 17773,
      "protocol": "vmess",
      "settings": {
        "users": [
          "f48fd3ae-0c24-433e-af3b-e87338b74705"
        ]
      },
      "streamSettings": {
        "transport": "meek",
        "transportSettings": {
          "url": "http://127.0.0.1:17773"
        },
        "security": "none",
        "securitySettings": {
        }
      }
    }
  ]
}
```

```shell
systemctl enable v2ray
systemctl start v2ray
```

#### Nginx 

```ini
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;

        index index.html index.htm index.nginx-debian.html;

        server_name www.cscot.buzz;

        location / {
                try_files $uri $uri/ =404;
        }

        location /vrezdxop {
                proxy_pass http://127.0.0.1:17773;
        }

}
```

#### Client

```json
{
  "log": {
    "error": {
      "level": "Info",
      "type": "Console"
    },
    "access": {
      "type": "None"
    }
  },
  "outbounds": [
    {
      "protocol": "vmess",
      "settings": {
        "address": "www.cscot.buzz",
        "port": 443,
        "uuid": "f48fd3ae-0c24-433e-af3b-e87338b74705"
      },
      "streamSettings": {
        "transport": "meek",
        "transportSettings": {
          "url": "https://www.cscot.buzz/vrezdxop"
        },
        "security": "tls",
        "securitySettings": {
        }
      }
    }
  ],
  "inbounds": [
    {
      "protocol": "socks",
      "settings": {
        "udpEnabled": true,
        "address": "127.0.0.1",
        "packetEncoding": "Packet"
      },
      "port": 10808,
      "listen": "127.0.0.1"
    },
    {
      "protocol": "http",
      "settings": {
      },
      "port": 10809,
      "listen": "127.0.0.1"
    }
  ]
}
```



[^meek-example]: [Example of V2Ray with meek](https://cscot.pages.dev/2023/05/31/v2ray-meek/)
[^v5view]: [v5.7.0 User Preview](https://github.com/v2fly/v2ray-core/discussions/2549)
[^v5example]: [client.jsonv5.json](https://gist.github.com/xiaokangwang/b8f3a77780cae99eba68e7b127522883)
