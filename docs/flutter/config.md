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
DEFAULT_VERSION="3.13.9"
rm ~/Library/flutter
ln -s ~/Library/flutter_${1:-$DEFAULT_VERSION} ~/Library/flutter
```

传入版本执行命令

```shell
./flutter_ln 3.10.6
```

### 配置指定版本

新建保存 `flutter_export` 为 Shell

```sh
# 默认版本号
DEFAULT_VERSION="3.13.9"
export FLUTTER_HOME="~/Library/flutter_${1:-$DEFAULT_VERSION}"
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
setx Path %Path%;%FLUTTER_HOME%\bin;%DART_HOME%\bin;%USERPROFILE%\.pub-cache\bin /M
```

### 软链接指定版本

新建保存 `flutter_ln.cmd` 为 Shell

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

新建保存 `flutter_export.cmd` 为 Shell

```cmd
set "FLUTTER_VERSION=%~1"
if not defined FLUTTER_VERSION set FLUTTER_VERSION=3.13.9
set FLUTTER_HOME="D:\Develop\flutter_%FLUTTER_VERSION%"
set DART_HOME=$FLUTTER_HOME/bin/cache/dart-sdk
set Path %FLUTTER_HOME%\bin;%DART_HOME%\bin;%Path% 
```

通过 `.` 命令传入版本执行脚本文件或加载脚本文件中的变量和函数， PowerShell中，可以使用 `.` 或 `&` 

```cmd
. .\flutter_export.cmd 3.16.7
```

