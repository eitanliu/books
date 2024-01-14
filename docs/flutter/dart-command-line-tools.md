# Dart 命令行工具

## Dart 代码格式化

[how to change dart line length in vscode when formatting](https://stackoverflow.com/questions/59456452/how-to-change-dart-line-length-in-vscode-when-formatting-dart-files)

### SDK自带命令

```shell
# 指定行长度 100 格式化目录 lib
dart format -l 100 ./lib
```

### dart_style

```shell
# 安装 dart_style 支持 dartfmt and dartformat 命令
dart pub global activate dart_style
# 指定行长度 100 格式化目录 lib
# -v --verbose 显示隐藏参数
# -l --line-length 指定行长度
# -w --overwrite 覆盖源文件
dartformat -w -l 100 ./lib 
```

## build_runner

通用编译生成文件

```shell
# 一次性构建
# --delete-conflicting-outputs 自动删除未知已存在文件
dart run build_runner build
# 监听输入文件的编辑，增量构建
# --use-polling-watcher 使用轮询监听（默认模式应有性能问题可使用）
dart run build_runner watch
# Web 开发服务
dart run build_runner serve
```

## pub deps

输出依赖关系

```shell
# 树状图默认格式
dart pub deps --style=tree
# 全部依赖列表
dart pub deps --style=list
# 全部依赖紧凑列表
dart pub deps --style=compact
# json格式
dart pub deps --json
```

