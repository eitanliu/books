---
order: 1
---

# R2DBC MySQL使用配置

## 什么是R2DBC

R2DBC全称 `Reactive Relational Database Connectivity`，.R2DBC 是一套响应式数据库操作 API 规范。它定义了API ，由驱动程序供应商实现以访问其关系数据库。  

之所以要创建R2DBC是因要需要一个以少量线程和更少硬件资源进行的非阻塞应用栈来处理并发性。使用JDBC标准的API无法满足使用需求，因为使用  `线程池`  来弥补阻塞处理是有限的。

## 什么是 Reactive

是响应式 `reactive` 是一套以观察者和被观察为基础的编程模型，根据被观察者数据变化做出响应。从这方面来说， 非阻塞的是响应式的而不是被阻塞。是在操作完成或数据可用时对通知做出反应。  
[Reactive Streams](https://github.com/reactive-streams/reactive-streams-jvm/blob/v1.0.4/README.md#specification) 是一个小规范（在 Java 9 中也采用），它定义了异步组件与背压之间的交互。反应式流的主要目的是让订阅者控制发布者生成数据的速度或速度。 

## Reactive API

Reactive Streams 在互操作性方面发挥着重要作用。对于三方库和基础组件很有用，但作为应用开发API 的用处不大，因为它太低级了。应用开发需要一个更高级别、更丰富、功能更强大的 API 来组合异步逻辑⟩——⟩类似于 Java 8 Stream API，但不仅限于表。这就是 `Reactive API` 的作用。  

[Project Reactor](https://github.com/reactor/reactor) 是 Spring Data R2DBC 使用的响应式库。它提供了  [`Mono`](https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Mono.html) 和 [`Flux`](https://projectreactor.io/docs/core/release/api/reactor/core/publisher/Flux.html) API 类型，通过一组与 ReactiveX 相似的操作函数来处理 0..1（`Mono`）和 0..N（`Flux`）的数据序列。

Spring Data R2DBC 需要 Project Reactor 作为核心依赖项，但它可以通过 Reactive Streams 规范与其他反应库进行互操作。作为一般规则，Spring Data R2DBC 存储库接受普通 Publisher 作为输入，在内部将其适应 Reactor 类型，使用它，并返回 Mono 或 Flux 作为输出。因此，您可以将任何 Publisher 作为输入传递并在输出上应用操作，但您需要调整输出以用于另一个反应式库。只要可行，Spring Data 就会透明地适应 RxJava 或其他响应式库的使用。

## 自动化

### 自动创建表

[Database persistence with Exposed - Ktor](https://ktor.io/docs/interactive-website-add-persistence.html)  
类型对应关系[DataTypes](https://github.com/JetBrains/Exposed/wiki/DataTypes)  

### 实体生成器

[KotlinPoet](https://github.com/square/kotlinpoet/)、 [JavaPoet](https://github.com/square/javapoet) 生成代码

[KotlinPoet Doc](https://square.github.io/kotlinpoet/)



## 数据插入

自定义数据更新 [Entity Callbacks](https://docs.spring.io/spring-data/r2dbc/docs/current/reference/html/#entity-callbacks)

跟踪谁创建或更改了实体以及更改发生的时间 [Auditing](https://docs.spring.io/spring-data/r2dbc/docs/current/reference/html/#auditing)


## 参考

[Spring Data R2DBC - Reference Documentation](https://docs.spring.io/spring-data/r2dbc/docs/current/reference/html/)  
[https://r2dbc.io](https://r2dbc.io/)  
[WebFlux实战——R2DBC连接池（r2dbc-pool）配置](https://blog.csdn.net/weixin_42182797/article/details/117216371)  
