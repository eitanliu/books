# 环境配置

## Mac

通用环境配置

```shell
export PUB_CACHE=~/.pub-cache
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
export FLUTTER_HOME=~/Library/flutter
export FLUTTER_ROOT=$FLUTTER_HOME
export DART_HOME=$FLUTTER_HOME/bin/cache/dart-sdk
export PATH=$PATH:$FLUTTER_HOME/bin:$DART_HOME/bin:$HOME/.pub-cache/bin
```

### 软链接指定版本

新建保存 `flutter_ln` 为 Shell

```shell
# 默认版本号
FLUTTER_VERSION="3.13.9"
rm ~/Library/flutter
ln -s ~/Library/flutter_${1:-$FLUTTER_VERSION} ~/Library/flutter
```

传入版本执行命令

```shell
./flutter_ln 3.10.6
```

### 配置指定版本

新建保存 `flutter_export` 为 Shell

```sh
# 默认版本号
FLUTTER_VERSION="3.13.9"
export FLUTTER_HOME="~/Library/flutter_${1:-$FLUTTER_VERSION}"
export FLUTTER_ROOT=$FLUTTER_HOME
export DART_HOME=$FLUTTER_HOME/bin/cache/dart-sdk
export PATH=$FLUTTER_HOME/bin:$DART_HOME/bin:$PATH
```

通过执行 `source` 传入版本配置

```shell
source flutter_export 3.16.7
source flutter_export 3.13.9
source flutter_export 2.10.6
source flutter_export 3.7.12
source flutter_export 3.3.10
source flutter_export 2.10.5
source flutter_export 2.8.1
```

## Windows

```cmd
setx PUB_CACHE "%USERPROFILE%\.pub-cache" /M
setx PUB_HOSTED_URL "https://pub.flutter-io.cn" /M
setx FLUTTER_STORAGE_BASE_URL "https://storage.flutter-io.cn" /M
setx FLUTTER_HOME "D:\Develop\flutter" /M
setx FLUTTER_ROOT "%FLUTTER_HOME%" /M
setx DART_HOME "%FLUTTER_HOME%\bin\cache\dart-sdk" /M
for /f "tokens=3,*" %i in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do if not defined _OldPath set "_OldPath=%i"
setx Path "%_OldPath%;%FLUTTER_HOME%\bin;%DART_HOME%\bin;%USERPROFILE%\.pub-cache\bin" /M
```

### 软链接指定版本

新建保存为 `flutter_ln.cmd` 

```cmd
REM 接收版本参数
set "FLUTTER_VERSION=%~1"
if not defined FLUTTER_VERSION set FLUTTER_VERSION=3.13.9
rmdir /s /q "D:\Develop\flutter"
mklink /J "D:\Develop\flutter" "D:\Develop\flutter_%FLUTTER_VERSION%"
```

传入版本执行命令

```shell
.\flutter_ln.cmd 3.10.6
```

### 配置指定版本

通过 `.` 命令传入版本执行脚本文件或加载脚本文件中的变量和函数， PowerShell中，可以使用 `.` 或 `&` 

#### PowerShell

新建保存为 `flutter_export.sh1` ，执行 `. .\flutter_export.sh1` 传入版本 

```powershell
param([string]$FLUTTER_VERSION = "3.13.9")
$env:FLUTTER_HOME = "D:\Develop\flutter_$FLUTTER_VERSION"
$env:DART_HOME = "$FLUTTER_HOME/bin/cache/dart-sdk"
if (-not $env:_OldRunPath) { $env:_OldRunPath = "$env:Path" }
$env:Path = "$env:FLUTTER_HOME\bin;$env:DART_HOME\bin;$env:_OldRunPath"
```

#### CMD

新建保存为 `flutter_export.cmd` ，执行 `. .\flutter_export.cmd 3.16.7` 传入版本

```cmd
set "FLUTTER_VERSION=%~1"
if not defined FLUTTER_VERSION set FLUTTER_VERSION=3.13.9
set FLUTTER_HOME="D:\Develop\flutter_%FLUTTER_VERSION%"
set DART_HOME=%FLUTTER_HOME%/bin/cache/dart-sdk
for /f "tokens=3,*" %%i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do if not defined _OldUPath set "_OldUPath=%%i"
set Path "%FLUTTER_HOME%\bin;%DART_HOME%\bin;%_OldUPath%"
```


