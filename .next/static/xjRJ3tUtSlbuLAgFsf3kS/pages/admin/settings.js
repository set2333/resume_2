(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0qRy":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t("q1tI"),s=t.n(n),r=t("EMrx"),i=t("rePB"),o=t("MX0m"),l=t.n(o),c=t("WGsy"),u=t("o0Vf"),m=s.a.createElement;function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var g=function(e,a){switch(a.type){case"INITIAL":return a.value;case"SET_STATE":return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},e,{},a.value);default:throw new Error("\u041d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0438\u043f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f")}},d=function(){var e=Object(n.useReducer)(g,{}),a=e[0],t=e[1];Object(n.useEffect)((function(){Object(u.a)("/getsettings").subscribe((function(e){var a=e.response;t({type:"INITIAL",value:a})}))}),[]);return m(s.a.Fragment,null,m("div",{className:"jsx-3295443900 form_message"},m("form",{className:"jsx-3295443900"},m("h3",{className:"jsx-3295443900"},"\u041b\u043e\u0433\u0438\u043d \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"," ",m("input",{name:"login",type:"text",value:a.login,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{login:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u041f\u0430\u0440\u043e\u043b\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"," ",m("input",{name:"pass",type:"password",value:a.pass,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{pass:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u0421\u043e\u043e\u0431\u0449\u0430\u0442\u044c \u043e \u0432\u0445\u043e\u0434\u0435 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430 \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"," ",m("input",{name:"sendAdmLogin",type:"checkbox",checked:a.sendAdmLogin,onChange:function(e){var a=e.target.checked;return t({type:"SET_STATE",value:{sendAdmLogin:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"," ",m("input",{name:"countMessagesOnePage",type:"text",value:a.countMessagesOnePage,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{countMessagesOnePage:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0430 email"," ",m("input",{name:"sendmail",type:"checkbox",checked:a.sendmail,onChange:function(e){var a=e.target.checked;return t({type:"SET_STATE",value:{sendmail:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0447\u0442\u044b"," ",m("input",{name:"emaillogin",type:"text",value:a.emaillogin,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{emaillogin:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u0447\u0442\u044b"," ",m("input",{name:"emailpass",type:"password",value:a.emailpass,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{emailpass:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u0421\u0435\u0440\u0432\u0435\u0440 \u043f\u043e\u0447\u0442\u044b"," ",m("input",{name:"emailhost",type:"text",value:a.emailhost,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{emailhost:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u041f\u043e\u0440\u0442 \u043f\u043e\u0447\u0442\u044b"," ",m("input",{name:"emailport",type:"text",value:a.emailport,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{emailport:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"," ",m("input",{name:"emailsecure",type:"checkbox",checked:a.emailsecure,onChange:function(e){var a=e.target.checked;return t({type:"SET_STATE",value:{emailsecure:a}})},className:"jsx-3295443900"})),m("h3",{className:"jsx-3295443900"},"\u0410\u0434\u0440\u0435\u0441 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0447\u0442\u044b"," ",m("input",{name:"email",type:"text",value:a.email,onChange:function(e){var a=e.target.value;return t({type:"SET_STATE",value:{email:a}})},className:"jsx-3295443900"})),m(c.a,{onClick:function(){var e={admin:{login:a.login,pass:a.pass||void 0},email:{user:a.emaillogin,pass:a.emailpass||void 0,host:a.emailhost,port:a.emailport,secure:a.emailsecure,mail:a.email,sendmail:a.sendmail},settings:{sendAdmLogin:a.sendAdmLogin,countMessagesOnePage:+a.countMessagesOnePage}};Object(u.a)("/setsettings",e).subscribe((function(e){return console.log(e.status)}))}}))),m(l.a,{id:"3295443900"},[".form_message.jsx-3295443900{width:100%;margin-top:20px;margin-bottom:20px;background:#65e841;}",".form_message.jsx-3295443900 textarea.jsx-3295443900{width:90%;height:100px;}",".form_message.jsx-3295443900 h3.jsx-3295443900{text-align:left;padding:10px 30px;}",".form_message.jsx-3295443900 input.jsx-3295443900{margin-left:10px;}"]))},f=s.a.createElement,h=function(){return f(s.a.Fragment,null,f("h1",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),f(d,null))},x=s.a.createElement;function b(){return x(r.a,{content:h})}},E3iC:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/settings",function(){return t("0qRy")}])},EMrx:function(e,a,t){"use strict";var n=t("MX0m"),s=t.n(n),r=t("q1tI"),i=t.n(r),o=t("/2om"),l=i.a.createElement,c=function(){return l(i.a.Fragment,null,l("nav",{className:"jsx-1101390918"},l("ul",{className:"jsx-1101390918"},l(o.a,{label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/admin"}),l(o.a,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",path:"/admin/messages"}),l(o.a,{label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",path:"/admin/settings"}),l(o.a,{label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0430\u0437\u0434\u0435\u043b",path:"/"}))),l(s.a,{id:"1101390918"},["nav.jsx-1101390918{width:240px;position:fixed;display:block;}"]))},u=t("Ftyu"),m=i.a.createElement,p=function(e){var a=e.content,t=Object(u.a)(a);return m(i.a.Fragment,null,m("div",{id:"main",className:"jsx-1094597559"},m(c,null),m(t,{className:"jsx-1094597559"})),m(s.a,{id:"1094597559"},["@import url('https://fonts.googleapis.com/css?family=Alegreya:400,700|Bad+Script&display=swap');","*{box-sizing:border-box;}","html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}","article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}","body{line-height:1.2;}","table{border-collapse:collapse;border-spacing:0;}","ol{padding-left:1.4em;list-style:decimal;}","ul{padding-left:0;list-style:square;}","blockquote,q{quotes:none;}","blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}",".content,.photo,.message,.buttonOk,.form_message,.upPage,.downPage{border:1px solid black;border-radius:5px;box-shadow:3px 3px 5px black;}","html{font-family:'Alegreya',serif;line-height:30px;font-size:20px;}","p{margin-top:10px;margin-bottom:10px;font-size:16px;}","h1{margin-top:50px;font-size:28px;}","h2{font-size:20px;}","#main{width:960px;margin:0 auto;}"]))};p.defaultProps={content:null};a.a=p}},[["E3iC",0,1,2,3,4]]]);