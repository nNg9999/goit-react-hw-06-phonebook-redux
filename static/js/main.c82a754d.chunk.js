(this["webpackJsonpgoit-react"]=this["webpackJsonpgoit-react"]||[]).push([[0],{10:function(e,t,n){e.exports={form:"ContactForm_form__1DS5n",input:"ContactForm_input__3sNEc",button:"ContactForm_button__20TLZ"}},17:function(e,t,n){e.exports={contactList:"ContactList_contactList__1v-fj",button:"ContactList_button__8e7kW"}},18:function(e,t,n){e.exports={container:"Layout_container__6gW7d",light:"Layout_light__1pSxh",dark:"Layout_dark__ty_To"}},23:function(e,t,n){e.exports={section:"Section_section__2LCCr",title:"Section_title__dBhIk"}},24:function(e,t,n){e.exports={filter:"Filter_filter__2H0G9",input:"Filter_input__3fIla"}},29:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(6),i=n.n(o),l=n(1),s=n(2),u=n(4),m=n(28),h=n(3),d=n(44),b={addContacts:Object(s.b)("contacts/add",(function(e,t){return{payload:{contacts:{name:e,number:t,id:Object(d.a)()}}}})),removeContact:Object(s.b)("contacts/remove"),changeFilter:Object(s.b)("contacts/changeFilter")},f=Object(s.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(u.a)(a,b.addContacts,(function(e,t){return[].concat(Object(m.a)(e),[t.payload.contacts])})),Object(u.a)(a,b.removeContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),g=Object(s.c)("",Object(u.a)({},b.changeFilter,(function(e,t){return t.payload}))),_=Object(h.c)({items:f,filter:g}),p=n(8),C={toggleTheme:Object(s.b)("theme/toggleTheme",(function(e,t){return{payload:{theme:{isChecked:!1,themeConfig:"light"}}}}))},v=Object(s.c)({themeConfig:"ligth"},Object(u.a)({},C.toggleTheme,(function(e){return Object(p.a)(Object(p.a)({},e),{},{themeConfig:"ligth"===e.themeConfig?"dark":"ligth"})}))),O=Object(s.c)({isChecked:!1},Object(u.a)({},C.toggleTheme,(function(e){return Object(p.a)(Object(p.a)({},e),{},{isChecked:!e.isChecked})}))),j={contacts:_,theme:Object(h.c)({themeConfig:v,isChecked:O})},E=Object(s.a)({reducer:j,preloadedState:function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}()});E.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({theme:E.getState().theme})}));var w=E,k=(n(39),n(11)),y=n(12),N=n(14),T=n(13),S=n(5),x=function(e){return e.contacts.items},L=function(e){return e.contacts.filter},I=Object(S.a)([x,L],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),F=Object(S.a)([function(e,t){return t},x],(function(e,t){return t.find((function(t){return t.id===e}))})),B={getItems:x,getVisibleContacts:function(e){var t=x(e),n=L(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},getVC:I,getItemById:F},P=n(18),A=n.n(P);var V=Object(l.b)((function(e){return{isChecked:e.theme.isChecked,theme:e.theme.themeConfig}}))((function(e){var t=e.children,n=e.isChecked;return r.a.createElement("div",{className:"".concat(A.a.container," ").concat(n.isChecked?A.a.dark:A.a.light)},t)})),J=n(23),z=n.n(J);var D=function(e){var t=e.title,n=e.children;return r.a.createElement("section",{className:z.a.section},t&&r.a.createElement("h1",{className:z.a.title},t),n)},H=n(15),R=(n(26),n(10)),W=n.n(R),G=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(u.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r=e.props.contacts;if(!a||!c)return H.b.error("Please fill the form!");a.length<3?H.b.error("Name should be more then 3 letters"):r.some((function(e){return e.name===a}))?H.b.info(a+" is alredy in contacts"):e.props.onAddContact(a,c),e.setState({name:"",number:""})},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:W.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{className:W.a.name},"Name",r.a.createElement("input",{type:"text",name:"name",className:W.a.input,value:t,onChange:this.handleChange})),r.a.createElement("label",{className:W.a.name},"Number",r.a.createElement("input",{type:"text",name:"number",className:W.a.input,value:n,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:W.a.button},"Add contact"))}}]),n}(c.Component);G.defaulProps={};var M=Object(l.b)((function(e){return{contacts:B.getItems(e)}}),null)(G),Z={onAddContact:b.addContacts},K=Object(l.b)((function(e){var t=B.getItems(e);return Object(p.a)({},t)}),Z)(M),Y=n(17),q=n.n(Y),Q=function(e){var t=e.name,n=e.number,a=e.onRemove;return r.a.createElement("li",null," ",t,": ",n,r.a.createElement("section",null,r.a.createElement("button",{type:"submit",className:q.a.button,onClick:a},"Delete")))};Q.defaultProps={};var U=Q,X=Object(l.b)((function(e,t){var n=B.getItemById(e,t.id);return Object(p.a)({},n)}),(function(e,t){return{onRemove:function(){return e(b.removeContact(t.id))}}}))(U),$=function(e){var t=e.contacts;return r.a.createElement("ul",{className:q.a.contactList},t.map((function(e){var t=e.id;return r.a.createElement(X,{key:t,id:t})})))};$.defaultProps={};var ee=Object(l.b)((function(e){return{contacts:B.getVC(e)}}))($),te=n(24),ne=n.n(te),ae=function(e){var t=e.value,n=e.onChangeFilter;return r.a.createElement("label",{className:ne.a.filter},"Find contacts by name",r.a.createElement("input",{type:"text",name:"filter",className:ne.a.input,value:t,onChange:function(e){return n(e.target.value)}}))};ae.defaultProps={};var ce={onChangeFilter:b.changeFilter},re=Object(l.b)((function(e){return{value:e.contacts.filter}}),ce)(ae),oe=n(9),ie=n.n(oe),le=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onToggleTheme,n=e.isChecked;return r.a.createElement("div",null,r.a.createElement("div",{className:ie.a.toolbar},r.a.createElement("div",{className:ie.a.themeSwitch},r.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"sun",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:ie.a.themeSwitch__icon},r.a.createElement("path",{fill:"currentColor",d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})),r.a.createElement("div",{className:ie.a.switch},r.a.createElement("input",{className:ie.a.switch__input,type:"checkbox",name:"theme",id:"theme-switch-control",checked:n.isChecked,onChange:t}),r.a.createElement("label",{"aria-hidden":"true",className:ie.a.switch__label,htmlFor:"theme-switch-control"},"On"),r.a.createElement("div",{"aria-hidden":"true",className:ie.a.switch__marker})),r.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"moon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:ie.a.themeSwitch__icon},r.a.createElement("path",{fill:"currentColor",d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"})))))}}]),n}(c.Component),se={onToggleTheme:C.toggleTheme},ue=Object(l.b)((function(e){return{isChecked:e.theme.isChecked}}),se)(le),me=function(e){var t=e.contacts,n=e.visibleContacts;e.onIncrement,e.counterValue;return r.a.createElement(V,null,r.a.createElement(ue,null),r.a.createElement(D,{title:"Phonebook"},r.a.createElement(K,null)),r.a.createElement(D,{title:"Contacts"},t.length>1&&r.a.createElement(re,null),t.length>0&&r.a.createElement(ee,null),!n.length&&r.a.createElement("div",null,"Not faund")),r.a.createElement(H.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))},he=function(e){Object(N.a)(n,e);var t=Object(T.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return r.a.createElement(me,Object.assign({},this.props,this.state),this.props.children)}}]),n}(c.Component),de=Object(l.b)((function(e){return{contacts:B.getItems(e),visibleContacts:B.getVC(e)}}))(he);i.a.render(r.a.createElement(l.a,{store:w},r.a.createElement(de,null)),document.getElementById("root"))},9:function(e,t,n){e.exports={themeSwitch:"ThemeToggler_themeSwitch__2fidy",themeSwitch__icon:"ThemeToggler_themeSwitch__icon__17Wg0",switch:"ThemeToggler_switch__27gJ5",switch__input:"ThemeToggler_switch__input__VkOIZ",switch__label:"ThemeToggler_switch__label__2a-lS",switch__marker:"ThemeToggler_switch__marker__1sYL3",toolbar:"ThemeToggler_toolbar__1gGu9"}}},[[29,1,2]]]);
//# sourceMappingURL=main.c82a754d.chunk.js.map