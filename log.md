---
title: log
layout: page
---

<h2>progress log</h2>
<p class="desc">A record of my daily/weekly/once in a blue moon progress.</p>

<hr>

{% for post in site.posts %}
{% capture current_year %}{{ post.date | date: "%Y" }}{% endcapture %}
{% if current_year != previous_year %}
{% unless forloop.first %}

</ul>
<hr>
{% endunless %}
<h3>{{ current_year }}</h3>
<ul>
{% assign previous_year = current_year %}
{% endif %}

  <li><a class="post-link" href="{{ post.url }}">{{ post.title }}</a> ・ <span class="post-desc">{{ post.desc }}</span></li>

{% if forloop.last %}

</ul>
{% endif %}
{% endfor %}
