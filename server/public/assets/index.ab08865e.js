import{o as l,c as d,a as t,d as f,t as m,b as p,e as O,f as E,g as A,r as B,h as x,u as c,i as u,w as h,p as N,j as P,k as S,l as H,F as T,m as U,n as b,R as v,q as V,s as W}from"./vendor.396ea1e0.js";const q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};q();const F="modulepreload",L={},M="/",D=function(o,n){return!n||n.length===0?o():Promise.all(n.map(a=>{if(a=`${M}${a}`,a in L)return;L[a]=!0;const s=a.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":F,s||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),s)return new Promise((k,I)=>{r.addEventListener("load",k),r.addEventListener("error",I)})})).then(()=>o())};var w=(e,o)=>{const n=e.__vccOpts||e;for(const[a,s]of o)n[a]=s;return n};const J={},K={class:"section"},Y=t("h1",{class:"title"},"Home Page",-1),z=[Y];function G(e,o){return l(),d("div",K,z)}var Q=w(J,[["render",G]]);const X={class:"section"},Z={class:"title"},g=f({props:{title:{type:String,default:"Hello World"}},setup(e){const o=e;return(n,a)=>(l(),d("div",X,[t("h1",Z,m(o.title),1)]))}}),tt={class:"section"},st=t("h1",{class:"title"},"Login Page",-1),et=t("span",{class:"icon"},[t("i",{class:"fa fa-sign-in"})],-1),ot=t("span",null,"Login",-1),nt=[et,ot],at=p(" \xA0 "),it=t("span",{class:"icon"},[t("i",{class:"fa fa-sign-in"})],-1),rt=t("span",null,"Bad Login",-1),ct=[it,rt],lt=f({setup(e){function o(){C("Johnny Tejada","password")}function n(){C("vp","password")}return(a,s)=>(l(),d("div",tt,[st,t("button",{class:"button is-primary",onClick:n},nt),at,t("button",{class:"button is-warning",onClick:o},ct)]))}}),dt=[{path:"/",component:Q},{path:"/about",component:g,props:{title:"About Page"}},{path:"/contact",component:g,props:{title:"Contact Page"}},{path:"/login",component:lt},{path:"/signup",component:g,props:{title:"Signup Page"}},{path:"/wall",component:()=>D(()=>import("./Wall.afea516d.js"),["assets/Wall.afea516d.js","assets/Wall.a0b51b7e.css","assets/vendor.396ea1e0.js"])},{path:"/hidden",component:g,props:{title:"You reached the Hidden Page"}}],$=O({history:E(),routes:dt,linkActiveClass:"is-active"});$.beforeEach((e,o)=>{_.destinationURL==null&&e.path!=="/login"&&(_.destinationURL=e.path),console.log({to:e});const n=["/wall","/feed","hidden"];if(console.log(n),n.includes(e.path)&&(console.log("requires login"),!_.user))return"/login"});const ut=[{firstName:"John",lastName:"Doe",handle:"johndoe",password:"password",email:"john@doe.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Vladimir",lastName:"Putin",handle:"russian_dictator",password:"long table",email:"john@doe.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Kamala",lastName:"Harris",handle:"vp",password:"password",email:"kamila@whitehouse.org",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}],R=A("message",{state:()=>({notifications:[{type:"primary",message:"This is a primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yay you did it!"},{type:"warning",message:"Uh Oh! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(e){this.notifications.splice(e,1)}}}),y=B({user:null,destinationURL:null});async function C(e,o){var s;const n=ut.find(i=>i.handle===e),a=R();try{if(!n)throw{message:"User not found"};if(n.password!==o)throw{message:"Incorrect Password"};a.notifications.push({type:"success",message:`Welcome back ${n.firstName}`}),y.user=n,$.push((s=y.destinationURL)!=null?s:"/wall")}catch(i){a.notifications.push({type:"danger",message:i.message})}}function _t(){y.user=null,$.push("/login")}var _=y;const j=e=>(N("data-v-75816dca"),e=e(),P(),e),pt={key:0,class:"buttons"},ht=j(()=>t("strong",null,"Sign up",-1)),mt=p(" Log in "),ft={key:1,class:"buttons"},vt={class:"avatar"},gt=["src"],bt=j(()=>t("br",null,null,-1)),yt=f({setup(e){return(o,n)=>{const a=x("router-link");return c(_).user?(l(),d("div",ft,[t("div",vt,[t("img",{src:c(_).user.pic},null,8,gt),t("div",null,[t("strong",null,m(c(_).user.firstName)+" "+m(c(_).user.lastName),1),bt,t("i",null,m(c(_).user.email),1)])]),t("a",{class:"button is-primary",onClick:n[0]||(n[0]=s=>c(_t)())}," Log out ")])):(l(),d("div",pt,[u(a,{class:"button is-primary",to:"/signup"},{default:h(()=>[ht]),_:1}),u(a,{class:"button is-light",to:"/login"},{default:h(()=>[mt]),_:1})]))}}});var $t=w(yt,[["__scopeId","data-v-75816dca"]]);const wt=e=>(N("data-v-2bb2f992"),e=e(),P(),e),kt=wt(()=>t("span",{class:"icon"},[t("i",{class:"fas fa-bell"})],-1)),Lt={key:0,class:"tag is-danger"},Ct={class:"navbar-dropdown"},xt=["onClick"],Nt=f({setup(e){const o=R(),n=S(!1);return(a,s)=>(l(),d("div",null,[t("div",{class:b(["navbar-item has-dropdown",{"is-active":n.value}])},[t("a",{class:"navbar-link",onClick:s[0]||(s[0]=i=>n.value=!n.value)},[kt,c(o).notifications.length?(l(),d("span",Lt,m(c(o).notifications.length),1)):H("",!0)]),t("div",Ct,[(l(!0),d(T,null,U(c(o).notifications,(i,r)=>(l(),d("div",{class:b(`notification is-light is-${i.type}`),key:r},[t("button",{class:"delete",onClick:k=>c(o).close(r)},null,8,xt),p(" "+m(i.message),1)],2))),128))])],2)]))}});var Pt=w(Nt,[["__scopeId","data-v-2bb2f992"]]);const St={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Rt={class:"container"},jt={class:"navbar-brand"},It=t("a",{class:"navbar-item",href:"https://bulma.io"},[t("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Ot=t("span",{"aria-hidden":"true"},null,-1),Et=t("span",{"aria-hidden":"true"},null,-1),At=t("span",{"aria-hidden":"true"},null,-1),Bt=[Ot,Et,At],Ht={class:"navbar-start"},Tt=p(" Home "),Ut=p(" Wall "),Vt={class:"navbar-item has-dropdown is-hoverable"},Wt=t("a",{class:"navbar-link"}," More ",-1),qt={class:"navbar-dropdown"},Ft=p(" About "),Mt=t("a",{class:"navbar-item"}," Jobs ",-1),Dt=p(" Contact "),Jt=t("hr",{class:"navbar-divider"},null,-1),Kt=t("a",{class:"navbar-item"}," Report an issue ",-1),Yt={class:"navbar-end"},zt={class:"navbar-item"},Gt=t("div",{class:"navbar-item"},[t("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[t("span",{class:"icon"},[t("i",{class:"fab fa-twitter"})]),t("span",null," Tweet ")])],-1),Qt=f({setup(e){const o=S(!1);return(n,a)=>(l(),d("nav",St,[t("div",Rt,[t("div",jt,[It,t("a",{role:"button",class:b(["navbar-burger",{"is-active":o.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=s=>o.value=!o.value)},Bt,2)]),t("div",{class:b(["navbar-menu",{"is-active":o.value}])},[t("div",Ht,[u(c(v),{to:"/",class:"navbar-item"},{default:h(()=>[Tt]),_:1}),u(c(v),{to:"/wall",class:"navbar-item"},{default:h(()=>[Ut]),_:1}),t("div",Vt,[Wt,t("div",qt,[u(c(v),{to:"/about",class:"navbar-item"},{default:h(()=>[Ft]),_:1}),Mt,u(c(v),{class:"navbar-item",to:"/contact"},{default:h(()=>[Dt]),_:1}),Jt,Kt])])]),t("div",Yt,[t("div",zt,[u($t)]),u(Pt),Gt])],2)])]))}}),Xt={class:"container"},Zt=f({setup(e){return(o,n)=>{const a=x("router-view");return l(),d("div",null,[u(Qt),t("div",Xt,[u(a)])])}}});V(Zt).use($).use(W()).mount("#app");