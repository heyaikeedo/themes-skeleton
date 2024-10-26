import { defineConfig, loadEnv } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import cpx from 'cpx';
import path from 'path';

// Load environment variables
const env = loadEnv('', process.cwd(), '');
const outDir = path.resolve(process.cwd(), env.BUILD_DIR || './dist');

let input = {
    js: './src/js/index.js',
    css: './src/css/index.css'
};

function cpxCopyPlugin() {
    return {
        name: 'vite-plugin-cpx-copy',
        apply: 'serve', // This ensures the plugin is only applied during serve

        configureServer(server) {
            // Define your source and destination paths
            const source = [
                './static/**/*',
            ];
            const destination = outDir;

            // Use cpx to watch and copy
            const sourcePattern = source.join(' ');

            // Start watching and copying
            cpx.watch(sourcePattern, destination, {
                initialCopy: true, // Copy files initially before starting watch
            }, () => {
                console.log('Watching for changes and copying files...');
            });
        },
    };
}

export default defineConfig({
    root: './', // Source files directory
    base: '/', // Base public path for assets
    publicDir: 'static',
    build: {
        manifest: true,
        outDir: outDir, // Use the environment variable here as well
        assetsDir: 'assets', // The directory where Vite places the generated assets
        emptyOutDir: true, // Clean the output directory before each build
        rollupOptions: {
            input: input,
        },
    },
    optimizeDeps: {
        include: [
        ], // Explicitly include required dependencies
    },
    server: {
        strictPort: true,
        port: 5174,

        proxy: {
            // Proxy other requests to the Shopify local dev server
            // See https://docs.aikeedo.com/development/local-development-guide
            '^/(?!src/|@vite|node_modules/)': 'http://0.0.0.0:8000'
        },
    },
    plugins: [
        FullReload(['./**/*.twig']), // Watch Twig files for changes
        cpxCopyPlugin()
    ]
});
