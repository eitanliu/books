# OpenWrt

如何获取刷机包 [https://openwrt.org/toh/start](https://openwrt.org/toh/start)

### factory与sysupdate区别

factory原厂固件、sysupgrade固件，TTL救砖的时候就不能用sysupgrade[^factory-sysupdate-diff] 。sysupgrade不包含用户数据分区的，但是factory是带的  [^factory-sysupdate-diff2]。有一个公式：sysupgrade.bin+空闲空间+系统的配置空间=factory.bin的大小。

sysupgrade替换linux内核和squash文件系统，擦除整个jffs2部分。能保留配置文件，但不能保留二进制安装文件。几种sysupgrade方法的更新方法为：

```shell
sysupgrade -v /tmp/openwrt-ar71xx-generic-wzr-hp-ag300h-squashfs-sysupgrade.bin
mtd -r write /tmp/openwrt-ar71xx-generic-wzr-hp-ag300h-squashfs-sysupgrade.bin firmware
nc -l -p 1234 | mtd write – firmware
```

## 救砖

[【U-Boot】U-Boot 刷机方法大全-OPENWRT专版](https://www.right.com.cn/forum/thread-154561-1-1.html)

[UBOOT-TTL小米路由器救砖或刷机指南（R3P为例) - 不l明l白](https://www.jianshu.com/p/646c98a0a1b4)

[嵌入式Linux--U-Boot（五）NAND命令使用原创](https://blog.csdn.net/qq_28877125/article/details/111085145)

[uboot常用命令详解- 一本书的伤痕](https://www.cnblogs.com/shangbolei/p/4376115.html)

### MiWifi 3Pro

MIPS 1004Kc

https://openwrt.org/toh/xiaomi/mi_router_3_pro

[记小米路由器Pro（R3P）刷机openwrt、潘多拉](https://blog.csdn.net/debj031634/article/details/105823351)

[X-Wrt 基于OpenWrt项目易用性改进](https://downloads.x-wrt.com/rom/) 搜索：Xiaomi Mi Router 3 Pro

启动U盘刷机方法 [^r3p-uboot]

启动官方U盘刷机有两个方法，一是kernel启动过程侦测按下**复位键**，二是kernel启动过程发现**双系统**都失效，后者需要事先设置(99楼)或者u-boot配合，但pb-boot/Breed都不配合设置u-boot环境变量，所以kernel不断通知u-boot启动另一个kernel，但pb-boot/Breed仍继续启动同一个kernel，导致无限重启

pb-boot固定从kernel0 (=sys1) 地址 (0xbc200000) 载入固件，官方u-boot和Breed则可以选择从kernel1 (=sys2) 地址 (0xbc600000) 载入固件，所以刷潘多拉之前要先设置

```shell
1. flag_last_success=0 #(从kerenl0启动)
2. flag_try_sys2_failed=1 #(kernel1+rootfs1失效)
```

而刷OpenWrt和老毛子之前要先设置

```shell
1. flag_last_success=1 #(从kerenl1启动)
2. flag_try_sys1_failed=1 #(kernel0+rootfs0失效)
```

如此只要执行官方kernel且rootfs为空，就会红灯闪烁，等待按下复位键，系统自动执行U盘刷机脚本 (/bin/usb_recovery.sh)

按下**复位键**的时机很重要，因为pb-boot/Breed也会侦测复位键，小米路由器上电前按下复位键则会中止pb-boot/Breed

刷第三方固件之前如果没有设置好u-boot环境变量，那麽也可以安装 uboot-envtools 插件

[^r3p-uboot]: [https://www.right.com.cn/forum/forum.php?mod=redirect&goto=findpost&ptid=701501&pid=4251932](https://www.right.com.cn/forum/forum.php?mod=redirect&goto=findpost&ptid=701501&pid=4251932)

## 升级配置

```
/etc/config/ddns
/etc/config/dhcp
/etc/config/firewall
/etc/config/network
/etc/config/wireless
/etc/config/xray_fw4
/etc/config/luci_v2ray
```



## 镜像配置

科技大学：[https://downloads.openwrt.org/releases](https://downloads.openwrt.org/releases)

阿里云：[https://mirrors.aliyun.com/openwrt/](https://mirrors.aliyun.com/openwrt/)

腾讯：[http://mirrors.cloud.tencent.com/openwrt/](http://mirrors.cloud.tencent.com/openwrt/)

### MiWifi Mini

```
src/gz openwrt_core https://downloads.openwrt.org/releases/22.03.5/targets/ramips/mt7620/packages
src/gz openwrt_base https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/base
src/gz openwrt_luci https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/luci
src/gz openwrt_packages https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/packages
src/gz openwrt_routing https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/routing
src/gz openwrt_telephony https://downloads.openwrt.org/releases/22.03.5/packages/mipsel_24kc/telephony
```

## MiWifi 3Pro

### 22.03.5

```
src/gz openwrt_core http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/targets/ramips/mt7621/packages
src/gz openwrt_base http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/packages/mipsel_24kc/base
src/gz openwrt_luci http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/packages/mipsel_24kc/luci
src/gz openwrt_packages http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/packages/mipsel_24kc/packages
src/gz openwrt_routing http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/packages/mipsel_24kc/routing
src/gz openwrt_telephony http://mirrors.cloud.tencent.com/openwrt/releases/22.03.5/packages/mipsel_24kc/telephony
```

### 23.05.0-rc3

```
src/gz x-wrt_core http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/targets/ramips/mt7621/packages
src/gz x-wrt_base http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/packages/mipsel_24kc/base
src/gz x-wrt_luci http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/packages/mipsel_24kc/luci
src/gz x-wrt_packages http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/packages/mipsel_24kc/packages
src/gz x-wrt_routing http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/packages/mipsel_24kc/routing
src/gz x-wrt_telephony http://mirrors.cloud.tencent.com/openwrt/releases/23.05.0-rc3/packages/mipsel_24kc/telephony

```

### snapshots

```
src/gz x-wrt_core https://openwrt.proxy.ustclug.org/snapshots/targets/ramips/mt7621/packages
src/gz x-wrt_base https://openwrt.proxy.ustclug.org/snapshots/packages/mipsel_24kc/base
src/gz x-wrt_luci https://openwrt.proxy.ustclug.org/snapshots/packages/mipsel_24kc/luci
src/gz x-wrt_packages https://openwrt.proxy.ustclug.org/snapshots/packages/mipsel_24kc/packages
src/gz x-wrt_routing https://openwrt.proxy.ustclug.org/snapshots/packages/mipsel_24kc/routing
src/gz x-wrt_telephony https://openwrt.proxy.ustclug.org/snapshots/packages/mipsel_24kc/telephony
```

## 相关软件

[PuTTy](https://www.putty.org)、[WinSCP](https://winscp.net/eng/download.php)、[TFTPd64 By Ph.Jounin](https://tftpd64.software.informer.com/download/)

## 常用功能

限速 `sqm`  `qos`多拨 `mwan`，文件共享`samba`，下载`transmission`，`aria2`

文件管理[filebrowser](https://github.com/filebrowser/filebrowser/releases/)， [luci-app-fileassistant](https://cowtransfer.com/s/8cfa3708916c4d) [^fileassistant]

实时网速 `luci-i18n-nlbwmon`，[wrtbwmon](https://github.com/brvphoenix/wrtbwmon)，[luci-app-wrtbwmon](https://github.com/brvphoenix/luci-app-wrtbwmon)

Clash [ShellClash](https://github.com/juewuy/ShellClash)，[OpenClash](https://github.com/vernesong/OpenClash)

V2Ray [openwrt-v2ray](https://github.com/kuoruan/openwrt-v2ray)，[luci-app-v2ray robberphex](https://github.com/robberphex/luci-app-v2ray)，[luci-app-v2ray kuoruan](https://github.com/kuoruan/luci-app-v2ray) [^luci-v2ray]

- 安装 `iptables-mod-tproxy`  `ip6tables-nft`  `dnsmasq-full`
- `/var/etc/luci_v2ray/v2ray.main.json`

Xray [openwrt-xray](https://github.com/yichya/openwrt-xray)，[luci-app-xray](https://github.com/yichya/luci-app-xray/releases)

- 安装 `ip6tables-nft`  `kmod-nft-tproxy`
- `/var/etc/xray/config.json`

[^factory-sysupdate-diff]: [openwrt的sysupgrade和factory固件的区别- id被吃了](https://www.cnblogs.com/simonid/p/6368111.html)  
[^factory-sysupdate-diff2]: [请教factory与sysupdate区别-OPENWRT专版](https://www.right.com.cn/forum/thread-73947-1-1.html)  
[^fileassistant]: [luci-app-fileassistantopenwrt](https://www.wanuse.com/2023/01/luci-app-fileassistantopenwrt.html)  
[^luci-v2ray]: [OpenWrt 如何安装 V2ray 和 V2ray安装Luci-V2ray配置详解](https://uzbox.com/tech/v2ray-for-openwrt.html)
