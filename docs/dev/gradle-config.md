# Gradle 配置

## 全局配置Aliyun代理

`~/.gradle/` 目录下创建编辑 [init.gradle](https://gist.github.com/eitanliu/a8123e4d13d9068df37325af40494963) Kotlin 版本  [init.gradle.kts](https://gist.github.com/bennyhuo/af7c43cc4831661193605e124f539942)

```groovy
// 复制这个文件到用户目录的.gradle目录，改名为init.gradle
// ~/.gradle/init.gradle
ext {
    def GOOGLE_URL = 'https://dl.google.com'
    def CENTER_URL = 'https://repo.maven.apache.org/maven2'
    def CENTER1_URL = 'https://repo1.maven.org/maven2'
    def JCENTER_URL = 'https://jcenter.bintray.com'
    def GRADLE_PLUGIN_URL = 'https://plugins.gradle.org/m2'
    def SPRING_URL = 'http://repo.spring.io/libs-milestone'
    def SPRING_PLUGIN_URL = 'http://repo.spring.io/plugins-release'
    def SPRING_LIBS_MILESTONE_URL = 'https://repo.spring.io/artifactory/libs-milestone'
    def SPRING_PLUGIN_RELEASE_URL = 'https://repo.spring.io/artifactory/plugins-release'
    def GRAILS_CORE_URL = 'https://repo.grails.org/grails/core'
    def APACHE_SNAPSHOTS_URL = 'https://repository.apache.org/snapshots'

    def FLUTTER_URL = 'http://download.flutter.io'
    def GRADLE_LOCAL_RELEASE_URL = 'https://repo.gradle.org/gradle/libs-releases-local'


    def MIRROR_GOOGLE_URL = 'https://mirrors.tencent.com/nexus/repository/maven-public/'
    def MIRROR_CENTER_URL = 'https://mirrors.tencent.com/nexus/repository/maven-central/'
    def MIRROR_JCENTER_URL = 'https://mirrors.tencent.com/nexus/repository/maven-public/'
    def MIRROR_GRADLE_PLUGIN_URL = 'https://mirrors.tencent.com/nexus/repository/gradle-plugins/'
    // def MIRROR_GOOGLE_URL = 'https://maven.aliyun.com/repository/google'
    // def MIRROR_CENTER_URL = 'https://maven.aliyun.com/repository/central'
    // def MIRROR_JCENTER_URL = 'https://maven.aliyun.com/repository/public'
    // def MIRROR_GRADLE_PLUGIN_URL = 'https://maven.aliyun.com/repository/gradle-plugin'
    def MIRROR_SPRING_URL = 'https://maven.aliyun.com/repository/spring'
    def MIRROR_SPRING_PLUGIN_URL = 'https://maven.aliyun.com/repository/spring-plugin'
    def MIRROR_GRAILS_CORE_URL = 'https://maven.aliyun.com/repository/grails-core'
    def MIRROR_APACHE_SNAPSHOTS_URL = 'https://maven.aliyun.com/repository/apache-snapshots'
    def MIRROR_PUBLIC_URL = 'https://maven.aliyun.com/repository/public'

    def MIRROR_FLUTTER_URL = 'https://storage.flutter-io.cn/download.flutter.io'

    mirrorRepo = new LinkedHashMap<String, String>() {
        {
            put(GOOGLE_URL, MIRROR_GOOGLE_URL)
            put(CENTER_URL, MIRROR_CENTER_URL)
            put(CENTER1_URL, MIRROR_CENTER_URL)
            put(JCENTER_URL, MIRROR_JCENTER_URL)
            put(GRADLE_PLUGIN_URL, MIRROR_GRADLE_PLUGIN_URL)
            put(SPRING_URL, MIRROR_SPRING_URL)
            put(SPRING_PLUGIN_URL, MIRROR_SPRING_PLUGIN_URL)
            put(SPRING_LIBS_MILESTONE_URL, MIRROR_SPRING_URL)
            put(SPRING_PLUGIN_RELEASE_URL, MIRROR_SPRING_PLUGIN_URL)
            put(GRAILS_CORE_URL, MIRROR_GRAILS_CORE_URL)
            put(APACHE_SNAPSHOTS_URL, MIRROR_APACHE_SNAPSHOTS_URL)
            //put(FLUTTER_URL, MIRROR_FLUTTER_URL)
        }
    }

    mirrorOrigin = mirrorRepo.keySet().collect {
        println "mirrorRepo item $it -> ${mirrorRepo[it]}"
        [it.replaceFirst("http://", "").replaceFirst("https://", ""), it]
    }
}

Closure handleMirrorRepo = { RepositoryHandler handler, boolean mirrorEnable, Project project, String tag = "all" ->
    handler.configureEach { ArtifactRepository repo ->

        if (mirrorEnable && repo instanceof MavenArtifactRepository) {
            def url = repo.url.toString()
            // println("$tag Origin Repository $url")
            mirrorOrigin.forEach { List<String> origin ->
                if (url.contains(origin[0])) {
                    def mirrorUrl = mirrorRepo[origin[1]]
                    try {
                        repo.url = mirrorUrl
                        println "Mirror Repository $project $tag: $url replaced $mirrorUrl."
                    } catch (Throwable e) {
                        println "Mirror Repository $project $tag: $url error $e."
                    }
                }
            }
        }

    }
}

allprojects {
    def flutterProjectRoot = rootProject.projectDir.parentFile
    def pluginsFile = new File(flutterProjectRoot, '.flutter-plugins')
    def isFlutterProject = pluginsFile.exists()
    def mirrorEnable = Boolean.valueOf(findProperty("mirror_maven_enable")?.toString() ?: "true");

    //mirrorEnable = mirrorEnable || isFlutterProject
    project.logger.lifecycle "$project mirror_maven_enable $mirrorEnable"

    handleMirrorRepo(repositories, mirrorEnable, project, "all")

    buildscript {

        handleMirrorRepo(repositories, mirrorEnable, project, "buildscript")
    }
}

gradle.beforeSettings { settings ->
    // println "beforeSettings ${settings.properties}"
    // def mirrorEnable = true;
    def mirrorEnable = Boolean.valueOf(settings.properties.getOrDefault("mirror_maven_enable", "true") as String);
    handleMirrorRepo(settings.pluginManagement.repositories, mirrorEnable, null, "pluginManagement")
    // 6.8 及更高版本执行 DependencyResolutionManagement 配置
    // dependencyResolutionManagement.repositories
    if (gradle.gradleVersion >= "6.8") {
        def getMethod = settings.class.getDeclaredMethod("getDependencyResolutionManagement")
        def dependencyResolutionManagement = getMethod.invoke(settings)
        def repositoriesMethod = dependencyResolutionManagement.class.getDeclaredMethod("getRepositories")
        def repositories = repositoriesMethod.invoke(dependencyResolutionManagement) as RepositoryHandler
        handleMirrorRepo(repositories, mirrorEnable, null, "dependencyResolutionManagement")
    }
}

```

## 缓存配置

[Gradle Directories](https://docs.gradle.org/current/userguide/directory_layout.html#dir:gradle_user_home)  

### 禁用自动清理

`~/.gradle/init.d/cache-settings.gradle`

```groovy
Class clazz = Class.forName("org.gradle.util.GradleVersion")
boolean hasGradleVersion = null != clazz
def currentMethod = clazz.getMethod("current")
def versionMethod = clazz.getMethod("version", String.class)

if (hasGradleVersion && currentMethod.invoke(null) >= versionMethod.invoke(null, '8.0')) {
    apply from: "gradle8/cache-settings.gradle"
}
```

```groovy
boolean hasGradleVersion = null != Class.forName("org.gradle.util.GradleVersion")
if (hasGradleVersion && GradleVersion.current() >= GradleVersion.version('8.0')) {
    apply from: "gradle8/cache-settings.gradle"
}
```

`.gradle/init.d/gradle8/cache-settings.gradle`

```groovy
beforeSettings { settings ->
    settings.caches {
        cleanup = Cleanup.DISABLED
    }
}
```



## Gradle 下载

Gradle 的缓存目录为 `~/.gradle/wrapper/dists/{版本号}/{hash}/{版本号}.zip` ，要下载的Gradle版本链接加上 `.sha256` 可获取版本 hash 值。  
[Gradle Releases](https://gradle.org/releases/)， [stable distributions](https://services.gradle.org/distributions/)  

## 错误处里

### 依赖一直下载失败

~/.gradle/caches/modules-2/metadata-x.xx 删除对于的包文件夹

### 删除kapt缓存

~/.gralde/caches/transforms-x, `x` 是 KAPT 版本号
