---
title: dfr first
layout: command
version: 0.63.0
usage: |
  Creates new dataframe with first rows or creates a first expression
---

# `{{ $frontmatter.title }}`

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> dfr first (rows)```

## Parameters

 -  `rows`: Number of rows for head

## Examples

Create new dataframe with head rows
```shell
> [[a b]; [1 2] [3 4]] | dfr to-df | dfr first 1
```

Creates a first expression from a column
```shell
> dfr col a | dfr first
```