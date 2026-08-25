import re
import os

template_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMA_vertical_send_playbook_v3 (2) (1).html'
with open(template_path, 'r', encoding='utf-8') as f:
    template_html = f.read()

digest_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMT2\scratch\digest.html'
with open(digest_path, 'r', encoding='utf-8') as f:
    digest_html = f.read()

# We need to split only at the actual section headers.
# These are the headers that appear right before a table or a section.
actual_headers = [
    "Water Infrastructure / Workforce Development",
    "Agriculture / Food Systems and Food Defense",
    "Agriculture / Risk Management Education",
    "Transportation / Digital Construction Management",
    "Manufacturing / Industrial Base and Supply Chain",
    "Federal Research", # Matches "Federal Research  NSF Restructured Solicitation Suite"
    "DOE National Laboratory", # Matches "DOE National Laboratory  Water Innovation"
    "Federal Contract Opportunities", # Matches "Federal Contract Opportunities  Broad Agency Announcements and Post-Phase II"
    "California State Opportunities",
    "Other State Opportunities",
    "Policy Watch"
]

parts = re.split(r'<p><strong>(.*?)</strong></p>', digest_html)

categories = []
current_cat = "Overview"
current_content = parts[0]

for i in range(1, len(parts), 2):
    title = parts[i].strip()
    content = parts[i+1]
    
    # Check if the title starts with any of the actual headers
    is_category = False
    for h in actual_headers:
        if title.startswith(h) and len(title) < 150:
            is_category = True
            # Normalize the category name
            if "Agriculture" in title: cat_name = "Agriculture"
            elif "Transportation" in title: cat_name = "Transportation"
            elif "Manufacturing" in title: cat_name = "Manufacturing"
            elif "Federal Research" in title: cat_name = "Federal Research"
            elif "DOE" in title: cat_name = "DOE / Water Innovation"
            elif "Federal Contract" in title: cat_name = "Federal Contract Opportunities"
            elif "California" in title: cat_name = "California State Opportunities"
            elif "Other State" in title: cat_name = "Other State Opportunities"
            elif "Policy" in title: cat_name = "Policy Updates"
            elif "Water" in title: cat_name = "Water Infrastructure"
            else: cat_name = title
            break
            
    # Sub-headers like Biological Sciences, etc. should just be bold text inside the current category
    if is_category:
        if current_content.strip():
            categories.append({"title": current_cat, "content": current_content})
        current_cat = cat_name
        current_content = content
    else:
        current_content += f"<p><strong>{title}</strong></p>{content}"

if current_content.strip():
    categories.append({"title": current_cat, "content": current_content})

filtered_categories = []
for c in categories:
    title = c['title']
    
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
    <div style="margin-top:20px; font-size:14px; color:var(--ink); line-height: 1.6; overflow-x: auto;">
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
    print(f" - {c['title']}: {len(c['content'])} chars")
