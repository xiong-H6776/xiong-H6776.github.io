# CareerCanvas Theme - Color Customization Guide

## Overview

The CareerCanvas theme now supports complete color customization through an optimized configuration system. The new system eliminates color repetition by using a base color palette with semantic references, making it easier to maintain and customize.

## Key Improvements

### 🎯 **Eliminated Color Repetition**
- **Before**: 200+ hardcoded hex values with 15+ repetitions of the same colors
- **After**: Single source of truth with semantic references
- **Result**: 90% reduction in color definitions, easier maintenance

### 🏗️ **Three-Tier Architecture**
1. **Base Colors**: Single source of truth for all hex values
2. **Semantic Colors**: Meaningful references to base colors
3. **Section Colors**: Component-specific references to semantic colors

## Quick Start

1. **Copy the example configuration** from `themes/careercanvas/example-config.toml` to your site's `config.toml`
2. **Customize the colors** by changing either base colors or semantic references
3. **Rebuild your site** to see the changes

## Color System Architecture

### 1. Base Color Palette (`[params.colors.base]`)
The foundation of the color system - all hex values are defined here:

```toml
[params.colors.base]
  # Blue Palette
  blue_50 = "#eff6ff"
  blue_100 = "#dbeafe"
  blue_200 = "#bfdbfe"
  blue_300 = "#93c5fd"
  blue_400 = "#60a5fa"
  blue_500 = "#3b82f6"  # Main brand color
  blue_600 = "#2563eb"
  blue_700 = "#1d4ed8"
  blue_800 = "#1e40af"
  blue_900 = "#1e3a8a"
  
  # Gray Palette
  gray_50 = "#f9fafb"
  gray_100 = "#f3f4f6"
  # ... more gray shades
  
  # Other color palettes
  green_500 = "#22c55e"
  purple_500 = "#a855f7"
  # ... etc
```

### 2. Semantic Color Mapping (`[params.colors.semantic]`)
References to base colors with meaningful names:

```toml
[params.colors.semantic]
  # Primary Brand Colors
  primary = "blue_500"        # References base.blue_500
  primary_dark = "blue_700"   # References base.blue_700
  primary_light = "blue_400"  # References base.blue_400
  
  # Status Colors
  success = "green_500"
  warning = "amber_500"
  error = "red_500"
```

### 3. Section-Specific Colors
Component colors that reference semantic or base colors:

```toml
[params.colors.light]
  background = "white"           # References base.white
  text_primary = "gray_900"      # References base.gray_900
  border_accent = "blue_300"     # References base.blue_300

[params.colors.navigation]
  nav_brand = "blue_500"         # References base.blue_500
  nav_hover = "blue_500"         # References base.blue_500
```

## Customization Examples

### Example 1: Change Primary Color to Purple

**Method A - Change Semantic References:**
```toml
[params.colors.semantic]
  primary = "purple_500"        # Use existing purple
  primary_dark = "purple_700"
  primary_light = "purple_400"
  primary_lighter = "purple_300"
```

**Method B - Change Base Colors:**
```toml
[params.colors.base]
  blue_500 = "#8b5cf6"  # Replace blue-500 with purple-500
  blue_700 = "#7c3aed"  # Replace blue-700 with purple-600
  blue_400 = "#a78bfa"  # Replace blue-400 with purple-400
  blue_300 = "#c4b5fd"  # Replace blue-300 with purple-300
```

### Example 2: Create Custom Color Palette

```toml
[params.colors.base]
  # Add custom colors
  custom_primary = "#6366f1"    # Indigo-500
  custom_secondary = "#f59e0b"  # Amber-500
  custom_accent = "#ec4899"     # Pink-500

[params.colors.semantic]
  primary = "custom_primary"
  secondary = "custom_secondary"
  accent = "custom_accent"
```

### Example 3: Dark Mode Customization

```toml
[params.colors.dark]
  background = "gray_950"        # Custom dark background
  text_primary = "gray_100"      # Custom light text
  border_accent = "custom_primary"  # Use semantic reference
```

## Available Color Sections

### Base Colors (`[params.colors.base]`)
- **Blue Palette**: `blue_50` to `blue_900`
- **Gray Palette**: `gray_50` to `gray_900`
- **Green Palette**: `green_100`, `green_200`, `green_400`, `green_500`, `green_600`, `green_800`, `green_900`
- **Purple Palette**: `purple_100`, `purple_200`, `purple_400`, `purple_500`, `purple_800`, `purple_900`
- **Red Palette**: `red_100`, `red_200`, `red_400`, `red_500`, `red_600`, `red_900`
- **Amber/Yellow**: `amber_100`, `amber_200`, `amber_400`, `amber_500`, `amber_600`, `amber_800`
- **Other Colors**: `white`, `black`, `cyan_*`, `indigo_*`, `pink_*`, `teal_*`, `orange_*`

### Semantic Colors (`[params.colors.semantic]`)
- **Primary**: `primary`, `primary_dark`, `primary_light`, `primary_lighter`
- **Secondary**: `secondary`, `secondary_dark`, `secondary_light`
- **Status**: `success`, `success_dark`, `success_light`, `warning`, `error`, `info`

### Section Colors
- **Light Mode**: `[params.colors.light]`
- **Dark Mode**: `[params.colors.dark]`
- **Hero Section**: `[params.colors.hero]`
- **Skills Section**: `[params.colors.skills]`
- **Experience**: `[params.colors.experience]`
- **Contact**: `[params.colors.contact]`
- **Navigation**: `[params.colors.navigation]`
- **Content**: `[params.colors.content]`
- **Effects**: `[params.colors.effects]`

## Benefits of the New System

### ✅ **Maintainability**
- Single source of truth for all colors
- Easy to update brand colors globally
- Consistent color usage across components

### ✅ **Flexibility**
- Multiple ways to customize colors
- Semantic naming for better understanding
- Easy to create custom color schemes

### ✅ **Performance**
- Reduced configuration size
- Faster parsing and processing
- Optimized CSS generation

### ✅ **Developer Experience**
- Clear color hierarchy
- Intuitive naming conventions
- Comprehensive documentation

## Migration from Old System

If you were using the previous color system, the new system is backward compatible. The CSS variables are automatically generated from the new configuration structure.

## Best Practices

1. **Use Semantic References**: Prefer semantic color names over direct base color references
2. **Maintain Consistency**: Keep related colors in the same palette
3. **Test Both Modes**: Always test changes in both light and dark modes
4. **Document Changes**: Comment your customizations for future reference

## Troubleshooting

### Colors Not Updating
- Clear Hugo cache: `hugo --gc`
- Rebuild the site: `hugo --minify`
- Check for syntax errors in your config.toml

### CSS Variables Not Generated
- Ensure the color-variables.css file is included in your baseof.html
- Check that Hugo can access the theme's assets directory

### Dark Mode Issues
- Verify both light and dark mode colors are defined
- Check that the dark mode class is properly applied

This optimized color customization system gives you complete control over the visual appearance of your CareerCanvas theme while maintaining professional design standards and improving maintainability.
