(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(24),n(2)),s=n(3),u=n(5),l=n(4),h=n(6),d=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},b=function(e){var t=e.robots;return a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(d,{key:e.id,name:e.name,email:e.email,id:e.id})}))},m=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search",onChange:t}))},p=a.a.memo(function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)}),E=(n(25),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Error"):this.props.children}}]),t}(r.Component)),f=n(10),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return console.log("counter"),a.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(r.PureComponent),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("header"),a.a.createElement("div",null,a.a.createElement(g,{color:"red"})," ",a.a.createElement("h1",{className:"f1"},"RoboFriends"))}}]),t}(r.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(O,null),a.a.createElement(m,{searchChange:n}),a.a.createElement(p,null,a.a.createElement(E,null,a.a.createElement(b,{robots:c}))))}}]),t}(r.Component),j=Object(f.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("http://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(v),y=n(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(30);var C={searchField:""},R={isPending:!1,robots:[],error:""},S=n(17),w=n(18),_=(Object(S.createLogger)(),Object(y.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),k=Object(y.d)(_,Object(y.a)(w.a));c.a.render(a.a.createElement(f.a,{store:k},a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.c1d6a899.chunk.js.map