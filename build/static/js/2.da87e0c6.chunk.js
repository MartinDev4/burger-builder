webpackJsonp([2],{183:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=r(0),o=r.n(a),t=r(8),i=r(194),c=r(14),d=r(60),b=r(13),s=r(59),p=function(e){var n=e.onFetchOrders;Object(a.useEffect)(function(){n(e.token,e.userId)},[n]);var r=o.a.createElement(s.a,null);return e.loading||(r=e.orders.map(function(e){return o.a.createElement(i.a,{key:e.id,ingredients:e.ingredients,price:e.price})})),o.a.createElement("div",null,r)},g=function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},l=function(e){return{onFetchOrders:function(n,r){return e(b.d(n,r))}}};n.default=Object(t.b)(g,l)(Object(d.a)(p,c.a))},194:function(e,n,r){"use strict";var a=r(0),o=r.n(a),t=r(195),i=r.n(t),c=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var a=n.map(function(e){return o.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #807e7c",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return o.a.createElement("div",{className:i.a.Order},o.a.createElement("p",null,"Ingredients: ",a),o.a.createElement("p",null,"Price: ",o.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))};n.a=c},195:function(e,n,r){var a=r(196);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;r(181)(a,o);a.locals&&(e.exports=a.locals)},196:function(e,n,r){n=e.exports=r(180)(!0),n.push([e.i,".Order__Order__W-Npf{width:80%;border:1px solid #eee;-webkit-box-shadow:rgba(17,133,223,.3) 0 1px 2px 0,rgba(60,64,67,.15) 0 2px 6px 2px;box-shadow:0 1px 2px 0 rgba(17,133,223,.3),0 2px 6px 2px rgba(60,64,67,.15);padding:10px;margin:10px auto;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:-webkit-gradient(linear,right top,left top,from(#6abf34),color-stop(#86c32d),color-stop(#9fc629),color-stop(#b7c927),to(#cecb2a));background-image:-webkit-linear-gradient(right,#6abf34,#86c32d,#9fc629,#b7c927,#cecb2a);background-image:-o-linear-gradient(right,#6abf34,#86c32d,#9fc629,#b7c927,#cecb2a);background-image:linear-gradient(270deg,#6abf34,#86c32d,#9fc629,#b7c927,#cecb2a)}","",{version:3,sources:["C:/Users/Martin PC/Desktop/Projects/burger-builder/src/components/Order/Order.css"],names:[],mappings:"AAAA,qBACE,UAAW,AACX,sBAAuB,AACvB,oFACyC,AACjC,4EACiC,AACzC,aAAc,AACd,iBAAkB,AAClB,8BAA+B,AACvB,sBAAuB,AAC/B,mJAQE,AACF,wFAOE,AACF,mFAOE,AACF,gFAOE,CACH",file:"Order.css",sourcesContent:[".Order {\n  width: 80%;\n  border: 1px solid #eee;\n  -webkit-box-shadow: rgba(17, 133, 223, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n          box-shadow: rgba(17, 133, 223, 0.3) 0px 1px 2px 0px,\n    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n  padding: 10px;\n  margin: 10px auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-image: -webkit-gradient(\n    linear,\n    right top, left top,\n    from(#6abf34),\n    color-stop(#86c32d),\n    color-stop(#9fc629),\n    color-stop(#b7c927),\n    to(#cecb2a)\n  );\n  background-image: -webkit-linear-gradient(\n    right,\n    #6abf34,\n    #86c32d,\n    #9fc629,\n    #b7c927,\n    #cecb2a\n  );\n  background-image: -o-linear-gradient(\n    right,\n    #6abf34,\n    #86c32d,\n    #9fc629,\n    #b7c927,\n    #cecb2a\n  );\n  background-image: linear-gradient(\n    to left,\n    #6abf34,\n    #86c32d,\n    #9fc629,\n    #b7c927,\n    #cecb2a\n  );\n}\n"],sourceRoot:""}]),n.locals={Order:"Order__Order__W-Npf"}}});
//# sourceMappingURL=2.da87e0c6.chunk.js.map