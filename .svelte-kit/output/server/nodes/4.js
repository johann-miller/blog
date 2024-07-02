import * as universal from '../entries/pages/topics/_topic_/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/topics/_topic_/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/topics/[topic]/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.By9b0JzR.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/chunks/index.BVOkSfYf.js","_app/immutable/chunks/stores.5x4v5jBe.js","_app/immutable/chunks/entry.CwHr88C2.js","_app/immutable/chunks/renderMath.QKDyeKQl.js"];
export const stylesheets = ["_app/immutable/assets/4.CGTwp-D5.css","_app/immutable/assets/global.nI9tV9vU.css"];
export const fonts = [];
