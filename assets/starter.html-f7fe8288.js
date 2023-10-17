import{_ as s,W as a,X as n,a0 as e}from"./framework-d1b6b6e6.js";const t={},o=e(`<h1 id="starter" tabindex="-1"><a class="header-anchor" href="#starter" aria-hidden="true">#</a> Starter</h1><h2 id="ios-编译" tabindex="-1"><a class="header-anchor" href="#ios-编译" aria-hidden="true">#</a> iOS 编译</h2><h3 id="升级xcode-15" tabindex="-1"><a class="header-anchor" href="#升级xcode-15" aria-hidden="true">#</a> 升级Xcode 15</h3><p>编辑 <code>Podfile</code> 执行 <code>pod update</code></p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>post_install <span class="token keyword">do</span> <span class="token operator">|</span>installer<span class="token operator">|</span>
  installer<span class="token punctuation">.</span>pods_project<span class="token punctuation">.</span>targets<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>target<span class="token operator">|</span>
    flutter_additional_ios_build_settings<span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    target<span class="token punctuation">.</span>build_configurations<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
      config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&#39;IPHONEOS_DEPLOYMENT_TARGET&#39;</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&#39;13.0&#39;</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[o];function p(c,i){return a(),n("div",null,r)}const d=s(t,[["render",p],["__file","starter.html.vue"]]);export{d as default};
