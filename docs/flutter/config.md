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

新建保存 Shell `flutter_ln` ，执行 `./flutter_ln 3.10.6` 传入版本

```shell
# 默认版本号
FLUTTER_VERSION="3.13.9"
rm ~/Library/flutter
ln -s ~/Library/flutter_${1:-$FLUTTER_VERSION} ~/Library/flutter
```

### 临时配置指定版本

新建保存 Shell `flutter_export` ，通过执行 `source ./flutter_export 3.10.6` 传入版本

```sh
# 默认版本号
FLUTTER_VERSION="3.13.9"
export FLUTTER_HOME="~/Library/flutter_${1:-$FLUTTER_VERSION}"
# export FLUTTER_ROOT=$FLUTTER_HOME
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

```bat
setx __MY_DEVSOFTWARE "D:\Develop" /M

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

### 软链接指定版本

新建保存为 `flutter_ln.bat` ，执行 `.\flutter_ln.bat 3.10.6` 传入版本 

```bat
REM 接收版本参数
set "FLUTTER_VERSION=%~1"
if not defined FLUTTER_VERSION set FLUTTER_VERSION=3.13.9
rmdir /s /q "%__MY_DEVSOFTWARE%\flutter"
REM /J 软链接绝对路径 /D 符号链接可相对路径
mklink /J "%__MY_DEVSOFTWARE%\flutter" "%__MY_DEVSOFTWARE%\flutter_%FLUTTER_VERSION%"
```

### 临时配置指定版本

通过 `.` 命令传入版本执行脚本文件或加载脚本文件中的变量和函数， PowerShell中可以使用 `.` 或 `&` 

#### PowerShell

新建保存为 `flutter_export.sh1` ，执行 `. .\flutter_export.sh1` 传入版本 

```powershell
param([string]$FLUTTER_VERSION = "3.13.9")
$env:FLUTTER_HOME = "$env:__MY_DEVSOFTWARE\flutter_$FLUTTER_VERSION"
$env:DART_HOME = "$FLUTTER_HOME/bin/cache/dart-sdk"
if (-not $env:_OldRunPath) { $env:_OldRunPath = "$env:Path" }
$env:Path = "$env:FLUTTER_HOME\bin;$env:DART_HOME\bin;$env:_OldRunPath"
```

#### CMD

新建保存为 `flutter_export.bat` ，执行 `. .\flutter_export.bat 3.10.6` 传入版本

```bat
set "FLUTTER_VERSION=%~1"
if not defined FLUTTER_VERSION set FLUTTER_VERSION=3.13.9
set FLUTTER_HOME="%__MY_DEVSOFTWARE%\flutter_%FLUTTER_VERSION%"
set DART_HOME=%FLUTTER_HOME%/bin/cache/dart-sdk
for /f "tokens=3,*" %%i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do if not defined _OldUPath set "_OldUPath=%%i"
set Path "%FLUTTER_HOME%\bin;%DART_HOME%\bin;%_OldUPath%"
```

