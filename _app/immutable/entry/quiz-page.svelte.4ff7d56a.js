import{S as te,i as se,s as le,k as w,q as N,a as Q,l as T,m as k,r as O,h as b,c as q,n as h,b as ne,G as n,K as j,u as A,H as x,M as ae,o as ie,p as R,g as W,d as X,f as oe,y as ue,z as re,A as ce,B as fe,v as de}from"../chunks/index.f4ef7988.js";function me(e){let l,s,t,u,a,S,p,m,E,g,I,r,v,U,P,o,M,V,F,B,D,z,J,H;return{c(){l=w("div"),s=w("div"),t=w("p"),u=N(e[0]),a=N(".- "),S=N(e[1]),p=Q(),m=w("button"),E=N(e[2]),I=Q(),r=w("button"),v=N(e[3]),P=Q(),o=w("button"),M=N(e[4]),F=Q(),B=w("button"),D=N(e[5]),this.h()},l(f){l=T(f,"DIV",{class:!0});var _=k(l);s=T(_,"DIV",{class:!0});var i=k(s);t=T(i,"P",{class:!0,id:!0});var c=k(t);u=O(c,e[0]),a=O(c,".- "),S=O(c,e[1]),c.forEach(b),p=q(i),m=T(i,"BUTTON",{class:!0});var d=k(m);E=O(d,e[2]),d.forEach(b),I=q(i),r=T(i,"BUTTON",{class:!0});var C=k(r);v=O(C,e[3]),C.forEach(b),P=q(i),o=T(i,"BUTTON",{class:!0});var G=k(o);M=O(G,e[4]),G.forEach(b),F=q(i),B=T(i,"BUTTON",{class:!0});var K=k(B);D=O(K,e[5]),K.forEach(b),i.forEach(b),_.forEach(b),this.h()},h(){h(t,"class","subtitle"),h(t,"id","textoInicio"),h(m,"class",g="button is-fullwidth mt-2 "+(e[6]=="a"?"is-success":"is-light")),h(r,"class",U="button is-fullwidth mt-2 "+(e[6]=="b"?"is-success":"is-light")),h(o,"class",V="button is-fullwidth mt-2 "+(e[6]=="c"?"is-success":"is-light")),h(B,"class",z="button is-fullwidth mt-2 "+(e[6]=="d"?"is-success":"is-light")),h(s,"class","card-content"),h(l,"class","card")},m(f,_){ne(f,l,_),n(l,s),n(s,t),n(t,u),n(t,a),n(t,S),n(s,p),n(s,m),n(m,E),n(s,I),n(s,r),n(r,v),n(s,P),n(s,o),n(o,M),n(s,F),n(s,B),n(B,D),J||(H=[j(m,"click",e[9]),j(r,"click",e[10]),j(o,"click",e[11]),j(B,"click",e[12])],J=!0)},p(f,[_]){_&1&&A(u,f[0]),_&2&&A(S,f[1]),_&4&&A(E,f[2]),_&64&&g!==(g="button is-fullwidth mt-2 "+(f[6]=="a"?"is-success":"is-light"))&&h(m,"class",g),_&8&&A(v,f[3]),_&64&&U!==(U="button is-fullwidth mt-2 "+(f[6]=="b"?"is-success":"is-light"))&&h(r,"class",U),_&16&&A(M,f[4]),_&64&&V!==(V="button is-fullwidth mt-2 "+(f[6]=="c"?"is-success":"is-light"))&&h(o,"class",V),_&32&&A(D,f[5]),_&64&&z!==(z="button is-fullwidth mt-2 "+(f[6]=="d"?"is-success":"is-light"))&&h(B,"class",z)},i:x,o:x,d(f){f&&b(l),J=!1,ae(H)}}}function he(e,l,s){let{num:t}=l,{pregunta:u}=l,{a}=l,{b:S}=l,{c:p}=l,{d:m}=l,E="",g=[];ie(()=>{s(8,g=JSON.parse(window.localStorage.getItem("preguntas")))});const I=o=>{s(6,E=o),s(8,g[t-1][7]=o,g),window.localStorage.setItem("preguntas",JSON.stringify(g))},r=()=>I("a"),v=()=>I("b"),U=()=>I("c"),P=()=>I("d");return e.$$set=o=>{"num"in o&&s(0,t=o.num),"pregunta"in o&&s(1,u=o.pregunta),"a"in o&&s(2,a=o.a),"b"in o&&s(3,S=o.b),"c"in o&&s(4,p=o.c),"d"in o&&s(5,m=o.d)},e.$$.update=()=>{e.$$.dirty&257&&t&&(s(6,E=""),g[t-1]&&g[t-1][7]&&s(6,E=g[t-1][7]))},[t,u,a,S,p,m,E,I,g,r,v,U,P]}class ge extends te{constructor(l){super(),se(this,l,he,me,le,{num:0,pregunta:1,a:2,b:3,c:4,d:5})}}function ee(e){let l,s;return l=new ge({props:{num:e[0][e[1]][0],pregunta:e[0][e[1]][1],a:e[0][e[1]][3],b:e[0][e[1]][4],c:e[0][e[1]][5],d:e[0][e[1]][6]}}),{c(){ue(l.$$.fragment)},l(t){re(l.$$.fragment,t)},m(t,u){ce(l,t,u),s=!0},p(t,u){const a={};u&3&&(a.num=t[0][t[1]][0]),u&3&&(a.pregunta=t[0][t[1]][1]),u&3&&(a.a=t[0][t[1]][3]),u&3&&(a.b=t[0][t[1]][4]),u&3&&(a.c=t[0][t[1]][5]),u&3&&(a.d=t[0][t[1]][6]),l.$set(a)},i(t){s||(W(l.$$.fragment,t),s=!0)},o(t){X(l.$$.fragment,t),s=!1},d(t){fe(l,t)}}}function _e(e){let l,s,t,u,a,S,p,m,E,g,I,r,v,U,P,o,M,V=e[0].length-1==e[1]?"Finalizar":"Siguiente",F,B,D,z,J,H,f,_,i=e[0].length>0&&ee(e);return{c(){l=w("div"),s=w("div"),t=w("p"),u=N("Hora de Inicio: "),a=N(e[2]),S=Q(),p=w("p"),m=N("Hora de Max de Finalización: "),E=N(e[3]),g=Q(),i&&i.c(),I=Q(),r=w("div"),v=w("button"),U=N("Anterior"),o=Q(),M=w("button"),F=N(V),B=Q(),D=w("div"),z=w("button"),J=N("Cancelar"),this.h()},l(c){l=T(c,"DIV",{class:!0});var d=k(l);s=T(d,"DIV",{class:!0,style:!0});var C=k(s);t=T(C,"P",{});var G=k(t);u=O(G,"Hora de Inicio: "),a=O(G,e[2]),G.forEach(b),S=q(C),p=T(C,"P",{});var K=k(p);m=O(K,"Hora de Max de Finalización: "),E=O(K,e[3]),K.forEach(b),C.forEach(b),g=q(d),i&&i.l(d),I=q(d),r=T(d,"DIV",{class:!0,style:!0});var L=k(r);v=T(L,"BUTTON",{class:!0});var Y=k(v);U=O(Y,"Anterior"),Y.forEach(b),o=q(L),M=T(L,"BUTTON",{class:!0});var Z=k(M);F=O(Z,V),Z.forEach(b),L.forEach(b),B=q(d),D=T(d,"DIV",{class:!0});var y=k(D);z=T(y,"BUTTON",{class:!0});var $=k(z);J=O($,"Cancelar"),$.forEach(b),y.forEach(b),d.forEach(b),this.h()},h(){h(s,"class","my-3"),R(s,"display","flex"),R(s,"justify-content","space-between"),h(v,"class","button is-primary mt-2"),v.disabled=P=e[1]==0,h(M,"class","button is-primary mt-2"),h(r,"class","mt-4"),R(r,"display","flex"),R(r,"justify-content","space-around"),h(z,"class","button is-danger mt-2"),h(D,"class","mt-6 has-text-centered"),h(l,"class","container mt-5 box px-6")},m(c,d){ne(c,l,d),n(l,s),n(s,t),n(t,u),n(t,a),n(s,S),n(s,p),n(p,m),n(p,E),n(l,g),i&&i.m(l,null),n(l,I),n(l,r),n(r,v),n(v,U),n(r,o),n(r,M),n(M,F),n(l,B),n(l,D),n(D,z),n(z,J),H=!0,f||(_=[j(v,"click",e[5]),j(M,"click",e[4]),j(z,"click",e[6])],f=!0)},p(c,[d]){(!H||d&4)&&A(a,c[2]),(!H||d&8)&&A(E,c[3]),c[0].length>0?i?(i.p(c,d),d&1&&W(i,1)):(i=ee(c),i.c(),W(i,1),i.m(l,I)):i&&(de(),X(i,1,1,()=>{i=null}),oe()),(!H||d&2&&P!==(P=c[1]==0))&&(v.disabled=P),(!H||d&3)&&V!==(V=c[0].length-1==c[1]?"Finalizar":"Siguiente")&&A(F,V)},i(c){H||(W(i),H=!0)},o(c){X(i),H=!1},d(c){c&&b(l),i&&i.d(),f=!1,ae(_)}}}function be(e,l,s){let t=[],u=0,a,S,p,m;return ie(()=>{a=new Date,s(0,t=JSON.parse(window.localStorage.getItem("preguntas"))),s(2,S=`${a.getHours()}:${a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes()}`),m=JSON.parse(window.localStorage.getItem("user")),console.log(m.maxTime),a.setTime(a.getTime()+m.maxTime*1e3*60),s(3,p=`${a.getHours()}:${a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes()}`)}),[t,u,S,p,()=>{s(1,u+=1),t.length==u&&(window.confirm("Estas seguro de enviar los datos")?window.location.replace("/quizApp/resultados.html"):s(1,u-=1))},()=>{s(1,u-=1)},()=>{window.location.replace("/quizApp")}]}class ve extends te{constructor(l){super(),se(this,l,be,_e,le,{})}}export{ve as default};
