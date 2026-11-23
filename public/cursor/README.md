# Cursor images

Two PNGs with transparent backgrounds:

- `shell.png` — closed shell, the default cursor
- `shell-open.png` — open shell with pearl, shown over links and buttons

## Size matters more than you'd expect

Browsers silently ignore a cursor image that's too large and fall back to the
normal arrow. Chrome accepts up to 128×128; Safari and Firefox are stricter in
practice. **32×32 is the reliable size**, 48×48 is usually safe.

That's the real constraint on these: at 32px the pearl, the ridges and the
soft gradients in the source images mostly disappear. A cursor needs to read
as a silhouette, not an illustration.

## Exporting

From Figma or Preview, export each at 32×32 PNG with the background removed.
Check the silhouette at actual size before committing — if you can't tell the
two shells apart at 32px, the hover state does nothing.

## Hotspot

The two numbers in `global.css` (`7 5` and `9 6`) are the click point in
pixels from the image's top-left. Adjust if clicks feel offset from where the
cursor appears to point.
