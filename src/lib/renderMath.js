export function renderMath(container) {
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