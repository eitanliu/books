# 开发环境配置

## 常用开发工具

```powershell
[environment]::SetEnvironmentvariable("MY_DEVSOFT_DIR", "D:\Developer", "User")
```

```bat
setx MY_DEVSOFT_DIR "D:\Developer"
```

### Java

**PowerShell**

```powershell
[environment]::SetEnvironmentvariable("JAVA_HOME", "%USERPROFILE%\.jdks\temurin-17.0.9", "User")
[environment]::SetEnvironmentvariable("CLASSPATH", ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;", "User")
$env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
[environment]::SetEnvironmentvariable("Path", "$env:_OldUPath；%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;", "User")
```

**CMD**

```bat
setx JAVA_HOME "%USERPROFILE%\.jdks\temurin-17.0.9"
setx CLASSPATH ".;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;"
for /f "tokens=3,*" %i in ('reg query "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v Path ^| findstr /r /c:"^[ ]*Path"') do set "_OldUPath=%i"
setx Path "%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;%_OldUPath%"
```

### Android

**PowerShell**

```powershell
# SDK路径
[environment]::SetEnvironmentvariable("ANDROID_HOME", "%MY_DEVSOFT_DIR%\Android\Sdk", "User")
#[environment]::SetEnvironmentvariable("ANDROID_NDK", "%ANDROID_HOME%\ndk-bundle", "User")
# 模拟器路径
# [environment]::SetEnvironmentvariable("ANDROID_SDK_HOME", "%USERPROFILE%\.android")
$env:_OldUPath = (reg query 'HKCU\Environment' /v Path) -split "`n" | Where-Object { $_ -match '\s*Path\s*REG_EXPAND_SZ\s*(.+)'} | ForEach-Object { $Matches[1] }
[environment]::SetEnvironmentvariable("Path", "$env:_OldUPath;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools", "User")
```

