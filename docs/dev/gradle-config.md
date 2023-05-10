# Gradle 配置

## 全局配置Aliyun代理

`~/.gradle/` 目录下创建编辑 [init.gradle](https://gist.github.com/eitanliu/a8123e4d13d9068df37325af40494963)

```groovy
// 复制这个文件到用户目录的.gradle目录，改名为init.gradle
// ~/.gradle/init.gradle
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

def ALIYUN_GOOGLE_URL = 'https://maven.aliyun.com/repository/google'
def ALIYUN_CENTER_URL = 'https://maven.aliyun.com/repository/central'
def ALIYUN_JCENTER_URL = 'https://maven.aliyun.com/repository/jcentral'
def ALIYUN_GRADLE_PLUGIN_URL = 'https://maven.aliyun.com/repository/gradle-plugin'
def ALIYUN_SPRING_URL = 'https://maven.aliyun.com/repository/spring'
def ALIYUN_SPRING_PLUGIN_URL = 'https://maven.aliyun.com/repository/spring-plugin'
def ALIYUN_GRAILS_CORE_URL = 'https://maven.aliyun.com/repository/grails-core'
def ALIYUN_APACHE_SNAPSHOTS_URL = 'https://maven.aliyun.com/repository/apache-snapshots'
def ALIYUN_PUBLIC_URL = 'https://maven.aliyun.com/repository/public'

def FLUTTER_CN_URL = 'https://storage.flutter-io.cn/download.flutter.io'

def mirrorRepo = new HashMap<String, String>() {
    {
        put(GOOGLE_URL, ALIYUN_GOOGLE_URL)
        put(CENTER_URL, ALIYUN_CENTER_URL)
        put(CENTER1_URL, ALIYUN_CENTER_URL)
        put(JCENTER_URL, ALIYUN_PUBLIC_URL)
        put(GRADLE_PLUGIN_URL, ALIYUN_GRADLE_PLUGIN_URL)
        put(SPRING_URL, ALIYUN_SPRING_URL)
        put(SPRING_PLUGIN_URL, ALIYUN_SPRING_PLUGIN_URL)
        put(SPRING_LIBS_MILESTONE_URL, ALIYUN_SPRING_URL)
        put(SPRING_PLUGIN_RELEASE_URL, ALIYUN_SPRING_PLUGIN_URL)
        put(GRAILS_CORE_URL, ALIYUN_GRAILS_CORE_URL)
        put(APACHE_SNAPSHOTS_URL, ALIYUN_APACHE_SNAPSHOTS_URL)
        //put(FLUTTER_URL, FLUTTER_CN_URL)
    }
}

def mirrorOrigin = mirrorRepo.keySet().collect {
    [it.replaceFirst("http://", "").replaceFirst("https://", ""), it]
}

allprojects {
    def mirrorEnable = Boolean.valueOf(properties.getOrDefault("mirror_aliyun_enable", "true") as String);
    project.logger.lifecycle "$project mirror_aliyun_enable $mirrorEnable"

    repositories {

        configureEach { ArtifactRepository repo ->

            if (mirrorEnable && repo instanceof MavenArtifactRepository) {
                def url = repo.url.toString()
                // println("all $project repo: $url")
                mirrorOrigin.forEach {
                    if (url.contains(it[0])) {
                        def mirrorUrl = mirrorRepo[it[1]]
                        project.logger.lifecycle "$project Repository ${repo.url} replaced $mirrorUrl."
                        repo.url = mirrorUrl
                    }
                }
            }

        }
    }

    buildscript {

        repositories {

            configureEach { ArtifactRepository repo ->

                if (mirrorEnable && repo instanceof MavenArtifactRepository) {
                    def url = repo.url.toString()
                    // println("all buildscript $project repo: $url")
                    mirrorOrigin.forEach {
                        if (url.contains(it[0])) {
                            def mirrorUrl = mirrorRepo[it[1]]
                            project.logger.lifecycle "buildscript $project Repository ${repo.url} replaced $mirrorUrl."
                            repo.url = mirrorUrl
                        }
                    }
                }

            }
        }
    }
}
```

## 错误处里

### 依赖一直下载失败

~/.gradle/caches/modules-2/metadata-x.xx 删除对于的包文件夹

### 删除kapt缓存

~/.gralde/caches/transforms-x, `x` 是 KAPT 版本号
