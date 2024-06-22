<script>
    import { renderMath } from "$lib/renderMath.js";
    import contentData from "../data/content.json";
    import "../style/global.css";
</script>

<article use:renderMath>
    <h1>Lorem ipsum</h1>
    {#each contentData.blogPost as paragraph}
        <p>{paragraph}</p>
    {/each}
</article>

<style>
</style>
