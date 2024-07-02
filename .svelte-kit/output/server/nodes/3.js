

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/topics/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B31kH-jn.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/chunks/index.BVOkSfYf.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/renderMath.QKDyeKQl.js","_app/immutable/chunks/postsData.DyuwI9Ar.js"];
export const stylesheets = ["_app/immutable/assets/3.imH6HqJI.css"];
export const fonts = [];
