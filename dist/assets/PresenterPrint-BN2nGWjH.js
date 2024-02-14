import{d as _,u as d,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as o,g as l,F as f,h as g,n as v,i as x,j as b,k as y,l as k,m as N,_ as w}from"./index-vOX5POvt.js";import{N as P}from"./NoteDisplay-BUXAMZyO.js";const V={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(a(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",D,[t("h1",L,o(l(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,o(e==null?void 0:e.no)+"/"+o(l(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/aris/Documents/web/presentasi/1/skripsi/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
