import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        host: '172.16.1.111',
        port: '9898',
        proxy: {
            '/': {
                target: '172.16.1.111', // 开发环境
                changeOrigin: true, // 是否跨域
                logLevel: 'debug',
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
});
