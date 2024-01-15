import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c as l,b as n,d as s,a as e,e as t}from"./app-kSAeWVIq.js";const r={},c=n("h1",{id:"router-v",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#router-v","aria-hidden":"true"},"#"),s(" Router V")],-1),u={href:"https://www.v2fly.org/v5/config/overview",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.v2fly.org/config/overview.html",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx","aria-hidden":"true"},"#"),s(" Nginx")],-1),k=n("p",null,"nginx 反代配置匹配",-1),m={href:"https://blog.51cto.com/u_2225052/5873280",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.hangge.com/blog/cache/detail_2979.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.cnblogs.com/chenjw-note/p/14388257.html",target:"_blank",rel:"noopener noreferrer"},h=n("h3",{id:"ssl-证书生成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ssl-证书生成","aria-hidden":"true"},"#"),s(" ssl 证书生成")],-1),g={href:"https://cloud.tencent.com/developer/article/1548350",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># RSA 证书</span>
<span class="token comment"># 第一步，生成服务器私钥：1024, 2048, 3072, 7680</span>
openssl genrsa <span class="token parameter variable">-out</span> server.key <span class="token number">2048</span>
<span class="token comment"># 第二步，根据私钥和输入的信息生成证书请求文件：</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr
<span class="token comment"># 第三步：用第一步的私钥和第二步的请求文件生成证书：</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt <span class="token parameter variable">-days</span> <span class="token number">36500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={href:"https://zhuanlan.zhihu.com/p/134436530",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),x={href:"https://blog.csdn.net/Reflection_in_water/article/details/123172433",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),C={href:"https://lixingcong.github.io/2016/12/20/cloudflare-self-sign",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ECC 证书</span>
<span class="token comment"># 列出可用ECC曲线</span>
openssl ecparam <span class="token parameter variable">-list_curves</span>
<span class="token comment"># 步骤一：生成 CA 密钥对</span>
openssl ecparam <span class="token parameter variable">-genkey</span> <span class="token parameter variable">-name</span> prime256v1 <span class="token parameter variable">-out</span> ecdsa.key
<span class="token comment"># 步骤二：生成 CA 请求文件</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> ecdsa.key <span class="token parameter variable">-out</span> ecdsa.csr
<span class="token comment"># 步骤三：生成 CA 证书</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> ecdsa.csr <span class="token parameter variable">-signkey</span> ecdsa.key <span class="token parameter variable">-out</span> ecdsa.pem <span class="token parameter variable">-days</span> <span class="token number">36500</span>
<span class="token comment"># 步骤四：CA证书由 pem 格式转为 der 格式</span>
openssl x509 <span class="token parameter variable">-outform</span> der <span class="token parameter variable">-in</span> ecdsa.pem <span class="token parameter variable">-out</span> ecdsa.der
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><h3 id="检测" tabindex="-1"><a class="header-anchor" href="#检测" aria-hidden="true">#</a> 检测</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://www.gstatic.com/generate_204
https://www.google.com/generate_204
http://cp.cloudflare.com/generate_204
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h3><h4 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h4><p>config file <code>/usr/local/etc/v2ray/config.json</code> <sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">33322</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;clients&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1a37fd9b-aa0a-49ef-9788-3d52cd3b4ca6&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;decryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grpc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;grpcSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;serviceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-1" tabindex="-1"><a class="header-anchor" href="#nginx-1" aria-hidden="true">#</a> Nginx</h4><p><code>vim /etc/nginx/sites-enabled/default.conf</code> <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">443</span> http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /abc/Tun</span> <span class="token punctuation">{</span>
        <span class="token comment"># 网上参考级配置</span>
        <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$content_type</span> !~ <span class="token string">&quot;application/grpc&quot;</span>)</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">return</span> <span class="token number">404</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">client_body_timeout</span> <span class="token number">60m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">send_timeout</span> <span class="token number">60m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">lingering_close</span> always</span><span class="token punctuation">;</span>

        <span class="token comment"># keepalive_time 2h;</span>
        <span class="token directive"><span class="token keyword">keepalive_timeout</span> <span class="token number">30s</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">keepalive_requests</span> <span class="token number">256</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_socket_keepalive</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

        <span class="token comment"># 实践级配置</span>
        <span class="token directive"><span class="token keyword">grpc_buffer_size</span> <span class="token number">100m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_read_timeout</span> <span class="token number">3m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_send_timeout</span> <span class="token number">2m</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">grpc_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>

        <span class="token directive"><span class="token keyword">grpc_pass</span> grpc://127.0.0.1:33322</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meek" tabindex="-1"><a class="header-anchor" href="#meek" aria-hidden="true">#</a> Meek</h3><h4 id="service-1" tabindex="-1"><a class="header-anchor" href="#service-1" aria-hidden="true">#</a> Service</h4><p>config file <code>/usr/local/etc/v2ray/config.json</code> <sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> <sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup> <sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Info&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Console&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;None&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">17773</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;f48fd3ae-0c24-433e-af3b-e87338b74705&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meek&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transportSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:17773&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;securitySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> v2ray
systemctl start v2ray
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx-2" tabindex="-1"><a class="header-anchor" href="#nginx-2" aria-hidden="true">#</a> Nginx</h4><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>server {
        listen 80 default_server;
        listen [::]:80 default_server;

        root /var/www/html;

        index index.html index.htm index.nginx-debian.html;

        server_name www.cscot.buzz;

        location / {
                <span class="token key attr-name">try_files $uri $uri/</span> <span class="token punctuation">=</span><span class="token value attr-value">404;</span>
        }

        location /vrezdxop {
                proxy_pass http://127.0.0.1:17773;
        }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Info&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Console&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;None&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vmess&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;www.cscot.buzz&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;f48fd3ae-0c24-433e-af3b-e87338b74705&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token string">&quot;meek&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transportSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://www.cscot.buzz/vrezdxop&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;securitySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;udpEnabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;packetEncoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Packet&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10808</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10809</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,21),S={class:"footnotes"},z={class:"footnotes-list"},E={id:"footnote1",class:"footnote-item"},N={href:"https://pylab.me/blog/post/929d18d8-1b90-47cf-82ce-1a4e75e05417",target:"_blank",rel:"noopener noreferrer"},V=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),R={id:"footnote2",class:"footnote-item"},P={href:"https://github.com/v2fly/v2ray-core/discussions/1174",target:"_blank",rel:"noopener noreferrer"},$=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),A={id:"footnote3",class:"footnote-item"},I={href:"https://cscot.pages.dev/2023/05/31/v2ray-meek/",target:"_blank",rel:"noopener noreferrer"},B=n("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),L={id:"footnote4",class:"footnote-item"},X={href:"https://github.com/v2fly/v2ray-core/discussions/2549",target:"_blank",rel:"noopener noreferrer"},F=n("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),M={id:"footnote5",class:"footnote-item"},T={href:"https://gist.github.com/xiaokangwang/b8f3a77780cae99eba68e7b127522883",target:"_blank",rel:"noopener noreferrer"},H=n("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1);function O(U,D){const a=p("ExternalLinkIcon");return i(),l("div",null,[c,n("p",null,[n("a",u,[s("配置文档 V5"),e(a)]),s("、 "),n("a",d,[s("配置文档 V4"),e(a)])]),v,k,n("p",null,[n("a",m,[s("nginx反向代理location与proxy_pass配置规则总结"),e(a)])]),n("p",null,[n("a",b,[s("Nginx - 反向代理location与proxy_pass配置规则总结（附样例）"),e(a)])]),n("p",null,[n("a",q,[s("nginx反向代理正则匹配示例及nginx内置变量详解"),e(a)])]),h,n("p",null,[n("a",g,[s("使用openssl创建https证书-腾讯云开发者社区"),e(a)])]),f,n("p",null,[n("a",_,[s("Openssl 生成ECC证书及密钥"),e(a)]),y,n("a",x,[s("openssl 生成多级X.509 v3 ECC公钥证书链完整示例原创"),e(a)]),w,n("a",C,[s("Cloudflare自签名SSL证书"),e(a)])]),j,n("section",S,[n("ol",z,[n("li",E,[n("p",null,[n("a",N,[s("如何在V2Ray中，配置gRPC作为传输方式 - Pylab.ME"),e(a)]),s(),V])]),n("li",R,[n("p",null,[n("a",P,[s("什么套用 cloudflare grpc 会断流"),e(a)]),s(),$])]),n("li",A,[n("p",null,[n("a",I,[s("Example of V2Ray with meek"),e(a)]),s(),B])]),n("li",L,[n("p",null,[n("a",X,[s("v5.7.0 User Preview"),e(a)]),s(),F])]),n("li",M,[n("p",null,[n("a",T,[s("client.jsonv5.json"),e(a)]),s(),H])])])])])}const K=o(r,[["render",O],["__file","router-v-config.html.vue"]]);export{K as default};
