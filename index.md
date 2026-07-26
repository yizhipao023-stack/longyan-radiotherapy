---
layout: default
title: 首页
description: 龙岩地区放疗设备、第五代伽马刀、直线加速器及精准放疗技术科普。
---
<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">区域放疗知识平台</span>
      <h1>看懂放疗设备，理解治疗选择</h1>
      <p class="lead">面向患者、家属和基层医务人员，介绍龙岩地区放疗资源、精准放疗技术及常见肿瘤放疗知识。</p>
      <div class="actions">
        <a class="button primary" href="{{ '/articles/longyan-radiotherapy-equipment/' | relative_url }}">查看龙岩放疗设备</a>
        <a class="button secondary" href="{{ '/about/' | relative_url }}">了解本站</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="metric"><strong>4</strong><span>家机构配置医用直线加速器</span></div>
      <div class="metric"><strong>1</strong><span>家机构配置第五代伽马刀（陀螺刀）</span></div>
      <p class="fineprint">设备信息以公开资料及机构实际运行情况为准，后续将持续核实更新。</p>
    </div>
  </div>
</section>

<section class="section container">
  <div class="section-heading"><span class="eyebrow">重点栏目</span><h2>从设备到疾病，按问题查找</h2></div>
  <div class="card-grid">
    <a class="topic-card" href="{{ '/articles/longyan-radiotherapy-equipment/' | relative_url }}"><span>01</span><h3>龙岩放疗设备</h3><p>直线加速器与第五代伽马刀的区域配置概况。</p></a>
    <a class="topic-card" href="{{ '/articles/gamma-knife-guide/' | relative_url }}"><span>02</span><h3>第五代伽马刀</h3><p>适用范围、治疗特点及与直线加速器的区别。</p></a>
    <a class="topic-card" href="{{ '/articles/brain-metastasis-radiotherapy/' | relative_url }}"><span>03</span><h3>脑转移放疗</h3><p>SRS、SRT、全脑放疗如何根据病情选择。</p></a>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-heading"><span class="eyebrow">最新文章</span><h2>持续更新的放疗科普</h2></div>
    <div class="article-list">
      {% for post in site.posts limit:6 %}
      <a class="article-item" href="{{ post.url | relative_url }}">
        <div><span class="tag">{{ post.category | default: '放疗科普' }}</span><h3>{{ post.title }}</h3><p>{{ post.description }}</p></div>
        <span class="arrow">→</span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
