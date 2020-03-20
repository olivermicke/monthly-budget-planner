(this["webpackJsonpmonthly-budget-planner"]=this["webpackJsonpmonthly-budget-planner"]||[]).push([[0],{121:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n,r,c,l,i=t(0),o=t.n(i),u=t(48),s=t.n(u),m=t(55),d=t(27),b=t(84),f=t(43),E=t(36),y=t(18),g=t(135),h=t(4),j=t(136),O=t(125),p=function(){return o.a.createElement("menu",{style:{margin:"0 0 3rem",padding:0}},o.a.createElement(O.a,{as:"h1",fontSize:["xl","xl","2xl","3xl"]},"Monthly Budget Planner"))},v=t(44),x=t(137),D=t(60),w=t(127),F=t(132),N=t(133),k=t(77),C=t(129),S=t(24),T=t(73),z=t(54),A=t(126),B=t(74),M=function(e,a){return e.some((function(e){var t=e.dueDayNumber,n=e.type;return t&&n===a}))},R=function(e){var a=e.transactions,t=M(a,"incoming"),n=M(a,"outgoing");return o.a.createElement(h.a,{display:"flex",position:"absolute",right:"25%"},t&&o.a.createElement(z.a,{color:"transaction.incoming"},"|"),n&&o.a.createElement(z.a,{color:"transaction.outgoing"},"|"))},I=t(32),L=t(52),J=t(34),P=t(58),$=function(e,a){var t=a.action,n=a.shouldReset,r=a.transactions,c=e.config.firstDayNumber;return Object(P.a)(e.days,(function(e){n&&Object.values(e).forEach((function(e){e.balance=0})),Object.values(r).forEach((function(a){var n,r,l,i=a.amount,o=a.dueDayNumber,u=a.isDistributedDaily,s=a.type,m=(r=o,1===(n=c)?Object(x.a)(null!==r&&void 0!==r?r:1,32):null===r?[].concat(Object(v.a)(Object(x.a)(n,32)),Object(v.a)(Object(x.a)(1,n))):r<n?Object(x.a)(r,n):[].concat(Object(v.a)(Object(x.a)(r,32)),Object(v.a)(Object(x.a)(1,n)))),d="incoming"===s?i:-Math.abs(i),b="added"===t?d:(l=d,Math.sign(l)>0?-Math.abs(l):Math.abs(l));if(u){var f=+(b/31).toFixed(2);m.forEach((function(a,t){e[a].balance+=f*(t+1)}))}else m.forEach((function(a){e[a].balance+=b}))}))}))},H=t(29),U={config:{firstDayNumber:1},days:Object(x.a)(1,32).reduce((function(e,a){return Object(L.a)({},e,Object(I.a)({},a,{balance:0,number:a}))}),{})},W=Object(J.b)({name:"calendar",initialState:U,reducers:{changedFirstDayNumber:function(e,a){var t=a.payload,n=t.nextFirstDayNumber,r=t.transactions;e.config.firstDayNumber=n;var c=$(e,{action:"added",shouldReset:!0,transactions:r});e.days=c}},extraReducers:(n={},Object(I.a)(n,H.h.actions.addTransaction.type,(function(e,a){var t=a.payload,n=$(e,{action:"added",shouldReset:!1,transactions:Object(I.a)({},t.name,t)});e.days=n})),Object(I.a)(n,H.h.actions.deleteTransaction.type,(function(e,a){var t=a.payload,n=$(e,{action:"deleted",shouldReset:!1,transactions:Object(I.a)({},t.name,t)});e.days=n})),n)}),V=function(e){return function(a,t){a(W.actions.changedFirstDayNumber({nextFirstDayNumber:e,transactions:t().transactions.transactions}))}},Y=function(e){return e.calendar.config.firstDayNumber},q=W.reducer,G=Object(k.a)((function(e,a){return e.calendar.days[a]}),(function(e){return e})),K=Object(k.a)(H.g,(function(e){return e})),Q=function(e){var a=e.dayNumber,t=Object(d.c)((function(e){return G(e,a)})),n=t.balance,r=t.number,c=Object(d.c)((function(e){return K(e,a)})),l=Object(d.c)(H.e);return o.a.createElement(C.a,null,o.a.createElement(C.g,null,o.a.createElement(S.a,{height:"100%",key:r,minHeight:32,width:"100%"},o.a.createElement(T.a,{bg:"transparent",height:"100%",width:"100%"},r,o.a.createElement(R,{transactions:c})))),o.a.createElement(C.e,{minWidth:"20rem",zIndex:4},o.a.createElement(C.b,null),o.a.createElement(C.d,null),o.a.createElement(C.f,{fontSize:"lg"},"Day ",r),o.a.createElement(C.c,null,o.a.createElement(z.a,null,"Balance:"," ",o.a.createElement(z.a,{as:"b",color:n>=0?"transaction.incoming":"transaction.outgoing"},n.toFixed(2),l.symbol)),c.length>0&&o.a.createElement(A.a,null),c.map((function(e){return o.a.createElement(B.a,Object.assign({key:e.name},e))})))))},X=function(){var e=Object(d.c)(Y),a=Object(d.b)(),t=function(e){return[].concat(Object(v.a)(Object(x.a)(e,32)),Object(v.a)(Object(x.a)(1,e)))}(e);return o.a.createElement(h.a,{margin:"0 0 3rem"},o.a.createElement(h.a,{display:"flex",flexDirection:["row"]},o.a.createElement(D.a,{alignItems:"center",display:"flex",margin:"0 0 2rem"},o.a.createElement(w.a,{htmlFor:"first-day-select",whiteSpace:"nowrap"},"First day of month:"),o.a.createElement(F.a,{id:"first-day-select",onChange:function(e){var t=+e.target.value;isNaN(t)||a(V(t))},value:e},Object(x.a)(1,32).map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))))),o.a.createElement(N.a,{columns:[3,3,7]},t.map((function(e){return o.a.createElement(Q,{dayNumber:e,key:e})}))))},Z=t(134),_=t(93),ee=function(){return getComputedStyle(document.querySelector("body"))["font-size"]},ae=o.a.lazy((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,139)).then((function(e){return{default:e.TransactionForm}}))})),te=o.a.lazy((function(){return t.e(5).then(t.bind(null,143)).then((function(e){return{default:e.TransactionsList}}))})),ne=function(){var e=function(e){return e/parseFloat(ee())}(Object(_.a)(0,{leading:!0,wait:250}))<=62;return o.a.createElement(i.Suspense,{fallback:null},e?o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{allowMultiple:!0,allowToggle:!0},o.a.createElement(Z.d,null,o.a.createElement(Z.b,null,o.a.createElement(h.a,{flex:"1",textAlign:"left"},"Add transaction"),o.a.createElement(Z.c,null)),o.a.createElement(Z.e,null,o.a.createElement(ae,null))),o.a.createElement(Z.d,null,o.a.createElement(Z.b,null,o.a.createElement(h.a,{flex:"1",textAlign:"left"},"List of transactions"),o.a.createElement(Z.c,null)),o.a.createElement(Z.e,null,o.a.createElement(te,null))))):o.a.createElement(h.a,{display:"flex",marginBottom:"2rem"},o.a.createElement(h.a,{width:"50%",paddingRight:"6rem"},o.a.createElement(ae,null)),o.a.createElement(A.a,{orientation:"vertical"}),o.a.createElement(h.a,{width:"50%",paddingLeft:"6rem"},o.a.createElement(te,null))))},re=t(130),ce=t(131),le=t(128),ie=re.a.colors.cyan[500],oe=Object(ce.a)(re.a,{colors:{tealVariant:(r=100,c=100,l=900,Object(le.a)((function(e){return r+c*e}),Object(x.a)(0,1+(l-r)/c>>>0))).reduce((function(e,a){return Object(L.a)({},e,Object(I.a)({},a,ie))}),{}),transaction:{incoming:re.a.colors.green[500],outgoing:re.a.colors.red[500]}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=t(21),se=t(39),me=t(92),de=t.n(me),be=Object(ue.combineReducers)({calendar:q,transactions:H.d}),fe={key:"root",storage:de.a},Ee=Object(se.g)(fe,be),ye=Object(J.a)({reducer:Ee,middleware:Object(J.c)({serializableCheck:{ignoredActions:[se.a,se.f,se.b,se.c,se.d,se.e]}})}),ge=Object(se.h)(ye);t(121);s.a.render(o.a.createElement(i.StrictMode,null,o.a.createElement(m.a,null,o.a.createElement(d.a,{store:ye},o.a.createElement(b.a,{loading:null,persistor:ge},o.a.createElement((function(){var e=Object(f.g)().pathname;return o.a.createElement(E.a,{theme:oe},o.a.createElement(y.a,null,o.a.createElement(g.a,null),o.a.createElement(h.a,{minHeight:"inherit",padding:"2rem"},o.a.createElement(h.a,{display:"flex",flexDirection:"column",margin:"0 auto",width:["100%","90%","90%","80%","70%"]},o.a.createElement(p,null),o.a.createElement(j.e,{variant:"enclosed",variantColor:"tealVariant"},o.a.createElement(j.c,{id:"tabs"},o.a.createElement(j.a,{"aria-controls":"tabs","aria-selected":"/calendar"===e,as:m.b,id:"tabs-calendar-tab",tabIndex:0,to:"/calendar"},"Calendar"),o.a.createElement(j.a,{"aria-controls":"tabs","aria-selected":"/transactions"===e,as:m.b,id:"tabs-transactions-tab",tabIndex:0,to:"/transactions"},"Transactions")),o.a.createElement(j.d,{marginTop:"2rem"},o.a.createElement(f.d,null,o.a.createElement(f.b,{exact:!0,path:"/calendar"},o.a.createElement(X,null)),o.a.createElement(f.b,{exact:!0,path:"/transactions"},o.a.createElement(ne,null)),o.a.createElement(f.a,{from:"/",to:"/calendar"}))))))))}),null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,a,t){"use strict";t.d(a,"h",(function(){return i})),t.d(a,"e",(function(){return o})),t.d(a,"f",(function(){return u})),t.d(a,"g",(function(){return s})),t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b})),t.d(a,"c",(function(){return f})),t.d(a,"d",(function(){return E}));var n=t(52),r=t(63),c=t(34),l=t(75),i=Object(c.b)({name:"transactions",initialState:{config:{currency:{name:"Euro",symbol:"\u20ac"}},transactions:{}},reducers:{addTransaction:function(e,a){var t=a.payload,c=t.name,l=Object(r.a)(t,["name"]);e.transactions[c]=Object(n.a)({name:c},l)},changeCurrency:function(e,a){e.config.currency=l.a[a.payload]},deleteTransaction:function(e,a){delete e.transactions[a.payload.name]}}}),o=function(e){return e.transactions.config.currency},u=function(e){return e.transactions.transactions},s=function(e,a){return Object.values(e.transactions.transactions).filter((function(e){var t=e.dueDayNumber;return e.isDistributedDaily||t===a}))},m=i.actions,d=m.addTransaction,b=m.changeCurrency,f=m.deleteTransaction,E=i.reducer},74:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(63),r=t(0),c=t.n(r),l=t(27),i=t(56),o=t(54),u=t(123),s=t(29),m=function(e){var a=e.isDeletable,t=Object(n.a)(e,["isDeletable"]),m=Object(l.b)(),d=Object(l.c)(s.e),b=Object(r.useCallback)((function(){m(Object(s.c)(t))}),[m,t]),f=t.amount,E=t.dueDayNumber,y=t.isDistributedDaily,g=t.name,h=t.type;return c.a.createElement(i.a,null,c.a.createElement(i.d,null,c.a.createElement(o.a,{as:"span"},g,c.a.createElement(o.a,{as:"span",color:"gray.400",marginLeft:1},E?"[day ".concat(E,"]"):"[daily]"),a&&c.a.createElement(u.a,{"aria-label":"delete transaction",bottom:"1px",icon:"delete",marginLeft:2,onClick:b,size:"xs",variant:"ghost",color:"gray.400"}))),c.a.createElement(i.c,{alignItems:"center",display:"flex"},c.a.createElement(i.b,{type:"incoming"===h?"increase":"decrease"}),c.a.createElement(i.e,{as:"span"},y?(f/31).toFixed(2):f.toFixed(2),d.symbol)))}},75:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={"Australian Dollar":{name:"Australian Dollar",symbol:"AU$"},"British Pound":{name:"British Pound",symbol:"\xa3"},"Canadian Dollar":{name:"Canadian Dollar",symbol:"CA$"},Euro:{name:"Euro",symbol:"\u20ac"},"Japanese Yen":{name:"Japanese Yen",symbol:"\xa5"},"Swiss Franc":{name:"Swiss Franc",symbol:"CHF"},"US Dollar":{name:"US Dollar",symbol:"$"}}},94:function(e,a,t){e.exports=t(122)}},[[94,1,2]]]);
//# sourceMappingURL=main.62147d85.chunk.js.map