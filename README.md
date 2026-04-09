# Victor Escribano · Cinematic Travel Creator

Personal UGC / travel creator portfolio. Cinematic editorial dark aesthetic. Pure HTML + CSS + JS — no build step required.

## Deploy on GitHub Pages

1. Go to your repository **Settings** > **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save** — your site will be live at `https://victorescribano.github.io` within a few minutes

## Replace Placeholder Content

### Images

All images are placeholder `<div>` elements with descriptive text. To add your photos:

1. Add your images to the `assets/images/` folder
2. In `index.html`, find the placeholder elements (search for `<!-- REPLACE`) and replace the `<div>` with an `<img>` tag:

```html
<!-- Before -->
<div class="photo-cell tall">[Foto — Iceland]</div>

<!-- After -->
<div class="photo-cell tall">
  <img src="assets/images/iceland-01.jpg" alt="Iceland glacier" loading="lazy">
</div>
```

For the hero and about portrait, replace the placeholder `<div>` with a background-image or `<img>` tag.

### Videos

Find the `<!-- REPLACE: Add YouTube or Vimeo embed URL -->` comments and replace the `.video-frame` contents with an iframe:

```html
<div class="video-frame">
  <iframe
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy"
    style="width:100%; height:100%; position:absolute; top:0; left:0;">
  </iframe>
</div>
```

### Contact Info

Search for `placeholder` in `index.html` and replace:
- `victor.escribano@placeholder.com` with your real email
- `@victorescribanog` with your real Instagram handle
- Social media `href="#"` links with your actual profile URLs

## Custom Domain

1. In your repository, go to **Settings** > **Pages**
2. Under "Custom domain", enter your domain (e.g., `victorescribano.com`)
3. Add these DNS records at your domain registrar:
   - **A records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME record**: `www` pointing to `victorescribano.github.io`
4. Check "Enforce HTTPS" once DNS propagates

## Tech Stack

- HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Playfair Display, Barlow Condensed, Source Sans 3)
- CSS scroll-snap for mobile carousels
- Intersection Observer API for scroll animations
- SVG turbulence filter for film grain effect
- Zero external dependencies
