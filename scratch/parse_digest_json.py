import json
from bs4 import BeautifulSoup
import re

html_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMT2\scratch\digest.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

actual_headers = [
    "Water Infrastructure / Workforce Development",
    "Agriculture / Food Systems and Food Defense",
    "Agriculture / Risk Management Education",
    "Transportation / Digital Construction Management",
    "Manufacturing / Industrial Base and Supply Chain",
    "Federal Research", 
    "DOE National Laboratory", 
    "Federal Contract Opportunities",
    "California State Opportunities",
    "Other State Opportunities",
    "Policy Watch"
]

data = []

# Find all categories based on headers
current_category = "Overview"
current_grants = []
current_grant = {}

# Iterate over all tags
for element in soup.find_all(['p', 'table']):
    text = element.get_text(separator=' ', strip=True)
    
    if element.name == 'p' and element.find('strong'):
        title = text
        is_category = False
        for h in actual_headers:
            if title.startswith(h) and len(title) < 150:
                is_category = True
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
        
        if is_category:
            if current_grant:
                current_grants.append(current_grant)
                current_grant = {}
            if current_grants or current_category == "Overview":
                data.append({"category": current_category, "grants": current_grants})
            current_category = cat_name
            current_grants = []
            continue

    if element.name == 'table':
        # This is a grant table or the opening summary table
        if current_category == "Overview" and "OPENING SUMMARY" in text:
            # We skip parsing opening summary into structured grant data, just store as raw html
            continue
        
        # Parse the table into a dict
        for row in element.find_all('tr'):
            cols = row.find_all(['td', 'th'])
            if len(cols) == 2:
                key = cols[0].get_text(strip=True).replace(':', '')
                val = cols[1].get_text(separator=' ', strip=True)
                # Some tables have "Opportunity #" as the start of a new grant
                if key == "Opportunity #":
                    if current_grant:
                        current_grants.append(current_grant)
                    current_grant = {"Opportunity #": val}
                else:
                    current_grant[key] = val
            elif len(cols) == 1:
                # Sometimes there's a single column row with description
                desc = cols[0].get_text(separator=' ', strip=True)
                if 'Description' in current_grant:
                    current_grant['Description'] += '\n' + desc
                else:
                    current_grant['Description'] = desc

if current_grant:
    current_grants.append(current_grant)
if current_grants or current_category == "Overview":
    data.append({"category": current_category, "grants": current_grants})

out_path = r'C:\Users\lokha\OneDrive\Desktop\grant management\GMT2\src\data\newsletters\aug-17-21-2026.json'
import os
os.makedirs(os.path.dirname(out_path), exist_ok=True)
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print(f"Generated JSON for {len(data)} categories.")
for d in data:
    print(f"{d['category']}: {len(d['grants'])} grants")
