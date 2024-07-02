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
    let topic;
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
            topic = params.topic;

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
        <h1 class="title">{frontmatter.title}</h1>
        <h2 class="subtitle">{frontmatter.author} - {frontmatter.date}</h2>
        <div class="local-navigation-bar">
            <a href="/">Home</a>
            <span>&gt</span>
            <a href="/topics">Topics</a>
            <span>&gt</span>
            <a href="/topics#{topic}">{topic}</a>
        </div>
        {@html parsedMarkdown}
    {/if}
</article>

<style>
    /* Todo: style frontmatter */
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: normal;
    }

    .local-navigation-bar {
        font-size: 0.8rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #bebebe;
    }

    .local-navigation-bar a {
        text-decoration: none;
        color: grey;
        text-transform: capitalize;
        transition: color 0.1s ease;
    }

    .local-navigation-bar a:hover {
        color: black;
    }

    @media print {
        .title {
            margin-bottom: 0.5cm;
        }
        .subtitle {
            text-align: center;
            font-size: 11pt;
        }
        .local-navigation-bar {
            display: none;
        }
    }
</style>
