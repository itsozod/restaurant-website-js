(()=>{"use strict";(function(){const e=document.querySelector("#content"),t=function(e,t,n){const c=document.createElement("header");c.setAttribute("id",e);const d=document.createElement("div");d.classList.add("header-container");const a=document.createElement("h1");a.classList.add("welcome-logo"),a.textContent=t;const s=document.createElement("img");s.src=n,s.classList.add("coffee-img"),d.appendChild(a),d.appendChild(s),c.appendChild(d);const o=function(){const e=document.createElement("nav"),t=document.createElement("button");t.setAttribute("id","button-home"),t.textContent="Home",t.classList.add("active");const n=document.createElement("button");n.setAttribute("id","button-menu"),n.textContent="Menu";const c=document.createElement("button");return c.setAttribute("id","button-contact"),c.textContent="Contact",t.addEventListener("click",(()=>{t.classList.add("active"),n.classList.remove("active"),c.classList.remove("active")})),n.addEventListener("click",(()=>{t.classList.remove("active"),n.classList.add("active"),c.classList.remove("active")})),c.addEventListener("click",(()=>{c.classList.add("active"),t.classList.remove("active"),n.classList.remove("active")})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e}();return c.appendChild(o),c}("header","Coffeeland","./images/coffee.png");e.appendChild(t);const n=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();e.appendChild(n)})(),function(){const e=document.querySelector("#main"),t=function(){const e=document.createElement("div");e.classList.add("welcome-container");const t=document.createElement("h1");t.classList.add("welcome"),t.textContent="Welcome to Coffeeland";const n=document.createElement("div");n.classList.add("img-container");const c=document.createElement("img");c.classList.add("img"),c.src="./images/coffee-and-snacks.png",n.appendChild(c);const d=document.createElement("p");d.classList.add("intro"),d.textContent="Whenever you feel like you need coffee, just straight come to our coffee shop, you will any type of coffee!";const a=document.createElement("strong");a.textContent=" Buy a coffee and get snacks for free!",d.appendChild(a);const s=document.createElement("div");s.classList.add("days-container");const o=document.createElement("div");o.classList.add("work-days"),s.appendChild(o);const i=document.createElement("h3");i.classList.add("work-intro"),i.textContent="Working days",o.appendChild(i);const l=document.createElement("p"),m=document.createElement("p"),p=document.createElement("p"),r=document.createElement("p"),u=document.createElement("p"),f=document.createElement("p"),C=document.createElement("p");return l.classList.add("days"),m.classList.add("days"),p.classList.add("days"),r.classList.add("days"),u.classList.add("days"),f.classList.add("days"),C.classList.add("days"),l.textContent="Monday: 7AM-11PM",m.textContent="Tuesday: 7AM-11PM",p.textContent="Wednesday: 7AM-11PM",r.textContent="Thursday: 7AM-11PM",u.textContent="Friday: 7AM-11PM",f.textContent="Saturday: 10AM-11PM",C.textContent="Sunday: 10AM-11PM",o.appendChild(l),o.appendChild(m),o.appendChild(p),o.appendChild(r),o.appendChild(u),o.appendChild(f),o.appendChild(C),e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(s),e}();e.appendChild(t)}(),function(){const e=document.querySelector("#main"),t=function(){const e=document.createElement("div");e.classList.add("coffee-container");const t=document.createElement("div");t.classList.add("coffee-card");const n=document.createElement("h2");n.classList.add("coffee-name"),n.textContent="Black Coffee",t.appendChild(n);const c=document.createElement("img");c.classList.add("coffee"),c.src="./images/black coffee.jpg",t.appendChild(c);const d=document.createElement("p");d.classList.add("price"),d.textContent="$2.70",t.appendChild(d);const a=document.createElement("div");a.classList.add("coffee-card");const s=document.createElement("h2");s.classList.add("coffee-name"),s.textContent="Latte",a.appendChild(s);const o=document.createElement("img");o.classList.add("coffee"),o.src="./images/latte coffee.jpg",a.appendChild(o);const i=document.createElement("p");i.classList.add("price"),i.textContent="$4.16",a.appendChild(i);const l=document.createElement("div");l.classList.add("coffee-card");const m=document.createElement("h2");m.classList.add("coffee-name"),m.textContent="Cappuccino",l.appendChild(m);const p=document.createElement("img");p.classList.add("coffee"),p.src="./images/coffee cappuccino.jpg",l.appendChild(p);const r=document.createElement("p");r.classList.add("price"),r.textContent="$4.36",l.appendChild(r);const u=document.createElement("div");u.classList.add("coffee-card");const f=document.createElement("h2");f.classList.add("coffee-name"),f.textContent="Americano",u.appendChild(f);const C=document.createElement("img");C.classList.add("coffee"),C.src="./images/coffee americano.jpg",u.appendChild(C);const h=document.createElement("p");h.classList.add("price"),h.textContent="$2.62",u.appendChild(h);const L=document.createElement("div");L.classList.add("coffee-card");const E=document.createElement("h2");E.classList.add("coffee-name"),E.textContent="Espresso",L.appendChild(E);const y=document.createElement("img");y.classList.add("coffee"),y.src="./images/coffee espresso.jpg",L.appendChild(y);const v=document.createElement("p");v.classList.add("price"),v.textContent="$5.76",L.appendChild(v);const g=document.createElement("div");g.classList.add("coffee-card");const x=document.createElement("h2");x.classList.add("coffee-name"),x.textContent="Iced Coffee",g.appendChild(x);const M=document.createElement("img");M.classList.add("coffee"),M.src="./images/ice coffee.jpg",g.appendChild(M);const b=document.createElement("p");return b.classList.add("price"),b.textContent="$2.25",g.appendChild(b),e.appendChild(t),e.appendChild(a),e.appendChild(l),e.appendChild(u),e.appendChild(L),e.appendChild(g),e}();e.appendChild(t)}(),function(){const e=document.querySelector("#button-home"),t=document.querySelector("#button-menu"),n=document.querySelector(".welcome-container"),c=document.querySelector(".coffee-container");e.addEventListener("click",(()=>{n.style.display="flex",c.style.display="none"})),t.addEventListener("click",(()=>{n.style.display="none",c.style.display="flex"}))}()})();