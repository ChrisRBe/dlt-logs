(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return v})),a.d(t,"metadata",(function(){return g})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return j}));var n=a(2),l=a(6),s=a(0),i=a.n(s),o=a(89),r=a(101),c=a(87),d=a(66),u=a.n(d);const b=37,m=39;var p=function(e){const{block:t,children:a,defaultValue:n,values:l,groupId:o}=e,{tabGroupChoices:d,setTabGroupChoices:p}=Object(r.a)(),[f,v]=Object(s.useState)(n),[g,h]=Object(s.useState)(!1);if(null!=o){const e=d[o];null!=e&&e!==f&&l.some((t=>t.value===e))&&v(e)}const O=e=>{v(e),null!=o&&p(o,e)},j=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},T=()=>{h(!1)};return Object(s.useEffect)((()=>{window.addEventListener("keydown",w),window.addEventListener("mousedown",T)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},l.map((({value:e,label:t})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),w(e)},onFocus:()=>O(e),onClick:()=>{O(e),h(!1)},onPointerDown:()=>h(!1)},t)))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},s.Children.toArray(a).filter((e=>e.props.value===f))[0]))};var f=function(e){return i.a.createElement("div",null,e.children)},v={id:"installFirstUse",title:"Installation and first use",sidebar_label:"Install and first use",slug:"/"},g={unversionedId:"installFirstUse",id:"installFirstUse",isDocsHomePage:!1,title:"Installation and first use",description:"DLT-Logs is a Visual Studio Code(tm) extension available at the marketplace: Version.",source:"@site/docs/installFirstUse.md",slug:"/",permalink:"/dlt-logs/docs/",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/installFirstUse.md",version:"current",sidebar_label:"Install and first use",sidebar:"someSidebar",next:{title:"dlt-logs settings reference",permalink:"/dlt-logs/docs/genericSettings"}},h=[],O={rightToc:h};function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"DLT-Logs is a Visual Studio Code(tm) extension available at the marketplace: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=mbehr1.dlt-logs"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://vsmarketplacebadge.apphb.com/version/mbehr1.dlt-logs.svg",alt:"Version"}))),"."),Object(o.b)("h1",{id:"install"},"Install"),Object(o.b)("p",null,'Install it like any other extension for Visual Studio Code, e.g. via command "Extensions: Install Extensions" and then enter DLT-Logs and click "Install".'),Object(o.b)("p",null,"(todo add picture)"),Object(o.b)("h1",{id:"first-use"},"First use"),Object(o.b)("p",null,"After installation you can open DLT files via"),Object(o.b)(p,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(o.b)(f,{value:"win",mdxType:"TabItem"},'Use F1 and enter/select command "Open DLT file...".'),Object(o.b)(f,{value:"mac",mdxType:"TabItem"},'Use Cmd+P and enter/select command "Open DLT file...".'),Object(o.b)(f,{value:"linux",mdxType:"TabItem"},'Use Ctrl+P and enter/select command "Open DLT file...".')),"and select the DLT file to open from the opened file selection dialog.")}j.isMDXComponent=!0}}]);