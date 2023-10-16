# Router V

[配置文档 V5](https://www.v2fly.org/v5/config/overview)、 [配置文档 V4](https://www.v2fly.org/config/overview.html)

## Nginx

nginx 反代配置匹配

[nginx反向代理location与proxy_pass配置规则总结](https://blog.51cto.com/u_2225052/5873280)

[Nginx - 反向代理location与proxy_pass配置规则总结（附样例）](https://www.hangge.com/blog/cache/detail_2979.html)

[nginx反向代理正则匹配示例及nginx内置变量详解](https://www.cnblogs.com/chenjw-note/p/14388257.html)

### ssl 证书生成  

[使用openssl创建https证书-腾讯云开发者社区](https://cloud.tencent.com/developer/article/1548350)

```shell
# RSA 证书
# 第一步，生成服务器私钥：1024, 2048, 3072, 7680
openssl genrsa -out server.key 2048
# 第二步，根据私钥和输入的信息生成证书请求文件：
openssl req -new -key server.key -out server.csr
# 第三步：用第一步的私钥和第二步的请求文件生成证书：
openssl x509 -req -in server.csr -signkey server.key -out server.crt -days 36500
```

[Openssl 生成ECC证书及密钥](https://zhuanlan.zhihu.com/p/134436530)  
[openssl 生成多级X.509 v3 ECC公钥证书链完整示例原创](https://blog.csdn.net/Reflection_in_water/article/details/123172433)  
[Cloudflare自签名SSL证书](https://lixingcong.github.io/2016/12/20/cloudflare-self-sign)  

```shell
# ECC 证书
# 列出可用ECC曲线
openssl ecparam -list_curves
# 步骤一：生成 CA 密钥对
openssl ecparam -genkey -name prime256v1 -out ecdsa.key
# 步骤二：生成 CA 请求文件
openssl req -new -key ecdsa.key -out ecdsa.csr
# 步骤三：生成 CA 证书
openssl x509 -req -in ecdsa.csr -signkey ecdsa.key -out ecdsa.pem -days 36500
# 步骤四：CA证书由 pem 格式转为 der 格式
openssl x509 -outform der -in ecdsa.pem -out ecdsa.der
```

## Example

### 检测

```
http://www.gstatic.com/generate_204
https://www.google.com/generate_204
http://cp.cloudflare.com/generate_204
```

### gRPC

#### Service

config file `/usr/local/etc/v2ray/config.json` [^grpc-example]

```json
{
  "log": {
    "loglevel": "debug"
  },
  "inbounds": [
    {
      "protocol": "vmess",
      "listen": "127.0.0.1",
      "port": 33322,
      "settings": {
        "clients": [
          {
            "id": "1a37fd9b-aa0a-49ef-9788-3d52cd3b4ca6"
          }
        ],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "grpc",
        "grpcSettings": {
          "serviceName": "abc"
        },
        "security": "none"
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom"
    }
  ]
}
```

#### Nginx

`vim /etc/nginx/sites-enabled/default.conf` [^grpc-interruption]

```ini
server {
    listen       443 http2;
    server_name  localhost;

    location /abc/Tun {
        # 网上参考级配置
        if ($content_type !~ "application/grpc") {
            return 404;
        }
        client_max_body_size 0;
        client_body_timeout 60m;
        send_timeout 60m;
        lingering_close always;

        # keepalive_time 2h;
        keepalive_timeout 30s;
        keepalive_requests 256;
        grpc_socket_keepalive on;

        # 实践级配置
        grpc_buffer_size 100m;
        grpc_read_timeout 3m;
        grpc_send_timeout 2m;
        grpc_set_header Host $host;
        grpc_set_header X-Real-IP $remote_addr;
        grpc_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        grpc_pass grpc://127.0.0.1:33322;
    }
}
```

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

[^grpc-example]: [如何在V2Ray中，配置gRPC作为传输方式 - Pylab.ME](https://pylab.me/blog/post/929d18d8-1b90-47cf-82ce-1a4e75e05417)  
[^meek-example]: [Example of V2Ray with meek](https://cscot.pages.dev/2023/05/31/v2ray-meek/)
[^v5view]: [v5.7.0 User Preview](https://github.com/v2fly/v2ray-core/discussions/2549)  
[^v5example]: [client.jsonv5.json](https://gist.github.com/xiaokangwang/b8f3a77780cae99eba68e7b127522883)  
[^grpc-fallback]: [关于添加**gRPC**回落的具体探讨 · v2fly/v2ray-core · Discussion #1625](https://github.com/v2fly/v2ray-core/discussions/1625)
[^grpc-interruption]: [什么套用 cloudflare grpc 会断流](https://github.com/v2fly/v2ray-core/discussions/1174)
