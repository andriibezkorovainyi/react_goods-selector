(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(3),o=c.n(n),a=c(4),s=c(5),d=c(7),l=c(6),r=c(1),i=(c(12),c(13),c(0)),u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(t){Object(d.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={selectedGood:"Jam"},t.handleAddButton=function(e){t.setState({selectedGood:e})},t.handleRemoveButton=function(){t.setState({selectedGood:""})},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this,e=this.state.selectedGood;return Object(i.jsxs)("main",{className:"section container",children:[Object(i.jsxs)("h1",{className:"title".concat(e&&" is-flex is-align-items-center"),children:[e?"".concat(e," is selected"):"No goods selected",e&&Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.handleRemoveButton})]}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:u.map((function(c){return Object(i.jsxs)("tr",{"data-cy":"Good",className:"Good ".concat(e===c?"has-background-success-light":""),children:[Object(i.jsx)("td",{children:e===c?Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:t.handleRemoveButton,children:"-"}):Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){t.handleAddButton(c)},children:"+"})}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},Math.random())}))})})]})}}]),c}(r.Component);o.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c8072c03.chunk.js.map