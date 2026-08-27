---
title: "How to Write a New Study Note Here"
description: "How blog content is updated, how posts are structured, and how to preview them locally."
date: 2026-08-25
categories: ["Blog Guide"]
tags: ["Markdown", "Writing", "Hugo"]
draft: false
---

This post explains how the blog is maintained and can also serve as a template for future notes. Blog posts are stored in `content/en/blog/` and written in Markdown.

## Create a New Post

Copy any post in the same directory, or create one with Hugo:

```bash
hugo new blog/my-new-note.md
```

The front matter should contain at least:

```yaml
---
title: "Post Title"
description: "One sentence explaining the problem addressed by this note."
date: 2026-08-25
categories: ["Machine Learning"]
tags: ["Python", "Regression"]
draft: false
---
```

## Recommended Structure

A note that is useful both for review and for other readers can follow this sequence:

1. Define the problem and its intended use;
2. Explain the core concepts and necessary assumptions;
3. Present the derivation, code, or experimental process;
4. Record the conclusions, limitations, and open questions.

## Local Preview

Run the following command from the `AcademicHomepage` directory:

```bash
hugo server -D
```

Open the local address shown in the terminal. Check that the article, table of contents, and code blocks render correctly before producing a release build.

> Tip: Set an unfinished post to `draft: true` so it does not appear in the published site.
