(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4Vuk":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/messages",function(){return a("yBkV")}])},EMrx:function(e,t,a){"use strict";var n=a("MX0m"),s=a.n(n),o=a("q1tI"),r=a.n(o),i=a("/2om"),c=r.a.createElement,l=function(){return c(r.a.Fragment,null,c("nav",{className:"jsx-1101390918"},c("ul",{className:"jsx-1101390918"},c(i.a,{label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/admin"}),c(i.a,{label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",path:"/admin/messages"}),c(i.a,{label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",path:"/admin/settings"}),c(i.a,{label:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0440\u0430\u0437\u0434\u0435\u043b",path:"/"}))),c(s.a,{id:"1101390918"},["nav.jsx-1101390918{width:240px;position:fixed;display:block;}"]))},u=a("Ftyu"),p=r.a.createElement,d=function(e){var t=e.content,a=Object(u.a)(t);return p(r.a.Fragment,null,p("div",{id:"main",className:"jsx-1094597559"},p(l,null),p(a,{className:"jsx-1094597559"})),p(s.a,{id:"1094597559"},["@import url('https://fonts.googleapis.com/css?family=Alegreya:400,700|Bad+Script&display=swap');","*{box-sizing:border-box;}","html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;}","article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}","body{line-height:1.2;}","table{border-collapse:collapse;border-spacing:0;}","ol{padding-left:1.4em;list-style:decimal;}","ul{padding-left:0;list-style:square;}","blockquote,q{quotes:none;}","blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}",".content,.photo,.message,.buttonOk,.form_message,.upPage,.downPage{border:1px solid black;border-radius:5px;box-shadow:3px 3px 5px black;}","html{font-family:'Alegreya',serif;line-height:30px;font-size:20px;}","p{margin-top:10px;margin-bottom:10px;font-size:16px;}","h1{margin-top:50px;font-size:28px;}","h2{font-size:20px;}","#main{width:960px;margin:0 auto;}"]))};d.defaultProps={content:null};t.a=d},yBkV:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a("q1tI"),s=a.n(n),o=a("EMrx"),r=a("rePB"),i=a("MX0m"),c=a.n(i),l=a("o0Vf"),u=s.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={curentPage:1,messages:[],countPage:1,countMessagesOnePage:0},g=function(e,t){switch(t.type){case"GET_MESSAGE_FROM_SERVER":return d({},t.value);case"SET_CURENT_PAGE":default:return d({},e)}},b=function(){var e=Object(n.useReducer)(g,m),t=e[0],a=e[1],o=function(e){Object(l.a)("/getmessages",{numberPage:e-1}).subscribe((function(t){if(200===t.status){var n=JSON.parse(t.response),s=n.count/n.countMessagesOnePage;a({type:"GET_MESSAGE_FROM_SERVER",value:{countPage:s>Math.floor(s)?Math.floor(s)+1:Math.floor(s),countMessagesOnePage:n.countMessagesOnePage,messages:n.messages,curentPage:e}})}}),(function(){}))};Object(n.useEffect)((function(){o(1)}),[]);var r=t.curentPage===t.countPage?null:u("div",{className:"btnFlip",onClick:function(){o(t.curentPage+1)}},"+"),i=1===t.curentPage?null:u("div",{className:"btnFlip",onClick:function(){o(t.curentPage-1)}},"-");return u(s.a.Fragment,null,u("h1",{className:"jsx-641027354"},"\u0412\u0441\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),u("div",{className:"jsx-641027354 flipper"},u("p",{className:"jsx-641027354"},i,u("input",{type:"text",value:t.curentPage,onChange:function(e){var t=e.target.value;o(t)},className:"jsx-641027354"})," ","/"," ",t.countPage,r)),u("table",{className:"jsx-641027354 tebleMessages"},u("tr",{className:"jsx-641027354"},u("th",{className:"jsx-641027354"},"\u0410\u0432\u0442\u043e\u0440"),u("th",{className:"jsx-641027354"},"\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"),u("th",{className:"jsx-641027354"},"\u0414\u0430\u0442\u0430")),t.messages.map((function(e){return u("tr",{onClick:function(){},className:"jsx-641027354 "+((e.readed?"":"noReaded")||"")},u("td",{className:"jsx-641027354"},e.autor),u("td",{className:"jsx-641027354"},e.adress),u("td",{className:"jsx-641027354"},e.date,u("div",{onClick:function(){},idMessage:e.id,className:"jsx-641027354 ButtonDelete"})))}))),u(c.a,{id:"641027354"},["btnFlip.jsx-641027354{display:inline-block;background:#65e841;width:22px;height:22px;margin:0 10px 0 10px;}","input.jsx-641027354{width:40px;}"]))},f=s.a.createElement;function h(){return f(o.a,{content:b})}}},[["4Vuk",0,1,2,3,4]]]);