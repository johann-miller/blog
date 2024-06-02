export function renderMath(node) {
  renderMathInElement(node, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    throwOnError: false,
  });

  return {
    update(newParams) {
      renderMathInElement(node, newParams);
    },
    destroy() {
      // Cleanup if necessary when the element is removed from the DOM
    }
  };
}