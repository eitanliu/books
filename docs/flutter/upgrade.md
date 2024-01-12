# Flutter Upgrade

## 问题处理

### 空警告处理

`SchedulerBinding.instance` 类型可空变为不可空 [3.0 your-code](https://docs.flutter.dev/release/release-notes/release-notes-3.0.0#your-code)  

```dart
T? _ambiguate<T>(T? value) => value;
_ambiguate(SchedulerBinding.instance)!.addPostFrameCallback(...);
```

