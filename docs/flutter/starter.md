# Starter

## iOS 编译

### 升级Xcode 15

编辑 `Podfile` 执行 `pod update`

```ruby
post_install do |installer|
  installer.pods_project.targets.each do |target|
    flutter_additional_ios_build_settings(target)
    target.build_configurations.each do |config|
      config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '13.0'
    end
  end
end
```

## 错误处理

Windows 工程和依赖不同盘
[Could not create task ... this and base files have different roots](https://stackoverflow.com/questions/69663243/could-not-create-task-this-and-base-files-have-different-roots)
