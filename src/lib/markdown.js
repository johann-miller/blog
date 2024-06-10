import fs from 'fs'
import path from 'path'

export function getPost(slug) {
    const filePath = path.resolve('posts', `${slug}.md`);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8');
    } else {
        return null;
    }
}

export function getAllPosts() {
    const files = fs.readdirSync('posts');
    return files.map(file => {
        const slug = file.replace('.md', '');
        return { slug };
    });
}