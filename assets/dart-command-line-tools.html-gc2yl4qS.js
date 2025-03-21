import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as t,c as d,b as e,d as a,a as i,e as l}from"./app-q2oGakC7.js";const c={},o=e("h1",{id:"dart-命令行工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dart-命令行工具","aria-hidden":"true"},"#"),a(" Dart 命令行工具")],-1),p=e("h2",{id:"dart-代码格式化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dart-代码格式化","aria-hidden":"true"},"#"),a(" Dart 代码格式化")],-1),m={href:"https://stackoverflow.com/questions/59456452/how-to-change-dart-line-length-in-vscode-when-formatting-dart-files",target:"_blank",rel:"noopener noreferrer"},u=l(`<h3 id="sdk自带命令" tabindex="-1"><a class="header-anchor" href="#sdk自带命令" aria-hidden="true">#</a> SDK自带命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定行长度 100 格式化目录 lib</span>
dart <span class="token function">format</span> <span class="token parameter variable">-l</span> <span class="token number">100</span> ./lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dart-style" tabindex="-1"><a class="header-anchor" href="#dart-style" aria-hidden="true">#</a> dart_style</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 dart_style 支持 dartfmt and dartformat 命令</span>
dart pub global activate dart_style
<span class="token comment"># 指定行长度 100 格式化目录 lib</span>
<span class="token comment"># -v --verbose 显示隐藏参数</span>
<span class="token comment"># -l --line-length 指定行长度</span>
<span class="token comment"># -w --overwrite 覆盖源文件</span>
dartformat <span class="token parameter variable">-w</span> <span class="token parameter variable">-l</span> <span class="token number">100</span> ./lib 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-runner" tabindex="-1"><a class="header-anchor" href="#build-runner" aria-hidden="true">#</a> build_runner</h2><p>通用编译生成文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 一次性构建</span>
<span class="token comment"># --delete-conflicting-outputs 自动删除未知已存在文件</span>
dart run build_runner build
<span class="token comment"># 监听输入文件的编辑，增量构建</span>
<span class="token comment"># --use-polling-watcher 使用轮询监听（默认模式应有性能问题可使用）</span>
dart run build_runner <span class="token function">watch</span>
<span class="token comment"># Web 开发服务</span>
dart run build_runner serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pub-deps" tabindex="-1"><a class="header-anchor" href="#pub-deps" aria-hidden="true">#</a> pub deps</h2><p>输出依赖关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 树状图默认格式</span>
dart pub deps <span class="token parameter variable">--style</span><span class="token operator">=</span>tree
<span class="token comment"># 全部依赖列表</span>
dart pub deps <span class="token parameter variable">--style</span><span class="token operator">=</span>list
<span class="token comment"># 全部依赖紧凑列表</span>
dart pub deps <span class="token parameter variable">--style</span><span class="token operator">=</span>compact
<span class="token comment"># json格式</span>
dart pub deps <span class="token parameter variable">--json</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function v(b,h){const n=r("ExternalLinkIcon");return t(),d("div",null,[o,p,e("p",null,[e("a",m,[a("how to change dart line length in vscode when formatting"),i(n)])]),u])}const f=s(c,[["render",v],["__file","dart-command-line-tools.html.vue"]]);export{f as default};
