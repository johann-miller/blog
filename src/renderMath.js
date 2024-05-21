// renderMath.js

import { afterUpdate } from '@sveltejs/kit';

export function renderMath() {
    renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false},
            {left: '\\(', right: '\\)', display: false},
            {left: '\\[', right: '\\]', display: true}
        ],
        // • rendering keys, e.g.:
        throwOnError: false
    });
}

// Trigger the rendering logic after every update
afterUpdate(renderMath);

// Initial rendering when the DOM is ready
document.addEventListener('DOMContentLoaded', renderMath);
