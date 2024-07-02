

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C1pLdQkc.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/chunks/index.BVOkSfYf.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/renderMath.QKDyeKQl.js"];
export const stylesheets = ["_app/immutable/assets/global.nI9tV9vU.css"];
export const fonts = [];
