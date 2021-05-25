var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))r.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{d as c,c as d,a as u,F as p,o as m,r as v,b as h,w as g,p as w,e as A,f as y,v as b,t as f,g as L,h as k,m as C,i as I,j as E,k as S,l as B,n as G,u as D,q as K}from"./vendor.111cde7e.js";var M=c({});const O=u("details",{class:"attribution"},[u("summary",null,"Attribution"),u("ul",null,[u("li",null,"CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons"),u("li",null,"Euro coin: Verdy_p, Public domain, via Wikimedia commons"),u("li",null,"Clapping hands: pngimg.com, CC 4.0 BY-NC")])],-1);M.render=function(e,t,i,n,a,r){const s=v("router-view");return m(),d(p,null,[u(s),O],64)};var x=c({props:{value:{type:Number,required:!0},color:{type:String,required:!0},img:{type:String}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>"empty"===e?"border-color: "+this.color:this.$props.img?"background-image: url("+this.$props.img+")":"background: "+this.color}}});const z=g();w("data-v-6b909266");const Q={class:"Indicator"};A();const T=z(((e,t,i,n,a,r)=>(m(),d("div",Q,[(m(!0),d(p,null,h(e.emptyCircles,(t=>(m(),d("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(m(!0),d(p,null,h(e.value,(t=>(m(),d("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));x.render=T,x.__scopeId="data-v-6b909266";var V=c({setup(){const e=tt();return{store:e,currentYear:y((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},data:()=>({orientation:"portrait"}),computed:{timespan:()=>29,years(){return this.currentYear-2020},size(){return(this.orientation.match(/landscape/)?"height":"width")+": "+this.years/this.timespan*100+"%"}},mounted(){window.addEventListener("orientationchange",this.setOrientation),this.setOrientation()},methods:{setOrientation(){screen.orientation?this.orientation=screen.orientation.type||screen.mozOrientation||screen.msOrientation:this.orientation=window.innerWidth>window.innerHeight?"landscape":"portrait"}}});const j=g()(((e,t,i,n,a,r)=>(m(),d("div",{class:"Indicator",style:e.size},null,4))));V.render=j,V.__scopeId="data-v-66888ea8";const N={co2budget:6700,stateDebt:1899,popularity:50,unemployment:2695,gdp:3332,electricityDemand:484.22,electricitySolar:51.42,electricityWind:131.85,electricityWater:18.4,electricityHardCoal:35.46,electricityBrownCoal:82.13,electricityBiomass:47.15,electricityNuclear:60.92,co2emissionsIndustry:186,co2emissionsBuildings:118,co2emissionsMobility:150,co2emissionsAgriculture:70,co2emissionsOthers:9},U={currentYear:2021,values:N,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function W(e){return o(l({},e),{get electricityCoal(){return this.electricityHardCoal+this.electricityBrownCoal},get electricityGas(){return this.electricityDemand-this.electricitySolar-this.electricityWind-this.electricityWater-this.electricityHardCoal-this.electricityBrownCoal-this.electricityBiomass-this.electricityNuclear},get co2emissionsEnergy(){return.399*this.electricityGas+.058*this.electricitySolar+.005*this.electricityWind+.02*this.electricityWater+.835*this.electricityHardCoal+1.137*this.electricityBrownCoal+0*this.electricityBiomass+.005*this.electricityNuclear},get co2emissions(){return this.co2emissionsEnergy+this.co2emissionsIndustry+this.co2emissionsMobility+this.co2emissionsBuildings+this.co2emissionsOthers}})}function R(e=U){return{id:b(),currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:W(e.values)}}function P(e,t,i){const n=l({},e);return t.forEach((e=>{const t=e.effects(n,e.effectiveSince,i);!function(e,t){Object.keys(t).forEach((i=>{e[i]+=t[i]||0}))}(n,t)})),n.co2budget-=n.co2emissions,n}function J(e){return Math.max(0,Math.min(100,e))}function X(e){if(0===e.values.co2emissions)return 100;return J(50*(e.values.co2budget*W(N).co2emissions/N.co2budget/e.values.co2emissions))}function H(e){return J(100-50*(e.values.stateDebt/N.stateDebt))}function Y(e,t){return e?Math.round(t(e)/10):0}var Z=c({components:{TimeIndicator:V,Indicator:x},setup:()=>({store:tt(),co2:"data:image/png;base64,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",coin:"/assets/euro.4b74462e.svg",hands:"/assets/clapping-hands.2a0f82d4.png"}),computed:{game(){return this.store.state.game},co2value(){return Y(this.game,X)},financeValue(){return Y(this.game,H)},popularityValue(){return Y(this.game,(e=>e.values.popularity))}}});const F=g();w("data-v-5b25e2ec");const q={class:"CurrentIndicators"};A();const _=F(((e,t,i,n,a,r)=>{const s=v("TimeIndicator"),l=v("Indicator");return m(),d("div",q,[u("div",null,[u(s),u(l,{value:e.co2value,color:"#EE8AC1",img:e.co2},null,8,["value","img"]),u(l,{value:e.financeValue,color:"#A9D18E",img:e.coin},null,8,["value","img"]),u(l,{value:e.popularityValue,color:"#8FAADC",img:e.hands},null,8,["value","img"])])])}));Z.render=_,Z.__scopeId="data-v-5b25e2ec";var $=c({setup(){const e=tt();return{store:e,event:y((()=>e.state.visibleEvent))}},methods:{close(){this.store.dispatch("eventAcknowledged",void 0)}}});const ee=g();w("data-v-fb5b8d74");const te={key:0,class:"dialog"},ie=u("header",null," Breaking News! ",-1);A();const ne=ee(((e,t,i,n,a,r)=>e.event?(m(),d("div",te,[u("div",null,[ie,u("main",null,[u("h2",null,f(e.event.title),1),u("p",null,f(e.event.description),1)]),u("footer",null,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},"Ok")])])])):L("",!0)));$.render=ne,$.__scopeId="data-v-fb5b8d74";var ae=c({components:{CurrentIndicators:Z,EventOccurred:$}});const re={class:"game-setup"},se={class:"wrapper"},le=u("h1",null,"#ich-kann-klima",-1);ae.render=function(e,t,i,n,a,r){const s=v("CurrentIndicators"),l=v("EventOccurred");return m(),d(p,null,[u("div",re,[u("div",se,[le,k(e.$slots,"default")]),u(s)]),u(l)],64)};var oe=c({setup(){const e=tt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return this.allLaws.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const ce=g()(((e,t,i,n,a,r)=>(m(!0),d(p,null,h(e.visibleAccepted,((t,i)=>(m(),d("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[u("h3",null,f(t.title),1),u("div",null,f(t.description),1)],10,["onClick"])))),128))));oe.render=ce,oe.__scopeId="data-v-5f028f12";var de=c({setup:()=>({store:tt()}),data:()=>({selectedLaw:void 0}),props:{proposedLaws:Array},methods:{select(e){this.selectedLaw=e},accept(e){this.store.dispatch("acceptLaw",{lawId:e})},decline(e){this.store.dispatch("rejectLaw",{lawId:e})}}});const ue=g();w("data-v-0b6efcd1");const pe={class:"ProposedLaws"},me={class:"button-bar"};A();const ve=ue(((e,t,i,n,a,r)=>(m(),d("div",pe,[(m(!0),d(p,null,h(e.proposedLaws,((t,i)=>(m(),d("div",{key:i,class:["Law",{selected:t.id===e.selectedLaw}]},[u("div",{onClick:i=>e.select(t.id)},[u("h3",null,f(t.title),1),u("div",null,f(t.description),1),u("div",me,[u("button",{class:"accept",onClick:i=>e.accept(t.id)},"✓",8,["onClick"]),u("button",{class:"decline",onClick:i=>e.decline(t.id)},"✗",8,["onClick"])])],8,["onClick"])],2)))),128))]))));function he(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}de.render=ve,de.__scopeId="data-v-0b6efcd1";const ge=[{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){e.state.game&&(e.state.game.values.popularity-=20)},probability:()=>Math.random()},{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=he(e.getters.proposedLaws);t&&e.dispatch("rejectLaw",{lawId:t.id})},probability:e=>he(e.getters.proposedLaws)?Math.random():0}];var we=c({components:{GameSetup:ae,LawProposals:de,AcceptedLaws:oe},setup(){const e=tt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({eventOccured:!1}),computed:l({},C(["proposedLaws"])),mounted(){setTimeout(this.initiateEvent,2e4)},methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)},initiateEvent(){if(this.store.state.game){const e=function(e,t){const i=t.map((t=>o(l({},t),{priority:t.probability(e)*Math.random()}))).filter((e=>e.priority)).sort(((e,t)=>t.priority-e.priority));return i.length?i[0]:null}(this.store,ge);e&&this.store.dispatch("applyEvent",{event:e})}},advanceYear(){this.store.dispatch("advanceYear",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const Ae=g();w("data-v-48b34a9c");const ye=u("h2",null,"Beschlossene Gesetze",-1),be=u("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),fe={class:"button-bar"};A();const Le=Ae(((e,t,i,n,a,r)=>{const s=v("LawProposals"),l=v("AcceptedLaws"),o=v("GameSetup");return m(),d(o,null,{default:Ae((()=>[u(s,{"proposed-laws":e.proposedLaws},null,8,["proposed-laws"]),ye,u(l),be,u("div",fe,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));we.render=Le,we.__scopeId="data-v-48b34a9c";var ke=c({components:{GameSetup:ae},methods:{newGame(){this.$router.push("/games")}}});const Ce=u("h2",null,"Deine erste Entscheidung steht bevor...",-1),Ie=u("p",null,[E("Wähle weise, denn "),u("u",null,"alles hat Einfluss"),E(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),Ee=u("p",null,[E(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),u("br"),E(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),Se=E(" Gar nicht so einfach, Politiker zu sein, oder? "),Be={class:"button-bar"};ke.render=function(e,t,i,n,a,r){const s=v("o"),l=v("GameSetup");return m(),d(l,null,{default:I((()=>[Ce,Ie,Ee,u(s,null,{default:I((()=>[Se])),_:1}),u("div",Be,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var Ge=c({methods:{start(){this.$router.push("/start")}}});const De={class:"wrapper"},Ke=u("h2",null,"Stell dir vor...",-1),Me=u("h3",null,"... du bist Politiker.",-1),Oe=u("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),xe=u("p",null," Du hast vier Jahre Zeit um... ",-1),ze=u("ul",null,[u("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),u("li",null,"der Klimakatastrophe entgegenzusteuern"),u("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Qe={class:"button-bar"};Ge.render=function(e,t,i,n,a,r){return m(),d("div",De,[Ke,Me,Oe,xe,ze,u("div",Qe,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};const Te=[{path:"/",component:Ge},{path:"/start",component:ke},{path:"/games",component:we},{path:"/games/:id",component:we}],Ve=S({history:B(),routes:Te});var je={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,a=n<18?4.3/18:0,r=(10-n)/55,s=Math.max(50*r,0);return{electricityHardCoal:-e.electricityHardCoal,electricityBrownCoal:-e.electricityBrownCoal,stateDebt:2.5-a,unemployment:s}},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:1e4-e.values.unemployment/100},Ne={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,i)=>({stateDebt:-37,electricityHardCoal:-Math.min(.1*N.electricityHardCoal,e.electricityHardCoal),electricityBrownCoal:-Math.min(.05*N.electricityBrownCoal,e.electricityBrownCoal),electricityWind:5,electricitySolar:3,electricityWater:.5}),priority:e=>(2050-e.currentYear)/29*100},Ue={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:(e,t,i)=>({electricityNuclear:104.3-e.electricityNuclear,stateDebt:-2.5,popularity:.04*-e.popularity}),priority:e=>1e3*(e.values.electricityGas-56.77)/56.77},We={title:"Windenergie subventionieren",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,i)=>({electricityWind:20,stateDebt:1}),priority:e=>100*((e.values.electricityDemand-e.values.electricityWind-e.values.electricitySolar-e.values.electricityWater-e.values.electricityBiomass)/e.values.electricityDemand)},Re={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects:(e,t,i)=>({electricityNuclear:({2021:60.45,2022:30.21}[i]||0)-e.electricityNuclear}),priority:e=>0},Pe={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>t===i?{co2emissionsAgriculture:-Math.min(e.co2emissionsAgriculture,10),stateDebt:-10,popularity:-.2*e.popularity}:{stateDebt:-10},priority:e=>100-e.values.unemployment/100};const Je=Object.entries({KohleverstromungEinstellen:je,EnergiemixRegeltDerMarkt:Ne,KernenergienutzungVerlaengern:Ue,WindenergieSubventionieren:We,FoerderungFuerTierhaltungAbschaffen:Pe,InitialAtomausstieg:Re}).map((([e,t])=>{return i=e,o(l({},t),{id:i});var i}));function Xe(e,t){const i=6-e.proposedLaws.length;if(i>0){const n=t.filter((t=>!e.proposedLaws.includes(t.id))).filter((t=>{var i;return!(null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id)))})).filter((t=>{var i;return!(null==(i=e.rejectedLaws)?void 0:i.includes(t.id))})).filter((e=>{var t;return!(null==(t=e.labels)?void 0:t.includes("hidden"))})).map((t=>({law:t,priority:t.priority?t.priority(e):1}))).filter((e=>e.priority>0)).sort(((e,t)=>e.priority-t.priority)).slice(0,i);e.proposedLaws=e.proposedLaws.concat(n.map((e=>e.law.id)))}}function He(e,t){e.proposedLaws=e.proposedLaws.filter((e=>e!==t)),Xe(e,Je)}function Ye(e){const t=function(e){const t=Je.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}const Ze={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");const i=R(JSON.parse(t));return i.id=e,i},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}},Fe={startGame(e){const t=R();t.acceptedLaws=e.state.allLaws.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:t.currentYear}))),Xe(t,e.state.allLaws),Ze.saveGame(t),Ve.push("/games/"+t.id)},loadGame(e,t){const i=Ze.loadGame(t.gameId);Ze.saveGame(i),e.commit("gameLoaded",{game:i})},acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},a=Ye(n).removeLawsWithLabels,r=i.acceptedLaws.map(Ye).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...r,n],He(i,t.lawId),Ze.saveGame(i),e.commit("gameLoaded",{game:i})},rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],He(i,t.lawId),Ze.saveGame(i),e.commit("gameLoaded",{game:i})},advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(Ye);t.currentYear++,t.values=P(t.values,i,t.currentYear),Ze.saveGame(t),e.commit("gameLoaded",{game:t})},applyEvent(e,t){const i=l({},e.state.game);t.event.apply(e),e.commit("showEvent",t),Ze.saveGame(i),e.commit("gameLoaded",{game:i})},eventAcknowledged(e){e.commit("hideEvent",void 0)}},qe={gameLoaded(e,t){e.game=t.game},showEvent(e,t){e.visibleEvent=t.event},hideEvent(e){e.visibleEvent=null}},_e={proposedLaws:e=>e.game&&e.game.proposedLaws?e.game.proposedLaws.map((t=>{const i=e.allLaws.find((e=>e.id===t));return i||console.error(`Inconsistency: Proposed law #${t} not found`),i})).filter((e=>e)):[]},$e={allLaws:Je,game:void 0,visibleEvent:null},et=Symbol();function tt(){return D(et)}const it=G({state:$e,mutations:qe,actions:Fe,getters:_e}),nt=K(M);nt.use(it,et),nt.use(Ve),nt.mount("#app");