# IntelliJ IDEA



## 快捷键

Setting -> Keymap 

### 常用功能

| 名称             | 默认            | 功能             |
| :--------------- | :-------------- | :--------------- |
| Reformat Code    | cmd alt L       | 格式化代码       |
| Reformat File    | cmd alt shift L | 格式化文件       |
| Optimize Imports | cmd atl O       | 优化导包         |
| Project          | cmd 1           | 显示工程目录     |
| Structure        | cmd 7           | 显示类结构       |
| Select In        | alt F1          | 定位当前文件位置 |
| Navigate Back    | cmd alt left    | 上次编辑位置     |
| Navigate Forwar  | cmd alt right   | 下次编辑位置     |
| Fold Selection   | cmd .           | 折叠/展开代码    |

### 功能切换

| 名称                | 默认                         | 功能           |
| :------------------ | :--------------------------- | :------------- |
| System Window       | cmd `                        | 切换窗口       |
| Recent Files        | cmd E                        | 切换最近记录   |
| Recent Locations    | cmd shift E                  | 最近打开记录   |
| Switcher            | ctrl tab <br/>ctrl shift tab | 切换打开的文件 |
| Select Previous Tab | cmd shift [                  | 前一个文件     |
| Select Next Tab     | cmd shift ]                  | 后一个文件     |
| Close Tab           | cmd W                        | 关闭文件       |

### 编辑器

| 名称           | 默认         | 功能       |
| :------------- | :----------- | :--------- |
| Undo           | cmd Z        | 撤销       |
| Redo           | cmd shift Z  | 重做       |
| Toggle Cast    | cmd shift U  | 切换大小写 |
| Join Line      | ctrl shift J | 合并下一行 |
| Duplicate Line | cmd D        | 复制一行   |

### 系统冲突

| 名称                         | 默认             | 建议         |
| :--------------------------- | :--------------- | :----------- |
| Find Action                  | cmd shift A      | cmd shift P  |
| Code Completion Basic        | ctrl space       | alt .        |
| Code Completion Type-Maching | ctrl shift space | alt shift .  |
| Hierarchy Tool Window        | -                | cmd alt H    |
| Build Tool Window            | -                | cmd alt 4    |
| Dependencies Tool Window     | -                | cmd alt 5    |
| Reveal in Finder             | -                | cmd alt R    |
| Select Previous Tab          | cmd shift [      | alt shift [  |
| Select Next Tab              | cmd shift ]      | alt shift ]  |
| Select Previous Tab Editor   | ctrl shift left  | ctrl shift [ |
| Select Next Tab Editor       | ctrl shift right | ctrl shift ] |

Project 焦点下 `ctrl alt left` 缩小展示宽度，`ctrl alt right` 增大展示宽度，`esc` 切换到编辑区域

Switcher 窗口下 `ctrl shift`  配合 `left right up down` 快速选择文件和功能

## 异常处理

**Your environment does not support JCEF**  

`Helpe -> Find Action` 输入 `Choose Boot Java Runtime` 切换Java运行时，选择一个带有 `xxx JetBrains Runtime With JCEF` 的，OK确认后会自动下载  

**反编译出现 /* compiled code */**

低版本确认是否安装 `Java Bytecode Decompiler` 插件，`Tools -> Kotlin -> Decompile to Java ` 即可查看  

## 配置修改

### IDE注册表配置

`Help -> Find Action` 搜索 `Registry`

### 编码格式

`Settings > Editor > File Encodings` 统一选择为 `UTF-8`

### 代码风格

#### 取消注释在开头

`Settings->Code Style->java-> Code Generation` ，取消 `Line comment at first columen`、`block comment at first column`

### 编辑器配置

#### 关闭代码预览始终在同一个tab

`Settings -> Editor -> General -> Editor Tabs ` 取消 `Enable preview tab`

#### 显示空格

`Settings -> Editor -> General -> Appearance ` 勾选 `Show whitespaces`

### 参数修改

#### 内存大小

`Help`-`Edit Custorm VM Options`

 1.Xms256m,初始内存
 2.Xmx2048m,最大内存
 3.ReservedCodeCacheSize,预留代码缓存的大小
 4.UseCompressedOops,指针压缩
 5.UseParNewG,使用并行收集算法
 6.UseG1GC,使用G1垃圾回收器

```properties
-Xms256m
-Xmx2048m
-XX:ReservedCodeCacheSize=512m
-XX:+IgnoreUnrecognizedVMOptions
-XX:+UseCompressedOops
-XX:+UseParNewG
-XX:+UseG1GC
-Dfile.encoding=UTF-8
-Didea.case.sensitive.fs=true
```

[idea内存与功能调优](https://blog.csdn.net/qq877507054/article/details/118116902)


### 显示修改

#### 显示内存使用

`View` -> `Appearance` -> `Stauts Bar Widgets` -> `Memory Indicator`

#### 文件路径栏显示位置

`View` -> `Appearance` -> `Navigation Bar`

## 环境参数

#### 插件安装目录

IC Mac: `~/Library/ApplicationSupport/JetBrains/IdeaICXXXX.X/plugins`

AS Mac: `~/Library/Application Support/Google/AndroidStudioXXXX.X/plugins`
