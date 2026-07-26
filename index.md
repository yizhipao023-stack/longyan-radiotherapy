---
layout: default
title: 龙岩放疗百科
description: 龙岩地区放疗设备、伽马刀、直线加速器及精准放疗知识科普。
---

<section class="hero">
  <p class="eyebrow">区域医学科普</p>
  <h1>龙岩放疗百科</h1>
  <p>介绍龙岩地区放疗设备、精准放射治疗技术及常见肿瘤放疗知识。内容坚持客观、中立、可核实。</p>
</section>

## 最新文章

<div class="cards">
{% for post in site.posts %}
  <article class="card">
    <p class="card-date">{{ post.date | date: "%Y-%m-%d" }}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.description }}</p>
    <a class="read-more" href="{{ post.url | relative_url }}">阅读全文 →</a>
  </article>
{% endfor %}
</div>

## 主要栏目

- 放疗设备：直线加速器、第五代伽马刀（陀螺刀）
- 放疗技术：IMRT、VMAT、SRS、SRT、SBRT
- 常见肿瘤：肺癌、脑转移、食管癌、乳腺癌、皮肤肿瘤
- 放疗问答：治疗流程、副作用、复查与随访
