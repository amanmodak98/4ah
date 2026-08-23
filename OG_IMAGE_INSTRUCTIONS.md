# OG Image Generation Instructions

## Current Status
The website needs Open Graph and Twitter Card images for social media sharing.

## Image Specifications

### OG Image (Facebook, LinkedIn)
- Size: 1200 x 630 pixels
- Format: JPG or PNG
- File: `/public/og-image.jpg`

### Twitter Image
- Size: 1200 x 630 pixels  
- Format: JPG or PNG
- File: `/public/twitter-image.jpg`

## Design Template Provided
A template HTML file has been created at `/public/og-image-template.html` that can be:
1. Opened in a browser at 1200x630 viewport
2. Screenshot using browser dev tools or tools like Puppeteer
3. Saved as JPG/PNG

## Alternative Generation Methods

### Option 1: Use Figma/Canva
1. Create 1200x630px canvas
2. Use brand colors: Orange (#F97316), Red (#DC2626), Purple (#7C3AED)
3. Include:
   - "4Ability Hive" logo/text
   - Tagline: "Transform Students Into Industry-Ready Professionals"
   - Subtitle: "Employability Training • Soft Skills • Placement Readiness"

### Option 2: Use Online Tools
- Canva: https://www.canva.com/create/og-images/
- Pablo by Buffer: https://pablo.buffer.com/
- Bannerbear: https://www.bannerbear.com/

### Option 3: Programmatic Generation
Use Puppeteer to screenshot the template:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('file:///path/to/og-image-template.html');
  await page.screenshot({ path: 'public/og-image.jpg', type: 'jpeg', quality: 90 });
  await browser.close();
})();
```

## Page-Specific OG Images (Optional)

Consider creating variations for key pages:
- `/public/og-flagship-program.jpg`
- `/public/og-programs.jpg`
- `/public/og-college-solutions.jpg`

Each should include:
- 4Ability Hive branding
- Page-specific title
- Consistent visual style

## Next Steps

1. Generate the main og-image.jpg and twitter-image.jpg
2. Place them in `/public/` directory
3. Verify they load at:
   - https://4ah.in/og-image.jpg
   - https://4ah.in/twitter-image.jpg
4. Test with social media preview tools:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Fallback
If images cannot be generated immediately, the website will still function. Social media platforms will use the site title and description, but won't show a preview image.
