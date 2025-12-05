# Global UI Design System

## Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary | #BF1A1A | Main brand color, primary actions |
| Secondary | #FF6C0C | Secondary actions, highlights |
| Accent | #FFE08F | Accents, highlights |
| Dark | #060771 | Headers, dark backgrounds |
| Background | #F5F7FB | Page backgrounds |
| Text Dark | #060771 | Primary text |
| Text Light | #FFFFFF | Text on dark backgrounds |
| Success | #10B981 | Success states, positive actions |
| Warning | #F59E0B | Warning states, caution |
| Error | #EF4444 | Error states, destructive actions |
| Info | #3B82F6 | Informational states |

## Typography

Using Inter or Poppins fonts with the following hierarchy:

- Headings: Bold, 700 weight
- Body: Regular, 400-500 weight
- Line height: 1.2 for headings, 1.5 for body

## Spacing Scale

Using a consistent spacing system based on 4px increments:

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

## Border Radius

Default border radius: 12px

## Shadows

Soft and professional shadows:

- soft: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)
- soft-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.04)
- soft-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)

## Components

### Buttons

Available variants:
- `.btn.btn-primary` - Primary action buttons
- `.btn.btn-secondary` - Secondary action buttons
- `.btn.btn-accent` - Accent action buttons
- `.btn.btn-outline` - Outline buttons
- `.btn.btn-ghost` - Subtle buttons
- `.btn.btn-sm` - Small buttons
- `.btn.btn-lg` - Large buttons
- `.btn.btn-block` - Full-width buttons
- `.btn.btn-icon` - Icon-only buttons
- `.btn:disabled` - Disabled buttons

Buttons now include subtle animations and hover effects for better user feedback.

### Inputs

Form inputs with consistent styling:
- `.input` - Standard input fields
- `.input-error` - Error state
- `.input-success` - Success state
- `.textarea` - Multi-line text input
- `.select` - Dropdown select input

All form inputs now include subtle animations, better focus states, and improved visual feedback.

### Cards

Content containers with elevation:
- `.card` - Base card component
- `.card-body` - Card content padding
- `.card-title` - Card heading styling
- `.card-header` - Card header section
- `.card-footer` - Card footer section

Cards now include subtle hover animations and improved visual hierarchy.

### Tables

Data display components:
- `.table` - Base table styling
- `.table-striped` - Alternating row colors
- `.table-responsive` - Responsive table wrapper

Tables now include improved styling, better hover states, and responsive capabilities.

### Navigation

Navigation components:
- `.navbar` - Navigation bar
- `.navbar-brand` - Brand/logo styling
- `.navbar-nav` - Navigation list
- `.nav-link` - Navigation links

Navigation components now include active state indicators and improved hover effects.

## Responsive Grid System

Flexible grid system:
- `.grid` - Base grid container
- `.grid-cols-{n}` - Columns for different breakpoints
- Responsive prefixes: `md:`, `lg:`

## Utility Classes

Additional helper classes:
- Color utilities: `.text-primary`, `.bg-secondary`, etc.
- Shadow utilities: `.shadow-soft`, `.shadow-soft-lg`
- Rounded utilities: `.rounded-default`