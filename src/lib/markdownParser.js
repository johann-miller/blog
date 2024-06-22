export function parseMarkdown(markdown) {
    // Check for and remove YAML front matter
    const frontmatterRegex = /^---([\s\S]*?)---/;
    const match = frontmatterRegex.exec(markdown);

    if (match) {
        markdown = markdown.slice(match[0].length).trim(); // Remove front matter
    }

    // Replace headers (e.g., # Header) with HTML <h1> tags
    markdown = markdown.replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

    // Replace headers (e.g., ## Header) with HTML <h2> tags
    markdown = markdown.replace(/^##\s+(.*)$/gm, '<h2>$1</h2>');

    // Replace emphasis (e.g., *italic*) with HTML <em> tags
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Replace bold (e.g., **bold**) with HTML <strong> tags
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace inline code (e.g., `code`) with HTML <code> tags
    markdown = markdown.replace(/`(.*?)`/g, '<code>$1</code>');

    // Replace links (e.g., [link](https://example.com)) with HTML <a> tags
    markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    // Split markdown into paragraphs
    const paragraphs = markdown.split('\n\n');

    // Convert each paragraph into HTML without <p> tags
    markdown = paragraphs.map(p => p.trim() ? `<p>${p}</p>` : p).join('');

    return markdown;
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