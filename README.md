# NomadicZack Site

Source for [nomadiczack.com](https://nomadiczack.com), Zack Nomad’s adventure, travel, and storytelling home base.

## Design

Warm sand and burnt orange with midnight-blue contrast. The travel-first homepage retains existing social, contact, and GitHub project links. The mountain illustration is a lightweight inline SVG; the existing portrait is optimized as WebP.

## Stack

React, TypeScript, Vite, responsive CSS, and the existing Netlify deployment.

## Development

Run `npm install`, then `npm run dev`. Run `npm run lint` and `npm run build` before deployment.

## Responsive/accessibility checks

Check narrow phones (320/375/390px), tablets (768px), and desktop (1440px). Verify no horizontal overflow, readable text, keyboard-visible focus, reduced motion, navigation toggle and Escape closure, and all section/social/contact links.

Mobile guidance: https://web.dev/articles/responsive-web-design-basics and https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.
