import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BrqUx3zB.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/chunks/index.BVOkSfYf.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/renderMath.QKDyeKQl.js","_app/immutable/chunks/postsData.DyuwI9Ar.js"];
export const stylesheets = ["_app/immutable/assets/0.DGoEU9Tr.css","_app/immutable/assets/global.nI9tV9vU.css"];
export const fonts = [];
