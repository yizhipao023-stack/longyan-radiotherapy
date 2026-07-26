# 龙岩放疗百科｜上传说明

## 第一次上传（推荐做法）

1. 在仓库 Code 页面，删除旧的 `index.html`、根目录的 `default.html`、`post.html`、`style.css`。
2. 将本压缩包解压。
3. 上传解压后的全部文件和文件夹到仓库根目录。
4. 保持 Pages 设置：Deploy from a branch → main → /(root)。
5. 等待 Actions 中 `pages build and deployment` 完成。

## 正确的目录结构

- `_layouts/default.html`
- `_layouts/post.html`
- `_posts/*.md`
- `assets/css/style.css`
- `assets/js/site.js`
- `_config.yml`
- `index.md`

## 新增文章

在 `_posts` 中新建文件，例如：

`2026-08-01-lung-cancer-sbrt.md`

开头写：

```yaml
---
layout: post
title: 肺癌SBRT是什么？
slug: lung-cancer-sbrt
category: 肺癌放疗
description: 一句话概括文章内容。
---
```

下面直接写正文即可。
