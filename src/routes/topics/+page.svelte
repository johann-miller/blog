<script>
    import { afterUpdate } from "svelte";
    import { renderMath } from "$lib/renderMath.js";

    let container;

    afterUpdate(() => {
        if (container) {
            renderMath(container);
        }
    });
</script>

<h1>Topics</h1>
<a href="/">Go home</a>

<ul bind:this={container}>
    <li>Calculus $\int$</li>
    <li>Trigonometry $\measuredangle$</li>
    <li>Algebra $x$</li>
</ul>
