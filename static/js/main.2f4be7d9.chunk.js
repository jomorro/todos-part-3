(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},34:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),c=a.n(r),l=(a(32),a(6)),i=a(7),s=a(10),u=a(8),d=a(11),m=(a(34),a(44)),p=a(46),h=a(9),E=function(e){return{type:"ADD_TODO",text:e}},f=function(e){return{type:"MARK_COMPLETE",id:e}},O=function(e){return{type:"DELETE_TODO",id:e}},b=function(){return{type:"CLEAR_COMPLETED"}},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).markComplete=function(e){return function(t){a.props.dispatch(f(e))}},a.deleteTodo=function(e){return function(){a.props.dispatch(O(e))}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{id:"list",className:this.props.checked?"completed":""},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",onChange:this.markComplete(this.props.id),checked:this.props.checked}),o.a.createElement("label",null,this.props.value),o.a.createElement("button",{className:"destroy",onClick:this.deleteTodo(this.props.id)}))))}}]),t}(o.a.Component),v=Object(p.a)(Object(h.b)(function(e){return{todos:e.todos}})(j)),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"todo-list"},this.props.todos.map(function(e,t){return o.a.createElement(v,{key:e.id,id:e.id,value:e.title,checked:e.completed})})))}}]),t}(o.a.Component),w=a(47),y=a(43),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={text:""},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.text.length&&(a.setState(function(){return{text:""}}),a.props.dispatch(E(a.state.text)),document.getElementById("inputField").value="")},a.destroyAll=function(){a.props.dispatch(b())},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.filter(function(e){return!e.completed}),a=this.props.todos.filter(function(e){return e.completed});return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{id:"inputField",placeholder:"What needs to be done?",className:"new-todo",onChange:this.handleChange,autoFocus:!0}))),o.a.createElement("section",{className:"main"},o.a.createElement(w.a,null,o.a.createElement(y.a,{exact:!0,path:"/todos-part-3/home",render:function(t){return o.a.createElement(g,Object.assign({},t,{todos:e.props.todos}))}}),o.a.createElement(y.a,{path:"/todos-part-3/active",render:function(e){return o.a.createElement(g,Object.assign({},e,{todos:t}))}}),o.a.createElement(y.a,{path:"/todos-part-3/completed",render:function(e){return o.a.createElement(g,Object.assign({},e,{todos:a}))}}))),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},o.a.createElement("strong",null,t.length)," item(s) left"),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(m.a,{to:"/todos-part-3/home"}," All")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/todos-part-3/active"}," Active")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/todos-part-3/completed"}," Completed"))),o.a.createElement("button",{className:"clear-completed",onClick:this.destroyAll},"Clear completed"))))}}]),t}(n.Component),T=Object(p.a)(Object(h.b)(function(e){return{todos:e.todos}})(C));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(45),D=a(13),N=a(12),_=a(5),A={todos:a(26)},x=Object(D.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(_.a)({},e,{todos:Object(N.a)(e.todos).concat([{userId:1,id:e.todos.length+1,title:t.text,completed:!1}])});case"MARK_COMPLETE":return Object(_.a)({},e,{todos:Object(N.a)(e.todos.map(function(e){return e.id===t.id?Object(_.a)({},e,{completed:!e.completed}):e}))});case"DELETE_TODO":return Object(_.a)({},e,{todos:Object(N.a)(e.todos.filter(function(e){return e.id!==t.id}))});case"CLEAR_COMPLETED":case"ACTIVE":return Object(_.a)({},e,{todos:Object(N.a)(e.todos.filter(function(e){return!1===e.completed}))});default:return e}},window._REDUX_DEVTOOLS_EXTENTION_&&window._REDUX_DEVTOOLS_EXTENTION_());c.a.render(o.a.createElement(k.a,null,o.a.createElement(h.a,{store:x},o.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.2f4be7d9.chunk.js.map