/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",  // <=== enables static exports
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/clock',
                destination: '/web-art/clock',
                permanent: false
            },
            {
                source: '/generative-art',
                destination: '/web-art/generative-art',
                permanent: false
            },
            {
                source: '/landscapes',
                destination: '/web-art/landscapes',
                permanent: false
            },
            {
                source: '/music-shelf',
                destination: '/web-art/music-shelf',
                permanent: false
            },
            {
                source: '/tournament',
                destination: '/web-art/tournament',
                permanent: false
            },
            {
                source: '/web-art/mcdonalds-slack-applet',
                destination: 'https://quinn2liu.github.io/section3assignment2/index.html',
                permanent: false
            },
            {
                source: '/web-art/web-ring',
                destination: '/web-art/music-shelf',
                permanent: false
            },
            {
                source: '/web-art/about',
                destination: '/web-art',
                permanent: false
            },
        ]
    }
};



export default nextConfig;
