(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r=t(2),s=t(15),c=t.n(s),o=(t(20),t(4)),u=t(3),i=t.n(u),a="/api/persons",l=function(e,n){return i.a.put("".concat(a,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return i.a.delete("".concat(a,"/").concat(e)).then((function(e){return e.data}))},b=function(e){return i.a.post(a,e).then((function(e){return e.data}))},d=t(0),f=function(e){var n=e.persons;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{type:"submit",onClick:function(){for(var e=n.length,t=1;t<=e;t++)console.log(n.length),j(t)},children:"Clear phonebook!"})})},h=function(e){var n=e.setFilter;return Object(d.jsxs)("div",{children:["Filter shown with: ",Object(d.jsx)("input",{onChange:function(e){n(e.target.value)}})]})},m=t(6),O=function(e){var n=e.newPerson,t=e.newNumber,r=e.persons,s=e.setPersons,c=e.setNewPerson,o=e.setNewNumber,u=e.setSuccesfullOperation;return Object(d.jsxs)("form",{onSubmit:function(){for(var e={name:n,number:t},c=!1,o=function(n){if(r[n].name!==e.name)c=!1;else if("undefined"!==typeof e.name){c=!0;var o="Person ".concat(e.name," is already added to phonebook, replace the old number with a new one?"),u=window.confirm(o);if(!0===u){var i=r.find((function(e){return e.id===r[n].id})),a=Object(m.a)(Object(m.a)({},i),{},{number:t});l(r[n].id,a).then((function(e){s(r.map((function(t){return t.id!==r[n].id?t:e})))}))}}},i=0;i<r.length;i++)o(i);!0!==c&&"undefined"!==typeof e.name&&(b(e).then((function(e){s(r.concat(e))})),u("Added ".concat(e.name," ")),setTimeout((function(){u(null)}),2e3)),c=!1},children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Name: ",Object(d.jsx)("input",{onChange:function(e){e.target.value.length>0&&c(e.target.value)}})]}),Object(d.jsxs)("p",{children:["Number: ",Object(d.jsx)("input",{onChange:function(e){o(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",children:"Add"})]}),Object(d.jsx)("ul",{})]})},p=function(e){var n=e.setErrorMessage,t=e.persons,r=function(r){var s=t.find((function(e){return e.id===r}));if("undefined"!==typeof r){var c=e.persons.filter((function(e){return e.id!==r}));console.log(c),j(r).then((function(n){e.setPersons(c)})).catch((function(e){n("Information of '".concat(s.name,"' has already been removed from server")),setTimeout((function(){n(null)}),5e3)}))}},s=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.newFilter.toLowerCase())}));return Object(d.jsx)("div",{children:s.map((function(e){return Object(d.jsxs)("li",{className:"person",children:[e.name,"  ",e.number," ",Object(d.jsx)("button",{onClick:r.bind(undefined,e.id),children:"  delete  "})," "]},e.id)}))})},g=function(e){var n=e.message;return null===n?null:(console.log("message  ",n),Object(d.jsx)("div",{className:"error",children:n}))},x=function(e){var n=e.message;return null===n?null:(console.log("message  ",n),Object(d.jsx)("div",{className:"succesfull",children:n}))},v=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],s=n[1],c=Object(r.useState)(),u=Object(o.a)(c,2),a=u[0],l=u[1],j=Object(r.useState)(),b=Object(o.a)(j,2),m=b[0],v=b[1],w=Object(r.useState)(""),N=Object(o.a)(w,2),P=N[0],S=N[1],y=Object(r.useState)(null),C=Object(o.a)(y,2),k=C[0],F=C[1],E=Object(r.useState)(null),M=Object(o.a)(E,2),A=M[0],I=M[1];return Object(r.useEffect)((function(){i.a.get("/api/persons").then((function(e){s(e.data)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook:"}),Object(d.jsx)(g,{message:k}),Object(d.jsx)(x,{message:A}),Object(d.jsx)(h,{setFilter:S}),Object(d.jsx)("h1",{children:"Add a new:"}),Object(d.jsx)(O,{persons:t,setPersons:s,newPerson:a,setNewPerson:l,newNumber:m,setNewNumber:v,errorMessage:k,setErrorMessage:F,succesfullOperation:A,setSuccesfullOperation:I}),Object(d.jsx)("h2",{children:"Numbers:"}),Object(d.jsx)(p,{setPersons:s,newFilter:P,persons:t,errorMessage:k,setErrorMessage:F}),Object(d.jsx)("p",{children:"---------------------------------------"}),Object(d.jsx)(f,{persons:t,setPersons:s,newPerson:a,setNewPerson:l,newNumber:m,setNewNumber:v})]})};c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f4e5d657.chunk.js.map