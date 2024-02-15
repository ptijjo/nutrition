/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig

/*const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.forEach((rule) => {
        if (String(rule.test) === '/\\.css$/') {
          rule.use.push({
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: './postcss.config.js',
              },
            },
          });
        }
      });
    }
    return config;
  },
};*/


