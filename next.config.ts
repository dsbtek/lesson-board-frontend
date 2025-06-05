import pwa from 'next-pwa';
import type { NextConfig } from 'next';

// Call pwa() to get the actual plugin function
const withPWA = pwa({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    exclude: [/\.map$/, /manifest\.json$/],
});

const baseConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
    images: {
        domains: ['example.com'],
        formats: ['image/avif', 'image/webp'],
    },
    webpack: (config: any) => {
        config.experiments = {
            asyncWebAssembly: true,
            syncWebAssembly: true,
            topLevelAwait: true,
            layers: true,
        };
        return config;
    },
};

export default withPWA(baseConfig); // ✅ This now returns the final config object
