# 开发环境配置

## 获取和设置环境的方式

### 获取注册表环境变量

**通用获取 `reg query`**

```powershell
# 获取用户环境
reg query "HKCU\Environment" /v Path
# 获取系统环境
reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path
```

**PowerShell 获取的注册表变量**

获取的是转换后的实际路径地址，暂时没发现获取未转换的方式[^get-item]  

```powershell
# 详细信息
Get-ItemProperty -Path "HKCU:\Environment" -Name "Path"
# 只获取值
Get-ItemPropertyValue -Path "HKCU:\Environment" -Name "Path"
```

### 获取运行环境变量

获取的环境变量都是转换后的实际路径地址，如果要修改新增建议使用注册通用表方式获取。

::: code-tabs#shell

@tab PowerShell

```powershell
# 获取全部环境变量
ls env:
Get-ChildItem Env:
# 获取单个环境变量
ls env:Path
$env:Path
```

@tab CMD

```bat
REM 获取全部环境变量
set
REM 获取单个环境变量
set Path
echo %Path%
```

:::

### 设置环境变量

通用设置环境变量 `setx` ，会根据内容是否带有 `%Name%` 自动判断保存类型， `/M` 表示系统变量。  
PowerShell `[environment]::SetEnvironmentvariable` PowerShell 中设置的环境，必须是绝对路径不能带有 `%Name%` 的拼接，最终注册表类型是`REG_SZ `  

::: code-tabs#shell

@tab PowerShell

```powershell
setx __MY_DEVSOFTWARE "D:\Develop" /M
# 设置用户环境变量
[environment]::SetEnvironmentvariable("__MY_DEVSOFTWARE", "D:\Develop", "User")
[System.Environment]::SetEnvironmentVariable("__MY_DEVSOFTWARE", "D:\Develop", [System.EnvironmentVariableTarget]::User)
# 设置系统环境变量
[environment]::SetEnvironmentvariable("__MY_DEVSOFTWARE", "D:\Develop", "Machine")
[System.Environment]::SetEnvironmentVariable("__MY_DEVSOFTWARE", "D:\Develop", [System.EnvironmentVariableTarget]::Machine)
```

@tab CMD

```bat
REM 设置用户环境变量
setx __MY_DEVSOFTWARE "D:\Develop"
REM 设置系统环境变量
setx __MY_DEVSOFTWARE "D:\Develop" /M
```

:::

### 设置注册表环境变量

**PowerShell `New-ItemProperty` 添加注册表**

可通过 `-PropertyType` 指定添加的属性类型。 此参数的可接受值为：

- `String`：指定以 null 结尾的字符串。 用于 `REG_SZ` 值。
- `ExpandString`：指定一个以 null 结尾的字符串，该字符串包含对环境变量的未扩展的引用，这些引用会在检索值时扩展。 用于 `REG_EXPAND_SZ` 值。
- `Binary`：指定采用任意格式的二进制数据。 用于 `REG_BINARY` 值。
- `DWord`：指定一个 32 位的二进制数字。 用于 `REG_DWORD` 值。
- `MultiString`：指定一个包含以 null 结尾的字符串的数组，该数组以两个 null 字符结尾。 用于 `REG_MULTI_SZ` 值。
- `Qword`：指定一个 64 位的二进制数字。 用于 `REG_QWORD` 值。
- `Unknown`：指示不受支持的注册表数据类型，例如 `REG_RESOURCE_LIST` 值。

::: code-tabs#shell

@tab PowerShell


```powershell
# 设置用户环境变量
New-ItemProperty -Path "HKCU:\Environment" -Name "ANDROID_HOME_ROOT" -PropertyType "ExpandString" -Value "%__MY_DEVSOFTWARE%\Android\Sdk" -Force
# 设置系统环境变量
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" -Name "JAVA_HOME" -PropertyType "ExpandString" -Value "%__MY_DEVSOFTWARE%\JDK\current" -Force
```

@tab CMD

```bat
REM 设置用户环境变量
reg add HKCU\Environment /v ANDROID_HOME_ROOT /t REG_EXPAND_SZ /d ^%__MY_DEVSOFTWARE^%\Android\Sdk /f
REM 设置系统环境变量
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v ANDROID_HOME_ROOT /t REG_EXPAND_SZ /d ^%__MY_DEVSOFTWARE^%\JDK\current /f
```

:::

## 常用命令

::: code-tabs#shell

@tab PowerShell

```powershell
# Test-Path 来检查注册表项或属性
if (-not (Test-Path -Path "HKLM:\SOFTWARE\YourKey"))
# 在脚本块内创建变量 -Scope 限定作用域
New-Variable -Name "MyVariable" -Value "MyValue" -Scope Script
```

@tab CMD

```bat
REM refreshenv 命令重新加载环境变量
```
:::

## 常用开发工具配置

```bat
setx __MY_DEVSOFTWARE "D:\Develop" /M
```

### Git

:::code-tabs#shell
@tab PowerShell

```powershell
$env:_OldPath = (reg query 'reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
setx Path "$env:_OldPath;%__MY_DEVSOFTWARE%\Git\cmd" /M
```

@tab CMD
```bat
for /f "tokens=3,*" %i in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldPath=%i"
setx Path %_OldPath%;^%__MY_DEVSOFTWARE^%\Git\cmd /M
```
:::

**Git 代理配置**[^git-proxy]

:::code-tabs

@tab ssh

```ini
# %USERPROFILE%\.ssh\config
# ~/.ssh/config

Host *
    ServerAliveInterval 60
Host github.com
   # ssh.github.com 详见 https://help.github.com/articles/using-ssh-over-the-https-port/
   HostName github.com
   User git
   # HTTP 代理
   # ProxyCommand socat - PROXY:<proxy_host>:%h:%p,proxyport=<proxy_port>
   # Linux/Mac socks5 代理
   # ProxyCommand nc -v -x <socks_host>:<socks_port> %h %p
   # Windows socks5 代理
   ProxyCommand connect -S <socks_host>:<socks_port> -a none %h %p

# 多帐号多证书别名
Host <alias>.github.com
   IdentityFile ~/.ssh/id_rsa_<alias>
   HostName github.com
   User git
   ProxyCommand connect -S <socks_host>:<socks_port> -a none %h %p
```

@tab http

```powershell
git config --global http.proxy http://<proxy_host>:<proxy_port>
git config --global https.proxy http://<proxy_host>:<proxy_port>
```

:::

### JDK

**设置到用户环境**

::: code-tabs#shell

@tab PowerShell

```powershell
New-ItemProperty -Path "HKCU:\Environment" -Name "JAVA_HOME" -PropertyType "ExpandString" -Value "%USERPROFILE%\.jdks\temurin-17.0.9" -Force
New-ItemProperty -Path "HKCU:\Environment" -Name "CLASSPATH" -PropertyType "ExpandString" -Value ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;" -Force
$env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
New-ItemProperty -Path "HKCU:\Environment" -Name "Path" -PropertyType "ExpandString" -Value "$env:_OldUPath;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin" -Force
```
@tab CMD


```bat
setx JAVA_HOME ^%USERPROFILE^%\.jdks\temurin-17.0.9
setx CLASSPATH .;^%JAVA_HOME^%\lib\dt.jar;^%JAVA_HOME^%\lib\tools.jar;
for /f "tokens=3,*" %i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldUPath=%i"
setx Path %_OldUPath%;^%JAVA_HOME^%\bin;^%JAVA_HOME^%\jre\bin
```

:::

**设置到系统环境**

::: code-tabs#shell

@tab PowerShell

```powershell
New-ItemProperty -Path "HKCU:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" -Name "JAVA_HOME" -PropertyType "ExpandString" -Value "%__MY_DEVSOFTWARE%\JDK\current" -Force
New-ItemProperty -Path "HKCU:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" -Name "CLASSPATH" -PropertyType "ExpandString" -Value ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;" -Force
$env:_OldPath = (reg query 'HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
New-ItemProperty -Path "HKCU:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" -Name "Path" -PropertyType "ExpandString" -Value "$env:_OldPath;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin" -Force
```

@tab CMD


```bat
mklink /D "%__MY_DEVSOFTWARE%\JDK" "%USERPROFILE%\.jdks\temurin-17.0.9"
setx JAVA_HOME ^%__MY_DEVSOFTWARE^%\JDK\current /M
setx CLASSPATH .;^%JAVA_HOME^%\lib\dt.jar;^%JAVA_HOME^%\lib\tools.jar; /M
for /f "tokens=3,*" %i in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldPath=%i"
setx Path %_OldPath%;^%JAVA_HOME^%\bin;^%JAVA_HOME^%\jre\bin /M
```

:::

### Android

::: code-tabs#shell

@tab PowerShell

```powershell
# SDK 路径
setx ANDROID_SDK_ROOT "%__MY_DEVSOFTWARE%\Android\Sdk"
# setx ANDROID_HOME "%ANDROID_SDK_ROOT%"
# setx ANDROID_ROOT "%ANDROID_SDK_ROOT%"
# setx ANDROID_NDK "%ANDROID_SDK_ROOT%\ndk-bundle"
# 模拟器路径
# set ANDROID_SDK_HOME "%USERPROFILE%\.android"
$env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
setx Path "$env:_OldUPath;%ANDROID_SDK_ROOT%\tools;%ANDROID_SDK_ROOT%\platform-tools"
```

@tab CMD


```bat
REM SDK 路径
setx ANDROID_SDK_ROOT ^%__MY_DEVSOFTWARE^%\Android\Sdk
REM setx ANDROID_HOME ^%ANDROID_SDK_ROOT^%
REM setx ANDROID_ROOT ^%ANDROID_SDK_ROOT^%
REM setx ANDROID_NDK ^%ANDROID_SDK_ROOT^%\ndk\current
REM 模拟器路径
REM set ANDROID_SDK_HOME ^%USERPROFILE^%\.android
for /f "tokens=3,*" %i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldUPath=%i"
setx Path %_OldUPath%;^%ANDROID_SDK_ROOT^%\tools;^%ANDROID_SDK_ROOT^%\platform-tools
```

:::

### Flutter

:::code-tabs#shell
@tab PowerShell

```powershell
# mklink /D "%__MY_DEVSOFTWARE%\.pub-cache" "%LOCALAPPDATA%\Pub\Cache"

setx PUB_HOSTED_URL "https://pub.flutter-io.cn"
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn"

setx FLUTTER_HOME "%__MY_DEVSOFTWARE%\flutter"
setx FLUTTER_HOME_DART "%FLUTTER_HOME%\bin\cache\dart-sdk"
setx FLUTTER_PUB_CACHE "%__MY_DEVSOFTWARE%\.pub-cache"
setx PUB_CACHE "%FLUTTER_PUB_CACHE%"
# setx FLUTTER_ROOT "%FLUTTER_HOME%"
# setx DART_HOME "%FLUTTER_HOME_DART%"

$env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
setx Path "$env:_OldUPath;%FLUTTER_HOME%\bin;%FLUTTER_HOME_DART%\bin;%FLUTTER_PUB_CACHE%\bin"
```

@tab CMD

```bat
REM mklink /D "%__MY_DEVSOFTWARE%\.pub-cache" "%LOCALAPPDATA%\Pub\Cache"

setx PUB_HOSTED_URL "https://pub.flutter-io.cn"
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn"

setx FLUTTER_HOME ^%__MY_DEVSOFTWARE^%\flutter
setx FLUTTER_HOME_DART ^%FLUTTER_HOME^%\bin\cache\dart-sdk
setx FLUTTER_PUB_CACHE ^%__MY_DEVSOFTWARE^%\.pub-cache
setx PUB_CACHE ^%FLUTTER_PUB_CACHE^%
REM setx FLUTTER_ROOT ^%FLUTTER_HOME^%
REM setx DART_HOME ^%FLUTTER_HOME_DART^%

for /f "tokens=3,*" %i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do if not defined _OldUPath set "_OldUPath=%i"
setx Path %_OldUPath%;^%FLUTTER_HOME^%\bin;^%FLUTTER_HOME_DART^%\bin;^%FLUTTER_PUB_CACHE^%\bin
```
:::

### Windows Kit

```bat
REM D:\Windows Kits\10\Windows Performance Toolkit\
```

## 代理设置

::: code-tabs

@tab PowerShell

```powershell
# 设置代理
[System.Environment]::SetEnvironmentVariable("http_proxy", "http://<proxy_host>:<proxy_port>", "User")
[System.Environment]::SetEnvironmentVariable("https_proxy", "http://<proxy_host>:<proxy_port>", "User")
# 取消设置
[System.Environment]::SetEnvironmentVariable("http_proxy", $null, "User")
[System.Environment]::SetEnvironmentVariable("https_proxy", $null, "User")
# Git
git config --global http.proxy http://<proxy_host>:<proxy_port>
git config --global https.proxy http://<proxy_host>:<proxy_port>
```

@tab CMD

```bat
REM 设置代理
setx http_proxy "http://<proxy_host>:<proxy_port>"
setx https_proxy "http://<proxy_host>:<proxy_port>"
REM 取消设置
reg delete HKCU\Environment /F /V http_proxy
reg delete HKCU\Environment /F /V https_proxy
git config --global http.proxy http://<proxy_host>:<proxy_port>
git config --global https.proxy http://<proxy_host>:<proxy_port>
```

@tab vmoptions

```properties
-Dhttp.proxyHost=<proxy_host>
-Dhttp.proxyPort=<proxy_port>
-Dhttps.proxyHost=<proxy_host>
-Dhttps.proxyPort=<proxy_port>
# -Dhttp.proxyUser=<proxy_username>
# -Dhttp.proxyPassword=<proxy_password>
# -Dhttps.proxyUser=<proxy_username>
# -Dhttps.proxyPassword=<proxy_password>
```

@tab gradle

```properties
# %USERPROFILE%\.gradle\gradle.properties
# ~/.gradle/gradle.properties

systemProp.socks.proxyHost=<socks_host>
systemProp.socks.proxyPort=<socks_port>
#systemProp.socks.proxyUser=<socks_username>
#systemProp.socks.proxyPassword=<socks_password>
systemProp.socks.nonProxyHosts=localhost, 127.0.0.1, 127.*, 10.*, 192.168.*, 172.16.*

#systemProp.http.proxyHost=<proxy_host>
#systemProp.http.proxyPort=<proxy_port>
#systemProp.http.proxyUser=<proxy_username>
#systemProp.http.proxyPassword=<proxy_password>

#systemProp.https.proxyHost=<proxy_host>
#systemProp.https.proxyPort=<proxy_port>
#systemProp.https.proxyUser=<proxy_username>
#systemProp.https.proxyPassword=<proxy_password>
```

:::

### 临时设置代理

```powershell
# 设置忽略代理列表，不同软件要求不一样
# 通常 Windows 应用是 `;` 来分隔，Java 应用是 `,` 加空格来分隔
set no_proxy ".local;localhost;127.*;10.*;172.16.*;172.17.*;172.18.*;172.19.*;172.20.*;172.21.*;172.22.*;172.23.*;172.24.*;172.25.*;172.26.*;172.27.*;172.28.*;172.29.*;172.30.*;172.31.*;192.168.*"
```

[配置 Visual Studio 使用指定的代理服务器访问网络](https://www.cnblogs.com/xwgli/p/17511767.html)

[defaultProxy 元素](https://learn.microsoft.com/zh-cn/dotnet/framework/configure-apps/file-schema/network/defaultproxy-element-network-settings)

## 默认环境变量

### Windows 11

```powershell
# 默认Path
setx Path "%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\wbem;%SystemRoot%\System32\WindowsPowerShell\v1.0;%SystemRoot%\System32\OpenSSH;" /M
```

[^get-item]: [Get-ItemProperty](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-itemproperty?view=powershell-7.4)
[^git-proxy]: [git ssh 代理设置](https://gist.github.com/chenshengzhi/07e5177b1d97587d5ca0acc0487ad677)  
[^git-proxy2]: [为 Git 设置 HTTPS&SSH 代理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/520414657)   
[^git-proxy3]: [git 设置和取消指定域名代理 - git config proxy - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/107323951)  

