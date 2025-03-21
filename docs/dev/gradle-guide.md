# Gradle 

[Declaring dependencies (gradle.org)](https://docs.gradle.org/current/userguide/declaring_dependencies.html)

[Modeling library features (gradle.org)](https://docs.gradle.org/current/userguide/feature_variants.html)

**内置 Repositories** : `gradlePluginPortal()` , `mavenCentral()` , `google()` , `mavenLocal()`

**内置 Dependency** : `gradleApi()` , `gradleTestKit()` , `localGroovy()`

历史版本记录 [Distributions](https://services.gradle.org/distributions)  
当前版本信息 [Current Release (json)](https://services.gradle.org/versions/current)  

```kotlin
@file:Repository("https://jitpack.io")
@file:Repository("https://maven.google.com")
@file:Repository("https://jetbrains.bintray.com/trove4j")

@file:DependsOn("com.google.guava:guava:23.0")
@file:DependsOn("com.android.tools:sdk-common:27.2.0-alpha16")
@file:DependsOn("com.android.tools:common:27.2.0-alpha16")
@file:DependsOn("com.squareup:kotlinpoet:1.7.2")
@file:DependsOn("org.ogce:xpp3:1.1.6")
```

