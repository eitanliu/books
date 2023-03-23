import{_ as l,W as o,X as r,Y as s,Z as n,$ as e,a0 as t,C as i}from"./framework-c8ebc670.js";const c={},p=s("h1",{id:"mac常用软件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mac常用软件","aria-hidden":"true"},"#"),n(" Mac常用软件")],-1),d=s("thead",null,[s("tr",null,[s("th",null,"名称"),s("th",null,"功能"),s("th",null,"下载")])],-1),h=s("td",null,"Syntax Highlight",-1),u=s("td",null,"快捷预览",-1),b={href:"https://github.com/sbarex/SourceCodeSyntaxHighlight",target:"_blank",rel:"noopener noreferrer"},m=s("br",null,null,-1),v=s("code",null,"brew install --cask syntax-highlight ",-1),_=s("td",null,"Cursor",-1),k=s("td",null,"代码提示",-1),f={href:"https://www.cursor.so/",target:"_blank",rel:"noopener noreferrer"},g=s("td",null,"Android File Transfer",-1),A=s("td",null,"文件管理",-1),x={href:"https://www.android.com/filetransfer/",target:"_blank",rel:"noopener noreferrer"},O=s("td",null,"Synergy",-1),H=s("td",null,"键鼠控制",-1),E={href:"https://symless.com/synergy",target:"_blank",rel:"noopener noreferrer"},T=s("td",null,"MAS",-1),M=s("td",null,"Mac App Store",-1),y=s("code",null,"brew install mas",-1),R=s("br",null,null,-1),L={href:"https://zhuanlan.zhihu.com/p/35971380",target:"_blank",rel:"noopener noreferrer"},w=s("td",null,"ohmyzsh",-1),$=s("td",null,"shell 增强",-1),S={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},J=s("td",null,"Mounty",-1),V=s("td",null,"NTFS读取",-1),z=s("code",null,"brew cask install mounty",-1),D=s("br",null,null,-1),P={href:"https://mounty.app",target:"_blank",rel:"noopener noreferrer"},C=t(`<h3 id="ohmyzsh" tabindex="-1"><a class="header-anchor" href="#ohmyzsh" aria-hidden="true">#</a> ohmyzsh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><h3 id="加载顺序" tabindex="-1"><a class="header-anchor" href="#加载顺序" aria-hidden="true">#</a> 加载顺序</h3><h4 id="bash" tabindex="-1"><a class="header-anchor" href="#bash" aria-hidden="true">#</a> bash</h4><p><code>/etc/profile</code>,<code>/etc/bashrc</code>,<code>/etc/paths</code>,<code>/etc/paths.d/</code>,<code>~/.bash_profile</code></p><h4 id="zsh" tabindex="-1"><a class="header-anchor" href="#zsh" aria-hidden="true">#</a> zsh</h4><p><code>/etc/profile</code>,<code>/etc/zshrc</code>,<code>/etc/paths</code>,<code>/etc/paths.d/</code>,<code>~/.zshrc</code></p><h4 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置" aria-hidden="true">#</a> 查看配置</h4><p>PATH <code>echo $PATH</code></p><h3 id="我的配置" tabindex="-1"><a class="header-anchor" href="#我的配置" aria-hidden="true">#</a> 我的配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Go</span>
<span class="token comment"># GOROOT=/usr/local/Cellar/go/1.12/libexec</span>
<span class="token comment"># export GOROOT=/usr/local/Cellar/go/1.12/libexec</span>
<span class="token comment"># export GOPATH=~/go</span>
<span class="token comment"># export GOBIN=$GOPATH/bin</span>
<span class="token comment"># export PATH=$PATH:$GOBIN:$GOROOT/bin</span>
<span class="token comment"># 禁用homebrew自动更新</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HOMEBREW_NO_AUTO_UPDATE</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HOMEBREW_NO_INSTALL_CLEANUP</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:<span class="token environment constant">$PATH</span>


<span class="token comment"># export JAVA_HOME=/Library/Java/JavaVirtualMachines/adoptopenjdk-11.jdk/Contents/Home</span>
<span class="token comment"># export JAVA_HOME=~/Library/Java/JavaVirtualMachines/corretto-1.8.0_362/Contents/Home</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=~</span>/Library/Java/JavaVirtualMachines/corretto-11.0.18/Contents/Home
<span class="token comment"># export JAVA_HOME=~/Library/Java/JavaVirtualMachines/corretto-17.0.6/Contents/Home</span>
<span class="token comment"># export JAVA_HOME=~/Library/Java/JavaVirtualMachines/openjdk-19.0.2/Contents/Home</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GRADLE_USER_HOME</span><span class="token operator">=~</span>/.gradle

<span class="token comment"># Android</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ANDROID_HOME</span><span class="token operator">=~</span>/Library/Android/sdk
<span class="token comment"># export ANDROID_SDK_ROOT=~/.android</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GRADLE_USER_HOME</span>/shell/bin:<span class="token variable">$ANDROID_HOME</span>/tools:<span class="token variable">$ANDROID_HOME</span>/tools/bin:<span class="token variable">$ANDROID_HOME</span>/platform-tools:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JAVA_HOME</span>/jre/bin

<span class="token comment"># Flutter</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PUB_CACHE</span><span class="token operator">=~</span>/.pub-cache
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PUB_HOSTED_URL</span><span class="token operator">=</span>https://pub.flutter-io.cn
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_STORAGE_BASE_URL</span><span class="token operator">=</span>https://storage.flutter-io.cn
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_HOME</span><span class="token operator">=~</span>/Library/flutter
<span class="token builtin class-name">export</span> <span class="token assign-left variable">FLUTTER_ROOT</span><span class="token operator">=</span><span class="token variable">$FLUTTER_HOME</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DART_HOME</span><span class="token operator">=</span><span class="token variable">$FLUTTER_HOME</span>/bin/cache/dart-sdk
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$FLUTTER_HOME</span>/bin:<span class="token variable">$DART_HOME</span>/bin:<span class="token environment constant">$HOME</span>/.pub-cache/bin

<span class="token builtin class-name">alias</span> idea-ce<span class="token operator">=</span><span class="token string">&quot;open -a /Applications/IntelliJ\\ IDEA\\ CE.app&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件备份" tabindex="-1"><a class="header-anchor" href="#文件备份" aria-hidden="true">#</a> 文件备份</h2>`,13),N={href:"https://sspai.com/post/41967",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># rsync -av [源文件夹路径] [备份路径]</span>
<span class="token comment"># rsync -av [源文件夹路径] [备份路径] --delete</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),F={href:"https://www.douban.com/note/614980869/",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> tmutil setdestination <span class="token parameter variable">-p</span> /Volumes/backup/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2>`,2),B={href:"https://sspai.com/post/41174",target:"_blank",rel:"noopener noreferrer"},G=t('<p><code>Folx 5</code>、<code>FDM</code>、<code>Leech 3</code>、<code>uTorrent</code>、<code>Transmission</code>、<code>Aria2</code></p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2>',2),j={href:"https://juejin.cn/post/6931189341150674958",target:"_blank",rel:"noopener noreferrer"},q={href:"https://zhuanlan.zhihu.com/p/25976099",target:"_blank",rel:"noopener noreferrer"};function W(K,X){const a=i("ExternalLinkIcon");return o(),r("div",null,[p,s("table",null,[d,s("tbody",null,[s("tr",null,[h,u,s("td",null,[s("a",b,[n("SourceCodeSyntaxHighlight"),e(a)]),n(),m,v])]),s("tr",null,[_,k,s("td",null,[s("a",f,[n("https://www.cursor.so/"),e(a)])])]),s("tr",null,[g,A,s("td",null,[s("a",x,[n("https://www.android.com/filetransfer/"),e(a)])])]),s("tr",null,[O,H,s("td",null,[s("a",E,[n("https://symless.com/synergy"),e(a)])])]),s("tr",null,[T,M,s("td",null,[y,R,s("a",L,[n("终端上的Mac App Store「mas」让应用的安装与更新无比轻松"),e(a)])])]),s("tr",null,[w,$,s("td",null,[s("a",S,[n("https://github.com/ohmyzsh/ohmyzsh"),e(a)])])]),s("tr",null,[J,V,s("td",null,[z,D,s("a",P,[n("Mounty for NTFS"),e(a)])])])])]),C,s("p",null,[s("a",N,[n("文件备份还能怎么玩？试试这条命令"),e(a)])]),U,s("p",null,[s("a",F,[n(" 添加Mac的Time Machine备份到smb网络硬盘（windows 共享文件夹）"),e(a)])]),I,s("p",null,[s("a",B,[n("除了会员，别无选择？6 款 Mac 下载工具帮你加速"),e(a)])]),G,s("p",null,[s("a",j,[n("如何禁用HomeBrew 自动更新"),e(a)])]),s("p",null,[s("a",q,[n("macOS/Linux 环境变量设置- 知乎"),e(a)])])])}const Z=l(c,[["render",W],["__file","mac-software.html.vue"]]);export{Z as default};
