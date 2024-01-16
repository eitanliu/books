# 注册表配置

## 获取环境变量

```bat
REM 读取用户环境配置
reg query "HKCU\Environment"
RMG 读取系统环境变量
reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path
REM 读取运行环境变量
set Path
echo %Path%
```

### PowerShell

[Windows 10 环境变量：通过CMD 和PowerShell 写入环境变量](https://blog.51cto.com/sysin/9056763)  

```powershell
# 使用 reg query
# (reg query 'HKCU\Environment' /v Path) -split "`n" | ForEach-Object { if ($_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)') { $Matches[1]; break }}
(reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
[environment]::SetEnvironmentvariable("CLASSPATH", ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;", "User")
if (-not $env:_OldUPath) { $env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] } }
# 所有环境变量
ls env:
# 使用 Get-ItemPropertyValue 获取注册表中 Path 环境变量的值
Get-ItemPropertyValue -Path 'HKCU:\Environment' -Name 'Path'
# 用户环境变量
[environment]::GetEnvironmentvariable("Path", "User")
# 系统环境变量
[environment]::GetEnvironmentvariable("Path", "Machine")
# 设置用户变量
[environment]::SetEnvironmentvariable("VAR_NAME", "value", "User")
[System.Environment]::SetEnvironmentVariable("VAR_NAME", "value", [System.EnvironmentVariableTarget]::User)
# 设置系统变量
[environment]::SetEnvironmentvariable("VAR_NAME", "value", "Machine")
[System.Environment]::SetEnvironmentVariable("VAR_NAME", "value", [System.EnvironmentVariableTarget]::Machine)
# 创建新的注册表项
# New-Item -Path 'HKCU:\Software\NewKey'
# 设置注册表项的值
Set-ItemProperty -Path 'HKCU:\Environment' -Name 'PUB_CACHE' -Value '%USERPROFILE%\.pub-cache'
# 在脚本块内创建变量
New-Variable -Name "MyVariable" -Value "MyValue" -Scope Script
# 在脚本块内使用变量值
Write-Host "Inside script block: $MyVariable"
```

### CMD

批处理脚本中（而不是直接在 CMD 中运行），需要将 `%i` 改为 `%%i`

```bat
@echo off
RME 读取所在行
(reg query "HKCU\Environment" /v Path) ^| findstr /r /c:"^[ ]*Path"
REM 读取具体值
for /f "tokens=3,*" %i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do echo %i
for /f "tokens=3,*" %i in ('reg query "HKCU\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "PathValue=%i"
REM 修改
reg add HKCU\Environment /v PUB_CACHE /t REG_EXPAND_SZ /d "%USERPROFILE%\.pub-cache" /f
```

## 默认环境变量

### Windows 11

```bat
REM 默认Path
setx Path "%SystemRoot%\System32;%SystemRoot%;%SystemRoot%\System32\wbem;%SystemRoot%\System32\WindowsPowerShell\v1.0;%SystemRoot%\System32\OpenSSH;" /M
```

