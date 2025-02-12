---
title: g
version: 0.67.0
usage: |
  Switch to a given shell, or list all shells if no given shell number.
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> g (shell_number)```

## Parameters

 -  `shell_number`: shell number to change to

## Examples

Lists all open shells
```shell
> g
```

Make two directories and enter new shells for them, use `g` to jump to the specific shell
```shell
> mkdir foo bar; enter foo; enter ../bar; g 1
```

Use `shells` to show all the opened shells and run `g 2` to jump to the third one
```shell
> shells; g 2
```

Make two directories and enter new shells for them, use `g -` to jump to the last used shell
```shell
> mkdir foo bar; enter foo; enter ../bar; g -
```
