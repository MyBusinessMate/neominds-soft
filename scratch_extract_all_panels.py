with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\scratch\header_inspect.html', 'r', encoding='utf-8') as f:
    full = f.read()

import re

# Extract data-panel-item="0", "1", "2"
for item_id in ["0", "1", "2"]:
    match = re.search(r'(<li class="header-panel__main[^"]*"[^>]*data-panel-item="' + item_id + r'".*?)(?=<li class="header-panel__main|$)', full, re.DOTALL)
    if match:
        content = match.group(1)
        with open(f'scratch_panel_{item_id}.html', 'w', encoding='utf-8') as f_out:
            f_out.write(content)
        print(f"\n=================== PANEL {item_id} ===================")
        # Find all link texts and headings
        titles = re.findall(r'<a[^>]*>([^<]+)</a>', content)
        print("Links:", [t.strip() for t in titles if t.strip()])
        # Find quotes/testimonials
        quotes = re.findall(r'<blockquote[^>]*>(.*?)</blockquote>', content, re.DOTALL)
        if quotes:
            print("Quote found!")
            q_text = re.sub(r'<[^>]+>', ' ', quotes[0])
            print("Quote text:", ' '.join(q_text.split())[:300])
        else:
            # check for quote text or testimonial
            if 'Canopy' in content or 'COBIT' in content or 'Hobbs' in content:
                print("Canopy/COBIT found in content!")
