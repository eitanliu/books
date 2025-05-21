import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as i,c as o,b as n,d as s,a as e,e as t}from"./app-zSMpBOKH.js";const p={},u=t('<h1 id="router-c" tabindex="-1"><a class="header-anchor" href="#router-c" aria-hidden="true">#</a> Router C</h1><h2 id="版本介绍" tabindex="-1"><a class="header-anchor" href="#版本介绍" aria-hidden="true">#</a> 版本介绍</h2><ul><li>ClashVerge：一个 Tarui 语言开发的多平台代理客户端<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></li><li>MetaCubeX：ClashVerge 上使用的内核<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></li></ul><h2 id="proxies" tabindex="-1"><a class="header-anchor" href="#proxies" aria-hidden="true">#</a> Proxies</h2><p>ss/vmess 配置转换<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p><h3 id="subscription-links" tabindex="-1"><a class="header-anchor" href="#subscription-links" aria-hidden="true">#</a> Subscription Links</h3>',6),r={href:"https://github.com/WilliamStar007/ClashX-V2Ray-TopFreeProxy",target:"_blank",rel:"noopener noreferrer"},d=t(`<ul><li>NodeFree: https://nodefree.org/dy/2023/09/20230928.yaml ★</li><li>ClashNode: https://clashnode.com/wp-content/uploads/2023/09/20230928.yaml ★</li><li>NiceVPN: https://sub.nicevpn.top/Clash.yaml ★</li><li>Mfuu: https://raw.githubusercontent.com/mfuu/v2ray/master/clash.yaml</li><li>Anaer: https://raw.githubusercontent.com/anaer/Sub/main/clash.yaml ★</li><li>Pojiezhiyuanjun: https://raw.githubusercontent.com/pojiezhiyuanjun/2023/master/0928clash.yml</li><li>Oslook: https://raw.githubusercontent.com/oslook/clash-freenode/main/clash.yaml</li><li>Ermaozi: https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/clash.yml ★</li><li>Learnhard-cn: https://cdn.jsdelivr.net/gh/learnhard-cn/free_proxy_ss@main/clash/clash.provider.yaml</li><li>Tbbatbb: https://raw.githubusercontent.com/tbbatbb/Proxy/master/dist/clash.config.yaml</li><li>Vveg26: https://raw.githubusercontent.com/vveg26/get_proxy/main/dist/clash.config.yaml</li><li>OpenRunner: https://raw.githubusercontent.com/openrunner/clash-freenode/main/clash.yaml ★</li><li>Xrayfree: https://tt.vg/freeclash</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/NiceVPN123/NiceVPN@main/Clash.yaml
https://cdn.jsdelivr.net/gh/mfuu/v2ray@master/merge/merge_clash.yaml
https://cdn.jsdelivr.net/gh/anaer/Sub@main/clash.yaml
https://cdn.jsdelivr.net/gh/oslook/clash-freenode@main/clash.yaml
https://cdn.jsdelivr.net/gh/ermaozi/get_subscribe@main/subscribe/clash.yml
https://cdn.jsdelivr.net/gh/learnhard-cn/free_proxy_ss@main/clash/clash.provider.yaml
https://cdn.jsdelivr.net/gh/tbbatbb/Proxy@master/dist/clash.config.yaml
https://cdn.jsdelivr.net/gh/vveg26/get_proxy@main/dist/clash.config.yaml
https://cdn.jsdelivr.net/gh/openrunner/clash-freenode@main/clash.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h3>`,3),m={href:"https://nodefree.org/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://clashnode.com/",target:"_blank",rel:"noopener noreferrer"},k=t("<li>NiceVPN (https://github.com/NiceVPN123/NiceVPN)</li><li>Mfuu (https://github.com/mfuu/v2ray)</li><li>Anaer (https://github.com/anaer/Sub)</li><li>Pojiezhiyuanjun (https://github.com/pojiezhiyuanjun/2023)</li><li>Oslook (https://github.com/oslook/clash-freenode)</li><li>Ermaozi (https://github.com/ermaozi/get_subscribe)</li><li>Learnhard-cn (https://github.com/learnhard-cn/free_proxy_ss)</li><li>Tbbatbb (https://github.com/tbbatbb/Proxy)</li><li>Vveg26 (https://github.com/vveg26/getProxy)</li><li>OpenRunner (https://github.com/openRunner/clash-freenode)</li><li>Xrayfree (https://github.com/xrayfree/free-ssr-ss-v2ray-vpn-clash)</li><li>Lancellc (https://lancellc.gitbook.io/clash)</li>",12),b=t(`<h2 id="rules" tabindex="-1"><a class="header-anchor" href="#rules" aria-hidden="true">#</a> Rules</h2><p>dns-通配符域名匹配 <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup><br> 使用星号 (<code>*</code>) 来匹配单级通配符子域名.</p><table><thead><tr><th style="text-align:left;">表达式</th><th style="text-align:left;">匹配</th><th style="text-align:left;">不匹配</th></tr></thead><tbody><tr><td style="text-align:left;"><code>*.google.com</code></td><td style="text-align:left;"><code>www.google.com</code></td><td style="text-align:left;"><code>google.com</code></td></tr><tr><td style="text-align:left;"><code>*.bar.google.com</code></td><td style="text-align:left;"><code>foo.bar.google.com</code></td><td style="text-align:left;"><code>bar.google.com</code></td></tr><tr><td style="text-align:left;"><code>*.*.google.com</code></td><td style="text-align:left;"><code>thoughtful.sandbox.google.com</code></td><td style="text-align:left;"><code>one.two.three.google.com</code></td></tr></tbody></table><p>使用点号 (<code>.</code>) 来匹配多级通配符子域名.</p><table><thead><tr><th style="text-align:left;">表达式</th><th style="text-align:left;">匹配</th><th style="text-align:left;">不匹配</th></tr></thead><tbody><tr><td style="text-align:left;"><code>.google.com</code></td><td style="text-align:left;"><code>www.google.com</code></td><td style="text-align:left;"><code>google.com</code></td></tr><tr><td style="text-align:left;"><code>.google.com</code></td><td style="text-align:left;"><code>thoughtful.sandbox.google.com</code></td><td style="text-align:left;"><code>google.com</code></td></tr><tr><td style="text-align:left;"><code>.google.com</code></td><td style="text-align:left;"><code>one.two.three.google.com</code></td><td style="text-align:left;"><code>google.com</code></td></tr></tbody></table><p>使用加号 (<code>+</code>) 来匹配多级通配符子域名.<br><code>+</code> 通配符的工作方式类似于 <code>DOMAIN-SUFFIX</code>, 您可以一次进行多级的快速匹配.</p><table><thead><tr><th style="text-align:left;">表达式</th><th style="text-align:left;">匹配</th></tr></thead><tbody><tr><td style="text-align:left;"><code>+.google.com</code></td><td style="text-align:left;"><code>google.com</code></td></tr><tr><td style="text-align:left;"><code>+.google.com</code></td><td style="text-align:left;"><code>www.google.com</code></td></tr><tr><td style="text-align:left;"><code>+.google.com</code></td><td style="text-align:left;"><code>thoughtful.sandbox.google.com</code></td></tr><tr><td style="text-align:left;"><code>+.google.com</code></td><td style="text-align:left;"><code>one.two.three.google.com</code></td></tr></tbody></table><p>geoip 国家代码 <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><p>规则集 <sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></p><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">dns</span><span class="token punctuation">:</span>
  <span class="token key atrule">nameserver-policy</span><span class="token punctuation">:</span>
    <span class="token key atrule">&#39;+.cn&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;223.5.5.5&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),h={href:"https://blog.skk.moe/post/i-have-my-unique-dns-setup/",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),g={href:"https://github.com/SukkaW/Surge",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明" aria-hidden="true">#</a> 配置说明</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># HTTP(S) 代理服务端口</span>
<span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7890</span>

<span class="token comment"># SOCKS5 代理服务端口</span>
<span class="token key atrule">socks-port</span><span class="token punctuation">:</span> <span class="token number">7891</span>

<span class="token comment"># Linux 和 macOS 的透明代理服务端口 (TCP 和 TProxy UDP 重定向)</span>
<span class="token comment"># redir-port: 7892</span>

<span class="token comment"># Linux 的透明代理服务端口 (TProxy TCP 和 TProxy UDP)</span>
<span class="token comment"># tproxy-port: 7893</span>

<span class="token comment"># HTTP(S) 和 SOCKS4(A)/SOCKS5 代理服务共用一个端口</span>
<span class="token comment"># mixed-port: 7890</span>

<span class="token comment"># 本地 SOCKS5/HTTP(S) 代理服务的认证</span>
<span class="token comment"># authentication:</span>
<span class="token comment">#  - &quot;user1:pass1&quot;</span>
<span class="token comment">#  - &quot;user2:pass2&quot;</span>

<span class="token comment"># 设置为 true 以允许来自其他 LAN IP 地址的连接</span>
<span class="token comment"># allow-lan: false</span>

<span class="token comment"># 仅当 \`allow-lan\` 为 \`true\` 时有效</span>
<span class="token comment"># &#39;*&#39;: 绑定所有 IP 地址</span>
<span class="token comment"># 192.168.122.11: 绑定单个 IPv4 地址</span>
<span class="token comment"># &quot;[aaaa::a8aa:ff:fe09:57d8]&quot;: 绑定单个 IPv6 地址</span>
<span class="token comment"># bind-address: &#39;*&#39;</span>

<span class="token comment"># Clash 路由工作模式</span>
<span class="token comment"># rule: 基于规则的数据包路由</span>
<span class="token comment"># global: 所有数据包将被转发到单个节点</span>
<span class="token comment"># direct: 直接将数据包转发到互联网</span>
<span class="token key atrule">mode</span><span class="token punctuation">:</span> rule

<span class="token comment"># 默认情况下, Clash 将日志打印到 STDOUT</span>
<span class="token comment"># 日志级别: info / warning / error / debug / silent</span>
<span class="token comment"># log-level: info</span>

<span class="token comment"># 当设置为 false 时, 解析器不会将主机名解析为 IPv6 地址</span>
<span class="token comment"># ipv6: false</span>

<span class="token comment"># RESTful Web API 监听地址</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9090</span>

<span class="token comment"># 配置目录的相对路径或静态 Web 资源目录的绝对路径. Clash core 将在</span>
<span class="token comment"># \`http://{{external-controller}}/ui\` 中提供服务.</span>
<span class="token comment"># external-ui: folder</span>

<span class="token comment"># RESTful API 密钥 (可选)</span>
<span class="token comment"># 通过指定 HTTP 头 \`Authorization: Bearer \${secret}\` 进行身份验证</span>
<span class="token comment"># 如果RESTful API在 0.0.0.0 上监听, 务必设置一个 secret 密钥.</span>
<span class="token comment"># secret: &quot;&quot;</span>

<span class="token comment"># 出站接口名称</span>
<span class="token comment"># interface-name: en0</span>

<span class="token comment"># fwmark (仅在 Linux 上有效)</span>
<span class="token comment"># routing-mark: 6666</span>

<span class="token comment"># 用于DNS服务器和连接建立的静态主机 (如/etc/hosts) .</span>
<span class="token comment">#</span>
<span class="token comment"># 支持通配符主机名 (例如 *.clash.dev, *.foo.*.example.com)</span>
<span class="token comment"># 非通配符域名优先级高于通配符域名</span>
<span class="token comment"># 例如 foo.example.com &gt; *.example.com &gt; .example.com</span>
<span class="token comment"># P.S. +.foo.com 等于 .foo.com 和 foo.com</span>
<span class="token comment"># hosts:</span>
  <span class="token comment"># &#39;*.clash.dev&#39;: 127.0.0.1</span>
  <span class="token comment"># &#39;.dev&#39;: 127.0.0.1</span>
  <span class="token comment"># &#39;alpha.clash.dev&#39;: &#39;::1&#39;</span>

<span class="token comment"># profile:</span>
  <span class="token comment"># 将 \`select\` 手动选择 结果存储在 $HOME/.config/clash/.cache 中</span>
  <span class="token comment"># 如果不需要此行为, 请设置为 false</span>
  <span class="token comment"># 当两个不同的配置具有同名的组时, 将共享所选值</span>
  <span class="token comment"># store-selected: true</span>

  <span class="token comment"># 持久化 fakeip</span>
  <span class="token comment"># store-fake-ip: false</span>

<span class="token comment"># DNS 服务设置</span>
<span class="token comment"># 此部分是可选的. 当不存在时, DNS 服务将被禁用.</span>
<span class="token key atrule">dns</span><span class="token punctuation">:</span>
  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">listen</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">53</span>
  <span class="token comment"># ipv6: false # 当为 false 时, AAAA 查询的响应将为空</span>

  <span class="token comment"># 这些 名称服务器(nameservers) 用于解析下列 DNS 名称服务器主机名.</span>
  <span class="token comment"># 仅指定 IP 地址</span>
  <span class="token key atrule">default-nameserver</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 114.114.114.114
    <span class="token punctuation">-</span> 8.8.8.8
  <span class="token comment"># enhanced-mode: fake-ip</span>
  <span class="token key atrule">fake-ip-range</span><span class="token punctuation">:</span> 198.18.0.1/16 <span class="token comment"># Fake IP 地址池 CIDR</span>
  <span class="token comment"># use-hosts: true # 查找 hosts 并返回 IP 记录</span>

  <span class="token comment"># search-domains: [local] # A/AAAA 记录的搜索域</span>

  <span class="token comment"># 此列表中的主机名将不会使用 Fake IP 解析</span>
  <span class="token comment"># 即, 对这些域名的请求将始终使用其真实 IP 地址进行响应</span>
  <span class="token comment"># fake-ip-filter:</span>
  <span class="token comment">#   - &#39;*.lan&#39;</span>
  <span class="token comment">#   - localhost.ptlogin2.qq.com</span>

  <span class="token comment"># 支持 UDP、TCP、DoT、DoH. 您可以指定要连接的端口.</span>
  <span class="token comment"># 所有 DNS 查询都直接发送到名称服务器, 无需代理</span>
  <span class="token comment"># Clash 使用第一个收到的响应作为 DNS 查询的结果.</span>
  <span class="token key atrule">nameserver</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 114.114.114.114 <span class="token comment"># 默认值</span>
    <span class="token punctuation">-</span> 8.8.8.8 <span class="token comment"># 默认值</span>
    <span class="token punctuation">-</span> tls<span class="token punctuation">:</span>//dns.rubyfish.cn<span class="token punctuation">:</span><span class="token number">853</span> <span class="token comment"># DNS over TLS</span>
    <span class="token punctuation">-</span> https<span class="token punctuation">:</span>//1.1.1.1/dns<span class="token punctuation">-</span>query <span class="token comment"># DNS over HTTPS</span>
    <span class="token punctuation">-</span> dhcp<span class="token punctuation">:</span>//en0 <span class="token comment"># 来自 dhcp 的 dns</span>
    <span class="token comment"># - &#39;8.8.8.8#en0&#39;</span>

  <span class="token comment"># 当 \`fallback\` 存在时, DNS 服务器将向此部分中的服务器</span>
  <span class="token comment"># 与 \`nameservers\` 中的服务器发送并发请求</span>
  <span class="token comment"># 当 GEOIP 国家不是 \`CN\` 时, 将使用 fallback 服务器的响应</span>
  <span class="token comment"># fallback:</span>
  <span class="token comment">#   - tcp://1.1.1.1</span>
  <span class="token comment">#   - &#39;tcp://1.1.1.1#en0&#39;</span>

  <span class="token comment"># 如果使用 \`nameservers\` 解析的 IP 地址在下面指定的子网中,</span>
  <span class="token comment"># 则认为它们无效, 并使用 \`fallback\` 服务器的结果.</span>
  <span class="token comment">#</span>
  <span class="token comment"># 当 \`fallback-filter.geoip\` 为 true 且 IP 地址的 GEOIP 为 \`CN\` 时,</span>
  <span class="token comment"># 将使用 \`nameservers\` 服务器解析的 IP 地址.</span>
  <span class="token comment">#</span>
  <span class="token comment"># 如果 \`fallback-filter.geoip\` 为 false, 且不匹配 \`fallback-filter.ipcidr\`,</span>
  <span class="token comment"># 则始终使用 \`nameservers\` 服务器的结果</span>
  <span class="token comment">#</span>
  <span class="token comment"># 这是对抗 DNS 污染攻击的一种措施.</span>
  <span class="token comment"># fallback-filter:</span>
  <span class="token comment">#   geoip: true</span>
  <span class="token comment">#   geoip-code: CN</span>
  <span class="token comment">#   ipcidr:</span>
  <span class="token comment">#     - 240.0.0.0/4</span>
  <span class="token comment">#   domain:</span>
  <span class="token comment">#     - &#39;+.google.com&#39;</span>
  <span class="token comment">#     - &#39;+.facebook.com&#39;</span>
  <span class="token comment">#     - &#39;+.youtube.com&#39;</span>

  <span class="token comment"># 通过特定的名称服务器查找域名</span>
  <span class="token comment"># nameserver-policy:</span>
  <span class="token comment">#   &#39;www.baidu.com&#39;: &#39;114.114.114.114&#39;</span>
  <span class="token comment">#   &#39;+.internal.crop.com&#39;: &#39;10.0.0.1&#39;</span>

<span class="token key atrule">proxies</span><span class="token punctuation">:</span>
  <span class="token comment"># Shadowsocks</span>
  <span class="token comment"># 支持的加密方法:</span>
  <span class="token comment">#   aes-128-gcm aes-192-gcm aes-256-gcm</span>
  <span class="token comment">#   aes-128-cfb aes-192-cfb aes-256-cfb</span>
  <span class="token comment">#   aes-128-ctr aes-192-ctr aes-256-ctr</span>
  <span class="token comment">#   rc4-md5 chacha20-ietf xchacha20</span>
  <span class="token comment">#   chacha20-ietf-poly1305 xchacha20-ietf-poly1305</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;ss1&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ss
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> chacha20<span class="token punctuation">-</span>ietf<span class="token punctuation">-</span>poly1305
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
    <span class="token comment"># udp: true</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;ss2&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ss
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> chacha20<span class="token punctuation">-</span>ietf<span class="token punctuation">-</span>poly1305
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
    <span class="token key atrule">plugin</span><span class="token punctuation">:</span> obfs
    <span class="token key atrule">plugin-opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span> tls <span class="token comment"># or http</span>
      <span class="token comment"># host: bing.com</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;ss3&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ss
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> chacha20<span class="token punctuation">-</span>ietf<span class="token punctuation">-</span>poly1305
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
    <span class="token key atrule">plugin</span><span class="token punctuation">:</span> v2ray<span class="token punctuation">-</span>plugin
    <span class="token key atrule">plugin-opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span> websocket <span class="token comment"># 暂不支持 QUIC</span>
      <span class="token comment"># tls: true # wss</span>
      <span class="token comment"># skip-cert-verify: true</span>
      <span class="token comment"># host: bing.com</span>
      <span class="token comment"># path: &quot;/&quot;</span>
      <span class="token comment"># mux: true</span>
      <span class="token comment"># headers:</span>
      <span class="token comment">#   custom: value</span>

  <span class="token comment"># vmess</span>
  <span class="token comment"># 支持的加密方法:</span>
  <span class="token comment">#  auto/aes-128-gcm/chacha20-poly1305/none</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;vmess&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> vmess
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">uuid</span><span class="token punctuation">:</span> uuid
    <span class="token key atrule">alterId</span><span class="token punctuation">:</span> <span class="token number">32</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> auto
    <span class="token comment"># udp: true</span>
    <span class="token comment"># tls: true</span>
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token comment"># servername: example.com # 优先于 wss 主机</span>
    <span class="token comment"># network: ws</span>
    <span class="token comment"># ws-opts:</span>
    <span class="token comment">#   path: /path</span>
    <span class="token comment">#   headers:</span>
    <span class="token comment">#     Host: v2ray.com</span>
    <span class="token comment">#   max-early-data: 2048</span>
    <span class="token comment">#   early-data-header-name: Sec-WebSocket-Protocol</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;vmess-h2&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> vmess
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">uuid</span><span class="token punctuation">:</span> uuid
    <span class="token key atrule">alterId</span><span class="token punctuation">:</span> <span class="token number">32</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> auto
    <span class="token key atrule">network</span><span class="token punctuation">:</span> h2
    <span class="token key atrule">tls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">h2-opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> http.example.com
        <span class="token punctuation">-</span> http<span class="token punctuation">-</span>alt.example.com
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;vmess-http&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> vmess
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">uuid</span><span class="token punctuation">:</span> uuid
    <span class="token key atrule">alterId</span><span class="token punctuation">:</span> <span class="token number">32</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> auto
    <span class="token comment"># udp: true</span>
    <span class="token comment"># network: http</span>
    <span class="token comment"># http-opts:</span>
    <span class="token comment">#   # method: &quot;GET&quot;</span>
    <span class="token comment">#   # path:</span>
    <span class="token comment">#   #   - &#39;/&#39;</span>
    <span class="token comment">#   #   - &#39;/video&#39;</span>
    <span class="token comment">#   # headers:</span>
    <span class="token comment">#   #   Connection:</span>
    <span class="token comment">#   #     - keep-alive</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> vmess<span class="token punctuation">-</span>grpc
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> vmess
    <span class="token key atrule">uuid</span><span class="token punctuation">:</span> uuid
    <span class="token key atrule">alterId</span><span class="token punctuation">:</span> <span class="token number">32</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> auto
    <span class="token key atrule">network</span><span class="token punctuation">:</span> grpc
    <span class="token key atrule">tls</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">servername</span><span class="token punctuation">:</span> example.com
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token key atrule">grpc-opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">grpc-service-name</span><span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span>

  <span class="token comment"># socks5</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;socks&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> socks5
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token comment"># username: username</span>
    <span class="token comment"># password: password</span>
    <span class="token comment"># tls: true</span>
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token comment"># udp: true</span>

  <span class="token comment"># http</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;http&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token comment"># username: username</span>
    <span class="token comment"># password: password</span>
    <span class="token comment"># tls: true # https</span>
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token comment"># sni: custom.com</span>

  <span class="token comment"># Snell</span>
  <span class="token comment"># 请注意, 目前还没有UDP支持.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;snell&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> snell
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">44046</span>
    <span class="token key atrule">psk</span><span class="token punctuation">:</span> yourpsk
    <span class="token comment"># version: 2</span>
    <span class="token comment"># obfs-opts:</span>
      <span class="token comment"># mode: http # or tls</span>
      <span class="token comment"># host: bing.com</span>

  <span class="token comment"># Trojan</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;trojan&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> trojan
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">password</span><span class="token punctuation">:</span> yourpsk
    <span class="token comment"># udp: true</span>
    <span class="token comment"># sni: example.com # aka 服务器名称</span>
    <span class="token comment"># alpn:</span>
    <span class="token comment">#   - h2</span>
    <span class="token comment">#   - http/1.1</span>
    <span class="token comment"># skip-cert-verify: true</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> trojan<span class="token punctuation">-</span>grpc
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> trojan
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span>
    <span class="token key atrule">network</span><span class="token punctuation">:</span> grpc
    <span class="token key atrule">sni</span><span class="token punctuation">:</span> example.com
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token key atrule">udp</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">grpc-opts</span><span class="token punctuation">:</span>
      <span class="token key atrule">grpc-service-name</span><span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span>

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> trojan<span class="token punctuation">-</span>ws
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> trojan
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;example&quot;</span>
    <span class="token key atrule">network</span><span class="token punctuation">:</span> ws
    <span class="token key atrule">sni</span><span class="token punctuation">:</span> example.com
    <span class="token comment"># skip-cert-verify: true</span>
    <span class="token key atrule">udp</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># ws-opts:</span>
      <span class="token comment"># path: /path</span>
      <span class="token comment"># headers:</span>
      <span class="token comment">#   Host: example.com</span>

  <span class="token comment"># ShadowsocksR</span>
  <span class="token comment"># 支持的加密方法: ss 中的所有流加密方法</span>
  <span class="token comment"># 支持的混淆方式:</span>
  <span class="token comment">#   plain http_simple http_post</span>
  <span class="token comment">#   random_head tls1.2_ticket_auth tls1.2_ticket_fastauth</span>
  <span class="token comment"># 支持的协议:</span>
  <span class="token comment">#   origin auth_sha1_v4 auth_aes128_md5</span>
  <span class="token comment">#   auth_aes128_sha1 auth_chain_a auth_chain_b</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;ssr&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> ssr
    <span class="token key atrule">server</span><span class="token punctuation">:</span> server
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">cipher</span><span class="token punctuation">:</span> chacha20<span class="token punctuation">-</span>ietf
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;password&quot;</span>
    <span class="token key atrule">obfs</span><span class="token punctuation">:</span> tls1.2_ticket_auth
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> auth_sha1_v4
    <span class="token comment"># obfs-param: domain.tld</span>
    <span class="token comment"># protocol-param: &quot;#&quot;</span>
    <span class="token comment"># udp: true</span>

<span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span>
  <span class="token comment"># 中继链路代理节点. 节点不应包含中继. 不支持 UDP.</span>
  <span class="token comment"># 流量节点链路: clash &lt;-&gt; http &lt;-&gt; vmess &lt;-&gt; ss1 &lt;-&gt; ss2 &lt;-&gt; Internet</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;relay&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> relay
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> http
      <span class="token punctuation">-</span> vmess
      <span class="token punctuation">-</span> ss1
      <span class="token punctuation">-</span> ss2

  <span class="token comment"># url-test 通过对 指定URL 进行基准速度测试来选择将使用哪个代理.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;auto&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ss1
      <span class="token punctuation">-</span> ss2
      <span class="token punctuation">-</span> vmess1
    <span class="token comment"># tolerance: 150</span>
    <span class="token comment"># lazy: true</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://www.gstatic.com/generate_204&#39;</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">300</span>

  <span class="token comment"># fallback-auto 基于优先级选择可用策略. 可用性通过访问 指定URL 来测试, 就像自动 url-test 组一样.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;fallback-auto&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> fallback
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ss1
      <span class="token punctuation">-</span> ss2
      <span class="token punctuation">-</span> vmess1
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://www.gstatic.com/generate_204&#39;</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">300</span>

  <span class="token comment"># 负载均衡: 同一 eTLD+1 的请求将拨号到同一代理.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;load-balance&quot;</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> load<span class="token punctuation">-</span>balance
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ss1
      <span class="token punctuation">-</span> ss2
      <span class="token punctuation">-</span> vmess1
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://www.gstatic.com/generate_204&#39;</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">300</span>
    <span class="token comment"># strategy: consistent-hashing # or round-robin</span>

  <span class="token comment"># select 手动选择, 用于选择代理或策略组</span>
  <span class="token comment"># 您可以使用 RESTful API 来切换代理, 建议在GUI中切换.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Proxy
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token comment"># disable-udp: true</span>
    <span class="token comment"># filter: &#39;someregex&#39;</span>
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ss1
      <span class="token punctuation">-</span> ss2
      <span class="token punctuation">-</span> vmess1
      <span class="token punctuation">-</span> auto

  <span class="token comment"># 直接连接到另一个接口名称或 fwmark, 也支持代理</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> en1
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">interface-name</span><span class="token punctuation">:</span> en1
    <span class="token key atrule">routing-mark</span><span class="token punctuation">:</span> <span class="token number">6667</span>
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> DIRECT

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> UseProvider
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> provider1
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> Proxy
      <span class="token punctuation">-</span> DIRECT

<span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider1</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;url&quot;</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">3600</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./provider1.yaml
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
      <span class="token comment"># lazy: true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> file
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /test.yaml
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">36000</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204

<span class="token key atrule">tunnels</span><span class="token punctuation">:</span>
  <span class="token comment"># 单行配置</span>
  <span class="token punctuation">-</span> tcp/udp<span class="token punctuation">,</span>127.0.0.1<span class="token punctuation">:</span><span class="token number">6553</span><span class="token punctuation">,</span>114.114.114.114<span class="token punctuation">:</span><span class="token number">53</span><span class="token punctuation">,</span>proxy
  <span class="token punctuation">-</span> tcp<span class="token punctuation">,</span>127.0.0.1<span class="token punctuation">:</span><span class="token number">6666</span><span class="token punctuation">,</span>rds.mysql.com<span class="token punctuation">:</span><span class="token number">3306</span><span class="token punctuation">,</span>vpn
  <span class="token comment"># 全 yaml 配置</span>
  <span class="token punctuation">-</span> <span class="token key atrule">network</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>tcp<span class="token punctuation">,</span> udp<span class="token punctuation">]</span>
    <span class="token key atrule">address</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">7777</span>
    <span class="token key atrule">target</span><span class="token punctuation">:</span> target.com
    <span class="token key atrule">proxy</span><span class="token punctuation">:</span> proxy

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>google.com<span class="token punctuation">,</span>auto
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>KEYWORD<span class="token punctuation">,</span>google<span class="token punctuation">,</span>auto
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>google.com<span class="token punctuation">,</span>auto
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">-</span>SUFFIX<span class="token punctuation">,</span>ad.com<span class="token punctuation">,</span>REJECT
  <span class="token punctuation">-</span> SRC<span class="token punctuation">-</span>IP<span class="token punctuation">-</span>CIDR<span class="token punctuation">,</span>192.168.1.201/32<span class="token punctuation">,</span>DIRECT
  <span class="token comment"># 用于 IP 规则 (GEOIP, IP-CIDR, IP-CIDR6) 的可选参数 &quot;no-resolve&quot;</span>
  <span class="token punctuation">-</span> IP<span class="token punctuation">-</span>CIDR<span class="token punctuation">,</span>127.0.0.0/8<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> DST<span class="token punctuation">-</span>PORT<span class="token punctuation">,</span><span class="token number">80</span><span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> SRC<span class="token punctuation">-</span>PORT<span class="token punctuation">,</span><span class="token number">7777</span><span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>REJECT <span class="token comment"># 仅 Premium 版本支持</span>
  <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>auto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,3),_={class:"footnotes"},x={class:"footnotes-list"},w={id:"footnote1",class:"footnote-item"},q={href:"https://github.com/clash-verge-rev/clash-verge-rev",target:"_blank",rel:"noopener noreferrer"},P=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),I={id:"footnote2",class:"footnote-item"},C={href:"https://github.com/MetaCubeX/mihomo",target:"_blank",rel:"noopener noreferrer"},S=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),T={id:"footnote3",class:"footnote-item"},D={href:"https://github.com/wangyuqi0706/clash-proxy-converter",target:"_blank",rel:"noopener noreferrer"},N=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),E={id:"footnote4",class:"footnote-item"},R={href:"https://clash.wiki/configuration/getting-started.html#dns-%E9%80%9A%E9%85%8D%E7%AC%A6%E5%9F%9F%E5%90%8D%E5%8C%B9%E9%85%8D",target:"_blank",rel:"noopener noreferrer"},A=n("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),j={id:"footnote5",class:"footnote-item"},O={href:"https://www.geonames.org/statistics/",target:"_blank",rel:"noopener noreferrer"},L=n("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),V={id:"footnote6",class:"footnote-item"},U={href:"https://github.com/Loyalsoldier/clash-rules/",target:"_blank",rel:"noopener noreferrer"},F=n("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1);function z(M,H){const a=c("ExternalLinkIcon");return i(),o("div",null,[u,n("p",null,[n("a",r,[s("ClashX-V2Ray-TopFreeProxy"),e(a)])]),d,n("ul",null,[n("li",null,[s("NodeFree ("),n("a",m,[s("https://nodefree.org"),e(a)]),s(")")]),n("li",null,[s("ClashNode ("),n("a",v,[s("https://clashnode.com"),e(a)]),s(")")]),k]),b,n("p",null,[n("a",h,[s("我有特别的DNS 配置和使用技巧 - Sukka's Blog"),e(a)]),y,n("a",g,[s("个人自用 Surge 规则"),e(a)])]),f,n("section",_,[n("ol",x,[n("li",w,[n("p",null,[n("a",q,[s("Clash Verge-Github"),e(a)]),s(),P])]),n("li",I,[n("p",null,[n("a",C,[s("https://github.com/MetaCubeX/mihomo"),e(a)]),s(),S])]),n("li",T,[n("p",null,[n("a",D,[s("clash-proxy-converter"),e(a)]),s(),N])]),n("li",E,[n("p",null,[n("a",R,[s("通配符域名匹配"),e(a)]),s(),A])]),n("li",j,[n("p",null,[n("a",O,[s("GeoNames Country statistics"),e(a)]),s(),L])]),n("li",V,[n("p",null,[n("a",U,[s("Loyalsoldier/clash-rules"),e(a)]),s(),F])])])])])}const B=l(p,[["render",z],["__file","router-c-config.html.vue"]]);export{B as default};
