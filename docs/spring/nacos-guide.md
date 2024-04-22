# Nacos 

## 开机自起

**编写 Nacos 系统启动文件**

vim  `/lib/systemd/system/nacos.service`

```
[Unit]
Description=nacos
After=network.target
 
[Service]
#Environment="JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk"
Type=forking
ExecStart=/home/tools/nacos/nacos/bin/startup.sh -m standalone
ExecReload=/home/tools/nacos/nacos/bin/shutdown.sh
ExecStop=/home/tools/nacos/nacos/bin/shutdown.sh
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
```

**重新加载 systemd 配置**:  `sudo systemctl daemon-reload`。

- 启用服务：`sudo systemctl enable myapp`

- 启动服务：`sudo systemctl start myapp`
- 停止服务：`sudo systemctl stop myapp`
- 重启服务：`sudo systemctl restart myapp`

## 服务配置

[Nacos 快速开始](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html)

**GRPC 端口修改**

[目前服务端启动时，grpc端口在tcp端口基础上固定漂移1000，能否在配置文件中新增配置项设置grpc端口? )](https://github.com/alibaba/nacos/issues/8695)  
[记一次使用nacos2踩到的坑-腾讯云开发者社区](https://cloud.tencent.com/developer/article/2077110)，[Nacos 2.0.0 兼容性文档](https://nacos.io/zh-cn/docs/v2/upgrading/2.0.0-compatibility.html)  

启动的时候，加上

```properties
-Dnacos.server.grpc.port.offset=0
```

或者在主启动类硬编码

```java
System.setProperty("nacos.server.grpc.port.offset","0");
```

`com.alibaba.nacos.common.remote.client.grpc.GrpcClient#connectToServer`  
`com.alibaba.nacos.common.remote.client.grpc.GrpcSdkClient#rpcPortOffset` `com.alibaba.nacos.common.remote.client.grpc.GrpcClusterClient#rpcPortOffset`  
`com.alibaba.nacos.common.remote.client.grpc.GrpcConstants#NACOS_SERVER_GRPC_PORT_OFFSET_KEY`   

**GRPC  ServerName是什么**

根据 [gRPC 客户机属性 (grpcClient) - IBM 文档](https://www.ibm.com/docs/zh/was-liberty/nd?topic=configuration-grpcclient) 说明，Path 路径由 gRPC 服务名称和方法名称组成，格式为“ServiceName/MethodName”。  
service 定义在 [nacos_grpc_service.proto](https://github.com/alibaba/nacos/blob/develop/api/src/main/proto/nacos_grpc_service.proto)，生成 Service 有两个 Request 和 BiRequestStream。  
`com.alibaba.nacos.api.grpc.auto.RequestGrpc`  
`com.alibaba.nacos.api.grpc.auto.BiRequestStreamGrpc`  

`com.alibaba.nacos.common.remote.client.RpcClientFactory`
`com.alibaba.nacos.core.cluster.remote.ClusterRpcClientProxy` 的 `memberClientKey(Member member)` 可知道是 `Cluster-` 开头拼接 member 。

**开启登录/鉴权**

[Nacos Authorization 相关参数](https://nacos.io/zh-cn/docs/v2/guide/user/auth/#相关参数)

```pro
nacos.core.auth.enabled=true
nacos.core.auth.server.identity.key=example
nacos.core.auth.server.identity.value=example
nacos.core.auth.plugin.nacos.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789
```

[Nacos系列(9)-Nacos注册及配置中心开启权限认证](https://blog.csdn.net/qq_43437874/article/details/108431799)

**设置访问IP**

ip-address参数可以直接设置nacos的ip

```properties
nacos.inetutils.ip-address=10.11.105.155
```

[多网卡ip选择](https://nacos.io/docs/v2/guide/admin/deployment/#多网卡ip选择)

[nacos_云烟成雨TD的博客-CSDN博客](https://blog.csdn.net/qq_43437874/category_10274553.html)
