import{d as i,z as d,r as m,o as l,c as r,a as e,F as p,n as h,u as f,l as g,t as n}from"./vendor.b2483bd5.js";const v={class:"table"},_=e("thead",null,[e("tr",null,[e("th",null,"Attribute"),e("th",null,"Value")])],-1),w=i({setup(y){const s=d({data:{}});fetch("https://api.openweathermap.org/data/2.5/weather?q=New York&appid=").then(t=>t.json()).then(t=>{console.log(t),s.data=Object.entries(t.main)});const o=m({});return mapIsReady.then(()=>{var t={query:"Museum of Contemporary Art",fields:["name","geometry"]},c=new google.maps.places.PlacesService(document.createElement("div"));c.findPlaceFromQuery(t,function(a,u){console.log(a),o.value=a[0]})}),(t,c)=>(l(),r("div",null,[e("table",v,[_,e("tbody",null,[(l(!0),r(p,null,h(f(s).data,(a,u)=>(l(),r("tr",{key:u},[e("td",null,n(a[0]),1),e("td",null,n(a[1]),1)]))),128))])]),g(" "+n(o.value.name)+" "+n(o.value.geometry.location.lat())+" "+n(o.value.geometry.location.lng()),1)]))}});export{w as default};