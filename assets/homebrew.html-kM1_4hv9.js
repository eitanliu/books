import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c,b as a,d as s,a as i,e as o}from"./app-jg9BsSPf.js";const p={},r=o('<h1 id="homebrew-管理应用" tabindex="-1"><a class="header-anchor" href="#homebrew-管理应用" aria-hidden="true">#</a> Homebrew 管理应用</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="必要配置" tabindex="-1"><a class="header-anchor" href="#必要配置" aria-hidden="true">#</a> 必要配置</h2><h3 id="禁用自动更新" tabindex="-1"><a class="header-anchor" href="#禁用自动更新" aria-hidden="true">#</a> 禁用自动更新</h3><p>编辑添加 <code>~/.zshrc</code> 或 <code>~/.bashrc</code> <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 禁用自动升级所有软件</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">HOMEBREW_NO_AUTO_UPDATE</span><span class="token operator">=</span><span class="token number">1</span>\n<span class="token comment"># 禁用自动清理</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">HOMEBREW_NO_INSTALL_CLEANUP</span><span class="token operator">=</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><h4 id="安装卸载软件" tabindex="-1"><a class="header-anchor" href="#安装卸载软件" aria-hidden="true">#</a> 安装卸载软件</h4><ul><li><code>brew --version</code> 或者 <code>brew -v</code> 显示brew版本信息</li><li><code>brew install &lt;formula&gt;</code> 安装指定软件</li><li><code>brew unistall &lt;formula&gt;</code> 卸载指定软件</li><li><code>brew list</code> 显示所有的已安装的软件</li><li><code>brew search text</code> 搜索本地远程仓库的软件，已安装会显示绿色的勾</li><li><code>brew search /text/</code> 使用正则表达式搜软件</li></ul><h4 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h4><ul><li><code>brew update</code> 自动升级homebrew（从github下载最新版本）</li><li><code>brew outdated</code> 检测已经过时的软件</li><li><code>brew upgrade</code> 升级所有已过时的软件，即列出的以过时软件</li><li><code>brew upgrade &lt;formula&gt;</code> 升级指定的软件</li><li><code>brew pin &lt;formula&gt;</code> 禁止指定软件升级</li><li><code>brew unpin &lt;formula&gt;</code> 解锁禁止升级</li><li><code>brew upgrade --all</code> 升级所有的软件包，包括未清理干净的旧版本的包</li></ul><h4 id="清理" tabindex="-1"><a class="header-anchor" href="#清理" aria-hidden="true">#</a> 清理</h4><p>homebrew再升级软件时候不会清理相关的旧版本</p><ul><li><code>brew cleanup -n</code> 列出需要清理的内容</li><li><code>brew cleanup &lt;formula&gt;</code> 清理指定的软件过时包</li><li><code>brew cleanup</code> 清理所有的过时软件</li><li><code>brew unistall &lt;formula&gt;</code> 卸载指定软件</li><li><code>brew unistall &lt;fromula&gt; --force</code> 彻底卸载指定软件，包括旧版本</li></ul><h4 id="homebrew-cask" tabindex="-1"><a class="header-anchor" href="#homebrew-cask" aria-hidden="true">#</a> Homebrew Cask</h4><ul><li><code>brew search &lt;app&gt;</code> 搜索</li><li><code>brew install --cask &lt;app&gt;</code> 安装软件</li><li><code>brew uninstall --cask &lt;app&gt;</code> 卸载 软件</li><li><code>brew info --cask &lt;app&gt;</code> 相关信息</li><li><code>brew list --cask</code> 已安装列表</li><li><code>brew update --cask </code> 更新</li></ul><h2 id="常用软件" tabindex="-1"><a class="header-anchor" href="#常用软件" aria-hidden="true">#</a> 常用软件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token punctuation">\\</span>\nwechat <span class="token punctuation">\\</span>\nqq <span class="token punctuation">\\</span>\ngoogle-chrome <span class="token variable"><span class="token variable">`</span><span class="token comment"># 浏览器</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nfolx <span class="token variable"><span class="token variable">`</span><span class="token comment"># 下载工具</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nsogouinput <span class="token variable"><span class="token variable">`</span><span class="token comment"># 搜索输入法</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nneteasemusic <span class="token variable"><span class="token variable">`</span><span class="token comment"># 网易云音乐</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\ncheatsheet <span class="token variable"><span class="token variable">`</span><span class="token comment"># 快捷键提示</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\ntencent-lemon <span class="token variable"><span class="token variable">`</span><span class="token comment"># 清理软件</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nkeka <span class="token variable"><span class="token variable">`</span><span class="token comment"># 压缩</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nmaczip <span class="token variable"><span class="token variable">`</span><span class="token comment"># 压缩</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\njietu <span class="token variable"><span class="token variable">`</span><span class="token comment"># 截图</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\niina <span class="token variable"><span class="token variable">`</span><span class="token comment"># 播放器</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\neudic <span class="token variable"><span class="token variable">`</span><span class="token comment"># 翻译</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\ntypora <span class="token variable"><span class="token variable">`</span><span class="token comment"># markdow</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\n<span class="token punctuation">\\</span>\nalfred <span class="token variable"><span class="token variable">`</span><span class="token comment"># 快捷搜索</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nandroid-file-transfer <span class="token variable"><span class="token variable">`</span><span class="token comment"># 安卓文件管理</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\niterm2 <span class="token variable"><span class="token variable">`</span><span class="token comment"># 终端</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nvisual-studio-code <span class="token variable"><span class="token variable">`</span><span class="token comment"># 编辑器</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nsyntax-highlight <span class="token variable"><span class="token variable">`</span><span class="token comment"># 代码预览</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\npostman <span class="token variable"><span class="token variable">`</span><span class="token comment"># 接口测试</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nsequel-ace <span class="token variable"><span class="token variable">`</span><span class="token comment"># mysql 客户端</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nqv2ray <span class="token variable"><span class="token variable">`</span><span class="token comment"># 代理</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nsoundflower <span class="token variable"><span class="token variable">`</span><span class="token comment"># 虚拟声卡</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="备用软件" tabindex="-1"><a class="header-anchor" href="#备用软件" aria-hidden="true">#</a> 备用软件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token punctuation">\\</span>\nfirefox <span class="token variable"><span class="token variable">`</span><span class="token comment"># 浏览器</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nthunder <span class="token variable"><span class="token variable">`</span><span class="token comment"># 迅雷</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nbaidunetdisk <span class="token variable"><span class="token variable">`</span><span class="token comment"># 百度网盘</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\n<span class="token variable"><span class="token variable">`</span><span class="token comment"># 代理</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\nv2rayx <span class="token punctuation">\\</span>\nv2rayu <span class="token punctuation">\\</span>\nv2ray-unofficial <span class="token punctuation">\\</span>\nshadowsocksx-ng-r <span class="token punctuation">\\</span>\n<span class="token variable"><span class="token variable">`</span><span class="token comment"># 编辑器</span><span class="token variable">`</span></span> <span class="token punctuation">\\</span>\natom <span class="token punctuation">\\</span>\nsublime-text <span class="token punctuation">\\</span>\nvnc-viewer <span class="token variable"><span class="token variable">`</span><span class="token comment"># 远程控制</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nobs <span class="token variable"><span class="token variable">`</span><span class="token comment"># 录屏</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nskitch <span class="token variable"><span class="token variable">`</span><span class="token comment"># 截图</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\nmplayerx <span class="token variable"><span class="token variable">`</span><span class="token comment"># 播放器</span><span class="token variable">`</span></span><span class="token punctuation">\\</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">',22),d={class:"footnotes"},b={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},v={href:"https://cloud.tencent.com/developer/article/1729258",target:"_blank",rel:"noopener noreferrer"},k=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function m(h,f){const n=l("ExternalLinkIcon");return t(),c("div",null,[r,a("section",d,[a("ol",b,[a("li",u,[a("p",null,[a("a",v,[s("一日一技：如何防止Homebrew 自动升级和自动清理过期程序"),i(n)]),s(),k])])])])])}const _=e(p,[["render",m],["__file","homebrew.html.vue"]]);export{_ as default};