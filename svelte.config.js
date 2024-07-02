import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const repoName = 'blog'; // Replace with your actual GitHub repository name

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : `/${repoName}`
    }
  }
};

export default config;
