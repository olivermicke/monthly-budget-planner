(this["webpackJsonpmonthly-budget-planner"]=this["webpackJsonpmonthly-budget-planner"]||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"TransactionForm",(function(){return O}));var n=a(81),r=a(0),i=a.n(r),c=a(27),o=a(137),l=a(4),m=a(125),u=a(60),s=a(127),b=a(82),d=a(132),g=a(141),p=a(140),E=a(142),h=a(73),v=a(29),y={marginTop:["1rem","1rem","2rem"]},O=function(){var e=Object(c.c)(v.e),t=Object(c.b)(),a=Object(r.useState)(""),O=Object(n.a)(a,2),j=O[0],f=O[1],k=Object(r.useState)(10),x=Object(n.a)(k,2),C=x[0],F=x[1],S=Object(r.useState)(1),D=Object(n.a)(S,2),N=D[0],w=D[1],A=Object(r.useState)(!1),T=Object(n.a)(A,2),R=T[0],B=T[1],I=Object(r.useState)("outgoing"),J=Object(n.a)(I,2),M=J[0],V=J[1];return i.a.createElement(l.a,{marginBottom:["2rem","2rem",0]},i.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=+C.toFixed(2);t(Object(v.a)({amount:"incoming"===M?a:-Math.abs(a),dueDayNumber:R?null:N,isDistributedDaily:R,name:j,type:M})),F(10),w(1),B(!1),f(""),V("outgoing")}},i.a.createElement(m.a,{as:"h3",display:["none","none","block"],size:"md"},"Add transaction"),i.a.createElement(u.a,y,i.a.createElement(s.a,{htmlFor:"transaction-name-input"},"Name:"),i.a.createElement(b.a,{id:"transaction-name-input",isRequired:!0,onChange:function(e){var t=e.target;f(t.value)},placeholder:'e.g. "Electricity Bill"',type:"text",value:j})),i.a.createElement(u.a,y,i.a.createElement(s.a,{htmlFor:"transaction-type-select"},"Type:"),i.a.createElement(d.a,{id:"transaction-type-select",onChange:function(e){var t=e.target;V(t.value)},value:M},i.a.createElement("option",{value:"incoming"},"Incoming"),i.a.createElement("option",{value:"outgoing"},"Outgoing"))),i.a.createElement(u.a,y,i.a.createElement(s.a,{htmlFor:"transaction-amount-input"},"Amount in ",e.symbol,":"),i.a.createElement(l.a,{display:"flex"},i.a.createElement(g.a,{flex:1,marginRight:"2rem",max:Number.MAX_SAFE_INTEGER,min:.01,onChange:function(e){F(e)},value:C},i.a.createElement(g.b,{id:"transaction-amount-input"})),i.a.createElement(p.a,{whiteSpace:"nowrap"},"e.g. 119.99"))),i.a.createElement(u.a,y,i.a.createElement(s.a,{htmlFor:"transaction-due-day-select"},"Due on day:"),i.a.createElement(d.a,{id:"transaction-due-day-select",isDisabled:R,onChange:function(e){var t=+e.target.value;isNaN(t)||w(t)},value:N},Object(o.a)(1,32).map((function(e){return i.a.createElement("option",{key:e,value:e},e)})))),i.a.createElement(u.a,Object.assign({display:"flex"},y),i.a.createElement(s.a,{htmlFor:"transaction-distribution-checkbox"},"Distribute over whole month:"),i.a.createElement(E.a,{id:"transaction-distribution-checkbox",isChecked:R,onChange:function(e){var t=e.target;B(t.checked)},variantColor:"tealVariant"})),i.a.createElement(h.a,Object.assign({type:"submit",variant:"outline",variantColor:"tealVariant"},y),"Add")))}}}]);
//# sourceMappingURL=4.f911fafa.chunk.js.map