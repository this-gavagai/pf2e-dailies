(()=>{"use strict";let e="";function t(t,a,n){return t.getFlag(e,a)??n}function a(e){return e.getFlag("core","sourceId")}function n(e,t){const n=a(e);return!!n&&t.includes(n)}const r=String.raw`[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]`,i=String.raw`[^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]`,s=new RegExp(i,"gu"),o=String.raw`(?:${r})(?=${i})|(?:${i})(?=${r})`,l=String.raw`(?:${r})(?=${r})`,c=String.raw`\p{Lowercase_Letter}`,u=String.raw`\p{Uppercase_Letter}`,p=new RegExp(`(${c})(${u}${l})`,"gu"),d=/[^-\p{White_Space}\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Join_Control}]/gu,f=new RegExp(`${u}|(?:${o})${c}`,"gu");function m(e,{camel:t=null}={}){if("string"!=typeof e)return console.warn("Non-string argument passed to `sluggify`"),"";switch(t){case null:return e.replace(p,"$1-$2").toLowerCase().replace(/['’]/g,"").replace(s," ").trim().replace(/[-\s]+/g,"-");case"bactrian":{const t=m(e,{camel:"dromedary"});return t.charAt(0).toUpperCase()+t.slice(1)}case"dromedary":return e.replace(d,"").replace(/[-_]+/g," ").replace(f,((e,t)=>0===t?e.toLowerCase():e.toUpperCase())).replace(/\s+/g,"");default:throw Error("PF2e System | I don't think that's a real camel.")}}function y(e){return Array.isArray(e)?t=>n(t,e):t=>a(t)===e}function g(e,t){return t?t.flatMap((t=>e.itemTypes[t])):e.items}function h(e,t,a){return g(e,a).find(y(t))}const b=["addedLanguage","trainedSkill"],v={category:["spell"]},w={feattype:["class"],traits:["fighter"]},k={category:["spell"],traditions:["arcane"]},C=[{type:"trainedSkill",category:"ageless",label:"",uuids:["Compendium.pf2e.feats-srd.wylnETwIz32Au46y"]},{type:"trainedSkill",category:"longevity",label:"",uuids:["Compendium.pf2e.feats-srd.WoLh16gyDp8y9WOZ"]},{type:"trainedSkill",category:"memories",label:"",uuids:["Compendium.pf2e.feats-srd.ptEOt3lqjxUnAW62"]},{type:"trainedSkill",category:"studies",label:"",uuids:["Compendium.pf2e.feats-srd.9bgl6qYWKHzqWZj0"]},{type:"addedLanguage",category:"linguistics",label:"",uuids:["Compendium.pf2e.feats-srd.eCWQU16hRLfN1KaX"]},{type:"addedLanguage",category:"borts",label:"",uuids:["Compendium.pf2e.equipment-srd.iS7hAQMAaThHYE8g"]},{type:"combatFlexibility",category:"flexibility",label:"",uuids:["Compendium.pf2e.classfeatures.8g6HzARbhfcgilP8","Compendium.pf2e.classfeatures.W2rwudMNcAxs8VoX"]},{type:"scrollSavant",category:"savant",label:"",uuids:["Compendium.pf2e.feats-srd.u5DBg0LrBUKP0JsJ"]},{type:"scrollChain",category:"esoterica",label:"",uuids:["Compendium.pf2e.feats-srd.OqObuRB8oVSAEKFR","Compendium.pf2e.feats-srd.nWd7m0yRcIEVUy7O","Compendium.pf2e.feats-srd.LHjPTV5vP3MOsPPJ"]},{type:"scrollChain",category:"trickster",label:"Scroll Trickster",uuids:["Compendium.pf2e.feats-srd.ROAUR1GhC19Pjk9C","Compendium.pf2e.feats-srd.UrOj9TROtn8nuxPf","Compendium.pf2e.feats-srd.lIg5Gzz7W70jfbk1"]}],[S,x,D,T,F]=(()=>{const e=[],t={},a=[],n=[],r=[];for(const{type:i,category:s,label:o,uuids:l}of C)t[s]??=[],t[s].push(...l),e.push(...l.map(((e,t)=>[e,{type:i,category:s,label:o,index:t}]))),b.includes(i)&&r.push(...l),l[0].includes("equipment-srd")?n.push(l[0]):a.push(l[0]);return[new Map(e),n,a,r,t]})();function O(e){return F[e]}function L(e){return n(e,T)}function j(e){return"trainedSkill"===e.type}function A(e){return"addedLanguage"===e.type}function I(e){return"combatFlexibility"===e.type}function E(e,t,a,n){const r="string"==typeof t?t:"info",i="object"==typeof t?t:"object"==typeof a?a:void 0,s="boolean"==typeof t?t:"boolean"==typeof a?a:n??!1;ui.notifications.notify(_(e,i),r,{permanent:s})}function _(...t){let[a,n]=t;return a=`${e}.${a}`,n?game.i18n.format(a,n):game.i18n.localize(a)}function P(...t){return t=t.filter((e=>"string"==typeof e)),`modules/${e}/templates/${t.join("/")}`}function U(e,t){return t?`@UUID[${e}]{${t}}`:`@UUID[${e}]`}const z=["common","draconic","dwarven","elven","gnomish","goblin","halfling","jotun","orcish","sylvan","undercommon","ysoki","abyssal","adlet","aklo","akitonian","alghollthu","amurrun","anadi","ancient-osiriani","anugobu","arcadian","aquan","arboreal","auran","boggard","calda","caligni","celestial","cyclops","daemonic","destrachan","drooni","dziriak","ekujae","erutaki","formian","garundi","girtablilu","gnoll","goloma","grippli","hallit","hwan","iblydan","ignan","ikeshti","immolis","infernal","iruxi","jistkan","jyoti","kaava","kashrishi","kibwani","kitsune","kelish","lirgeni","mahwek","minaten","minkaian","mwangi","mzunu","nagaji","necril","ocotan","okaiyan","osiriani","protean","rasu","ratajin","razatlani","requian","russian","senzar","shadowtongue","shobhad","shisk","shoanti","shoony","skald","sphinx","strix","taldane","tekritanin","tengu","terran","thassilonian","tien","utopian","vanara","varisian","varki","vishkanyan","vudrani","wyrwood","xanmba","androffan","azlanti","grioth","kovintal","migo","munavri","samsaran","sasquatch","shae","yithian","druidic"],M={acr:"acrobatics",arc:"arcana",ath:"athletics",cra:"crafting",dec:"deception",dip:"diplomacy",itm:"intimidation",med:"medicine",nat:"nature",occ:"occultism",prf:"performance",rel:"religion",soc:"society",ste:"stealth",sur:"survival",thi:"thievery"},q=(Object.keys(M),Object.values(M)),B=(new Set(["arcane","divine","occult","primal"]),[]);async function N(e,t,a=!1){const n=(await fromUuid(e))?.toObject();if(!n)return null;!1===t&&(t=n.system.level.value);const r=function(e){return`Compendium.pf2e.equipment-srd.${R[e]}`}(t);B[t]??=await fromUuid(r);const i=B[t]?.toObject();if(!i)return null;n.system.location.heightenedLevel=t,i.name=`Scroll of ${n.name} (Level ${t})`,i.system.temporary=a,i.system.spell=n,i.system.traits.value.push(...n.system.traditions.value);const s=n.flags.core?.sourceId;return s&&(i.system.description.value=`${U(s)}\n<hr />${i.system.description.value}`),i}const R={1:"RjuupS9xyXDLgyIr",2:"Y7UD64foDbDMV9sx",3:"ZmefGBXGJF3CFDbn",4:"QSQZJ5BC3DeHv153",5:"tjLvRWklAylFhBHQ",6:"4sGIy77COooxhQuC",7:"fomEZZ4MxVVK3uVu",8:"iPki3yuoucnj7bIt",9:"cFHomF3tty8Wi1e5",10:"o1XIHJ4MJyroAHfF"};function W(e,t){const a=[];if(e<=t)for(let n=e;n<=t;n++)a.push(n);else for(let n=e;n>=t;n--)a.push(n);return a}async function H(t,a){const n=(await fromUuid(t))?.toObject();if(n)return setProperty(n,"flags.pf2e.grantedBy",{id:a.id,onDelete:"cascade"}),setProperty(n,`flags.${e}.temporary`,!0),n}function J(e,t){let a=0,n=0;for(const r of e.spellcasting){if(r.flags["pf2e-staves"])continue;const e=r.system.slots;for(const t in e)e[t].max&&(a=Math.max(a,Number(t.slice(4))));r.tradition===t&&(n=Math.max(n,r.rank))}return{maxSlot:Math.clamped(a,1,10),maxTradition:n}}const V=function(e){const t=(...t)=>_(`${e}.${t[0]}`,t[1]);return Object.defineProperties(t,{warn:{value:(...t)=>function(...e){const[t,a,n]=e;E(t,"warning",a,n)}(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1},info:{value:(...t)=>function(...e){const[t,a,n]=e;E(t,"info",a,n)}(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1},error:{value:(...t)=>function(...e){const[t,a,n]=e;E(t,"error",a,n)}(`${e}.${t[0]}`,t[1],t[2]),enumerable:!1,configurable:!1}}),t}("interface");class G extends Application{_actor;constructor(e,t){super(t),this._actor=e}static get defaultOptions(){return mergeObject(super.defaultOptions,{title:V("title"),template:P("interface.hbs"),height:"auto",submitOnClose:!1,submitOnChange:!1,dragDrop:[{dropSelector:'[data-droppable="true"]'}]})}getData(e){const n=this._actor,r=n.level,i=t(n,"saved")??{},s=function(e){const t={},n=[...e.itemTypes.feat,...e.itemTypes.equipment];for(const e of n){const n=a(e);if(!n||e.isOfType("equipment")&&!e.isInvested)continue;const r=S.get(n);if(!r)continue;const{category:i,index:s,type:o,label:l}=r;t[i]??={category:i,type:o,label:l,items:[]},t[i].items[s]=!0,s||l||(t[i].label=e.name)}return Object.values(t).filter((e=>e.items[0]))}(n),o=[],l=n.system.traits.languages.value,c=q.filter((e=>n.skills[e].rank<1)).map((e=>({key:e}))),u=z.filter((e=>!l.includes(e))).sort().map((e=>({key:e})));for(const e of s)if("scrollChain"===e.type){const{type:t,category:a,label:n,items:s}=e,l=[],c=e=>{const{name:t,uuid:n}=i[a]?.[e-1]??{name:"",uuid:""};return{type:"drop",level:e,name:t,uuid:n,label:game.i18n.localize(`PF2E.SpellLevel${e}`)}};l.push(c(1)),r>=8&&l.push(c(2)),s[1]&&(l.push(c(3)),r>=14&&l.push(c(4)),r>=16&&l.push(c(5))),s[2]&&(l.push(c(6)),r>=20&&l.push(c(7)));const u={type:t,category:a,label:n,rows:l};o.push(u)}else if("scrollSavant"===e.type){const{maxSlot:t,maxTradition:a}=J(n,"arcane");if(t<3)continue;const{type:r,category:s,label:l}=e,c=[],u=(e,t)=>{const{name:a,uuid:n}=i[s]?.[e]??{name:"",uuid:""};return{type:"drop",level:t,name:a,uuid:n,label:game.i18n.localize(`PF2E.SpellLevel${t}`)}};a>=4&&t>=6&&c.push(u(3,t-5)),a>=3&&t>=5&&c.push(u(2,t-4)),t>=4&&c.push(u(1,t-3)),c.push(u(0,t-2));const p={type:r,category:s,label:l,rows:c};o.push(p)}else if(j(e)){const{type:t,category:a,label:n}=e,r={type:t,category:a,label:n,rows:[{type:"select",options:c,selected:i[a]??""}]};o.push(r)}else if(A(e)){const{type:t,category:a,label:n}=e,r={type:t,category:a,label:n,rows:[{type:"select",options:u,selected:i[a]??""}]};o.push(r)}else if(I(e)){const{type:t,category:a,label:n,items:r}=e,s=i[a]??[],l=[{type:"drop",label:game.i18n.localize("PF2E.Level8"),name:s[0]?.name??"",uuid:s[0]?.uuid??"",level:8}];r[1]&&l.push({type:"drop",label:game.i18n.localize("PF2E.Level14"),name:s[1]?.name??"",uuid:s[1]?.uuid??"",level:14});const c={type:t,category:a,label:n,rows:l};o.push(c)}const p=[],d=[];for(const e of o)e.rows.length>1?d.push(e):p.push(e);return p.sort(((e,t)=>e.type.localeCompare(t.type))),d.sort(((e,t)=>e.rows.length-t.rows.length)),mergeObject(super.getData(e),{i18n:V,groups:d,rows:p})}activateListeners(e){super.activateListeners(e),e.find("[data-action=search]").on("click",this.#e.bind(this)),e.find("[data-action=clear]").on("click",this.#t.bind(this)),e.find("[data-action=accept]").on("click",this.#a.bind(this)),e.find("[data-action=cancel]").on("click",this.#n.bind(this))}async _onDrop(e){let t=$(e.target);t.is("label")&&(t=t.next());const a=t.attr("data-type");if(a)try{const n=e.dataTransfer?.getData("text/plain"),r=()=>V.warn("error.drop.wrongDataType"),i=JSON.parse(n);if(!i||"Item"!==i.type||"string"!=typeof i.uuid)return r();const s=await fromUuid(i.uuid);if(!s)return r();switch(a){case"scrollChain":this.#r(t,s,v);break;case"combatFlexibility":this.#i(t,s,w);break;case"scrollSavant":this.#r(t,s,k)}}catch(e){}}#r(e,t,{category:a=[],traditions:n=[]}={}){if(!t.isOfType("spell"))return V.warn("error.drop.wrongType",{type:"spell"});if(t.isCantrip&&!a.includes("cantrip"))return V.warn("error.drop.cannotBe",{type:"spell",not:"cantrip"});if(t.isRitual&&!a.includes("ritual"))return V.warn("error.drop.cannotBe",{type:"spell",not:"ritual"});if(t.isFocusSpell&&!a.includes("focus"))return V.warn("error.drop.cannotBe",{type:"spell",not:"focus"});if(n.length){const e=t.system.traditions.value;for(const t of n)if(!e.includes(t))return V.warn("error.drop.wrongTrait",{type:"spell",trait:t,category:"tradition"})}if(t.level>Number(e.attr("data-level")))return V.warn("error.drop.wrongLevel",{type:"spell"});this.#s(e,t)}#i(e,t,{feattype:a=[],traits:n=[]}){if(!t.isOfType("feat")||t.isFeature)return V.warn("error.drop.wrongType",{type:"feat"});if(!a.includes(t.featType))return V.warn("error.drop.cannotBe",{type:"feat",not:t.featType});if(n.length){const e=t.system.traits.value;for(const t of n)if(!e.includes(t))return V.warn("error.drop.wrongTrait",{type:"feat",trait:t,category:"trait"})}if(t.level>Number(e.attr("data-level")))return V.warn("error.drop.wrongLevel",{type:"feat"});this.#s(e,t)}#s(e,t){e.attr("value",t.name),e.attr("data-uuid",t.uuid),e.nextAll('[data-action="clear"]').first().removeClass("disabled")}#o(){this.element.find("button").attr("disabled","true"),this.element.find("a").addClass("disabled")}#l(){const e=[];return this.element.find('input[value=""]').length&&e.push("error.empty"),e.forEach((e=>V.warn(e))),!e.length}async#a(t){if(t.preventDefault(),!this.#l())return;this.#o();let n="";const r=this._actor,i={},s=[],o=[],l=[],c=this.element.find(".window-content .content").find("input, select").toArray(),u=c.some((e=>b.includes(e.dataset.type)))?function(e){return function(e,t,a){return g(e,["feat","equipment"]).filter(y(t))}(e,T)}(r):[];for(const t of c){const n=t.dataset.type;if("scrollChain"===n||"scrollSavant"===n){const{uuid:e,category:a}=t.dataset,n=Number(t.dataset.level),r=t.value;if(e){const t=await N(e,n,!0);t&&s.push(t)}i[a]??=[],i[a].push({name:r,uuid:e})}else if("combatFlexibility"===n){const{category:e,uuid:a,level:n}=t.dataset,o=t.value,l="8"===n?0:1,c=O(e)[l];if(c){const e=h(r,c),t=await H(a,e);t&&s.push(t)}i[e]??=[],i[e].push({name:o,uuid:a})}else{const r=t.dataset.category,s=O(r)[0],c=u.find((e=>{return t=s,a(e)===t;var t}));if(!c)continue;const p=deepClone(c._source.system.rules);for(let e=p.length-1;e>=0;e--)"pf2e-dailies"in p[e]&&p.splice(e,1);const d=t.value,f={uuid:s,selected:d,update:{_id:c.id,"system.rules":p}};"addedLanguage"===n?(p.push({key:"ActiveEffectLike",mode:"add",path:"system.traits.languages.value",value:d,[e]:!0}),o.push(f)):(p.push({key:"ActiveEffectLike",mode:"upgrade",path:`system.skills.${d}.rank`,value:1,[e]:!0}),l.push(f)),i[r]=d}}const p=[],d=(e,t)=>{if(!t.length)return;n&&(n+="<hr />");const a=V(`message.${e}`);n+=`<p><strong>${a}</strong></p>`;for(const{uuid:e,selected:a,update:r}of t)n+=`<p>${U(e)} <span style="text-transform: capitalize;">${a}</span></p>`,p.push(r)};d("languages",o),d("skills",l);let f="",v="";if(s.length){const e=await r.createEmbeddedDocuments("Item",s);for(const t of e){const e=`<p>${U(t.uuid)}</p>`;t.isOfType("feat")?f+=e:v+=e;const a=t.getFlag("pf2e","grantedBy.id");if(a){const e=`flags.pf2e.itemGrants.${m(t.name,{camel:"dromedary"})}`;p.push({_id:a,[e]:{id:t.id,onDelete:"detach"}})}}}var w,k;f&&(n&&(n+="<hr />"),n+=`<p><strong>${V("message.feats")}</strong></p>`,n+=f),v&&(n&&(n+="<hr />"),n+=`<p><strong>${V("message.items")}</strong></p>`,n+=v),p.length&&await r.updateEmbeddedDocuments("Item",p),await(w=r,"saved",k=i,w.setFlag(e,"saved",k)),n=`${V("message.changes")}<hr>${n}`,ChatMessage.create({content:n,speaker:ChatMessage.getSpeaker({actor:r})}),this.close()}#e(e){e.preventDefault();const t=e.currentTarget.dataset,a=Number(t.level);switch(t.type){case"scrollChain":this.#c({...v,level:W(1,a)});break;case"combatFlexibility":this.#u({...w,level:{min:1,max:a}});break;case"scrollSavant":this.#c({...k,level:W(1,a)})}}#c({category:e=[],level:t=[],traditions:a=[]}={}){const n={category:e,classes:[],level:t,rarity:[],school:[],source:[],traditions:a,traits:[]};game.pf2e.compendiumBrowser.openTab("spell",n)}#u({feattype:e=[],level:t={},traits:a=[]}={}){const n={feattype:e,skills:[],rarity:[],source:[],traits:a,level:t};game.pf2e.compendiumBrowser.openTab("feat",n)}#t(e){e.preventDefault();const t=$(e.currentTarget),a=t.prevAll("input").first();a.attr("value",""),a.attr("data-uuid",""),t.addClass("disabled")}#n(e){e.preventDefault(),this.close()}}e||(e="pf2e-dailies"),Hooks.once("ready",(()=>{!function(){const e=game.pf2e.actions.restForTheNight;game.pf2e.actions.restForTheNight=async a=>{const n=await e(a);return n.length&&a.actors&&async function(e){const a=(e=Array.isArray(e)?e:[e]).filter((e=>e.isOfType("character")));for(const e of a){const a=[],n=[],r=e=>{const t=deepClone(e._source.system.rules),n=t.findIndex((e=>"pf2e-dailies"in e));n>=0&&(t.splice(n,1),a.push({_id:e.id,"system.rules":t}))};for(const i of e.itemTypes.feat)if(L(i)&&r(i),t(i,"temporary")){const e=i.getFlag("pf2e","grantedBy.id");if(e){const t=`flags.pf2e.itemGrants.-=${m(i.name,{camel:"dromedary"})}`;a.push({_id:e,[t]:!0})}n.push(i.id)}for(const t of e.itemTypes.equipment)L(t)&&r(t);a.length&&e.updateEmbeddedDocuments("Item",a),n.length&&e.deleteEmbeddedDocuments("Item",n)}}(a.actors),n}}()})),Hooks.on("renderCharacterSheetPF2e",(function(e,t){const a=e.actor;if(!function(e){return e.itemTypes.feat.some((e=>n(e,D)))||e.itemTypes.equipment.some((e=>n(e,x)&&e.isInvested))}(a))return;const r=t.find("aside .sidebar .hitpoints .hp-small");r.append(`<a class="roll-icon dailies" title="${_("sheet.title")}"><i class="fas fa-mug-saucer"></i></a>`).find(".dailies").on("click",(()=>new G(a).render(!0,{id:`pf2e-dailies-interface-${a.id}`}))),r.find("[data-action=rest]").off("click").on("click",(e=>game.pf2e.actions.restForTheNight({event:e,actors:a})))}))})();
//# sourceMappingURL=main.js.map