with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\.system_generated\steps\939\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

import re
header = re.findall(r'<header.*?</header>', text, re.DOTALL | re.IGNORECASE)[0]

with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\scratch\header_inspect.html', 'w', encoding='utf-8') as f:
    f.write(header)

print("Header extracted! Total length:", len(header))

# Find nav links
nav_links = re.findall(r'<a [^>]*class="[^"]*nav[^"]*"[^>]*>.*?</a>', header, re.DOTALL)
print("Nav links found:", len(nav_links))

# Find buttons
buttons = re.findall(r'<button[^>]*>.*?</button>', header, re.DOTALL)
print("Buttons found:", len(buttons))

# Search for navigation links text
texts = re.findall(r'>([^<]+)<', header)
clean_texts = [t.strip() for t in texts if t.strip()]
print("Texts in header:", clean_texts[:50])
