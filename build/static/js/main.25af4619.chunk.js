(window.webpackJsonpabiola_onabanji_reacte_m2_ccn=window.webpackJsonpabiola_onabanji_reacte_m2_ccn||[]).push([[0],{200:function(e,t,n){e.exports=n(437)},205:function(e,t,n){},237:function(e,t){},239:function(e,t){},271:function(e,t){},272:function(e,t){},316:function(e,t){},318:function(e,t){},341:function(e,t){},436:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(72),o=n.n(c),i=n(191),l=n(35),u=function(){return a.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},a.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"},"Integration Weekend"))},s=n(197),p=n(45),m=n(188),d=n(189),f=n(198),h=n(190),v=n(199),b=function(e){var t=e.product,n=e.name,r=e.price,c=e.onChange,o=e.onSubmit;return a.a.createElement("div",{className:"row justify-content-center"},a.a.createElement("form",{className:"form-inline",onSubmit:o},a.a.createElement("input",{type:"text",className:"form-control mb-2 mr-sm-2",placeholder:"Where?",value:t,name:"product",onChange:c}),a.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},a.a.createElement("input",{type:"text",className:"form-control",placeholder:"Who?",value:n,name:"name",onChange:c})),a.a.createElement("div",{className:"input-group mb-2 mr-sm-2"},a.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u20ac\u20ac\u20ac",value:r,name:"price",onChange:c})),a.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2 pxy-4"},a.a.createElement("i",{className:"fas fa-plus-square"}))))},y=function(e){var t=e.item;return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"box"},a.a.createElement("span",null,a.a.createElement("b",{style:{color:"blue"}},t.product)),a.a.createElement("span",null,t.name),a.a.createElement("span",null,a.a.createElement("b",{style:{color:"blue"}},t.price,"\u20ac"))))))},g=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={product:"",name:"",price:"",filterItemId:void 0,items:[{id:1,product:"Winter body",name:"test1",price:110},{id:2,product:"Adidas",name:"test2",price:80},{id:3,product:"Vans",name:"test3",price:120},{id:4,product:"White",name:"test4",price:260},{id:5,product:"Cropped-sho",name:"test5",price:160},{id:6,product:"Blues",name:"test6",price:90}]},n.handleInputChange=function(e){var t=e.target,r=t.value,a=t.name;n.setState(Object(p.a)({},a,r))},n.addItem=function(e){e.preventDefault();var t=n.state,r=t.product,a=t.name,c=t.price,o=n.state.items,i=o.length,l=i?o[i-1].id+1:1;n.setState({items:[].concat(Object(s.a)(o),[{id:l,product:r,name:a,price:c}]),product:"",name:"",price:""})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.product,r=t.name,c=t.price;return a.a.createElement("div",{className:"container"},a.a.createElement("div",null,a.a.createElement("select",{value:this.state.filterItemId,name:"filterItemId",onChange:this.handleInputChange},a.a.createElement("option",{value:""},"** All"),this.state.items.map((function(e){return a.a.createElement("option",{key:e.id},e.product)})))),a.a.createElement("h1",{className:"center"},"Buyers and their products"),a.a.createElement("div",{className:"row"},this.state.items.filter((function(t){return!e.state.filterItemId||t.product.toLowerCase().includes(e.state.filterItemId.toLowerCase())})).map((function(e){return a.a.createElement(y,{key:e.id,item:e})}))),a.a.createElement("div",{className:"card"},a.a.createElement(b,{product:n,name:r,price:c,onChange:this.handleInputChange,onSubmit:this.addItem})),a.a.createElement("div",null,a.a.createElement("b",{style:{color:"black"}},"Total Expenses:",this.state.items.reduce((function(e,t){return e+parseInt(t.price)}),0),"\u20ac ")))}}]),t}(r.Component);n(205);var E=function(){return a.a.createElement(i.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null),a.a.createElement("div",{className:"container"},a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:g})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(196),j=n(39),w=n(194),I=n(195),N="RENAME_LIST",C="FILTER_BY_PRODUCT";function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Integration Weekend",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.title;default:return e}}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return t.product;default:return e}}function _(e){return Object(j.c)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:S,product:k},e))}var x=n(108),D=n.n(x),R="http://localhost:3000/api/";function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return D()({uri:R+e,qs:t,json:!0}).catch((function(e){return console.log(e)}))}var T=function(){return W("users")},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return W("costs",{paidBy:e})};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=Object(j.a)(I.a,Object(w.createLogger)());function H(e,t,n){e.asyncReducers[t]=n.reducer,e.replaceReducer(_(e.asyncReducers)),e.dispatch(n.dispatcher)}function q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pending:!1,fetched:!1,error:null,value:n},r=arguments.length>1?arguments[1]:void 0;return r.type.substring(0,e.length)!==e?t:({start:function(){return A({},t,{pending:!0})},error:function(){return e=t,n=r.payload,A({},e,{pending:!1,error:n});var e,n},fulfilled:function(){return e=t,n=r.payload,A({},e,{pending:!1,fetched:!0,value:n});var e,n}}[r.type.substring(r.type.lastIndexOf(".")+1)]||function(){return t})()},dispatcher:function(n){n({type:e+".start"}),t.then((function(t){return n({type:e+".fulfilled",payload:t})})).catch((function(t){return n({type:e+".error",payload:t})}))}}}n(436);var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={users:q("FETCH_USERS",T(),[]),costs:q("FETCH_COSTS",B(),[])},n=Object(j.d)(_(),e,F);for(var r in n.asyncReducers={},n.update=function(){for(var e in t)n.dispatch(e.dispatcher)},t)H(n,r,t[r]);return n}();J.updateStore=function(){var e=!0,t=!1,n=void 0;try{for(var r,a=J.asyncHandlers[Symbol.iterator]();!(e=(r=a.next()).done);e=!0){var c=r.value;J.dispatch(c.dispatch)}}catch(o){t=!0,n=o}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}},o.a.render(a.a.createElement(O.a,{store:J},a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[200,1,2]]]);
//# sourceMappingURL=main.25af4619.chunk.js.map