export function parseMarkdown(markdown) {
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
