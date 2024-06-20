function parseMarkdown(markdown) {
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

    // Replace paragraphs (e.g., paragraph) with HTML <p> tags
    markdown = markdown.split('\n\n').map(p => `<p>${p}</p>`).join('');

    return markdown;
}

const markdown = `
## Header

*Italic* and **bold** text.

\`Inline code\`.

[Link](https://example.com).

Paragraph.
`;

const html = parseMarkdown(markdown);
console.log(html);
