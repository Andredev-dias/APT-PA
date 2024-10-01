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
            {
                source: "/funcao-reaproveitada",
                destination: "/general-function",
            },
        ]
    }
};

export default nextConfig;
