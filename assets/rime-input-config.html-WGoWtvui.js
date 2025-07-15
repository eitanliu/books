import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o,c as l,b as n,d as s,a as e,e as t}from"./app-VAMQVd1I.js";const i={},u=t(`<h1 id="rime-中州韵输入法配置" tabindex="-1"><a class="header-anchor" href="#rime-中州韵输入法配置" aria-hidden="true">#</a> RIME 中州韵输入法配置</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> squirrel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),r={href:"https://github.com/rime/squirrel/releases/latest",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/rime/weasel/releases/latest",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/fcitx/fcitx-rime",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/rime/home/wiki/RimeWithIBus",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/osfans/trime",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/LibreService/my_rime",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>Mac 安装完成需要重启电脑，否则有些软件不能切换到中文输入法</p><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输入法程序目录</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /Library/Input<span class="token punctuation">\\</span> Methods/Squirrel.app
<span class="token comment"># 个人配置文件目录</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/Library/Rime/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="现成配置" tabindex="-1"><a class="header-anchor" href="#现成配置" aria-hidden="true">#</a> 现成配置</h3>`,5),y={href:"https://github.com/ssnhd/rime",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><ul><li>全局配置 <code>default.custom.yaml</code></li><li>界面配置 <code>squirrel.custom.yaml</code></li><li>输入方案定置\`\`&lt;方案标识&gt;.schema.yaml\`</li><li>输入方案配置 <code>&lt;方案标识&gt;.custom.yaml</code></li><li>安装信息 <code>installation.yaml</code></li></ul><h4 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h4><p>新建或编辑 <code>default.custom.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">schema_list</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">schema</span><span class="token punctuation">:</span> luna_pinyin_simp <span class="token comment"># 朙月拼音</span>
    <span class="token punctuation">-</span> <span class="token key atrule">schema</span><span class="token punctuation">:</span> double_pinyin_flypy <span class="token comment"># 小鹤双拼</span>
    <span class="token punctuation">-</span> <span class="token key atrule">schema</span><span class="token punctuation">:</span> double_pinyin <span class="token comment"># 自然码双拼</span>
    <span class="token punctuation">-</span> <span class="token key atrule">schema</span><span class="token punctuation">:</span> numbers <span class="token comment"># 大写数字</span>
  <span class="token comment"># 切换提示语</span>
  <span class="token key atrule">switcher/caption</span><span class="token punctuation">:</span> 〔切换输入法〕
  <span class="token comment"># 切换快捷键</span>
  <span class="token key atrule">switcher/hotkeys</span><span class="token punctuation">:</span>
    <span class="token comment"># - Control+grave</span>
    <span class="token punctuation">-</span> Control+Shift+grave
    <span class="token comment"># - F4</span>

  <span class="token key atrule">menu/page_size</span><span class="token punctuation">:</span> <span class="token number">9</span> <span class="token comment"># 候选词个数</span>
  <span class="token key atrule">translator/enable_user_dict</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 关闭用户词典和字频调整</span>
  <span class="token key atrule">translator/enable_sentence</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 关闭句子输入</span>
  <span class="token comment"># true为单行显示，false为双行显示</span>
  <span class="token key atrule">stylel/inline_preedit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

  <span class="token comment"># 若 caps 切换大小写无效, 打开 Mac 系统偏好设置 &gt; 键盘 &gt; 输入法 &gt; 取消勾选[使用大写锁定键切换“美国”输入模式]</span>
  <span class="token key atrule">ascii_composer/good_old_caps_lock</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 若为 true， Caps 只切换大小写</span>
  <span class="token key atrule">ascii_composer/switch_key</span><span class="token punctuation">:</span>
    <span class="token key atrule">Caps_Lock</span><span class="token punctuation">:</span> commit_code <span class="token comment"># Caps 键</span>
    <span class="token key atrule">Shift_L</span><span class="token punctuation">:</span> commit_code <span class="token comment"># 左 Shift，切换中英文</span>
    <span class="token key atrule">Shift_R</span><span class="token punctuation">:</span> commit_code <span class="token comment"># 右 Shift，切换中英文</span>
    <span class="token key atrule">Control_L</span><span class="token punctuation">:</span> noop <span class="token comment"># 左 Control，屏蔽该切换键</span>
    <span class="token key atrule">Control_R</span><span class="token punctuation">:</span> noop <span class="token comment"># 右 Control，屏蔽该切换键</span>

  <span class="token key atrule">key_binder/bindings</span><span class="token punctuation">:</span> <span class="token comment"># 若开启, 去掉前面#</span>
    <span class="token comment"># 翻页</span>
    <span class="token comment">#- { when: has_menu, accept: Tab, send: Page_Down }            # &quot;tab&quot; 键翻页, 和 &quot;tab&quot; 键分词只能二选一</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> composing<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> Tab<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Shift+Right <span class="token punctuation">}</span> <span class="token comment"># &quot;tab&quot; 键分词</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> paging<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> minus<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Up <span class="token punctuation">}</span> <span class="token comment"># &quot;-&quot; 上一页</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> has_menu<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> equal<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Down <span class="token punctuation">}</span> <span class="token comment"># &quot;=&quot; 下一页</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> paging<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> comma<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Up <span class="token punctuation">}</span> <span class="token comment"># &quot;,&quot; 上一页</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> has_menu<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> period<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Down <span class="token punctuation">}</span> <span class="token comment"># &quot;.&quot; 下一页</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> paging<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> bracketleft<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Up <span class="token punctuation">}</span> <span class="token comment"># &quot;[&quot; 上一页</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> has_menu<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> bracketright<span class="token punctuation">,</span> <span class="token key atrule">send</span><span class="token punctuation">:</span> Page_Down <span class="token punctuation">}</span> <span class="token comment"># &quot;]&quot; 下一页</span>
    <span class="token comment"># 快捷键</span>
    <span class="token comment"># - { when: has_menu, accept: semicolon, send: 2 } # &quot;:&quot; (分号)选择第 2 个候选词</span>
    <span class="token comment"># - { when: has_menu, accept: apostrophe, send: 3 } # &quot;&#39;&quot; (引号)选择第 3 个候选词</span>
    <span class="token comment"># - { when: composing, accept: Shift+Tab, send: Shift+Left } # &quot;Shift+Tab&quot; 键向左选拼音分词</span>
    <span class="token comment"># - { when: composing, accept: Control+a, send: Home } # &quot;Control+a&quot; 光标移至首</span>
    <span class="token comment"># - { when: composing, accept: Control+e, send: End } # &quot;Control+e&quot; 光标移至尾</span>
    <span class="token comment"># - { when: composing, accept: Control+g, send: Escape } # &quot;Control+g&quot; 清码</span>
    <span class="token comment"># - { when: composing, accept: Return, send: Escape } # &quot;Return&quot; 回车清码</span>
    <span class="token comment"># - { when: always, accept: Control+Shift+1, select: .next } # 切换输入方案</span>
    <span class="token comment"># - { when: always, accept: Control+Shift+2, toggle: ascii_mode } # 中/英文切换</span>
    <span class="token comment"># - { when: always, accept: Control+Shift+3, toggle: full_shape } # 全角/半角切换</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> Control+Shift+4<span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> simplification <span class="token punctuation">}</span> <span class="token comment"># 繁简体切换</span>
    <span class="token comment"># - { when: always, accept: Control+Shift+5, toggle: extended_charset } # 通用/增广切换（显示生僻字）</span>
    <span class="token comment"># - { when: composing, accept: Control+b, send: Left } # &quot;Control+b&quot; 移动光标</span>
    <span class="token comment"># - { when: composing, accept: Control+f, send: Right } # &quot;Control+f&quot; 向右选择候选词</span>
    <span class="token comment"># - { when: composing, accept: Control+h, send: BackSpace } # &quot;Control+h&quot; 删除输入码</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ascii_composer/switch_key</code> 配置切换模式<br><code>clear</code> 表示按下此键后已输入的字符清除，同时rime输入状态切换为英文，大写键一定不能改为noop，否则大写英文将会无法输出，很多教程里都改为了noop，这点值得注意<br><code>commit_code</code> 即为提交代码，就是将已输入的字符上屏，同时输入法切换为英文<br><code>inline_ascii</code> 即为插入字符，就是已输入的字符为上屏前，按此键后输入法转为英文，可以接着输入，回车键再上屏<br><code>noop</code> 就是这个键在输入法里不会有任何操作</p><h4 id="界面配置" tabindex="-1"><a class="header-anchor" href="#界面配置" aria-hidden="true">#</a> 界面配置</h4>`,7),_=n("code",null,"squirrel.custom.yaml",-1),q={href:"https://github.com/rime/home/wiki/UserGuide",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">show_notifications_when</span><span class="token punctuation">:</span> appropriate <span class="token comment"># 状态通知，可设为全开（always）全关（never）</span>

  <span class="token key atrule">style</span><span class="token punctuation">:</span>
    <span class="token key atrule">color_scheme</span><span class="token punctuation">:</span> mac_light <span class="token comment"># 浅色主题</span>
    <span class="token key atrule">color_scheme_dark</span><span class="token punctuation">:</span> mac_dark <span class="token comment"># 深色主题</span>
    <span class="token key atrule">inline_preedit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># true为单行显示，false为双行显示</span>
    <span class="token key atrule">horizontal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># true横排，false竖排</span>

  <span class="token comment"># 皮肤主题</span>
  <span class="token key atrule">preset_color_schemes</span><span class="token punctuation">:</span>

    <span class="token key atrule">mac_light</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> Mac浅色
      <span class="token key atrule">candidate_format</span><span class="token punctuation">:</span> <span class="token string">&quot;%c %@ &quot;</span> <span class="token comment"># 用 1/6 em 空格 U+2005 来控制编号 %c 和候选词 %@ 前后的空间</span>
      <span class="token key atrule">corner_radius</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 窗口圆角</span>
      <span class="token key atrule">hilited_corner_radius</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 高亮圆角</span>
      <span class="token key atrule">line_spacing</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 行间距(适用于竖排)</span>
      <span class="token key atrule">border_height</span><span class="token punctuation">:</span> <span class="token number">4</span> <span class="token comment"># 窗口上下高度，大于圆角半径才生效</span>
      <span class="token key atrule">border_width</span><span class="token punctuation">:</span> <span class="token number">4</span> <span class="token comment"># 窗口左右宽度，大于圆角半径才生效</span>
      <span class="token key atrule">font_face</span><span class="token punctuation">:</span> <span class="token string">&quot;PingFangSC&quot;</span> <span class="token comment"># 候选词字体</span>
      <span class="token key atrule">font_point</span><span class="token punctuation">:</span> <span class="token number">14</span> <span class="token comment"># 候选字大小</span>
      <span class="token key atrule">label_font_point</span><span class="token punctuation">:</span> <span class="token number">12</span> <span class="token comment"># 候选编号大小</span>
      <span class="token key atrule">text_color</span><span class="token punctuation">:</span> <span class="token number">0x424242</span> <span class="token comment"># 拼音行文字颜色</span>
      <span class="token key atrule">back_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 候选条背景色</span>
      <span class="token key atrule">border_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 边框色</span>
      <span class="token key atrule">label_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 预选栏编号颜色</span>
      <span class="token key atrule">candidate_text_color</span><span class="token punctuation">:</span> <span class="token number">0x3c3c3c</span> <span class="token comment"># 预选项文字颜色</span>
      <span class="token key atrule">comment_text_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 拼音等提示文字颜色</span>
      <span class="token key atrule">hilited_text_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 高亮拼音 (需要开启内嵌编码)</span>
      <span class="token key atrule">hilited_back_color</span><span class="token punctuation">:</span> <span class="token number">0xD75A00</span> <span class="token comment"># 第一候选项背景背景色</span>
      <span class="token key atrule">hilited_candidate_text_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 第一候选项文字颜色</span>
      <span class="token key atrule">hilited_candidate_label_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 第一候选项编号颜色</span>
      <span class="token key atrule">hilited_comment_text_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 注解文字高亮</span>

    <span class="token key atrule">mac_dark</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> Mac深色
      <span class="token key atrule">candidate_format</span><span class="token punctuation">:</span> <span class="token string">&quot;%c %@ &quot;</span> <span class="token comment"># 用 1/6 em 空格 U+2005 来控制编号 %c 和候选词 %@ 前后的空间</span>
      <span class="token key atrule">corner_radius</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 窗口圆角</span>
      <span class="token key atrule">hilited_corner_radius</span><span class="token punctuation">:</span> <span class="token number">5</span> <span class="token comment"># 高亮圆角</span>
      <span class="token key atrule">line_spacing</span><span class="token punctuation">:</span> <span class="token number">10</span> <span class="token comment"># 行间距(适用于竖排)</span>
      <span class="token key atrule">border_height</span><span class="token punctuation">:</span> <span class="token number">4</span> <span class="token comment"># 窗口上下高度，大于圆角半径才生效</span>
      <span class="token key atrule">border_width</span><span class="token punctuation">:</span> <span class="token number">4</span> <span class="token comment"># 窗口左右宽度，大于圆角半径才生效</span>
      <span class="token key atrule">font_face</span><span class="token punctuation">:</span> <span class="token string">&quot;PingFangSC&quot;</span> <span class="token comment"># 候选词字体</span>
      <span class="token key atrule">font_point</span><span class="token punctuation">:</span> <span class="token number">14</span> <span class="token comment"># 候选字大小</span>
      <span class="token key atrule">label_font_point</span><span class="token punctuation">:</span> <span class="token number">12</span> <span class="token comment"># 候选编号大小</span>
      <span class="token key atrule">text_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 拼音行文字颜色</span>
      <span class="token key atrule">back_color</span><span class="token punctuation">:</span> <span class="token number">0x252a2e</span> <span class="token comment"># 候选条背景色</span>
      <span class="token key atrule">border_color</span><span class="token punctuation">:</span> <span class="token number">0x050505</span> <span class="token comment"># 边框色</span>
      <span class="token key atrule">label_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 预选栏编号颜色</span>
      <span class="token key atrule">candidate_text_color</span><span class="token punctuation">:</span> <span class="token number">0xe9e9ea</span> <span class="token comment"># 预选项文字颜色</span>
      <span class="token key atrule">comment_text_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 拼音等提示文字颜色</span>
      <span class="token key atrule">hilited_text_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 高亮拼音 (需要开启内嵌编码)</span>
      <span class="token key atrule">hilited_back_color</span><span class="token punctuation">:</span> <span class="token number">0x6f6f6f</span> <span class="token comment"># 第一候选项背景背景色</span>
      <span class="token key atrule">hilited_candidate_text_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 第一候选项文字颜色</span>
      <span class="token key atrule">hilited_candidate_label_color</span><span class="token punctuation">:</span> <span class="token number">0xFFFFFF</span> <span class="token comment"># 第一候选项编号颜色</span>
      <span class="token key atrule">hilited_comment_text_color</span><span class="token punctuation">:</span> <span class="token number">0x999999</span> <span class="token comment"># 注解文字高亮</span>

  <span class="token comment"># 特定App默认中/英文输入</span>
  <span class="token comment"># ascii_mode: true # true默认英文,false默认中文</span>
  <span class="token comment"># ascii_punct: true # 中文状态输出英文标点(半角)</span>
  <span class="token comment"># no_inline: true # 不使用行內編輯</span>
  <span class="token comment"># inline: true # 使用行內編輯</span>
  <span class="token key atrule">app_options</span><span class="token punctuation">:</span>
    <span class="token key atrule">com.apple.Spotlight</span><span class="token punctuation">:</span> <span class="token comment"># 聚焦搜索</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.runningwithcrayons.Alfred</span><span class="token punctuation">:</span> <span class="token comment"># alfred</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.apple.Terminal</span><span class="token punctuation">:</span> <span class="token comment"># 终端</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.microsoft.VSCode</span><span class="token punctuation">:</span> <span class="token comment"># Visual Studio Code</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.tencent.Lemon</span><span class="token punctuation">:</span> <span class="token comment"># 腾讯柠檬</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.apple.dt.Xcode</span><span class="token punctuation">:</span> <span class="token comment"># Xcode</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.nektony.App-Cleaner-SII</span><span class="token punctuation">:</span> <span class="token comment"># App Cleaner &amp; Uninstaller</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">com.xunyong.hapigo</span><span class="token punctuation">:</span> <span class="token comment"># hapigo</span>
      <span class="token key atrule">ascii_mode</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输入方案定置" tabindex="-1"><a class="header-anchor" href="#输入方案定置" aria-hidden="true">#</a> 输入方案定置</h4>`,2),x={href:"https://github.com/rime/home/wiki/RimeWithSchemata",target:"_blank",rel:"noopener noreferrer"},$=t(`<h5 id="自定义词库" tabindex="-1"><a class="header-anchor" href="#自定义词库" aria-hidden="true">#</a> 自定义词库</h5><p>新建或编辑 <code>luna_pinyin.extended.dict.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Rime dictionary</span>
<span class="token comment"># encoding: utf-8</span>
<span class="token comment"># Luna Pinyin Extended Dictionary(Basic)  - 明月拼音扩充词库（基本）</span>

<span class="token punctuation">---</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> luna_pinyin.extended      <span class="token comment"># 词库名</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2021.02.07&quot;</span>
<span class="token key atrule">sort</span><span class="token punctuation">:</span> by_weight                 <span class="token comment"># by_weight（按词频高低排序）或 original（保持原码表中的顺序）</span>
<span class="token key atrule">use_preset_vocabulary</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>     <span class="token comment"># true 或 false，选择是否导入预设词汇表【八股文】</span>

<span class="token key atrule">import_tables</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> luna_pinyin
  <span class="token punctuation">-</span> luna_pinyin.sogou

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={href:"https://ssnhd.github.io/2022/01/06/sogou-dict/",target:"_blank",rel:"noopener noreferrer"},F=t(`<h5 id="自定义输入方案" tabindex="-1"><a class="header-anchor" href="#自定义输入方案" aria-hidden="true">#</a> 自定义输入方案</h5><p>以简体中文为例，新建或编辑 <code>luna_pinyin_simp.schema.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Rime schema</span>
<span class="token comment"># encoding: utf-8</span>

<span class="token key atrule">schema</span><span class="token punctuation">:</span>
  <span class="token key atrule">schema_id</span><span class="token punctuation">:</span> luna_pinyin_simp
  <span class="token key atrule">name</span><span class="token punctuation">:</span> 朙月拼音·简化字
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;0.22&quot;</span>
  <span class="token key atrule">author</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> 佛振 &lt;chen.sst@gmail.com<span class="token punctuation">&gt;</span>
  <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    朙月拼音，簡化字輸出模式。</span>
<span class="token key atrule">switches</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ascii_mode
    <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> 中文<span class="token punctuation">,</span> 西文 <span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> full_shape
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> 半角<span class="token punctuation">,</span> 全角 <span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> zh_simp
    <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> 漢字<span class="token punctuation">,</span> 汉字 <span class="token punctuation">]</span>


<span class="token key atrule">engine</span><span class="token punctuation">:</span>
  <span class="token key atrule">processors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ascii_composer
    <span class="token punctuation">-</span> recognizer
    <span class="token punctuation">-</span> key_binder
    <span class="token punctuation">-</span> speller
    <span class="token punctuation">-</span> punctuator
    <span class="token punctuation">-</span> selector
    <span class="token punctuation">-</span> navigator
    <span class="token punctuation">-</span> express_editor
  <span class="token key atrule">segmentors</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ascii_segmentor
    <span class="token punctuation">-</span> matcher
    <span class="token punctuation">-</span> abc_segmentor
    <span class="token punctuation">-</span> punct_segmentor
    <span class="token punctuation">-</span> fallback_segmentor
  <span class="token key atrule">translators</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> punct_translator
    <span class="token punctuation">-</span> table_translator@custom_phrase
    <span class="token punctuation">-</span> script_translator
  <span class="token key atrule">filters</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> simplifier
    <span class="token punctuation">-</span> uniquifier

<span class="token key atrule">speller</span><span class="token punctuation">:</span>
  <span class="token key atrule">alphabet</span><span class="token punctuation">:</span> zyxwvutsrqponmlkjihgfedcba
  <span class="token key atrule">delimiter</span><span class="token punctuation">:</span> <span class="token string">&quot; &#39;&quot;</span>
  <span class="token key atrule">algebra</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> erase/^xx$/
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z<span class="token punctuation">]</span>).+$/$1/
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>zcs<span class="token punctuation">]</span>h).+$/$1/
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)ve$/$1ue/
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>jqxy<span class="token punctuation">]</span>)u/$1v/
    <span class="token punctuation">-</span> derive/un$/uen/
    <span class="token punctuation">-</span> derive/ui$/uei/
    <span class="token punctuation">-</span> derive/iu$/iou/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>aeiou<span class="token punctuation">]</span>)ng$/$1gn/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>dtngkhrzcs<span class="token punctuation">]</span>)o(u<span class="token punctuation">|</span>ng)$/$1o/
    <span class="token punctuation">-</span> derive/ong$/on/
    <span class="token punctuation">-</span> derive/ao$/oa/
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>iu<span class="token punctuation">]</span>)a(o<span class="token punctuation">|</span>ng<span class="token punctuation">?</span>)$/a$1$2/

<span class="token key atrule">translator</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> luna_pinyin
  <span class="token key atrule">prism</span><span class="token punctuation">:</span> luna_pinyin_simp
  <span class="token key atrule">preedit_format</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)v/$1ü/
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)ue/$1üe/
    <span class="token punctuation">-</span> xform/(<span class="token punctuation">[</span>jqxy<span class="token punctuation">]</span>)v/$1u/

<span class="token key atrule">custom_phrase</span><span class="token punctuation">:</span>
  <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">user_dict</span><span class="token punctuation">:</span> custom_phrase
  <span class="token key atrule">db_class</span><span class="token punctuation">:</span> stabledb
  <span class="token key atrule">enable_completion</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">enable_sentence</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token key atrule">simplifier</span><span class="token punctuation">:</span>
  <span class="token key atrule">option_name</span><span class="token punctuation">:</span> zh_simp

<span class="token key atrule">punctuator</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default

<span class="token key atrule">key_binder</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default
  <span class="token key atrule">bindings</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> Control+Shift+4<span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> zh_simp <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always<span class="token punctuation">,</span> <span class="token key atrule">accept</span><span class="token punctuation">:</span> Control+Shift+dollar<span class="token punctuation">,</span> <span class="token key atrule">toggle</span><span class="token punctuation">:</span> zh_simp <span class="token punctuation">}</span>

<span class="token key atrule">recognizer</span><span class="token punctuation">:</span>
  <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> default

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输入方案配置" tabindex="-1"><a class="header-anchor" href="#输入方案配置" aria-hidden="true">#</a> 输入方案配置</h4><p>以简体中文为例，新建或编辑 <code>luna_pinyin_simp.custom.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">patch</span><span class="token punctuation">:</span>
  <span class="token key atrule">switches</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ascii_mode <span class="token comment"># 0 中文，1 英文</span>
      <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;中文&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;西文&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> full_shape <span class="token comment"># 全角/半角符号开关</span>
      <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;半角&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;全角&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> show_emoji <span class="token comment"># Emoji 开关</span>
      <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;🈚️️\\uFE0E&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;🈶️️\\uFE0F&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> zh_simp <span class="token comment"># (※1) 繁简转换</span>
      <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;漢字&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;汉字&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ascii_punct
      <span class="token key atrule">states</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>。，<span class="token punctuation">,</span> ．，<span class="token punctuation">]</span>
    <span class="token punctuation">-</span> <span class="token key atrule">options</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gbk&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;gb2312&quot;</span><span class="token punctuation">]</span> <span class="token comment"># (※2)字符集选单</span>
      <span class="token key atrule">reset</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token comment"># 默认 UTF8</span>
      <span class="token key atrule">states</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>
        <span class="token punctuation">-</span> GBK
        <span class="token punctuation">-</span> GB2312

  <span class="token key atrule">simplifier</span><span class="token punctuation">:</span>
    <span class="token key atrule">option_name</span><span class="token punctuation">:</span> zh_simp

  <span class="token comment"># 启用罕见字過濾</span>
  <span class="token key atrule">engine/filters</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> simplifier
    <span class="token punctuation">-</span> simplifier@emoji_conversion
    <span class="token punctuation">-</span> uniquifier
    <span class="token punctuation">-</span> charset_filter@gbk <span class="token comment"># (※3) GBK 过滤</span>
    <span class="token punctuation">-</span> single_char_filter

  <span class="token key atrule">emoji_conversion</span><span class="token punctuation">:</span>
    <span class="token key atrule">opencc_config</span><span class="token punctuation">:</span> emoji.json
    <span class="token key atrule">option_name</span><span class="token punctuation">:</span> show_emoji
    <span class="token key atrule">tags</span><span class="token punctuation">:</span> abc
    <span class="token key atrule">tips</span><span class="token punctuation">:</span> all    <span class="token comment"># Emoji 显示注释</span>

  <span class="token comment"># 载入朙月拼音扩充词库</span>
  <span class="token key atrule">translator/dictionary</span><span class="token punctuation">:</span> luna_pinyin.extended
  <span class="token comment"># 关闭用户词典和字频调整</span>
  <span class="token comment"># translator/enable_user_dict: false</span>
  <span class="token comment"># 关闭句子输入</span>
  <span class="token comment"># translator/enable_sentence: false</span>

  <span class="token comment"># 改写拼写运算，含英文的词汇（luna_pinyin.cn_en.dict.yaml）不影响简拼</span>
  <span class="token key atrule">&quot;speller/algebra/@before 0&quot;</span><span class="token punctuation">:</span> xform/^(<span class="token punctuation">[</span>b<span class="token punctuation">-</span>df<span class="token punctuation">-</span>hj<span class="token punctuation">-</span>np<span class="token punctuation">-</span>tv<span class="token punctuation">-</span>z<span class="token punctuation">]</span>)$/$1_/
  <span class="token comment"># 加载easy_en依赖</span>
  <span class="token key atrule">&quot;schema/dependencies/@1&quot;</span><span class="token punctuation">:</span> easy_en
  <span class="token comment"># 载入翻译英文的码表翻译器，取名为 english</span>
  <span class="token key atrule">&quot;engine/translators/@4&quot;</span><span class="token punctuation">:</span> table_translator@english
  <span class="token comment"># english翻译器的设定项</span>
  <span class="token key atrule">english</span><span class="token punctuation">:</span>
    <span class="token key atrule">dictionary</span><span class="token punctuation">:</span> easy_en
    <span class="token key atrule">spelling_hints</span><span class="token punctuation">:</span> <span class="token number">9</span>
    <span class="token key atrule">enable_completion</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 是否启用英文输入联想补全</span>
    <span class="token key atrule">enable_sentence</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># 混输时不出现带有图案的英文</span>
    <span class="token key atrule">initial_quality</span><span class="token punctuation">:</span> <span class="token number">-0.5</span> <span class="token comment"># 英文候选词的位置, 数值越大越靠前。</span>

  <span class="token comment"># 快捷表情和符号</span>
  <span class="token key atrule">punctuator</span><span class="token punctuation">:</span>
    <span class="token key atrule">import_preset</span><span class="token punctuation">:</span> symbols
    <span class="token key atrule">symbols</span><span class="token punctuation">:</span>
      <span class="token key atrule">&quot;/fs&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>½<span class="token punctuation">,</span> ‰<span class="token punctuation">,</span> ¼<span class="token punctuation">,</span> ⅓<span class="token punctuation">,</span> ⅔<span class="token punctuation">,</span> ¾<span class="token punctuation">,</span> ⅒<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/xh&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>＊<span class="token punctuation">,</span> ×<span class="token punctuation">,</span> ✱<span class="token punctuation">,</span> ★<span class="token punctuation">,</span> ☆<span class="token punctuation">,</span> ✩<span class="token punctuation">,</span> ✧<span class="token punctuation">,</span> ❋<span class="token punctuation">,</span> ❊<span class="token punctuation">,</span> ❉<span class="token punctuation">,</span> ❈<span class="token punctuation">,</span> ❅<span class="token punctuation">,</span> ✿<span class="token punctuation">,</span> ✲<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/dq&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>🌍<span class="token punctuation">,</span> 🌎<span class="token punctuation">,</span> 🌏<span class="token punctuation">,</span> 🌐<span class="token punctuation">,</span> 🌑<span class="token punctuation">,</span> 🌒<span class="token punctuation">,</span> 🌓<span class="token punctuation">,</span> 🌔<span class="token punctuation">,</span> 🌕<span class="token punctuation">,</span> 🌖<span class="token punctuation">,</span> 🌗<span class="token punctuation">,</span> 🌘<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/sg&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>🍇<span class="token punctuation">,</span> 🍉<span class="token punctuation">,</span> 🍌<span class="token punctuation">,</span> 🍍<span class="token punctuation">,</span> 🍎<span class="token punctuation">,</span> 🍏<span class="token punctuation">,</span> 🍑<span class="token punctuation">,</span> 🍒<span class="token punctuation">,</span> 🍓<span class="token punctuation">,</span> 🍗<span class="token punctuation">,</span> 🍦<span class="token punctuation">,</span> 🎂<span class="token punctuation">,</span> 🍺<span class="token punctuation">,</span> 🍻<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/dw&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>🙈<span class="token punctuation">,</span> 🐵<span class="token punctuation">,</span> 🐈<span class="token punctuation">,</span> 🐷<span class="token punctuation">,</span> 🐨<span class="token punctuation">,</span> 🐼<span class="token punctuation">,</span> 🐾<span class="token punctuation">,</span> 🐔<span class="token punctuation">,</span> 🐬<span class="token punctuation">,</span> 🐠<span class="token punctuation">,</span> 🦋<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/bq&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>😀<span class="token punctuation">,</span> 😁<span class="token punctuation">,</span> 😂<span class="token punctuation">,</span> 😃<span class="token punctuation">,</span> 😄<span class="token punctuation">,</span> 😅<span class="token punctuation">,</span> 😆<span class="token punctuation">,</span> 😉<span class="token punctuation">,</span> 😊<span class="token punctuation">,</span> 😋<span class="token punctuation">,</span> 😎<span class="token punctuation">,</span> 😍<span class="token punctuation">,</span> 😘<span class="token punctuation">,</span> 😗<span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/ss&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>💪<span class="token punctuation">,</span> 👈<span class="token punctuation">,</span> 👉<span class="token punctuation">,</span> 👆<span class="token punctuation">,</span> 👇<span class="token punctuation">,</span> ✋<span class="token punctuation">,</span> 👌<span class="token punctuation">,</span> 👍<span class="token punctuation">,</span> 👎<span class="token punctuation">,</span> ✊<span class="token punctuation">,</span> 👊<span class="token punctuation">,</span> 👋<span class="token punctuation">,</span> 👏<span class="token punctuation">,</span> 👐<span class="token punctuation">]</span>
    <span class="token key atrule">half_shape</span><span class="token punctuation">:</span>
      <span class="token key atrule">&quot;#&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;#&quot;</span>
      <span class="token key atrule">&quot;*&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
      <span class="token key atrule">&quot;\`&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\`&quot;</span>
      <span class="token key atrule">&quot;~&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;~&quot;</span>
      <span class="token key atrule">&quot;@&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;@&quot;</span>
      <span class="token key atrule">&quot;=&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;=&quot;</span>
      &#39;\\&#39;<span class="token punctuation">:</span> <span class="token string">&quot;、&quot;</span>
      <span class="token key atrule">&quot;%&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;%&quot;</span>
      <span class="token key atrule">&quot;$&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;¥&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">&quot;|&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;｜&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;·&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">&quot;/&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;÷&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">&quot;&#39;&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">pair</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;「&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;」&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
      <span class="token key atrule">&quot;[&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;【&quot;</span>
      <span class="token key atrule">&quot;]&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;】&quot;</span>
      <span class="token key atrule">&quot;&lt;&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;《&quot;</span>
      <span class="token key atrule">&quot;&gt;&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;》&quot;</span>

  <span class="token key atrule">recognizer/patterns/punct</span><span class="token punctuation">:</span> <span class="token string">&quot;^/([a-z]+|[0-9]0?)$&quot;</span>

  <span class="token comment"># 模糊拼音</span>
  <span class="token key atrule">&quot;speller/algebra&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> erase/^xx$/ <span class="token comment"># 第一行保留</span>

    <span class="token comment"># 模糊音定義</span>
    <span class="token comment"># 需要哪組就刪去行首的 # 號，單雙向任選</span>
    <span class="token comment"># - derive/^([zcs])h/$1/ # zh, ch, sh =&gt; z, c, s</span>
    <span class="token comment"># - derive/^([zcs])([^h])/$1h$2/ # z, c, s =&gt; zh, ch, sh</span>

    <span class="token comment"># - derive/^n/l/ # n =&gt; l</span>
    <span class="token comment"># - derive/^l/n/ # l =&gt; n</span>

    <span class="token comment"># 這兩組一般是單向的</span>
    <span class="token comment"># - derive/^r/l/ # r =&gt; l</span>

    <span class="token comment"># - derive/^ren/yin/ # ren =&gt; yin, reng =&gt; ying</span>
    <span class="token comment"># - derive/^r/y/ # r =&gt; y</span>

    <span class="token comment"># 下面 hu &lt;=&gt; f 這組寫法複雜一些，分情況討論</span>
    <span class="token comment"># - derive/^hu$/fu/ # hu =&gt; fu</span>
    <span class="token comment"># - derive/^hong$/feng/ # hong =&gt; feng</span>
    <span class="token comment"># - derive/^hu([in])$/fe$1/ # hui =&gt; fei, hun =&gt; fen</span>
    <span class="token comment"># - derive/^hu([ao])/f$1/ # hua =&gt; fa, ...</span>

    <span class="token comment"># - derive/^fu$/hu/ # fu =&gt; hu</span>
    <span class="token comment"># - derive/^feng$/hong/ # feng =&gt; hong</span>
    <span class="token comment"># - derive/^fe([in])$/hu$1/ # fei =&gt; hui, fen =&gt; hun</span>
    <span class="token comment"># - derive/^f([ao])/hu$1/ # fa =&gt; hua, ...</span>

    <span class="token comment"># 韻母部份</span>
    <span class="token comment"># - derive/^([bpmf])eng$/$1ong/ # meng = mong, ...</span>
    <span class="token comment"># - derive/([ei])n$/$1ng/ # en =&gt; eng, in =&gt; ing</span>
    <span class="token comment"># - derive/([ei])ng$/$1n/ # eng =&gt; en, ing =&gt; in</span>

    <span class="token comment"># 樣例足夠了，其他請自己總結……</span>

    <span class="token comment"># 反模糊音？</span>
    <span class="token comment"># 誰說方言沒有普通話精確、有模糊音，就能有反模糊音。</span>
    <span class="token comment"># 示例爲分尖團的中原官話：</span>
    <span class="token comment"># - derive/^ji$/zii/ # 在設計者安排下鳩佔鵲巢，尖音i只好雙寫了</span>
    <span class="token comment"># - derive/^qi$/cii/</span>
    <span class="token comment"># - derive/^xi$/sii/</span>
    <span class="token comment"># - derive/^ji/zi/</span>
    <span class="token comment"># - derive/^qi/ci/</span>
    <span class="token comment"># - derive/^xi/si/</span>
    <span class="token comment"># - derive/^ju/zv/</span>
    <span class="token comment"># - derive/^qu/cv/</span>
    <span class="token comment"># - derive/^xu/sv/</span>
    <span class="token comment"># 韻母部份，只能從大面上覆蓋</span>
    <span class="token comment"># - derive/^([bpm])o$/$1eh/ # bo =&gt; beh, ...</span>
    <span class="token comment"># - derive/(^|[dtnlgkhzcs]h?)e$/$1eh/ # ge =&gt; geh, se =&gt; sheh, ...</span>
    <span class="token comment"># - derive/^([gkh])uo$/$1ue/ # guo =&gt; gue, ...</span>
    <span class="token comment"># - derive/^([gkh])e$/$1uo/ # he =&gt; huo, ...</span>
    <span class="token comment"># - derive/([uv])e$/$1o/ # jue =&gt; juo, lve =&gt; lvo, ...</span>
    <span class="token comment"># - derive/^fei$/fi/ # fei =&gt; fi</span>
    <span class="token comment"># - derive/^wei$/vi/ # wei =&gt; vi</span>
    <span class="token comment"># - derive/^([nl])ei$/$1ui/ # nei =&gt; nui, lei =&gt; lui</span>
    <span class="token comment"># - derive/^([nlzcs])un$/$1vn/ # lun =&gt; lvn, zun =&gt; zvn, ...</span>
    <span class="token comment"># - derive/^([nlzcs])ong$/$1iong/ # long =&gt; liong, song =&gt; siong, ...</span>
    <span class="token comment"># 這個辦法雖從拼寫上做出了區分，然而受詞典制約，候選字仍是混的。</span>
    <span class="token comment"># 只有真正的方音輸入方案纔能做到！但「反模糊音」這個玩法快速而有效！</span>

    <span class="token comment"># 模糊音定義先於簡拼定義，方可令簡拼支持以上模糊音</span>
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>a<span class="token punctuation">-</span>z<span class="token punctuation">]</span>).+$/$1/ <span class="token comment"># 簡拼（首字母）</span>
    <span class="token punctuation">-</span> abbrev/^(<span class="token punctuation">[</span>zcs<span class="token punctuation">]</span>h).+$/$1/ <span class="token comment"># 簡拼（zh, ch, sh）</span>

    <span class="token comment"># 以下是一組容錯拼寫，《漢語拼音》方案以前者爲正</span>
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>nl<span class="token punctuation">]</span>)ve$/$1ue/ <span class="token comment"># nve = nue, lve = lue</span>
    <span class="token punctuation">-</span> derive/^(<span class="token punctuation">[</span>jqxy<span class="token punctuation">]</span>)u/$1v/ <span class="token comment"># ju = jv,</span>
    <span class="token punctuation">-</span> derive/un$/uen/ <span class="token comment"># gun = guen,</span>
    <span class="token punctuation">-</span> derive/ui$/uei/ <span class="token comment"># gui = guei,</span>
    <span class="token punctuation">-</span> derive/iu$/iou/ <span class="token comment"># jiu = jiou,</span>

    <span class="token comment"># 自動糾正一些常見的按鍵錯誤</span>
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>aeiou<span class="token punctuation">]</span>)ng$/$1gn/ <span class="token comment"># dagn =&gt; dang</span>
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>dtngkhrzcs<span class="token punctuation">]</span>)o(u<span class="token punctuation">|</span>ng)$/$1o/ <span class="token comment"># zho =&gt; zhong|zhou</span>
    <span class="token punctuation">-</span> derive/ong$/on/ <span class="token comment"># zhonguo =&gt; zhong guo</span>
    <span class="token punctuation">-</span> derive/ao$/oa/ <span class="token comment"># hoa =&gt; hao</span>
    <span class="token punctuation">-</span> derive/(<span class="token punctuation">[</span>iu<span class="token punctuation">]</span>)a(o<span class="token punctuation">|</span>ng<span class="token punctuation">?</span>)$/a$1$2/ <span class="token comment"># tain =&gt; tian</span>

  <span class="token comment"># 分尖團後 v =&gt; ü 的改寫條件也要相應地擴充：</span>
  <span class="token comment">#&#39;translator/preedit_format&#39;:</span>
  <span class="token comment">#  - &quot;xform/([nljqxyzcs])v/$1ü/&quot;</span>

  <span class="token comment"># librime-lua 输入动态时间和日期</span>
  <span class="token key atrule">&quot;engine/translators/@6&quot;</span><span class="token punctuation">:</span> lua_translator@date_translator

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置同步信息" tabindex="-1"><a class="header-anchor" href="#配置同步信息" aria-hidden="true">#</a> 配置同步信息</h4><p>新建或编辑 <code>installation.yaml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">distribution_code_name</span><span class="token punctuation">:</span> Squirrel
<span class="token key atrule">distribution_name</span><span class="token punctuation">:</span> <span class="token string">&quot;鼠鬚管&quot;</span>
<span class="token key atrule">distribution_version</span><span class="token punctuation">:</span> 0.16.2
<span class="token key atrule">install_time</span><span class="token punctuation">:</span> <span class="token string">&quot;Sat Apr  8 22:27:54 2023&quot;</span>
<span class="token comment"># 配置名称默认为uuid，改为自己喜欢的名字</span>
<span class="token key atrule">installation_id</span><span class="token punctuation">:</span> <span class="token string">&quot;Squirrel&quot;</span>
<span class="token key atrule">rime_version</span><span class="token punctuation">:</span> 1.8.5
<span class="token comment"># 同步目录默认为~/Library/Rime/sync，配置同步到iCloud</span>
<span class="token key atrule">sync_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/Users/&lt;你的用户名&gt;/Library/Mobile Documents/config/rime&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><h3 id="词库转换" tabindex="-1"><a class="header-anchor" href="#词库转换" aria-hidden="true">#</a> 词库转换</h3>`,11),z={href:"https://pinyin.sogou.com/dict/cate/index/167?rf=dictindex&pos=dict_rcmd",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/studyzy/imewlconverter/releases",target:"_blank",rel:"noopener noreferrer"},S=n("h3",{id:"字体",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字体","aria-hidden":"true"},"#"),s(" 字体")],-1),j={href:"https://github.com/max32002/max-hana",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),s(" 参考")],-1),E={href:"https://zhuanlan.zhihu.com/p/91129641",target:"_blank",rel:"noopener noreferrer"},L={href:"https://ssnhd.github.io/2022/01/06/rime/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://ssnhd.github.io/2022/01/11/rime-skin/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://ssnhd.github.io/2022/01/06/sogou-dict/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.xiebruce.top/1235.html",target:"_blank",rel:"noopener noreferrer"};function U(B,T){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[s("Mac "),n("a",r,[s("鼠须管 Squirrel"),e(a)])]),n("p",null,[s("Win "),n("a",k,[s("小狼毫 Weasel"),e(a)])]),n("p",null,[s("Linux "),n("a",d,[s("fcitx-rime"),e(a)]),s("，"),n("a",m,[s("ibus-rime"),e(a)])]),n("p",null,[s("Android "),n("a",v,[s("同文 Tongwen"),e(a)])]),n("p",null,[s("在线 "),n("a",b,[s("My RIME"),e(a)])]),h,n("p",null,[n("a",y,[s("ssnhd"),e(a)]),s(" 朙月拼音、小鹤双拼、自然码双拼")]),g,n("p",null,[s("新建或编辑 "),_,s("，"),n("a",q,[s("说明书"),e(a)])]),f,n("p",null,[n("a",x,[s("方案设计书"),e(a)])]),$,n("p",null,[s("词库生成参考"),n("a",w,[s("搜狗词库转换方法（支持多家输入法）"),e(a)])]),F,n("p",null,[n("a",z,[s("搜狗官网"),e(a)]),s(" 下载词库，深蓝词库转换工具 "),n("a",C,[s("imewlconverter"),e(a)])]),S,n("p",null,[n("a",j,[s("花园明朝"),e(a)])]),R,n("p",null,[n("a",E,[s("rime定制指南 "),e(a)])]),n("p",null,[n("a",L,[s("Rime Squirrel 鼠须管输入法配置详解"),e(a)])]),n("p",null,[n("a",M,[s("Rime Squirrel 鼠须管输入法皮肤效果"),e(a)])]),n("p",null,[n("a",I,[s("搜狗词库转换方法（支持多家输入法）"),e(a)])]),n("p",null,[n("a",P,[s("macOS安装配置RIME-鼠须管输入法"),e(a)])])])}const V=p(i,[["render",U],["__file","rime-input-config.html.vue"]]);export{V as default};
