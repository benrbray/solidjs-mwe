/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/solid-js/dist/dom/index.js":
/*!*************************************************!*\
  !*** ./node_modules/solid-js/dist/dom/index.js ***!
  \*************************************************/
/*! exports provided: For, Index, Match, Show, Suspense, SuspenseList, Switch, createComponent, currentContext, effect, Dynamic, Portal, assign, classList, clearDelegatedEvents, delegateEvents, escape, generateHydrationEventsScript, getHydrationKey, getNextElement, getNextMarker, hydrate, insert, memo, render, renderDOMToString, renderToString, runHydrationEvents, setAttribute, setAttributeNS, spread, ssr, ssrClassList, ssrSpread, ssrStyle, style, template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dynamic", function() { return Dynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classList", function() { return classList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDelegatedEvents", function() { return clearDelegatedEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegateEvents", function() { return delegateEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHydrationEventsScript", function() { return generateHydrationEventsScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHydrationKey", function() { return getHydrationKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return getNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMarker", function() { return getNextMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return memo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDOMToString", function() { return renderDOMToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToString", function() { return renderToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runHydrationEvents", function() { return runHydrationEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttributeNS", function() { return setAttributeNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spread", function() { return spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssr", function() { return ssr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrClassList", function() { return ssrClassList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrSpread", function() { return ssrSpread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrStyle", function() { return ssrStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/solid-js/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "For", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["For"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Index"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Match"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Show"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Suspense"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["SuspenseList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentContext", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getContextOwner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"]; });




const Types = {
  ATTRIBUTE: "attribute",
  PROPERTY: "property"
},
      Attributes = {
  href: {
    type: Types.ATTRIBUTE
  },
  style: {
    type: Types.PROPERTY,
    alias: "style.cssText"
  },
  for: {
    type: Types.PROPERTY,
    alias: "htmlFor"
  },
  class: {
    type: Types.PROPERTY,
    alias: "className"
  },
  spellCheck: {
    type: Types.PROPERTY,
    alias: "spellcheck"
  },
  allowFullScreen: {
    type: Types.PROPERTY,
    alias: "allowFullscreen"
  },
  autoCapitalize: {
    type: Types.PROPERTY,
    alias: "autocapitalize"
  },
  autoFocus: {
    type: Types.PROPERTY,
    alias: "autofocus"
  },
  autoPlay: {
    type: Types.PROPERTY,
    alias: "autoplay"
  }
},
      SVGAttributes = {
  className: {
    type: Types.ATTRIBUTE,
    alias: "class"
  },
  htmlFor: {
    type: Types.ATTRIBUTE,
    alias: "for"
  },
  tabIndex: {
    type: Types.ATTRIBUTE,
    alias: "tabindex"
  },
  allowReorder: {
    type: Types.ATTRIBUTE
  },
  attributeName: {
    type: Types.ATTRIBUTE
  },
  attributeType: {
    type: Types.ATTRIBUTE
  },
  autoReverse: {
    type: Types.ATTRIBUTE
  },
  baseFrequency: {
    type: Types.ATTRIBUTE
  },
  calcMode: {
    type: Types.ATTRIBUTE
  },
  clipPathUnits: {
    type: Types.ATTRIBUTE
  },
  contentScriptType: {
    type: Types.ATTRIBUTE
  },
  contentStyleType: {
    type: Types.ATTRIBUTE
  },
  diffuseConstant: {
    type: Types.ATTRIBUTE
  },
  edgeMode: {
    type: Types.ATTRIBUTE
  },
  externalResourcesRequired: {
    type: Types.ATTRIBUTE
  },
  filterRes: {
    type: Types.ATTRIBUTE
  },
  filterUnits: {
    type: Types.ATTRIBUTE
  },
  gradientTransform: {
    type: Types.ATTRIBUTE
  },
  gradientUnits: {
    type: Types.ATTRIBUTE
  },
  kernelMatrix: {
    type: Types.ATTRIBUTE
  },
  kernelUnitLength: {
    type: Types.ATTRIBUTE
  },
  keyPoints: {
    type: Types.ATTRIBUTE
  },
  keySplines: {
    type: Types.ATTRIBUTE
  },
  keyTimes: {
    type: Types.ATTRIBUTE
  },
  lengthAdjust: {
    type: Types.ATTRIBUTE
  },
  limitingConeAngle: {
    type: Types.ATTRIBUTE
  },
  markerHeight: {
    type: Types.ATTRIBUTE
  },
  markerUnits: {
    type: Types.ATTRIBUTE
  },
  maskContentUnits: {
    type: Types.ATTRIBUTE
  },
  maskUnits: {
    type: Types.ATTRIBUTE
  },
  numOctaves: {
    type: Types.ATTRIBUTE
  },
  pathLength: {
    type: Types.ATTRIBUTE
  },
  patternContentUnits: {
    type: Types.ATTRIBUTE
  },
  patternTransform: {
    type: Types.ATTRIBUTE
  },
  patternUnits: {
    type: Types.ATTRIBUTE
  },
  pointsAtX: {
    type: Types.ATTRIBUTE
  },
  pointsAtY: {
    type: Types.ATTRIBUTE
  },
  pointsAtZ: {
    type: Types.ATTRIBUTE
  },
  preserveAlpha: {
    type: Types.ATTRIBUTE
  },
  preserveAspectRatio: {
    type: Types.ATTRIBUTE
  },
  primitiveUnits: {
    type: Types.ATTRIBUTE
  },
  refX: {
    type: Types.ATTRIBUTE
  },
  refY: {
    type: Types.ATTRIBUTE
  },
  repeatCount: {
    type: Types.ATTRIBUTE
  },
  repeatDur: {
    type: Types.ATTRIBUTE
  },
  requiredExtensions: {
    type: Types.ATTRIBUTE
  },
  requiredFeatures: {
    type: Types.ATTRIBUTE
  },
  specularConstant: {
    type: Types.ATTRIBUTE
  },
  specularExponent: {
    type: Types.ATTRIBUTE
  },
  spreadMethod: {
    type: Types.ATTRIBUTE
  },
  startOffset: {
    type: Types.ATTRIBUTE
  },
  stdDeviation: {
    type: Types.ATTRIBUTE
  },
  stitchTiles: {
    type: Types.ATTRIBUTE
  },
  surfaceScale: {
    type: Types.ATTRIBUTE
  },
  systemLanguage: {
    type: Types.ATTRIBUTE
  },
  tableValues: {
    type: Types.ATTRIBUTE
  },
  targetX: {
    type: Types.ATTRIBUTE
  },
  targetY: {
    type: Types.ATTRIBUTE
  },
  textLength: {
    type: Types.ATTRIBUTE
  },
  viewBox: {
    type: Types.ATTRIBUTE
  },
  viewTarget: {
    type: Types.ATTRIBUTE
  },
  xChannelSelector: {
    type: Types.ATTRIBUTE
  },
  yChannelSelector: {
    type: Types.ATTRIBUTE
  },
  zoomAndPan: {
    type: Types.ATTRIBUTE
  }
};
const NonComposedEvents = new Set(["abort", "animationstart", "animationend", "animationiteration", "blur", "change", "copy", "cut", "error", "focus", "gotpointercapture", "load", "loadend", "loadstart", "lostpointercapture", "mouseenter", "mouseleave", "paste", "progress", "reset", "scroll", "select", "submit", "transitionstart", "transitioncancel", "transitionend", "transitionrun"]);

function memo(fn, equal) {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createMemo"])(fn, undefined, equal);
}

function reconcileArrays(parentNode, a, b) {
  let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
      while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) parentNode.removeChild(a[aStart]);
        aStart++;
      }
    } else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    } else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    } else if (aEnd - aStart === 1 && bEnd - bStart === 1) {
      if (map && map.has(a[aStart]) || a[aStart].parentNode !== parentNode) {
        parentNode.insertBefore(b[bStart], bEnd < bLength ? b[bEnd] : after);
      } else parentNode.replaceChild(b[bStart], a[aStart]);
      break;
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = a[--aEnd].nextSibling;
      parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
      parentNode.insertBefore(b[--bEnd], node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      if (map.has(a[aStart])) {
        const index = map.get(a[aStart]);
        if (bStart < index && index < bEnd) {
          let i = aStart,
              sequence = 1;
          while (++i < aEnd && i < bEnd) {
            if (!map.has(a[i]) || map.get(a[i]) !== index + sequence) break;
            sequence++;
          }
          if (sequence > index - bStart) {
            const node = a[aStart];
            while (bStart < index) parentNode.insertBefore(b[bStart++], node);
          } else parentNode.replaceChild(b[bStart++], a[aStart++]);
        } else aStart++;
      } else parentNode.removeChild(a[aStart++]);
    }
  }
}

const eventRegistry = new Set(),
      hydration = globalThis._$HYDRATION || (globalThis._$HYDRATION = {});
function render(code, element) {
  let disposer;
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createRoot"])(dispose => {
    disposer = dispose;
    insert(element, code(), element.firstChild ? null : undefined);
  });
  return disposer;
}
function renderToString(code, options = {}) {
  options = {
    timeoutMs: 30000,
    ...options
  };
  hydration.context = {
    id: "0",
    count: 0
  };
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createRoot"])(() => {
    const rendered = code();
    if (typeof rendered === "object" && "then" in rendered) {
      const timeout = new Promise((_, reject) => setTimeout(() => reject("renderToString timed out"), options.timeoutMs));
      return Promise.race([rendered, timeout]).then(resolveSSRNode);
    }
    return resolveSSRNode(rendered);
  });
}
function renderDOMToString(code, options = {}) {
  options = {
    timeoutMs: 30000,
    ...options
  };
  hydration.context = {
    id: "0",
    count: 0
  };
  const container = document.createElement("div");
  document.body.appendChild(container);
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createRoot"])(d1 => {
    const rendered = code();
    function resolve(rendered) {
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createRoot"])(d2 => (insert(container, rendered), d1(), d2()));
      const html = container.innerHTML;
      document.body.removeChild(container);
      return html;
    }
    if (typeof rendered === "object" && "then" in rendered) {
      const timeout = new Promise((_, reject) => setTimeout(() => reject("renderToString timed out"), options.timeoutMs));
      return Promise.race([rendered, timeout]).then(resolve);
    }
    return resolve(rendered);
  });
}
function hydrate(code, element) {
  hydration.context = {
    id: "0",
    count: 0,
    registry: {}
  };
  const templates = element.querySelectorAll(`*[_hk]`);
  Array.prototype.reduce.call(templates, (memo, node) => {
    const id = node.getAttribute("_hk"),
          list = memo[id] || (memo[id] = []);
    list.push(node);
    return memo;
  }, hydration.context.registry);
  const dispose = render(code, element);
  delete hydration.context;
  return dispose;
}
function template(html, check, isSVG) {
  const t = document.createElement("template");
  t.innerHTML = html;
  if (check && t.innerHTML.split("<").length - 1 !== check) throw `Template html does not match input:\n${t.innerHTML}\n\n${html}`;
  let node = t.content.firstChild;
  if (isSVG) node = node.firstChild;
  return node;
}
function delegateEvents(eventNames) {
  for (let i = 0, l = eventNames.length; i < l; i++) {
    const name = eventNames[i];
    if (!eventRegistry.has(name)) {
      eventRegistry.add(name);
      document.addEventListener(name, eventHandler);
    }
  }
}
function clearDelegatedEvents() {
  for (let name of eventRegistry.keys()) document.removeEventListener(name, eventHandler);
  eventRegistry.clear();
}
function setAttribute(node, name, value) {
  if (value === false || value == null) node.removeAttribute(name);else node.setAttribute(name, value);
}
function setAttributeNS(node, namespace, name, value) {
  if (value === false || value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
}
function classList(node, value, prev) {
  const classKeys = Object.keys(value);
  for (let i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key],
          classNames = key.split(/\s+/);
    if (!key || prev && prev[key] === classValue) continue;
    for (let j = 0, nameLen = classNames.length; j < nameLen; j++) node.classList.toggle(classNames[j], classValue);
  }
  return value;
}
function style(node, value, prev) {
  const nodeStyle = node.style;
  if (typeof value === "string") return nodeStyle.cssText = value;
  let v, s;
  if (prev != null && typeof prev !== "string") {
    for (s in value) {
      v = value[s];
      v !== prev[s] && nodeStyle.setProperty(s, v);
    }
    for (s in prev) {
      value[s] == null && nodeStyle.removeProperty(s);
    }
  } else {
    for (s in value) nodeStyle.setProperty(s, value[s]);
  }
  return value;
}
function spread(node, accessor, isSVG, skipChildren) {
  if (typeof accessor === "function") {
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(current => spreadExpression(node, accessor(), current, isSVG, skipChildren));
  } else spreadExpression(node, accessor, undefined, isSVG, skipChildren);
}
function insert(parent, accessor, marker, initial) {
  if (marker !== undefined && !initial) initial = [];
  if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(current => insertExpression(parent, accessor(), current, marker), initial);
}
function assign(node, props, isSVG, skipChildren, prevProps = {}) {
  let info;
  for (const prop in props) {
    if (prop === "children") {
      if (!skipChildren) insertExpression(node, props.children);
      continue;
    }
    const value = props[prop];
    if (value === prevProps[prop]) continue;
    if (prop === "style") {
      style(node, value, prevProps[prop]);
    } else if (prop === "classList") {
      classList(node, value, prevProps[prop]);
    } else if (prop === "ref") {
      value(node);
    } else if (prop === "on") {
      for (const eventName in value) node.addEventListener(eventName, value[eventName]);
    } else if (prop === "onCapture") {
      for (const eventName in value) node.addEventListener(eventName, value[eventName], true);
    } else if (prop.slice(0, 2) === "on") {
      const lc = prop.toLowerCase();
      if (!NonComposedEvents.has(lc.slice(2))) {
        const name = lc.slice(2);
        if (Array.isArray(value)) {
          node[`__${name}`] = value[0];
          node[`__${name}Data`] = value[1];
        } else node[`__${name}`] = value;
        delegateEvents([name]);
      } else node[lc] = value;
    } else if (info = Attributes[prop]) {
      if (info.type === "attribute") {
        setAttribute(node, prop, value);
      } else node[info.alias] = value;
    } else if (isSVG || prop.indexOf("-") > -1 || prop.indexOf(":") > -1) {
      const ns = prop.indexOf(":") > -1 && SVGNamepace[prop.split(":")[0]];
      if (ns) setAttributeNS(node, ns, prop, value);else if (info = SVGAttributes[prop]) {
        if (info.alias) setAttribute(node, info.alias, value);else setAttribute(node, prop, value);
      } else setAttribute(node, prop.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`), value);
    } else node[prop] = value;
    prevProps[prop] = value;
  }
}
function ssr(t, ...nodes) {
  if (!nodes.length) return {
    t
  };
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (typeof n === "function") nodes[i] = memo(() => resolveSSRNode(n()));
  }
  return {
    t: () => {
      let result = "";
      for (let i = 0; i < t.length; i++) {
        result += t[i];
        const node = nodes[i];
        if (node !== undefined) result += resolveSSRNode(node);
      }
      return result;
    }
  };
}
function ssrClassList(value) {
  let classKeys = Object.keys(value),
      result = "";
  for (let i = 0, len = classKeys.length; i < len; i++) {
    const key = classKeys[i],
          classValue = !!value[key];
    if (!key || !classValue) continue;
    i && (result += " ");
    result += key;
  }
  return result;
}
function ssrStyle(value) {
  if (typeof value === "string") return value;
  let result = "";
  const k = Object.keys(value);
  for (let i = 0; i < k.length; i++) {
    const s = k[i];
    if (i) result += ";";
    result += `${s}:${escape(value[s], true)}`;
  }
  return result;
}
function ssrSpread(props, isSVG) {
  return () => {
    if (typeof props === "function") props = props();
    const keys = Object.keys(props);
    let result = "";
    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i];
      if (prop === "children") {
        console.warn(`SSR currently does not support spread children.`);
        continue;
      }
      const value = props[prop];
      if (prop === "style") {
        result += `style="${ssrStyle(value)}"`;
      } else if (prop === "classList") {
        result += `class="${ssrClassList(value)}"`;
      } else {
        const key = toSSRAttribute(prop, isSVG);
        result += `${key}="${escape(value, true)}"`;
      }
      if (i !== keys.length - 1) result += " ";
    }
    return result;
  };
}
const ATTR_REGEX = /[&<"]/g,
      CONTENT_REGEX = /[&<]/g;
function escape(html, attr) {
  if (typeof html !== "string") return html;
  return html.replace(attr ? ATTR_REGEX : CONTENT_REGEX, m => {
    switch (m) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case '"':
        return "&quot;";
    }
  });
}
function getNextElement(template, isSSR) {
  const hydrate = hydration.context;
  let node, key;
  if (!hydrate || !hydrate.registry || !((key = getHydrationKey()) && hydrate.registry[key] && (node = hydrate.registry[key].shift()))) {
    const el = template.cloneNode(true);
    if (isSSR && hydrate) el.setAttribute("_hk", getHydrationKey());
    return el;
  }
  if (hydration && hydration.completed) hydration.completed.add(node);
  return node;
}
function getNextMarker(start) {
  let end = start,
      count = 0,
      current = [];
  if (hydration.context && hydration.context.registry) {
    while (end) {
      if (end.nodeType === 8) {
        const v = end.nodeValue;
        if (v === "#") count++;else if (v === "/") {
          if (count === 0) return [end, current];
          count--;
        }
      }
      current.push(end);
      end = end.nextSibling;
    }
  }
  return [end, current];
}
function runHydrationEvents(el) {
  if (hydration && hydration.events) {
    const {
      completed,
      events
    } = hydration;
    while (events.length) {
      const [el, e] = events[0];
      if (!completed.has(el)) return;
      eventHandler(e);
      events.shift();
    }
  }
}
function getHydrationKey() {
  return hydration.context.id;
}
function generateHydrationEventsScript(eventNames) {
  return `(()=>{_$HYDRATION={events:[],completed:new WeakSet};const t=e=>e&&e.hasAttribute&&(e.hasAttribute("_hk")&&e||t(e.host&&e.host instanceof Node?e.host:e.parentNode)),e=e=>{let o=e.composedPath&&e.composedPath()[0]||e.target,s=t(o);s&&!_$HYDRATION.completed.has(s)&&_$HYDRATION.events.push([s,e])};["${eventNames.join('","')}"].forEach(t=>document.addEventListener(t,e))})();`;
}
function eventHandler(e) {
  const key = `__${e.type}`;
  let node = e.composedPath && e.composedPath()[0] || e.target;
  if (e.target !== node) {
    Object.defineProperty(e, "target", {
      configurable: true,
      value: node
    });
  }
  Object.defineProperty(e, "currentTarget", {
    configurable: true,
    get() {
      return node;
    }
  });
  while (node !== null) {
    const handler = node[key];
    if (handler) {
      const data = node[`${key}Data`];
      data ? handler(data, e) : handler(e);
      if (e.cancelBubble) return;
    }
    node = node.host && node.host instanceof Node ? node.host : node.parentNode;
  }
}
function spreadExpression(node, props, prevProps = {}, isSVG, skipChildren) {
  if (!skipChildren && "children" in props) {
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
  }
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => assign(node, props, isSVG, true, prevProps));
  return prevProps;
}
function insertExpression(parent, value, current, marker, unwrapArray) {
  while (typeof current === "function") current = current();
  if (value === current) return current;
  const t = typeof value,
        multi = marker !== undefined;
  parent = multi && current[0] && current[0].parentNode || parent;
  if (t === "string" || t === "number") {
    if (t === "number") value = value.toString();
    if (multi) {
      let node = current[0];
      if (node && node.nodeType === 3) {
        node.data = value;
      } else node = document.createTextNode(value);
      current = cleanChildren(parent, current, marker, node);
    } else {
      if (current !== "" && typeof current === "string") {
        current = parent.firstChild.data = value;
      } else current = parent.textContent = value;
    }
  } else if (value == null || t === "boolean") {
    if (hydration.context && hydration.context.registry) return current;
    current = cleanChildren(parent, current, marker);
  } else if (t === "function") {
    Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => current = insertExpression(parent, value(), current, marker));
    return () => current;
  } else if (Array.isArray(value)) {
    const array = [];
    if (normalizeIncomingArray(array, value, unwrapArray)) {
      Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => current = insertExpression(parent, array, current, marker, true));
      return () => current;
    }
    if (hydration.context && hydration.context.registry) return array;
    if (array.length === 0) {
      current = cleanChildren(parent, current, marker);
      if (multi) return current;
    } else {
      if (Array.isArray(current)) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else if (current == null || current === "") {
        appendNodes(parent, array);
      } else {
        reconcileArrays(parent, multi && current || [parent.firstChild], array);
      }
    }
    current = array;
  } else if (value instanceof Node) {
    if (Array.isArray(current)) {
      if (multi) return current = cleanChildren(parent, current, marker, value);
      cleanChildren(parent, current, null, value);
    } else if (current == null || current === "" || !parent.firstChild) {
      parent.appendChild(value);
    } else parent.replaceChild(value, parent.firstChild);
    current = value;
  } else console.warn(`Skipped inserting`, value);
  return current;
}
function normalizeIncomingArray(normalized, array, unwrap) {
  let dynamic = false;
  for (let i = 0, len = array.length; i < len; i++) {
    let item = array[i],
        t;
    if (item instanceof Node) {
      normalized.push(item);
    } else if (item == null || item === true || item === false) ; else if (Array.isArray(item)) {
      dynamic = normalizeIncomingArray(normalized, item) || dynamic;
    } else if ((t = typeof item) === "string") {
      normalized.push(document.createTextNode(item));
    } else if (t === "function") {
      if (unwrap) {
        const idx = item();
        dynamic = normalizeIncomingArray(normalized, Array.isArray(idx) ? idx : [idx]) || dynamic;
      } else {
        normalized.push(item);
        dynamic = true;
      }
    } else normalized.push(document.createTextNode(item.toString()));
  }
  return dynamic;
}
function appendNodes(parent, array, marker) {
  for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
}
function cleanChildren(parent, current, marker, replacement) {
  if (marker === undefined) return parent.textContent = "";
  const node = replacement || document.createTextNode("");
  if (current.length) {
    let inserted = false;
    for (let i = current.length - 1; i >= 0; i--) {
      const el = current[i];
      if (node !== el) {
        const isParent = el.parentNode === parent;
        if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && parent.removeChild(el);
      } else inserted = true;
    }
  } else parent.insertBefore(node, marker);
  return [node];
}
function toSSRAttribute(key, isSVG) {
  if (isSVG) {
    const attr = SVGAttributes[key];
    if (attr) {
      if (attr.alias) key = attr.alias;
    } else key = key.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
  } else {
    const attr = SVGAttributes[key];
    if (attr && attr.alias) key = attr.alias;
    key = key.toLowerCase();
  }
  return key;
}
function resolveSSRNode(node) {
  if (Array.isArray(node)) return node.map(resolveSSRNode).join("");
  const t = typeof node;
  if (node && t === "object") return resolveSSRNode(node.t);
  if (t === "function") return resolveSSRNode(node());
  return t === "string" ? node : JSON.stringify(node);
}

function Portal(props) {
  const {
    useShadow
  } = props,
        container = document.createElement("div"),
        marker = document.createTextNode(""),
        mount = props.mount || document.body,
        renderRoot = useShadow && container.attachShadow ? container.attachShadow({
    mode: "open"
  }) : container;
  Object.defineProperty(container, "host", {
    get() {
      return marker.parentNode;
    }
  });
  insert(renderRoot, Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["sample"])(() => props.children));
  mount.appendChild(container);
  props.ref && props.ref(container);
  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["onCleanup"])(() => mount.removeChild(container));
  return marker;
}
function Dynamic(props) {
  const [p, others] = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["splitProps"])(props, ["component"]);
  return () => {
    const comp = p.component,
          t = typeof comp;
    if (comp) {
      if (t === "function") return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["sample"])(() => comp(others));else if (t === "string") {
        const el = document.createElement(comp);
        spread(el, others);
        return el;
      }
    }
  };
}




/***/ }),

/***/ "./node_modules/solid-js/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/solid-js/dist/index.js ***!
  \*********************************************/
/*! exports provided: $RAW, Dynamic, For, Index, Match, Show, Suspense, SuspenseContext, SuspenseList, Switch, afterEffects, awaitSuspense, cancelCallback, cloneProps, createComponent, createContext, createDeferred, createDependentEffect, createEffect, createMemo, createResource, createResourceState, createRoot, createSignal, createState, equalFn, freeze, getContextOwner, indexArray, isListening, lazy, mapArray, onCleanup, onError, reconcile, requestCallback, sample, setDefaults, splitProps, suspend, unwrap, useContext, useTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$RAW", function() { return $RAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dynamic", function() { return Dynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "For", function() { return For; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return Suspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseContext", function() { return SuspenseContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return SuspenseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterEffects", function() { return afterEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitSuspense", function() { return awaitSuspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelCallback", function() { return cancelCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneProps", function() { return cloneProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return createContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeferred", function() { return createDeferred; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDependentEffect", function() { return createDependentEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEffect", function() { return createEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemo", function() { return createMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResource", function() { return createResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceState", function() { return createResourceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return createRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignal", function() { return createSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createState", function() { return createState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalFn", function() { return equalFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return freeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextOwner", function() { return getContextOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexArray", function() { return indexArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListening", function() { return isListening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapArray", function() { return mapArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCleanup", function() { return onCleanup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reconcile", function() { return reconcile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestCallback", function() { return requestCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaults", function() { return setDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitProps", function() { return splitProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suspend", function() { return suspend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return unwrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return useContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
let taskIdCounter = 1,
    isCallbackScheduled = false,
    isPerformingWork = false,
    taskQueue = [],
    currentTask = null,
    shouldYieldToHost = null,
    yieldInterval = 5,
    deadline = 0,
    maxYieldInterval = 300,
    scheduleCallback = null,
    scheduledCallback = null;
const maxSigned31BitInt = 1073741823;
function setupScheduler() {
  if (window && window.MessageChannel) {
    const channel = new MessageChannel(),
          port = channel.port2;
    scheduleCallback = () => port.postMessage(null);
    channel.port1.onmessage = () => {
      if (scheduledCallback !== null) {
        const currentTime = performance.now();
        deadline = currentTime + yieldInterval;
        const hasTimeRemaining = true;
        try {
          const hasMoreWork = scheduledCallback(hasTimeRemaining, currentTime);
          if (!hasMoreWork) {
            scheduledCallback = null;
          } else port.postMessage(null);
        } catch (error) {
          port.postMessage(null);
          throw error;
        }
      }
    };
  } else {
    let _callback;
    scheduleCallback = () => {
      if (!_callback) {
        _callback = scheduledCallback;
        setTimeout(() => {
          const currentTime = performance.now();
          deadline = currentTime + yieldInterval;
          const hasMoreWork = _callback(true, currentTime);
          _callback = null;
          if (hasMoreWork) scheduleCallback();
        }, 0);
      }
    };
  }
  if (navigator && navigator.scheduling && navigator.scheduling.isInputPending) {
    const scheduling = navigator.scheduling;
    shouldYieldToHost = () => {
      const currentTime = performance.now();
      if (currentTime >= deadline) {
        if (scheduling.isInputPending()) {
          return true;
        }
        return currentTime >= maxYieldInterval;
      } else {
        return false;
      }
    };
  } else {
    shouldYieldToHost = () => performance.now() >= deadline;
  }
}
function enqueue(taskQueue, task) {
  function findIndex() {
    let m = 0;
    let n = taskQueue.length - 1;
    while (m <= n) {
      let k = n + m >> 1;
      let cmp = task.expirationTime - taskQueue[k].expirationTime;
      if (cmp > 0) m = k + 1;else if (cmp < 0) n = k - 1;else return k;
    }
    return m;
  }
  taskQueue.splice(findIndex(), 0, task);
}
function requestCallback(fn, options) {
  if (!scheduleCallback) setupScheduler();
  let startTime = performance.now(),
      timeout = maxSigned31BitInt;
  if (options && options.timeout) timeout = options.timeout;
  const newTask = {
    id: taskIdCounter++,
    fn,
    startTime,
    expirationTime: startTime + timeout
  };
  enqueue(taskQueue, newTask);
  if (!isCallbackScheduled && !isPerformingWork) {
    isCallbackScheduled = true;
    scheduledCallback = flushWork;
    scheduleCallback();
  }
  return newTask;
}
function cancelCallback(task) {
  task.fn = null;
}
function flushWork(hasTimeRemaining, initialTime) {
  isCallbackScheduled = false;
  isPerformingWork = true;
  try {
    return workLoop(hasTimeRemaining, initialTime);
  } finally {
    currentTask = null;
    isPerformingWork = false;
  }
}
function workLoop(hasTimeRemaining, initialTime) {
  let currentTime = initialTime;
  currentTask = taskQueue[0] || null;
  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
      break;
    }
    const callback = currentTask.fn;
    if (callback !== null) {
      currentTask.fn = null;
      const didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
      callback(didUserCallbackTimeout);
      currentTime = performance.now();
      if (currentTask === taskQueue[0]) {
        taskQueue.shift();
      }
    } else taskQueue.shift();
    currentTask = taskQueue[0] || null;
  }
  return currentTask !== null;
}

const equalFn = (a, b) => a === b;
const ERROR = Symbol("error");
const NOTPENDING = {};
const STALE = 1;
const PENDING = 2;
const UNOWNED = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
};
let Owner = null;
let Listener = null;
let Pending = null;
let Updates = null;
let Afters = [];
let ExecCount = 0;
function createRoot(fn, detachedOwner) {
  detachedOwner && (Owner = detachedOwner);
  const listener = Listener,
        owner = Owner,
        root = fn.length === 0 ? UNOWNED : {
    owned: null,
    cleanups: null,
    context: null,
    owner
  };
  Owner = root;
  Listener = null;
  let result;
  try {
    result = fn(() => cleanNode(root));
  } catch (err) {
    const fns = lookup(Owner, ERROR);
    if (!fns) throw err;
    fns.forEach(f => f(err));
  } finally {
    while (Afters.length) Afters.shift()();
    Listener = listener;
    Owner = owner;
  }
  return result;
}
function createSignal(value, areEqual) {
  const s = {
    value,
    observers: null,
    observerSlots: null,
    pending: NOTPENDING,
    comparator: areEqual ? typeof areEqual === "function" ? areEqual : equalFn : undefined
  };
  return [readSignal.bind(s), writeSignal.bind(s)];
}
function createEffect(fn, value) {
  updateComputation(createComputation(fn, value));
}
function createDependentEffect(fn, deps, defer) {
  const resolved = Array.isArray(deps) ? callAll(deps) : deps;
  defer = !!defer;
  createEffect(value => {
    const listener = Listener;
    resolved();
    if (defer) defer = false;else {
      Listener = null;
      value = fn(value);
      Listener = listener;
    }
    return value;
  });
}
function createMemo(fn, value, areEqual) {
  const c = createComputation(fn, value);
  c.pending = NOTPENDING;
  c.observers = null;
  c.observerSlots = null;
  c.comparator = areEqual ? typeof areEqual === "function" ? areEqual : equalFn : undefined;
  updateComputation(c);
  return readSignal.bind(c);
}
function createDeferred(fn, options) {
  let t,
      timeout = options ? options.timeoutMs : undefined;
  const [deferred, setDeferred] = createSignal(fn());
  createEffect(() => {
    fn();
    if (!t || !t.fn) t = requestCallback(() => setDeferred(fn()), timeout !== undefined ? {
      timeout
    } : undefined);
  });
  return deferred;
}
function freeze(fn) {
  let pending = Pending,
      q = Pending = [];
  const result = fn();
  Pending = pending;
  runUpdates(() => {
    for (let i = 0; i < q.length; i += 1) {
      const data = q[i];
      if (data.pending !== NOTPENDING) {
        const pending = data.pending;
        data.pending = NOTPENDING;
        writeSignal.call(data, pending);
      }
    }
  });
  return result;
}
function sample(fn) {
  let result,
      listener = Listener;
  Listener = null;
  result = fn();
  Listener = listener;
  return result;
}
function afterEffects(fn) {
  Afters.push(fn);
}
function onCleanup(fn) {
  if (Owner === null) console.warn("cleanups created outside a `createRoot` or `render` will never be run");else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
  return fn;
}
function onError(fn) {
  if (Owner === null) console.warn("error handlers created outside a `createRoot` or `render` will never be run");else if (Owner.context === null) Owner.context = {
    [ERROR]: [fn]
  };else if (!Owner.context[ERROR]) Owner.context[ERROR] = [fn];else Owner.context[ERROR].push(fn);
}
function isListening() {
  return Listener !== null;
}
function createContext(defaultValue) {
  const id = Symbol("context");
  return {
    id,
    Provider: createProvider(id),
    defaultValue
  };
}
function useContext(context) {
  return lookup(Owner, context.id) || context.defaultValue;
}
function getContextOwner() {
  return Owner;
}
function readSignal() {
  if (this.state && this.sources) {
    const updates = Updates;
    Updates = null;
    this.state === STALE ? updateComputation(this) : lookDownstream(this);
    Updates = updates;
  }
  if (Listener) {
    const sSlot = this.observers ? this.observers.length : 0;
    if (!Listener.sources) {
      Listener.sources = [this];
      Listener.sourceSlots = [sSlot];
    } else {
      Listener.sources.push(this);
      Listener.sourceSlots.push(sSlot);
    }
    if (!this.observers) {
      this.observers = [Listener];
      this.observerSlots = [Listener.sources.length - 1];
    } else {
      this.observers.push(Listener);
      this.observerSlots.push(Listener.sources.length - 1);
    }
  }
  return this.value;
}
function writeSignal(value) {
  if (this.comparator && this.comparator(this.value, value)) return value;
  if (Pending) {
    if (this.pending === NOTPENDING) Pending.push(this);
    this.pending = value;
    return value;
  }
  this.value = value;
  if (this.observers && (!Updates || this.observers.length)) {
    runUpdates(() => {
      for (let i = 0; i < this.observers.length; i += 1) {
        const o = this.observers[i];
        if (o.observers && o.state !== PENDING) markUpstream(o);
        o.state = STALE;
        if (Updates.length > 10e5) throw new Error("Potential Infinite Loop Detected.");
        Updates.push(o);
      }
    });
  }
  return value;
}
function updateComputation(node) {
  if (!node.fn) return;
  cleanNode(node);
  const owner = Owner,
        listener = Listener,
        time = ExecCount;
  Listener = Owner = node;
  const nextValue = node.fn(node.value);
  if (!node.updatedAt || node.updatedAt <= time) {
    if (node.observers && node.observers.length) {
      writeSignal.call(node, nextValue);
    } else node.value = nextValue;
    node.updatedAt = time;
  }
  Listener = listener;
  Owner = owner;
}
function createComputation(fn, init) {
  const c = {
    fn,
    state: 0,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: init,
    owner: Owner,
    context: null
  };
  if (Owner === null) console.warn("computations created outside a `createRoot` or `render` will never be disposed");else if (Owner !== UNOWNED) {
    if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
  }
  return c;
}
function runTop(node) {
  let top = node.state === STALE && node;
  while (node.fn && (node = node.owner)) node.state === STALE && (top = node);
  top && updateComputation(top);
}
function runUpdates(fn) {
  if (Updates) return fn();
  Updates = [];
  ExecCount++;
  try {
    fn();
    for (let i = 0; i < Updates.length; i += 1) {
      try {
        runTop(Updates[i]);
      } catch (err) {
        const fns = lookup(Owner, ERROR);
        if (!fns) throw err;
        fns.forEach(f => f(err));
      }
    }
  } finally {
    Updates = null;
    while (Afters.length) Afters.shift()();
  }
}
function lookDownstream(node) {
  node.state = 0;
  for (let i = 0; i < node.sources.length; i += 1) {
    const source = node.sources[i];
    if (source.sources) {
      if (source.state === STALE) runTop(source);else if (source.state === PENDING) lookDownstream(source);
    }
  }
}
function markUpstream(node) {
  for (let i = 0; i < node.observers.length; i += 1) {
    const o = node.observers[i];
    if (!o.state) {
      o.state = PENDING;
      o.observers && markUpstream(o);
    }
  }
}
function cleanNode(node) {
  let i;
  if (node.sources) {
    while (node.sources.length) {
      const source = node.sources.pop(),
            index = node.sourceSlots.pop(),
            obs = source.observers;
      if (obs && obs.length) {
        const n = obs.pop(),
              s = source.observerSlots.pop();
        if (index < obs.length) {
          n.sourceSlots[s] = index;
          obs[index] = n;
          source.observerSlots[index] = s;
        }
      }
    }
    node.state = 0;
  }
  if (node.owned) {
    for (i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
    node.owned = null;
  }
  if (node.cleanups) {
    for (i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
    node.cleanups = null;
  }
}
function callAll(ss) {
  return () => {
    for (let i = 0; i < ss.length; i++) ss[i]();
  };
}
function lookup(owner, key) {
  return owner && (owner.context && owner.context[key] || owner.owner && lookup(owner.owner, key));
}
function resolveChildren(children) {
  if (typeof children === "function") return createMemo(() => resolveChildren(children()));
  if (Array.isArray(children)) {
    const results = [];
    for (let i = 0; i < children.length; i++) {
      let result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children;
}
function createProvider(id) {
  return function provider(props) {
    let rendered;
    createEffect(() => {
      Owner.context = {
        [id]: props.value
      };
      rendered = sample(() => resolveChildren(props.children));
    });
    return rendered;
  };
}

const $RAW = Symbol("state-raw"),
      $NODE = Symbol("state-node"),
      $PROXY = Symbol("state-proxy");
function wrap(value, traps) {
  return value[$PROXY] || (value[$PROXY] = new Proxy(value, traps || proxyTraps));
}
function isWrappable(obj) {
  return obj != null && typeof obj === "object" && (obj.__proto__ === Object.prototype || Array.isArray(obj));
}
function unwrap(item) {
  let result, unwrapped, v;
  if (result = item != null && item[$RAW]) return result;
  if (!isWrappable(item)) return item;
  if (Array.isArray(item)) {
    if (Object.isFrozen(item)) item = item.slice(0);
    for (let i = 0, l = item.length; i < l; i++) {
      v = item[i];
      if ((unwrapped = unwrap(v)) !== v) item[i] = unwrapped;
    }
  } else {
    if (Object.isFrozen(item)) item = Object.assign({}, item);
    let keys = Object.keys(item);
    for (let i = 0, l = keys.length; i < l; i++) {
      v = item[keys[i]];
      if ((unwrapped = unwrap(v)) !== v) item[keys[i]] = unwrapped;
    }
  }
  return item;
}
function getDataNodes(target) {
  let nodes = target[$NODE];
  if (!nodes) target[$NODE] = nodes = {};
  return nodes;
}
const proxyTraps = {
  get(target, property) {
    if (property === $RAW) return target;
    if (property === $PROXY || property === $NODE) return;
    const value = target[property],
          wrappable = isWrappable(value);
    if (isListening() && (typeof value !== "function" || target.hasOwnProperty(property))) {
      let nodes, node;
      if (wrappable && (nodes = getDataNodes(value))) {
        node = nodes._ || (nodes._ = createSignal());
        node[0]();
      }
      nodes = getDataNodes(target);
      node = nodes[property] || (nodes[property] = createSignal());
      node[0]();
    }
    return wrappable ? wrap(value) : value;
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  }
};
const setterTraps = {
  get(target, property) {
    if (property === $RAW) return target;
    const value = target[property];
    return isWrappable(value) ? new Proxy(value, setterTraps) : value;
  },
  set(target, property, value) {
    setProperty(target, property, unwrap(value));
    return true;
  },
  deleteProperty(target, property) {
    setProperty(target, property, undefined);
    return true;
  }
};
function setProperty(state, property, value, force) {
  if (!force && state[property] === value) return;
  const notify = Array.isArray(state) || !(property in state);
  if (value === undefined) {
    delete state[property];
  } else state[property] = value;
  let nodes = getDataNodes(state),
      node;
  (node = nodes[property]) && node[1]();
  notify && (node = nodes._) && node[1]();
}
function mergeState(state, value, force) {
  const keys = Object.keys(value);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    setProperty(state, key, value[key], force);
  }
}
function updatePath(current, path, traversed = []) {
  let part,
      next = current;
  if (path.length > 1) {
    part = path.shift();
    const partType = typeof part,
          isArray = Array.isArray(current);
    if (Array.isArray(part)) {
      for (let i = 0; i < part.length; i++) {
        updatePath(current, [part[i]].concat(path), [part[i]].concat(traversed));
      }
      return;
    } else if (isArray && partType === "function") {
      for (let i = 0; i < current.length; i++) {
        if (part(current[i], i)) updatePath(current, [i].concat(path), [i].concat(traversed));
      }
      return;
    } else if (isArray && partType === "object") {
      const {
        from = 0,
        to = current.length - 1,
        by = 1
      } = part;
      for (let i = from; i <= to; i += by) {
        updatePath(current, [i].concat(path), [i].concat(traversed));
      }
      return;
    } else if (path.length > 1) {
      updatePath(current[part], path, [part].concat(traversed));
      return;
    }
    next = current[part];
    traversed = [part].concat(traversed);
  }
  let value = path[0];
  if (typeof value === "function") {
    const wrapped = part === undefined || isWrappable(next) ? new Proxy(next, setterTraps) : next;
    value = value(wrapped, traversed);
    if (value === wrapped || value === undefined) return;
  }
  value = unwrap(value);
  if (part === undefined || isWrappable(next) && isWrappable(value) && !Array.isArray(value)) {
    mergeState(next, value);
  } else setProperty(current, part, value);
}
function createState(state) {
  const unwrappedState = unwrap(state || {});
  const wrappedState = wrap(unwrappedState);
  function setState(...args) {
    freeze(() => updatePath(unwrappedState, args));
  }
  return [wrappedState, setState];
}

function applyState(target, parent, property, merge, key) {
  let previous = parent[property];
  if (target === previous) return;
  if (!isWrappable(target) || !isWrappable(previous) || key && target[key] !== previous[key]) {
    target !== previous && setProperty(parent, property, target);
    return;
  }
  if (Array.isArray(target)) {
    if (target.length && previous.length && (!merge || key && target[0][key] != null)) {
      let i, j, start, end, newEnd, item, newIndicesNext, keyVal;
      for (start = 0, end = Math.min(previous.length, target.length); start < end && (previous[start] === target[start] || key && previous[start][key] === target[start][key]); start++) {
        applyState(target[start], previous, start, merge, key);
      }
      const temp = new Array(target.length),
            newIndices = new Map();
      for (end = previous.length - 1, newEnd = target.length - 1; end >= start && newEnd >= start && (previous[end] === target[newEnd] || key && previous[end][key] === target[newEnd][key]); end--, newEnd--) {
        temp[newEnd] = previous[end];
      }
      if (start > newEnd || start > end) {
        for (j = start; j <= newEnd; j++) setProperty(previous, j, target[j]);
        for (; j < target.length; j++) {
          setProperty(previous, j, temp[j]);
          applyState(target[j], previous, j, merge, key);
        }
        if (previous.length > target.length) setProperty(previous, "length", target.length);
        return;
      }
      newIndicesNext = new Array(newEnd + 1);
      for (j = newEnd; j >= start; j--) {
        item = target[j];
        keyVal = key ? item[key] : item;
        i = newIndices.get(keyVal);
        newIndicesNext[j] = i === undefined ? -1 : i;
        newIndices.set(keyVal, j);
      }
      for (i = start; i <= end; i++) {
        item = previous[i];
        keyVal = key ? item[key] : item;
        j = newIndices.get(keyVal);
        if (j !== undefined && j !== -1) {
          temp[j] = previous[i];
          j = newIndicesNext[j];
          newIndices.set(keyVal, j);
        }
      }
      for (j = start; j < target.length; j++) {
        if (j in temp) {
          setProperty(previous, j, temp[j]);
          applyState(target[j], previous, j, merge, key);
        } else setProperty(previous, j, target[j]);
      }
    } else {
      for (let i = 0, len = target.length; i < len; i++) {
        applyState(target[i], previous, i, merge, key);
      }
    }
    if (previous.length > target.length) setProperty(previous, "length", target.length);
    return;
  }
  const targetKeys = Object.keys(target);
  for (let i = 0, len = targetKeys.length; i < len; i++) {
    applyState(target[targetKeys[i]], previous, targetKeys[i], merge, key);
  }
  const previousKeys = Object.keys(previous);
  for (let i = 0, len = previousKeys.length; i < len; i++) {
    if (target[previousKeys[i]] === undefined) setProperty(previous, previousKeys[i], undefined);
  }
}
function reconcile(value, options = {}) {
  const {
    merge,
    key = "id"
  } = options;
  return state => {
    state = unwrap(state);
    if (!isWrappable(state)) return value;
    applyState(value, {
      state
    }, "state", merge, key);
  };
}

const FALLBACK = Symbol("fallback");
function mapArray(list, mapFn, options) {
  if (typeof mapFn !== "function") {
    options = mapFn || {};
    mapFn = list;
    return map;
  }
  options || (options = {});
  return map(list);
  function map(list) {
    let items = [],
        mapped = [],
        disposers = [],
        len = 0,
        indexes = mapFn.length > 1 ? [] : null;
    onCleanup(() => {
      for (let i = 0, length = disposers.length; i < length; i++) disposers[i]();
    });
    return () => {
      let newItems = list() || [],
          i,
          j;
      return sample(() => {
        let newLen = newItems.length,
            newIndices,
            newIndicesNext,
            temp,
            tempdisposers,
            tempIndexes,
            start,
            end,
            newEnd,
            item;
        if (newLen === 0) {
          if (len !== 0) {
            for (i = 0; i < len; i++) disposers[i]();
            disposers = [];
            items = [];
            mapped = [];
            len = 0;
            indexes && (indexes = []);
          }
          if (options.fallback) {
            items = [FALLBACK];
            mapped[0] = createRoot(disposer => {
              disposers[0] = disposer;
              return options.fallback();
            });
            len = 1;
          }
        }
        else if (len === 0) {
            for (j = 0; j < newLen; j++) {
              items[j] = newItems[j];
              mapped[j] = createRoot(mapper);
            }
            len = newLen;
          } else {
            temp = new Array(newLen);
            tempdisposers = new Array(newLen);
            indexes && (tempIndexes = new Array(newLen));
            for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
            for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
              temp[newEnd] = mapped[end];
              tempdisposers[newEnd] = disposers[end];
              indexes && (tempIndexes[newEnd] = indexes[end]);
            }
            if (start > newEnd) {
              for (j = end; start <= j; j--) disposers[j]();
              const rLen = end - start + 1;
              if (rLen > 0) {
                mapped.splice(start, rLen);
                disposers.splice(start, rLen);
                if (indexes) {
                  indexes.splice(start, rLen);
                  for (j = start; j < newLen; j++) indexes[j](j);
                }
              }
              items = newItems.slice(0);
              len = newLen;
              return mapped;
            }
            if (start > end) {
              for (j = start; j <= newEnd; j++) mapped[j] = createRoot(mapper);
              for (; j < newLen; j++) {
                mapped[j] = temp[j];
                disposers[j] = tempdisposers[j];
                if (indexes) {
                  indexes[j] = tempIndexes[j];
                  indexes[j](j);
                }
              }
              items = newItems.slice(0);
              len = newLen;
              return mapped;
            }
            newIndices = new Map();
            newIndicesNext = new Array(newEnd + 1);
            for (j = newEnd; j >= start; j--) {
              item = newItems[j];
              i = newIndices.get(item);
              newIndicesNext[j] = i === undefined ? -1 : i;
              newIndices.set(item, j);
            }
            for (i = start; i <= end; i++) {
              item = items[i];
              j = newIndices.get(item);
              if (j !== undefined && j !== -1) {
                temp[j] = mapped[i];
                tempdisposers[j] = disposers[i];
                indexes && (tempIndexes[j] = indexes[i]);
                j = newIndicesNext[j];
                newIndices.set(item, j);
              } else disposers[i]();
            }
            for (j = start; j < newLen; j++) {
              if (j in temp) {
                mapped[j] = temp[j];
                disposers[j] = tempdisposers[j];
                if (indexes) {
                  indexes[j] = tempIndexes[j];
                  indexes[j](j);
                }
              } else mapped[j] = createRoot(mapper);
            }
            len = mapped.length = newLen;
            items = newItems.slice(0);
          }
        return mapped;
      });
      function mapper(disposer) {
        disposers[j] = disposer;
        if (indexes) {
          const [s, set] = createSignal(j, true);
          indexes[j] = set;
          return mapFn(newItems[j], s);
        }
        return mapFn(newItems[j]);
      }
    };
  }
}
function indexArray(list, mapFn, options) {
  if (typeof mapFn !== "function") {
    options = mapFn || {};
    mapFn = list;
    return map;
  }
  options || (options = {});
  return map(list);
  function map(list) {
    let items = [],
        mapped = [],
        disposers = [],
        signals = [],
        len = 0,
        i;
    onCleanup(() => {
      for (let i = 0, length = disposers.length; i < length; i++) disposers[i]();
    });
    return () => {
      const newItems = list() || [];
      return sample(() => {
        if (newItems.length === 0) {
          if (len !== 0) {
            for (i = 0; i < len; i++) disposers[i]();
            disposers = [];
            items = [];
            mapped = [];
            len = 0;
            signals = [];
          }
          if (options.fallback) {
            items = [FALLBACK];
            mapped[0] = createRoot(disposer => {
              disposers[0] = disposer;
              return options.fallback();
            });
            len = 1;
          }
          return mapped;
        }
        if (items[0] === FALLBACK) {
          disposers[0]();
          disposers = [];
          items = [];
          mapped = [];
          len = 0;
        }
        for (i = 0; i < newItems.length; i++) {
          if (i < items.length && items[i] !== newItems[i]) {
            signals[i](newItems[i]);
          } else if (i >= items.length) {
            mapped[i] = createRoot(mapper);
          }
        }
        for (; i < items.length; i++) {
          disposers[i]();
        }
        len = mapped.length = signals.length = disposers.length = newItems.length;
        items = newItems.slice(0);
        return mapped;
      });
      function mapper(disposer) {
        disposers[i] = disposer;
        const [s, set] = createSignal(newItems[i]);
        signals[i] = set;
        return mapFn(s, i);
      }
    };
  }
}

function dynamicProperty(props, key) {
  const src = props[key];
  Object.defineProperty(props, key, {
    get() {
      return src();
    },
    enumerable: true
  });
}
function createComponent(Comp, props, dynamicKeys) {
  if (dynamicKeys) {
    for (let i = 0; i < dynamicKeys.length; i++) dynamicProperty(props, dynamicKeys[i]);
  }
  const c = sample(() => Comp(props));
  return typeof c === "function" ? createMemo(c) : c;
}
function setDefaults(props, defaultProps) {
  const propKeys = Object.keys(defaultProps);
  for (let i = 0; i < propKeys.length; i++) {
    const key = propKeys[i];
    !(key in props) && (props[key] = defaultProps[key]);
  }
}
function cloneProps(props) {
  const clone = {},
        descriptors = Object.getOwnPropertyDescriptors(props);
  Object.defineProperties(clone, descriptors);
  return clone;
}
function splitProps(props, ...keys) {
  const descriptors = Object.getOwnPropertyDescriptors(props),
        split = k => {
    const clone = {};
    for (let i = 0; i < k.length; i++) {
      const key = k[i];
      if (descriptors[key]) {
        Object.defineProperty(clone, key, descriptors[key]);
        delete descriptors[key];
      }
    }
    return clone;
  };
  return keys.map(split).concat(split(Object.keys(descriptors)));
}

function createActivityTracker() {
  let count = 0;
  const [read, trigger] = createSignal(false);
  return [read, () => count++ === 0 && trigger(true), () => --count <= 0 && trigger(false)];
}
const SuspenseContext = createContext({});
const [active, increment, decrement] = createActivityTracker();
SuspenseContext.active = active;
SuspenseContext.increment = increment;
SuspenseContext.decrement = decrement;
function awaitSuspense(fn) {
  return () => new Promise(resolve => {
    const res = fn();
    createEffect(() => !SuspenseContext.active() && resolve(res));
  });
}
function createResource(value) {
  const [s, set] = createSignal(value),
        [trackPromise, triggerPromise] = createSignal(),
        [trackLoading, triggerLoading] = createSignal(),
        contexts = new Set();
  let loading = false,
      error = null,
      pr;
  function loadEnd(v) {
    pr = undefined;
    freeze(() => {
      set(v);
      loading && (loading = false, triggerLoading());
      for (let c of contexts.keys()) c.decrement();
      contexts.clear();
    });
  }
  function read() {
    const c = useContext(SuspenseContext),
          v = s();
    if (error) throw error;
    trackPromise();
    if (pr && c.increment && !contexts.has(c)) {
      c.increment();
      contexts.add(c);
    }
    return v;
  }
  function load(p) {
    error = null;
    if (p == null || typeof p !== "object" || !("then" in p)) {
      pr = undefined;
      loadEnd(p);
      return p;
    } else {
      pr = p;
      if (!loading) {
        loading = true;
        freeze(() => {
          triggerLoading();
          triggerPromise();
        });
      }
      return p.then(v => (pr === p && loadEnd(v), s()), err => (pr === p && (error = err, loadEnd(undefined)), s()));
    }
  }
  Object.defineProperty(read, "loading", {
    get() {
      return trackLoading(), loading;
    }
  });
  return [read, load];
}
function createResourceNode(v) {
  const node = createSignal(),
        [r, load] = createResource(v);
  return [() => (r(), node[0]()), node[1], load, () => r.loading];
}
const loadingTraps = {
  get(nodes, property) {
    const node = nodes[property] || (nodes[property] = createResourceNode(undefined));
    return node[3]();
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  }
};
const resourceTraps = {
  get(target, property) {
    if (property === $RAW) return target;
    if (property === $PROXY || property === $NODE) return;
    if (property === "loading") return new Proxy(getDataNodes(target), loadingTraps);
    const value = target[property],
          wrappable = isWrappable(value);
    if (isListening() && (typeof value !== "function" || target.hasOwnProperty(property))) {
      let nodes, node;
      if (wrappable && (nodes = getDataNodes(value))) {
        node = nodes._ || (nodes._ = createSignal());
        node[0]();
      }
      nodes = getDataNodes(target);
      node = nodes[property] || (nodes[property] = createResourceNode(value));
      node[0]();
    }
    return wrappable ? wrap(value) : value;
  },
  set() {
    return true;
  },
  deleteProperty() {
    return true;
  }
};
function createResourceState(state) {
  const unwrappedState = unwrap(state || {}),
        wrappedState = wrap(unwrappedState, resourceTraps);
  function setState(...args) {
    freeze(() => updatePath(unwrappedState, args));
  }
  function loadState(v, r) {
    const nodes = getDataNodes(unwrappedState),
          keys = Object.keys(v);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i],
            node = nodes[k] || (nodes[k] = createResourceNode(unwrappedState[k])),
            resolver = v => (r ? setState(k, r(v)) : setProperty(unwrappedState, k, v), v),
            p = node[2](v[k]);
      typeof p === "object" && "then" in p ? p.then(resolver) : resolver(p);
    }
  }
  return [wrappedState, loadState, setState];
}
function lazy(fn) {
  return props => {
    const hydrating = globalThis._$HYDRATION.context && globalThis._$HYDRATION.context.registry,
          ctx = nextHydrateContext(),
          [s, p] = createResource();
    if (hydrating) {
      fn().then(mod => p(mod.default));
    } else p(fn().then(mod => mod.default));
    let Comp;
    return () => (Comp = s()) && sample(() => {
      if (!ctx) return Comp(props);
      const h = globalThis._$HYDRATION.context;
      setHydrateContext(ctx);
      const r = Comp(props);
      !h && setHydrateContext();
      return r;
    });
  };
}
function useTransition(config) {
  const [pending, increment, decrement] = createActivityTracker();
  return [pending, fn => {
    const prevTransition = SuspenseContext.transition;
    SuspenseContext.transition = {
      timeoutMs: config.timeoutMs,
      increment,
      decrement
    };
    increment();
    fn();
    decrement();
    afterEffects(() => SuspenseContext.transition = prevTransition);
  }];
}
function suspend(fn) {
  const {
    state
  } = useContext(SuspenseContext);
  let cached;
  return state ? (fn = createMemo(fn), () => state() === "suspended" ? cached : cached = fn()) : fn;
}
function setHydrateContext(context) {
  globalThis._$HYDRATION.context = context;
}
function nextHydrateContext() {
  const hydration = globalThis._$HYDRATION;
  return hydration && hydration.context ? {
    id: `${hydration.context.id}.${hydration.context.count++}`,
    count: 0,
    registry: hydration.context.registry
  } : undefined;
}

function For(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return suspend(mapArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Index(props) {
  const fallback = "fallback" in props && {
    fallback: () => props.fallback
  };
  return suspend(indexArray(() => props.each, props.children, fallback ? fallback : undefined));
}
function Show(props) {
  const childDesc = Object.getOwnPropertyDescriptor(props, "children").value,
        callFn = typeof childDesc === "function" && childDesc.length,
        condition = createMemo(callFn ? () => props.when : () => !!props.when, undefined, true);
  return suspend(() => {
    const c = condition();
    return c ? callFn ? sample(() => props.children(c)) : props.children : props.fallback;
  });
}
function Switch(props) {
  let conditions = props.children;
  Array.isArray(conditions) || (conditions = [conditions]);
  const evalConditions = createMemo(() => {
    for (let i = 0; i < conditions.length; i++) {
      const c = conditions[i].when;
      if (c) return [i, conditions[i].keyed ? c : !!c];
    }
    return [-1];
  }, undefined, (a, b) => a && a[0] === b[0] && a[1] === b[1]);
  return suspend(() => {
    const [index, when] = evalConditions();
    if (index < 0) return props.fallback;
    const c = conditions[index].children;
    return typeof c === "function" && c.length ? sample(() => c(when)) : c;
  });
}
function Match(props) {
  const childDesc = Object.getOwnPropertyDescriptor(props, "children").value;
  props.keyed = typeof childDesc === "function" && childDesc.length;
  return props;
}
function Dynamic(props) {
  const [p, others] = splitProps(props, ["component"]);
  return () => {
    const comp = p.component;
    return comp && sample(() => comp(others));
  };
}

const SuspenseListContext = createContext();
function SuspenseList(props) {
  let index = 0,
      suspenseSetter,
      showContent,
      showFallback;
  const listContext = useContext(SuspenseListContext);
  if (listContext) {
    const [state, stateSetter] = createSignal("running", true);
    suspenseSetter = stateSetter;
    [showContent, showFallback] = listContext.register(state);
  }
  const registry = [],
        comp = createComponent(SuspenseListContext.Provider, {
    value: {
      register: state => {
        const [showingContent, showContent] = createSignal(false, true),
              [showingFallback, showFallback] = createSignal(false, true);
        registry[index++] = {
          state,
          showContent,
          showFallback
        };
        return [showingContent, showingFallback];
      }
    },
    children: () => props.children
  }, ["children"]);
  createEffect(() => {
    const reveal = props.revealOrder,
          tail = props.tail,
          visibleContent = showContent ? showContent() : true,
          visibleFallback = showFallback ? showFallback() : true,
          reverse = reveal === "backwards";
    if (reveal === "together") {
      const all = registry.every(i => i.state() === "running");
      suspenseSetter && suspenseSetter(all ? "running" : "fallback");
      registry.forEach(i => {
        i.showContent(all && visibleContent);
        i.showFallback(visibleFallback);
      });
      return;
    }
    let stop = false;
    for (let i = 0, len = registry.length; i < len; i++) {
      const n = reverse ? len - i - 1 : i,
            s = registry[n].state();
      if (!stop && (s === "running" || s === "suspended")) {
        registry[n].showContent(visibleContent);
        registry[n].showFallback(visibleFallback);
      } else {
        const next = !stop;
        if (next && suspenseSetter) suspenseSetter("fallback");
        if (!tail || next && tail === "collapsed") {
          registry[n].showFallback(visibleFallback);
        } else registry[n].showFallback(false);
        stop = true;
        registry[n].showContent(next);
      }
    }
    if (!stop && suspenseSetter) suspenseSetter("running");
  });
  return comp;
}
function Suspense(props) {
  let counter = 0,
      t,
      showContent,
      showFallback,
      transition;
  const [state, nextState] = createSignal("running", true),
        store = {
    increment: () => {
      if (++counter === 1) {
        if (!store.initializing) {
          if (SuspenseContext.transition) {
            !transition && (transition = SuspenseContext.transition).increment();
            t = setTimeout(() => nextState("fallback"), SuspenseContext.transition.timeoutMs);
            nextState("suspended");
          } else nextState("fallback");
        } else nextState("fallback");
        SuspenseContext.increment();
      }
    },
    decrement: () => {
      if (--counter === 0) {
        t && clearTimeout(t);
        transition && transition.decrement();
        transition = undefined;
        nextState("running");
        afterEffects(() => SuspenseContext.decrement());
      }
    },
    state,
    initializing: true
  };
  const listContext = useContext(SuspenseListContext);
  if (listContext) [showContent, showFallback] = listContext.register(store.state);
  return createComponent(SuspenseContext.Provider, {
    value: store,
    children: () => {
      const rendered = sample(() => props.children);
      return () => {
        const value = store.state(),
              visibleContent = showContent ? showContent() : true,
              visibleFallback = showFallback ? showFallback() : true;
        if (store.initializing) store.initializing = false;
        if (value === "running" && visibleContent || value === "suspended") return rendered;
        if (!visibleFallback) return;
        return props.fallback;
      };
    }
  }, ["children"]);
}




/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.tsx");

////////////////////////////////////////////////////////////
let renderer;
onload = function () {
    renderer = new _render__WEBPACK_IMPORTED_MODULE_0__["default"]();
    renderer.init();
};


/***/ }),

/***/ "./src/render.tsx":
/*!************************!*\
  !*** ./src/render.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var solid_js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! solid-js/dom */ "./node_modules/solid-js/dist/dom/index.js");
/* harmony import */ var solid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! solid-js */ "./node_modules/solid-js/dist/index.js");





const _tmpl$ = Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["template"])(`<div id="sidebar"><div class="explorer" id="explorer"></div></div>`, 4),
      _tmpl$2 = Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["template"])(`<div id="content">Counter: </div>`, 2),
      _tmpl$3 = Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["template"])(`<div id="footer"><div id="title"></div></div>`, 4),
      _tmpl$4 = Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["template"])(`<div id="app"></div>`, 2);




class Renderer {
  // ui elements
  constructor() {
    this._react = null;
  }

  init() {
    const App = () => {
      // create solid state
      let [state, setState] = Object(solid_js__WEBPACK_IMPORTED_MODULE_1__["createState"])({
        filePath: "not reactive!"
      });
      this._react = {
        state,
        setState
      }; // print file path on change

      Object(solid_js__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => console.log("\n\nfilePath:", state.filePath, "\n\n\n"));
      const [count, setCount] = Object(solid_js__WEBPACK_IMPORTED_MODULE_1__["createSignal"])(0),
            timer = setInterval(() => setCount(count() + 1), 1000);
      Object(solid_js__WEBPACK_IMPORTED_MODULE_1__["onCleanup"])(() => clearInterval(timer)); // components

      const AppSidebar = () => {
        return _tmpl$.cloneNode(true);
      };

      const AppContent = () => {
        return (() => {
          const _el$2 = _tmpl$2.cloneNode(true),
                _el$3 = _el$2.firstChild;

          Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["insert"])(_el$2, () => count(), null);

          return _el$2;
        })();
      };

      const AppFooter = () => {
        return (() => {
          const _el$4 = _tmpl$3.cloneNode(true),
                _el$5 = _el$4.firstChild;

          _el$4.__click = () => setState("filePath", l => l + "!");

          Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["insert"])(_el$5, () => state.filePath);

          return _el$4;
        })();
      };

      return (() => {
        const _el$6 = _tmpl$4.cloneNode(true);

        Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["insert"])(_el$6, Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["createComponent"])(AppSidebar, {}), null);

        Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["insert"])(_el$6, Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["createComponent"])(AppContent, {}), null);

        Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["insert"])(_el$6, Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["createComponent"])(AppFooter, {}), null);

        return _el$6;
      })();
    };

    Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["render"])(() => Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["createComponent"])(App, {}), document.body);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Renderer);

Object(solid_js_dom__WEBPACK_IMPORTED_MODULE_0__["delegateEvents"])(["click"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvbGlkLWpzL2Rpc3QvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2xpZC1qcy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyLnRzeCJdLCJuYW1lcyI6WyJSZW5kZXJlciIsImNvbnN0cnVjdG9yIiwiX3JlYWN0IiwiaW5pdCIsIkFwcCIsInN0YXRlIiwic2V0U3RhdGUiLCJjcmVhdGVTdGF0ZSIsImZpbGVQYXRoIiwiY3JlYXRlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNvdW50Iiwic2V0Q291bnQiLCJjcmVhdGVTaWduYWwiLCJ0aW1lciIsInNldEludGVydmFsIiwib25DbGVhbnVwIiwiY2xlYXJJbnRlcnZhbCIsIkFwcFNpZGViYXIiLCJBcHBDb250ZW50IiwiQXBwRm9vdGVyIiwibCIsInJlbmRlciIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUNnRTs7QUFFbEs7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FB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QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUIsR0FBRywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVpaEI7Ozs7Ozs7Ozs7Ozs7QUNueENqaEI7QUFBQTtBQUFnQztBQUVoQyw0REFBNEQ7QUFFNUQsSUFBSSxRQUFpQixDQUFDO0FBRXRCLE1BQU0sR0FBRztJQUNSLFFBQVEsR0FBRyxJQUFJLCtDQUFRLEVBQUUsQ0FBQztJQUMxQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBOztBQUVBLE1BQU1BLFFBQU4sQ0FBZTtBQUNkO0FBR0FDLGFBQVcsR0FBRztBQUNiLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0E7O0FBRURDLE1BQUksR0FBRztBQUNOLFVBQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2pCO0FBQ0EsVUFBSSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDREQUFXLENBQUM7QUFBQ0MsZ0JBQVEsRUFBQztBQUFWLE9BQUQsQ0FBbkM7QUFDQSxXQUFLTixNQUFMLEdBQWM7QUFBRUcsYUFBRjtBQUFTQztBQUFULE9BQWQsQ0FIaUIsQ0FLakI7O0FBQ0FHLG1FQUFZLENBQUMsTUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2Qk4sS0FBSyxDQUFDRyxRQUFuQyxFQUE2QyxRQUE3QyxDQUFMLENBQVo7QUFFQSxZQUFNLENBQUNJLEtBQUQsRUFBUUMsUUFBUixJQUFvQkMsNkRBQVksQ0FBQyxDQUFELENBQXRDO0FBQUEsWUFDQUMsS0FBSyxHQUFHQyxXQUFXLENBQUMsTUFBTUgsUUFBUSxDQUFDRCxLQUFLLEtBQUssQ0FBWCxDQUFmLEVBQThCLElBQTlCLENBRG5CO0FBRUFLLGdFQUFTLENBQUMsTUFBTUMsYUFBYSxDQUFDSCxLQUFELENBQXBCLENBQVQsQ0FWaUIsQ0FZakI7O0FBQ0EsWUFBTUksVUFBVSxHQUFHLE1BQU07QUFDeEI7QUFHQSxPQUpEOztBQU1BLFlBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3hCO0FBQUE7QUFBQTs7QUFBQSxtRkFBb0NSLEtBQUssRUFBekM7O0FBQUE7QUFBQTtBQUNBLE9BRkQ7O0FBSUEsWUFBTVMsU0FBUyxHQUFHLE1BQU07QUFDdkI7QUFBQTtBQUFBOztBQUFBLDBCQUMyQixNQUFNZixRQUFRLENBQUMsVUFBRCxFQUFhZ0IsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsR0FBdEIsQ0FEekM7O0FBQUEsbUZBRW1CakIsS0FBSyxDQUFDRyxRQUZ6Qjs7QUFBQTtBQUFBO0FBS0EsT0FORDs7QUFRQTtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFLQSxLQXBDRDs7QUFzQ0FlLCtEQUFNLENBQUMsTUFBTSw2RUFBUCxFQUFnQkMsUUFBUSxDQUFDQyxJQUF6QixDQUFOO0FBQ0E7O0FBaERhOztBQW1EQXpCLHVFQUFmIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IGNyZWF0ZU1lbW8sIGNyZWF0ZVJvb3QsIGNyZWF0ZUVmZmVjdCwgc2FtcGxlLCBvbkNsZWFudXAsIHNwbGl0UHJvcHMgfSBmcm9tICcuLi9pbmRleC5qcyc7XG5leHBvcnQgeyBGb3IsIEluZGV4LCBNYXRjaCwgU2hvdywgU3VzcGVuc2UsIFN1c3BlbnNlTGlzdCwgU3dpdGNoLCBjcmVhdGVDb21wb25lbnQsIGdldENvbnRleHRPd25lciBhcyBjdXJyZW50Q29udGV4dCwgY3JlYXRlRWZmZWN0IGFzIGVmZmVjdCB9IGZyb20gJy4uL2luZGV4LmpzJztcblxuY29uc3QgVHlwZXMgPSB7XG4gIEFUVFJJQlVURTogXCJhdHRyaWJ1dGVcIixcbiAgUFJPUEVSVFk6IFwicHJvcGVydHlcIlxufSxcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gIGhyZWY6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgc3R5bGU6IHtcbiAgICB0eXBlOiBUeXBlcy5QUk9QRVJUWSxcbiAgICBhbGlhczogXCJzdHlsZS5jc3NUZXh0XCJcbiAgfSxcbiAgZm9yOiB7XG4gICAgdHlwZTogVHlwZXMuUFJPUEVSVFksXG4gICAgYWxpYXM6IFwiaHRtbEZvclwiXG4gIH0sXG4gIGNsYXNzOiB7XG4gICAgdHlwZTogVHlwZXMuUFJPUEVSVFksXG4gICAgYWxpYXM6IFwiY2xhc3NOYW1lXCJcbiAgfSxcbiAgc3BlbGxDaGVjazoge1xuICAgIHR5cGU6IFR5cGVzLlBST1BFUlRZLFxuICAgIGFsaWFzOiBcInNwZWxsY2hlY2tcIlxuICB9LFxuICBhbGxvd0Z1bGxTY3JlZW46IHtcbiAgICB0eXBlOiBUeXBlcy5QUk9QRVJUWSxcbiAgICBhbGlhczogXCJhbGxvd0Z1bGxzY3JlZW5cIlxuICB9LFxuICBhdXRvQ2FwaXRhbGl6ZToge1xuICAgIHR5cGU6IFR5cGVzLlBST1BFUlRZLFxuICAgIGFsaWFzOiBcImF1dG9jYXBpdGFsaXplXCJcbiAgfSxcbiAgYXV0b0ZvY3VzOiB7XG4gICAgdHlwZTogVHlwZXMuUFJPUEVSVFksXG4gICAgYWxpYXM6IFwiYXV0b2ZvY3VzXCJcbiAgfSxcbiAgYXV0b1BsYXk6IHtcbiAgICB0eXBlOiBUeXBlcy5QUk9QRVJUWSxcbiAgICBhbGlhczogXCJhdXRvcGxheVwiXG4gIH1cbn0sXG4gICAgICBTVkdBdHRyaWJ1dGVzID0ge1xuICBjbGFzc05hbWU6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEUsXG4gICAgYWxpYXM6IFwiY2xhc3NcIlxuICB9LFxuICBodG1sRm9yOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFLFxuICAgIGFsaWFzOiBcImZvclwiXG4gIH0sXG4gIHRhYkluZGV4OiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFLFxuICAgIGFsaWFzOiBcInRhYmluZGV4XCJcbiAgfSxcbiAgYWxsb3dSZW9yZGVyOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIGF0dHJpYnV0ZU5hbWU6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgYXR0cmlidXRlVHlwZToge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBhdXRvUmV2ZXJzZToge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBiYXNlRnJlcXVlbmN5OiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIGNhbGNNb2RlOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIGNsaXBQYXRoVW5pdHM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgY29udGVudFNjcmlwdFR5cGU6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgY29udGVudFN0eWxlVHlwZToge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBkaWZmdXNlQ29uc3RhbnQ6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgZWRnZU1vZGU6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBmaWx0ZXJSZXM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgZmlsdGVyVW5pdHM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgZ3JhZGllbnRUcmFuc2Zvcm06IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgZ3JhZGllbnRVbml0czoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBrZXJuZWxNYXRyaXg6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAga2VybmVsVW5pdExlbmd0aDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBrZXlQb2ludHM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAga2V5U3BsaW5lczoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBrZXlUaW1lczoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBsZW5ndGhBZGp1c3Q6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgbGltaXRpbmdDb25lQW5nbGU6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgbWFya2VySGVpZ2h0OiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIG1hcmtlclVuaXRzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIG1hc2tDb250ZW50VW5pdHM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgbWFza1VuaXRzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIG51bU9jdGF2ZXM6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcGF0aExlbmd0aDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBwYXR0ZXJuQ29udGVudFVuaXRzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHBhdHRlcm5UcmFuc2Zvcm06IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcGF0dGVyblVuaXRzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHBvaW50c0F0WDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBwb2ludHNBdFk6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcG9pbnRzQXRaOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHByZXNlcnZlQWxwaGE6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcHJlc2VydmVBc3BlY3RSYXRpbzoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBwcmltaXRpdmVVbml0czoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICByZWZYOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHJlZlk6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcmVwZWF0Q291bnQ6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgcmVwZWF0RHVyOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHJlcXVpcmVkRXh0ZW5zaW9uczoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICByZXF1aXJlZEZlYXR1cmVzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHNwZWN1bGFyQ29uc3RhbnQ6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgc3BlY3VsYXJFeHBvbmVudDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBzcHJlYWRNZXRob2Q6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgc3RhcnRPZmZzZXQ6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgc3RkRGV2aWF0aW9uOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHN0aXRjaFRpbGVzOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHN1cmZhY2VTY2FsZToge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICBzeXN0ZW1MYW5ndWFnZToge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICB0YWJsZVZhbHVlczoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICB0YXJnZXRYOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHRhcmdldFk6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgdGV4dExlbmd0aDoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICB2aWV3Qm94OiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHZpZXdUYXJnZXQ6IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfSxcbiAgeENoYW5uZWxTZWxlY3Rvcjoge1xuICAgIHR5cGU6IFR5cGVzLkFUVFJJQlVURVxuICB9LFxuICB5Q2hhbm5lbFNlbGVjdG9yOiB7XG4gICAgdHlwZTogVHlwZXMuQVRUUklCVVRFXG4gIH0sXG4gIHpvb21BbmRQYW46IHtcbiAgICB0eXBlOiBUeXBlcy5BVFRSSUJVVEVcbiAgfVxufTtcbmNvbnN0IE5vbkNvbXBvc2VkRXZlbnRzID0gbmV3IFNldChbXCJhYm9ydFwiLCBcImFuaW1hdGlvbnN0YXJ0XCIsIFwiYW5pbWF0aW9uZW5kXCIsIFwiYW5pbWF0aW9uaXRlcmF0aW9uXCIsIFwiYmx1clwiLCBcImNoYW5nZVwiLCBcImNvcHlcIiwgXCJjdXRcIiwgXCJlcnJvclwiLCBcImZvY3VzXCIsIFwiZ290cG9pbnRlcmNhcHR1cmVcIiwgXCJsb2FkXCIsIFwibG9hZGVuZFwiLCBcImxvYWRzdGFydFwiLCBcImxvc3Rwb2ludGVyY2FwdHVyZVwiLCBcIm1vdXNlZW50ZXJcIiwgXCJtb3VzZWxlYXZlXCIsIFwicGFzdGVcIiwgXCJwcm9ncmVzc1wiLCBcInJlc2V0XCIsIFwic2Nyb2xsXCIsIFwic2VsZWN0XCIsIFwic3VibWl0XCIsIFwidHJhbnNpdGlvbnN0YXJ0XCIsIFwidHJhbnNpdGlvbmNhbmNlbFwiLCBcInRyYW5zaXRpb25lbmRcIiwgXCJ0cmFuc2l0aW9ucnVuXCJdKTtcblxuZnVuY3Rpb24gbWVtbyhmbiwgZXF1YWwpIHtcbiAgcmV0dXJuIGNyZWF0ZU1lbW8oZm4sIHVuZGVmaW5lZCwgZXF1YWwpO1xufVxuXG5mdW5jdGlvbiByZWNvbmNpbGVBcnJheXMocGFyZW50Tm9kZSwgYSwgYikge1xuICBsZXQgYkxlbmd0aCA9IGIubGVuZ3RoLFxuICAgICAgYUVuZCA9IGEubGVuZ3RoLFxuICAgICAgYkVuZCA9IGJMZW5ndGgsXG4gICAgICBhU3RhcnQgPSAwLFxuICAgICAgYlN0YXJ0ID0gMCxcbiAgICAgIGFmdGVyID0gYVthRW5kIC0gMV0ubmV4dFNpYmxpbmcsXG4gICAgICBtYXAgPSBudWxsO1xuICB3aGlsZSAoYVN0YXJ0IDwgYUVuZCB8fCBiU3RhcnQgPCBiRW5kKSB7XG4gICAgaWYgKGFFbmQgPT09IGFTdGFydCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGJFbmQgPCBiTGVuZ3RoID8gYlN0YXJ0ID8gYltiU3RhcnQgLSAxXS5uZXh0U2libGluZyA6IGJbYkVuZCAtIGJTdGFydF0gOiBhZnRlcjtcbiAgICAgIHdoaWxlIChiU3RhcnQgPCBiRW5kKSBwYXJlbnROb2RlLmluc2VydEJlZm9yZShiW2JTdGFydCsrXSwgbm9kZSk7XG4gICAgfSBlbHNlIGlmIChiRW5kID09PSBiU3RhcnQpIHtcbiAgICAgIHdoaWxlIChhU3RhcnQgPCBhRW5kKSB7XG4gICAgICAgIGlmICghbWFwIHx8ICFtYXAuaGFzKGFbYVN0YXJ0XSkpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYVthU3RhcnRdKTtcbiAgICAgICAgYVN0YXJ0Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhW2FTdGFydF0gPT09IGJbYlN0YXJ0XSkge1xuICAgICAgYVN0YXJ0Kys7XG4gICAgICBiU3RhcnQrKztcbiAgICB9IGVsc2UgaWYgKGFbYUVuZCAtIDFdID09PSBiW2JFbmQgLSAxXSkge1xuICAgICAgYUVuZC0tO1xuICAgICAgYkVuZC0tO1xuICAgIH0gZWxzZSBpZiAoYUVuZCAtIGFTdGFydCA9PT0gMSAmJiBiRW5kIC0gYlN0YXJ0ID09PSAxKSB7XG4gICAgICBpZiAobWFwICYmIG1hcC5oYXMoYVthU3RhcnRdKSB8fCBhW2FTdGFydF0ucGFyZW50Tm9kZSAhPT0gcGFyZW50Tm9kZSkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShiW2JTdGFydF0sIGJFbmQgPCBiTGVuZ3RoID8gYltiRW5kXSA6IGFmdGVyKTtcbiAgICAgIH0gZWxzZSBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChiW2JTdGFydF0sIGFbYVN0YXJ0XSk7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2UgaWYgKGFbYVN0YXJ0XSA9PT0gYltiRW5kIC0gMV0gJiYgYltiU3RhcnRdID09PSBhW2FFbmQgLSAxXSkge1xuICAgICAgY29uc3Qgbm9kZSA9IGFbLS1hRW5kXS5uZXh0U2libGluZztcbiAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGJbYlN0YXJ0KytdLCBhW2FTdGFydCsrXS5uZXh0U2libGluZyk7XG4gICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShiWy0tYkVuZF0sIG5vZGUpO1xuICAgICAgYVthRW5kXSA9IGJbYkVuZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWFwKSB7XG4gICAgICAgIG1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IGkgPSBiU3RhcnQ7XG4gICAgICAgIHdoaWxlIChpIDwgYkVuZCkgbWFwLnNldChiW2ldLCBpKyspO1xuICAgICAgfVxuICAgICAgaWYgKG1hcC5oYXMoYVthU3RhcnRdKSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IG1hcC5nZXQoYVthU3RhcnRdKTtcbiAgICAgICAgaWYgKGJTdGFydCA8IGluZGV4ICYmIGluZGV4IDwgYkVuZCkge1xuICAgICAgICAgIGxldCBpID0gYVN0YXJ0LFxuICAgICAgICAgICAgICBzZXF1ZW5jZSA9IDE7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGFFbmQgJiYgaSA8IGJFbmQpIHtcbiAgICAgICAgICAgIGlmICghbWFwLmhhcyhhW2ldKSB8fCBtYXAuZ2V0KGFbaV0pICE9PSBpbmRleCArIHNlcXVlbmNlKSBicmVhaztcbiAgICAgICAgICAgIHNlcXVlbmNlKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZXF1ZW5jZSA+IGluZGV4IC0gYlN0YXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8IGluZGV4KSBwYXJlbnROb2RlLmluc2VydEJlZm9yZShiW2JTdGFydCsrXSwgbm9kZSk7XG4gICAgICAgICAgfSBlbHNlIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGJbYlN0YXJ0KytdLCBhW2FTdGFydCsrXSk7XG4gICAgICAgIH0gZWxzZSBhU3RhcnQrKztcbiAgICAgIH0gZWxzZSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFbYVN0YXJ0KytdKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZXZlbnRSZWdpc3RyeSA9IG5ldyBTZXQoKSxcbiAgICAgIGh5ZHJhdGlvbiA9IGdsb2JhbFRoaXMuXyRIWURSQVRJT04gfHwgKGdsb2JhbFRoaXMuXyRIWURSQVRJT04gPSB7fSk7XG5mdW5jdGlvbiByZW5kZXIoY29kZSwgZWxlbWVudCkge1xuICBsZXQgZGlzcG9zZXI7XG4gIGNyZWF0ZVJvb3QoZGlzcG9zZSA9PiB7XG4gICAgZGlzcG9zZXIgPSBkaXNwb3NlO1xuICAgIGluc2VydChlbGVtZW50LCBjb2RlKCksIGVsZW1lbnQuZmlyc3RDaGlsZCA/IG51bGwgOiB1bmRlZmluZWQpO1xuICB9KTtcbiAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuZnVuY3Rpb24gcmVuZGVyVG9TdHJpbmcoY29kZSwgb3B0aW9ucyA9IHt9KSB7XG4gIG9wdGlvbnMgPSB7XG4gICAgdGltZW91dE1zOiAzMDAwMCxcbiAgICAuLi5vcHRpb25zXG4gIH07XG4gIGh5ZHJhdGlvbi5jb250ZXh0ID0ge1xuICAgIGlkOiBcIjBcIixcbiAgICBjb3VudDogMFxuICB9O1xuICByZXR1cm4gY3JlYXRlUm9vdCgoKSA9PiB7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBjb2RlKCk7XG4gICAgaWYgKHR5cGVvZiByZW5kZXJlZCA9PT0gXCJvYmplY3RcIiAmJiBcInRoZW5cIiBpbiByZW5kZXJlZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KFwicmVuZGVyVG9TdHJpbmcgdGltZWQgb3V0XCIpLCBvcHRpb25zLnRpbWVvdXRNcykpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbcmVuZGVyZWQsIHRpbWVvdXRdKS50aGVuKHJlc29sdmVTU1JOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc29sdmVTU1JOb2RlKHJlbmRlcmVkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZW5kZXJET01Ub1N0cmluZyhjb2RlLCBvcHRpb25zID0ge30pIHtcbiAgb3B0aW9ucyA9IHtcbiAgICB0aW1lb3V0TXM6IDMwMDAwLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgaHlkcmF0aW9uLmNvbnRleHQgPSB7XG4gICAgaWQ6IFwiMFwiLFxuICAgIGNvdW50OiAwXG4gIH07XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgcmV0dXJuIGNyZWF0ZVJvb3QoZDEgPT4ge1xuICAgIGNvbnN0IHJlbmRlcmVkID0gY29kZSgpO1xuICAgIGZ1bmN0aW9uIHJlc29sdmUocmVuZGVyZWQpIHtcbiAgICAgIGNyZWF0ZVJvb3QoZDIgPT4gKGluc2VydChjb250YWluZXIsIHJlbmRlcmVkKSwgZDEoKSwgZDIoKSkpO1xuICAgICAgY29uc3QgaHRtbCA9IGNvbnRhaW5lci5pbm5lckhUTUw7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZW5kZXJlZCA9PT0gXCJvYmplY3RcIiAmJiBcInRoZW5cIiBpbiByZW5kZXJlZCkge1xuICAgICAgY29uc3QgdGltZW91dCA9IG5ldyBQcm9taXNlKChfLCByZWplY3QpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KFwicmVuZGVyVG9TdHJpbmcgdGltZWQgb3V0XCIpLCBvcHRpb25zLnRpbWVvdXRNcykpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmFjZShbcmVuZGVyZWQsIHRpbWVvdXRdKS50aGVuKHJlc29sdmUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZShyZW5kZXJlZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gaHlkcmF0ZShjb2RlLCBlbGVtZW50KSB7XG4gIGh5ZHJhdGlvbi5jb250ZXh0ID0ge1xuICAgIGlkOiBcIjBcIixcbiAgICBjb3VudDogMCxcbiAgICByZWdpc3RyeToge31cbiAgfTtcbiAgY29uc3QgdGVtcGxhdGVzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGAqW19oa11gKTtcbiAgQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKHRlbXBsYXRlcywgKG1lbW8sIG5vZGUpID0+IHtcbiAgICBjb25zdCBpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiX2hrXCIpLFxuICAgICAgICAgIGxpc3QgPSBtZW1vW2lkXSB8fCAobWVtb1tpZF0gPSBbXSk7XG4gICAgbGlzdC5wdXNoKG5vZGUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9LCBoeWRyYXRpb24uY29udGV4dC5yZWdpc3RyeSk7XG4gIGNvbnN0IGRpc3Bvc2UgPSByZW5kZXIoY29kZSwgZWxlbWVudCk7XG4gIGRlbGV0ZSBoeWRyYXRpb24uY29udGV4dDtcbiAgcmV0dXJuIGRpc3Bvc2U7XG59XG5mdW5jdGlvbiB0ZW1wbGF0ZShodG1sLCBjaGVjaywgaXNTVkcpIHtcbiAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgdC5pbm5lckhUTUwgPSBodG1sO1xuICBpZiAoY2hlY2sgJiYgdC5pbm5lckhUTUwuc3BsaXQoXCI8XCIpLmxlbmd0aCAtIDEgIT09IGNoZWNrKSB0aHJvdyBgVGVtcGxhdGUgaHRtbCBkb2VzIG5vdCBtYXRjaCBpbnB1dDpcXG4ke3QuaW5uZXJIVE1MfVxcblxcbiR7aHRtbH1gO1xuICBsZXQgbm9kZSA9IHQuY29udGVudC5maXJzdENoaWxkO1xuICBpZiAoaXNTVkcpIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gZGVsZWdhdGVFdmVudHMoZXZlbnROYW1lcykge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IGV2ZW50TmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgaWYgKCFldmVudFJlZ2lzdHJ5LmhhcyhuYW1lKSkge1xuICAgICAgZXZlbnRSZWdpc3RyeS5hZGQobmFtZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjbGVhckRlbGVnYXRlZEV2ZW50cygpIHtcbiAgZm9yIChsZXQgbmFtZSBvZiBldmVudFJlZ2lzdHJ5LmtleXMoKSkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudEhhbmRsZXIpO1xuICBldmVudFJlZ2lzdHJ5LmNsZWFyKCk7XG59XG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobm9kZSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtlbHNlIG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZU5TKG5vZGUsIG5hbWVzcGFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwgbmFtZSk7ZWxzZSBub2RlLnNldEF0dHJpYnV0ZU5TKG5hbWVzcGFjZSwgbmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gY2xhc3NMaXN0KG5vZGUsIHZhbHVlLCBwcmV2KSB7XG4gIGNvbnN0IGNsYXNzS2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNsYXNzS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGNsYXNzS2V5c1tpXSxcbiAgICAgICAgICBjbGFzc1ZhbHVlID0gISF2YWx1ZVtrZXldLFxuICAgICAgICAgIGNsYXNzTmFtZXMgPSBrZXkuc3BsaXQoL1xccysvKTtcbiAgICBpZiAoIWtleSB8fCBwcmV2ICYmIHByZXZba2V5XSA9PT0gY2xhc3NWYWx1ZSkgY29udGludWU7XG4gICAgZm9yIChsZXQgaiA9IDAsIG5hbWVMZW4gPSBjbGFzc05hbWVzLmxlbmd0aDsgaiA8IG5hbWVMZW47IGorKykgbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZXNbal0sIGNsYXNzVmFsdWUpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHN0eWxlKG5vZGUsIHZhbHVlLCBwcmV2KSB7XG4gIGNvbnN0IG5vZGVTdHlsZSA9IG5vZGUuc3R5bGU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHJldHVybiBub2RlU3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuICBsZXQgdiwgcztcbiAgaWYgKHByZXYgIT0gbnVsbCAmJiB0eXBlb2YgcHJldiAhPT0gXCJzdHJpbmdcIikge1xuICAgIGZvciAocyBpbiB2YWx1ZSkge1xuICAgICAgdiA9IHZhbHVlW3NdO1xuICAgICAgdiAhPT0gcHJldltzXSAmJiBub2RlU3R5bGUuc2V0UHJvcGVydHkocywgdik7XG4gICAgfVxuICAgIGZvciAocyBpbiBwcmV2KSB7XG4gICAgICB2YWx1ZVtzXSA9PSBudWxsICYmIG5vZGVTdHlsZS5yZW1vdmVQcm9wZXJ0eShzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChzIGluIHZhbHVlKSBub2RlU3R5bGUuc2V0UHJvcGVydHkocywgdmFsdWVbc10pO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNwcmVhZChub2RlLCBhY2Nlc3NvciwgaXNTVkcsIHNraXBDaGlsZHJlbikge1xuICBpZiAodHlwZW9mIGFjY2Vzc29yID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjcmVhdGVFZmZlY3QoY3VycmVudCA9PiBzcHJlYWRFeHByZXNzaW9uKG5vZGUsIGFjY2Vzc29yKCksIGN1cnJlbnQsIGlzU1ZHLCBza2lwQ2hpbGRyZW4pKTtcbiAgfSBlbHNlIHNwcmVhZEV4cHJlc3Npb24obm9kZSwgYWNjZXNzb3IsIHVuZGVmaW5lZCwgaXNTVkcsIHNraXBDaGlsZHJlbik7XG59XG5mdW5jdGlvbiBpbnNlcnQocGFyZW50LCBhY2Nlc3NvciwgbWFya2VyLCBpbml0aWFsKSB7XG4gIGlmIChtYXJrZXIgIT09IHVuZGVmaW5lZCAmJiAhaW5pdGlhbCkgaW5pdGlhbCA9IFtdO1xuICBpZiAodHlwZW9mIGFjY2Vzc29yICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBpbnNlcnRFeHByZXNzaW9uKHBhcmVudCwgYWNjZXNzb3IsIGluaXRpYWwsIG1hcmtlcik7XG4gIGNyZWF0ZUVmZmVjdChjdXJyZW50ID0+IGluc2VydEV4cHJlc3Npb24ocGFyZW50LCBhY2Nlc3NvcigpLCBjdXJyZW50LCBtYXJrZXIpLCBpbml0aWFsKTtcbn1cbmZ1bmN0aW9uIGFzc2lnbihub2RlLCBwcm9wcywgaXNTVkcsIHNraXBDaGlsZHJlbiwgcHJldlByb3BzID0ge30pIHtcbiAgbGV0IGluZm87XG4gIGZvciAoY29uc3QgcHJvcCBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wID09PSBcImNoaWxkcmVuXCIpIHtcbiAgICAgIGlmICghc2tpcENoaWxkcmVuKSBpbnNlcnRFeHByZXNzaW9uKG5vZGUsIHByb3BzLmNoaWxkcmVuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgIGlmICh2YWx1ZSA9PT0gcHJldlByb3BzW3Byb3BdKSBjb250aW51ZTtcbiAgICBpZiAocHJvcCA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICBzdHlsZShub2RlLCB2YWx1ZSwgcHJldlByb3BzW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwiY2xhc3NMaXN0XCIpIHtcbiAgICAgIGNsYXNzTGlzdChub2RlLCB2YWx1ZSwgcHJldlByb3BzW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09IFwicmVmXCIpIHtcbiAgICAgIHZhbHVlKG5vZGUpO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJvblwiKSB7XG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB2YWx1ZSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWVbZXZlbnROYW1lXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcIm9uQ2FwdHVyZVwiKSB7XG4gICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBpbiB2YWx1ZSkgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgdmFsdWVbZXZlbnROYW1lXSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChwcm9wLnNsaWNlKDAsIDIpID09PSBcIm9uXCIpIHtcbiAgICAgIGNvbnN0IGxjID0gcHJvcC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFOb25Db21wb3NlZEV2ZW50cy5oYXMobGMuc2xpY2UoMikpKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBsYy5zbGljZSgyKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgbm9kZVtgX18ke25hbWV9YF0gPSB2YWx1ZVswXTtcbiAgICAgICAgICBub2RlW2BfXyR7bmFtZX1EYXRhYF0gPSB2YWx1ZVsxXTtcbiAgICAgICAgfSBlbHNlIG5vZGVbYF9fJHtuYW1lfWBdID0gdmFsdWU7XG4gICAgICAgIGRlbGVnYXRlRXZlbnRzKFtuYW1lXSk7XG4gICAgICB9IGVsc2Ugbm9kZVtsY10gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGluZm8gPSBBdHRyaWJ1dGVzW3Byb3BdKSB7XG4gICAgICBpZiAoaW5mby50eXBlID09PSBcImF0dHJpYnV0ZVwiKSB7XG4gICAgICAgIHNldEF0dHJpYnV0ZShub2RlLCBwcm9wLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Ugbm9kZVtpbmZvLmFsaWFzXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNTVkcgfHwgcHJvcC5pbmRleE9mKFwiLVwiKSA+IC0xIHx8IHByb3AuaW5kZXhPZihcIjpcIikgPiAtMSkge1xuICAgICAgY29uc3QgbnMgPSBwcm9wLmluZGV4T2YoXCI6XCIpID4gLTEgJiYgU1ZHTmFtZXBhY2VbcHJvcC5zcGxpdChcIjpcIilbMF1dO1xuICAgICAgaWYgKG5zKSBzZXRBdHRyaWJ1dGVOUyhub2RlLCBucywgcHJvcCwgdmFsdWUpO2Vsc2UgaWYgKGluZm8gPSBTVkdBdHRyaWJ1dGVzW3Byb3BdKSB7XG4gICAgICAgIGlmIChpbmZvLmFsaWFzKSBzZXRBdHRyaWJ1dGUobm9kZSwgaW5mby5hbGlhcywgdmFsdWUpO2Vsc2Ugc2V0QXR0cmlidXRlKG5vZGUsIHByb3AsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBzZXRBdHRyaWJ1dGUobm9kZSwgcHJvcC5yZXBsYWNlKC8oW0EtWl0pL2csIGcgPT4gYC0ke2dbMF0udG9Mb3dlckNhc2UoKX1gKSwgdmFsdWUpO1xuICAgIH0gZWxzZSBub2RlW3Byb3BdID0gdmFsdWU7XG4gICAgcHJldlByb3BzW3Byb3BdID0gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIHNzcih0LCAuLi5ub2Rlcykge1xuICBpZiAoIW5vZGVzLmxlbmd0aCkgcmV0dXJuIHtcbiAgICB0XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuID0gbm9kZXNbaV07XG4gICAgaWYgKHR5cGVvZiBuID09PSBcImZ1bmN0aW9uXCIpIG5vZGVzW2ldID0gbWVtbygoKSA9PiByZXNvbHZlU1NSTm9kZShuKCkpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHQ6ICgpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSB0W2ldO1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlICE9PSB1bmRlZmluZWQpIHJlc3VsdCArPSByZXNvbHZlU1NSTm9kZShub2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gc3NyQ2xhc3NMaXN0KHZhbHVlKSB7XG4gIGxldCBjbGFzc0tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSksXG4gICAgICByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2xhc3NLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY2xhc3NLZXlzW2ldLFxuICAgICAgICAgIGNsYXNzVmFsdWUgPSAhIXZhbHVlW2tleV07XG4gICAgaWYgKCFrZXkgfHwgIWNsYXNzVmFsdWUpIGNvbnRpbnVlO1xuICAgIGkgJiYgKHJlc3VsdCArPSBcIiBcIik7XG4gICAgcmVzdWx0ICs9IGtleTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gc3NyU3R5bGUodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHZhbHVlO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgY29uc3QgayA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IGtbaV07XG4gICAgaWYgKGkpIHJlc3VsdCArPSBcIjtcIjtcbiAgICByZXN1bHQgKz0gYCR7c306JHtlc2NhcGUodmFsdWVbc10sIHRydWUpfWA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHNzclNwcmVhZChwcm9wcywgaXNTVkcpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSBcImZ1bmN0aW9uXCIpIHByb3BzID0gcHJvcHMoKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvcCA9IGtleXNbaV07XG4gICAgICBpZiAocHJvcCA9PT0gXCJjaGlsZHJlblwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgU1NSIGN1cnJlbnRseSBkb2VzIG5vdCBzdXBwb3J0IHNwcmVhZCBjaGlsZHJlbi5gKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BdO1xuICAgICAgaWYgKHByb3AgPT09IFwic3R5bGVcIikge1xuICAgICAgICByZXN1bHQgKz0gYHN0eWxlPVwiJHtzc3JTdHlsZSh2YWx1ZSl9XCJgO1xuICAgICAgfSBlbHNlIGlmIChwcm9wID09PSBcImNsYXNzTGlzdFwiKSB7XG4gICAgICAgIHJlc3VsdCArPSBgY2xhc3M9XCIke3NzckNsYXNzTGlzdCh2YWx1ZSl9XCJgO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdG9TU1JBdHRyaWJ1dGUocHJvcCwgaXNTVkcpO1xuICAgICAgICByZXN1bHQgKz0gYCR7a2V5fT1cIiR7ZXNjYXBlKHZhbHVlLCB0cnVlKX1cImA7XG4gICAgICB9XG4gICAgICBpZiAoaSAhPT0ga2V5cy5sZW5ndGggLSAxKSByZXN1bHQgKz0gXCIgXCI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5jb25zdCBBVFRSX1JFR0VYID0gL1smPFwiXS9nLFxuICAgICAgQ09OVEVOVF9SRUdFWCA9IC9bJjxdL2c7XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgYXR0cikge1xuICBpZiAodHlwZW9mIGh0bWwgIT09IFwic3RyaW5nXCIpIHJldHVybiBodG1sO1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKGF0dHIgPyBBVFRSX1JFR0VYIDogQ09OVEVOVF9SRUdFWCwgbSA9PiB7XG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIFwiJlwiOlxuICAgICAgICByZXR1cm4gXCImYW1wO1wiO1xuICAgICAgY2FzZSBcIjxcIjpcbiAgICAgICAgcmV0dXJuIFwiJmx0O1wiO1xuICAgICAgY2FzZSAnXCInOlxuICAgICAgICByZXR1cm4gXCImcXVvdDtcIjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0TmV4dEVsZW1lbnQodGVtcGxhdGUsIGlzU1NSKSB7XG4gIGNvbnN0IGh5ZHJhdGUgPSBoeWRyYXRpb24uY29udGV4dDtcbiAgbGV0IG5vZGUsIGtleTtcbiAgaWYgKCFoeWRyYXRlIHx8ICFoeWRyYXRlLnJlZ2lzdHJ5IHx8ICEoKGtleSA9IGdldEh5ZHJhdGlvbktleSgpKSAmJiBoeWRyYXRlLnJlZ2lzdHJ5W2tleV0gJiYgKG5vZGUgPSBoeWRyYXRlLnJlZ2lzdHJ5W2tleV0uc2hpZnQoKSkpKSB7XG4gICAgY29uc3QgZWwgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgaWYgKGlzU1NSICYmIGh5ZHJhdGUpIGVsLnNldEF0dHJpYnV0ZShcIl9oa1wiLCBnZXRIeWRyYXRpb25LZXkoKSk7XG4gICAgcmV0dXJuIGVsO1xuICB9XG4gIGlmIChoeWRyYXRpb24gJiYgaHlkcmF0aW9uLmNvbXBsZXRlZCkgaHlkcmF0aW9uLmNvbXBsZXRlZC5hZGQobm9kZSk7XG4gIHJldHVybiBub2RlO1xufVxuZnVuY3Rpb24gZ2V0TmV4dE1hcmtlcihzdGFydCkge1xuICBsZXQgZW5kID0gc3RhcnQsXG4gICAgICBjb3VudCA9IDAsXG4gICAgICBjdXJyZW50ID0gW107XG4gIGlmIChoeWRyYXRpb24uY29udGV4dCAmJiBoeWRyYXRpb24uY29udGV4dC5yZWdpc3RyeSkge1xuICAgIHdoaWxlIChlbmQpIHtcbiAgICAgIGlmIChlbmQubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgY29uc3QgdiA9IGVuZC5ub2RlVmFsdWU7XG4gICAgICAgIGlmICh2ID09PSBcIiNcIikgY291bnQrKztlbHNlIGlmICh2ID09PSBcIi9cIikge1xuICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkgcmV0dXJuIFtlbmQsIGN1cnJlbnRdO1xuICAgICAgICAgIGNvdW50LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGN1cnJlbnQucHVzaChlbmQpO1xuICAgICAgZW5kID0gZW5kLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW2VuZCwgY3VycmVudF07XG59XG5mdW5jdGlvbiBydW5IeWRyYXRpb25FdmVudHMoZWwpIHtcbiAgaWYgKGh5ZHJhdGlvbiAmJiBoeWRyYXRpb24uZXZlbnRzKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29tcGxldGVkLFxuICAgICAgZXZlbnRzXG4gICAgfSA9IGh5ZHJhdGlvbjtcbiAgICB3aGlsZSAoZXZlbnRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgW2VsLCBlXSA9IGV2ZW50c1swXTtcbiAgICAgIGlmICghY29tcGxldGVkLmhhcyhlbCkpIHJldHVybjtcbiAgICAgIGV2ZW50SGFuZGxlcihlKTtcbiAgICAgIGV2ZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0SHlkcmF0aW9uS2V5KCkge1xuICByZXR1cm4gaHlkcmF0aW9uLmNvbnRleHQuaWQ7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUh5ZHJhdGlvbkV2ZW50c1NjcmlwdChldmVudE5hbWVzKSB7XG4gIHJldHVybiBgKCgpPT57XyRIWURSQVRJT049e2V2ZW50czpbXSxjb21wbGV0ZWQ6bmV3IFdlYWtTZXR9O2NvbnN0IHQ9ZT0+ZSYmZS5oYXNBdHRyaWJ1dGUmJihlLmhhc0F0dHJpYnV0ZShcIl9oa1wiKSYmZXx8dChlLmhvc3QmJmUuaG9zdCBpbnN0YW5jZW9mIE5vZGU/ZS5ob3N0OmUucGFyZW50Tm9kZSkpLGU9ZT0+e2xldCBvPWUuY29tcG9zZWRQYXRoJiZlLmNvbXBvc2VkUGF0aCgpWzBdfHxlLnRhcmdldCxzPXQobyk7cyYmIV8kSFlEUkFUSU9OLmNvbXBsZXRlZC5oYXMocykmJl8kSFlEUkFUSU9OLmV2ZW50cy5wdXNoKFtzLGVdKX07W1wiJHtldmVudE5hbWVzLmpvaW4oJ1wiLFwiJyl9XCJdLmZvckVhY2godD0+ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0LGUpKX0pKCk7YDtcbn1cbmZ1bmN0aW9uIGV2ZW50SGFuZGxlcihlKSB7XG4gIGNvbnN0IGtleSA9IGBfXyR7ZS50eXBlfWA7XG4gIGxldCBub2RlID0gZS5jb21wb3NlZFBhdGggJiYgZS5jb21wb3NlZFBhdGgoKVswXSB8fCBlLnRhcmdldDtcbiAgaWYgKGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwidGFyZ2V0XCIsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBub2RlXG4gICAgfSk7XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiY3VycmVudFRhcmdldFwiLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfSk7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IG5vZGVba2V5XTtcbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgY29uc3QgZGF0YSA9IG5vZGVbYCR7a2V5fURhdGFgXTtcbiAgICAgIGRhdGEgPyBoYW5kbGVyKGRhdGEsIGUpIDogaGFuZGxlcihlKTtcbiAgICAgIGlmIChlLmNhbmNlbEJ1YmJsZSkgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5ob3N0ICYmIG5vZGUuaG9zdCBpbnN0YW5jZW9mIE5vZGUgPyBub2RlLmhvc3QgOiBub2RlLnBhcmVudE5vZGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHNwcmVhZEV4cHJlc3Npb24obm9kZSwgcHJvcHMsIHByZXZQcm9wcyA9IHt9LCBpc1NWRywgc2tpcENoaWxkcmVuKSB7XG4gIGlmICghc2tpcENoaWxkcmVuICYmIFwiY2hpbGRyZW5cIiBpbiBwcm9wcykge1xuICAgIGNyZWF0ZUVmZmVjdCgoKSA9PiBwcmV2UHJvcHMuY2hpbGRyZW4gPSBpbnNlcnRFeHByZXNzaW9uKG5vZGUsIHByb3BzLmNoaWxkcmVuLCBwcmV2UHJvcHMuY2hpbGRyZW4pKTtcbiAgfVxuICBjcmVhdGVFZmZlY3QoKCkgPT4gYXNzaWduKG5vZGUsIHByb3BzLCBpc1NWRywgdHJ1ZSwgcHJldlByb3BzKSk7XG4gIHJldHVybiBwcmV2UHJvcHM7XG59XG5mdW5jdGlvbiBpbnNlcnRFeHByZXNzaW9uKHBhcmVudCwgdmFsdWUsIGN1cnJlbnQsIG1hcmtlciwgdW53cmFwQXJyYXkpIHtcbiAgd2hpbGUgKHR5cGVvZiBjdXJyZW50ID09PSBcImZ1bmN0aW9uXCIpIGN1cnJlbnQgPSBjdXJyZW50KCk7XG4gIGlmICh2YWx1ZSA9PT0gY3VycmVudCkgcmV0dXJuIGN1cnJlbnQ7XG4gIGNvbnN0IHQgPSB0eXBlb2YgdmFsdWUsXG4gICAgICAgIG11bHRpID0gbWFya2VyICE9PSB1bmRlZmluZWQ7XG4gIHBhcmVudCA9IG11bHRpICYmIGN1cnJlbnRbMF0gJiYgY3VycmVudFswXS5wYXJlbnROb2RlIHx8IHBhcmVudDtcbiAgaWYgKHQgPT09IFwic3RyaW5nXCIgfHwgdCA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmICh0ID09PSBcIm51bWJlclwiKSB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgaWYgKG11bHRpKSB7XG4gICAgICBsZXQgbm9kZSA9IGN1cnJlbnRbMF07XG4gICAgICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG4gICAgICBjdXJyZW50ID0gY2xlYW5DaGlsZHJlbihwYXJlbnQsIGN1cnJlbnQsIG1hcmtlciwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjdXJyZW50ICE9PSBcIlwiICYmIHR5cGVvZiBjdXJyZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGN1cnJlbnQgPSBwYXJlbnQuZmlyc3RDaGlsZC5kYXRhID0gdmFsdWU7XG4gICAgICB9IGVsc2UgY3VycmVudCA9IHBhcmVudC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsIHx8IHQgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgaWYgKGh5ZHJhdGlvbi5jb250ZXh0ICYmIGh5ZHJhdGlvbi5jb250ZXh0LnJlZ2lzdHJ5KSByZXR1cm4gY3VycmVudDtcbiAgICBjdXJyZW50ID0gY2xlYW5DaGlsZHJlbihwYXJlbnQsIGN1cnJlbnQsIG1hcmtlcik7XG4gIH0gZWxzZSBpZiAodCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY3JlYXRlRWZmZWN0KCgpID0+IGN1cnJlbnQgPSBpbnNlcnRFeHByZXNzaW9uKHBhcmVudCwgdmFsdWUoKSwgY3VycmVudCwgbWFya2VyKSk7XG4gICAgcmV0dXJuICgpID0+IGN1cnJlbnQ7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGlmIChub3JtYWxpemVJbmNvbWluZ0FycmF5KGFycmF5LCB2YWx1ZSwgdW53cmFwQXJyYXkpKSB7XG4gICAgICBjcmVhdGVFZmZlY3QoKCkgPT4gY3VycmVudCA9IGluc2VydEV4cHJlc3Npb24ocGFyZW50LCBhcnJheSwgY3VycmVudCwgbWFya2VyLCB0cnVlKSk7XG4gICAgICByZXR1cm4gKCkgPT4gY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGh5ZHJhdGlvbi5jb250ZXh0ICYmIGh5ZHJhdGlvbi5jb250ZXh0LnJlZ2lzdHJ5KSByZXR1cm4gYXJyYXk7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY3VycmVudCA9IGNsZWFuQ2hpbGRyZW4ocGFyZW50LCBjdXJyZW50LCBtYXJrZXIpO1xuICAgICAgaWYgKG11bHRpKSByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudCkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYXBwZW5kTm9kZXMocGFyZW50LCBhcnJheSwgbWFya2VyKTtcbiAgICAgICAgfSBlbHNlIHJlY29uY2lsZUFycmF5cyhwYXJlbnQsIGN1cnJlbnQsIGFycmF5KTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudCA9PSBudWxsIHx8IGN1cnJlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgYXBwZW5kTm9kZXMocGFyZW50LCBhcnJheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvbmNpbGVBcnJheXMocGFyZW50LCBtdWx0aSAmJiBjdXJyZW50IHx8IFtwYXJlbnQuZmlyc3RDaGlsZF0sIGFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudCA9IGFycmF5O1xuICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1cnJlbnQpKSB7XG4gICAgICBpZiAobXVsdGkpIHJldHVybiBjdXJyZW50ID0gY2xlYW5DaGlsZHJlbihwYXJlbnQsIGN1cnJlbnQsIG1hcmtlciwgdmFsdWUpO1xuICAgICAgY2xlYW5DaGlsZHJlbihwYXJlbnQsIGN1cnJlbnQsIG51bGwsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnQgPT0gbnVsbCB8fCBjdXJyZW50ID09PSBcIlwiIHx8ICFwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICB9IGVsc2UgcGFyZW50LnJlcGxhY2VDaGlsZCh2YWx1ZSwgcGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIGN1cnJlbnQgPSB2YWx1ZTtcbiAgfSBlbHNlIGNvbnNvbGUud2FybihgU2tpcHBlZCBpbnNlcnRpbmdgLCB2YWx1ZSk7XG4gIHJldHVybiBjdXJyZW50O1xufVxuZnVuY3Rpb24gbm9ybWFsaXplSW5jb21pbmdBcnJheShub3JtYWxpemVkLCBhcnJheSwgdW53cmFwKSB7XG4gIGxldCBkeW5hbWljID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGxldCBpdGVtID0gYXJyYXlbaV0sXG4gICAgICAgIHQ7XG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBub3JtYWxpemVkLnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIGlmIChpdGVtID09IG51bGwgfHwgaXRlbSA9PT0gdHJ1ZSB8fCBpdGVtID09PSBmYWxzZSkgOyBlbHNlIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICBkeW5hbWljID0gbm9ybWFsaXplSW5jb21pbmdBcnJheShub3JtYWxpemVkLCBpdGVtKSB8fCBkeW5hbWljO1xuICAgIH0gZWxzZSBpZiAoKHQgPSB0eXBlb2YgaXRlbSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG5vcm1hbGl6ZWQucHVzaChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtKSk7XG4gICAgfSBlbHNlIGlmICh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGlmICh1bndyYXApIHtcbiAgICAgICAgY29uc3QgaWR4ID0gaXRlbSgpO1xuICAgICAgICBkeW5hbWljID0gbm9ybWFsaXplSW5jb21pbmdBcnJheShub3JtYWxpemVkLCBBcnJheS5pc0FycmF5KGlkeCkgPyBpZHggOiBbaWR4XSkgfHwgZHluYW1pYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbGl6ZWQucHVzaChpdGVtKTtcbiAgICAgICAgZHluYW1pYyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIG5vcm1hbGl6ZWQucHVzaChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpdGVtLnRvU3RyaW5nKCkpKTtcbiAgfVxuICByZXR1cm4gZHluYW1pYztcbn1cbmZ1bmN0aW9uIGFwcGVuZE5vZGVzKHBhcmVudCwgYXJyYXksIG1hcmtlcikge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHBhcmVudC5pbnNlcnRCZWZvcmUoYXJyYXlbaV0sIG1hcmtlcik7XG59XG5mdW5jdGlvbiBjbGVhbkNoaWxkcmVuKHBhcmVudCwgY3VycmVudCwgbWFya2VyLCByZXBsYWNlbWVudCkge1xuICBpZiAobWFya2VyID09PSB1bmRlZmluZWQpIHJldHVybiBwYXJlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBub2RlID0gcmVwbGFjZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7XG4gIGlmIChjdXJyZW50Lmxlbmd0aCkge1xuICAgIGxldCBpbnNlcnRlZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSBjdXJyZW50Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBlbCA9IGN1cnJlbnRbaV07XG4gICAgICBpZiAobm9kZSAhPT0gZWwpIHtcbiAgICAgICAgY29uc3QgaXNQYXJlbnQgPSBlbC5wYXJlbnROb2RlID09PSBwYXJlbnQ7XG4gICAgICAgIGlmICghaW5zZXJ0ZWQgJiYgIWkpIGlzUGFyZW50ID8gcGFyZW50LnJlcGxhY2VDaGlsZChub2RlLCBlbCkgOiBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG1hcmtlcik7ZWxzZSBpc1BhcmVudCAmJiBwYXJlbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgfSBlbHNlIGluc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIG1hcmtlcik7XG4gIHJldHVybiBbbm9kZV07XG59XG5mdW5jdGlvbiB0b1NTUkF0dHJpYnV0ZShrZXksIGlzU1ZHKSB7XG4gIGlmIChpc1NWRykge1xuICAgIGNvbnN0IGF0dHIgPSBTVkdBdHRyaWJ1dGVzW2tleV07XG4gICAgaWYgKGF0dHIpIHtcbiAgICAgIGlmIChhdHRyLmFsaWFzKSBrZXkgPSBhdHRyLmFsaWFzO1xuICAgIH0gZWxzZSBrZXkgPSBrZXkucmVwbGFjZSgvKFtBLVpdKS9nLCBnID0+IGAtJHtnWzBdLnRvTG93ZXJDYXNlKCl9YCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYXR0ciA9IFNWR0F0dHJpYnV0ZXNba2V5XTtcbiAgICBpZiAoYXR0ciAmJiBhdHRyLmFsaWFzKSBrZXkgPSBhdHRyLmFsaWFzO1xuICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBrZXk7XG59XG5mdW5jdGlvbiByZXNvbHZlU1NSTm9kZShub2RlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSByZXR1cm4gbm9kZS5tYXAocmVzb2x2ZVNTUk5vZGUpLmpvaW4oXCJcIik7XG4gIGNvbnN0IHQgPSB0eXBlb2Ygbm9kZTtcbiAgaWYgKG5vZGUgJiYgdCA9PT0gXCJvYmplY3RcIikgcmV0dXJuIHJlc29sdmVTU1JOb2RlKG5vZGUudCk7XG4gIGlmICh0ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiByZXNvbHZlU1NSTm9kZShub2RlKCkpO1xuICByZXR1cm4gdCA9PT0gXCJzdHJpbmdcIiA/IG5vZGUgOiBKU09OLnN0cmluZ2lmeShub2RlKTtcbn1cblxuZnVuY3Rpb24gUG9ydGFsKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VTaGFkb3dcbiAgfSA9IHByb3BzLFxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSxcbiAgICAgICAgbW91bnQgPSBwcm9wcy5tb3VudCB8fCBkb2N1bWVudC5ib2R5LFxuICAgICAgICByZW5kZXJSb290ID0gdXNlU2hhZG93ICYmIGNvbnRhaW5lci5hdHRhY2hTaGFkb3cgPyBjb250YWluZXIuYXR0YWNoU2hhZG93KHtcbiAgICBtb2RlOiBcIm9wZW5cIlxuICB9KSA6IGNvbnRhaW5lcjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRhaW5lciwgXCJob3N0XCIsIHtcbiAgICBnZXQoKSB7XG4gICAgICByZXR1cm4gbWFya2VyLnBhcmVudE5vZGU7XG4gICAgfVxuICB9KTtcbiAgaW5zZXJ0KHJlbmRlclJvb3QsIHNhbXBsZSgoKSA9PiBwcm9wcy5jaGlsZHJlbikpO1xuICBtb3VudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBwcm9wcy5yZWYgJiYgcHJvcHMucmVmKGNvbnRhaW5lcik7XG4gIG9uQ2xlYW51cCgoKSA9PiBtb3VudC5yZW1vdmVDaGlsZChjb250YWluZXIpKTtcbiAgcmV0dXJuIG1hcmtlcjtcbn1cbmZ1bmN0aW9uIER5bmFtaWMocHJvcHMpIHtcbiAgY29uc3QgW3AsIG90aGVyc10gPSBzcGxpdFByb3BzKHByb3BzLCBbXCJjb21wb25lbnRcIl0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXAgPSBwLmNvbXBvbmVudCxcbiAgICAgICAgICB0ID0gdHlwZW9mIGNvbXA7XG4gICAgaWYgKGNvbXApIHtcbiAgICAgIGlmICh0ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBzYW1wbGUoKCkgPT4gY29tcChvdGhlcnMpKTtlbHNlIGlmICh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjb21wKTtcbiAgICAgICAgc3ByZWFkKGVsLCBvdGhlcnMpO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyBEeW5hbWljLCBQb3J0YWwsIGFzc2lnbiwgY2xhc3NMaXN0LCBjbGVhckRlbGVnYXRlZEV2ZW50cywgZGVsZWdhdGVFdmVudHMsIGVzY2FwZSwgZ2VuZXJhdGVIeWRyYXRpb25FdmVudHNTY3JpcHQsIGdldEh5ZHJhdGlvbktleSwgZ2V0TmV4dEVsZW1lbnQsIGdldE5leHRNYXJrZXIsIGh5ZHJhdGUsIGluc2VydCwgbWVtbywgcmVuZGVyLCByZW5kZXJET01Ub1N0cmluZywgcmVuZGVyVG9TdHJpbmcsIHJ1bkh5ZHJhdGlvbkV2ZW50cywgc2V0QXR0cmlidXRlLCBzZXRBdHRyaWJ1dGVOUywgc3ByZWFkLCBzc3IsIHNzckNsYXNzTGlzdCwgc3NyU3ByZWFkLCBzc3JTdHlsZSwgc3R5bGUsIHRlbXBsYXRlIH07XG4iLCJsZXQgdGFza0lkQ291bnRlciA9IDEsXG4gICAgaXNDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlLFxuICAgIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZSxcbiAgICB0YXNrUXVldWUgPSBbXSxcbiAgICBjdXJyZW50VGFzayA9IG51bGwsXG4gICAgc2hvdWxkWWllbGRUb0hvc3QgPSBudWxsLFxuICAgIHlpZWxkSW50ZXJ2YWwgPSA1LFxuICAgIGRlYWRsaW5lID0gMCxcbiAgICBtYXhZaWVsZEludGVydmFsID0gMzAwLFxuICAgIHNjaGVkdWxlQ2FsbGJhY2sgPSBudWxsLFxuICAgIHNjaGVkdWxlZENhbGxiYWNrID0gbnVsbDtcbmNvbnN0IG1heFNpZ25lZDMxQml0SW50ID0gMTA3Mzc0MTgyMztcbmZ1bmN0aW9uIHNldHVwU2NoZWR1bGVyKCkge1xuICBpZiAod2luZG93ICYmIHdpbmRvdy5NZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKSxcbiAgICAgICAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBzY2hlZHVsZUNhbGxiYWNrID0gKCkgPT4gcG9ydC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIGlmIChzY2hlZHVsZWRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBkZWFkbGluZSA9IGN1cnJlbnRUaW1lICsgeWllbGRJbnRlcnZhbDtcbiAgICAgICAgY29uc3QgaGFzVGltZVJlbWFpbmluZyA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaGFzTW9yZVdvcmsgPSBzY2hlZHVsZWRDYWxsYmFjayhoYXNUaW1lUmVtYWluaW5nLCBjdXJyZW50VGltZSk7XG4gICAgICAgICAgaWYgKCFoYXNNb3JlV29yaykge1xuICAgICAgICAgICAgc2NoZWR1bGVkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGxldCBfY2FsbGJhY2s7XG4gICAgc2NoZWR1bGVDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghX2NhbGxiYWNrKSB7XG4gICAgICAgIF9jYWxsYmFjayA9IHNjaGVkdWxlZENhbGxiYWNrO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgIGRlYWRsaW5lID0gY3VycmVudFRpbWUgKyB5aWVsZEludGVydmFsO1xuICAgICAgICAgIGNvbnN0IGhhc01vcmVXb3JrID0gX2NhbGxiYWNrKHRydWUsIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBfY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgIGlmIChoYXNNb3JlV29yaykgc2NoZWR1bGVDYWxsYmFjaygpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcpIHtcbiAgICBjb25zdCBzY2hlZHVsaW5nID0gbmF2aWdhdG9yLnNjaGVkdWxpbmc7XG4gICAgc2hvdWxkWWllbGRUb0hvc3QgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgaWYgKGN1cnJlbnRUaW1lID49IGRlYWRsaW5lKSB7XG4gICAgICAgIGlmIChzY2hlZHVsaW5nLmlzSW5wdXRQZW5kaW5nKCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFRpbWUgPj0gbWF4WWllbGRJbnRlcnZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHNob3VsZFlpZWxkVG9Ib3N0ID0gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgPj0gZGVhZGxpbmU7XG4gIH1cbn1cbmZ1bmN0aW9uIGVucXVldWUodGFza1F1ZXVlLCB0YXNrKSB7XG4gIGZ1bmN0aW9uIGZpbmRJbmRleCgpIHtcbiAgICBsZXQgbSA9IDA7XG4gICAgbGV0IG4gPSB0YXNrUXVldWUubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAobSA8PSBuKSB7XG4gICAgICBsZXQgayA9IG4gKyBtID4+IDE7XG4gICAgICBsZXQgY21wID0gdGFzay5leHBpcmF0aW9uVGltZSAtIHRhc2tRdWV1ZVtrXS5leHBpcmF0aW9uVGltZTtcbiAgICAgIGlmIChjbXAgPiAwKSBtID0gayArIDE7ZWxzZSBpZiAoY21wIDwgMCkgbiA9IGsgLSAxO2Vsc2UgcmV0dXJuIGs7XG4gICAgfVxuICAgIHJldHVybiBtO1xuICB9XG4gIHRhc2tRdWV1ZS5zcGxpY2UoZmluZEluZGV4KCksIDAsIHRhc2spO1xufVxuZnVuY3Rpb24gcmVxdWVzdENhbGxiYWNrKGZuLCBvcHRpb25zKSB7XG4gIGlmICghc2NoZWR1bGVDYWxsYmFjaykgc2V0dXBTY2hlZHVsZXIoKTtcbiAgbGV0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpLFxuICAgICAgdGltZW91dCA9IG1heFNpZ25lZDMxQml0SW50O1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnRpbWVvdXQpIHRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgaWQ6IHRhc2tJZENvdW50ZXIrKyxcbiAgICBmbixcbiAgICBzdGFydFRpbWUsXG4gICAgZXhwaXJhdGlvblRpbWU6IHN0YXJ0VGltZSArIHRpbWVvdXRcbiAgfTtcbiAgZW5xdWV1ZSh0YXNrUXVldWUsIG5ld1Rhc2spO1xuICBpZiAoIWlzQ2FsbGJhY2tTY2hlZHVsZWQgJiYgIWlzUGVyZm9ybWluZ1dvcmspIHtcbiAgICBpc0NhbGxiYWNrU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBzY2hlZHVsZWRDYWxsYmFjayA9IGZsdXNoV29yaztcbiAgICBzY2hlZHVsZUNhbGxiYWNrKCk7XG4gIH1cbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5mdW5jdGlvbiBjYW5jZWxDYWxsYmFjayh0YXNrKSB7XG4gIHRhc2suZm4gPSBudWxsO1xufVxuZnVuY3Rpb24gZmx1c2hXb3JrKGhhc1RpbWVSZW1haW5pbmcsIGluaXRpYWxUaW1lKSB7XG4gIGlzQ2FsbGJhY2tTY2hlZHVsZWQgPSBmYWxzZTtcbiAgaXNQZXJmb3JtaW5nV29yayA9IHRydWU7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdvcmtMb29wKGhhc1RpbWVSZW1haW5pbmcsIGluaXRpYWxUaW1lKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiB3b3JrTG9vcChoYXNUaW1lUmVtYWluaW5nLCBpbml0aWFsVGltZSkge1xuICBsZXQgY3VycmVudFRpbWUgPSBpbml0aWFsVGltZTtcbiAgY3VycmVudFRhc2sgPSB0YXNrUXVldWVbMF0gfHwgbnVsbDtcbiAgd2hpbGUgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgaWYgKGN1cnJlbnRUYXNrLmV4cGlyYXRpb25UaW1lID4gY3VycmVudFRpbWUgJiYgKCFoYXNUaW1lUmVtYWluaW5nIHx8IHNob3VsZFlpZWxkVG9Ib3N0KCkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjdXJyZW50VGFzay5mbjtcbiAgICBpZiAoY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIGN1cnJlbnRUYXNrLmZuID0gbnVsbDtcbiAgICAgIGNvbnN0IGRpZFVzZXJDYWxsYmFja1RpbWVvdXQgPSBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZTtcbiAgICAgIGNhbGxiYWNrKGRpZFVzZXJDYWxsYmFja1RpbWVvdXQpO1xuICAgICAgY3VycmVudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gdGFza1F1ZXVlWzBdKSB7XG4gICAgICAgIHRhc2tRdWV1ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0YXNrUXVldWUuc2hpZnQoKTtcbiAgICBjdXJyZW50VGFzayA9IHRhc2tRdWV1ZVswXSB8fCBudWxsO1xuICB9XG4gIHJldHVybiBjdXJyZW50VGFzayAhPT0gbnVsbDtcbn1cblxuY29uc3QgZXF1YWxGbiA9IChhLCBiKSA9PiBhID09PSBiO1xuY29uc3QgRVJST1IgPSBTeW1ib2woXCJlcnJvclwiKTtcbmNvbnN0IE5PVFBFTkRJTkcgPSB7fTtcbmNvbnN0IFNUQUxFID0gMTtcbmNvbnN0IFBFTkRJTkcgPSAyO1xuY29uc3QgVU5PV05FRCA9IHtcbiAgb3duZWQ6IG51bGwsXG4gIGNsZWFudXBzOiBudWxsLFxuICBjb250ZXh0OiBudWxsLFxuICBvd25lcjogbnVsbFxufTtcbmxldCBPd25lciA9IG51bGw7XG5sZXQgTGlzdGVuZXIgPSBudWxsO1xubGV0IFBlbmRpbmcgPSBudWxsO1xubGV0IFVwZGF0ZXMgPSBudWxsO1xubGV0IEFmdGVycyA9IFtdO1xubGV0IEV4ZWNDb3VudCA9IDA7XG5mdW5jdGlvbiBjcmVhdGVSb290KGZuLCBkZXRhY2hlZE93bmVyKSB7XG4gIGRldGFjaGVkT3duZXIgJiYgKE93bmVyID0gZGV0YWNoZWRPd25lcik7XG4gIGNvbnN0IGxpc3RlbmVyID0gTGlzdGVuZXIsXG4gICAgICAgIG93bmVyID0gT3duZXIsXG4gICAgICAgIHJvb3QgPSBmbi5sZW5ndGggPT09IDAgPyBVTk9XTkVEIDoge1xuICAgIG93bmVkOiBudWxsLFxuICAgIGNsZWFudXBzOiBudWxsLFxuICAgIGNvbnRleHQ6IG51bGwsXG4gICAgb3duZXJcbiAgfTtcbiAgT3duZXIgPSByb290O1xuICBMaXN0ZW5lciA9IG51bGw7XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgcmVzdWx0ID0gZm4oKCkgPT4gY2xlYW5Ob2RlKHJvb3QpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgZm5zID0gbG9va3VwKE93bmVyLCBFUlJPUik7XG4gICAgaWYgKCFmbnMpIHRocm93IGVycjtcbiAgICBmbnMuZm9yRWFjaChmID0+IGYoZXJyKSk7XG4gIH0gZmluYWxseSB7XG4gICAgd2hpbGUgKEFmdGVycy5sZW5ndGgpIEFmdGVycy5zaGlmdCgpKCk7XG4gICAgTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICBPd25lciA9IG93bmVyO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjcmVhdGVTaWduYWwodmFsdWUsIGFyZUVxdWFsKSB7XG4gIGNvbnN0IHMgPSB7XG4gICAgdmFsdWUsXG4gICAgb2JzZXJ2ZXJzOiBudWxsLFxuICAgIG9ic2VydmVyU2xvdHM6IG51bGwsXG4gICAgcGVuZGluZzogTk9UUEVORElORyxcbiAgICBjb21wYXJhdG9yOiBhcmVFcXVhbCA/IHR5cGVvZiBhcmVFcXVhbCA9PT0gXCJmdW5jdGlvblwiID8gYXJlRXF1YWwgOiBlcXVhbEZuIDogdW5kZWZpbmVkXG4gIH07XG4gIHJldHVybiBbcmVhZFNpZ25hbC5iaW5kKHMpLCB3cml0ZVNpZ25hbC5iaW5kKHMpXTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVmZmVjdChmbiwgdmFsdWUpIHtcbiAgdXBkYXRlQ29tcHV0YXRpb24oY3JlYXRlQ29tcHV0YXRpb24oZm4sIHZhbHVlKSk7XG59XG5mdW5jdGlvbiBjcmVhdGVEZXBlbmRlbnRFZmZlY3QoZm4sIGRlcHMsIGRlZmVyKSB7XG4gIGNvbnN0IHJlc29sdmVkID0gQXJyYXkuaXNBcnJheShkZXBzKSA/IGNhbGxBbGwoZGVwcykgOiBkZXBzO1xuICBkZWZlciA9ICEhZGVmZXI7XG4gIGNyZWF0ZUVmZmVjdCh2YWx1ZSA9PiB7XG4gICAgY29uc3QgbGlzdGVuZXIgPSBMaXN0ZW5lcjtcbiAgICByZXNvbHZlZCgpO1xuICAgIGlmIChkZWZlcikgZGVmZXIgPSBmYWxzZTtlbHNlIHtcbiAgICAgIExpc3RlbmVyID0gbnVsbDtcbiAgICAgIHZhbHVlID0gZm4odmFsdWUpO1xuICAgICAgTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1lbW8oZm4sIHZhbHVlLCBhcmVFcXVhbCkge1xuICBjb25zdCBjID0gY3JlYXRlQ29tcHV0YXRpb24oZm4sIHZhbHVlKTtcbiAgYy5wZW5kaW5nID0gTk9UUEVORElORztcbiAgYy5vYnNlcnZlcnMgPSBudWxsO1xuICBjLm9ic2VydmVyU2xvdHMgPSBudWxsO1xuICBjLmNvbXBhcmF0b3IgPSBhcmVFcXVhbCA/IHR5cGVvZiBhcmVFcXVhbCA9PT0gXCJmdW5jdGlvblwiID8gYXJlRXF1YWwgOiBlcXVhbEZuIDogdW5kZWZpbmVkO1xuICB1cGRhdGVDb21wdXRhdGlvbihjKTtcbiAgcmV0dXJuIHJlYWRTaWduYWwuYmluZChjKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZURlZmVycmVkKGZuLCBvcHRpb25zKSB7XG4gIGxldCB0LFxuICAgICAgdGltZW91dCA9IG9wdGlvbnMgPyBvcHRpb25zLnRpbWVvdXRNcyA6IHVuZGVmaW5lZDtcbiAgY29uc3QgW2RlZmVycmVkLCBzZXREZWZlcnJlZF0gPSBjcmVhdGVTaWduYWwoZm4oKSk7XG4gIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgZm4oKTtcbiAgICBpZiAoIXQgfHwgIXQuZm4pIHQgPSByZXF1ZXN0Q2FsbGJhY2soKCkgPT4gc2V0RGVmZXJyZWQoZm4oKSksIHRpbWVvdXQgIT09IHVuZGVmaW5lZCA/IHtcbiAgICAgIHRpbWVvdXRcbiAgICB9IDogdW5kZWZpbmVkKTtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZDtcbn1cbmZ1bmN0aW9uIGZyZWV6ZShmbikge1xuICBsZXQgcGVuZGluZyA9IFBlbmRpbmcsXG4gICAgICBxID0gUGVuZGluZyA9IFtdO1xuICBjb25zdCByZXN1bHQgPSBmbigpO1xuICBQZW5kaW5nID0gcGVuZGluZztcbiAgcnVuVXBkYXRlcygoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkYXRhID0gcVtpXTtcbiAgICAgIGlmIChkYXRhLnBlbmRpbmcgIT09IE5PVFBFTkRJTkcpIHtcbiAgICAgICAgY29uc3QgcGVuZGluZyA9IGRhdGEucGVuZGluZztcbiAgICAgICAgZGF0YS5wZW5kaW5nID0gTk9UUEVORElORztcbiAgICAgICAgd3JpdGVTaWduYWwuY2FsbChkYXRhLCBwZW5kaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gc2FtcGxlKGZuKSB7XG4gIGxldCByZXN1bHQsXG4gICAgICBsaXN0ZW5lciA9IExpc3RlbmVyO1xuICBMaXN0ZW5lciA9IG51bGw7XG4gIHJlc3VsdCA9IGZuKCk7XG4gIExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBhZnRlckVmZmVjdHMoZm4pIHtcbiAgQWZ0ZXJzLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gb25DbGVhbnVwKGZuKSB7XG4gIGlmIChPd25lciA9PT0gbnVsbCkgY29uc29sZS53YXJuKFwiY2xlYW51cHMgY3JlYXRlZCBvdXRzaWRlIGEgYGNyZWF0ZVJvb3RgIG9yIGByZW5kZXJgIHdpbGwgbmV2ZXIgYmUgcnVuXCIpO2Vsc2UgaWYgKE93bmVyLmNsZWFudXBzID09PSBudWxsKSBPd25lci5jbGVhbnVwcyA9IFtmbl07ZWxzZSBPd25lci5jbGVhbnVwcy5wdXNoKGZuKTtcbiAgcmV0dXJuIGZuO1xufVxuZnVuY3Rpb24gb25FcnJvcihmbikge1xuICBpZiAoT3duZXIgPT09IG51bGwpIGNvbnNvbGUud2FybihcImVycm9yIGhhbmRsZXJzIGNyZWF0ZWQgb3V0c2lkZSBhIGBjcmVhdGVSb290YCBvciBgcmVuZGVyYCB3aWxsIG5ldmVyIGJlIHJ1blwiKTtlbHNlIGlmIChPd25lci5jb250ZXh0ID09PSBudWxsKSBPd25lci5jb250ZXh0ID0ge1xuICAgIFtFUlJPUl06IFtmbl1cbiAgfTtlbHNlIGlmICghT3duZXIuY29udGV4dFtFUlJPUl0pIE93bmVyLmNvbnRleHRbRVJST1JdID0gW2ZuXTtlbHNlIE93bmVyLmNvbnRleHRbRVJST1JdLnB1c2goZm4pO1xufVxuZnVuY3Rpb24gaXNMaXN0ZW5pbmcoKSB7XG4gIHJldHVybiBMaXN0ZW5lciAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG4gIGNvbnN0IGlkID0gU3ltYm9sKFwiY29udGV4dFwiKTtcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBQcm92aWRlcjogY3JlYXRlUHJvdmlkZXIoaWQpLFxuICAgIGRlZmF1bHRWYWx1ZVxuICB9O1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG4gIHJldHVybiBsb29rdXAoT3duZXIsIGNvbnRleHQuaWQpIHx8IGNvbnRleHQuZGVmYXVsdFZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0Q29udGV4dE93bmVyKCkge1xuICByZXR1cm4gT3duZXI7XG59XG5mdW5jdGlvbiByZWFkU2lnbmFsKCkge1xuICBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnNvdXJjZXMpIHtcbiAgICBjb25zdCB1cGRhdGVzID0gVXBkYXRlcztcbiAgICBVcGRhdGVzID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID09PSBTVEFMRSA/IHVwZGF0ZUNvbXB1dGF0aW9uKHRoaXMpIDogbG9va0Rvd25zdHJlYW0odGhpcyk7XG4gICAgVXBkYXRlcyA9IHVwZGF0ZXM7XG4gIH1cbiAgaWYgKExpc3RlbmVyKSB7XG4gICAgY29uc3Qgc1Nsb3QgPSB0aGlzLm9ic2VydmVycyA/IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA6IDA7XG4gICAgaWYgKCFMaXN0ZW5lci5zb3VyY2VzKSB7XG4gICAgICBMaXN0ZW5lci5zb3VyY2VzID0gW3RoaXNdO1xuICAgICAgTGlzdGVuZXIuc291cmNlU2xvdHMgPSBbc1Nsb3RdO1xuICAgIH0gZWxzZSB7XG4gICAgICBMaXN0ZW5lci5zb3VyY2VzLnB1c2godGhpcyk7XG4gICAgICBMaXN0ZW5lci5zb3VyY2VTbG90cy5wdXNoKHNTbG90KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9ic2VydmVycykge1xuICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbTGlzdGVuZXJdO1xuICAgICAgdGhpcy5vYnNlcnZlclNsb3RzID0gW0xpc3RlbmVyLnNvdXJjZXMubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goTGlzdGVuZXIpO1xuICAgICAgdGhpcy5vYnNlcnZlclNsb3RzLnB1c2goTGlzdGVuZXIuc291cmNlcy5sZW5ndGggLSAxKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59XG5mdW5jdGlvbiB3cml0ZVNpZ25hbCh2YWx1ZSkge1xuICBpZiAodGhpcy5jb21wYXJhdG9yICYmIHRoaXMuY29tcGFyYXRvcih0aGlzLnZhbHVlLCB2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgaWYgKFBlbmRpbmcpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nID09PSBOT1RQRU5ESU5HKSBQZW5kaW5nLnB1c2godGhpcyk7XG4gICAgdGhpcy5wZW5kaW5nID0gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgaWYgKHRoaXMub2JzZXJ2ZXJzICYmICghVXBkYXRlcyB8fCB0aGlzLm9ic2VydmVycy5sZW5ndGgpKSB7XG4gICAgcnVuVXBkYXRlcygoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLm9ic2VydmVyc1tpXTtcbiAgICAgICAgaWYgKG8ub2JzZXJ2ZXJzICYmIG8uc3RhdGUgIT09IFBFTkRJTkcpIG1hcmtVcHN0cmVhbShvKTtcbiAgICAgICAgby5zdGF0ZSA9IFNUQUxFO1xuICAgICAgICBpZiAoVXBkYXRlcy5sZW5ndGggPiAxMGU1KSB0aHJvdyBuZXcgRXJyb3IoXCJQb3RlbnRpYWwgSW5maW5pdGUgTG9vcCBEZXRlY3RlZC5cIik7XG4gICAgICAgIFVwZGF0ZXMucHVzaChvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiB1cGRhdGVDb21wdXRhdGlvbihub2RlKSB7XG4gIGlmICghbm9kZS5mbikgcmV0dXJuO1xuICBjbGVhbk5vZGUobm9kZSk7XG4gIGNvbnN0IG93bmVyID0gT3duZXIsXG4gICAgICAgIGxpc3RlbmVyID0gTGlzdGVuZXIsXG4gICAgICAgIHRpbWUgPSBFeGVjQ291bnQ7XG4gIExpc3RlbmVyID0gT3duZXIgPSBub2RlO1xuICBjb25zdCBuZXh0VmFsdWUgPSBub2RlLmZuKG5vZGUudmFsdWUpO1xuICBpZiAoIW5vZGUudXBkYXRlZEF0IHx8IG5vZGUudXBkYXRlZEF0IDw9IHRpbWUpIHtcbiAgICBpZiAobm9kZS5vYnNlcnZlcnMgJiYgbm9kZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICB3cml0ZVNpZ25hbC5jYWxsKG5vZGUsIG5leHRWYWx1ZSk7XG4gICAgfSBlbHNlIG5vZGUudmFsdWUgPSBuZXh0VmFsdWU7XG4gICAgbm9kZS51cGRhdGVkQXQgPSB0aW1lO1xuICB9XG4gIExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIE93bmVyID0gb3duZXI7XG59XG5mdW5jdGlvbiBjcmVhdGVDb21wdXRhdGlvbihmbiwgaW5pdCkge1xuICBjb25zdCBjID0ge1xuICAgIGZuLFxuICAgIHN0YXRlOiAwLFxuICAgIHVwZGF0ZWRBdDogbnVsbCxcbiAgICBvd25lZDogbnVsbCxcbiAgICBzb3VyY2VzOiBudWxsLFxuICAgIHNvdXJjZVNsb3RzOiBudWxsLFxuICAgIGNsZWFudXBzOiBudWxsLFxuICAgIHZhbHVlOiBpbml0LFxuICAgIG93bmVyOiBPd25lcixcbiAgICBjb250ZXh0OiBudWxsXG4gIH07XG4gIGlmIChPd25lciA9PT0gbnVsbCkgY29uc29sZS53YXJuKFwiY29tcHV0YXRpb25zIGNyZWF0ZWQgb3V0c2lkZSBhIGBjcmVhdGVSb290YCBvciBgcmVuZGVyYCB3aWxsIG5ldmVyIGJlIGRpc3Bvc2VkXCIpO2Vsc2UgaWYgKE93bmVyICE9PSBVTk9XTkVEKSB7XG4gICAgaWYgKCFPd25lci5vd25lZCkgT3duZXIub3duZWQgPSBbY107ZWxzZSBPd25lci5vd25lZC5wdXNoKGMpO1xuICB9XG4gIHJldHVybiBjO1xufVxuZnVuY3Rpb24gcnVuVG9wKG5vZGUpIHtcbiAgbGV0IHRvcCA9IG5vZGUuc3RhdGUgPT09IFNUQUxFICYmIG5vZGU7XG4gIHdoaWxlIChub2RlLmZuICYmIChub2RlID0gbm9kZS5vd25lcikpIG5vZGUuc3RhdGUgPT09IFNUQUxFICYmICh0b3AgPSBub2RlKTtcbiAgdG9wICYmIHVwZGF0ZUNvbXB1dGF0aW9uKHRvcCk7XG59XG5mdW5jdGlvbiBydW5VcGRhdGVzKGZuKSB7XG4gIGlmIChVcGRhdGVzKSByZXR1cm4gZm4oKTtcbiAgVXBkYXRlcyA9IFtdO1xuICBFeGVjQ291bnQrKztcbiAgdHJ5IHtcbiAgICBmbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVXBkYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcnVuVG9wKFVwZGF0ZXNbaV0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IGZucyA9IGxvb2t1cChPd25lciwgRVJST1IpO1xuICAgICAgICBpZiAoIWZucykgdGhyb3cgZXJyO1xuICAgICAgICBmbnMuZm9yRWFjaChmID0+IGYoZXJyKSk7XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIFVwZGF0ZXMgPSBudWxsO1xuICAgIHdoaWxlIChBZnRlcnMubGVuZ3RoKSBBZnRlcnMuc2hpZnQoKSgpO1xuICB9XG59XG5mdW5jdGlvbiBsb29rRG93bnN0cmVhbShub2RlKSB7XG4gIG5vZGUuc3RhdGUgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUuc291cmNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNvdXJjZSA9IG5vZGUuc291cmNlc1tpXTtcbiAgICBpZiAoc291cmNlLnNvdXJjZXMpIHtcbiAgICAgIGlmIChzb3VyY2Uuc3RhdGUgPT09IFNUQUxFKSBydW5Ub3Aoc291cmNlKTtlbHNlIGlmIChzb3VyY2Uuc3RhdGUgPT09IFBFTkRJTkcpIGxvb2tEb3duc3RyZWFtKHNvdXJjZSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVXBzdHJlYW0obm9kZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUub2JzZXJ2ZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbyA9IG5vZGUub2JzZXJ2ZXJzW2ldO1xuICAgIGlmICghby5zdGF0ZSkge1xuICAgICAgby5zdGF0ZSA9IFBFTkRJTkc7XG4gICAgICBvLm9ic2VydmVycyAmJiBtYXJrVXBzdHJlYW0obyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjbGVhbk5vZGUobm9kZSkge1xuICBsZXQgaTtcbiAgaWYgKG5vZGUuc291cmNlcykge1xuICAgIHdoaWxlIChub2RlLnNvdXJjZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBub2RlLnNvdXJjZXMucG9wKCksXG4gICAgICAgICAgICBpbmRleCA9IG5vZGUuc291cmNlU2xvdHMucG9wKCksXG4gICAgICAgICAgICBvYnMgPSBzb3VyY2Uub2JzZXJ2ZXJzO1xuICAgICAgaWYgKG9icyAmJiBvYnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IG4gPSBvYnMucG9wKCksXG4gICAgICAgICAgICAgIHMgPSBzb3VyY2Uub2JzZXJ2ZXJTbG90cy5wb3AoKTtcbiAgICAgICAgaWYgKGluZGV4IDwgb2JzLmxlbmd0aCkge1xuICAgICAgICAgIG4uc291cmNlU2xvdHNbc10gPSBpbmRleDtcbiAgICAgICAgICBvYnNbaW5kZXhdID0gbjtcbiAgICAgICAgICBzb3VyY2Uub2JzZXJ2ZXJTbG90c1tpbmRleF0gPSBzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUuc3RhdGUgPSAwO1xuICB9XG4gIGlmIChub2RlLm93bmVkKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5vZGUub3duZWQubGVuZ3RoOyBpKyspIGNsZWFuTm9kZShub2RlLm93bmVkW2ldKTtcbiAgICBub2RlLm93bmVkID0gbnVsbDtcbiAgfVxuICBpZiAobm9kZS5jbGVhbnVwcykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBub2RlLmNsZWFudXBzLmxlbmd0aDsgaSsrKSBub2RlLmNsZWFudXBzW2ldKCk7XG4gICAgbm9kZS5jbGVhbnVwcyA9IG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGNhbGxBbGwoc3MpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNzLmxlbmd0aDsgaSsrKSBzc1tpXSgpO1xuICB9O1xufVxuZnVuY3Rpb24gbG9va3VwKG93bmVyLCBrZXkpIHtcbiAgcmV0dXJuIG93bmVyICYmIChvd25lci5jb250ZXh0ICYmIG93bmVyLmNvbnRleHRba2V5XSB8fCBvd25lci5vd25lciAmJiBsb29rdXAob3duZXIub3duZXIsIGtleSkpO1xufVxuZnVuY3Rpb24gcmVzb2x2ZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIGNyZWF0ZU1lbW8oKCkgPT4gcmVzb2x2ZUNoaWxkcmVuKGNoaWxkcmVuKCkpKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXNvbHZlQ2hpbGRyZW4oY2hpbGRyZW5baV0pO1xuICAgICAgQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0cy5wdXNoLmFwcGx5KHJlc3VsdHMsIHJlc3VsdCkgOiByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuZnVuY3Rpb24gY3JlYXRlUHJvdmlkZXIoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb3ZpZGVyKHByb3BzKSB7XG4gICAgbGV0IHJlbmRlcmVkO1xuICAgIGNyZWF0ZUVmZmVjdCgoKSA9PiB7XG4gICAgICBPd25lci5jb250ZXh0ID0ge1xuICAgICAgICBbaWRdOiBwcm9wcy52YWx1ZVxuICAgICAgfTtcbiAgICAgIHJlbmRlcmVkID0gc2FtcGxlKCgpID0+IHJlc29sdmVDaGlsZHJlbihwcm9wcy5jaGlsZHJlbikpO1xuICAgIH0pO1xuICAgIHJldHVybiByZW5kZXJlZDtcbiAgfTtcbn1cblxuY29uc3QgJFJBVyA9IFN5bWJvbChcInN0YXRlLXJhd1wiKSxcbiAgICAgICROT0RFID0gU3ltYm9sKFwic3RhdGUtbm9kZVwiKSxcbiAgICAgICRQUk9YWSA9IFN5bWJvbChcInN0YXRlLXByb3h5XCIpO1xuZnVuY3Rpb24gd3JhcCh2YWx1ZSwgdHJhcHMpIHtcbiAgcmV0dXJuIHZhbHVlWyRQUk9YWV0gfHwgKHZhbHVlWyRQUk9YWV0gPSBuZXcgUHJveHkodmFsdWUsIHRyYXBzIHx8IHByb3h5VHJhcHMpKTtcbn1cbmZ1bmN0aW9uIGlzV3JhcHBhYmxlKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiAmJiAob2JqLl9fcHJvdG9fXyA9PT0gT2JqZWN0LnByb3RvdHlwZSB8fCBBcnJheS5pc0FycmF5KG9iaikpO1xufVxuZnVuY3Rpb24gdW53cmFwKGl0ZW0pIHtcbiAgbGV0IHJlc3VsdCwgdW53cmFwcGVkLCB2O1xuICBpZiAocmVzdWx0ID0gaXRlbSAhPSBudWxsICYmIGl0ZW1bJFJBV10pIHJldHVybiByZXN1bHQ7XG4gIGlmICghaXNXcmFwcGFibGUoaXRlbSkpIHJldHVybiBpdGVtO1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIGlmIChPYmplY3QuaXNGcm96ZW4oaXRlbSkpIGl0ZW0gPSBpdGVtLnNsaWNlKDApO1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gaXRlbS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHYgPSBpdGVtW2ldO1xuICAgICAgaWYgKCh1bndyYXBwZWQgPSB1bndyYXAodikpICE9PSB2KSBpdGVtW2ldID0gdW53cmFwcGVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoT2JqZWN0LmlzRnJvemVuKGl0ZW0pKSBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhpdGVtKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2ID0gaXRlbVtrZXlzW2ldXTtcbiAgICAgIGlmICgodW53cmFwcGVkID0gdW53cmFwKHYpKSAhPT0gdikgaXRlbVtrZXlzW2ldXSA9IHVud3JhcHBlZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGl0ZW07XG59XG5mdW5jdGlvbiBnZXREYXRhTm9kZXModGFyZ2V0KSB7XG4gIGxldCBub2RlcyA9IHRhcmdldFskTk9ERV07XG4gIGlmICghbm9kZXMpIHRhcmdldFskTk9ERV0gPSBub2RlcyA9IHt9O1xuICByZXR1cm4gbm9kZXM7XG59XG5jb25zdCBwcm94eVRyYXBzID0ge1xuICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJFJBVykgcmV0dXJuIHRhcmdldDtcbiAgICBpZiAocHJvcGVydHkgPT09ICRQUk9YWSB8fCBwcm9wZXJ0eSA9PT0gJE5PREUpIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldFtwcm9wZXJ0eV0sXG4gICAgICAgICAgd3JhcHBhYmxlID0gaXNXcmFwcGFibGUodmFsdWUpO1xuICAgIGlmIChpc0xpc3RlbmluZygpICYmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIiB8fCB0YXJnZXQuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSkge1xuICAgICAgbGV0IG5vZGVzLCBub2RlO1xuICAgICAgaWYgKHdyYXBwYWJsZSAmJiAobm9kZXMgPSBnZXREYXRhTm9kZXModmFsdWUpKSkge1xuICAgICAgICBub2RlID0gbm9kZXMuXyB8fCAobm9kZXMuXyA9IGNyZWF0ZVNpZ25hbCgpKTtcbiAgICAgICAgbm9kZVswXSgpO1xuICAgICAgfVxuICAgICAgbm9kZXMgPSBnZXREYXRhTm9kZXModGFyZ2V0KTtcbiAgICAgIG5vZGUgPSBub2Rlc1twcm9wZXJ0eV0gfHwgKG5vZGVzW3Byb3BlcnR5XSA9IGNyZWF0ZVNpZ25hbCgpKTtcbiAgICAgIG5vZGVbMF0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwYWJsZSA/IHdyYXAodmFsdWUpIDogdmFsdWU7XG4gIH0sXG4gIHNldCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5jb25zdCBzZXR0ZXJUcmFwcyA9IHtcbiAgZ2V0KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICBpZiAocHJvcGVydHkgPT09ICRSQVcpIHJldHVybiB0YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xuICAgIHJldHVybiBpc1dyYXBwYWJsZSh2YWx1ZSkgPyBuZXcgUHJveHkodmFsdWUsIHNldHRlclRyYXBzKSA6IHZhbHVlO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBzZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bndyYXAodmFsdWUpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHNldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShzdGF0ZSwgcHJvcGVydHksIHZhbHVlLCBmb3JjZSkge1xuICBpZiAoIWZvcmNlICYmIHN0YXRlW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHJldHVybjtcbiAgY29uc3Qgbm90aWZ5ID0gQXJyYXkuaXNBcnJheShzdGF0ZSkgfHwgIShwcm9wZXJ0eSBpbiBzdGF0ZSk7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsZXRlIHN0YXRlW3Byb3BlcnR5XTtcbiAgfSBlbHNlIHN0YXRlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICBsZXQgbm9kZXMgPSBnZXREYXRhTm9kZXMoc3RhdGUpLFxuICAgICAgbm9kZTtcbiAgKG5vZGUgPSBub2Rlc1twcm9wZXJ0eV0pICYmIG5vZGVbMV0oKTtcbiAgbm90aWZ5ICYmIChub2RlID0gbm9kZXMuXykgJiYgbm9kZVsxXSgpO1xufVxuZnVuY3Rpb24gbWVyZ2VTdGF0ZShzdGF0ZSwgdmFsdWUsIGZvcmNlKSB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgc2V0UHJvcGVydHkoc3RhdGUsIGtleSwgdmFsdWVba2V5XSwgZm9yY2UpO1xuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVQYXRoKGN1cnJlbnQsIHBhdGgsIHRyYXZlcnNlZCA9IFtdKSB7XG4gIGxldCBwYXJ0LFxuICAgICAgbmV4dCA9IGN1cnJlbnQ7XG4gIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICBwYXJ0ID0gcGF0aC5zaGlmdCgpO1xuICAgIGNvbnN0IHBhcnRUeXBlID0gdHlwZW9mIHBhcnQsXG4gICAgICAgICAgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoY3VycmVudCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgICB1cGRhdGVQYXRoKGN1cnJlbnQsIFtwYXJ0W2ldXS5jb25jYXQocGF0aCksIFtwYXJ0W2ldXS5jb25jYXQodHJhdmVyc2VkKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChpc0FycmF5ICYmIHBhcnRUeXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocGFydChjdXJyZW50W2ldLCBpKSkgdXBkYXRlUGF0aChjdXJyZW50LCBbaV0uY29uY2F0KHBhdGgpLCBbaV0uY29uY2F0KHRyYXZlcnNlZCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSAmJiBwYXJ0VHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY29uc3Qge1xuICAgICAgICBmcm9tID0gMCxcbiAgICAgICAgdG8gPSBjdXJyZW50Lmxlbmd0aCAtIDEsXG4gICAgICAgIGJ5ID0gMVxuICAgICAgfSA9IHBhcnQ7XG4gICAgICBmb3IgKGxldCBpID0gZnJvbTsgaSA8PSB0bzsgaSArPSBieSkge1xuICAgICAgICB1cGRhdGVQYXRoKGN1cnJlbnQsIFtpXS5jb25jYXQocGF0aCksIFtpXS5jb25jYXQodHJhdmVyc2VkKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgIHVwZGF0ZVBhdGgoY3VycmVudFtwYXJ0XSwgcGF0aCwgW3BhcnRdLmNvbmNhdCh0cmF2ZXJzZWQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV4dCA9IGN1cnJlbnRbcGFydF07XG4gICAgdHJhdmVyc2VkID0gW3BhcnRdLmNvbmNhdCh0cmF2ZXJzZWQpO1xuICB9XG4gIGxldCB2YWx1ZSA9IHBhdGhbMF07XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHdyYXBwZWQgPSBwYXJ0ID09PSB1bmRlZmluZWQgfHwgaXNXcmFwcGFibGUobmV4dCkgPyBuZXcgUHJveHkobmV4dCwgc2V0dGVyVHJhcHMpIDogbmV4dDtcbiAgICB2YWx1ZSA9IHZhbHVlKHdyYXBwZWQsIHRyYXZlcnNlZCk7XG4gICAgaWYgKHZhbHVlID09PSB3cmFwcGVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgfVxuICB2YWx1ZSA9IHVud3JhcCh2YWx1ZSk7XG4gIGlmIChwYXJ0ID09PSB1bmRlZmluZWQgfHwgaXNXcmFwcGFibGUobmV4dCkgJiYgaXNXcmFwcGFibGUodmFsdWUpICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIG1lcmdlU3RhdGUobmV4dCwgdmFsdWUpO1xuICB9IGVsc2Ugc2V0UHJvcGVydHkoY3VycmVudCwgcGFydCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gY3JlYXRlU3RhdGUoc3RhdGUpIHtcbiAgY29uc3QgdW53cmFwcGVkU3RhdGUgPSB1bndyYXAoc3RhdGUgfHwge30pO1xuICBjb25zdCB3cmFwcGVkU3RhdGUgPSB3cmFwKHVud3JhcHBlZFN0YXRlKTtcbiAgZnVuY3Rpb24gc2V0U3RhdGUoLi4uYXJncykge1xuICAgIGZyZWV6ZSgoKSA9PiB1cGRhdGVQYXRoKHVud3JhcHBlZFN0YXRlLCBhcmdzKSk7XG4gIH1cbiAgcmV0dXJuIFt3cmFwcGVkU3RhdGUsIHNldFN0YXRlXTtcbn1cblxuZnVuY3Rpb24gYXBwbHlTdGF0ZSh0YXJnZXQsIHBhcmVudCwgcHJvcGVydHksIG1lcmdlLCBrZXkpIHtcbiAgbGV0IHByZXZpb3VzID0gcGFyZW50W3Byb3BlcnR5XTtcbiAgaWYgKHRhcmdldCA9PT0gcHJldmlvdXMpIHJldHVybjtcbiAgaWYgKCFpc1dyYXBwYWJsZSh0YXJnZXQpIHx8ICFpc1dyYXBwYWJsZShwcmV2aW91cykgfHwga2V5ICYmIHRhcmdldFtrZXldICE9PSBwcmV2aW91c1trZXldKSB7XG4gICAgdGFyZ2V0ICE9PSBwcmV2aW91cyAmJiBzZXRQcm9wZXJ0eShwYXJlbnQsIHByb3BlcnR5LCB0YXJnZXQpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgaWYgKHRhcmdldC5sZW5ndGggJiYgcHJldmlvdXMubGVuZ3RoICYmICghbWVyZ2UgfHwga2V5ICYmIHRhcmdldFswXVtrZXldICE9IG51bGwpKSB7XG4gICAgICBsZXQgaSwgaiwgc3RhcnQsIGVuZCwgbmV3RW5kLCBpdGVtLCBuZXdJbmRpY2VzTmV4dCwga2V5VmFsO1xuICAgICAgZm9yIChzdGFydCA9IDAsIGVuZCA9IE1hdGgubWluKHByZXZpb3VzLmxlbmd0aCwgdGFyZ2V0Lmxlbmd0aCk7IHN0YXJ0IDwgZW5kICYmIChwcmV2aW91c1tzdGFydF0gPT09IHRhcmdldFtzdGFydF0gfHwga2V5ICYmIHByZXZpb3VzW3N0YXJ0XVtrZXldID09PSB0YXJnZXRbc3RhcnRdW2tleV0pOyBzdGFydCsrKSB7XG4gICAgICAgIGFwcGx5U3RhdGUodGFyZ2V0W3N0YXJ0XSwgcHJldmlvdXMsIHN0YXJ0LCBtZXJnZSwga2V5KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRlbXAgPSBuZXcgQXJyYXkodGFyZ2V0Lmxlbmd0aCksXG4gICAgICAgICAgICBuZXdJbmRpY2VzID0gbmV3IE1hcCgpO1xuICAgICAgZm9yIChlbmQgPSBwcmV2aW91cy5sZW5ndGggLSAxLCBuZXdFbmQgPSB0YXJnZXQubGVuZ3RoIC0gMTsgZW5kID49IHN0YXJ0ICYmIG5ld0VuZCA+PSBzdGFydCAmJiAocHJldmlvdXNbZW5kXSA9PT0gdGFyZ2V0W25ld0VuZF0gfHwga2V5ICYmIHByZXZpb3VzW2VuZF1ba2V5XSA9PT0gdGFyZ2V0W25ld0VuZF1ba2V5XSk7IGVuZC0tLCBuZXdFbmQtLSkge1xuICAgICAgICB0ZW1wW25ld0VuZF0gPSBwcmV2aW91c1tlbmRdO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXJ0ID4gbmV3RW5kIHx8IHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgIGZvciAoaiA9IHN0YXJ0OyBqIDw9IG5ld0VuZDsgaisrKSBzZXRQcm9wZXJ0eShwcmV2aW91cywgaiwgdGFyZ2V0W2pdKTtcbiAgICAgICAgZm9yICg7IGogPCB0YXJnZXQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZXRQcm9wZXJ0eShwcmV2aW91cywgaiwgdGVtcFtqXSk7XG4gICAgICAgICAgYXBwbHlTdGF0ZSh0YXJnZXRbal0sIHByZXZpb3VzLCBqLCBtZXJnZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldmlvdXMubGVuZ3RoID4gdGFyZ2V0Lmxlbmd0aCkgc2V0UHJvcGVydHkocHJldmlvdXMsIFwibGVuZ3RoXCIsIHRhcmdldC5sZW5ndGgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBuZXdJbmRpY2VzTmV4dCA9IG5ldyBBcnJheShuZXdFbmQgKyAxKTtcbiAgICAgIGZvciAoaiA9IG5ld0VuZDsgaiA+PSBzdGFydDsgai0tKSB7XG4gICAgICAgIGl0ZW0gPSB0YXJnZXRbal07XG4gICAgICAgIGtleVZhbCA9IGtleSA/IGl0ZW1ba2V5XSA6IGl0ZW07XG4gICAgICAgIGkgPSBuZXdJbmRpY2VzLmdldChrZXlWYWwpO1xuICAgICAgICBuZXdJbmRpY2VzTmV4dFtqXSA9IGkgPT09IHVuZGVmaW5lZCA/IC0xIDogaTtcbiAgICAgICAgbmV3SW5kaWNlcy5zZXQoa2V5VmFsLCBqKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBwcmV2aW91c1tpXTtcbiAgICAgICAga2V5VmFsID0ga2V5ID8gaXRlbVtrZXldIDogaXRlbTtcbiAgICAgICAgaiA9IG5ld0luZGljZXMuZ2V0KGtleVZhbCk7XG4gICAgICAgIGlmIChqICE9PSB1bmRlZmluZWQgJiYgaiAhPT0gLTEpIHtcbiAgICAgICAgICB0ZW1wW2pdID0gcHJldmlvdXNbaV07XG4gICAgICAgICAgaiA9IG5ld0luZGljZXNOZXh0W2pdO1xuICAgICAgICAgIG5ld0luZGljZXMuc2V0KGtleVZhbCwgaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoaiA9IHN0YXJ0OyBqIDwgdGFyZ2V0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChqIGluIHRlbXApIHtcbiAgICAgICAgICBzZXRQcm9wZXJ0eShwcmV2aW91cywgaiwgdGVtcFtqXSk7XG4gICAgICAgICAgYXBwbHlTdGF0ZSh0YXJnZXRbal0sIHByZXZpb3VzLCBqLCBtZXJnZSwga2V5KTtcbiAgICAgICAgfSBlbHNlIHNldFByb3BlcnR5KHByZXZpb3VzLCBqLCB0YXJnZXRbal0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFyZ2V0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFwcGx5U3RhdGUodGFyZ2V0W2ldLCBwcmV2aW91cywgaSwgbWVyZ2UsIGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2aW91cy5sZW5ndGggPiB0YXJnZXQubGVuZ3RoKSBzZXRQcm9wZXJ0eShwcmV2aW91cywgXCJsZW5ndGhcIiwgdGFyZ2V0Lmxlbmd0aCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhcmdldEtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGFyZ2V0S2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGFwcGx5U3RhdGUodGFyZ2V0W3RhcmdldEtleXNbaV1dLCBwcmV2aW91cywgdGFyZ2V0S2V5c1tpXSwgbWVyZ2UsIGtleSk7XG4gIH1cbiAgY29uc3QgcHJldmlvdXNLZXlzID0gT2JqZWN0LmtleXMocHJldmlvdXMpO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcHJldmlvdXNLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKHRhcmdldFtwcmV2aW91c0tleXNbaV1dID09PSB1bmRlZmluZWQpIHNldFByb3BlcnR5KHByZXZpb3VzLCBwcmV2aW91c0tleXNbaV0sIHVuZGVmaW5lZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlY29uY2lsZSh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBtZXJnZSxcbiAgICBrZXkgPSBcImlkXCJcbiAgfSA9IG9wdGlvbnM7XG4gIHJldHVybiBzdGF0ZSA9PiB7XG4gICAgc3RhdGUgPSB1bndyYXAoc3RhdGUpO1xuICAgIGlmICghaXNXcmFwcGFibGUoc3RhdGUpKSByZXR1cm4gdmFsdWU7XG4gICAgYXBwbHlTdGF0ZSh2YWx1ZSwge1xuICAgICAgc3RhdGVcbiAgICB9LCBcInN0YXRlXCIsIG1lcmdlLCBrZXkpO1xuICB9O1xufVxuXG5jb25zdCBGQUxMQkFDSyA9IFN5bWJvbChcImZhbGxiYWNrXCIpO1xuZnVuY3Rpb24gbWFwQXJyYXkobGlzdCwgbWFwRm4sIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgb3B0aW9ucyA9IG1hcEZuIHx8IHt9O1xuICAgIG1hcEZuID0gbGlzdDtcbiAgICByZXR1cm4gbWFwO1xuICB9XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHJldHVybiBtYXAobGlzdCk7XG4gIGZ1bmN0aW9uIG1hcChsaXN0KSB7XG4gICAgbGV0IGl0ZW1zID0gW10sXG4gICAgICAgIG1hcHBlZCA9IFtdLFxuICAgICAgICBkaXNwb3NlcnMgPSBbXSxcbiAgICAgICAgbGVuID0gMCxcbiAgICAgICAgaW5kZXhlcyA9IG1hcEZuLmxlbmd0aCA+IDEgPyBbXSA6IG51bGw7XG4gICAgb25DbGVhbnVwKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBkaXNwb3NlcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIGRpc3Bvc2Vyc1tpXSgpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZXQgbmV3SXRlbXMgPSBsaXN0KCkgfHwgW10sXG4gICAgICAgICAgaSxcbiAgICAgICAgICBqO1xuICAgICAgcmV0dXJuIHNhbXBsZSgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdMZW4gPSBuZXdJdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBuZXdJbmRpY2VzLFxuICAgICAgICAgICAgbmV3SW5kaWNlc05leHQsXG4gICAgICAgICAgICB0ZW1wLFxuICAgICAgICAgICAgdGVtcGRpc3Bvc2VycyxcbiAgICAgICAgICAgIHRlbXBJbmRleGVzLFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICBuZXdFbmQsXG4gICAgICAgICAgICBpdGVtO1xuICAgICAgICBpZiAobmV3TGVuID09PSAwKSB7XG4gICAgICAgICAgaWYgKGxlbiAhPT0gMCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSBkaXNwb3NlcnNbaV0oKTtcbiAgICAgICAgICAgIGRpc3Bvc2VycyA9IFtdO1xuICAgICAgICAgICAgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIG1hcHBlZCA9IFtdO1xuICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgIGluZGV4ZXMgJiYgKGluZGV4ZXMgPSBbXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLmZhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtGQUxMQkFDS107XG4gICAgICAgICAgICBtYXBwZWRbMF0gPSBjcmVhdGVSb290KGRpc3Bvc2VyID0+IHtcbiAgICAgICAgICAgICAgZGlzcG9zZXJzWzBdID0gZGlzcG9zZXI7XG4gICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxlbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0xlbjsgaisrKSB7XG4gICAgICAgICAgICAgIGl0ZW1zW2pdID0gbmV3SXRlbXNbal07XG4gICAgICAgICAgICAgIG1hcHBlZFtqXSA9IGNyZWF0ZVJvb3QobWFwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlbiA9IG5ld0xlbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcCA9IG5ldyBBcnJheShuZXdMZW4pO1xuICAgICAgICAgICAgdGVtcGRpc3Bvc2VycyA9IG5ldyBBcnJheShuZXdMZW4pO1xuICAgICAgICAgICAgaW5kZXhlcyAmJiAodGVtcEluZGV4ZXMgPSBuZXcgQXJyYXkobmV3TGVuKSk7XG4gICAgICAgICAgICBmb3IgKHN0YXJ0ID0gMCwgZW5kID0gTWF0aC5taW4obGVuLCBuZXdMZW4pOyBzdGFydCA8IGVuZCAmJiBpdGVtc1tzdGFydF0gPT09IG5ld0l0ZW1zW3N0YXJ0XTsgc3RhcnQrKyk7XG4gICAgICAgICAgICBmb3IgKGVuZCA9IGxlbiAtIDEsIG5ld0VuZCA9IG5ld0xlbiAtIDE7IGVuZCA+PSBzdGFydCAmJiBuZXdFbmQgPj0gc3RhcnQgJiYgaXRlbXNbZW5kXSA9PT0gbmV3SXRlbXNbbmV3RW5kXTsgZW5kLS0sIG5ld0VuZC0tKSB7XG4gICAgICAgICAgICAgIHRlbXBbbmV3RW5kXSA9IG1hcHBlZFtlbmRdO1xuICAgICAgICAgICAgICB0ZW1wZGlzcG9zZXJzW25ld0VuZF0gPSBkaXNwb3NlcnNbZW5kXTtcbiAgICAgICAgICAgICAgaW5kZXhlcyAmJiAodGVtcEluZGV4ZXNbbmV3RW5kXSA9IGluZGV4ZXNbZW5kXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnQgPiBuZXdFbmQpIHtcbiAgICAgICAgICAgICAgZm9yIChqID0gZW5kOyBzdGFydCA8PSBqOyBqLS0pIGRpc3Bvc2Vyc1tqXSgpO1xuICAgICAgICAgICAgICBjb25zdCByTGVuID0gZW5kIC0gc3RhcnQgKyAxO1xuICAgICAgICAgICAgICBpZiAockxlbiA+IDApIHtcbiAgICAgICAgICAgICAgICBtYXBwZWQuc3BsaWNlKHN0YXJ0LCByTGVuKTtcbiAgICAgICAgICAgICAgICBkaXNwb3NlcnMuc3BsaWNlKHN0YXJ0LCByTGVuKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhlcykge1xuICAgICAgICAgICAgICAgICAgaW5kZXhlcy5zcGxpY2Uoc3RhcnQsIHJMZW4pO1xuICAgICAgICAgICAgICAgICAgZm9yIChqID0gc3RhcnQ7IGogPCBuZXdMZW47IGorKykgaW5kZXhlc1tqXShqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXRlbXMgPSBuZXdJdGVtcy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgbGVuID0gbmV3TGVuO1xuICAgICAgICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXJ0ID4gZW5kKSB7XG4gICAgICAgICAgICAgIGZvciAoaiA9IHN0YXJ0OyBqIDw9IG5ld0VuZDsgaisrKSBtYXBwZWRbal0gPSBjcmVhdGVSb290KG1hcHBlcik7XG4gICAgICAgICAgICAgIGZvciAoOyBqIDwgbmV3TGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBtYXBwZWRbal0gPSB0ZW1wW2pdO1xuICAgICAgICAgICAgICAgIGRpc3Bvc2Vyc1tqXSA9IHRlbXBkaXNwb3NlcnNbal07XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ZXMpIHtcbiAgICAgICAgICAgICAgICAgIGluZGV4ZXNbal0gPSB0ZW1wSW5kZXhlc1tqXTtcbiAgICAgICAgICAgICAgICAgIGluZGV4ZXNbal0oaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGl0ZW1zID0gbmV3SXRlbXMuc2xpY2UoMCk7XG4gICAgICAgICAgICAgIGxlbiA9IG5ld0xlbjtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZGljZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBuZXdJbmRpY2VzTmV4dCA9IG5ldyBBcnJheShuZXdFbmQgKyAxKTtcbiAgICAgICAgICAgIGZvciAoaiA9IG5ld0VuZDsgaiA+PSBzdGFydDsgai0tKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBuZXdJdGVtc1tqXTtcbiAgICAgICAgICAgICAgaSA9IG5ld0luZGljZXMuZ2V0KGl0ZW0pO1xuICAgICAgICAgICAgICBuZXdJbmRpY2VzTmV4dFtqXSA9IGkgPT09IHVuZGVmaW5lZCA/IC0xIDogaTtcbiAgICAgICAgICAgICAgbmV3SW5kaWNlcy5zZXQoaXRlbSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgIGogPSBuZXdJbmRpY2VzLmdldChpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKGogIT09IHVuZGVmaW5lZCAmJiBqICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRlbXBbal0gPSBtYXBwZWRbaV07XG4gICAgICAgICAgICAgICAgdGVtcGRpc3Bvc2Vyc1tqXSA9IGRpc3Bvc2Vyc1tpXTtcbiAgICAgICAgICAgICAgICBpbmRleGVzICYmICh0ZW1wSW5kZXhlc1tqXSA9IGluZGV4ZXNbaV0pO1xuICAgICAgICAgICAgICAgIGogPSBuZXdJbmRpY2VzTmV4dFtqXTtcbiAgICAgICAgICAgICAgICBuZXdJbmRpY2VzLnNldChpdGVtLCBqKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGRpc3Bvc2Vyc1tpXSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChqID0gc3RhcnQ7IGogPCBuZXdMZW47IGorKykge1xuICAgICAgICAgICAgICBpZiAoaiBpbiB0ZW1wKSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkW2pdID0gdGVtcFtqXTtcbiAgICAgICAgICAgICAgICBkaXNwb3NlcnNbal0gPSB0ZW1wZGlzcG9zZXJzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleGVzKSB7XG4gICAgICAgICAgICAgICAgICBpbmRleGVzW2pdID0gdGVtcEluZGV4ZXNbal07XG4gICAgICAgICAgICAgICAgICBpbmRleGVzW2pdKGopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIG1hcHBlZFtqXSA9IGNyZWF0ZVJvb3QobWFwcGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxlbiA9IG1hcHBlZC5sZW5ndGggPSBuZXdMZW47XG4gICAgICAgICAgICBpdGVtcyA9IG5ld0l0ZW1zLnNsaWNlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hcHBlZDtcbiAgICAgIH0pO1xuICAgICAgZnVuY3Rpb24gbWFwcGVyKGRpc3Bvc2VyKSB7XG4gICAgICAgIGRpc3Bvc2Vyc1tqXSA9IGRpc3Bvc2VyO1xuICAgICAgICBpZiAoaW5kZXhlcykge1xuICAgICAgICAgIGNvbnN0IFtzLCBzZXRdID0gY3JlYXRlU2lnbmFsKGosIHRydWUpO1xuICAgICAgICAgIGluZGV4ZXNbal0gPSBzZXQ7XG4gICAgICAgICAgcmV0dXJuIG1hcEZuKG5ld0l0ZW1zW2pdLCBzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwRm4obmV3SXRlbXNbal0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGluZGV4QXJyYXkobGlzdCwgbWFwRm4sIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBtYXBGbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgb3B0aW9ucyA9IG1hcEZuIHx8IHt9O1xuICAgIG1hcEZuID0gbGlzdDtcbiAgICByZXR1cm4gbWFwO1xuICB9XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHJldHVybiBtYXAobGlzdCk7XG4gIGZ1bmN0aW9uIG1hcChsaXN0KSB7XG4gICAgbGV0IGl0ZW1zID0gW10sXG4gICAgICAgIG1hcHBlZCA9IFtdLFxuICAgICAgICBkaXNwb3NlcnMgPSBbXSxcbiAgICAgICAgc2lnbmFscyA9IFtdLFxuICAgICAgICBsZW4gPSAwLFxuICAgICAgICBpO1xuICAgIG9uQ2xlYW51cCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gZGlzcG9zZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSBkaXNwb3NlcnNbaV0oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBsaXN0KCkgfHwgW107XG4gICAgICByZXR1cm4gc2FtcGxlKCgpID0+IHtcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmIChsZW4gIT09IDApIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgZGlzcG9zZXJzW2ldKCk7XG4gICAgICAgICAgICBkaXNwb3NlcnMgPSBbXTtcbiAgICAgICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgICAgICBtYXBwZWQgPSBbXTtcbiAgICAgICAgICAgIGxlbiA9IDA7XG4gICAgICAgICAgICBzaWduYWxzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChvcHRpb25zLmZhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtGQUxMQkFDS107XG4gICAgICAgICAgICBtYXBwZWRbMF0gPSBjcmVhdGVSb290KGRpc3Bvc2VyID0+IHtcbiAgICAgICAgICAgICAgZGlzcG9zZXJzWzBdID0gZGlzcG9zZXI7XG4gICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxlbiA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW1zWzBdID09PSBGQUxMQkFDSykge1xuICAgICAgICAgIGRpc3Bvc2Vyc1swXSgpO1xuICAgICAgICAgIGRpc3Bvc2VycyA9IFtdO1xuICAgICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgICAgbWFwcGVkID0gW107XG4gICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV3SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCAmJiBpdGVtc1tpXSAhPT0gbmV3SXRlbXNbaV0pIHtcbiAgICAgICAgICAgIHNpZ25hbHNbaV0obmV3SXRlbXNbaV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaSA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG1hcHBlZFtpXSA9IGNyZWF0ZVJvb3QobWFwcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICg7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRpc3Bvc2Vyc1tpXSgpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiA9IG1hcHBlZC5sZW5ndGggPSBzaWduYWxzLmxlbmd0aCA9IGRpc3Bvc2Vycy5sZW5ndGggPSBuZXdJdGVtcy5sZW5ndGg7XG4gICAgICAgIGl0ZW1zID0gbmV3SXRlbXMuc2xpY2UoMCk7XG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgICB9KTtcbiAgICAgIGZ1bmN0aW9uIG1hcHBlcihkaXNwb3Nlcikge1xuICAgICAgICBkaXNwb3NlcnNbaV0gPSBkaXNwb3NlcjtcbiAgICAgICAgY29uc3QgW3MsIHNldF0gPSBjcmVhdGVTaWduYWwobmV3SXRlbXNbaV0pO1xuICAgICAgICBzaWduYWxzW2ldID0gc2V0O1xuICAgICAgICByZXR1cm4gbWFwRm4ocywgaSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkeW5hbWljUHJvcGVydHkocHJvcHMsIGtleSkge1xuICBjb25zdCBzcmMgPSBwcm9wc1trZXldO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsIGtleSwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzcmMoKTtcbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoQ29tcCwgcHJvcHMsIGR5bmFtaWNLZXlzKSB7XG4gIGlmIChkeW5hbWljS2V5cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHluYW1pY0tleXMubGVuZ3RoOyBpKyspIGR5bmFtaWNQcm9wZXJ0eShwcm9wcywgZHluYW1pY0tleXNbaV0pO1xuICB9XG4gIGNvbnN0IGMgPSBzYW1wbGUoKCkgPT4gQ29tcChwcm9wcykpO1xuICByZXR1cm4gdHlwZW9mIGMgPT09IFwiZnVuY3Rpb25cIiA/IGNyZWF0ZU1lbW8oYykgOiBjO1xufVxuZnVuY3Rpb24gc2V0RGVmYXVsdHMocHJvcHMsIGRlZmF1bHRQcm9wcykge1xuICBjb25zdCBwcm9wS2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRQcm9wcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAhKGtleSBpbiBwcm9wcykgJiYgKHByb3BzW2tleV0gPSBkZWZhdWx0UHJvcHNba2V5XSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsb25lUHJvcHMocHJvcHMpIHtcbiAgY29uc3QgY2xvbmUgPSB7fSxcbiAgICAgICAgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNsb25lLCBkZXNjcmlwdG9ycyk7XG4gIHJldHVybiBjbG9uZTtcbn1cbmZ1bmN0aW9uIHNwbGl0UHJvcHMocHJvcHMsIC4uLmtleXMpIHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9wcyksXG4gICAgICAgIHNwbGl0ID0gayA9PiB7XG4gICAgY29uc3QgY2xvbmUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtbaV07XG4gICAgICBpZiAoZGVzY3JpcHRvcnNba2V5XSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xvbmUsIGtleSwgZGVzY3JpcHRvcnNba2V5XSk7XG4gICAgICAgIGRlbGV0ZSBkZXNjcmlwdG9yc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2xvbmU7XG4gIH07XG4gIHJldHVybiBrZXlzLm1hcChzcGxpdCkuY29uY2F0KHNwbGl0KE9iamVjdC5rZXlzKGRlc2NyaXB0b3JzKSkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpdml0eVRyYWNrZXIoKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IFtyZWFkLCB0cmlnZ2VyXSA9IGNyZWF0ZVNpZ25hbChmYWxzZSk7XG4gIHJldHVybiBbcmVhZCwgKCkgPT4gY291bnQrKyA9PT0gMCAmJiB0cmlnZ2VyKHRydWUpLCAoKSA9PiAtLWNvdW50IDw9IDAgJiYgdHJpZ2dlcihmYWxzZSldO1xufVxuY29uc3QgU3VzcGVuc2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5jb25zdCBbYWN0aXZlLCBpbmNyZW1lbnQsIGRlY3JlbWVudF0gPSBjcmVhdGVBY3Rpdml0eVRyYWNrZXIoKTtcblN1c3BlbnNlQ29udGV4dC5hY3RpdmUgPSBhY3RpdmU7XG5TdXNwZW5zZUNvbnRleHQuaW5jcmVtZW50ID0gaW5jcmVtZW50O1xuU3VzcGVuc2VDb250ZXh0LmRlY3JlbWVudCA9IGRlY3JlbWVudDtcbmZ1bmN0aW9uIGF3YWl0U3VzcGVuc2UoZm4pIHtcbiAgcmV0dXJuICgpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGZuKCk7XG4gICAgY3JlYXRlRWZmZWN0KCgpID0+ICFTdXNwZW5zZUNvbnRleHQuYWN0aXZlKCkgJiYgcmVzb2x2ZShyZXMpKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVSZXNvdXJjZSh2YWx1ZSkge1xuICBjb25zdCBbcywgc2V0XSA9IGNyZWF0ZVNpZ25hbCh2YWx1ZSksXG4gICAgICAgIFt0cmFja1Byb21pc2UsIHRyaWdnZXJQcm9taXNlXSA9IGNyZWF0ZVNpZ25hbCgpLFxuICAgICAgICBbdHJhY2tMb2FkaW5nLCB0cmlnZ2VyTG9hZGluZ10gPSBjcmVhdGVTaWduYWwoKSxcbiAgICAgICAgY29udGV4dHMgPSBuZXcgU2V0KCk7XG4gIGxldCBsb2FkaW5nID0gZmFsc2UsXG4gICAgICBlcnJvciA9IG51bGwsXG4gICAgICBwcjtcbiAgZnVuY3Rpb24gbG9hZEVuZCh2KSB7XG4gICAgcHIgPSB1bmRlZmluZWQ7XG4gICAgZnJlZXplKCgpID0+IHtcbiAgICAgIHNldCh2KTtcbiAgICAgIGxvYWRpbmcgJiYgKGxvYWRpbmcgPSBmYWxzZSwgdHJpZ2dlckxvYWRpbmcoKSk7XG4gICAgICBmb3IgKGxldCBjIG9mIGNvbnRleHRzLmtleXMoKSkgYy5kZWNyZW1lbnQoKTtcbiAgICAgIGNvbnRleHRzLmNsZWFyKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVhZCgpIHtcbiAgICBjb25zdCBjID0gdXNlQ29udGV4dChTdXNwZW5zZUNvbnRleHQpLFxuICAgICAgICAgIHYgPSBzKCk7XG4gICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICB0cmFja1Byb21pc2UoKTtcbiAgICBpZiAocHIgJiYgYy5pbmNyZW1lbnQgJiYgIWNvbnRleHRzLmhhcyhjKSkge1xuICAgICAgYy5pbmNyZW1lbnQoKTtcbiAgICAgIGNvbnRleHRzLmFkZChjKTtcbiAgICB9XG4gICAgcmV0dXJuIHY7XG4gIH1cbiAgZnVuY3Rpb24gbG9hZChwKSB7XG4gICAgZXJyb3IgPSBudWxsO1xuICAgIGlmIChwID09IG51bGwgfHwgdHlwZW9mIHAgIT09IFwib2JqZWN0XCIgfHwgIShcInRoZW5cIiBpbiBwKSkge1xuICAgICAgcHIgPSB1bmRlZmluZWQ7XG4gICAgICBsb2FkRW5kKHApO1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByID0gcDtcbiAgICAgIGlmICghbG9hZGluZykge1xuICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJlZXplKCgpID0+IHtcbiAgICAgICAgICB0cmlnZ2VyTG9hZGluZygpO1xuICAgICAgICAgIHRyaWdnZXJQcm9taXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHAudGhlbih2ID0+IChwciA9PT0gcCAmJiBsb2FkRW5kKHYpLCBzKCkpLCBlcnIgPT4gKHByID09PSBwICYmIChlcnJvciA9IGVyciwgbG9hZEVuZCh1bmRlZmluZWQpKSwgcygpKSk7XG4gICAgfVxuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWFkLCBcImxvYWRpbmdcIiwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0cmFja0xvYWRpbmcoKSwgbG9hZGluZztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW3JlYWQsIGxvYWRdO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VOb2RlKHYpIHtcbiAgY29uc3Qgbm9kZSA9IGNyZWF0ZVNpZ25hbCgpLFxuICAgICAgICBbciwgbG9hZF0gPSBjcmVhdGVSZXNvdXJjZSh2KTtcbiAgcmV0dXJuIFsoKSA9PiAocigpLCBub2RlWzBdKCkpLCBub2RlWzFdLCBsb2FkLCAoKSA9PiByLmxvYWRpbmddO1xufVxuY29uc3QgbG9hZGluZ1RyYXBzID0ge1xuICBnZXQobm9kZXMsIHByb3BlcnR5KSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzW3Byb3BlcnR5XSB8fCAobm9kZXNbcHJvcGVydHldID0gY3JlYXRlUmVzb3VyY2VOb2RlKHVuZGVmaW5lZCkpO1xuICAgIHJldHVybiBub2RlWzNdKCk7XG4gIH0sXG4gIHNldCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5jb25zdCByZXNvdXJjZVRyYXBzID0ge1xuICBnZXQodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChwcm9wZXJ0eSA9PT0gJFJBVykgcmV0dXJuIHRhcmdldDtcbiAgICBpZiAocHJvcGVydHkgPT09ICRQUk9YWSB8fCBwcm9wZXJ0eSA9PT0gJE5PREUpIHJldHVybjtcbiAgICBpZiAocHJvcGVydHkgPT09IFwibG9hZGluZ1wiKSByZXR1cm4gbmV3IFByb3h5KGdldERhdGFOb2Rlcyh0YXJnZXQpLCBsb2FkaW5nVHJhcHMpO1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XSxcbiAgICAgICAgICB3cmFwcGFibGUgPSBpc1dyYXBwYWJsZSh2YWx1ZSk7XG4gICAgaWYgKGlzTGlzdGVuaW5nKCkgJiYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiIHx8IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpKSB7XG4gICAgICBsZXQgbm9kZXMsIG5vZGU7XG4gICAgICBpZiAod3JhcHBhYmxlICYmIChub2RlcyA9IGdldERhdGFOb2Rlcyh2YWx1ZSkpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlcy5fIHx8IChub2Rlcy5fID0gY3JlYXRlU2lnbmFsKCkpO1xuICAgICAgICBub2RlWzBdKCk7XG4gICAgICB9XG4gICAgICBub2RlcyA9IGdldERhdGFOb2Rlcyh0YXJnZXQpO1xuICAgICAgbm9kZSA9IG5vZGVzW3Byb3BlcnR5XSB8fCAobm9kZXNbcHJvcGVydHldID0gY3JlYXRlUmVzb3VyY2VOb2RlKHZhbHVlKSk7XG4gICAgICBub2RlWzBdKCk7XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGFibGUgPyB3cmFwKHZhbHVlKSA6IHZhbHVlO1xuICB9LFxuICBzZXQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGRlbGV0ZVByb3BlcnR5KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlUmVzb3VyY2VTdGF0ZShzdGF0ZSkge1xuICBjb25zdCB1bndyYXBwZWRTdGF0ZSA9IHVud3JhcChzdGF0ZSB8fCB7fSksXG4gICAgICAgIHdyYXBwZWRTdGF0ZSA9IHdyYXAodW53cmFwcGVkU3RhdGUsIHJlc291cmNlVHJhcHMpO1xuICBmdW5jdGlvbiBzZXRTdGF0ZSguLi5hcmdzKSB7XG4gICAgZnJlZXplKCgpID0+IHVwZGF0ZVBhdGgodW53cmFwcGVkU3RhdGUsIGFyZ3MpKTtcbiAgfVxuICBmdW5jdGlvbiBsb2FkU3RhdGUodiwgcikge1xuICAgIGNvbnN0IG5vZGVzID0gZ2V0RGF0YU5vZGVzKHVud3JhcHBlZFN0YXRlKSxcbiAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrID0ga2V5c1tpXSxcbiAgICAgICAgICAgIG5vZGUgPSBub2Rlc1trXSB8fCAobm9kZXNba10gPSBjcmVhdGVSZXNvdXJjZU5vZGUodW53cmFwcGVkU3RhdGVba10pKSxcbiAgICAgICAgICAgIHJlc29sdmVyID0gdiA9PiAociA/IHNldFN0YXRlKGssIHIodikpIDogc2V0UHJvcGVydHkodW53cmFwcGVkU3RhdGUsIGssIHYpLCB2KSxcbiAgICAgICAgICAgIHAgPSBub2RlWzJdKHZba10pO1xuICAgICAgdHlwZW9mIHAgPT09IFwib2JqZWN0XCIgJiYgXCJ0aGVuXCIgaW4gcCA/IHAudGhlbihyZXNvbHZlcikgOiByZXNvbHZlcihwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFt3cmFwcGVkU3RhdGUsIGxvYWRTdGF0ZSwgc2V0U3RhdGVdO1xufVxuZnVuY3Rpb24gbGF6eShmbikge1xuICByZXR1cm4gcHJvcHMgPT4ge1xuICAgIGNvbnN0IGh5ZHJhdGluZyA9IGdsb2JhbFRoaXMuXyRIWURSQVRJT04uY29udGV4dCAmJiBnbG9iYWxUaGlzLl8kSFlEUkFUSU9OLmNvbnRleHQucmVnaXN0cnksXG4gICAgICAgICAgY3R4ID0gbmV4dEh5ZHJhdGVDb250ZXh0KCksXG4gICAgICAgICAgW3MsIHBdID0gY3JlYXRlUmVzb3VyY2UoKTtcbiAgICBpZiAoaHlkcmF0aW5nKSB7XG4gICAgICBmbigpLnRoZW4obW9kID0+IHAobW9kLmRlZmF1bHQpKTtcbiAgICB9IGVsc2UgcChmbigpLnRoZW4obW9kID0+IG1vZC5kZWZhdWx0KSk7XG4gICAgbGV0IENvbXA7XG4gICAgcmV0dXJuICgpID0+IChDb21wID0gcygpKSAmJiBzYW1wbGUoKCkgPT4ge1xuICAgICAgaWYgKCFjdHgpIHJldHVybiBDb21wKHByb3BzKTtcbiAgICAgIGNvbnN0IGggPSBnbG9iYWxUaGlzLl8kSFlEUkFUSU9OLmNvbnRleHQ7XG4gICAgICBzZXRIeWRyYXRlQ29udGV4dChjdHgpO1xuICAgICAgY29uc3QgciA9IENvbXAocHJvcHMpO1xuICAgICAgIWggJiYgc2V0SHlkcmF0ZUNvbnRleHQoKTtcbiAgICAgIHJldHVybiByO1xuICAgIH0pO1xuICB9O1xufVxuZnVuY3Rpb24gdXNlVHJhbnNpdGlvbihjb25maWcpIHtcbiAgY29uc3QgW3BlbmRpbmcsIGluY3JlbWVudCwgZGVjcmVtZW50XSA9IGNyZWF0ZUFjdGl2aXR5VHJhY2tlcigpO1xuICByZXR1cm4gW3BlbmRpbmcsIGZuID0+IHtcbiAgICBjb25zdCBwcmV2VHJhbnNpdGlvbiA9IFN1c3BlbnNlQ29udGV4dC50cmFuc2l0aW9uO1xuICAgIFN1c3BlbnNlQ29udGV4dC50cmFuc2l0aW9uID0ge1xuICAgICAgdGltZW91dE1zOiBjb25maWcudGltZW91dE1zLFxuICAgICAgaW5jcmVtZW50LFxuICAgICAgZGVjcmVtZW50XG4gICAgfTtcbiAgICBpbmNyZW1lbnQoKTtcbiAgICBmbigpO1xuICAgIGRlY3JlbWVudCgpO1xuICAgIGFmdGVyRWZmZWN0cygoKSA9PiBTdXNwZW5zZUNvbnRleHQudHJhbnNpdGlvbiA9IHByZXZUcmFuc2l0aW9uKTtcbiAgfV07XG59XG5mdW5jdGlvbiBzdXNwZW5kKGZuKSB7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZVxuICB9ID0gdXNlQ29udGV4dChTdXNwZW5zZUNvbnRleHQpO1xuICBsZXQgY2FjaGVkO1xuICByZXR1cm4gc3RhdGUgPyAoZm4gPSBjcmVhdGVNZW1vKGZuKSwgKCkgPT4gc3RhdGUoKSA9PT0gXCJzdXNwZW5kZWRcIiA/IGNhY2hlZCA6IGNhY2hlZCA9IGZuKCkpIDogZm47XG59XG5mdW5jdGlvbiBzZXRIeWRyYXRlQ29udGV4dChjb250ZXh0KSB7XG4gIGdsb2JhbFRoaXMuXyRIWURSQVRJT04uY29udGV4dCA9IGNvbnRleHQ7XG59XG5mdW5jdGlvbiBuZXh0SHlkcmF0ZUNvbnRleHQoKSB7XG4gIGNvbnN0IGh5ZHJhdGlvbiA9IGdsb2JhbFRoaXMuXyRIWURSQVRJT047XG4gIHJldHVybiBoeWRyYXRpb24gJiYgaHlkcmF0aW9uLmNvbnRleHQgPyB7XG4gICAgaWQ6IGAke2h5ZHJhdGlvbi5jb250ZXh0LmlkfS4ke2h5ZHJhdGlvbi5jb250ZXh0LmNvdW50Kyt9YCxcbiAgICBjb3VudDogMCxcbiAgICByZWdpc3RyeTogaHlkcmF0aW9uLmNvbnRleHQucmVnaXN0cnlcbiAgfSA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gRm9yKHByb3BzKSB7XG4gIGNvbnN0IGZhbGxiYWNrID0gXCJmYWxsYmFja1wiIGluIHByb3BzICYmIHtcbiAgICBmYWxsYmFjazogKCkgPT4gcHJvcHMuZmFsbGJhY2tcbiAgfTtcbiAgcmV0dXJuIHN1c3BlbmQobWFwQXJyYXkoKCkgPT4gcHJvcHMuZWFjaCwgcHJvcHMuY2hpbGRyZW4sIGZhbGxiYWNrID8gZmFsbGJhY2sgOiB1bmRlZmluZWQpKTtcbn1cbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIGNvbnN0IGZhbGxiYWNrID0gXCJmYWxsYmFja1wiIGluIHByb3BzICYmIHtcbiAgICBmYWxsYmFjazogKCkgPT4gcHJvcHMuZmFsbGJhY2tcbiAgfTtcbiAgcmV0dXJuIHN1c3BlbmQoaW5kZXhBcnJheSgoKSA9PiBwcm9wcy5lYWNoLCBwcm9wcy5jaGlsZHJlbiwgZmFsbGJhY2sgPyBmYWxsYmFjayA6IHVuZGVmaW5lZCkpO1xufVxuZnVuY3Rpb24gU2hvdyhwcm9wcykge1xuICBjb25zdCBjaGlsZERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3BzLCBcImNoaWxkcmVuXCIpLnZhbHVlLFxuICAgICAgICBjYWxsRm4gPSB0eXBlb2YgY2hpbGREZXNjID09PSBcImZ1bmN0aW9uXCIgJiYgY2hpbGREZXNjLmxlbmd0aCxcbiAgICAgICAgY29uZGl0aW9uID0gY3JlYXRlTWVtbyhjYWxsRm4gPyAoKSA9PiBwcm9wcy53aGVuIDogKCkgPT4gISFwcm9wcy53aGVuLCB1bmRlZmluZWQsIHRydWUpO1xuICByZXR1cm4gc3VzcGVuZCgoKSA9PiB7XG4gICAgY29uc3QgYyA9IGNvbmRpdGlvbigpO1xuICAgIHJldHVybiBjID8gY2FsbEZuID8gc2FtcGxlKCgpID0+IHByb3BzLmNoaWxkcmVuKGMpKSA6IHByb3BzLmNoaWxkcmVuIDogcHJvcHMuZmFsbGJhY2s7XG4gIH0pO1xufVxuZnVuY3Rpb24gU3dpdGNoKHByb3BzKSB7XG4gIGxldCBjb25kaXRpb25zID0gcHJvcHMuY2hpbGRyZW47XG4gIEFycmF5LmlzQXJyYXkoY29uZGl0aW9ucykgfHwgKGNvbmRpdGlvbnMgPSBbY29uZGl0aW9uc10pO1xuICBjb25zdCBldmFsQ29uZGl0aW9ucyA9IGNyZWF0ZU1lbW8oKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZGl0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYyA9IGNvbmRpdGlvbnNbaV0ud2hlbjtcbiAgICAgIGlmIChjKSByZXR1cm4gW2ksIGNvbmRpdGlvbnNbaV0ua2V5ZWQgPyBjIDogISFjXTtcbiAgICB9XG4gICAgcmV0dXJuIFstMV07XG4gIH0sIHVuZGVmaW5lZCwgKGEsIGIpID0+IGEgJiYgYVswXSA9PT0gYlswXSAmJiBhWzFdID09PSBiWzFdKTtcbiAgcmV0dXJuIHN1c3BlbmQoKCkgPT4ge1xuICAgIGNvbnN0IFtpbmRleCwgd2hlbl0gPSBldmFsQ29uZGl0aW9ucygpO1xuICAgIGlmIChpbmRleCA8IDApIHJldHVybiBwcm9wcy5mYWxsYmFjaztcbiAgICBjb25zdCBjID0gY29uZGl0aW9uc1tpbmRleF0uY2hpbGRyZW47XG4gICAgcmV0dXJuIHR5cGVvZiBjID09PSBcImZ1bmN0aW9uXCIgJiYgYy5sZW5ndGggPyBzYW1wbGUoKCkgPT4gYyh3aGVuKSkgOiBjO1xuICB9KTtcbn1cbmZ1bmN0aW9uIE1hdGNoKHByb3BzKSB7XG4gIGNvbnN0IGNoaWxkRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcHMsIFwiY2hpbGRyZW5cIikudmFsdWU7XG4gIHByb3BzLmtleWVkID0gdHlwZW9mIGNoaWxkRGVzYyA9PT0gXCJmdW5jdGlvblwiICYmIGNoaWxkRGVzYy5sZW5ndGg7XG4gIHJldHVybiBwcm9wcztcbn1cbmZ1bmN0aW9uIER5bmFtaWMocHJvcHMpIHtcbiAgY29uc3QgW3AsIG90aGVyc10gPSBzcGxpdFByb3BzKHByb3BzLCBbXCJjb21wb25lbnRcIl0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXAgPSBwLmNvbXBvbmVudDtcbiAgICByZXR1cm4gY29tcCAmJiBzYW1wbGUoKCkgPT4gY29tcChvdGhlcnMpKTtcbiAgfTtcbn1cblxuY29uc3QgU3VzcGVuc2VMaXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmZ1bmN0aW9uIFN1c3BlbnNlTGlzdChwcm9wcykge1xuICBsZXQgaW5kZXggPSAwLFxuICAgICAgc3VzcGVuc2VTZXR0ZXIsXG4gICAgICBzaG93Q29udGVudCxcbiAgICAgIHNob3dGYWxsYmFjaztcbiAgY29uc3QgbGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFN1c3BlbnNlTGlzdENvbnRleHQpO1xuICBpZiAobGlzdENvbnRleHQpIHtcbiAgICBjb25zdCBbc3RhdGUsIHN0YXRlU2V0dGVyXSA9IGNyZWF0ZVNpZ25hbChcInJ1bm5pbmdcIiwgdHJ1ZSk7XG4gICAgc3VzcGVuc2VTZXR0ZXIgPSBzdGF0ZVNldHRlcjtcbiAgICBbc2hvd0NvbnRlbnQsIHNob3dGYWxsYmFja10gPSBsaXN0Q29udGV4dC5yZWdpc3RlcihzdGF0ZSk7XG4gIH1cbiAgY29uc3QgcmVnaXN0cnkgPSBbXSxcbiAgICAgICAgY29tcCA9IGNyZWF0ZUNvbXBvbmVudChTdXNwZW5zZUxpc3RDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHJlZ2lzdGVyOiBzdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IFtzaG93aW5nQ29udGVudCwgc2hvd0NvbnRlbnRdID0gY3JlYXRlU2lnbmFsKGZhbHNlLCB0cnVlKSxcbiAgICAgICAgICAgICAgW3Nob3dpbmdGYWxsYmFjaywgc2hvd0ZhbGxiYWNrXSA9IGNyZWF0ZVNpZ25hbChmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHJlZ2lzdHJ5W2luZGV4KytdID0ge1xuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHNob3dDb250ZW50LFxuICAgICAgICAgIHNob3dGYWxsYmFja1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gW3Nob3dpbmdDb250ZW50LCBzaG93aW5nRmFsbGJhY2tdO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hpbGRyZW46ICgpID0+IHByb3BzLmNoaWxkcmVuXG4gIH0sIFtcImNoaWxkcmVuXCJdKTtcbiAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXZlYWwgPSBwcm9wcy5yZXZlYWxPcmRlcixcbiAgICAgICAgICB0YWlsID0gcHJvcHMudGFpbCxcbiAgICAgICAgICB2aXNpYmxlQ29udGVudCA9IHNob3dDb250ZW50ID8gc2hvd0NvbnRlbnQoKSA6IHRydWUsXG4gICAgICAgICAgdmlzaWJsZUZhbGxiYWNrID0gc2hvd0ZhbGxiYWNrID8gc2hvd0ZhbGxiYWNrKCkgOiB0cnVlLFxuICAgICAgICAgIHJldmVyc2UgPSByZXZlYWwgPT09IFwiYmFja3dhcmRzXCI7XG4gICAgaWYgKHJldmVhbCA9PT0gXCJ0b2dldGhlclwiKSB7XG4gICAgICBjb25zdCBhbGwgPSByZWdpc3RyeS5ldmVyeShpID0+IGkuc3RhdGUoKSA9PT0gXCJydW5uaW5nXCIpO1xuICAgICAgc3VzcGVuc2VTZXR0ZXIgJiYgc3VzcGVuc2VTZXR0ZXIoYWxsID8gXCJydW5uaW5nXCIgOiBcImZhbGxiYWNrXCIpO1xuICAgICAgcmVnaXN0cnkuZm9yRWFjaChpID0+IHtcbiAgICAgICAgaS5zaG93Q29udGVudChhbGwgJiYgdmlzaWJsZUNvbnRlbnQpO1xuICAgICAgICBpLnNob3dGYWxsYmFjayh2aXNpYmxlRmFsbGJhY2spO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBzdG9wID0gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ2lzdHJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gcmV2ZXJzZSA/IGxlbiAtIGkgLSAxIDogaSxcbiAgICAgICAgICAgIHMgPSByZWdpc3RyeVtuXS5zdGF0ZSgpO1xuICAgICAgaWYgKCFzdG9wICYmIChzID09PSBcInJ1bm5pbmdcIiB8fCBzID09PSBcInN1c3BlbmRlZFwiKSkge1xuICAgICAgICByZWdpc3RyeVtuXS5zaG93Q29udGVudCh2aXNpYmxlQ29udGVudCk7XG4gICAgICAgIHJlZ2lzdHJ5W25dLnNob3dGYWxsYmFjayh2aXNpYmxlRmFsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dCA9ICFzdG9wO1xuICAgICAgICBpZiAobmV4dCAmJiBzdXNwZW5zZVNldHRlcikgc3VzcGVuc2VTZXR0ZXIoXCJmYWxsYmFja1wiKTtcbiAgICAgICAgaWYgKCF0YWlsIHx8IG5leHQgJiYgdGFpbCA9PT0gXCJjb2xsYXBzZWRcIikge1xuICAgICAgICAgIHJlZ2lzdHJ5W25dLnNob3dGYWxsYmFjayh2aXNpYmxlRmFsbGJhY2spO1xuICAgICAgICB9IGVsc2UgcmVnaXN0cnlbbl0uc2hvd0ZhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgc3RvcCA9IHRydWU7XG4gICAgICAgIHJlZ2lzdHJ5W25dLnNob3dDb250ZW50KG5leHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXN0b3AgJiYgc3VzcGVuc2VTZXR0ZXIpIHN1c3BlbnNlU2V0dGVyKFwicnVubmluZ1wiKTtcbiAgfSk7XG4gIHJldHVybiBjb21wO1xufVxuZnVuY3Rpb24gU3VzcGVuc2UocHJvcHMpIHtcbiAgbGV0IGNvdW50ZXIgPSAwLFxuICAgICAgdCxcbiAgICAgIHNob3dDb250ZW50LFxuICAgICAgc2hvd0ZhbGxiYWNrLFxuICAgICAgdHJhbnNpdGlvbjtcbiAgY29uc3QgW3N0YXRlLCBuZXh0U3RhdGVdID0gY3JlYXRlU2lnbmFsKFwicnVubmluZ1wiLCB0cnVlKSxcbiAgICAgICAgc3RvcmUgPSB7XG4gICAgaW5jcmVtZW50OiAoKSA9PiB7XG4gICAgICBpZiAoKytjb3VudGVyID09PSAxKSB7XG4gICAgICAgIGlmICghc3RvcmUuaW5pdGlhbGl6aW5nKSB7XG4gICAgICAgICAgaWYgKFN1c3BlbnNlQ29udGV4dC50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAhdHJhbnNpdGlvbiAmJiAodHJhbnNpdGlvbiA9IFN1c3BlbnNlQ29udGV4dC50cmFuc2l0aW9uKS5pbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIHQgPSBzZXRUaW1lb3V0KCgpID0+IG5leHRTdGF0ZShcImZhbGxiYWNrXCIpLCBTdXNwZW5zZUNvbnRleHQudHJhbnNpdGlvbi50aW1lb3V0TXMpO1xuICAgICAgICAgICAgbmV4dFN0YXRlKFwic3VzcGVuZGVkXCIpO1xuICAgICAgICAgIH0gZWxzZSBuZXh0U3RhdGUoXCJmYWxsYmFja1wiKTtcbiAgICAgICAgfSBlbHNlIG5leHRTdGF0ZShcImZhbGxiYWNrXCIpO1xuICAgICAgICBTdXNwZW5zZUNvbnRleHQuaW5jcmVtZW50KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWNyZW1lbnQ6ICgpID0+IHtcbiAgICAgIGlmICgtLWNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgdCAmJiBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIHRyYW5zaXRpb24gJiYgdHJhbnNpdGlvbi5kZWNyZW1lbnQoKTtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgbmV4dFN0YXRlKFwicnVubmluZ1wiKTtcbiAgICAgICAgYWZ0ZXJFZmZlY3RzKCgpID0+IFN1c3BlbnNlQ29udGV4dC5kZWNyZW1lbnQoKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdGF0ZSxcbiAgICBpbml0aWFsaXppbmc6IHRydWVcbiAgfTtcbiAgY29uc3QgbGlzdENvbnRleHQgPSB1c2VDb250ZXh0KFN1c3BlbnNlTGlzdENvbnRleHQpO1xuICBpZiAobGlzdENvbnRleHQpIFtzaG93Q29udGVudCwgc2hvd0ZhbGxiYWNrXSA9IGxpc3RDb250ZXh0LnJlZ2lzdGVyKHN0b3JlLnN0YXRlKTtcbiAgcmV0dXJuIGNyZWF0ZUNvbXBvbmVudChTdXNwZW5zZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RvcmUsXG4gICAgY2hpbGRyZW46ICgpID0+IHtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gc2FtcGxlKCgpID0+IHByb3BzLmNoaWxkcmVuKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RvcmUuc3RhdGUoKSxcbiAgICAgICAgICAgICAgdmlzaWJsZUNvbnRlbnQgPSBzaG93Q29udGVudCA/IHNob3dDb250ZW50KCkgOiB0cnVlLFxuICAgICAgICAgICAgICB2aXNpYmxlRmFsbGJhY2sgPSBzaG93RmFsbGJhY2sgPyBzaG93RmFsbGJhY2soKSA6IHRydWU7XG4gICAgICAgIGlmIChzdG9yZS5pbml0aWFsaXppbmcpIHN0b3JlLmluaXRpYWxpemluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodmFsdWUgPT09IFwicnVubmluZ1wiICYmIHZpc2libGVDb250ZW50IHx8IHZhbHVlID09PSBcInN1c3BlbmRlZFwiKSByZXR1cm4gcmVuZGVyZWQ7XG4gICAgICAgIGlmICghdmlzaWJsZUZhbGxiYWNrKSByZXR1cm47XG4gICAgICAgIHJldHVybiBwcm9wcy5mYWxsYmFjaztcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXCJjaGlsZHJlblwiXSk7XG59XG5cbmV4cG9ydCB7ICRSQVcsIER5bmFtaWMsIEZvciwgSW5kZXgsIE1hdGNoLCBTaG93LCBTdXNwZW5zZSwgU3VzcGVuc2VDb250ZXh0LCBTdXNwZW5zZUxpc3QsIFN3aXRjaCwgYWZ0ZXJFZmZlY3RzLCBhd2FpdFN1c3BlbnNlLCBjYW5jZWxDYWxsYmFjaywgY2xvbmVQcm9wcywgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0LCBjcmVhdGVEZWZlcnJlZCwgY3JlYXRlRGVwZW5kZW50RWZmZWN0LCBjcmVhdGVFZmZlY3QsIGNyZWF0ZU1lbW8sIGNyZWF0ZVJlc291cmNlLCBjcmVhdGVSZXNvdXJjZVN0YXRlLCBjcmVhdGVSb290LCBjcmVhdGVTaWduYWwsIGNyZWF0ZVN0YXRlLCBlcXVhbEZuLCBmcmVlemUsIGdldENvbnRleHRPd25lciwgaW5kZXhBcnJheSwgaXNMaXN0ZW5pbmcsIGxhenksIG1hcEFycmF5LCBvbkNsZWFudXAsIG9uRXJyb3IsIHJlY29uY2lsZSwgcmVxdWVzdENhbGxiYWNrLCBzYW1wbGUsIHNldERlZmF1bHRzLCBzcGxpdFByb3BzLCBzdXNwZW5kLCB1bndyYXAsIHVzZUNvbnRleHQsIHVzZVRyYW5zaXRpb24gfTtcbiIsImltcG9ydCBSZW5kZXJlciBmcm9tICcuL3JlbmRlcic7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5sZXQgcmVuZGVyZXI6UmVuZGVyZXI7XG5cbm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cdHJlbmRlcmVyLmluaXQoKTtcbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwic29saWQtanMvZG9tXCI7XG5pbXBvcnQgeyBjcmVhdGVTaWduYWwsIG9uQ2xlYW51cCwgY3JlYXRlRWZmZWN0LCBjcmVhdGVTdGF0ZSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5jbGFzcyBSZW5kZXJlciB7XG5cdC8vIHVpIGVsZW1lbnRzXG5cdF9yZWFjdDpudWxsIHwgYW55O1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuX3JlYWN0ID0gbnVsbDtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0Y29uc3QgQXBwID0gKCkgPT4ge1xuXHRcdFx0Ly8gY3JlYXRlIHNvbGlkIHN0YXRlXG5cdFx0XHRsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBjcmVhdGVTdGF0ZSh7ZmlsZVBhdGg6XCJub3QgcmVhY3RpdmUhXCJ9KTtcblx0XHRcdHRoaXMuX3JlYWN0ID0geyBzdGF0ZSwgc2V0U3RhdGUgfVxuXG5cdFx0XHQvLyBwcmludCBmaWxlIHBhdGggb24gY2hhbmdlXG5cdFx0XHRjcmVhdGVFZmZlY3QoKCk9PmNvbnNvbGUubG9nKFwiXFxuXFxuZmlsZVBhdGg6XCIsIHN0YXRlLmZpbGVQYXRoLCBcIlxcblxcblxcblwiKSk7XG5cblx0XHRcdGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gY3JlYXRlU2lnbmFsKDApLFxuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDb3VudChjb3VudCgpICsgMSksIDEwMDApO1xuXHRcdFx0b25DbGVhbnVwKCgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpKTtcblxuXHRcdFx0Ly8gY29tcG9uZW50c1xuXHRcdFx0Y29uc3QgQXBwU2lkZWJhciA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuICg8ZGl2IGlkPVwic2lkZWJhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJleHBsb3JlclwiIGlkPVwiZXhwbG9yZXJcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgQXBwQ29udGVudCA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuICg8ZGl2IGlkPVwiY29udGVudFwiPkNvdW50ZXI6IHtjb3VudCgpfTwvZGl2Pik7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IEFwcEZvb3RlciA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHQ8ZGl2IGlkPVwiZm9vdGVyXCIgb25DbGljaz17KCkgPT4gc2V0U3RhdGUoXCJmaWxlUGF0aFwiLCBsID0+IGwgKyBcIiFcIil9PlxuXHRcdFx0XHRcdFx0PGRpdiBpZD1cInRpdGxlXCI+e3N0YXRlLmZpbGVQYXRofTwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKDxkaXYgaWQ9XCJhcHBcIj5cblx0XHRcdFx0PEFwcFNpZGViYXIgLz5cblx0XHRcdFx0PEFwcENvbnRlbnQgLz5cblx0XHRcdFx0PEFwcEZvb3RlciAvPlxuXHRcdFx0PC9kaXY+KVxuXHRcdH1cblxuXHRcdHJlbmRlcigoKSA9PiA8QXBwIC8+LCBkb2N1bWVudC5ib2R5KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjsiXSwic291cmNlUm9vdCI6IiJ9