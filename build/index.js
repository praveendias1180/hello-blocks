(()=>{"use strict";var e,o={227:()=>{const e=window.wp.blocks,o=window.wp.element,r=window.wp.i18n,l=window.wp.blockEditor,t=JSON.parse('{"u2":"create-block/hello-blocks"}');(0,e.registerBlockType)(t.u2,{edit:function(){return(0,o.createElement)("p",(0,l.useBlockProps)(),(0,r.__)("Hello Blocks – hello from the editor!","hello-blocks"))},save:function(){return(0,o.createElement)("p",l.useBlockProps.save(),"Hello Blocks – hello from the saved content!")}})}},r={};function l(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,l),n.exports}l.m=o,e=[],l.O=(o,r,t,n)=>{if(!r){var s=1/0;for(p=0;p<e.length;p++){for(var[r,t,n]=e[p],c=!0,i=0;i<r.length;i++)(!1&n||s>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(c=!1,n<s&&(s=n));if(c){e.splice(p--,1);var a=t();void 0!==a&&(o=a)}}return o}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,t,n]},l.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={826:0,431:0};l.O.j=o=>0===e[o];var o=(o,r)=>{var t,n,[s,c,i]=r,a=0;if(s.some((o=>0!==e[o]))){for(t in c)l.o(c,t)&&(l.m[t]=c[t]);if(i)var p=i(l)}for(o&&o(r);a<s.length;a++)n=s[a],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},r=globalThis.webpackChunkhello_blocks=globalThis.webpackChunkhello_blocks||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var t=l.O(void 0,[431],(()=>l(227)));t=l.O(t)})();