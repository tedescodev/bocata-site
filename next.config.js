/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    images: {
      layoutRaw: true,
      domains: [
        'res.cloudinary.com'
      ],
    },
    esmExternals: true,
  }
  //reactStrictMode: true
  // Rest of the config
};
