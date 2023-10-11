---
order: 0
---

# Mac常用软件

| 名称                  | 功能          | 下载                                                         |
| --------------------- | ------------- | ------------------------------------------------------------ |
| Syntax Highlight      | 快捷预览      | [SourceCodeSyntaxHighlight](https://github.com/sbarex/SourceCodeSyntaxHighlight)  <br/>`brew install --cask syntax-highlight ` |
| Cursor                | 代码提示      | [https://www.cursor.so/](https://www.cursor.so/)             |
| Android File Transfer | 文件管理      | [https://www.android.com/filetransfer/](https://www.android.com/filetransfer/) |
| Synergy               | 键鼠控制      | [https://symless.com/synergy](https://symless.com/synergy)   |
| MAS                   | Mac App Store | `brew install mas`<br/>[终端上的Mac App Store「mas」让应用的安装与更新无比轻松](https://zhuanlan.zhihu.com/p/35971380) |
| ohmyzsh               | shell 增强    | [https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) |
| Mounty                | NTFS读取      | `brew cask install mounty`<br/>[Mounty for NTFS](https://mounty.app) |

### ohmyzsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 环境配置

### 加载顺序

#### bash

`/etc/profile`,`/etc/bashrc`,`/etc/paths`,`/etc/paths.d/`,`~/.bash_profile`

#### zsh

`/etc/profile`,`/etc/zshrc`,`/etc/paths`,`/etc/paths.d/`,`~/.zshrc`

#### 查看配置

PATH `echo $PATH`

### 我的配置

```sh
# Go
# GOROOT=/usr/local/Cellar/go/1.12/libexec
# export GOROOT=/usr/local/Cellar/go/1.12/libexec
# export GOPATH=~/go
# export GOBIN=$GOPATH/bin
# export PATH=$PATH:$GOBIN:$GOROOT/bin
# 禁用homebrew自动更新
export HOMEBREW_NO_AUTO_UPDATE=1
export HOMEBREW_NO_INSTALL_CLEANUP=1
export PATH=/usr/local/sbin:$PATH


# export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home
# export JAVA_HOME=~/Library/Java/JavaVirtualMachines/corretto-1.8.0_362/Contents/Home
export JAVA_HOME=~/Library/Java/JavaVirtualMachines/corretto-11.0.18/Contents/Home
# export JAVA_HOME=~/Library/Java/JavaVirtualMachines/corretto-17.0.6/Contents/Home
# export JAVA_HOME=~/Library/Java/JavaVirtualMachines/openjdk-19.0.2/Contents/Home
export CLASSPATH=$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH
export GRADLE_USER_HOME=~/.gradle

# Android
export ANDROID_HOME=~/Library/Android/sdk
# export ANDROID_SDK_ROOT=~/.android
export PATH=$PATH:$GRADLE_USER_HOME/shell/bin:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$JAVA_HOME/bin:$JAVA_HOME/jre/bin

# Flutter
export PUB_CACHE=~/.pub-cache
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export FLUTTER_HOME=~/Library/flutter
export FLUTTER_ROOT=$FLUTTER_HOME
export DART_HOME=$FLUTTER_HOME/bin/cache/dart-sdk
export PATH=$PATH:$FLUTTER_HOME/bin:$DART_HOME/bin:$HOME/.pub-cache/bin

alias idea-ce="open -a /Applications/IntelliJ\ IDEA\ CE.app"
```

## 压缩解压

```shell
# 压缩 tar.gz | tgz
# 命令前添加 COPYFILE_DISABLE=1 
tar --exclude '.DS_Store' --exclude '__MACOSX' -cvzf xxxarchive.tar.gz xxxarchive
# 解压
tar -xvf xxxarchive.tar.gz
```



## 输入法

[RIME | 中州韵输入法引擎](https://rime.im/)

Mac [鼠须管 Squirrel](https://github.com/rime/squirrel/releases/latest)

Win [小狼毫 Weasel](https://github.com/rime/weasel/releases/latest)

Linux [fcitx-rime](https://github.com/fcitx/fcitx-rime)，[ibus-rime](https://github.com/rime/home/wiki/RimeWithIBus)

Android [同文 Tongwen](https://github.com/osfans/trime)

在线 [My RIME](https://github.com/LibreService/my_rime)

## 文件备份

[文件备份还能怎么玩？试试这条命令](https://sspai.com/post/41967)

```bash
# rsync -av [源文件夹路径] [备份路径]
# rsync -av [源文件夹路径] [备份路径] --delete
```

[ 添加Mac的Time Machine备份到smb网络硬盘（windows 共享文件夹）](https://www.douban.com/note/614980869/)

```bash
sudo tmutil setdestination -p /Volumes/backup/
```

## 下载

[除了会员，别无选择？6 款 Mac 下载工具帮你加速](https://sspai.com/post/41174)

`Folx 5`、`FDM`、`Leech 3`、`uTorrent`、`Transmission`、`Aria2`


## Dnsmasq

```text
brew install dnsmasq
vim /usr/local/etc/resolv.dnsmasq.conf
vim /usr/local/etc/dnsmasq.conf
# /usr/local/etc/dnsmasq.d/*
# 清除DNS缓存
sudo killall -HUP mDNSResponder
# 重启
sudo brew services stop dnsmasq
sudo brew services start dnsmasq
sudo launchctl stop homebrew.mxcl.dnsmasq
sudo launchctl start homebrew.mxcl.dnsmasq
```

### 自定义解析

`/usr/local/etc/dnsmasq.d/my.address.conf`

```text
# 加速GitHub访问
address=/github.com/192.30.253.112
address=/github.com/192.30.253.113
```

[ipaddress ip-lookup](https://www.ipaddress.com/ip-lookup)  
[dnsmasq-china-list](https://github.com/felixonmars/dnsmasq-china-list)  
[利用Dnsmasq 部署DNS 服务- 运维之美](https://www.hi-linux.com/posts/30947.html)  
[Mac上用dnsmasq配置DNS服务器](https://blog.csdn.net/lovenjoe/article/details/51210937)


## 预览增强

[增强 Mac「预览」功能（QuickLook）的教程](https://sspai.com/31927)  
[QuickLookPlugins.com](http://www.quicklookplugins.com/)  

## 黑苹果

[国光的黑苹果安装教程](https://apple.sqlsec.com/3-准备工作/)

## 系统历史版本

[如何下载和安装 macOS](https://support.apple.com/zh-cn/HT211683)  

[macOS Ventura 13](https://apps.apple.com/cn/app/macos-ventura/id1638787999?mt=12)  
[macOS Monterey 12](https://apps.apple.com/cn/app/macos-monterey/id1576738294?mt=12)  
[macos-big-sur 11](https://apps.apple.com/cn/app/macos-big-sur/id1526878132?mt=12)   
[macos-catalina 10.15](https://apps.apple.com/cn/app/macos-catalina/id1466841314?mt=12) 
[macos-mojave 10.14](https://apps.apple.com/cn/app/macos-mojave/id1398502828?mt=12)  
[macos-high-sierra 10.13](https://apps.apple.com/cn/app/macos-high-sierra/id1246284741?mt=12)  
[macos-sierra 10.12](https://itunes.apple.com/cn/app/macos-sierra/id1127487414?ls=1&mt=12)  
[macos-sierra 10.12.dmg](http://updates-http.cdn-apple.com/2019/cert/061-39476-20191023-48f365f4-0015-4c41-9f44-39d3d2aca067/InstallOS.dmg)  


## 参考

[如何禁用HomeBrew 自动更新](https://juejin.cn/post/6931189341150674958)  

[macOS/Linux 环境变量设置- 知乎](https://zhuanlan.zhihu.com/p/25976099)  
