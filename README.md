# Gold's Gym

Theme: dark gym website with gold accents (Route B, designed in Figma).
Figma link: https://www.figma.com/make/KBeJYUAQKX5DgKgBSzVYK3/Gold-s-Gym-6-page-website

Built with HTML, CSS and a little JavaScript. Assignment 1 pages use plain HTML and CSS, each with its own stylesheet. Assignment 2 pages use Bootstrap 5.3 (loaded from the jsDelivr CDN) for layout and components, plus a small custom stylesheet per page for effects Bootstrap does not provide.

## Pages

### Assignment 1 (tag: `assignment-1`)
1. Home: `index.html`, `home.css`
2. Facilities: `facilities.html`, `facilities.css`
3. Join: `join.html`, `join.css`

### Assignment 2 (tag: `assignment-2`)
4. Services: `services.html`, `services.css`
5. Gallery: `gallery.html`, `gallery.css`
6. Contact: `contact.html`, `contact.css`, `contact.js`

## Techniques used per page

| Page | Main techniques |
|---|---|
| Home | Element, class and ID selectors, fonts, borders, background colour |
| Facilities | Box model, `float`, `position: sticky`, `overflow`, image, video, audio, lists, table |
| Join | Attribute selectors, `:hover`, `:focus`, `:valid`, `:invalid`, all form input types |
| Services | Bootstrap grid and cards (`row-cols`, `card`), custom `transform` and `transition` on hover |
| Gallery | Bootstrap responsive grid (`col-12`, `col-md-6`, `col-lg-3`), custom `@keyframes` slide-in animation, `prefers-reduced-motion` media query |
| Contact | Bootstrap grid and flex utilities, Bootstrap form styles, one DOM script in `contact.js` (live character counter and show/hide trainer bios) |

CSS3 effects used across the site: gradients, `box-shadow`, `border-radius`, `rgba()` colours and the Inter web font (Assignment 1 pages).

## Different header on every Assignment 2 page

| Page | Header style |
|---|---|
| Services | Dark navbar with gold pill-shaped links, active pill filled gold |
| Gallery | Centred logo above text-only links, small gold dot above the active link |
| Contact | Gradient navbar with a gold gradient line along the bottom and a theme icon |

All three collapse into a hamburger menu on small screens (Bootstrap navbar and its JS bundle).

## File structure

```
web-project-<rollno>/
├── index.html        home.css
├── facilities.html   facilities.css
├── join.html         join.css
├── services.html     services.css
├── gallery.html      gallery.css
├── contact.html      contact.css   contact.js
├── images/           (hero, facilities, services, gallery and trainer pictures)
├── media/            (gym-tour.mp4, motivation.mp3)
└── README.md
```

## AI usage log

| Tool | What I asked | What I changed |
|---|---|---|
| Claude | Got help in generating the HTML page skeleton from my Figma design and page spec | Checked every page, edited text and class names |
| Claude | Asked Claude to indent the CSS file | Reviewed the indentation |
| Claude | Asked Claude to convert the Assignment 2 pages (Services, Gallery, Contact) to Bootstrap with a different header on each page | Checked every page, tested at different screen sizes, edited classes and text |
| Claude | Asked Claude to add a small stylesheet for the hover effect, the gallery animation and the gold colour | Reviewed each rule and tested the effects |
| Gemini | Generated hero image for home page and facilities page images | Resized and compressed to 1200 x 900 |
| Gemini | Generated Music for the facilities page | Trimmed the length of the music and also compressed it a little |
| Gemini | Generated the service card images, the eight gallery images and the three trainer portraits | Resized and compressed each image, checked the crop on the page |

## Image, video and audio sources

| File | Source (site or AI tool) |
|---|---|
| hero.jpg | Gemini |
| facilities-floor.jpg, facilities-small.jpg | Gemini |
| strength.jpg, cardio.jpg, yoga.jpg, personal.jpg | Gemini |
| gallery-1.jpg to gallery-8.jpg | Gemini |
| trainer-1.jpg to trainer-3.jpg | Gemini |
| gym-tour.mp4 | Pexels.com by @DishantBabariya |
| motivation.mp3 | Gemini |

All images have meaningful `alt` text. No inline styles are used.