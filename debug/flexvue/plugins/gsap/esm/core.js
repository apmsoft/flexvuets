import gsap from "./gsap-core.min.js";
import CSSPlugin from "./CSSPlugin.min.js";
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;
export { gsapWithCSS as gsap, gsapWithCSS as default, CSSPlugin, TweenMaxWithCSS as TweenMax };
export { TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, selector } from "./gsap-core.min.js";
//# sourceMappingURL=core.js.map