from PIL import Image
import os
import shutil

src = os.path.join(os.path.dirname(__file__), '..', 'public', 'apple-icon.png')
backup = src + '.bak.png'

print('Source:', src)
if not os.path.exists(src):
    raise SystemExit('Source image not found: ' + src)

# make a backup by copying the file
if not os.path.exists(backup):
    shutil.copy2(src, backup)

img = Image.open(src).convert('RGBA')
px = img.load()
width, height = img.size

# simple dark-background removal: make very dark pixels transparent
threshold = 60

for y in range(height):
    for x in range(width):
        r, g, b, a = px[x, y]
        if r < threshold and g < threshold and b < threshold:
            px[x, y] = (255, 255, 255, 0)

img.save(src)
print('Saved transparent image and backup at', backup)
