<script>
    import { onMount, afterUpdate } from "svelte";
    import { page } from "$app/stores";
    import { parseMarkdown } from "$lib/markdownParser.js";
    import { renderMath } from "$lib/renderMath.js";
    import "../../../../style/global.css";

    // Bind articleElement to the article tag
    let articleElement;
    let params;
    $: params = $page.params;

    // export let data;
    export let markdownContent = "";

    // Function to re-render KaTeX math on updated content
    function reRenderMath() {
        if (articleElement) {
            renderMath(articleElement);
        }
    }

    onMount(async () => {
        try {
            const response = await fetch(
                `/topics/${params.topic}/${params.slug}.md`,
            );
            if (response.ok) {
                markdownContent = await response.text();
                // console.log("Fetched markdown content: " + `/topics/${params.topic}/${params.slug}.md`);
                markdownContent = parseMarkdown(markdownContent)
            } else {
                console.error("Failed to fetch Markdown content");
            }
        } catch (error) {
            console.error("Error fetching Markdown content:", error);
        }
    });

    afterUpdate(reRenderMath);
</script>

<article bind:this={articleElement} on:change={markdownContent} use:renderMath>
    {@html markdownContent}
</article>
