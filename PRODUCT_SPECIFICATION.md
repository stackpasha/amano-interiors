# Frontend Product Specification Document: AMANO Interiors

## 1. Product Overview
AMANO Interiors is an ultra-premium, interactive portfolio website for a bespoke modular kitchen and home design studio based in Bengaluru, India. The frontend is built as a single-page application (SPA) using React, Vite, Framer Motion, and Lenis smooth scrolling to establish a state-of-the-art luxury design concept.

## 2. Core Visual Theme & Style Guidelines
- **Color Palette**: Dark Charcoal (`#111111`, `#090909`), Luxury Gold (`#C8A96B` or `#c09e5b`), Ivory (`#F7F4EE`), and White (`#ffffff`).
- **Typography**: `DM Sans` for clean uppercase headings; `Hanken Grotesk` for high-readability body copy.
- **Glassmorphism**: High blur backing (`backdrop-filter: blur(30px)`), subtle translucent white borders (`rgba(255, 255, 255, 0.1)`), and drop shadows for depth.
- **Visual Overlays**:
  - **Tactile Paper Grain (`.noise-overlay`)**: A fixed overlay with very low opacity (`0.035`) giving a premium print/paper texture.
  - **Architectural CAD Grid (`.arch-grid-overlay`)**: A fixed layout grid representing blueprint lines (`120px` spacing) that blend with scroll elements.

---

## 3. Component & Feature Specifications

### 3.1. Header Navigation Bar
- **Position**: Fixed overlay at the top of the viewport.
- **Visual Behavior**:
  - Transparent background at the top of the page.
  - Smoothly transitions into a blurred glassmorphic background (`rgba(17, 17, 17, 0.85)` with bottom border) once scrolled past `50px`.
- **Layout Widgets**:
  - **Left**: AMANO logo (`/images/amanologo.png`) wrapped in a Home navigation link.
  - **Center**: Links styled in uppercase with active indicators: `Home`, `Services`, `Philosophy`, `Journey`, `Contact Us`.
    - **Services link** features a dropdown chevron. Hovering over it opens a glassmorphic micro-dropdown listing sub-services (`Modular Kitchens`, `Wardrobes`, `Complete Interiors`).
    - **Active spy**: A layout-linked gold dot transitions smoothly beneath the link corresponding to the current section in view.
  - **Right**:
    - **CONNECT NOW**: An action link with a WhatsApp icon pointing to `https://wa.me/918088228997`.
    - **Cart**: Shopping bag icon linking to services.
    - **Profile**: User avatar icon linking to the consultation form.
    - **Language**: Text indicator `ENG` with a chevron.

### 3.2. Parallax Hero Section
- **Background**: Full-screen, full-bleed modular kitchen render image (`/images/hero_kitchen.png`) with an elegant radial gradient dark overlay. Parallax binding scrolls the background image slower than viewport scroll.
- **Frosted Glass Content Card (Left)**:
  - Floating card with rounded corners (`24px`).
  - Contains title: `"Crafted with Passion, Made for You!!"` and description paragraph.
  - Does not contain any call-to-action buttons inside, preserving mockup cleanliness.
- **Explore Button (Bottom-Right)**:
  - A white rounded pill button displaying `"Explore →"` that smooth-scrolls to the Services section.

### 3.3. Interactive Bento Services Grid
- **Structure**: A 12-column grid containing 3 services cards:
  - **Modular Kitchens**: Spans `8` columns. Uses image `/images/kitchen1.jpg`.
  - **Wardrobes**: Spans `4` columns. Uses image `/images/wardrobes.jpg` (or standard render).
  - **Complete Interiors**: Spans `12` columns (full width). Uses image `/images/kitchen2.jpg`.
- **Interactions**:
  - **3D Mouse Tilt**: Hovering over any card calculates the cursor position relative to the center and tilts the card in 3D perspective (`rotateX`/`rotateY`).
  - **Shimmer Light Track**: Cursor coordinate gradients follow the mouse path over the card surface.
  - **Bento Line Reveal**: A solid white line sweeps across the card footer on hover.

### 3.4. Philosophy & Journey Timeline
- **Philosophy**: Multi-column list detailing the design values (e.g., Craftsmanship, Bespoke, Precision) and showing blueprint/material slab visuals.
- **Journey**: Horizontal timeline grid displaying steps: `01 / Briefing`, `02 / Blueprinting`, `03 / Crafting`, `04 / Execution`. Cards slightly lift (`-8px`) and highlight their numbers in gold on hover.

### 3.5. Consultation Form Section
- **Left Column**: Title `"Bring Your Vision To Life"`, studio statuses, Direct Line (`+91 80882 28997`), and a dynamic local clock running in Indian Standard Time (IST).
- **Right Column (Frosted Form)**:
  - Inputs for Full Name, Phone, Location, and Project Scope dropdown.
  - Inputs feature gold floating focus bars and outline highlights.
  - Interactive submission: Shows `"Transmitting Reservation..."` loader and renders a gold bespoke confirmation note on success.

### 3.6. Interactive Floating Sidebar
- **Position**: Fixed on the right-middle edge of the viewport.
- **Container**: A vertical glassmorphic capsule panel.
- **Items**:
  - **Call Button**: Circular link pointing to `tel:+918088228997`.
  - **Scroll Progress Tracker**: A vertical scrollbar track that fills up with a gold indicator bar as the user scrolls down the page.
  - **WhatsApp Button**: Circular link pointing to `https://wa.me/918088228997`.

### 3.7. Luxury Multi-Column Footer
- **CTA Banner (Top)**:
  - **Left**: Heading `"READY TO TRANSFORM YOUR HOME?"` with gold underlines, WhatsApp action button, Schedule Call button, and trust badges (Free Consultation, Premium Materials, End-to-End Execution).
  - **Right**: Framed rendering (`/images/kitchen1.jpg`) with rounded corners.
- **Divider**: Thin border line.
- **Multi-Column Details (Bottom)**:
  - **Col 1 (Brand)**: Logo (`/images/amanologo.png`), tagline `DESIGNED AROUND LIFE`, social icons (Instagram, Facebook).
  - **Col 2 (Services)**: Modular Kitchens, Wardrobes, Bedroom Interiors.
  - **Col 3 (Company)**: About Us, Our Process, Projects, Testimonials, Blog, Careers.
  - **Col 4 (Contact)**: Showroom direct phone number, email, address, and `VIEW ON GOOGLE MAPS` button linking to the Bangalore location.
  - **Col 5 (Map & Serving)**: Custom stylized dark map indicating Bangalore served regions, and serving text.
- **Bottom Bar**: Copyright text on the left, and tagline `"Crafting Spaces. Creating Stories by AMANO Interiors."` in gold on the right.
