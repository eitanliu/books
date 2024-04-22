[网络存储文件共享之WebDAV-CSDN博客](https://blog.csdn.net/ghdqfhw/article/details/113965986)

```
计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters
```

允许http协议登录 BasicAuthLevel把这个值从1改为2  
最大文件大小限制 FileSizeLimitInBytes 由 50000000 (50MB) 修改为更大的数值。最大修改为：4294967295（0xffffffff）字节即4G  

[移除Office 365快捷键_microsoft365快捷键关闭-CSDN博客](https://blog.csdn.net/bluishglc/article/details/130007288)

```cmd
REG ADD HKCU\Software\Classes\ms-officeapp\Shell\Open\Command /t REG_SZ /d rundll32
```

禁用Windows中使用 `Alt+Shift+Ctrl+Win` 会打开Office 365应用

[3 招教你在 Windows 11 中轻松关闭或移除 Copilot 功能 - 系统极客 (sysgeek.cn)](https://www.sysgeek.cn/windows-11-disable-copilot/)

关闭 Copilot

**方法 1 从任务栏移除 Copilot 图标**  
1 使用`Windows + I`快捷键打开「设置」，依次点击「个性化」>「任务栏」。  
2 找到「Copilot（预览版）」选项，并关闭它。  

**方法 2：使用组策略关闭 Copilot 功能**  
1 使用Windows + R快捷键打开「运行」对话框，执行gpedit.msc打开组策略编辑器。  
2 导航到「用户配置」>「管理模板」>「Windows 组件」>「Windows Copilot」。  
3 双击「关闭 Windows Copilot」策略，选择「已启用」，然后点击「确定」并关闭组策略编辑器。  
4 重启系统以应用更改，或者在「命令提示符」中执行`gpupdate /force`强制刷新组策略。  

**方法 3：通过注册表禁用 Copilot 功能**  
1 使用`Windows + R`快捷键打开「运行」对话框，执行`regedit`打开注册表编辑器。  
2 导航到以下路径：  

```
HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows
```
3 新建一个名为`WindowsCopilot`的注册表「项」。  
4 在`WindowsCopilot`项下新建一个名为`TurnOffWindowsCopilot`的 **DWORD (32-位)** 值，将其十六进制值设置为：  

- `1` 关闭 Windows Copilot 功能
- `0` 打开 Windows Copilot 功能
