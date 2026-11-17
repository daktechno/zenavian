# Missing image assets

Two images used by the original HTML could not be retrieved. The egress proxy of the build environment
denies the host `lh3.googleusercontent.com` (HTTP 403 on CONNECT), and neither the supplied zip
(`code.html`, `DESIGN.md`, `screen.png`) nor the uploaded images contain them. No replacement was generated
or substituted.

| Asset | Used in | Expected local path | Original source |
|---|---|---|---|
| Dr. P. Sharma portrait | `src/sections/About.jsx` (advisor card) | `public/images/team/dr-sharma.webp` | `src/data/siteImages.json` → `sharma.remote` |
| Hyderabad contact map (static background) | `src/sections/Contact.jsx` | `public/images/contact/hyderabad-map.webp` | `src/data/siteImages.json` → `map.remote` |

## Current behaviour
The site requests the original remote URL. If it cannot be loaded, a neutral fallback is shown
(initials badge "PS" for the portrait; a text card with a Google Maps prompt for the map). No broken-image icon appears.

## How to bundle them
1. Open the two `remote` URLs in a browser and save the images (WebP/JPG/PNG).
2. Put them at the expected local paths above.
3. In `src/data/siteImages.json` set `"local": "/images/team/dr-sharma.webp"` (and the map equivalent).
   `local` takes priority over `remote`; no code changes needed.

# Catalogue PDF
`public/documents/catalogue.pdf` does not exist. The Catalogue section detects this at runtime (HEAD request + `application/pdf`
content-type check) and shows an honest "not yet available" state. Add the PDF and the button becomes a real download.
