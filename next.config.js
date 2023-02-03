/** @type {import('next').NextConfig} */
// https://www.viget.com/articles/host-build-and-deploy-next-js-projects-on-github-pages/
const repo = process.env.NEXT_PUBLIC_FOLDER || 'threejs-phone';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const withTM = require('next-transpile-modules')(['gsap', 'styled-components']);

module.exports = withTM({
  mode: 'universal',
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'custom',
    loaderFile: './loader.js'
  }
});
