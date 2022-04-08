(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{937:function(e,t,s){"use strict";s.r(t);var a=s(35),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"working-with-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#working-with-strings"}},[e._v("#")]),e._v(" Working with strings")]),e._v(" "),s("p",[e._v("Strings in Nushell help to hold text data for later use. This can include file names, file paths, names of columns,\nand much more. Strings are so common that Nushell offers a couple ways to work with them, letting you pick what best\nmatches your needs.")]),e._v(" "),s("h2",{attrs:{id:"single-quoted-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-quoted-string"}},[e._v("#")]),e._v(" Single-quoted string")]),e._v(" "),s("p",[e._v("The simplest string in Nushell is the single-quoted string. This string uses the "),s("code",[e._v("'")]),e._v(" character to surround some text. Here's the text for hello world as a single-quoted string:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> 'hello world'\nhello world\n")])])]),s("p",[e._v("Single-quoted strings don't do anything to the text they're given, making them ideal for holding a wide range of text data.")]),e._v(" "),s("h2",{attrs:{id:"double-quoted-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#double-quoted-strings"}},[e._v("#")]),e._v(" Double-quoted strings")]),e._v(" "),s("p",[e._v("For more complex strings, Nushell also offers double-quoted strings. These strings use the "),s("code",[e._v('"')]),e._v(" character to surround text. They also support the ability escape characters inside the text using the "),s("code",[e._v("\\")]),e._v(" character.")]),e._v(" "),s("p",[e._v("For example, we could write the text hello followed by a new line and then world, using escape characters and a double-quoted string:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('> "hello\\nworld"\nhello\nworld\n')])])]),s("p",[e._v("Escape characters let you quickly add in a character that would otherwise be hard to type.")]),e._v(" "),s("p",[e._v("Nushell currently supports the following escape characters:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v('\\"')]),e._v(" - double-quote character")]),e._v(" "),s("li",[s("code",[e._v("\\'")]),e._v(" - single-quote character")]),e._v(" "),s("li",[s("code",[e._v("\\\\")]),e._v(" - backslash")]),e._v(" "),s("li",[s("code",[e._v("\\/")]),e._v(" - forward slash")]),e._v(" "),s("li",[s("code",[e._v("\\b")]),e._v(" - backspace")]),e._v(" "),s("li",[s("code",[e._v("\\f")]),e._v(" - formfeed")]),e._v(" "),s("li",[s("code",[e._v("\\r")]),e._v(" - carriage return")]),e._v(" "),s("li",[s("code",[e._v("\\n")]),e._v(" - newline (line feed)")]),e._v(" "),s("li",[s("code",[e._v("\\t")]),e._v(" - tab")]),e._v(" "),s("li",[s("code",[e._v("\\uXXXX")]),e._v(" - a unicode character (replace XXXX with the number of the unicode character)")])]),e._v(" "),s("h2",{attrs:{id:"string-interpolation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-interpolation"}},[e._v("#")]),e._v(" String interpolation")]),e._v(" "),s("p",[e._v("More complex string use cases also need a new form of string: string interpolation. This is a way of building text from both raw text and the result of running expressions. String interpolation combines the results together, giving you a new string.")]),e._v(" "),s("p",[e._v("String interpolation uses "),s("code",[e._v('$" "')]),e._v(" and "),s("code",[e._v("$' '")]),e._v(" as ways to wrap interpolated text.")]),e._v(" "),s("p",[e._v("For example, let's say we have a variable called "),s("code",[e._v("$name")]),e._v(" and we want to greet the name of the person contained in this variable:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('> let name = "Alice"\n> $"greetings, ($name)"\ngreetings, Alice\n')])])]),s("p",[e._v("By wrapping expressions in "),s("code",[e._v("()")]),e._v(", we can run them to completion and use the results to help build the string.")]),e._v(" "),s("p",[e._v("String interpolation has both a single-quoted, "),s("code",[e._v("$' '")]),e._v(", and a double-quoted, "),s("code",[e._v('$" "')]),e._v(", form. These correspond to the single-quoted and double-quoted strings: single-quoted string interpolation doesn't support escape characters while double-quoted string interpolation does.")]),e._v(" "),s("p",[e._v("As of version 0.61, interpolated strings support escaping parentheses, so that the "),s("code",[e._v("(")]),e._v(" and "),s("code",[e._v(")")]),e._v(" characters may be used in a string without Nushell trying to evaluate what appears between them:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('> $"2 + 2 is (2 + 2) \\(you guessed it!)"\n2 + 2 is 4 (you guessed it!)\n')])])]),s("h2",{attrs:{id:"splitting-strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitting-strings"}},[e._v("#")]),e._v(" Splitting strings")]),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/book/commands/split_row.html"}},[s("code",[e._v("split row")])]),e._v(" command creates a list from a string based on a delimiter.\nFor example, "),s("code",[e._v('let colors = ("red,green,blue" | split row ",")')]),e._v(" creates the list "),s("code",[e._v("[red green blue]")]),e._v(".")],1),e._v(" "),s("p",[e._v("The "),s("RouterLink",{attrs:{to:"/book/commands/split_column.html"}},[s("code",[e._v("split column")])]),e._v(" command will create a table from a string based on a delimiter. For example "),s("code",[e._v('let colors = ("red,green,blue" | split column ",")')]),e._v(" creates a table, giving only column to each element.")],1),e._v(" "),s("p",[e._v("Finally, the "),s("RouterLink",{attrs:{to:"/book/commands/split_chars.html"}},[s("code",[e._v("split chars")])]),e._v(" command will split a string into a list of characters.")],1),e._v(" "),s("h2",{attrs:{id:"the-str-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-str-command"}},[e._v("#")]),e._v(" The "),s("code",[e._v("str")]),e._v(" command")]),e._v(" "),s("p",[e._v("Many string functions are subcommands of the "),s("code",[e._v("str")]),e._v(" command. You can get a full list using "),s("code",[e._v("help str")]),e._v(".")]),e._v(" "),s("p",[e._v("For example, you can look if a string contains a particular character using "),s("code",[e._v("str contains")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('> "hello world" | str contains "w"\ntrue\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);