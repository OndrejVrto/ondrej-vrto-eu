import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

const isBuildProcess = process.argv.includes('build')

const copyContent = viteStaticCopy({
    targets: [
        {
            src: 'assets' + '/[!.]*',
            dest: 'assets',
        },
    ],
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        isBuildProcess && copyContent,
    ],
})
