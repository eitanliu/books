# Homebrew 管理应用

## 安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 常用命令

#### 安装卸载软件

* `brew --version` 或者 `brew -v` 显示brew版本信息
* `brew install <formula>` 安装指定软件
* `brew unistall <formula>` 卸载指定软件
* `brew list`  显示所有的已安装的软件
* `brew search text` 搜索本地远程仓库的软件，已安装会显示绿色的勾
* `brew search /text/` 使用正则表达式搜软件

#### 升级

* `brew update` 自动升级homebrew（从github下载最新版本）
* `brew outdated` 检测已经过时的软件
* `brew upgrade`  升级所有已过时的软件，即列出的以过时软件
* `brew upgrade <formula>` 升级指定的软件
* `brew pin <formula>` 禁止指定软件升级
* `brew unpin <formula>` 解锁禁止升级
* `brew upgrade --all` 升级所有的软件包，包括未清理干净的旧版本的包

#### 清理

homebrew再升级软件时候不会清理相关的旧版本

* `brew cleanup -n` 列出需要清理的内容
* `brew cleanup <formula>` 清理指定的软件过时包
* `brew cleanup` 清理所有的过时软件
* `brew unistall <formula>` 卸载指定软件
* `brew unistall <fromula> --force` 彻底卸载指定软件，包括旧版本

#### Homebrew Cask

* `brew search <app>` 搜索
* `brew install --cask <app>` 安装软件
* `brew uninstall --cask <app>` 卸载 软件
* `brew info --cask <app>` 相关信息
* `brew list --cask` 已安装列表
* `brew update --cask ` 更新

## 常用软件



```sh
brew install \
wechat \
qq \
google-chrome `# 浏览器`\
folx `# 下载工具` \
sogouinput `# 搜索输入法`\
neteasemusic `# 网易云音乐`\
cheatsheet `# 快捷键提示`\
tencent-lemon `# 清理软件` \
keka `# 压缩`\
maczip `# 压缩`\
jietu `# 截图`\
iina `# 播放器` \
eudic `# 翻译`\
typora `# markdow`\
\
alfred `# 快捷搜索`\
android-file-transfer `# 安卓文件管理` \
iterm2 `# 终端`\
visual-studio-code `# 编辑器`\
syntax-highlight `# 代码预览` \
postman `# 接口测试`\
sequel-ace `# mysql 客户端` \
qv2ray `# 代理`\
soundflower `# 虚拟声卡`\
```

### 备用软件

```shell
brew install \
firefox `# 浏览器` \
thunder `# 迅雷` \
baidunetdisk `# 百度网盘` \
`# 代理` \
v2rayx \
v2rayu \
v2ray-unofficial \
shadowsocksx-ng-r \
`# 编辑器` \
atom \
sublime-text \
vnc-viewer `# 远程控制`\
obs `# 录屏`\
skitch `# 截图`\
mplayerx `# 播放器`\
```

