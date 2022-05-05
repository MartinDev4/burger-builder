webpackJsonp([1],{170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n.n(a),o=n(11),i=n(3),c=n(179),l=n(182),u=n(24),d=function(e){var t=function(){e.history.goBack()},n=function(){e.history.replace("/checkout/contact-data")},a=r.a.createElement(o.c,{to:"/"});if(e.ings){var i=e.purchased?r.a.createElement(o.c,{to:"/"}):null;a=r.a.createElement("div",{style:e.darkTheme?{backgroundColor:"#393b39"}:{backgroundColor:"#fff"}},r.a.createElement(u.a,null),i,r.a.createElement(c.a,{ingredients:e.ings,checkoutCancelled:t,checkoutContinued:n}),r.a.createElement(o.d,{path:e.match.path+"/contact-data",component:l.a}))}return a},s=function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased,darkTheme:e.burgerBuilder.darkTheme}};t.default=Object(i.b)(s)(d)},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(174),i=n.n(o),c=function(e){var t=null,n=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t)};t.a=c},174:function(e,t,n){var a=n(175);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(169)(a,r);a.locals&&(e.exports=a.locals)},175:function(e,t,n){t=e.exports=n(168)(!0),t.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/Users/Martin/Desktop/Projects/burger-builder/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\r\n    width: 100%;\r\n    padding: 10px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    background-color: white;\r\n    font: inherit;\r\n    padding: 6px 10px;\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n    outline: none;\r\n    background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n    border: 1px solid red;\r\n    background-color: #FDA49A;\r\n}"],sourceRoot:""}]),t.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},179:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(55),i=n(51),c=n(180),l=n.n(c),u=function(e){return r.a.createElement("div",{className:l.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(o.a,{ingredients:e.ingredients})),r.a.createElement(i.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),r.a.createElement(i.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))};t.a=u},180:function(e,t,n){var a=n(181);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(169)(a,r);a.locals&&(e.exports=a.locals)},181:function(e,t,n){t=e.exports=n(168)(!0),t.push([e.i,".CheckoutSummary__CheckoutSummary__-avOx{text-align:center;width:80%;margin:auto}","",{version:3,sources:["C:/Users/Martin/Desktop/Projects/burger-builder/src/components/Order/CheckoutSummary/CheckoutSummary.css"],names:[],mappings:"AAAA,yCACE,kBAAmB,AACnB,UAAW,AACX,WAAa,CACd",file:"CheckoutSummary.css",sourcesContent:[".CheckoutSummary {\r\n  text-align: center;\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n"],sourceRoot:""}]),t.locals={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},182:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n(0),o=n.n(r),i=n(3),c=n(51),l=n(52),u=n(183),d=n.n(u),s=n(13),A=n(173),p=n(54),m=n(10),b=n(14),g=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C=function(e){var t=Object(r.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}}),n=g(t,2),i=n[0],u=n[1],s=Object(r.useState)(!1),p=g(s,2),m=p[0],C=p[1],h=function(t){t.preventDefault();var n={};for(var a in i)n[a]=i[a].value;var r={ingredients:e.ings,price:e.price,orderData:n,userId:e.userId};e.onOrderBurger(r,e.token)},f=function(e,t){var n=Object(b.b)(i[t],{value:e.target.value,valid:Object(b.a)(e.target.value,i[t].validation),touched:!0}),r=Object(b.b)(i,a({},t,n)),o=!0;for(var c in r)o=r[c].valid&&o;u(r),C(o)},v=[];for(var k in i)v.push({id:k,config:i[k]});var x=o.a.createElement("form",{onSubmit:h},v.map(function(e){return o.a.createElement(A.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(t){return f(t,e.id)}})}),o.a.createElement(c.a,{btnType:"Success",disabled:!m},"ORDER"));return e.loading&&(x=o.a.createElement(l.a,null)),o.a.createElement("div",{className:d.a.ContactData,style:e.darkTheme?{backgroundColor:"#393b39"}:{backgroundColor:"#fff"}},o.a.createElement("h4",null,"Enter your Contact Data"),x)},h=function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId,darkTheme:e.burgerBuilder.darkTheme}},f=function(e){return{onOrderBurger:function(t,n){return e(m.g(t,n))}}};t.a=Object(i.b)(h,f)(Object(p.a)(C,s.a))},183:function(e,t,n){var a=n(184);"string"===typeof a&&(a=[[e.i,a,""]]);var r={};r.transform=void 0;n(169)(a,r);a.locals&&(e.exports=a.locals)},184:function(e,t,n){t=e.exports=n(168)(!0),t.push([e.i,".ContactData__ContactData__1whvJ{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:-webkit-gradient(linear,left bottom,left top,from(#4896c7),color-stop(#3d799e),to(#3a7192));background-image:-webkit-linear-gradient(bottom,#4896c7,#3d799e,#3a7192);background-image:-o-linear-gradient(bottom,#4896c7,#3d799e,#3a7192);background-image:linear-gradient(0deg,#4896c7,#3d799e,#3a7192)}@media (min-width:600px){.ContactData__ContactData__1whvJ{width:500px}}","",{version:3,sources:["C:/Users/Martin/Desktop/Projects/burger-builder/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,6GAAmH,AACnH,yEAA6E,AAC7E,oEAAwE,AACxE,8DAAmE,CACpE,AAED,yBACE,iCACE,WAAa,CACd,CACF",file:"ContactData.css",sourcesContent:[".ContactData {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#4896c7), color-stop(#3d799e), to(#3a7192));\r\n  background-image: -webkit-linear-gradient(bottom, #4896c7, #3d799e, #3a7192);\r\n  background-image: -o-linear-gradient(bottom, #4896c7, #3d799e, #3a7192);\r\n  background-image: linear-gradient(0deg, #4896c7, #3d799e, #3a7192);\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  .ContactData {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),t.locals={ContactData:"ContactData__ContactData__1whvJ"}}});
//# sourceMappingURL=1.0c235930.chunk.js.map