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
        ]
    }
};



export default nextConfig;
