(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{65:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(30),r=n.n(a),o=n(1),c=n.n(o),i=n(2),s=n(17),l=n(6),f=n(37),u=n(64),m=n(74),p=n(75),d=n(76),g=["#fab1a0","#81ecec","#ffeaa7"],b=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},header:{fontSize:150,color:"#fff"},image:{height:250,width:300},button:{position:"absolute",bottom:25}}),E=function(){var e=Object(o.useState)(3),t=r()(e,2),n=t[0],a=t[1];return Object(o.useEffect)((function(){if(0!=n){var e=setTimeout((function(){a(n-1)}),500);return function(){clearTimeout(e)}}}),[n]),c.a.createElement(l.a,{style:i.a.compose(b.container,{backgroundColor:g[n-1]})},n>0?c.a.createElement(s.a,{style:b.header},n):c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{style:b.image,source:[m,p,d][Math.floor(3*Math.random())]}),c.a.createElement(l.a,{style:b.button},c.a.createElement(f.a,{onPress:function(){return a(3)},title:"Play Again"}))))};function h(){var e=Object(o.useState)(!1),t=r()(e,2),n=t[0],a=t[1];return n?c.a.createElement(E,null):c.a.createElement(l.a,{style:v.container},c.a.createElement(s.a,{style:v.titleHeader},"Rock Paper Scissors"),c.a.createElement(s.a,{style:v.imageHeader},"\u270a \u270b \u270c\ufe0f"),c.a.createElement(l.a,{style:v.button},c.a.createElement(f.a,{onPress:function(){a(!0)},title:"Play"})))}var v=i.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},titleHeader:{fontSize:30,marginBottom:30},imageHeader:{fontSize:70},button:{width:240,marginTop:40}})},66:function(e,t,n){n(67),e.exports=n(96)},67:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},74:function(e,t,n){e.exports=n.p+"static/media/rock.864b5a2a.png"},75:function(e,t,n){e.exports=n.p+"static/media/scissors.48d238a6.png"},76:function(e,t,n){e.exports=n.p+"static/media/paper.cffb3100.png"}},[[66,1,2]]]);
//# sourceMappingURL=app.5bac1511.chunk.js.map