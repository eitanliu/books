import{_ as t,W as p,X as o,Z as n,$ as a,Y as e,a0 as i,C as c}from"./framework-d1b6b6e6.js";const l={},r=i(`<h1 id="vuepress-hope-配置" tabindex="-1"><a class="header-anchor" href="#vuepress-hope-配置" aria-hidden="true">#</a> vuepress hope 配置</h1><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装node</span>
brew <span class="token function">install</span> <span class="token function">node</span>
<span class="token comment"># 安装 pmpm 包管理</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token function">pnpm</span>
<span class="token comment"># 创建项目</span>
<span class="token function">pnpm</span> init
<span class="token comment"># 安装 vuepress 和 vuepress-theme-hope</span>
<span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> vue vuepress@next @vuepress/client@next vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><h3 id="运行配置" tabindex="-1"><a class="header-anchor" href="#运行配置" aria-hidden="true">#</a> 运行配置</h3><p><code>package.json</code> 添加配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终端执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文档配置" tabindex="-1"><a class="header-anchor" href="#文档配置" aria-hidden="true">#</a> 文档配置</h3><p><code>.vuepress/config.js</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token comment">// ip</span>
    port<span class="token operator">:</span> <span class="token number">8099</span><span class="token punctuation">,</span> <span class="token comment">//端口号</span>
    title<span class="token operator">:</span> <span class="token string">&#39;EitanLiu&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置网站标题</span>
    description<span class="token operator">:</span> <span class="token string">&#39;Development notes&#39;</span><span class="token punctuation">,</span>
    lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 语言</span>
    base<span class="token operator">:</span> <span class="token string">&quot;/books/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 网站路径</span>
    theme<span class="token operator">:</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 使用hope主题</span>
        sidebar<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 自定义侧栏</span>
            <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&quot;Introduce&quot;</span><span class="token punctuation">,</span>
                link<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
                activeMatch<span class="token operator">:</span> <span class="token string">&quot;^/$&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&quot;Spring&quot;</span><span class="token punctuation">,</span>
                prefix<span class="token operator">:</span> <span class="token string">&quot;/spring/&quot;</span><span class="token punctuation">,</span>
                collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&quot;Dev&quot;</span><span class="token punctuation">,</span>
                prefix<span class="token operator">:</span> <span class="token string">&quot;/dev/&quot;</span><span class="token punctuation">,</span>
                collapsible<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                text<span class="token operator">:</span> <span class="token string">&quot;About&quot;</span><span class="token punctuation">,</span>
                link<span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="markdown-增强" tabindex="-1"><a class="header-anchor" href="#markdown-增强" aria-hidden="true">#</a> Markdown 增强</h2>`,13),u={href:"https://theme-hope.vuejs.press/zh/guide/markdown/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://theme-hope.vuejs.press/zh/guide/markdown/attrs.html",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=c("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[a("Markdown 增强"),e(s)])]),n("ul",null,[n("li",null,[n("a",d,[a("属性支持"),e(s)])])])])}const h=t(l,[["render",k],["__file","vuepress.html.vue"]]);export{h as default};
