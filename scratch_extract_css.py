with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\scratch\header_inspect.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# Find top level elements inside <header>
print("Header opening:", html[:300])

# Find the main bar container
main_bar_match = re.search(r'<div class="header-main[^"]*"[^>]*>(.*?)</div>\s*<div class="header-panel', html, re.DOTALL)
if main_bar_match:
    print("Main bar length:", len(main_bar_match.group(0)))
    with open('scratch_mainbar.html', 'w', encoding='utf-8') as f_out:
        f_out.write(main_bar_match.group(0))

# Find the dropdown / header-panel structure
panel_match = re.search(r'<div class="header-panel[^"]*"[^>]*>.*', html, re.DOTALL)
if panel_match:
    print("Panel length:", len(panel_match.group(0)))
    with open('scratch_panel.html', 'w', encoding='utf-8') as f_out:
        f_out.write(panel_match.group(0)[:5000])

# Search for CSS styles related to header in content.md
with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\.system_generated\steps\939\content.md', 'r', encoding='utf-8') as f:
    full_content = f.read()

css_header = re.findall(r'(\.header[^{]*\{[^}]+\})', full_content)
print("\nCSS rules with .header (first 10):")
for r in css_header[:10]:
    print(r)
