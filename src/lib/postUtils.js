// lib/postUtils.js

// Import your JSON data (assuming postsData is defined elsewhere)
import postsData from '../data/postsData.json';

export function findPost(topicName, filename) {
  // Iterate through the postsData array
  for (let i = 0; i < postsData.length; i++) {
    const topic = postsData[i];

    // Check if the current topic's name matches the target topicName
    if (topic.name === topicName) {
      // Iterate through the posts of the current topic
      for (let j = 0; j < topic.posts.length; j++) {
        const post = topic.posts[j];

        // Check if the filename matches
        if (post.filename === filename) {
          return post; // Return the post if found
        }
      }
    }
  }

  return null; // Return null if the post is not found
}

export function parseFrontmatter(markdown) {
  const frontmatter = {};
  const metadataRegex = /^---([\s\S]*?)---/; // Regex to match YAML front matter
  const match = metadataRegex.exec(markdown);

  if (match) {
    const metadataLines = match[1].trim().split('\n');
    metadataLines.forEach(line => {
      const [key, value] = line.split(':').map(part => part.trim());
      frontmatter[key] = value;
    });
  }

  return frontmatter;
}