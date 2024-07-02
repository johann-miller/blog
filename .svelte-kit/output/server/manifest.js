export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","topics/algebra/post1.md","topics/calculus/post2.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown"},
	_: {
		client: {"start":"_app/immutable/entry/start.kzoEec3I.js","app":"_app/immutable/entry/app.CVz_CsrZ.js","imports":["_app/immutable/entry/start.kzoEec3I.js","_app/immutable/chunks/entry.CwHr88C2.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/entry/app.CVz_CsrZ.js","_app/immutable/chunks/scheduler.BoTHuIgY.js","_app/immutable/chunks/index.BVOkSfYf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
