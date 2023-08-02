import{_ as t,W as p,X as e,Y as n,Z as s,$ as o,a0 as i,C as c}from"./framework-34e2a50f.js";const l={},r=n("h1",{id:"gradle-配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gradle-配置","aria-hidden":"true"},"#"),s(" Gradle 配置")],-1),u=n("h2",{id:"全局配置aliyun代理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全局配置aliyun代理","aria-hidden":"true"},"#"),s(" 全局配置Aliyun代理")],-1),k=n("code",null,"~/.gradle/",-1),d={href:"https://gist.github.com/eitanliu/a8123e4d13d9068df37325af40494963",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code><span class="token comment">// 复制这个文件到用户目录的.gradle目录，改名为init.gradle</span>
<span class="token comment">// ~/.gradle/init.gradle</span>
<span class="token keyword">def</span> GOOGLE_URL <span class="token operator">=</span> <span class="token string">&#39;https://dl.google.com&#39;</span>
<span class="token keyword">def</span> CENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo.maven.apache.org/maven2&#39;</span>
<span class="token keyword">def</span> CENTER1_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo1.maven.org/maven2&#39;</span>
<span class="token keyword">def</span> JCENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://jcenter.bintray.com&#39;</span>
<span class="token keyword">def</span> GRADLE_PLUGIN_URL <span class="token operator">=</span> <span class="token string">&#39;https://plugins.gradle.org/m2&#39;</span>
<span class="token keyword">def</span> SPRING_URL <span class="token operator">=</span> <span class="token string">&#39;http://repo.spring.io/libs-milestone&#39;</span>
<span class="token keyword">def</span> SPRING_PLUGIN_URL <span class="token operator">=</span> <span class="token string">&#39;http://repo.spring.io/plugins-release&#39;</span>
<span class="token keyword">def</span> SPRING_LIBS_MILESTONE_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo.spring.io/artifactory/libs-milestone&#39;</span>
<span class="token keyword">def</span> SPRING_PLUGIN_RELEASE_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo.spring.io/artifactory/plugins-release&#39;</span>
<span class="token keyword">def</span> GRAILS_CORE_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo.grails.org/grails/core&#39;</span>
<span class="token keyword">def</span> APACHE_SNAPSHOTS_URL <span class="token operator">=</span> <span class="token string">&#39;https://repository.apache.org/snapshots&#39;</span>

<span class="token keyword">def</span> FLUTTER_URL <span class="token operator">=</span> <span class="token string">&#39;http://download.flutter.io&#39;</span>
<span class="token keyword">def</span> GRADLE_LOCAL_RELEASE_URL <span class="token operator">=</span> <span class="token string">&#39;https://repo.gradle.org/gradle/libs-releases-local&#39;</span>

<span class="token keyword">def</span> ALIYUN_GOOGLE_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/google&#39;</span>
<span class="token keyword">def</span> ALIYUN_CENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/central&#39;</span>
<span class="token keyword">def</span> ALIYUN_JCENTER_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/jcentral&#39;</span>
<span class="token keyword">def</span> ALIYUN_GRADLE_PLUGIN_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/gradle-plugin&#39;</span>
<span class="token keyword">def</span> ALIYUN_SPRING_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/spring&#39;</span>
<span class="token keyword">def</span> ALIYUN_SPRING_PLUGIN_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/spring-plugin&#39;</span>
<span class="token keyword">def</span> ALIYUN_GRAILS_CORE_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/grails-core&#39;</span>
<span class="token keyword">def</span> ALIYUN_APACHE_SNAPSHOTS_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/apache-snapshots&#39;</span>
<span class="token keyword">def</span> ALIYUN_PUBLIC_URL <span class="token operator">=</span> <span class="token string">&#39;https://maven.aliyun.com/repository/public&#39;</span>

<span class="token keyword">def</span> FLUTTER_CN_URL <span class="token operator">=</span> <span class="token string">&#39;https://storage.flutter-io.cn/download.flutter.io&#39;</span>

<span class="token keyword">def</span> mirrorRepo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
        <span class="token function">put</span><span class="token punctuation">(</span>GOOGLE_URL<span class="token punctuation">,</span> ALIYUN_GOOGLE_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>CENTER_URL<span class="token punctuation">,</span> ALIYUN_CENTER_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>CENTER1_URL<span class="token punctuation">,</span> ALIYUN_CENTER_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>JCENTER_URL<span class="token punctuation">,</span> ALIYUN_PUBLIC_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>GRADLE_PLUGIN_URL<span class="token punctuation">,</span> ALIYUN_GRADLE_PLUGIN_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>SPRING_URL<span class="token punctuation">,</span> ALIYUN_SPRING_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>SPRING_PLUGIN_URL<span class="token punctuation">,</span> ALIYUN_SPRING_PLUGIN_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>SPRING_LIBS_MILESTONE_URL<span class="token punctuation">,</span> ALIYUN_SPRING_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>SPRING_PLUGIN_RELEASE_URL<span class="token punctuation">,</span> ALIYUN_SPRING_PLUGIN_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>GRAILS_CORE_URL<span class="token punctuation">,</span> ALIYUN_GRAILS_CORE_URL<span class="token punctuation">)</span>
        <span class="token function">put</span><span class="token punctuation">(</span>APACHE_SNAPSHOTS_URL<span class="token punctuation">,</span> ALIYUN_APACHE_SNAPSHOTS_URL<span class="token punctuation">)</span>
        <span class="token comment">//put(FLUTTER_URL, FLUTTER_CN_URL)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">def</span> mirrorOrigin <span class="token operator">=</span> mirrorRepo<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>collect <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>it<span class="token punctuation">.</span><span class="token function">replaceFirst</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;http://&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceFirst</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;https://&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> it<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    <span class="token keyword">def</span> mirrorEnable <span class="token operator">=</span> Boolean<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">&quot;mirror_aliyun_enable&quot;</span></span><span class="token punctuation">,</span> <span class="token interpolation-string"><span class="token string">&quot;true&quot;</span></span><span class="token punctuation">)</span> <span class="token keyword">as</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>
    project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string"> mirror_aliyun_enable </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">mirrorEnable</span></span><span class="token string">&quot;</span></span>

    repositories <span class="token punctuation">{</span>

        configureEach <span class="token punctuation">{</span> ArtifactRepository repo <span class="token operator">-&gt;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>mirrorEnable <span class="token operator">&amp;&amp;</span> repo <span class="token keyword">instanceof</span> <span class="token class-name">MavenArtifactRepository</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">def</span> url <span class="token operator">=</span> repo<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// println(&quot;all $project repo: $url&quot;)</span>
                mirrorOrigin<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">def</span> mirrorUrl <span class="token operator">=</span> mirrorRepo<span class="token punctuation">[</span>it<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                        project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string"> Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">mirrorUrl</span></span><span class="token string">.&quot;</span></span>
                        repo<span class="token punctuation">.</span>url <span class="token operator">=</span> mirrorUrl
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    buildscript <span class="token punctuation">{</span>

        repositories <span class="token punctuation">{</span>

            configureEach <span class="token punctuation">{</span> ArtifactRepository repo <span class="token operator">-&gt;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>mirrorEnable <span class="token operator">&amp;&amp;</span> repo <span class="token keyword">instanceof</span> <span class="token class-name">MavenArtifactRepository</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">def</span> url <span class="token operator">=</span> repo<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token comment">// println(&quot;all buildscript $project repo: $url&quot;)</span>
                    mirrorOrigin<span class="token punctuation">.</span>forEach <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token keyword">def</span> mirrorUrl <span class="token operator">=</span> mirrorRepo<span class="token punctuation">[</span>it<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
                            project<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>lifecycle <span class="token interpolation-string"><span class="token string">&quot;buildscript </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">project</span></span><span class="token string"> Repository </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">repo<span class="token punctuation">.</span>url</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replaced </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">mirrorUrl</span></span><span class="token string">.&quot;</span></span>
                            repo<span class="token punctuation">.</span>url <span class="token operator">=</span> mirrorUrl
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误处里" tabindex="-1"><a class="header-anchor" href="#错误处里" aria-hidden="true">#</a> 错误处里</h2><h3 id="依赖一直下载失败" tabindex="-1"><a class="header-anchor" href="#依赖一直下载失败" aria-hidden="true">#</a> 依赖一直下载失败</h3><p>~/.gradle/caches/modules-2/metadata-x.xx 删除对于的包文件夹</p><h3 id="删除kapt缓存" tabindex="-1"><a class="header-anchor" href="#删除kapt缓存" aria-hidden="true">#</a> 删除kapt缓存</h3><p>~/.gralde/caches/transforms-x, <code>x</code> 是 KAPT 版本号</p>`,6);function m(_,b){const a=c("ExternalLinkIcon");return p(),e("div",null,[r,u,n("p",null,[k,s(" 目录下创建编辑 "),n("a",d,[s("init.gradle"),o(a)])]),v])}const L=t(l,[["render",m],["__file","gradle-config.html.vue"]]);export{L as default};