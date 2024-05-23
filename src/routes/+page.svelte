<script>
    import { afterUpdate } from "svelte";
    import { renderMath } from "$lib/renderMath.js"

    let container;

    afterUpdate(() => {
        if (container) {
            renderMath(container)
        }
    });
</script>

<h1>Drew's mathematics blog</h1>

<a href="/topics">Go to topics</a>

<div bind:this={container}>
    <p>Some math: $g \in G$</p>
</div>
