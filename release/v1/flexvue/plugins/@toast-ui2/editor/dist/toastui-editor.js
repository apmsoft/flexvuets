"use strict";
/*!
 * @toast-ui/editor
 * @version 3.1.3 | Thu Feb 10 2022
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.toastui=e():(t.toastui=t.toastui||{},t.toastui.Editor=e());}(self,function(){
return function(){
var t={368:function(t){
/*! @license DOMPurify 2.3.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.3/LICENSE */
t.exports=function(){
"use strict";
function t(t){if(Array.isArray(t)){
for(var e=0,n=Array(t.length);e<t.length;e++)
n[e]=t[e];
return n;
}return Array.from(t);}
var e=Object.hasOwnProperty,n=Object.setPrototypeOf,r=Object.isFrozen,o=Object.getPrototypeOf,i=Object.getOwnPropertyDescriptor,s=Object.freeze,a=Object.seal,c=Object.create,l="undefined"!=typeof Reflect&&Reflect,u=l.apply,p=l.construct;
u||(u=function(t,e,n){return t.apply(e,n);}),s||(s=function(t){return t;}),a||(a=function(t){return t;}),p||(p=function(e,n){return new(Function.prototype.bind.apply(e,[null].concat(t(n))))();});
var d=x(Array.prototype.forEach),f=x(Array.prototype.pop),h=x(Array.prototype.push),m=x(String.prototype.toLowerCase),v=x(String.prototype.match),g=x(String.prototype.replace),y=x(String.prototype.indexOf),b=x(String.prototype.trim),w=x(RegExp.prototype.test),k=C(TypeError);
function x(t){return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)
r[o-1]=arguments[o];return u(t,e,r);};}
function C(t){return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)
n[r]=arguments[r];return p(t,n);};}
function T(t,e){n&&n(t,null);for(var o=e.length;o--;){
var i=e[o];
if("string"==typeof i){
var s=m(i);
s!==i&&(r(e)||(e[o]=s),i=s);
}
t[i]=!0;
}return t;}
function M(t){var n=c(null),r=void 0;for(r in t)
u(e,t,[r])&&(n[r]=t[r]);return n;}
function S(t,e){for(;null!==t;){
var n=i(t,e);
if(n){
if(n.get)
return x(n.get);
if("function"==typeof n.value)
return x(n.value);
}
t=o(t);
}function r(t){return console.warn("fallback value for",t),null;}return r;}
var E=s(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),N=s(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),O=s(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),D=s(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),A=s(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),L=s(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),I=s(["#text"]),R=s(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=s(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=s(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),F=s(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),z=a(/<%[\s\S]*|[\s\S]*%>/gm),j=a(/^data-[\-\w.\u00B7-\uFFFF]/),_=a(/^aria-[\-\w]+$/),q=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=a(/^(?:\w+script|data):/i),$=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};
function W(t){if(Array.isArray(t)){
for(var e=0,n=Array(t.length);e<t.length;e++)
n[e]=t[e];
return n;
}return Array.from(t);}
var J=function(){return"undefined"==typeof window?null:window;},G=function(t,e){if("object"!==(void 0===t?"undefined":U(t))||"function"!=typeof t.createPolicy)
return null;var n=null,r="data-tt-policy-suffix";e.currentScript&&e.currentScript.hasAttribute(r)&&(n=e.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{
return t.createPolicy(o,{createHTML:function(t){return t;}});
}
catch(t){
return console.warn("TrustedTypes policy "+o+" could not be created."),null;
}};
function K(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),e=function(t){return K(t);};if(e.version="2.3.3",e.removed=[],!t||!t.document||9!==t.document.nodeType)
return e.isSupported=!1,e;var n=t.document,r=t.document,o=t.DocumentFragment,i=t.HTMLTemplateElement,a=t.Node,c=t.Element,l=t.NodeFilter,u=t.NamedNodeMap,p=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,x=t.Text,C=t.Comment,Z=t.DOMParser,X=t.trustedTypes,Q=c.prototype,Y=S(Q,"cloneNode"),tt=S(Q,"nextSibling"),et=S(Q,"childNodes"),nt=S(Q,"parentNode");if("function"==typeof i){
var rt=r.createElement("template");
rt.content&&rt.content.ownerDocument&&(r=rt.content.ownerDocument);
}var ot=G(X,n),it=ot&&Ft?ot.createHTML(""):"",st=r,at=st.implementation,ct=st.createNodeIterator,lt=st.createDocumentFragment,ut=st.getElementsByTagName,pt=n.importNode,dt={};try{
dt=M(r).documentMode?r.documentMode:{};
}
catch(t){}var ft={};e.isSupported="function"==typeof nt&&at&&void 0!==at.createHTMLDocument&&9!==dt;var ht=H,mt=z,vt=j,gt=_,yt=V,bt=$,wt=q,kt=null,xt=T({},[].concat(W(E),W(N),W(O),W(A),W(I))),Ct=null,Tt=T({},[].concat(W(R),W(P),W(B),W(F))),Mt=null,St=null,Et=!0,Nt=!0,Ot=!1,Dt=!1,At=!1,Lt=!1,It=!1,Rt=!1,Pt=!1,Bt=!0,Ft=!1,Ht=!0,zt=!0,jt=!1,_t={},qt=null,Vt=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),$t=null,Ut=T({},["audio","video","img","source","image","track"]),Wt=null,Jt=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Gt="http://www.w3.org/1998/Math/MathML",Kt="http://www.w3.org/2000/svg",Zt="http://www.w3.org/1999/xhtml",Xt=Zt,Qt=!1,Yt=void 0,te=["application/xhtml+xml","text/html"],ee="text/html",ne=void 0,re=null,oe=r.createElement("form"),ie=function(t){re&&re===t||(t&&"object"===(void 0===t?"undefined":U(t))||(t={}),t=M(t),kt="ALLOWED_TAGS"in t?T({},t.ALLOWED_TAGS):xt,Ct="ALLOWED_ATTR"in t?T({},t.ALLOWED_ATTR):Tt,Wt="ADD_URI_SAFE_ATTR"in t?T(M(Jt),t.ADD_URI_SAFE_ATTR):Jt,$t="ADD_DATA_URI_TAGS"in t?T(M(Ut),t.ADD_DATA_URI_TAGS):Ut,qt="FORBID_CONTENTS"in t?T({},t.FORBID_CONTENTS):Vt,Mt="FORBID_TAGS"in t?T({},t.FORBID_TAGS):{},St="FORBID_ATTR"in t?T({},t.FORBID_ATTR):{},_t="USE_PROFILES"in t&&t.USE_PROFILES,Et=!1!==t.ALLOW_ARIA_ATTR,Nt=!1!==t.ALLOW_DATA_ATTR,Ot=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Dt=t.SAFE_FOR_TEMPLATES||!1,At=t.WHOLE_DOCUMENT||!1,Rt=t.RETURN_DOM||!1,Pt=t.RETURN_DOM_FRAGMENT||!1,Bt=!1!==t.RETURN_DOM_IMPORT,Ft=t.RETURN_TRUSTED_TYPE||!1,It=t.FORCE_BODY||!1,Ht=!1!==t.SANITIZE_DOM,zt=!1!==t.KEEP_CONTENT,jt=t.IN_PLACE||!1,wt=t.ALLOWED_URI_REGEXP||wt,Xt=t.NAMESPACE||Zt,Yt=Yt=-1===te.indexOf(t.PARSER_MEDIA_TYPE)?ee:t.PARSER_MEDIA_TYPE,ne="application/xhtml+xml"===Yt?function(t){return t;}:m,Dt&&(Nt=!1),Pt&&(Rt=!0),_t&&(kt=T({},[].concat(W(I))),Ct=[],!0===_t.html&&(T(kt,E),T(Ct,R)),!0===_t.svg&&(T(kt,N),T(Ct,P),T(Ct,F)),!0===_t.svgFilters&&(T(kt,O),T(Ct,P),T(Ct,F)),!0===_t.mathMl&&(T(kt,A),T(Ct,B),T(Ct,F))),t.ADD_TAGS&&(kt===xt&&(kt=M(kt)),T(kt,t.ADD_TAGS)),t.ADD_ATTR&&(Ct===Tt&&(Ct=M(Ct)),T(Ct,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&T(Wt,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(qt===Vt&&(qt=M(qt)),T(qt,t.FORBID_CONTENTS)),zt&&(kt["#text"]=!0),At&&T(kt,["html","head","body"]),kt.table&&(T(kt,["tbody"]),delete Mt.tbody),s&&s(t),re=t);},se=T({},["mi","mo","mn","ms","mtext"]),ae=T({},["foreignobject","desc","title","annotation-xml"]),ce=T({},N);T(ce,O),T(ce,D);var le=T({},A);T(le,L);var ue=function(t){var e=nt(t);e&&e.tagName||(e={namespaceURI:Zt,tagName:"template"});var n=m(t.tagName),r=m(e.tagName);if(t.namespaceURI===Kt)
return e.namespaceURI===Zt?"svg"===n:e.namespaceURI===Gt?"svg"===n&&("annotation-xml"===r||se[r]):Boolean(ce[n]);if(t.namespaceURI===Gt)
return e.namespaceURI===Zt?"math"===n:e.namespaceURI===Kt?"math"===n&&ae[r]:Boolean(le[n]);if(t.namespaceURI===Zt){
if(e.namespaceURI===Kt&&!ae[r])
return!1;
if(e.namespaceURI===Gt&&!se[r])
return!1;
var o=T({},["title","style","font","a","script"]);
return!le[n]&&(o[n]||!ce[n]);
}return!1;},pe=function(t){h(e.removed,{element:t});try{
t.parentNode.removeChild(t);
}
catch(e){
try{
t.outerHTML=it;
}
catch(e){
t.remove();
}
}},de=function(t,n){try{
h(e.removed,{attribute:n.getAttributeNode(t),from:n});
}
catch(t){
h(e.removed,{attribute:null,from:n});
}if(n.removeAttribute(t),"is"===t&&!Ct[t])
if(Rt||Pt)
try{
pe(n);
}
catch(t){}else

try{
n.setAttribute(t,"");
}
catch(t){}},fe=function(t){var e=void 0,n=void 0;if(It)
t="<remove></remove>"+t;else
{
var o=v(t,/^[\r\n\t ]+/);
n=o&&o[0];
}"application/xhtml+xml"===Yt&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");var i=ot?ot.createHTML(t):t;if(Xt===Zt)
try{
e=new Z().parseFromString(i,Yt);
}
catch(t){}if(!e||!e.documentElement){
e=at.createDocument(Xt,"template",null);
try{
e.documentElement.innerHTML=Qt?"":i;
}
catch(t){}
}var s=e.body||e.documentElement;return t&&n&&s.insertBefore(r.createTextNode(n),s.childNodes[0]||null),Xt===Zt?ut.call(e,At?"html":"body")[0]:At?e.documentElement:s;},he=function(t){return ct.call(t.ownerDocument||t,t,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,null,!1);},me=function(t){return!(t instanceof x||t instanceof C||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof p&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute&&"string"==typeof t.namespaceURI&&"function"==typeof t.insertBefore);},ve=function(t){return"object"===(void 0===a?"undefined":U(a))?t instanceof a:t&&"object"===(void 0===t?"undefined":U(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName;},ge=function(t,n,r){ft[t]&&d(ft[t],function(t){t.call(e,n,r,re);});},ye=function(t){var n=void 0;if(ge("beforeSanitizeElements",t,null),me(t))
return pe(t),!0;if(v(t.nodeName,/[\u0080-\uFFFF]/))
return pe(t),!0;var r=ne(t.nodeName);if(ge("uponSanitizeElement",t,{tagName:r,allowedTags:kt}),!ve(t.firstElementChild)&&(!ve(t.content)||!ve(t.content.firstElementChild))&&w(/<[/\w]/g,t.innerHTML)&&w(/<[/\w]/g,t.textContent))
return pe(t),!0;if("select"===r&&w(/<template/i,t.innerHTML))
return pe(t),!0;if(!kt[r]||Mt[r]){
if(zt&&!qt[r]){
var o=nt(t)||t.parentNode,i=et(t)||t.childNodes;
if(i&&o)
for(var s=i.length-1;s>=0;--s)
o.insertBefore(Y(i[s],!0),tt(t));
}
return pe(t),!0;
}return t instanceof c&&!ue(t)?(pe(t),!0):"noscript"!==r&&"noembed"!==r||!w(/<\/no(script|embed)/i,t.innerHTML)?(Dt&&3===t.nodeType&&(n=t.textContent,n=g(n,ht," "),n=g(n,mt," "),t.textContent!==n&&(h(e.removed,{element:t.cloneNode()}),t.textContent=n)),ge("afterSanitizeElements",t,null),!1):(pe(t),!0);},be=function(t,e,n){if(Ht&&("id"===e||"name"===e)&&(n in r||n in oe))
return!1;if(Nt&&!St[e]&&w(vt,e))
;else
if(Et&&w(gt,e))
;else
{
if(!Ct[e]||St[e])
return!1;
if(Wt[e])
;else
if(w(wt,g(n,bt,"")))
;else
if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==y(n,"data:")||!$t[t])
if(Ot&&!w(yt,g(n,bt,"")))
;else
if(n)
return!1;
}return!0;},we=function(t){var n=void 0,r=void 0,o=void 0,i=void 0;ge("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){
var a={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ct};
for(i=s.length;i--;){
var c=n=s[i],l=c.name,u=c.namespaceURI;
if(r=b(n.value),o=ne(l),a.attrName=o,a.attrValue=r,a.keepAttr=!0,a.forceKeepAttr=void 0,ge("uponSanitizeAttribute",t,a),r=a.attrValue,!a.forceKeepAttr&&(de(l,t),a.keepAttr))
if(w(/\/>/i,r))
de(l,t);else
{
Dt&&(r=g(r,ht," "),r=g(r,mt," "));
var p=ne(t.nodeName);
if(be(p,o,r))
try{
u?t.setAttributeNS(u,l,r):t.setAttribute(l,r),f(e.removed);
}
catch(t){}
}
}
ge("afterSanitizeAttributes",t,null);
}},ke=function t(e){var n=void 0,r=he(e);for(ge("beforeSanitizeShadowDOM",e,null);n=r.nextNode();)
ge("uponSanitizeShadowNode",n,null),ye(n)||(n.content instanceof o&&t(n.content),we(n));ge("afterSanitizeShadowDOM",e,null);};return e.sanitize=function(r,i){var s=void 0,c=void 0,l=void 0,u=void 0,p=void 0;if((Qt=!r)&&(r="\x3c!--\x3e"),"string"!=typeof r&&!ve(r)){
if("function"!=typeof r.toString)
throw k("toString is not a function");
if("string"!=typeof(r=r.toString()))
throw k("dirty is not a string, aborting");
}if(!e.isSupported){
if("object"===U(t.toStaticHTML)||"function"==typeof t.toStaticHTML){
if("string"==typeof r)
return t.toStaticHTML(r);
if(ve(r))
return t.toStaticHTML(r.outerHTML);
}
return r;
}if(Lt||ie(i),e.removed=[],"string"==typeof r&&(jt=!1),jt)
;else
if(r instanceof a)
1===(c=(s=fe("\x3c!----\x3e")).ownerDocument.importNode(r,!0)).nodeType&&"BODY"===c.nodeName||"HTML"===c.nodeName?s=c:s.appendChild(c);else
{
if(!Rt&&!Dt&&!At&&-1===r.indexOf("<"))
return ot&&Ft?ot.createHTML(r):r;
if(!(s=fe(r)))
return Rt?null:it;
}s&&It&&pe(s.firstChild);for(var d=he(jt?r:s);l=d.nextNode();)
3===l.nodeType&&l===u||ye(l)||(l.content instanceof o&&ke(l.content),we(l),u=l);if(u=null,jt)
return r;if(Rt){
if(Pt)
for(p=lt.call(s.ownerDocument);s.firstChild;)
p.appendChild(s.firstChild);else

p=s;
return Bt&&(p=pt.call(n,p,!0)),p;
}var f=At?s.outerHTML:s.innerHTML;return Dt&&(f=g(f,ht," "),f=g(f,mt," ")),ot&&Ft?ot.createHTML(f):f;},e.setConfig=function(t){ie(t),Lt=!0;},e.clearConfig=function(){re=null,Lt=!1;},e.isValidAttribute=function(t,e,n){re||ie({});var r=ne(t),o=ne(e);return be(r,o,n);},e.addHook=function(t,e){"function"==typeof e&&(ft[t]=ft[t]||[],h(ft[t],e));},e.removeHook=function(t){ft[t]&&f(ft[t]);},e.removeHooks=function(t){ft[t]&&(ft[t]=[]);},e.removeAllHooks=function(){ft={};},e;}
return K();
}();
},928:function(t,e,n){
"use strict";
var r=n(322);
t.exports=function(t,e,n){var o,i;if(n=n||0,!r(e))
return-1;if(Array.prototype.indexOf)
return Array.prototype.indexOf.call(e,t,n);for(i=e.length,o=n;n>=0&&o<i;o+=1)
if(e[o]===t)
return o;return-1;};
},690:function(t,e,n){
"use strict";
var r=n(322),o=n(893),i=n(956);
t.exports=function(t,e,n){r(t)?o(t,e,n):i(t,e,n);};
},893:function(t){
"use strict";
t.exports=function(t,e,n){var r=0,o=t.length;for(n=n||null;r<o&&!1!==e.call(n,t[r],r,t);r+=1)
;};
},956:function(t){
"use strict";
t.exports=function(t,e,n){var r;for(r in n=n||null,t)
if(t.hasOwnProperty(r)&&!1===e.call(n,t[r],r,t))
break;};
},990:function(t,e,n){
"use strict";
var r=n(893);
t.exports=function(t){var e;try{
e=Array.prototype.slice.call(t);
}
catch(n){
e=[],r(t,function(t){e.push(t);});
}return e;};
},755:function(t){
"use strict";
var e="_feEventKey";
t.exports=function(t,n){var r,o=t[e];return o||(o=t[e]={}),(r=o[n])||(r=o[n]=[]),r;};
},349:function(t,e,n){
"use strict";
var r=n(758),o=n(690),i=n(755);
function s(t,e,n){var r,s=i(t,e);n?(o(s,function(o,i){return n!==o.handler||(a(t,e,o.wrappedHandler),r=i,!1);}),s.splice(r,1)):(o(s,function(n){a(t,e,n.wrappedHandler);}),s.splice(0,s.length));}
function a(t,e,n){"removeEventListener"in t?t.removeEventListener(e,n):"detachEvent"in t&&t.detachEvent("on"+e,n);}
t.exports=function(t,e,n){r(e)?o(e.split(/\s+/g),function(e){s(t,e,n);}):o(e,function(e,n){s(t,n,e);});};
},348:function(t,e,n){
"use strict";
var r=n(758),o=n(690),i=n(755);
function s(t,e,n,r){function s(e){n.call(r||t,e||window.event);}"addEventListener"in t?t.addEventListener(e,s):"attachEvent"in t&&t.attachEvent("on"+e,s),function(t,e,n,r){var s=i(t,e),a=!1;o(s,function(t){return t.handler!==n||(a=!0,!1);}),a||s.push({handler:n,wrappedHandler:r});}(t,e,n,s);}
t.exports=function(t,e,n,i){r(e)?o(e.split(/\s+/g),function(e){s(t,e,n,i);}):o(e,function(e,r){s(t,r,e,n);});};
},24:function(t,e,n){
"use strict";
var r=n(322),o=n(929);
t.exports=function(t,e){e=(e=r(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e;};
},204:function(t,e,n){
"use strict";
var r=n(690),o=n(928),i=n(902),s=n(24);
t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,c=[];a?r(n,function(e){t.classList.add(e);}):((e=i(t))&&(n=[].concat(e.split(/\s+/),n)),r(n,function(t){o(t,c)<0&&c.push(t);}),s(t,c));};
},522:function(t,e,n){
"use strict";
var r=n(758),o=n(690);
t.exports=function(t,e,n){var i=t.style;r(e)?i[e]=n:o(e,function(t,e){i[e]=t;});};
},902:function(t,e,n){
"use strict";
var r=n(929);
t.exports=function(t){return t&&t.className?r(t.className.baseVal)?t.className:t.className.baseVal:"";};
},714:function(t,e,n){
"use strict";
var r=n(928),o=n(902);
t.exports=function(t,e){var n;return t.classList?t.classList.contains(e):(n=o(t).split(/\s+/),r(e,n)>-1);};
},471:function(t,e,n){
"use strict";
var r=n(928),o=n(990),i=Element.prototype,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(t){var e=this.document||this.ownerDocument;return r(this,o(e.querySelectorAll(t)))>-1;};
t.exports=function(t,e){return s.call(t,e);};
},462:function(t,e,n){
"use strict";
var r=n(893),o=n(928),i=n(902),s=n(24);
t.exports=function(t){var e,n,a=Array.prototype.slice.call(arguments,1),c=t.classList;c?r(a,function(t){c.remove(t);}):(e=i(t).split(/\s+/),n=[],r(e,function(t){o(t,a)<0&&n.push(t);}),s(t,n));};
},969:function(t){
"use strict";
t.exports=function(t,e){var n,r,o,i,s=Object.prototype.hasOwnProperty;for(o=1,i=arguments.length;o<i;o+=1)
for(r in n=arguments[o])
s.call(n,r)&&(t[r]=n[r]);return t;};
},254:function(t,e,n){
"use strict";
var r=n(956);
t.exports=function(t,e){var n=document.createElement("img"),o="";return r(e,function(t,e){o+="&"+e+"="+t;}),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n;};
},391:function(t,e,n){
"use strict";
var r=n(929),o=n(254);
t.exports=function(t,e){var n=location.hostname,i="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(i);(r(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(t){return new Date().getTime()-t>6048e5;}(s)||(window.localStorage.setItem(i,new Date().getTime()),setTimeout(function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"});},1e3)));};
},516:function(t){
"use strict";
t.exports=function(t,e){var n,r;return e=e||0,function(){r=Array.prototype.slice.call(arguments),window.clearTimeout(n),n=window.setTimeout(function(){t.apply(null,r);},e);};};
},423:function(t,e,n){
"use strict";
var r=n(516);
t.exports=function(t,e){var n,o,i,s,a=!0,c=function(e){t.apply(null,e),n=null;};function l(){if(s=Array.prototype.slice.call(arguments),a)
return c(s),void(a=!1);i=Number(new Date()),n=n||i,o(s),i-n>=e&&c(s);}return o=r(c,e=e||0),l.reset=function(){a=!0,n=null;},l;};
},322:function(t){
"use strict";
t.exports=function(t){return t instanceof Array;};
},326:function(t){
"use strict";
t.exports=function(t){return"boolean"==typeof t||t instanceof Boolean;};
},65:function(t,e,n){
"use strict";
var r=n(929),o=n(934);
t.exports=function(t){return!r(t)&&!o(t);};
},404:function(t,e,n){
"use strict";
var r=n(790);
t.exports=function(t){return!r(t);};
},294:function(t){
"use strict";
t.exports=function(t){return t instanceof Function;};
},934:function(t){
"use strict";
t.exports=function(t){return null===t;};
},321:function(t){
"use strict";
t.exports=function(t){return"number"==typeof t||t instanceof Number;};
},73:function(t){
"use strict";
t.exports=function(t){return t===Object(t);};
},758:function(t){
"use strict";
t.exports=function(t){return"string"==typeof t||t instanceof String;};
},790:function(t,e,n){
"use strict";
var r=n(65);
t.exports=function(t){return r(t)&&!1!==t;};
},929:function(t){
"use strict";
t.exports=function(t){return void 0===t;};
}},e={};
function n(r){var o=e[r];if(void 0!==o)
return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports;}
n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,{a:e}),e;},n.d=function(t,e){for(var r in e)
n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});},n.g=function(){if("object"==typeof globalThis)
return globalThis;try{
return this||new Function("return this")();
}
catch(t){
if("object"==typeof window)
return window;
}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);};
var r={};
return function(){
"use strict";
n.d(r,{default:function(){return dy;}});
/*! *****************************************************************************
            Copyright (c) Microsoft Corporation.
            
            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.
            
            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)
Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);},t(e,n);};
function e(e,n){if("function"!=typeof n&&null!==n)
throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e;}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r());}
var o=function(){return o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)
for(var o in e=arguments[n])
Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t;},o.apply(this,arguments);};
Object.create;
function i(t,e,n){if(n||2===arguments.length)
for(var r,o=0,i=e.length;o<i;o++)
!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e));}
function s(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t;}
Object.create;
function a(t){this.content=t;}
a.prototype={constructor:a,find:function(t){for(var e=0;e<this.content.length;e+=2)
if(this.content[e]===t)
return e;return-1;},get:function(t){var e=this.find(t);return-1==e?void 0:this.content[e+1];},update:function(t,e,n){var r=n&&n!=t?this.remove(n):this,o=r.find(t),i=r.content.slice();return-1==o?i.push(n||t,e):(i[o+1]=e,n&&(i[o]=n)),new a(i);},remove:function(t){var e=this.find(t);if(-1==e)
return this;var n=this.content.slice();return n.splice(e,2),new a(n);},addToStart:function(t,e){return new a([t,e].concat(this.remove(t).content));},addToEnd:function(t,e){var n=this.remove(t).content.slice();return n.push(t,e),new a(n);},addBefore:function(t,e,n){var r=this.remove(e),o=r.content.slice(),i=r.find(t);return o.splice(-1==i?o.length:i,0,e,n),new a(o);},forEach:function(t){for(var e=0;e<this.content.length;e+=2)
t(this.content[e],this.content[e+1]);},prepend:function(t){return(t=a.from(t)).size?new a(t.content.concat(this.subtract(t).content)):this;},append:function(t){return(t=a.from(t)).size?new a(this.subtract(t).content.concat(t.content)):this;},subtract:function(t){var e=this;t=a.from(t);for(var n=0;n<t.content.length;n+=2)
e=e.remove(t.content[n]);return e;},get size(){return this.content.length>>1;}},a.from=function(t){if(t instanceof a)
return t;var e=[];if(t)
for(var n in t)
e.push(n,t[n]);return new a(e);};
var c=a;
function l(t,e,n){for(var r=0;;r++){
if(r==t.childCount||r==e.childCount)
return t.childCount==e.childCount?null:n;
var o=t.child(r),i=e.child(r);
if(o!=i){
if(!o.sameMarkup(i))
return n;
if(o.isText&&o.text!=i.text){
for(var s=0;o.text[s]==i.text[s];s++)
n++;
return n;
}
if(o.content.size||i.content.size){
var a=l(o.content,i.content,n+1);
if(null!=a)
return a;
}
n+=o.nodeSize;
}else

n+=o.nodeSize;
}}
function u(t,e,n,r){for(var o=t.childCount,i=e.childCount;;){
if(0==o||0==i)
return o==i?null:{a:n,b:r};
var s=t.child(--o),a=e.child(--i),c=s.nodeSize;
if(s!=a){
if(!s.sameMarkup(a))
return{a:n,b:r};
if(s.isText&&s.text!=a.text){
for(var l=0,p=Math.min(s.text.length,a.text.length);l<p&&s.text[s.text.length-l-1]==a.text[a.text.length-l-1];)
l++,n--,r--;
return{a:n,b:r};
}
if(s.content.size||a.content.size){
var d=u(s.content,a.content,n-1,r-1);
if(d)
return d;
}
n-=c,r-=c;
}else

n-=c,r-=c;
}}
var p=function(t,e){if(this.content=t,this.size=e||0,null==e)
for(var n=0;n<t.length;n++)
this.size+=t[n].nodeSize;},d={firstChild:{configurable:!0},lastChild:{configurable:!0},childCount:{configurable:!0}};
p.prototype.nodesBetween=function(t,e,n,r,o){void 0===r&&(r=0);for(var i=0,s=0;s<e;i++){
var a=this.content[i],c=s+a.nodeSize;
if(c>t&&!1!==n(a,r+s,o,i)&&a.content.size){
var l=s+1;
a.nodesBetween(Math.max(0,t-l),Math.min(a.content.size,e-l),n,r+l);
}
s=c;
}},p.prototype.descendants=function(t){this.nodesBetween(0,this.size,t);},p.prototype.textBetween=function(t,e,n,r){var o="",i=!0;return this.nodesBetween(t,e,function(s,a){s.isText?(o+=s.text.slice(Math.max(t,a)-a,e-a),i=!n):s.isLeaf&&r?(o+=r,i=!n):!i&&s.isBlock&&(o+=n,i=!0);},0),o;},p.prototype.append=function(t){if(!t.size)
return this;if(!this.size)
return t;var e=this.lastChild,n=t.firstChild,r=this.content.slice(),o=0;for(e.isText&&e.sameMarkup(n)&&(r[r.length-1]=e.withText(e.text+n.text),o=1);o<t.content.length;o++)
r.push(t.content[o]);return new p(r,this.size+t.size);},p.prototype.cut=function(t,e){if(null==e&&(e=this.size),0==t&&e==this.size)
return this;var n=[],r=0;if(e>t)
for(var o=0,i=0;i<e;o++){
var s=this.content[o],a=i+s.nodeSize;
a>t&&((i<t||a>e)&&(s=s.isText?s.cut(Math.max(0,t-i),Math.min(s.text.length,e-i)):s.cut(Math.max(0,t-i-1),Math.min(s.content.size,e-i-1))),n.push(s),r+=s.nodeSize),i=a;
}return new p(n,r);},p.prototype.cutByIndex=function(t,e){return t==e?p.empty:0==t&&e==this.content.length?this:new p(this.content.slice(t,e));},p.prototype.replaceChild=function(t,e){var n=this.content[t];if(n==e)
return this;var r=this.content.slice(),o=this.size+e.nodeSize-n.nodeSize;return r[t]=e,new p(r,o);},p.prototype.addToStart=function(t){return new p([t].concat(this.content),this.size+t.nodeSize);},p.prototype.addToEnd=function(t){return new p(this.content.concat(t),this.size+t.nodeSize);},p.prototype.eq=function(t){if(this.content.length!=t.content.length)
return!1;for(var e=0;e<this.content.length;e++)
if(!this.content[e].eq(t.content[e]))
return!1;return!0;},d.firstChild.get=function(){return this.content.length?this.content[0]:null;},d.lastChild.get=function(){return this.content.length?this.content[this.content.length-1]:null;},d.childCount.get=function(){return this.content.length;},p.prototype.child=function(t){var e=this.content[t];if(!e)
throw new RangeError("Index "+t+" out of range for "+this);return e;},p.prototype.maybeChild=function(t){return this.content[t];},p.prototype.forEach=function(t){for(var e=0,n=0;e<this.content.length;e++){
var r=this.content[e];
t(r,n,e),n+=r.nodeSize;
}},p.prototype.findDiffStart=function(t,e){return void 0===e&&(e=0),l(this,t,e);},p.prototype.findDiffEnd=function(t,e,n){return void 0===e&&(e=this.size),void 0===n&&(n=t.size),u(this,t,e,n);},p.prototype.findIndex=function(t,e){if(void 0===e&&(e=-1),0==t)
return h(0,t);if(t==this.size)
return h(this.content.length,t);if(t>this.size||t<0)
throw new RangeError("Position "+t+" outside of fragment ("+this+")");for(var n=0,r=0;;n++){
var o=r+this.child(n).nodeSize;
if(o>=t)
return o==t||e>0?h(n+1,o):h(n,r);
r=o;
}},p.prototype.toString=function(){return"<"+this.toStringInner()+">";},p.prototype.toStringInner=function(){return this.content.join(", ");},p.prototype.toJSON=function(){return this.content.length?this.content.map(function(t){return t.toJSON();}):null;},p.fromJSON=function(t,e){if(!e)
return p.empty;if(!Array.isArray(e))
throw new RangeError("Invalid input for Fragment.fromJSON");return new p(e.map(t.nodeFromJSON));},p.fromArray=function(t){if(!t.length)
return p.empty;for(var e,n=0,r=0;r<t.length;r++){
var o=t[r];
n+=o.nodeSize,r&&o.isText&&t[r-1].sameMarkup(o)?(e||(e=t.slice(0,r)),e[e.length-1]=o.withText(e[e.length-1].text+o.text)):e&&e.push(o);
}return new p(e||t,n);},p.from=function(t){if(!t)
return p.empty;if(t instanceof p)
return t;if(Array.isArray(t))
return this.fromArray(t);if(t.attrs)
return new p([t],t.nodeSize);throw new RangeError("Can not convert "+t+" to a Fragment"+(t.nodesBetween?" (looks like multiple versions of prosemirror-model were loaded)":""));},Object.defineProperties(p.prototype,d);
var f={index:0,offset:0};
function h(t,e){return f.index=t,f.offset=e,f;}
function m(t,e){if(t===e)
return!0;if(!t||"object"!=typeof t||!e||"object"!=typeof e)
return!1;var n=Array.isArray(t);if(Array.isArray(e)!=n)
return!1;if(n){
if(t.length!=e.length)
return!1;
for(var r=0;r<t.length;r++)
if(!m(t[r],e[r]))
return!1;
}else
{
for(var o in t)
if(!(o in e)||!m(t[o],e[o]))
return!1;
for(var i in e)
if(!(i in t))
return!1;
}return!0;}
p.empty=new p([],0);
var v=function(t,e){this.type=t,this.attrs=e;};
function g(t){var e=Error.call(this,t);return e.__proto__=g.prototype,e;}
v.prototype.addToSet=function(t){for(var e,n=!1,r=0;r<t.length;r++){
var o=t[r];
if(this.eq(o))
return t;
if(this.type.excludes(o.type))
e||(e=t.slice(0,r));else
{
if(o.type.excludes(this.type))
return t;
!n&&o.type.rank>this.type.rank&&(e||(e=t.slice(0,r)),e.push(this),n=!0),e&&e.push(o);
}
}return e||(e=t.slice()),n||e.push(this),e;},v.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)
if(this.eq(t[e]))
return t.slice(0,e).concat(t.slice(e+1));return t;},v.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)
if(this.eq(t[e]))
return!0;return!1;},v.prototype.eq=function(t){return this==t||this.type==t.type&&m(this.attrs,t.attrs);},v.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){
t.attrs=this.attrs;
break;
}return t;},v.fromJSON=function(t,e){if(!e)
throw new RangeError("Invalid input for Mark.fromJSON");var n=t.marks[e.type];if(!n)
throw new RangeError("There is no mark type "+e.type+" in this schema");return n.create(e.attrs);},v.sameSet=function(t,e){if(t==e)
return!0;if(t.length!=e.length)
return!1;for(var n=0;n<t.length;n++)
if(!t[n].eq(e[n]))
return!1;return!0;},v.setFrom=function(t){if(!t||0==t.length)
return v.none;if(t instanceof v)
return[t];var e=t.slice();return e.sort(function(t,e){return t.type.rank-e.type.rank;}),e;},v.none=[],g.prototype=Object.create(Error.prototype),g.prototype.constructor=g,g.prototype.name="ReplaceError";
var y=function(t,e,n){this.content=t,this.openStart=e,this.openEnd=n;},b={size:{configurable:!0}};
function w(t,e,n){var r=t.findIndex(e),o=r.index,i=r.offset,s=t.maybeChild(o),a=t.findIndex(n),c=a.index,l=a.offset;if(i==e||s.isText){
if(l!=n&&!t.child(c).isText)
throw new RangeError("Removing non-flat range");
return t.cut(0,e).append(t.cut(n));
}if(o!=c)
throw new RangeError("Removing non-flat range");return t.replaceChild(o,s.copy(w(s.content,e-i-1,n-i-1)));}
function k(t,e,n,r){var o=t.findIndex(e),i=o.index,s=o.offset,a=t.maybeChild(i);if(s==e||a.isText)
return r&&!r.canReplace(i,i,n)?null:t.cut(0,e).append(n).append(t.cut(e));var c=k(a.content,e-s-1,n);return c&&t.replaceChild(i,a.copy(c));}
function x(t,e,n){if(n.openStart>t.depth)
throw new g("Inserted content deeper than insertion position");if(t.depth-n.openStart!=e.depth-n.openEnd)
throw new g("Inconsistent open depths");return C(t,e,n,0);}
function C(t,e,n,r){var o=t.index(r),i=t.node(r);if(o==e.index(r)&&r<t.depth-n.openStart){
var s=C(t,e,n,r+1);
return i.copy(i.content.replaceChild(o,s));
}if(n.content.size){
if(n.openStart||n.openEnd||t.depth!=r||e.depth!=r){
var a=function(t,e){for(var n=e.depth-t.openStart,r=e.node(n).copy(t.content),o=n-1;o>=0;o--)
r=e.node(o).copy(p.from(r));return{start:r.resolveNoCache(t.openStart+n),end:r.resolveNoCache(r.content.size-t.openEnd-n)};}(n,t);
return N(i,O(t,a.start,a.end,e,r));
}
var c=t.parent,l=c.content;
return N(c,l.cut(0,t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
}return N(i,D(t,e,r));}
function T(t,e){if(!e.type.compatibleContent(t.type))
throw new g("Cannot join "+e.type.name+" onto "+t.type.name);}
function M(t,e,n){var r=t.node(n);return T(r,e.node(n)),r;}
function S(t,e){var n=e.length-1;n>=0&&t.isText&&t.sameMarkup(e[n])?e[n]=t.withText(e[n].text+t.text):e.push(t);}
function E(t,e,n,r){var o=(e||t).node(n),i=0,s=e?e.index(n):o.childCount;t&&(i=t.index(n),t.depth>n?i++:t.textOffset&&(S(t.nodeAfter,r),i++));for(var a=i;a<s;a++)
S(o.child(a),r);e&&e.depth==n&&e.textOffset&&S(e.nodeBefore,r);}
function N(t,e){if(!t.type.validContent(e))
throw new g("Invalid content for node "+t.type.name);return t.copy(e);}
function O(t,e,n,r,o){var i=t.depth>o&&M(t,e,o+1),s=r.depth>o&&M(n,r,o+1),a=[];return E(null,t,o,a),i&&s&&e.index(o)==n.index(o)?(T(i,s),S(N(i,O(t,e,n,r,o+1)),a)):(i&&S(N(i,D(t,e,o+1)),a),E(e,n,o,a),s&&S(N(s,D(n,r,o+1)),a)),E(r,null,o,a),new p(a);}
function D(t,e,n){var r=[];(E(null,t,n,r),t.depth>n)&&S(N(M(t,e,n+1),D(t,e,n+1)),r);return E(e,null,n,r),new p(r);}
b.size.get=function(){return this.content.size-this.openStart-this.openEnd;},y.prototype.insertAt=function(t,e){var n=k(this.content,t+this.openStart,e,null);return n&&new y(n,this.openStart,this.openEnd);},y.prototype.removeBetween=function(t,e){return new y(w(this.content,t+this.openStart,e+this.openStart),this.openStart,this.openEnd);},y.prototype.eq=function(t){return this.content.eq(t.content)&&this.openStart==t.openStart&&this.openEnd==t.openEnd;},y.prototype.toString=function(){return this.content+"("+this.openStart+","+this.openEnd+")";},y.prototype.toJSON=function(){if(!this.content.size)
return null;var t={content:this.content.toJSON()};return this.openStart>0&&(t.openStart=this.openStart),this.openEnd>0&&(t.openEnd=this.openEnd),t;},y.fromJSON=function(t,e){if(!e)
return y.empty;var n=e.openStart||0,r=e.openEnd||0;if("number"!=typeof n||"number"!=typeof r)
throw new RangeError("Invalid input for Slice.fromJSON");return new y(p.fromJSON(t,e.content),n,r);},y.maxOpen=function(t,e){void 0===e&&(e=!0);for(var n=0,r=0,o=t.firstChild;o&&!o.isLeaf&&(e||!o.type.spec.isolating);o=o.firstChild)
n++;for(var i=t.lastChild;i&&!i.isLeaf&&(e||!i.type.spec.isolating);i=i.lastChild)
r++;return new y(t,n,r);},Object.defineProperties(y.prototype,b),y.empty=new y(p.empty,0,0);
var A=function(t,e,n){this.pos=t,this.path=e,this.depth=e.length/3-1,this.parentOffset=n;},L={parent:{configurable:!0},doc:{configurable:!0},textOffset:{configurable:!0},nodeAfter:{configurable:!0},nodeBefore:{configurable:!0}};
A.prototype.resolveDepth=function(t){return null==t?this.depth:t<0?this.depth+t:t;},L.parent.get=function(){return this.node(this.depth);},L.doc.get=function(){return this.node(0);},A.prototype.node=function(t){return this.path[3*this.resolveDepth(t)];},A.prototype.index=function(t){return this.path[3*this.resolveDepth(t)+1];},A.prototype.indexAfter=function(t){return t=this.resolveDepth(t),this.index(t)+(t!=this.depth||this.textOffset?1:0);},A.prototype.start=function(t){return 0==(t=this.resolveDepth(t))?0:this.path[3*t-1]+1;},A.prototype.end=function(t){return t=this.resolveDepth(t),this.start(t)+this.node(t).content.size;},A.prototype.before=function(t){if(!(t=this.resolveDepth(t)))
throw new RangeError("There is no position before the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1];},A.prototype.after=function(t){if(!(t=this.resolveDepth(t)))
throw new RangeError("There is no position after the top-level node");return t==this.depth+1?this.pos:this.path[3*t-1]+this.path[3*t].nodeSize;},L.textOffset.get=function(){return this.pos-this.path[this.path.length-1];},L.nodeAfter.get=function(){var t=this.parent,e=this.index(this.depth);if(e==t.childCount)
return null;var n=this.pos-this.path[this.path.length-1],r=t.child(e);return n?t.child(e).cut(n):r;},L.nodeBefore.get=function(){var t=this.index(this.depth),e=this.pos-this.path[this.path.length-1];return e?this.parent.child(t).cut(0,e):0==t?null:this.parent.child(t-1);},A.prototype.posAtIndex=function(t,e){e=this.resolveDepth(e);for(var n=this.path[3*e],r=0==e?0:this.path[3*e-1]+1,o=0;o<t;o++)
r+=n.child(o).nodeSize;return r;},A.prototype.marks=function(){var t=this.parent,e=this.index();if(0==t.content.size)
return v.none;if(this.textOffset)
return t.child(e).marks;var n=t.maybeChild(e-1),r=t.maybeChild(e);if(!n){
var o=n;
n=r,r=o;
}for(var i=n.marks,s=0;s<i.length;s++)
!1!==i[s].type.spec.inclusive||r&&i[s].isInSet(r.marks)||(i=i[s--].removeFromSet(i));return i;},A.prototype.marksAcross=function(t){var e=this.parent.maybeChild(this.index());if(!e||!e.isInline)
return null;for(var n=e.marks,r=t.parent.maybeChild(t.index()),o=0;o<n.length;o++)
!1!==n[o].type.spec.inclusive||r&&n[o].isInSet(r.marks)||(n=n[o--].removeFromSet(n));return n;},A.prototype.sharedDepth=function(t){for(var e=this.depth;e>0;e--)
if(this.start(e)<=t&&this.end(e)>=t)
return e;return 0;},A.prototype.blockRange=function(t,e){if(void 0===t&&(t=this),t.pos<this.pos)
return t.blockRange(this);for(var n=this.depth-(this.parent.inlineContent||this.pos==t.pos?1:0);n>=0;n--)
if(t.pos<=this.end(n)&&(!e||e(this.node(n))))
return new B(this,t,n);},A.prototype.sameParent=function(t){return this.pos-this.parentOffset==t.pos-t.parentOffset;},A.prototype.max=function(t){return t.pos>this.pos?t:this;},A.prototype.min=function(t){return t.pos<this.pos?t:this;},A.prototype.toString=function(){for(var t="",e=1;e<=this.depth;e++)
t+=(t?"/":"")+this.node(e).type.name+"_"+this.index(e-1);return t+":"+this.parentOffset;},A.resolve=function(t,e){if(!(e>=0&&e<=t.content.size))
throw new RangeError("Position "+e+" out of range");for(var n=[],r=0,o=e,i=t;;){
var s=i.content.findIndex(o),a=s.index,c=s.offset,l=o-c;
if(n.push(i,a,r+c),!l)
break;
if((i=i.child(a)).isText)
break;
o=l-1,r+=c+1;
}return new A(e,n,o);},A.resolveCached=function(t,e){for(var n=0;n<I.length;n++){
var r=I[n];
if(r.pos==e&&r.doc==t)
return r;
}var o=I[R]=A.resolve(t,e);return R=(R+1)%P,o;},Object.defineProperties(A.prototype,L);
var I=[],R=0,P=12,B=function(t,e,n){this.$from=t,this.$to=e,this.depth=n;},F={start:{configurable:!0},end:{configurable:!0},parent:{configurable:!0},startIndex:{configurable:!0},endIndex:{configurable:!0}};
F.start.get=function(){return this.$from.before(this.depth+1);},F.end.get=function(){return this.$to.after(this.depth+1);},F.parent.get=function(){return this.$from.node(this.depth);},F.startIndex.get=function(){return this.$from.index(this.depth);},F.endIndex.get=function(){return this.$to.indexAfter(this.depth);},Object.defineProperties(B.prototype,F);
var H=Object.create(null),z=function(t,e,n,r){this.type=t,this.attrs=e,this.content=n||p.empty,this.marks=r||v.none;},j={nodeSize:{configurable:!0},childCount:{configurable:!0},textContent:{configurable:!0},firstChild:{configurable:!0},lastChild:{configurable:!0},isBlock:{configurable:!0},isTextblock:{configurable:!0},inlineContent:{configurable:!0},isInline:{configurable:!0},isText:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0}};
j.nodeSize.get=function(){return this.isLeaf?1:2+this.content.size;},j.childCount.get=function(){return this.content.childCount;},z.prototype.child=function(t){return this.content.child(t);},z.prototype.maybeChild=function(t){return this.content.maybeChild(t);},z.prototype.forEach=function(t){this.content.forEach(t);},z.prototype.nodesBetween=function(t,e,n,r){void 0===r&&(r=0),this.content.nodesBetween(t,e,n,r,this);},z.prototype.descendants=function(t){this.nodesBetween(0,this.content.size,t);},j.textContent.get=function(){return this.textBetween(0,this.content.size,"");},z.prototype.textBetween=function(t,e,n,r){return this.content.textBetween(t,e,n,r);},j.firstChild.get=function(){return this.content.firstChild;},j.lastChild.get=function(){return this.content.lastChild;},z.prototype.eq=function(t){return this==t||this.sameMarkup(t)&&this.content.eq(t.content);},z.prototype.sameMarkup=function(t){return this.hasMarkup(t.type,t.attrs,t.marks);},z.prototype.hasMarkup=function(t,e,n){return this.type==t&&m(this.attrs,e||t.defaultAttrs||H)&&v.sameSet(this.marks,n||v.none);},z.prototype.copy=function(t){return void 0===t&&(t=null),t==this.content?this:new this.constructor(this.type,this.attrs,t,this.marks);},z.prototype.mark=function(t){return t==this.marks?this:new this.constructor(this.type,this.attrs,this.content,t);},z.prototype.cut=function(t,e){return 0==t&&e==this.content.size?this:this.copy(this.content.cut(t,e));},z.prototype.slice=function(t,e,n){if(void 0===e&&(e=this.content.size),void 0===n&&(n=!1),t==e)
return y.empty;var r=this.resolve(t),o=this.resolve(e),i=n?0:r.sharedDepth(e),s=r.start(i),a=r.node(i).content.cut(r.pos-s,o.pos-s);return new y(a,r.depth-i,o.depth-i);},z.prototype.replace=function(t,e,n){return x(this.resolve(t),this.resolve(e),n);},z.prototype.nodeAt=function(t){for(var e=this;;){
var n=e.content.findIndex(t),r=n.index,o=n.offset;
if(!(e=e.maybeChild(r)))
return null;
if(o==t||e.isText)
return e;
t-=o+1;
}},z.prototype.childAfter=function(t){var e=this.content.findIndex(t),n=e.index,r=e.offset;return{node:this.content.maybeChild(n),index:n,offset:r};},z.prototype.childBefore=function(t){if(0==t)
return{node:null,index:0,offset:0};var e=this.content.findIndex(t),n=e.index,r=e.offset;if(r<t)
return{node:this.content.child(n),index:n,offset:r};var o=this.content.child(n-1);return{node:o,index:n-1,offset:r-o.nodeSize};},z.prototype.resolve=function(t){return A.resolveCached(this,t);},z.prototype.resolveNoCache=function(t){return A.resolve(this,t);},z.prototype.rangeHasMark=function(t,e,n){var r=!1;return e>t&&this.nodesBetween(t,e,function(t){return n.isInSet(t.marks)&&(r=!0),!r;}),r;},j.isBlock.get=function(){return this.type.isBlock;},j.isTextblock.get=function(){return this.type.isTextblock;},j.inlineContent.get=function(){return this.type.inlineContent;},j.isInline.get=function(){return this.type.isInline;},j.isText.get=function(){return this.type.isText;},j.isLeaf.get=function(){return this.type.isLeaf;},j.isAtom.get=function(){return this.type.isAtom;},z.prototype.toString=function(){if(this.type.spec.toDebugString)
return this.type.spec.toDebugString(this);var t=this.type.name;return this.content.size&&(t+="("+this.content.toStringInner()+")"),q(this.marks,t);},z.prototype.contentMatchAt=function(t){var e=this.type.contentMatch.matchFragment(this.content,0,t);if(!e)
throw new Error("Called contentMatchAt on a node with invalid content");return e;},z.prototype.canReplace=function(t,e,n,r,o){void 0===n&&(n=p.empty),void 0===r&&(r=0),void 0===o&&(o=n.childCount);var i=this.contentMatchAt(t).matchFragment(n,r,o),s=i&&i.matchFragment(this.content,e);if(!s||!s.validEnd)
return!1;for(var a=r;a<o;a++)
if(!this.type.allowsMarks(n.child(a).marks))
return!1;return!0;},z.prototype.canReplaceWith=function(t,e,n,r){if(r&&!this.type.allowsMarks(r))
return!1;var o=this.contentMatchAt(t).matchType(n),i=o&&o.matchFragment(this.content,e);return!!i&&i.validEnd;},z.prototype.canAppend=function(t){return t.content.size?this.canReplace(this.childCount,this.childCount,t.content):this.type.compatibleContent(t.type);},z.prototype.check=function(){if(!this.type.validContent(this.content))
throw new RangeError("Invalid content for node "+this.type.name+": "+this.content.toString().slice(0,50));for(var t=v.none,e=0;e<this.marks.length;e++)
t=this.marks[e].addToSet(t);if(!v.sameSet(t,this.marks))
throw new RangeError("Invalid collection of marks for node "+this.type.name+": "+this.marks.map(function(t){return t.type.name;}));this.content.forEach(function(t){return t.check();});},z.prototype.toJSON=function(){var t={type:this.type.name};for(var e in this.attrs){
t.attrs=this.attrs;
break;
}return this.content.size&&(t.content=this.content.toJSON()),this.marks.length&&(t.marks=this.marks.map(function(t){return t.toJSON();})),t;},z.fromJSON=function(t,e){if(!e)
throw new RangeError("Invalid input for Node.fromJSON");var n=null;if(e.marks){
if(!Array.isArray(e.marks))
throw new RangeError("Invalid mark data for Node.fromJSON");
n=e.marks.map(t.markFromJSON);
}if("text"==e.type){
if("string"!=typeof e.text)
throw new RangeError("Invalid text node in JSON");
return t.text(e.text,n);
}var r=p.fromJSON(t,e.content);return t.nodeType(e.type).create(e.attrs,r,n);},Object.defineProperties(z.prototype,j);
var _=function(t){function e(e,n,r,o){if(t.call(this,e,n,null,o),!r)
throw new RangeError("Empty text nodes are not allowed");this.text=r;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={textContent:{configurable:!0},nodeSize:{configurable:!0}};return e.prototype.toString=function(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):q(this.marks,JSON.stringify(this.text));},n.textContent.get=function(){return this.text;},e.prototype.textBetween=function(t,e){return this.text.slice(t,e);},n.nodeSize.get=function(){return this.text.length;},e.prototype.mark=function(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t);},e.prototype.withText=function(t){return t==this.text?this:new e(this.type,this.attrs,t,this.marks);},e.prototype.cut=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.text.length),0==t&&e==this.text.length?this:this.withText(this.text.slice(t,e));},e.prototype.eq=function(t){return this.sameMarkup(t)&&this.text==t.text;},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this);return e.text=this.text,e;},Object.defineProperties(e.prototype,n),e;}(z);
function q(t,e){for(var n=t.length-1;n>=0;n--)
e=t[n].type.name+"("+e+")";return e;}
var V=function(t){this.validEnd=t,this.next=[],this.wrapCache=[];},$={inlineContent:{configurable:!0},defaultType:{configurable:!0},edgeCount:{configurable:!0}};
V.parse=function(t,e){var n=new U(t,e);if(null==n.next)
return V.empty;var r=J(n);n.next&&n.err("Unexpected trailing text");var o=function(t){var e=Object.create(null);return n(Y(t,0));function n(r){var o=[];r.forEach(function(e){t[e].forEach(function(e){var n=e.term,r=e.to;if(n){
var i=o.indexOf(n),s=i>-1&&o[i+1];
Y(t,r).forEach(function(t){s||o.push(n,s=[]),-1==s.indexOf(t)&&s.push(t);});
}});});for(var i=e[r.join(",")]=new V(r.indexOf(t.length-1)>-1),s=0;s<o.length;s+=2){
var a=o[s+1].sort(Q);
i.next.push(o[s],e[a.join(",")]||n(a));
}return i;}}(function(t){var e=[[]];return o(i(t,0),n()),e;function n(){return e.push([])-1;}function r(t,n,r){var o={term:r,to:n};return e[t].push(o),o;}function o(t,e){t.forEach(function(t){return t.to=e;});}function i(t,e){if("choice"==t.type)
return t.exprs.reduce(function(t,n){return t.concat(i(n,e));},[]);if("seq"==t.type)
for(var s=0;;s++){
var a=i(t.exprs[s],e);
if(s==t.exprs.length-1)
return a;
o(a,e=n());
}else
{
if("star"==t.type){
var c=n();
return r(e,c),o(i(t.expr,c),c),[r(c)];
}
if("plus"==t.type){
var l=n();
return o(i(t.expr,e),l),o(i(t.expr,l),l),[r(l)];
}
if("opt"==t.type)
return[r(e)].concat(i(t.expr,e));
if("range"==t.type){
for(var u=e,p=0;p<t.min;p++){
var d=n();
o(i(t.expr,u),d),u=d;
}
if(-1==t.max)
o(i(t.expr,u),u);else

for(var f=t.min;f<t.max;f++){
var h=n();
r(u,h),o(i(t.expr,u),h),u=h;
}
return[r(u)];
}
if("name"==t.type)
return[r(e,null,t.value)];
}}}(r));return function(t,e){for(var n=0,r=[t];n<r.length;n++){
for(var o=r[n],i=!o.validEnd,s=[],a=0;a<o.next.length;a+=2){
var c=o.next[a],l=o.next[a+1];
s.push(c.name),!i||c.isText||c.hasRequiredAttrs()||(i=!1),-1==r.indexOf(l)&&r.push(l);
}
i&&e.err("Only non-generatable nodes ("+s.join(", ")+") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
}}(o,n),o;},V.prototype.matchType=function(t){for(var e=0;e<this.next.length;e+=2)
if(this.next[e]==t)
return this.next[e+1];return null;},V.prototype.matchFragment=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=t.childCount);for(var r=this,o=e;r&&o<n;o++)
r=r.matchType(t.child(o).type);return r;},$.inlineContent.get=function(){var t=this.next[0];return!!t&&t.isInline;},$.defaultType.get=function(){for(var t=0;t<this.next.length;t+=2){
var e=this.next[t];
if(!e.isText&&!e.hasRequiredAttrs())
return e;
}},V.prototype.compatible=function(t){for(var e=0;e<this.next.length;e+=2)
for(var n=0;n<t.next.length;n+=2)
if(this.next[e]==t.next[n])
return!0;return!1;},V.prototype.fillBefore=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=0);var r=[this];return function o(i,s){var a=i.matchFragment(t,n);if(a&&(!e||a.validEnd))
return p.from(s.map(function(t){return t.createAndFill();}));for(var c=0;c<i.next.length;c+=2){
var l=i.next[c],u=i.next[c+1];
if(!l.isText&&!l.hasRequiredAttrs()&&-1==r.indexOf(u)){
r.push(u);
var d=o(u,s.concat(l));
if(d)
return d;
}
}}(this,[]);},V.prototype.findWrapping=function(t){for(var e=0;e<this.wrapCache.length;e+=2)
if(this.wrapCache[e]==t)
return this.wrapCache[e+1];var n=this.computeWrapping(t);return this.wrapCache.push(t,n),n;},V.prototype.computeWrapping=function(t){for(var e=Object.create(null),n=[{match:this,type:null,via:null}];n.length;){
var r=n.shift(),o=r.match;
if(o.matchType(t)){
for(var i=[],s=r;s.type;s=s.via)
i.push(s.type);
return i.reverse();
}
for(var a=0;a<o.next.length;a+=2){
var c=o.next[a];
c.isLeaf||c.hasRequiredAttrs()||c.name in e||r.type&&!o.next[a+1].validEnd||(n.push({match:c.contentMatch,type:c,via:r}),e[c.name]=!0);
}
}},$.edgeCount.get=function(){return this.next.length>>1;},V.prototype.edge=function(t){var e=t<<1;if(e>=this.next.length)
throw new RangeError("There's no "+t+"th edge in this content match");return{type:this.next[e],next:this.next[e+1]};},V.prototype.toString=function(){var t=[];return function e(n){t.push(n);for(var r=1;r<n.next.length;r+=2)
-1==t.indexOf(n.next[r])&&e(n.next[r]);}(this),t.map(function(e,n){for(var r=n+(e.validEnd?"*":" ")+" ",o=0;o<e.next.length;o+=2)
r+=(o?", ":"")+e.next[o].name+"->"+t.indexOf(e.next[o+1]);return r;}).join("\n");},Object.defineProperties(V.prototype,$),V.empty=new V(!0);
var U=function(t,e){this.string=t,this.nodeTypes=e,this.inline=null,this.pos=0,this.tokens=t.split(/\s*(?=\b|\W|$)/),""==this.tokens[this.tokens.length-1]&&this.tokens.pop(),""==this.tokens[0]&&this.tokens.shift();},W={next:{configurable:!0}};
function J(t){var e=[];do{
e.push(G(t));
}while(t.eat("|"));return 1==e.length?e[0]:{type:"choice",exprs:e};}
function G(t){var e=[];do{
e.push(K(t));
}while(t.next&&")"!=t.next&&"|"!=t.next);return 1==e.length?e[0]:{type:"seq",exprs:e};}
function K(t){for(var e=function(t){if(t.eat("(")){
var e=J(t);
return t.eat(")")||t.err("Missing closing paren"),e;
}if(!/\W/.test(t.next)){
var n=function(t,e){var n=t.nodeTypes,r=n[e];if(r)
return[r];var o=[];for(var i in n){
var s=n[i];
s.groups.indexOf(e)>-1&&o.push(s);
}0==o.length&&t.err("No node type or group '"+e+"' found");return o;}(t,t.next).map(function(e){return null==t.inline?t.inline=e.isInline:t.inline!=e.isInline&&t.err("Mixing inline and block content"),{type:"name",value:e};});
return t.pos++,1==n.length?n[0]:{type:"choice",exprs:n};
}t.err("Unexpected token '"+t.next+"'");}(t);;)
if(t.eat("+"))
e={type:"plus",expr:e};else
if(t.eat("*"))
e={type:"star",expr:e};else
if(t.eat("?"))
e={type:"opt",expr:e};else
{
if(!t.eat("{"))
break;
e=X(t,e);
}return e;}
function Z(t){/\D/.test(t.next)&&t.err("Expected number, got '"+t.next+"'");var e=Number(t.next);return t.pos++,e;}
function X(t,e){var n=Z(t),r=n;return t.eat(",")&&(r="}"!=t.next?Z(t):-1),t.eat("}")||t.err("Unclosed braced range"),{type:"range",min:n,max:r,expr:e};}
function Q(t,e){return e-t;}
function Y(t,e){var n=[];return function e(r){var o=t[r];if(1==o.length&&!o[0].term)
return e(o[0].to);n.push(r);for(var i=0;i<o.length;i++){
var s=o[i],a=s.term,c=s.to;
a||-1!=n.indexOf(c)||e(c);
}}(e),n.sort(Q);}
function tt(t){var e=Object.create(null);for(var n in t){
var r=t[n];
if(!r.hasDefault)
return null;
e[n]=r.default;
}return e;}
function et(t,e){var n=Object.create(null);for(var r in t){
var o=e&&e[r];
if(void 0===o){
var i=t[r];
if(!i.hasDefault)
throw new RangeError("No value supplied for attribute "+r);
o=i.default;
}
n[r]=o;
}return n;}
function nt(t){var e=Object.create(null);if(t)
for(var n in t)
e[n]=new it(t[n]);return e;}
W.next.get=function(){return this.tokens[this.pos];},U.prototype.eat=function(t){return this.next==t&&(this.pos++||!0);},U.prototype.err=function(t){throw new SyntaxError(t+" (in content expression '"+this.string+"')");},Object.defineProperties(U.prototype,W);
var rt=function(t,e,n){this.name=t,this.schema=e,this.spec=n,this.groups=n.group?n.group.split(" "):[],this.attrs=nt(n.attrs),this.defaultAttrs=tt(this.attrs),this.contentMatch=null,this.markSet=null,this.inlineContent=null,this.isBlock=!(n.inline||"text"==t),this.isText="text"==t;},ot={isInline:{configurable:!0},isTextblock:{configurable:!0},isLeaf:{configurable:!0},isAtom:{configurable:!0}};
ot.isInline.get=function(){return!this.isBlock;},ot.isTextblock.get=function(){return this.isBlock&&this.inlineContent;},ot.isLeaf.get=function(){return this.contentMatch==V.empty;},ot.isAtom.get=function(){return this.isLeaf||this.spec.atom;},rt.prototype.hasRequiredAttrs=function(){for(var t in this.attrs)
if(this.attrs[t].isRequired)
return!0;return!1;},rt.prototype.compatibleContent=function(t){return this==t||this.contentMatch.compatible(t.contentMatch);},rt.prototype.computeAttrs=function(t){return!t&&this.defaultAttrs?this.defaultAttrs:et(this.attrs,t);},rt.prototype.create=function(t,e,n){if(this.isText)
throw new Error("NodeType.create can't construct text nodes");return new z(this,this.computeAttrs(t),p.from(e),v.setFrom(n));},rt.prototype.createChecked=function(t,e,n){if(e=p.from(e),!this.validContent(e))
throw new RangeError("Invalid content for node "+this.name);return new z(this,this.computeAttrs(t),e,v.setFrom(n));},rt.prototype.createAndFill=function(t,e,n){if(t=this.computeAttrs(t),(e=p.from(e)).size){
var r=this.contentMatch.fillBefore(e);
if(!r)
return null;
e=r.append(e);
}var o=this.contentMatch.matchFragment(e).fillBefore(p.empty,!0);return o?new z(this,t,e.append(o),v.setFrom(n)):null;},rt.prototype.validContent=function(t){var e=this.contentMatch.matchFragment(t);if(!e||!e.validEnd)
return!1;for(var n=0;n<t.childCount;n++)
if(!this.allowsMarks(t.child(n).marks))
return!1;return!0;},rt.prototype.allowsMarkType=function(t){return null==this.markSet||this.markSet.indexOf(t)>-1;},rt.prototype.allowsMarks=function(t){if(null==this.markSet)
return!0;for(var e=0;e<t.length;e++)
if(!this.allowsMarkType(t[e].type))
return!1;return!0;},rt.prototype.allowedMarks=function(t){if(null==this.markSet)
return t;for(var e,n=0;n<t.length;n++)
this.allowsMarkType(t[n].type)?e&&e.push(t[n]):e||(e=t.slice(0,n));return e?e.length?e:v.empty:t;},rt.compile=function(t,e){var n=Object.create(null);t.forEach(function(t,r){return n[t]=new rt(t,e,r);});var r=e.spec.topNode||"doc";if(!n[r])
throw new RangeError("Schema is missing its top node type ('"+r+"')");if(!n.text)
throw new RangeError("Every schema needs a 'text' type");for(var o in n.text.attrs)
throw new RangeError("The text node type should not have attributes");return n;},Object.defineProperties(rt.prototype,ot);
var it=function(t){this.hasDefault=Object.prototype.hasOwnProperty.call(t,"default"),this.default=t.default;},st={isRequired:{configurable:!0}};
st.isRequired.get=function(){return!this.hasDefault;},Object.defineProperties(it.prototype,st);
var at=function(t,e,n,r){this.name=t,this.schema=n,this.spec=r,this.attrs=nt(r.attrs),this.rank=e,this.excluded=null;var o=tt(this.attrs);this.instance=o&&new v(this,o);};
at.prototype.create=function(t){return!t&&this.instance?this.instance:new v(this,et(this.attrs,t));},at.compile=function(t,e){var n=Object.create(null),r=0;return t.forEach(function(t,o){return n[t]=new at(t,r++,e,o);}),n;},at.prototype.removeFromSet=function(t){for(var e=0;e<t.length;e++)
t[e].type==this&&(t=t.slice(0,e).concat(t.slice(e+1)),e--);return t;},at.prototype.isInSet=function(t){for(var e=0;e<t.length;e++)
if(t[e].type==this)
return t[e];},at.prototype.excludes=function(t){return this.excluded.indexOf(t)>-1;};
var ct=function(t){for(var e in this.spec={},t)
this.spec[e]=t[e];this.spec.nodes=c.from(t.nodes),this.spec.marks=c.from(t.marks),this.nodes=rt.compile(this.spec.nodes,this),this.marks=at.compile(this.spec.marks,this);var n=Object.create(null);for(var r in this.nodes){
if(r in this.marks)
throw new RangeError(r+" can not be both a node and a mark");
var o=this.nodes[r],i=o.spec.content||"",s=o.spec.marks;
o.contentMatch=n[i]||(n[i]=V.parse(i,this.nodes)),o.inlineContent=o.contentMatch.inlineContent,o.markSet="_"==s?null:s?lt(this,s.split(" ")):""!=s&&o.inlineContent?null:[];
}for(var a in this.marks){
var l=this.marks[a],u=l.spec.excludes;
l.excluded=null==u?[l]:""==u?[]:lt(this,u.split(" "));
}this.nodeFromJSON=this.nodeFromJSON.bind(this),this.markFromJSON=this.markFromJSON.bind(this),this.topNodeType=this.nodes[this.spec.topNode||"doc"],this.cached=Object.create(null),this.cached.wrappings=Object.create(null);};
function lt(t,e){for(var n=[],r=0;r<e.length;r++){
var o=e[r],i=t.marks[o],s=i;
if(i)
n.push(i);else

for(var a in t.marks){
var c=t.marks[a];
("_"==o||c.spec.group&&c.spec.group.split(" ").indexOf(o)>-1)&&n.push(s=c);
}
if(!s)
throw new SyntaxError("Unknown mark type: '"+e[r]+"'");
}return n;}
ct.prototype.node=function(t,e,n,r){if("string"==typeof t)
t=this.nodeType(t);else
{
if(!(t instanceof rt))
throw new RangeError("Invalid node type: "+t);
if(t.schema!=this)
throw new RangeError("Node type from different schema used ("+t.name+")");
}return t.createChecked(e,n,r);},ct.prototype.text=function(t,e){var n=this.nodes.text;return new _(n,n.defaultAttrs,t,v.setFrom(e));},ct.prototype.mark=function(t,e){return"string"==typeof t&&(t=this.marks[t]),t.create(e);},ct.prototype.nodeFromJSON=function(t){return z.fromJSON(this,t);},ct.prototype.markFromJSON=function(t){return v.fromJSON(this,t);},ct.prototype.nodeType=function(t){var e=this.nodes[t];if(!e)
throw new RangeError("Unknown node type: "+t);return e;};
var ut=function(t,e){var n=this;this.schema=t,this.rules=e,this.tags=[],this.styles=[],e.forEach(function(t){t.tag?n.tags.push(t):t.style&&n.styles.push(t);}),this.normalizeLists=!this.tags.some(function(e){if(!/^(ul|ol)\b/.test(e.tag)||!e.node)
return!1;var n=t.nodes[e.node];return n.contentMatch.matchType(n);});};
ut.prototype.parse=function(t,e){void 0===e&&(e={});var n=new vt(this,e,!1);return n.addAll(t,null,e.from,e.to),n.finish();},ut.prototype.parseSlice=function(t,e){void 0===e&&(e={});var n=new vt(this,e,!0);return n.addAll(t,null,e.from,e.to),y.maxOpen(n.finish());},ut.prototype.matchTag=function(t,e,n){for(var r=n?this.tags.indexOf(n)+1:0;r<this.tags.length;r++){
var o=this.tags[r];
if(yt(t,o.tag)&&(void 0===o.namespace||t.namespaceURI==o.namespace)&&(!o.context||e.matchesContext(o.context))){
if(o.getAttrs){
var i=o.getAttrs(t);
if(!1===i)
continue;
o.attrs=i;
}
return o;
}
}},ut.prototype.matchStyle=function(t,e,n,r){for(var o=r?this.styles.indexOf(r)+1:0;o<this.styles.length;o++){
var i=this.styles[o];
if(!(0!=i.style.indexOf(t)||i.context&&!n.matchesContext(i.context)||i.style.length>t.length&&(61!=i.style.charCodeAt(t.length)||i.style.slice(t.length+1)!=e))){
if(i.getAttrs){
var s=i.getAttrs(e);
if(!1===s)
continue;
i.attrs=s;
}
return i;
}
}},ut.schemaRules=function(t){var e=[];function n(t){for(var n=null==t.priority?50:t.priority,r=0;r<e.length;r++){
var o=e[r];
if((null==o.priority?50:o.priority)<n)
break;
}e.splice(r,0,t);}var r=function(e){var r=t.marks[e].spec.parseDOM;r&&r.forEach(function(t){n(t=bt(t)),t.mark=e;});};for(var o in t.marks)
r(o);var i;for(var s in t.nodes)
i=void 0,(i=t.nodes[s].spec.parseDOM)&&i.forEach(function(t){n(t=bt(t)),t.node=s;});return e;},ut.fromSchema=function(t){return t.cached.domParser||(t.cached.domParser=new ut(t,ut.schemaRules(t)));};
var pt={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},dt={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},ft={ol:!0,ul:!0};
function ht(t){return(t?1:0)|("full"===t?2:0);}
var mt=function(t,e,n,r,o,i,s){this.type=t,this.attrs=e,this.solid=o,this.match=i||(4&s?null:t.contentMatch),this.options=s,this.content=[],this.marks=n,this.activeMarks=v.none,this.pendingMarks=r,this.stashMarks=[];};
mt.prototype.findWrapping=function(t){if(!this.match){
if(!this.type)
return[];
var e=this.type.contentMatch.fillBefore(p.from(t));
if(!e){
var n,r=this.type.contentMatch;
return(n=r.findWrapping(t.type))?(this.match=r,n):null;
}
this.match=this.type.contentMatch.matchFragment(e);
}return this.match.findWrapping(t.type);},mt.prototype.finish=function(t){if(!(1&this.options)){
var e,n=this.content[this.content.length-1];
n&&n.isText&&(e=/[ \t\r\n\u000c]+$/.exec(n.text))&&(n.text.length==e[0].length?this.content.pop():this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-e[0].length)));
}var r=p.from(this.content);return!t&&this.match&&(r=r.append(this.match.fillBefore(p.empty,!0))),this.type?this.type.create(this.attrs,r,this.marks):r;},mt.prototype.popFromStashMark=function(t){for(var e=this.stashMarks.length-1;e>=0;e--)
if(t.eq(this.stashMarks[e]))
return this.stashMarks.splice(e,1)[0];},mt.prototype.applyPending=function(t){for(var e=0,n=this.pendingMarks;e<n.length;e++){
var r=n[e];
(this.type?this.type.allowsMarkType(r.type):wt(r.type,t))&&!r.isInSet(this.activeMarks)&&(this.activeMarks=r.addToSet(this.activeMarks),this.pendingMarks=r.removeFromSet(this.pendingMarks));
}};
var vt=function(t,e,n){this.parser=t,this.options=e,this.isOpen=n;var r,o=e.topNode,i=ht(e.preserveWhitespace)|(n?4:0);r=o?new mt(o.type,o.attrs,v.none,v.none,!0,e.topMatch||o.type.contentMatch,i):new mt(n?null:t.schema.topNodeType,null,v.none,v.none,!0,null,i),this.nodes=[r],this.open=0,this.find=e.findPositions,this.needsBlock=!1;},gt={top:{configurable:!0},currentPos:{configurable:!0}};
function yt(t,e){return(t.matches||t.msMatchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector).call(t,e);}
function bt(t){var e={};for(var n in t)
e[n]=t[n];return e;}
function wt(t,e){var n=e.schema.nodes,r=function(r){var o=n[r];if(o.allowsMarkType(t)){
var i=[],s=function(t){i.push(t);for(var n=0;n<t.edgeCount;n++){
var r=t.edge(n),o=r.type,a=r.next;
if(o==e)
return!0;
if(i.indexOf(a)<0&&s(a))
return!0;
}};
return s(o.contentMatch)?{v:!0}:void 0;
}};for(var o in n){
var i=r(o);
if(i)
return i.v;
}}
gt.top.get=function(){return this.nodes[this.open];},vt.prototype.addDOM=function(t){if(3==t.nodeType)
this.addTextNode(t);else
if(1==t.nodeType){
var e=t.getAttribute("style"),n=e?this.readStyles(function(t){var e,n=/\s*([\w-]+)\s*:\s*([^;]+)/g,r=[];for(;e=n.exec(t);)
r.push(e[1],e[2].trim());return r;}(e)):null,r=this.top;
if(null!=n)
for(var o=0;o<n.length;o++)
this.addPendingMark(n[o]);
if(this.addElement(t),null!=n)
for(var i=0;i<n.length;i++)
this.removePendingMark(n[i],r);
}},vt.prototype.addTextNode=function(t){var e=t.nodeValue,n=this.top;if(2&n.options||(n.type?n.type.inlineContent:n.content.length&&n.content[0].isInline)||/[^ \t\r\n\u000c]/.test(e)){
if(1&n.options)
e=2&n.options?e.replace(/\r\n?/g,"\n"):e.replace(/\r?\n|\r/g," ");else
if(e=e.replace(/[ \t\r\n\u000c]+/g," "),/^[ \t\r\n\u000c]/.test(e)&&this.open==this.nodes.length-1){
var r=n.content[n.content.length-1],o=t.previousSibling;
(!r||o&&"BR"==o.nodeName||r.isText&&/[ \t\r\n\u000c]$/.test(r.text))&&(e=e.slice(1));
}
e&&this.insertNode(this.parser.schema.text(e)),this.findInText(t);
}else

this.findInside(t);},vt.prototype.addElement=function(t,e){var n,r=t.nodeName.toLowerCase();ft.hasOwnProperty(r)&&this.parser.normalizeLists&&function(t){for(var e=t.firstChild,n=null;e;e=e.nextSibling){
var r=1==e.nodeType?e.nodeName.toLowerCase():null;
r&&ft.hasOwnProperty(r)&&n?(n.appendChild(e),e=n):"li"==r?n=e:r&&(n=null);
}}(t);var o=this.options.ruleFromNode&&this.options.ruleFromNode(t)||(n=this.parser.matchTag(t,this,e));if(o?o.ignore:dt.hasOwnProperty(r))
this.findInside(t),this.ignoreFallback(t);else
if(!o||o.skip||o.closeParent){
o&&o.closeParent?this.open=Math.max(0,this.open-1):o&&o.skip.nodeType&&(t=o.skip);
var i,s=this.top,a=this.needsBlock;
if(pt.hasOwnProperty(r))
i=!0,s.type||(this.needsBlock=!0);else
if(!t.firstChild)
return void this.leafFallback(t);
this.addAll(t),i&&this.sync(s),this.needsBlock=a;
}else

this.addElementByRule(t,o,!1===o.consuming?n:null);},vt.prototype.leafFallback=function(t){"BR"==t.nodeName&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(t.ownerDocument.createTextNode("\n"));},vt.prototype.ignoreFallback=function(t){"BR"!=t.nodeName||this.top.type&&this.top.type.inlineContent||this.findPlace(this.parser.schema.text("-"));},vt.prototype.readStyles=function(t){var e=v.none;t:for(var n=0;n<t.length;n+=2)
for(var r=null;;){
var o=this.parser.matchStyle(t[n],t[n+1],this,r);
if(!o)
continue t;
if(o.ignore)
return null;
if(e=this.parser.schema.marks[o.mark].create(o.attrs).addToSet(e),!1!==o.consuming)
break;
r=o;
}return e;},vt.prototype.addElementByRule=function(t,e,n){var r,o,i,s=this;e.node?(o=this.parser.schema.nodes[e.node]).isLeaf?this.insertNode(o.create(e.attrs))||this.leafFallback(t):r=this.enter(o,e.attrs,e.preserveWhitespace):(i=this.parser.schema.marks[e.mark].create(e.attrs),this.addPendingMark(i));var a=this.top;if(o&&o.isLeaf)
this.findInside(t);else
if(n)
this.addElement(t,n);else
if(e.getContent)
this.findInside(t),e.getContent(t,this.parser.schema).forEach(function(t){return s.insertNode(t);});else
{
var c=e.contentElement;
"string"==typeof c?c=t.querySelector(c):"function"==typeof c&&(c=c(t)),c||(c=t),this.findAround(t,c,!0),this.addAll(c,r);
}r&&(this.sync(a),this.open--),i&&this.removePendingMark(i,a);},vt.prototype.addAll=function(t,e,n,r){for(var o=n||0,i=n?t.childNodes[n]:t.firstChild,s=null==r?null:t.childNodes[r];i!=s;i=i.nextSibling,++o)
this.findAtPoint(t,o),this.addDOM(i),e&&pt.hasOwnProperty(i.nodeName.toLowerCase())&&this.sync(e);this.findAtPoint(t,o);},vt.prototype.findPlace=function(t){for(var e,n,r=this.open;r>=0;r--){
var o=this.nodes[r],i=o.findWrapping(t);
if(i&&(!e||e.length>i.length)&&(e=i,n=o,!i.length))
break;
if(o.solid)
break;
}if(!e)
return!1;this.sync(n);for(var s=0;s<e.length;s++)
this.enterInner(e[s],null,!1);return!0;},vt.prototype.insertNode=function(t){if(t.isInline&&this.needsBlock&&!this.top.type){
var e=this.textblockFromContext();
e&&this.enterInner(e);
}if(this.findPlace(t)){
this.closeExtra();
var n=this.top;
n.applyPending(t.type),n.match&&(n.match=n.match.matchType(t.type));
for(var r=n.activeMarks,o=0;o<t.marks.length;o++)
n.type&&!n.type.allowsMarkType(t.marks[o].type)||(r=t.marks[o].addToSet(r));
return n.content.push(t.mark(r)),!0;
}return!1;},vt.prototype.enter=function(t,e,n){var r=this.findPlace(t.create(e));return r&&this.enterInner(t,e,!0,n),r;},vt.prototype.enterInner=function(t,e,n,r){this.closeExtra();var o=this.top;o.applyPending(t),o.match=o.match&&o.match.matchType(t,e);var i=null==r?-5&o.options:ht(r);4&o.options&&0==o.content.length&&(i|=4),this.nodes.push(new mt(t,e,o.activeMarks,o.pendingMarks,n,null,i)),this.open++;},vt.prototype.closeExtra=function(t){var e=this.nodes.length-1;if(e>this.open){
for(;e>this.open;e--)
this.nodes[e-1].content.push(this.nodes[e].finish(t));
this.nodes.length=this.open+1;
}},vt.prototype.finish=function(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(this.isOpen||this.options.topOpen);},vt.prototype.sync=function(t){for(var e=this.open;e>=0;e--)
if(this.nodes[e]==t)
return void(this.open=e);},gt.currentPos.get=function(){this.closeExtra();for(var t=0,e=this.open;e>=0;e--){
for(var n=this.nodes[e].content,r=n.length-1;r>=0;r--)
t+=n[r].nodeSize;
e&&t++;
}return t;},vt.prototype.findAtPoint=function(t,e){if(this.find)
for(var n=0;n<this.find.length;n++)
this.find[n].node==t&&this.find[n].offset==e&&(this.find[n].pos=this.currentPos);},vt.prototype.findInside=function(t){if(this.find)
for(var e=0;e<this.find.length;e++)
null==this.find[e].pos&&1==t.nodeType&&t.contains(this.find[e].node)&&(this.find[e].pos=this.currentPos);},vt.prototype.findAround=function(t,e,n){if(t!=e&&this.find)
for(var r=0;r<this.find.length;r++){
if(null==this.find[r].pos&&1==t.nodeType&&t.contains(this.find[r].node))
e.compareDocumentPosition(this.find[r].node)&(n?2:4)&&(this.find[r].pos=this.currentPos);
}},vt.prototype.findInText=function(t){if(this.find)
for(var e=0;e<this.find.length;e++)
this.find[e].node==t&&(this.find[e].pos=this.currentPos-(t.nodeValue.length-this.find[e].offset));},vt.prototype.matchesContext=function(t){var e=this;if(t.indexOf("|")>-1)
return t.split(/\s*\|\s*/).some(this.matchesContext,this);var n=t.split("/"),r=this.options.context,o=!(this.isOpen||r&&r.parent.type!=this.nodes[0].type),i=-(r?r.depth+1:0)+(o?0:1),s=function(t,a){for(;t>=0;t--){
var c=n[t];
if(""==c){
if(t==n.length-1||0==t)
continue;
for(;a>=i;a--)
if(s(t-1,a))
return!0;
return!1;
}
var l=a>0||0==a&&o?e.nodes[a].type:r&&a>=i?r.node(a-i).type:null;
if(!l||l.name!=c&&-1==l.groups.indexOf(c))
return!1;
a--;
}return!0;};return s(n.length-1,this.open);},vt.prototype.textblockFromContext=function(){var t=this.options.context;if(t)
for(var e=t.depth;e>=0;e--){
var n=t.node(e).contentMatchAt(t.indexAfter(e)).defaultType;
if(n&&n.isTextblock&&n.defaultAttrs)
return n;
}for(var r in this.parser.schema.nodes){
var o=this.parser.schema.nodes[r];
if(o.isTextblock&&o.defaultAttrs)
return o;
}},vt.prototype.addPendingMark=function(t){var e=function(t,e){for(var n=0;n<e.length;n++)
if(t.eq(e[n]))
return e[n];}(t,this.top.pendingMarks);e&&this.top.stashMarks.push(e),this.top.pendingMarks=t.addToSet(this.top.pendingMarks);},vt.prototype.removePendingMark=function(t,e){for(var n=this.open;n>=0;n--){
var r=this.nodes[n];
if(r.pendingMarks.lastIndexOf(t)>-1)
r.pendingMarks=t.removeFromSet(r.pendingMarks);else
{
r.activeMarks=t.removeFromSet(r.activeMarks);
var o=r.popFromStashMark(t);
o&&r.type&&r.type.allowsMarkType(o.type)&&(r.activeMarks=o.addToSet(r.activeMarks));
}
if(r==e)
break;
}},Object.defineProperties(vt.prototype,gt);
var kt=function(t,e){this.nodes=t||{},this.marks=e||{};};
function xt(t){var e={};for(var n in t){
var r=t[n].spec.toDOM;
r&&(e[n]=r);
}return e;}
function Ct(t){return t.document||window.document;}
kt.prototype.serializeFragment=function(t,e,n){var r=this;void 0===e&&(e={}),n||(n=Ct(e).createDocumentFragment());var o=n,i=null;return t.forEach(function(t){if(i||t.marks.length){
i||(i=[]);
for(var n=0,s=0;n<i.length&&s<t.marks.length;){
var a=t.marks[s];
if(r.marks[a.type.name]){
if(!a.eq(i[n])||!1===a.type.spec.spanning)
break;
n+=2,s++;
}else

s++;
}
for(;n<i.length;)
o=i.pop(),i.pop();
for(;s<t.marks.length;){
var c=t.marks[s++],l=r.serializeMark(c,t.isInline,e);
l&&(i.push(c,o),o.appendChild(l.dom),o=l.contentDOM||l.dom);
}
}o.appendChild(r.serializeNode(t,e));}),n;},kt.prototype.serializeNode=function(t,e){void 0===e&&(e={});var n=kt.renderSpec(Ct(e),this.nodes[t.type.name](t)),r=n.dom,o=n.contentDOM;if(o){
if(t.isLeaf)
throw new RangeError("Content hole not allowed in a leaf node spec");
e.onContent?e.onContent(t,o,e):this.serializeFragment(t.content,e,o);
}return r;},kt.prototype.serializeNodeAndMarks=function(t,e){void 0===e&&(e={});for(var n=this.serializeNode(t,e),r=t.marks.length-1;r>=0;r--){
var o=this.serializeMark(t.marks[r],t.isInline,e);
o&&((o.contentDOM||o.dom).appendChild(n),n=o.dom);
}return n;},kt.prototype.serializeMark=function(t,e,n){void 0===n&&(n={});var r=this.marks[t.type.name];return r&&kt.renderSpec(Ct(n),r(t,e));},kt.renderSpec=function(t,e,n){if(void 0===n&&(n=null),"string"==typeof e)
return{dom:t.createTextNode(e)};if(null!=e.nodeType)
return{dom:e};if(e.dom&&null!=e.dom.nodeType)
return e;var r=e[0],o=r.indexOf(" ");o>0&&(n=r.slice(0,o),r=r.slice(o+1));var i=null,s=n?t.createElementNS(n,r):t.createElement(r),a=e[1],c=1;if(a&&"object"==typeof a&&null==a.nodeType&&!Array.isArray(a))
for(var l in c=2,a)
if(null!=a[l]){
var u=l.indexOf(" ");
u>0?s.setAttributeNS(l.slice(0,u),l.slice(u+1),a[l]):s.setAttribute(l,a[l]);
}for(var p=c;p<e.length;p++){
var d=e[p];
if(0===d){
if(p<e.length-1||p>c)
throw new RangeError("Content hole must be the only child of its parent node");
return{dom:s,contentDOM:s};
}
var f=kt.renderSpec(t,d,n),h=f.dom,m=f.contentDOM;
if(s.appendChild(h),m){
if(i)
throw new RangeError("Multiple content holes");
i=m;
}
}return{dom:s,contentDOM:i};},kt.fromSchema=function(t){return t.cached.domSerializer||(t.cached.domSerializer=new kt(this.nodesFromSchema(t),this.marksFromSchema(t)));},kt.nodesFromSchema=function(t){var e=xt(t.nodes);return e.text||(e.text=function(t){return t.text;}),e;},kt.marksFromSchema=function(t){return xt(t.marks);};
var Tt=n(956),Mt=n.n(Tt),St=n(969),Et=n.n(St),Nt=n(522),Ot=n.n(Nt),Dt=n(204),At=n.n(Dt),Lt=n(462),It=n.n(Lt),Rt=n(758),Pt=n.n(Rt),Bt=n(321),Ft=n.n(Bt),Ht=n(929),zt=n.n(Ht),jt=n(934),_t=n.n(jt),qt=n(391),Vt=n.n(qt),$t=(/Mac/.test(navigator.platform),/[\u0020]+/g),Ut=/[>(){}[\]+-.!#|]/g,Wt=/<([a-zA-Z_][a-zA-Z0-9\-._]*)(\s|[^\\/>])*\/?>|<(\/)([a-zA-Z_][a-zA-Z0-9\-._]*)\s*\/?>|<!--[^-]+-->|<([a-zA-Z_][a-zA-Z0-9\-.:/]*)>/g,Jt=/\\[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\\]/g,Gt=/[*_~`]/g,Kt=/!\[.*\]\(.*\)/g,Zt=/[[\]]/g,Xt=new RegExp('[&<>"]',"g");
function Qt(t){switch(t){
case"&":return"&amp;";
case"<":return"&lt;";
case">":return"&gt;";
case'"':return"&quot;";
default:return t;
}}
function Yt(t){return Xt.test(t)?t.replace(Xt,Qt):t;}
function te(t,e){return-1!==t.indexOf(e);}
var ee=["rel","target","hreflang","type"],ne={codeblock:/(^ {4}[^\n]+\n*)+/,thematicBreak:/^ *((\* *){3,}|(- *){3,} *|(_ *){3,}) */,atxHeading:/^(#{1,6}) +[\s\S]+/,seTextheading:/^([^\n]+)\n *(=|-){2,} */,blockquote:/^( *>[^\n]+.*)+/,list:/^ *(\*+|-+|\d+\.) [\s\S]+/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? */,link:/!?\[.*\]\(.*\)/,reflink:/!?\[.*\]\s*\[([^\]]*)\]/,verticalBar:/\u007C/,fencedCodeblock:/^((`|~){3,})/};
function re(t){if(!t)
return null;var e={};return ee.forEach(function(n){zt()(t[n])||(e[n]=t[n]);}),e;}
function oe(t,e){for(var n="",r=0;r<e;r+=1)
n+=t;return n;}
function ie(t){for(var e=[],n=Kt.exec(t);n;)
e.push([n.index,n.index+n[0].length]),n=Kt.exec(t);return t.replace(Zt,function(t,n){var r=e.some(function(t){return n>t[0]&&n<t[1];});return r?t:"\\"+t;});}
function se(t){var e=function(t){return"\\"+t;},n=t.replace($t," ");return Jt.test(n)&&(n=n.replace(Jt,e)),n=n.replace(Gt,e),Wt.test(n)&&(n=n.replace(Wt,e)),function(t){var e=!1;return Mt()(ne,function(n){return n.test(t)&&(e=!0),!e;}),e;}(n)&&(n=n.replace(Ut,e)),n;}
function ae(t){var e;return(e=-1===t.indexOf('"')?'""':-1===t.indexOf("'")?"''":"()")[0]+t+e[1];}
function ce(t){return _t()(t)||zt()(t);}
function le(t,e){if(null===t&&t===e)
return!0;if("object"!=typeof t||"object"!=typeof e||ce(t)||ce(e))
return t===e;for(var n in t)
if(t[n]!==e[n])
return!1;for(var n in e)
if(!(n in t))
return!1;return!0;}
function ue(t){return t[t.length-1];}
function pe(t){return"object"==typeof t&&null!==t;}
function de(t,e){var n=o({},t);return t&&e&&Object.keys(e).forEach(function(t){pe(n[t])?Array.isArray(e[t])?n[t]=fe(e[t]):n.hasOwnProperty(t)?n[t]=de(n[t],e[t]):n[t]=he(e[t]):n[t]=e[t];}),n;}
function fe(t){return t.map(function(t){return pe(t)?Array.isArray(t)?fe(t):he(t):t;});}
function he(t){var e=Object.keys(t);return e.length?e.reduce(function(e,n){return pe(t[n])?e[n]=Array.isArray(t[n])?fe(t[n]):he(t[n]):e[n]=t[n],e;},{}):t;}
function me(t,e){return void 0===e&&(e={}),Object.keys(e).forEach(function(n){t.hasOwnProperty(n)&&"object"==typeof t[n]?Array.isArray(e[n])?t[n]=e[n]:me(t[n],e[n]):t[n]=e[n];}),t;}
function ve(t,e){return t>e?[e,t]:[t,e];}
var ge=Math.pow(2,16);
function ye(t,e){return t+e*ge;}
function be(t){return 65535&t;}
var we=function(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=null),this.pos=t,this.deleted=e,this.recover=n;},ke=function(t,e){void 0===e&&(e=!1),this.ranges=t,this.inverted=e;};
ke.prototype.recover=function(t){var e=0,n=be(t);if(!this.inverted)
for(var r=0;r<n;r++)
e+=this.ranges[3*r+2]-this.ranges[3*r+1];return this.ranges[3*n]+e+function(t){return(t-(65535&t))/ge;}(t);},ke.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1);},ke.prototype.map=function(t,e){return void 0===e&&(e=1),this._map(t,e,!0);},ke.prototype._map=function(t,e,n){for(var r=0,o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){
var a=this.ranges[s]-(this.inverted?r:0);
if(a>t)
break;
var c=this.ranges[s+o],l=this.ranges[s+i],u=a+c;
if(t<=u){
var p=a+r+((c?t==a?-1:t==u?1:e:e)<0?0:l);
if(n)
return p;
var d=t==(e<0?a:u)?null:ye(s/3,t-a);
return new we(p,e<0?t!=a:t!=u,d);
}
r+=l-c;
}return n?t+r:new we(t+r);},ke.prototype.touches=function(t,e){for(var n=0,r=be(e),o=this.inverted?2:1,i=this.inverted?1:2,s=0;s<this.ranges.length;s+=3){
var a=this.ranges[s]-(this.inverted?n:0);
if(a>t)
break;
var c=this.ranges[s+o];
if(t<=a+c&&s==3*r)
return!0;
n+=this.ranges[s+i]-c;
}return!1;},ke.prototype.forEach=function(t){for(var e=this.inverted?2:1,n=this.inverted?1:2,r=0,o=0;r<this.ranges.length;r+=3){
var i=this.ranges[r],s=i-(this.inverted?o:0),a=i+(this.inverted?0:o),c=this.ranges[r+e],l=this.ranges[r+n];
t(s,s+c,a,a+l),o+=l-c;
}},ke.prototype.invert=function(){return new ke(this.ranges,!this.inverted);},ke.prototype.toString=function(){return(this.inverted?"-":"")+JSON.stringify(this.ranges);},ke.offset=function(t){return 0==t?ke.empty:new ke(t<0?[0,-t,0]:[0,0,t]);},ke.empty=new ke([]);
var xe=function(t,e,n,r){this.maps=t||[],this.from=n||0,this.to=null==r?this.maps.length:r,this.mirror=e;};
function Ce(t){var e=Error.call(this,t);return e.__proto__=Ce.prototype,e;}
xe.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.maps.length),new xe(this.maps,this.mirror,t,e);},xe.prototype.copy=function(){return new xe(this.maps.slice(),this.mirror&&this.mirror.slice(),this.from,this.to);},xe.prototype.appendMap=function(t,e){this.to=this.maps.push(t),null!=e&&this.setMirror(this.maps.length-1,e);},xe.prototype.appendMapping=function(t){for(var e=0,n=this.maps.length;e<t.maps.length;e++){
var r=t.getMirror(e);
this.appendMap(t.maps[e],null!=r&&r<e?n+r:null);
}},xe.prototype.getMirror=function(t){if(this.mirror)
for(var e=0;e<this.mirror.length;e++)
if(this.mirror[e]==t)
return this.mirror[e+(e%2?-1:1)];},xe.prototype.setMirror=function(t,e){this.mirror||(this.mirror=[]),this.mirror.push(t,e);},xe.prototype.appendMappingInverted=function(t){for(var e=t.maps.length-1,n=this.maps.length+t.maps.length;e>=0;e--){
var r=t.getMirror(e);
this.appendMap(t.maps[e].invert(),null!=r&&r>e?n-r-1:null);
}},xe.prototype.invert=function(){var t=new xe();return t.appendMappingInverted(this),t;},xe.prototype.map=function(t,e){if(void 0===e&&(e=1),this.mirror)
return this._map(t,e,!0);for(var n=this.from;n<this.to;n++)
t=this.maps[n].map(t,e);return t;},xe.prototype.mapResult=function(t,e){return void 0===e&&(e=1),this._map(t,e,!1);},xe.prototype._map=function(t,e,n){for(var r=!1,o=this.from;o<this.to;o++){
var i=this.maps[o].mapResult(t,e);
if(null!=i.recover){
var s=this.getMirror(o);
if(null!=s&&s>o&&s<this.to){
o=s,t=this.maps[s].recover(i.recover);
continue;
}
}
i.deleted&&(r=!0),t=i.pos;
}return n?t:new we(t,r);},Ce.prototype=Object.create(Error.prototype),Ce.prototype.constructor=Ce,Ce.prototype.name="TransformError";
var Te=function(t){this.doc=t,this.steps=[],this.docs=[],this.mapping=new xe();},Me={before:{configurable:!0},docChanged:{configurable:!0}};
function Se(){throw new Error("Override me");}
Me.before.get=function(){return this.docs.length?this.docs[0]:this.doc;},Te.prototype.step=function(t){var e=this.maybeStep(t);if(e.failed)
throw new Ce(e.failed);return this;},Te.prototype.maybeStep=function(t){var e=t.apply(this.doc);return e.failed||this.addStep(t,e.doc),e;},Me.docChanged.get=function(){return this.steps.length>0;},Te.prototype.addStep=function(t,e){this.docs.push(this.doc),this.steps.push(t),this.mapping.appendMap(t.getMap()),this.doc=e;},Object.defineProperties(Te.prototype,Me);
var Ee=Object.create(null),Ne=function(){};
Ne.prototype.apply=function(t){return Se();},Ne.prototype.getMap=function(){return ke.empty;},Ne.prototype.invert=function(t){return Se();},Ne.prototype.map=function(t){return Se();},Ne.prototype.merge=function(t){return null;},Ne.prototype.toJSON=function(){return Se();},Ne.fromJSON=function(t,e){if(!e||!e.stepType)
throw new RangeError("Invalid input for Step.fromJSON");var n=Ee[e.stepType];if(!n)
throw new RangeError("No step type "+e.stepType+" defined");return n.fromJSON(t,e);},Ne.jsonID=function(t,e){if(t in Ee)
throw new RangeError("Duplicate use of step JSON ID "+t);return Ee[t]=e,e.prototype.jsonID=t,e;};
var Oe=function(t,e){this.doc=t,this.failed=e;};
Oe.ok=function(t){return new Oe(t,null);},Oe.fail=function(t){return new Oe(null,t);},Oe.fromReplace=function(t,e,n,r){try{
return Oe.ok(t.replace(e,n,r));
}
catch(t){
if(t instanceof g)
return Oe.fail(t.message);
throw t;
}};
var De=function(t){function e(e,n,r,o){t.call(this),this.from=e,this.to=n,this.slice=r,this.structure=!!o;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){return this.structure&&Le(t,this.from,this.to)?Oe.fail("Structure replace would overwrite content"):Oe.fromReplace(t,this.from,this.to,this.slice);},e.prototype.getMap=function(){return new ke([this.from,this.to-this.from,this.slice.size]);},e.prototype.invert=function(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to));},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted?null:new e(n.pos,Math.max(n.pos,r.pos),this.slice);},e.prototype.merge=function(t){if(!(t instanceof e)||t.structure||this.structure)
return null;if(this.from+this.slice.size!=t.from||this.slice.openEnd||t.slice.openStart){
if(t.to!=this.from||this.slice.openStart||t.slice.openEnd)
return null;
var n=this.slice.size+t.slice.size==0?y.empty:new y(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);
return new e(t.from,this.to,n,this.structure);
}var r=this.slice.size+t.slice.size==0?y.empty:new y(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),r,this.structure);},e.prototype.toJSON=function(){var t={stepType:"replace",from:this.from,to:this.to};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t;},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)
throw new RangeError("Invalid input for ReplaceStep.fromJSON");return new e(n.from,n.to,y.fromJSON(t,n.slice),!!n.structure);},e;}(Ne);
Ne.jsonID("replace",De);
var Ae=function(t){function e(e,n,r,o,i,s,a){t.call(this),this.from=e,this.to=n,this.gapFrom=r,this.gapTo=o,this.slice=i,this.insert=s,this.structure=!!a;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){if(this.structure&&(Le(t,this.from,this.gapFrom)||Le(t,this.gapTo,this.to)))
return Oe.fail("Structure gap-replace would overwrite content");var e=t.slice(this.gapFrom,this.gapTo);if(e.openStart||e.openEnd)
return Oe.fail("Gap is not a flat range");var n=this.slice.insertAt(this.insert,e.content);return n?Oe.fromReplace(t,this.from,this.to,n):Oe.fail("Content does not fit in gap");},e.prototype.getMap=function(){return new ke([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert]);},e.prototype.invert=function(t){var n=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure);},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1),o=t.map(this.gapFrom,-1),i=t.map(this.gapTo,1);return n.deleted&&r.deleted||o<n.pos||i>r.pos?null:new e(n.pos,r.pos,o,i,this.slice,this.insert,this.structure);},e.prototype.toJSON=function(){var t={stepType:"replaceAround",from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(t.slice=this.slice.toJSON()),this.structure&&(t.structure=!0),t;},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to||"number"!=typeof n.gapFrom||"number"!=typeof n.gapTo||"number"!=typeof n.insert)
throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");return new e(n.from,n.to,n.gapFrom,n.gapTo,y.fromJSON(t,n.slice),n.insert,!!n.structure);},e;}(Ne);
function Le(t,e,n){for(var r=t.resolve(e),o=n-e,i=r.depth;o>0&&i>0&&r.indexAfter(i)==r.node(i).childCount;)
i--,o--;if(o>0)
for(var s=r.node(i).maybeChild(r.indexAfter(i));o>0;){
if(!s||s.isLeaf)
return!0;
s=s.firstChild,o--;
}return!1;}
function Ie(t,e,n){return(0==e||t.canReplace(e,t.childCount))&&(n==t.childCount||t.canReplace(0,n));}
function Re(t){for(var e=t.parent.content.cutByIndex(t.startIndex,t.endIndex),n=t.depth;;--n){
var r=t.$from.node(n),o=t.$from.index(n),i=t.$to.indexAfter(n);
if(n<t.depth&&r.canReplace(o,i,e))
return n;
if(0==n||r.type.spec.isolating||!Ie(r,o,i))
break;
}}
function Pe(t){return{type:t,attrs:null};}
function Be(t,e,n,r){void 0===n&&(n=1);var o=t.resolve(e),i=o.depth-n,s=r&&r[r.length-1]||o.parent;if(i<0||o.parent.type.spec.isolating||!o.parent.canReplace(o.index(),o.parent.childCount)||!s.type.validContent(o.parent.content.cutByIndex(o.index(),o.parent.childCount)))
return!1;for(var a=o.depth-1,c=n-2;a>i;a--,c--){
var l=o.node(a),u=o.index(a);
if(l.type.spec.isolating)
return!1;
var p=l.content.cutByIndex(u,l.childCount),d=r&&r[c]||l;
if(d!=l&&(p=p.replaceChild(0,d.type.create(d.attrs))),!l.canReplace(u+1,l.childCount)||!d.type.validContent(p))
return!1;
}var f=o.indexAfter(i),h=r&&r[0];return o.node(i).canReplaceWith(f,f,h?h.type:o.node(i+1).type);}
function Fe(t,e){var n=t.resolve(e),r=n.index();return He(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(r,r+1);}
function He(t,e){return t&&e&&!t.isLeaf&&t.canAppend(e);}
function ze(t,e,n){for(var r=[],o=0;o<t.childCount;o++){
var i=t.child(o);
i.content.size&&(i=i.copy(ze(i.content,e,i))),i.isInline&&(i=e(i,n,o)),r.push(i);
}return p.fromArray(r);}
Ne.jsonID("replaceAround",Ae),Te.prototype.lift=function(t,e){for(var n=t.$from,r=t.$to,o=t.depth,i=n.before(o+1),s=r.after(o+1),a=i,c=s,l=p.empty,u=0,d=o,f=!1;d>e;d--)
f||n.index(d)>0?(f=!0,l=p.from(n.node(d).copy(l)),u++):a--;for(var h=p.empty,m=0,v=o,g=!1;v>e;v--)
g||r.after(v+1)<r.end(v)?(g=!0,h=p.from(r.node(v).copy(h)),m++):c++;return this.step(new Ae(a,c,i,s,new y(l.append(h),u,m),l.size-u,!0));},Te.prototype.wrap=function(t,e){for(var n=p.empty,r=e.length-1;r>=0;r--)
n=p.from(e[r].type.create(e[r].attrs,n));var o=t.start,i=t.end;return this.step(new Ae(o,i,o,i,new y(n,0,0),e.length,!0));},Te.prototype.setBlockType=function(t,e,n,r){var o=this;if(void 0===e&&(e=t),!n.isTextblock)
throw new RangeError("Type given to setBlockType should be a textblock");var i=this.steps.length;return this.doc.nodesBetween(t,e,function(t,e){if(t.isTextblock&&!t.hasMarkup(n,r)&&function(t,e,n){var r=t.resolve(e),o=r.index();return r.parent.canReplaceWith(o,o+1,n);}(o.doc,o.mapping.slice(i).map(e),n)){
o.clearIncompatible(o.mapping.slice(i).map(e,1),n);
var s=o.mapping.slice(i),a=s.map(e,1),c=s.map(e+t.nodeSize,1);
return o.step(new Ae(a,c,a+1,c-1,new y(p.from(n.create(r,null,t.marks)),0,0),1,!0)),!1;
}}),this;},Te.prototype.setNodeMarkup=function(t,e,n,r){var o=this.doc.nodeAt(t);if(!o)
throw new RangeError("No node at given position");e||(e=o.type);var i=e.create(n,null,r||o.marks);if(o.isLeaf)
return this.replaceWith(t,t+o.nodeSize,i);if(!e.validContent(o.content))
throw new RangeError("Invalid content for node type "+e.name);return this.step(new Ae(t,t+o.nodeSize,t+1,t+o.nodeSize-1,new y(p.from(i),0,0),1,!0));},Te.prototype.split=function(t,e,n){void 0===e&&(e=1);for(var r=this.doc.resolve(t),o=p.empty,i=p.empty,s=r.depth,a=r.depth-e,c=e-1;s>a;s--,c--){
o=p.from(r.node(s).copy(o));
var l=n&&n[c];
i=p.from(l?l.type.create(l.attrs,i):r.node(s).copy(i));
}return this.step(new De(t,t,new y(o.append(i),e,e),!0));},Te.prototype.join=function(t,e){void 0===e&&(e=1);var n=new De(t-e,t+e,y.empty,!0);return this.step(n);};
var je=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=t.resolve(this.from),o=r.node(r.sharedDepth(this.to)),i=new y(ze(n.content,function(t,n){return t.isAtom&&n.type.allowsMarkType(e.mark.type)?t.mark(e.mark.addToSet(t.marks)):t;},o),n.openStart,n.openEnd);return Oe.fromReplace(t,this.from,this.to,i);},e.prototype.invert=function(){return new _e(this.from,this.to,this.mark);},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark);},e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)
return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark);},e.prototype.toJSON=function(){return{stepType:"addMark",mark:this.mark.toJSON(),from:this.from,to:this.to};},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)
throw new RangeError("Invalid input for AddMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark));},e;}(Ne);
Ne.jsonID("addMark",je);
var _e=function(t){function e(e,n,r){t.call(this),this.from=e,this.to=n,this.mark=r;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.apply=function(t){var e=this,n=t.slice(this.from,this.to),r=new y(ze(n.content,function(t){return t.mark(e.mark.removeFromSet(t.marks));}),n.openStart,n.openEnd);return Oe.fromReplace(t,this.from,this.to,r);},e.prototype.invert=function(){return new je(this.from,this.to,this.mark);},e.prototype.map=function(t){var n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark);},e.prototype.merge=function(t){if(t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from)
return new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark);},e.prototype.toJSON=function(){return{stepType:"removeMark",mark:this.mark.toJSON(),from:this.from,to:this.to};},e.fromJSON=function(t,n){if("number"!=typeof n.from||"number"!=typeof n.to)
throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");return new e(n.from,n.to,t.markFromJSON(n.mark));},e;}(Ne);
function qe(t,e,n){return!n.openStart&&!n.openEnd&&t.start()==e.start()&&t.parent.canReplace(t.index(),e.index(),n.content);}
Ne.jsonID("removeMark",_e),Te.prototype.addMark=function(t,e,n){var r=this,o=[],i=[],s=null,a=null;return this.doc.nodesBetween(t,e,function(r,c,l){if(r.isInline){
var u=r.marks;
if(!n.isInSet(u)&&l.type.allowsMarkType(n.type)){
for(var p=Math.max(c,t),d=Math.min(c+r.nodeSize,e),f=n.addToSet(u),h=0;h<u.length;h++)
u[h].isInSet(f)||(s&&s.to==p&&s.mark.eq(u[h])?s.to=d:o.push(s=new _e(p,d,u[h])));
a&&a.to==p?a.to=d:i.push(a=new je(p,d,n));
}
}}),o.forEach(function(t){return r.step(t);}),i.forEach(function(t){return r.step(t);}),this;},Te.prototype.removeMark=function(t,e,n){var r=this;void 0===n&&(n=null);var o=[],i=0;return this.doc.nodesBetween(t,e,function(r,s){if(r.isInline){
i++;
var a=null;
if(n instanceof at)
for(var c,l=r.marks;c=n.isInSet(l);)
(a||(a=[])).push(c),l=c.removeFromSet(l);else

n?n.isInSet(r.marks)&&(a=[n]):a=r.marks;
if(a&&a.length)
for(var u=Math.min(s+r.nodeSize,e),p=0;p<a.length;p++){
for(var d=a[p],f=void 0,h=0;h<o.length;h++){
var m=o[h];
m.step==i-1&&d.eq(o[h].style)&&(f=m);
}
f?(f.to=u,f.step=i):o.push({style:d,from:Math.max(s,t),to:u,step:i});
}
}}),o.forEach(function(t){return r.step(new _e(t.from,t.to,t.style));}),this;},Te.prototype.clearIncompatible=function(t,e,n){void 0===n&&(n=e.contentMatch);for(var r=this.doc.nodeAt(t),o=[],i=t+1,s=0;s<r.childCount;s++){
var a=r.child(s),c=i+a.nodeSize,l=n.matchType(a.type,a.attrs);
if(l){
n=l;
for(var u=0;u<a.marks.length;u++)
e.allowsMarkType(a.marks[u].type)||this.step(new _e(i,c,a.marks[u]));
}else

o.push(new De(i,c,y.empty));
i=c;
}if(!n.validEnd){
var d=n.fillBefore(p.empty,!0);
this.replace(i,i,new y(d,0,0));
}for(var f=o.length-1;f>=0;f--)
this.step(o[f]);return this;},Te.prototype.replace=function(t,e,n){void 0===e&&(e=t),void 0===n&&(n=y.empty);var r=function(t,e,n,r){if(void 0===n&&(n=e),void 0===r&&(r=y.empty),e==n&&!r.size)
return null;var o=t.resolve(e),i=t.resolve(n);return qe(o,i,r)?new De(e,n,r):new Ve(o,i,r).fit();}(this.doc,t,e,n);return r&&this.step(r),this;},Te.prototype.replaceWith=function(t,e,n){return this.replace(t,e,new y(p.from(n),0,0));},Te.prototype.delete=function(t,e){return this.replace(t,e,y.empty);},Te.prototype.insert=function(t,e){return this.replaceWith(t,t,e);};
var Ve=function(t,e,n){this.$to=e,this.$from=t,this.unplaced=n,this.frontier=[];for(var r=0;r<=t.depth;r++){
var o=t.node(r);
this.frontier.push({type:o.type,match:o.contentMatchAt(t.indexAfter(r))});
}this.placed=p.empty;for(var i=t.depth;i>0;i--)
this.placed=p.from(t.node(i).copy(this.placed));},$e={depth:{configurable:!0}};
function Ue(t,e,n){return 0==e?t.cutByIndex(n):t.replaceChild(0,t.firstChild.copy(Ue(t.firstChild.content,e-1,n)));}
function We(t,e,n){return 0==e?t.append(n):t.replaceChild(t.childCount-1,t.lastChild.copy(We(t.lastChild.content,e-1,n)));}
function Je(t,e){for(var n=0;n<e;n++)
t=t.firstChild.content;return t;}
function Ge(t,e,n){if(e<=0)
return t;var r=t.content;return e>1&&(r=r.replaceChild(0,Ge(r.firstChild,e-1,1==r.childCount?n-1:0))),e>0&&(r=t.type.contentMatch.fillBefore(r).append(r),n<=0&&(r=r.append(t.type.contentMatch.matchFragment(r).fillBefore(p.empty,!0)))),t.copy(r);}
function Ke(t,e,n,r,o){var i=t.node(e),s=o?t.indexAfter(e):t.index(e);if(s==i.childCount&&!n.compatibleContent(i.type))
return null;var a=r.fillBefore(i.content,!0,s);return a&&!function(t,e,n){for(var r=n;r<e.childCount;r++)
if(!t.allowsMarks(e.child(r).marks))
return!0;return!1;}(n,i.content,s)?a:null;}
function Ze(t,e,n,r,o){if(e<n){
var i=t.firstChild;
t=t.replaceChild(0,i.copy(Ze(i.content,e+1,n,r,i)));
}if(e>r){
var s=o.contentMatchAt(0),a=s.fillBefore(t).append(t);
t=a.append(s.matchFragment(a).fillBefore(p.empty,!0));
}return t;}
function Xe(t,e){for(var n=[],r=Math.min(t.depth,e.depth);r>=0;r--){
var o=t.start(r);
if(o<t.pos-(t.depth-r)||e.end(r)>e.pos+(e.depth-r)||t.node(r).type.spec.isolating||e.node(r).type.spec.isolating)
break;
o==e.start(r)&&n.push(r);
}return n;}
$e.depth.get=function(){return this.frontier.length-1;},Ve.prototype.fit=function(){for(;this.unplaced.size;){
var t=this.findFittable();
t?this.placeNodes(t):this.openMore()||this.dropNode();
}var e=this.mustMoveInline(),n=this.placed.size-this.depth-this.$from.depth,r=this.$from,o=this.close(e<0?this.$to:r.doc.resolve(e));if(!o)
return null;for(var i=this.placed,s=r.depth,a=o.depth;s&&a&&1==i.childCount;)
i=i.firstChild.content,s--,a--;var c=new y(i,s,a);return e>-1?new Ae(r.pos,e,this.$to.pos,this.$to.end(),c,n):c.size||r.pos!=this.$to.pos?new De(r.pos,o.pos,c):void 0;},Ve.prototype.findFittable=function(){for(var t=1;t<=2;t++)
for(var e=this.unplaced.openStart;e>=0;e--)
for(var n=void 0,r=(e?(n=Je(this.unplaced.content,e-1).firstChild).content:this.unplaced.content).firstChild,o=this.depth;o>=0;o--){
var i=this.frontier[o],s=i.type,a=i.match,c=void 0,l=void 0;
if(1==t&&(r?a.matchType(r.type)||(l=a.fillBefore(p.from(r),!1)):s.compatibleContent(n.type)))
return{sliceDepth:e,frontierDepth:o,parent:n,inject:l};
if(2==t&&r&&(c=a.findWrapping(r.type)))
return{sliceDepth:e,frontierDepth:o,parent:n,wrap:c};
if(n&&a.matchType(n.type))
break;
}},Ve.prototype.openMore=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=Je(e,n);return!(!o.childCount||o.firstChild.isLeaf)&&(this.unplaced=new y(e,n+1,Math.max(r,o.size+n>=e.size-r?n+1:0)),!0);},Ve.prototype.dropNode=function(){var t=this.unplaced,e=t.content,n=t.openStart,r=t.openEnd,o=Je(e,n);if(o.childCount<=1&&n>0){
var i=e.size-n<=n+o.size;
this.unplaced=new y(Ue(e,n-1,1),n-1,i?n-1:r);
}else

this.unplaced=new y(Ue(e,n,1),n,r);},Ve.prototype.placeNodes=function(t){for(var e=t.sliceDepth,n=t.frontierDepth,r=t.parent,o=t.inject,i=t.wrap;this.depth>n;)
this.closeFrontierNode();if(i)
for(var s=0;s<i.length;s++)
this.openFrontierNode(i[s]);var a=this.unplaced,c=r?r.content:a.content,l=a.openStart-e,u=0,d=[],f=this.frontier[n],h=f.match,m=f.type;if(o){
for(var v=0;v<o.childCount;v++)
d.push(o.child(v));
h=h.matchFragment(o);
}for(var g=c.size+e-(a.content.size-a.openEnd);u<c.childCount;){
var b=c.child(u),w=h.matchType(b.type);
if(!w)
break;
(++u>1||0==l||b.content.size)&&(h=w,d.push(Ge(b.mark(m.allowedMarks(b.marks)),1==u?l:0,u==c.childCount?g:-1)));
}var k=u==c.childCount;k||(g=-1),this.placed=We(this.placed,n,p.from(d)),this.frontier[n].match=h,k&&g<0&&r&&r.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(var x=0,C=c;x<g;x++){
var T=C.lastChild;
this.frontier.push({type:T.type,match:T.contentMatchAt(T.childCount)}),C=T.content;
}this.unplaced=k?0==e?y.empty:new y(Ue(a.content,e-1,1),e-1,g<0?a.openEnd:e-1):new y(Ue(a.content,e,u),a.openStart,a.openEnd);},Ve.prototype.mustMoveInline=function(){if(!this.$to.parent.isTextblock||this.$to.end()==this.$to.pos)
return-1;var t,e=this.frontier[this.depth];if(!e.type.isTextblock||!Ke(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)
return-1;for(var n=this.$to.depth,r=this.$to.after(n);n>1&&r==this.$to.end(--n);)
++r;return r;},Ve.prototype.findCloseLevel=function(t){t:for(var e=Math.min(this.depth,t.depth);e>=0;e--){
var n=this.frontier[e],r=n.match,o=n.type,i=e<t.depth&&t.end(e+1)==t.pos+(t.depth-(e+1)),s=Ke(t,e,o,r,i);
if(s){
for(var a=e-1;a>=0;a--){
var c=this.frontier[a],l=c.match,u=Ke(t,a,c.type,l,!0);
if(!u||u.childCount)
continue t;
}
return{depth:e,fit:s,move:i?t.doc.resolve(t.after(e+1)):t};
}
}},Ve.prototype.close=function(t){var e=this.findCloseLevel(t);if(!e)
return null;for(;this.depth>e.depth;)
this.closeFrontierNode();e.fit.childCount&&(this.placed=We(this.placed,e.depth,e.fit)),t=e.move;for(var n=e.depth+1;n<=t.depth;n++){
var r=t.node(n),o=r.type.contentMatch.fillBefore(r.content,!0,t.index(n));
this.openFrontierNode(r.type,r.attrs,o);
}return t;},Ve.prototype.openFrontierNode=function(t,e,n){var r=this.frontier[this.depth];r.match=r.match.matchType(t),this.placed=We(this.placed,this.depth,p.from(t.create(e,n))),this.frontier.push({type:t,match:t.contentMatch});},Ve.prototype.closeFrontierNode=function(){var t=this.frontier.pop().match.fillBefore(p.empty,!0);t.childCount&&(this.placed=We(this.placed,this.frontier.length,t));},Object.defineProperties(Ve.prototype,$e),Te.prototype.replaceRange=function(t,e,n){if(!n.size)
return this.deleteRange(t,e);var r=this.doc.resolve(t),o=this.doc.resolve(e);if(qe(r,o,n))
return this.step(new De(t,e,n));var i=Xe(r,this.doc.resolve(e));0==i[i.length-1]&&i.pop();var s=-(r.depth+1);i.unshift(s);for(var a=r.depth,c=r.pos-1;a>0;a--,c--){
var l=r.node(a).type.spec;
if(l.defining||l.isolating)
break;
i.indexOf(a)>-1?s=a:r.before(a)==c&&i.splice(1,0,-a);
}for(var u=i.indexOf(s),p=[],d=n.openStart,f=n.content,h=0;;h++){
var m=f.firstChild;
if(p.push(m),h==n.openStart)
break;
f=m.content;
}d>0&&p[d-1].type.spec.defining&&r.node(u).type!=p[d-1].type?d-=1:d>=2&&p[d-1].isTextblock&&p[d-2].type.spec.defining&&r.node(u).type!=p[d-2].type&&(d-=2);for(var v=n.openStart;v>=0;v--){
var g=(v+d+1)%(n.openStart+1),b=p[g];
if(b)
for(var w=0;w<i.length;w++){
var k=i[(w+u)%i.length],x=!0;
k<0&&(x=!1,k=-k);
var C=r.node(k-1),T=r.index(k-1);
if(C.canReplaceWith(T,T,b.type,b.marks))
return this.replace(r.before(k),x?o.after(k):e,new y(Ze(n.content,0,n.openStart,g),g,n.openEnd));
}
}for(var M=this.steps.length,S=i.length-1;S>=0&&(this.replace(t,e,n),!(this.steps.length>M));S--){
var E=i[S];
S<0||(t=r.before(E),e=o.after(E));
}return this;},Te.prototype.replaceRangeWith=function(t,e,n){if(!n.isInline&&t==e&&this.doc.resolve(t).parent.content.size){
var r=function(t,e,n){var r=t.resolve(e);if(r.parent.canReplaceWith(r.index(),r.index(),n))
return e;if(0==r.parentOffset)
for(var o=r.depth-1;o>=0;o--){
var i=r.index(o);
if(r.node(o).canReplaceWith(i,i,n))
return r.before(o+1);
if(i>0)
return null;
}if(r.parentOffset==r.parent.content.size)
for(var s=r.depth-1;s>=0;s--){
var a=r.indexAfter(s);
if(r.node(s).canReplaceWith(a,a,n))
return r.after(s+1);
if(a<r.node(s).childCount)
return null;
}}(this.doc,t,n.type);
null!=r&&(t=e=r);
}return this.replaceRange(t,e,new y(p.from(n),0,0));},Te.prototype.deleteRange=function(t,e){for(var n=this.doc.resolve(t),r=this.doc.resolve(e),o=Xe(n,r),i=0;i<o.length;i++){
var s=o[i],a=i==o.length-1;
if(a&&0==s||n.node(s).type.contentMatch.validEnd)
return this.delete(n.start(s),r.end(s));
if(s>0&&(a||n.node(s-1).canReplace(n.index(s-1),r.indexAfter(s-1))))
return this.delete(n.before(s),r.after(s));
}for(var c=1;c<=n.depth&&c<=r.depth;c++)
if(t-n.start(c)==n.depth-c&&e>n.end(c)&&r.end(c)-e!=r.depth-c)
return this.delete(n.before(c),e);return this.delete(t,e);};
var Qe=Object.create(null),Ye=function(t,e,n){this.ranges=n||[new en(t.min(e),t.max(e))],this.$anchor=t,this.$head=e;},tn={anchor:{configurable:!0},head:{configurable:!0},from:{configurable:!0},to:{configurable:!0},$from:{configurable:!0},$to:{configurable:!0},empty:{configurable:!0}};
tn.anchor.get=function(){return this.$anchor.pos;},tn.head.get=function(){return this.$head.pos;},tn.from.get=function(){return this.$from.pos;},tn.to.get=function(){return this.$to.pos;},tn.$from.get=function(){return this.ranges[0].$from;},tn.$to.get=function(){return this.ranges[0].$to;},tn.empty.get=function(){for(var t=this.ranges,e=0;e<t.length;e++)
if(t[e].$from.pos!=t[e].$to.pos)
return!1;return!0;},Ye.prototype.content=function(){return this.$from.node(0).slice(this.from,this.to,!0);},Ye.prototype.replace=function(t,e){void 0===e&&(e=y.empty);for(var n=e.content.lastChild,r=null,o=0;o<e.openEnd;o++)
r=n,n=n.lastChild;for(var i=t.steps.length,s=this.ranges,a=0;a<s.length;a++){
var c=s[a],l=c.$from,u=c.$to,p=t.mapping.slice(i);
t.replaceRange(p.map(l.pos),p.map(u.pos),a?y.empty:e),0==a&&un(t,i,(n?n.isInline:r&&r.isTextblock)?-1:1);
}},Ye.prototype.replaceWith=function(t,e){for(var n=t.steps.length,r=this.ranges,o=0;o<r.length;o++){
var i=r[o],s=i.$from,a=i.$to,c=t.mapping.slice(n),l=c.map(s.pos),u=c.map(a.pos);
o?t.deleteRange(l,u):(t.replaceRangeWith(l,u,e),un(t,n,e.isInline?-1:1));
}},Ye.findFrom=function(t,e,n){var r=t.parent.inlineContent?new nn(t):ln(t.node(0),t.parent,t.pos,t.index(),e,n);if(r)
return r;for(var o=t.depth-1;o>=0;o--){
var i=e<0?ln(t.node(0),t.node(o),t.before(o+1),t.index(o),e,n):ln(t.node(0),t.node(o),t.after(o+1),t.index(o)+1,e,n);
if(i)
return i;
}},Ye.near=function(t,e){return void 0===e&&(e=1),this.findFrom(t,e)||this.findFrom(t,-e)||new an(t.node(0));},Ye.atStart=function(t){return ln(t,t,0,0,1)||new an(t);},Ye.atEnd=function(t){return ln(t,t,t.content.size,t.childCount,-1)||new an(t);},Ye.fromJSON=function(t,e){if(!e||!e.type)
throw new RangeError("Invalid input for Selection.fromJSON");var n=Qe[e.type];if(!n)
throw new RangeError("No selection type "+e.type+" defined");return n.fromJSON(t,e);},Ye.jsonID=function(t,e){if(t in Qe)
throw new RangeError("Duplicate use of selection JSON ID "+t);return Qe[t]=e,e.prototype.jsonID=t,e;},Ye.prototype.getBookmark=function(){return nn.between(this.$anchor,this.$head).getBookmark();},Object.defineProperties(Ye.prototype,tn),Ye.prototype.visible=!0;
var en=function(t,e){this.$from=t,this.$to=e;},nn=function(t){function e(e,n){void 0===n&&(n=e),t.call(this,e,n);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={$cursor:{configurable:!0}};return n.$cursor.get=function(){return this.$anchor.pos==this.$head.pos?this.$head:null;},e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));if(!o.parent.inlineContent)
return t.near(o);var i=n.resolve(r.map(this.anchor));return new e(i.parent.inlineContent?i:o,o);},e.prototype.replace=function(e,n){if(void 0===n&&(n=y.empty),t.prototype.replace.call(this,e,n),n==y.empty){
var r=this.$from.marksAcross(this.$to);
r&&e.ensureMarks(r);
}},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head;},e.prototype.getBookmark=function(){return new rn(this.anchor,this.head);},e.prototype.toJSON=function(){return{type:"text",anchor:this.anchor,head:this.head};},e.fromJSON=function(t,n){if("number"!=typeof n.anchor||"number"!=typeof n.head)
throw new RangeError("Invalid input for TextSelection.fromJSON");return new e(t.resolve(n.anchor),t.resolve(n.head));},e.create=function(t,e,n){void 0===n&&(n=e);var r=t.resolve(e);return new this(r,n==e?r:t.resolve(n));},e.between=function(n,r,o){var i=n.pos-r.pos;if(o&&!i||(o=i>=0?1:-1),!r.parent.inlineContent){
var s=t.findFrom(r,o,!0)||t.findFrom(r,-o,!0);
if(!s)
return t.near(r,o);
r=s.$head;
}return n.parent.inlineContent||(0==i||(n=(t.findFrom(n,-o,!0)||t.findFrom(n,o,!0)).$anchor).pos<r.pos!=i<0)&&(n=r),new e(n,r);},Object.defineProperties(e.prototype,n),e;}(Ye);
Ye.jsonID("text",nn);
var rn=function(t,e){this.anchor=t,this.head=e;};
rn.prototype.map=function(t){return new rn(t.map(this.anchor),t.map(this.head));},rn.prototype.resolve=function(t){return nn.between(t.resolve(this.anchor),t.resolve(this.head));};
var on=function(t){function e(e){var n=e.nodeAfter,r=e.node(0).resolve(e.pos+n.nodeSize);t.call(this,e,r),this.node=n;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.map=function(n,r){var o=r.mapResult(this.anchor),i=o.deleted,s=o.pos,a=n.resolve(s);return i?t.near(a):new e(a);},e.prototype.content=function(){return new y(p.from(this.node),0,0);},e.prototype.eq=function(t){return t instanceof e&&t.anchor==this.anchor;},e.prototype.toJSON=function(){return{type:"node",anchor:this.anchor};},e.prototype.getBookmark=function(){return new sn(this.anchor);},e.fromJSON=function(t,n){if("number"!=typeof n.anchor)
throw new RangeError("Invalid input for NodeSelection.fromJSON");return new e(t.resolve(n.anchor));},e.create=function(t,e){return new this(t.resolve(e));},e.isSelectable=function(t){return!t.isText&&!1!==t.type.spec.selectable;},e;}(Ye);
on.prototype.visible=!1,Ye.jsonID("node",on);
var sn=function(t){this.anchor=t;};
sn.prototype.map=function(t){var e=t.mapResult(this.anchor),n=e.deleted,r=e.pos;return n?new rn(r,r):new sn(r);},sn.prototype.resolve=function(t){var e=t.resolve(this.anchor),n=e.nodeAfter;return n&&on.isSelectable(n)?new on(e):Ye.near(e);};
var an=function(t){function e(e){t.call(this,e.resolve(0),e.resolve(e.content.size));}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.replace=function(e,n){if(void 0===n&&(n=y.empty),n==y.empty){
e.delete(0,e.doc.content.size);
var r=t.atStart(e.doc);
r.eq(e.selection)||e.setSelection(r);
}else

t.prototype.replace.call(this,e,n);},e.prototype.toJSON=function(){return{type:"all"};},e.fromJSON=function(t){return new e(t);},e.prototype.map=function(t){return new e(t);},e.prototype.eq=function(t){return t instanceof e;},e.prototype.getBookmark=function(){return cn;},e;}(Ye);
Ye.jsonID("all",an);
var cn={map:function(){return this;},resolve:function(t){return new an(t);}};
function ln(t,e,n,r,o,i){if(e.inlineContent)
return nn.create(t,n);for(var s=r-(o>0?0:1);o>0?s<e.childCount:s>=0;s+=o){
var a=e.child(s);
if(a.isAtom){
if(!i&&on.isSelectable(a))
return on.create(t,n-(o<0?a.nodeSize:0));
}else
{
var c=ln(t,a,n+o,o<0?a.childCount:0,o,i);
if(c)
return c;
}
n+=a.nodeSize*o;
}}
function un(t,e,n){var r=t.steps.length-1;if(!(r<e)){
var o,i=t.steps[r];
if(i instanceof De||i instanceof Ae)
t.mapping.maps[r].forEach(function(t,e,n,r){null==o&&(o=r);}),t.setSelection(Ye.near(t.doc.resolve(o),n));
}}
var pn=function(t){function e(e){t.call(this,e.doc),this.time=Date.now(),this.curSelection=e.selection,this.curSelectionFor=0,this.storedMarks=e.storedMarks,this.updated=0,this.meta=Object.create(null);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={selection:{configurable:!0},selectionSet:{configurable:!0},storedMarksSet:{configurable:!0},isGeneric:{configurable:!0},scrolledIntoView:{configurable:!0}};return n.selection.get=function(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection;},e.prototype.setSelection=function(t){if(t.$from.doc!=this.doc)
throw new RangeError("Selection passed to setSelection must point at the current document");return this.curSelection=t,this.curSelectionFor=this.steps.length,this.updated=-3&(1|this.updated),this.storedMarks=null,this;},n.selectionSet.get=function(){return(1&this.updated)>0;},e.prototype.setStoredMarks=function(t){return this.storedMarks=t,this.updated|=2,this;},e.prototype.ensureMarks=function(t){return v.sameSet(this.storedMarks||this.selection.$from.marks(),t)||this.setStoredMarks(t),this;},e.prototype.addStoredMark=function(t){return this.ensureMarks(t.addToSet(this.storedMarks||this.selection.$head.marks()));},e.prototype.removeStoredMark=function(t){return this.ensureMarks(t.removeFromSet(this.storedMarks||this.selection.$head.marks()));},n.storedMarksSet.get=function(){return(2&this.updated)>0;},e.prototype.addStep=function(e,n){t.prototype.addStep.call(this,e,n),this.updated=-3&this.updated,this.storedMarks=null;},e.prototype.setTime=function(t){return this.time=t,this;},e.prototype.replaceSelection=function(t){return this.selection.replace(this,t),this;},e.prototype.replaceSelectionWith=function(t,e){var n=this.selection;return!1!==e&&(t=t.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||v.none))),n.replaceWith(this,t),this;},e.prototype.deleteSelection=function(){return this.selection.replace(this),this;},e.prototype.insertText=function(t,e,n){void 0===n&&(n=e);var r=this.doc.type.schema;if(null==e)
return t?this.replaceSelectionWith(r.text(t),!0):this.deleteSelection();if(!t)
return this.deleteRange(e,n);var o=this.storedMarks;if(!o){
var i=this.doc.resolve(e);
o=n==e?i.marks():i.marksAcross(this.doc.resolve(n));
}return this.replaceRangeWith(e,n,r.text(t,o)),this.selection.empty||this.setSelection(Ye.near(this.selection.$to)),this;},e.prototype.setMeta=function(t,e){return this.meta["string"==typeof t?t:t.key]=e,this;},e.prototype.getMeta=function(t){return this.meta["string"==typeof t?t:t.key];},n.isGeneric.get=function(){for(var t in this.meta)
return!1;return!0;},e.prototype.scrollIntoView=function(){return this.updated|=4,this;},n.scrolledIntoView.get=function(){return(4&this.updated)>0;},Object.defineProperties(e.prototype,n),e;}(Te);
function dn(t,e){return e&&t?t.bind(e):t;}
var fn=function(t,e,n){this.name=t,this.init=dn(e.init,n),this.apply=dn(e.apply,n);},hn=[new fn("doc",{init:function(t){return t.doc||t.schema.topNodeType.createAndFill();},apply:function(t){return t.doc;}}),new fn("selection",{init:function(t,e){return t.selection||Ye.atStart(e.doc);},apply:function(t){return t.selection;}}),new fn("storedMarks",{init:function(t){return t.storedMarks||null;},apply:function(t,e,n,r){return r.selection.$cursor?t.storedMarks:null;}}),new fn("scrollToSelection",{init:function(){return 0;},apply:function(t,e){return t.scrolledIntoView?e+1:e;}})],mn=function(t,e){var n=this;this.schema=t,this.fields=hn.concat(),this.plugins=[],this.pluginsByKey=Object.create(null),e&&e.forEach(function(t){if(n.pluginsByKey[t.key])
throw new RangeError("Adding different instances of a keyed plugin ("+t.key+")");n.plugins.push(t),n.pluginsByKey[t.key]=t,t.spec.state&&n.fields.push(new fn(t.key,t.spec.state,t));});},vn=function(t){this.config=t;},gn={schema:{configurable:!0},plugins:{configurable:!0},tr:{configurable:!0}};
gn.schema.get=function(){return this.config.schema;},gn.plugins.get=function(){return this.config.plugins;},vn.prototype.apply=function(t){return this.applyTransaction(t).state;},vn.prototype.filterTransaction=function(t,e){void 0===e&&(e=-1);for(var n=0;n<this.config.plugins.length;n++)
if(n!=e){
var r=this.config.plugins[n];
if(r.spec.filterTransaction&&!r.spec.filterTransaction.call(r,t,this))
return!1;
}return!0;},vn.prototype.applyTransaction=function(t){if(!this.filterTransaction(t))
return{state:this,transactions:[]};for(var e=[t],n=this.applyInner(t),r=null;;){
for(var o=!1,i=0;i<this.config.plugins.length;i++){
var s=this.config.plugins[i];
if(s.spec.appendTransaction){
var a=r?r[i].n:0,c=r?r[i].state:this,l=a<e.length&&s.spec.appendTransaction.call(s,a?e.slice(a):e,c,n);
if(l&&n.filterTransaction(l,i)){
if(l.setMeta("appendedTransaction",t),!r){
r=[];
for(var u=0;u<this.config.plugins.length;u++)
r.push(u<i?{state:n,n:e.length}:{state:this,n:0});
}
e.push(l),n=n.applyInner(l),o=!0;
}
r&&(r[i]={state:n,n:e.length});
}
}
if(!o)
return{state:n,transactions:e};
}},vn.prototype.applyInner=function(t){if(!t.before.eq(this.doc))
throw new RangeError("Applying a mismatched transaction");for(var e=new vn(this.config),n=this.config.fields,r=0;r<n.length;r++){
var o=n[r];
e[o.name]=o.apply(t,this[o.name],this,e);
}for(var i=0;i<yn.length;i++)
yn[i](this,t,e);return e;},gn.tr.get=function(){return new pn(this);},vn.create=function(t){for(var e=new mn(t.doc?t.doc.type.schema:t.schema,t.plugins),n=new vn(e),r=0;r<e.fields.length;r++)
n[e.fields[r].name]=e.fields[r].init(t,n);return n;},vn.prototype.reconfigure=function(t){for(var e=new mn(this.schema,t.plugins),n=e.fields,r=new vn(e),o=0;o<n.length;o++){
var i=n[o].name;
r[i]=this.hasOwnProperty(i)?this[i]:n[o].init(t,r);
}return r;},vn.prototype.toJSON=function(t){var e={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(e.storedMarks=this.storedMarks.map(function(t){return t.toJSON();})),t&&"object"==typeof t)
for(var n in t){
if("doc"==n||"selection"==n)
throw new RangeError("The JSON fields `doc` and `selection` are reserved");
var r=t[n],o=r.spec.state;
o&&o.toJSON&&(e[n]=o.toJSON.call(r,this[r.key]));
}return e;},vn.fromJSON=function(t,e,n){if(!e)
throw new RangeError("Invalid input for EditorState.fromJSON");if(!t.schema)
throw new RangeError("Required config field 'schema' missing");var r=new mn(t.schema,t.plugins),o=new vn(r);return r.fields.forEach(function(r){if("doc"==r.name)
o.doc=z.fromJSON(t.schema,e.doc);else
if("selection"==r.name)
o.selection=Ye.fromJSON(o.doc,e.selection);else
if("storedMarks"==r.name)
e.storedMarks&&(o.storedMarks=e.storedMarks.map(t.schema.markFromJSON));else
{
if(n)
for(var i in n){
var s=n[i],a=s.spec.state;
if(s.key==r.name&&a&&a.fromJSON&&Object.prototype.hasOwnProperty.call(e,i))
return void(o[r.name]=a.fromJSON.call(s,t,e[i],o));
}
o[r.name]=r.init(t,o);
}}),o;},vn.addApplyListener=function(t){yn.push(t);},vn.removeApplyListener=function(t){var e=yn.indexOf(t);e>-1&&yn.splice(e,1);},Object.defineProperties(vn.prototype,gn);
var yn=[];
function bn(t,e,n){for(var r in t){
var o=t[r];
o instanceof Function?o=o.bind(e):"handleDOMEvents"==r&&(o=bn(o,e,{})),n[r]=o;
}return n;}
var wn=function(t){this.props={},t.props&&bn(t.props,this,this.props),this.spec=t,this.key=t.key?t.key.key:xn("plugin");};
wn.prototype.getState=function(t){return t[this.key];};
var kn=Object.create(null);
function xn(t){return t in kn?t+"$"+ ++kn[t]:(kn[t]=0,t+"$");}
var Cn=function(t){void 0===t&&(t="key"),this.key=xn(t);};
Cn.prototype.get=function(t){return t.config.pluginsByKey[this.key];},Cn.prototype.getState=function(t){return t[this.key];};
var Tn={};
if("undefined"!=typeof navigator&&"undefined"!=typeof document){
var Mn=/Edge\/(\d+)/.exec(navigator.userAgent),Sn=/MSIE \d/.test(navigator.userAgent),En=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
Tn.mac=/Mac/.test(navigator.platform);
var Nn=Tn.ie=!!(Sn||En||Mn);
Tn.ie_version=Sn?document.documentMode||6:En?+En[1]:Mn?+Mn[1]:null,Tn.gecko=!Nn&&/gecko\/(\d+)/i.test(navigator.userAgent),Tn.gecko_version=Tn.gecko&&+(/Firefox\/(\d+)/.exec(navigator.userAgent)||[0,0])[1];
var On=!Nn&&/Chrome\/(\d+)/.exec(navigator.userAgent);
Tn.chrome=!!On,Tn.chrome_version=On&&+On[1],Tn.safari=!Nn&&/Apple Computer/.test(navigator.vendor),Tn.ios=Tn.safari&&(/Mobile\/\w+/.test(navigator.userAgent)||navigator.maxTouchPoints>2),Tn.android=/Android \d/.test(navigator.userAgent),Tn.webkit="webkitFontSmoothing"in document.documentElement.style,Tn.webkit_version=Tn.webkit&&+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1];
}
var Dn=function(t){for(var e=0;;e++)
if(!(t=t.previousSibling))
return e;},An=function(t){var e=t.assignedSlot||t.parentNode;return e&&11==e.nodeType?e.host:e;},Ln=null,In=function(t,e,n){var r=Ln||(Ln=document.createRange());return r.setEnd(t,null==n?t.nodeValue.length:n),r.setStart(t,e||0),r;},Rn=function(t,e,n,r){return n&&(Bn(t,e,n,r,-1)||Bn(t,e,n,r,1));},Pn=/^(img|br|input|textarea|hr)$/i;
function Bn(t,e,n,r,o){for(;;){
if(t==n&&e==r)
return!0;
if(e==(o<0?0:Fn(t))){
var i=t.parentNode;
if(1!=i.nodeType||Hn(t)||Pn.test(t.nodeName)||"false"==t.contentEditable)
return!1;
e=Dn(t)+(o<0?0:1),t=i;
}else
{
if(1!=t.nodeType)
return!1;
if("false"==(t=t.childNodes[e+(o<0?-1:0)]).contentEditable)
return!1;
e=o<0?Fn(t):0;
}
}}
function Fn(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length;}
function Hn(t){for(var e,n=t;n&&!(e=n.pmViewDesc);n=n.parentNode)
;return e&&e.node&&e.node.isBlock&&(e.dom==t||e.contentDOM==t);}
var zn=function(t){var e=t.isCollapsed;return e&&Tn.chrome&&t.rangeCount&&!t.getRangeAt(0).collapsed&&(e=!1),e;};
function jn(t,e){var n=document.createEvent("Event");return n.initEvent("keydown",!0,!0),n.keyCode=t,n.key=n.code=e,n;}
function _n(t){return{left:0,right:t.documentElement.clientWidth,top:0,bottom:t.documentElement.clientHeight};}
function qn(t,e){return"number"==typeof t?t:t[e];}
function Vn(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return{left:e.left,right:e.left+t.clientWidth*n,top:e.top,bottom:e.top+t.clientHeight*r};}
function $n(t,e,n){for(var r=t.someProp("scrollThreshold")||0,o=t.someProp("scrollMargin")||5,i=t.dom.ownerDocument,s=n||t.dom;s;s=An(s))
if(1==s.nodeType){
var a=s==i.body||1!=s.nodeType,c=a?_n(i):Vn(s),l=0,u=0;
if(e.top<c.top+qn(r,"top")?u=-(c.top-e.top+qn(o,"top")):e.bottom>c.bottom-qn(r,"bottom")&&(u=e.bottom-c.bottom+qn(o,"bottom")),e.left<c.left+qn(r,"left")?l=-(c.left-e.left+qn(o,"left")):e.right>c.right-qn(r,"right")&&(l=e.right-c.right+qn(o,"right")),l||u)
if(a)
i.defaultView.scrollBy(l,u);else
{
var p=s.scrollLeft,d=s.scrollTop;
u&&(s.scrollTop+=u),l&&(s.scrollLeft+=l);
var f=s.scrollLeft-p,h=s.scrollTop-d;
e={left:e.left-f,top:e.top-h,right:e.right-f,bottom:e.bottom-h};
}
if(a)
break;
}}
function Un(t){for(var e=[],n=t.ownerDocument;t&&(e.push({dom:t,top:t.scrollTop,left:t.scrollLeft}),t!=n);t=An(t))
;return e;}
function Wn(t,e){for(var n=0;n<t.length;n++){
var r=t[n],o=r.dom,i=r.top,s=r.left;
o.scrollTop!=i+e&&(o.scrollTop=i+e),o.scrollLeft!=s&&(o.scrollLeft=s);
}}
var Jn=null;
function Gn(t,e){for(var n,r,o=2e8,i=0,s=e.top,a=e.top,c=t.firstChild,l=0;c;c=c.nextSibling,l++){
var u=void 0;
if(1==c.nodeType)
u=c.getClientRects();else
{
if(3!=c.nodeType)
continue;
u=In(c).getClientRects();
}
for(var p=0;p<u.length;p++){
var d=u[p];
if(d.top<=s&&d.bottom>=a){
s=Math.max(d.bottom,s),a=Math.min(d.top,a);
var f=d.left>e.left?d.left-e.left:d.right<e.left?e.left-d.right:0;
if(f<o){
n=c,o=f,r=f&&3==n.nodeType?{left:d.right<e.left?d.right:d.left,top:e.top}:e,1==c.nodeType&&f&&(i=l+(e.left>=(d.left+d.right)/2?1:0));
continue;
}
}
!n&&(e.left>=d.right&&e.top>=d.top||e.left>=d.left&&e.top>=d.bottom)&&(i=l+1);
}
}return n&&3==n.nodeType?function(t,e){for(var n=t.nodeValue.length,r=document.createRange(),o=0;o<n;o++){
r.setEnd(t,o+1),r.setStart(t,o);
var i=Qn(r,1);
if(i.top!=i.bottom&&Kn(e,i))
return{node:t,offset:o+(e.left>=(i.left+i.right)/2?1:0)};
}return{node:t,offset:0};}(n,r):!n||o&&1==n.nodeType?{node:t,offset:i}:Gn(n,r);}
function Kn(t,e){return t.left>=e.left-1&&t.left<=e.right+1&&t.top>=e.top-1&&t.top<=e.bottom+1;}
function Zn(t,e,n){var r=t.childNodes.length;if(r&&n.top<n.bottom)
for(var o=Math.max(0,Math.min(r-1,Math.floor(r*(e.top-n.top)/(n.bottom-n.top))-2)),i=o;;){
var s=t.childNodes[i];
if(1==s.nodeType)
for(var a=s.getClientRects(),c=0;c<a.length;c++){
var l=a[c];
if(Kn(e,l))
return Zn(s,e,l);
}
if((i=(i+1)%r)==o)
break;
}return t;}
function Xn(t,e){var n,r,o,i,s=t.root;if(s.caretPositionFromPoint)
try{
var a=s.caretPositionFromPoint(e.left,e.top);
a&&(o=(n=a).offsetNode,i=n.offset);
}
catch(t){}if(!o&&s.caretRangeFromPoint){
var c=s.caretRangeFromPoint(e.left,e.top);
c&&(o=(r=c).startContainer,i=r.startOffset);
}var l,u=s.elementFromPoint(e.left,e.top+1);if(!u||!t.dom.contains(1!=u.nodeType?u.parentNode:u)){
var p=t.dom.getBoundingClientRect();
if(!Kn(e,p))
return null;
if(!(u=Zn(t.dom,e,p)))
return null;
}if(Tn.safari)
for(var d=u;o&&d;d=An(d))
d.draggable&&(o=i=null);if(u=function(t,e){var n=t.parentNode;return n&&/^li$/i.test(n.nodeName)&&e.left<t.getBoundingClientRect().left?n:t;}(u,e),o){
if(Tn.gecko&&1==o.nodeType&&(i=Math.min(i,o.childNodes.length))<o.childNodes.length){
var f,h=o.childNodes[i];
"IMG"==h.nodeName&&(f=h.getBoundingClientRect()).right<=e.left&&f.bottom>e.top&&i++;
}
o==t.dom&&i==o.childNodes.length-1&&1==o.lastChild.nodeType&&e.top>o.lastChild.getBoundingClientRect().bottom?l=t.state.doc.content.size:0!=i&&1==o.nodeType&&"BR"==o.childNodes[i-1].nodeName||(l=function(t,e,n,r){for(var o=-1,i=e;i!=t.dom;){
var s=t.docView.nearestDesc(i,!0);
if(!s)
return null;
if(s.node.isBlock&&s.parent){
var a=s.dom.getBoundingClientRect();
if(a.left>r.left||a.top>r.top)
o=s.posBefore;else
{
if(!(a.right<r.left||a.bottom<r.top))
break;
o=s.posAfter;
}
}
i=s.dom.parentNode;
}return o>-1?o:t.docView.posFromDOM(e,n);}(t,o,i,e));
}null==l&&(l=function(t,e,n){var r=Gn(e,n),o=r.node,i=r.offset,s=-1;if(1==o.nodeType&&!o.firstChild){
var a=o.getBoundingClientRect();
s=a.left!=a.right&&n.left>(a.left+a.right)/2?1:-1;
}return t.docView.posFromDOM(o,i,s);}(t,u,e));var m=t.docView.nearestDesc(u,!0);return{pos:l,inside:m?m.posAtStart-m.border:-1};}
function Qn(t,e){var n=t.getClientRects();return n.length?n[e<0?0:n.length-1]:t.getBoundingClientRect();}
var Yn=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function tr(t,e,n){var r=t.docView.domFromPos(e,n<0?-1:1),o=r.node,i=r.offset,s=Tn.webkit||Tn.gecko;if(3==o.nodeType){
if(!s||!Yn.test(o.nodeValue)&&(n<0?i:i!=o.nodeValue.length)){
var a=i,c=i,l=n<0?1:-1;
return n<0&&!i?(c++,l=-1):n>=0&&i==o.nodeValue.length?(a--,l=1):n<0?a--:c++,er(Qn(In(o,a,c),l),l<0);
}
var u=Qn(In(o,i,i),n);
if(Tn.gecko&&i&&/\s/.test(o.nodeValue[i-1])&&i<o.nodeValue.length){
var p=Qn(In(o,i-1,i-1),-1);
if(p.top==u.top){
var d=Qn(In(o,i,i+1),-1);
if(d.top!=u.top)
return er(d,d.left<p.left);
}
}
return u;
}if(!t.state.doc.resolve(e).parent.inlineContent){
if(i&&(n<0||i==Fn(o))){
var f=o.childNodes[i-1];
if(1==f.nodeType)
return nr(f.getBoundingClientRect(),!1);
}
if(i<Fn(o)){
var h=o.childNodes[i];
if(1==h.nodeType)
return nr(h.getBoundingClientRect(),!0);
}
return nr(o.getBoundingClientRect(),n>=0);
}if(i&&(n<0||i==Fn(o))){
var m=o.childNodes[i-1],v=3==m.nodeType?In(m,Fn(m)-(s?0:1)):1!=m.nodeType||"BR"==m.nodeName&&m.nextSibling?null:m;
if(v)
return er(Qn(v,1),!1);
}if(i<Fn(o)){
var g=o.childNodes[i],y=3==g.nodeType?In(g,0,s?0:1):1==g.nodeType?g:null;
if(y)
return er(Qn(y,-1),!0);
}return er(Qn(3==o.nodeType?In(o):o,-n),n>=0);}
function er(t,e){if(0==t.width)
return t;var n=e?t.left:t.right;return{top:t.top,bottom:t.bottom,left:n,right:n};}
function nr(t,e){if(0==t.height)
return t;var n=e?t.top:t.bottom;return{top:n,bottom:n,left:t.left,right:t.right};}
function rr(t,e,n){var r=t.state,o=t.root.activeElement;r!=e&&t.updateState(e),o!=t.dom&&t.focus();try{
return n();
}finally
{
r!=e&&t.updateState(r),o!=t.dom&&o&&o.focus();
}}
var or=/[\u0590-\u08ac]/;
var ir=null,sr=null,ar=!1;
function cr(t,e,n){return ir==e&&sr==n?ar:(ir=e,sr=n,ar="up"==n||"down"==n?function(t,e,n){var r=e.selection,o="up"==n?r.$from:r.$to;return rr(t,e,function(){for(var e=t.docView.domFromPos(o.pos,"up"==n?-1:1).node;;){
var r=t.docView.nearestDesc(e,!0);
if(!r)
break;
if(r.node.isBlock){
e=r.dom;
break;
}
e=r.dom.parentNode;
}for(var i=tr(t,o.pos,1),s=e.firstChild;s;s=s.nextSibling){
var a=void 0;
if(1==s.nodeType)
a=s.getClientRects();else
{
if(3!=s.nodeType)
continue;
a=In(s,0,s.nodeValue.length).getClientRects();
}
for(var c=0;c<a.length;c++){
var l=a[c];
if(l.bottom>l.top&&("up"==n?l.bottom<i.top+1:l.top>i.bottom-1))
return!1;
}
}return!0;});}(t,e,n):function(t,e,n){var r=e.selection.$head;if(!r.parent.isTextblock)
return!1;var o=r.parentOffset,i=!o,s=o==r.parent.content.size,a=getSelection();return or.test(r.parent.textContent)&&a.modify?rr(t,e,function(){var e=a.getRangeAt(0),o=a.focusNode,i=a.focusOffset,s=a.caretBidiLevel;a.modify("move",n,"character");var c=!(r.depth?t.docView.domAfterPos(r.before()):t.dom).contains(1==a.focusNode.nodeType?a.focusNode:a.focusNode.parentNode)||o==a.focusNode&&i==a.focusOffset;return a.removeAllRanges(),a.addRange(e),null!=s&&(a.caretBidiLevel=s),c;}):"left"==n||"backward"==n?i:s;}(t,e,n));}
var lr=function(t,e,n,r){this.parent=t,this.children=e,this.dom=n,n.pmViewDesc=this,this.contentDOM=r,this.dirty=0;},ur={beforePosition:{configurable:!0},size:{configurable:!0},border:{configurable:!0},posBefore:{configurable:!0},posAtStart:{configurable:!0},posAfter:{configurable:!0},posAtEnd:{configurable:!0},contentLost:{configurable:!0},domAtom:{configurable:!0}};
lr.prototype.matchesWidget=function(){return!1;},lr.prototype.matchesMark=function(){return!1;},lr.prototype.matchesNode=function(){return!1;},lr.prototype.matchesHack=function(){return!1;},ur.beforePosition.get=function(){return!1;},lr.prototype.parseRule=function(){return null;},lr.prototype.stopEvent=function(){return!1;},ur.size.get=function(){for(var t=0,e=0;e<this.children.length;e++)
t+=this.children[e].size;return t;},ur.border.get=function(){return 0;},lr.prototype.destroy=function(){this.parent=null,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=null);for(var t=0;t<this.children.length;t++)
this.children[t].destroy();},lr.prototype.posBeforeChild=function(t){for(var e=0,n=this.posAtStart;e<this.children.length;e++){
var r=this.children[e];
if(r==t)
return n;
n+=r.size;
}},ur.posBefore.get=function(){return this.parent.posBeforeChild(this);},ur.posAtStart.get=function(){return this.parent?this.parent.posBeforeChild(this)+this.border:0;},ur.posAfter.get=function(){return this.posBefore+this.size;},ur.posAtEnd.get=function(){return this.posAtStart+this.size-2*this.border;},lr.prototype.localPosFromDOM=function(t,e,n){if(this.contentDOM&&this.contentDOM.contains(1==t.nodeType?t:t.parentNode)){
if(n<0){
var r,o;
if(t==this.contentDOM)
r=t.childNodes[e-1];else
{
for(;t.parentNode!=this.contentDOM;)
t=t.parentNode;
r=t.previousSibling;
}
for(;r&&(!(o=r.pmViewDesc)||o.parent!=this);)
r=r.previousSibling;
return r?this.posBeforeChild(o)+o.size:this.posAtStart;
}
var i,s;
if(t==this.contentDOM)
i=t.childNodes[e];else
{
for(;t.parentNode!=this.contentDOM;)
t=t.parentNode;
i=t.nextSibling;
}
for(;i&&(!(s=i.pmViewDesc)||s.parent!=this);)
i=i.nextSibling;
return i?this.posBeforeChild(s):this.posAtEnd;
}var a;if(t==this.dom&&this.contentDOM)
a=e>Dn(this.contentDOM);else
if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))
a=2&t.compareDocumentPosition(this.contentDOM);else
if(this.dom.firstChild){
if(0==e)
for(var c=t;;c=c.parentNode){
if(c==this.dom){
a=!1;
break;
}
if(c.parentNode.firstChild!=c)
break;
}
if(null==a&&e==t.childNodes.length)
for(var l=t;;l=l.parentNode){
if(l==this.dom){
a=!0;
break;
}
if(l.parentNode.lastChild!=l)
break;
}
}return(null==a?n>0:a)?this.posAtEnd:this.posAtStart;},lr.prototype.nearestDesc=function(t,e){for(var n=!0,r=t;r;r=r.parentNode){
var o=this.getDesc(r);
if(o&&(!e||o.node)){
if(!n||!o.nodeDOM||(1==o.nodeDOM.nodeType?o.nodeDOM.contains(1==t.nodeType?t:t.parentNode):o.nodeDOM==t))
return o;
n=!1;
}
}},lr.prototype.getDesc=function(t){for(var e=t.pmViewDesc,n=e;n;n=n.parent)
if(n==this)
return e;},lr.prototype.posFromDOM=function(t,e,n){for(var r=t;r;r=r.parentNode){
var o=this.getDesc(r);
if(o)
return o.localPosFromDOM(t,e,n);
}return-1;},lr.prototype.descAt=function(t){for(var e=0,n=0;e<this.children.length;e++){
var r=this.children[e],o=n+r.size;
if(n==t&&o!=n){
for(;!r.border&&r.children.length;)
r=r.children[0];
return r;
}
if(t<o)
return r.descAt(t-n-r.border);
n=o;
}},lr.prototype.domFromPos=function(t,e){if(!this.contentDOM)
return{node:this.dom,offset:0};for(var n=0,r=0,o=!0;;r++,o=!1){
for(;r<this.children.length&&(this.children[r].beforePosition||this.children[r].dom.parentNode!=this.contentDOM);)
n+=this.children[r++].size;
var i=r==this.children.length?null:this.children[r];
if(n==t&&(0==e||!i||!i.size||i.border||e<0&&o)||i&&i.domAtom&&t<n+i.size)
return{node:this.contentDOM,offset:i?Dn(i.dom):this.contentDOM.childNodes.length};
if(!i)
throw new Error("Invalid position "+t);
var s=n+i.size;
if(!i.domAtom&&(e<0&&!i.border?s>=t:s>t)&&(s>t||r+1>=this.children.length||!this.children[r+1].beforePosition))
return i.domFromPos(t-n-i.border,e);
n=s;
}},lr.prototype.parseRange=function(t,e,n){if(void 0===n&&(n=0),0==this.children.length)
return{node:this.contentDOM,from:t,to:e,fromOffset:0,toOffset:this.contentDOM.childNodes.length};for(var r=-1,o=-1,i=n,s=0;;s++){
var a=this.children[s],c=i+a.size;
if(-1==r&&t<=c){
var l=i+a.border;
if(t>=l&&e<=c-a.border&&a.node&&a.contentDOM&&this.contentDOM.contains(a.contentDOM))
return a.parseRange(t,e,l);
t=i;
for(var u=s;u>0;u--){
var p=this.children[u-1];
if(p.size&&p.dom.parentNode==this.contentDOM&&!p.emptyChildAt(1)){
r=Dn(p.dom)+1;
break;
}
t-=p.size;
}
-1==r&&(r=0);
}
if(r>-1&&(c>e||s==this.children.length-1)){
e=c;
for(var d=s+1;d<this.children.length;d++){
var f=this.children[d];
if(f.size&&f.dom.parentNode==this.contentDOM&&!f.emptyChildAt(-1)){
o=Dn(f.dom);
break;
}
e+=f.size;
}
-1==o&&(o=this.contentDOM.childNodes.length);
break;
}
i=c;
}return{node:this.contentDOM,from:t,to:e,fromOffset:r,toOffset:o};},lr.prototype.emptyChildAt=function(t){if(this.border||!this.contentDOM||!this.children.length)
return!1;var e=this.children[t<0?0:this.children.length-1];return 0==e.size||e.emptyChildAt(t);},lr.prototype.domAfterPos=function(t){var e=this.domFromPos(t,0),n=e.node,r=e.offset;if(1!=n.nodeType||r==n.childNodes.length)
throw new RangeError("No node after pos "+t);return n.childNodes[r];},lr.prototype.setSelection=function(t,e,n,r){for(var o=Math.min(t,e),i=Math.max(t,e),s=0,a=0;s<this.children.length;s++){
var c=this.children[s],l=a+c.size;
if(o>a&&i<l)
return c.setSelection(t-a-c.border,e-a-c.border,n,r);
a=l;
}var u=this.domFromPos(t,t?-1:1),p=e==t?u:this.domFromPos(e,e?-1:1),d=n.getSelection(),f=!1;if((Tn.gecko||Tn.safari)&&t==e){
var h=u.node,m=u.offset;
if(3==h.nodeType)
(f=m&&"\n"==h.nodeValue[m-1])&&m==h.nodeValue.length&&h.nextSibling&&"BR"==h.nextSibling.nodeName&&(u=p={node:h.parentNode,offset:Dn(h)+1});else
{
var v=h.childNodes[m-1];
f=v&&("BR"==v.nodeName||"false"==v.contentEditable);
}
}if(Tn.gecko&&d.focusNode&&d.focusNode!=p.node&&1==d.focusNode.nodeType){
var g=d.focusNode.childNodes[d.focusOffset];
g&&"false"==g.contentEditable&&(r=!0);
}if(r||f&&Tn.safari||!Rn(u.node,u.offset,d.anchorNode,d.anchorOffset)||!Rn(p.node,p.offset,d.focusNode,d.focusOffset)){
var y=!1;
if((d.extend||t==e)&&!f){
d.collapse(u.node,u.offset);
try{
t!=e&&d.extend(p.node,p.offset),y=!0;
}
catch(t){
if(!(t instanceof DOMException))
throw t;
}
}
if(!y){
if(t>e){
var b=u;
u=p,p=b;
}
var w=document.createRange();
w.setEnd(p.node,p.offset),w.setStart(u.node,u.offset),d.removeAllRanges(),d.addRange(w);
}
}},lr.prototype.ignoreMutation=function(t){return!this.contentDOM&&"selection"!=t.type;},ur.contentLost.get=function(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM);},lr.prototype.markDirty=function(t,e){for(var n=0,r=0;r<this.children.length;r++){
var o=this.children[r],i=n+o.size;
if(n==i?t<=i&&e>=n:t<i&&e>n){
var s=n+o.border,a=i-o.border;
if(t>=s&&e<=a)
return this.dirty=t==n||e==i?2:1,void(t!=s||e!=a||!o.contentLost&&o.dom.parentNode==this.contentDOM?o.markDirty(t-s,e-s):o.dirty=3);
o.dirty=3;
}
n=i;
}this.dirty=2;},lr.prototype.markParentsDirty=function(){for(var t=1,e=this.parent;e;e=e.parent,t++){
var n=1==t?2:1;
e.dirty<n&&(e.dirty=n);
}},ur.domAtom.get=function(){return!1;},Object.defineProperties(lr.prototype,ur);
var pr=[],dr=function(t){function e(e,n,r,o){var i,s=n.type.toDOM;if("function"==typeof s&&(s=s(r,function(){return i?i.parent?i.parent.posBeforeChild(i):void 0:o;})),!n.type.spec.raw){
if(1!=s.nodeType){
var a=document.createElement("span");
a.appendChild(s),s=a;
}
s.contentEditable=!1,s.classList.add("ProseMirror-widget");
}t.call(this,e,pr,s,null),this.widget=n,i=this;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={beforePosition:{configurable:!0},domAtom:{configurable:!0}};return n.beforePosition.get=function(){return this.widget.type.side<0;},e.prototype.matchesWidget=function(t){return 0==this.dirty&&t.type.eq(this.widget.type);},e.prototype.parseRule=function(){return{ignore:!0};},e.prototype.stopEvent=function(t){var e=this.widget.spec.stopEvent;return!!e&&e(t);},e.prototype.ignoreMutation=function(t){return"selection"!=t.type||this.widget.spec.ignoreSelection;},n.domAtom.get=function(){return!0;},Object.defineProperties(e.prototype,n),e;}(lr),fr=function(t){function e(e,n,r,o){t.call(this,e,pr,n,null),this.textDOM=r,this.text=o;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0}};return n.size.get=function(){return this.text.length;},e.prototype.localPosFromDOM=function(t,e){return t!=this.textDOM?this.posAtStart+(e?this.size:0):this.posAtStart+e;},e.prototype.domFromPos=function(t){return{node:this.textDOM,offset:t};},e.prototype.ignoreMutation=function(t){return"characterData"===t.type&&t.target.nodeValue==t.oldValue;},Object.defineProperties(e.prototype,n),e;}(lr),hr=function(t){function e(e,n,r,o){t.call(this,e,[],r,o),this.mark=n;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.create=function(t,n,r,o){var i=o.nodeViews[n.type.name],s=i&&i(n,o,r);return s&&s.dom||(s=kt.renderSpec(document,n.type.spec.toDOM(n,r))),new e(t,n,s.dom,s.contentDOM||s.dom);},e.prototype.parseRule=function(){return{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM};},e.prototype.matchesMark=function(t){return 3!=this.dirty&&this.mark.eq(t);},e.prototype.markDirty=function(e,n){if(t.prototype.markDirty.call(this,e,n),0!=this.dirty){
for(var r=this.parent;!r.node;)
r=r.parent;
r.dirty<this.dirty&&(r.dirty=this.dirty),this.dirty=0;
}},e.prototype.slice=function(t,n,r){var o=e.create(this.parent,this.mark,!0,r),i=this.children,s=this.size;n<s&&(i=Ar(i,n,s,r)),t>0&&(i=Ar(i,0,t,r));for(var a=0;a<i.length;a++)
i[a].parent=o;return o.children=i,o;},e;}(lr),mr=function(t){function e(e,n,r,o,i,s,a,c,l){t.call(this,e,n.isLeaf?pr:[],i,s),this.nodeDOM=a,this.node=n,this.outerDeco=r,this.innerDeco=o,s&&this.updateChildren(c,l);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={size:{configurable:!0},border:{configurable:!0},domAtom:{configurable:!0}};return e.create=function(t,n,r,o,i,s){var a,c,l=i.nodeViews[n.type.name],u=l&&l(n,i,function(){return c?c.parent?c.parent.posBeforeChild(c):void 0:s;},r,o),p=u&&u.dom,d=u&&u.contentDOM;if(n.isText){
if(p){
if(3!=p.nodeType)
throw new RangeError("Text must be rendered as a DOM text node");
}else

p=document.createTextNode(n.text);}else

p||(p=(a=kt.renderSpec(document,n.type.spec.toDOM(n))).dom,d=a.contentDOM);d||n.isText||"BR"==p.nodeName||(p.hasAttribute("contenteditable")||(p.contentEditable=!1),n.type.spec.draggable&&(p.draggable=!0));var f=p;return p=Sr(p,r,n),u?c=new br(t,n,r,o,p,d,f,u,i,s+1):n.isText?new gr(t,n,r,o,p,f,i):new e(t,n,r,o,p,d,f,i,s+1);},e.prototype.parseRule=function(){var t=this;if(this.node.type.spec.reparseInView)
return null;var e={node:this.node.type.name,attrs:this.node.attrs};return this.node.type.spec.code&&(e.preserveWhitespace="full"),this.contentDOM&&!this.contentLost?e.contentElement=this.contentDOM:e.getContent=function(){return t.contentDOM?p.empty:t.node.content;},e;},e.prototype.matchesNode=function(t,e,n){return 0==this.dirty&&t.eq(this.node)&&Er(e,this.outerDeco)&&n.eq(this.innerDeco);},n.size.get=function(){return this.node.nodeSize;},n.border.get=function(){return this.node.isLeaf?0:1;},e.prototype.updateChildren=function(t,e){var n=this,r=this.node.inlineContent,o=e,i=r&&t.composing&&this.localCompositionNode(t,e),s=new Or(this,i&&i.node);!function(t,e,n,r){var o=e.locals(t),i=0;if(0==o.length){
for(var s=0;s<t.childCount;s++){
var a=t.child(s);
r(a,o,e.forChild(i,a),s),i+=a.nodeSize;
}
return;
}for(var c=0,l=[],u=null,p=0;;){
if(c<o.length&&o[c].to==i){
for(var d=o[c++],f=void 0;c<o.length&&o[c].to==i;)
(f||(f=[d])).push(o[c++]);
if(f){
f.sort(Dr);
for(var h=0;h<f.length;h++)
n(f[h],p,!!u);
}else

n(d,p,!!u);
}
var m=void 0,v=void 0;
if(u)
v=-1,m=u,u=null;else
{
if(!(p<t.childCount))
break;
v=p,m=t.child(p++);
}
for(var g=0;g<l.length;g++)
l[g].to<=i&&l.splice(g--,1);
for(;c<o.length&&o[c].from<=i&&o[c].to>i;)
l.push(o[c++]);
var y=i+m.nodeSize;
if(m.isText){
var b=y;
c<o.length&&o[c].from<b&&(b=o[c].from);
for(var w=0;w<l.length;w++)
l[w].to<b&&(b=l[w].to);
b<y&&(u=m.cut(b-i),m=m.cut(0,b-i),y=b,v=-1);
}
r(m,l.length?m.isInline&&!m.isLeaf?l.filter(function(t){return!t.inline;}):l.slice():pr,e.forChild(i,m),v),i=y;
}}(this.node,this.innerDeco,function(e,i,a){e.spec.marks?s.syncToMarks(e.spec.marks,r,t):e.type.side>=0&&!a&&s.syncToMarks(i==n.node.childCount?v.none:n.node.child(i).marks,r,t),s.placeWidget(e,t,o);},function(e,n,i,a){s.syncToMarks(e.marks,r,t),s.findNodeMatch(e,n,i,a)||s.updateNextNode(e,n,i,t,a)||s.addNode(e,n,i,t,o),o+=e.nodeSize;}),s.syncToMarks(pr,r,t),this.node.isTextblock&&s.addTextblockHacks(),s.destroyRest(),(s.changed||2==this.dirty)&&(i&&this.protectLocalComposition(t,i),wr(this.contentDOM,this.children,t),Tn.ios&&function(t){if("UL"==t.nodeName||"OL"==t.nodeName){
var e=t.style.cssText;
t.style.cssText=e+"; list-style: square !important",window.getComputedStyle(t).listStyle,t.style.cssText=e;
}}(this.dom));},e.prototype.localCompositionNode=function(t,e){var n=t.state.selection,r=n.from,o=n.to;if(!(!(t.state.selection instanceof nn)||r<e||o>e+this.node.content.size)){
var i=t.root.getSelection(),s=function(t,e){for(;;){
if(3==t.nodeType)
return t;
if(1==t.nodeType&&e>0){
if(t.childNodes.length>e&&3==t.childNodes[e].nodeType)
return t.childNodes[e];
e=Fn(t=t.childNodes[e-1]);
}else
{
if(!(1==t.nodeType&&e<t.childNodes.length))
return null;
t=t.childNodes[e],e=0;
}
}}(i.focusNode,i.focusOffset);
if(s&&this.dom.contains(s.parentNode)){
var a=s.nodeValue,c=function(t,e,n,r){for(var o=0,i=0;o<t.childCount&&i<=r;){
var s=t.child(o++),a=i;
if(i+=s.nodeSize,s.isText){
for(var c=s.text;o<t.childCount;){
var l=t.child(o++);
if(i+=l.nodeSize,!l.isText)
break;
c+=l.text;
}
if(i>=n){
var u=c.lastIndexOf(e,r-a);
if(u>=0&&u+e.length+a>=n)
return a+u;
}
}
}return-1;}(this.node.content,a,r-e,o-e);
return c<0?null:{node:s,pos:c,text:a};
}
}},e.prototype.protectLocalComposition=function(t,e){var n=e.node,r=e.pos,o=e.text;if(!this.getDesc(n)){
for(var i=n;i.parentNode!=this.contentDOM;i=i.parentNode){
for(;i.previousSibling;)
i.parentNode.removeChild(i.previousSibling);
for(;i.nextSibling;)
i.parentNode.removeChild(i.nextSibling);
i.pmViewDesc&&(i.pmViewDesc=null);
}
var s=new fr(this,i,n,o);
t.compositionNodes.push(s),this.children=Ar(this.children,r,r+o.length,t,s);
}},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||!t.sameMarkup(this.node))&&(this.updateInner(t,e,n,r),!0);},e.prototype.updateInner=function(t,e,n,r){this.updateOuterDeco(e),this.node=t,this.innerDeco=n,this.contentDOM&&this.updateChildren(r,this.posAtStart),this.dirty=0;},e.prototype.updateOuterDeco=function(t){if(!Er(t,this.outerDeco)){
var e=1!=this.nodeDOM.nodeType,n=this.dom;
this.dom=Tr(this.dom,this.nodeDOM,Cr(this.outerDeco,this.node,e),Cr(t,this.node,e)),this.dom!=n&&(n.pmViewDesc=null,this.dom.pmViewDesc=this),this.outerDeco=t;
}},e.prototype.selectNode=function(){this.nodeDOM.classList.add("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||(this.dom.draggable=!0);},e.prototype.deselectNode=function(){this.nodeDOM.classList.remove("ProseMirror-selectednode"),!this.contentDOM&&this.node.type.spec.draggable||this.dom.removeAttribute("draggable");},n.domAtom.get=function(){return this.node.isAtom;},Object.defineProperties(e.prototype,n),e;}(lr);
function vr(t,e,n,r,o){return Sr(r,e,t),new mr(null,t,e,n,r,r,r,o,0);}
var gr=function(t){function e(e,n,r,o,i,s,a){t.call(this,e,n,r,o,i,null,s,a);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={domAtom:{configurable:!0}};return e.prototype.parseRule=function(){for(var t=this.nodeDOM.parentNode;t&&t!=this.dom&&!t.pmIsDeco;)
t=t.parentNode;return{skip:t||!0};},e.prototype.update=function(t,e,n,r){return!(3==this.dirty||0!=this.dirty&&!this.inParent()||!t.sameMarkup(this.node))&&(this.updateOuterDeco(e),0==this.dirty&&t.text==this.node.text||t.text==this.nodeDOM.nodeValue||(this.nodeDOM.nodeValue=t.text,r.trackWrites==this.nodeDOM&&(r.trackWrites=null)),this.node=t,this.dirty=0,!0);},e.prototype.inParent=function(){for(var t=this.parent.contentDOM,e=this.nodeDOM;e;e=e.parentNode)
if(e==t)
return!0;return!1;},e.prototype.domFromPos=function(t){return{node:this.nodeDOM,offset:t};},e.prototype.localPosFromDOM=function(e,n,r){return e==this.nodeDOM?this.posAtStart+Math.min(n,this.node.text.length):t.prototype.localPosFromDOM.call(this,e,n,r);},e.prototype.ignoreMutation=function(t){return"characterData"!=t.type&&"selection"!=t.type;},e.prototype.slice=function(t,n,r){var o=this.node.cut(t,n),i=document.createTextNode(o.text);return new e(this.parent,o,this.outerDeco,this.innerDeco,i,i,r);},n.domAtom.get=function(){return!1;},Object.defineProperties(e.prototype,n),e;}(mr),yr=function(t){function e(){t.apply(this,arguments);}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={domAtom:{configurable:!0}};return e.prototype.parseRule=function(){return{ignore:!0};},e.prototype.matchesHack=function(){return 0==this.dirty;},n.domAtom.get=function(){return!0;},Object.defineProperties(e.prototype,n),e;}(lr),br=function(t){function e(e,n,r,o,i,s,a,c,l,u){t.call(this,e,n,r,o,i,s,a,l,u),this.spec=c;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.update=function(e,n,r,o){if(3==this.dirty)
return!1;if(this.spec.update){
var i=this.spec.update(e,n,r);
return i&&this.updateInner(e,n,r,o),i;
}return!(!this.contentDOM&&!e.isLeaf)&&t.prototype.update.call(this,e,n,r,o);},e.prototype.selectNode=function(){this.spec.selectNode?this.spec.selectNode():t.prototype.selectNode.call(this);},e.prototype.deselectNode=function(){this.spec.deselectNode?this.spec.deselectNode():t.prototype.deselectNode.call(this);},e.prototype.setSelection=function(e,n,r,o){this.spec.setSelection?this.spec.setSelection(e,n,r):t.prototype.setSelection.call(this,e,n,r,o);},e.prototype.destroy=function(){this.spec.destroy&&this.spec.destroy(),t.prototype.destroy.call(this);},e.prototype.stopEvent=function(t){return!!this.spec.stopEvent&&this.spec.stopEvent(t);},e.prototype.ignoreMutation=function(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):t.prototype.ignoreMutation.call(this,e);},e;}(mr);
function wr(t,e,n){for(var r=t.firstChild,o=!1,i=0;i<e.length;i++){
var s=e[i],a=s.dom;
if(a.parentNode==t){
for(;a!=r;)
r=Nr(r),o=!0;
r=r.nextSibling;
}else

o=!0,t.insertBefore(a,r);
if(s instanceof hr){
var c=r?r.previousSibling:t.lastChild;
wr(s.contentDOM,s.children,n),r=c?c.nextSibling:t.firstChild;
}
}for(;r;)
r=Nr(r),o=!0;o&&n.trackWrites==t&&(n.trackWrites=null);}
function kr(t){t&&(this.nodeName=t);}
kr.prototype=Object.create(null);
var xr=[new kr()];
function Cr(t,e,n){if(0==t.length)
return xr;for(var r=n?xr[0]:new kr(),o=[r],i=0;i<t.length;i++){
var s=t[i].type.attrs;
if(s)
for(var a in s.nodeName&&o.push(r=new kr(s.nodeName)),s){
var c=s[a];
null!=c&&(n&&1==o.length&&o.push(r=new kr(e.isInline?"span":"div")),"class"==a?r.class=(r.class?r.class+" ":"")+c:"style"==a?r.style=(r.style?r.style+";":"")+c:"nodeName"!=a&&(r[a]=c));
}
}return o;}
function Tr(t,e,n,r){if(n==xr&&r==xr)
return e;for(var o=e,i=0;i<r.length;i++){
var s=r[i],a=n[i];
if(i){
var c=void 0;
a&&a.nodeName==s.nodeName&&o!=t&&(c=o.parentNode)&&c.tagName.toLowerCase()==s.nodeName||((c=document.createElement(s.nodeName)).pmIsDeco=!0,c.appendChild(o),a=xr[0]),o=c;
}
Mr(o,a||xr[0],s);
}return o;}
function Mr(t,e,n){for(var r in e)
"class"==r||"style"==r||"nodeName"==r||r in n||t.removeAttribute(r);for(var o in n)
"class"!=o&&"style"!=o&&"nodeName"!=o&&n[o]!=e[o]&&t.setAttribute(o,n[o]);if(e.class!=n.class){
for(var i=e.class?e.class.split(" ").filter(Boolean):pr,s=n.class?n.class.split(" ").filter(Boolean):pr,a=0;a<i.length;a++)
-1==s.indexOf(i[a])&&t.classList.remove(i[a]);
for(var c=0;c<s.length;c++)
-1==i.indexOf(s[c])&&t.classList.add(s[c]);
}if(e.style!=n.style){
if(e.style)
for(var l,u=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;l=u.exec(e.style);)
t.style.removeProperty(l[1]);
n.style&&(t.style.cssText+=n.style);
}}
function Sr(t,e,n){return Tr(t,t,xr,Cr(e,n,1!=t.nodeType));}
function Er(t,e){if(t.length!=e.length)
return!1;for(var n=0;n<t.length;n++)
if(!t[n].type.eq(e[n].type))
return!1;return!0;}
function Nr(t){var e=t.nextSibling;return t.parentNode.removeChild(t),e;}
var Or=function(t,e){this.top=t,this.lock=e,this.index=0,this.stack=[],this.changed=!1,this.preMatch=function(t,e){for(var n=t.childCount,r=e.length,o=new Map();n>0&&r>0;r--){
var i=e[r-1],s=i.node;
if(s){
if(s!=t.child(n-1))
break;
--n,o.set(i,n);
}
}return{index:n,matched:o};}(t.node.content,t.children);};
function Dr(t,e){return t.type.side-e.type.side;}
function Ar(t,e,n,r,o){for(var i=[],s=0,a=0;s<t.length;s++){
var c=t[s],l=a,u=a+=c.size;
l>=n||u<=e?i.push(c):(l<e&&i.push(c.slice(0,e-l,r)),o&&(i.push(o),o=null),u>n&&i.push(c.slice(n-l,c.size,r)));
}return i;}
function Lr(t,e){var n=t.root.getSelection(),r=t.state.doc;if(!n.focusNode)
return null;var o=t.docView.nearestDesc(n.focusNode),i=o&&0==o.size,s=t.docView.posFromDOM(n.focusNode,n.focusOffset);if(s<0)
return null;var a,c,l=r.resolve(s);if(zn(n)){
for(a=l;o&&!o.node;)
o=o.parent;
if(o&&o.node.isAtom&&on.isSelectable(o.node)&&o.parent&&(!o.node.isInline||!function(t,e,n){for(var r=0==e,o=e==Fn(t);r||o;){
if(t==n)
return!0;
var i=Dn(t);
if(!(t=t.parentNode))
return!1;
r=r&&0==i,o=o&&i==Fn(t);
}}(n.focusNode,n.focusOffset,o.dom))){
var u=o.posBefore;
c=new on(s==u?l:r.resolve(u));
}
}else
{
var p=t.docView.posFromDOM(n.anchorNode,n.anchorOffset);
if(p<0)
return null;
a=r.resolve(p);
}c||(c=_r(t,a,l,"pointer"==e||t.state.selection.head<l.pos&&!i?1:-1));return c;}
function Ir(t){return t.editable?t.hasFocus():qr(t)&&document.activeElement&&document.activeElement.contains(t.dom);}
function Rr(t,e){var n=t.state.selection;if(zr(t,n),Ir(t)){
if(t.domObserver.disconnectSelection(),t.cursorWrapper)
!function(t){var e=t.root.getSelection(),n=document.createRange(),r=t.cursorWrapper.dom,o="IMG"==r.nodeName;o?n.setEnd(r.parentNode,Dn(r)+1):n.setEnd(r,0);n.collapse(!1),e.removeAllRanges(),e.addRange(n),!o&&!t.state.selection.visible&&Tn.ie&&Tn.ie_version<=11&&(r.disabled=!0,r.disabled=!1);}(t);else
{
var r,o,i=n.anchor,s=n.head;
!Pr||n instanceof nn||(n.$from.parent.inlineContent||(r=Br(t,n.from)),n.empty||n.$from.parent.inlineContent||(o=Br(t,n.to))),t.docView.setSelection(i,s,t.root,e),Pr&&(r&&Hr(r),o&&Hr(o)),n.visible?t.dom.classList.remove("ProseMirror-hideselection"):(t.dom.classList.add("ProseMirror-hideselection"),"onselectionchange"in document&&function(t){var e=t.dom.ownerDocument;e.removeEventListener("selectionchange",t.hideSelectionGuard);var n=t.root.getSelection(),r=n.anchorNode,o=n.anchorOffset;e.addEventListener("selectionchange",t.hideSelectionGuard=function(){n.anchorNode==r&&n.anchorOffset==o||(e.removeEventListener("selectionchange",t.hideSelectionGuard),setTimeout(function(){Ir(t)&&!t.state.selection.visible||t.dom.classList.remove("ProseMirror-hideselection");},20));});}(t));
}
t.domObserver.setCurSelection(),t.domObserver.connectSelection();
}}
Or.prototype.destroyBetween=function(t,e){if(t!=e){
for(var n=t;n<e;n++)
this.top.children[n].destroy();
this.top.children.splice(t,e-t),this.changed=!0;
}},Or.prototype.destroyRest=function(){this.destroyBetween(this.index,this.top.children.length);},Or.prototype.syncToMarks=function(t,e,n){for(var r=0,o=this.stack.length>>1,i=Math.min(o,t.length);r<i&&(r==o-1?this.top:this.stack[r+1<<1]).matchesMark(t[r])&&!1!==t[r].type.spec.spanning;)
r++;for(;r<o;)
this.destroyRest(),this.top.dirty=0,this.index=this.stack.pop(),this.top=this.stack.pop(),o--;for(;o<t.length;){
this.stack.push(this.top,this.index+1);
for(var s=-1,a=this.index;a<Math.min(this.index+3,this.top.children.length);a++)
if(this.top.children[a].matchesMark(t[o])){
s=a;
break;
}
if(s>-1)
s>this.index&&(this.changed=!0,this.destroyBetween(this.index,s)),this.top=this.top.children[this.index];else
{
var c=hr.create(this.top,t[o],e,n);
this.top.children.splice(this.index,0,c),this.top=c,this.changed=!0;
}
this.index=0,o++;
}},Or.prototype.findNodeMatch=function(t,e,n,r){var o=this.top.children,i=-1;if(r>=this.preMatch.index){
for(var s=this.index;s<o.length;s++)
if(o[s].matchesNode(t,e,n)){
i=s;
break;
}
}else

for(var a=this.index,c=Math.min(o.length,a+1);a<c;a++){
var l=o[a];
if(l.matchesNode(t,e,n)&&!this.preMatch.matched.has(l)){
i=a;
break;
}
}return!(i<0)&&(this.destroyBetween(this.index,i),this.index++,!0);},Or.prototype.updateNextNode=function(t,e,n,r,o){for(var i=this.index;i<this.top.children.length;i++){
var s=this.top.children[i];
if(s instanceof mr){
var a=this.preMatch.matched.get(s);
if(null!=a&&a!=o)
return!1;
var c=s.dom;
if(!(this.lock&&(c==this.lock||1==c.nodeType&&c.contains(this.lock.parentNode))&&!(t.isText&&s.node&&s.node.isText&&s.nodeDOM.nodeValue==t.text&&3!=s.dirty&&Er(e,s.outerDeco)))&&s.update(t,e,n,r))
return this.destroyBetween(this.index,i),s.dom!=c&&(this.changed=!0),this.index++,!0;
break;
}
}return!1;},Or.prototype.addNode=function(t,e,n,r,o){this.top.children.splice(this.index++,0,mr.create(this.top,t,e,n,r,o)),this.changed=!0;},Or.prototype.placeWidget=function(t,e,n){var r=this.index<this.top.children.length?this.top.children[this.index]:null;if(!r||!r.matchesWidget(t)||t!=r.widget&&r.widget.type.toDOM.parentNode){
var o=new dr(this.top,t,e,n);
this.top.children.splice(this.index++,0,o),this.changed=!0;
}else

this.index++;},Or.prototype.addTextblockHacks=function(){for(var t=this.top.children[this.index-1];t instanceof hr;)
t=t.children[t.children.length-1];if(!t||!(t instanceof gr)||/\n$/.test(t.node.text))
if(this.index<this.top.children.length&&this.top.children[this.index].matchesHack())
this.index++;else
{
var e=document.createElement("br");
this.top.children.splice(this.index++,0,new yr(this.top,pr,e,null)),this.changed=!0;
}};
var Pr=Tn.safari||Tn.chrome&&Tn.chrome_version<63;
function Br(t,e){var n=t.docView.domFromPos(e,0),r=n.node,o=n.offset,i=o<r.childNodes.length?r.childNodes[o]:null,s=o?r.childNodes[o-1]:null;if(Tn.safari&&i&&"false"==i.contentEditable)
return Fr(i);if(!(i&&"false"!=i.contentEditable||s&&"false"!=s.contentEditable)){
if(i)
return Fr(i);
if(s)
return Fr(s);
}}
function Fr(t){return t.contentEditable="true",Tn.safari&&t.draggable&&(t.draggable=!1,t.wasDraggable=!0),t;}
function Hr(t){t.contentEditable="false",t.wasDraggable&&(t.draggable=!0,t.wasDraggable=null);}
function zr(t,e){if(e instanceof on){
var n=t.docView.descAt(e.from);
n!=t.lastSelectedViewDesc&&(jr(t),n&&n.selectNode(),t.lastSelectedViewDesc=n);
}else

jr(t);}
function jr(t){t.lastSelectedViewDesc&&(t.lastSelectedViewDesc.parent&&t.lastSelectedViewDesc.deselectNode(),t.lastSelectedViewDesc=null);}
function _r(t,e,n,r){return t.someProp("createSelectionBetween",function(r){return r(t,e,n);})||nn.between(e,n,r);}
function qr(t){var e=t.root.getSelection();if(!e.anchorNode)
return!1;try{
return t.dom.contains(3==e.anchorNode.nodeType?e.anchorNode.parentNode:e.anchorNode)&&(t.editable||t.dom.contains(3==e.focusNode.nodeType?e.focusNode.parentNode:e.focusNode));
}
catch(t){
return!1;
}}
function Vr(t,e){var n=t.selection,r=n.$anchor,o=n.$head,i=e>0?r.max(o):r.min(o),s=i.parent.inlineContent?i.depth?t.doc.resolve(e>0?i.after():i.before()):null:i;return s&&Ye.findFrom(s,e);}
function $r(t,e){return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()),!0;}
function Ur(t,e,n){var r=t.state.selection;if(!(r instanceof nn)){
if(r instanceof on&&r.node.isInline)
return $r(t,new nn(e>0?r.$to:r.$from));
var o=Vr(t.state,e);
return!!o&&$r(t,o);
}if(!r.empty||n.indexOf("s")>-1)
return!1;if(t.endOfTextblock(e>0?"right":"left")){
var i=Vr(t.state,e);
return!!(i&&i instanceof on)&&$r(t,i);
}if(!(Tn.mac&&n.indexOf("m")>-1)){
var s,a=r.$head,c=a.textOffset?null:e<0?a.nodeBefore:a.nodeAfter;
if(!c||c.isText)
return!1;
var l=e<0?a.pos-c.nodeSize:a.pos;
return!!(c.isAtom||(s=t.docView.descAt(l))&&!s.contentDOM)&&(on.isSelectable(c)?$r(t,new on(e<0?t.state.doc.resolve(a.pos-c.nodeSize):a)):!!Tn.webkit&&$r(t,new nn(t.state.doc.resolve(e<0?l:l+c.nodeSize))));
}}
function Wr(t){return 3==t.nodeType?t.nodeValue.length:t.childNodes.length;}
function Jr(t){var e=t.pmViewDesc;return e&&0==e.size&&(t.nextSibling||"BR"!=t.nodeName);}
function Gr(t){var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;if(n){
var o,i,s=!1;
for(Tn.gecko&&1==n.nodeType&&r<Wr(n)&&Jr(n.childNodes[r])&&(s=!0);;)
if(r>0){
if(1!=n.nodeType)
break;
var a=n.childNodes[r-1];
if(Jr(a))
o=n,i=--r;else
{
if(3!=a.nodeType)
break;
r=(n=a).nodeValue.length;
}
}else
{
if(Zr(n))
break;
for(var c=n.previousSibling;c&&Jr(c);)
o=n.parentNode,i=Dn(c),c=c.previousSibling;
if(c)
r=Wr(n=c);else
{
if((n=n.parentNode)==t.dom)
break;
r=0;
}
}
s?Xr(t,e,n,r):o&&Xr(t,e,o,i);
}}
function Kr(t){var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;if(n){
for(var o,i,s=Wr(n);;)
if(r<s){
if(1!=n.nodeType)
break;
if(!Jr(n.childNodes[r]))
break;
o=n,i=++r;
}else
{
if(Zr(n))
break;
for(var a=n.nextSibling;a&&Jr(a);)
o=a.parentNode,i=Dn(a)+1,a=a.nextSibling;
if(a)
r=0,s=Wr(n=a);else
{
if((n=n.parentNode)==t.dom)
break;
r=s=0;
}
}
o&&Xr(t,e,o,i);
}}
function Zr(t){var e=t.pmViewDesc;return e&&e.node&&e.node.isBlock;}
function Xr(t,e,n,r){if(zn(e)){
var o=document.createRange();
o.setEnd(n,r),o.setStart(n,r),e.removeAllRanges(),e.addRange(o);
}else

e.extend&&e.extend(n,r);t.domObserver.setCurSelection();var i=t.state;setTimeout(function(){t.state==i&&Rr(t);},50);}
function Qr(t,e,n){var r=t.state.selection;if(r instanceof nn&&!r.empty||n.indexOf("s")>-1)
return!1;if(Tn.mac&&n.indexOf("m")>-1)
return!1;var o=r.$from,i=r.$to;if(!o.parent.inlineContent||t.endOfTextblock(e<0?"up":"down")){
var s=Vr(t.state,e);
if(s&&s instanceof on)
return $r(t,s);
}if(!o.parent.inlineContent){
var a=e<0?o:i,c=r instanceof an?Ye.near(a,e):Ye.findFrom(a,e);
return!!c&&$r(t,c);
}return!1;}
function Yr(t,e){if(!(t.state.selection instanceof nn))
return!0;var n=t.state.selection,r=n.$head,o=n.$anchor,i=n.empty;if(!r.sameParent(o))
return!0;if(!i)
return!1;if(t.endOfTextblock(e>0?"forward":"backward"))
return!0;var s=!r.textOffset&&(e<0?r.nodeBefore:r.nodeAfter);if(s&&!s.isText){
var a=t.state.tr;
return e<0?a.delete(r.pos-s.nodeSize,r.pos):a.delete(r.pos,r.pos+s.nodeSize),t.dispatch(a),!0;
}return!1;}
function to(t,e,n){t.domObserver.stop(),e.contentEditable=n,t.domObserver.start();}
function eo(t,e){var n=e.keyCode,r=function(t){var e="";return t.ctrlKey&&(e+="c"),t.metaKey&&(e+="m"),t.altKey&&(e+="a"),t.shiftKey&&(e+="s"),e;}(e);return 8==n||Tn.mac&&72==n&&"c"==r?Yr(t,-1)||Gr(t):46==n||Tn.mac&&68==n&&"c"==r?Yr(t,1)||Kr(t):13==n||27==n||(37==n?Ur(t,-1,r)||Gr(t):39==n?Ur(t,1,r)||Kr(t):38==n?Qr(t,-1,r)||Gr(t):40==n?function(t){if(Tn.safari&&!(t.state.selection.$head.parentOffset>0)){
var e=t.root.getSelection(),n=e.focusNode,r=e.focusOffset;
if(n&&1==n.nodeType&&0==r&&n.firstChild&&"false"==n.firstChild.contentEditable){
var o=n.firstChild;
to(t,o,!0),setTimeout(function(){return to(t,o,!1);},20);
}
}}(t)||Qr(t,1,r)||Kr(t):r==(Tn.mac?"m":"c")&&(66==n||73==n||89==n||90==n));}
function no(t){var e=t.pmViewDesc;if(e)
return e.parseRule();if("BR"==t.nodeName&&t.parentNode){
if(Tn.safari&&/^(ul|ol)$/i.test(t.parentNode.nodeName)){
var n=document.createElement("div");
return n.appendChild(document.createElement("li")),{skip:n};
}
if(t.parentNode.lastChild==t||Tn.safari&&/^(tr|table)$/i.test(t.parentNode.nodeName))
return{ignore:!0};
}else
if("IMG"==t.nodeName&&t.getAttribute("mark-placeholder"))
return{ignore:!0};}
function ro(t,e,n,r,o){if(e<0){
var i=t.lastSelectionTime>Date.now()-50?t.lastSelectionOrigin:null,s=Lr(t,i);
if(s&&!t.state.selection.eq(s)){
var a=t.state.tr.setSelection(s);
"pointer"==i?a.setMeta("pointer",!0):"key"==i&&a.scrollIntoView(),t.dispatch(a);
}
}else
{
var c=t.state.doc.resolve(e),l=c.sharedDepth(n);
e=c.before(l+1),n=t.state.doc.resolve(n).after(l+1);
var u=t.state.selection,d=function(t,e,n){var r=t.docView.parseRange(e,n),o=r.node,i=r.fromOffset,s=r.toOffset,a=r.from,c=r.to,l=t.root.getSelection(),u=null,p=l.anchorNode;if(p&&t.dom.contains(1==p.nodeType?p:p.parentNode)&&(u=[{node:p,offset:l.anchorOffset}],zn(l)||u.push({node:l.focusNode,offset:l.focusOffset})),Tn.chrome&&8===t.lastKeyCode)
for(var d=s;d>i;d--){
var f=o.childNodes[d-1],h=f.pmViewDesc;
if("BR"==f.nodeName&&!h){
s=d;
break;
}
if(!h||h.size)
break;
}var m=t.state.doc,v=t.someProp("domParser")||ut.fromSchema(t.state.schema),g=m.resolve(a),y=null,b=v.parse(o,{topNode:g.parent,topMatch:g.parent.contentMatchAt(g.index()),topOpen:!0,from:i,to:s,preserveWhitespace:!g.parent.type.spec.code||"full",editableContent:!0,findPositions:u,ruleFromNode:no,context:g});if(u&&null!=u[0].pos){
var w=u[0].pos,k=u[1]&&u[1].pos;
null==k&&(k=w),y={anchor:w+a,head:k+a};
}return{doc:b,sel:y,from:a,to:c};}(t,e,n);
if(Tn.chrome&&t.cursorWrapper&&d.sel&&d.sel.anchor==t.cursorWrapper.deco.from){
var f=t.cursorWrapper.deco.type.toDOM.nextSibling,h=f&&f.nodeValue?f.nodeValue.length:1;
d.sel={anchor:d.sel.anchor+h,head:d.sel.anchor+h};
}
var m,v,g=t.state.doc,y=g.slice(d.from,d.to);
8===t.lastKeyCode&&Date.now()-100<t.lastKeyCodeTime?(m=t.state.selection.to,v="end"):(m=t.state.selection.from,v="start"),t.lastKeyCode=null;
var b=function(t,e,n,r,o){var i=t.findDiffStart(e,n);if(null==i)
return null;var s=t.findDiffEnd(e,n+t.size,n+e.size),a=s.a,c=s.b;if("end"==o){
r-=a+Math.max(0,i-Math.min(a,c))-i;
}if(a<i&&t.size<e.size){
c=(i-=r<=i&&r>=a?i-r:0)+(c-a),a=i;
}else
if(c<i){
a=(i-=r<=i&&r>=c?i-r:0)+(a-c),c=i;
}return{start:i,endA:a,endB:c};}(y.content,d.doc.content,d.from,m,v);
if(!b){
if(!(r&&u instanceof nn&&!u.empty&&u.$head.sameParent(u.$anchor))||t.composing||d.sel&&d.sel.anchor!=d.sel.head){
if((Tn.ios&&t.lastIOSEnter>Date.now()-225||Tn.android)&&o.some(function(t){return"DIV"==t.nodeName||"P"==t.nodeName;})&&t.someProp("handleKeyDown",function(e){return e(t,jn(13,"Enter"));}))
return void(t.lastIOSEnter=0);
if(d.sel){
var w=oo(t,t.state.doc,d.sel);
w&&!w.eq(t.state.selection)&&t.dispatch(t.state.tr.setSelection(w));
}
return;
}
b={start:u.from,endA:u.to,endB:u.to};
}
t.domChangeCount++,t.state.selection.from<t.state.selection.to&&b.start==b.endB&&t.state.selection instanceof nn&&(b.start>t.state.selection.from&&b.start<=t.state.selection.from+2?b.start=t.state.selection.from:b.endA<t.state.selection.to&&b.endA>=t.state.selection.to-2&&(b.endB+=t.state.selection.to-b.endA,b.endA=t.state.selection.to)),Tn.ie&&Tn.ie_version<=11&&b.endB==b.start+1&&b.endA==b.start&&b.start>d.from&&" 혻"==d.doc.textBetween(b.start-d.from-1,b.start-d.from+1)&&(b.start--,b.endA--,b.endB--);
var k,x=d.doc.resolveNoCache(b.start-d.from),C=d.doc.resolveNoCache(b.endB-d.from),T=x.sameParent(C)&&x.parent.inlineContent;
if((Tn.ios&&t.lastIOSEnter>Date.now()-225&&(!T||o.some(function(t){return"DIV"==t.nodeName||"P"==t.nodeName;}))||!T&&x.pos<d.doc.content.size&&(k=Ye.findFrom(d.doc.resolve(x.pos+1),1,!0))&&k.head==C.pos)&&t.someProp("handleKeyDown",function(e){return e(t,jn(13,"Enter"));}))
t.lastIOSEnter=0;else
if(t.state.selection.anchor>b.start&&function(t,e,n,r,o){if(!r.parent.isTextblock||n-e<=o.pos-r.pos||io(r,!0,!1)<o.pos)
return!1;var i=t.resolve(e);if(i.parentOffset<i.parent.content.size||!i.parent.isTextblock)
return!1;var s=t.resolve(io(i,!0,!0));if(!s.parent.isTextblock||s.pos>n||io(s,!0,!1)<n)
return!1;return r.parent.content.cut(r.parentOffset).eq(s.parent.content);}(g,b.start,b.endA,x,C)&&t.someProp("handleKeyDown",function(e){return e(t,jn(8,"Backspace"));}))
Tn.android&&Tn.chrome&&t.domObserver.suppressSelectionUpdates();else
{
Tn.chrome&&Tn.android&&b.toB==b.from&&(t.lastAndroidDelete=Date.now()),Tn.android&&!T&&x.start()!=C.start()&&0==C.parentOffset&&x.depth==C.depth&&d.sel&&d.sel.anchor==d.sel.head&&d.sel.head==b.endA&&(b.endB-=2,C=d.doc.resolveNoCache(b.endB-d.from),setTimeout(function(){t.someProp("handleKeyDown",function(e){return e(t,jn(13,"Enter"));});},20));
var M,S,E,N,O=b.start,D=b.endA;
if(T)
if(x.pos==C.pos)
Tn.ie&&Tn.ie_version<=11&&0==x.parentOffset&&(t.domObserver.suppressSelectionUpdates(),setTimeout(function(){return Rr(t);},20)),M=t.state.tr.delete(O,D),S=g.resolve(b.start).marksAcross(g.resolve(b.endA));else
if(b.endA==b.endB&&(N=g.resolve(b.start))&&(E=function(t,e){for(var n,r,o,i=t.firstChild.marks,s=e.firstChild.marks,a=i,c=s,l=0;l<s.length;l++)
a=s[l].removeFromSet(a);for(var u=0;u<i.length;u++)
c=i[u].removeFromSet(c);if(1==a.length&&0==c.length)
r=a[0],n="add",o=function(t){return t.mark(r.addToSet(t.marks));};else
{
if(0!=a.length||1!=c.length)
return null;
r=c[0],n="remove",o=function(t){return t.mark(r.removeFromSet(t.marks));};
}for(var d=[],f=0;f<e.childCount;f++)
d.push(o(e.child(f)));if(p.from(d).eq(t))
return{mark:r,type:n};}(x.parent.content.cut(x.parentOffset,C.parentOffset),N.parent.content.cut(N.parentOffset,b.endA-N.start()))))
M=t.state.tr,"add"==E.type?M.addMark(O,D,E.mark):M.removeMark(O,D,E.mark);else
if(x.parent.child(x.index()).isText&&x.index()==C.index()-(C.textOffset?0:1)){
var A=x.parent.textBetween(x.parentOffset,C.parentOffset);
if(t.someProp("handleTextInput",function(e){return e(t,O,D,A);}))
return;
M=t.state.tr.insertText(A,O,D);
}
if(M||(M=t.state.tr.replace(O,D,d.doc.slice(b.start-d.from,b.endB-d.from))),d.sel){
var L=oo(t,M.doc,d.sel);
L&&!(Tn.chrome&&Tn.android&&t.composing&&L.empty&&(b.start!=b.endB||t.lastAndroidDelete<Date.now()-100)&&(L.head==O||L.head==M.mapping.map(D)-1)||Tn.ie&&L.empty&&L.head==O)&&M.setSelection(L);
}
S&&M.ensureMarks(S),t.dispatch(M.scrollIntoView());
}
}}
function oo(t,e,n){return Math.max(n.anchor,n.head)>e.content.size?null:_r(t,e.resolve(n.anchor),e.resolve(n.head));}
function io(t,e,n){for(var r=t.depth,o=e?t.end():t.pos;r>0&&(e||t.indexAfter(r)==t.node(r).childCount);)
r--,o++,e=!1;if(n)
for(var i=t.node(r).maybeChild(t.indexAfter(r));i&&!i.isLeaf;)
i=i.firstChild,o++;return o;}
function so(t,e){for(var n=[],r=e.content,o=e.openStart,i=e.openEnd;o>1&&i>1&&1==r.childCount&&1==r.firstChild.childCount;){
o--,i--;
var s=r.firstChild;
n.push(s.type.name,s.attrs!=s.type.defaultAttrs?s.attrs:null),r=s.content;
}var a=t.someProp("clipboardSerializer")||kt.fromSchema(t.state.schema),c=mo(),l=c.createElement("div");l.appendChild(a.serializeFragment(r,{document:c}));for(var u,p=l.firstChild;p&&1==p.nodeType&&(u=fo[p.nodeName.toLowerCase()]);){
for(var d=u.length-1;d>=0;d--){
for(var f=c.createElement(u[d]);l.firstChild;)
f.appendChild(l.firstChild);
l.appendChild(f);
}
p=l.firstChild;
}return p&&1==p.nodeType&&p.setAttribute("data-pm-slice",o+" "+i+" "+JSON.stringify(n)),{dom:l,text:t.someProp("clipboardTextSerializer",function(t){return t(e);})||e.content.textBetween(0,e.content.size,"\n\n")};}
function ao(t,e,n,r,o){var i,s,a=o.parent.type.spec.code;if(!n&&!e)
return null;var c=e&&(r||a||!n);if(c){
if(t.someProp("transformPastedText",function(t){e=t(e,a||r);}),a)
return new y(p.from(t.state.schema.text(e.replace(/\r\n?/g,"\n"))),0,0);
var l=t.someProp("clipboardTextParser",function(t){return t(e,o,r);});
l?s=l:(i=document.createElement("div"),e.trim().split(/(?:\r\n?|\n)+/).forEach(function(t){i.appendChild(document.createElement("p")).textContent=t;}));
}else

t.someProp("transformPastedHTML",function(t){n=t(n);}),i=function(t){var e=/^(\s*<meta [^>]*>)*/.exec(t);e&&(t=t.slice(e[0].length));var n,r=mo().createElement("div"),o=/<([a-z][^>\s]+)/i.exec(t);(n=o&&fo[o[1].toLowerCase()])&&(t=n.map(function(t){return"<"+t+">";}).join("")+t+n.map(function(t){return"</"+t+">";}).reverse().join(""));if(r.innerHTML=t,n)
for(var i=0;i<n.length;i++)
r=r.querySelector(n[i])||r;return r;}(n);var u=i&&i.querySelector("[data-pm-slice]"),d=u&&/^(\d+) (\d+) (.*)/.exec(u.getAttribute("data-pm-slice"));if(!s){
var f=t.someProp("clipboardParser")||t.someProp("domParser")||ut.fromSchema(t.state.schema);
s=f.parseSlice(i,{preserveWhitespace:!(!c&&!d),context:o});
}return s=d?function(t,e){if(!t.size)
return t;var n,r=t.content.firstChild.type.schema;try{
n=JSON.parse(e);
}
catch(e){
return t;
}for(var o=t.content,i=t.openStart,s=t.openEnd,a=n.length-2;a>=0;a-=2){
var c=r.nodes[n[a]];
if(!c||c.hasRequiredAttrs())
break;
o=p.from(c.create(n[a+1],o)),i++,s++;
}return new y(o,i,s);}(function(t,e,n){e<t.openStart&&(t=new y(po(t.content,-1,e,t.openStart,0,t.openEnd),e,t.openEnd));n<t.openEnd&&(t=new y(po(t.content,1,n,t.openEnd,0,0),t.openStart,n));return t;}(s,+d[1],+d[2]),d[3]):y.maxOpen(function(t,e){if(t.childCount<2)
return t;for(var n=function(n){var r=e.node(n).contentMatchAt(e.index(n)),o=void 0,i=[];if(t.forEach(function(t){if(i){
var e,n=r.findWrapping(t.type);
if(!n)
return i=null;
if(e=i.length&&o.length&&lo(n,o,t,i[i.length-1],0))
i[i.length-1]=e;else
{
i.length&&(i[i.length-1]=uo(i[i.length-1],o.length));
var s=co(t,n);
i.push(s),r=r.matchType(s.type,s.attrs),o=n;
}
}}),i)
return{v:p.from(i)};},r=e.depth;r>=0;r--){
var o=n(r);
if(o)
return o.v;
}return t;}(s.content,o),!1),t.someProp("transformPasted",function(t){s=t(s);}),s;}
function co(t,e,n){void 0===n&&(n=0);for(var r=e.length-1;r>=n;r--)
t=e[r].create(null,p.from(t));return t;}
function lo(t,e,n,r,o){if(o<t.length&&o<e.length&&t[o]==e[o]){
var i=lo(t,e,n,r.lastChild,o+1);
if(i)
return r.copy(r.content.replaceChild(r.childCount-1,i));
if(r.contentMatchAt(r.childCount).matchType(o==t.length-1?n.type:t[o+1]))
return r.copy(r.content.append(p.from(co(n,t,o+1))));
}}
function uo(t,e){if(0==e)
return t;var n=t.content.replaceChild(t.childCount-1,uo(t.lastChild,e-1)),r=t.contentMatchAt(t.childCount).fillBefore(p.empty,!0);return t.copy(n.append(r));}
function po(t,e,n,r,o,i){var s=e<0?t.firstChild:t.lastChild,a=s.content;return o<r-1&&(a=po(a,e,n,r,o+1,i)),o>=n&&(a=e<0?s.contentMatchAt(0).fillBefore(a,t.childCount>1||i<=o).append(a):a.append(s.contentMatchAt(s.childCount).fillBefore(p.empty,!0))),t.replaceChild(e<0?0:t.childCount-1,s.copy(a));}
var fo={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]},ho=null;
function mo(){return ho||(ho=document.implementation.createHTMLDocument("title"));}
var vo={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},go=Tn.ie&&Tn.ie_version<=11,yo=function(){this.anchorNode=this.anchorOffset=this.focusNode=this.focusOffset=null;};
yo.prototype.set=function(t){this.anchorNode=t.anchorNode,this.anchorOffset=t.anchorOffset,this.focusNode=t.focusNode,this.focusOffset=t.focusOffset;},yo.prototype.eq=function(t){return t.anchorNode==this.anchorNode&&t.anchorOffset==this.anchorOffset&&t.focusNode==this.focusNode&&t.focusOffset==this.focusOffset;};
var bo=function(t,e){var n=this;this.view=t,this.handleDOMChange=e,this.queue=[],this.flushingSoon=-1,this.observer=window.MutationObserver&&new window.MutationObserver(function(t){for(var e=0;e<t.length;e++)
n.queue.push(t[e]);Tn.ie&&Tn.ie_version<=11&&t.some(function(t){return"childList"==t.type&&t.removedNodes.length||"characterData"==t.type&&t.oldValue.length>t.target.nodeValue.length;})?n.flushSoon():n.flush();}),this.currentSelection=new yo(),go&&(this.onCharData=function(t){n.queue.push({target:t.target,type:"characterData",oldValue:t.prevValue}),n.flushSoon();}),this.onSelectionChange=this.onSelectionChange.bind(this),this.suppressingSelectionUpdates=!1;};
bo.prototype.flushSoon=function(){var t=this;this.flushingSoon<0&&(this.flushingSoon=window.setTimeout(function(){t.flushingSoon=-1,t.flush();},20));},bo.prototype.forceFlush=function(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush());},bo.prototype.start=function(){this.observer&&this.observer.observe(this.view.dom,vo),go&&this.view.dom.addEventListener("DOMCharacterDataModified",this.onCharData),this.connectSelection();},bo.prototype.stop=function(){var t=this;if(this.observer){
var e=this.observer.takeRecords();
if(e.length){
for(var n=0;n<e.length;n++)
this.queue.push(e[n]);
window.setTimeout(function(){return t.flush();},20);
}
this.observer.disconnect();
}go&&this.view.dom.removeEventListener("DOMCharacterDataModified",this.onCharData),this.disconnectSelection();},bo.prototype.connectSelection=function(){this.view.dom.ownerDocument.addEventListener("selectionchange",this.onSelectionChange);},bo.prototype.disconnectSelection=function(){this.view.dom.ownerDocument.removeEventListener("selectionchange",this.onSelectionChange);},bo.prototype.suppressSelectionUpdates=function(){var t=this;this.suppressingSelectionUpdates=!0,setTimeout(function(){return t.suppressingSelectionUpdates=!1;},50);},bo.prototype.onSelectionChange=function(){if((!(t=this.view).editable||t.root.activeElement==t.dom)&&qr(t)){
var t;
if(this.suppressingSelectionUpdates)
return Rr(this.view);
if(Tn.ie&&Tn.ie_version<=11&&!this.view.state.selection.empty){
var e=this.view.root.getSelection();
if(e.focusNode&&Rn(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset))
return this.flushSoon();
}
this.flush();
}},bo.prototype.setCurSelection=function(){this.currentSelection.set(this.view.root.getSelection());},bo.prototype.ignoreSelectionChange=function(t){if(0==t.rangeCount)
return!0;var e=t.getRangeAt(0).commonAncestorContainer,n=this.view.docView.nearestDesc(e);return n&&n.ignoreMutation({type:"selection",target:3==e.nodeType?e.parentNode:e})?(this.setCurSelection(),!0):void 0;},bo.prototype.flush=function(){if(this.view.docView&&!(this.flushingSoon>-1)){
var t=this.observer?this.observer.takeRecords():[];
this.queue.length&&(t=this.queue.concat(t),this.queue.length=0);
var e=this.view.root.getSelection(),n=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(e)&&qr(this.view)&&!this.ignoreSelectionChange(e),r=-1,o=-1,i=!1,s=[];
if(this.view.editable)
for(var a=0;a<t.length;a++){
var c=this.registerMutation(t[a],s);
c&&(r=r<0?c.from:Math.min(c.from,r),o=o<0?c.to:Math.max(c.to,o),c.typeOver&&(i=!0));
}
if(Tn.gecko&&s.length>1){
var l=s.filter(function(t){return"BR"==t.nodeName;});
if(2==l.length){
var u=l[0],p=l[1];
u.parentNode&&u.parentNode.parentNode==p.parentNode?p.remove():u.remove();
}
}
(r>-1||n)&&(r>-1&&(this.view.docView.markDirty(r,o),function(t){if(wo)
return;wo=!0,"normal"==getComputedStyle(t.dom).whiteSpace&&console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.");}(this.view)),this.handleDOMChange(r,o,i,s),this.view.docView.dirty?this.view.updateState(this.view.state):this.currentSelection.eq(e)||Rr(this.view),this.currentSelection.set(e));
}},bo.prototype.registerMutation=function(t,e){if(e.indexOf(t.target)>-1)
return null;var n=this.view.docView.nearestDesc(t.target);if("attributes"==t.type&&(n==this.view.docView||"contenteditable"==t.attributeName||"style"==t.attributeName&&!t.oldValue&&!t.target.getAttribute("style")))
return null;if(!n||n.ignoreMutation(t))
return null;if("childList"==t.type){
for(var r=0;r<t.addedNodes.length;r++)
e.push(t.addedNodes[r]);
if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(t.target))
return{from:n.posBefore,to:n.posAfter};
var o=t.previousSibling,i=t.nextSibling;
if(Tn.ie&&Tn.ie_version<=11&&t.addedNodes.length)
for(var s=0;s<t.addedNodes.length;s++){
var a=t.addedNodes[s],c=a.previousSibling,l=a.nextSibling;
(!c||Array.prototype.indexOf.call(t.addedNodes,c)<0)&&(o=c),(!l||Array.prototype.indexOf.call(t.addedNodes,l)<0)&&(i=l);
}
var u=o&&o.parentNode==t.target?Dn(o)+1:0,p=n.localPosFromDOM(t.target,u,-1),d=i&&i.parentNode==t.target?Dn(i):t.target.childNodes.length;
return{from:p,to:n.localPosFromDOM(t.target,d,1)};
}return"attributes"==t.type?{from:n.posAtStart-n.border,to:n.posAtEnd+n.border}:{from:n.posAtStart,to:n.posAtEnd,typeOver:t.target.nodeValue==t.oldValue};};
var wo=!1;
var ko={},xo={};
function Co(t,e){t.lastSelectionOrigin=e,t.lastSelectionTime=Date.now();}
function To(t){t.someProp("handleDOMEvents",function(e){for(var n in e)
t.eventHandlers[n]||t.dom.addEventListener(n,t.eventHandlers[n]=function(e){return Mo(t,e);});});}
function Mo(t,e){return t.someProp("handleDOMEvents",function(n){var r=n[e.type];return!!r&&(r(t,e)||e.defaultPrevented);});}
function So(t){return{left:t.clientX,top:t.clientY};}
function Eo(t,e,n,r,o){if(-1==r)
return!1;for(var i=t.state.doc.resolve(r),s=function(r){if(t.someProp(e,function(e){return r>i.depth?e(t,n,i.nodeAfter,i.before(r),o,!0):e(t,n,i.node(r),i.before(r),o,!1);}))
return{v:!0};},a=i.depth+1;a>0;a--){
var c=s(a);
if(c)
return c.v;
}return!1;}
function No(t,e,n){t.focused||t.focus();var r=t.state.tr.setSelection(e);"pointer"==n&&r.setMeta("pointer",!0),t.dispatch(r);}
function Oo(t,e,n,r,o){return Eo(t,"handleClickOn",e,n,r)||t.someProp("handleClick",function(n){return n(t,e,r);})||(o?function(t,e){if(-1==e)
return!1;var n,r,o=t.state.selection;o instanceof on&&(n=o.node);for(var i=t.state.doc.resolve(e),s=i.depth+1;s>0;s--){
var a=s>i.depth?i.nodeAfter:i.node(s);
if(on.isSelectable(a)){
r=n&&o.$from.depth>0&&s>=o.$from.depth&&i.before(o.$from.depth+1)==o.$from.pos?i.before(o.$from.depth):i.before(s);
break;
}
}return null!=r&&(No(t,on.create(t.state.doc,r),"pointer"),!0);}(t,n):function(t,e){if(-1==e)
return!1;var n=t.state.doc.resolve(e),r=n.nodeAfter;return!!(r&&r.isAtom&&on.isSelectable(r))&&(No(t,new on(n),"pointer"),!0);}(t,n));}
function Do(t,e,n,r){return Eo(t,"handleDoubleClickOn",e,n,r)||t.someProp("handleDoubleClick",function(n){return n(t,e,r);});}
function Ao(t,e,n,r){return Eo(t,"handleTripleClickOn",e,n,r)||t.someProp("handleTripleClick",function(n){return n(t,e,r);})||function(t,e){var n=t.state.doc;if(-1==e)
return!!n.inlineContent&&(No(t,nn.create(n,0,n.content.size),"pointer"),!0);for(var r=n.resolve(e),o=r.depth+1;o>0;o--){
var i=o>r.depth?r.nodeAfter:r.node(o),s=r.before(o);
if(i.inlineContent)
No(t,nn.create(n,s+1,s+1+i.content.size),"pointer");else
{
if(!on.isSelectable(i))
continue;
No(t,on.create(n,s),"pointer");
}
return!0;
}}(t,n);}
function Lo(t){return zo(t);}
xo.keydown=function(t,e){if(t.shiftKey=16==e.keyCode||e.shiftKey,!Po(t,e))
if(t.domObserver.forceFlush(),t.lastKeyCode=e.keyCode,t.lastKeyCodeTime=Date.now(),!Tn.ios||13!=e.keyCode||e.ctrlKey||e.altKey||e.metaKey)
t.someProp("handleKeyDown",function(n){return n(t,e);})||eo(t,e)?e.preventDefault():Co(t,"key");else
{
var n=Date.now();
t.lastIOSEnter=n,t.lastIOSEnterFallbackTimeout=setTimeout(function(){t.lastIOSEnter==n&&(t.someProp("handleKeyDown",function(e){return e(t,jn(13,"Enter"));}),t.lastIOSEnter=0);},200);
}},xo.keyup=function(t,e){16==e.keyCode&&(t.shiftKey=!1);},xo.keypress=function(t,e){if(!(Po(t,e)||!e.charCode||e.ctrlKey&&!e.altKey||Tn.mac&&e.metaKey))
if(t.someProp("handleKeyPress",function(n){return n(t,e);}))
e.preventDefault();else
{
var n=t.state.selection;
if(!(n instanceof nn&&n.$from.sameParent(n.$to))){
var r=String.fromCharCode(e.charCode);
t.someProp("handleTextInput",function(e){return e(t,n.$from.pos,n.$to.pos,r);})||t.dispatch(t.state.tr.insertText(r).scrollIntoView()),e.preventDefault();
}
}};
var Io=Tn.mac?"metaKey":"ctrlKey";
ko.mousedown=function(t,e){t.shiftKey=e.shiftKey;var n=Lo(t),r=Date.now(),o="singleClick";r-t.lastClick.time<500&&function(t,e){var n=e.x-t.clientX,r=e.y-t.clientY;return n*n+r*r<100;}(e,t.lastClick)&&!e[Io]&&("singleClick"==t.lastClick.type?o="doubleClick":"doubleClick"==t.lastClick.type&&(o="tripleClick")),t.lastClick={time:r,x:e.clientX,y:e.clientY,type:o};var i=t.posAtCoords(So(e));i&&("singleClick"==o?(t.mouseDown&&t.mouseDown.done(),t.mouseDown=new Ro(t,i,e,n)):("doubleClick"==o?Do:Ao)(t,i.pos,i.inside,e)?e.preventDefault():Co(t,"pointer"));};
var Ro=function(t,e,n,r){var o,i,s=this;if(this.view=t,this.startDoc=t.state.doc,this.pos=e,this.event=n,this.flushed=r,this.selectNode=n[Io],this.allowDefault=n.shiftKey,e.inside>-1)
o=t.state.doc.nodeAt(e.inside),i=e.inside;else
{
var a=t.state.doc.resolve(e.pos);
o=a.parent,i=a.depth?a.before():0;
}this.mightDrag=null;var c=r?null:n.target,l=c?t.docView.nearestDesc(c,!0):null;this.target=l?l.dom:null;var u=t.state.selection;(o.type.spec.draggable&&!1!==o.type.spec.selectable||u instanceof on&&u.from<=i&&u.to>i)&&(this.mightDrag={node:o,pos:i,addAttr:this.target&&!this.target.draggable,setUneditable:this.target&&Tn.gecko&&!this.target.hasAttribute("contentEditable")}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(function(){s.view.mouseDown==s&&s.target.setAttribute("contentEditable","false");},20),this.view.domObserver.start()),t.root.addEventListener("mouseup",this.up=this.up.bind(this)),t.root.addEventListener("mousemove",this.move=this.move.bind(this)),Co(t,"pointer");};
function Po(t,e){return!!t.composing||!!(Tn.safari&&Math.abs(e.timeStamp-t.compositionEndedAt)<500)&&(t.compositionEndedAt=-2e8,!0);}
Ro.prototype.done=function(){this.view.root.removeEventListener("mouseup",this.up),this.view.root.removeEventListener("mousemove",this.move),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute("draggable"),this.mightDrag.setUneditable&&this.target.removeAttribute("contentEditable"),this.view.domObserver.start()),this.view.mouseDown=null;},Ro.prototype.up=function(t){if(this.done(),this.view.dom.contains(3==t.target.nodeType?t.target.parentNode:t.target)){
var e=this.pos;
this.view.state.doc!=this.startDoc&&(e=this.view.posAtCoords(So(t))),this.allowDefault||!e?Co(this.view,"pointer"):Oo(this.view,e.pos,e.inside,t,this.selectNode)?t.preventDefault():this.flushed||Tn.safari&&this.mightDrag&&!this.mightDrag.node.isAtom||Tn.chrome&&!(this.view.state.selection instanceof nn)&&Math.min(Math.abs(e.pos-this.view.state.selection.from),Math.abs(e.pos-this.view.state.selection.to))<=2?(No(this.view,Ye.near(this.view.state.doc.resolve(e.pos)),"pointer"),t.preventDefault()):Co(this.view,"pointer");
}},Ro.prototype.move=function(t){!this.allowDefault&&(Math.abs(this.event.x-t.clientX)>4||Math.abs(this.event.y-t.clientY)>4)&&(this.allowDefault=!0),Co(this.view,"pointer"),0==t.buttons&&this.done();},ko.touchdown=function(t){Lo(t),Co(t,"pointer");},ko.contextmenu=function(t){return Lo(t);};
var Bo=Tn.android?5e3:-1;
function Fo(t,e){clearTimeout(t.composingTimeout),e>-1&&(t.composingTimeout=setTimeout(function(){return zo(t);},e));}
function Ho(t){for(t.composing=!1;t.compositionNodes.length>0;)
t.compositionNodes.pop().markParentsDirty();}
function zo(t,e){if(t.domObserver.forceFlush(),Ho(t),e||t.docView.dirty){
var n=Lr(t);
return n&&!n.eq(t.state.selection)?t.dispatch(t.state.tr.setSelection(n)):t.updateState(t.state),!0;
}return!1;}
xo.compositionstart=xo.compositionupdate=function(t){if(!t.composing){
t.domObserver.flush();
var e=t.state,n=e.selection.$from;
if(e.selection.empty&&(e.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some(function(t){return!1===t.type.spec.inclusive;})))
t.markCursor=t.state.storedMarks||n.marks(),zo(t,!0),t.markCursor=null;else
if(zo(t),Tn.gecko&&e.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length)
for(var r=t.root.getSelection(),o=r.focusNode,i=r.focusOffset;o&&1==o.nodeType&&0!=i;){
var s=i<0?o.lastChild:o.childNodes[i-1];
if(!s)
break;
if(3==s.nodeType){
r.collapse(s,s.nodeValue.length);
break;
}
o=s,i=-1;
}
t.composing=!0;
}Fo(t,Bo);},xo.compositionend=function(t,e){t.composing&&(t.composing=!1,t.compositionEndedAt=e.timeStamp,Fo(t,20));};
var jo=Tn.ie&&Tn.ie_version<15||Tn.ios&&Tn.webkit_version<604;
function _o(t,e,n,r){var o=ao(t,e,n,t.shiftKey,t.state.selection.$from);if(t.someProp("handlePaste",function(e){return e(t,r,o||y.empty);}))
return!0;if(!o)
return!1;var i=function(t){return 0==t.openStart&&0==t.openEnd&&1==t.content.childCount?t.content.firstChild:null;}(o),s=i?t.state.tr.replaceSelectionWith(i,t.shiftKey):t.state.tr.replaceSelection(o);return t.dispatch(s.scrollIntoView().setMeta("paste",!0).setMeta("uiEvent","paste")),!0;}
ko.copy=xo.cut=function(t,e){var n=t.state.selection,r="cut"==e.type;if(!n.empty){
var o=jo?null:e.clipboardData,i=so(t,n.content()),s=i.dom,a=i.text;
o?(e.preventDefault(),o.clearData(),o.setData("text/html",s.innerHTML),o.setData("text/plain",a)):function(t,e){if(t.dom.parentNode){
var n=t.dom.parentNode.appendChild(document.createElement("div"));
n.appendChild(e),n.style.cssText="position: fixed; left: -10000px; top: 10px";
var r=getSelection(),o=document.createRange();
o.selectNodeContents(e),t.dom.blur(),r.removeAllRanges(),r.addRange(o),setTimeout(function(){n.parentNode&&n.parentNode.removeChild(n),t.focus();},50);
}}(t,s),r&&t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent","cut"));
}},xo.paste=function(t,e){var n=jo?null:e.clipboardData;n&&_o(t,n.getData("text/plain"),n.getData("text/html"),e)?e.preventDefault():function(t,e){if(t.dom.parentNode){
var n=t.shiftKey||t.state.selection.$from.parent.type.spec.code,r=t.dom.parentNode.appendChild(document.createElement(n?"textarea":"div"));
n||(r.contentEditable="true"),r.style.cssText="position: fixed; left: -10000px; top: 10px",r.focus(),setTimeout(function(){t.focus(),r.parentNode&&r.parentNode.removeChild(r),n?_o(t,r.value,null,e):_o(t,r.textContent,r.innerHTML,e);},50);
}}(t,e);};
var qo=function(t,e){this.slice=t,this.move=e;},Vo=Tn.mac?"altKey":"ctrlKey";
for(var $o in ko.dragstart=function(t,e){var n=t.mouseDown;if(n&&n.done(),e.dataTransfer){
var r=t.state.selection,o=r.empty?null:t.posAtCoords(So(e));
if(o&&o.pos>=r.from&&o.pos<=(r instanceof on?r.to-1:r.to))
;else
if(n&&n.mightDrag)
t.dispatch(t.state.tr.setSelection(on.create(t.state.doc,n.mightDrag.pos)));else
if(e.target&&1==e.target.nodeType){
var i=t.docView.nearestDesc(e.target,!0);
if(!i||!i.node.type.spec.draggable||i==t.docView)
return;
t.dispatch(t.state.tr.setSelection(on.create(t.state.doc,i.posBefore)));
}
var s=t.state.selection.content(),a=so(t,s),c=a.dom,l=a.text;
e.dataTransfer.clearData(),e.dataTransfer.setData(jo?"Text":"text/html",c.innerHTML),e.dataTransfer.effectAllowed="copyMove",jo||e.dataTransfer.setData("text/plain",l),t.dragging=new qo(s,!e[Vo]);
}},ko.dragend=function(t){var e=t.dragging;window.setTimeout(function(){t.dragging==e&&(t.dragging=null);},50);},xo.dragover=xo.dragenter=function(t,e){return e.preventDefault();},xo.drop=function(t,e){var n=t.dragging;if(t.dragging=null,e.dataTransfer){
var r=t.posAtCoords(So(e));
if(r){
var o=t.state.doc.resolve(r.pos);
if(o){
var i=n&&n.slice;
i?t.someProp("transformPasted",function(t){i=t(i);}):i=ao(t,e.dataTransfer.getData(jo?"Text":"text/plain"),jo?null:e.dataTransfer.getData("text/html"),!1,o);
var s=n&&!e[Vo];
if(t.someProp("handleDrop",function(n){return n(t,e,i||y.empty,s);}))
e.preventDefault();else
if(i){
e.preventDefault();
var a=i?function(t,e,n){var r=t.resolve(e);if(!n.content.size)
return e;for(var o=n.content,i=0;i<n.openStart;i++)
o=o.firstChild.content;for(var s=1;s<=(0==n.openStart&&n.size?2:1);s++)
for(var a=r.depth;a>=0;a--){
var c=a==r.depth?0:r.pos<=(r.start(a+1)+r.end(a+1))/2?-1:1,l=r.index(a)+(c>0?1:0);
if(1==s?r.node(a).canReplace(l,l,o):r.node(a).contentMatchAt(l).findWrapping(o.firstChild.type))
return 0==c?r.pos:c<0?r.before(a+1):r.after(a+1);
}return null;}(t.state.doc,o.pos,i):o.pos;
null==a&&(a=o.pos);
var c=t.state.tr;
s&&c.deleteSelection();
var l=c.mapping.map(a),u=0==i.openStart&&0==i.openEnd&&1==i.content.childCount,p=c.doc;
if(u?c.replaceRangeWith(l,l,i.content.firstChild):c.replaceRange(l,l,i),!c.doc.eq(p)){
var d=c.doc.resolve(l);
if(u&&on.isSelectable(i.content.firstChild)&&d.nodeAfter&&d.nodeAfter.sameMarkup(i.content.firstChild))
c.setSelection(new on(d));else
{
var f=c.mapping.map(a);
c.mapping.maps[c.mapping.maps.length-1].forEach(function(t,e,n,r){return f=r;}),c.setSelection(_r(t,d,c.doc.resolve(f)));
}
t.focus(),t.dispatch(c.setMeta("uiEvent","drop"));
}
}
}
}
}},ko.focus=function(t){t.focused||(t.domObserver.stop(),t.dom.classList.add("ProseMirror-focused"),t.domObserver.start(),t.focused=!0,setTimeout(function(){t.docView&&t.hasFocus()&&!t.domObserver.currentSelection.eq(t.root.getSelection())&&Rr(t);},20));},ko.blur=function(t){t.focused&&(t.domObserver.stop(),t.dom.classList.remove("ProseMirror-focused"),t.domObserver.start(),t.domObserver.currentSelection.set({}),t.focused=!1);},ko.beforeinput=function(t,e){if(Tn.chrome&&Tn.android&&"deleteContentBackward"==e.inputType){
var n=t.domChangeCount;
setTimeout(function(){if(t.domChangeCount==n&&(t.dom.blur(),t.focus(),!t.someProp("handleKeyDown",function(e){return e(t,jn(8,"Backspace"));}))){
var e=t.state.selection.$cursor;
e&&e.pos>0&&t.dispatch(t.state.tr.delete(e.pos-1,e.pos).scrollIntoView());
}},50);
}},xo)
ko[$o]=xo[$o];
function Uo(t,e){if(t==e)
return!0;for(var n in t)
if(t[n]!==e[n])
return!1;for(var r in e)
if(!(r in t))
return!1;return!0;}
var Wo=function(t,e){this.spec=e||Qo,this.side=this.spec.side||0,this.toDOM=t;};
Wo.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,this.side<0?-1:1),i=o.pos;return o.deleted?null:new Ko(i-n,i-n,this);},Wo.prototype.valid=function(){return!0;},Wo.prototype.eq=function(t){return this==t||t instanceof Wo&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&Uo(this.spec,t.spec));};
var Jo=function(t,e){this.spec=e||Qo,this.attrs=t;};
Jo.prototype.map=function(t,e,n,r){var o=t.map(e.from+r,this.spec.inclusiveStart?-1:1)-n,i=t.map(e.to+r,this.spec.inclusiveEnd?1:-1)-n;return o>=i?null:new Ko(o,i,this);},Jo.prototype.valid=function(t,e){return e.from<e.to;},Jo.prototype.eq=function(t){return this==t||t instanceof Jo&&Uo(this.attrs,t.attrs)&&Uo(this.spec,t.spec);},Jo.is=function(t){return t.type instanceof Jo;};
var Go=function(t,e){this.spec=e||Qo,this.attrs=t;};
Go.prototype.map=function(t,e,n,r){var o=t.mapResult(e.from+r,1);if(o.deleted)
return null;var i=t.mapResult(e.to+r,-1);return i.deleted||i.pos<=o.pos?null:new Ko(o.pos-n,i.pos-n,this);},Go.prototype.valid=function(t,e){var n=t.content.findIndex(e.from),r=n.index,o=n.offset;return o==e.from&&o+t.child(r).nodeSize==e.to;},Go.prototype.eq=function(t){return this==t||t instanceof Go&&Uo(this.attrs,t.attrs)&&Uo(this.spec,t.spec);};
var Ko=function(t,e,n){this.from=t,this.to=e,this.type=n;},Zo={spec:{configurable:!0},inline:{configurable:!0}};
Ko.prototype.copy=function(t,e){return new Ko(t,e,this.type);},Ko.prototype.eq=function(t,e){return void 0===e&&(e=0),this.type.eq(t.type)&&this.from+e==t.from&&this.to+e==t.to;},Ko.prototype.map=function(t,e,n){return this.type.map(t,this,e,n);},Ko.widget=function(t,e,n){return new Ko(t,t,new Wo(e,n));},Ko.inline=function(t,e,n,r){return new Ko(t,e,new Jo(n,r));},Ko.node=function(t,e,n,r){return new Ko(t,e,new Go(n,r));},Zo.spec.get=function(){return this.type.spec;},Zo.inline.get=function(){return this.type instanceof Jo;},Object.defineProperties(Ko.prototype,Zo);
var Xo=[],Qo={},Yo=function(t,e){this.local=t&&t.length?t:Xo,this.children=e&&e.length?e:Xo;};
Yo.create=function(t,e){return e.length?ii(e,t,0,Qo):ti;},Yo.prototype.find=function(t,e,n){var r=[];return this.findInner(null==t?0:t,null==e?1e9:e,r,0,n),r;},Yo.prototype.findInner=function(t,e,n,r,o){for(var i=0;i<this.local.length;i++){
var s=this.local[i];
s.from<=e&&s.to>=t&&(!o||o(s.spec))&&n.push(s.copy(s.from+r,s.to+r));
}for(var a=0;a<this.children.length;a+=3)
if(this.children[a]<e&&this.children[a+1]>t){
var c=this.children[a]+1;
this.children[a+2].findInner(t-c,e-c,n,r+c,o);
}},Yo.prototype.map=function(t,e,n){return this==ti||0==t.maps.length?this:this.mapInner(t,e,0,0,n||Qo);},Yo.prototype.mapInner=function(t,e,n,r,o){for(var i,s=0;s<this.local.length;s++){
var a=this.local[s].map(t,n,r);
a&&a.type.valid(e,a)?(i||(i=[])).push(a):o.onRemove&&o.onRemove(this.local[s].spec);
}return this.children.length?function(t,e,n,r,o,i,s){for(var a=t.slice(),c=function(t,e,n,r){for(var s=0;s<a.length;s+=3){
var c=a[s+1],l=void 0;
-1==c||t>c+i||(e>=a[s]+i?a[s+1]=-1:n>=o&&(l=r-n-(e-t))&&(a[s]+=l,a[s+1]+=l));
}},l=0;l<n.maps.length;l++)
n.maps[l].forEach(c);for(var u=!1,p=0;p<a.length;p+=3)
if(-1==a[p+1]){
var d=n.map(t[p]+i),f=d-o;
if(f<0||f>=r.content.size){
u=!0;
continue;
}
var h=n.map(t[p+1]+i,-1)-o,m=r.content.findIndex(f),v=m.index,g=m.offset,y=r.maybeChild(v);
if(y&&g==f&&g+y.nodeSize==h){
var b=a[p+2].mapInner(n,y,d+1,t[p]+i+1,s);
b!=ti?(a[p]=f,a[p+1]=h,a[p+2]=b):(a[p+1]=-2,u=!0);
}else

u=!0;
}if(u){
var w=function(t,e,n,r,o,i,s){function a(t,e){for(var i=0;i<t.local.length;i++){
var c=t.local[i].map(r,o,e);
c?n.push(c):s.onRemove&&s.onRemove(t.local[i].spec);
}for(var l=0;l<t.children.length;l+=3)
a(t.children[l+2],t.children[l]+e+1);}for(var c=0;c<t.length;c+=3)
-1==t[c+1]&&a(t[c+2],e[c]+i+1);return n;}(a,t,e||[],n,o,i,s),k=ii(w,r,0,s);
e=k.local;
for(var x=0;x<a.length;x+=3)
a[x+1]<0&&(a.splice(x,3),x-=3);
for(var C=0,T=0;C<k.children.length;C+=3){
for(var M=k.children[C];T<a.length&&a[T]<M;)
T+=3;
a.splice(T,0,k.children[C],k.children[C+1],k.children[C+2]);
}
}return new Yo(e&&e.sort(si),a);}(this.children,i,t,e,n,r,o):i?new Yo(i.sort(si)):ti;},Yo.prototype.add=function(t,e){return e.length?this==ti?Yo.create(t,e):this.addInner(t,e,0):this;},Yo.prototype.addInner=function(t,e,n){var r,o=this,i=0;t.forEach(function(t,s){var a,c=s+n;if(a=ri(e,t,c)){
for(r||(r=o.children.slice());i<r.length&&r[i]<s;)
i+=3;
r[i]==s?r[i+2]=r[i+2].addInner(t,a,c+1):r.splice(i,0,s,s+t.nodeSize,ii(a,t,c+1,Qo)),i+=3;
}});for(var s=ni(i?oi(e):e,-n),a=0;a<s.length;a++)
s[a].type.valid(t,s[a])||s.splice(a--,1);return new Yo(s.length?this.local.concat(s).sort(si):this.local,r||this.children);},Yo.prototype.remove=function(t){return 0==t.length||this==ti?this:this.removeInner(t,0);},Yo.prototype.removeInner=function(t,e){for(var n=this.children,r=this.local,o=0;o<n.length;o+=3){
for(var i=void 0,s=n[o]+e,a=n[o+1]+e,c=0,l=void 0;c<t.length;c++)
(l=t[c])&&l.from>s&&l.to<a&&(t[c]=null,(i||(i=[])).push(l));
if(i){
n==this.children&&(n=this.children.slice());
var u=n[o+2].removeInner(i,s+1);
u!=ti?n[o+2]=u:(n.splice(o,3),o-=3);
}
}if(r.length)
for(var p=0,d=void 0;p<t.length;p++)
if(d=t[p])
for(var f=0;f<r.length;f++)
r[f].eq(d,e)&&(r==this.local&&(r=this.local.slice()),r.splice(f--,1));return n==this.children&&r==this.local?this:r.length||n.length?new Yo(r,n):ti;},Yo.prototype.forChild=function(t,e){if(this==ti)
return this;if(e.isLeaf)
return Yo.empty;for(var n,r,o=0;o<this.children.length;o+=3)
if(this.children[o]>=t){
this.children[o]==t&&(n=this.children[o+2]);
break;
}for(var i=t+1,s=i+e.content.size,a=0;a<this.local.length;a++){
var c=this.local[a];
if(c.from<s&&c.to>i&&c.type instanceof Jo){
var l=Math.max(i,c.from)-i,u=Math.min(s,c.to)-i;
l<u&&(r||(r=[])).push(c.copy(l,u));
}
}if(r){
var p=new Yo(r.sort(si));
return n?new ei([p,n]):p;
}return n||ti;},Yo.prototype.eq=function(t){if(this==t)
return!0;if(!(t instanceof Yo)||this.local.length!=t.local.length||this.children.length!=t.children.length)
return!1;for(var e=0;e<this.local.length;e++)
if(!this.local[e].eq(t.local[e]))
return!1;for(var n=0;n<this.children.length;n+=3)
if(this.children[n]!=t.children[n]||this.children[n+1]!=t.children[n+1]||!this.children[n+2].eq(t.children[n+2]))
return!1;return!0;},Yo.prototype.locals=function(t){return ai(this.localsInner(t));},Yo.prototype.localsInner=function(t){if(this==ti)
return Xo;if(t.inlineContent||!this.local.some(Jo.is))
return this.local;for(var e=[],n=0;n<this.local.length;n++)
this.local[n].type instanceof Jo||e.push(this.local[n]);return e;};
var ti=new Yo();
Yo.empty=ti,Yo.removeOverlap=ai;
var ei=function(t){this.members=t;};
function ni(t,e){if(!e||!t.length)
return t;for(var n=[],r=0;r<t.length;r++){
var o=t[r];
n.push(new Ko(o.from+e,o.to+e,o.type));
}return n;}
function ri(t,e,n){if(e.isLeaf)
return null;for(var r=n+e.nodeSize,o=null,i=0,s=void 0;i<t.length;i++)
(s=t[i])&&s.from>n&&s.to<r&&((o||(o=[])).push(s),t[i]=null);return o;}
function oi(t){for(var e=[],n=0;n<t.length;n++)
null!=t[n]&&e.push(t[n]);return e;}
function ii(t,e,n,r){var o=[],i=!1;e.forEach(function(e,s){var a=ri(t,e,s+n);if(a){
i=!0;
var c=ii(a,e,n+s+1,r);
c!=ti&&o.push(s,s+e.nodeSize,c);
}});for(var s=ni(i?oi(t):t,-n).sort(si),a=0;a<s.length;a++)
s[a].type.valid(e,s[a])||(r.onRemove&&r.onRemove(s[a].spec),s.splice(a--,1));return s.length||o.length?new Yo(s,o):ti;}
function si(t,e){return t.from-e.from||t.to-e.to;}
function ai(t){for(var e=t,n=0;n<e.length-1;n++){
var r=e[n];
if(r.from!=r.to)
for(var o=n+1;o<e.length;o++){
var i=e[o];
if(i.from!=r.from){
i.from<r.to&&(e==t&&(e=t.slice()),e[n]=r.copy(r.from,i.from),ci(e,o,r.copy(i.from,r.to)));
break;
}
i.to!=r.to&&(e==t&&(e=t.slice()),e[o]=i.copy(i.from,r.to),ci(e,o+1,i.copy(r.to,i.to)));
}
}return e;}
function ci(t,e,n){for(;e<t.length&&si(n,t[e])>0;)
e++;t.splice(e,0,n);}
function li(t){var e=[];return t.someProp("decorations",function(n){var r=n(t.state);r&&r!=ti&&e.push(r);}),t.cursorWrapper&&e.push(Yo.create(t.state.doc,[t.cursorWrapper.deco])),ei.from(e);}
ei.prototype.forChild=function(t,e){if(e.isLeaf)
return Yo.empty;for(var n=[],r=0;r<this.members.length;r++){
var o=this.members[r].forChild(t,e);
o!=ti&&(o instanceof ei?n=n.concat(o.members):n.push(o));
}return ei.from(n);},ei.prototype.eq=function(t){if(!(t instanceof ei)||t.members.length!=this.members.length)
return!1;for(var e=0;e<this.members.length;e++)
if(!this.members[e].eq(t.members[e]))
return!1;return!0;},ei.prototype.locals=function(t){for(var e,n=!0,r=0;r<this.members.length;r++){
var o=this.members[r].localsInner(t);
if(o.length)
if(e){
n&&(e=e.slice(),n=!1);
for(var i=0;i<o.length;i++)
e.push(o[i]);
}else

e=o;
}return e?ai(n?e:e.sort(si)):Xo;},ei.from=function(t){switch(t.length){
case 0:return ti;
case 1:return t[0];
default:return new ei(t);
}};
var ui=function(t,e){this._props=e,this.state=e.state,this.dispatch=this.dispatch.bind(this),this._root=null,this.focused=!1,this.trackWrites=null,this.dom=t&&t.mount||document.createElement("div"),t&&(t.appendChild?t.appendChild(this.dom):t.apply?t(this.dom):t.mount&&(this.mounted=!0)),this.editable=hi(this),this.markCursor=null,this.cursorWrapper=null,fi(this),this.nodeViews=mi(this),this.docView=vr(this.state.doc,di(this),li(this),this.dom,this),this.lastSelectedViewDesc=null,this.dragging=null,function(t){t.shiftKey=!1,t.mouseDown=null,t.lastKeyCode=null,t.lastKeyCodeTime=0,t.lastClick={time:0,x:0,y:0,type:""},t.lastSelectionOrigin=null,t.lastSelectionTime=0,t.lastIOSEnter=0,t.lastIOSEnterFallbackTimeout=null,t.lastAndroidDelete=0,t.composing=!1,t.composingTimeout=null,t.compositionNodes=[],t.compositionEndedAt=-2e8,t.domObserver=new bo(t,function(e,n,r,o){return ro(t,e,n,r,o);}),t.domObserver.start(),t.domChangeCount=0,t.eventHandlers=Object.create(null);var e=function(e){var n=ko[e];t.dom.addEventListener(e,t.eventHandlers[e]=function(e){!function(t,e){if(!e.bubbles)
return!0;if(e.defaultPrevented)
return!1;for(var n=e.target;n!=t.dom;n=n.parentNode)
if(!n||11==n.nodeType||n.pmViewDesc&&n.pmViewDesc.stopEvent(e))
return!1;return!0;}(t,e)||Mo(t,e)||!t.editable&&e.type in xo||n(t,e);});};for(var n in ko)
e(n);Tn.safari&&t.dom.addEventListener("input",function(){return null;}),To(t);}(this),this.pluginViews=[],this.updatePluginViews();},pi={props:{configurable:!0},root:{configurable:!0}};
function di(t){var e=Object.create(null);return e.class="ProseMirror",e.contenteditable=String(t.editable),t.someProp("attributes",function(n){if("function"==typeof n&&(n=n(t.state)),n)
for(var r in n)
"class"==r?e.class+=" "+n[r]:e[r]||"contenteditable"==r||"nodeName"==r||(e[r]=String(n[r]));}),[Ko.node(0,t.state.doc.content.size,e)];}
function fi(t){if(t.markCursor){
var e=document.createElement("img");
e.setAttribute("mark-placeholder","true"),t.cursorWrapper={dom:e,deco:Ko.widget(t.state.selection.head,e,{raw:!0,marks:t.markCursor})};
}else

t.cursorWrapper=null;}
function hi(t){return!t.someProp("editable",function(e){return!1===e(t.state);});}
function mi(t){var e={};return t.someProp("nodeViews",function(t){for(var n in t)
Object.prototype.hasOwnProperty.call(e,n)||(e[n]=t[n]);}),e;}
pi.props.get=function(){if(this._props.state!=this.state){
var t=this._props;
for(var e in this._props={},t)
this._props[e]=t[e];
this._props.state=this.state;
}return this._props;},ui.prototype.update=function(t){t.handleDOMEvents!=this._props.handleDOMEvents&&To(this),this._props=t,this.updateStateInner(t.state,!0);},ui.prototype.setProps=function(t){var e={};for(var n in this._props)
e[n]=this._props[n];for(var r in e.state=this.state,t)
e[r]=t[r];this.update(e);},ui.prototype.updateState=function(t){this.updateStateInner(t,this.state.plugins!=t.plugins);},ui.prototype.updateStateInner=function(t,e){var n=this,r=this.state,o=!1,i=!1;if(t.storedMarks&&this.composing&&(Ho(this),i=!0),this.state=t,e){
var s=mi(this);
(function(t,e){var n=0,r=0;for(var o in t){
if(t[o]!=e[o])
return!0;
n++;
}for(var i in e)
r++;return n!=r;})(s,this.nodeViews)&&(this.nodeViews=s,o=!0),To(this);
}this.editable=hi(this),fi(this);var a=li(this),c=di(this),l=e?"reset":t.scrollToSelection>r.scrollToSelection?"to selection":"preserve",u=o||!this.docView.matchesNode(t.doc,c,a);!u&&t.selection.eq(r.selection)||(i=!0);var p,d,f,h,m,v,g,y,b,w,k,x="preserve"==l&&i&&null==this.dom.style.overflowAnchor&&function(t){for(var e,n,r=t.dom.getBoundingClientRect(),o=Math.max(0,r.top),i=(r.left+r.right)/2,s=o+1;s<Math.min(innerHeight,r.bottom);s+=5){
var a=t.root.elementFromPoint(i,s);
if(a!=t.dom&&t.dom.contains(a)){
var c=a.getBoundingClientRect();
if(c.top>=o-20){
e=a,n=c.top;
break;
}
}
}return{refDOM:e,refTop:n,stack:Un(t.dom)};}(this);if(i){
this.domObserver.stop();
var C=u&&(Tn.ie||Tn.chrome)&&!this.composing&&!r.selection.empty&&!t.selection.empty&&(h=r.selection,m=t.selection,v=Math.min(h.$anchor.sharedDepth(h.head),m.$anchor.sharedDepth(m.head)),h.$anchor.start(v)!=m.$anchor.start(v));
if(u){
var T=Tn.chrome?this.trackWrites=this.root.getSelection().focusNode:null;
!o&&this.docView.update(t.doc,c,a,this)||(this.docView.updateOuterDeco([]),this.docView.destroy(),this.docView=vr(t.doc,c,a,this.dom,this)),T&&!this.trackWrites&&(C=!0);
}
C||!(this.mouseDown&&this.domObserver.currentSelection.eq(this.root.getSelection())&&(p=this,d=p.docView.domFromPos(p.state.selection.anchor,0),f=p.root.getSelection(),Rn(d.node,d.offset,f.anchorNode,f.anchorOffset)))?Rr(this,C):(zr(this,t.selection),this.domObserver.setCurSelection()),this.domObserver.start();
}if(this.updatePluginViews(r),"reset"==l)
this.dom.scrollTop=0;else
if("to selection"==l){
var M=this.root.getSelection().focusNode;
this.someProp("handleScrollToSelection",function(t){return t(n);})||(t.selection instanceof on?$n(this,this.docView.domAfterPos(t.selection.from).getBoundingClientRect(),M):$n(this,this.coordsAtPos(t.selection.head,1),M));
}else

x&&(y=(g=x).refDOM,b=g.refTop,w=g.stack,k=y?y.getBoundingClientRect().top:0,Wn(w,0==k?0:k-b));},ui.prototype.destroyPluginViews=function(){for(var t;t=this.pluginViews.pop();)
t.destroy&&t.destroy();},ui.prototype.updatePluginViews=function(t){if(t&&t.plugins==this.state.plugins)
for(var e=0;e<this.pluginViews.length;e++){
var n=this.pluginViews[e];
n.update&&n.update(this,t);
}else
{
this.destroyPluginViews();
for(var r=0;r<this.state.plugins.length;r++){
var o=this.state.plugins[r];
o.spec.view&&this.pluginViews.push(o.spec.view(this));
}
}},ui.prototype.someProp=function(t,e){var n,r=this._props&&this._props[t];if(null!=r&&(n=e?e(r):r))
return n;var o=this.state.plugins;if(o)
for(var i=0;i<o.length;i++){
var s=o[i].props[t];
if(null!=s&&(n=e?e(s):s))
return n;
}},ui.prototype.hasFocus=function(){return this.root.activeElement==this.dom;},ui.prototype.focus=function(){this.domObserver.stop(),this.editable&&function(t){if(t.setActive)
return t.setActive();if(Jn)
return t.focus(Jn);var e=Un(t);t.focus(null==Jn?{get preventScroll(){return Jn={preventScroll:!0},!0;}}:void 0),Jn||(Jn=!1,Wn(e,0));}(this.dom),Rr(this),this.domObserver.start();},pi.root.get=function(){var t=this._root;if(null==t)
for(var e=this.dom.parentNode;e;e=e.parentNode)
if(9==e.nodeType||11==e.nodeType&&e.host)
return e.getSelection||(Object.getPrototypeOf(e).getSelection=function(){return document.getSelection();}),this._root=e;return t||document;},ui.prototype.posAtCoords=function(t){return Xn(this,t);},ui.prototype.coordsAtPos=function(t,e){return void 0===e&&(e=1),tr(this,t,e);},ui.prototype.domAtPos=function(t,e){return void 0===e&&(e=0),this.docView.domFromPos(t,e);},ui.prototype.nodeDOM=function(t){var e=this.docView.descAt(t);return e?e.nodeDOM:null;},ui.prototype.posAtDOM=function(t,e,n){void 0===n&&(n=-1);var r=this.docView.posFromDOM(t,e,n);if(null==r)
throw new RangeError("DOM position not inside the editor");return r;},ui.prototype.endOfTextblock=function(t,e){return cr(this,e||this.state,t);},ui.prototype.destroy=function(){this.docView&&(!function(t){for(var e in t.domObserver.stop(),t.eventHandlers)
t.dom.removeEventListener(e,t.eventHandlers[e]);clearTimeout(t.composingTimeout),clearTimeout(t.lastIOSEnterFallbackTimeout);}(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],li(this),this),this.dom.textContent=""):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null);},ui.prototype.dispatchEvent=function(t){return function(t,e){Mo(t,e)||!ko[e.type]||!t.editable&&e.type in xo||ko[e.type](t,e);}(this,t);},ui.prototype.dispatch=function(t){var e=this._props.dispatchTransaction;e?e.call(this,t):this.updateState(this.state.apply(t));},Object.defineProperties(ui.prototype,pi);
for(var vi=n(990),gi=n.n(vi),yi={8:"Backspace",9:"Tab",10:"Enter",12:"NumLock",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",59:";",61:"=",91:"Meta",92:"Meta",106:"*",107:"+",108:",",109:"-",110:".",111:"/",144:"NumLock",145:"ScrollLock",160:"Shift",161:"Shift",162:"Control",163:"Control",164:"Alt",165:"Alt",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",229:"q"},bi={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",59:":",61:"+",173:"_",186:":",187:"+",188:"<",189:"_",190:">",191:"?",192:"~",219:"{",220:"|",221:"}",222:'"',229:"Q"},wi="undefined"!=typeof navigator&&/Chrome\/(\d+)/.exec(navigator.userAgent),ki="undefined"!=typeof navigator&&/Apple Computer/.test(navigator.vendor),xi="undefined"!=typeof navigator&&/Gecko\/\d+/.test(navigator.userAgent),Ci="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),Ti="undefined"!=typeof navigator&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Mi=wi&&(Ci||+wi[1]<57)||xi&&Ci,Si=0;Si<10;Si++)
yi[48+Si]=yi[96+Si]=String(Si);
for(Si=1;Si<=24;Si++)
yi[Si+111]="F"+Si;
for(Si=65;Si<=90;Si++)
yi[Si]=String.fromCharCode(Si+32),bi[Si]=String.fromCharCode(Si);
for(var Ei in yi)
bi.hasOwnProperty(Ei)||(bi[Ei]=yi[Ei]);
var Ni="undefined"!=typeof navigator&&/Mac/.test(navigator.platform);
function Oi(t){var e,n,r,o,i=t.split(/-(?!$)/),s=i[i.length-1];"Space"==s&&(s=" ");for(var a=0;a<i.length-1;a++){
var c=i[a];
if(/^(cmd|meta|m)$/i.test(c))
o=!0;else
if(/^a(lt)?$/i.test(c))
e=!0;else
if(/^(c|ctrl|control)$/i.test(c))
n=!0;else
if(/^s(hift)?$/i.test(c))
r=!0;else
{
if(!/^mod$/i.test(c))
throw new Error("Unrecognized modifier name: "+c);
Ni?o=!0:n=!0;
}
}return e&&(s="Alt-"+s),n&&(s="Ctrl-"+s),o&&(s="Meta-"+s),r&&(s="Shift-"+s),s;}
function Di(t,e,n){return e.altKey&&(t="Alt-"+t),e.ctrlKey&&(t="Ctrl-"+t),e.metaKey&&(t="Meta-"+t),!1!==n&&e.shiftKey&&(t="Shift-"+t),t;}
function Ai(t){return new wn({props:{handleKeyDown:Li(t)}});}
function Li(t){var e=function(t){var e=Object.create(null);for(var n in t)
e[Oi(n)]=t[n];return e;}(t);return function(t,n){var r,o=function(t){var e=!(Mi&&(t.ctrlKey||t.altKey||t.metaKey)||(ki||Ti)&&t.shiftKey&&t.key&&1==t.key.length)&&t.key||(t.shiftKey?bi:yi)[t.keyCode]||t.key||"Unidentified";return"Esc"==e&&(e="Escape"),"Del"==e&&(e="Delete"),"Left"==e&&(e="ArrowLeft"),"Up"==e&&(e="ArrowUp"),"Right"==e&&(e="ArrowRight"),"Down"==e&&(e="ArrowDown"),e;}(n),i=1==o.length&&" "!=o,s=e[Di(o,n,!i)];if(s&&s(t.state,t.dispatch,t))
return!0;if(i&&(n.shiftKey||n.altKey||n.metaKey||o.charCodeAt(0)>127)&&(r=yi[n.keyCode])&&r!=o){
var a=e[Di(r,n,!0)];
if(a&&a(t.state,t.dispatch,t))
return!0;
}else
if(i&&n.shiftKey){
var c=e[Di(o,n,!0)];
if(c&&c(t.state,t.dispatch,t))
return!0;
}return!1;};}
function Ii(t,e){return!t.selection.empty&&(e&&e(t.tr.deleteSelection().scrollIntoView()),!0);}
function Ri(t,e){for(;t;t="start"==e?t.firstChild:t.lastChild)
if(t.isTextblock)
return!0;return!1;}
function Pi(t){if(!t.parent.type.spec.isolating)
for(var e=t.depth-1;e>=0;e--){
if(t.index(e)>0)
return t.doc.resolve(t.before(e+1));
if(t.node(e).type.spec.isolating)
break;
}return null;}
function Bi(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("forward",t):r.parentOffset<r.parent.content.size))
return!1;var o=Fi(r);if(!o)
return!1;var i=o.nodeAfter;if(Vi(t,o,e))
return!0;if(0==r.parent.content.size&&(Ri(i,"start")||on.isSelectable(i))){
if(e){
var s=t.tr.deleteRange(r.before(),r.after());
s.setSelection(Ri(i,"start")?Ye.findFrom(s.doc.resolve(s.mapping.map(o.pos)),1):on.create(s.doc,s.mapping.map(o.pos))),e(s.scrollIntoView());
}
return!0;
}return!(!i.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos,o.pos+i.nodeSize).scrollIntoView()),!0);}
function Fi(t){if(!t.parent.type.spec.isolating)
for(var e=t.depth-1;e>=0;e--){
var n=t.node(e);
if(t.index(e)+1<n.childCount)
return t.doc.resolve(t.after(e+1));
if(n.type.spec.isolating)
break;
}return null;}
function Hi(t,e){var n=t.selection,r=n.$head,o=n.$anchor;return!(!r.parent.type.spec.code||!r.sameParent(o))&&(e&&e(t.tr.insertText("\n").scrollIntoView()),!0);}
function zi(t){for(var e=0;e<t.edgeCount;e++){
var n=t.edge(e).type;
if(n.isTextblock&&!n.hasRequiredAttrs())
return n;
}return null;}
function ji(t,e){var n=t.selection,r=n.$head,o=n.$anchor;if(!r.parent.type.spec.code||!r.sameParent(o))
return!1;var i=r.node(-1),s=r.indexAfter(-1),a=zi(i.contentMatchAt(s));if(!i.canReplaceWith(s,s,a))
return!1;if(e){
var c=r.after(),l=t.tr.replaceWith(c,c,a.createAndFill());
l.setSelection(Ye.near(l.doc.resolve(c),1)),e(l.scrollIntoView());
}return!0;}
function _i(t,e){var n=t.selection,r=n.$from,o=n.$to;if(t.selection instanceof on&&t.selection.node.isBlock)
return!(!r.parentOffset||!Be(t.doc,r.pos))&&(e&&e(t.tr.split(r.pos).scrollIntoView()),!0);if(!r.parent.isBlock)
return!1;if(e){
var i=o.parentOffset==o.parent.content.size,s=t.tr;
(t.selection instanceof nn||t.selection instanceof an)&&s.deleteSelection();
var a=0==r.depth?null:zi(r.node(-1).contentMatchAt(r.indexAfter(-1))),c=i&&a?[{type:a}]:null,l=Be(s.doc,s.mapping.map(r.pos),1,c);
if(c||l||!Be(s.doc,s.mapping.map(r.pos),1,a&&[{type:a}])||(c=[{type:a}],l=!0),l&&(s.split(s.mapping.map(r.pos),1,c),!i&&!r.parentOffset&&r.parent.type!=a)){
var u=s.mapping.map(r.before()),p=s.doc.resolve(u);
r.node(-1).canReplaceWith(p.index(),p.index()+1,a)&&s.setNodeMarkup(s.mapping.map(r.before()),a);
}
e(s.scrollIntoView());
}return!0;}
function qi(t,e){return e&&e(t.tr.setSelection(new an(t.doc))),!0;}
function Vi(t,e,n){var r,o,i=e.nodeBefore,s=e.nodeAfter;if(i.type.spec.isolating||s.type.spec.isolating)
return!1;if(function(t,e,n){var r=e.nodeBefore,o=e.nodeAfter,i=e.index();return!(!(r&&o&&r.type.compatibleContent(o.type))||(!r.content.size&&e.parent.canReplace(i-1,i)?(n&&n(t.tr.delete(e.pos-r.nodeSize,e.pos).scrollIntoView()),0):!e.parent.canReplace(i,i+1)||!o.isTextblock&&!Fe(t.doc,e.pos)||(n&&n(t.tr.clearIncompatible(e.pos,r.type,r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()),0)));}(t,e,n))
return!0;var a=e.parent.canReplace(e.index(),e.index()+1);if(a&&(r=(o=i.contentMatchAt(i.childCount)).findWrapping(s.type))&&o.matchType(r[0]||s.type).validEnd){
if(n){
for(var c=e.pos+s.nodeSize,l=p.empty,u=r.length-1;u>=0;u--)
l=p.from(r[u].create(null,l));
l=p.from(i.copy(l));
var d=t.tr.step(new Ae(e.pos-1,c,e.pos,c,new y(l,1,0),r.length,!0)),f=c+2*r.length;
Fe(d.doc,f)&&d.join(f),n(d.scrollIntoView());
}
return!0;
}var h=Ye.findFrom(e,1),m=h&&h.$from.blockRange(h.$to),v=m&&Re(m);if(null!=v&&v>=e.depth)
return n&&n(t.tr.lift(m,v).scrollIntoView()),!0;if(a&&s.isTextblock&&Ri(i,"end")){
for(var g=i,b=[];b.push(g),!g.isTextblock;)
g=g.lastChild;
if(g.canReplace(g.childCount,g.childCount,s.content)){
if(n){
for(var w=p.empty,k=b.length-1;k>=0;k--)
w=p.from(b[k].copy(w));
n(t.tr.step(new Ae(e.pos-b.length,e.pos+s.nodeSize,e.pos+1,e.pos+s.nodeSize-1,new y(w,b.length,0),0,!0)).scrollIntoView());
}
return!0;
}
}return!1;}
function $i(t,e){return function(n,r){var o=n.selection,i=o.$from,s=o.$to,a=i.blockRange(s),c=a&&function(t,e,n,r){void 0===r&&(r=t);var o=function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.contentMatchAt(r).findWrapping(e);if(!i)
return null;var s=i.length?i[0]:e;return n.canReplaceWith(r,o,s)?i:null;}(t,e),i=o&&function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.child(r),s=e.contentMatch.findWrapping(i.type);if(!s)
return null;for(var a=(s.length?s[s.length-1]:e).contentMatch,c=r;a&&c<o;c++)
a=a.matchType(n.child(c).type);return a&&a.validEnd?s:null;}(r,e);return i?o.map(Pe).concat({type:e,attrs:n}).concat(i.map(Pe)):null;}(a,t,e);return!!c&&(r&&r(n.tr.wrap(a,c).scrollIntoView()),!0);};}
function Ui(t,e){return function(n,r){var o=n.selection,i=o.from,s=o.to,a=!1;return n.doc.nodesBetween(i,s,function(r,o){if(a)
return!1;if(r.isTextblock&&!r.hasMarkup(t,e))
if(r.type==t)
a=!0;else
{
var i=n.doc.resolve(o),s=i.index();
a=i.parent.canReplaceWith(s,s+1,t);
}}),!!a&&(r&&r(n.tr.setBlockType(i,s,t,e).scrollIntoView()),!0);};}
function Wi(t,e){return function(n,r){var o=n.selection,i=o.empty,s=o.$cursor,a=o.ranges;if(i&&!s||!function(t,e,n){for(var r=function(r){var o=e[r],i=o.$from,s=o.$to,a=0==i.depth&&t.type.allowsMarkType(n);if(t.nodesBetween(i.pos,s.pos,function(t){if(a)
return!1;a=t.inlineContent&&t.type.allowsMarkType(n);}),a)
return{v:!0};},o=0;o<e.length;o++){
var i=r(o);
if(i)
return i.v;
}return!1;}(n.doc,a,t))
return!1;if(r)
if(s)
t.isInSet(n.storedMarks||s.marks())?r(n.tr.removeStoredMark(t)):r(n.tr.addStoredMark(t.create(e)));else
{
for(var c=!1,l=n.tr,u=0;!c&&u<a.length;u++){
var p=a[u],d=p.$from,f=p.$to;
c=n.doc.rangeHasMark(d.pos,f.pos,t);
}
for(var h=0;h<a.length;h++){
var m=a[h],v=m.$from,g=m.$to;
if(c)
l.removeMark(v.pos,g.pos,t);else
{
var y=v.pos,b=g.pos,w=v.nodeAfter,k=g.nodeBefore,x=w&&w.isText?/^\s*/.exec(w.text)[0].length:0,C=k&&k.isText?/\s*$/.exec(k.text)[0].length:0;
y+x<b&&(y+=x,b-=C),l.addMark(y,b,t.create(e));
}
}
r(l.scrollIntoView());
}return!0;};}
function Ji(){for(var t=[],e=arguments.length;e--;)
t[e]=arguments[e];return function(e,n,r){for(var o=0;o<t.length;o++)
if(t[o](e,n,r))
return!0;return!1;};}
var Gi=Ji(Ii,function(t,e,n){var r=t.selection.$cursor;if(!r||(n?!n.endOfTextblock("backward",t):r.parentOffset>0))
return!1;var o=Pi(r);if(!o){
var i=r.blockRange(),s=i&&Re(i);
return null!=s&&(e&&e(t.tr.lift(i,s).scrollIntoView()),!0);
}var a=o.nodeBefore;if(!a.type.spec.isolating&&Vi(t,o,e))
return!0;if(0==r.parent.content.size&&(Ri(a,"end")||on.isSelectable(a))){
if(e){
var c=t.tr.deleteRange(r.before(),r.after());
c.setSelection(Ri(a,"end")?Ye.findFrom(c.doc.resolve(c.mapping.map(o.pos,-1)),-1):on.create(c.doc,o.pos-a.nodeSize)),e(c.scrollIntoView());
}
return!0;
}return!(!a.isAtom||o.depth!=r.depth-1)&&(e&&e(t.tr.delete(o.pos-a.nodeSize,o.pos).scrollIntoView()),!0);},function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)
return!1;if(o.parent.isTextblock){
if(n?!n.endOfTextblock("backward",t):o.parentOffset>0)
return!1;
i=Pi(o);
}var s=i&&i.nodeBefore;return!(!s||!on.isSelectable(s))&&(e&&e(t.tr.setSelection(on.create(t.doc,i.pos-s.nodeSize)).scrollIntoView()),!0);}),Ki=Ji(Ii,Bi,function(t,e,n){var r=t.selection,o=r.$head,i=o;if(!r.empty)
return!1;if(o.parent.isTextblock){
if(n?!n.endOfTextblock("forward",t):o.parentOffset<o.parent.content.size)
return!1;
i=Fi(o);
}var s=i&&i.nodeAfter;return!(!s||!on.isSelectable(s))&&(e&&e(t.tr.setSelection(on.create(t.doc,i.pos)).scrollIntoView()),!0);}),Zi={Enter:Ji(Hi,function(t,e){var n=t.selection,r=n.$from,o=n.$to;if(n instanceof an||r.parent.inlineContent||o.parent.inlineContent)
return!1;var i=zi(o.parent.contentMatchAt(o.indexAfter()));if(!i||!i.isTextblock)
return!1;if(e){
var s=(!r.parentOffset&&o.index()<o.parent.childCount?r:o).pos,a=t.tr.insert(s,i.createAndFill());
a.setSelection(nn.create(a.doc,s+1)),e(a.scrollIntoView());
}return!0;},function(t,e){var n=t.selection.$cursor;if(!n||n.parent.content.size)
return!1;if(n.depth>1&&n.after()!=n.end(-1)){
var r=n.before();
if(Be(t.doc,r))
return e&&e(t.tr.split(r).scrollIntoView()),!0;
}var o=n.blockRange(),i=o&&Re(o);return null!=i&&(e&&e(t.tr.lift(o,i).scrollIntoView()),!0);},_i),"Mod-Enter":ji,Backspace:Gi,"Mod-Backspace":Gi,Delete:Ki,"Mod-Delete":Ki,"Mod-a":qi},Xi={"Ctrl-h":Zi.Backspace,"Alt-Backspace":Zi["Mod-Backspace"],"Ctrl-d":Zi.Delete,"Ctrl-Alt-Backspace":Zi["Mod-Delete"],"Alt-Delete":Zi["Mod-Delete"],"Alt-d":Zi["Mod-Delete"]};
for(var Qi in Zi)
Xi[Qi]=Zi[Qi];
var Yi=("undefined"!=typeof navigator?/Mac/.test(navigator.platform):"undefined"!=typeof os&&"darwin"==os.platform())?Xi:Zi,ts=function(t,e){var n;this.match=t,this.handler="string"==typeof e?(n=e,function(t,e,r,o){var i=n;if(e[1]){
var s=e[0].lastIndexOf(e[1]);
i+=e[0].slice(s+e[1].length);
var a=(r+=s)-o;
a>0&&(i=e[0].slice(s-a,s)+i,r=o);
}return t.tr.insertText(i,r,o);}):e;};
function es(t,e,n,r,o,i){if(t.composing)
return!1;var s=t.state,a=s.doc.resolve(e);if(a.parent.type.spec.code)
return!1;for(var c=a.parent.textBetween(Math.max(0,a.parentOffset-500),a.parentOffset,null,"占�")+r,l=0;l<o.length;l++){
var u=o[l].match.exec(c),p=u&&o[l].handler(s,u,e-(u[0].length-r.length),n);
if(p)
return t.dispatch(p.setMeta(i,{transform:p,from:e,to:n,text:r})),!0;
}return!1;}
new ts(/--$/,"��"),new ts(/\.\.\.$/,"��"),new ts(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/,"��"),new ts(/"$/,"��"),new ts(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/,"��"),new ts(/'$/,"��");
var ns=200,rs=function(){};
rs.prototype.append=function(t){return t.length?(t=rs.from(t),!this.length&&t||t.length<ns&&this.leafAppend(t)||this.length<ns&&t.leafPrepend(this)||this.appendInner(t)):this;},rs.prototype.prepend=function(t){return t.length?rs.from(t).append(this):this;},rs.prototype.appendInner=function(t){return new ss(this,t);},rs.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?rs.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e));},rs.prototype.get=function(t){if(!(t<0||t>=this.length))
return this.getInner(t);},rs.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0);},rs.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach(function(e,n){return r.push(t(e,n));},e,n),r;},rs.from=function(t){return t instanceof rs?t:t&&t.length?new is(t):rs.empty;};
var is=function(t){function e(e){t.call(this),this.values=e;}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values;},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n));},e.prototype.getInner=function(t){return this.values[t];},e.prototype.forEachInner=function(t,e,n,r){for(var o=e;o<n;o++)
if(!1===t(this.values[o],r+o))
return!1;},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var o=e-1;o>=n;o--)
if(!1===t(this.values[o],r+o))
return!1;},e.prototype.leafAppend=function(t){if(this.length+t.length<=ns)
return new e(this.values.concat(t.flatten()));},e.prototype.leafPrepend=function(t){if(this.length+t.length<=ns)
return new e(t.flatten().concat(this.values));},n.length.get=function(){return this.values.length;},n.depth.get=function(){return 0;},Object.defineProperties(e.prototype,n),e;}(rs);
rs.empty=new is([]);
var ss=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1;}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten());},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length);},e.prototype.forEachInner=function(t,e,n,r){var o=this.left.length;return!(e<o&&!1===this.left.forEachInner(t,e,Math.min(n,o),r))&&!(n>o&&!1===this.right.forEachInner(t,Math.max(e-o,0),Math.min(this.length,n)-o,r+o))&&void 0;},e.prototype.forEachInvertedInner=function(t,e,n,r){var o=this.left.length;return!(e>o&&!1===this.right.forEachInvertedInner(t,e-o,Math.max(n,o)-o,r+o))&&!(n<o&&!1===this.left.forEachInvertedInner(t,Math.min(e,o),n,r))&&void 0;},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)
return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n));},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)
return new e(this.left,n);},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)
return new e(n,this.right);},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t);},e;}(rs),as=rs,cs=function(t,e){this.items=t,this.eventCount=e;};
cs.prototype.popEvent=function(t,e){var n=this;if(0==this.eventCount)
return null;for(var r,o,i=this.items.length;;i--){
if(this.items.get(i-1).selection){
--i;
break;
}
}e&&(r=this.remapping(i,this.items.length),o=r.maps.length);var s,a,c=t.tr,l=[],u=[];return this.items.forEach(function(t,e){if(!t.step)
return r||(r=n.remapping(i,e+1),o=r.maps.length),o--,void u.push(t);if(r){
u.push(new ls(t.map));
var p,d=t.step.map(r.slice(o));
d&&c.maybeStep(d).doc&&(p=c.mapping.maps[c.mapping.maps.length-1],l.push(new ls(p,null,null,l.length+u.length))),o--,p&&r.appendMap(p,o);
}else

c.maybeStep(t.step);return t.selection?(s=r?t.selection.map(r.slice(o)):t.selection,a=new cs(n.items.slice(0,i).append(u.reverse().concat(l)),n.eventCount-1),!1):void 0;},this.items.length,0),{remaining:a,transform:c,selection:s};},cs.prototype.addTransform=function(t,e,n,r){for(var o=[],i=this.eventCount,s=this.items,a=!r&&s.length?s.get(s.length-1):null,c=0;c<t.steps.length;c++){
var l,u=t.steps[c].invert(t.docs[c]),p=new ls(t.mapping.maps[c],u,e);
(l=a&&a.merge(p))&&(p=l,c?o.pop():s=s.slice(0,s.length-1)),o.push(p),e&&(i++,e=null),r||(a=p);
}var d,f,h,m=i-n.depth;return m>ps&&(f=m,(d=s).forEach(function(t,e){if(t.selection&&0==f--)
return h=e,!1;}),s=d.slice(h),i-=m),new cs(s.append(o),i);},cs.prototype.remapping=function(t,e){var n=new xe();return this.items.forEach(function(e,r){var o=null!=e.mirrorOffset&&r-e.mirrorOffset>=t?n.maps.length-e.mirrorOffset:null;n.appendMap(e.map,o);},t,e),n;},cs.prototype.addMaps=function(t){return 0==this.eventCount?this:new cs(this.items.append(t.map(function(t){return new ls(t);})),this.eventCount);},cs.prototype.rebased=function(t,e){if(!this.eventCount)
return this;var n=[],r=Math.max(0,this.items.length-e),o=t.mapping,i=t.steps.length,s=this.eventCount;this.items.forEach(function(t){t.selection&&s--;},r);var a=e;this.items.forEach(function(e){var r=o.getMirror(--a);if(null!=r){
i=Math.min(i,r);
var c=o.maps[r];
if(e.step){
var l=t.steps[r].invert(t.docs[r]),u=e.selection&&e.selection.map(o.slice(a+1,r));
u&&s++,n.push(new ls(c,l,u));
}else

n.push(new ls(c));
}},r);for(var c=[],l=e;l<i;l++)
c.push(new ls(o.maps[l]));var u=this.items.slice(0,r).append(c).append(n),p=new cs(u,s);return p.emptyItemCount()>500&&(p=p.compress(this.items.length-n.length)),p;},cs.prototype.emptyItemCount=function(){var t=0;return this.items.forEach(function(e){e.step||t++;}),t;},cs.prototype.compress=function(t){void 0===t&&(t=this.items.length);var e=this.remapping(0,t),n=e.maps.length,r=[],o=0;return this.items.forEach(function(i,s){if(s>=t)
r.push(i),i.selection&&o++;else
if(i.step){
var a=i.step.map(e.slice(n)),c=a&&a.getMap();
if(n--,c&&e.appendMap(c,n),a){
var l=i.selection&&i.selection.map(e.slice(n));
l&&o++;
var u,p=new ls(c.invert(),a,l),d=r.length-1;
(u=r.length&&r[d].merge(p))?r[d]=u:r.push(p);
}
}else

i.map&&n--;},this.items.length,0),new cs(as.from(r.reverse()),o);},cs.empty=new cs(as.empty,0);
var ls=function(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r;};
ls.prototype.merge=function(t){if(this.step&&t.step&&!t.selection){
var e=t.step.merge(this.step);
if(e)
return new ls(e.getMap().invert(),e,this.selection);
}};
var us=function(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r;},ps=20;
function ds(t){var e=[];return t.forEach(function(t,n,r,o){return e.push(r,o);}),e;}
function fs(t,e){if(!t)
return null;for(var n=[],r=0;r<t.length;r+=2){
var o=e.map(t[r],1),i=e.map(t[r+1],-1);
o<=i&&n.push(o,i);
}return n;}
function hs(t,e,n,r){var o=gs(e),i=ys.get(e).spec.config,s=(r?t.undone:t.done).popEvent(e,o);if(s){
var a=s.selection.resolve(s.transform.doc),c=(r?t.done:t.undone).addTransform(s.transform,e.selection.getBookmark(),i,o),l=new us(r?c:s.remaining,r?s.remaining:c,null,0);
n(s.transform.setSelection(a).setMeta(ys,{redo:r,historyState:l}).scrollIntoView());
}}
var ms=!1,vs=null;
function gs(t){var e=t.plugins;if(vs!=e){
ms=!1,vs=e;
for(var n=0;n<e.length;n++)
if(e[n].spec.historyPreserveItems){
ms=!0;
break;
}
}return ms;}
var ys=new Cn("history"),bs=new Cn("closeHistory");
function ws(t){return t={depth:t&&t.depth||100,newGroupDelay:t&&t.newGroupDelay||500},new wn({key:ys,state:{init:function(){return new us(cs.empty,cs.empty,null,0);},apply:function(e,n,r){return function(t,e,n,r){var o,i=n.getMeta(ys);if(i)
return i.historyState;n.getMeta(bs)&&(t=new us(t.done,t.undone,null,0));var s=n.getMeta("appendedTransaction");if(0==n.steps.length)
return t;if(s&&s.getMeta(ys))
return s.getMeta(ys).redo?new us(t.done.addTransform(n,null,r,gs(e)),t.undone,ds(n.mapping.maps[n.steps.length-1]),t.prevTime):new us(t.done,t.undone.addTransform(n,null,r,gs(e)),null,t.prevTime);if(!1===n.getMeta("addToHistory")||s&&!1===s.getMeta("addToHistory"))
return(o=n.getMeta("rebased"))?new us(t.done.rebased(n,o),t.undone.rebased(n,o),fs(t.prevRanges,n.mapping),t.prevTime):new us(t.done.addMaps(n.mapping.maps),t.undone.addMaps(n.mapping.maps),fs(t.prevRanges,n.mapping),t.prevTime);var a=0==t.prevTime||!s&&(t.prevTime<(n.time||0)-r.newGroupDelay||!function(t,e){if(!e)
return!1;if(!t.docChanged)
return!0;var n=!1;return t.mapping.maps[0].forEach(function(t,r){for(var o=0;o<e.length;o+=2)
t<=e[o+1]&&r>=e[o]&&(n=!0);}),n;}(n,t.prevRanges)),c=s?fs(t.prevRanges,n.mapping):ds(n.mapping.maps[n.steps.length-1]);return new us(t.done.addTransform(n,a?e.selection.getBookmark():null,r,gs(e)),cs.empty,c,n.time);}(n,r,e,t);}},config:t});}
function ks(t,e){var n=ys.getState(t);return!(!n||0==n.done.eventCount)&&(e&&hs(n,t,e,!1),!0);}
function xs(t,e){var n=ys.getState(t);return!(!n||0==n.undone.eventCount)&&(e&&hs(n,t,e,!0),!0);}
function Cs(t,e){var n=t.nodes.paragraph;return e?n.create(null,Pt()(e)?t.text(e):e):n.createAndFill();}
function Ts(t,e,n){return t.text(e,n);}
function Ms(t,e,n){void 0===n&&(n=e);var r=t.doc.content.size,o=r>0?r-1:1;return nn.create(t.doc,Math.min(e,o),Math.min(n,o));}
function Ss(t,e,n){var r=e.pos;return t.replaceWith(r,r,Cs(n)),t.setSelection(Ms(t,r+1));}
function Es(t){for(var e=t.state,n=t.from,r=t.startIndex,o=t.endIndex,i=t.createText,s=e.tr,a=e.doc,c=e.schema,l=r;l<=o;l+=1){
var u=a.child(l),d=u.nodeSize,f=u.textContent,h=u.content,m=i(f),v=m?Ts(c,m):p.empty,g=s.mapping.map(n),y=g+h.size;
s.replaceWith(g,y,v),n+=d;
}return s;}
function Ns(t,e,n,r){var o=n.length;t.split(e).delete(e-o,e).insert(t.mapping.map(e),r).setSelection(Ms(t,t.mapping.map(e)-o));}
function Os(t){return t.sourcepos[0][0];}
function Ds(t){return t.sourcepos[1][0];}
function As(t){return t.sourcepos[0][1];}
function Ls(t){return t.sourcepos[1][1];}
function Is(t){var e=t.type;return"strike"===e||"strong"===e||"emph"===e||"code"===e||"link"===e||"image"===e;}
function Rs(t){return t&&("item"===t.type||"list"===t.type);}
function Ps(t){return Rs(t)&&"ordered"===t.listData.type;}
function Bs(t){return Rs(t)&&"ordered"!==t.listData.type;}
function Fs(t){return t&&("tableCell"===t.type||"tableDelimCell"===t.type);}
function Hs(t,e,n){for(void 0===n&&(n=!0),t=n?t:t.parent;t&&"document"!==t.type;){
if(e(t))
return t;
t=t.parent;
}return null;}
function zs(t,e){return[t[0],t[1]+e];}
function js(t,e){return[t[0],e];}
function _s(t){var e=t.firstChild.literal;switch(t.type){
case"emph":return"*"+e+"*";
case"strong":return"**"+e+"**";
case"strike":return"~~"+e+"~~";
case"code":return"`"+e+"`";
case"link":
case"image":
var n=t,r=n.destination,o=n.title;
return("link"===t.type?"":"!")+"["+e+"]("+r+(o?' "'+o+'"':"")+")";
default:return null;
}}
function qs(t){switch(t.type){
case"document":
case"blockQuote":
case"list":
case"item":
case"paragraph":
case"heading":
case"emph":
case"strong":
case"strike":
case"link":
case"image":
case"table":
case"tableHead":
case"tableBody":
case"tableRow":
case"tableCell":
case"tableDelimRow":
case"customInline":return!0;
default:return!1;
}}
function Vs(t){for(var e=[],n=t.walker(),r=null;r=n.next();){
var o=r.node;
"text"===o.type&&e.push(o.literal);
}return e.join("");}
var $s=[],Us={},Ws=/\$\$widget\d+\s/;
function Js(t){var e=t.search(Ws);if(-1!==e){
var n=t.substring(e).replace(Ws,"").replace("$$","");
t=t.substring(0,e),t+=Js(n);
}return t;}
function Gs(t,e){return"$$"+t+" "+e+"$$";}
function Ks(t,e){var n=Us[t],r=n.rule;return(0,n.toDOM)(e=Js(e).match(r)[0]);}
function Zs(){return $s;}
function Xs(t){($s=t).forEach(function(t,e){Us["widget"+e]=t;});}
function Qs(t,e,n,r){return t.concat(Ys(e,n,r));}
function Ys(t,e,n){void 0===n&&(n=0);var r=[],o=($s[n]||{}).rule,i=n+1;if(t=Js(t),o&&o.test(t)){
for(var s=void 0;-1!==(s=t.search(o));){
var a=t.substring(0,s);
a&&(r=Qs(r,a,e,i));
var c=(t=t.substring(s)).match(o)[0],l="widget"+n;
r.push(e.nodes.widget.create({info:l},e.text(Gs(l,c)))),t=t.substring(c.length);
}
t&&(r=Qs(r,t,e,i));
}else

t&&(r=n<$s.length-1?Qs(r,t,e,i):[e.text(t)]);return r;}
function ta(t){for(var e,n="",r=t.walker();e=r.next();){
var o=e.node;
e.entering&&(o!==t&&"text"!==o.type?(n+=_s(o),r.resumeAt(t,!1),r.next()):"text"===o.type&&(n+=o.literal));
}return n;}
function ea(){return{deleteSelection:function(){return Ii;},selectAll:function(){return qi;},undo:function(){return ks;},redo:function(){return xs;}};}
var na=n(322),ra=n.n(na),oa=n(714),ia=n.n(oa),sa=n(471),aa=n.n(sa),ca="[A-Za-z][A-Za-z0-9-]*",la="(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)",ua="<("+ca+")("+la+")*\\s*/?>",pa="(?:"+ua+"|</([A-Za-z][A-Za-z0-9-]*)\\s*[>])",da=new RegExp("^"+pa,"i"),fa=/<br\s*\/*>/i,ha=/<! ---->|<!--(?:-?[^>-])(?:-?[^-])*-->/,ma="</p><p>";
function va(t,e,n){var r=parseInt(t.left,10),o=parseInt(t.top,10),i=parseInt(t.width,10)+parseInt(t.paddingLeft,10)+parseInt(t.paddingRight,10),s=parseInt(t.height,10)+parseInt(t.paddingTop,10)+parseInt(t.paddingBottom,10);return e>=r&&e<=r+i&&n>=o&&n<=o+s;}
var ga="toastui-editor-";
function ya(){for(var t=[],e=0;e<arguments.length;e++)
t[e]=arguments[e];for(var n=[],r=0,o=t;r<o.length;r++){
var i=o[r],s=void 0;
(s=Array.isArray(i)?i[0]?i[1]:null:i)&&n.push(""+ga+s);
}return n.join(" ");}
function ba(){for(var t=[],e=0;e<arguments.length;e++)
t[e]=arguments[e];return t.map(function(t){return ga+"md-"+t;}).join(" ");}
function wa(t){return t&&t.nodeType===Node.ELEMENT_NODE;}
function ka(t){t.parentNode&&t.parentNode.removeChild(t);}
function xa(t,e,n){zt()(n)&&(n=!ia()(t,e)),(n?At():It())(t,e);}
function Ca(t,e){var n=document.createElement("div");Pt()(t)?n.innerHTML=t:n.appendChild(t);var r=n.firstChild;return e&&e.appendChild(r),r;}
function Ta(t){var e=window.getComputedStyle(t);return["margin-left","margin-right"].reduce(function(t,n){return t+parseInt(e.getPropertyValue(n),10);},0)+t.offsetWidth;}
function Ma(t,e){var n;for(n=Pt()(e)?function(t){return aa()(t,e);}:function(t){return t===e;};t&&t!==document;){
if(wa(t)&&n(t))
return t;
t=t.parentNode;
}return null;}
function Sa(t,e){for(var n=0,r=0;t&&t!==e;){
if(n+=t.offsetTop,r+=t.offsetLeft,t.offsetParent===e.offsetParent)
break;
t=t.offsetParent;
}return{offsetTop:n,offsetLeft:r};}
function Ea(t,e){Object.keys(t).forEach(function(n){ce(t[n])?e.removeAttribute(n):e.setAttribute(n,t[n]);});}
var Na=new Cn("widget"),Oa=function(){function t(t,e){var n=this;this.popup=null,this.removeWidget=function(){n.popup&&(n.rootEl.removeChild(n.popup),n.popup=null);},this.rootEl=t.dom.parentElement,this.eventEmitter=e,this.eventEmitter.listen("blur",this.removeWidget),this.eventEmitter.listen("loadUI",function(){n.rootEl=Ma(t.dom.parentElement,"."+ya("defaultUI"));}),this.eventEmitter.listen("removePopupWidget",this.removeWidget);}return t.prototype.update=function(t){var e=Na.getState(t.state);if(this.removeWidget(),e){
var n=e.node,r=e.style,o=t.coordsAtPos(e.pos),i=o.top,s=o.left,a=o.bottom-i,c=this.rootEl.getBoundingClientRect(),l=i-c.top;
Ot()(n,{opacity:"0"}),this.rootEl.appendChild(n),Ot()(n,{position:"absolute",left:s-c.left+5+"px",top:("bottom"===r?l+a-5:l-a)+"px",opacity:"1"}),this.popup=n,t.focus();
}},t.prototype.destroy=function(){this.eventEmitter.removeEventHandler("blur",this.removeWidget);},t;}();
function Da(t){return new wn({key:Na,state:{init:function(){return null;},apply:function(t){return t.getMeta("widget");}},view:function(e){return new Oa(e,t);}});}
var Aa=n(893),La=n.n(Aa);
function Ia(t,e,n){t.emit("addImageBlobHook",e,function(n,r){t.emit("command","addImage",{imageUrl:n,altText:r||e.name||"image"});},n);}
function Ra(t){var e=gi()(t).filter(function(t){return-1!==t.type.indexOf("image");});if(1===e.length){
var n=e[0];
if(n)
return n.getAsFile();
}return null;}
function Pa(t){var e=t.eventEmitter;return new wn({props:{handleDOMEvents:{drop:function(t,n){var r,o=null===(r=n.dataTransfer)||void 0===r?void 0:r.files;return o&&La()(o,function(t){return-1===t.type.indexOf("image")||(n.preventDefault(),n.stopPropagation(),Ia(e,t,n.type),!1);}),!0;}}}});}
var Ba=function(){function t(){}return Object.defineProperty(t.prototype,"type",{get:function(){return"node";},enumerable:!1,configurable:!0}),t.prototype.setContext=function(t){this.context=t;},t;}();
function Fa(t){var e=document.createElement("span"),n=Ks(t.attrs.info,t.textContent);return e.className="tui-widget",e.appendChild(n),{dom:e};}
function Ha(t){return"widget"===t.type.name;}
var za=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"widget";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:{info:{default:null}},group:"inline",inline:!0,content:"text*",selectable:!1,atom:!0,toDOM:function(){return["span",{class:"tui-widget"},0];},parseDOM:[{tag:"span.tui-widget",getAttrs:function(t){return{info:t.textContent.match(/\$\$(widget\d+)/)[1]};}}]};},enumerable:!1,configurable:!0}),n;}(Ba),ja=function(){function t(t){this.timer=null,this.el=document.createElement("div"),this.el.className="toastui-editor",this.eventEmitter=t,this.placeholder={text:""};}return t.prototype.createState=function(){return vn.create({schema:this.schema,plugins:this.createPlugins()});},t.prototype.initEvent=function(){var t=this,e=t.eventEmitter,n=t.view,r=t.editorType;n.dom.addEventListener("focus",function(){return e.emit("focus",r);}),n.dom.addEventListener("blur",function(){return e.emit("blur",r);});},t.prototype.emitChangeEvent=function(t){this.eventEmitter.emit("caretChange",this.editorType),t.docChanged&&this.eventEmitter.emit("change",this.editorType);},Object.defineProperty(t.prototype,"defaultPlugins",{get:function(){var t,e=this.createInputRules(),n=i(i([],this.keymaps),[Ai(o({"Shift-Enter":Yi.Enter},Yi)),ws(),(t=this.placeholder,new wn({props:{decorations:function(e){var n=e.doc;if(t.text&&1===n.childCount&&n.firstChild.isTextblock&&0===n.firstChild.content.size){
var r=document.createElement("span");
return At()(r,"placeholder"),t.className&&At()(r,t.className),r.textContent=t.text,Yo.create(n,[Ko.widget(1,r)]);
}return null;}}})),Da(this.eventEmitter),Pa(this.context)]);return e?n.concat(e):n;},enumerable:!1,configurable:!0}),t.prototype.createInputRules=function(){var t=Zs().map(function(t){var e=t.rule;return new ts(e,function(t,n,r,o){var i=t.schema,s=t.tr,a=t.doc,c=n.input.match(new RegExp(e,"g")),l=a.resolve(r),u=l.parent,p=0;if(Ha(u)&&(u=l.node(l.depth-1)),u.forEach(function(t){return Ha(t)&&(p+=1);}),c.length>p){
var d=ue(c),f=Ys(d,i);
return s.replaceWith(o-d.length+1,o,f);
}return null;});});return t.length?function(t){var e=t.rules,n=new wn({state:{init:function(){return null;},apply:function(t,e){return t.getMeta(this)||(t.selectionSet||t.docChanged?null:e);}},props:{handleTextInput:function(t,r,o,i){return es(t,r,o,i,e,n);},handleDOMEvents:{compositionend:function(t){setTimeout(function(){var r=t.state.selection.$cursor;r&&es(t,r.pos,r.pos,"",e,n);});}}},isInputRules:!0});return n;}({rules:t}):null;},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null);},t.prototype.createSchema=function(){return new ct({nodes:this.specs.nodes,marks:this.specs.marks});},t.prototype.createKeymaps=function(t){var e=ea(),n=e.undo,r=e.redo,o=this.specs.keymaps(t),i={"Mod-z":n(),"Shift-Mod-z":r()};return t?o.concat(Ai(i)):o;},t.prototype.createCommands=function(){return this.specs.commands(this.view);},t.prototype.createPluginProps=function(){var t=this;return this.extraPlugins.map(function(e){return e(t.eventEmitter);});},t.prototype.focus=function(){var t=this;this.clearTimer(),this.timer=setTimeout(function(){t.view.focus(),t.view.dispatch(t.view.state.tr.scrollIntoView());});},t.prototype.blur=function(){this.view.dom.blur();},t.prototype.destroy=function(){var t=this;this.clearTimer(),this.view.destroy(),Object.keys(this).forEach(function(e){delete t[e];});},t.prototype.moveCursorToStart=function(t){var e=this.view.state.tr;this.view.dispatch(e.setSelection(Ms(e,1)).scrollIntoView()),t&&this.focus();},t.prototype.moveCursorToEnd=function(t){var e=this.view.state.tr;this.view.dispatch(e.setSelection(Ms(e,e.doc.content.size-1)).scrollIntoView()),t&&this.focus();},t.prototype.setScrollTop=function(t){this.view.dom.scrollTop=t;},t.prototype.getScrollTop=function(){return this.view.dom.scrollTop;},t.prototype.setPlaceholder=function(t){this.placeholder.text=t,this.view.dispatch(this.view.state.tr.scrollIntoView());},t.prototype.setHeight=function(t){Ot()(this.el,{height:t+"px"});},t.prototype.setMinHeight=function(t){Ot()(this.el,{minHeight:t+"px"});},t.prototype.getElement=function(){return this.el;},t;}(),_a=ja,qa=n(294),Va=n.n(qa),$a=["Enter","Shift-Enter","Mod-Enter","Tab","Shift-Tab","Delete","Backspace","Mod-Delete","Mod-Backspace","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Mod-d","Mod-D","Alt-ArrowUp","Alt-ArrowDown"];
function Ua(t,e,n){return t.focus(),e(n)(t.state,t.dispatch,t);}
var Wa=function(){function t(t){this.specs=t;}return Object.defineProperty(t.prototype,"nodes",{get:function(){return this.specs.filter(function(t){return"node"===t.type;}).reduce(function(t,e){var n,r=e.name,i=e.schema;return o(o({},t),((n={})[r]=i,n));},{});},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"marks",{get:function(){return this.specs.filter(function(t){return"mark"===t.type;}).reduce(function(t,e){var n,r=e.name,i=e.schema;return o(o({},t),((n={})[r]=i,n));},{});},enumerable:!1,configurable:!0}),t.prototype.commands=function(t,e){var n=this.specs.filter(function(t){return t.commands;}).reduce(function(e,n){var r={},i=n.commands();return Va()(i)?r[n.name]=function(e){return Ua(t,i,e);}:Object.keys(i).forEach(function(e){r[e]=function(n){return Ua(t,i[e],n);};}),o(o({},e),r);},{}),r=ea();return Object.keys(r).forEach(function(e){n[e]=function(n){return Ua(t,r[e],n);};}),e&&Object.keys(e).forEach(function(r){n[r]=function(n){return Ua(t,e[r],n);};}),n;},t.prototype.keymaps=function(t){return this.specs.filter(function(t){return t.keymaps;}).map(function(t){return t.keymaps();}).map(function(e){return t||Object.keys(e).forEach(function(t){te($a,t)||delete e[t];}),Ai(e);});},t.prototype.setContext=function(t){this.specs.forEach(function(e){e.setContext(t);});},t;}(),Ja=Wa;
function Ga(t){var e=t.from,n=t.to;return t instanceof an?[e+1,n-1]:[e,n];}
function Ka(t){return t.index(0)+1;}
function Za(t,e,n){void 0===n&&(n=1);var r=0;return t.forEach(function(t,o){Ha(t)&&o+2<e&&(r+=2*n);}),r;}
function Xa(t,e,n){void 0===n&&(n=e);var r=e===n,o=t.resolve(e),i=Ka(o),s=i,a=o.start(1),c=a;if(!r){
var l=t.resolve(n===t.content.size?n-1:n);
c=l.start(1),s=Ka(l),l.pos===t.content.size&&(n=t.content.size-2);
}var u=Math.max(e-a+1,1),p=Math.max(n-c+1,1);return[[i,u+Za(t.child(i-1),u,-1)],[s,p+Za(t.child(s-1),p,-1)]];}
function Qa(t,e){for(var n=[],r=0,o=0;r<e;r+=1){
var i=t.child(r);
n[r]=o,o+=i.nodeSize;
}return n;}
function Ya(t,e,n){var r=Qa(t,n[0]),o=e[0]-1,i=n[0]-1,s=t.child(o),a=t.child(i),c=r[o],l=r[i];return c+=e[1]+Za(s,e[1]-1),l+=n[1]+Za(a,n[1]-1),[c,Math.min(l,t.content.size)];}
function tc(t){var e=t.$from,n=t.$to,r=t.from,o=t.to,i=e.doc;return t instanceof an&&(e=i.resolve(r+1),n=i.resolve(o-1)),0===e.depth&&(n=e=i.resolve(r-1)),{startFromOffset:e.start(1),endFromOffset:n.start(1),startToOffset:e.end(1),endToOffset:n.end(1),startIndex:e.index(0),endIndex:n.index(0),from:e.pos,to:n.pos};}
function ec(t,e){for(var n=1,r=1,o=0,i=0;o<t.childCount;o+=1){
var s=t.child(o).nodeSize;
if(n=i+1,r=i+s-1,o===e)
break;
i+=s;
}return{startOffset:n,endOffset:r};}
var nc="heading",rc="link",oc="code",ic="meta",sc="delimiter",ac="markedText",cc={strong:2,emph:1,strike:2};
function lc(t,e,n,r){return{start:t,end:e,spec:{type:n,attrs:r}};}
function uc(t,e,n){var r=t.type,o=zs(e,cc[r]),i=zs(n,-cc[r]);return[lc(o,i,r),lc(e,o,sc),lc(i,n,sc)];}
function pc(t,e,n,r){return[lc(t,e,rc),lc(js(t,n[1]+1),js(e,r),rc,{desc:!0}),lc(js(e,r+2),zs(e,-1),rc,{url:!0})];}
function dc(t,e,n,r){var i={start:e,end:n,spec:{attrs:{className:r+"-line-background",codeStart:e[0],codeEnd:n[0]}},lineBackground:!0};return"item"!==t.type&&"blockQuote"!==t.type?[o(o({},i),{end:e,spec:{attrs:{className:r+"-line-background start"}}}),o(o({},i),{start:[Math.min(e[0]+1,n[0]),e[1]]})]:null;}
function fc(t,e){for(var n=[];t;){
var r=t.type;
"paragraph"!==r&&"codeBlock"!==r||n.push(lc([Os(t),As(t)-1],[Ds(t),Ls(t)+1],e)),t=t.next;
}return n;}
var hc={heading:function(t,e,n){var r=t.level,o=t.headingType,i=[lc(e,n,nc,{level:r})];return"atx"===o?i.push(lc(e,zs(e,r),sc)):i.push(lc(js(n,0),n,nc,{seText:!0})),i;},strong:uc,emph:uc,strike:uc,link:function(t,e,n){var r=t.lastChild,o=t.extendedAutolink,i=r?Ls(r)+1:2;return o?[lc(e,n,rc,{desc:!0})]:pc(e,n,e,i);},image:function(t,e,n){var r=t.lastChild,o=r?Ls(r)+1:3,s=zs(e,1);return i([lc(e,s,ic)],pc(e,n,s,o));},code:function(t,e,n){var r=t.tickCount,o=zs(e,r),i=zs(n,-r);return[lc(e,n,oc),lc(e,o,oc,{start:!0}),lc(o,i,oc,{marked:!0}),lc(i,n,oc,{end:!0})];},codeBlock:function(t,e,n,r){var o=t.fenceOffset,i=t.fenceLength,s=t.fenceChar,a=t.info,c=t.infoPadding,l=t.parent,u=o+i,p=[lc(js(e,1),n,"codeBlock")];s&&p.push(lc(e,zs(e,u),sc)),a&&p.push(lc(zs(e,i),zs(e,i+c+a.length),ic)),new RegExp("^(\\s{0,4})("+s+"{"+i+",})").test(r)&&p.push(lc(js(n,1),n,sc));var d=dc(l,e,n,"code-block");return d?p.concat(d):p;},blockQuote:function(t,e,n){var r=t.parent&&"blockQuote"!==t.parent.type?[lc(e,n,"blockQuote")]:[];if(t.firstChild){
var o=[];
"paragraph"===t.firstChild.type?o=function(t){for(var e=[];t;)
e.push(lc([Os(t),As(t)],[Ds(t),Ls(t)+1],ac)),t=t.next;return e;}(t.firstChild.firstChild):"list"===t.firstChild.type&&(o=fc(t.firstChild,ac)),r=i(i([],r),o);
}return r;},item:function(t,e){var n=t.listData,r=n.padding,s=n.task,a=function(t){for(var e=0;t.parent.parent&&"item"===t.parent.parent.type;)
t=t.parent.parent,e+=1;return["listItem",o(o({},[{odd:!0},{even:!0}][e%2]),{listStyle:!0})];}(t),c=[lc.apply(void 0,i([e,zs(e,r)],a))];return s&&(c.push(lc(zs(e,r),zs(e,r+3),"taskDelimiter")),c.push(lc(zs(e,r+1),zs(e,r+2),ic))),c.concat(fc(t.firstChild,ac));},customBlock:function(t,e,n){var r=t,o=r.offset,i=r.syntaxLength,s=r.info,a=r.parent,c=o+i,l=[lc(js(e,1),n,"customBlock")];l.push(lc(e,zs(e,c),sc)),s&&l.push(lc(zs(e,c),zs(e,i+s.length),ic)),l.push(lc(js(n,1),n,sc));var u=dc(a,e,n,"custom-block");return u?l.concat(u):l;}},mc={thematicBreak:"thematicBreak",table:"table",tableCell:"tableCell",htmlInline:"html"};
function vc(t,e,n,r){var o=t.type;return Va()(hc[o])?hc[o](t,e,n,r):mc[o]?[lc(e,n,mc[o])]:null;}
var gc={};
function yc(t){var e=t.schema,n=t.toastMark;return new wn({appendTransaction:function(t,r,o){var i=t[0],s=o.tr;if(i.docChanged){
var a=[];
i.getMeta("editResult").forEach(function(t){var e=t.nodes,r=t.removedNodeRange;if(e.length){
a=a.concat(function(t,e){var n=t.doc,r=e[0].sourcepos[0],o=ue(e).sourcepos[1],i=[r[0],r[1]],s=[o[0],o[1]+1],a=[];return function(t,e,n){var r=[];gc={};for(var o=e[0]-1;o<n[0];o+=1){
var i=t.child(o),s=i.attrs.codeEnd,a=i.attrs.codeStart;
if(a&&s&&!te(r,a)){
r.push(a),s=Math.min(s,t.childCount);
for(var c=a-1,l=n[0],u=c;u<l;u+=1)
gc[u]=!0;
}
}}(n,r,o),a.push({start:i,end:s}),a;}(s,e));
for(var o=0,i=e;o<i.length;o++)
for(var c=i[o].walker(),l=c.next();l;){
var u=l.node;
l.entering&&(a=a.concat(wc(u,n))),l=c.next();
}
}else
if(r)
for(var p=s.doc.childCount-1,d=r.line,f=d[0],h=d[1],m=Math.min(f,p),v=Math.min(h,p),g=m;g<=v;g+=1)
gc[g]=!0;}),function(t,e,n){var r=t.doc,o=e.nodes.paragraph,i=Qa(r,r.childCount);n.forEach(function(n){var s=n.start,a=n.end,c=n.spec,l=n.lineBackground,u=Math.min(s[0],r.childCount)-1,p=Math.min(a[0],r.childCount)-1,d=r.child(u),f=r.child(p),h=i[u],m=i[p];(h+=s[1]+Za(d,s[1]-1),m+=a[1]+Za(f,a[1]-1),c)?l?function(t,e,n,r,o){void 0===o&&(o={});for(var i=r.startIndex,s=r.endIndex,a=r.from,c=r.to,l=!1,u=i;u<=s;u+=1)
delete gc[u],l=bc(e,u,o);l&&t.setBlockType(a,c,n,o);}(t,r,o,{from:h,to:m,startIndex:u,endIndex:p},c.attrs):t.addMark(h,m,e.mark(c.type,c.attrs)):t.removeMark(h,m);}),function(t,e,n){Object.keys(gc).forEach(function(r){var o=Number(r),i=Math.min(Number(r)+1,t.doc.childCount-1),s=e[o],a=e[i]-1;o===i&&(a+=2),t.setBlockType(s,a,n);});}(t,i,o);}(s,e,a);
}return s.setMeta("widget",i.getMeta("widget"));}});}
function bc(t,e,n){return Object.keys(n).some(function(r){return n[r]!==t.child(e).attrs[r];});}
function wc(t,e){var n=e.getLineTexts(),r=[Os(t),As(t)],o=[Ds(t),Ls(t)+1],i=vc(t,r,o,n[o[0]-1]);return null!=i?i:[];}
var kc=["taskList","orderedList","bulletList","table","strong","emph","strike","heading","thematicBreak","blockQuote","code","codeBlock","indent","outdent"];
function xc(t){var e={indent:{active:!1,disabled:!0},outdent:{active:!1,disabled:!0}},n=!0;return function(t,e,n){for(void 0===n&&(n=!0),t=n?t:t.parent;t&&"document"!==t.type;)
e(t),t=t.parent;}(t,function(t){var r=function(t){var e=t.type;return Rs(t)?t.listData.task?"taskList":"ordered"===t.listData.type?"orderedList":"bulletList":-1!==e.indexOf("table")?"table":te(kc,e)?e:null;}(t);r&&("bulletList"===r||"orderedList"===r?n&&(e[r]={active:!0},e.indent.disabled=!1,e.outdent.disabled=!1,n=!1):e[r]={active:!0});}),e;}
function Cc(t){var e=t.toastMark,n=t.eventEmitter;return new wn({view:function(){return{update:function(t,r){var o=t.state,i=o.doc,s=o.selection;if(!(r&&r.doc.eq(i)&&r.selection.eq(s))){
var a=s.from,c=o.doc.resolve(a).start(),l=a-c;
a===c&&(l+=1);
var u=[o.doc.content.findIndex(a).index+1,l],p=e.findNodeAtPosition(u),d=xc(p);
n.emit("changeToolbarState",{cursorPos:u,mdNode:p,toolbarState:d}),n.emit("setFocusedNode",p);
}}};}});}
var Tc=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"doc";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"block+"};},enumerable:!1,configurable:!0}),n;}(Ba),Mc=function(){function t(){}return Object.defineProperty(t.prototype,"type",{get:function(){return"mark";},enumerable:!1,configurable:!0}),t.prototype.setContext=function(t){this.context=t;},t;}(),Sc=Mc;
function Ec(t,e){return Nc(t,e-1);}
function Nc(t,e){return t.child(e).textContent;}
var Oc=/^\s*> ?/,Dc=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"blockQuote";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("block-quote")},0];}};},enumerable:!1,configurable:!0}),n.prototype.createBlockQuoteText=function(t,e){return e?t.replace(Oc,"").trim():"> "+t.trim();},n.prototype.extendBlockQuote=function(){var t=this;return function(e,n){var r=e.selection,o=e.doc,i=e.tr,s=e.schema,a=tc(r),c=a.endFromOffset,l=a.endToOffset,u=a.endIndex,p=a.to,d=Nc(o,u);if(Oc.test(d)&&p>c&&r.empty){
if(!d.replace(Oc,"").trim())
i.deleteRange(c,l).split(i.mapping.map(l));else
{
var f=d.slice(p-c).trim();
Ns(i,l,f,Ts(s,t.createBlockQuoteText(f)));
}
return n(i),!0;
}return!1;};},n.prototype.commands=function(){var t=this;return function(){return function(e,n){var r=e.selection,o=e.doc,i=tc(r),s=i.startFromOffset,a=i.endToOffset,c=i.startIndex,l=i.endIndex,u=Oc.test(Nc(o,c)),p=Es({state:e,startIndex:c,endIndex:l,from:s,createText:function(e){return t.createBlockQuoteText(e,u);}});return n(p.setSelection(Ms(p,p.mapping.map(a)))),!0;};};},n.prototype.keymaps=function(){var t=this.commands()();return{"alt-q":t,"alt-Q":t,Enter:this.extendBlockQuote()};},n;}(Sc),Ac=/(^\s*)([-*+] |[\d]+\. )/,Lc=/(^\s*)([\d])+\.( \[[ xX]])? /,Ic=/^(\s*)((\d+)([.)]\s(?:\[(?:x|\s)\]\s)?))(.*)/,Rc=/(^\s*)([-*+]|[\d]+\.)( \[[ xX]])? /,Pc=/^(\s*)([-*+]+(\s(?:\[(?:x|\s)\]\s)?))(.*)/,Bc=/(^\s*)([-*+] |[\d]+\. )(\[[ xX]] )/,Fc=/(^\s*)([-*+])( \[[ xX]]) /;
function Hc(t){return Lc.test(t)?"ordered":"bullet";}
function zc(t){for(var e=0;t&&"document"!==t.type;)
"list"===t.type&&(e+=1),t=t.parent;return e;}
function jc(t,e,n,r){for(var o=t.getLineTexts().length,i=[],s=e;r?s<o:s>1;){
s=r?s+1:s-1;
var a=t.findFirstNodeAtLine(s),c=zc(a);
if(c===n)
i.push({line:s,depth:n,mdNode:a});else
if(c<n)
break;
}return i;}
function _c(t,e,n,r){void 0===r&&(r=0);var o=Number.MAX_VALUE,i=0,s=e.map(function(e,s){var a=e.line;o=Math.min(a-1,o),i=Math.max(a-1,i);var c=Ec(t,a);return c="bullet"===n?function(t){if(!Ac.test(t))
return"* "+t;var e=Hc(t);return"bullet"===e&&Rc.test(t)?t=t.replace(Fc,"$1$2 "):"ordered"===e&&(t=t.replace(Lc,"$1* ")),t;}(c):function(t,e){if(!Ac.test(t))
return e+". "+t;var n=Hc(t);if("bullet"===n||"ordered"===n&&Rc.test(t))
t=t.replace(Rc,"$1"+e+". ");else
if("ordered"===n){
var r=Ic.exec(t)[3];
Number(r)!==e&&(t=t.replace(Lc,"$1"+e+". "));
}return t;}(c,s+1+r),{text:c,line:a};});return{changedResults:s,firstIndex:o,lastIndex:i};}
function qc(t,e){var n,r,o,i,s,a,c,l=(r=(n=e).toastMark,o=n.mdNode,i=n.line,s=zc(o),a=jc(r,i,s,!1).reverse(),c=jc(r,i,s,!0),a.concat([{line:i,depth:s,mdNode:o}]).concat(c));return _c(e.doc,l,t);}
var Vc={bullet:function(t){return qc("bullet",t);},ordered:function(t){return qc("ordered",t);},task:function(t){var e=t.mdNode,n=t.doc,r=t.line,o=Ec(n,r);return e.listData.task?o=o.replace(Bc,"$1$2"):Rs(e)&&(o=o.replace(Ac,"$1$2[ ] ")),{changedResults:[{text:o,line:r}]};}},$c={bullet:function(t){var e=t.doc,n=t.line;return{changedResults:[{text:"* "+Ec(e,n),line:n}]};},ordered:function(t){for(var e=t.toastMark,n=t.doc,r=t.line,o=t.startLine,i=Ec(n,r),s=1,a=o,c=0,l=o-1;l>0;l-=1){
var u=e.findFirstNodeAtLine(l),p=Ec(n,l)&&!!Hs(u,function(t){return Rs(t);}),d=Ic.exec(Ec(n,l));
if(!d&&!p)
break;
if(d||!p){
var f=d,h=f[1],m=f[3];
if(!h){
s=Number(m),a=l;
break;
}
}else

c+=1;
}return{changedResults:[{text:s+r-a-c+". "+i,line:r}]};},task:function(t){var e=t.doc,n=t.line;return{changedResults:[{text:"* [ ] "+Ec(e,n),line:n}]};}},Uc={bullet:function(t){var e=t.line,n=Ec(t.doc,e),r=Pc.exec(n);return{listSyntax:""+r[1]+r[2]};},ordered:function(t){var e=t.toastMark,n=t.line,r=t.mdNode,i=t.doc,s=zc(r),a=Ec(i,n),c=Ic.exec(a),l=c[1],u=c[3],p=c[4],d=Number(u)+1,f=""+l+d+p,h=jc(e,n,s,!0).filter(function(t){var e=Ic.exec(Ec(i,t.line));return e&&e[1].length===l.length&&!!Hs(t.mdNode,function(t){return Ps(t);});});return o({listSyntax:f},_c(i,h,"ordered",d));}};
function Wc(t,e,n,r,o){for(var i=[],s=Ec(t,n),a=Ic.exec(s);a;){
var c=a[1],l=a[4],u=a[5],p=c.length;
if(p===o)
i.push(Ts(e,""+c+r+l+u)),r+=1,n+=1;else
if(p>o){
var d=Wc(t,e,n,1,p);
n=d.line,i=i.concat(d.nodes);
}
if(p<o||n>t.childCount)
break;
s=Ec(t,n),a=Ic.exec(s);
}return{nodes:i,line:n};}
var Jc=/(^\s{1,4})(.*)/;
function Gc(t,e,n){return t<e||Ac.test(n)||Oc.test(n);}
function Kc(t,e,n){var r=n.$from;0===r.depth&&(r=t.resolve(r.pos-1));var o=r.node(1),i=r.start(1),s=o.content.size;return o.rangeHasMark(0,s,e.marks.table)&&r.pos-i!==s&&r.pos!==i;}
function Zc(t,e){var n=e.from,r=e.to;if("indent"===e.type){
n+=4,r+=4*(e.lineLen+1);
}else
{
var o=e.spaceLenList;
n-=o[0];
for(var i=0;i<o.length;i+=1)
r-=o[i];
}return Ms(t,n,r);}
var Xc=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"paragraph";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"inline*",attrs:{className:{default:null},codeStart:{default:null},codeEnd:{default:null}},selectable:!1,group:"block",parseDOM:[{tag:"div"}],toDOM:function(t){var e=t.attrs;return e.className?["div",{class:ba(e.className)},0]:["div",0];}};},enumerable:!1,configurable:!0}),n.prototype.reorderList=function(t,e){for(var n=this.context,r=n.view,o=n.toastMark,i=n.schema,s=r.state,a=s.tr,c=s.selection,l=s.doc,u=o.findFirstNodeAtLine(t),p=u;u&&!Bs(u)&&"document"!==u.parent.type;)
if(Ps(u=u.parent)){
p=u;
break;
}p&&(t=p.sourcepos[0][0]);var d=Ic.exec(Ec(l,t)),f=d[1],h=d[3],m=f.length,v=Wc(l,i,t,Number(h),m),g=v.line,y=v.nodes;e=Math.max(e,g-1);for(var b=ec(l,t-1).startOffset,w=t-1;w<=e-1;w+=1){
var k=l.child(w),x=k.nodeSize,C=k.content,T=a.mapping.map(b),M=T+C.size;
a.replaceWith(T,M,y[w-t+1]),b+=x;
}var S=Ms(a,c.from,c.to);r.dispatch(a.setSelection(S));},n.prototype.indent=function(t){var e=this;return void 0===t&&(t=!1),function(){return function(n,r){var o=n.schema,i=n.selection,s=n.doc,a=tc(i),c=a.from,l=a.to,u=a.startFromOffset,p=a.startIndex,d=a.endIndex;if(t&&Kc(s,o,i))
return!1;var f=Nc(s,p);if(t&&Gc(c,l,f)||!t&&Ac.test(f)){
var h=Es({state:n,from:u,startIndex:p,endIndex:d,createText:function(t){return"    "+t;}}),m={type:"indent",from:c,to:l,lineLen:d-p};
r(h.setSelection(Zc(h,m))),Ic.test(f)&&e.reorderList(p+1,d+1);
}else

t&&r(n.tr.insert(l,Ts(o,"    ")));return!0;};};},n.prototype.outdent=function(t){var e=this;return void 0===t&&(t=!1),function(){return function(n,r){var o=n.selection,i=n.doc,s=n.schema,a=tc(o),c=a.from,l=a.to,u=a.startFromOffset,p=a.startIndex,d=a.endIndex;if(t&&Kc(i,s,o))
return!1;var f=Nc(i,p);if(t&&Gc(c,l,f)||!t&&Ac.test(f)){
var h=[],m=Es({state:n,from:u,startIndex:p,endIndex:d,createText:function(t){var e=Jc.exec(t);return h.push(e?e[1].length:0),t.replace(Jc,"$2");}}),v={type:"outdent",from:c,to:l,spaceLenList:h};
r(m.setSelection(Zc(m,v))),Ic.test(f)&&e.reorderList(p+1,d+1);
}else
if(t){
var g=f.slice(0,l-u),y=g.replace(/\s{1,4}$/,""),b=l-(g.length-y.length);
r(n.tr.delete(b,l));
}return!0;};};},n.prototype.deleteLines=function(){var t=this;return function(e,n){var r=t.context.view,o=tc(e.selection),i=o.startFromOffset,s=o.endToOffset;return Ji(function(){return n(e.tr.deleteRange(i,s)),!0;},Bi)(e,n,r);};},n.prototype.moveDown=function(){return function(t,e){var n=t.doc,r=t.tr,o=t.selection,i=t.schema,s=tc(o),a=s.startFromOffset,c=s.endToOffset,l=s.endIndex;if(l<n.content.childCount-1){
var u=n.child(l+1),p=u.nodeSize,d=u.textContent;
return r.delete(c,c+p).split(a).insert(r.mapping.map(a)-2,Ts(i,d)),e(r),!0;
}return!1;};},n.prototype.moveUp=function(){return function(t,e){var n=t.tr,r=t.doc,o=t.selection,i=t.schema,s=tc(o),a=s.startFromOffset,c=s.endToOffset,l=s.startIndex;if(l>0){
var u=r.child(l-1),p=u.nodeSize,d=u.textContent;
return n.delete(a-p,a).split(n.mapping.map(c)).insert(n.mapping.map(c),Ts(i,d)),e(n),!0;
}return!1;};},n.prototype.commands=function(){return{indent:this.indent(),outdent:this.outdent()};},n.prototype.keymaps=function(){return{Tab:this.indent(!0)(),"Shift-Tab":this.outdent(!0)(),"Mod-d":this.deleteLines(),"Mod-D":this.deleteLines(),"Alt-ArrowUp":this.moveUp(),"Alt-ArrowDown":this.moveDown()};},n;}(Ba),Qc=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"text";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{group:"inline"};},enumerable:!1,configurable:!0}),n;}(Ba),Yc=/^#{1,6}\s/,tl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"heading";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:{level:{default:1},seText:{default:!1}},toDOM:function(t){var e=t.attrs,n="heading|heading"+e.level;return e.seText&&(n+="|delimiter|setext"),["span",{class:ba.apply(void 0,n.split("|"))},0];}};},enumerable:!1,configurable:!0}),n.prototype.createHeadingText=function(t,e,n){for(var r=e.replace(n,"").trim(),o="";t>0;)
o+="#",t-=1;return o+" "+r;},n.prototype.commands=function(){var t=this;return function(e){return function(n,r){var o=e.level,i=tc(n.selection),s=i.startFromOffset,a=i.endToOffset,c=Es({state:n,from:s,startIndex:i.startIndex,endIndex:i.endIndex,createText:function(e){var n=e.match(Yc),r=n?n[0]:"";return t.createHeadingText(o,e,r);}});return r(c.setSelection(Ms(c,c.mapping.map(a)))),!0;};};},n;}(Sc),el="```",nl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"codeBlock";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("code-block")},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){var n=t.selection,r=t.schema,o=t.tr,i=tc(n),s=i.startFromOffset,a=i.endToOffset,c=Ts(r,el);return o.insert(s,c).split(s+el.length),o.split(o.mapping.map(a)).insert(o.mapping.map(a),c),e(o.setSelection(Ms(o,o.mapping.map(a)-(el.length+2)))),!0;};};},n.prototype.keepIndentation=function(){var t=this;return function(e,n){var r=e.selection,o=e.tr,i=e.doc,s=e.schema,a=t.context.toastMark,c=tc(r),l=c.startFromOffset,u=c.endToOffset,p=c.endIndex,d=c.from,f=c.to,h=Nc(i,p);if(d===f&&h.trim()){
var m=h.match(/^\s+/);
if(function(t){return t&&"codeBlock"===t.type;}(a.findFirstNodeAtLine(p+1))&&m){
var v=m[0],g=h.slice(f-l);
return Ns(o,u,g,Ts(s,v+g)),n(o),!0;
}
}return!1;};},n.prototype.keymaps=function(){var t=this.commands()();return{"Shift-Mod-p":t,"Shift-Mod-P":t,Enter:this.keepIndentation()};},n;}(Sc),rl=/\||\s/g;
function ol(t,e){for(var n="|",r=0;r<t;r+=1)
n+=e?" --- |":"  |";return n;}
var il=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"table";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("table")},0];}};},enumerable:!1,configurable:!0}),n.prototype.extendTable=function(){var t=this;return function(e,n){var r=e.selection,o=e.doc,i=e.tr,s=e.schema;if(!r.empty)
return!1;var a=tc(r),c=a.endFromOffset,l=a.endToOffset,u=a.endIndex,p=a.to,d=Nc(o,u),f=[u+1,p-c+1],h=Hs(t.context.toastMark.findNodeAtPosition(f),function(t){return Fs(t)&&("tableDelimRow"===t.parent.type||"tableBody"===t.parent.parent.type);});if(h){
var m=!d.replace(rl,"").trim(),v=ol(h.parent.parent.parent.columns.length);
return m?i.deleteRange(c,l).split(i.mapping.map(l)):i.split(l).insert(i.mapping.map(l),Ts(s,v)).setSelection(Ms(i,i.mapping.map(l)-2)),n(i),!0;
}return!1;};},n.prototype.moveTableCell=function(t){var e=this;return function(n,r){var o=n.selection,i=n.tr,s=tc(o),a=s.endFromOffset,c=[s.endIndex+1,s.to-a],l=Hs(e.context.toastMark.findNodeAtPosition(c),function(t){return Fs(t);});if(l){
var u=l.parent,p=function(t){return t?{type:"next",parentType:"tableHead",childType:"firstChild"}:{type:"prev",parentType:"tableBody",childType:"lastChild"};}(t),d=p.type,f=p.parentType,h=p.childType,m=Ls(l);
if(l[d])
m=Ls(l[d])-1;else
{
var v=u[d]||u.parent.type!==f?u[d]:u.parent[d][h];
if("next"===d)
m+=(v?Ls(v[h]):0)+2;else

"prev"===d&&(m=v?-4:0);
}
return r(i.setSelection(Ms(i,a+m))),!0;
}return!1;};},n.prototype.addTable=function(){return function(t){return function(e,n){var r=e.selection,o=e.tr,s=e.schema,a=t,c=a.columnCount,l=a.rowCount,u=tc(r).endToOffset,p=function(t){return[ol(t),ol(t,!0)];}(c),d=function(t,e){for(var n=[],r=0;r<e;r+=1)
n.push(ol(t));return n;}(c,l-1);return i(i([],p),d).forEach(function(t){o.split(o.mapping.map(u)).insert(o.mapping.map(u),Ts(s,t));}),n(o.setSelection(Ms(o,u+4))),!0;};};},n.prototype.commands=function(){return{addTable:this.addTable()};},n.prototype.keymaps=function(){return{Enter:this.extendTable(),Tab:this.moveTableCell(!0),"Shift-Tab":this.moveTableCell(!1)};},n;}(Sc),sl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"thematicBreak";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("thematic-break")},0];}};},enumerable:!1,configurable:!0}),n.prototype.hr=function(){return function(){return function(t,e){var n=t.selection,r=t.schema,o=t.tr,i=tc(n),s=i.from,a=i.to,c=i.endToOffset,l=Ts(r,"***");return o.split(s).replaceWith(o.mapping.map(s),o.mapping.map(a),l).split(o.mapping.map(a)).setSelection(Ms(o,o.mapping.map(c))),e(o),!0;};};},n.prototype.commands=function(){return{hr:this.hr()};},n.prototype.keymaps=function(){var t=this.hr()();return{"Mod-l":t,"Mod-L":t};},n;}(Sc);
function al(t,e){var n=t.type;return e<=t.sourcepos[0][0]&&("codeBlock"===n||"heading"===n||n.match("table"));}
var cl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"listItem";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:{odd:{default:!1},even:{default:!1},listStyle:{default:!1}},toDOM:function(t){var e=t.attrs,n=e.odd,r=e.even,o="list-item";return e.listStyle&&(o+="|list-item-style"),n&&(o+="|list-item-odd"),r&&(o+="|list-item-even"),["span",{class:ba.apply(void 0,o.split("|"))},0];}};},enumerable:!1,configurable:!0}),n.prototype.extendList=function(){var t=this;return function(e,n){var r=e.selection,o=e.doc,i=e.schema,s=e.tr,a=t.context.toastMark,c=tc(r),l=c.to,u=c.startFromOffset,p=c.endFromOffset,d=c.endIndex,f=c.endToOffset,h=Nc(o,d);if(!Ac.test(h)||r.from===u||!r.empty)
return!1;if(!h.replace(Rc,"").trim())
s.deleteRange(p,f).split(s.mapping.map(f));else
{
var m=Hc(h),v=a.findFirstNodeAtLine(d+1),g=h.slice(l-p),y={toastMark:a,mdNode:v,doc:o,line:d+1},b=Uc[m](y),w=b.listSyntax,k=b.changedResults;
if(null==k?void 0:k.length){
s.split(l),k.unshift({text:w+g,line:d+1}),t.changeToListPerLine(s,k,{from:l,startLine:k[0].line,endLine:ue(k).line});
var x=s.mapping.map(f)-g.length;
s.setSelection(Ms(s,x));
}else
{
Ns(s,f,g,Ts(i,w+g));
}
}return n(s),!0;};},n.prototype.toList=function(t){var e=this;return function(){return function(n,r){for(var o=n.doc,i=n.tr,s=n.selection,a=e.context.toastMark,c=tc(s),l=c.startIndex+1,u=c.endIndex+1,p=c.endToOffset,d=[],f=l;f<=u;f+=1){
var h=a.findFirstNodeAtLine(f);
if(h&&al(h,f))
break;
if(-1===d.indexOf(f)){
var m={toastMark:a,mdNode:h,doc:o,line:f,startLine:l},v=(Rs(h)?Vc[t](m):$c[t](m)).changedResults,g=e.changeToListPerLine(i,v,{from:ec(o,v[0].line-1).startOffset,startLine:v[0].line,endLine:ue(v).line,indexDiff:1});
p=Math.max(g,p),v&&(d=d.concat(v.map(function(t){return t.line;})));
}
}return r(i.setSelection(Ms(i,i.mapping.map(p)))),!0;};};},n.prototype.changeToListPerLine=function(t,e,n){for(var r=n.from,o=n.startLine,i=n.endLine,s=n.indexDiff,a=void 0===s?0:s,c=0,l=function(n){var o=t.doc.child(n),i=o.nodeSize,s=o.content,l=t.mapping.map(r),p=l+s.size,d=e.filter(function(t){return t.line-a===n;})[0];d&&(t.replaceWith(l,p,Ts(u.context.schema,d.text)),c=Math.max(c,r+s.size)),r+=i;},u=this,p=o-a;p<=i-a;p+=1)
l(p);return c;},n.prototype.toggleTask=function(){var t=this;return function(e,n){for(var r=e.selection,o=e.tr,i=e.doc,s=e.schema,a=t.context.toastMark,c=tc(r),l=c.startIndex,u=c.endIndex,p=null,d=l;d<=u;d+=1){
var f=a.findFirstNodeAtLine(d+1);
if(Rs(f)&&f.listData.task){
var h=f.listData,m=h.checked,v=h.padding,g=m?" ":"x",y=f.sourcepos[0],b=ec(i,y[0]-1).startOffset;
b+=y[1]+v,p=o.replaceWith(b,b+1,s.text(g));
}
}return!!p&&(n(p),!0);};},n.prototype.commands=function(){return{bulletList:this.toList("bullet"),orderedList:this.toList("ordered"),taskList:this.toList("task")};},n.prototype.keymaps=function(){var t=this.toList("bullet")(),e=this.toList("ordered")(),n=this.toList("task")(),r=this.toggleTask();return{"Mod-u":t,"Mod-U":t,"Mod-o":e,"Mod-O":e,"alt-t":n,"alt-T":n,"Shift-Ctrl-x":r,"Shift-Ctrl-X":r,Enter:this.extendList()};},n;}(Sc);
function ll(t,e){return function(){return function(n,r){var o=n.tr,i=n.selection,s=Va()(t)?t:function(e){return t.test(e);},a=e.length,c=o.doc,l=Ga(i),u=l[0],p=l[1],d=Math.max(u-a,1),f=Math.min(p+a,c.content.size-1),h=i.content(),m=h.content.textBetween(0,h.content.size,"\n"),v=c.textBetween(d,u,"\n"),g=c.textBetween(p,f,"\n");if(m=""+v+m+g,v&&g&&s(m))
o.delete(f-a,f).delete(d,d+a);else
{
o.insertText(e,p).insertText(e,u);
var y=i.empty?Ms(o,u+a):Ms(o,u+a,p+a);
o.setSelection(y);
}return r(o),!0;};};}
var ul=/^(\*{2}|_{2}).*([\s\S]*)\1$/m,pl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"strong";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("strong")},0];}};},enumerable:!1,configurable:!0}),n.prototype.bold=function(){return ll(ul,"**");},n.prototype.commands=function(){return{bold:this.bold()};},n.prototype.keymaps=function(){var t=this.bold()();return{"Mod-b":t,"Mod-B":t};},n;}(Sc),dl=/^(~{2}).*([\s\S]*)\1$/m,fl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"strike";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("strike")},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return ll(dl,"~~");},n.prototype.keymaps=function(){var t=this.commands()();return{"Mod-s":t,"Mod-S":t};},n;}(Sc),hl=/^(\*|_).*([\s\S]*)\1$/m,ml=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"emph";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("emph")},0];}};},enumerable:!1,configurable:!0}),n.prototype.italic=function(){return ll(hl,"*");},n.prototype.commands=function(){return{italic:this.italic()};},n.prototype.keymaps=function(){var t=this.italic()();return{"Mod-i":t,"Mod-I":t};},n;}(Sc),vl=/^(`).*([\s\S]*)\1$/m,gl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"code";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:{start:{default:!1},end:{default:!1},marked:{default:!1}},toDOM:function(t){var e=t.attrs,n="code";return e.start&&(n+="|delimiter|start"),e.end&&(n+="|delimiter|end"),e.marked&&(n+="|marked-text"),["span",{class:ba.apply(void 0,n.split("|"))},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return ll(vl,"`");},n.prototype.keymaps=function(){var t=this.commands()();return{"Shift-Mod-c":t,"Shift-Mod-C":t};},n;}(Sc),yl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"link";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:{url:{default:!1},desc:{default:!1}},toDOM:function(t){var e=t.attrs,n="link";return e.url&&(n+="|link-url|marked-text"),e.desc&&(n+="|link-desc|marked-text"),["span",{class:ba.apply(void 0,n.split("|"))},0];}};},enumerable:!1,configurable:!0}),n.prototype.addLinkOrImage=function(t){return function(e){return function(n,r){var o=n.selection,i=n.tr,s=n.schema,a=Ga(o),c=a[0],l=a[1],u=e,p=u.linkText,d=u.altText,f=u.linkUrl,h=u.imageUrl,m=p,v=f,g="";return"image"===t&&(m=d,v=h,g="!"),g+="["+(m=ie(m))+"]("+v+")",r(i.replaceWith(c,l,Ts(s,g))),!0;};};},n.prototype.commands=function(){return{addImage:this.addLinkOrImage("image"),addLink:this.addLinkOrImage("link")};},n;}(Sc),bl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"taskDelimiter";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("delimiter","list-item")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),wl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"delimiter";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("delimiter")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),kl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"meta";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("meta")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),xl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"markedText";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("marked-text")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),Cl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableCell";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("table-cell")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),Tl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"html";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("html")},0];}};},enumerable:!1,configurable:!0}),n;}(Sc),Ml="$$",Sl=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"customBlock";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{toDOM:function(){return["span",{class:ba("custom-block")},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(t){return function(e,n){var r=e.selection,o=e.schema,i=e.tr,s=tc(r),a=s.startFromOffset,c=s.endToOffset;if(!(null==t?void 0:t.info))
return!1;var l="$$"+t.info,u=Ts(o,l),p=Ts(o,Ml);return i.insert(a,u).split(a+l.length),i.split(i.mapping.map(c)).insert(i.mapping.map(c),p),n(i.setSelection(Ms(i,i.mapping.map(c)-(Ml.length+2)))),!0;};};},n;}(Sc),El=/x|backspace/i,Nl=/^\[(\s*)(x?)(\s*)\](?:\s+)/i;
var Ol="cut",Dl=/\r\n|\n|\r/,Al=function(t){function n(e,n){var r=t.call(this,e)||this,i=n.toastMark,s=n.useCommandShortcut,a=void 0===s||s,c=n.mdPlugins,l=void 0===c?[]:c;return r.editorType="markdown",r.el.classList.add("md-mode"),r.toastMark=i,r.extraPlugins=l,r.specs=r.createSpecs(),r.schema=r.createSchema(),r.context=r.createContext(),r.keymaps=r.createKeymaps(a),r.view=r.createView(),r.commands=r.createCommands(),r.specs.setContext(o(o({},r.context),{view:r.view})),r.createClipboard(),r.eventEmitter.listen("changePreviewTabWrite",function(t){return r.toggleActive(!0,t);}),r.eventEmitter.listen("changePreviewTabPreview",function(){return r.toggleActive(!1);}),r.initEvent(),r;}return e(n,t),n.prototype.toggleActive=function(t,e){xa(this.el,"active",t),t?e||this.focus():this.blur();},n.prototype.createClipboard=function(){var t=this;this.clipboard=document.createElement("textarea"),this.clipboard.className=ya("pseudo-clipboard"),this.clipboard.addEventListener("paste",function(e){var n=e.clipboardData||window.clipboardData,r=n&&n.items;if(r){
var o=gi()(r).some(function(t){return"string"===t.kind&&"text/rtf"===t.type;});
if(!o){
var i=Ra(r);
i&&(e.preventDefault(),Ia(t.eventEmitter,i,e.type));
}
}}),this.clipboard.addEventListener("input",function(e){var n=e.target.value;t.replaceSelection(n),e.preventDefault(),e.target.value="";}),this.el.insertBefore(this.clipboard,this.view.dom);},n.prototype.createContext=function(){return{toastMark:this.toastMark,schema:this.schema,eventEmitter:this.eventEmitter};},n.prototype.createSpecs=function(){return new Ja([new Tc(),new Xc(),new za(),new Qc(),new tl(),new Dc(),new nl(),new Sl(),new il(),new Cl(),new sl(),new cl(),new pl(),new fl(),new ml(),new gl(),new yl(),new wl(),new bl(),new xl(),new kl(),new Tl()]);},n.prototype.createPlugins=function(){return this.defaultPlugins.concat(i([yc(this.context),Cc(this.context),(t=this.context,e=t.schema,n=t.toastMark,new wn({props:{handleDOMEvents:{keyup:function(t,r){var o,i=t.state,s=i.doc,a=i.tr,c=i.selection;if(c.empty&&El.test(r.key)){
var l=tc(c),u=l.startIndex,p=l.startFromOffset,d=[u+1,l.from-p+1],f=Hs(n.findNodeAtPosition(d),function(t){var e;return"paragraph"===t.type&&"item"===(null===(e=t.parent)||void 0===e?void 0:e.type);});
if(null===(o=null==f?void 0:f.firstChild)||void 0===o?void 0:o.literal){
var h=f.firstChild,m=h.literal.match(Nl);
if(m){
var v=h.sourcepos[0],g=m[1],y=m[2],b=m[3],w=g.length+b.length,k=ec(s,v[0]-1).startOffset,x=v[1]+k;
if(y){
var C=w?w+1:0;
a.replaceWith(x,C+x,e.text(y)),t.dispatch(a);
}else

w||(a.insertText(" ",x),t.dispatch(a));
}
}
}return!1;}}}}))],this.createPluginProps()));var t,e,n;},n.prototype.createView=function(){var t=this;return new ui(this.el,{state:this.createState(),dispatchTransaction:function(e){t.updateMarkdown(e);var n=t.view.state.applyTransaction(e).state;t.view.updateState(n),t.emitChangeEvent(e);},handleKeyDown:function(e,n){return(n.metaKey||n.ctrlKey)&&"V"===n.key.toUpperCase()&&t.clipboard.focus(),t.eventEmitter.emit("keydown",t.editorType,n),!1;},handleDOMEvents:{copy:function(e,n){return t.captureCopy(n);},cut:function(e,n){return t.captureCopy(n,Ol);},scroll:function(){return t.eventEmitter.emit("scroll","editor"),!0;},keyup:function(e,n){return t.eventEmitter.emit("keyup",t.editorType,n),!1;}},nodeViews:{widget:Fa}});},n.prototype.createCommands=function(){return this.specs.commands(this.view);},n.prototype.captureCopy=function(t,e){t.preventDefault();var n=this.view.state,r=n.selection,o=n.tr;if(r.empty)
return!0;var i=this.getChanged(r.content());return t.clipboardData?t.clipboardData.setData("text/plain",i):window.clipboardData.setData("Text",i),e===Ol&&this.view.dispatch(o.deleteSelection().scrollIntoView().setMeta("uiEvent",Ol)),!0;},n.prototype.updateMarkdown=function(t){var e=this;t.docChanged&&t.steps.forEach(function(n,r){if(n.slice&&!(n instanceof Ae)){
var o=t.docs[r],i=[n.from,n.to],s=Xa(o,i[0],i[1]),a=s[0],c=s[1],l=e.getChanged(n.slice);
a[0]===c[0]&&a[1]===c[1]&&""===l&&(l="\n");
var u=e.toastMark.editMarkdown(a,c,l);
e.eventEmitter.emit("updatePreview",u),t.setMeta("editResult",u).scrollIntoView();
}});},n.prototype.getChanged=function(t){var e="",n=t.content.size;return t.content.nodesBetween(0,n,function(t,r){t.isText?e+=t.text.slice(Math.max(0,r)-r,n-r):t.isBlock&&r>0&&(e+="\n");}),e;},n.prototype.setSelection=function(t,e){void 0===e&&(e=t);var n=this.view.state.tr,r=Ya(n.doc,t,e),o=r[0],i=r[1];this.view.dispatch(n.setSelection(Ms(n,o,i)).scrollIntoView());},n.prototype.replaceSelection=function(t,e,n){var r,o=this.view.state,i=o.tr,s=o.schema,a=o.doc,c=t.split(Dl).map(function(t){return Cs(s,Ys(t,s));}),l=new y(p.from(c),1,1);if(this.focus(),e&&n){
var u=Ya(a,e,n),d=u[0],f=u[1];
r=i.replaceRange(d,f,l);
}else

r=i.replaceSelection(l);this.view.dispatch(r.scrollIntoView());},n.prototype.deleteSelection=function(t,e){var n,r=this.view.state,o=r.tr,i=r.doc;if(t&&e){
var s=Ya(i,t,e),a=s[0],c=s[1];
n=o.deleteRange(a,c);
}else

n=o.deleteSelection();this.view.dispatch(n.scrollIntoView());},n.prototype.getSelectedText=function(t,e){var n=this.view.state,r=n.doc,o=n.selection,i=o.from,s=o.to;if(t&&e){
var a=Ya(r,t,e);
i=a[0],s=a[1];
}return r.textBetween(i,s,"\n");},n.prototype.getSelection=function(){var t=this.view.state.selection,e=t.from,n=t.to;return Xa(this.view.state.tr.doc,e,n);},n.prototype.setMarkdown=function(t,e){void 0===e&&(e=!0);var n=t.split(Dl),r=this.view.state,o=r.tr,i=r.doc,s=r.schema,a=n.map(function(t){return Cs(s,Ys(t,s));});this.view.dispatch(o.replaceWith(0,i.content.size,a)),e&&this.moveCursorToEnd(!0);},n.prototype.addWidget=function(t,e,n){var r=this.view.state,o=r.tr,i=r.doc,s=r.selection,a=n?Ya(i,n,n)[0]:s.to;this.view.dispatch(o.setMeta("widget",{pos:a,node:t,style:e}));},n.prototype.replaceWithWidget=function(t,e,n){var r=this.view.state,o=r.tr,i=r.schema,s=Ya(r.doc,t,e),a=Ys(n,i);this.view.dispatch(o.replaceWith(s[0],s[1],a));},n.prototype.getRangeInfoOfNode=function(t){var e=this.view.state,n=e.doc,r=e.selection,o=t||Xa(n,r.from)[0],i=this.toastMark.findNodeAtPosition(o);return"text"===i.type&&"paragraph"!==i.parent.type&&(i=i.parent),i.sourcepos[1][1]+=1,{range:i.sourcepos,type:i.type};},n.prototype.getMarkdown=function(){return this.toastMark.getLineTexts().map(function(t){return Js(t);}).join("\n");},n.prototype.getToastMark=function(){return this.toastMark;},n;}(_a),Ll=Al,Il=n(349),Rl=n.n(Il),Pl=n(348),Bl=n.n(Pl),Fl=function(t,e){return Fl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var n in e)
Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);},Fl(t,e);};
function Hl(t,e){if("function"!=typeof e&&null!==e)
throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t;}Fl(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n());}
var zl=function(){return zl=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)
for(var o in e=arguments[n])
Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t;},zl.apply(this,arguments);};
function jl(t,e,n){if(n||2===arguments.length)
for(var r,o=0,i=e.length;o<i;o++)
!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e));}
var _l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},ql={};
function Vl(t,e,n){var r,o,i,s,a,c="";for("string"!=typeof e&&(n=e,e=Vl.defaultChars),void 0===n&&(n=!0),a=function(t){var e,n,r=ql[t];if(r)
return r;for(r=ql[t]=[],e=0;e<128;e++)
n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?r.push(n):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)
r[t.charCodeAt(e)]=t[e];return r;}(e),r=0,o=t.length;r<o;r++)
if(i=t.charCodeAt(r),n&&37===i&&r+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3)))
c+=t.slice(r,r+3),r+=2;else
if(i<128)
c+=a[i];else
if(i>=55296&&i<=57343){
if(i>=55296&&i<=56319&&r+1<o&&(s=t.charCodeAt(r+1))>=56320&&s<=57343){
c+=encodeURIComponent(t[r]+t[r+1]),r++;
continue;
}
c+="%EF%BF%BD";
}else

c+=encodeURIComponent(t[r]);return c;}
Vl.defaultChars=";/?:@&=+$,-_.!~*'()#",Vl.componentChars="-_.!~*'()";
var $l=Vl,Ul={},Wl={},Jl={Aacute:"횁",aacute:"찼",Abreve:"훯",abreve:"훱",ac:"��",acd:"��",acE:"�앍�",Acirc:"횂",acirc:"창",acute:"쨈",Acy:"�",acy:"逵",AElig:"횈",aelig:"챈",af:"��",Afr:"�봽",afr:"�뵞",Agrave:"�",agrave:"횪",alefsym:"��",aleph:"��",Alpha:"�",alpha:"慣",Amacr:"�",amacr:"훮",amalg:"殊�",amp:"&",AMP:"&",andand:"水�",And:"水�",and:"��",andd:"水�",andslope:"水�",andv:"水�",ang:"��",ange:"數�",angle:"��",angmsdaa:"數�",angmsdab:"數�",angmsdac:"數�",angmsdad:"數�",angmsdae:"數�",angmsdaf:"數�",angmsdag:"數�",angmsdah:"數�",angmsd:"��",angrt:"��",angrtvb:"��",angrtvbd:"數�",angsph:"��",angst:"횇",angzarr:"��",Aogon:"훲",aogon:"훳",Aopf:"�뵺",aopf:"�븩",apacir:"水�",ap:"��",apE:"水�",ape:"��",apid:"��",apos:"'",ApplyFunction:"��",approx:"��",approxeq:"��",Aring:"횇",aring:"책",Ascr:"�뮏",ascr:"�뮭",Assign:"��",ast:"*",asymp:"��",asympeq:"��",Atilde:"횄",atilde:"찾",Auml:"횆",auml:"채",awconint:"��",awint:"殊�",backcong:"��",backepsilon:"灸",backprime:"��",backsim:"��",backsimeq:"��",Backslash:"��",Barv:"漱�",barvee:"��",barwed:"��",Barwed:"��",barwedge:"��",bbrk:"��",bbrktbrk:"��",bcong:"��",Bcy:"�",bcy:"閨",bdquo:"��",becaus:"��",because:"��",Because:"��",bemptyv:"數�",bepsi:"灸",bernou:"��",Bernoullis:"��",Beta:"�",beta:"棺",beth:"��",between:"��",Bfr:"�봾",bfr:"�뵟",bigcap:"��",bigcirc:"��",bigcup:"��",bigodot:"殊�",bigoplus:"殊�",bigotimes:"殊�",bigsqcup:"殊�",bigstar:"��",bigtriangledown:"��",bigtriangleup:"��",biguplus:"殊�",bigvee:"��",bigwedge:"��",bkarow:"搜�",blacklozenge:"樹�",blacksquare:"��",blacktriangle:"��",blacktriangledown:"��",blacktriangleleft:"��",blacktriangleright:"��",blank:"��",blk12:"��",blk14:"��",blk34:"��",block:"��",bne:"=��",bnequiv:"�△깷",bNot:"漱�",bnot:"��",Bopf:"�뵻",bopf:"�븪",bot:"��",bottom:"��",bowtie:"��",boxbox:"樹�",boxdl:"��",boxdL:"��",boxDl:"��",boxDL:"��",boxdr:"��",boxdR:"��",boxDr:"��",boxDR:"��",boxh:"��",boxH:"��",boxhd:"��",boxHd:"��",boxhD:"��",boxHD:"��",boxhu:"��",boxHu:"��",boxhU:"��",boxHU:"��",boxminus:"��",boxplus:"��",boxtimes:"��",boxul:"��",boxuL:"��",boxUl:"��",boxUL:"��",boxur:"��",boxuR:"��",boxUr:"��",boxUR:"��",boxv:"��",boxV:"��",boxvh:"��",boxvH:"��",boxVh:"��",boxVH:"��",boxvl:"��",boxvL:"��",boxVl:"��",boxVL:"��",boxvr:"��",boxvR:"��",boxVr:"��",boxVR:"��",bprime:"��",breve:"�",Breve:"�",brvbar:"짝",bscr:"�뮮",Bscr:"��",bsemi:"��",bsim:"��",bsime:"��",bsolb:"樹�",bsol:"\\",bsolhsub:"��",bull:"��",bullet:"��",bump:"��",bumpE:"洙�",bumpe:"��",Bumpeq:"��",bumpeq:"��",Cacute:"훴",cacute:"훶",capand:"水�",capbrcup:"水�",capcap:"水�",cap:"��",Cap:"��",capcup:"水�",capdot:"水�",CapitalDifferentialD:"��",caps:"�⑼�",caret:"��",caron:"�",Cayleys:"��",ccaps:"水�",Ccaron:"훻",ccaron:"훾",Ccedil:"횉",ccedil:"챌",Ccirc:"훷",ccirc:"훸",Cconint:"��",ccups:"水�",ccupssm:"水�",Cdot:"훹",cdot:"훺",cedil:"쨍",Cedilla:"쨍",cemptyv:"數�",cent:"짖",centerdot:"쨌",CenterDot:"쨌",cfr:"�뵠",Cfr:"��",CHcy:"槻",chcy:"�",check:"��",checkmark:"��",Chi:"鍋",chi:"�",circ:"�",circeq:"��",circlearrowleft:"��",circlearrowright:"��",circledast:"��",circledcirc:"��",circleddash:"��",CircleDot:"��",circledR:"짰",circledS:"��",CircleMinus:"��",CirclePlus:"��",CircleTimes:"��",cir:"��",cirE:"樹�",cire:"��",cirfnint:"殊�",cirmid:"漱�",cirscir:"樹�",ClockwiseContourIntegral:"��",CloseCurlyDoubleQuote:"��",CloseCurlyQuote:"��",clubs:"��",clubsuit:"��",colon:":",Colon:"��",Colone:"水�",colone:"��",coloneq:"��",comma:",",commat:"@",comp:"��",compfn:"��",complement:"��",complexes:"��",cong:"��",congdot:"水�",Congruent:"��",conint:"��",Conint:"��",ContourIntegral:"��",copf:"�븫",Copf:"��",coprod:"��",Coproduct:"��",copy:"짤",COPY:"짤",copysr:"��",CounterClockwiseContourIntegral:"��",crarr:"��",cross:"��",Cross:"殊�",Cscr:"�뮒",cscr:"�뮯",csub:"漱�",csube:"漱�",csup:"漱�",csupe:"漱�",ctdot:"��",cudarrl:"搜�",cudarrr:"搜�",cuepr:"��",cuesc:"��",cularr:"��",cularrp:"搜�",cupbrcap:"水�",cupcap:"水�",CupCap:"��",cup:"��",Cup:"��",cupcup:"水�",cupdot:"��",cupor:"水�",cups:"�わ�",curarr:"��",curarrm:"搜�",curlyeqprec:"��",curlyeqsucc:"��",curlyvee:"��",curlywedge:"��",curren:"짚",curvearrowleft:"��",curvearrowright:"��",cuvee:"��",cuwed:"��",cwconint:"��",cwint:"��",cylcty:"��",dagger:"��",Dagger:"��",daleth:"��",darr:"��",Darr:"��",dArr:"��",dash:"��",Dashv:"漱�",dashv:"��",dbkarow:"搜�",dblac:"�",Dcaron:"훿",dcaron:"휁",Dcy:"�",dcy:"畇",ddagger:"��",ddarr:"��",DD:"��",dd:"��",DDotrahd:"搜�",ddotseq:"水�",deg:"째",Del:"��",Delta:"�",delta:"灌",demptyv:"數�",dfisht:"收�",Dfr:"�뵁",dfr:"�뵡",dHar:"收�",dharl:"��",dharr:"��",DiacriticalAcute:"쨈",DiacriticalDot:"�",DiacriticalDoubleAcute:"�",DiacriticalGrave:"`",DiacriticalTilde:"�",diam:"��",diamond:"��",Diamond:"��",diamondsuit:"��",diams:"��",die:"짢",DifferentialD:"��",digamma:"�",disin:"��",div:"첨",divide:"첨",divideontimes:"��",divonx:"��",DJcy:"�",djcy:"�",dlcorn:"��",dlcrop:"��",dollar:"$",Dopf:"�뵽",dopf:"�븬",Dot:"짢",dot:"�",DotDot:"��",doteq:"��",doteqdot:"��",DotEqual:"��",dotminus:"��",dotplus:"��",dotsquare:"��",doublebarwedge:"��",DoubleContourIntegral:"��",DoubleDot:"짢",DoubleDownArrow:"��",DoubleLeftArrow:"��",DoubleLeftRightArrow:"��",DoubleLeftTee:"漱�",DoubleLongLeftArrow:"��",DoubleLongLeftRightArrow:"��",DoubleLongRightArrow:"��",DoubleRightArrow:"��",DoubleRightTee:"��",DoubleUpArrow:"��",DoubleUpDownArrow:"��",DoubleVerticalBar:"��",DownArrowBar:"搜�",downarrow:"��",DownArrow:"��",Downarrow:"��",DownArrowUpArrow:"��",DownBreve:"�",downdownarrows:"��",downharpoonleft:"��",downharpoonright:"��",DownLeftRightVector:"收�",DownLeftTeeVector:"收�",DownLeftVectorBar:"收�",DownLeftVector:"��",DownRightTeeVector:"收�",DownRightVectorBar:"收�",DownRightVector:"��",DownTeeArrow:"��",DownTee:"��",drbkarow:"搜�",drcorn:"��",drcrop:"��",Dscr:"�뮓",dscr:"�뮰",DScy:"�",dscy:"�",dsol:"樹�",Dstrok:"휂",dstrok:"휃",dtdot:"��",dtri:"��",dtrif:"��",duarr:"��",duhar:"收�",dwangle:"數�",DZcy:"�",dzcy:"�",dzigrarr:"��",Eacute:"횋",eacute:"챕",easter:"水�",Ecaron:"휍",ecaron:"휎",Ecirc:"횎",ecirc:"챗",ecir:"��",ecolon:"��",Ecy:"葵",ecy:"�",eDDot:"水�",Edot:"휉",edot:"휊",eDot:"��",ee:"��",efDot:"��",Efr:"�뵂",efr:"�뵢",eg:"洙�",Egrave:"횊",egrave:"챔",egs:"洙�",egsdot:"洙�",el:"洙�",Element:"��",elinters:"��",ell:"��",els:"洙�",elsdot:"洙�",Emacr:"휅",emacr:"휆",empty:"��",emptyset:"��",EmptySmallSquare:"��",emptyv:"��",EmptyVerySmallSquare:"��",emsp13:"��",emsp14:"��",emsp:"��",ENG:"흮",eng:"흯",ensp:"��",Eogon:"휋",eogon:"휌",Eopf:"�뵾",eopf:"�븭",epar:"��",eparsl:"樹�",eplus:"水�",epsi:"琯",Epsilon:"�",epsilon:"琯",epsiv:"溝",eqcirc:"��",eqcolon:"��",eqsim:"��",eqslantgtr:"洙�",eqslantless:"洙�",Equal:"水�",equals:"=",EqualTilde:"��",equest:"��",Equilibrium:"��",equiv:"��",equivDD:"水�",eqvparsl:"樹�",erarr:"收�",erDot:"��",escr:"��",Escr:"��",esdot:"��",Esim:"水�",esim:"��",Eta:"�",eta:"管",ETH:"횖",eth:"챨",Euml:"횏",euml:"챘",euro:"��",excl:"!",exist:"��",Exists:"��",expectation:"��",exponentiale:"��",ExponentialE:"��",fallingdotseq:"��",Fcy:"圭",fcy:"�",female:"��",ffilig:"詮�",fflig:"詮�",ffllig:"詮�",Ffr:"�뵃",ffr:"�뵣",filig:"詮�",FilledSmallSquare:"��",FilledVerySmallSquare:"��",fjlig:"fj",flat:"��",fllig:"詮�",fltns:"��",fnof:"�",Fopf:"�뵿",fopf:"�븮",forall:"��",ForAll:"��",fork:"��",forkv:"漱�",Fouriertrf:"��",fpartint:"殊�",frac12:"쩍",frac13:"��",frac14:"쩌",frac15:"��",frac16:"��",frac18:"��",frac23:"��",frac25:"��",frac34:"쩐",frac35:"��",frac38:"��",frac45:"��",frac56:"��",frac58:"��",frac78:"��",frasl:"��",frown:"��",fscr:"�뮲",Fscr:"��",gacute:"풩",Gamma:"�",gamma:"款",Gammad:"�",gammad:"�",gap:"洙�",Gbreve:"휒",gbreve:"휓",Gcedil:"칙",Gcirc:"휏",gcirc:"휐",Gcy:"�",gcy:"均",Gdot:"휔",gdot:"치",ge:"��",gE:"��",gEl:"洙�",gel:"��",geq:"��",geqq:"��",geqslant:"水�",gescc:"洙�",ges:"水�",gesdot:"洙�",gesdoto:"洙�",gesdotol:"洙�",gesl:"�쏉�",gesles:"洙�",Gfr:"�뵄",gfr:"�뵥",gg:"��",Gg:"��",ggg:"��",gimel:"��",GJcy:"�",gjcy:"�",gla:"洙�",gl:"��",glE:"洙�",glj:"洙�",gnap:"洙�",gnapprox:"洙�",gne:"洙�",gnE:"��",gneq:"洙�",gneqq:"��",gnsim:"��",Gopf:"�붂",gopf:"�븯",grave:"`",GreaterEqual:"��",GreaterEqualLess:"��",GreaterFullEqual:"��",GreaterGreater:"洙�",GreaterLess:"��",GreaterSlantEqual:"水�",GreaterTilde:"��",Gscr:"�뮖",gscr:"��",gsim:"��",gsime:"洙�",gsiml:"洙�",gtcc:"洙�",gtcir:"水�",gt:">",GT:">",Gt:"��",gtdot:"��",gtlPar:"數�",gtquest:"水�",gtrapprox:"洙�",gtrarr:"收�",gtrdot:"��",gtreqless:"��",gtreqqless:"洙�",gtrless:"��",gtrsim:"��",gvertneqq:"�⑼�",gvnE:"�⑼�",Hacek:"�",hairsp:"��",half:"쩍",hamilt:"��",HARDcy:"窺",hardcy:"�",harrcir:"收�",harr:"��",hArr:"��",harrw:"��",Hat:"^",hbar:"��",Hcirc:"칟",hcirc:"칠",hearts:"��",heartsuit:"��",hellip:"��",hercon:"��",hfr:"�뵦",Hfr:"��",HilbertSpace:"��",hksearow:"搜�",hkswarow:"搜�",hoarr:"��",homtht:"��",hookleftarrow:"��",hookrightarrow:"��",hopf:"�븰",Hopf:"��",horbar:"��",HorizontalLine:"��",hscr:"�뮵",Hscr:"��",hslash:"��",Hstrok:"칡",hstrok:"침",HumpDownHump:"��",HumpEqual:"��",hybull:"��",hyphen:"��",Iacute:"횒",iacute:"챠",ic:"��",Icirc:"횓",icirc:"챤",Icy:"�",icy:"龜",Idot:"캅",IEcy:"�",iecy:"筠",iexcl:"징",iff:"��",ifr:"�뵧",Ifr:"��",Igrave:"횑",igrave:"챙",ii:"��",iiiint:"殊�",iiint:"��",iinfin:"樹�",iiota:"��",IJlig:"캉",ijlig:"캐",Imacr:"칭",imacr:"카",image:"��",ImaginaryI:"��",imagline:"��",imagpart:"��",imath:"캇",Im:"��",imof:"��",imped:"틉",Implies:"��",incare:"��",in:"��",infin:"��",infintie:"樹�",inodot:"캇",intcal:"��",int:"��",Int:"��",integers:"��",Integral:"��",intercal:"��",Intersection:"��",intlarhk:"殊�",intprod:"殊�",InvisibleComma:"��",InvisibleTimes:"��",IOcy:"�",iocy:"�",Iogon:"칼",iogon:"캄",Iopf:"��",iopf:"�븱",Iota:"�",iota:"菅",iprod:"殊�",iquest:"쩔",iscr:"�뮶",Iscr:"��",isin:"��",isindot:"��",isinE:"��",isins:"��",isinsv:"��",isinv:"��",it:"��",Itilde:"칩",itilde:"칫",Iukcy:"�",iukcy:"�",Iuml:"횕",iuml:"챦",Jcirc:"캑",jcirc:"캔",Jcy:"�",jcy:"橘",Jfr:"�뵇",jfr:"�뵩",jmath:"횅",Jopf:"�븕",jopf:"�븲",Jscr:"�뮙",jscr:"�뮸",Jsercy:"�",jsercy:"�",Jukcy:"�",jukcy:"�",Kappa:"�",kappa:"觀",kappav:"構",Kcedil:"캘",kcedil:"캠",Kcy:"�",kcy:"克",Kfr:"�뵊",kfr:"�뵪",kgreen:"캡",KHcy:"奎",khcy:"�",KJcy:"�",kjcy:"�",Kopf:"�븖",kopf:"�븳",Kscr:"�뮚",kscr:"��",lAarr:"��",Lacute:"캣",lacute:"캤",laemptyv:"數�",lagran:"��",Lambda:"�",lambda:"貫",lang:"��",Lang:"��",langd:"數�",langle:"��",lap:"洙�",Laplacetrf:"��",laquo:"짬",larrb:"��",larrbfs:"搜�",larr:"��",Larr:"��",lArr:"��",larrfs:"搜�",larrhk:"��",larrlp:"��",larrpl:"搜�",larrsim:"收�",larrtl:"��",latail:"搜�",lAtail:"搜�",lat:"洙�",late:"洙�",lates:"洙��",lbarr:"搜�",lBarr:"搜�",lbbrk:"��",lbrace:"{",lbrack:"[",lbrke:"數�",lbrksld:"數�",lbrkslu:"數�",Lcaron:"캭",lcaron:"컁",Lcedil:"캥",lcedil:"캬",lceil:"��",lcub:"{",Lcy:"�",lcy:"剋",ldca:"搜�",ldquo:"��",ldquor:"��",ldrdhar:"收�",ldrushar:"收�",ldsh:"��",le:"��",lE:"��",LeftAngleBracket:"��",LeftArrowBar:"��",leftarrow:"��",LeftArrow:"��",Leftarrow:"��",LeftArrowRightArrow:"��",leftarrowtail:"��",LeftCeiling:"��",LeftDoubleBracket:"��",LeftDownTeeVector:"收�",LeftDownVectorBar:"收�",LeftDownVector:"��",LeftFloor:"��",leftharpoondown:"��",leftharpoonup:"��",leftleftarrows:"��",leftrightarrow:"��",LeftRightArrow:"��",Leftrightarrow:"��",leftrightarrows:"��",leftrightharpoons:"��",leftrightsquigarrow:"��",LeftRightVector:"收�",LeftTeeArrow:"��",LeftTee:"��",LeftTeeVector:"收�",leftthreetimes:"��",LeftTriangleBar:"樹�",LeftTriangle:"��",LeftTriangleEqual:"��",LeftUpDownVector:"收�",LeftUpTeeVector:"收�",LeftUpVectorBar:"收�",LeftUpVector:"��",LeftVectorBar:"收�",LeftVector:"��",lEg:"洙�",leg:"��",leq:"��",leqq:"��",leqslant:"水�",lescc:"洙�",les:"水�",lesdot:"水�",lesdoto:"洙�",lesdotor:"洙�",lesg:"�싷�",lesges:"洙�",lessapprox:"洙�",lessdot:"��",lesseqgtr:"��",lesseqqgtr:"洙�",LessEqualGreater:"��",LessFullEqual:"��",LessGreater:"��",lessgtr:"��",LessLess:"洙�",lesssim:"��",LessSlantEqual:"水�",LessTilde:"��",lfisht:"收�",lfloor:"��",Lfr:"�뵋",lfr:"�뵫",lg:"��",lgE:"洙�",lHar:"收�",lhard:"��",lharu:"��",lharul:"收�",lhblk:"��",LJcy:"�",ljcy:"�",llarr:"��",ll:"��",Ll:"��",llcorner:"��",Lleftarrow:"��",llhard:"收�",lltri:"��",Lmidot:"커",lmidot:"�",lmoustache:"��",lmoust:"��",lnap:"洙�",lnapprox:"洙�",lne:"洙�",lnE:"��",lneq:"洙�",lneqq:"��",lnsim:"��",loang:"��",loarr:"��",lobrk:"��",longleftarrow:"��",LongLeftArrow:"��",Longleftarrow:"��",longleftrightarrow:"��",LongLeftRightArrow:"��",Longleftrightarrow:"��",longmapsto:"��",longrightarrow:"��",LongRightArrow:"��",Longrightarrow:"��",looparrowleft:"��",looparrowright:"��",lopar:"數�",Lopf:"�븗",lopf:"�븴",loplus:"殊�",lotimes:"殊�",lowast:"��",lowbar:"_",LowerLeftArrow:"��",LowerRightArrow:"��",loz:"��",lozenge:"��",lozf:"樹�",lpar:"(",lparlt:"數�",lrarr:"��",lrcorner:"��",lrhar:"��",lrhard:"收�",lrm:"��",lrtri:"��",lsaquo:"��",lscr:"�뱚",Lscr:"��",lsh:"��",Lsh:"��",lsim:"��",lsime:"洙�",lsimg:"洙�",lsqb:"[",lsquo:"��",lsquor:"��",Lstrok:"흟",lstrok:"흢",ltcc:"洙�",ltcir:"水�",lt:"<",LT:"<",Lt:"��",ltdot:"��",lthree:"��",ltimes:"��",ltlarr:"收�",ltquest:"水�",ltri:"��",ltrie:"��",ltrif:"��",ltrPar:"數�",lurdshar:"收�",luruhar:"收�",lvertneqq:"�⑨�",lvnE:"�⑨�",macr:"짱",male:"��",malt:"��",maltese:"��",Map:"搜�",map:"��",mapsto:"��",mapstodown:"��",mapstoleft:"��",mapstoup:"��",marker:"��",mcomma:"殊�",Mcy:"�",mcy:"劇",mdash:"��",mDDot:"��",measuredangle:"��",MediumSpace:"��",Mellintrf:"��",Mfr:"�뵍",mfr:"�뵬",mho:"��",micro:"쨉",midast:"*",midcir:"漱�",mid:"��",middot:"쨌",minusb:"��",minus:"��",minusd:"��",minusdu:"殊�",MinusPlus:"��",mlcp:"漱�",mldr:"��",mnplus:"��",models:"��",Mopf:"�븘",mopf:"�븵",mp:"��",mscr:"�뱛",Mscr:"��",mstpos:"��",Mu:"�",mu:"關",multimap:"��",mumap:"��",nabla:"��",Nacute:"흤",nacute:"흦",nang:"�졻깚",nap:"��",napE:"水겁�",napid:"�뗆�",napos:"흭",napprox:"��",natural:"��",naturals:"��",natur:"��",nbsp:"혻",nbump:"�롆�",nbumpe:"�뤝�",ncap:"水�",Ncaron:"흪",ncaron:"흫",Ncedil:"흧",ncedil:"흨",ncong:"��",ncongdot:"水��",ncup:"水�",Ncy:"�",ncy:"戟",ndash:"��",nearhk:"搜�",nearr:"��",neArr:"��",nearrow:"��",ne:"��",nedot:"�먎�",NegativeMediumSpace:"��",NegativeThickSpace:"��",NegativeThinSpace:"��",NegativeVeryThinSpace:"��",nequiv:"��",nesear:"搜�",nesim:"�궻�",NestedGreaterGreater:"��",NestedLessLess:"��",NewLine:"\n",nexist:"��",nexists:"��",Nfr:"�뵎",nfr:"�뵭",ngE:"�㎃�",nge:"��",ngeq:"��",ngeqq:"�㎃�",ngeqslant:"水앍�",nges:"水앍�",nGg:"�쇞�",ngsim:"��",nGt:"�モ깚",ngt:"��",ngtr:"��",nGtv:"�ヌ�",nharr:"��",nhArr:"��",nhpar:"漱�",ni:"��",nis:"��",nisd:"��",niv:"��",NJcy:"�",njcy:"�",nlarr:"��",nlArr:"��",nldr:"��",nlE:"�┢�",nle:"��",nleftarrow:"��",nLeftarrow:"��",nleftrightarrow:"��",nLeftrightarrow:"��",nleq:"��",nleqq:"�┢�",nleqslant:"水싱�",nles:"水싱�",nless:"��",nLl:"�샦�",nlsim:"��",nLt:"�も깚",nlt:"��",nltri:"��",nltrie:"��",nLtv:"�ぬ�",nmid:"��",NoBreak:"��",NonBreakingSpace:"혻",nopf:"�븶",Nopf:"��",Not:"漱�",not:"짭",NotCongruent:"��",NotCupCap:"��",NotDoubleVerticalBar:"��",NotElement:"��",NotEqual:"��",NotEqualTilde:"�궻�",NotExists:"��",NotGreater:"��",NotGreaterEqual:"��",NotGreaterFullEqual:"�㎃�",NotGreaterGreater:"�ヌ�",NotGreaterLess:"��",NotGreaterSlantEqual:"水앍�",NotGreaterTilde:"��",NotHumpDownHump:"�롆�",NotHumpEqual:"�뤝�",notin:"��",notindot:"�됫�",notinE:"�미�",notinva:"��",notinvb:"��",notinvc:"��",NotLeftTriangleBar:"樹뤝�",NotLeftTriangle:"��",NotLeftTriangleEqual:"��",NotLess:"��",NotLessEqual:"��",NotLessGreater:"��",NotLessLess:"�ぬ�",NotLessSlantEqual:"水싱�",NotLessTilde:"��",NotNestedGreaterGreater:"洙▩�",NotNestedLessLess:"洙￡�",notni:"��",notniva:"��",notnivb:"��",notnivc:"��",NotPrecedes:"��",NotPrecedesEqual:"洙��",NotPrecedesSlantEqual:"��",NotReverseElement:"��",NotRightTriangleBar:"樹먎�",NotRightTriangle:"��",NotRightTriangleEqual:"��",NotSquareSubset:"�뤝�",NotSquareSubsetEqual:"��",NotSquareSuperset:"�먎�",NotSquareSupersetEqual:"��",NotSubset:"�귘깚",NotSubsetEqual:"��",NotSucceeds:"��",NotSucceedsEqual:"洙겁�",NotSucceedsSlantEqual:"��",NotSucceedsTilde:"�옻�",NotSuperset:"�꺿깚",NotSupersetEqual:"��",NotTilde:"��",NotTildeEqual:"��",NotTildeFullEqual:"��",NotTildeTilde:"��",NotVerticalBar:"��",nparallel:"��",npar:"��",nparsl:"漱썩깷",npart:"�궻�",npolint:"殊�",npr:"��",nprcue:"��",nprec:"��",npreceq:"洙��",npre:"洙��",nrarrc:"搜넋�",nrarr:"��",nrArr:"��",nrarrw:"�앀�",nrightarrow:"��",nRightarrow:"��",nrtri:"��",nrtrie:"��",nsc:"��",nsccue:"��",nsce:"洙겁�",Nscr:"�뮝",nscr:"�뱜",nshortmid:"��",nshortparallel:"��",nsim:"��",nsime:"��",nsimeq:"��",nsmid:"��",nspar:"��",nsqsube:"��",nsqsupe:"��",nsub:"��",nsubE:"漱끢�",nsube:"��",nsubset:"�귘깚",nsubseteq:"��",nsubseteqq:"漱끢�",nsucc:"��",nsucceq:"洙겁�",nsup:"��",nsupE:"漱녛�",nsupe:"��",nsupset:"�꺿깚",nsupseteq:"��",nsupseteqq:"漱녛�",ntgl:"��",Ntilde:"횗",ntilde:"챰",ntlg:"��",ntriangleleft:"��",ntrianglelefteq:"��",ntriangleright:"��",ntrianglerighteq:"��",Nu:"�",nu:"館",num:"#",numero:"��",numsp:"��",nvap:"�띯깚",nvdash:"��",nvDash:"��",nVdash:"��",nVDash:"��",nvge:"�β깚",nvgt:">��",nvHarr:"搜�",nvinfin:"樹�",nvlArr:"搜�",nvle:"�ㅲ깚",nvlt:"<��",nvltrie:"�닳깚",nvrArr:"搜�",nvrtrie:"�듈깚",nvsim:"�쇄깚",nwarhk:"搜�",nwarr:"��",nwArr:"��",nwarrow:"��",nwnear:"搜�",Oacute:"횙",oacute:"처",oast:"��",Ocirc:"횚",ocirc:"척",ocir:"��",Ocy:"�",ocy:"棘",odash:"��",Odblac:"흶",odblac:"흷",odiv:"殊�",odot:"��",odsold:"數�",OElig:"흸",oelig:"흹",ofcir:"數�",Ofr:"�뵏",ofr:"�뵮",ogon:"�",Ograve:"횘",ograve:"챵",ogt:"樹�",ohbar:"數�",ohm:"廓",oint:"��",olarr:"��",olcir:"數�",olcross:"數�",oline:"��",olt:"樹�",Omacr:"흱",omacr:"흲",Omega:"廓",omega:"�",Omicron:"�",omicron:"恝",omid:"數�",ominus:"��",Oopf:"�븚",oopf:"�븷",opar:"數�",OpenCurlyDoubleQuote:"��",OpenCurlyQuote:"��",operp:"數�",oplus:"��",orarr:"��",Or:"水�",or:"��",ord:"水�",order:"��",orderof:"��",ordf:"짧",ordm:"쨘",origof:"��",oror:"水�",orslope:"水�",orv:"水�",oS:"��",Oscr:"�뮞",oscr:"��",Oslash:"횠",oslash:"첩",osol:"��",Otilde:"횛",otilde:"천",otimesas:"殊�",Otimes:"殊�",otimes:"��",Ouml:"횜",ouml:"철",ovbar:"��",OverBar:"��",OverBrace:"��",OverBracket:"��",OverParenthesis:"��",para:"쨋",parallel:"��",par:"��",parsim:"漱�",parsl:"漱�",part:"��",PartialD:"��",Pcy:"�",pcy:"極",percnt:"%",period:".",permil:"��",perp:"��",pertenk:"��",Pfr:"�뵑",pfr:"�뵯",Phi:"過",phi:"�",phiv:"�",phmmat:"��",phone:"��",Pi:"�",pi:"�",pitchfork:"��",piv:"�",planck:"��",planckh:"��",plankv:"��",plusacir:"殊�",plusb:"��",pluscir:"殊�",plus:"+",plusdo:"��",plusdu:"殊�",pluse:"水�",PlusMinus:"짹",plusmn:"짹",plussim:"殊�",plustwo:"殊�",pm:"짹",Poincareplane:"��",pointint:"殊�",popf:"�븸",Popf:"��",pound:"짙",prap:"洙�",Pr:"洙�",pr:"��",prcue:"��",precapprox:"洙�",prec:"��",preccurlyeq:"��",Precedes:"��",PrecedesEqual:"洙�",PrecedesSlantEqual:"��",PrecedesTilde:"��",preceq:"洙�",precnapprox:"洙�",precneqq:"洙�",precnsim:"��",pre:"洙�",prE:"洙�",precsim:"��",prime:"��",Prime:"��",primes:"��",prnap:"洙�",prnE:"洙�",prnsim:"��",prod:"��",Product:"��",profalar:"��",profline:"��",profsurf:"��",prop:"��",Proportional:"��",Proportion:"��",propto:"��",prsim:"��",prurel:"��",Pscr:"�뮟",pscr:"�뱟",Psi:"顆",psi:"�",puncsp:"��",Qfr:"�뵒",qfr:"�뵰",qint:"殊�",qopf:"�븹",Qopf:"��",qprime:"��",Qscr:"�뮠",qscr:"�뱠",quaternions:"��",quatint:"殊�",quest:"?",questeq:"��",quot:'"',QUOT:'"',rAarr:"��",race:"�싱�",Racute:"흺",racute:"흻",radic:"��",raemptyv:"數�",rang:"��",Rang:"��",rangd:"數�",range:"數�",rangle:"��",raquo:"쨩",rarrap:"收�",rarrb:"��",rarrbfs:"搜�",rarrc:"搜�",rarr:"��",Rarr:"��",rArr:"��",rarrfs:"搜�",rarrhk:"��",rarrlp:"��",rarrpl:"收�",rarrsim:"收�",Rarrtl:"搜�",rarrtl:"��",rarrw:"��",ratail:"搜�",rAtail:"搜�",ratio:"��",rationals:"��",rbarr:"搜�",rBarr:"搜�",RBarr:"搜�",rbbrk:"��",rbrace:"}",rbrack:"]",rbrke:"數�",rbrksld:"數�",rbrkslu:"數�",Rcaron:"힀",rcaron:"힂",Rcedil:"흾",rcedil:"흿",rceil:"��",rcub:"}",Rcy:"�",rcy:"�",rdca:"搜�",rdldhar:"收�",rdquo:"��",rdquor:"��",rdsh:"��",real:"��",realine:"��",realpart:"��",reals:"��",Re:"��",rect:"��",reg:"짰",REG:"짰",ReverseElement:"��",ReverseEquilibrium:"��",ReverseUpEquilibrium:"收�",rfisht:"收�",rfloor:"��",rfr:"�뵱",Rfr:"��",rHar:"收�",rhard:"��",rharu:"��",rharul:"收�",Rho:"科",rho:"�",rhov:"歐",RightAngleBracket:"��",RightArrowBar:"��",rightarrow:"��",RightArrow:"��",Rightarrow:"��",RightArrowLeftArrow:"��",rightarrowtail:"��",RightCeiling:"��",RightDoubleBracket:"��",RightDownTeeVector:"收�",RightDownVectorBar:"收�",RightDownVector:"��",RightFloor:"��",rightharpoondown:"��",rightharpoonup:"��",rightleftarrows:"��",rightleftharpoons:"��",rightrightarrows:"��",rightsquigarrow:"��",RightTeeArrow:"��",RightTee:"��",RightTeeVector:"收�",rightthreetimes:"��",RightTriangleBar:"樹�",RightTriangle:"��",RightTriangleEqual:"��",RightUpDownVector:"收�",RightUpTeeVector:"收�",RightUpVectorBar:"收�",RightUpVector:"��",RightVectorBar:"收�",RightVector:"��",ring:"�",risingdotseq:"��",rlarr:"��",rlhar:"��",rlm:"��",rmoustache:"��",rmoust:"��",rnmid:"漱�",roang:"��",roarr:"��",robrk:"��",ropar:"數�",ropf:"�븺",Ropf:"��",roplus:"殊�",rotimes:"殊�",RoundImplies:"收�",rpar:")",rpargt:"數�",rppolint:"殊�",rrarr:"��",Rrightarrow:"��",rsaquo:"��",rscr:"�뱡",Rscr:"��",rsh:"��",Rsh:"��",rsqb:"]",rsquo:"��",rsquor:"��",rthree:"��",rtimes:"��",rtri:"��",rtrie:"��",rtrif:"��",rtriltri:"樹�",RuleDelayed:"樹�",ruluhar:"收�",rx:"��",Sacute:"힃",sacute:"힄",sbquo:"��",scap:"洙�",Scaron:"힋",scaron:"큄",Sc:"洙�",sc:"��",sccue:"��",sce:"洙�",scE:"洙�",Scedil:"힇",scedil:"힊",Scirc:"힅",scirc:"힆",scnap:"洙�",scnE:"洙�",scnsim:"��",scpolint:"殊�",scsim:"��",Scy:"鬼",scy:"�",sdotb:"��",sdot:"��",sdote:"水�",searhk:"搜�",searr:"��",seArr:"��",searrow:"��",sect:"짠",semi:";",seswar:"搜�",setminus:"��",setmn:"��",sext:"��",Sfr:"�뵔",sfr:"�뵲",sfrown:"��",sharp:"��",SHCHcy:"硅",shchcy:"�",SHcy:"珪",shcy:"�",ShortDownArrow:"��",ShortLeftArrow:"��",shortmid:"��",shortparallel:"��",ShortRightArrow:"��",ShortUpArrow:"��",shy:"짯",Sigma:"誇",sigma:"�",sigmaf:"�",sigmav:"�",sim:"��",simdot:"水�",sime:"��",simeq:"��",simg:"洙�",simgE:"洙�",siml:"洙�",simlE:"洙�",simne:"��",simplus:"殊�",simrarr:"收�",slarr:"��",SmallCircle:"��",smallsetminus:"��",smashp:"殊�",smeparsl:"樹�",smid:"��",smile:"��",smt:"洙�",smte:"洙�",smtes:"洙э�",SOFTcy:"糾",softcy:"�",solbar:"��",solb:"樹�",sol:"/",Sopf:"�븡",sopf:"�븻",spades:"��",spadesuit:"��",spar:"��",sqcap:"��",sqcaps:"�볩�",sqcup:"��",sqcups:"�뷂�",Sqrt:"��",sqsub:"��",sqsube:"��",sqsubset:"��",sqsubseteq:"��",sqsup:"��",sqsupe:"��",sqsupset:"��",sqsupseteq:"��",square:"��",Square:"��",SquareIntersection:"��",SquareSubset:"��",SquareSubsetEqual:"��",SquareSuperset:"��",SquareSupersetEqual:"��",SquareUnion:"��",squarf:"��",squ:"��",squf:"��",srarr:"��",Sscr:"�뮢",sscr:"�뱢",ssetmn:"��",ssmile:"��",sstarf:"��",Star:"��",star:"��",starf:"��",straightepsilon:"溝",straightphi:"�",strns:"짱",sub:"��",Sub:"��",subdot:"洙�",subE:"漱�",sube:"��",subedot:"漱�",submult:"漱�",subnE:"漱�",subne:"��",subplus:"洙�",subrarr:"收�",subset:"��",Subset:"��",subseteq:"��",subseteqq:"漱�",SubsetEqual:"��",subsetneq:"��",subsetneqq:"漱�",subsim:"漱�",subsub:"漱�",subsup:"漱�",succapprox:"洙�",succ:"��",succcurlyeq:"��",Succeeds:"��",SucceedsEqual:"洙�",SucceedsSlantEqual:"��",SucceedsTilde:"��",succeq:"洙�",succnapprox:"洙�",succneqq:"洙�",succnsim:"��",succsim:"��",SuchThat:"��",sum:"��",Sum:"��",sung:"��",sup1:"쨔",sup2:"짼",sup3:"쨀",sup:"��",Sup:"��",supdot:"洙�",supdsub:"漱�",supE:"漱�",supe:"��",supedot:"漱�",Superset:"��",SupersetEqual:"��",suphsol:"��",suphsub:"漱�",suplarr:"收�",supmult:"漱�",supnE:"漱�",supne:"��",supplus:"漱�",supset:"��",Supset:"��",supseteq:"��",supseteqq:"漱�",supsetneq:"��",supsetneqq:"漱�",supsim:"漱�",supsub:"漱�",supsup:"漱�",swarhk:"搜�",swarr:"��",swArr:"��",swarrow:"��",swnwar:"搜�",szlig:"횩",Tab:"\t",target:"��",Tau:"課",tau:"�",tbrk:"��",Tcaron:"큉",tcaron:"큐",Tcedil:"큅",tcedil:"큇",Tcy:"龜",tcy:"�",tdot:"��",telrec:"��",Tfr:"�뵕",tfr:"�뵳",there4:"��",therefore:"��",Therefore:"��",Theta:"�",theta:"罐",thetasym:"�",thetav:"�",thickapprox:"��",thicksim:"��",ThickSpace:"�잂��",ThinSpace:"��",thinsp:"��",thkap:"��",thksim:"��",THORN:"횧",thorn:"첸",tilde:"�",Tilde:"��",TildeEqual:"��",TildeFullEqual:"��",TildeTilde:"��",timesbar:"殊�",timesb:"��",times:"횞",timesd:"殊�",tint:"��",toea:"搜�",topbot:"��",topcir:"漱�",top:"��",Topf:"�븢",topf:"�븼",topfork:"漱�",tosa:"搜�",tprime:"��",trade:"��",TRADE:"��",triangle:"��",triangledown:"��",triangleleft:"��",trianglelefteq:"��",triangleq:"��",triangleright:"��",trianglerighteq:"��",tridot:"��",trie:"��",triminus:"殊�",TripleDot:"��",triplus:"殊�",trisb:"樹�",tritime:"殊�",trpezium:"��",Tscr:"�뮣",tscr:"�뱣",TScy:"揆",tscy:"�",TSHcy:"�",tshcy:"�",Tstrok:"큔",tstrok:"큘",twixt:"��",twoheadleftarrow:"��",twoheadrightarrow:"��",Uacute:"횣",uacute:"첬",uarr:"��",Uarr:"��",uArr:"��",Uarrocir:"收�",Ubrcy:"�",ubrcy:"�",Ubreve:"클",ubreve:"큼",Ucirc:"횤",ucirc:"청",Ucy:"叫",ucy:"�",udarr:"��",Udblac:"키",udblac:"킥",udhar:"收�",ufisht:"收�",Ufr:"�뵖",ufr:"�뵴",Ugrave:"횢",ugrave:"첫",uHar:"收�",uharl:"��",uharr:"��",uhblk:"��",ulcorn:"��",ulcorner:"��",ulcrop:"��",ultri:"��",Umacr:"큭",umacr:"큰",uml:"짢",UnderBar:"_",UnderBrace:"��",UnderBracket:"��",UnderParenthesis:"��",Union:"��",UnionPlus:"��",Uogon:"킨",uogon:"킬",Uopf:"�븣",uopf:"�븽",UpArrowBar:"搜�",uparrow:"��",UpArrow:"��",Uparrow:"��",UpArrowDownArrow:"��",updownarrow:"��",UpDownArrow:"��",Updownarrow:"��",UpEquilibrium:"收�",upharpoonleft:"��",upharpoonright:"��",uplus:"��",UpperLeftArrow:"��",UpperRightArrow:"��",upsi:"�",Upsi:"�",upsih:"�",Upsilon:"跨",upsilon:"�",UpTeeArrow:"��",UpTee:"��",upuparrows:"��",urcorn:"��",urcorner:"��",urcrop:"��",Uring:"큽",uring:"킁",urtri:"��",Uscr:"�뮥",uscr:"�뱤",utdot:"��",Utilde:"큠",utilde:"크",utri:"��",utrif:"��",uuarr:"��",Uuml:"횥",uuml:"체",uwangle:"數�",vangrt:"數�",varepsilon:"溝",varkappa:"構",varnothing:"��",varphi:"�",varpi:"�",varpropto:"��",varr:"��",vArr:"��",varrho:"歐",varsigma:"�",varsubsetneq:"�딉�",varsubsetneqq:"漱뗰�",varsupsetneq:"�뗰�",varsupsetneqq:"漱뚳�",vartheta:"�",vartriangleleft:"��",vartriangleright:"��",vBar:"漱�",Vbar:"漱�",vBarv:"漱�",Vcy:"�",vcy:"勻",vdash:"��",vDash:"��",Vdash:"��",VDash:"��",Vdashl:"漱�",veebar:"��",vee:"��",Vee:"��",veeeq:"��",vellip:"��",verbar:"|",Verbar:"��",vert:"|",Vert:"��",VerticalBar:"��",VerticalLine:"|",VerticalSeparator:"��",VerticalTilde:"��",VeryThinSpace:"��",Vfr:"�뵗",vfr:"�뵵",vltri:"��",vnsub:"�귘깚",vnsup:"�꺿깚",Vopf:"�븤",vopf:"�븾",vprop:"��",vrtri:"��",Vscr:"�뮦",vscr:"�뱥",vsubnE:"漱뗰�",vsubne:"�딉�",vsupnE:"漱뚳�",vsupne:"�뗰�",Vvdash:"��",vzigzag:"數�",Wcirc:"킴",wcirc:"킵",wedbar:"水�",wedge:"��",Wedge:"��",wedgeq:"��",weierp:"��",Wfr:"�뵚",wfr:"�뵶",Wopf:"�븥",wopf:"�븿",wp:"��",wr:"��",wreath:"��",Wscr:"�뮧",wscr:"�뱦",xcap:"��",xcirc:"��",xcup:"��",xdtri:"��",Xfr:"�뵛",xfr:"�뵷",xharr:"��",xhArr:"��",Xi:"�",xi:"刮",xlarr:"��",xlArr:"��",xmap:"��",xnis:"��",xodot:"殊�",Xopf:"�븦",xopf:"�빀",xoplus:"殊�",xotime:"殊�",xrarr:"��",xrArr:"��",Xscr:"�뮩",xscr:"�뱧",xsqcup:"殊�",xuplus:"殊�",xutri:"��",xvee:"��",xwedge:"��",Yacute:"횦",yacute:"첵",YAcy:"赳",yacy:"�",Ycirc:"킷",ycirc:"킹",Ycy:"竅",ycy:"�",yen:"짜",Yfr:"�뵜",yfr:"�뵸",YIcy:"�",yicy:"�",Yopf:"�븧",yopf:"�빁",Yscr:"�뮪",yscr:"�뱨",YUcy:"規",yucy:"�",yuml:"첼",Yuml:"타",Zacute:"탁",zacute:"탄",Zcaron:"탐",zcaron:"탑",Zcy:"�",zcy:"鈞",Zdot:"탈",zdot:"탉",zeetrf:"��",ZeroWidthSpace:"��",Zeta:"�",zeta:"瓘",zfr:"�뵹",Zfr:"��",ZHcy:"�",zhcy:"菌",zigrarr:"��",zopf:"�빂",Zopf:"��",Zscr:"�뮫",zscr:"�뱩",zwj:"��",zwnj:"��"},Gl={Aacute:"횁",aacute:"찼",Acirc:"횂",acirc:"창",acute:"쨈",AElig:"횈",aelig:"챈",Agrave:"�",agrave:"횪",amp:"&",AMP:"&",Aring:"횇",aring:"책",Atilde:"횄",atilde:"찾",Auml:"횆",auml:"채",brvbar:"짝",Ccedil:"횉",ccedil:"챌",cedil:"쨍",cent:"짖",copy:"짤",COPY:"짤",curren:"짚",deg:"째",divide:"첨",Eacute:"횋",eacute:"챕",Ecirc:"횎",ecirc:"챗",Egrave:"횊",egrave:"챔",ETH:"횖",eth:"챨",Euml:"횏",euml:"챘",frac12:"쩍",frac14:"쩌",frac34:"쩐",gt:">",GT:">",Iacute:"횒",iacute:"챠",Icirc:"횓",icirc:"챤",iexcl:"징",Igrave:"횑",igrave:"챙",iquest:"쩔",Iuml:"횕",iuml:"챦",laquo:"짬",lt:"<",LT:"<",macr:"짱",micro:"쨉",middot:"쨌",nbsp:"혻",not:"짭",Ntilde:"횗",ntilde:"챰",Oacute:"횙",oacute:"처",Ocirc:"횚",ocirc:"척",Ograve:"횘",ograve:"챵",ordf:"짧",ordm:"쨘",Oslash:"횠",oslash:"첩",Otilde:"횛",otilde:"천",Ouml:"횜",ouml:"철",para:"쨋",plusmn:"짹",pound:"짙",quot:'"',QUOT:'"',raquo:"쨩",reg:"짰",REG:"짰",sect:"짠",shy:"짯",sup1:"쨔",sup2:"짼",sup3:"쨀",szlig:"횩",THORN:"횧",thorn:"첸",times:"횞",Uacute:"횣",uacute:"첬",Ucirc:"횤",ucirc:"청",Ugrave:"횢",ugrave:"첫",uml:"짢",Uuml:"횥",uuml:"체",Yacute:"횦",yacute:"첵",yen:"짜",yuml:"첼"},Kl={amp:"&",apos:"'",gt:">",lt:"<",quot:'"'},Zl={},Xl=_l&&_l.__importDefault||function(t){return t&&t.__esModule?t:{default:t};};
Object.defineProperty(Zl,"__esModule",{value:!0});
var Ql=Xl({0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376}),Yl=String.fromCodePoint||function(t){var e="";return t>65535&&(t-=65536,e+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t),e+=String.fromCharCode(t);};
Zl.default=function(t){return t>=55296&&t<=57343||t>1114111?"占�":(t in Ql.default&&(t=Ql.default[t]),Yl(t));};
var tu=_l&&_l.__importDefault||function(t){return t&&t.__esModule?t:{default:t};};
Object.defineProperty(Wl,"__esModule",{value:!0}),Wl.decodeHTML=Wl.decodeHTMLStrict=Wl.decodeXML=void 0;
var eu=tu(Jl),nu=tu(Gl),ru=tu(Kl),ou=tu(Zl),iu=/&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
function su(t){var e=cu(t);return function(t){return String(t).replace(iu,e);};}
Wl.decodeXML=su(ru.default),Wl.decodeHTMLStrict=su(eu.default);
var au=function(t,e){return t<e?1:-1;};
function cu(t){return function(e){if("#"===e.charAt(1)){
var n=e.charAt(2);
return"X"===n||"x"===n?ou.default(parseInt(e.substr(3),16)):ou.default(parseInt(e.substr(2),10));
}return t[e.slice(1,-1)]||e;};}
Wl.decodeHTML=function(){for(var t=Object.keys(nu.default).sort(au),e=Object.keys(eu.default).sort(au),n=0,r=0;n<e.length;n++)
t[r]===e[n]?(e[n]+=";?",r++):e[n]+=";";var o=new RegExp("&(?:"+e.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g"),i=cu(eu.default);function s(t){return";"!==t.substr(-1)&&(t+=";"),i(t);}return function(t){return String(t).replace(o,s);};}();
var lu={},uu=_l&&_l.__importDefault||function(t){return t&&t.__esModule?t:{default:t};};
Object.defineProperty(lu,"__esModule",{value:!0}),lu.escapeUTF8=lu.escape=lu.encodeNonAsciiHTML=lu.encodeHTML=lu.encodeXML=void 0;
var pu=gu(uu(Kl).default),du=yu(pu);
lu.encodeXML=Cu(pu);
var fu,hu,mu=gu(uu(Jl).default),vu=yu(mu);
function gu(t){return Object.keys(t).sort().reduce(function(e,n){return e[t[n]]="&"+n+";",e;},{});}
function yu(t){for(var e=[],n=[],r=0,o=Object.keys(t);r<o.length;r++){
var i=o[r];
1===i.length?e.push("\\"+i):n.push(i);
}e.sort();for(var s=0;s<e.length-1;s++){
for(var a=s;a<e.length-1&&e[a].charCodeAt(1)+1===e[a+1].charCodeAt(1);)
a+=1;
var c=1+a-s;
c<3||e.splice(s,c,e[s]+"-"+e[a]);
}return n.unshift("["+e.join("")+"]"),new RegExp(n.join("|"),"g");}
lu.encodeHTML=(fu=mu,hu=vu,function(t){return t.replace(hu,function(t){return fu[t];}).replace(bu,ku);}),lu.encodeNonAsciiHTML=Cu(mu);
var bu=/(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,wu=null!=String.prototype.codePointAt?function(t){return t.codePointAt(0);}:function(t){return 1024*(t.charCodeAt(0)-55296)+t.charCodeAt(1)-56320+65536;};
function ku(t){return"&#x"+(t.length>1?wu(t):t.charCodeAt(0)).toString(16).toUpperCase()+";";}
var xu=new RegExp(du.source+"|"+bu.source,"g");
function Cu(t){return function(e){return e.replace(xu,function(e){return t[e]||ku(e);});};}
lu.escape=function(t){return t.replace(xu,ku);},lu.escapeUTF8=function(t){return t.replace(du,ku);},function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.decodeXMLStrict=t.decodeHTML5Strict=t.decodeHTML4Strict=t.decodeHTML5=t.decodeHTML4=t.decodeHTMLStrict=t.decodeHTML=t.decodeXML=t.encodeHTML5=t.encodeHTML4=t.escapeUTF8=t.escape=t.encodeNonAsciiHTML=t.encodeHTML=t.encodeXML=t.encode=t.decodeStrict=t.decode=void 0;var e=Wl,n=lu;t.decode=function(t,n){return(!n||n<=0?e.decodeXML:e.decodeHTML)(t);},t.decodeStrict=function(t,n){return(!n||n<=0?e.decodeXML:e.decodeHTMLStrict)(t);},t.encode=function(t,e){return(!e||e<=0?n.encodeXML:n.encodeHTML)(t);};var r=lu;Object.defineProperty(t,"encodeXML",{enumerable:!0,get:function(){return r.encodeXML;}}),Object.defineProperty(t,"encodeHTML",{enumerable:!0,get:function(){return r.encodeHTML;}}),Object.defineProperty(t,"encodeNonAsciiHTML",{enumerable:!0,get:function(){return r.encodeNonAsciiHTML;}}),Object.defineProperty(t,"escape",{enumerable:!0,get:function(){return r.escape;}}),Object.defineProperty(t,"escapeUTF8",{enumerable:!0,get:function(){return r.escapeUTF8;}}),Object.defineProperty(t,"encodeHTML4",{enumerable:!0,get:function(){return r.encodeHTML;}}),Object.defineProperty(t,"encodeHTML5",{enumerable:!0,get:function(){return r.encodeHTML;}});var o=Wl;Object.defineProperty(t,"decodeXML",{enumerable:!0,get:function(){return o.decodeXML;}}),Object.defineProperty(t,"decodeHTML",{enumerable:!0,get:function(){return o.decodeHTML;}}),Object.defineProperty(t,"decodeHTMLStrict",{enumerable:!0,get:function(){return o.decodeHTMLStrict;}}),Object.defineProperty(t,"decodeHTML4",{enumerable:!0,get:function(){return o.decodeHTML;}}),Object.defineProperty(t,"decodeHTML5",{enumerable:!0,get:function(){return o.decodeHTML;}}),Object.defineProperty(t,"decodeHTML4Strict",{enumerable:!0,get:function(){return o.decodeHTMLStrict;}}),Object.defineProperty(t,"decodeHTML5Strict",{enumerable:!0,get:function(){return o.decodeHTMLStrict;}}),Object.defineProperty(t,"decodeXMLStrict",{enumerable:!0,get:function(){return o.decodeXML;}});}(Ul);
var Tu="&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});",Mu=/[\\&]/,Su="[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]",Eu=new RegExp("\\\\"+Su+"|"+Tu,"gi"),Nu=new RegExp('[&<>"]',"g"),Ou=function(t){return 92===t.charCodeAt(0)?t.charAt(1):Ul.decodeHTML(t);};
function Du(t){return Mu.test(t)?t.replace(Eu,Ou):t;}
function Au(t){try{
return $l(t);
}
catch(e){
return t;
}}
function Lu(t){switch(t){
case"&":return"&amp;";
case"<":return"&lt;";
case">":return"&gt;";
case'"':return"&quot;";
default:return t;
}}
function Iu(t){return Nu.test(t)?t.replace(Nu,Lu):t;}
function Ru(t,e){for(var n=[],r=0;r<e;r++)
n.push(t);return n.join("");}
function Pu(t){return!t||!/[^ \t]+/.test(t);}
var Bu=function(){function t(t){this.current=t,this.root=t,this.entering=!0;}return t.prototype.next=function(){var t=this.current,e=this.entering;if(null===t)
return null;var n=Fu(t);return e&&n?t.firstChild?(this.current=t.firstChild,this.entering=!0):this.entering=!1:t===this.root?this.current=null:null===t.next?(this.current=t.parent,this.entering=!1):(this.current=t.next,this.entering=!0),{entering:e,node:t};},t.prototype.resumeAt=function(t,e){this.current=t,this.entering=!0===e;},t;}();
function Fu(t){switch(t.type){
case"document":
case"blockQuote":
case"list":
case"item":
case"paragraph":
case"heading":
case"emph":
case"strong":
case"strike":
case"link":
case"image":
case"table":
case"tableHead":
case"tableBody":
case"tableRow":
case"tableCell":
case"tableDelimRow":
case"customInline":return!0;
default:return!1;
}}
var Hu=1,zu={};
function ju(t){delete zu[t];}
var _u=function(){function t(t,e){this.parent=null,this.prev=null,this.next=null,this.firstChild=null,this.lastChild=null,this.literal=null,this.id="document"===t?-1:Hu++,this.type=t,this.sourcepos=e,zu[this.id]=this;}return t.prototype.isContainer=function(){return Fu(this);},t.prototype.unlink=function(){this.prev?this.prev.next=this.next:this.parent&&(this.parent.firstChild=this.next),this.next?this.next.prev=this.prev:this.parent&&(this.parent.lastChild=this.prev),this.parent=null,this.next=null,this.prev=null;},t.prototype.replaceWith=function(t){this.insertBefore(t),this.unlink();},t.prototype.insertAfter=function(t){t.unlink(),t.next=this.next,t.next&&(t.next.prev=t),t.prev=this,this.next=t,this.parent&&(t.parent=this.parent,t.next||(t.parent.lastChild=t));},t.prototype.insertBefore=function(t){t.unlink(),t.prev=this.prev,t.prev&&(t.prev.next=t),t.next=this,this.prev=t,t.parent=this.parent,t.prev||(t.parent.firstChild=t);},t.prototype.appendChild=function(t){t.unlink(),t.parent=this,this.lastChild?(this.lastChild.next=t,t.prev=this.lastChild,this.lastChild=t):(this.firstChild=t,this.lastChild=t);},t.prototype.prependChild=function(t){t.unlink(),t.parent=this,this.firstChild?(this.firstChild.prev=t,t.next=this.firstChild,this.firstChild=t):(this.firstChild=t,this.lastChild=t);},t.prototype.walker=function(){return new Bu(this);},t;}(),qu=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.open=!0,r.lineOffsets=null,r.stringContent=null,r.lastLineBlank=!1,r.lastLineChecked=!1,r.type=e,r;}return Hl(e,t),e;}(_u),Vu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.listData=null,e;}return Hl(e,t),e;}(qu),$u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.level=0,e.headingType="atx",e;}return Hl(e,t),e;}(qu),Uu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isFenced=!1,e.fenceChar=null,e.fenceLength=0,e.fenceOffset=-1,e.info=null,e.infoPadding=0,e;}return Hl(e,t),e;}(qu),Wu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.columns=[],e;}return Hl(e,t),e;}(qu),Ju=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.startIdx=0,e.endIdx=0,e.paddingLeft=0,e.paddingRight=0,e.ignored=!1,e;}return Hl(e,t),e;}(qu),Gu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.title="",e.dest="",e.label="",e;}return Hl(e,t),e;}(qu),Ku=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.syntaxLength=0,e.offset=-1,e.info="",e;}return Hl(e,t),e;}(qu),Zu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.htmlBlockType=-1,e;}return Hl(e,t),e;}(qu),Xu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.destination=null,e.title=null,e.extendedAutolink=!1,e;}return Hl(e,t),e;}(_u),Qu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tickCount=0,e;}return Hl(e,t),e;}(_u),Yu=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.info="",e;}return Hl(e,t),e;}(_u);
function tp(t,e){switch(t){
case"heading":return new $u(t,e);
case"list":
case"item":return new Vu(t,e);
case"link":
case"image":return new Xu(t,e);
case"codeBlock":return new Uu(t,e);
case"htmlBlock":return new Zu(t,e);
case"table":return new Wu(t,e);
case"tableCell":return new Ju(t,e);
case"document":
case"paragraph":
case"blockQuote":
case"thematicBreak":
case"tableRow":
case"tableBody":
case"tableHead":
case"frontMatter":return new qu(t,e);
case"code":return new Qu(t,e);
case"refDef":return new Gu(t,e);
case"customBlock":return new Ku(t,e);
case"customInline":return new Yu(t,e);
default:return new _u(t,e);
}}
function ep(t){return"codeBlock"===t.type;}
function np(t){return"list"===t.type;}
function rp(t){return"refDef"===t.type;}
function op(t){return"customBlock"===t.type;}
function ip(t,e){var n=tp("text",e);return n.literal=t,n;}
var sp,ap="[A-Za-z][A-Za-z0-9-]*",cp="<"+ap+"(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>",lp="</"+ap+"\\s*[>]",up=new RegExp("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|[<][?].*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)","i");
if(String.fromCodePoint)
sp=function(t){try{
return String.fromCodePoint(t);
}
catch(t){
if(t instanceof RangeError)
return String.fromCharCode(65533);
throw t;
}};else
{
var pp=String.fromCharCode,dp=Math.floor;
sp=function(){for(var t=[],e=0;e<arguments.length;e++)
t[e]=arguments[e];var n,r,o=16384,i=[],s=-1,a=t.length;if(!a)
return"";for(var c="";++s<a;){
var l=Number(t[s]);
if(!isFinite(l)||l<0||l>1114111||dp(l)!==l)
return String.fromCharCode(65533);
l<=65535?i.push(l):(n=55296+((l-=65536)>>10),r=l%1024+56320,i.push(n,r)),(s+1===a||i.length>o)&&(c+=pp.apply(void 0,i),i.length=0);
}return c;};
}
var fp=sp;
function hp(t){var e=/\)+$/.exec(t);if(e){
for(var n=0,r=0,o=t;r<o.length;r++){
var i=o[r];
"("===i?n<0?n=1:n+=1:")"===i&&(n-=1);
}
if(n<0){
var s=Math.min(-n,e[0].length);
return t.substring(0,t.length-s);
}
}return t;}
function mp(t){return t.replace(/&[A-Za-z0-9]+;$/,"");}
function vp(t){return jl(jl([],function(t){for(var e,n=new RegExp("(www|https?://).(?:[w-]+.)*[A-Za-z0-9-]+.[A-Za-z0-9-]+[^<\\s]*[^<?!.,:*_?~\\s]","g"),r=[];e=n.exec(t);){
var o=mp(hp(e[0])),i="www"===e[1]?"http://":"";
r.push({text:o,range:[e.index,e.index+o.length-1],url:""+i+o});
}return r;}(t)),function(t){for(var e,n=new RegExp("[\\w.+-]+@(?:[\\w-]+\\.)+[\\w-]+","g"),r=[];e=n.exec(t);){
var o=e[0];
/[_-]+$/.test(o)||r.push({text:o,range:[e.index,e.index+o.length-1],url:"mailto:"+o});
}return r;}(t)).sort(function(t,e){return t.range[0]-e.range[0];});}
function gp(t){return t[t.length-1];}
function yp(t){return t.slice(1,t.length-1).trim().replace(/[ \t\r\n]+/," ").toLowerCase().toUpperCase();}
function bp(t,e){Object.keys(t).forEach(function(n){e(n,t[n]);});}
function wp(t){return!Object.keys(t).length;}
var kp=126,xp=39,Cp=34,Tp=36,Mp="\\\\"+Su,Sp=new RegExp(/[!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/),Ep=new RegExp('^(?:"('+Mp+'|[^"\\x00])*"|\'('+Mp+"|[^'\\x00])*'|\\(("+Mp+"|[^()\\x00])*\\))"),Np=/^(?:<(?:[^<>\n\\\x00]|\\.)*>)/,Op=new RegExp("^"+Su),Dp=new RegExp("^"+Tu,"i"),Ap=/`+/,Lp=/^`+/,Ip=/\.\.\./g,Rp=/--+/g,Pp=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,Bp=/^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i,Fp=/^ *(?:\n *)?/,Hp=/^[ \t\n\x0b\x0c\x0d]/,zp=/^\s/,jp=/ *$/,_p=/^ */,qp=/^ *(?:\n|$)/,Vp=/^\[(?:[^\\\[\]]|\\.){0,1000}\]/,$p=/^[^\n`\[\]\\!<&*_'"~$]+/m,Up=function(){function t(t){this.subject="",this.delimiters=null,this.brackets=null,this.pos=0,this.lineStartNum=0,this.lineIdx=0,this.lineOffsets=[0],this.linePosOffset=0,this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.options=t;}return t.prototype.sourcepos=function(t,e){var n=this.linePosOffset+this.lineOffsets[this.lineIdx],r=this.lineStartNum+this.lineIdx,o=[r,t+n];return"number"==typeof e?[o,[r,e+n]]:o;},t.prototype.nextLine=function(){this.lineIdx+=1,this.linePosOffset=-this.pos;},t.prototype.match=function(t){var e=t.exec(this.subject.slice(this.pos));return null===e?null:(this.pos+=e.index+e[0].length,e[0]);},t.prototype.peek=function(){return this.pos<this.subject.length?this.subject.charCodeAt(this.pos):-1;},t.prototype.spnl=function(){return this.match(Fp),!0;},t.prototype.parseBackticks=function(t){var e=this.pos+1,n=this.match(Lp);if(null===n)
return!1;for(var r,o=this.pos;null!==(r=this.match(Ap));)
if(r===n){
var i=this.subject.slice(o,this.pos-n.length),s=this.sourcepos(e,this.pos),a=i.split("\n");
if(a.length>1){
var c=gp(a);
this.lineIdx+=a.length-1,this.linePosOffset=-(this.pos-c.length-n.length),s[1]=this.sourcepos(this.pos),i=a.join(" ");
}
var l=tp("code",s);
return i.length>0&&null!==i.match(/[^ ]/)&&" "==i[0]&&" "==i[i.length-1]?l.literal=i.slice(1,i.length-1):l.literal=i,l.tickCount=n.length,t.appendChild(l),!0;
}return this.pos=o,t.appendChild(ip(n,this.sourcepos(e,this.pos-1))),!0;},t.prototype.parseBackslash=function(t){var e,n=this.subject;this.pos+=1;var r=this.pos;return 10===this.peek()?(this.pos+=1,e=tp("linebreak",this.sourcepos(this.pos-1,this.pos)),t.appendChild(e),this.nextLine()):Op.test(n.charAt(this.pos))?(t.appendChild(ip(n.charAt(this.pos),this.sourcepos(r,this.pos))),this.pos+=1):t.appendChild(ip("\\",this.sourcepos(r,r))),!0;},t.prototype.parseAutolink=function(t){var e,n,r,o=this.pos+1;return(e=this.match(Pp))?(n=e.slice(1,e.length-1),(r=tp("link",this.sourcepos(o,this.pos))).destination=Au("mailto:"+n),r.title="",r.appendChild(ip(n,this.sourcepos(o+1,this.pos-1))),t.appendChild(r),!0):!!(e=this.match(Bp))&&(n=e.slice(1,e.length-1),(r=tp("link",this.sourcepos(o,this.pos))).destination=Au(n),r.title="",r.appendChild(ip(n,this.sourcepos(o+1,this.pos-1))),t.appendChild(r),!0);},t.prototype.parseHtmlTag=function(t){var e=this.pos+1,n=this.match(up);if(null===n)
return!1;var r=tp("htmlInline",this.sourcepos(e,this.pos));return r.literal=n,t.appendChild(r),!0;},t.prototype.scanDelims=function(t){var e=0,n=this.pos;if(t===xp||t===Cp)
e++,this.pos++;else

for(;this.peek()===t;)
e++,this.pos++;if(0===e||e<2&&(t===kp||t===Tp))
return this.pos=n,null;var r,o=0===n?"\n":this.subject.charAt(n-1),i=this.peek();r=-1===i?"\n":fp(i);var s,a,c=zp.test(r),l=Sp.test(r),u=zp.test(o),p=Sp.test(o),d=!c&&(!l||u||p),f=!u&&(!p||c||l);return 95===t?(s=d&&(!f||p),a=f&&(!d||l)):t===xp||t===Cp?(s=d&&!f,a=f):t===Tp?(s=!c,a=!u):(s=d,a=f),this.pos=n,{numdelims:e,canOpen:s,canClose:a};},t.prototype.handleDelim=function(t,e){var n=this.scanDelims(t);if(!n)
return!1;var r=n.numdelims,o=this.pos+1;this.pos+=r;var i=ip(t===xp?"��":t===Cp?"��":this.subject.slice(o-1,this.pos),this.sourcepos(o,this.pos));return e.appendChild(i),(n.canOpen||n.canClose)&&(this.options.smart||t!==xp&&t!==Cp)&&(this.delimiters={cc:t,numdelims:r,origdelims:r,node:i,previous:this.delimiters,next:null,canOpen:n.canOpen,canClose:n.canClose},this.delimiters.previous&&(this.delimiters.previous.next=this.delimiters)),!0;},t.prototype.removeDelimiter=function(t){null!==t.previous&&(t.previous.next=t.next),null===t.next?this.delimiters=t.previous:t.next.previous=t.previous;},t.prototype.removeDelimitersBetween=function(t,e){t.next!==e&&(t.next=e,e.previous=t);},t.prototype.processEmphasis=function(t){var e,n,r,o,i,s,a,c=!1,l=((e={})[95]=[t,t,t],e[42]=[t,t,t],e[39]=[t],e[34]=[t],e[126]=[t],e[36]=[t],e);for(r=this.delimiters;null!==r&&r.previous!==t;)
r=r.previous;for(;null!==r;){
var u=r.cc,p=95===u||42===u;
if(r.canClose){
for(n=r.previous,a=!1;null!==n&&n!==t&&n!==l[u][p?r.origdelims%3:0];){
if(c=p&&(r.canOpen||n.canClose)&&r.origdelims%3!=0&&(n.origdelims+r.origdelims)%3==0,n.cc===r.cc&&n.canOpen&&!c){
a=!0;
break;
}
n=n.previous;
}
if(o=r,p||u===kp||u===Tp){
if(a){
if(n){
var d=r.numdelims>=2&&n.numdelims>=2?2:1,f=p?0:1;
i=n.node,s=r.node;
var h=p?1===d?"emph":"strong":"strike";
u===Tp&&(h="customInline");
var m=tp(h),v=i.sourcepos[1],g=s.sourcepos[0];
m.sourcepos=[[v[0],v[1]-d+1],[g[0],g[1]+d-1]],i.sourcepos[1][1]-=d,s.sourcepos[0][1]+=d,i.literal=i.literal.slice(d),s.literal=s.literal.slice(d),n.numdelims-=d,r.numdelims-=d;
for(var y=i.next,b=void 0;y&&y!==s;)
b=y.next,y.unlink(),m.appendChild(y),y=b;
if(u===Tp){
var w=m.firstChild,k=w.literal||"",x=k.split(/\s/)[0];
m.info=x,k.length<=x.length?w.unlink():(w.sourcepos[0][1]+=x.length,w.literal=k.replace(x+" ",""));
}
if(i.insertAfter(m),this.removeDelimitersBetween(n,r),n.numdelims<=f&&(0===n.numdelims&&i.unlink(),this.removeDelimiter(n)),r.numdelims<=f){
0===r.numdelims&&s.unlink();
var C=r.next;
this.removeDelimiter(r),r=C;
}
}
}else

r=r.next;}else

u===xp?(r.node.literal="��",a&&(n.node.literal="��"),r=r.next):u===Cp&&(r.node.literal="��",a&&(n.node.literal="��"),r=r.next);
a||(l[u][p?o.origdelims%3:0]=o.previous,o.canOpen||this.removeDelimiter(o));
}else

r=r.next;
}for(;null!==this.delimiters&&this.delimiters!==t;)
this.removeDelimiter(this.delimiters);},t.prototype.parseLinkTitle=function(){var t=this.match(Ep);return null===t?null:Du(t.substr(1,t.length-2));},t.prototype.parseLinkDestination=function(){var t=this.match(Np);if(null===t){
if(60===this.peek())
return null;
for(var e=this.pos,n=0,r=void 0;-1!==(r=this.peek());)
if(92===r&&Op.test(this.subject.charAt(this.pos+1)))
this.pos+=1,-1!==this.peek()&&(this.pos+=1);else
if(40===r)
this.pos+=1,n+=1;else
if(41===r){
if(n<1)
break;
this.pos+=1,n-=1;
}else
{
if(null!==Hp.exec(fp(r)))
break;
this.pos+=1;
}
return this.pos===e&&41!==r||0!==n?null:Au(Du(t=this.subject.substr(e,this.pos-e)));
}return Au(Du(t.substr(1,t.length-2)));},t.prototype.parseLinkLabel=function(){var t=this.match(Vp);return null===t||t.length>1001?0:t.length;},t.prototype.parseOpenBracket=function(t){var e=this.pos;this.pos+=1;var n=ip("[",this.sourcepos(this.pos,this.pos));return t.appendChild(n),this.addBracket(n,e,!1),!0;},t.prototype.parseBang=function(t){var e=this.pos;if(this.pos+=1,91===this.peek()){
this.pos+=1;
var n=ip("![",this.sourcepos(this.pos-1,this.pos));
t.appendChild(n),this.addBracket(n,e+1,!0);
}else
{
n=ip("!",this.sourcepos(this.pos,this.pos));
t.appendChild(n);
}return!0;},t.prototype.parseCloseBracket=function(t){var e=null,n=null,r=!1;this.pos+=1;var o=this.pos,i=this.brackets;if(null===i)
return t.appendChild(ip("]",this.sourcepos(o,o))),!0;if(!i.active)
return t.appendChild(ip("]",this.sourcepos(o,o))),this.removeBracket(),!0;var s=i.image,a=this.pos;40===this.peek()&&(this.pos++,this.spnl()&&null!==(e=this.parseLinkDestination())&&this.spnl()&&(Hp.test(this.subject.charAt(this.pos-1))&&(n=this.parseLinkTitle()),1)&&this.spnl()&&41===this.peek()?(this.pos+=1,r=!0):this.pos=a);var c="";if(!r){
var l=this.pos,u=this.parseLinkLabel();
if(u>2?c=this.subject.slice(l,l+u):i.bracketAfter||(c=this.subject.slice(i.index,o)),0===u&&(this.pos=a),c){
c=yp(c);
var p=this.refMap[c];
p&&(e=p.destination,n=p.title,r=!0);
}
}if(r){
var d=tp(s?"image":"link");
d.destination=e,d.title=n||"",d.sourcepos=[i.startpos,this.sourcepos(this.pos)];
for(var f=i.node.next,h=void 0;f;)
h=f.next,f.unlink(),d.appendChild(f),f=h;
if(t.appendChild(d),this.processEmphasis(i.previousDelimiter),this.removeBracket(),i.node.unlink(),!s)
for(i=this.brackets;null!==i;)
i.image||(i.active=!1),i=i.previous;
return this.options.referenceDefinition&&(this.refLinkCandidateMap[t.id]={node:t,refLabel:c}),!0;
}return this.removeBracket(),this.pos=o,t.appendChild(ip("]",this.sourcepos(o,o))),this.options.referenceDefinition&&(this.refLinkCandidateMap[t.id]={node:t,refLabel:c}),!0;},t.prototype.addBracket=function(t,e,n){null!==this.brackets&&(this.brackets.bracketAfter=!0),this.brackets={node:t,startpos:this.sourcepos(e+(n?0:1)),previous:this.brackets,previousDelimiter:this.delimiters,index:e,image:n,active:!0};},t.prototype.removeBracket=function(){this.brackets&&(this.brackets=this.brackets.previous);},t.prototype.parseEntity=function(t){var e,n=this.pos+1;return!!(e=this.match(Dp))&&(t.appendChild(ip(Ul.decodeHTML(e),this.sourcepos(n,this.pos))),!0);},t.prototype.parseString=function(t){var e,n=this.pos+1;if(e=this.match($p)){
if(this.options.smart){
var r=e.replace(Ip,"��").replace(Rp,function(t){var e=0,n=0;return t.length%3==0?n=t.length/3:t.length%2==0?e=t.length/2:t.length%3==2?(e=1,n=(t.length-2)/3):(e=2,n=(t.length-4)/3),Ru("��",n)+Ru("��",e);});
t.appendChild(ip(r,this.sourcepos(n,this.pos)));
}else
{
var o=ip(e,this.sourcepos(n,this.pos));
t.appendChild(o);
}
return!0;
}return!1;},t.prototype.parseNewline=function(t){this.pos+=1;var e=t.lastChild;if(e&&"text"===e.type&&" "===e.literal[e.literal.length-1]){
var n=" "===e.literal[e.literal.length-2],r=e.literal.length;
e.literal=e.literal.replace(jp,"");
var o=r-e.literal.length;
e.sourcepos[1][1]-=o,t.appendChild(tp(n?"linebreak":"softbreak",this.sourcepos(this.pos-o,this.pos)));
}else

t.appendChild(tp("softbreak",this.sourcepos(this.pos,this.pos)));return this.nextLine(),this.match(_p),!0;},t.prototype.parseReference=function(t,e){if(!this.options.referenceDefinition)
return 0;this.subject=t.stringContent,this.pos=0;var n=null,r=this.pos,o=this.parseLinkLabel();if(0===o)
return 0;var i=this.subject.substr(0,o);if(58!==this.peek())
return this.pos=r,0;this.pos++,this.spnl();var s=this.parseLinkDestination();if(null===s)
return this.pos=r,0;var a=this.pos;this.spnl(),this.pos!==a&&(n=this.parseLinkTitle()),null===n&&(n="",this.pos=a);var c=!0;if(null===this.match(qp)&&(""===n?c=!1:(n="",this.pos=a,c=null!==this.match(qp))),!c)
return this.pos=r,0;var l=yp(i);if(""===l)
return this.pos=r,0;var u=this.getReferenceDefSourcepos(t);t.sourcepos[0][0]=u[1][0]+1;var p=tp("refDef",u);return p.title=n,p.dest=s,p.label=l,t.insertBefore(p),e[l]?this.refDefCandidateMap[p.id]=p:e[l]=Hd(p),this.pos-r;},t.prototype.mergeTextNodes=function(t){for(var e,n=[];e=t.next();){
var r=e.entering,o=e.node;
if(r&&"text"===o.type)
n.push(o);else
if(1===n.length)
n=[];else
if(n.length>1){
var i=n[0],s=n[n.length-1];
i.sourcepos&&s.sourcepos&&(i.sourcepos[1]=s.sourcepos[1]),i.next=s.next,i.next&&(i.next.prev=i);
for(var a=1;a<n.length;a+=1)
i.literal+=n[a].literal,n[a].unlink();
n=[];
}
}},t.prototype.getReferenceDefSourcepos=function(t){for(var e=t.stringContent.split(/\n|\r\n/),n=!1,r=0,o={line:0,ch:0},i=0;i<e.length;i+=1){
var s=e[i];
if(Hp.test(s))
break;
if(/\:/.test(s)&&0===r){
if(n)
break;
var a=s.indexOf(":")===s.length-1?i+1:i;
o={line:a,ch:e[a].length},n=!0;
}
var c=s.match(/'|"/g);
if(c&&(r+=c.length),2===r){
o={line:i,ch:s.length};
break;
}
}return[[t.sourcepos[0][0],t.sourcepos[0][1]],[t.sourcepos[0][0]+o.line,o.ch]];},t.prototype.parseInline=function(t){var e,n=!1,r=this.peek();if(-1===r)
return!1;switch(r){
case 10:
n=this.parseNewline(t);
break;
case 92:
n=this.parseBackslash(t);
break;
case 96:
n=this.parseBackticks(t);
break;
case 42:
case 95:
case kp:
case Tp:
n=this.handleDelim(r,t);
break;
case xp:
case Cp:
n=!!(null===(e=this.options)||void 0===e?void 0:e.smart)&&this.handleDelim(r,t);
break;
case 91:
n=this.parseOpenBracket(t);
break;
case 33:
n=this.parseBang(t);
break;
case 93:
n=this.parseCloseBracket(t);
break;
case 60:
n=this.parseAutolink(t)||this.parseHtmlTag(t);
break;
case 38:
n=this.parseEntity(t);
break;
default:n=this.parseString(t);
}return n||(this.pos+=1,t.appendChild(ip(fp(r),this.sourcepos(this.pos,this.pos+1)))),!0;},t.prototype.parse=function(t){for(this.subject=t.stringContent.trim(),this.pos=0,this.delimiters=null,this.brackets=null,this.lineOffsets=t.lineOffsets||[0],this.lineIdx=0,this.linePosOffset=0,this.lineStartNum=t.sourcepos[0][0],function(t){return"heading"===t.type;}(t)&&(this.lineOffsets[0]+=t.level+1);this.parseInline(t);)
;t.stringContent=null,this.processEmphasis(null),this.mergeTextNodes(t.walker());var e=this.options,n=e.extendedAutolinks,r=e.customParser;if(n&&function(t,e){var n;"boolean"==typeof e&&(e=vp);for(var r=function(){var t=n.entering,r=n.node;if(t&&"text"===r.type&&"link"!==r.parent.type){
var o=r.literal,i=e(o);
if(!i||!i.length)
return"continue";
for(var s=0,a=r.sourcepos[0],c=a[0],l=a[1],u=function(t,e){return[[c,l+t],[c,l+e]];},p=[],d=0,f=i;d<f.length;d++){
var h=f[d],m=h.range,v=h.url,g=h.text;
m[0]>s&&p.push(ip(o.substring(s,m[0]),u(s,m[0]-1)));
var y=tp("link",u.apply(void 0,m));
y.appendChild(ip(g,u.apply(void 0,m))),y.destination=v,y.extendedAutolink=!0,p.push(y),s=m[1]+1;
}
s<o.length&&p.push(ip(o.substring(s),u(s,o.length-1)));
for(var b=0,w=p;b<w.length;b++){
var k=w[b];
r.insertBefore(k);
}
r.unlink();
}};n=t.next();)
r();}(t.walker(),n),r&&t.firstChild)
for(var o,i=t.firstChild.walker();o=i.next();){
var s=o.node,a=o.entering;
r[s.type]&&r[s.type](s,{entering:a,options:this.options});
}},t;}(),Wp=/^\[([ \txX])\][ \t]+/;
var Jp=/[^ \t\f\v\r\n]/,Gp=/^(?:`{3,}|~{3,})(?= *$)/;
function Kp(t){for(var e=t;e;){
if(e.lastLineBlank)
return!0;
var n=e.type;
if(e.lastLineChecked||"list"!==n&&"item"!==n){
e.lastLineChecked=!0;
break;
}
e.lastLineChecked=!0,e=e.lastChild;
}return!1;}
function Zp(t,e){return e<t.length?t.charCodeAt(e):-1;}
function Xp(t){return!Jp.test(t);}
function Qp(t){return 32===t||9===t;}
var Yp=/^\$\$$/,td={continue:function(t,e){var n=t.currentLine,r=n.match(Yp);if(r)
return t.lastLineLength=r[0].length,t.finalize(e,t.lineNumber),2;for(var o=e.offset;o>0&&Qp(Zp(n,t.offset));)
t.advanceOffset(1,!0),o--;return 0;},finalize:function(t,e){if(null!==e.stringContent){
var n=e.stringContent,r=n.indexOf("\n"),o=n.slice(0,r),i=n.slice(r+1),s=o.match(/^(\s*)(.*)/);
e.info=Du(s[2].trim()),e.literal=i,e.stringContent=null;
}},canContain:function(){return!1;},acceptsLines:!0},ed={continue:function(){return 1;},finalize:function(){},canContain:function(){return!1;},acceptsLines:!0},nd={continue:function(){return 0;},finalize:function(t,e){for(var n=e.firstChild;n;){
if(Kp(n)&&n.next){
e.listData.tight=!1;
break;
}
for(var r=n.firstChild;r;){
if(Kp(r)&&(n.next||r.next)){
e.listData.tight=!1;
break;
}
r=r.next;
}
n=n.next;
}},canContain:function(t){return"item"===t;},acceptsLines:!1},rd={continue:function(t,e){if(t.blank){
if(null===e.firstChild)
return 1;
t.advanceNextNonspace();
}else
{
if(!(t.indent>=e.listData.markerOffset+e.listData.padding))
return 1;
t.advanceOffset(e.listData.markerOffset+e.listData.padding,!0);
}return 0;},finalize:function(t,e){if(e.firstChild&&"paragraph"===e.firstChild.type){
var n=e.firstChild,r=n.stringContent.match(Wp);
if(r){
var o=r[0].length;
n.stringContent=n.stringContent.substring(o-1),n.sourcepos[0][1]+=o,n.lineOffsets[0]+=o,e.listData.task=!0,e.listData.checked=/[xX]/.test(r[1]);
}
}},canContain:function(t){return"item"!==t;},acceptsLines:!1},od={continue:function(t,e){var n=t.currentLine,r=t.indent;if(e.isFenced){
var o=r<=3&&n.charAt(t.nextNonspace)===e.fenceChar&&n.slice(t.nextNonspace).match(Gp);
if(o&&o[0].length>=e.fenceLength)
return t.lastLineLength=t.offset+r+o[0].length,t.finalize(e,t.lineNumber),2;
for(var i=e.fenceOffset;i>0&&Qp(Zp(n,t.offset));)
t.advanceOffset(1,!0),i--;
}else
if(r>=4)
t.advanceOffset(4,!0);else
{
if(!t.blank)
return 1;
t.advanceNextNonspace();
}return 0;},finalize:function(t,e){var n;if(null!==e.stringContent){
if(e.isFenced){
var r=e.stringContent,o=r.indexOf("\n"),i=r.slice(0,o),s=r.slice(o+1),a=i.match(/^(\s*)(.*)/);
e.infoPadding=a[1].length,e.info=Du(a[2].trim()),e.literal=s;
}else

e.literal=null===(n=e.stringContent)||void 0===n?void 0:n.replace(/(\n *)+$/,"\n");
e.stringContent=null;
}},canContain:function(){return!1;},acceptsLines:!0},id={continue:function(t){return t.blank?1:0;},finalize:function(t,e){if(null!==e.stringContent){
for(var n,r=!1;91===Zp(e.stringContent,0)&&(n=t.inlineParser.parseReference(e,t.refMap));)
e.stringContent=e.stringContent.slice(n),r=!0;
r&&Xp(e.stringContent)&&e.unlink();
}},canContain:function(){return!1;},acceptsLines:!0},sd={document:{continue:function(){return 0;},finalize:function(){},canContain:function(t){return"item"!==t;},acceptsLines:!1},list:nd,blockQuote:{continue:function(t){var e=t.currentLine;return t.indented||62!==Zp(e,t.nextNonspace)?1:(t.advanceNextNonspace(),t.advanceOffset(1,!1),Qp(Zp(e,t.offset))&&t.advanceOffset(1,!0),0);},finalize:function(){},canContain:function(t){return"item"!==t;},acceptsLines:!1},item:rd,heading:{continue:function(){return 1;},finalize:function(){},canContain:function(){return!1;},acceptsLines:!1},thematicBreak:{continue:function(){return 1;},finalize:function(){},canContain:function(){return!1;},acceptsLines:!1},codeBlock:od,htmlBlock:{continue:function(t,e){return!t.blank||6!==e.htmlBlockType&&7!==e.htmlBlockType?0:1;},finalize:function(t,e){var n;e.literal=(null===(n=e.stringContent)||void 0===n?void 0:n.replace(/(\n *)+$/,""))||null,e.stringContent=null;},canContain:function(){return!1;},acceptsLines:!0},paragraph:id,table:{continue:function(){return 0;},finalize:function(){},canContain:function(t){return"tableHead"===t||"tableBody"===t;},acceptsLines:!1},tableBody:{continue:function(){return 0;},finalize:function(){},canContain:function(t){return"tableRow"===t;},acceptsLines:!1},tableHead:{continue:function(){return 1;},finalize:function(){},canContain:function(t){return"tableRow"===t||"tableDelimRow"===t;},acceptsLines:!1},tableRow:{continue:function(){return 1;},finalize:function(){},canContain:function(t){return"tableCell"===t;},acceptsLines:!1},tableCell:{continue:function(){return 1;},finalize:function(){},canContain:function(){return!1;},acceptsLines:!1},tableDelimRow:{continue:function(){return 1;},finalize:function(){},canContain:function(t){return"tableDelimCell"===t;},acceptsLines:!1},tableDelimCell:{continue:function(){return 1;},finalize:function(){},canContain:function(){return!1;},acceptsLines:!1},refDef:ed,customBlock:td,frontMatter:ed};
function ad(t){for(var e=0,n=0,r=[],o=0;o<t.length;o+=1)
if("|"===t[o]&&"\\"!==t[o-1]){
var i=t.substring(e,o);
0===e&&Pu(i)?n=o+1:r.push(i),e=o+1;
}e<t.length&&(Pu(i=t.substring(e,t.length))||r.push(i));return[n,r];}
function cd(t,e,n,r){for(var o=[],i=0,s=e;i<s.length;i++){
var a=s[i],c=a.match(/^[ \t]+/),l=c?c[0].length:0,u=void 0,p=void 0;
if(l===a.length)
l=0,u=0,p="";else
{
var d=a.match(/[ \t]+$/);
u=d?d[0].length:0,p=a.slice(l,a.length-u);
}
var f=r+l,h=tp(t,[[n,r],[n,r+a.length-1]]);
h.stringContent=p.replace(/\\\|/g,"|"),h.startIdx=o.length,h.endIdx=o.length,h.lineOffsets=[f-1],h.paddingLeft=l,h.paddingRight=u,o.push(h),r+=a.length+1;
}return o;}
function ld(t){var e=null,n=t.stringContent,r=n[0];return":"===n[n.length-1]?e=":"===r?"center":"right":":"===r&&(e="left"),{align:e};}
var ud=/^(\$\$)(\s*[a-zA-Z])+/,pd=/^(\$\$)(\s*[a-zA-Z])+.*(\$\$)/,dd=/^`{3,}(?!.*`)|^~{3,}/,fd=[/./,/^<(?:script|pre|style)(?:\s|>|$)/i,/^<!--/,/^<[?]/,/^<![A-Z]/,/^<!\[CDATA\[/,/^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[123456]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i,new RegExp("^(?:"+cp+"|"+lp+")\\s*$","i")],hd=/^(?:=+|-+)[ \t]*$/,md=/^#{1,6}(?:[ \t]+|$)/,vd=/^(?:(?:\*[ \t]*){3,}|(?:_[ \t]*){3,}|(?:-[ \t]*){3,})[ \t]*$/,gd=/^[*+-]/,yd=/^(\d{1,9})([.)])/;
function bd(t,e){return t.options.disallowDeepHeading&&("blockQuote"===e.type||"item"===e.type);}
var wd=[function(t){return t.indented||62!==Zp(t.currentLine,t.nextNonspace)?0:(t.advanceNextNonspace(),t.advanceOffset(1,!1),Qp(Zp(t.currentLine,t.offset))&&t.advanceOffset(1,!0),t.closeUnmatchedBlocks(),t.addChild("blockQuote",t.nextNonspace),1);},function(t,e){var n;if(!t.indented&&!bd(t,e)&&(n=t.currentLine.slice(t.nextNonspace).match(md))){
t.advanceNextNonspace(),t.advanceOffset(n[0].length,!1),t.closeUnmatchedBlocks();
var r=t.addChild("heading",t.nextNonspace);
return r.level=n[0].trim().length,r.headingType="atx",r.stringContent=t.currentLine.slice(t.offset).replace(/^[ \t]*#+[ \t]*$/,"").replace(/[ \t]+#+[ \t]*$/,""),t.advanceOffset(t.currentLine.length-t.offset),2;
}return 0;},function(t){var e;if(!t.indented&&(e=t.currentLine.slice(t.nextNonspace).match(dd))){
var n=e[0].length;
t.closeUnmatchedBlocks();
var r=t.addChild("codeBlock",t.nextNonspace);
return r.isFenced=!0,r.fenceLength=n,r.fenceChar=e[0][0],r.fenceOffset=t.indent,t.advanceNextNonspace(),t.advanceOffset(n,!1),2;
}return 0;},function(t,e){if(!t.indented&&60===Zp(t.currentLine,t.nextNonspace)){
var n=t.currentLine.slice(t.nextNonspace),r=t.options.disallowedHtmlBlockTags,o=void 0;
for(o=1;o<=7;o++){
var i=n.match(fd[o]);
if(i){
if(7===o){
if("paragraph"===e.type)
return 0;
if(r.length>0)
if(new RegExp("</?(?:"+r.join("|")+")","i").test(i[0]))
return 0;
}
return t.closeUnmatchedBlocks(),t.addChild("htmlBlock",t.offset).htmlBlockType=o,2;
}
}
}return 0;},function(t,e){var n;if(null!==e.stringContent&&!t.indented&&"paragraph"===e.type&&!bd(t,e.parent)&&(n=t.currentLine.slice(t.nextNonspace).match(hd))){
t.closeUnmatchedBlocks();
for(var r=void 0;91===Zp(e.stringContent,0)&&(r=t.inlineParser.parseReference(e,t.refMap));)
e.stringContent=e.stringContent.slice(r);
if(e.stringContent.length>0){
var o=tp("heading",e.sourcepos);
return o.level="="===n[0][0]?1:2,o.headingType="setext",o.stringContent=e.stringContent,e.insertAfter(o),e.unlink(),t.tip=o,t.advanceOffset(t.currentLine.length-t.offset,!1),2;
}
return 0;
}return 0;},function(t){return!t.indented&&vd.test(t.currentLine.slice(t.nextNonspace))?(t.closeUnmatchedBlocks(),t.addChild("thematicBreak",t.nextNonspace),t.advanceOffset(t.currentLine.length-t.offset,!1),2):0;},function(t,e){var n,r,o,i=e;return t.indented&&"list"!==e.type||!(n=function(t,e){var n,r,o=t.currentLine.slice(t.nextNonspace),i={type:"bullet",tight:!0,bulletChar:"",start:0,delimiter:"",padding:0,markerOffset:t.indent,task:!1,checked:!1};if(t.indent>=4)
return null;if(n=o.match(gd))
i.type="bullet",i.bulletChar=n[0][0];else
{
if(!(n=o.match(yd))||"paragraph"===e.type&&"1"!==n[1])
return null;
i.type="ordered",i.start=parseInt(n[1],10),i.delimiter=n[2];
}if(-1!==(r=Zp(t.currentLine,t.nextNonspace+n[0].length))&&9!==r&&32!==r)
return null;if("paragraph"===e.type&&!t.currentLine.slice(t.nextNonspace+n[0].length).match(Jp))
return null;t.advanceNextNonspace(),t.advanceOffset(n[0].length,!0);var s=t.column,a=t.offset;do{
t.advanceOffset(1,!0),r=Zp(t.currentLine,t.offset);
}while(t.column-s<5&&Qp(r));var c=-1===Zp(t.currentLine,t.offset),l=t.column-s;return l>=5||l<1||c?(i.padding=n[0].length+1,t.column=s,t.offset=a,Qp(Zp(t.currentLine,t.offset))&&t.advanceOffset(1,!0)):i.padding=n[0].length+l,i;}(t,i))?0:(t.closeUnmatchedBlocks(),"list"===t.tip.type&&(r=i.listData,o=n,r.type===o.type&&r.delimiter===o.delimiter&&r.bulletChar===o.bulletChar)||((i=t.addChild("list",t.nextNonspace)).listData=n),(i=t.addChild("item",t.nextNonspace)).listData=n,1);},function(t){return t.indented&&"paragraph"!==t.tip.type&&!t.blank?(t.advanceOffset(4,!0),t.closeUnmatchedBlocks(),t.addChild("codeBlock",t.offset),2):0;},function(t,e){var n=e.stringContent;if("paragraph"===e.type&&!t.indented&&!t.blank){
var r=n.length-1,o=n.lastIndexOf("\n",r-1)+1,i=n.slice(o,r),s=t.currentLine.slice(t.nextNonspace),a=ad(i),c=a[0],l=a[1],u=ad(s),p=u[0],d=u[1],f=/^[ \t]*:?-+:?[ \t]*$/;
if(!l.length||!d.length||d.some(function(t){return!f.test(t);})||1===d.length&&0!==s.indexOf("|"))
return 0;
var h=e.lineOffsets,m=t.lineNumber-1,v=gp(h)+1,g=tp("table",[[m,v],[t.lineNumber,t.offset]]);
if(g.columns=d.map(function(){return{align:null};}),e.insertAfter(g),1===h.length)
e.unlink();else
{
e.stringContent=n.slice(0,o);
var y=o-(n.lastIndexOf("\n",o-2)+1)-1;
t.lastLineLength=h[h.length-2]+y,t.finalize(e,m-1);
}
t.advanceOffset(t.currentLine.length-t.offset,!1);
var b=tp("tableHead",[[m,v],[t.lineNumber,t.offset]]);
g.appendChild(b);
var w=tp("tableRow",[[m,v],[m,v+i.length-1]]),k=tp("tableDelimRow",[[t.lineNumber,t.nextNonspace+1],[t.lineNumber,t.offset]]);
b.appendChild(w),b.appendChild(k),cd("tableCell",l,m,v+c).forEach(function(t){w.appendChild(t);});
var x=cd("tableDelimCell",d,t.lineNumber,t.nextNonspace+1+p);
return x.forEach(function(t){k.appendChild(t);}),g.columns=x.map(ld),t.tip=g,2;
}return 0;},function(t,e){if("table"!==e.type&&"tableBody"!==e.type||!t.blank&&-1===t.currentLine.indexOf("|"))
return 0;if(t.advanceOffset(t.currentLine.length-t.offset,!1),t.blank){
var n=e;
return"tableBody"===e.type&&(n=e.parent,t.finalize(e,t.lineNumber-1)),t.finalize(n,t.lineNumber-1),0;
}var r=e;"table"===e.type&&((r=t.addChild("tableBody",t.nextNonspace)).stringContent=null);var o=tp("tableRow",[[t.lineNumber,t.nextNonspace+1],[t.lineNumber,t.currentLine.length]]);r.appendChild(o);var i=r.parent,s=ad(t.currentLine.slice(t.nextNonspace)),a=s[0];return cd("tableCell",s[1],t.lineNumber,t.nextNonspace+1+a).forEach(function(t,e){e>=i.columns.length&&(t.ignored=!0),o.appendChild(t);}),2;},function(t){var e;if(!t.indented&&!pd.test(t.currentLine)&&(e=t.currentLine.match(ud))){
var n=e[1].length;
t.closeUnmatchedBlocks();
var r=t.addChild("customBlock",t.nextNonspace);
return r.syntaxLength=n,r.offset=t.indent,t.advanceNextNonspace(),t.advanceOffset(n,!1),2;
}return 0;}],kd=/^(-{3}|\+{3}|;{3})$/,xd=function(t,e){var n=t.currentLine,r=t.lineNumber,o=t.indented;return 1===r&&!o&&"document"===e.type&&kd.test(n)?(t.closeUnmatchedBlocks(),t.addChild("frontMatter",t.nextNonspace).stringContent=n,t.advanceNextNonspace(),t.advanceOffset(n.length,!1),2):0;},Cd={continue:function(t,e){var n=t.currentLine,r=n.match(kd);return"frontMatter"===e.type&&r?(e.stringContent+=n,t.lastLineLength=r[0].length,t.finalize(e,t.lineNumber),2):0;},finalize:function(t,e){null!==e.stringContent&&(e.literal=e.stringContent,e.stringContent=null);},canContain:function(){return!1;},acceptsLines:!0},Td=[/./,/<\/(?:script|pre|style)>/i,/-->/,/\?>/,/>/,/\]\]>/],Md=/^[#`~*+_=<>0-9-;$]/,Sd=/\r\n|\n|\r/;
function Ed(){return tp("document",[[1,1],[0,0]]);}
var Nd={smart:!1,tagFilter:!1,extendedAutolinks:!1,disallowedHtmlBlockTags:[],referenceDefinition:!1,disallowDeepHeading:!1,customParser:null,frontMatter:!1},Od=function(){function t(t){this.options=zl(zl({},Nd),t),this.doc=Ed(),this.tip=this.doc,this.oldtip=this.doc,this.lineNumber=0,this.offset=0,this.column=0,this.nextNonspace=0,this.nextNonspaceColumn=0,this.indent=0,this.currentLine="",this.indented=!1,this.blank=!1,this.partiallyConsumedTab=!1,this.allClosed=!0,this.lastMatchedContainer=this.doc,this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.lastLineLength=0,this.lines=[],this.options.frontMatter&&(sd.frontMatter=Cd,wd.unshift(xd)),this.inlineParser=new Up(this.options);}return t.prototype.advanceOffset=function(t,e){void 0===e&&(e=!1);for(var n,r,o,i=this.currentLine;t>0&&(o=i[this.offset]);)
"\t"===o?(n=4-this.column%4,e?(this.partiallyConsumedTab=n>t,r=n>t?t:n,this.column+=r,this.offset+=this.partiallyConsumedTab?0:1,t-=r):(this.partiallyConsumedTab=!1,this.column+=n,this.offset+=1,t-=1)):(this.partiallyConsumedTab=!1,this.offset+=1,this.column+=1,t-=1);},t.prototype.advanceNextNonspace=function(){this.offset=this.nextNonspace,this.column=this.nextNonspaceColumn,this.partiallyConsumedTab=!1;},t.prototype.findNextNonspace=function(){for(var t,e=this.currentLine,n=this.offset,r=this.column;""!==(t=e.charAt(n));)
if(" "===t)
n++,r++;else
{
if("\t"!==t)
break;
n++,r+=4-r%4;
}this.blank="\n"===t||"\r"===t||""===t,this.nextNonspace=n,this.nextNonspaceColumn=r,this.indent=this.nextNonspaceColumn-this.column,this.indented=this.indent>=4;},t.prototype.addLine=function(){if(this.partiallyConsumedTab){
this.offset+=1;
var t=4-this.column%4;
this.tip.stringContent+=Ru(" ",t);
}this.tip.lineOffsets?this.tip.lineOffsets.push(this.offset):this.tip.lineOffsets=[this.offset],this.tip.stringContent+=this.currentLine.slice(this.offset)+"\n";},t.prototype.addChild=function(t,e){for(;!sd[this.tip.type].canContain(t);)
this.finalize(this.tip,this.lineNumber-1);var n=e+1,r=tp(t,[[this.lineNumber,n],[0,0]]);return r.stringContent="",this.tip.appendChild(r),this.tip=r,r;},t.prototype.closeUnmatchedBlocks=function(){if(!this.allClosed){
for(;this.oldtip!==this.lastMatchedContainer;){
var t=this.oldtip.parent;
this.finalize(this.oldtip,this.lineNumber-1),this.oldtip=t;
}
this.allClosed=!0;
}},t.prototype.finalize=function(t,e){var n=t.parent;t.open=!1,t.sourcepos[1]=[e,this.lastLineLength],sd[t.type].finalize(this,t),this.tip=n;},t.prototype.processInlines=function(t){var e,n=this.options.customParser,r=t.walker();for(this.inlineParser.refMap=this.refMap,this.inlineParser.refLinkCandidateMap=this.refLinkCandidateMap,this.inlineParser.refDefCandidateMap=this.refDefCandidateMap,this.inlineParser.options=this.options;e=r.next();){
var o=e.node,i=e.entering,s=o.type;
n&&n[s]&&n[s](o,{entering:i,options:this.options}),i||"paragraph"!==s&&"heading"!==s&&("tableCell"!==s||o.ignored)||this.inlineParser.parse(o);
}},t.prototype.incorporateLine=function(t){var e=this.doc;this.oldtip=this.tip,this.offset=0,this.column=0,this.blank=!1,this.partiallyConsumedTab=!1,this.lineNumber+=1,-1!==t.indexOf("\0")&&(t=t.replace(/\0/g,"占�")),this.currentLine=t;for(var n,r=!0;(n=e.lastChild)&&n.open;){
switch(e=n,this.findNextNonspace(),sd[e.type].continue(this,e)){
case 0:break;
case 1:
r=!1;
break;
case 2:return void(this.lastLineLength=t.length);
default:throw new Error("continue returned illegal value, must be 0, 1, or 2");
}
if(!r){
e=e.parent;
break;
}
}this.allClosed=e===this.oldtip,this.lastMatchedContainer=e;for(var o="paragraph"!==e.type&&sd[e.type].acceptsLines,i=wd.length;!o;){
if(this.findNextNonspace(),"table"!==e.type&&"tableBody"!==e.type&&"paragraph"!==e.type&&!this.indented&&!Md.test(t.slice(this.nextNonspace))){
this.advanceNextNonspace();
break;
}
for(var s=0;s<i;){
var a=wd[s](this,e);
if(1===a){
e=this.tip;
break;
}
if(2===a){
e=this.tip,o=!0;
break;
}
s++;
}
if(s===i){
this.advanceNextNonspace();
break;
}
}if(this.allClosed||this.blank||"paragraph"!==this.tip.type){
this.closeUnmatchedBlocks(),this.blank&&e.lastChild&&(e.lastChild.lastLineBlank=!0);
for(var c=e.type,l=this.blank&&!("blockQuote"===c||ep(e)&&e.isFenced||"item"===c&&!e.firstChild&&e.sourcepos[0][0]===this.lineNumber),u=e;u;)
u.lastLineBlank=l,u=u.parent;
sd[c].acceptsLines?(this.addLine(),function(t){return"htmlBlock"===t.type;}(e)&&e.htmlBlockType>=1&&e.htmlBlockType<=5&&Td[e.htmlBlockType].test(this.currentLine.slice(this.offset))&&(this.lastLineLength=t.length,this.finalize(e,this.lineNumber))):this.offset<t.length&&!this.blank&&(e=this.addChild("paragraph",this.offset),this.advanceNextNonspace(),this.addLine());
}else

this.addLine();this.lastLineLength=t.length;},t.prototype.parse=function(t,e){this.doc=Ed(),this.tip=this.doc,this.lineNumber=0,this.lastLineLength=0,this.offset=0,this.column=0,this.lastMatchedContainer=this.doc,this.currentLine="";var n=t.split(Sd),r=n.length;this.lines=e||n,this.options.referenceDefinition&&this.clearRefMaps(),10===t.charCodeAt(t.length-1)&&(r-=1);for(var o=0;o<r;o++)
this.incorporateLine(n[o]);for(;this.tip;)
this.finalize(this.tip,r);return this.processInlines(this.doc),this.doc;},t.prototype.partialParseStart=function(t,e){this.doc=Ed(),this.tip=this.doc,this.lineNumber=t-1,this.lastLineLength=0,this.offset=0,this.column=0,this.lastMatchedContainer=this.doc,this.currentLine="";for(var n=e.length,r=0;r<n;r++)
this.incorporateLine(e[r]);return this.doc;},t.prototype.partialParseExtends=function(t){for(var e=0;e<t.length;e++)
this.incorporateLine(t[e]);},t.prototype.partialParseFinish=function(){for(;this.tip;)
this.finalize(this.tip,this.lineNumber);this.processInlines(this.doc);},t.prototype.setRefMaps=function(t,e,n){this.refMap=t,this.refLinkCandidateMap=e,this.refDefCandidateMap=n;},t.prototype.clearRefMaps=function(){[this.refMap,this.refLinkCandidateMap,this.refDefCandidateMap].forEach(function(t){var e;e=t,Object.keys(e).forEach(function(t){delete e[t];});});},t;}();
function Dd(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:t[1]<e[1]?1:t[1]>e[1]?-1:0;}
function Ad(t,e){var n=t[0];return 1===Dd(t[1],e)?1:-1===Dd(n,e)?-1:0;}
function Ld(t,e){for(var n=0,r=e;n<r.length;n++){
var o=r[n];
t.insertBefore(o);
}}
function Id(t,e){var n=t[0];return t[1][0]<e?1:n[0]>e?-1:0;}
function Rd(t,e){for(var n=t.firstChild;n;){
var r=Id(n.sourcepos,e);
if(0===r)
return n;
if(-1===r)
return n.prev||n;
n=n.next;
}return t.lastChild;}
function Pd(t){return function(t){return zu[t];}(t)||null;}
function Bd(t,e,n){if(void 0===n&&(n=null),e)
for(var r=e.walker();e&&e!==n;){
t(e);
var o=r.next();
if(!o)
break;
e=o.node;
}}
var Fd=/\r\n|\n|\r/;
function Hd(t){return{id:t.id,title:t.title,sourcepos:t.sourcepos,unlinked:!1,destination:t.dest};}
var zd=function(){function t(t,e){this.refMap={},this.refLinkCandidateMap={},this.refDefCandidateMap={},this.referenceDefinition=!!(null==e?void 0:e.referenceDefinition),this.parser=new Od(e),this.parser.setRefMaps(this.refMap,this.refLinkCandidateMap,this.refDefCandidateMap),this.eventHandlerMap={change:[]},t=t||"",this.lineTexts=t.split(Fd),this.root=this.parser.parse(t,this.lineTexts);}return t.prototype.updateLineTexts=function(t,e,n){var r,o=t[0],i=t[1],s=e[0],a=e[1],c=n.split(Fd),l=c.length,u=this.lineTexts[o-1],p=this.lineTexts[s-1];c[0]=u.slice(0,i-1)+c[0],c[l-1]=c[l-1]+p.slice(a-1);var d=s-o+1;return(r=this.lineTexts).splice.apply(r,jl([o-1,d],c)),l-d;},t.prototype.updateRootNodeState=function(){if(1===this.lineTexts.length&&""===this.lineTexts[0])
return this.root.lastLineBlank=!0,void(this.root.sourcepos=[[1,1],[1,0]]);this.root.lastChild&&(this.root.lastLineBlank=this.root.lastChild.lastLineBlank);for(var t=this.lineTexts,e=t.length-1;""===t[e];)
e-=1;t.length-2>e&&(e+=1),this.root.sourcepos[1]=[e+1,t[e].length];},t.prototype.replaceRangeNodes=function(t,e,n){t?(Ld(t,n),function(t,e){if(t.parent===e.parent&&t!==e){
for(var n=t.next;n&&n!==e;){
for(var r=n.next,o=0,i=["parent","prev","next"];o<i.length;o++){
var s=i[o];
n[s]&&(ju(n[s].id),n[s]=null);
}
n=r;
}
t.next=e.next,e.next?e.next.prev=t:t.parent.lastChild=t;
}}(t,e),[t.id,e.id].forEach(function(t){return ju(t);}),t.unlink()):e?(Ld(e,n),ju(e.id),e.unlink()):function(t,e){for(var n=e.length-1;n>=0;n-=1)
t.prependChild(e[n]);}(this.root,n);},t.prototype.getNodeRange=function(t,e){var n=Rd(this.root,t[0]),r=Rd(this.root,e[0]);return r&&r.next&&e[0]+1===r.next.sourcepos[0][0]&&(r=r.next),[n,r];},t.prototype.trigger=function(t,e){this.eventHandlerMap[t].forEach(function(t){t(e);});},t.prototype.extendEndLine=function(t){for(;""===this.lineTexts[t];)
t+=1;return t;},t.prototype.parseRange=function(t,e,n,r){var o;t&&t.prev&&(np(t.prev)&&function(t){var e=t.match(/^[ \t]+/);if(e&&(e[0].length>=2||/\t/.test(e[0])))
return!0;var n=e?t.slice(e.length):t;return gd.test(n)||yd.test(n);}(this.lineTexts[n-1])||function(t){return"table"===t.type;}(t.prev)&&!Xp(o=this.lineTexts[n-1])&&-1!==o.indexOf("|"))&&(n=(t=t.prev).sourcepos[0][0]);for(var i=this.lineTexts.slice(n-1,r),s=this.parser.partialParseStart(n,i),a=e?e.next:this.root.firstChild,c=s.lastChild,l=c&&ep(c)&&c.open,u=c&&op(c)&&c.open,p=c&&np(c);(l||u)&&a||p&&a&&("list"===a.type||a.sourcepos[0][1]>=2);){
var d=this.extendEndLine(a.sourcepos[1][0]);
this.parser.partialParseExtends(this.lineTexts.slice(r,d)),t||(t=e),e=a,r=d,a=a.next;
}return this.parser.partialParseFinish(),{newNodes:function(t){for(var e=[],n=t.firstChild;n;)
e.push(n),n=n.next;return e;}(s),extStartNode:t,extEndNode:e};},t.prototype.getRemovedNodeRange=function(t,e){return!t||t&&rp(t)||e&&rp(e)?null:{id:[t.id,e.id],line:[t.sourcepos[0][0]-1,e.sourcepos[1][0]-1]};},t.prototype.markDeletedRefMap=function(t,e){var n=this;if(!wp(this.refMap)){
var r=function(t){if(rp(t)){
var e=n.refMap[t.label];
e&&t.id===e.id&&(e.unlinked=!0);
}};
t&&Bd(r,t.parent,e),e&&Bd(r,e);
}},t.prototype.replaceWithNewRefDefState=function(t){var e=this;if(!wp(this.refMap)){
var n=function(t){if(rp(t)){
var n=t.label,r=e.refMap[n];
r&&!r.unlinked||(e.refMap[n]=Hd(t));
}};
t.forEach(function(t){Bd(n,t);});
}},t.prototype.replaceWithRefDefCandidate=function(){var t=this;wp(this.refDefCandidateMap)||bp(this.refDefCandidateMap,function(e,n){var r=n.label,o=n.sourcepos,i=t.refMap[r];(!i||i.unlinked||i.sourcepos[0][0]>o[0][0])&&(t.refMap[r]=Hd(n));});},t.prototype.getRangeWithRefDef=function(t,e,n,r,o){if(this.referenceDefinition&&!wp(this.refMap)){
var i=Rd(this.root,t-1),s=Rd(this.root,e+1);
i&&rp(i)&&i!==n&&i!==r&&(t=(n=i).sourcepos[0][0]),s&&rp(s)&&s!==n&&s!==r&&(r=s,e=this.extendEndLine(r.sourcepos[1][0]+o));
}return[n,r,t,e];},t.prototype.parse=function(t,e,n){void 0===n&&(n=0);var r=this.getNodeRange(t,e),o=r[0],i=r[1],s=o?Math.min(o.sourcepos[0][0],t[0]):t[0],a=this.extendEndLine((i?Math.max(i.sourcepos[1][0],e[0]):e[0])+n),c=this.parseRange.apply(this,this.getRangeWithRefDef(s,a,o,i,n)),l=c.newNodes,u=c.extStartNode,p=c.extEndNode,d=this.getRemovedNodeRange(u,p),f=p?p.next:this.root.firstChild;return this.referenceDefinition?(this.markDeletedRefMap(u,p),this.replaceRangeNodes(u,p,l),this.replaceWithNewRefDefState(l)):this.replaceRangeNodes(u,p,l),{nodes:l,removedNodeRange:d,nextNode:f};},t.prototype.parseRefLink=function(){var t=this,e=[];return wp(this.refMap)||bp(this.refMap,function(n,r){r.unlinked&&delete t.refMap[n],bp(t.refLinkCandidateMap,function(r,o){var i=o.node;o.refLabel===n&&e.push(t.parse(i.sourcepos[0],i.sourcepos[1]));});}),e;},t.prototype.removeUnlinkedCandidate=function(){wp(this.refDefCandidateMap)||[this.refLinkCandidateMap,this.refDefCandidateMap].forEach(function(t){bp(t,function(e){(function(t){var e=Pd(t);if(!e)
return!0;for(;e&&"document"!==e.type;){
if(!e.parent&&!e.prev&&!e.next)
return!0;
e=e.parent;
}return!1;})(e)&&delete t[e];});});},t.prototype.editMarkdown=function(t,e,n){var r=this.updateLineTexts(t,e,n),o=this.parse(t,e,r),i=function(t){for(var e=[],n=1;n<arguments.length;n++)
e[n-1]=arguments[n];var r=zl({},t);return e.forEach(function(t){delete r[t];}),r;}(o,"nextNode");!function(t,e){if(t&&t.parent&&0!==e){
var n,r=t.parent.walker();
for(r.resumeAt(t,!0);n=r.next();){
var o=n.node;
n.entering&&(o.sourcepos[0][0]+=e,o.sourcepos[1][0]+=e);
}
}}(o.nextNode,r),this.updateRootNodeState();var s=[i];return this.referenceDefinition&&(this.removeUnlinkedCandidate(),this.replaceWithRefDefCandidate(),s=s.concat(this.parseRefLink())),this.trigger("change",s),s;},t.prototype.getLineTexts=function(){return this.lineTexts;},t.prototype.getRootNode=function(){return this.root;},t.prototype.findNodeAtPosition=function(t){var e=function(t,e){for(var n=t,r=null;n;){
var o=Ad(n.sourcepos,e);
if(0===o){
if(!n.firstChild)
return n;
r=n,n=n.firstChild;
}else
{
if(-1===o)
return r;
if(!n.next)
return r;
n=n.next;
}
}return n;}(this.root,t);return e&&e!==this.root?e:null;},t.prototype.findFirstNodeAtLine=function(t){return function(t,e){for(var n=t.firstChild,r=null;n;){
var o=Id(n.sourcepos,e);
if(0===o){
if(n.sourcepos[0][0]===e||!n.firstChild)
return n;
r=n,n=n.firstChild;
}else
{
if(-1===o)
break;
r=n,n=n.next;
}
}return r?function(t){for(;t.parent&&"document"!==t.parent.type&&t.parent.sourcepos[0][0]===t.sourcepos[0][0];)
t=t.parent;return t;}(function(t){for(;t.lastChild;)
t=t.lastChild;return t;}(r)):null;}(this.root,t);},t.prototype.on=function(t,e){this.eventHandlerMap[t].push(e);},t.prototype.off=function(t,e){var n=this.eventHandlerMap[t],r=n.indexOf(e);n.splice(r,1);},t.prototype.findNodeById=function(t){return Pd(t);},t.prototype.removeAllNode=function(){zu={};},t;}(),jd=new RegExp("<(/?(?:"+["title","textarea","style","xmp","iframe","noembed","noframes","script","plaintext"].join("|")+")[^>]*>)","ig");
function _d(t){return jd.test(t)?t.replace(jd,function(t,e){return"&lt;"+e;}):t;}
var qd={heading:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"h"+t.level,outerNewLine:!0};},text:function(t){return{type:"text",content:t.literal};},softbreak:function(t,e){return{type:"html",content:e.options.softbreak};},linebreak:function(){return{type:"html",content:"<br />\n"};},emph:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"em"};},strong:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"strong"};},paragraph:function(t,e){var n,r=e.entering,o=null===(n=t.parent)||void 0===n?void 0:n.parent;return o&&"list"===o.type&&o.listData.tight?null:{type:r?"openTag":"closeTag",tagName:"p",outerNewLine:!0};},thematicBreak:function(){return{type:"openTag",tagName:"hr",outerNewLine:!0,selfClose:!0};},blockQuote:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"blockquote",outerNewLine:!0,innerNewLine:!0};},list:function(t,e){var n=e.entering,r=t.listData,o=r.type,i=r.start,s="bullet"===o?"ul":"ol",a={};return"ol"===s&&null!==i&&1!==i&&(a.start=i.toString()),{type:n?"openTag":"closeTag",tagName:s,attributes:a,outerNewLine:!0};},item:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"li",outerNewLine:!0};},htmlInline:function(t,e){return{type:"html",content:e.options.tagFilter?_d(t.literal):t.literal};},htmlBlock:function(t,e){var n=e.options,r=n.tagFilter?_d(t.literal):t.literal;return n.nodeId?[{type:"openTag",tagName:"div",outerNewLine:!0},{type:"html",content:r},{type:"closeTag",tagName:"div",outerNewLine:!0}]:{type:"html",content:r,outerNewLine:!0};},code:function(t){return[{type:"openTag",tagName:"code"},{type:"text",content:t.literal},{type:"closeTag",tagName:"code"}];},codeBlock:function(t){var e=t.info,n=e?e.split(/\s+/):[],r=[];return n.length>0&&n[0].length>0&&r.push("language-"+Iu(n[0])),[{type:"openTag",tagName:"pre",outerNewLine:!0},{type:"openTag",tagName:"code",classNames:r},{type:"text",content:t.literal},{type:"closeTag",tagName:"code"},{type:"closeTag",tagName:"pre",outerNewLine:!0}];},link:function(t,e){if(e.entering){
var n=t,r=n.title,o=n.destination;
return{type:"openTag",tagName:"a",attributes:zl({href:Iu(o)},r&&{title:Iu(r)})};
}return{type:"closeTag",tagName:"a"};},image:function(t,e){var n=e.getChildrenText,r=e.skipChildren,o=t,i=o.title,s=o.destination;return r(),{type:"openTag",tagName:"img",selfClose:!0,attributes:zl({src:Iu(s),alt:n(t)},i&&{title:Iu(i)})};},customBlock:function(t,e,n){var r=t.info.trim().toLowerCase(),o=n[r];if(o)
try{
return o(t,e);
}
catch(t){
console.warn("[@toast-ui/editor] - The error occurred when "+r+" block node was parsed in markdown renderer: "+t);
}return[{type:"openTag",tagName:"div",outerNewLine:!0},{type:"text",content:t.literal},{type:"closeTag",tagName:"div",outerNewLine:!0}];},frontMatter:function(t){return[{type:"openTag",tagName:"div",outerNewLine:!0,attributes:{style:"white-space: pre; display: none;"}},{type:"text",content:t.literal},{type:"closeTag",tagName:"div",outerNewLine:!0}];},customInline:function(t,e,n){var r=t,o=r.info,i=r.firstChild,s=o.trim().toLowerCase(),a=n[s],c=e.entering;if(a)
try{
return a(t,e);
}
catch(t){
console.warn("[@toast-ui/editor] - The error occurred when "+s+" inline node was parsed in markdown renderer: "+t);
}return c?[{type:"openTag",tagName:"span"},{type:"text",content:"$$"+o+(i?" ":"")}]:[{type:"text",content:"$$"},{type:"closeTag",tagName:"span"}];}},Vd={strike:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"del"};},item:function(t,e){var n=e.entering,r=t.listData,o=r.checked,i=r.task;if(n){
var s={type:"openTag",tagName:"li",outerNewLine:!0};
return i?[s,{type:"openTag",tagName:"input",selfClose:!0,attributes:zl(zl({},o&&{checked:""}),{disabled:"",type:"checkbox"})},{type:"text",content:" "}]:s;
}return{type:"closeTag",tagName:"li",outerNewLine:!0};},table:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"table",outerNewLine:!0};},tableHead:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"thead",outerNewLine:!0};},tableBody:function(t,e){return{type:e.entering?"openTag":"closeTag",tagName:"tbody",outerNewLine:!0};},tableRow:function(t,e){if(e.entering)
return{type:"openTag",tagName:"tr",outerNewLine:!0};var n=[];if(t.lastChild)
for(var r=t.parent.parent.columns.length,o=t.lastChild.endIdx+1;o<r;o+=1)
n.push({type:"openTag",tagName:"td",outerNewLine:!0},{type:"closeTag",tagName:"td",outerNewLine:!0});return n.push({type:"closeTag",tagName:"tr",outerNewLine:!0}),n;},tableCell:function(t,e){var n=e.entering;if(t.ignored)
return{type:"text",content:""};var r=t.parent.parent,o="tableHead"===r.type?"th":"td",i=r.parent.columns[t.startIdx],s=(null==i?void 0:i.align)?{align:i.align}:null;return n?zl({type:"openTag",tagName:o,outerNewLine:!0},s&&{attributes:s}):{type:"closeTag",tagName:o,outerNewLine:!0};}},$d={softbreak:"\n",gfm:!1,tagFilter:!1,nodeId:!1};
function Ud(t){for(var e=[],n=t.walker(),r=null;r=n.next();){
var o=r.node;
"text"===o.type&&e.push(o.literal);
}return e.join("");}
var Wd=function(){function t(t){this.buffer=[],this.options=zl(zl({},$d),t),this.convertors=this.createConvertors(),delete this.options.convertors;}return t.prototype.createConvertors=function(){var t=zl({},qd);if(this.options.gfm&&(t=zl(zl({},t),Vd)),this.options.convertors){
var e=this.options.convertors,n=Object.keys(e),r=zl(zl({},qd),Vd);
n.forEach(function(n){var o=t[n],i=e[n],s=-1===Object.keys(r).indexOf(n)?n.toLowerCase():n;t[s]=o?function(t,e,n){return e.origin=function(){return o(t,e,n);},i(t,e);}:i;});
}return t;},t.prototype.getConvertors=function(){return this.convertors;},t.prototype.getOptions=function(){return this.options;},t.prototype.render=function(t){var e=this;this.buffer=[];for(var n=t.walker(),r=null,o=function(){var t=r.node,o=r.entering,s=i.convertors[t.type];if(!s)
return"continue";var a=!1,c={entering:o,leaf:!Fu(t),options:i.options,getChildrenText:Ud,skipChildren:function(){a=!0;}},l=op(t)||function(t){return"customInline"===t.type;}(t)?s(t,c,i.convertors):s(t,c);l&&((Array.isArray(l)?l:[l]).forEach(function(n,r){"openTag"===n.type&&e.options.nodeId&&0===r&&(n.attributes||(n.attributes={}),n.attributes["data-nodeid"]=String(t.id)),e.renderHTMLNode(n);}),a&&(n.resumeAt(t,!1),n.next()));},i=this;r=n.next();)
o();return this.addNewLine(),this.buffer.join("");},t.prototype.renderHTMLNode=function(t){switch(t.type){
case"openTag":
case"closeTag":
this.renderElementNode(t);
break;
case"text":
this.renderTextNode(t);
break;
case"html":this.renderRawHtmlNode(t);
}},t.prototype.generateOpenTagString=function(t){var e=this,n=t.tagName,r=t.classNames,o=t.attributes;this.buffer.push("<"+n),r&&r.length>0&&this.buffer.push(' class="'+r.join(" ")+'"'),o&&Object.keys(o).forEach(function(t){var n=o[t];e.buffer.push(" "+t+'="'+n+'"');}),t.selfClose&&this.buffer.push(" /"),this.buffer.push(">");},t.prototype.generateCloseTagString=function(t){var e=t.tagName;this.buffer.push("</"+e+">");},t.prototype.addNewLine=function(){this.buffer.length&&"\n"!==gp(gp(this.buffer))&&this.buffer.push("\n");},t.prototype.addOuterNewLine=function(t){t.outerNewLine&&this.addNewLine();},t.prototype.addInnerNewLine=function(t){t.innerNewLine&&this.addNewLine();},t.prototype.renderTextNode=function(t){this.buffer.push(Iu(t.content));},t.prototype.renderRawHtmlNode=function(t){this.addOuterNewLine(t),this.buffer.push(t.content),this.addOuterNewLine(t);},t.prototype.renderElementNode=function(t){"openTag"===t.type?(this.addOuterNewLine(t),this.generateOpenTagString(t),t.selfClose?this.addOuterNewLine(t):this.addInnerNewLine(t)):(this.addInnerNewLine(t),this.generateCloseTagString(t),this.addOuterNewLine(t));},t;}(),Jd=n(368),Gd=n.n(Jd),Kd=["iframe","embed"],Zd=[];
function Xd(t){te(Kd,t)&&Zd.push(t.toLowerCase());}
function Qd(t,e){return Gd().sanitize(t,o({ADD_TAGS:Zd,ADD_ATTR:["rel","target","hreflang","type"],FORBID_TAGS:["input","script","textarea","form","button","select","meta","style","link","title","object","base"]},e));}
function Yd(t,e){return t.literal.replace(new RegExp("(<\\s*"+e+"[^>]*>)|(</"+e+"\\s*[>])","ig"),"").trim();}
function tf(t){var e=(t=t.match(da)[0]).match(new RegExp(la,"g"));return e?e.reduce(function(t,e){var n=e.trim().split("="),r=n[0],o=n.slice(1);return o.length&&(t[r]=o.join("=").replace(/'|"/g,"").trim()),t;},{}):{};}
function ef(t){return gi()(t.attributes).reduce(function(t,e){return t[e.nodeName]=e.nodeValue,t;},{});}
function nf(t,e,n,r){var o=r.getToDOMNode(e)(t),i=n(o.outerHTML),s=document.createElement("div");return s.innerHTML=i,{dom:o=s.firstChild,htmlAttrs:ef(o)};}
var rf={htmlBlock:function(t,e,n){return{atom:!0,content:"block+",group:"block",attrs:{htmlAttrs:{default:{}},childrenHTML:{default:""},htmlBlock:{default:!0}},parseDOM:[{tag:t,getAttrs:function(t){return{htmlAttrs:ef(t),childrenHTML:t.innerHTML};}}],toDOM:function(r){var o=nf(r,t,e,n),s=o.dom,a=o.htmlAttrs;return a.class=a.class?a.class+" html-block":"html-block",i([t,a],gi()(s.childNodes));}};},htmlInline:function(t,e,n){return{attrs:{htmlAttrs:{default:{}},htmlInline:{default:!0}},parseDOM:[{tag:t,getAttrs:function(t){return{htmlAttrs:ef(t)};}}],toDOM:function(r){var o=nf(r,t,e,n).htmlAttrs;return[t,o,0];}};}};
var of=/^\s*<\s*\//,sf={paragraph:function(t,e){var n=e.entering,r=e.origin;return e.options.nodeId?{type:n?"openTag":"closeTag",outerNewLine:!0,tagName:"p"}:r();},softbreak:function(t){return{type:"html",content:t.prev&&"htmlInline"===t.prev.type&&/<br ?\/?>/.test(t.prev.literal)?"\n":"<br>\n"};},item:function(t,e){if(e.entering){
var n={},r=[];
return t.listData.task&&(n["data-task"]="",r.push("task-list-item"),t.listData.checked&&(r.push("checked"),n["data-task-checked"]="")),{type:"openTag",tagName:"li",classNames:r,attributes:n,outerNewLine:!0};
}return{type:"closeTag",tagName:"li",outerNewLine:!0};},code:function(t){return[{type:"openTag",tagName:"code",attributes:{"data-backticks":String(t.tickCount)}},{type:"text",content:t.literal},{type:"closeTag",tagName:"code"}];},codeBlock:function(t){var e=t,n=e.fenceLength,r=e.info,o=r?r.split(/\s+/):[],i=[],s={};if(n>3&&(s["data-backticks"]=n),o.length>0&&o[0].length>0){
var a=o[0];
i.push("lang-"+a),s["data-language"]=a;
}return[{type:"openTag",tagName:"pre",classNames:i},{type:"openTag",tagName:"code",attributes:s},{type:"text",content:t.literal},{type:"closeTag",tagName:"code"},{type:"closeTag",tagName:"pre"}];},customInline:function(t,e){var n=e.origin,r=e.entering,o=e.skipChildren,i=t.info;return-1!==i.indexOf("widget")&&r?(o(),[{type:"openTag",tagName:"span",classNames:["tui-widget"]},{type:"html",content:Ks(i,ta(t)).outerHTML},{type:"closeTag",tagName:"span"}]):n();}};
function af(t,e){var n=o({},sf);return t&&(n.link=function(e,n){var r=n.entering,i=(0,n.origin)();return r&&(i.attributes=o(o({},i.attributes),t)),i;}),e&&Object.keys(e).forEach(function(t){var r=n[t],i=e[t];r&&Va()(i)?n[t]=function(t,e){var n=o({},e);return n.origin=function(){return r(t,e);},i(t,n);}:te(["htmlBlock","htmlInline"],t)&&!Va()(i)?n[t]=function(t,e){var n=t.literal.match(da);if(n){
var r=n[0],s=n[1],a=n[3],c=(s||a).toLowerCase(),l=i[c],u=Yd(t,c);
if(l){
var p=o({},t);
return p.attrs=tf(r),p.childrenHTML=u,p.type=c,e.entering=!of.test(t.literal),l(p,e);
}
}return e.origin();}:n[t]=i;}),n;}
var cf=["list","item","blockQuote"],lf=["UL","OL","BLOCKQUOTE"];
function uf(t,e){var n,r=t.child(e);return!r.childCount||1===r.childCount&&!(null===(n=r.firstChild.text)||void 0===n?void 0:n.trim());}
function pf(t,e,n){var r=Os(e)-1,o=Ds(e)-1,i=n[r].getBoundingClientRect(),s=n[o].offsetTop-n[r].offsetTop+n[o].clientHeight;return{height:s<=0?n[r].clientHeight:s+df(t,n,Math.min(o+1,t.childCount-1)),rect:i};}
function df(t,e,n){for(var r=t.childCount-1,o=0;n<=r&&uf(t,n);)
o+=e[n].clientHeight,n+=1;return o;}
function ff(t,e){for(var n=0;t&&t!==e&&(te(lf,t.tagName)||(n+=t.offsetTop),t.offsetParent!==e.offsetParent);)
t=t.parentElement;return n;}
function hf(t,e,n){return t&&e>n+t.offsetTop?hf(t.nextElementSibling,e,n)||t:null;}
function mf(t,e){for(var n=t.querySelector('[data-nodeid="'+e.id+'"]');!n||Is(e);)
e=e.parent,n=t.querySelector('[data-nodeid="'+e.id+'"]');return function(t){var e=t.mdNode,n=t.el;for(;(te(cf,e.type)||"table"===e.type)&&e.firstChild;)
e=e.firstChild,n=n.firstElementChild;return{mdNode:e,el:n};}({mdNode:e,el:n});}
var vf={};
function gf(t){t&&(delete vf[Number(t.getAttribute("data-nodeid"))],gi()(t.children).forEach(function(t){gf(t);}));}
function yf(t,e,n){var r,o=vf[r=n]&&vf[r].height,i=function(t){return vf[t]&&vf[t].offsetTop;}(n),s=o||t.clientHeight,a=i||ff(t,e)||t.offsetTop;return o||function(t,e){vf[t]=vf[t]||{},vf[t].height=e;}(n,s),i||function(t,e){vf[t]=vf[t]||{},vf[t].offsetTop=e;}(n,a),{nodeHeight:s,offsetTop:a};}
var bf=ya("md-preview-highlight");
var wf=function(){function t(t,e){var n=document.createElement("div");this.el=n,this.eventEmitter=t,this.isViewer=!!e.isViewer,this.el.className=ya("md-preview");var r=e.linkAttributes,o=e.customHTMLRenderer,i=e.sanitizer,s=e.highlight,a=void 0!==s&&s;this.renderer=new Wd({gfm:!0,nodeId:!0,convertors:af(r,o)}),this.cursorNodeId=null,this.sanitizer=i,this.initEvent(a),this.initContentSection(),this.isViewer&&(this.previewContent.style.overflowWrap="break-word");}return t.prototype.initContentSection=function(){this.previewContent=Ca('<div class="'+ya("contents")+'"></div>'),this.isViewer||this.el.appendChild(this.previewContent);},t.prototype.toggleActive=function(t){xa(this.el,"active",t);},t.prototype.initEvent=function(t){var e=this;this.eventEmitter.listen("updatePreview",this.update.bind(this)),this.isViewer||(t&&(this.eventEmitter.listen("changeToolbarState",function(t){var n=t.mdNode,r=t.cursorPos;e.updateCursorNode(n,r);}),this.eventEmitter.listen("blur",function(){e.removeHighlight();})),Bl()(this.el,"scroll",function(t){e.eventEmitter.emit("scroll","preview",function(t,e){for(var n=e,r=null;n;){
var o=n.firstElementChild;
if(!o)
break;
r=n,n=hf(o,t,ff(n,e));
}var i=n||r;return i===e?null:i;}(t.target.scrollTop,e.previewContent));}),this.eventEmitter.listen("changePreviewTabPreview",function(){return e.toggleActive(!0);}),this.eventEmitter.listen("changePreviewTabWrite",function(){return e.toggleActive(!1);}));},t.prototype.removeHighlight=function(){if(this.cursorNodeId){
var t=this.getElementByNodeId(this.cursorNodeId);
t&&It()(t,bf);
}},t.prototype.updateCursorNode=function(t,e){t&&("tableRow"===(t=Hs(t,function(t){return!function(t){switch(t.type){
case"code":
case"text":
case"emph":
case"strong":
case"strike":
case"link":
case"image":
case"htmlInline":
case"linebreak":
case"softbreak":
case"customInline":return!0;
default:return!1;
}}(t);})).type?t=function(t,e){for(var n=t.firstChild;n&&n.next&&!(As(n.next)>e+1);)
n=n.next;return n;}(t,e[1]):"tableBody"===t.type&&(t=null));var n=t?t.id:null;if(this.cursorNodeId!==n){
var r=this.getElementByNodeId(this.cursorNodeId),o=this.getElementByNodeId(n);
r&&It()(r,bf),o&&At()(o,bf),this.cursorNodeId=n;
}},t.prototype.getElementByNodeId=function(t){return t?this.previewContent.querySelector('[data-nodeid="'+t+'"]'):null;},t.prototype.update=function(t){var e=this;t.forEach(function(t){return e.replaceRangeNodes(t);}),this.eventEmitter.emit("afterPreviewRender",this);},t.prototype.replaceRangeNodes=function(t){var e=this,n=t.nodes,r=t.removedNodeRange,o=this.previewContent,i=this.eventEmitter.emitReduce("beforePreviewRender",this.sanitizer(n.map(function(t){return e.renderer.render(t);}).join("")));if(r){
var s=r.id,a=s[0],c=s[1],l=this.getElementByNodeId(a),u=this.getElementByNodeId(c);
if(l){
l.insertAdjacentHTML("beforebegin",i);
for(var p=l;p&&p!==u;){
var d=p.nextElementSibling;
ka(p),gf(p),p=d;
}
(null==p?void 0:p.parentNode)&&(ka(p),gf(p));
}
}else

o.insertAdjacentHTML("afterbegin",i);},t.prototype.getRenderer=function(){return this.renderer;},t.prototype.destroy=function(){Rl()(this.el,"scroll"),this.el=null;},t.prototype.getElement=function(){return this.el;},t.prototype.getHTML=function(){return this.previewContent.innerHTML;},t.prototype.setHTML=function(t){this.previewContent.innerHTML=t;},t.prototype.setHeight=function(t){Ot()(this.el,{height:t+"px"});},t.prototype.setMinHeight=function(t){Ot()(this.el,{minHeight:t+"px"});},t;}(),kf=wf;
function xf(t,e){for(var n=t.depth;n;){
var r=t.node(n);
if(e(r,n))
return{node:r,depth:n,offset:n>0?t.before(n):0};
n-=1;
}return null;}
function Cf(t){return!!xf(t,function(t){var e=t.type;return"listItem"===e.name||"bulletList"===e.name||"orderedList"===e.name;});}
function Tf(t){return!!xf(t,function(t){var e=t.type;return"tableHeadCell"===e.name||"tableBodyCell"===e.name;});}
function Mf(t){return xf(t,function(t){return"listItem"===t.type.name;});}
function Sf(t){return{tag:t,getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({},e&&{rawHTML:e});}};}
function Ef(t){return Object.keys(t).reduce(function(e,n){return"rawHTML"!==n&&t[n]&&(e[n="className"===n?"class":n]=t[n]),e;},{});}
function Nf(t){return{tag:t,getAttrs:function(t){return["rawHTML","colspan","rowspan","extended"].reduce(function(e,n){var r="rawHTML"===n?"data-raw-html":n,o=t.getAttribute(r);return o&&(e[n]=te(["rawHTML","extended"],n)?o:Number(o)),e;},{});}};}
function Of(t){var e=t.htmlAttrs,n=t.classNames;return o(o({},e),{class:n?n.join(" "):null});}
function Df(t,e,n,r){var o=e.$from,i=e.$to,s=e.depth,a=e,c=!1;if(s>=2&&o.node(s-1).type.compatibleContent(n)&&0===e.startIndex&&o.index(s-1)){
var l=t.doc.resolve(e.start-2);
a=new B(l,l,s),e.endIndex<e.parent.childCount&&(e=new B(o,t.doc.resolve(i.end(s)),s)),c=!0;
}var u=function(t,e,n,r){var o=function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.contentMatchAt(r).findWrapping(e);if(i){
var s=i.length?i[0]:e;
return n.canReplaceWith(r,o,s)?i:null;
}return null;}(t,n),i=function(t,e){var n=t.parent,r=t.startIndex,o=t.endIndex,i=n.child(r),s=e.contentMatch.findWrapping(i.type);if(s){
for(var a=(s.length?s[s.length-1]:e).contentMatch,c=r;a&&c<o;c+=1)
a=a.matchType(n.child(c).type);
if(a&&a.validEnd)
return s;
}return null;}(e,n);if(o&&i){
var s=o.map(function(t){return{type:t};}),a=i.map(function(t){return{type:t,attrs:r};});
return s.concat({type:n}).concat(a);
}return null;}(a,e,n,r);return u?function(t,e,n,r,o){for(var i=e.start,s=e.end,a=e.startIndex,c=e.endIndex,l=e.parent,u=p.empty,d=n.length-1;d>=0;d-=1)
u=p.from(n[d].type.create(n[d].attrs,u));t.step(new Ae(i-(r?2:0),s,i,s,new y(u,0,0),n.length,!0));var f=0;for(d=0;d<n.length;d+=1)
if(n[d].type===o){
f=d+1;
break;
}for(var h=n.length-f,m=i+n.length-(r?2:0),v=(d=a,c);d<v;d+=1)
!(d===a)&&Be(t.doc,m,h)&&(t.split(m,h),m+=2*h),m+=l.child(d).nodeSize;return t;}(t,e,u,c,n):t;}
function Af(t,e){for(var n=t.resolve(e);"paragraph"!==n.node().type.name;)
e-=2,n=t.resolve(e);return Mf(n);}
function Lf(t){return function(e,n){var r=e.selection,o=e.tr,i=r.$from,s=r.$to,a=i.blockRange(s);if(a){
var c=Cf(i)?function(t,e,n){var r=e.$from,o=e.$to,i=Mf(r),s=Mf(o);if(i&&s)
for(;s;){
var a=s.offset,c=s.node,l=s.depth;
c.attrs.task&&t.setNodeMarkup(a,null,{task:!1,checked:!1});
var u=t.doc.resolve(a);
if(u.parent.type!==n){
var p=u.before(l-1);
t.setNodeMarkup(p,n);
}
if(a===i.offset)
break;
s=Af(t.doc,a);
}return t;}(o,a,t):Df(o,a,t);
return n(c),!0;
}return!1;};}
function If(){return function(t,e){var n=t.selection,r=t.tr,o=t.schema,i=n.$from,s=n.$to,a=i.blockRange(s);if(a){
var c=Cf(i)?function(t,e){var n=e.$from,r=e.$to,o=Mf(n),i=Mf(r);if(o&&i)
for(;i;){
var s=i.offset,a={task:!i.node.attrs.task,checked:!1};
if(t.setNodeMarkup(s,null,a),s===o.offset)
break;
i=Af(t.doc,s);
}return t;}(r,a):Df(r,a,o.nodes.bulletList,{task:!0});
return e(c),!0;
}return!1;};}
function Rf(t){return function(e,n){var r=e.tr,o=e.selection,i=o.$from,s=o.$to,a=i.blockRange(s,function(e){var n=e.childCount,r=e.firstChild;return!!n&&r.type===t;});if(a){
var c=i.node(a.depth-1).type===t?function(t,e,n){var r=e.$from,o=e.$to,i=e.end,s=e.depth,a=e.parent,c=o.end(s);return i<c&&(t.step(new Ae(i-1,c,i,c,new y(p.from(n.create(null,a.copy())),1,0),1,!0)),e=new B(t.doc.resolve(r.pos),t.doc.resolve(c),s)),t.lift(e,Re(e)),t;}(r,a,t):function(t,e){for(var n=e.parent,r=e.end,o=e.endIndex-1,i=e.startIndex;o>i;o-=1)
r-=n.child(o).nodeSize,t.delete(r-1,r+1);var s=t.doc.resolve(e.start),a=s.nodeAfter,c=0===e.startIndex,l=e.endIndex===n.childCount,u=s.node(-1),d=s.index(-1),f=u.canReplace(d+(c?0:1),d+1,null==a?void 0:a.content.append(l?p.empty:p.from(n)));if(a&&f){
var h=s.pos,m=h+a.nodeSize;
t.step(new Ae(h-(c?1:0),m+(l?1:0),h+1,m-1,new y((c?p.empty:p.from(n.copy(p.empty))).append(l?p.empty:p.from(n.copy(p.empty))),c?0:1,l?0:1),c?0:1));
}return t;}(r,a);
return n(c),!0;
}return!1;};}
function Pf(){return function(){return function(t,e){var n=t.selection,r=t.schema,o=n.$from,i=n.$to;return!(!o.blockRange(i)||!Cf(o))&&function(t){return function(e,n){var r=e.tr,o=e.selection,i=o.$from,s=o.$to,a=i.blockRange(s,function(e){var n=e.childCount,r=e.firstChild;return!!n&&r.type===t;});if(a&&a.startIndex>0){
var c=a.parent,l=c.child(a.startIndex-1);
if(l.type!==t)
return!1;
var u=l.lastChild&&l.lastChild.type===c.type,d=u?p.from(t.create()):null,f=new y(p.from(t.create(null,p.from(c.type.create(null,d)))),u?3:1,0),h=a.start,m=a.end;
return r.step(new Ae(h-(u?3:1),m,h,m,f,1,!0)),n(r),!0;
}return!1;};}(r.nodes.listItem)(t,e);};};}
function Bf(){return{indent:Pf(),outdent:function(){return function(t,e){var n=t.selection,r=t.schema,o=n.$from,i=n.$to;return!(!o.blockRange(i)||!Cf(o))&&Rf(r.nodes.listItem)(t,e);};}};}
var Ff=new Map(),Hf=function(){function t(t,e,n,r){this.table=t,this.tableRows=e,this.tableStartPos=n,this.rowInfo=r;}return t.create=function(e){var n=xf(e,function(t){return"table"===t.type.name;});if(n){
var r=n.node,o=n.depth,i=n.offset,s=Ff.get(r);
if((null==s?void 0:s.tableStartPos)===i+1)
return s;
var a=[],c=e.start(o),l=r.child(0),u=r.child(1),p=zf(l,c),d=zf(u,c+l.nodeSize);
l.forEach(function(t){return a.push(t);}),u.forEach(function(t){return a.push(t);});
var f=new t(r,a,c,p.concat(d));
return Ff.set(r,f),f;
}return null;},Object.defineProperty(t.prototype,"totalRowCount",{get:function(){return this.rowInfo.length;},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"totalColumnCount",{get:function(){return this.rowInfo[0].length;},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tableStartOffset",{get:function(){return this.tableStartPos;},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tableEndOffset",{get:function(){return this.tableStartPos+this.table.nodeSize-1;},enumerable:!1,configurable:!0}),t.prototype.getCellInfo=function(t,e){return this.rowInfo[t][e];},t.prototype.posAt=function(t,e){for(var n=0,r=this.tableStartPos;;n+=1){
var o=r+this.tableRows[n].nodeSize;
if(n===t){
for(var i=e;i<this.totalColumnCount&&this.rowInfo[n][i].offset<r;)
i+=1;
return i===this.totalColumnCount?o:this.rowInfo[n][i].offset;
}
r=o;
}},t.prototype.getNodeAndPos=function(t,e){var n=this.rowInfo[t][e];return{node:this.table.nodeAt(n.offset-this.tableStartOffset),pos:n.offset};},t.prototype.extendedRowspan=function(t,e){return!1;},t.prototype.extendedColspan=function(t,e){return!1;},t.prototype.getRowspanCount=function(t,e){return 0;},t.prototype.getColspanCount=function(t,e){return 0;},t.prototype.decreaseColspanCount=function(t,e){return 0;},t.prototype.decreaseRowspanCount=function(t,e){return 0;},t.prototype.getColspanStartInfo=function(t,e){return null;},t.prototype.getRowspanStartInfo=function(t,e){return null;},t.prototype.getCellStartOffset=function(t,e){var n=this.rowInfo[t][e].offset;return this.extendedRowspan(t,e)?this.posAt(t,e):n;},t.prototype.getCellEndOffset=function(t,e){var n=this.rowInfo[t][e],r=n.offset,o=n.nodeSize;return this.extendedRowspan(t,e)?this.posAt(t,e):r+o;},t.prototype.getCellIndex=function(t){for(var e=0;e<this.totalRowCount;e+=1)
for(var n=this.rowInfo[e],r=0;r<this.totalColumnCount;r+=1)
if(n[r].offset+1>t.pos)
return[e,r];return[0,0];},t.prototype.getRectOffsets=function(t,e){var n,r,o;void 0===e&&(e=t),t.pos>e.pos&&(t=(n=[e,t])[0],e=n[1]);var i=this.getCellIndex(t),s=i[0],a=i[1],c=this.getCellIndex(e),l=c[0],u=c[1];return s=(r=ve(s,l))[0],l=r[1],a=(o=ve(a,u))[0],u=o[1],this.getSpannedOffsets({startRowIdx:s,startColIdx:a,endRowIdx:l,endColIdx:u});},t.prototype.getSpannedOffsets=function(t){return t;},t;}(),zf=function(t,e){var n=[];return t.forEach(function(t,r){var o={rowspanMap:{},colspanMap:{},length:0};t.forEach(function(t,n){for(var i=t.nodeSize,s=0;o[s];)
s+=1;o[s]={offset:e+r+n+2,nodeSize:i},o.length+=1;}),n.push(o);}),n;};
function jf(t,e){return me(Hf.prototype,t),zf=e,Hf;}
var _f=function(t){function n(e,n){void 0===n&&(n=e);var r=this,o=e.node(0),i=Hf.create(e),s=i.getRectOffsets(e,n),a=function(t,e,n){for(var r=n.startRowIdx,o=n.startColIdx,i=n.endRowIdx,s=n.endColIdx,a=[],c=r;c<=i;c+=1)
for(var l=o;l<=s;l+=1){
var u=e.getCellInfo(c,l),p=u.offset,d=u.nodeSize;
a.push(new en(t.resolve(p+1),t.resolve(p+d-1)));
}return a;}(o,i,s);return(r=t.call(this,a[0].$from,a[0].$to,a)||this).startCell=e,r.endCell=n,r.offsetMap=i,r.isCellSelection=!0,r.visible=!1,r;}return e(n,t),n.prototype.map=function(t,e){var r=this.startCell.pos,o=this.endCell.pos,i=t.resolve(e.map(r)),s=t.resolve(e.map(o)),a=Hf.create(i);if(this.offsetMap.totalColumnCount>a.totalColumnCount||this.offsetMap.totalRowCount>a.totalRowCount){
var c={tableBody:1,tableRow:2,tableCell:3,paragraph:4}[s.parent.type.name],l=s.end(s.depth-c),u=Math.min(l-4,s.pos);
return nn.create(t,u);
}return new n(i,s);},n.prototype.eq=function(t){return t instanceof n&&t.startCell.pos===this.startCell.pos&&t.endCell.pos===this.endCell.pos;},n.prototype.content=function(){for(var t=this.startCell.node(-2),e=this.startCell.start(-2),n=t.child(1).firstChild,r=t.child(0).type.create(),o=t.child(1).type.create(),i=Hf.create(this.startCell),s=i.getRectOffsets(this.startCell,this.endCell),a=s.startRowIdx,c=s.startColIdx,l=s.endRowIdx,u=s.endColIdx,d=!1,f=a;f<=l;f+=1){
for(var h=[],m=c;m<=u;m+=1){
var v=i.getCellInfo(f,m).offset,g=t.nodeAt(v-e);
g&&(d="tableHeadCell"===g.type.name,i.extendedRowspan(f,m)||i.extendedColspan(f,m)?h.push(g.type.create({extended:!0})):h.push(g.copy(g.content)));
}
var b=n.copy(p.from(h)),w=d?r:o;
w.content=w.content.append(p.from(b));
}return new y(function(t,e){var n=[];return t.childCount&&n.push(t),e.childCount&&n.push(e),p.from(n);}(r,o),1,1);},n;}(Ye),qf=_f;
function Vf(t,e,n,r){for(var o=n.nodes,i=o.tableRow,s=o.tableBodyCell,a=o.paragraph,c=[],l=0;l<t;l+=1){
for(var u=[],p=0;p<e;p+=1){
var d=r&&r[l*e+p],f=a.create(null,d?n.text(d):[]);
u.push(s.create(null,f));
}
c.push(i.create(null,u));
}return c;}
function $f(t,e,n,r){void 0===r&&(r=null);for(var o=n.nodes,i=o.tableHeadCell,s=o.tableBodyCell,a=o.paragraph,c=0===e?i:s,l=[],u=0;u<t;u+=1)
l.push(c.create(r,a.create()));return l;}
function Uf(t,e){for(;t&&t!==e;){
if("TD"===t.nodeName||"TH"===t.nodeName)
return t;
t=t.parentNode;
}return null;}
function Wf(t){return xf(t,function(t){var e=t.type;return"tableHeadCell"===e.name||"tableBodyCell"===e.name;});}
function Jf(t){if(t instanceof nn){
var e=t.$anchor,n=Wf(e);
if(n){
var r=e.node(0).resolve(e.before(n.depth));
return{anchor:r,head:r};
}
}var o=t;return{anchor:o.startCell,head:o.endCell};}
function Gf(t){var e;if(t.size){
var n=t.content,r=t.openStart,o=t.openEnd;
if(1!==n.childCount)
return null;
for(;1===n.childCount&&(r>0&&o>0||"table"===(null===(e=n.firstChild)||void 0===e?void 0:e.type.name));)
r-=1,o-=1,n=n.firstChild.content;
if("tableHead"===n.firstChild.type.name||"tableBody"===n.firstChild.type.name)
return n;
}return null;}
function Kf(t){var e=t.startRowIdx,n=t.startColIdx;return{rowCount:t.endRowIdx-e+1,columnCount:t.endColIdx-n+1};}
function Zf(t,e){return o(o({},t.attrs),e);}
var Xf=new Cn("cellSelection"),Qf=function(){function t(t){this.view=t,this.handlers={mousedown:this.handleMousedown.bind(this),mousemove:this.handleMousemove.bind(this),mouseup:this.handleMouseup.bind(this)},this.startCellPos=null,this.init();}return t.prototype.init=function(){this.view.dom.addEventListener("mousedown",this.handlers.mousedown);},t.prototype.handleMousedown=function(t){var e=Uf(t.target,this.view.dom);if(2!==t.button){
if(e){
var n=this.getCellPos(t);
n&&(this.startCellPos=n),this.bindEvent();
}
}else

t.preventDefault();},t.prototype.handleMousemove=function(t){var e,n=Xf.getState(this.view.state),r=this.getCellPos(t),o=this.startCellPos;n?e=this.view.state.doc.resolve(n):o!==r&&(e=o),e&&o&&r&&this.setCellSelection(o,r);},t.prototype.handleMouseup=function(){this.startCellPos=null,this.unbindEvent(),null!==Xf.getState(this.view.state)&&this.view.dispatch(this.view.state.tr.setMeta(Xf,-1));},t.prototype.bindEvent=function(){var t=this.view.dom;t.addEventListener("mousemove",this.handlers.mousemove),t.addEventListener("mouseup",this.handlers.mouseup);},t.prototype.unbindEvent=function(){var t=this.view.dom;t.removeEventListener("mousemove",this.handlers.mousemove),t.removeEventListener("mouseup",this.handlers.mouseup);},t.prototype.getCellPos=function(t){var e=t.clientX,n=t.clientY,r=this.view.posAtCoords({left:e,top:n});if(r){
var o=this.view.state.doc,i=o.resolve(r.pos),s=Wf(i);
if(s){
var a=i.before(s.depth);
return o.resolve(a);
}
}return null;},t.prototype.setCellSelection=function(t,e){var n=this.view.state,r=n.selection,o=n.tr,i=null===Xf.getState(this.view.state),s=new qf(t,e);if(i||!r.eq(s)){
var a=o.setSelection(s);
i&&a.setMeta(Xf,e.pos),this.view.dispatch(a);
}},t.prototype.destroy=function(){this.view.dom.removeEventListener("mousedown",this.handlers.mousedown);},t;}(),Yf=Qf,th=ya("cell-selected");
function eh(t){var e=t.selection,n=t.doc;if(e instanceof qf){
var r=[];
return e.ranges.forEach(function(t){var e=t.$from,n=t.$to;r.push(Ko.node(e.pos-1,n.pos+1,{class:th}));}),Yo.create(n,r);
}return null;}
var nh=n(928),rh=n.n(nh),oh=function(){function t(){this.keys=[],this.values=[];}return t.prototype.getKeyIndex=function(t){return rh()(t,this.keys);},t.prototype.get=function(t){return this.values[this.getKeyIndex(t)];},t.prototype.set=function(t,e){var n=this.getKeyIndex(t);return n>-1?this.values[n]=e:(this.keys.push(t),this.values.push(e)),this;},t.prototype.has=function(t){return this.getKeyIndex(t)>-1;},t.prototype.delete=function(t){var e=this.getKeyIndex(t);return e>-1&&(this.keys.splice(e,1),this.values.splice(e,1),!0);},t.prototype.forEach=function(t,e){var n=this;void 0===e&&(e=this),this.values.forEach(function(r,o){r&&n.keys[o]&&t.call(e,r,n.keys[o],n);});},t.prototype.clear=function(){this.keys=[],this.values=[];},t;}(),ih=oh,sh="en-US",ah=function(){function t(){this.code=sh,this.langs=new ih();}return t.prototype.setCode=function(t){this.code=t||sh;},t.prototype.setLanguage=function(t,e){var n=this;(t=[].concat(t)).forEach(function(t){if(n.langs.has(t)){
var r=n.langs.get(t);
n.langs.set(t,Et()(r,e));
}else

n.langs.set(t,e);});},t.prototype.get=function(t,e){e||(e=this.code);var n=this.langs.get(e);n||(n=this.langs.get(sh));var r=n[t];if(!r)
throw new Error('There is no text key "'+t+'" in '+e);return r;},t;}(),ch=new ah(),lh=[[{action:"Add row to up",command:"addRowToUp",disableInThead:!0,className:"add-row-up"},{action:"Add row to down",command:"addRowToDown",disableInThead:!0,className:"add-row-down"},{action:"Remove row",command:"removeRow",disableInThead:!0,className:"remove-row"}],[{action:"Add column to left",command:"addColumnToLeft",className:"add-column-left"},{action:"Add column to right",command:"addColumnToRight",className:"add-column-right"},{action:"Remove column",command:"removeColumn",className:"remove-column"}],[{action:"Align column to left",command:"alignColumn",payload:{align:"left"},className:"align-column-left"},{action:"Align column to center",command:"alignColumn",payload:{align:"center"},className:"align-column-center"},{action:"Align column to right",command:"alignColumn",payload:{align:"right"},className:"align-column-right"}],[{action:"Remove table",command:"removeTable",className:"remove-table"}]];
function uh(t,e){return lh.map(function(n){return n.map(function(n){var r=n.action,o=n.command,i=n.payload,s=n.disableInThead,a=n.className;return{label:ch.get(r),onClick:function(){t.emit("command",o,i);},disabled:e&&!!s,className:a};});}).concat();}
function ph(t){return new wn({props:{handleDOMEvents:{contextmenu:function(e,n){var r=Uf(n.target,e.dom);if(r){
n.preventDefault();
var o=n,i=o.clientX,s=o.clientY,a=e.dom.parentNode.getBoundingClientRect(),c=a.left,l=a.top,u="TH"===r.nodeName;
return t.emit("contextmenu",{pos:{left:i-c+10+"px",top:s-l+30+"px"},menuGroups:uh(t,u),tableCell:r}),!0;
}return!1;}}}});}
var dh=["image","link","customBlock","frontMatter"],fh=["strong","strike","emph","code"],hh=["bulletList","orderedList","taskList"];
function mh(t,e,n){var r=t.$from,o=t.$to,i=t.from,s=t.to,a={indent:{active:!1,disabled:!0},outdent:{active:!1,disabled:!0}};return e.nodesBetween(i,s,function(t,e,i){var s=function(t,e){var n=t.type.name;return"listItem"===n?t.attrs.task?"taskList":e.type.name:-1!==n.indexOf("table")?"table":n;}(t,i);te(dh,s)||(te(hh,s)?(!function(t,e){e[t]={active:!0},hh.filter(function(e){return e!==t;}).forEach(function(t){e[t]&&delete e[t];});}(s,a),a.indent.disabled=!1,a.outdent.disabled=!1):"paragraph"===s||"text"===s?function(t,e,n,r){fh.forEach(function(o){var i=n.marks[o],s=t.marksAcross(e)||[];i.isInSet(s)&&(r[o]={active:!0});});}(r,o,n,a):a[s]={active:!0});}),a;}
function vh(t){return new wn({view:function(){return{update:function(e){var n=e.state,r=n.selection,o=n.doc,i=n.schema;t.emit("changeToolbarState",{toolbarState:mh(r,o,i)});}};}});}
var gh=function(){function t(t,e,n,r){var o=this;this.openEditor=function(){if(o.innerEditorView)
throw new Error("The editor is already opened.");o.dom.draggable=!1,o.wrapper.style.display="none",o.innerViewContainer.style.display="block",o.innerEditorView=new ui(o.innerViewContainer,{state:vn.create({doc:o.node,plugins:[Ai({"Mod-z":function(){return ks(o.innerEditorView.state,o.innerEditorView.dispatch);},"Shift-Mod-z":function(){return xs(o.innerEditorView.state,o.innerEditorView.dispatch);},Tab:function(t,e){return e(t.tr.insertText("\t")),!0;},Enter:Hi,Escape:function(){return o.cancelEditing(),!0;},"Ctrl-Enter":function(){return o.saveAndFinishEditing(),!0;}}),ws()]}),dispatchTransaction:function(t){return o.dispatchInner(t);},handleDOMEvents:{mousedown:function(){return o.editorView.hasFocus()&&o.innerEditorView.focus(),!0;},blur:function(){return o.saveAndFinishEditing(),!0;}}}),o.innerEditorView.focus();},this.node=t,this.editorView=e,this.getPos=n,this.toDOMAdaptor=r,this.innerEditorView=null,this.canceled=!1,this.dom=document.createElement("div"),this.dom.className=ya("custom-block"),this.wrapper=document.createElement("div"),this.wrapper.className=ya("custom-block-view"),this.createInnerViewContainer(),this.renderCustomBlock(),this.dom.appendChild(this.innerViewContainer),this.dom.appendChild(this.wrapper);}return t.prototype.renderToolArea=function(){var t=this,e=document.createElement("div"),n=document.createElement("span"),r=document.createElement("button");e.className="tool",n.textContent=this.node.attrs.info,n.className="info",r.type="button",r.addEventListener("click",function(){return t.openEditor();}),e.appendChild(n),e.appendChild(r),this.wrapper.appendChild(e);},t.prototype.renderCustomBlock=function(){var t=this.toDOMAdaptor.getToDOMNode(this.node.attrs.info);if(t){
for(var e=t(this.node);this.wrapper.hasChildNodes();)
this.wrapper.removeChild(this.wrapper.lastChild);
e&&this.wrapper.appendChild(e),this.renderToolArea();
}},t.prototype.createInnerViewContainer=function(){this.innerViewContainer=document.createElement("div"),this.innerViewContainer.className=ya("custom-block-editor"),this.innerViewContainer.style.display="none";},t.prototype.closeEditor=function(){this.innerEditorView&&(this.innerEditorView.destroy(),this.innerEditorView=null,this.innerViewContainer.style.display="none"),this.wrapper.style.display="block";},t.prototype.saveAndFinishEditing=function(){var t=this.editorView.state.selection.to,e=this.editorView.state;this.editorView.dispatch(e.tr.setSelection(Ms(e.tr,t))),this.editorView.focus(),this.renderCustomBlock(),this.closeEditor();},t.prototype.cancelEditing=function(){var t,e,n=(t=this.innerEditorView.state,(e=ys.getState(t))?e.done.eventCount:0);for(this.canceled=!0;n--;)
ks(this.innerEditorView.state,this.innerEditorView.dispatch),ks(this.editorView.state,this.editorView.dispatch);this.canceled=!1;var r=this.editorView.state.selection.to,o=this.editorView.state;this.editorView.dispatch(o.tr.setSelection(nn.create(o.doc,r))),this.editorView.focus(),this.closeEditor();},t.prototype.dispatchInner=function(t){var e=this.innerEditorView.state.applyTransaction(t),n=e.state,r=e.transactions;if(this.innerEditorView.updateState(n),!this.canceled&&Va()(this.getPos)){
for(var o=this.editorView.state.tr,i=ke.offset(this.getPos()+1),s=0;s<r.length;s+=1)
for(var a=r[s].steps,c=0;c<a.length;c+=1)
o.step(a[c].map(i));
o.docChanged&&this.editorView.dispatch(o);
}},t.prototype.update=function(t){return!!t.sameMarkup(this.node)&&(this.node=t,this.innerEditorView||this.renderCustomBlock(),!0);},t.prototype.stopEvent=function(t){return!!this.innerEditorView&&!!t.target&&this.innerEditorView.dom.contains(t.target);},t.prototype.ignoreMutation=function(){return!0;},t.prototype.destroy=function(){this.dom.removeEventListener("dblclick",this.openEditor),this.closeEditor();},t;}(),yh="image-link",bh=function(){function t(t,e,n,r){var o,i=this;this.handleMousedown=function(t){t.preventDefault();var e=t.target,n=t.offsetX,r=t.offsetY;if(i.imageLink&&Va()(i.getPos)&&ia()(e,yh)){
var o=getComputedStyle(e,":before");
if(t.stopPropagation(),va(o,n,r)){
var s=i.view.state.tr,a=i.getPos();
s.setSelection(Ms(s,a,a+1)),i.view.dispatch(s),i.eventEmitter.emit("openPopup","link",i.imageLink.attrs);
}
}},this.node=t,this.view=e,this.getPos=n,this.eventEmitter=r,this.imageLink=null!==(o=t.marks.filter(function(t){return"link"===t.type.name;})[0])&&void 0!==o?o:null,this.dom=this.createElement(),this.bindEvent();}return t.prototype.createElement=function(){var t=this.createImageElement(this.node);if(this.imageLink){
var e=document.createElement("span");
return e.className=yh,e.appendChild(t),e;
}return t;},t.prototype.createImageElement=function(t){var e=document.createElement("img"),n=t.attrs,r=n.imageUrl,o=n.altText,i=Of(t.attrs);return e.src=r,o&&(e.alt=o),Ea(i,e),e;},t.prototype.bindEvent=function(){this.imageLink&&this.dom.addEventListener("mousedown",this.handleMousedown);},t.prototype.stopEvent=function(){return!0;},t.prototype.destroy=function(){this.imageLink&&this.dom.removeEventListener("mousedown",this.handleMousedown);},t;}(),wh=function(){function t(t,e,n,r){var o=this;this.dom=null,this.contentDOM=null,this.input=null,this.timer=null,this.handleMousedown=function(t){var e=t.target;if("none"!==getComputedStyle(e,":after").backgroundImage&&Va()(o.getPos)){
var n=o.view.coordsAtPos(o.getPos()),r=n.top,i=n.right;
o.createLanguageEditor({top:r,right:i});
}},this.handleKeydown=function(t){"Enter"===t.key&&o.input&&(t.preventDefault(),o.changeLanguage());},this.node=t,this.view=e,this.getPos=n,this.eventEmitter=r,this.createElement(),this.bindDOMEvent(),this.bindEvent();}return t.prototype.createElement=function(){var t=this.node.attrs.language,e=document.createElement("div");e.setAttribute("data-language",t||"text"),e.className="toastui-editor-ww-code-block";var n=this.createCodeBlockElement(),r=n.firstChild;e.appendChild(n),this.dom=e,this.contentDOM=r;},t.prototype.createCodeBlockElement=function(){var t=document.createElement("pre"),e=document.createElement("code"),n=this.node.attrs.language,r=Of(this.node.attrs);return n&&e.setAttribute("data-language",n),Ea(r,t),t.appendChild(e),t;},t.prototype.createLanguageEditor=function(t){var e=this,n=t.top,r=t.right,o=document.createElement("span");o.className="toastui-editor-ww-code-block-language";var i=document.createElement("input");i.type="text",i.value=this.node.attrs.language,o.appendChild(i),this.view.dom.parentElement.appendChild(o);var s=o.clientWidth;Ot()(o,{top:n+10+"px",left:r-s-10+"px",width:s+"px"}),this.input=i,this.input.addEventListener("blur",function(){return e.changeLanguage();}),this.input.addEventListener("keydown",this.handleKeydown),this.clearTimer(),this.timer=setTimeout(function(){e.input.focus();});},t.prototype.bindDOMEvent=function(){this.dom&&this.dom.addEventListener("click",this.handleMousedown);},t.prototype.bindEvent=function(){var t=this;this.eventEmitter.listen("scroll",function(){t.input&&t.reset();});},t.prototype.changeLanguage=function(){if(this.input&&Va()(this.getPos)){
var t=this.input.value;
this.reset();
var e=this.getPos(),n=this.view.state.tr;
n.setNodeMarkup(e,null,{language:t}),this.view.dispatch(n);
}},t.prototype.reset=function(){var t;if(null===(t=this.input)||void 0===t?void 0:t.parentElement){
var e=this.input.parentElement;
this.input=null,ka(e);
}},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null);},t.prototype.stopEvent=function(){return!0;},t.prototype.update=function(t){return!!t.sameMarkup(this.node)&&(this.node=t,!0);},t.prototype.destroy=function(){this.reset(),this.clearTimer(),this.dom&&this.dom.removeEventListener("click",this.handleMousedown);},t;}(),kh=/MsoListParagraph/,xh=/style=(.|\n)*mso-/,Ch=/mso-list:(.*)/,Th=/O:P/,Mh=/^(n|u|l)/;
function Sh(t){for(var e=[],n=document.createTreeWalker(t,1,null,!1);n.nextNode();){
var r=n.currentNode;
if(wa(r)){
var o=r,i=o.outerHTML,s=o.textContent,a=xh.test(i),c=Ch.test(i);
a&&!c&&s?e.push([r,!0]):(Th.test(r.nodeName)||a&&!s||c)&&e.push([r,!1]);
}
}return e.forEach(function(t){var e=t[0];t[1]?function(t){for(var e=[];t.firstChild;)
e.push(t.firstChild),t.parentNode&&t.parentNode.insertBefore(t.firstChild,t);ka(t);}(e):ka(e);}),t.innerHTML.trim();}
function Eh(t){var e=[];return t.forEach(function(t,n){var r=e[n-1],o=function(t,e){var n=t.getAttribute("style");if(n){
var r=n.match(Ch)[1].trim().split(" ")[1];
return{id:e,level:parseInt(r.replace("level",""),10),prev:null,parent:null,children:[],unordered:Mh.test(t.textContent||""),contents:Sh(t)};
}return null;}(t,n);o&&(r&&function(t,e){if(e.level<t.level)
e.children.push(t),t.parent=e;else
{
for(;e&&e.level!==t.level;)
e=e.parent;
e&&(t.prev=e,t.parent=e.parent,t.parent&&t.parent.children.push(t));
}}(o,r),e.push(o));}),e;}
function Nh(t){var e=t[0].unordered?"ul":"ol",n=document.createElement(e);return t.forEach(function(t){var e=t.children,r=t.contents,o=document.createElement("li");o.innerHTML=r,n.appendChild(o),e.length&&n.appendChild(Nh(e));}),n;}
function Oh(t){return Nh(Eh(t).filter(function(t){return!t.parent;}));}
function Dh(t){var e=document.createElement("div");e.innerHTML=t;var n,r,o,i=[],s=(n=e,r="p.MsoListParagraph",(o=gi()(n.querySelectorAll(r))).length?o:[]);return s.forEach(function(t){var n=function(t){for(;t&&!wa(t);)
t=t.nextSibling;return!t||!kh.test(t.className);}(t.nextSibling);if(i.push(t),n){
var r=Oh(i),o=t.nextSibling;
o?function(t,e){e.parentNode&&e.parentNode.insertBefore(t,e);}(r,o):function(t,e){(e=ra()(e)?gi()(e):[e]).forEach(function(e){t.appendChild(e);});}(e,r),i=[];
}ka(t);}),""+(s.length?"<p></p>":"")+e.innerHTML;}
var Ah="\x3c!--StartFragment--\x3e";
function Lh(t){return function(t){return xh.test(t);}(t=function(t){return /<\/td>((?!<\/tr>)[\s\S])*$/i.test(t)&&(t="<tr>"+t+"</tr>"),/<\/tr>((?!<\/table>)[\s\S])*$/i.test(t)&&(t="<table>"+t+"</table>"),t;}(t=function(t){var e=t.indexOf(Ah),n=t.lastIndexOf("\x3c!--EndFragment--\x3e");return e>-1&&n>-1&&(t=t.slice(e+Ah.length,n)),t.replace(/<br[^>]*>/g,ma);}(t)))&&(t=Dh(t)),t;}
function Ih(t,e,n){for(var r=[],o=t.childCount,i=0;i<o;i+=1)
if(!t.child(i).attrs.extended){
var s=i<o?n.create(t.child(i).attrs,t.child(i).content):n.createAndFill();
r.push(s);
}return r;}
function Rh(t,e,n){var r=n.nodes,o=r.tableRow,i=Ih(t,0,r.tableHeadCell);return o.create(null,i);}
function Ph(t,e,n){var r=n.nodes,o=r.tableRow,i=Ih(t,0,r.tableBodyCell);return o.create(null,i);}
function Bh(t){var e=[],n=[];"tableHead"===t.firstChild.type.name&&t.firstChild.forEach(function(t){return e.push(t);});"tableBody"===t.lastChild.type.name&&t.lastChild.forEach(function(t){return n.push(t);});return i(i([],e),n);}
function Fh(t,e,n){var r=Rh(t,0,n);return n.nodes.tableHead.create(null,r);}
function Hh(t,e,n){var r=t.map(function(t){return Ph(t,0,n);});if(!t.length){
var o=function(t,e){for(var n=e.nodes,r=n.tableRow,o=n.tableBodyCell,i=[],s=0;s<t;s+=1){
var a=o.createAndFill();
i.push(a);
}return r.create({dummyRowForPasting:!0},i);}(e,n);
r.push(o);
}return n.nodes.tableBody.create(null,r);}
function zh(t,e,n){var r=[],o=t.content,i=t.openStart,s=t.openEnd;return o.forEach(function(t){if("table"===t.type.name){
var o=Gf(new y(p.from(t),0,0));
if(o){
var i=Bh(o),s="tableBody"===o.firstChild.type.name,a=function(t,e,n,r){var o=function(t){return t.reduce(function(t,e){return t.childCount>e.childCount?t:e;}).childCount;}(t);if(n&&r)
return e.nodes.table.create(null,[Hh(t,o,e)]);var i=t[0],s=t.slice(1),a=[Fh(i,0,e)];return s.length&&a.push(Hh(s,o,e)),e.nodes.table.create(null,a);}(i,e,s,n);
r.push(a);
}
}else

r.push(t);}),new y(p.from(r),i,s);}
function jh(t){return 4*t;}
function _h(t,e){var n=t.state,r=n.selection,o=n.schema,i=n.tr,s=Jf(r),a=s.anchor,c=s.head;if(a&&c){
var l=Gf(e);
if(!l)
return!1;
var u=Hf.create(a),p=u.getRectOffsets(a,c),d=function(t,e,n){var r=[],o=Bh(t),i=(o[0].childCount,o.length),s=0===e.startRowIdx,a=o.slice(0,i);if(s){
var c=a.shift();
if(c){
var l=Rh(c,0,n).content;
r.push(l);
}
}return a.forEach(function(t){if(!t.attrs.dummyRowForPasting){
var e=Ph(t,0,n).content;
r.push(e);
}}),r;}(l,p,o),f=function(t,e,n){for(var r=e.startRowIdx,o=e.startColIdx,i=n.length,s=0,a=function(t){var e=n[t].childCount;n[t].forEach(function(t){var n=t.attrs.colspan;n>1&&(e+=n-1);}),s=Math.max(s,e);},c=0;c<i;c+=1)
a(c);var l=r+i-1,u=o+s-1;return{startRowIdx:r,startColIdx:o,endRowIdx:l,endColIdx:u,addedRowCount:Math.max(l+1-t.totalRowCount,0),addedColumnCount:Math.max(u+1-t.totalColumnCount,0)};}(u,p,d),h=[];
return function(t,e){var n=Kf(t.getSpannedOffsets(e)),r=n.rowCount,o=n.columnCount,i=Kf(e),s=i.rowCount,a=i.columnCount;return r===s&&o===a;}(u,f)&&(function(t,e){for(var n=t.startRowIdx,r=t.startColIdx,o=t.endRowIdx,i=t.endColIdx,s=t.addedRowCount,a=t.addedColumnCount,c=n;c<=o-s;c+=1)
e.push({rowIdx:c,startColIdx:r,endColIdx:i-a});}(f,h),f.addedColumnCount&&function(t,e,n,r,o){for(var i=r.startRowIdx,s=r.startColIdx,a=r.endRowIdx,c=r.endColIdx,l=r.addedRowCount,u=r.addedColumnCount,p=n.totalRowCount,d=0,f=0;f<p;f+=1){
var h=n.getCellInfo(f,c-u),m=h.offset,v=h.nodeSize,g=t.mapping.map(m+v),y=$f(u,f,e);
if(t.insert(g,y),f>=i&&f<=a-l){
var b=n.getCellInfo(f,c-u),w=t.mapping.map(b.offset),k=g+jh(u);
o[d]={rowIdx:f,startColIdx:s,endColIdx:c,dummyOffsets:[w,k]},d+=1;
}
}}(i,o,u,f,h),f.addedRowCount&&function(t,e,n,r,o){var i=r.addedRowCount,s=r.addedColumnCount,a=r.startColIdx,c=r.endColIdx,l=t.mapping.maps.length,u=n.tableEndOffset-2,p=Vf(i,n.totalColumnCount+s,e),d=u;t.insert(t.mapping.slice(l).map(d),p);for(var f=0;f<i;f+=1){
var h=d+jh(a)+1,m=d+jh(c+1)+1,v=d+jh(n.totalColumnCount+s)+2;
o.push({rowIdx:f+n.totalRowCount,startColIdx:a,endColIdx:c,dummyOffsets:[h,m]}),d=v;
}}(i,o,u,f,h),function(t,e,n,r){var o=t.mapping.maps.length;n.forEach(function(n,i){var s=n.rowIdx,a=n.startColIdx,c=n.endColIdx,l=n.dummyOffsets,u=t.mapping.slice(o),p=new y(e[i],0,0),d=l?l[0]:r.getCellStartOffset(s,a),f=l?l[1]:r.getCellEndOffset(s,c);t.replace(u.map(d),u.map(f),p);});}(i,d,h,u),t.dispatch(i),function(t,e,n){var r=t.state,o=r.tr,i=r.doc,s=Hf.create(i.resolve(n)),a=e[0],c=a.rowIdx,l=a.startColIdx,u=ue(e),p=u.rowIdx,d=u.endColIdx,f=s.getCellInfo(c,l).offset,h=s.getCellInfo(p,d).offset;t.dispatch(o.setSelection(new qf(i.resolve(f),i.resolve(h))));}(t,h,u.getCellInfo(0,0).offset)),!0;
}return!1;}
var qh,Vh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"doc";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"block+"};},enumerable:!1,configurable:!0}),n;}(Ba),$h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"paragraph";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"inline*",group:"block",attrs:o({},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[{tag:"p"}],toDOM:function(t){return["p",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),Uh=/\s{1,4}$/,Wh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"text";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{group:"inline"};},enumerable:!1,configurable:!0}),n.prototype.addSpaces=function(){return function(t,e){var n=t.selection,r=t.tr,o=n.$from,i=n.$to;return!(!o.blockRange(i)||Cf(o)||Tf(o))&&(e(r.insertText("    ",o.pos,i.pos)),!0);};},n.prototype.removeSpaces=function(){return function(t,e){var n=t.selection,r=t.tr,o=n.$from,i=n.$to,s=n.from;if(o.blockRange(i)&&!Cf(o)&&!Tf(o)){
var a=o.nodeBefore;
if(a&&a.isText){
var c=a.text,l=c.replace(Uh,""),u=c.length-l.length;
return e(r.delete(s-u,s)),!0;
}
}return!1;};},n.prototype.keymaps=function(){return{Tab:this.addSpaces(),"Shift-Tab":this.removeSpaces()};},n;}(Ba),Jh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"heading";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"levels",{get:function(){return[1,2,3,4,5,6];},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){var t=this.levels.map(function(t){return{tag:"h"+t,getAttrs:function(e){var n=e.getAttribute("data-raw-html");return o({level:t},n&&{rawHTML:n});}};});return{attrs:o({level:{default:1},headingType:{default:"atx"},rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),content:"inline*",group:"block",defining:!0,parseDOM:t,toDOM:function(t){var e=t.attrs;return["h"+e.level,Of(e),0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(t){return function(e,n){return Ui(e.schema.nodes[t.level?"heading":"paragraph"],t)(e,n);};};},n;}(Ba),Gh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"codeBlock";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"text*",group:"block",attrs:o({language:{default:null},rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),code:!0,defining:!0,marks:"",parseDOM:[{tag:"pre",preserveWhitespace:"full",getAttrs:function(t){var e=t.getAttribute("data-raw-html"),n=t.firstElementChild;return o({language:(null==n?void 0:n.getAttribute("data-language"))||null},e&&{rawHTML:e});}}],toDOM:function(t){var e=t.attrs;return[e.rawHTML||"pre",["code",o({"data-language":e.language},Of(e)),0]];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){return Ui(t.schema.nodes.codeBlock)(t,e);};};},n.prototype.moveCursor=function(t){var e=this;return function(n,r){var o,i,s=n.tr,a=n.doc,c=n.schema,l=n.selection.$from;if(e.context.view.endOfTextblock(t)&&"codeBlock"===l.node().type.name){
var u=l.parent.textContent.split("\n"),p="up"===t?l.start():l.end(),d="up"===t?[p,u[0].length+p]:[p-ue(u).length,p],f=a.resolve("up"===t?l.before():l.after()),h="up"===t?f.nodeBefore:f.nodeAfter;
if(o=l.pos,i=d[1],o>=d[0]&&o<=i&&!h){
var m=Ss(s,f,c);
if(m)
return r(m),!0;
}
}return!1;};},n.prototype.keymaps=function(){var t=this.commands()();return{"Shift-Mod-p":t,"Shift-Mod-P":t,ArrowUp:this.moveCursor("up"),ArrowDown:this.moveCursor("down")};},n;}(Ba),Kh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"bulletList";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"listItem+",group:"block",attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[Sf("ul")],toDOM:function(t){return["ul",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n.prototype.changeList=function(){return function(t,e){return Lf(t.schema.nodes.bulletList)(t,e);};},n.prototype.commands=function(){return{bulletList:this.changeList,taskList:If};},n.prototype.keymaps=function(){var t=this.changeList(),e=Bf(),n=e.indent,r=e.outdent;return{"Mod-u":t,"Mod-U":t,Tab:n(),"Shift-Tab":r()};},n;}(Ba),Zh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"orderedList";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"listItem+",group:"block",attrs:o({order:{default:1},rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[{tag:"ol",getAttrs:function(t){var e=t.getAttribute("start"),n=t.getAttribute("data-raw-html");return o({order:t.hasAttribute("start")?Number(e):1},n&&{rawHTML:n});}}],toDOM:function(t){var e=t.attrs;return[e.rawHTML||"ol",o({start:1===e.order?null:e.order},Of(e)),0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){return Lf(t.schema.nodes.orderedList)(t,e);};};},n.prototype.keymaps=function(){var t=this.commands()(),e=Bf(),n=e.indent,r=e.outdent;return{"Mod-o":t,"Mod-O":t,Tab:n(),"Shift-Tab":r()};},n;}(Ba),Xh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"listItem";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"paragraph block*",selectable:!1,attrs:{task:{default:!1},checked:{default:!1},rawHTML:{default:null}},defining:!0,parseDOM:[{tag:"li",getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({task:t.hasAttribute("data-task"),checked:t.hasAttribute("data-task-checked")},e&&{rawHTML:e});}}],toDOM:function(t){var e=t.attrs,n=e.task,r=e.checked;if(!n)
return[e.rawHTML||"li",0];var i=["task-list-item"];return r&&i.push("checked"),[e.rawHTML||"li",o({class:i.join(" "),"data-task":n},r&&{"data-task-checked":r}),0];}};},enumerable:!1,configurable:!0}),n.prototype.liftToPrevListItem=function(){return function(t,e){var n=t.selection,r=t.tr,o=t.schema,i=n.$from,s=n.empty,a=o.nodes.listItem,c=i.parent,l=i.node(-1);if(s&&!c.childCount&&l.type===a){
if(i.index(-2)>=1)
return r.delete(i.start(-1)-1,i.end(-1)),e(r),!0;
if(i.node(-3).type===a)
return r.delete(i.start(-2)-1,i.end(-1)),e(r),!0;
}return!1;};},n.prototype.keymaps=function(){return{Backspace:this.liftToPrevListItem(),Enter:function(t,e){return function(t){return function(e,n){var r=e.tr,o=e.selection,i=o.$from,s=o.$to;if(i.depth<2||!i.sameParent(s))
return!1;var a=i.node(-1);if(a.type!==t)
return!1;if(0===i.parent.content.size&&i.node(-1).childCount===i.indexAfter(-1)){
if(2===i.depth||i.node(-3).type!==t||i.index(-2)!==i.node(-2).childCount-1)
return!1;
for(var c=i.index(-1)>0,l=p.empty,u=i.depth-(c?1:2);u>=i.depth-3;u-=1)
l=p.from(i.node(u).copy(l));
return l=l.append(p.from(t.createAndFill())),r.replace(c?i.before():i.before(-1),i.after(-3),new y(l,c?3:2,2)),r.setSelection(Ye.near(r.doc.resolve(i.pos+(c?3:2)))),n(r),!0;
}var d=s.pos===i.end()?a.contentMatchAt(0).defaultType:null,f=d&&[null,{type:d}];return r.delete(i.pos,s.pos),!!Be(r.doc,i.pos,2,f)&&(r.split(i.pos,2,f),n(r),!0);};}(t.schema.nodes.listItem)(t,e);}};},n;}(Ba),Qh=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"blockQuote";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),content:"block+",group:"block",parseDOM:[Sf("blockquote")],toDOM:function(t){return["blockquote",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){return $i(t.schema.nodes.blockQuote)(t,e);};};},n.prototype.keymaps=function(){var t=this.commands()();return{"Alt-q":t,"Alt-Q":t};},n;}(Ba),Yh={left:function(t,e){var n=t[0],r=t[1],o=e.totalColumnCount,i=0===r;if(0!==n||!i){
r-=1,i&&(n-=1,r=o-1);
var s=e.getCellInfo(n,r),a=s.offset,c=s.nodeSize;
return a+c-2;
}return null;},right:function(t,e){var n=t[0],r=t[1],o=e.totalRowCount,i=e.totalColumnCount,s=r===i-1;if(n!==o-1||!s){
var a=r+1,c=e.getColspanStartInfo(n,r);
return(null==c?void 0:c.count)>1&&(a+=c.count-1),(s||a===i)&&(n+=1,a=0),e.getCellInfo(n,a).offset+2;
}return null;},up:function(t,e){var n=t[0],r=t[1];if(n>0){
var o=e.getCellInfo(n-1,r),i=o.offset,s=o.nodeSize;
return i+s-2;
}return null;},down:function(t,e){var n=t[0],r=t[1],o=e.totalRowCount;if(n<o-1){
var i=n+1,s=e.getRowspanStartInfo(n,r);
return(null==s?void 0:s.count)>1&&(i+=s.count-1),e.getCellInfo(i,r).offset+2;
}return null;}};
function tm(t,e,n,r){var o=e[0],i=e[1],s=o+3,a=i>=s,c=a?o+1:i,l=function(t,e,n,r,o){var i=e[0],s=e[1],a=e[2];if(t===qh.LEFT||t===qh.UP){
if(o&&!function(t,e,n){var r=n[0],o=n[1],i=e.resolve(t.before(r-1));return o===r&&!i.nodeBefore;}(n,r,[i,s]))
return!1;
var c=n.before(a);
if(r.resolve(c).nodeBefore)
return!1;
}return!0;}(t,[i,s,c],n,r,a),u=function(t,e,n,r,o){if(t===qh.RIGHT||t===qh.DOWN){
if(o&&!function(t){for(var e,n,r=t.depth;r&&"tableBodyCell"!==(n=t.node(r)).type.name;){
if("listItem"===n.type.name){
var o=t.node(r-1).lastChild===n,i="paragraph"!==(null===(e=n.lastChild)||void 0===e?void 0:e.type.name);
return!!o&&!i;
}
r-=1;
}return!1;}(n))
return!1;
var i=n.after(e);
if(r.resolve(i).nodeAfter)
return!1;
}return!0;}(t,c,n,r,a);return l&&u;}
function em(t,e,n){var r=n[0],o=n[1],i=e.getRowspanStartInfo(r,o),s=t===qh.UP&&0===r,a=t===qh.DOWN&&((null==i?void 0:i.count)>1?r+i.count-1:r)===e.totalRowCount-1;return s||a;}
function nm(t,e,n,r){void 0===r&&(r=!1);var o=t.doc.resolve(e.tableEndOffset);return r||!o.nodeAfter?Ss(t,o,n):t.setSelection(Ye.near(o,1));}
function rm(t,e,n,r){var o=(0,Yh[t])(n,r);if(o){
var i=t===qh.RIGHT||t===qh.DOWN?1:-1;
return e.setSelection(Ye.near(e.doc.resolve(o),i));
}return null;}
function om(t,e,n){var r=t.getCellInfo(e,0).offset,o=t.getCellInfo(e,n-1);return{from:r,to:o.offset+o.nodeSize};}
!function(t){t.LEFT="left",t.RIGHT="right",t.UP="up",t.DOWN="down";}(qh||(qh={}));
var im=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"table";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"tableHead{1} tableBody{1}",group:"block",attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[Sf("table")],toDOM:function(t){return["table",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n.prototype.addTable=function(){return function(t){return void 0===t&&(t={rowCount:2,columnCount:1,data:[]}),function(e,n){var r=t.rowCount,o=t.columnCount,i=t.data,s=e.schema,a=e.selection,c=e.tr,l=a.from,u=a.to,p=a.$from;if(l===u&&!Tf(p)){
var d=s.nodes,f=d.tableHead,h=d.tableBody,m=null==i?void 0:i.slice(0,o),v=null==i?void 0:i.slice(o,i.length),g=function(t,e,n){for(var r=e.nodes,o=r.tableRow,i=r.tableHeadCell,s=r.paragraph,a=[],c=0;c<t;c+=1){
var l=n&&n[c],u=s.create(null,l?e.text(l):[]);
a.push(i.create(null,u));
}return[o.create(null,a)];}(o,s,m),y=Vf(r-1,o,s,v),b=s.nodes.table.create(null,[f.create(null,g),h.create(null,y)]);
return n(c.replaceSelectionWith(b)),!0;
}return!1;};};},n.prototype.removeTable=function(){return function(){return function(t,e){var n=t.selection,r=t.tr,o=Hf.create(n.$anchor);if(o){
var i=o.tableStartOffset,s=o.tableEndOffset,a=i-1,c=Ms(r.delete(a,s),a);
return e(r.setSelection(c)),!0;
}return!1;};};},n.prototype.addColumn=function(t){return function(){return function(e,n){var r=e.selection,o=e.tr,i=e.schema,s=Jf(r),a=s.anchor,c=s.head;if(a&&c){
for(var l=Hf.create(a),u=l.getRectOffsets(a,c),p=t===qh.LEFT?u.startColIdx:u.endColIdx+1,d=Kf(u).columnCount,f=l.totalRowCount,h=0;h<f;h+=1){
var m=$f(d,h,i);
o.insert(o.mapping.map(l.posAt(h,p)),m);
}
return n(o),!0;
}return!1;};};},n.prototype.removeColumn=function(){return function(){return function(t,e){var n=t.selection,r=t.tr,o=Jf(n),i=o.anchor,s=o.head;if(i&&s){
var a=Hf.create(i),c=a.getRectOffsets(i,s),l=a.totalColumnCount,u=a.totalRowCount;
if(Kf(c).columnCount===l)
return!1;
for(var p=c.startColIdx,d=c.endColIdx,f=r.mapping.maps.length,h=0;h<u;h+=1)
for(var m=d;m>=p;m-=1){
var v=a.getCellInfo(h,m),g=v.offset,y=v.nodeSize,b=r.mapping.slice(f).map(g),w=b+y;
r.delete(b,w);
}
return e(r),!0;
}return!1;};};},n.prototype.addRow=function(t){return function(){return function(e,n){var r=e.selection,o=e.schema,i=e.tr,s=Jf(r),a=s.anchor,c=s.head;if(a&&c){
var l=Hf.create(a),u=l.totalColumnCount,p=l.getRectOffsets(a,c),d=Kf(p).rowCount,f=function(t,e,n){var r,o,i;return t===qh.UP?(r=n.startRowIdx,o=0,i=-1):(r=n.endRowIdx,o=e.totalColumnCount-1,i=e.getCellInfo(r,o).nodeSize+1),{targetRowIdx:r,insertColIdx:o,nodeSize:i};}(t,l,p),h=f.targetRowIdx,m=f.insertColIdx,v=f.nodeSize;
if(!(0===h)){
for(var g=[],y=i.mapping.map(l.posAt(h,m))+v,b=[],w=0;w<u;w+=1)
b=b.concat($f(1,h,o));
for(var k=0;k<d;k+=1)
g.push(o.nodes.tableRow.create(null,b));
return n(i.insert(y,g)),!0;
}
}return!1;};};},n.prototype.removeRow=function(){return function(){return function(t,e){var n=t.selection,r=t.tr,o=Jf(n),i=o.anchor,s=o.head;if(i&&s){
var a=Hf.create(i),c=a.totalRowCount,l=a.totalColumnCount,u=a.getRectOffsets(i,s),p=Kf(u).rowCount,d=u.startRowIdx,f=u.endRowIdx;
if(p===c-1||0===d)
return!1;
for(var h=f;h>=d;h-=1){
var m=om(a,h,l),v=m.from,g=m.to;
r.delete(v-1,g+1);
}
return e(r),!0;
}return!1;};};},n.prototype.alignColumn=function(){return function(t){return void 0===t&&(t={align:"center"}),function(e,n){var r=t.align,o=e.selection,i=e.tr,s=Jf(o),a=s.anchor,c=s.head;if(a&&c){
for(var l=Hf.create(a),u=l.totalRowCount,p=l.getRectOffsets(a,c),d=p.startColIdx,f=p.endColIdx,h=0;h<u;h+=1)
for(var m=d;m<=f;m+=1)
if(!l.extendedRowspan(h,m)&&!l.extendedColspan(h,m)){
var v=l.getNodeAndPos(h,m),g=v.node,y=v.pos,b=Zf(g,{align:r});
i.setNodeMarkup(y,null,b);
}
return n(i),!0;
}return!1;};};},n.prototype.moveToCell=function(t){return function(e,n){var r=e.selection,o=e.tr,i=e.schema,s=Jf(r),a=s.anchor,c=s.head;if(a&&c){
var l=Hf.create(a),u=l.getCellIndex(a),p=void 0;
if(p=em(t,l,u)?nm(o,l,i):rm(t,o,u,l))
return n(p),!0;
}return!1;};},n.prototype.moveInCell=function(t){var e=this;return function(n,r){var o=n.selection,i=n.tr,s=n.doc,a=n.schema,c=o.$from;if(!e.context.view.endOfTextblock(t))
return!1;var l=xf(c,function(t){var e=t.type;return"tableHeadCell"===e.name||"tableBodyCell"===e.name;});if(l){
var u=xf(c,function(t){return"paragraph"===t.type.name;}),p=l.depth;
if(u&&tm(t,[p,u.depth],c,s)){
var d=Jf(o).anchor,f=Hf.create(d),h=f.getCellIndex(d),m=void 0;
if(!function(t,e,n){var r=n[0],o=n[1];if(t===qh.UP||t===qh.DOWN)
return!1;var i=e.tableStartOffset,s=e.tableEndOffset,a=e.getCellInfo(r,o),c=a.offset,l=a.nodeSize;return(t===qh.LEFT?i:s)===(t===qh.LEFT?c-2:c+l+3);}(t,f,h)?em(t,f,h)?t===qh.UP?m=function(t,e,n){var r=t.doc.resolve(e.tableStartOffset-1);return r.nodeBefore?t.setSelection(Ye.near(r,-1)):Ss(t,r,n);}(i,f,a):t===qh.DOWN&&(m=nm(i,f,a)):m=rm(t,i,h,f):m=function(t,e,n){var r=t.doc.resolve(e.before(n-3));return t.setSelection(new on(r));}(i,c,p),m)
return r(m),!0;
}
}return!1;};},n.prototype.deleteCells=function(){return function(t,e){var n=t.schema,r=t.selection,o=t.tr,i=Jf(r),s=i.anchor,a=i.head;if(s&&a&&!(r instanceof nn)){
for(var c=Hf.create(s),l=c.getRectOffsets(s,a),u=l.startRowIdx,p=l.startColIdx,d=l.endRowIdx,f=l.endColIdx,h=u;h<=d;h+=1)
for(var m=p;m<=f;m+=1)
if(!c.extendedRowspan(h,m)&&!c.extendedColspan(h,m)){
var v=c.getNodeAndPos(h,m),g=v.node,y=v.pos,b=$f(1,h,n,g.attrs);
o.replaceWith(o.mapping.map(y),o.mapping.map(y+g.nodeSize),b);
}
return e(o),!0;
}return!1;};},n.prototype.exitTable=function(){return function(t,e){var n=t.selection,r=t.tr,o=t.schema,i=n.$from;if(xf(i,function(t){var e=t.type;return"tableHeadCell"===e.name||"tableBodyCell"===e.name;})&&xf(i,function(t){return"paragraph"===t.type.name;})){
var s=Jf(n).anchor;
return e(nm(r,Hf.create(s),o,!0)),!0;
}return!1;};},n.prototype.commands=function(){return{addTable:this.addTable(),removeTable:this.removeTable(),addColumnToLeft:this.addColumn(qh.LEFT),addColumnToRight:this.addColumn(qh.RIGHT),removeColumn:this.removeColumn(),addRowToUp:this.addRow(qh.UP),addRowToDown:this.addRow(qh.DOWN),removeRow:this.removeRow(),alignColumn:this.alignColumn()};},n.prototype.keymaps=function(){var t=this.deleteCells();return{Tab:this.moveToCell(qh.RIGHT),"Shift-Tab":this.moveToCell(qh.LEFT),ArrowUp:this.moveInCell(qh.UP),ArrowDown:this.moveInCell(qh.DOWN),ArrowLeft:this.moveInCell(qh.LEFT),ArrowRight:this.moveInCell(qh.RIGHT),Backspace:t,"Mod-Backspace":t,Delete:t,"Mod-Delete":t,"Mod-Enter":this.exitTable()};},n;}(Ba),sm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableHead";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"tableRow{1}",attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[Sf("thead")],toDOM:function(t){return["thead",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),am=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableBody";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"tableRow+",attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[{tag:"tbody",getAttrs:function(t){var e=t.querySelectorAll("tr")[0].children.length,n=t.getAttribute("data-raw-html");return!!e&&o({},n&&{rawHTML:n});}}],toDOM:function(t){return["tbody",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),cm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableRow";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"(tableHeadCell | tableBodyCell)*",attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[{tag:"tr",getAttrs:function(t){var e=t.children.length,n=t.getAttribute("data-raw-html");return!!e&&o({},n&&{rawHTML:n});}}],toDOM:function(t){return["tr",Of(t.attrs),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),lm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableHeadCell";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"paragraph+",attrs:o({align:{default:null},className:{default:null},rawHTML:{default:null},colspan:{default:null},extended:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),isolating:!0,parseDOM:[Nf("th")],toDOM:function(t){var e=t.attrs,n=Ef(e);return["th",o(o({},n),Of(e)),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),um=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"tableBodyCell";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"(paragraph | bulletList | orderedList)+",attrs:{align:{default:null},className:{default:null},rawHTML:{default:null},colspan:{default:null},rowspan:{default:null},extended:{default:null}},isolating:!0,parseDOM:[Nf("td")],toDOM:function(t){return["td",Ef(t.attrs),0];}};},enumerable:!1,configurable:!0}),n;}(Ba),pm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"image";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{inline:!0,attrs:o({imageUrl:{default:""},altText:{default:null},rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),group:"inline",selectable:!1,parseDOM:[{tag:"img[src]",getAttrs:function(t){var e=Qd(t,{RETURN_DOM_FRAGMENT:!0}).firstChild,n=e.getAttribute("src")||"",r=e.getAttribute("data-raw-html"),i=e.getAttribute("alt");return o({imageUrl:n,altText:i},r&&{rawHTML:r});}}],toDOM:function(t){var e=t.attrs;return[e.rawHTML||"img",o(o({src:Yt(e.imageUrl)},e.altText&&{alt:e.altText}),Of(e))];}};},enumerable:!1,configurable:!0}),n.prototype.addImage=function(){return function(t){return function(e,n){var r=e.schema,i=e.tr,s=t,a=s.imageUrl,c=s.altText;if(!a)
return!1;var l=r.nodes.image.createAndFill(o({imageUrl:a},c&&{altText:c}));return n(i.replaceSelectionWith(l).scrollIntoView()),!0;};};},n.prototype.commands=function(){return{addImage:this.addImage()};},n;}(Ba),dm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"thematicBreak";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),group:"block",parseDOM:[{tag:"hr"}],selectable:!1,toDOM:function(t){var e=t.attrs;return["div",Of(e),[e.rawHTML||"hr"]];}};},enumerable:!1,configurable:!0}),n.prototype.hr=function(){var t=this;return function(){return function(e,n){var r,o=e.selection,i=o.$from;if(i===o.$to){
var s=e.doc,a=e.schema.nodes,c=a.thematicBreak,l=a.paragraph,u=[c.create()],p=i.node(1),d=s.child(s.childCount-1)===p,f=s.resolve(i.after(1)),h=(null===(r=i.nodeAfter)||void 0===r?void 0:r.type.name)===t.name;
return(d||h)&&u.push(l.create()),n(e.tr.insert(f.pos,u).scrollIntoView()),!0;
}return!1;};};},n.prototype.commands=function(){return{hr:this.hr()};},n.prototype.keymaps=function(){var t=this.hr()();return{"Mod-l":t,"Mod-L":t};},n;}(Ba),fm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"strong";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){var t=["b","strong"].map(function(t){return{tag:t,getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({},e&&{rawHTML:e});}};});return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:t,toDOM:function(t){var e=t.attrs;return[e.rawHTML||"strong",Of(e)];}};},enumerable:!1,configurable:!0}),n.prototype.bold=function(){return function(){return function(t,e){return Wi(t.schema.marks.strong)(t,e);};};},n.prototype.commands=function(){return{bold:this.bold()};},n.prototype.keymaps=function(){var t=this.bold()();return{"Mod-b":t,"Mod-B":t};},n;}(Sc),hm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"emph";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){var t=["i","em"].map(function(t){return{tag:t,getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({},e&&{rawHTML:e});}};});return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:t,toDOM:function(t){var e=t.attrs;return[e.rawHTML||"em",Of(e)];}};},enumerable:!1,configurable:!0}),n.prototype.italic=function(){return function(){return function(t,e){return Wi(t.schema.marks.emph)(t,e);};};},n.prototype.commands=function(){return{italic:this.italic()};},n.prototype.keymaps=function(){var t=this.italic()();return{"Mod-i":t,"Mod-I":t};},n;}(Sc),mm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"strike";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){var t=["s","del"].map(function(t){return{tag:t,getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({},e&&{rawHTML:e});}};});return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:t,toDOM:function(t){var e=t.attrs;return[e.rawHTML||"del",Of(e)];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){return Wi(t.schema.marks.strike)(t,e);};};},n.prototype.keymaps=function(){var t=this.commands()();return{"Mod-s":t,"Mod-S":t};},n;}(Sc),vm=function(t){function n(e){var n=t.call(this)||this;return n.linkAttributes=e,n;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"link";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){var t=this;return{attrs:o({linkUrl:{default:""},title:{default:null},rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),inclusive:!1,parseDOM:[{tag:"a[href]",getAttrs:function(t){var e=Qd(t,{RETURN_DOM_FRAGMENT:!0}).firstChild,n=e.getAttribute("href")||"",r=e.getAttribute("title")||"",i=e.getAttribute("data-raw-html");return o({linkUrl:n,title:r},i&&{rawHTML:i});}}],toDOM:function(e){var n=e.attrs;return[n.rawHTML||"a",o(o({href:Yt(n.linkUrl)},t.linkAttributes),Of(n))];}};},enumerable:!1,configurable:!0}),n.prototype.addLink=function(){return function(t){return function(e,n){var r=t,o=r.linkUrl,i=r.linkText,s=void 0===i?"":i,a=e.schema,c=e.tr,l=e.selection,u=l.empty,p=l.from,d=l.to;if(p&&d&&o){
var f={linkUrl:o},h=a.mark("link",f);
if(u&&s){
var m=Ts(a,s,h);
c.replaceRangeWith(p,d,m);
}else

c.addMark(p,d,h);
return n(c.scrollIntoView()),!0;
}return!1;};};},n.prototype.toggleLink=function(){return function(t){return function(e,n){return Wi(e.schema.marks.link,t)(e,n);};};},n.prototype.commands=function(){return{addLink:this.addLink(),toggleLink:this.toggleLink()};},n;}(Sc),gm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"code";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{attrs:o({rawHTML:{default:null}},{htmlAttrs:{default:null},classNames:{default:null}}),parseDOM:[{tag:"code",getAttrs:function(t){var e=t.getAttribute("data-raw-html");return o({},e&&{rawHTML:e});}}],toDOM:function(t){var e=t.attrs;return[e.rawHTML||"code",Of(e)];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e){return Wi(t.schema.marks.code)(t,e);};};},n.prototype.keymaps=function(){var t=this.commands()();return{"Shift-Mod-c":t,"Shift-Mod-C":t};},n;}(Sc),ym=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"customBlock";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"text*",group:"block",attrs:{info:{default:null}},atom:!0,code:!0,defining:!0,parseDOM:[{tag:"div[data-custom-info]",getAttrs:function(t){return{info:t.getAttribute("data-custom-info")};}}],toDOM:function(t){return["div",{"data-custom-info":t.attrs.info||null},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(t){return function(e,n){return!!(null==t?void 0:t.info)&&Ui(e.schema.nodes.customBlock,t)(e,n);};};},n;}(Ba),bm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"frontMatter";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"text*",group:"block",code:!0,defining:!0,parseDOM:[{preserveWhitespace:"full",tag:"div[data-front-matter]"}],toDOM:function(){return["div",{"data-front-matter":"true"},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e,n){var r=t.selection.$from;return!(!n.endOfTextblock("down")||"frontMatter"!==r.node().type.name)&&ji(t,e);};};},n.prototype.keymaps=function(){return{Enter:this.commands()()};},n;}(Ba),wm=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),Object.defineProperty(n.prototype,"name",{get:function(){return"htmlComment";},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"schema",{get:function(){return{content:"text*",group:"block",code:!0,defining:!0,parseDOM:[{preserveWhitespace:"full",tag:"div[data-html-comment]"}],toDOM:function(){return["div",{"data-html-comment":"true"},0];}};},enumerable:!1,configurable:!0}),n.prototype.commands=function(){return function(){return function(t,e,n){var r=t.selection.$from;return!(!n.endOfTextblock("down")||"htmlComment"!==r.node().type.name)&&ji(t,e);};};},n.prototype.keymaps=function(){return{Enter:this.commands()()};},n;}(Ba);
var km=ya("contents"),xm=function(t){function n(e,n){var r=t.call(this,e)||this,i=n.toDOMAdaptor,s=n.htmlSchemaMap,a=void 0===s?{}:s,c=n.linkAttributes,l=void 0===c?{}:c,u=n.useCommandShortcut,p=void 0===u||u,d=n.wwPlugins,f=void 0===d?[]:d,h=n.wwNodeViews,m=void 0===h?{}:h;return r.editorType="wysiwyg",r.el.classList.add("ww-mode"),r.toDOMAdaptor=i,r.linkAttributes=l,r.extraPlugins=f,r.pluginNodeViews=m,r.specs=r.createSpecs(),r.schema=r.createSchema(a),r.context=r.createContext(),r.keymaps=r.createKeymaps(p),r.view=r.createView(),r.commands=r.createCommands(),r.specs.setContext(o(o({},r.context),{view:r.view})),r.initEvent(),r;}return e(n,t),n.prototype.createSpecs=function(){return t=this.linkAttributes,new Ja([new Vh(),new $h(),new Wh(),new Jh(),new Gh(),new Kh(),new Zh(),new Xh(),new Qh(),new im(),new sm(),new am(),new cm(),new lm(),new um(),new pm(),new dm(),new fm(),new hm(),new mm(),new vm(t),new gm(),new ym(),new bm(),new za(),new wm()]);var t;},n.prototype.createContext=function(){return{schema:this.schema,eventEmitter:this.eventEmitter};},n.prototype.createSchema=function(t){return new ct({nodes:o(o({},this.specs.nodes),t.nodes),marks:o(o({},this.specs.marks),t.marks)});},n.prototype.createPlugins=function(){return this.defaultPlugins.concat(i([new wn({key:Xf,state:{init:function(){return null;},apply:function(t,e){var n=t.getMeta(Xf);if(n)
return-1===n?null:n;if(_t()(e)||!t.docChanged)
return e;var r=t.mapping.mapResult(e),o=r.deleted,i=r.pos;return o?null:i;}},props:{decorations:eh,createSelectionBetween:function(t){var e=t.state;return _t()(Xf.getState(e))?null:e.selection;}},view:function(t){return new Yf(t);}}),ph(this.eventEmitter),new wn({props:{handleDOMEvents:{mousedown:function(t,e){var n=e,r=n.clientX,i=n.clientY,s=t.posAtCoords({left:r,top:i});if(s){
var a=t.state,c=a.doc,l=a.tr,u=c.resolve(s.pos),p=Mf(u),d=e.target,f=getComputedStyle(d,":before"),h=e,m=h.offsetX,v=h.offsetY;
if(!p||!va(f,m,v))
return!1;
e.preventDefault();
var g=u.before(p.depth),y=p.node.attrs;
return l.setNodeMarkup(g,null,o(o({},y),{checked:!y.checked})),t.dispatch(l),!0;
}return!1;}}}}),vh(this.eventEmitter)],this.createPluginProps()));},n.prototype.createPluginNodeViews=function(){var t=this.eventEmitter,e=this.pluginNodeViews,n={};return e&&Object.keys(e).forEach(function(r){n[r]=function(n,o,i){return e[r](n,o,i,t);};}),n;},n.prototype.createView=function(){var t=this,e=this.toDOMAdaptor,n=this.eventEmitter;return new ui(this.el,{state:this.createState(),attributes:{class:km},nodeViews:o({customBlock:function(t,n,r){return new gh(t,n,r,e);},image:function(t,e,r){return new bh(t,e,r,n);},codeBlock:function(t,e,r){return new wh(t,e,r,n);},widget:Fa},this.createPluginNodeViews()),dispatchTransaction:function(e){var n=t.view.state.applyTransaction(e).state;t.view.updateState(n),t.emitChangeEvent(e.scrollIntoView()),t.eventEmitter.emit("setFocusedNode",n.selection.$from.node(1));},transformPastedHTML:Lh,transformPasted:function(e){return zh(e,t.schema,Tf(t.view.state.selection.$from));},handlePaste:function(t,e,n){return _h(t,n);},handleKeyDown:function(e,n){return t.eventEmitter.emit("keydown",t.editorType,n),!1;},handleDOMEvents:{paste:function(e,n){var r=n.clipboardData||window.clipboardData,o=null==r?void 0:r.items;if(o){
var i=gi()(o).some(function(t){return"string"===t.kind&&"text/rtf"===t.type;});
if(!i){
var s=Ra(o);
s&&(n.preventDefault(),Ia(t.eventEmitter,s,n.type));
}
}return!1;},keyup:function(e,n){return t.eventEmitter.emit("keyup",t.editorType,n),!1;},scroll:function(){return t.eventEmitter.emit("scroll","editor"),!0;}}});},n.prototype.createCommands=function(){return this.specs.commands(this.view,Bf());},n.prototype.getHTML=function(){return this.view.dom.innerHTML;},n.prototype.getModel=function(){return this.view.state.doc;},n.prototype.getSelection=function(){var t=this.view.state.selection;return[t.from,t.to];},n.prototype.getSchema=function(){return this.view.state.schema;},n.prototype.replaceSelection=function(t,e,n){var r=this.view.state,o=r.schema,i=r.tr,s=t.split("\n").map(function(t){return Cs(o,Ys(t,o));}),a=new y(p.from(s),1,1),c=Ft()(e)&&Ft()(n)?i.replaceRange(e,n,a):i.replaceSelection(a);this.view.dispatch(c),this.focus();},n.prototype.deleteSelection=function(t,e){var n=this.view.state.tr,r=Ft()(t)&&Ft()(e)?n.deleteRange(t,e):n.deleteSelection();this.view.dispatch(r.scrollIntoView());},n.prototype.getSelectedText=function(t,e){var n=this.view.state,r=n.doc,o=n.selection,i=o.from,s=o.to;return Ft()(t)&&Ft()(e)&&(i=t,s=e),r.textBetween(i,s,"\n");},n.prototype.setModel=function(t,e){void 0===e&&(e=!1);var n=this.view.state,r=n.tr,o=n.doc;this.view.dispatch(r.replaceWith(0,o.content.size,t)),e&&this.moveCursorToEnd(!0);},n.prototype.setSelection=function(t,e){void 0===e&&(e=t);var n=this.view.state.tr,r=Ms(n,t,e);this.view.dispatch(n.setSelection(r).scrollIntoView());},n.prototype.addWidget=function(t,e,n){var r=this.view,o=r.dispatch,i=r.state;o(i.tr.setMeta("widget",{pos:null!=n?n:i.selection.to,node:t,style:e}));},n.prototype.replaceWithWidget=function(t,e,n){var r=this.view.state,o=r.tr,i=Ys(n,r.schema);this.view.dispatch(o.replaceWith(t,e,i));},n.prototype.getRangeInfoOfNode=function(t){var e=this.view.state,n=e.doc,r=e.selection,o=t?n.resolve(t):r.$from,i=o.marks(),s=o.node(),a=o.start(),c=o.end(),l=s.type.name;if(i.length||"paragraph"===l){
var u=i[i.length-1];
l=u?u.type.name:"text",s.forEach(function(t,e){var n=t.isText,r=t.nodeSize,i=t.marks,s=o.pos-a;n&&e<=s&&e+r>=s&&function(t){return!t.length||te(t,u);}(i)&&(c=(a+=e)+r);});
}return{range:[a,c],type:l};},n;}(_a),Cm=xm,Tm=n(404),Mm=n.n(Tm),Sm=["afterPreviewRender","updatePreview","changeMode","needChangeMode","command","changePreviewStyle","changePreviewTabPreview","changePreviewTabWrite","scroll","contextmenu","show","hide","changeLanguage","changeToolbarState","toggleScrollSync","mixinTableOffsetMapPrototype","setFocusedNode","removePopupWidget","query","openPopup","closePopup","addImageBlobHook","beforePreviewRender","beforeConvertWysiwygToMarkdown","load","loadUI","change","caretChange","destroy","focus","blur","keydown","keyup"],Em=function(){function t(){var t=this;this.events=new ih(),this.eventTypes=Sm.reduce(function(t,e){return o(o({},t),{type:e});},{}),this.hold=!1,Sm.forEach(function(e){t.addEventType(e);});}return t.prototype.listen=function(t,e){var n=this.getTypeInfo(t),r=this.events.get(n.type)||[];if(!this.hasEventType(n.type))
throw new Error("There is no event type "+n.type);n.namespace&&(e.namespace=n.namespace),r.push(e),this.events.set(n.type,r);},t.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)
e[n-1]=arguments[n];var r=this.getTypeInfo(t),o=this.events.get(r.type),i=[];return!this.hold&&o&&o.forEach(function(t){var n=t.apply(void 0,e);zt()(n)||i.push(n);}),i;},t.prototype.emitReduce=function(t,e){for(var n=[],r=2;r<arguments.length;r++)
n[r-2]=arguments[r];var o=this.events.get(t);return!this.hold&&o&&o.forEach(function(t){var r=t.apply(void 0,i([e],n));Mm()(r)||(e=r);}),e;},t.prototype.getTypeInfo=function(t){var e=t.split(".");return{type:e[0],namespace:e[1]};},t.prototype.hasEventType=function(t){return!zt()(this.eventTypes[this.getTypeInfo(t).type]);},t.prototype.addEventType=function(t){if(this.hasEventType(t))
throw new Error("There is already have event type "+t);this.eventTypes[t]=t;},t.prototype.removeEventHandler=function(t,e){var n=this,r=this.getTypeInfo(t),o=r.type,i=r.namespace;o&&e?this.removeEventHandlerWithHandler(o,e):o&&!i?this.events.delete(o):!o&&i?this.events.forEach(function(t,e){n.removeEventHandlerWithTypeInfo(e,i);}):o&&i&&this.removeEventHandlerWithTypeInfo(o,i);},t.prototype.removeEventHandlerWithHandler=function(t,e){var n=this.events.get(t);if(n){
var r=n.indexOf(e);
n.indexOf(e)>=0&&n.splice(r,1);
}},t.prototype.removeEventHandlerWithTypeInfo=function(t,e){var n=[],r=this.events.get(t);r&&(r.map(function(t){return t.namespace!==e&&n.push(t),null;}),this.events.set(t,n));},t.prototype.getEvents=function(){return this.events;},t.prototype.holdEventInvoke=function(t){this.hold=!0,t(),this.hold=!1;},t;}(),Nm=Em,Om=function(){function t(t,e,n,r){this.eventEmitter=t,this.mdCommands=e,this.wwCommands=n,this.getEditorType=r,this.initEvent();}return t.prototype.initEvent=function(){var t=this;this.eventEmitter.listen("command",function(e,n){t.exec(e,n);});},t.prototype.addCommand=function(t,e,n){"markdown"===t?this.mdCommands[e]=n:this.wwCommands[e]=n;},t.prototype.deleteCommand=function(t,e){"markdown"===t?delete this.mdCommands[e]:delete this.wwCommands[e];},t.prototype.exec=function(t,e){"markdown"===this.getEditorType()?this.mdCommands[t](e):this.wwCommands[t](e);},t;}(),Dm=Om;
function Am(t){return"\n"===t[t.length-1]?t.slice(0,t.length-1):t;}
function Lm(t,e){var n=t.schema,r=e.literal.match(da);if(r){
var o=r[1],i=r[3],s=(o||i).toLowerCase();
return"htmlInline"===e.type&&!(!n.marks[s]&&!n.nodes[s]);
}return!1;}
function Im(t){return te(["text","strong","emph","strike","image","link","code"],t.type);}
function Rm(t){return"softbreak"===(null==t?void 0:t.type);}
function Pm(t){var e=t.type,n=t.literal,r="htmlInline"===e&&n.match(da);if(r){
var o=r[1],i=r[3],s=o||i;
if(s)
return te(["ul","ol","li"],s.toLowerCase());
}return!1;}
function Bm(t){for(var e=[],n=1;n<arguments.length;n++)
e[n-1]=arguments[n];var r=document.createElement("div");r.innerHTML=Qd(t);var o=r.firstChild;return e.map(function(t){return o.getAttribute(t)||"";});}
var Fm={"b, strong":function(t,e,n){var r=t.schema.marks.strong;n?t.openMark(r.create({rawHTML:n})):t.closeMark(r);},"i, em":function(t,e,n){var r=t.schema.marks.emph;n?t.openMark(r.create({rawHTML:n})):t.closeMark(r);},"s, del":function(t,e,n){var r=t.schema.marks.strike;n?t.openMark(r.create({rawHTML:n})):t.closeMark(r);},code:function(t,e,n){var r=t.schema.marks.code;n?t.openMark(r.create({rawHTML:n})):t.closeMark(r);},a:function(t,e,n){var r=e.literal,o=t.schema.marks.link;if(n){
var i=Bm(r,"href")[0];
t.openMark(o.create({linkUrl:i,rawHTML:n}));
}else

t.closeMark(o);},img:function(t,e,n){var r=e.literal;if(n){
var i=Bm(r,"src","alt"),s=i[0],a=i[1],c=t.schema.nodes.image;
t.addNode(c,o({rawHTML:n,imageUrl:s},a&&{altText:a}));
}},hr:function(t,e,n){t.addNode(t.schema.nodes.thematicBreak,{rawHTML:n});},br:function(t,e){var n=t.schema.nodes.paragraph,r=e.parent,o=e.prev,i=e.next;"paragraph"===(null==r?void 0:r.type)?(Rm(o)&&t.openNode(n),Rm(i)?t.closeNode():i&&(t.closeNode(),t.openNode(n))):"tableCell"===(null==r?void 0:r.type)&&(o&&(Im(o)||Lm(t,o))&&t.closeNode(),i&&(Im(i)||Lm(t,i))&&t.openNode(n));},pre:function(t,e,n){var r,o,i=document.createElement("div");i.innerHTML=e.literal;var s=null===(o=null===(r=i.firstChild)||void 0===r?void 0:r.firstChild)||void 0===o?void 0:o.textContent;t.openNode(t.schema.nodes.codeBlock,{rawHTML:n}),t.addText(Am(s)),t.closeNode();},"ul, ol":function(t,e,n){if("tableCell"===e.parent.type){
var r=t.schema.nodes,o=r.bulletList,i=r.orderedList,s=r.paragraph,a="ul"===n?o:i;
n?(e.prev&&!Pm(e.prev)&&t.closeNode(),t.openNode(a,{rawHTML:n})):(t.closeNode(),e.next&&!Pm(e.next)&&t.openNode(s));
}},li:function(t,e,n){var r;if("tableCell"===(null===(r=e.parent)||void 0===r?void 0:r.type)){
var i=t.schema.nodes,s=i.listItem,a=i.paragraph;
if(n){
var c=function(t){var e=t.literal;return{task:/data-task/.test(e),checked:/data-task-checked/.test(e)};}(e);
e.prev&&!Pm(e.prev)&&t.closeNode(),t.openNode(s,o({rawHTML:n},c)),e.next&&!Pm(e.next)&&t.openNode(a);
}else

e.prev&&!Pm(e.prev)&&t.closeNode(),t.closeNode();
}}},Hm=function(t){var e={};return Object.keys(t).forEach(function(n){n.split(", ").forEach(function(r){var o=r.toLowerCase();e[o]=t[n];});}),e;}(Fm);
function zm(t){return"htmlInline"===t.type&&fa.test(t.literal);}
function jm(t){gi()(t.childNodes).forEach(function(t){if(wa(t)){
var e=t.nodeName.toLowerCase();
t.setAttribute("data-raw-html",e),t.childNodes&&jm(t);
}});}
var _m={text:function(t,e){t.addText(e.literal||"");},paragraph:function(t,e,n,r){var o;if(n.entering){
var i=t.schema.nodes.paragraph;
"paragraph"===(null===(o=e.prev)||void 0===o?void 0:o.type)&&(t.openNode(i,r),t.closeNode()),t.openNode(i,r);
}else

t.closeNode();},heading:function(t,e,n,r){if(n.entering){
var i=e,s=i.level,a=i.headingType;
t.openNode(t.schema.nodes.heading,o({level:s,headingType:a},r));
}else

t.closeNode();},codeBlock:function(t,e,n){var r=t.schema.nodes.codeBlock,i=e,s=i.info,a=i.literal;t.openNode(r,o({language:s},n)),t.addText(Am(a||"")),t.closeNode();},list:function(t,e,n,r){if(n.entering){
var i=t.schema.nodes,s=i.bulletList,a=i.orderedList,c=e.listData,l=c.type,u=c.start;
"bullet"===l?t.openNode(s,r):t.openNode(a,o({order:u},r));
}else

t.closeNode();},item:function(t,e,n,r){var i=n.entering,s=t.schema.nodes.listItem,a=e.listData,c=a.task,l=a.checked;if(i){
var u=o(o(o({},c&&{task:c}),l&&{checked:l}),r);
t.openNode(s,u);
}else

t.closeNode();},blockQuote:function(t,e,n,r){n.entering?t.openNode(t.schema.nodes.blockQuote,r):t.closeNode();},image:function(t,e,n,r){var i=n.entering,s=n.skipChildren,a=t.schema.nodes.image,c=e,l=c.destination,u=c.firstChild;i&&s&&s(),t.addNode(a,o(o({imageUrl:l},u&&{altText:u.literal}),r));},thematicBreak:function(t,e,n,r){t.addNode(t.schema.nodes.thematicBreak,r);},strong:function(t,e,n,r){var o=n.entering,i=t.schema.marks.strong;o?t.openMark(i.create(r)):t.closeMark(i);},emph:function(t,e,n,r){var o=n.entering,i=t.schema.marks.emph;o?t.openMark(i.create(r)):t.closeMark(i);},link:function(t,e,n,r){var i=n.entering,s=t.schema.marks.link,a=e,c=a.destination,l=a.title;if(i){
var u=o({linkUrl:c,title:l},r);
t.openMark(s.create(u));
}else

t.closeMark(s);},softbreak:function(t,e){if("paragraph"===e.parent.type){
var n=e.prev,r=e.next;
n&&!zm(n)&&t.closeNode(),r&&!zm(r)&&t.openNode(t.schema.nodes.paragraph);
}},table:function(t,e,n,r){n.entering?t.openNode(t.schema.nodes.table,r):t.closeNode();},tableHead:function(t,e,n,r){n.entering?t.openNode(t.schema.nodes.tableHead,r):t.closeNode();},tableBody:function(t,e,n,r){n.entering?t.openNode(t.schema.nodes.tableBody,r):t.closeNode();},tableRow:function(t,e,n,r){n.entering?t.openNode(t.schema.nodes.tableRow,r):t.closeNode();},tableCell:function(t,e,n){var r=n.entering;if(!e.ignored){
var i=function(e){return e&&(Im(e)||Lm(t,e));};
if(r){
var s=t.schema.nodes,a=s.tableHeadCell,c=s.tableBodyCell,l=s.paragraph,u=e.parent.parent,p="tableHead"===u.type?a:c,d=(u.parent.columns[e.startIdx]||{}).align,f=o({},e.attrs);
d&&(f.align=d),t.openNode(p,f),i(e.firstChild)&&t.openNode(l);
}else

i(e.lastChild)&&t.closeNode(),t.closeNode();
}},strike:function(t,e,n,r){var o=n.entering,i=t.schema.marks.strike;o?t.openMark(i.create(r)):t.closeMark(i);},code:function(t,e,n,r){var o=t.schema.marks.code;t.openMark(o.create(r)),t.addText(Am(e.literal||"")),t.closeMark(o);},customBlock:function(t,e){var n=t.schema.nodes,r=n.customBlock,o=n.paragraph,i=e,s=i.info,a=i.literal;t.openNode(r,{info:s}),t.addText(Am(a||"")),t.closeNode(),e.next||(t.openNode(o),t.closeNode());},frontMatter:function(t,e){t.openNode(t.schema.nodes.frontMatter),t.addText(e.literal),t.closeNode();},htmlInline:function(t,e){var n=e.literal,r=n.match(da),o=r[1],i=r[3],s=(o||i).toLowerCase(),a=t.schema.marks[s],c=Qd(n);if(null==a?void 0:a.spec.attrs.htmlInline){
if(o){
var l=tf(c);
t.openMark(a.create({htmlAttrs:l}));
}else

t.closeMark(a);}else
{
var u=Hm[s];
u&&u(t,e,o);
}},htmlBlock:function(t,e){var n=e.literal,r=document.createElement("div");if(ha.test(n))
t.openNode(t.schema.nodes.htmlComment),t.addText(e.literal),t.closeNode();else
{
var o=n.match(da),i=o[1],s=o[3],a=(i||s).toLowerCase(),c=t.schema.nodes[a],l=Qd(n);
if(null==c?void 0:c.spec.attrs.htmlBlock){
var u=tf(l),p=Yd(e,a);
t.addNode(c,{htmlAttrs:u,childrenHTML:p});
}else

r.innerHTML=l,jm(r),t.convertByDOMParser(r);
}},customInline:function(t,e,n){var r=n.entering,o=n.skipChildren,i=e,s=i.info,a=i.firstChild,c=t.schema;if(-1!==s.indexOf("widget")&&r){
var l=ta(e);
o(),t.addNode(c.nodes.widget,{info:s},[c.text(Gs(s,l))]);
}else
{
var u="$$";
r&&(u+=a?s+" ":s),t.addText(u);
}}};
var qm=function(){function t(t,e){this.schema=t,this.convertors=e,this.stack=[{type:this.schema.topNodeType,attrs:null,content:[]}],this.marks=v.none;}return t.prototype.top=function(){return ue(this.stack);},t.prototype.push=function(t){this.stack.length&&this.top().content.push(t);},t.prototype.addText=function(t){if(t){
var e=this.top().content,n=ue(e),r=this.schema.text(t,this.marks),o=n&&(s=r,!!((i=n).isText&&s.isText&&v.sameSet(i.marks,s.marks))&&i.withText(i.text+s.text));
o?e[e.length-1]=o:e.push(r);
}var i,s;},t.prototype.openMark=function(t){this.marks=t.addToSet(this.marks);},t.prototype.closeMark=function(t){this.marks=t.removeFromSet(this.marks);},t.prototype.addNode=function(t,e,n){var r=t.createAndFill(e,n,this.marks);return r?(this.push(r),r):null;},t.prototype.openNode=function(t,e){this.stack.push({type:t,attrs:e,content:[]});},t.prototype.closeNode=function(){this.marks.length&&(this.marks=v.none);var t=this.stack.pop(),e=t.type,n=t.attrs,r=t.content;return this.addNode(e,n,r);},t.prototype.convertByDOMParser=function(t){var e=this;ut.fromSchema(this.schema).parse(t).content.forEach(function(t){return e.push(t);});},t.prototype.closeUnmatchedHTMLInline=function(t,e){var n;if(!e&&"htmlInline"!==t.type)
for(var r=this.stack.length-1;r>=0;r-=1){
var o=this.stack[r];
if(!(null===(n=o.attrs)||void 0===n?void 0:n.rawHTML))
break;
o.content.length?this.closeNode():this.stack.pop();
}},t.prototype.convert=function(t,e){for(var n=t.walker(),r=n.next(),o=function(){var t=r.node,o=r.entering,s=i.convertors[t.type],a=!1;if(s){
var c={entering:o,leaf:!qs(t),getChildrenText:Vs,options:{gfm:!0,nodeId:!1,tagFilter:!1,softbreak:"\n"},skipChildren:function(){a=!0;}};
if(i.closeUnmatchedHTMLInline(t,o),s(i,t,c),(null==e?void 0:e.node)===t){
var l=i.stack.reduce(function(t,e){return t+e.content.reduce(function(t,e){return t+e.nodeSize;},0);},0)+1;
e.setMappedPos(l);
}
}a&&(n.resumeAt(t,!1),n.next()),r=n.next();},i=this;r;)
o();},t.prototype.convertNode=function(t,e){return this.convert(t,e),this.stack.length?this.closeNode():null;},t;}(),Vm=qm;
var $m={text:function(t,e){var n,r=e.node,o=null!==(n=r.text)&&void 0!==n?n:"";(r.marks||[]).some(function(t){return"link"===t.type.name;})?t.text(ie(o),!1):t.text(o);},paragraph:function(t,e){var n=e.node,r=e.parent,o=e.index,i=void 0===o?0:o;if(t.stopNewline)
t.convertInline(n);else
{
var s=0===i,a=!s&&r.child(i-1),c=a&&0===a.childCount,l=i<r.childCount-1&&r.child(i+1),u=l&&"paragraph"===l.type.name,p=0===n.childCount;
p&&c?t.write("<br>\n"):!p||c||s?(t.convertInline(n),u?t.write("\n"):t.closeBlock(n)):t.write("\n");
}},heading:function(t,e,n){var r=e.node,o=n.delim;"atx"===r.attrs.headingType?(t.write(o+" "),t.convertInline(r),t.closeBlock(r)):(t.convertInline(r),t.ensureNewLine(),t.write(o),t.closeBlock(r));},codeBlock:function(t,e,n){var r=e.node,o=n.delim,i=n.text,s=o,a=s[0],c=s[1];t.write(a),t.ensureNewLine(),t.text(i,!1),t.ensureNewLine(),t.write(c),t.closeBlock(r);},blockQuote:function(t,e,n){var r=e.node,o=e.parent,i=n.delim;(null==o?void 0:o.type.name)===r.type.name&&t.flushClose(1),t.wrapBlock(i,null,r,function(){return t.convertNode(r);});},bulletList:function(t,e,n){var r=e.node,o=n.delim;t.convertList(r,oe(" ",4),function(){return o+" ";});},orderedList:function(t,e){var n=e.node,r=n.attrs.order||1;t.convertList(n,oe(" ",4),function(t){return String(r+t)+". ";});},listItem:function(t,e){var n=e.node,r=n.attrs,o=r.task,i=r.checked;o&&t.write("["+(i?"x":" ")+"] "),t.convertNode(n);},image:function(t,e,n){var r=n.attrs;t.write("!["+(null==r?void 0:r.altText)+"]("+(null==r?void 0:r.imageUrl)+")");},thematicBreak:function(t,e,n){var r=e.node,o=n.delim;t.write(o),t.closeBlock(r);},table:function(t,e){var n=e.node;t.convertNode(n),t.closeBlock(n);},tableHead:function(t,e,n){var r=e.node,o=n.delim,i=r.firstChild;t.convertNode(r);var s=null!=o?o:"";!o&&i&&i.forEach(function(t){var e=function(t,e){var n=t.length,r="",o="";return"left"===e?(r=":",n-=1):"right"===e?(o=":",n-=1):"center"===e&&(r=":",o=":",n-=2),""+r+oe("-",Math.max(n,3))+o;}(t.textContent,t.attrs.align);s+="| "+e+" ";}),t.write(s+"|"),t.ensureNewLine();},tableBody:function(t,e){var n=e.node;t.convertNode(n);},tableRow:function(t,e){var n=e.node;t.convertNode(n),t.write("|"),t.ensureNewLine();},tableHeadCell:function(t,e,n){var r=e.node,o=n.delim,i=void 0===o?"| ":o;t.write(i),t.convertTableCell(r),t.write(" ");},tableBodyCell:function(t,e,n){var r=e.node,o=n.delim,i=void 0===o?"| ":o;t.write(i),t.convertTableCell(r),t.write(" ");},customBlock:function(t,e,n){var r=e.node,o=n.delim,i=n.text,s=o,a=s[0],c=s[1];t.write(a),t.ensureNewLine(),t.text(i,!1),t.ensureNewLine(),t.write(c),t.closeBlock(r);},frontMatter:function(t,e,n){var r=e.node,o=n.text;t.text(o,!1),t.closeBlock(r);},widget:function(t,e,n){var r=n.text;t.write(r);},html:function(t,e,n){var r=e.node,o=n.text;t.write(o),r.attrs.htmlBlock&&t.closeBlock(r);},htmlComment:function(t,e,n){var r=e.node,o=n.text;t.write(o),t.closeBlock(r);}};
function Um(t,e){var n=t.text,r=/`+/g,o=0;if(t.isText&&n)
for(var i=r.exec(n);i;)
o=Math.max(o,i[0].length),i=r.exec(n);for(var s=o>0&&e>0?" `":"`",a=0;a<o;a+=1)
s+="`";return o>0&&e<0&&(s+=" "),s;}
function Wm(t){return t?["<"+t+">","</"+t+">"]:null;}
function Jm(t){return t?"<"+t+">":null;}
function Gm(t){return t?"</"+t+">":null;}
var Km={heading:function(t){var e=t.node.attrs,n=e.level,r=oe("#",n);return"setext"===e.headingType&&(r=1===n?"===":"---"),{delim:r,rawHTML:Wm(e.rawHTML)};},codeBlock:function(t){var e=t.node,n=e.attrs,r=e.textContent;return{delim:["```"+(n.language||""),"```"],rawHTML:Wm(n.rawHTML),text:r};},blockQuote:function(t){return{delim:"> ",rawHTML:Wm(t.node.attrs.rawHTML)};},bulletList:function(t,e){var n=t.node,r=e.inTable,o=n.attrs.rawHTML;return r&&(o=o||"ul"),{delim:"*",rawHTML:Wm(o)};},orderedList:function(t,e){var n=t.node,r=e.inTable,o=n.attrs.rawHTML;return r&&(o=o||"ol"),{rawHTML:Wm(o)};},listItem:function(t,e){var n=t.node,r=e.inTable,o=n.attrs,i=o.task,s=o.checked,a=n.attrs.rawHTML;return r&&(a=a||"li"),{rawHTML:a?["<"+a+(i?' class="task-list-item'+(s?" checked":"")+'"':"")+(i?" data-task"+(s?" data-task-checked":""):"")+">","</"+a+">"]:null};},table:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},tableHead:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},tableBody:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},tableRow:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},tableHeadCell:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},tableBodyCell:function(t){return{rawHTML:Wm(t.node.attrs.rawHTML)};},image:function(t){var e=t.node.attrs,n=e.rawHTML,r=e.altText,o=e.imageUrl.replace(/&amp;/g,"&"),i=r?' alt="'+Yt(r)+'"':"";return{rawHTML:n?"<"+n+' src="'+Yt(o)+'"'+i+">":null,attrs:{altText:ie(r||""),imageUrl:o}};},thematicBreak:function(t){return{delim:"***",rawHTML:Jm(t.node.attrs.rawHTML)};},customBlock:function(t){var e=t.node,n=e.attrs,r=e.textContent;return{delim:["$$"+n.info,"$$"],text:r};},frontMatter:function(t){return{text:t.node.textContent};},widget:function(t){return{text:t.node.textContent};},strong:function(t,e){var n=t.node,r=e.entering,o=n.attrs.rawHTML;return{delim:"**",rawHTML:r?Jm(o):Gm(o)};},emph:function(t,e){var n=t.node,r=e.entering,o=n.attrs.rawHTML;return{delim:"*",rawHTML:r?Jm(o):Gm(o)};},strike:function(t,e){var n=t.node,r=e.entering,o=n.attrs.rawHTML;return{delim:"~~",rawHTML:r?Jm(o):Gm(o)};},link:function(t,e){var n=t.node,r=e.entering,o=n.attrs,i=o.title,s=o.rawHTML,a=o.linkUrl.replace(/&amp;/g,"&"),c=i?' title="'+Yt(i)+'"':"";return r?{delim:"[",rawHTML:s?"<"+s+' href="'+Yt(a)+'"'+c+">":null}:{delim:"]("+a+(i?" "+ae(ie(i)):"")+")",rawHTML:Gm(s)};},code:function(t,e){var n=t.node,r=t.parent,o=t.index,i=void 0===o?0:o,s=e.entering;return{delim:s?Um(r.child(i),-1):Um(r.child(i-1),1),rawHTML:s?Jm(n.attrs.rawHTML):Gm(n.attrs.rawHTML)};},htmlComment:function(t){return{text:t.node.textContent};},html:function(t,e){var n=t.node,r=e.entering,o=n.type.name,i=n.attrs.htmlAttrs,s="<"+o,a="</"+o+">";return Object.keys(i).forEach(function(t){s+=" "+t+'="'+i[t].replace(/"/g,"'")+'"';}),s+=">",n.attrs.htmlInline?{rawHTML:r?s:a}:{text:""+s+n.attrs.childrenHTML+a};}},Zm={strong:{mixable:!0,removedEnclosingWhitespace:!0},emph:{mixable:!0,removedEnclosingWhitespace:!0},strike:{mixable:!0,removedEnclosingWhitespace:!0},code:{escape:!1},link:null,html:null};
function Xm(t){var e={};return Object.keys($m).forEach(function(n){e[n]=function(e,r){if($m[n]){
var o=t[n],i=o?o(r,{inTable:e.inTable}):{};
!function(t,e){var n=e.state,r=e.nodeInfo,o=e.params,i=o.rawHTML;i?rh()(t,["heading","codeBlock"])>-1?function(t,e,n){var r=n[0],o=n[1];t.write(r),t.convertInline(e),t.write(o);}(n,r.node,i):rh()(t,["image","thematicBreak"])>-1?n.write(i):function(t,e,n){var r=e.node,o=e.parent,i=n[0],s=n[1];t.stopNewline=!0,t.write(i),t.convertNode(r),t.write(s),"doc"===(null==o?void 0:o.type.name)&&(t.closeBlock(r),t.stopNewline=!1);}(n,r,i):$m[t](n,r,o);}(n,{state:e,nodeInfo:r,params:i});
}};}),e;}
function Qm(t){Object.keys(t).forEach(function(e){var n=Km[e],r=t[e];Km[e]=n?function(t,e){return e.origin=function(){return n(t,e);},r(t,e);}:r,delete t[e];});var e=Xm(Km),n=function(t){var e={};return Object.keys(Zm).forEach(function(n){e[n]=function(e,r){var i=Zm[n],s=t[n],a=s&&e&&!zt()(r)?s(e,{entering:r}):{};return o(o({},a),i);};}),e;}(Km);return{nodeTypeConvertors:e,markTypeConvertors:n};}
var Ym=function(){function t(t){var e=t.nodeTypeConvertors,n=t.markTypeConvertors;this.nodeTypeConvertors=e,this.markTypeConvertors=n,this.delim="",this.result="",this.closed=!1,this.tightList=!1,this.stopNewline=!1,this.inTable=!1;}return t.prototype.getMarkConvertor=function(t){var e=t.attrs.htmlInline?"html":t.type.name;return this.markTypeConvertors[e];},t.prototype.isInBlank=function(){return /(^|\n)$/.test(this.result);},t.prototype.markText=function(t,e,n,r){var o=this.getMarkConvertor(t);if(o){
var i=o({node:t,parent:n,index:r},e),s=i.delim;
return i.rawHTML||s;
}return"";},t.prototype.flushClose=function(t){if(!this.stopNewline&&this.closed){
if(this.isInBlank()||(this.result+="\n"),t||(t=2),t>1){
var e=this.delim,n=/\s+$/.exec(e);
n&&(e=e.slice(0,e.length-n[0].length));
for(var r=1;r<t;r+=1)
this.result+=e+"\n";
}
this.closed=!1;
}},t.prototype.wrapBlock=function(t,e,n,r){var o=this.delim;this.write(e||t),this.delim+=t,r(),this.delim=o,this.closeBlock(n);},t.prototype.ensureNewLine=function(){this.isInBlank()||(this.result+="\n");},t.prototype.write=function(t){void 0===t&&(t=""),this.flushClose(),this.delim&&this.isInBlank()&&(this.result+=this.delim),t&&(this.result+=t);},t.prototype.closeBlock=function(t){this.closed=t;},t.prototype.text=function(t,e){void 0===e&&(e=!0);for(var n=t.split("\n"),r=0;r<n.length;r+=1)
this.write(),this.result+=e?se(n[r]):n[r],r!==n.length-1&&(this.result+="\n");},t.prototype.convertBlock=function(t,e,n){var r=t.type.name,o=this.nodeTypeConvertors[r],i={node:t,parent:e,index:n};t.attrs.htmlBlock?this.nodeTypeConvertors.html(this,i):o&&o(this,i);},t.prototype.convertInline=function(t){var e=this,n=[],r="",o=function(o,i,s){var a=o?o.marks:[],c=r;r="";var l=o&&o.isText&&a.some(function(t){var n=e.getMarkConvertor(t),r=n&&n();return r&&r.removedEnclosingWhitespace;});if(l&&o&&o.text){
var u=/^(\s*)(.*?)(\s*)$/m.exec(o.text),p=u[1],d=u[2],f=u[3];
c+=p,r=f,(p||f)&&((o=d?o.withText(d):null)||(a=n));
}for(var h=a.length&&ue(a),m=h&&e.getMarkConvertor(h),v=m&&m(),g=v&&!1===v.escape,y=a.length-(g?1:0),b=0;b<y;b+=1){
d=a[b];
if(v&&!v.mixable)
break;
for(var w=0;w<n.length;w+=1){
var k=n[w];
if(v&&!v.mixable)
break;
if(d.eq(k)){
b>w?a=a.slice(0,w).concat(d).concat(a.slice(w,b)).concat(a.slice(b+1,y)):w>b&&(a=a.slice(0,b).concat(a.slice(b+1,w)).concat(d).concat(a.slice(w,y)));
break;
}
}
}for(var x=0;x<Math.min(n.length,y)&&a[x].eq(n[x]);)
x+=1;for(;x<n.length;){
var C=n.pop();
C&&e.text(e.markText(C,!1,t,s),!1);
}if(c&&e.text(c),o){
for(;n.length<y;){
d=a[n.length];
n.push(d),e.text(e.markText(d,!0,t,s),!1);
}
g&&o.isText?e.text(e.markText(h,!0,t,s)+o.text+e.markText(h,!1,t,s+1),!1):e.convertBlock(o,t,s);
}};t.forEach(o),o(null,0,t.childCount);},t.prototype.convertList=function(t,e,n){var r,o=this;this.closed&&this.closed.type===t.type?this.flushClose(3):this.tightList&&this.flushClose(1);var i=null===(r=t.attrs.tight)||void 0===r||r,s=this.tightList;this.tightList=i,t.forEach(function(r,s,a){a&&i&&o.flushClose(1),o.wrapBlock(e,n(a),t,function(){return o.convertBlock(r,t,a);});}),this.tightList=s;},t.prototype.convertTableCell=function(t){var e=this;this.stopNewline=!0,this.inTable=!0,t.forEach(function(n,r,o){te(["bulletList","orderedList"],n.type.name)?(e.convertBlock(n,t,o),e.closed=!1):(e.convertInline(n),o<t.childCount-1&&"paragraph"===t.child(o+1).type.name&&e.write("<br>"));}),this.stopNewline=!1,this.inTable=!1;},t.prototype.convertNode=function(t,e){var n=this;return t.forEach(function(r,o,i){if(n.convertBlock(r,t,i),(null==e?void 0:e.node)===r){
var s=n.result.split("\n");
e.setMappedPos([s.length,ue(s).length+1]);
}}),this.result;},t;}(),tv=Ym,ev=function(){function t(t,e,n,r){var i=this;this.setMappedPos=function(t){i.mappedPosWhenConverting=t;},this.schema=t,this.eventEmitter=r,this.focusedNode=null,this.mappedPosWhenConverting=null,this.toWwConvertors=function(t){var e=Object.keys(t),n=o({},_m),r=new Wd({gfm:!0,nodeId:!0,convertors:t}).getConvertors();return e.forEach(function(e){var o=_m[e];o&&!te(["htmlBlock","htmlInline"],e)&&(n[e]=function(n,i,s){s.origin=function(){return r[e](i,s,r);};var a,c=t[e](i,s);if(c){
var l=Array.isArray(c)?c[0]:c;
a={htmlAttrs:l.attributes,classNames:l.classNames};
}o(n,i,s,a);});}),n;}(n),this.toMdConvertors=Qm(e||{}),this.eventEmitter.listen("setFocusedNode",function(t){return i.focusedNode=t;});}return t.prototype.getMappedPos=function(){return this.mappedPosWhenConverting;},t.prototype.getInfoForPosSync=function(){return{node:this.focusedNode,setMappedPos:this.setMappedPos};},t.prototype.toWysiwygModel=function(t){return new Vm(this.schema,this.toWwConvertors).convertNode(t,this.getInfoForPosSync());},t.prototype.toMarkdownText=function(t){var e=new tv(this.toMdConvertors).convertNode(t,this.getInfoForPosSync());return e=this.eventEmitter.emitReduce("beforeConvertWysiwygToMarkdown",e);},t;}(),nv=ev;
function rv(t,e,n){return e.listen("mixinTableOffsetMapPrototype",jf),(null!=t?t:[]).reduce(function(t,r){var i=function(t,e,n){var r={eventEmitter:e,usageStatistics:n,pmState:{Plugin:wn,Selection:Ye,TextSelection:nn},pmView:{Decoration:Ko,DecorationSet:Yo},pmModel:{Fragment:p},i18n:ch};if(ra()(t)){
var o=t[0],i=t[1];
return o(r,void 0===i?{}:i);
}return t(r);}(r,e,n);if(!i)
throw new Error("The return value of the executed plugin is empty.");var s=i.markdownParsers,a=i.toHTMLRenderers,c=i.toMarkdownRenderers,l=i.markdownPlugins,u=i.wysiwygPlugins,d=i.wysiwygNodeViews,f=i.markdownCommands,h=i.wysiwygCommands,m=i.toolbarItems;return a&&(t.toHTMLRenderers=de(t.toHTMLRenderers,a)),c&&(t.toMarkdownRenderers=de(t.toMarkdownRenderers,c)),l&&(t.mdPlugins=t.mdPlugins.concat(l)),u&&(t.wwPlugins=t.wwPlugins.concat(u)),d&&(t.wwNodeViews=o(o({},t.wwNodeViews),d)),f&&(t.mdCommands=o(o({},t.mdCommands),f)),h&&(t.wwCommands=o(o({},t.wwCommands),h)),m&&(t.toolbarItems=t.toolbarItems.concat(m)),s&&(t.markdownParsers=o(o({},t.markdownParsers),s)),t;},{toHTMLRenderers:{},toMarkdownRenderers:{},mdPlugins:[],wwPlugins:[],wwNodeViews:{},mdCommands:{},wwCommands:{},toolbarItems:[],markdownParsers:{}});}
var ov=function(){function t(t){var e=this;this.options=Et()({linkAttributes:null,extendedAutolinks:!1,customHTMLRenderer:null,referenceDefinition:!1,customHTMLSanitizer:null,frontMatter:!1,usageStatistics:!0,theme:"light"},t),this.eventEmitter=new Nm();var n,r=re(this.options.linkAttributes),i=rv(this.options.plugins,this.eventEmitter,this.options.usageStatistics)||{},s=i.toHTMLRenderers,a=i.markdownParsers,c=this.options,l=c.customHTMLRenderer,u=c.extendedAutolinks,p=c.referenceDefinition,d=c.frontMatter,f=c.customHTMLSanitizer,h={linkAttributes:r,customHTMLRenderer:o(o({},s),l),extendedAutolinks:u,referenceDefinition:p,frontMatter:d,sanitizer:f||Qd};n=h.customHTMLRenderer,["htmlBlock","htmlInline"].forEach(function(t){n[t]&&Object.keys(n[t]).forEach(function(t){return Xd(t);});}),this.options.events&&Mt()(this.options.events,function(t,n){e.on(n,t);});var m=this.options,v=m.el,g=m.initialValue,y=m.theme,b=v.innerHTML;"light"!==y&&v.classList.add(ya(y)),v.innerHTML="",this.toastMark=new zd("",{disallowedHtmlBlockTags:["br","img"],extendedAutolinks:u,referenceDefinition:p,disallowDeepHeading:!0,frontMatter:d,customParser:a}),this.preview=new kf(this.eventEmitter,o(o({},h),{isViewer:!0})),Bl()(this.preview.previewContent,"mousedown",this.toggleTask.bind(this)),g?this.setMarkdown(g):b&&this.preview.setHTML(b),v.appendChild(this.preview.previewContent),this.eventEmitter.emit("load",this);}return t.prototype.toggleTask=function(t){var e=t.target,n=getComputedStyle(e,":before");!e.hasAttribute("data-task-disabled")&&e.hasAttribute("data-task")&&va(n,t.offsetX,t.offsetY)&&xa(e,"checked");},t.prototype.setMarkdown=function(t){var e=this.toastMark.getLineTexts(),n=[e.length,ue(e).length+1],r=this.toastMark.editMarkdown([1,1],n,t||"");this.eventEmitter.emit("updatePreview",r);},t.prototype.on=function(t,e){this.eventEmitter.listen(t,e);},t.prototype.off=function(t){this.eventEmitter.removeEventHandler(t);},t.prototype.addHook=function(t,e){this.eventEmitter.removeEventHandler(t),this.eventEmitter.listen(t,e);},t.prototype.destroy=function(){Rl()(this.preview.el,"mousedown",this.toggleTask.bind(this)),this.preview.destroy(),this.eventEmitter.emit("destroy");},t.prototype.isViewer=function(){return!0;},t.prototype.isMarkdownMode=function(){return!1;},t.prototype.isWysiwygMode=function(){return!1;},t;}(),iv=ov;
function sv(t){return t instanceof z;}
function av(t){return te(["document","blockQuote","bulletList","orderedList","listItem","paragraph","heading","emph","strong","strike","link","image","table","tableHead","tableBody","tableRow","tableHeadCell","tableBodyCell"],t);}
var cv={openTag:function(t,e){var n=t,r=n.tagName,i=n.classNames,s=n.attributes,a=document.createElement(r),c={};i&&(a.className=i.join(" ")),s&&(c=o(o({},c),s)),Ea(c,a),e.push(a);},closeTag:function(t,e){if(e.length>1){
var n=e.pop();
ue(e).appendChild(n);
}},html:function(t,e){ue(e).insertAdjacentHTML("beforeend",t.content);},text:function(t,e){var n=document.createTextNode(t.content);ue(e).appendChild(n);}},lv=function(){function t(t,e){var n=af(t,e),r=o(o({},e.htmlBlock),e.htmlInline);this.customConvertorKeys=Object.keys(e).concat(Object.keys(r)),this.renderer=new Wd({gfm:!0,convertors:o(o({},n),r)}),this.convertors=this.renderer.getConvertors();}return t.prototype.generateTokens=function(t){var e=function(t){var e=t.attrs,n=t.type.name,r={type:n,wysiwygNode:!0,literal:!av(n)&&sv(t)?t.textContent:null},i={heading:{level:e.level},link:{destination:e.linkUrl,title:e.title},image:{destination:e.imageUrl},codeBlock:{info:e.language},bulletList:{type:"list",listData:{type:"bullet"}},orderedList:{type:"list",listData:{type:"ordered",start:e.order}},listItem:{type:"item",listData:{task:e.task,checked:e.checked}},tableHeadCell:{type:"tableCell",cellType:"head",align:e.align},tableBodyCell:{type:"tableCell",cellType:"body",align:e.align},customBlock:{info:e.info}}[n],s=o(o({},r),i),a=t.attrs,c=a.htmlAttrs,l=a.childrenHTML;return c?o(o({},s),{attrs:c,childrenHTML:l}):s;}(t),n={entering:!0,leaf:!!sv(t)&&t.isLeaf,options:this.renderer.getOptions(),getChildrenText:function(){return sv(t)?t.textContent:"";},skipChildren:function(){return!1;}},r=this.convertors[t.type.name],i=r(e,n,this.convertors),s=ra()(i)?i:[i];return(av(t.type.name)||t.attrs.htmlInline)&&(n.entering=!1,s.push({type:"text",content:sv(t)?t.textContent:""}),s=s.concat(r(e,n,this.convertors))),s;},t.prototype.toDOMNode=function(t){var e=this.generateTokens(t),n=[];return e.forEach(function(t){return cv[t.type](t,n);}),n[0];},t.prototype.getToDOMNode=function(t){return te(this.customConvertorKeys,t)?this.toDOMNode.bind(this):null;},t;}(),uv=null,pv=null;
function dv(t,e){var n=e.syncScrollTop,r=e.releaseEventBlock;pv&&clearTimeout(pv),n(t),pv=setTimeout(function(){r();},15);}
var fv=function(){function t(t,e,n){this.latestEditorScrollTop=null,this.latestPreviewScrollTop=null,this.blockedScroll=null,this.active=!0,this.timer=null;var r=e.previewContent,o=e.el;this.previewRoot=r,this.previewEl=o,this.mdEditor=t,this.editorView=t.view,this.toastMark=t.getToastMark(),this.eventEmitter=n,this.addScrollSyncEvent();}return t.prototype.addScrollSyncEvent=function(){var t=this;this.eventEmitter.listen("afterPreviewRender",function(){t.clearTimer(),t.timer=setTimeout(function(){t.syncPreviewScrollTop(!0);},200);}),this.eventEmitter.listen("scroll",function(e,n){t.active&&("editor"===e&&"editor"!==t.blockedScroll?t.syncPreviewScrollTop():"preview"===e&&"preview"!==t.blockedScroll&&t.syncEditorScrollTop(n));}),this.eventEmitter.listen("toggleScrollSync",function(e){t.active=e;});},t.prototype.getMdNodeAtPos=function(t,e){var n=t.content.findIndex(e.pos).index;return this.toastMark.findFirstNodeAtLine(n+1);},t.prototype.getScrollTopByCaretPos=function(){var t=this.mdEditor.getSelection(),e=this.toastMark.findFirstNodeAtLine(t[0][0]),n=this.previewEl.clientHeight,r=mf(this.previewRoot,e).el,o=(ff(r,this.previewRoot)||r.offsetTop)+r.clientHeight-.5*n;return this.latestEditorScrollTop=null,r.getBoundingClientRect().top-this.previewEl.getBoundingClientRect().top<n?null:o;},t.prototype.syncPreviewScrollTop=function(t){void 0===t&&(t=!1);var e=this,n=e.editorView,r=e.previewEl,o=e.previewRoot,i=n.dom.getBoundingClientRect(),s=i.left,a=i.top,c=n.posAtCoords({left:s,top:a}),l=n.state.doc,u=this.getMdNodeAtPos(l,c);if(u&&!function(t){var e=t.type;return"htmlBlock"===e||"htmlInline"===e;}(u)){
var p=r.scrollTop,d=n.dom,f=d.scrollTop,h=d.scrollHeight,m=d.clientHeight,v=d.children,g=h-f<=m+18,y=g?r.scrollHeight:0;
if(f&&!g){
if(t){
var b=this.getScrollTopByCaretPos();
if(!b)
return;
y=b;
}else
{
var w=mf(this.previewRoot,u),k=w.el,x=pf(l,w.mdNode,v),C=x.height,T=x.rect;
y=(ff(k,o)||k.offsetTop)+k.clientHeight*(a>T.top?Math.min((a-T.top)/C,1):0);
}
y=this.getResolvedScrollTop("editor",f,y,p),this.latestEditorScrollTop=f;
}
y!==p&&this.run("editor",y,p);
}},t.prototype.syncEditorScrollTop=function(t){var e=this,n=e.toastMark,r=e.editorView,o=e.previewRoot,i=e.previewEl,s=r.dom,a=r.state,c=i.scrollTop,l=i.clientHeight,u=i.scrollHeight-c<=l,p=s.scrollTop,d=u?s.scrollHeight:0;if(c&&t&&!u){
if(t=function(t,e){for(;!t.getAttribute("data-nodeid")&&t.parentElement!==e;)
t=t.parentElement;return t;}(t,o),!t.getAttribute("data-nodeid"))
return;
var f=s.children,h=Number(t.getAttribute("data-nodeid")),m=mf(this.previewRoot,n.findNodeById(h)),v=m.mdNode,g=m.el;
d=f[Os(v)-1].offsetTop;
var y=pf(a.doc,v,f).height,b=yf(g,o,h),w=b.nodeHeight;
d+=function(t,e,n,r){return Math.min((t-e)/n,1)*r;}(c,b.offsetTop,w,y),d=this.getResolvedScrollTop("preview",c,d,p),this.latestPreviewScrollTop=c;
}d!==p&&this.run("preview",d,p);},t.prototype.getResolvedScrollTop=function(t,e,n,r){var o="editor"===t?this.latestEditorScrollTop:this.latestPreviewScrollTop;return null===o?n:o<e?Math.max(n,r):Math.min(n,r);},t.prototype.run=function(t,e,n){var r,o=this;"editor"===t?(r=this.previewEl,this.blockedScroll="preview"):(r=this.editorView.dom,this.blockedScroll="editor"),function(t,e,n){var r=e-t,o=Date.now(),i=function(){var s,a=(Date.now()-o)/100;uv&&clearTimeout(uv),a<1?(s=t+r*Math.cos((1-a)*Math.PI/2),dv(Math.ceil(s),n),uv=setTimeout(i,1)):(dv(e,n),uv=null);};i();}(n,e,{syncScrollTop:function(t){return r.scrollTop=t;},releaseEventBlock:function(){return o.blockedScroll=null;}});},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null);},t.prototype.destroy=function(){this.clearTimer(),this.eventEmitter.removeEventHandler("scroll"),this.eventEmitter.removeEventHandler("afterPreviewRender");},t;}(),hv={getPopupInitialValues:function(t,e){return"link"===e.popupName?{linkText:t.getSelectedText()}:{};}};
var mv=function(){function t(t){var e=this;this.initialHTML=t.el.innerHTML,t.el.innerHTML="",this.options=Et()({previewStyle:"tab",previewHighlight:!0,initialEditType:"markdown",height:"300px",minHeight:"200px",language:"en-US",useCommandShortcut:!0,usageStatistics:!0,toolbarItems:[["heading","bold","italic","strike"],["hr","quote"],["ul","ol","task","indent","outdent"],["table","image","link"],["code","codeblock"],["scrollSync"]],hideModeSwitch:!1,linkAttributes:null,extendedAutolinks:!1,customHTMLRenderer:null,customMarkdownRenderer:null,referenceDefinition:!1,customHTMLSanitizer:null,frontMatter:!1,widgetRules:[],theme:"light",autofocus:!0},t);var n=this.options,r=n.customHTMLRenderer,i=n.extendedAutolinks,s=n.referenceDefinition,a=n.frontMatter,c=n.customMarkdownRenderer,l=n.useCommandShortcut,u=n.initialEditType,p=n.widgetRules,d=n.customHTMLSanitizer;this.mode=u||"markdown",this.mdPreviewStyle=this.options.previewStyle,this.i18n=ch,this.i18n.setCode(this.options.language),this.eventEmitter=new Nm(),Xs(p);var f=re(this.options.linkAttributes);this.pluginInfo=rv(this.options.plugins,this.eventEmitter,this.options.usageStatistics);var h=this.pluginInfo,m=h.toHTMLRenderers,v=h.toMarkdownRenderers,g=h.mdPlugins,y=h.wwPlugins,b=h.wwNodeViews,w=h.mdCommands,k=h.wwCommands,x=h.markdownParsers,C={linkAttributes:f,customHTMLRenderer:de(m,r),extendedAutolinks:i,referenceDefinition:s,frontMatter:a,sanitizer:d||Qd},T=new lv(f,C.customHTMLRenderer),M=function(t,e,n){var r={nodes:{},marks:{}};return["htmlBlock","htmlInline"].forEach(function(o){t[o]&&Object.keys(t[o]).forEach(function(t){var i="htmlBlock"===o?"nodes":"marks";Xd(t),r[i][t]=rf[o](t,e,n);});}),r;}(C.customHTMLRenderer,C.sanitizer,T);this.toastMark=new zd("",{disallowedHtmlBlockTags:["br","img"],extendedAutolinks:i,referenceDefinition:s,disallowDeepHeading:!0,frontMatter:a,customParser:x}),this.mdEditor=new Ll(this.eventEmitter,{toastMark:this.toastMark,useCommandShortcut:l,mdPlugins:g}),this.preview=new kf(this.eventEmitter,o(o({},C),{isViewer:!1,highlight:this.options.previewHighlight})),this.wwEditor=new Cm(this.eventEmitter,{toDOMAdaptor:T,useCommandShortcut:l,htmlSchemaMap:M,linkAttributes:f,wwPlugins:y,wwNodeViews:b}),this.convertor=new nv(this.wwEditor.getSchema(),o(o({},v),c),af(f,C.customHTMLRenderer),this.eventEmitter),this.setMinHeight(this.options.minHeight),this.setHeight(this.options.height),this.setMarkdown(this.options.initialValue,!1),this.options.placeholder&&this.setPlaceholder(this.options.placeholder),this.options.initialValue||this.setHTML(this.initialHTML,!1),this.commandManager=new Dm(this.eventEmitter,this.mdEditor.commands,this.wwEditor.commands,function(){return e.mode;}),this.options.usageStatistics&&Vt()("editor","UA-129966929-1"),this.scrollSync=new fv(this.mdEditor,this.preview,this.eventEmitter),this.addInitEvent(),this.addInitCommand(w,k),function(t){t.eventEmitter.listen("query",function(e,n){return hv[e](t,n);});}(this),this.options.hooks&&Mt()(this.options.hooks,function(t,n){return e.addHook(n,t);}),this.options.events&&Mt()(this.options.events,function(t,n){return e.on(n,t);}),this.eventEmitter.emit("load",this),this.moveCursorToStart(this.options.autofocus);}return t.prototype.addInitEvent=function(){var t=this;this.on("needChangeMode",this.changeMode.bind(this)),this.on("loadUI",function(){if("auto"!==t.height){
var e=Math.min(parseInt(t.minHeight,10),parseInt(t.height,10)-75)+"px";
t.setMinHeight(e);
}}),function(t){t.listen("addImageBlobHook",function(t,e){var n=new FileReader();n.onload=function(t){var n=t.target;return e(n.result);},n.readAsDataURL(t);});}(this.eventEmitter);},t.prototype.addInitCommand=function(t,e){var n=this,r=function(t,e){Object.keys(e).forEach(function(r){n.addCommand(t,r,e[r]);});};this.addCommand("markdown","toggleScrollSync",function(t){return n.eventEmitter.emit("toggleScrollSync",t.active),!0;}),r("markdown",t),r("wysiwyg",e);},t.prototype.getCurrentModeEditor=function(){return this.isMarkdownMode()?this.mdEditor:this.wwEditor;},t.factory=function(e){return e.viewer?new iv(e):new t(e);},t.setLanguage=function(t,e){ch.setLanguage(t,e);},t.prototype.changePreviewStyle=function(t){this.mdPreviewStyle!==t&&(this.mdPreviewStyle=t,this.eventEmitter.emit("changePreviewStyle",t));},t.prototype.exec=function(t,e){this.commandManager.exec(t,e);},t.prototype.addCommand=function(t,e,n){var r=this;this.commandManager.addCommand(t,e,function(e){void 0===e&&(e={});var o=("markdown"===t?r.mdEditor:r.wwEditor).view;n(e,o.state,o.dispatch,o);});},t.prototype.on=function(t,e){this.eventEmitter.listen(t,e);},t.prototype.off=function(t){this.eventEmitter.removeEventHandler(t);},t.prototype.addHook=function(t,e){this.eventEmitter.removeEventHandler(t),this.eventEmitter.listen(t,e);},t.prototype.removeHook=function(t){this.eventEmitter.removeEventHandler(t);},t.prototype.focus=function(){this.getCurrentModeEditor().focus();},t.prototype.blur=function(){this.getCurrentModeEditor().blur();},t.prototype.moveCursorToEnd=function(t){void 0===t&&(t=!0),this.getCurrentModeEditor().moveCursorToEnd(t);},t.prototype.moveCursorToStart=function(t){void 0===t&&(t=!0),this.getCurrentModeEditor().moveCursorToStart(t);},t.prototype.setMarkdown=function(t,e){if(void 0===t&&(t=""),void 0===e&&(e=!0),this.mdEditor.setMarkdown(t,e),this.isWysiwygMode()){
var n=this.toastMark.getRootNode(),r=this.convertor.toWysiwygModel(n);
this.wwEditor.setModel(r,e);
}},t.prototype.setHTML=function(t,e){void 0===t&&(t=""),void 0===e&&(e=!0);var n=document.createElement("div");n.innerHTML=function(t){var e=t.replace(/<p><br\s*\/*><\/p>/gi,"<p></p>"),n=new RegExp(pa,"ig"),r=e.match(n);return null==r||r.forEach(function(t,n){if(fa.test(t)){
var o=ma;
if(n){
var i=r[n-1].match(ua);
if(i&&!/br/i.test(i[1])){
var s=i[1];
o="</"+s+"><"+s+">";
}
}
e=e.replace(fa,o);
}}),e;}(t);var r=ut.fromSchema(this.wwEditor.schema).parse(n);this.isMarkdownMode()?this.mdEditor.setMarkdown(this.convertor.toMarkdownText(r),e):this.wwEditor.setModel(r,e);},t.prototype.getMarkdown=function(){return this.isMarkdownMode()?this.mdEditor.getMarkdown():this.convertor.toMarkdownText(this.wwEditor.getModel());},t.prototype.getHTML=function(){var t=this;return this.eventEmitter.holdEventInvoke(function(){if(t.isMarkdownMode()){
var e=t.toastMark.getRootNode(),n=t.convertor.toWysiwygModel(e);
t.wwEditor.setModel(n);
}}),this.wwEditor.view.dom.innerHTML;},t.prototype.insertText=function(t){this.getCurrentModeEditor().replaceSelection(t);},t.prototype.setSelection=function(t,e){this.getCurrentModeEditor().setSelection(t,e);},t.prototype.replaceSelection=function(t,e,n){this.getCurrentModeEditor().replaceSelection(t,e,n);},t.prototype.deleteSelection=function(t,e){this.getCurrentModeEditor().deleteSelection(t,e);},t.prototype.getSelectedText=function(t,e){return this.getCurrentModeEditor().getSelectedText(t,e);},t.prototype.getRangeInfoOfNode=function(t){return this.getCurrentModeEditor().getRangeInfoOfNode(t);},t.prototype.addWidget=function(t,e,n){this.getCurrentModeEditor().addWidget(t,e,n);},t.prototype.replaceWithWidget=function(t,e,n){this.getCurrentModeEditor().replaceWithWidget(t,e,n);},t.prototype.setHeight=function(t){var e=this.options.el;Pt()(t)&&("auto"===t?At()(e,"auto-height"):It()(e,"auto-height"),this.setMinHeight(this.getMinHeight())),Ot()(e,{height:t}),this.height=t;},t.prototype.getHeight=function(){return this.height;},t.prototype.setMinHeight=function(t){if(t!==this.minHeight){
var e=this.height||this.options.height;
"auto"!==e&&this.options.el.querySelector("."+ya("main"))&&(t=Math.min(parseInt(t,10),parseInt(e,10)-75)+"px");
var n=parseInt(t,10);
this.minHeight=t,this.wwEditor.setMinHeight(n),this.mdEditor.setMinHeight(n),this.preview.setMinHeight(n);
}},t.prototype.getMinHeight=function(){return this.minHeight;},t.prototype.isMarkdownMode=function(){return"markdown"===this.mode;},t.prototype.isWysiwygMode=function(){return"wysiwyg"===this.mode;},t.prototype.isViewer=function(){return!1;},t.prototype.getCurrentPreviewStyle=function(){return this.mdPreviewStyle;},t.prototype.changeMode=function(t,e){if(this.mode!==t){
if(this.mode=t,this.isWysiwygMode()){
var n=this.toastMark.getRootNode(),r=this.convertor.toWysiwygModel(n);
this.wwEditor.setModel(r);
}else
{
r=this.wwEditor.getModel();
this.mdEditor.setMarkdown(this.convertor.toMarkdownText(r),!e);
}
if(this.eventEmitter.emit("removePopupWidget"),this.eventEmitter.emit("changeMode",t),!e){
var o=this.convertor.getMappedPos();
this.focus(),this.isWysiwygMode()&&Ft()(o)?this.wwEditor.setSelection(o):Array.isArray(o)&&this.mdEditor.setSelection(o);
}
}},t.prototype.destroy=function(){var t=this;this.wwEditor.destroy(),this.mdEditor.destroy(),this.preview.destroy(),this.scrollSync.destroy(),this.eventEmitter.emit("destroy"),this.eventEmitter.getEvents().forEach(function(e,n){return t.off(n);});},t.prototype.hide=function(){this.eventEmitter.emit("hide");},t.prototype.show=function(){this.eventEmitter.emit("show");},t.prototype.setScrollTop=function(t){this.getCurrentModeEditor().setScrollTop(t);},t.prototype.getScrollTop=function(){return this.getCurrentModeEditor().getScrollTop();},t.prototype.reset=function(){this.wwEditor.setModel([]),this.mdEditor.setMarkdown("");},t.prototype.getSelection=function(){return this.getCurrentModeEditor().getSelection();},t.prototype.setPlaceholder=function(t){this.mdEditor.setPlaceholder(t),this.wwEditor.setPlaceholder(t);},t.prototype.getEditorElements=function(){return{mdEditor:this.mdEditor.getElement(),mdPreview:this.preview.getElement(),wwEditor:this.wwEditor.getElement()};},t;}(),vv=mv;
var gv=n(326),yv=n.n(gv),bv=function(){function t(t){this.current=t,this.root=t,this.entering=!0;}return t.prototype.walk=function(){var t=this.entering,e=this.current;return e?(t?e.firstChild?(this.current=e.firstChild,this.entering=!0):this.entering=!1:e===this.root?this.current=null:e.next?(this.current=e.next,this.entering=!0):(this.current=e.parent,this.entering=!1),{vnode:e,entering:t}):null;},t;}(),wv=function(){function t(t,e,n){this.parent=null,this.old=null,this.firstChild=null,this.next=null,this.skip=!1,this.type=t,this.props=e,this.children=n,this.props.children=n,e.ref&&(this.ref=e.ref,delete e.ref),e.key&&(this.key=e.key,delete e.key);}return t.prototype.walker=function(){return new bv(this);},t.removalNodes=[],t;}();
function kv(t,e){var n,r=t;yv()(t)||null==t?r=null:(Pt()(t)||Ft()(t))&&(n=String(t),r=new wv("TEXT_NODE",{nodeValue:n},[])),r&&e.push(r);}
var xv=function(t){for(var e,n,r=arguments,o=1,i="",s="",a=[0],c=function(t){1===o&&(t||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?a.push(t?r[t]:i):3===o&&(t||i)?(a[1]=t?r[t]:i,o=2):2===o&&"..."===i&&t?a[2]=me(a[2]||{},r[t]):2===o&&i&&!t?(a[2]=a[2]||{})[i]=!0:o>=5&&(5===o?((a[2]=a[2]||{})[n]=t?i?i+r[t]:r[t]:i,o=6):(t||i)&&(a[2][n]+=t?i+r[t]:i)),i="";},l=0;l<t.length;l++){
l&&(1===o&&c(),c(l));
for(var u=0;u<t[l].length;u++)
e=t[l][u],1===o?"<"===e?(c(),a=[a,"",null],o=3):i+=e:4===o?"--"===i&&">"===e?(o=1,i=""):i=e+i[0]:s?e===s?s="":i+=e:'"'===e||"'"===e?s=e:">"===e?(c(),o=1):o&&("="===e?(o=5,n=i,i=""):"/"===e&&(o<5||">"===t[l][u+1])?(c(),3===o&&(a=a[0]),o=a,(a=a[0]).push(this.apply(null,o.slice(1))),o=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(c(),o=2):i+=e),3===o&&"!--"===i&&(o=4,a=a[0]);
}return c(),a.length>2?a.slice(1):a[1];}.bind(function(t,e){for(var n=[],r=2;r<arguments.length;r++)
n[r-2]=arguments[r];var o=[];return n.forEach(function(t){Array.isArray(t)?t.forEach(function(t){kv(t,o);}):kv(t,o);}),new wv(t,e||{},o);}),Cv=n(73),Tv=n.n(Cv);
function Mv(t){var e;return"TEXT_NODE"===t.type?e=document.createTextNode(t.props.nodeValue):Ov(e=document.createElement(t.type),{},t.props),e;}
function Sv(t,e){t.node?e.removeChild(t.node):Sv(t.firstChild,e);}
function Ev(t,e,n){Object.keys(e).forEach(function(r){if(/^on/.test(r)){
if(!n[r]||e[r]!==n[r]){
var o=r.slice(2).toLowerCase();
t.removeEventListener(o,e[r]);
}
}else

"children"===r||n[r]||function(t){return(null==t?void 0:t.nodeType)===Node.TEXT_NODE;}(t)||t.removeAttribute(r);}),Ov(t,e,n,function(t){return!le(e[t],n[t]);});}
var Nv=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function Ov(t,e,n,r){Object.keys(n).forEach(function(o){if(!r||r(o))
if(/^on/.test(o)){
var i=o.slice(2).toLowerCase();
t.addEventListener(i,n[o]);
}else

"nodeValue"===o?t[o]=n[o]:"style"===o&&Tv()(n[o])?function(t,e,n){e&&Object.keys(e).forEach(function(e){t.style[e]="";});Object.keys(n).forEach(function(e){var r=n[e];t.style[e]=Ft()(r)&&!Nv.test(e)?r+"px":r;});}(t,e[o],n[o]):"children"!==o&&(!1===n[o]?t.removeAttribute(o):t.setAttribute(o,n[o]));});}
function Dv(t){if(wv.removalNodes.forEach(function(t){return Lv(t);}),t)
for(var e=void 0,n=t.walker();e=n.walk();)
if(t=e.vnode,e.entering)
Lv(t);else
if(Va()(t.type)){
var r=t.component;
if(!t.old&&r.mounted&&r.mounted(),t.old&&r.updated){
var o=r.prevProps||{};
r.updated(o);
}
}}
function Av(t){for(var e=t.parent;!e.node;)
e=e.parent;return e.node;}
function Lv(t){if(t&&t.parent){
if(t.node){
var e=Av(t);
"A"===t.effect?e.appendChild(t.node):"U"===t.effect&&Ev(t.node,t.old.props,t.props);
}
if("D"===t.effect)
for(var n=void 0,r=t.walker();n=r.walk();)
if(t=n.vnode,!n.entering)
if(Va()(t.type)){
var o=t.component;
o.beforeDestroy&&o.beforeDestroy();
}else
{
Sv(t,e=Av(t));
}
t.ref&&(t.component?t.ref(t.component):t.node&&t.ref(t.node));
}}
function Iv(t,e){var n=e.props,r=e.component;return r?(r.prevProps=r.props,r.props=e.props,r):new t(n);}
function Rv(t){for(var e=t;t&&!t.skip;){
if(Va()(t.type)){
var n=Iv(t.type,t);
n.vnode=t,t.component=n,t.props.children=t.children=[n.render()],Pv(t);
}else

t.node||(t.node=Mv(t)),Pv(t);
if(t.firstChild)
t=t.firstChild;else
{
for(;t&&t.parent&&!t.next&&(t=t.parent)!==e;)
;
t=t.next;
}
}}
function Pv(t){var e=t.children,n=t.old?t.old.firstChild:null,r=null;e.forEach(function(e,o){var i=function(t,e){return t&&e&&e.type===t.type&&(!e.key||e.key===t.key);}(n,e);i&&(e.old=n,e.parent=t,e.node=n.node,e.component=n.component,e.effect="U"),e&&!i&&(e.old=null,e.parent=t,e.node=null,e.effect="A"),n&&!i&&(wv.removalNodes.push(n),n.effect="D"),n&&(n=n.next),0===o?t.firstChild=e:e&&(r.next=e),r=e;});var o=ue(e);if(!e.length)
for(;n;)
wv.removalNodes.push(n),n.effect="D",n=n.next;for(;n&&o;)
n&&o.old!==n&&(wv.removalNodes.push(n),n.effect="D",n=n.next);}
function Bv(t,e){var n=new wv(t.tagName.toLowerCase(),{},[e]);return n.node=t,wv.removalNodes=[],Rv(n),Dv(n),function(){return function(t){t.effect="D",wv.removalNodes=[t],Dv(),wv.removalNodes=[];}(n.firstChild);};}
var Fv,Hv=function(){function t(t){this.props=t,this.state={},this.refs={};}return t.prototype.setState=function(t){var e=o(o({},this.state),t);le(this.state,e)||(this.state=e,function(t){var e=t.vnode;e.effect="U",e.old=e,e.next&&(e.next.skip=!0),wv.removalNodes=[],Rv(e),Dv(e),e.next&&(e.next.skip=!1);}(this));},t;}(),zv=function(t){function n(e){var n=t.call(this,e)||this;return n.state={hide:!1},n;}return e(n,t),n.prototype.show=function(){this.setState({hide:!1});},n.prototype.hide=function(){this.setState({hide:!0});},n.prototype.render=function(){var t=this.props,e=t.editorType,n=t.eventEmitter;return xv(Fv||(Fv=s(['\n      <div class="','" style="display: ','">\n        <div\n          class="tab-item','"\n          onClick=',"\n        >\n          ",'\n        </div>\n        <div\n          class="tab-item','"\n          onClick=',"\n        >\n          ","\n        </div>\n      </div>\n    "],['\n      <div class="','" style="display: ','">\n        <div\n          class="tab-item','"\n          onClick=',"\n        >\n          ",'\n        </div>\n        <div\n          class="tab-item','"\n          onClick=',"\n        >\n          ","\n        </div>\n      </div>\n    "])),ya("mode-switch"),this.state.hide?"none":"block","markdown"===e?" active":"",function(){n.emit("needChangeMode","markdown");},ch.get("Markdown"),"wysiwyg"===e?" active":"",function(){n.emit("needChangeMode","wysiwyg");},ch.get("WYSIWYG"));},n;}(Hv),jv=n(423),_v=n.n(jv),qv=function(){if("undefined"!=typeof Map)
return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0);}),n;}return function(){function e(){this.__entries__=[];}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length;},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1];},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n]);},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1);},e.prototype.has=function(e){return!!~t(this.__entries__,e);},e.prototype.clear=function(){this.__entries__.splice(0);},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){
var o=r[n];
t.call(e,o[1],o[0]);
}},e;}();}(),Vv="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,$v=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Uv="function"==typeof requestAnimationFrame?requestAnimationFrame.bind($v):function(t){return setTimeout(function(){return t(Date.now());},1e3/60);};
var Wv=["top","right","bottom","left","width","height","size","weight"],Jv="undefined"!=typeof MutationObserver,Gv=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function i(){n&&(n=!1,t()),r&&a();}function s(){Uv(i);}function a(){var t=Date.now();if(n){
if(t-o<2)
return;
r=!0;
}else

n=!0,r=!1,setTimeout(s,e);o=t;}return a;}(this.refresh.bind(this),20);}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_();},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_();},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh();},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive();});return t.forEach(function(t){return t.broadcastActive();}),t.length>0;},t.prototype.connect_=function(){Vv&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Jv?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0);},t.prototype.disconnect_=function(){Vv&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1);},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e,r=Wv.some(function(t){return!!~n.indexOf(t);});r&&this.refresh();},t.getInstance=function(){return this.instance_||(this.instance_=new t()),this.instance_;},t.instance_=null,t;}(),Kv=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){
var o=r[n];
Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0});
}return t;},Zv=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||$v;},Xv=rg(0,0,0,0);
function Qv(t){return parseFloat(t)||0;}
function Yv(t){for(var e=[],n=1;n<arguments.length;n++)
e[n-1]=arguments[n];return e.reduce(function(e,n){return e+Qv(t["border-"+n+"-width"]);},0);}
function tg(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)
return Xv;var r=Zv(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){
var o=r[n],i=t["padding-"+o];
e[o]=Qv(i);
}return e;}(r),i=o.left+o.right,s=o.top+o.bottom,a=Qv(r.width),c=Qv(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==e&&(a-=Yv(r,"left","right")+i),Math.round(c+s)!==n&&(c-=Yv(r,"top","bottom")+s)),!function(t){return t===Zv(t).document.documentElement;}(t)){
var l=Math.round(a+i)-e,u=Math.round(c+s)-n;
1!==Math.abs(l)&&(a-=l),1!==Math.abs(u)&&(c-=u);
}return rg(o.left,o.top,a,c);}
var eg="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof Zv(t).SVGGraphicsElement;}:function(t){return t instanceof Zv(t).SVGElement&&"function"==typeof t.getBBox;};
function ng(t){return Vv?eg(t)?function(t){var e=t.getBBox();return rg(0,0,e.width,e.height);}(t):tg(t):Xv;}
function rg(t,e,n,r){return{x:t,y:e,width:n,height:r};}
var og=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=rg(0,0,0,0),this.target=t;}return t.prototype.isActive=function(){var t=ng(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight;},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t;},t;}(),ig=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,o=t.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(i.prototype);return Kv(s,{x:e,y:n,width:r,height:o,top:n,right:e+r,bottom:o+n,left:e}),s;}(e);Kv(this,{target:t,contentRect:n});},sg=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new qv(),"function"!=typeof t)
throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n;}return t.prototype.observe=function(t){if(!arguments.length)
throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){
if(!(t instanceof Zv(t).Element))
throw new TypeError('parameter 1 is not of type "Element".');
var e=this.observations_;
e.has(t)||(e.set(t,new og(t)),this.controller_.addObserver(this),this.controller_.refresh());
}},t.prototype.unobserve=function(t){if(!arguments.length)
throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){
if(!(t instanceof Zv(t).Element))
throw new TypeError('parameter 1 is not of type "Element".');
var e=this.observations_;
e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this));
}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this);},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e);});},t.prototype.broadcastActive=function(){if(this.hasActive()){
var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new ig(t.target,t.broadcastRect());});
this.callback_.call(t,e,t),this.clearActive();
}},t.prototype.clearActive=function(){this.activeObservations_.splice(0);},t.prototype.hasActive=function(){return this.activeObservations_.length>0;},t;}(),ag="undefined"!=typeof WeakMap?new WeakMap():new qv(),cg=function t(e){if(!(this instanceof t))
throw new TypeError("Cannot call a class as a function.");if(!arguments.length)
throw new TypeError("1 argument required, but only 0 present.");var n=Gv.getInstance(),r=new sg(e,n,this);ag.set(this,r);};
["observe","unobserve","disconnect"].forEach(function(t){cg.prototype[t]=function(){var e;return(e=ag.get(this))[t].apply(e,arguments);};});
var lg,ug,pg,dg,fg,hg,mg,vg,gg,yg,bg,wg,kg,xg,Cg,Tg,Mg=void 0!==$v.ResizeObserver?$v.ResizeObserver:cg,Sg=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),n.prototype.execCommand=function(t){var e=Ma(t.target,"li");this.props.execCommand("heading",{level:Number(e.getAttribute("data-level"))});},n.prototype.render=function(){var t=this;return xv(ug||(ug=s(["\n      <ul\n        onClick=",'\n        aria-role="menu"\n        aria-label="','"\n      >\n        ','\n        <li data-type="Paragraph" aria-role="menuitem">\n          <div>',"</div>\n        </li>\n      </ul>\n    "],["\n      <ul\n        onClick=",'\n        aria-role="menu"\n        aria-label="','"\n      >\n        ','\n        <li data-type="Paragraph" aria-role="menuitem">\n          <div>',"</div>\n        </li>\n      </ul>\n    "])),function(e){return t.execCommand(e);},ch.get("Headings"),[1,2,3,4,5,6].map(function(t){return xv(lg||(lg=s(['\n              <li data-level="','" data-type="Heading" aria-role="menuitem">\n                <',">"," ","</$>\n              </li>\n            "],['\n              <li data-level="','" data-type="Heading" aria-role="menuitem">\n                <',">"," ","</$>\n              </li>\n            "])),t,"h"+t,ch.get("Heading"),t);}),ch.get("Paragraph"));},n;}(Hv),Eg=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),n.prototype.toggleTab=function(t,e){this.props.onClick(t,e);},n.prototype.render=function(){var t=this;return xv(dg||(dg=s(['\n      <div class="','" aria-role="tabpanel">\n        ',"\n      </div>\n    "],['\n      <div class="','" aria-role="tabpanel">\n        ',"\n      </div>\n    "])),ya("tabs"),this.props.tabs.map(function(e){var n=e.name,r=e.text,o=t.props.activeTab===n;return xv(pg||(pg=s(['\n            <div\n              class="tab-item','"\n              onClick=','\n              aria-role="tab"\n              aria-label="','"\n              aria-selected="','"\n              tabindex="','"\n            >\n              ',"\n            </div>\n          "],['\n            <div\n              class="tab-item','"\n              onClick=','\n              aria-role="tab"\n              aria-label="','"\n              aria-selected="','"\n              tabindex="','"\n            >\n              ',"\n            </div>\n          "])),o?" active":"",function(e){return t.toggleTab(e,n);},ch.get(r),o?"true":"false",o?"0":"-1",ch.get(r));}));},n;}(Hv),Ng=function(t){function n(e){var n=t.call(this,e)||this;return n.initialize=function(t){void 0===t&&(t="file");var e=n.refs.url;e.value="",n.refs.altText.value="",n.refs.file.value="",It()(e,"wrong"),n.setState({activeTab:t,file:null,fileNameElClassName:""});},n.execCommand=function(){"file"===n.state.activeTab?n.emitAddImageBlob():n.emitAddImage();},n.toggleTab=function(t,e){e!==n.state.activeTab&&n.initialize(e);},n.showFileSelectBox=function(){n.refs.file.click();},n.changeFile=function(t){var e=t.target.files;(null==e?void 0:e.length)&&n.setState({file:e[0]});},n.state={activeTab:"file",file:null,fileNameElClassName:""},n.tabs=[{name:"file",text:"File"},{name:"url",text:"URL"}],n;}return e(n,t),n.prototype.emitAddImageBlob=function(){var t=this,e=this.refs.file.files,n=this.refs.altText,r=" wrong";if(null==e?void 0:e.length){
r="";
var o=e.item(0);
this.props.eventEmitter.emit("addImageBlobHook",o,function(e,r){return t.props.execCommand("addImage",{imageUrl:e,altText:r||n.value});},"ui");
}this.setState({fileNameElClassName:r});},n.prototype.emitAddImage=function(){var t=this.refs.url,e=this.refs.altText,n=t.value,r=e.value||"image";It()(t,"wrong"),n.length?n&&this.props.execCommand("addImage",{imageUrl:n,altText:r}):At()(t,"wrong");},n.prototype.preventSelectStart=function(t){t.preventDefault();},n.prototype.updated=function(){this.props.show||this.initialize();},n.prototype.render=function(){var t=this,e=this.state,n=e.activeTab,r=e.file,o=e.fileNameElClassName;return xv(fg||(fg=s(['\n      <div aria-label="','">\n        <'," tabs="," activeTab="," onClick=",' />\n        <div style="display:','">\n          <label for="toastuiImageUrlInput">','</label>\n          <input\n            id="toastuiImageUrlInput"\n            type="text"\n            ref=','\n          />\n        </div>\n        <div style="display:',';position: relative;">\n          <label for="toastuiImageFileInput">','</label>\n          <span\n            class="',"",'"\n            onClick=',"\n            onSelectstart=","\n          >\n            ",'\n          </span>\n          <button\n            type="button"\n            class="','"\n            onClick=',"\n          >\n            ",'\n          </button>\n          <input\n            id="toastuiImageFileInput"\n            type="file"\n            accept="image/*"\n            onChange=',"\n            ref=",'\n          />\n        </div>\n        <label for="toastuiAltTextInput">','</label>\n        <input\n          id="toastuiAltTextInput"\n          type="text"\n          ref=','\n        />\n        <div class="','">\n          <button type="button" class="','" onClick=',">\n            ",'\n          </button>\n          <button type="button" class="','" onClick=',">\n            ","\n          </button>\n        </div>\n      </div>\n    "],['\n      <div aria-label="','">\n        <'," tabs="," activeTab="," onClick=",' />\n        <div style="display:','">\n          <label for="toastuiImageUrlInput">','</label>\n          <input\n            id="toastuiImageUrlInput"\n            type="text"\n            ref=','\n          />\n        </div>\n        <div style="display:',';position: relative;">\n          <label for="toastuiImageFileInput">','</label>\n          <span\n            class="',"",'"\n            onClick=',"\n            onSelectstart=","\n          >\n            ",'\n          </span>\n          <button\n            type="button"\n            class="','"\n            onClick=',"\n          >\n            ",'\n          </button>\n          <input\n            id="toastuiImageFileInput"\n            type="file"\n            accept="image/*"\n            onChange=',"\n            ref=",'\n          />\n        </div>\n        <label for="toastuiAltTextInput">','</label>\n        <input\n          id="toastuiAltTextInput"\n          type="text"\n          ref=','\n        />\n        <div class="','">\n          <button type="button" class="','" onClick=',">\n            ",'\n          </button>\n          <button type="button" class="','" onClick=',">\n            ","\n          </button>\n        </div>\n      </div>\n    "])),ch.get("Insert image"),Eg,this.tabs,n,this.toggleTab,"url"===n?"block":"none",ch.get("Image URL"),function(e){return t.refs.url=e;},"file"===n?"block":"none",ch.get("Select image file"),ya("file-name"),r?" has-file":o,this.showFileSelectBox,this.preventSelectStart,r?r.name:ch.get("No file"),ya("file-select-button"),this.showFileSelectBox,ch.get("Choose a file"),this.changeFile,function(e){return t.refs.file=e;},ch.get("Description"),function(e){return t.refs.altText=e;},ya("button-container"),ya("close-button"),this.props.hidePopup,ch.get("Cancel"),ya("ok-button"),this.execCommand,ch.get("OK"));},n;}(Hv),Og=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.execCommand=function(){var t=e.refs.url,n=e.refs.text;(It()(t,"wrong"),It()(n,"wrong"),t.value.length<1)?At()(t,"wrong"):zt()(e.props.initialValues.linkUrl)&&n.value.length<1?At()(n,"wrong"):e.props.execCommand("addLink",{linkUrl:t.value,linkText:n.value});},e;}return e(n,t),n.prototype.initialize=function(){var t=this.props.initialValues,e=t.linkUrl,n=t.linkText,r=this.refs.url,o=this.refs.text;It()(r,"wrong"),It()(o,"wrong","disabled"),o.removeAttribute("disabled"),e&&(At()(o,"disabled"),o.setAttribute("disabled","disabled")),r.value=e||"",o.value=n||"";},n.prototype.mounted=function(){this.initialize();},n.prototype.updated=function(t){!t.show&&this.props.show&&this.initialize();},n.prototype.render=function(){var t=this;return xv(hg||(hg=s(['\n      <div aria-label="','">\n        <label for="toastuiLinkUrlInput">','</label>\n        <input\n          id="toastuiLinkUrlInput"\n          type="text"\n          ref=','\n        />\n        <label for="toastuiLinkTextInput">','</label>\n        <input\n          id="toastuiLinkTextInput"\n          type="text"\n          ref=','\n        />\n        <div class="','">\n          <button type="button" class="','" onClick=',">\n            ",'\n          </button>\n          <button type="button" class="','" onClick=',">\n            ","\n          </button>\n        </div>\n      </div>\n    "],['\n      <div aria-label="','">\n        <label for="toastuiLinkUrlInput">','</label>\n        <input\n          id="toastuiLinkUrlInput"\n          type="text"\n          ref=','\n        />\n        <label for="toastuiLinkTextInput">','</label>\n        <input\n          id="toastuiLinkTextInput"\n          type="text"\n          ref=','\n        />\n        <div class="','">\n          <button type="button" class="','" onClick=',">\n            ",'\n          </button>\n          <button type="button" class="','" onClick=',">\n            ","\n          </button>\n        </div>\n      </div>\n    "])),ch.get("Insert link"),ch.get("URL"),function(e){return t.refs.url=e;},ch.get("Link text"),function(e){return t.refs.text=e;},ya("button-container"),ya("close-button"),this.props.hidePopup,ch.get("Cancel"),ya("ok-button"),this.execCommand,ch.get("OK"));},n;}(Hv),Dg=function(t){function n(e){var n=t.call(this,e)||this;return n.extendSelectionRange=function(t){var e=t.pageX,r=t.pageY,i=e-n.offsetRect.left,s=r-n.offsetRect.top,a=n.getSelectionRangeByOffset(i,s);n.setState(o({},a));},n.execCommand=function(){n.props.execCommand("addTable",{rowCount:n.state.rowIdx+1,columnCount:n.state.colIdx+1});},n.state={rowIdx:-1,colIdx:-1},n;}return e(n,t),n.prototype.getDescription=function(){return-1===this.state.colIdx?"":this.state.colIdx+1+" x "+(this.state.rowIdx+1);},n.prototype.getBoundByRange=function(t,e){return{width:20*(t+1),height:20*(e+1)};},n.prototype.getRangeByOffset=function(t,e){return{colIdx:Math.floor(t/20),rowIdx:Math.floor(e/20)};},n.prototype.getTableRange=function(){var t=this.state,e=t.colIdx,n=t.rowIdx,r=Math.max(e,5),o=Math.max(n,5);return e>=5&&r<9&&(r+=1),n>=5&&o<14&&(o+=1),{colIdx:r+1,rowIdx:o+1};},n.prototype.getSelectionAreaBound=function(){var t=this.getBoundByRange(this.state.colIdx,this.state.rowIdx),e=t.width,n=t.height;return e||n?{width:e-1,height:n-1,display:"block"}:{display:"none"};},n.prototype.getSelectionRangeByOffset=function(t,e){var n=this.getRangeByOffset(t,e);return n.rowIdx=Math.min(Math.max(n.rowIdx,1),14),n.colIdx=Math.min(Math.max(n.colIdx,1),9),n;},n.prototype.updated=function(){if(this.props.show){
if(-1===this.state.colIdx&&-1===this.state.rowIdx){
var t=this.refs.tableEl.getBoundingClientRect(),e=t.left,n=t.top;
this.offsetRect={left:window.pageXOffset+e,top:window.pageYOffset+n};
}
}else

this.setState({colIdx:-1,rowIdx:-1});},n.prototype.createTableArea=function(t){for(var e=t.colIdx,n=t.rowIdx,r=[],o=0;o<n;o+=1){
for(var i=[],a=0;a<e;a+=1){
var c=ya("table-cell")+(o>0?"":" header");
i.push(xv(mg||(mg=s(['<div class="','"></div>'],['<div class="','"></div>'])),c));
}
r.push(xv(vg||(vg=s(['<div class="','">',"</div>"],['<div class="','">',"</div>"])),ya("table-row"),i));
}return xv(gg||(gg=s(['<div class="','">',"</div>"],['<div class="','">',"</div>"])),ya("table"),r);},n.prototype.render=function(){var t=this,e=this.getTableRange(),n=this.getSelectionAreaBound();return xv(yg||(yg=s(['\n      <div aria-label="','">\n        <div\n          class="','"\n          ref=',"\n          onMousemove=","\n          onClick=","\n        >\n          ",'\n          <div class="','" style=','></div>\n        </div>\n        <p class="','">',"</p>\n      </div>\n    "],['\n      <div aria-label="','">\n        <div\n          class="','"\n          ref=',"\n          onMousemove=","\n          onClick=","\n        >\n          ",'\n          <div class="','" style=','></div>\n        </div>\n        <p class="','">',"</p>\n      </div>\n    "])),ch.get("Insert table"),ya("table-selection"),function(e){return t.refs.tableEl=e;},this.extendSelectionRange,this.execCommand,this.createTableArea(e),ya("table-selection-layer"),n,ya("table-description"),this.getDescription());},n;}(Hv),Ag=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),n.prototype.mounted=function(){this.refs.el.appendChild(this.props.body);},n.prototype.updated=function(t){this.refs.el.replaceChild(this.props.body,t.body);},n.prototype.render=function(){var t=this;return xv(bg||(bg=s(["<div ref=","></div>"],["<div ref=","></div>"])),function(e){return t.refs.el=e;});},n;}(Hv);
function Lg(t){return Pt()(t)?function(t){var e;switch(t){
case"heading":
e={name:"heading",className:"heading",tooltip:ch.get("Headings"),state:"heading"};
break;
case"bold":
e={name:"bold",className:"bold",command:"bold",tooltip:ch.get("Bold"),state:"strong"};
break;
case"italic":
e={name:"italic",className:"italic",command:"italic",tooltip:ch.get("Italic"),state:"emph"};
break;
case"strike":
e={name:"strike",className:"strike",command:"strike",tooltip:ch.get("Strike"),state:"strike"};
break;
case"hr":
e={name:"hr",className:"hrline",command:"hr",tooltip:ch.get("Line"),state:"thematicBreak"};
break;
case"quote":
e={name:"quote",className:"quote",command:"blockQuote",tooltip:ch.get("Blockquote"),state:"blockQuote"};
break;
case"ul":
e={name:"ul",className:"bullet-list",command:"bulletList",tooltip:ch.get("Unordered list"),state:"bulletList"};
break;
case"ol":
e={name:"ol",className:"ordered-list",command:"orderedList",tooltip:ch.get("Ordered list"),state:"orderedList"};
break;
case"task":
e={name:"task",className:"task-list",command:"taskList",tooltip:ch.get("Task"),state:"taskList"};
break;
case"table":
e={name:"table",className:"table",tooltip:ch.get("Insert table"),state:"table"};
break;
case"image":
e={name:"image",className:"image",tooltip:ch.get("Insert image")};
break;
case"link":
e={name:"link",className:"link",tooltip:ch.get("Insert link")};
break;
case"code":
e={name:"code",className:"code",command:"code",tooltip:ch.get("Code"),state:"code"};
break;
case"codeblock":
e={name:"codeblock",className:"codeblock",command:"codeBlock",tooltip:ch.get("Insert CodeBlock"),state:"codeBlock"};
break;
case"indent":
e={name:"indent",className:"indent",command:"indent",tooltip:ch.get("Indent"),state:"indent"};
break;
case"outdent":
e={name:"outdent",className:"outdent",command:"outdent",tooltip:ch.get("Outdent"),state:"outdent"};
break;
case"scrollSync":
e=function(){var t=document.createElement("label"),e=document.createElement("input"),n=document.createElement("span");t.className="scroll-sync active",e.type="checkbox",e.checked=!0,n.className="switch";var r=function(n){return e.addEventListener("change",function(e){var r=e.target.checked;r?At()(t,"active"):It()(t,"active"),n("toggleScrollSync",{active:r});});};return t.appendChild(e),t.appendChild(n),{name:"scrollSync",el:t,onMounted:r};}();
break;
case"more":e={name:"more",className:"more",tooltip:ch.get("More")};
}"scrollSync"!==e.name&&(e.className+=" "+ya("toolbar-icons"));return e;}(t):t;}
function Ig(t,e){var n=e.el,r=e.pos,i=e.popup,a=e.initialValues;switch(t){
case"heading":return{render:function(t){return xv(wg||(wg=s(["<"," ..."," />"],["<"," ..."," />"])),Sg,t);},className:ya("popup-add-heading"),fromEl:n,pos:r};
case"link":return{render:function(t){return xv(kg||(kg=s(["<"," ..."," />"],["<"," ..."," />"])),Og,t);},className:ya("popup-add-link"),fromEl:n,pos:r,initialValues:a};
case"image":return{render:function(t){return xv(xg||(xg=s(["<"," ..."," />"],["<"," ..."," />"])),Ng,t);},className:ya("popup-add-image"),fromEl:n,pos:r};
case"table":return{render:function(t){return xv(Cg||(Cg=s(["<"," ..."," />"],["<"," ..."," />"])),Dg,t);},className:ya("popup-add-table"),fromEl:n,pos:r};
case"customPopupBody":return i?o({render:function(t){return xv(Tg||(Tg=s(["<"," ..."," body="," />"],["<"," ..."," body="," />"])),Ag,t,i.body);},fromEl:n,pos:r},i):null;
default:return null;
}}
function Rg(t){t.hidden=t.length===t.filter(function(t){return t.hidden;}).length;}
function Pg(t,e){return t.reduce(function(t,n){t.push(n.map(function(t){return function(t){return t.hidden="scrollSync"===t.name&&e,t;}(Lg(t));}));var r=t[(t.length||1)-1];return r&&Rg(r),t;},[]);}
var Bg,Fg,Hg=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleMousedown=function(t){Ma(t.target,"."+ya("popup"))||Ma(t.target,e.props.info.fromEl)||e.props.hidePopup();},e;}return e(n,t),n.prototype.mounted=function(){document.addEventListener("mousedown",this.handleMousedown),this.props.eventEmitter.listen("closePopup",this.props.hidePopup);},n.prototype.beforeDestroy=function(){document.removeEventListener("mousedown",this.handleMousedown);},n.prototype.updated=function(t){var e=this.props,n=e.show,r=e.info;if(n&&r.pos&&t.show!==n){
var i=o({},r.pos),s=this.refs.el.offsetWidth,a=Ma(this.refs.el,"."+ya("toolbar")).offsetWidth;
i.left+s>=a&&(i.left=a-s-20),le(this.state.popupPos,i)||this.setState({popupPos:i});
}},n.prototype.render=function(){var t=this,e=this.props,n=e.info,r=e.show,i=e.hidePopup,a=e.eventEmitter,c=e.execCommand,l=n||{},u=l.className,p=void 0===u?"":u,d=l.style,f=l.render,h=l.initialValues,m=void 0===h?{}:h,v=o(o({display:r?"block":"none"},d),this.state.popupPos);return xv(Bg||(Bg=s(['\n      <div\n        class="'," ",'"\n        style=',"\n        ref=",'\n        aria-role="dialog"\n      >\n        <div class="','">\n          ',"\n        </div>\n      </div>\n    "],['\n      <div\n        class="'," ",'"\n        style=',"\n        ref=",'\n        aria-role="dialog"\n      >\n        <div class="','">\n          ',"\n        </div>\n      </div>\n    "])),ya("popup"),p,v,function(e){return t.refs.el=e;},ya("popup-body"),f&&f({eventEmitter:a,show:r,hidePopup:i,execCommand:c,initialValues:m}));},n;}(Hv);
function zg(t){return function(n){function r(t){var e=n.call(this,t)||this;return e.showTooltip=function(t){var n=e.props.item.tooltip;if(!e.props.disabled&&n){
var r=e.getBound(t),o=r.left+6+"px",i=r.top+6+"px";
Ot()(e.props.tooltipRef.current,{display:"block",left:o,top:i}),e.props.tooltipRef.current.querySelector(".text").textContent=n;
}},e.hideTooltip=function(){Ot()(e.props.tooltipRef.current,"display","none");},e.state={active:!1,disabled:t.disabled},e.addEvent(),e;}return e(r,n),r.prototype.addEvent=function(){var t=this,e=this.props,n=e.item,r=e.eventEmitter;n.state&&r.listen("changeToolbarState",function(e){var r,o=null!==(r=e.toolbarState[n.state])&&void 0!==r?r:{},i=o.active,s=o.disabled;t.setState({active:!!i,disabled:null!=s?s:t.props.disabled});});},r.prototype.getBound=function(t){var e=Sa(t,Ma(t,"."+ya("toolbar"))),n=e.offsetLeft,r=e.offsetTop;return{left:n,top:t.offsetHeight+r};},r.prototype.render=function(){return xv(Fg||(Fg=s(["\n        <","\n          ...","\n          active=","\n          showTooltip=","\n          hideTooltip=","\n          getBound=","\n          disabled=","\n        />\n      "],["\n        <","\n          ...","\n          active=","\n          showTooltip=","\n          hideTooltip=","\n          getBound=","\n          disabled=","\n        />\n      "])),t,this.props,this.state.active,this.showTooltip,this.hideTooltip,this.getBound,this.state.disabled||this.props.disabled);},r;}(Hv);}
var jg,_g,qg,Vg,$g,Ug,Wg,Jg,Gg,Kg,Zg,Xg,Qg,Yg,ty=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.showTooltip=function(){e.props.showTooltip(e.refs.el);},e.execCommand=function(){var t=e.props,n=t.item,r=t.execCommand,o=t.setPopupInfo,i=t.getBound,s=t.eventEmitter,a=n.command,c=n.name,l=n.popup;if(a)
r(a);else
{
var u=l?"customPopupBody":c,p=s.emit("query","getPopupInitialValues",{popupName:u})[0],d=Ig(u,{el:e.refs.el,pos:i(e.refs.el),popup:l,initialValues:p});
d&&o(d);
}},e;}return e(n,t),n.prototype.mounted=function(){this.setItemWidth();},n.prototype.updated=function(t){t.item.name!==this.props.item.name&&this.setItemWidth();},n.prototype.setItemWidth=function(){var t=this.props,e=t.setItemWidth,n=t.item;e&&e(n.name,Ta(this.refs.el)+(n.hidden?80:0));},n.prototype.render=function(){var t=this,e=this.props,n=e.hideTooltip,r=e.disabled,i=e.item,a=e.active,c=o({display:i.hidden?"none":null},i.style),l=(i.className||"")+(a?" active":"");return xv(jg||(jg=s(["\n      <button\n        ref=",'\n        type="button"\n        style=',"\n        class=","\n        onClick=","\n        onMouseover=","\n        onMouseout=","\n        disabled=","\n        aria-label=","\n      >\n        ","\n      </button>\n    "],["\n      <button\n        ref=",'\n        type="button"\n        style=',"\n        class=","\n        onClick=","\n        onMouseover=","\n        onMouseout=","\n        disabled=","\n        aria-label=","\n      >\n        ","\n      </button>\n    "])),function(e){return t.refs.el=e;},c,l,this.execCommand,this.showTooltip,n,!!r,i.text||i.tooltip||"",i.text||"");},n;}(Hv),ey=zg(ty),ny=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.showTooltip=function(){e.props.showTooltip(e.refs.el);},e.showPopup=function(){var t=Ig("customPopupBody",{el:e.refs.el,pos:e.props.getBound(e.refs.el),popup:e.props.item.popup});t&&e.props.setPopupInfo(t);},e;}return e(n,t),n.prototype.mounted=function(){var t=this.props,e=t.setItemWidth,n=t.item;this.refs.el.appendChild(n.el),e&&e(n.name,Ta(this.refs.el)),n.onMounted&&n.onMounted(this.props.execCommand);},n.prototype.updated=function(t){var e,n=this.props,r=n.item,o=n.active,i=n.disabled;t.active===o&&t.disabled===i||null===(e=r.onUpdated)||void 0===e||e.call(r,{active:o,disabled:i});},n.prototype.render=function(){var t=this,e=this.props,n=e.disabled,r={display:e.item.hidden?"none":"inline-block"},o=function(t){return n?null:t;};return xv(_g||(_g=s(["\n      <div\n        ref=","\n        style=","\n        class=","\n        onClick=","\n        onMouseover=","\n        onMouseout=","\n      ></div>\n    "],["\n      <div\n        ref=","\n        style=","\n        class=","\n        onClick=","\n        onMouseover=","\n        onMouseout=","\n      ></div>\n    "])),function(e){return t.refs.el=e;},r,ya("toolbar-item-wrapper"),o(this.showPopup),o(this.showTooltip),o(this.props.hideTooltip));},n;}(Hv),ry=zg(ny),oy=function(t){function n(){return null!==t&&t.apply(this,arguments)||this;}return e(n,t),n.prototype.render=function(){var t=this,e=this.props,n=e.group,r=e.hiddenDivider,o=n.hidden?{display:"none"}:null,i=r?{display:"none"}:null;return xv(Vg||(Vg=s(['\n      <div class="','" style=',">\n        ",'\n        <div class="','" style=',"></div>\n      </div>\n    "],['\n      <div class="','" style=',">\n        ",'\n        <div class="','" style=',"></div>\n      </div>\n    "])),ya("toolbar-group"),o,n.map(function(e){var n=e.el?ry:ey;return xv(qg||(qg=s(["<"," key="," ..."," item="," />"],["<"," key="," ..."," item="," />"])),n,e.name,t.props,e);}),ya("toolbar-divider"),i);},n;}(Hv),iy=function(t){function n(e){var n=t.call(this,e)||this;return n.handleClickDocument=function(t){var e=t.target;Ma(e,"."+ya("dropdown-toolbar"))||Ma(e,".more")||n.setState({showDropdown:!1,dropdownPos:null});},n.showTooltip=function(){n.props.showTooltip(n.refs.el);},n.state={showDropdown:!1,dropdownPos:null},n;}return e(n,t),n.prototype.getBound=function(){var t=this.props.getBound(this.refs.el);return t.top+=4,o(o({},t),{left:null,right:10});},n.prototype.mounted=function(){document.addEventListener("click",this.handleClickDocument);},n.prototype.updated=function(){this.state.showDropdown&&!this.state.dropdownPos&&this.setState({dropdownPos:this.getBound()});},n.prototype.beforeDestroy=function(){document.removeEventListener("click",this.handleClickDocument);},n.prototype.render=function(){var t=this,e=this.state,n=e.showDropdown,r=e.dropdownPos,i=this.props,a=i.disabled,c=i.item,l=i.items,u=i.hideTooltip,p=l.filter(function(t){return!t.hidden;}),d=p.length?null:{display:"none"},f=n?null:{display:"none"};return xv(Ug||(Ug=s(['\n      <div class="','" style=',">\n        <button\n          ref=",'\n          type="button"\n          class=',"\n          onClick=","\n          onMouseover=","\n          onMouseout=","\n          disabled=",'\n        ></button>\n        <div\n          class="','"\n          style=',"\n          ref=","\n        >\n          ","\n        </div>\n      </div>\n    "],['\n      <div class="','" style=',">\n        <button\n          ref=",'\n          type="button"\n          class=',"\n          onClick=","\n          onMouseover=","\n          onMouseout=","\n          disabled=",'\n        ></button>\n        <div\n          class="','"\n          style=',"\n          ref=","\n        >\n          ","\n        </div>\n      </div>\n    "])),ya("toolbar-group"),d,function(e){return t.refs.el=e;},c.className,function(){return t.setState({showDropdown:!0});},this.showTooltip,u,a,ya("dropdown-toolbar"),o(o({},f),r),function(e){return t.refs.dropdownEl=e;},p.length?p.map(function(e,n){var r;return xv($g||($g=s(["\n                  <","\n                    group=","\n                    hiddenDivider=","\n                    ...","\n                  />\n                "],["\n                  <","\n                    group=","\n                    hiddenDivider=","\n                    ...","\n                  />\n                "])),oy,e,n===p.length-1||(null===(r=p[n+1])||void 0===r?void 0:r.hidden),t.props);}):null);},n;}(Hv),sy=zg(iy),ay=function(t){function n(e){var n=t.call(this,e)||this;return n.toggleTab=function(t,e){var r=n.props.eventEmitter;if(n.state.activeTab!==e){
var o="write"===e?"changePreviewTabWrite":"changePreviewTabPreview";
r.emit(o),n.setState({activeTab:e});
}},n.setItemWidth=function(t,e){n.itemWidthMap[t]=e;},n.setPopupInfo=function(t){n.setState({showPopup:!0,popupInfo:t});},n.openPopup=function(t,e){void 0===e&&(e={});var r=n.refs.el.querySelector("."+ya("toolbar-group")+" ."+t);if(r){
var o=Sa(r,Ma(r,"."+ya("toolbar"))),i=o.offsetLeft,s=o.offsetTop,a=Ig(t,{el:r,pos:{left:i,top:r.offsetHeight+s},initialValues:e});
a&&n.setPopupInfo(a);
}},n.hidePopup=function(){n.state.showPopup&&n.setState({showPopup:!1});},n.execCommand=function(t,e){n.props.eventEmitter.emit("command",t,e),n.hidePopup();},n.tabs=[{name:"write",text:"Write"},{name:"preview",text:"Preview"}],n.itemWidthMap={},n.initialItems=Pg(e.toolbarItems||[],n.hiddenScrollSync()),n.state={items:n.initialItems,dropdownItems:[],showPopup:!1,popupInfo:{},activeTab:"write"},n.tooltipRef={current:null},n.resizeObserver=new Mg(function(){return n.handleResize();}),n.addEvent(),n;}return e(n,t),n.prototype.insertToolbarItem=function(t,e){var n=t.groupIndex,r=t.itemIndex,o=this.initialItems[n];e=Lg(e),o?o.splice(r,0,e):this.initialItems.push([e]),this.setState(this.classifyToolbarItems());},n.prototype.removeToolbarItem=function(t){var e=this;La()(this.initialItems,function(n){var r=!1;return La()(n,function(o,i){return o.name!==t||(r=!0,n.splice(i,1),e.setState(e.classifyToolbarItems()),!1);}),!r;});},n.prototype.addEvent=function(){var t=this,e=this.props.eventEmitter;this.handleResize=_v()(function(){t.setState({items:t.initialItems,dropdownItems:[]}),t.setState(t.classifyToolbarItems());},200),e.listen("openPopup",this.openPopup);},n.prototype.appendTooltipToRoot=function(){var t='<div class="'+ya("tooltip")+'" style="display:none">\n        <div class="arrow"></div>\n        <span class="text"></span>\n      </div>';this.tooltipRef.current=Ca(t,this.refs.el);},n.prototype.hiddenScrollSync=function(){return"wysiwyg"===this.props.editorType||"tab"===this.props.previewStyle;},n.prototype.movePrevItemToDropdownToolbar=function(t,e,n,r){var o=function(t){var e=t.pop();e&&r.push(e);};if(t>1)
o(n);else
{
var i=ue(e);
i&&o(i);
}},n.prototype.classifyToolbarItems=function(){var t=this,e=0,n=this.refs.el.clientWidth,r=this.refs.el.querySelector("."+ya("toolbar-divider")),o=r?Ta(r):0,i=[],s=[],a=!1;return this.initialItems.forEach(function(r,c){var l=[],u=[];r.forEach(function(r,o){r.hidden||((e+=t.itemWidthMap[r.name])>n-50?(a||(t.movePrevItemToDropdownToolbar(o,i,l,u),a=!0),u.push(r)):l.push(r));}),l.length&&(Rg(l),i.push(l)),u.length&&(Rg(u),s.push(u)),c<t.state.items.length-1&&(e+=o);}),{items:i,dropdownItems:s};},n.prototype.mounted=function(){"tab"===this.props.previewStyle&&this.props.eventEmitter.emit("changePreviewTabWrite",!0),this.setState(this.classifyToolbarItems()),this.appendTooltipToRoot(),this.resizeObserver.observe(this.refs.el);},n.prototype.updated=function(t){var e,n,r=this.props,o=r.editorType,i=r.previewStyle,s=r.eventEmitter,a=i!==t.previewStyle,c=o!==t.editorType;if(a||c){
e=this.initialItems,n=this.hiddenScrollSync(),e.forEach(function(t){t.forEach(function(t){return t.hidden="scrollSync"===t.name&&n;}),Rg(t);});
var l=this.classifyToolbarItems();
(a||"tab"===i&&"markdown"===o)&&(s.emit("changePreviewTabWrite"),l.activeTab="write"),this.setState(l);
}},n.prototype.beforeDestroy=function(){window.removeEventListener("resize",this.handleResize),this.resizeObserver.disconnect(),ka(this.tooltipRef.current);},n.prototype.render=function(){var t=this,e=this.props,n=e.previewStyle,r=e.eventEmitter,o=e.editorType,i=this.state,a=i.popupInfo,c=i.showPopup,l=i.activeTab,u=i.items,p=i.dropdownItems,d={eventEmitter:r,tooltipRef:this.tooltipRef,disabled:"markdown"===o&&"tab"===n&&"preview"===l,execCommand:this.execCommand,setPopupInfo:this.setPopupInfo},f="tab"===n?{borderTopLeftRadius:0}:null;return xv(Jg||(Jg=s(['\n      <div class="','">\n        <div\n          class="','"\n          style="display: ','"\n        >\n          <'," tabs="," activeTab="," onClick=",' />\n        </div>\n        <div\n          class="','"\n          ref=',"\n          style=","\n        >\n          ","\n          <","\n            item=","\n            items=","\n            ...","\n          />\n        </div>\n        <","\n          info=","\n          show=","\n          eventEmitter=","\n          hidePopup=","\n          execCommand=","\n        />\n      </div>\n    "],['\n      <div class="','">\n        <div\n          class="','"\n          style="display: ','"\n        >\n          <'," tabs="," activeTab="," onClick=",' />\n        </div>\n        <div\n          class="','"\n          ref=',"\n          style=","\n        >\n          ","\n          <","\n            item=","\n            items=","\n            ...","\n          />\n        </div>\n        <","\n          info=","\n          show=","\n          eventEmitter=","\n          hidePopup=","\n          execCommand=","\n        />\n      </div>\n    "])),ya("toolbar"),ya("md-tab-container"),"wysiwyg"===o||"vertical"===n?"none":"block",Eg,this.tabs,l,this.toggleTab,ya("defaultUI-toolbar"),function(e){return t.refs.el=e;},f,u.map(function(e,n){var r;return xv(Wg||(Wg=s(["\n              <","\n                group=","\n                hiddenDivider=","\n                setItemWidth=","\n                ...","\n              />\n            "],["\n              <","\n                group=","\n                hiddenDivider=","\n                setItemWidth=","\n                ...","\n              />\n            "])),oy,e,n===u.length-1||(null===(r=u[n+1])||void 0===r?void 0:r.hidden),t.setItemWidth,d);}),sy,Lg("more"),p,d,Hg,a,c,r,this.hidePopup,this.execCommand);},n;}(Hv),cy=function(t){function n(e){var n=t.call(this,e)||this;return n.handleClickDocument=function(t){Ma(t.target,"."+ya("context-menu"))||n.setState({pos:null});},n.state={pos:null,menuGroups:[]},n.addEvent(),n;}return e(n,t),n.prototype.addEvent=function(){var t=this;this.props.eventEmitter.listen("contextmenu",function(e){var n=e.pos,r=e.menuGroups;t.setState({pos:n,menuGroups:r});});},n.prototype.mounted=function(){document.addEventListener("click",this.handleClickDocument);},n.prototype.beforeDestroy=function(){document.removeEventListener("click",this.handleClickDocument);},n.prototype.getMenuGroupElements=function(){var t=this,e=this.state,n=e.pos,r=e.menuGroups;return n?r.reduce(function(e,n){var r=[];return n.forEach(function(e){var n=e.label,o=e.className,i=void 0!==o&&o,a=e.disabled,c=e.onClick;r.push(xv(Gg||(Gg=s(["\n                <li\n                  onClick=",'\n                  class="menu-item','"\n                  aria-role="menuitem"\n                >\n                  <span class="','">',"</span>\n                </li>\n              "],["\n                <li\n                  onClick=",'\n                  class="menu-item','"\n                  aria-role="menuitem"\n                >\n                  <span class="','">',"</span>\n                </li>\n              "])),function(){a||(c(),t.setState({pos:null}));},a?" disabled":"",i,n));}),e.push(xv(Kg||(Kg=s(['<ul class="menu-group">\n              ',"\n            </ul>"],['<ul class="menu-group">\n              ',"\n            </ul>"])),r)),e;},[]):[];},n.prototype.render=function(){var t=o({display:this.state.pos?"block":"none"},this.state.pos);return xv(Zg||(Zg=s(['<div class="','" style=',' aria-role="menu">\n      ',"\n    </div>"],['<div class="','" style=',' aria-role="menu">\n      ',"\n    </div>"])),ya("context-menu"),t,this.getMenuGroupElements());},n;}(Hv),ly=function(t){function n(e){var n=t.call(this,e)||this;n.changeMode=function(t){t!==n.state.editorType&&n.setState({editorType:t});},n.changePreviewStyle=function(t){t!==n.state.previewStyle&&n.setState({previewStyle:t});},n.hide=function(){n.setState({hide:!0});},n.show=function(){n.setState({hide:!1});};var r=e.editorType,o=e.previewStyle;return n.state={editorType:r,previewStyle:o,hide:!1},n.addEvent(),n;}return e(n,t),n.prototype.mounted=function(){var t=this.props.slots,e=t.wwEditor,n=t.mdEditor,r=t.mdPreview;this.refs.wwContainer.appendChild(e),this.refs.mdContainer.insertAdjacentElement("afterbegin",n),this.refs.mdContainer.appendChild(r);},n.prototype.insertToolbarItem=function(t,e){this.toolbar.insertToolbarItem(t,e);},n.prototype.removeToolbarItem=function(t){this.toolbar.removeToolbarItem(t);},n.prototype.render=function(){var t=this,e=this.props,n=e.eventEmitter,r=e.hideModeSwitch,o=e.toolbarItems,i=e.theme,a=this.state,c=a.hide,l=a.previewStyle,u=a.editorType,p=c?" hidden":"",d=ya("markdown"===u?"md-mode":"ww-mode"),f=ya("md")+"-"+l+"-style",h=ya(["light"!==i,i+" "]);return xv(Qg||(Qg=s(['\n      <div\n        class="',"","",'"\n        ref=',"\n      >\n        <","\n          ref=","\n          eventEmitter=","\n          previewStyle=","\n          toolbarItems=","\n          editorType=",'\n        />\n        <div\n          class="'," ",'"\n          ref=','\n        >\n          <div class="','">\n            <div\n              class="'," ",'"\n              ref=','\n            >\n              <div class="','"></div>\n            </div>\n            <div\n              class="','"\n              ref=',"\n            />\n          </div>\n        </div>\n        ","\n        <"," eventEmitter="," />\n      </div>\n    "],['\n      <div\n        class="',"","",'"\n        ref=',"\n      >\n        <","\n          ref=","\n          eventEmitter=","\n          previewStyle=","\n          toolbarItems=","\n          editorType=",'\n        />\n        <div\n          class="'," ",'"\n          ref=','\n        >\n          <div class="','">\n            <div\n              class="'," ",'"\n              ref=','\n            >\n              <div class="','"></div>\n            </div>\n            <div\n              class="','"\n              ref=',"\n            />\n          </div>\n        </div>\n        ","\n        <"," eventEmitter="," />\n      </div>\n    "])),h,ya("defaultUI"),p,function(e){return t.refs.el=e;},ay,function(e){return t.toolbar=e;},n,l,o,u,ya("main"),d,function(e){return t.refs.editorSection=e;},ya("main-container"),ya("md-container"),f,function(e){return t.refs.mdContainer=e;},ya("md-splitter"),ya("ww-container"),function(e){return t.refs.wwContainer=e;},!r&&xv(Xg||(Xg=s(["<"," eventEmitter="," editorType="," />"],["<"," eventEmitter="," editorType="," />"])),zv,n,u),cy,n);},n.prototype.addEvent=function(){var t=this.props.eventEmitter;t.listen("hide",this.hide),t.listen("show",this.show),t.listen("changeMode",this.changeMode),t.listen("changePreviewStyle",this.changePreviewStyle);},n;}(Hv),uy=function(t){function n(e){var n,r,o=t.call(this,e)||this,i=Bv(o.options.el,xv(Yg||(Yg=s(["\n        <","\n          ref=","\n          eventEmitter=","\n          slots=","\n          hideModeSwitch=","\n          toolbarItems=","\n          previewStyle=","\n          editorType=","\n          theme=","\n        />\n      "],["\n        <","\n          ref=","\n          eventEmitter=","\n          slots=","\n          hideModeSwitch=","\n          toolbarItems=","\n          previewStyle=","\n          editorType=","\n          theme=","\n        />\n      "])),ly,function(t){return r=t;},o.eventEmitter,o.getEditorElements(),o.options.hideModeSwitch,o.options.toolbarItems,o.options.previewStyle,o.options.initialEditType,o.options.theme));return o.setMinHeight(o.options.minHeight),o.setHeight(o.options.height),o.defaultUI={insertToolbarItem:r.insertToolbarItem.bind(r),removeToolbarItem:r.removeToolbarItem.bind(r),destroy:i},null===(n=o.pluginInfo.toolbarItems)||void 0===n||n.forEach(function(t){var e=t.groupIndex,n=t.itemIndex,r=t.item;o.defaultUI.insertToolbarItem({groupIndex:e,itemIndex:n},r);}),o.eventEmitter.emit("loadUI",o),o;}return e(n,t),n.factory=function(t){return t.viewer?new iv(t):new n(t);},n.prototype.insertToolbarItem=function(t,e){this.defaultUI.insertToolbarItem(t,e);},n.prototype.removeToolbarItem=function(t){this.defaultUI.removeToolbarItem(t);},n.prototype.destroy=function(){t.prototype.destroy.call(this),this.defaultUI.destroy();},n;}(vv),py=uy;
vv.setLanguage(["en","en-US"],{Markdown:"Markdown",WYSIWYG:"WYSIWYG",Write:"Write",Preview:"Preview",Headings:"Headings",Paragraph:"Paragraph",Bold:"Bold",Italic:"Italic",Strike:"Strike",Code:"Inline code",Line:"Line",Blockquote:"Blockquote","Unordered list":"Unordered list","Ordered list":"Ordered list",Task:"Task",Indent:"Indent",Outdent:"Outdent","Insert link":"Insert link","Insert CodeBlock":"Insert codeBlock","Insert table":"Insert table","Insert image":"Insert image",Heading:"Heading","Image URL":"Image URL","Select image file":"Select image file","Choose a file":"Choose a file","No file":"No file",Description:"Description",OK:"OK",More:"More",Cancel:"Cancel",File:"File",URL:"URL","Link text":"Link text","Add row to up":"Add row to up","Add row to down":"Add row to down","Add column to left":"Add column to left","Add column to right":"Add column to right","Remove row":"Remove row","Remove column":"Remove column","Align column to left":"Align column to left","Align column to center":"Align column to center","Align column to right":"Align column to right","Remove table":"Remove table","Would you like to paste as table?":"Would you like to paste as table?","Text color":"Text color","Auto scroll enabled":"Auto scroll enabled","Auto scroll disabled":"Auto scroll disabled","Choose language":"Choose language"});
var dy=py;
}(),r=r.default;
}();
});
//# sourceMappingURL=toastui-editor.js.map