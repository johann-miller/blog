<script>
    import { renderMath } from "$lib/renderMath.js"
    import contentData from '../data/content.json';

    let content = contentData.content;
</script>

<h1>Drew's mathematics blog</h1>

<div use:renderMath>
    {@html content}
</div>
