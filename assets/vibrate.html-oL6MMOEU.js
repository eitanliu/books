import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,e as t}from"./app-q2oGakC7.js";const p={},e=t(`<h1 id="vibrate" tabindex="-1"><a class="header-anchor" href="#vibrate" aria-hidden="true">#</a> Vibrate</h1><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uses-permission</span> <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>android.permission.VIBRATE<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">vibrate</span><span class="token punctuation">(</span>context<span class="token operator">:</span> Context<span class="token punctuation">,</span> duration<span class="token operator">:</span> Long<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> vibratorManager <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getSystemService</span><span class="token punctuation">(</span>
            Context<span class="token punctuation">.</span>VIBRATOR_MANAGER_SERVICE
        <span class="token punctuation">)</span> <span class="token keyword">as</span> VibratorManager

        <span class="token keyword">val</span> vibrator <span class="token operator">=</span> vibratorManager<span class="token punctuation">.</span>defaultVibrator

        <span class="token keyword">if</span> <span class="token punctuation">(</span>vibrator<span class="token punctuation">.</span><span class="token function">hasVibrator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Build<span class="token punctuation">.</span>VERSION<span class="token punctuation">.</span>SDK_INT <span class="token operator">&gt;=</span> android<span class="token punctuation">.</span>os<span class="token punctuation">.</span>Build<span class="token punctuation">.</span>VERSION_CODES<span class="token punctuation">.</span>O<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">val</span> vibrationEffect <span class="token operator">=</span> VibrationEffect<span class="token punctuation">.</span><span class="token function">createOneShot</span><span class="token punctuation">(</span>
                    duration<span class="token punctuation">,</span> VibrationEffect<span class="token punctuation">.</span>DEFAULT_AMPLITUDE
                <span class="token punctuation">)</span>
                vibrator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span>vibrationEffect<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token annotation builtin">@Suppress</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;DEPRECATION&quot;</span></span><span class="token punctuation">)</span>
                vibrator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> Throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(i,l){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","vibrate.html.vue"]]);export{k as default};
