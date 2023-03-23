---

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

## 引用

[如何禁用HomeBrew 自动更新](https://juejin.cn/post/6931189341150674958)  

[macOS/Linux 环境变量设置- 知乎](https://zhuanlan.zhihu.com/p/25976099)  
