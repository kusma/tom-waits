---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<ul id="myUL" class="list-group">
{% for bar in site.data.bars %}
<li class="list-group-item" id="{{ bar.id }}">{{ bar.name }}</li>
{% endfor %}
</ul>

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
