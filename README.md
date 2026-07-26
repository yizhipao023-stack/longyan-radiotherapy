# 龙岩放疗百科：使用说明

## 一、第一次上传

把本压缩包解压后，将里面的全部文件和文件夹上传到 GitHub 仓库 `longyan-radiotherapy` 的根目录。

仓库根目录应直接看到：

- `_config.yml`
- `index.md`
- `about.md`
- `_layouts`
- `_posts`
- `assets`

不要再把它们套在一个额外的文件夹里面。

GitHub Pages 设置保持：

- Source：Deploy from a branch
- Branch：main
- Folder：/(root)
- Custom domain：留空

网站地址：

https://yizhipao023-stack.github.io/longyan-radiotherapy/

## 二、以后怎样添加文章

进入 `_posts` 文件夹，点击 **Add file → Create new file**。

文件名必须使用：

`年-月-日-英文短标题.md`

例如：

`2026-08-01-what-is-gamma-knife.md`

文章开头复制：

```yaml
---
title: 什么是第五代伽马刀？
updated: 2026年8月
description: 用通俗语言介绍第五代伽马刀的基本原理、常见适应证和注意事项。
keywords: 第五代伽马刀, 陀螺刀, 立体定向放疗
---
```

横线下面直接写正文：

```markdown
## 基本原理

这里写正文。

## 常见适应证

这里写正文。
```

完成后选择 **Commit directly to the main branch**，再点击 **Commit changes**。通常数分钟后网站会自动更新。

## 三、修改已有文章

进入 `_posts`，点击文章文件，再点击铅笔图标。修改后提交到 `main` 分支即可。
