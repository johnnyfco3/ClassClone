var j=Object.defineProperty;var C=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var S=(n,t,e)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,x=(n,t)=>{for(var e in t||(t={}))q.call(t,e)&&S(n,e,t[e]);if(C)for(var e of C(t))M.call(t,e)&&S(n,e,t[e]);return n};import{o as d,c as _,a as s,d as f,t as m,r as b,w as P,b as E,v as I,u as r,e as W,f as D,g as R,h as T,i as u,j as p,p as A,k as B,l as h,m as G,F as H,n as F,q as $,R as v,s as z,x as J}from"./vendor.b2483bd5.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};K();const Y="modulepreload",N={},Q="/",O=function(t,e){return!e||e.length===0?t():Promise.all(e.map(a=>{if(a=`${Q}${a}`,a in N)return;N[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Y,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((l,U)=>{c.addEventListener("load",l),c.addEventListener("error",U)})})).then(()=>t())};var k=(n,t)=>{const e=n.__vccOpts||n;for(const[a,o]of t)e[a]=o;return e};const X={},Z={class:"section"},ss=s("h1",{class:"title"},"Home Page",-1),ts=[ss];function es(n,t){return d(),_("div",Z,ts)}var os=k(X,[["render",es]]);const ns={class:"section"},as={class:"title"},g=f({props:{title:{type:String,default:"Hello World"}},setup(n){const t=n;return(e,a)=>(d(),_("div",ns,[s("h1",as,m(t.title),1)]))}}),is={class:"section"},cs={class:"columns"},rs={class:"column is-half is-offset-one-quarter"},ls={class:"card"},us=["onSubmit"],ds=s("h1",{class:"title"},"Login Page",-1),_s={class:"field"},ps={class:"control has-icons-left has-icons-right"},hs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),ms=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),fs={class:"field"},vs={class:"control has-icons-left"},gs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),bs={class:"field"},$s={class:"control"},ws=s("button",{class:"button is-success"}," Login ",-1),ys=f({setup(n){const t=L(),e=b(""),a=b("");function o(){t.Login(e.value,a.value)}return(i,c)=>(d(),_("div",is,[s("div",cs,[s("div",rs,[s("div",ls,[s("form",{class:"card-content",onSubmit:P(o,["prevent"])},[ds,s("div",_s,[s("p",ps,[E(s("input",{class:"input",type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[I,e.value]]),hs,ms])]),s("div",fs,[s("p",vs,[E(s("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=l=>a.value=l)},null,512),[[I,a.value]]),gs])]),s("div",bs,[s("p",$s,[ws,s("button",{class:"button is-success ml-4",onClick:c[2]||(c[2]=P(l=>r(t).GoogleLogin(),["prevent"]))}," Google Login ")])])],40,us)])])])]))}}),ks=[{path:"/",component:os},{path:"/about",component:g,props:{title:"About Page!"}},{path:"/contact",component:g,props:{title:"Contact Page!"}},{path:"/login",component:ys},{path:"/signup",component:g,props:{title:"Signup Page!"}},{path:"/wall/:handle?",component:()=>O(()=>import("./Wall.690724fe.js"),["assets/Wall.690724fe.js","assets/Wall.a0b51b7e.css","assets/vendor.b2483bd5.js"])},{path:"/hidden",component:g,props:{title:"You reached the hidden Page!"}},{path:"/weather",component:()=>O(()=>import("./Weather.d528a6ab.js"),["assets/Weather.d528a6ab.js","assets/vendor.b2483bd5.js"])}],w=W({history:D(),routes:ks,linkActiveClass:"is-active"});w.beforeEach((n,t)=>{const e=L();e.destinationURL==null&&n.path!="/login"&&(e.destinationURL=n.path),console.log({to:n});const a=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:a}),a.includes(n.path.toLowerCase())&&(console.log("requires login"),!e.user))return"/login"});const y=R("message",{state:()=>({notifications:[]}),actions:{close(n){this.notifications.splice(n,1)}}}),Ls="http://localhost:3001/api/";function Cs(n,t,e,a){let o={headers:a};return t&&(o={method:e!=null?e:"POST",cache:"no-cache",headers:x({"Content-Type":"application/json"},a),body:JSON.stringify(t)}),fetch(Ls+n,o).then(i=>i.json())}function Ss(n,t){return new Promise((e,a)=>{if(document.getElementById(t)){e();return}const o=document.createElement("script");o.src=n,o.id=t,o.onload=()=>e(),o.onerror=()=>a(),document.head.appendChild(o)})}const L=R("session",{state:()=>({user:void 0,destinationURL:null}),actions:{async GoogleLogin(){await Ss("https://accounts.google.com/gsi/client","google-signin"),google.accounts.oauth2.initTokenClient({client_id:{}.VITE_GOOGLE_CLIENT_ID,scope:"email profile",callback:async t=>{const e=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${t.access_token}`}}).then(a=>a.json());console.log(e),this.user={_id:e.sub,email:e.email,firstName:e.given_name,lastName:e.family_name,pic:e.picture,handle:e.email,password:""}}}).requestAccessToken()},async Login(n,t){var a;const e=y();try{const o=await this.api("users/login",{email:n,password:t});o&&(e.notifications.push({type:"success",message:`Welcome back ${o.firstName}`}),this.user=o,w.push((a=this.destinationURL)!=null?a:"/wall"))}catch(o){e.notifications.push({type:"danger",message:o.message})}},Logout(){this.user=void 0,w.push("/login")},async api(n,t,e,a={}){var i,c;const o=y();((i=this.user)==null?void 0:i.token)&&(a.Authorization=`Bearer ${this.user.token}`);try{const l=await Cs(n,t,e,a);if((c=l.errors)==null?void 0:c.length)throw{message:l.errors.join(", ")};return await l.data}catch(l){o.notifications.push({type:"danger",message:l.message})}}}});const V=n=>(A("data-v-ec79a624"),n=n(),B(),n),xs={key:0,class:"buttons"},Ps=V(()=>s("strong",null,"Sign up",-1)),Es=h(" Log in "),Is={key:1,class:"buttons"},Ns={class:"avatar"},Os=["src"],Rs=V(()=>s("br",null,null,-1)),Ts=f({setup(n){const t=L();return(e,a)=>{const o=T("router-link");return r(t).user?(d(),_("div",Is,[s("div",Ns,[s("img",{src:r(t).user.pic},null,8,Os),s("div",null,[s("strong",null,m(r(t).user.firstName)+" "+m(r(t).user.lastName),1),Rs,s("i",null,m(r(t).user.email),1)])]),s("a",{class:"button is-primary",onClick:a[0]||(a[0]=i=>r(t).Logout())}," Log out ")])):(d(),_("div",xs,[u(o,{class:"button is-primary",to:"/signup"},{default:p(()=>[Ps]),_:1}),u(o,{class:"button is-light",to:"/login"},{default:p(()=>[Es]),_:1})]))}}});var As=k(Ts,[["__scopeId","data-v-ec79a624"]]);const Bs=n=>(A("data-v-643a8080"),n=n(),B(),n),Vs=Bs(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Us={key:0,class:"tag is-danger"},js={class:"navbar-dropdown"},qs=["onClick"],Ms=f({setup(n){const t=y(),e=b(!1);return(a,o)=>(d(),_("div",null,[s("div",{class:$(["navbar-item has-dropdown",{"is-active":e.value}])},[s("a",{class:"navbar-link",onClick:o[0]||(o[0]=i=>e.value=!e.value)},[Vs,r(t).notifications.length?(d(),_("span",Us,m(r(t).notifications.length),1)):G("",!0)]),s("div",js,[(d(!0),_(H,null,F(r(t).notifications,(i,c)=>(d(),_("div",{class:$(`notification is-light is-${i.type}`),key:c},[s("button",{class:"delete",onClick:l=>r(t).close(c)},null,8,qs),h(" "+m(i.message),1)],2))),128))])],2)]))}});var Ws=k(Ms,[["__scopeId","data-v-643a8080"]]);const Ds={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Gs={class:"container"},Hs={class:"navbar-brand"},Fs=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),zs=s("span",{"aria-hidden":"true"},null,-1),Js=s("span",{"aria-hidden":"true"},null,-1),Ks=s("span",{"aria-hidden":"true"},null,-1),Ys=[zs,Js,Ks],Qs={class:"navbar-start"},Xs=h(" Home "),Zs=h(" Wall "),st=h(" Weather "),tt={class:"navbar-item has-dropdown is-hoverable"},et=s("a",{class:"navbar-link"}," More ",-1),ot={class:"navbar-dropdown"},nt=h(" About "),at=s("a",{class:"navbar-item"}," Jobs ",-1),it=h(" Contact "),ct=s("hr",{class:"navbar-divider"},null,-1),rt=s("a",{class:"navbar-item"}," Report an issue ",-1),lt={class:"navbar-end"},ut={class:"navbar-item"},dt=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),_t=f({setup(n){const t=b(!1);return(e,a)=>(d(),_("nav",Ds,[s("div",Gs,[s("div",Hs,[Fs,s("a",{role:"button",class:$(["navbar-burger",{"is-active":t.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=o=>t.value=!t.value)},Ys,2)]),s("div",{class:$(["navbar-menu",{"is-active":t.value}])},[s("div",Qs,[u(r(v),{to:"/",class:"navbar-item"},{default:p(()=>[Xs]),_:1}),u(r(v),{to:"/wall",class:"navbar-item"},{default:p(()=>[Zs]),_:1}),u(r(v),{to:"/weather",class:"navbar-item"},{default:p(()=>[st]),_:1}),s("div",tt,[et,s("div",ot,[u(r(v),{to:"/about",class:"navbar-item"},{default:p(()=>[nt]),_:1}),at,u(r(v),{class:"navbar-item",to:"/contact"},{default:p(()=>[it]),_:1}),ct,rt])])]),s("div",lt,[s("div",ut,[u(As)]),u(Ws),dt])],2)])]))}}),pt={class:"container"},ht=f({setup(n){return(t,e)=>{const a=T("router-view");return d(),_("div",null,[u(_t),s("div",pt,[u(a)])])}}});z(ht).use(w).use(J()).mount("#app");export{L as u};
