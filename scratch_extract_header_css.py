with open(r'C:\Users\iyand\.gemini\antigravity-ide\brain\92b7f9c5-ba5d-4a18-bf04-dee925eb6fc6\.system_generated\steps\939\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

import re

pos = text.find('.header-panel{width:100%')
if pos != -1:
    print("Found .header-panel full rule:")
    print(text[pos:pos+1500])

pos2 = text.find('.header-main{left:50%')
if pos2 != -1:
    print("\nFound .header-main full rule:")
    print(text[pos2:pos2+1500])
