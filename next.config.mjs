/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
                source: "/matematicas",
                destination: "/maths",
            },
        ]
    }
};

export default nextConfig;
