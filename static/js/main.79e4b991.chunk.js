(this["webpackJsonplearn-redux"]=this["webpackJsonplearn-redux"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),l=n.n(c),o=(n(14),n(15),n(2)),u=function(e){return{type:"CUSTOM",payload:e}};var i=function(){var e=Object(o.c)((function(e){return e.counter})),t=Object(o.c)((function(e){return e.isLogged})),n=Object(o.b)();return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Hello Redux"),a.a.createElement("h3",null,"Counter ",e),a.a.createElement("button",{onClick:function(){return n(u(-50))}},"-50"),a.a.createElement("button",{onClick:function(){return n({type:"DECREMENT"})}},"-"),a.a.createElement("button",{onClick:function(){return n({type:"INCREMENT"})}},"+"),a.a.createElement("button",{onClick:function(){return n(u(50))}},"+50"),a.a.createElement("h3",null,"Secret Information:"),t?a.a.createElement("h3",null,"Revealed!",a.a.createElement("span",{role:"img","aria-label":"Opened Lock"},"\ud83d\udd13")):a.a.createElement("span",{role:"img","aria-label":"Closed Lock"},"\ud83d\udd12"))},E=n(1),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;case"CUSTOM":return e+t.payload;default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!e;default:return e}},m=Object(E.b)({counter:d,isLogged:s}),p=Object(E.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:p},a.a.createElement(i,null))),document.getElementById("root"))},9:function(e,t,n){e.exports=n(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.79e4b991.chunk.js.map