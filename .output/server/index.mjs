globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/contact-dpQ_76yX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-dZysX0iTr4XSwHr8ZkaK4rbPFKc\"",
		"mtime": "2026-10-06T03:38:21.262Z",
		"size": 175,
		"path": "../public/assets/contact-dpQ_76yX.js"
	},
	"/assets/about-BpQvjC9L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b0-87tlrKQjHmA5g7rg4ka2sgfncC4\"",
		"mtime": "2026-10-06T03:38:21.257Z",
		"size": 944,
		"path": "../public/assets/about-BpQvjC9L.js"
	},
	"/assets/collection-Bo5xJUCP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"400-1zo4LAz6M3gnvV58WptqN5EqK9U\"",
		"mtime": "2026-10-06T03:38:21.259Z",
		"size": 1024,
		"path": "../public/assets/collection-Bo5xJUCP.js"
	},
	"/assets/events-DbcrI0hm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-0EfZafb9jytqa/1d7jkrQBmN4HM\"",
		"mtime": "2026-10-06T03:38:21.263Z",
		"size": 184,
		"path": "../public/assets/events-DbcrI0hm.js"
	},
	"/assets/eventpottery-qX0wmKBb.jpeg": {
		"type": "image/jpeg",
		"etag": "\"33c59-l1ccrmhgfLYcB/1TtH5jPuwhQsY\"",
		"mtime": "2026-10-06T03:38:21.282Z",
		"size": 212057,
		"path": "../public/assets/eventpottery-qX0wmKBb.jpeg"
	},
	"/assets/jewelry-products-DKFVsXgO.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bf42-+mKjzPgC+BuSu49sTwk+fLVOv4c\"",
		"mtime": "2026-10-06T03:38:21.286Z",
		"size": 245570,
		"path": "../public/assets/jewelry-products-DKFVsXgO.jpg"
	},
	"/assets/home-sections-BB_SNLzQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f12-ikASaHHssuCTqvqTCIIyVjH9f0U\"",
		"mtime": "2026-10-06T03:38:21.264Z",
		"size": 7954,
		"path": "../public/assets/home-sections-BB_SNLzQ.js"
	},
	"/assets/hero-dreamcatchers-DS5nL1aU.jpg": {
		"type": "image/jpeg",
		"etag": "\"57203-hFRS/SggCmihh4FkR75psGuWL58\"",
		"mtime": "2026-10-06T03:38:21.285Z",
		"size": 356867,
		"path": "../public/assets/hero-dreamcatchers-DS5nL1aU.jpg"
	},
	"/assets/marketablee-_Ci9-i8p.jpeg": {
		"type": "image/jpeg",
		"etag": "\"25879-iLJwyMhzPqLPwDeB3ISJc3717ts\"",
		"mtime": "2026-10-06T03:38:21.293Z",
		"size": 153721,
		"path": "../public/assets/marketablee-_Ci9-i8p.jpeg"
	},
	"/assets/preload-helper-dslZfpUr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1629-ljQ4be4RmZK5Mn133489+rzJ5+0\"",
		"mtime": "2026-10-06T03:38:21.265Z",
		"size": 5673,
		"path": "../public/assets/preload-helper-dslZfpUr.js"
	},
	"/assets/products._productId-BaDYbhiA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41a-Nk3zAm6/R44ZI1Aa0o7UdKvafT4\"",
		"mtime": "2026-10-06T03:38:21.267Z",
		"size": 1050,
		"path": "../public/assets/products._productId-BaDYbhiA.js"
	},
	"/assets/products._productId-CDRrB8jI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1229-9H1zDCwbs5J24re9R3Ep4ZegBJc\"",
		"mtime": "2026-10-06T03:38:21.268Z",
		"size": 4649,
		"path": "../public/assets/products._productId-CDRrB8jI.js"
	},
	"/assets/products-D-PhgSMP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34aa4-FjE0C6W35QPhBbRd/X64GnMUHqU\"",
		"mtime": "2026-10-06T03:38:21.266Z",
		"size": 215716,
		"path": "../public/assets/products-D-PhgSMP.js"
	},
	"/assets/index-3nnGX0H-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53e86-qybqWhHiNrMA703Jb5ScYBS6Eyg\"",
		"mtime": "2026-10-06T03:38:21.256Z",
		"size": 343686,
		"path": "../public/assets/index-3nnGX0H-.js"
	},
	"/assets/styles-CR8DmSXz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15399-WxGKAiR7qXRCtlmjz1b0PZFJWUI\"",
		"mtime": "2026-10-06T03:38:21.299Z",
		"size": 86937,
		"path": "../public/assets/styles-CR8DmSXz.css"
	},
	"/assets/f9d34bf4-ed6d-4bfc-bb86-dfb536640d86-C6V-pEBn.png": {
		"type": "image/png",
		"etag": "\"e27d0-dX+3Qw2jrZ6JAVd0NIaj9+wFv3Y\"",
		"mtime": "2026-10-06T03:38:21.284Z",
		"size": 927696,
		"path": "../public/assets/f9d34bf4-ed6d-4bfc-bb86-dfb536640d86-C6V-pEBn.png"
	},
	"/assets/routes-BQGWxEWS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"141-yxLsaZA9x7SFlhZXgSA/AZR/sIg\"",
		"mtime": "2026-10-06T03:38:21.270Z",
		"size": 321,
		"path": "../public/assets/routes-BQGWxEWS.js"
	},
	"/assets/workshop-stories-XV1AVDN-.jpg": {
		"type": "image/jpeg",
		"etag": "\"44ccd-gYJ3QBfrybqgfTgg0CwHSVF7wYc\"",
		"mtime": "2026-10-06T03:38:21.301Z",
		"size": 281805,
		"path": "../public/assets/workshop-stories-XV1AVDN-.jpg"
	},
	"/assets/pottery-CfHMMAgE.jpeg": {
		"type": "image/jpeg",
		"etag": "\"175573-tKOUUlQdgCL7wYmAjB/C2dXqVb0\"",
		"mtime": "2026-10-06T03:38:21.298Z",
		"size": 1529203,
		"path": "../public/assets/pottery-CfHMMAgE.jpeg"
	},
	"/assets/dreamcathcer-DE9BrFsQ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1f6a35-N9JwxK8+DwQcq9luhDkd0O4Pppg\"",
		"mtime": "2026-10-06T03:38:21.278Z",
		"size": 2058805,
		"path": "../public/assets/dreamcathcer-DE9BrFsQ.jpeg"
	},
	"/assets/ef541db276f467639d9b757ffcff17a4-D9XfvmIp.png": {
		"type": "image/png",
		"etag": "\"1853b0-jflwZ6Dph3Oe0LchFVRywEvYC48\"",
		"mtime": "2026-10-06T03:38:21.280Z",
		"size": 1594288,
		"path": "../public/assets/ef541db276f467639d9b757ffcff17a4-D9XfvmIp.png"
	},
	"/assets/crocet-Xcq_oKbQ.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ff75a-OWomrvLs6x2GHYMuAHyAf8pc7ho\"",
		"mtime": "2026-10-06T03:38:21.275Z",
		"size": 2094938,
		"path": "../public/assets/crocet-Xcq_oKbQ.jpeg"
	},
	"/fonts/MODERNE SANS.woff": {
		"type": "font/woff",
		"etag": "\"2dbc-eTuEoaZ/vdzrJD21ClGbut1VPs0\"",
		"mtime": "2026-09-09T15:18:43.255Z",
		"size": 11708,
		"path": "../public/fonts/MODERNE SANS.woff"
	},
	"/fonts/Ogg-Bold.ttf": {
		"type": "font/ttf",
		"etag": "\"8534-NcNHMfFIqe2TfVubHSj/zBaypIg\"",
		"mtime": "2026-09-23T13:44:12.581Z",
		"size": 34100,
		"path": "../public/fonts/Ogg-Bold.ttf"
	},
	"/fonts/Ogg-Light.ttf": {
		"type": "font/ttf",
		"etag": "\"8324-hlz5owcZCxnHr1HFEJ9BXwsQLMQ\"",
		"mtime": "2026-09-23T13:44:12.603Z",
		"size": 33572,
		"path": "../public/fonts/Ogg-Light.ttf"
	},
	"/fonts/Ogg-Medium.ttf": {
		"type": "font/ttf",
		"etag": "\"8668-oPA/0GBzN3Tp1azBSKLiBsIwYVo\"",
		"mtime": "2026-09-23T13:44:12.623Z",
		"size": 34408,
		"path": "../public/fonts/Ogg-Medium.ttf"
	},
	"/fonts/Ogg-Regular.ttf": {
		"type": "font/ttf",
		"etag": "\"81f4-qTZmZ9tMs/L1h2BG97Y0aj8a8PI\"",
		"mtime": "2026-09-23T13:44:12.641Z",
		"size": 33268,
		"path": "../public/fonts/Ogg-Regular.ttf"
	},
	"/assets/storefront-Dj0kKDGF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4f302-ivL7o9UG5W7CKRxLjhWFNNyY78g\"",
		"mtime": "2026-10-06T03:38:21.271Z",
		"size": 324354,
		"path": "../public/assets/storefront-Dj0kKDGF.js"
	},
	"/assets/jwellry-BOBYzKBe.jpeg": {
		"type": "image/jpeg",
		"etag": "\"21b654-uB6Ztkb2xMgflyr2fUQF6Acjv/I\"",
		"mtime": "2026-10-06T03:38:21.290Z",
		"size": 2209364,
		"path": "../public/assets/jwellry-BOBYzKBe.jpeg"
	},
	"/assets/outside-seating-BlUCwLAt.jpeg": {
		"type": "image/jpeg",
		"etag": "\"24ba67-IzjmDHbYsM/IGyJ3vjMovAMqRfs\"",
		"mtime": "2026-10-06T03:38:21.296Z",
		"size": 2407015,
		"path": "../public/assets/outside-seating-BlUCwLAt.jpeg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_oc0t4y = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_oc0t4y
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
