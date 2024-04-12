/*!
 * ApexCharts v3.48.0
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,global.ApexCharts=factory());})(this,function(){'use strict';function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function(obj){return typeof obj;};}else{_typeof=function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}else if(call!==void 0){throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _possibleConstructorReturn(this,result);};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread();}function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr);}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter);}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}/*
   ** Generic functions which are not dependent on ApexCharts
   */var Utils$1=/*#__PURE__*/function(){function Utils(){_classCallCheck(this,Utils);}_createClass(Utils,[{key:"shadeRGBColor",value:function shadeRGBColor(percent,color){var f=color.split(','),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4),10),G=parseInt(f[1],10),B=parseInt(f[2],10);return'rgb('+(Math.round((t-R)*p)+R)+','+(Math.round((t-G)*p)+G)+','+(Math.round((t-B)*p)+B)+')';}},{key:"shadeHexColor",value:function shadeHexColor(percent,color){var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00ff,B=f&0x0000ff;return'#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);}// beautiful color shading blending code
// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
},{key:"shadeColor",value:function shadeColor(p,color){if(Utils.isColorHex(color)){return this.shadeHexColor(p,color);}else{return this.shadeRGBColor(p,color);}}}],[{key:"bind",value:function bind(fn,me){return function(){return fn.apply(me,arguments);};}},{key:"isObject",value:function isObject(item){return item&&_typeof(item)==='object'&&!Array.isArray(item)&&item!=null;}// Type checking that works across different window objects
},{key:"is",value:function is(type,val){return Object.prototype.toString.call(val)==='[object '+type+']';}},{key:"listToArray",value:function listToArray(list){var i,array=[];for(i=0;i<list.length;i++){array[i]=list[i];}return array;}// to extend defaults with user options
// credit: http://stackoverflow.com/questions/27936772/deep-object-merging-in-es6-es7#answer-34749873
},{key:"extend",value:function extend(target,source){var _this=this;if(typeof Object.assign!=='function'){(function(){Object.assign=function(target){if(target===undefined||target===null){throw new TypeError('Cannot convert undefined or null to object');}var output=Object(target);for(var index=1;index<arguments.length;index++){var _source=arguments[index];if(_source!==undefined&&_source!==null){for(var nextKey in _source){if(_source.hasOwnProperty(nextKey)){output[nextKey]=_source[nextKey];}}}}return output;};})();}var output=Object.assign({},target);if(this.isObject(target)&&this.isObject(source)){Object.keys(source).forEach(function(key){if(_this.isObject(source[key])){if(!(key in target)){Object.assign(output,_defineProperty({},key,source[key]));}else{output[key]=_this.extend(target[key],source[key]);}}else{Object.assign(output,_defineProperty({},key,source[key]));}});}return output;}},{key:"extendArray",value:function extendArray(arrToExtend,resultArr){var extendedArr=[];arrToExtend.map(function(item){extendedArr.push(Utils.extend(resultArr,item));});arrToExtend=extendedArr;return arrToExtend;}// If month counter exceeds 12, it starts again from 1
},{key:"monthMod",value:function monthMod(month){return month%12;}},{key:"clone",value:function clone(source){if(Utils.is('Array',source)){var cloneResult=[];for(var i=0;i<source.length;i++){cloneResult[i]=this.clone(source[i]);}return cloneResult;}else if(Utils.is('Null',source)){// fixes an issue where null values were converted to {}
return null;}else if(Utils.is('Date',source)){return source;}else if(_typeof(source)==='object'){var _cloneResult={};for(var prop in source){if(source.hasOwnProperty(prop)){_cloneResult[prop]=this.clone(source[prop]);}}return _cloneResult;}else{return source;}}},{key:"log10",value:function log10(x){return Math.log(x)/Math.LN10;}},{key:"roundToBase10",value:function roundToBase10(x){return Math.pow(10,Math.floor(Math.log10(x)));}},{key:"roundToBase",value:function roundToBase(x,base){return Math.pow(base,Math.floor(Math.log(x)/Math.log(base)));}},{key:"parseNumber",value:function parseNumber(val){if(val===null)return val;return parseFloat(val);}},{key:"stripNumber",value:function stripNumber(num){var precision=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return Number.isInteger(num)?num:parseFloat(num.toPrecision(precision));}},{key:"randomId",value:function randomId(){return(Math.random()+1).toString(36).substring(4);}},{key:"noExponents",value:function noExponents(val){var data=String(val).split(/[eE]/);if(data.length===1)return data[0];var z='',sign=val<0?'-':'',str=data[0].replace('.',''),mag=Number(data[1])+1;if(mag<0){z=sign+'0.';while(mag++){z+='0';}return z+str.replace(/^-/,'');}mag-=str.length;while(mag--){z+='0';}return str+z;}},{key:"getDimensions",value:function getDimensions(el){var computedStyle=getComputedStyle(el,null);var elementHeight=el.clientHeight;var elementWidth=el.clientWidth;elementHeight-=parseFloat(computedStyle.paddingTop)+parseFloat(computedStyle.paddingBottom);elementWidth-=parseFloat(computedStyle.paddingLeft)+parseFloat(computedStyle.paddingRight);return[elementWidth,elementHeight];}},{key:"getBoundingClientRect",value:function getBoundingClientRect(element){var rect=element.getBoundingClientRect();return{top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,width:element.clientWidth,height:element.clientHeight,x:rect.left,y:rect.top};}},{key:"getLargestStringFromArr",value:function getLargestStringFromArr(arr){return arr.reduce(function(a,b){if(Array.isArray(b)){b=b.reduce(function(aa,bb){return aa.length>bb.length?aa:bb;});}return a.length>b.length?a:b;},0);}// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-12342275
},{key:"hexToRgba",value:function hexToRgba(){var hex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'#999999';var opacity=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0.6;if(hex.substring(0,1)!=='#'){hex='#999999';}var h=hex.replace('#','');h=h.match(new RegExp('(.{'+h.length/3+'})','g'));for(var i=0;i<h.length;i++){h[i]=parseInt(h[i].length===1?h[i]+h[i]:h[i],16);}if(typeof opacity!=='undefined')h.push(opacity);return'rgba('+h.join(',')+')';}},{key:"getOpacityFromRGBA",value:function getOpacityFromRGBA(rgba){return parseFloat(rgba.replace(/^.*,(.+)\)/,'$1'));}},{key:"rgb2hex",value:function rgb2hex(rgb){rgb=rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return rgb&&rgb.length===4?'#'+('0'+parseInt(rgb[1],10).toString(16)).slice(-2)+('0'+parseInt(rgb[2],10).toString(16)).slice(-2)+('0'+parseInt(rgb[3],10).toString(16)).slice(-2):'';}},{key:"isColorHex",value:function isColorHex(color){return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(color);}},{key:"getPolygonPos",value:function getPolygonPos(size,dataPointsLen){var dotsArray=[];var angle=Math.PI*2/dataPointsLen;for(var i=0;i<dataPointsLen;i++){var curPos={};curPos.x=size*Math.sin(i*angle);curPos.y=-size*Math.cos(i*angle);dotsArray.push(curPos);}return dotsArray;}},{key:"polarToCartesian",value:function polarToCartesian(centerX,centerY,radius,angleInDegrees){var angleInRadians=(angleInDegrees-90)*Math.PI/180.0;return{x:centerX+radius*Math.cos(angleInRadians),y:centerY+radius*Math.sin(angleInRadians)};}},{key:"escapeString",value:function escapeString(str){var escapeWith=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'x';var newStr=str.toString().slice();newStr=newStr.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi,escapeWith);return newStr;}},{key:"negToZero",value:function negToZero(val){return val<0?0:val;}},{key:"moveIndexInArray",value:function moveIndexInArray(arr,old_index,new_index){if(new_index>=arr.length){var k=new_index-arr.length+1;while(k--){arr.push(undefined);}}arr.splice(new_index,0,arr.splice(old_index,1)[0]);return arr;}},{key:"extractNumber",value:function extractNumber(s){return parseFloat(s.replace(/[^\d.]*/g,''));}},{key:"findAncestor",value:function findAncestor(el,cls){while((el=el.parentElement)&&!el.classList.contains(cls)){}return el;}},{key:"setELstyles",value:function setELstyles(el,styles){for(var key in styles){if(styles.hasOwnProperty(key)){el.style.key=styles[key];}}}},{key:"isNumber",value:function isNumber(value){return!isNaN(value)&&parseFloat(Number(value))===value&&!isNaN(parseInt(value,10));}},{key:"isFloat",value:function isFloat(n){return Number(n)===n&&n%1!==0;}},{key:"isSafari",value:function isSafari(){return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);}},{key:"isFirefox",value:function isFirefox(){return navigator.userAgent.toLowerCase().indexOf('firefox')>-1;}},{key:"isIE11",value:function isIE11(){if(window.navigator.userAgent.indexOf('MSIE')!==-1||window.navigator.appVersion.indexOf('Trident/')>-1){return true;}}},{key:"isIE",value:function isIE(){var ua=window.navigator.userAgent;var msie=ua.indexOf('MSIE ');if(msie>0){// IE 10 or older => return version number
return parseInt(ua.substring(msie+5,ua.indexOf('.',msie)),10);}var trident=ua.indexOf('Trident/');if(trident>0){// IE 11 => return version number
var rv=ua.indexOf('rv:');return parseInt(ua.substring(rv+3,ua.indexOf('.',rv)),10);}var edge=ua.indexOf('Edge/');if(edge>0){// Edge (IE 12+) => return version number
return parseInt(ua.substring(edge+5,ua.indexOf('.',edge)),10);}// other browser
return false;}// 
// Find the Greatest Common Divisor of two numbers
//
},{key:"getGCD",value:function getGCD(a,b){var p=arguments.length>2&&arguments[2]!==undefined?arguments[2]:7;var big=Math.pow(10,p-Math.floor(Math.log10(Math.max(a,b))));a=Math.round(Math.abs(a)*big);b=Math.round(Math.abs(b)*big);while(b){var t=b;b=a%b;a=t;}return a/big;}},{key:"getPrimeFactors",value:function getPrimeFactors(n){var factors=[];var divisor=2;while(n>=2){if(n%divisor==0){factors.push(divisor);n=n/divisor;}else{divisor++;}}return factors;}},{key:"mod",value:function mod(a,b){var p=arguments.length>2&&arguments[2]!==undefined?arguments[2]:7;var big=Math.pow(10,p-Math.floor(Math.log10(Math.max(a,b))));a=Math.round(Math.abs(a)*big);b=Math.round(Math.abs(b)*big);return a%b/big;}}]);return Utils;}();/**
   * ApexCharts Animation Class.
   *
   * @module Animations
   **/var Animations=/*#__PURE__*/function(){function Animations(ctx){_classCallCheck(this,Animations);this.ctx=ctx;this.w=ctx.w;this.setEasingFunctions();}_createClass(Animations,[{key:"setEasingFunctions",value:function setEasingFunctions(){var easing;if(this.w.globals.easing)return;var userDefinedEasing=this.w.config.chart.animations.easing;switch(userDefinedEasing){case'linear':{easing='-';break;}case'easein':{easing='<';break;}case'easeout':{easing='>';break;}case'easeinout':{easing='<>';break;}case'swing':{easing=function easing(pos){var s=1.70158;var ret=(pos-=1)*pos*((s+1)*pos+s)+1;return ret;};break;}case'bounce':{easing=function easing(pos){var ret='';if(pos<1/2.75){ret=7.5625*pos*pos;}else if(pos<2/2.75){ret=7.5625*(pos-=1.5/2.75)*pos+0.75;}else if(pos<2.5/2.75){ret=7.5625*(pos-=2.25/2.75)*pos+0.9375;}else{ret=7.5625*(pos-=2.625/2.75)*pos+0.984375;}return ret;};break;}case'elastic':{easing=function easing(pos){if(pos===!!pos)return pos;return Math.pow(2,-10*pos)*Math.sin((pos-0.075)*(2*Math.PI)/0.3)+1;};break;}default:{easing='<>';}}this.w.globals.easing=easing;}},{key:"animateLine",value:function animateLine(el,from,to,speed){el.attr(from).animate(speed).attr(to);}/*
       ** Animate radius of a circle element
       */},{key:"animateMarker",value:function animateMarker(el,from,to,speed,easing,cb){if(!from)from=0;el.attr({r:from,width:from,height:from}).animate(speed,easing).attr({r:to,width:to.width,height:to.height}).afterAll(function(){cb();});}/*
       ** Animate radius and position of a circle element
       */},{key:"animateCircle",value:function animateCircle(el,from,to,speed,easing){el.attr({r:from.r,cx:from.cx,cy:from.cy}).animate(speed,easing).attr({r:to.r,cx:to.cx,cy:to.cy});}/*
       ** Animate rect properties
       */},{key:"animateRect",value:function animateRect(el,from,to,speed,fn){el.attr(from).animate(speed).attr(to).afterAll(function(){return fn();});}},{key:"animatePathsGradually",value:function animatePathsGradually(params){var el=params.el,realIndex=params.realIndex,j=params.j,fill=params.fill,pathFrom=params.pathFrom,pathTo=params.pathTo,speed=params.speed,delay=params.delay;var me=this;var w=this.w;var delayFactor=0;if(w.config.chart.animations.animateGradually.enabled){delayFactor=w.config.chart.animations.animateGradually.delay;}if(w.config.chart.animations.dynamicAnimation.enabled&&w.globals.dataChanged&&w.config.chart.type!=='bar'){// disabled due to this bug - https://github.com/apexcharts/vue-apexcharts/issues/75
delayFactor=0;}me.morphSVG(el,realIndex,j,w.config.chart.type==='line'&&!w.globals.comboCharts?'stroke':fill,pathFrom,pathTo,speed,delay*delayFactor);}},{key:"showDelayedElements",value:function showDelayedElements(){this.w.globals.delayedElements.forEach(function(d){var ele=d.el;ele.classList.remove('apexcharts-element-hidden');ele.classList.add('apexcharts-hidden-element-shown');});}},{key:"animationCompleted",value:function animationCompleted(el){var w=this.w;if(w.globals.animationEnded)return;w.globals.animationEnded=true;this.showDelayedElements();if(typeof w.config.chart.events.animationEnd==='function'){w.config.chart.events.animationEnd(this.ctx,{el:el,w:w});}}// SVG.js animation for morphing one path to another
},{key:"morphSVG",value:function morphSVG(el,realIndex,j,fill,pathFrom,pathTo,speed,delay){var _this=this;var w=this.w;if(!pathFrom){pathFrom=el.attr('pathFrom');}if(!pathTo){pathTo=el.attr('pathTo');}var disableAnimationForCorrupPath=function disableAnimationForCorrupPath(path){if(w.config.chart.type==='radar'){// radar chart drops the path to bottom and hence a corrup path looks ugly
// therefore, disable animation for such a case
speed=1;}return"M 0 ".concat(w.globals.gridHeight);};if(!pathFrom||pathFrom.indexOf('undefined')>-1||pathFrom.indexOf('NaN')>-1){pathFrom=disableAnimationForCorrupPath();}if(!pathTo||pathTo.indexOf('undefined')>-1||pathTo.indexOf('NaN')>-1){pathTo=disableAnimationForCorrupPath();}if(!w.globals.shouldAnimate){speed=1;}el.plot(pathFrom).animate(1,w.globals.easing,delay).plot(pathFrom).animate(speed,w.globals.easing,delay).plot(pathTo).afterAll(function(){// a flag to indicate that the original mount function can return true now as animation finished here
if(Utils$1.isNumber(j)){if(j===w.globals.series[w.globals.maxValsInArrayIndex].length-2&&w.globals.shouldAnimate){_this.animationCompleted(el);}}else if(fill!=='none'&&w.globals.shouldAnimate){if(!w.globals.comboCharts&&realIndex===w.globals.series.length-1||w.globals.comboCharts){_this.animationCompleted(el);}}_this.showDelayedElements();});}}]);return Animations;}();/**
   * ApexCharts Filters Class for setting hover/active states on the paths.
   *
   * @module Formatters
   **/var Filters=/*#__PURE__*/function(){function Filters(ctx){_classCallCheck(this,Filters);this.ctx=ctx;this.w=ctx.w;}// create a re-usable filter which can be appended other filter effects and applied to multiple elements
_createClass(Filters,[{key:"getDefaultFilter",value:function getDefaultFilter(el,i){var w=this.w;el.unfilter(true);var filter=new window.SVG.Filter();filter.size('120%','180%','-5%','-40%');if(w.config.states.normal.filter!=='none'){this.applyFilter(el,i,w.config.states.normal.filter.type,w.config.states.normal.filter.value);}else{if(w.config.chart.dropShadow.enabled){this.dropShadow(el,w.config.chart.dropShadow,i);}}}},{key:"addNormalFilter",value:function addNormalFilter(el,i){var w=this.w;// revert shadow if it was there
// but, ignore marker as marker don't have dropshadow yet
if(w.config.chart.dropShadow.enabled&&!el.node.classList.contains('apexcharts-marker')){this.dropShadow(el,w.config.chart.dropShadow,i);}}// appends dropShadow to the filter object which can be chained with other filter effects
},{key:"addLightenFilter",value:function addLightenFilter(el,i,attrs){var _this=this;var w=this.w;var intensity=attrs.intensity;el.unfilter(true);var filter=new window.SVG.Filter();el.filter(function(add){var shadowAttr=w.config.chart.dropShadow;if(shadowAttr.enabled){filter=_this.addShadow(add,i,shadowAttr);}else{filter=add;}filter.componentTransfer({rgb:{type:'linear',slope:1.5,intercept:intensity}});});el.filterer.node.setAttribute('filterUnits','userSpaceOnUse');this._scaleFilterSize(el.filterer.node);}// appends dropShadow to the filter object which can be chained with other filter effects
},{key:"addDarkenFilter",value:function addDarkenFilter(el,i,attrs){var _this2=this;var w=this.w;var intensity=attrs.intensity;el.unfilter(true);var filter=new window.SVG.Filter();el.filter(function(add){var shadowAttr=w.config.chart.dropShadow;if(shadowAttr.enabled){filter=_this2.addShadow(add,i,shadowAttr);}else{filter=add;}filter.componentTransfer({rgb:{type:'linear',slope:intensity}});});el.filterer.node.setAttribute('filterUnits','userSpaceOnUse');this._scaleFilterSize(el.filterer.node);}},{key:"applyFilter",value:function applyFilter(el,i,filter){var intensity=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0.5;switch(filter){case'none':{this.addNormalFilter(el,i);break;}case'lighten':{this.addLightenFilter(el,i,{intensity:intensity});break;}case'darken':{this.addDarkenFilter(el,i,{intensity:intensity});break;}}}// appends dropShadow to the filter object which can be chained with other filter effects
},{key:"addShadow",value:function addShadow(add,i,attrs){var _w$config$chart$dropS;var w=this.w;var blur=attrs.blur,top=attrs.top,left=attrs.left,color=attrs.color,opacity=attrs.opacity;if(((_w$config$chart$dropS=w.config.chart.dropShadow.enabledOnSeries)===null||_w$config$chart$dropS===void 0?void 0:_w$config$chart$dropS.length)>0){if(w.config.chart.dropShadow.enabledOnSeries.indexOf(i)===-1){return add;}}var shadowBlur=add.flood(Array.isArray(color)?color[i]:color,opacity).composite(add.sourceAlpha,'in').offset(left,top).gaussianBlur(blur).merge(add.source);return add.blend(add.source,shadowBlur);}// directly adds dropShadow to the element and returns the same element.
// the only way it is different from the addShadow() function is that addShadow is chainable to other filters, while this function discards all filters and add dropShadow
},{key:"dropShadow",value:function dropShadow(el,attrs){var _w$config$chart$dropS2;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var top=attrs.top,left=attrs.left,blur=attrs.blur,color=attrs.color,opacity=attrs.opacity,noUserSpaceOnUse=attrs.noUserSpaceOnUse;var w=this.w;el.unfilter(true);if(Utils$1.isIE()&&w.config.chart.type==='radialBar'){// in radialbar charts, dropshadow is clipping actual drawing in IE
return el;}if(((_w$config$chart$dropS2=w.config.chart.dropShadow.enabledOnSeries)===null||_w$config$chart$dropS2===void 0?void 0:_w$config$chart$dropS2.length)>0){var _w$config$chart$dropS3;if(((_w$config$chart$dropS3=w.config.chart.dropShadow.enabledOnSeries)===null||_w$config$chart$dropS3===void 0?void 0:_w$config$chart$dropS3.indexOf(i))===-1){return el;}}color=Array.isArray(color)?color[i]:color;el.filter(function(add){var shadowBlur=null;if(Utils$1.isSafari()||Utils$1.isFirefox()||Utils$1.isIE()){// safari/firefox/IE have some alternative way to use this filter
shadowBlur=add.flood(color,opacity).composite(add.sourceAlpha,'in').offset(left,top).gaussianBlur(blur);}else{shadowBlur=add.flood(color,opacity).composite(add.sourceAlpha,'in').offset(left,top).gaussianBlur(blur).merge(add.source);}add.blend(add.source,shadowBlur);});if(!noUserSpaceOnUse){el.filterer.node.setAttribute('filterUnits','userSpaceOnUse');}this._scaleFilterSize(el.filterer.node);return el;}},{key:"setSelectionFilter",value:function setSelectionFilter(el,realIndex,dataPointIndex){var w=this.w;if(typeof w.globals.selectedDataPoints[realIndex]!=='undefined'){if(w.globals.selectedDataPoints[realIndex].indexOf(dataPointIndex)>-1){el.node.setAttribute('selected',true);var activeFilter=w.config.states.active.filter;if(activeFilter!=='none'){this.applyFilter(el,realIndex,activeFilter.type,activeFilter.value);}}}}},{key:"_scaleFilterSize",value:function _scaleFilterSize(el){var setAttributes=function setAttributes(attrs){for(var key in attrs){if(attrs.hasOwnProperty(key)){el.setAttribute(key,attrs[key]);}}};setAttributes({width:'200%',height:'200%',x:'-50%',y:'-50%'});}}]);return Filters;}();/**
   * ApexCharts Graphics Class for all drawing operations.
   *
   * @module Graphics
   **/var Graphics=/*#__PURE__*/function(){function Graphics(ctx){_classCallCheck(this,Graphics);this.ctx=ctx;this.w=ctx.w;}/*****************************************************************************
     *                                                                            *
     *  SVG Path Rounding Function                                                *
     *  Copyright (C) 2014 Yona Appletree                                         *
     *                                                                            *
     *  Licensed under the Apache License, Version 2.0 (the "License");           *
     *  you may not use this file except in compliance with the License.          *
     *  You may obtain a copy of the License at                                   *
     *                                                                            *
     *      http://www.apache.org/licenses/LICENSE-2.0                            *
     *                                                                            *
     *  Unless required by applicable law or agreed to in writing, software       *
     *  distributed under the License is distributed on an "AS IS" BASIS,         *
     *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  *
     *  See the License for the specific language governing permissions and       *
     *  limitations under the License.                                            *
     *                                                                            *
     *****************************************************************************/ /**
     * SVG Path rounding function. Takes an input path string and outputs a path
     * string where all line-line corners have been rounded. Only supports absolute
     * commands at the moment.
     *
     * @param pathString The SVG input path
     * @param radius The amount to round the corners, either a value in the SVG
     *               coordinate space, or, if useFractionalRadius is true, a value
     *               from 0 to 1.
     * @returns A new SVG path string with the rounding
     */_createClass(Graphics,[{key:"roundPathCorners",value:function roundPathCorners(pathString,radius){if(pathString.indexOf('NaN')>-1)pathString='';function moveTowardsLength(movingPoint,targetPoint,amount){var width=targetPoint.x-movingPoint.x;var height=targetPoint.y-movingPoint.y;var distance=Math.sqrt(width*width+height*height);return moveTowardsFractional(movingPoint,targetPoint,Math.min(1,amount/distance));}function moveTowardsFractional(movingPoint,targetPoint,fraction){return{x:movingPoint.x+(targetPoint.x-movingPoint.x)*fraction,y:movingPoint.y+(targetPoint.y-movingPoint.y)*fraction};}// Adjusts the ending position of a command
function adjustCommand(cmd,newPoint){if(cmd.length>2){cmd[cmd.length-2]=newPoint.x;cmd[cmd.length-1]=newPoint.y;}}// Gives an {x, y} object for a command's ending position
function pointForCommand(cmd){return{x:parseFloat(cmd[cmd.length-2]),y:parseFloat(cmd[cmd.length-1])};}// Split apart the path, handing concatonated letters and numbers
var pathParts=pathString.split(/[,\s]/).reduce(function(parts,part){var match=part.match('([a-zA-Z])(.+)');if(match){parts.push(match[1]);parts.push(match[2]);}else{parts.push(part);}return parts;},[]);// Group the commands with their arguments for easier handling
var commands=pathParts.reduce(function(commands,part){if(parseFloat(part)==part&&commands.length){commands[commands.length-1].push(part);}else{commands.push([part]);}return commands;},[]);// The resulting commands, also grouped
var resultCommands=[];if(commands.length>1){var startPoint=pointForCommand(commands[0]);// Handle the close path case with a "virtual" closing line
var virtualCloseLine=null;if(commands[commands.length-1][0]=='Z'&&commands[0].length>2){virtualCloseLine=['L',startPoint.x,startPoint.y];commands[commands.length-1]=virtualCloseLine;}// We always use the first command (but it may be mutated)
resultCommands.push(commands[0]);for(var cmdIndex=1;cmdIndex<commands.length;cmdIndex++){var prevCmd=resultCommands[resultCommands.length-1];var curCmd=commands[cmdIndex];// Handle closing case
var nextCmd=curCmd==virtualCloseLine?commands[1]:commands[cmdIndex+1];// Nasty logic to decide if this path is a candidite.
if(nextCmd&&prevCmd&&prevCmd.length>2&&curCmd[0]=='L'&&nextCmd.length>2&&nextCmd[0]=='L'){// Calc the points we're dealing with
var prevPoint=pointForCommand(prevCmd);var curPoint=pointForCommand(curCmd);var nextPoint=pointForCommand(nextCmd);// The start and end of the cuve are just our point moved towards the previous and next points, respectivly
var curveStart,curveEnd;curveStart=moveTowardsLength(curPoint,prevPoint,radius);curveEnd=moveTowardsLength(curPoint,nextPoint,radius);// Adjust the current command and add it
adjustCommand(curCmd,curveStart);curCmd.origPoint=curPoint;resultCommands.push(curCmd);// The curve control points are halfway between the start/end of the curve and
// the original point
var startControl=moveTowardsFractional(curveStart,curPoint,0.5);var endControl=moveTowardsFractional(curPoint,curveEnd,0.5);// Create the curve
var curveCmd=['C',startControl.x,startControl.y,endControl.x,endControl.y,curveEnd.x,curveEnd.y];// Save the original point for fractional calculations
curveCmd.origPoint=curPoint;resultCommands.push(curveCmd);}else{// Pass through commands that don't qualify
resultCommands.push(curCmd);}}// Fix up the starting point and restore the close path if the path was orignally closed
if(virtualCloseLine){var newStartPoint=pointForCommand(resultCommands[resultCommands.length-1]);resultCommands.push(['Z']);adjustCommand(resultCommands[0],newStartPoint);}}else{resultCommands=commands;}return resultCommands.reduce(function(str,c){return str+c.join(' ')+' ';},'');}},{key:"drawLine",value:function drawLine(x1,y1,x2,y2){var lineColor=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'#a8a8a8';var dashArray=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;var strokeWidth=arguments.length>6&&arguments[6]!==undefined?arguments[6]:null;var strokeLineCap=arguments.length>7&&arguments[7]!==undefined?arguments[7]:'butt';var w=this.w;var line=w.globals.dom.Paper.line().attr({x1:x1,y1:y1,x2:x2,y2:y2,stroke:lineColor,'stroke-dasharray':dashArray,'stroke-width':strokeWidth,'stroke-linecap':strokeLineCap});return line;}},{key:"drawRect",value:function drawRect(){var x1=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var y1=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var x2=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;var y2=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var radius=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;var color=arguments.length>5&&arguments[5]!==undefined?arguments[5]:'#fefefe';var opacity=arguments.length>6&&arguments[6]!==undefined?arguments[6]:1;var strokeWidth=arguments.length>7&&arguments[7]!==undefined?arguments[7]:null;var strokeColor=arguments.length>8&&arguments[8]!==undefined?arguments[8]:null;var strokeDashArray=arguments.length>9&&arguments[9]!==undefined?arguments[9]:0;var w=this.w;var rect=w.globals.dom.Paper.rect();rect.attr({x:x1,y:y1,width:x2>0?x2:0,height:y2>0?y2:0,rx:radius,ry:radius,opacity:opacity,'stroke-width':strokeWidth!==null?strokeWidth:0,stroke:strokeColor!==null?strokeColor:'none','stroke-dasharray':strokeDashArray});// fix apexcharts.js#1410
rect.node.setAttribute('fill',color);return rect;}},{key:"drawPolygon",value:function drawPolygon(polygonString){var stroke=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'#e1e1e1';var strokeWidth=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;var fill=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'none';var w=this.w;var polygon=w.globals.dom.Paper.polygon(polygonString).attr({fill:fill,stroke:stroke,'stroke-width':strokeWidth});return polygon;}},{key:"drawCircle",value:function drawCircle(radius){var attrs=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var w=this.w;if(radius<0)radius=0;var c=w.globals.dom.Paper.circle(radius*2);if(attrs!==null){c.attr(attrs);}return c;}},{key:"drawPath",value:function drawPath(_ref){var _ref$d=_ref.d,d=_ref$d===void 0?'':_ref$d,_ref$stroke=_ref.stroke,stroke=_ref$stroke===void 0?'#a8a8a8':_ref$stroke,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?1:_ref$strokeWidth,fill=_ref.fill,_ref$fillOpacity=_ref.fillOpacity,fillOpacity=_ref$fillOpacity===void 0?1:_ref$fillOpacity,_ref$strokeOpacity=_ref.strokeOpacity,strokeOpacity=_ref$strokeOpacity===void 0?1:_ref$strokeOpacity,classes=_ref.classes,_ref$strokeLinecap=_ref.strokeLinecap,strokeLinecap=_ref$strokeLinecap===void 0?null:_ref$strokeLinecap,_ref$strokeDashArray=_ref.strokeDashArray,strokeDashArray=_ref$strokeDashArray===void 0?0:_ref$strokeDashArray;var w=this.w;if(strokeLinecap===null){strokeLinecap=w.config.stroke.lineCap;}if(d.indexOf('undefined')>-1||d.indexOf('NaN')>-1){d="M 0 ".concat(w.globals.gridHeight);}var p=w.globals.dom.Paper.path(d).attr({fill:fill,'fill-opacity':fillOpacity,stroke:stroke,'stroke-opacity':strokeOpacity,'stroke-linecap':strokeLinecap,'stroke-width':strokeWidth,'stroke-dasharray':strokeDashArray,class:classes});return p;}},{key:"group",value:function group(){var attrs=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var w=this.w;var g=w.globals.dom.Paper.group();if(attrs!==null){g.attr(attrs);}return g;}},{key:"move",value:function move(x,y){var move=['M',x,y].join(' ');return move;}},{key:"line",value:function line(x,y){var hORv=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var line=null;if(hORv===null){line=[' L',x,y].join(' ');}else if(hORv==='H'){line=[' H',x].join(' ');}else if(hORv==='V'){line=[' V',y].join(' ');}return line;}},{key:"curve",value:function curve(x1,y1,x2,y2,x,y){var curve=['C',x1,y1,x2,y2,x,y].join(' ');return curve;}},{key:"quadraticCurve",value:function quadraticCurve(x1,y1,x,y){var curve=['Q',x1,y1,x,y].join(' ');return curve;}},{key:"arc",value:function arc(rx,ry,axisRotation,largeArcFlag,sweepFlag,x,y){var relative=arguments.length>7&&arguments[7]!==undefined?arguments[7]:false;var coord='A';if(relative)coord='a';var arc=[coord,rx,ry,axisRotation,largeArcFlag,sweepFlag,x,y].join(' ');return arc;}/**
       * @memberof Graphics
       * @param {object}
       *  i = series's index
       *  realIndex = realIndex is series's actual index when it was drawn time. After several redraws, the iterating "i" may change in loops, but realIndex doesn't
       *  pathFrom = existing pathFrom to animateTo
       *  pathTo = new Path to which d attr will be animated from pathFrom to pathTo
       *  stroke = line Color
       *  strokeWidth = width of path Line
       *  fill = it can be gradient, single color, pattern or image
       *  animationDelay = how much to delay when starting animation (in milliseconds)
       *  dataChangeSpeed = for dynamic animations, when data changes
       *  className = class attribute to add
       * @return {object} svg.js path object
       **/},{key:"renderPaths",value:function renderPaths(_ref2){var j=_ref2.j,realIndex=_ref2.realIndex,pathFrom=_ref2.pathFrom,pathTo=_ref2.pathTo,stroke=_ref2.stroke,strokeWidth=_ref2.strokeWidth,strokeLinecap=_ref2.strokeLinecap,fill=_ref2.fill,animationDelay=_ref2.animationDelay,initialSpeed=_ref2.initialSpeed,dataChangeSpeed=_ref2.dataChangeSpeed,className=_ref2.className,_ref2$shouldClipToGri=_ref2.shouldClipToGrid,shouldClipToGrid=_ref2$shouldClipToGri===void 0?true:_ref2$shouldClipToGri,_ref2$bindEventsOnPat=_ref2.bindEventsOnPaths,bindEventsOnPaths=_ref2$bindEventsOnPat===void 0?true:_ref2$bindEventsOnPat,_ref2$drawShadow=_ref2.drawShadow,drawShadow=_ref2$drawShadow===void 0?true:_ref2$drawShadow;var w=this.w;var filters=new Filters(this.ctx);var anim=new Animations(this.ctx);var initialAnim=this.w.config.chart.animations.enabled;var dynamicAnim=initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled;var d;var shouldAnimate=!!(initialAnim&&!w.globals.resized||dynamicAnim&&w.globals.dataChanged&&w.globals.shouldAnimate);if(shouldAnimate){d=pathFrom;}else{d=pathTo;w.globals.animationEnded=true;}var strokeDashArrayOpt=w.config.stroke.dashArray;var strokeDashArray=0;if(Array.isArray(strokeDashArrayOpt)){strokeDashArray=strokeDashArrayOpt[realIndex];}else{strokeDashArray=w.config.stroke.dashArray;}var el=this.drawPath({d:d,stroke:stroke,strokeWidth:strokeWidth,fill:fill,fillOpacity:1,classes:className,strokeLinecap:strokeLinecap,strokeDashArray:strokeDashArray});el.attr('index',realIndex);if(shouldClipToGrid){el.attr({'clip-path':"url(#gridRectMask".concat(w.globals.cuid,")")});}// const defaultFilter = el.filterer
if(w.config.states.normal.filter.type!=='none'){filters.getDefaultFilter(el,realIndex);}else{if(w.config.chart.dropShadow.enabled&&drawShadow){var shadow=w.config.chart.dropShadow;filters.dropShadow(el,shadow,realIndex);}}if(bindEventsOnPaths){el.node.addEventListener('mouseenter',this.pathMouseEnter.bind(this,el));el.node.addEventListener('mouseleave',this.pathMouseLeave.bind(this,el));el.node.addEventListener('mousedown',this.pathMouseDown.bind(this,el));}el.attr({pathTo:pathTo,pathFrom:pathFrom});var defaultAnimateOpts={el:el,j:j,realIndex:realIndex,pathFrom:pathFrom,pathTo:pathTo,fill:fill,strokeWidth:strokeWidth,delay:animationDelay};if(initialAnim&&!w.globals.resized&&!w.globals.dataChanged){anim.animatePathsGradually(_objectSpread2(_objectSpread2({},defaultAnimateOpts),{},{speed:initialSpeed}));}else{if(w.globals.resized||!w.globals.dataChanged){anim.showDelayedElements();}}if(w.globals.dataChanged&&dynamicAnim&&shouldAnimate){anim.animatePathsGradually(_objectSpread2(_objectSpread2({},defaultAnimateOpts),{},{speed:dataChangeSpeed}));}return el;}},{key:"drawPattern",value:function drawPattern(style,width,height){var stroke=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'#a8a8a8';var strokeWidth=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;var w=this.w;var p=w.globals.dom.Paper.pattern(width,height,function(add){if(style==='horizontalLines'){add.line(0,0,height,0).stroke({color:stroke,width:strokeWidth+1});}else if(style==='verticalLines'){add.line(0,0,0,width).stroke({color:stroke,width:strokeWidth+1});}else if(style==='slantedLines'){add.line(0,0,width,height).stroke({color:stroke,width:strokeWidth});}else if(style==='squares'){add.rect(width,height).fill('none').stroke({color:stroke,width:strokeWidth});}else if(style==='circles'){add.circle(width).fill('none').stroke({color:stroke,width:strokeWidth});}});return p;}},{key:"drawGradient",value:function drawGradient(style,gfrom,gto,opacityFrom,opacityTo){var size=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;var stops=arguments.length>6&&arguments[6]!==undefined?arguments[6]:null;var colorStops=arguments.length>7&&arguments[7]!==undefined?arguments[7]:null;var i=arguments.length>8&&arguments[8]!==undefined?arguments[8]:0;var w=this.w;var g;if(gfrom.length<9&&gfrom.indexOf('#')===0){// if the hex contains alpha and is of 9 digit, skip the opacity
gfrom=Utils$1.hexToRgba(gfrom,opacityFrom);}if(gto.length<9&&gto.indexOf('#')===0){gto=Utils$1.hexToRgba(gto,opacityTo);}var stop1=0;var stop2=1;var stop3=1;var stop4=null;if(stops!==null){stop1=typeof stops[0]!=='undefined'?stops[0]/100:0;stop2=typeof stops[1]!=='undefined'?stops[1]/100:1;stop3=typeof stops[2]!=='undefined'?stops[2]/100:1;stop4=typeof stops[3]!=='undefined'?stops[3]/100:null;}var radial=!!(w.config.chart.type==='donut'||w.config.chart.type==='pie'||w.config.chart.type==='polarArea'||w.config.chart.type==='bubble');if(colorStops===null||colorStops.length===0){g=w.globals.dom.Paper.gradient(radial?'radial':'linear',function(stop){stop.at(stop1,gfrom,opacityFrom);stop.at(stop2,gto,opacityTo);stop.at(stop3,gto,opacityTo);if(stop4!==null){stop.at(stop4,gfrom,opacityFrom);}});}else{g=w.globals.dom.Paper.gradient(radial?'radial':'linear',function(stop){var gradientStops=Array.isArray(colorStops[i])?colorStops[i]:colorStops;gradientStops.forEach(function(s){stop.at(s.offset/100,s.color,s.opacity);});});}if(!radial){if(style==='vertical'){g.from(0,0).to(0,1);}else if(style==='diagonal'){g.from(0,0).to(1,1);}else if(style==='horizontal'){g.from(0,1).to(1,1);}else if(style==='diagonal2'){g.from(1,0).to(0,1);}}else{var offx=w.globals.gridWidth/2;var offy=w.globals.gridHeight/2;if(w.config.chart.type!=='bubble'){g.attr({gradientUnits:'userSpaceOnUse',cx:offx,cy:offy,r:size});}else{g.attr({cx:0.5,cy:0.5,r:0.8,fx:0.2,fy:0.2});}}return g;}},{key:"getTextBasedOnMaxWidth",value:function getTextBasedOnMaxWidth(_ref3){var text=_ref3.text,maxWidth=_ref3.maxWidth,fontSize=_ref3.fontSize,fontFamily=_ref3.fontFamily;var tRects=this.getTextRects(text,fontSize,fontFamily);var wordWidth=tRects.width/text.length;var wordsBasedOnWidth=Math.floor(maxWidth/wordWidth);if(maxWidth<tRects.width){return text.slice(0,wordsBasedOnWidth-3)+'...';}return text;}},{key:"drawText",value:function drawText(_ref4){var _this=this;var x=_ref4.x,y=_ref4.y,text=_ref4.text,textAnchor=_ref4.textAnchor,fontSize=_ref4.fontSize,fontFamily=_ref4.fontFamily,fontWeight=_ref4.fontWeight,foreColor=_ref4.foreColor,opacity=_ref4.opacity,maxWidth=_ref4.maxWidth,_ref4$cssClass=_ref4.cssClass,cssClass=_ref4$cssClass===void 0?'':_ref4$cssClass,_ref4$isPlainText=_ref4.isPlainText,isPlainText=_ref4$isPlainText===void 0?true:_ref4$isPlainText,_ref4$dominantBaselin=_ref4.dominantBaseline,dominantBaseline=_ref4$dominantBaselin===void 0?'auto':_ref4$dominantBaselin;var w=this.w;if(typeof text==='undefined')text='';var truncatedText=text;if(!textAnchor){textAnchor='start';}if(!foreColor||!foreColor.length){foreColor=w.config.chart.foreColor;}fontFamily=fontFamily||w.config.chart.fontFamily;fontSize=fontSize||'11px';fontWeight=fontWeight||'regular';var commonProps={maxWidth:maxWidth,fontSize:fontSize,fontFamily:fontFamily};var elText;if(Array.isArray(text)){elText=w.globals.dom.Paper.text(function(add){for(var i=0;i<text.length;i++){truncatedText=text[i];if(maxWidth){truncatedText=_this.getTextBasedOnMaxWidth(_objectSpread2({text:text[i]},commonProps));}i===0?add.tspan(truncatedText):add.tspan(truncatedText).newLine();}});}else{if(maxWidth){truncatedText=this.getTextBasedOnMaxWidth(_objectSpread2({text:text},commonProps));}elText=isPlainText?w.globals.dom.Paper.plain(text):w.globals.dom.Paper.text(function(add){return add.tspan(truncatedText);});}elText.attr({x:x,y:y,'text-anchor':textAnchor,'dominant-baseline':dominantBaseline,'font-size':fontSize,'font-family':fontFamily,'font-weight':fontWeight,fill:foreColor,class:'apexcharts-text '+cssClass});elText.node.style.fontFamily=fontFamily;elText.node.style.opacity=opacity;return elText;}/**
       * Creates a group with given attributes.
       * @param {number} x - The x-coordinate of the group.
       * @param {number} y - The y-coordinate of the group.
       * @param {Array} lines - The lines to be added to the group.
       * @param {Object} opts - The options for the group.
       * @returns {Object} The created group.
       */},{key:"createGroupWithAttributes",value:function createGroupWithAttributes(x,y,lines,opts){var elPoint=this.group();lines.forEach(function(line){return elPoint.add(line);});elPoint.attr({class:opts.class?opts.class:'',cy:y,cx:x});return elPoint;}/**
       * Draws a plus sign at the given coordinates.
       * @param {number} x - The x-coordinate of the plus sign.
       * @param {number} y - The y-coordinate of the plus sign.
       * @param {number} size - The size of the plus sign.
       * @param {Object} opts - The options for the plus sign.
       * @returns {Object} The created plus sign.
       */},{key:"drawPlus",value:function drawPlus(x,y,size,opts){var halfSize=size/2;var line1=this.drawLine(x,y-halfSize,x,y+halfSize,opts.pointStrokeColor,opts.pointStrokeDashArray,opts.pointStrokeWidth,opts.pointStrokeLineCap);var line2=this.drawLine(x-halfSize,y,x+halfSize,y,opts.pointStrokeColor,opts.pointStrokeDashArray,opts.pointStrokeWidth,opts.pointStrokeLineCap);return this.createGroupWithAttributes(x,y,[line1,line2],opts);}/**
       * Draws an 'X' at the given coordinates.
       * @param {number} x - The x-coordinate of the 'X'.
       * @param {number} y - The y-coordinate of the 'X'.
       * @param {number} size - The size of the 'X'.
       * @param {Object} opts - The options for the 'X'.
       * @returns {Object} The created 'X'.
       */},{key:"drawX",value:function drawX(x,y,size,opts){var halfSize=size/2;var line1=this.drawLine(x-halfSize,y-halfSize,x+halfSize,y+halfSize,opts.pointStrokeColor,opts.pointStrokeDashArray,opts.pointStrokeWidth,opts.pointStrokeLineCap);var line2=this.drawLine(x-halfSize,y+halfSize,x+halfSize,y-halfSize,opts.pointStrokeColor,opts.pointStrokeDashArray,opts.pointStrokeWidth,opts.pointStrokeLineCap);return this.createGroupWithAttributes(x,y,[line1,line2],opts);}},{key:"drawMarker",value:function drawMarker(x,y,opts){x=x||0;var size=opts.pSize||0;var elPoint=null;if((opts===null||opts===void 0?void 0:opts.shape)==='X'||(opts===null||opts===void 0?void 0:opts.shape)==='x'){elPoint=this.drawX(x,y,size,opts);}else if((opts===null||opts===void 0?void 0:opts.shape)==='plus'||(opts===null||opts===void 0?void 0:opts.shape)==='+'){elPoint=this.drawPlus(x,y,size,opts);}else if(opts.shape==='square'||opts.shape==='rect'){var radius=opts.pRadius===undefined?size/2:opts.pRadius;if(y===null||!size){size=0;radius=0;}var nSize=size*1.2+radius;var p=this.drawRect(nSize,nSize,nSize,nSize,radius);p.attr({x:x-nSize/2,y:y-nSize/2,cx:x,cy:y,class:opts.class?opts.class:'',fill:opts.pointFillColor,'fill-opacity':opts.pointFillOpacity?opts.pointFillOpacity:1,stroke:opts.pointStrokeColor,'stroke-width':opts.pointStrokeWidth?opts.pointStrokeWidth:0,'stroke-opacity':opts.pointStrokeOpacity?opts.pointStrokeOpacity:1});elPoint=p;}else if(opts.shape==='circle'||!opts.shape){if(!Utils$1.isNumber(y)){size=0;y=0;}// let nSize = size - opts.pRadius / 2 < 0 ? 0 : size - opts.pRadius / 2
elPoint=this.drawCircle(size,{cx:x,cy:y,class:opts.class?opts.class:'',stroke:opts.pointStrokeColor,fill:opts.pointFillColor,'fill-opacity':opts.pointFillOpacity?opts.pointFillOpacity:1,'stroke-width':opts.pointStrokeWidth?opts.pointStrokeWidth:0,'stroke-opacity':opts.pointStrokeOpacity?opts.pointStrokeOpacity:1});}return elPoint;}},{key:"pathMouseEnter",value:function pathMouseEnter(path,e){var w=this.w;var filters=new Filters(this.ctx);var i=parseInt(path.node.getAttribute('index'),10);var j=parseInt(path.node.getAttribute('j'),10);if(typeof w.config.chart.events.dataPointMouseEnter==='function'){w.config.chart.events.dataPointMouseEnter(e,this.ctx,{seriesIndex:i,dataPointIndex:j,w:w});}this.ctx.events.fireEvent('dataPointMouseEnter',[e,this.ctx,{seriesIndex:i,dataPointIndex:j,w:w}]);if(w.config.states.active.filter.type!=='none'){if(path.node.getAttribute('selected')==='true'){return;}}if(w.config.states.hover.filter.type!=='none'){if(!w.globals.isTouchDevice){var hoverFilter=w.config.states.hover.filter;filters.applyFilter(path,i,hoverFilter.type,hoverFilter.value);}}}},{key:"pathMouseLeave",value:function pathMouseLeave(path,e){var w=this.w;var filters=new Filters(this.ctx);var i=parseInt(path.node.getAttribute('index'),10);var j=parseInt(path.node.getAttribute('j'),10);if(typeof w.config.chart.events.dataPointMouseLeave==='function'){w.config.chart.events.dataPointMouseLeave(e,this.ctx,{seriesIndex:i,dataPointIndex:j,w:w});}this.ctx.events.fireEvent('dataPointMouseLeave',[e,this.ctx,{seriesIndex:i,dataPointIndex:j,w:w}]);if(w.config.states.active.filter.type!=='none'){if(path.node.getAttribute('selected')==='true'){return;}}if(w.config.states.hover.filter.type!=='none'){filters.getDefaultFilter(path,i);}}},{key:"pathMouseDown",value:function pathMouseDown(path,e){var w=this.w;var filters=new Filters(this.ctx);var i=parseInt(path.node.getAttribute('index'),10);var j=parseInt(path.node.getAttribute('j'),10);var selected='false';if(path.node.getAttribute('selected')==='true'){path.node.setAttribute('selected','false');if(w.globals.selectedDataPoints[i].indexOf(j)>-1){var index=w.globals.selectedDataPoints[i].indexOf(j);w.globals.selectedDataPoints[i].splice(index,1);}}else{if(!w.config.states.active.allowMultipleDataPointsSelection&&w.globals.selectedDataPoints.length>0){w.globals.selectedDataPoints=[];var elPaths=w.globals.dom.Paper.select('.apexcharts-series path').members;var elCircles=w.globals.dom.Paper.select('.apexcharts-series circle, .apexcharts-series rect').members;var deSelect=function deSelect(els){Array.prototype.forEach.call(els,function(el){el.node.setAttribute('selected','false');filters.getDefaultFilter(el,i);});};deSelect(elPaths);deSelect(elCircles);}path.node.setAttribute('selected','true');selected='true';if(typeof w.globals.selectedDataPoints[i]==='undefined'){w.globals.selectedDataPoints[i]=[];}w.globals.selectedDataPoints[i].push(j);}if(selected==='true'){var activeFilter=w.config.states.active.filter;if(activeFilter!=='none'){filters.applyFilter(path,i,activeFilter.type,activeFilter.value);}else{// Reapply the hover filter in case it was removed by `deselect`when there is no active filter and it is not a touch device
if(w.config.states.hover.filter!=='none'){if(!w.globals.isTouchDevice){var hoverFilter=w.config.states.hover.filter;filters.applyFilter(path,i,hoverFilter.type,hoverFilter.value);}}}}else{// If the item was deselected, apply hover state filter if it is not a touch device
if(w.config.states.active.filter.type!=='none'){if(w.config.states.hover.filter.type!=='none'&&!w.globals.isTouchDevice){var hoverFilter=w.config.states.hover.filter;filters.applyFilter(path,i,hoverFilter.type,hoverFilter.value);}else{filters.getDefaultFilter(path,i);}}}if(typeof w.config.chart.events.dataPointSelection==='function'){w.config.chart.events.dataPointSelection(e,this.ctx,{selectedDataPoints:w.globals.selectedDataPoints,seriesIndex:i,dataPointIndex:j,w:w});}if(e){this.ctx.events.fireEvent('dataPointSelection',[e,this.ctx,{selectedDataPoints:w.globals.selectedDataPoints,seriesIndex:i,dataPointIndex:j,w:w}]);}}},{key:"rotateAroundCenter",value:function rotateAroundCenter(el){var coord={};if(el&&typeof el.getBBox==='function'){coord=el.getBBox();}var x=coord.x+coord.width/2;var y=coord.y+coord.height/2;return{x:x,y:y};}},{key:"getTextRects",value:function getTextRects(text,fontSize,fontFamily,transform){var useBBox=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;var w=this.w;var virtualText=this.drawText({x:-200,y:-200,text:text,textAnchor:'start',fontSize:fontSize,fontFamily:fontFamily,foreColor:'#fff',opacity:0});if(transform){virtualText.attr('transform',transform);}w.globals.dom.Paper.add(virtualText);var rect=virtualText.bbox();if(!useBBox){rect=virtualText.node.getBoundingClientRect();}virtualText.remove();return{width:rect.width,height:rect.height};}/**
       * append ... to long text
       * http://stackoverflow.com/questions/9241315/trimming-text-to-a-given-pixel-width-in-svg
       * @memberof Graphics
       **/},{key:"placeTextWithEllipsis",value:function placeTextWithEllipsis(textObj,textString,width){if(typeof textObj.getComputedTextLength!=='function')return;textObj.textContent=textString;if(textString.length>0){// ellipsis is needed
if(textObj.getComputedTextLength()>=width/1.1){for(var x=textString.length-3;x>0;x-=3){if(textObj.getSubStringLength(0,x)<=width/1.1){textObj.textContent=textString.substring(0,x)+'...';return;}}textObj.textContent='.';// can't place at all
}}}}],[{key:"setAttrs",value:function setAttrs(el,attrs){for(var key in attrs){if(attrs.hasOwnProperty(key)){el.setAttribute(key,attrs[key]);}}}}]);return Graphics;}();/*
   ** Util functions which are dependent on ApexCharts instance
   */var CoreUtils=/*#__PURE__*/function(){function CoreUtils(ctx){_classCallCheck(this,CoreUtils);this.ctx=ctx;this.w=ctx.w;}_createClass(CoreUtils,[{key:"getStackedSeriesTotals",value:/**
       * @memberof CoreUtils
       * returns the sum of all individual values in a multiple stacked series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [34,36,48,13]
       **/function getStackedSeriesTotals(){var excludedSeriesIndices=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var w=this.w;var total=[];if(w.globals.series.length===0)return total;for(var i=0;i<w.globals.series[w.globals.maxValsInArrayIndex].length;i++){var t=0;for(var j=0;j<w.globals.series.length;j++){if(typeof w.globals.series[j][i]!=='undefined'&&excludedSeriesIndices.indexOf(j)===-1){t+=w.globals.series[j][i];}}total.push(t);}return total;}// get total of the all values inside all series
},{key:"getSeriesTotalByIndex",value:function getSeriesTotalByIndex(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(index===null){// non-plot chart types - pie / donut / circle
return this.w.config.series.reduce(function(acc,cur){return acc+cur;},0);}else{// axis charts - supporting multiple series
return this.w.globals.series[index].reduce(function(acc,cur){return acc+cur;},0);}}/**
       * @memberof CoreUtils
       * returns the sum of values in a multiple stacked grouped charts
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1], [43, 23, 34, 22]]
       * series 1 and 2 are in a group, while series 3 is in another group
       *  @return [[34, 36, 48, 12], [43, 23, 34, 22]]
       **/},{key:"getStackedSeriesTotalsByGroups",value:function getStackedSeriesTotalsByGroups(){var _this=this;var w=this.w;var total=[];w.globals.seriesGroups.forEach(function(sg){var includedIndexes=[];w.config.series.forEach(function(s,si){if(sg.indexOf(s.name)>-1){includedIndexes.push(si);}});var excludedIndices=w.globals.series.map(function(_,fi){return includedIndexes.indexOf(fi)===-1?fi:-1;}).filter(function(f){return f!==-1;});total.push(_this.getStackedSeriesTotals(excludedIndices));});return total;}},{key:"isSeriesNull",value:function isSeriesNull(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var r=[];if(index===null){// non-plot chart types - pie / donut / circle
r=this.w.config.series.filter(function(d){return d!==null;});}else{// axis charts - supporting multiple series
r=this.w.config.series[index].data.filter(function(d){return d!==null;});}return r.length===0;}},{key:"seriesHaveSameValues",value:function seriesHaveSameValues(index){return this.w.globals.series[index].every(function(val,i,arr){return val===arr[0];});}},{key:"getCategoryLabels",value:function getCategoryLabels(labels){var w=this.w;var catLabels=labels.slice();if(w.config.xaxis.convertedCatToNumeric){catLabels=labels.map(function(i,li){return w.config.xaxis.labels.formatter(i-w.globals.minX+1);});}return catLabels;}// maxValsInArrayIndex is the index of series[] which has the largest number of items
},{key:"getLargestSeries",value:function getLargestSeries(){var w=this.w;w.globals.maxValsInArrayIndex=w.globals.series.map(function(a){return a.length;}).indexOf(Math.max.apply(Math,w.globals.series.map(function(a){return a.length;})));}},{key:"getLargestMarkerSize",value:function getLargestMarkerSize(){var w=this.w;var size=0;w.globals.markers.size.forEach(function(m){size=Math.max(size,m);});if(w.config.markers.discrete&&w.config.markers.discrete.length){w.config.markers.discrete.forEach(function(m){size=Math.max(size,m.size);});}if(size>0){size+=w.config.markers.hover.sizeOffset+1;}w.globals.markers.largestSize=size;return size;}/**
       * @memberof Core
       * returns the sum of all values in a series
       * Eg. w.globals.series = [[32,33,43,12], [2,3,5,1]]
       *  @return [120, 11]
       **/},{key:"getSeriesTotals",value:function getSeriesTotals(){var w=this.w;w.globals.seriesTotals=w.globals.series.map(function(ser,index){var total=0;if(Array.isArray(ser)){for(var j=0;j<ser.length;j++){total+=ser[j];}}else{// for pie/donuts/gauges
total+=ser;}return total;});}},{key:"getSeriesTotalsXRange",value:function getSeriesTotalsXRange(minX,maxX){var w=this.w;var seriesTotalsXRange=w.globals.series.map(function(ser,index){var total=0;for(var j=0;j<ser.length;j++){if(w.globals.seriesX[index][j]>minX&&w.globals.seriesX[index][j]<maxX){total+=ser[j];}}return total;});return seriesTotalsXRange;}/**
       * @memberof CoreUtils
       * returns the percentage value of all individual values which can be used in a 100% stacked series
       * Eg. w.globals.series = [[32, 33, 43, 12], [2, 3, 5, 1]]
       *  @return [[94.11, 91.66, 89.58, 92.30], [5.88, 8.33, 10.41, 7.7]]
       **/},{key:"getPercentSeries",value:function getPercentSeries(){var w=this.w;w.globals.seriesPercent=w.globals.series.map(function(ser,index){var seriesPercent=[];if(Array.isArray(ser)){for(var j=0;j<ser.length;j++){var total=w.globals.stackedSeriesTotals[j];var percent=0;if(total){percent=100*ser[j]/total;}seriesPercent.push(percent);}}else{var _total=w.globals.seriesTotals.reduce(function(acc,val){return acc+val;},0);var _percent=100*ser/_total;seriesPercent.push(_percent);}return seriesPercent;});}},{key:"getCalculatedRatios",value:function getCalculatedRatios(){var _this2=this;var w=this.w;var gl=w.globals;var yRatio=[];var invertedYRatio=0;var xRatio=0;var invertedXRatio=0;var zRatio=0;var baseLineY=[];var baseLineInvertedY=0.1;var baseLineX=0;gl.yRange=[];if(gl.isMultipleYAxis){for(var i=0;i<gl.minYArr.length;i++){gl.yRange.push(Math.abs(gl.minYArr[i]-gl.maxYArr[i]));baseLineY.push(0);}}else{gl.yRange.push(Math.abs(gl.minY-gl.maxY));}gl.xRange=Math.abs(gl.maxX-gl.minX);gl.zRange=Math.abs(gl.maxZ-gl.minZ);// multiple y axis
for(var _i=0;_i<gl.yRange.length;_i++){yRatio.push(gl.yRange[_i]/gl.gridHeight);}xRatio=gl.xRange/gl.gridWidth;invertedYRatio=gl.yRange/gl.gridWidth;invertedXRatio=gl.xRange/gl.gridHeight;zRatio=gl.zRange/gl.gridHeight*16;if(!zRatio){zRatio=1;}if(gl.minY!==Number.MIN_VALUE&&Math.abs(gl.minY)!==0){// Negative numbers present in series
gl.hasNegs=true;}// Check we have a map as series may still to be added/updated.
if(w.globals.seriesYAxisReverseMap.length>0){var scaleBaseLineYScale=function scaleBaseLineYScale(y,i){var yAxis=w.config.yaxis[w.globals.seriesYAxisReverseMap[i]];var sign=y<0?-1:1;y=Math.abs(y);if(yAxis.logarithmic){y=_this2.getBaseLog(yAxis.logBase,y);}return-sign*y/yRatio[i];};if(gl.isMultipleYAxis){baseLineY=[];// baseline variables is the 0 of the yaxis which will be needed when there are negatives
for(var _i2=0;_i2<yRatio.length;_i2++){baseLineY.push(scaleBaseLineYScale(gl.minYArr[_i2],_i2));}}else{baseLineY=[];baseLineY.push(scaleBaseLineYScale(gl.minY,0));if(gl.minY!==Number.MIN_VALUE&&Math.abs(gl.minY)!==0){baseLineInvertedY=-gl.minY/invertedYRatio;// this is for bar chart
baseLineX=gl.minX/xRatio;}}}else{baseLineY=[];baseLineY.push(0);baseLineInvertedY=0;baseLineX=0;}return{yRatio:yRatio,invertedYRatio:invertedYRatio,zRatio:zRatio,xRatio:xRatio,invertedXRatio:invertedXRatio,baseLineInvertedY:baseLineInvertedY,baseLineY:baseLineY,baseLineX:baseLineX};}},{key:"getLogSeries",value:function getLogSeries(series){var _this3=this;var w=this.w;w.globals.seriesLog=series.map(function(s,i){var yAxisIndex=w.globals.seriesYAxisReverseMap[i];if(w.config.yaxis[yAxisIndex]&&w.config.yaxis[yAxisIndex].logarithmic){return s.map(function(d){if(d===null)return null;return _this3.getLogVal(w.config.yaxis[yAxisIndex].logBase,d,i);});}else{return s;}});return w.globals.invalidLogScale?series:w.globals.seriesLog;}},{key:"getBaseLog",value:function getBaseLog(base,value){return Math.log(value)/Math.log(base);}},{key:"getLogVal",value:function getLogVal(b,d,seriesIndex){if(d<=0){return 0;// Should be Number.NEGATIVE_INFINITY
}var w=this.w;var min_log_val=w.globals.minYArr[seriesIndex]===0?-1// make sure we dont calculate log of 0
:this.getBaseLog(b,w.globals.minYArr[seriesIndex]);var max_log_val=w.globals.maxYArr[seriesIndex]===0?0// make sure we dont calculate log of 0
:this.getBaseLog(b,w.globals.maxYArr[seriesIndex]);var number_of_height_levels=max_log_val-min_log_val;if(d<1)return d/number_of_height_levels;var log_height_value=this.getBaseLog(b,d)-min_log_val;return log_height_value/number_of_height_levels;}},{key:"getLogYRatios",value:function getLogYRatios(yRatio){var _this4=this;var w=this.w;var gl=this.w.globals;gl.yLogRatio=yRatio.slice();gl.logYRange=gl.yRange.map(function(yRange,i){var yAxisIndex=w.globals.seriesYAxisReverseMap[i];if(w.config.yaxis[yAxisIndex]&&_this4.w.config.yaxis[yAxisIndex].logarithmic){var maxY=-Number.MAX_VALUE;var minY=Number.MIN_VALUE;var range=1;gl.seriesLog.forEach(function(s,si){s.forEach(function(v){if(w.config.yaxis[si]&&w.config.yaxis[si].logarithmic){maxY=Math.max(v,maxY);minY=Math.min(v,minY);}});});range=Math.pow(gl.yRange[i],Math.abs(minY-maxY)/gl.yRange[i]);gl.yLogRatio[i]=range/gl.gridHeight;return range;}});return gl.invalidLogScale?yRatio.slice():gl.yLogRatio;}// Some config objects can be array - and we need to extend them correctly
}],[{key:"checkComboSeries",value:function checkComboSeries(series,chartType){var comboCharts=false;var comboBarCount=0;var comboCount=0;if(chartType===undefined){chartType='line';}// Check if user specified a type in series that may make us a combo chart.
// The default type for chart is "line" and the default for series is the
// chart type, therefore, if the types of all series match the chart type,
// this should not be considered a combo chart.
if(series.length&&typeof series[0].type!=='undefined'){series.forEach(function(s){if(s.type==='bar'||s.type==='column'||s.type==='candlestick'||s.type==='boxPlot'){comboBarCount++;}if(typeof s.type!=='undefined'&&s.type!==chartType){comboCount++;}});}if(comboCount>0){comboCharts=true;}return{comboBarCount:comboBarCount,comboCharts:comboCharts};}},{key:"extendArrayProps",value:function extendArrayProps(configInstance,options,w){var _options,_options2;if((_options=options)!==null&&_options!==void 0&&_options.yaxis){options=configInstance.extendYAxis(options,w);}if((_options2=options)!==null&&_options2!==void 0&&_options2.annotations){var _options3,_options3$annotations,_options4,_options4$annotations;if(options.annotations.yaxis){options=configInstance.extendYAxisAnnotations(options);}if((_options3=options)!==null&&_options3!==void 0&&(_options3$annotations=_options3.annotations)!==null&&_options3$annotations!==void 0&&_options3$annotations.xaxis){options=configInstance.extendXAxisAnnotations(options);}if((_options4=options)!==null&&_options4!==void 0&&(_options4$annotations=_options4.annotations)!==null&&_options4$annotations!==void 0&&_options4$annotations.points){options=configInstance.extendPointAnnotations(options);}}return options;}}]);return CoreUtils;}();var Helpers$4=/*#__PURE__*/function(){function Helpers(annoCtx){_classCallCheck(this,Helpers);this.w=annoCtx.w;this.annoCtx=annoCtx;}_createClass(Helpers,[{key:"setOrientations",value:function setOrientations(anno){var annoIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var w=this.w;if(anno.label.orientation==='vertical'){var i=annoIndex!==null?annoIndex:0;var xAnno=w.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(i,"']"));if(xAnno!==null){var xAnnoCoord=xAnno.getBoundingClientRect();xAnno.setAttribute('x',parseFloat(xAnno.getAttribute('x'))-xAnnoCoord.height+4);if(anno.label.position==='top'){xAnno.setAttribute('y',parseFloat(xAnno.getAttribute('y'))+xAnnoCoord.width);}else{xAnno.setAttribute('y',parseFloat(xAnno.getAttribute('y'))-xAnnoCoord.width);}var annoRotatingCenter=this.annoCtx.graphics.rotateAroundCenter(xAnno);var x=annoRotatingCenter.x;var y=annoRotatingCenter.y;xAnno.setAttribute('transform',"rotate(-90 ".concat(x," ").concat(y,")"));}}}},{key:"addBackgroundToAnno",value:function addBackgroundToAnno(annoEl,anno){var w=this.w;if(!annoEl||typeof anno.label.text==='undefined'||typeof anno.label.text!=='undefined'&&!String(anno.label.text).trim())return null;var elGridRect=w.globals.dom.baseEl.querySelector('.apexcharts-grid').getBoundingClientRect();var coords=annoEl.getBoundingClientRect();var pleft=anno.label.style.padding.left;var pright=anno.label.style.padding.right;var ptop=anno.label.style.padding.top;var pbottom=anno.label.style.padding.bottom;if(anno.label.orientation==='vertical'){ptop=anno.label.style.padding.left;pbottom=anno.label.style.padding.right;pleft=anno.label.style.padding.top;pright=anno.label.style.padding.bottom;}var x1=coords.left-elGridRect.left-pleft;var y1=coords.top-elGridRect.top-ptop;var elRect=this.annoCtx.graphics.drawRect(x1-w.globals.barPadForNumericAxis,y1,coords.width+pleft+pright,coords.height+ptop+pbottom,anno.label.borderRadius,anno.label.style.background,1,anno.label.borderWidth,anno.label.borderColor,0);if(anno.id){// don't escapeString for this ID as it causes duplicate rects
elRect.node.classList.add(anno.id);}return elRect;}},{key:"annotationsBackground",value:function annotationsBackground(){var _this=this;var w=this.w;var add=function add(anno,i,type){var annoLabel=w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type,"-annotations .apexcharts-").concat(type,"-annotation-label[rel='").concat(i,"']"));if(annoLabel){var parent=annoLabel.parentNode;var elRect=_this.addBackgroundToAnno(annoLabel,anno);if(elRect){parent.insertBefore(elRect.node,annoLabel);if(anno.label.mouseEnter){elRect.node.addEventListener('mouseenter',anno.label.mouseEnter.bind(_this,anno));}if(anno.label.mouseLeave){elRect.node.addEventListener('mouseleave',anno.label.mouseLeave.bind(_this,anno));}if(anno.label.click){elRect.node.addEventListener('click',anno.label.click.bind(_this,anno));}}}};w.config.annotations.xaxis.map(function(anno,i){add(anno,i,'xaxis');});w.config.annotations.yaxis.map(function(anno,i){add(anno,i,'yaxis');});w.config.annotations.points.map(function(anno,i){add(anno,i,'point');});}},{key:"getY1Y2",value:function getY1Y2(type,anno){var y=type==='y1'?anno.y:anno.y2;var yP;var clipped=false;var w=this.w;if(this.annoCtx.invertAxis){var labels=w.globals.labels;if(w.config.xaxis.convertedCatToNumeric){labels=w.globals.categoryLabels;}var catIndex=labels.indexOf(y);var xLabel=w.globals.dom.baseEl.querySelector('.apexcharts-yaxis-texts-g text:nth-child('+(catIndex+1)+')');if(xLabel){yP=parseFloat(xLabel.getAttribute('y'));}else{yP=(w.globals.gridHeight/labels.length-1)*(catIndex+1)-w.globals.barHeight;}if(typeof anno.seriesIndex!=='undefined'){if(w.globals.barHeight){yP=yP-w.globals.barHeight/2*(w.globals.series.length-1)+w.globals.barHeight*anno.seriesIndex;}}}else{var yPos;// We can use the index of any series referenced by the Yaxis
// because they will all return the same value.
var seriesIndex=w.globals.seriesYAxisMap[anno.yAxisIndex][0];if(w.config.yaxis[anno.yAxisIndex].logarithmic){var coreUtils=new CoreUtils(this.annoCtx.ctx);y=coreUtils.getLogVal(w.config.yaxis[anno.yAxisIndex].logBase,y,seriesIndex);yPos=y/w.globals.yLogRatio[seriesIndex];}else{yPos=(y-w.globals.minYArr[seriesIndex])/(w.globals.yRange[seriesIndex]/w.globals.gridHeight);}if(yPos>w.globals.gridHeight){yPos=w.globals.gridHeight;clipped=true;}else if(yPos<0){yPos=0;clipped=true;}yP=w.globals.gridHeight-yPos;if(anno.marker&&(anno.y===undefined||anno.y===null)){// point annotation
yP=0;}if(w.config.yaxis[anno.yAxisIndex]&&w.config.yaxis[anno.yAxisIndex].reversed){yP=yPos;}}if(typeof y==='string'&&y.indexOf('px')>-1){yP=parseFloat(y);}return{'yP':yP,'clipped':clipped};}},{key:"getX1X2",value:function getX1X2(type,anno){var x=type==='x1'?anno.x:anno.x2;var w=this.w;var min=this.annoCtx.invertAxis?w.globals.minY:w.globals.minX;var max=this.annoCtx.invertAxis?w.globals.maxY:w.globals.maxX;var range=this.annoCtx.invertAxis?w.globals.yRange[0]:w.globals.xRange;var clipped=false;var xP;if(this.annoCtx.inversedReversedAxis){xP=(max-x)/(range/w.globals.gridWidth);}else{xP=(x-min)/(range/w.globals.gridWidth);}if((w.config.xaxis.type==='category'||w.config.xaxis.convertedCatToNumeric)&&!this.annoCtx.invertAxis&&!w.globals.dataFormatXNumeric){if(!w.config.chart.sparkline.enabled){xP=this.getStringX(x);}}if(typeof x==='string'&&x.indexOf('px')>-1){xP=parseFloat(x);}if((x===undefined||x===null)&&anno.marker){// point annotation in a horizontal chart
xP=w.globals.gridWidth;}if(typeof anno.seriesIndex!=='undefined'){if(w.globals.barWidth&&!this.annoCtx.invertAxis){xP=xP-w.globals.barWidth/2*(w.globals.series.length-1)+w.globals.barWidth*anno.seriesIndex;}}if(xP>w.globals.gridWidth){xP=w.globals.gridWidth;clipped=true;}else if(xP<0){xP=0;clipped=true;}return{'x':xP,'clipped':clipped};}},{key:"getStringX",value:function getStringX(x){var w=this.w;var rX=x;if(w.config.xaxis.convertedCatToNumeric&&w.globals.categoryLabels.length){x=w.globals.categoryLabels.indexOf(x)+1;}var catIndex=w.globals.labels.indexOf(x);var xLabel=w.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g text:nth-child('+(catIndex+1)+')');if(xLabel){rX=parseFloat(xLabel.getAttribute('x'));}return rX;}}]);return Helpers;}();var XAnnotations=/*#__PURE__*/function(){function XAnnotations(annoCtx){_classCallCheck(this,XAnnotations);this.w=annoCtx.w;this.annoCtx=annoCtx;this.invertAxis=this.annoCtx.invertAxis;this.helpers=new Helpers$4(this.annoCtx);}_createClass(XAnnotations,[{key:"addXaxisAnnotation",value:function addXaxisAnnotation(anno,parent,index){var w=this.w;var result=this.helpers.getX1X2('x1',anno);var x1=result.x;var clipX1=result.clipped;var clipX2=true;var x2;var text=anno.label.text;var strokeDashArray=anno.strokeDashArray;if(!Utils$1.isNumber(x1))return;if(anno.x2===null||typeof anno.x2==='undefined'){if(!clipX1){var line=this.annoCtx.graphics.drawLine(x1+anno.offsetX,// x1
0+anno.offsetY,// y1
x1+anno.offsetX,// x2
w.globals.gridHeight+anno.offsetY,// y2
anno.borderColor,// lineColor
strokeDashArray,//dashArray
anno.borderWidth);parent.appendChild(line.node);if(anno.id){line.node.classList.add(anno.id);}}}else{var _result=this.helpers.getX1X2('x2',anno);x2=_result.x;clipX2=_result.clipped;if(!(clipX1&&clipX2)){if(x2<x1){var temp=x1;x1=x2;x2=temp;}var rect=this.annoCtx.graphics.drawRect(x1+anno.offsetX,// x1
0+anno.offsetY,// y1
x2-x1,// x2
w.globals.gridHeight+anno.offsetY,// y2
0,// radius
anno.fillColor,// color
anno.opacity,// opacity,
1,// strokeWidth
anno.borderColor,// strokeColor
strokeDashArray// stokeDashArray
);rect.node.classList.add('apexcharts-annotation-rect');rect.attr('clip-path',"url(#gridRectMask".concat(w.globals.cuid,")"));parent.appendChild(rect.node);if(anno.id){rect.node.classList.add(anno.id);}}}if(!(clipX1&&clipX2)){var textRects=this.annoCtx.graphics.getTextRects(text,parseFloat(anno.label.style.fontSize));var textY=anno.label.position==='top'?4:anno.label.position==='center'?w.globals.gridHeight/2+(anno.label.orientation==='vertical'?textRects.width/2:0):w.globals.gridHeight;var elText=this.annoCtx.graphics.drawText({x:x1+anno.label.offsetX,y:textY+anno.label.offsetY-(anno.label.orientation==='vertical'?anno.label.position==='top'?textRects.width/2-12:-textRects.width/2:0),text:text,textAnchor:anno.label.textAnchor,fontSize:anno.label.style.fontSize,fontFamily:anno.label.style.fontFamily,fontWeight:anno.label.style.fontWeight,foreColor:anno.label.style.color,cssClass:"apexcharts-xaxis-annotation-label ".concat(anno.label.style.cssClass," ").concat(anno.id?anno.id:'')});elText.attr({rel:index});parent.appendChild(elText.node);// after placing the annotations on svg, set any vertically placed annotations
this.annoCtx.helpers.setOrientations(anno,index);}}},{key:"drawXAxisAnnotations",value:function drawXAxisAnnotations(){var _this=this;var w=this.w;var elg=this.annoCtx.graphics.group({class:'apexcharts-xaxis-annotations'});w.config.annotations.xaxis.map(function(anno,index){_this.addXaxisAnnotation(anno,elg.node,index);});return elg;}}]);return XAnnotations;}();/**
   * DateTime Class to manipulate datetime values.
   *
   * @module DateTime
   **/var DateTime=/*#__PURE__*/function(){function DateTime(ctx){_classCallCheck(this,DateTime);this.ctx=ctx;this.w=ctx.w;this.months31=[1,3,5,7,8,10,12];this.months30=[2,4,6,9,11];this.daysCntOfYear=[0,31,59,90,120,151,181,212,243,273,304,334];}_createClass(DateTime,[{key:"isValidDate",value:function isValidDate(date){if(typeof date==='number'){return false;// don't test for timestamps
}return!isNaN(this.parseDate(date));}},{key:"getTimeStamp",value:function getTimeStamp(dateStr){if(!Date.parse(dateStr)){return dateStr;}var utc=this.w.config.xaxis.labels.datetimeUTC;return!utc?new Date(dateStr).getTime():new Date(new Date(dateStr).toISOString().substr(0,25)).getTime();}},{key:"getDate",value:function getDate(timestamp){var utc=this.w.config.xaxis.labels.datetimeUTC;return utc?new Date(new Date(timestamp).toUTCString()):new Date(timestamp);}},{key:"parseDate",value:function parseDate(dateStr){var parsed=Date.parse(dateStr);if(!isNaN(parsed)){return this.getTimeStamp(dateStr);}var output=Date.parse(dateStr.replace(/-/g,'/').replace(/[a-z]+/gi,' '));output=this.getTimeStamp(output);return output;}// This fixes the difference of x-axis labels between chrome/safari
// Fixes #1726, #1544, #1485, #1255
},{key:"parseDateWithTimezone",value:function parseDateWithTimezone(dateStr){return Date.parse(dateStr.replace(/-/g,'/').replace(/[a-z]+/gi,' '));}// http://stackoverflow.com/questions/14638018/current-time-formatting-with-javascript#answer-14638191
},{key:"formatDate",value:function formatDate(date,format){var locale=this.w.globals.locale;var utc=this.w.config.xaxis.labels.datetimeUTC;var MMMM=['\x00'].concat(_toConsumableArray(locale.months));var MMM=['\x01'].concat(_toConsumableArray(locale.shortMonths));var dddd=['\x02'].concat(_toConsumableArray(locale.days));var ddd=['\x03'].concat(_toConsumableArray(locale.shortDays));function ii(i,len){var s=i+'';len=len||2;while(s.length<len){s='0'+s;}return s;}var y=utc?date.getUTCFullYear():date.getFullYear();format=format.replace(/(^|[^\\])yyyy+/g,'$1'+y);format=format.replace(/(^|[^\\])yy/g,'$1'+y.toString().substr(2,2));format=format.replace(/(^|[^\\])y/g,'$1'+y);var M=(utc?date.getUTCMonth():date.getMonth())+1;format=format.replace(/(^|[^\\])MMMM+/g,'$1'+MMMM[0]);format=format.replace(/(^|[^\\])MMM/g,'$1'+MMM[0]);format=format.replace(/(^|[^\\])MM/g,'$1'+ii(M));format=format.replace(/(^|[^\\])M/g,'$1'+M);var d=utc?date.getUTCDate():date.getDate();format=format.replace(/(^|[^\\])dddd+/g,'$1'+dddd[0]);format=format.replace(/(^|[^\\])ddd/g,'$1'+ddd[0]);format=format.replace(/(^|[^\\])dd/g,'$1'+ii(d));format=format.replace(/(^|[^\\])d/g,'$1'+d);var H=utc?date.getUTCHours():date.getHours();format=format.replace(/(^|[^\\])HH+/g,'$1'+ii(H));format=format.replace(/(^|[^\\])H/g,'$1'+H);var h=H>12?H-12:H===0?12:H;format=format.replace(/(^|[^\\])hh+/g,'$1'+ii(h));format=format.replace(/(^|[^\\])h/g,'$1'+h);var m=utc?date.getUTCMinutes():date.getMinutes();format=format.replace(/(^|[^\\])mm+/g,'$1'+ii(m));format=format.replace(/(^|[^\\])m/g,'$1'+m);var s=utc?date.getUTCSeconds():date.getSeconds();format=format.replace(/(^|[^\\])ss+/g,'$1'+ii(s));format=format.replace(/(^|[^\\])s/g,'$1'+s);var f=utc?date.getUTCMilliseconds():date.getMilliseconds();format=format.replace(/(^|[^\\])fff+/g,'$1'+ii(f,3));f=Math.round(f/10);format=format.replace(/(^|[^\\])ff/g,'$1'+ii(f));f=Math.round(f/10);format=format.replace(/(^|[^\\])f/g,'$1'+f);var T=H<12?'AM':'PM';format=format.replace(/(^|[^\\])TT+/g,'$1'+T);format=format.replace(/(^|[^\\])T/g,'$1'+T.charAt(0));var t=T.toLowerCase();format=format.replace(/(^|[^\\])tt+/g,'$1'+t);format=format.replace(/(^|[^\\])t/g,'$1'+t.charAt(0));var tz=-date.getTimezoneOffset();var K=utc||!tz?'Z':tz>0?'+':'-';if(!utc){tz=Math.abs(tz);var tzHrs=Math.floor(tz/60);var tzMin=tz%60;K+=ii(tzHrs)+':'+ii(tzMin);}format=format.replace(/(^|[^\\])K/g,'$1'+K);var day=(utc?date.getUTCDay():date.getDay())+1;format=format.replace(new RegExp(dddd[0],'g'),dddd[day]);format=format.replace(new RegExp(ddd[0],'g'),ddd[day]);format=format.replace(new RegExp(MMMM[0],'g'),MMMM[M]);format=format.replace(new RegExp(MMM[0],'g'),MMM[M]);format=format.replace(/\\(.)/g,'$1');return format;}},{key:"getTimeUnitsfromTimestamp",value:function getTimeUnitsfromTimestamp(minX,maxX,utc){var w=this.w;if(w.config.xaxis.min!==undefined){minX=w.config.xaxis.min;}if(w.config.xaxis.max!==undefined){maxX=w.config.xaxis.max;}var tsMin=this.getDate(minX);var tsMax=this.getDate(maxX);var minD=this.formatDate(tsMin,'yyyy MM dd HH mm ss fff').split(' ');var maxD=this.formatDate(tsMax,'yyyy MM dd HH mm ss fff').split(' ');return{minMillisecond:parseInt(minD[6],10),maxMillisecond:parseInt(maxD[6],10),minSecond:parseInt(minD[5],10),maxSecond:parseInt(maxD[5],10),minMinute:parseInt(minD[4],10),maxMinute:parseInt(maxD[4],10),minHour:parseInt(minD[3],10),maxHour:parseInt(maxD[3],10),minDate:parseInt(minD[2],10),maxDate:parseInt(maxD[2],10),minMonth:parseInt(minD[1],10)-1,maxMonth:parseInt(maxD[1],10)-1,minYear:parseInt(minD[0],10),maxYear:parseInt(maxD[0],10)};}},{key:"isLeapYear",value:function isLeapYear(year){return year%4===0&&year%100!==0||year%400===0;}},{key:"calculcateLastDaysOfMonth",value:function calculcateLastDaysOfMonth(month,year,subtract){var days=this.determineDaysOfMonths(month,year);// whatever days we get, subtract the number of days asked
return days-subtract;}},{key:"determineDaysOfYear",value:function determineDaysOfYear(year){var days=365;if(this.isLeapYear(year)){days=366;}return days;}},{key:"determineRemainingDaysOfYear",value:function determineRemainingDaysOfYear(year,month,date){var dayOfYear=this.daysCntOfYear[month]+date;if(month>1&&this.isLeapYear())dayOfYear++;return dayOfYear;}},{key:"determineDaysOfMonths",value:function determineDaysOfMonths(month,year){var days=30;month=Utils$1.monthMod(month);switch(true){case this.months30.indexOf(month)>-1:if(month===2){if(this.isLeapYear(year)){days=29;}else{days=28;}}break;case this.months31.indexOf(month)>-1:days=31;break;default:days=31;break;}return days;}}]);return DateTime;}();/**
   * ApexCharts Formatter Class for setting value formatters for axes as well as tooltips.
   *
   * @module Formatters
   **/var Formatters=/*#__PURE__*/function(){function Formatters(ctx){_classCallCheck(this,Formatters);this.ctx=ctx;this.w=ctx.w;this.tooltipKeyFormat='dd MMM';}_createClass(Formatters,[{key:"xLabelFormat",value:function xLabelFormat(fn,val,timestamp,opts){var w=this.w;if(w.config.xaxis.type==='datetime'){if(w.config.xaxis.labels.formatter===undefined){// if user has not specified a custom formatter, use the default tooltip.x.format
if(w.config.tooltip.x.formatter===undefined){var datetimeObj=new DateTime(this.ctx);return datetimeObj.formatDate(datetimeObj.getDate(val),w.config.tooltip.x.format);}}}return fn(val,timestamp,opts);}},{key:"defaultGeneralFormatter",value:function defaultGeneralFormatter(val){if(Array.isArray(val)){return val.map(function(v){return v;});}else{return val;}}},{key:"defaultYFormatter",value:function defaultYFormatter(v,yaxe,i){var w=this.w;if(Utils$1.isNumber(v)){if(w.globals.yValueDecimal!==0){v=v.toFixed(yaxe.decimalsInFloat!==undefined?yaxe.decimalsInFloat:w.globals.yValueDecimal);}else{// We have an integer value but the label is not an integer. We can
// deduce this is due to the number of ticks exceeding the even lower
// integer range. Add an additional decimal place only in this case.
var f=v.toFixed(0);// Do not change the == to ===
v=v==f?f:v.toFixed(1);}}return v;}},{key:"setLabelFormatters",value:function setLabelFormatters(){var _this=this;var w=this.w;w.globals.xaxisTooltipFormatter=function(val){return _this.defaultGeneralFormatter(val);};w.globals.ttKeyFormatter=function(val){return _this.defaultGeneralFormatter(val);};w.globals.ttZFormatter=function(val){return val;};w.globals.legendFormatter=function(val){return _this.defaultGeneralFormatter(val);};// formatter function will always overwrite format property
if(w.config.xaxis.labels.formatter!==undefined){w.globals.xLabelFormatter=w.config.xaxis.labels.formatter;}else{w.globals.xLabelFormatter=function(val){if(Utils$1.isNumber(val)){if(!w.config.xaxis.convertedCatToNumeric&&w.config.xaxis.type==='numeric'){if(Utils$1.isNumber(w.config.xaxis.decimalsInFloat)){return val.toFixed(w.config.xaxis.decimalsInFloat);}else{var diff=w.globals.maxX-w.globals.minX;if(diff>0&&diff<100){return val.toFixed(1);}return val.toFixed(0);}}if(w.globals.isBarHorizontal){var range=w.globals.maxY-w.globals.minYArr;if(range<4){return val.toFixed(1);}}return val.toFixed(0);}return val;};}if(typeof w.config.tooltip.x.formatter==='function'){w.globals.ttKeyFormatter=w.config.tooltip.x.formatter;}else{w.globals.ttKeyFormatter=w.globals.xLabelFormatter;}if(typeof w.config.xaxis.tooltip.formatter==='function'){w.globals.xaxisTooltipFormatter=w.config.xaxis.tooltip.formatter;}if(Array.isArray(w.config.tooltip.y)){w.globals.ttVal=w.config.tooltip.y;}else{if(w.config.tooltip.y.formatter!==undefined){w.globals.ttVal=w.config.tooltip.y;}}if(w.config.tooltip.z.formatter!==undefined){w.globals.ttZFormatter=w.config.tooltip.z.formatter;}// legend formatter - if user wants to append any global values of series to legend text
if(w.config.legend.formatter!==undefined){w.globals.legendFormatter=w.config.legend.formatter;}// formatter function will always overwrite format property
w.config.yaxis.forEach(function(yaxe,i){if(yaxe.labels.formatter!==undefined){w.globals.yLabelFormatters[i]=yaxe.labels.formatter;}else{w.globals.yLabelFormatters[i]=function(val){if(!w.globals.xyCharts)return val;if(Array.isArray(val)){return val.map(function(v){return _this.defaultYFormatter(v,yaxe,i);});}else{return _this.defaultYFormatter(val,yaxe,i);}};}});return w.globals;}},{key:"heatmapLabelFormatters",value:function heatmapLabelFormatters(){var w=this.w;if(w.config.chart.type==='heatmap'){w.globals.yAxisScale[0].result=w.globals.seriesNames.slice();//  get the longest string from the labels array and also apply label formatter to it
var longest=w.globals.seriesNames.reduce(function(a,b){return a.length>b.length?a:b;},0);w.globals.yAxisScale[0].niceMax=longest;w.globals.yAxisScale[0].niceMin=longest;}}}]);return Formatters;}();var AxesUtils=/*#__PURE__*/function(){function AxesUtils(ctx){_classCallCheck(this,AxesUtils);this.ctx=ctx;this.w=ctx.w;}// Based on the formatter function, get the label text and position
_createClass(AxesUtils,[{key:"getLabel",value:function getLabel(labels,timescaleLabels,x,i){var drawnLabels=arguments.length>4&&arguments[4]!==undefined?arguments[4]:[];var fontSize=arguments.length>5&&arguments[5]!==undefined?arguments[5]:'12px';var isLeafGroup=arguments.length>6&&arguments[6]!==undefined?arguments[6]:true;var w=this.w;var rawLabel=typeof labels[i]==='undefined'?'':labels[i];var label=rawLabel;var xlbFormatter=w.globals.xLabelFormatter;var customFormatter=w.config.xaxis.labels.formatter;var isBold=false;var xFormat=new Formatters(this.ctx);var timestamp=rawLabel;if(isLeafGroup){label=xFormat.xLabelFormat(xlbFormatter,rawLabel,timestamp,{i:i,dateFormatter:new DateTime(this.ctx).formatDate,w:w});if(customFormatter!==undefined){label=customFormatter(rawLabel,labels[i],{i:i,dateFormatter:new DateTime(this.ctx).formatDate,w:w});}}var determineHighestUnit=function determineHighestUnit(unit){var highestUnit=null;timescaleLabels.forEach(function(t){if(t.unit==='month'){highestUnit='year';}else if(t.unit==='day'){highestUnit='month';}else if(t.unit==='hour'){highestUnit='day';}else if(t.unit==='minute'){highestUnit='hour';}});return highestUnit===unit;};if(timescaleLabels.length>0){isBold=determineHighestUnit(timescaleLabels[i].unit);x=timescaleLabels[i].position;label=timescaleLabels[i].value;}else{if(w.config.xaxis.type==='datetime'&&customFormatter===undefined){label='';}}if(typeof label==='undefined')label='';label=Array.isArray(label)?label:label.toString();var graphics=new Graphics(this.ctx);var textRect={};if(w.globals.rotateXLabels&&isLeafGroup){textRect=graphics.getTextRects(label,parseInt(fontSize,10),null,"rotate(".concat(w.config.xaxis.labels.rotate," 0 0)"),false);}else{textRect=graphics.getTextRects(label,parseInt(fontSize,10));}var allowDuplicatesInTimeScale=!w.config.xaxis.labels.showDuplicates&&this.ctx.timeScale;if(!Array.isArray(label)&&(String(label)==='NaN'||drawnLabels.indexOf(label)>=0&&allowDuplicatesInTimeScale)){label='';}return{x:x,text:label,textRect:textRect,isBold:isBold};}},{key:"checkLabelBasedOnTickamount",value:function checkLabelBasedOnTickamount(i,label,labelsLen){var w=this.w;var ticks=w.config.xaxis.tickAmount;if(ticks==='dataPoints')ticks=Math.round(w.globals.gridWidth/120);if(ticks>labelsLen)return label;var tickMultiple=Math.round(labelsLen/(ticks+1));if(i%tickMultiple===0){return label;}else{label.text='';}return label;}},{key:"checkForOverflowingLabels",value:function checkForOverflowingLabels(i,label,labelsLen,drawnLabels,drawnLabelsRects){var w=this.w;if(i===0){// check if first label is being truncated
if(w.globals.skipFirstTimelinelabel){label.text='';}}if(i===labelsLen-1){// check if last label is being truncated
if(w.globals.skipLastTimelinelabel){label.text='';}}if(w.config.xaxis.labels.hideOverlappingLabels&&drawnLabels.length>0){var prev=drawnLabelsRects[drawnLabelsRects.length-1];if(label.x<prev.textRect.width/(w.globals.rotateXLabels?Math.abs(w.config.xaxis.labels.rotate)/12:1.01)+prev.x){label.text='';}}return label;}},{key:"checkForReversedLabels",value:function checkForReversedLabels(i,labels){var w=this.w;if(w.config.yaxis[i]&&w.config.yaxis[i].reversed){labels.reverse();}return labels;}},{key:"isYAxisHidden",value:function isYAxisHidden(index){var w=this.w;var coreUtils=new CoreUtils(this.ctx);var allCollapsed=!w.globals.seriesYAxisMap[index].some(function(si){return w.globals.collapsedSeriesIndices.indexOf(si)===-1;});return allCollapsed||!w.config.yaxis[index].show||!w.config.yaxis[index].showForNullSeries&&coreUtils.isSeriesNull(index);}// get the label color for y-axis
// realIndex is the actual series index, while i is the tick Index
},{key:"getYAxisForeColor",value:function getYAxisForeColor(yColors,realIndex){var w=this.w;if(Array.isArray(yColors)&&w.globals.yAxisScale[realIndex]){this.ctx.theme.pushExtraColors(yColors,w.globals.yAxisScale[realIndex].result.length,false);}return yColors;}},{key:"drawYAxisTicks",value:function drawYAxisTicks(x,tickAmount,axisBorder,axisTicks,realIndex,labelsDivider,elYaxis){var w=this.w;var graphics=new Graphics(this.ctx);// initial label position = 0;
var t=w.globals.translateY;if(axisTicks.show&&tickAmount>0){if(w.config.yaxis[realIndex].opposite===true)x=x+axisTicks.width;for(var i=tickAmount;i>=0;i--){var tY=t+tickAmount/10+w.config.yaxis[realIndex].labels.offsetY-1;if(w.globals.isBarHorizontal){tY=labelsDivider*i;}if(w.config.chart.type==='heatmap'){tY=tY+labelsDivider/2;}var elTick=graphics.drawLine(x+axisBorder.offsetX-axisTicks.width+axisTicks.offsetX,tY+axisTicks.offsetY,x+axisBorder.offsetX+axisTicks.offsetX,tY+axisTicks.offsetY,axisTicks.color);elYaxis.add(elTick);t=t+labelsDivider;}}}}]);return AxesUtils;}();var YAnnotations=/*#__PURE__*/function(){function YAnnotations(annoCtx){_classCallCheck(this,YAnnotations);this.w=annoCtx.w;this.annoCtx=annoCtx;this.helpers=new Helpers$4(this.annoCtx);this.axesUtils=new AxesUtils(this.annoCtx);}_createClass(YAnnotations,[{key:"addYaxisAnnotation",value:function addYaxisAnnotation(anno,parent,index){var w=this.w;var strokeDashArray=anno.strokeDashArray;var result=this.helpers.getY1Y2('y1',anno);var y1=result.yP;var clipY1=result.clipped;var y2;var clipY2=true;var drawn=false;var text=anno.label.text;if(anno.y2===null||typeof anno.y2==='undefined'){if(!clipY1){drawn=true;var line=this.annoCtx.graphics.drawLine(0+anno.offsetX,// x1
y1+anno.offsetY,// y1
this._getYAxisAnnotationWidth(anno),// x2
y1+anno.offsetY,// y2
anno.borderColor,// lineColor
strokeDashArray,// dashArray
anno.borderWidth);parent.appendChild(line.node);if(anno.id){line.node.classList.add(anno.id);}}}else{result=this.helpers.getY1Y2('y2',anno);y2=result.yP;clipY2=result.clipped;if(y2>y1){var temp=y1;y1=y2;y2=temp;}if(!(clipY1&&clipY2)){drawn=true;var rect=this.annoCtx.graphics.drawRect(0+anno.offsetX,// x1
y2+anno.offsetY,// y1
this._getYAxisAnnotationWidth(anno),// x2
y1-y2,// y2
0,// radius
anno.fillColor,// color
anno.opacity,// opacity,
1,// strokeWidth
anno.borderColor,// strokeColor
strokeDashArray// stokeDashArray
);rect.node.classList.add('apexcharts-annotation-rect');rect.attr('clip-path',"url(#gridRectMask".concat(w.globals.cuid,")"));parent.appendChild(rect.node);if(anno.id){rect.node.classList.add(anno.id);}}}if(drawn){var textX=anno.label.position==='right'?w.globals.gridWidth:anno.label.position==='center'?w.globals.gridWidth/2:0;var elText=this.annoCtx.graphics.drawText({x:textX+anno.label.offsetX,y:(y2!=null?y2:y1)+anno.label.offsetY-3,text:text,textAnchor:anno.label.textAnchor,fontSize:anno.label.style.fontSize,fontFamily:anno.label.style.fontFamily,fontWeight:anno.label.style.fontWeight,foreColor:anno.label.style.color,cssClass:"apexcharts-yaxis-annotation-label ".concat(anno.label.style.cssClass," ").concat(anno.id?anno.id:'')});elText.attr({rel:index});parent.appendChild(elText.node);}}},{key:"_getYAxisAnnotationWidth",value:function _getYAxisAnnotationWidth(anno){// issue apexcharts.js#2009
var w=this.w;var width=w.globals.gridWidth;if(anno.width.indexOf('%')>-1){width=w.globals.gridWidth*parseInt(anno.width,10)/100;}else{width=parseInt(anno.width,10);}return width+anno.offsetX;}},{key:"drawYAxisAnnotations",value:function drawYAxisAnnotations(){var _this=this;var w=this.w;var elg=this.annoCtx.graphics.group({class:'apexcharts-yaxis-annotations'});w.config.annotations.yaxis.forEach(function(anno,index){w.globals.seriesYAxisMap[anno.yAxisIndex][0];if(!_this.axesUtils.isYAxisHidden(anno.yAxisIndex)){_this.addYaxisAnnotation(anno,elg.node,index);}});return elg;}}]);return YAnnotations;}();var PointAnnotations=/*#__PURE__*/function(){function PointAnnotations(annoCtx){_classCallCheck(this,PointAnnotations);this.w=annoCtx.w;this.annoCtx=annoCtx;this.helpers=new Helpers$4(this.annoCtx);}_createClass(PointAnnotations,[{key:"addPointAnnotation",value:function addPointAnnotation(anno,parent,index){this.w;var result=this.helpers.getX1X2('x1',anno);var x=result.x;var clipX=result.clipped;result=this.helpers.getY1Y2('y1',anno);var y=result.yP;var clipY=result.clipped;if(!Utils$1.isNumber(x))return;if(!(clipY||clipX)){var optsPoints={pSize:anno.marker.size,pointStrokeWidth:anno.marker.strokeWidth,pointFillColor:anno.marker.fillColor,pointStrokeColor:anno.marker.strokeColor,shape:anno.marker.shape,pRadius:anno.marker.radius,class:"apexcharts-point-annotation-marker ".concat(anno.marker.cssClass," ").concat(anno.id?anno.id:'')};var point=this.annoCtx.graphics.drawMarker(x+anno.marker.offsetX,y+anno.marker.offsetY,optsPoints);parent.appendChild(point.node);var text=anno.label.text?anno.label.text:'';var elText=this.annoCtx.graphics.drawText({x:x+anno.label.offsetX,y:y+anno.label.offsetY-anno.marker.size-parseFloat(anno.label.style.fontSize)/1.6,text:text,textAnchor:anno.label.textAnchor,fontSize:anno.label.style.fontSize,fontFamily:anno.label.style.fontFamily,fontWeight:anno.label.style.fontWeight,foreColor:anno.label.style.color,cssClass:"apexcharts-point-annotation-label ".concat(anno.label.style.cssClass," ").concat(anno.id?anno.id:'')});elText.attr({rel:index});parent.appendChild(elText.node);// TODO: deprecate this as we will use custom
if(anno.customSVG.SVG){var g=this.annoCtx.graphics.group({class:'apexcharts-point-annotations-custom-svg '+anno.customSVG.cssClass});g.attr({transform:"translate(".concat(x+anno.customSVG.offsetX,", ").concat(y+anno.customSVG.offsetY,")")});g.node.innerHTML=anno.customSVG.SVG;parent.appendChild(g.node);}if(anno.image.path){var imgWidth=anno.image.width?anno.image.width:20;var imgHeight=anno.image.height?anno.image.height:20;point=this.annoCtx.addImage({x:x+anno.image.offsetX-imgWidth/2,y:y+anno.image.offsetY-imgHeight/2,width:imgWidth,height:imgHeight,path:anno.image.path,appendTo:'.apexcharts-point-annotations'});}if(anno.mouseEnter){point.node.addEventListener('mouseenter',anno.mouseEnter.bind(this,anno));}if(anno.mouseLeave){point.node.addEventListener('mouseleave',anno.mouseLeave.bind(this,anno));}if(anno.click){point.node.addEventListener('click',anno.click.bind(this,anno));}}}},{key:"drawPointAnnotations",value:function drawPointAnnotations(){var _this=this;var w=this.w;var elg=this.annoCtx.graphics.group({class:'apexcharts-point-annotations'});w.config.annotations.points.map(function(anno,index){_this.addPointAnnotation(anno,elg.node,index);});return elg;}}]);return PointAnnotations;}();const name="en";const options={months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],toolbar:{exportToSVG:"Download SVG",exportToPNG:"Download PNG",exportToCSV:"Download CSV",menu:"Menu",selection:"Selection",selectionZoom:"Selection Zoom",zoomIn:"Zoom In",zoomOut:"Zoom Out",pan:"Panning",reset:"Reset Zoom"}};var en={name:name,options:options};var Options=/*#__PURE__*/function(){function Options(){_classCallCheck(this,Options);this.yAxis={show:true,showAlways:false,showForNullSeries:true,seriesName:undefined,opposite:false,reversed:false,logarithmic:false,logBase:10,tickAmount:undefined,stepSize:undefined,forceNiceScale:false,max:undefined,min:undefined,floating:false,decimalsInFloat:undefined,labels:{show:true,minWidth:0,maxWidth:160,offsetX:0,offsetY:0,align:undefined,rotate:0,padding:20,style:{colors:[],fontSize:'11px',fontWeight:400,fontFamily:undefined,cssClass:''},formatter:undefined},axisBorder:{show:false,color:'#e0e0e0',width:1,offsetX:0,offsetY:0},axisTicks:{show:false,color:'#e0e0e0',width:6,offsetX:0,offsetY:0},title:{text:undefined,rotate:-90,offsetY:0,offsetX:0,style:{color:undefined,fontSize:'11px',fontWeight:900,fontFamily:undefined,cssClass:''}},tooltip:{enabled:false,offsetX:0},crosshairs:{show:true,position:'front',stroke:{color:'#b6b6b6',width:1,dashArray:0}}};this.pointAnnotation={id:undefined,x:0,y:null,yAxisIndex:0,seriesIndex:undefined,mouseEnter:undefined,mouseLeave:undefined,click:undefined,marker:{size:4,fillColor:'#fff',strokeWidth:2,strokeColor:'#333',shape:'circle',offsetX:0,offsetY:0,radius:2,cssClass:''},label:{borderColor:'#c2c2c2',borderWidth:1,borderRadius:2,text:undefined,textAnchor:'middle',offsetX:0,offsetY:0,mouseEnter:undefined,mouseLeave:undefined,click:undefined,style:{background:'#fff',color:undefined,fontSize:'11px',fontFamily:undefined,fontWeight:400,cssClass:'',padding:{left:5,right:5,top:2,bottom:2}}},customSVG:{// this will be deprecated in the next major version as it is going to be replaced with a better alternative below
SVG:undefined,cssClass:undefined,offsetX:0,offsetY:0},image:{path:undefined,width:20,height:20,offsetX:0,offsetY:0}};this.yAxisAnnotation={id:undefined,y:0,y2:null,strokeDashArray:1,fillColor:'#c2c2c2',borderColor:'#c2c2c2',borderWidth:1,opacity:0.3,offsetX:0,offsetY:0,width:'100%',yAxisIndex:0,label:{borderColor:'#c2c2c2',borderWidth:1,borderRadius:2,text:undefined,textAnchor:'end',position:'right',offsetX:0,offsetY:-3,mouseEnter:undefined,mouseLeave:undefined,click:undefined,style:{background:'#fff',color:undefined,fontSize:'11px',fontFamily:undefined,fontWeight:400,cssClass:'',padding:{left:5,right:5,top:2,bottom:2}}}};this.xAxisAnnotation={id:undefined,x:0,x2:null,strokeDashArray:1,fillColor:'#c2c2c2',borderColor:'#c2c2c2',borderWidth:1,opacity:0.3,offsetX:0,offsetY:0,label:{borderColor:'#c2c2c2',borderWidth:1,borderRadius:2,text:undefined,textAnchor:'middle',orientation:'vertical',position:'top',offsetX:0,offsetY:0,mouseEnter:undefined,mouseLeave:undefined,click:undefined,style:{background:'#fff',color:undefined,fontSize:'11px',fontFamily:undefined,fontWeight:400,cssClass:'',padding:{left:5,right:5,top:2,bottom:2}}}};this.text={x:0,y:0,text:'',textAnchor:'start',foreColor:undefined,fontSize:'13px',fontFamily:undefined,fontWeight:400,appendTo:'.apexcharts-annotations',backgroundColor:'transparent',borderColor:'#c2c2c2',borderRadius:0,borderWidth:0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2};}_createClass(Options,[{key:"init",value:function init(){return{annotations:{yaxis:[this.yAxisAnnotation],xaxis:[this.xAxisAnnotation],points:[this.pointAnnotation],texts:[],images:[],shapes:[]},chart:{animations:{enabled:true,easing:'easeinout',// linear, easeout, easein, easeinout, swing, bounce, elastic
speed:800,animateGradually:{delay:150,enabled:true},dynamicAnimation:{enabled:true,speed:350}},background:'transparent',locales:[en],defaultLocale:'en',dropShadow:{enabled:false,enabledOnSeries:undefined,top:2,left:2,blur:4,color:'#000',opacity:0.35},events:{animationEnd:undefined,beforeMount:undefined,mounted:undefined,updated:undefined,click:undefined,mouseMove:undefined,mouseLeave:undefined,xAxisLabelClick:undefined,legendClick:undefined,markerClick:undefined,selection:undefined,dataPointSelection:undefined,dataPointMouseEnter:undefined,dataPointMouseLeave:undefined,beforeZoom:undefined,beforeResetZoom:undefined,zoomed:undefined,scrolled:undefined,brushScrolled:undefined},foreColor:'#373d3f',fontFamily:'Helvetica, Arial, sans-serif',height:'auto',parentHeightOffset:15,redrawOnParentResize:true,redrawOnWindowResize:true,id:undefined,group:undefined,nonce:undefined,offsetX:0,offsetY:0,selection:{enabled:false,type:'x',// selectedPoints: undefined, // default datapoints that should be selected automatically
fill:{color:'#24292e',opacity:0.1},stroke:{width:1,color:'#24292e',opacity:0.4,dashArray:3},xaxis:{min:undefined,max:undefined},yaxis:{min:undefined,max:undefined}},sparkline:{enabled:false},brush:{enabled:false,autoScaleYaxis:true,target:undefined,targets:undefined},stacked:false,stackOnlyBar:true,// mixed chart with stacked bars and line series - incorrect line draw #907
stackType:'normal',toolbar:{show:true,offsetX:0,offsetY:0,tools:{download:true,selection:true,zoom:true,zoomin:true,zoomout:true,pan:true,reset:true,customIcons:[]},export:{csv:{filename:undefined,columnDelimiter:',',headerCategory:'category',headerValue:'value',dateFormatter:function dateFormatter(timestamp){return new Date(timestamp).toDateString();}},png:{filename:undefined},svg:{filename:undefined}},autoSelected:'zoom'// accepts -> zoom, pan, selection
},type:'line',width:'100%',zoom:{enabled:true,type:'x',autoScaleYaxis:false,zoomedArea:{fill:{color:'#90CAF9',opacity:0.4},stroke:{color:'#0D47A1',opacity:0.4,width:1}}}},plotOptions:{area:{fillTo:'origin'},bar:{horizontal:false,columnWidth:'70%',// should be in percent 0 - 100
barHeight:'70%',// should be in percent 0 - 100
distributed:false,borderRadius:0,borderRadiusApplication:'around',// [around, end]
borderRadiusWhenStacked:'last',// [all, last]
rangeBarOverlap:true,rangeBarGroupRows:false,hideZeroBarsWhenGrouped:false,isDumbbell:false,dumbbellColors:undefined,isFunnel:false,isFunnel3d:true,colors:{ranges:[],backgroundBarColors:[],backgroundBarOpacity:1,backgroundBarRadius:0},dataLabels:{position:'top',// top, center, bottom
maxItems:100,hideOverflowingLabels:true,orientation:'horizontal',total:{enabled:false,formatter:undefined,offsetX:0,offsetY:0,style:{color:'#373d3f',fontSize:'12px',fontFamily:undefined,fontWeight:600}}}},bubble:{zScaling:true,minBubbleRadius:undefined,maxBubbleRadius:undefined},candlestick:{colors:{upward:'#00B746',downward:'#EF403C'},wick:{useFillColor:true}},boxPlot:{colors:{upper:'#00E396',lower:'#008FFB'}},heatmap:{radius:2,enableShades:true,shadeIntensity:0.5,reverseNegativeShade:false,distributed:false,useFillColorAsStroke:false,colorScale:{inverse:false,ranges:[],min:undefined,max:undefined}},treemap:{enableShades:true,shadeIntensity:0.5,distributed:false,reverseNegativeShade:false,useFillColorAsStroke:false,borderRadius:4,dataLabels:{format:'scale'// scale | truncate
},colorScale:{inverse:false,ranges:[],min:undefined,max:undefined}},radialBar:{inverseOrder:false,startAngle:0,endAngle:360,offsetX:0,offsetY:0,hollow:{margin:5,size:'50%',background:'transparent',image:undefined,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:true,position:'front',dropShadow:{enabled:false,top:0,left:0,blur:3,color:'#000',opacity:0.5}},track:{show:true,startAngle:undefined,endAngle:undefined,background:'#f2f2f2',strokeWidth:'97%',opacity:1,margin:5,// margin is in pixels
dropShadow:{enabled:false,top:0,left:0,blur:3,color:'#000',opacity:0.5}},dataLabels:{show:true,name:{show:true,fontSize:'16px',fontFamily:undefined,fontWeight:600,color:undefined,offsetY:0,formatter:function formatter(val){return val;}},value:{show:true,fontSize:'14px',fontFamily:undefined,fontWeight:400,color:undefined,offsetY:16,formatter:function formatter(val){return val+'%';}},total:{show:false,label:'Total',fontSize:'16px',fontWeight:600,fontFamily:undefined,color:undefined,formatter:function formatter(w){return w.globals.seriesTotals.reduce(function(a,b){return a+b;},0)/w.globals.series.length+'%';}}},barLabels:{enabled:false,margin:5,useSeriesColors:true,fontFamily:undefined,fontWeight:600,fontSize:'16px',formatter:function formatter(val){return val;},onClick:undefined}},pie:{customScale:1,offsetX:0,offsetY:0,startAngle:0,endAngle:360,expandOnClick:true,dataLabels:{// These are the percentage values which are displayed on slice
offset:0,// offset by which labels will move outside
minAngleToShowLabel:10},donut:{size:'65%',background:'transparent',labels:{// These are the inner labels appearing inside donut
show:false,name:{show:true,fontSize:'16px',fontFamily:undefined,fontWeight:600,color:undefined,offsetY:-10,formatter:function formatter(val){return val;}},value:{show:true,fontSize:'20px',fontFamily:undefined,fontWeight:400,color:undefined,offsetY:10,formatter:function formatter(val){return val;}},total:{show:false,showAlways:false,label:'Total',fontSize:'16px',fontWeight:400,fontFamily:undefined,color:undefined,formatter:function formatter(w){return w.globals.seriesTotals.reduce(function(a,b){return a+b;},0);}}}}},polarArea:{rings:{strokeWidth:1,strokeColor:'#e8e8e8'},spokes:{strokeWidth:1,connectorColors:'#e8e8e8'}},radar:{size:undefined,offsetX:0,offsetY:0,polygons:{// strokeColor: '#e8e8e8', // should be deprecated in the minor version i.e 3.2
strokeWidth:1,strokeColors:'#e8e8e8',connectorColors:'#e8e8e8',fill:{colors:undefined}}}},colors:undefined,dataLabels:{enabled:true,enabledOnSeries:undefined,formatter:function formatter(val){return val!==null?val:'';},textAnchor:'middle',distributed:false,offsetX:0,offsetY:0,style:{fontSize:'12px',fontFamily:undefined,fontWeight:600,colors:undefined},background:{enabled:true,foreColor:'#fff',borderRadius:2,padding:4,opacity:0.9,borderWidth:1,borderColor:'#fff',dropShadow:{enabled:false,top:1,left:1,blur:1,color:'#000',opacity:0.45}},dropShadow:{enabled:false,top:1,left:1,blur:1,color:'#000',opacity:0.45}},fill:{type:'solid',colors:undefined,// array of colors
opacity:0.85,gradient:{shade:'dark',type:'horizontal',shadeIntensity:0.5,gradientToColors:undefined,inverseColors:true,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]},image:{src:[],width:undefined,// optional
height:undefined// optional
},pattern:{style:'squares',// String | Array of Strings
width:6,height:6,strokeWidth:2}},forecastDataPoints:{count:0,fillOpacity:0.5,strokeWidth:undefined,dashArray:4},grid:{show:true,borderColor:'#e0e0e0',strokeDashArray:0,position:'back',xaxis:{lines:{show:false}},yaxis:{lines:{show:true}},row:{colors:undefined,// takes as array which will be repeated on rows
opacity:0.5},column:{colors:undefined,// takes an array which will be repeated on columns
opacity:0.5},padding:{top:0,right:10,bottom:0,left:12}},labels:[],legend:{show:true,showForSingleSeries:false,showForNullSeries:true,showForZeroSeries:true,floating:false,position:'bottom',// whether to position legends in 1 of 4
// direction - top, bottom, left, right
horizontalAlign:'center',// when position top/bottom, you can specify whether to align legends left, right or center
inverseOrder:false,fontSize:'12px',fontFamily:undefined,fontWeight:400,width:undefined,height:undefined,formatter:undefined,tooltipHoverFormatter:undefined,offsetX:-20,offsetY:4,customLegendItems:[],labels:{colors:undefined,useSeriesColors:false},markers:{width:12,height:12,strokeWidth:0,fillColors:undefined,strokeColor:'#fff',radius:12,customHTML:undefined,offsetX:0,offsetY:0,onClick:undefined},itemMargin:{horizontal:5,vertical:2},onItemClick:{toggleDataSeries:true},onItemHover:{highlightDataSeries:true}},markers:{discrete:[],size:0,colors:undefined,//strokeColor: '#fff', // TODO: deprecate in major version 4.0
strokeColors:'#fff',strokeWidth:2,strokeOpacity:0.9,strokeDashArray:0,fillOpacity:1,shape:'circle',width:8,// only applicable when shape is rect/square
height:8,// only applicable when shape is rect/square
radius:2,offsetX:0,offsetY:0,onClick:undefined,onDblClick:undefined,showNullDataPoints:true,hover:{size:undefined,sizeOffset:3}},noData:{text:undefined,align:'center',verticalAlign:'middle',offsetX:0,offsetY:0,style:{color:undefined,fontSize:'14px',fontFamily:undefined}},responsive:[],// breakpoints should follow ascending order 400, then 700, then 1000
series:undefined,states:{normal:{filter:{type:'none',value:0}},hover:{filter:{type:'lighten',value:0.1}},active:{allowMultipleDataPointsSelection:false,filter:{type:'darken',value:0.5}}},title:{text:undefined,align:'left',margin:5,offsetX:0,offsetY:0,floating:false,style:{fontSize:'14px',fontWeight:900,fontFamily:undefined,color:undefined}},subtitle:{text:undefined,align:'left',margin:5,offsetX:0,offsetY:30,floating:false,style:{fontSize:'12px',fontWeight:400,fontFamily:undefined,color:undefined}},stroke:{show:true,curve:'smooth',// "smooth" / "straight" / "monotoneCubic" / "stepline" / "linestep"
lineCap:'butt',// round, butt , square
width:2,colors:undefined,// array of colors
dashArray:0,// single value or array of values
fill:{type:'solid',colors:undefined,// array of colors
opacity:0.85,gradient:{shade:'dark',type:'horizontal',shadeIntensity:0.5,gradientToColors:undefined,inverseColors:true,opacityFrom:1,opacityTo:1,stops:[0,50,100],colorStops:[]}}},tooltip:{enabled:true,enabledOnSeries:undefined,shared:true,hideEmptySeries:false,followCursor:false,// when disabled, the tooltip will show on top of the series instead of mouse position
intersect:false,// when enabled, tooltip will only show when user directly hovers over point
inverseOrder:false,custom:undefined,fillSeriesColor:false,theme:'light',cssClass:'',style:{fontSize:'12px',fontFamily:undefined},onDatasetHover:{highlightDataSeries:false},x:{// x value
show:true,format:'dd MMM',// dd/MM, dd MMM yy, dd MMM yyyy
formatter:undefined// a custom user supplied formatter function
},y:{formatter:undefined,title:{formatter:function formatter(seriesName){return seriesName?seriesName+': ':'';}}},z:{formatter:undefined,title:'Size: '},marker:{show:true,fillColors:undefined},items:{display:'flex'},fixed:{enabled:false,position:'topRight',// topRight, topLeft, bottomRight, bottomLeft
offsetX:0,offsetY:0}},xaxis:{type:'category',categories:[],convertedCatToNumeric:false,// internal property which should not be altered outside
offsetX:0,offsetY:0,overwriteCategories:undefined,labels:{show:true,rotate:-45,rotateAlways:false,hideOverlappingLabels:true,trim:false,minHeight:undefined,maxHeight:120,showDuplicates:true,style:{colors:[],fontSize:'12px',fontWeight:400,fontFamily:undefined,cssClass:''},offsetX:0,offsetY:0,format:undefined,formatter:undefined,// custom formatter function which will override format
datetimeUTC:true,datetimeFormatter:{year:'yyyy',month:"MMM 'yy",day:'dd MMM',hour:'HH:mm',minute:'HH:mm:ss',second:'HH:mm:ss'}},group:{groups:[],style:{colors:[],fontSize:'12px',fontWeight:400,fontFamily:undefined,cssClass:''}},axisBorder:{show:true,color:'#e0e0e0',width:'100%',height:1,offsetX:0,offsetY:0},axisTicks:{show:true,color:'#e0e0e0',height:6,offsetX:0,offsetY:0},stepSize:undefined,tickAmount:undefined,tickPlacement:'on',min:undefined,max:undefined,range:undefined,floating:false,decimalsInFloat:undefined,position:'bottom',title:{text:undefined,offsetX:0,offsetY:0,style:{color:undefined,fontSize:'12px',fontWeight:900,fontFamily:undefined,cssClass:''}},crosshairs:{show:true,width:1,// tickWidth/barWidth or an integer
position:'back',opacity:0.9,stroke:{color:'#b6b6b6',width:1,dashArray:3},fill:{type:'solid',// solid, gradient
color:'#B1B9C4',gradient:{colorFrom:'#D8E3F0',colorTo:'#BED1E6',stops:[0,100],opacityFrom:0.4,opacityTo:0.5}},dropShadow:{enabled:false,left:0,top:0,blur:1,opacity:0.4}},tooltip:{enabled:true,offsetY:0,formatter:undefined,style:{fontSize:'12px',fontFamily:undefined}}},yaxis:this.yAxis,theme:{mode:'light',palette:'palette1',// If defined, it will overwrite globals.colors variable
monochrome:{// monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
enabled:false,color:'#008FFB',shadeTo:'light',shadeIntensity:0.65}}};}}]);return Options;}();/**
   * ApexCharts Annotations Class for drawing lines/rects on both xaxis and yaxis.
   *
   * @module Annotations
   **/var Annotations=/*#__PURE__*/function(){function Annotations(ctx){_classCallCheck(this,Annotations);this.ctx=ctx;this.w=ctx.w;this.graphics=new Graphics(this.ctx);if(this.w.globals.isBarHorizontal){this.invertAxis=true;}this.helpers=new Helpers$4(this);this.xAxisAnnotations=new XAnnotations(this);this.yAxisAnnotations=new YAnnotations(this);this.pointsAnnotations=new PointAnnotations(this);if(this.w.globals.isBarHorizontal&&this.w.config.yaxis[0].reversed){this.inversedReversedAxis=true;}this.xDivision=this.w.globals.gridWidth/this.w.globals.dataPoints;}_createClass(Annotations,[{key:"drawAxesAnnotations",value:function drawAxesAnnotations(){var w=this.w;if(w.globals.axisCharts){var yAnnotations=this.yAxisAnnotations.drawYAxisAnnotations();var xAnnotations=this.xAxisAnnotations.drawXAxisAnnotations();var pointAnnotations=this.pointsAnnotations.drawPointAnnotations();var initialAnim=w.config.chart.animations.enabled;var annoArray=[yAnnotations,xAnnotations,pointAnnotations];var annoElArray=[xAnnotations.node,yAnnotations.node,pointAnnotations.node];for(var i=0;i<3;i++){w.globals.dom.elGraphical.add(annoArray[i]);if(initialAnim&&!w.globals.resized&&!w.globals.dataChanged){// fixes apexcharts/apexcharts.js#685
if(w.config.chart.type!=='scatter'&&w.config.chart.type!=='bubble'&&w.globals.dataPoints>1){annoElArray[i].classList.add('apexcharts-element-hidden');}}w.globals.delayedElements.push({el:annoElArray[i],index:0});}// background sizes needs to be calculated after text is drawn, so calling them last
this.helpers.annotationsBackground();}}},{key:"drawImageAnnos",value:function drawImageAnnos(){var _this=this;var w=this.w;w.config.annotations.images.map(function(s,index){_this.addImage(s,index);});}},{key:"drawTextAnnos",value:function drawTextAnnos(){var _this2=this;var w=this.w;w.config.annotations.texts.map(function(t,index){_this2.addText(t,index);});}},{key:"addXaxisAnnotation",value:function addXaxisAnnotation(anno,parent,index){this.xAxisAnnotations.addXaxisAnnotation(anno,parent,index);}},{key:"addYaxisAnnotation",value:function addYaxisAnnotation(anno,parent,index){this.yAxisAnnotations.addYaxisAnnotation(anno,parent,index);}},{key:"addPointAnnotation",value:function addPointAnnotation(anno,parent,index){this.pointsAnnotations.addPointAnnotation(anno,parent,index);}},{key:"addText",value:function addText(params,index){var x=params.x,y=params.y,text=params.text,textAnchor=params.textAnchor,foreColor=params.foreColor,fontSize=params.fontSize,fontFamily=params.fontFamily,fontWeight=params.fontWeight,cssClass=params.cssClass,backgroundColor=params.backgroundColor,borderWidth=params.borderWidth,strokeDashArray=params.strokeDashArray,borderRadius=params.borderRadius,borderColor=params.borderColor,_params$appendTo=params.appendTo,appendTo=_params$appendTo===void 0?'.apexcharts-svg':_params$appendTo,_params$paddingLeft=params.paddingLeft,paddingLeft=_params$paddingLeft===void 0?4:_params$paddingLeft,_params$paddingRight=params.paddingRight,paddingRight=_params$paddingRight===void 0?4:_params$paddingRight,_params$paddingBottom=params.paddingBottom,paddingBottom=_params$paddingBottom===void 0?2:_params$paddingBottom,_params$paddingTop=params.paddingTop,paddingTop=_params$paddingTop===void 0?2:_params$paddingTop;var w=this.w;var elText=this.graphics.drawText({x:x,y:y,text:text,textAnchor:textAnchor||'start',fontSize:fontSize||'12px',fontWeight:fontWeight||'regular',fontFamily:fontFamily||w.config.chart.fontFamily,foreColor:foreColor||w.config.chart.foreColor,cssClass:'apexcharts-text '+cssClass?cssClass:''});var parent=w.globals.dom.baseEl.querySelector(appendTo);if(parent){parent.appendChild(elText.node);}var textRect=elText.bbox();if(text){var elRect=this.graphics.drawRect(textRect.x-paddingLeft,textRect.y-paddingTop,textRect.width+paddingLeft+paddingRight,textRect.height+paddingBottom+paddingTop,borderRadius,backgroundColor?backgroundColor:'transparent',1,borderWidth,borderColor,strokeDashArray);parent.insertBefore(elRect.node,elText.node);}}},{key:"addImage",value:function addImage(params,index){var w=this.w;var path=params.path,_params$x=params.x,x=_params$x===void 0?0:_params$x,_params$y=params.y,y=_params$y===void 0?0:_params$y,_params$width=params.width,width=_params$width===void 0?20:_params$width,_params$height=params.height,height=_params$height===void 0?20:_params$height,_params$appendTo2=params.appendTo,appendTo=_params$appendTo2===void 0?'.apexcharts-svg':_params$appendTo2;var img=w.globals.dom.Paper.image(path);img.size(width,height).move(x,y);var parent=w.globals.dom.baseEl.querySelector(appendTo);if(parent){parent.appendChild(img.node);}return img;}// The addXaxisAnnotation method requires a parent class, and user calling this method externally on the chart instance may not specify parent, hence a different method
},{key:"addXaxisAnnotationExternal",value:function addXaxisAnnotationExternal(params,pushToMemory,context){this.addAnnotationExternal({params:params,pushToMemory:pushToMemory,context:context,type:'xaxis',contextMethod:context.addXaxisAnnotation});return context;}},{key:"addYaxisAnnotationExternal",value:function addYaxisAnnotationExternal(params,pushToMemory,context){this.addAnnotationExternal({params:params,pushToMemory:pushToMemory,context:context,type:'yaxis',contextMethod:context.addYaxisAnnotation});return context;}},{key:"addPointAnnotationExternal",value:function addPointAnnotationExternal(params,pushToMemory,context){if(typeof this.invertAxis==='undefined'){this.invertAxis=context.w.globals.isBarHorizontal;}this.addAnnotationExternal({params:params,pushToMemory:pushToMemory,context:context,type:'point',contextMethod:context.addPointAnnotation});return context;}},{key:"addAnnotationExternal",value:function addAnnotationExternal(_ref){var params=_ref.params,pushToMemory=_ref.pushToMemory,context=_ref.context,type=_ref.type,contextMethod=_ref.contextMethod;var me=context;var w=me.w;var parent=w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type,"-annotations"));var index=parent.childNodes.length+1;var options=new Options();var axesAnno=Object.assign({},type==='xaxis'?options.xAxisAnnotation:type==='yaxis'?options.yAxisAnnotation:options.pointAnnotation);var anno=Utils$1.extend(axesAnno,params);switch(type){case'xaxis':this.addXaxisAnnotation(anno,parent,index);break;case'yaxis':this.addYaxisAnnotation(anno,parent,index);break;case'point':this.addPointAnnotation(anno,parent,index);break;}// add background
var axesAnnoLabel=w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type,"-annotations .apexcharts-").concat(type,"-annotation-label[rel='").concat(index,"']"));var elRect=this.helpers.addBackgroundToAnno(axesAnnoLabel,anno);if(elRect){parent.insertBefore(elRect.node,axesAnnoLabel);}if(pushToMemory){w.globals.memory.methodsToExec.push({context:me,id:anno.id?anno.id:Utils$1.randomId(),method:contextMethod,label:'addAnnotation',params:params});}return context;}},{key:"clearAnnotations",value:function clearAnnotations(ctx){var w=ctx.w;var annos=w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations');// annotations added externally should be cleared out too
w.globals.memory.methodsToExec.map(function(m,i){if(m.label==='addText'||m.label==='addAnnotation'){w.globals.memory.methodsToExec.splice(i,1);}});annos=Utils$1.listToArray(annos);// delete the DOM elements
Array.prototype.forEach.call(annos,function(a){while(a.firstChild){a.removeChild(a.firstChild);}});}},{key:"removeAnnotation",value:function removeAnnotation(ctx,id){var w=ctx.w;var annos=w.globals.dom.baseEl.querySelectorAll(".".concat(id));if(annos){w.globals.memory.methodsToExec.map(function(m,i){if(m.id===id){w.globals.memory.methodsToExec.splice(i,1);}});Array.prototype.forEach.call(annos,function(a){a.parentElement.removeChild(a);});}}}]);return Annotations;}();/**
   * ApexCharts Default Class for setting default options for all chart types.
   *
   * @module Defaults
   **/var getRangeValues=function getRangeValues(_ref){var _w$config$series$seri;var isTimeline=_ref.isTimeline,ctx=_ref.ctx,seriesIndex=_ref.seriesIndex,dataPointIndex=_ref.dataPointIndex,y1=_ref.y1,y2=_ref.y2,w=_ref.w;var start=w.globals.seriesRangeStart[seriesIndex][dataPointIndex];var end=w.globals.seriesRangeEnd[seriesIndex][dataPointIndex];var ylabel=w.globals.labels[dataPointIndex];var seriesName=w.config.series[seriesIndex].name?w.config.series[seriesIndex].name:'';var yLbFormatter=w.globals.ttKeyFormatter;var yLbTitleFormatter=w.config.tooltip.y.title.formatter;var opts={w:w,seriesIndex:seriesIndex,dataPointIndex:dataPointIndex,start:start,end:end};if(typeof yLbTitleFormatter==='function'){seriesName=yLbTitleFormatter(seriesName,opts);}if((_w$config$series$seri=w.config.series[seriesIndex].data[dataPointIndex])!==null&&_w$config$series$seri!==void 0&&_w$config$series$seri.x){ylabel=w.config.series[seriesIndex].data[dataPointIndex].x;}if(!isTimeline){if(w.config.xaxis.type==='datetime'){var xFormat=new Formatters(ctx);ylabel=xFormat.xLabelFormat(w.globals.ttKeyFormatter,ylabel,ylabel,{i:undefined,dateFormatter:new DateTime(ctx).formatDate,w:w});}}if(typeof yLbFormatter==='function'){ylabel=yLbFormatter(ylabel,opts);}if(Number.isFinite(y1)&&Number.isFinite(y2)){start=y1;end=y2;}var startVal='';var endVal='';var color=w.globals.colors[seriesIndex];if(w.config.tooltip.x.formatter===undefined){if(w.config.xaxis.type==='datetime'){var datetimeObj=new DateTime(ctx);startVal=datetimeObj.formatDate(datetimeObj.getDate(start),w.config.tooltip.x.format);endVal=datetimeObj.formatDate(datetimeObj.getDate(end),w.config.tooltip.x.format);}else{startVal=start;endVal=end;}}else{startVal=w.config.tooltip.x.formatter(start);endVal=w.config.tooltip.x.formatter(end);}return{start:start,end:end,startVal:startVal,endVal:endVal,ylabel:ylabel,color:color,seriesName:seriesName};};var buildRangeTooltipHTML=function buildRangeTooltipHTML(opts){var color=opts.color,seriesName=opts.seriesName,ylabel=opts.ylabel,start=opts.start,end=opts.end,seriesIndex=opts.seriesIndex,dataPointIndex=opts.dataPointIndex;var formatter=opts.ctx.tooltip.tooltipLabels.getFormatters(seriesIndex);start=formatter.yLbFormatter(start);end=formatter.yLbFormatter(end);var val=formatter.yLbFormatter(opts.w.globals.series[seriesIndex][dataPointIndex]);var valueHTML='';var rangeValues="<span class=\"value start-value\">\n  ".concat(start,"\n  </span> <span class=\"separator\">-</span> <span class=\"value end-value\">\n  ").concat(end,"\n  </span>");if(opts.w.globals.comboCharts){if(opts.w.config.series[seriesIndex].type==='rangeArea'||opts.w.config.series[seriesIndex].type==='rangeBar'){valueHTML=rangeValues;}else{valueHTML="<span>".concat(val,"</span>");}}else{valueHTML=rangeValues;}return'<div class="apexcharts-tooltip-rangebar">'+'<div> <span class="series-name" style="color: '+color+'">'+(seriesName?seriesName:'')+'</span></div>'+'<div> <span class="category">'+ylabel+': </span> '+valueHTML+' </div>'+'</div>';};var Defaults=/*#__PURE__*/function(){function Defaults(opts){_classCallCheck(this,Defaults);this.opts=opts;}_createClass(Defaults,[{key:"hideYAxis",value:function hideYAxis(){this.opts.yaxis[0].show=false;this.opts.yaxis[0].title.text='';this.opts.yaxis[0].axisBorder.show=false;this.opts.yaxis[0].axisTicks.show=false;this.opts.yaxis[0].floating=true;}},{key:"line",value:function line(){return{chart:{animations:{easing:'swing'}},dataLabels:{enabled:false},stroke:{width:5,curve:'straight'},markers:{size:0,hover:{sizeOffset:6}},xaxis:{crosshairs:{width:1}}};}},{key:"sparkline",value:function sparkline(defaults){this.hideYAxis();var ret={grid:{show:false,padding:{left:0,right:0,top:0,bottom:0}},legend:{show:false},xaxis:{labels:{show:false},tooltip:{enabled:false},axisBorder:{show:false},axisTicks:{show:false}},chart:{toolbar:{show:false},zoom:{enabled:false}},dataLabels:{enabled:false}};return Utils$1.extend(defaults,ret);}},{key:"bar",value:function bar(){return{chart:{stacked:false,animations:{easing:'swing'}},plotOptions:{bar:{dataLabels:{position:'center'}}},dataLabels:{style:{colors:['#fff']},background:{enabled:false}},stroke:{width:0,lineCap:'round'},fill:{opacity:0.85},legend:{markers:{shape:'square',radius:2,size:8}},tooltip:{shared:false,intersect:true},xaxis:{tooltip:{enabled:false},tickPlacement:'between',crosshairs:{width:'barWidth',position:'back',fill:{type:'gradient'},dropShadow:{enabled:false},stroke:{width:0}}}};}},{key:"funnel",value:function funnel(){this.hideYAxis();return _objectSpread2(_objectSpread2({},this.bar()),{},{chart:{animations:{easing:'linear',speed:800,animateGradually:{enabled:false}}},plotOptions:{bar:{horizontal:true,borderRadiusApplication:'around',borderRadius:0,dataLabels:{position:'center'}}},grid:{show:false,padding:{left:0,right:0}},xaxis:{labels:{show:false},tooltip:{enabled:false},axisBorder:{show:false},axisTicks:{show:false}}});}},{key:"candlestick",value:function candlestick(){var _this=this;return{stroke:{width:1,colors:['#333']},fill:{opacity:1},dataLabels:{enabled:false},tooltip:{shared:true,custom:function custom(_ref2){var seriesIndex=_ref2.seriesIndex,dataPointIndex=_ref2.dataPointIndex,w=_ref2.w;return _this._getBoxTooltip(w,seriesIndex,dataPointIndex,['Open','High','','Low','Close'],'candlestick');}},states:{active:{filter:{type:'none'}}},xaxis:{crosshairs:{width:1}}};}},{key:"boxPlot",value:function boxPlot(){var _this2=this;return{chart:{animations:{dynamicAnimation:{enabled:false}}},stroke:{width:1,colors:['#24292e']},dataLabels:{enabled:false},tooltip:{shared:true,custom:function custom(_ref3){var seriesIndex=_ref3.seriesIndex,dataPointIndex=_ref3.dataPointIndex,w=_ref3.w;return _this2._getBoxTooltip(w,seriesIndex,dataPointIndex,['Minimum','Q1','Median','Q3','Maximum'],'boxPlot');}},markers:{size:5,strokeWidth:1,strokeColors:'#111'},xaxis:{crosshairs:{width:1}}};}},{key:"rangeBar",value:function rangeBar(){var handleTimelineTooltip=function handleTimelineTooltip(opts){var _getRangeValues=getRangeValues(_objectSpread2(_objectSpread2({},opts),{},{isTimeline:true})),color=_getRangeValues.color,seriesName=_getRangeValues.seriesName,ylabel=_getRangeValues.ylabel,startVal=_getRangeValues.startVal,endVal=_getRangeValues.endVal;return buildRangeTooltipHTML(_objectSpread2(_objectSpread2({},opts),{},{color:color,seriesName:seriesName,ylabel:ylabel,start:startVal,end:endVal}));};var handleRangeColumnTooltip=function handleRangeColumnTooltip(opts){var _getRangeValues2=getRangeValues(opts),color=_getRangeValues2.color,seriesName=_getRangeValues2.seriesName,ylabel=_getRangeValues2.ylabel,start=_getRangeValues2.start,end=_getRangeValues2.end;return buildRangeTooltipHTML(_objectSpread2(_objectSpread2({},opts),{},{color:color,seriesName:seriesName,ylabel:ylabel,start:start,end:end}));};return{chart:{animations:{animateGradually:false}},stroke:{width:0,lineCap:'square'},plotOptions:{bar:{borderRadius:0,dataLabels:{position:'center'}}},dataLabels:{enabled:false,formatter:function formatter(val,_ref4){_ref4.ctx;var seriesIndex=_ref4.seriesIndex,dataPointIndex=_ref4.dataPointIndex,w=_ref4.w;var getVal=function getVal(){var start=w.globals.seriesRangeStart[seriesIndex][dataPointIndex];var end=w.globals.seriesRangeEnd[seriesIndex][dataPointIndex];return end-start;};if(w.globals.comboCharts){if(w.config.series[seriesIndex].type==='rangeBar'||w.config.series[seriesIndex].type==='rangeArea'){return getVal();}else{return val;}}else{return getVal();}},background:{enabled:false},style:{colors:['#fff']}},markers:{size:10},tooltip:{shared:false,followCursor:true,custom:function custom(opts){if(opts.w.config.plotOptions&&opts.w.config.plotOptions.bar&&opts.w.config.plotOptions.bar.horizontal){return handleTimelineTooltip(opts);}else{return handleRangeColumnTooltip(opts);}}},xaxis:{tickPlacement:'between',tooltip:{enabled:false},crosshairs:{stroke:{width:0}}}};}},{key:"dumbbell",value:function dumbbell(opts){var _opts$plotOptions$bar,_opts$plotOptions$bar2;if(!((_opts$plotOptions$bar=opts.plotOptions.bar)!==null&&_opts$plotOptions$bar!==void 0&&_opts$plotOptions$bar.barHeight)){opts.plotOptions.bar.barHeight=2;}if(!((_opts$plotOptions$bar2=opts.plotOptions.bar)!==null&&_opts$plotOptions$bar2!==void 0&&_opts$plotOptions$bar2.columnWidth)){opts.plotOptions.bar.columnWidth=2;}return opts;}},{key:"area",value:function area(){return{stroke:{width:4,fill:{type:'solid',gradient:{inverseColors:false,shade:'light',type:'vertical',opacityFrom:0.65,opacityTo:0.5,stops:[0,100,100]}}},fill:{type:'gradient',gradient:{inverseColors:false,shade:'light',type:'vertical',opacityFrom:0.65,opacityTo:0.5,stops:[0,100,100]}},markers:{size:0,hover:{sizeOffset:6}},tooltip:{followCursor:false}};}},{key:"rangeArea",value:function rangeArea(){var handleRangeAreaTooltip=function handleRangeAreaTooltip(opts){var _getRangeValues3=getRangeValues(opts),color=_getRangeValues3.color,seriesName=_getRangeValues3.seriesName,ylabel=_getRangeValues3.ylabel,start=_getRangeValues3.start,end=_getRangeValues3.end;return buildRangeTooltipHTML(_objectSpread2(_objectSpread2({},opts),{},{color:color,seriesName:seriesName,ylabel:ylabel,start:start,end:end}));};return{stroke:{curve:'straight',width:0},fill:{type:'solid',opacity:0.6},markers:{size:0},states:{hover:{filter:{type:'none'}},active:{filter:{type:'none'}}},tooltip:{intersect:false,shared:true,followCursor:true,custom:function custom(opts){return handleRangeAreaTooltip(opts);}}};}},{key:"brush",value:function brush(defaults){var ret={chart:{toolbar:{autoSelected:'selection',show:false},zoom:{enabled:false}},dataLabels:{enabled:false},stroke:{width:1},tooltip:{enabled:false},xaxis:{tooltip:{enabled:false}}};return Utils$1.extend(defaults,ret);}},{key:"stacked100",value:function stacked100(opts){opts.dataLabels=opts.dataLabels||{};opts.dataLabels.formatter=opts.dataLabels.formatter||undefined;var existingDataLabelFormatter=opts.dataLabels.formatter;opts.yaxis.forEach(function(yaxe,index){opts.yaxis[index].min=0;opts.yaxis[index].max=100;});var isBar=opts.chart.type==='bar';if(isBar){opts.dataLabels.formatter=existingDataLabelFormatter||function(val){if(typeof val==='number'){return val?val.toFixed(0)+'%':val;}return val;};}return opts;}},{key:"stackedBars",value:function stackedBars(){var barDefaults=this.bar();return _objectSpread2(_objectSpread2({},barDefaults),{},{plotOptions:_objectSpread2(_objectSpread2({},barDefaults.plotOptions),{},{bar:_objectSpread2(_objectSpread2({},barDefaults.plotOptions.bar),{},{borderRadiusApplication:'end',borderRadiusWhenStacked:'last'})})});}// This function removes the left and right spacing in chart for line/area/scatter if xaxis type = category for those charts by converting xaxis = numeric. Numeric/Datetime xaxis prevents the unnecessary spacing in the left/right of the chart area
},{key:"convertCatToNumeric",value:function convertCatToNumeric(opts){opts.xaxis.convertedCatToNumeric=true;return opts;}},{key:"convertCatToNumericXaxis",value:function convertCatToNumericXaxis(opts,ctx,cats){opts.xaxis.type='numeric';opts.xaxis.labels=opts.xaxis.labels||{};opts.xaxis.labels.formatter=opts.xaxis.labels.formatter||function(val){return Utils$1.isNumber(val)?Math.floor(val):val;};var defaultFormatter=opts.xaxis.labels.formatter;var labels=opts.xaxis.categories&&opts.xaxis.categories.length?opts.xaxis.categories:opts.labels;if(cats&&cats.length){labels=cats.map(function(c){return Array.isArray(c)?c:String(c);});}if(labels&&labels.length){opts.xaxis.labels.formatter=function(val){return Utils$1.isNumber(val)?defaultFormatter(labels[Math.floor(val)-1]):defaultFormatter(val);};}opts.xaxis.categories=[];opts.labels=[];opts.xaxis.tickAmount=opts.xaxis.tickAmount||'dataPoints';return opts;}},{key:"bubble",value:function bubble(){return{dataLabels:{style:{colors:['#fff']}},tooltip:{shared:false,intersect:true},xaxis:{crosshairs:{width:0}},fill:{type:'solid',gradient:{shade:'light',inverse:true,shadeIntensity:0.55,opacityFrom:0.4,opacityTo:0.8}}};}},{key:"scatter",value:function scatter(){return{dataLabels:{enabled:false},tooltip:{shared:false,intersect:true},markers:{size:6,strokeWidth:1,hover:{sizeOffset:2}}};}},{key:"heatmap",value:function heatmap(){return{chart:{stacked:false},fill:{opacity:1},dataLabels:{style:{colors:['#fff']}},stroke:{colors:['#fff']},tooltip:{followCursor:true,marker:{show:false},x:{show:false}},legend:{position:'top',markers:{shape:'square',size:10,offsetY:2}},grid:{padding:{right:20}}};}},{key:"treemap",value:function treemap(){return{chart:{zoom:{enabled:false}},dataLabels:{style:{fontSize:14,fontWeight:600,colors:['#fff']}},stroke:{show:true,width:2,colors:['#fff']},legend:{show:false},fill:{gradient:{stops:[0,100]}},tooltip:{followCursor:true,x:{show:false}},grid:{padding:{left:0,right:0}},xaxis:{crosshairs:{show:false},tooltip:{enabled:false}}};}},{key:"pie",value:function pie(){return{chart:{toolbar:{show:false}},plotOptions:{pie:{donut:{labels:{show:false}}}},dataLabels:{formatter:function formatter(val){return val.toFixed(1)+'%';},style:{colors:['#fff']},background:{enabled:false},dropShadow:{enabled:true}},stroke:{colors:['#fff']},fill:{opacity:1,gradient:{shade:'light',stops:[0,100]}},tooltip:{theme:'dark',fillSeriesColor:true},legend:{position:'right'}};}},{key:"donut",value:function donut(){return{chart:{toolbar:{show:false}},dataLabels:{formatter:function formatter(val){return val.toFixed(1)+'%';},style:{colors:['#fff']},background:{enabled:false},dropShadow:{enabled:true}},stroke:{colors:['#fff']},fill:{opacity:1,gradient:{shade:'light',shadeIntensity:0.35,stops:[80,100],opacityFrom:1,opacityTo:1}},tooltip:{theme:'dark',fillSeriesColor:true},legend:{position:'right'}};}},{key:"polarArea",value:function polarArea(){return{chart:{toolbar:{show:false}},dataLabels:{formatter:function formatter(val){return val.toFixed(1)+'%';},enabled:false},stroke:{show:true,width:2},fill:{opacity:0.7},tooltip:{theme:'dark',fillSeriesColor:true},legend:{position:'right'}};}},{key:"radar",value:function radar(){this.opts.yaxis[0].labels.offsetY=this.opts.yaxis[0].labels.offsetY?this.opts.yaxis[0].labels.offsetY:6;return{dataLabels:{enabled:false,style:{fontSize:'11px'}},stroke:{width:2},markers:{size:3,strokeWidth:1,strokeOpacity:1},fill:{opacity:0.2},tooltip:{shared:false,intersect:true,followCursor:true},grid:{show:false},xaxis:{labels:{formatter:function formatter(val){return val;},style:{colors:['#a8a8a8'],fontSize:'11px'}},tooltip:{enabled:false},crosshairs:{show:false}}};}},{key:"radialBar",value:function radialBar(){return{chart:{animations:{dynamicAnimation:{enabled:true,speed:800}},toolbar:{show:false}},fill:{gradient:{shade:'dark',shadeIntensity:0.4,inverseColors:false,type:'diagonal2',opacityFrom:1,opacityTo:1,stops:[70,98,100]}},legend:{show:false,position:'right'},tooltip:{enabled:false,fillSeriesColor:true}};}},{key:"_getBoxTooltip",value:function _getBoxTooltip(w,seriesIndex,dataPointIndex,labels,chartType){var o=w.globals.seriesCandleO[seriesIndex][dataPointIndex];var h=w.globals.seriesCandleH[seriesIndex][dataPointIndex];var m=w.globals.seriesCandleM[seriesIndex][dataPointIndex];var l=w.globals.seriesCandleL[seriesIndex][dataPointIndex];var c=w.globals.seriesCandleC[seriesIndex][dataPointIndex];if(w.config.series[seriesIndex].type&&w.config.series[seriesIndex].type!==chartType){return"<div class=\"apexcharts-custom-tooltip\">\n          ".concat(w.config.series[seriesIndex].name?w.config.series[seriesIndex].name:'series-'+(seriesIndex+1),": <strong>").concat(w.globals.series[seriesIndex][dataPointIndex],"</strong>\n        </div>");}else{return"<div class=\"apexcharts-tooltip-box apexcharts-tooltip-".concat(w.config.chart.type,"\">")+"<div>".concat(labels[0],": <span class=\"value\">")+o+'</span></div>'+"<div>".concat(labels[1],": <span class=\"value\">")+h+'</span></div>'+(m?"<div>".concat(labels[2],": <span class=\"value\">")+m+'</span></div>':'')+"<div>".concat(labels[3],": <span class=\"value\">")+l+'</span></div>'+"<div>".concat(labels[4],": <span class=\"value\">")+c+'</span></div>'+'</div>';}}}]);return Defaults;}();/**
   * ApexCharts Config Class for extending user options with pre-defined ApexCharts config.
   *
   * @module Config
   **/var Config=/*#__PURE__*/function(){function Config(opts){_classCallCheck(this,Config);this.opts=opts;}_createClass(Config,[{key:"init",value:function init(_ref){var responsiveOverride=_ref.responsiveOverride;var opts=this.opts;var options=new Options();var defaults=new Defaults(opts);this.chartType=opts.chart.type;opts=this.extendYAxis(opts);opts=this.extendAnnotations(opts);var config=options.init();var newDefaults={};if(opts&&_typeof(opts)==='object'){var _opts$plotOptions,_opts$plotOptions$bar,_opts$chart$brush,_opts$plotOptions2,_opts$plotOptions2$ba,_opts$chart$sparkline,_window$Apex$chart,_window$Apex$chart$sp;var chartDefaults={};var chartTypes=['line','area','bar','candlestick','boxPlot','rangeBar','rangeArea','bubble','scatter','heatmap','treemap','pie','polarArea','donut','radar','radialBar'];if(chartTypes.indexOf(opts.chart.type)!==-1){chartDefaults=defaults[opts.chart.type]();}else{chartDefaults=defaults.line();}if((_opts$plotOptions=opts.plotOptions)!==null&&_opts$plotOptions!==void 0&&(_opts$plotOptions$bar=_opts$plotOptions.bar)!==null&&_opts$plotOptions$bar!==void 0&&_opts$plotOptions$bar.isFunnel){chartDefaults=defaults.funnel();}if(opts.chart.stacked&&opts.chart.type==='bar'){chartDefaults=defaults.stackedBars();}if((_opts$chart$brush=opts.chart.brush)!==null&&_opts$chart$brush!==void 0&&_opts$chart$brush.enabled){chartDefaults=defaults.brush(chartDefaults);}if(opts.chart.stacked&&opts.chart.stackType==='100%'){opts=defaults.stacked100(opts);}if((_opts$plotOptions2=opts.plotOptions)!==null&&_opts$plotOptions2!==void 0&&(_opts$plotOptions2$ba=_opts$plotOptions2.bar)!==null&&_opts$plotOptions2$ba!==void 0&&_opts$plotOptions2$ba.isDumbbell){opts=defaults.dumbbell(opts);}// If user has specified a dark theme, make the tooltip dark too
this.checkForDarkTheme(window.Apex);// check global window Apex options
this.checkForDarkTheme(opts);// check locally passed options
opts.xaxis=opts.xaxis||window.Apex.xaxis||{};// an important boolean needs to be set here
// otherwise all the charts will have this flag set to true window.Apex.xaxis is set globally
if(!responsiveOverride){opts.xaxis.convertedCatToNumeric=false;}opts=this.checkForCatToNumericXAxis(this.chartType,chartDefaults,opts);if((_opts$chart$sparkline=opts.chart.sparkline)!==null&&_opts$chart$sparkline!==void 0&&_opts$chart$sparkline.enabled||(_window$Apex$chart=window.Apex.chart)!==null&&_window$Apex$chart!==void 0&&(_window$Apex$chart$sp=_window$Apex$chart.sparkline)!==null&&_window$Apex$chart$sp!==void 0&&_window$Apex$chart$sp.enabled){chartDefaults=defaults.sparkline(chartDefaults);}newDefaults=Utils$1.extend(config,chartDefaults);}// config should cascade in this fashion
// default-config < global-apex-variable-config < user-defined-config
// get GLOBALLY defined options and merge with the default config
var mergedWithDefaultConfig=Utils$1.extend(newDefaults,window.Apex);// get the merged config and extend with user defined config
config=Utils$1.extend(mergedWithDefaultConfig,opts);// some features are not supported. those mismatches should be handled
config=this.handleUserInputErrors(config);return config;}},{key:"checkForCatToNumericXAxis",value:function checkForCatToNumericXAxis(chartType,chartDefaults,opts){var _opts$plotOptions3,_opts$plotOptions3$ba;var defaults=new Defaults(opts);var isBarHorizontal=(chartType==='bar'||chartType==='boxPlot')&&((_opts$plotOptions3=opts.plotOptions)===null||_opts$plotOptions3===void 0?void 0:(_opts$plotOptions3$ba=_opts$plotOptions3.bar)===null||_opts$plotOptions3$ba===void 0?void 0:_opts$plotOptions3$ba.horizontal);var unsupportedZoom=chartType==='pie'||chartType==='polarArea'||chartType==='donut'||chartType==='radar'||chartType==='radialBar'||chartType==='heatmap';var notNumericXAxis=opts.xaxis.type!=='datetime'&&opts.xaxis.type!=='numeric';var tickPlacement=opts.xaxis.tickPlacement?opts.xaxis.tickPlacement:chartDefaults.xaxis&&chartDefaults.xaxis.tickPlacement;if(!isBarHorizontal&&!unsupportedZoom&&notNumericXAxis&&tickPlacement!=='between'){opts=defaults.convertCatToNumeric(opts);}return opts;}},{key:"extendYAxis",value:function extendYAxis(opts,w){var options=new Options();if(typeof opts.yaxis==='undefined'||!opts.yaxis||Array.isArray(opts.yaxis)&&opts.yaxis.length===0){opts.yaxis={};}// extend global yaxis config (only if object is provided / not an array)
if(opts.yaxis.constructor!==Array&&window.Apex.yaxis&&window.Apex.yaxis.constructor!==Array){opts.yaxis=Utils$1.extend(opts.yaxis,window.Apex.yaxis);}// as we can't extend nested object's array with extend, we need to do it first
// user can provide either an array or object in yaxis config
if(opts.yaxis.constructor!==Array){// convert the yaxis to array if user supplied object
opts.yaxis=[Utils$1.extend(options.yAxis,opts.yaxis)];}else{opts.yaxis=Utils$1.extendArray(opts.yaxis,options.yAxis);}var isLogY=false;opts.yaxis.forEach(function(y){if(y.logarithmic){isLogY=true;}});var series=opts.series;if(w&&!series){series=w.config.series;}// A logarithmic chart works correctly when each series has a corresponding y-axis
// If this is not the case, we manually create yaxis for multi-series log chart
if(isLogY&&series.length!==opts.yaxis.length&&series.length){opts.yaxis=series.map(function(s,i){if(!s.name){series[i].name="series-".concat(i+1);}if(opts.yaxis[i]){opts.yaxis[i].seriesName=series[i].name;return opts.yaxis[i];}else{var newYaxis=Utils$1.extend(options.yAxis,opts.yaxis[0]);newYaxis.show=false;return newYaxis;}});}if(isLogY&&series.length>1&&series.length!==opts.yaxis.length){console.warn('A multi-series logarithmic chart should have equal number of series and y-axes');}return opts;}// annotations also accepts array, so we need to extend them manually
},{key:"extendAnnotations",value:function extendAnnotations(opts){if(typeof opts.annotations==='undefined'){opts.annotations={};opts.annotations.yaxis=[];opts.annotations.xaxis=[];opts.annotations.points=[];}opts=this.extendYAxisAnnotations(opts);opts=this.extendXAxisAnnotations(opts);opts=this.extendPointAnnotations(opts);return opts;}},{key:"extendYAxisAnnotations",value:function extendYAxisAnnotations(opts){var options=new Options();opts.annotations.yaxis=Utils$1.extendArray(typeof opts.annotations.yaxis!=='undefined'?opts.annotations.yaxis:[],options.yAxisAnnotation);return opts;}},{key:"extendXAxisAnnotations",value:function extendXAxisAnnotations(opts){var options=new Options();opts.annotations.xaxis=Utils$1.extendArray(typeof opts.annotations.xaxis!=='undefined'?opts.annotations.xaxis:[],options.xAxisAnnotation);return opts;}},{key:"extendPointAnnotations",value:function extendPointAnnotations(opts){var options=new Options();opts.annotations.points=Utils$1.extendArray(typeof opts.annotations.points!=='undefined'?opts.annotations.points:[],options.pointAnnotation);return opts;}},{key:"checkForDarkTheme",value:function checkForDarkTheme(opts){if(opts.theme&&opts.theme.mode==='dark'){if(!opts.tooltip){opts.tooltip={};}if(opts.tooltip.theme!=='light'){opts.tooltip.theme='dark';}if(!opts.chart.foreColor){opts.chart.foreColor='#f6f7f8';}if(!opts.chart.background){opts.chart.background='#424242';}if(!opts.theme.palette){opts.theme.palette='palette4';}}}},{key:"handleUserInputErrors",value:function handleUserInputErrors(opts){var config=opts;// conflicting tooltip option. intersect makes sure to focus on 1 point at a time. Shared cannot be used along with it
if(config.tooltip.shared&&config.tooltip.intersect){throw new Error('tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.');}if(config.chart.type==='bar'&&config.plotOptions.bar.horizontal){// No multiple yaxis for bars
if(config.yaxis.length>1){throw new Error('Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false');}// if yaxis is reversed in horizontal bar chart, you should draw the y-axis on right side
if(config.yaxis[0].reversed){config.yaxis[0].opposite=true;}config.xaxis.tooltip.enabled=false;// no xaxis tooltip for horizontal bar
config.yaxis[0].tooltip.enabled=false;// no xaxis tooltip for horizontal bar
config.chart.zoom.enabled=false;// no zooming for horz bars
}if(config.chart.type==='bar'||config.chart.type==='rangeBar'){if(config.tooltip.shared){if(config.xaxis.crosshairs.width==='barWidth'&&config.series.length>1){config.xaxis.crosshairs.width='tickWidth';}}}if(config.chart.type==='candlestick'||config.chart.type==='boxPlot'){if(config.yaxis[0].reversed){console.warn("Reversed y-axis in ".concat(config.chart.type," chart is not supported."));config.yaxis[0].reversed=false;}}return config;}}]);return Config;}();var Globals=/*#__PURE__*/function(){function Globals(){_classCallCheck(this,Globals);}_createClass(Globals,[{key:"initGlobalVars",value:function initGlobalVars(gl){gl.series=[];// the MAIN series array (y values)
gl.seriesCandleO=[];gl.seriesCandleH=[];gl.seriesCandleM=[];gl.seriesCandleL=[];gl.seriesCandleC=[];gl.seriesRangeStart=[];gl.seriesRangeEnd=[];gl.seriesRange=[];gl.seriesPercent=[];gl.seriesGoals=[];gl.seriesX=[];gl.seriesZ=[];gl.seriesNames=[];gl.seriesTotals=[];gl.seriesLog=[];gl.seriesColors=[];gl.stackedSeriesTotals=[];gl.seriesXvalues=[];// we will need this in tooltip (it's x position)
// when we will have unequal x values, we will need
// some way to get x value depending on mouse pointer
gl.seriesYvalues=[];// we will need this when deciding which series
// user hovered on
gl.labels=[];gl.hasXaxisGroups=false;gl.groups=[];gl.hasSeriesGroups=false;gl.seriesGroups=[];gl.categoryLabels=[];gl.timescaleLabels=[];gl.noLabelsProvided=false;gl.resizeTimer=null;gl.selectionResizeTimer=null;gl.delayedElements=[];gl.pointsArray=[];gl.dataLabelsRects=[];gl.isXNumeric=false;gl.skipLastTimelinelabel=false;gl.skipFirstTimelinelabel=false;gl.isDataXYZ=false;gl.isMultiLineX=false;gl.isMultipleYAxis=false;gl.maxY=-Number.MAX_VALUE;gl.minY=Number.MIN_VALUE;gl.minYArr=[];gl.maxYArr=[];gl.maxX=-Number.MAX_VALUE;gl.minX=Number.MAX_VALUE;gl.initialMaxX=-Number.MAX_VALUE;gl.initialMinX=Number.MAX_VALUE;gl.maxDate=0;gl.minDate=Number.MAX_VALUE;gl.minZ=Number.MAX_VALUE;gl.maxZ=-Number.MAX_VALUE;gl.minXDiff=Number.MAX_VALUE;gl.yAxisScale=[];gl.xAxisScale=null;gl.xAxisTicksPositions=[];gl.yLabelsCoords=[];gl.yTitleCoords=[];gl.barPadForNumericAxis=0;gl.padHorizontal=0;gl.xRange=0;gl.yRange=[];gl.zRange=0;gl.dataPoints=0;gl.xTickAmount=0;gl.multiAxisTickAmount=0;}},{key:"globalVars",value:function globalVars(config){return{chartID:null,// chart ID - apexcharts-cuid
cuid:null,// chart ID - random numbers excluding "apexcharts" part
events:{beforeMount:[],mounted:[],updated:[],clicked:[],selection:[],dataPointSelection:[],zoomed:[],scrolled:[]},colors:[],clientX:null,clientY:null,fill:{colors:[]},stroke:{colors:[]},dataLabels:{style:{colors:[]}},radarPolygons:{fill:{colors:[]}},markers:{colors:[],size:config.markers.size,largestSize:0},animationEnded:false,isTouchDevice:'ontouchstart'in window||navigator.msMaxTouchPoints,isDirty:false,// chart has been updated after the initial render. This is different than dataChanged property. isDirty means user manually called some method to update
isExecCalled:false,// whether user updated the chart through the exec method
initialConfig:null,// we will store the first config user has set to go back when user finishes interactions like zooming and come out of it
initialSeries:[],lastXAxis:[],lastYAxis:[],columnSeries:null,labels:[],// store the text to draw on x axis
// Don't mutate the labels, many things including tooltips depends on it!
timescaleLabels:[],// store the timescaleLabels Labels in another variable
noLabelsProvided:false,// if user didn't provide any categories/labels or x values, fallback to 1,2,3,4...
allSeriesCollapsed:false,collapsedSeries:[],// when user collapses a series, it goes into this array
collapsedSeriesIndices:[],// this stores the index of the collapsedSeries instead of whole object for quick access
ancillaryCollapsedSeries:[],// when user collapses an "alwaysVisible" series, it goes into this array
ancillaryCollapsedSeriesIndices:[],// this stores the index of the ancillaryCollapsedSeries whose y-axis is always visible
risingSeries:[],// when user re-opens a collapsed series, it goes here
dataFormatXNumeric:false,// boolean value to indicate user has passed numeric x values
capturedSeriesIndex:-1,capturedDataPointIndex:-1,selectedDataPoints:[],goldenPadding:35,// this value is used at a lot of places for spacing purpose
invalidLogScale:false,// if a user enabled log scale but the data provided is not valid to generate a log scale, turn on this flag
ignoreYAxisIndexes:[],// when series are being collapsed in multiple y axes, ignore certain index
maxValsInArrayIndex:0,radialSize:0,selection:undefined,zoomEnabled:config.chart.toolbar.autoSelected==='zoom'&&config.chart.toolbar.tools.zoom&&config.chart.zoom.enabled,panEnabled:config.chart.toolbar.autoSelected==='pan'&&config.chart.toolbar.tools.pan,selectionEnabled:config.chart.toolbar.autoSelected==='selection'&&config.chart.toolbar.tools.selection,yaxis:null,mousedown:false,lastClientPosition:{},// don't reset this variable this the chart is destroyed. It is used to detect right or left mousemove in panning
visibleXRange:undefined,yValueDecimal:0,// are there floating numbers in the series. If yes, this represent the len of the decimals
total:0,SVGNS:'http://www.w3.org/2000/svg',// svg namespace
svgWidth:0,// the whole svg width
svgHeight:0,// the whole svg height
noData:false,// whether there is any data to display or not
locale:{},// the current locale values will be preserved here for global access
dom:{},// for storing all dom nodes in this particular property
memory:{methodsToExec:[]},shouldAnimate:true,skipLastTimelinelabel:false,// when last label is cropped, skip drawing it
skipFirstTimelinelabel:false,// when first label is cropped, skip drawing it
delayedElements:[],// element which appear after animation has finished
axisCharts:true,// chart type = line or area or bar
// (refer them also as plot charts in the code)
isDataXYZ:false,// bool: data was provided in a {[x,y,z]} pattern
resized:false,// bool: user has resized
resizeTimer:null,// timeout function to make a small delay before
// drawing when user resized
comboCharts:false,// bool: whether it's a combination of line/column
dataChanged:false,// bool: has data changed dynamically
previousPaths:[],// array: when data is changed, it will animate from
// previous paths
allSeriesHasEqualX:true,pointsArray:[],// store the points positions here to draw later on hover
// format is - [[x,y],[x,y]... [x,y]]
dataLabelsRects:[],// store the positions of datalabels to prevent collision
lastDrawnDataLabelsIndexes:[],hasNullValues:false,// bool: whether series contains null values
easing:null,// function: animation effect to apply
zoomed:false,// whether user has zoomed or not
gridWidth:0,// drawable width of actual graphs (series paths)
gridHeight:0,// drawable height of actual graphs (series paths)
rotateXLabels:false,defaultLabels:false,xLabelFormatter:undefined,// formatter for x axis labels
yLabelFormatters:[],xaxisTooltipFormatter:undefined,// formatter for x axis tooltip
ttKeyFormatter:undefined,ttVal:undefined,ttZFormatter:undefined,LINE_HEIGHT_RATIO:1.618,xAxisLabelsHeight:0,xAxisGroupLabelsHeight:0,xAxisLabelsWidth:0,yAxisLabelsWidth:0,scaleX:1,scaleY:1,translateX:0,translateY:0,translateYAxisX:[],yAxisWidths:[],translateXAxisY:0,translateXAxisX:0,tooltip:null,// Rules for niceScaleAllowedMagMsd:
// 1) An array of two arrays only ([[],[]]):
//    * array[0][]: influences labelling of data series that contain only integers
//       - must contain only integers (or expect ugly ticks)
//    * array[1][]: influences labelling of data series that contain at least one float
//       - may contain floats
//    * both arrays:
//       - each array[][i] ideally satisfy: 10 mod array[][i] == 0 (or expect ugly ticks)
//       - to avoid clipping data point keep each array[][i] >= i
// 2) each array[i][] contains 11 values, for all possible index values 0..10.
//    array[][0] should not be needed (not proven) but ensures non-zero is returned.
// 
// Users can effectively force their preferred "magMsd" through stepSize and
// forceNiceScale. With forceNiceScale: true, stepSize becomes normalizable to the
// axis's min..max range, which allows users to set stepSize to an integer 1..10, for
// example, stepSize: 3. This value will be preferred to the value determined through
// this array. The range-normalized value is checked for consistency with other
// user defined options and will be ignored if inconsistent.
niceScaleAllowedMagMsd:[[1,1,2,5,5,5,10,10,10,10,10],[1,1,2,5,5,5,10,10,10,10,10]],// Default ticks based on SVG size. These values have high numbers
// of divisors. The array is indexed using a calculated maxTicks value
// divided by 2 simply to halve the array size. See Scales.niceScale().
niceScaleDefaultTicks:[1,2,4,4,6,6,6,6,6,6,6,6,6,6,6,6,6,6,12,12,12,12,12,12,12,12,12,24],seriesYAxisMap:[],// Given yAxis index, return all series indices belonging to it. Multiple series can be referenced to each yAxis.
seriesYAxisReverseMap:[]// Given a Series index, return its yAxis index.
};}},{key:"init",value:function init(config){var globals=this.globalVars(config);this.initGlobalVars(globals);globals.initialConfig=Utils$1.extend({},config);globals.initialSeries=Utils$1.clone(config.series);globals.lastXAxis=Utils$1.clone(globals.initialConfig.xaxis);globals.lastYAxis=Utils$1.clone(globals.initialConfig.yaxis);return globals;}}]);return Globals;}();/**
   * ApexCharts Base Class for extending user options with pre-defined ApexCharts config.
   *
   * @module Base
   **/var Base=/*#__PURE__*/function(){function Base(opts){_classCallCheck(this,Base);this.opts=opts;}_createClass(Base,[{key:"init",value:function init(){var config=new Config(this.opts).init({responsiveOverride:false});var globals=new Globals().init(config);var w={config:config,globals:globals};return w;}}]);return Base;}();/**
   * ApexCharts Fill Class for setting fill options of the paths.
   *
   * @module Fill
   **/var Fill=/*#__PURE__*/function(){function Fill(ctx){_classCallCheck(this,Fill);this.ctx=ctx;this.w=ctx.w;this.opts=null;this.seriesIndex=0;}_createClass(Fill,[{key:"clippedImgArea",value:function clippedImgArea(params){var w=this.w;var cnf=w.config;var svgW=parseInt(w.globals.gridWidth,10);var svgH=parseInt(w.globals.gridHeight,10);var size=svgW>svgH?svgW:svgH;var fillImg=params.image;var imgWidth=0;var imgHeight=0;if(typeof params.width==='undefined'&&typeof params.height==='undefined'){if(cnf.fill.image.width!==undefined&&cnf.fill.image.height!==undefined){imgWidth=cnf.fill.image.width+1;imgHeight=cnf.fill.image.height;}else{imgWidth=size+1;imgHeight=size;}}else{imgWidth=params.width;imgHeight=params.height;}var elPattern=document.createElementNS(w.globals.SVGNS,'pattern');Graphics.setAttrs(elPattern,{id:params.patternID,patternUnits:params.patternUnits?params.patternUnits:'userSpaceOnUse',width:imgWidth+'px',height:imgHeight+'px'});var elImage=document.createElementNS(w.globals.SVGNS,'image');elPattern.appendChild(elImage);elImage.setAttributeNS(window.SVG.xlink,'href',fillImg);Graphics.setAttrs(elImage,{x:0,y:0,preserveAspectRatio:'none',width:imgWidth+'px',height:imgHeight+'px'});elImage.style.opacity=params.opacity;w.globals.dom.elDefs.node.appendChild(elPattern);}},{key:"getSeriesIndex",value:function getSeriesIndex(opts){var w=this.w;var cType=w.config.chart.type;if((cType==='bar'||cType==='rangeBar')&&w.config.plotOptions.bar.distributed||cType==='heatmap'||cType==='treemap'){this.seriesIndex=opts.seriesNumber;}else{this.seriesIndex=opts.seriesNumber%w.globals.series.length;}return this.seriesIndex;}},{key:"fillPath",value:function fillPath(opts){var w=this.w;this.opts=opts;var cnf=this.w.config;var pathFill;var patternFill,gradientFill;this.seriesIndex=this.getSeriesIndex(opts);var fillColors=this.getFillColors();var fillColor=fillColors[this.seriesIndex];//override fillcolor if user inputted color with data
if(w.globals.seriesColors[this.seriesIndex]!==undefined){fillColor=w.globals.seriesColors[this.seriesIndex];}if(typeof fillColor==='function'){fillColor=fillColor({seriesIndex:this.seriesIndex,dataPointIndex:opts.dataPointIndex,value:opts.value,w:w});}var fillType=opts.fillType?opts.fillType:this.getFillType(this.seriesIndex);var fillOpacity=Array.isArray(cnf.fill.opacity)?cnf.fill.opacity[this.seriesIndex]:cnf.fill.opacity;if(opts.color){fillColor=opts.color;}// in case a color is undefined, fallback to white color to prevent runtime error
if(!fillColor){fillColor='#fff';console.warn('undefined color - ApexCharts');}var defaultColor=fillColor;if(fillColor.indexOf('rgb')===-1){if(fillColor.length<9){// if the hex contains alpha and is of 9 digit, skip the opacity
defaultColor=Utils$1.hexToRgba(fillColor,fillOpacity);}}else{if(fillColor.indexOf('rgba')>-1){fillOpacity=Utils$1.getOpacityFromRGBA(fillColor);}}if(opts.opacity)fillOpacity=opts.opacity;if(fillType==='pattern'){patternFill=this.handlePatternFill({fillConfig:opts.fillConfig,patternFill:patternFill,fillColor:fillColor,fillOpacity:fillOpacity,defaultColor:defaultColor});}if(fillType==='gradient'){gradientFill=this.handleGradientFill({fillConfig:opts.fillConfig,fillColor:fillColor,fillOpacity:fillOpacity,i:this.seriesIndex});}if(fillType==='image'){var imgSrc=cnf.fill.image.src;var patternID=opts.patternID?opts.patternID:'';this.clippedImgArea({opacity:fillOpacity,image:Array.isArray(imgSrc)?opts.seriesNumber<imgSrc.length?imgSrc[opts.seriesNumber]:imgSrc[0]:imgSrc,width:opts.width?opts.width:undefined,height:opts.height?opts.height:undefined,patternUnits:opts.patternUnits,patternID:"pattern".concat(w.globals.cuid).concat(opts.seriesNumber+1).concat(patternID)});pathFill="url(#pattern".concat(w.globals.cuid).concat(opts.seriesNumber+1).concat(patternID,")");}else if(fillType==='gradient'){pathFill=gradientFill;}else if(fillType==='pattern'){pathFill=patternFill;}else{pathFill=defaultColor;}// override pattern/gradient if opts.solid is true
if(opts.solid){pathFill=defaultColor;}return pathFill;}},{key:"getFillType",value:function getFillType(seriesIndex){var w=this.w;if(Array.isArray(w.config.fill.type)){return w.config.fill.type[seriesIndex];}else{return w.config.fill.type;}}},{key:"getFillColors",value:function getFillColors(){var w=this.w;var cnf=w.config;var opts=this.opts;var fillColors=[];if(w.globals.comboCharts){if(w.config.series[this.seriesIndex].type==='line'){if(Array.isArray(w.globals.stroke.colors)){fillColors=w.globals.stroke.colors;}else{fillColors.push(w.globals.stroke.colors);}}else{if(Array.isArray(w.globals.fill.colors)){fillColors=w.globals.fill.colors;}else{fillColors.push(w.globals.fill.colors);}}}else{if(cnf.chart.type==='line'){if(Array.isArray(w.globals.stroke.colors)){fillColors=w.globals.stroke.colors;}else{fillColors.push(w.globals.stroke.colors);}}else{if(Array.isArray(w.globals.fill.colors)){fillColors=w.globals.fill.colors;}else{fillColors.push(w.globals.fill.colors);}}}// colors passed in arguments
if(typeof opts.fillColors!=='undefined'){fillColors=[];if(Array.isArray(opts.fillColors)){fillColors=opts.fillColors.slice();}else{fillColors.push(opts.fillColors);}}return fillColors;}},{key:"handlePatternFill",value:function handlePatternFill(_ref){var fillConfig=_ref.fillConfig,patternFill=_ref.patternFill,fillColor=_ref.fillColor,fillOpacity=_ref.fillOpacity,defaultColor=_ref.defaultColor;var fillCnf=this.w.config.fill;if(fillConfig){fillCnf=fillConfig;}var opts=this.opts;var graphics=new Graphics(this.ctx);var patternStrokeWidth=Array.isArray(fillCnf.pattern.strokeWidth)?fillCnf.pattern.strokeWidth[this.seriesIndex]:fillCnf.pattern.strokeWidth;var patternLineColor=fillColor;if(Array.isArray(fillCnf.pattern.style)){if(typeof fillCnf.pattern.style[opts.seriesNumber]!=='undefined'){var pf=graphics.drawPattern(fillCnf.pattern.style[opts.seriesNumber],fillCnf.pattern.width,fillCnf.pattern.height,patternLineColor,patternStrokeWidth,fillOpacity);patternFill=pf;}else{patternFill=defaultColor;}}else{patternFill=graphics.drawPattern(fillCnf.pattern.style,fillCnf.pattern.width,fillCnf.pattern.height,patternLineColor,patternStrokeWidth,fillOpacity);}return patternFill;}},{key:"handleGradientFill",value:function handleGradientFill(_ref2){var fillColor=_ref2.fillColor,fillOpacity=_ref2.fillOpacity,fillConfig=_ref2.fillConfig,i=_ref2.i;var fillCnf=this.w.config.fill;if(fillConfig){fillCnf=_objectSpread2(_objectSpread2({},fillCnf),fillConfig);}var opts=this.opts;var graphics=new Graphics(this.ctx);var utils=new Utils$1();var type=fillCnf.gradient.type;var gradientFrom=fillColor;var gradientTo;var opacityFrom=fillCnf.gradient.opacityFrom===undefined?fillOpacity:Array.isArray(fillCnf.gradient.opacityFrom)?fillCnf.gradient.opacityFrom[i]:fillCnf.gradient.opacityFrom;if(gradientFrom.indexOf('rgba')>-1){opacityFrom=Utils$1.getOpacityFromRGBA(gradientFrom);}var opacityTo=fillCnf.gradient.opacityTo===undefined?fillOpacity:Array.isArray(fillCnf.gradient.opacityTo)?fillCnf.gradient.opacityTo[i]:fillCnf.gradient.opacityTo;if(fillCnf.gradient.gradientToColors===undefined||fillCnf.gradient.gradientToColors.length===0){if(fillCnf.gradient.shade==='dark'){gradientTo=utils.shadeColor(parseFloat(fillCnf.gradient.shadeIntensity)*-1,fillColor.indexOf('rgb')>-1?Utils$1.rgb2hex(fillColor):fillColor);}else{gradientTo=utils.shadeColor(parseFloat(fillCnf.gradient.shadeIntensity),fillColor.indexOf('rgb')>-1?Utils$1.rgb2hex(fillColor):fillColor);}}else{if(fillCnf.gradient.gradientToColors[opts.seriesNumber]){var gToColor=fillCnf.gradient.gradientToColors[opts.seriesNumber];gradientTo=gToColor;if(gToColor.indexOf('rgba')>-1){opacityTo=Utils$1.getOpacityFromRGBA(gToColor);}}else{gradientTo=fillColor;}}if(fillCnf.gradient.gradientFrom){gradientFrom=fillCnf.gradient.gradientFrom;}if(fillCnf.gradient.gradientTo){gradientTo=fillCnf.gradient.gradientTo;}if(fillCnf.gradient.inverseColors){var t=gradientFrom;gradientFrom=gradientTo;gradientTo=t;}if(gradientFrom.indexOf('rgb')>-1){gradientFrom=Utils$1.rgb2hex(gradientFrom);}if(gradientTo.indexOf('rgb')>-1){gradientTo=Utils$1.rgb2hex(gradientTo);}return graphics.drawGradient(type,gradientFrom,gradientTo,opacityFrom,opacityTo,opts.size,fillCnf.gradient.stops,fillCnf.gradient.colorStops,i);}}]);return Fill;}();/**
   * ApexCharts Markers Class for drawing points on y values in axes charts.
   *
   * @module Markers
   **/var Markers=/*#__PURE__*/function(){function Markers(ctx,opts){_classCallCheck(this,Markers);this.ctx=ctx;this.w=ctx.w;}_createClass(Markers,[{key:"setGlobalMarkerSize",value:function setGlobalMarkerSize(){var w=this.w;w.globals.markers.size=Array.isArray(w.config.markers.size)?w.config.markers.size:[w.config.markers.size];if(w.globals.markers.size.length>0){if(w.globals.markers.size.length<w.globals.series.length+1){for(var i=0;i<=w.globals.series.length;i++){if(typeof w.globals.markers.size[i]==='undefined'){w.globals.markers.size.push(w.globals.markers.size[0]);}}}}else{w.globals.markers.size=w.config.series.map(function(s){return w.config.markers.size;});}}},{key:"plotChartMarkers",value:function plotChartMarkers(pointsPos,seriesIndex,j,pSize){var alwaysDrawMarker=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var w=this.w;var i=seriesIndex;var p=pointsPos;var elPointsWrap=null;var graphics=new Graphics(this.ctx);var point;var hasDiscreteMarkers=w.config.markers.discrete&&w.config.markers.discrete.length;if(w.globals.markers.size[seriesIndex]>0||alwaysDrawMarker||hasDiscreteMarkers){elPointsWrap=graphics.group({class:alwaysDrawMarker||hasDiscreteMarkers?'':'apexcharts-series-markers'});elPointsWrap.attr('clip-path',"url(#gridRectMarkerMask".concat(w.globals.cuid,")"));}if(Array.isArray(p.x)){for(var q=0;q<p.x.length;q++){var dataPointIndex=j;// a small hack as we have 2 points for the first val to connect it
if(j===1&&q===0)dataPointIndex=0;if(j===1&&q===1)dataPointIndex=1;var PointClasses='apexcharts-marker';if((w.config.chart.type==='line'||w.config.chart.type==='area')&&!w.globals.comboCharts&&!w.config.tooltip.intersect){PointClasses+=' no-pointer-events';}var shouldMarkerDraw=Array.isArray(w.config.markers.size)?w.globals.markers.size[seriesIndex]>0:w.config.markers.size>0;if(shouldMarkerDraw||alwaysDrawMarker||hasDiscreteMarkers){if(Utils$1.isNumber(p.y[q])){PointClasses+=" w".concat(Utils$1.randomId());}else{PointClasses='apexcharts-nullpoint';}var opts=this.getMarkerConfig({cssClass:PointClasses,seriesIndex:seriesIndex,dataPointIndex:dataPointIndex});if(w.config.series[i].data[dataPointIndex]){if(w.config.series[i].data[dataPointIndex].fillColor){opts.pointFillColor=w.config.series[i].data[dataPointIndex].fillColor;}if(w.config.series[i].data[dataPointIndex].strokeColor){opts.pointStrokeColor=w.config.series[i].data[dataPointIndex].strokeColor;}}if(pSize){opts.pSize=pSize;}if(p.x[q]<0||p.x[q]>w.globals.gridWidth||p.y[q]<-w.globals.markers.largestSize||p.y[q]>w.globals.gridHeight+w.globals.markers.largestSize){opts.pSize=0;}point=graphics.drawMarker(p.x[q],p.y[q],opts);point.attr('rel',dataPointIndex);point.attr('j',dataPointIndex);point.attr('index',seriesIndex);point.node.setAttribute('default-marker-size',opts.pSize);var filters=new Filters(this.ctx);filters.setSelectionFilter(point,seriesIndex,dataPointIndex);this.addEvents(point);if(elPointsWrap){elPointsWrap.add(point);}}else{// dynamic array creation - multidimensional
if(typeof w.globals.pointsArray[seriesIndex]==='undefined')w.globals.pointsArray[seriesIndex]=[];w.globals.pointsArray[seriesIndex].push([p.x[q],p.y[q]]);}}}return elPointsWrap;}},{key:"getMarkerConfig",value:function getMarkerConfig(_ref){var cssClass=_ref.cssClass,seriesIndex=_ref.seriesIndex,_ref$dataPointIndex=_ref.dataPointIndex,dataPointIndex=_ref$dataPointIndex===void 0?null:_ref$dataPointIndex,_ref$finishRadius=_ref.finishRadius,finishRadius=_ref$finishRadius===void 0?null:_ref$finishRadius;var w=this.w;var pStyle=this.getMarkerStyle(seriesIndex);var pSize=w.globals.markers.size[seriesIndex];var m=w.config.markers;// discrete markers is an option where user can specify a particular marker with different shape, size and color
if(dataPointIndex!==null&&m.discrete.length){m.discrete.map(function(marker){if(marker.seriesIndex===seriesIndex&&marker.dataPointIndex===dataPointIndex){pStyle.pointStrokeColor=marker.strokeColor;pStyle.pointFillColor=marker.fillColor;pSize=marker.size;pStyle.pointShape=marker.shape;}});}return{pSize:finishRadius===null?pSize:finishRadius,pRadius:m.radius,width:Array.isArray(m.width)?m.width[seriesIndex]:m.width,height:Array.isArray(m.height)?m.height[seriesIndex]:m.height,pointStrokeWidth:Array.isArray(m.strokeWidth)?m.strokeWidth[seriesIndex]:m.strokeWidth,pointStrokeColor:pStyle.pointStrokeColor,pointFillColor:pStyle.pointFillColor,shape:pStyle.pointShape||(Array.isArray(m.shape)?m.shape[seriesIndex]:m.shape),class:cssClass,pointStrokeOpacity:Array.isArray(m.strokeOpacity)?m.strokeOpacity[seriesIndex]:m.strokeOpacity,pointStrokeDashArray:Array.isArray(m.strokeDashArray)?m.strokeDashArray[seriesIndex]:m.strokeDashArray,pointFillOpacity:Array.isArray(m.fillOpacity)?m.fillOpacity[seriesIndex]:m.fillOpacity,seriesIndex:seriesIndex};}},{key:"addEvents",value:function addEvents(circle){var w=this.w;var graphics=new Graphics(this.ctx);circle.node.addEventListener('mouseenter',graphics.pathMouseEnter.bind(this.ctx,circle));circle.node.addEventListener('mouseleave',graphics.pathMouseLeave.bind(this.ctx,circle));circle.node.addEventListener('mousedown',graphics.pathMouseDown.bind(this.ctx,circle));circle.node.addEventListener('click',w.config.markers.onClick);circle.node.addEventListener('dblclick',w.config.markers.onDblClick);circle.node.addEventListener('touchstart',graphics.pathMouseDown.bind(this.ctx,circle),{passive:true});}},{key:"getMarkerStyle",value:function getMarkerStyle(seriesIndex){var w=this.w;var colors=w.globals.markers.colors;var strokeColors=w.config.markers.strokeColor||w.config.markers.strokeColors;var pointStrokeColor=Array.isArray(strokeColors)?strokeColors[seriesIndex]:strokeColors;var pointFillColor=Array.isArray(colors)?colors[seriesIndex]:colors;return{pointStrokeColor:pointStrokeColor,pointFillColor:pointFillColor};}}]);return Markers;}();/**
   * ApexCharts Scatter Class.
   * This Class also handles bubbles chart as currently there is no major difference in drawing them,
   * @module Scatter
   **/var Scatter=/*#__PURE__*/function(){function Scatter(ctx){_classCallCheck(this,Scatter);this.ctx=ctx;this.w=ctx.w;this.initialAnim=this.w.config.chart.animations.enabled;this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled;}_createClass(Scatter,[{key:"draw",value:function draw(elSeries,j,opts){var w=this.w;var graphics=new Graphics(this.ctx);var realIndex=opts.realIndex;var pointsPos=opts.pointsPos;var zRatio=opts.zRatio;var elPointsMain=opts.elParent;var elPointsWrap=graphics.group({class:"apexcharts-series-markers apexcharts-series-".concat(w.config.chart.type)});elPointsWrap.attr('clip-path',"url(#gridRectMarkerMask".concat(w.globals.cuid,")"));if(Array.isArray(pointsPos.x)){for(var q=0;q<pointsPos.x.length;q++){var dataPointIndex=j+1;var shouldDraw=true;// a small hack as we have 2 points for the first val to connect it
if(j===0&&q===0)dataPointIndex=0;if(j===0&&q===1)dataPointIndex=1;var radius=0;var finishRadius=w.globals.markers.size[realIndex];if(zRatio!==Infinity){// means we have a bubble
var bubble=w.config.plotOptions.bubble;finishRadius=w.globals.seriesZ[realIndex][dataPointIndex];if(bubble.zScaling){finishRadius/=zRatio;}if(bubble.minBubbleRadius&&finishRadius<bubble.minBubbleRadius){finishRadius=bubble.minBubbleRadius;}if(bubble.maxBubbleRadius&&finishRadius>bubble.maxBubbleRadius){finishRadius=bubble.maxBubbleRadius;}}if(!w.config.chart.animations.enabled){radius=finishRadius;}var x=pointsPos.x[q];var y=pointsPos.y[q];radius=radius||0;if(y===null||typeof w.globals.series[realIndex][dataPointIndex]==='undefined'){shouldDraw=false;}if(shouldDraw){var point=this.drawPoint(x,y,radius,finishRadius,realIndex,dataPointIndex,j);elPointsWrap.add(point);}elPointsMain.add(elPointsWrap);}}}},{key:"drawPoint",value:function drawPoint(x,y,radius,finishRadius,realIndex,dataPointIndex,j){var w=this.w;var i=realIndex;var anim=new Animations(this.ctx);var filters=new Filters(this.ctx);var fill=new Fill(this.ctx);var markers=new Markers(this.ctx);var graphics=new Graphics(this.ctx);var markerConfig=markers.getMarkerConfig({cssClass:'apexcharts-marker',seriesIndex:i,dataPointIndex:dataPointIndex,finishRadius:w.config.chart.type==='bubble'||w.globals.comboCharts&&w.config.series[realIndex]&&w.config.series[realIndex].type==='bubble'?finishRadius:null});finishRadius=markerConfig.pSize;var pathFillCircle=fill.fillPath({seriesNumber:realIndex,dataPointIndex:dataPointIndex,color:markerConfig.pointFillColor,patternUnits:'objectBoundingBox',value:w.globals.series[realIndex][j]});var el;if(markerConfig.shape==='circle'){el=graphics.drawCircle(radius);}else if(markerConfig.shape==='square'||markerConfig.shape==='rect'){el=graphics.drawRect(0,0,markerConfig.width-markerConfig.pointStrokeWidth/2,markerConfig.height-markerConfig.pointStrokeWidth/2,markerConfig.pRadius);}if(w.config.series[i].data[dataPointIndex]){if(w.config.series[i].data[dataPointIndex].fillColor){pathFillCircle=w.config.series[i].data[dataPointIndex].fillColor;}}el.attr({x:x-markerConfig.width/2-markerConfig.pointStrokeWidth/2,y:y-markerConfig.height/2-markerConfig.pointStrokeWidth/2,cx:x,cy:y,fill:pathFillCircle,'fill-opacity':markerConfig.pointFillOpacity,stroke:markerConfig.pointStrokeColor,r:finishRadius,'stroke-width':markerConfig.pointStrokeWidth,'stroke-dasharray':markerConfig.pointStrokeDashArray,'stroke-opacity':markerConfig.pointStrokeOpacity});if(w.config.chart.dropShadow.enabled){var dropShadow=w.config.chart.dropShadow;filters.dropShadow(el,dropShadow,realIndex);}if(this.initialAnim&&!w.globals.dataChanged&&!w.globals.resized){var speed=w.config.chart.animations.speed;anim.animateMarker(el,0,markerConfig.shape==='circle'?finishRadius:{width:markerConfig.width,height:markerConfig.height},speed,w.globals.easing,function(){window.setTimeout(function(){anim.animationCompleted(el);},100);});}else{w.globals.animationEnded=true;}if(w.globals.dataChanged&&markerConfig.shape==='circle'){if(this.dynamicAnim){var _speed=w.config.chart.animations.dynamicAnimation.speed;var prevX,prevY,prevR;var prevPathJ=null;prevPathJ=w.globals.previousPaths[realIndex]&&w.globals.previousPaths[realIndex][j];if(typeof prevPathJ!=='undefined'&&prevPathJ!==null){// series containing less elements will ignore these values and revert to 0
prevX=prevPathJ.x;prevY=prevPathJ.y;prevR=typeof prevPathJ.r!=='undefined'?prevPathJ.r:finishRadius;}for(var cs=0;cs<w.globals.collapsedSeries.length;cs++){if(w.globals.collapsedSeries[cs].index===realIndex){_speed=1;finishRadius=0;}}if(x===0&&y===0)finishRadius=0;anim.animateCircle(el,{cx:prevX,cy:prevY,r:prevR},{cx:x,cy:y,r:finishRadius},_speed,w.globals.easing);}else{el.attr({r:finishRadius});}}el.attr({rel:dataPointIndex,j:dataPointIndex,index:realIndex,'default-marker-size':finishRadius});filters.setSelectionFilter(el,realIndex,dataPointIndex);markers.addEvents(el);el.node.classList.add('apexcharts-marker');return el;}},{key:"centerTextInBubble",value:function centerTextInBubble(y){var w=this.w;y=y+parseInt(w.config.dataLabels.style.fontSize,10)/4;return{y:y};}}]);return Scatter;}();/**
   * ApexCharts DataLabels Class for drawing dataLabels on Axes based Charts.
   *
   * @module DataLabels
   **/var DataLabels=/*#__PURE__*/function(){function DataLabels(ctx){_classCallCheck(this,DataLabels);this.ctx=ctx;this.w=ctx.w;}// When there are many datalabels to be printed, and some of them overlaps each other in the same series, this method will take care of that
// Also, when datalabels exceeds the drawable area and get clipped off, we need to adjust and move some pixels to make them visible again
_createClass(DataLabels,[{key:"dataLabelsCorrection",value:function dataLabelsCorrection(x,y,val,i,dataPointIndex,alwaysDrawDataLabel,fontSize){var w=this.w;var graphics=new Graphics(this.ctx);var drawnextLabel=false;//
var textRects=graphics.getTextRects(val,fontSize);var width=textRects.width;var height=textRects.height;if(y<0)y=0;if(y>w.globals.gridHeight+height)y=w.globals.gridHeight+height/2;// first value in series, so push an empty array
if(typeof w.globals.dataLabelsRects[i]==='undefined')w.globals.dataLabelsRects[i]=[];// then start pushing actual rects in that sub-array
w.globals.dataLabelsRects[i].push({x:x,y:y,width:width,height:height});var len=w.globals.dataLabelsRects[i].length-2;var lastDrawnIndex=typeof w.globals.lastDrawnDataLabelsIndexes[i]!=='undefined'?w.globals.lastDrawnDataLabelsIndexes[i][w.globals.lastDrawnDataLabelsIndexes[i].length-1]:0;if(typeof w.globals.dataLabelsRects[i][len]!=='undefined'){var lastDataLabelRect=w.globals.dataLabelsRects[i][lastDrawnIndex];if(// next label forward and x not intersecting
x>lastDataLabelRect.x+lastDataLabelRect.width||y>lastDataLabelRect.y+lastDataLabelRect.height||y+height<lastDataLabelRect.y||x+width<lastDataLabelRect.x// next label is going to be drawn backwards
){// the 2 indexes don't override, so OK to draw next label
drawnextLabel=true;}}if(dataPointIndex===0||alwaysDrawDataLabel){drawnextLabel=true;}return{x:x,y:y,textRects:textRects,drawnextLabel:drawnextLabel};}},{key:"drawDataLabel",value:function drawDataLabel(_ref){var _this=this;var type=_ref.type,pos=_ref.pos,i=_ref.i,j=_ref.j,isRangeStart=_ref.isRangeStart,_ref$strokeWidth=_ref.strokeWidth,strokeWidth=_ref$strokeWidth===void 0?2:_ref$strokeWidth;// this method handles line, area, bubble, scatter charts as those charts contains markers/points which have pre-defined x/y positions
// all other charts like radar / bars / heatmaps will define their own drawDataLabel routine
var w=this.w;var graphics=new Graphics(this.ctx);var dataLabelsConfig=w.config.dataLabels;var x=0;var y=0;var dataPointIndex=j;var elDataLabelsWrap=null;var seriesCollapsed=w.globals.collapsedSeriesIndices.indexOf(i)!==-1;if(seriesCollapsed||!dataLabelsConfig.enabled||!Array.isArray(pos.x)){return elDataLabelsWrap;}elDataLabelsWrap=graphics.group({class:'apexcharts-data-labels'});for(var q=0;q<pos.x.length;q++){x=pos.x[q]+dataLabelsConfig.offsetX;y=pos.y[q]+dataLabelsConfig.offsetY+strokeWidth;if(!isNaN(x)){// a small hack as we have 2 points for the first val to connect it
if(j===1&&q===0)dataPointIndex=0;if(j===1&&q===1)dataPointIndex=1;var val=w.globals.series[i][dataPointIndex];if(type==='rangeArea'){if(isRangeStart){val=w.globals.seriesRangeStart[i][dataPointIndex];}else{val=w.globals.seriesRangeEnd[i][dataPointIndex];}}var text='';var getText=function getText(v){return w.config.dataLabels.formatter(v,{ctx:_this.ctx,seriesIndex:i,dataPointIndex:dataPointIndex,w:w});};if(w.config.chart.type==='bubble'){val=w.globals.seriesZ[i][dataPointIndex];text=getText(val);y=pos.y[q];var scatter=new Scatter(this.ctx);var centerTextInBubbleCoords=scatter.centerTextInBubble(y,i,dataPointIndex);y=centerTextInBubbleCoords.y;}else{if(typeof val!=='undefined'){text=getText(val);}}this.plotDataLabelsText({x:x,y:y,text:text,i:i,j:dataPointIndex,parent:elDataLabelsWrap,offsetCorrection:true,dataLabelsConfig:w.config.dataLabels});}}return elDataLabelsWrap;}},{key:"plotDataLabelsText",value:function plotDataLabelsText(opts){var w=this.w;var graphics=new Graphics(this.ctx);var x=opts.x,y=opts.y,i=opts.i,j=opts.j,text=opts.text,textAnchor=opts.textAnchor,fontSize=opts.fontSize,parent=opts.parent,dataLabelsConfig=opts.dataLabelsConfig,color=opts.color,alwaysDrawDataLabel=opts.alwaysDrawDataLabel,offsetCorrection=opts.offsetCorrection;if(Array.isArray(w.config.dataLabels.enabledOnSeries)){if(w.config.dataLabels.enabledOnSeries.indexOf(i)<0){return;}}var correctedLabels={x:x,y:y,drawnextLabel:true,textRects:null};if(offsetCorrection){correctedLabels=this.dataLabelsCorrection(x,y,text,i,j,alwaysDrawDataLabel,parseInt(dataLabelsConfig.style.fontSize,10));}// when zoomed, we don't need to correct labels offsets,
// but if normally, labels get cropped, correct them
if(!w.globals.zoomed){x=correctedLabels.x;y=correctedLabels.y;}if(correctedLabels.textRects){// fixes #2264
if(x<-20-correctedLabels.textRects.width||x>w.globals.gridWidth+correctedLabels.textRects.width+30){// datalabels fall outside drawing area, so draw a blank label
text='';}}var dataLabelColor=w.globals.dataLabels.style.colors[i];if((w.config.chart.type==='bar'||w.config.chart.type==='rangeBar')&&w.config.plotOptions.bar.distributed||w.config.dataLabels.distributed){dataLabelColor=w.globals.dataLabels.style.colors[j];}if(typeof dataLabelColor==='function'){dataLabelColor=dataLabelColor({series:w.globals.series,seriesIndex:i,dataPointIndex:j,w:w});}if(color){dataLabelColor=color;}var offX=dataLabelsConfig.offsetX;var offY=dataLabelsConfig.offsetY;if(w.config.chart.type==='bar'||w.config.chart.type==='rangeBar'){// for certain chart types, we handle offsets while calculating datalabels pos
// why? because bars/column may have negative values and based on that
// offsets becomes reversed
offX=0;offY=0;}if(correctedLabels.drawnextLabel){var dataLabelText=graphics.drawText({width:100,height:parseInt(dataLabelsConfig.style.fontSize,10),x:x+offX,y:y+offY,foreColor:dataLabelColor,textAnchor:textAnchor||dataLabelsConfig.textAnchor,text:text,fontSize:fontSize||dataLabelsConfig.style.fontSize,fontFamily:dataLabelsConfig.style.fontFamily,fontWeight:dataLabelsConfig.style.fontWeight||'normal'});dataLabelText.attr({class:'apexcharts-datalabel',cx:x,cy:y});if(dataLabelsConfig.dropShadow.enabled){var textShadow=dataLabelsConfig.dropShadow;var filters=new Filters(this.ctx);filters.dropShadow(dataLabelText,textShadow);}parent.add(dataLabelText);if(typeof w.globals.lastDrawnDataLabelsIndexes[i]==='undefined'){w.globals.lastDrawnDataLabelsIndexes[i]=[];}w.globals.lastDrawnDataLabelsIndexes[i].push(j);}}},{key:"addBackgroundToDataLabel",value:function addBackgroundToDataLabel(el,coords){var w=this.w;var bCnf=w.config.dataLabels.background;var paddingH=bCnf.padding;var paddingV=bCnf.padding/2;var width=coords.width;var height=coords.height;var graphics=new Graphics(this.ctx);var elRect=graphics.drawRect(coords.x-paddingH,coords.y-paddingV/2,width+paddingH*2,height+paddingV,bCnf.borderRadius,w.config.chart.background==='transparent'?'#fff':w.config.chart.background,bCnf.opacity,bCnf.borderWidth,bCnf.borderColor);if(bCnf.dropShadow.enabled){var filters=new Filters(this.ctx);filters.dropShadow(elRect,bCnf.dropShadow);}return elRect;}},{key:"dataLabelsBackground",value:function dataLabelsBackground(){var w=this.w;if(w.config.chart.type==='bubble')return;var elDataLabels=w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels text');for(var i=0;i<elDataLabels.length;i++){var el=elDataLabels[i];var coords=el.getBBox();var elRect=null;if(coords.width&&coords.height){elRect=this.addBackgroundToDataLabel(el,coords);}if(elRect){el.parentNode.insertBefore(elRect.node,el);var background=el.getAttribute('fill');var shouldAnim=w.config.chart.animations.enabled&&!w.globals.resized&&!w.globals.dataChanged;if(shouldAnim){elRect.animate().attr({fill:background});}else{elRect.attr({fill:background});}el.setAttribute('fill',w.config.dataLabels.background.foreColor);}}}},{key:"bringForward",value:function bringForward(){var w=this.w;var elDataLabelsNodes=w.globals.dom.baseEl.querySelectorAll('.apexcharts-datalabels');var elSeries=w.globals.dom.baseEl.querySelector('.apexcharts-plot-series:last-child');for(var i=0;i<elDataLabelsNodes.length;i++){if(elSeries){elSeries.insertBefore(elDataLabelsNodes[i],elSeries.nextSibling);}}}}]);return DataLabels;}();/**
   * ApexCharts Series Class for interaction with the Series of the chart.
   *
   * @module Series
   **/var Series=/*#__PURE__*/function(){function Series(ctx){_classCallCheck(this,Series);this.ctx=ctx;this.w=ctx.w;this.legendInactiveClass='legend-mouseover-inactive';}_createClass(Series,[{key:"getAllSeriesEls",value:function getAllSeriesEls(){return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");}},{key:"getSeriesByName",value:function getSeriesByName(seriesName){return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(Utils$1.escapeString(seriesName),"']"));}},{key:"isSeriesHidden",value:function isSeriesHidden(seriesName){var targetElement=this.getSeriesByName(seriesName);var realIndex=parseInt(targetElement.getAttribute('data:realIndex'),10);var isHidden=targetElement.classList.contains('apexcharts-series-collapsed');return{isHidden:isHidden,realIndex:realIndex};}},{key:"addCollapsedClassToSeries",value:function addCollapsedClassToSeries(elSeries,index){var w=this.w;function iterateOnAllCollapsedSeries(series){for(var cs=0;cs<series.length;cs++){if(series[cs].index===index){elSeries.node.classList.add('apexcharts-series-collapsed');}}}iterateOnAllCollapsedSeries(w.globals.collapsedSeries);iterateOnAllCollapsedSeries(w.globals.ancillaryCollapsedSeries);}},{key:"toggleSeries",value:function toggleSeries(seriesName){var isSeriesHidden=this.isSeriesHidden(seriesName);this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex,isSeriesHidden.isHidden);return isSeriesHidden.isHidden;}},{key:"showSeries",value:function showSeries(seriesName){var isSeriesHidden=this.isSeriesHidden(seriesName);if(isSeriesHidden.isHidden){this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex,true);}}},{key:"hideSeries",value:function hideSeries(seriesName){var isSeriesHidden=this.isSeriesHidden(seriesName);if(!isSeriesHidden.isHidden){this.ctx.legend.legendHelpers.toggleDataSeries(isSeriesHidden.realIndex,false);}}},{key:"resetSeries",value:function resetSeries(){var shouldUpdateChart=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var shouldResetZoom=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var shouldResetCollapsed=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var w=this.w;var series=Utils$1.clone(w.globals.initialSeries);w.globals.previousPaths=[];if(shouldResetCollapsed){w.globals.collapsedSeries=[];w.globals.ancillaryCollapsedSeries=[];w.globals.collapsedSeriesIndices=[];w.globals.ancillaryCollapsedSeriesIndices=[];}else{series=this.emptyCollapsedSeries(series);}w.config.series=series;if(shouldUpdateChart){if(shouldResetZoom){w.globals.zoomed=false;this.ctx.updateHelpers.revertDefaultAxisMinMax();}this.ctx.updateHelpers._updateSeries(series,w.config.chart.animations.dynamicAnimation.enabled);}}},{key:"emptyCollapsedSeries",value:function emptyCollapsedSeries(series){var w=this.w;for(var i=0;i<series.length;i++){if(w.globals.collapsedSeriesIndices.indexOf(i)>-1){series[i].data=[];}}return series;}},{key:"toggleSeriesOnHover",value:function toggleSeriesOnHover(e,targetElement){var w=this.w;if(!targetElement)targetElement=e.target;var allSeriesEls=w.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");if(e.type==='mousemove'){var seriesCnt=parseInt(targetElement.getAttribute('rel'),10)-1;var seriesEl=null;var dataLabelEl=null;if(w.globals.axisCharts||w.config.chart.type==='radialBar'){if(w.globals.axisCharts){seriesEl=w.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(seriesCnt,"']"));dataLabelEl=w.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(seriesCnt,"']"));}else{seriesEl=w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt+1,"']"));}}else{seriesEl=w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt+1,"'] path"));}for(var se=0;se<allSeriesEls.length;se++){allSeriesEls[se].classList.add(this.legendInactiveClass);}if(seriesEl!==null){if(!w.globals.axisCharts){seriesEl.parentNode.classList.remove(this.legendInactiveClass);}seriesEl.classList.remove(this.legendInactiveClass);if(dataLabelEl!==null){dataLabelEl.classList.remove(this.legendInactiveClass);}}}else if(e.type==='mouseout'){for(var _se=0;_se<allSeriesEls.length;_se++){allSeriesEls[_se].classList.remove(this.legendInactiveClass);}}}},{key:"highlightRangeInSeries",value:function highlightRangeInSeries(e,targetElement){var _this=this;var w=this.w;var allHeatMapElements=w.globals.dom.baseEl.getElementsByClassName('apexcharts-heatmap-rect');var activeInactive=function activeInactive(action){for(var i=0;i<allHeatMapElements.length;i++){allHeatMapElements[i].classList[action](_this.legendInactiveClass);}};var removeInactiveClassFromHoveredRange=function removeInactiveClassFromHoveredRange(range){for(var i=0;i<allHeatMapElements.length;i++){var val=parseInt(allHeatMapElements[i].getAttribute('val'),10);if(val>=range.from&&val<=range.to){allHeatMapElements[i].classList.remove(_this.legendInactiveClass);}}};if(e.type==='mousemove'){var seriesCnt=parseInt(targetElement.getAttribute('rel'),10)-1;activeInactive('add');var range=w.config.plotOptions.heatmap.colorScale.ranges[seriesCnt];removeInactiveClassFromHoveredRange(range);}else if(e.type==='mouseout'){activeInactive('remove');}}},{key:"getActiveConfigSeriesIndex",value:function getActiveConfigSeriesIndex(){var order=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'asc';var chartTypes=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];var w=this.w;var activeIndex=0;if(w.config.series.length>1){// active series flag is required to know if user has not deactivated via legend click
var activeSeriesIndex=w.config.series.map(function(s,index){var checkChartType=function checkChartType(){if(w.globals.comboCharts){return chartTypes.length===0||chartTypes.length&&chartTypes.indexOf(w.config.series[index].type)>-1;}return true;};var hasData=s.data&&s.data.length>0&&w.globals.collapsedSeriesIndices.indexOf(index)===-1;return hasData&&checkChartType()?index:-1;});for(var a=order==='asc'?0:activeSeriesIndex.length-1;order==='asc'?a<activeSeriesIndex.length:a>=0;order==='asc'?a++:a--){if(activeSeriesIndex[a]!==-1){activeIndex=activeSeriesIndex[a];break;}}}return activeIndex;}},{key:"getBarSeriesIndices",value:function getBarSeriesIndices(){var w=this.w;if(w.globals.comboCharts){return this.w.config.series.map(function(s,i){return s.type==='bar'||s.type==='column'?i:-1;}).filter(function(i){return i!==-1;});}return this.w.config.series.map(function(s,i){return i;});}},{key:"getPreviousPaths",value:function getPreviousPaths(){var w=this.w;w.globals.previousPaths=[];function pushPaths(seriesEls,i,type){var paths=seriesEls[i].childNodes;var dArr={type:type,paths:[],realIndex:seriesEls[i].getAttribute('data:realIndex')};for(var j=0;j<paths.length;j++){if(paths[j].hasAttribute('pathTo')){var d=paths[j].getAttribute('pathTo');dArr.paths.push({d:d});}}w.globals.previousPaths.push(dArr);}var getPaths=function getPaths(chartType){return w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(chartType,"-series .apexcharts-series"));};var chartTypes=['line','area','bar','rangebar','rangeArea','candlestick','radar'];chartTypes.forEach(function(type){var paths=getPaths(type);for(var p=0;p<paths.length;p++){pushPaths(paths,p,type);}});this.handlePrevBubbleScatterPaths('bubble');this.handlePrevBubbleScatterPaths('scatter');var heatTreeSeries=w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(w.config.chart.type," .apexcharts-series"));if(heatTreeSeries.length>0){var _loop=function _loop(h){var seriesEls=w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(w.config.chart.type," .apexcharts-series[data\\:realIndex='").concat(h,"'] rect"));var dArr=[];var _loop2=function _loop2(i){var getAttr=function getAttr(x){return seriesEls[i].getAttribute(x);};var rect={x:parseFloat(getAttr('x')),y:parseFloat(getAttr('y')),width:parseFloat(getAttr('width')),height:parseFloat(getAttr('height'))};dArr.push({rect:rect,color:seriesEls[i].getAttribute('color')});};for(var i=0;i<seriesEls.length;i++){_loop2(i);}w.globals.previousPaths.push(dArr);};for(var h=0;h<heatTreeSeries.length;h++){_loop(h);}}if(!w.globals.axisCharts){// for non-axis charts (i.e., circular charts, pathFrom is not usable. We need whole series)
w.globals.previousPaths=w.globals.series;}}},{key:"handlePrevBubbleScatterPaths",value:function handlePrevBubbleScatterPaths(type){var w=this.w;var paths=w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type,"-series .apexcharts-series"));if(paths.length>0){for(var s=0;s<paths.length;s++){var seriesEls=w.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(type,"-series .apexcharts-series[data\\:realIndex='").concat(s,"'] circle"));var dArr=[];for(var i=0;i<seriesEls.length;i++){dArr.push({x:seriesEls[i].getAttribute('cx'),y:seriesEls[i].getAttribute('cy'),r:seriesEls[i].getAttribute('r')});}w.globals.previousPaths.push(dArr);}}}},{key:"clearPreviousPaths",value:function clearPreviousPaths(){var w=this.w;w.globals.previousPaths=[];w.globals.allSeriesCollapsed=false;}},{key:"handleNoData",value:function handleNoData(){var w=this.w;var me=this;var noDataOpts=w.config.noData;var graphics=new Graphics(me.ctx);var x=w.globals.svgWidth/2;var y=w.globals.svgHeight/2;var textAnchor='middle';w.globals.noData=true;w.globals.animationEnded=true;if(noDataOpts.align==='left'){x=10;textAnchor='start';}else if(noDataOpts.align==='right'){x=w.globals.svgWidth-10;textAnchor='end';}if(noDataOpts.verticalAlign==='top'){y=50;}else if(noDataOpts.verticalAlign==='bottom'){y=w.globals.svgHeight-50;}x=x+noDataOpts.offsetX;y=y+parseInt(noDataOpts.style.fontSize,10)+2+noDataOpts.offsetY;if(noDataOpts.text!==undefined&&noDataOpts.text!==''){var titleText=graphics.drawText({x:x,y:y,text:noDataOpts.text,textAnchor:textAnchor,fontSize:noDataOpts.style.fontSize,fontFamily:noDataOpts.style.fontFamily,foreColor:noDataOpts.style.color,opacity:1,class:'apexcharts-text-nodata'});w.globals.dom.Paper.add(titleText);}}// When user clicks on legends, the collapsed series is filled with [0,0,0,...,0]
// This is because we don't want to alter the series' length as it is used at many places
},{key:"setNullSeriesToZeroValues",value:function setNullSeriesToZeroValues(series){var w=this.w;for(var sl=0;sl<series.length;sl++){if(series[sl].length===0){for(var j=0;j<series[w.globals.maxValsInArrayIndex].length;j++){series[sl].push(0);}}}return series;}},{key:"hasAllSeriesEqualX",value:function hasAllSeriesEqualX(){var equalLen=true;var w=this.w;var filteredSerX=this.filteredSeriesX();for(var i=0;i<filteredSerX.length-1;i++){if(filteredSerX[i][0]!==filteredSerX[i+1][0]){equalLen=false;break;}}w.globals.allSeriesHasEqualX=equalLen;return equalLen;}},{key:"filteredSeriesX",value:function filteredSeriesX(){var w=this.w;var filteredSeriesX=w.globals.seriesX.map(function(ser){return ser.length>0?ser:[];});return filteredSeriesX;}}]);return Series;}();var Data=/*#__PURE__*/function(){function Data(ctx){_classCallCheck(this,Data);this.ctx=ctx;this.w=ctx.w;this.twoDSeries=[];this.threeDSeries=[];this.twoDSeriesX=[];this.seriesGoals=[];this.coreUtils=new CoreUtils(this.ctx);}_createClass(Data,[{key:"isMultiFormat",value:function isMultiFormat(){return this.isFormatXY()||this.isFormat2DArray();}// given format is [{x, y}, {x, y}]
},{key:"isFormatXY",value:function isFormatXY(){var series=this.w.config.series.slice();var sr=new Series(this.ctx);this.activeSeriesIndex=sr.getActiveConfigSeriesIndex();if(typeof series[this.activeSeriesIndex].data!=='undefined'&&series[this.activeSeriesIndex].data.length>0&&series[this.activeSeriesIndex].data[0]!==null&&typeof series[this.activeSeriesIndex].data[0].x!=='undefined'&&series[this.activeSeriesIndex].data[0]!==null){return true;}}// given format is [[x, y], [x, y]]
},{key:"isFormat2DArray",value:function isFormat2DArray(){var series=this.w.config.series.slice();var sr=new Series(this.ctx);this.activeSeriesIndex=sr.getActiveConfigSeriesIndex();if(typeof series[this.activeSeriesIndex].data!=='undefined'&&series[this.activeSeriesIndex].data.length>0&&typeof series[this.activeSeriesIndex].data[0]!=='undefined'&&series[this.activeSeriesIndex].data[0]!==null&&series[this.activeSeriesIndex].data[0].constructor===Array){return true;}}},{key:"handleFormat2DArray",value:function handleFormat2DArray(ser,i){var cnf=this.w.config;var gl=this.w.globals;var isBoxPlot=cnf.chart.type==='boxPlot'||cnf.series[i].type==='boxPlot';for(var j=0;j<ser[i].data.length;j++){if(typeof ser[i].data[j][1]!=='undefined'){if(Array.isArray(ser[i].data[j][1])&&ser[i].data[j][1].length===4&&!isBoxPlot){// candlestick nested ohlc format
this.twoDSeries.push(Utils$1.parseNumber(ser[i].data[j][1][3]));}else if(ser[i].data[j].length>=5){// candlestick non-nested ohlc format
this.twoDSeries.push(Utils$1.parseNumber(ser[i].data[j][4]));}else{this.twoDSeries.push(Utils$1.parseNumber(ser[i].data[j][1]));}gl.dataFormatXNumeric=true;}if(cnf.xaxis.type==='datetime'){// if timestamps are provided and xaxis type is datetime,
var ts=new Date(ser[i].data[j][0]);ts=new Date(ts).getTime();this.twoDSeriesX.push(ts);}else{this.twoDSeriesX.push(ser[i].data[j][0]);}}for(var _j=0;_j<ser[i].data.length;_j++){if(typeof ser[i].data[_j][2]!=='undefined'){this.threeDSeries.push(ser[i].data[_j][2]);gl.isDataXYZ=true;}}}},{key:"handleFormatXY",value:function handleFormatXY(ser,i){var cnf=this.w.config;var gl=this.w.globals;var dt=new DateTime(this.ctx);var activeI=i;if(gl.collapsedSeriesIndices.indexOf(i)>-1){// fix #368
activeI=this.activeSeriesIndex;}// get series
for(var j=0;j<ser[i].data.length;j++){if(typeof ser[i].data[j].y!=='undefined'){if(Array.isArray(ser[i].data[j].y)){this.twoDSeries.push(Utils$1.parseNumber(ser[i].data[j].y[ser[i].data[j].y.length-1]));}else{this.twoDSeries.push(Utils$1.parseNumber(ser[i].data[j].y));}}if(typeof ser[i].data[j].goals!=='undefined'&&Array.isArray(ser[i].data[j].goals)){if(typeof this.seriesGoals[i]==='undefined'){this.seriesGoals[i]=[];}this.seriesGoals[i].push(ser[i].data[j].goals);}else{if(typeof this.seriesGoals[i]==='undefined'){this.seriesGoals[i]=[];}this.seriesGoals[i].push(null);}}// get seriesX
for(var _j2=0;_j2<ser[activeI].data.length;_j2++){var isXString=typeof ser[activeI].data[_j2].x==='string';var isXArr=Array.isArray(ser[activeI].data[_j2].x);var isXDate=!isXArr&&!!dt.isValidDate(ser[activeI].data[_j2].x);if(isXString||isXDate){// user supplied '01/01/2017' or a date string (a JS date object is not supported)
if(isXString||cnf.xaxis.convertedCatToNumeric){var isRangeColumn=gl.isBarHorizontal&&gl.isRangeData;if(cnf.xaxis.type==='datetime'&&!isRangeColumn){this.twoDSeriesX.push(dt.parseDate(ser[activeI].data[_j2].x));}else{// a category and not a numeric x value
this.fallbackToCategory=true;this.twoDSeriesX.push(ser[activeI].data[_j2].x);if(!isNaN(ser[activeI].data[_j2].x)&&this.w.config.xaxis.type!=='category'&&typeof ser[activeI].data[_j2].x!=='string'){gl.isXNumeric=true;}}}else{if(cnf.xaxis.type==='datetime'){this.twoDSeriesX.push(dt.parseDate(ser[activeI].data[_j2].x.toString()));}else{gl.dataFormatXNumeric=true;gl.isXNumeric=true;this.twoDSeriesX.push(parseFloat(ser[activeI].data[_j2].x));}}}else if(isXArr){// a multiline label described in array format
this.fallbackToCategory=true;this.twoDSeriesX.push(ser[activeI].data[_j2].x);}else{// a numeric value in x property
gl.isXNumeric=true;gl.dataFormatXNumeric=true;this.twoDSeriesX.push(ser[activeI].data[_j2].x);}}if(ser[i].data[0]&&typeof ser[i].data[0].z!=='undefined'){for(var t=0;t<ser[i].data.length;t++){this.threeDSeries.push(ser[i].data[t].z);}gl.isDataXYZ=true;}}},{key:"handleRangeData",value:function handleRangeData(ser,i){var gl=this.w.globals;var range={};if(this.isFormat2DArray()){range=this.handleRangeDataFormat('array',ser,i);}else if(this.isFormatXY()){range=this.handleRangeDataFormat('xy',ser,i);}// Fix: RangeArea Chart: hide all series results in a crash #3984
gl.seriesRangeStart.push(range.start===undefined?[]:range.start);gl.seriesRangeEnd.push(range.end===undefined?[]:range.end);gl.seriesRange.push(range.rangeUniques);// check for overlaps to avoid clashes in a timeline chart
gl.seriesRange.forEach(function(sr,si){if(sr){sr.forEach(function(sarr,sarri){sarr.y.forEach(function(arr,arri){for(var sri=0;sri<sarr.y.length;sri++){if(arri!==sri){var range1y1=arr.y1;var range1y2=arr.y2;var range2y1=sarr.y[sri].y1;var range2y2=sarr.y[sri].y2;if(range1y1<=range2y2&&range2y1<=range1y2){if(sarr.overlaps.indexOf(arr.rangeName)<0){sarr.overlaps.push(arr.rangeName);}if(sarr.overlaps.indexOf(sarr.y[sri].rangeName)<0){sarr.overlaps.push(sarr.y[sri].rangeName);}}}}});});}});return range;}},{key:"handleCandleStickBoxData",value:function handleCandleStickBoxData(ser,i){var gl=this.w.globals;var ohlc={};if(this.isFormat2DArray()){ohlc=this.handleCandleStickBoxDataFormat('array',ser,i);}else if(this.isFormatXY()){ohlc=this.handleCandleStickBoxDataFormat('xy',ser,i);}gl.seriesCandleO[i]=ohlc.o;gl.seriesCandleH[i]=ohlc.h;gl.seriesCandleM[i]=ohlc.m;gl.seriesCandleL[i]=ohlc.l;gl.seriesCandleC[i]=ohlc.c;return ohlc;}},{key:"handleRangeDataFormat",value:function handleRangeDataFormat(format,ser,i){var rangeStart=[];var rangeEnd=[];var uniqueKeys=ser[i].data.filter(function(thing,index,self){return index===self.findIndex(function(t){return t.x===thing.x;});}).map(function(r,index){return{x:r.x,overlaps:[],y:[]};});if(format==='array'){for(var j=0;j<ser[i].data.length;j++){if(Array.isArray(ser[i].data[j])){rangeStart.push(ser[i].data[j][1][0]);rangeEnd.push(ser[i].data[j][1][1]);}else{rangeStart.push(ser[i].data[j]);rangeEnd.push(ser[i].data[j]);}}}else if(format==='xy'){var _loop=function _loop(_j3){var isDataPoint2D=Array.isArray(ser[i].data[_j3].y);var id=Utils$1.randomId();var x=ser[i].data[_j3].x;var y={y1:isDataPoint2D?ser[i].data[_j3].y[0]:ser[i].data[_j3].y,y2:isDataPoint2D?ser[i].data[_j3].y[1]:ser[i].data[_j3].y,rangeName:id};// CAUTION: mutating config object by adding a new property
// TODO: As this is specifically for timeline rangebar charts, update the docs mentioning the series only supports xy format
ser[i].data[_j3].rangeName=id;var uI=uniqueKeys.findIndex(function(t){return t.x===x;});uniqueKeys[uI].y.push(y);rangeStart.push(y.y1);rangeEnd.push(y.y2);};for(var _j3=0;_j3<ser[i].data.length;_j3++){_loop(_j3);}}return{start:rangeStart,end:rangeEnd,rangeUniques:uniqueKeys};}},{key:"handleCandleStickBoxDataFormat",value:function handleCandleStickBoxDataFormat(format,ser,i){var w=this.w;var isBoxPlot=w.config.chart.type==='boxPlot'||w.config.series[i].type==='boxPlot';var serO=[];var serH=[];var serM=[];var serL=[];var serC=[];if(format==='array'){if(isBoxPlot&&ser[i].data[0].length===6||!isBoxPlot&&ser[i].data[0].length===5){for(var j=0;j<ser[i].data.length;j++){serO.push(ser[i].data[j][1]);serH.push(ser[i].data[j][2]);if(isBoxPlot){serM.push(ser[i].data[j][3]);serL.push(ser[i].data[j][4]);serC.push(ser[i].data[j][5]);}else{serL.push(ser[i].data[j][3]);serC.push(ser[i].data[j][4]);}}}else{for(var _j4=0;_j4<ser[i].data.length;_j4++){if(Array.isArray(ser[i].data[_j4][1])){serO.push(ser[i].data[_j4][1][0]);serH.push(ser[i].data[_j4][1][1]);if(isBoxPlot){serM.push(ser[i].data[_j4][1][2]);serL.push(ser[i].data[_j4][1][3]);serC.push(ser[i].data[_j4][1][4]);}else{serL.push(ser[i].data[_j4][1][2]);serC.push(ser[i].data[_j4][1][3]);}}}}}else if(format==='xy'){for(var _j5=0;_j5<ser[i].data.length;_j5++){if(Array.isArray(ser[i].data[_j5].y)){serO.push(ser[i].data[_j5].y[0]);serH.push(ser[i].data[_j5].y[1]);if(isBoxPlot){serM.push(ser[i].data[_j5].y[2]);serL.push(ser[i].data[_j5].y[3]);serC.push(ser[i].data[_j5].y[4]);}else{serL.push(ser[i].data[_j5].y[2]);serC.push(ser[i].data[_j5].y[3]);}}}}return{o:serO,h:serH,m:serM,l:serL,c:serC};}},{key:"parseDataAxisCharts",value:function parseDataAxisCharts(ser){var _ser$,_this=this;var ctx=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.ctx;var cnf=this.w.config;var gl=this.w.globals;var dt=new DateTime(ctx);var xlabels=cnf.labels.length>0?cnf.labels.slice():cnf.xaxis.categories.slice();gl.isRangeBar=cnf.chart.type==='rangeBar'&&gl.isBarHorizontal;gl.hasXaxisGroups=cnf.xaxis.type==='category'&&cnf.xaxis.group.groups.length>0;if(gl.hasXaxisGroups){gl.groups=cnf.xaxis.group.groups;}gl.hasSeriesGroups=(_ser$=ser[0])===null||_ser$===void 0?void 0:_ser$.group;if(gl.hasSeriesGroups){var buckets=[];var groups=_toConsumableArray(new Set(ser.map(function(s){return s.group;})));ser.forEach(function(s,i){var index=groups.indexOf(s.group);if(!buckets[index])buckets[index]=[];buckets[index].push(s.name);});gl.seriesGroups=buckets;}var handleDates=function handleDates(){for(var j=0;j<xlabels.length;j++){if(typeof xlabels[j]==='string'){// user provided date strings
var isDate=dt.isValidDate(xlabels[j]);if(isDate){_this.twoDSeriesX.push(dt.parseDate(xlabels[j]));}else{throw new Error('You have provided invalid Date format. Please provide a valid JavaScript Date');}}else{// user provided timestamps
_this.twoDSeriesX.push(xlabels[j]);}}};for(var i=0;i<ser.length;i++){this.twoDSeries=[];this.twoDSeriesX=[];this.threeDSeries=[];if(typeof ser[i].data==='undefined'){console.error("It is a possibility that you may have not included 'data' property in series.");return;}if(cnf.chart.type==='rangeBar'||cnf.chart.type==='rangeArea'||ser[i].type==='rangeBar'||ser[i].type==='rangeArea'){gl.isRangeData=true;if(cnf.chart.type==='rangeBar'||cnf.chart.type==='rangeArea'){this.handleRangeData(ser,i);}}if(this.isMultiFormat()){if(this.isFormat2DArray()){this.handleFormat2DArray(ser,i);}else if(this.isFormatXY()){this.handleFormatXY(ser,i);}if(cnf.chart.type==='candlestick'||ser[i].type==='candlestick'||cnf.chart.type==='boxPlot'||ser[i].type==='boxPlot'){this.handleCandleStickBoxData(ser,i);}gl.series.push(this.twoDSeries);gl.labels.push(this.twoDSeriesX);gl.seriesX.push(this.twoDSeriesX);gl.seriesGoals=this.seriesGoals;if(i===this.activeSeriesIndex&&!this.fallbackToCategory){gl.isXNumeric=true;}}else{if(cnf.xaxis.type==='datetime'){// user didn't supplied [{x,y}] or [[x,y]], but single array in data.
// Also labels/categories were supplied differently
gl.isXNumeric=true;handleDates();gl.seriesX.push(this.twoDSeriesX);}else if(cnf.xaxis.type==='numeric'){gl.isXNumeric=true;if(xlabels.length>0){this.twoDSeriesX=xlabels;gl.seriesX.push(this.twoDSeriesX);}}gl.labels.push(this.twoDSeriesX);var singleArray=ser[i].data.map(function(d){return Utils$1.parseNumber(d);});gl.series.push(singleArray);}gl.seriesZ.push(this.threeDSeries);if(ser[i].name!==undefined){gl.seriesNames.push(ser[i].name);}else{gl.seriesNames.push('series-'+parseInt(i+1,10));}// overrided default color if user inputs color with series data
if(ser[i].color!==undefined){gl.seriesColors.push(ser[i].color);}else{gl.seriesColors.push(undefined);}}return this.w;}},{key:"parseDataNonAxisCharts",value:function parseDataNonAxisCharts(ser){var gl=this.w.globals;var cnf=this.w.config;gl.series=ser.slice();gl.seriesNames=cnf.labels.slice();for(var i=0;i<gl.series.length;i++){if(gl.seriesNames[i]===undefined){gl.seriesNames.push('series-'+(i+1));}}return this.w;}/** User possibly set string categories in xaxis.categories or labels prop
       * Or didn't set xaxis labels at all - in which case we manually do it.
       * If user passed series data as [[3, 2], [4, 5]] or [{ x: 3, y: 55 }],
       * this shouldn't be called
       * @param {array} ser - the series which user passed to the config
       */},{key:"handleExternalLabelsData",value:function handleExternalLabelsData(ser){var cnf=this.w.config;var gl=this.w.globals;if(cnf.xaxis.categories.length>0){// user provided labels in xaxis.category prop
gl.labels=cnf.xaxis.categories;}else if(cnf.labels.length>0){// user provided labels in labels props
gl.labels=cnf.labels.slice();}else if(this.fallbackToCategory){// user provided labels in x prop in [{ x: 3, y: 55 }] data, and those labels are already stored in gl.labels[0], so just re-arrange the gl.labels array
gl.labels=gl.labels[0];if(gl.seriesRange.length){gl.seriesRange.map(function(srt){srt.forEach(function(sr){if(gl.labels.indexOf(sr.x)<0&&sr.x){gl.labels.push(sr.x);}});});// remove duplicate x-axis labels
gl.labels=Array.from(new Set(gl.labels.map(JSON.stringify)),JSON.parse);}if(cnf.xaxis.convertedCatToNumeric){var defaults=new Defaults(cnf);defaults.convertCatToNumericXaxis(cnf,this.ctx,gl.seriesX[0]);this._generateExternalLabels(ser);}}else{this._generateExternalLabels(ser);}}},{key:"_generateExternalLabels",value:function _generateExternalLabels(ser){var gl=this.w.globals;var cnf=this.w.config;// user didn't provided any labels, fallback to 1-2-3-4-5
var labelArr=[];if(gl.axisCharts){if(gl.series.length>0){if(this.isFormatXY()){// in case there is a combo chart (boxplot/scatter)
// and there are duplicated x values, we need to eliminate duplicates
var seriesDataFiltered=cnf.series.map(function(serie,s){return serie.data.filter(function(v,i,a){return a.findIndex(function(t){return t.x===v.x;})===i;});});var len=seriesDataFiltered.reduce(function(p,c,i,a){return a[p].length>c.length?p:i;},0);for(var i=0;i<seriesDataFiltered[len].length;i++){labelArr.push(i+1);}}else{for(var _i=0;_i<gl.series[gl.maxValsInArrayIndex].length;_i++){labelArr.push(_i+1);}}}gl.seriesX=[];// create gl.seriesX as it will be used in calculations of x positions
for(var _i2=0;_i2<ser.length;_i2++){gl.seriesX.push(labelArr);}// turn on the isXNumeric flag to allow minX and maxX to function properly
if(!this.w.globals.isBarHorizontal){gl.isXNumeric=true;}}// no series to pull labels from, put a 0-10 series
// possibly, user collapsed all series. Hence we can't work with above calc
if(labelArr.length===0){labelArr=gl.axisCharts?[]:gl.series.map(function(gls,glsi){return glsi+1;});for(var _i3=0;_i3<ser.length;_i3++){gl.seriesX.push(labelArr);}}// Finally, pass the labelArr in gl.labels which will be printed on x-axis
gl.labels=labelArr;if(cnf.xaxis.convertedCatToNumeric){gl.categoryLabels=labelArr.map(function(l){return cnf.xaxis.labels.formatter(l);});}// Turn on this global flag to indicate no labels were provided by user
gl.noLabelsProvided=true;}// Segregate user provided data into appropriate vars
},{key:"parseData",value:function parseData(ser){var w=this.w;var cnf=w.config;var gl=w.globals;this.excludeCollapsedSeriesInYAxis();// If we detected string in X prop of series, we fallback to category x-axis
this.fallbackToCategory=false;this.ctx.core.resetGlobals();this.ctx.core.isMultipleY();if(gl.axisCharts){// axisCharts includes line / area / column / scatter
this.parseDataAxisCharts(ser);this.coreUtils.getLargestSeries();}else{// non-axis charts are pie / donut
this.parseDataNonAxisCharts(ser);}// set Null values to 0 in all series when user hides/shows some series
if(cnf.chart.stacked){var series=new Series(this.ctx);gl.series=series.setNullSeriesToZeroValues(gl.series);}this.coreUtils.getSeriesTotals();if(gl.axisCharts){gl.stackedSeriesTotals=this.coreUtils.getStackedSeriesTotals();gl.stackedSeriesTotalsByGroups=this.coreUtils.getStackedSeriesTotalsByGroups();}this.coreUtils.getPercentSeries();if(!gl.dataFormatXNumeric&&(!gl.isXNumeric||cnf.xaxis.type==='numeric'&&cnf.labels.length===0&&cnf.xaxis.categories.length===0)){// x-axis labels couldn't be detected; hence try searching every option in config
this.handleExternalLabelsData(ser);}// check for multiline xaxis
var catLabels=this.coreUtils.getCategoryLabels(gl.labels);for(var l=0;l<catLabels.length;l++){if(Array.isArray(catLabels[l])){gl.isMultiLineX=true;break;}}}},{key:"excludeCollapsedSeriesInYAxis",value:function excludeCollapsedSeriesInYAxis(){var w=this.w;// fix issue #1215
// Post revision 3.46.0 there is no longer a strict one-to-one
// correspondence between series and Y axes.
// An axis can be ignored only while all series referenced by it
// are collapsed.
var yAxisIndexes=[];w.globals.seriesYAxisMap.forEach(function(yAxisArr,yi){var collapsedCount=0;yAxisArr.forEach(function(seriesIndex){if(w.globals.collapsedSeriesIndices.indexOf(seriesIndex)!==-1){collapsedCount++;}});// It's possible to have a yaxis that doesn't reference any series yet,
// eg, because there are no series' yet, so don't list it as ignored
// prematurely.
if(collapsedCount>0&&collapsedCount==yAxisArr.length){yAxisIndexes.push(yi);}});w.globals.ignoreYAxisIndexes=yAxisIndexes.map(function(x){return x;});}}]);return Data;}();var Exports=/*#__PURE__*/function(){function Exports(ctx){_classCallCheck(this,Exports);this.ctx=ctx;this.w=ctx.w;}_createClass(Exports,[{key:"scaleSvgNode",value:function scaleSvgNode(svg,scale){// get current both width and height of the svg
var svgWidth=parseFloat(svg.getAttributeNS(null,'width'));var svgHeight=parseFloat(svg.getAttributeNS(null,'height'));// set new width and height based on the scale
svg.setAttributeNS(null,'width',svgWidth*scale);svg.setAttributeNS(null,'height',svgHeight*scale);svg.setAttributeNS(null,'viewBox','0 0 '+svgWidth+' '+svgHeight);}},{key:"fixSvgStringForIe11",value:function fixSvgStringForIe11(svgData){// IE11 generates broken SVG that we have to fix by using regex
if(!Utils$1.isIE11()){// not IE11 - noop
return svgData.replace(/&nbsp;/g,'&#160;');}// replace second occurrence of "xmlns" attribute with "xmlns:xlink" with correct url + add xmlns:svgjs
var nXmlnsSeen=0;var result=svgData.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g,function(match){nXmlnsSeen++;return nXmlnsSeen===2?'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"':match;});// remove the invalid empty namespace declarations
result=result.replace(/xmlns:NS\d+=""/g,'');// remove these broken namespaces from attributes
result=result.replace(/NS\d+:(\w+:\w+=")/g,'$1');return result;}},{key:"getSvgString",value:function getSvgString(scale){if(scale==undefined){scale=1;// if no scale is specified, don't scale...
}var svgString=this.w.globals.dom.Paper.svg();// in case the scale is different than 1, the svg needs to be rescaled
if(scale!==1){// clone the svg node so it remains intact in the UI
var svgNode=this.w.globals.dom.Paper.node.cloneNode(true);// scale the image
this.scaleSvgNode(svgNode,scale);// get the string representation of the svgNode
svgString=new XMLSerializer().serializeToString(svgNode);}return this.fixSvgStringForIe11(svgString);}},{key:"cleanup",value:function cleanup(){var w=this.w;// hide some elements to avoid printing them on exported svg
var xcrosshairs=w.globals.dom.baseEl.getElementsByClassName('apexcharts-xcrosshairs');var ycrosshairs=w.globals.dom.baseEl.getElementsByClassName('apexcharts-ycrosshairs');var zoomSelectionRects=w.globals.dom.baseEl.querySelectorAll('.apexcharts-zoom-rect, .apexcharts-selection-rect');Array.prototype.forEach.call(zoomSelectionRects,function(z){z.setAttribute('width',0);});if(xcrosshairs&&xcrosshairs[0]){xcrosshairs[0].setAttribute('x',-500);xcrosshairs[0].setAttribute('x1',-500);xcrosshairs[0].setAttribute('x2',-500);}if(ycrosshairs&&ycrosshairs[0]){ycrosshairs[0].setAttribute('y',-100);ycrosshairs[0].setAttribute('y1',-100);ycrosshairs[0].setAttribute('y2',-100);}}},{key:"svgUrl",value:function svgUrl(){this.cleanup();var svgData=this.getSvgString();var svgBlob=new Blob([svgData],{type:'image/svg+xml;charset=utf-8'});return URL.createObjectURL(svgBlob);}},{key:"dataURI",value:function dataURI(options){var _this=this;return new Promise(function(resolve){var w=_this.w;var scale=options?options.scale||options.width/w.globals.svgWidth:1;_this.cleanup();var canvas=document.createElement('canvas');canvas.width=w.globals.svgWidth*scale;canvas.height=parseInt(w.globals.dom.elWrap.style.height,10)*scale;// because of resizeNonAxisCharts
var canvasBg=w.config.chart.background==='transparent'?'#fff':w.config.chart.background;var ctx=canvas.getContext('2d');ctx.fillStyle=canvasBg;ctx.fillRect(0,0,canvas.width*scale,canvas.height*scale);var svgData=_this.getSvgString(scale);if(window.canvg&&Utils$1.isIE11()){// use canvg as a polyfill to workaround ie11 considering a canvas with loaded svg 'unsafe'
// without ignoreClear we lose our background color; without ignoreDimensions some grid lines become invisible
var v=window.canvg.Canvg.fromString(ctx,svgData,{ignoreClear:true,ignoreDimensions:true});// render the svg to canvas
v.start();var blob=canvas.msToBlob();// dispose - missing this will cause a memory leak
v.stop();resolve({blob:blob});}else{var svgUrl='data:image/svg+xml,'+encodeURIComponent(svgData);var img=new Image();img.crossOrigin='anonymous';img.onload=function(){ctx.drawImage(img,0,0);if(canvas.msToBlob){// IE and Edge can't navigate to data urls, so we return the blob instead
var _blob=canvas.msToBlob();resolve({blob:_blob});}else{var imgURI=canvas.toDataURL('image/png');resolve({imgURI:imgURI});}};img.src=svgUrl;}});}},{key:"exportToSVG",value:function exportToSVG(){this.triggerDownload(this.svgUrl(),this.w.config.chart.toolbar.export.svg.filename,'.svg');}},{key:"exportToPng",value:function exportToPng(){var _this2=this;this.dataURI().then(function(_ref){var imgURI=_ref.imgURI,blob=_ref.blob;if(blob){navigator.msSaveOrOpenBlob(blob,_this2.w.globals.chartID+'.png');}else{_this2.triggerDownload(imgURI,_this2.w.config.chart.toolbar.export.png.filename,'.png');}});}},{key:"exportToCSV",value:function exportToCSV(_ref2){var _this3=this;var series=_ref2.series,fileName=_ref2.fileName,_ref2$columnDelimiter=_ref2.columnDelimiter,columnDelimiter=_ref2$columnDelimiter===void 0?',':_ref2$columnDelimiter,_ref2$lineDelimiter=_ref2.lineDelimiter,lineDelimiter=_ref2$lineDelimiter===void 0?'\n':_ref2$lineDelimiter;var w=this.w;if(!series)series=w.config.series;var columns=[];var rows=[];var result='';var universalBOM="\uFEFF";var gSeries=w.globals.series.map(function(s,i){return w.globals.collapsedSeriesIndices.indexOf(i)===-1?s:[];});var isTimeStamp=function isTimeStamp(num){return w.config.xaxis.type==='datetime'&&String(num).length>=10;};var seriesMaxDataLength=Math.max.apply(Math,_toConsumableArray(series.map(function(s){return s.data?s.data.length:0;})));var dataFormat=new Data(this.ctx);var axesUtils=new AxesUtils(this.ctx);var getCat=function getCat(i){var cat='';// pie / donut/ radial
if(!w.globals.axisCharts){cat=w.config.labels[i];}else{// xy charts
// non datetime
if(w.config.xaxis.type==='category'||w.config.xaxis.convertedCatToNumeric){if(w.globals.isBarHorizontal){var lbFormatter=w.globals.yLabelFormatters[0];var sr=new Series(_this3.ctx);var activeSeries=sr.getActiveConfigSeriesIndex();cat=lbFormatter(w.globals.labels[i],{seriesIndex:activeSeries,dataPointIndex:i,w:w});}else{cat=axesUtils.getLabel(w.globals.labels,w.globals.timescaleLabels,0,i).text;}}// datetime, but labels specified in categories or labels
if(w.config.xaxis.type==='datetime'){if(w.config.xaxis.categories.length){cat=w.config.xaxis.categories[i];}else if(w.config.labels.length){cat=w.config.labels[i];}}}if(Array.isArray(cat)){cat=cat.join(' ');}return Utils$1.isNumber(cat)?cat:cat.split(columnDelimiter).join('');};// Fix https://github.com/apexcharts/apexcharts.js/issues/3365
var getEmptyDataForCsvColumn=function getEmptyDataForCsvColumn(){return _toConsumableArray(Array(seriesMaxDataLength)).map(function(){return'';});};var handleAxisRowsColumns=function handleAxisRowsColumns(s,sI){if(columns.length&&sI===0){// It's the first series.  Go ahead and create the first row with header information.
rows.push(columns.join(columnDelimiter));}if(s.data){// Use the data we have, or generate a properly sized empty array with empty data if some data is missing.
s.data=s.data.length&&s.data||getEmptyDataForCsvColumn();for(var i=0;i<s.data.length;i++){// Reset the columns array so that we can start building columns for this row.
columns=[];var cat=getCat(i);if(!cat){if(dataFormat.isFormatXY()){cat=series[sI].data[i].x;}else if(dataFormat.isFormat2DArray()){cat=series[sI].data[i]?series[sI].data[i][0]:'';}}if(sI===0){// It's the first series.  Also handle the category.
columns.push(isTimeStamp(cat)?w.config.chart.toolbar.export.csv.dateFormatter(cat):Utils$1.isNumber(cat)?cat:cat.split(columnDelimiter).join(''));for(var ci=0;ci<w.globals.series.length;ci++){if(dataFormat.isFormatXY()){var _series$ci$data$i;columns.push((_series$ci$data$i=series[ci].data[i])===null||_series$ci$data$i===void 0?void 0:_series$ci$data$i.y);}else{columns.push(gSeries[ci][i]);}}}if(w.config.chart.type==='candlestick'||s.type&&s.type==='candlestick'){columns.pop();columns.push(w.globals.seriesCandleO[sI][i]);columns.push(w.globals.seriesCandleH[sI][i]);columns.push(w.globals.seriesCandleL[sI][i]);columns.push(w.globals.seriesCandleC[sI][i]);}if(w.config.chart.type==='boxPlot'||s.type&&s.type==='boxPlot'){columns.pop();columns.push(w.globals.seriesCandleO[sI][i]);columns.push(w.globals.seriesCandleH[sI][i]);columns.push(w.globals.seriesCandleM[sI][i]);columns.push(w.globals.seriesCandleL[sI][i]);columns.push(w.globals.seriesCandleC[sI][i]);}if(w.config.chart.type==='rangeBar'){columns.pop();columns.push(w.globals.seriesRangeStart[sI][i]);columns.push(w.globals.seriesRangeEnd[sI][i]);}if(columns.length){rows.push(columns.join(columnDelimiter));}}}};var handleUnequalXValues=function handleUnequalXValues(){var categories=new Set();var data={};series.forEach(function(s,sI){s===null||s===void 0?void 0:s.data.forEach(function(dataItem){var cat,value;if(dataFormat.isFormatXY()){cat=dataItem.x;value=dataItem.y;}else if(dataFormat.isFormat2DArray()){cat=dataItem[0];value=dataItem[1];}else{return;}if(!data[cat]){data[cat]=Array(series.length).fill('');}data[cat][sI]=value;categories.add(cat);});});if(columns.length){rows.push(columns.join(columnDelimiter));}Array.from(categories).sort().forEach(function(cat){rows.push([isTimeStamp(cat)&&w.config.xaxis.type==='datetime'?w.config.chart.toolbar.export.csv.dateFormatter(cat):Utils$1.isNumber(cat)?cat:cat.split(columnDelimiter).join(''),data[cat].join(columnDelimiter)]);});};columns.push(w.config.chart.toolbar.export.csv.headerCategory);if(w.config.chart.type==='boxPlot'){columns.push('minimum');columns.push('q1');columns.push('median');columns.push('q3');columns.push('maximum');}else if(w.config.chart.type==='candlestick'){columns.push('open');columns.push('high');columns.push('low');columns.push('close');}else if(w.config.chart.type==='rangeBar'){columns.push('minimum');columns.push('maximum');}else{series.map(function(s,sI){var sname=(s.name?s.name:"series-".concat(sI))+'';if(w.globals.axisCharts){columns.push(sname.split(columnDelimiter).join('')?sname.split(columnDelimiter).join(''):"series-".concat(sI));}});}if(!w.globals.axisCharts){columns.push(w.config.chart.toolbar.export.csv.headerValue);rows.push(columns.join(columnDelimiter));}if(!w.globals.allSeriesHasEqualX&&w.globals.axisCharts&&!w.config.xaxis.categories.length&&!w.config.labels.length){handleUnequalXValues();}else{series.map(function(s,sI){if(w.globals.axisCharts){handleAxisRowsColumns(s,sI);}else{columns=[];columns.push(w.globals.labels[sI].split(columnDelimiter).join(''));columns.push(gSeries[sI]);rows.push(columns.join(columnDelimiter));}});}result+=rows.join(lineDelimiter);this.triggerDownload('data:text/csv; charset=utf-8,'+encodeURIComponent(universalBOM+result),fileName?fileName:w.config.chart.toolbar.export.csv.filename,'.csv');}},{key:"triggerDownload",value:function triggerDownload(href,filename,ext){var downloadLink=document.createElement('a');downloadLink.href=href;downloadLink.download=(filename?filename:this.w.globals.chartID)+ext;document.body.appendChild(downloadLink);downloadLink.click();document.body.removeChild(downloadLink);}}]);return Exports;}();/**
   * ApexCharts XAxis Class for drawing X-Axis.
   *
   * @module XAxis
   **/var XAxis=/*#__PURE__*/function(){function XAxis(ctx,elgrid){_classCallCheck(this,XAxis);this.ctx=ctx;this.elgrid=elgrid;this.w=ctx.w;var w=this.w;this.axesUtils=new AxesUtils(ctx);this.xaxisLabels=w.globals.labels.slice();if(w.globals.timescaleLabels.length>0&&!w.globals.isBarHorizontal){//  timeline labels are there and chart is not rangeabr timeline
this.xaxisLabels=w.globals.timescaleLabels.slice();}if(w.config.xaxis.overwriteCategories){this.xaxisLabels=w.config.xaxis.overwriteCategories;}this.drawnLabels=[];this.drawnLabelsRects=[];if(w.config.xaxis.position==='top'){this.offY=0;}else{this.offY=w.globals.gridHeight+1;}this.offY=this.offY+w.config.xaxis.axisBorder.offsetY;this.isCategoryBarHorizontal=w.config.chart.type==='bar'&&w.config.plotOptions.bar.horizontal;this.xaxisFontSize=w.config.xaxis.labels.style.fontSize;this.xaxisFontFamily=w.config.xaxis.labels.style.fontFamily;this.xaxisForeColors=w.config.xaxis.labels.style.colors;this.xaxisBorderWidth=w.config.xaxis.axisBorder.width;if(this.isCategoryBarHorizontal){this.xaxisBorderWidth=w.config.yaxis[0].axisBorder.width.toString();}if(this.xaxisBorderWidth.indexOf('%')>-1){this.xaxisBorderWidth=w.globals.gridWidth*parseInt(this.xaxisBorderWidth,10)/100;}else{this.xaxisBorderWidth=parseInt(this.xaxisBorderWidth,10);}this.xaxisBorderHeight=w.config.xaxis.axisBorder.height;// For bars, we will only consider single y xais,
// as we are not providing multiple yaxis for bar charts
this.yaxis=w.config.yaxis[0];}_createClass(XAxis,[{key:"drawXaxis",value:function drawXaxis(){var w=this.w;var graphics=new Graphics(this.ctx);var elXaxis=graphics.group({class:'apexcharts-xaxis',transform:"translate(".concat(w.config.xaxis.offsetX,", ").concat(w.config.xaxis.offsetY,")")});var elXaxisTexts=graphics.group({class:'apexcharts-xaxis-texts-g',transform:"translate(".concat(w.globals.translateXAxisX,", ").concat(w.globals.translateXAxisY,")")});elXaxis.add(elXaxisTexts);var labels=[];for(var i=0;i<this.xaxisLabels.length;i++){labels.push(this.xaxisLabels[i]);}this.drawXAxisLabelAndGroup(true,graphics,elXaxisTexts,labels,w.globals.isXNumeric,function(i,colWidth){return colWidth;});if(w.globals.hasXaxisGroups){var labelsGroup=w.globals.groups;labels=[];for(var _i=0;_i<labelsGroup.length;_i++){labels.push(labelsGroup[_i].title);}var overwriteStyles={};if(w.config.xaxis.group.style){overwriteStyles.xaxisFontSize=w.config.xaxis.group.style.fontSize;overwriteStyles.xaxisFontFamily=w.config.xaxis.group.style.fontFamily;overwriteStyles.xaxisForeColors=w.config.xaxis.group.style.colors;overwriteStyles.fontWeight=w.config.xaxis.group.style.fontWeight;overwriteStyles.cssClass=w.config.xaxis.group.style.cssClass;}this.drawXAxisLabelAndGroup(false,graphics,elXaxisTexts,labels,false,function(i,colWidth){return labelsGroup[i].cols*colWidth;},overwriteStyles);}if(w.config.xaxis.title.text!==undefined){var elXaxisTitle=graphics.group({class:'apexcharts-xaxis-title'});var elXAxisTitleText=graphics.drawText({x:w.globals.gridWidth/2+w.config.xaxis.title.offsetX,y:this.offY+parseFloat(this.xaxisFontSize)+(w.config.xaxis.position==='bottom'?w.globals.xAxisLabelsHeight:-w.globals.xAxisLabelsHeight-10)+w.config.xaxis.title.offsetY,text:w.config.xaxis.title.text,textAnchor:'middle',fontSize:w.config.xaxis.title.style.fontSize,fontFamily:w.config.xaxis.title.style.fontFamily,fontWeight:w.config.xaxis.title.style.fontWeight,foreColor:w.config.xaxis.title.style.color,cssClass:'apexcharts-xaxis-title-text '+w.config.xaxis.title.style.cssClass});elXaxisTitle.add(elXAxisTitleText);elXaxis.add(elXaxisTitle);}if(w.config.xaxis.axisBorder.show){var offX=w.globals.barPadForNumericAxis;var elHorzLine=graphics.drawLine(w.globals.padHorizontal+w.config.xaxis.axisBorder.offsetX-offX,this.offY,this.xaxisBorderWidth+offX,this.offY,w.config.xaxis.axisBorder.color,0,this.xaxisBorderHeight);if(this.elgrid&&this.elgrid.elGridBorders&&w.config.grid.show){this.elgrid.elGridBorders.add(elHorzLine);}else{elXaxis.add(elHorzLine);}}return elXaxis;}},{key:"drawXAxisLabelAndGroup",value:function drawXAxisLabelAndGroup(isLeafGroup,graphics,elXaxisTexts,labels,isXNumeric,colWidthCb){var _this=this;var overwriteStyles=arguments.length>6&&arguments[6]!==undefined?arguments[6]:{};var drawnLabels=[];var drawnLabelsRects=[];var w=this.w;var xaxisFontSize=overwriteStyles.xaxisFontSize||this.xaxisFontSize;var xaxisFontFamily=overwriteStyles.xaxisFontFamily||this.xaxisFontFamily;var xaxisForeColors=overwriteStyles.xaxisForeColors||this.xaxisForeColors;var fontWeight=overwriteStyles.fontWeight||w.config.xaxis.labels.style.fontWeight;var cssClass=overwriteStyles.cssClass||w.config.xaxis.labels.style.cssClass;var colWidth;// initial x Position (keep adding column width in the loop)
var xPos=w.globals.padHorizontal;var labelsLen=labels.length;/**
         * labelsLen can be different (whether you are drawing x-axis labels or x-axis group labels)
         * hence, we introduce dataPoints to be consistent.
         * Also, in datetime/numeric xaxis, dataPoints can be misleading, so we resort to labelsLen for such xaxis type
         */var dataPoints=w.config.xaxis.type==='category'?w.globals.dataPoints:labelsLen;// when all series are collapsed, fixes #3381
if(dataPoints===0&&labelsLen>dataPoints)dataPoints=labelsLen;if(isXNumeric){var len=dataPoints>1?dataPoints-1:dataPoints;colWidth=w.globals.gridWidth/Math.min(len,labelsLen-1);xPos=xPos+colWidthCb(0,colWidth)/2+w.config.xaxis.labels.offsetX;}else{colWidth=w.globals.gridWidth/dataPoints;xPos=xPos+colWidthCb(0,colWidth)+w.config.xaxis.labels.offsetX;}var _loop=function _loop(i){var x=xPos-colWidthCb(i,colWidth)/2+w.config.xaxis.labels.offsetX;if(i===0&&labelsLen===1&&colWidth/2===xPos&&dataPoints===1){// single datapoint
x=w.globals.gridWidth/2;}var label=_this.axesUtils.getLabel(labels,w.globals.timescaleLabels,x,i,drawnLabels,xaxisFontSize,isLeafGroup);var offsetYCorrection=28;if(w.globals.rotateXLabels&&isLeafGroup){offsetYCorrection=22;}if(w.config.xaxis.title.text&&w.config.xaxis.position==='top'){offsetYCorrection+=parseFloat(w.config.xaxis.title.style.fontSize)+2;}if(!isLeafGroup){offsetYCorrection=offsetYCorrection+parseFloat(xaxisFontSize)+(w.globals.xAxisLabelsHeight-w.globals.xAxisGroupLabelsHeight)+(w.globals.rotateXLabels?10:0);}var isCategoryTickAmounts=typeof w.config.xaxis.tickAmount!=='undefined'&&w.config.xaxis.tickAmount!=='dataPoints'&&w.config.xaxis.type!=='datetime';if(isCategoryTickAmounts){label=_this.axesUtils.checkLabelBasedOnTickamount(i,label,labelsLen);}else{label=_this.axesUtils.checkForOverflowingLabels(i,label,labelsLen,drawnLabels,drawnLabelsRects);}var getCatForeColor=function getCatForeColor(){return isLeafGroup&&w.config.xaxis.convertedCatToNumeric?xaxisForeColors[w.globals.minX+i-1]:xaxisForeColors[i];};if(w.config.xaxis.labels.show){var elText=graphics.drawText({x:label.x,y:_this.offY+w.config.xaxis.labels.offsetY+offsetYCorrection-(w.config.xaxis.position==='top'?w.globals.xAxisHeight+w.config.xaxis.axisTicks.height-2:0),text:label.text,textAnchor:'middle',fontWeight:label.isBold?600:fontWeight,fontSize:xaxisFontSize,fontFamily:xaxisFontFamily,foreColor:Array.isArray(xaxisForeColors)?getCatForeColor():xaxisForeColors,isPlainText:false,cssClass:(isLeafGroup?'apexcharts-xaxis-label ':'apexcharts-xaxis-group-label ')+cssClass});elXaxisTexts.add(elText);elText.on('click',function(e){if(typeof w.config.chart.events.xAxisLabelClick==='function'){var opts=Object.assign({},w,{labelIndex:i});w.config.chart.events.xAxisLabelClick(e,_this.ctx,opts);}});if(isLeafGroup){var elTooltipTitle=document.createElementNS(w.globals.SVGNS,'title');elTooltipTitle.textContent=Array.isArray(label.text)?label.text.join(' '):label.text;elText.node.appendChild(elTooltipTitle);if(label.text!==''){drawnLabels.push(label.text);drawnLabelsRects.push(label);}}}if(i<labelsLen-1){xPos=xPos+colWidthCb(i+1,colWidth);}};for(var i=0;i<=labelsLen-1;i++){_loop(i);}}// this actually becomes the vertical axis (for bar charts)
},{key:"drawXaxisInversed",value:function drawXaxisInversed(realIndex){var _this2=this;var w=this.w;var graphics=new Graphics(this.ctx);var translateYAxisX=w.config.yaxis[0].opposite?w.globals.translateYAxisX[realIndex]:0;var elYaxis=graphics.group({class:'apexcharts-yaxis apexcharts-xaxis-inversed',rel:realIndex});var elYaxisTexts=graphics.group({class:'apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g',transform:'translate('+translateYAxisX+', 0)'});elYaxis.add(elYaxisTexts);var colHeight;// initial x Position (keep adding column width in the loop)
var yPos;var labels=[];if(w.config.yaxis[realIndex].show){for(var i=0;i<this.xaxisLabels.length;i++){labels.push(this.xaxisLabels[i]);}}colHeight=w.globals.gridHeight/labels.length;yPos=-(colHeight/2.2);var lbFormatter=w.globals.yLabelFormatters[0];var ylabels=w.config.yaxis[0].labels;if(ylabels.show){var _loop2=function _loop2(_i2){var label=typeof labels[_i2]==='undefined'?'':labels[_i2];label=lbFormatter(label,{seriesIndex:realIndex,dataPointIndex:_i2,w:w});var yColors=_this2.axesUtils.getYAxisForeColor(ylabels.style.colors,realIndex);var getForeColor=function getForeColor(){return Array.isArray(yColors)?yColors[_i2]:yColors;};var multiY=0;if(Array.isArray(label)){multiY=label.length/2*parseInt(ylabels.style.fontSize,10);}var offsetX=ylabels.offsetX-15;var textAnchor='end';if(_this2.yaxis.opposite){textAnchor='start';}if(w.config.yaxis[0].labels.align==='left'){offsetX=ylabels.offsetX;textAnchor='start';}else if(w.config.yaxis[0].labels.align==='center'){offsetX=ylabels.offsetX;textAnchor='middle';}else if(w.config.yaxis[0].labels.align==='right'){textAnchor='end';}var elLabel=graphics.drawText({x:offsetX,y:yPos+colHeight+ylabels.offsetY-multiY,text:label,textAnchor:textAnchor,foreColor:getForeColor(),fontSize:ylabels.style.fontSize,fontFamily:ylabels.style.fontFamily,fontWeight:ylabels.style.fontWeight,isPlainText:false,cssClass:'apexcharts-yaxis-label '+ylabels.style.cssClass,maxWidth:ylabels.maxWidth});elYaxisTexts.add(elLabel);elLabel.on('click',function(e){if(typeof w.config.chart.events.xAxisLabelClick==='function'){var opts=Object.assign({},w,{labelIndex:_i2});w.config.chart.events.xAxisLabelClick(e,_this2.ctx,opts);}});var elTooltipTitle=document.createElementNS(w.globals.SVGNS,'title');elTooltipTitle.textContent=Array.isArray(label)?label.join(' '):label;elLabel.node.appendChild(elTooltipTitle);if(w.config.yaxis[realIndex].labels.rotate!==0){var labelRotatingCenter=graphics.rotateAroundCenter(elLabel.node);elLabel.node.setAttribute('transform',"rotate(".concat(w.config.yaxis[realIndex].labels.rotate," 0 ").concat(labelRotatingCenter.y,")"));}yPos=yPos+colHeight;};for(var _i2=0;_i2<=labels.length-1;_i2++){_loop2(_i2);}}if(w.config.yaxis[0].title.text!==undefined){var elXaxisTitle=graphics.group({class:'apexcharts-yaxis-title apexcharts-xaxis-title-inversed',transform:'translate('+translateYAxisX+', 0)'});var elXAxisTitleText=graphics.drawText({x:w.config.yaxis[0].title.offsetX,y:w.globals.gridHeight/2+w.config.yaxis[0].title.offsetY,text:w.config.yaxis[0].title.text,textAnchor:'middle',foreColor:w.config.yaxis[0].title.style.color,fontSize:w.config.yaxis[0].title.style.fontSize,fontWeight:w.config.yaxis[0].title.style.fontWeight,fontFamily:w.config.yaxis[0].title.style.fontFamily,cssClass:'apexcharts-yaxis-title-text '+w.config.yaxis[0].title.style.cssClass});elXaxisTitle.add(elXAxisTitleText);elYaxis.add(elXaxisTitle);}var offX=0;if(this.isCategoryBarHorizontal&&w.config.yaxis[0].opposite){offX=w.globals.gridWidth;}var axisBorder=w.config.xaxis.axisBorder;if(axisBorder.show){var elVerticalLine=graphics.drawLine(w.globals.padHorizontal+axisBorder.offsetX+offX,1+axisBorder.offsetY,w.globals.padHorizontal+axisBorder.offsetX+offX,w.globals.gridHeight+axisBorder.offsetY,axisBorder.color,0);if(this.elgrid&&this.elgrid.elGridBorders&&w.config.grid.show){this.elgrid.elGridBorders.add(elVerticalLine);}else{elYaxis.add(elVerticalLine);}}if(w.config.yaxis[0].axisTicks.show){this.axesUtils.drawYAxisTicks(offX,labels.length,w.config.yaxis[0].axisBorder,w.config.yaxis[0].axisTicks,0,colHeight,elYaxis);}return elYaxis;}},{key:"drawXaxisTicks",value:function drawXaxisTicks(x1,y2,appendToElement){var w=this.w;var x2=x1;if(x1<0||x1-2>w.globals.gridWidth)return;var y1=this.offY+w.config.xaxis.axisTicks.offsetY;y2=y2+y1+w.config.xaxis.axisTicks.height;if(w.config.xaxis.position==='top'){y2=y1-w.config.xaxis.axisTicks.height;}if(w.config.xaxis.axisTicks.show){var graphics=new Graphics(this.ctx);var line=graphics.drawLine(x1+w.config.xaxis.axisTicks.offsetX,y1+w.config.xaxis.offsetY,x2+w.config.xaxis.axisTicks.offsetX,y2+w.config.xaxis.offsetY,w.config.xaxis.axisTicks.color);// we are not returning anything, but appending directly to the element passed in param
appendToElement.add(line);line.node.classList.add('apexcharts-xaxis-tick');}}},{key:"getXAxisTicksPositions",value:function getXAxisTicksPositions(){var w=this.w;var xAxisTicksPositions=[];var xCount=this.xaxisLabels.length;var x1=w.globals.padHorizontal;if(w.globals.timescaleLabels.length>0){for(var i=0;i<xCount;i++){x1=this.xaxisLabels[i].position;xAxisTicksPositions.push(x1);}}else{var xCountForCategoryCharts=xCount;for(var _i3=0;_i3<xCountForCategoryCharts;_i3++){var x1Count=xCountForCategoryCharts;if(w.globals.isXNumeric&&w.config.chart.type!=='bar'){x1Count-=1;}x1=x1+w.globals.gridWidth/x1Count;xAxisTicksPositions.push(x1);}}return xAxisTicksPositions;}// to rotate x-axis labels or to put ... for longer text in xaxis
},{key:"xAxisLabelCorrections",value:function xAxisLabelCorrections(){var w=this.w;var graphics=new Graphics(this.ctx);var xAxis=w.globals.dom.baseEl.querySelector('.apexcharts-xaxis-texts-g');var xAxisTexts=w.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)');var yAxisTextsInversed=w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxis-inversed text');var xAxisTextsInversed=w.globals.dom.baseEl.querySelectorAll('.apexcharts-xaxis-inversed-texts-g text tspan');if(w.globals.rotateXLabels||w.config.xaxis.labels.rotateAlways){for(var xat=0;xat<xAxisTexts.length;xat++){var textRotatingCenter=graphics.rotateAroundCenter(xAxisTexts[xat]);textRotatingCenter.y=textRotatingCenter.y-1;// + tickWidth/4;
textRotatingCenter.x=textRotatingCenter.x+1;xAxisTexts[xat].setAttribute('transform',"rotate(".concat(w.config.xaxis.labels.rotate," ").concat(textRotatingCenter.x," ").concat(textRotatingCenter.y,")"));xAxisTexts[xat].setAttribute('text-anchor',"end");var offsetHeight=10;xAxis.setAttribute('transform',"translate(0, ".concat(-offsetHeight,")"));var tSpan=xAxisTexts[xat].childNodes;if(w.config.xaxis.labels.trim){Array.prototype.forEach.call(tSpan,function(ts){graphics.placeTextWithEllipsis(ts,ts.textContent,w.globals.xAxisLabelsHeight-(w.config.legend.position==='bottom'?20:10));});}}}else{(function(){var width=w.globals.gridWidth/(w.globals.labels.length+1);for(var _xat=0;_xat<xAxisTexts.length;_xat++){var _tSpan=xAxisTexts[_xat].childNodes;if(w.config.xaxis.labels.trim&&w.config.xaxis.type!=='datetime'){Array.prototype.forEach.call(_tSpan,function(ts){graphics.placeTextWithEllipsis(ts,ts.textContent,width);});}}})();}if(yAxisTextsInversed.length>0){// truncate rotated y axis in bar chart (x axis)
var firstLabelPosX=yAxisTextsInversed[yAxisTextsInversed.length-1].getBBox();var lastLabelPosX=yAxisTextsInversed[0].getBBox();if(firstLabelPosX.x<-20){yAxisTextsInversed[yAxisTextsInversed.length-1].parentNode.removeChild(yAxisTextsInversed[yAxisTextsInversed.length-1]);}if(lastLabelPosX.x+lastLabelPosX.width>w.globals.gridWidth&&!w.globals.isBarHorizontal){yAxisTextsInversed[0].parentNode.removeChild(yAxisTextsInversed[0]);}// truncate rotated x axis in bar chart (y axis)
for(var _xat2=0;_xat2<xAxisTextsInversed.length;_xat2++){graphics.placeTextWithEllipsis(xAxisTextsInversed[_xat2],xAxisTextsInversed[_xat2].textContent,w.config.yaxis[0].labels.maxWidth-(w.config.yaxis[0].title.text?parseFloat(w.config.yaxis[0].title.style.fontSize)*2:0)-15);}}}// renderXAxisBands() {
//   let w = this.w;
//   let plotBand = document.createElementNS(w.globals.SVGNS, 'rect')
//   w.globals.dom.elGraphical.add(plotBand)
// }
}]);return XAxis;}();/**
   * ApexCharts Grid Class for drawing Cartesian Grid.
   *
   * @module Grid
   **/var Grid=/*#__PURE__*/function(){function Grid(ctx){_classCallCheck(this,Grid);this.ctx=ctx;this.w=ctx.w;var w=this.w;this.xaxisLabels=w.globals.labels.slice();this.axesUtils=new AxesUtils(ctx);this.isRangeBar=w.globals.seriesRange.length&&w.globals.isBarHorizontal;if(w.globals.timescaleLabels.length>0){//  timescaleLabels labels are there
this.xaxisLabels=w.globals.timescaleLabels.slice();}}// when using sparklines or when showing no grid, we need to have a grid area which is reused at many places for other calculations as well
_createClass(Grid,[{key:"drawGridArea",value:function drawGridArea(){var elGrid=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var w=this.w;var graphics=new Graphics(this.ctx);if(elGrid===null){elGrid=graphics.group({class:'apexcharts-grid'});}var elVerticalLine=graphics.drawLine(w.globals.padHorizontal,1,w.globals.padHorizontal,w.globals.gridHeight,'transparent');var elHorzLine=graphics.drawLine(w.globals.padHorizontal,w.globals.gridHeight,w.globals.gridWidth,w.globals.gridHeight,'transparent');elGrid.add(elHorzLine);elGrid.add(elVerticalLine);return elGrid;}},{key:"drawGrid",value:function drawGrid(){var gl=this.w.globals;var elgrid=null;if(gl.axisCharts){// grid is drawn after xaxis and yaxis are drawn
elgrid=this.renderGrid();this.drawGridArea(elgrid.el);}return elgrid;}// This mask will clip off overflowing graphics from the drawable area
},{key:"createGridMask",value:function createGridMask(){var w=this.w;var gl=w.globals;var graphics=new Graphics(this.ctx);var strokeSize=Array.isArray(w.config.stroke.width)?0:w.config.stroke.width;if(Array.isArray(w.config.stroke.width)){var strokeMaxSize=0;w.config.stroke.width.forEach(function(m){strokeMaxSize=Math.max(strokeMaxSize,m);});strokeSize=strokeMaxSize;}gl.dom.elGridRectMask=document.createElementNS(gl.SVGNS,'clipPath');gl.dom.elGridRectMask.setAttribute('id',"gridRectMask".concat(gl.cuid));gl.dom.elGridRectMarkerMask=document.createElementNS(gl.SVGNS,'clipPath');gl.dom.elGridRectMarkerMask.setAttribute('id',"gridRectMarkerMask".concat(gl.cuid));gl.dom.elForecastMask=document.createElementNS(gl.SVGNS,'clipPath');gl.dom.elForecastMask.setAttribute('id',"forecastMask".concat(gl.cuid));gl.dom.elNonForecastMask=document.createElementNS(gl.SVGNS,'clipPath');gl.dom.elNonForecastMask.setAttribute('id',"nonForecastMask".concat(gl.cuid));// let barHalfWidth = 0
var type=w.config.chart.type;var hasBar=type==='bar'||type==='rangeBar'||type==='candlestick'||type==='boxPlot'||w.globals.comboBarCount>0;var barWidthLeft=0;var barWidthRight=0;if(hasBar&&w.globals.isXNumeric&&!w.globals.isBarHorizontal){barWidthLeft=w.config.grid.padding.left;barWidthRight=w.config.grid.padding.right;if(gl.barPadForNumericAxis>barWidthLeft){barWidthLeft=gl.barPadForNumericAxis;barWidthRight=gl.barPadForNumericAxis;}}gl.dom.elGridRect=graphics.drawRect(-strokeSize/2-barWidthLeft-2,-strokeSize/2-2,gl.gridWidth+strokeSize+barWidthRight+barWidthLeft+4,gl.gridHeight+strokeSize+4,0,'#fff');var markerSize=w.globals.markers.largestSize+1;gl.dom.elGridRectMarker=graphics.drawRect(-markerSize*2,-markerSize*2,gl.gridWidth+markerSize*4,gl.gridHeight+markerSize*4,0,'#fff');gl.dom.elGridRectMask.appendChild(gl.dom.elGridRect.node);gl.dom.elGridRectMarkerMask.appendChild(gl.dom.elGridRectMarker.node);var defs=gl.dom.baseEl.querySelector('defs');defs.appendChild(gl.dom.elGridRectMask);defs.appendChild(gl.dom.elForecastMask);defs.appendChild(gl.dom.elNonForecastMask);defs.appendChild(gl.dom.elGridRectMarkerMask);}},{key:"_drawGridLines",value:function _drawGridLines(_ref){var i=_ref.i,x1=_ref.x1,y1=_ref.y1,x2=_ref.x2,y2=_ref.y2,xCount=_ref.xCount,parent=_ref.parent;var w=this.w;var shouldDraw=function shouldDraw(){if(i===0&&w.globals.skipFirstTimelinelabel){return false;}if(i===xCount-1&&w.globals.skipLastTimelinelabel&&!w.config.xaxis.labels.formatter){return false;}if(w.config.chart.type==='radar'){return false;}return true;};if(shouldDraw()){if(w.config.grid.xaxis.lines.show){this._drawGridLine({i:i,x1:x1,y1:y1,x2:x2,y2:y2,xCount:xCount,parent:parent});}var y_2=0;if(w.globals.hasXaxisGroups&&w.config.xaxis.tickPlacement==='between'){var groups=w.globals.groups;if(groups){var gacc=0;for(var gi=0;gacc<i&&gi<groups.length;gi++){gacc+=groups[gi].cols;}if(gacc===i){y_2=w.globals.xAxisLabelsHeight*0.6;}}}var xAxis=new XAxis(this.ctx);xAxis.drawXaxisTicks(x1,y_2,w.globals.dom.elGraphical);}}},{key:"_drawGridLine",value:function _drawGridLine(_ref2){var i=_ref2.i,x1=_ref2.x1,y1=_ref2.y1,x2=_ref2.x2,y2=_ref2.y2,xCount=_ref2.xCount,parent=_ref2.parent;var w=this.w;var excludeBorders=false;var isHorzLine=parent.node.classList.contains('apexcharts-gridlines-horizontal');var strokeDashArray=w.config.grid.strokeDashArray;var offX=w.globals.barPadForNumericAxis;if(y1===0&&y2===0||x1===0&&x2===0){excludeBorders=true;}if(y1===w.globals.gridHeight&&y2===w.globals.gridHeight){excludeBorders=true;}if(w.globals.isBarHorizontal&&(i===0||i===xCount-1)){excludeBorders=true;}var graphics=new Graphics(this);var line=graphics.drawLine(x1-(isHorzLine?offX:0),y1,x2+(isHorzLine?offX:0),y2,w.config.grid.borderColor,strokeDashArray);line.node.classList.add('apexcharts-gridline');if(excludeBorders&&w.config.grid.show){this.elGridBorders.add(line);}else{parent.add(line);}}},{key:"_drawGridBandRect",value:function _drawGridBandRect(_ref3){var c=_ref3.c,x1=_ref3.x1,y1=_ref3.y1,x2=_ref3.x2,y2=_ref3.y2,type=_ref3.type;var w=this.w;var graphics=new Graphics(this.ctx);var offX=w.globals.barPadForNumericAxis;if(type==='column'&&w.config.xaxis.type==='datetime')return;var color=w.config.grid[type].colors[c];var rect=graphics.drawRect(x1-(type==='row'?offX:0),y1,x2+(type==='row'?offX*2:0),y2,0,color,w.config.grid[type].opacity);this.elg.add(rect);rect.attr('clip-path',"url(#gridRectMask".concat(w.globals.cuid,")"));rect.node.classList.add("apexcharts-grid-".concat(type));}},{key:"_drawXYLines",value:function _drawXYLines(_ref4){var _this=this;var xCount=_ref4.xCount,tickAmount=_ref4.tickAmount;var w=this.w;var datetimeLines=function datetimeLines(_ref5){var xC=_ref5.xC,x1=_ref5.x1,y1=_ref5.y1,x2=_ref5.x2,y2=_ref5.y2;for(var i=0;i<xC;i++){x1=_this.xaxisLabels[i].position;x2=_this.xaxisLabels[i].position;_this._drawGridLines({i:i,x1:x1,y1:y1,x2:x2,y2:y2,xCount:xCount,parent:_this.elgridLinesV});}};var categoryLines=function categoryLines(_ref6){var xC=_ref6.xC,x1=_ref6.x1,y1=_ref6.y1,x2=_ref6.x2,y2=_ref6.y2;for(var i=0;i<xC+(w.globals.isXNumeric?0:1);i++){if(i===0&&xC===1&&w.globals.dataPoints===1){// single datapoint
x1=w.globals.gridWidth/2;x2=x1;}_this._drawGridLines({i:i,x1:x1,y1:y1,x2:x2,y2:y2,xCount:xCount,parent:_this.elgridLinesV});x1=x1+w.globals.gridWidth/(w.globals.isXNumeric?xC-1:xC);x2=x1;}};// draw vertical lines
if(w.config.grid.xaxis.lines.show||w.config.xaxis.axisTicks.show){var x1=w.globals.padHorizontal;var y1=0;var x2;var y2=w.globals.gridHeight;if(w.globals.timescaleLabels.length){datetimeLines({xC:xCount,x1:x1,y1:y1,x2:x2,y2:y2});}else{if(w.globals.isXNumeric){xCount=w.globals.xAxisScale.result.length;}categoryLines({xC:xCount,x1:x1,y1:y1,x2:x2,y2:y2});}}// draw horizontal lines
if(w.config.grid.yaxis.lines.show){var _x=0;var _y=0;var _y2=0;var _x2=w.globals.gridWidth;var tA=tickAmount+1;if(this.isRangeBar){tA=w.globals.labels.length;}for(var i=0;i<tA+(this.isRangeBar?1:0);i++){this._drawGridLine({i:i,xCount:tA+(this.isRangeBar?1:0),x1:_x,y1:_y,x2:_x2,y2:_y2,parent:this.elgridLinesH});_y=_y+w.globals.gridHeight/(this.isRangeBar?tA:tickAmount);_y2=_y;}}}},{key:"_drawInvertedXYLines",value:function _drawInvertedXYLines(_ref7){var xCount=_ref7.xCount;var w=this.w;// draw vertical lines
if(w.config.grid.xaxis.lines.show||w.config.xaxis.axisTicks.show){var x1=w.globals.padHorizontal;var y1=0;var x2;var y2=w.globals.gridHeight;for(var i=0;i<xCount+1;i++){if(w.config.grid.xaxis.lines.show){this._drawGridLine({i:i,xCount:xCount+1,x1:x1,y1:y1,x2:x2,y2:y2,parent:this.elgridLinesV});}var xAxis=new XAxis(this.ctx);xAxis.drawXaxisTicks(x1,0,w.globals.dom.elGraphical);x1=x1+w.globals.gridWidth/xCount;x2=x1;}}// draw horizontal lines
if(w.config.grid.yaxis.lines.show){var _x3=0;var _y3=0;var _y4=0;var _x4=w.globals.gridWidth;for(var _i=0;_i<w.globals.dataPoints+1;_i++){this._drawGridLine({i:_i,xCount:w.globals.dataPoints+1,x1:_x3,y1:_y3,x2:_x4,y2:_y4,parent:this.elgridLinesH});_y3=_y3+w.globals.gridHeight/w.globals.dataPoints;_y4=_y3;}}}// actual grid rendering
},{key:"renderGrid",value:function renderGrid(){var w=this.w;var graphics=new Graphics(this.ctx);this.elg=graphics.group({class:'apexcharts-grid'});this.elgridLinesH=graphics.group({class:'apexcharts-gridlines-horizontal'});this.elgridLinesV=graphics.group({class:'apexcharts-gridlines-vertical'});this.elGridBorders=graphics.group({class:'apexcharts-grid-borders'});this.elg.add(this.elgridLinesH);this.elg.add(this.elgridLinesV);if(!w.config.grid.show){this.elgridLinesV.hide();this.elgridLinesH.hide();this.elGridBorders.hide();}// Draw the grid using ticks from the first unhidden Yaxis,
// or yaxis[0] is all hidden.
var gridAxisIndex=0;while(gridAxisIndex<w.globals.seriesYAxisMap.length&&w.globals.ignoreYAxisIndexes.indexOf(gridAxisIndex)!==-1){gridAxisIndex++;}if(gridAxisIndex===w.globals.seriesYAxisMap.length){gridAxisIndex=0;}var yTickAmount=w.globals.yAxisScale[gridAxisIndex].result.length-1;var xCount;if(!w.globals.isBarHorizontal||this.isRangeBar){xCount=this.xaxisLabels.length;if(this.isRangeBar){var _w$globals$yAxisScale,_w$globals$yAxisScale2,_w$globals$yAxisScale3;xCount--;yTickAmount=w.globals.labels.length;if(w.config.xaxis.tickAmount&&w.config.xaxis.labels.formatter){xCount=w.config.xaxis.tickAmount;}if(((_w$globals$yAxisScale=w.globals.yAxisScale)===null||_w$globals$yAxisScale===void 0?void 0:(_w$globals$yAxisScale2=_w$globals$yAxisScale[gridAxisIndex])===null||_w$globals$yAxisScale2===void 0?void 0:(_w$globals$yAxisScale3=_w$globals$yAxisScale2.result)===null||_w$globals$yAxisScale3===void 0?void 0:_w$globals$yAxisScale3.length)>0&&w.config.xaxis.type!=='datetime'){xCount=w.globals.yAxisScale[gridAxisIndex].result.length-1;}}this._drawXYLines({xCount:xCount,tickAmount:yTickAmount});}else{xCount=yTickAmount;// for horizontal bar chart, get the xaxis tickamount
yTickAmount=w.globals.xTickAmount;this._drawInvertedXYLines({xCount:xCount,tickAmount:yTickAmount});}this.drawGridBands(xCount,yTickAmount);return{el:this.elg,elGridBorders:this.elGridBorders,xAxisTickWidth:w.globals.gridWidth/xCount};}},{key:"drawGridBands",value:function drawGridBands(xCount,tickAmount){var w=this.w;// rows background bands
if(w.config.grid.row.colors!==undefined&&w.config.grid.row.colors.length>0){var x1=0;var y1=0;var y2=w.globals.gridHeight/tickAmount;var x2=w.globals.gridWidth;for(var i=0,c=0;i<tickAmount;i++,c++){if(c>=w.config.grid.row.colors.length){c=0;}this._drawGridBandRect({c:c,x1:x1,y1:y1,x2:x2,y2:y2,type:'row'});y1=y1+w.globals.gridHeight/tickAmount;}}// columns background bands
if(w.config.grid.column.colors!==undefined&&w.config.grid.column.colors.length>0){var xc=!w.globals.isBarHorizontal&&w.config.xaxis.tickPlacement==='on'&&(w.config.xaxis.type==='category'||w.config.xaxis.convertedCatToNumeric)?xCount-1:xCount;var _x5=w.globals.padHorizontal;var _y5=0;var _x6=w.globals.padHorizontal+w.globals.gridWidth/xc;var _y6=w.globals.gridHeight;for(var _i2=0,_c=0;_i2<xCount;_i2++,_c++){if(_c>=w.config.grid.column.colors.length){_c=0;}this._drawGridBandRect({c:_c,x1:_x5,y1:_y5,x2:_x6,y2:_y6,type:'column'});_x5=_x5+w.globals.gridWidth/xc;}}}}]);return Grid;}();var Scales=/*#__PURE__*/function(){function Scales(ctx){_classCallCheck(this,Scales);this.ctx=ctx;this.w=ctx.w;}// http://stackoverflow.com/questions/326679/choosing-an-attractive-linear-scale-for-a-graphs-y-axis
// This routine creates the Y axis values for a graph.
_createClass(Scales,[{key:"niceScale",value:function niceScale(yMin,yMax){var index=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;// Calculate Min amd Max graphical labels and graph
// increments.
//
// Output will be an array of the Y axis values that
// encompass the Y values.
var jsPrecision=1e-11;// JS precision errors
var w=this.w;var gl=w.globals;var axisCnf;var maxTicks;var gotMin;var gotMax;if(gl.isBarHorizontal){axisCnf=w.config.xaxis;// The most ticks we can fit into the svg chart dimensions
maxTicks=Math.max((gl.svgWidth-100)/25,2);// Guestimate
}else{axisCnf=w.config.yaxis[index];maxTicks=Math.max((gl.svgHeight-100)/15,2);}gotMin=axisCnf.min!==undefined&&axisCnf.min!==null;gotMax=axisCnf.max!==undefined&&axisCnf.min!==null;var gotStepSize=axisCnf.stepSize!==undefined&&axisCnf.stepSize!==null;var gotTickAmount=axisCnf.tickAmount!==undefined&&axisCnf.tickAmount!==null;var ticks=gotTickAmount?axisCnf.tickAmount:!axisCnf.forceNiceScale?10:gl.niceScaleDefaultTicks[Math.min(Math.round(maxTicks/2),gl.niceScaleDefaultTicks.length-1)];// In case we have a multi axis chart:
// Ensure subsequent series start with the same tickAmount as series[0],
// because the tick lines are drawn based on series[0]. This does not
// override user defined options for any series.
if(gl.isMultipleYAxis&&!gotTickAmount&&gl.multiAxisTickAmount>0){ticks=gl.multiAxisTickAmount;gotTickAmount=true;}if(ticks==='dataPoints'){ticks=gl.dataPoints-1;}else{// Ensure ticks is an integer
ticks=Math.abs(Math.round(ticks));}if(yMin===Number.MIN_VALUE&&yMax===0||!Utils$1.isNumber(yMin)&&!Utils$1.isNumber(yMax)||yMin===Number.MIN_VALUE&&yMax===-Number.MAX_VALUE){// when all values are 0
yMin=0;yMax=ticks;gl.allSeriesCollapsed=false;}if(yMin>yMax){// if somehow due to some wrong config, user sent max less than min,
// adjust the min/max again
console.warn('axis.min cannot be greater than axis.max: swapping min and max');var temp=yMax;yMax=yMin;yMin=temp;}else if(yMin===yMax){// If yMin and yMax are identical, then
// adjust the yMin and yMax values to actually
// make a graph. Also avoids division by zero errors.
yMin=yMin===0?0:yMin-1;// choose an integer in case yValueDecimals=0
yMax=yMax===0?2:yMax+1;// choose an integer in case yValueDecimals=0
}var result=[];if(ticks<1){ticks=1;}var tiks=ticks;// Determine Range
var range=Math.abs(yMax-yMin);if(axisCnf.forceNiceScale){// Snap min or max to zero if close
var proximityRatio=0.15;if(!gotMin&&yMin>0&&yMin/range<proximityRatio){yMin=0;gotMin=true;}if(!gotMax&&yMax<0&&-yMax/range<proximityRatio){yMax=0;gotMax=true;}range=Math.abs(yMax-yMin);}// Calculate a pretty step value based on ticks
// Initial stepSize
var stepSize=range/tiks;var niceStep=stepSize;var mag=Math.floor(Math.log10(niceStep));var magPow=Math.pow(10,mag);// ceil() is used below in conjunction with the values populating
// niceScaleAllowedMagMsd[][] to ensure that (niceStep * tiks)
// produces a range that doesn't clip data points after stretching
// the raw range out a little to match the prospective new range.
var magMsd=Math.ceil(niceStep/magPow);// See globals.js for info on what niceScaleAllowedMagMsd does
magMsd=gl.niceScaleAllowedMagMsd[gl.yValueDecimal===0?0:1][magMsd];niceStep=magMsd*magPow;// Initial stepSize
stepSize=niceStep;// Get step value
if(gl.isBarHorizontal&&axisCnf.stepSize&&axisCnf.type!=='datetime'){stepSize=axisCnf.stepSize;gotStepSize=true;}else if(gotStepSize){stepSize=axisCnf.stepSize;}if(gotStepSize){if(axisCnf.forceNiceScale){// Check that given stepSize is sane with respect to the range.
//
// The user can, by setting forceNiceScale = true,
// define a stepSize that will be scaled to a useful value before
// it's checked for consistency.
//
// If, for example, the range = 4 and the user defined stepSize = 8
// (or 8000 or 0.0008, etc), then stepSize is inapplicable as
// it is. Reducing it to 0.8 will fit with 5 ticks.
//
var stepMag=Math.floor(Math.log10(stepSize));stepSize*=Math.pow(10,mag-stepMag);}}// Start applying some rules
if(gotMin&&gotMax){var crudeStep=range/tiks;// min and max (range) cannot be changed
if(gotTickAmount){if(gotStepSize){if(Utils$1.mod(range,stepSize)!=0){// stepSize conflicts with range
var gcdStep=Utils$1.getGCD(stepSize,crudeStep);// gcdStep is a multiple of range because crudeStep is a multiple.
// gcdStep is also a multiple of stepSize, so it partially honoured
// All three could be equal, which would be very nice
// if the computed stepSize generates too many ticks they will be
// reduced later, unless the number is prime, in which case,
// the chart will display all of them or just one (plus the X axis)
// depending on svg dimensions. Setting forceNiceScale: true will force
// the display of at least the default number of ticks.
if(crudeStep/gcdStep<10){stepSize=gcdStep;}else{// stepSize conflicts and no reasonable adjustment, but must
// honour tickAmount
stepSize=crudeStep;}}else{// stepSize fits
if(Utils$1.mod(stepSize,crudeStep)==0){// crudeStep is a multiple of stepSize, or vice versa
// but we know that crudeStep will generate tickAmount ticks
stepSize=crudeStep;}else{// stepSize conflicts with tickAmount
// if the user is setting up a multi-axis chart and wants
// synced axis ticks then they should not define stepSize
// or ensure there is no conflict between any of their options
// on any axis.
crudeStep=stepSize;// De-prioritizing ticks from now on
gotTickAmount=false;}}}else{// no user stepSize, honour tickAmount
stepSize=crudeStep;}}else{// default ticks in use, tiks can change
if(gotStepSize){if(Utils$1.mod(range,stepSize)==0){// user stepSize fits
crudeStep=stepSize;}else{stepSize=crudeStep;}}else{// no user stepSize
if(Utils$1.mod(range,stepSize)==0){// generated nice stepSize fits
crudeStep=stepSize;}else{tiks=Math.ceil(range/stepSize);crudeStep=range/tiks;var _gcdStep=Utils$1.getGCD(range,stepSize);if(range/_gcdStep<maxTicks){crudeStep=_gcdStep;}stepSize=crudeStep;}}}tiks=Math.round(range/stepSize);}else{// Snap range to ticks
if(!gotMin&&!gotMax){if(gotTickAmount){// Allow a half-stepSize shift if series doesn't cross the X axis
// to ensure graph doesn't clip. Not if it does cross, in order
// to keep the 0 aligned with a grid line in multi axis charts.
var shift=stepSize/(yMax-yMin>yMax?1:2);var tMin=shift*Math.floor(yMin/shift);if(Math.abs(tMin-yMin)<=shift/2){yMin=tMin;yMax=yMin+stepSize*tiks;}else{yMax=shift*Math.ceil(yMax/shift);yMin=yMax-stepSize*tiks;}}else{yMin=stepSize*Math.floor(yMin/stepSize);yMax=stepSize*Math.ceil(yMax/stepSize);}}else if(gotMax){if(gotTickAmount){yMin=yMax-stepSize*tiks;}else{var yMinPrev=yMin;yMin=stepSize*Math.floor(yMin/stepSize);if(Math.abs(yMax-yMin)/Utils$1.getGCD(range,stepSize)>maxTicks){// Use default ticks to compute yMin then shrinkwrap
yMin=yMax-stepSize*ticks;yMin+=stepSize*Math.floor((yMinPrev-yMin)/stepSize);}}}else if(gotMin){if(gotTickAmount){yMax=yMin+stepSize*tiks;}else{yMax=stepSize*Math.ceil(yMax/stepSize);}}range=Math.abs(yMax-yMin);// Final check and possible adjustment of stepSize to prevent
// overriding the user's min or max choice.
stepSize=Utils$1.getGCD(range,stepSize);tiks=Math.round(range/stepSize);}// Shrinkwrap ticks to the range
if(!gotTickAmount&&!(gotMin||gotMax)){tiks=Math.ceil((range-jsPrecision)/(stepSize+jsPrecision));// No user tickAmount, or min or max, we are free to adjust to avoid a
// prime number. This helps when reducing ticks for small svg dimensions.
if(tiks>16&&Utils$1.getPrimeFactors(tiks).length<2){tiks++;}}// Prune tiks down to range if series is all integers. Since tiks > range,
// range is very low (< 10 or so). Skip this step if tickAmount is true
// because, either the user set it, or the chart is multiscale and this
// axis is not determining the number of grid lines.
if(!gotTickAmount&&axisCnf.forceNiceScale&&gl.yValueDecimal===0&&tiks>range){tiks=range;stepSize=Math.round(range/tiks);}// Record final tiks for use by other series that call niceScale().
// Note: some don't, like logarithmicScale(), etc.
if(gl.isMultipleYAxis&&gl.multiAxisTickAmount==0){gl.multiAxisTickAmount=tiks;}if(tiks>maxTicks&&(!(gotTickAmount||gotStepSize)||axisCnf.forceNiceScale)){// Reduce the number of ticks nicely if chart svg dimensions shrink too far.
// The reduced tick set should always be a subset of the full set.
//
// This following products of prime factors method works as follows:
// We compute the prime factors of the full tick count (tiks), then all the
// possible products of those factors in order from smallest to biggest,
// until we find a product P such that: tiks/P < maxTicks.
//
// Example:
// Computing products of the prime factors of 30.
//
//   tiks | pf  |  1     2     3      4      5      6  <-- compute order
//   --------------------------------------------------
//     30 |  5  |              5             5      5  <-- Multiply all
//        |  3  |        3            3      3      3  <-- primes in each
//        |  2  |  2                  2             2  <-- column = P
//   --------------------------------------------------
//                15    10     6      5      2      1  <-- tiks/P
//
//   tiks = 30 has prime factors [2, 3, 5]
//   The loop below computes the products [2,3,5,6,15,30].
//   The last product of P = 2*3*5 is skipped since 30/P = 1.
//   This yields tiks/P = [15,10,6,5,2,1], checked in order until
//   tiks/P < maxTicks.
//
//   Pros:
//      1) The ticks in the reduced set are always members of the
//         full set of ticks.
//   Cons:
//      1) None: if tiks is prime, we get all or one, nothing between, so
//      the worst case is to display all, which is the status quo. Really
//      only a problem visually for larger tick numbers, say, > 7.
//
var pf=Utils$1.getPrimeFactors(tiks);var last=pf.length-1;var tt=tiks;reduceLoop:for(var xFactors=0;xFactors<last;xFactors++){for(var lowest=0;lowest<=last-xFactors;lowest++){var stop=Math.min(lowest+xFactors,last);var t=tt;var div=1;for(var next=lowest;next<=stop;next++){div*=pf[next];}t/=div;if(t<maxTicks){tt=t;break reduceLoop;}}}if(tt===tiks){// Could not reduce ticks at all, go all in and display just the
// X axis and one tick.
stepSize=range;}else{stepSize=range/tt;}}// build Y label array.
var val=yMin-stepSize;// Ensure we don't under/over shoot due to JS precision errors.
// This also fixes (amongst others):
// https://github.com/apexcharts/apexcharts.js/issues/430
var err=stepSize*jsPrecision;do{val+=stepSize;result.push(Utils$1.stripNumber(val,7));}while(yMax-val>err);return{result:result,niceMin:result[0],niceMax:result[result.length-1]};}},{key:"linearScale",value:function linearScale(yMin,yMax){var ticks=arguments.length>2&&arguments[2]!==undefined?arguments[2]:10;var index=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;var step=arguments.length>4&&arguments[4]!==undefined?arguments[4]:undefined;var range=Math.abs(yMax-yMin);ticks=this._adjustTicksForSmallRange(ticks,index,range);if(ticks==='dataPoints'){ticks=this.w.globals.dataPoints-1;}if(!step){step=range/ticks;}if(ticks===Number.MAX_VALUE){ticks=5;step=1;}var result=[];var v=yMin;while(ticks>=0){result.push(v);v=v+step;ticks-=1;}return{result:result,niceMin:result[0],niceMax:result[result.length-1]};}},{key:"logarithmicScaleNice",value:function logarithmicScaleNice(yMin,yMax,base){// Basic validation to avoid for loop starting at -inf.
if(yMax<=0)yMax=Math.max(yMin,base);if(yMin<=0)yMin=Math.min(yMax,base);var logs=[];// Get powers of base for our max and min
var logMax=Math.ceil(Math.log(yMax)/Math.log(base)+1);var logMin=Math.floor(Math.log(yMin)/Math.log(base));for(var i=logMin;i<logMax;i++){logs.push(Math.pow(base,i));}return{result:logs,niceMin:logs[0],niceMax:logs[logs.length-1]};}},{key:"logarithmicScale",value:function logarithmicScale(yMin,yMax,base){// Basic validation to avoid for loop starting at -inf.
if(yMax<=0)yMax=Math.max(yMin,base);if(yMin<=0)yMin=Math.min(yMax,base);var logs=[];// Get the logarithmic range.
var logMax=Math.log(yMax)/Math.log(base);var logMin=Math.log(yMin)/Math.log(base);// Get the exact logarithmic range.
// (This is the exact number of multiples of the base there are between yMin and yMax).
var logRange=logMax-logMin;// Round the logarithmic range to get the number of ticks we will create.
// If the chosen min/max values are multiples of each other WRT the base, this will be neat.
// If the chosen min/max aren't, we will at least still provide USEFUL ticks.
var ticks=Math.round(logRange);// Get the logarithmic spacing between ticks.
var logTickSpacing=logRange/ticks;// Create as many ticks as there is range in the logs.
for(var i=0,logTick=logMin;i<ticks;i++,logTick+=logTickSpacing){logs.push(Math.pow(base,logTick));}// Add a final tick at the yMax.
logs.push(Math.pow(base,logMax));return{result:logs,niceMin:yMin,niceMax:yMax};}},{key:"_adjustTicksForSmallRange",value:function _adjustTicksForSmallRange(ticks,index,range){var newTicks=ticks;if(typeof index!=='undefined'&&this.w.config.yaxis[index].labels.formatter&&this.w.config.yaxis[index].tickAmount===undefined){var formattedVal=Number(this.w.config.yaxis[index].labels.formatter(1));if(Utils$1.isNumber(formattedVal)&&this.w.globals.yValueDecimal===0){newTicks=Math.ceil(range);}}return newTicks<ticks?newTicks:ticks;}},{key:"setYScaleForIndex",value:function setYScaleForIndex(index,minY,maxY){var gl=this.w.globals;var cnf=this.w.config;var y=gl.isBarHorizontal?cnf.xaxis:cnf.yaxis[index];if(typeof gl.yAxisScale[index]==='undefined'){gl.yAxisScale[index]=[];}var range=Math.abs(maxY-minY);if(y.logarithmic&&range<=5){gl.invalidLogScale=true;}if(y.logarithmic&&range>5){gl.allSeriesCollapsed=false;gl.yAxisScale[index]=y.forceNiceScale?this.logarithmicScaleNice(minY,maxY,y.logBase):this.logarithmicScale(minY,maxY,y.logBase);}else{if(maxY===-Number.MAX_VALUE||!Utils$1.isNumber(maxY)){// no data in the chart. Either all series collapsed or user passed a blank array
gl.yAxisScale[index]=this.linearScale(0,10,10,index,cnf.yaxis[index].stepSize);}else{// there is some data. Turn off the allSeriesCollapsed flag
gl.allSeriesCollapsed=false;gl.yAxisScale[index]=this.niceScale(minY,maxY,index);}}}},{key:"setXScale",value:function setXScale(minX,maxX){var w=this.w;var gl=w.globals;var diff=Math.abs(maxX-minX);if(maxX===-Number.MAX_VALUE||!Utils$1.isNumber(maxX)){// no data in the chart. Either all series collapsed or user passed a blank array
gl.xAxisScale=this.linearScale(0,10,10);}else{gl.xAxisScale=this.linearScale(minX,maxX,w.config.xaxis.tickAmount?w.config.xaxis.tickAmount:diff<10&&diff>1?diff+1:10,0,w.config.xaxis.stepSize);}return gl.xAxisScale;}},{key:"setMultipleYScales",value:function setMultipleYScales(){var gl=this.w.globals;var cnf=this.w.config;var minYArr=gl.minYArr;var maxYArr=gl.maxYArr;// The current config method to map multiple series to a y axis is to
// include one yaxis config per series but set each yaxis seriesName to the
// same series name. This relies on indexing equivalence to map series to
// an axis: series[n] => yaxis[n]. This needs to be retained for compatibility.
// But we introduce an alternative that explicitly configures yaxis elements
// with the series that will be referenced to them (seriesName: []). This
// only requires including the yaxis elements that will be seen on the chart.
// Old way:
// ya: s
// 0: 0
// 1: 1
// 2: 1
// 3: 1
// 4: 1
// Axes 0..4 are all scaled and all will be rendered unless the axes are
// show: false. If the chart is stacked, it's assumed that series 1..4 are
// the contributing series. This is not particularly intuitive.
// New way:
// ya: s
// 0: [0]
// 1: [1,2,3,4]
// If the chart is stacked, it can be assumed that any axis with multiple
// series is stacked.
// 
// If this is an old chart and we are being backward compatible, it will be
// expected that each series is associated with it's corresponding yaxis
// through their indices, one-to-one.
// If yaxis.seriesName matches series.name, we have indices yi and si.
// A name match where yi != si is interpretted as yaxis[yi] and yaxis[si]
// will both be scaled to fit the combined series[si] and series[yi].
// Consider series named: S0,S1,S2 and yaxes A0,A1,A2.
// 
// Example 1: A0 and A1 scaled the same.
// A0.seriesName: S0
// A1.seriesName: S0
// A2.seriesName: S2
// Then A1 <-> A0
// 
// Example 2: A0, A1 and A2 all scaled the same.
// A0.seriesName: S2
// A1.seriesName: S0
// A2.seriesName: S1
// A0 <-> A2, A1 <-> A0, A2 <-> A1 --->>> A0 <-> A1 <-> A2
var axisSeriesMap=[];var seriesYAxisReverseMap=[];var unassignedSeriesIndices=[];var assumeSeriesNameArrays=cnf.yaxis.length!==cnf.series.length;cnf.series.forEach(function(s,i){unassignedSeriesIndices.push(i);seriesYAxisReverseMap.push(null);});cnf.yaxis.forEach(function(yaxe,yi){axisSeriesMap[yi]=[];});var unassignedYAxisIndices=[];// here, we loop through the yaxis array and find the item which has "seriesName" property
cnf.yaxis.forEach(function(yaxe,yi){var assigned=false;// Allow seriesName to be either a string (for backward compatibility),
// in which case, handle multiple yaxes referencing the same series.
// or an array of strings so that a yaxis can reference multiple series.
// Feature request #4237
if(yaxe.seriesName){var seriesNames=[];if(Array.isArray(yaxe.seriesName)){seriesNames=yaxe.seriesName;}else{seriesNames.push(yaxe.seriesName);}seriesNames.forEach(function(name){cnf.series.forEach(function(s,si){if(s.name===name){if(yi===si||assumeSeriesNameArrays){axisSeriesMap[yi].push(si);}else{axisSeriesMap[si].push(yi);}assigned=true;var remove=unassignedSeriesIndices.indexOf(si);if(remove!==-1){unassignedSeriesIndices.splice(remove,1);}}});});}if(!assigned){unassignedYAxisIndices.push(yi);}});axisSeriesMap.forEach(function(yaxe,yi){yaxe.forEach(function(si){seriesYAxisReverseMap[si]=yi;});});// All series referenced directly by yaxes have been assigned to those axes.
// Any series so far unassigned will be assigned to any yaxes that have yet
// to reference series directly, one-for-one in order of appearance, with
// all left-over series assigned to the last such yaxis. This captures the
// default single and multiaxis config options which simply includes zero,
// one or as many yaxes as there are series but do not reference them by name.
var lastUnassignedYAxis;for(var i=0;i<unassignedYAxisIndices.length;i++){lastUnassignedYAxis=unassignedYAxisIndices[i];axisSeriesMap[lastUnassignedYAxis]=[];if(unassignedSeriesIndices){var si=unassignedSeriesIndices[0];unassignedSeriesIndices.shift();axisSeriesMap[lastUnassignedYAxis].push(si);seriesYAxisReverseMap[si]=lastUnassignedYAxis;}else{break;}}if(lastUnassignedYAxis){unassignedSeriesIndices.forEach(function(i){axisSeriesMap[lastUnassignedYAxis].push(i);seriesYAxisReverseMap[i]=lastUnassignedYAxis;});}// We deliberately leave the zero-length yaxis array elements in for
// compatibility with the old equivalence in number between sereis and yaxes.
gl.seriesYAxisMap=axisSeriesMap.map(function(x){return x;});gl.seriesYAxisReverseMap=seriesYAxisReverseMap.map(function(x){return x;});this.sameScaleInMultipleAxes(minYArr,maxYArr,axisSeriesMap);}},{key:"sameScaleInMultipleAxes",value:function sameScaleInMultipleAxes(minYArr,maxYArr,axisSeriesMap){var _this=this;var cnf=this.w.config;var gl=this.w.globals;// Compute min..max for each yaxis
// 
axisSeriesMap.forEach(function(axisSeries,ai){if(axisSeries.length>0){var minY=Number.MAX_VALUE;var maxY=-Number.MAX_VALUE;if(cnf.chart.stacked){var sumSeries=gl.seriesX[axisSeries[0]].map(function(x){return Number.MIN_VALUE;});var posSeries=gl.seriesX[axisSeries[0]].map(function(x){return Number.MIN_VALUE;});var negSeries=gl.seriesX[axisSeries[0]].map(function(x){return Number.MIN_VALUE;});// The first series bound to the axis sets the type for stacked series
var seriesType=cnf.series[axisSeries[0]].type;for(var i=0;i<axisSeries.length;i++){// Sum all series for this yaxis at each corresponding datapoint
// For bar and column charts we need to keep positive and negative
// values separate.
var si=axisSeries[i];if(gl.collapsedSeriesIndices.indexOf(si)===-1){for(var j=0;j<gl.series[si].length;j++){var val=gl.series[si][j];if(val>=0){posSeries[j]+=val;}else{negSeries[j]+=val;}sumSeries[j]+=val;}}}if(seriesType==='bar'){minY=Math.min.apply(null,negSeries);maxY=Math.max.apply(null,posSeries);}else{minY=Math.min.apply(null,sumSeries);maxY=Math.max.apply(null,sumSeries);}}else{for(var _i=0;_i<axisSeries.length;_i++){minY=Math.min(minY,minYArr[axisSeries[_i]]);}for(var _i2=0;_i2<axisSeries.length;_i2++){maxY=Math.max(maxY,maxYArr[axisSeries[_i2]]);}}if(cnf.yaxis[ai].min!==undefined){if(typeof cnf.yaxis[ai].min==='function'){minY=cnf.yaxis[ai].min(minY);}else{minY=cnf.yaxis[ai].min;}}if(cnf.yaxis[ai].max!==undefined){if(typeof cnf.yaxis[ai].max==='function'){maxY=cnf.yaxis[ai].max(maxY);}else{maxY=cnf.yaxis[ai].max;}}// Set the scale for this yaxis
_this.setYScaleForIndex(ai,minY,maxY);// Set individual series min and max to nice values
axisSeries.forEach(function(si){minYArr[si]=gl.yAxisScale[ai].niceMin;maxYArr[si]=gl.yAxisScale[ai].niceMax;});}});}}]);return Scales;}();/**
   * Range is used to generates values between min and max.
   *
   * @module Range
   **/var Range=/*#__PURE__*/function(){function Range(ctx){_classCallCheck(this,Range);this.ctx=ctx;this.w=ctx.w;this.scales=new Scales(ctx);}_createClass(Range,[{key:"init",value:function init(){this.setYRange();this.setXRange();this.setZRange();}},{key:"getMinYMaxY",value:function getMinYMaxY(startingSeriesIndex){var lowestY=arguments.length>1&&arguments[1]!==undefined?arguments[1]:Number.MAX_VALUE;var highestY=arguments.length>2&&arguments[2]!==undefined?arguments[2]:-Number.MAX_VALUE;var endingSeriesIndex=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var cnf=this.w.config;var gl=this.w.globals;var maxY=-Number.MAX_VALUE;var minY=Number.MIN_VALUE;if(endingSeriesIndex===null){endingSeriesIndex=startingSeriesIndex+1;}var firstXIndex=0;var lastXIndex=0;var seriesX=undefined;if(gl.seriesX.length>=endingSeriesIndex){var _ref,_gl$brushSource;seriesX=_toConsumableArray(new Set((_ref=[]).concat.apply(_ref,_toConsumableArray(gl.seriesX.slice(startingSeriesIndex,endingSeriesIndex)))));firstXIndex=0;lastXIndex=seriesX.length-1;// Eventually brushSource will be set if the current chart is a target.
// That is, after the appropriate event causes us to update.
var brush=(_gl$brushSource=gl.brushSource)===null||_gl$brushSource===void 0?void 0:_gl$brushSource.w.config.chart.brush;if(cnf.chart.zoom.enabled&&cnf.chart.zoom.autoScaleYaxis||brush!==null&&brush!==void 0&&brush.enabled&&brush!==null&&brush!==void 0&&brush.autoScaleYaxis){// Scale the Y axis to the min..max within the zoomed X axis domain.
if(cnf.xaxis.min){for(firstXIndex=0;firstXIndex<lastXIndex&&seriesX[firstXIndex]<cnf.xaxis.min;firstXIndex++){}}if(cnf.xaxis.max){for(;lastXIndex>firstXIndex&&seriesX[lastXIndex]>cnf.xaxis.max;lastXIndex--){}}}}var series=gl.series;var seriesMin=series;var seriesMax=series;if(cnf.chart.type==='candlestick'){seriesMin=gl.seriesCandleL;seriesMax=gl.seriesCandleH;}else if(cnf.chart.type==='boxPlot'){seriesMin=gl.seriesCandleO;seriesMax=gl.seriesCandleC;}else if(gl.isRangeData){seriesMin=gl.seriesRangeStart;seriesMax=gl.seriesRangeEnd;}for(var i=startingSeriesIndex;i<endingSeriesIndex;i++){gl.dataPoints=Math.max(gl.dataPoints,series[i].length);var seriesType=cnf.series[i].type;if(gl.categoryLabels.length){gl.dataPoints=gl.categoryLabels.filter(function(label){return typeof label!=='undefined';}).length;}if(gl.labels.length&&cnf.xaxis.type!=='datetime'&&gl.series.reduce(function(a,c){return a+c.length;},0)!==0){// the condition cnf.xaxis.type !== 'datetime' fixes #3897 and #3905
gl.dataPoints=Math.max(gl.dataPoints,gl.labels.length);}if(!seriesX){firstXIndex=0;lastXIndex=gl.series[i].length;}for(var j=firstXIndex;j<=lastXIndex&&j<gl.series[i].length;j++){var val=series[i][j];if(val!==null&&Utils$1.isNumber(val)){if(typeof seriesMax[i][j]!=='undefined'){maxY=Math.max(maxY,seriesMax[i][j]);lowestY=Math.min(lowestY,seriesMax[i][j]);}if(typeof seriesMin[i][j]!=='undefined'){lowestY=Math.min(lowestY,seriesMin[i][j]);highestY=Math.max(highestY,seriesMin[i][j]);}// These series arrays are dual purpose:
// Array      : CandleO, CandleH, CandleM, CandleL, CandleC
// Candlestick: O        H                 L        C
// Boxplot    : Min      Q1       Median   Q3       Max
switch(seriesType){case'candlestick':{if(typeof gl.seriesCandleC[i][j]!=='undefined'){maxY=Math.max(maxY,gl.seriesCandleH[i][j]);lowestY=Math.min(lowestY,gl.seriesCandleL[i][j]);}}case'boxPlot':{if(typeof gl.seriesCandleC[i][j]!=='undefined'){maxY=Math.max(maxY,gl.seriesCandleC[i][j]);lowestY=Math.min(lowestY,gl.seriesCandleO[i][j]);}}}// there is a combo chart and the specified series in not either
// candlestick, boxplot, or rangeArea/rangeBar; find the max there.
if(seriesType&&seriesType!=='candlestick'&&seriesType!=='boxPlot'&&seriesType!=='rangeArea'&&seriesType!=='rangeBar'){maxY=Math.max(maxY,gl.series[i][j]);lowestY=Math.min(lowestY,gl.series[i][j]);}highestY=maxY;if(gl.seriesGoals[i]&&gl.seriesGoals[i][j]&&Array.isArray(gl.seriesGoals[i][j])){gl.seriesGoals[i][j].forEach(function(g){if(minY!==Number.MIN_VALUE){minY=Math.min(minY,g.value);lowestY=minY;}maxY=Math.max(maxY,g.value);highestY=maxY;});}if(Utils$1.isFloat(val)){val=Utils$1.noExponents(val);gl.yValueDecimal=Math.max(gl.yValueDecimal,val.toString().split('.')[1].length);}if(minY>seriesMin[i][j]&&seriesMin[i][j]<0){minY=seriesMin[i][j];}}else{gl.hasNullValues=true;}}if(seriesType==='bar'||seriesType==='column'){if(minY<0&&maxY<0){// all negative values in a bar series, hence make the max to 0
maxY=0;highestY=Math.max(highestY,0);}if(minY===Number.MIN_VALUE){minY=0;lowestY=Math.min(lowestY,0);}}}if(cnf.chart.type==='rangeBar'&&gl.seriesRangeStart.length&&gl.isBarHorizontal){minY=lowestY;}if(cnf.chart.type==='bar'){if(minY<0&&maxY<0){// all negative values in a bar chart, hence make the max to 0
maxY=0;}if(minY===Number.MIN_VALUE){minY=0;}}return{minY:minY,maxY:maxY,lowestY:lowestY,highestY:highestY};}},{key:"setYRange",value:function setYRange(){var gl=this.w.globals;var cnf=this.w.config;gl.maxY=-Number.MAX_VALUE;gl.minY=Number.MIN_VALUE;var lowestYInAllSeries=Number.MAX_VALUE;var minYMaxY;if(gl.isMultipleYAxis){// we need to get minY and maxY for multiple y axis
lowestYInAllSeries=Number.MAX_VALUE;for(var i=0;i<gl.series.length;i++){minYMaxY=this.getMinYMaxY(i);gl.minYArr[i]=minYMaxY.lowestY;gl.maxYArr[i]=minYMaxY.highestY;lowestYInAllSeries=Math.min(lowestYInAllSeries,minYMaxY.lowestY);}}// and then, get the minY and maxY from all series
minYMaxY=this.getMinYMaxY(0,lowestYInAllSeries,null,gl.series.length);if(cnf.chart.type==='bar'){gl.minY=minYMaxY.minY;gl.maxY=minYMaxY.maxY;}else{gl.minY=minYMaxY.lowestY;gl.maxY=minYMaxY.highestY;}lowestYInAllSeries=minYMaxY.lowestY;if(cnf.chart.stacked){this._setStackedMinMax();}// if the numbers are too big, reduce the range
// for eg, if number is between 100000-110000, putting 0 as the lowest
// value is not so good idea. So change the gl.minY for
// line/area/scatter/candlesticks/boxPlot/vertical rangebar
if(cnf.chart.type==='line'||cnf.chart.type==='area'||cnf.chart.type==='scatter'||cnf.chart.type==='candlestick'||cnf.chart.type==='boxPlot'||cnf.chart.type==='rangeBar'&&!gl.isBarHorizontal){if(gl.minY===Number.MIN_VALUE&&lowestYInAllSeries!==-Number.MAX_VALUE&&lowestYInAllSeries!==gl.maxY// single value possibility
){gl.minY=lowestYInAllSeries;}}else{gl.minY=minYMaxY.minY;}cnf.yaxis.forEach(function(yaxe,index){// override all min/max values by user defined values (y axis)
if(yaxe.max!==undefined){if(typeof yaxe.max==='number'){gl.maxYArr[index]=yaxe.max;}else if(typeof yaxe.max==='function'){// fixes apexcharts.js/issues/2098
gl.maxYArr[index]=yaxe.max(gl.isMultipleYAxis?gl.maxYArr[index]:gl.maxY);}// gl.maxY is for single y-axis chart, it will be ignored in multi-yaxis
gl.maxY=gl.maxYArr[index];}if(yaxe.min!==undefined){if(typeof yaxe.min==='number'){gl.minYArr[index]=yaxe.min;}else if(typeof yaxe.min==='function'){// fixes apexcharts.js/issues/2098
gl.minYArr[index]=yaxe.min(gl.isMultipleYAxis?gl.minYArr[index]===Number.MIN_VALUE?0:gl.minYArr[index]:gl.minY);}// gl.minY is for single y-axis chart, it will be ignored in multi-yaxis
gl.minY=gl.minYArr[index];}});// for horizontal bar charts, we need to check xaxis min/max as user may have specified there
if(gl.isBarHorizontal){var minmax=['min','max'];minmax.forEach(function(m){if(cnf.xaxis[m]!==undefined&&typeof cnf.xaxis[m]==='number'){m==='min'?gl.minY=cnf.xaxis[m]:gl.maxY=cnf.xaxis[m];}});}// for multi y-axis we need different scales for each
if(gl.isMultipleYAxis){this.scales.setMultipleYScales();gl.minY=lowestYInAllSeries;}else{this.scales.setYScaleForIndex(0,gl.minY,gl.maxY);gl.minY=gl.yAxisScale[0].niceMin;gl.maxY=gl.yAxisScale[0].niceMax;gl.minYArr[0]=gl.yAxisScale[0].niceMin;gl.maxYArr[0]=gl.yAxisScale[0].niceMax;gl.seriesYAxisMap=[gl.series.map(function(x,i){return i;})];gl.seriesYAxisReverseMap=gl.series.map(function(x,i){return 0;});}return{minY:gl.minY,maxY:gl.maxY,minYArr:gl.minYArr,maxYArr:gl.maxYArr,yAxisScale:gl.yAxisScale};}},{key:"setXRange",value:function setXRange(){var gl=this.w.globals;var cnf=this.w.config;var isXNumeric=cnf.xaxis.type==='numeric'||cnf.xaxis.type==='datetime'||cnf.xaxis.type==='category'&&!gl.noLabelsProvided||gl.noLabelsProvided||gl.isXNumeric;var getInitialMinXMaxX=function getInitialMinXMaxX(){for(var i=0;i<gl.series.length;i++){if(gl.labels[i]){for(var j=0;j<gl.labels[i].length;j++){if(gl.labels[i][j]!==null&&Utils$1.isNumber(gl.labels[i][j])){gl.maxX=Math.max(gl.maxX,gl.labels[i][j]);gl.initialMaxX=Math.max(gl.maxX,gl.labels[i][j]);gl.minX=Math.min(gl.minX,gl.labels[i][j]);gl.initialMinX=Math.min(gl.minX,gl.labels[i][j]);}}}}};// minX maxX starts here
if(gl.isXNumeric){getInitialMinXMaxX();}if(gl.noLabelsProvided){if(cnf.xaxis.categories.length===0){gl.maxX=gl.labels[gl.labels.length-1];gl.initialMaxX=gl.labels[gl.labels.length-1];gl.minX=1;gl.initialMinX=1;}}if(gl.isXNumeric||gl.noLabelsProvided||gl.dataFormatXNumeric){var ticks;if(cnf.xaxis.tickAmount===undefined){ticks=Math.round(gl.svgWidth/150);// no labels provided and total number of dataPoints is less than 30
if(cnf.xaxis.type==='numeric'&&gl.dataPoints<30){ticks=gl.dataPoints-1;}// this check is for when ticks exceeds total datapoints and that would result in duplicate labels
if(ticks>gl.dataPoints&&gl.dataPoints!==0){ticks=gl.dataPoints-1;}}else if(cnf.xaxis.tickAmount==='dataPoints'){if(gl.series.length>1){ticks=gl.series[gl.maxValsInArrayIndex].length-1;}if(gl.isXNumeric){ticks=gl.maxX-gl.minX-1;}}else{ticks=cnf.xaxis.tickAmount;}gl.xTickAmount=ticks;// override all min/max values by user defined values (x axis)
if(cnf.xaxis.max!==undefined&&typeof cnf.xaxis.max==='number'){gl.maxX=cnf.xaxis.max;}if(cnf.xaxis.min!==undefined&&typeof cnf.xaxis.min==='number'){gl.minX=cnf.xaxis.min;}// if range is provided, adjust the new minX
if(cnf.xaxis.range!==undefined){gl.minX=gl.maxX-cnf.xaxis.range;}if(gl.minX!==Number.MAX_VALUE&&gl.maxX!==-Number.MAX_VALUE){if(cnf.xaxis.convertedCatToNumeric&&!gl.dataFormatXNumeric){var catScale=[];for(var i=gl.minX-1;i<gl.maxX;i++){catScale.push(i+1);}gl.xAxisScale={result:catScale,niceMin:catScale[0],niceMax:catScale[catScale.length-1]};}else{gl.xAxisScale=this.scales.setXScale(gl.minX,gl.maxX);}}else{gl.xAxisScale=this.scales.linearScale(0,ticks,ticks,0,cnf.xaxis.stepSize);if(gl.noLabelsProvided&&gl.labels.length>0){gl.xAxisScale=this.scales.linearScale(1,gl.labels.length,ticks-1,0,cnf.xaxis.stepSize);// this is the only place seriesX is again mutated
gl.seriesX=gl.labels.slice();}}// we will still store these labels as the count for this will be different (to draw grid and labels placement)
if(isXNumeric){gl.labels=gl.xAxisScale.result.slice();}}if(gl.isBarHorizontal&&gl.labels.length){gl.xTickAmount=gl.labels.length;}// single dataPoint
this._handleSingleDataPoint();// minimum x difference to calculate bar width in numeric bars
this._getMinXDiff();return{minX:gl.minX,maxX:gl.maxX};}},{key:"setZRange",value:function setZRange(){// minZ, maxZ starts here
var gl=this.w.globals;if(!gl.isDataXYZ)return;for(var i=0;i<gl.series.length;i++){if(typeof gl.seriesZ[i]!=='undefined'){for(var j=0;j<gl.seriesZ[i].length;j++){if(gl.seriesZ[i][j]!==null&&Utils$1.isNumber(gl.seriesZ[i][j])){gl.maxZ=Math.max(gl.maxZ,gl.seriesZ[i][j]);gl.minZ=Math.min(gl.minZ,gl.seriesZ[i][j]);}}}}}},{key:"_handleSingleDataPoint",value:function _handleSingleDataPoint(){var gl=this.w.globals;var cnf=this.w.config;if(gl.minX===gl.maxX){var datetimeObj=new DateTime(this.ctx);if(cnf.xaxis.type==='datetime'){var newMinX=datetimeObj.getDate(gl.minX);if(cnf.xaxis.labels.datetimeUTC){newMinX.setUTCDate(newMinX.getUTCDate()-2);}else{newMinX.setDate(newMinX.getDate()-2);}gl.minX=new Date(newMinX).getTime();var newMaxX=datetimeObj.getDate(gl.maxX);if(cnf.xaxis.labels.datetimeUTC){newMaxX.setUTCDate(newMaxX.getUTCDate()+2);}else{newMaxX.setDate(newMaxX.getDate()+2);}gl.maxX=new Date(newMaxX).getTime();}else if(cnf.xaxis.type==='numeric'||cnf.xaxis.type==='category'&&!gl.noLabelsProvided){gl.minX=gl.minX-2;gl.initialMinX=gl.minX;gl.maxX=gl.maxX+2;gl.initialMaxX=gl.maxX;}}}},{key:"_getMinXDiff",value:function _getMinXDiff(){var gl=this.w.globals;if(gl.isXNumeric){// get the least x diff if numeric x axis is present
gl.seriesX.forEach(function(sX,i){if(sX.length===1){// a small hack to prevent overlapping multiple bars when there is just 1 datapoint in bar series.
// fix #811
sX.push(gl.seriesX[gl.maxValsInArrayIndex][gl.seriesX[gl.maxValsInArrayIndex].length-1]);}// fix #983 (clone the array to avoid side effects)
var seriesX=sX.slice();seriesX.sort(function(a,b){return a-b;});seriesX.forEach(function(s,j){if(j>0){var xDiff=s-seriesX[j-1];if(xDiff>0){gl.minXDiff=Math.min(xDiff,gl.minXDiff);}}});if(gl.dataPoints===1||gl.minXDiff===Number.MAX_VALUE){// fixes apexcharts.js #1221
gl.minXDiff=0.5;}});}}},{key:"_setStackedMinMax",value:function _setStackedMinMax(){var _this=this;var gl=this.w.globals;// for stacked charts, we calculate each series's parallel values.
// i.e, series[0][j] + series[1][j] .... [series[i.length][j]]
// and get the max out of it
if(!gl.series.length)return;var seriesGroups=gl.seriesGroups;if(!seriesGroups.length){seriesGroups=[this.w.config.series.map(function(serie){return serie.name;})];}var stackedPoss={};var stackedNegs={};seriesGroups.forEach(function(group){stackedPoss[group]=[];stackedNegs[group]=[];var indicesOfSeriesInGroup=_this.w.config.series.map(function(serie,si){return group.indexOf(serie.name)>-1?si:null;}).filter(function(f){return f!==null;});indicesOfSeriesInGroup.forEach(function(i){for(var j=0;j<gl.series[gl.maxValsInArrayIndex].length;j++){var _this$w$config$series,_this$w$config$series2;if(typeof stackedPoss[group][j]==='undefined'){stackedPoss[group][j]=0;stackedNegs[group][j]=0;}var stackSeries=_this.w.config.chart.stacked&&!gl.comboCharts||_this.w.config.chart.stacked&&gl.comboCharts&&(!_this.w.config.chart.stackOnlyBar||((_this$w$config$series=_this.w.config.series)===null||_this$w$config$series===void 0?void 0:(_this$w$config$series2=_this$w$config$series[i])===null||_this$w$config$series2===void 0?void 0:_this$w$config$series2.type)==='bar');if(stackSeries){if(gl.series[i][j]!==null&&Utils$1.isNumber(gl.series[i][j])){gl.series[i][j]>0?stackedPoss[group][j]+=parseFloat(gl.series[i][j])+0.0001:stackedNegs[group][j]+=parseFloat(gl.series[i][j]);}}}});});Object.entries(stackedPoss).forEach(function(_ref2){var _ref3=_slicedToArray(_ref2,1),key=_ref3[0];stackedPoss[key].forEach(function(_,stgi){gl.maxY=Math.max(gl.maxY,stackedPoss[key][stgi]);gl.minY=Math.min(gl.minY,stackedNegs[key][stgi]);});});}}]);return Range;}();/**
   * ApexCharts YAxis Class for drawing Y-Axis.
   *
   * @module YAxis
   **/var YAxis=/*#__PURE__*/function(){function YAxis(ctx,elgrid){_classCallCheck(this,YAxis);this.ctx=ctx;this.elgrid=elgrid;this.w=ctx.w;var w=this.w;this.xaxisFontSize=w.config.xaxis.labels.style.fontSize;this.axisFontFamily=w.config.xaxis.labels.style.fontFamily;this.xaxisForeColors=w.config.xaxis.labels.style.colors;this.isCategoryBarHorizontal=w.config.chart.type==='bar'&&w.config.plotOptions.bar.horizontal;this.xAxisoffX=0;if(w.config.xaxis.position==='bottom'){this.xAxisoffX=w.globals.gridHeight;}this.drawnLabels=[];this.axesUtils=new AxesUtils(ctx);}_createClass(YAxis,[{key:"drawYaxis",value:function drawYaxis(realIndex){var _this=this;var w=this.w;var graphics=new Graphics(this.ctx);var yaxisStyle=w.config.yaxis[realIndex].labels.style;var yaxisFontSize=yaxisStyle.fontSize;var yaxisFontFamily=yaxisStyle.fontFamily;var yaxisFontWeight=yaxisStyle.fontWeight;var elYaxis=graphics.group({class:'apexcharts-yaxis',rel:realIndex,transform:'translate('+w.globals.translateYAxisX[realIndex]+', 0)'});if(this.axesUtils.isYAxisHidden(realIndex)){return elYaxis;}var elYaxisTexts=graphics.group({class:'apexcharts-yaxis-texts-g'});elYaxis.add(elYaxisTexts);var tickAmount=w.globals.yAxisScale[realIndex].result.length-1;// labelsDivider is simply svg height/number of ticks
var labelsDivider=w.globals.gridHeight/tickAmount;// initial label position = 0;
var l=w.globals.translateY;var lbFormatter=w.globals.yLabelFormatters[realIndex];var labels=w.globals.yAxisScale[realIndex].result.slice();labels=this.axesUtils.checkForReversedLabels(realIndex,labels);var firstLabel='';if(w.config.yaxis[realIndex].labels.show){var _loop=function _loop(i){var val=labels[i];val=lbFormatter(val,i,w);var xPad=w.config.yaxis[realIndex].labels.padding;if(w.config.yaxis[realIndex].opposite&&w.config.yaxis.length!==0){xPad=xPad*-1;}var textAnchor='end';if(w.config.yaxis[realIndex].opposite){textAnchor='start';}if(w.config.yaxis[realIndex].labels.align==='left'){textAnchor='start';}else if(w.config.yaxis[realIndex].labels.align==='center'){textAnchor='middle';}else if(w.config.yaxis[realIndex].labels.align==='right'){textAnchor='end';}var yColors=_this.axesUtils.getYAxisForeColor(yaxisStyle.colors,realIndex);var getForeColor=function getForeColor(){return Array.isArray(yColors)?yColors[i]:yColors;};var offsetY=w.config.yaxis[realIndex].labels.offsetY;if(w.config.chart.type==='heatmap'){var divisor=w.globals.gridHeight/w.globals.series.length-1;offsetY=offsetY-divisor/2;}var label=graphics.drawText({x:xPad,y:l+tickAmount/10+offsetY+1,text:val,textAnchor:textAnchor,fontSize:yaxisFontSize,fontFamily:yaxisFontFamily,fontWeight:yaxisFontWeight,maxWidth:w.config.yaxis[realIndex].labels.maxWidth,foreColor:getForeColor(),isPlainText:false,cssClass:'apexcharts-yaxis-label '+yaxisStyle.cssClass});if(i===tickAmount){firstLabel=label;}elYaxisTexts.add(label);var elTooltipTitle=document.createElementNS(w.globals.SVGNS,'title');elTooltipTitle.textContent=Array.isArray(val)?val.join(' '):val;label.node.appendChild(elTooltipTitle);if(w.config.yaxis[realIndex].labels.rotate!==0){var firstabelRotatingCenter=graphics.rotateAroundCenter(firstLabel.node);var labelRotatingCenter=graphics.rotateAroundCenter(label.node);label.node.setAttribute('transform',"rotate(".concat(w.config.yaxis[realIndex].labels.rotate," ").concat(firstabelRotatingCenter.x," ").concat(labelRotatingCenter.y,")"));}l=l+labelsDivider;};for(var i=tickAmount;i>=0;i--){_loop(i);}}if(w.config.yaxis[realIndex].title.text!==undefined){var elYaxisTitle=graphics.group({class:'apexcharts-yaxis-title'});var _x=0;if(w.config.yaxis[realIndex].opposite){_x=w.globals.translateYAxisX[realIndex];}var elYAxisTitleText=graphics.drawText({x:_x,y:w.globals.gridHeight/2+w.globals.translateY+w.config.yaxis[realIndex].title.offsetY,text:w.config.yaxis[realIndex].title.text,textAnchor:'end',foreColor:w.config.yaxis[realIndex].title.style.color,fontSize:w.config.yaxis[realIndex].title.style.fontSize,fontWeight:w.config.yaxis[realIndex].title.style.fontWeight,fontFamily:w.config.yaxis[realIndex].title.style.fontFamily,cssClass:'apexcharts-yaxis-title-text '+w.config.yaxis[realIndex].title.style.cssClass});elYaxisTitle.add(elYAxisTitleText);elYaxis.add(elYaxisTitle);}var axisBorder=w.config.yaxis[realIndex].axisBorder;var x=31+axisBorder.offsetX;if(w.config.yaxis[realIndex].opposite){x=-31-axisBorder.offsetX;}if(axisBorder.show){var elVerticalLine=graphics.drawLine(x,w.globals.translateY+axisBorder.offsetY-2,x,w.globals.gridHeight+w.globals.translateY+axisBorder.offsetY+2,axisBorder.color,0,axisBorder.width);elYaxis.add(elVerticalLine);}if(w.config.yaxis[realIndex].axisTicks.show){this.axesUtils.drawYAxisTicks(x,tickAmount,axisBorder,w.config.yaxis[realIndex].axisTicks,realIndex,labelsDivider,elYaxis);}return elYaxis;}// This actually becomes horizontal axis (for bar charts)
},{key:"drawYaxisInversed",value:function drawYaxisInversed(realIndex){var w=this.w;var graphics=new Graphics(this.ctx);var elXaxis=graphics.group({class:'apexcharts-xaxis apexcharts-yaxis-inversed'});var elXaxisTexts=graphics.group({class:'apexcharts-xaxis-texts-g',transform:"translate(".concat(w.globals.translateXAxisX,", ").concat(w.globals.translateXAxisY,")")});elXaxis.add(elXaxisTexts);var tickAmount=w.globals.yAxisScale[realIndex].result.length-1;// labelsDivider is simply svg width/number of ticks
var labelsDivider=w.globals.gridWidth/tickAmount+0.1;// initial label position;
var l=labelsDivider+w.config.xaxis.labels.offsetX;var lbFormatter=w.globals.xLabelFormatter;var labels=w.globals.yAxisScale[realIndex].result.slice();var timescaleLabels=w.globals.timescaleLabels;if(timescaleLabels.length>0){this.xaxisLabels=timescaleLabels.slice();labels=timescaleLabels.slice();tickAmount=labels.length;}labels=this.axesUtils.checkForReversedLabels(realIndex,labels);var tl=timescaleLabels.length;if(w.config.xaxis.labels.show){for(var i=tl?0:tickAmount;tl?i<tl:i>=0;tl?i++:i--){var val=labels[i];val=lbFormatter(val,i,w);var x=w.globals.gridWidth+w.globals.padHorizontal-(l-labelsDivider+w.config.xaxis.labels.offsetX);if(timescaleLabels.length){var label=this.axesUtils.getLabel(labels,timescaleLabels,x,i,this.drawnLabels,this.xaxisFontSize);x=label.x;val=label.text;this.drawnLabels.push(label.text);if(i===0&&w.globals.skipFirstTimelinelabel){val='';}if(i===labels.length-1&&w.globals.skipLastTimelinelabel){val='';}}var elTick=graphics.drawText({x:x,y:this.xAxisoffX+w.config.xaxis.labels.offsetY+30-(w.config.xaxis.position==='top'?w.globals.xAxisHeight+w.config.xaxis.axisTicks.height-2:0),text:val,textAnchor:'middle',foreColor:Array.isArray(this.xaxisForeColors)?this.xaxisForeColors[realIndex]:this.xaxisForeColors,fontSize:this.xaxisFontSize,fontFamily:this.xaxisFontFamily,fontWeight:w.config.xaxis.labels.style.fontWeight,isPlainText:false,cssClass:'apexcharts-xaxis-label '+w.config.xaxis.labels.style.cssClass});elXaxisTexts.add(elTick);elTick.tspan(val);var elTooltipTitle=document.createElementNS(w.globals.SVGNS,'title');elTooltipTitle.textContent=val;elTick.node.appendChild(elTooltipTitle);l=l+labelsDivider;}}this.inversedYAxisTitleText(elXaxis);this.inversedYAxisBorder(elXaxis);return elXaxis;}},{key:"inversedYAxisBorder",value:function inversedYAxisBorder(parent){var w=this.w;var graphics=new Graphics(this.ctx);var axisBorder=w.config.xaxis.axisBorder;if(axisBorder.show){var lineCorrection=0;if(w.config.chart.type==='bar'&&w.globals.isXNumeric){lineCorrection=lineCorrection-15;}var elHorzLine=graphics.drawLine(w.globals.padHorizontal+lineCorrection+axisBorder.offsetX,this.xAxisoffX,w.globals.gridWidth,this.xAxisoffX,axisBorder.color,0,axisBorder.height);// in horizontal bars, we append axisBorder to elGridBorders element to avoid z-index issues
if(this.elgrid&&this.elgrid.elGridBorders&&w.config.grid.show){this.elgrid.elGridBorders.add(elHorzLine);}else{parent.add(elHorzLine);}}}},{key:"inversedYAxisTitleText",value:function inversedYAxisTitleText(parent){var w=this.w;var graphics=new Graphics(this.ctx);if(w.config.xaxis.title.text!==undefined){var elYaxisTitle=graphics.group({class:'apexcharts-xaxis-title apexcharts-yaxis-title-inversed'});var elYAxisTitleText=graphics.drawText({x:w.globals.gridWidth/2+w.config.xaxis.title.offsetX,y:this.xAxisoffX+parseFloat(this.xaxisFontSize)+parseFloat(w.config.xaxis.title.style.fontSize)+w.config.xaxis.title.offsetY+20,text:w.config.xaxis.title.text,textAnchor:'middle',fontSize:w.config.xaxis.title.style.fontSize,fontFamily:w.config.xaxis.title.style.fontFamily,fontWeight:w.config.xaxis.title.style.fontWeight,foreColor:w.config.xaxis.title.style.color,cssClass:'apexcharts-xaxis-title-text '+w.config.xaxis.title.style.cssClass});elYaxisTitle.add(elYAxisTitleText);parent.add(elYaxisTitle);}}},{key:"yAxisTitleRotate",value:function yAxisTitleRotate(realIndex,yAxisOpposite){var w=this.w;var graphics=new Graphics(this.ctx);var yAxisLabelsCoord={width:0,height:0};var yAxisTitleCoord={width:0,height:0};var elYAxisLabelsWrap=w.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(realIndex,"'] .apexcharts-yaxis-texts-g"));if(elYAxisLabelsWrap!==null){yAxisLabelsCoord=elYAxisLabelsWrap.getBoundingClientRect();}var yAxisTitle=w.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(realIndex,"'] .apexcharts-yaxis-title text"));if(yAxisTitle!==null){yAxisTitleCoord=yAxisTitle.getBoundingClientRect();}if(yAxisTitle!==null){var x=this.xPaddingForYAxisTitle(realIndex,yAxisLabelsCoord,yAxisTitleCoord,yAxisOpposite);yAxisTitle.setAttribute('x',x.xPos-(yAxisOpposite?10:0));}if(yAxisTitle!==null){var titleRotatingCenter=graphics.rotateAroundCenter(yAxisTitle);yAxisTitle.setAttribute('transform',"rotate(".concat(yAxisOpposite?w.config.yaxis[realIndex].title.rotate*-1:w.config.yaxis[realIndex].title.rotate," ").concat(titleRotatingCenter.x," ").concat(titleRotatingCenter.y,")"));}}},{key:"xPaddingForYAxisTitle",value:function xPaddingForYAxisTitle(realIndex,yAxisLabelsCoord,yAxisTitleCoord,yAxisOpposite){var w=this.w;var oppositeAxisCount=0;var x=0;var padd=10;if(w.config.yaxis[realIndex].title.text===undefined||realIndex<0){return{xPos:x,padd:0};}if(yAxisOpposite){x=yAxisLabelsCoord.width+w.config.yaxis[realIndex].title.offsetX+yAxisTitleCoord.width/2+padd/2;oppositeAxisCount+=1;if(oppositeAxisCount===0){x=x-padd/2;}}else{x=yAxisLabelsCoord.width*-1+w.config.yaxis[realIndex].title.offsetX+padd/2+yAxisTitleCoord.width/2;if(w.globals.isBarHorizontal){padd=25;x=yAxisLabelsCoord.width*-1-w.config.yaxis[realIndex].title.offsetX-padd;}}return{xPos:x,padd:padd};}// sets the x position of the y-axis by counting the labels width, title width and any offset
},{key:"setYAxisXPosition",value:function setYAxisXPosition(yaxisLabelCoords,yTitleCoords){var w=this.w;var xLeft=0;var xRight=0;var leftOffsetX=18;var rightOffsetX=1;if(w.config.yaxis.length>1){this.multipleYs=true;}w.config.yaxis.map(function(yaxe,index){var shouldNotDrawAxis=w.globals.ignoreYAxisIndexes.indexOf(index)>-1||!yaxe.show||yaxe.floating||yaxisLabelCoords[index].width===0;var axisWidth=yaxisLabelCoords[index].width+yTitleCoords[index].width;if(!yaxe.opposite){xLeft=w.globals.translateX-leftOffsetX;if(!shouldNotDrawAxis){leftOffsetX=leftOffsetX+axisWidth+20;}w.globals.translateYAxisX[index]=xLeft+yaxe.labels.offsetX;}else{if(w.globals.isBarHorizontal){xRight=w.globals.gridWidth+w.globals.translateX-1;w.globals.translateYAxisX[index]=xRight-yaxe.labels.offsetX;}else{xRight=w.globals.gridWidth+w.globals.translateX+rightOffsetX;if(!shouldNotDrawAxis){rightOffsetX=rightOffsetX+axisWidth+20;}w.globals.translateYAxisX[index]=xRight-yaxe.labels.offsetX+20;}}});}},{key:"setYAxisTextAlignments",value:function setYAxisTextAlignments(){var w=this.w;var yaxis=w.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");yaxis=Utils$1.listToArray(yaxis);yaxis.forEach(function(y,index){var yaxe=w.config.yaxis[index];// proceed only if user has specified alignment
if(yaxe&&!yaxe.floating&&yaxe.labels.align!==undefined){var yAxisInner=w.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(index,"'] .apexcharts-yaxis-texts-g"));var yAxisTexts=w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(index,"'] .apexcharts-yaxis-label"));yAxisTexts=Utils$1.listToArray(yAxisTexts);var rect=yAxisInner.getBoundingClientRect();if(yaxe.labels.align==='left'){yAxisTexts.forEach(function(label,lI){label.setAttribute('text-anchor','start');});if(!yaxe.opposite){yAxisInner.setAttribute('transform',"translate(-".concat(rect.width,", 0)"));}}else if(yaxe.labels.align==='center'){yAxisTexts.forEach(function(label,lI){label.setAttribute('text-anchor','middle');});yAxisInner.setAttribute('transform',"translate(".concat(rect.width/2*(!yaxe.opposite?-1:1),", 0)"));}else if(yaxe.labels.align==='right'){yAxisTexts.forEach(function(label,lI){label.setAttribute('text-anchor','end');});if(yaxe.opposite){yAxisInner.setAttribute('transform',"translate(".concat(rect.width,", 0)"));}}}});}}]);return YAxis;}();var Events=/*#__PURE__*/function(){function Events(ctx){_classCallCheck(this,Events);this.ctx=ctx;this.w=ctx.w;this.documentEvent=Utils$1.bind(this.documentEvent,this);}_createClass(Events,[{key:"addEventListener",value:function addEventListener(name,handler){var w=this.w;if(w.globals.events.hasOwnProperty(name)){w.globals.events[name].push(handler);}else{w.globals.events[name]=[handler];}}},{key:"removeEventListener",value:function removeEventListener(name,handler){var w=this.w;if(!w.globals.events.hasOwnProperty(name)){return;}var index=w.globals.events[name].indexOf(handler);if(index!==-1){w.globals.events[name].splice(index,1);}}},{key:"fireEvent",value:function fireEvent(name,args){var w=this.w;if(!w.globals.events.hasOwnProperty(name)){return;}if(!args||!args.length){args=[];}var evs=w.globals.events[name];var l=evs.length;for(var i=0;i<l;i++){evs[i].apply(null,args);}}},{key:"setupEventHandlers",value:function setupEventHandlers(){var _this=this;var w=this.w;var me=this.ctx;var clickableArea=w.globals.dom.baseEl.querySelector(w.globals.chartClass);this.ctx.eventList.forEach(function(event){clickableArea.addEventListener(event,function(e){var opts=Object.assign({},w,{seriesIndex:w.globals.capturedSeriesIndex,dataPointIndex:w.globals.capturedDataPointIndex});if(e.type==='mousemove'||e.type==='touchmove'){if(typeof w.config.chart.events.mouseMove==='function'){w.config.chart.events.mouseMove(e,me,opts);}}else if(e.type==='mouseleave'||e.type==='touchleave'){if(typeof w.config.chart.events.mouseLeave==='function'){w.config.chart.events.mouseLeave(e,me,opts);}}else if(e.type==='mouseup'&&e.which===1||e.type==='touchend'){if(typeof w.config.chart.events.click==='function'){w.config.chart.events.click(e,me,opts);}me.ctx.events.fireEvent('click',[e,me,opts]);}},{capture:false,passive:true});});this.ctx.eventList.forEach(function(event){w.globals.dom.baseEl.addEventListener(event,_this.documentEvent,{passive:true});});this.ctx.core.setupBrushHandler();}},{key:"documentEvent",value:function documentEvent(e){var w=this.w;var target=e.target.className;if(e.type==='click'){var elMenu=w.globals.dom.baseEl.querySelector('.apexcharts-menu');if(elMenu&&elMenu.classList.contains('apexcharts-menu-open')&&target!=='apexcharts-menu-icon'){elMenu.classList.remove('apexcharts-menu-open');}}w.globals.clientX=e.type==='touchmove'?e.touches[0].clientX:e.clientX;w.globals.clientY=e.type==='touchmove'?e.touches[0].clientY:e.clientY;}}]);return Events;}();var Localization=/*#__PURE__*/function(){function Localization(ctx){_classCallCheck(this,Localization);this.ctx=ctx;this.w=ctx.w;}_createClass(Localization,[{key:"setCurrentLocaleValues",value:function setCurrentLocaleValues(localeName){var locales=this.w.config.chart.locales;// check if user has specified locales in global Apex variable
// if yes - then extend those with local chart's locale
if(window.Apex.chart&&window.Apex.chart.locales&&window.Apex.chart.locales.length>0){locales=this.w.config.chart.locales.concat(window.Apex.chart.locales);}// find the locale from the array of locales which user has set (either by chart.defaultLocale or by calling setLocale() method.)
var selectedLocale=locales.filter(function(c){return c.name===localeName;})[0];if(selectedLocale){// create a complete locale object by extending defaults so you don't get undefined errors.
var ret=Utils$1.extend(en,selectedLocale);// store these locale options in global var for ease access
this.w.globals.locale=ret.options;}else{throw new Error('Wrong locale name provided. Please make sure you set the correct locale name in options');}}}]);return Localization;}();var Axes=/*#__PURE__*/function(){function Axes(ctx){_classCallCheck(this,Axes);this.ctx=ctx;this.w=ctx.w;}_createClass(Axes,[{key:"drawAxis",value:function drawAxis(type,elgrid){var _this=this;var gl=this.w.globals;var cnf=this.w.config;var xAxis=new XAxis(this.ctx,elgrid);var yAxis=new YAxis(this.ctx,elgrid);if(gl.axisCharts&&type!=='radar'){var elXaxis,elYaxis;if(gl.isBarHorizontal){elYaxis=yAxis.drawYaxisInversed(0);elXaxis=xAxis.drawXaxisInversed(0);gl.dom.elGraphical.add(elXaxis);gl.dom.elGraphical.add(elYaxis);}else{elXaxis=xAxis.drawXaxis();gl.dom.elGraphical.add(elXaxis);cnf.yaxis.map(function(yaxe,index){if(gl.ignoreYAxisIndexes.indexOf(index)===-1){elYaxis=yAxis.drawYaxis(index);gl.dom.Paper.add(elYaxis);if(_this.w.config.grid.position==='back'){var inner=gl.dom.Paper.children()[1];inner.remove();gl.dom.Paper.add(inner);}}});}}}}]);return Axes;}();var Crosshairs=/*#__PURE__*/function(){function Crosshairs(ctx){_classCallCheck(this,Crosshairs);this.ctx=ctx;this.w=ctx.w;}_createClass(Crosshairs,[{key:"drawXCrosshairs",value:function drawXCrosshairs(){var w=this.w;var graphics=new Graphics(this.ctx);var filters=new Filters(this.ctx);var crosshairGradient=w.config.xaxis.crosshairs.fill.gradient;var crosshairShadow=w.config.xaxis.crosshairs.dropShadow;var fillType=w.config.xaxis.crosshairs.fill.type;var gradientFrom=crosshairGradient.colorFrom;var gradientTo=crosshairGradient.colorTo;var opacityFrom=crosshairGradient.opacityFrom;var opacityTo=crosshairGradient.opacityTo;var stops=crosshairGradient.stops;var shadow='none';var dropShadow=crosshairShadow.enabled;var shadowLeft=crosshairShadow.left;var shadowTop=crosshairShadow.top;var shadowBlur=crosshairShadow.blur;var shadowColor=crosshairShadow.color;var shadowOpacity=crosshairShadow.opacity;var xcrosshairsFill=w.config.xaxis.crosshairs.fill.color;if(w.config.xaxis.crosshairs.show){if(fillType==='gradient'){xcrosshairsFill=graphics.drawGradient('vertical',gradientFrom,gradientTo,opacityFrom,opacityTo,null,stops,null);}var xcrosshairs=graphics.drawRect();if(w.config.xaxis.crosshairs.width===1){// to prevent drawing 2 lines, convert rect to line
xcrosshairs=graphics.drawLine();}var gridHeight=w.globals.gridHeight;if(!Utils$1.isNumber(gridHeight)||gridHeight<0){gridHeight=0;}var crosshairsWidth=w.config.xaxis.crosshairs.width;if(!Utils$1.isNumber(crosshairsWidth)||crosshairsWidth<0){crosshairsWidth=0;}xcrosshairs.attr({class:'apexcharts-xcrosshairs',x:0,y:0,y2:gridHeight,width:crosshairsWidth,height:gridHeight,fill:xcrosshairsFill,filter:shadow,'fill-opacity':w.config.xaxis.crosshairs.opacity,stroke:w.config.xaxis.crosshairs.stroke.color,'stroke-width':w.config.xaxis.crosshairs.stroke.width,'stroke-dasharray':w.config.xaxis.crosshairs.stroke.dashArray});if(dropShadow){xcrosshairs=filters.dropShadow(xcrosshairs,{left:shadowLeft,top:shadowTop,blur:shadowBlur,color:shadowColor,opacity:shadowOpacity});}w.globals.dom.elGraphical.add(xcrosshairs);}}},{key:"drawYCrosshairs",value:function drawYCrosshairs(){var w=this.w;var graphics=new Graphics(this.ctx);var crosshair=w.config.yaxis[0].crosshairs;var offX=w.globals.barPadForNumericAxis;if(w.config.yaxis[0].crosshairs.show){var ycrosshairs=graphics.drawLine(-offX,0,w.globals.gridWidth+offX,0,crosshair.stroke.color,crosshair.stroke.dashArray,crosshair.stroke.width);ycrosshairs.attr({class:'apexcharts-ycrosshairs'});w.globals.dom.elGraphical.add(ycrosshairs);}// draw an invisible crosshair to help in positioning the yaxis tooltip
var ycrosshairsHidden=graphics.drawLine(-offX,0,w.globals.gridWidth+offX,0,crosshair.stroke.color,0,0);ycrosshairsHidden.attr({class:'apexcharts-ycrosshairs-hidden'});w.globals.dom.elGraphical.add(ycrosshairsHidden);}}]);return Crosshairs;}();/**
   * ApexCharts Responsive Class to override options for different screen sizes.
   *
   * @module Responsive
   **/var Responsive=/*#__PURE__*/function(){function Responsive(ctx){_classCallCheck(this,Responsive);this.ctx=ctx;this.w=ctx.w;}// the opts parameter if not null has to be set overriding everything
// as the opts is set by user externally
_createClass(Responsive,[{key:"checkResponsiveConfig",value:function checkResponsiveConfig(opts){var _this=this;var w=this.w;var cnf=w.config;// check if responsive config exists
if(cnf.responsive.length===0)return;var res=cnf.responsive.slice();res.sort(function(a,b){return a.breakpoint>b.breakpoint?1:b.breakpoint>a.breakpoint?-1:0;}).reverse();var config=new Config({});var iterateResponsiveOptions=function iterateResponsiveOptions(){var newOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var largestBreakpoint=res[0].breakpoint;var width=window.innerWidth>0?window.innerWidth:screen.width;if(width>largestBreakpoint){var options=CoreUtils.extendArrayProps(config,w.globals.initialConfig,w);newOptions=Utils$1.extend(options,newOptions);newOptions=Utils$1.extend(w.config,newOptions);_this.overrideResponsiveOptions(newOptions);}else{for(var i=0;i<res.length;i++){if(width<res[i].breakpoint){newOptions=CoreUtils.extendArrayProps(config,res[i].options,w);newOptions=Utils$1.extend(w.config,newOptions);_this.overrideResponsiveOptions(newOptions);}}}};if(opts){var options=CoreUtils.extendArrayProps(config,opts,w);options=Utils$1.extend(w.config,options);options=Utils$1.extend(options,opts);iterateResponsiveOptions(options);}else{iterateResponsiveOptions({});}}},{key:"overrideResponsiveOptions",value:function overrideResponsiveOptions(newOptions){var newConfig=new Config(newOptions).init({responsiveOverride:true});this.w.config=newConfig;}}]);return Responsive;}();/**
   * ApexCharts Theme Class for setting the colors and palettes.
   *
   * @module Theme
   **/var Theme=/*#__PURE__*/function(){function Theme(ctx){_classCallCheck(this,Theme);this.ctx=ctx;this.colors=[];this.w=ctx.w;var w=this.w;this.isColorFn=false;this.isHeatmapDistributed=w.config.chart.type==='treemap'&&w.config.plotOptions.treemap.distributed||w.config.chart.type==='heatmap'&&w.config.plotOptions.heatmap.distributed;this.isBarDistributed=w.config.plotOptions.bar.distributed&&(w.config.chart.type==='bar'||w.config.chart.type==='rangeBar');}_createClass(Theme,[{key:"init",value:function init(){this.setDefaultColors();}},{key:"setDefaultColors",value:function setDefaultColors(){var _w$config$colors,_this=this;var w=this.w;var utils=new Utils$1();w.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(w.config.theme.mode));if(w.config.colors===undefined||((_w$config$colors=w.config.colors)===null||_w$config$colors===void 0?void 0:_w$config$colors.length)===0){w.globals.colors=this.predefined();}else{w.globals.colors=w.config.colors;// if user provided a function in colors, we need to eval here
if(Array.isArray(w.config.colors)&&w.config.colors.length>0&&typeof w.config.colors[0]==='function'){w.globals.colors=w.config.series.map(function(s,i){var c=w.config.colors[i];if(!c)c=w.config.colors[0];if(typeof c==='function'){_this.isColorFn=true;return c({value:w.globals.axisCharts?w.globals.series[i][0]?w.globals.series[i][0]:0:w.globals.series[i],seriesIndex:i,dataPointIndex:i,w:w});}return c;});}}// user defined colors in series array
w.globals.seriesColors.map(function(c,i){if(c){w.globals.colors[i]=c;}});if(w.config.theme.monochrome.enabled){var monoArr=[];var glsCnt=w.globals.series.length;if(this.isBarDistributed||this.isHeatmapDistributed){glsCnt=w.globals.series[0].length*w.globals.series.length;}var mainColor=w.config.theme.monochrome.color;var part=1/(glsCnt/w.config.theme.monochrome.shadeIntensity);var shade=w.config.theme.monochrome.shadeTo;var percent=0;for(var gsl=0;gsl<glsCnt;gsl++){var newColor=void 0;if(shade==='dark'){newColor=utils.shadeColor(percent*-1,mainColor);percent=percent+part;}else{newColor=utils.shadeColor(percent,mainColor);percent=percent+part;}monoArr.push(newColor);}w.globals.colors=monoArr.slice();}var defaultColors=w.globals.colors.slice();// if user specified fewer colors than no. of series, push the same colors again
this.pushExtraColors(w.globals.colors);var colorTypes=['fill','stroke'];colorTypes.forEach(function(c){if(w.config[c].colors===undefined){w.globals[c].colors=_this.isColorFn?w.config.colors:defaultColors;}else{w.globals[c].colors=w.config[c].colors.slice();}_this.pushExtraColors(w.globals[c].colors);});if(w.config.dataLabels.style.colors===undefined){w.globals.dataLabels.style.colors=defaultColors;}else{w.globals.dataLabels.style.colors=w.config.dataLabels.style.colors.slice();}this.pushExtraColors(w.globals.dataLabels.style.colors,50);if(w.config.plotOptions.radar.polygons.fill.colors===undefined){w.globals.radarPolygons.fill.colors=[w.config.theme.mode==='dark'?'#424242':'none'];}else{w.globals.radarPolygons.fill.colors=w.config.plotOptions.radar.polygons.fill.colors.slice();}this.pushExtraColors(w.globals.radarPolygons.fill.colors,20);// The point colors
if(w.config.markers.colors===undefined){w.globals.markers.colors=defaultColors;}else{w.globals.markers.colors=w.config.markers.colors.slice();}this.pushExtraColors(w.globals.markers.colors);}// When the number of colors provided is less than the number of series, this method
// will push same colors to the list
// params:
// distributed is only valid for distributed column/bar charts
},{key:"pushExtraColors",value:function pushExtraColors(colorSeries,length){var distributed=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var w=this.w;var len=length||w.globals.series.length;if(distributed===null){distributed=this.isBarDistributed||this.isHeatmapDistributed||w.config.chart.type==='heatmap'&&w.config.plotOptions.heatmap.colorScale.inverse;}if(distributed&&w.globals.series.length){len=w.globals.series[w.globals.maxValsInArrayIndex].length*w.globals.series.length;}if(colorSeries.length<len){var diff=len-colorSeries.length;for(var i=0;i<diff;i++){colorSeries.push(colorSeries[i]);}}}},{key:"updateThemeOptions",value:function updateThemeOptions(options){options.chart=options.chart||{};options.tooltip=options.tooltip||{};var mode=options.theme.mode||'light';var palette=options.theme.palette?options.theme.palette:mode==='dark'?'palette4':'palette1';var foreColor=options.chart.foreColor?options.chart.foreColor:mode==='dark'?'#f6f7f8':'#373d3f';options.tooltip.theme=mode;options.chart.foreColor=foreColor;options.theme.palette=palette;return options;}},{key:"predefined",value:function predefined(){var palette=this.w.config.theme.palette;// D6E3F8, FCEFEF, DCE0D9, A5978B, EDDDD4, D6E3F8, FEF5EF
switch(palette){case'palette1':this.colors=['#008FFB','#00E396','#FEB019','#FF4560','#775DD0'];break;case'palette2':this.colors=['#3f51b5','#03a9f4','#4caf50','#f9ce1d','#FF9800'];break;case'palette3':this.colors=['#33b2df','#546E7A','#d4526e','#13d8aa','#A5978B'];break;case'palette4':this.colors=['#4ecdc4','#c7f464','#81D4FA','#fd6a6a','#546E7A'];break;case'palette5':this.colors=['#2b908f','#f9a3a4','#90ee7e','#fa4443','#69d2e7'];break;case'palette6':this.colors=['#449DD1','#F86624','#EA3546','#662E9B','#C5D86D'];break;case'palette7':this.colors=['#D7263D','#1B998B','#2E294E','#F46036','#E2C044'];break;case'palette8':this.colors=['#662E9B','#F86624','#F9C80E','#EA3546','#43BCCD'];break;case'palette9':this.colors=['#5C4742','#A5978B','#8D5B4C','#5A2A27','#C4BBAF'];break;case'palette10':this.colors=['#A300D6','#7D02EB','#5653FE','#2983FF','#00B1F2'];break;default:this.colors=['#008FFB','#00E396','#FEB019','#FF4560','#775DD0'];break;}return this.colors;}}]);return Theme;}();var TitleSubtitle=/*#__PURE__*/function(){function TitleSubtitle(ctx){_classCallCheck(this,TitleSubtitle);this.ctx=ctx;this.w=ctx.w;}_createClass(TitleSubtitle,[{key:"draw",value:function draw(){this.drawTitleSubtitle('title');this.drawTitleSubtitle('subtitle');}},{key:"drawTitleSubtitle",value:function drawTitleSubtitle(type){var w=this.w;var tsConfig=type==='title'?w.config.title:w.config.subtitle;var x=w.globals.svgWidth/2;var y=tsConfig.offsetY;var textAnchor='middle';if(tsConfig.align==='left'){x=10;textAnchor='start';}else if(tsConfig.align==='right'){x=w.globals.svgWidth-10;textAnchor='end';}x=x+tsConfig.offsetX;y=y+parseInt(tsConfig.style.fontSize,10)+tsConfig.margin/2;if(tsConfig.text!==undefined){var graphics=new Graphics(this.ctx);var titleText=graphics.drawText({x:x,y:y,text:tsConfig.text,textAnchor:textAnchor,fontSize:tsConfig.style.fontSize,fontFamily:tsConfig.style.fontFamily,fontWeight:tsConfig.style.fontWeight,foreColor:tsConfig.style.color,opacity:1});titleText.node.setAttribute('class',"apexcharts-".concat(type,"-text"));w.globals.dom.Paper.add(titleText);}}}]);return TitleSubtitle;}();var Helpers$3=/*#__PURE__*/function(){function Helpers(dCtx){_classCallCheck(this,Helpers);this.w=dCtx.w;this.dCtx=dCtx;}/**
     * Get Chart Title/Subtitle Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/_createClass(Helpers,[{key:"getTitleSubtitleCoords",value:function getTitleSubtitleCoords(type){var w=this.w;var width=0;var height=0;var floating=type==='title'?w.config.title.floating:w.config.subtitle.floating;var el=w.globals.dom.baseEl.querySelector(".apexcharts-".concat(type,"-text"));if(el!==null&&!floating){var coord=el.getBoundingClientRect();width=coord.width;height=w.globals.axisCharts?coord.height+5:coord.height;}return{width:width,height:height};}},{key:"getLegendsRect",value:function getLegendsRect(){var w=this.w;var elLegendWrap=w.globals.dom.elLegendWrap;if(!w.config.legend.height&&(w.config.legend.position==='top'||w.config.legend.position==='bottom')){// avoid legend to take up all the space
elLegendWrap.style.maxHeight=w.globals.svgHeight/2+'px';}var lgRect=Object.assign({},Utils$1.getBoundingClientRect(elLegendWrap));if(elLegendWrap!==null&&!w.config.legend.floating&&w.config.legend.show){this.dCtx.lgRect={x:lgRect.x,y:lgRect.y,height:lgRect.height,width:lgRect.height===0?0:lgRect.width};}else{this.dCtx.lgRect={x:0,y:0,height:0,width:0};}// if legend takes up all of the chart space, we need to restrict it.
if(w.config.legend.position==='left'||w.config.legend.position==='right'){if(this.dCtx.lgRect.width*1.5>w.globals.svgWidth){this.dCtx.lgRect.width=w.globals.svgWidth/1.5;}}return this.dCtx.lgRect;}},{key:"getLargestStringFromMultiArr",value:function getLargestStringFromMultiArr(val,arr){var w=this.w;var valArr=val;if(w.globals.isMultiLineX){// if the xaxis labels has multiline texts (array)
var maxArrs=arr.map(function(xl,idx){return Array.isArray(xl)?xl.length:1;});var maxArrLen=Math.max.apply(Math,_toConsumableArray(maxArrs));var maxArrIndex=maxArrs.indexOf(maxArrLen);valArr=arr[maxArrIndex];}return valArr;}}]);return Helpers;}();var DimXAxis=/*#__PURE__*/function(){function DimXAxis(dCtx){_classCallCheck(this,DimXAxis);this.w=dCtx.w;this.dCtx=dCtx;}/**
     * Get X Axis Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/_createClass(DimXAxis,[{key:"getxAxisLabelsCoords",value:function getxAxisLabelsCoords(){var w=this.w;var xaxisLabels=w.globals.labels.slice();if(w.config.xaxis.convertedCatToNumeric&&xaxisLabels.length===0){xaxisLabels=w.globals.categoryLabels;}var rect;if(w.globals.timescaleLabels.length>0){var coords=this.getxAxisTimeScaleLabelsCoords();rect={width:coords.width,height:coords.height};w.globals.rotateXLabels=false;}else{this.dCtx.lgWidthForSideLegends=(w.config.legend.position==='left'||w.config.legend.position==='right')&&!w.config.legend.floating?this.dCtx.lgRect.width:0;// get the longest string from the labels array and also apply label formatter
var xlbFormatter=w.globals.xLabelFormatter;// prevent changing xaxisLabels to avoid issues in multi-yaxes - fix #522
var val=Utils$1.getLargestStringFromArr(xaxisLabels);var valArr=this.dCtx.dimHelpers.getLargestStringFromMultiArr(val,xaxisLabels);// the labels gets changed for bar charts
if(w.globals.isBarHorizontal){val=w.globals.yAxisScale[0].result.reduce(function(a,b){return a.length>b.length?a:b;},0);valArr=val;}var xFormat=new Formatters(this.dCtx.ctx);var timestamp=val;val=xFormat.xLabelFormat(xlbFormatter,val,timestamp,{i:undefined,dateFormatter:new DateTime(this.dCtx.ctx).formatDate,w:w});valArr=xFormat.xLabelFormat(xlbFormatter,valArr,timestamp,{i:undefined,dateFormatter:new DateTime(this.dCtx.ctx).formatDate,w:w});if(w.config.xaxis.convertedCatToNumeric&&typeof val==='undefined'||String(val).trim()===''){val='1';valArr=val;}var graphics=new Graphics(this.dCtx.ctx);var xLabelrect=graphics.getTextRects(val,w.config.xaxis.labels.style.fontSize);var xArrLabelrect=xLabelrect;if(val!==valArr){xArrLabelrect=graphics.getTextRects(valArr,w.config.xaxis.labels.style.fontSize);}rect={width:xLabelrect.width>=xArrLabelrect.width?xLabelrect.width:xArrLabelrect.width,height:xLabelrect.height>=xArrLabelrect.height?xLabelrect.height:xArrLabelrect.height};if(rect.width*xaxisLabels.length>w.globals.svgWidth-this.dCtx.lgWidthForSideLegends-this.dCtx.yAxisWidth-this.dCtx.gridPad.left-this.dCtx.gridPad.right&&w.config.xaxis.labels.rotate!==0||w.config.xaxis.labels.rotateAlways){if(!w.globals.isBarHorizontal){w.globals.rotateXLabels=true;var getRotatedTextRects=function getRotatedTextRects(text){return graphics.getTextRects(text,w.config.xaxis.labels.style.fontSize,w.config.xaxis.labels.style.fontFamily,"rotate(".concat(w.config.xaxis.labels.rotate," 0 0)"),false);};xLabelrect=getRotatedTextRects(val);if(val!==valArr){xArrLabelrect=getRotatedTextRects(valArr);}rect.height=(xLabelrect.height>xArrLabelrect.height?xLabelrect.height:xArrLabelrect.height)/1.5;rect.width=xLabelrect.width>xArrLabelrect.width?xLabelrect.width:xArrLabelrect.width;}}else{w.globals.rotateXLabels=false;}}if(!w.config.xaxis.labels.show){rect={width:0,height:0};}return{width:rect.width,height:rect.height};}/**
       * Get X Axis Label Group height
       * @memberof Dimensions
       * @return {{width, height}}
       */},{key:"getxAxisGroupLabelsCoords",value:function getxAxisGroupLabelsCoords(){var _w$config$xaxis$group;var w=this.w;if(!w.globals.hasXaxisGroups){return{width:0,height:0};}var fontSize=((_w$config$xaxis$group=w.config.xaxis.group.style)===null||_w$config$xaxis$group===void 0?void 0:_w$config$xaxis$group.fontSize)||w.config.xaxis.labels.style.fontSize;var xaxisLabels=w.globals.groups.map(function(g){return g.title;});var rect;// prevent changing xaxisLabels to avoid issues in multi-yaxes - fix #522
var val=Utils$1.getLargestStringFromArr(xaxisLabels);var valArr=this.dCtx.dimHelpers.getLargestStringFromMultiArr(val,xaxisLabels);var graphics=new Graphics(this.dCtx.ctx);var xLabelrect=graphics.getTextRects(val,fontSize);var xArrLabelrect=xLabelrect;if(val!==valArr){xArrLabelrect=graphics.getTextRects(valArr,fontSize);}rect={width:xLabelrect.width>=xArrLabelrect.width?xLabelrect.width:xArrLabelrect.width,height:xLabelrect.height>=xArrLabelrect.height?xLabelrect.height:xArrLabelrect.height};if(!w.config.xaxis.labels.show){rect={width:0,height:0};}return{width:rect.width,height:rect.height};}/**
       * Get X Axis Title Dimensions
       * @memberof Dimensions
       * @return {{width, height}}
       **/},{key:"getxAxisTitleCoords",value:function getxAxisTitleCoords(){var w=this.w;var width=0;var height=0;if(w.config.xaxis.title.text!==undefined){var graphics=new Graphics(this.dCtx.ctx);var rect=graphics.getTextRects(w.config.xaxis.title.text,w.config.xaxis.title.style.fontSize);width=rect.width;height=rect.height;}return{width:width,height:height};}},{key:"getxAxisTimeScaleLabelsCoords",value:function getxAxisTimeScaleLabelsCoords(){var w=this.w;var rect;this.dCtx.timescaleLabels=w.globals.timescaleLabels.slice();var labels=this.dCtx.timescaleLabels.map(function(label){return label.value;});//  get the longest string from the labels array and also apply label formatter to it
var val=labels.reduce(function(a,b){// if undefined, maybe user didn't pass the datetime(x) values
if(typeof a==='undefined'){console.error('You have possibly supplied invalid Date format. Please supply a valid JavaScript Date');return 0;}else{return a.length>b.length?a:b;}},0);var graphics=new Graphics(this.dCtx.ctx);rect=graphics.getTextRects(val,w.config.xaxis.labels.style.fontSize);var totalWidthRotated=rect.width*1.05*labels.length;if(totalWidthRotated>w.globals.gridWidth&&w.config.xaxis.labels.rotate!==0){w.globals.overlappingXLabels=true;}return rect;}// In certain cases, the last labels gets cropped in xaxis.
// Hence, we add some additional padding based on the label length to avoid the last label being cropped or we don't draw it at all
},{key:"additionalPaddingXLabels",value:function additionalPaddingXLabels(xaxisLabelCoords){var _this=this;var w=this.w;var gl=w.globals;var cnf=w.config;var xtype=cnf.xaxis.type;var lbWidth=xaxisLabelCoords.width;gl.skipLastTimelinelabel=false;gl.skipFirstTimelinelabel=false;var isBarOpposite=w.config.yaxis[0].opposite&&w.globals.isBarHorizontal;var isCollapsed=function isCollapsed(i){return gl.collapsedSeriesIndices.indexOf(i)!==-1;};var rightPad=function rightPad(yaxe){if(_this.dCtx.timescaleLabels&&_this.dCtx.timescaleLabels.length){// for timeline labels, we take the last label and check if it exceeds gridWidth
var firstimescaleLabel=_this.dCtx.timescaleLabels[0];var lastTimescaleLabel=_this.dCtx.timescaleLabels[_this.dCtx.timescaleLabels.length-1];var lastLabelPosition=lastTimescaleLabel.position+lbWidth/1.75-_this.dCtx.yAxisWidthRight;var firstLabelPosition=firstimescaleLabel.position-lbWidth/1.75+_this.dCtx.yAxisWidthLeft;var lgRightRectWidth=w.config.legend.position==='right'&&_this.dCtx.lgRect.width>0?_this.dCtx.lgRect.width:0;if(lastLabelPosition>gl.svgWidth-gl.translateX-lgRightRectWidth){gl.skipLastTimelinelabel=true;}if(firstLabelPosition<-((!yaxe.show||yaxe.floating)&&(cnf.chart.type==='bar'||cnf.chart.type==='candlestick'||cnf.chart.type==='rangeBar'||cnf.chart.type==='boxPlot')?lbWidth/1.75:10)){gl.skipFirstTimelinelabel=true;}}else if(xtype==='datetime'){// If user has enabled DateTime, but uses own's formatter
if(_this.dCtx.gridPad.right<lbWidth&&!gl.rotateXLabels){gl.skipLastTimelinelabel=true;}}else if(xtype!=='datetime'){if(_this.dCtx.gridPad.right<lbWidth/2-_this.dCtx.yAxisWidthRight&&!gl.rotateXLabels&&!w.config.xaxis.labels.trim&&(w.config.xaxis.tickPlacement!=='between'||w.globals.isBarHorizontal)){_this.dCtx.xPadRight=lbWidth/2+1;}}};var padYAxe=function padYAxe(yaxe,i){if(cnf.yaxis.length>1&&isCollapsed(i))return;rightPad(yaxe);};cnf.yaxis.forEach(function(yaxe,i){if(isBarOpposite){if(_this.dCtx.gridPad.left<lbWidth){_this.dCtx.xPadLeft=lbWidth/2+1;}_this.dCtx.xPadRight=lbWidth/2+1;}else{padYAxe(yaxe,i);}});}}]);return DimXAxis;}();var DimYAxis=/*#__PURE__*/function(){function DimYAxis(dCtx){_classCallCheck(this,DimYAxis);this.w=dCtx.w;this.dCtx=dCtx;}/**
     * Get Y Axis Dimensions
     * @memberof Dimensions
     * @return {{width, height}}
     **/_createClass(DimYAxis,[{key:"getyAxisLabelsCoords",value:function getyAxisLabelsCoords(){var _this=this;var w=this.w;var width=0;var height=0;var ret=[];var labelPad=10;var axesUtils=new AxesUtils(this.dCtx.ctx);w.config.yaxis.map(function(yaxe,index){var formatterArgs={seriesIndex:index,dataPointIndex:-1,w:w};var yS=w.globals.yAxisScale[index];var yAxisMinWidth=0;if(!axesUtils.isYAxisHidden(index)&&yaxe.labels.show&&yaxe.labels.minWidth!==undefined)yAxisMinWidth=yaxe.labels.minWidth;if(!axesUtils.isYAxisHidden(index)&&yaxe.labels.show&&yS.result.length){var lbFormatter=w.globals.yLabelFormatters[index];var minV=yS.niceMin===Number.MIN_VALUE?0:yS.niceMin;var val=yS.result.reduce(function(acc,curr){var _String,_String2;return((_String=String(lbFormatter(acc,formatterArgs)))===null||_String===void 0?void 0:_String.length)>((_String2=String(lbFormatter(curr,formatterArgs)))===null||_String2===void 0?void 0:_String2.length)?acc:curr;},minV);val=lbFormatter(val,formatterArgs);// the second parameter -1 is the index of tick which user can use in the formatter
var valArr=val;// if user has specified a custom formatter, and the result is null or empty, we need to discard the formatter and take the value as it is.
if(typeof val==='undefined'||val.length===0){val=yS.niceMax;}if(w.globals.isBarHorizontal){labelPad=0;var barYaxisLabels=w.globals.labels.slice();//  get the longest string from the labels array and also apply label formatter to it
val=Utils$1.getLargestStringFromArr(barYaxisLabels);val=lbFormatter(val,{seriesIndex:index,dataPointIndex:-1,w:w});valArr=_this.dCtx.dimHelpers.getLargestStringFromMultiArr(val,barYaxisLabels);}var graphics=new Graphics(_this.dCtx.ctx);var rotateStr='rotate('.concat(yaxe.labels.rotate,' 0 0)');var rect=graphics.getTextRects(val,yaxe.labels.style.fontSize,yaxe.labels.style.fontFamily,rotateStr,false);var arrLabelrect=rect;if(val!==valArr){arrLabelrect=graphics.getTextRects(valArr,yaxe.labels.style.fontSize,yaxe.labels.style.fontFamily,rotateStr,false);}ret.push({width:(yAxisMinWidth>arrLabelrect.width||yAxisMinWidth>rect.width?yAxisMinWidth:arrLabelrect.width>rect.width?arrLabelrect.width:rect.width)+labelPad,height:arrLabelrect.height>rect.height?arrLabelrect.height:rect.height});}else{ret.push({width:width,height:height});}});return ret;}/**
       * Get Y Axis Dimensions
       * @memberof Dimensions
       * @return {{width, height}}
       **/},{key:"getyAxisTitleCoords",value:function getyAxisTitleCoords(){var _this2=this;var w=this.w;var ret=[];w.config.yaxis.map(function(yaxe,index){if(yaxe.show&&yaxe.title.text!==undefined){var graphics=new Graphics(_this2.dCtx.ctx);var rotateStr='rotate('.concat(yaxe.title.rotate,' 0 0)');var rect=graphics.getTextRects(yaxe.title.text,yaxe.title.style.fontSize,yaxe.title.style.fontFamily,rotateStr,false);ret.push({width:rect.width,height:rect.height});}else{ret.push({width:0,height:0});}});return ret;}},{key:"getTotalYAxisWidth",value:function getTotalYAxisWidth(){var w=this.w;var yAxisWidth=0;var yAxisWidthLeft=0;var yAxisWidthRight=0;var padding=w.globals.yAxisScale.length>1?10:0;var axesUtils=new AxesUtils(this.dCtx.ctx);var isHiddenYAxis=function isHiddenYAxis(index){return w.globals.ignoreYAxisIndexes.indexOf(index)>-1;};var padForLabelTitle=function padForLabelTitle(coord,index){var floating=w.config.yaxis[index].floating;var width=0;if(coord.width>0&&!floating){width=coord.width+padding;if(isHiddenYAxis(index)){width=width-coord.width-padding;}}else{width=floating||axesUtils.isYAxisHidden(index)?0:5;}w.config.yaxis[index].opposite?yAxisWidthRight=yAxisWidthRight+width:yAxisWidthLeft=yAxisWidthLeft+width;yAxisWidth=yAxisWidth+width;};w.globals.yLabelsCoords.map(function(yLabelCoord,index){padForLabelTitle(yLabelCoord,index);});w.globals.yTitleCoords.map(function(yTitleCoord,index){padForLabelTitle(yTitleCoord,index);});if(w.globals.isBarHorizontal&&!w.config.yaxis[0].floating){yAxisWidth=w.globals.yLabelsCoords[0].width+w.globals.yTitleCoords[0].width+15;}this.dCtx.yAxisWidthLeft=yAxisWidthLeft;this.dCtx.yAxisWidthRight=yAxisWidthRight;return yAxisWidth;}}]);return DimYAxis;}();var DimGrid=/*#__PURE__*/function(){function DimGrid(dCtx){_classCallCheck(this,DimGrid);this.w=dCtx.w;this.dCtx=dCtx;}_createClass(DimGrid,[{key:"gridPadForColumnsInNumericAxis",value:function gridPadForColumnsInNumericAxis(gridWidth){var w=this.w;if(w.globals.noData||w.globals.allSeriesCollapsed){return 0;}var hasBar=function hasBar(type){return type==='bar'||type==='rangeBar'||type==='candlestick'||type==='boxPlot';};var type=w.config.chart.type;var barWidth=0;var seriesLen=hasBar(type)?w.config.series.length:1;if(w.globals.comboBarCount>0){seriesLen=w.globals.comboBarCount;}w.globals.collapsedSeries.forEach(function(c){if(hasBar(c.type)){seriesLen=seriesLen-1;}});if(w.config.chart.stacked){seriesLen=1;}var barsPresent=hasBar(type)||w.globals.comboBarCount>0;if(barsPresent&&w.globals.isXNumeric&&!w.globals.isBarHorizontal&&seriesLen>0){var xRatio=0;var xRange=Math.abs(w.globals.initialMaxX-w.globals.initialMinX);if(xRange<=3){xRange=w.globals.dataPoints;}xRatio=xRange/gridWidth;var xDivision;// max barwidth should be equal to minXDiff to avoid overlap
if(w.globals.minXDiff&&w.globals.minXDiff/xRatio>0){xDivision=w.globals.minXDiff/xRatio;}if(xDivision>gridWidth/2){xDivision=xDivision/2;}// Here, barWidth is assumed to be the width occupied by a group of bars.
// There will be one bar in the group for each series plotted.
// Note: This version of the following math is different to that over in
// Helpers.js. Don't assume they should be the same. Over there,
// xDivision is computed differently and it's used on different charts.
// They were the same, but the solution to
// https://github.com/apexcharts/apexcharts.js/issues/4178
// was to remove the division by seriesLen.
barWidth=xDivision*parseInt(w.config.plotOptions.bar.columnWidth,10)/100;if(barWidth<1){barWidth=1;}w.globals.barPadForNumericAxis=barWidth;}return barWidth;}},{key:"gridPadFortitleSubtitle",value:function gridPadFortitleSubtitle(){var _this=this;var w=this.w;var gl=w.globals;var gridShrinkOffset=this.dCtx.isSparkline||!w.globals.axisCharts?0:10;var titleSubtitle=['title','subtitle'];titleSubtitle.forEach(function(t){if(w.config[t].text!==undefined){gridShrinkOffset+=w.config[t].margin;}else{gridShrinkOffset+=_this.dCtx.isSparkline||!w.globals.axisCharts?0:5;}});if(w.config.legend.show&&w.config.legend.position==='bottom'&&!w.config.legend.floating&&!w.globals.axisCharts){gridShrinkOffset+=10;}var titleCoords=this.dCtx.dimHelpers.getTitleSubtitleCoords('title');var subtitleCoords=this.dCtx.dimHelpers.getTitleSubtitleCoords('subtitle');gl.gridHeight=gl.gridHeight-titleCoords.height-subtitleCoords.height-gridShrinkOffset;gl.translateY=gl.translateY+titleCoords.height+subtitleCoords.height+gridShrinkOffset;}},{key:"setGridXPosForDualYAxis",value:function setGridXPosForDualYAxis(yTitleCoords,yaxisLabelCoords){var w=this.w;var axesUtils=new AxesUtils(this.dCtx.ctx);w.config.yaxis.map(function(yaxe,index){if(w.globals.ignoreYAxisIndexes.indexOf(index)===-1&&!yaxe.floating&&!axesUtils.isYAxisHidden(index)){if(yaxe.opposite){w.globals.translateX=w.globals.translateX-(yaxisLabelCoords[index].width+yTitleCoords[index].width)-parseInt(w.config.yaxis[index].labels.style.fontSize,10)/1.2-12;}// fixes apexcharts.js#1599
if(w.globals.translateX<2){w.globals.translateX=2;}}});}}]);return DimGrid;}();/**
   * ApexCharts Dimensions Class for calculating rects of all elements that are drawn and will be drawn.
   *
   * @module Dimensions
   **/var Dimensions=/*#__PURE__*/function(){function Dimensions(ctx){_classCallCheck(this,Dimensions);this.ctx=ctx;this.w=ctx.w;this.lgRect={};this.yAxisWidth=0;this.yAxisWidthLeft=0;this.yAxisWidthRight=0;this.xAxisHeight=0;this.isSparkline=this.w.config.chart.sparkline.enabled;this.dimHelpers=new Helpers$3(this);this.dimYAxis=new DimYAxis(this);this.dimXAxis=new DimXAxis(this);this.dimGrid=new DimGrid(this);this.lgWidthForSideLegends=0;this.gridPad=this.w.config.grid.padding;this.xPadRight=0;this.xPadLeft=0;}/**
     * @memberof Dimensions
     * @param {object} w - chart context
     **/_createClass(Dimensions,[{key:"plotCoords",value:function plotCoords(){var _this=this;var w=this.w;var gl=w.globals;this.lgRect=this.dimHelpers.getLegendsRect();if(this.isSparkline){if(w.config.markers.discrete.length>0||w.config.markers.size>0){Object.entries(this.gridPad).forEach(function(_ref){var _ref2=_slicedToArray(_ref,2),k=_ref2[0],v=_ref2[1];_this.gridPad[k]=Math.max(v,_this.w.globals.markers.largestSize/1.5);});}this.gridPad.top=Math.max(w.config.stroke.width/2,this.gridPad.top);this.gridPad.bottom=Math.max(w.config.stroke.width/2,this.gridPad.bottom);}if(gl.axisCharts){// for line / area / scatter / column
this.setDimensionsForAxisCharts();}else{// for pie / donuts / circle
this.setDimensionsForNonAxisCharts();}this.dimGrid.gridPadFortitleSubtitle();// after calculating everything, apply padding set by user
gl.gridHeight=gl.gridHeight-this.gridPad.top-this.gridPad.bottom;gl.gridWidth=gl.gridWidth-this.gridPad.left-this.gridPad.right-this.xPadRight-this.xPadLeft;var barWidth=this.dimGrid.gridPadForColumnsInNumericAxis(gl.gridWidth);gl.gridWidth=gl.gridWidth-barWidth*2;gl.translateX=gl.translateX+this.gridPad.left+this.xPadLeft+(barWidth>0?barWidth+4:0);gl.translateY=gl.translateY+this.gridPad.top;}},{key:"setDimensionsForAxisCharts",value:function setDimensionsForAxisCharts(){var _this2=this;var w=this.w;var gl=w.globals;var yaxisLabelCoords=this.dimYAxis.getyAxisLabelsCoords();var yTitleCoords=this.dimYAxis.getyAxisTitleCoords();w.globals.yLabelsCoords=[];w.globals.yTitleCoords=[];w.config.yaxis.map(function(yaxe,index){// store the labels and titles coords in global vars
w.globals.yLabelsCoords.push({width:yaxisLabelCoords[index].width,index:index});w.globals.yTitleCoords.push({width:yTitleCoords[index].width,index:index});});this.yAxisWidth=this.dimYAxis.getTotalYAxisWidth();var xaxisLabelCoords=this.dimXAxis.getxAxisLabelsCoords();var xaxisGroupLabelCoords=this.dimXAxis.getxAxisGroupLabelsCoords();var xtitleCoords=this.dimXAxis.getxAxisTitleCoords();this.conditionalChecksForAxisCoords(xaxisLabelCoords,xtitleCoords,xaxisGroupLabelCoords);gl.translateXAxisY=w.globals.rotateXLabels?this.xAxisHeight/8:-4;gl.translateXAxisX=w.globals.rotateXLabels&&w.globals.isXNumeric&&w.config.xaxis.labels.rotate<=-45?-this.xAxisWidth/4:0;if(w.globals.isBarHorizontal){gl.rotateXLabels=false;gl.translateXAxisY=-1*(parseInt(w.config.xaxis.labels.style.fontSize,10)/1.5);}gl.translateXAxisY=gl.translateXAxisY+w.config.xaxis.labels.offsetY;gl.translateXAxisX=gl.translateXAxisX+w.config.xaxis.labels.offsetX;var yAxisWidth=this.yAxisWidth;var xAxisHeight=this.xAxisHeight;gl.xAxisLabelsHeight=this.xAxisHeight-xtitleCoords.height;gl.xAxisGroupLabelsHeight=gl.xAxisLabelsHeight-xaxisLabelCoords.height;gl.xAxisLabelsWidth=this.xAxisWidth;gl.xAxisHeight=this.xAxisHeight;var translateY=10;if(w.config.chart.type==='radar'||this.isSparkline){yAxisWidth=0;xAxisHeight=gl.goldenPadding;}if(this.isSparkline){this.lgRect={height:0,width:0};}if(this.isSparkline||w.config.chart.type==='treemap'){yAxisWidth=0;xAxisHeight=0;translateY=0;}if(!this.isSparkline){this.dimXAxis.additionalPaddingXLabels(xaxisLabelCoords);}var legendTopBottom=function legendTopBottom(){gl.translateX=yAxisWidth;gl.gridHeight=gl.svgHeight-_this2.lgRect.height-xAxisHeight-(!_this2.isSparkline&&w.config.chart.type!=='treemap'?w.globals.rotateXLabels?10:15:0);gl.gridWidth=gl.svgWidth-yAxisWidth;};if(w.config.xaxis.position==='top')translateY=gl.xAxisHeight-w.config.xaxis.axisTicks.height-5;switch(w.config.legend.position){case'bottom':gl.translateY=translateY;legendTopBottom();break;case'top':gl.translateY=this.lgRect.height+translateY;legendTopBottom();break;case'left':gl.translateY=translateY;gl.translateX=this.lgRect.width+yAxisWidth;gl.gridHeight=gl.svgHeight-xAxisHeight-12;gl.gridWidth=gl.svgWidth-this.lgRect.width-yAxisWidth;break;case'right':gl.translateY=translateY;gl.translateX=yAxisWidth;gl.gridHeight=gl.svgHeight-xAxisHeight-12;gl.gridWidth=gl.svgWidth-this.lgRect.width-yAxisWidth-5;break;default:throw new Error('Legend position not supported');}this.dimGrid.setGridXPosForDualYAxis(yTitleCoords,yaxisLabelCoords);// after drawing everything, set the Y axis positions
var objyAxis=new YAxis(this.ctx);objyAxis.setYAxisXPosition(yaxisLabelCoords,yTitleCoords);}},{key:"setDimensionsForNonAxisCharts",value:function setDimensionsForNonAxisCharts(){var w=this.w;var gl=w.globals;var cnf=w.config;var xPad=0;if(w.config.legend.show&&!w.config.legend.floating){xPad=20;}var type=cnf.chart.type==='pie'||cnf.chart.type==='polarArea'||cnf.chart.type==='donut'?'pie':'radialBar';var offY=cnf.plotOptions[type].offsetY;var offX=cnf.plotOptions[type].offsetX;if(!cnf.legend.show||cnf.legend.floating){gl.gridHeight=gl.svgHeight-cnf.grid.padding.left+cnf.grid.padding.right;gl.gridWidth=gl.gridHeight;gl.translateY=offY;gl.translateX=offX+(gl.svgWidth-gl.gridWidth)/2;return;}switch(cnf.legend.position){case'bottom':gl.gridHeight=gl.svgHeight-this.lgRect.height-gl.goldenPadding;gl.gridWidth=gl.svgWidth;gl.translateY=offY-10;gl.translateX=offX+(gl.svgWidth-gl.gridWidth)/2;break;case'top':gl.gridHeight=gl.svgHeight-this.lgRect.height-gl.goldenPadding;gl.gridWidth=gl.svgWidth;gl.translateY=this.lgRect.height+offY+10;gl.translateX=offX+(gl.svgWidth-gl.gridWidth)/2;break;case'left':gl.gridWidth=gl.svgWidth-this.lgRect.width-xPad;gl.gridHeight=cnf.chart.height!=='auto'?gl.svgHeight:gl.gridWidth;gl.translateY=offY;gl.translateX=offX+this.lgRect.width+xPad;break;case'right':gl.gridWidth=gl.svgWidth-this.lgRect.width-xPad-5;gl.gridHeight=cnf.chart.height!=='auto'?gl.svgHeight:gl.gridWidth;gl.translateY=offY;gl.translateX=offX+10;break;default:throw new Error('Legend position not supported');}}},{key:"conditionalChecksForAxisCoords",value:function conditionalChecksForAxisCoords(xaxisLabelCoords,xtitleCoords,xaxisGroupLabelCoords){var w=this.w;var xAxisNum=w.globals.hasXaxisGroups?2:1;var baseXAxisHeight=xaxisGroupLabelCoords.height+xaxisLabelCoords.height+xtitleCoords.height;var xAxisHeightMultiplicate=w.globals.isMultiLineX?1.2:w.globals.LINE_HEIGHT_RATIO;var rotatedXAxisOffset=w.globals.rotateXLabels?22:10;var rotatedXAxisLegendOffset=w.globals.rotateXLabels&&w.config.legend.position==='bottom';var additionalOffset=rotatedXAxisLegendOffset?10:0;this.xAxisHeight=baseXAxisHeight*xAxisHeightMultiplicate+xAxisNum*rotatedXAxisOffset+additionalOffset;this.xAxisWidth=xaxisLabelCoords.width;if(this.xAxisHeight-xtitleCoords.height>w.config.xaxis.labels.maxHeight){this.xAxisHeight=w.config.xaxis.labels.maxHeight;}if(w.config.xaxis.labels.minHeight&&this.xAxisHeight<w.config.xaxis.labels.minHeight){this.xAxisHeight=w.config.xaxis.labels.minHeight;}if(w.config.xaxis.floating){this.xAxisHeight=0;}var minYAxisWidth=0;var maxYAxisWidth=0;w.config.yaxis.forEach(function(y){minYAxisWidth+=y.labels.minWidth;maxYAxisWidth+=y.labels.maxWidth;});if(this.yAxisWidth<minYAxisWidth){this.yAxisWidth=minYAxisWidth;}if(this.yAxisWidth>maxYAxisWidth){this.yAxisWidth=maxYAxisWidth;}}}]);return Dimensions;}();var Helpers$2=/*#__PURE__*/function(){function Helpers(lgCtx){_classCallCheck(this,Helpers);this.w=lgCtx.w;this.lgCtx=lgCtx;}_createClass(Helpers,[{key:"getLegendStyles",value:function getLegendStyles(){var _this$lgCtx$ctx,_this$lgCtx$ctx$opts,_this$lgCtx$ctx$opts$;var stylesheet=document.createElement('style');stylesheet.setAttribute('type','text/css');var nonce=((_this$lgCtx$ctx=this.lgCtx.ctx)===null||_this$lgCtx$ctx===void 0?void 0:(_this$lgCtx$ctx$opts=_this$lgCtx$ctx.opts)===null||_this$lgCtx$ctx$opts===void 0?void 0:(_this$lgCtx$ctx$opts$=_this$lgCtx$ctx$opts.chart)===null||_this$lgCtx$ctx$opts$===void 0?void 0:_this$lgCtx$ctx$opts$.nonce)||this.w.config.chart.nonce;if(nonce){stylesheet.setAttribute('nonce',nonce);}var text="\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n        border-style: solid;\n      }\n\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\n        display: inline-block;\n      }\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }";var rules=document.createTextNode(text);stylesheet.appendChild(rules);return stylesheet;}},{key:"getLegendBBox",value:function getLegendBBox(){var w=this.w;var currLegendsWrap=w.globals.dom.baseEl.querySelector('.apexcharts-legend');var currLegendsWrapRect=currLegendsWrap.getBoundingClientRect();var currLegendsWrapWidth=currLegendsWrapRect.width;var currLegendsWrapHeight=currLegendsWrapRect.height;return{clwh:currLegendsWrapHeight,clww:currLegendsWrapWidth};}},{key:"appendToForeignObject",value:function appendToForeignObject(){var gl=this.w.globals;gl.dom.elLegendForeign.appendChild(this.getLegendStyles());}},{key:"toggleDataSeries",value:function toggleDataSeries(seriesCnt,isHidden){var _this=this;var w=this.w;if(w.globals.axisCharts||w.config.chart.type==='radialBar'){w.globals.resized=true;// we don't want initial animations again
var seriesEl=null;var realIndex=null;// yes, make it null. 1 series will rise at a time
w.globals.risingSeries=[];if(w.globals.axisCharts){seriesEl=w.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(seriesCnt,"']"));realIndex=parseInt(seriesEl.getAttribute('data:realIndex'),10);}else{seriesEl=w.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(seriesCnt+1,"']"));realIndex=parseInt(seriesEl.getAttribute('rel'),10)-1;}if(isHidden){var seriesToMakeVisible=[{cs:w.globals.collapsedSeries,csi:w.globals.collapsedSeriesIndices},{cs:w.globals.ancillaryCollapsedSeries,csi:w.globals.ancillaryCollapsedSeriesIndices}];seriesToMakeVisible.forEach(function(r){_this.riseCollapsedSeries(r.cs,r.csi,realIndex);});}else{this.hideSeries({seriesEl:seriesEl,realIndex:realIndex});}}else{// for non-axis charts i.e pie / donuts
var _seriesEl=w.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(seriesCnt+1,"'] path"));var type=w.config.chart.type;if(type==='pie'||type==='polarArea'||type==='donut'){var dataLabels=w.config.plotOptions.pie.donut.labels;var graphics=new Graphics(this.lgCtx.ctx);graphics.pathMouseDown(_seriesEl.members[0],null);this.lgCtx.ctx.pie.printDataLabelsInner(_seriesEl.members[0].node,dataLabels);}_seriesEl.fire('click');}}},{key:"hideSeries",value:function hideSeries(_ref){var seriesEl=_ref.seriesEl,realIndex=_ref.realIndex;var w=this.w;var series=Utils$1.clone(w.config.series);if(w.globals.axisCharts){var yaxis=w.config.yaxis[w.globals.seriesYAxisReverseMap[realIndex]];if(yaxis&&yaxis.show&&yaxis.showAlways){if(w.globals.ancillaryCollapsedSeriesIndices.indexOf(realIndex)<0){w.globals.ancillaryCollapsedSeries.push({index:realIndex,data:series[realIndex].data.slice(),type:seriesEl.parentNode.className.baseVal.split('-')[1]});w.globals.ancillaryCollapsedSeriesIndices.push(realIndex);}}else{if(w.globals.collapsedSeriesIndices.indexOf(realIndex)<0){w.globals.collapsedSeries.push({index:realIndex,data:series[realIndex].data.slice(),type:seriesEl.parentNode.className.baseVal.split('-')[1]});w.globals.collapsedSeriesIndices.push(realIndex);var removeIndexOfRising=w.globals.risingSeries.indexOf(realIndex);w.globals.risingSeries.splice(removeIndexOfRising,1);}}}else{w.globals.collapsedSeries.push({index:realIndex,data:series[realIndex]});w.globals.collapsedSeriesIndices.push(realIndex);}var seriesChildren=seriesEl.childNodes;for(var sc=0;sc<seriesChildren.length;sc++){if(seriesChildren[sc].classList.contains('apexcharts-series-markers-wrap')){if(seriesChildren[sc].classList.contains('apexcharts-hide')){seriesChildren[sc].classList.remove('apexcharts-hide');}else{seriesChildren[sc].classList.add('apexcharts-hide');}}}w.globals.allSeriesCollapsed=w.globals.collapsedSeries.length===w.config.series.length;series=this._getSeriesBasedOnCollapsedState(series);this.lgCtx.ctx.updateHelpers._updateSeries(series,w.config.chart.animations.dynamicAnimation.enabled);}},{key:"riseCollapsedSeries",value:function riseCollapsedSeries(collapsedSeries,seriesIndices,realIndex){var w=this.w;var series=Utils$1.clone(w.config.series);if(collapsedSeries.length>0){for(var c=0;c<collapsedSeries.length;c++){if(collapsedSeries[c].index===realIndex){if(w.globals.axisCharts){series[realIndex].data=collapsedSeries[c].data.slice();collapsedSeries.splice(c,1);seriesIndices.splice(c,1);w.globals.risingSeries.push(realIndex);}else{series[realIndex]=collapsedSeries[c].data;collapsedSeries.splice(c,1);seriesIndices.splice(c,1);w.globals.risingSeries.push(realIndex);}}}series=this._getSeriesBasedOnCollapsedState(series);this.lgCtx.ctx.updateHelpers._updateSeries(series,w.config.chart.animations.dynamicAnimation.enabled);}}},{key:"_getSeriesBasedOnCollapsedState",value:function _getSeriesBasedOnCollapsedState(series){var w=this.w;if(w.globals.axisCharts){series.forEach(function(s,sI){if(w.globals.collapsedSeriesIndices.indexOf(sI)>-1){series[sI].data=[];}});}else{series.forEach(function(s,sI){if(w.globals.collapsedSeriesIndices.indexOf(sI)>-1){series[sI]=0;}});}return series;}}]);return Helpers;}();/**
   * ApexCharts Legend Class to draw legend.
   *
   * @module Legend
   **/var Legend=/*#__PURE__*/function(){function Legend(ctx){_classCallCheck(this,Legend);this.ctx=ctx;this.w=ctx.w;this.onLegendClick=this.onLegendClick.bind(this);this.onLegendHovered=this.onLegendHovered.bind(this);this.isBarsDistributed=this.w.config.chart.type==='bar'&&this.w.config.plotOptions.bar.distributed&&this.w.config.series.length===1;this.legendHelpers=new Helpers$2(this);}_createClass(Legend,[{key:"init",value:function init(){var w=this.w;var gl=w.globals;var cnf=w.config;var showLegendAlways=cnf.legend.showForSingleSeries&&gl.series.length===1||this.isBarsDistributed||gl.series.length>1;if((showLegendAlways||!gl.axisCharts)&&cnf.legend.show){while(gl.dom.elLegendWrap.firstChild){gl.dom.elLegendWrap.removeChild(gl.dom.elLegendWrap.firstChild);}this.drawLegends();if(!Utils$1.isIE11()){this.legendHelpers.appendToForeignObject();}else{// IE11 doesn't supports foreignObject, hence append it to <head>
document.getElementsByTagName('head')[0].appendChild(this.legendHelpers.getLegendStyles());}if(cnf.legend.position==='bottom'||cnf.legend.position==='top'){this.legendAlignHorizontal();}else if(cnf.legend.position==='right'||cnf.legend.position==='left'){this.legendAlignVertical();}}}},{key:"drawLegends",value:function drawLegends(){var me=this;var w=this.w;var fontFamily=w.config.legend.fontFamily;var legendNames=w.globals.seriesNames;var fillcolor=w.globals.colors.slice();if(w.config.chart.type==='heatmap'){var ranges=w.config.plotOptions.heatmap.colorScale.ranges;legendNames=ranges.map(function(colorScale){return colorScale.name?colorScale.name:colorScale.from+' - '+colorScale.to;});fillcolor=ranges.map(function(color){return color.color;});}else if(this.isBarsDistributed){legendNames=w.globals.labels.slice();}if(w.config.legend.customLegendItems.length){legendNames=w.config.legend.customLegendItems;}var legendFormatter=w.globals.legendFormatter;var isLegendInversed=w.config.legend.inverseOrder;for(var i=isLegendInversed?legendNames.length-1:0;isLegendInversed?i>=0:i<=legendNames.length-1;isLegendInversed?i--:i++){var _w$config$legend$labe;var text=legendFormatter(legendNames[i],{seriesIndex:i,w:w});var collapsedSeries=false;var ancillaryCollapsedSeries=false;if(w.globals.collapsedSeries.length>0){for(var c=0;c<w.globals.collapsedSeries.length;c++){if(w.globals.collapsedSeries[c].index===i){collapsedSeries=true;}}}if(w.globals.ancillaryCollapsedSeriesIndices.length>0){for(var _c=0;_c<w.globals.ancillaryCollapsedSeriesIndices.length;_c++){if(w.globals.ancillaryCollapsedSeriesIndices[_c]===i){ancillaryCollapsedSeries=true;}}}var elMarker=document.createElement('span');elMarker.classList.add('apexcharts-legend-marker');var mOffsetX=w.config.legend.markers.offsetX;var mOffsetY=w.config.legend.markers.offsetY;var mHeight=w.config.legend.markers.height;var mWidth=w.config.legend.markers.width;var mBorderWidth=w.config.legend.markers.strokeWidth;var mBorderColor=w.config.legend.markers.strokeColor;var mBorderRadius=w.config.legend.markers.radius;var mStyle=elMarker.style;mStyle.background=fillcolor[i];mStyle.color=fillcolor[i];mStyle.setProperty('background',fillcolor[i],'important');// override fill color with custom legend.markers.fillColors
if(w.config.legend.markers.fillColors&&w.config.legend.markers.fillColors[i]){mStyle.background=w.config.legend.markers.fillColors[i];}// override with data color
if(w.globals.seriesColors[i]!==undefined){mStyle.background=w.globals.seriesColors[i];mStyle.color=w.globals.seriesColors[i];}mStyle.height=Array.isArray(mHeight)?parseFloat(mHeight[i])+'px':parseFloat(mHeight)+'px';mStyle.width=Array.isArray(mWidth)?parseFloat(mWidth[i])+'px':parseFloat(mWidth)+'px';mStyle.left=(Array.isArray(mOffsetX)?parseFloat(mOffsetX[i]):parseFloat(mOffsetX))+'px';mStyle.top=(Array.isArray(mOffsetY)?parseFloat(mOffsetY[i]):parseFloat(mOffsetY))+'px';mStyle.borderWidth=Array.isArray(mBorderWidth)?mBorderWidth[i]:mBorderWidth;mStyle.borderColor=Array.isArray(mBorderColor)?mBorderColor[i]:mBorderColor;mStyle.borderRadius=Array.isArray(mBorderRadius)?parseFloat(mBorderRadius[i])+'px':parseFloat(mBorderRadius)+'px';if(w.config.legend.markers.customHTML){if(Array.isArray(w.config.legend.markers.customHTML)){if(w.config.legend.markers.customHTML[i]){elMarker.innerHTML=w.config.legend.markers.customHTML[i]();}}else{elMarker.innerHTML=w.config.legend.markers.customHTML();}}Graphics.setAttrs(elMarker,{rel:i+1,'data:collapsed':collapsedSeries||ancillaryCollapsedSeries});if(collapsedSeries||ancillaryCollapsedSeries){elMarker.classList.add('apexcharts-inactive-legend');}var elLegend=document.createElement('div');var elLegendText=document.createElement('span');elLegendText.classList.add('apexcharts-legend-text');elLegendText.innerHTML=Array.isArray(text)?text.join(' '):text;var textColor=w.config.legend.labels.useSeriesColors?w.globals.colors[i]:Array.isArray(w.config.legend.labels.colors)?(_w$config$legend$labe=w.config.legend.labels.colors)===null||_w$config$legend$labe===void 0?void 0:_w$config$legend$labe[i]:w.config.legend.labels.colors;if(!textColor){textColor=w.config.chart.foreColor;}elLegendText.style.color=textColor;elLegendText.style.fontSize=parseFloat(w.config.legend.fontSize)+'px';elLegendText.style.fontWeight=w.config.legend.fontWeight;elLegendText.style.fontFamily=fontFamily||w.config.chart.fontFamily;Graphics.setAttrs(elLegendText,{rel:i+1,i:i,'data:default-text':encodeURIComponent(text),'data:collapsed':collapsedSeries||ancillaryCollapsedSeries});elLegend.appendChild(elMarker);elLegend.appendChild(elLegendText);var coreUtils=new CoreUtils(this.ctx);if(!w.config.legend.showForZeroSeries){var total=coreUtils.getSeriesTotalByIndex(i);if(total===0&&coreUtils.seriesHaveSameValues(i)&&!coreUtils.isSeriesNull(i)&&w.globals.collapsedSeriesIndices.indexOf(i)===-1&&w.globals.ancillaryCollapsedSeriesIndices.indexOf(i)===-1){elLegend.classList.add('apexcharts-hidden-zero-series');}}if(!w.config.legend.showForNullSeries){if(coreUtils.isSeriesNull(i)&&w.globals.collapsedSeriesIndices.indexOf(i)===-1&&w.globals.ancillaryCollapsedSeriesIndices.indexOf(i)===-1){elLegend.classList.add('apexcharts-hidden-null-series');}}w.globals.dom.elLegendWrap.appendChild(elLegend);w.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(w.config.legend.horizontalAlign));w.globals.dom.elLegendWrap.classList.add('apx-legend-position-'+w.config.legend.position);elLegend.classList.add('apexcharts-legend-series');elLegend.style.margin="".concat(w.config.legend.itemMargin.vertical,"px ").concat(w.config.legend.itemMargin.horizontal,"px");w.globals.dom.elLegendWrap.style.width=w.config.legend.width?w.config.legend.width+'px':'';w.globals.dom.elLegendWrap.style.height=w.config.legend.height?w.config.legend.height+'px':'';Graphics.setAttrs(elLegend,{rel:i+1,seriesName:Utils$1.escapeString(legendNames[i]),'data:collapsed':collapsedSeries||ancillaryCollapsedSeries});if(collapsedSeries||ancillaryCollapsedSeries){elLegend.classList.add('apexcharts-inactive-legend');}if(!w.config.legend.onItemClick.toggleDataSeries){elLegend.classList.add('apexcharts-no-click');}}w.globals.dom.elWrap.addEventListener('click',me.onLegendClick,true);if(w.config.legend.onItemHover.highlightDataSeries&&w.config.legend.customLegendItems.length===0){w.globals.dom.elWrap.addEventListener('mousemove',me.onLegendHovered,true);w.globals.dom.elWrap.addEventListener('mouseout',me.onLegendHovered,true);}}},{key:"setLegendWrapXY",value:function setLegendWrapXY(offsetX,offsetY){var w=this.w;var elLegendWrap=w.globals.dom.elLegendWrap;var legendRect=elLegendWrap.getBoundingClientRect();var x=0;var y=0;if(w.config.legend.position==='bottom'){y=y+(w.globals.svgHeight-legendRect.height/2);}else if(w.config.legend.position==='top'){var dim=new Dimensions(this.ctx);var titleH=dim.dimHelpers.getTitleSubtitleCoords('title').height;var subtitleH=dim.dimHelpers.getTitleSubtitleCoords('subtitle').height;y=y+(titleH>0?titleH-10:0)+(subtitleH>0?subtitleH-10:0);}elLegendWrap.style.position='absolute';x=x+offsetX+w.config.legend.offsetX;y=y+offsetY+w.config.legend.offsetY;elLegendWrap.style.left=x+'px';elLegendWrap.style.top=y+'px';if(w.config.legend.position==='bottom'){elLegendWrap.style.top='auto';elLegendWrap.style.bottom=5-w.config.legend.offsetY+'px';}else if(w.config.legend.position==='right'){elLegendWrap.style.left='auto';elLegendWrap.style.right=25+w.config.legend.offsetX+'px';}var fixedHeigthWidth=['width','height'];fixedHeigthWidth.forEach(function(hw){if(elLegendWrap.style[hw]){elLegendWrap.style[hw]=parseInt(w.config.legend[hw],10)+'px';}});}},{key:"legendAlignHorizontal",value:function legendAlignHorizontal(){var w=this.w;var elLegendWrap=w.globals.dom.elLegendWrap;elLegendWrap.style.right=0;var lRect=this.legendHelpers.getLegendBBox();var dimensions=new Dimensions(this.ctx);var titleRect=dimensions.dimHelpers.getTitleSubtitleCoords('title');var subtitleRect=dimensions.dimHelpers.getTitleSubtitleCoords('subtitle');var offsetX=20;var offsetY=0;// the whole legend box is set to bottom
if(w.config.legend.position==='bottom'){offsetY=-lRect.clwh/1.8;}else if(w.config.legend.position==='top'){offsetY=titleRect.height+subtitleRect.height+w.config.title.margin+w.config.subtitle.margin-10;}this.setLegendWrapXY(offsetX,offsetY);}},{key:"legendAlignVertical",value:function legendAlignVertical(){var w=this.w;var lRect=this.legendHelpers.getLegendBBox();var offsetY=20;var offsetX=0;if(w.config.legend.position==='left'){offsetX=20;}if(w.config.legend.position==='right'){offsetX=w.globals.svgWidth-lRect.clww-10;}this.setLegendWrapXY(offsetX,offsetY);}},{key:"onLegendHovered",value:function onLegendHovered(e){var w=this.w;var hoverOverLegend=e.target.classList.contains('apexcharts-legend-series')||e.target.classList.contains('apexcharts-legend-text')||e.target.classList.contains('apexcharts-legend-marker');if(w.config.chart.type!=='heatmap'&&!this.isBarsDistributed){if(!e.target.classList.contains('apexcharts-inactive-legend')&&hoverOverLegend){var series=new Series(this.ctx);series.toggleSeriesOnHover(e,e.target);}}else{// for heatmap handling
if(hoverOverLegend){var seriesCnt=parseInt(e.target.getAttribute('rel'),10)-1;this.ctx.events.fireEvent('legendHover',[this.ctx,seriesCnt,this.w]);var _series=new Series(this.ctx);_series.highlightRangeInSeries(e,e.target);}}}},{key:"onLegendClick",value:function onLegendClick(e){var w=this.w;if(w.config.legend.customLegendItems.length)return;if(e.target.classList.contains('apexcharts-legend-series')||e.target.classList.contains('apexcharts-legend-text')||e.target.classList.contains('apexcharts-legend-marker')){var seriesCnt=parseInt(e.target.getAttribute('rel'),10)-1;var isHidden=e.target.getAttribute('data:collapsed')==='true';var legendClick=this.w.config.chart.events.legendClick;if(typeof legendClick==='function'){legendClick(this.ctx,seriesCnt,this.w);}this.ctx.events.fireEvent('legendClick',[this.ctx,seriesCnt,this.w]);var markerClick=this.w.config.legend.markers.onClick;if(typeof markerClick==='function'&&e.target.classList.contains('apexcharts-legend-marker')){markerClick(this.ctx,seriesCnt,this.w);this.ctx.events.fireEvent('legendMarkerClick',[this.ctx,seriesCnt,this.w]);}// for now - just prevent click on heatmap legend - and allow hover only
var clickAllowed=w.config.chart.type!=='treemap'&&w.config.chart.type!=='heatmap'&&!this.isBarsDistributed;if(clickAllowed&&w.config.legend.onItemClick.toggleDataSeries){this.legendHelpers.toggleDataSeries(seriesCnt,isHidden);}}}}]);return Legend;}();var icoPan="<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n    <defs>\n        <path d=\"M0 0h24v24H0z\" id=\"a\"/>\n    </defs>\n    <clipPath id=\"b\">\n        <use overflow=\"visible\" xlink:href=\"#a\"/>\n    </clipPath>\n    <path clip-path=\"url(#b)\" d=\"M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z\"/>\n</svg>";var icoZoom="<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n    <path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/>\n    <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n    <path d=\"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z\"/>\n</svg>";var icoReset="<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\"/>\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n</svg>";var icoZoomIn="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n</svg>\n";var icoZoomOut="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>\n</svg>\n";var icoSelect="<svg fill=\"#6E8192\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n    <path d=\"M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z\"/>\n</svg>";var icoMenu="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"none\" d=\"M0 0h24v24H0V0z\"/><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";/**
   * ApexCharts Toolbar Class for creating toolbar in axis based charts.
   *
   * @module Toolbar
   **/var Toolbar=/*#__PURE__*/function(){function Toolbar(ctx){_classCallCheck(this,Toolbar);this.ctx=ctx;this.w=ctx.w;var w=this.w;this.ev=this.w.config.chart.events;this.selectedClass='apexcharts-selected';this.localeValues=this.w.globals.locale.toolbar;this.minX=w.globals.minX;this.maxX=w.globals.maxX;}_createClass(Toolbar,[{key:"createToolbar",value:function createToolbar(){var _this=this;var w=this.w;var createDiv=function createDiv(){return document.createElement('div');};var elToolbarWrap=createDiv();elToolbarWrap.setAttribute('class','apexcharts-toolbar');elToolbarWrap.style.top=w.config.chart.toolbar.offsetY+'px';elToolbarWrap.style.right=-w.config.chart.toolbar.offsetX+3+'px';w.globals.dom.elWrap.appendChild(elToolbarWrap);this.elZoom=createDiv();this.elZoomIn=createDiv();this.elZoomOut=createDiv();this.elPan=createDiv();this.elSelection=createDiv();this.elZoomReset=createDiv();this.elMenuIcon=createDiv();this.elMenu=createDiv();this.elCustomIcons=[];this.t=w.config.chart.toolbar.tools;if(Array.isArray(this.t.customIcons)){for(var i=0;i<this.t.customIcons.length;i++){this.elCustomIcons.push(createDiv());}}var toolbarControls=[];var appendZoomControl=function appendZoomControl(type,el,ico){var tool=type.toLowerCase();if(_this.t[tool]&&w.config.chart.zoom.enabled){toolbarControls.push({el:el,icon:typeof _this.t[tool]==='string'?_this.t[tool]:ico,title:_this.localeValues[type],class:"apexcharts-".concat(tool,"-icon")});}};appendZoomControl('zoomIn',this.elZoomIn,icoZoomIn);appendZoomControl('zoomOut',this.elZoomOut,icoZoomOut);var zoomSelectionCtrls=function zoomSelectionCtrls(z){if(_this.t[z]&&w.config.chart[z].enabled){toolbarControls.push({el:z==='zoom'?_this.elZoom:_this.elSelection,icon:typeof _this.t[z]==='string'?_this.t[z]:z==='zoom'?icoZoom:icoSelect,title:_this.localeValues[z==='zoom'?'selectionZoom':'selection'],class:w.globals.isTouchDevice?'apexcharts-element-hidden':"apexcharts-".concat(z,"-icon")});}};zoomSelectionCtrls('zoom');zoomSelectionCtrls('selection');if(this.t.pan&&w.config.chart.zoom.enabled){toolbarControls.push({el:this.elPan,icon:typeof this.t.pan==='string'?this.t.pan:icoPan,title:this.localeValues.pan,class:w.globals.isTouchDevice?'apexcharts-element-hidden':'apexcharts-pan-icon'});}appendZoomControl('reset',this.elZoomReset,icoReset);if(this.t.download){toolbarControls.push({el:this.elMenuIcon,icon:typeof this.t.download==='string'?this.t.download:icoMenu,title:this.localeValues.menu,class:'apexcharts-menu-icon'});}for(var _i=0;_i<this.elCustomIcons.length;_i++){toolbarControls.push({el:this.elCustomIcons[_i],icon:this.t.customIcons[_i].icon,title:this.t.customIcons[_i].title,index:this.t.customIcons[_i].index,class:'apexcharts-toolbar-custom-icon '+this.t.customIcons[_i].class});}toolbarControls.forEach(function(t,index){if(t.index){Utils$1.moveIndexInArray(toolbarControls,index,t.index);}});for(var _i2=0;_i2<toolbarControls.length;_i2++){Graphics.setAttrs(toolbarControls[_i2].el,{class:toolbarControls[_i2].class,title:toolbarControls[_i2].title});toolbarControls[_i2].el.innerHTML=toolbarControls[_i2].icon;elToolbarWrap.appendChild(toolbarControls[_i2].el);}this._createHamburgerMenu(elToolbarWrap);if(w.globals.zoomEnabled){this.elZoom.classList.add(this.selectedClass);}else if(w.globals.panEnabled){this.elPan.classList.add(this.selectedClass);}else if(w.globals.selectionEnabled){this.elSelection.classList.add(this.selectedClass);}this.addToolbarEventListeners();}},{key:"_createHamburgerMenu",value:function _createHamburgerMenu(parent){this.elMenuItems=[];parent.appendChild(this.elMenu);Graphics.setAttrs(this.elMenu,{class:'apexcharts-menu'});var menuItems=[{name:'exportSVG',title:this.localeValues.exportToSVG},{name:'exportPNG',title:this.localeValues.exportToPNG},{name:'exportCSV',title:this.localeValues.exportToCSV}];for(var i=0;i<menuItems.length;i++){this.elMenuItems.push(document.createElement('div'));this.elMenuItems[i].innerHTML=menuItems[i].title;Graphics.setAttrs(this.elMenuItems[i],{class:"apexcharts-menu-item ".concat(menuItems[i].name),title:menuItems[i].title});this.elMenu.appendChild(this.elMenuItems[i]);}}},{key:"addToolbarEventListeners",value:function addToolbarEventListeners(){var _this2=this;this.elZoomReset.addEventListener('click',this.handleZoomReset.bind(this));this.elSelection.addEventListener('click',this.toggleZoomSelection.bind(this,'selection'));this.elZoom.addEventListener('click',this.toggleZoomSelection.bind(this,'zoom'));this.elZoomIn.addEventListener('click',this.handleZoomIn.bind(this));this.elZoomOut.addEventListener('click',this.handleZoomOut.bind(this));this.elPan.addEventListener('click',this.togglePanning.bind(this));this.elMenuIcon.addEventListener('click',this.toggleMenu.bind(this));this.elMenuItems.forEach(function(m){if(m.classList.contains('exportSVG')){m.addEventListener('click',_this2.handleDownload.bind(_this2,'svg'));}else if(m.classList.contains('exportPNG')){m.addEventListener('click',_this2.handleDownload.bind(_this2,'png'));}else if(m.classList.contains('exportCSV')){m.addEventListener('click',_this2.handleDownload.bind(_this2,'csv'));}});for(var i=0;i<this.t.customIcons.length;i++){this.elCustomIcons[i].addEventListener('click',this.t.customIcons[i].click.bind(this,this.ctx,this.ctx.w));}}},{key:"toggleZoomSelection",value:function toggleZoomSelection(type){var charts=this.ctx.getSyncedCharts();charts.forEach(function(ch){ch.ctx.toolbar.toggleOtherControls();var el=type==='selection'?ch.ctx.toolbar.elSelection:ch.ctx.toolbar.elZoom;var enabledType=type==='selection'?'selectionEnabled':'zoomEnabled';ch.w.globals[enabledType]=!ch.w.globals[enabledType];if(!el.classList.contains(ch.ctx.toolbar.selectedClass)){el.classList.add(ch.ctx.toolbar.selectedClass);}else{el.classList.remove(ch.ctx.toolbar.selectedClass);}});}},{key:"getToolbarIconsReference",value:function getToolbarIconsReference(){var w=this.w;if(!this.elZoom){this.elZoom=w.globals.dom.baseEl.querySelector('.apexcharts-zoom-icon');}if(!this.elPan){this.elPan=w.globals.dom.baseEl.querySelector('.apexcharts-pan-icon');}if(!this.elSelection){this.elSelection=w.globals.dom.baseEl.querySelector('.apexcharts-selection-icon');}}},{key:"enableZoomPanFromToolbar",value:function enableZoomPanFromToolbar(type){this.toggleOtherControls();type==='pan'?this.w.globals.panEnabled=true:this.w.globals.zoomEnabled=true;var el=type==='pan'?this.elPan:this.elZoom;var el2=type==='pan'?this.elZoom:this.elPan;if(el){el.classList.add(this.selectedClass);}if(el2){el2.classList.remove(this.selectedClass);}}},{key:"togglePanning",value:function togglePanning(){var charts=this.ctx.getSyncedCharts();charts.forEach(function(ch){ch.ctx.toolbar.toggleOtherControls();ch.w.globals.panEnabled=!ch.w.globals.panEnabled;if(!ch.ctx.toolbar.elPan.classList.contains(ch.ctx.toolbar.selectedClass)){ch.ctx.toolbar.elPan.classList.add(ch.ctx.toolbar.selectedClass);}else{ch.ctx.toolbar.elPan.classList.remove(ch.ctx.toolbar.selectedClass);}});}},{key:"toggleOtherControls",value:function toggleOtherControls(){var _this3=this;var w=this.w;w.globals.panEnabled=false;w.globals.zoomEnabled=false;w.globals.selectionEnabled=false;this.getToolbarIconsReference();var toggleEls=[this.elPan,this.elSelection,this.elZoom];toggleEls.forEach(function(el){if(el){el.classList.remove(_this3.selectedClass);}});}},{key:"handleZoomIn",value:function handleZoomIn(){var w=this.w;if(w.globals.isRangeBar){this.minX=w.globals.minY;this.maxX=w.globals.maxY;}var centerX=(this.minX+this.maxX)/2;var newMinX=(this.minX+centerX)/2;var newMaxX=(this.maxX+centerX)/2;var newMinXMaxX=this._getNewMinXMaxX(newMinX,newMaxX);if(!w.globals.disableZoomIn){this.zoomUpdateOptions(newMinXMaxX.minX,newMinXMaxX.maxX);}}},{key:"handleZoomOut",value:function handleZoomOut(){var w=this.w;if(w.globals.isRangeBar){this.minX=w.globals.minY;this.maxX=w.globals.maxY;}// avoid zooming out beyond 1000 which may result in NaN values being printed on x-axis
if(w.config.xaxis.type==='datetime'&&new Date(this.minX).getUTCFullYear()<1000){return;}var centerX=(this.minX+this.maxX)/2;var newMinX=this.minX-(centerX-this.minX);var newMaxX=this.maxX-(centerX-this.maxX);var newMinXMaxX=this._getNewMinXMaxX(newMinX,newMaxX);if(!w.globals.disableZoomOut){this.zoomUpdateOptions(newMinXMaxX.minX,newMinXMaxX.maxX);}}},{key:"_getNewMinXMaxX",value:function _getNewMinXMaxX(newMinX,newMaxX){var shouldFloor=this.w.config.xaxis.convertedCatToNumeric;return{minX:shouldFloor?Math.floor(newMinX):newMinX,maxX:shouldFloor?Math.floor(newMaxX):newMaxX};}},{key:"zoomUpdateOptions",value:function zoomUpdateOptions(newMinX,newMaxX){var w=this.w;if(newMinX===undefined&&newMaxX===undefined){this.handleZoomReset();return;}if(w.config.xaxis.convertedCatToNumeric){// in category charts, avoid zooming out beyond min and max
if(newMinX<1){newMinX=1;newMaxX=w.globals.dataPoints;}if(newMaxX-newMinX<2){return;}}var xaxis={min:newMinX,max:newMaxX};var beforeZoomRange=this.getBeforeZoomRange(xaxis);if(beforeZoomRange){xaxis=beforeZoomRange.xaxis;}var options={xaxis:xaxis};var yaxis=Utils$1.clone(w.globals.initialConfig.yaxis);if(!w.config.chart.group){// if chart in a group, prevent yaxis update here
// fix issue #650
options.yaxis=yaxis;}this.w.globals.zoomed=true;this.ctx.updateHelpers._updateOptions(options,false,this.w.config.chart.animations.dynamicAnimation.enabled);this.zoomCallback(xaxis,yaxis);}},{key:"zoomCallback",value:function zoomCallback(xaxis,yaxis){if(typeof this.ev.zoomed==='function'){this.ev.zoomed(this.ctx,{xaxis:xaxis,yaxis:yaxis});}}},{key:"getBeforeZoomRange",value:function getBeforeZoomRange(xaxis,yaxis){var newRange=null;if(typeof this.ev.beforeZoom==='function'){newRange=this.ev.beforeZoom(this,{xaxis:xaxis,yaxis:yaxis});}return newRange;}},{key:"toggleMenu",value:function toggleMenu(){var _this4=this;window.setTimeout(function(){if(_this4.elMenu.classList.contains('apexcharts-menu-open')){_this4.elMenu.classList.remove('apexcharts-menu-open');}else{_this4.elMenu.classList.add('apexcharts-menu-open');}},0);}},{key:"handleDownload",value:function handleDownload(type){var w=this.w;var exprt=new Exports(this.ctx);switch(type){case'svg':exprt.exportToSVG(this.ctx);break;case'png':exprt.exportToPng(this.ctx);break;case'csv':exprt.exportToCSV({series:w.config.series,columnDelimiter:w.config.chart.toolbar.export.csv.columnDelimiter});break;}}},{key:"handleZoomReset",value:function handleZoomReset(e){var charts=this.ctx.getSyncedCharts();charts.forEach(function(ch){var w=ch.w;// forget lastXAxis min/max as reset button isn't resetting the x-axis completely if zoomX is called before
w.globals.lastXAxis.min=w.globals.initialConfig.xaxis.min;w.globals.lastXAxis.max=w.globals.initialConfig.xaxis.max;ch.updateHelpers.revertDefaultAxisMinMax();if(typeof w.config.chart.events.beforeResetZoom==='function'){// here, user get an option to control xaxis and yaxis when resetZoom is called
// at this point, whatever is returned from w.config.chart.events.beforeResetZoom
// is set as the new xaxis/yaxis min/max
var resetZoomRange=w.config.chart.events.beforeResetZoom(ch,w);if(resetZoomRange){ch.updateHelpers.revertDefaultAxisMinMax(resetZoomRange);}}if(typeof w.config.chart.events.zoomed==='function'){ch.ctx.toolbar.zoomCallback({min:w.config.xaxis.min,max:w.config.xaxis.max});}w.globals.zoomed=false;// if user has some series collapsed before hitting zoom reset button,
// those series should stay collapsed
var series=ch.ctx.series.emptyCollapsedSeries(Utils$1.clone(w.globals.initialSeries));ch.updateHelpers._updateSeries(series,w.config.chart.animations.dynamicAnimation.enabled);});}},{key:"destroy",value:function destroy(){this.elZoom=null;this.elZoomIn=null;this.elZoomOut=null;this.elPan=null;this.elSelection=null;this.elZoomReset=null;this.elMenuIcon=null;}}]);return Toolbar;}();/**
   * ApexCharts Zoom Class for handling zooming and panning on axes based charts.
   *
   * @module ZoomPanSelection
   **/var ZoomPanSelection=/*#__PURE__*/function(_Toolbar){_inherits(ZoomPanSelection,_Toolbar);var _super=_createSuper(ZoomPanSelection);function ZoomPanSelection(ctx){var _this;_classCallCheck(this,ZoomPanSelection);_this=_super.call(this,ctx);_this.ctx=ctx;_this.w=ctx.w;_this.dragged=false;_this.graphics=new Graphics(_this.ctx);_this.eventList=['mousedown','mouseleave','mousemove','touchstart','touchmove','mouseup','touchend'];_this.clientX=0;_this.clientY=0;_this.startX=0;_this.endX=0;_this.dragX=0;_this.startY=0;_this.endY=0;_this.dragY=0;_this.moveDirection='none';return _this;}_createClass(ZoomPanSelection,[{key:"init",value:function init(_ref){var _this2=this;var xyRatios=_ref.xyRatios;var w=this.w;var me=this;this.xyRatios=xyRatios;this.zoomRect=this.graphics.drawRect(0,0,0,0);this.selectionRect=this.graphics.drawRect(0,0,0,0);this.gridRect=w.globals.dom.baseEl.querySelector('.apexcharts-grid');this.zoomRect.node.classList.add('apexcharts-zoom-rect');this.selectionRect.node.classList.add('apexcharts-selection-rect');w.globals.dom.elGraphical.add(this.zoomRect);w.globals.dom.elGraphical.add(this.selectionRect);if(w.config.chart.selection.type==='x'){this.slDraggableRect=this.selectionRect.draggable({minX:0,minY:0,maxX:w.globals.gridWidth,maxY:w.globals.gridHeight}).on('dragmove',this.selectionDragging.bind(this,'dragging'));}else if(w.config.chart.selection.type==='y'){this.slDraggableRect=this.selectionRect.draggable({minX:0,maxX:w.globals.gridWidth}).on('dragmove',this.selectionDragging.bind(this,'dragging'));}else{this.slDraggableRect=this.selectionRect.draggable().on('dragmove',this.selectionDragging.bind(this,'dragging'));}this.preselectedSelection();this.hoverArea=w.globals.dom.baseEl.querySelector("".concat(w.globals.chartClass," .apexcharts-svg"));this.hoverArea.classList.add('apexcharts-zoomable');this.eventList.forEach(function(event){_this2.hoverArea.addEventListener(event,me.svgMouseEvents.bind(me,xyRatios),{capture:false,passive:true});});}// remove the event listeners which were previously added on hover area
},{key:"destroy",value:function destroy(){if(this.slDraggableRect){this.slDraggableRect.draggable(false);this.slDraggableRect.off();this.selectionRect.off();}this.selectionRect=null;this.zoomRect=null;this.gridRect=null;}},{key:"svgMouseEvents",value:function svgMouseEvents(xyRatios,e){var w=this.w;var me=this;var toolbar=this.ctx.toolbar;var zoomtype=w.globals.zoomEnabled?w.config.chart.zoom.type:w.config.chart.selection.type;var autoSelected=w.config.chart.toolbar.autoSelected;if(e.shiftKey){this.shiftWasPressed=true;toolbar.enableZoomPanFromToolbar(autoSelected==='pan'?'zoom':'pan');}else{if(this.shiftWasPressed){toolbar.enableZoomPanFromToolbar(autoSelected);this.shiftWasPressed=false;}}if(!e.target)return;var tc=e.target.classList;var pc;if(e.target.parentNode&&e.target.parentNode!==null){pc=e.target.parentNode.classList;}var falsePositives=tc.contains('apexcharts-selection-rect')||tc.contains('apexcharts-legend-marker')||tc.contains('apexcharts-legend-text')||pc&&pc.contains('apexcharts-toolbar');if(falsePositives)return;me.clientX=e.type==='touchmove'||e.type==='touchstart'?e.touches[0].clientX:e.type==='touchend'?e.changedTouches[0].clientX:e.clientX;me.clientY=e.type==='touchmove'||e.type==='touchstart'?e.touches[0].clientY:e.type==='touchend'?e.changedTouches[0].clientY:e.clientY;if((e.type==='mousedown'||e.type==='touchmove')&&e.which===1){var gridRectDim=me.gridRect.getBoundingClientRect();me.startX=me.clientX-gridRectDim.left;me.startY=me.clientY-gridRectDim.top;me.dragged=false;me.w.globals.mousedown=true;}if(e.type==='mousemove'&&e.which===1||e.type==='touchmove'){me.dragged=true;if(w.globals.panEnabled){w.globals.selection=null;if(me.w.globals.mousedown||e.type==='touchmove'){if(e.type==='touchmove'&&!me.w.globals.mousedown){console.warn('me.w.globals.mousedown ',me.w.globals.mousedown);var _gridRectDim=me.gridRect.getBoundingClientRect();me.startX=me.clientX-_gridRectDim.left;me.startY=me.clientY-_gridRectDim.top;me.w.globals.mousedown=true;}me.panDragging({context:me,zoomtype:zoomtype,xyRatios:xyRatios});}}else{if(e.type==='touchmove'){if(!me.w.globals.mousedown){var _gridRectDim2=me.gridRect.getBoundingClientRect();me.startX=me.clientX-_gridRectDim2.left;me.startY=me.clientY-_gridRectDim2.top;}me.w.globals.mousedown=true;}if(me.w.globals.mousedown&&w.globals.zoomEnabled||me.w.globals.mousedown&&w.globals.selectionEnabled){me.selection=me.selectionDrawing({context:me,zoomtype:zoomtype});}}}if(e.type==='mouseup'||e.type==='touchend'||e.type==='mouseleave'){// we will be calling getBoundingClientRect on each mousedown/mousemove/mouseup
var _gridRectDim3=me.gridRect.getBoundingClientRect();if(me.w.globals.mousedown){// user released the drag, now do all the calculations
me.endX=me.clientX-_gridRectDim3.left;me.endY=me.clientY-_gridRectDim3.top;me.dragX=Math.abs(me.endX-me.startX);me.dragY=Math.abs(me.endY-me.startY);if(w.globals.zoomEnabled||w.globals.selectionEnabled){me.selectionDrawn({context:me,zoomtype:zoomtype});}if(w.globals.panEnabled&&w.config.xaxis.convertedCatToNumeric){me.delayedPanScrolled();}}if(w.globals.zoomEnabled){me.hideSelectionRect(this.selectionRect);}me.dragged=false;me.w.globals.mousedown=false;}this.makeSelectionRectDraggable();}},{key:"makeSelectionRectDraggable",value:function makeSelectionRectDraggable(){var w=this.w;if(!this.selectionRect)return;var rectDim=this.selectionRect.node.getBoundingClientRect();if(rectDim.width>0&&rectDim.height>0){this.slDraggableRect.selectize({points:'l, r',pointSize:8,pointType:'rect'}).resize({constraint:{minX:0,minY:0,maxX:w.globals.gridWidth,maxY:w.globals.gridHeight}}).on('resizing',this.selectionDragging.bind(this,'resizing'));}}},{key:"preselectedSelection",value:function preselectedSelection(){var w=this.w;var xyRatios=this.xyRatios;if(!w.globals.zoomEnabled){if(typeof w.globals.selection!=='undefined'&&w.globals.selection!==null){this.drawSelectionRect(w.globals.selection);}else{if(w.config.chart.selection.xaxis.min!==undefined&&w.config.chart.selection.xaxis.max!==undefined){var x=(w.config.chart.selection.xaxis.min-w.globals.minX)/xyRatios.xRatio;var width=w.globals.gridWidth-(w.globals.maxX-w.config.chart.selection.xaxis.max)/xyRatios.xRatio-x;if(w.globals.isRangeBar){// rangebars put datetime data in y axis
x=// calculation: (selection left time - chart left time) / milliseconds per pixel = selection X value in pixels
(w.config.chart.selection.xaxis.min-w.globals.yAxisScale[0].niceMin)/xyRatios.invertedYRatio;width=(w.config.chart.selection.xaxis.max-w.config.chart.selection.xaxis.min)/xyRatios.invertedYRatio;}var selectionRect={x:x,y:0,width:width,height:w.globals.gridHeight,translateX:0,translateY:0,selectionEnabled:true};this.drawSelectionRect(selectionRect);this.makeSelectionRectDraggable();if(typeof w.config.chart.events.selection==='function'){w.config.chart.events.selection(this.ctx,{xaxis:{min:w.config.chart.selection.xaxis.min,max:w.config.chart.selection.xaxis.max},yaxis:{}});}}}}}},{key:"drawSelectionRect",value:function drawSelectionRect(_ref2){var x=_ref2.x,y=_ref2.y,width=_ref2.width,height=_ref2.height,_ref2$translateX=_ref2.translateX,translateX=_ref2$translateX===void 0?0:_ref2$translateX,_ref2$translateY=_ref2.translateY,translateY=_ref2$translateY===void 0?0:_ref2$translateY;var w=this.w;var zoomRect=this.zoomRect;var selectionRect=this.selectionRect;if(this.dragged||w.globals.selection!==null){var scalingAttrs={transform:'translate('+translateX+', '+translateY+')'};// change styles based on zoom or selection
// zoom is Enabled and user has dragged, so draw blue rect
if(w.globals.zoomEnabled&&this.dragged){if(width<0)width=1;// fixes apexcharts.js#1168
zoomRect.attr({x:x,y:y,width:width,height:height,fill:w.config.chart.zoom.zoomedArea.fill.color,'fill-opacity':w.config.chart.zoom.zoomedArea.fill.opacity,stroke:w.config.chart.zoom.zoomedArea.stroke.color,'stroke-width':w.config.chart.zoom.zoomedArea.stroke.width,'stroke-opacity':w.config.chart.zoom.zoomedArea.stroke.opacity});Graphics.setAttrs(zoomRect.node,scalingAttrs);}// selection is enabled
if(w.globals.selectionEnabled){selectionRect.attr({x:x,y:y,width:width>0?width:0,height:height>0?height:0,fill:w.config.chart.selection.fill.color,'fill-opacity':w.config.chart.selection.fill.opacity,stroke:w.config.chart.selection.stroke.color,'stroke-width':w.config.chart.selection.stroke.width,'stroke-dasharray':w.config.chart.selection.stroke.dashArray,'stroke-opacity':w.config.chart.selection.stroke.opacity});Graphics.setAttrs(selectionRect.node,scalingAttrs);}}}},{key:"hideSelectionRect",value:function hideSelectionRect(rect){if(rect){rect.attr({x:0,y:0,width:0,height:0});}}},{key:"selectionDrawing",value:function selectionDrawing(_ref3){var context=_ref3.context,zoomtype=_ref3.zoomtype;var w=this.w;var me=context;var gridRectDim=this.gridRect.getBoundingClientRect();var startX=me.startX-1;var startY=me.startY;var inversedX=false;var inversedY=false;var selectionWidth=me.clientX-gridRectDim.left-startX;var selectionHeight=me.clientY-gridRectDim.top-startY;var selectionRect={};if(Math.abs(selectionWidth+startX)>w.globals.gridWidth){// user dragged the mouse outside drawing area to the right
selectionWidth=w.globals.gridWidth-startX;}else if(me.clientX-gridRectDim.left<0){// user dragged the mouse outside drawing area to the left
selectionWidth=startX;}// inverse selection X
if(startX>me.clientX-gridRectDim.left){inversedX=true;selectionWidth=Math.abs(selectionWidth);}// inverse selection Y
if(startY>me.clientY-gridRectDim.top){inversedY=true;selectionHeight=Math.abs(selectionHeight);}if(zoomtype==='x'){selectionRect={x:inversedX?startX-selectionWidth:startX,y:0,width:selectionWidth,height:w.globals.gridHeight};}else if(zoomtype==='y'){selectionRect={x:0,y:inversedY?startY-selectionHeight:startY,width:w.globals.gridWidth,height:selectionHeight};}else{selectionRect={x:inversedX?startX-selectionWidth:startX,y:inversedY?startY-selectionHeight:startY,width:selectionWidth,height:selectionHeight};}me.drawSelectionRect(selectionRect);me.selectionDragging('resizing');return selectionRect;}},{key:"selectionDragging",value:function selectionDragging(type,e){var _this3=this;var w=this.w;var xyRatios=this.xyRatios;var selRect=this.selectionRect;var timerInterval=0;if(type==='resizing'){timerInterval=30;}// update selection when selection rect is dragged
var getSelAttr=function getSelAttr(attr){return parseFloat(selRect.node.getAttribute(attr));};var draggedProps={x:getSelAttr('x'),y:getSelAttr('y'),width:getSelAttr('width'),height:getSelAttr('height')};w.globals.selection=draggedProps;// update selection ends
if(typeof w.config.chart.events.selection==='function'&&w.globals.selectionEnabled){// a small debouncer is required when resizing to avoid freezing the chart
clearTimeout(this.w.globals.selectionResizeTimer);this.w.globals.selectionResizeTimer=window.setTimeout(function(){var gridRectDim=_this3.gridRect.getBoundingClientRect();var selectionRect=selRect.node.getBoundingClientRect();var minX,maxX,minY,maxY;if(!w.globals.isRangeBar){// original code is in the IF. rangeBar exception is in the ELSE.
minX=w.globals.xAxisScale.niceMin+(selectionRect.left-gridRectDim.left)*xyRatios.xRatio;maxX=w.globals.xAxisScale.niceMin+(selectionRect.right-gridRectDim.left)*xyRatios.xRatio;minY=w.globals.yAxisScale[0].niceMin+(gridRectDim.bottom-selectionRect.bottom)*xyRatios.yRatio[0];maxY=w.globals.yAxisScale[0].niceMax-(selectionRect.top-gridRectDim.top)*xyRatios.yRatio[0];}else{// rangeBars use x as the category, and y as the datetime data. // find data in y axis and use Y ratio
minX=w.globals.yAxisScale[0].niceMin+(selectionRect.left-gridRectDim.left)*xyRatios.invertedYRatio;maxX=w.globals.yAxisScale[0].niceMin+(selectionRect.right-gridRectDim.left)*xyRatios.invertedYRatio;minY=0;// there is no y min/max with rangebars (it uses categories, not numeric data), so use dummy values
maxY=1;}var xyAxis={xaxis:{min:minX,max:maxX},yaxis:{min:minY,max:maxY}};w.config.chart.events.selection(_this3.ctx,xyAxis);if(w.config.chart.brush.enabled&&w.config.chart.events.brushScrolled!==undefined){w.config.chart.events.brushScrolled(_this3.ctx,xyAxis);}},timerInterval);}}},{key:"selectionDrawn",value:function selectionDrawn(_ref4){var context=_ref4.context,zoomtype=_ref4.zoomtype;var w=this.w;var me=context;var xyRatios=this.xyRatios;var toolbar=this.ctx.toolbar;if(me.startX>me.endX){var tempX=me.startX;me.startX=me.endX;me.endX=tempX;}if(me.startY>me.endY){var tempY=me.startY;me.startY=me.endY;me.endY=tempY;}var xLowestValue=undefined;var xHighestValue=undefined;if(!w.globals.isRangeBar){xLowestValue=w.globals.xAxisScale.niceMin+me.startX*xyRatios.xRatio;xHighestValue=w.globals.xAxisScale.niceMin+me.endX*xyRatios.xRatio;}else{xLowestValue=w.globals.yAxisScale[0].niceMin+me.startX*xyRatios.invertedYRatio;xHighestValue=w.globals.yAxisScale[0].niceMin+me.endX*xyRatios.invertedYRatio;}// TODO: we will consider the 1st y axis values here for getting highest and lowest y
var yHighestValue=[];var yLowestValue=[];w.config.yaxis.forEach(function(yaxe,index){// We can use the index of any series referenced by the Yaxis
// because they will all return the same value.
var seriesIndex=w.globals.seriesYAxisMap[index][0];yHighestValue.push(w.globals.yAxisScale[index].niceMax-xyRatios.yRatio[seriesIndex]*me.startY);yLowestValue.push(w.globals.yAxisScale[index].niceMax-xyRatios.yRatio[seriesIndex]*me.endY);});if(me.dragged&&(me.dragX>10||me.dragY>10)&&xLowestValue!==xHighestValue){if(w.globals.zoomEnabled){var yaxis=Utils$1.clone(w.globals.initialConfig.yaxis);var xaxis=Utils$1.clone(w.globals.initialConfig.xaxis);w.globals.zoomed=true;if(w.config.xaxis.convertedCatToNumeric){xLowestValue=Math.floor(xLowestValue);xHighestValue=Math.floor(xHighestValue);if(xLowestValue<1){xLowestValue=1;xHighestValue=w.globals.dataPoints;}if(xHighestValue-xLowestValue<2){xHighestValue=xLowestValue+1;}}if(zoomtype==='xy'||zoomtype==='x'){xaxis={min:xLowestValue,max:xHighestValue};}if(zoomtype==='xy'||zoomtype==='y'){yaxis.forEach(function(yaxe,index){yaxis[index].min=yLowestValue[index];yaxis[index].max=yHighestValue[index];});}if(toolbar){var beforeZoomRange=toolbar.getBeforeZoomRange(xaxis,yaxis);if(beforeZoomRange){xaxis=beforeZoomRange.xaxis?beforeZoomRange.xaxis:xaxis;yaxis=beforeZoomRange.yaxis?beforeZoomRange.yaxis:yaxis;}}var options={xaxis:xaxis};if(!w.config.chart.group){// if chart in a group, prevent yaxis update here
// fix issue #650
options.yaxis=yaxis;}me.ctx.updateHelpers._updateOptions(options,false,me.w.config.chart.animations.dynamicAnimation.enabled);if(typeof w.config.chart.events.zoomed==='function'){toolbar.zoomCallback(xaxis,yaxis);}}else if(w.globals.selectionEnabled){var _yaxis=null;var _xaxis=null;_xaxis={min:xLowestValue,max:xHighestValue};if(zoomtype==='xy'||zoomtype==='y'){_yaxis=Utils$1.clone(w.config.yaxis);_yaxis.forEach(function(yaxe,index){_yaxis[index].min=yLowestValue[index];_yaxis[index].max=yHighestValue[index];});}w.globals.selection=me.selection;if(typeof w.config.chart.events.selection==='function'){w.config.chart.events.selection(me.ctx,{xaxis:_xaxis,yaxis:_yaxis});}}}}},{key:"panDragging",value:function panDragging(_ref5){var context=_ref5.context;var w=this.w;var me=context;// check to make sure there is data to compare against
if(typeof w.globals.lastClientPosition.x!=='undefined'){// get the change from last position to this position
var deltaX=w.globals.lastClientPosition.x-me.clientX;var deltaY=w.globals.lastClientPosition.y-me.clientY;// check which direction had the highest amplitude and then figure out direction by checking if the value is greater or less than zero
if(Math.abs(deltaX)>Math.abs(deltaY)&&deltaX>0){this.moveDirection='left';}else if(Math.abs(deltaX)>Math.abs(deltaY)&&deltaX<0){this.moveDirection='right';}else if(Math.abs(deltaY)>Math.abs(deltaX)&&deltaY>0){this.moveDirection='up';}else if(Math.abs(deltaY)>Math.abs(deltaX)&&deltaY<0){this.moveDirection='down';}}// set the new last position to the current for next time (to get the position of drag)
w.globals.lastClientPosition={x:me.clientX,y:me.clientY};var xLowestValue=w.globals.isRangeBar?w.globals.minY:w.globals.minX;var xHighestValue=w.globals.isRangeBar?w.globals.maxY:w.globals.maxX;// on a category, we don't pan continuosly as it causes bugs
if(!w.config.xaxis.convertedCatToNumeric){me.panScrolled(xLowestValue,xHighestValue);}}},{key:"delayedPanScrolled",value:function delayedPanScrolled(){var w=this.w;var newMinX=w.globals.minX;var newMaxX=w.globals.maxX;var centerX=(w.globals.maxX-w.globals.minX)/2;if(this.moveDirection==='left'){newMinX=w.globals.minX+centerX;newMaxX=w.globals.maxX+centerX;}else if(this.moveDirection==='right'){newMinX=w.globals.minX-centerX;newMaxX=w.globals.maxX-centerX;}newMinX=Math.floor(newMinX);newMaxX=Math.floor(newMaxX);this.updateScrolledChart({xaxis:{min:newMinX,max:newMaxX}},newMinX,newMaxX);}},{key:"panScrolled",value:function panScrolled(xLowestValue,xHighestValue){var w=this.w;var xyRatios=this.xyRatios;var yaxis=Utils$1.clone(w.globals.initialConfig.yaxis);var xRatio=xyRatios.xRatio;var minX=w.globals.minX;var maxX=w.globals.maxX;if(w.globals.isRangeBar){xRatio=xyRatios.invertedYRatio;minX=w.globals.minY;maxX=w.globals.maxY;}if(this.moveDirection==='left'){xLowestValue=minX+w.globals.gridWidth/15*xRatio;xHighestValue=maxX+w.globals.gridWidth/15*xRatio;}else if(this.moveDirection==='right'){xLowestValue=minX-w.globals.gridWidth/15*xRatio;xHighestValue=maxX-w.globals.gridWidth/15*xRatio;}if(!w.globals.isRangeBar){if(xLowestValue<w.globals.initialMinX||xHighestValue>w.globals.initialMaxX){xLowestValue=minX;xHighestValue=maxX;}}var options={xaxis:{min:xLowestValue,max:xHighestValue}};if(!w.config.chart.group){// if chart in a group, prevent yaxis update here
// fix issue #650
options.yaxis=yaxis;}this.updateScrolledChart(options,xLowestValue,xHighestValue);}},{key:"updateScrolledChart",value:function updateScrolledChart(options,xLowestValue,xHighestValue){var w=this.w;this.ctx.updateHelpers._updateOptions(options,false,false);if(typeof w.config.chart.events.scrolled==='function'){w.config.chart.events.scrolled(this.ctx,{xaxis:{min:xLowestValue,max:xHighestValue}});}}}]);return ZoomPanSelection;}(Toolbar);/**
   * ApexCharts Tooltip.Utils Class to support Tooltip functionality.
   *
   * @module Tooltip.Utils
   **/var Utils=/*#__PURE__*/function(){function Utils(tooltipContext){_classCallCheck(this,Utils);this.w=tooltipContext.w;this.ttCtx=tooltipContext;this.ctx=tooltipContext.ctx;}/**
     ** When hovering over series, you need to capture which series is being hovered on.
     ** This function will return both capturedseries index as well as inner index of that series
     * @memberof Utils
     * @param {object}
     * - hoverArea = the rect on which user hovers
     * - elGrid = dimensions of the hover rect (it can be different than hoverarea)
     */_createClass(Utils,[{key:"getNearestValues",value:function getNearestValues(_ref){var hoverArea=_ref.hoverArea,elGrid=_ref.elGrid,clientX=_ref.clientX,clientY=_ref.clientY;var w=this.w;var seriesBound=elGrid.getBoundingClientRect();var hoverWidth=seriesBound.width;var hoverHeight=seriesBound.height;var xDivisor=hoverWidth/(w.globals.dataPoints-1);var yDivisor=hoverHeight/w.globals.dataPoints;var hasBars=this.hasBars();if((w.globals.comboCharts||hasBars)&&!w.config.xaxis.convertedCatToNumeric){xDivisor=hoverWidth/w.globals.dataPoints;}var hoverX=clientX-seriesBound.left-w.globals.barPadForNumericAxis;var hoverY=clientY-seriesBound.top;var notInRect=hoverX<0||hoverY<0||hoverX>hoverWidth||hoverY>hoverHeight;if(notInRect){hoverArea.classList.remove('hovering-zoom');hoverArea.classList.remove('hovering-pan');}else{if(w.globals.zoomEnabled){hoverArea.classList.remove('hovering-pan');hoverArea.classList.add('hovering-zoom');}else if(w.globals.panEnabled){hoverArea.classList.remove('hovering-zoom');hoverArea.classList.add('hovering-pan');}}var j=Math.round(hoverX/xDivisor);var jHorz=Math.floor(hoverY/yDivisor);if(hasBars&&!w.config.xaxis.convertedCatToNumeric){j=Math.ceil(hoverX/xDivisor);j=j-1;}var capturedSeries=null;var closest=null;var seriesXValArr=w.globals.seriesXvalues.map(function(seriesXVal){return seriesXVal.filter(function(s){return Utils$1.isNumber(s);});});var seriesYValArr=w.globals.seriesYvalues.map(function(seriesYVal){return seriesYVal.filter(function(s){return Utils$1.isNumber(s);});});// if X axis type is not category and tooltip is not shared, then we need to find the cursor position and get the nearest value
if(w.globals.isXNumeric){// Change origin of cursor position so that we can compute the relative nearest point to the cursor on our chart
// we only need to scale because all points are relative to the bounds.left and bounds.top => origin is virtually (0, 0)
var chartGridEl=this.ttCtx.getElGrid();var chartGridElBoundingRect=chartGridEl.getBoundingClientRect();var transformedHoverX=hoverX*(chartGridElBoundingRect.width/hoverWidth);var transformedHoverY=hoverY*(chartGridElBoundingRect.height/hoverHeight);closest=this.closestInMultiArray(transformedHoverX,transformedHoverY,seriesXValArr,seriesYValArr);capturedSeries=closest.index;j=closest.j;if(capturedSeries!==null){// initial push, it should be a little smaller than the 1st val
seriesXValArr=w.globals.seriesXvalues[capturedSeries];closest=this.closestInArray(transformedHoverX,seriesXValArr);j=closest.index;}}w.globals.capturedSeriesIndex=capturedSeries===null?-1:capturedSeries;if(!j||j<1)j=0;if(w.globals.isBarHorizontal){w.globals.capturedDataPointIndex=jHorz;}else{w.globals.capturedDataPointIndex=j;}return{capturedSeries:capturedSeries,j:w.globals.isBarHorizontal?jHorz:j,hoverX:hoverX,hoverY:hoverY};}},{key:"closestInMultiArray",value:function closestInMultiArray(hoverX,hoverY,Xarrays,Yarrays){var w=this.w;var activeIndex=0;var currIndex=null;var j=-1;if(w.globals.series.length>1){activeIndex=this.getFirstActiveXArray(Xarrays);}else{currIndex=0;}var currX=Xarrays[activeIndex][0];var diffX=Math.abs(hoverX-currX);// find nearest point on x-axis
Xarrays.forEach(function(arrX){arrX.forEach(function(x,iX){var newDiff=Math.abs(hoverX-x);if(newDiff<=diffX){diffX=newDiff;j=iX;}});});if(j!==-1){// find nearest graph on y-axis relevanted to nearest point on x-axis
var currY=Yarrays[activeIndex][j];var diffY=Math.abs(hoverY-currY);currIndex=activeIndex;Yarrays.forEach(function(arrY,iAY){var newDiff=Math.abs(hoverY-arrY[j]);if(newDiff<=diffY){diffY=newDiff;currIndex=iAY;}});}return{index:currIndex,j:j};}},{key:"getFirstActiveXArray",value:function getFirstActiveXArray(Xarrays){var w=this.w;var activeIndex=0;var firstActiveSeriesIndex=Xarrays.map(function(xarr,index){return xarr.length>0?index:-1;});for(var a=0;a<firstActiveSeriesIndex.length;a++){if(firstActiveSeriesIndex[a]!==-1&&w.globals.collapsedSeriesIndices.indexOf(a)===-1&&w.globals.ancillaryCollapsedSeriesIndices.indexOf(a)===-1){activeIndex=firstActiveSeriesIndex[a];break;}}return activeIndex;}},{key:"closestInArray",value:function closestInArray(val,arr){var curr=arr[0];var currIndex=null;var diff=Math.abs(val-curr);for(var i=0;i<arr.length;i++){var newdiff=Math.abs(val-arr[i]);if(newdiff<diff){diff=newdiff;currIndex=i;}}return{index:currIndex};}/**
       * When there are multiple series, it is possible to have different x values for each series.
       * But it may be possible in those multiple series, that there is same x value for 2 or more
       * series.
       * @memberof Utils
       * @param {int}
       * - j = is the inner index of series -> (series[i][j])
       * @return {bool}
       */},{key:"isXoverlap",value:function isXoverlap(j){var w=this.w;var xSameForAllSeriesJArr=[];var seriesX=w.globals.seriesX.filter(function(s){return typeof s[0]!=='undefined';});if(seriesX.length>0){for(var i=0;i<seriesX.length-1;i++){if(typeof seriesX[i][j]!=='undefined'&&typeof seriesX[i+1][j]!=='undefined'){if(seriesX[i][j]!==seriesX[i+1][j]){xSameForAllSeriesJArr.push('unEqual');}}}}if(xSameForAllSeriesJArr.length===0){return true;}return false;}},{key:"isInitialSeriesSameLen",value:function isInitialSeriesSameLen(){var sameLen=true;var initialSeries=this.w.globals.initialSeries;for(var i=0;i<initialSeries.length-1;i++){if(initialSeries[i].data.length!==initialSeries[i+1].data.length){sameLen=false;break;}}return sameLen;}},{key:"getBarsHeight",value:function getBarsHeight(allbars){var bars=_toConsumableArray(allbars);var totalHeight=bars.reduce(function(acc,bar){return acc+bar.getBBox().height;},0);return totalHeight;}},{key:"getElMarkers",value:function getElMarkers(capturedSeries){// The selector .apexcharts-series-markers-wrap > * includes marker groups for which the
// .apexcharts-series-markers class is not added due to null values or discrete markers
if(typeof capturedSeries=='number'){return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(capturedSeries,"'] .apexcharts-series-markers-wrap > *"));}return this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers-wrap > *');}},{key:"getAllMarkers",value:function getAllMarkers(){// first get all marker parents. This parent class contains series-index
// which helps to sort the markers as they are dynamic
var markersWraps=this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers-wrap');markersWraps=_toConsumableArray(markersWraps);markersWraps.sort(function(a,b){var indexA=Number(a.getAttribute('data:realIndex'));var indexB=Number(b.getAttribute('data:realIndex'));return indexB<indexA?1:indexB>indexA?-1:0;});var markers=[];markersWraps.forEach(function(m){markers.push(m.querySelector('.apexcharts-marker'));});return markers;}},{key:"hasMarkers",value:function hasMarkers(capturedSeries){var markers=this.getElMarkers(capturedSeries);return markers.length>0;}},{key:"getElBars",value:function getElBars(){return this.w.globals.dom.baseEl.querySelectorAll('.apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series');}},{key:"hasBars",value:function hasBars(){var bars=this.getElBars();return bars.length>0;}},{key:"getHoverMarkerSize",value:function getHoverMarkerSize(index){var w=this.w;var hoverSize=w.config.markers.hover.size;if(hoverSize===undefined){hoverSize=w.globals.markers.size[index]+w.config.markers.hover.sizeOffset;}return hoverSize;}},{key:"toggleAllTooltipSeriesGroups",value:function toggleAllTooltipSeriesGroups(state){var w=this.w;var ttCtx=this.ttCtx;if(ttCtx.allTooltipSeriesGroups.length===0){ttCtx.allTooltipSeriesGroups=w.globals.dom.baseEl.querySelectorAll('.apexcharts-tooltip-series-group');}var allTooltipSeriesGroups=ttCtx.allTooltipSeriesGroups;for(var i=0;i<allTooltipSeriesGroups.length;i++){if(state==='enable'){allTooltipSeriesGroups[i].classList.add('apexcharts-active');allTooltipSeriesGroups[i].style.display=w.config.tooltip.items.display;}else{allTooltipSeriesGroups[i].classList.remove('apexcharts-active');allTooltipSeriesGroups[i].style.display='none';}}}}]);return Utils;}();/**
   * ApexCharts Tooltip.Labels Class to draw texts on the tooltip.
   * This file deals with printing actual text on the tooltip.
   *
   * @module Tooltip.Labels
   **/var Labels=/*#__PURE__*/function(){function Labels(tooltipContext){_classCallCheck(this,Labels);this.w=tooltipContext.w;this.ctx=tooltipContext.ctx;this.ttCtx=tooltipContext;this.tooltipUtil=new Utils(tooltipContext);}_createClass(Labels,[{key:"drawSeriesTexts",value:function drawSeriesTexts(_ref){var _ref$shared=_ref.shared,shared=_ref$shared===void 0?true:_ref$shared,ttItems=_ref.ttItems,_ref$i=_ref.i,i=_ref$i===void 0?0:_ref$i,_ref$j=_ref.j,j=_ref$j===void 0?null:_ref$j,y1=_ref.y1,y2=_ref.y2,e=_ref.e;var w=this.w;if(w.config.tooltip.custom!==undefined){this.handleCustomTooltip({i:i,j:j,y1:y1,y2:y2,w:w});}else{this.toggleActiveInactiveSeries(shared);}var values=this.getValuesToPrint({i:i,j:j});this.printLabels({i:i,j:j,values:values,ttItems:ttItems,shared:shared,e:e});// Re-calculate tooltip dimensions now that we have drawn the text
var tooltipEl=this.ttCtx.getElTooltip();this.ttCtx.tooltipRect.ttWidth=tooltipEl.getBoundingClientRect().width;this.ttCtx.tooltipRect.ttHeight=tooltipEl.getBoundingClientRect().height;}},{key:"printLabels",value:function printLabels(_ref2){var _this=this;var i=_ref2.i,j=_ref2.j,values=_ref2.values,ttItems=_ref2.ttItems,shared=_ref2.shared,e=_ref2.e;var w=this.w;var val;var goalVals=[];var hasGoalValues=function hasGoalValues(gi){return w.globals.seriesGoals[gi]&&w.globals.seriesGoals[gi][j]&&Array.isArray(w.globals.seriesGoals[gi][j]);};var xVal=values.xVal,zVal=values.zVal,xAxisTTVal=values.xAxisTTVal;var seriesName='';var pColor=w.globals.colors[i];// The pColor here is for the markers inside tooltip
if(j!==null&&w.config.plotOptions.bar.distributed){pColor=w.globals.colors[j];}var _loop=function _loop(t,inverset){var f=_this.getFormatters(i);seriesName=_this.getSeriesName({fn:f.yLbTitleFormatter,index:i,seriesIndex:i,j:j});if(w.config.chart.type==='treemap'){seriesName=f.yLbTitleFormatter(String(w.config.series[i].data[j].x),{series:w.globals.series,seriesIndex:i,dataPointIndex:j,w:w});}var tIndex=w.config.tooltip.inverseOrder?inverset:t;if(w.globals.axisCharts){var getValBySeriesIndex=function getValBySeriesIndex(index){if(w.globals.isRangeData){var _w$globals$seriesRang,_w$globals$seriesRang2,_w$globals$seriesRang3,_w$globals$seriesRang4;return f.yLbFormatter((_w$globals$seriesRang=w.globals.seriesRangeStart)===null||_w$globals$seriesRang===void 0?void 0:(_w$globals$seriesRang2=_w$globals$seriesRang[index])===null||_w$globals$seriesRang2===void 0?void 0:_w$globals$seriesRang2[j],{series:w.globals.seriesRangeStart,seriesIndex:index,dataPointIndex:j,w:w})+' - '+f.yLbFormatter((_w$globals$seriesRang3=w.globals.seriesRangeEnd)===null||_w$globals$seriesRang3===void 0?void 0:(_w$globals$seriesRang4=_w$globals$seriesRang3[index])===null||_w$globals$seriesRang4===void 0?void 0:_w$globals$seriesRang4[j],{series:w.globals.seriesRangeEnd,seriesIndex:index,dataPointIndex:j,w:w});}return f.yLbFormatter(w.globals.series[index][j],{series:w.globals.series,seriesIndex:index,dataPointIndex:j,w:w});};if(shared){f=_this.getFormatters(tIndex);seriesName=_this.getSeriesName({fn:f.yLbTitleFormatter,index:tIndex,seriesIndex:i,j:j});pColor=w.globals.colors[tIndex];val=getValBySeriesIndex(tIndex);if(hasGoalValues(tIndex)){goalVals=w.globals.seriesGoals[tIndex][j].map(function(goal){return{attrs:goal,val:f.yLbFormatter(goal.value,{seriesIndex:tIndex,dataPointIndex:j,w:w})};});}}else{var _e$target;// get a color from a hover area (if it's a line pattern then get from a first line)
var targetFill=e===null||e===void 0?void 0:(_e$target=e.target)===null||_e$target===void 0?void 0:_e$target.getAttribute('fill');if(targetFill){pColor=targetFill.indexOf('url')!==-1?document.querySelector(targetFill.substr(4).slice(0,-1)).childNodes[0].getAttribute('stroke'):targetFill;}val=getValBySeriesIndex(i);if(hasGoalValues(i)&&Array.isArray(w.globals.seriesGoals[i][j])){goalVals=w.globals.seriesGoals[i][j].map(function(goal){return{attrs:goal,val:f.yLbFormatter(goal.value,{seriesIndex:i,dataPointIndex:j,w:w})};});}}}// for pie / donuts
if(j===null){val=f.yLbFormatter(w.globals.series[i],_objectSpread2(_objectSpread2({},w),{},{seriesIndex:i,dataPointIndex:i}));}_this.DOMHandling({i:i,t:tIndex,j:j,ttItems:ttItems,values:{val:val,goalVals:goalVals,xVal:xVal,xAxisTTVal:xAxisTTVal,zVal:zVal},seriesName:seriesName,shared:shared,pColor:pColor});};for(var t=0,inverset=w.globals.series.length-1;t<w.globals.series.length;t++,inverset--){_loop(t,inverset);}}},{key:"getFormatters",value:function getFormatters(i){var w=this.w;var yLbFormatter=w.globals.yLabelFormatters[i];var yLbTitleFormatter;if(w.globals.ttVal!==undefined){if(Array.isArray(w.globals.ttVal)){yLbFormatter=w.globals.ttVal[i]&&w.globals.ttVal[i].formatter;yLbTitleFormatter=w.globals.ttVal[i]&&w.globals.ttVal[i].title&&w.globals.ttVal[i].title.formatter;}else{yLbFormatter=w.globals.ttVal.formatter;if(typeof w.globals.ttVal.title.formatter==='function'){yLbTitleFormatter=w.globals.ttVal.title.formatter;}}}else{yLbTitleFormatter=w.config.tooltip.y.title.formatter;}if(typeof yLbFormatter!=='function'){if(w.globals.yLabelFormatters[0]){yLbFormatter=w.globals.yLabelFormatters[0];}else{yLbFormatter=function yLbFormatter(label){return label;};}}if(typeof yLbTitleFormatter!=='function'){yLbTitleFormatter=function yLbTitleFormatter(label){return label;};}return{yLbFormatter:yLbFormatter,yLbTitleFormatter:yLbTitleFormatter};}},{key:"getSeriesName",value:function getSeriesName(_ref3){var fn=_ref3.fn,index=_ref3.index,seriesIndex=_ref3.seriesIndex,j=_ref3.j;var w=this.w;return fn(String(w.globals.seriesNames[index]),{series:w.globals.series,seriesIndex:seriesIndex,dataPointIndex:j,w:w});}},{key:"DOMHandling",value:function DOMHandling(_ref4){_ref4.i;var t=_ref4.t,j=_ref4.j,ttItems=_ref4.ttItems,values=_ref4.values,seriesName=_ref4.seriesName,shared=_ref4.shared,pColor=_ref4.pColor;var w=this.w;var ttCtx=this.ttCtx;var val=values.val,goalVals=values.goalVals,xVal=values.xVal,xAxisTTVal=values.xAxisTTVal,zVal=values.zVal;var ttItemsChildren=null;ttItemsChildren=ttItems[t].children;if(w.config.tooltip.fillSeriesColor){ttItems[t].style.backgroundColor=pColor;ttItemsChildren[0].style.display='none';}if(ttCtx.showTooltipTitle){if(ttCtx.tooltipTitle===null){// get it once if null, and store it in class property
ttCtx.tooltipTitle=w.globals.dom.baseEl.querySelector('.apexcharts-tooltip-title');}ttCtx.tooltipTitle.innerHTML=xVal;}// if xaxis tooltip is constructed, we need to replace the innerHTML
if(ttCtx.isXAxisTooltipEnabled){ttCtx.xaxisTooltipText.innerHTML=xAxisTTVal!==''?xAxisTTVal:xVal;}var ttYLabel=ttItems[t].querySelector('.apexcharts-tooltip-text-y-label');if(ttYLabel){ttYLabel.innerHTML=seriesName?seriesName:'';}var ttYVal=ttItems[t].querySelector('.apexcharts-tooltip-text-y-value');if(ttYVal){ttYVal.innerHTML=typeof val!=='undefined'?val:'';}if(ttItemsChildren[0]&&ttItemsChildren[0].classList.contains('apexcharts-tooltip-marker')){if(w.config.tooltip.marker.fillColors&&Array.isArray(w.config.tooltip.marker.fillColors)){pColor=w.config.tooltip.marker.fillColors[t];}ttItemsChildren[0].style.backgroundColor=pColor;}if(!w.config.tooltip.marker.show){ttItemsChildren[0].style.display='none';}var ttGLabel=ttItems[t].querySelector('.apexcharts-tooltip-text-goals-label');var ttGVal=ttItems[t].querySelector('.apexcharts-tooltip-text-goals-value');if(goalVals.length&&w.globals.seriesGoals[t]){var createGoalsHtml=function createGoalsHtml(){var gLabels='<div >';var gVals='<div>';goalVals.forEach(function(goal,gi){gLabels+=" <div style=\"display: flex\"><span class=\"apexcharts-tooltip-marker\" style=\"background-color: ".concat(goal.attrs.strokeColor,"; height: 3px; border-radius: 0; top: 5px;\"></span> ").concat(goal.attrs.name,"</div>");gVals+="<div>".concat(goal.val,"</div>");});ttGLabel.innerHTML=gLabels+"</div>";ttGVal.innerHTML=gVals+"</div>";};if(shared){if(w.globals.seriesGoals[t][j]&&Array.isArray(w.globals.seriesGoals[t][j])){createGoalsHtml();}else{ttGLabel.innerHTML='';ttGVal.innerHTML='';}}else{createGoalsHtml();}}else{ttGLabel.innerHTML='';ttGVal.innerHTML='';}if(zVal!==null){var ttZLabel=ttItems[t].querySelector('.apexcharts-tooltip-text-z-label');ttZLabel.innerHTML=w.config.tooltip.z.title;var ttZVal=ttItems[t].querySelector('.apexcharts-tooltip-text-z-value');ttZVal.innerHTML=typeof zVal!=='undefined'?zVal:'';}if(shared&&ttItemsChildren[0]){// hide when no Val or series collapsed
if(w.config.tooltip.hideEmptySeries){var ttItemMarker=ttItems[t].querySelector('.apexcharts-tooltip-marker');var ttItemText=ttItems[t].querySelector('.apexcharts-tooltip-text');if(parseFloat(val)==0){ttItemMarker.style.display='none';ttItemText.style.display='none';}else{ttItemMarker.style.display='block';ttItemText.style.display='block';}}if(typeof val==='undefined'||val===null||w.globals.ancillaryCollapsedSeriesIndices.indexOf(t)>-1||w.globals.collapsedSeriesIndices.indexOf(t)>-1){ttItemsChildren[0].parentNode.style.display='none';}else{ttItemsChildren[0].parentNode.style.display=w.config.tooltip.items.display;}}}},{key:"toggleActiveInactiveSeries",value:function toggleActiveInactiveSeries(shared){var w=this.w;if(shared){// make all tooltips active
this.tooltipUtil.toggleAllTooltipSeriesGroups('enable');}else{// disable all tooltip text groups
this.tooltipUtil.toggleAllTooltipSeriesGroups('disable');// enable the first tooltip text group
var firstTooltipSeriesGroup=w.globals.dom.baseEl.querySelector('.apexcharts-tooltip-series-group');if(firstTooltipSeriesGroup){firstTooltipSeriesGroup.classList.add('apexcharts-active');firstTooltipSeriesGroup.style.display=w.config.tooltip.items.display;}}}},{key:"getValuesToPrint",value:function getValuesToPrint(_ref5){var i=_ref5.i,j=_ref5.j;var w=this.w;var filteredSeriesX=this.ctx.series.filteredSeriesX();var xVal='';var xAxisTTVal='';var zVal=null;var val=null;var customFormatterOpts={series:w.globals.series,seriesIndex:i,dataPointIndex:j,w:w};var zFormatter=w.globals.ttZFormatter;if(j===null){val=w.globals.series[i];}else{if(w.globals.isXNumeric&&w.config.chart.type!=='treemap'){xVal=filteredSeriesX[i][j];if(filteredSeriesX[i].length===0){// a series (possibly the first one) might be collapsed, so get the next active index
var firstActiveSeriesIndex=this.tooltipUtil.getFirstActiveXArray(filteredSeriesX);xVal=filteredSeriesX[firstActiveSeriesIndex][j];}}else{xVal=typeof w.globals.labels[j]!=='undefined'?w.globals.labels[j]:'';}}var bufferXVal=xVal;if(w.globals.isXNumeric&&w.config.xaxis.type==='datetime'){var xFormat=new Formatters(this.ctx);xVal=xFormat.xLabelFormat(w.globals.ttKeyFormatter,bufferXVal,bufferXVal,{i:undefined,dateFormatter:new DateTime(this.ctx).formatDate,w:this.w});}else{if(w.globals.isBarHorizontal){xVal=w.globals.yLabelFormatters[0](bufferXVal,customFormatterOpts);}else{xVal=w.globals.xLabelFormatter(bufferXVal,customFormatterOpts);}}// override default x-axis formatter with tooltip formatter
if(w.config.tooltip.x.formatter!==undefined){xVal=w.globals.ttKeyFormatter(bufferXVal,customFormatterOpts);}if(w.globals.seriesZ.length>0&&w.globals.seriesZ[i].length>0){zVal=zFormatter(w.globals.seriesZ[i][j],w);}if(typeof w.config.xaxis.tooltip.formatter==='function'){xAxisTTVal=w.globals.xaxisTooltipFormatter(bufferXVal,customFormatterOpts);}else{xAxisTTVal=xVal;}return{val:Array.isArray(val)?val.join(' '):val,xVal:Array.isArray(xVal)?xVal.join(' '):xVal,xAxisTTVal:Array.isArray(xAxisTTVal)?xAxisTTVal.join(' '):xAxisTTVal,zVal:zVal};}},{key:"handleCustomTooltip",value:function handleCustomTooltip(_ref6){var i=_ref6.i,j=_ref6.j,y1=_ref6.y1,y2=_ref6.y2,w=_ref6.w;var tooltipEl=this.ttCtx.getElTooltip();var fn=w.config.tooltip.custom;if(Array.isArray(fn)&&fn[i]){fn=fn[i];}// override everything with a custom html tooltip and replace it
tooltipEl.innerHTML=fn({ctx:this.ctx,series:w.globals.series,seriesIndex:i,dataPointIndex:j,y1:y1,y2:y2,w:w});}}]);return Labels;}();/**
   * ApexCharts Tooltip.Position Class to move the tooltip based on x and y position.
   *
   * @module Tooltip.Position
   **/var Position=/*#__PURE__*/function(){function Position(tooltipContext){_classCallCheck(this,Position);this.ttCtx=tooltipContext;this.ctx=tooltipContext.ctx;this.w=tooltipContext.w;}/**
     * This will move the crosshair (the vertical/horz line that moves along with mouse)
     * Along with this, this function also calls the xaxisMove function
     * @memberof Position
     * @param {int} - cx = point's x position, wherever point's x is, you need to move crosshair
     */_createClass(Position,[{key:"moveXCrosshairs",value:function moveXCrosshairs(cx){var j=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var ttCtx=this.ttCtx;var w=this.w;var xcrosshairs=ttCtx.getElXCrosshairs();var x=cx-ttCtx.xcrosshairsWidth/2;var tickAmount=w.globals.labels.slice().length;if(j!==null){x=w.globals.gridWidth/tickAmount*j;}if(xcrosshairs!==null&&!w.globals.isBarHorizontal){xcrosshairs.setAttribute('x',x);xcrosshairs.setAttribute('x1',x);xcrosshairs.setAttribute('x2',x);xcrosshairs.setAttribute('y2',w.globals.gridHeight);xcrosshairs.classList.add('apexcharts-active');}if(x<0){x=0;}if(x>w.globals.gridWidth){x=w.globals.gridWidth;}if(ttCtx.isXAxisTooltipEnabled){var tx=x;if(w.config.xaxis.crosshairs.width==='tickWidth'||w.config.xaxis.crosshairs.width==='barWidth'){tx=x+ttCtx.xcrosshairsWidth/2;}this.moveXAxisTooltip(tx);}}/**
       * This will move the crosshair (the vertical/horz line that moves along with mouse)
       * Along with this, this function also calls the xaxisMove function
       * @memberof Position
       * @param {int} - cx = point's x position, wherever point's x is, you need to move crosshair
       */},{key:"moveYCrosshairs",value:function moveYCrosshairs(cy){var ttCtx=this.ttCtx;if(ttCtx.ycrosshairs!==null){Graphics.setAttrs(ttCtx.ycrosshairs,{y1:cy,y2:cy});}if(ttCtx.ycrosshairsHidden!==null){Graphics.setAttrs(ttCtx.ycrosshairsHidden,{y1:cy,y2:cy});}}/**
       ** AxisTooltip is the small rectangle which appears on x axis with x value, when user moves
       * @memberof Position
       * @param {int} - cx = point's x position, wherever point's x is, you need to move
       */},{key:"moveXAxisTooltip",value:function moveXAxisTooltip(cx){var w=this.w;var ttCtx=this.ttCtx;if(ttCtx.xaxisTooltip!==null&&ttCtx.xcrosshairsWidth!==0){ttCtx.xaxisTooltip.classList.add('apexcharts-active');var cy=ttCtx.xaxisOffY+w.config.xaxis.tooltip.offsetY+w.globals.translateY+1+w.config.xaxis.offsetY;var xaxisTTText=ttCtx.xaxisTooltip.getBoundingClientRect();var xaxisTTTextWidth=xaxisTTText.width;cx=cx-xaxisTTTextWidth/2;if(!isNaN(cx)){cx=cx+w.globals.translateX;var textRect=0;var graphics=new Graphics(this.ctx);textRect=graphics.getTextRects(ttCtx.xaxisTooltipText.innerHTML);ttCtx.xaxisTooltipText.style.minWidth=textRect.width+'px';ttCtx.xaxisTooltip.style.left=cx+'px';ttCtx.xaxisTooltip.style.top=cy+'px';}}}},{key:"moveYAxisTooltip",value:function moveYAxisTooltip(index){var w=this.w;var ttCtx=this.ttCtx;if(ttCtx.yaxisTTEls===null){ttCtx.yaxisTTEls=w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxistooltip');}var ycrosshairsHiddenRectY1=parseInt(ttCtx.ycrosshairsHidden.getAttribute('y1'),10);var cy=w.globals.translateY+ycrosshairsHiddenRectY1;var yAxisTTRect=ttCtx.yaxisTTEls[index].getBoundingClientRect();var yAxisTTHeight=yAxisTTRect.height;var cx=w.globals.translateYAxisX[index]-2;if(w.config.yaxis[index].opposite){cx=cx-26;}cy=cy-yAxisTTHeight/2;if(w.globals.ignoreYAxisIndexes.indexOf(index)===-1){ttCtx.yaxisTTEls[index].classList.add('apexcharts-active');ttCtx.yaxisTTEls[index].style.top=cy+'px';ttCtx.yaxisTTEls[index].style.left=cx+w.config.yaxis[index].tooltip.offsetX+'px';}else{ttCtx.yaxisTTEls[index].classList.remove('apexcharts-active');}}/**
       ** moves the whole tooltip by changing x, y attrs
       * @memberof Position
       * @param {int} - cx = point's x position, wherever point's x is, you need to move tooltip
       * @param {int} - cy = point's y position, wherever point's y is, you need to move tooltip
       * @param {int} - r = point's radius
       */},{key:"moveTooltip",value:function moveTooltip(cx,cy){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var w=this.w;var ttCtx=this.ttCtx;var tooltipEl=ttCtx.getElTooltip();var tooltipRect=ttCtx.tooltipRect;var pointR=r!==null?parseFloat(r):1;var x=parseFloat(cx)+pointR+5;var y=parseFloat(cy)+pointR/2;// - tooltipRect.ttHeight / 2
if(x>w.globals.gridWidth/2){x=x-tooltipRect.ttWidth-pointR-10;}if(x>w.globals.gridWidth-tooltipRect.ttWidth-10){x=w.globals.gridWidth-tooltipRect.ttWidth;}if(x<-20){x=-20;}if(w.config.tooltip.followCursor){var elGrid=ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();x=ttCtx.e.clientX-seriesBound.left;if(x>w.globals.gridWidth/2){x=x-ttCtx.tooltipRect.ttWidth;}y=ttCtx.e.clientY+w.globals.translateY-seriesBound.top;if(y>w.globals.gridHeight/2){y=y-ttCtx.tooltipRect.ttHeight;}}else{if(!w.globals.isBarHorizontal){if(tooltipRect.ttHeight/2+y>w.globals.gridHeight){y=w.globals.gridHeight-tooltipRect.ttHeight+w.globals.translateY;}}}if(!isNaN(x)){x=x+w.globals.translateX;tooltipEl.style.left=x+'px';tooltipEl.style.top=y+'px';}}},{key:"moveMarkers",value:function moveMarkers(i,j){var w=this.w;var ttCtx=this.ttCtx;if(w.globals.markers.size[i]>0){var allPoints=w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(i,"'] .apexcharts-marker"));for(var p=0;p<allPoints.length;p++){if(parseInt(allPoints[p].getAttribute('rel'),10)===j){ttCtx.marker.resetPointsSize();ttCtx.marker.enlargeCurrentPoint(j,allPoints[p]);}}}else{ttCtx.marker.resetPointsSize();this.moveDynamicPointOnHover(j,i);}}// This function is used when you need to show markers/points only on hover -
// DIFFERENT X VALUES in multiple series
},{key:"moveDynamicPointOnHover",value:function moveDynamicPointOnHover(j,capturedSeries){var w=this.w;var ttCtx=this.ttCtx;var cx=0;var cy=0;var pointsArr=w.globals.pointsArray;var hoverSize=ttCtx.tooltipUtil.getHoverMarkerSize(capturedSeries);var serType=w.config.series[capturedSeries].type;if(serType&&(serType==='column'||serType==='candlestick'||serType==='boxPlot')){// fix error mentioned in #811
return;}cx=pointsArr[capturedSeries][j][0];cy=pointsArr[capturedSeries][j][1]?pointsArr[capturedSeries][j][1]:0;var point=w.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(capturedSeries,"'] .apexcharts-series-markers circle"));if(point&&cy<w.globals.gridHeight&&cy>0){point.setAttribute('r',hoverSize);point.setAttribute('cx',cx);point.setAttribute('cy',cy);}// point.style.opacity = w.config.markers.hover.opacity
this.moveXCrosshairs(cx);if(!ttCtx.fixedTooltip){this.moveTooltip(cx,cy,hoverSize);}}// This function is used when you need to show markers/points only on hover -
// SAME X VALUES in multiple series
},{key:"moveDynamicPointsOnHover",value:function moveDynamicPointsOnHover(j){var ttCtx=this.ttCtx;var w=ttCtx.w;var cx=0;var cy=0;var activeSeries=0;var pointsArr=w.globals.pointsArray;var series=new Series(this.ctx);activeSeries=series.getActiveConfigSeriesIndex('asc',['line','area','scatter','bubble']);var hoverSize=ttCtx.tooltipUtil.getHoverMarkerSize(activeSeries);if(pointsArr[activeSeries]){cx=pointsArr[activeSeries][j][0];cy=pointsArr[activeSeries][j][1];}var points=ttCtx.tooltipUtil.getAllMarkers();if(points!==null){for(var p=0;p<w.globals.series.length;p++){var pointArr=pointsArr[p];if(w.globals.comboCharts){// in a combo chart, if column charts are present, markers will not match with the number of series, hence this patch to push a null value in points array
if(typeof pointArr==='undefined'){// nodelist to array
points.splice(p,0,null);}}if(pointArr&&pointArr.length){var pcy=pointsArr[p][j][1];var pcy2=void 0;points[p].setAttribute('cx',cx);if(w.config.chart.type==='rangeArea'&&!w.globals.comboCharts){var rangeStartIndex=j+w.globals.series[p].length;pcy2=pointsArr[p][rangeStartIndex][1];var pcyDiff=Math.abs(pcy-pcy2)/2;pcy=pcy-pcyDiff;}if(pcy!==null&&!isNaN(pcy)&&pcy<w.globals.gridHeight+hoverSize&&pcy+hoverSize>0){points[p]&&points[p].setAttribute('r',hoverSize);points[p]&&points[p].setAttribute('cy',pcy);}else{points[p]&&points[p].setAttribute('r',0);}}}}this.moveXCrosshairs(cx);if(!ttCtx.fixedTooltip){this.moveTooltip(cx,cy||w.globals.gridHeight,hoverSize);}}},{key:"moveStickyTooltipOverBars",value:function moveStickyTooltipOverBars(j,capturedSeries){var w=this.w;var ttCtx=this.ttCtx;var barLen=w.globals.columnSeries?w.globals.columnSeries.length:w.globals.series.length;var i=barLen>=2&&barLen%2===0?Math.floor(barLen/2):Math.floor(barLen/2)+1;if(w.globals.isBarHorizontal){var series=new Series(this.ctx);i=series.getActiveConfigSeriesIndex('desc')+1;}var jBar=w.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(i,"'] path[j='").concat(j,"'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(i,"'] path[j='").concat(j,"'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(i,"'] path[j='").concat(j,"'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(i,"'] path[j='").concat(j,"']"));if(!jBar&&typeof capturedSeries==='number'){// Try with captured series index
jBar=w.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(capturedSeries,"'] path[j='").concat(j,"'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(capturedSeries,"'] path[j='").concat(j,"'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(capturedSeries,"'] path[j='").concat(j,"'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(capturedSeries,"'] path[j='").concat(j,"']"));}var bcx=jBar?parseFloat(jBar.getAttribute('cx')):0;var bcy=jBar?parseFloat(jBar.getAttribute('cy')):0;var bw=jBar?parseFloat(jBar.getAttribute('barWidth')):0;var elGrid=ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();var isBoxOrCandle=jBar&&(jBar.classList.contains('apexcharts-candlestick-area')||jBar.classList.contains('apexcharts-boxPlot-area'));if(w.globals.isXNumeric){if(jBar&&!isBoxOrCandle){bcx=bcx-(barLen%2!==0?bw/2:0);}if(jBar&&// fixes apexcharts.js#2354
isBoxOrCandle&&w.globals.comboCharts){bcx=bcx-bw/2;}}else{if(!w.globals.isBarHorizontal){bcx=ttCtx.xAxisTicksPositions[j-1]+ttCtx.dataPointsDividedWidth/2;if(isNaN(bcx)){bcx=ttCtx.xAxisTicksPositions[j]-ttCtx.dataPointsDividedWidth/2;}}}if(!w.globals.isBarHorizontal){if(w.config.tooltip.followCursor){bcy=ttCtx.e.clientY-seriesBound.top-ttCtx.tooltipRect.ttHeight/2;}else{if(bcy+ttCtx.tooltipRect.ttHeight+15>w.globals.gridHeight){bcy=w.globals.gridHeight;}}}else{bcy=bcy-ttCtx.tooltipRect.ttHeight;}if(!w.globals.isBarHorizontal){this.moveXCrosshairs(bcx);}if(!ttCtx.fixedTooltip){this.moveTooltip(bcx,bcy||w.globals.gridHeight);}}}]);return Position;}();/**
   * ApexCharts Tooltip.Marker Class to draw texts on the tooltip.
   * This file deals with the markers that appear near tooltip in line/area charts.
   * These markers helps the user to associate the data-points and the values
   * that are shown in the tooltip
   *
   * @module Tooltip.Marker
   **/var Marker=/*#__PURE__*/function(){function Marker(tooltipContext){_classCallCheck(this,Marker);this.w=tooltipContext.w;this.ttCtx=tooltipContext;this.ctx=tooltipContext.ctx;this.tooltipPosition=new Position(tooltipContext);}_createClass(Marker,[{key:"drawDynamicPoints",value:function drawDynamicPoints(){var w=this.w;var graphics=new Graphics(this.ctx);var marker=new Markers(this.ctx);var elsSeries=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series');elsSeries=_toConsumableArray(elsSeries);if(w.config.chart.stacked){elsSeries.sort(function(a,b){return parseFloat(a.getAttribute('data:realIndex'))-parseFloat(b.getAttribute('data:realIndex'));});}for(var i=0;i<elsSeries.length;i++){var pointsMain=elsSeries[i].querySelector(".apexcharts-series-markers-wrap");if(pointsMain!==null){// it can be null as we have tooltips in donut/bar charts
var point=void 0;var PointClasses="apexcharts-marker w".concat((Math.random()+1).toString(36).substring(4));if((w.config.chart.type==='line'||w.config.chart.type==='area')&&!w.globals.comboCharts&&!w.config.tooltip.intersect){PointClasses+=' no-pointer-events';}var elPointOptions=marker.getMarkerConfig({cssClass:PointClasses,seriesIndex:Number(pointsMain.getAttribute('data:realIndex'))// fixes apexcharts/apexcharts.js #1427
});point=graphics.drawMarker(0,0,elPointOptions);point.node.setAttribute('default-marker-size',0);var elPointsG=document.createElementNS(w.globals.SVGNS,'g');elPointsG.classList.add('apexcharts-series-markers');elPointsG.appendChild(point.node);pointsMain.appendChild(elPointsG);}}}},{key:"enlargeCurrentPoint",value:function enlargeCurrentPoint(rel,point){var x=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var y=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var w=this.w;if(w.config.chart.type!=='bubble'){this.newPointSize(rel,point);}var cx=point.getAttribute('cx');var cy=point.getAttribute('cy');if(x!==null&&y!==null){cx=x;cy=y;}this.tooltipPosition.moveXCrosshairs(cx);if(!this.fixedTooltip){if(w.config.chart.type==='radar'){var elGrid=this.ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();cx=this.ttCtx.e.clientX-seriesBound.left;}this.tooltipPosition.moveTooltip(cx,cy,w.config.markers.hover.size);}}},{key:"enlargePoints",value:function enlargePoints(j){var w=this.w;var me=this;var ttCtx=this.ttCtx;var col=j;var points=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker');var newSize=w.config.markers.hover.size;for(var p=0;p<points.length;p++){var rel=points[p].getAttribute('rel');var index=points[p].getAttribute('index');if(newSize===undefined){newSize=w.globals.markers.size[index]+w.config.markers.hover.sizeOffset;}if(col===parseInt(rel,10)){me.newPointSize(col,points[p]);var cx=points[p].getAttribute('cx');var cy=points[p].getAttribute('cy');me.tooltipPosition.moveXCrosshairs(cx);if(!ttCtx.fixedTooltip){me.tooltipPosition.moveTooltip(cx,cy,newSize);}}else{me.oldPointSize(points[p]);}}}},{key:"newPointSize",value:function newPointSize(rel,point){var w=this.w;var newSize=w.config.markers.hover.size;var elPoint=rel===0?point.parentNode.firstChild:point.parentNode.lastChild;if(elPoint.getAttribute('default-marker-size')!=='0'){var index=parseInt(elPoint.getAttribute('index'),10);if(newSize===undefined){newSize=w.globals.markers.size[index]+w.config.markers.hover.sizeOffset;}if(newSize<0)newSize=0;elPoint.setAttribute('r',newSize);}}},{key:"oldPointSize",value:function oldPointSize(point){var size=parseFloat(point.getAttribute('default-marker-size'));point.setAttribute('r',size);}},{key:"resetPointsSize",value:function resetPointsSize(){var w=this.w;var points=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker');for(var p=0;p<points.length;p++){var size=parseFloat(points[p].getAttribute('default-marker-size'));if(Utils$1.isNumber(size)&&size>=0){points[p].setAttribute('r',size);}else{points[p].setAttribute('r',0);}}}}]);return Marker;}();/**
   * ApexCharts Tooltip.Intersect Class.
   * This file deals with functions related to intersecting tooltips
   * (tooltips that appear when user hovers directly over a data-point whether)
   *
   * @module Tooltip.Intersect
   **/var Intersect=/*#__PURE__*/function(){function Intersect(tooltipContext){_classCallCheck(this,Intersect);this.w=tooltipContext.w;var w=this.w;this.ttCtx=tooltipContext;this.isVerticalGroupedRangeBar=!w.globals.isBarHorizontal&&w.config.chart.type==='rangeBar'&&w.config.plotOptions.bar.rangeBarGroupRows;}// a helper function to get an element's attribute value
_createClass(Intersect,[{key:"getAttr",value:function getAttr(e,attr){return parseFloat(e.target.getAttribute(attr));}// handle tooltip for heatmaps and treemaps
},{key:"handleHeatTreeTooltip",value:function handleHeatTreeTooltip(_ref){var e=_ref.e,opt=_ref.opt,x=_ref.x,y=_ref.y,type=_ref.type;var ttCtx=this.ttCtx;var w=this.w;if(e.target.classList.contains("apexcharts-".concat(type,"-rect"))){var i=this.getAttr(e,'i');var j=this.getAttr(e,'j');var cx=this.getAttr(e,'cx');var cy=this.getAttr(e,'cy');var width=this.getAttr(e,'width');var height=this.getAttr(e,'height');ttCtx.tooltipLabels.drawSeriesTexts({ttItems:opt.ttItems,i:i,j:j,shared:false,e:e});w.globals.capturedSeriesIndex=i;w.globals.capturedDataPointIndex=j;x=cx+ttCtx.tooltipRect.ttWidth/2+width;y=cy+ttCtx.tooltipRect.ttHeight/2-height/2;ttCtx.tooltipPosition.moveXCrosshairs(cx+width/2);if(x>w.globals.gridWidth/2){x=cx-ttCtx.tooltipRect.ttWidth/2+width;}if(ttCtx.w.config.tooltip.followCursor){var seriesBound=w.globals.dom.elWrap.getBoundingClientRect();x=w.globals.clientX-seriesBound.left-(x>w.globals.gridWidth/2?ttCtx.tooltipRect.ttWidth:0);y=w.globals.clientY-seriesBound.top-(y>w.globals.gridHeight/2?ttCtx.tooltipRect.ttHeight:0);}}return{x:x,y:y};}/**
       * handle tooltips for line/area/scatter charts where tooltip.intersect is true
       * when user hovers over the marker directly, this function is executed
       */},{key:"handleMarkerTooltip",value:function handleMarkerTooltip(_ref2){var e=_ref2.e,opt=_ref2.opt,x=_ref2.x,y=_ref2.y;var w=this.w;var ttCtx=this.ttCtx;var i;var j;if(e.target.classList.contains('apexcharts-marker')){var cx=parseInt(opt.paths.getAttribute('cx'),10);var cy=parseInt(opt.paths.getAttribute('cy'),10);var val=parseFloat(opt.paths.getAttribute('val'));j=parseInt(opt.paths.getAttribute('rel'),10);i=parseInt(opt.paths.parentNode.parentNode.parentNode.getAttribute('rel'),10)-1;if(ttCtx.intersect){var el=Utils$1.findAncestor(opt.paths,'apexcharts-series');if(el){i=parseInt(el.getAttribute('data:realIndex'),10);}}ttCtx.tooltipLabels.drawSeriesTexts({ttItems:opt.ttItems,i:i,j:j,shared:ttCtx.showOnIntersect?false:w.config.tooltip.shared,e:e});if(e.type==='mouseup'){ttCtx.markerClick(e,i,j);}w.globals.capturedSeriesIndex=i;w.globals.capturedDataPointIndex=j;x=cx;y=cy+w.globals.translateY-ttCtx.tooltipRect.ttHeight*1.4;if(ttCtx.w.config.tooltip.followCursor){var elGrid=ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();y=ttCtx.e.clientY+w.globals.translateY-seriesBound.top;}if(val<0){y=cy;}ttCtx.marker.enlargeCurrentPoint(j,opt.paths,x,y);}return{x:x,y:y};}/**
       * handle tooltips for bar/column charts
       */},{key:"handleBarTooltip",value:function handleBarTooltip(_ref3){var e=_ref3.e,opt=_ref3.opt;var w=this.w;var ttCtx=this.ttCtx;var tooltipEl=ttCtx.getElTooltip();var bx=0;var x=0;var y=0;var i=0;var strokeWidth;var barXY=this.getBarTooltipXY({e:e,opt:opt});i=barXY.i;var barHeight=barXY.barHeight;var j=barXY.j;w.globals.capturedSeriesIndex=i;w.globals.capturedDataPointIndex=j;if(w.globals.isBarHorizontal&&ttCtx.tooltipUtil.hasBars()||!w.config.tooltip.shared){x=barXY.x;y=barXY.y;strokeWidth=Array.isArray(w.config.stroke.width)?w.config.stroke.width[i]:w.config.stroke.width;bx=x;}else{if(!w.globals.comboCharts&&!w.config.tooltip.shared){// todo: re-check this condition as it's always 0
bx=bx/2;}}// y is NaN, make it touch the bottom of grid area
if(isNaN(y)){y=w.globals.svgHeight-ttCtx.tooltipRect.ttHeight;}var seriesIndex=parseInt(opt.paths.parentNode.getAttribute('data:realIndex'),10);var isReversed=w.globals.isMultipleYAxis?w.config.yaxis[seriesIndex]&&w.config.yaxis[seriesIndex].reversed:w.config.yaxis[0].reversed;if(x+ttCtx.tooltipRect.ttWidth>w.globals.gridWidth&&!isReversed){x=x-ttCtx.tooltipRect.ttWidth;}else if(x<0){x=0;}if(ttCtx.w.config.tooltip.followCursor){var elGrid=ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();y=ttCtx.e.clientY-seriesBound.top;}// if tooltip is still null, querySelector
if(ttCtx.tooltip===null){ttCtx.tooltip=w.globals.dom.baseEl.querySelector('.apexcharts-tooltip');}if(!w.config.tooltip.shared){if(w.globals.comboBarCount>0){ttCtx.tooltipPosition.moveXCrosshairs(bx+strokeWidth/2);}else{ttCtx.tooltipPosition.moveXCrosshairs(bx);}}// move tooltip here
if(!ttCtx.fixedTooltip&&(!w.config.tooltip.shared||w.globals.isBarHorizontal&&ttCtx.tooltipUtil.hasBars())){if(isReversed){x=x-ttCtx.tooltipRect.ttWidth;if(x<0){x=0;}}if(isReversed&&!(w.globals.isBarHorizontal&&ttCtx.tooltipUtil.hasBars())){y=y+barHeight-(w.globals.series[i][j]<0?barHeight:0)*2;}y=y+w.globals.translateY-ttCtx.tooltipRect.ttHeight/2;tooltipEl.style.left=x+w.globals.translateX+'px';tooltipEl.style.top=y+'px';}}},{key:"getBarTooltipXY",value:function getBarTooltipXY(_ref4){var _this=this;var e=_ref4.e,opt=_ref4.opt;var w=this.w;var j=null;var ttCtx=this.ttCtx;var i=0;var x=0;var y=0;var barWidth=0;var barHeight=0;var cl=e.target.classList;if(cl.contains('apexcharts-bar-area')||cl.contains('apexcharts-candlestick-area')||cl.contains('apexcharts-boxPlot-area')||cl.contains('apexcharts-rangebar-area')){var bar=e.target;var barRect=bar.getBoundingClientRect();var seriesBound=opt.elGrid.getBoundingClientRect();var bh=barRect.height;barHeight=barRect.height;var bw=barRect.width;var cx=parseInt(bar.getAttribute('cx'),10);var cy=parseInt(bar.getAttribute('cy'),10);barWidth=parseFloat(bar.getAttribute('barWidth'));var clientX=e.type==='touchmove'?e.touches[0].clientX:e.clientX;j=parseInt(bar.getAttribute('j'),10);i=parseInt(bar.parentNode.getAttribute('rel'),10)-1;var y1=bar.getAttribute('data-range-y1');var y2=bar.getAttribute('data-range-y2');if(w.globals.comboCharts){i=parseInt(bar.parentNode.getAttribute('data:realIndex'),10);}// if (w.config.tooltip.shared) {
// this check not needed  at the moment
//   const yDivisor = w.globals.gridHeight / (w.globals.series.length)
//   const hoverY = ttCtx.clientY - ttCtx.seriesBound.top
//   j = Math.ceil(hoverY / yDivisor)
// }
var handleXForColumns=function handleXForColumns(x){if(w.globals.isXNumeric){x=cx-bw/2;}else{if(_this.isVerticalGroupedRangeBar){x=cx+bw/2;}else{x=cx-ttCtx.dataPointsDividedWidth+bw/2;}}return x;};var handleYForBars=function handleYForBars(){return cy-ttCtx.dataPointsDividedHeight+bh/2-ttCtx.tooltipRect.ttHeight/2;};ttCtx.tooltipLabels.drawSeriesTexts({ttItems:opt.ttItems,i:i,j:j,y1:y1?parseInt(y1,10):null,y2:y2?parseInt(y2,10):null,shared:ttCtx.showOnIntersect?false:w.config.tooltip.shared,e:e});if(w.config.tooltip.followCursor){if(w.globals.isBarHorizontal){x=clientX-seriesBound.left+15;y=handleYForBars();}else{x=handleXForColumns(x);y=e.clientY-seriesBound.top-ttCtx.tooltipRect.ttHeight/2-15;}}else{if(w.globals.isBarHorizontal){x=cx;if(x<ttCtx.xyRatios.baseLineInvertedY){x=cx-ttCtx.tooltipRect.ttWidth;}y=handleYForBars();}else{x=handleXForColumns(x);y=cy;// - ttCtx.tooltipRect.ttHeight / 2 + 10
}}}return{x:x,y:y,barHeight:barHeight,barWidth:barWidth,i:i,j:j};}}]);return Intersect;}();/**
   * ApexCharts Tooltip.AxesTooltip Class.
   * This file deals with the x-axis and y-axis tooltips.
   *
   * @module Tooltip.AxesTooltip
   **/var AxesTooltip=/*#__PURE__*/function(){function AxesTooltip(tooltipContext){_classCallCheck(this,AxesTooltip);this.w=tooltipContext.w;this.ttCtx=tooltipContext;}/**
     * This method adds the secondary tooltip which appears below x axis
     * @memberof Tooltip
     **/_createClass(AxesTooltip,[{key:"drawXaxisTooltip",value:function drawXaxisTooltip(){var w=this.w;var ttCtx=this.ttCtx;var isBottom=w.config.xaxis.position==='bottom';ttCtx.xaxisOffY=isBottom?w.globals.gridHeight+1:-w.globals.xAxisHeight-w.config.xaxis.axisTicks.height+3;var tooltipCssClass=isBottom?'apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom':'apexcharts-xaxistooltip apexcharts-xaxistooltip-top';var renderTo=w.globals.dom.elWrap;if(ttCtx.isXAxisTooltipEnabled){var xaxisTooltip=w.globals.dom.baseEl.querySelector('.apexcharts-xaxistooltip');if(xaxisTooltip===null){ttCtx.xaxisTooltip=document.createElement('div');ttCtx.xaxisTooltip.setAttribute('class',tooltipCssClass+' apexcharts-theme-'+w.config.tooltip.theme);renderTo.appendChild(ttCtx.xaxisTooltip);ttCtx.xaxisTooltipText=document.createElement('div');ttCtx.xaxisTooltipText.classList.add('apexcharts-xaxistooltip-text');ttCtx.xaxisTooltipText.style.fontFamily=w.config.xaxis.tooltip.style.fontFamily||w.config.chart.fontFamily;ttCtx.xaxisTooltipText.style.fontSize=w.config.xaxis.tooltip.style.fontSize;ttCtx.xaxisTooltip.appendChild(ttCtx.xaxisTooltipText);}}}/**
       * This method adds the secondary tooltip which appears below x axis
       * @memberof Tooltip
       **/},{key:"drawYaxisTooltip",value:function drawYaxisTooltip(){var w=this.w;var ttCtx=this.ttCtx;for(var i=0;i<w.config.yaxis.length;i++){var isRight=w.config.yaxis[i].opposite||w.config.yaxis[i].crosshairs.opposite;ttCtx.yaxisOffX=isRight?w.globals.gridWidth+1:1;var tooltipCssClass=isRight?"apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i," apexcharts-yaxistooltip-right"):"apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i," apexcharts-yaxistooltip-left");var renderTo=w.globals.dom.elWrap;var yaxisTooltip=w.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i));if(yaxisTooltip===null){ttCtx.yaxisTooltip=document.createElement('div');ttCtx.yaxisTooltip.setAttribute('class',tooltipCssClass+' apexcharts-theme-'+w.config.tooltip.theme);renderTo.appendChild(ttCtx.yaxisTooltip);if(i===0)ttCtx.yaxisTooltipText=[];ttCtx.yaxisTooltipText[i]=document.createElement('div');ttCtx.yaxisTooltipText[i].classList.add('apexcharts-yaxistooltip-text');ttCtx.yaxisTooltip.appendChild(ttCtx.yaxisTooltipText[i]);}}}/**
       * @memberof Tooltip
       **/},{key:"setXCrosshairWidth",value:function setXCrosshairWidth(){var w=this.w;var ttCtx=this.ttCtx;// set xcrosshairs width
var xcrosshairs=ttCtx.getElXCrosshairs();ttCtx.xcrosshairsWidth=parseInt(w.config.xaxis.crosshairs.width,10);if(!w.globals.comboCharts){if(w.config.xaxis.crosshairs.width==='tickWidth'){var count=w.globals.labels.length;ttCtx.xcrosshairsWidth=w.globals.gridWidth/count;}else if(w.config.xaxis.crosshairs.width==='barWidth'){var bar=w.globals.dom.baseEl.querySelector('.apexcharts-bar-area');if(bar!==null){var barWidth=parseFloat(bar.getAttribute('barWidth'));ttCtx.xcrosshairsWidth=barWidth;}else{ttCtx.xcrosshairsWidth=1;}}}else{var _bar=w.globals.dom.baseEl.querySelector('.apexcharts-bar-area');if(_bar!==null&&w.config.xaxis.crosshairs.width==='barWidth'){var _barWidth=parseFloat(_bar.getAttribute('barWidth'));ttCtx.xcrosshairsWidth=_barWidth;}else{if(w.config.xaxis.crosshairs.width==='tickWidth'){var _count=w.globals.labels.length;ttCtx.xcrosshairsWidth=w.globals.gridWidth/_count;}}}if(w.globals.isBarHorizontal){ttCtx.xcrosshairsWidth=0;}if(xcrosshairs!==null&&ttCtx.xcrosshairsWidth>0){xcrosshairs.setAttribute('width',ttCtx.xcrosshairsWidth);}}},{key:"handleYCrosshair",value:function handleYCrosshair(){var w=this.w;var ttCtx=this.ttCtx;// set ycrosshairs height
ttCtx.ycrosshairs=w.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs');ttCtx.ycrosshairsHidden=w.globals.dom.baseEl.querySelector('.apexcharts-ycrosshairs-hidden');}},{key:"drawYaxisTooltipText",value:function drawYaxisTooltipText(index,clientY,xyRatios){var ttCtx=this.ttCtx;var w=this.w;var lbFormatter=w.globals.yLabelFormatters[index];if(ttCtx.yaxisTooltips[index]){var elGrid=ttCtx.getElGrid();var seriesBound=elGrid.getBoundingClientRect();// We can use the index of any series referenced by the Yaxis
// because they will all return the same value.
var seriesIndex=w.globals.seriesYAxisMap[anno.yAxisIndex][0];var hoverY=(clientY-seriesBound.top)*xyRatios.yRatio[seriesIndex];var height=w.globals.maxYArr[seriesIndex]-w.globals.minYArr[seriesIndex];var val=w.globals.minYArr[seriesIndex]+(height-hoverY);ttCtx.tooltipPosition.moveYCrosshairs(clientY-seriesBound.top);ttCtx.yaxisTooltipText[index].innerHTML=lbFormatter(val);ttCtx.tooltipPosition.moveYAxisTooltip(index);}}}]);return AxesTooltip;}();/**
   * ApexCharts Core Tooltip Class to handle the tooltip generation.
   *
   * @module Tooltip
   **/var Tooltip=/*#__PURE__*/function(){function Tooltip(ctx){_classCallCheck(this,Tooltip);this.ctx=ctx;this.w=ctx.w;var w=this.w;this.tConfig=w.config.tooltip;this.tooltipUtil=new Utils(this);this.tooltipLabels=new Labels(this);this.tooltipPosition=new Position(this);this.marker=new Marker(this);this.intersect=new Intersect(this);this.axesTooltip=new AxesTooltip(this);this.showOnIntersect=this.tConfig.intersect;this.showTooltipTitle=this.tConfig.x.show;this.fixedTooltip=this.tConfig.fixed.enabled;this.xaxisTooltip=null;this.yaxisTTEls=null;this.isBarShared=!w.globals.isBarHorizontal&&this.tConfig.shared;this.lastHoverTime=Date.now();}_createClass(Tooltip,[{key:"getElTooltip",value:function getElTooltip(ctx){if(!ctx)ctx=this;if(!ctx.w.globals.dom.baseEl)return null;return ctx.w.globals.dom.baseEl.querySelector('.apexcharts-tooltip');}},{key:"getElXCrosshairs",value:function getElXCrosshairs(){return this.w.globals.dom.baseEl.querySelector('.apexcharts-xcrosshairs');}},{key:"getElGrid",value:function getElGrid(){return this.w.globals.dom.baseEl.querySelector('.apexcharts-grid');}},{key:"drawTooltip",value:function drawTooltip(xyRatios){var w=this.w;this.xyRatios=xyRatios;this.isXAxisTooltipEnabled=w.config.xaxis.tooltip.enabled&&w.globals.axisCharts;this.yaxisTooltips=w.config.yaxis.map(function(y,i){return y.show&&y.tooltip.enabled&&w.globals.axisCharts?true:false;});this.allTooltipSeriesGroups=[];if(!w.globals.axisCharts){this.showTooltipTitle=false;}var tooltipEl=document.createElement('div');tooltipEl.classList.add('apexcharts-tooltip');if(w.config.tooltip.cssClass){tooltipEl.classList.add(w.config.tooltip.cssClass);}tooltipEl.classList.add("apexcharts-theme-".concat(this.tConfig.theme));w.globals.dom.elWrap.appendChild(tooltipEl);if(w.globals.axisCharts){this.axesTooltip.drawXaxisTooltip();this.axesTooltip.drawYaxisTooltip();this.axesTooltip.setXCrosshairWidth();this.axesTooltip.handleYCrosshair();var xAxis=new XAxis(this.ctx);this.xAxisTicksPositions=xAxis.getXAxisTicksPositions();}// we forcefully set intersect true for these conditions
if((w.globals.comboCharts||this.tConfig.intersect||w.config.chart.type==='rangeBar')&&!this.tConfig.shared){this.showOnIntersect=true;}if(w.config.markers.size===0||w.globals.markers.largestSize===0){// when user don't want to show points all the time, but only on when hovering on series
this.marker.drawDynamicPoints(this);}// no visible series, exit
if(w.globals.collapsedSeries.length===w.globals.series.length)return;this.dataPointsDividedHeight=w.globals.gridHeight/w.globals.dataPoints;this.dataPointsDividedWidth=w.globals.gridWidth/w.globals.dataPoints;if(this.showTooltipTitle){this.tooltipTitle=document.createElement('div');this.tooltipTitle.classList.add('apexcharts-tooltip-title');this.tooltipTitle.style.fontFamily=this.tConfig.style.fontFamily||w.config.chart.fontFamily;this.tooltipTitle.style.fontSize=this.tConfig.style.fontSize;tooltipEl.appendChild(this.tooltipTitle);}var ttItemsCnt=w.globals.series.length;// whether shared or not, default is shared
if((w.globals.xyCharts||w.globals.comboCharts)&&this.tConfig.shared){if(!this.showOnIntersect){ttItemsCnt=w.globals.series.length;}else{ttItemsCnt=1;}}this.legendLabels=w.globals.dom.baseEl.querySelectorAll('.apexcharts-legend-text');this.ttItems=this.createTTElements(ttItemsCnt);this.addSVGEvents();}},{key:"createTTElements",value:function createTTElements(ttItemsCnt){var _this=this;var w=this.w;var ttItems=[];var tooltipEl=this.getElTooltip();var _loop=function _loop(i){var gTxt=document.createElement('div');gTxt.classList.add('apexcharts-tooltip-series-group');gTxt.style.order=w.config.tooltip.inverseOrder?ttItemsCnt-i:i+1;if(_this.tConfig.shared&&_this.tConfig.enabledOnSeries&&Array.isArray(_this.tConfig.enabledOnSeries)){if(_this.tConfig.enabledOnSeries.indexOf(i)<0){gTxt.classList.add('apexcharts-tooltip-series-group-hidden');}}var point=document.createElement('span');point.classList.add('apexcharts-tooltip-marker');point.style.backgroundColor=w.globals.colors[i];gTxt.appendChild(point);var gYZ=document.createElement('div');gYZ.classList.add('apexcharts-tooltip-text');gYZ.style.fontFamily=_this.tConfig.style.fontFamily||w.config.chart.fontFamily;gYZ.style.fontSize=_this.tConfig.style.fontSize;['y','goals','z'].forEach(function(g){var gValText=document.createElement('div');gValText.classList.add("apexcharts-tooltip-".concat(g,"-group"));var txtLabel=document.createElement('span');txtLabel.classList.add("apexcharts-tooltip-text-".concat(g,"-label"));gValText.appendChild(txtLabel);var txtValue=document.createElement('span');txtValue.classList.add("apexcharts-tooltip-text-".concat(g,"-value"));gValText.appendChild(txtValue);gYZ.appendChild(gValText);});gTxt.appendChild(gYZ);tooltipEl.appendChild(gTxt);ttItems.push(gTxt);};for(var i=0;i<ttItemsCnt;i++){_loop(i);}return ttItems;}},{key:"addSVGEvents",value:function addSVGEvents(){var w=this.w;var type=w.config.chart.type;var tooltipEl=this.getElTooltip();var commonBar=!!(type==='bar'||type==='candlestick'||type==='boxPlot'||type==='rangeBar');var chartWithmarkers=type==='area'||type==='line'||type==='scatter'||type==='bubble'||type==='radar';var hoverArea=w.globals.dom.Paper.node;var elGrid=this.getElGrid();if(elGrid){this.seriesBound=elGrid.getBoundingClientRect();}var tooltipY=[];var tooltipX=[];var seriesHoverParams={hoverArea:hoverArea,elGrid:elGrid,tooltipEl:tooltipEl,tooltipY:tooltipY,tooltipX:tooltipX,ttItems:this.ttItems};var points;if(w.globals.axisCharts){if(chartWithmarkers){points=w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker");}else if(commonBar){points=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area');}else if(type==='heatmap'||type==='treemap'){points=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap');}if(points&&points.length){for(var p=0;p<points.length;p++){tooltipY.push(points[p].getAttribute('cy'));tooltipX.push(points[p].getAttribute('cx'));}}}var validSharedChartTypes=w.globals.xyCharts&&!this.showOnIntersect||w.globals.comboCharts&&!this.showOnIntersect||commonBar&&this.tooltipUtil.hasBars()&&this.tConfig.shared;if(validSharedChartTypes){this.addPathsEventListeners([hoverArea],seriesHoverParams);}else if(commonBar&&!w.globals.comboCharts||chartWithmarkers&&this.showOnIntersect){this.addDatapointEventsListeners(seriesHoverParams);}else if(!w.globals.axisCharts||type==='heatmap'||type==='treemap'){var seriesAll=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series');this.addPathsEventListeners(seriesAll,seriesHoverParams);}if(this.showOnIntersect){var lineAreaPoints=w.globals.dom.baseEl.querySelectorAll('.apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker');if(lineAreaPoints.length>0){// if we find any lineSeries, addEventListeners for them
this.addPathsEventListeners(lineAreaPoints,seriesHoverParams);}// combo charts may have bars, so add event listeners here too
if(this.tooltipUtil.hasBars()&&!this.tConfig.shared){this.addDatapointEventsListeners(seriesHoverParams);}}}},{key:"drawFixedTooltipRect",value:function drawFixedTooltipRect(){var w=this.w;var tooltipEl=this.getElTooltip();var tooltipRect=tooltipEl.getBoundingClientRect();var ttWidth=tooltipRect.width+10;var ttHeight=tooltipRect.height+10;var x=this.tConfig.fixed.offsetX;var y=this.tConfig.fixed.offsetY;var fixed=this.tConfig.fixed.position.toLowerCase();if(fixed.indexOf('right')>-1){x=x+w.globals.svgWidth-ttWidth+10;}if(fixed.indexOf('bottom')>-1){y=y+w.globals.svgHeight-ttHeight-10;}tooltipEl.style.left=x+'px';tooltipEl.style.top=y+'px';return{x:x,y:y,ttWidth:ttWidth,ttHeight:ttHeight};}},{key:"addDatapointEventsListeners",value:function addDatapointEventsListeners(seriesHoverParams){var w=this.w;var points=w.globals.dom.baseEl.querySelectorAll('.apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area');this.addPathsEventListeners(points,seriesHoverParams);}},{key:"addPathsEventListeners",value:function addPathsEventListeners(paths,opts){var self=this;var _loop2=function _loop2(p){var extendedOpts={paths:paths[p],tooltipEl:opts.tooltipEl,tooltipY:opts.tooltipY,tooltipX:opts.tooltipX,elGrid:opts.elGrid,hoverArea:opts.hoverArea,ttItems:opts.ttItems};var events=['mousemove','mouseup','touchmove','mouseout','touchend'];events.map(function(ev){return paths[p].addEventListener(ev,self.onSeriesHover.bind(self,extendedOpts),{capture:false,passive:true});});};for(var p=0;p<paths.length;p++){_loop2(p);}}/*
       ** Check to see if the tooltips should be updated based on a mouse / touch event
       */},{key:"onSeriesHover",value:function onSeriesHover(opt,e){var _this2=this;// If a user is moving their mouse quickly, don't bother updating the tooltip every single frame
var targetDelay=100;var timeSinceLastUpdate=Date.now()-this.lastHoverTime;if(timeSinceLastUpdate>=targetDelay){// The tooltip was last updated over 100ms ago - redraw it even if the user is still moving their
// mouse so they get some feedback that their moves are being registered
this.seriesHover(opt,e);}else{// The tooltip was last updated less than 100ms ago
// Cancel any other delayed draw, so we don't show stale data
clearTimeout(this.seriesHoverTimeout);// Schedule the next draw so that it happens about 100ms after the last update
this.seriesHoverTimeout=setTimeout(function(){_this2.seriesHover(opt,e);},targetDelay-timeSinceLastUpdate);}}/*
       ** The actual series hover function
       */},{key:"seriesHover",value:function seriesHover(opt,e){var _this3=this;this.lastHoverTime=Date.now();var chartGroups=[];var w=this.w;// if user has more than one charts in group, we need to sync
if(w.config.chart.group){chartGroups=this.ctx.getGroupedCharts();}if(w.globals.axisCharts&&(w.globals.minX===-Infinity&&w.globals.maxX===Infinity||w.globals.dataPoints===0)){return;}if(chartGroups.length){chartGroups.forEach(function(ch){var tooltipEl=_this3.getElTooltip(ch);var newOpts={paths:opt.paths,tooltipEl:tooltipEl,tooltipY:opt.tooltipY,tooltipX:opt.tooltipX,elGrid:opt.elGrid,hoverArea:opt.hoverArea,ttItems:ch.w.globals.tooltip.ttItems};// all the charts should have the same minX and maxX (same xaxis) for multiple tooltips to work correctly
if(ch.w.globals.minX===_this3.w.globals.minX&&ch.w.globals.maxX===_this3.w.globals.maxX){ch.w.globals.tooltip.seriesHoverByContext({chartCtx:ch,ttCtx:ch.w.globals.tooltip,opt:newOpts,e:e});}});}else{this.seriesHoverByContext({chartCtx:this.ctx,ttCtx:this.w.globals.tooltip,opt:opt,e:e});}}},{key:"seriesHoverByContext",value:function seriesHoverByContext(_ref){var chartCtx=_ref.chartCtx,ttCtx=_ref.ttCtx,opt=_ref.opt,e=_ref.e;var w=chartCtx.w;var tooltipEl=this.getElTooltip();if(!tooltipEl)return;// tooltipRect is calculated on every mousemove, because the text is dynamic
ttCtx.tooltipRect={x:0,y:0,ttWidth:tooltipEl.getBoundingClientRect().width,ttHeight:tooltipEl.getBoundingClientRect().height};ttCtx.e=e;// highlight the current hovered bars
if(ttCtx.tooltipUtil.hasBars()&&!w.globals.comboCharts&&!ttCtx.isBarShared){if(this.tConfig.onDatasetHover.highlightDataSeries){var series=new Series(chartCtx);series.toggleSeriesOnHover(e,e.target.parentNode);}}if(ttCtx.fixedTooltip){ttCtx.drawFixedTooltipRect();}if(w.globals.axisCharts){ttCtx.axisChartsTooltips({e:e,opt:opt,tooltipRect:ttCtx.tooltipRect});}else{// non-plot charts i.e pie/donut/circle
ttCtx.nonAxisChartsTooltips({e:e,opt:opt,tooltipRect:ttCtx.tooltipRect});}}// tooltip handling for line/area/bar/columns/scatter
},{key:"axisChartsTooltips",value:function axisChartsTooltips(_ref2){var e=_ref2.e,opt=_ref2.opt;var w=this.w;var x,y;var seriesBound=opt.elGrid.getBoundingClientRect();var clientX=e.type==='touchmove'?e.touches[0].clientX:e.clientX;var clientY=e.type==='touchmove'?e.touches[0].clientY:e.clientY;this.clientY=clientY;this.clientX=clientX;w.globals.capturedSeriesIndex=-1;w.globals.capturedDataPointIndex=-1;if(clientY<seriesBound.top||clientY>seriesBound.top+seriesBound.height){this.handleMouseOut(opt);return;}if(Array.isArray(this.tConfig.enabledOnSeries)&&!w.config.tooltip.shared){var index=parseInt(opt.paths.getAttribute('index'),10);if(this.tConfig.enabledOnSeries.indexOf(index)<0){this.handleMouseOut(opt);return;}}var tooltipEl=this.getElTooltip();var xcrosshairs=this.getElXCrosshairs();var isStickyTooltip=w.globals.xyCharts||w.config.chart.type==='bar'&&!w.globals.isBarHorizontal&&this.tooltipUtil.hasBars()&&this.tConfig.shared||w.globals.comboCharts&&this.tooltipUtil.hasBars();if(e.type==='mousemove'||e.type==='touchmove'||e.type==='mouseup'){// there is no series to hover over
if(w.globals.collapsedSeries.length+w.globals.ancillaryCollapsedSeries.length===w.globals.series.length){return;}if(xcrosshairs!==null){xcrosshairs.classList.add('apexcharts-active');}var hasYAxisTooltip=this.yaxisTooltips.filter(function(b){return b===true;});if(this.ycrosshairs!==null&&hasYAxisTooltip.length){this.ycrosshairs.classList.add('apexcharts-active');}if(isStickyTooltip&&!this.showOnIntersect){this.handleStickyTooltip(e,clientX,clientY,opt);}else{if(w.config.chart.type==='heatmap'||w.config.chart.type==='treemap'){var markerXY=this.intersect.handleHeatTreeTooltip({e:e,opt:opt,x:x,y:y,type:w.config.chart.type});x=markerXY.x;y=markerXY.y;tooltipEl.style.left=x+'px';tooltipEl.style.top=y+'px';}else{if(this.tooltipUtil.hasBars()){this.intersect.handleBarTooltip({e:e,opt:opt});}if(this.tooltipUtil.hasMarkers()){// intersect - line/area/scatter/bubble
this.intersect.handleMarkerTooltip({e:e,opt:opt,x:x,y:y});}}}if(this.yaxisTooltips.length){for(var yt=0;yt<w.config.yaxis.length;yt++){this.axesTooltip.drawYaxisTooltipText(yt,clientY,this.xyRatios);}}opt.tooltipEl.classList.add('apexcharts-active');}else if(e.type==='mouseout'||e.type==='touchend'){this.handleMouseOut(opt);}}// tooltip handling for pie/donuts
},{key:"nonAxisChartsTooltips",value:function nonAxisChartsTooltips(_ref3){var e=_ref3.e,opt=_ref3.opt,tooltipRect=_ref3.tooltipRect;var w=this.w;var rel=opt.paths.getAttribute('rel');var tooltipEl=this.getElTooltip();var seriesBound=w.globals.dom.elWrap.getBoundingClientRect();if(e.type==='mousemove'||e.type==='touchmove'){tooltipEl.classList.add('apexcharts-active');this.tooltipLabels.drawSeriesTexts({ttItems:opt.ttItems,i:parseInt(rel,10)-1,shared:false});var x=w.globals.clientX-seriesBound.left-tooltipRect.ttWidth/2;var y=w.globals.clientY-seriesBound.top-tooltipRect.ttHeight-10;tooltipEl.style.left=x+'px';tooltipEl.style.top=y+'px';if(w.config.legend.tooltipHoverFormatter){var legendFormatter=w.config.legend.tooltipHoverFormatter;var i=rel-1;var legendName=this.legendLabels[i].getAttribute('data:default-text');var text=legendFormatter(legendName,{seriesIndex:i,dataPointIndex:i,w:w});this.legendLabels[i].innerHTML=text;}}else if(e.type==='mouseout'||e.type==='touchend'){tooltipEl.classList.remove('apexcharts-active');if(w.config.legend.tooltipHoverFormatter){this.legendLabels.forEach(function(l){var defaultText=l.getAttribute('data:default-text');l.innerHTML=decodeURIComponent(defaultText);});}}}},{key:"handleStickyTooltip",value:function handleStickyTooltip(e,clientX,clientY,opt){var w=this.w;var capj=this.tooltipUtil.getNearestValues({context:this,hoverArea:opt.hoverArea,elGrid:opt.elGrid,clientX:clientX,clientY:clientY});var j=capj.j;var capturedSeries=capj.capturedSeries;if(w.globals.collapsedSeriesIndices.includes(capturedSeries))capturedSeries=null;var bounds=opt.elGrid.getBoundingClientRect();if(capj.hoverX<0||capj.hoverX>bounds.width){this.handleMouseOut(opt);return;}if(capturedSeries!==null){this.handleStickyCapturedSeries(e,capturedSeries,opt,j);}else{// couldn't capture any series. check if shared X is same,
// if yes, draw a grouped tooltip
if(this.tooltipUtil.isXoverlap(j)||w.globals.isBarHorizontal){var firstVisibleSeries=w.globals.series.findIndex(function(s,i){return!w.globals.collapsedSeriesIndices.includes(i);});this.create(e,this,firstVisibleSeries,j,opt.ttItems);}}}},{key:"handleStickyCapturedSeries",value:function handleStickyCapturedSeries(e,capturedSeries,opt,j){var w=this.w;if(!this.tConfig.shared){var ignoreNull=w.globals.series[capturedSeries][j]===null;if(ignoreNull){this.handleMouseOut(opt);return;}}if(typeof w.globals.series[capturedSeries][j]!=='undefined'){if(this.tConfig.shared&&this.tooltipUtil.isXoverlap(j)&&this.tooltipUtil.isInitialSeriesSameLen()){this.create(e,this,capturedSeries,j,opt.ttItems);}else{this.create(e,this,capturedSeries,j,opt.ttItems,false);}}else{if(this.tooltipUtil.isXoverlap(j)){var firstVisibleSeries=w.globals.series.findIndex(function(s,i){return!w.globals.collapsedSeriesIndices.includes(i);});this.create(e,this,firstVisibleSeries,j,opt.ttItems);}}}},{key:"deactivateHoverFilter",value:function deactivateHoverFilter(){var w=this.w;var graphics=new Graphics(this.ctx);var allPaths=w.globals.dom.Paper.select(".apexcharts-bar-area");for(var b=0;b<allPaths.length;b++){graphics.pathMouseLeave(allPaths[b]);}}},{key:"handleMouseOut",value:function handleMouseOut(opt){var w=this.w;var xcrosshairs=this.getElXCrosshairs();opt.tooltipEl.classList.remove('apexcharts-active');this.deactivateHoverFilter();if(w.config.chart.type!=='bubble'){this.marker.resetPointsSize();}if(xcrosshairs!==null){xcrosshairs.classList.remove('apexcharts-active');}if(this.ycrosshairs!==null){this.ycrosshairs.classList.remove('apexcharts-active');}if(this.isXAxisTooltipEnabled){this.xaxisTooltip.classList.remove('apexcharts-active');}if(this.yaxisTooltips.length){if(this.yaxisTTEls===null){this.yaxisTTEls=w.globals.dom.baseEl.querySelectorAll('.apexcharts-yaxistooltip');}for(var i=0;i<this.yaxisTTEls.length;i++){this.yaxisTTEls[i].classList.remove('apexcharts-active');}}if(w.config.legend.tooltipHoverFormatter){this.legendLabels.forEach(function(l){var defaultText=l.getAttribute('data:default-text');l.innerHTML=decodeURIComponent(defaultText);});}}},{key:"markerClick",value:function markerClick(e,seriesIndex,dataPointIndex){var w=this.w;if(typeof w.config.chart.events.markerClick==='function'){w.config.chart.events.markerClick(e,this.ctx,{seriesIndex:seriesIndex,dataPointIndex:dataPointIndex,w:w});}this.ctx.events.fireEvent('markerClick',[e,this.ctx,{seriesIndex:seriesIndex,dataPointIndex:dataPointIndex,w:w}]);}},{key:"create",value:function create(e,context,capturedSeries,j,ttItems){var _w$globals$seriesRang,_w$globals$seriesRang2,_w$globals$seriesRang3,_w$globals$seriesRang4,_w$globals$seriesRang5,_w$globals$seriesRang6,_w$globals$seriesRang7,_w$globals$seriesRang8,_w$globals$seriesRang9,_w$globals$seriesRang10,_w$globals$seriesRang11,_w$globals$seriesRang12,_w$globals$seriesRang13,_w$globals$seriesRang14,_w$globals$seriesRang15,_w$globals$seriesRang16;var shared=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;var w=this.w;var ttCtx=context;if(e.type==='mouseup'){this.markerClick(e,capturedSeries,j);}if(shared===null)shared=this.tConfig.shared;var hasMarkers=this.tooltipUtil.hasMarkers(capturedSeries);var bars=this.tooltipUtil.getElBars();if(w.config.legend.tooltipHoverFormatter){var legendFormatter=w.config.legend.tooltipHoverFormatter;var els=Array.from(this.legendLabels);// reset all legend values first
els.forEach(function(l){var legendName=l.getAttribute('data:default-text');l.innerHTML=decodeURIComponent(legendName);});// for irregular time series
for(var i=0;i<els.length;i++){var l=els[i];var lsIndex=parseInt(l.getAttribute('i'),10);var legendName=decodeURIComponent(l.getAttribute('data:default-text'));var text=legendFormatter(legendName,{seriesIndex:shared?lsIndex:capturedSeries,dataPointIndex:j,w:w});if(!shared){l.innerHTML=lsIndex===capturedSeries?text:legendName;if(capturedSeries===lsIndex){break;}}else{l.innerHTML=w.globals.collapsedSeriesIndices.indexOf(lsIndex)<0?text:legendName;}}}var commonSeriesTextsParams=_objectSpread2(_objectSpread2({ttItems:ttItems,i:capturedSeries,j:j},typeof((_w$globals$seriesRang=w.globals.seriesRange)===null||_w$globals$seriesRang===void 0?void 0:(_w$globals$seriesRang2=_w$globals$seriesRang[capturedSeries])===null||_w$globals$seriesRang2===void 0?void 0:(_w$globals$seriesRang3=_w$globals$seriesRang2[j])===null||_w$globals$seriesRang3===void 0?void 0:(_w$globals$seriesRang4=_w$globals$seriesRang3.y[0])===null||_w$globals$seriesRang4===void 0?void 0:_w$globals$seriesRang4.y1)!=='undefined'&&{y1:(_w$globals$seriesRang5=w.globals.seriesRange)===null||_w$globals$seriesRang5===void 0?void 0:(_w$globals$seriesRang6=_w$globals$seriesRang5[capturedSeries])===null||_w$globals$seriesRang6===void 0?void 0:(_w$globals$seriesRang7=_w$globals$seriesRang6[j])===null||_w$globals$seriesRang7===void 0?void 0:(_w$globals$seriesRang8=_w$globals$seriesRang7.y[0])===null||_w$globals$seriesRang8===void 0?void 0:_w$globals$seriesRang8.y1}),typeof((_w$globals$seriesRang9=w.globals.seriesRange)===null||_w$globals$seriesRang9===void 0?void 0:(_w$globals$seriesRang10=_w$globals$seriesRang9[capturedSeries])===null||_w$globals$seriesRang10===void 0?void 0:(_w$globals$seriesRang11=_w$globals$seriesRang10[j])===null||_w$globals$seriesRang11===void 0?void 0:(_w$globals$seriesRang12=_w$globals$seriesRang11.y[0])===null||_w$globals$seriesRang12===void 0?void 0:_w$globals$seriesRang12.y2)!=='undefined'&&{y2:(_w$globals$seriesRang13=w.globals.seriesRange)===null||_w$globals$seriesRang13===void 0?void 0:(_w$globals$seriesRang14=_w$globals$seriesRang13[capturedSeries])===null||_w$globals$seriesRang14===void 0?void 0:(_w$globals$seriesRang15=_w$globals$seriesRang14[j])===null||_w$globals$seriesRang15===void 0?void 0:(_w$globals$seriesRang16=_w$globals$seriesRang15.y[0])===null||_w$globals$seriesRang16===void 0?void 0:_w$globals$seriesRang16.y2});if(shared){ttCtx.tooltipLabels.drawSeriesTexts(_objectSpread2(_objectSpread2({},commonSeriesTextsParams),{},{shared:this.showOnIntersect?false:this.tConfig.shared}));if(hasMarkers){if(w.globals.markers.largestSize>0){ttCtx.marker.enlargePoints(j);}else{ttCtx.tooltipPosition.moveDynamicPointsOnHover(j);}}else if(this.tooltipUtil.hasBars()){this.barSeriesHeight=this.tooltipUtil.getBarsHeight(bars);if(this.barSeriesHeight>0){// hover state, activate snap filter
var graphics=new Graphics(this.ctx);var paths=w.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(j,"']"));// de-activate first
this.deactivateHoverFilter();this.tooltipPosition.moveStickyTooltipOverBars(j,capturedSeries);for(var b=0;b<paths.length;b++){graphics.pathMouseEnter(paths[b]);}}}}else{ttCtx.tooltipLabels.drawSeriesTexts(_objectSpread2({shared:false},commonSeriesTextsParams));if(this.tooltipUtil.hasBars()){ttCtx.tooltipPosition.moveStickyTooltipOverBars(j,capturedSeries);}if(hasMarkers){ttCtx.tooltipPosition.moveMarkers(capturedSeries,j);}}}}]);return Tooltip;}();var BarDataLabels=/*#__PURE__*/function(){function BarDataLabels(barCtx){_classCallCheck(this,BarDataLabels);this.w=barCtx.w;this.barCtx=barCtx;this.totalFormatter=this.w.config.plotOptions.bar.dataLabels.total.formatter;if(!this.totalFormatter){this.totalFormatter=this.w.config.dataLabels.formatter;}}/** handleBarDataLabels is used to calculate the positions for the data-labels
     * It also sets the element's data attr for bars and calls drawCalculatedBarDataLabels()
     * After calculating, it also calls the function to draw data labels
     * @memberof Bar
     * @param {object} {barProps} most of the bar properties used throughout the bar
     * drawing function
     * @return {object} dataLabels node-element which you can append later
     **/_createClass(BarDataLabels,[{key:"handleBarDataLabels",value:function handleBarDataLabels(opts){var x=opts.x,y=opts.y,y1=opts.y1,y2=opts.y2,i=opts.i,j=opts.j,realIndex=opts.realIndex,groupIndex=opts.groupIndex,series=opts.series,barHeight=opts.barHeight,barWidth=opts.barWidth,barXPosition=opts.barXPosition,barYPosition=opts.barYPosition,visibleSeries=opts.visibleSeries,renderedPath=opts.renderedPath;var w=this.w;var graphics=new Graphics(this.barCtx.ctx);var strokeWidth=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[realIndex]:this.barCtx.strokeWidth;var bcx=x+parseFloat(barWidth*visibleSeries);var bcy=y+parseFloat(barHeight*visibleSeries);if(w.globals.isXNumeric&&!w.globals.isBarHorizontal){bcx=x+parseFloat(barWidth*(visibleSeries+1));bcy=y+parseFloat(barHeight*(visibleSeries+1))-strokeWidth;}var dataLabels=null;var totalDataLabels=null;var dataLabelsX=x;var dataLabelsY=y;var dataLabelsPos={};var dataLabelsConfig=w.config.dataLabels;var barDataLabelsConfig=this.barCtx.barOptions.dataLabels;var barTotalDataLabelsConfig=this.barCtx.barOptions.dataLabels.total;if(typeof barYPosition!=='undefined'&&this.barCtx.isRangeBar){bcy=barYPosition;dataLabelsY=barYPosition;}if(typeof barXPosition!=='undefined'&&this.barCtx.isVerticalGroupedRangeBar){bcx=barXPosition;dataLabelsX=barXPosition;}var offX=dataLabelsConfig.offsetX;var offY=dataLabelsConfig.offsetY;var textRects={width:0,height:0};if(w.config.dataLabels.enabled){var yLabel=this.barCtx.series[i][j];textRects=graphics.getTextRects(w.globals.yLabelFormatters[0](yLabel),parseFloat(dataLabelsConfig.style.fontSize));}var params={x:x,y:y,i:i,j:j,realIndex:realIndex,groupIndex:!!groupIndex?groupIndex:-1,renderedPath:renderedPath,bcx:bcx,bcy:bcy,barHeight:barHeight,barWidth:barWidth,textRects:textRects,strokeWidth:strokeWidth,dataLabelsX:dataLabelsX,dataLabelsY:dataLabelsY,dataLabelsConfig:dataLabelsConfig,barDataLabelsConfig:barDataLabelsConfig,barTotalDataLabelsConfig:barTotalDataLabelsConfig,offX:offX,offY:offY};if(this.barCtx.isHorizontal){dataLabelsPos=this.calculateBarsDataLabelsPosition(params);}else{dataLabelsPos=this.calculateColumnsDataLabelsPosition(params);}renderedPath.attr({cy:dataLabelsPos.bcy,cx:dataLabelsPos.bcx,j:j,val:series[i][j],barHeight:barHeight,barWidth:barWidth});dataLabels=this.drawCalculatedDataLabels({x:dataLabelsPos.dataLabelsX,y:dataLabelsPos.dataLabelsY,val:this.barCtx.isRangeBar?[y1,y2]:series[i][j],i:realIndex,j:j,barWidth:barWidth,barHeight:barHeight,textRects:textRects,dataLabelsConfig:dataLabelsConfig});if(w.config.chart.stacked&&barTotalDataLabelsConfig.enabled){totalDataLabels=this.drawTotalDataLabels({x:dataLabelsPos.totalDataLabelsX,y:dataLabelsPos.totalDataLabelsY,barWidth:barWidth,barHeight:barHeight,realIndex:realIndex,textAnchor:dataLabelsPos.totalDataLabelsAnchor,val:this.getStackedTotalDataLabel({realIndex:realIndex,j:j}),dataLabelsConfig:dataLabelsConfig,barTotalDataLabelsConfig:barTotalDataLabelsConfig});}return{dataLabels:dataLabels,totalDataLabels:totalDataLabels};}},{key:"getStackedTotalDataLabel",value:function getStackedTotalDataLabel(_ref){var realIndex=_ref.realIndex,j=_ref.j;var w=this.w;var val=this.barCtx.stackedSeriesTotals[j];if(this.totalFormatter){val=this.totalFormatter(val,_objectSpread2(_objectSpread2({},w),{},{seriesIndex:realIndex,dataPointIndex:j,w:w}));}return val;}},{key:"calculateColumnsDataLabelsPosition",value:function calculateColumnsDataLabelsPosition(opts){var w=this.w;var i=opts.i,j=opts.j,realIndex=opts.realIndex,groupIndex=opts.groupIndex,y=opts.y,bcx=opts.bcx,barWidth=opts.barWidth,barHeight=opts.barHeight,textRects=opts.textRects,dataLabelsX=opts.dataLabelsX,dataLabelsY=opts.dataLabelsY,dataLabelsConfig=opts.dataLabelsConfig,barDataLabelsConfig=opts.barDataLabelsConfig,barTotalDataLabelsConfig=opts.barTotalDataLabelsConfig,strokeWidth=opts.strokeWidth,offX=opts.offX,offY=opts.offY;var totalDataLabelsY;var totalDataLabelsX;var totalDataLabelsAnchor='middle';barHeight=Math.abs(barHeight);var vertical=w.config.plotOptions.bar.dataLabels.orientation==='vertical';var _this$barCtx$barHelpe=this.barCtx.barHelpers.getZeroValueEncounters({i:i,j:j}),zeroEncounters=_this$barCtx$barHelpe.zeroEncounters;bcx=bcx-strokeWidth/2+(groupIndex!==-1?groupIndex*barWidth:0);var dataPointsDividedWidth=w.globals.gridWidth/w.globals.dataPoints;if(this.barCtx.isVerticalGroupedRangeBar){dataLabelsX=dataLabelsX+barWidth/2;}else{if(w.globals.isXNumeric){dataLabelsX=bcx-barWidth/2+offX;}else{dataLabelsX=bcx-dataPointsDividedWidth+barWidth/2+offX;}if(zeroEncounters>0&&w.config.plotOptions.bar.hideZeroBarsWhenGrouped){dataLabelsX=dataLabelsX-barWidth*zeroEncounters;}}if(vertical){var offsetDLX=2;dataLabelsX=dataLabelsX+textRects.height/2-strokeWidth/2-offsetDLX;}var valIsNegative=this.barCtx.series[i][j]<0;var newY=y;if(this.barCtx.isReversed){newY=y-barHeight+(valIsNegative?barHeight*2:0);y=y-barHeight;}switch(barDataLabelsConfig.position){case'center':if(vertical){if(valIsNegative){dataLabelsY=newY-barHeight/2+offY;}else{dataLabelsY=newY+barHeight/2-offY;}}else{if(valIsNegative){dataLabelsY=newY-barHeight/2+textRects.height/2+offY;}else{dataLabelsY=newY+barHeight/2+textRects.height/2-offY;}}break;case'bottom':if(vertical){if(valIsNegative){dataLabelsY=newY-barHeight+offY;}else{dataLabelsY=newY+barHeight-offY;}}else{if(valIsNegative){dataLabelsY=newY-barHeight+textRects.height+strokeWidth+offY;}else{dataLabelsY=newY+barHeight-textRects.height/2+strokeWidth-offY;}}break;case'top':if(vertical){if(valIsNegative){dataLabelsY=newY+offY;}else{dataLabelsY=newY-offY;}}else{if(valIsNegative){dataLabelsY=newY-textRects.height/2-offY;}else{dataLabelsY=newY+textRects.height+offY;}}break;}if(this.barCtx.lastActiveBarSerieIndex===realIndex&&barTotalDataLabelsConfig.enabled){var ADDITIONAL_OFFX=18;var graphics=new Graphics(this.barCtx.ctx);var totalLabeltextRects=graphics.getTextRects(this.getStackedTotalDataLabel({realIndex:realIndex,j:j}),dataLabelsConfig.fontSize);if(valIsNegative){totalDataLabelsY=newY-totalLabeltextRects.height/2-offY-barTotalDataLabelsConfig.offsetY+ADDITIONAL_OFFX;}else{totalDataLabelsY=newY+totalLabeltextRects.height+offY+barTotalDataLabelsConfig.offsetY-ADDITIONAL_OFFX;}totalDataLabelsX=dataLabelsX+barTotalDataLabelsConfig.offsetX;}if(!w.config.chart.stacked){if(dataLabelsY<0){dataLabelsY=0+strokeWidth;}else if(dataLabelsY+textRects.height/3>w.globals.gridHeight){dataLabelsY=w.globals.gridHeight-strokeWidth;}}return{bcx:bcx,bcy:y,dataLabelsX:dataLabelsX,dataLabelsY:dataLabelsY,totalDataLabelsX:totalDataLabelsX,totalDataLabelsY:totalDataLabelsY,totalDataLabelsAnchor:totalDataLabelsAnchor};}},{key:"calculateBarsDataLabelsPosition",value:function calculateBarsDataLabelsPosition(opts){var w=this.w;var x=opts.x,i=opts.i,j=opts.j,realIndex=opts.realIndex,groupIndex=opts.groupIndex,bcy=opts.bcy,barHeight=opts.barHeight,barWidth=opts.barWidth,textRects=opts.textRects,dataLabelsX=opts.dataLabelsX,strokeWidth=opts.strokeWidth,dataLabelsConfig=opts.dataLabelsConfig,barDataLabelsConfig=opts.barDataLabelsConfig,barTotalDataLabelsConfig=opts.barTotalDataLabelsConfig,offX=opts.offX,offY=opts.offY;var dataPointsDividedHeight=w.globals.gridHeight/w.globals.dataPoints;barWidth=Math.abs(barWidth);bcy=bcy+(groupIndex!==-1?groupIndex*barHeight:0);var dataLabelsY=bcy-(this.barCtx.isRangeBar?0:dataPointsDividedHeight)+barHeight/2+textRects.height/2+offY-3;var totalDataLabelsX;var totalDataLabelsY;var totalDataLabelsAnchor='start';var valIsNegative=this.barCtx.series[i][j]<0;var newX=x;if(this.barCtx.isReversed){newX=x+barWidth-(valIsNegative?barWidth*2:0);x=w.globals.gridWidth-barWidth;}switch(barDataLabelsConfig.position){case'center':if(valIsNegative){dataLabelsX=newX+barWidth/2-offX;}else{dataLabelsX=Math.max(textRects.width/2,newX-barWidth/2)+offX;}break;case'bottom':if(valIsNegative){dataLabelsX=newX+barWidth-strokeWidth-Math.round(textRects.width/2)-offX;}else{dataLabelsX=newX-barWidth+strokeWidth+Math.round(textRects.width/2)+offX;}break;case'top':if(valIsNegative){dataLabelsX=newX-strokeWidth+Math.round(textRects.width/2)-offX;}else{dataLabelsX=newX-strokeWidth-Math.round(textRects.width/2)+offX;}break;}if(this.barCtx.lastActiveBarSerieIndex===realIndex&&barTotalDataLabelsConfig.enabled){var ADDITIONAL_OFFX=15;var graphics=new Graphics(this.barCtx.ctx);var totalLabeltextRects=graphics.getTextRects(this.getStackedTotalDataLabel({realIndex:realIndex,j:j}),dataLabelsConfig.fontSize);if(valIsNegative){totalDataLabelsX=newX-strokeWidth+Math.round(totalLabeltextRects.width/2)-offX-barTotalDataLabelsConfig.offsetX-ADDITIONAL_OFFX;totalDataLabelsAnchor='end';}else{totalDataLabelsX=newX-strokeWidth-Math.round(totalLabeltextRects.width/2)+offX+barTotalDataLabelsConfig.offsetX+ADDITIONAL_OFFX;}totalDataLabelsY=dataLabelsY+barTotalDataLabelsConfig.offsetY;}if(!w.config.chart.stacked){if(dataLabelsX<0){dataLabelsX=dataLabelsX+textRects.width+strokeWidth;}else if(dataLabelsX+textRects.width/2>w.globals.gridWidth){dataLabelsX=w.globals.gridWidth-textRects.width-strokeWidth;}}return{bcx:x,bcy:bcy,dataLabelsX:dataLabelsX,dataLabelsY:dataLabelsY,totalDataLabelsX:totalDataLabelsX,totalDataLabelsY:totalDataLabelsY,totalDataLabelsAnchor:totalDataLabelsAnchor};}},{key:"drawCalculatedDataLabels",value:function drawCalculatedDataLabels(_ref2){var x=_ref2.x,y=_ref2.y,val=_ref2.val,i=_ref2.i,j=_ref2.j,textRects=_ref2.textRects,barHeight=_ref2.barHeight,barWidth=_ref2.barWidth,dataLabelsConfig=_ref2.dataLabelsConfig;var w=this.w;var rotate='rotate(0)';if(w.config.plotOptions.bar.dataLabels.orientation==='vertical')rotate="rotate(-90, ".concat(x,", ").concat(y,")");var dataLabels=new DataLabels(this.barCtx.ctx);var graphics=new Graphics(this.barCtx.ctx);var formatter=dataLabelsConfig.formatter;var elDataLabelsWrap=null;var isSeriesNotCollapsed=w.globals.collapsedSeriesIndices.indexOf(i)>-1;if(dataLabelsConfig.enabled&&!isSeriesNotCollapsed){elDataLabelsWrap=graphics.group({class:'apexcharts-data-labels',transform:rotate});var text='';if(typeof val!=='undefined'){text=formatter(val,_objectSpread2(_objectSpread2({},w),{},{seriesIndex:i,dataPointIndex:j,w:w}));}if(!val&&w.config.plotOptions.bar.hideZeroBarsWhenGrouped){text='';}var valIsNegative=w.globals.series[i][j]<0;var position=w.config.plotOptions.bar.dataLabels.position;if(w.config.plotOptions.bar.dataLabels.orientation==='vertical'){if(position==='top'){if(valIsNegative)dataLabelsConfig.textAnchor='end';else dataLabelsConfig.textAnchor='start';}if(position==='center'){dataLabelsConfig.textAnchor='middle';}if(position==='bottom'){if(valIsNegative)dataLabelsConfig.textAnchor='end';else dataLabelsConfig.textAnchor='start';}}if(this.barCtx.isRangeBar&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels){// hide the datalabel if it cannot fit into the rect
var txRect=graphics.getTextRects(text,parseFloat(dataLabelsConfig.style.fontSize));if(barWidth<txRect.width){text='';}}if(w.config.chart.stacked&&this.barCtx.barOptions.dataLabels.hideOverflowingLabels){// if there is not enough space to draw the label in the bar/column rect, check hideOverflowingLabels property to prevent overflowing on wrong rect
// Note: This issue is only seen in stacked charts
if(this.barCtx.isHorizontal){if(textRects.width/1.6>Math.abs(barWidth)){text='';}}else{if(textRects.height/1.6>Math.abs(barHeight)){text='';}}}var modifiedDataLabelsConfig=_objectSpread2({},dataLabelsConfig);if(this.barCtx.isHorizontal){if(val<0){if(dataLabelsConfig.textAnchor==='start'){modifiedDataLabelsConfig.textAnchor='end';}else if(dataLabelsConfig.textAnchor==='end'){modifiedDataLabelsConfig.textAnchor='start';}}}dataLabels.plotDataLabelsText({x:x,y:y,text:text,i:i,j:j,parent:elDataLabelsWrap,dataLabelsConfig:modifiedDataLabelsConfig,alwaysDrawDataLabel:true,offsetCorrection:true});}return elDataLabelsWrap;}},{key:"drawTotalDataLabels",value:function drawTotalDataLabels(_ref3){var x=_ref3.x,y=_ref3.y,val=_ref3.val,barWidth=_ref3.barWidth,barHeight=_ref3.barHeight,realIndex=_ref3.realIndex,textAnchor=_ref3.textAnchor,barTotalDataLabelsConfig=_ref3.barTotalDataLabelsConfig;var w=this.w;var graphics=new Graphics(this.barCtx.ctx);var totalDataLabelText;if(barTotalDataLabelsConfig.enabled&&typeof x!=='undefined'&&typeof y!=='undefined'&&this.barCtx.lastActiveBarSerieIndex===realIndex){totalDataLabelText=graphics.drawText({x:x-(!w.globals.isBarHorizontal&&w.globals.seriesGroups.length?barWidth/w.globals.seriesGroups.length:0),y:y-(w.globals.isBarHorizontal&&w.globals.seriesGroups.length?barHeight/w.globals.seriesGroups.length:0),foreColor:barTotalDataLabelsConfig.style.color,text:val,textAnchor:textAnchor,fontFamily:barTotalDataLabelsConfig.style.fontFamily,fontSize:barTotalDataLabelsConfig.style.fontSize,fontWeight:barTotalDataLabelsConfig.style.fontWeight});}return totalDataLabelText;}}]);return BarDataLabels;}();var Helpers$1=/*#__PURE__*/function(){function Helpers(barCtx){_classCallCheck(this,Helpers);this.w=barCtx.w;this.barCtx=barCtx;}_createClass(Helpers,[{key:"initVariables",value:function initVariables(series){var w=this.w;this.barCtx.series=series;this.barCtx.totalItems=0;this.barCtx.seriesLen=0;this.barCtx.visibleI=-1;// visible Series
this.barCtx.visibleItems=1;// number of visible bars after user zoomed in/out
for(var sl=0;sl<series.length;sl++){if(series[sl].length>0){this.barCtx.seriesLen=this.barCtx.seriesLen+1;this.barCtx.totalItems+=series[sl].length;}if(w.globals.isXNumeric){// get max visible items
for(var j=0;j<series[sl].length;j++){if(w.globals.seriesX[sl][j]>w.globals.minX&&w.globals.seriesX[sl][j]<w.globals.maxX){this.barCtx.visibleItems++;}}}else{this.barCtx.visibleItems=w.globals.dataPoints;}}if(this.barCtx.seriesLen===0){// A small adjustment when combo charts are used
this.barCtx.seriesLen=1;}this.barCtx.zeroSerieses=[];if(!w.globals.comboCharts){this.checkZeroSeries({series:series});}}},{key:"initialPositions",value:function initialPositions(){var w=this.w;var x,y,yDivision,xDivision,barHeight,barWidth,zeroH,zeroW;var dataPoints=w.globals.dataPoints;if(this.barCtx.isRangeBar){// timeline rangebar chart
dataPoints=w.globals.labels.length;}var seriesLen=this.barCtx.seriesLen;if(w.config.plotOptions.bar.rangeBarGroupRows){seriesLen=1;}if(this.barCtx.isHorizontal){// height divided into equal parts
yDivision=w.globals.gridHeight/dataPoints;barHeight=yDivision/seriesLen;if(w.globals.isXNumeric){yDivision=w.globals.gridHeight/this.barCtx.totalItems;barHeight=yDivision/this.barCtx.seriesLen;}barHeight=barHeight*parseInt(this.barCtx.barOptions.barHeight,10)/100;if(String(this.barCtx.barOptions.barHeight).indexOf('%')===-1){barHeight=parseInt(this.barCtx.barOptions.barHeight,10);}zeroW=this.barCtx.baseLineInvertedY+w.globals.padHorizontal+(this.barCtx.isReversed?w.globals.gridWidth:0)-(this.barCtx.isReversed?this.barCtx.baseLineInvertedY*2:0);if(this.barCtx.isFunnel){zeroW=w.globals.gridWidth/2;}y=(yDivision-barHeight*this.barCtx.seriesLen)/2;}else{// width divided into equal parts
xDivision=w.globals.gridWidth/this.barCtx.visibleItems;if(w.config.xaxis.convertedCatToNumeric){xDivision=w.globals.gridWidth/w.globals.dataPoints;}barWidth=xDivision/seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100;if(w.globals.isXNumeric){// max barwidth should be equal to minXDiff to avoid overlap
var xRatio=this.barCtx.xRatio;if(w.globals.minXDiff&&w.globals.minXDiff!==0.5&&w.globals.minXDiff/xRatio>0){xDivision=w.globals.minXDiff/xRatio;}barWidth=xDivision/seriesLen*parseInt(this.barCtx.barOptions.columnWidth,10)/100;if(barWidth<1){barWidth=1;}}if(String(this.barCtx.barOptions.columnWidth).indexOf('%')===-1){barWidth=parseInt(this.barCtx.barOptions.columnWidth,10);}zeroH=w.globals.gridHeight-this.barCtx.baseLineY[this.barCtx.translationsIndex]-(this.barCtx.isReversed?w.globals.gridHeight:0)+(this.barCtx.isReversed?this.barCtx.baseLineY[this.barCtx.translationsIndex]*2:0);x=w.globals.padHorizontal+(xDivision-barWidth*this.barCtx.seriesLen)/2;}w.globals.barHeight=barHeight;w.globals.barWidth=barWidth;return{x:x,y:y,yDivision:yDivision,xDivision:xDivision,barHeight:barHeight,barWidth:barWidth,zeroH:zeroH,zeroW:zeroW};}},{key:"initializeStackedPrevVars",value:function initializeStackedPrevVars(ctx){var w=ctx.w;if(w.globals.hasSeriesGroups){w.globals.seriesGroups.forEach(function(group){if(!ctx[group])ctx[group]={};ctx[group].prevY=[];ctx[group].prevX=[];ctx[group].prevYF=[];ctx[group].prevXF=[];ctx[group].prevYVal=[];ctx[group].prevXVal=[];});}else{ctx.prevY=[];// y position on chart (in columns)
ctx.prevX=[];// x position on chart (in horz bars)
ctx.prevYF=[];// starting y and ending y (height) in columns
ctx.prevXF=[];// starting x and ending x (width) in bars
ctx.prevYVal=[];// y values (series[i][j]) in columns
ctx.prevXVal=[];// x values (series[i][j]) in bars
}}},{key:"initializeStackedXYVars",value:function initializeStackedXYVars(ctx){var w=ctx.w;if(w.globals.hasSeriesGroups){w.globals.seriesGroups.forEach(function(group){if(!ctx[group])ctx[group]={};ctx[group].xArrj=[];ctx[group].xArrjF=[];ctx[group].xArrjVal=[];ctx[group].yArrj=[];ctx[group].yArrjF=[];ctx[group].yArrjVal=[];});}else{ctx.xArrj=[];// xj indicates x position on graph in bars
ctx.xArrjF=[];// xjF indicates bar's x position + x2 positions in bars
ctx.xArrjVal=[];// x val means the actual series's y values in horizontal/bars
ctx.yArrj=[];// yj indicates y position on graph in columns
ctx.yArrjF=[];// yjF indicates bar's y position + y2 positions in columns
ctx.yArrjVal=[];// y val means the actual series's y values in columns
}}},{key:"getPathFillColor",value:function getPathFillColor(series,i,j,realIndex){var _w$config$series$i$da,_w$config$series$i$da2,_w$config$series$i$da3,_w$config$series$i$da4;var w=this.w;var fill=new Fill(this.barCtx.ctx);var fillColor=null;var seriesNumber=this.barCtx.barOptions.distributed?j:i;if(this.barCtx.barOptions.colors.ranges.length>0){var colorRange=this.barCtx.barOptions.colors.ranges;colorRange.map(function(range){if(series[i][j]>=range.from&&series[i][j]<=range.to){fillColor=range.color;}});}if(w.config.series[i].data[j]&&w.config.series[i].data[j].fillColor){fillColor=w.config.series[i].data[j].fillColor;}var pathFill=fill.fillPath({seriesNumber:this.barCtx.barOptions.distributed?seriesNumber:realIndex,dataPointIndex:j,color:fillColor,value:series[i][j],fillConfig:(_w$config$series$i$da=w.config.series[i].data[j])===null||_w$config$series$i$da===void 0?void 0:_w$config$series$i$da.fill,fillType:(_w$config$series$i$da2=w.config.series[i].data[j])!==null&&_w$config$series$i$da2!==void 0&&(_w$config$series$i$da3=_w$config$series$i$da2.fill)!==null&&_w$config$series$i$da3!==void 0&&_w$config$series$i$da3.type?(_w$config$series$i$da4=w.config.series[i].data[j])===null||_w$config$series$i$da4===void 0?void 0:_w$config$series$i$da4.fill.type:Array.isArray(w.config.fill.type)?w.config.fill.type[i]:w.config.fill.type});return pathFill;}},{key:"getStrokeWidth",value:function getStrokeWidth(i,j,realIndex){var strokeWidth=0;var w=this.w;if(typeof this.barCtx.series[i][j]==='undefined'||this.barCtx.series[i][j]===null){this.barCtx.isNullValue=true;}else{this.barCtx.isNullValue=false;}if(w.config.stroke.show){if(!this.barCtx.isNullValue){strokeWidth=Array.isArray(this.barCtx.strokeWidth)?this.barCtx.strokeWidth[realIndex]:this.barCtx.strokeWidth;}}return strokeWidth;}},{key:"shouldApplyRadius",value:function shouldApplyRadius(realIndex){var w=this.w;var applyRadius=false;if(w.config.plotOptions.bar.borderRadius>0){if(w.config.chart.stacked){if(w.config.plotOptions.bar.borderRadiusWhenStacked==='last'){if(this.barCtx.lastActiveBarSerieIndex===realIndex){applyRadius=true;}}else{applyRadius=true;}}else{applyRadius=true;}}return applyRadius;}},{key:"barBackground",value:function barBackground(_ref){var j=_ref.j,i=_ref.i,x1=_ref.x1,x2=_ref.x2,y1=_ref.y1,y2=_ref.y2,elSeries=_ref.elSeries;var w=this.w;var graphics=new Graphics(this.barCtx.ctx);var sr=new Series(this.barCtx.ctx);var activeSeriesIndex=sr.getActiveConfigSeriesIndex();if(this.barCtx.barOptions.colors.backgroundBarColors.length>0&&activeSeriesIndex===i){if(j>=this.barCtx.barOptions.colors.backgroundBarColors.length){j%=this.barCtx.barOptions.colors.backgroundBarColors.length;}var bcolor=this.barCtx.barOptions.colors.backgroundBarColors[j];var rect=graphics.drawRect(typeof x1!=='undefined'?x1:0,typeof y1!=='undefined'?y1:0,typeof x2!=='undefined'?x2:w.globals.gridWidth,typeof y2!=='undefined'?y2:w.globals.gridHeight,this.barCtx.barOptions.colors.backgroundBarRadius,bcolor,this.barCtx.barOptions.colors.backgroundBarOpacity);elSeries.add(rect);rect.node.classList.add('apexcharts-backgroundBar');}}},{key:"getColumnPaths",value:function getColumnPaths(_ref2){var _w$config$series$real;var barWidth=_ref2.barWidth,barXPosition=_ref2.barXPosition,y1=_ref2.y1,y2=_ref2.y2,strokeWidth=_ref2.strokeWidth,seriesGroup=_ref2.seriesGroup,realIndex=_ref2.realIndex,i=_ref2.i,j=_ref2.j,w=_ref2.w;var graphics=new Graphics(this.barCtx.ctx);strokeWidth=Array.isArray(strokeWidth)?strokeWidth[realIndex]:strokeWidth;if(!strokeWidth)strokeWidth=0;var bW=barWidth;var bXP=barXPosition;if((_w$config$series$real=w.config.series[realIndex].data[j])!==null&&_w$config$series$real!==void 0&&_w$config$series$real.columnWidthOffset){bXP=barXPosition-w.config.series[realIndex].data[j].columnWidthOffset/2;bW=barWidth+w.config.series[realIndex].data[j].columnWidthOffset;}var x1=bXP;var x2=bXP+bW;// append tiny pixels to avoid exponentials (which cause issues in border-radius)
y1+=0.001;y2+=0.001;var pathTo=graphics.move(x1,y1);var pathFrom=graphics.move(x1,y1);var sl=graphics.line(x2-strokeWidth,y1);if(w.globals.previousPaths.length>0){pathFrom=this.barCtx.getPreviousPath(realIndex,j,false);}pathTo=pathTo+graphics.line(x1,y2)+graphics.line(x2-strokeWidth,y2)+graphics.line(x2-strokeWidth,y1)+(w.config.plotOptions.bar.borderRadiusApplication==='around'?' Z':' z');// the lines in pathFrom are repeated to equal it to the points of pathTo
// this is to avoid weird animation (bug in svg.js)
pathFrom=pathFrom+graphics.line(x1,y1)+sl+sl+sl+sl+sl+graphics.line(x1,y1)+(w.config.plotOptions.bar.borderRadiusApplication==='around'?' Z':' z');if(this.shouldApplyRadius(realIndex)){pathTo=graphics.roundPathCorners(pathTo,w.config.plotOptions.bar.borderRadius);}if(w.config.chart.stacked){var _ctx=this.barCtx;if(w.globals.hasSeriesGroups&&seriesGroup){_ctx=this.barCtx[seriesGroup];}_ctx.yArrj.push(y2);_ctx.yArrjF.push(Math.abs(y1-y2));_ctx.yArrjVal.push(this.barCtx.series[i][j]);}return{pathTo:pathTo,pathFrom:pathFrom};}},{key:"getBarpaths",value:function getBarpaths(_ref3){var _w$config$series$real2;var barYPosition=_ref3.barYPosition,barHeight=_ref3.barHeight,x1=_ref3.x1,x2=_ref3.x2,strokeWidth=_ref3.strokeWidth,seriesGroup=_ref3.seriesGroup,realIndex=_ref3.realIndex,i=_ref3.i,j=_ref3.j,w=_ref3.w;var graphics=new Graphics(this.barCtx.ctx);strokeWidth=Array.isArray(strokeWidth)?strokeWidth[realIndex]:strokeWidth;if(!strokeWidth)strokeWidth=0;var bYP=barYPosition;var bH=barHeight;if((_w$config$series$real2=w.config.series[realIndex].data[j])!==null&&_w$config$series$real2!==void 0&&_w$config$series$real2.barHeightOffset){bYP=barYPosition-w.config.series[realIndex].data[j].barHeightOffset/2;bH=barHeight+w.config.series[realIndex].data[j].barHeightOffset;}var y1=bYP;var y2=bYP+bH;// append tiny pixels to avoid exponentials (which cause issues in border-radius)
x1+=0.001;x2+=0.001;var pathTo=graphics.move(x1,y1);var pathFrom=graphics.move(x1,y1);if(w.globals.previousPaths.length>0){pathFrom=this.barCtx.getPreviousPath(realIndex,j,false);}var sl=graphics.line(x1,y2-strokeWidth);pathTo=pathTo+graphics.line(x2,y1)+graphics.line(x2,y2-strokeWidth)+sl+(w.config.plotOptions.bar.borderRadiusApplication==='around'?' Z':' z');pathFrom=pathFrom+graphics.line(x1,y1)+sl+sl+sl+sl+sl+graphics.line(x1,y1)+(w.config.plotOptions.bar.borderRadiusApplication==='around'?' Z':' z');if(this.shouldApplyRadius(realIndex)){pathTo=graphics.roundPathCorners(pathTo,w.config.plotOptions.bar.borderRadius);}if(w.config.chart.stacked){var _ctx=this.barCtx;if(w.globals.hasSeriesGroups&&seriesGroup){_ctx=this.barCtx[seriesGroup];}_ctx.xArrj.push(x2);_ctx.xArrjF.push(Math.abs(x1-x2));_ctx.xArrjVal.push(this.barCtx.series[i][j]);}return{pathTo:pathTo,pathFrom:pathFrom};}},{key:"checkZeroSeries",value:function checkZeroSeries(_ref4){var series=_ref4.series;var w=this.w;for(var zs=0;zs<series.length;zs++){var total=0;for(var zsj=0;zsj<series[w.globals.maxValsInArrayIndex].length;zsj++){total+=series[zs][zsj];}if(total===0){this.barCtx.zeroSerieses.push(zs);}}}},{key:"getXForValue",value:function getXForValue(value,zeroW){var zeroPositionForNull=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var xForVal=zeroPositionForNull?zeroW:null;if(typeof value!=='undefined'&&value!==null){xForVal=zeroW+value/this.barCtx.invertedYRatio-(this.barCtx.isReversed?value/this.barCtx.invertedYRatio:0)*2;}return xForVal;}},{key:"getYForValue",value:function getYForValue(value,zeroH,translationsIndex){var zeroPositionForNull=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var yForVal=zeroPositionForNull?zeroH:null;if(typeof value!=='undefined'&&value!==null){yForVal=zeroH-value/this.barCtx.yRatio[translationsIndex]+(this.barCtx.isReversed?value/this.barCtx.yRatio[translationsIndex]:0)*2;}return yForVal;}},{key:"getGoalValues",value:function getGoalValues(type,zeroW,zeroH,i,j,translationsIndex){var _this=this;var w=this.w;var goals=[];var pushGoal=function pushGoal(value,attrs){var _goals$push;goals.push((_goals$push={},_defineProperty(_goals$push,type,type==='x'?_this.getXForValue(value,zeroW,false):_this.getYForValue(value,zeroH,translationsIndex,false)),_defineProperty(_goals$push,"attrs",attrs),_goals$push));};if(w.globals.seriesGoals[i]&&w.globals.seriesGoals[i][j]&&Array.isArray(w.globals.seriesGoals[i][j])){w.globals.seriesGoals[i][j].forEach(function(goal){pushGoal(goal.value,goal);});}if(this.barCtx.barOptions.isDumbbell&&w.globals.seriesRange.length){var colors=this.barCtx.barOptions.dumbbellColors?this.barCtx.barOptions.dumbbellColors:w.globals.colors;var commonAttrs={strokeHeight:type==='x'?0:w.globals.markers.size[i],strokeWidth:type==='x'?w.globals.markers.size[i]:0,strokeDashArray:0,strokeLineCap:'round',strokeColor:Array.isArray(colors[i])?colors[i][0]:colors[i]};pushGoal(w.globals.seriesRangeStart[i][j],commonAttrs);pushGoal(w.globals.seriesRangeEnd[i][j],_objectSpread2(_objectSpread2({},commonAttrs),{},{strokeColor:Array.isArray(colors[i])?colors[i][1]:colors[i]}));}return goals;}},{key:"drawGoalLine",value:function drawGoalLine(_ref5){var barXPosition=_ref5.barXPosition,barYPosition=_ref5.barYPosition,goalX=_ref5.goalX,goalY=_ref5.goalY,barWidth=_ref5.barWidth,barHeight=_ref5.barHeight;var graphics=new Graphics(this.barCtx.ctx);var lineGroup=graphics.group({className:'apexcharts-bar-goals-groups'});lineGroup.node.classList.add('apexcharts-element-hidden');this.barCtx.w.globals.delayedElements.push({el:lineGroup.node});lineGroup.attr('clip-path',"url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid,")"));var line=null;if(this.barCtx.isHorizontal){if(Array.isArray(goalX)){goalX.forEach(function(goal){// Need a tiny margin of 1 each side so goals don't disappear at extremeties
if(goal.x>=-1&&goal.x<=graphics.w.globals.gridWidth+1){var sHeight=typeof goal.attrs.strokeHeight!=='undefined'?goal.attrs.strokeHeight:barHeight/2;var y=barYPosition+sHeight+barHeight/2;line=graphics.drawLine(goal.x,y-sHeight*2,goal.x,y,goal.attrs.strokeColor?goal.attrs.strokeColor:undefined,goal.attrs.strokeDashArray,goal.attrs.strokeWidth?goal.attrs.strokeWidth:2,goal.attrs.strokeLineCap);lineGroup.add(line);}});}}else{if(Array.isArray(goalY)){goalY.forEach(function(goal){// Need a tiny margin of 1 each side so goals don't disappear at extremeties
if(goal.y>=-1&&goal.y<=graphics.w.globals.gridHeight+1){var sWidth=typeof goal.attrs.strokeWidth!=='undefined'?goal.attrs.strokeWidth:barWidth/2;var x=barXPosition+sWidth+barWidth/2;line=graphics.drawLine(x-sWidth*2,goal.y,x,goal.y,goal.attrs.strokeColor?goal.attrs.strokeColor:undefined,goal.attrs.strokeDashArray,goal.attrs.strokeHeight?goal.attrs.strokeHeight:2,goal.attrs.strokeLineCap);lineGroup.add(line);}});}}return lineGroup;}},{key:"drawBarShadow",value:function drawBarShadow(_ref6){var prevPaths=_ref6.prevPaths,currPaths=_ref6.currPaths,color=_ref6.color;var w=this.w;var prevX2=prevPaths.x,prevX1=prevPaths.x1,prevY1=prevPaths.barYPosition;var currX2=currPaths.x,currX1=currPaths.x1,currY1=currPaths.barYPosition;var prevY2=prevY1+currPaths.barHeight;var graphics=new Graphics(this.barCtx.ctx);var utils=new Utils$1();var shadowPath=graphics.move(prevX1,prevY2)+graphics.line(prevX2,prevY2)+graphics.line(currX2,currY1)+graphics.line(currX1,currY1)+graphics.line(prevX1,prevY2)+(w.config.plotOptions.bar.borderRadiusApplication==='around'?' Z':' z');return graphics.drawPath({d:shadowPath,fill:utils.shadeColor(0.5,Utils$1.rgb2hex(color)),stroke:'none',strokeWidth:0,fillOpacity:1,classes:'apexcharts-bar-shadows'});}},{key:"getZeroValueEncounters",value:function getZeroValueEncounters(_ref7){var i=_ref7.i,j=_ref7.j;var w=this.w;var nonZeroColumns=0;var zeroEncounters=0;w.globals.seriesPercent.forEach(function(_s,_si){if(_s[j]){nonZeroColumns++;}if(_si<i&&_s[j]===0){zeroEncounters++;}});return{nonZeroColumns:nonZeroColumns,zeroEncounters:zeroEncounters};}}]);return Helpers;}();/**
   * ApexCharts Bar Class responsible for drawing both Columns and Bars.
   *
   * @module Bar
   **/var Bar=/*#__PURE__*/function(){function Bar(ctx,xyRatios){_classCallCheck(this,Bar);this.ctx=ctx;this.w=ctx.w;var w=this.w;this.barOptions=w.config.plotOptions.bar;this.isHorizontal=this.barOptions.horizontal;this.strokeWidth=w.config.stroke.width;this.isNullValue=false;this.isRangeBar=w.globals.seriesRange.length&&this.isHorizontal;this.isVerticalGroupedRangeBar=!w.globals.isBarHorizontal&&w.globals.seriesRange.length&&w.config.plotOptions.bar.rangeBarGroupRows;this.isFunnel=this.barOptions.isFunnel;this.xyRatios=xyRatios;if(this.xyRatios!==null){this.xRatio=xyRatios.xRatio;this.yRatio=xyRatios.yRatio;this.invertedXRatio=xyRatios.invertedXRatio;this.invertedYRatio=xyRatios.invertedYRatio;this.baseLineY=xyRatios.baseLineY;this.baseLineInvertedY=xyRatios.baseLineInvertedY;}this.yaxisIndex=0;this.translationsIndex=0;this.seriesLen=0;this.pathArr=[];var ser=new Series(this.ctx);this.lastActiveBarSerieIndex=ser.getActiveConfigSeriesIndex('desc',['bar','column']);var barSeriesIndices=ser.getBarSeriesIndices();var coreUtils=new CoreUtils(this.ctx);this.stackedSeriesTotals=coreUtils.getStackedSeriesTotals(this.w.config.series.map(function(s,i){return barSeriesIndices.indexOf(i)===-1?i:-1;}).filter(function(s){return s!==-1;}));this.barHelpers=new Helpers$1(this);}/** primary draw method which is called on bar object
     * @memberof Bar
     * @param {array} series - user supplied series values
     * @param {int} seriesIndex - the index by which series will be drawn on the svg
     * @return {node} element which is supplied to parent chart draw method for appending
     **/_createClass(Bar,[{key:"draw",value:function draw(series,seriesIndex){var w=this.w;var graphics=new Graphics(this.ctx);var coreUtils=new CoreUtils(this.ctx,w);series=coreUtils.getLogSeries(series);this.series=series;this.yRatio=coreUtils.getLogYRatios(this.yRatio);this.barHelpers.initVariables(series);var ret=graphics.group({class:'apexcharts-bar-series apexcharts-plot-series'});if(w.config.dataLabels.enabled){if(this.totalItems>this.barOptions.dataLabels.maxItems){console.warn('WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts');}}for(var i=0,bc=0;i<series.length;i++,bc++){var x=void 0,y=void 0,xDivision=void 0,// xDivision is the GRIDWIDTH divided by number of datapoints (columns)
yDivision=void 0,// yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
zeroH=void 0,// zeroH is the baseline where 0 meets y axis
zeroW=void 0;// zeroW is the baseline where 0 meets x axis
var yArrj=[];// hold y values of current iterating series
var xArrj=[];// hold x values of current iterating series
var realIndex=w.globals.comboCharts?seriesIndex[i]:i;// el to which series will be drawn
var elSeries=graphics.group({class:"apexcharts-series",rel:i+1,seriesName:Utils$1.escapeString(w.globals.seriesNames[realIndex]),'data:realIndex':realIndex});this.ctx.series.addCollapsedClassToSeries(elSeries,realIndex);if(series[i].length>0){this.visibleI=this.visibleI+1;}var barHeight=0;var barWidth=0;if(this.yRatio.length>1){this.yaxisIndex=w.globals.seriesYAxisReverseMap[realIndex];this.translationsIndex=realIndex;}var translationsIndex=this.translationsIndex;this.isReversed=w.config.yaxis[this.yaxisIndex]&&w.config.yaxis[this.yaxisIndex].reversed;var initPositions=this.barHelpers.initialPositions();y=initPositions.y;barHeight=initPositions.barHeight;yDivision=initPositions.yDivision;zeroW=initPositions.zeroW;x=initPositions.x;barWidth=initPositions.barWidth;xDivision=initPositions.xDivision;zeroH=initPositions.zeroH;if(!this.horizontal){xArrj.push(x+barWidth/2);}// eldatalabels
var elDataLabelsWrap=graphics.group({class:'apexcharts-datalabels','data:realIndex':realIndex});w.globals.delayedElements.push({el:elDataLabelsWrap.node});elDataLabelsWrap.node.classList.add('apexcharts-element-hidden');var elGoalsMarkers=graphics.group({class:'apexcharts-bar-goals-markers'});var elBarShadows=graphics.group({class:'apexcharts-bar-shadows'});w.globals.delayedElements.push({el:elBarShadows.node});elBarShadows.node.classList.add('apexcharts-element-hidden');for(var j=0;j<series[i].length;j++){var strokeWidth=this.barHelpers.getStrokeWidth(i,j,realIndex);var paths=null;var pathsParams={indexes:{i:i,j:j,realIndex:realIndex,translationsIndex:translationsIndex,bc:bc},x:x,y:y,strokeWidth:strokeWidth,elSeries:elSeries};if(this.isHorizontal){paths=this.drawBarPaths(_objectSpread2(_objectSpread2({},pathsParams),{},{barHeight:barHeight,zeroW:zeroW,yDivision:yDivision}));barWidth=this.series[i][j]/this.invertedYRatio;}else{paths=this.drawColumnPaths(_objectSpread2(_objectSpread2({},pathsParams),{},{xDivision:xDivision,barWidth:barWidth,zeroH:zeroH}));barHeight=this.series[i][j]/this.yRatio[translationsIndex];}var pathFill=this.barHelpers.getPathFillColor(series,i,j,realIndex);if(this.isFunnel&&this.barOptions.isFunnel3d&&this.pathArr.length&&j>0){var barShadow=this.barHelpers.drawBarShadow({color:typeof pathFill==='string'&&(pathFill===null||pathFill===void 0?void 0:pathFill.indexOf('url'))===-1?pathFill:Utils$1.hexToRgba(w.globals.colors[i]),prevPaths:this.pathArr[this.pathArr.length-1],currPaths:paths});if(barShadow){elBarShadows.add(barShadow);}}this.pathArr.push(paths);var barGoalLine=this.barHelpers.drawGoalLine({barXPosition:paths.barXPosition,barYPosition:paths.barYPosition,goalX:paths.goalX,goalY:paths.goalY,barHeight:barHeight,barWidth:barWidth});if(barGoalLine){elGoalsMarkers.add(barGoalLine);}y=paths.y;x=paths.x;// push current X
if(j>0){xArrj.push(x+barWidth/2);}yArrj.push(y);this.renderSeries({realIndex:realIndex,pathFill:pathFill,j:j,i:i,pathFrom:paths.pathFrom,pathTo:paths.pathTo,strokeWidth:strokeWidth,elSeries:elSeries,x:x,y:y,series:series,barHeight:paths.barHeight?paths.barHeight:barHeight,barWidth:paths.barWidth?paths.barWidth:barWidth,elDataLabelsWrap:elDataLabelsWrap,elGoalsMarkers:elGoalsMarkers,elBarShadows:elBarShadows,visibleSeries:this.visibleI,type:'bar'});}// push all x val arrays into main xArr
w.globals.seriesXvalues[realIndex]=xArrj;w.globals.seriesYvalues[realIndex]=yArrj;ret.add(elSeries);}return ret;}},{key:"renderSeries",value:function renderSeries(_ref){var realIndex=_ref.realIndex,pathFill=_ref.pathFill,lineFill=_ref.lineFill,j=_ref.j,i=_ref.i,groupIndex=_ref.groupIndex,pathFrom=_ref.pathFrom,pathTo=_ref.pathTo,strokeWidth=_ref.strokeWidth,elSeries=_ref.elSeries,x=_ref.x,y=_ref.y,y1=_ref.y1,y2=_ref.y2,series=_ref.series,barHeight=_ref.barHeight,barWidth=_ref.barWidth,barXPosition=_ref.barXPosition,barYPosition=_ref.barYPosition,elDataLabelsWrap=_ref.elDataLabelsWrap,elGoalsMarkers=_ref.elGoalsMarkers,elBarShadows=_ref.elBarShadows,visibleSeries=_ref.visibleSeries,type=_ref.type;var w=this.w;var graphics=new Graphics(this.ctx);if(!lineFill){/* fix apexcharts#341 */lineFill=this.barOptions.distributed?w.globals.stroke.colors[j]:w.globals.stroke.colors[realIndex];}if(w.config.series[i].data[j]&&w.config.series[i].data[j].strokeColor){lineFill=w.config.series[i].data[j].strokeColor;}if(this.isNullValue){pathFill='none';}var delay=j/w.config.chart.animations.animateGradually.delay*(w.config.chart.animations.speed/w.globals.dataPoints)/2.4;var renderedPath=graphics.renderPaths({i:i,j:j,realIndex:realIndex,pathFrom:pathFrom,pathTo:pathTo,stroke:lineFill,strokeWidth:strokeWidth,strokeLineCap:w.config.stroke.lineCap,fill:pathFill,animationDelay:delay,initialSpeed:w.config.chart.animations.speed,dataChangeSpeed:w.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(type,"-area")});renderedPath.attr('clip-path',"url(#gridRectMask".concat(w.globals.cuid,")"));var forecast=w.config.forecastDataPoints;if(forecast.count>0){if(j>=w.globals.dataPoints-forecast.count){renderedPath.node.setAttribute('stroke-dasharray',forecast.dashArray);renderedPath.node.setAttribute('stroke-width',forecast.strokeWidth);renderedPath.node.setAttribute('fill-opacity',forecast.fillOpacity);}}if(typeof y1!=='undefined'&&typeof y2!=='undefined'){renderedPath.attr('data-range-y1',y1);renderedPath.attr('data-range-y2',y2);}var filters=new Filters(this.ctx);filters.setSelectionFilter(renderedPath,realIndex,j);elSeries.add(renderedPath);var barDataLabels=new BarDataLabels(this);var dataLabelsObj=barDataLabels.handleBarDataLabels({x:x,y:y,y1:y1,y2:y2,i:i,j:j,series:series,realIndex:realIndex,groupIndex:groupIndex,barHeight:barHeight,barWidth:barWidth,barXPosition:barXPosition,barYPosition:barYPosition,renderedPath:renderedPath,visibleSeries:visibleSeries});if(dataLabelsObj.dataLabels!==null){elDataLabelsWrap.add(dataLabelsObj.dataLabels);}if(dataLabelsObj.totalDataLabels){elDataLabelsWrap.add(dataLabelsObj.totalDataLabels);}elSeries.add(elDataLabelsWrap);if(elGoalsMarkers){elSeries.add(elGoalsMarkers);}if(elBarShadows){elSeries.add(elBarShadows);}return elSeries;}},{key:"drawBarPaths",value:function drawBarPaths(_ref2){var indexes=_ref2.indexes,barHeight=_ref2.barHeight,strokeWidth=_ref2.strokeWidth,zeroW=_ref2.zeroW,x=_ref2.x,y=_ref2.y,yDivision=_ref2.yDivision,elSeries=_ref2.elSeries;var w=this.w;var i=indexes.i;var j=indexes.j;var barYPosition;if(w.globals.isXNumeric){y=(w.globals.seriesX[i][j]-w.globals.minX)/this.invertedXRatio-barHeight;barYPosition=y+barHeight*this.visibleI;}else{if(w.config.plotOptions.bar.hideZeroBarsWhenGrouped){var nonZeroColumns=0;var zeroEncounters=0;w.globals.seriesPercent.forEach(function(_s,_si){if(_s[j]){nonZeroColumns++;}if(_si<i&&_s[j]===0){zeroEncounters++;}});if(nonZeroColumns>0){barHeight=this.seriesLen*barHeight/nonZeroColumns;}barYPosition=y+barHeight*this.visibleI;barYPosition-=barHeight*zeroEncounters;}else{barYPosition=y+barHeight*this.visibleI;}}if(this.isFunnel){zeroW=zeroW-(this.barHelpers.getXForValue(this.series[i][j],zeroW)-zeroW)/2;}x=this.barHelpers.getXForValue(this.series[i][j],zeroW);var paths=this.barHelpers.getBarpaths({barYPosition:barYPosition,barHeight:barHeight,x1:zeroW,x2:x,strokeWidth:strokeWidth,series:this.series,realIndex:indexes.realIndex,i:i,j:j,w:w});if(!w.globals.isXNumeric){y=y+yDivision;}this.barHelpers.barBackground({j:j,i:i,y1:barYPosition-barHeight*this.visibleI,y2:barHeight*this.seriesLen,elSeries:elSeries});return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,x1:zeroW,x:x,y:y,goalX:this.barHelpers.getGoalValues('x',zeroW,null,i,j),barYPosition:barYPosition,barHeight:barHeight};}},{key:"drawColumnPaths",value:function drawColumnPaths(_ref3){var indexes=_ref3.indexes,x=_ref3.x,y=_ref3.y,xDivision=_ref3.xDivision,barWidth=_ref3.barWidth,zeroH=_ref3.zeroH,strokeWidth=_ref3.strokeWidth,elSeries=_ref3.elSeries;var w=this.w;var realIndex=indexes.realIndex;var translationsIndex=indexes.translationsIndex;var i=indexes.i;var j=indexes.j;var bc=indexes.bc;var barXPosition;if(w.globals.isXNumeric){var xForNumericX=this.getBarXForNumericXAxis({x:x,j:j,realIndex:realIndex,barWidth:barWidth});x=xForNumericX.x;barXPosition=xForNumericX.barXPosition;}else{if(w.config.plotOptions.bar.hideZeroBarsWhenGrouped){var _this$barHelpers$getZ=this.barHelpers.getZeroValueEncounters({i:i,j:j}),nonZeroColumns=_this$barHelpers$getZ.nonZeroColumns,zeroEncounters=_this$barHelpers$getZ.zeroEncounters;if(nonZeroColumns>0){barWidth=this.seriesLen*barWidth/nonZeroColumns;}barXPosition=x+barWidth*this.visibleI;barXPosition-=barWidth*zeroEncounters;}else{barXPosition=x+barWidth*this.visibleI;}}y=this.barHelpers.getYForValue(this.series[i][j],zeroH,translationsIndex);var paths=this.barHelpers.getColumnPaths({barXPosition:barXPosition,barWidth:barWidth,y1:zeroH,y2:y,strokeWidth:strokeWidth,series:this.series,realIndex:realIndex,i:i,j:j,w:w});if(!w.globals.isXNumeric){x=x+xDivision;}this.barHelpers.barBackground({bc:bc,j:j,i:i,x1:barXPosition-strokeWidth/2-barWidth*this.visibleI,x2:barWidth*this.seriesLen+strokeWidth/2,elSeries:elSeries});return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,x:x,y:y,goalY:this.barHelpers.getGoalValues('y',null,zeroH,i,j,translationsIndex),barXPosition:barXPosition,barWidth:barWidth};}},{key:"getBarXForNumericXAxis",value:function getBarXForNumericXAxis(_ref4){var x=_ref4.x,barWidth=_ref4.barWidth,realIndex=_ref4.realIndex,j=_ref4.j;var w=this.w;var sxI=realIndex;if(!w.globals.seriesX[realIndex].length){sxI=w.globals.maxValsInArrayIndex;}if(w.globals.seriesX[sxI][j]){x=(w.globals.seriesX[sxI][j]-w.globals.minX)/this.xRatio-barWidth*this.seriesLen/2;}return{barXPosition:x+barWidth*this.visibleI,x:x};}/** getPreviousPath is a common function for bars/columns which is used to get previous paths when data changes.
       * @memberof Bar
       * @param {int} realIndex - current iterating i
       * @param {int} j - current iterating series's j index
       * @return {string} pathFrom is the string which will be appended in animations
       **/},{key:"getPreviousPath",value:function getPreviousPath(realIndex,j){var w=this.w;var pathFrom;for(var pp=0;pp<w.globals.previousPaths.length;pp++){var gpp=w.globals.previousPaths[pp];if(gpp.paths&&gpp.paths.length>0&&parseInt(gpp.realIndex,10)===parseInt(realIndex,10)){if(typeof w.globals.previousPaths[pp].paths[j]!=='undefined'){pathFrom=w.globals.previousPaths[pp].paths[j].d;}}}return pathFrom;}}]);return Bar;}();/**
   * ApexCharts BarStacked Class responsible for drawing both Stacked Columns and Bars.
   *
   * @module BarStacked
   * The whole calculation for stacked bar/column is different from normal bar/column,
   * hence it makes sense to derive a new class for it extending most of the props of Parent Bar
   **/var BarStacked=/*#__PURE__*/function(_Bar){_inherits(BarStacked,_Bar);var _super=_createSuper(BarStacked);function BarStacked(){_classCallCheck(this,BarStacked);return _super.apply(this,arguments);}_createClass(BarStacked,[{key:"draw",value:function draw(series,seriesIndex){var _this=this;var w=this.w;this.graphics=new Graphics(this.ctx);this.bar=new Bar(this.ctx,this.xyRatios);var coreUtils=new CoreUtils(this.ctx,w);series=coreUtils.getLogSeries(series);this.yRatio=coreUtils.getLogYRatios(this.yRatio);this.barHelpers.initVariables(series);if(w.config.chart.stackType==='100%'){series=w.globals.seriesPercent.slice();}this.series=series;this.barHelpers.initializeStackedPrevVars(this);var ret=this.graphics.group({class:'apexcharts-bar-series apexcharts-plot-series'});var x=0;var y=0;var _loop=function _loop(i,bc){var xDivision=void 0;// xDivision is the GRIDWIDTH divided by number of datapoints (columns)
var yDivision=void 0;// yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
var zeroH=void 0;// zeroH is the baseline where 0 meets y axis
var zeroW=void 0;// zeroW is the baseline where 0 meets x axis
var groupIndex=-1;// groupIndex is the index of group buckets (group1, group2, ...)
_this.groupCtx=_this;w.globals.seriesGroups.forEach(function(group,gIndex){if(group.indexOf(w.config.series[i].name)>-1){groupIndex=gIndex;}});if(groupIndex!==-1){_this.groupCtx=_this[w.globals.seriesGroups[groupIndex]];}var xArrValues=[];var yArrValues=[];var realIndex=w.globals.comboCharts?seriesIndex[i]:i;var translationsIndex=0;if(_this.yRatio.length>1){_this.yaxisIndex=w.globals.seriesYAxisReverseMap[realIndex][0];translationsIndex=realIndex;}_this.isReversed=w.config.yaxis[_this.yaxisIndex]&&w.config.yaxis[_this.yaxisIndex].reversed;// el to which series will be drawn
var elSeries=_this.graphics.group({class:"apexcharts-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[realIndex]),rel:i+1,'data:realIndex':realIndex});_this.ctx.series.addCollapsedClassToSeries(elSeries,realIndex);// eldatalabels
var elDataLabelsWrap=_this.graphics.group({class:'apexcharts-datalabels','data:realIndex':realIndex});var elGoalsMarkers=_this.graphics.group({class:'apexcharts-bar-goals-markers'});var barHeight=0;var barWidth=0;var initPositions=_this.initialPositions(x,y,xDivision,yDivision,zeroH,zeroW,translationsIndex);y=initPositions.y;barHeight=initPositions.barHeight;yDivision=initPositions.yDivision;zeroW=initPositions.zeroW;x=initPositions.x;barWidth=initPositions.barWidth;xDivision=initPositions.xDivision;zeroH=initPositions.zeroH;w.globals.barHeight=barHeight;w.globals.barWidth=barWidth;_this.barHelpers.initializeStackedXYVars(_this);// where all stack bar disappear after collapsing the first series
if(_this.groupCtx.prevY.length===1&&_this.groupCtx.prevY[0].every(function(val){return isNaN(val);})){_this.groupCtx.prevY[0]=_this.groupCtx.prevY[0].map(function(val){return zeroH;});_this.groupCtx.prevYF[0]=_this.groupCtx.prevYF[0].map(function(val){return 0;});}for(var j=0;j<w.globals.dataPoints;j++){var strokeWidth=_this.barHelpers.getStrokeWidth(i,j,realIndex);var commonPathOpts={indexes:{i:i,j:j,realIndex:realIndex,translationsIndex:translationsIndex,bc:bc},strokeWidth:strokeWidth,x:x,y:y,elSeries:elSeries,groupIndex:groupIndex,seriesGroup:w.globals.seriesGroups[groupIndex]};var paths=null;if(_this.isHorizontal){paths=_this.drawStackedBarPaths(_objectSpread2(_objectSpread2({},commonPathOpts),{},{zeroW:zeroW,barHeight:barHeight,yDivision:yDivision}));barWidth=_this.series[i][j]/_this.invertedYRatio;}else{paths=_this.drawStackedColumnPaths(_objectSpread2(_objectSpread2({},commonPathOpts),{},{xDivision:xDivision,barWidth:barWidth,zeroH:zeroH}));barHeight=_this.series[i][j]/_this.yRatio[translationsIndex];}var barGoalLine=_this.barHelpers.drawGoalLine({barXPosition:paths.barXPosition,barYPosition:paths.barYPosition,goalX:paths.goalX,goalY:paths.goalY,barHeight:barHeight,barWidth:barWidth});if(barGoalLine){elGoalsMarkers.add(barGoalLine);}y=paths.y;x=paths.x;xArrValues.push(x);yArrValues.push(y);var pathFill=_this.barHelpers.getPathFillColor(series,i,j,realIndex);elSeries=_this.renderSeries({realIndex:realIndex,pathFill:pathFill,j:j,i:i,groupIndex:groupIndex,pathFrom:paths.pathFrom,pathTo:paths.pathTo,strokeWidth:strokeWidth,elSeries:elSeries,x:x,y:y,series:series,barHeight:barHeight,barWidth:barWidth,elDataLabelsWrap:elDataLabelsWrap,elGoalsMarkers:elGoalsMarkers,type:'bar',visibleSeries:0});}// push all x val arrays into main xArr
w.globals.seriesXvalues[realIndex]=xArrValues;w.globals.seriesYvalues[realIndex]=yArrValues;// push all current y values array to main PrevY Array
_this.groupCtx.prevY.push(_this.groupCtx.yArrj);_this.groupCtx.prevYF.push(_this.groupCtx.yArrjF);_this.groupCtx.prevYVal.push(_this.groupCtx.yArrjVal);_this.groupCtx.prevX.push(_this.groupCtx.xArrj);_this.groupCtx.prevXF.push(_this.groupCtx.xArrjF);_this.groupCtx.prevXVal.push(_this.groupCtx.xArrjVal);ret.add(elSeries);};for(var i=0,bc=0;i<series.length;i++,bc++){_loop(i,bc);}return ret;}},{key:"initialPositions",value:function initialPositions(x,y,xDivision,yDivision,zeroH,zeroW,translationsIndex){var _w$globals$seriesGrou,_w$globals$seriesGrou2;var w=this.w;var barHeight,barWidth;if(this.isHorizontal){// height divided into equal parts
yDivision=w.globals.gridHeight/w.globals.dataPoints;barHeight=yDivision;barHeight=barHeight*parseInt(w.config.plotOptions.bar.barHeight,10)/100;if(String(w.config.plotOptions.bar.barHeight).indexOf('%')===-1){barHeight=parseInt(w.config.plotOptions.bar.barHeight,10);}zeroW=this.baseLineInvertedY+w.globals.padHorizontal+(this.isReversed?w.globals.gridWidth:0)-(this.isReversed?this.baseLineInvertedY*2:0);// initial y position is half of barHeight * half of number of Bars
y=(yDivision-barHeight)/2;}else{// width divided into equal parts
xDivision=w.globals.gridWidth/w.globals.dataPoints;barWidth=xDivision;if(w.globals.isXNumeric&&w.globals.dataPoints>1){// the check (w.globals.dataPoints > 1) fixes apexcharts.js #1617
xDivision=w.globals.minXDiff/this.xRatio;barWidth=xDivision*parseInt(this.barOptions.columnWidth,10)/100;}else{barWidth=barWidth*parseInt(w.config.plotOptions.bar.columnWidth,10)/100;}if(String(w.config.plotOptions.bar.columnWidth).indexOf('%')===-1){barWidth=parseInt(w.config.plotOptions.bar.columnWidth,10);}zeroH=w.globals.gridHeight-this.baseLineY[translationsIndex]-(this.isReversed?w.globals.gridHeight:0)+(this.isReversed?this.baseLineY[translationsIndex]*2:0);// initial x position is one third of barWidth
x=w.globals.padHorizontal+(xDivision-barWidth)/2;}return{x:x,y:y,yDivision:yDivision,xDivision:xDivision,barHeight:(_w$globals$seriesGrou=w.globals.seriesGroups)!==null&&_w$globals$seriesGrou!==void 0&&_w$globals$seriesGrou.length?barHeight/w.globals.seriesGroups.length:barHeight,barWidth:(_w$globals$seriesGrou2=w.globals.seriesGroups)!==null&&_w$globals$seriesGrou2!==void 0&&_w$globals$seriesGrou2.length?barWidth/w.globals.seriesGroups.length:barWidth,zeroH:zeroH,zeroW:zeroW};}},{key:"drawStackedBarPaths",value:function drawStackedBarPaths(_ref){var indexes=_ref.indexes,barHeight=_ref.barHeight,strokeWidth=_ref.strokeWidth,zeroW=_ref.zeroW,x=_ref.x,y=_ref.y,groupIndex=_ref.groupIndex,seriesGroup=_ref.seriesGroup,yDivision=_ref.yDivision,elSeries=_ref.elSeries;var w=this.w;var barYPosition=y+(groupIndex!==-1?groupIndex*barHeight:0);var barXPosition;var i=indexes.i;var j=indexes.j;var translationsIndex=indexes.translationsIndex;var prevBarW=0;for(var k=0;k<this.groupCtx.prevXF.length;k++){prevBarW=prevBarW+this.groupCtx.prevXF[k][j];}var gsi=i;// an index to keep track of the series inside a group
if(seriesGroup){gsi=seriesGroup.indexOf(w.config.series[i].name);}if(gsi>0){var bXP=zeroW;if(this.groupCtx.prevXVal[gsi-1][j]<0){bXP=this.series[i][j]>=0?this.groupCtx.prevX[gsi-1][j]+prevBarW-(this.isReversed?prevBarW:0)*2:this.groupCtx.prevX[gsi-1][j];}else if(this.groupCtx.prevXVal[gsi-1][j]>=0){bXP=this.series[i][j]>=0?this.groupCtx.prevX[gsi-1][j]:this.groupCtx.prevX[gsi-1][j]-prevBarW+(this.isReversed?prevBarW:0)*2;}barXPosition=bXP;}else{// the first series will not have prevX values
barXPosition=zeroW;}if(this.series[i][j]===null){x=barXPosition;}else{x=barXPosition+this.series[i][j]/this.invertedYRatio-(this.isReversed?this.series[i][j]/this.invertedYRatio:0)*2;}var paths=this.barHelpers.getBarpaths({barYPosition:barYPosition,barHeight:barHeight,x1:barXPosition,x2:x,strokeWidth:strokeWidth,series:this.series,realIndex:indexes.realIndex,seriesGroup:seriesGroup,i:i,j:j,w:w});this.barHelpers.barBackground({j:j,i:i,y1:barYPosition,y2:barHeight,elSeries:elSeries});y=y+yDivision;return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,goalX:this.barHelpers.getGoalValues('x',zeroW,null,i,j,translationsIndex),barYPosition:barYPosition,x:x,y:y};}},{key:"drawStackedColumnPaths",value:function drawStackedColumnPaths(_ref2){var indexes=_ref2.indexes,x=_ref2.x,y=_ref2.y,xDivision=_ref2.xDivision,barWidth=_ref2.barWidth,zeroH=_ref2.zeroH,groupIndex=_ref2.groupIndex,seriesGroup=_ref2.seriesGroup,elSeries=_ref2.elSeries;var w=this.w;var i=indexes.i;var j=indexes.j;var bc=indexes.bc;var translationsIndex=indexes.translationsIndex;if(w.globals.isXNumeric){var seriesVal=w.globals.seriesX[i][j];if(!seriesVal)seriesVal=0;x=(seriesVal-w.globals.minX)/this.xRatio-barWidth/2;if(w.globals.seriesGroups.length){x=(seriesVal-w.globals.minX)/this.xRatio-barWidth/2*w.globals.seriesGroups.length;}}var barXPosition=x+(groupIndex!==-1?groupIndex*barWidth:0);var barYPosition;var prevBarH=0;for(var k=0;k<this.groupCtx.prevYF.length;k++){// fix issue #1215
// in case where this.groupCtx.prevYF[k][j] is NaN, use 0 instead
prevBarH=prevBarH+(!isNaN(this.groupCtx.prevYF[k][j])?this.groupCtx.prevYF[k][j]:0);}var gsi=i;// an index to keep track of the series inside a group
if(seriesGroup){gsi=seriesGroup.indexOf(w.config.series[i].name);}if(gsi>0&&!w.globals.isXNumeric||gsi>0&&w.globals.isXNumeric&&w.globals.seriesX[i-1][j]===w.globals.seriesX[i][j]){var _this$groupCtx$prevYF;var bYP;var prevYValue;var p=Math.min(this.yRatio.length+1,i+1);if(this.groupCtx.prevY[gsi-1]!==undefined&&this.groupCtx.prevY[gsi-1].length){for(var ii=1;ii<p;ii++){var _this$groupCtx$prevY;if(!isNaN((_this$groupCtx$prevY=this.groupCtx.prevY[gsi-ii])===null||_this$groupCtx$prevY===void 0?void 0:_this$groupCtx$prevY[j])){// find the previous available value to give prevYValue
prevYValue=this.groupCtx.prevY[gsi-ii][j];// if found it, break the loop
break;}}}for(var _ii=1;_ii<p;_ii++){var _this$groupCtx$prevYV,_this$groupCtx$prevYV2;// find the previous available value(non-NaN) to give bYP
if(((_this$groupCtx$prevYV=this.groupCtx.prevYVal[gsi-_ii])===null||_this$groupCtx$prevYV===void 0?void 0:_this$groupCtx$prevYV[j])<0){bYP=this.series[i][j]>=0?prevYValue-prevBarH+(this.isReversed?prevBarH:0)*2:prevYValue;// found it? break the loop
break;}else if(((_this$groupCtx$prevYV2=this.groupCtx.prevYVal[gsi-_ii])===null||_this$groupCtx$prevYV2===void 0?void 0:_this$groupCtx$prevYV2[j])>=0){bYP=this.series[i][j]>=0?prevYValue:prevYValue+prevBarH-(this.isReversed?prevBarH:0)*2;// found it? break the loop
break;}}if(typeof bYP==='undefined')bYP=w.globals.gridHeight;// if this.prevYF[0] is all 0 resulted from line #486
// AND every arr starting from the second only contains NaN
if((_this$groupCtx$prevYF=this.groupCtx.prevYF[0])!==null&&_this$groupCtx$prevYF!==void 0&&_this$groupCtx$prevYF.every(function(val){return val===0;})&&this.groupCtx.prevYF.slice(1,gsi).every(function(arr){return arr.every(function(val){return isNaN(val);});})){barYPosition=zeroH;}else{// Nothing special
barYPosition=bYP;}}else{// the first series will not have prevY values, also if the prev index's series X doesn't matches the current index's series X, then start from zero
barYPosition=zeroH;}if(this.series[i][j]){y=barYPosition-this.series[i][j]/this.yRatio[translationsIndex]+(this.isReversed?this.series[i][j]/this.yRatio[translationsIndex]:0)*2;}else{// fixes #3610
y=barYPosition;}var paths=this.barHelpers.getColumnPaths({barXPosition:barXPosition,barWidth:barWidth,y1:barYPosition,y2:y,yRatio:this.yRatio[translationsIndex],strokeWidth:this.strokeWidth,series:this.series,seriesGroup:seriesGroup,realIndex:indexes.realIndex,i:i,j:j,w:w});this.barHelpers.barBackground({bc:bc,j:j,i:i,x1:barXPosition,x2:barWidth,elSeries:elSeries});x=x+xDivision;return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,goalY:this.barHelpers.getGoalValues('y',null,zeroH,i,j),barXPosition:barXPosition,x:w.globals.isXNumeric?x-xDivision:x,y:y};}}]);return BarStacked;}(Bar);/**
   * ApexCharts BoxCandleStick Class responsible for drawing both Stacked Columns and Bars.
   *
   * @module BoxCandleStick
   **/var BoxCandleStick=/*#__PURE__*/function(_Bar){_inherits(BoxCandleStick,_Bar);var _super=_createSuper(BoxCandleStick);function BoxCandleStick(){_classCallCheck(this,BoxCandleStick);return _super.apply(this,arguments);}_createClass(BoxCandleStick,[{key:"draw",value:function draw(series,ctype,seriesIndex){var _this=this;var w=this.w;var graphics=new Graphics(this.ctx);var type=w.globals.comboCharts?ctype:w.config.chart.type;var fill=new Fill(this.ctx);this.candlestickOptions=this.w.config.plotOptions.candlestick;this.boxOptions=this.w.config.plotOptions.boxPlot;this.isHorizontal=w.config.plotOptions.bar.horizontal;var coreUtils=new CoreUtils(this.ctx,w);series=coreUtils.getLogSeries(series);this.series=series;this.yRatio=coreUtils.getLogYRatios(this.yRatio);this.barHelpers.initVariables(series);var ret=graphics.group({class:"apexcharts-".concat(type,"-series apexcharts-plot-series")});var _loop=function _loop(i){_this.isBoxPlot=w.config.chart.type==='boxPlot'||w.config.series[i].type==='boxPlot';var x=void 0,y=void 0,xDivision=void 0,// xDivision is the GRIDWIDTH divided by number of datapoints (columns)
yDivision=void 0,// yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
zeroH=void 0,// zeroH is the baseline where 0 meets y axis
zeroW=void 0;// zeroW is the baseline where 0 meets x axis
var yArrj=[];// hold y values of current iterating series
var xArrj=[];// hold x values of current iterating series
var realIndex=w.globals.comboCharts?seriesIndex[i]:i;// el to which series will be drawn
var elSeries=graphics.group({class:"apexcharts-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[realIndex]),rel:i+1,'data:realIndex':realIndex});_this.ctx.series.addCollapsedClassToSeries(elSeries,realIndex);if(series[i].length>0){_this.visibleI=_this.visibleI+1;}var barHeight=0;var barWidth=0;var translationsIndex=0;if(_this.yRatio.length>1){_this.yaxisIndex=w.globals.seriesYAxisReverseMap[realIndex][0];translationsIndex=realIndex;}var initPositions=_this.barHelpers.initialPositions();y=initPositions.y;barHeight=initPositions.barHeight;yDivision=initPositions.yDivision;zeroW=initPositions.zeroW;x=initPositions.x;barWidth=initPositions.barWidth;xDivision=initPositions.xDivision;zeroH=initPositions.zeroH;xArrj.push(x+barWidth/2);// eldatalabels
var elDataLabelsWrap=graphics.group({class:'apexcharts-datalabels','data:realIndex':realIndex});var _loop2=function _loop2(j){var strokeWidth=_this.barHelpers.getStrokeWidth(i,j,realIndex);var paths=null;var pathsParams={indexes:{i:i,j:j,realIndex:realIndex,translationsIndex:translationsIndex},x:x,y:y,strokeWidth:strokeWidth,elSeries:elSeries};if(_this.isHorizontal){paths=_this.drawHorizontalBoxPaths(_objectSpread2(_objectSpread2({},pathsParams),{},{yDivision:yDivision,barHeight:barHeight,zeroW:zeroW}));}else{paths=_this.drawVerticalBoxPaths(_objectSpread2(_objectSpread2({},pathsParams),{},{xDivision:xDivision,barWidth:barWidth,zeroH:zeroH}));}y=paths.y;x=paths.x;// push current X
if(j>0){xArrj.push(x+barWidth/2);}yArrj.push(y);paths.pathTo.forEach(function(pathTo,pi){var lineFill=!_this.isBoxPlot&&_this.candlestickOptions.wick.useFillColor?paths.color[pi]:w.globals.stroke.colors[i];var pathFill=fill.fillPath({seriesNumber:realIndex,dataPointIndex:j,color:paths.color[pi],value:series[i][j]});_this.renderSeries({realIndex:realIndex,pathFill:pathFill,lineFill:lineFill,j:j,i:i,pathFrom:paths.pathFrom,pathTo:pathTo,strokeWidth:strokeWidth,elSeries:elSeries,x:x,y:y,series:series,barHeight:barHeight,barWidth:barWidth,elDataLabelsWrap:elDataLabelsWrap,visibleSeries:_this.visibleI,type:w.config.chart.type});});};for(var j=0;j<w.globals.dataPoints;j++){_loop2(j);}// push all x val arrays into main xArr
w.globals.seriesXvalues[realIndex]=xArrj;w.globals.seriesYvalues[realIndex]=yArrj;ret.add(elSeries);};for(var i=0;i<series.length;i++){_loop(i);}return ret;}},{key:"drawVerticalBoxPaths",value:function drawVerticalBoxPaths(_ref){var indexes=_ref.indexes,x=_ref.x;_ref.y;var xDivision=_ref.xDivision,barWidth=_ref.barWidth,zeroH=_ref.zeroH,strokeWidth=_ref.strokeWidth;var w=this.w;var graphics=new Graphics(this.ctx);var i=indexes.i;var j=indexes.j;var isPositive=true;var colorPos=w.config.plotOptions.candlestick.colors.upward;var colorNeg=w.config.plotOptions.candlestick.colors.downward;var color='';if(this.isBoxPlot){color=[this.boxOptions.colors.lower,this.boxOptions.colors.upper];}var yRatio=this.yRatio[indexes.translationsIndex];var realIndex=indexes.realIndex;var ohlc=this.getOHLCValue(realIndex,j);var l1=zeroH;var l2=zeroH;if(ohlc.o>ohlc.c){isPositive=false;}var y1=Math.min(ohlc.o,ohlc.c);var y2=Math.max(ohlc.o,ohlc.c);var m=ohlc.m;if(w.globals.isXNumeric){x=(w.globals.seriesX[realIndex][j]-w.globals.minX)/this.xRatio-barWidth/2;}var barXPosition=x+barWidth*this.visibleI;if(typeof this.series[i][j]==='undefined'||this.series[i][j]===null){y1=zeroH;y2=zeroH;}else{y1=zeroH-y1/yRatio;y2=zeroH-y2/yRatio;l1=zeroH-ohlc.h/yRatio;l2=zeroH-ohlc.l/yRatio;m=zeroH-ohlc.m/yRatio;}var pathTo=graphics.move(barXPosition,zeroH);var pathFrom=graphics.move(barXPosition+barWidth/2,y1);if(w.globals.previousPaths.length>0){pathFrom=this.getPreviousPath(realIndex,j,true);}if(this.isBoxPlot){pathTo=[graphics.move(barXPosition,y1)+graphics.line(barXPosition+barWidth/2,y1)+graphics.line(barXPosition+barWidth/2,l1)+graphics.line(barXPosition+barWidth/4,l1)+graphics.line(barXPosition+barWidth-barWidth/4,l1)+graphics.line(barXPosition+barWidth/2,l1)+graphics.line(barXPosition+barWidth/2,y1)+graphics.line(barXPosition+barWidth,y1)+graphics.line(barXPosition+barWidth,m)+graphics.line(barXPosition,m)+graphics.line(barXPosition,y1+strokeWidth/2),graphics.move(barXPosition,m)+graphics.line(barXPosition+barWidth,m)+graphics.line(barXPosition+barWidth,y2)+graphics.line(barXPosition+barWidth/2,y2)+graphics.line(barXPosition+barWidth/2,l2)+graphics.line(barXPosition+barWidth-barWidth/4,l2)+graphics.line(barXPosition+barWidth/4,l2)+graphics.line(barXPosition+barWidth/2,l2)+graphics.line(barXPosition+barWidth/2,y2)+graphics.line(barXPosition,y2)+graphics.line(barXPosition,m)+'z'];}else{// candlestick
pathTo=[graphics.move(barXPosition,y2)+graphics.line(barXPosition+barWidth/2,y2)+graphics.line(barXPosition+barWidth/2,l1)+graphics.line(barXPosition+barWidth/2,y2)+graphics.line(barXPosition+barWidth,y2)+graphics.line(barXPosition+barWidth,y1)+graphics.line(barXPosition+barWidth/2,y1)+graphics.line(barXPosition+barWidth/2,l2)+graphics.line(barXPosition+barWidth/2,y1)+graphics.line(barXPosition,y1)+graphics.line(barXPosition,y2-strokeWidth/2)];}pathFrom=pathFrom+graphics.move(barXPosition,y1);if(!w.globals.isXNumeric){x=x+xDivision;}return{pathTo:pathTo,pathFrom:pathFrom,x:x,y:y2,barXPosition:barXPosition,color:this.isBoxPlot?color:isPositive?[colorPos]:[colorNeg]};}},{key:"drawHorizontalBoxPaths",value:function drawHorizontalBoxPaths(_ref2){var indexes=_ref2.indexes;_ref2.x;var y=_ref2.y,yDivision=_ref2.yDivision,barHeight=_ref2.barHeight,zeroW=_ref2.zeroW,strokeWidth=_ref2.strokeWidth;var w=this.w;var graphics=new Graphics(this.ctx);var i=indexes.i;var j=indexes.j;var color=this.boxOptions.colors.lower;if(this.isBoxPlot){color=[this.boxOptions.colors.lower,this.boxOptions.colors.upper];}var yRatio=this.invertedYRatio;var realIndex=indexes.realIndex;var ohlc=this.getOHLCValue(realIndex,j);var l1=zeroW;var l2=zeroW;var x1=Math.min(ohlc.o,ohlc.c);var x2=Math.max(ohlc.o,ohlc.c);var m=ohlc.m;if(w.globals.isXNumeric){y=(w.globals.seriesX[realIndex][j]-w.globals.minX)/this.invertedXRatio-barHeight/2;}var barYPosition=y+barHeight*this.visibleI;if(typeof this.series[i][j]==='undefined'||this.series[i][j]===null){x1=zeroW;x2=zeroW;}else{x1=zeroW+x1/yRatio;x2=zeroW+x2/yRatio;l1=zeroW+ohlc.h/yRatio;l2=zeroW+ohlc.l/yRatio;m=zeroW+ohlc.m/yRatio;}var pathTo=graphics.move(zeroW,barYPosition);var pathFrom=graphics.move(x1,barYPosition+barHeight/2);if(w.globals.previousPaths.length>0){pathFrom=this.getPreviousPath(realIndex,j,true);}pathTo=[graphics.move(x1,barYPosition)+graphics.line(x1,barYPosition+barHeight/2)+graphics.line(l1,barYPosition+barHeight/2)+graphics.line(l1,barYPosition+barHeight/2-barHeight/4)+graphics.line(l1,barYPosition+barHeight/2+barHeight/4)+graphics.line(l1,barYPosition+barHeight/2)+graphics.line(x1,barYPosition+barHeight/2)+graphics.line(x1,barYPosition+barHeight)+graphics.line(m,barYPosition+barHeight)+graphics.line(m,barYPosition)+graphics.line(x1+strokeWidth/2,barYPosition),graphics.move(m,barYPosition)+graphics.line(m,barYPosition+barHeight)+graphics.line(x2,barYPosition+barHeight)+graphics.line(x2,barYPosition+barHeight/2)+graphics.line(l2,barYPosition+barHeight/2)+graphics.line(l2,barYPosition+barHeight-barHeight/4)+graphics.line(l2,barYPosition+barHeight/4)+graphics.line(l2,barYPosition+barHeight/2)+graphics.line(x2,barYPosition+barHeight/2)+graphics.line(x2,barYPosition)+graphics.line(m,barYPosition)+'z'];pathFrom=pathFrom+graphics.move(x1,barYPosition);if(!w.globals.isXNumeric){y=y+yDivision;}return{pathTo:pathTo,pathFrom:pathFrom,x:x2,y:y,barYPosition:barYPosition,color:color};}},{key:"getOHLCValue",value:function getOHLCValue(i,j){var w=this.w;return{o:this.isBoxPlot?w.globals.seriesCandleH[i][j]:w.globals.seriesCandleO[i][j],h:this.isBoxPlot?w.globals.seriesCandleO[i][j]:w.globals.seriesCandleH[i][j],m:w.globals.seriesCandleM[i][j],l:this.isBoxPlot?w.globals.seriesCandleC[i][j]:w.globals.seriesCandleL[i][j],c:this.isBoxPlot?w.globals.seriesCandleL[i][j]:w.globals.seriesCandleC[i][j]};}}]);return BoxCandleStick;}(Bar);var TreemapHelpers=/*#__PURE__*/function(){function TreemapHelpers(ctx){_classCallCheck(this,TreemapHelpers);this.ctx=ctx;this.w=ctx.w;}_createClass(TreemapHelpers,[{key:"checkColorRange",value:function checkColorRange(){var w=this.w;var negRange=false;var chartOpts=w.config.plotOptions[w.config.chart.type];if(chartOpts.colorScale.ranges.length>0){chartOpts.colorScale.ranges.map(function(range,index){if(range.from<=0){negRange=true;}});}return negRange;}},{key:"getShadeColor",value:function getShadeColor(chartType,i,j,negRange){var w=this.w;var colorShadePercent=1;var shadeIntensity=w.config.plotOptions[chartType].shadeIntensity;var colorProps=this.determineColor(chartType,i,j);if(w.globals.hasNegs||negRange){if(w.config.plotOptions[chartType].reverseNegativeShade){if(colorProps.percent<0){colorShadePercent=colorProps.percent/100*(shadeIntensity*1.25);}else{colorShadePercent=(1-colorProps.percent/100)*(shadeIntensity*1.25);}}else{if(colorProps.percent<=0){colorShadePercent=1-(1+colorProps.percent/100)*shadeIntensity;}else{colorShadePercent=(1-colorProps.percent/100)*shadeIntensity;}}}else{colorShadePercent=1-colorProps.percent/100;if(chartType==='treemap'){colorShadePercent=(1-colorProps.percent/100)*(shadeIntensity*1.25);}}var color=colorProps.color;var utils=new Utils$1();if(w.config.plotOptions[chartType].enableShades){if(this.w.config.theme.mode==='dark'){color=Utils$1.hexToRgba(utils.shadeColor(colorShadePercent*-1,colorProps.color),w.config.fill.opacity);}else{color=Utils$1.hexToRgba(utils.shadeColor(colorShadePercent,colorProps.color),w.config.fill.opacity);}}return{color:color,colorProps:colorProps};}},{key:"determineColor",value:function determineColor(chartType,i,j){var w=this.w;var val=w.globals.series[i][j];var chartOpts=w.config.plotOptions[chartType];var seriesNumber=chartOpts.colorScale.inverse?j:i;if(chartOpts.distributed&&w.config.chart.type==='treemap'){seriesNumber=j;}var color=w.globals.colors[seriesNumber];var foreColor=null;var min=Math.min.apply(Math,_toConsumableArray(w.globals.series[i]));var max=Math.max.apply(Math,_toConsumableArray(w.globals.series[i]));if(!chartOpts.distributed&&chartType==='heatmap'){min=w.globals.minY;max=w.globals.maxY;}if(typeof chartOpts.colorScale.min!=='undefined'){min=chartOpts.colorScale.min<w.globals.minY?chartOpts.colorScale.min:w.globals.minY;max=chartOpts.colorScale.max>w.globals.maxY?chartOpts.colorScale.max:w.globals.maxY;}var total=Math.abs(max)+Math.abs(min);var percent=100*val/(total===0?total-0.000001:total);if(chartOpts.colorScale.ranges.length>0){var colorRange=chartOpts.colorScale.ranges;colorRange.map(function(range,index){if(val>=range.from&&val<=range.to){color=range.color;foreColor=range.foreColor?range.foreColor:null;min=range.from;max=range.to;var rTotal=Math.abs(max)+Math.abs(min);percent=100*val/(rTotal===0?rTotal-0.000001:rTotal);}});}return{color:color,foreColor:foreColor,percent:percent};}},{key:"calculateDataLabels",value:function calculateDataLabels(_ref){var text=_ref.text,x=_ref.x,y=_ref.y,i=_ref.i,j=_ref.j,colorProps=_ref.colorProps,fontSize=_ref.fontSize;var w=this.w;var dataLabelsConfig=w.config.dataLabels;var graphics=new Graphics(this.ctx);var dataLabels=new DataLabels(this.ctx);var elDataLabelsWrap=null;if(dataLabelsConfig.enabled){elDataLabelsWrap=graphics.group({class:'apexcharts-data-labels'});var offX=dataLabelsConfig.offsetX;var offY=dataLabelsConfig.offsetY;var dataLabelsX=x+offX;var dataLabelsY=y+parseFloat(dataLabelsConfig.style.fontSize)/3+offY;dataLabels.plotDataLabelsText({x:dataLabelsX,y:dataLabelsY,text:text,i:i,j:j,color:colorProps.foreColor,parent:elDataLabelsWrap,fontSize:fontSize,dataLabelsConfig:dataLabelsConfig});}return elDataLabelsWrap;}},{key:"addListeners",value:function addListeners(elRect){var graphics=new Graphics(this.ctx);elRect.node.addEventListener('mouseenter',graphics.pathMouseEnter.bind(this,elRect));elRect.node.addEventListener('mouseleave',graphics.pathMouseLeave.bind(this,elRect));elRect.node.addEventListener('mousedown',graphics.pathMouseDown.bind(this,elRect));}}]);return TreemapHelpers;}();/**
   * ApexCharts HeatMap Class.
   * @module HeatMap
   **/var HeatMap=/*#__PURE__*/function(){function HeatMap(ctx,xyRatios){_classCallCheck(this,HeatMap);this.ctx=ctx;this.w=ctx.w;this.xRatio=xyRatios.xRatio;this.yRatio=xyRatios.yRatio;this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation;this.helpers=new TreemapHelpers(ctx);this.rectRadius=this.w.config.plotOptions.heatmap.radius;this.strokeWidth=this.w.config.stroke.show?this.w.config.stroke.width:0;}_createClass(HeatMap,[{key:"draw",value:function draw(series){var w=this.w;var graphics=new Graphics(this.ctx);var ret=graphics.group({class:'apexcharts-heatmap'});ret.attr('clip-path',"url(#gridRectMask".concat(w.globals.cuid,")"));// width divided into equal parts
var xDivision=w.globals.gridWidth/w.globals.dataPoints;var yDivision=w.globals.gridHeight/w.globals.series.length;var y1=0;var rev=false;this.negRange=this.helpers.checkColorRange();var heatSeries=series.slice();if(w.config.yaxis[0].reversed){rev=true;heatSeries.reverse();}for(var i=rev?0:heatSeries.length-1;rev?i<heatSeries.length:i>=0;rev?i++:i--){// el to which series will be drawn
var elSeries=graphics.group({class:"apexcharts-series apexcharts-heatmap-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[i]),rel:i+1,'data:realIndex':i});this.ctx.series.addCollapsedClassToSeries(elSeries,i);if(w.config.chart.dropShadow.enabled){var shadow=w.config.chart.dropShadow;var filters=new Filters(this.ctx);filters.dropShadow(elSeries,shadow,i);}var x1=0;var shadeIntensity=w.config.plotOptions.heatmap.shadeIntensity;for(var j=0;j<heatSeries[i].length;j++){var heatColor=this.helpers.getShadeColor(w.config.chart.type,i,j,this.negRange);var color=heatColor.color;var heatColorProps=heatColor.colorProps;if(w.config.fill.type==='image'){var fill=new Fill(this.ctx);color=fill.fillPath({seriesNumber:i,dataPointIndex:j,opacity:w.globals.hasNegs?heatColorProps.percent<0?1-(1+heatColorProps.percent/100):shadeIntensity+heatColorProps.percent/100:heatColorProps.percent/100,patternID:Utils$1.randomId(),width:w.config.fill.image.width?w.config.fill.image.width:xDivision,height:w.config.fill.image.height?w.config.fill.image.height:yDivision});}var radius=this.rectRadius;var rect=graphics.drawRect(x1,y1,xDivision,yDivision,radius);rect.attr({cx:x1,cy:y1});rect.node.classList.add('apexcharts-heatmap-rect');elSeries.add(rect);rect.attr({fill:color,i:i,index:i,j:j,val:series[i][j],'stroke-width':this.strokeWidth,stroke:w.config.plotOptions.heatmap.useFillColorAsStroke?color:w.globals.stroke.colors[0],color:color});this.helpers.addListeners(rect);if(w.config.chart.animations.enabled&&!w.globals.dataChanged){var speed=1;if(!w.globals.resized){speed=w.config.chart.animations.speed;}this.animateHeatMap(rect,x1,y1,xDivision,yDivision,speed);}if(w.globals.dataChanged){var _speed=1;if(this.dynamicAnim.enabled&&w.globals.shouldAnimate){_speed=this.dynamicAnim.speed;var colorFrom=w.globals.previousPaths[i]&&w.globals.previousPaths[i][j]&&w.globals.previousPaths[i][j].color;if(!colorFrom)colorFrom='rgba(255, 255, 255, 0)';this.animateHeatColor(rect,Utils$1.isColorHex(colorFrom)?colorFrom:Utils$1.rgb2hex(colorFrom),Utils$1.isColorHex(color)?color:Utils$1.rgb2hex(color),_speed);}}var formatter=w.config.dataLabels.formatter;var formattedText=formatter(w.globals.series[i][j],{value:w.globals.series[i][j],seriesIndex:i,dataPointIndex:j,w:w});var dataLabels=this.helpers.calculateDataLabels({text:formattedText,x:x1+xDivision/2,y:y1+yDivision/2,i:i,j:j,colorProps:heatColorProps,series:heatSeries});if(dataLabels!==null){elSeries.add(dataLabels);}x1=x1+xDivision;}y1=y1+yDivision;ret.add(elSeries);}// adjust yaxis labels for heatmap
var yAxisScale=w.globals.yAxisScale[0].result.slice();if(w.config.yaxis[0].reversed){yAxisScale.unshift('');}else{yAxisScale.push('');}w.globals.yAxisScale[0].result=yAxisScale;return ret;}},{key:"animateHeatMap",value:function animateHeatMap(el,x,y,width,height,speed){var animations=new Animations(this.ctx);animations.animateRect(el,{x:x+width/2,y:y+height/2,width:0,height:0},{x:x,y:y,width:width,height:height},speed,function(){animations.animationCompleted(el);});}},{key:"animateHeatColor",value:function animateHeatColor(el,colorFrom,colorTo,speed){el.attr({fill:colorFrom}).animate(speed).attr({fill:colorTo});}}]);return HeatMap;}();var CircularChartsHelpers=/*#__PURE__*/function(){function CircularChartsHelpers(ctx){_classCallCheck(this,CircularChartsHelpers);this.ctx=ctx;this.w=ctx.w;}_createClass(CircularChartsHelpers,[{key:"drawYAxisTexts",value:function drawYAxisTexts(x,y,i,text){var w=this.w;var yaxisConfig=w.config.yaxis[0];var formatter=w.globals.yLabelFormatters[0];var graphics=new Graphics(this.ctx);var yaxisLabel=graphics.drawText({x:x+yaxisConfig.labels.offsetX,y:y+yaxisConfig.labels.offsetY,text:formatter(text,i),textAnchor:'middle',fontSize:yaxisConfig.labels.style.fontSize,fontFamily:yaxisConfig.labels.style.fontFamily,foreColor:Array.isArray(yaxisConfig.labels.style.colors)?yaxisConfig.labels.style.colors[i]:yaxisConfig.labels.style.colors});return yaxisLabel;}}]);return CircularChartsHelpers;}();/**
   * ApexCharts Pie Class for drawing Pie / Donut Charts.
   * @module Pie
   **/var Pie=/*#__PURE__*/function(){function Pie(ctx){_classCallCheck(this,Pie);this.ctx=ctx;this.w=ctx.w;var w=this.w;this.chartType=this.w.config.chart.type;this.initialAnim=this.w.config.chart.animations.enabled;this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled;this.animBeginArr=[0];this.animDur=0;this.donutDataLabels=this.w.config.plotOptions.pie.donut.labels;this.lineColorArr=w.globals.stroke.colors!==undefined?w.globals.stroke.colors:w.globals.colors;this.defaultSize=Math.min(w.globals.gridWidth,w.globals.gridHeight);this.centerY=this.defaultSize/2;this.centerX=w.globals.gridWidth/2;if(w.config.chart.type==='radialBar'){this.fullAngle=360;}else{this.fullAngle=Math.abs(w.config.plotOptions.pie.endAngle-w.config.plotOptions.pie.startAngle);}this.initialAngle=w.config.plotOptions.pie.startAngle%this.fullAngle;w.globals.radialSize=this.defaultSize/2.05-w.config.stroke.width-(!w.config.chart.sparkline.enabled?w.config.chart.dropShadow.blur:0);this.donutSize=w.globals.radialSize*parseInt(w.config.plotOptions.pie.donut.size,10)/100;this.maxY=0;this.sliceLabels=[];this.sliceSizes=[];this.prevSectorAngleArr=[];// for dynamic animations
}_createClass(Pie,[{key:"draw",value:function draw(series){var _this=this;var self=this;var w=this.w;var graphics=new Graphics(this.ctx);this.ret=graphics.group({class:'apexcharts-pie'});if(w.globals.noData)return this.ret;var total=0;for(var k=0;k<series.length;k++){// CALCULATE THE TOTAL
total+=Utils$1.negToZero(series[k]);}var sectorAngleArr=[];// el to which series will be drawn
var elSeries=graphics.group();// prevent division by zero error if there is no data
if(total===0){total=0.00001;}series.forEach(function(m){_this.maxY=Math.max(_this.maxY,m);});// override maxY if user provided in config
if(w.config.yaxis[0].max){this.maxY=w.config.yaxis[0].max;}if(w.config.grid.position==='back'&&this.chartType==='polarArea'){this.drawPolarElements(this.ret);}for(var i=0;i<series.length;i++){// CALCULATE THE ANGLES
var angle=this.fullAngle*Utils$1.negToZero(series[i])/total;sectorAngleArr.push(angle);if(this.chartType==='polarArea'){sectorAngleArr[i]=this.fullAngle/series.length;this.sliceSizes.push(w.globals.radialSize*series[i]/this.maxY);}else{this.sliceSizes.push(w.globals.radialSize);}}if(w.globals.dataChanged){var prevTotal=0;for(var _k=0;_k<w.globals.previousPaths.length;_k++){// CALCULATE THE PREV TOTAL
prevTotal+=Utils$1.negToZero(w.globals.previousPaths[_k]);}var previousAngle;for(var _i=0;_i<w.globals.previousPaths.length;_i++){// CALCULATE THE PREVIOUS ANGLES
previousAngle=this.fullAngle*Utils$1.negToZero(w.globals.previousPaths[_i])/prevTotal;this.prevSectorAngleArr.push(previousAngle);}}// on small chart size after few count of resizes browser window donutSize can be negative
if(this.donutSize<0){this.donutSize=0;}var scaleSize=w.config.plotOptions.pie.customScale;var halfW=w.globals.gridWidth/2;var halfH=w.globals.gridHeight/2;var translateX=halfW-w.globals.gridWidth/2*scaleSize;var translateY=halfH-w.globals.gridHeight/2*scaleSize;if(this.chartType==='donut'){// draw the inner circle and add some text to it
var circle=graphics.drawCircle(this.donutSize);circle.attr({cx:this.centerX,cy:this.centerY,fill:w.config.plotOptions.pie.donut.background?w.config.plotOptions.pie.donut.background:'transparent'});elSeries.add(circle);}var elG=self.drawArcs(sectorAngleArr,series);// add slice dataLabels at the end
this.sliceLabels.forEach(function(s){elG.add(s);});elSeries.attr({transform:"translate(".concat(translateX,", ").concat(translateY,") scale(").concat(scaleSize,")")});elSeries.add(elG);this.ret.add(elSeries);if(this.donutDataLabels.show){var dataLabels=this.renderInnerDataLabels(this.donutDataLabels,{hollowSize:this.donutSize,centerX:this.centerX,centerY:this.centerY,opacity:this.donutDataLabels.show,translateX:translateX,translateY:translateY});this.ret.add(dataLabels);}if(w.config.grid.position==='front'&&this.chartType==='polarArea'){this.drawPolarElements(this.ret);}return this.ret;}// core function for drawing pie arcs
},{key:"drawArcs",value:function drawArcs(sectorAngleArr,series){var w=this.w;var filters=new Filters(this.ctx);var graphics=new Graphics(this.ctx);var fill=new Fill(this.ctx);var g=graphics.group({class:'apexcharts-slices'});var startAngle=this.initialAngle;var prevStartAngle=this.initialAngle;var endAngle=this.initialAngle;var prevEndAngle=this.initialAngle;this.strokeWidth=w.config.stroke.show?w.config.stroke.width:0;for(var i=0;i<sectorAngleArr.length;i++){var elPieArc=graphics.group({class:"apexcharts-series apexcharts-pie-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[i]),rel:i+1,'data:realIndex':i});g.add(elPieArc);startAngle=endAngle;prevStartAngle=prevEndAngle;endAngle=startAngle+sectorAngleArr[i];prevEndAngle=prevStartAngle+this.prevSectorAngleArr[i];var angle=endAngle<startAngle?this.fullAngle+endAngle-startAngle:endAngle-startAngle;var pathFill=fill.fillPath({seriesNumber:i,size:this.sliceSizes[i],value:series[i]});// additionally, pass size for gradient drawing in the fillPath function
var path=this.getChangedPath(prevStartAngle,prevEndAngle);var elPath=graphics.drawPath({d:path,stroke:Array.isArray(this.lineColorArr)?this.lineColorArr[i]:this.lineColorArr,strokeWidth:0,fill:pathFill,fillOpacity:w.config.fill.opacity,classes:"apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(i)});elPath.attr({index:0,j:i});filters.setSelectionFilter(elPath,0,i);if(w.config.chart.dropShadow.enabled){var shadow=w.config.chart.dropShadow;filters.dropShadow(elPath,shadow,i);}this.addListeners(elPath,this.donutDataLabels);Graphics.setAttrs(elPath.node,{'data:angle':angle,'data:startAngle':startAngle,'data:strokeWidth':this.strokeWidth,'data:value':series[i]});var labelPosition={x:0,y:0};if(this.chartType==='pie'||this.chartType==='polarArea'){labelPosition=Utils$1.polarToCartesian(this.centerX,this.centerY,w.globals.radialSize/1.25+w.config.plotOptions.pie.dataLabels.offset,(startAngle+angle/2)%this.fullAngle);}else if(this.chartType==='donut'){labelPosition=Utils$1.polarToCartesian(this.centerX,this.centerY,(w.globals.radialSize+this.donutSize)/2+w.config.plotOptions.pie.dataLabels.offset,(startAngle+angle/2)%this.fullAngle);}elPieArc.add(elPath);// Animation code starts
var dur=0;if(this.initialAnim&&!w.globals.resized&&!w.globals.dataChanged){dur=angle/this.fullAngle*w.config.chart.animations.speed;if(dur===0)dur=1;this.animDur=dur+this.animDur;this.animBeginArr.push(this.animDur);}else{this.animBeginArr.push(0);}if(this.dynamicAnim&&w.globals.dataChanged){this.animatePaths(elPath,{size:this.sliceSizes[i],endAngle:endAngle,startAngle:startAngle,prevStartAngle:prevStartAngle,prevEndAngle:prevEndAngle,animateStartingPos:true,i:i,animBeginArr:this.animBeginArr,shouldSetPrevPaths:true,dur:w.config.chart.animations.dynamicAnimation.speed});}else{this.animatePaths(elPath,{size:this.sliceSizes[i],endAngle:endAngle,startAngle:startAngle,i:i,totalItems:sectorAngleArr.length-1,animBeginArr:this.animBeginArr,dur:dur});}// animation code ends
if(w.config.plotOptions.pie.expandOnClick&&this.chartType!=='polarArea'){elPath.click(this.pieClicked.bind(this,i));}if(typeof w.globals.selectedDataPoints[0]!=='undefined'&&w.globals.selectedDataPoints[0].indexOf(i)>-1){this.pieClicked(i);}if(w.config.dataLabels.enabled){var xPos=labelPosition.x;var yPos=labelPosition.y;var text=100*angle/this.fullAngle+'%';if(angle!==0&&w.config.plotOptions.pie.dataLabels.minAngleToShowLabel<sectorAngleArr[i]){var formatter=w.config.dataLabels.formatter;if(formatter!==undefined){text=formatter(w.globals.seriesPercent[i][0],{seriesIndex:i,w:w});}var foreColor=w.globals.dataLabels.style.colors[i];var elPieLabelWrap=graphics.group({class:"apexcharts-datalabels"});var elPieLabel=graphics.drawText({x:xPos,y:yPos,text:text,textAnchor:'middle',fontSize:w.config.dataLabels.style.fontSize,fontFamily:w.config.dataLabels.style.fontFamily,fontWeight:w.config.dataLabels.style.fontWeight,foreColor:foreColor});elPieLabelWrap.add(elPieLabel);if(w.config.dataLabels.dropShadow.enabled){var textShadow=w.config.dataLabels.dropShadow;filters.dropShadow(elPieLabel,textShadow);}elPieLabel.node.classList.add('apexcharts-pie-label');if(w.config.chart.animations.animate&&w.globals.resized===false){elPieLabel.node.classList.add('apexcharts-pie-label-delay');elPieLabel.node.style.animationDelay=w.config.chart.animations.speed/940+'s';}this.sliceLabels.push(elPieLabelWrap);}}}return g;}},{key:"addListeners",value:function addListeners(elPath,dataLabels){var graphics=new Graphics(this.ctx);// append filters on mouseenter and mouseleave
elPath.node.addEventListener('mouseenter',graphics.pathMouseEnter.bind(this,elPath));elPath.node.addEventListener('mouseleave',graphics.pathMouseLeave.bind(this,elPath));elPath.node.addEventListener('mouseleave',this.revertDataLabelsInner.bind(this,elPath.node,dataLabels));elPath.node.addEventListener('mousedown',graphics.pathMouseDown.bind(this,elPath));if(!this.donutDataLabels.total.showAlways){elPath.node.addEventListener('mouseenter',this.printDataLabelsInner.bind(this,elPath.node,dataLabels));elPath.node.addEventListener('mousedown',this.printDataLabelsInner.bind(this,elPath.node,dataLabels));}}// This function can be used for other circle charts too
},{key:"animatePaths",value:function animatePaths(el,opts){var w=this.w;var me=this;var angle=opts.endAngle<opts.startAngle?this.fullAngle+opts.endAngle-opts.startAngle:opts.endAngle-opts.startAngle;var prevAngle=angle;var fromStartAngle=opts.startAngle;var toStartAngle=opts.startAngle;if(opts.prevStartAngle!==undefined&&opts.prevEndAngle!==undefined){fromStartAngle=opts.prevEndAngle;prevAngle=opts.prevEndAngle<opts.prevStartAngle?this.fullAngle+opts.prevEndAngle-opts.prevStartAngle:opts.prevEndAngle-opts.prevStartAngle;}if(opts.i===w.config.series.length-1){// some adjustments for the last overlapping paths
if(angle+toStartAngle>this.fullAngle){opts.endAngle=opts.endAngle-(angle+toStartAngle);}else if(angle+toStartAngle<this.fullAngle){opts.endAngle=opts.endAngle+(this.fullAngle-(angle+toStartAngle));}}if(angle===this.fullAngle)angle=this.fullAngle-0.01;me.animateArc(el,fromStartAngle,toStartAngle,angle,prevAngle,opts);}},{key:"animateArc",value:function animateArc(el,fromStartAngle,toStartAngle,angle,prevAngle,opts){var me=this;var w=this.w;var animations=new Animations(this.ctx);var size=opts.size;var path;if(isNaN(fromStartAngle)||isNaN(prevAngle)){fromStartAngle=toStartAngle;prevAngle=angle;opts.dur=0;}var currAngle=angle;var startAngle=toStartAngle;var fromAngle=fromStartAngle<toStartAngle?this.fullAngle+fromStartAngle-toStartAngle:fromStartAngle-toStartAngle;if(w.globals.dataChanged&&opts.shouldSetPrevPaths){// to avoid flicker when updating, set prev path first and then animate from there
if(opts.prevEndAngle){path=me.getPiePath({me:me,startAngle:opts.prevStartAngle,angle:opts.prevEndAngle<opts.prevStartAngle?this.fullAngle+opts.prevEndAngle-opts.prevStartAngle:opts.prevEndAngle-opts.prevStartAngle,size:size});el.attr({d:path});}}if(opts.dur!==0){el.animate(opts.dur,w.globals.easing,opts.animBeginArr[opts.i]).afterAll(function(){if(me.chartType==='pie'||me.chartType==='donut'||me.chartType==='polarArea'){this.animate(w.config.chart.animations.dynamicAnimation.speed).attr({'stroke-width':me.strokeWidth});}if(opts.i===w.config.series.length-1){animations.animationCompleted(el);}}).during(function(pos){currAngle=fromAngle+(angle-fromAngle)*pos;if(opts.animateStartingPos){currAngle=prevAngle+(angle-prevAngle)*pos;startAngle=fromStartAngle-prevAngle+(toStartAngle-(fromStartAngle-prevAngle))*pos;}path=me.getPiePath({me:me,startAngle:startAngle,angle:currAngle,size:size});el.node.setAttribute('data:pathOrig',path);el.attr({d:path});});}else{path=me.getPiePath({me:me,startAngle:startAngle,angle:angle,size:size});if(!opts.isTrack){w.globals.animationEnded=true;}el.node.setAttribute('data:pathOrig',path);el.attr({d:path,'stroke-width':me.strokeWidth});}}},{key:"pieClicked",value:function pieClicked(i){var w=this.w;var me=this;var path;var size=me.sliceSizes[i]+(w.config.plotOptions.pie.expandOnClick?4:0);var elPath=w.globals.dom.Paper.select(".apexcharts-".concat(me.chartType.toLowerCase(),"-slice-").concat(i)).members[0];if(elPath.attr('data:pieClicked')==='true'){elPath.attr({'data:pieClicked':'false'});this.revertDataLabelsInner(elPath.node,this.donutDataLabels);var origPath=elPath.attr('data:pathOrig');elPath.attr({d:origPath});return;}else{// reset all elems
var allEls=w.globals.dom.baseEl.getElementsByClassName('apexcharts-pie-area');Array.prototype.forEach.call(allEls,function(pieSlice){pieSlice.setAttribute('data:pieClicked','false');var origPath=pieSlice.getAttribute('data:pathOrig');if(origPath){pieSlice.setAttribute('d',origPath);}});elPath.attr('data:pieClicked','true');}var startAngle=parseInt(elPath.attr('data:startAngle'),10);var angle=parseInt(elPath.attr('data:angle'),10);path=me.getPiePath({me:me,startAngle:startAngle,angle:angle,size:size});if(angle===360)return;elPath.plot(path);}},{key:"getChangedPath",value:function getChangedPath(prevStartAngle,prevEndAngle){var path='';if(this.dynamicAnim&&this.w.globals.dataChanged){path=this.getPiePath({me:this,startAngle:prevStartAngle,angle:prevEndAngle-prevStartAngle,size:this.size});}return path;}},{key:"getPiePath",value:function getPiePath(_ref){var me=_ref.me,startAngle=_ref.startAngle,angle=_ref.angle,size=_ref.size;var path;var graphics=new Graphics(this.ctx);var startDeg=startAngle;var startRadians=Math.PI*(startDeg-90)/180;var endDeg=angle+startAngle;// prevent overlap
if(Math.ceil(endDeg)>=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle){endDeg=this.fullAngle+this.w.config.plotOptions.pie.startAngle%this.fullAngle-0.01;}if(Math.ceil(endDeg)>this.fullAngle)endDeg-=this.fullAngle;var endRadians=Math.PI*(endDeg-90)/180;var x1=me.centerX+size*Math.cos(startRadians);var y1=me.centerY+size*Math.sin(startRadians);var x2=me.centerX+size*Math.cos(endRadians);var y2=me.centerY+size*Math.sin(endRadians);var startInner=Utils$1.polarToCartesian(me.centerX,me.centerY,me.donutSize,endDeg);var endInner=Utils$1.polarToCartesian(me.centerX,me.centerY,me.donutSize,startDeg);var largeArc=angle>180?1:0;var pathBeginning=['M',x1,y1,'A',size,size,0,largeArc,1,x2,y2];if(me.chartType==='donut'){path=[].concat(pathBeginning,['L',startInner.x,startInner.y,'A',me.donutSize,me.donutSize,0,largeArc,0,endInner.x,endInner.y,'L',x1,y1,'z']).join(' ');}else if(me.chartType==='pie'||me.chartType==='polarArea'){path=[].concat(pathBeginning,['L',me.centerX,me.centerY,'L',x1,y1]).join(' ');}else{path=[].concat(pathBeginning).join(' ');}return graphics.roundPathCorners(path,this.strokeWidth*2);}},{key:"drawPolarElements",value:function drawPolarElements(parent){var w=this.w;var scale=new Scales(this.ctx);var graphics=new Graphics(this.ctx);var helpers=new CircularChartsHelpers(this.ctx);var gCircles=graphics.group();var gYAxis=graphics.group();var yScale=scale.niceScale(0,Math.ceil(this.maxY),0);var yTexts=yScale.result.reverse();var len=yScale.result.length;this.maxY=yScale.niceMax;var circleSize=w.globals.radialSize;var diff=circleSize/(len-1);for(var i=0;i<len-1;i++){var circle=graphics.drawCircle(circleSize);circle.attr({cx:this.centerX,cy:this.centerY,fill:'none','stroke-width':w.config.plotOptions.polarArea.rings.strokeWidth,stroke:w.config.plotOptions.polarArea.rings.strokeColor});if(w.config.yaxis[0].show){var yLabel=helpers.drawYAxisTexts(this.centerX,this.centerY-circleSize+parseInt(w.config.yaxis[0].labels.style.fontSize,10)/2,i,yTexts[i]);gYAxis.add(yLabel);}gCircles.add(circle);circleSize=circleSize-diff;}this.drawSpokes(parent);parent.add(gCircles);parent.add(gYAxis);}},{key:"renderInnerDataLabels",value:function renderInnerDataLabels(dataLabelsConfig,opts){var w=this.w;var graphics=new Graphics(this.ctx);var g=graphics.group({class:'apexcharts-datalabels-group',transform:"translate(".concat(opts.translateX?opts.translateX:0,", ").concat(opts.translateY?opts.translateY:0,") scale(").concat(w.config.plotOptions.pie.customScale,")")});var showTotal=dataLabelsConfig.total.show;g.node.style.opacity=opts.opacity;var x=opts.centerX;var y=opts.centerY;var labelColor,valueColor;if(dataLabelsConfig.name.color===undefined){labelColor=w.globals.colors[0];}else{labelColor=dataLabelsConfig.name.color;}var labelFontSize=dataLabelsConfig.name.fontSize;var labelFontFamily=dataLabelsConfig.name.fontFamily;var labelFontWeight=dataLabelsConfig.name.fontWeight;if(dataLabelsConfig.value.color===undefined){valueColor=w.config.chart.foreColor;}else{valueColor=dataLabelsConfig.value.color;}var lbFormatter=dataLabelsConfig.value.formatter;var val='';var name='';if(showTotal){labelColor=dataLabelsConfig.total.color;labelFontSize=dataLabelsConfig.total.fontSize;labelFontFamily=dataLabelsConfig.total.fontFamily;labelFontWeight=dataLabelsConfig.total.fontWeight;name=dataLabelsConfig.total.label;val=dataLabelsConfig.total.formatter(w);}else{if(w.globals.series.length===1){val=lbFormatter(w.globals.series[0],w);name=w.globals.seriesNames[0];}}if(name){name=dataLabelsConfig.name.formatter(name,dataLabelsConfig.total.show,w);}if(dataLabelsConfig.name.show){var elLabel=graphics.drawText({x:x,y:y+parseFloat(dataLabelsConfig.name.offsetY),text:name,textAnchor:'middle',foreColor:labelColor,fontSize:labelFontSize,fontWeight:labelFontWeight,fontFamily:labelFontFamily});elLabel.node.classList.add('apexcharts-datalabel-label');g.add(elLabel);}if(dataLabelsConfig.value.show){var valOffset=dataLabelsConfig.name.show?parseFloat(dataLabelsConfig.value.offsetY)+16:dataLabelsConfig.value.offsetY;var elValue=graphics.drawText({x:x,y:y+valOffset,text:val,textAnchor:'middle',foreColor:valueColor,fontWeight:dataLabelsConfig.value.fontWeight,fontSize:dataLabelsConfig.value.fontSize,fontFamily:dataLabelsConfig.value.fontFamily});elValue.node.classList.add('apexcharts-datalabel-value');g.add(elValue);}// for a multi-series circle chart, we need to show total value instead of first series labels
return g;}/**
       *
       * @param {string} name - The name of the series
       * @param {string} val - The value of that series
       * @param {object} el - Optional el (indicates which series was hovered/clicked). If this param is not present, means we need to show total
       */},{key:"printInnerLabels",value:function printInnerLabels(labelsConfig,name,val,el){var w=this.w;var labelColor;if(el){if(labelsConfig.name.color===undefined){labelColor=w.globals.colors[parseInt(el.parentNode.getAttribute('rel'),10)-1];}else{labelColor=labelsConfig.name.color;}}else{if(w.globals.series.length>1&&labelsConfig.total.show){labelColor=labelsConfig.total.color;}}var elLabel=w.globals.dom.baseEl.querySelector('.apexcharts-datalabel-label');var elValue=w.globals.dom.baseEl.querySelector('.apexcharts-datalabel-value');var lbFormatter=labelsConfig.value.formatter;val=lbFormatter(val,w);// we need to show Total Val - so get the formatter of it
if(!el&&typeof labelsConfig.total.formatter==='function'){val=labelsConfig.total.formatter(w);}var isTotal=name===labelsConfig.total.label;name=labelsConfig.name.formatter(name,isTotal,w);if(elLabel!==null){elLabel.textContent=name;}if(elValue!==null){elValue.textContent=val;}if(elLabel!==null){elLabel.style.fill=labelColor;}}},{key:"printDataLabelsInner",value:function printDataLabelsInner(el,dataLabelsConfig){var w=this.w;var val=el.getAttribute('data:value');var name=w.globals.seriesNames[parseInt(el.parentNode.getAttribute('rel'),10)-1];if(w.globals.series.length>1){this.printInnerLabels(dataLabelsConfig,name,val,el);}var dataLabelsGroup=w.globals.dom.baseEl.querySelector('.apexcharts-datalabels-group');if(dataLabelsGroup!==null){dataLabelsGroup.style.opacity=1;}}},{key:"drawSpokes",value:function drawSpokes(parent){var _this2=this;var w=this.w;var graphics=new Graphics(this.ctx);var spokeConfig=w.config.plotOptions.polarArea.spokes;if(spokeConfig.strokeWidth===0)return;var spokes=[];var angleDivision=360/w.globals.series.length;for(var i=0;i<w.globals.series.length;i++){spokes.push(Utils$1.polarToCartesian(this.centerX,this.centerY,w.globals.radialSize,w.config.plotOptions.pie.startAngle+angleDivision*i));}spokes.forEach(function(p,i){var line=graphics.drawLine(p.x,p.y,_this2.centerX,_this2.centerY,Array.isArray(spokeConfig.connectorColors)?spokeConfig.connectorColors[i]:spokeConfig.connectorColors);parent.add(line);});}},{key:"revertDataLabelsInner",value:function revertDataLabelsInner(elem,dataLabelsConfig,event){var _this3=this;var w=this.w;var dataLabelsGroup=w.globals.dom.baseEl.querySelector('.apexcharts-datalabels-group');var sliceOut=false;var slices=w.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");var selectSlice=function selectSlice(_ref2){var makeSliceOut=_ref2.makeSliceOut,printLabel=_ref2.printLabel;Array.prototype.forEach.call(slices,function(s){if(s.getAttribute('data:pieClicked')==='true'){if(makeSliceOut){sliceOut=true;}if(printLabel){_this3.printDataLabelsInner(s,dataLabelsConfig);}}});};selectSlice({makeSliceOut:true,printLabel:false});if(dataLabelsConfig.total.show&&w.globals.series.length>1){if(sliceOut&&!dataLabelsConfig.total.showAlways){selectSlice({makeSliceOut:false,printLabel:true});}else{this.printInnerLabels(dataLabelsConfig,dataLabelsConfig.total.label,dataLabelsConfig.total.formatter(w));}}else{selectSlice({makeSliceOut:false,printLabel:true});if(!sliceOut){if(w.globals.selectedDataPoints.length&&w.globals.series.length>1){if(w.globals.selectedDataPoints[0].length>0){var index=w.globals.selectedDataPoints[0];var el=w.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(),"-slice-").concat(index));this.printDataLabelsInner(el,dataLabelsConfig);}else if(dataLabelsGroup&&w.globals.selectedDataPoints.length&&w.globals.selectedDataPoints[0].length===0){dataLabelsGroup.style.opacity=0;}}else{if(dataLabelsGroup&&w.globals.series.length>1){dataLabelsGroup.style.opacity=0;}}}}}}]);return Pie;}();/**
   * ApexCharts Radar Class for Spider/Radar Charts.
   * @module Radar
   **/var Radar=/*#__PURE__*/function(){function Radar(ctx){_classCallCheck(this,Radar);this.ctx=ctx;this.w=ctx.w;this.chartType=this.w.config.chart.type;this.initialAnim=this.w.config.chart.animations.enabled;this.dynamicAnim=this.initialAnim&&this.w.config.chart.animations.dynamicAnimation.enabled;this.animDur=0;var w=this.w;this.graphics=new Graphics(this.ctx);this.lineColorArr=w.globals.stroke.colors!==undefined?w.globals.stroke.colors:w.globals.colors;this.defaultSize=w.globals.svgHeight<w.globals.svgWidth?w.globals.gridHeight+w.globals.goldenPadding*1.5:w.globals.gridWidth;this.isLog=w.config.yaxis[0].logarithmic;this.logBase=w.config.yaxis[0].logBase;this.coreUtils=new CoreUtils(this.ctx);this.maxValue=this.isLog?this.coreUtils.getLogVal(this.logBase,w.globals.maxY,0):w.globals.maxY;this.minValue=this.isLog?this.coreUtils.getLogVal(this.logBase,this.w.globals.minY,0):w.globals.minY;this.polygons=w.config.plotOptions.radar.polygons;this.strokeWidth=w.config.stroke.show?w.config.stroke.width:0;this.size=this.defaultSize/2.1-this.strokeWidth-w.config.chart.dropShadow.blur;if(w.config.xaxis.labels.show){this.size=this.size-w.globals.xAxisLabelsWidth/1.75;}if(w.config.plotOptions.radar.size!==undefined){this.size=w.config.plotOptions.radar.size;}this.dataRadiusOfPercent=[];this.dataRadius=[];this.angleArr=[];this.yaxisLabelsTextsPos=[];}_createClass(Radar,[{key:"draw",value:function draw(series){var _this=this;var w=this.w;var fill=new Fill(this.ctx);var allSeries=[];var dataLabels=new DataLabels(this.ctx);if(series.length){this.dataPointsLen=series[w.globals.maxValsInArrayIndex].length;}this.disAngle=Math.PI*2/this.dataPointsLen;var halfW=w.globals.gridWidth/2;var halfH=w.globals.gridHeight/2;var translateX=halfW+w.config.plotOptions.radar.offsetX;var translateY=halfH+w.config.plotOptions.radar.offsetY;var ret=this.graphics.group({class:'apexcharts-radar-series apexcharts-plot-series',transform:"translate(".concat(translateX||0,", ").concat(translateY||0,")")});var dataPointsPos=[];var elPointsMain=null;var elDataPointsMain=null;this.yaxisLabels=this.graphics.group({class:'apexcharts-yaxis'});series.forEach(function(s,i){var longestSeries=s.length===w.globals.dataPoints;// el to which series will be drawn
var elSeries=_this.graphics.group().attr({class:"apexcharts-series",'data:longestSeries':longestSeries,seriesName:Utils$1.escapeString(w.globals.seriesNames[i]),rel:i+1,'data:realIndex':i});_this.dataRadiusOfPercent[i]=[];_this.dataRadius[i]=[];_this.angleArr[i]=[];s.forEach(function(dv,j){var range=Math.abs(_this.maxValue-_this.minValue);dv=dv+Math.abs(_this.minValue);if(_this.isLog){dv=_this.coreUtils.getLogVal(_this.logBase,dv,0);}_this.dataRadiusOfPercent[i][j]=dv/range;_this.dataRadius[i][j]=_this.dataRadiusOfPercent[i][j]*_this.size;_this.angleArr[i][j]=j*_this.disAngle;});dataPointsPos=_this.getDataPointsPos(_this.dataRadius[i],_this.angleArr[i]);var paths=_this.createPaths(dataPointsPos,{x:0,y:0});// points
elPointsMain=_this.graphics.group({class:'apexcharts-series-markers-wrap apexcharts-element-hidden'});// datapoints
elDataPointsMain=_this.graphics.group({class:"apexcharts-datalabels",'data:realIndex':i});w.globals.delayedElements.push({el:elPointsMain.node,index:i});var defaultRenderedPathOptions={i:i,realIndex:i,animationDelay:i,initialSpeed:w.config.chart.animations.speed,dataChangeSpeed:w.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-radar",shouldClipToGrid:false,bindEventsOnPaths:false,stroke:w.globals.stroke.colors[i],strokeLineCap:w.config.stroke.lineCap};var pathFrom=null;if(w.globals.previousPaths.length>0){pathFrom=_this.getPreviousPath(i);}for(var p=0;p<paths.linePathsTo.length;p++){var renderedLinePath=_this.graphics.renderPaths(_objectSpread2(_objectSpread2({},defaultRenderedPathOptions),{},{pathFrom:pathFrom===null?paths.linePathsFrom[p]:pathFrom,pathTo:paths.linePathsTo[p],strokeWidth:Array.isArray(_this.strokeWidth)?_this.strokeWidth[i]:_this.strokeWidth,fill:'none',drawShadow:false}));elSeries.add(renderedLinePath);var pathFill=fill.fillPath({seriesNumber:i});var renderedAreaPath=_this.graphics.renderPaths(_objectSpread2(_objectSpread2({},defaultRenderedPathOptions),{},{pathFrom:pathFrom===null?paths.areaPathsFrom[p]:pathFrom,pathTo:paths.areaPathsTo[p],strokeWidth:0,fill:pathFill,drawShadow:false}));if(w.config.chart.dropShadow.enabled){var filters=new Filters(_this.ctx);var shadow=w.config.chart.dropShadow;filters.dropShadow(renderedAreaPath,Object.assign({},shadow,{noUserSpaceOnUse:true}),i);}elSeries.add(renderedAreaPath);}s.forEach(function(sj,j){var markers=new Markers(_this.ctx);var opts=markers.getMarkerConfig({cssClass:'apexcharts-marker',seriesIndex:i,dataPointIndex:j});var point=_this.graphics.drawMarker(dataPointsPos[j].x,dataPointsPos[j].y,opts);point.attr('rel',j);point.attr('j',j);point.attr('index',i);point.node.setAttribute('default-marker-size',opts.pSize);var elPointsWrap=_this.graphics.group({class:'apexcharts-series-markers'});if(elPointsWrap){elPointsWrap.add(point);}elPointsMain.add(elPointsWrap);elSeries.add(elPointsMain);var dataLabelsConfig=w.config.dataLabels;if(dataLabelsConfig.enabled){var text=dataLabelsConfig.formatter(w.globals.series[i][j],{seriesIndex:i,dataPointIndex:j,w:w});dataLabels.plotDataLabelsText({x:dataPointsPos[j].x,y:dataPointsPos[j].y,text:text,textAnchor:'middle',i:i,j:i,parent:elDataPointsMain,offsetCorrection:false,dataLabelsConfig:_objectSpread2({},dataLabelsConfig)});}elSeries.add(elDataPointsMain);});allSeries.push(elSeries);});this.drawPolygons({parent:ret});if(w.config.xaxis.labels.show){var xaxisTexts=this.drawXAxisTexts();ret.add(xaxisTexts);}allSeries.forEach(function(elS){ret.add(elS);});ret.add(this.yaxisLabels);return ret;}},{key:"drawPolygons",value:function drawPolygons(opts){var _this2=this;var w=this.w;var parent=opts.parent;var helpers=new CircularChartsHelpers(this.ctx);var yaxisTexts=w.globals.yAxisScale[0].result.reverse();var layers=yaxisTexts.length;var radiusSizes=[];var layerDis=this.size/(layers-1);for(var i=0;i<layers;i++){radiusSizes[i]=layerDis*i;}radiusSizes.reverse();var polygonStrings=[];var lines=[];radiusSizes.forEach(function(radiusSize,r){var polygon=Utils$1.getPolygonPos(radiusSize,_this2.dataPointsLen);var string='';polygon.forEach(function(p,i){if(r===0){var line=_this2.graphics.drawLine(p.x,p.y,0,0,Array.isArray(_this2.polygons.connectorColors)?_this2.polygons.connectorColors[i]:_this2.polygons.connectorColors);lines.push(line);}if(i===0){_this2.yaxisLabelsTextsPos.push({x:p.x,y:p.y});}string+=p.x+','+p.y+' ';});polygonStrings.push(string);});polygonStrings.forEach(function(p,i){var strokeColors=_this2.polygons.strokeColors;var strokeWidth=_this2.polygons.strokeWidth;var polygon=_this2.graphics.drawPolygon(p,Array.isArray(strokeColors)?strokeColors[i]:strokeColors,Array.isArray(strokeWidth)?strokeWidth[i]:strokeWidth,w.globals.radarPolygons.fill.colors[i]);parent.add(polygon);});lines.forEach(function(l){parent.add(l);});if(w.config.yaxis[0].show){this.yaxisLabelsTextsPos.forEach(function(p,i){var yText=helpers.drawYAxisTexts(p.x,p.y,i,yaxisTexts[i]);_this2.yaxisLabels.add(yText);});}}},{key:"drawXAxisTexts",value:function drawXAxisTexts(){var _this3=this;var w=this.w;var xaxisLabelsConfig=w.config.xaxis.labels;var elXAxisWrap=this.graphics.group({class:'apexcharts-xaxis'});var polygonPos=Utils$1.getPolygonPos(this.size,this.dataPointsLen);w.globals.labels.forEach(function(label,i){var formatter=w.config.xaxis.labels.formatter;var dataLabels=new DataLabels(_this3.ctx);if(polygonPos[i]){var textPos=_this3.getTextPos(polygonPos[i],_this3.size);var text=formatter(label,{seriesIndex:-1,dataPointIndex:i,w:w});dataLabels.plotDataLabelsText({x:textPos.newX,y:textPos.newY,text:text,textAnchor:textPos.textAnchor,i:i,j:i,parent:elXAxisWrap,color:Array.isArray(xaxisLabelsConfig.style.colors)&&xaxisLabelsConfig.style.colors[i]?xaxisLabelsConfig.style.colors[i]:'#a8a8a8',dataLabelsConfig:_objectSpread2({textAnchor:textPos.textAnchor,dropShadow:{enabled:false}},xaxisLabelsConfig),offsetCorrection:false});}});return elXAxisWrap;}},{key:"createPaths",value:function createPaths(pos,origin){var _this4=this;var linePathsTo=[];var linePathsFrom=[];var areaPathsTo=[];var areaPathsFrom=[];if(pos.length){linePathsFrom=[this.graphics.move(origin.x,origin.y)];areaPathsFrom=[this.graphics.move(origin.x,origin.y)];var linePathTo=this.graphics.move(pos[0].x,pos[0].y);var areaPathTo=this.graphics.move(pos[0].x,pos[0].y);pos.forEach(function(p,i){linePathTo+=_this4.graphics.line(p.x,p.y);areaPathTo+=_this4.graphics.line(p.x,p.y);if(i===pos.length-1){linePathTo+='Z';areaPathTo+='Z';}});linePathsTo.push(linePathTo);areaPathsTo.push(areaPathTo);}return{linePathsFrom:linePathsFrom,linePathsTo:linePathsTo,areaPathsFrom:areaPathsFrom,areaPathsTo:areaPathsTo};}},{key:"getTextPos",value:function getTextPos(pos,polygonSize){var limit=10;var textAnchor='middle';var newX=pos.x;var newY=pos.y;if(Math.abs(pos.x)>=limit){if(pos.x>0){textAnchor='start';newX+=10;}else if(pos.x<0){textAnchor='end';newX-=10;}}else{textAnchor='middle';}if(Math.abs(pos.y)>=polygonSize-limit){if(pos.y<0){newY-=10;}else if(pos.y>0){newY+=10;}}return{textAnchor:textAnchor,newX:newX,newY:newY};}},{key:"getPreviousPath",value:function getPreviousPath(realIndex){var w=this.w;var pathFrom=null;for(var pp=0;pp<w.globals.previousPaths.length;pp++){var gpp=w.globals.previousPaths[pp];if(gpp.paths.length>0&&parseInt(gpp.realIndex,10)===parseInt(realIndex,10)){if(typeof w.globals.previousPaths[pp].paths[0]!=='undefined'){pathFrom=w.globals.previousPaths[pp].paths[0].d;}}}return pathFrom;}},{key:"getDataPointsPos",value:function getDataPointsPos(dataRadiusArr,angleArr){var dataPointsLen=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.dataPointsLen;dataRadiusArr=dataRadiusArr||[];angleArr=angleArr||[];var dataPointsPosArray=[];for(var j=0;j<dataPointsLen;j++){var curPointPos={};curPointPos.x=dataRadiusArr[j]*Math.sin(angleArr[j]);curPointPos.y=-dataRadiusArr[j]*Math.cos(angleArr[j]);dataPointsPosArray.push(curPointPos);}return dataPointsPosArray;}}]);return Radar;}();/**
   * ApexCharts Radial Class for drawing Circle / Semi Circle Charts.
   * @module Radial
   **/var Radial=/*#__PURE__*/function(_Pie){_inherits(Radial,_Pie);var _super=_createSuper(Radial);function Radial(ctx){var _this;_classCallCheck(this,Radial);_this=_super.call(this,ctx);_this.ctx=ctx;_this.w=ctx.w;_this.animBeginArr=[0];_this.animDur=0;var w=_this.w;_this.startAngle=w.config.plotOptions.radialBar.startAngle;_this.endAngle=w.config.plotOptions.radialBar.endAngle;_this.totalAngle=Math.abs(w.config.plotOptions.radialBar.endAngle-w.config.plotOptions.radialBar.startAngle);_this.trackStartAngle=w.config.plotOptions.radialBar.track.startAngle;_this.trackEndAngle=w.config.plotOptions.radialBar.track.endAngle;_this.barLabels=_this.w.config.plotOptions.radialBar.barLabels;_this.donutDataLabels=_this.w.config.plotOptions.radialBar.dataLabels;_this.radialDataLabels=_this.donutDataLabels;// make a copy for easy reference
if(!_this.trackStartAngle)_this.trackStartAngle=_this.startAngle;if(!_this.trackEndAngle)_this.trackEndAngle=_this.endAngle;if(_this.endAngle===360)_this.endAngle=359.99;_this.margin=parseInt(w.config.plotOptions.radialBar.track.margin,10);_this.onBarLabelClick=_this.onBarLabelClick.bind(_assertThisInitialized(_this));return _this;}_createClass(Radial,[{key:"draw",value:function draw(series){var w=this.w;var graphics=new Graphics(this.ctx);var ret=graphics.group({class:'apexcharts-radialbar'});if(w.globals.noData)return ret;var elSeries=graphics.group();var centerY=this.defaultSize/2;var centerX=w.globals.gridWidth/2;var size=this.defaultSize/2.05;if(!w.config.chart.sparkline.enabled){size=size-w.config.stroke.width-w.config.chart.dropShadow.blur;}var colorArr=w.globals.fill.colors;if(w.config.plotOptions.radialBar.track.show){var elTracks=this.drawTracks({size:size,centerX:centerX,centerY:centerY,colorArr:colorArr,series:series});elSeries.add(elTracks);}var elG=this.drawArcs({size:size,centerX:centerX,centerY:centerY,colorArr:colorArr,series:series});var totalAngle=360;if(w.config.plotOptions.radialBar.startAngle<0){totalAngle=this.totalAngle;}var angleRatio=(360-totalAngle)/360;w.globals.radialSize=size-size*angleRatio;if(this.radialDataLabels.value.show){var offset=Math.max(this.radialDataLabels.value.offsetY,this.radialDataLabels.name.offsetY);w.globals.radialSize+=offset*angleRatio;}elSeries.add(elG.g);if(w.config.plotOptions.radialBar.hollow.position==='front'){elG.g.add(elG.elHollow);if(elG.dataLabels){elG.g.add(elG.dataLabels);}}ret.add(elSeries);return ret;}},{key:"drawTracks",value:function drawTracks(opts){var w=this.w;var graphics=new Graphics(this.ctx);var g=graphics.group({class:'apexcharts-tracks'});var filters=new Filters(this.ctx);var fill=new Fill(this.ctx);var strokeWidth=this.getStrokeWidth(opts);opts.size=opts.size-strokeWidth/2;for(var i=0;i<opts.series.length;i++){var elRadialBarTrack=graphics.group({class:'apexcharts-radialbar-track apexcharts-track'});g.add(elRadialBarTrack);elRadialBarTrack.attr({rel:i+1});opts.size=opts.size-strokeWidth-this.margin;var trackConfig=w.config.plotOptions.radialBar.track;var pathFill=fill.fillPath({seriesNumber:0,size:opts.size,fillColors:Array.isArray(trackConfig.background)?trackConfig.background[i]:trackConfig.background,solid:true});var startAngle=this.trackStartAngle;var endAngle=this.trackEndAngle;if(Math.abs(endAngle)+Math.abs(startAngle)>=360)endAngle=360-Math.abs(this.startAngle)-0.1;var elPath=graphics.drawPath({d:'',stroke:pathFill,strokeWidth:strokeWidth*parseInt(trackConfig.strokeWidth,10)/100,fill:'none',strokeOpacity:trackConfig.opacity,classes:'apexcharts-radialbar-area'});if(trackConfig.dropShadow.enabled){var shadow=trackConfig.dropShadow;filters.dropShadow(elPath,shadow);}elRadialBarTrack.add(elPath);elPath.attr('id','apexcharts-radialbarTrack-'+i);this.animatePaths(elPath,{centerX:opts.centerX,centerY:opts.centerY,endAngle:endAngle,startAngle:startAngle,size:opts.size,i:i,totalItems:2,animBeginArr:0,dur:0,isTrack:true,easing:w.globals.easing});}return g;}},{key:"drawArcs",value:function drawArcs(opts){var w=this.w;// size, donutSize, centerX, centerY, colorArr, lineColorArr, sectorAngleArr, series
var graphics=new Graphics(this.ctx);var fill=new Fill(this.ctx);var filters=new Filters(this.ctx);var g=graphics.group();var strokeWidth=this.getStrokeWidth(opts);opts.size=opts.size-strokeWidth/2;var hollowFillID=w.config.plotOptions.radialBar.hollow.background;var hollowSize=opts.size-strokeWidth*opts.series.length-this.margin*opts.series.length-strokeWidth*parseInt(w.config.plotOptions.radialBar.track.strokeWidth,10)/100/2;var hollowRadius=hollowSize-w.config.plotOptions.radialBar.hollow.margin;if(w.config.plotOptions.radialBar.hollow.image!==undefined){hollowFillID=this.drawHollowImage(opts,g,hollowSize,hollowFillID);}var elHollow=this.drawHollow({size:hollowRadius,centerX:opts.centerX,centerY:opts.centerY,fill:hollowFillID?hollowFillID:'transparent'});if(w.config.plotOptions.radialBar.hollow.dropShadow.enabled){var shadow=w.config.plotOptions.radialBar.hollow.dropShadow;filters.dropShadow(elHollow,shadow);}var shown=1;if(!this.radialDataLabels.total.show&&w.globals.series.length>1){shown=0;}var dataLabels=null;if(this.radialDataLabels.show){dataLabels=this.renderInnerDataLabels(this.radialDataLabels,{hollowSize:hollowSize,centerX:opts.centerX,centerY:opts.centerY,opacity:shown});}if(w.config.plotOptions.radialBar.hollow.position==='back'){g.add(elHollow);if(dataLabels){g.add(dataLabels);}}var reverseLoop=false;if(w.config.plotOptions.radialBar.inverseOrder){reverseLoop=true;}for(var i=reverseLoop?opts.series.length-1:0;reverseLoop?i>=0:i<opts.series.length;reverseLoop?i--:i++){var elRadialBarArc=graphics.group({class:"apexcharts-series apexcharts-radial-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[i])});g.add(elRadialBarArc);elRadialBarArc.attr({rel:i+1,'data:realIndex':i});this.ctx.series.addCollapsedClassToSeries(elRadialBarArc,i);opts.size=opts.size-strokeWidth-this.margin;var pathFill=fill.fillPath({seriesNumber:i,size:opts.size,value:opts.series[i]});var startAngle=this.startAngle;var prevStartAngle=void 0;// if data exceeds 100, make it 100
var dataValue=Utils$1.negToZero(opts.series[i]>100?100:opts.series[i])/100;var endAngle=Math.round(this.totalAngle*dataValue)+this.startAngle;var prevEndAngle=void 0;if(w.globals.dataChanged){prevStartAngle=this.startAngle;prevEndAngle=Math.round(this.totalAngle*Utils$1.negToZero(w.globals.previousPaths[i])/100)+prevStartAngle;}var currFullAngle=Math.abs(endAngle)+Math.abs(startAngle);if(currFullAngle>=360){endAngle=endAngle-0.01;}var prevFullAngle=Math.abs(prevEndAngle)+Math.abs(prevStartAngle);if(prevFullAngle>=360){prevEndAngle=prevEndAngle-0.01;}var angle=endAngle-startAngle;var dashArray=Array.isArray(w.config.stroke.dashArray)?w.config.stroke.dashArray[i]:w.config.stroke.dashArray;var elPath=graphics.drawPath({d:'',stroke:pathFill,strokeWidth:strokeWidth,fill:'none',fillOpacity:w.config.fill.opacity,classes:'apexcharts-radialbar-area apexcharts-radialbar-slice-'+i,strokeDashArray:dashArray});Graphics.setAttrs(elPath.node,{'data:angle':angle,'data:value':opts.series[i]});if(w.config.chart.dropShadow.enabled){var _shadow=w.config.chart.dropShadow;filters.dropShadow(elPath,_shadow,i);}filters.setSelectionFilter(elPath,0,i);this.addListeners(elPath,this.radialDataLabels);elRadialBarArc.add(elPath);elPath.attr({index:0,j:i});if(this.barLabels.enabled){var barStartCords=Utils$1.polarToCartesian(opts.centerX,opts.centerY,opts.size,startAngle);var text=this.barLabels.formatter(w.globals.seriesNames[i],{seriesIndex:i,w:w});var classes=['apexcharts-radialbar-label'];if(!this.barLabels.onClick){classes.push('apexcharts-no-click');}var textColor=this.barLabels.useSeriesColors?w.globals.colors[i]:w.config.chart.foreColor;if(!textColor){textColor=w.config.chart.foreColor;}var x=barStartCords.x-this.barLabels.margin;var y=barStartCords.y;var elText=graphics.drawText({x:x,y:y,text:text,textAnchor:'end',dominantBaseline:'middle',fontFamily:this.barLabels.fontFamily,fontWeight:this.barLabels.fontWeight,fontSize:this.barLabels.fontSize,foreColor:textColor,cssClass:classes.join(' ')});elText.on('click',this.onBarLabelClick);elText.attr({rel:i+1});if(startAngle!==0){elText.attr({'transform-origin':"".concat(x," ").concat(y),transform:"rotate(".concat(startAngle," 0 0)")});}elRadialBarArc.add(elText);}var dur=0;if(this.initialAnim&&!w.globals.resized&&!w.globals.dataChanged){dur=w.config.chart.animations.speed;}if(w.globals.dataChanged){dur=w.config.chart.animations.dynamicAnimation.speed;}this.animDur=dur/(opts.series.length*1.2)+this.animDur;this.animBeginArr.push(this.animDur);this.animatePaths(elPath,{centerX:opts.centerX,centerY:opts.centerY,endAngle:endAngle,startAngle:startAngle,prevEndAngle:prevEndAngle,prevStartAngle:prevStartAngle,size:opts.size,i:i,totalItems:2,animBeginArr:this.animBeginArr,dur:dur,shouldSetPrevPaths:true,easing:w.globals.easing});}return{g:g,elHollow:elHollow,dataLabels:dataLabels};}},{key:"drawHollow",value:function drawHollow(opts){var graphics=new Graphics(this.ctx);var circle=graphics.drawCircle(opts.size*2);circle.attr({class:'apexcharts-radialbar-hollow',cx:opts.centerX,cy:opts.centerY,r:opts.size,fill:opts.fill});return circle;}},{key:"drawHollowImage",value:function drawHollowImage(opts,g,hollowSize,hollowFillID){var w=this.w;var fill=new Fill(this.ctx);var randID=Utils$1.randomId();var hollowFillImg=w.config.plotOptions.radialBar.hollow.image;if(w.config.plotOptions.radialBar.hollow.imageClipped){fill.clippedImgArea({width:hollowSize,height:hollowSize,image:hollowFillImg,patternID:"pattern".concat(w.globals.cuid).concat(randID)});hollowFillID="url(#pattern".concat(w.globals.cuid).concat(randID,")");}else{var imgWidth=w.config.plotOptions.radialBar.hollow.imageWidth;var imgHeight=w.config.plotOptions.radialBar.hollow.imageHeight;if(imgWidth===undefined&&imgHeight===undefined){var image=w.globals.dom.Paper.image(hollowFillImg).loaded(function(loader){this.move(opts.centerX-loader.width/2+w.config.plotOptions.radialBar.hollow.imageOffsetX,opts.centerY-loader.height/2+w.config.plotOptions.radialBar.hollow.imageOffsetY);});g.add(image);}else{var _image=w.globals.dom.Paper.image(hollowFillImg).loaded(function(loader){this.move(opts.centerX-imgWidth/2+w.config.plotOptions.radialBar.hollow.imageOffsetX,opts.centerY-imgHeight/2+w.config.plotOptions.radialBar.hollow.imageOffsetY);this.size(imgWidth,imgHeight);});g.add(_image);}}return hollowFillID;}},{key:"getStrokeWidth",value:function getStrokeWidth(opts){var w=this.w;return opts.size*(100-parseInt(w.config.plotOptions.radialBar.hollow.size,10))/100/(opts.series.length+1)-this.margin;}},{key:"onBarLabelClick",value:function onBarLabelClick(e){var seriesIndex=parseInt(e.target.getAttribute('rel'),10)-1;var legendClick=this.barLabels.onClick;var w=this.w;if(legendClick){legendClick(w.globals.seriesNames[seriesIndex],{w:w,seriesIndex:seriesIndex});}}}]);return Radial;}(Pie);/**
   * ApexCharts RangeBar Class responsible for drawing Range/Timeline Bars.
   *
   * @module RangeBar
   **/var RangeBar=/*#__PURE__*/function(_Bar){_inherits(RangeBar,_Bar);var _super=_createSuper(RangeBar);function RangeBar(){_classCallCheck(this,RangeBar);return _super.apply(this,arguments);}_createClass(RangeBar,[{key:"draw",value:function draw(series,seriesIndex){var w=this.w;var graphics=new Graphics(this.ctx);this.rangeBarOptions=this.w.config.plotOptions.rangeBar;this.series=series;this.seriesRangeStart=w.globals.seriesRangeStart;this.seriesRangeEnd=w.globals.seriesRangeEnd;this.barHelpers.initVariables(series);var ret=graphics.group({class:'apexcharts-rangebar-series apexcharts-plot-series'});for(var i=0;i<series.length;i++){var x=void 0,y=void 0,xDivision=void 0,// xDivision is the GRIDWIDTH divided by number of datapoints (columns)
yDivision=void 0,// yDivision is the GRIDHEIGHT divided by number of datapoints (bars)
zeroH=void 0,// zeroH is the baseline where 0 meets y axis
zeroW=void 0;// zeroW is the baseline where 0 meets x axis
var realIndex=w.globals.comboCharts?seriesIndex[i]:i;// el to which series will be drawn
var elSeries=graphics.group({class:"apexcharts-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[realIndex]),rel:i+1,'data:realIndex':realIndex});this.ctx.series.addCollapsedClassToSeries(elSeries,realIndex);if(series[i].length>0){this.visibleI=this.visibleI+1;}var barHeight=0;var barWidth=0;var translationsIndex=0;if(this.yRatio.length>1){this.yaxisIndex=w.globals.seriesYAxisReverseMap[realIndex][0];translationsIndex=realIndex;}var initPositions=this.barHelpers.initialPositions();y=initPositions.y;zeroW=initPositions.zeroW;x=initPositions.x;barWidth=initPositions.barWidth;barHeight=initPositions.barHeight;xDivision=initPositions.xDivision;yDivision=initPositions.yDivision;zeroH=initPositions.zeroH;// eldatalabels
var elDataLabelsWrap=graphics.group({class:'apexcharts-datalabels','data:realIndex':realIndex});var elGoalsMarkers=graphics.group({class:'apexcharts-rangebar-goals-markers'});for(var j=0;j<w.globals.dataPoints;j++){var _this$renderSeries;var strokeWidth=this.barHelpers.getStrokeWidth(i,j,realIndex);var y1=this.seriesRangeStart[i][j];var y2=this.seriesRangeEnd[i][j];var paths=null;var barXPosition=null;var barYPosition=null;var params={x:x,y:y,strokeWidth:strokeWidth,elSeries:elSeries};var seriesLen=this.seriesLen;if(w.config.plotOptions.bar.rangeBarGroupRows){seriesLen=1;}if(typeof w.config.series[i].data[j]==='undefined'){// no data exists for further indexes, hence we need to get out the innr loop.
// As we are iterating over total datapoints, there is a possiblity the series might not have data for j index
break;}if(this.isHorizontal){barYPosition=y+barHeight*this.visibleI;var srty=(yDivision-barHeight*seriesLen)/2;if(w.config.series[i].data[j].x){var positions=this.detectOverlappingBars({i:i,j:j,barYPosition:barYPosition,srty:srty,barHeight:barHeight,yDivision:yDivision,initPositions:initPositions});barHeight=positions.barHeight;barYPosition=positions.barYPosition;}paths=this.drawRangeBarPaths(_objectSpread2({indexes:{i:i,j:j,realIndex:realIndex},barHeight:barHeight,barYPosition:barYPosition,zeroW:zeroW,yDivision:yDivision,y1:y1,y2:y2},params));barWidth=paths.barWidth;}else{if(w.globals.isXNumeric){x=(w.globals.seriesX[i][j]-w.globals.minX)/this.xRatio-barWidth/2;}barXPosition=x+barWidth*this.visibleI;var srtx=(xDivision-barWidth*seriesLen)/2;if(w.config.series[i].data[j].x){var _positions=this.detectOverlappingBars({i:i,j:j,barXPosition:barXPosition,srtx:srtx,barWidth:barWidth,xDivision:xDivision,initPositions:initPositions});barWidth=_positions.barWidth;barXPosition=_positions.barXPosition;}paths=this.drawRangeColumnPaths(_objectSpread2({indexes:{i:i,j:j,realIndex:realIndex,translationsIndex:translationsIndex},barWidth:barWidth,barXPosition:barXPosition,zeroH:zeroH,xDivision:xDivision},params));barHeight=paths.barHeight;}var barGoalLine=this.barHelpers.drawGoalLine({barXPosition:paths.barXPosition,barYPosition:barYPosition,goalX:paths.goalX,goalY:paths.goalY,barHeight:barHeight,barWidth:barWidth});if(barGoalLine){elGoalsMarkers.add(barGoalLine);}y=paths.y;x=paths.x;var pathFill=this.barHelpers.getPathFillColor(series,i,j,realIndex);var lineFill=w.globals.stroke.colors[realIndex];this.renderSeries((_this$renderSeries={realIndex:realIndex,pathFill:pathFill,lineFill:lineFill,j:j,i:i,x:x,y:y,y1:y1,y2:y2,pathFrom:paths.pathFrom,pathTo:paths.pathTo,strokeWidth:strokeWidth,elSeries:elSeries,series:series,barHeight:barHeight,barWidth:barWidth,barXPosition:barXPosition,barYPosition:barYPosition},_defineProperty(_this$renderSeries,"barWidth",barWidth),_defineProperty(_this$renderSeries,"elDataLabelsWrap",elDataLabelsWrap),_defineProperty(_this$renderSeries,"elGoalsMarkers",elGoalsMarkers),_defineProperty(_this$renderSeries,"visibleSeries",this.visibleI),_defineProperty(_this$renderSeries,"type",'rangebar'),_this$renderSeries));}ret.add(elSeries);}return ret;}},{key:"detectOverlappingBars",value:function detectOverlappingBars(_ref){var i=_ref.i,j=_ref.j,barYPosition=_ref.barYPosition,barXPosition=_ref.barXPosition,srty=_ref.srty,srtx=_ref.srtx,barHeight=_ref.barHeight,barWidth=_ref.barWidth,yDivision=_ref.yDivision,xDivision=_ref.xDivision,initPositions=_ref.initPositions;var w=this.w;var overlaps=[];var rangeName=w.config.series[i].data[j].rangeName;var x=w.config.series[i].data[j].x;var labelX=Array.isArray(x)?x.join(' '):x;var rowIndex=w.globals.labels.map(function(_){return Array.isArray(_)?_.join(' '):_;}).indexOf(labelX);var overlappedIndex=w.globals.seriesRange[i].findIndex(function(tx){return tx.x===labelX&&tx.overlaps.length>0;});if(this.isHorizontal){if(w.config.plotOptions.bar.rangeBarGroupRows){barYPosition=srty+yDivision*rowIndex;}else{barYPosition=srty+barHeight*this.visibleI+yDivision*rowIndex;}if(overlappedIndex>-1&&!w.config.plotOptions.bar.rangeBarOverlap){overlaps=w.globals.seriesRange[i][overlappedIndex].overlaps;if(overlaps.indexOf(rangeName)>-1){barHeight=initPositions.barHeight/overlaps.length;barYPosition=barHeight*this.visibleI+yDivision*(100-parseInt(this.barOptions.barHeight,10))/100/2+barHeight*(this.visibleI+overlaps.indexOf(rangeName))+yDivision*rowIndex;}}}else{if(rowIndex>-1){if(w.config.plotOptions.bar.rangeBarGroupRows){barXPosition=srtx+xDivision*rowIndex;}else{barXPosition=srtx+barWidth*this.visibleI+xDivision*rowIndex;}}if(overlappedIndex>-1&&!w.config.plotOptions.bar.rangeBarOverlap){overlaps=w.globals.seriesRange[i][overlappedIndex].overlaps;if(overlaps.indexOf(rangeName)>-1){barWidth=initPositions.barWidth/overlaps.length;barXPosition=barWidth*this.visibleI+xDivision*(100-parseInt(this.barOptions.barWidth,10))/100/2+barWidth*(this.visibleI+overlaps.indexOf(rangeName))+xDivision*rowIndex;}}}return{barYPosition:barYPosition,barXPosition:barXPosition,barHeight:barHeight,barWidth:barWidth};}},{key:"drawRangeColumnPaths",value:function drawRangeColumnPaths(_ref2){var indexes=_ref2.indexes,x=_ref2.x,xDivision=_ref2.xDivision,barWidth=_ref2.barWidth,barXPosition=_ref2.barXPosition,zeroH=_ref2.zeroH;var w=this.w;var i=indexes.i;var j=indexes.j;var yRatio=this.yRatio[indexes.translationsIndex];var realIndex=indexes.realIndex;var range=this.getRangeValue(realIndex,j);var y1=Math.min(range.start,range.end);var y2=Math.max(range.start,range.end);if(typeof this.series[i][j]==='undefined'||this.series[i][j]===null){y1=zeroH;}else{y1=zeroH-y1/yRatio;y2=zeroH-y2/yRatio;}var barHeight=Math.abs(y2-y1);var paths=this.barHelpers.getColumnPaths({barXPosition:barXPosition,barWidth:barWidth,y1:y1,y2:y2,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,realIndex:indexes.realIndex,i:realIndex,j:j,w:w});if(!w.globals.isXNumeric){x=x+xDivision;}else{var xForNumericXAxis=this.getBarXForNumericXAxis({x:x,j:j,realIndex:realIndex,barWidth:barWidth});x=xForNumericXAxis.x;barXPosition=xForNumericXAxis.barXPosition;}return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,barHeight:barHeight,x:x,y:y2,goalY:this.barHelpers.getGoalValues('y',null,zeroH,i,j,indexes.translationsIndex),barXPosition:barXPosition};}},{key:"drawRangeBarPaths",value:function drawRangeBarPaths(_ref3){var indexes=_ref3.indexes,y=_ref3.y,y1=_ref3.y1,y2=_ref3.y2,yDivision=_ref3.yDivision,barHeight=_ref3.barHeight,barYPosition=_ref3.barYPosition,zeroW=_ref3.zeroW;var w=this.w;var x1=zeroW+y1/this.invertedYRatio;var x2=zeroW+y2/this.invertedYRatio;var barWidth=Math.abs(x2-x1);var paths=this.barHelpers.getBarpaths({barYPosition:barYPosition,barHeight:barHeight,x1:x1,x2:x2,strokeWidth:this.strokeWidth,series:this.seriesRangeEnd,i:indexes.realIndex,realIndex:indexes.realIndex,j:indexes.j,w:w});if(!w.globals.isXNumeric){y=y+yDivision;}return{pathTo:paths.pathTo,pathFrom:paths.pathFrom,barWidth:barWidth,x:x2,goalX:this.barHelpers.getGoalValues('x',zeroW,null,indexes.realIndex,indexes.j),y:y};}},{key:"getRangeValue",value:function getRangeValue(i,j){var w=this.w;return{start:w.globals.seriesRangeStart[i][j],end:w.globals.seriesRangeEnd[i][j]};}}]);return RangeBar;}(Bar);var Helpers=/*#__PURE__*/function(){function Helpers(lineCtx){_classCallCheck(this,Helpers);this.w=lineCtx.w;this.lineCtx=lineCtx;}_createClass(Helpers,[{key:"sameValueSeriesFix",value:function sameValueSeriesFix(i,series){var w=this.w;if(w.config.fill.type==='gradient'||w.config.fill.type[i]==='gradient'){var coreUtils=new CoreUtils(this.lineCtx.ctx,w);// applied only to LINE chart
// a small adjustment to allow gradient line to draw correctly for all same values
/* #fix https://github.com/apexcharts/apexcharts.js/issues/358 */if(coreUtils.seriesHaveSameValues(i)){var gSeries=series[i].slice();gSeries[gSeries.length-1]=gSeries[gSeries.length-1]+0.000001;series[i]=gSeries;}}return series;}},{key:"calculatePoints",value:function calculatePoints(_ref){var series=_ref.series,realIndex=_ref.realIndex,x=_ref.x,y=_ref.y,i=_ref.i,j=_ref.j,prevY=_ref.prevY;var w=this.w;var ptX=[];var ptY=[];if(j===0){var xPT1st=this.lineCtx.categoryAxisCorrection+w.config.markers.offsetX;// the first point for line series
// we need to check whether it's not a time series, because a time series may
// start from the middle of the x axis
if(w.globals.isXNumeric){xPT1st=(w.globals.seriesX[realIndex][0]-w.globals.minX)/this.lineCtx.xRatio+w.config.markers.offsetX;}// push 2 points for the first data values
ptX.push(xPT1st);ptY.push(Utils$1.isNumber(series[i][0])?prevY+w.config.markers.offsetY:null);ptX.push(x+w.config.markers.offsetX);ptY.push(Utils$1.isNumber(series[i][j+1])?y+w.config.markers.offsetY:null);}else{ptX.push(x+w.config.markers.offsetX);ptY.push(Utils$1.isNumber(series[i][j+1])?y+w.config.markers.offsetY:null);}var pointsPos={x:ptX,y:ptY};return pointsPos;}},{key:"checkPreviousPaths",value:function checkPreviousPaths(_ref2){var pathFromLine=_ref2.pathFromLine,pathFromArea=_ref2.pathFromArea,realIndex=_ref2.realIndex;var w=this.w;for(var pp=0;pp<w.globals.previousPaths.length;pp++){var gpp=w.globals.previousPaths[pp];if((gpp.type==='line'||gpp.type==='area')&&gpp.paths.length>0&&parseInt(gpp.realIndex,10)===parseInt(realIndex,10)){if(gpp.type==='line'){this.lineCtx.appendPathFrom=false;pathFromLine=w.globals.previousPaths[pp].paths[0].d;}else if(gpp.type==='area'){this.lineCtx.appendPathFrom=false;pathFromArea=w.globals.previousPaths[pp].paths[0].d;if(w.config.stroke.show&&w.globals.previousPaths[pp].paths[1]){pathFromLine=w.globals.previousPaths[pp].paths[1].d;}}}}return{pathFromLine:pathFromLine,pathFromArea:pathFromArea};}},{key:"determineFirstPrevY",value:function determineFirstPrevY(_ref3){var _this$w$config$series,_series$i;var i=_ref3.i,series=_ref3.series,prevY=_ref3.prevY,lineYPosition=_ref3.lineYPosition,translationsIndex=_ref3.translationsIndex;var w=this.w;var stackSeries=w.config.chart.stacked&&!w.globals.comboCharts||w.config.chart.stacked&&w.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||((_this$w$config$series=this.w.config.series[i])===null||_this$w$config$series===void 0?void 0:_this$w$config$series.type)==='bar');if(typeof((_series$i=series[i])===null||_series$i===void 0?void 0:_series$i[0])!=='undefined'){if(stackSeries){if(i>0){// 1st y value of previous series
lineYPosition=this.lineCtx.prevSeriesY[i-1][0];}else{// the first series will not have prevY values
lineYPosition=this.lineCtx.zeroY;}}else{lineYPosition=this.lineCtx.zeroY;}prevY=lineYPosition-series[i][0]/this.lineCtx.yRatio[translationsIndex]+(this.lineCtx.isReversed?series[i][0]/this.lineCtx.yRatio[translationsIndex]:0)*2;}else{// the first value in the current series is null
if(stackSeries&&i>0&&typeof series[i][0]==='undefined'){// check for undefined value (undefined value will occur when we clear the series while user clicks on legend to hide serieses)
for(var s=i-1;s>=0;s--){// for loop to get to 1st previous value until we get it
if(series[s][0]!==null&&typeof series[s][0]!=='undefined'){lineYPosition=this.lineCtx.prevSeriesY[s][0];prevY=lineYPosition;break;}}}}return{prevY:prevY,lineYPosition:lineYPosition};}}]);return Helpers;}();/**
   * 
   * @yr/monotone-cubic-spline (https://github.com/YR/monotone-cubic-spline)
   * 
   * The MIT License (MIT)
   * 
   * Copyright (c) 2015 yr.no
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy of
   * this software and associated documentation files (the "Software"), to deal in
   * the Software without restriction, including without limitation the rights to
   * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
   * the Software, and to permit persons to whom the Software is furnished to do so,
   * subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.

   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
   * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
   * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */ /**
   * Generate tangents for 'points'
   * @param {Array} points
   * @returns {Array}
   */var tangents=function tangents(points){var m=finiteDifferences(points);var n=points.length-1;var ε=1e-6;var tgts=[];var a,b,d,s;for(var i=0;i<n;i++){d=slope(points[i],points[i+1]);if(Math.abs(d)<ε){m[i]=m[i+1]=0;}else{a=m[i]/d;b=m[i+1]/d;s=a*a+b*b;if(s>9){s=d*3/Math.sqrt(s);m[i]=s*a;m[i+1]=s*b;}}}for(var _i=0;_i<=n;_i++){s=(points[Math.min(n,_i+1)][0]-points[Math.max(0,_i-1)][0])/(6*(1+m[_i]*m[_i]));tgts.push([s||0,m[_i]*s||0]);}return tgts;};/**
   * Convert 'points' to svg path
   * @param {Array} points
   * @returns {String}
   */var svgPath=function svgPath(points){var p='';for(var i=0;i<points.length;i++){var point=points[i];var n=point.length;if(n>4){p+="C".concat(point[0],", ").concat(point[1]);p+=", ".concat(point[2],", ").concat(point[3]);p+=", ".concat(point[4],", ").concat(point[5]);}else if(n>2){p+="S".concat(point[0],", ").concat(point[1]);p+=", ".concat(point[2],", ").concat(point[3]);}}return p;};var spline={/**
     * Convert 'points' to bezier
     * @param {Array} points
     * @returns {Array}
     */points:function points(_points){var tgts=tangents(_points);var p=_points[1];var p0=_points[0];var pts=[];var t=tgts[1];var t0=tgts[0];// Add starting 'M' and 'C' points
pts.push(p0,[p0[0]+t0[0],p0[1]+t0[1],p[0]-t[0],p[1]-t[1],p[0],p[1]]);// Add 'S' points
for(var i=2,n=tgts.length;i<n;i++){var _p=_points[i];var _t=tgts[i];pts.push([_p[0]-_t[0],_p[1]-_t[1],_p[0],_p[1]]);}return pts;},/**
     * Slice out a segment of 'points'
     * @param {Array} points
     * @param {Number} start
     * @param {Number} end
     * @returns {Array}
     */slice:function slice(points,start,end){var pts=points.slice(start,end);if(start){// Add additional 'C' points
if(pts[1].length<6){var n=pts[0].length;pts[1]=[pts[0][n-2]*2-pts[0][n-4],pts[0][n-1]*2-pts[0][n-3]].concat(pts[1]);}// Remove control points for 'M'
pts[0]=pts[0].slice(-2);}return pts;}};/**
   * Compute slope from point 'p0' to 'p1'
   * @param {Array} p0
   * @param {Array} p1
   * @returns {Number}
   */function slope(p0,p1){return(p1[1]-p0[1])/(p1[0]-p0[0]);}/**
   * Compute three-point differences for 'points'
   * @param {Array} points
   * @returns {Array}
   */function finiteDifferences(points){var m=[];var p0=points[0];var p1=points[1];var d=m[0]=slope(p0,p1);var i=1;for(var n=points.length-1;i<n;i++){p0=p1;p1=points[i+1];m[i]=(d+(d=slope(p0,p1)))*0.5;}m[i]=d;return m;}/**
   * ApexCharts Line Class responsible for drawing Line / Area / RangeArea Charts.
   * This class is also responsible for generating values for Bubble/Scatter charts, so need to rename it to Axis Charts to avoid confusions
   * @module Line
   **/var Line=/*#__PURE__*/function(){function Line(ctx,xyRatios,isPointsChart){_classCallCheck(this,Line);this.ctx=ctx;this.w=ctx.w;this.xyRatios=xyRatios;this.pointsChart=!(this.w.config.chart.type!=='bubble'&&this.w.config.chart.type!=='scatter')||isPointsChart;this.scatter=new Scatter(this.ctx);this.noNegatives=this.w.globals.minX===Number.MAX_VALUE;this.lineHelpers=new Helpers(this);this.markers=new Markers(this.ctx);this.prevSeriesY=[];this.categoryAxisCorrection=0;this.yaxisIndex=0;}_createClass(Line,[{key:"draw",value:function draw(series,ctype,seriesIndex,seriesRangeEnd){var _w$config$series$;var w=this.w;var graphics=new Graphics(this.ctx);var type=w.globals.comboCharts?ctype:w.config.chart.type;var ret=graphics.group({class:"apexcharts-".concat(type,"-series apexcharts-plot-series")});var coreUtils=new CoreUtils(this.ctx,w);this.yRatio=this.xyRatios.yRatio;this.zRatio=this.xyRatios.zRatio;this.xRatio=this.xyRatios.xRatio;this.baseLineY=this.xyRatios.baseLineY;series=coreUtils.getLogSeries(series);this.yRatio=coreUtils.getLogYRatios(this.yRatio);// push all series in an array, so we can draw in reverse order (for stacked charts)
var allSeries=[];for(var i=0;i<series.length;i++){series=this.lineHelpers.sameValueSeriesFix(i,series);var realIndex=w.globals.comboCharts?seriesIndex[i]:i;var translationsIndex=this.yRatio.length>1?realIndex:0;this._initSerieVariables(series,i,realIndex);var yArrj=[];// hold y values of current iterating series
var y2Arrj=[];// holds y2 values in range-area charts
var xArrj=[];// hold x values of current iterating series
var x=w.globals.padHorizontal+this.categoryAxisCorrection;var y=1;var linePaths=[];var areaPaths=[];this.ctx.series.addCollapsedClassToSeries(this.elSeries,realIndex);if(w.globals.isXNumeric&&w.globals.seriesX.length>0){x=(w.globals.seriesX[realIndex][0]-w.globals.minX)/this.xRatio;}xArrj.push(x);var pX=x;var pY=void 0;var pY2=void 0;var prevX=pX;var prevY=this.zeroY;var prevY2=this.zeroY;var lineYPosition=0;// the first value in the current series is not null or undefined
var firstPrevY=this.lineHelpers.determineFirstPrevY({i:i,series:series,prevY:prevY,lineYPosition:lineYPosition,translationsIndex:translationsIndex});prevY=firstPrevY.prevY;if(w.config.stroke.curve==='monotonCubic'&&series[i][0]===null){// we have to discard the y position if 1st dataPoint is null as it causes issues with monotoneCubic path creation
yArrj.push(null);}else{yArrj.push(prevY);}pY=prevY;// y2 are needed for range-area charts
var firstPrevY2=void 0;if(type==='rangeArea'){firstPrevY2=this.lineHelpers.determineFirstPrevY({i:i,series:seriesRangeEnd,prevY:prevY2,lineYPosition:lineYPosition,translationsIndex:translationsIndex});prevY2=firstPrevY2.prevY;pY2=prevY2;y2Arrj.push(prevY2);}var pathsFrom=this._calculatePathsFrom({type:type,series:series,i:i,realIndex:realIndex,prevX:prevX,prevY:prevY,prevY2:prevY2});var iteratingOpts={type:type,series:series,realIndex:realIndex,translationsIndex:translationsIndex,i:i,x:x,y:y,pX:pX,pY:pY,pathsFrom:pathsFrom,linePaths:linePaths,areaPaths:areaPaths,seriesIndex:seriesIndex,lineYPosition:lineYPosition,xArrj:xArrj,yArrj:yArrj,y2Arrj:y2Arrj,seriesRangeEnd:seriesRangeEnd};var paths=this._iterateOverDataPoints(_objectSpread2(_objectSpread2({},iteratingOpts),{},{iterations:type==='rangeArea'?series[i].length-1:undefined,isRangeStart:true}));if(type==='rangeArea'){var pathsFrom2=this._calculatePathsFrom({series:seriesRangeEnd,i:i,realIndex:realIndex,prevX:prevX,prevY:prevY2});var rangePaths=this._iterateOverDataPoints(_objectSpread2(_objectSpread2({},iteratingOpts),{},{series:seriesRangeEnd,pY:pY2,pathsFrom:pathsFrom2,iterations:seriesRangeEnd[i].length-1,isRangeStart:false}));paths.linePaths[0]=rangePaths.linePath+paths.linePath;paths.pathFromLine=rangePaths.pathFromLine+paths.pathFromLine;}this._handlePaths({type:type,realIndex:realIndex,i:i,paths:paths});this.elSeries.add(this.elPointsMain);this.elSeries.add(this.elDataLabelsWrap);allSeries.push(this.elSeries);}if(typeof((_w$config$series$=w.config.series[0])===null||_w$config$series$===void 0?void 0:_w$config$series$.zIndex)!=='undefined'){allSeries.sort(function(a,b){return Number(a.node.getAttribute('zIndex'))-Number(b.node.getAttribute('zIndex'));});}if(w.config.chart.stacked){for(var s=allSeries.length;s>0;s--){ret.add(allSeries[s-1]);}}else{for(var _s=0;_s<allSeries.length;_s++){ret.add(allSeries[_s]);}}return ret;}},{key:"_initSerieVariables",value:function _initSerieVariables(series,i,realIndex){var w=this.w;var graphics=new Graphics(this.ctx);// width divided into equal parts
this.xDivision=w.globals.gridWidth/(w.globals.dataPoints-(w.config.xaxis.tickPlacement==='on'?1:0));this.strokeWidth=Array.isArray(w.config.stroke.width)?w.config.stroke.width[realIndex]:w.config.stroke.width;var translationsIndex=0;if(this.yRatio.length>1){this.yaxisIndex=w.globals.seriesYAxisReverseMap[realIndex];translationsIndex=realIndex;}this.isReversed=w.config.yaxis[this.yaxisIndex]&&w.config.yaxis[this.yaxisIndex].reversed;// zeroY is the 0 value in y series which can be used in negative charts
this.zeroY=w.globals.gridHeight-this.baseLineY[translationsIndex]-(this.isReversed?w.globals.gridHeight:0)+(this.isReversed?this.baseLineY[translationsIndex]*2:0);this.areaBottomY=this.zeroY;if(this.zeroY>w.globals.gridHeight||w.config.plotOptions.area.fillTo==='end'){this.areaBottomY=w.globals.gridHeight;}this.categoryAxisCorrection=this.xDivision/2;// el to which series will be drawn
this.elSeries=graphics.group({class:"apexcharts-series",zIndex:typeof w.config.series[realIndex].zIndex!=='undefined'?w.config.series[realIndex].zIndex:realIndex,seriesName:Utils$1.escapeString(w.globals.seriesNames[realIndex])});// points
this.elPointsMain=graphics.group({class:'apexcharts-series-markers-wrap','data:realIndex':realIndex});// eldatalabels
this.elDataLabelsWrap=graphics.group({class:'apexcharts-datalabels','data:realIndex':realIndex});var longestSeries=series[i].length===w.globals.dataPoints;this.elSeries.attr({'data:longestSeries':longestSeries,rel:i+1,'data:realIndex':realIndex});this.appendPathFrom=true;}},{key:"_calculatePathsFrom",value:function _calculatePathsFrom(_ref){var type=_ref.type,series=_ref.series,i=_ref.i,realIndex=_ref.realIndex,prevX=_ref.prevX,prevY=_ref.prevY,prevY2=_ref.prevY2;var w=this.w;var graphics=new Graphics(this.ctx);var linePath,areaPath,pathFromLine,pathFromArea;if(series[i][0]===null){// when the first value itself is null, we need to move the pointer to a location where a null value is not found
for(var s=0;s<series[i].length;s++){if(series[i][s]!==null){prevX=this.xDivision*s;prevY=this.zeroY-series[i][s]/this.yRatio[realIndex];linePath=graphics.move(prevX,prevY);areaPath=graphics.move(prevX,this.areaBottomY);break;}}}else{linePath=graphics.move(prevX,prevY);if(type==='rangeArea'){linePath=graphics.move(prevX,prevY2)+graphics.line(prevX,prevY);}areaPath=graphics.move(prevX,this.areaBottomY)+graphics.line(prevX,prevY);}pathFromLine=graphics.move(-1,this.zeroY)+graphics.line(-1,this.zeroY);pathFromArea=graphics.move(-1,this.zeroY)+graphics.line(-1,this.zeroY);if(w.globals.previousPaths.length>0){var pathFrom=this.lineHelpers.checkPreviousPaths({pathFromLine:pathFromLine,pathFromArea:pathFromArea,realIndex:realIndex});pathFromLine=pathFrom.pathFromLine;pathFromArea=pathFrom.pathFromArea;}return{prevX:prevX,prevY:prevY,linePath:linePath,areaPath:areaPath,pathFromLine:pathFromLine,pathFromArea:pathFromArea};}},{key:"_handlePaths",value:function _handlePaths(_ref2){var type=_ref2.type,realIndex=_ref2.realIndex,i=_ref2.i,paths=_ref2.paths;var w=this.w;var graphics=new Graphics(this.ctx);var fill=new Fill(this.ctx);// push all current y values array to main PrevY Array
this.prevSeriesY.push(paths.yArrj);// push all x val arrays into main xArr
w.globals.seriesXvalues[realIndex]=paths.xArrj;w.globals.seriesYvalues[realIndex]=paths.yArrj;var forecast=w.config.forecastDataPoints;if(forecast.count>0&&type!=='rangeArea'){var forecastCutoff=w.globals.seriesXvalues[realIndex][w.globals.seriesXvalues[realIndex].length-forecast.count-1];var elForecastMask=graphics.drawRect(forecastCutoff,0,w.globals.gridWidth,w.globals.gridHeight,0);w.globals.dom.elForecastMask.appendChild(elForecastMask.node);var elNonForecastMask=graphics.drawRect(0,0,forecastCutoff,w.globals.gridHeight,0);w.globals.dom.elNonForecastMask.appendChild(elNonForecastMask.node);}// these elements will be shown after area path animation completes
if(!this.pointsChart){w.globals.delayedElements.push({el:this.elPointsMain.node,index:realIndex});}var defaultRenderedPathOptions={i:i,realIndex:realIndex,animationDelay:i,initialSpeed:w.config.chart.animations.speed,dataChangeSpeed:w.config.chart.animations.dynamicAnimation.speed,className:"apexcharts-".concat(type)};if(type==='area'){var pathFill=fill.fillPath({seriesNumber:realIndex});for(var p=0;p<paths.areaPaths.length;p++){var renderedPath=graphics.renderPaths(_objectSpread2(_objectSpread2({},defaultRenderedPathOptions),{},{pathFrom:paths.pathFromArea,pathTo:paths.areaPaths[p],stroke:'none',strokeWidth:0,strokeLineCap:null,fill:pathFill}));this.elSeries.add(renderedPath);}}if(w.config.stroke.show&&!this.pointsChart){var lineFill=null;if(type==='line'){lineFill=fill.fillPath({seriesNumber:realIndex,i:i});}else{if(w.config.stroke.fill.type==='solid'){lineFill=w.globals.stroke.colors[realIndex];}else{var prevFill=w.config.fill;w.config.fill=w.config.stroke.fill;lineFill=fill.fillPath({seriesNumber:realIndex,i:i});w.config.fill=prevFill;}}// range-area paths are drawn using linePaths
for(var _p=0;_p<paths.linePaths.length;_p++){var _pathFill=lineFill;if(type==='rangeArea'){_pathFill=fill.fillPath({seriesNumber:realIndex});}var linePathCommonOpts=_objectSpread2(_objectSpread2({},defaultRenderedPathOptions),{},{pathFrom:paths.pathFromLine,pathTo:paths.linePaths[_p],stroke:lineFill,strokeWidth:this.strokeWidth,strokeLineCap:w.config.stroke.lineCap,fill:type==='rangeArea'?_pathFill:'none'});var _renderedPath=graphics.renderPaths(linePathCommonOpts);this.elSeries.add(_renderedPath);_renderedPath.attr('fill-rule',"evenodd");if(forecast.count>0&&type!=='rangeArea'){var renderedForecastPath=graphics.renderPaths(linePathCommonOpts);renderedForecastPath.node.setAttribute('stroke-dasharray',forecast.dashArray);if(forecast.strokeWidth){renderedForecastPath.node.setAttribute('stroke-width',forecast.strokeWidth);}this.elSeries.add(renderedForecastPath);renderedForecastPath.attr('clip-path',"url(#forecastMask".concat(w.globals.cuid,")"));_renderedPath.attr('clip-path',"url(#nonForecastMask".concat(w.globals.cuid,")"));}}}}},{key:"_iterateOverDataPoints",value:function _iterateOverDataPoints(_ref3){var _this=this,_this$w$config$series;var type=_ref3.type,series=_ref3.series,iterations=_ref3.iterations,realIndex=_ref3.realIndex,translationsIndex=_ref3.translationsIndex,i=_ref3.i,x=_ref3.x,y=_ref3.y,pX=_ref3.pX,pY=_ref3.pY,pathsFrom=_ref3.pathsFrom,linePaths=_ref3.linePaths,areaPaths=_ref3.areaPaths,seriesIndex=_ref3.seriesIndex,lineYPosition=_ref3.lineYPosition,xArrj=_ref3.xArrj,yArrj=_ref3.yArrj,y2Arrj=_ref3.y2Arrj,isRangeStart=_ref3.isRangeStart,seriesRangeEnd=_ref3.seriesRangeEnd;var w=this.w;var graphics=new Graphics(this.ctx);var yRatio=this.yRatio;var prevY=pathsFrom.prevY,linePath=pathsFrom.linePath,areaPath=pathsFrom.areaPath,pathFromLine=pathsFrom.pathFromLine,pathFromArea=pathsFrom.pathFromArea;var minY=Utils$1.isNumber(w.globals.minYArr[realIndex])?w.globals.minYArr[realIndex]:w.globals.minY;if(!iterations){iterations=w.globals.dataPoints>1?w.globals.dataPoints-1:w.globals.dataPoints;}var getY=function getY(_y,lineYPos){return lineYPos-_y/yRatio[translationsIndex]+(_this.isReversed?_y/yRatio[translationsIndex]:0)*2;};var y2=y;var stackSeries=w.config.chart.stacked&&!w.globals.comboCharts||w.config.chart.stacked&&w.globals.comboCharts&&(!this.w.config.chart.stackOnlyBar||((_this$w$config$series=this.w.config.series[realIndex])===null||_this$w$config$series===void 0?void 0:_this$w$config$series.type)==='bar');for(var j=0;j<iterations;j++){var isNull=typeof series[i][j+1]==='undefined'||series[i][j+1]===null;if(w.globals.isXNumeric){var sX=w.globals.seriesX[realIndex][j+1];if(typeof w.globals.seriesX[realIndex][j+1]==='undefined'){/* fix #374 */sX=w.globals.seriesX[realIndex][iterations-1];}x=(sX-w.globals.minX)/this.xRatio;}else{x=x+this.xDivision;}if(stackSeries){if(i>0&&w.globals.collapsedSeries.length<w.config.series.length-1){// a collapsed series in a stacked bar chart may provide wrong result for the next series, hence find the prevIndex of prev series which is not collapsed - fixes apexcharts.js#1372
var prevIndex=function prevIndex(pi){var pii=pi;for(var cpi=0;cpi<w.globals.series.length;cpi++){if(w.globals.collapsedSeriesIndices.indexOf(pi)>-1){pii--;break;}}return pii>=0?pii:0;};lineYPosition=this.prevSeriesY[prevIndex(i-1)][j+1];}else{// the first series will not have prevY values
lineYPosition=this.zeroY;}}else{lineYPosition=this.zeroY;}if(isNull){y=getY(minY,lineYPosition);}else{y=getY(series[i][j+1],lineYPosition);if(type==='rangeArea'){y2=getY(seriesRangeEnd[i][j+1],lineYPosition);}}// push current X
xArrj.push(x);// push current Y that will be used as next series's bottom position
if(isNull&&w.config.stroke.curve==='smooth'){yArrj.push(null);}else{yArrj.push(y);}y2Arrj.push(y2);var pointsPos=this.lineHelpers.calculatePoints({series:series,x:x,y:y,realIndex:realIndex,i:i,j:j,prevY:prevY});var calculatedPaths=this._createPaths({type:type,series:series,i:i,realIndex:realIndex,j:j,x:x,y:y,y2:y2,xArrj:xArrj,yArrj:yArrj,y2Arrj:y2Arrj,pX:pX,pY:pY,linePath:linePath,areaPath:areaPath,linePaths:linePaths,areaPaths:areaPaths,seriesIndex:seriesIndex,isRangeStart:isRangeStart});areaPaths=calculatedPaths.areaPaths;linePaths=calculatedPaths.linePaths;pX=calculatedPaths.pX;pY=calculatedPaths.pY;areaPath=calculatedPaths.areaPath;linePath=calculatedPaths.linePath;if(this.appendPathFrom&&!(w.config.stroke.curve==='monotoneCubic'&&type==='rangeArea')){pathFromLine=pathFromLine+graphics.line(x,this.zeroY);pathFromArea=pathFromArea+graphics.line(x,this.zeroY);}this.handleNullDataPoints(series,pointsPos,i,j,realIndex);this._handleMarkersAndLabels({type:type,pointsPos:pointsPos,i:i,j:j,realIndex:realIndex,isRangeStart:isRangeStart});}return{yArrj:yArrj,xArrj:xArrj,pathFromArea:pathFromArea,areaPaths:areaPaths,pathFromLine:pathFromLine,linePaths:linePaths,linePath:linePath,areaPath:areaPath};}},{key:"_handleMarkersAndLabels",value:function _handleMarkersAndLabels(_ref4){var type=_ref4.type,pointsPos=_ref4.pointsPos,isRangeStart=_ref4.isRangeStart,i=_ref4.i,j=_ref4.j,realIndex=_ref4.realIndex;var w=this.w;var dataLabels=new DataLabels(this.ctx);if(!this.pointsChart){if(w.globals.series[i].length>1){this.elPointsMain.node.classList.add('apexcharts-element-hidden');}var elPointsWrap=this.markers.plotChartMarkers(pointsPos,realIndex,j+1);if(elPointsWrap!==null){this.elPointsMain.add(elPointsWrap);}}else{// scatter / bubble chart points creation
this.scatter.draw(this.elSeries,j,{realIndex:realIndex,pointsPos:pointsPos,zRatio:this.zRatio,elParent:this.elPointsMain});}var drawnLabels=dataLabels.drawDataLabel({type:type,isRangeStart:isRangeStart,pos:pointsPos,i:realIndex,j:j+1});if(drawnLabels!==null){this.elDataLabelsWrap.add(drawnLabels);}}},{key:"_createPaths",value:function _createPaths(_ref5){var type=_ref5.type,series=_ref5.series,i=_ref5.i,realIndex=_ref5.realIndex,j=_ref5.j,x=_ref5.x,y=_ref5.y,xArrj=_ref5.xArrj,yArrj=_ref5.yArrj,y2=_ref5.y2,y2Arrj=_ref5.y2Arrj,pX=_ref5.pX,pY=_ref5.pY,linePath=_ref5.linePath,areaPath=_ref5.areaPath,linePaths=_ref5.linePaths,areaPaths=_ref5.areaPaths,seriesIndex=_ref5.seriesIndex,isRangeStart=_ref5.isRangeStart;var w=this.w;var graphics=new Graphics(this.ctx);var curve=w.config.stroke.curve;var areaBottomY=this.areaBottomY;if(Array.isArray(w.config.stroke.curve)){if(Array.isArray(seriesIndex)){curve=w.config.stroke.curve[seriesIndex[i]];}else{curve=w.config.stroke.curve[i];}}if(type==='rangeArea'&&(w.globals.hasNullValues||w.config.forecastDataPoints.count>0)&&curve==='monotoneCubic'){curve='straight';}if(curve==='monotoneCubic'){var shouldRenderMonotone=type==='rangeArea'?xArrj.length===w.globals.dataPoints:j===series[i].length-2;var smoothInputs=xArrj.map(function(_,i){return[xArrj[i],yArrj[i]];}).filter(function(_){return _[1]!==null;});if(shouldRenderMonotone&&smoothInputs.length>1){var points=spline.points(smoothInputs);linePath+=svgPath(points);if(series[i][0]===null){// if the first dataPoint is null, we use the linePath directly
areaPath=linePath;}else{// else, we append the areaPath
areaPath+=svgPath(points);}if(type==='rangeArea'&&isRangeStart){// draw the line to connect y with y2; then draw the other end of range
linePath+=graphics.line(xArrj[xArrj.length-1],y2Arrj[y2Arrj.length-1]);var xArrjInversed=xArrj.slice().reverse();var y2ArrjInversed=y2Arrj.slice().reverse();var smoothInputsY2=xArrjInversed.map(function(_,i){return[xArrjInversed[i],y2ArrjInversed[i]];});var pointsY2=spline.points(smoothInputsY2);linePath+=svgPath(pointsY2);// in range area, we don't have separate line and area path
areaPath=linePath;}else{areaPath+=graphics.line(smoothInputs[smoothInputs.length-1][0],areaBottomY)+graphics.line(smoothInputs[0][0],areaBottomY)+graphics.move(smoothInputs[0][0],smoothInputs[0][1])+'z';}linePaths.push(linePath);areaPaths.push(areaPath);}}else if(curve==='smooth'){var length=(x-pX)*0.35;if(w.globals.hasNullValues){if(series[i][j]!==null){if(series[i][j+1]!==null){linePath=graphics.move(pX,pY)+graphics.curve(pX+length,pY,x-length,y,x+1,y);areaPath=graphics.move(pX+1,pY)+graphics.curve(pX+length,pY,x-length,y,x+1,y)+graphics.line(x,areaBottomY)+graphics.line(pX,areaBottomY)+'z';}else{linePath=graphics.move(pX,pY);areaPath=graphics.move(pX,pY)+'z';}}linePaths.push(linePath);areaPaths.push(areaPath);}else{linePath=linePath+graphics.curve(pX+length,pY,x-length,y,x,y);areaPath=areaPath+graphics.curve(pX+length,pY,x-length,y,x,y);}pX=x;pY=y;if(j===series[i].length-2){// last loop, close path
areaPath=areaPath+graphics.curve(pX,pY,x,y,x,areaBottomY)+graphics.move(x,y)+'z';if(type==='rangeArea'&&isRangeStart){linePath=linePath+graphics.curve(pX,pY,x,y,x,y2)+graphics.move(x,y2)+'z';}else{if(!w.globals.hasNullValues){linePaths.push(linePath);areaPaths.push(areaPath);}}}}else{if(series[i][j+1]===null){linePath=linePath+graphics.move(x,y);var numericOrCatX=w.globals.isXNumeric?(w.globals.seriesX[realIndex][j]-w.globals.minX)/this.xRatio:x-this.xDivision;areaPath=areaPath+graphics.line(numericOrCatX,areaBottomY)+graphics.move(x,y)+'z';}if(series[i][j]===null){linePath=linePath+graphics.move(x,y);areaPath=areaPath+graphics.move(x,areaBottomY);}if(curve==='stepline'){linePath=linePath+graphics.line(x,null,'H')+graphics.line(null,y,'V');areaPath=areaPath+graphics.line(x,null,'H')+graphics.line(null,y,'V');}else if(curve==='linestep'){linePath=linePath+graphics.line(null,y,'V')+graphics.line(x,null,'H');areaPath=areaPath+graphics.line(null,y,'V')+graphics.line(x,null,'H');}else if(curve==='straight'){linePath=linePath+graphics.line(x,y);areaPath=areaPath+graphics.line(x,y);}if(j===series[i].length-2){// last loop, close path
areaPath=areaPath+graphics.line(x,areaBottomY)+graphics.move(x,y)+'z';if(type==='rangeArea'&&isRangeStart){linePath=linePath+graphics.line(x,y2)+graphics.move(x,y2)+'z';}else{linePaths.push(linePath);areaPaths.push(areaPath);}}}return{linePaths:linePaths,areaPaths:areaPaths,pX:pX,pY:pY,linePath:linePath,areaPath:areaPath};}},{key:"handleNullDataPoints",value:function handleNullDataPoints(series,pointsPos,i,j,realIndex){var w=this.w;if(series[i][j]===null&&w.config.markers.showNullDataPoints||series[i].length===1){// fixes apexcharts.js#1282, #1252
var elPointsWrap=this.markers.plotChartMarkers(pointsPos,realIndex,j+1,this.strokeWidth-w.config.markers.strokeWidth/2,true);if(elPointsWrap!==null){this.elPointsMain.add(elPointsWrap);}}}}]);return Line;}();/*
   * treemap-squarify.js - open source implementation of squarified treemaps
   *
   * Treemap Squared 0.5 - Treemap Charting library
   *
   * https://github.com/imranghory/treemap-squared/
   *
   * Copyright (c) 2012 Imran Ghory (imranghory@gmail.com)
   * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
   *
   *
   * Implementation of the squarify treemap algorithm described in:
   *
   * Bruls, Mark; Huizing, Kees; van Wijk, Jarke J. (2000), "Squarified treemaps"
   * in de Leeuw, W.; van Liere, R., Data Visualization 2000:
   * Proc. Joint Eurographics and IEEE TCVG Symp. on Visualization, Springer-Verlag, pp. 33–42.
   *
   * Paper is available online at: http://www.win.tue.nl/~vanwijk/stm.pdf
   *
   * The code in this file is completeley decoupled from the drawing code so it should be trivial
   * to port it to any other vector drawing library. Given an array of datapoints this library returns
   * an array of cartesian coordinates that represent the rectangles that make up the treemap.
   *
   * The library also supports multidimensional data (nested treemaps) and performs normalization on the data.
   *
   * See the README file for more details.
   */window.TreemapSquared={};(function(){window.TreemapSquared.generate=function(){function Container(xoffset,yoffset,width,height){this.xoffset=xoffset;// offset from the the top left hand corner
this.yoffset=yoffset;// ditto
this.height=height;this.width=width;this.shortestEdge=function(){return Math.min(this.height,this.width);};// getCoordinates - for a row of boxes which we've placed
//                  return an array of their cartesian coordinates
this.getCoordinates=function(row){var coordinates=[];var subxoffset=this.xoffset,subyoffset=this.yoffset;//our offset within the container
var areawidth=sumArray(row)/this.height;var areaheight=sumArray(row)/this.width;var i;if(this.width>=this.height){for(i=0;i<row.length;i++){coordinates.push([subxoffset,subyoffset,subxoffset+areawidth,subyoffset+row[i]/areawidth]);subyoffset=subyoffset+row[i]/areawidth;}}else{for(i=0;i<row.length;i++){coordinates.push([subxoffset,subyoffset,subxoffset+row[i]/areaheight,subyoffset+areaheight]);subxoffset=subxoffset+row[i]/areaheight;}}return coordinates;};// cutArea - once we've placed some boxes into an row we then need to identify the remaining area,
//           this function takes the area of the boxes we've placed and calculates the location and
//           dimensions of the remaining space and returns a container box defined by the remaining area
this.cutArea=function(area){var newcontainer;if(this.width>=this.height){var areawidth=area/this.height;var newwidth=this.width-areawidth;newcontainer=new Container(this.xoffset+areawidth,this.yoffset,newwidth,this.height);}else{var areaheight=area/this.width;var newheight=this.height-areaheight;newcontainer=new Container(this.xoffset,this.yoffset+areaheight,this.width,newheight);}return newcontainer;};}// normalize - the Bruls algorithm assumes we're passing in areas that nicely fit into our
//             container box, this method takes our raw data and normalizes the data values into
//             area values so that this assumption is valid.
function normalize(data,area){var normalizeddata=[];var sum=sumArray(data);var multiplier=area/sum;var i;for(i=0;i<data.length;i++){normalizeddata[i]=data[i]*multiplier;}return normalizeddata;}// treemapMultidimensional - takes multidimensional data (aka [[23,11],[11,32]] - nested array)
//                           and recursively calls itself using treemapSingledimensional
//                           to create a patchwork of treemaps and merge them
function treemapMultidimensional(data,width,height,xoffset,yoffset){xoffset=typeof xoffset==='undefined'?0:xoffset;yoffset=typeof yoffset==='undefined'?0:yoffset;var mergeddata=[];var mergedtreemap;var results=[];var i;if(isArray(data[0])){// if we've got more dimensions of depth
for(i=0;i<data.length;i++){mergeddata[i]=sumMultidimensionalArray(data[i]);}mergedtreemap=treemapSingledimensional(mergeddata,width,height,xoffset,yoffset);for(i=0;i<data.length;i++){results.push(treemapMultidimensional(data[i],mergedtreemap[i][2]-mergedtreemap[i][0],mergedtreemap[i][3]-mergedtreemap[i][1],mergedtreemap[i][0],mergedtreemap[i][1]));}}else{results=treemapSingledimensional(data,width,height,xoffset,yoffset);}return results;}// treemapSingledimensional - simple wrapper around squarify
function treemapSingledimensional(data,width,height,xoffset,yoffset){xoffset=typeof xoffset==='undefined'?0:xoffset;yoffset=typeof yoffset==='undefined'?0:yoffset;var rawtreemap=squarify(normalize(data,width*height),[],new Container(xoffset,yoffset,width,height),[]);return flattenTreemap(rawtreemap);}// flattenTreemap - squarify implementation returns an array of arrays of coordinates
//                  because we have a new array everytime we switch to building a new row
//                  this converts it into an array of coordinates.
function flattenTreemap(rawtreemap){var flattreemap=[];var i,j;for(i=0;i<rawtreemap.length;i++){for(j=0;j<rawtreemap[i].length;j++){flattreemap.push(rawtreemap[i][j]);}}return flattreemap;}// squarify  - as per the Bruls paper
//             plus coordinates stack and containers so we get
//             usable data out of it
function squarify(data,currentrow,container,stack){var length;var nextdatapoint;var newcontainer;if(data.length===0){stack.push(container.getCoordinates(currentrow));return;}length=container.shortestEdge();nextdatapoint=data[0];if(improvesRatio(currentrow,nextdatapoint,length)){currentrow.push(nextdatapoint);squarify(data.slice(1),currentrow,container,stack);}else{newcontainer=container.cutArea(sumArray(currentrow),stack);stack.push(container.getCoordinates(currentrow));squarify(data,[],newcontainer,stack);}return stack;}// improveRatio - implements the worse calculation and comparision as given in Bruls
//                (note the error in the original paper; fixed here)
function improvesRatio(currentrow,nextnode,length){var newrow;if(currentrow.length===0){return true;}newrow=currentrow.slice();newrow.push(nextnode);var currentratio=calculateRatio(currentrow,length);var newratio=calculateRatio(newrow,length);// the pseudocode in the Bruls paper has the direction of the comparison
// wrong, this is the correct one.
return currentratio>=newratio;}// calculateRatio - calculates the maximum width to height ratio of the
//                  boxes in this row
function calculateRatio(row,length){var min=Math.min.apply(Math,row);var max=Math.max.apply(Math,row);var sum=sumArray(row);return Math.max(Math.pow(length,2)*max/Math.pow(sum,2),Math.pow(sum,2)/(Math.pow(length,2)*min));}// isArray - checks if arr is an array
function isArray(arr){return arr&&arr.constructor===Array;}// sumArray - sums a single dimensional array
function sumArray(arr){var sum=0;var i;for(i=0;i<arr.length;i++){sum+=arr[i];}return sum;}// sumMultidimensionalArray - sums the values in a nested array (aka [[0,1],[[2,3]]])
function sumMultidimensionalArray(arr){var i,total=0;if(isArray(arr[0])){for(i=0;i<arr.length;i++){total+=sumMultidimensionalArray(arr[i]);}}else{total=sumArray(arr);}return total;}return treemapMultidimensional;}();})();/**
   * ApexCharts TreemapChart Class.
   * @module TreemapChart
   **/var TreemapChart=/*#__PURE__*/function(){function TreemapChart(ctx,xyRatios){_classCallCheck(this,TreemapChart);this.ctx=ctx;this.w=ctx.w;this.strokeWidth=this.w.config.stroke.width;this.helpers=new TreemapHelpers(ctx);this.dynamicAnim=this.w.config.chart.animations.dynamicAnimation;this.labels=[];}_createClass(TreemapChart,[{key:"draw",value:function draw(series){var _this=this;var w=this.w;var graphics=new Graphics(this.ctx);var fill=new Fill(this.ctx);var ret=graphics.group({class:'apexcharts-treemap'});if(w.globals.noData)return ret;var ser=[];series.forEach(function(s){var d=s.map(function(v){return Math.abs(v);});ser.push(d);});this.negRange=this.helpers.checkColorRange();w.config.series.forEach(function(s,i){s.data.forEach(function(l){if(!Array.isArray(_this.labels[i]))_this.labels[i]=[];_this.labels[i].push(l.x);});});var nodes=window.TreemapSquared.generate(ser,w.globals.gridWidth,w.globals.gridHeight);nodes.forEach(function(node,i){var elSeries=graphics.group({class:"apexcharts-series apexcharts-treemap-series",seriesName:Utils$1.escapeString(w.globals.seriesNames[i]),rel:i+1,'data:realIndex':i});if(w.config.chart.dropShadow.enabled){var shadow=w.config.chart.dropShadow;var filters=new Filters(_this.ctx);filters.dropShadow(ret,shadow,i);}var elDataLabelWrap=graphics.group({class:'apexcharts-data-labels'});node.forEach(function(r,j){var x1=r[0];var y1=r[1];var x2=r[2];var y2=r[3];var elRect=graphics.drawRect(x1,y1,x2-x1,y2-y1,w.config.plotOptions.treemap.borderRadius,'#fff',1,_this.strokeWidth,w.config.plotOptions.treemap.useFillColorAsStroke?color:w.globals.stroke.colors[i]);elRect.attr({cx:x1,cy:y1,index:i,i:i,j:j,width:x2-x1,height:y2-y1});var colorProps=_this.helpers.getShadeColor(w.config.chart.type,i,j,_this.negRange);var color=colorProps.color;if(typeof w.config.series[i].data[j]!=='undefined'&&w.config.series[i].data[j].fillColor){color=w.config.series[i].data[j].fillColor;}var pathFill=fill.fillPath({color:color,seriesNumber:i,dataPointIndex:j});elRect.node.classList.add('apexcharts-treemap-rect');elRect.attr({fill:pathFill});_this.helpers.addListeners(elRect);var fromRect={x:x1+(x2-x1)/2,y:y1+(y2-y1)/2,width:0,height:0};var toRect={x:x1,y:y1,width:x2-x1,height:y2-y1};if(w.config.chart.animations.enabled&&!w.globals.dataChanged){var speed=1;if(!w.globals.resized){speed=w.config.chart.animations.speed;}_this.animateTreemap(elRect,fromRect,toRect,speed);}if(w.globals.dataChanged){var _speed=1;if(_this.dynamicAnim.enabled&&w.globals.shouldAnimate){_speed=_this.dynamicAnim.speed;if(w.globals.previousPaths[i]&&w.globals.previousPaths[i][j]&&w.globals.previousPaths[i][j].rect){fromRect=w.globals.previousPaths[i][j].rect;}_this.animateTreemap(elRect,fromRect,toRect,_speed);}}var fontSize=_this.getFontSize(r);var formattedText=w.config.dataLabels.formatter(_this.labels[i][j],{value:w.globals.series[i][j],seriesIndex:i,dataPointIndex:j,w:w});if(w.config.plotOptions.treemap.dataLabels.format==='truncate'){fontSize=parseInt(w.config.dataLabels.style.fontSize,10);formattedText=_this.truncateLabels(formattedText,fontSize,x1,y1,x2,y2);}var dataLabels=_this.helpers.calculateDataLabels({text:formattedText,x:(x1+x2)/2,y:(y1+y2)/2+_this.strokeWidth/2+fontSize/3,i:i,j:j,colorProps:colorProps,fontSize:fontSize,series:series});if(w.config.dataLabels.enabled&&dataLabels){_this.rotateToFitLabel(dataLabels,fontSize,formattedText,x1,y1,x2,y2);}elSeries.add(elRect);if(dataLabels!==null){elSeries.add(dataLabels);}});elSeries.add(elDataLabelWrap);ret.add(elSeries);});return ret;}// This calculates a font-size based upon
// average label length and the size of the box the label is
// going into. The maximum font size is set in chart config.
},{key:"getFontSize",value:function getFontSize(coordinates){var w=this.w;// total length of labels (i.e [["Italy"],["Spain", "Greece"]] -> 16)
function totalLabelLength(arr){var i,total=0;if(Array.isArray(arr[0])){for(i=0;i<arr.length;i++){total+=totalLabelLength(arr[i]);}}else{for(i=0;i<arr.length;i++){total+=arr[i].length;}}return total;}// count of labels (i.e [["Italy"],["Spain", "Greece"]] -> 3)
function countLabels(arr){var i,total=0;if(Array.isArray(arr[0])){for(i=0;i<arr.length;i++){total+=countLabels(arr[i]);}}else{for(i=0;i<arr.length;i++){total+=1;}}return total;}var averagelabelsize=totalLabelLength(this.labels)/countLabels(this.labels);function fontSize(width,height){// the font size should be proportional to the size of the box (and the value)
// otherwise you can end up creating a visual distortion where two boxes of identical
// size have different sized labels, and thus make it look as if the two boxes
// represent different sizes
var area=width*height;var arearoot=Math.pow(area,0.5);return Math.min(arearoot/averagelabelsize,parseInt(w.config.dataLabels.style.fontSize,10));}return fontSize(coordinates[2]-coordinates[0],coordinates[3]-coordinates[1]);}},{key:"rotateToFitLabel",value:function rotateToFitLabel(elText,fontSize,text,x1,y1,x2,y2){var graphics=new Graphics(this.ctx);var textRect=graphics.getTextRects(text,fontSize);//if the label fits better sideways then rotate it
if(textRect.width+this.w.config.stroke.width+5>x2-x1&&textRect.width<=y2-y1){var labelRotatingCenter=graphics.rotateAroundCenter(elText.node);elText.node.setAttribute('transform',"rotate(-90 ".concat(labelRotatingCenter.x," ").concat(labelRotatingCenter.y,") translate(").concat(textRect.height/3,")"));}}// This is an alternative label formatting method that uses a
// consistent font size, and trims the edge of long labels
},{key:"truncateLabels",value:function truncateLabels(text,fontSize,x1,y1,x2,y2){var graphics=new Graphics(this.ctx);var textRect=graphics.getTextRects(text,fontSize);// Determine max width based on ideal orientation of text
var labelMaxWidth=textRect.width+this.w.config.stroke.width+5>x2-x1&&y2-y1>x2-x1?y2-y1:x2-x1;var truncatedText=graphics.getTextBasedOnMaxWidth({text:text,maxWidth:labelMaxWidth,fontSize:fontSize});// Return empty label when text has been trimmed for very small rects
if(text.length!==truncatedText.length&&labelMaxWidth/fontSize<5){return'';}else{return truncatedText;}}},{key:"animateTreemap",value:function animateTreemap(el,fromRect,toRect,speed){var animations=new Animations(this.ctx);animations.animateRect(el,{x:fromRect.x,y:fromRect.y,width:fromRect.width,height:fromRect.height},{x:toRect.x,y:toRect.y,width:toRect.width,height:toRect.height},speed,function(){animations.animationCompleted(el);});}}]);return TreemapChart;}();var MINUTES_IN_DAY=24*60;var SECONDS_IN_DAY=MINUTES_IN_DAY*60;var MIN_ZOOM_DAYS=10/SECONDS_IN_DAY;/**
   * ApexCharts TimeScale Class for generating time ticks for x-axis.
   *
   * @module TimeScale
   **/var TimeScale=/*#__PURE__*/function(){function TimeScale(ctx){_classCallCheck(this,TimeScale);this.ctx=ctx;this.w=ctx.w;this.timeScaleArray=[];this.utc=this.w.config.xaxis.labels.datetimeUTC;}_createClass(TimeScale,[{key:"calculateTimeScaleTicks",value:function calculateTimeScaleTicks(minX,maxX){var _this=this;var w=this.w;// null check when no series to show
if(w.globals.allSeriesCollapsed){w.globals.labels=[];w.globals.timescaleLabels=[];return[];}var dt=new DateTime(this.ctx);var daysDiff=(maxX-minX)/(1000*SECONDS_IN_DAY);this.determineInterval(daysDiff);w.globals.disableZoomIn=false;w.globals.disableZoomOut=false;if(daysDiff<MIN_ZOOM_DAYS){w.globals.disableZoomIn=true;}else if(daysDiff>50000){w.globals.disableZoomOut=true;}var timeIntervals=dt.getTimeUnitsfromTimestamp(minX,maxX,this.utc);var daysWidthOnXAxis=w.globals.gridWidth/daysDiff;var hoursWidthOnXAxis=daysWidthOnXAxis/24;var minutesWidthOnXAxis=hoursWidthOnXAxis/60;var secondsWidthOnXAxis=minutesWidthOnXAxis/60;var numberOfHours=Math.floor(daysDiff*24);var numberOfMinutes=Math.floor(daysDiff*MINUTES_IN_DAY);var numberOfSeconds=Math.floor(daysDiff*SECONDS_IN_DAY);var numberOfDays=Math.floor(daysDiff);var numberOfMonths=Math.floor(daysDiff/30);var numberOfYears=Math.floor(daysDiff/365);var firstVal={minMillisecond:timeIntervals.minMillisecond,minSecond:timeIntervals.minSecond,minMinute:timeIntervals.minMinute,minHour:timeIntervals.minHour,minDate:timeIntervals.minDate,minMonth:timeIntervals.minMonth,minYear:timeIntervals.minYear};var currentMillisecond=firstVal.minMillisecond;var currentSecond=firstVal.minSecond;var currentMinute=firstVal.minMinute;var currentHour=firstVal.minHour;var currentMonthDate=firstVal.minDate;var currentDate=firstVal.minDate;var currentMonth=firstVal.minMonth;var currentYear=firstVal.minYear;var params={firstVal:firstVal,currentMillisecond:currentMillisecond,currentSecond:currentSecond,currentMinute:currentMinute,currentHour:currentHour,currentMonthDate:currentMonthDate,currentDate:currentDate,currentMonth:currentMonth,currentYear:currentYear,daysWidthOnXAxis:daysWidthOnXAxis,hoursWidthOnXAxis:hoursWidthOnXAxis,minutesWidthOnXAxis:minutesWidthOnXAxis,secondsWidthOnXAxis:secondsWidthOnXAxis,numberOfSeconds:numberOfSeconds,numberOfMinutes:numberOfMinutes,numberOfHours:numberOfHours,numberOfDays:numberOfDays,numberOfMonths:numberOfMonths,numberOfYears:numberOfYears};switch(this.tickInterval){case'years':{this.generateYearScale(params);break;}case'months':case'half_year':{this.generateMonthScale(params);break;}case'months_days':case'months_fortnight':case'days':case'week_days':{this.generateDayScale(params);break;}case'hours':{this.generateHourScale(params);break;}case'minutes_fives':case'minutes':this.generateMinuteScale(params);break;case'seconds_tens':case'seconds_fives':case'seconds':this.generateSecondScale(params);break;}// first, we will adjust the month values index
// as in the upper function, it is starting from 0
// we will start them from 1
var adjustedMonthInTimeScaleArray=this.timeScaleArray.map(function(ts){var defaultReturn={position:ts.position,unit:ts.unit,year:ts.year,day:ts.day?ts.day:1,hour:ts.hour?ts.hour:0,month:ts.month+1};if(ts.unit==='month'){return _objectSpread2(_objectSpread2({},defaultReturn),{},{day:1,value:ts.value+1});}else if(ts.unit==='day'||ts.unit==='hour'){return _objectSpread2(_objectSpread2({},defaultReturn),{},{value:ts.value});}else if(ts.unit==='minute'){return _objectSpread2(_objectSpread2({},defaultReturn),{},{value:ts.value,minute:ts.value});}else if(ts.unit==='second'){return _objectSpread2(_objectSpread2({},defaultReturn),{},{value:ts.value,minute:ts.minute,second:ts.second});}return ts;});var filteredTimeScale=adjustedMonthInTimeScaleArray.filter(function(ts){var modulo=1;var ticks=Math.ceil(w.globals.gridWidth/120);var value=ts.value;if(w.config.xaxis.tickAmount!==undefined){ticks=w.config.xaxis.tickAmount;}if(adjustedMonthInTimeScaleArray.length>ticks){modulo=Math.floor(adjustedMonthInTimeScaleArray.length/ticks);}var shouldNotSkipUnit=false;// there is a big change in unit i.e days to months
var shouldNotPrint=false;// should skip these values
switch(_this.tickInterval){case'years':// make years label denser
if(ts.unit==='year'){shouldNotSkipUnit=true;}break;case'half_year':modulo=7;if(ts.unit==='year'){shouldNotSkipUnit=true;}break;case'months':modulo=1;if(ts.unit==='year'){shouldNotSkipUnit=true;}break;case'months_fortnight':modulo=15;if(ts.unit==='year'||ts.unit==='month'){shouldNotSkipUnit=true;}if(value===30){shouldNotPrint=true;}break;case'months_days':modulo=10;if(ts.unit==='month'){shouldNotSkipUnit=true;}if(value===30){shouldNotPrint=true;}break;case'week_days':modulo=8;if(ts.unit==='month'){shouldNotSkipUnit=true;}break;case'days':modulo=1;if(ts.unit==='month'){shouldNotSkipUnit=true;}break;case'hours':if(ts.unit==='day'){shouldNotSkipUnit=true;}break;case'minutes_fives':if(value%5!==0){shouldNotPrint=true;}break;case'seconds_tens':if(value%10!==0){shouldNotPrint=true;}break;case'seconds_fives':if(value%5!==0){shouldNotPrint=true;}break;}if(_this.tickInterval==='hours'||_this.tickInterval==='minutes_fives'||_this.tickInterval==='seconds_tens'||_this.tickInterval==='seconds_fives'){if(!shouldNotPrint){return true;}}else{if((value%modulo===0||shouldNotSkipUnit)&&!shouldNotPrint){return true;}}});return filteredTimeScale;}},{key:"recalcDimensionsBasedOnFormat",value:function recalcDimensionsBasedOnFormat(filteredTimeScale,inverted){var w=this.w;var reformattedTimescaleArray=this.formatDates(filteredTimeScale);var removedOverlappingTS=this.removeOverlappingTS(reformattedTimescaleArray);w.globals.timescaleLabels=removedOverlappingTS.slice();// at this stage, we need to re-calculate coords of the grid as timeline labels may have altered the xaxis labels coords
// The reason we can't do this prior to this stage is because timeline labels depends on gridWidth, and as the ticks are calculated based on available gridWidth, there can be unknown number of ticks generated for different minX and maxX
// Dependency on Dimensions(), need to refactor correctly
// TODO - find an alternate way to avoid calling this Heavy method twice
var dimensions=new Dimensions(this.ctx);dimensions.plotCoords();}},{key:"determineInterval",value:function determineInterval(daysDiff){var yearsDiff=daysDiff/365;var hoursDiff=daysDiff*24;var minutesDiff=hoursDiff*60;var secondsDiff=minutesDiff*60;switch(true){case yearsDiff>5:this.tickInterval='years';break;case daysDiff>800:this.tickInterval='half_year';break;case daysDiff>180:this.tickInterval='months';break;case daysDiff>90:this.tickInterval='months_fortnight';break;case daysDiff>60:this.tickInterval='months_days';break;case daysDiff>30:this.tickInterval='week_days';break;case daysDiff>2:this.tickInterval='days';break;case hoursDiff>2.4:this.tickInterval='hours';break;case minutesDiff>15:this.tickInterval='minutes_fives';break;case minutesDiff>5:this.tickInterval='minutes';break;case minutesDiff>1:this.tickInterval='seconds_tens';break;case secondsDiff>20:this.tickInterval='seconds_fives';break;default:this.tickInterval='seconds';break;}}},{key:"generateYearScale",value:function generateYearScale(_ref){var firstVal=_ref.firstVal,currentMonth=_ref.currentMonth,currentYear=_ref.currentYear,daysWidthOnXAxis=_ref.daysWidthOnXAxis,numberOfYears=_ref.numberOfYears;var firstTickValue=firstVal.minYear;var firstTickPosition=0;var dt=new DateTime(this.ctx);var unit='year';if(firstVal.minDate>1||firstVal.minMonth>0){var remainingDays=dt.determineRemainingDaysOfYear(firstVal.minYear,firstVal.minMonth,firstVal.minDate);// remainingDaysofFirstMonth is used to reacht the 2nd tick position
var remainingDaysOfFirstYear=dt.determineDaysOfYear(firstVal.minYear)-remainingDays+1;// calculate the first tick position
firstTickPosition=remainingDaysOfFirstYear*daysWidthOnXAxis;firstTickValue=firstVal.minYear+1;// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:firstTickValue,unit:unit,year:firstTickValue,month:Utils$1.monthMod(currentMonth+1)});}else if(firstVal.minDate===1&&firstVal.minMonth===0){// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:firstTickValue,unit:unit,year:currentYear,month:Utils$1.monthMod(currentMonth+1)});}var year=firstTickValue;var pos=firstTickPosition;// keep drawing rest of the ticks
for(var i=0;i<numberOfYears;i++){year++;pos=dt.determineDaysOfYear(year-1)*daysWidthOnXAxis+pos;this.timeScaleArray.push({position:pos,value:year,unit:unit,year:year,month:1});}}},{key:"generateMonthScale",value:function generateMonthScale(_ref2){var firstVal=_ref2.firstVal,currentMonthDate=_ref2.currentMonthDate,currentMonth=_ref2.currentMonth,currentYear=_ref2.currentYear,daysWidthOnXAxis=_ref2.daysWidthOnXAxis,numberOfMonths=_ref2.numberOfMonths;var firstTickValue=currentMonth;var firstTickPosition=0;var dt=new DateTime(this.ctx);var unit='month';var yrCounter=0;if(firstVal.minDate>1){// remainingDaysofFirstMonth is used to reacht the 2nd tick position
var remainingDaysOfFirstMonth=dt.determineDaysOfMonths(currentMonth+1,firstVal.minYear)-currentMonthDate+1;// calculate the first tick position
firstTickPosition=remainingDaysOfFirstMonth*daysWidthOnXAxis;firstTickValue=Utils$1.monthMod(currentMonth+1);var year=currentYear+yrCounter;var _month=Utils$1.monthMod(firstTickValue);var value=firstTickValue;// it's Jan, so update the year
if(firstTickValue===0){unit='year';value=year;_month=1;yrCounter+=1;year=year+yrCounter;}// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:value,unit:unit,year:year,month:_month});}else{// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:firstTickValue,unit:unit,year:currentYear,month:Utils$1.monthMod(currentMonth)});}var month=firstTickValue+1;var pos=firstTickPosition;// keep drawing rest of the ticks
for(var i=0,j=1;i<numberOfMonths;i++,j++){month=Utils$1.monthMod(month);if(month===0){unit='year';yrCounter+=1;}else{unit='month';}var _year=this._getYear(currentYear,month,yrCounter);pos=dt.determineDaysOfMonths(month,_year)*daysWidthOnXAxis+pos;var monthVal=month===0?_year:month;this.timeScaleArray.push({position:pos,value:monthVal,unit:unit,year:_year,month:month===0?1:month});month++;}}},{key:"generateDayScale",value:function generateDayScale(_ref3){var firstVal=_ref3.firstVal,currentMonth=_ref3.currentMonth,currentYear=_ref3.currentYear,hoursWidthOnXAxis=_ref3.hoursWidthOnXAxis,numberOfDays=_ref3.numberOfDays;var dt=new DateTime(this.ctx);var unit='day';var firstTickValue=firstVal.minDate+1;var date=firstTickValue;var changeMonth=function changeMonth(dateVal,month,year){var monthdays=dt.determineDaysOfMonths(month+1,year);if(dateVal>monthdays){month=month+1;date=1;unit='month';val=month;return month;}return month;};var remainingHours=24-firstVal.minHour;var yrCounter=0;// calculate the first tick position
var firstTickPosition=remainingHours*hoursWidthOnXAxis;var val=firstTickValue;var month=changeMonth(date,currentMonth,currentYear);if(firstVal.minHour===0&&firstVal.minDate===1){// the first value is the first day of month
firstTickPosition=0;val=Utils$1.monthMod(firstVal.minMonth);unit='month';date=firstVal.minDate;// numberOfDays++
// removed the above line to fix https://github.com/apexcharts/apexcharts.js/issues/305#issuecomment-1019520513
}else if(firstVal.minDate!==1&&firstVal.minHour===0&&firstVal.minMinute===0){// fixes apexcharts/apexcharts.js/issues/1730
firstTickPosition=0;firstTickValue=firstVal.minDate;date=firstTickValue;val=firstTickValue;// in case it's the last date of month, we need to check it
month=changeMonth(date,currentMonth,currentYear);}// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:val,unit:unit,year:this._getYear(currentYear,month,yrCounter),month:Utils$1.monthMod(month),day:date});var pos=firstTickPosition;// keep drawing rest of the ticks
for(var i=0;i<numberOfDays;i++){date+=1;unit='day';month=changeMonth(date,month,this._getYear(currentYear,month,yrCounter));var year=this._getYear(currentYear,month,yrCounter);pos=24*hoursWidthOnXAxis+pos;var value=date===1?Utils$1.monthMod(month):date;this.timeScaleArray.push({position:pos,value:value,unit:unit,year:year,month:Utils$1.monthMod(month),day:value});}}},{key:"generateHourScale",value:function generateHourScale(_ref4){var firstVal=_ref4.firstVal,currentDate=_ref4.currentDate,currentMonth=_ref4.currentMonth,currentYear=_ref4.currentYear,minutesWidthOnXAxis=_ref4.minutesWidthOnXAxis,numberOfHours=_ref4.numberOfHours;var dt=new DateTime(this.ctx);var yrCounter=0;var unit='hour';var changeDate=function changeDate(dateVal,month){var monthdays=dt.determineDaysOfMonths(month+1,currentYear);if(dateVal>monthdays){date=1;month=month+1;}return{month:month,date:date};};var changeMonth=function changeMonth(dateVal,month){var monthdays=dt.determineDaysOfMonths(month+1,currentYear);if(dateVal>monthdays){month=month+1;return month;}return month;};// factor in minSeconds as well
var remainingMins=60-(firstVal.minMinute+firstVal.minSecond/60.0);var firstTickPosition=remainingMins*minutesWidthOnXAxis;var firstTickValue=firstVal.minHour+1;var hour=firstTickValue;if(remainingMins===60){firstTickPosition=0;firstTickValue=firstVal.minHour;hour=firstTickValue;}var date=currentDate;// we need to apply date switching logic here as well, to avoid duplicated labels
if(hour>=24){hour=0;date+=1;unit='day';}var checkNextMonth=changeDate(date,currentMonth);var month=checkNextMonth.month;month=changeMonth(date,month);// push the first tick in the array
this.timeScaleArray.push({position:firstTickPosition,value:firstTickValue,unit:unit,day:date,hour:hour,year:currentYear,month:Utils$1.monthMod(month)});hour++;var pos=firstTickPosition;// keep drawing rest of the ticks
for(var i=0;i<numberOfHours;i++){unit='hour';if(hour>=24){hour=0;date+=1;unit='day';var _checkNextMonth=changeDate(date,month);month=_checkNextMonth.month;month=changeMonth(date,month);}var year=this._getYear(currentYear,month,yrCounter);pos=60*minutesWidthOnXAxis+pos;var val=hour===0?date:hour;this.timeScaleArray.push({position:pos,value:val,unit:unit,hour:hour,day:date,year:year,month:Utils$1.monthMod(month)});hour++;}}},{key:"generateMinuteScale",value:function generateMinuteScale(_ref5){var currentMillisecond=_ref5.currentMillisecond,currentSecond=_ref5.currentSecond,currentMinute=_ref5.currentMinute,currentHour=_ref5.currentHour,currentDate=_ref5.currentDate,currentMonth=_ref5.currentMonth,currentYear=_ref5.currentYear,minutesWidthOnXAxis=_ref5.minutesWidthOnXAxis,secondsWidthOnXAxis=_ref5.secondsWidthOnXAxis,numberOfMinutes=_ref5.numberOfMinutes;var yrCounter=0;var unit='minute';var remainingSecs=60-currentSecond;var firstTickPosition=(remainingSecs-currentMillisecond/1000)*secondsWidthOnXAxis;var minute=currentMinute+1;var date=currentDate;var month=currentMonth;var year=currentYear;var hour=currentHour;var pos=firstTickPosition;for(var i=0;i<numberOfMinutes;i++){if(minute>=60){minute=0;hour+=1;if(hour===24){hour=0;}}this.timeScaleArray.push({position:pos,value:minute,unit:unit,hour:hour,minute:minute,day:date,year:this._getYear(year,month,yrCounter),month:Utils$1.monthMod(month)});pos+=minutesWidthOnXAxis;minute++;}}},{key:"generateSecondScale",value:function generateSecondScale(_ref6){var currentMillisecond=_ref6.currentMillisecond,currentSecond=_ref6.currentSecond,currentMinute=_ref6.currentMinute,currentHour=_ref6.currentHour,currentDate=_ref6.currentDate,currentMonth=_ref6.currentMonth,currentYear=_ref6.currentYear,secondsWidthOnXAxis=_ref6.secondsWidthOnXAxis,numberOfSeconds=_ref6.numberOfSeconds;var yrCounter=0;var unit='second';var remainingMillisecs=1000-currentMillisecond;var firstTickPosition=remainingMillisecs/1000*secondsWidthOnXAxis;var second=currentSecond+1;var minute=currentMinute;var date=currentDate;var month=currentMonth;var year=currentYear;var hour=currentHour;var pos=firstTickPosition;for(var i=0;i<numberOfSeconds;i++){if(second>=60){minute++;second=0;if(minute>=60){hour++;minute=0;if(hour===24){hour=0;}}}this.timeScaleArray.push({position:pos,value:second,unit:unit,hour:hour,minute:minute,second:second,day:date,year:this._getYear(year,month,yrCounter),month:Utils$1.monthMod(month)});pos+=secondsWidthOnXAxis;second++;}}},{key:"createRawDateString",value:function createRawDateString(ts,value){var raw=ts.year;if(ts.month===0){// invalid month, correct it
ts.month=1;}raw+='-'+('0'+ts.month.toString()).slice(-2);// unit is day
if(ts.unit==='day'){raw+=ts.unit==='day'?'-'+('0'+value).slice(-2):'-01';}else{raw+='-'+('0'+(ts.day?ts.day:'1')).slice(-2);}// unit is hour
if(ts.unit==='hour'){raw+=ts.unit==='hour'?'T'+('0'+value).slice(-2):'T00';}else{raw+='T'+('0'+(ts.hour?ts.hour:'0')).slice(-2);}if(ts.unit==='minute'){raw+=':'+('0'+value).slice(-2);}else{raw+=':'+(ts.minute?('0'+ts.minute).slice(-2):'00');}if(ts.unit==='second'){raw+=':'+('0'+value).slice(-2);}else{raw+=':00';}if(this.utc){raw+='.000Z';}return raw;}},{key:"formatDates",value:function formatDates(filteredTimeScale){var _this2=this;var w=this.w;var reformattedTimescaleArray=filteredTimeScale.map(function(ts){var value=ts.value.toString();var dt=new DateTime(_this2.ctx);var raw=_this2.createRawDateString(ts,value);var dateToFormat=dt.getDate(dt.parseDate(raw));if(!_this2.utc){// Fixes #1726, #1544, #1485, #1255
dateToFormat=dt.getDate(dt.parseDateWithTimezone(raw));}if(w.config.xaxis.labels.format===undefined){var customFormat='dd MMM';var dtFormatter=w.config.xaxis.labels.datetimeFormatter;if(ts.unit==='year')customFormat=dtFormatter.year;if(ts.unit==='month')customFormat=dtFormatter.month;if(ts.unit==='day')customFormat=dtFormatter.day;if(ts.unit==='hour')customFormat=dtFormatter.hour;if(ts.unit==='minute')customFormat=dtFormatter.minute;if(ts.unit==='second')customFormat=dtFormatter.second;value=dt.formatDate(dateToFormat,customFormat);}else{value=dt.formatDate(dateToFormat,w.config.xaxis.labels.format);}return{dateString:raw,position:ts.position,value:value,unit:ts.unit,year:ts.year,month:ts.month};});return reformattedTimescaleArray;}},{key:"removeOverlappingTS",value:function removeOverlappingTS(arr){var _this3=this;var graphics=new Graphics(this.ctx);var equalLabelLengthFlag=false;// These labels got same length?
var constantLabelWidth;// If true, what is the constant length to use
if(arr.length>0&&// check arr length
arr[0].value&&// check arr[0] contains value
arr.every(function(lb){return lb.value.length===arr[0].value.length;})// check every arr label value is the same as the first one
){equalLabelLengthFlag=true;// These labels got same length
constantLabelWidth=graphics.getTextRects(arr[0].value).width;// The constant label width to use
}var lastDrawnIndex=0;var filteredArray=arr.map(function(item,index){if(index>0&&_this3.w.config.xaxis.labels.hideOverlappingLabels){var prevLabelWidth=!equalLabelLengthFlag// if vary in label length
?graphics.getTextRects(arr[lastDrawnIndex].value).width// get individual length
:constantLabelWidth;// else: use constant length
var prevPos=arr[lastDrawnIndex].position;var pos=item.position;if(pos>prevPos+prevLabelWidth+10){lastDrawnIndex=index;return item;}else{return null;}}else{return item;}});filteredArray=filteredArray.filter(function(f){return f!==null;});return filteredArray;}},{key:"_getYear",value:function _getYear(currentYear,month,yrCounter){return currentYear+Math.floor(month/12)+yrCounter;}}]);return TimeScale;}();/**
   * ApexCharts Core Class responsible for major calculations and creating elements.
   *
   * @module Core
   **/var Core=/*#__PURE__*/function(){function Core(el,ctx){_classCallCheck(this,Core);this.ctx=ctx;this.w=ctx.w;this.el=el;}// get data and store into appropriate vars
_createClass(Core,[{key:"setupElements",value:function setupElements(){var gl=this.w.globals;var cnf=this.w.config;// const graphics = new Graphics(this.ctx)
var ct=cnf.chart.type;var axisChartsArrTypes=['line','area','bar','rangeBar','rangeArea','candlestick','boxPlot','scatter','bubble','radar','heatmap','treemap'];var xyChartsArrTypes=['line','area','bar','rangeBar','rangeArea','candlestick','boxPlot','scatter','bubble'];gl.axisCharts=axisChartsArrTypes.indexOf(ct)>-1;gl.xyCharts=xyChartsArrTypes.indexOf(ct)>-1;gl.isBarHorizontal=(cnf.chart.type==='bar'||cnf.chart.type==='rangeBar'||cnf.chart.type==='boxPlot')&&cnf.plotOptions.bar.horizontal;gl.chartClass='.apexcharts'+gl.chartID;gl.dom.baseEl=this.el;gl.dom.elWrap=document.createElement('div');Graphics.setAttrs(gl.dom.elWrap,{id:gl.chartClass.substring(1),class:'apexcharts-canvas '+gl.chartClass.substring(1)});this.el.appendChild(gl.dom.elWrap);gl.dom.Paper=new window.SVG.Doc(gl.dom.elWrap);gl.dom.Paper.attr({class:'apexcharts-svg','xmlns:data':'ApexChartsNS',transform:"translate(".concat(cnf.chart.offsetX,", ").concat(cnf.chart.offsetY,")")});gl.dom.Paper.node.style.background=cnf.theme.mode==='dark'&&!cnf.chart.background?'rgba(0, 0, 0, 0.8)':cnf.chart.background;this.setSVGDimensions();// append foreignElement (legend's parent)
// legend is kept in foreignElement to be included while exporting
// removing foreignElement and creating legend through HTML will not render legend in export
gl.dom.elLegendForeign=document.createElementNS(gl.SVGNS,'foreignObject');Graphics.setAttrs(gl.dom.elLegendForeign,{x:0,y:0,width:gl.svgWidth,height:gl.svgHeight});gl.dom.elLegendWrap=document.createElement('div');gl.dom.elLegendWrap.classList.add('apexcharts-legend');gl.dom.elLegendWrap.setAttribute('xmlns','http://www.w3.org/1999/xhtml');gl.dom.elLegendForeign.appendChild(gl.dom.elLegendWrap);gl.dom.Paper.node.appendChild(gl.dom.elLegendForeign);// the elGraphical is the parent of all primary visuals
gl.dom.elGraphical=gl.dom.Paper.group().attr({class:'apexcharts-inner apexcharts-graphical'});gl.dom.elDefs=gl.dom.Paper.defs();gl.dom.Paper.add(gl.dom.elGraphical);gl.dom.elGraphical.add(gl.dom.elDefs);}},{key:"plotChartType",value:function plotChartType(ser,xyRatios){var w=this.w;var cnf=w.config;var gl=w.globals;var lineSeries={series:[],i:[]};var areaSeries={series:[],i:[]};var scatterSeries={series:[],i:[]};var bubbleSeries={series:[],i:[]};var columnSeries={series:[],i:[]};var candlestickSeries={series:[],i:[]};var boxplotSeries={series:[],i:[]};var rangeBarSeries={series:[],i:[]};var rangeAreaSeries={series:[],seriesRangeEnd:[],i:[]};var chartType=cnf.chart.type!==undefined?cnf.chart.type:'line';// Check if the user has specified a type for any series.
var comboCount=0;gl.series.map(function(serie,st){// The default type for chart is "line" and the default for series is the
// chart type, therefore, if the types of all series match the chart type,
// this should not be considered a combo chart.
// Combo charts are explicitly excluded from stacking with the exception
// that series of type "bar" can be stacked if the user sets "stackOnlyBar"
// true.
if(typeof ser[st].type!=='undefined'){if(ser[st].type==='column'||ser[st].type==='bar'){if(gl.series.length>1&&cnf.plotOptions.bar.horizontal){// horizontal bars not supported in mixed charts, hence show a warning
console.warn('Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`');}columnSeries.series.push(serie);columnSeries.i.push(st);if(chartType!=='bar'){comboCount++;}w.globals.columnSeries=columnSeries.series;}else if(ser[st].type==='area'){areaSeries.series.push(serie);areaSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='line'){lineSeries.series.push(serie);lineSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='scatter'){scatterSeries.series.push(serie);scatterSeries.i.push(st);}else if(ser[st].type==='bubble'){bubbleSeries.series.push(serie);bubbleSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='candlestick'){candlestickSeries.series.push(serie);candlestickSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='boxPlot'){boxplotSeries.series.push(serie);boxplotSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='rangeBar'){rangeBarSeries.series.push(serie);rangeBarSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else if(ser[st].type==='rangeArea'){rangeAreaSeries.series.push(gl.seriesRangeStart[st]);rangeAreaSeries.seriesRangeEnd.push(gl.seriesRangeEnd[st]);rangeAreaSeries.i.push(st);if(chartType!==ser[st].type){comboCount++;}}else{// user has specified type, but it is not valid (other than line/area/column)
console.warn('You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea');}}else{lineSeries.series.push(serie);lineSeries.i.push(st);}});gl.comboCharts||(gl.comboCharts=comboCount>0);var line=new Line(this.ctx,xyRatios);var boxCandlestick=new BoxCandleStick(this.ctx,xyRatios);this.ctx.pie=new Pie(this.ctx);var radialBar=new Radial(this.ctx);this.ctx.rangeBar=new RangeBar(this.ctx,xyRatios);var radar=new Radar(this.ctx);var elGraph=[];if(gl.comboCharts){if(areaSeries.series.length>0){elGraph.push(line.draw(areaSeries.series,'area',areaSeries.i));}if(columnSeries.series.length>0){if(w.config.chart.stacked){var barStacked=new BarStacked(this.ctx,xyRatios);elGraph.push(barStacked.draw(columnSeries.series,columnSeries.i));}else{this.ctx.bar=new Bar(this.ctx,xyRatios);elGraph.push(this.ctx.bar.draw(columnSeries.series,columnSeries.i));}}if(rangeAreaSeries.series.length>0){elGraph.push(line.draw(rangeAreaSeries.series,'rangeArea',rangeAreaSeries.i,rangeAreaSeries.seriesRangeEnd));}if(lineSeries.series.length>0){elGraph.push(line.draw(lineSeries.series,'line',lineSeries.i));}if(candlestickSeries.series.length>0){elGraph.push(boxCandlestick.draw(candlestickSeries.series,'candlestick',candlestickSeries.i));}if(boxplotSeries.series.length>0){elGraph.push(boxCandlestick.draw(boxplotSeries.series,'boxPlot',boxplotSeries.i));}if(rangeBarSeries.series.length>0){elGraph.push(this.ctx.rangeBar.draw(rangeBarSeries.series,rangeBarSeries.i));}if(scatterSeries.series.length>0){var scatterLine=new Line(this.ctx,xyRatios,true);elGraph.push(scatterLine.draw(scatterSeries.series,'scatter',scatterSeries.i));}if(bubbleSeries.series.length>0){var bubbleLine=new Line(this.ctx,xyRatios,true);elGraph.push(bubbleLine.draw(bubbleSeries.series,'bubble',bubbleSeries.i));}}else{switch(cnf.chart.type){case'line':elGraph=line.draw(gl.series,'line');break;case'area':elGraph=line.draw(gl.series,'area');break;case'bar':if(cnf.chart.stacked){var _barStacked=new BarStacked(this.ctx,xyRatios);elGraph=_barStacked.draw(gl.series);}else{this.ctx.bar=new Bar(this.ctx,xyRatios);elGraph=this.ctx.bar.draw(gl.series);}break;case'candlestick':var candleStick=new BoxCandleStick(this.ctx,xyRatios);elGraph=candleStick.draw(gl.series,'candlestick');break;case'boxPlot':var boxPlot=new BoxCandleStick(this.ctx,xyRatios);elGraph=boxPlot.draw(gl.series,cnf.chart.type);break;case'rangeBar':elGraph=this.ctx.rangeBar.draw(gl.series);break;case'rangeArea':elGraph=line.draw(gl.seriesRangeStart,'rangeArea',undefined,gl.seriesRangeEnd);break;case'heatmap':var heatmap=new HeatMap(this.ctx,xyRatios);elGraph=heatmap.draw(gl.series);break;case'treemap':var treemap=new TreemapChart(this.ctx,xyRatios);elGraph=treemap.draw(gl.series);break;case'pie':case'donut':case'polarArea':elGraph=this.ctx.pie.draw(gl.series);break;case'radialBar':elGraph=radialBar.draw(gl.series);break;case'radar':elGraph=radar.draw(gl.series);break;default:elGraph=line.draw(gl.series);}}return elGraph;}},{key:"setSVGDimensions",value:function setSVGDimensions(){var gl=this.w.globals;var cnf=this.w.config;gl.svgWidth=cnf.chart.width;gl.svgHeight=cnf.chart.height;var elDim=Utils$1.getDimensions(this.el);var widthUnit=cnf.chart.width.toString().split(/[0-9]+/g).pop();if(widthUnit==='%'){if(Utils$1.isNumber(elDim[0])){if(elDim[0].width===0){elDim=Utils$1.getDimensions(this.el.parentNode);}gl.svgWidth=elDim[0]*parseInt(cnf.chart.width,10)/100;}}else if(widthUnit==='px'||widthUnit===''){gl.svgWidth=parseInt(cnf.chart.width,10);}var heightUnit=cnf.chart.height.toString().split(/[0-9]+/g).pop();if(gl.svgHeight!=='auto'&&gl.svgHeight!==''){if(heightUnit==='%'){var elParentDim=Utils$1.getDimensions(this.el.parentNode);gl.svgHeight=elParentDim[1]*parseInt(cnf.chart.height,10)/100;}else{gl.svgHeight=parseInt(cnf.chart.height,10);}}else{if(gl.axisCharts){gl.svgHeight=gl.svgWidth/1.61;}else{gl.svgHeight=gl.svgWidth/1.2;}}if(gl.svgWidth<0)gl.svgWidth=0;if(gl.svgHeight<0)gl.svgHeight=0;Graphics.setAttrs(gl.dom.Paper.node,{width:gl.svgWidth,height:gl.svgHeight});if(heightUnit!=='%'){// fixes https://github.com/apexcharts/apexcharts.js/issues/2059
var offsetY=cnf.chart.sparkline.enabled?0:gl.axisCharts?cnf.chart.parentHeightOffset:0;gl.dom.Paper.node.parentNode.parentNode.style.minHeight=gl.svgHeight+offsetY+'px';}gl.dom.elWrap.style.width=gl.svgWidth+'px';gl.dom.elWrap.style.height=gl.svgHeight+'px';}},{key:"shiftGraphPosition",value:function shiftGraphPosition(){var gl=this.w.globals;var tY=gl.translateY;var tX=gl.translateX;var scalingAttrs={transform:'translate('+tX+', '+tY+')'};Graphics.setAttrs(gl.dom.elGraphical.node,scalingAttrs);}// To prevent extra spacings in the bottom of the chart, we need to recalculate the height for pie/donut/radialbar charts
},{key:"resizeNonAxisCharts",value:function resizeNonAxisCharts(){var w=this.w;var gl=w.globals;var legendHeight=0;var offY=w.config.chart.sparkline.enabled?1:15;offY=offY+w.config.grid.padding.bottom;if((w.config.legend.position==='top'||w.config.legend.position==='bottom')&&w.config.legend.show&&!w.config.legend.floating){legendHeight=new Legend(this.ctx).legendHelpers.getLegendBBox().clwh+10;}var el=w.globals.dom.baseEl.querySelector('.apexcharts-radialbar, .apexcharts-pie');var chartInnerDimensions=w.globals.radialSize*2.05;if(el&&!w.config.chart.sparkline.enabled&&w.config.plotOptions.radialBar.startAngle!==0){var elRadialRect=Utils$1.getBoundingClientRect(el);chartInnerDimensions=elRadialRect.bottom;var maxHeight=elRadialRect.bottom-elRadialRect.top;chartInnerDimensions=Math.max(w.globals.radialSize*2.05,maxHeight);}var newHeight=chartInnerDimensions+gl.translateY+legendHeight+offY;if(gl.dom.elLegendForeign){gl.dom.elLegendForeign.setAttribute('height',newHeight);}// fix apexcharts/apexcharts.js/issues/3105 (when % is provided in height, it keeps increasing)
if(w.config.chart.height&&String(w.config.chart.height).indexOf('%')>0)return;gl.dom.elWrap.style.height=newHeight+'px';Graphics.setAttrs(gl.dom.Paper.node,{height:newHeight});gl.dom.Paper.node.parentNode.parentNode.style.minHeight=newHeight+'px';}/*
       ** All the calculations for setting range in charts will be done here
       */},{key:"coreCalculations",value:function coreCalculations(){var range=new Range(this.ctx);range.init();}},{key:"resetGlobals",value:function resetGlobals(){var _this=this;var resetxyValues=function resetxyValues(){return _this.w.config.series.map(function(s){return[];});};var globalObj=new Globals();var gl=this.w.globals;globalObj.initGlobalVars(gl);gl.seriesXvalues=resetxyValues();gl.seriesYvalues=resetxyValues();}},{key:"isMultipleY",value:function isMultipleY(){// user has supplied an array in yaxis property. So, turn on multipleYAxis flag
if(this.w.config.yaxis.constructor===Array&&this.w.config.yaxis.length>1){this.w.globals.isMultipleYAxis=true;return true;}}},{key:"xySettings",value:function xySettings(){var xyRatios=null;var w=this.w;if(w.globals.axisCharts){if(w.config.xaxis.crosshairs.position==='back'){var crosshairs=new Crosshairs(this.ctx);crosshairs.drawXCrosshairs();}if(w.config.yaxis[0].crosshairs.position==='back'){var _crosshairs=new Crosshairs(this.ctx);_crosshairs.drawYCrosshairs();}if(w.config.xaxis.type==='datetime'&&w.config.xaxis.labels.formatter===undefined){this.ctx.timeScale=new TimeScale(this.ctx);var formattedTimeScale=[];if(isFinite(w.globals.minX)&&isFinite(w.globals.maxX)&&!w.globals.isBarHorizontal){formattedTimeScale=this.ctx.timeScale.calculateTimeScaleTicks(w.globals.minX,w.globals.maxX);}else if(w.globals.isBarHorizontal){formattedTimeScale=this.ctx.timeScale.calculateTimeScaleTicks(w.globals.minY,w.globals.maxY);}this.ctx.timeScale.recalcDimensionsBasedOnFormat(formattedTimeScale);}var coreUtils=new CoreUtils(this.ctx);xyRatios=coreUtils.getCalculatedRatios();}return xyRatios;}},{key:"updateSourceChart",value:function updateSourceChart(targetChart){this.ctx.w.globals.selection=undefined;this.ctx.updateHelpers._updateOptions({chart:{selection:{xaxis:{min:targetChart.w.globals.minX,max:targetChart.w.globals.maxX}}}},false,false);}},{key:"setupBrushHandler",value:function setupBrushHandler(){var _this2=this;var w=this.w;// only for brush charts
if(!w.config.chart.brush.enabled){return;}// if user has not defined a custom function for selection - we handle the brush chart
// otherwise we leave it to the user to define the functionality for selection
if(typeof w.config.chart.events.selection!=='function'){var targets=Array.isArray(w.config.chart.brush.targets)?w.config.chart.brush.targets:[w.config.chart.brush.target];// retro compatibility with single target option
targets.forEach(function(target){var targetChart=ApexCharts.getChartByID(target);targetChart.w.globals.brushSource=_this2.ctx;if(typeof targetChart.w.config.chart.events.zoomed!=='function'){targetChart.w.config.chart.events.zoomed=function(){_this2.updateSourceChart(targetChart);};}if(typeof targetChart.w.config.chart.events.scrolled!=='function'){targetChart.w.config.chart.events.scrolled=function(){_this2.updateSourceChart(targetChart);};}});w.config.chart.events.selection=function(chart,e){targets.forEach(function(target){var targetChart=ApexCharts.getChartByID(target);targetChart.ctx.updateHelpers._updateOptions({xaxis:{min:e.xaxis.min,max:e.xaxis.max}},false,false,false,false);});};}}}]);return Core;}();var UpdateHelpers=/*#__PURE__*/function(){function UpdateHelpers(ctx){_classCallCheck(this,UpdateHelpers);this.ctx=ctx;this.w=ctx.w;}/**
     * private method to update Options.
     *
     * @param {object} options - A new config object can be passed which will be merged with the existing config object
     * @param {boolean} redraw - should redraw from beginning or should use existing paths and redraw from there
     * @param {boolean} animate - should animate or not on updating Options
     * @param {boolean} overwriteInitialConfig - should update the initial config or not
     */_createClass(UpdateHelpers,[{key:"_updateOptions",value:function _updateOptions(options){var _this=this;var redraw=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var animate=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var updateSyncedCharts=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var overwriteInitialConfig=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;return new Promise(function(resolve){var charts=[_this.ctx];if(updateSyncedCharts){charts=_this.ctx.getSyncedCharts();}if(_this.ctx.w.globals.isExecCalled){// If the user called exec method, we don't want to get grouped charts as user specifically provided a chartID to update
charts=[_this.ctx];_this.ctx.w.globals.isExecCalled=false;}charts.forEach(function(ch,chartIndex){var w=ch.w;w.globals.shouldAnimate=animate;if(!redraw){w.globals.resized=true;w.globals.dataChanged=true;if(animate){ch.series.getPreviousPaths();}}if(options&&_typeof(options)==='object'){ch.config=new Config(options);options=CoreUtils.extendArrayProps(ch.config,options,w);// fixes #914, #623
if(ch.w.globals.chartID!==_this.ctx.w.globals.chartID){// don't overwrite series of synchronized charts
delete options.series;}w.config=Utils$1.extend(w.config,options);if(overwriteInitialConfig){// we need to forget the lastXAxis and lastYAxis as user forcefully overwriteInitialConfig. If we do not do this, and next time when user zooms the chart after setting yaxis.min/max or xaxis.min/max - the stored lastXAxis will never allow the chart to use the updated min/max by user.
w.globals.lastXAxis=options.xaxis?Utils$1.clone(options.xaxis):[];w.globals.lastYAxis=options.yaxis?Utils$1.clone(options.yaxis):[];// After forgetting lastAxes, we need to restore the new config in initialConfig/initialSeries
w.globals.initialConfig=Utils$1.extend({},w.config);w.globals.initialSeries=Utils$1.clone(w.config.series);if(options.series){// Replace the collapsed series data
for(var i=0;i<w.globals.collapsedSeriesIndices.length;i++){var series=w.config.series[w.globals.collapsedSeriesIndices[i]];w.globals.collapsedSeries[i].data=w.globals.axisCharts?series.data.slice():series;}for(var _i=0;_i<w.globals.ancillaryCollapsedSeriesIndices.length;_i++){var _series=w.config.series[w.globals.ancillaryCollapsedSeriesIndices[_i]];w.globals.ancillaryCollapsedSeries[_i].data=w.globals.axisCharts?_series.data.slice():_series;}// Ensure that auto-generated axes are scaled to the visible data
ch.series.emptyCollapsedSeries(w.config.series);}}}return ch.update(options).then(function(){if(chartIndex===charts.length-1){resolve(ch);}});});});}/**
       * Private method to update Series.
       *
       * @param {array} series - New series which will override the existing
       */},{key:"_updateSeries",value:function _updateSeries(newSeries,animate){var _this2=this;var overwriteInitialSeries=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;return new Promise(function(resolve){var w=_this2.w;w.globals.shouldAnimate=animate;w.globals.dataChanged=true;if(animate){_this2.ctx.series.getPreviousPaths();}var existingSeries;// axis charts
if(w.globals.axisCharts){existingSeries=newSeries.map(function(s,i){return _this2._extendSeries(s,i);});if(existingSeries.length===0){existingSeries=[{data:[]}];}w.config.series=existingSeries;}else{// non-axis chart (pie/radialbar)
w.config.series=newSeries.slice();}if(overwriteInitialSeries){w.globals.initialConfig.series=Utils$1.clone(w.config.series);w.globals.initialSeries=Utils$1.clone(w.config.series);}return _this2.ctx.update().then(function(){resolve(_this2.ctx);});});}},{key:"_extendSeries",value:function _extendSeries(s,i){var w=this.w;var ser=w.config.series[i];return _objectSpread2(_objectSpread2({},w.config.series[i]),{},{name:s.name?s.name:ser===null||ser===void 0?void 0:ser.name,color:s.color?s.color:ser===null||ser===void 0?void 0:ser.color,type:s.type?s.type:ser===null||ser===void 0?void 0:ser.type,group:s.group?s.group:ser===null||ser===void 0?void 0:ser.group,data:s.data?s.data:ser===null||ser===void 0?void 0:ser.data,zIndex:typeof s.zIndex!=='undefined'?s.zIndex:i});}},{key:"toggleDataPointSelection",value:function toggleDataPointSelection(seriesIndex,dataPointIndex){var w=this.w;var elPath=null;var parent=".apexcharts-series[data\\:realIndex='".concat(seriesIndex,"']");if(w.globals.axisCharts){elPath=w.globals.dom.Paper.select("".concat(parent," path[j='").concat(dataPointIndex,"'], ").concat(parent," circle[j='").concat(dataPointIndex,"'], ").concat(parent," rect[j='").concat(dataPointIndex,"']")).members[0];}else{// dataPointIndex will be undefined here, hence using seriesIndex
if(typeof dataPointIndex==='undefined'){elPath=w.globals.dom.Paper.select("".concat(parent," path[j='").concat(seriesIndex,"']")).members[0];if(w.config.chart.type==='pie'||w.config.chart.type==='polarArea'||w.config.chart.type==='donut'){this.ctx.pie.pieClicked(seriesIndex);}}}if(elPath){var graphics=new Graphics(this.ctx);graphics.pathMouseDown(elPath,null);}else{console.warn('toggleDataPointSelection: Element not found');return null;}return elPath.node?elPath.node:null;}},{key:"forceXAxisUpdate",value:function forceXAxisUpdate(options){var w=this.w;var minmax=['min','max'];minmax.forEach(function(a){if(typeof options.xaxis[a]!=='undefined'){w.config.xaxis[a]=options.xaxis[a];w.globals.lastXAxis[a]=options.xaxis[a];}});if(options.xaxis.categories&&options.xaxis.categories.length){w.config.xaxis.categories=options.xaxis.categories;}if(w.config.xaxis.convertedCatToNumeric){var defaults=new Defaults(options);options=defaults.convertCatToNumericXaxis(options,this.ctx);}return options;}},{key:"forceYAxisUpdate",value:function forceYAxisUpdate(options){if(options.chart&&options.chart.stacked&&options.chart.stackType==='100%'){if(Array.isArray(options.yaxis)){options.yaxis.forEach(function(yaxe,index){options.yaxis[index].min=0;options.yaxis[index].max=100;});}else{options.yaxis.min=0;options.yaxis.max=100;}}return options;}/**
       * This function reverts the yaxis and xaxis min/max values to what it was when the chart was defined.
       * This function fixes an important bug where a user might load a new series after zooming in/out of previous series which resulted in wrong min/max
       * Also, this should never be called internally on zoom/pan - the reset should only happen when user calls the updateSeries() function externally
       * The function also accepts an object {xaxis, yaxis} which when present is set as the new xaxis/yaxis
       */},{key:"revertDefaultAxisMinMax",value:function revertDefaultAxisMinMax(opts){var _this3=this;var w=this.w;var xaxis=w.globals.lastXAxis;var yaxis=w.globals.lastYAxis;if(opts&&opts.xaxis){xaxis=opts.xaxis;}if(opts&&opts.yaxis){yaxis=opts.yaxis;}w.config.xaxis.min=xaxis.min;w.config.xaxis.max=xaxis.max;var getLastYAxis=function getLastYAxis(index){if(typeof yaxis[index]!=='undefined'){w.config.yaxis[index].min=yaxis[index].min;w.config.yaxis[index].max=yaxis[index].max;}};w.config.yaxis.map(function(yaxe,index){if(w.globals.zoomed){// user has zoomed, check the last yaxis
getLastYAxis(index);}else{// user hasn't zoomed, check the last yaxis first
if(typeof yaxis[index]!=='undefined'){getLastYAxis(index);}else{// if last y-axis don't exist, check the original yaxis
if(typeof _this3.ctx.opts.yaxis[index]!=='undefined'){yaxe.min=_this3.ctx.opts.yaxis[index].min;yaxe.max=_this3.ctx.opts.yaxis[index].max;}}}});}}]);return UpdateHelpers;}();(function(root,factory){/* istanbul ignore next */if(typeof define==='function'&&define.amd){define(function(){return factory(root,root.document);});/* below check fixes #412 */}else if((typeof exports==="undefined"?"undefined":_typeof(exports))==='object'&&typeof module!=='undefined'){module.exports=root.document?factory(root,root.document):function(w){return factory(w,w.document);};}else{root.SVG=factory(root,root.document);}})(typeof window!=='undefined'?window:undefined,function(window,document){// Find global reference - uses 'this' by default when available,
// falls back to 'window' otherwise (for bundlers like Webpack)
var globalRef=typeof this!=='undefined'?this:window;// The main wrapping element
var SVG=globalRef.SVG=function(element){if(SVG.supported){element=new SVG.Doc(element);if(!SVG.parser.draw){SVG.prepare();}return element;}};// Default namespaces
SVG.ns='http://www.w3.org/2000/svg';SVG.xmlns='http://www.w3.org/2000/xmlns/';SVG.xlink='http://www.w3.org/1999/xlink';SVG.svgjs='http://svgjs.dev';// Svg support test
SVG.supported=function(){return true;// !!document.createElementNS &&
//     !! document.createElementNS(SVG.ns,'svg').createSVGRect
}();// Don't bother to continue if SVG is not supported
if(!SVG.supported)return false;// Element id sequence
SVG.did=1000;// Get next named element id
SVG.eid=function(name){return'Svgjs'+capitalize(name)+SVG.did++;};// Method for element creation
SVG.create=function(name){// create element
var element=document.createElementNS(this.ns,name);// apply unique id
element.setAttribute('id',this.eid(name));return element;};// Method for extending objects
SVG.extend=function(){var modules,methods;// Get list of modules
modules=[].slice.call(arguments);// Get object with extensions
methods=modules.pop();for(var i=modules.length-1;i>=0;i--){if(modules[i]){for(var key in methods){modules[i].prototype[key]=methods[key];}}}// Make sure SVG.Set inherits any newly added methods
if(SVG.Set&&SVG.Set.inherit){SVG.Set.inherit();}};// Invent new element
SVG.invent=function(config){// Create element initializer
var initializer=typeof config.create==='function'?config.create:function(){this.constructor.call(this,SVG.create(config.create));};// Inherit prototype
if(config.inherit){initializer.prototype=new config.inherit();}// Extend with methods
if(config.extend){SVG.extend(initializer,config.extend);}// Attach construct method to parent
if(config.construct){SVG.extend(config.parent||SVG.Container,config.construct);}return initializer;};// Adopt existing svg elements
SVG.adopt=function(node){// check for presence of node
if(!node)return null;// make sure a node isn't already adopted
if(node.instance)return node.instance;// initialize variables
var element;// adopt with element-specific settings
if(node.nodeName=='svg'){element=node.parentNode instanceof window.SVGElement?new SVG.Nested():new SVG.Doc();}else if(node.nodeName=='linearGradient'){element=new SVG.Gradient('linear');}else if(node.nodeName=='radialGradient'){element=new SVG.Gradient('radial');}else if(SVG[capitalize(node.nodeName)]){element=new SVG[capitalize(node.nodeName)]();}else{element=new SVG.Element(node);}// ensure references
element.type=node.nodeName;element.node=node;node.instance=element;// SVG.Class specific preparations
if(element instanceof SVG.Doc){element.namespace().defs();}// pull svgjs data from the dom (getAttributeNS doesn't work in html5)
element.setData(JSON.parse(node.getAttribute('svgjs:data'))||{});return element;};// Initialize parsing element
SVG.prepare=function(){// Select document body and create invisible svg element
var body=document.getElementsByTagName('body')[0],draw=(body?new SVG.Doc(body):SVG.adopt(document.documentElement).nested()).size(2,0);// Create parser object
SVG.parser={body:body||document.documentElement,draw:draw.style('opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden').node,poly:draw.polyline().node,path:draw.path().node,native:SVG.create('svg')};};SVG.parser={native:SVG.create('svg')};document.addEventListener('DOMContentLoaded',function(){if(!SVG.parser.draw){SVG.prepare();}},false);// Storage for regular expressions
SVG.regex={// Parse unit value
numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,// Parse hex value
hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,// Parse rgb value
rgb:/rgb\((\d+),(\d+),(\d+)\)/,// Parse reference id
reference:/#([a-z0-9\-_]+)/i,// splits a transformation chain
transforms:/\)\s*,?\s*/,// Whitespace
whitespace:/\s/g,// Test hex value
isHex:/^#[a-f0-9]{3,6}$/i,// Test rgb value
isRgb:/^rgb\(/,// Test css declaration
isCss:/[^:]+:[^;]+;?/,// Test for blank string
isBlank:/^(\s+)?$/,// Test for numeric string
isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,// Test for percent value
isPercent:/^-?[\d\.]+%$/,// Test for image url
isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,// split at whitespace and comma
delimiter:/[\s,]+/,// The following regex are used to parse the d attribute of a path
// Matches all hyphens which are not after an exponent
hyphen:/([^e])\-/gi,// Replaces and tests for all path letters
pathLetters:/[MLHVCSQTAZ]/gi,// yes we need this one, too
isPathLetter:/[MLHVCSQTAZ]/i,// matches 0.154.23.45
numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,// matches .
dots:/\./g};SVG.utils={// Map function
map:function map(array,block){var il=array.length,result=[];for(var i=0;i<il;i++){result.push(block(array[i]));}return result;},// Filter function
filter:function filter(array,block){var il=array.length,result=[];for(var i=0;i<il;i++){if(block(array[i])){result.push(array[i]);}}return result;},filterSVGElements:function filterSVGElements(nodes){return this.filter(nodes,function(el){return el instanceof window.SVGElement;});}};SVG.defaults={// Default attribute values
attrs:{// fill and stroke
'fill-opacity':1,'stroke-opacity':1,'stroke-width':0,'stroke-linejoin':'miter','stroke-linecap':'butt',fill:'#000000',stroke:'#000000',opacity:1,// position
x:0,y:0,cx:0,cy:0,// size
width:0,height:0,// radius
r:0,rx:0,ry:0,// gradient
offset:0,'stop-opacity':1,'stop-color':'#000000',// text
'font-size':16,'font-family':'Helvetica, Arial, sans-serif','text-anchor':'start'}};// Module for color convertions
SVG.Color=function(color){var match;// initialize defaults
this.r=0;this.g=0;this.b=0;if(!color)return;// parse color
if(typeof color==='string'){if(SVG.regex.isRgb.test(color)){// get rgb values
match=SVG.regex.rgb.exec(color.replace(SVG.regex.whitespace,''));// parse numeric values
this.r=parseInt(match[1]);this.g=parseInt(match[2]);this.b=parseInt(match[3]);}else if(SVG.regex.isHex.test(color)){// get hex values
match=SVG.regex.hex.exec(fullHex(color));// parse numeric values
this.r=parseInt(match[1],16);this.g=parseInt(match[2],16);this.b=parseInt(match[3],16);}}else if(_typeof(color)==='object'){this.r=color.r;this.g=color.g;this.b=color.b;}};SVG.extend(SVG.Color,{// Default to hex conversion
toString:function toString(){return this.toHex();},// Build hex value
toHex:function toHex(){return'#'+compToHex(this.r)+compToHex(this.g)+compToHex(this.b);},// Build rgb value
toRgb:function toRgb(){return'rgb('+[this.r,this.g,this.b].join()+')';},// Calculate true brightness
brightness:function brightness(){return this.r/255*0.30+this.g/255*0.59+this.b/255*0.11;},// Make color morphable
morph:function morph(color){this.destination=new SVG.Color(color);return this;},// Get morphed color at given position
at:function at(pos){// make sure a destination is defined
if(!this.destination)return this;// normalise pos
pos=pos<0?0:pos>1?1:pos;// generate morphed color
return new SVG.Color({r:~~(this.r+(this.destination.r-this.r)*pos),g:~~(this.g+(this.destination.g-this.g)*pos),b:~~(this.b+(this.destination.b-this.b)*pos)});}});// Testers
// Test if given value is a color string
SVG.Color.test=function(color){color+='';return SVG.regex.isHex.test(color)||SVG.regex.isRgb.test(color);};// Test if given value is a rgb object
SVG.Color.isRgb=function(color){return color&&typeof color.r==='number'&&typeof color.g==='number'&&typeof color.b==='number';};// Test if given value is a color
SVG.Color.isColor=function(color){return SVG.Color.isRgb(color)||SVG.Color.test(color);};// Module for array conversion
SVG.Array=function(array,fallback){array=(array||[]).valueOf();// if array is empty and fallback is provided, use fallback
if(array.length==0&&fallback){array=fallback.valueOf();}// parse array
this.value=this.parse(array);};SVG.extend(SVG.Array,{// Convert array to string
toString:function toString(){return this.value.join(' ');},// Real value
valueOf:function valueOf(){return this.value;},// Parse whitespace separated string
parse:function parse(array){array=array.valueOf();// if already is an array, no need to parse it
if(Array.isArray(array))return array;return this.split(array);}});// Poly points array
SVG.PointArray=function(array,fallback){SVG.Array.call(this,array,fallback||[[0,0]]);};// Inherit from SVG.Array
SVG.PointArray.prototype=new SVG.Array();SVG.PointArray.prototype.constructor=SVG.PointArray;var pathHandlers={M:function M(c,p,p0){p.x=p0.x=c[0];p.y=p0.y=c[1];return['M',p.x,p.y];},L:function L(c,p){p.x=c[0];p.y=c[1];return['L',c[0],c[1]];},H:function H(c,p){p.x=c[0];return['H',c[0]];},V:function V(c,p){p.y=c[0];return['V',c[0]];},C:function C(c,p){p.x=c[4];p.y=c[5];return['C',c[0],c[1],c[2],c[3],c[4],c[5]];},Q:function Q(c,p){p.x=c[2];p.y=c[3];return['Q',c[0],c[1],c[2],c[3]];},S:function S(c,p){p.x=c[2];p.y=c[3];return['S',c[0],c[1],c[2],c[3]];},Z:function Z(c,p,p0){p.x=p0.x;p.y=p0.y;return['Z'];}};var mlhvqtcsa='mlhvqtcsaz'.split('');for(var i=0,il=mlhvqtcsa.length;i<il;++i){pathHandlers[mlhvqtcsa[i]]=function(i){return function(c,p,p0){if(i=='H')c[0]=c[0]+p.x;else if(i=='V')c[0]=c[0]+p.y;else if(i=='A'){c[5]=c[5]+p.x,c[6]=c[6]+p.y;}else{for(var j=0,jl=c.length;j<jl;++j){c[j]=c[j]+(j%2?p.y:p.x);}}if(pathHandlers&&typeof pathHandlers[i]==='function'){// this check fixes jest unit tests
return pathHandlers[i](c,p,p0);}};}(mlhvqtcsa[i].toUpperCase());}// Path points array
SVG.PathArray=function(array,fallback){SVG.Array.call(this,array,fallback||[['M',0,0]]);};// Inherit from SVG.Array
SVG.PathArray.prototype=new SVG.Array();SVG.PathArray.prototype.constructor=SVG.PathArray;SVG.extend(SVG.PathArray,{// Convert array to string
toString:function toString(){return arrayToString(this.value);},// Move path string
move:function move(x,y){// get bounding box of current situation
var box=this.bbox();// get relative offset
x-=box.x;y-=box.y;return this;},// Get morphed path array at given position
at:function at(pos){// make sure a destination is defined
if(!this.destination)return this;var sourceArray=this.value,destinationArray=this.destination.value,array=[],pathArray=new SVG.PathArray(),il,jl;// Animate has specified in the SVG spec
// See: https://www.w3.org/TR/SVG11/paths.html#PathElement
for(var i=0,il=sourceArray.length;i<il;i++){array[i]=[sourceArray[i][0]];for(var j=1,jl=sourceArray[i].length;j<jl;j++){array[i][j]=sourceArray[i][j]+(destinationArray[i][j]-sourceArray[i][j])*pos;}// For the two flags of the elliptical arc command, the SVG spec say:
// Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
// Elliptical arc command as an array followed by corresponding indexes:
// ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
//   0    1   2        3                 4             5      6  7
if(array[i][0]==='A'){array[i][4]=+(array[i][4]!=0);array[i][5]=+(array[i][5]!=0);}}// Directly modify the value of a path array, this is done this way for performance
pathArray.value=array;return pathArray;},// Absolutize and parse path to array
parse:function parse(array){// if it's already a patharray, no need to parse it
if(array instanceof SVG.PathArray)return array.valueOf();// prepare for parsing
var s,arr,paramCnt={'M':2,'L':2,'H':1,'V':1,'C':6,'S':4,'Q':4,'T':2,'A':7,'Z':0};if(typeof array==='string'){array=array.replace(SVG.regex.numbersWithDots,pathRegReplace)// convert 45.123.123 to 45.123 .123
.replace(SVG.regex.pathLetters,' $& ')// put some room between letters and numbers
.replace(SVG.regex.hyphen,'$1 -')// add space before hyphen
.trim()// trim
.split(SVG.regex.delimiter);// split into array
}else{array=array.reduce(function(prev,curr){return[].concat.call(prev,curr);},[]);}// array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]
var arr=[],p=new SVG.Point(),p0=new SVG.Point(),index=0,len=array.length;do{// Test if we have a path letter
if(SVG.regex.isPathLetter.test(array[index])){s=array[index];++index;// If last letter was a move command and we got no new, it defaults to [L]ine
}else if(s=='M'){s='L';}else if(s=='m'){s='l';}arr.push(pathHandlers[s].call(null,array.slice(index,index=index+paramCnt[s.toUpperCase()]).map(parseFloat),p,p0));}while(len>index);return arr;},// Get bounding box of path
bbox:function bbox(){if(!SVG.parser.draw){SVG.prepare();}SVG.parser.path.setAttribute('d',this.toString());return SVG.parser.path.getBBox();}});// Module for unit convertions
SVG.Number=SVG.invent({// Initialize
create:function create(value,unit){// initialize defaults
this.value=0;this.unit=unit||'';// parse value
if(typeof value==='number'){// ensure a valid numeric value
this.value=isNaN(value)?0:!isFinite(value)?value<0?-3.4e+38:+3.4e+38:value;}else if(typeof value==='string'){unit=value.match(SVG.regex.numberAndUnit);if(unit){// make value numeric
this.value=parseFloat(unit[1]);// normalize
if(unit[5]=='%'){this.value/=100;}else if(unit[5]=='s'){this.value*=1000;}// store unit
this.unit=unit[5];}}else{if(value instanceof SVG.Number){this.value=value.valueOf();this.unit=value.unit;}}},// Add methods
extend:{// Stringalize
toString:function toString(){return(this.unit=='%'?~~(this.value*1e8)/1e6:this.unit=='s'?this.value/1e3:this.value)+this.unit;},toJSON:function toJSON(){return this.toString();},// Convert to primitive
valueOf:function valueOf(){return this.value;},// Add number
plus:function plus(number){number=new SVG.Number(number);return new SVG.Number(this+number,this.unit||number.unit);},// Subtract number
minus:function minus(number){number=new SVG.Number(number);return new SVG.Number(this-number,this.unit||number.unit);},// Multiply number
times:function times(number){number=new SVG.Number(number);return new SVG.Number(this*number,this.unit||number.unit);},// Divide number
divide:function divide(number){number=new SVG.Number(number);return new SVG.Number(this/number,this.unit||number.unit);},// Convert to different unit
to:function to(unit){var number=new SVG.Number(this);if(typeof unit==='string'){number.unit=unit;}return number;},// Make number morphable
morph:function morph(number){this.destination=new SVG.Number(number);if(number.relative){this.destination.value+=this.value;}return this;},// Get morphed number at given position
at:function at(pos){// Make sure a destination is defined
if(!this.destination)return this;// Generate new morphed number
return new SVG.Number(this.destination).minus(this).times(pos).plus(this);}}});SVG.Element=SVG.invent({// Initialize node
create:function create(node){// make stroke value accessible dynamically
this._stroke=SVG.defaults.attrs.stroke;this._event=null;// initialize data object
this.dom={};// create circular reference
if(this.node=node){this.type=node.nodeName;this.node.instance=this;// store current attribute value
this._stroke=node.getAttribute('stroke')||this._stroke;}},// Add class methods
extend:{// Move over x-axis
x:function x(_x){return this.attr('x',_x);},// Move over y-axis
y:function y(_y){return this.attr('y',_y);},// Move by center over x-axis
cx:function cx(x){return x==null?this.x()+this.width()/2:this.x(x-this.width()/2);},// Move by center over y-axis
cy:function cy(y){return y==null?this.y()+this.height()/2:this.y(y-this.height()/2);},// Move element to given x and y values
move:function move(x,y){return this.x(x).y(y);},// Move element by its center
center:function center(x,y){return this.cx(x).cy(y);},// Set width of element
width:function width(_width){return this.attr('width',_width);},// Set height of element
height:function height(_height){return this.attr('height',_height);},// Set element size to given width and height
size:function size(width,height){var p=proportionalSize(this,width,height);return this.width(new SVG.Number(p.width)).height(new SVG.Number(p.height));},// Clone element
clone:function clone(parent){// write dom data to the dom so the clone can pickup the data
this.writeDataToDom();// clone element and assign new id
var clone=assignNewId(this.node.cloneNode(true));// insert the clone in the given parent or after myself
if(parent)parent.add(clone);else this.after(clone);return clone;},// Remove element
remove:function remove(){if(this.parent()){this.parent().removeElement(this);}return this;},// Replace element
replace:function replace(element){this.after(element).remove();return element;},// Add element to given container and return self
addTo:function addTo(parent){return parent.put(this);},// Add element to given container and return container
putIn:function putIn(parent){return parent.add(this);},// Get / set id
id:function id(_id){return this.attr('id',_id);},// Show element
show:function show(){return this.style('display','');},// Hide element
hide:function hide(){return this.style('display','none');},// Is element visible?
visible:function visible(){return this.style('display')!='none';},// Return id on string conversion
toString:function toString(){return this.attr('id');},// Return array of classes on the node
classes:function classes(){var attr=this.attr('class');return attr==null?[]:attr.trim().split(SVG.regex.delimiter);},// Return true if class exists on the node, false otherwise
hasClass:function hasClass(name){return this.classes().indexOf(name)!=-1;},// Add class to the node
addClass:function addClass(name){if(!this.hasClass(name)){var array=this.classes();array.push(name);this.attr('class',array.join(' '));}return this;},// Remove class from the node
removeClass:function removeClass(name){if(this.hasClass(name)){this.attr('class',this.classes().filter(function(c){return c!=name;}).join(' '));}return this;},// Toggle the presence of a class on the node
toggleClass:function toggleClass(name){return this.hasClass(name)?this.removeClass(name):this.addClass(name);},// Get referenced element form attribute value
reference:function reference(attr){return SVG.get(this.attr(attr));},// Returns the parent element instance
parent:function parent(type){var parent=this;// check for parent
if(!parent.node.parentNode)return null;// get parent element
parent=SVG.adopt(parent.node.parentNode);if(!type)return parent;// loop trough ancestors if type is given
while(parent&&parent.node instanceof window.SVGElement){if(typeof type==='string'?parent.matches(type):parent instanceof type)return parent;if(!parent.node.parentNode||parent.node.parentNode.nodeName=='#document')return null;// #759, #720
parent=SVG.adopt(parent.node.parentNode);}},// Get parent document
doc:function doc(){return this instanceof SVG.Doc?this:this.parent(SVG.Doc);},// return array of all ancestors of given type up to the root svg
parents:function parents(type){var parents=[],parent=this;do{parent=parent.parent(type);if(!parent||!parent.node)break;parents.push(parent);}while(parent.parent);return parents;},// matches the element vs a css selector
matches:function matches(selector){return _matches(this.node,selector);},// Returns the svg node to call native svg methods on it
native:function native(){return this.node;},// Import raw svg
svg:function svg(_svg){// create temporary holder
var well=document.createElement('svg');// act as a setter if svg is given
if(_svg&&this instanceof SVG.Parent){// dump raw svg
well.innerHTML='<svg>'+_svg.replace(/\n/,'').replace(/<([\w:-]+)([^<]+?)\/>/g,'<$1$2></$1>')+'</svg>';// transplant nodes
for(var i=0,il=well.firstChild.childNodes.length;i<il;i++){this.node.appendChild(well.firstChild.firstChild);}// otherwise act as a getter
}else{// create a wrapping svg element in case of partial content
well.appendChild(_svg=document.createElement('svg'));// write svgjs data to the dom
this.writeDataToDom();// insert a copy of this node
_svg.appendChild(this.node.cloneNode(true));// return target element
return well.innerHTML.replace(/^<svg>/,'').replace(/<\/svg>$/,'');}return this;},// write svgjs data to the dom
writeDataToDom:function writeDataToDom(){// dump variables recursively
if(this.each||this.lines){var fn=this.each?this:this.lines();fn.each(function(){this.writeDataToDom();});}// remove previously set data
this.node.removeAttribute('svgjs:data');if(Object.keys(this.dom).length){this.node.setAttribute('svgjs:data',JSON.stringify(this.dom));}// see #428
return this;},// set given data to the elements data property
setData:function setData(o){this.dom=o;return this;},is:function is(obj){return _is(this,obj);}}});SVG.easing={'-':function _(pos){return pos;},'<>':function _(pos){return-Math.cos(pos*Math.PI)/2+0.5;},'>':function _(pos){return Math.sin(pos*Math.PI/2);},'<':function _(pos){return-Math.cos(pos*Math.PI/2)+1;}};SVG.morph=function(pos){return function(from,to){return new SVG.MorphObj(from,to).at(pos);};};SVG.Situation=SVG.invent({create:function create(o){this.init=false;this.reversed=false;this.reversing=false;this.duration=new SVG.Number(o.duration).valueOf();this.delay=new SVG.Number(o.delay).valueOf();this.start=+new Date()+this.delay;this.finish=this.start+this.duration;this.ease=o.ease;// this.loop is incremented from 0 to this.loops
// it is also incremented when in an infinite loop (when this.loops is true)
this.loop=0;this.loops=false;this.animations={



























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































// functionToCall: [list of morphable objects]
// e.g. move: [SVG.Number, SVG.Number]
};this.attrs={// holds all attributes which are not represented from a function svg.js provides
// e.g. someAttr: SVG.Number
};this.styles={// holds all styles which should be animated
// e.g. fill-color: SVG.Color
};this.transforms=[// holds all transformations as transformation objects
// e.g. [SVG.Rotate, SVG.Translate, SVG.Matrix]
];this.once={// functions to fire at a specific position
// e.g. "0.5": function foo(){}
};}});SVG.FX=SVG.invent({create:function create(element){this._target=element;this.situations=[];this.active=false;this.situation=null;this.paused=false;this.lastPos=0;this.pos=0;// The absolute position of an animation is its position in the context of its complete duration (including delay and loops)
// When performing a delay, absPos is below 0 and when performing a loop, its value is above 1
this.absPos=0;this._speed=1;},extend:{/**
         * sets or returns the target of this animation
         * @param o object || number In case of Object it holds all parameters. In case of number its the duration of the animation
         * @param ease function || string Function which should be used for easing or easing keyword
         * @param delay Number indicating the delay before the animation starts
         * @return target || this
         */animate:function animate(o,ease,delay){if(_typeof(o)==='object'){ease=o.ease;delay=o.delay;o=o.duration;}var situation=new SVG.Situation({duration:o||1000,delay:delay||0,ease:SVG.easing[ease||'-']||ease});this.queue(situation);return this;},/**
        * sets a delay before the next element of the queue is called
        * @param delay Duration of delay in milliseconds
        * @return this.target()
        */ /**
        * sets or returns the target of this animation
        * @param null || target SVG.Element which should be set as new target
        * @return target || this
        */target:function target(_target){if(_target&&_target instanceof SVG.Element){this._target=_target;return this;}return this._target;},// returns the absolute position at a given time
timeToAbsPos:function timeToAbsPos(timestamp){return(timestamp-this.situation.start)/(this.situation.duration/this._speed);},// returns the timestamp from a given absolute positon
absPosToTime:function absPosToTime(absPos){return this.situation.duration/this._speed*absPos+this.situation.start;},// starts the animationloop
startAnimFrame:function startAnimFrame(){this.stopAnimFrame();this.animationFrame=window.requestAnimationFrame(function(){this.step();}.bind(this));},// cancels the animationframe
stopAnimFrame:function stopAnimFrame(){window.cancelAnimationFrame(this.animationFrame);},// kicks off the animation - only does something when the queue is currently not active and at least one situation is set
start:function start(){// dont start if already started
if(!this.active&&this.situation){this.active=true;this.startCurrent();}return this;},// start the current situation
startCurrent:function startCurrent(){this.situation.start=+new Date()+this.situation.delay/this._speed;this.situation.finish=this.situation.start+this.situation.duration/this._speed;return this.initAnimations().step();},/**
        * adds a function / Situation to the animation queue
        * @param fn function / situation to add
        * @return this
        */queue:function queue(fn){if(typeof fn==='function'||fn instanceof SVG.Situation){this.situations.push(fn);}if(!this.situation)this.situation=this.situations.shift();return this;},/**
        * pulls next element from the queue and execute it
        * @return this
        */dequeue:function dequeue(){// stop current animation
this.stop();// get next animation from queue
this.situation=this.situations.shift();if(this.situation){if(this.situation instanceof SVG.Situation){this.start();}else{// If it is not a SVG.Situation, then it is a function, we execute it
this.situation.call(this);}}return this;},// updates all animations to the current state of the element
// this is important when one property could be changed from another property
initAnimations:function initAnimations(){var source;var s=this.situation;if(s.init)return this;for(var i in s.animations){source=this.target()[i]();if(!Array.isArray(source)){source=[source];}if(!Array.isArray(s.animations[i])){s.animations[i]=[s.animations[i]];}// if(s.animations[i].length > source.length) {
//  source.concat = source.concat(s.animations[i].slice(source.length, s.animations[i].length))
// }
for(var j=source.length;j--;){// The condition is because some methods return a normal number instead
// of a SVG.Number
if(s.animations[i][j]instanceof SVG.Number){source[j]=new SVG.Number(source[j]);}s.animations[i][j]=source[j].morph(s.animations[i][j]);}}for(var i in s.attrs){s.attrs[i]=new SVG.MorphObj(this.target().attr(i),s.attrs[i]);}for(var i in s.styles){s.styles[i]=new SVG.MorphObj(this.target().style(i),s.styles[i]);}s.initialTransformation=this.target().matrixify();s.init=true;return this;},clearQueue:function clearQueue(){this.situations=[];return this;},clearCurrent:function clearCurrent(){this.situation=null;return this;},/** stops the animation immediately
        * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately.
        * @param clearQueue A Boolean indicating whether to remove queued animation as well.
        * @return this
        */stop:function stop(jumpToEnd,clearQueue){var active=this.active;this.active=false;if(clearQueue){this.clearQueue();}if(jumpToEnd&&this.situation){// initialize the situation if it was not
!active&&this.startCurrent();this.atEnd();}this.stopAnimFrame();return this.clearCurrent();},after:function after(fn){var c=this.last(),wrapper=function wrapper(e){if(e.detail.situation==c){fn.call(this,c);this.off('finished.fx',wrapper);// prevent memory leak
}};this.target().on('finished.fx',wrapper);return this._callStart();},// adds a callback which is called whenever one animation step is performed
during:function during(fn){var c=this.last(),wrapper=function wrapper(e){if(e.detail.situation==c){fn.call(this,e.detail.pos,SVG.morph(e.detail.pos),e.detail.eased,c);}};// see above
this.target().off('during.fx',wrapper).on('during.fx',wrapper);this.after(function(){this.off('during.fx',wrapper);});return this._callStart();},// calls after ALL animations in the queue are finished
afterAll:function afterAll(fn){var wrapper=function wrapper(e){fn.call(this);this.off('allfinished.fx',wrapper);};// see above
this.target().off('allfinished.fx',wrapper).on('allfinished.fx',wrapper);return this._callStart();},last:function last(){return this.situations.length?this.situations[this.situations.length-1]:this.situation;},// adds one property to the animations
add:function add(method,args,type){this.last()[type||'animations'][method]=args;return this._callStart();},/** perform one step of the animation
        *  @param ignoreTime Boolean indicating whether to ignore time and use position directly or recalculate position based on time
        *  @return this
        */step:function step(ignoreTime){// convert current time to an absolute position
if(!ignoreTime)this.absPos=this.timeToAbsPos(+new Date());// This part convert an absolute position to a position
if(this.situation.loops!==false){var absPos,absPosInt,lastLoop;// If the absolute position is below 0, we just treat it as if it was 0
absPos=Math.max(this.absPos,0);absPosInt=Math.floor(absPos);if(this.situation.loops===true||absPosInt<this.situation.loops){this.pos=absPos-absPosInt;lastLoop=this.situation.loop;this.situation.loop=absPosInt;}else{this.absPos=this.situation.loops;this.pos=1;// The -1 here is because we don't want to toggle reversed when all the loops have been completed
lastLoop=this.situation.loop-1;this.situation.loop=this.situation.loops;}if(this.situation.reversing){// Toggle reversed if an odd number of loops as occured since the last call of step
this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-lastLoop)%2);}}else{// If there are no loop, the absolute position must not be above 1
this.absPos=Math.min(this.absPos,1);this.pos=this.absPos;}// while the absolute position can be below 0, the position must not be below 0
if(this.pos<0)this.pos=0;if(this.situation.reversed)this.pos=1-this.pos;// apply easing
var eased=this.situation.ease(this.pos);// call once-callbacks
for(var i in this.situation.once){if(i>this.lastPos&&i<=eased){this.situation.once[i].call(this.target(),this.pos,eased);delete this.situation.once[i];}}// fire during callback with position, eased position and current situation as parameter
if(this.active)this.target().fire('during',{pos:this.pos,eased:eased,fx:this,situation:this.situation});// the user may call stop or finish in the during callback
// so make sure that we still have a valid situation
if(!this.situation){return this;}// apply the actual animation to every property
this.eachAt();// do final code when situation is finished
if(this.pos==1&&!this.situation.reversed||this.situation.reversed&&this.pos==0){// stop animation callback
this.stopAnimFrame();// fire finished callback with current situation as parameter
this.target().fire('finished',{fx:this,situation:this.situation});if(!this.situations.length){this.target().fire('allfinished');// Recheck the length since the user may call animate in the afterAll callback
if(!this.situations.length){this.target().off('.fx');// there shouldnt be any binding left, but to make sure...
this.active=false;}}// start next animation
if(this.active)this.dequeue();else this.clearCurrent();}else if(!this.paused&&this.active){// we continue animating when we are not at the end
this.startAnimFrame();}// save last eased position for once callback triggering
this.lastPos=eased;return this;},// calculates the step for every property and calls block with it
eachAt:function eachAt(){var len,at,self=this,target=this.target(),s=this.situation;// apply animations which can be called trough a method
for(var i in s.animations){at=[].concat(s.animations[i]).map(function(el){return typeof el!=='string'&&el.at?el.at(s.ease(self.pos),self.pos):el;});target[i].apply(target,at);}// apply animation which has to be applied with attr()
for(var i in s.attrs){at=[i].concat(s.attrs[i]).map(function(el){return typeof el!=='string'&&el.at?el.at(s.ease(self.pos),self.pos):el;});target.attr.apply(target,at);}// apply animation which has to be applied with style()
for(var i in s.styles){at=[i].concat(s.styles[i]).map(function(el){return typeof el!=='string'&&el.at?el.at(s.ease(self.pos),self.pos):el;});target.style.apply(target,at);}// animate initialTransformation which has to be chained
if(s.transforms.length){// get initial initialTransformation
at=s.initialTransformation;for(var i=0,len=s.transforms.length;i<len;i++){// get next transformation in chain
var a=s.transforms[i];// multiply matrix directly
if(a instanceof SVG.Matrix){if(a.relative){at=at.multiply(new SVG.Matrix().morph(a).at(s.ease(this.pos)));}else{at=at.morph(a).at(s.ease(this.pos));}continue;}// when transformation is absolute we have to reset the needed transformation first
if(!a.relative){a.undo(at.extract());}// and reapply it after
at=at.multiply(a.at(s.ease(this.pos)));}// set new matrix on element
target.matrix(at);}return this;},// adds an once-callback which is called at a specific position and never again
once:function once(pos,fn,isEased){var c=this.last();if(!isEased)pos=c.ease(pos);c.once[pos]=fn;return this;},_callStart:function _callStart(){setTimeout(function(){this.start();}.bind(this),0);return this;}},parent:SVG.Element,// Add method to parent elements
construct:{// Get fx module or create a new one, then animate with given duration and ease
animate:function animate(o,ease,delay){return(this.fx||(this.fx=new SVG.FX(this))).animate(o,ease,delay);},delay:function delay(_delay){return(this.fx||(this.fx=new SVG.FX(this))).delay(_delay);},stop:function stop(jumpToEnd,clearQueue){if(this.fx){this.fx.stop(jumpToEnd,clearQueue);}return this;},finish:function finish(){if(this.fx){this.fx.finish();}return this;}}});// MorphObj is used whenever no morphable object is given
SVG.MorphObj=SVG.invent({create:function create(from,to){// prepare color for morphing
if(SVG.Color.isColor(to))return new SVG.Color(from).morph(to);// check if we have a list of values
if(SVG.regex.delimiter.test(from)){// prepare path for morphing
if(SVG.regex.pathLetters.test(from))return new SVG.PathArray(from).morph(to);// prepare value list for morphing
else return new SVG.Array(from).morph(to);}// prepare number for morphing
if(SVG.regex.numberAndUnit.test(to))return new SVG.Number(from).morph(to);// prepare for plain morphing
this.value=from;this.destination=to;},extend:{at:function at(pos,real){return real<1?this.value:this.destination;},valueOf:function valueOf(){return this.value;}}});SVG.extend(SVG.FX,{// Add animatable attributes
attr:function attr(a,v,relative){// apply attributes individually
if(_typeof(a)==='object'){for(var key in a){this.attr(key,a[key]);}}else{this.add(a,v,'attrs');}return this;},// Add animatable plot
plot:function plot(a,b,c,d){// Lines can be plotted with 4 arguments
if(arguments.length==4){return this.plot([a,b,c,d]);}return this.add('plot',new(this.target().morphArray)(a));}});SVG.Box=SVG.invent({create:function create(x,y,width,height){if(_typeof(x)==='object'&&!(x instanceof SVG.Element)){// chromes getBoundingClientRect has no x and y property
return SVG.Box.call(this,x.left!=null?x.left:x.x,x.top!=null?x.top:x.y,x.width,x.height);}else if(arguments.length==4){this.x=x;this.y=y;this.width=width;this.height=height;}// add center, right, bottom...
fullBox(this);}});SVG.BBox=SVG.invent({// Initialize
create:function create(element){SVG.Box.apply(this,[].slice.call(arguments));// get values if element is given
if(element instanceof SVG.Element){var box;// yes this is ugly, but Firefox can be a pain when it comes to elements that are not yet rendered
try{if(!document.documentElement.contains){// This is IE - it does not support contains() for top-level SVGs
var topParent=element.node;while(topParent.parentNode){topParent=topParent.parentNode;}if(topParent!=document)throw new Error('Element not in the dom');}else{













































































































































































































































































































































































































































































































// the element is NOT in the dom, throw error
// disabling the check below which fixes issue #76
// if (!document.documentElement.contains(element.node)) throw new Exception('Element not in the dom')
}// find native bbox
box=element.node.getBBox();}catch(e){if(element instanceof SVG.Shape){if(!SVG.parser.draw){// fixes apexcharts/vue-apexcharts #14
SVG.prepare();}var clone=element.clone(SVG.parser.draw.instance).show();if(clone&&clone.node&&typeof clone.node.getBBox==='function'){// this check fixes jest unit tests
box=clone.node.getBBox();}if(clone&&typeof clone.remove==='function'){clone.remove();}}else{box={x:element.node.clientLeft,y:element.node.clientTop,width:element.node.clientWidth,height:element.node.clientHeight};}}SVG.Box.call(this,box);}},// Define ancestor
inherit:SVG.Box,// Define Parent
parent:SVG.Element,// Constructor
construct:{// Get bounding box
bbox:function bbox(){return new SVG.BBox(this);}}});SVG.BBox.prototype.constructor=SVG.BBox;SVG.Matrix=SVG.invent({// Initialize
create:function create(source){var base=arrayToMatrix([1,0,0,1,0,0]);// ensure source as object
source=source===null?base:source instanceof SVG.Element?source.matrixify():typeof source==='string'?arrayToMatrix(source.split(SVG.regex.delimiter).map(parseFloat)):arguments.length==6?arrayToMatrix([].slice.call(arguments)):Array.isArray(source)?arrayToMatrix(source):source&&_typeof(source)==='object'?source:base;// merge source
for(var i=abcdef.length-1;i>=0;--i){this[abcdef[i]]=source[abcdef[i]]!=null?source[abcdef[i]]:base[abcdef[i]];}},// Add methods
extend:{// Extract individual transformations
extract:function extract(){// find delta transform points
var px=deltaTransformPoint(this,0,1);deltaTransformPoint(this,1,0);var skewX=180/Math.PI*Math.atan2(px.y,px.x)-90;return{// translation
x:this.e,y:this.f,transformedX:(this.e*Math.cos(skewX*Math.PI/180)+this.f*Math.sin(skewX*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(skewX*Math.PI/180)+this.e*Math.sin(-skewX*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),// rotation
rotation:skewX,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new SVG.Matrix(this)};},// Clone matrix
clone:function clone(){return new SVG.Matrix(this);},// Morph one matrix into another
morph:function morph(matrix){// store new destination
this.destination=new SVG.Matrix(matrix);return this;},// Multiplies by given matrix
multiply:function multiply(matrix){return new SVG.Matrix(this.native().multiply(parseMatrix(matrix).native()));},// Inverses matrix
inverse:function inverse(){return new SVG.Matrix(this.native().inverse());},// Translate matrix
translate:function translate(x,y){return new SVG.Matrix(this.native().translate(x||0,y||0));},// Convert to native SVGMatrix
native:function native(){// create new matrix
var matrix=SVG.parser.native.createSVGMatrix();// update with current values
for(var i=abcdef.length-1;i>=0;i--){matrix[abcdef[i]]=this[abcdef[i]];}return matrix;},// Convert matrix to string
toString:function toString(){// Construct the matrix directly, avoid values that are too small
return'matrix('+float32String(this.a)+','+float32String(this.b)+','+float32String(this.c)+','+float32String(this.d)+','+float32String(this.e)+','+float32String(this.f)+')';}},// Define parent
parent:SVG.Element,// Add parent method
construct:{// Get current matrix
ctm:function ctm(){return new SVG.Matrix(this.node.getCTM());},// Get current screen matrix
screenCTM:function screenCTM(){/* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
             This is needed because FF does not return the transformation matrix
             for the inner coordinate system when getScreenCTM() is called on nested svgs.
             However all other Browsers do that */if(this instanceof SVG.Nested){var rect=this.rect(1,1);var m=rect.node.getScreenCTM();rect.remove();return new SVG.Matrix(m);}return new SVG.Matrix(this.node.getScreenCTM());}}});SVG.Point=SVG.invent({// Initialize
create:function create(x,y){var source,base={x:0,y:0};// ensure source as object
source=Array.isArray(x)?{x:x[0],y:x[1]}:_typeof(x)==='object'?{x:x.x,y:x.y}:x!=null?{x:x,y:y!=null?y:x}:base;// If y has no value, then x is used has its value
// merge source
this.x=source.x;this.y=source.y;},// Add methods
extend:{// Clone point
clone:function clone(){return new SVG.Point(this);},// Morph one point into another
morph:function morph(x,y){// store new destination
this.destination=new SVG.Point(x,y);return this;}}});SVG.extend(SVG.Element,{// Get point
point:function point(x,y){return new SVG.Point(x,y).transform(this.screenCTM().inverse());}});SVG.extend(SVG.Element,{// Set svg element attribute
attr:function attr(a,v,n){// act as full getter
if(a==null){// get an object of attributes
a={};v=this.node.attributes;for(var n=v.length-1;n>=0;n--){a[v[n].nodeName]=SVG.regex.isNumber.test(v[n].nodeValue)?parseFloat(v[n].nodeValue):v[n].nodeValue;}return a;}else if(_typeof(a)==='object'){// apply every attribute individually if an object is passed
for(var v_ in a){this.attr(v_,a[v_]);}}else if(v===null){// remove value
this.node.removeAttribute(a);}else if(v==null){// act as a getter if the first and only argument is not an object
v=this.node.getAttribute(a);return v==null?SVG.defaults.attrs[a]:SVG.regex.isNumber.test(v)?parseFloat(v):v;}else{// BUG FIX: some browsers will render a stroke if a color is given even though stroke width is 0
if(a=='stroke-width'){this.attr('stroke',parseFloat(v)>0?this._stroke:null);}else if(a=='stroke'){this._stroke=v;}// convert image fill and stroke to patterns
if(a=='fill'||a=='stroke'){if(SVG.regex.isImage.test(v)){v=this.doc().defs().image(v,0,0);}if(v instanceof SVG.Image){v=this.doc().defs().pattern(0,0,function(){this.add(v);});}}// ensure correct numeric values (also accepts NaN and Infinity)
if(typeof v==='number'){v=new SVG.Number(v);}// ensure full hex color
else if(SVG.Color.isColor(v)){v=new SVG.Color(v);}// parse array values
else if(Array.isArray(v)){v=new SVG.Array(v);}// if the passed attribute is leading...
if(a=='leading'){// ... call the leading method instead
if(this.leading){this.leading(v);}}else{// set given attribute on node
typeof n==='string'?this.node.setAttributeNS(n,a,v.toString()):this.node.setAttribute(a,v.toString());}// rebuild if required
if(this.rebuild&&(a=='font-size'||a=='x')){this.rebuild(a,v);}}return this;}});SVG.extend(SVG.Element,{// Add transformations
transform:function transform(o,relative){// get target in case of the fx module, otherwise reference this
var target=this,matrix;// act as a getter
if(_typeof(o)!=='object'){// get current matrix
matrix=new SVG.Matrix(target).extract();return typeof o==='string'?matrix[o]:matrix;}// get current matrix
matrix=new SVG.Matrix(target);// ensure relative flag
relative=!!relative||!!o.relative;// act on matrix
if(o.a!=null){matrix=relative// relative
?matrix.multiply(new SVG.Matrix(o))// absolute
:new SVG.Matrix(o);}return this.attr('transform',matrix);}});SVG.extend(SVG.Element,{// Reset all transformations
untransform:function untransform(){return this.attr('transform',null);},// merge the whole transformation chain into one matrix and returns it
matrixify:function matrixify(){var matrix=(this.attr('transform')||'').split(SVG.regex.transforms).slice(0,-1).map(function(str){// generate key => value pairs
var kv=str.trim().split('(');return[kv[0],kv[1].split(SVG.regex.delimiter).map(function(str){return parseFloat(str);})];})// merge every transformation into one matrix
.reduce(function(matrix,transform){if(transform[0]=='matrix')return matrix.multiply(arrayToMatrix(transform[1]));return matrix[transform[0]].apply(matrix,transform[1]);},new SVG.Matrix());return matrix;},// add an element to another parent without changing the visual representation on the screen
toParent:function toParent(parent){if(this==parent)return this;var ctm=this.screenCTM();var pCtm=parent.screenCTM().inverse();this.addTo(parent).untransform().transform(pCtm.multiply(ctm));return this;},// same as above with parent equals root-svg
toDoc:function toDoc(){return this.toParent(this.doc());}});SVG.Transformation=SVG.invent({create:function create(source,inversed){if(arguments.length>1&&typeof inversed!=='boolean'){return this.constructor.call(this,[].slice.call(arguments));}if(Array.isArray(source)){for(var i=0,len=this.arguments.length;i<len;++i){this[this.arguments[i]]=source[i];}}else if(source&&_typeof(source)==='object'){for(var i=0,len=this.arguments.length;i<len;++i){this[this.arguments[i]]=source[this.arguments[i]];}}this.inversed=false;if(inversed===true){this.inversed=true;}}});SVG.Translate=SVG.invent({parent:SVG.Matrix,inherit:SVG.Transformation,create:function create(source,inversed){this.constructor.apply(this,[].slice.call(arguments));},extend:{arguments:['transformedX','transformedY'],method:'translate'}});SVG.extend(SVG.Element,{// Dynamic style generator
style:function style(s,v){if(arguments.length==0){// get full style
return this.node.style.cssText||'';}else if(arguments.length<2){// apply every style individually if an object is passed
if(_typeof(s)==='object'){for(var v_ in s){this.style(v_,s[v_]);}}else if(SVG.regex.isCss.test(s)){// parse css string
s=s.split(/\s*;\s*/)// filter out suffix ; and stuff like ;;
.filter(function(e){return!!e;}).map(function(e){return e.split(/\s*:\s*/);});// apply every definition individually
while(v=s.pop()){this.style(v[0],v[1]);}}else{// act as a getter if the first and only argument is not an object
return this.node.style[camelCase(s)];}}else{this.node.style[camelCase(s)]=v===null||SVG.regex.isBlank.test(v)?'':v;}return this;}});SVG.Parent=SVG.invent({// Initialize node
create:function create(element){this.constructor.call(this,element);},// Inherit from
inherit:SVG.Element,// Add class methods
extend:{// Returns all child elements
children:function children(){return SVG.utils.map(SVG.utils.filterSVGElements(this.node.childNodes),function(node){return SVG.adopt(node);});},// Add given element at a position
add:function add(element,i){if(i==null){this.node.appendChild(element.node);}else if(element.node!=this.node.childNodes[i]){this.node.insertBefore(element.node,this.node.childNodes[i]);}return this;},// Basically does the same as `add()` but returns the added element instead
put:function put(element,i){this.add(element,i);return element;},// Checks if the given element is a child
has:function has(element){return this.index(element)>=0;},// Gets index of given element
index:function index(element){return[].slice.call(this.node.childNodes).indexOf(element.node);},// Get a element at the given index
get:function get(i){return SVG.adopt(this.node.childNodes[i]);},// Get first child
first:function first(){return this.get(0);},// Get the last child
last:function last(){return this.get(this.node.childNodes.length-1);},// Iterates over all children and invokes a given block
each:function each(block,deep){var il,children=this.children();for(var i=0,il=children.length;i<il;i++){if(children[i]instanceof SVG.Element){block.apply(children[i],[i,children]);}if(deep&&children[i]instanceof SVG.Container){children[i].each(block,deep);}}return this;},// Remove a given child
removeElement:function removeElement(element){this.node.removeChild(element.node);return this;},// Remove all elements in this container
clear:function clear(){// remove children
while(this.node.hasChildNodes()){this.node.removeChild(this.node.lastChild);}// remove defs reference
delete this._defs;return this;},// Get defs
defs:function defs(){return this.doc().defs();}}});SVG.extend(SVG.Parent,{ungroup:function ungroup(parent,depth){if(depth===0||this instanceof SVG.Defs||this.node==SVG.parser.draw)return this;parent=parent||(this instanceof SVG.Doc?this:this.parent(SVG.Parent));depth=depth||Infinity;this.each(function(){if(this instanceof SVG.Defs)return this;if(this instanceof SVG.Parent)return this.ungroup(parent,depth-1);return this.toParent(parent);});this.node.firstChild||this.remove();return this;},flatten:function flatten(parent,depth){return this.ungroup(parent,depth);}});SVG.Container=SVG.invent({// Initialize node
create:function create(element){this.constructor.call(this,element);},// Inherit from
inherit:SVG.Parent});SVG.ViewBox=SVG.invent({// Define parent
parent:SVG.Container,// Add parent method
construct:{}})// Add events to elements
;['click','dblclick','mousedown','mouseup','mouseover','mouseout','mousemove',// , 'mouseenter' -> not supported by IE
// , 'mouseleave' -> not supported by IE
'touchstart','touchmove','touchleave','touchend','touchcancel'].forEach(function(event){// add event to SVG.Element
SVG.Element.prototype[event]=function(f){// bind event to element rather than element node
SVG.on(this.node,event,f);return this;};});// Initialize listeners stack
SVG.listeners=[];SVG.handlerMap=[];SVG.listenerId=0;// Add event binder in the SVG namespace
SVG.on=function(node,event,listener,binding,options){// create listener, get object-index
var l=listener.bind(binding||node.instance||node),index=(SVG.handlerMap.indexOf(node)+1||SVG.handlerMap.push(node))-1,ev=event.split('.')[0],ns=event.split('.')[1]||'*';// ensure valid object
SVG.listeners[index]=SVG.listeners[index]||{};SVG.listeners[index][ev]=SVG.listeners[index][ev]||{};SVG.listeners[index][ev][ns]=SVG.listeners[index][ev][ns]||{};if(!listener._svgjsListenerId){listener._svgjsListenerId=++SVG.listenerId;}// reference listener
SVG.listeners[index][ev][ns][listener._svgjsListenerId]=l;// add listener
node.addEventListener(ev,l,options||{passive:false});};// Add event unbinder in the SVG namespace
SVG.off=function(node,event,listener){var index=SVG.handlerMap.indexOf(node),ev=event&&event.split('.')[0],ns=event&&event.split('.')[1],namespace='';if(index==-1)return;if(listener){if(typeof listener==='function')listener=listener._svgjsListenerId;if(!listener)return;// remove listener reference
if(SVG.listeners[index][ev]&&SVG.listeners[index][ev][ns||'*']){// remove listener
node.removeEventListener(ev,SVG.listeners[index][ev][ns||'*'][listener],false);delete SVG.listeners[index][ev][ns||'*'][listener];}}else if(ns&&ev){// remove all listeners for a namespaced event
if(SVG.listeners[index][ev]&&SVG.listeners[index][ev][ns]){for(var listener_ in SVG.listeners[index][ev][ns]){SVG.off(node,[ev,ns].join('.'),listener_);}delete SVG.listeners[index][ev][ns];}}else if(ns){// remove all listeners for a specific namespace
for(var event_ in SVG.listeners[index]){for(var namespace in SVG.listeners[index][event_]){if(ns===namespace){SVG.off(node,[event_,ns].join('.'));}}}}else if(ev){// remove all listeners for the event
if(SVG.listeners[index][ev]){for(var namespace in SVG.listeners[index][ev]){SVG.off(node,[ev,namespace].join('.'));}delete SVG.listeners[index][ev];}}else{// remove all listeners on a given node
for(var event_ in SVG.listeners[index]){SVG.off(node,event_);}delete SVG.listeners[index];delete SVG.handlerMap[index];}};//
SVG.extend(SVG.Element,{// Bind given event to listener
on:function on(event,listener,binding,options){SVG.on(this.node,event,listener,binding,options);return this;},// Unbind event from listener
off:function off(event,listener){SVG.off(this.node,event,listener);return this;},// Fire given event
fire:function fire(event,data){// Dispatch event
if(event instanceof window.Event){this.node.dispatchEvent(event);}else{this.node.dispatchEvent(event=new SVG.CustomEvent(event,{detail:data,cancelable:true}));}this._event=event;return this;},event:function event(){return this._event;}});SVG.Defs=SVG.invent({// Initialize node
create:'defs',// Inherit from
inherit:SVG.Container});SVG.G=SVG.invent({// Initialize node
create:'g',// Inherit from
inherit:SVG.Container,// Add class methods
extend:{// Move over x-axis
x:function x(_x2){return _x2==null?this.transform('x'):this.transform({x:_x2-this.x()},true);}},// Add parent method
construct:{// Create a group element
group:function group(){return this.put(new SVG.G());}}});SVG.Doc=SVG.invent({// Initialize node
create:function create(element){if(element){// ensure the presence of a dom element
element=typeof element==='string'?document.getElementById(element):element;// If the target is an svg element, use that element as the main wrapper.
// This allows svg.js to work with svg documents as well.
if(element.nodeName=='svg'){this.constructor.call(this,element);}else{this.constructor.call(this,SVG.create('svg'));element.appendChild(this.node);this.size('100%','100%');}// set svg element attributes and ensure defs node
this.namespace().defs();}},// Inherit from
inherit:SVG.Container,// Add class methods
extend:{// Add namespaces
namespace:function namespace(){return this.attr({xmlns:SVG.ns,version:'1.1'}).attr('xmlns:xlink',SVG.xlink,SVG.xmlns).attr('xmlns:svgjs',SVG.svgjs,SVG.xmlns);},// Creates and returns defs element
defs:function defs(){if(!this._defs){var defs;// Find or create a defs element in this instance
if(defs=this.node.getElementsByTagName('defs')[0]){this._defs=SVG.adopt(defs);}else{this._defs=new SVG.Defs();}// Make sure the defs node is at the end of the stack
this.node.appendChild(this._defs.node);}return this._defs;},// custom parent method
parent:function parent(){if(!this.node.parentNode||this.node.parentNode.nodeName=='#document')return null;return this.node.parentNode;},// Removes the doc from the DOM
remove:function remove(){if(this.parent()){this.parent().removeChild(this.node);}return this;},clear:function clear(){// remove children
while(this.node.hasChildNodes()){this.node.removeChild(this.node.lastChild);}// remove defs reference
delete this._defs;// add back parser
if(SVG.parser.draw&&!SVG.parser.draw.parentNode){this.node.appendChild(SVG.parser.draw);}return this;},clone:function clone(parent){// write dom data to the dom so the clone can pickup the data
this.writeDataToDom();// get reference to node
var node=this.node;// clone element and assign new id
var clone=assignNewId(node.cloneNode(true));// insert the clone in the given parent or after myself
if(parent){(parent.node||parent).appendChild(clone.node);}else{node.parentNode.insertBefore(clone.node,node.nextSibling);}return clone;}}});// ### This module adds backward / forward functionality to elements.
//
SVG.extend(SVG.Element,{// Get all siblings, including myself
});SVG.Gradient=SVG.invent({// Initialize node
create:function create(type){this.constructor.call(this,SVG.create(type+'Gradient'));// store type
this.type=type;},// Inherit from
inherit:SVG.Container,// Add class methods
extend:{// Add a color stop
at:function at(offset,color,opacity){return this.put(new SVG.Stop()).update(offset,color,opacity);},// Update gradient
update:function update(block){// remove all stops
this.clear();// invoke passed block
if(typeof block==='function'){block.call(this,this);}return this;},// Return the fill id
fill:function fill(){return'url(#'+this.id()+')';},// Alias string convertion to fill
toString:function toString(){return this.fill();},// custom attr to handle transform
attr:function attr(a,b,c){if(a=='transform')a='gradientTransform';return SVG.Container.prototype.attr.call(this,a,b,c);}},// Add parent method
construct:{// Create gradient element in defs
gradient:function gradient(type,block){return this.defs().gradient(type,block);}}});// Add animatable methods to both gradient and fx module
SVG.extend(SVG.Gradient,SVG.FX,{// From position
from:function from(x,y){return(this._target||this).type=='radial'?this.attr({fx:new SVG.Number(x),fy:new SVG.Number(y)}):this.attr({x1:new SVG.Number(x),y1:new SVG.Number(y)});},// To position
to:function to(x,y){return(this._target||this).type=='radial'?this.attr({cx:new SVG.Number(x),cy:new SVG.Number(y)}):this.attr({x2:new SVG.Number(x),y2:new SVG.Number(y)});}});// Base gradient generation
SVG.extend(SVG.Defs,{// define gradient
gradient:function gradient(type,block){return this.put(new SVG.Gradient(type)).update(block);}});SVG.Stop=SVG.invent({// Initialize node
create:'stop',// Inherit from
inherit:SVG.Element,// Add class methods
extend:{// add color stops
update:function update(o){if(typeof o==='number'||o instanceof SVG.Number){o={offset:arguments[0],color:arguments[1],opacity:arguments[2]};}// set attributes
if(o.opacity!=null)this.attr('stop-opacity',o.opacity);if(o.color!=null)this.attr('stop-color',o.color);if(o.offset!=null)this.attr('offset',new SVG.Number(o.offset));return this;}}});SVG.Pattern=SVG.invent({// Initialize node
create:'pattern',// Inherit from
inherit:SVG.Container,// Add class methods
extend:{// Return the fill id
fill:function fill(){return'url(#'+this.id()+')';},// Update pattern by rebuilding
update:function update(block){// remove content
this.clear();// invoke passed block
if(typeof block==='function'){block.call(this,this);}return this;},// Alias string convertion to fill
toString:function toString(){return this.fill();},// custom attr to handle transform
attr:function attr(a,b,c){if(a=='transform')a='patternTransform';return SVG.Container.prototype.attr.call(this,a,b,c);}},// Add parent method
construct:{// Create pattern element in defs
pattern:function pattern(width,height,block){return this.defs().pattern(width,height,block);}}});SVG.extend(SVG.Defs,{// Define gradient
pattern:function pattern(width,height,block){return this.put(new SVG.Pattern()).update(block).attr({x:0,y:0,width:width,height:height,patternUnits:'userSpaceOnUse'});}});SVG.Shape=SVG.invent({// Initialize node
create:function create(element){this.constructor.call(this,element);},// Inherit from
inherit:SVG.Element});SVG.Symbol=SVG.invent({// Initialize node
create:'symbol',// Inherit from
inherit:SVG.Container,construct:{// create symbol
symbol:function symbol(){return this.put(new SVG.Symbol());}}});SVG.Use=SVG.invent({// Initialize node
create:'use',// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// Use element as a reference
element:function element(_element,file){// Set lined element
return this.attr('href',(file||'')+'#'+_element,SVG.xlink);}},// Add parent method
construct:{// Create a use element
use:function use(element,file){return this.put(new SVG.Use()).element(element,file);}}});SVG.Rect=SVG.invent({// Initialize node
create:'rect',// Inherit from
inherit:SVG.Shape,// Add parent method
construct:{// Create a rect element
rect:function rect(width,height){return this.put(new SVG.Rect()).size(width,height);}}});SVG.Circle=SVG.invent({// Initialize node
create:'circle',// Inherit from
inherit:SVG.Shape,// Add parent method
construct:{// Create circle element, based on ellipse
circle:function circle(size){return this.put(new SVG.Circle()).rx(new SVG.Number(size).divide(2)).move(0,0);}}});SVG.extend(SVG.Circle,SVG.FX,{// Radius x value
rx:function rx(_rx){return this.attr('r',_rx);},// Alias radius x value
ry:function ry(_ry){return this.rx(_ry);}});SVG.Ellipse=SVG.invent({// Initialize node
create:'ellipse',// Inherit from
inherit:SVG.Shape,// Add parent method
construct:{// Create an ellipse
ellipse:function ellipse(width,height){return this.put(new SVG.Ellipse()).size(width,height).move(0,0);}}});SVG.extend(SVG.Ellipse,SVG.Rect,SVG.FX,{// Radius x value
rx:function rx(_rx2){return this.attr('rx',_rx2);},// Radius y value
ry:function ry(_ry2){return this.attr('ry',_ry2);}});// Add common method
SVG.extend(SVG.Circle,SVG.Ellipse,{// Move over x-axis
x:function x(_x3){return _x3==null?this.cx()-this.rx():this.cx(_x3+this.rx());},// Move over y-axis
y:function y(_y2){return _y2==null?this.cy()-this.ry():this.cy(_y2+this.ry());},// Move by center over x-axis
cx:function cx(x){return x==null?this.attr('cx'):this.attr('cx',x);},// Move by center over y-axis
cy:function cy(y){return y==null?this.attr('cy'):this.attr('cy',y);},// Set width of element
width:function width(_width2){return _width2==null?this.rx()*2:this.rx(new SVG.Number(_width2).divide(2));},// Set height of element
height:function height(_height2){return _height2==null?this.ry()*2:this.ry(new SVG.Number(_height2).divide(2));},// Custom size function
size:function size(width,height){var p=proportionalSize(this,width,height);return this.rx(new SVG.Number(p.width).divide(2)).ry(new SVG.Number(p.height).divide(2));}});SVG.Line=SVG.invent({// Initialize node
create:'line',// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// Get array
array:function array(){return new SVG.PointArray([[this.attr('x1'),this.attr('y1')],[this.attr('x2'),this.attr('y2')]]);},// Overwrite native plot() method
plot:function plot(x1,y1,x2,y2){if(x1==null){return this.array();}else if(typeof y1!=='undefined'){x1={x1:x1,y1:y1,x2:x2,y2:y2};}else{x1=new SVG.PointArray(x1).toLine();}return this.attr(x1);},// Move by left top corner
move:function move(x,y){return this.attr(this.array().move(x,y).toLine());},// Set element size to given width and height
size:function size(width,height){var p=proportionalSize(this,width,height);return this.attr(this.array().size(p.width,p.height).toLine());}},// Add parent method
construct:{// Create a line element
line:function line(x1,y1,x2,y2){// make sure plot is called as a setter
// x1 is not necessarily a number, it can also be an array, a string and a SVG.PointArray
return SVG.Line.prototype.plot.apply(this.put(new SVG.Line()),x1!=null?[x1,y1,x2,y2]:[0,0,0,0]);}}});SVG.Polyline=SVG.invent({// Initialize node
create:'polyline',// Inherit from
inherit:SVG.Shape,// Add parent method
construct:{// Create a wrapped polyline element
polyline:function polyline(p){// make sure plot is called as a setter
return this.put(new SVG.Polyline()).plot(p||new SVG.PointArray());}}});SVG.Polygon=SVG.invent({// Initialize node
create:'polygon',// Inherit from
inherit:SVG.Shape,// Add parent method
construct:{// Create a wrapped polygon element
polygon:function polygon(p){// make sure plot is called as a setter
return this.put(new SVG.Polygon()).plot(p||new SVG.PointArray());}}});// Add polygon-specific functions
SVG.extend(SVG.Polyline,SVG.Polygon,{// Get array
array:function array(){return this._array||(this._array=new SVG.PointArray(this.attr('points')));},// Plot new path
plot:function plot(p){return p==null?this.array():this.clear().attr('points',typeof p==='string'?p:this._array=new SVG.PointArray(p));},// Clear array cache
clear:function clear(){delete this._array;return this;},// Move by left top corner
move:function move(x,y){return this.attr('points',this.array().move(x,y));},// Set element size to given width and height
size:function size(width,height){var p=proportionalSize(this,width,height);return this.attr('points',this.array().size(p.width,p.height));}});// unify all point to point elements
SVG.extend(SVG.Line,SVG.Polyline,SVG.Polygon,{// Define morphable array
morphArray:SVG.PointArray,// Move by left top corner over x-axis
x:function x(_x4){return _x4==null?this.bbox().x:this.move(_x4,this.bbox().y);},// Move by left top corner over y-axis
y:function y(_y3){return _y3==null?this.bbox().y:this.move(this.bbox().x,_y3);},// Set width of element
width:function width(_width3){var b=this.bbox();return _width3==null?b.width:this.size(_width3,b.height);},// Set height of element
height:function height(_height3){var b=this.bbox();return _height3==null?b.height:this.size(b.width,_height3);}});SVG.Path=SVG.invent({// Initialize node
create:'path',// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// Define morphable array
morphArray:SVG.PathArray,// Get array
array:function array(){return this._array||(this._array=new SVG.PathArray(this.attr('d')));},// Plot new path
plot:function plot(d){return d==null?this.array():this.clear().attr('d',typeof d==='string'?d:this._array=new SVG.PathArray(d));},// Clear array cache
clear:function clear(){delete this._array;return this;}},// Add parent method
construct:{// Create a wrapped path element
path:function path(d){// make sure plot is called as a setter
return this.put(new SVG.Path()).plot(d||new SVG.PathArray());}}});SVG.Image=SVG.invent({// Initialize node
create:'image',// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// (re)load image	
load:function load(url){if(!url)return this;var self=this,img=new window.Image();// preload image	
SVG.on(img,'load',function(){SVG.off(img);var p=self.parent(SVG.Pattern);if(p===null)return;// ensure image size	
if(self.width()==0&&self.height()==0){self.size(img.width,img.height);}// ensure pattern size if not set	
if(p&&p.width()==0&&p.height()==0){p.size(self.width(),self.height());}// callback	
if(typeof self._loaded==='function'){self._loaded.call(self,{width:img.width,height:img.height,ratio:img.width/img.height,url:url});}});SVG.on(img,'error',function(e){SVG.off(img);if(typeof self._error==='function'){self._error.call(self,e);}});return this.attr('href',img.src=this.src=url,SVG.xlink);},// Add loaded callback	
loaded:function loaded(_loaded){this._loaded=_loaded;return this;},error:function error(_error){this._error=_error;return this;}},// Add parent method
construct:{// create image element, load image and set its size	
image:function image(source,width,height){return this.put(new SVG.Image()).load(source).size(width||0,height||width||0);}}});SVG.Text=SVG.invent({// Initialize node
create:function create(){this.constructor.call(this,SVG.create('text'));this.dom.leading=new SVG.Number(1.3);// store leading value for rebuilding
this._rebuild=true;// enable automatic updating of dy values
this._build=false;// disable build mode for adding multiple lines
// set default font
this.attr('font-family',SVG.defaults.attrs['font-family']);},// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// Move over x-axis
x:function x(_x5){// act as getter
if(_x5==null){return this.attr('x');}return this.attr('x',_x5);},// Set the text content
text:function text(_text){// act as getter
if(typeof _text==='undefined'){var _text='';var children=this.node.childNodes;for(var i=0,len=children.length;i<len;++i){// add newline if its not the first child and newLined is set to true
if(i!=0&&children[i].nodeType!=3&&SVG.adopt(children[i]).dom.newLined==true){_text+='\n';}// add content of this node
_text+=children[i].textContent;}return _text;}// remove existing content
this.clear().build(true);if(typeof _text==='function'){// call block
_text.call(this,this);}else{// store text and make sure text is not blank
_text=_text.split('\n');// build new lines
for(var i=0,il=_text.length;i<il;i++){this.tspan(_text[i]).newLine();}}// disable build mode and rebuild lines
return this.build(false).rebuild();},// Set font size
size:function size(_size){return this.attr('font-size',_size).rebuild();},// Set / get leading
leading:function leading(value){// act as getter
if(value==null){return this.dom.leading;}// act as setter
this.dom.leading=new SVG.Number(value);return this.rebuild();},// Get all the first level lines
lines:function lines(){var node=(this.textPath&&this.textPath()||this).node;// filter tspans and map them to SVG.js instances
var lines=SVG.utils.map(SVG.utils.filterSVGElements(node.childNodes),function(el){return SVG.adopt(el);});// return an instance of SVG.set
return new SVG.Set(lines);},// Rebuild appearance type
rebuild:function rebuild(_rebuild){// store new rebuild flag if given
if(typeof _rebuild==='boolean'){this._rebuild=_rebuild;}// define position of all lines
if(this._rebuild){var self=this,blankLineOffset=0,dy=this.dom.leading*new SVG.Number(this.attr('font-size'));this.lines().each(function(){if(this.dom.newLined){if(!self.textPath()){this.attr('x',self.attr('x'));}if(this.text()=='\n'){blankLineOffset+=dy;}else{this.attr('dy',dy+blankLineOffset);blankLineOffset=0;}}});this.fire('rebuild');}return this;},// Enable / disable build mode
build:function build(_build){this._build=!!_build;return this;},// overwrite method from parent to set data properly
setData:function setData(o){this.dom=o;this.dom.leading=new SVG.Number(o.leading||1.3);return this;}},// Add parent method
construct:{// Create text element
text:function text(_text2){return this.put(new SVG.Text()).text(_text2);},// Create plain text element
plain:function plain(text){return this.put(new SVG.Text()).plain(text);}}});SVG.Tspan=SVG.invent({// Initialize node
create:'tspan',// Inherit from
inherit:SVG.Shape,// Add class methods
extend:{// Set text content
text:function text(_text3){if(_text3==null)return this.node.textContent+(this.dom.newLined?'\n':'');typeof _text3==='function'?_text3.call(this,this):this.plain(_text3);return this;},// Shortcut dx
dx:function dx(_dx){return this.attr('dx',_dx);},// Shortcut dy
dy:function dy(_dy){return this.attr('dy',_dy);},// Create new line
newLine:function newLine(){// fetch text parent
var t=this.parent(SVG.Text);// mark new line
this.dom.newLined=true;// apply new hy¡n
return this.dy(t.dom.leading*t.attr('font-size')).attr('x',t.x());}}});SVG.extend(SVG.Text,SVG.Tspan,{// Create plain text node
plain:function plain(text){// clear if build mode is disabled
if(this._build===false){this.clear();}// create text node
this.node.appendChild(document.createTextNode(text));return this;},// Create a tspan
tspan:function tspan(text){var node=(this.textPath&&this.textPath()||this).node,tspan=new SVG.Tspan();// clear if build mode is disabled
if(this._build===false){this.clear();}// add new tspan
node.appendChild(tspan.node);return tspan.text(text);},// Clear all lines
clear:function clear(){var node=(this.textPath&&this.textPath()||this).node;// remove existing child nodes
while(node.hasChildNodes()){node.removeChild(node.lastChild);}return this;},// Get length of text element
length:function length(){return this.node.getComputedTextLength();}});SVG.TextPath=SVG.invent({// Initialize node
create:'textPath',// Inherit from
inherit:SVG.Parent,// Define parent class
parent:SVG.Text,// Add parent method
construct:{morphArray:SVG.PathArray,// return the array of the path track element
array:function array(){var track=this.track();return track?track.array():null;},// Plot path if any
plot:function plot(d){var track=this.track(),pathArray=null;if(track){pathArray=track.plot(d);}return d==null?pathArray:this;},// Get the path track element
track:function track(){var path=this.textPath();if(path){return path.reference('href');}},// Get the textPath child
textPath:function textPath(){if(this.node.firstChild&&this.node.firstChild.nodeName=='textPath'){return SVG.adopt(this.node.firstChild);}}}});SVG.Nested=SVG.invent({// Initialize node
create:function create(){this.constructor.call(this,SVG.create('svg'));this.style('overflow','visible');},// Inherit from
inherit:SVG.Container,// Add parent method
construct:{// Create nested svg document
nested:function nested(){return this.put(new SVG.Nested());}}});// Define list of available attributes for stroke and fill
var sugar={stroke:['color','width','opacity','linecap','linejoin','miterlimit','dasharray','dashoffset'],fill:['color','opacity','rule'],prefix:function prefix(t,a){return a=='color'?t:t+'-'+a;}}// Add sugar for fill and stroke
;['fill','stroke'].forEach(function(m){var extension={};extension[m]=function(o){if(typeof o==='undefined'){return this;}if(typeof o==='string'||SVG.Color.isRgb(o)||o&&typeof o.fill==='function'){this.attr(m,o);}else// set all attributes from sugar.fill and sugar.stroke list
{for(var i=sugar[m].length-1;i>=0;i--){if(o[sugar[m][i]]!=null){this.attr(sugar.prefix(m,sugar[m][i]),o[sugar[m][i]]);}}}return this;};SVG.extend(SVG.Element,SVG.FX,extension);});SVG.extend(SVG.Element,SVG.FX,{// Map translate to transform
translate:function translate(x,y){return this.transform({x:x,y:y});},// Map matrix to transform
matrix:function matrix(m){return this.attr('transform',new SVG.Matrix(arguments.length==6?[].slice.call(arguments):m));},// Opacity
opacity:function opacity(value){return this.attr('opacity',value);},// Relative move over x axis
dx:function dx(x){return this.x(new SVG.Number(x).plus(this instanceof SVG.FX?0:this.x()),true);},// Relative move over y axis
dy:function dy(y){return this.y(new SVG.Number(y).plus(this instanceof SVG.FX?0:this.y()),true);}});SVG.extend(SVG.Path,{// Get path length
length:function length(){return this.node.getTotalLength();},// Get point at length
pointAt:function pointAt(length){return this.node.getPointAtLength(length);}});SVG.Set=SVG.invent({// Initialize
create:function create(members){// Set initial state
Array.isArray(members)?this.members=members:this.clear();},// Add class methods
extend:{// Add element to set
add:function add(){var il,elements=[].slice.call(arguments);for(var i=0,il=elements.length;i<il;i++){this.members.push(elements[i]);}return this;},// Remove element from set
remove:function remove(element){var i=this.index(element);// remove given child
if(i>-1){this.members.splice(i,1);}return this;},// Iterate over all members
each:function each(block){for(var i=0,il=this.members.length;i<il;i++){block.apply(this.members[i],[i,this.members]);}return this;},// Restore to defaults
clear:function clear(){// initialize store
this.members=[];return this;},// Get the length of a set
length:function length(){return this.members.length;},// Checks if a given element is present in set
has:function has(element){return this.index(element)>=0;},// retuns index of given element in set
index:function index(element){return this.members.indexOf(element);},// Get member at given index
get:function get(i){return this.members[i];},// Get first member
first:function first(){return this.get(0);},// Get last member
last:function last(){return this.get(this.members.length-1);},// Default value
valueOf:function valueOf(){return this.members;}},// Add parent method
construct:{// Create a new set
set:function set(members){return new SVG.Set(members);}}});SVG.FX.Set=SVG.invent({// Initialize node
create:function create(set){// store reference to set
this.set=set;}});// Alias methods
SVG.Set.inherit=function(){var methods=[];// gather shape methods
for(var m in SVG.Shape.prototype){if(typeof SVG.Shape.prototype[m]==='function'&&typeof SVG.Set.prototype[m]!=='function'){methods.push(m);}}// apply shape aliasses
methods.forEach(function(method){SVG.Set.prototype[method]=function(){for(var i=0,il=this.members.length;i<il;i++){if(this.members[i]&&typeof this.members[i][method]==='function'){this.members[i][method].apply(this.members[i],arguments);}}return method=='animate'?this.fx||(this.fx=new SVG.FX.Set(this)):this;};});// clear methods for the next round
methods=[];// gather fx methods
for(var m in SVG.FX.prototype){if(typeof SVG.FX.prototype[m]==='function'&&typeof SVG.FX.Set.prototype[m]!=='function'){methods.push(m);}}// apply fx aliasses
methods.forEach(function(method){SVG.FX.Set.prototype[method]=function(){for(var i=0,il=this.set.members.length;i<il;i++){this.set.members[i].fx[method].apply(this.set.members[i].fx,arguments);}return this;};});};SVG.extend(SVG.Element,{});SVG.extend(SVG.Element,{// Remember arbitrary data
remember:function remember(k,v){// remember every item in an object individually
if(_typeof(arguments[0])==='object'){for(var v_ in k){this.remember(v_,k[v_]);}}// retrieve memory
else if(arguments.length==1){return this.memory()[k];}// store memory
else{this.memory()[k]=v;}return this;},// Erase a given memory
forget:function forget(){if(arguments.length==0){this._memory={};}else{for(var i=arguments.length-1;i>=0;i--){delete this.memory()[arguments[i]];}}return this;},// Initialize or return local memory object
memory:function memory(){return this._memory||(this._memory={});}});// Method for getting an element by id
SVG.get=function(id){var node=document.getElementById(idFromReference(id)||id);return SVG.adopt(node);};// Select elements by query string
SVG.select=function(query,parent){return new SVG.Set(SVG.utils.map((parent||document).querySelectorAll(query),function(node){return SVG.adopt(node);}));};SVG.extend(SVG.Parent,{// Scoped select method
select:function select(query){return SVG.select(query,this.node);}});function pathRegReplace(a,b,c,d){return c+d.replace(SVG.regex.dots,' .');}// creates deep clone of array
function _is(el,obj){return el instanceof obj;}// tests if a given selector matches an element
function _matches(el,selector){return(el.matches||el.matchesSelector||el.msMatchesSelector||el.mozMatchesSelector||el.webkitMatchesSelector||el.oMatchesSelector).call(el,selector);}// Convert dash-separated-string to camelCase
function camelCase(s){return s.toLowerCase().replace(/-(.)/g,function(m,g){return g.toUpperCase();});}// Capitalize first letter of a string
function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}// Ensure to six-based hex
function fullHex(hex){return hex.length==4?['#',hex.substring(1,2),hex.substring(1,2),hex.substring(2,3),hex.substring(2,3),hex.substring(3,4),hex.substring(3,4)].join(''):hex;}// Component to hex value
function compToHex(comp){var hex=comp.toString(16);return hex.length==1?'0'+hex:hex;}// Calculate proportional width and height values when necessary
function proportionalSize(element,width,height){if(width==null||height==null){var box=element.bbox();if(width==null){width=box.width/box.height*height;}else if(height==null){height=box.height/box.width*width;}}return{width:width,height:height};}// Delta transform point
function deltaTransformPoint(matrix,x,y){return{x:x*matrix.a+y*matrix.c+0,y:x*matrix.b+y*matrix.d+0};}// Map matrix array to object
function arrayToMatrix(a){return{a:a[0],b:a[1],c:a[2],d:a[3],e:a[4],f:a[5]};}// Parse matrix if required
function parseMatrix(matrix){if(!(matrix instanceof SVG.Matrix)){matrix=new SVG.Matrix(matrix);}return matrix;}// Add centre point to transform object
function arrayToString(a){for(var i=0,il=a.length,s='';i<il;i++){s+=a[i][0];if(a[i][1]!=null){s+=a[i][1];if(a[i][2]!=null){s+=' ';s+=a[i][2];if(a[i][3]!=null){s+=' ';s+=a[i][3];s+=' ';s+=a[i][4];if(a[i][5]!=null){s+=' ';s+=a[i][5];s+=' ';s+=a[i][6];if(a[i][7]!=null){s+=' ';s+=a[i][7];}}}}}}return s+' ';}// Deep new id assignment
function assignNewId(node){// do the same for SVG child nodes as well
for(var i=node.childNodes.length-1;i>=0;i--){if(node.childNodes[i]instanceof window.SVGElement){assignNewId(node.childNodes[i]);}}return SVG.adopt(node).id(SVG.eid(node.nodeName));}// Add more bounding box properties
function fullBox(b){if(b.x==null){b.x=0;b.y=0;b.width=0;b.height=0;}b.w=b.width;b.h=b.height;b.x2=b.x+b.width;b.y2=b.y+b.height;b.cx=b.x+b.width/2;b.cy=b.y+b.height/2;return b;}// Get id from reference string
function idFromReference(url){var m=(url||'').toString().match(SVG.regex.reference);if(m)return m[1];}// If values like 1e-88 are passed, this is not a valid 32 bit float,
// but in those cases, we are so close to 0 that 0 works well!
function float32String(v){return Math.abs(v)>1e-37?v:0;}// Create matrix array for looping
var abcdef='abcdef'.split('');// Add CustomEvent to IE9 and IE10	
if(typeof window.CustomEvent!=='function'){// Code from: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent	
var CustomEventPoly=function CustomEventPoly(event,options){options=options||{bubbles:false,cancelable:false,detail:undefined};var e=document.createEvent('CustomEvent');e.initCustomEvent(event,options.bubbles,options.cancelable,options.detail);return e;};CustomEventPoly.prototype=window.Event.prototype;SVG.CustomEvent=CustomEventPoly;}else{SVG.CustomEvent=window.CustomEvent;}return SVG;});/*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */(function(){// Main filter class
SVG.Filter=SVG.invent({create:'filter',inherit:SVG.Parent,extend:{// Static strings
source:'SourceGraphic',sourceAlpha:'SourceAlpha',background:'BackgroundImage',backgroundAlpha:'BackgroundAlpha',fill:'FillPaint',stroke:'StrokePaint',autoSetIn:true,// Custom put method for leaner code
put:function(element,i){this.add(element,i);if(!element.attr('in')&&this.autoSetIn){element.attr('in',this.source);}if(!element.attr('result')){element.attr('result',element);}return element;},// Blend effect
blend:function(in1,in2,mode){return this.put(new SVG.BlendEffect(in1,in2,mode));},// ColorMatrix effect
colorMatrix:function(type,values){return this.put(new SVG.ColorMatrixEffect(type,values));},// ConvolveMatrix effect
convolveMatrix:function(matrix){return this.put(new SVG.ConvolveMatrixEffect(matrix));},// ComponentTransfer effect
componentTransfer:function(components){return this.put(new SVG.ComponentTransferEffect(components));},// Composite effect
composite:function(in1,in2,operator){return this.put(new SVG.CompositeEffect(in1,in2,operator));},// Flood effect
flood:function(color,opacity){return this.put(new SVG.FloodEffect(color,opacity));},// Offset effect
offset:function(x,y){return this.put(new SVG.OffsetEffect(x,y));},// Image effect
image:function(src){return this.put(new SVG.ImageEffect(src));},// Merge effect
merge:function(){//pass the array of arguments to the constructor because we dont know if the user gave us an array as the first arguemnt or wether they listed the effects in the arguments
var args=[undefined];for(var i in arguments)args.push(arguments[i]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,args))());},// Gaussian Blur effect
gaussianBlur:function(x,y){return this.put(new SVG.GaussianBlurEffect(x,y));},// Morphology effect
morphology:function(operator,radius){return this.put(new SVG.MorphologyEffect(operator,radius));},// DiffuseLighting effect
diffuseLighting:function(surfaceScale,diffuseConstant,kernelUnitLength){return this.put(new SVG.DiffuseLightingEffect(surfaceScale,diffuseConstant,kernelUnitLength));},// DisplacementMap effect
displacementMap:function(in1,in2,scale,xChannelSelector,yChannelSelector){return this.put(new SVG.DisplacementMapEffect(in1,in2,scale,xChannelSelector,yChannelSelector));},// SpecularLighting effect
specularLighting:function(surfaceScale,diffuseConstant,specularExponent,kernelUnitLength){return this.put(new SVG.SpecularLightingEffect(surfaceScale,diffuseConstant,specularExponent,kernelUnitLength));},// Tile effect
tile:function(){return this.put(new SVG.TileEffect());},// Turbulence effect
turbulence:function(baseFrequency,numOctaves,seed,stitchTiles,type){return this.put(new SVG.TurbulenceEffect(baseFrequency,numOctaves,seed,stitchTiles,type));},// Default string value
toString:function(){return'url(#'+this.attr('id')+')';}}});//add .filter function
SVG.extend(SVG.Defs,{// Define filter
filter:function(block){var filter=this.put(new SVG.Filter());/* invoke passed block */if(typeof block==='function')block.call(filter,filter);return filter;}});SVG.extend(SVG.Container,{// Define filter on defs
filter:function(block){return this.defs().filter(block);}});SVG.extend(SVG.Element,SVG.G,SVG.Nested,{// Create filter element in defs and store reference
filter:function(block){this.filterer=block instanceof SVG.Element?block:this.doc().filter(block);if(this.doc()&&this.filterer.doc()!==this.doc()){this.doc().defs().add(this.filterer);}this.attr('filter',this.filterer);return this.filterer;},// Remove filter
unfilter:function(remove){/* also remove the filter node */if(this.filterer&&remove===true)this.filterer.remove();/* delete reference to filterer */delete this.filterer;/* remove filter attribute */return this.attr('filter',null);}});// Create SVG.Effect class
SVG.Effect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Element,extend:{// Set in attribute
in:function(effect){return effect==null?this.parent()&&this.parent().select('[result="'+this.attr('in')+'"]').get(0)||this.attr('in'):this.attr('in',effect);},// Named result
result:function(result){return result==null?this.attr('result'):this.attr('result',result);},// Stringification
toString:function(){return this.result();}}});// create class for parent effects like merge
// Inherit from SVG.Parent
SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Parent,extend:{// Set in attribute
in:function(effect){return effect==null?this.parent()&&this.parent().select('[result="'+this.attr('in')+'"]').get(0)||this.attr('in'):this.attr('in',effect);},// Named result
result:function(result){return result==null?this.attr('result'):this.attr('result',result);},// Stringification
toString:function(){return this.result();}}});//chaining
var chainingEffects={// Blend effect
blend:function(in2,mode){return this.parent()&&this.parent().blend(this,in2,mode);//pass this as the first input
},// ColorMatrix effect
colorMatrix:function(type,values){return this.parent()&&this.parent().colorMatrix(type,values).in(this);},// ConvolveMatrix effect
convolveMatrix:function(matrix){return this.parent()&&this.parent().convolveMatrix(matrix).in(this);},// ComponentTransfer effect
componentTransfer:function(components){return this.parent()&&this.parent().componentTransfer(components).in(this);},// Composite effect
composite:function(in2,operator){return this.parent()&&this.parent().composite(this,in2,operator);//pass this as the first input
},// Flood effect
flood:function(color,opacity){return this.parent()&&this.parent().flood(color,opacity);//this effect dont have inputs
},// Offset effect
offset:function(x,y){return this.parent()&&this.parent().offset(x,y).in(this);},// Image effect
image:function(src){return this.parent()&&this.parent().image(src);//this effect dont have inputs
},// Merge effect
merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments));//pass this as the first argument
},// Gaussian Blur effect
gaussianBlur:function(x,y){return this.parent()&&this.parent().gaussianBlur(x,y).in(this);},// Morphology effect
morphology:function(operator,radius){return this.parent()&&this.parent().morphology(operator,radius).in(this);},// DiffuseLighting effect
diffuseLighting:function(surfaceScale,diffuseConstant,kernelUnitLength){return this.parent()&&this.parent().diffuseLighting(surfaceScale,diffuseConstant,kernelUnitLength).in(this);},// DisplacementMap effect
displacementMap:function(in2,scale,xChannelSelector,yChannelSelector){return this.parent()&&this.parent().displacementMap(this,in2,scale,xChannelSelector,yChannelSelector);//pass this as the first input
},// SpecularLighting effect
specularLighting:function(surfaceScale,diffuseConstant,specularExponent,kernelUnitLength){return this.parent()&&this.parent().specularLighting(surfaceScale,diffuseConstant,specularExponent,kernelUnitLength).in(this);},// Tile effect
tile:function(){return this.parent()&&this.parent().tile().in(this);},// Turbulence effect
turbulence:function(baseFrequency,numOctaves,seed,stitchTiles,type){return this.parent()&&this.parent().turbulence(baseFrequency,numOctaves,seed,stitchTiles,type).in(this);}};SVG.extend(SVG.Effect,chainingEffects);SVG.extend(SVG.ParentEffect,chainingEffects);//crea class for child effects, like MergeNode, FuncR and lights
SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this);},inherit:SVG.Element,extend:{in:function(effect){this.attr('in',effect);}//dont include any "result" functions because these types of nodes dont have them
}});// Create all different effects
var effects={blend:function(in1,in2,mode){this.attr({in:in1,in2:in2,mode:mode||'normal'});},colorMatrix:function(type,values){if(type=='matrix')values=normaliseMatrix(values);this.attr({type:type,values:typeof values=='undefined'?null:values});},convolveMatrix:function(matrix){matrix=normaliseMatrix(matrix);this.attr({order:Math.sqrt(matrix.split(' ').length),kernelMatrix:matrix});},composite:function(in1,in2,operator){this.attr({in:in1,in2:in2,operator:operator});},flood:function(color,opacity){this.attr('flood-color',color);if(opacity!=null)this.attr('flood-opacity',opacity);},offset:function(x,y){this.attr({dx:x,dy:y});},image:function(src){this.attr('href',src,SVG.xlink);},displacementMap:function(in1,in2,scale,xChannelSelector,yChannelSelector){this.attr({in:in1,in2:in2,scale:scale,xChannelSelector:xChannelSelector,yChannelSelector:yChannelSelector});},gaussianBlur:function(x,y){if(x!=null||y!=null)this.attr('stdDeviation',listString(Array.prototype.slice.call(arguments)));else this.attr('stdDeviation','0 0');},morphology:function(operator,radius){this.attr({operator:operator,radius:radius});},tile:function(){},turbulence:function(baseFrequency,numOctaves,seed,stitchTiles,type){this.attr({numOctaves:numOctaves,seed:seed,stitchTiles:stitchTiles,baseFrequency:baseFrequency,type:type});}};// Create all parent effects
var parentEffects={merge:function(){var children;//test to see if we have a set
if(arguments[0]instanceof SVG.Set){var that=this;arguments[0].each(function(i){if(this instanceof SVG.MergeNode)that.put(this);else if(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)that.put(new SVG.MergeNode(this));});}else{//if the first argument is an array use it
if(Array.isArray(arguments[0]))children=arguments[0];else children=arguments;for(var i=0;i<children.length;i++){if(children[i]instanceof SVG.MergeNode){this.put(children[i]);}else this.put(new SVG.MergeNode(children[i]));}}},componentTransfer:function(compontents){/* create rgb set */this.rgb=new SVG.Set()/* create components */;['r','g','b','a'].forEach(function(c){/* create component */this[c]=new SVG['Func'+c.toUpperCase()]('identity');/* store component in set */this.rgb.add(this[c]);/* add component node */this.node.appendChild(this[c].node);}.bind(this));//lost context in foreach
/* set components */if(compontents){if(compontents.rgb){['r','g','b'].forEach(function(c){this[c].attr(compontents.rgb);}.bind(this));delete compontents.rgb;}/* set individual components */for(var c in compontents)this[c].attr(compontents[c]);}},diffuseLighting:function(surfaceScale,diffuseConstant,kernelUnitLength){this.attr({surfaceScale:surfaceScale,diffuseConstant:diffuseConstant,kernelUnitLength:kernelUnitLength});},specularLighting:function(surfaceScale,diffuseConstant,specularExponent,kernelUnitLength){this.attr({surfaceScale:surfaceScale,diffuseConstant:diffuseConstant,specularExponent:specularExponent,kernelUnitLength:kernelUnitLength});}};// Create child effects like PointLight and MergeNode
var childEffects={distantLight:function(azimuth,elevation){this.attr({azimuth:azimuth,elevation:elevation});},pointLight:function(x,y,z){this.attr({x:x,y:y,z:z});},spotLight:function(x,y,z,pointsAtX,pointsAtY,pointsAtZ){this.attr({x:x,y:y,z:z,pointsAtX:pointsAtX,pointsAtY:pointsAtY,pointsAtZ:pointsAtZ});},mergeNode:function(in1){this.attr('in',in1);}}// Create compontent functions
;['r','g','b','a'].forEach(function(c){/* create class */childEffects['Func'+c.toUpperCase()]=function(type){this.attr('type',type);// take diffent arguments based on the type
switch(type){case'table':this.attr('tableValues',arguments[1]);break;case'linear':this.attr('slope',arguments[1]);this.attr('intercept',arguments[2]);break;case'gamma':this.attr('amplitude',arguments[1]);this.attr('exponent',arguments[2]);this.attr('offset',arguments[2]);break;}};});//create effects
foreach(effects,function(effect,i){/* capitalize name */var name=i.charAt(0).toUpperCase()+i.slice(1);var proto={};/* create class */SVG[name+'Effect']=SVG.invent({create:function(){//call super
this.constructor.call(this,SVG.create('fe'+name));//call constructor for this effect
effect.apply(this,arguments);//set the result
this.result(this.attr('id')+'Out');},inherit:SVG.Effect,extend:proto});});//create parent effects
foreach(parentEffects,function(effect,i){/* capitalize name */var name=i.charAt(0).toUpperCase()+i.slice(1);var proto={};/* create class */SVG[name+'Effect']=SVG.invent({create:function(){//call super
this.constructor.call(this,SVG.create('fe'+name));//call constructor for this effect
effect.apply(this,arguments);//set the result
this.result(this.attr('id')+'Out');},inherit:SVG.ParentEffect,extend:proto});});//create child effects
foreach(childEffects,function(effect,i){/* capitalize name */var name=i.charAt(0).toUpperCase()+i.slice(1);var proto={};/* create class */SVG[name]=SVG.invent({create:function(){//call super
this.constructor.call(this,SVG.create('fe'+name));//call constructor for this effect
effect.apply(this,arguments);},inherit:SVG.ChildEffect,extend:proto});});// Effect-specific extensions
SVG.extend(SVG.MergeEffect,{in:function(effect){if(effect instanceof SVG.MergeNode)this.add(effect,0);else this.add(new SVG.MergeNode(effect),0);return this;}});SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(effect){return effect==null?this.parent()&&this.parent().select('[result="'+this.attr('in2')+'"]').get(0)||this.attr('in2'):this.attr('in2',effect);}});// Presets
SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.130,0,0,.172,.334,.111,0,0,.000,.000,.000,1,0]};// Helpers
function normaliseMatrix(matrix){/* convert possible array value to string */if(Array.isArray(matrix))matrix=new SVG.Array(matrix);/* ensure there are no leading, tailing or double spaces */return matrix.toString().replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/g,' ');}function listString(list){if(!Array.isArray(list))return list;for(var i=0,l=list.length,s=[];i<l;i++)s.push(list[i]);return s.join(' ');}function foreach(){//loops through mutiple objects
var fn=function(){};if(typeof arguments[arguments.length-1]=='function'){fn=arguments[arguments.length-1];Array.prototype.splice.call(arguments,arguments.length-1,1);}for(var k in arguments){for(var i in arguments[k]){fn(arguments[k][i],i,arguments[k]);}}}}).call(undefined);(function(){SVG.extend(SVG.PathArray,{morph:function(array){var startArr=this.value,destArr=this.parse(array);var startOffsetM=0,destOffsetM=0;var startOffsetNextM=false,destOffsetNextM=false;while(true){// stop if there is no M anymore
if(startOffsetM===false&&destOffsetM===false)break;// find the next M in path array
startOffsetNextM=findNextM(startArr,startOffsetM===false?false:startOffsetM+1);destOffsetNextM=findNextM(destArr,destOffsetM===false?false:destOffsetM+1);// We have to add one M to the startArray
if(startOffsetM===false){var bbox=new SVG.PathArray(result.start).bbox();// when the last block had no bounding box we simply take the first M we got
if(bbox.height==0||bbox.width==0){startOffsetM=startArr.push(startArr[0])-1;}else{// we take the middle of the bbox instead when we got one
startOffsetM=startArr.push(['M',bbox.x+bbox.width/2,bbox.y+bbox.height/2])-1;}}// We have to add one M to the destArray
if(destOffsetM===false){var bbox=new SVG.PathArray(result.dest).bbox();if(bbox.height==0||bbox.width==0){destOffsetM=destArr.push(destArr[0])-1;}else{destOffsetM=destArr.push(['M',bbox.x+bbox.width/2,bbox.y+bbox.height/2])-1;}}// handle block from M to next M
var result=handleBlock(startArr,startOffsetM,startOffsetNextM,destArr,destOffsetM,destOffsetNextM);// update the arrays to their new values
startArr=startArr.slice(0,startOffsetM).concat(result.start,startOffsetNextM===false?[]:startArr.slice(startOffsetNextM));destArr=destArr.slice(0,destOffsetM).concat(result.dest,destOffsetNextM===false?[]:destArr.slice(destOffsetNextM));// update offsets
startOffsetM=startOffsetNextM===false?false:startOffsetM+result.start.length;destOffsetM=destOffsetNextM===false?false:destOffsetM+result.dest.length;}// copy back arrays
this.value=startArr;this.destination=new SVG.PathArray();this.destination.value=destArr;return this;}});// sorry for the long declaration
// slices out one block (from M to M) and syncronize it so the types and length match
function handleBlock(startArr,startOffsetM,startOffsetNextM,destArr,destOffsetM,destOffsetNextM,undefined$1){// slice out the block we need
var startArrTemp=startArr.slice(startOffsetM,startOffsetNextM||undefined$1),destArrTemp=destArr.slice(destOffsetM,destOffsetNextM||undefined$1);var i=0,posStart={pos:[0,0],start:[0,0]},posDest={pos:[0,0],start:[0,0]};do{// convert shorthand types to long form
startArrTemp[i]=simplyfy.call(posStart,startArrTemp[i]);destArrTemp[i]=simplyfy.call(posDest,destArrTemp[i]);// check if both shape types match
// 2 elliptical arc curve commands ('A'), are considered different if the
// flags (large-arc-flag, sweep-flag) don't match
if(startArrTemp[i][0]!=destArrTemp[i][0]||startArrTemp[i][0]=='M'||startArrTemp[i][0]=='A'&&(startArrTemp[i][4]!=destArrTemp[i][4]||startArrTemp[i][5]!=destArrTemp[i][5])){// if not, convert shapes to beziere
Array.prototype.splice.apply(startArrTemp,[i,1].concat(toBeziere.call(posStart,startArrTemp[i])));Array.prototype.splice.apply(destArrTemp,[i,1].concat(toBeziere.call(posDest,destArrTemp[i])));}else{// only update positions otherwise
startArrTemp[i]=setPosAndReflection.call(posStart,startArrTemp[i]);destArrTemp[i]=setPosAndReflection.call(posDest,destArrTemp[i]);}// we are at the end at both arrays. stop here
if(++i==startArrTemp.length&&i==destArrTemp.length)break;// destArray is longer. Add one element
if(i==startArrTemp.length){startArrTemp.push(['C',posStart.pos[0],posStart.pos[1],posStart.pos[0],posStart.pos[1],posStart.pos[0],posStart.pos[1]]);}// startArr is longer. Add one element
if(i==destArrTemp.length){destArrTemp.push(['C',posDest.pos[0],posDest.pos[1],posDest.pos[0],posDest.pos[1],posDest.pos[0],posDest.pos[1]]);}}while(true);// return the updated block
return{start:startArrTemp,dest:destArrTemp};}// converts shorthand types to long form
function simplyfy(val){switch(val[0]){case'z':// shorthand line to start
case'Z':val[0]='L';val[1]=this.start[0];val[2]=this.start[1];break;case'H':// shorthand horizontal line
val[0]='L';val[2]=this.pos[1];break;case'V':// shorthand vertical line
val[0]='L';val[2]=val[1];val[1]=this.pos[0];break;case'T':// shorthand quadratic beziere
val[0]='Q';val[3]=val[1];val[4]=val[2];val[1]=this.reflection[1];val[2]=this.reflection[0];break;case'S':// shorthand cubic beziere
val[0]='C';val[6]=val[4];val[5]=val[3];val[4]=val[2];val[3]=val[1];val[2]=this.reflection[1];val[1]=this.reflection[0];break;}return val;}// updates reflection point and current position
function setPosAndReflection(val){var len=val.length;this.pos=[val[len-2],val[len-1]];if('SCQT'.indexOf(val[0])!=-1)this.reflection=[2*this.pos[0]-val[len-4],2*this.pos[1]-val[len-3]];return val;}// converts all types to cubic beziere
function toBeziere(val){var retVal=[val];switch(val[0]){case'M':// special handling for M
this.pos=this.start=[val[1],val[2]];return retVal;case'L':val[5]=val[3]=val[1];val[6]=val[4]=val[2];val[1]=this.pos[0];val[2]=this.pos[1];break;case'Q':val[6]=val[4];val[5]=val[3];val[4]=val[4]*1/3+val[2]*2/3;val[3]=val[3]*1/3+val[1]*2/3;val[2]=this.pos[1]*1/3+val[2]*2/3;val[1]=this.pos[0]*1/3+val[1]*2/3;break;case'A':retVal=arcToBeziere(this.pos,val);val=retVal[0];break;}val[0]='C';this.pos=[val[5],val[6]];this.reflection=[2*val[5]-val[3],2*val[6]-val[4]];return retVal;}// finds the next position of type M
function findNextM(arr,offset){if(offset===false)return false;for(var i=offset,len=arr.length;i<len;++i){if(arr[i][0]=='M')return i;}return false;}// Convert an arc segment into equivalent cubic Bezier curves
// Depending on the arc, up to 4 curves might be used to represent it since a
// curve gives a good approximation for only a quarter of an ellipse
// The curves are returned as an array of SVG curve commands:
// [ ['C', x1, y1, x2, y2, x, y] ... ]
function arcToBeziere(pos,val){// Parameters extraction, handle out-of-range parameters as specified in the SVG spec
// See: https://www.w3.org/TR/SVG11/implnote.html#ArcOutOfRangeParameters
var rx=Math.abs(val[1]),ry=Math.abs(val[2]),xAxisRotation=val[3]%360,largeArcFlag=val[4],sweepFlag=val[5],x=val[6],y=val[7],A=new SVG.Point(pos),B=new SVG.Point(x,y),primedCoord,lambda,mat,k,c,cSquare,t,O,OA,OB,tetaStart,tetaEnd,deltaTeta,nbSectors,f,arcSegPoints,angle,sinAngle,cosAngle,pt,i,il,retVal=[],x1,y1,x2,y2;// Ensure radii are non-zero
if(rx===0||ry===0||A.x===B.x&&A.y===B.y){// treat this arc as a straight line segment
return[['C',A.x,A.y,B.x,B.y,B.x,B.y]];}// Ensure radii are large enough using the algorithm provided in the SVG spec
// See: https://www.w3.org/TR/SVG11/implnote.html#ArcCorrectionOutOfRangeRadii
primedCoord=new SVG.Point((A.x-B.x)/2,(A.y-B.y)/2).transform(new SVG.Matrix().rotate(xAxisRotation));lambda=primedCoord.x*primedCoord.x/(rx*rx)+primedCoord.y*primedCoord.y/(ry*ry);if(lambda>1){lambda=Math.sqrt(lambda);rx=lambda*rx;ry=lambda*ry;}// To simplify calculations, we make the arc part of a unit circle (rayon is 1) instead of an ellipse
mat=new SVG.Matrix().rotate(xAxisRotation).scale(1/rx,1/ry).rotate(-xAxisRotation);A=A.transform(mat);B=B.transform(mat);// Calculate the horizontal and vertical distance between the initial and final point of the arc
k=[B.x-A.x,B.y-A.y];// Find the length of the chord formed by A and B
cSquare=k[0]*k[0]+k[1]*k[1];c=Math.sqrt(cSquare);// Calculate the ratios of the horizontal and vertical distance on the length of the chord
k[0]/=c;k[1]/=c;// Calculate the distance between the circle center and the chord midpoint
// using this formula: t = sqrt(r^2 - c^2 / 4)
// where t is the distance between the cirle center and the chord midpoint,
//       r is the rayon of the circle and c is the chord length
// From: http://www.ajdesigner.com/phpcircle/circle_segment_chord_t.php
// Because of the imprecision of floating point numbers, cSquare might end
// up being slightly above 4 which would result in a negative radicand
// To prevent that, a test is made before computing the square root
t=cSquare<4?Math.sqrt(1-cSquare/4):0;// For most situations, there are actually two different ellipses that
// satisfy the constraints imposed by the points A and B, the radii rx and ry,
// and the xAxisRotation
// When the flags largeArcFlag and sweepFlag are equal, it means that the
// second ellipse is used as a solution
// See: https://www.w3.org/TR/SVG/paths.html#PathDataEllipticalArcCommands
if(largeArcFlag===sweepFlag){t*=-1;}// Calculate the coordinates of the center of the circle from the midpoint of the chord
// This is done by multiplying the ratios calculated previously by the distance between
// the circle center and the chord midpoint and using these values to go from the midpoint
// to the center of the circle
// The negative of the vertical distance ratio is used to modify the x coordinate while
// the horizontal distance ratio is used to modify the y coordinate
// That is because the center of the circle is perpendicular to the chord and perpendicular
// lines are negative reciprocals
O=new SVG.Point((B.x+A.x)/2+t*-k[1],(B.y+A.y)/2+t*k[0]);// Move the center of the circle at the origin
OA=new SVG.Point(A.x-O.x,A.y-O.y);OB=new SVG.Point(B.x-O.x,B.y-O.y);// Calculate the start and end angle
tetaStart=Math.acos(OA.x/Math.sqrt(OA.x*OA.x+OA.y*OA.y));if(OA.y<0){tetaStart*=-1;}tetaEnd=Math.acos(OB.x/Math.sqrt(OB.x*OB.x+OB.y*OB.y));if(OB.y<0){tetaEnd*=-1;}// If sweep-flag is '1', then the arc will be drawn in a "positive-angle" direction,
// make sure that the end angle is above the start angle
if(sweepFlag&&tetaStart>tetaEnd){tetaEnd+=2*Math.PI;}// If sweep-flag is '0', then the arc will be drawn in a "negative-angle" direction,
// make sure that the end angle is below the start angle
if(!sweepFlag&&tetaStart<tetaEnd){tetaEnd-=2*Math.PI;}// Find the number of Bezier curves that are required to represent the arc
// A cubic Bezier curve gives a good enough approximation when representing at most a quarter of a circle
nbSectors=Math.ceil(Math.abs(tetaStart-tetaEnd)*2/Math.PI);// Calculate the coordinates of the points of all the Bezier curves required to represent the arc
// For an in-depth explanation of this part see: http://pomax.github.io/bezierinfo/#circles_cubic
arcSegPoints=[];angle=tetaStart;deltaTeta=(tetaEnd-tetaStart)/nbSectors;f=4*Math.tan(deltaTeta/4)/3;for(i=0;i<=nbSectors;i++){// The <= is because a Bezier curve have a start and a endpoint
cosAngle=Math.cos(angle);sinAngle=Math.sin(angle);pt=new SVG.Point(O.x+cosAngle,O.y+sinAngle);arcSegPoints[i]=[new SVG.Point(pt.x+f*sinAngle,pt.y-f*cosAngle),pt,new SVG.Point(pt.x-f*sinAngle,pt.y+f*cosAngle)];angle+=deltaTeta;}// Remove the first control point of the first segment point and remove the second control point of the last segment point
// These two control points are not used in the approximation of the arc, that is why they are removed
arcSegPoints[0][0]=arcSegPoints[0][1].clone();arcSegPoints[arcSegPoints.length-1][2]=arcSegPoints[arcSegPoints.length-1][1].clone();// Revert the transformation that was applied to make the arc part of a unit circle instead of an ellipse
mat=new SVG.Matrix().rotate(xAxisRotation).scale(rx,ry).rotate(-xAxisRotation);for(i=0,il=arcSegPoints.length;i<il;i++){arcSegPoints[i][0]=arcSegPoints[i][0].transform(mat);arcSegPoints[i][1]=arcSegPoints[i][1].transform(mat);arcSegPoints[i][2]=arcSegPoints[i][2].transform(mat);}// Convert the segments points to SVG curve commands
for(i=1,il=arcSegPoints.length;i<il;i++){pt=arcSegPoints[i-1][2];x1=pt.x;y1=pt.y;pt=arcSegPoints[i][0];x2=pt.x;y2=pt.y;pt=arcSegPoints[i][1];x=pt.x;y=pt.y;retVal.push(['C',x1,y1,x2,y2,x,y]);}return retVal;}})();/*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */(function(){// creates handler, saves it
function DragHandler(el){el.remember('_draggable',this);this.el=el;}// Sets new parameter, starts dragging
DragHandler.prototype.init=function(constraint,val){var _this=this;this.constraint=constraint;this.value=val;this.el.on('mousedown.drag',function(e){_this.start(e);});this.el.on('touchstart.drag',function(e){_this.start(e);});};// transforms one point from screen to user coords
DragHandler.prototype.transformPoint=function(event,offset){event=event||window.event;var touches=event.changedTouches&&event.changedTouches[0]||event;this.p.x=touches.clientX-(offset||0);this.p.y=touches.clientY;return this.p.matrixTransform(this.m);};// gets elements bounding box with special handling of groups, nested and use
DragHandler.prototype.getBBox=function(){var box=this.el.bbox();if(this.el instanceof SVG.Nested)box=this.el.rbox();if(this.el instanceof SVG.G||this.el instanceof SVG.Use||this.el instanceof SVG.Nested){box.x=this.el.x();box.y=this.el.y();}return box;};// start dragging
DragHandler.prototype.start=function(e){// check for left button
if(e.type=='click'||e.type=='mousedown'||e.type=='mousemove'){if((e.which||e.buttons)!=1){return;}}var _this=this;// fire beforedrag event
this.el.fire('beforedrag',{event:e,handler:this});if(this.el.event().defaultPrevented)return;// prevent browser drag behavior as soon as possible
e.preventDefault();// prevent propagation to a parent that might also have dragging enabled
e.stopPropagation();// search for parent on the fly to make sure we can call
// draggable() even when element is not in the dom currently
this.parent=this.parent||this.el.parent(SVG.Nested)||this.el.parent(SVG.Doc);this.p=this.parent.node.createSVGPoint();// save current transformation matrix
this.m=this.el.node.getScreenCTM().inverse();var box=this.getBBox();var anchorOffset;// fix text-anchor in text-element (#37)
if(this.el instanceof SVG.Text){anchorOffset=this.el.node.getComputedTextLength();switch(this.el.attr('text-anchor')){case'middle':anchorOffset/=2;break;case'start':anchorOffset=0;break;}}this.startPoints={// We take absolute coordinates since we are just using a delta here
point:this.transformPoint(e,anchorOffset),box:box,transform:this.el.transform()};// add drag and end events to window
SVG.on(window,'mousemove.drag',function(e){_this.drag(e);});SVG.on(window,'touchmove.drag',function(e){_this.drag(e);});SVG.on(window,'mouseup.drag',function(e){_this.end(e);});SVG.on(window,'touchend.drag',function(e){_this.end(e);});// fire dragstart event
this.el.fire('dragstart',{event:e,p:this.startPoints.point,m:this.m,handler:this});};// while dragging
DragHandler.prototype.drag=function(e){var box=this.getBBox(),p=this.transformPoint(e),x=this.startPoints.box.x+p.x-this.startPoints.point.x,y=this.startPoints.box.y+p.y-this.startPoints.point.y,c=this.constraint,gx=p.x-this.startPoints.point.x,gy=p.y-this.startPoints.point.y;this.el.fire('dragmove',{event:e,p:p,m:this.m,handler:this});if(this.el.event().defaultPrevented)return p;// move the element to its new position, if possible by constraint
if(typeof c=='function'){var coord=c.call(this.el,x,y,this.m);// bool, just show us if movement is allowed or not
if(typeof coord=='boolean'){coord={x:coord,y:coord};}// if true, we just move. If !false its a number and we move it there
if(coord.x===true){this.el.x(x);}else if(coord.x!==false){this.el.x(coord.x);}if(coord.y===true){this.el.y(y);}else if(coord.y!==false){this.el.y(coord.y);}}else if(typeof c=='object'){// keep element within constrained box
if(c.minX!=null&&x<c.minX){x=c.minX;gx=x-this.startPoints.box.x;}else if(c.maxX!=null&&x>c.maxX-box.width){x=c.maxX-box.width;gx=x-this.startPoints.box.x;}if(c.minY!=null&&y<c.minY){y=c.minY;gy=y-this.startPoints.box.y;}else if(c.maxY!=null&&y>c.maxY-box.height){y=c.maxY-box.height;gy=y-this.startPoints.box.y;}if(c.snapToGrid!=null){x=x-x%c.snapToGrid;y=y-y%c.snapToGrid;gx=gx-gx%c.snapToGrid;gy=gy-gy%c.snapToGrid;}if(this.el instanceof SVG.G)this.el.matrix(this.startPoints.transform).transform({x:gx,y:gy},true);else this.el.move(x,y);}// so we can use it in the end-method, too
return p;};DragHandler.prototype.end=function(e){// final drag
var p=this.drag(e);// fire dragend event
this.el.fire('dragend',{event:e,p:p,m:this.m,handler:this});// unbind events
SVG.off(window,'mousemove.drag');SVG.off(window,'touchmove.drag');SVG.off(window,'mouseup.drag');SVG.off(window,'touchend.drag');};SVG.extend(SVG.Element,{// Make element draggable
// Constraint might be an object (as described in readme.md) or a function in the form "function (x, y)" that gets called before every move.
// The function can return a boolean or an object of the form {x, y}, to which the element will be moved. "False" skips moving, true moves to raw x, y.
draggable:function(value,constraint){// Check the parameters and reassign if needed
if(typeof value=='function'||typeof value=='object'){constraint=value;value=true;}var dragHandler=this.remember('_draggable')||new DragHandler(this);// When no parameter is given, value is true
value=typeof value==='undefined'?true:value;if(value)dragHandler.init(constraint||{},value);else{this.off('mousedown.drag');this.off('touchstart.drag');}return this;}});}).call(undefined);(function(){function SelectHandler(el){this.el=el;el.remember('_selectHandler',this);this.pointSelection={isSelected:false};this.rectSelection={isSelected:false};// helper list with position settings of each type of point
this.pointsList={lt:[0,0],rt:['width',0],rb:['width','height'],lb:[0,'height'],t:['width',0],r:['width','height'],b:['width','height'],l:[0,'height']};// helper function to get point coordinates based on settings above and an object (bbox in our case)
this.pointCoord=function(setting,object,isPointCentered){var coord=typeof setting!=='string'?setting:object[setting];// Top, bottom, right and left points are placed in the center of element width/height
return isPointCentered?coord/2:coord;};this.pointCoords=function(point,object){var settings=this.pointsList[point];return{x:this.pointCoord(settings[0],object,point==='t'||point==='b'),y:this.pointCoord(settings[1],object,point==='r'||point==='l')};};}SelectHandler.prototype.init=function(value,options){var bbox=this.el.bbox();this.options={};// store defaults list of points in order to verify users config
var points=this.el.selectize.defaults.points;// Merging the defaults and the options-object together
for(var i in this.el.selectize.defaults){this.options[i]=this.el.selectize.defaults[i];if(options[i]!==undefined){this.options[i]=options[i];}}// prepare & validate list of points to be added (or excluded)
var pointsLists=['points','pointsExclude'];for(var i in pointsLists){var option=this.options[pointsLists[i]];if(typeof option==='string'){if(option.length>0){// if set as comma separated string list => convert it into an array
option=option.split(/\s*,\s*/i);}else{option=[];}}else if(typeof option==='boolean'&&pointsLists[i]==='points'){// this is not needed, but let's have it for legacy support
option=option?points:[];}this.options[pointsLists[i]]=option;}// intersect correct all points options with users config (exclude unwanted points)
// ES5 -> NO arrow functions nor Array.includes()
this.options.points=[points,this.options.points].reduce(function(a,b){return a.filter(function(c){return b.indexOf(c)>-1;});});// exclude pointsExclude, if wanted
this.options.points=[this.options.points,this.options.pointsExclude].reduce(function(a,b){return a.filter(function(c){return b.indexOf(c)<0;});});this.parent=this.el.parent();this.nested=this.nested||this.parent.group();this.nested.matrix(new SVG.Matrix(this.el).translate(bbox.x,bbox.y));// When deepSelect is enabled and the element is a line/polyline/polygon, draw only points for moving
if(this.options.deepSelect&&['line','polyline','polygon'].indexOf(this.el.type)!==-1){this.selectPoints(value);}else{this.selectRect(value);}this.observe();this.cleanup();};SelectHandler.prototype.selectPoints=function(value){this.pointSelection.isSelected=value;// When set is already there we dont have to create one
if(this.pointSelection.set){return this;}// Create our set of elements
this.pointSelection.set=this.parent.set();// draw the points and mark the element as selected
this.drawPoints();return this;};// create the point-array which contains the 2 points of a line or simply the points-array of polyline/polygon
SelectHandler.prototype.getPointArray=function(){var bbox=this.el.bbox();return this.el.array().valueOf().map(function(el){return[el[0]-bbox.x,el[1]-bbox.y];});};// Draws a points
SelectHandler.prototype.drawPoints=function(){var _this=this,array=this.getPointArray();// go through the array of points
for(var i=0,len=array.length;i<len;++i){var curriedEvent=function(k){return function(ev){ev=ev||window.event;ev.preventDefault?ev.preventDefault():ev.returnValue=false;ev.stopPropagation();var x=ev.pageX||ev.touches[0].pageX;var y=ev.pageY||ev.touches[0].pageY;_this.el.fire('point',{x:x,y:y,i:k,event:ev});};}(i);// add every point to the set
// add css-classes and a touchstart-event which fires our event for moving points
var point=this.drawPoint(array[i][0],array[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints+'_point').on('touchstart',curriedEvent).on('mousedown',curriedEvent);this.pointSelection.set.add(point);}};// The function to draw single point
SelectHandler.prototype.drawPoint=function(cx,cy){var pointType=this.options.pointType;switch(pointType){case'circle':return this.drawCircle(cx,cy);case'rect':return this.drawRect(cx,cy);default:if(typeof pointType==='function'){return pointType.call(this,cx,cy);}throw new Error('Unknown '+pointType+' point type!');}};// The function to draw the circle point
SelectHandler.prototype.drawCircle=function(cx,cy){return this.nested.circle(this.options.pointSize).center(cx,cy);};// The function to draw the rect point
SelectHandler.prototype.drawRect=function(cx,cy){return this.nested.rect(this.options.pointSize,this.options.pointSize).center(cx,cy);};// every time a point is moved, we have to update the positions of our point
SelectHandler.prototype.updatePointSelection=function(){var array=this.getPointArray();this.pointSelection.set.each(function(i){if(this.cx()===array[i][0]&&this.cy()===array[i][1]){return;}this.center(array[i][0],array[i][1]);});};SelectHandler.prototype.updateRectSelection=function(){var _this=this,bbox=this.el.bbox();this.rectSelection.set.get(0).attr({width:bbox.width,height:bbox.height});// set.get(1) is always in the upper left corner. no need to move it
if(this.options.points.length){this.options.points.map(function(point,index){var coords=_this.pointCoords(point,bbox);_this.rectSelection.set.get(index+1).center(coords.x,coords.y);});}if(this.options.rotationPoint){var length=this.rectSelection.set.length();this.rectSelection.set.get(length-1).center(bbox.width/2,20);}};SelectHandler.prototype.selectRect=function(value){var _this=this,bbox=this.el.bbox();this.rectSelection.isSelected=value;// when set is already p
this.rectSelection.set=this.rectSelection.set||this.parent.set();// helperFunction to create a mouse-down function which triggers the event specified in `eventName`
function getMoseDownFunc(eventName){return function(ev){ev=ev||window.event;ev.preventDefault?ev.preventDefault():ev.returnValue=false;ev.stopPropagation();var x=ev.pageX||ev.touches[0].pageX;var y=ev.pageY||ev.touches[0].pageY;_this.el.fire(eventName,{x:x,y:y,event:ev});};}// create the selection-rectangle and add the css-class
if(!this.rectSelection.set.get(0)){this.rectSelection.set.add(this.nested.rect(bbox.width,bbox.height).addClass(this.options.classRect));}// Draw Points at the edges, if enabled
if(this.options.points.length&&this.rectSelection.set.length()<2){var ename="touchstart",mname="mousedown";this.options.points.map(function(point,index){var coords=_this.pointCoords(point,bbox);var pointElement=_this.drawPoint(coords.x,coords.y).attr('class',_this.options.classPoints+'_'+point).on(mname,getMoseDownFunc(point)).on(ename,getMoseDownFunc(point));_this.rectSelection.set.add(pointElement);});this.rectSelection.set.each(function(){this.addClass(_this.options.classPoints);});}// draw rotationPint, if enabled
if(this.options.rotationPoint&&(this.options.points&&!this.rectSelection.set.get(9)||!this.options.points&&!this.rectSelection.set.get(1))){var curriedEvent=function(ev){ev=ev||window.event;ev.preventDefault?ev.preventDefault():ev.returnValue=false;ev.stopPropagation();var x=ev.pageX||ev.touches[0].pageX;var y=ev.pageY||ev.touches[0].pageY;_this.el.fire('rot',{x:x,y:y,event:ev});};var pointElement=this.drawPoint(bbox.width/2,20).attr('class',this.options.classPoints+'_rot').on("touchstart",curriedEvent).on("mousedown",curriedEvent);this.rectSelection.set.add(pointElement);}};SelectHandler.prototype.handler=function(){var bbox=this.el.bbox();this.nested.matrix(new SVG.Matrix(this.el).translate(bbox.x,bbox.y));if(this.rectSelection.isSelected){this.updateRectSelection();}if(this.pointSelection.isSelected){this.updatePointSelection();}};SelectHandler.prototype.observe=function(){var _this=this;if(MutationObserver){if(this.rectSelection.isSelected||this.pointSelection.isSelected){this.observerInst=this.observerInst||new MutationObserver(function(){_this.handler();});this.observerInst.observe(this.el.node,{attributes:true});}else{try{this.observerInst.disconnect();delete this.observerInst;}catch(e){}}}else{this.el.off('DOMAttrModified.select');if(this.rectSelection.isSelected||this.pointSelection.isSelected){this.el.on('DOMAttrModified.select',function(){_this.handler();});}}};SelectHandler.prototype.cleanup=function(){//var _this = this;
if(!this.rectSelection.isSelected&&this.rectSelection.set){// stop watching the element, remove the selection
this.rectSelection.set.each(function(){this.remove();});this.rectSelection.set.clear();delete this.rectSelection.set;}if(!this.pointSelection.isSelected&&this.pointSelection.set){// Remove all points, clear the set, stop watching the element
this.pointSelection.set.each(function(){this.remove();});this.pointSelection.set.clear();delete this.pointSelection.set;}if(!this.pointSelection.isSelected&&!this.rectSelection.isSelected){this.nested.remove();delete this.nested;}};SVG.extend(SVG.Element,{// Select element with mouse
selectize:function(value,options){// Check the parameters and reassign if needed
if(typeof value==='object'){options=value;value=true;}var selectHandler=this.remember('_selectHandler')||new SelectHandler(this);selectHandler.init(value===undefined?true:value,options||{});return this;}});SVG.Element.prototype.selectize.defaults={points:['lt','rt','rb','lb','t','r','b','l'],// which points to draw, default all
pointsExclude:[],// easier option if to exclude few than rewrite all
classRect:'svg_select_boundingRect',// Css-class added to the rect
classPoints:'svg_select_points',// Css-class added to the points
pointSize:7,// size of point
rotationPoint:true,// If true, rotation point is drawn. Needed for rotation!
deepSelect:false,// If true, moving of single points is possible (only line, polyline, polyon)
pointType:'circle'// Point type: circle or rect, default circle
};})();(function(){(function(){function ResizeHandler(el){el.remember('_resizeHandler',this);this.el=el;this.parameters={};this.lastUpdateCall=null;this.p=el.doc().node.createSVGPoint();}ResizeHandler.prototype.transformPoint=function(x,y,m){this.p.x=x-(this.offset.x-window.pageXOffset);this.p.y=y-(this.offset.y-window.pageYOffset);return this.p.matrixTransform(m||this.m);};ResizeHandler.prototype._extractPosition=function(event){// Extract a position from a mouse/touch event.
// Returns { x: .., y: .. }
return{x:event.clientX!=null?event.clientX:event.touches[0].clientX,y:event.clientY!=null?event.clientY:event.touches[0].clientY};};ResizeHandler.prototype.init=function(options){var _this=this;this.stop();if(options==='stop'){return;}this.options={};// Merge options and defaults
for(var i in this.el.resize.defaults){this.options[i]=this.el.resize.defaults[i];if(typeof options[i]!=='undefined'){this.options[i]=options[i];}}// We listen to all these events which are specifying different edges
this.el.on('lt.resize',function(e){_this.resize(e||window.event);});// Left-Top
this.el.on('rt.resize',function(e){_this.resize(e||window.event);});// Right-Top
this.el.on('rb.resize',function(e){_this.resize(e||window.event);});// Right-Bottom
this.el.on('lb.resize',function(e){_this.resize(e||window.event);});// Left-Bottom
this.el.on('t.resize',function(e){_this.resize(e||window.event);});// Top
this.el.on('r.resize',function(e){_this.resize(e||window.event);});// Right
this.el.on('b.resize',function(e){_this.resize(e||window.event);});// Bottom
this.el.on('l.resize',function(e){_this.resize(e||window.event);});// Left
this.el.on('rot.resize',function(e){_this.resize(e||window.event);});// Rotation
this.el.on('point.resize',function(e){_this.resize(e||window.event);});// Point-Moving
// This call ensures, that the plugin reacts to a change of snapToGrid immediately
this.update();};ResizeHandler.prototype.stop=function(){this.el.off('lt.resize');this.el.off('rt.resize');this.el.off('rb.resize');this.el.off('lb.resize');this.el.off('t.resize');this.el.off('r.resize');this.el.off('b.resize');this.el.off('l.resize');this.el.off('rot.resize');this.el.off('point.resize');return this;};ResizeHandler.prototype.resize=function(event){var _this=this;this.m=this.el.node.getScreenCTM().inverse();this.offset={x:window.pageXOffset,y:window.pageYOffset};var txPt=this._extractPosition(event.detail.event);this.parameters={type:this.el.type,// the type of element
p:this.transformPoint(txPt.x,txPt.y),x:event.detail.x,// x-position of the mouse when resizing started
y:event.detail.y,// y-position of the mouse when resizing started
box:this.el.bbox(),// The bounding-box of the element
rotation:this.el.transform().rotation// The current rotation of the element
};// Add font-size parameter if the element type is text
if(this.el.type==="text"){this.parameters.fontSize=this.el.attr()["font-size"];}// the i-param in the event holds the index of the point which is moved, when using `deepSelect`
if(event.detail.i!==undefined){// get the point array
var array=this.el.array().valueOf();// Save the index and the point which is moved
this.parameters.i=event.detail.i;this.parameters.pointCoords=[array[event.detail.i][0],array[event.detail.i][1]];}// Lets check which edge of the bounding-box was clicked and resize the this.el according to this
switch(event.type){// Left-Top-Edge
case'lt':// We build a calculating function for every case which gives us the new position of the this.el
this.calc=function(diffX,diffY){// The procedure is always the same
// First we snap the edge to the given grid (snapping to 1px grid is normal resizing)
var snap=this.snapToGrid(diffX,diffY);// Now we check if the new height and width still valid (> 0)
if(this.parameters.box.width-snap[0]>0&&this.parameters.box.height-snap[1]>0){// ...if valid, we resize the this.el (which can include moving because the coord-system starts at the left-top and this edge is moving sometimes when resized)
/*
                           * but first check if the element is text box, so we can change the font size instead of
                           * the width and height
                           */if(this.parameters.type==="text"){this.el.move(this.parameters.box.x+snap[0],this.parameters.box.y);this.el.attr("font-size",this.parameters.fontSize-snap[0]);return;}snap=this.checkAspectRatio(snap);this.el.move(this.parameters.box.x+snap[0],this.parameters.box.y+snap[1]).size(this.parameters.box.width-snap[0],this.parameters.box.height-snap[1]);}};break;// Right-Top
case'rt':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,1<<1);if(this.parameters.box.width+snap[0]>0&&this.parameters.box.height-snap[1]>0){if(this.parameters.type==="text"){this.el.move(this.parameters.box.x-snap[0],this.parameters.box.y);this.el.attr("font-size",this.parameters.fontSize+snap[0]);return;}snap=this.checkAspectRatio(snap,true);this.el.move(this.parameters.box.x,this.parameters.box.y+snap[1]).size(this.parameters.box.width+snap[0],this.parameters.box.height-snap[1]);}};break;// Right-Bottom
case'rb':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,0);if(this.parameters.box.width+snap[0]>0&&this.parameters.box.height+snap[1]>0){if(this.parameters.type==="text"){this.el.move(this.parameters.box.x-snap[0],this.parameters.box.y);this.el.attr("font-size",this.parameters.fontSize+snap[0]);return;}snap=this.checkAspectRatio(snap);this.el.move(this.parameters.box.x,this.parameters.box.y).size(this.parameters.box.width+snap[0],this.parameters.box.height+snap[1]);}};break;// Left-Bottom
case'lb':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,1);if(this.parameters.box.width-snap[0]>0&&this.parameters.box.height+snap[1]>0){if(this.parameters.type==="text"){this.el.move(this.parameters.box.x+snap[0],this.parameters.box.y);this.el.attr("font-size",this.parameters.fontSize-snap[0]);return;}snap=this.checkAspectRatio(snap,true);this.el.move(this.parameters.box.x+snap[0],this.parameters.box.y).size(this.parameters.box.width-snap[0],this.parameters.box.height+snap[1]);}};break;// Top
case't':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,1<<1);if(this.parameters.box.height-snap[1]>0){// Disable the font-resizing if it is not from the corner of bounding-box
if(this.parameters.type==="text"){return;}this.el.move(this.parameters.box.x,this.parameters.box.y+snap[1]).height(this.parameters.box.height-snap[1]);}};break;// Right
case'r':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,0);if(this.parameters.box.width+snap[0]>0){if(this.parameters.type==="text"){return;}this.el.move(this.parameters.box.x,this.parameters.box.y).width(this.parameters.box.width+snap[0]);}};break;// Bottom
case'b':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,0);if(this.parameters.box.height+snap[1]>0){if(this.parameters.type==="text"){return;}this.el.move(this.parameters.box.x,this.parameters.box.y).height(this.parameters.box.height+snap[1]);}};break;// Left
case'l':// s.a.
this.calc=function(diffX,diffY){var snap=this.snapToGrid(diffX,diffY,1);if(this.parameters.box.width-snap[0]>0){if(this.parameters.type==="text"){return;}this.el.move(this.parameters.box.x+snap[0],this.parameters.box.y).width(this.parameters.box.width-snap[0]);}};break;// Rotation
case'rot':// s.a.
this.calc=function(diffX,diffY){// yes this is kinda stupid but we need the mouse coords back...
var current={x:diffX+this.parameters.p.x,y:diffY+this.parameters.p.y};// start minus middle
var sAngle=Math.atan2(this.parameters.p.y-this.parameters.box.y-this.parameters.box.height/2,this.parameters.p.x-this.parameters.box.x-this.parameters.box.width/2);// end minus middle
var pAngle=Math.atan2(current.y-this.parameters.box.y-this.parameters.box.height/2,current.x-this.parameters.box.x-this.parameters.box.width/2);var angle=this.parameters.rotation+(pAngle-sAngle)*180/Math.PI+this.options.snapToAngle/2;// We have to move the element to the center of the box first and change the rotation afterwards
// because rotation always works around a rotation-center, which is changed when moving the element
// We also set the new rotation center to the center of the box.
this.el.center(this.parameters.box.cx,this.parameters.box.cy).rotate(angle-angle%this.options.snapToAngle,this.parameters.box.cx,this.parameters.box.cy);};break;// Moving one single Point (needed when an element is deepSelected which means you can move every single point of the object)
case'point':this.calc=function(diffX,diffY){// Snapping the point to the grid
var snap=this.snapToGrid(diffX,diffY,this.parameters.pointCoords[0],this.parameters.pointCoords[1]);// Get the point array
var array=this.el.array().valueOf();// Changing the moved point in the array
array[this.parameters.i][0]=this.parameters.pointCoords[0]+snap[0];array[this.parameters.i][1]=this.parameters.pointCoords[1]+snap[1];// And plot the new this.el
this.el.plot(array);};}this.el.fire('resizestart',{dx:this.parameters.x,dy:this.parameters.y,event:event});// When resizing started, we have to register events for...
// Touches.
SVG.on(window,'touchmove.resize',function(e){_this.update(e||window.event);});SVG.on(window,'touchend.resize',function(){_this.done();});// Mouse.
SVG.on(window,'mousemove.resize',function(e){_this.update(e||window.event);});SVG.on(window,'mouseup.resize',function(){_this.done();});};// The update-function redraws the element every time the mouse is moving
ResizeHandler.prototype.update=function(event){if(!event){if(this.lastUpdateCall){this.calc(this.lastUpdateCall[0],this.lastUpdateCall[1]);}return;}// Calculate the difference between the mouseposition at start and now
var txPt=this._extractPosition(event);var p=this.transformPoint(txPt.x,txPt.y);var diffX=p.x-this.parameters.p.x,diffY=p.y-this.parameters.p.y;this.lastUpdateCall=[diffX,diffY];// Calculate the new position and height / width of the element
this.calc(diffX,diffY);// Emit an event to say we have changed.
this.el.fire('resizing',{dx:diffX,dy:diffY,event:event});};// Is called on mouseup.
// Removes the update-function from the mousemove event
ResizeHandler.prototype.done=function(){this.lastUpdateCall=null;SVG.off(window,'mousemove.resize');SVG.off(window,'mouseup.resize');SVG.off(window,'touchmove.resize');SVG.off(window,'touchend.resize');this.el.fire('resizedone');};// The flag is used to determine whether the resizing is used with a left-Point (first bit) and top-point (second bit)
// In this cases the temp-values are calculated differently
ResizeHandler.prototype.snapToGrid=function(diffX,diffY,flag,pointCoordsY){var temp;// If `pointCoordsY` is given, a single Point has to be snapped (deepSelect). That's why we need a different temp-value
if(typeof pointCoordsY!=='undefined'){// Note that flag = pointCoordsX in this case
temp=[(flag+diffX)%this.options.snapToGrid,(pointCoordsY+diffY)%this.options.snapToGrid];}else{// We check if the flag is set and if not we set a default-value (both bits set - which means upper-left-edge)
flag=flag==null?1|1<<1:flag;temp=[(this.parameters.box.x+diffX+(flag&1?0:this.parameters.box.width))%this.options.snapToGrid,(this.parameters.box.y+diffY+(flag&1<<1?0:this.parameters.box.height))%this.options.snapToGrid];}if(diffX<0){temp[0]-=this.options.snapToGrid;}if(diffY<0){temp[1]-=this.options.snapToGrid;}diffX-=Math.abs(temp[0])<this.options.snapToGrid/2?temp[0]:temp[0]-(diffX<0?-this.options.snapToGrid:this.options.snapToGrid);diffY-=Math.abs(temp[1])<this.options.snapToGrid/2?temp[1]:temp[1]-(diffY<0?-this.options.snapToGrid:this.options.snapToGrid);return this.constraintToBox(diffX,diffY,flag,pointCoordsY);};// keep element within constrained box
ResizeHandler.prototype.constraintToBox=function(diffX,diffY,flag,pointCoordsY){//return [diffX, diffY]
var c=this.options.constraint||{};var orgX,orgY;if(typeof pointCoordsY!=='undefined'){orgX=flag;orgY=pointCoordsY;}else{orgX=this.parameters.box.x+(flag&1?0:this.parameters.box.width);orgY=this.parameters.box.y+(flag&1<<1?0:this.parameters.box.height);}if(typeof c.minX!=='undefined'&&orgX+diffX<c.minX){diffX=c.minX-orgX;}if(typeof c.maxX!=='undefined'&&orgX+diffX>c.maxX){diffX=c.maxX-orgX;}if(typeof c.minY!=='undefined'&&orgY+diffY<c.minY){diffY=c.minY-orgY;}if(typeof c.maxY!=='undefined'&&orgY+diffY>c.maxY){diffY=c.maxY-orgY;}return[diffX,diffY];};ResizeHandler.prototype.checkAspectRatio=function(snap,isReverse){if(!this.options.saveAspectRatio){return snap;}var updatedSnap=snap.slice();var aspectRatio=this.parameters.box.width/this.parameters.box.height;var newW=this.parameters.box.width+snap[0];var newH=this.parameters.box.height-snap[1];var newAspectRatio=newW/newH;if(newAspectRatio<aspectRatio){// Height is too big. Adapt it
updatedSnap[1]=newW/aspectRatio-this.parameters.box.height;isReverse&&(updatedSnap[1]=-updatedSnap[1]);}else if(newAspectRatio>aspectRatio){// Width is too big. Adapt it
updatedSnap[0]=this.parameters.box.width-newH*aspectRatio;isReverse&&(updatedSnap[0]=-updatedSnap[0]);}return updatedSnap;};SVG.extend(SVG.Element,{// Resize element with mouse
resize:function(options){(this.remember('_resizeHandler')||new ResizeHandler(this)).init(options||{});return this;}});SVG.Element.prototype.resize.defaults={snapToAngle:0.1,// Specifies the speed the rotation is happening when moving the mouse
snapToGrid:1,// Snaps to a grid of `snapToGrid` Pixels
constraint:{},// keep element within constrained box
saveAspectRatio:false// Save aspect ratio when resizing using lt, rt, rb or lb points
};}).call(this);})();if(typeof window.Apex==='undefined'){window.Apex={};}var InitCtxVariables=/*#__PURE__*/function(){function InitCtxVariables(ctx){_classCallCheck(this,InitCtxVariables);this.ctx=ctx;this.w=ctx.w;}_createClass(InitCtxVariables,[{key:"initModules",value:function initModules(){this.ctx.publicMethods=['updateOptions','updateSeries','appendData','appendSeries','isSeriesHidden','toggleSeries','showSeries','hideSeries','setLocale','resetSeries','zoomX','toggleDataPointSelection','dataURI','exportToCSV','addXaxisAnnotation','addYaxisAnnotation','addPointAnnotation','clearAnnotations','removeAnnotation','paper','destroy'];this.ctx.eventList=['click','mousedown','mousemove','mouseleave','touchstart','touchmove','touchleave','mouseup','touchend'];this.ctx.animations=new Animations(this.ctx);this.ctx.axes=new Axes(this.ctx);this.ctx.core=new Core(this.ctx.el,this.ctx);this.ctx.config=new Config({});this.ctx.data=new Data(this.ctx);this.ctx.grid=new Grid(this.ctx);this.ctx.graphics=new Graphics(this.ctx);this.ctx.coreUtils=new CoreUtils(this.ctx);this.ctx.crosshairs=new Crosshairs(this.ctx);this.ctx.events=new Events(this.ctx);this.ctx.exports=new Exports(this.ctx);this.ctx.localization=new Localization(this.ctx);this.ctx.options=new Options();this.ctx.responsive=new Responsive(this.ctx);this.ctx.series=new Series(this.ctx);this.ctx.theme=new Theme(this.ctx);this.ctx.formatters=new Formatters(this.ctx);this.ctx.titleSubtitle=new TitleSubtitle(this.ctx);this.ctx.legend=new Legend(this.ctx);this.ctx.toolbar=new Toolbar(this.ctx);this.ctx.tooltip=new Tooltip(this.ctx);this.ctx.dimensions=new Dimensions(this.ctx);this.ctx.updateHelpers=new UpdateHelpers(this.ctx);this.ctx.zoomPanSelection=new ZoomPanSelection(this.ctx);this.ctx.w.globals.tooltip=new Tooltip(this.ctx);}}]);return InitCtxVariables;}();var Destroy=/*#__PURE__*/function(){function Destroy(ctx){_classCallCheck(this,Destroy);this.ctx=ctx;this.w=ctx.w;}_createClass(Destroy,[{key:"clear",value:function clear(_ref){var isUpdating=_ref.isUpdating;if(this.ctx.zoomPanSelection){this.ctx.zoomPanSelection.destroy();}if(this.ctx.toolbar){this.ctx.toolbar.destroy();}this.ctx.animations=null;this.ctx.axes=null;this.ctx.annotations=null;this.ctx.core=null;this.ctx.data=null;this.ctx.grid=null;this.ctx.series=null;this.ctx.responsive=null;this.ctx.theme=null;this.ctx.formatters=null;this.ctx.titleSubtitle=null;this.ctx.legend=null;this.ctx.dimensions=null;this.ctx.options=null;this.ctx.crosshairs=null;this.ctx.zoomPanSelection=null;this.ctx.updateHelpers=null;this.ctx.toolbar=null;this.ctx.localization=null;this.ctx.w.globals.tooltip=null;this.clearDomElements({isUpdating:isUpdating});}},{key:"killSVG",value:function killSVG(draw){draw.each(function(i,children){this.removeClass('*');this.off();this.stop();},true);draw.ungroup();draw.clear();}},{key:"clearDomElements",value:function clearDomElements(_ref2){var _this=this;var isUpdating=_ref2.isUpdating;var elSVG=this.w.globals.dom.Paper.node;// fixes apexcharts.js#1654 & vue-apexcharts#256
if(elSVG.parentNode&&elSVG.parentNode.parentNode&&!isUpdating){elSVG.parentNode.parentNode.style.minHeight='unset';}// detach root event
var baseEl=this.w.globals.dom.baseEl;if(baseEl){// see https://github.com/apexcharts/vue-apexcharts/issues/275
this.ctx.eventList.forEach(function(event){baseEl.removeEventListener(event,_this.ctx.events.documentEvent);});}var domEls=this.w.globals.dom;if(this.ctx.el!==null){// remove all child elements - resetting the whole chart
while(this.ctx.el.firstChild){this.ctx.el.removeChild(this.ctx.el.firstChild);}}this.killSVG(domEls.Paper);domEls.Paper.remove();domEls.elWrap=null;domEls.elGraphical=null;domEls.elLegendWrap=null;domEls.elLegendForeign=null;domEls.baseEl=null;domEls.elGridRect=null;domEls.elGridRectMask=null;domEls.elGridRectMarkerMask=null;domEls.elForecastMask=null;domEls.elNonForecastMask=null;domEls.elDefs=null;}}]);return Destroy;}();// Helpers to react to element resizes, regardless of what caused them
// TODO Currently this creates a new ResizeObserver every time we want to observe an element for resizes
// Ideally, we should be able to use a single observer for all elements
var ros=new WeakMap();// Map callbacks to ResizeObserver instances for easy removal
function addResizeListener(el,fn){var called=false;if(el.nodeType!==Node.DOCUMENT_FRAGMENT_NODE){var elRect=el.getBoundingClientRect();if(el.style.display==='none'||elRect.width===0){// if elRect.width=0, the chart is not rendered at all
// (it has either display none or hidden in a different tab)
// fixes https://github.com/apexcharts/apexcharts.js/issues/2825
// fixes https://github.com/apexcharts/apexcharts.js/issues/2991
// fixes https://github.com/apexcharts/apexcharts.js/issues/2992
called=true;}}var ro=new ResizeObserver(function(r){// ROs fire immediately after being created,
// per spec: https://drafts.csswg.org/resize-observer/#ref-for-element%E2%91%A3
// we don't want that so we just discard the first run
if(called){fn.call(el,r);}called=true;});if(el.nodeType===Node.DOCUMENT_FRAGMENT_NODE){// Document fragment, observe children instead (needed for Shadow DOM, see #1332)
Array.from(el.children).forEach(function(c){return ro.observe(c);});}else{ro.observe(el);}ros.set(fn,ro);}function removeResizeListener(el,fn){var ro=ros.get(fn);if(ro){ro.disconnect();ros.delete(fn);}}var css_248z="@keyframes opaque {\n  0% {\n      opacity: 0\n  }\n\n  to {\n      opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n  0%,to {\n      opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\n.legend-mouseover-inactive {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255,255,255,.96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30,30,30,.8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0,0,0,.7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0;\n  margin-right: 10px;\n  border-radius: 50%\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0!important\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0,0,0,.7);\n  border: 1px solid rgba(0,0,0,.5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0,0,0,.5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_boundingRect,.svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden\n}\n\n.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0,0,0,.7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n      opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {\n  opacity: 0\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {\n  pointer-events: none\n}\n\n.apexcharts-marker {\n  transition: .15s ease all\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,.resize-triggers,.resize-triggers>div {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers{\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows{\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers{\n  pointer-events: none\n}";/**
   *
   * @module ApexCharts
   **/var ApexCharts$1=/*#__PURE__*/function(){function ApexCharts(el,opts){_classCallCheck(this,ApexCharts);this.opts=opts;this.ctx=this;// Pass the user supplied options to the Base Class where these options will be extended with defaults. The returned object from Base Class will become the config object in the entire codebase.
this.w=new Base(opts).init();this.el=el;this.w.globals.cuid=Utils$1.randomId();this.w.globals.chartID=this.w.config.chart.id?Utils$1.escapeString(this.w.config.chart.id):this.w.globals.cuid;var initCtx=new InitCtxVariables(this);initCtx.initModules();this.create=Utils$1.bind(this.create,this);this.windowResizeHandler=this._windowResizeHandler.bind(this);this.parentResizeHandler=this._parentResizeCallback.bind(this);}/**
     * The primary method user will call to render the chart.
     */_createClass(ApexCharts,[{key:"render",value:function render(){var _this=this;// main method
return new Promise(function(resolve,reject){// only draw chart, if element found
if(_this.el!==null){if(typeof Apex._chartInstances==='undefined'){Apex._chartInstances=[];}if(_this.w.config.chart.id){Apex._chartInstances.push({id:_this.w.globals.chartID,group:_this.w.config.chart.group,chart:_this});}// set the locale here
_this.setLocale(_this.w.config.chart.defaultLocale);var beforeMount=_this.w.config.chart.events.beforeMount;if(typeof beforeMount==='function'){beforeMount(_this,_this.w);}_this.events.fireEvent('beforeMount',[_this,_this.w]);window.addEventListener('resize',_this.windowResizeHandler);addResizeListener(_this.el.parentNode,_this.parentResizeHandler);var rootNode=_this.el.getRootNode&&_this.el.getRootNode();var inShadowRoot=Utils$1.is('ShadowRoot',rootNode);var doc=_this.el.ownerDocument;var css=inShadowRoot?rootNode.getElementById('apexcharts-css'):doc.getElementById('apexcharts-css');if(!css){var _this$opts$chart;css=document.createElement('style');css.id='apexcharts-css';css.textContent=css_248z;var nonce=((_this$opts$chart=_this.opts.chart)===null||_this$opts$chart===void 0?void 0:_this$opts$chart.nonce)||_this.w.config.chart.nonce;if(nonce){css.setAttribute('nonce',nonce);}if(inShadowRoot){// We are in Shadow DOM, add to shadow root
rootNode.prepend(css);}else{// Add to <head> of element's document
doc.head.appendChild(css);}}var graphData=_this.create(_this.w.config.series,{});if(!graphData)return resolve(_this);_this.mount(graphData).then(function(){if(typeof _this.w.config.chart.events.mounted==='function'){_this.w.config.chart.events.mounted(_this,_this.w);}_this.events.fireEvent('mounted',[_this,_this.w]);resolve(graphData);}).catch(function(e){reject(e);// handle error in case no data or element not found
});}else{reject(new Error('Element not found'));}});}},{key:"create",value:function create(ser,opts){var w=this.w;var initCtx=new InitCtxVariables(this);initCtx.initModules();var gl=this.w.globals;gl.noData=false;gl.animationEnded=false;this.responsive.checkResponsiveConfig(opts);if(w.config.xaxis.convertedCatToNumeric){var defaults=new Defaults(w.config);defaults.convertCatToNumericXaxis(w.config,this.ctx);}if(this.el===null){gl.animationEnded=true;return null;}this.core.setupElements();if(w.config.chart.type==='treemap'){w.config.grid.show=false;w.config.yaxis[0].show=false;}if(gl.svgWidth===0){// if the element is hidden, skip drawing
gl.animationEnded=true;return null;}var combo=CoreUtils.checkComboSeries(ser,w.config.chart.type);gl.comboCharts=combo.comboCharts;gl.comboBarCount=combo.comboBarCount;var allSeriesAreEmpty=ser.every(function(s){return s.data&&s.data.length===0;});if(ser.length===0||allSeriesAreEmpty){this.series.handleNoData();}this.events.setupEventHandlers();// Handle the data inputted by user and set some of the global variables (for eg, if data is datetime / numeric / category). Don't calculate the range / min / max at this time
this.data.parseData(ser);// this is a good time to set theme colors first
this.theme.init();// as markers accepts array, we need to setup global markers for easier access
var markers=new Markers(this);markers.setGlobalMarkerSize();// labelFormatters should be called before dimensions as in dimensions we need text labels width
this.formatters.setLabelFormatters();this.titleSubtitle.draw();// legend is calculated here before coreCalculations because it affects the plottable area
// if there is some data to show or user collapsed all series, then proceed drawing legend
if(!gl.noData||gl.collapsedSeries.length===gl.series.length||w.config.legend.showForSingleSeries){this.legend.init();}// check whether in multiple series, all series share the same X
this.series.hasAllSeriesEqualX();// coreCalculations will give the min/max range and yaxis/axis values. It should be called here to set series variable from config to globals
if(gl.axisCharts){this.core.coreCalculations();if(w.config.xaxis.type!=='category'){// as we have minX and maxX values, determine the default DateTimeFormat for time series
this.formatters.setLabelFormatters();}this.ctx.toolbar.minX=w.globals.minX;this.ctx.toolbar.maxX=w.globals.maxX;}// we need to generate yaxis for heatmap separately as we are not showing numerics there, but seriesNames. There are some tweaks which are required for heatmap to align labels correctly which are done in below function
// Also we need to do this before calculating Dimensions plotCoords() method of Dimensions
this.formatters.heatmapLabelFormatters();// get the largest marker size which will be needed in dimensions calc
var coreUtils=new CoreUtils(this);coreUtils.getLargestMarkerSize();// We got plottable area here, next task would be to calculate axis areas
this.dimensions.plotCoords();var xyRatios=this.core.xySettings();this.grid.createGridMask();var elGraph=this.core.plotChartType(ser,xyRatios);var dataLabels=new DataLabels(this);dataLabels.bringForward();if(w.config.dataLabels.background.enabled){dataLabels.dataLabelsBackground();}// after all the drawing calculations, shift the graphical area (actual charts/bars) excluding legends
this.core.shiftGraphPosition();var dim={plot:{left:w.globals.translateX,top:w.globals.translateY,width:w.globals.gridWidth,height:w.globals.gridHeight}};return{elGraph:elGraph,xyRatios:xyRatios,dimensions:dim};}},{key:"mount",value:function mount(){var _this2=this;var graphData=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var me=this;var w=me.w;return new Promise(function(resolve,reject){// no data to display
if(me.el===null){return reject(new Error('Not enough data to display or target element not found'));}else if(graphData===null||w.globals.allSeriesCollapsed){me.series.handleNoData();}me.grid=new Grid(me);var elgrid=me.grid.drawGrid();me.annotations=new Annotations(me);me.annotations.drawImageAnnos();me.annotations.drawTextAnnos();if(w.config.grid.position==='back'){var _elgrid$elGridBorders;if(elgrid){w.globals.dom.elGraphical.add(elgrid.el);}if(elgrid!==null&&elgrid!==void 0&&(_elgrid$elGridBorders=elgrid.elGridBorders)!==null&&_elgrid$elGridBorders!==void 0&&_elgrid$elGridBorders.node){w.globals.dom.elGraphical.add(elgrid.elGridBorders);}}if(Array.isArray(graphData.elGraph)){for(var g=0;g<graphData.elGraph.length;g++){w.globals.dom.elGraphical.add(graphData.elGraph[g]);}}else{w.globals.dom.elGraphical.add(graphData.elGraph);}if(w.config.grid.position==='front'){var _elgrid$elGridBorders2;if(elgrid){w.globals.dom.elGraphical.add(elgrid.el);}if(elgrid!==null&&elgrid!==void 0&&(_elgrid$elGridBorders2=elgrid.elGridBorders)!==null&&_elgrid$elGridBorders2!==void 0&&_elgrid$elGridBorders2.node){w.globals.dom.elGraphical.add(elgrid.elGridBorders);}}if(w.config.xaxis.crosshairs.position==='front'){me.crosshairs.drawXCrosshairs();}if(w.config.yaxis[0].crosshairs.position==='front'){me.crosshairs.drawYCrosshairs();}if(w.config.chart.type!=='treemap'){me.axes.drawAxis(w.config.chart.type,elgrid);}var xAxis=new XAxis(_this2.ctx,elgrid);var yaxis=new YAxis(_this2.ctx,elgrid);if(elgrid!==null){xAxis.xAxisLabelCorrections(elgrid.xAxisTickWidth);yaxis.setYAxisTextAlignments();w.config.yaxis.map(function(yaxe,index){if(w.globals.ignoreYAxisIndexes.indexOf(index)===-1){yaxis.yAxisTitleRotate(index,yaxe.opposite);}});}me.annotations.drawAxesAnnotations();if(!w.globals.noData){// draw tooltips at the end
if(w.config.tooltip.enabled&&!w.globals.noData){me.w.globals.tooltip.drawTooltip(graphData.xyRatios);}if(w.globals.axisCharts&&(w.globals.isXNumeric||w.config.xaxis.convertedCatToNumeric||w.globals.isRangeBar)){if(w.config.chart.zoom.enabled||w.config.chart.selection&&w.config.chart.selection.enabled||w.config.chart.pan&&w.config.chart.pan.enabled){me.zoomPanSelection.init({xyRatios:graphData.xyRatios});}}else{var tools=w.config.chart.toolbar.tools;var toolsArr=['zoom','zoomin','zoomout','selection','pan','reset'];toolsArr.forEach(function(t){tools[t]=false;});}if(w.config.chart.toolbar.show&&!w.globals.allSeriesCollapsed){me.toolbar.createToolbar();}}if(w.globals.memory.methodsToExec.length>0){w.globals.memory.methodsToExec.forEach(function(fn){fn.method(fn.params,false,fn.context);});}if(!w.globals.axisCharts&&!w.globals.noData){me.core.resizeNonAxisCharts();}resolve(me);});}/**
       * Destroy the chart instance by removing all elements which also clean up event listeners on those elements.
       */},{key:"destroy",value:function destroy(){window.removeEventListener('resize',this.windowResizeHandler);removeResizeListener(this.el.parentNode,this.parentResizeHandler);// remove the chart's instance from the global Apex._chartInstances
var chartID=this.w.config.chart.id;if(chartID){Apex._chartInstances.forEach(function(c,i){if(c.id===Utils$1.escapeString(chartID)){Apex._chartInstances.splice(i,1);}});}new Destroy(this.ctx).clear({isUpdating:false});}/**
       * Allows users to update Options after the chart has rendered.
       *
       * @param {object} options - A new config object can be passed which will be merged with the existing config object
       * @param {boolean} redraw - should redraw from beginning or should use existing paths and redraw from there
       * @param {boolean} animate - should animate or not on updating Options
       */},{key:"updateOptions",value:function updateOptions(options){var _this3=this;var redraw=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var animate=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var updateSyncedCharts=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;var overwriteInitialConfig=arguments.length>4&&arguments[4]!==undefined?arguments[4]:true;var w=this.w;// when called externally, clear some global variables
// fixes apexcharts.js#1488
w.globals.selection=undefined;if(options.series){this.series.resetSeries(false,true,false);if(options.series.length&&options.series[0].data){options.series=options.series.map(function(s,i){return _this3.updateHelpers._extendSeries(s,i);});}// user updated the series via updateOptions() function.
// Hence, we need to reset axis min/max to avoid zooming issues
this.updateHelpers.revertDefaultAxisMinMax();}// user has set x-axis min/max externally - hence we need to forcefully set the xaxis min/max
if(options.xaxis){options=this.updateHelpers.forceXAxisUpdate(options);}if(options.yaxis){options=this.updateHelpers.forceYAxisUpdate(options);}if(w.globals.collapsedSeriesIndices.length>0){this.series.clearPreviousPaths();}/* update theme mode#459 */if(options.theme){options=this.theme.updateThemeOptions(options);}return this.updateHelpers._updateOptions(options,redraw,animate,updateSyncedCharts,overwriteInitialConfig);}/**
       * Allows users to update Series after the chart has rendered.
       *
       * @param {array} series - New series which will override the existing
       */},{key:"updateSeries",value:function updateSeries(){var newSeries=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var animate=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var overwriteInitialSeries=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;this.series.resetSeries(false);this.updateHelpers.revertDefaultAxisMinMax();return this.updateHelpers._updateSeries(newSeries,animate,overwriteInitialSeries);}/**
       * Allows users to append a new series after the chart has rendered.
       *
       * @param {array} newSerie - New serie which will be appended to the existing series
       */},{key:"appendSeries",value:function appendSeries(newSerie){var animate=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var overwriteInitialSeries=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var newSeries=this.w.config.series.slice();newSeries.push(newSerie);this.series.resetSeries(false);this.updateHelpers.revertDefaultAxisMinMax();return this.updateHelpers._updateSeries(newSeries,animate,overwriteInitialSeries);}/**
       * Allows users to append Data to series.
       *
       * @param {array} newData - New data in the same format as series
       */},{key:"appendData",value:function appendData(newData){var overwriteInitialSeries=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var me=this;me.w.globals.dataChanged=true;me.series.getPreviousPaths();var newSeries=me.w.config.series.slice();for(var i=0;i<newSeries.length;i++){if(newData[i]!==null&&typeof newData[i]!=='undefined'){for(var j=0;j<newData[i].data.length;j++){newSeries[i].data.push(newData[i].data[j]);}}}me.w.config.series=newSeries;if(overwriteInitialSeries){me.w.globals.initialSeries=Utils$1.clone(me.w.config.series);}return this.update();}},{key:"update",value:function update(options){var _this4=this;return new Promise(function(resolve,reject){new Destroy(_this4.ctx).clear({isUpdating:true});var graphData=_this4.create(_this4.w.config.series,options);if(!graphData)return resolve(_this4);_this4.mount(graphData).then(function(){if(typeof _this4.w.config.chart.events.updated==='function'){_this4.w.config.chart.events.updated(_this4,_this4.w);}_this4.events.fireEvent('updated',[_this4,_this4.w]);_this4.w.globals.isDirty=true;resolve(_this4);}).catch(function(e){reject(e);});});}/**
       * Get all charts in the same "group" (including the instance which is called upon) to sync them when user zooms in/out or pan.
       */},{key:"getSyncedCharts",value:function getSyncedCharts(){var chartGroups=this.getGroupedCharts();var allCharts=[this];if(chartGroups.length){allCharts=[];chartGroups.forEach(function(ch){allCharts.push(ch);});}return allCharts;}/**
       * Get charts in the same "group" (excluding the instance which is called upon) to perform operations on the other charts of the same group (eg., tooltip hovering)
       */},{key:"getGroupedCharts",value:function getGroupedCharts(){var _this5=this;return Apex._chartInstances.filter(function(ch){if(ch.group){return true;}}).map(function(ch){return _this5.w.config.chart.group===ch.group?ch.chart:_this5;});}},{key:"toggleSeries",value:function toggleSeries(seriesName){return this.series.toggleSeries(seriesName);}},{key:"highlightSeriesOnLegendHover",value:function highlightSeriesOnLegendHover(e,targetElement){return this.series.toggleSeriesOnHover(e,targetElement);}},{key:"showSeries",value:function showSeries(seriesName){this.series.showSeries(seriesName);}},{key:"hideSeries",value:function hideSeries(seriesName){this.series.hideSeries(seriesName);}},{key:"isSeriesHidden",value:function isSeriesHidden(seriesName){this.series.isSeriesHidden(seriesName);}},{key:"resetSeries",value:function resetSeries(){var shouldUpdateChart=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;var shouldResetZoom=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;this.series.resetSeries(shouldUpdateChart,shouldResetZoom);}// Public method to add event listener on chart context
},{key:"addEventListener",value:function addEventListener(name,handler){this.events.addEventListener(name,handler);}// Public method to remove event listener on chart context
},{key:"removeEventListener",value:function removeEventListener(name,handler){this.events.removeEventListener(name,handler);}},{key:"addXaxisAnnotation",value:function addXaxisAnnotation(opts){var pushToMemory=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var me=this;if(context){me=context;}me.annotations.addXaxisAnnotationExternal(opts,pushToMemory,me);}},{key:"addYaxisAnnotation",value:function addYaxisAnnotation(opts){var pushToMemory=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var me=this;if(context){me=context;}me.annotations.addYaxisAnnotationExternal(opts,pushToMemory,me);}},{key:"addPointAnnotation",value:function addPointAnnotation(opts){var pushToMemory=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var context=arguments.length>2&&arguments[2]!==undefined?arguments[2]:undefined;var me=this;if(context){me=context;}me.annotations.addPointAnnotationExternal(opts,pushToMemory,me);}},{key:"clearAnnotations",value:function clearAnnotations(){var context=arguments.length>0&&arguments[0]!==undefined?arguments[0]:undefined;var me=this;if(context){me=context;}me.annotations.clearAnnotations(me);}},{key:"removeAnnotation",value:function removeAnnotation(id){var context=arguments.length>1&&arguments[1]!==undefined?arguments[1]:undefined;var me=this;if(context){me=context;}me.annotations.removeAnnotation(me,id);}},{key:"getChartArea",value:function getChartArea(){var el=this.w.globals.dom.baseEl.querySelector('.apexcharts-inner');return el;}},{key:"getSeriesTotalXRange",value:function getSeriesTotalXRange(minX,maxX){return this.coreUtils.getSeriesTotalsXRange(minX,maxX);}},{key:"getHighestValueInSeries",value:function getHighestValueInSeries(){var seriesIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var range=new Range(this.ctx);return range.getMinYMaxY(seriesIndex).highestY;}},{key:"getLowestValueInSeries",value:function getLowestValueInSeries(){var seriesIndex=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var range=new Range(this.ctx);return range.getMinYMaxY(seriesIndex).lowestY;}},{key:"getSeriesTotal",value:function getSeriesTotal(){return this.w.globals.seriesTotals;}},{key:"toggleDataPointSelection",value:function toggleDataPointSelection(seriesIndex,dataPointIndex){return this.updateHelpers.toggleDataPointSelection(seriesIndex,dataPointIndex);}},{key:"zoomX",value:function zoomX(min,max){this.ctx.toolbar.zoomUpdateOptions(min,max);}},{key:"setLocale",value:function setLocale(localeName){this.localization.setCurrentLocaleValues(localeName);}},{key:"dataURI",value:function dataURI(options){var exp=new Exports(this.ctx);return exp.dataURI(options);}},{key:"exportToCSV",value:function exportToCSV(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var exp=new Exports(this.ctx);return exp.exportToCSV(options);}},{key:"paper",value:function paper(){return this.w.globals.dom.Paper;}},{key:"_parentResizeCallback",value:function _parentResizeCallback(){if(this.w.globals.animationEnded&&this.w.config.chart.redrawOnParentResize){this._windowResize();}}/**
       * Handle window resize and re-draw the whole chart.
       */},{key:"_windowResize",value:function _windowResize(){var _this6=this;clearTimeout(this.w.globals.resizeTimer);this.w.globals.resizeTimer=window.setTimeout(function(){_this6.w.globals.resized=true;_this6.w.globals.dataChanged=false;// we need to redraw the whole chart on window resize (with a small delay).
_this6.ctx.update();},150);}},{key:"_windowResizeHandler",value:function _windowResizeHandler(){var redraw=this.w.config.chart.redrawOnWindowResize;if(typeof redraw==='function'){redraw=redraw();}redraw&&this._windowResize();}}],[{key:"getChartByID",value:function getChartByID(id){var chartId=Utils$1.escapeString(id);if(!Apex._chartInstances)return undefined;var c=Apex._chartInstances.filter(function(ch){return ch.id===chartId;})[0];return c&&c.chart;}/**
       * Allows the user to provide data attrs in the element and the chart will render automatically when this method is called by searching for the elements containing 'data-apexcharts' attribute
       */},{key:"initOnLoad",value:function initOnLoad(){var els=document.querySelectorAll('[data-apexcharts]');for(var i=0;i<els.length;i++){var el=els[i];var options=JSON.parse(els[i].getAttribute('data-options'));var apexChart=new ApexCharts(el,options);apexChart.render();}}/**
       * This static method allows users to call chart methods without necessarily from the
       * instance of the chart in case user has assigned chartID to the targeted chart.
       * The chartID is used for mapping the instance stored in Apex._chartInstances global variable
       *
       * This is helpful in cases when you don't have reference of the chart instance
       * easily and need to call the method from anywhere.
       * For eg, in React/Vue applications when you have many parent/child components,
       * and need easy reference to other charts for performing dynamic operations
       *
       * @param {string} chartID - The unique identifier which will be used to call methods
       * on that chart instance
       * @param {function} fn - The method name to call
       * @param {object} opts - The parameters which are accepted in the original method will be passed here in the same order.
       */},{key:"exec",value:function exec(chartID,fn){var chart=this.getChartByID(chartID);if(!chart)return;// turn on the global exec flag to indicate this method was called
chart.w.globals.isExecCalled=true;var ret=null;if(chart.publicMethods.indexOf(fn)!==-1){for(var _len=arguments.length,opts=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){opts[_key-2]=arguments[_key];}ret=chart[fn].apply(chart,opts);}return ret;}},{key:"merge",value:function merge(target,source){return Utils$1.extend(target,source);}}]);return ApexCharts;}();return ApexCharts$1;});