# Aikeedo Theme Starter - Development Guide

This guide provides step-by-step instructions for setting up and developing a custom theme for Aikeedo using this theme starter.

## Prerequisites

- Node.js and npm installed
- Access to an Aikeedo installation

## Setup Instructions

1. Configure Package Name

   Open `/static/composer.json` and set your custom package name. For example:

   ```json
   {
     "name": "your-vendor/your-theme-name"
     // ... other configuration options
   }
   ```

2. Environment Configuration

   a. Duplicate the `.env` file to `.env.local` in the project root directory.
   b. Open `.env.local` and set the `BUILD_DIR` to the public directory path of your Aikeedo installation:

   ```env
   BUILD_DIR=/path/to/aikedo/public/content/plugins/your-vendor/your-theme-name
   ```

   Note: Ensure that "your-vendor/your-theme-name" matches the package name specified in `composer.json`.

3. Install Dependencies

   Run the following command in the project root directory:

   ```bash
   npm install
   ```

4. Start Development Server

   Launch the development server with:

   ```bash
   npm run dev
   ```

   This will start a local assets server at http://localhost:5174/. (Refer to `vite.config.js` for detailed configuration.)

5. Aikeedo Configuration

   a. In your Aikeedo installation, navigate to the Themes page in admin panel and activate your new theme.
   b. Open the `.env` file in your Aikeedo installation root directory and add or modify the following line:

   ```env
   THEME_ASSETS_SERVER=http://localhost:5174/
   ```

## Theme Development

- Customize the theme by modifying the files in the `src` and `static` directories.
- Use the provided structure as a starting point for your theme development.
- Refer to Aikeedo's theme development documentation for specific guidelines and best practices.

## Building for Production

When your theme is ready for production:

1. Run the build command:

   ```bash
   npm run build
   ```

2. The compiled assets will be placed in the directory specified by `BUILD_DIR`.
3. Follow Aikeedo's guidelines for packaging and distributing your theme.

## Additional Information

- The local development server (http://localhost:5174/) serves your theme assets during development.
- Always ensure that your `BUILD_DIR` in `.env.local` points to the correct Aikeedo plugins directory.
- For production deployment, follow Aikeedo's standard theme installation procedures.

## Troubleshooting

If you encounter any issues:

1. Verify that all paths in `.env.local` are correct and accessible.
2. Ensure that the package name in `composer.json` matches the directory structure in your Aikeedo installation.
3. Check that the Aikeedo `.env` file has the correct `THEME_ASSETS_SERVER` URL.

For further assistance, please refer to the Aikeedo documentation or contact support.
