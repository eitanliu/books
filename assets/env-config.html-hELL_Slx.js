import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as d,c as u,a as l,w as e,b as n,d as s,e as i}from"./app-R7eTC8f9.js";const v={},m=i(`<h1 id="开发环境配置" tabindex="-1"><a class="header-anchor" href="#开发环境配置" aria-hidden="true">#</a> 开发环境配置</h1><h2 id="获取和设置环境的方式" tabindex="-1"><a class="header-anchor" href="#获取和设置环境的方式" aria-hidden="true">#</a> 获取和设置环境的方式</h2><h3 id="获取注册表环境变量" tabindex="-1"><a class="header-anchor" href="#获取注册表环境变量" aria-hidden="true">#</a> 获取注册表环境变量</h3><p><strong>通用获取 <code>reg query</code></strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 获取用户环境</span>
reg query <span class="token string">&quot;HKCU\\Environment&quot;</span> <span class="token operator">/</span>v Path
<span class="token comment"># 获取系统环境</span>
reg query <span class="token string">&quot;HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment&quot;</span> <span class="token operator">/</span>v Path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PowerShell 获取的注册表变量</strong></p><p>获取的是转换后的实际路径地址，暂时没发现获取未转换的方式<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 详细信息</span>
<span class="token function">Get-ItemProperty</span> <span class="token operator">-</span>Path <span class="token string">&quot;HKCU:\\Environment&quot;</span> <span class="token operator">-</span>Name <span class="token string">&quot;Path&quot;</span>
<span class="token comment"># 只获取值</span>
<span class="token function">Get-ItemPropertyValue</span> <span class="token operator">-</span>Path <span class="token string">&quot;HKCU:\\Environment&quot;</span> <span class="token operator">-</span>Name <span class="token string">&quot;Path&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取运行环境变量" tabindex="-1"><a class="header-anchor" href="#获取运行环境变量" aria-hidden="true">#</a> 获取运行环境变量</h3><p>获取的环境变量都是转换后的实际路径地址，如果要修改新增建议使用注册通用表方式获取。</p>`,10),h=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},"# 获取全部环境变量"),s(`
`),n("span",{class:"token function"},"ls"),s(` env:
`),n("span",{class:"token function"},"Get-ChildItem"),s(` Env:
`),n("span",{class:"token comment"},"# 获取单个环境变量"),s(`
`),n("span",{class:"token function"},"ls"),s(` env:Path
`),n("span",{class:"token variable"},"$env"),s(`:Path
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`REM 获取全部环境变量
set
REM 获取单个环境变量
set Path
echo %Path%
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=i('<h3 id="设置环境变量" tabindex="-1"><a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a> 设置环境变量</h3><p>通用设置环境变量 <code>setx</code> ，会根据内容是否带有 <code>%Name%</code> 自动判断保存类型， <code>/M</code> 表示系统变量。<br> PowerShell <code>[environment]::SetEnvironmentvariable</code> PowerShell 中设置的环境，必须是绝对路径不能带有 <code>%Name%</code> 的拼接，最终注册表类型是<code>REG_SZ </code></p>',2),b=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("setx __MY_DEVSOFTWARE "),n("span",{class:"token string"},'"D:\\Develop"'),s(),n("span",{class:"token operator"},"/"),s(`M
`),n("span",{class:"token comment"},"# 设置用户环境变量"),s(`
`),n("span",{class:"token namespace"},"[environment]"),s("::SetEnvironmentvariable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"__MY_DEVSOFTWARE"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"D:\\Develop"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"User"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token namespace"},"[System.Environment]"),s("::SetEnvironmentVariable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"__MY_DEVSOFTWARE"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"D:\\Develop"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.EnvironmentVariableTarget]"),s("::User"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"# 设置系统环境变量"),s(`
`),n("span",{class:"token namespace"},"[environment]"),s("::SetEnvironmentvariable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"__MY_DEVSOFTWARE"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"D:\\Develop"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Machine"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token namespace"},"[System.Environment]"),s("::SetEnvironmentVariable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"__MY_DEVSOFTWARE"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"D:\\Develop"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token namespace"},"[System.EnvironmentVariableTarget]"),s("::Machine"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`setx __MY_DEVSOFTWARE "D:\\Develop" /M
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),g=i('<h3 id="设置注册表环境变量" tabindex="-1"><a class="header-anchor" href="#设置注册表环境变量" aria-hidden="true">#</a> 设置注册表环境变量</h3><p><strong>PowerShell <code>New-ItemProperty</code> 添加注册表</strong></p><p>可通过 <code>-PropertyType</code> 指定添加的属性类型。 此参数的可接受值为：</p><ul><li>String：指定以 null 结尾的字符串。 用于 REG_SZ 值。</li><li>ExpandString：指定一个以 null 结尾的字符串，该字符串包含对环境变量的未扩展的引用，这些引用会在检索值时扩展。 用于 REG_EXPAND_SZ 值。</li><li>Binary：指定采用任意格式的二进制数据。 用于 REG_BINARY 值。</li><li>DWord：指定一个 32 位的二进制数字。 用于 REG_DWORD 值。</li><li>MultiString：指定一个包含以 null 结尾的字符串的数组，该数组以两个 null 字符结尾。 用于 REG_MULTI_SZ 值。</li><li>Qword：指定一个 64 位的二进制数字。 用于 REG_QWORD 值。</li><li>Unknown：指示不受支持的注册表数据类型，例如 REG_RESOURCE_LIST 值。</li></ul>',4),A=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},"# 设置用户环境变量"),s(`
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"ANDROID_HOME_ROOT"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\Android\\Sdk"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token comment"},"# 设置系统环境变量"),s(`
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"JAVA_HOME"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\JDK\\current"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`# 设置用户环境变量
reg add HKCU\\Environment /v ANDROID_HOME_ROOT /t REG_EXPAND_SZ /d ^%__MY_DEVSOFTWARE^%\\Android\\Sdk /f
# 设置系统环境变量
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment" /v ANDROID_HOME_ROOT /t REG_EXPAND_SZ /d ^%__MY_DEVSOFTWARE^%\\JDK\\current /f
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"常用命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#常用命令","aria-hidden":"true"},"#"),s(" 常用命令")],-1),D=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},"# Test-Path 来检查注册表项或属性"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-not"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"Test-Path"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKLM:\\SOFTWARE\\YourKey"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"# 在脚本块内创建变量 -Scope 限定作用域"),s(`
`),n("span",{class:"token function"},"New-Variable"),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"MyVariable"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"MyValue"'),s(),n("span",{class:"token operator"},"-"),s(`Scope Script
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`REM refreshenv 命令重新加载环境变量
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=i(`<h2 id="常用开发工具配置" tabindex="-1"><a class="header-anchor" href="#常用开发工具配置" aria-hidden="true">#</a> 常用开发工具配置</h2><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>setx __MY_DEVSOFTWARE &quot;D:\\Develop&quot; /M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h3>`,3),M=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token variable"},"$env"),s(":_OldPath = "),n("span",{class:"token punctuation"},"("),s("reg query "),n("span",{class:"token string"},`'reg query "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment'`),s(),n("span",{class:"token operator"},"/"),s("v Path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`n"'),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\s*Path\\s*REG_EXPAND_SZ\\s*(.+)'"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
setx Path `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':_OldPath;%__MY_DEVSOFTWARE%\\Git\\cmd"')]),s(),n("span",{class:"token operator"},"/"),s(`M
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`for /f "tokens=3,*" %i in ('reg query "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldPath=%i"
setx Path %_OldPath%;^%__MY_DEVSOFTWARE^%\\Git\\cmd /M
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=i(`<h3 id="windows-kit" tabindex="-1"><a class="header-anchor" href="#windows-kit" aria-hidden="true">#</a> Windows Kit</h3><div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>REM D:\\Windows Kits\\10\\Windows Performance Toolkit\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><p><strong>设置到用户环境</strong></p>`,4),x=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"JAVA_HOME"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"%USERPROFILE%\\.jdks\\temurin-17.0.9"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"CLASSPATH"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token variable"},"$env"),s(":_OldUPath = "),n("span",{class:"token punctuation"},"("),s("reg query "),n("span",{class:"token string"},"'HKCU\\Environment'"),s(),n("span",{class:"token operator"},"/"),s("v Path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`n"'),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\s*Path\\s*REG_EXPAND_SZ\\s*(.+)'"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"Path"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},[s('"%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;'),n("span",{class:"token variable"},"$env"),s(':_OldUPath"')]),s(),n("span",{class:"token operator"},"-"),s(`Force
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`setx JAVA_HOME ^%USERPROFILE^%\\.jdks\\temurin-17.0.9
setx CLASSPATH .;^%JAVA_HOME^%\\lib\\dt.jar;^%JAVA_HOME^%\\lib\\tools.jar;
for /f "tokens=3,*" %i in ('reg query "HKCU\\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldUPath=%i"
setx Path ^%JAVA_HOME^%\\bin;^%JAVA_HOME^%\\jre\\bin;%_OldUPath%
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,[n("strong",null,"设置到系统环境")],-1),H=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"JAVA_HOME"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\JDK\\current"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"CLASSPATH"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},'".;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;"'),s(),n("span",{class:"token operator"},"-"),s(`Force
`),n("span",{class:"token variable"},"$env"),s(":_OldPath = "),n("span",{class:"token punctuation"},"("),s("reg query "),n("span",{class:"token string"},`'reg query "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment'`),s(),n("span",{class:"token operator"},"/"),s("v Path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`n"'),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\s*Path\\s*REG_EXPAND_SZ\\s*(.+)'"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token function"},"New-ItemProperty"),s(),n("span",{class:"token operator"},"-"),s("Path "),n("span",{class:"token string"},'"HKCU:\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment"'),s(),n("span",{class:"token operator"},"-"),s("Name "),n("span",{class:"token string"},'"Path"'),s(),n("span",{class:"token operator"},"-"),s("PropertyType "),n("span",{class:"token string"},'"ExpandString"'),s(),n("span",{class:"token operator"},"-"),s("Value "),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':_OldPath;%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;"')]),s(),n("span",{class:"token operator"},"-"),s(`Force
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`mklink /D "%__MY_DEVSOFTWARE%\\JDK" "%USERPROFILE%\\.jdks\\temurin-17.0.9"
setx JAVA_HOME ^%__MY_DEVSOFTWARE^%\\JDK\\current /M
setx CLASSPATH .;^%JAVA_HOME^%\\lib\\dt.jar;^%JAVA_HOME^%\\lib\\tools.jar; /M
for /f "tokens=3,*" %i in ('reg query "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldPath=%i"
setx Path %_OldPath%;^%JAVA_HOME^%\\bin;^%JAVA_HOME^%\\jre\\bin; /M
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h3",{id:"android",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#android","aria-hidden":"true"},"#"),s(" Android")],-1),V=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},"# SDK 路径"),s(`
setx ANDROID_SDK_ROOT `),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\Android\\Sdk"'),s(`
`),n("span",{class:"token comment"},'# setx ANDROID_HOME "%ANDROID_SDK_ROOT%"'),s(`
`),n("span",{class:"token comment"},'# setx ANDROID_ROOT "%__MY_DEVSOFTWARE%"'),s(`
`),n("span",{class:"token comment"},'# setx ANDROID_NDK "%ANDROID_SDK_ROOT%\\ndk-bundle"'),s(`
`),n("span",{class:"token comment"},"# 模拟器路径"),s(`
`),n("span",{class:"token comment"},'# set ANDROID_SDK_HOME "%USERPROFILE%\\.android"'),s(`
`),n("span",{class:"token variable"},"$env"),s(":_OldUPath = "),n("span",{class:"token punctuation"},"("),s("reg query "),n("span",{class:"token string"},"'HKCU\\Environment'"),s(),n("span",{class:"token operator"},"/"),s("v Path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`n"'),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\s*Path\\s*REG_EXPAND_SZ\\s*(.+)'"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
setx Path `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':_OldUPath;%ANDROID_SDK_ROOT%\\tools;%ANDROID_SDK_ROOT%\\platform-tools"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`REM SDK 路径
setx ANDROID_SDK_ROOT ^%__MY_DEVSOFTWARE^%\\Android\\Sdk
REM setx ANDROID_HOME ^%ANDROID_SDK_ROOT^%
REM setx ANDROID_ROOT ^%ANDROID_SDK_ROOT^%
REM setx ANDROID_NDK ^%ANDROID_SDK_ROOT^%\\ndk\\current
REM 模拟器路径
REM set ANDROID_SDK_HOME ^%USERPROFILE^%\\.android
for /f "tokens=3,*" %i in ('reg query "HKCU\\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldUPath=%i"
setx Path %_OldUPath%;^%ANDROID_SDK_ROOT^%\\tools;^%ANDROID_SDK_ROOT^%\\platform-tools
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h3",{id:"flutter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flutter","aria-hidden":"true"},"#"),s(" Flutter")],-1),L=n("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[n("span",{class:"token comment"},'# mklink /D "%__MY_DEVSOFTWARE%\\.pub-cache" "%LOCALAPPDATA%\\Pub\\Cache"'),s(`

setx PUB_HOSTED_URL `),n("span",{class:"token string"},'"https://pub.flutter-io.cn"'),s(`
setx FLUTTER_STORAGE_BASE_URL `),n("span",{class:"token string"},'"https://storage.flutter-io.cn"'),s(`

setx FLUTTER_HOME `),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\flutter"'),s(`
setx FLUTTER_HOME_DART `),n("span",{class:"token string"},'"%FLUTTER_HOME%\\bin\\cache\\dart-sdk"'),s(`
setx FLUTTER_PUB_CACHE `),n("span",{class:"token string"},'"%__MY_DEVSOFTWARE%\\.pub-cache"'),s(`
setx PUB_CACHE `),n("span",{class:"token string"},'"%FLUTTER_PUB_CACHE%"'),s(`
`),n("span",{class:"token comment"},'# setx FLUTTER_ROOT "%FLUTTER_HOME%"'),s(`
`),n("span",{class:"token comment"},'# setx DART_HOME "%FLUTTER_HOME_DART%"'),s(`

`),n("span",{class:"token variable"},"$env"),s(":_OldUPath = "),n("span",{class:"token punctuation"},"("),s("reg query "),n("span",{class:"token string"},`'reg query "HKCU\\Environment'`),s(),n("span",{class:"token operator"},"/"),s("v Path"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s("split "),n("span",{class:"token string"},'"`n"'),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"Where-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$_"),s(),n("span",{class:"token operator"},"-match"),s(),n("span",{class:"token string"},"'\\s*Path\\s*REG_EXPAND_SZ\\s*(.+)'"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"|"),s(),n("span",{class:"token function"},"ForEach-Object"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token variable"},"$Matches"),n("span",{class:"token punctuation"},"["),s("1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"}"),s(`
setx Path `),n("span",{class:"token string"},[s('"'),n("span",{class:"token variable"},"$env"),s(':_OldUPath;%FLUTTER_HOME%\\bin;%FLUTTER_HOME_DART%\\bin;%FLUTTER_PUB_CACHE%\\bin"')]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-bat line-numbers-mode","data-ext":"bat"},[n("pre",{class:"language-bat"},[n("code",null,`REM mklink /D "%__MY_DEVSOFTWARE%\\.pub-cache" "%LOCALAPPDATA%\\Pub\\Cache"

setx PUB_HOSTED_URL "https://pub.flutter-io.cn"
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn"

setx FLUTTER_HOME ^%__MY_DEVSOFTWARE^%\\flutter
setx FLUTTER_HOME_DART ^%FLUTTER_HOME^%\\bin\\cache\\dart-sdk
setx FLUTTER_PUB_CACHE ^%__MY_DEVSOFTWARE^%\\.pub-cache
setx PUB_CACHE ^%FLUTTER_PUB_CACHE^%
REM setx FLUTTER_ROOT ^%FLUTTER_HOME^%
REM setx DART_HOME ^%FLUTTER_HOME_DART^%

for /f "tokens=3,*" %i in ('reg query "HKCU\\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do if not defined _OldUPath set "_OldUPath=%i"
setx Path %_OldUPath%;^%FLUTTER_HOME^%\\bin;^%FLUTTER_HOME_DART^%\\bin;^%FLUTTER_PUB_CACHE^%\\bin
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=i(`<h2 id="默认环境变量" tabindex="-1"><a class="header-anchor" href="#默认环境变量" aria-hidden="true">#</a> 默认环境变量</h2><h3 id="windows-11" tabindex="-1"><a class="header-anchor" href="#windows-11" aria-hidden="true">#</a> Windows 11</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 默认Path</span>
setx Path <span class="token string">&quot;%SystemRoot%\\System32;%SystemRoot%;%SystemRoot%\\System32\\wbem;%SystemRoot%\\System32\\WindowsPowerShell\\v1.0;%SystemRoot%\\System32\\OpenSSH;&quot;</span> <span class="token operator">/</span>M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,4),W={class:"footnotes"},Y={class:"footnotes-list"},q={id:"footnote1",class:"footnote-item"},j={href:"https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7.4",target:"_blank",rel:"noopener noreferrer"},J=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function G($,B){const o=r("Tabs"),c=r("ExternalLinkIcon");return d(),u("div",null,[m,l(o,{id:"26",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[h]),tab1:e(({value:a,isActive:t})=>[k]),_:1}),_,l(o,{id:"40",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[b]),tab1:e(({value:a,isActive:t})=>[E]),_:1}),g,l(o,{id:"94",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[A]),tab1:e(({value:a,isActive:t})=>[S]),_:1}),O,l(o,{id:"105",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[D]),tab1:e(({value:a,isActive:t})=>[P]),_:1}),R,l(o,{id:"120",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[M]),tab1:e(({value:a,isActive:t})=>[T]),_:1}),f,l(o,{id:"138",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[x]),tab1:e(({value:a,isActive:t})=>[C]),_:1}),w,l(o,{id:"149",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[H]),tab1:e(({value:a,isActive:t})=>[U]),_:1}),F,l(o,{id:"160",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[V]),tab1:e(({value:a,isActive:t})=>[y]),_:1}),N,l(o,{id:"171",data:[{id:"PowerShell"},{id:"CMD"}],"tab-id":"shell"},{title0:e(({value:a,isActive:t})=>[s("PowerShell")]),title1:e(({value:a,isActive:t})=>[s("CMD")]),tab0:e(({value:a,isActive:t})=>[L]),tab1:e(({value:a,isActive:t})=>[K]),_:1}),I,n("section",W,[n("ol",Y,[n("li",q,[n("p",null,[n("a",j,[s("Get-ItemProperty"),l(c)]),s(),J])])])])])}const Q=p(v,[["render",G],["__file","env-config.html.vue"]]);export{Q as default};
