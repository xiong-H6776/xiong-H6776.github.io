---
title: "如何在这里写一篇新的学习笔记"
description: "博客内容的更新方式、文章结构与本地预览流程。"
date: 2026-08-25
categories: ["博客说明"]
tags: ["Markdown", "写作", "Hugo"]
draft: false
---

这篇文章是博客的使用说明，也可以作为以后新笔记的格式参考。博客文章都存放在 `content/zh/blog/` 目录中，使用 Markdown 编写。

## 新建文章

复制同目录下任意一篇文章，或使用 Hugo 命令创建：

```bash
hugo new blog/my-new-note.md
```

文件开头的元信息建议至少包含：

```yaml
---
title: "文章标题"
description: "用一句话说明这篇笔记解决什么问题。"
date: 2026-08-25
categories: ["机器学习"]
tags: ["Python", "回归"]
draft: false
---
```

## 推荐的笔记结构

一篇便于自己复习、也便于他人阅读的笔记，可以按下面的顺序组织：

1. 先写清问题与使用场景；
2. 再说明核心概念和必要假设；
3. 给出推导、代码或实验过程；
4. 最后记录结论、局限与待验证的问题。

## 本地预览

在 `AcademicHomepage` 目录运行：

```bash
hugo server -D
```

浏览器打开终端提示的本地地址。确认文章、目录和代码块显示正常后，再进行正式构建。

> 提示：把尚未写完的文章设置为 `draft: true`，它就不会出现在正式发布的网站中。
