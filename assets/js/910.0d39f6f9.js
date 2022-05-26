(window.webpackJsonp=window.webpackJsonp||[]).push([[910],{1427:function(t,a,s){"use strict";s.r(a);var e=s(35),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[t._v("#")]),t._v(" 环境")]),t._v(" "),s("p",[t._v("Shell 中的一个常见任务是控制外部应用程序将使用的环境变量。这通常是自动完成的，因为环境被打包，并在外部应用程序启动时提供给它。但有时，我们希望更精确地控制一个应用程序看到的环境变量。")]),t._v(" "),s("p",[t._v("你可以使用"),s("RouterLink",{attrs:{to:"/book/commands/env.html"}},[s("code",[t._v("env")])]),t._v("命令查看当前环境变量：")],1),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   #           name                 type                value                 raw\n──────────────────────────────────────────────────────────────────────────────────────────\n  16   DISPLAY              string               :0                   :0\n  17   EDITOR               string               nvim                 nvim\n  28   LANG                 string               en_US.UTF-8          en_US.UTF-8\n  35   PATH                 list<unknown>        [list 16 items]      /path1:/path2:/...\n  36   PROMPT_COMMAND       block                <Block 197>\n")])])]),s("p",[t._v("在 Nushell 中，环境变量可以是任何值，并且有任何类型（见"),s("code",[t._v("type")]),t._v("列）。\nNushell 中使用的环境变量的实际值在"),s("code",[t._v("value")]),t._v("列下。\n你可以直接使用"),s("code",[t._v("$env")]),t._v("变量查询该值，例如，"),s("code",[t._v("$env.PATH | length")]),t._v("。\n最后的"),s("code",[t._v("raw")]),t._v("列显示了将被发送到外部应用程序的实际值（详见 "),s("RouterLink",{attrs:{to:"/zh-CN/book/environment.html#环境变量转换"}},[t._v("环境变量转换")]),t._v(" ）。")],1),t._v(" "),s("p",[t._v("环境最初是由 Nu 的 "),s("RouterLink",{attrs:{to:"/zh-CN/book/configuration.html"}},[t._v("配置文件")]),t._v(" 和 Nu 的运行环境创建的。")],1),t._v(" "),s("h2",{attrs:{id:"设置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[t._v("#")]),t._v(" 设置环境变量")]),t._v(" "),s("p",[t._v("有几种方法可以设置环境变量：")]),t._v(" "),s("h3",{attrs:{id:"let-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#let-env"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/book/commands/let-env.html"}},[s("code",[t._v("let-env")])])],1),t._v(" "),s("p",[t._v("使用"),s("code",[t._v("let-env")]),t._v("命令是最直接的方法：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BAR'")]),t._v("\n")])])]),s("p",[s("code",[t._v("let-env")]),t._v(" 类似于 bash 中的 "),s("strong",[t._v("export")]),t._v(" 命令。")]),t._v(" "),s("p",[t._v("因此，如果你想扩展"),s("code",[t._v("PATH")]),t._v("变量，你可以这样做：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("let-env "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" prepend "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/path/you/want/to/add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在这里，我们把指定文件夹前置添加到"),s("code",[t._v("PATH")]),t._v("中的现有路径中，所以它将有最高的优先级。\n如果你想给它最低的优先级，你可以使用"),s("code",[t._v("append")]),t._v("命令。")]),t._v(" "),s("h3",{attrs:{id:"load-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load-env"}},[t._v("#")]),t._v(" "),s("RouterLink",{attrs:{to:"/book/commands/load-env.html"}},[s("code",[t._v("load-env")])])],1),t._v(" "),s("p",[t._v("如果你有一个以上的环境变量需要设置，你可以使用"),s("code",[t._v("load-env")]),t._v("并创建一个键/值对记录(Record)，以用于加载多个环境变量：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" load-env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BOB"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JAY"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BAR"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"一次性环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一次性环境变量"}},[t._v("#")]),t._v(" 一次性环境变量")]),t._v(" "),s("p",[t._v("这些变量被定义为只在执行代码块的过程中临时有效。\n详情请看 "),s("RouterLink",{attrs:{to:"/zh-CN/book/environment.html#一次性环境变量"}},[t._v("一次性环境变量")]),t._v(" 。")],1),t._v(" "),s("h3",{attrs:{id:"调用def-env定义的命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用def-env定义的命令"}},[t._v("#")]),t._v(" 调用"),s("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[s("code",[t._v("def-env")])]),t._v("定义的命令")],1),t._v(" "),s("p",[t._v("详情见 "),s("RouterLink",{attrs:{to:"/zh-CN/book/environment.html#从自定义命令中定义环境变量"}},[t._v("从自定义命令中定义环境")]),t._v("。")],1),t._v(" "),s("h3",{attrs:{id:"使用模块导出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模块导出"}},[t._v("#")]),t._v(" 使用模块导出")]),t._v(" "),s("p",[t._v("参见 "),s("RouterLink",{attrs:{to:"/zh-CN/book/modules.html#环境变量"}},[t._v("模块")]),t._v(" 部分了解更多详情。")],1),t._v(" "),s("h2",{attrs:{id:"作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),s("p",[t._v("当你设置环境变量时，它将只在当前作用域内可用（变量所在的块和它里面的任何块）。")]),t._v(" "),s("p",[t._v("这里有一个小例子来演示环境变量作用域：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BAR"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BAZ"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BAZ"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BAR"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),s("h2",{attrs:{id:"目录切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录切换"}},[t._v("#")]),t._v(" 目录切换")]),t._v(" "),s("p",[t._v("Shell 中常见的任务是用"),s("RouterLink",{attrs:{to:"/book/commands/cd.html"}},[s("code",[t._v("cd")])]),t._v("命令来改变目录。\n在 Nushell 中，调用"),s("code",[t._v("cd")]),t._v("等同于设置"),s("code",[t._v("PWD")]),t._v("环境变量。\n因此，它遵循与其他环境变量相同的规则（例如，作用域）。")],1),t._v(" "),s("h2",{attrs:{id:"一次性环境变量-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一次性环境变量-2"}},[t._v("#")]),t._v(" 一次性环境变量")]),t._v(" "),s("p",[t._v("在 Bash 和其他软件的启发下，有一个常用的简便方法，可以设置一次性环境变量：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FOO")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("BAR "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO\nBAR\n")])])]),s("p",[t._v("你也可以使用"),s("RouterLink",{attrs:{to:"/book/commands/with-env.html"}},[s("code",[t._v("with-env")])]),t._v("来更明确地做同样的事情：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" with-env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FOO: BAR "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nBAR\n")])])]),s("p",[s("RouterLink",{attrs:{to:"/book/commands/with-env.html"}},[s("code",[t._v("with-env")])]),t._v('命令将暂时把环境变量设置为给定的值（这里：变量 "FOO" 被赋为 "BAR" 值）。一旦这样做了，'),s("RouterLink",{attrs:{to:"/zh-CN/book/types_of_data.html#块"}},[t._v("块")]),t._v(" 将在这个新的环境变量设置下运行。")],1),t._v(" "),s("h2",{attrs:{id:"永久性环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#永久性环境变量"}},[t._v("#")]),t._v(" 永久性环境变量")]),t._v(" "),s("p",[t._v("你也可以在启动时设置环境变量，使它们在 Nushell 运行期间都可用。\n要做到这一点，请在 "),s("RouterLink",{attrs:{to:"/zh-CN/book/configuration.html"}},[t._v("Nu 配置文件")]),t._v(" 中设置一个环境变量。\n比如：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# In config.nu")]),t._v("\nlet-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BAR'")]),t._v("\n")])])]),s("h2",{attrs:{id:"从自定义命令中定义环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从自定义命令中定义环境变量"}},[t._v("#")]),t._v(" 从自定义命令中定义环境变量")]),t._v(" "),s("p",[t._v("由于作用域规则，在自定义命令中定义的任何环境变量都只存在于该命令的作用域内。\n然而，用"),s("RouterLink",{attrs:{to:"/book/commands/def-env.html"}},[s("code",[t._v("def-env")])]),t._v("而不是"),s("RouterLink",{attrs:{to:"/book/commands/def.html"}},[s("code",[t._v("def")])]),t._v("定义的命令（它也适用于"),s("code",[t._v("export def")]),t._v("，见 "),s("RouterLink",{attrs:{to:"/zh-CN/book/modules.html"}},[t._v("模块")]),t._v("）将在调用者一方保留环境设置：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def-env foo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BAR'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO\nBAR\n")])])]),s("h2",{attrs:{id:"环境变量转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量转换"}},[t._v("#")]),t._v(" 环境变量转换")]),t._v(" "),s("p",[t._v("你可以通过设置"),s("code",[t._v("ENV_CONVERSIONS")]),t._v("环境变量，来在字符串和值之间转换其他环境变量。\n例如，"),s("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"}},[t._v("默认环境配置"),s("OutboundLink")],1),t._v("包括将"),s("code",[t._v("PATH")]),t._v("（和 Windows 上使用的"),s("code",[t._v("Path")]),t._v("）环境变量从一个字符串转换为一个列表。\n在 "),s("code",[t._v("env.nu")]),t._v(" 和 "),s("code",[t._v("config.nu")]),t._v(" 配置文件加载后，任何在"),s("code",[t._v("ENV_CONVERSIONS")]),t._v("内指定的现有环境变量将根据其"),s("code",[t._v("from_string")]),t._v("字段被转换为任何类型的值。\n外部工具要求环境变量是字符串，因此，任何非字符串的环境变量需要先进行转换：\n值->字符串的转换由"),s("code",[t._v("ENV_CONVERSIONS")]),t._v("的"),s("code",[t._v("to_string")]),t._v("字段设置，每次运行外部命令时都会进行转换。")]),t._v(" "),s("p",[t._v("让我们用一个例子来说明转换的情况。\n把以下内容放在你的"),s("code",[t._v("config.nu")]),t._v("中：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("let-env ENV_CONVERSIONS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ... you might have Path and PATH already there, add:")]),t._v("\n    FOO "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        from_string: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$s")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        to_string: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$v")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str collect "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在，在一个 Nushell 实例内执行：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" with-env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FOO "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-b-c'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nu "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# runs Nushell with FOO env. var. set to 'a-b-c'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   a\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   b\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("   c\n")])])]),s("p",[t._v("你可以看到"),s("code",[t._v("$env.FOO")]),t._v("现在是一个新的 Nushell 实例中的列表，配置已经更新。\n你也可以通过以下方式手动测试转换：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".ENV_CONVERSIONS.FOO.from_string "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-b-c'")]),t._v("\n")])])]),s("p",[t._v("现在，为了测试列表->字符串的转换，运行：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" nu -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$env.FOO'")]),t._v("\na-b-c\n")])])]),s("p",[t._v("因为"),s("code",[t._v("nu")]),t._v("是一个外部程序，Nushell 根据"),s("code",[t._v("ENV_CONVERSIONS.FOO.to_string")]),t._v("翻译了 "),s("code",[t._v("[ a b c ]")]),t._v(" 列表，并把它传递给"),s("code",[t._v("nu")]),t._v("进程。\n用"),s("code",[t._v("nu -c")]),t._v("运行命令不会加载配置文件，因此"),s("code",[t._v("FOO")]),t._v("的环境转换没有了，它被显示为一个普通的字符串 —— 这样我们可以验证转换是否成功。\n你也可以通过"),s("code",[t._v("do $env.ENV_CONVERSIONS.FOO.to_string [a b c]")]),t._v("手动运行这个步骤。")]),t._v(" "),s("p",[t._v("如果我们回头看一下"),s("RouterLink",{attrs:{to:"/book/commands/env.html"}},[s("code",[t._v("env")])]),t._v("命令，"),s("code",[t._v("raw")]),t._v("列显示由"),s("code",[t._v("ENV_CONVERSIONS.<name>.to_string")]),t._v("翻译的值，"),s("code",[t._v("value")]),t._v("列显示 Nushell 中使用的值（在"),s("code",[t._v("FOO")]),t._v("的情况下是"),s("code",[t._v("ENV_CONVERSIONS.<name>.from_string")]),t._v("的结果）。\n如果这个值不是字符串，并且没有"),s("code",[t._v("to_string")]),t._v("的转换，它就不会被传递给外部（见"),s("code",[t._v("PROMPT_COMMAND")]),t._v("的"),s("code",[t._v("raw")]),t._v("列）。\n一个例外是"),s("code",[t._v("PATH")]),t._v("（Windows 上的"),s("code",[t._v("Path")]),t._v("）。默认情况下，它在启动时将字符串转换为列表，在运行外部程序时，如果没有指定手动转换，则从列表转换为字符串。")],1),t._v(" "),s("p",[s("em",[t._v("(重要! 环境转换字符串->值发生在 "),s("code",[t._v("env.nu")]),t._v(" 和 "),s("code",[t._v("config.nu")]),t._v(" 被运行"),s("strong",[t._v("之后")]),t._v("。"),s("code",[t._v("env.nu")]),t._v(" 和 "),s("code",[t._v("config.nu")]),t._v(" 中的所有环境变量仍然是字符串，除非你手动将它们设置为一些其他的值。)")])]),t._v(" "),s("h2",{attrs:{id:"删除环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除环境变量"}},[t._v("#")]),t._v(" 删除环境变量")]),t._v(" "),s("p",[t._v("只有当一个环境变量被设置在当前作用域中时，你才能通过 "),s("RouterLink",{attrs:{to:"/book/commands/hide.html"}},[s("code",[t._v("hide")])]),t._v(" 命令“删除”它：")],1),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BAR'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hide FOO\n")])])]),s("p",[t._v("隐藏也是有作用域的，这既允许你暂时删除一个环境变量，又可以防止你从子作用域内修改父环境：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" let-env FOO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BAR'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hide FOO\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $env.FOO does not exist")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$env")]),t._v(".FOO\nBAR\n")])])]),s("p",[t._v("关于隐藏的更多细节，请参考 "),s("RouterLink",{attrs:{to:"/zh-CN/book/modules.html#隐藏"}},[t._v("模块")])],1)])}),[],!1,null,null,null);a.default=n.exports}}]);