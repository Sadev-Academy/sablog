```markdown
# Design System Document: The Editorial Precision Framework

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to move beyond the "template" look of modern tech blogs, evolving into a high-end editorial experience. Our Creative North Star is **The Digital Curator**. The aesthetic is a marriage of Swiss minimalist structural integrity and the tactile warmth of a premium print magazine. 

To achieve this, we reject rigid, boxed-in layouts in favor of **Intentional Asymmetry**. Hero sections should utilize "breathing room" as a functional element, allowing high-contrast typography to act as the primary visual anchor. We utilize overlapping elements—such as a title partially encroaching on a high-resolution image—to create a sense of depth and curated intent that feels human, not algorithmic.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a sophisticated "Tech-Slate" foundation, punctuated by a high-energy "Electric Cobalt."

### The "No-Line" Rule
**Borders are a failure of hierarchy.** Within this system, 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` article feed should sit on a `surface` background, creating a natural, soft distinction.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine-paper layers. 
- **Base Level:** `surface` (#f7f9fb) – Use for global backgrounds.
- **Secondary Level:** `surface-container-low` (#f2f4f6) – Use for subtle section grouping.
- **Prominence Level:** `surface-container-lowest` (#ffffff) – Reserved for the "active" card or the main reading pane to provide maximum contrast against the text.

### The "Glass & Gradient" Rule
To escape the "flat" look, floating elements (like navigation bars or hovering TOCs) must use **Glassmorphism**. Apply `surface-container-lowest` at 80% opacity with a `backdrop-filter: blur(20px)`. 

### Signature Textures
Main CTAs and Hero backgrounds should not be flat. Utilize a subtle linear gradient:
`linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)`
This adds a "visual soul" and a sense of movement that solid hex codes lack.

---

## 3. Typography: The High-Contrast Dialogue
We utilize a dual-font strategy to balance technical precision with narrative flow.

*   **The Interface (Manrope):** A modern sans-serif used for utility, navigation, and labels. It represents the "Tech" aspect of the blog—clean, functional, and geometric.
*   **The Narrative (Newsreader):** A sophisticated serif used for headlines and long-form body text. It represents the "Design" and "Editorial" aspect—authoritative, rhythmic, and legible.

| Scale | Font | Size | Intent |
| :--- | :--- | :--- | :--- |
| **display-lg** | Manrope | 3.5rem | High-impact hero statements. Tight letter spacing (-2%). |
| **headline-lg**| Manrope | 2.0rem | Article titles in feeds. Strong and assertive. |
| **title-lg**   | Newsreader | 1.375rem | Featured pull quotes or section intros. |
| **body-lg**    | Newsreader | 1.0rem | Long-form reading. Line height set to 1.6 for breathability. |
| **label-md**   | Manrope | 0.75rem | Metadata (Date, Category). Always All-Caps with 5% tracking. |

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use them to create "atmosphere."

*   **The Layering Principle:** Avoid shadows on static cards. Instead, place a `surface-container-lowest` card atop a `surface-container-low` background. The slight shift in hex value creates a "Soft Lift."
*   **Ambient Shadows:** When a component must float (e.g., a Modal), use a tinted shadow: `rgba(25, 28, 30, 0.06)` with a 40px blur and 12px offset. This mimics natural light rather than a digital drop-shadow.
*   **The "Ghost Border" Fallback:** If a layout requires a container for accessibility (like a code block), use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use `surface-tint` sparingly as a 1px inner-top-stroke on glass elements to simulate the edge of a glass pane.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (Primary to Primary-Container), `full` roundedness. No shadow. On-hover: 10% brightness increase.
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary:** Ghost style. `primary` text color, no background. 

### Cards & Feed Items
**Strict Rule:** No divider lines between list items. Use the **Spacing Scale** (32px - 48px vertical gaps) or subtle alternating background shifts (`surface` to `surface-container-low`) to separate content.

### Interactive "Reading" Progress
For long-form articles, use a 2px tall progress bar at the top of the viewport using the `primary` (Electric Blue) accent. This provides a "vibrant highlight" without distracting from the text.

### Inputs & Search
Text fields should use `surface-container-highest` with a `none` border. On focus, a 2px `primary` underline should animate from the center outward.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. If a container is 8 columns wide, offset it by 2 columns to the right rather than centering it.
*   **Do** prioritize the `Newsreader` serif for any text longer than two sentences to maintain the editorial feel.
*   **Do** use `primary` (Electric Blue) exclusively for interactive elements—links, buttons, and active states.

### Don't
*   **Don't** use 1px dividers to separate articles. Use white space. If it feels too empty, increase the font size.
*   **Don't** use pure black (#000000). Always use `on-surface` (#191c1e) for text to maintain the "Deep Slate" sophistication.
*   **Don't** use "Standard" 400 weight for everything. Use `Manrope SemiBold` for labels and `Newsreader Medium` for body text to give the typography "weight" and premium presence.

---

## 7. Spacing Scale
Generous padding is the hallmark of premium design. 
- **Section Gaps:** 120px (Desktop), 80px (Mobile).
- **Component Internal Padding:** 24px (xl roundedness) or 32px.
- **Line Height (Body):** 1.6 - 1.8. Never "crowd" the serif text.```