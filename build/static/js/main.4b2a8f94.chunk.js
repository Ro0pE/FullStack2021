(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var s=t(2),r=t(15),o=t.n(r),c=(t(20),t(4)),i=t(3),u=t.n(i),a="/api/persons",l=function(e,n){return u.a.put("".concat(a,"/").concat(e),n).then((function(e){return e.data}))},d=function(e){return u.a.delete("".concat(a,"/").concat(e)).then((function(e){return e.data}))},j=function(e){return u.a.post(a,e).then((function(e){return e.data}))},b=t(0),f=function(e){var n=e.persons;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{type:"submit",onClick:function(){for(var e=n.length,t=1;t<=e;t++)d(t)},children:"Clear phonebook!"})})},h=function(e){var n=e.setFilter;return Object(b.jsxs)("div",{children:["Filter shown with: ",Object(b.jsx)("input",{onChange:function(e){n(e.target.value)}})]})},m=t(6),O=function(e){var n=e.newPerson,t=e.newNumber,s=e.persons,r=e.setPersons,o=e.setNewPerson,c=e.setNewNumber,i=e.setSuccesfullOperation;console.log("skulaako t\xe4\xe4 skeida olleskaan en\xe4\xe4");return Object(b.jsxs)("form",{onSubmit:function(){for(var e={name:n,number:t},u=!1,a=function(n){if(s[n].name!==e.name)u=!1;else if("undefined"!==typeof e.name){u=!0;var o="Person ".concat(e.name," is already added to phonebook, replace the old number with a new one?"),c=window.confirm(o);if(!0===c){console.log("listalla olevan id",s[n].id);var i=s.find((function(e){return e.id===s[n].id})),a=Object(m.a)(Object(m.a)({},i),{},{number:t});console.log("udpated perset : ",a),l(s[n].id,a).then((function(e){r(s.map((function(t){return t.id!==s[n].id?t:e})))}))}}},d=0;d<s.length;d++)a(d);!0!==u&&"undefined"!==typeof e.name&&n.length>=3&&t.length>=8&&(j(e).then((function(e){r(s.concat(e)),o(""),c("")})),i("Added ".concat(e.name," ")),setTimeout((function(){i(null)}),2e3)),n.length<3&&(console.log("nimi liia lyhyt"),i("Name too short "),setTimeout((function(){i(null)}),2e3)),t<8&&(console.log("numero liia lyhy"),i("Number too short"),setTimeout((function(){i(null)}),2e3)),u=!1},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Name: ",Object(b.jsx)("input",{onChange:function(e){e.target.value.length>0&&o(e.target.value)}})]}),Object(b.jsxs)("p",{children:["Number: ",Object(b.jsx)("input",{onChange:function(e){c(e.target.value)}})]}),Object(b.jsx)("button",{type:"submit",children:"Add"})]}),Object(b.jsx)("ul",{})]})},p=function(e){var n=e.setErrorMessage,t=e.persons,s=function(s){var r=t.find((function(e){return e.id===s}));if("undefined"!==typeof s){var o=e.persons.filter((function(e){return e.id!==s}));d(s).then((function(n){e.setPersons(o)})).catch((function(e){n("Information of '".concat(r.name,"' has already been removed from server")),setTimeout((function(){n(null)}),5e3)}))}},r=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.newFilter.toLowerCase())}));return Object(b.jsx)("div",{children:r.map((function(e){return Object(b.jsxs)("li",{className:"person",children:[e.name,"  ",e.number," ",Object(b.jsx)("button",{onClick:s.bind(undefined,e.id),children:"  delete  "})," "]},e.id)}))})},g=function(e){var n=e.message;return null===n?null:(console.log("message  ",n),Object(b.jsx)("div",{className:"error",children:n}))},x=function(e){var n=e.message;return null===n?null:(console.log("message  ",n),Object(b.jsx)("div",{className:"succesfull",children:n}))},v=function(){var e=Object(s.useState)([]),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(s.useState)(),i=Object(c.a)(o,2),a=i[0],l=i[1],d=Object(s.useState)(),j=Object(c.a)(d,2),m=j[0],v=j[1],w=Object(s.useState)(""),N=Object(c.a)(w,2),P=N[0],y=N[1],k=Object(s.useState)(null),S=Object(c.a)(k,2),C=S[0],F=S[1],E=Object(s.useState)(null),M=Object(c.a)(E,2),T=M[0],A=M[1];return Object(s.useEffect)((function(){u.a.get("/api/persons").then((function(e){r(e.data)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook:"}),Object(b.jsx)(g,{message:C}),Object(b.jsx)(x,{message:T}),Object(b.jsx)(h,{setFilter:y}),Object(b.jsx)("h1",{children:"Add a new:"}),Object(b.jsx)(O,{persons:t,setPersons:r,newPerson:a,setNewPerson:l,newNumber:m,setNewNumber:v,errorMessage:C,setErrorMessage:F,succesfullOperation:T,setSuccesfullOperation:A}),Object(b.jsx)("h2",{children:"Numbers:"}),Object(b.jsx)(p,{setPersons:r,newFilter:P,persons:t,errorMessage:C,setErrorMessage:F}),Object(b.jsx)("p",{children:"---------------------------------------"}),Object(b.jsx)(f,{persons:t,setPersons:r,newPerson:a,setNewPerson:l,newNumber:m,setNewNumber:v})]})};o.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4b2a8f94.chunk.js.map