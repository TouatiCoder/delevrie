# Delevrie UI Component Library

This document outlines the enhanced UI components and design system for the Delevrie application.

## Enhanced Design System

### Colors
We've expanded the color palette to include semantic colors for better user feedback:

- Primary: `#BF1A1A` (Brand red)
- Secondary: `#FF6C0C` (Accent orange)
- Accent: `#FFE08F` (Warm yellow)
- Dark: `#060771` (Deep blue)
- Background: `#F5F7FB` (Light gray)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Amber)
- Error: `#EF4444` (Red)
- Info: `#3B82F6` (Blue)

### Typography
- Font family: Inter, Poppins, system fonts
- Heading scale: h1-h6 with responsive sizing
- Body text: 1rem base size with 1.5 line height
- Letter spacing: -0.02em for headings

### Spacing Scale
Consistent 4px-based spacing system:
- 0: 0px
- 1: 4px
- 2: 8px
- 3: 12px
- 4: 16px
- 5: 20px
- 6: 24px
- 8: 32px
- 10: 40px
- 12: 48px
- 16: 64px
- 20: 80px
- 24: 96px
- 32: 128px

## Enhanced Components

### Buttons
All buttons now include:
- Smooth transitions with cubic-bezier timing
- Hover and active states with subtle animations
- Ripple effect on click
- Improved focus states with visible rings
- Disabled state styling

Variants:
- `.btn-primary`: Primary action buttons
- `.btn-secondary`: Secondary action buttons
- `.btn-accent`: Accent action buttons
- `.btn-outline`: Outline buttons
- `.btn-ghost`: Subtle buttons
- `.btn-sm`: Small buttons
- `.btn-lg`: Large buttons
- `.btn-block`: Full-width buttons
- `.btn-icon`: Icon-only buttons

### Form Elements
Enhanced form elements with:
- Better focus states with colored glow
- Improved error/success states
- Subtle hover effects
- New components:
  - `.textarea`: Multi-line text input
  - `.select`: Styled dropdown select

### Cards
Enhanced cards with:
- Subtle hover animations (-translate-y-1)
- Improved shadow transitions
- New variants:
  - `.card-header`: Card header section
  - `.card-footer`: Card footer section

### Tables
Enhanced tables with:
- Improved header styling with uppercase text
- Better hover states
- Responsive wrapper (`.table-responsive`)
- Striped rows variant (`.table-striped`)

### Navigation
Enhanced navigation components with:
- Active state indicators
- Improved focus states
- Better hover effects
- Semantic HTML structure with ARIA attributes

## Accessibility Improvements

### ARIA Labels
- All interactive elements have proper ARIA labels
- Landmark roles for main sections (banner, main, contentinfo)
- Proper labeling for form elements
- Descriptive alt text for images

### Keyboard Navigation
- Focusable elements have visible focus rings
- Logical tab order throughout the application
- Keyboard shortcuts for common actions
- Skip links for screen readers

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy (h1-h6)
- ARIA live regions for dynamic content
- Hidden text for icon-only buttons

## Responsive Design

### Breakpoints
- Small: 640px
- Medium: 768px
- Large: 1024px
- Extra Large: 1280px

### Grid System
- Flexible grid with responsive columns
- Gap-based spacing
- Container with max-width constraints

### Mobile-First Approach
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly targets (minimum 44px)
- Optimized navigation for small screens

## Animation and Micro-interactions

### Entrance Animations
- Fade-in for content
- Slide-in for elements with staggered delays
- Scale-in for cards and components

### Interactive Feedback
- Button press effects
- Hover transitions
- Focus states
- Loading states

### Performance Considerations
- Hardware-accelerated animations
- Reduced motion support
- Efficient CSS transitions

## Best Practices

### Consistency
- Use consistent spacing and alignment
- Maintain visual hierarchy
- Follow established color patterns
- Apply uniform typography

### Usability
- Clear call-to-action buttons
- Intuitive navigation
- Meaningful feedback for user actions
- Progressive disclosure of information

### Performance
- Optimized assets
- Minimal CSS/JS overhead
- Efficient rendering
- Lazy loading for non-critical resources

## Implementation Guidelines

### Component Structure
```html
<!-- Example card component -->
<div class="card transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
  <div class="card-header">Header Content</div>
  <div class="card-body">Body Content</div>
  <div class="card-footer">Footer Content</div>
</div>
```

### Accessibility Attributes
```html
<!-- Example button with accessibility -->
<button 
  class="btn btn-primary"
  aria-label="Submit form"
  aria-describedby="form-help-text"
  role="button"
>
  Submit
</button>
```

### Responsive Patterns
```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

This documentation serves as a reference for maintaining consistency across the application and ensuring a high-quality user experience.