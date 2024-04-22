# IPv6 防火墙配置

## 获取不变后缀

### EUI-64

**Linux**:

```shell
sudo ifconfig
```

**配置Netplan**

修改 /etc/netplan 内的yaml文件

```
network:
  version: 2
  ethernets:
    enp0s3:
      ipv6-privacy: off
      ipv6-address-generation: eui64
  renderer: NetworkManage
```

sudo vim /etc/NetworkManager/system-connections/NET_NAME

```toml
[ipv6]
#addr-gen-mode=stable-privacy
addr-gen-mode=eui64
```

`systemctl restart NetworkManager` 重启服务

**取消临时ipv6地址**

修改文件 /etc/sysctl.d/10-ipv6-privacy.conf 执行 `sysctl -p`

```shell
# set zero,将这两个值设置为0
net.ipv6.conf.all.use_tempaddr = 0
net.ipv6.conf.default.use_tempaddr = 0
```

[ubuntu20 ipv6使用eui-64地址并关闭临时地址.md](https://gist.github.com/wanyvic/50405c94c06fe77f45331d9a11e41044#file-ubuntu20-ipv6-eui-64-md)  
[Linux_ipv6_无状态_设置为_eui64_有状态ipv6更改后缀 - osnosn - 博客园 (cnblogs.com)](https://www.cnblogs.com/osnosn/p/11396868.html)  
[networking - How to configure ipv6 with eui-64 interface id on ubuntu 18.04? - Ask Ubuntu](https://askubuntu.com/questions/1237785/how-to-configure-ipv6-with-eui-64-interface-id-on-ubuntu-18-04)  
[YAML configuration - Netplan documentation](https://netplan.readthedocs.io/en/latest/netplan-yaml/)  

**Windows**

```powershell
set-netipv6protocol -RandomizeIdentifiers Disabled  # Windows 默认不使用 EUI-64，启用它
ipconfig /all
```

1. 找到一个 IP 地址，它应该类似于 `2001:2002:2003:2004:****:**ff:fe**:****`，它就是该设备的 EUI-64 地址。
2. 记下 `****:**ff:fe**:****` 的部分，**下文假设它是** `1:20ff:fe77:2077`。
3. 验证 EUI-64 地址（可选）：参见 [通过EUI-64自动生成IPv6地址和IPv6链路本地地址（Link-Local Address） | CCIE 工程师社区](https://ccie.lol/knowledge-base/ipv6-use-eui-64-convert-link-local-address/)。

## 配置防火墙

向 OpenWrt 添加一条通信规则（访问 `cgi-bin/luci/admin/network/firewall/rules`）：

- 协议：`TCP 和 UDP`
- 源区域：`wan` (包含 wan, wan6)
- 目标区域：`lan`
- 目标地址：
  - 使用 EUI-64 或 DHCPv6：`::<需要暴露的主机的后缀>/::ffff:ffff:ffff:ffff`，如 `::1:20ff:fe77:2077/::ffff:ffff:ffff:ffff` 或 `::a1cd/::ffff:ffff:ffff:ffff`（如果子网大小不是 `/64`，请自行改变掩码）
  - 使用临时地址：留空（注意：这会导致其他主机一并暴露，请避免同时留空目标端口）
- 目标端口：
  - 暴露特定端口：`<需要暴露的端口或端口范围>`
  - 整台主机暴露：留空
- 操作：`接受`
- 高级设置
  - 限制地址类型：`仅 IPv6`
- 其余维持默认
  - 特别提醒：源端口留空，只填目标端口

## 配置 DDNS

```shell
CURRENT_IP=$(curl -s ipv6.ip.sb)
DNS_RECORD=<域名>
ZONE_ID=<Zone ID>
DNS_ID=<DNS 记录 ID>
TOKEN=<API token>
if [ "$(cat /run/current_ip 2>/dev/null)" != "$CURRENT_IP" ]; then
        echo $CURRENT_IP > /run/current_ip
        curl -s \
             -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$DNS_ID" \
             -H "Content-Type:application/json" \
             -H "Authorization: Bearer $TOKEN" \
             --data '{"type":"AAAA","name":"'$DNS_RECORD'","content":"'$CURRENT_IP'","ttl":1,"proxied":false}'
fi
```

### 定时执行

#### 用 crontab

```
crontab -e
```

增加一行如下，注意替换 `/path/to/script/`。示例为每分钟执行一次，如需修改，可参考 [crontab.guru](https://crontab.guru/)。

```
* * * * * /path/to/script/setDNS.sh
```

#### 使用 systemd

**setDNS.service**

放置到 `/etc/systemd/system/` 下，注意替换 `/path/to/script/`。

```
[Unit]
Description=check IPv6 address and set DNS record

[Service]
ExecStart=/bin/sh /path/to/script/setDNS.sh
```

**setDNS.timer**

放置到 `/etc/systemd/system/` 下。

```
[Unit]
Description=monitor IPv6 address and set DNS record minutely

[Timer]
OnBootSec=1min
OnUnitActiveSec=1min

[Install]
WantedBy=timers.target
```

即时启动并添加到开机启动。

```
sudo systemctl daemon-reload
sudo systemctl start setDNS.timer
sudo systemctl enable setDNS.timer
```

[正确地配置 IPv6 防火墙和 DDNS 以在公网访问设备 | 绒布地球 (rongrongbq.moe)](https://rongrongbq.moe/2021/08/firewall-and-DDNS-settings-for-IPv6/)  
[IPv6 地址规划与分配——全球可路由地址](https://www.ipv6-cn.com/tutorials/ipv6-address-allocation-n-assignment.html)  
[jeessy2/ddns-go: Simple and easy to use DDNS](https://github.com/jeessy2/ddns-go)  
