---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
# Tom Waits Tracker

<p>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#vis-beskrivelse" aria-expanded="false" aria-controls="vis-beskrivelse">
    Vis beskrivelse
  </button>
</p>
<div class="collapse pb-3" id="vis-beskrivelse">
  Dette er en enkel web app for å holde oversikt over hvilke barer man har vært innom på Tom Waits løpet.
  Ingen informasjon lagres utenom din enhet. Den er gratis å bruke. Del gjerne med andre.
</div>

<ul id="myUL" class="list-group">
{% for bar in site.data.bars %}
<li class="list-group-item" id="{{ bar.id }}">{{ bar.name }}</li>
{% endfor %}
</ul>

<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
