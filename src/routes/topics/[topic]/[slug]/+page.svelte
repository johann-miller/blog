<script>
    import { onMount, afterUpdate } from "svelte";
    import { page } from "$app/stores";
    import { parseMarkdown, parseFrontmatter } from "$lib/markdownParser.js";
    import { renderMath } from "$lib/renderMath.js";
    import "../../../../style/global.css";
    import { findPost } from "$lib/postUtils.js";

    // Bind articleElement to the article tag
    let articleElement;
    let params;
    let frontmatter;
    $: params = $page.params;

    export let markdownContent = "";
    let parsedMarkdown;

    // Function to re-render KaTeX math on updated content
    function reRenderMath() {
        if (articleElement) {
            renderMath(articleElement);
        }
    }

    onMount(async () => {
        try {
            let topic = params.topic;

            const response = await fetch(
                `/topics/${topic}/${params.slug}.md`,
            );
            if (response.ok) {
                markdownContent = await response.text();
                frontmatter = parseFrontmatter(markdownContent)
                parsedMarkdown = parseMarkdown(markdownContent);
            } else {
                console.error("Failed to fetch Markdown content");
            }
        } catch (error) {
            console.error("Error fetching Markdown content:", error);
        }
    });

    afterUpdate(reRenderMath);
</script>

<article bind:this={articleElement} on:change={parsedMarkdown}>
    {#if parsedMarkdown}
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.author} - {frontmatter.date}</h2>
        {@html parsedMarkdown}
    {/if}
</article>

<style>
    /* Todo: style frontmatter */
</style>
