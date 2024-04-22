# Spring 问题处理

**项目编译错误: Unable to find a single main class**

[Spring Boot: Configuring a Main Class | Baeldung](https://www.baeldung.com/spring-boot-main-class#gradle)

```
springBoot {
    mainClass = "com.example.ApplicationKt"
}
```

**版本对应依赖** 查看 [Spring Cloud](https://spring.io/projects/spring-cloud#overview)

**Feign调用报错：No qualifying bean of type ‘org.springframework.boot.autoconfigure.http.HttpMessageConvert**

**Feign异步调用问题 block()/blockFirst()/blockLast()**

使用了 WebFlux 必须异步调用，OpenFeign 是默认阻塞调用，可以自定义 `BlockingLoadBalancerClient` 或直接异步调用

[feign客户端无法解析返回值报错 No qualifying bean of type 'org.springframework.boot.autoconfigure.http.HttpMe... - 简书 (jianshu.com)](https://www.jianshu.com/p/d500d413b23f)  
[Feign调用报错：No qualifying bean of type ‘org.springframework.boot.autoconfigure.http.HttpMessageConvert_no qualifying bean of type 'org.springframework.bo-CSDN博客](https://blog.csdn.net/CharlesZKQ/article/details/112213110)  