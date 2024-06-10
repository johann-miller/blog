import fs from 'fs';

export const load = ({ params }) => {
    const slug = params.slug;
    const markdownContent = readMarkdownFile(slug);

    return {
        slug,
        markdownContent
    };
};

function readMarkdownFile(slug) {
    const filePath = `posts/${slug}.md`;
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, 'utf-8');
    } else {
        return null;
    }
}