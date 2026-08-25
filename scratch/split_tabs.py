import re
import os

template_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMA_vertical_send_playbook_v3 (2) (1).html'
with open(template_path, 'r', encoding='utf-8') as f:
    template_html = f.read()

digest_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMT2\scratch\digest.html'
with open(digest_path, 'r', encoding='utf-8') as f:
    digest_html = f.read()

parts = re.split(r'<p><strong>(.*?)</strong></p>', digest_html)

categories = []
current_cat = "Overview"
current_content = parts[0]

valid_categories = [
    "OPENING SUMMARY  WEEK OF AUGUST 1721, 2026",
    "OPENING SUMMARY  WEEK OF AUGUST 1721, 2026",
    "Water Infrastructure / Workforce",
    "Agriculture / Food Defense",
    "Transportation / Digital Construction",
    "Federal Research / NSF",
    "DOE / Water Innovation",
    "Manufacturing / Industrial Base",
    "Federal Contract Opportunities (BAAs and Post-Phase II)",
    "California State Opportunities",
    "Other State Opportunities",
    "Policy Updates",
    "Immediate Outreach",
    "Water Infrastructure / Workforce Development",
    "GMA Weekly Funding Digest"
]

clean_valid = [re.sub(r'[^A-Za-z0-9]', '', c).lower() for c in valid_categories]

for i in range(1, len(parts), 2):
    title = parts[i].strip()
    content = parts[i+1]
    
    clean_title = re.sub(r'[^A-Za-z0-9]', '', title).lower()
    
    if clean_title in clean_valid:
        if current_content.strip():
            categories.append({"title": current_cat, "content": current_content})
        current_cat = title
        current_content = content
    else:
        current_content += f"<p><strong>{title}</strong></p>{content}"

if current_content.strip():
    categories.append({"title": current_cat, "content": current_content})

filtered_categories = []
for c in categories:
    title = c['title']
    if "Overview" in title or "OPENING SUMMARY" in title or "GMA Weekly" in title:
        title = "Overview"
    if "Water Infrastructure" in title:
        title = "Water Infrastructure"
    
    existing = next((x for x in filtered_categories if x['title'] == title), None)
    if existing:
        existing['content'] += c['content']
    else:
        filtered_categories.append({"title": title, "content": c['content']})

tabs_html = '<div class="tabs" role="tablist" style="flex-wrap: wrap;">\n'
for idx, cat in enumerate(filtered_categories):
    title = cat['title']
    tab_id = title.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
    tab_id = re.sub(r'-+', '-', tab_id)
    
    active = ' active' if idx == 0 else ''
    aria = 'true' if idx == 0 else 'false'
    tabs_html += f'    <button class="tab-btn{active}" role="tab" aria-selected="{aria}" data-tab="{tab_id}" style="margin-bottom: 8px;"><span class="dot"></span>{title}</button>\n'
tabs_html += '  </div>'

panels_html = '<div class="panels-container">\n'
for idx, cat in enumerate(filtered_categories):
    title = cat['title']
    tab_id = title.lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
    tab_id = re.sub(r'-+', '-', tab_id)
    active = ' active' if idx == 0 else ''
    
    panels_html += f'''
  <!-- ================= {title.upper()} ================= -->
  <div class="panel{active}" id="panel-{tab_id}">
    <div class="panel-head">
      <h3>{title}</h3>
      <span class="handoff">August 17–21, 2026</span>
    </div>
    <div style="margin-top:20px; font-size:14px; color:var(--ink); line-height: 1.6;">
      {cat['content']}
    </div>
  </div>
'''
panels_html += '</div>\n'

match = re.search(r'<div class="tabs" role="tablist">.*?(?=<script>)', template_html, re.DOTALL)
if match:
    new_html = template_html[:match.start()] + tabs_html + "\n" + panels_html + "\n" + template_html[match.end():]
else:
    print("Could not find tabs section in template to replace!")
    exit(1)

out_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMT2\public\digests\weekly-funding-digest-aug-17-21-2026.html'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"Successfully generated {len(filtered_categories)} tabs.")
for c in filtered_categories:
    print(" - " + c['title'])
