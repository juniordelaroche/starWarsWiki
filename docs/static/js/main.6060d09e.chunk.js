(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),u=a.n(l),c=(a(11),a(1));function s(e){var t=e.setBusqueda,a=Object(n.useState)(""),l=Object(c.a)(a,2),u=l[0],s=l[1];return r.a.createElement("form",{className:"formulario",onSubmit:function(e){e.preventDefault(),t(u),s("")}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){s(e.target.value)}}),r.a.createElement("hr",null))}var o=a(2),m=a.n(o),i=a(5),p=function(){var e=Object(i.a)(m.a.mark((function e(t){var a,n,r,l,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://swapi.dev/api/people/?search=".concat(encodeURI(t)),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,l=r.results,u=l.map((function(e){return{name:e.name,height:e.height,mass:e.mass,birth_year:e.birth_year,gender:e.gender}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function b(e){var t=e.nombre,a=e.altura,n=e.masa,l=e.nacimiento,u=e.genero;return r.a.createElement("div",{className:"card-personaje"},r.a.createElement("p",null,r.a.createElement("b",null,"Nombre:")," ",t),r.a.createElement("p",null,r.a.createElement("b",null,"Altura:")," ",a),r.a.createElement("p",null,r.a.createElement("b",null,"Masa:")," ",n),r.a.createElement("p",null,r.a.createElement("b",null,"Nacimiento/Fabricaci\xf3n:")," ",l),r.a.createElement("p",null,r.a.createElement("b",null,"G\xe9nero:")," ",u))}function d(e){var t=e.busqueda,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(c.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){l({data:e,loading:!1})}))}),[e]),r}(t),l=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Resultado de ",t),r.a.createElement("div",{className:"resultado-container"},u&&r.a.createElement("p",null,"Cargando..."),l.length>0?l.map((function(e){return r.a.createElement(b,{key:e.name,nombre:e.name,altura:e.height,masa:e.mass,nacimiento:e.birth_year,genero:e.gender})})):r.a.createElement("p",null,"No se encontraron resultados")))}function E(){var e=Object(n.useState)("obi"),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Wiki Star Wars"),r.a.createElement(s,{setBusqueda:l}),""===a?"":r.a.createElement(d,{busqueda:a}))}u.a.render(r.a.createElement(E,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.6060d09e.chunk.js.map