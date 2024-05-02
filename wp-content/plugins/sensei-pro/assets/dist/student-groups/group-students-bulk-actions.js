(()=>{var e,t={7351:(e,t,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}const o=window.wp.element,a=window.wp.domReady;var i=n.n(a);const l=window.wp.i18n,s=window.wp.components,c=e=>{let{options:t,onApply:n,placeholder:r,disabled:a}=e;const[i,c]=(0,o.useState)(""),u=(0,o.useCallback)((()=>n(i)),[i]),m=(0,o.useMemo)((()=>[{id:"placeholder",label:r,value:""},...t]),[t]);return(0,o.createElement)("div",{className:"bulk-action-selector"},(0,o.createElement)(s.SelectControl,{value:i,options:m,onChange:c,className:"bulk-action-selector__select"}),(0,o.createElement)(s.Button,{onClick:u,className:"button bulk-action-selector__button",disabled:""===i||a},(0,l.__)("Apply","sensei-pro")))},u=e=>{let{title:t,onConfirm:n,onCancel:r,okButtonText:a=(0,l.__)("Ok","sensei-pro"),cancelButtonText:i=(0,l.__)("Cancel","sensei-pro"),showDialog:c,isBusy:u=!1,children:m}=e;return c&&(0,o.createElement)(s.Modal,{className:"sensei-confirmation-dialog",title:t,onRequestClose:r},m,(0,o.createElement)("div",{className:"sensei-confirmation-dialog__actions"},(0,o.createElement)(s.Button,{text:i,onClick:r,isBusy:u,disabled:u,className:"btn info"}),(0,o.createElement)(s.Button,{text:a,onClick:n,isBusy:u,disabled:u,isDestructive:!0})))};var m=n(2838);const p=window.wp.apiFetch;var f=n.n(p);const d=async(e,t,n)=>f()({method:"DELETE",path:`/sensei-pro-student-groups/v1/groups/${e}/students?remove_enrolments=${n?1:0}`,data:{student_ids:t}}),h=e=>{var t;let{groupId:n,studentIds:r,onCancel:a}=e;const{run:i,isLoading:c,error:p,response:f}=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const[n,r]=(0,o.useState)({status:"IDLE",response:null,error:null}),a=(0,o.useCallback)((async function(){r({status:"LOADING",response:null});try{const t=await e(...arguments);return r({status:"IDLE",response:t,error:null}),t}catch(e){r({status:"IDLE",response:null,error:e})}}),[e,...t]);return{isLoading:"LOADING"===n.status,run:a,response:n.response,hasError:null!==n.error,error:n.error}}(d,[n]),[h,g]=(0,o.useState)(!1);return f&&window.location.reload(),(0,o.createElement)(u,{showDialog:!0,okButtonText:(0,l.__)("Remove Student(s)","sensei-pro"),title:(0,l.__)("Confirm Remove Student(s)","sensei-pro"),onConfirm:()=>i(n,r,h),onCancel:a,isBusy:c},(0,o.createElement)("div",{className:"sensei-group-student-remove-confirmation-dialog-content"},p&&(0,o.createElement)(s.Notice,{status:"error",isDismissible:!1,className:"sensei-group-student-action__notice"},null!==(t=p.message)&&void 0!==t?t:(0,l.__)("Something Wrong","sensei-pro")),(0,o.createElement)(o.RawHTML,null,(0,l.sprintf)(// Translators: placeholder is the amount of students
// Translators: placeholder is the amount of students
(0,l.__)("Are you sure you want to remove <strong>%s</strong> student(s) from the group?","sensei-pro"),(0,m.sanitize)(r.length))),(0,o.createElement)(s.CheckboxControl,{label:(0,l.__)("Also remove enrolments in group courses if there is any","sensei-pro"),onChange:g,checked:h})))},g=[{label:"Remove from Group",value:"remove-from-group"}],y=e=>{let{groupId:t,items:n}=e;const[r,a]=(0,o.useState)("");return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c,{options:g,placeholder:(0,l.__)("Bulk Student actions","sensei-pro"),disabled:0===n.length,onApply:a}),"remove-from-group"===r&&(0,o.createElement)(h,{studentIds:n,groupId:t,onCancel:()=>a("")}))},b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=document.getElementById("group-students-bulk-action");if(!t)return null;(0,o.render)((0,o.createElement)(y,r({},null==t?void 0:t.dataset,{items:Array.from(e)})),t)};i()((()=>{const e=Array.from(document.querySelectorAll(".students-selector")),t=document.getElementById("cb-select-all-1"),n=new Map,r=e=>{!0===e.checked?n.set(e.value,!0):n.delete(e.value)};t.addEventListener("change",(()=>{e.forEach((e=>r(e))),b(n.keys())})),e.forEach((e=>{e.addEventListener("change",(e=>{r(e.target),b(n.keys())}))})),b()}))},2838:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(e,r,o){return n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},n.apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,s=Object.getPrototypeOf,c=Object.getOwnPropertyDescriptor,u=Object.freeze,m=Object.seal,p=Object.create,f="undefined"!=typeof Reflect&&Reflect,d=f.apply,h=f.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=x(Array.prototype.forEach),b=x(Array.prototype.pop),v=x(Array.prototype.push),E=x(String.prototype.toLowerCase),N=x(String.prototype.match),T=x(String.prototype.replace),w=x(String.prototype.indexOf),_=x(String.prototype.trim),A=x(RegExp.prototype.test),k=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function x(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e,t){i&&i(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=E(r);o!==r&&(l(t)||(t[n]=o),r=o)}e[r]=!0}return e}function S(e){var t,n=p(null);for(t in e)d(a,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=c(e,t);if(n){if(n.get)return x(n.get);if("function"==typeof n.value)return x(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var D=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),L=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),R=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),M=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),I=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),F=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),B=u(["#text"]),H=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),U=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),z=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),P=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),G=m(/<%[\w\W]*|[\w\W]*%>/gm),W=m(/^data-[\-\w.\u00B7-\uFFFF]/),q=m(/^aria-[\-\w]+$/),Y=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),$=m(/^(?:\w+script|data):/i),K=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),V=m(/^html$/i),X=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X(),o=function(e){return t(e)};if(o.version="2.3.8",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,s=n.HTMLTemplateElement,c=n.Node,m=n.Element,p=n.NodeFilter,f=n.NamedNodeMap,d=void 0===f?n.NamedNodeMap||n.MozNamedAttrMap:f,h=n.HTMLFormElement,g=n.DOMParser,x=n.trustedTypes,Z=m.prototype,J=C(Z,"cloneNode"),Q=C(Z,"nextSibling"),ee=C(Z,"childNodes"),te=C(Z,"parentNode");if("function"==typeof s){var ne=i.createElement("template");ne.content&&ne.content.ownerDocument&&(i=ne.content.ownerDocument)}var re=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}}(x,a),oe=re?re.createHTML(""):"",ae=i,ie=ae.implementation,le=ae.createNodeIterator,se=ae.createDocumentFragment,ce=ae.getElementsByTagName,ue=a.importNode,me={};try{me=S(i).documentMode?i.documentMode:{}}catch(e){}var pe={};o.isSupported="function"==typeof te&&ie&&void 0!==ie.createHTMLDocument&&9!==me;var fe,de,he=P,ge=G,ye=W,be=q,ve=$,Ee=K,Ne=Y,Te=null,we=O({},[].concat(r(D),r(L),r(R),r(I),r(B))),_e=null,Ae=O({},[].concat(r(H),r(U),r(z),r(j))),ke=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xe=null,Oe=null,Se=!0,Ce=!0,De=!1,Le=!1,Re=!1,Me=!1,Ie=!1,Fe=!1,Be=!1,He=!1,Ue=!0,ze=!0,je=!1,Pe={},Ge=null,We=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),qe=null,Ye=O({},["audio","video","img","source","image","track"]),$e=null,Ke=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Xe="http://www.w3.org/2000/svg",Ze="http://www.w3.org/1999/xhtml",Je=Ze,Qe=!1,et=["application/xhtml+xml","text/html"],tt=null,nt=i.createElement("form"),rt=function(e){return e instanceof RegExp||e instanceof Function},ot=function(t){tt&&tt===t||(t&&"object"===e(t)||(t={}),t=S(t),Te="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS):we,_e="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR):Ae,$e="ADD_URI_SAFE_ATTR"in t?O(S(Ke),t.ADD_URI_SAFE_ATTR):Ke,qe="ADD_DATA_URI_TAGS"in t?O(S(Ye),t.ADD_DATA_URI_TAGS):Ye,Ge="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS):We,xe="FORBID_TAGS"in t?O({},t.FORBID_TAGS):{},Oe="FORBID_ATTR"in t?O({},t.FORBID_ATTR):{},Pe="USE_PROFILES"in t&&t.USE_PROFILES,Se=!1!==t.ALLOW_ARIA_ATTR,Ce=!1!==t.ALLOW_DATA_ATTR,De=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Le=t.SAFE_FOR_TEMPLATES||!1,Re=t.WHOLE_DOCUMENT||!1,Fe=t.RETURN_DOM||!1,Be=t.RETURN_DOM_FRAGMENT||!1,He=t.RETURN_TRUSTED_TYPE||!1,Ie=t.FORCE_BODY||!1,Ue=!1!==t.SANITIZE_DOM,ze=!1!==t.KEEP_CONTENT,je=t.IN_PLACE||!1,Ne=t.ALLOWED_URI_REGEXP||Ne,Je=t.NAMESPACE||Ze,t.CUSTOM_ELEMENT_HANDLING&&rt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(ke.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&rt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(ke.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(ke.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),fe=fe=-1===et.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,de="application/xhtml+xml"===fe?function(e){return e}:E,Le&&(Ce=!1),Be&&(Fe=!0),Pe&&(Te=O({},r(B)),_e=[],!0===Pe.html&&(O(Te,D),O(_e,H)),!0===Pe.svg&&(O(Te,L),O(_e,U),O(_e,j)),!0===Pe.svgFilters&&(O(Te,R),O(_e,U),O(_e,j)),!0===Pe.mathMl&&(O(Te,I),O(_e,z),O(_e,j))),t.ADD_TAGS&&(Te===we&&(Te=S(Te)),O(Te,t.ADD_TAGS)),t.ADD_ATTR&&(_e===Ae&&(_e=S(_e)),O(_e,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&O($e,t.ADD_URI_SAFE_ATTR),t.FORBID_CONTENTS&&(Ge===We&&(Ge=S(Ge)),O(Ge,t.FORBID_CONTENTS)),ze&&(Te["#text"]=!0),Re&&O(Te,["html","head","body"]),Te.table&&(O(Te,["tbody"]),delete xe.tbody),u&&u(t),tt=t)},at=O({},["mi","mo","mn","ms","mtext"]),it=O({},["foreignobject","desc","title","annotation-xml"]),lt=O({},["title","style","font","a","script"]),st=O({},L);O(st,R),O(st,M);var ct=O({},I);O(ct,F);var ut=function(e){v(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=oe}catch(t){e.remove()}}},mt=function(e,t){try{v(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){v(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Fe||Be)try{ut(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},pt=function(e){var t,n;if(Ie)e="<remove></remove>"+e;else{var r=N(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===fe&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=re?re.createHTML(e):e;if(Je===Ze)try{t=(new g).parseFromString(o,fe)}catch(e){}if(!t||!t.documentElement){t=ie.createDocument(Je,"template",null);try{t.documentElement.innerHTML=Qe?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),Je===Ze?ce.call(t,Re?"html":"body")[0]:Re?t.documentElement:a},ft=function(e){return le.call(e.ownerDocument||e,e,p.SHOW_ELEMENT|p.SHOW_COMMENT|p.SHOW_TEXT,null,!1)},dt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},ht=function(e,t,n){pe[e]&&y(pe[e],(function(e){e.call(o,t,n,tt)}))},gt=function(e){var t,n;if(ht("beforeSanitizeElements",e,null),(n=e)instanceof h&&("string"!=typeof n.nodeName||"string"!=typeof n.textContent||"function"!=typeof n.removeChild||!(n.attributes instanceof d)||"function"!=typeof n.removeAttribute||"function"!=typeof n.setAttribute||"string"!=typeof n.namespaceURI||"function"!=typeof n.insertBefore))return ut(e),!0;if(A(/[\u0080-\uFFFF]/,e.nodeName))return ut(e),!0;var r=de(e.nodeName);if(ht("uponSanitizeElement",e,{tagName:r,allowedTags:Te}),e.hasChildNodes()&&!dt(e.firstElementChild)&&(!dt(e.content)||!dt(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return ut(e),!0;if("select"===r&&A(/<template/i,e.innerHTML))return ut(e),!0;if(!Te[r]||xe[r]){if(!xe[r]&&bt(r)){if(ke.tagNameCheck instanceof RegExp&&A(ke.tagNameCheck,r))return!1;if(ke.tagNameCheck instanceof Function&&ke.tagNameCheck(r))return!1}if(ze&&!Ge[r]){var a=te(e)||e.parentNode,i=ee(e)||e.childNodes;if(i&&a)for(var l=i.length-1;l>=0;--l)a.insertBefore(J(i[l],!0),Q(e))}return ut(e),!0}return e instanceof m&&!function(e){var t=te(e);t&&t.tagName||(t={namespaceURI:Ze,tagName:"template"});var n=E(e.tagName),r=E(t.tagName);return e.namespaceURI===Xe?t.namespaceURI===Ze?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||at[r]):Boolean(st[n]):e.namespaceURI===Ve?t.namespaceURI===Ze?"math"===n:t.namespaceURI===Xe?"math"===n&&it[r]:Boolean(ct[n]):e.namespaceURI===Ze&&!(t.namespaceURI===Xe&&!it[r])&&!(t.namespaceURI===Ve&&!at[r])&&!ct[n]&&(lt[n]||!st[n])}(e)?(ut(e),!0):"noscript"!==r&&"noembed"!==r||!A(/<\/no(script|embed)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=T(t,he," "),t=T(t,ge," "),e.textContent!==t&&(v(o.removed,{element:e.cloneNode()}),e.textContent=t)),ht("afterSanitizeElements",e,null),!1):(ut(e),!0)},yt=function(e,t,n){if(Ue&&("id"===t||"name"===t)&&(n in i||n in nt))return!1;if(Ce&&!Oe[t]&&A(ye,t));else if(Se&&A(be,t));else if(!_e[t]||Oe[t]){if(!(bt(e)&&(ke.tagNameCheck instanceof RegExp&&A(ke.tagNameCheck,e)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(e))&&(ke.attributeNameCheck instanceof RegExp&&A(ke.attributeNameCheck,t)||ke.attributeNameCheck instanceof Function&&ke.attributeNameCheck(t))||"is"===t&&ke.allowCustomizedBuiltInElements&&(ke.tagNameCheck instanceof RegExp&&A(ke.tagNameCheck,n)||ke.tagNameCheck instanceof Function&&ke.tagNameCheck(n))))return!1}else if($e[t]);else if(A(Ne,T(n,Ee,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!qe[e])if(De&&!A(ve,T(n,Ee,"")));else if(n)return!1;return!0},bt=function(e){return e.indexOf("-")>0},vt=function(e){var t,n,r,a;ht("beforeSanitizeAttributes",e,null);var i=e.attributes;if(i){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(a=i.length;a--;){var s=t=i[a],c=s.name,u=s.namespaceURI;if(n="value"===c?t.value:_(t.value),r=de(c),l.attrName=r,l.attrValue=n,l.keepAttr=!0,l.forceKeepAttr=void 0,ht("uponSanitizeAttribute",e,l),n=l.attrValue,!l.forceKeepAttr&&(mt(c,e),l.keepAttr))if(A(/\/>/i,n))mt(c,e);else{Le&&(n=T(n,he," "),n=T(n,ge," "));var m=de(e.nodeName);if(yt(m,r,n))try{u?e.setAttributeNS(u,c,n):e.setAttribute(c,n),b(o.removed)}catch(e){}}}ht("afterSanitizeAttributes",e,null)}},Et=function e(t){var n,r=ft(t);for(ht("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)ht("uponSanitizeShadowNode",n,null),gt(n)||(n.content instanceof l&&e(n.content),vt(n));ht("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t,r){var i,s,u,m,p;if((Qe=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!dt(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(dt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Me||ot(r),o.removed=[],"string"==typeof t&&(je=!1),je){if(t.nodeName){var f=de(t.nodeName);if(!Te[f]||xe[f])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof c)1===(s=(i=pt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?i=s:i.appendChild(s);else{if(!Fe&&!Le&&!Re&&-1===t.indexOf("<"))return re&&He?re.createHTML(t):t;if(!(i=pt(t)))return Fe?null:He?oe:""}i&&Ie&&ut(i.firstChild);for(var d=ft(je?t:i);u=d.nextNode();)3===u.nodeType&&u===m||gt(u)||(u.content instanceof l&&Et(u.content),vt(u),m=u);if(m=null,je)return t;if(Fe){if(Be)for(p=se.call(i.ownerDocument);i.firstChild;)p.appendChild(i.firstChild);else p=i;return _e.shadowroot&&(p=ue.call(a,p,!0)),p}var h=Re?i.outerHTML:i.innerHTML;return Re&&Te["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&A(V,i.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+i.ownerDocument.doctype.name+">\n"+h),Le&&(h=T(h,he," "),h=T(h,ge," ")),re&&He?re.createHTML(h):h},o.setConfig=function(e){ot(e),Me=!0},o.clearConfig=function(){tt=null,Me=!1},o.isValidAttribute=function(e,t,n){tt||ot({});var r=de(e),o=de(t);return yt(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],v(pe[e],t))},o.removeHook=function(e){if(pe[e])return b(pe[e])},o.removeHooks=function(e){pe[e]&&(pe[e]=[])},o.removeAllHooks=function(){pe={}},o}()}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],l=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1333:0,4148:0,4649:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,l,s]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis.webpackChunksensei_pro=globalThis.webpackChunksensei_pro||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[4148,4649],(()=>r(7351)));o=r.O(o)})();