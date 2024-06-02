<script>
    import { renderMath } from "$lib/renderMath.js"
    import contentData from '../data/content.json';
    import '../style/global.css'

    let content = contentData.content;
</script>

<h1>Drew's blog</h1>

<article use:renderMath>
    {@html content}
</article>

<style>

</style>
