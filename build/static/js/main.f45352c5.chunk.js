(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{206:function(e,t,r){"use strict";r.r(t);var a=r(249),n=r(1),c=r.n(n),s=r(58),o=r.n(s),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=r(248),d=r(255),j=r(5),u=r(54),x=r(67),p=(r(109),r(113),x.a.initializeApp({apiKey:"AIzaSyCOIGXcJ8rq_4aGVLnZWtFjh_9P8I6T1mc",authDomain:"ocr-app-4e26c.firebaseapp.com",projectId:"ocr-app-4e26c",storageBucket:"ocr-app-4e26c.appspot.com",messagingSenderId:"866825381864",appId:"1:866825381864:web:9b762390a3b2a53f28665d",measurementId:"G-J72Q88JBGW"})),h={ocrdata:p.firestore().collection("users"),formatDoc:function(e){return Object(u.a)({id:e.id},e.data())},getCurrentTimestamp:x.a.firestore.FieldValue.serverTimestamp},O=p.auth(),m=r(8),g=r(17),f=r(233),w=r(234),v=r(235),y=r(151),S=r(236),k=r(156),C=r(226),R=r(70),z=r(3),W=function(e){var t=Object(k.c)().toggleColorMode,r=Object(k.d)(R.d,R.e);return Object(z.jsx)(C.a,Object(u.a)({size:"lg",fontSize:{base:"20px",md:"25px"},variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(z.jsx)(r,{})},e))},P=r(19),A=r.n(P),E=r(39),F=r(254),D=r(232),U=r(21);function L(){var e=G(),t=e.logout,r=e.currentUser,a=Object(U.g)("");function n(){return(n=Object(E.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:console.log("Loggedd out"),a.push("/login"),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("error"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(F.a,{children:[Object(z.jsx)(F.b,{cursor:"pointer",as:D.a,size:"md",name:r.email,color:Object(k.d)("black","white"),p:5,bg:Object(k.d)("gray.300","gray.600")}),Object(z.jsxs)(F.d,{children:[Object(z.jsxs)(F.c,{as:g.b,to:"/update-profile",children:["Update Profile"," "]}),Object(z.jsx)(F.c,{onClick:function(){return n.apply(this,arguments)},children:"Log out"})]})]})})}function I(){var e,t=G().currentUser;return Object(z.jsxs)(f.a,{h:{base:"70px",md:"100px"},mb:{base:"20px",md:"10px"},alignItems:"center",justifyContent:"center",children:[Object(z.jsx)(w.a,{as:g.b,to:"/",style:{fontFamily:"'Press Start 2P' ",textDecoration:"none"},ml:"20px",fontWeight:"extrabold",fontSize:{base:"20px",md:"45px",lg:"50px"},bgGradient:"linear(to-r, #7928CA,#FF0080)",bgClip:"text",w:{base:"400px",md:"500px",lg:"500px"},children:"OCR APP"}),Object(z.jsx)(v.a,{}),!t&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(y.a,{colorScheme:"light",variant:"ghost",mr:{base:"1px",md:"10px"},fontSize:{base:"15px",md:"20px"},children:Object(z.jsx)(S.a,(e={as:g.b,style:{textDecoration:"none"}},Object(m.a)(e,"as",g.b),Object(m.a)(e,"to","/signup"),Object(m.a)(e,"children","Sign Up"),e))}),Object(z.jsx)(y.a,{colorScheme:"light",variant:"ghost",mr:{base:"1px",md:"10px"},fontSize:{base:"15px",md:"20px"},children:Object(z.jsx)(S.a,{as:g.b,style:{textDecoration:"none"},to:"/login",children:"Login"})})]}),t&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(S.a,{mr:{base:"10px",md:"20px"},fontSize:{base:"12px",md:"sm"},color:"gray.400",children:t.email}),Object(z.jsx)(L,{})]}),Object(z.jsx)(W,{ml:{base:"1px",md:"10px"},mr:{base:"2px",md:"10px"}})]})}var q=c.a.createContext();function G(){return Object(n.useContext)(q)}function H(e){var t=e.children,r=Object(n.useState)(),a=Object(j.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)(!0),i=Object(j.a)(o,2),l=i[0],b=i[1],d=new x.a.auth.GoogleAuthProvider;Object(n.useEffect)((function(){return O.onAuthStateChanged((function(e){s(e),b(!1)}))}),[]);var u={currentUser:c,signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},signGoogle:function(){return O.signInWithPopup(d)},forgotPassword:function(e){return O.sendPasswordResetEmail(e)},login:function(e,t){return O.signInWithEmailAndPassword(e,t)},updateEmail:function(e){return c.updateEmail(e)},updatePassword:function(e){return c.updatePassword(e)}};return Object(z.jsx)(q.Provider,{value:u,children:!l&&t})}var B=r(237),T=r(260),M=r(227),V=function(e){return Object(z.jsx)(B.a,Object(u.a)({bg:Object(k.d)("white","gray.700"),py:"8",px:{base:"4",md:"10"},shadow:"base",rounded:"lg"},e))},J=r(13),N=r(258),_=r(259),Y=r(239),K=r(240);function Q(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=G(),a=r.login,c=r.currentUser,s=Object(n.useState)(""),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(n.useState)(!1),d=Object(j.a)(b,2),u=d[0],x=d[1],p=Object(U.g)();function h(e){return O.apply(this,arguments)}function O(){return(O=Object(E.a)(A.a.mark((function r(n){return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,l(""),x(!0),r.next=6,a(e.current.value,t.current.value);case 6:p.push("/"),console.log("Logged in"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),l("Password or Email is Wrong!");case 13:x(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(J.a.form,{onSubmit:h,children:Object(z.jsxs)(N.a,{spacing:"3",children:[i&&Object(z.jsxs)(_.a,{status:"error",children:[Object(z.jsx)(_.c,{}),i]}),c&&Object(z.jsxs)(_.a,{borderRadius:"8",status:"success",children:[Object(z.jsx)(_.c,{}),c.email]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Email address"}),Object(z.jsx)(K.a,{name:"email",type:"email",autoComplete:"email",required:!0,ref:e})]}),Object(z.jsxs)(B.a,{children:[Object(z.jsxs)(f.a,{children:[Object(z.jsx)(B.a,{children:Object(z.jsx)(Y.a,{children:" Password "})}),Object(z.jsx)(v.a,{}),Object(z.jsx)(S.a,{fontSize:"md",as:g.b,color:Object(k.d)("blue.500","blue.200"),to:"/forgot-password",style:{textDecoration:"none"},children:"Forgot Password?"})]}),Object(z.jsx)(K.a,{name:"password",type:"password",ref:t,autoComplete:"password",required:!0,style:{marginBottom:"10px"}})]}),Object(z.jsx)(y.a,{type:"submit",colorScheme:"blue",size:"lg",fontSize:"md",onClick:h,disabled:u,children:"Log in"})]})})})}function X(){var e=Object(U.g)(),t=G(),r=t.signGoogle;t.error;function a(){return(a=Object(E.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,r().then((function(e){h.ocrdata.doc(e.user.email).set({email:e.user.email,createdAt:h.getCurrentTimestamp(),userId:e.user.uid})}));case 4:console.log("singed in"),e.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("theres a error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(z.jsxs)(B.a,{maxW:{base:"90%",md:"450px"},mx:"auto",children:[Object(z.jsx)(w.a,{textAlign:"center",fontSize:{base:"30px",md:"40px"},fontWeight:"extrabold",children:"Login in Here"}),Object(z.jsx)(B.a,{as:g.b,to:"/signup",children:Object(z.jsxs)(S.a,{mt:"2",mb:"5",fontSize:{base:"sm",md:"18px"},textAlign:"center",color:Object(k.d)("blue.500","blue.200"),maxW:"100%",fontWeight:"medium",children:["Don't have an account?"," "]})}),Object(z.jsxs)(V,{boxShadow:"dark-lg",children:[Object(z.jsx)(Q,{}),Object(z.jsxs)(T.a,{mt:"6",columns:3,spacing:"3",children:[Object(z.jsxs)(y.a,{color:"currentColor",variant:"outline",borderWidth:"2px",borderColor:Object(k.d)("black","white"),disabled:!0,children:[Object(z.jsx)(M.a,{children:"Login with Facebook"}),Object(z.jsx)(R.a,{})]}),Object(z.jsxs)(y.a,{color:"currentColor",variant:"outline",onClick:function(e){return a.apply(this,arguments)},borderWidth:"2px",borderColor:Object(k.d)("black","white"),children:[Object(z.jsx)(M.a,{children:"Login with Google"}),Object(z.jsx)(R.c,{})]}),Object(z.jsxs)(y.a,{color:"currentColor",variant:"outline",disabled:!0,borderWidth:"2px",borderColor:Object(k.d)("black","white"),children:[Object(z.jsx)(M.a,{children:"Login with Github"}),Object(z.jsx)(R.b,{})]})]})]})]})}var Z=r(84);function $(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),a=G(),c=a.signup,s=a.currentUser,o=Object(n.useState)(""),i=Object(j.a)(o,2),l=i[0],b=i[1],d=Object(n.useState)(!1),u=Object(j.a)(d,2),x=u[0],p=u[1],O=Object(U.g)();function m(e){return g.apply(this,arguments)}function g(){return(g=Object(E.a)(A.a.mark((function a(n){return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===r.current.value){a.next=3;break}return a.abrupt("return",b("Password Does Not Match!"));case 3:return a.prev=3,b(""),p(!0),a.next=8,c(e.current.value,t.current.value).then((function(e){h.ocrdata.doc(e.user.email).set({email:e.user.email,createdAt:h.getCurrentTimestamp(),userId:e.user.uid})}));case 8:O.push("/"),f(),console.log("signed up"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),b("Failed to Create Account!");case 16:p(!1);case 17:case"end":return a.stop()}}),a,null,[[3,13]])})))).apply(this,arguments)}function f(){console.log(s.email)}return Object(z.jsx)(z.Fragment,{children:Object(z.jsx)(J.a.form,{onSubmit:m,children:Object(z.jsx)(Z.a,{children:Object(z.jsxs)(N.a,{spacing:"3",children:[l&&Object(z.jsxs)(_.a,{status:"error",children:[Object(z.jsx)(_.c,{}),l]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Email address"}),Object(z.jsx)(K.a,{name:"email",type:"email",ref:e,required:!0})]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Password"}),Object(z.jsx)(K.a,{name:"password",type:"password",ref:t,autoComplete:"password",required:!0})]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Re-enter Password"}),Object(z.jsx)(K.a,{name:"conpassword",type:"password",ref:r,autoComplete:"password",required:!0})]}),Object(z.jsx)(y.a,{type:"submit",colorScheme:"blue",size:"lg",fontSize:"lg",onClick:m,disabled:x,children:"Sign Up"})]})})})})}var ee=function(){return Object(z.jsxs)(B.a,{maxW:{base:"90%",md:"450px"},mx:"auto",children:[Object(z.jsx)(w.a,{textAlign:"center",fontSize:{base:"30px",md:"40px"},fontWeight:"extrabold",children:"Sign Up Here"}),Object(z.jsx)(B.a,{as:g.b,to:"/login",children:Object(z.jsx)(S.a,{mt:"2",mb:"5",fontSize:{base:"sm",md:"18px"},textAlign:"center",color:Object(k.d)("blue.500","blue.200"),maxW:"100%",fontWeight:"medium",children:"Already have an account?"})}),Object(z.jsx)(V,{boxShadow:"dark-lg",children:Object(z.jsx)($,{})})]})},te=r(228),re=r(252),ae=r(261),ne=r(52),ce=r(243),se=r(210),oe=r(244),ie=r(245),le=r(256),be=r(246),de=r(253),je=r(152),ue=r(262),xe=r(86),pe=r(144),he=r(145);var Oe=function(){var e=Object(te.a)(),t=e.isOpen,r=e.onOpen,a=e.onClose,c=Object(n.useRef)(),s=Object(n.useState)(null),o=Object(j.a)(s,2),i=o[0],l=o[1],b=Object(n.useState)(""),d=Object(j.a)(b,2),u=d[0],p=d[1],O=Object(n.useState)("eng"),m=Object(j.a)(O,2),g=m[0],y=m[1],C=Object(n.useState)([]),R=Object(j.a)(C,2),W=R[0],P=R[1],F=Object(n.useState)(!1),D=Object(j.a)(F,2),U=D[0],L=D[1],I=Object(n.useState)(!1),q=Object(j.a)(I,2),H=q[0],T=q[1],M=Object(k.d)("gray","black"),V=Object(k.d)("gray.900","gray"),J=Object(k.d)("black","white"),N=Object(re.a)(),_=Object(n.useState)("0"),Y=Object(j.a)(_,2),Q=Y[0],X=Y[1],Z=Object(n.useRef)(),$=G().currentUser,ee=Object(k.d)("gray.900","gray.700"),Oe=Object(pe.createWorker)({logger:function(e){return X(100*e.progress)}}),me=function(){var e=Object(E.a)(A.a.mark((function e(){var t,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe.load();case 3:return e.next=5,Oe.loadLanguage(g);case 5:return e.next=7,Oe.initialize(g);case 7:return e.next=9,Oe.recognize(i);case 9:t=e.sent,r=t.data.text,p(r),e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",N({position:"top",title:"There a error",status:"error",isClosable:!0}));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){null!=$&&h.ocrdata.doc($.email).onSnapshot((function(e){P(Object.values(e.data().userocrData))}))}),[]),Object(n.useEffect)((function(){null!==i&&T(!H)}),[i]),Object(n.useEffect)((function(){null!=$&&(""!==u&&(console.log("done"),h.ocrdata.doc($.email).update({userocrData:x.a.firestore.FieldValue.arrayUnion(u)}).then((function(e){console.log(e)})).catch((function(e){console.error("Error adding document: ",e)})),L(!U)))}),[u,$,h]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(ae.a,{isOpen:t,placement:"right",onClose:a,finalFocusRef:c,children:Object(z.jsx)(ne.f,{children:Object(z.jsxs)(ae.b,{children:[Object(z.jsx)(ne.c,{}),Object(z.jsxs)(ne.e,{children:[Object(z.jsx)(w.a,{children:"History"})," "]}),Object(z.jsxs)(ne.b,{css:{"&::-webkit-scrollbar":{backgroundColor:M,borderRadius:"10px",width:"8px"},"&::-webkit-scrollbar-track":{shadow:"inset 0 0 6px rgba(0,0,0,0.3)",borderRadius:"10px",backgroundColor:V},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",shadow:"inset 0 0 6px rgba(0,0,0,0.3)",backgroundColor:J}},children:[Object(z.jsx)(S.a,{color:Object(k.d)("gray"),mb:"10px",children:$&&$.email}),Object(z.jsx)(f.a,{flexDirection:"column-reverse",children:W&&W.length>0&&W.map((function(e,t){return Object(z.jsxs)(B.a,{h:"120px",p:2,cursor:"pointer",borderRadius:"10px",fontSize:"14px",boxShadow:"lg",border:"lightgray solid 1px",overflowY:"auto",mb:"20px",css:{"&::-webkit-scrollbar":{backgroundColor:M,borderRadius:"10px",width:"8px"},"&::-webkit-scrollbar-track":{shadow:"inset 0 0 6px rgba(0,0,0,0.3)",borderRadius:"10px",backgroundColor:V},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",shadow:"inset 0 0 6px rgba(0,0,0,0.3)",backgroundColor:J}},children:[" ",Object(z.jsx)(S.a,{color:"useColorModeValue('white','black')",children:e},t)]},t)}))})]})]})})}),Object(z.jsxs)(ce.a,{maxW:{base:"90%",md:"85%"},direction:{base:"column",md:"row"},as:f.a,h:{base:"300px",md:"500px"},children:[Object(z.jsxs)(f.a,{direction:"column",py:"2",px:{md:"2"},position:"relative",boxShadow:"dark-lg",borderRadius:"20px",w:"100%",mr:"50px",mb:"10px",bg:Object(k.d)("white","black"),children:[Object(z.jsx)(B.a,{onClick:function(e){if(e.preventDefault(),null===i)return N({position:"top",title:"Please Select A File",status:"error",duration:9e3,isClosable:!0});me()},cursor:"pointer",boxShadow:"dark-lg",as:B.b,position:"absolute",top:{md:"200px"},right:{base:"18px",md:"-70px"},size:{base:"45px",md:"90px"},bottom:{base:"2.5"},bg:Object(k.d)("gray.900","gray.700"),color:"white",zIndex:"4",children:Object(z.jsx)(se.a,{fontSize:{base:"25px",md:"40px"},as:xe.a})}),Object(z.jsx)(oe.a,{mt:1,children:Object(z.jsx)(B.a,{children:Object(z.jsx)(K.a,{fontSize:{base:"10px",md:"15px"},ref:Z,type:"file",variant:"ghost",accept:".bmp,.jpg,.png,.pbm",onChange:function(e){return l(e.target.files[0])}})})}),Object(z.jsx)(B.a,{as:oe.a,w:"100%",h:{base:"160px",md:"300px"},children:Object(z.jsx)(ie.a,{p:2,maxH:{base:"60%",md:"80%"},src:i?URL.createObjectURL(i):null,alt:i?i.name:null})}),Object(z.jsx)(v.a,{}),Object(z.jsx)(le.a,{m:2,colorScheme:"blue",size:"lg",borderRadius:"50px",value:Q}),Object(z.jsxs)(B.a,{as:oe.a,boxShadow:"dark-lg",borderRadius:"15px",w:{base:"70%",md:"100%"},h:{base:"50px",md:"80px"},ml:{base:"10px",md:"0px"},bg:Object(k.d)("gray.900","gray.700"),children:[Object(z.jsx)(B.a,{visibility:{base:"visible",md:"hidden"},color:Object(k.d)("white","white"),children:Object(z.jsxs)(be.a,{variant:"unstyled",placeholder:"Select option",color:Object(k.d)("white","white"),w:{base:"200px",md:"0px"},onChange:function(e){return y(e.target.value)},children:[Object(z.jsx)("option",{visibility:{base:"visible",md:"hidden"},value:"hin",children:"Hindi"}),Object(z.jsx)("option",{selected:"selected",visibility:{base:"visible",md:"hidden"},value:"eng",defaultValue:!0,children:"English"}),Object(z.jsx)("option",{visibility:{base:"visible",md:"hidden"},value:"mar",children:"Marathi"})]})}),Object(z.jsxs)(de.a,{returnFocusOnClose:!1,isOpen:H,onClose:function(){return T(!1)},placement:"auto-start",closeOnBlur:!0,preventOverflow:!0,visibility:{base:"hidden",md:"visible"},children:[Object(z.jsx)(de.g,{children:Object(z.jsx)(je.a,{defaultValue:"eng",color:Object(k.d)("white"),w:{base:"0",md:"100%"},visibility:{base:"hidden",md:"visible"},children:Object(z.jsxs)(f.a,{direction:{md:"row"},children:[Object(z.jsx)(ue.a,{justifyContent:"center",colorScheme:"green",w:{base:"0%",md:"33.3333%"},value:"eng",onChange:function(e){return y(e.target.value)},children:"English"}),Object(z.jsx)(ue.a,{w:"33.3333%",colorScheme:"green",justifyContent:"center",value:"hin",onChange:function(e){return y(e.target.value)},children:"Hindi"}),Object(z.jsx)(ue.a,{w:"33.3333%",justifyContent:"center",colorScheme:"green",value:"mar",onChange:function(e){return y(e.target.value)},children:"Marathi"})]})})}),Object(z.jsxs)(de.e,{children:[Object(z.jsxs)(de.f,{fontWeight:"semibold",children:["Hey ",$&&$.email]}),Object(z.jsx)(de.b,{}),Object(z.jsx)(de.d,{}),Object(z.jsx)(de.c,{children:"Select the Language that File cantains!"})]})]})]})]}),Object(z.jsxs)(f.a,{py:"2",px:{md:"2"},w:"100%",boxShadow:"dark-lg",borderRadius:"20px",bg:Object(k.d)("white","black"),position:"relative",children:[Object(z.jsx)(B.a,{h:{base:"250px",md:"480px"},overflowY:"auto",css:{"&::-webkit-scrollbar":{backgroundColor:Object(k.d)("gray","black"),borderRadius:"10px",width:"8px"},"&::-webkit-scrollbar-track":{shadow:"inset 0 0 6px rgba(0,0,0,0.3)",borderRadius:"10px",backgroundColor:Object(k.d)("gray.900","gray")},"&::-webkit-scrollbar-thumb":{borderRadius:"10px",shadow:"inset 0 0 6px rgba(0,0,0,0.3)",backgroundColor:Object(k.d)("black","white")}},children:Object(z.jsx)(S.a,{fontSize:{base:"13px",md:"18px"},p:4,children:u})}),Object(z.jsx)(B.a,{onClick:function(){return""===u?N({position:"top",title:"Nothing to Download",status:"error",duration:9e3,isClosable:!0}):function(){var e=new he.a;e.text(u,20,20),e.save("OCR-APP_Result.pdf"),N({position:"top",title:"Downloaded",status:"success",duration:9e3,isClosable:!0})}()},cursor:"pointer",boxShadow:"dark-lg",as:B.b,position:"absolute",bottom:{base:"-50px",md:"5px"},right:{base:"60px",md:"-60px"},size:{base:"45px",md:"50px"},bg:Object(k.d)("gray.900","gray.700"),color:"white",children:Object(z.jsx)(se.a,{fontSize:"25px",as:xe.c})}),Object(z.jsx)(B.a,{onClick:function(){return""===u?N({position:"top",title:"Nothing to Copy",status:"error",duration:9e3,isClosable:!0}):(navigator.clipboard.writeText(u),N({position:"top",title:"Copied",status:"success",duration:9e3,isClosable:!0}))},cursor:"pointer",boxShadow:"dark-lg",as:B.b,position:"absolute",bottom:{base:"-50px",md:"80px"},right:{base:"0px",md:"-60px"},size:{base:"45px",md:"50px"},bg:Object(k.d)("gray.900","gray.700"),color:"white",children:Object(z.jsx)(se.a,{fontSize:"20px",as:xe.b})}),$&&Object(z.jsxs)(de.a,{returnFocusOnClose:!1,isOpen:U,onClose:function(){return L(!1)},placement:"auto-end",closeOnBlur:!1,preventOverflow:!0,visibility:{base:"hidden",md:"visible"},children:[Object(z.jsx)(de.g,{children:Object(z.jsx)(B.a,{onClick:r,ref:c,cursor:"pointer",boxShadow:"dark-lg",as:B.b,position:"absolute",bottom:{base:"-50px",md:"155px"},right:{base:"120px",md:"-60px"},size:{base:"45px",md:"50px"},bg:ee,color:"white",children:Object(z.jsx)(se.a,{fontSize:"20px",as:xe.d})})}),Object(z.jsxs)(de.e,{children:[Object(z.jsxs)(de.f,{fontWeight:"semibold",children:["Hey ",$.email]}),Object(z.jsx)(de.b,{}),Object(z.jsx)(de.d,{}),Object(z.jsx)(de.c,{children:"Check your OCR History Here!"})]})]})]})]})]})},me=r(153);function ge(e){var t=e.component,r=Object(me.a)(e,["component"]),a=G().currentUser;return Object(z.jsx)(U.b,Object(u.a)(Object(u.a)({},r),{},{render:function(e){return a?Object(z.jsx)(t,Object(u.a)({},e)):Object(z.jsx)(U.a,{to:"/login"})}}))}var fe=r(247);function we(){var e=Object(n.useRef)(),t=G().forgotPassword,r=Object(n.useState)(""),a=Object(j.a)(r,2),c=a[0],s=a[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),l=i[0],b=i[1],d=Object(n.useState)(!1),u=Object(j.a)(d,2),x=u[0],p=u[1];function h(e){return O.apply(this,arguments)}function O(){return(O=Object(E.a)(A.a.mark((function r(a){return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),r.prev=1,s(""),b(""),p(!0),r.next=7,t(e.current.value);case 7:b("Check Your Email for Reset Link"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),s("Email is Wrong!");case 13:p(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(z.jsxs)(B.a,{maxW:{base:"90%",md:"450px"},mx:"auto",children:[Object(z.jsx)(w.a,{textAlign:"center",fontSize:{base:"30px",md:"40px"},fontWeight:"extrabold",children:"Forgot Password"}),Object(z.jsx)(fe.a,{as:g.b,to:"/signup",style:{textDecoration:"none"},children:Object(z.jsxs)(S.a,{mt:"2",mb:"5",fontSize:{base:"sm",md:"18px"},align:"center",maxW:"100%",fontWeight:"medium",color:Object(k.d)("blue.500","blue.200"),children:[" ","Don't have an account?"," "]})}),Object(z.jsx)(V,{boxShadow:"dark-lg",children:Object(z.jsx)(J.a.form,{onSubmit:h,children:Object(z.jsxs)(N.a,{spacing:"4",children:[c&&Object(z.jsxs)(_.a,{status:"error",rounded:{sm:"lg"},children:[Object(z.jsx)(_.c,{}),c]}),l&&Object(z.jsxs)(_.a,{status:"success",children:[Object(z.jsx)(_.c,{}),l]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Email address"}),Object(z.jsx)(K.a,{name:"email",type:"email",autoComplete:"email",required:!0,ref:e})]}),Object(z.jsx)(y.a,{type:"submit",colorScheme:"blue",size:"lg",fontSize:"md",onClick:h,disabled:x,children:"Reset Password"})," "]})})})]})}function ve(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),a=G(),c=a.currentUser,s=a.updatePassword,o=a.updateEmail,i=Object(n.useState)(""),l=Object(j.a)(i,2),b=l[0],d=l[1],u=Object(n.useState)(!1),x=Object(j.a)(u,2),p=x[0],h=x[1],O=Object(U.g)();function m(a){if(a.preventDefault(),t.current.value!==r.current.value)return d("Passwords do not match");var n=[];h(!0),d(""),e.current.value!==c.email&&n.push(o(e.current.value)),t.current.value&&n.push(s(t.current.value)),Promise.all(n).then((function(){O.push("/")})).catch((function(){d("Failed to update account")})).finally((function(){h(!1)}))}return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(B.a,{maxW:{base:"90%",md:"450px"},mx:"auto",children:[Object(z.jsx)(w.a,{textAlign:"center",fontSize:{base:"30px",md:"40px"},mb:10,fontWeight:"extrabold",children:"Update Profile"}),Object(z.jsx)(V,{children:Object(z.jsx)(J.a.form,{onSubmit:m,children:Object(z.jsxs)(N.a,{spacing:"3",children:[b&&Object(z.jsxs)(_.a,{status:"error",children:[Object(z.jsx)(_.c,{}),b]}),c&&Object(z.jsxs)(_.a,{status:"success",children:[Object(z.jsx)(_.c,{}),c.email]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Email address"}),Object(z.jsx)(K.a,{name:"email",type:"email",autoComplete:"email",required:!0,placeholder:c.email,ref:e})]}),Object(z.jsxs)(B.a,{children:[Object(z.jsxs)(f.a,{children:[Object(z.jsx)(B.a,{children:Object(z.jsx)(Y.a,{children:" Password "})}),Object(z.jsx)(v.a,{})]}),Object(z.jsx)(K.a,{name:"password",type:"password",ref:t,autoComplete:"password",required:!0,style:{marginBottom:"10px"}})]}),Object(z.jsxs)(B.a,{children:[Object(z.jsx)(Y.a,{children:"Re-enter Password"}),Object(z.jsx)(K.a,{name:"password",type:"password",ref:r,autoComplete:"password",required:!0})]}),Object(z.jsx)(y.a,{type:"submit",colorScheme:"blue",size:"lg",fontSize:"md",onClick:m,disabled:p,children:"Update Profile"})]})})})]})})}var ye=function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{children:"404 page not found"}),Object(z.jsx)("p",{children:"We are sorry but the page you are looking for does not exist."}),Object(z.jsx)(fe.a,{as:g.b,to:"/",children:Object(z.jsx)(w.a,{children:"Login or Signup"})})]})};var Se=function(){var e=Object(b.a)({components:{Button:{baseStyle:{_focus:{boxShadow:"none"}}}}});return Object(z.jsx)(H,{children:Object(z.jsx)(d.a,{theme:e,children:Object(z.jsxs)(g.a,{children:[Object(z.jsx)(I,{}),Object(z.jsxs)(U.d,{children:[Object(z.jsx)(U.b,{path:"/login",component:X}),Object(z.jsx)(U.b,{path:"/signup",component:ee}),Object(z.jsx)(U.b,{path:"/forgot-password",component:we}),Object(z.jsx)(ge,{exact:!0,path:"/update-profile",component:ve}),Object(z.jsx)(U.b,{exact:!0,path:"/",component:Oe}),Object(z.jsx)(U.b,{component:ye})]})]})})})};o.a.render(Object(z.jsxs)(n.StrictMode,{children:[Object(z.jsx)(a.a,{}),Object(z.jsx)(Se,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");i?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(r){var a=r.headers.get("content-type");404===r.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()}},[[206,1,3]]]);
//# sourceMappingURL=main.f45352c5.chunk.js.map