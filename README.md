# Aikeedo Theme Starter

A modern theme development starter kit for Aikeedo, using Vite.js for asset building and Twig for templating. This project compiles into a PHP Composer package that integrates with Aikeedo's theming system.

## Tech Stack

- **Frontend:**
  - Alpine.js for JavaScript interactivity
  - Tailwind CSS for styling
  - Tabler Icons for iconography
- **Backend:**
  - Twig templates for PHP templating
  - Gettext for translations
  - PHP Composer package structure

## Project Structure

```
theme-starter/
├── src/                    # Frontend source
│   ├── js/               # JavaScript files
│   │   ├── components/  # Custom elements
│   │   └── index.js    # Main JS entry
│   └── css/             # CSS files
│       ├── base.css    # Base styles
│       └── index.css   # Main CSS entry
│
├── static/                # PHP package structure
│   ├── composer.json     # Package definition
│   ├── templates/       # Twig template files
│   ├── sections/       # Reusable template sections
│   ├── snippets/      # Template partials
│   ├── layouts/       # Base layouts
│   ├── locale/        # Translation files (.po)
│   └── src/          # PHP source files
│
└── scripts/              # Build and utility scripts
    ├── pack.mjs        # Theme packaging
    ├── release.mjs    # Release creation
    └── locale-extract.mjs # Translation extraction
```

## Prerequisites

- Node.js 18+ and npm (for asset building)
- Composer (for package installation in Aikeedo)
- Running Aikeedo installation
- Basic knowledge of:
  - Alpine.js and Tailwind CSS
  - Twig templating
  - PHP Composer packages

## Detailed Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/heyaikeedo/themes-starter.git my-theme
   cd my-theme
   ```

2. **Configure Your Theme Package**

   Edit `/static/composer.json` with your theme details:

   ```json
   {
     "name": "your-vendor/your-theme-name",
     "description": "Your theme description",
     "version": "1.0.0",
     "type": "aikeedo-theme",
     "homepage": "https://your-site.com",
     "license": "AIKEEDO",
     "authors": [
       {
         "name": "Your Name",
         "email": "your.email@example.com",
         "homepage": "https://your-site.com",
         "role": "Developer"
       }
     ],
     "support": {
       "email": "support@your-site.com",
       "docs": "https://docs.your-site.com/"
     },
     "require": {
       "heyaikeedo/composer": "^1.0.0"
     },
     "extra": {
       "entry-class": "YourVendor\\ThemeName\\Theme",
       "title": "Your Theme Title",
       "description": "Your theme description",
       "logo": "https://your-site.com/logo.png",
       "icon": "https://your-site.com/icon.png",
       "status": "active"
     },
     "autoload": {
       "psr-4": {
         "YourVendor\\ThemeName\\": "src/"
       }
     }
   }
   ```

   > **Important**:
   >
   > - Replace `YourVendor\\ThemeName` with your actual namespace
   > - The namespace in `autoload.psr-4` must match your `entry-class` namespace
   > - The `src/` directory should contain your PHP classes

3. **Set Up Environment**

   a. Create your local environment file:

   ```bash
   cp .env .env.local
   ```

   b. Configure `.env.local` with your paths:

   ```env
   # Windows path example:
   BUILD_DIR=C:/xampp/htdocs/aikeedo/public/content/plugins/your-vendor/your-theme-name

   # Linux/Mac path example:
   BUILD_DIR=/var/www/aikeedo/public/content/plugins/your-vendor/your-theme-name

   # Aikeedo server URL (required for development)
   AIKEEDO_SERVER=http://localhost:8000
   ```

   > **Critical**: The final path segments (`your-vendor/your-theme-name`) MUST match your composer.json package name!

4. **Install Dependencies**

   a. Install npm packages:

   ```bash
   npm install
   ```

   b. Verify installation:

   ```bash
   # Should list alpinejs and other dependencies
   npm list
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   ```

   This will:

   - Start Vite dev server on port 5174
   - Watch for file changes
   - Copy static files to `BUILD_DIR`
   - Extract translations automatically

6. **Register Theme with Aikeedo**

   In your Aikeedo installation directory:

   ```bash
   # Add your theme as a requirement
   composer require your-vendor/your-theme-name

   ```

7. **Configure Aikeedo**

   Add or update these settings in your Aikeedo's `.env` file:

   ```env
   # Required for development
   THEME_ASSETS_SERVER=http://localhost:5174/

   # Set environment to development
   ENVIRONMENT=dev

   # Enable debug mode for development
   DEBUG=1

   # Disable caching for development
   CACHE=0
   ```

8. **Verify Installation**

   ```bash
   # Your theme should be here
   ls /path/to/aikeedo/public/content/plugins/your-vendor/your-theme-name
   ```

9. **Activate Your Theme**

   a. Log into Aikeedo admin panel
   b. Navigate to: Themes
   c. Find your theme in the list
   d. Click "Publish" to activate

10. **Verify Development Setup**

    Check these points:

    - [ ] Vite dev server running (http://localhost:5174)
    - [ ] Static files copied to BUILD_DIR
    - [ ] Theme visible in Aikeedo admin
    - [ ] CSS/JS changes reflect immediately
    - [ ] Twig template changes trigger reload
    - [ ] Translations being extracted

## Common Setup Issues

### Assets Not Loading

If theme assets aren't loading:

- Verify THEME_ASSETS_SERVER in Aikeedo's .env
- Ensure Vite server is running
- Check proxy settings in vite.config.mjs

### Template Changes Not Reflecting

1. Clear Aikeedo's cache
2. Check BUILD_DIR path is correct

## Development Features

### Hot Module Replacement

- Instant CSS updates via Tailwind
- Alpine.js component reloading
- Full page reload for Twig changes
- Automatic static file copying

### Internationalization

- Automatic string extraction to PO files
- Multiple language support
- Translation file watching
- Uses PHP's Gettext

### Custom Elements

```html
<!-- Dark/Light Mode Switcher -->
<mode-switcher>
  <button class="text-2xl">
    <i class="ti ti-moon-stars dark:hidden"></i>
    <i class="hidden ti ti-sun-filled dark:block"></i>
  </button>
</mode-switcher>

<!-- Avatar Component -->
<x-avatar title="User Name" src="/path/to/avatar.jpg" length="2"></x-avatar>
```

### Twig Templates

```twig
{% extends "@theme/layouts/theme.twig" %}

{% block template %}
  <div class="container">
    {% include "@theme/sections/header.twig" %}
    {{ content }}
  </div>
{% endblock %}
```

## Available Commands

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start Vite development server    |
| `npm run build`   | Build production assets          |
| `npm run serve`   | Preview production build         |
| `npm run locale`  | Extract translatable strings     |
| `npm run pack`    | Create installable theme package |
| `npm run release` | Create distribution package      |

## Troubleshooting

### Common Issues

1. **Assets Not Loading**

   - Verify Vite server is running (port 5174)
   - Check AIKEEDO_SERVER setting
   - Verify proxy settings in vite.config.mjs

2. **Template Changes Not Reflecting**

   - Check BUILD_DIR permissions
   - Verify Twig file locations
   - Clear Aikeedo's cache

3. **Build Problems**
   - Verify all paths in .env.local
   - Check write permissions
   - Review Vite build output

### Need Help?

- Review [Aikeedo Documentation](https://docs.aikeedo.com)
- Check [GitHub Issues](https://github.com/heyaikeedo/themes-starter/issues)
