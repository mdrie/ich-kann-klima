var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&s(e,i,t[i]);if(n)for(var i of n(t))r.call(t,i)&&s(e,i,t[i]);return e},o=(e,n)=>t(e,i(n));import{d as c,c as d,a as u,F as m,o as p,r as h,b as v,w as g,p as w,e as b,f as y,v as A,t as f,g as L,h as k,m as C,i as D,j as I,k as S,l as E,n as G,u as M,q as B}from"./vendor.111cde7e.js";var z=c({});const O=u("details",{class:"attribution"},[u("summary",null,"Attribution"),u("ul",null,[u("li",null,"CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons"),u("li",null,"Euro coin: Verdy_p, Public domain, via Wikimedia commons"),u("li",null,"Clapping hands: pngimg.com, CC 4.0 BY-NC")])],-1);z.render=function(e,t,i,n,a,r){const s=h("router-view");return p(),d(m,null,[u(s),O],64)};var K=c({props:{value:{type:Number,required:!0},color:{type:String,required:!0},img:{type:String}},computed:{emptyCircles(){return 10-this.value},filledCircles(){return this.value},style(){return e=>"empty"===e?"border-color: "+this.color:this.$props.img?"background-image: url("+this.$props.img+")":"background: "+this.color}}});const x=g();w("data-v-6b909266");const W={class:"Indicator"};b();const T=x(((e,t,i,n,a,r)=>(p(),d("div",W,[(p(!0),d(m,null,v(e.emptyCircles,(t=>(p(),d("div",{class:"circle",style:e.style("empty")},null,4)))),256)),(p(!0),d(m,null,v(e.value,(t=>(p(),d("div",{class:"circle",style:e.style("filled")},null,4)))),256))]))));K.render=T,K.__scopeId="data-v-6b909266";var V=c({setup(){const e=mt();return{store:e,currentYear:y((()=>{var t;return null==(t=e.state.game)?void 0:t.currentYear}))}},data:()=>({orientation:"portrait"}),computed:{timespan:()=>29,years(){return this.currentYear-2020},size(){return(this.orientation.match(/landscape/)?"height":"width")+": "+this.years/this.timespan*100+"%"}},mounted(){window.addEventListener("orientationchange",this.setOrientation),this.setOrientation()},methods:{setOrientation(){screen.orientation?this.orientation=screen.orientation.type||screen.mozOrientation||screen.msOrientation:this.orientation=window.innerWidth>window.innerHeight?"landscape":"portrait"}}});const N=g()(((e,t,i,n,a,r)=>(p(),d("div",{class:"Indicator",style:e.size},null,4))));V.render=N,V.__scopeId="data-v-66888ea8";const Q={co2budget:6700,stateDebt:1899,popularity:50,unemployment:2695,gdp:3332,electricityDemand:480.54,electricitySolar:51.42,electricityWind:131.85,electricityWater:14.99,electricityHardCoal:35.46,electricityBrownCoal:82.13,electricityBiomass:43.19,electricityNuclear:60.91,co2emissionsIndustry:186,co2emissionsBuildings:118,co2emissionsMobility:150,co2emissionsAgriculture:70,co2emissionsOthers:9},j={currentYear:2021,values:Q,acceptedLaws:[],proposedLaws:[],rejectedLaws:[]};function P(e){return o(l({},e),{get electricityCoal(){return this.electricityHardCoal+this.electricityBrownCoal},get electricityGas(){return this.electricityDemand-this.electricitySolar-this.electricityWind-this.electricityWater-this.electricityHardCoal-this.electricityBrownCoal-this.electricityBiomass-this.electricityNuclear},get co2emissionsEnergy(){return.399*this.electricityGas+.058*this.electricitySolar+.005*this.electricityWind+.02*this.electricityWater+.835*this.electricityHardCoal+1.137*this.electricityBrownCoal+0*this.electricityBiomass+.005*this.electricityNuclear},get co2emissions(){return this.co2emissionsEnergy+this.co2emissionsIndustry+this.co2emissionsMobility+this.co2emissionsBuildings+this.co2emissionsOthers}})}function U(e=j){return{id:A(),currentYear:e.currentYear,acceptedLaws:e.acceptedLaws,proposedLaws:e.proposedLaws,rejectedLaws:e.rejectedLaws,values:P(e.values),over:!1}}function R(e,t,i){const n=l({},e);return t.forEach((e=>{const t=e.effects(n,e.effectiveSince,i);!function(e,t){Object.keys(t).forEach((i=>{e[i]+=t[i]||0}))}(n,t)})),n.co2budget-=n.co2emissions,n}function J(e){return Math.max(0,Math.min(100,e))}function X(e){if(0===e.values.co2emissions)return 100;return J(50*(e.values.co2budget*P(Q).co2emissions/Q.co2budget/e.values.co2emissions))}function H(e){return J(100-50*(e.values.stateDebt/Q.stateDebt))}function Y(e,t){return e?Math.round(t(e)/10):0}var Z=c({components:{TimeIndicator:V,Indicator:K},setup:()=>({store:mt(),co2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjBBkJByjxsHjrAAAJQklEQVR42u2ceWxU1xXGfzPeAdvBLDaLXfbFYo2BAkpZQiCigpS2zh9NVRqlkKalaakiohKkNK1aCSWhJKRVEG1UokIgSaOIRRUpAprWSZsChmAg7JjFYKhtbDPex/76xzwvDPbMM3PHniHvu38xPtz3vu++d+855577wIEDBw4cOHDgwIEDBw4cOHDgwIGDLxVcYes5llT60Ic0kknETSPVVFJKCaVU0XT/ChDDQCYwlQkMoz/JJBCDG4AmGqilnGuc5jCHOEX5/SZAf2aziJlkkhDEUlRyin3s5ig198erNIzVHKEOdardYhePkxrt9AewmrM0dZJ8c6tlP9+mR7SSjyeXgzTeI/nmVsW75IRxSg4bBvMHbodIvrldYSXJ0UV/Bp8YIu9r9WxjeLSQd5PLRaP0fe0QD0UD/RiWUxIG+kJc5LHIp/9jKsJEX4hr5Eb2mv8DysNI3yfBosgVYAk3w0xfiHPMiEz6UznbBfSF+JSvRB79DPZ1EX0h3iIpsujH8nIX0hc1PBVZAizkVpcKIE4yMnLC4TT+ytwuF/01nmuTPnGRynBGkUUacdRRyiXOcIHbXXErz9DQxeMvxA2+2vICTuLX/IeyO0IvLyX8izVkW2mXME5/h7uBvhCbiAFGsoHigKHU2vCuGsvxdpMA15lKLl8EtWviCIvC9Rwkd+ny50/sMGU2bUv4CXHhEGAOld0mQOeah1XEdiassTsBPhw1GaoZ3CDfbKep/DtKxt/XiviaWQFyKI0qAcRe0uzmdexgIr2jLFc5h8dNCjAh6vK1sTxJH1MCxDMqCtP1k5hpSoBkBkahAIk8YkqAlKibAZqn7mRTT0DPqBQgi75mBOhBfFQKkGJKgHjb/mKk+YQ9zQgQrXDZGTg7AtTTGJUCeO2UXtgRoAFvVApQbacEJ1jgmMBcniUlKgW4wc3QBHAxgedYEm179i04wa1QBOjJk6yKxL0ZmxAHQpm7Mtnc6YKnyGoXGGEvamo/+nuDWaEPQhz9GUAKopwiSjsckFj6M4g+JNBAOde4Tl3oF/+A8/f6X6dxNPQRSFGutuuMylWjapXpuN7WEiXfZZesb2mrTqtcdWpQvW6rULu0TP1Cu/5ZRt8r/cl8Hjr9B7VLtfJHjXYo289up2p0N7zK08NyhSLA88ywM337JzqGssVeHB0Ic9nIKEBc5xhXEelkM4RYYBtLW9yKebzJSKCJQg5xkWqSGUEOg3EBRaxgRyi3UcHnfMhOLiL7yc/toY/+OJ2QJFVonbKVIITilKVlOigpTz0tu/E6KUkq0280TDHWr3Eao/W6LUk6q4mh3k0j53jJ7lrmYnXou389tN2i/7Ri/f42UOu1wfo1Ue9Y9Je2kKdFhJWqliS9rXgTGysFLLVTaTAr4N6bzbZIHknSy3fR91FrHv/5qpTUpJfkbscuUZslSSWaZqrS4E9kBXv8/xb6hWK1VZJ0WsMC2rm0UZJ0QpkdWMxUmSRpjTnPII+cQAIsoz70iwzXJUnSuiB26SqQJL3aoUVP7ZMk7TLxErSWW8zqKBpM54cmNhXHMwCo40AQu6FkAV4+7dCiiiMADDeZkBzLJv81rlmAx5hs4gpjiANKORNUgF5AZUBn7SwAaXa3eOxhNL9n7N0CpPCEmbTXYABKKQtil4EbqAhodwMvkGQ6GJ3MK21zhT4BpjLFTA7qAQA81AbNVwLUBLSrohGIDXr6ptP4Oj9vHW6fAAvpZUYA3zTSGNT1irEi1uAumuy7cfZv8xnmtRWgt4nIz3ezXisKDPY+NVhp20DzbiJuwBv0aboHpLHKelhxAyNM1eKJCsulCHYAqMLKuQTKW/clDqimMhzpktksaRVgfLMaoaPIuvX+QeyKaQRSSA9g4zs6cpPScAgQx1O+9dUNZJvr9xReII2JQewK8QC97lyR/LKxvnX5dLhOV071VZG4iWOouV4LKAbcLAziVRVyGYA5HSYlx1h+a164NiUSWYIb3PQgw1yvFy3fbkGQpML/+MTKCEzqYLtiKenAVfaFL236kG/bP4MCk8nIxVY0uL/dMGeyvmv59vNUIUl6Xw+0Y/dNlUqSNrQbKxpqtSwEGGL2AESS/mKltfZoSptI36UMrdQlFaivEEqwAl6v/qwhfj0s1RUrVhwd3szxCxBLjNm93xp+xQimA48ygT3kUUQTfclhAWOJJd96p+v4LdlMJYbvM40P+IxivCQzhsU8Qg+gmF9wOrx7B2Nxw1DOm1Z2nPaq0XoOmlSr2pZ/3dDTbVKdE/UPNVl/qVO5SuVpsTypxX5JUZf6aZrm6UGlmLrTj0mGwTbKkDvd+ul5HbsjL+zVZb2l6X7vdIbW6ITq7sgIN+i81mmkX49pekEF8qhBldqvOWbus4AMF2l8ZCYU8ne408lhIpkkUU8xx8mnsJ1tZhcDmMIkskjFhYerHOMgl+76xMRy3uAQH1PLXOZwim9Y4XJIuMB8SGRPZGxmxSgmwE7ALH3PevT76e+SfmTimpcYHUstVyNjNzOww/PPNj7EXuYzwFD44oZwT7XmkQBmHOR66tzAcRN7kV2HJGZQy1ETXXmodgNfcC2aBFjAXPbxXxNdlVDlBoqsBGxUYDgvUslaPCY6K/Q9AQ18ZD7vFB7051XG8EvyzHR3vFXW85GxFAZufbRFtXpRcWb6u83sVm9kQ+TT763NqtNaJZnq8Sj92uZHbkQ2/VT9UbV6xRx98TtorRHK531WRPLb/yzLKMbLz3ADLjxspSSUDiv9qy+yORe54+/SJlWpQrflkUceVelKqMUTO3wVA21LZFawPjynLk1gEIPaLFUu6jgViv/m4Tvs9v+xF9uiujKwM20Lie3pMor8LwX9Cx3n7edw6b6nX82yQG9HbqQviCGXTL0WeMPZxRNd8p2g7mrvBj9Q6SKXK/cp/Z0MsrdMzDVRLxxhrZH37NL3rQjvmagbi6Cp73V7p4lbkcxPw/LFwO5ohSxvf+UPNhuMY2PYvhvYdR/VeKeDPVibpQTTeZPLIX82tXtaJbtZHKhO2N53AWIYzgIeZRLpkRst+KGaCxzgQz6jOvBD3plsdCbjmcAoMkmjJ/ER91kF0YCHEgo5Tj7HKQn+DfN7oeAmiR4kER9xB2+bqKeGKmqiJcfpwIEDBw4cOHDgwIEDBw4cdAv+D2kV0Pac7aeTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTI1VDA5OjA3OjQwKzAwOjAwchxCVwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0yNVQwOTowNzo0MCswMDowMANB+usAAAAASUVORK5CYII=",coin:"/assets/euro.4b74462e.svg",hands:"/assets/clapping-hands.2a0f82d4.png"}),computed:{game(){return this.store.state.game},co2value(){return Y(this.game,X)},financeValue(){return Y(this.game,H)},popularityValue(){return Y(this.game,(e=>e.values.popularity))}}});const F=g();w("data-v-5b25e2ec");const q={class:"CurrentIndicators"};b();const _=F(((e,t,i,n,a,r)=>{const s=h("TimeIndicator"),l=h("Indicator");return p(),d("div",q,[u("div",null,[u(s),u(l,{value:e.co2value,color:"#EE8AC1",img:e.co2},null,8,["value","img"]),u(l,{value:e.financeValue,color:"#A9D18E",img:e.coin},null,8,["value","img"]),u(l,{value:e.popularityValue,color:"#8FAADC",img:e.hands},null,8,["value","img"])])])}));Z.render=_,Z.__scopeId="data-v-5b25e2ec";var $=c({setup(){const e=mt();return{store:e,event:y((()=>e.state.visibleEvent))}},methods:{close(){this.store.dispatch("eventAcknowledged",void 0)}}});const ee=g();w("data-v-fb5b8d74");const te={key:0,class:"dialog"},ie=u("header",null," Breaking News! ",-1);b();const ne=ee(((e,t,i,n,a,r)=>e.event?(p(),d("div",te,[u("div",null,[ie,u("main",null,[u("h2",null,f(e.event.title),1),u("p",null,f(e.event.description),1)]),u("footer",null,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.close&&e.close(...t))},"Ok")])])])):L("",!0)));$.render=ne,$.__scopeId="data-v-fb5b8d74";var ae=c({components:{CurrentIndicators:Z,EventOccurred:$}});const re={class:"game-setup"},se={class:"wrapper"},le=u("h1",null,"#ich-kann-klima",-1);ae.render=function(e,t,i,n,a,r){const s=h("CurrentIndicators"),l=h("EventOccurred");return p(),d(m,null,[u("div",re,[u("div",se,[le,k(e.$slots,"default")]),u(s)]),u(l)],64)};var oe=c({setup(){const e=mt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({opened:void 0}),computed:{visibleAccepted(){return this.allLaws.filter((e=>{var t,i;return(null==(t=this.acceptedLaws)?void 0:t.some((t=>t.lawId===e.id)))&&!(null==(i=e.labels)?void 0:i.includes("hidden"))}))}},methods:{toggleOpen(e){this.opened=this.opened===e?void 0:e}}});const ce=g()(((e,t,i,n,a,r)=>(p(!0),d(m,null,v(e.visibleAccepted,((t,i)=>(p(),d("div",{key:i,class:["Law",{opened:i===e.opened}],onClick:t=>e.toggleOpen(i)},[u("h3",null,f(t.title),1),u("div",null,f(t.description),1)],10,["onClick"])))),128))));oe.render=ce,oe.__scopeId="data-v-5f028f12";var de=c({setup:()=>({store:mt()}),data:()=>({selectedLaw:void 0}),props:{proposedLaws:Array},methods:{select(e){this.selectedLaw=e},accept(e){this.store.dispatch("acceptLaw",{lawId:e})},decline(e){this.store.dispatch("rejectLaw",{lawId:e})}}});const ue=g();w("data-v-0b6efcd1");const me={class:"ProposedLaws"},pe={class:"button-bar"};b();const he=ue(((e,t,i,n,a,r)=>(p(),d("div",me,[(p(!0),d(m,null,v(e.proposedLaws,((t,i)=>(p(),d("div",{key:i,class:["Law",{selected:t.id===e.selectedLaw}]},[u("div",{onClick:i=>e.select(t.id)},[u("h3",null,f(t.title),1),u("div",null,f(t.description),1),u("div",pe,[u("button",{class:"accept",onClick:i=>e.accept(t.id)},"✓",8,["onClick"]),u("button",{class:"decline",onClick:i=>e.decline(t.id)},"✗",8,["onClick"])])],8,["onClick"])],2)))),128))]))));de.render=he,de.__scopeId="data-v-0b6efcd1";var ve=c({components:{GameSetup:ae,LawProposals:de,AcceptedLaws:oe},setup(){const e=mt();return{store:e,allLaws:y((()=>e.state.allLaws)),acceptedLaws:y((()=>{var t;return null==(t=e.state.game)?void 0:t.acceptedLaws}))}},data:()=>({eventOccured:!1}),computed:l({},C(["proposedLaws"])),methods:{startGame(e){e?this.store.dispatch("loadGame",{gameId:e}):this.store.dispatch("startGame",void 0)},advanceYear(){this.store.dispatch("advanceYear",void 0)}},beforeRouteEnter(e,t,i){i((t=>t.startGame(e.params.id)))}});const ge=g();w("data-v-01c540ce");const we=u("h2",null,"Beschlossene Gesetze",-1),be=u("p",null,"Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.",-1),ye={class:"button-bar"};b();const Ae=ge(((e,t,i,n,a,r)=>{const s=h("LawProposals"),l=h("AcceptedLaws"),o=h("GameSetup");return p(),d(o,null,{default:ge((()=>[u(s,{"proposed-laws":e.proposedLaws},null,8,["proposed-laws"]),we,u(l),be,u("div",ye,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.advanceYear&&e.advanceYear(...t))},"Jahr abschließen")])])),_:1})}));ve.render=Ae,ve.__scopeId="data-v-01c540ce";var fe=c({components:{GameSetup:ae},methods:{newGame(){this.$router.push("/games")}}});const Le=u("h2",null,"Deine erste Entscheidung steht bevor...",-1),ke=u("p",null,[I("Wähle weise, denn "),u("u",null,"alles hat Einfluss"),I(" auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.")],-1),Ce=u("p",null,[I(" Durch manche Entscheidungen entstehen neue Möglichkeiten."),u("br"),I(" Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst. ")],-1),De=u("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Ie={class:"button-bar"};fe.render=function(e,t,i,n,a,r){const s=h("GameSetup");return p(),d(s,null,{default:D((()=>[Le,ke,Ce,De,u("div",Ie,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Leg' los")])])),_:1})};var Se=c({methods:{start(){this.$router.push("/start")}}});const Ee={class:"wrapper"},Ge=u("h2",null,"Stell dir vor...",-1),Me=u("h3",null,"... du bist Politiker.",-1),Be=u("p",null," Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl! ",-1),ze=u("p",null," Du hast vier Jahre Zeit um... ",-1),Oe=u("ul",null,[u("li",null,"Beliebtheit in der Bevölkerung zu erlangen"),u("li",null,"der Klimakatastrophe entgegenzusteuern"),u("li",null,"das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen")],-1),Ke={class:"button-bar"};Se.render=function(e,t,i,n,a,r){return p(),d("div",Ee,[Ge,Me,Be,ze,Oe,u("div",Ke,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.start&&e.start(...t))},"Starte das Spiel!")])])};var xe=c({components:{GameSetup:ae},methods:{newGame(){this.$router.push("/games")}}});const We={class:"wrapper"},Te=u("h2",null,"Das Spiel ist leider zu Ende",-1),Ve=u("p",null,"Deine Entscheidungen haben etwas verändert - soviel kann man sagen.",-1),Ne=u("p",null,"Gar nicht so einfach, Politiker zu sein, oder?",-1),Qe={class:"button-bar"};xe.render=function(e,t,i,n,a,r){const s=h("GameSetup");return p(),d(s,null,{default:D((()=>[u("div",We,[Te,Ve,Ne,u("div",Qe,[u("button",{onClick:t[1]||(t[1]=(...t)=>e.newGame&&e.newGame(...t))},"Neuer Versuch")])])])),_:1})};const je=[{path:"/",component:Se},{path:"/start",component:fe},{path:"/games",component:ve},{path:"/games/:id",component:ve},{path:"/games/:id/over",component:xe}],Pe=S({history:E(),routes:je});var Ue={title:"Kohleverstromung einstellen",description:"Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",effects(e,t,i){const n=i-t,a=n<18?4.3/18:0,r=(10-n)/55,s=Math.max(50*r,0);return{electricityHardCoal:-e.electricityHardCoal,electricityBrownCoal:-e.electricityBrownCoal,stateDebt:2.5-a,unemployment:s}},priority:e=>e.values.electricityCoal/e.values.electricityDemand<=.1?0:1e4-e.values.unemployment/100},Re={title:"Energiemix regelt der Markt",description:"Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",effects:(e,t,i)=>({stateDebt:-37,electricityHardCoal:Math.max(-e.electricityHardCoal,-.1*Q.electricityHardCoal),electricityBrownCoal:Math.max(-e.electricityBrownCoal,-.05*Q.electricityBrownCoal),electricityWind:5,electricitySolar:3,electricityWater:.5}),priority:e=>(2050-e.currentYear)/29*100},Je={title:"Kernenergienutzung verlängern",description:"Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",removeLawsWithLabels:["Kernenergie"],effects:(e,t,i)=>({electricityNuclear:104.3-e.electricityNuclear,stateDebt:-2.5,popularity:Math.max(-e.popularity,-4)}),priority:e=>1e3*(e.values.electricityGas-56.77)/56.77},Xe={title:"Initial: Atomausstieg",description:"Atomausstieg finded wie beschlossen 2022 statt",labels:["hidden","initial","Kernenergie"],effects:(e,t,i)=>({electricityNuclear:({2021:60.45,2022:30.21}[i]||0)-e.electricityNuclear}),priority:e=>0},He={title:"Windenergie subventionieren",description:"Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",effects:(e,t,i)=>({electricityWind:20,stateDebt:1}),priority:e=>100*((e.values.electricityDemand-e.values.electricityWind-e.values.electricitySolar-e.values.electricityWater-e.values.electricityBiomass)/e.values.electricityDemand)},Ye={title:"Dämmung von Wohngebäuden fördern",description:"Die nachträgliche Dämmung von Wohngebäuden wird mit günstigen Krediten gefördert.",effects:(e,t,i)=>i-t>=2?{stateDebt:1,co2emissionsBuildings:Math.max(-e.co2emissionsBuildings,-2)}:{stateDebt:1},priority:e=>1e3*(e.values.co2emissionsBuildings/e.values.co2emissions-.15)},Ze={title:"Nahverkehr Ausbauen",description:"Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",effects:(e,t,i)=>i-t>=5?{stateDebt:3,co2emissionsMobility:Math.max(-e.co2emissionsMobility,-2),popularity:Math.min(100-e.popularity,2)}:{stateDebt:3},priority:e=>1e3*(e.values.co2emissionsMobility/e.values.co2emissions-.25)},Fe={title:"Förderung für Tierhaltung abschaffen",description:"Subventionen für Tierhaltung werden ersatzlos gestrichen",effects:(e,t,i)=>t===i?{co2emissionsAgriculture:Math.max(-e.co2emissionsAgriculture,-10),stateDebt:-10,popularity:Math.max(-e.popularity,-20)}:{stateDebt:-10},priority:e=>100-e.values.unemployment/100};const qe=Object.entries({KohleverstromungEinstellen:Ue,EnergiemixRegeltDerMarkt:Re,KernenergienutzungVerlaengern:Je,InitialAtomausstieg:Xe,WindenergieSubventionieren:He,DaemmungVonWohngebaeudenFoerdern:Ye,NahverkehrAusbauen:Ze,FoerderungFuerTierhaltungAbschaffen:Fe}).map((([e,t])=>{return i=e,o(l({},t),{id:i});var i}));function _e(e,t){const i=6-e.proposedLaws.length;if(i>0){const n=t.filter((t=>!e.proposedLaws.includes(t.id))).filter((t=>{var i;return!(null==(i=e.acceptedLaws)?void 0:i.some((e=>e.lawId===t.id)))})).filter((t=>{var i;return!(null==(i=e.rejectedLaws)?void 0:i.includes(t.id))})).filter((e=>{var t;return!(null==(t=e.labels)?void 0:t.includes("hidden"))})).map((t=>({law:t,priority:t.priority?t.priority(e):1}))).filter((e=>e.priority>0)).sort(((e,t)=>e.priority-t.priority)).slice(0,i);e.proposedLaws=e.proposedLaws.concat(n.map((e=>e.law.id)))}}function $e(e,t){e.proposedLaws=e.proposedLaws.filter((e=>e!==t)),_e(e,qe)}function et(e){const t=function(e){const t=qe.find((t=>t.id===e));if(t)return t;throw Error(`Law #${e} not found`)}(e.lawId);if(t)return o(l({},t),{effectiveSince:e.effectiveSince});throw Error(`Law #${e.lawId} not found`)}function tt(e,t){let i;function n(){if(e.state.game){const i=t.map((t=>o(l({},t),{priority:t.probability(e)*Math.random()}))).filter((e=>e.priority)).sort(((e,t)=>t.priority-e.priority));i.length&&e.dispatch("applyEvent",{event:i[0]})}}return{start(){this.pause(),i=setTimeout(n,6e4*Math.random())},pause(){i&&clearTimeout(i),i=0},initiateEvent:n}}function it(e){return e.find((e=>e.title.match(/subvention/i)&&e.title.match(/abbau/i)))}const nt=[{title:"Social Media Alarm!",description:"Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im\n    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.\n    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.\n  ",apply(e){const t=e.state.game;t&&(t.values.popularity+=Math.max(-t.values.popularity,-20))},probability:()=>Math.random()},{title:"Anruf von befreundetem Unternehmer",description:"Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine\n    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen\n    nicht zustimmen wirst.\n  ",apply(e){const t=it(e.getters.proposedLaws);t&&e.dispatch("rejectLaw",{lawId:t.id})},probability:e=>it(e.getters.proposedLaws)?Math.random():0},{title:"Wahl verloren",description:"Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.\n    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter\n    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.popularity<=0?1:0},{title:"Zusammenbruch des Finanzsystems",description:"Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden\n    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen\n    könntest. Das Spiel ist damit leider beendet.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.stateDebt>2*Q.stateDebt?1:0},{title:"Du hast durchgehalten",description:"Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,\n    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren\n    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&2050===e.state.game.currentYear?1:0},{title:"Hitzehölle",description:"Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen\n  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.\n  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.\n  ",apply(e){e.dispatch("gameOver")},probability:e=>e.state.game&&e.state.game.values.co2budget<=0?1:0}],at={loadGame(e){const t=localStorage.getItem("game");if(!t)throw Error("Game not found");const i=U(JSON.parse(t));return i.id=e,i},saveGame(e){localStorage.setItem("game",JSON.stringify(e))}};let rt;function st(){return rt||(rt=tt(pt,nt))}const lt={startGame(e){const t=U();t.acceptedLaws=e.state.allLaws.filter((e=>{var t;return null==(t=e.labels)?void 0:t.includes("initial")})).map((e=>({lawId:e.id,effectiveSince:t.currentYear}))),_e(t,e.state.allLaws),at.saveGame(t),st().start(),Pe.push("/games/"+t.id)},loadGame(e,t){const i=at.loadGame(t.gameId);at.saveGame(i),st().start(),e.commit("gameLoaded",{game:i})},gameOver(e){e.commit("gameOver",void 0)},acceptLaw(e,t){const i=l({},e.state.game),n={lawId:t.lawId,effectiveSince:i.currentYear+1},a=et(n).removeLawsWithLabels,r=i.acceptedLaws.map(et).filter((e=>!(null==a?void 0:a.some((t=>{var i;return null==(i=e.labels)?void 0:i.includes(t)}))))).map((e=>({lawId:e.id,effectiveSince:e.effectiveSince})));i.acceptedLaws=[...r,n],$e(i,t.lawId),at.saveGame(i),e.commit("gameLoaded",{game:i})},rejectLaw(e,t){const i=l({},e.state.game);i.rejectedLaws=[...i.rejectedLaws,t.lawId],$e(i,t.lawId),at.saveGame(i),e.commit("gameLoaded",{game:i})},advanceYear(e){const t=l({},e.state.game),i=t.acceptedLaws.map(et);t.currentYear++,t.values=R(t.values,i,t.currentYear),at.saveGame(t),e.commit("gameLoaded",{game:t}),st().start()},applyEvent(e,t){t.event.apply(e),e.commit("showEvent",t),at.saveGame(e.state.game)},eventAcknowledged(e){var t,i;e.commit("hideEvent",void 0),(null==(t=e.state.game)?void 0:t.over)?Pe.push("/games/"+(null==(i=e.state.game)?void 0:i.id)+"/over"):st().start()}},ot={gameLoaded(e,t){e.game=t.game},showEvent(e,t){e.visibleEvent=t.event},hideEvent(e){e.visibleEvent=null},gameOver(e){e.game=o(l({},e.game),{over:!0})}},ct={proposedLaws:e=>e.game&&e.game.proposedLaws?e.game.proposedLaws.map((t=>{const i=e.allLaws.find((e=>e.id===t));return i||console.error(`Inconsistency: Proposed law #${t} not found`),i})).filter((e=>e)):[]},dt={allLaws:qe,game:void 0,visibleEvent:null},ut=Symbol();function mt(){return M(ut)}const pt=G({state:dt,mutations:ot,actions:lt,getters:ct}),ht=B(z);ht.use(pt,ut),ht.use(Pe),ht.mount("#app");