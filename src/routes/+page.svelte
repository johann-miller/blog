<script>
    import { afterUpdate } from "svelte";

    let container;

    function renderMath() {
        renderMathInElement(container, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false },
                { left: "\\[", right: "\\]", display: true },
            ],
            // • rendering keys, e.g.:
            throwOnError: false,
        });
    }

    afterUpdate(renderMath);
</script>

<h1>Drew's mathematics blog</h1>

<a href="/topic">Go to topic</a>

<div bind:this={container}>
    <!-- Your content goes here -->
    <a href="#">Click me</a>
    <p>Some math: $E=mc^2$</p>
</div>
