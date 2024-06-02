<script>
    import { renderMath } from "$lib/renderMath.js"
    import contentData from '../data/content.json';

    let content = contentData.content;
</script>

<h1>Drew's mathematics blog</h1>

<article id="main" use:renderMath>
    {@html content}
</article>

<style>
    #main {
        width: 48rem;
        font-size: 1.2rem;
        line-height: 2;
    }
</style>
