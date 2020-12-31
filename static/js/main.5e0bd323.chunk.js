(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{157:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a(12),i=a.n(r),s=a(32),l=a(13),j=a(40),o=a(41),d=a(46),h=a(45),x=a(212),u=a(197),b=a(229),O=a(200),p=a(213),m=a(108),f=a(214),v=a(215),y=a(216),g=a(217),_=a(218),w=a(19),S=a(37),C=a(193),E=a(196),N=a(198),L=a(199),T=a(57),A=a(231),k=a(202),P=a(203),R=a(204),I=a(205),D=a(206),F=a(21),H=a.n(F),G=a(47),M=a(99),W=a.n(M).a.create({headers:{"content-type":"application/json","x-access-token":localStorage.getItem("token")},baseURL:"https://football-games-record.glitch.me/api/v1"}),B={FETCH_PLAYERS:"FETCH_PLAYERS",FETCH_MATCHES:"FETCH_MATCHES",NEW_MATCH:"NEW_MATCH",LOGIN_CHECK:"LOGIN_CHECK",LOGOUT:"LOGOUT",SET_APP_STATUS_OFFLINE:"SET_APP_STATUS_OFFLINE",SET_APP_STATUS_LOADING:"SET_APP_STATUS_LOADING",LOGIN:"LOGIN",NEW_PLAYER:"NEW_PLAYER",EDIT_PLAYER:"EDIT_PLAYER",DELETE_PLAYER:"DELETE_PLAYER"},Y=function(){var e=Object(G.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/player");case 2:return a=e.sent,t({type:B.FETCH_PLAYERS,payload:a.data.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(G.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("/match");case 2:return a=e.sent,t({type:B.FETCH_MATCHES,payload:a.data.data}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){var t=!!localStorage.getItem("token");e({type:B.LOGIN_CHECK,payload:{isLoggedin:t}})},q=function(e){localStorage.removeItem("token"),e({type:B.LOGOUT})},J=function(e,t){return function(a){a({type:e,payload:t})}},V=function(e){return function(){var t=Object(G.a)(H.a.mark((function t(a){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.delete("/player/".concat(e._id));case 2:return n=t.sent,a({type:B.DELETE_PLAYER,payload:e}),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e){var t=e.team_a,a=e.team_b;return function(){var e=Object(G.a)(H.a.mark((function e(n){var c,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/match/new",{team_a:t,team_b:a});case 2:return e.next=4,W.get("/match");case 4:return c=e.sent,n({type:B.FETCH_MATCHES,payload:c.data.data}),e.next=8,W.get("/player");case 8:return r=e.sent,n({type:B.FETCH_PLAYERS,payload:r.data.data}),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var z=Object(w.b)((function(e){return{auth:e.auth}}))(Object(l.withRouter)((function(e){var t=Object(c.useState)(!1),a=Object(S.a)(t,2),r=a[0],i=a[1],s=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(e)}};return Object(n.jsxs)(C.a,{position:"fixed",color:"secondary",children:[Object(n.jsx)(E.a,{children:Object(n.jsxs)(u.a,{container:!0,alignItems:"center",children:[Object(n.jsxs)(u.a,{item:!0,xs:2,children:[Object(n.jsx)("span",{hidden:"/"===e.location.pathname,children:Object(n.jsx)(N.a,{color:"inherit",onClick:function(){return e.history.length<3?e.history.push("/"):e.history.goBack()},children:Object(n.jsx)(L.a,{color:"inherit",children:"west"})})}),Object(n.jsx)("span",{hidden:"/"!==e.location.pathname,children:Object(n.jsx)(N.a,{color:"inherit",onClick:function(){return i(!0)},children:Object(n.jsx)(L.a,{color:"inherit",children:"menu"})})})]}),Object(n.jsx)(u.a,{container:!0,className:"text-center",alignContent:"center",xs:8,item:!0,children:Object(n.jsx)(T.a,{variant:"h6",children:e.title?e.title:"Koora"})}),Object(n.jsxs)(u.a,{xs:2,item:!0,container:!0,justify:"flex-end",children:[Object(n.jsx)("div",{hidden:e.auth.isLoggedin,children:Object(n.jsx)(O.a,{color:"inherit",onClick:function(){return e.history.push("/login")},children:"Login"})}),Object(n.jsx)("div",{hidden:!e.auth.isLoggedin,children:Object(n.jsx)(O.a,{color:"inherit",onClick:function(){e.dispatch(q)},children:"Logout"})})]})]})}),Object(n.jsx)(A.a,{anchor:"left",open:r,onClose:s(!1),onOpen:s(!0),children:Object(n.jsxs)("div",{role:"presentation",style:{width:250},onClick:s(!1),onKeyDown:s(!1),children:[Object(n.jsx)(k.a,{children:[{text:"Home",icon:"home",path:"/"},{text:"Matches",icon:"sports_soccer",path:"/matches"},{text:"Players",icon:"supervisor_account",path:"/players"}].map((function(t,a){return Object(n.jsxs)(P.a,{button:!0,onClick:function(){return e.history.push(t.path)},children:[Object(n.jsx)(R.a,{children:Object(n.jsx)(L.a,{children:t.icon})}),Object(n.jsx)(I.a,{primary:t.text})]},a)}))}),Object(n.jsx)(D.a,{})]})})]})}))),Q=a(210),X=a(233),Z=a(207),ee=a(208),te=a(209),ae=a(38),ne=a.n(ae),ce=a(28),re=Object(Z.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]},purple:{color:e.palette.getContrastText(te.a[500]),backgroundColor:te.a[500]}}}));var ie=Object(ce.withRouter)((function(e){var t,a,c,r,i=e.matchData,s=re();return Object(n.jsx)(b.a,{mt:4,children:Object(n.jsx)(Q.a,{onClick:function(){return e.history.push("/matches/view/".concat(null===i||void 0===i?void 0:i._id))},children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:3,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:4,children:[Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(X.a,{className:"avatar-x2 ".concat(s.orange),children:"A"})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"center",children:Object(n.jsx)(u.a,{item:!0,children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("div",{className:"result",children:null===i||void 0===i||null===(t=i.team_a)||void 0===t?void 0:t.goal_counts}),Object(n.jsx)("div",{className:"result",children:"-"}),Object(n.jsx)("div",{className:"result",children:null===i||void 0===i||null===(a=i.team_b)||void 0===a?void 0:a.goal_counts})]})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-start",children:Object(n.jsx)(X.a,{className:"avatar-x2 ".concat(s.purple),children:"B"})})})]})}),Object(n.jsx)(b.a,{mt:1,children:Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("h4",{className:"text-center",children:new Date(null===i||void 0===i?void 0:i.time).toDateString()})})}),Object(n.jsx)(b.a,{my:2,children:Object(n.jsx)(D.a,{})}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:null===i||void 0===i||null===(c=i.team_a)||void 0===c?void 0:c.goals.map((function(e){var t;return Object(n.jsxs)("h4",{children:["".concat(null===(t=e.player)||void 0===t?void 0:t.name,"  "),"(",Array(e.count).fill(ne()("\u26bd"))," )"]},e._id)}))}),Object(n.jsx)(u.a,{xs:6,item:!0,className:"text-right",children:null===i||void 0===i||null===(r=i.team_b)||void 0===r?void 0:r.goals.map((function(e){var t;return Object(n.jsxs)("h4",{children:["".concat(null===(t=e.player)||void 0===t?void 0:t.name," "),"("," ",Array(e.count).fill(ne()("\u26bd"))," )"]},e._id)}))})]})]})})})})})),se=a(211);function le(e){return Object(n.jsx)(b.a,{mt:4,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:3,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:4,children:[Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(se.a,{variant:"circle",className:"avatar-x2"})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"center",children:Object(n.jsx)(u.a,{item:!0,children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("div",{className:"result",children:Object(n.jsx)(se.a,{variant:"text"})}),Object(n.jsx)("div",{className:"result",children:"-"}),Object(n.jsx)("div",{className:"result",children:Object(n.jsx)(se.a,{variant:"text"})})]})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-start",children:Object(n.jsx)(se.a,{variant:"circle",className:"avatar-x2"})})})]})}),Object(n.jsx)(b.a,{mt:1,children:Object(n.jsx)(u.a,{item:!0,xs:12,justify:"center",container:!0,children:Object(n.jsx)(u.a,{item:!0,xs:5,children:Object(n.jsx)("h4",{children:Object(n.jsx)(se.a,{variant:"text"})})})})}),Object(n.jsx)(b.a,{my:2,children:Object(n.jsx)(D.a,{})}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:Object(n.jsxs)(u.a,{item:!0,container:!0,md:4,xs:10,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})}),Object(n.jsx)(u.a,{xs:6,item:!0,container:!0,justify:"flex-end",children:Object(n.jsxs)(u.a,{item:!0,container:!0,md:4,xs:10,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})})]})]})})})}var je=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsxs)(b.a,{my:10,children:[Object(n.jsx)("h3",{children:"Last Match"}),this.props.appStatus.isLoading?Object(n.jsx)(le,{}):Object(n.jsx)(ie,{matchData:this.props.lastMatch})]})})}),Object(n.jsx)(u.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(n.jsx)(s.b,{to:"/matches",children:Object(n.jsx)(O.a,{variant:"outlined",type:"link",color:"primary",children:"View All"})})}),Object(n.jsxs)(u.a,{container:!0,justify:"center",children:[Object(n.jsxs)(u.a,{item:!0,md:8,xs:12,children:[Object(n.jsx)(b.a,{mb:4,children:Object(n.jsx)("h3",{children:"Top Players"})}),Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(p.a,{component:m.a,children:Object(n.jsxs)(f.a,{"aria-label":"simple table",children:[Object(n.jsx)(v.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{children:"Name"}),Object(n.jsx)(g.a,{children:"Goals"})]})}),Object(n.jsxs)(_.a,{children:[this.props.appStatus.isLoading?null:this.props.players.map((function(e,t){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{className:"cairo",children:e.name}),Object(n.jsxs)(g.a,{children:[e.goals," ",0===t&&e.goals>5?ne()("\ud83d\udd25\ud83d\udd25"):null]})]},e._id)})),this.props.appStatus.isLoading?[1,2,3,4].map((function(e){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})})]},e)})):null]})]})})})]}),Object(n.jsx)(u.a,{item:!0,container:!0,xs:12,justify:"center",children:Object(n.jsx)(s.b,{to:"/players",children:Object(n.jsx)(O.a,{variant:"outlined",type:"link",color:"primary",children:"View All"})})})]})]})]})}}]),a}(c.Component),oe=Object(w.b)((function(e){return{lastMatch:e.matches[0],players:e.players.slice(0,4),appStatus:e.appStatus}}))(je),de=a(219),he=a(220),xe=a(221),ue=a(222),be=a(223),Oe=a(224),pe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showModal:!1,player:{}},e.deletePlayer=function(){e.props.dispatch(V(e.state.player)),e.toggleModal(!1)},e.toggleModal=function(t){e.setState({showModal:t})},e.setPlayerToDelete=function(t){e.setState({player:t}),e.toggleModal(!0)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"Players"}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsx)(b.a,{my:12,children:Object(n.jsx)(p.a,{component:m.a,children:Object(n.jsxs)(f.a,{"aria-label":"simple table",children:[Object(n.jsx)(v.a,{children:Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{children:"ID"}),Object(n.jsx)(g.a,{children:"Name"}),Object(n.jsx)(g.a,{children:"Goals"}),this.props.auth.isLoggedin?Object(n.jsx)(g.a,{"aria-hidden":"true",children:"Actions"}):null]})}),Object(n.jsxs)(_.a,{children:[this.props.appStatus.isLoading?null:this.props.players.map((function(t,a){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{children:a+1}),Object(n.jsx)(g.a,{className:"cairo",children:t.name}),Object(n.jsx)(g.a,{children:t.goals}),e.props.auth.isLoggedin?Object(n.jsxs)(g.a,{children:[Object(n.jsx)(N.a,{onClick:function(){return e.props.history.push({pathname:"players/edit/".concat(t._id),state:{player:t}})},children:Object(n.jsx)(L.a,{children:"edit"})}),Object(n.jsx)(N.a,{onClick:function(){return e.setPlayerToDelete(t)},children:Object(n.jsx)(L.a,{children:"delete"})})]}):null]},t._id)})),this.props.appStatus.isLoading?[1,2,3,4,5,6,7].map((function(t){return Object(n.jsxs)(y.a,{children:[Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})}),Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})}),e.props.auth.isLoggedin?Object(n.jsx)(g.a,{children:Object(n.jsx)(se.a,{variant:"text"})}):null]},t)})):null]})]})})})})}),Object(n.jsx)("span",{hidden:!this.props.auth.isLoggedin,children:Object(n.jsx)(de.a,{color:"primary",className:"fab",onClick:function(){return e.props.history.push("/players/new")},"aria-label":"add",children:Object(n.jsx)(L.a,{children:"add"})})})]}),Object(n.jsxs)(he.a,{open:this.state.showModal,onClose:function(){return e.toggleModal(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(n.jsx)(xe.a,{id:"alert-dialog-title",children:"Delete player"}),Object(n.jsx)(ue.a,{children:Object(n.jsxs)(be.a,{id:"alert-dialog-description",children:["Are you sure want to delete player ",Object(n.jsx)("b",{children:this.state.player.name})," ?"]})}),Object(n.jsxs)(Oe.a,{children:[Object(n.jsx)(O.a,{onClick:function(){return e.toggleModal(!1)},color:"primary",children:"Cancel"}),Object(n.jsx)(O.a,{onClick:this.deletePlayer,color:"secondary",autoFocus:!0,children:"Delete"})]})]})]})}}]),a}(c.Component),me=Object(w.b)((function(e){return{players:e.players,auth:e.auth,appStatus:e.appStatus}}))(Object(l.withRouter)(pe)),fe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"Matches"}),Object(n.jsx)(x.a,{children:Object(n.jsxs)(b.a,{my:8,children:[this.props.appStatus.isLoading?null:this.props.matches.map((function(e){return Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsx)(ie,{matchData:e})})},e._id)})),this.props.appStatus.isLoading?[1,2,3,4].map((function(e){return Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsx)(b.a,{children:Object(n.jsx)(le,{})})})},e)})):null]})}),Object(n.jsx)("span",{hidden:!this.props.auth.isLoggedin,children:Object(n.jsx)(de.a,{color:"primary",className:"fab",onClick:function(){return e.props.history.push("/matches/new")},"aria-label":"add",children:Object(n.jsx)(L.a,{children:"add"})})})]})}}]),a}(c.Component),ve=Object(w.b)((function(e){return{matches:e.matches,appStatus:e.appStatus,auth:e.auth}}))(Object(ce.withRouter)(fe)),ye=a(20),ge=a(74),_e=a(228),we=a(230),Se=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={teamAPlayers:[],teamBPlayers:[],players:[]},e.setGoals=function(t,a,n){var c=e.state[n].map((function(e){return e._id===a&&(e.goalsCount=t),e}));e.setState(Object(ge.a)({},n,c))},e.submit=function(){var t=e.state,a=t.teamAPlayers,n=t.teamBPlayers,c={players:[],goals:[]},r={players:[],goals:[]};c.players=a.map((function(e){return e._id})),c.goals=a.map((function(e){return e.goalsCount>0?{player:e._id,count:parseInt(e.goalsCount)}:null})).filter((function(e){return!!e})),r.players=n.map((function(e){return e._id})),r.goals=n.map((function(e){return e.goalsCount>0?{player:e._id,count:parseInt(e.goalsCount)}:null})).filter((function(e){return!!e})),e.props.dispatch($({team_a:c,team_b:r})).then((function(t){return e.props.history.goBack()}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"New Match"}),Object(n.jsx)(x.a,{children:Object(n.jsx)(b.a,{my:12,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:3,children:[Object(n.jsx)(u.a,{item:!0,container:!0,xs:12,children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:4,children:[Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(X.a,{className:"avatar-x2 orange",children:"A"})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"center",children:Object(n.jsx)(u.a,{item:!0,children:Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("div",{className:"result",children:"-"})})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-start",children:Object(n.jsx)(X.a,{className:"avatar-x2 purple",children:"B"})})})]})}),Object(n.jsx)(b.a,{my:2,children:Object(n.jsx)(D.a,{})}),Object(n.jsx)(b.a,{px:3,children:Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,justify:"center",children:[Object(n.jsxs)(u.a,{container:!0,xs:12,item:!0,children:[Object(n.jsx)(u.a,{item:!0,xs:12,container:!0,children:Object(n.jsx)(b.a,{mb:3,children:Object(n.jsx)(we.a,{getOptionSelected:function(){},onChange:function(t,a){e.setState({teamAPlayers:a})},multiple:!0,options:this.state.players,getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(n.jsx)(_e.a,Object(ye.a)(Object(ye.a)({},e),{},{label:"Team A Players"}))}})})}),this.state.teamAPlayers.map((function(t){return Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,className:"mb-3",children:[Object(n.jsx)(u.a,{item:!0,xs:8,children:Object(n.jsx)("p",{children:t.name})}),Object(n.jsx)(u.a,{item:!0,xs:4,children:Object(n.jsx)(_e.a,{label:"Goals",value:t.goalsCount,variant:"outlined",onChange:function(a){return e.setGoals(a.target.value,t._id,"teamAPlayers")}})})]},t._id)}))]}),Object(n.jsxs)(u.a,{xs:12,container:!0,item:!0,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(D.a,{})})}),Object(n.jsx)(u.a,{item:!0,xs:12,container:!0,children:Object(n.jsx)(b.a,{mb:3,children:Object(n.jsx)(we.a,{onChange:function(t,a){e.setState({teamBPlayers:a})},multiple:!0,options:this.state.players,getOptionLabel:function(e){return e.name},style:{width:300},renderInput:function(e){return Object(n.jsx)(_e.a,Object(ye.a)(Object(ye.a)({},e),{},{label:"Team B Players"}))}})})}),this.state.teamBPlayers.map((function(t){return Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,className:"mb-3",children:[Object(n.jsx)(u.a,{item:!0,xs:8,children:Object(n.jsx)(b.a,{children:Object(n.jsx)("p",{children:t.name})})}),Object(n.jsx)(u.a,{item:!0,xs:4,children:Object(n.jsx)(_e.a,{label:"Goals",value:t.goalsCount,variant:"outlined",onChange:function(a){return e.setGoals(a.target.value,t._id,"teamBPlayers")}})})]},t._id)}))]})]})}),Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,xs:6,children:Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(O.a,{fullWidth:!0,color:"primary",onClick:this.submit,variant:"contained",children:"Save"})})})})]})})})})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return Object(ye.a)(Object(ye.a)({},t),{},{players:e.players.filter((function(e){return!t.teamAPlayers.find((function(t){return t._id===e._id}))})).filter((function(e){return!t.teamBPlayers.find((function(t){return t._id===e._id}))}))})}}]),a}(c.Component),Ce=Object(w.b)((function(e){return{players:e.players.map((function(e){return e.goalsCount=0,e}))}}))(Object(ce.withRouter)(Se));function Ee(e){return Object(n.jsx)(b.a,{mt:4,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:3,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:4,children:[Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(se.a,{variant:"circle",className:"avatar-x2"})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"center",children:Object(n.jsx)(u.a,{item:!0,children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("div",{className:"result",children:Object(n.jsx)(se.a,{variant:"text"})}),Object(n.jsx)("div",{className:"result",children:"-"}),Object(n.jsx)("div",{className:"result",children:Object(n.jsx)(se.a,{variant:"text"})})]})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-start",children:Object(n.jsx)(se.a,{variant:"circle",className:"avatar-x2"})})})]})}),Object(n.jsx)(b.a,{mt:1,children:Object(n.jsx)(u.a,{item:!0,xs:12,justify:"center",container:!0,children:Object(n.jsx)(u.a,{item:!0,xs:3,children:Object(n.jsx)("h4",{children:Object(n.jsx)(se.a,{variant:"text"})})})})}),Object(n.jsxs)(b.a,{my:2,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)("h2",{className:"text-center",children:"Goals"})]}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:Object(n.jsxs)(u.a,{item:!0,container:!0,xs:4,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})}),Object(n.jsx)(u.a,{xs:6,item:!0,container:!0,justify:"flex-end",children:Object(n.jsxs)(u.a,{item:!0,container:!0,xs:4,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})})]}),Object(n.jsxs)(b.a,{my:2,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)("h2",{className:"text-center",children:"Players"})]}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:Object(n.jsxs)(u.a,{item:!0,container:!0,xs:4,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})}),Object(n.jsx)(u.a,{xs:6,item:!0,container:!0,justify:"flex-end",children:Object(n.jsxs)(u.a,{item:!0,container:!0,xs:4,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})}),Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("p",{children:Object(n.jsx)(se.a,{variant:"text"})})})]})})]})]})})})}var Ne=Object(Z.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]},purple:{color:e.palette.getContrastText(te.a[500]),backgroundColor:te.a[500]}}}));var Le=Object(w.b)((function(e){return{matches:e.matches,appStatus:e.appStatus}}))(Object(ce.withRouter)((function(e){var t,a,c,r,i,s,l=e.matches.find((function(t){return t._id===e.match.params.id})),j=Ne(),o=Object(n.jsx)(b.a,{mt:4,children:Object(n.jsx)("div",{className:"text-center",children:Object(n.jsxs)("h1",{children:[ne()("Match Not Found \u26bd\u2757")," "]})})});return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"Match Details"}),Object(n.jsx)(x.a,{children:Object(n.jsxs)(b.a,{my:12,children:[e.appStatus.isLoading?Object(n.jsx)(Ee,{}):null,e.appStatus.isLoading||l?Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:3,children:[Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsxs)(u.a,{container:!0,justify:"space-evenly",spacing:4,children:[Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(X.a,{className:"avatar-x2 ".concat(j.orange),children:"A"})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:6,justify:"center",children:Object(n.jsx)(u.a,{item:!0,children:Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("div",{className:"result",children:null===l||void 0===l||null===(t=l.team_a)||void 0===t?void 0:t.goal_counts}),Object(n.jsx)("div",{className:"result",children:"-"}),Object(n.jsx)("div",{className:"result",children:null===l||void 0===l||null===(a=l.team_b)||void 0===a?void 0:a.goal_counts})]})})}),Object(n.jsx)(u.a,{container:!0,item:!0,xs:3,children:Object(n.jsx)(u.a,{container:!0,justify:"flex-start",children:Object(n.jsx)(X.a,{className:"avatar-x2 ".concat(j.purple),children:"B"})})})]})}),Object(n.jsx)(b.a,{mt:1,children:Object(n.jsx)(u.a,{item:!0,xs:12,children:Object(n.jsx)("h4",{className:"text-center",children:new Date(null===l||void 0===l?void 0:l.time).toDateString()})})}),Object(n.jsxs)(b.a,{my:2,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)("h2",{className:"text-center",children:"Goals"})]}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:null===l||void 0===l||null===(c=l.team_a)||void 0===c?void 0:c.goals.map((function(e){var t;return Object(n.jsxs)("h4",{children:["".concat(null===(t=e.player)||void 0===t?void 0:t.name,"  "),"(",Array(e.count).fill(ne()("\u26bd"))," )"]},e._id)}))}),Object(n.jsx)(u.a,{xs:6,item:!0,className:"text-right",children:null===l||void 0===l||null===(r=l.team_b)||void 0===r?void 0:r.goals.map((function(e){var t;return Object(n.jsxs)("h4",{children:["".concat(null===(t=e.player)||void 0===t?void 0:t.name," "),"("," ",Array(e.count).fill(ne()("\u26bd"))," )"]},e._id)}))})]}),Object(n.jsxs)(b.a,{my:2,children:[Object(n.jsx)(D.a,{}),Object(n.jsx)("h2",{className:"text-center",children:"Players"})]}),Object(n.jsxs)(u.a,{container:!0,item:!0,xs:12,children:[Object(n.jsx)(u.a,{xs:6,item:!0,children:null===l||void 0===l||null===(i=l.team_a)||void 0===i?void 0:i.players.map((function(e){return Object(n.jsx)("h4",{children:null===e||void 0===e?void 0:e.name},e._id)}))}),Object(n.jsx)(u.a,{xs:6,item:!0,className:"text-right",children:null===l||void 0===l||null===(s=l.team_b)||void 0===s?void 0:s.players.map((function(e){return Object(n.jsx)("h4",{children:null===e||void 0===e?void 0:e.name},e._id)}))})]})]})}):o]})})]})}))),Te=a(226);var Ae=Object(l.withRouter)((function(e){return Object(n.jsx)(u.a,{container:!0,justify:e.justify,children:Object(n.jsxs)(u.a,{item:!0,md:8,container:!0,xs:12,children:[Object(n.jsx)(u.a,{item:!0,xs:e.xs,children:Object(n.jsx)(b.a,{ml:0,mt:4,children:Object(n.jsx)(O.a,{startIcon:Object(n.jsx)(L.a,{children:"west"}),onClick:function(){return e.history.length<3?e.history.push("/"):e.history.goBack()},children:"Go Back"})})}),Object(n.jsx)(u.a,{item:!0,xs:4,className:"text-center",children:Object(n.jsx)(b.a,{ml:0,mt:4,children:Object(n.jsx)(T.a,{variant:"h5",children:e.title})})})]})})})),ke=a(50),Pe=a(105),Re=a(106),Ie=a(75),De=[];var Fe=[];var He={isLoggedin:!1};var Ge={isLoading:!0,isOffline:!1};var Me={players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.FETCH_PLAYERS:return t.payload;case B.NEW_PLAYER:return[].concat(Object(Ie.a)(e),[t.payload]);case B.EDIT_PLAYER:return e.map((function(e){return e._id===t.payload._id?Object(ye.a)(Object(ye.a)({},e),t.payload):e}));case B.DELETE_PLAYER:return e.filter((function(e){return e._id!==t.payload._id}));default:return e}},matches:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.FETCH_MATCHES:return t.payload;case B.NEW_MATCH:return[].concat(Object(Ie.a)(e),[t.payload]);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.LOGIN_CHECK:return t.payload;case B.LOGIN:return{isLoggedin:!0};case B.LOGOUT:return{isLoggedin:!1};default:return e}},appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.SET_APP_STATUS_LOADING:case B.SET_APP_STATUS_OFFLINE:return Object(ye.a)(Object(ye.a)({},e),t.payload);default:return e}}},We=Object(Pe.composeWithDevTools)(Object(ke.applyMiddleware)(Re.a)),Be=Object(ke.createStore)(Object(ke.combineReducers)(Me),We),Ye=Object(Z.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{marginTop:e.spacing(8)}}}));var Ue=Object(l.withRouter)((function(e){var t=Object(c.useState)(""),a=Object(S.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(""),l=Object(S.a)(s,2),j=l[0],o=l[1],d=Ye(),h=function(e){"username"===e.target.name?i(e.target.value):o(e.target.value)};return Object(n.jsxs)(x.a,{component:"main",maxWidth:"xs",className:d.container,children:[Object(n.jsx)(Te.a,{}),Object(n.jsx)(Ae,{}),Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(m.a,{children:Object(n.jsx)(b.a,{p:4,children:Object(n.jsxs)("div",{className:d.paper,children:[Object(n.jsx)(T.a,{component:"h1",variant:"h5",children:"Login"}),Object(n.jsxs)("form",{className:d.form,noValidate:!0,children:[Object(n.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoFocus:!0,value:r,onChange:h}),Object(n.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:h}),Object(n.jsx)(O.a,{fullWidth:!0,variant:"contained",color:"primary",className:d.submit,onClick:function(){Be.dispatch(function(e){var t=e.username,a=e.password;return function(){var e=Object(G.a)(H.a.mark((function e(n){var c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/admin/login",{username:t,password:a});case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({username:r,password:j})).then((function(t){localStorage.setItem("token",t.data.token),Be.dispatch({type:B.LOGIN}),e.history.goBack()})).catch(console.log)},children:"Login"})]})]})})})})]})}));var Ke=Object(ce.withRouter)((function(e){var t=Object(c.useState)(""),a=Object(S.a)(t,2),r=a[0],i=a[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"New Player"}),Object(n.jsx)(x.a,{children:Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsx)(b.a,{py:4,mt:8,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:4,children:[Object(n.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoFocus:!0,value:r,onChange:function(e){i(e.target.value)}}),Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(O.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:""===r,onClick:function(){Be.dispatch(function(e){var t=e.name;return function(){var e=Object(G.a)(H.a.mark((function e(a){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.post("/player/new",{name:t});case 2:n=e.sent,a({type:B.NEW_PLAYER,payload:n.data.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({name:r})).then((function(t){e.history.goBack()}))},children:"Add"})})]})})})})})})]})}));var qe=Object(w.b)((function(e){return{players:e.players}}))(Object(ce.withRouter)((function(e){var t=e.players.find((function(t){return t._id===e.match.params.id})),a=Object(c.useState)(null===t||void 0===t?void 0:t.name),r=Object(S.a)(a,2),i=r[0],s=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(z,{title:"Edit Player"}),Object(n.jsx)(x.a,{children:Object(n.jsx)(u.a,{container:!0,justify:"center",children:Object(n.jsx)(u.a,{item:!0,md:8,xs:12,children:Object(n.jsx)(b.a,{py:4,mt:8,children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(b.a,{p:4,children:[Object(n.jsx)(_e.a,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"name",name:"name",autoFocus:!0,value:i,onChange:function(e){s(e.target.value)}}),Object(n.jsx)(b.a,{my:4,children:Object(n.jsx)(O.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:""===i,onClick:function(){Be.dispatch(function(e){return function(){var t=Object(G.a)(H.a.mark((function t(a){var n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.put("/player/".concat(e._id),e);case 2:n=t.sent,a({type:B.EDIT_PLAYER,payload:n.data.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(Object(ye.a)(Object(ye.a)({},t),{},{name:i}))).then((function(t){e.history.goBack()}))},children:"Add"})})]})})})})})})]})}))),Je=a(232);var Ve={store:function(e){if(e.value){var t=JSON.stringify(e.value.data.data),a=e.value.config.url;localStorage.setItem(a,t),console.log("cache response")}},fetchCache:function(e){var t=localStorage.getItem(e);return console.log("loading cached data"),t?JSON.parse(t):[]}};var $e=Object(w.b)((function(e){return{appStatus:e.appStatus}}))((function(e){return Object(c.useEffect)((function(){Promise.allSettled([Be.dispatch(K),Be.dispatch(U),Be.dispatch(Y)]).then((function(e){e.forEach((function(e){if("rejected"===e.status){Be.dispatch(J(B.SET_APP_STATUS_OFFLINE,{isOffline:!0}));var t=Ve.fetchCache(e.reason.config.url),a="/player"===e.reason.config.url?B.FETCH_PLAYERS:B.FETCH_MATCHES;Be.dispatch(function(e){return function(t){t(e)}}({type:a,payload:t}))}else Ve.store(e)})),Be.dispatch(J(B.SET_APP_STATUS_LOADING,{isLoading:!1}))}))}),[]),Object(n.jsxs)(c.Fragment,{children:[Object(n.jsxs)(l.Switch,{children:[Object(n.jsx)(l.Route,{exact:!0,path:"/",children:Object(n.jsx)(oe,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/players",children:Object(n.jsx)(me,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/players/new",children:Object(n.jsx)(Ke,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/players/edit/:id",children:Object(n.jsx)(qe,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/matches",children:Object(n.jsx)(ve,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/matches/view/:id",children:Object(n.jsx)(Le,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/matches/new",children:Object(n.jsx)(Ce,{})}),Object(n.jsx)(l.Route,{exact:!0,path:"/login",children:Object(n.jsx)(Ue,{})})]}),Object(n.jsx)(Je.a,{open:e.appStatus.isOffline,message:"You are Offline and Viewing Cached Data",onClose:function(e,t){"clickaway"!==t&&Be.dispatch(J(B.SET_APP_STATUS_OFFLINE,{isOffline:!1}))},autoHideDuration:3e3},"test")]})})),ze=(a(157),a(227)),Qe=a(76),Xe=a(107),Ze=Object(Xe.a)({palette:{primary:{main:"#3949ab"},secondary:Qe.a}}),et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}!function(e){if("serviceWorker"in navigator){if(new URL("/koora",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/koora","/service-worker.js");et?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):tt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):tt(t,e)}))}}(),i.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(ze.a,{theme:Ze,children:Object(n.jsx)(w.a,{store:Be,children:Object(n.jsx)($e,{})})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.5e0bd323.chunk.js.map