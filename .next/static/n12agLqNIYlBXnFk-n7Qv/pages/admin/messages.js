(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Vuk":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/messages",function(){return n("yBkV")}])},EMrx:function(e,t,n){"use strict";var a=n("MX0m"),o=n.n(a),r=n("q1tI"),s=n.n(r),i=n("/2om"),l=s.a.createElement,c=function(){return l(s.a.Fragment,null,l("nav",{className:"jsx-1101390918"},l("ul",{className:"jsx-1101390918"},l(i.a,{label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/admin"}),l(i.a,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",path:"/admin/messages"}),l(i.a,{label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",path:"/admin/settings"}),l(i.a,{label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0430\u0437\u0434\u0435\u043b",path:"/"}))),l(o.a,{id:"1101390918"},["nav.jsx-1101390918{width:240px;position:fixed;display:block;}"]))},u=n("Ftyu"),d=s.a.createElement,p=function(e){var t=e.content,n=Object(u.a)(t);return d(s.a.Fragment,null,d("div",{id:"main",className:"jsx-1094597559"},d(c,null),d(n,{className:"jsx-1094597559"})),d(o.a,{id:"1094597559"},["@import url('https://fonts.googleapis.com/css?family=Alegreya:400,700|Bad+Script&display=swap');","*{box-sizing:border-box;}","html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}","article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}","body{line-height:1.2;}","table{border-collapse:collapse;border-spacing:0;}","ol{padding-left:1.4em;list-style:decimal;}","ul{padding-left:0;list-style:square;}","blockquote,q{quotes:none;}","blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}",".content,.photo,.message,.buttonOk,.form_message,.upPage,.downPage{border:1px solid black;border-radius:5px;box-shadow:3px 3px 5px black;}","html{font-family:'Alegreya',serif;line-height:30px;font-size:20px;}","p{margin-top:10px;margin-bottom:10px;font-size:16px;}","h1{margin-top:50px;font-size:28px;}","h2{font-size:20px;}","#main{width:960px;margin:0 auto;}"]))};p.defaultProps={content:null};t.a=p},yBkV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("q1tI"),o=n.n(a),r=n("EMrx"),s=n("rePB"),i=n("o0Vf"),l=o.a.createElement;function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={curentPage:1,messages:[],countPage:1,countMessagesOnePage:0},p=function(e,t){switch(t.type){case"GET_MESSAGE_FROM_SERVER":return u({},t.value);case"SET_CURENT_PAGE":default:return u({},e)}},g=function(){var e=Object(a.useReducer)(p,d),t=e[0],n=e[1],r=t.curentPage==t.countPage?null:l("div",{className:"upPage",onClick:function(){}},"+"),s=1==t.curentPage?null:l("div",{className:"downPage",onClick:function(){}},"-");return l(o.a.Fragment,null,l("button",{onClick:function(){Object(i.a)("/getmessages",{numberPage:t.curentPage}).subscribe((function(e){var t=e.response;if(200===t.status){var a=JSON.parse(t);n({type:"GET_MESSAGE_FROM_SERVER",value:{countPage:a.count,countMessagesOnePage:a.countMessagesOnePage,messages:a.messages}})}}),(function(){}))}},"GET"),l("h1",null,"\u0412\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),l("div",{className:"flipper"},l("p",null,s,l("input",{type:"text",value:t.curentPage,onChange:function(e){e.target.value}})," ","/"," ",t.countPage,r),l("table",{className:"tebleMessages"},l("tr",null,l("th",null,"\u0410\u0432\u0442\u043e\u0440"),l("th",null,"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"),l("th",null,"\u0414\u0430\u0442\u0430")),t.messages.map((function(e){return l("tr",{className:e.readed?"":"noReaded",onClick:function(){}},l("td",null,e.autor),l("td",null,e.adress),l("td",null,e.date,l("div",{className:"ButtonDelete",onClick:function(){},idMessage:e.id})))})))))},m=o.a.createElement;function b(){return m(r.a,{content:g})}}},[["4Vuk",0,1,2,3,4]]]);