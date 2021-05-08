var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&s(e,o,r[o]);if(a)for(var o of a(r))n.call(r,o)&&s(e,o,r[o]);return e};import{d as o,c as i,a as l,F as c,o as u,r as d,b as p,w as m,p as h,e as v,f,g,t as b,h as w,i as y,j as L,k,v as I,l as E,u as S,m as G}from"./vendor.53b9bbe8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return a(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),s(l)},onload(){a(self[t].moduleMap[o]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var D=o({});const _=l("h1",null,"#ich-kann-klima",-1);D.render=function(e,t,a,n,s,r){const o=d("router-view");return u(),i(c,null,[_,l(o)],64)};const C={gameLoaded(e,t){e.game=t.game}};var O=o({props:{value:{type:Number,required:!0},color:{type:String,required:!0}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>("filled"===e?"background":"border-color")+": "+this.color}}});const Y=m();h("data-v-72f6494f");const z={class:"Indicator"};v();const M=Y(((e,t,a,n,s,r)=>(u(),i("div",z,[(u(!0),i(c,null,p(e.emptyCircles,(t=>(u(),i("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(u(!0),i(c,null,p(e.value,(t=>(u(),i("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));O.render=M,O.__scopeId="data-v-72f6494f";var j=o({setup(){const e=Ue();return{store:e,currentYear:f((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},computed:{timespan:()=>29,years(){return this.currentYear-2020},height(){return"height: "+this.years/this.timespan*100+"%"}}});const P=m();h("data-v-ad8363c2");const $={class:"container"},A=l("div",{class:"arrow-head"},null,-1);v();const B=P(((e,t,a,n,s,r)=>(u(),i("div",$,[A,l("div",{class:"indicator",style:e.height},null,4)]))));j.render=B,j.__scopeId="data-v-ad8363c2";const K={co2budget:5e3,stateDebt:1899,popularity:50,co2emissions:805,unemployment:2695,gdp:3332,electricityDemand:2300};function R(e){return Math.max(0,Math.min(100,e))}function U(e){if(0===e.values.co2emissions)return 100;return R(50*(.15*e.values.co2budget/e.values.co2emissions))}function F(e){return R(100-50*(e.values.stateDebt/K.stateDebt))}function J(e,t){return e?Math.round(t(e)/10):0}var V=o({components:{TimeIndicator:j,Indicator:O},setup:()=>({store:Ue()}),computed:{game(){return this.store.state.game},co2value(){return J(this.game,U)},financeValue(){return J(this.game,F)},popularityValue(){return J(this.game,(e=>e.values.popularity))}}});const W=m();h("data-v-caadfede");const x={class:"CurrentIndicators"};v();const N=W(((e,t,a,n,s,r)=>{const o=d("Indicator"),c=d("TimeIndicator");return u(),i("div",x,[l(o,{value:e.co2value,color:"#EE8AC1"},null,8,["value"]),l(o,{value:e.financeValue,color:"#A9D18E"},null,8,["value"]),l(o,{value:e.popularityValue,color:"#8FAADC"},null,8,["value"]),l(c)])}));V.render=N,V.__scopeId="data-v-caadfede";var q=o({components:{CurrentIndicators:V}});const T={class:"game-setup"},Z={class:"wrapper"};q.render=function(e,t,a,n,s,r){const o=d("CurrentIndicators");return u(),i("div",T,[l("div",Z,[g(e.$slots,"default")]),l(o)])};var H=o({setup(){const e=Ue();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{accepted(){return this.allLaws.filter((e=>{var t;return null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const Q=m()(((e,t,a,n,s,r)=>(u(!0),i(c,null,p(e.accepted,((t,a)=>(u(),i("div",{key:a,class:["Law",{opened:a===e.opened}],onClick:t=>e.toggleOpen(a)},[l("h3",null,b(t.title),1),l("div",null,b(t.description),1)],10,["onClick"])))),128))));H.render=Q,H.__scopeId="data-v-87402bbe";var X=o({setup(){const e=Ue();return{store:e,allLaws:f((()=>e.state.allLaws)),acceptedLaws:f((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({declined:[]}),computed:{proposed(){return this.allLaws.filter((e=>{var t;return!(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!this.declined.includes(e.id)})).slice(0,6)}},methods:{accept(e){this.store.dispatch(je(e))},decline(e){this.declined.push(e)}}});const ee=m();h("data-v-54f052e4");const te={class:"ProposedLaws"},ae={class:"button-bar"};v();const ne=ee(((e,t,a,n,s,r)=>(u(),i("div",te,[(u(!0),i(c,null,p(e.proposed,((t,a)=>(u(),i("div",{key:a,class:"Law"},[l("h3",null,b(t.title),1),l("div",null,b(t.description),1),l("div",ae,[l("button",{class:"accept",onClick:a=>e.accept(t.id)},"✓",8,["onClick"]),l("button",{class:"decline",onClick:a=>e.decline(t.id)},"✗",8,["onClick"])])])))),128))]))));X.render=ne,X.__scopeId="data-v-54f052e4";var se=o({components:{GameSetup:q,LawProposals:X,AcceptedLaws:H},setup:()=>({store:Ue()}),methods:{advanceYear(){this.$store.dispatch(Pe())}}});const re=m();h("data-v-30db5640");const oe=l("h2",null,"Beschlossene Gesetze",-1),ie=l("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),le={class:"button-bar"};v();const ce=re(((e,t,a,n,s,r)=>{const o=d("LawProposals"),c=d("AcceptedLaws"),p=d("GameSetup");return u(),i(p,null,{default:re((()=>[l(o),oe,l(c),ie,l("div",le,[l("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));se.render=ce,se.__scopeId="data-v-30db5640";var ue=o({components:{GameSetup:q},methods:{newGame(){this.$router.push("/games")}}});const de=l("h2",null,"Deine erste Entscheidung steht bevor...",-1),pe=l("p",null,[y("Wähle weise, denn "),l("u",null,"alles hat Einfluss"),y(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),me=l("p",null,[y(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),l("br"),y(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),he=y(" Gar nicht so einfach, Politiker zu sein, oder? "),ve={class:"button-bar"};ue.render=function(e,t,a,n,s,r){const o=d("o"),c=d("GameSetup");return u(),i(c,null,{default:w((()=>[de,pe,me,l(o,null,{default:w((()=>[he])),_:1}),l("div",ve,[l("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var fe=o({methods:{start(){this.$router.push("/start")}}});const ge={class:"wrapper"},be=l("h2",null,"Stell dir vor...",-1),we=l("h3",null,"... du bist Politiker.",-1),ye=l("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),Le=l("p",null," Du hast vier Jahre Zeit um... ",-1),ke=l("ul",null,[l("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),l("li",null,"der Klimakatastrophe entgegenzusteuern"),l("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Ie={class:"button-bar"};fe.render=function(e,t,a,n,s,r){return u(),i("div",ge,[be,we,ye,Le,ke,l("div",Ie,[l("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};const Ee=[{path:"/",component:fe},{path:"/start",component:ue},{path:"/games",component:se,beforeEnter:()=>Re.dispatch(ze())},{path:"/games/:id",component:se,beforeEnter:e=>Re.dispatch(Me(e.params.id))}],Se=L({history:k(),routes:Ee});let Ge=0;function De(e){return r(r({},e),{id:""+ ++Ge})}const _e=[De({title:"Kohleverstromung einstellen",description:"Die Verstromung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,a){const n=a-t;return{co2emmissions:-200,stateDebt:-(n<18?0:1e3),unemployment:Math.max(50*(10-n)/10,0)}}}),De({title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:-1e3})}),De({title:"Kernenergienutzung verlängern",description:"Eigentlich bereits abgeschaltete Kernkraftwerke wieder in Betrieb nehmen und neue bauen.",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:1e3})}),De({title:"Windkraft fördern",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,a)=>({co2emmissions:-100,stateDebt:-1e3})})],Ce={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");return JSON.parse(t)},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}};function Oe(e){return Ce.saveGame(e),(e=>Ke("gameLoaded",{game:e}))(e)}const Ye={startGame(){const e={id:I(),currentYear:2021,values:r({},K),acceptedLaws:[]};Ce.saveGame(e),Se.push("/games/"+e.id)},loadGame(e,t){e.commit(Oe(Ce.loadGame(t.gameId)))},acceptLaw(e,t){const a=e.state.game,n={lawId:t.lawId,effectiveSince:a.currentYear+1};e.commit(Oe(r(r({},a),{acceptedLaws:[...a.acceptedLaws,n]})))},advanceYear(e){const t=e.state.game,a=t.acceptedLaws.map((function(e){const t=_e.find((t=>t.id===e.lawId));if(t)return r(r({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)})),n=function(e,t,a){const n=r({},e);return t.forEach((t=>{const s=t.effects(e,t.effectiveSince,a);Object.keys(s).forEach((e=>{n[e]+=s[e]||0}))})),n.co2budget-=n.co2emissions,n}(t.values,a,t.currentYear+1);e.commit(Oe(r(r({},t),{values:n,currentYear:t.currentYear+1})))}},ze=()=>Be("startGame",{}),Me=e=>Be("loadGame",{gameId:e}),je=e=>Be("acceptLaw",{lawId:e}),Pe=()=>Be("advanceYear",{}),$e={allLaws:_e,game:void 0},Ae=Symbol(),Be=(e,t)=>r({type:e},t),Ke=(e,t)=>r({type:e},t),Re=E({state:$e,mutations:C,actions:Ye});function Ue(){return S(Ae)}const Fe=G(D);Fe.use(Re,Ae),Fe.use(Se),Fe.mount("#app");
