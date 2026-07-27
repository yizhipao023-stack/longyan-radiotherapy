---
layout: default
title: 首页
---
<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">龙岩放疗百科 · Academic Edition V5</span>
      <h1>让患者看得懂，让医生愿意分享，让学术持续沉淀</h1>
      <p class="lead">福建省龙岩市精准放疗公益科普与学术交流平台，面向患者、家属与医务人员，系统介绍放疗技术、设备、疾病知识和临床研究。</p>
      <div class="actions">
        <a class="button primary" href="{{ '/articles/gamma-knife-guide/' | relative_url }}">了解第五代伽玛刀</a>
        <a class="button secondary" href="{{ '/about/' | relative_url }}">认识主编</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="metric"><strong>V5</strong><span>学术版网站架构</span></div>
      <div class="metric"><strong>双轨</strong><span>患者科普 + 专业学术</span></div>
      <div class="metric"><strong>持续</strong><span>文章、病例与科研成果更新</span></div>
    </div>
  </div>
</section>

<section class="section container">
  <div class="section-heading"><div><span class="eyebrow">快速入口</span><h2>从疾病、技术与患者问题开始</h2></div></div>
  <div class="disease-grid">
    <a class="disease-card" href="{{ '/articles/lung-cancer/' | relative_url }}"><span>🫁</span>肺癌</a>
    <a class="disease-card" href="{{ '/articles/brain-metastasis-radiotherapy/' | relative_url }}"><span>🧠</span>脑转移瘤</a>
    <a class="disease-card" href="#"><span>🦴</span>骨转移</a>
    <a class="disease-card" href="{{ '/articles/gamma-knife-guide/' | relative_url }}"><span>🎯</span>第五代伽玛刀</a>
    <a class="disease-card" href="#"><span>📡</span>SBRT / SRS</a>
    <a class="disease-card" href="{{ '/patient-guide/' | relative_url }}"><span>🧾</span>患者指南</a>
  </div>
</section>

<section class="section-soft">
  <div class="container">
    <div class="section-heading"><div><span class="eyebrow">今日更新</span><h2>持续更新的放疗知识库</h2></div><p>所有页面逐步补充作者、审核、更新时间、参考文献与医学免责声明。</p></div>
    <div class="card-grid">
      <a class="topic-card" href="{{ '/articles/gamma-knife-guide/' | relative_url }}"><div class="topic-icon">🎯</div><h3>第五代伽玛刀</h3><p>统一使用“伽玛刀”术语，介绍陀螺刀原理、适应证与临床特点。</p></a>
      <a class="topic-card" href="{{ '/research/' | relative_url }}"><div class="topic-icon">📚</div><h3>科研成果</h3><p>逐步归档论文、病例、会议汇报及剂量学研究。</p></a>
      <a class="topic-card" href="{{ '/ai-center/' | relative_url }}"><div class="topic-icon">🤖</div><h3>AI 科研中心</h3><p>展示 AI 辅助文献、统计、写作与网页开发实践。</p></a>
    </div>
  </div>
</section>

<section class="section container">
  <div class="section-heading"><div><span class="eyebrow">站内搜索</span><h2>搜索本站文章</h2></div></div>
  <div class="search-box"><input data-search placeholder="搜索：脑转移瘤、第五代伽玛刀、SBRT"></div>
  <div class="article-list" style="margin-top:18px">
    {% for post in site.posts %}
    <a class="article-item" data-search-item href="{{ post.url | relative_url }}"><div><span class="tag">{{ post.category | default: '放疗百科' }}</span><h3>{{ post.title }}</h3><p>{{ post.description | default: post.excerpt | strip_html | truncate: 70 }}</p></div><span class="arrow">→</span></a>
    {% endfor %}
  </div>
</section>
