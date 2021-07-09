(this["webpackJsonpreact-forms"]=this["webpackJsonpreact-forms"]||[]).push([[0],{44:function(e,a,t){},64:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),i=(t(64),t(45)),o=t(46),l=t(54),d=t(53),u=t(29),m=t(110),j=t(112),p=t(113),b=t(117),h=t(114),f=t(115),g=t(116),x=t(52),O=t.n(x),v=t(35),w=t(41),y=function(e,a){var t=Object(n.useState)({username:"",email:"",password:"",confirmPass:"",contactNum:"",showPassword:!1}),r=Object(u.a)(t,2),s=r[0],c=r[1],i=Object(n.useState)({}),o=Object(u.a)(i,2),l=o[0],d=o[1],m=Object(n.useState)(!1),j=Object(u.a)(m,2),p=j[0],b=j[1];return Object(n.useEffect)((function(){0===Object.keys(l).length&&p&&e()}),[l]),{handleChange:function(e){var a=e.target,t=a.name,n=a.value;c(Object(w.a)(Object(w.a)({},s),{},Object(v.a)({},t,n)))},values:s,handleSubmit:function(e){e.preventDefault(),d(a(s)),b(!0)},errors:l}};function N(e){var a={};return e.username.trim()||(a.username="Username required"),e.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(a.email="Invalid input"):a.email="Email required",e.password?e.password.length<8&&(a.password="Password needs to be 8 characters or more"):a.password="Password is required",e.confirmPass?e.confirmPass!==e.password&&(a.confirmPass="Passwords do not match"):a.confirmPass="Password is required",e.contactNum?/^[0-9]*$/.test(e.contactNum)||e.contactNum.length===/((^(\+)(\d){12}$)|(^\d{11}$))/||(a.contactNum="Please enter a valid contact number"):a.contactNum="Contact number is required",a}t(44);var P=t(107),C=Object(P.a)((function(e){return{root1:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(60),width:e.spacing(40),height:e.spacing(65)}},root2:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(60),width:e.spacing(40),height:e.spacing(30)}},paper1:{display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 20px",margin:"40px auto",width:"300",color:"#ffffff",background:"linear-gradient(45deg, #a7e681 30%,#82e645 90%)"},paper2:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 10px",margin:"40px auto",width:"300",color:"#ffffff",background:"linear-gradient(45deg, #a7e681 30%,#82e645 90%)"},button:{background:"linear-gradient(45deg, #1dcc89 30%, #1e8f9c 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgb(29, 114, 204, .3)"},avatar:{backgroundColor:"#46b4f0"}}})),S=t(6);function W(e){var a=e.submitForm,t=C(),n=y(a,N),r=n.handleChange,s=n.values,c=n.handleSubmit,i=n.errors;return Object(S.jsx)("div",{className:t.root1,children:Object(S.jsx)(m.a,{className:t.paper1,elevation:"20",children:Object(S.jsxs)(j.a,{maxWidth:"md",children:[Object(S.jsxs)("form",{className:"form-input",onSubmit:c,children:[Object(S.jsxs)(p.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(S.jsx)(b.a,{className:t.avatar,children:Object(S.jsx)(O.a,{style:{fontSize:30}})}),Object(S.jsx)("h5",{children:"Register now!"}),Object(S.jsx)(h.a,{variant:"caption",fullWidth:!0,style:{marginBottom:"1%"},children:"Create an account"}),Object(S.jsx)(f.a,{name:"username",label:"Username",placeholder:"Enter your username",value:s.username,onChange:r,fullWidth:!0,style:{marginBottom:"6%"},variant:"outlined"}),i.username&&Object(S.jsx)("p",{children:i.username}),Object(S.jsx)(f.a,{name:"email",label:"Email",type:"email",placeholder:"Enter your email",value:s.email,onChange:r,fullWidth:!0,style:{marginBottom:"6%"},variant:"outlined"}),i.email&&Object(S.jsx)("p",{children:i.email}),Object(S.jsx)(f.a,{name:"contactNum",label:"Contact no.",placeholder:"Enter your contact no.",type:"number",size:"20",minlength:"11",maxWidth:"12",value:s.contactNum,onChange:r,fullWidth:!0,style:{marginBottom:"7%"},variant:"outlined"}),i.contactNum&&Object(S.jsx)("p",{children:i.contactNum}),Object(S.jsx)(f.a,{name:"password",label:"Password",type:"password",placeholder:"Enter your password",value:s.password,onChange:r,fullWidth:!0,style:{marginBottom:"6%"},variant:"outlined"}),i.password&&Object(S.jsx)("p",{children:i.password}),Object(S.jsx)(f.a,{name:"confirmPass",label:"Confirm Password",type:"password",placeholder:"Confirm your password",value:s.confirmPass,onChange:r,fullWidth:!0,style:{marginBottom:"5%"},variant:"outlined"}),i.confirmPass&&Object(S.jsx)("p",{children:i.confirmPass})]}),Object(S.jsx)(g.a,{type:"submit",variant:"contained",className:t.button,style:{marginBottom:"1%"},children:"Submit"})]}),Object(S.jsxs)("span",{className:"form-login",children:["Already have an account? Login ",Object(S.jsx)("a",{href:"#",children:"here"})]})]})})})}function B(){var e=C();return Object(S.jsx)("div",{className:e.root2,children:Object(S.jsx)("paper",{className:e.paper2,elevation:"20",children:Object(S.jsx)("h1",{className:"form-success",children:"We have received your request!"})})})}var k=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],r=a[1];return Object(S.jsx)("div",{children:t?Object(S.jsx)(B,{}):Object(S.jsx)(W,{submitForm:function(){r(!0)}})})},E=(t(75),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(k,{})})}}]),t}(n.Component)),q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,119)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,c=a.getTTFB;t(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(E,{})}),document.getElementById("root")),q()}},[[76,1,2]]]);
//# sourceMappingURL=main.ed64e1e6.chunk.js.map