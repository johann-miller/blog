<script>
    import { renderMath } from "$lib/renderMath.js";
    import contentData from "../data/content.json";
    import "../style/global.css";
</script>

<article use:renderMath>
    <h2>Lorem ipsum</h2>
    {#each contentData.blogPost as paragraph}
    <p>{paragraph}</p>
    {/each}
</article>

<style>
    
</style>
