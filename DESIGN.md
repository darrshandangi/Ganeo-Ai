---
name: Sovereign Enterprise
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434656'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#4b4e50'
  on-tertiary: '#ffffff'
  tertiary-container: '#636668'
  on-tertiary-container: '#e2e4e6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for high-stakes B2B environments where clarity, efficiency, and trust are paramount. The aesthetic follows a **Refined Corporate Minimalism** approach—stripping away decorative noise to focus entirely on the user's workflow during the onboarding process.

The target audience consists of enterprise stakeholders and operations managers who value reliability and professional polish. The UI evokes an emotional response of "controlled capability"—the feeling that the software is powerful yet easy to navigate. This is achieved through generous whitespace (negative space), a disciplined adherence to a grid, and a high degree of visual consistency that reduces cognitive load.

## Colors

The palette is anchored by a high-frequency **Digital Blue** primary, symbolizing innovation and technological reliability. 

- **Primary (#0052FF):** Used for primary actions, active states, and progress indicators. It is the sole "vibrant" color to ensure high signal-to-noise ratio.
- **Neutral/Text (#0F172A):** A deep slate-navy used for primary typography to provide better readability and a more premium feel than pure black.
- **Secondary/Supporting (#64748B):** A muted cool grey for subtext, icons, and deactivated states.
- **Surface/Background (#F8FAFC):** A very soft blue-grey tint for background sections to distinguish them from pure white (#FFFFFF) interactive cards.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. 

**Hanken Grotesk** is used for headlines. Its sharp, contemporary geometry provides a "tech-forward" personality without being distracting. **Inter** is used for all functional text, UI labels, and body copy. Inter’s tall x-height and systematic spacing make it the gold standard for data-heavy enterprise interfaces.

All labels use a slightly tighter tracking for better grouping, while display headers use negative tracking to feel more impactful and "locked-in."

## Layout & Spacing

The layout utilizes a **Fixed Grid** philosophy for desktop to maintain a "focused" lane of information, preventing the eye from scanning too far horizontally during the onboarding flow.

- **Grid:** A 12-column grid for desktop (1200px max width) and a 4-column grid for mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Onboarding Focus:** Form containers should never exceed 640px in width (8 columns) to ensure readability and a sense of progression. 
- **Breakpoints:** Mobile (<768px), Tablet (768px - 1024px), Desktop (>1024px).

## Elevation & Depth

To maintain a clean, professional aesthetic, this design system avoids heavy shadows in favor of **Tonal Layers** and **Ambient Depth**.

- **Level 0 (Background):** #F8FAFC - The base canvas.
- **Level 1 (Cards/Inputs):** #FFFFFF - Pure white surfaces that "pop" against the off-white background.
- **Elevation - Subtle:** Used for buttons and active cards. A 4px Y-offset shadow with 12% opacity of the neutral color (#0F172A).
- **Interactive State:** On hover, primary buttons increase their shadow spread slightly to provide a tactile "lifted" feel.

## Shapes

The shape language is **Soft (Level 1)**. Elements use a 4px (0.25rem) base radius. This provides a modern feel that is friendlier than sharp 90-degree corners, yet maintains a more serious, institutional character than hyper-rounded or pill-shaped designs. Large containers (cards) may scale up to 8px (0.5rem) to maintain visual proportion.

## Components

### Buttons
- **Primary:** Solid #0052FF background with white text. 4px border radius. Use a subtle 1px inner-border (white at 10% opacity) on the top edge to simulate a "beveled" depth.
- **Secondary:** Ghost style. No background, 1px border (#CBD5E1). 
- **Sizes:** Standard (40px height) and Large (56px height) for the main onboarding CTA.

### Form Inputs
- **Default State:** White background, 1px border (#E2E8F0). 
- **Focus State:** 1px border #0052FF with a 3px soft blue outer glow (halo).
- **Labels:** Always positioned above the input in `label-md` bold, using the neutral navy color.

### Progress Indicators
- A horizontal stepper at the top of the onboarding flow. Completed steps use a Primary Blue checkmark; the current step uses a Primary Blue solid circle; future steps use a muted Grey ring.

### Cards
- White background, 1px border (#E2E8F0), and the "Subtle" elevation shadow. Use for grouping related form fields or plan selections.

### Feedback Strings
- **Error:** Text in #DC2626 (Red), placed immediately below the input field. 
- **Success:** Solid #059669 (Green) for success toasts or confirmation icons.