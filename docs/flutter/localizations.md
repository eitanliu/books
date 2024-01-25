# 多语言配置

多语言 Unicode 规范包含语言 [language](https://github.com/unicode-org/cldr/blob/master/common/validity/language.xml) 、字符表 [script](https://github.com/unicode-org/cldr/blob/master/common/validity/script.xml) 、地区 [region](https://github.com/unicode-org/cldr/blob/master/common/validity/region.xml) ，其中语言用全小写二到三位字母、字符表为首字母大写四位字母、地区全大写两位字母表示。

## 配置多语言

1. **添加依赖**

   执行命令

   ```shell
   flutter pub add flutter_localizations --sdk=flutter
   flutter pub add intl:any
   ```

   

   或编辑 `pubspec.yaml` 添加依赖

   ```yaml
   dependencies:
     flutter:
       sdk: flutter
     flutter_localizations:
       sdk: flutter
     intl: any
   ```

   

2. **添加本地化配置**

   - 在 `pubspec.yaml` 中启用 `generate` 配置

     ```yaml
     # The following section is specific to Flutter.
     flutter:
       generate: true # Add this line
     ```

   - 添加 `l10n.yaml` 指定本地化生成文件

     ```yaml
     arb-dir: lib/l10n
     #template-arb-file: app_en.arb
     template-arb-file: app_zh.arb
     nullable-getter: false
     #懒加载
     #use-deferred-loading: true
     #禁用{}转译
     #use-escaping: false
     #指定生成目录 synthetic-package flase 才能生效
     #synthetic-package: false
     #output-dir: lib/generated
     output-class: AppLocalizations
     output-localization-file: app_localizations.dart
     ```
   
   - 在 `${FLUTTER_PROJECT}/lib/l10n` 中，添加 `app_zh.arb` 模板文件
   
     ```json
     {
       "helloWorld": "你好!",
       "@helloWorld": {
         "description": "欢迎提示语"
       }
     }
     ```
   
   - 执行 `flutter gen-l10n` 将在 `${FLUTTER_PROJECT}/.dart_tool/flutter_gen/gen_l10n` 中看到生成的文件
   
   - 在调用 `MaterialApp` 的构造函数时候导入 `app_localizations.dart` 和使用
   
     ```dart
     return const MaterialApp(
       title: 'Localizations Sample App',
       localizationsDelegates: S.localizationsDelegates,
       supportedLocales: S.supportedLocales,
       home: MyHomePage(),
     );
     ```

## 语言环境操作

### 切换语言

`Localizations.override` 提供从在某一个位置设置与应用不同的语言

```dart
Localizations.override(
  context: context,
  locale: const Locale('zh'),
  // 
  child: Builder(
    builder: (context) {
      return CalendarDatePicker(
        initialDate: DateTime.now(),
        firstDate: DateTime(1900),
        lastDate: DateTime(2100),
        onDateChanged: (value) {},
      );
    },
  ),
)
```

### 获取语言环境

通过调用 `Localizations.localeOf()` 方法来查看 app 当前的语言环境

```dart
Locale myLocale = Localizations.localeOf(context);
```

### 指定加载的语言

```dart
MaterialApp(
  localeResolutionCallback: (
    locale,
    supportedLocales,
  ) {
    return locale;
  },
);
```

## 语言模板arb

### 占位符 Placeholders

替换 `{keyName}` 里面内容

```json
"{placeholderName}"
```

完整例子

```json
{
  "hello": "Hello {userName}",
  "@hello": {
    "description": "A message with a single parameter",
    "placeholders": {
      "userName": {
        "type": "String",
        "example": "Bob"
      }
    }
  }
}
```

### 复数 Plurals (数值枚举)

包含一个 `num` 参数，指定如何在不同情况下返回内容，类似模板如下：

```json
"{countPlaceholder, plural, =0{message0} =1{message1} =2{message2} few{messageFew} many{messageMany} other{messageOther}}"
```

完整例子

```json
{
  "nWombats": "{count, plural, =0{no wombats} =1{1 wombat} other{{count} wombats}}",
  "@nWombats": {
    "description": "A plural message",
    "placeholders": {
      "count": {
        "type": "num",
        "format": "compact"
      }
    }
  }
}
```

### 选择器 Selects (字符串枚举)

包含一个 `String` 参数，指定如何在不同情况下返回内容，类似模板如下：

```json
"{selectPlaceholder, select, case{message} ... other{messageOther}}"
```

完整例子

```json
{
  "pronoun": "{gender, select, male{he} female{she} other{they}}",
  "@pronoun": {
    "description": "A gendered message",
    "placeholders": {
      "gender": {
        "type": "String"
      }
    }
  }
}
```

### 数字和货币格式

[Messages with numbers and currencies](https://docs.flutter.dev/ui/accessibility-and-localization/internationalization#messages-with-numbers-and-currencies)

### 日期格式

[Messages with dates](https://docs.flutter.dev/ui/accessibility-and-localization/internationalization#messages-with-dates)

## 参考

[Internationalization | Flutter](https://docs.flutter.dev/ui/accessibility-and-localization/internationalization)