# Router Config

## Example

### Meek

#### Service 

config file `/usr/local/etc/v2ray/config.json` [^meek-example]

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
