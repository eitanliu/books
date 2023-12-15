# 设置系统代理

## Linux

```shell
# 
```



## Mac

```shell
# networksetup -help
# Http
networksetup -getwebproxy <networkservice>
networksetup -setwebproxy <networkservice> <domain> <port number> <authenticated> <username> <password>
networksetup -setwebproxystate <networkservice> <on off>
# Https
networksetup -getsecurewebproxy <networkservice>
networksetup -setsecurewebproxy <networkservice> <domain> <port number> <authenticated> <username> <password>
networksetup -setsecurewebproxystate <networkservice> <on off>
# Socket
networksetup -getsocksfirewallproxy <networkservice>
networksetup -setsocksfirewallproxy <networkservice> <domain> <port number> <authenticated> <username> <password>
networksetup -setsocksfirewallproxystate <networkservice> <on off>
# AutoProxy
networksetup -getautoproxyurl <networkservice>
networksetup -setautoproxyurl <networkservice> <url>
networksetup -setautoproxystate <networkservice> <on off>
networksetup -getproxyautodiscovery <networkservice>
networksetup -setproxyautodiscovery <networkservice> <on off>
```

