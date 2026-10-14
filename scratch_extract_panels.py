with open('scratch_panel.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
divs = re.findall(r'<div class="([^"]+)"', text)
print("Unique classes in panel:")
print(sorted(list(set(divs)))[:40])

# Look for 'Who we are' in header_inspect.html
with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\scratch\header_inspect.html', 'r', encoding='utf-8') as f:
    full = f.read()

pos = full.find('Who we are')
while pos != -1:
    print(f"\n--- Found 'Who we are' at {pos} ---")
    print(full[max(0, pos-200):min(len(full), pos+600)])
    pos = full.find('Who we are', pos+1)
