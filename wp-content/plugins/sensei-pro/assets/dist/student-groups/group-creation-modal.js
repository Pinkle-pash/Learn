(()=>{"use strict";var e,r={5524:(e,r,n)=>{const t=window.wp.element,o=window.wp.components,a=window.wp.i18n,s=window.wp.domReady;var i=n.n(s);const l=window.wp.apiFetch;var u=n.n(l);const p=async e=>u()({path:"/sensei-pro-student-groups/v1/groups",method:"POST",data:{name:e}}),c=e=>{let{onClose:r}=e;const[n,s]=(0,t.useState)(!1),[i,l]=(0,t.useState)(""),{run:u,isLoading:c,error:d,response:m,hasError:g}=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const[n,o]=(0,t.useState)({status:"IDLE",response:null,error:null}),a=(0,t.useCallback)((async function(){o({status:"LOADING",response:null});try{const r=await e(...arguments);return o({status:"IDLE",response:r,error:null}),r}catch(e){o({status:"IDLE",response:null,error:e})}}),[e,...r]);return{isLoading:"LOADING"===n.status,run:a,response:n.response,hasError:null!==n.error,error:n.error}}(p),v=e=>{s(!1),r&&r(e)},h=(0,t.useCallback)((()=>{s(!0)}),[s]);return m&&!g&&v(!0),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.Button,{onClick:h,variant:"secondary"},(0,a.__)("New Group","sensei-pro")),n&&(0,t.createElement)(o.Modal,{className:"sensei-group-creation-modal",title:(0,a.__)("Create A New Group","sensei-pro"),onRequestClose:()=>v()},d&&(0,t.createElement)(o.Notice,{status:"error",isDismissible:!1,className:"sensei-group-creation-modal__notice"},d?.message||(0,a.__)("Something went wrong. Please try again.","sensei-pro")),(0,t.createElement)("div",{className:"sensei-group-creation-modal_description"},(0,a.__)("Give the new group a name. Keep it short and make it unique to help you identify it in the future. You can edit the group name later.","sensei-pro")),(0,t.createElement)("div",{className:"sensei-group-creation-modal_input-container"},(0,t.createElement)("label",{htmlFor:"group-name"},(0,a.__)("Group Name","sensei-pro")),(0,t.createElement)("input",{type:"text",placeholder:(0,a.__)("Enter your group name","sensei-pro"),value:i,onChange:e=>{return r=e.target.value,l(r);var r},id:"group-name"})),(0,t.createElement)("div",{className:"sensei-group-creation-modal_action"},(0,t.createElement)(o.Button,{variant:"primary",disabled:!i||c,onClick:()=>u(i)},c&&(0,t.createElement)(o.Spinner,null),(0,a.__)("Create Group","sensei-pro")))))};i()((()=>{const e=document.getElementById("group-add-button");e&&(0,t.render)((0,t.createElement)(c,{onClose:e=>e&&window.location.reload()}),e)}))}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,e=[],t.O=(r,n,o,a)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((e=>t.O[e](n[l])))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(p--,1);var u=o();void 0!==u&&(r=u)}}return r}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={909:0,405:0};t.O.j=r=>0===e[r];var r=(r,n)=>{var o,a,[s,i,l]=n,u=0;if(s.some((r=>0!==e[r]))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(l)var p=l(t)}for(r&&r(n);u<s.length;u++)a=s[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(p)},n=globalThis.webpackChunksensei_pro=globalThis.webpackChunksensei_pro||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var o=t.O(void 0,[405],(()=>t(5524)));o=t.O(o)})();