(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c192c"],{"472e":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o={class:"container my-5"},a={class:"row justify-content-center"},l={class:"col-12"},b={class:"d-flex bd-highlight"},i=Object(n["g"])("div",{class:"p-2 flex-grow-1 bd-highlight"},[Object(n["g"])("img",{src:"/logo.png",class:"img-thumbnail",alt:"SSI Open Code Inbox"})],-1),r={class:"btn-group p-2 bd-highlight",role:"group","aria-label":"Basic example"},s=Object(n["g"])("i",{class:"bi bi-arrow-repeat"},null,-1),u=Object(n["h"])(" Reload "),g=[s,u],d=Object(n["g"])("i",{class:"bi bi-gear"},null,-1),j=Object(n["h"])(" Setting "),O=[d,j],p=Object(n["g"])("i",{class:"bi bi-box-arrow-right"},null,-1),h=Object(n["h"])(" Logout "),f=[p,h],m={class:"card rounded shadow"},v=Object(n["g"])("div",{class:"card-header"}," Inbox ",-1),w={class:"card-body"},y={class:"table"};function k(t,e,c,s,u,d){return Object(n["s"])(),Object(n["f"])("div",o,[Object(n["g"])("div",a,[Object(n["g"])("div",l,[Object(n["g"])("div",b,[i,Object(n["g"])("div",r,[Object(n["g"])("button",{class:"btn btn-outline-primary",onClick:e[0]||(e[0]=Object(n["F"])((function(t){return s.addCode()}),["prevent"]))},g),Object(n["g"])("button",{class:"btn btn-outline-primary",onClick:e[1]||(e[1]=Object(n["F"])((function(t){return s.profile()}),["prevent"]))},O),Object(n["g"])("button",{class:"btn btn-outline-primary",onClick:e[2]||(e[2]=Object(n["F"])((function(t){return s.logout()}),["prevent"]))},f)])]),Object(n["g"])("div",m,[v,Object(n["g"])("div",w,[Object(n["g"])("table",y,[Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["w"])(s.opencode.data,(function(t,e){return Object(n["s"])(),Object(n["f"])("tr",{key:e},[Object(n["g"])("td",null,Object(n["z"])(t.pesan),1),Object(n["g"])("td",null,[Object(n["g"])("small",null,Object(n["z"])(t.jam),1)])])})),128))])])])])])])])}var x=c("bc3a"),C=c.n(x),I=c("6c02"),S={setup:function(){var t=Object(n["v"])([]),e=Object(I["c"])();function c(){C.a.get("logout").then((function(){localStorage.removeItem("myapptoken"),e.push({name:"user.login"})})).catch((function(t){console.log(t)}))}function o(){a()}function a(){C.a.defaults.headers.common["Authorization"]="Bearer ".concat(localStorage.getItem("myapptoken")),C.a.get("opencode?nomor_hp="+localStorage.getItem("nomor_hp")).then((function(e){t.value=e.data})).catch((function(t){t.console.log(t.response)}))}function l(){e.push({name:"user.profile"})}return Object(n["q"])((function(){a()})),{opencode:t,addCode:o,profile:l,logout:c}}};S.render=k;e["default"]=S}}]);
//# sourceMappingURL=chunk-2d0c192c.749cc6b6.js.map