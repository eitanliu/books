import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,b as n,d as s,a as t,e as l}from"./app-bXitiLUE.js";const r={},i=n("h1",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),u=n("h2",{id:"地址变化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#地址变化","aria-hidden":"true"},"#"),s(" 地址变化")],-1),k={href:"https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),b={href:"https://developer.mozilla.org/docs/Web/API/Window/popstate_event",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://developer.mozilla.org/docs/Web/API/Window/hashchange_event",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),f={href:"https://developer.mozilla.org/docs/Web/API/History/pushState",target:"_blank",rel:"noopener noreferrer"},y=n("br",null,null,-1),_={href:"https://developer.mozilla.org/docs/Web/API/History/replaceState",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"判断数据类型的方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#判断数据类型的方法","aria-hidden":"true"},"#"),s(" 判断数据类型的方法")],-1),g={href:"https://github.com/liubin915249126/javascript/blob/master/interview/ES5/typeof.md",target:"_blank",rel:"noopener noreferrer"},j=n("h2",{id:"监听网络请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#监听网络请求","aria-hidden":"true"},"#"),s(" 监听网络请求")],-1),x={href:"https://juejin.cn/post/6844904133363761159",target:"_blank",rel:"noopener noreferrer"},P=n("br",null,null,-1),N={href:"https://github.com/Tencent/vConsole/blob/dev/src/network/fetch.proxy.ts",target:"_blank",rel:"noopener noreferrer"},W=n("br",null,null,-1),I={href:"https://github.com/Tencent/vConsole/blob/dev/src/network/xhr.proxy.ts",target:"_blank",rel:"noopener noreferrer"},C=l(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">fullPath</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">existsFullPathProperty</span><span class="token punctuation">(</span><span class="token parameter">fullPath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parts <span class="token operator">=</span> fullPath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> objName <span class="token operator">=</span> parts<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> obj<span class="token punctuation">;</span> <span class="token keyword">try</span> <span class="token punctuation">{</span> obj <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span>objName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">ReferenceError</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">existsObjectPartsProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> parts<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">objName</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">existsNamePathProperty</span><span class="token punctuation">(</span><span class="token parameter">objName<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj<span class="token punctuation">;</span> <span class="token keyword">try</span> <span class="token punctuation">{</span> obj <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span>objName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">ReferenceError</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token keyword">throw</span> e<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> parts <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">existsObjectPartsProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> parts<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">objName</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">path</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">existsObjectPathProperty</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> parts <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">existsObjectPartsProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> parts<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">parts</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">existsObjectPartsProperty</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> parts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> obj<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> parts<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> current<span class="token punctuation">[</span>parts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    current <span class="token operator">=</span> current<span class="token punctuation">[</span>parts<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function E(S,z){const a=p("ExternalLinkIcon");return o(),c("div",null,[i,u,n("p",null,[n("a",k,[s("onbeforeunload"),t(a)]),d,n("a",b,[s("onpopstate"),t(a)]),v,n("a",m,[s("onhashchange"),t(a)]),h,n("a",f,[s("pushState"),t(a)]),y,n("a",_,[s("replaceState"),t(a)])]),w,n("p",null,[n("a",g,[s("typeof"),t(a)])]),j,n("p",null,[n("a",x,[s("VConsole源码分析与思考の初始化"),t(a)]),P,n("a",N,[s("vConsole fetch.proxy.ts"),t(a)]),W,n("a",I,[s("vConsole xhr.proxy.ts"),t(a)])]),C])}const V=e(r,[["render",E],["__file","question.html.vue"]]);export{V as default};
