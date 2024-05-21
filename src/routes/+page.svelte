<script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js"
    integrity="sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk"
    crossorigin="anonymous"
    onload="renderMathInElement(document.body);"
>
    import { onMount } from "svelte";

    function render(event) {
        renderMathInElement(document.body, {
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

    onMount(() => render());
</script>

<h1>Drew's mathematics blog</h1>

<span>Here is an example of inline math $x+1=2$</span>
<a href="/test">Go to topic</a>
