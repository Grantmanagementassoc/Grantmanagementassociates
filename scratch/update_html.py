import re

with open('public/digests/weekly-funding-digest-aug-17-21-2026.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('scratch/digest.html', 'r', encoding='utf-8') as f:
    digest_html = f.read()

tabs_html = '<div class="tabs" role="tablist">\n    <button class="tab-btn active" role="tab" aria-selected="true" data-tab="full-digest"><span class="dot"></span>Full Digest</button>'
html = html.replace('<div class="tabs" role="tablist">', tabs_html)

html = html.replace('<button class="tab-btn active" role="tab" aria-selected="true" data-tab="water">', '<button class="tab-btn" role="tab" aria-selected="false" data-tab="water">')
html = html.replace('<div class="panel active" id="panel-water">', '<div class="panel" id="panel-water">')

new_panel = f'''  <!-- ================= FULL DIGEST ================= -->
  <div class="panel active" id="panel-full-digest">
    <div class="panel-head">
      <h3>Weekly Funding Digest</h3>
      <span class="handoff">August 17–21, 2026</span>
    </div>
    <div style="margin-top:20px; font-size:14px; color:var(--ink); line-height: 1.6;">
      {digest_html}
    </div>
  </div>
'''

html = html.replace('<!-- ================= WATER ================= -->', new_panel + '<!-- ================= WATER ================= -->', 1)

with open('public/digests/weekly-funding-digest-aug-17-21-2026.html', 'w', encoding='utf-8') as f:
    f.write(html)
