(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),h=s(1),b=s.n(h),d=(s(14),s(15),s(2)),p=s.n(d),j=s(0),y=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function g(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&o.reverse(),console.log(s,r),o}!function(t){t.NONE="none",t.ALPHABET="alphabet",t.LENGTH="length"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortByAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortByLength=function(){t.setState({sortType:n.LENGTH})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed,r=e!==n.NONE||s;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":e!==n.ALPHABET}),onClick:this.sortByAlphabet,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":e!==n.LENGTH}),onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{" is-light":!s}),onClick:this.reverse,children:"Reverse"}),r&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.reset,children:"Reset"})]}),g(y,this.state).map((function(t){return Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{"data-cy":"Good",children:t},t)})})}))]})}}]),s}(b.a.Component);o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8338c363.chunk.js.map