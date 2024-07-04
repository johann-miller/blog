import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    }
  }
};