---
layout: page
title: 全部文章
index_label: "3.0"
permalink: /archive/
---

{% for post in site.posts %}
<div class="arc-row">
  <span class="arc-date">{{ post.date | date: "%Y.%m.%d" }}</span>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
</div>
{% endfor %}
