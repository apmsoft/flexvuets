import { statusNative as t, statusLoading as e, statusError as l, statusLoaded as u, statusApplied as n } from "./elementStatus.js";const r = "data-",s = "ll-status",o = (t, e) => t.getAttribute(r + e),i = (t, e, l) => {const u = r + e;null !== l ? t.setAttribute(u, l) : t.removeAttribute(u);},a = (t) => o(t, s),m = (t, e) => i(t, s, e),b = (t) => m(t, null),A = (t) => null === a(t),c = (t) => a(t) === e,d = (t) => a(t) === l,f = (e) => a(e) === t,p = [e, u, n, l],x = (t) => p.indexOf(a(t)) >= 0;export { o as getData, a as getStatus, x as hadStartedLoading, A as hasEmptyStatus, d as hasStatusError, c as hasStatusLoading, f as hasStatusNative, b as resetStatus, i as setData, m as setStatus };