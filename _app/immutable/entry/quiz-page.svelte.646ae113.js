import{S as te,i as se,s as ae,k as w,q as M,a as z,l as E,m as T,r as N,h,c as Q,n as _,b as ne,G as n,K as C,u as F,H as x,M as le,o as ie,p as K,g as y,d as W,f as oe,y as ue,z as re,A as ce,B as fe,v as de}from"../chunks/index.f4ef7988.js";function me(t){let a,s,e,i,l,k,b,r,m,I,H,c,p,u,U,O,B,P,V,J;return{c(){a=w("div"),s=w("div"),e=w("p"),i=M(t[0]),l=M(".- "),k=M(t[1]),b=z(),r=w("button"),m=M(t[2]),H=z(),c=w("button"),p=M(t[3]),U=z(),O=w("button"),B=M(t[4]),this.h()},l(f){a=E(f,"DIV",{class:!0});var d=T(a);s=E(d,"DIV",{class:!0});var D=T(s);e=E(D,"P",{class:!0,id:!0});var S=T(e);i=N(S,t[0]),l=N(S,".- "),k=N(S,t[1]),S.forEach(h),b=Q(D),r=E(D,"BUTTON",{class:!0});var A=T(r);m=N(A,t[2]),A.forEach(h),H=Q(D),c=E(D,"BUTTON",{class:!0});var j=T(c);p=N(j,t[3]),j.forEach(h),U=Q(D),O=E(D,"BUTTON",{class:!0});var o=T(O);B=N(o,t[4]),o.forEach(h),D.forEach(h),d.forEach(h),this.h()},h(){_(e,"class","subtitle"),_(e,"id","textoInicio"),_(r,"class",I="button is-fullwidth mt-2 "+(t[5]=="a"?"is-success":"is-light")),_(c,"class",u="button is-fullwidth mt-2 "+(t[5]=="b"?"is-success":"is-light")),_(O,"class",P="button is-fullwidth mt-2 "+(t[5]=="c"?"is-success":"is-light")),_(s,"class","card-content"),_(a,"class","card")},m(f,d){ne(f,a,d),n(a,s),n(s,e),n(e,i),n(e,l),n(e,k),n(s,b),n(s,r),n(r,m),n(s,H),n(s,c),n(c,p),n(s,U),n(s,O),n(O,B),V||(J=[C(r,"click",t[8]),C(c,"click",t[9]),C(O,"click",t[10])],V=!0)},p(f,[d]){d&1&&F(i,f[0]),d&2&&F(k,f[1]),d&4&&F(m,f[2]),d&32&&I!==(I="button is-fullwidth mt-2 "+(f[5]=="a"?"is-success":"is-light"))&&_(r,"class",I),d&8&&F(p,f[3]),d&32&&u!==(u="button is-fullwidth mt-2 "+(f[5]=="b"?"is-success":"is-light"))&&_(c,"class",u),d&16&&F(B,f[4]),d&32&&P!==(P="button is-fullwidth mt-2 "+(f[5]=="c"?"is-success":"is-light"))&&_(O,"class",P)},i:x,o:x,d(f){f&&h(a),V=!1,le(J)}}}function ge(t,a,s){let{num:e}=a,{pregunta:i}=a,{a:l}=a,{b:k}=a,{c:b}=a,r="",m=[];ie(()=>{s(7,m=JSON.parse(window.localStorage.getItem("preguntas")))});const I=u=>{s(5,r=u),s(7,m[e-1][6]=u,m),window.localStorage.setItem("preguntas",JSON.stringify(m))},H=()=>I("a"),c=()=>I("b"),p=()=>I("c");return t.$$set=u=>{"num"in u&&s(0,e=u.num),"pregunta"in u&&s(1,i=u.pregunta),"a"in u&&s(2,l=u.a),"b"in u&&s(3,k=u.b),"c"in u&&s(4,b=u.c)},t.$$.update=()=>{t.$$.dirty&129&&e&&(s(5,r=""),m[e-1]&&m[e-1][6]&&s(5,r=m[e-1][6]))},[e,i,l,k,b,r,I,m,H,c,p]}class he extends te{constructor(a){super(),se(this,a,ge,me,ae,{num:0,pregunta:1,a:2,b:3,c:4})}}function ee(t){let a,s;return a=new he({props:{num:t[0][t[1]][0],pregunta:t[0][t[1]][1],a:t[0][t[1]][3],b:t[0][t[1]][4],c:t[0][t[1]][5]}}),{c(){ue(a.$$.fragment)},l(e){re(a.$$.fragment,e)},m(e,i){ce(a,e,i),s=!0},p(e,i){const l={};i&3&&(l.num=e[0][e[1]][0]),i&3&&(l.pregunta=e[0][e[1]][1]),i&3&&(l.a=e[0][e[1]][3]),i&3&&(l.b=e[0][e[1]][4]),i&3&&(l.c=e[0][e[1]][5]),a.$set(l)},i(e){s||(y(a.$$.fragment,e),s=!0)},o(e){W(a.$$.fragment,e),s=!1},d(e){fe(a,e)}}}function _e(t){let a,s,e,i,l,k,b,r,m,I,H,c,p,u,U,O,B,P=t[0].length-1==t[1]?"Finalizar":"Siguiente",V,J,f,d,D,S,A,j,o=t[0].length>0&&ee(t);return{c(){a=w("div"),s=w("div"),e=w("p"),i=M("Hora de Inicio: "),l=M(t[2]),k=z(),b=w("p"),r=M("Hora de Max de Finalización: "),m=M(t[3]),I=z(),o&&o.c(),H=z(),c=w("div"),p=w("button"),u=M("Anterior"),O=z(),B=w("button"),V=M(P),J=z(),f=w("div"),d=w("button"),D=M("Cancelar"),this.h()},l(v){a=E(v,"DIV",{class:!0});var g=T(a);s=E(g,"DIV",{class:!0,style:!0});var q=T(s);e=E(q,"P",{});var L=T(e);i=N(L,"Hora de Inicio: "),l=N(L,t[2]),L.forEach(h),k=Q(q),b=E(q,"P",{});var R=T(b);r=N(R,"Hora de Max de Finalización: "),m=N(R,t[3]),R.forEach(h),q.forEach(h),I=Q(g),o&&o.l(g),H=Q(g),c=E(g,"DIV",{class:!0,style:!0});var G=T(c);p=E(G,"BUTTON",{class:!0});var X=T(p);u=N(X,"Anterior"),X.forEach(h),O=Q(G),B=E(G,"BUTTON",{class:!0});var Y=T(B);V=N(Y,P),Y.forEach(h),G.forEach(h),J=Q(g),f=E(g,"DIV",{class:!0});var Z=T(f);d=E(Z,"BUTTON",{class:!0});var $=T(d);D=N($,"Cancelar"),$.forEach(h),Z.forEach(h),g.forEach(h),this.h()},h(){_(s,"class","my-3"),K(s,"display","flex"),K(s,"justify-content","space-between"),_(p,"class","button is-primary mt-2"),p.disabled=U=t[1]==0,_(B,"class","button is-primary mt-2"),_(c,"class","mt-4"),K(c,"display","flex"),K(c,"justify-content","space-around"),_(d,"class","button is-danger mt-2"),_(f,"class","mt-6 has-text-centered"),_(a,"class","container mt-5 box px-6")},m(v,g){ne(v,a,g),n(a,s),n(s,e),n(e,i),n(e,l),n(s,k),n(s,b),n(b,r),n(b,m),n(a,I),o&&o.m(a,null),n(a,H),n(a,c),n(c,p),n(p,u),n(c,O),n(c,B),n(B,V),n(a,J),n(a,f),n(f,d),n(d,D),S=!0,A||(j=[C(p,"click",t[5]),C(B,"click",t[4]),C(d,"click",t[6])],A=!0)},p(v,[g]){(!S||g&4)&&F(l,v[2]),(!S||g&8)&&F(m,v[3]),v[0].length>0?o?(o.p(v,g),g&1&&y(o,1)):(o=ee(v),o.c(),y(o,1),o.m(a,H)):o&&(de(),W(o,1,1,()=>{o=null}),oe()),(!S||g&2&&U!==(U=v[1]==0))&&(p.disabled=U),(!S||g&3)&&P!==(P=v[0].length-1==v[1]?"Finalizar":"Siguiente")&&F(V,P)},i(v){S||(y(o),S=!0)},o(v){W(o),S=!1},d(v){v&&h(a),o&&o.d(),A=!1,le(j)}}}function be(t,a,s){let e=[],i=0,l,k,b,r;return ie(()=>{l=new Date,s(0,e=JSON.parse(window.localStorage.getItem("preguntas"))),s(2,k=`${l.getHours()}:${l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes()}`),r=JSON.parse(window.localStorage.getItem("user")),console.log(r.maxTime),l.setTime(l.getTime()+r.maxTime*1e3*60),s(3,b=`${l.getHours()}:${l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes()}`)}),[e,i,k,b,()=>{s(1,i+=1),e.length==i&&(window.confirm("Estas seguro de enviar los datos")?window.location.replace("/resultados"):s(1,i-=1))},()=>{s(1,i-=1)},()=>{window.location.replace("/login")}]}class ve extends te{constructor(a){super(),se(this,a,be,_e,ae,{})}}export{ve as default};
