# RIME 中州韵输入法配置



## 安装

```sh
brew install --cask squirrel
```

Mac [鼠须管 Squirrel](https://github.com/rime/squirrel/releases/latest)

Win [小狼毫 Weasel](https://github.com/rime/weasel/releases/latest)

Linux [fcitx-rime](https://github.com/fcitx/fcitx-rime)，[ibus-rime](https://github.com/rime/home/wiki/RimeWithIBus)

Android [同文 Tongwen](https://github.com/osfans/trime)

在线 [My RIME](https://github.com/LibreService/my_rime)

Mac 安装完成需要重启电脑，否则有些软件不能切换到中文输入法

## 卸载

```sh
# 输入法程序目录
sudo rm -rf /Library/Input\ Methods/Squirrel.app
# 个人配置文件目录
sudo rm -rf ~/Library/Rime/
```

## 配置

### 现成配置 

[ssnhd](https://github.com/ssnhd/rime) 朙月拼音、小鹤双拼、自然码双拼

### 自定义

- 全局配置 `default.custom.yaml`
- 界面配置 `squirrel.custom.yaml`
- 输入方案定置``<方案标识>.schema.yaml`
- 输入方案配置 `<方案标识>.custom.yaml`
- 安装信息 `installation.yaml`

#### 全局配置 

新建或编辑 `default.custom.yaml`

```yaml
patch:
  schema_list:
    - schema: luna_pinyin_simp # 朙月拼音
    - schema: double_pinyin_flypy # 小鹤双拼
    - schema: double_pinyin # 自然码双拼
    - schema: numbers # 大写数字
  # 切换提示语
  switcher/caption: 〔切换输入法〕
  # 切换快捷键
  switcher/hotkeys:
    # - Control+grave
    - Control+Shift+grave
    # - F4

  menu/page_size: 9 # 候选词个数
  translator/enable_user_dict: false # 关闭用户词典和字频调整
  translator/enable_sentence: false # 关闭句子输入
  # true为单行显示，false为双行显示
  stylel/inline_preedit: false

  # 若 caps 切换大小写无效, 打开 Mac 系统偏好设置 > 键盘 > 输入法 > 取消勾选[使用大写锁定键切换“美国”输入模式]
  ascii_composer/good_old_caps_lock: true # 若为 true， Caps 只切换大小写
  ascii_composer/switch_key:
    Caps_Lock: commit_code # Caps 键
    Shift_L: commit_code # 左 Shift，切换中英文
    Shift_R: commit_code # 右 Shift，切换中英文
    Control_L: noop # 左 Control，屏蔽该切换键
    Control_R: noop # 右 Control，屏蔽该切换键

  key_binder/bindings: # 若开启, 去掉前面#
    # 翻页
    #- { when: has_menu, accept: Tab, send: Page_Down }            # "tab" 键翻页, 和 "tab" 键分词只能二选一
    - { when: composing, accept: Tab, send: Shift+Right } # "tab" 键分词
    - { when: paging, accept: minus, send: Page_Up } # "-" 上一页
    - { when: has_menu, accept: equal, send: Page_Down } # "=" 下一页
    - { when: paging, accept: comma, send: Page_Up } # "," 上一页
    - { when: has_menu, accept: period, send: Page_Down } # "." 下一页
    - { when: paging, accept: bracketleft, send: Page_Up } # "[" 上一页
    - { when: has_menu, accept: bracketright, send: Page_Down } # "]" 下一页
    # 快捷键
    # - { when: has_menu, accept: semicolon, send: 2 } # ":" (分号)选择第 2 个候选词
    # - { when: has_menu, accept: apostrophe, send: 3 } # "'" (引号)选择第 3 个候选词
    # - { when: composing, accept: Shift+Tab, send: Shift+Left } # "Shift+Tab" 键向左选拼音分词
    # - { when: composing, accept: Control+a, send: Home } # "Control+a" 光标移至首
    # - { when: composing, accept: Control+e, send: End } # "Control+e" 光标移至尾
    # - { when: composing, accept: Control+g, send: Escape } # "Control+g" 清码
    # - { when: composing, accept: Return, send: Escape } # "Return" 回车清码
    # - { when: always, accept: Control+Shift+1, select: .next } # 切换输入方案
    # - { when: always, accept: Control+Shift+2, toggle: ascii_mode } # 中/英文切换
    # - { when: always, accept: Control+Shift+3, toggle: full_shape } # 全角/半角切换
    - { when: always, accept: Control+Shift+4, toggle: simplification } # 繁简体切换
    # - { when: always, accept: Control+Shift+5, toggle: extended_charset } # 通用/增广切换（显示生僻字）
    # - { when: composing, accept: Control+b, send: Left } # "Control+b" 移动光标
    # - { when: composing, accept: Control+f, send: Right } # "Control+f" 向右选择候选词
    # - { when: composing, accept: Control+h, send: BackSpace } # "Control+h" 删除输入码

```

`ascii_composer/switch_key` 配置切换模式  
`clear` 表示按下此键后已输入的字符清除，同时rime输入状态切换为英文，大写键一定不能改为noop，否则大写英文将会无法输出，很多教程里都改为了noop，这点值得注意  
`commit_code` 即为提交代码，就是将已输入的字符上屏，同时输入法切换为英文  
`inline_ascii` 即为插入字符，就是已输入的字符为上屏前，按此键后输入法转为英文，可以接着输入，回车键再上屏  
`noop` 就是这个键在输入法里不会有任何操作  

#### 界面配置

新建或编辑 `squirrel.custom.yaml`，[说明书](https://github.com/rime/home/wiki/UserGuide)

```yaml
patch:
  show_notifications_when: appropriate # 状态通知，可设为全开（always）全关（never）

  style:
    color_scheme: mac_light # 浅色主题
    color_scheme_dark: mac_dark # 深色主题
    inline_preedit: false # true为单行显示，false为双行显示
    horizontal: true # true横排，false竖排

  # 皮肤主题
  preset_color_schemes:

    mac_light:
      name: Mac浅色
      candidate_format: "%c %@ " # 用 1/6 em 空格 U+2005 来控制编号 %c 和候选词 %@ 前后的空间
      corner_radius: 5 # 窗口圆角
      hilited_corner_radius: 5 # 高亮圆角
      line_spacing: 10 # 行间距(适用于竖排)
      border_height: 4 # 窗口上下高度，大于圆角半径才生效
      border_width: 4 # 窗口左右宽度，大于圆角半径才生效
      font_face: "PingFangSC" # 候选词字体
      font_point: 14 # 候选字大小
      label_font_point: 12 # 候选编号大小
      text_color: 0x424242 # 拼音行文字颜色
      back_color: 0xFFFFFF # 候选条背景色
      border_color: 0xFFFFFF # 边框色
      label_color: 0x999999 # 预选栏编号颜色
      candidate_text_color: 0x3c3c3c # 预选项文字颜色
      comment_text_color: 0x999999 # 拼音等提示文字颜色
      hilited_text_color: 0xFFFFFF # 高亮拼音 (需要开启内嵌编码)
      hilited_back_color: 0xD75A00 # 第一候选项背景背景色
      hilited_candidate_text_color: 0xFFFFFF # 第一候选项文字颜色
      hilited_candidate_label_color: 0xFFFFFF # 第一候选项编号颜色
      hilited_comment_text_color: 0x999999 # 注解文字高亮

    mac_dark:
      name: Mac深色
      candidate_format: "%c %@ " # 用 1/6 em 空格 U+2005 来控制编号 %c 和候选词 %@ 前后的空间
      corner_radius: 5 # 窗口圆角
      hilited_corner_radius: 5 # 高亮圆角
      line_spacing: 10 # 行间距(适用于竖排)
      border_height: 4 # 窗口上下高度，大于圆角半径才生效
      border_width: 4 # 窗口左右宽度，大于圆角半径才生效
      font_face: "PingFangSC" # 候选词字体
      font_point: 14 # 候选字大小
      label_font_point: 12 # 候选编号大小
      text_color: 0x999999 # 拼音行文字颜色
      back_color: 0x252a2e # 候选条背景色
      border_color: 0x050505 # 边框色
      label_color: 0x999999 # 预选栏编号颜色
      candidate_text_color: 0xe9e9ea # 预选项文字颜色
      comment_text_color: 0x999999 # 拼音等提示文字颜色
      hilited_text_color: 0xFFFFFF # 高亮拼音 (需要开启内嵌编码)
      hilited_back_color: 0x6f6f6f # 第一候选项背景背景色
      hilited_candidate_text_color: 0xFFFFFF # 第一候选项文字颜色
      hilited_candidate_label_color: 0xFFFFFF # 第一候选项编号颜色
      hilited_comment_text_color: 0x999999 # 注解文字高亮

  # 特定App默认中/英文输入
  # ascii_mode: true # true默认英文,false默认中文
  # ascii_punct: true # 中文状态输出英文标点(半角)
  # no_inline: true # 不使用行內編輯
  # inline: true # 使用行內編輯
  app_options:
    com.apple.Spotlight: # 聚焦搜索
      ascii_mode: true
    com.runningwithcrayons.Alfred: # alfred
      ascii_mode: true
    com.apple.Terminal: # 终端
      ascii_mode: true
    com.microsoft.VSCode: # Visual Studio Code
      ascii_mode: true
    com.tencent.Lemon: # 腾讯柠檬
      ascii_mode: true
    com.apple.dt.Xcode: # Xcode
      ascii_mode: true
    com.nektony.App-Cleaner-SII: # App Cleaner & Uninstaller
      ascii_mode: true
    com.xunyong.hapigo: # hapigo
      ascii_mode: true

```

#### 输入方案定置

[方案设计书](https://github.com/rime/home/wiki/RimeWithSchemata)

##### 自定义词库

新建或编辑 `luna_pinyin.extended.dict.yaml`

```yaml
# Rime dictionary
# encoding: utf-8
# Luna Pinyin Extended Dictionary(Basic)  - 明月拼音扩充词库（基本）

---
name: luna_pinyin.extended      # 词库名
version: "2021.02.07"
sort: by_weight                 # by_weight（按词频高低排序）或 original（保持原码表中的顺序）
use_preset_vocabulary: true     # true 或 false，选择是否导入预设词汇表【八股文】

import_tables:
  - luna_pinyin
  - luna_pinyin.sogou

```

词库生成参考[搜狗词库转换方法（支持多家输入法）](https://ssnhd.github.io/2022/01/06/sogou-dict/)

##### 自定义输入方案

以简体中文为例，新建或编辑 `luna_pinyin_simp.schema.yaml`

```yaml
# Rime schema
# encoding: utf-8

schema:
  schema_id: luna_pinyin_simp
  name: 朙月拼音·简化字
  version: "0.22"
  author:
    - 佛振 <chen.sst@gmail.com>
  description: |
    朙月拼音，簡化字輸出模式。
switches:
  - name: ascii_mode
    reset: 0
    states: [ 中文, 西文 ]
  - name: full_shape
    states: [ 半角, 全角 ]
  - name: zh_simp
    reset: 1
    states: [ 漢字, 汉字 ]


engine:
  processors:
    - ascii_composer
    - recognizer
    - key_binder
    - speller
    - punctuator
    - selector
    - navigator
    - express_editor
  segmentors:
    - ascii_segmentor
    - matcher
    - abc_segmentor
    - punct_segmentor
    - fallback_segmentor
  translators:
    - punct_translator
    - table_translator@custom_phrase
    - script_translator
  filters:
    - simplifier
    - uniquifier

speller:
  alphabet: zyxwvutsrqponmlkjihgfedcba
  delimiter: " '"
  algebra:
    - erase/^xx$/
    - abbrev/^([a-z]).+$/$1/
    - abbrev/^([zcs]h).+$/$1/
    - derive/^([nl])ve$/$1ue/
    - derive/^([jqxy])u/$1v/
    - derive/un$/uen/
    - derive/ui$/uei/
    - derive/iu$/iou/
    - derive/([aeiou])ng$/$1gn/
    - derive/([dtngkhrzcs])o(u|ng)$/$1o/
    - derive/ong$/on/
    - derive/ao$/oa/
    - derive/([iu])a(o|ng?)$/a$1$2/

translator:
  dictionary: luna_pinyin
  prism: luna_pinyin_simp
  preedit_format:
    - xform/([nl])v/$1ü/
    - xform/([nl])ue/$1üe/
    - xform/([jqxy])v/$1u/

custom_phrase:
  dictionary: ""
  user_dict: custom_phrase
  db_class: stabledb
  enable_completion: false
  enable_sentence: false
  initial_quality: 1

simplifier:
  option_name: zh_simp

punctuator:
  import_preset: default

key_binder:
  import_preset: default
  bindings:
    - { when: always, accept: Control+Shift+4, toggle: zh_simp }
    - { when: always, accept: Control+Shift+dollar, toggle: zh_simp }

recognizer:
  import_preset: default

```



#### 输入方案配置

以简体中文为例，新建或编辑 `luna_pinyin_simp.custom.yaml`

```yaml
patch:
  switches:
    - name: ascii_mode # 0 中文，1 英文
      reset: 0
      states: ["中文", "西文"]
    - name: full_shape # 全角/半角符号开关
      states: ["半角", "全角"]
    - name: show_emoji # Emoji 开关
      reset: 1
      states: ["🈚️️\uFE0E", "🈶️️\uFE0F"]
    - name: zh_simp # (※1) 繁简转换
      reset: 1
      states: ["漢字", "汉字"]
    - name: ascii_punct
      states: [。，, ．，]
    - options: ["utf8", "gbk", "gb2312"] # (※2)字符集选单
      reset: 0 # 默认 UTF8
      states:
        - UTF-8
        - GBK
        - GB2312

  simplifier:
    option_name: zh_simp

  # 启用罕见字過濾
  engine/filters:
    - simplifier
    - simplifier@emoji_conversion
    - uniquifier
    - charset_filter@gbk # (※3) GBK 过滤
    - single_char_filter

  emoji_conversion:
    opencc_config: emoji.json
    option_name: show_emoji
    tags: abc
    tips: all    # Emoji 显示注释

  # 载入朙月拼音扩充词库
  translator/dictionary: luna_pinyin.extended
  # 关闭用户词典和字频调整
  # translator/enable_user_dict: false
  # 关闭句子输入
  # translator/enable_sentence: false

  # 改写拼写运算，含英文的词汇（luna_pinyin.cn_en.dict.yaml）不影响简拼
  "speller/algebra/@before 0": xform/^([b-df-hj-np-tv-z])$/$1_/
  # 加载easy_en依赖
  "schema/dependencies/@1": easy_en
  # 载入翻译英文的码表翻译器，取名为 english
  "engine/translators/@4": table_translator@english
  # english翻译器的设定项
  english:
    dictionary: easy_en
    spelling_hints: 9
    enable_completion: false # 是否启用英文输入联想补全
    enable_sentence: false # 混输时不出现带有图案的英文
    initial_quality: -0.5 # 英文候选词的位置, 数值越大越靠前。

  # 快捷表情和符号
  punctuator:
    import_preset: symbols
    symbols:
      "/fs": [½, ‰, ¼, ⅓, ⅔, ¾, ⅒]
      "/xh": [＊, ×, ✱, ★, ☆, ✩, ✧, ❋, ❊, ❉, ❈, ❅, ✿, ✲]
      "/dq": [🌍, 🌎, 🌏, 🌐, 🌑, 🌒, 🌓, 🌔, 🌕, 🌖, 🌗, 🌘]
      "/sg": [🍇, 🍉, 🍌, 🍍, 🍎, 🍏, 🍑, 🍒, 🍓, 🍗, 🍦, 🎂, 🍺, 🍻]
      "/dw": [🙈, 🐵, 🐈, 🐷, 🐨, 🐼, 🐾, 🐔, 🐬, 🐠, 🦋]
      "/bq": [😀, 😁, 😂, 😃, 😄, 😅, 😆, 😉, 😊, 😋, 😎, 😍, 😘, 😗]
      "/ss": [💪, 👈, 👉, 👆, 👇, ✋, 👌, 👍, 👎, ✊, 👊, 👋, 👏, 👐]
    half_shape:
      "#": "#"
      "*": "*"
      "`": "`"
      "~": "~"
      "@": "@"
      "=": "="
      '\': "、"
      "%": "%"
      "$": ["¥", "$"]
      "|": ["|", "｜", "·"]
      "/": ["/", "÷"]
      "'": { pair: ["「", "」"] }
      "[": "【"
      "]": "】"
      "<": "《"
      ">": "》"

  recognizer/patterns/punct: "^/([a-z]+|[0-9]0?)$"

  # 模糊拼音
  "speller/algebra":
    - erase/^xx$/ # 第一行保留

    # 模糊音定義
    # 需要哪組就刪去行首的 # 號，單雙向任選
    # - derive/^([zcs])h/$1/ # zh, ch, sh => z, c, s
    # - derive/^([zcs])([^h])/$1h$2/ # z, c, s => zh, ch, sh

    # - derive/^n/l/ # n => l
    # - derive/^l/n/ # l => n

    # 這兩組一般是單向的
    # - derive/^r/l/ # r => l

    # - derive/^ren/yin/ # ren => yin, reng => ying
    # - derive/^r/y/ # r => y

    # 下面 hu <=> f 這組寫法複雜一些，分情況討論
    # - derive/^hu$/fu/ # hu => fu
    # - derive/^hong$/feng/ # hong => feng
    # - derive/^hu([in])$/fe$1/ # hui => fei, hun => fen
    # - derive/^hu([ao])/f$1/ # hua => fa, ...

    # - derive/^fu$/hu/ # fu => hu
    # - derive/^feng$/hong/ # feng => hong
    # - derive/^fe([in])$/hu$1/ # fei => hui, fen => hun
    # - derive/^f([ao])/hu$1/ # fa => hua, ...

    # 韻母部份
    # - derive/^([bpmf])eng$/$1ong/ # meng = mong, ...
    # - derive/([ei])n$/$1ng/ # en => eng, in => ing
    # - derive/([ei])ng$/$1n/ # eng => en, ing => in

    # 樣例足夠了，其他請自己總結……

    # 反模糊音？
    # 誰說方言沒有普通話精確、有模糊音，就能有反模糊音。
    # 示例爲分尖團的中原官話：
    # - derive/^ji$/zii/ # 在設計者安排下鳩佔鵲巢，尖音i只好雙寫了
    # - derive/^qi$/cii/
    # - derive/^xi$/sii/
    # - derive/^ji/zi/
    # - derive/^qi/ci/
    # - derive/^xi/si/
    # - derive/^ju/zv/
    # - derive/^qu/cv/
    # - derive/^xu/sv/
    # 韻母部份，只能從大面上覆蓋
    # - derive/^([bpm])o$/$1eh/ # bo => beh, ...
    # - derive/(^|[dtnlgkhzcs]h?)e$/$1eh/ # ge => geh, se => sheh, ...
    # - derive/^([gkh])uo$/$1ue/ # guo => gue, ...
    # - derive/^([gkh])e$/$1uo/ # he => huo, ...
    # - derive/([uv])e$/$1o/ # jue => juo, lve => lvo, ...
    # - derive/^fei$/fi/ # fei => fi
    # - derive/^wei$/vi/ # wei => vi
    # - derive/^([nl])ei$/$1ui/ # nei => nui, lei => lui
    # - derive/^([nlzcs])un$/$1vn/ # lun => lvn, zun => zvn, ...
    # - derive/^([nlzcs])ong$/$1iong/ # long => liong, song => siong, ...
    # 這個辦法雖從拼寫上做出了區分，然而受詞典制約，候選字仍是混的。
    # 只有真正的方音輸入方案纔能做到！但「反模糊音」這個玩法快速而有效！

    # 模糊音定義先於簡拼定義，方可令簡拼支持以上模糊音
    - abbrev/^([a-z]).+$/$1/ # 簡拼（首字母）
    - abbrev/^([zcs]h).+$/$1/ # 簡拼（zh, ch, sh）

    # 以下是一組容錯拼寫，《漢語拼音》方案以前者爲正
    - derive/^([nl])ve$/$1ue/ # nve = nue, lve = lue
    - derive/^([jqxy])u/$1v/ # ju = jv,
    - derive/un$/uen/ # gun = guen,
    - derive/ui$/uei/ # gui = guei,
    - derive/iu$/iou/ # jiu = jiou,

    # 自動糾正一些常見的按鍵錯誤
    - derive/([aeiou])ng$/$1gn/ # dagn => dang
    - derive/([dtngkhrzcs])o(u|ng)$/$1o/ # zho => zhong|zhou
    - derive/ong$/on/ # zhonguo => zhong guo
    - derive/ao$/oa/ # hoa => hao
    - derive/([iu])a(o|ng?)$/a$1$2/ # tain => tian

  # 分尖團後 v => ü 的改寫條件也要相應地擴充：
  #'translator/preedit_format':
  #  - "xform/([nljqxyzcs])v/$1ü/"

  # librime-lua 输入动态时间和日期
  "engine/translators/@6": lua_translator@date_translator

```


#### 配置同步信息

新建或编辑 `installation.yaml`

```yaml
distribution_code_name: Squirrel
distribution_name: "鼠鬚管"
distribution_version: 0.16.2
install_time: "Sat Apr  8 22:27:54 2023"
# 配置名称默认为uuid，改为自己喜欢的名字
installation_id: "Squirrel"
rime_version: 1.8.5
# 同步目录默认为~/Library/Rime/sync，配置同步到iCloud
sync_dir: "/Users/<你的用户名>/Library/Mobile Documents/config/rime"
```

## 扩展

### 词库转换

 [搜狗官网](https://pinyin.sogou.com/dict/cate/index/167?rf=dictindex&pos=dict_rcmd) 下载词库，深蓝词库转换工具 [imewlconverter](https://github.com/studyzy/imewlconverter/releases)

### 字体

[花园明朝](https://github.com/max32002/max-hana)

## 参考



[rime定制指南 ](https://zhuanlan.zhihu.com/p/91129641)

[Rime Squirrel 鼠须管输入法配置详解](https://ssnhd.github.io/2022/01/06/rime/)

[Rime Squirrel 鼠须管输入法皮肤效果](https://ssnhd.github.io/2022/01/11/rime-skin/)

[搜狗词库转换方法（支持多家输入法）](https://ssnhd.github.io/2022/01/06/sogou-dict/)

[macOS安装配置RIME-鼠须管输入法](https://www.xiebruce.top/1235.html)
