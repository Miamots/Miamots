/* Miamots — la mécanique de l'app (jeux, progression, rapport). */
/* Atelier des sons : Miam DJ */
const DJ={point:"img/jeux/dj-point.webp",wink:"img/jeux/dj-wink.webp",turn:"img/jeux/dj-turn.webp",cheer:"img/jeux/dj-cheer.webp",ball:"img/jeux/dj-ball.webp"};
/* Musée : cadre doré */
const MU_FRAME="img/jeux/musee-cadre.webp";
/* Fusée : carte du système solaire */
const SOLAR_IMG="img/jeux/fusee-systeme-solaire.webp";
/* Miam qui se promène sur la carte (vues de face, de côté, de dos) */
const MV={front:"img/jeux/miam-carte-front.webp",r34:"img/jeux/miam-carte-r34.webp",l34:"img/jeux/miam-carte-l34.webp",back:"img/jeux/miam-carte-back.webp"};
/* Fusée : planètes et Miam astronaute */
const PLANET_IMG={mercure:"img/jeux/planete-mercure.webp",venus:"img/jeux/planete-venus.webp",terre:"img/jeux/planete-terre.webp",mars:"img/jeux/planete-mars.webp",jupiter:"img/jeux/planete-jupiter.webp",saturne:"img/jeux/planete-saturne.webp",uranus:"img/jeux/planete-uranus.webp",neptune:"img/jeux/planete-neptune.webp",lune:"img/jeux/planete-lune.webp",soleil:"img/jeux/planete-soleil.webp"};
const SPACE={rocket:"img/jeux/espace-rocket.webp",vrocket:"img/jeux/espace-vrocket.webp",float:"img/jeux/espace-float.webp",wave:"img/jeux/espace-wave.webp",scope:"img/jeux/espace-scope.webp",read:"img/jeux/espace-read.webp",flag:"img/jeux/espace-flag.webp"};
/* Miam réactif : 12 états cohérents (même angle, mêmes vêtements) */
const MZ={idle:"img/jeux/miam-idle.webp",listen:"img/jeux/miam-listen.webp",think:"img/jeux/miam-think.webp",point:"img/jeux/miam-point.webp",happy:"img/jeux/miam-happy.webp",oops:"img/jeux/miam-oops.webp",encourage:"img/jeux/miam-encourage.webp",cheer:"img/jeux/miam-cheer.webp",hint:"img/jeux/miam-hint.webp",observe:"img/jeux/miam-observe.webp",surprise:"img/jeux/miam-surprise.webp",sad:"img/jeux/miam-sad.webp"};
/* Autocollants par lieu et photos de Miam sur la Terre */
const STK_IMG={train:["img/autocollants-a/stk-train-0.webp","img/autocollants-a/stk-train-1.webp","img/autocollants-a/stk-train-2.webp","img/autocollants-a/stk-train-3.webp","img/autocollants-a/stk-train-4.webp","img/autocollants-a/stk-train-5.webp","img/autocollants-a/stk-train-6.webp","img/autocollants-a/stk-train-7.webp","img/autocollants-a/stk-train-8.webp","img/autocollants-a/stk-train-9.webp","img/autocollants-a/stk-train-10.webp","img/autocollants-a/stk-train-11.webp","img/autocollants-a/stk-train-12.webp","img/autocollants-a/stk-train-13.webp","img/autocollants-a/stk-train-14.webp"],fusee:["img/autocollants-a/stk-fusee-0.webp","img/autocollants-a/stk-fusee-1.webp","img/autocollants-a/stk-fusee-2.webp","img/autocollants-a/stk-fusee-3.webp","img/autocollants-a/stk-fusee-4.webp","img/autocollants-a/stk-fusee-5.webp","img/autocollants-a/stk-fusee-6.webp","img/autocollants-a/stk-fusee-7.webp","img/autocollants-a/stk-fusee-8.webp","img/autocollants-a/stk-fusee-9.webp","img/autocollants-a/stk-fusee-10.webp","img/autocollants-a/stk-fusee-11.webp","img/autocollants-a/stk-fusee-12.webp","img/autocollants-a/stk-fusee-13.webp"],sons:["img/autocollants-a/stk-sons-0.webp","img/autocollants-a/stk-sons-1.webp","img/autocollants-a/stk-sons-2.webp","img/autocollants-a/stk-sons-3.webp","img/autocollants-a/stk-sons-4.webp","img/autocollants-a/stk-sons-5.webp","img/autocollants-a/stk-sons-6.webp","img/autocollants-a/stk-sons-7.webp","img/autocollants-a/stk-sons-8.webp","img/autocollants-a/stk-sons-9.webp","img/autocollants-a/stk-sons-10.webp","img/autocollants-a/stk-sons-11.webp","img/autocollants-a/stk-sons-12.webp","img/autocollants-a/stk-sons-13.webp"],lire:["img/autocollants-a/stk-lire-0.webp","img/autocollants-a/stk-lire-1.webp","img/autocollants-a/stk-lire-2.webp","img/autocollants-a/stk-lire-3.webp","img/autocollants-a/stk-lire-4.webp","img/autocollants-a/stk-lire-5.webp","img/autocollants-a/stk-lire-6.webp","img/autocollants-a/stk-lire-7.webp","img/autocollants-a/stk-lire-8.webp","img/autocollants-a/stk-lire-9.webp","img/autocollants-a/stk-lire-10.webp","img/autocollants-a/stk-lire-11.webp","img/autocollants-a/stk-lire-12.webp","img/autocollants-a/stk-lire-13.webp","img/autocollants-a/stk-lire-14.webp"],chenille:["img/autocollants-b/stk-chenille-0.webp","img/autocollants-b/stk-chenille-1.webp","img/autocollants-b/stk-chenille-2.webp","img/autocollants-b/stk-chenille-3.webp","img/autocollants-b/stk-chenille-4.webp","img/autocollants-b/stk-chenille-5.webp","img/autocollants-b/stk-chenille-6.webp","img/autocollants-b/stk-chenille-7.webp","img/autocollants-b/stk-chenille-8.webp","img/autocollants-b/stk-chenille-9.webp","img/autocollants-b/stk-chenille-10.webp","img/autocollants-b/stk-chenille-11.webp","img/autocollants-b/stk-chenille-12.webp","img/autocollants-b/stk-chenille-13.webp","img/autocollants-b/stk-chenille-14.webp"],ecouter:["img/autocollants-b/stk-ecouter-0.webp","img/autocollants-b/stk-ecouter-1.webp","img/autocollants-b/stk-ecouter-2.webp","img/autocollants-b/stk-ecouter-3.webp","img/autocollants-b/stk-ecouter-4.webp","img/autocollants-b/stk-ecouter-5.webp","img/autocollants-b/stk-ecouter-6.webp","img/autocollants-b/stk-ecouter-7.webp","img/autocollants-b/stk-ecouter-8.webp","img/autocollants-b/stk-ecouter-9.webp","img/autocollants-b/stk-ecouter-10.webp","img/autocollants-b/stk-ecouter-11.webp","img/autocollants-b/stk-ecouter-12.webp","img/autocollants-b/stk-ecouter-13.webp","img/autocollants-b/stk-ecouter-14.webp"],ecrire:["img/autocollants-b/stk-ecrire-0.webp","img/autocollants-b/stk-ecrire-1.webp","img/autocollants-b/stk-ecrire-2.webp","img/autocollants-b/stk-ecrire-3.webp","img/autocollants-b/stk-ecrire-4.webp","img/autocollants-b/stk-ecrire-5.webp","img/autocollants-b/stk-ecrire-6.webp","img/autocollants-b/stk-ecrire-7.webp","img/autocollants-b/stk-ecrire-8.webp","img/autocollants-b/stk-ecrire-9.webp","img/autocollants-b/stk-ecrire-10.webp","img/autocollants-b/stk-ecrire-11.webp","img/autocollants-b/stk-ecrire-12.webp","img/autocollants-b/stk-ecrire-13.webp","img/autocollants-b/stk-ecrire-14.webp"],musee:["img/autocollants-b/stk-musee-0.webp","img/autocollants-b/stk-musee-1.webp","img/autocollants-b/stk-musee-2.webp","img/autocollants-b/stk-musee-3.webp","img/autocollants-b/stk-musee-4.webp","img/autocollants-b/stk-musee-5.webp","img/autocollants-b/stk-musee-6.webp","img/autocollants-b/stk-musee-7.webp","img/autocollants-b/stk-musee-8.webp","img/autocollants-b/stk-musee-9.webp","img/autocollants-b/stk-musee-10.webp","img/autocollants-b/stk-musee-11.webp","img/autocollants-b/stk-musee-12.webp","img/autocollants-b/stk-musee-13.webp","img/autocollants-b/stk-musee-14.webp"]};
const PHOTOS=["img/photos/photo-0.webp","img/photos/photo-1.webp","img/photos/photo-2.webp","img/photos/photo-3.webp","img/photos/photo-4.webp","img/photos/photo-5.webp","img/photos/photo-6.webp","img/photos/photo-7.webp","img/photos/photo-8.webp","img/photos/photo-9.webp","img/photos/photo-10.webp","img/photos/photo-11.webp","img/photos/photo-12.webp","img/photos/photo-13.webp","img/photos/photo-14.webp","img/photos/photo-15.webp","img/photos/photo-16.webp","img/photos/photo-17.webp","img/photos/photo-18.webp","img/photos/photo-19.webp","img/photos/photo-20.webp","img/photos/photo-21.webp","img/photos/photo-22.webp","img/photos/photo-23.webp","img/photos/photo-24.webp","img/photos/photo-25.webp","img/photos/photo-26.webp","img/photos/photo-27.webp","img/photos/photo-28.webp","img/photos/photo-29.webp","img/photos/photo-30.webp","img/photos/photo-31.webp","img/photos/photo-32.webp","img/photos/photo-33.webp","img/photos/photo-34.webp","img/photos/photo-35.webp","img/photos/photo-36.webp","img/photos/photo-37.webp","img/photos/photo-38.webp","img/photos/photo-39.webp","img/photos/photo-40.webp","img/photos/photo-41.webp","img/photos/photo-42.webp","img/photos/photo-43.webp","img/photos/photo-44.webp","img/photos/photo-45.webp","img/photos/photo-46.webp","img/photos/photo-47.webp","img/photos/photo-48.webp","img/photos/photo-49.webp","img/photos/photo-50.webp","img/photos/photo-51.webp","img/photos/photo-52.webp","img/photos/photo-53.webp","img/photos/photo-54.webp","img/photos/photo-55.webp","img/photos/photo-56.webp","img/photos/photo-57.webp","img/photos/photo-58.webp","img/photos/photo-59.webp","img/photos/photo-60.webp","img/photos/photo-61.webp","img/photos/photo-62.webp","img/photos/photo-63.webp","img/photos/photo-64.webp","img/photos/photo-65.webp","img/photos/photo-66.webp","img/photos/photo-67.webp","img/photos/photo-68.webp","img/photos/photo-69.webp","img/photos/photo-70.webp","img/photos/photo-71.webp","img/photos/photo-72.webp","img/photos/photo-73.webp","img/photos/photo-74.webp"];
/* Terre (sol de la fusée) */
const EARTH_BIG="img/jeux/fusee-terre.webp";
/* Vidéo d'introduction */
const INTRO_VID="intro.mp4";
/* Logo Miamots */
const LOGO_IMG="img/jeux/logo-miamots.webp";
/* Voix Miamots : sons enregistrés (banque par défaut, remplaçable par l'adulte) */
const PH_DEFAULT={"a":"audio/ph-a.mp3","i":"audio/ph-i.mp3","o":"audio/ph-o.mp3","u":"audio/ph-u.mp3","é":"audio/ph-e-aigu.mp3","è":"audio/ph-e-grave.mp3","e":"audio/ph-e.mp3","ou":"audio/ph-ou.mp3","on":"audio/ph-on.mp3","an":"audio/ph-an.mp3","in":"audio/ph-in.mp3","oi":"audio/ph-oi.mp3","eu":"audio/ph-eu.mp3","m":"audio/ph-m.mp3","l":"audio/ph-l.mp3","s":"audio/ph-s.mp3","f":"audio/ph-f.mp3","r":"audio/ph-r.mp3","v":"audio/ph-v.mp3","ch":"audio/ph-ch.mp3","j":"audio/ph-j.mp3","n":"audio/ph-n.mp3","z":"audio/ph-z.mp3","p":"audio/ph-p.mp3","t":"audio/ph-t.mp3","b":"audio/ph-b.mp3","d":"audio/ph-d.mp3","k":"audio/ph-k.mp3","g":"audio/ph-g.mp3"};
/* Jardin et cuisine : scènes d'entrée illustrées */
const JARDIN_SCENE_IMG="img/jeux/jardin-scene.webp";
const CUISINE_SCENE_IMG="img/jeux/cuisine-scene.webp";
/* Bibliothèque : menu illustré */
const LIRE_MENU_IMG="img/jeux/bibliotheque-menu.webp";
/* Atelier des sons : menu illustré */
const SONS_MENU_IMG="img/jeux/atelier-menu.webp";
/* Jardin (chenille) */
const JHEAD={joie:"img/jeux/jardin-tete-joie.webp",rire:"img/jeux/jardin-tete-rire.webp",oh:"img/jeux/jardin-tete-oh.webp",clin:"img/jeux/jardin-tete-clin.webp",calme:"img/jeux/jardin-tete-calme.webp",triste:"img/jeux/jardin-tete-triste.webp"};
const JSEG=["img/jeux/jardin-corps-1.webp","img/jeux/jardin-corps-2.webp","img/jeux/jardin-corps-3.webp","img/jeux/jardin-corps-4.webp","img/jeux/jardin-corps-5.webp"];
const J_BABY="img/jeux/jardin-bebe.webp";
const J_SUN="img/jeux/jardin-tournesol.webp";
const J_CAN="img/jeux/jardin-arrosoir.webp";
/* Accueil en aquarelle (image) */
const KIT_COOKIE="img/jeux/cuisine-biscuit.webp";
const LIB_FRAME="img/jeux/biblio-cadre.webp";
const LIB_PILL_BOOK="img/jeux/biblio-bulle.webp";
const LIB_PILL="img/jeux/biblio-bouton.webp";
const UI_SLOT_R="img/jeux/ui-slot_r.webp";
const UI_SLOT_B="img/jeux/ui-slot_b.webp";
const UI_SLOT_Y="img/jeux/ui-slot_y.webp";
const UI_SIGN="img/jeux/ui-sign.webp";
const UI_PARCH="img/jeux/ui-parch.webp";
const UI_STAR="img/jeux/ui-star.webp";
const UI_ALBUM="img/jeux/ui-album.webp";
const UI_GEAR="img/jeux/ui-gear.webp";
const UI_PILL_MAP="img/jeux/ui-pill_map.webp";
const UI_SPK="img/jeux/ui-pill_spk.webp";
const UI_HAND="img/jeux/ui-hand.webp";
const UI_CLOUD="img/jeux/ui-cloud.webp";
const TR_LOCO="img/jeux/train-loco.webp";
const TR_WAG_R="img/jeux/wagon-rouge.webp";
const TR_WAG_B="img/jeux/wagon-bleu.webp";
const TR_WAG_Y="img/jeux/wagon-jaune.webp";
const TR_WAGON="img/jeux/wagon-vert.webp";
const WC_HOME_IMG="home.webp";
/* ===== Journal d'erreurs : au lieu d'erreurs silencieuses, on garde les 30 dernières (visibles dans l'espace adulte) ===== */
function errLog(err,where){try{
  const L=JSON.parse(localStorage.getItem("lam_errlog")||"[]"),msg=String(err&&err.message||err).slice(0,300),w=String(where||"").slice(0,80);
  const last=L[L.length-1];if(last&&last.m===msg&&last.w===w){last.n=(last.n||1)+1;last.t=Date.now()}else L.push({t:Date.now(),m:msg,w});
  localStorage.setItem("lam_errlog",JSON.stringify(L.slice(-30)))}catch(_){}}
window.addEventListener("error",e=>errLog(e.message,(e.filename||"").split("/").pop()+":"+e.lineno));
window.addEventListener("unhandledrejection",e=>errLog(e.reason,"promesse"));
const VOY = ["a","e","i","o","u","y","é","è","ê","ou","eu","œu","on","an","en","in","un","oi","ai","ei","au","eau","oin","ain","ein","am","em","om","im","ill","ail","eil","euil","ouil"];
const CONS = ["l","m","r","s","p","t","n","f","v","d","b","c","g","j","z","ch","k","qu","gu","ç","gn","ph","x","w","h"];
const DEFAULT_SEL = ["a","e","i","o","u","y","é","ou","r","l","s","m","t","b","v","p","d","n","f","c"];
const STICKER_PAGES=[
 {g:"train",n:"La gare",e:"🚂"},{g:"fusee",n:"La base spatiale",e:"🚀"},{g:"sons",n:"L'atelier des sons",e:"🎧"},{g:"lire",n:"La bibliothèque",e:"📚"},
 {g:"chenille",n:"Le jardin",e:"🌻"},{g:"ecouter",n:"La cuisine",e:"🍪"},{g:"ecrire",n:"L'école",e:"✏️"},{g:"musee",n:"Le musée",e:"🖼️"}
].map(p=>(p.items=STK_IMG[p.g].map((_,i)=>p.g+":"+i),p));
const STICKERS=STICKER_PAGES.flatMap(p=>p.items);
const stkSrc=id=>{const[g,i]=String(id).split(":");return STK_IMG[g]&&STK_IMG[g][+i]};
const stkHTML=id=>stkSrc(id)?`<img src="${stkSrc(id)}" alt="">`:id;
const ROUNDS = 5;


/* ---------- stockage ---------- */
/* Profils : les données de chaque enfant ont leur propre préfixe (le 1er enfant garde les clés d'origine) */
const PROF_SHARED=new Set(["profiles","curProfile","welcomed","custom","hidden","installLater","lastBackup","glv3"]);
let CUR_PROF=(()=>{try{return JSON.parse(localStorage.getItem("lam_curProfile"))||"p1"}catch(e){return "p1"}})();
const pkey=k=>"lam_"+(PROF_SHARED.has(k)||CUR_PROF==="p1"?"":CUR_PROF+"_")+k;
function load(k,d){try{const v=localStorage.getItem(pkey(k));return v==null?d:JSON.parse(v)}catch(e){return d}}
function save(k,v){try{localStorage.setItem(pkey(k),JSON.stringify(v))}catch(e){}}
let sel = new Set(load("sel3",DEFAULT_SEL));
let GOLD=load("gold",[]),medals=load("medals",0),albumPage=0;
let stars = load("stars",0), rate = load("rate",0.8), sfxOn = load("sfx",true), album = load("album",[]);
const reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- voix ---------- */
const hasVoice = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
let frVoice = null;
const frVoices=()=>hasVoice?speechSynthesis.getVoices().filter(v=>v.lang&&v.lang.toLowerCase().replace("_","-").startsWith("fr")):[];
function pickVoice(){
  if(!hasVoice) return;
  const fr=frVoices(),want=(load("cfg",{})||{}).voiceURI;
  frVoice=(want&&fr.find(v=>v.voiceURI===want))
         || fr.find(v=>/fr-FR/i.test(v.lang.replace("_","-")) && !v.localService)
         || fr.find(v=>/fr-FR/i.test(v.lang.replace("_","-")) && /Google|Amélie|Audrey|Thomas|Marie|Denise/i.test(v.name))
         || fr.find(v=>/fr-FR/i.test(v.lang.replace("_","-"))) || fr[0] || null;
}
const curPitch=()=>{try{return +CFG.pitch||1}catch(e){return 1}};
const curLang=()=>frVoice&&frVoice.lang?frVoice.lang.replace("_","-"):"fr-FR";
if(hasVoice){pickVoice(); speechSynthesis.onvoiceschanged=()=>{pickVoice();try{if($("settings").open)renderVoices()}catch(e){}};}
else document.getElementById("novoice").style.display="block";
/* Mots que la synthèse lit mal : « os » serait lu « o » */
const PRON={os:"oss",vis:"viss",dauphin:"dôfin"};
const PRON_RE=new RegExp("(^|[^\\p{L}'’])("+Object.keys(PRON).join("|")+")(?=$|[^\\p{L}])","gu");
/* Trop de touches très rapides sur les réponses : Miam invite à prendre son temps */
{const ANS=".plate,.cookie,.wordbtn,.baby,.vinyl,.sndopt,.catnum,.choices button,.pdbtns button";let taps=[],calm=0,calmLast=null;
 document.addEventListener("pointerdown",e=>{
   if(!current||current==="home")return;const t=e.target.closest&&e.target.closest(ANS);if(!t)return;
   const now=Date.now();if(now<calm){e.stopPropagation();e.preventDefault();return}
   taps=taps.filter(x=>now-x<1100);
   if(taps.length&&t===calmLast)taps=[];   /* deux touches sur la même réponse ne comptent pas */
   calmLast=t;taps.push(now);
   if(taps.length>=2){taps=[];calm=now+1800;e.stopPropagation();e.preventDefault();
     try{speechSynthesis.cancel()}catch(_){}speak("Oh ! Prends ton temps.");
     const m=$(current)&&$(current).querySelector(".mz");if(m)miamMood(m,"think",{ms:1800});
     const tt=el("div","calmmiam",`<img src="${MZ.think}" alt="Miam : prends ton temps">`);document.body.appendChild(tt);setTimeout(()=>tt.classList.add("out"),1600);setTimeout(()=>tt.remove(),2100)}
 },true);
 document.addEventListener("click",e=>{if(Date.now()<calm&&e.target.closest&&e.target.closest(ANS)){e.stopPropagation();e.preventDefault()}},true);}
/* Attendre que la voix et les sons aient fini (évite les phrases coupées entre deux manches) */
function isTalking(){try{if(hasVoice&&(speechSynthesis.speaking||speechSynthesis.pending))return true}catch(e){}return !!(curAudio&&!curAudio.paused&&!curAudio.ended)}
function waitQuiet(max){return new Promise(res=>{const t0=Date.now();const tick=()=>{if(!isTalking()||Date.now()-t0>(max||7000))res();else setTimeout(tick,120)};setTimeout(tick,150)})}
async function settle(ms){await wait(ms||0);await waitQuiet(7000);await wait(250)}
function speak(text, queue, slow){
  if(!hasVoice) return;
  try{
    if(!queue) speechSynthesis.cancel();
    text=String(text).replace(PRON_RE,(m,a,w)=>a+PRON[w]);
    const u = new SpeechSynthesisUtterance(text);
    u.lang=curLang(); if(frVoice) u.voice=frVoice; u.rate=slow?Math.max(.5,rate*.72):rate; u.pitch=curPitch();
    speechSynthesis.speak(u);
  }catch(e){}
}
const ALONE={a:"ah",e:"eu",o:"oh",oi:"oie",i:"hi",y:"hi",u:"hu","é":"hé","è":"haie","ê":"haie",ai:"haie",ei:"haie",au:"oh",eau:"eau",eu:"eu","œu":"eu",ou:"où",on:"on",om:"on",an:"an",en:"an",am:"an",em:"an",in:"hein",im:"hein",ain:"hein",ein:"hein",un:"un",oin:"ouin",ill:"ille",ail:"aïe",eil:"eille",euil:"œil",ouil:"ouille"};
/* Homophones : la synthèse lit un vrai mot au lieu d'épeler « l, o » */
const SAY={
 la:"la",le:"le",li:"lit",lo:"lot",lu:"lu",lou:"loup","lé":"lé",lon:"long",lan:"lent",loi:"loi",
 ra:"rat",re:"reu",ri:"riz",ro:"rot",ru:"rue",rou:"roue","ré":"ré",ron:"rond",ran:"rang",roi:"roi",
 sa:"sa",se:"se",si:"si",so:"seau",su:"su",sou:"sou","sé":"ces",son:"son",san:"sang",soi:"soi",
 ma:"ma",me:"me",mi:"mie",mo:"mot",mu:"mue",mou:"mou","mé":"mes",mon:"mon",man:"ment",moi:"moi",
 pa:"pas",pe:"peu",pi:"pie",po:"pot",pu:"pu",pou:"pou","pé":"pé",pon:"pont",pan:"paon",poi:"pois",
 ta:"ta",te:"te",ti:"t'y",to:"tôt",tu:"tu",tou:"tout","té":"thé",ton:"thon",tan:"temps",toi:"toit",
 na:"na",ne:"ne",ni:"nid",no:"nos",nu:"nu",nou:"nous","né":"nez",non:"non",nan:"nan",noi:"noix",
 fa:"fa",fe:"feu",fi:"fi",fo:"faux",fu:"fut",fou:"fou","fé":"fée",fon:"fond",fan:"faon",foi:"foi",
 va:"va",ve:"vœu",vi:"vie",vo:"veau",vu:"vu",vou:"vous","vé":"vé",von:"vont",van:"vent",voi:"voix",
 da:"da",de:"de",di:"dit",do:"dos",du:"du",dou:"doux","dé":"dé",don:"don",dan:"dent",doi:"doigt",
 ba:"bas",be:"beu",bi:"bi",bo:"beau",bu:"bu",bou:"bout","bé":"bé",bon:"bon",ban:"banc",boi:"bois",
 ca:"cas",co:"cot",cou:"cou",can:"camp",coi:"quoi",
 ja:"ja",je:"je",ji:"gît",jo:"jo",ju:"jus",jou:"joue","jé":"jé",jon:"jonc",jan:"gens",joi:"joie",
 cha:"chat",che:"cheu",chi:"chi",cho:"chaud",chu:"chut",chou:"chou","ché":"ché",chon:"chon",chan:"chant",choi:"choix"
};
Object.assign(SAY,{
 ga:"gars",go:"go",gou:"goût",gon:"gond",za:"za",zo:"zoo",zé:"zé",
 "lè":"lait","mè":"mai","rè":"raie","sè":"sait","pè":"paix","tè":"tait","fè":"fait","bè":"baie","dè":"dès","nè":"nait","vè":"vais",
 feu:"feu",jeu:"jeu",peu:"peu",deu:"deux",bleu:"bleu",
 bra:"bras",bri:"bris",bro:"brau",tra:"tra",tri:"tri",tro:"trop",trou:"trou",dra:"dra",cra:"cra",cro:"croc",lin:"lin",pin:"pin",vin:"vin",fin:"fin",sin:"saint",min:"mince",rin:"rein",tin:"teint",din:"daim",bin:"bain",nin:"nain",leu:"leu",fo:"faux",jo:"jo",cra:"cra",fri:"fri",cri:"cri",cri:"cri",
 pla:"plat",pli:"pli",plu:"plu",clo:"clos",cla:"clac",glo:"glo",gra:"gras",gri:"gris",fla:"fla",fri:"frit",
 "blé":"blé","clé":"clé","crè":"craie","flè":"flai","chè":"chai","zè":"zè","pè":"paix",
 ar:"art",tar:"tard",car:"car",por:"porc",tor:"tort",four:"four",
 trac:"trac",teur:"teur",fleur:"fleur"
});
function spoken(g){
  if(g.length===1) return ALONE[g[0]]||g[0];
  let k=g.map(x=>x==="y"?"i":x).join("");
  if(SAY[k]) return SAY[k];
  if(g[g.length-1]==="e" && g.slice(0,-1).every(x=>CONS.includes(x))) return g.slice(0,-1).join("")+"eu";
  return k;
}

/* ---------- bruitages ---------- */
let ac=null;
function actx(){
  if(!ac){try{ac=new (window.AudioContext||window.webkitAudioContext)()}catch(e){return null}}
  if(ac.state==="suspended") ac.resume();
  return ac;
}
function tone(f,start,dur,type,vol,to){
  const a=actx(); if(!a||!sfxOn) return;
  const t=a.currentTime+start, o=a.createOscillator(), g=a.createGain();
  o.type=type||"sine"; o.frequency.setValueAtTime(f,t);
  if(to) o.frequency.exponentialRampToValueAtTime(to,t+dur);
  g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(vol||.2,t+.015); g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
  o.connect(g); g.connect(a.destination); o.start(t); o.stop(t+dur+.05);
}
const SFX={
  tap:()=>tone(520,0,.07,"triangle",.12),
  pop:()=>{tone(380,0,.12,"sine",.25,900);tone(1200,.08,.1,"sine",.08)},
  yes:()=>[523,659,784,1047].forEach((f,i)=>tone(f,i*.07,.18,"triangle",.16)),
  no:()=>{tone(240,0,.22,"sawtooth",.06,150);tone(180,.12,.25,"sawtooth",.05,110)},
  chomp:()=>[0,.18,.36].forEach(d=>tone(160,d,.08,"square",.08,90)),
  whoosh:()=>tone(300,0,.35,"sine",.08,1100),
  whistle:()=>{tone(880,0,.35,"square",.05);tone(1046,0,.35,"square",.04);tone(880,.45,.6,"square",.05);tone(1046,.45,.6,"square",.04)},
  clang:()=>{tone(700,0,.08,"square",.07);tone(520,.06,.15,"square",.06)},
  win:()=>[523,523,523,659,784,659,784,1047].forEach((f,i)=>tone(f,i*.11,.2,"triangle",.15))
};

/* ---------- utilitaires ---------- */
const $=id=>document.getElementById(id);
const rnd=a=>a[Math.floor(Math.random()*a.length)];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function el(tag,cls,html){const e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;return e}
const selCons=()=>CONS.filter(c=>sel.has(c));
const selVoy=()=>VOY.filter(v=>sel.has(v));
const SOFT=["e","i","y","é","è","ê","eu","œu","in","ei","ein","en","em","im"];
const blocked=(c,v)=>(c==="c"&&(SOFT.includes(v)||["u","on"].includes(v)))||(c==="g"&&SOFT.includes(v))||(c==="ç"&&SOFT.includes(v))||(c==="gu"&&!SOFT.includes(v));
const wait=ms=>new Promise(r=>setTimeout(r,reduced?Math.min(ms,250):ms));

/* ===== Système central : Miam réactif + langage d'animation Miamots =====
   États : idle, listen, think, point, happy, oops, encourage, cheer, hint, observe, surprise, sad
   Animations : press (CSS :active), pop, snap, bounce, wiggle, tilt, pulse, celebrate */
const MOOD_ANIM={idle:"",listen:"mz-pop",think:"mz-tilt",point:"mz-pulse",happy:"mz-bounce",oops:"mz-wiggle",encourage:"mz-pop",cheer:"mz-celebrate",hint:"mz-pulse",observe:"mz-tilt",surprise:"mz-pop",sad:"mz-wiggle"};
function mzAnim(elm,cls){if(!elm||!cls||reduced)return;elm.classList.remove(...Object.values(MOOD_ANIM).filter(Boolean),"mz-snap");void elm.offsetWidth;elm.classList.add(cls)}
function miamMood(m,mood,opt){
  if(!m||!MZ[mood])return;opt=opt||{};
  const img=m.querySelector("img");m._mood=mood;
  if(img&&img.getAttribute("src")!==MZ[mood])img.setAttribute("src",MZ[mood]);
  mzAnim(img,MOOD_ANIM[mood]);
  clearTimeout(m._back);m._busy=0;
  if(mood!=="idle"&&!opt.hold){const ms=opt.ms||1500;m._busy=Date.now()+ms;m._back=setTimeout(()=>{if(m.isConnected)miamMood(m,m._rest||"idle",{hold:true})},ms)}
}
/* Indice : le bouton d'aide du jeu pulse doucement */
function pulseHelp(){
  const sec=current&&$(current);if(!sec)return;
  const h=[...sec.querySelectorAll("[data-hint]")].find(x=>x.offsetParent&&!x.hidden&&!x.disabled);
  if(h){mzAnim(h,"mz-pulse");setTimeout(()=>h.classList.remove("mz-pulse"),3800)}
}
function makeMiam(set){
  const m=el("div","miam mimg mz",`<img src="${MZ[set==="fete"?"cheer":"idle"]}" alt="Miam"><span class="m-mouth"></span>`);
  m._set=set;m._errs=0;m._mood=set==="fete"?"cheer":"idle";m._rest=set==="fete"?"cheer":"idle";return m;
}
/* Ancienne interface des jeux, traduite vers les nouveaux états */
function mood(m,state){
  if(!m)return;
  if(!m.classList.contains("mz")){m.classList.remove("idle","open","chew","happy","yuck");void m.offsetWidth;m.classList.add(state);return}
  if(state==="idle"){if(m._busy&&Date.now()<m._busy)return;return miamMood(m,"idle",{hold:true})}
  if(state==="open")return miamMood(m,"listen",{hold:true});
  if(state==="chew")return miamMood(m,"happy",{hold:true});
  if(state==="happy")return miamMood(m,m._set==="fete"?"cheer":"happy",{hold:m._set==="fete"});
  if(state==="yuck"){
    m._errs=(m._errs||0)+1;
    if(m._errs>=2){miamMood(m,"hint",{ms:2200});pulseHelp()}
    else miamMood(m,"oops",{ms:1100});
  }
}

function sparks(x,y,n,set){
  if(reduced) return;
  const items=set||["⭐","✨","🎉","💛","🌟"];
  for(let i=0;i<(n||16);i++){
    const s=el("span","spark",rnd(items)); s.style.left=x+"px"; s.style.top=y+"px";
    document.body.appendChild(s);
    const dx=(Math.random()-.5)*260, dy=-60-Math.random()*150;
    const a=s.animate([
      {transform:"translate(-50%,-50%) scale(.4)",opacity:1},
      {transform:`translate(calc(-50% + ${dx*.7}px),calc(-50% + ${dy}px)) scale(1.1) rotate(${dx}deg)`,opacity:1,offset:.5},
      {transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy+170}px)) scale(.8) rotate(${dx*2}deg)`,opacity:0}
    ],{duration:1100+Math.random()*400,easing:"ease-out"});
    a.onfinish=()=>s.remove();
  }
}
function centerOf(e){const r=e.getBoundingClientRect();return[r.left+r.width/2,r.top+r.height/2]}
function flyInto(src,m){
  return new Promise(res=>{
    const [x,y]=centerOf(src), [tx,ty]=centerOf(m.querySelector(".m-mouth"));
    if(reduced||!src.animate){res();return}
    const f=el("div","flyer",src.textContent); f.style.left=x+"px"; f.style.top=y+"px";
    f.style.fontSize=getComputedStyle(src).fontSize; f.style.color=getComputedStyle(src).color;
    document.body.appendChild(f);
    const dx=tx-x, dy=ty-y;
    SFX.whoosh();
    const a=f.animate([
      {transform:"translate(-50%,-50%) scale(1) rotate(0)"},
      {transform:`translate(calc(-50% + ${dx*.5}px),calc(-50% + ${dy*.5-90}px)) scale(1.1) rotate(-180deg)`,offset:.55},
      {transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(.15) rotate(-360deg)`,opacity:.6}
    ],{duration:700,easing:"ease-in"});
    a.onfinish=()=>{f.remove();res()};
  });
}
function renderStars(bump){
  $("starCount").textContent=stars;
  if(bump){const p=$("pill");p.classList.remove("bump");void p.offsetWidth;p.classList.add("bump")}
}
function addStar(){stars++;save("stars",stars);renderStars(true)}
function dots(n){const d=el("div","dots");for(let i=0;i<ROUNDS;i++)d.appendChild(el("span",i<n?"done":""));return d}
const PRAISE=["Bravo !","Super !","Miam, délicieux !","Génial !","Trop bon !","Bien lu !"];

function migrateAlbum(){
  if(album.length&&!String(album[0]).includes(":")){
    const n=album.length,g=GOLD.length;album=shuffle(STICKERS.slice()).slice(0,Math.min(n,STICKERS.length));GOLD=album.slice(0,Math.min(g,album.length));
    save("album",album);save("gold",GOLD);
  }
}
/* Photos de Miam sur la Terre */
let MPH=load("photos",[]);
function givePhoto(why){
  const locked=PHOTOS.map((_,i)=>i).filter(i=>!MPH.includes(i));if(!locked.length)return;
  const k=rnd(locked);MPH.push(k);save("photos",MPH);
  const ov=el("div","photopop",`<div class="polaroid"><img src="${PHOTOS[k]}" alt="Miam"><span>📸 ${why||"Nouvelle photo de Miam !"}</span></div>`);
  document.body.appendChild(ov);SFX.win();speak("Une nouvelle photo de Miam sur la Terre !");
  ov.onclick=()=>ov.remove();setTimeout(()=>ov.classList.add("out"),2800);setTimeout(()=>ov.remove(),3300);
}
function speakAfter(t,q,sl){waitQuiet(6000).then(()=>speak(t,q,sl))}
function party(body,onAgain,line,extra){
  body.innerHTML="";
  /* Autocollant suivant : on remplit les pages dans l'ordre, puis chaque autocollant devient doré, puis médailles */
  let sticker=null,kind="new",pageDone=null;
  migrateAlbum();
  {const here=STICKER_PAGES.find(p=>p.g===current),missHere=here?here.items.filter(x=>!album.includes(x)):[],miss=STICKERS.filter(x=>!album.includes(x));
   const pool=missHere.length?missHere:miss;
   if(pool.length){sticker=rnd(pool);const pg=STICKER_PAGES.find(p=>p.items.includes(sticker));if(pg.items.filter(x=>!album.includes(x)).length===1)pageDone=pg}}
  if(sticker){album.push(sticker);save("album",album)}
  else{const ng=STICKERS.filter(x=>!GOLD.includes(x));
    if(ng.length){sticker=rnd(ng);GOLD.push(sticker);save("gold",GOLD);kind="gold"}
    else{medals++;save("medals",medals);sticker="🏅";kind="medal"}}
  const isNew=kind==="new";
  const p=el("div","party");
  const m=makeMiam("fete"); m.style.margin="0 auto"; p.appendChild(m);
  p.appendChild(el("h2","","Bravo !"));
  const base=line||"Miam a le ventre plein.";
  p.appendChild(el("p","",base+(kind==="new"?" Il t'offre un autocollant :":kind==="gold"?" Un de tes autocollants devient doré ✨ :":" Ton album est tout doré ! Tu gagnes une médaille :")));
  p.appendChild(el("div","sticker"+(kind==="gold"?" gold":""),stkHTML(sticker)));
  if(pageDone){p.appendChild(el("p","pagedone","🎉 Page « "+pageDone.n+" » complète !"));setTimeout(()=>givePhoto("Page complète : une photo de Miam !"),2500)}
  const row=el("div","row");
  const again=el("button","card btn","🔁 Rejouer"); again.onclick=()=>{SFX.tap();onAgain()};
  let parcMsg="";
  if(PARC_ACTIVE&&PARC&&!PARC.done&&PARC.date===todayKey()&&PARC.steps[PARC.i]===current){
    PARC.i++;
    if(PARC.i>=PARC.steps.length){PARC.done=true;if(!PARC.bonus){PDAYS++;save("pdays",PDAYS);setTimeout(()=>givePhoto("Parcours terminé : une photo de Miam !"),2500)}again.textContent="🏆 Fin du parcours";again.onclick=()=>{SFX.tap();PARC_ACTIVE=false;parcoursEnd()};parcMsg=" Tu as fini le parcours du jour !"}
    else{const nx=PARC.steps[PARC.i];again.textContent="➡️ Étape suivante "+PLACES[nx].e;again.onclick=()=>{SFX.tap();go(nx)};parcMsg=" Prochaine étape : "+PARC_NAMES[nx]+" !"}
    save("parc",PARC);
  }
  const alb=el("button","card btn","📒 Mon album"); alb.onclick=()=>{SFX.tap();openAlbum()};
  row.append(again,alb);
  if(extra){const x=el("button","card btn",extra.label);x.onclick=()=>{SFX.tap();extra.fn(x)};row.appendChild(x)}
  p.appendChild(row); body.appendChild(p);
  if(PROG_NEW){const a=stepAnnounce(PROG_NEW);PROG_NEW=null;p.insertBefore(a.box,row);setTimeout(()=>{sparks(innerWidth/2,innerHeight*.3,24,["🌱","✨","⭐"]);a.say()},2600)}
  SFX.win(); setTimeout(()=>{mood(m,"happy");const[x,y]=centerOf(m);sparks(x,y,30)},100);
  speakAfter("Bravo ! "+base+(kind==="new"?" Voici un autocollant pour ton album !":kind==="gold"?" Ton autocollant devient doré !":" Tu gagnes une médaille !")+(pageDone?" Tu as complété une page de ton album !":"")+parcMsg);
}
function notEnough(body,text){
  body.innerHTML="";
  const n=el("div","note",text+"<br><br>");
  const b=el("button","card btn","⚙️ Ouvrir les réglages"); b.onclick=openSettings; n.appendChild(b); body.appendChild(n);
}

/* ---------- Niveaux ---------- */
const GAMES={musee:"🖼️ Musée",ecouter:"🍪 Cuisine",lire:"📖 Lire",ecrire:"✏️ Écrire",fusee:"🚀 Fusée",train:"🚂 Train",chenille:"🐛 Chenille"};
let LV=load("levels",{});
function lv(g){if(!LV[g])LV[g]={lvl:1,streak:0,hard:0};return LV[g]}
const isVowelG=x=>VOY.includes(x);
function wordLevel(w){
  if(w._lvl) return w._lvl;
  let lvl=1;
  if(w.s.some(g=>g.findIndex(isVowelG)>=2)) lvl=3;            // son double : table, clé
  else{
    const closed=w.s.length>1&&w.s.some(g=>{const i=g.findIndex(isVowelG);return i>=0&&g.slice(i+1).some(x=>!isVowelG(x))});
    const complex=w.s.flat().some(x=>["on","an","oi","eu","è","ch"].includes(x));
    if(closed||complex||w.s.length>2||Array.from(w.w).length>5) lvl=2;
  }
  return w._lvl=lvl;
}
/* Syllabes des mots de la semaine (cochés) */
/* Syllabes des mots de la semaine : seulement celles faites de sons cochés */
function weekSylls(){const seen=new Set(),out=[];WORDS.filter(inWeeks).forEach(w=>w.s.forEach(g=>{const k=g.join("");if(!seen.has(k)&&g.every(x=>sel.has(x))){seen.add(k);out.push(g)}}));return out}
/* Étape à l'intérieur d'un niveau : on reste longtemps sur les mots courts */
const wlen=w=>Array.from(w.w).length;
/* Paliers du niveau 1 : CV (dé, rue) et mots doublés (papa, dodo) → CVCV (lama, sofa) → CVC (fil, sac) */
const isDouble=w=>w.s.length===2&&w.s[0].join("")===w.s[1].join("")&&w.s[0].length===2;
const tierOf=w=>{const st=struct(w);if(st==="CV"||isDouble(w))return 1;if(st==="CVCV")return 2;if(st==="CVC")return 3;return 4};
/* Rang d'un son dans l'ordre d'apprentissage (voyelles simples, sons longs, sons brefs, sons complexes…) */
function soundRank(g){let i=SOUND_ORDER.indexOf(g);if(i<0)i=SOUND_ORDER.indexOf(PH_MAP[g]||g);return i<0?60:i}
function wordRank(w){const fl=w.s.flat();return Math.max(...fl.filter((g,i)=>!(g==="e"&&i===fl.length-1)).map(soundRank))}
/* Sons déjà bien lus : au moins 2 réussites du premier coup dans des mots différents (jeux de lecture) */
function readSounds(){
  const seen={};LOG.forEach(e=>{if(e.f&&!e.h&&["lire","musee","fusee","train"].includes(e.g)&&e.gs)new Set(e.gs).forEach(g=>{(seen[g]=seen[g]||new Set()).add(e.it)})});
  return new Set(Object.keys(seen).filter(g=>seen[g].size>=2));
}
function soundFrontier(){return 9+2*readSounds().size}   /* au départ : a i u o é e m l s f */
/* Difficulté d'écriture d'un mot : 1 = une syllabe ouverte (rue, fée) ou mot doublé (papa) ; 2 = 2 syllabes ouvertes (lama, lune) ;
   3 = 3 syllabes ouvertes (domino) ; 4 = une syllabe fermée (sac, pomme) ; 5 = sons doubles (table, bravo) */
function ptier(w){
  if(w._pt)return w._pt;
  if(w.ns&&w.tk){
    if(w.rq.includes("#grp"))return w._pt=5;
    const isV=t=>VOY.includes(t)||["â","î","ô","û","er","et","ez"].includes(t);
    const T=w.tk.filter((t,i)=>!isMuteG(w,i)),nv=T.filter(isV).length;
    let closed=false;for(let i=1;i<T.length;i++)if(!isV(T[i])&&isV(T[i-1])&&(i===T.length-1||!isV(T[i+1])))closed=true;
    return w._pt=closed?4:nv<=1?1:nv===2?2:3;
  }
  const n=w.s.length;let clus=false,closed=false;
  w.s.forEach((g,j)=>{let s=g;
    if(j===n-1&&s.length>1&&s[s.length-1]==="e")s=s.slice(0,-1);      /* e muet final : lu-ne, fé-e */
    const vi=s.findIndex(x=>VOY.includes(x));if(vi<0){if(s.length>=2)clus=true;return}   /* li-vre, ta-ble : sons doubles */
    if(vi>=2)clus=true;
    if(s.slice(vi+1).some(x=>!VOY.includes(x)))closed=true;
  });
  return w._pt=clus?5:closed?4:(n===1||isDouble(w))?1:n===2?2:3;
}
function stageFilter(c,lvl){
  if(progAuto()&&PROG){const T=curStep().tier||2;
    for(let t=T;t<=5;t++){const f=c.filter(w=>ptier(w)<=t);if(f.length>=4)return f}
    return c}
  const P=(current&&LV[current])||{pts:0},half=P.pts<NEED[lvl]*.6;
  let f=c;
  if(lvl===1){
    const ms=readSounds().size;
    const byPts=P.pts<5?1:P.pts<10?2:3,byMastery=ms<5?1:ms<8?2:3;
    const maxTier=Math.min(byPts,byMastery);
    for(let t=maxTier;t<=4;t++){f=c.filter(w=>tierOf(w)<=t&&wlen(w)<=5);if(f.length>=4)break}
  }
  else if(lvl===2)f=half?c.filter(w=>w.s.length<=2):c.filter(w=>w.s.length<=3);
  if(f.length<4)f=c;
  /* les sons arrivent progressivement : d'abord les mots faits des premiers sons appris */
  if(lvl<=2){let fr=soundFrontier();for(let k=0;k<10;k++){const g=f.filter(w=>wordRank(w)<=fr);if(g.length>=4)return g;fr+=3}}
  return f;
}
/* Mots qui se ressemblent (même début, même fin, même longueur…) */
function simScore(a,b){let p=0;while(p<a.length&&p<b.length&&a[p]===b[p])p++;
  return p*3+(a[0]===b[0]?2:0)+(a.slice(-2)===b.slice(-2)?2:0)+(Math.abs(a.length-b.length)<=1?1.5:0)+[...new Set(a)].filter(ch=>b.includes(ch)).length*.4}
function similar(target,pool,n){const t=target.w||target;return shuffle(pool).map(x=>({x,s:simScore(t,x.w||x)+Math.random()*1.2})).sort((a,b)=>b.s-a.s).slice(0,n).map(o=>o.x)}
function pickWord(av,lvl,last){
  let wk=av.filter(w=>weekOk(w)&&w.w!==last);
  if(wk.length&&Math.random()<.6)return rnd(wk);
  let c=av.filter(w=>w.w!==last);if(!c.length)c=av;
  c=stageFilter(c,lvl);
  if(progAuto()&&PROG){const st=curStep(),fo=focusG();
    const cf=!st.add.length&&st.p==="mots"?c.filter(w=>ptier(w)===st.tier):c.filter(w=>w.s.flat().some(g=>fo.has(g)));
    const rp=rappel();
    if(rp.active){const nf=cf.filter(w=>!rp.items.has(w.w));if(nf.length>=2)c=nf;else if(cf.length>=2)c=cf}
    else if(cf.length>=2&&Math.random()<.5)c=cf}
  {const nf=c.filter(w=>w.pr!=="f");if(nf.length>=2)c=nf;const hi=c.filter(w=>w.pr==="h");if(hi.length&&Math.random()<.5)c=hi}
  if(progAuto()&&PROG)return rnd(c);
  const lowest=Math.min(...c.map(wordLevel)),cap=Math.max(lvl,lowest);
  const ok=c.filter(w=>wordLevel(w)<=cap),top=ok.filter(w=>wordLevel(w)===cap);
  return top.length&&Math.random()<.65?rnd(top):rnd(ok);
}
/* Réussites du premier coup nécessaires pour monter : lent exprès */
const NEED={1:14,2:16,3:99};
function progress(g,errs,item){
  track(item,errs);
  const P=lv(g);let up=false;
  P.pts=P.pts||0;
  if(errs===0){P.pts++;P.hard=0;if(P.pts>=NEED[P.lvl]&&P.lvl<3){P.lvl++;P.pts=0;up=true}}
  else if(errs>=2){P.pts=Math.max(0,P.pts-1);P.hard++;if(P.hard>=2&&P.lvl>1){P.lvl--;P.hard=0;P.pts=Math.floor(NEED[P.lvl]/2)}}
  save("levels",LV);
  refreshBadges(g);
  if(up){
    const t=el("div","toast","🌟 Tu progresses !");setTimeout(()=>givePhoto("Tu progresses : une photo de Miam !"),1600);document.body.appendChild(t);
    setTimeout(()=>{SFX.win();sparks(innerWidth/2,innerHeight*.28,26)},150);
    speak("Wow ! Tu progresses, bravo !",true);
    setTimeout(()=>t.remove(),2700);
  }
}
const RESTART={musee:()=>startMusee(),ecouter:()=>startListen(),lire:()=>startRead(),ecrire:()=>startWrite(),fusee:()=>startRocket(),train:()=>startTrain(),chenille:()=>startCat()};
function lvlBadge(g){
  /* Le niveau n'est plus montré à l'enfant : il reste réglable dans ⚙️ › Options avancées */
  const e=el("div","");e.dataset.g=g;e.className="lvlhidden";return e;
  const P=lv(g),b=el("div","lvlbadge","Niveau");b.dataset.g=g;
  [1,2,3].forEach(n=>{
    const x=el("button","lvbtn"+(n===P.lvl?" on":""),String(n));x.setAttribute("aria-label","Niveau "+n);x.setAttribute("aria-pressed",n===P.lvl);
    x.onclick=()=>{if(n===P.lvl)return;SFX.tap();P.lvl=n;P.pts=0;P.hard=0;save("levels",LV);RESTART[g]()};
    b.appendChild(x);
  });
  if(P.lvl<3){const bar=el("span","lvlbar");const f=el("i");f.style.width=Math.min(100,Math.round((P.pts||0)/NEED[P.lvl]*100))+"%";bar.appendChild(f);b.appendChild(bar)}
  return b;
}
function refreshBadges(g){}
function head(g,n){const d=el("div","");d.appendChild(lvlBadge(g));d.appendChild(dots(n));return d}

/* ---------- Nourrir Miam ---------- */
const L={round:0,target:null,locked:false,last:null,first:true};
/* Nombre de biscuits : 2, puis 3, puis 4 à mesure des réussites depuis le début de l'étape */
function cuisineN(lvl){
  if(!(progAuto()&&PROG))return lvl===1?2:3;
  const since=PROG.since||0,n=LOG.filter(e=>e.g==="ecouter"&&e.f&&e.t>=since).length;
  return n<2?2:n<14?3:4;
}
/* Sons qui se ressemblent à l'oreille */
const NEAR_C=[["b","d"],["b","p"],["p","t"],["t","d"],["f","v"],["m","n"],["l","r"],["s","ch"],["s","z"],["c","g"],["j","ch"]];
const NEAR_V=[["o","ou"],["u","ou"],["i","u"],["é","e"],["a","o"],["é","è"],["e","eu"],["on","an"],["o","on"],["a","an"],["i","y"]];
const near=(L,a,b)=>L.some(([x,y])=>(x===a&&y===b)||(x===b&&y===a));
function closeness(p,t){
  const sc=p[0]===t[0],sv=p[1]===t[1];
  if(sv&&near(NEAR_C,p[0],t[0])) return 3;   // ba / da
  if(sc&&near(NEAR_V,p[1],t[1])) return 3;   // lo / lou
  if(sc||sv) return 1.5;                      // la / li, ma / la
  if(near(NEAR_C,p[0],t[0])&&near(NEAR_V,p[1],t[1])) return 1;
  return 0;
}
const NO_SYL_C=["x","w","h","gn"],NO_SYL_V=["am","em","om","im","ill","ail","eil","euil","ouil"];
function sylPool(){const p=[];selCons().filter(c=>!NO_SYL_C.includes(c)).forEach(c=>selVoy().filter(v=>!NO_SYL_V.includes(v)).forEach(v=>{if(!blocked(c,v))p.push([c,v])}));return p}
function startListen(){L.round=0;L.first=true;nextListen()}
function nextListen(){
  if(stageSons())return nextListenLetter();
  const body=$("lBody"),pool=sylPool();
  if(pool.length<3) return notEnough(body,"Il faut au moins une consonne et plusieurs voyelles pour jouer.");
  if(L.round>=ROUNDS) return party(body,startListen);
  const lvl=lv("ecouter").lvl,nOpt=cfgN("nourrirN",cuisineN(lvl));
  let tp=pool;
  if(lvl===1&&!(progAuto()&&PROG)){const e=pool.filter(p=>["a","i","o","u"].includes(p[1]));if(e.length>=3)tp=e;const lg=tp.filter(p=>LONG_C.includes(p[0]));if(lg.length>=3)tp=lg}
  else if(lvl===2){const e=pool.filter(p=>!["on","an","oi","eu","è"].includes(p[1]));if(e.length>=3)tp=e}
  if(progAuto()&&PROG&&Math.random()<.5){const fo=focusG(),f=pool.filter(p=>p.some(x=>fo.has(x))&&p.join("")!==L.last);if(f.length)tp=f}
  let t;do{t=rnd(tp)}while(tp.length>1&&t.join("")===L.last);
  {const ws=weekSylls().filter(g=>g.length===2&&CONS.includes(g[0])&&VOY.includes(g[1])&&!blocked(g[0],g[1])&&g.join("")!==L.last);
   if(ws.length&&Math.random()<.7)t=rnd(ws);}
  let vc=false;const vp=vcPool();
  if(useVC(lvl)&&vp.length>=2&&Math.random()<.35){vc=true;do{t=rnd(vp)}while(vp.length>1&&t.join("")===L.last)}
  L.target=t;L.last=t.join("");L.locked=false;L.err=0;L.wrong=[];L.vc=vc;
  const others=vc?(()=>{const sw=x=>[x[1],x[0]];const o=shuffle(vp.filter(p=>p.join("")!==t.join(""))).map(p=>({p,s:closeness(sw(p),sw(t))})).sort((a,b)=>b.s-a.s).map(o=>o.p);
      const rev=[t[1],t[0]];if(sylPool().some(p=>p.join("")===rev.join(""))&&lvl>=2)o.unshift(rev);
      return o.slice(0,nOpt-1)})()
    :shuffle(pool.filter(p=>p.join("")!==t.join("")))
    .map(p=>({p,s:closeness(p,t)})).filter(o=>o.s>0||lvl===1)
    .sort((a,b)=>lvl===1?(Math.abs(a.s-1.5)-Math.abs(b.s-1.5)):b.s-a.s).slice(0,nOpt-1).map(o=>o.p);
  if(others.length<nOpt-1) shuffle(pool.filter(p=>p.join("")!==t.join("")&&!others.includes(p))).slice(0,nOpt-1-others.length).forEach(p=>others.push(p));
  const opts=shuffle([t,...others]);

  body.innerHTML="";body.appendChild(head("ecouter",L.round));
  const ksc=el("div","kscene");body.appendChild(ksc);
  const scene=el("div","scene"), m=makeMiam("cuisine");
  const bub=el("button","kbub",'<span class="spk">🔊</span>J\'ai faim de…'+(hasVoice?"":`<small>Adulte, dites « ${t.join("")} »</small>`));
  bub.setAttribute("aria-label","Réécouter ce que Miam veut manger");bub.dataset.hint="1";
  bub.onclick=()=>{mood(m,"open");speak(spoken(t))};
  scene.append(m,bub);ksc.appendChild(scene);
  const ch=el("div","choices"+(nOpt===2||nOpt===4?" two":"")+(nOpt>=4?" many":"")),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  opts.forEach(o=>{
    const b=el("button","cookie",o.join(""));
    b.onclick=async()=>{
      if(L.locked||b.disabled)return;
      if(o.join("")===t.join("")){
        L.locked=true;SFX.yes();mood(m,"open");b.classList.add("good");
        await wait(200);const p=flyInto(b,m);b.classList.add("gone");await p;
        mood(m,"chew");SFX.chomp();await wait(900);
        mood(m,"happy");addStar();const[x,y]=centerOf(m);sparks(x,y);
        const pr=rnd(PRAISE);msg.textContent=pr+" C'était « "+t.join("")+" »";
        speak(spoken(t));speak(pr,true);progress("ecouter",L.err,{gs:t,keepE:true});
        logA({g:"ecouter",lv:lvl,it:t.join(""),tg:t.join(""),gs:t,st:L.vc?"VC":"CV",ns:1,nc:opts.length,md:"syllabe",fu:L.vc?"VC":"CV",ok:1,f:L.err?0:1,n:L.err+1,dg:[0,1].filter(k=>opts.some(o=>o!==t&&o[k]!==t[k])).map(k=>[t[k],L.wrong.some(o=>o[k]!==t[k])?0:1]),src:"direct"});
        L.round++;m.style.setProperty("--full",1+L.round*.04);
        await settle(1000);nextListen();
        if(L.round<ROUNDS&&sylPool().length>=3)setTimeout(()=>speak(spoken(L.target)),300);
      }else{
        SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;
        L.err++;L.wrong.push(o);msg.textContent="Hmm… pas celui-là. Écoute encore !";
        speak(spoken(o));
        setTimeout(()=>mood(m,"idle"),900);
      }
    };
    ch.appendChild(b);
  });
  ksc.appendChild(ch);
  const board=el("div","kboard");board.appendChild(msg);ksc.appendChild(board);
  msg.textContent="Écoute Miam et donne-lui le bon biscuit !";
  setTimeout(()=>mood(m,"open"),300);
  if(L.first){L.first=false;speak("Miam a faim ! Donne-lui : "+spoken(t))}
}

/* ---------- Lire ---------- */
const R={round:0,word:null,locked:false,last:null};
let HIDDEN=new Set(load("hidden",[]));
/* Mots de la semaine (photo ou liste), classés par semaine */
let WEEKS=load("weeks",[]);
const weekOn=id=>WEEKS.some(x=>x.id===id&&x.on);
const inWeeks=w=>(w.weeks||[]).some(weekOn);
const knownW=w=>{if(w.rq)return w.rq.every(knownKey);const fl=w.s.flat();return fl.every((g,i)=>sel.has(g)||(g==="e"&&i>0&&i===fl.length-1))};
/* ===== Banque V7 : conditions de lecture et d'écriture =====
   rq = graphèmes et conditions pour LIRE le mot ; wq = pour l'ÉCRIRE seul (les lettres muettes s'y ajoutent).
   Les conditions « # » viennent des étapes minimales de la banque :
   #ctx = valeurs contextuelles (c doux, s entre voyelles = z, ç, ss) · #grp = groupes de consonnes (tr, bl…)
   #fin = graphies de fin de parcours (â, î, ô, û, -er/-et/-ez, x, y, h, w) · #muet = lettres muettes en écriture */
const FEAT_AT={"#ctx":15,"#grp":19,"#fin":19,"#muet":19,"#emf":13};   /* #emf = e muet final : en mode auto, ouvert par la leçon (emLessonOpen/emfReady) ; 13 ne sert qu'au classement des mots */   /* étape du code (index) où chaque condition s'ouvre */
function featKnown(k,stepI){
  if(stepI!=null)return stepI>=FEAT_AT[k];
  if(k==="#emf"&&progAuto()&&PROG)return emfReady();
  if(progAuto()&&PROG)return progI()>=FEAT_AT[k];
  /* mode manuel : prudent. Groupes (tr, bl) = structure CCV cochée ; s=z et c doux = « z » coché ;
     accents rares, -er/-et/-ez et lettres muettes à écrire = « ê » coché */
  return k==="#grp"?structs.has("CCV"):k==="#ctx"?sel.has("z"):k==="#emf"?sel.has("e"):sel.has("ê");
}
function knownKey(k){return k[0]==="#"?featKnown(k):sel.has(k)}
function writeOK(w){if(w.bank&&(!w.ecr||w.outil))return false;return w.wq?w.wq.every(knownKey):knownW(w)}
function readableAt(w,i){const S=progSounds(i);return w.rq?w.rq.every(k=>k[0]==="#"?featKnown(k,i):S.has(k)):w.s.flat().every((g,j,a)=>S.has(g)||(g==="e"&&j===a.length-1))}
/* Lettres muettes annotées dans la banque : grisées en lecture (jamais déduites) */
const escH=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function wordHTML(w){if(typeof w==="string")w=WORDS.find(x=>x.w===w)||{w};if(!w.mute||!w.mute.size)return escH(w.w);return Array.from(w.w).map((c,i)=>w.mute.has(i)?`<span class="mute">${escH(c)}</span>`:escH(c)).join("")}
function gIdx(w,si){let n=0;for(let i=0;i<si;i++)n+=w.s[i].length;return n}
const isMuteG=(w,i)=>!!(w&&w.mg&&w.mg.has(i));
function sylHTML(w,si){const g=w.s[si],b=gIdx(w,si);return g.map((x,j)=>isMuteG(w,b+j)?`<span class="mute">${escH(x)}</span>`:escH(x)).join("")}
function readG(w){return w.s.flat().filter((g,i)=>!isMuteG(w,i))}
const weekOk=w=>inWeeks(w)&&(CFG.weeksSounds!=="coches"||knownW(w));
const soundWords=()=>WORDS.filter(w=>!HIDDEN.has(w.w)&&!(w.outil&&!inWeeks(w))&&(CFG.onlyWeeks?weekOk(w):(weekOk(w)||(!w.weekOnly&&(w.custom||knownW(w))))));
/* Structure écrite : C = consonne, V = voyelle (ou, on, ch… comptent pour un). Le e final muet n'est pas compté. */
const STRUCTS=[["CV","dé, rue"],["CVC","mur, lune"],["CVCV","lama, vélo"],["CVCVC","tomate, salade"],["CVCVCV","lavabo, numéro"],["CCV","sons doubles : clé, table"],["autre","os, tortue, avion"]];
let structs=new Set(load("structs",STRUCTS.map(x=>x[0])));
function pattern(w){let g=w.s.flat();if(g.length>1&&g[g.length-1]==="e")g=g.slice(0,-1);return g.map(x=>VOY.includes(x)?"V":"C").join("")}
function struct(w){
  if(w._st) return w._st;
  if(w.s.some(g=>g.findIndex(x=>VOY.includes(x))>=2)) return w._st="CCV";
  const p=pattern(w);
  return w._st=STRUCTS.some(x=>x[0]===p)?p:"autre";
}
const availWords=()=>soundWords().filter(w=>w.custom||inWeeks(w)||progAuto()||structs.has(struct(w)));
/* Réglages de personnalisation des jeux */
let CFG=Object.assign({pitch:1,voiceURI:"",kidName:"",museeSon:"oui",onlyWeeks:false,museeN:"auto",glVoice:"auto",fuseeN:"auto",fuseeOutils:"oui",lireN:"auto",nourrirN:"auto",trainPiege:"auto",ecrireKb:"auto"},load("cfg",{}));
const CFG_DEF=[
 ["fuseeN","🚀 Fusée : mots proposés",[["auto","Auto"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"]]],
 ["lireN","📖 Lire : images proposées",[["auto","Auto"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"]]],
 ["nourrirN","🍪 Cuisine : biscuits proposés",[["auto","Auto"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"]]],
 ["trainPiege","🚂 Train : wagons pièges",[["auto","Auto"],["non","Aucun"],[1,"1"],[2,"2"],[3,"3"]]],
 ["museeSon","🖼️ Musée : 🔊 à côté des images",[["oui","Oui"],["non","Non"]]],
 ["museeN","🖼️ Musée : paires mot-image",[["auto","Auto"],[2,"2"],[3,"3"],[4,"4"],[5,"5"],[6,"6"],[7,"7"],[8,"8"]]],
 ["ecrireKb","✏️ Écrire : clavier",[["auto","Auto"],["reduit","Réduit"],["complet","Complet"]]],
 ["vc","🔄 Syllabes inversées (il, ar, of) : cuisine et école",[["auto","Auto (dès le niveau 2)"],["oui","Oui"],["non","Non"]]],
 ["voixMiamots","🎧 Sons enregistrés de Miamots",[["oui","Utiliser la voix Miamots"],["non","Voix du téléphone seulement"]]],
 ["weeksSounds","📅 Mots de la semaine",[["coches","Seulement avec les sons cochés"],["tous","Tous, même avec d'autres sons"]]]
];
if(!load("glv3",false)){CFG.glVoice="auto";save("cfg",CFG);save("glv3",true)}
const cfgN=(k,def)=>CFG[k]==="auto"?def:+CFG[k];
/* ===================== Progression automatique : un seul chemin, lent, pour tous les jeux =====================
   Chaque étape ajoute 1 à 3 sons (d'abord les sons qui s'étirent, puis les sons brefs, puis les sons complexes)
   et fixe la longueur des mots. On avance seulement quand les nouveaux sons sont bien réussis, dans plusieurs jeux. */
const CURRIC=[
 {p:"sons",add:["a","o"],t:"Les voyelles a et o",kid:"les sons a et o"},
 {p:"sons",add:["i","u"],t:"Les voyelles i et u",kid:"les sons i et u"},
 {p:"sons",add:["e","y"],t:"Les voyelles e et y",kid:"le son e"},
 {p:"sons",add:["r","l"],t:"Sons qui s'étirent : r, l",kid:"les sons rrr et lll"},
 {p:"sons",add:["s","m"],t:"Sons qui s'étirent : s, m",kid:"les sons sss et mmm"},
 {p:"sons",add:["ou"],t:"Le son ou (loup, roue)",kid:"le son ou"},
 {p:"syl",add:[],tier:1,t:"Faire chanter les sons : ra, li, sou… al, or · rue, roue, lama",kid:"faire chanter les sons ensemble"},
 {p:"mots",add:["j","f"],tier:2,t:"j, f : petits mots (jus, fée, sofa)"},
 {p:"mots",add:["ch","n"],tier:2,t:"ch, n : chou, niche, lune"},
 {p:"mots",add:["v","é"],tier:3,t:"v, é et mots de 3 syllabes : vélo, fusée, salami"},
 {p:"mots",add:["oi","on"],tier:3,t:"Les sons oi, on : roi, mouton"},
 {p:"mots",add:["p","t"],tier:4,t:"Sons brefs p, t et syllabes fermées : papa, tapis, sac"},
 {p:"mots",add:["b","d"],tier:4,t:"Sons brefs b, d : bébé, dodo, bol"},
 {p:"mots",add:["c","k","qu"],tier:4,t:"Le son k (c, k, qu) : café, kimono, coq"},
 {p:"mots",add:["g"],tier:4,t:"Le son g : gâteau, légume"},
 {p:"mots",add:["an","en"],tier:4,t:"Le son an (an, en) : maman, dent"},
 {p:"mots",add:["in"],tier:4,t:"Le son in : lapin, sapin"},
 {p:"mots",add:["au","è"],tier:4,t:"au, è : auto, vipère"},
 {p:"mots",add:["h","w","x","z"],tier:4,t:"Lettres plus rares : h, w, x, z (zéro)"},
 {p:"mots",add:["eu","ai","eau","ê","un","gn","ph","oin","ain","ein","ill"],tier:5,t:"Sons doubles (tr, bl) et tous les autres sons"}
];
const RARE_SND=new Set(["y","h","w","x","k","qu"]);
const progAuto=()=>CFG.prog!=="manuel";
let PROG=load("prog",null);
const progI=()=>Math.max(0,Math.min((PROG&&PROG.i)||0,CURRIC.length-1));
const curStep=()=>CURRIC[progI()];
function progSounds(i){const s=new Set();CURRIC.slice(0,(i==null?progI():i)+1).forEach(st=>st.add.forEach(g=>s.add(g)));return s}
/* Sons à faire travailler en priorité : ceux de l'étape (ou de la dernière étape qui a ajouté des sons) */
/* Sons ciblés de l'étape (ou de la dernière étape qui a ajouté des sons) */
function targetG(){for(let i=progI();i>=0;i--)if(CURRIC[i].add.length)return new Set(CURRIC[i].add.slice(0,8));return new Set()}
/* Sons récents : ceux des étapes ouvertes ces 7 derniers jours (et la cible actuelle) */
function recentKeys(){
  const wk=Date.now()-PEDA.rappel.joursRecents*864e5,ks=new Set();
  ((PROG&&PROG.hist)||[]).filter(h=>h.t>=wk).forEach(h=>(CURRIC[h.i]||{add:[]}).add.forEach(g=>{if(!RARE_SND.has(g))ks.add(nk(g))}));
  return [...ks];
}
/* Le rappel du jour (« Hier ») : au début de chaque journée, on revient sur les derniers sons travaillés la veille
   (dernier jour joué avant aujourd'hui), pas encore acquis, avec des items différents autant que possible.
   Ces réussites, faites un autre jour, nourrissent vraiment la consolidation. Le rappel est fait quand chaque son
   a été revu 2 fois aujourd'hui (ou après 8 essais). */
let _rp=null;
function rappel(){
  const d=DAY(Date.now());if(_rp&&_rp.d===d&&_rp.n===LOG.length)return _rp;
  let last=null;for(let i=LOG.length-1;i>=0;i--){const e=LOG[i];if(e.test)continue;const ed=DAY(e.t);if(ed!==d){last=ed;break}}
  const r={d,n:LOG.length,day:last,gs:[],items:new Set(),active:false};
  if(last){
    const cnt={};LOG.forEach(e=>{if(e.test||DAY(e.t)!==last)return;if(e.it)r.items.add(e.it);try{classify(e).forEach(x=>{if(x.c==="son"||x.c==="fus"||x.c==="lec")cnt[x.g]=(cnt[x.g]||0)+1})}catch(_){}});
    r.gs=Object.keys(cnt).filter(k=>k&&!stAtLeast(compStatus("son",k).st,"acquis")).sort((a,b)=>gRank(b)-gRank(a)).slice(0,PEDA.rappel.sons);
    const seen=k=>["son","fus","lec"].reduce((a,c)=>a+todayRecs(c,k).length,0);
    const tot=r.gs.reduce((a,k)=>a+seen(k),0);
    r.active=r.gs.length>0&&!r.gs.every(k=>seen(k)>=PEDA.rappel.parSon)&&tot<PEDA.rappel.maxEssais;
  }
  return _rp=r;
}
const gOfKey=k=>{for(const g of progSounds())if(nk(g)===k)return g;return k};
/* Sons à privilégier pour CET item : environ 3 fois sur 10 la cible, 4 la consolidation, 3 la révision.
   Les rappels différés dus passent avant tout ; on ne sort jamais des sons déjà présentés. */
function focusG(){
  const target=targetG();
  try{
    const rp=rappel();if(rp.active&&Math.random()<PEDA.rappel.focus)return new Set(rp.gs.map(gOfKey));        /* 1. Hier : rappel */
    const fr=fragileG();if(fr.length&&Math.random()<PEDA.fragile.focus)return new Set(fr.map(gOfKey));           /* son fragile au rappel : plus de pratique */
    /* 2. Aujourd'hui : tant que les sons de l'étape ne sont pas « compris pour continuer », ils reviennent plus souvent */
    if(progAuto()&&PROG&&[...target].some(g=>!RARE_SND.has(g)&&!sessOK("son",nk(g))&&!stAtLeast(compStatus("son",nk(g)).st,"consolide"))&&Math.random()<PEDA.cible.focus)return target;
    const due=[],cons=[],acq=[];
    progSounds().forEach(g=>{if(target.has(g)||RARE_SND.has(g))return;const s=compStatus("son",nk(g));
      if(s.due)due.push([g,s.tc]);else if(s.st==="acquis")acq.push([g,s.last]);else cons.push([g,s.last])});
    due.sort((a,b)=>a[1]-b[1]);acq.sort((a,b)=>a[1]-b[1]);cons.sort((a,b)=>a[1]-b[1]);
    const r=Math.random(),pick=a=>new Set(a.slice(0,3).map(x=>x[0]));
    if(due.length&&r<.4)return pick(due);
    if(r<.3||(!cons.length&&!acq.length))return target;
    if(r<.7&&cons.length)return pick(cons);
    if(acq.length)return pick(acq);
    return cons.length?pick(cons):target;
  }catch(e){return target}
}
function applyProg(){if(progAuto()&&PROG&&PROG.i!=null)sel=progSounds()}
function setProgStep(i,silent){PROG=Object.assign(PROG||{},{i:Math.max(0,Math.min(i,CURRIC.length-1)),since:Date.now()});PROG.hist=(PROG.hist||[]).concat([{i:PROG.i,t:Date.now()}]).slice(-40);save("prog",PROG);applyProg()}
applyProg();
/* Mots ajoutés par l'adulte */
const MULTI=["euil","ouil","eau","oin","ain","ein","ail","eil","ill","œu","ch","ou","on","an","en","in","un","oi","ai","ei","au","eu","gn","ph","qu"];

/* Mots ajoutés à la banque (courts et entièrement déchiffrables) */
[["arc", "🏹", [["a", "r", "c"]]],["vis", "🔩", [["v", "i", "s"]]],["or", "🥇", [["o", "r"]]],["jour", "☀️", [["j", "ou", "r"]]],["cœur", "❤️", [["c", "œu", "r"]]],["sœur", "👧", [["s", "œu", "r"]]],["zéro", "0️⃣", [["z", "é"], ["r", "o"]]],["bisou", "😘", [["b", "i"], ["s", "ou"]]],["minou", "🐈", [["m", "i"], ["n", "ou"]]],["doudou", "🧸", [["d", "ou"], ["d", "ou"]]],["caribou", "🦌", [["c", "a"], ["r", "i"], ["b", "ou"]]],["fusée", "🚀", [["f", "u"], ["s", "é", "e"]]],["momie", "🧟", [["m", "o"], ["m", "i", "e"]]],["pomme", "🍎", [["p", "o", "m"], ["m", "e"]]],["ruche", "🐝", [["r", "u"], ["ch", "e"]]],["rose", "🌹", [["r", "o"], ["s", "e"]]],["valise", "🧳", [["v", "a"], ["l", "i"], ["s", "e"]]],["chemise", "👕", [["ch", "e"], ["m", "i"], ["s", "e"]]],["girafe", "🦒", [["g", "i"], ["r", "a"], ["f", "e"]]],["cerise", "🍒", [["c", "e"], ["r", "i"], ["s", "e"]]],["citron", "🍋", [["c", "i"], ["t", "r", "on"]]],["ballon", "⚽", [["b", "a", "l"], ["l", "on"]]],["dauphin", "🐬", [["d", "au"], ["ph", "in"]]],["pantalon", "👖", [["p", "an"], ["t", "a"], ["l", "on"]]],["luge", "🛷", [["l", "u"], ["g", "e"]]],["lime", "🪚", [["l", "i"], ["m", "e"]]],["mule", "🫏", [["m", "u"], ["l", "e"]]],["mime", "🤡", [["m", "i"], ["m", "e"]]],["vase", "🏺", [["v", "a"], ["s", "e"]]],["pirogue", "🛶", [["p", "i"], ["r", "o"], ["gu", "e"]]],["domino", "🁢", [["d", "o"], ["m", "i"], ["n", "o"]]],["salami", "🍕", [["s", "a"], ["l", "a"], ["m", "i"]]],["kimono", "👘", [["k", "i"], ["m", "o"], ["n", "o"]]],["lasso", "🤠", [["l", "a", "s"], ["s", "o"]]]].forEach(([w,e,sy])=>{if(!WORDS.some(x=>x.w===w))WORDS.push({w,e,s:sy})});
function parseG(str){const out=[];let i=0;while(i<str.length){const m=MULTI.find(x=>str.startsWith(x,i));if(m){out.push(m);i+=m.length}else{out.push(str[i]);i++}}return out}
/* ===== Banque de mots de référence : miamots_banque_v7_7_finale.json (546 mots) · mots-outils : miamots_mots_outils_v1_1.json (42, liste unique) =====
   [mot, emoji, syllabes ou 0, graphèmes v7.2, rq, wq, lettres muettes (index), étape lecture, étape écriture,
    priorité (h/m/f), type (c = mot courant, o = mot-outil, p = prénom), usages (i = jeux d'images, t = train, j = jardin), écriture recommandée] */
{WORDS.length=0;const RM=new Set(BANK_REMOVED);
 BANK_V7.forEach(([w,e,s,tk,rq,wq,mute,rd,wr,pr,ty,us,ecr])=>{
   if(RM.has(w))return;                       /* un mot retiré n'est jamais proposé */
   const S=s||[tk.slice()];
   const o={w,e:e||null,s:S,tk,rq,wq,mute:new Set(mute),rd,wr,bank:true,ns:!s,mg:new Set(),pr,ty,us,ecr:!!ecr,outil:ty==="o"};
   let pos=0;S.flat().forEach((g,i)=>{const n=Array.from(g).length;let all=n>0;for(let c=pos;c<pos+n;c++)if(!o.mute.has(c))all=false;if(all)o.mg.add(i);pos+=n});
   WORDS.push(o);
 });}
/* Images aquarelle (MIAMOTS_IMAGES_FINAL, 81 mots) : elles remplacent l'émoji partout où le mot est illustré.
   w.e devient une petite balise <i> (l'émoji d'origine reste dans w.emo). Un mot qui n'avait pas d'émoji
   devient illustré et peut donc entrer dans les jeux d'images, toujours selon les graphèmes connus. */
WORDS.forEach(w=>{const k=WIMG[w.w];if(k){w.emo=w.e;w.e=`<i class="wi wi-${k}"></i>`}});
/* Images presque identiques : même image, pour qu'elles ne soient jamais proposées ensemble dans un même choix
   (chaton ≈ chat ; agneau ≈ mouton). PIC_OFF : mots dont l'image est retirée des jeux (aucun pour l'instant). */
const PIC_SAME={chaton:"chat",agneau:"mouton"},PIC_OFF=[];
PIC_OFF.forEach(x=>{const A=WORDS.find(w=>w.w===x);if(A){A.e=A.emo||null;if(A.e&&A.e.startsWith("<i"))A.e=null}});
Object.entries(PIC_SAME).forEach(([a,b])=>{const A=WORDS.find(w=>w.w===a),B=WORDS.find(w=>w.w===b);if(A&&B&&B.e)A.e=B.e});
let CUSTOM=load("custom",[]);
function addCustomToBank(c){
  if(c.outil)c.outil=false;
  if(!WORDS.some(w=>w.w===c.w))WORDS.push({w:c.w,e:c.e||null,s:c.syl.map(parseG),custom:true});
}
const READ_ACTS={
  mots:{t:"Lire des mots",d:"Je lis le mot et je trouve l'image",img:()=>(STK_IMG.lire||[])[1]},
  chemin:{t:"Le chemin des sons",d:"Je fais avancer la lettre",img:()=>(STK_IMG.lire||[])[0]},
  syl:{t:"Quelle syllabe ?",d:"J'entends les sons ou le mot, je trouve la syllabe",img:()=>(STK_IMG.sons||[])[12]}
};
function startRead(){R.round=0;R.mode=null;renderReadMenu()}
const BOOK_FACTS={
  globe:[["🌍","La Terre est ronde comme ce globe. Le bleu, ce sont les océans : il y a plus d'eau que de terre !"],["🍁","Sur le globe, cherche le Canada : c'est un des plus grands pays du monde !"]],
  owl:[["🦉","Le hibou peut tourner sa tête presque tout autour de lui !"],["🌙","Le hibou chasse la nuit : il voit très bien dans le noir."]],
  fox:[["🦊","Le renard dort roulé en boule, avec sa queue comme une couverture."],["❄️","Le renard entend une souris qui bouge sous la neige !"]],
  bird:[["🐦","C'est une mésange. Elle chante presque son nom : « tchic-a-di-di-di » !"]],
  squirrel:[["🐿️","L'écureuil cache des noisettes pour l'hiver… et il en oublie ! Elles deviennent des arbres."]],
  binoc:[["🔭","Les jumelles rapprochent ce qui est loin : parfait pour observer les oiseaux !"]],
  stars:[["✨","Les étoiles forment des dessins dans le ciel : on les appelle des constellations."],["🥄","La Grande Ourse ressemble à une grande casserole !"]],
  lantern:[["🏮","Avant l'électricité, on lisait le soir à la lumière d'une lanterne."]],
  miam:[["📖","Les mots sont faits de sons : quand tu lis, tu fais chanter les lettres !"],["🌟","Plus tu lis, plus tu connais de mots… et plus tu découvres le monde !"]],
  book:[["🐾","Un livre documentaire nous apprend des vraies choses sur les animaux et la nature."],["📚","Les premiers livres imprimés ont été fabriqués il y a plus de 500 ans !"]],
  leaf:[["🍁","On reconnaît un arbre à la forme de ses feuilles : la feuille d'érable est sur le drapeau du Canada !"]],
  mountain:[["🏔️","Les montagnes sont si hautes que la neige y reste même au printemps."]],
  clock:[["🧭","Une boussole montre toujours le nord : les explorateurs l'utilisaient pour ne pas se perdre."]]
};
/* Miamots — phrases V1.1 (174 phrases graduées ; PH029 et PH061 corrigées : mots retirés « ravi » et « toc » remplacés) : [id, étape banque, phrase, question, réponse, 1 très courte / 2 courte] */
/* ===== Phrases V1.1 : lecture de phrases + question de compréhension =====
   Règles : chaque mot de contenu doit être lisible avec les graphèmes connus de l'enfant (banque V7) ;
   les mots-outils (liste canonique) et les formes verbales à enseigner sont SOUTENUS (on touche → on entend) ;
   FORMES À ENSEIGNER (PHR_FORMES : fait, vois, suis, mange, tu as…) : ce sont des unités enseignées DANS LES PHRASES,
   données à l'oral sur demande. Elles ne sont JAMAIS une preuve de décodage ni de maîtrise orthographique :
   elles ne créditent aucun graphème, ne comptent pas comme mots lus seul, ne sont jamais proposées en écriture
   ni dans les jeux de mots, et ne sont pas tirées de la banque (« as » reste retiré comme mot de la banque).
   une phrase ne fait jamais avancer la maîtrise d'un graphème : elle nourrit sa propre compétence « phr » (compréhension).
   Une phrase avec un mot retiré de la banque, inconnu ou caché n'est jamais proposée. */
const MO_SET=new Set(MOTS_OUTILS.mots),MO_GRP={};MOTS_OUTILS.groupes.forEach(g=>g.mots.forEach(m=>MO_GRP[m]=g.groupe));
const PHR_FORMES_SET=new Set(Object.keys(PHR_FORMES));
let _phrW=null;
function phrWordMap(){if(!_phrW){_phrW={};WORDS.forEach(w=>{if(w.bank)_phrW[w.w.toLowerCase()]=w})}return _phrW}
function phrTokens(txt){
  const out=[],RM=new Set(BANK_REMOVED);
  txt.replace(/'/g,"’").split(/\s+/).filter(Boolean).forEach(raw=>{
    const m=raw.match(/^(.*?)([.,!?;:]*)$/),core=m[1],punct=m[2];
    const parts=core.replace(/’/g,"’\u0001").split("\u0001").filter(Boolean);
    parts.forEach((p,i)=>{
      const lo=p.toLowerCase(),cap=p[0]!==lo[0],last=i===parts.length-1;
      const t={t:p,lo,cap,glue:!last,punct:last?punct:""};
      if(p.endsWith("’"))t.k="el";
      else if(MO_SET.has(lo))t.k="o";
      else if(PHR_FORMES_SET.has(lo)&&!phrWordMap()[lo])t.k="f";   /* forme verbale enseignée (ex. « tu as ») : jamais un mot de la banque */
      else if(RM.has(lo))t.k="x";
      else{const w=phrWordMap()[lo];
        if(w&&w.outil)t.k="o";else if(w){t.k="b";t.w=w}else t.k="x"}
      out.push(t)});
  });
  return out;
}
/* type de question → famille de réponses (les distracteurs viennent de la même famille) */
const PHR_Q=q=>{q=q.replace(/'/g,"’").toLowerCase();const f=q.split(/\s+/)[0];
  if(/couleur/.test(q))return "coul";if(/combien|nombre/.test(q))return "num";if(f==="quand")return "quand";
  if(f==="où"||f==="d’où")return "ou";if(f==="qui"||/^avec qui|son nom/.test(q))return "qui";
  if(/^(que|qu’)/.test(f))return "quoi";return "adj"};
const PHR_EXTRA={coul:"rouge bleu jaune vert noir blanc rose mauve gris orange",num:"deux trois quatre cinq six sept huit neuf dix onze douze zéro",quand:"lundi mardi mercredi jeudi vendredi samedi dimanche demain"};
const PHR_FAM={coul:["coul"],num:["num"],quand:["quand"],ou:["ou"],qui:["qui","quoi"],quoi:["quoi","qui"],adj:["adj","coul"]};
let _phr=null;
function PHRASES(){
  if(_phr)return _phr;
  _phr=PHRASES_V1.map(([id,et,ph,q,rep,niv])=>({id,et,ph,q,rep,niv,qt:PHR_Q(q),tk:phrTokens(ph),ans:phrTokens(rep)}))
    .filter(p=>!p.tk.some(t=>t.k==="x")&&!p.ans.some(t=>t.k==="x"));
  return _phr;
}
/* un groupe de mots est lisible si chaque mot de contenu l'est ; mots-outils et formes selon le niveau en phrases */
function phrTokOK(t,lvl){
  if(t.k==="b")return !HIDDEN.has(t.w.w)&&(t.w.rq?t.w.rq.every(knownKey):knownW(t.w));
  if(t.k==="el")return true;
  if(t.k==="o"){const g=MO_GRP[t.lo]||5;return g<=3||(g===4&&lvl>=1)||(g===5&&lvl>=2)}
  if(t.k==="f")return lvl>=1;
  return false;
}
/* niveau en phrases : 0 = débute ; 1 = au moins 3 réussites autonomes (mots-outils du groupe 4, formes à enseigner, 2 phrases par série) ; 2 = consolidé (groupe 5) */
const phrLvl=()=>{const c=compStatus("phr","");return stAtLeast(c.st,"consolide")?2:(stAtLeast(c.st,"en_pratique")&&c.score>=3)?1:0};
function phrOK(p,lvl){
  if(lvl==null)lvl=phrLvl();
  if(!p.tk.every(t=>phrTokOK(t,lvl))||!p.ans.every(t=>phrTokOK(t,lvl)))return false;
  if(p.tk.filter(t=>t.k==="f").length>1)return false;          /* au plus une forme à enseigner par phrase */
  return p.tk.some(t=>t.k==="b");
}
const phrList=()=>{const l=phrLvl();return PHRASES().filter(p=>phrOK(p,l))};
/* Les phrases s'ouvrent selon la compétence : 6 mots différents lus seul + lecture de mots « en pratique » */
const PHR_MIN_WORDS=PEDA.phrases.motsLusSeul;
function phrOpen(){
  const M=MST(),words=new Set();
  Object.keys(M).forEach(k=>{if(k.startsWith("lec|"))M[k].forEach(r=>{if(r.ok&&r.w>0&&r.it)words.add(r.it)})});
  if(words.size<PHR_MIN_WORDS)return false;
  const keys=[...new Set([...(progAuto()&&PROG?progSounds():sel)].map(nk))];
  if(!keys.some(k=>stAtLeast(compStatus("lec",k).st,"en_pratique")))return false;
  return phrList().length>=2;
}
const phrNorm=tk=>tk.map(t=>t.lo).join(" ").replace(/’ /g,"’");
const phrHead=tk=>{const b=tk.filter(t=>t.k==="b");return b.length?b[b.length-1].lo:phrNorm(tk)};
/* groupes nominaux d'une phrase : déterminant/préposition + mot de la banque (pour les distracteurs) */
const PHR_DET=new Set(["le","la","les","un","une","l’","des","du","de","au","aux","mon","ma","son","ton","sa","ta","mes","tes","ses"]);
function phrGroups(tk){
  const G=[],cp=a=>a.map(x=>Object.assign({},x,{cap:false,punct:""}));let cur=[];
  tk.forEach(t=>{if(PHR_DET.has(t.lo))cur.push(t);
    else if(t.k==="b"&&(cur.length||t.w.ty==="p")){cur.push(t);G.push(cp(cur));cur=[]}
    else cur=[]});
  return G;
}
function phrChoices(p,lvl){
  const okTk=tk=>tk.every(t=>phrTokOK(t,lvl)),stem=h=>h.replace(/e$/,"");   /* noir / noire : même réponse */
  const aN=phrNorm(p.ans),seen=new Set([aN]),heads=new Set([stem(phrHead(p.ans))]),out=[];
  const isP=tk=>tk.some(t=>t.k==="b"&&t.w.ty==="p");
  const add=tk=>{if(out.length>=2||!tk.length||!okTk(tk))return;
    if(p.qt==="quoi"&&isP(tk)&&!isP(p.ans))return;   /* « qu'est-ce que… » : pas un prénom comme distracteur */
    const n=phrNorm(tk),h=stem(phrHead(tk));if(seen.has(n)||heads.has(h))return;seen.add(n);heads.add(h);out.push(tk)};
  const others=shuffle(PHRASES().filter(q=>q.id!==p.id));
  const qw=new Set(p.q.replace(/'/g,"’").toLowerCase().split(/[\s’?!.,-]+/));   /* pas de groupe déjà nommé dans la question */
  if(p.qt==="qui"||p.qt==="quoi")shuffle(phrGroups(p.tk)).filter(g=>!qw.has(phrHead(g))).forEach(add);
  (PHR_FAM[p.qt]||[p.qt]).forEach(f=>{
    others.filter(q=>q.qt===f).forEach(q=>add(q.ans));
    if(PHR_EXTRA[f])shuffle(PHR_EXTRA[f].split(" ")).forEach(x=>add(phrTokens(x).filter(t=>t.k==="b")))});
  return out;   /* jamais de remplissage avec des mots non lisibles : s'il en manque, il y aura moins de choix */
}
function phrTokHTML(t,i,first){
  const cap=s=>s.replace(/^(<span class="mute">)?(.)/,(m,a,c)=>(a||"")+c.toUpperCase());
  let h=t.k==="b"?wordHTML(t.w):escH(t.lo);
  if(t.cap||(i===0&&first))h=cap(h);
  const cls=t.k==="b"?"pw":"pw sup";
  return `<span class="${cls}" data-i="${i}">${h}</span>${t.punct?`<span class="pp">${escH(t.punct)}</span>`:""}`;
}
function phrHTML(tk,first){
  let s="",grp="";
  tk.forEach((t,i)=>{const h=phrTokHTML(t,i,first!==false);if(t.glue){grp+=h}else{s+=`<span class="pwg">${grp}${h}</span> `;grp=""}});
  return s.trim();
}
function pickPhrase(){
  const L=phrList();if(!L.length)return null;
  R.phrLast=R.phrLast||[];
  let pool=L.filter(p=>!R.phrLast.includes(p.id));if(!pool.length)pool=L;
  if(phrLvl()===0){pool=pool.slice().sort((a,b)=>a.niv-b.niv||a.tk.length-b.tk.length);pool=pool.slice(0,Math.max(6,Math.ceil(pool.length/2)))}
  const p=rnd(pool);R.phrLast.push(p.id);if(R.phrLast.length>12)R.phrLast.shift();return p;
}
function wantPhrase(){
  if(R.mode!=="mots")return false;
  const r=R.round;if(!(r===2||(r===4&&phrLvl()>=1)))return false;
  try{return phrOpen()}catch(e){return false}
}
function renderPhrase(lvl,body){
  const p=pickPhrase();if(!p)return false;
  const L=phrLvl(),dis=phrChoices(p,L);if(!dis.length)return false;
  const opts=shuffle([p.ans,...dis]);let err=0,help=0;R.locked=false;
  body.innerHTML="";readTop(body);
  const lsc=el("div","lscene");body.appendChild(lsc);
  const scene=el("div","scene"),m=makeMiam("lire");
  const bub=el("div","lbub","Lis la phrase, puis réponds à ma question !");
  scene.append(m,bub);lsc.appendChild(scene);
  const fr=el("div","lframe phrframe");const ph=el("div","phr",phrHTML(p.tk));fr.appendChild(ph);lsc.appendChild(fr);
  /* mots soutenus (mots-outils, formes à enseigner) : on touche, on entend — sans compter d'aide */
  ph.querySelectorAll(".pw").forEach(sp=>{const t=p.tk[+sp.dataset.i];
    sp.onclick=()=>{SEQ++;if(t.k==="b"){help=Math.max(help,1);speak(t.w.w,false,true)}else speak(t.lo==="l’"?"l":t.lo,false,true);sp.classList.add("lit");setTimeout(()=>sp.classList.remove("lit"),800)}});
  const q=el("button","card phrq","🔊 "+escH(p.q));q.onclick=()=>{SEQ++;speak(p.q)};lsc.appendChild(q);
  const helps=el("div","lhelps");const h2=el("button","lpill",hasVoice?"🔊 Écoute la phrase":"Phrase pour l'adulte : "+escH(p.ph));h2.dataset.hint="1";
  h2.onclick=()=>{help=2;SEQ++;speak(p.ph,false,true)};helps.appendChild(h2);lsc.appendChild(helps);
  const ch=el("div","choices phrch"),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  const allPic=opts.every(o=>o.some(t=>t.k==="b"&&t.w.e));   /* images seulement si toutes les réponses en ont : pas d'indice visuel */
  opts.forEach(o=>{
    const b0=allPic?o.find(t=>t.k==="b"&&t.w.e):null;
    const b=el("button","card phrbtn",`${b0?`<span class="pe">${b0.w.e}</span>`:""}<span class="phr">${phrHTML(o.map(t=>Object.assign({},t,{cap:t.k==="b"&&t.w.ty==="p",punct:""})),false)}</span>`);   /* pas de majuscule dans les réponses, sauf les prénoms */
    b.onclick=async()=>{
      if(R.locked||b.disabled)return;
      if(o===p.ans){
        R.locked=true;SFX.yes();mood(m,"happy");b.classList.add("good");addStar();const[x,y]=centerOf(m);sparks(x,y);
        const pr=err===0&&help===0?"Bravo, tu as lu la phrase et tu as compris !":rnd(PRAISE);msg.textContent=pr;
        speak(p.ph);speak(pr,true);
        logA({g:"lire",lv:lvl,it:p.id,nc:opts.length,ok:1,f:(err===0&&help===0)?1:0,n:err+1,h:help,src:"phrase"});
        R.round++;await settle(1400);nextRead();
      }else{
        SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;err++;
        msg.textContent="Hmm… relis la phrase doucement.";speak("Hmm… relis la phrase doucement.");
        setTimeout(()=>mood(m,"idle"),900);
      }
    };
    ch.appendChild(b)});
  lsc.append(ch,msg);
  setTimeout(()=>{SEQ++;seq(["Lis la phrase.",p.q])},300);
  return true;
}
function renderReadMenu(){
  const body=$("rBody");body.innerHTML="";document.body.classList.add("wc-home");
  const outer=el("div","wcwrap"),wrap=el("div","wchome");
  const img=document.createElement("img");img.className="wchome-img";img.src=LIRE_MENU_IMG;img.alt="La bibliothèque";img.draggable=false;wrap.appendChild(img);
  wrap.appendChild(el("div","wc-score lib-score",`<span>${stars}</span>`));
  const add=(b,label,fn,cls)=>{const h=el("button","wchot"+(cls?" "+cls:""),"");h.type="button";h.setAttribute("aria-label",label);h.style.cssText=`left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%`;h.onclick=e=>{e.preventDefault();SFX.tap();fn(h)};wrap.appendChild(h);return h};
  const fact=k=>()=>showFact(wrap,k,BOOK_FACTS);
  {const c=el("button","menucarte",`<img src="${UI_PILL_MAP}" alt=""><span>Carte</span>`);c.onclick=()=>{SFX.tap();go("home")};wrap.appendChild(c)}
  add([58.4,4,26.1,5.9],"Mon album",()=>openAlbum());
  add([86.4,4.3,8.6,5.6],"Espace adulte",()=>adultGate(openSettings));
  const pick=k=>h=>{mzAnim(h,"mz-pop");setTimeout(()=>{document.body.classList.remove("wc-home");R.mode=k;R.round=0;nextRead()},150)};
  add([3.9,63.5,31,25.8],"Lire des mots",pick("mots"),"tile");
  add([36.1,63.5,27.9,25.8],"Le chemin des sons",pick("chemin"),"tile");
  add([65.2,63.5,31,25.8],"Quelle syllabe ?",pick("syl"),"tile");
  add([33.7,24.7,38,14],"La fenêtre",fact("mountain"),"fact");
  add([0,37.8,18.5,16.3],"Le globe",fact("globe"),"fact");
  add([85.4,30.3,7.5,6.4],"Le hibou",fact("owl"),"fact");
  add([84.5,50.8,15.5,9.6],"Le renard",fact("fox"),"fact");
  add([4.2,29.2,9,4.6],"L'oiseau",fact("bird"),"fact");
  add([0,15.4,7.8,6.4],"L'écureuil",fact("squirrel"),"fact");
  add([67.4,53.6,13.8,5.4],"Les jumelles",fact("binoc"),"fact");
  add([85,18.9,15,11.2],"Le ciel étoilé",fact("stars"),"fact");
  add([68.4,38,7.6,8.6],"La lanterne",fact("lantern"),"fact");
  add([33.5,39,21.5,15],"Miam",fact("miam"),"fact");
  add([31.3,55,36,6.8],"Le livre",fact("book"),"fact");
  add([21.8,47,6.6,5.4],"La boussole",fact("clock"),"fact");
  add([23.4,25.4,7.8,10.7],"Les feuilles",fact("leaf"),"fact");
  outer.appendChild(wrap);body.appendChild(outer);
  speak("Bienvenue à la bibliothèque ! Choisis une activité, ou touche les objets pour découvrir des secrets.");
}
function readTop(body){
  const top=el("div","lesson-top");const back=el("button","card back","← Activités");back.onclick=()=>{SFX.tap();SEQ++;try{if(curAudio)curAudio.pause()}catch(e){}startRead()};
  top.append(back,dots(R.round));body.appendChild(top);
}
/* Quelle syllabe ? — on entend « mmmm… aaaa » sans rien voir, on choisit « ma » */
/* Variante : 🏍️ « moto » → par quelle syllabe ça commence ? → mo (ma, mi, mu) */
function renderFirstSyl(lvl,body){
  const SV=["a","i","o","u","é","ou"];
  const okSyl=g=>g.length===2&&!VOWEL_G.has(g[0])&&SV.includes(g[1])&&!blocked(g[0],g[1])&&sel.has(g[0])&&sel.has(g[1]);
  let pool=availWords().filter(w=>w.e&&w.s.length>=2&&okSyl(w.s[0]));
  if(pool.length<3)pool=WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&w.s.length>=2&&okSyl(w.s[0]));
  if(!pool.length)return false;
  let w;do{w=rnd(pool)}while(pool.length>2&&w.w===R.last);R.last=w.w;R.locked=false;let err=0;
  const t=w.s[0],n=cfgN("lireN",lvl===1?3:4);
  const vow=shuffle(SV.filter(v=>v!==t[1]&&sel.has(v)&&!blocked(t[0],v)));
  let others=vow.map(v=>[t[0],v]);
  if(others.length<n-1)others=others.concat(shuffle(sylPool().filter(g=>g.length===2&&g[1]===t[1]&&g[0]!==t[0])));
  const opts=shuffle([t,...others.slice(0,n-1)]);
  const lsc=el("div","lscene");body.appendChild(lsc);
  const scene=el("div","scene"),m=makeMiam("lire");scene.append(m,el("div","lbub","Par quelle syllabe commence ce mot ?"));lsc.appendChild(scene);
  const pic=el("button","card actword",`<span>${w.e}</span><small>🔊</small>`);pic.dataset.hint="1";pic.onclick=()=>{SFX.tap();speak(w.w,false,true)};lsc.appendChild(pic);
  const ch=el("div","choices"+(opts.length===2||opts.length===4?" two":"")),msg=el("p","msg");
  opts.forEach(g=>{const txt=g.join(""),b=el("button","card wordbtn sylbtn",txt);
    b.onclick=async()=>{
      if(R.locked||b.disabled)return;
      if(txt===t.join("")){R.locked=true;SFX.yes();b.classList.add("good");mood(m,"happy");addStar();const[x,y]=centerOf(b);sparks(x,y);
        msg.textContent="Oui ! « "+w.w+" » commence par « "+txt+" »";await speakAsync(spoken(g));await speakAsync(w.w);
        logA({g:"lire",lv:lvl,it:txt,tg:w.w,gs:g,st:"CV",ns:1,nc:opts.length,ok:1,f:err?0:1,n:err+1,h:0,src:"syllabe-initiale"});
        R.round++;await settle(500);nextRead()}
      else{err++;SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… écoute bien le début du mot.";await speakAsync(spoken(g));await wait(250);speak(w.w,false,true)}
    };ch.appendChild(b)});
  lsc.append(ch,msg);
  setTimeout(()=>seq([{t:w.w,slow:true},"Par quelle syllabe ça commence ?"]),300);
  return true;
}
function renderSylHear(lvl,body){
  if(R.round%2===1&&renderFirstSyl(lvl,body))return;
  const pool=sylPool().filter(g=>g.length===2&&g[1]!=="y"&&g[0]!=="k"&&g[0]!=="qu"&&hasPh(PH_MAP[g[0]]||g[0])&&hasPh(PH_MAP[g[1]]||g[1])&&!(g[0]==="c"&&/^[eiéèy]/.test(g[1]))&&!(g[0]==="g"&&/^[eiéèy]/.test(g[1])));
  if(pool.length<3){body.appendChild(el("p","instr","Il faut cocher quelques sons de plus dans les réglages."));return}
  let t;do{t=rnd(pool)}while(pool.length>3&&t.join("")===R.last);R.last=t.join("");R.locked=false;let err=0;
  const n=cfgN("lireN",lvl===1?3:4),key=x=>PH_MAP[x]||x;
  const sameSound=g=>key(g[0])===key(t[0])&&key(g[1])===key(t[1]);
  const others=pool.filter(g=>g.join("")!==t.join("")&&!sameSound(g)).map(g=>({g,s:(g[0]===t[0]?3:0)+(g[1]===t[1]?3:0)+closeness(g,t)+Math.random()*1.5})).sort((a,b)=>b.s-a.s).map(o=>o.g);
  const opts=shuffle([t,...others.slice(0,n-1)]);
  const lsc=el("div","lscene");body.appendChild(lsc);
  const scene=el("div","scene"),m=makeMiam("lire");scene.append(m,el("div","lbub","Écoute les sons… Quelle syllabe as-tu entendue ?"));lsc.appendChild(scene);
  const dotsRow=el("div","phdots");t.forEach(()=>dotsRow.appendChild(el("span","phd","")));
  const play=()=>playPhSeq([{k:key(t[0])},{k:key(t[1])}],j=>{dotsRow.querySelectorAll(".phd").forEach((d,i)=>d.classList.toggle("on",i===j))});
  const spk=el("button","card btn bigplay","🔊 Écoute");spk.dataset.hint="1";spk.onclick=()=>{SFX.tap();play()};
  lsc.append(dotsRow,spk);
  const ch=el("div","choices"+(opts.length===2||opts.length===4?" two":"")),msg=el("p","msg");
  opts.forEach(g=>{const txt=g.join(""),b=el("button","card wordbtn sylbtn",txt);
    b.onclick=async()=>{
      if(R.locked||b.disabled)return;
      if(txt===t.join("")){R.locked=true;SFX.yes();b.classList.add("good");mood(m,"happy");addStar();const[x,y]=centerOf(b);sparks(x,y);
        msg.textContent="Oui ! « "+txt+" »";await speakAsync(spoken(g));
        logA({g:"lire",lv:lvl,it:txt,gs:g,st:"CV",ns:1,nc:opts.length,ok:1,f:err?0:1,n:err+1,h:0,src:"syllabe-entendue"});
        R.round++;await settle(500);nextRead()}
      else{err++;SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… écoute encore.";await speakAsync(spoken(g));await wait(300);play()}
    };ch.appendChild(b)});
  lsc.append(ch,msg);
  setTimeout(()=>speakAsync("Écoute bien.").then(play),300);
}
function nextRead(){
  if(!R.mode)return renderReadMenu();
  document.body.classList.remove("wc-home");
  const body=$("rBody"),av=availWords().filter(w=>w.e);
  if(R.round>=ROUNDS) return party(body,()=>{R.round=0;nextRead()});
  if(R.mode==="chemin"){const tw=trackWords().filter(x=>x.w!==R.last);body.innerHTML="";readTop(body);return renderTrack(rnd(tw.length?tw:trackWords()),lv("lire").lvl,body)}
  if(R.mode==="syl"){body.innerHTML="";readTop(body);return renderSylHear(lv("lire").lvl,body)}
  if(!av.length) return notEnough(body,"Aucun mot ne peut encore être lu avec ces sons. Ajoutez-en quelques-uns dans les réglages.");
  if(R.round>=ROUNDS) return party(body,startRead);
  if(wantPhrase()&&renderPhrase(lv("lire").lvl,body))return;   /* phrases V1.1 : 1 phrase par série, 2 quand la compréhension est en pratique */
  const lvl=lv("lire").lvl,nOpt=cfgN("lireN",lvl===1?2:3);
  R.count=(R.count||0)+1;R.again=R.again||[];
  /* un mot réussi avec aide revient quelques mots plus tard */
  const di=R.again.findIndex(x=>x.due<=R.count&&x.w.w!==R.last&&av.includes(x.w));
  let w=di>=0?R.again.splice(di,1)[0].w:pickWord(av,lvl,R.last);
  R.word=w;R.last=w.w;R.locked=false;R.err=0;R.help=0;
  const pool=shuffle(av.filter(x=>x.w!==w.w)).concat(shuffle(WORDS.filter(x=>x.w!==w.w&&!av.includes(x))));
  const cand=pool.filter(x=>x.e&&x.e!==w.e);
  const opts=shuffle([w,...similar(w,cand.slice(0,60),nOpt-1)]);

  body.innerHTML="";readTop(body);
  const lsc=el("div","lscene");body.appendChild(lsc);
  const scene=el("div","scene"),m=makeMiam("lire");
  const bub=el("div","lbub","Lis le mot, puis trouve l'image !");
  scene.append(m,bub);lsc.appendChild(scene);
  const wd=el("div","word");const sylBtns=[];
  w.s.forEach((g,si)=>{
    const b=el("button","syl",g.map((x,j)=>`<span class="gr${isMuteG(w,gIdx(w,si)+j)?" mute":""}">${x}</span>`).join(""));b.disabled=true;b.style.cursor="default";
    b.onclick=()=>{if(b.disabled)return;SFX.tap();speak(spoken(g),false,true);wd.querySelectorAll(".syl").forEach(x=>x.classList.remove("lit"));b.classList.add("lit");setTimeout(()=>b.classList.remove("lit"),900)};
    sylBtns.push(b);wd.appendChild(b);
  });
  const fr=el("div","lframe");fr.appendChild(wd);lsc.appendChild(fr);
  const helps=el("div","lhelps");
  const h1=el("button","lpill","🐢 Aide-moi à fusionner");h1.dataset.hint="1";
  const h2=el("button","lpill",hasVoice?"🔊 Écoute le mot":"Mot pour l'adulte : "+w.w);h2.hidden=true;
  h1.onclick=async()=>{
    R.help=Math.max(R.help,1);h1.disabled=true;
    const P=phSeq(w);
    if(P){ /* les vrais sons, lettre par lettre, puis on les rapproche */
      const id=++SEQ;try{speechSynthesis.cancel()}catch(e){}
      const grs=[...wd.querySelectorAll(".gr")];let gi=0;
      for(let i=0;i<sylBtns.length;i++){
        sylBtns.forEach(x=>x.classList.remove("lit","blend"));sylBtns[i].classList.add("lit","apart");
        for(const g of w.s[i]){
          const el_=grs[gi],p=P.find(q=>q.i===gi);gi++;
          if(!p)continue;
          grs.forEach(x=>x.classList.remove("on"));el_.classList.add("on");
          await playSnd(p.k);if(id!==SEQ)return;
        }
        grs.forEach(x=>x.classList.remove("on"));sylBtns[i].classList.remove("apart");sylBtns[i].classList.add("blend");
        await speakAsync(spoken(w.s[i]),true);if(id!==SEQ)return;
      }
      sylBtns.forEach(x=>x.classList.remove("lit","blend"));
    }else
    for(let i=0;i<sylBtns.length;i++){sylBtns.forEach(x=>x.classList.remove("lit"));sylBtns[i].classList.add("lit");speak(spoken(w.s[i]),i>0,true);await wait(1100)}
    sylBtns.forEach(x=>{x.classList.remove("lit");x.disabled=false;x.style.cursor="pointer"});
    h1.disabled=false;h1.textContent="🐢 Encore les syllabes";h2.hidden=false;
  };
  h2.onclick=()=>{R.help=2;speak(w.w,false,true)};
  helps.append(h1,h2);lsc.appendChild(helps);
  const pics=el("div","choices"+(nOpt===2||nOpt===4?" two":"")+(nOpt>=6?" eight":"")),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  opts.forEach((o,i)=>{
    const b=el("button","plate",o.e);b.setAttribute("aria-label","Image "+(i+1));
    b.onclick=async()=>{
      if(R.locked||b.disabled)return;
      if(o.w===w.w){
        R.locked=true;SFX.yes();mood(m,"open");b.classList.add("good");
        await wait(200);const p=flyInto(b,m);b.textContent="";await p;
        mood(m,"chew");SFX.chomp();await wait(900);
        mood(m,"happy");addStar();const[x,y]=centerOf(m);sparks(x,y);
        const how=R.help===0&&R.err===0?"seul":R.help===2?"ecoute":R.help===1?"fusion":"essais";
        const pr=how==="seul"?"Bravo, tu as lu tout seul !":rnd(PRAISE);msg.textContent=pr+" C'était « "+w.w+" »";
        speak(w.w);speak(pr,true);
        const eff=Math.min(2,R.err+R.help);
        progress("lire",eff,{gs:readG(w),word:w.w,help:R.help});
        logA({g:"lire",lv:lvl,it:w.w,gs:readG(w),st:struct(w),ns:w.s.length,nc:opts.length,ok:1,f:(R.err===0&&R.help===0)?1:0,n:R.err+1,h:R.help,src:"decode"});
        const LH=load("lireHelp",{seul:0,fusion:0,ecoute:0,essais:0});LH[how]=(LH[how]||0)+1;save("lireHelp",LH);
        if(eff>0)R.again.push({w,due:R.count+3});
        R.round++;await settle(900);nextRead();
      }else{
        SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;
        R.err++;msg.textContent=R.help?"Hmm… relis doucement, syllabe par syllabe.":"Hmm… essaie l'aide 🐢 si tu veux.";
        speak(R.help?"Hmm… relis doucement.":"Hmm… tu peux demander de l'aide à la tortue.");
        setTimeout(()=>mood(m,"idle"),900);
      }
    };
    pics.appendChild(b);
  });
  lsc.appendChild(pics);lsc.appendChild(msg);
}

/* ---------- Écrire ---------- */
const W={round:0,word:null,letters:[],typed:[],ok:[],locked:false,last:null,m:null};
function keyLetters(){
  const set=new Set();sel.forEach(g=>Array.from(g).forEach(ch=>set.add(ch)));
  const vowels="aeiouyéèêœ",ord=Array.from("aeiouyéèêœlmrsptnfvdbcgjzhkqçwx");
  return ord.filter(ch=>set.has(ch)).map(ch=>({ch,v:vowels.includes(ch)}));
}
const isV=ch=>"aeiouyéèêœ".includes(ch);
function startWrite(){W.round=0;nextWrite()}
function nextWrite(){
  const lvl=lv("ecrire").lvl,body=$("wBody");
  if(W.round>=ROUNDS) return party(body,startWrite);
  let w=null;
  if(stageSons()){const g=pickLetter(letterPool(),W.last);w={w:g,s:[[g]],e:null,syl:true,letter:true,key:lkey(g)}}
  const lvlC=progAuto()&&PROG?(curStep().p==="syl"||Math.random()<.4?1:2):lvl;
  if(!w&&lvlC===1){
    let pool=sylPool().filter(g=>["a","i","o","u","é"].includes(g[1]));
    if(pool.length<3)pool=sylPool();
    {const lg=pool.filter(g=>LONG_C.includes(g[0]));if(lg.length>=3)pool=lg}
    const ws=weekSylls().filter(g=>Array.from(g.join("")).length<=4);
    if(ws.length&&Math.random()<.7)pool=ws;
    if(pool.length){let g;do{g=rnd(pool)}while(pool.length>1&&g.join("")===W.last);w={w:g.join(""),s:[g],e:null,syl:true}}
  }
  if(!w&&lvl===2&&useVC(lvl)&&Math.random()<.25){const vp=vcPool();if(vp.length){let g;do{g=rnd(vp)}while(vp.length>1&&g.join("")===W.last);w={w:g.join(""),s:[g],e:null,syl:true}}}
  if(!w){
    const wOK=x=>(inWeeks(x)&&CFG.weeksSounds!=="coches")||writeOK(x);
    let av=availWords().filter(wOK).filter(x=>Array.from(x.w).length<=(lvl===2?5:8));
    if(!av.length)av=availWords().filter(wOK).filter(x=>Array.from(x.w).length<=8);
    if(!av.length) return notEnough(body,"Aucun mot ne peut encore être écrit avec ces sons. Ajoutez-en dans les réglages.");
    w=pickWord(av,lvl===2?1:3,W.last);
  }
  W.word=w;W.last=w.w;W.locked=false;W.err=0;W.bad=new Set();W.hint=new Set();
  W.say=w.syl?spoken(w.s[0]):w.w;
  W.letters=Array.from(w.w);W.typed=W.letters.map(()=>null);W.ok=W.letters.map(()=>false);
  body.innerHTML="";body.appendChild(head("ecrire",W.round));
  const scene=el("div","scene"),m=makeMiam("ecrire");W.m=m;m.style.width="min(110px,30vw)";m.style.setProperty("--full",1+W.round*.04);
  const bub=el("button","bubble",`<span class="wordpic">${w.e||"🔊"}</span>`+(w.letter?"Écris la lettre de ce son !":w.syl?"Écris la syllabe !":"🔊 Écris-moi ce mot !")+(hasVoice||w.letter?"":`<small>Adulte, dites « ${w.w} »</small>`));
  bub.setAttribute("aria-label","Réécouter");bub.onclick=()=>sayW();
  scene.append(m,bub);body.appendChild(scene);
  const slots=el("div","slots");slots.id="wSlots";body.appendChild(slots);
  const keys=el("div","keys");
  // Clavier réduit : toutes les voyelles + consonnes utiles + 2 (niv. 1) ou 3 (niv. 2) consonnes pièges ; niveau 3 = clavier complet
  let kl=keyLetters();
  if(w.letter){const others=distinctLetters(w.w,letterPool(),3);kl=shuffle([w.w,...others]).map(ch=>({ch,v:"aeiouyéèêëàâîïôûù".includes(ch)}))}
  const kbReduced=!w.letter&&CFG.ecrireKb==="reduit"||(CFG.ecrireKb==="auto"&&lvl<3);
  if(kbReduced){
    const need=new Set(W.letters),rest=shuffle(kl.filter(k=>!need.has(k.ch)));
    const extraV=rest.filter(k=>k.v),extraC=rest.filter(k=>!k.v);
    const extra=[...extraV,...extraC.slice(0,lvl===1?2:3)];   // toutes les voyelles + quelques consonnes
    const keep=new Set([...need,...extra.map(k=>k.ch)]);
    kl=kl.filter(k=>keep.has(k.ch));
  }
  {const have=new Set(kl.map(k=>k.ch));[...new Set(W.letters)].forEach(ch=>{if(!have.has(ch))kl.push({ch,v:"aeiouyéèêëàâîïôûù".includes(ch)})})}
  kl.forEach(k=>{const b=el("button","card key "+(k.v?"v":"c"),k.ch);b.onclick=()=>typeLetter(k.ch);keys.appendChild(b)});
  const back=el("button","card key tool","⌫");back.setAttribute("aria-label","Effacer");back.onclick=eraseLetter;
  const hint=el("button","card key tool","💡 Indice");hint.dataset.hint="1";hint.onclick=giveHint;
  keys.append(back,hint);body.appendChild(keys);
  const msg=el("p","msg");msg.id="wMsg";msg.setAttribute("aria-live","polite");body.appendChild(msg);
  renderSlots();
  setTimeout(()=>{if(w.letter)seq(["Écris le son :",{snd:w.key}]);else speak((w.syl?"Écris la syllabe : ":"Écris : ")+W.say)},250);
}
function renderSlots(wrong){
  const box=$("wSlots");if(!box)return;box.innerHTML="";
  const next=W.typed.indexOf(null);let i=0;
  W.word.s.forEach(g=>{
    const grp=el("div","sgroup");
    Array.from(g.join("")).forEach(()=>{
      const t=W.typed[i];
      let cls="slot";
      if(t!=null) cls+=" filled "+(isV(t)?"v":"c");
      if(W.ok[i]) cls+=" right";
      if(wrong&&wrong.includes(i)) cls+=" wrong";
      if(i===next&&!W.locked) cls+=" next";
      grp.appendChild(el("div",cls,t||""));i++;
    });
    box.appendChild(grp);
  });
}
function sayW(){if(W.word&&W.word.letter){SEQ++;return playSnd(W.word.key)}return speak(W.say)}
function typeLetter(ch){
  if(W.locked)return;const i=W.typed.indexOf(null);if(i<0)return;
  SFX.tap();W.typed[i]=ch;renderSlots();
  if(W.typed.indexOf(null)<0)checkWord();
}
function eraseLetter(){
  if(W.locked)return;
  for(let i=W.typed.length-1;i>=0;i--){if(W.typed[i]!=null&&!W.ok[i]){W.typed[i]=null;SFX.tap();renderSlots();return}}
}
function giveHint(){
  if(W.locked)return;const i=W.typed.indexOf(null);if(i<0)return;
  W.typed[i]=W.letters[i];W.ok[i]=true;W.err++;W.hint.add(i);SFX.pop();renderSlots();
  if(W.typed.indexOf(null)<0)checkWord();
}
async function checkWord(){
  W.locked=true;const m=W.m,msg=$("wMsg");
  const wrong=[];W.typed.forEach((t,i)=>{if(t===W.letters[i])W.ok[i]=true;else wrong.push(i)});
  if(!wrong.length){
    renderSlots();SFX.yes();mood(m,"open");await wait(250);
    const pic=document.querySelector("#wBody .wordpic");
    if(pic){const p=flyInto(pic,m);pic.style.visibility="hidden";await p}
    mood(m,"chew");SFX.chomp();await wait(900);
    mood(m,"happy");addStar();const[x,y]=centerOf(m);sparks(x,y,24);
    const pr=rnd(PRAISE);msg.textContent=pr+" Tu as écrit « "+W.word.w+" »";
    sayW();speak(pr,true);progress("ecrire",Math.min(W.err,2),{gs:W.word.s.flat(),word:W.word.syl?null:W.word.w,keepE:!!W.word.syl});
    {let ix=0;const dg=W.word.s.flat().map(g=>{const n=Array.from(g).length;let ok=1;for(let k=ix;k<ix+n;k++)if(W.bad.has(k)||W.hint.has(k))ok=0;ix+=n;return[g,ok]});
     logA({g:"ecrire",lv:lv("ecrire").lvl,md:W.word.letter?"lettre":W.word.syl?"syllabe":"mot",it:W.word.w,gs:W.word.s.flat(),st:W.word.syl?"CV":struct(W.word),ns:W.word.s.length,ok:1,f:(W.bad.size||W.hint.size)?0:1,n:W.bad.size?2:1,h:W.hint.size?1:0,dg:W.word.syl?dg:undefined,src:W.word.syl?"direct":"encodage"})}
    W.round++;await settle(900);nextWrite();
  }else{
    W.err+=2;wrong.forEach(i=>W.bad.add(i));renderSlots(wrong);SFX.no();mood(m,"yuck");
    msg.textContent="Presque ! Les lettres vertes sont bonnes. Écoute encore…";
    speak("Presque ! Écoute bien : "+W.say);
    await wait(1100);
    wrong.forEach(i=>W.typed[i]=null);W.locked=false;mood(m,"idle");renderSlots();
  }
}

/* ---------- Fusée ---------- */
const OUTILS=["gros","petit","c'est","un","une","rouge","bleu","vert","jaune","orange","rose","noir","blanc","brun","mauve"];
CUSTOM.forEach(addCustomToBank);
let WEEK_OUT=[];
function rebuildWeeks(){
  for(let i=WORDS.length-1;i>=0;i--){if(WORDS[i].weekOnly)WORDS.splice(i,1);else delete WORDS[i].weeks}
  WEEK_OUT=[];
  WEEKS.forEach(wk=>wk.words.forEach(x=>{
    let w=WORDS.find(y=>y.w===x.w);
    if(!w){w={w:x.w,e:x.e||null,s:(x.syl&&x.syl.length?x.syl:[x.w]).map(parseG),custom:true,weekOnly:true};WORDS.push(w)}
    else if(!w.e&&x.e)w.e=x.e;
    (w.weeks=w.weeks||[]).push(wk.id);
  }));
}
rebuildWeeks();
/* Mots outils utilisés par la Fusée */
function outilsList(){
  return [];   /* mots outils retirés de l'application */
}
const F={round:0,target:null,locked:false,last:null};
const ROCKET_SVG=`<svg viewBox="0 0 80 140" aria-hidden="true">
 <path class="flame" d="M28 112 Q40 150 52 112 Z" fill="#FFB020"/>
 <path class="flame" d="M33 112 Q40 135 47 112 Z" fill="#FFF07A"/>
 <path d="M18 80 L4 108 L22 104 Z" fill="#E63946"/><path d="M62 80 L76 108 L58 104 Z" fill="#E63946"/>
 <path d="M40 4 C 62 22 64 60 60 112 L20 112 C 16 60 18 22 40 4 Z" fill="#F4F7FB" stroke="#B9C6DA" stroke-width="2"/>
 <path d="M40 4 C 52 14 57 26 59 36 L21 36 C 23 26 28 14 40 4 Z" fill="#E63946"/>
 <circle cx="40" cy="62" r="15" fill="#5A8BD6" stroke="#B9C6DA" stroke-width="3"/>
 <circle cx="40" cy="65" r="11" fill="var(--miam)"/>
 <circle cx="36" cy="62" r="3" fill="#fff"/><circle cx="44" cy="62" r="3" fill="#fff"/>
 <circle cx="36.5" cy="62.5" r="1.5" fill="#2B1B3A"/><circle cx="44.5" cy="62.5" r="1.5" fill="#2B1B3A"/>
 <path d="M36 69 Q40 72 44 69" stroke="#5A1A2C" stroke-width="1.6" fill="none" stroke-linecap="round"/>
 <rect x="30" y="104" width="20" height="8" rx="2" fill="#6B7A99"/>
</svg>`;
/* Le système solaire, dans l'ordre à partir du Soleil (pour la carte) */
const SOLAR={
 soleil:{n:"le Soleil (de loin !)",short:"Le Soleil",e:"☀️",c:["#2e1300","#c06a1f"],pc:"#FFC233",pd:"#F08A24",ps:60,sv:"🕶️",svn:"des lunettes de soleil",fact:"Le Soleil est une étoile. Il nous donne la lumière et la chaleur."},
 mercure:{n:"Mercure",short:"Mercure",e:"",c:["#1a1a1a","#5a5550"],pc:"#A9A39B",pd:"#7A746C",ps:30,rank:1,sv:"🔥",svn:"un caillou brûlant",fact:"Mercure est la planète la plus proche du Soleil."},
 venus:{n:"Vénus",short:"Vénus",e:"",c:["#2a1a05","#9a6a28"],pc:"#E8C98A",pd:"#C9A060",ps:38,rank:2,sv:"🌋",svn:"un caillou de volcan",fact:"Vénus est la planète la plus chaude de toutes."},
 terre:{n:"la Terre",short:"La Terre",e:"🌍",pc:"#4CAF7A",pd:"#2E7DD1",ps:40,rank:3},
 lune:{n:"la Lune",short:"La Lune",e:"🌙",c:["#141D4D","#3A55A8"],pc:"#E6E6EE",pd:"#B9B9C8",ps:24,sv:"🪨",svn:"une pierre de lune",fact:"La Lune tourne autour de la Terre."},
 mars:{n:"Mars",short:"Mars",e:"",c:["#2b0a10","#8a2f22"],pc:"#E0673E",pd:"#A8432A",ps:34,rank:4,sv:"🤖",svn:"un petit robot martien",fact:"On appelle Mars la planète rouge."},
 jupiter:{n:"Jupiter",short:"Jupiter",e:"",c:["#24160b","#7a4f26"],pc:"#E7AE73",pd:"#B97A45",ps:56,rank:5,sv:"🌪️",svn:"un tourbillon géant",fact:"Jupiter est la plus grosse planète."},
 saturne:{n:"Saturne",short:"Saturne",e:"",ring:1,c:["#1b1440","#5f4796"],pc:"#EBCB80",pd:"#C49A4C",ps:50,rank:6,sv:"💍",svn:"un morceau d'anneau",fact:"Saturne a de très beaux anneaux."},
 uranus:{n:"Uranus",short:"Uranus",e:"",c:["#06202a","#2a7f8f"],pc:"#9FE3E8",pd:"#6CC2CC",ps:44,rank:7,sv:"🧊",svn:"un glaçon de l'espace",fact:"Uranus est une planète très, très froide."},
 neptune:{n:"Neptune",short:"Neptune",e:"",c:["#061533","#1d5aa8"],pc:"#4A86E3",pd:"#2D5DB0",ps:44,rank:8,sv:"💎",svn:"un cristal bleu",fact:"Neptune est la planète la plus loin du Soleil."}
};
const MAP_SOLAR=["soleil","mercure","venus","terre","lune","mars","jupiter","saturne","uranus","neptune"];
/* Ordre des voyages : la Lune, puis vers l'extérieur jusqu'à Neptune, puis retour vers le Soleil */
const VOYAGES=[["lune",5],["mars",5],["jupiter",6],["saturne",6],["uranus",7],["neptune",7],["venus",7],["mercure",8],["soleil",8]];
const DEST=VOYAGES.map(([k,steps])=>Object.assign({key:k,steps},SOLAR[k]));
let SOUV=load("souv",[]);
let mission=load("mission",0);
const dest=()=>DEST[mission%DEST.length];
const tour=()=>Math.floor(mission/DEST.length)+1;
function startRocket(){F.round=0;F.first=true;renderSpaceMap()}
function planetHTML(d,size){return `<span class="planet${d.ring?" ring":""}" style="--pc:${d.pc};--pd:${d.pd};--ps:${size}px"><i>${d.e||""}</i></span>`}
/* Zones touchables de la carte peinte (en % de l'image) : [gauche, haut, largeur, hauteur], centre [x, y] */
const SOLAR_HOT={
  soleil:{b:[0,15,13.5,70],c:[6,50]},
  mercure:{b:[13.3,37.6,7.5,18],c:[17.1,51.5]},
  venus:{b:[20.8,36.1,7.8,20.5],c:[24.3,51]},
  terre:{b:[28.6,34.7,8.1,21.5],c:[32.7,51]},
  lune:{b:[32.6,56.4,8.1,14],c:[38.2,60.5]},
  mars:{b:[38.7,35.6,7.5,21],c:[42.2,51.3]},
  jupiter:{b:[51.1,24.4,13,34.2],c:[57.6,48.3]},
  saturne:{b:[60.5,27.3,20.8,32.8],c:[71.9,50.3]},
  uranus:{b:[81.7,33.2,8.1,29.3],c:[85.7,52.9]},
  neptune:{b:[91.1,35.2,8.6,24.9],c:[95.3,54]}
};
const SOLAR_EXTRA=[
  {b:[46.3,17,6.5,57],lab:"La ceinture d'astéroïdes",fact:"Entre Mars et Jupiter, des milliers de cailloux tournent autour du Soleil."},
  {b:[60.5,4.5,16,14],lab:"Une comète",fact:"Une comète est une boule de glace et de poussière. Près du Soleil, elle a une longue queue brillante."},
  {b:[72,72,23,22],lab:"Une galaxie",fact:"Une galaxie est un immense groupe d'étoiles. Notre Soleil fait partie de la Voie lactée."}
];
function renderSpaceMap(){
  const body=$("fBody");body.innerHTML="";
  const idx=mission%DEST.length,d=dest(),visited=new Set(DEST.slice(0,idx).map(x=>x.key));
  body.appendChild(el("p","instr","🗺️ Le système solaire"+(tour()>1?" · tour n°"+tour():"")+`<small class="smsub2">Touche <b>${d.short}</b> 🚀 pour décoller ! Touche les autres planètes pour les découvrir.</small>`));
  let launching=false;
  const launch=()=>{if(launching)return;launching=true;SFX.whoosh();renderRocketScene();nextRocket()};
  const scroller=el("div","solscroll"),map=el("div","solmap");
  const img=document.createElement("img");img.src=SOLAR_IMG;img.alt="Le système solaire";img.draggable=false;map.appendChild(img);
  const info=el("div","solinfo");
  const show=(k)=>{
    const x=SOLAR[k],done=visited.has(k),cur=k===d.key;
    map.querySelectorAll(".solhot").forEach(h=>h.classList.toggle("sel",h.dataset.k===k));
    const rank=x.rank?(x.rank===1?"1re":x.rank+"e")+" planète depuis le Soleil":k==="lune"?"tourne autour de la Terre":"une étoile";
    const status=k==="terre"?"🏠 Notre planète : c'est le point de départ !":done?"🚩 Déjà visité · souvenir : "+x.sv+" "+x.svn:cur?"🚀 C'est le prochain voyage : "+d.steps+" mots à trouver !":"✨ À découvrir dans un prochain voyage.";
    info.innerHTML=`<b>${x.short}</b> <small>· ${rank}</small><p>${x.fact||"La Terre est notre maison : c'est la seule planète où l'on sait qu'il y a de la vie."}</p><p class="solst">${status}</p>`;
    speak(x.short+". "+(x.fact||"C'est notre maison !"));
  };
  MAP_SOLAR.forEach(k=>{
    const H=SOLAR_HOT[k];if(!H)return;
    const btn=el("button","solhot");btn.dataset.k=k;btn.setAttribute("aria-label",SOLAR[k].short);
    btn.style.cssText=`left:${H.b[0]}%;top:${H.b[1]}%;width:${H.b[2]}%;height:${H.b[3]}%`;
    if(k===d.key)btn.classList.add("cur");
    btn.onclick=()=>{
      SFX.tap();
      if(k===d.key){
        map.querySelectorAll(".solhot").forEach(h=>h.classList.toggle("sel",h===btn));
        info.innerHTML=`<b>🚀 C'est parti pour ${d.short} !</b><p>${SOLAR[k].fact||""}</p>`;
        speak("C'est parti pour "+d.n+" !");setTimeout(launch,1200);return;
      }
      show(k);
    };map.appendChild(btn);
    const mk=visited.has(k)?"🚩":k===d.key?"🚀":"";
    if(mk){const m=el("span","solmark"+(k===d.key?" cur":""),mk);m.style.left=H.c[0]+"%";m.style.top=H.c[1]+"%";map.appendChild(m)}
  });
  SOLAR_EXTRA.forEach(x=>{const btn=el("button","solhot extra");btn.setAttribute("aria-label",x.lab);btn.style.cssText=`left:${x.b[0]}%;top:${x.b[1]}%;width:${x.b[2]}%;height:${x.b[3]}%`;
    btn.onclick=()=>{SFX.tap();map.querySelectorAll(".solhot").forEach(h=>h.classList.remove("sel"));info.innerHTML=`<b>${x.lab}</b><p>${x.fact}</p>`;speak(x.lab+". "+x.fact)};map.appendChild(btn)});
  scroller.appendChild(map);body.appendChild(scroller);body.appendChild(info);
  info.innerHTML=`<b>Prochain voyage : ${d.short} 🚀</b><p>Touche ${d.short} sur la carte pour décoller. Il faut trouver ${d.steps} mots pour y arriver !</p>`;
  if(SOUV.length)body.appendChild(el("div","smsouv2","🎒 Mes souvenirs : "+SOUV.join(" ")));
  const go=el("button","card btn gobtn","🚀 Décoller vers "+d.short.replace(/^L[ae] /,(m)=>m.toLowerCase())+" !");
  go.onclick=launch;
  body.appendChild(go);
  // faire défiler jusqu'à la destination
  setTimeout(()=>{const H=SOLAR_HOT[d.key];if(H&&scroller.scrollWidth>scroller.clientWidth)scroller.scrollLeft=Math.max(0,scroller.scrollWidth*H.c[0]/100-scroller.clientWidth/2)},60);
  speak((mission===0?"Voici le système solaire. ":"")+"Prochain voyage : "+d.n+". Touche "+d.n+" pour décoller !");
}
function renderRocketScene(){
  const body=$("fBody");body.innerHTML="";const d=dest();
  body.appendChild(lvlBadge("fusee"));
  const sky=el("div","sky");sky.id="sky";
  for(let i=0;i<26+mission*6;i++){const st=el("span","st");st.style.left=Math.random()*100+"%";st.style.top=Math.random()*55+"%";sky.appendChild(st)}
  sky.style.background=`linear-gradient(to top,#CDEBFF 0%,#86BFF2 22%,${d.c[1]} 55%,${d.c[0]} 100%)`;
  const pl=el("div","skyplanet",PLANET_IMG[d.key]?`<img src="${PLANET_IMG[d.key]}" alt="${d.short}" class="skyimg${d.key==="saturne"?" wide":""}">`:planetHTML(d,110));pl.id="skyPlanet";sky.appendChild(pl);
  sky.appendChild(el("span","destlab","Voyage vers "+d.n));
  const marks=el("div","marks");marks.id="marks";for(let i=0;i<d.steps;i++)marks.appendChild(el("span"));sky.appendChild(marks);
  marks.style.gap=Math.max(8,Math.floor((236-d.steps*18)/(d.steps-1)))+"px";
  const eg=document.createElement("img");eg.src=EARTH_BIG;eg.id="earthG";eg.className="earthg";eg.alt="La Terre";sky.appendChild(eg);
  const r=el("div","rocket",`<img src="${SPACE.vrocket}" alt="La fusée">`);r.id="rocket";sky.appendChild(r);
  body.appendChild(sky);
  {const W=sky.clientWidth||340,ew=W*1.45;eg.style.width=ew+"px";eg.style.bottom=(-ew+64)+"px";}
  const bar=el("div","rocketbar");
  const spk=el("button","spkbtn","🔊");spk.dataset.hint="1";spk.setAttribute("aria-label","Réécouter");
  spk.onclick=()=>{if(F.mode==="pic")F.help=1;speak(F.target)};
  const lab=el("p","eq");lab.id="fLab";
  bar.append(spk,lab);body.appendChild(bar);
  const ch=el("div","choices");ch.id="fChoices";body.appendChild(ch);
  const msg=el("p","msg");msg.id="fMsg";msg.setAttribute("aria-live","polite");body.appendChild(msg);
}
function setRocket(level){
  const r=$("rocket"),sky=$("sky");if(!r)return;
  const step=(sky.clientHeight-46-r.offsetHeight-12)/dest().steps;
  r.style.bottom=(46+level*step)+"px";
  const eg=$("earthG");if(eg)eg.style.transform=`translateX(-50%) translateY(${level*9}px)`;
  document.querySelectorAll("#marks span").forEach((m,i)=>m.classList.toggle("done",i<level));
  const pl=$("skyPlanet");if(pl)pl.style.transform=`translateX(-50%) scale(${1+level/dest().steps*.7})`;
}
function nextRocket(){
  const lvl=lv("fusee").lvl,all=availWords(),nOpt=cfgN("fuseeN",[0,2,3,4][lvl]);
  const useOut=CFG.fuseeOutils!=="non",OUT=useOut?outilsList():[];
  if(!all.length){$("fChoices").innerHTML="";$("fLab").textContent="Aucun mot disponible : cochez une semaine ou des sons dans les réglages.";return}
  const withPic=all.filter(w=>w.e);
  const picMode=lvl>=2&&withPic.length>=2&&Math.random()<.4;
  let t,wObj=null;
  if(picMode){wObj=pickWord(withPic,lvl,F.last);t=wObj.w}
  else if(OUT.length&&(Math.random()<.45||!all.length)){do{t=rnd(OUT)}while(OUT.length>1&&t===F.last)}
  else if(all.length)t=pickWord(all,lvl,F.last).w;
  if(!t){$("fChoices").innerHTML="";$("fLab").textContent="Aucun mot disponible : cochez des sons ou une semaine dans les réglages.";return}
  F.mode=picMode?"pic":"ear";F.target=t;F.last=t;F.locked=false;F.err=0;F.help=0;
  const dec=all.filter(w=>wordLevel(w)<=Math.max(lvl,2)).map(w=>w.w);
  const scored=shuffle(OUT.concat(dec).filter(x=>x!==t)).map(x=>({x,s:(x[0]===t[0]?2:0)+(x.slice(-1)===t.slice(-1)?1:0)+(Math.abs(x.length-t.length)<=1?1:0)+(x.slice(0,2)===t.slice(0,2)?1:0)}));
  const seen=new Set([t]),others=[];
  /* pièges : uniquement de vrais mots (mots admissibles de la banque et mots-outils), les plus ressemblants d'abord — jamais de faux mot inventé */
  scored.sort((a,b)=>b.s-a.s).forEach(o=>{if(others.length<nOpt-1&&!seen.has(o.x)){seen.add(o.x);others.push(o.x)}});
  const opts=shuffle([t,...others]);
  $("fLab").innerHTML=(picMode?`<span class="fpic">${wObj.e}</span>Quel mot va avec l'image ?<small>🔊 si l'image n'est pas claire</small>`:"Trouve le mot que tu entends !")
    +(hasVoice||picMode?"":`<small>Adulte, dites « ${t} »</small>`);
  $("fMsg").textContent="";
  const ch=$("fChoices");ch.innerHTML="";ch.className="choices"+(opts.length===2?" two":opts.length===4?" two four":"");
  opts.forEach(o=>{
    const b=el("button","card wordbtn",wordHTML(o));
    b.onclick=async()=>{
      if(F.locked||b.disabled)return;
      const r=$("rocket");
      if(o===t){
        F.locked=true;SFX.yes();astroPose("wave");b.classList.add("good");addStar();{const wo=WORDS.find(x=>x.w===t);logA({g:"fusee",lv:lv("fusee").lvl,nc:opts.length,it:t,ou:wo?0:1,gs:wo?readG(wo):[],st:wo?struct(wo):"",ns:wo?wo.s.length:0,mode:F.mode,ok:1,f:(F.err||F.help)?0:1,n:F.err+1,h:F.help?2:0,src:wo?"decode":"outil"})}progress("fusee",F.err,(()=>{const wo=WORDS.find(x=>x.w===t);return{gs:wo?readG(wo):[],word:t}})());
        F.round++;r.classList.add("boost");SFX.whoosh();setRocket(F.round);
        const pr=rnd(PRAISE.filter(p=>!p.startsWith("Miam")));$("fMsg").textContent=pr+" C'était « "+t+" »";
        speak(t);speak(pr,true);
        await wait(950);r.classList.remove("boost");
        const[x,y]=centerOf(r);sparks(x,y,12,["⭐","✨"]);
        if(F.round>=dest().steps){
          const d=dest();await launch();mission++;save("mission",mission);
          await landing(d);
          party($("fBody"),startRocket,"Miam est arrivé sur "+d.n+" ! Prochain voyage : "+dest().n+".");return;
        }
        await settle(500);nextRocket();if(F.mode==="ear")setTimeout(()=>speak(F.target),200);
      }else{
        F.err++;SFX.no();astroPose("scope");b.classList.add("bad");b.disabled=true;
        r.classList.remove("wobble");void r.offsetWidth;r.classList.add("wobble");
        $("fMsg").textContent=picMode?"Oups ! Regarde bien les lettres…":"Oups ! Écoute encore…";
        speak(o);
      }
    };
    ch.appendChild(b);
  });
  if(F.first){
    F.first=false;setRocket(0);
    speak("En route vers "+dest().n+" !");
    speak(picMode?"Quel mot va avec l'image ?":"Trouve le mot : "+t,true);
  }
}
function astroPose(k){const a=$("fAstro");if(!a)return;a.src=SPACE[k];a.classList.remove("hop");void a.offsetWidth;a.classList.add("hop");clearTimeout(a._t);a._t=setTimeout(()=>{a.src=SPACE.float},1400)}
async function landing(d){
  const body=$("fBody");body.innerHTML="";
  const sc=el("div","landing");sc.style.background=`linear-gradient(${d.c[0]},${d.c[1]})`;
  for(let i=0;i<30;i++){const st=el("span","st");st.style.left=Math.random()*100+"%";st.style.top=Math.random()*60+"%";sc.appendChild(st)}
  const pimg=document.createElement("img");pimg.src=PLANET_IMG[d.key]||PLANET_IMG.lune;pimg.className="lplanet"+(d.key==="saturne"?" wide":"");pimg.alt=d.short;sc.appendChild(pimg);
  const r=document.createElement("img");r.src=SPACE.rocket;r.className="lrocket2";r.alt="";sc.appendChild(r);
  const flag=document.createElement("img");flag.src=SPACE.flag;flag.className="lflag2";flag.alt="Miam plante son drapeau";sc.appendChild(flag);
  const sv=el("div","lsouv",d.sv);sc.appendChild(sv);
  sc.appendChild(el("div","ltitle","Arrivé sur "+d.n+" !"));
  body.appendChild(sc);
  const cap=el("p","msg","Miam a trouvé "+d.svn+" "+d.sv);body.appendChild(cap);
  body.appendChild(el("p","fact","💡 "+d.fact));
  SOUV.push(d.sv);save("souv",SOUV);
  SFX.yes();speak("On est arrivés sur "+d.n+" ! "+d.fact+" Miam plante son drapeau… et il a trouvé "+d.svn+" !");
  await wait(1000);r.classList.add("gone");flag.classList.add("up");await wait(900);sv.classList.add("up");
  const[x,y]=centerOf(sv);sparks(x,y,20);
  await wait(3200);
}
async function launch(){
  const sky=$("sky"),r=$("rocket");
  $("fChoices").innerHTML="";$("fMsg").textContent="Prêt pour le décollage ?";
  for(const n of ["3","2","1"]){
    const c=el("div","cd",n);sky.appendChild(c);speak(n);SFX.tap();await wait(800);c.remove();
  }
  speak("Décollage !");SFX.win();r.classList.add("boost");
  if(!reduced&&r.animate){
    await new Promise(res=>{const a=r.animate([{transform:"translateX(-50%) translateY(0)"},{transform:"translateX(-50%) translateY(-460px) scale(.6)"}],{duration:1300,easing:"ease-in",fill:"forwards"});a.onfinish=res});
  }
  const[x,y]=centerOf(sky);sparks(x,y-80,30);await wait(500);
}

/* ---------- Train ---------- */
const T={round:0,word:null,next:0,locked:false,last:null};
const WAGON_COLORS=["#FFD166","#8FD3FE","#B8E986","#FFADC6"];
const LOCO_SVG=`<svg viewBox="0 0 100 82" aria-hidden="true">
 <rect x="16" y="6" width="14" height="22" rx="2" fill="#E63946"/><rect x="13" y="3" width="20" height="6" rx="3" fill="#B52633"/>
 <rect x="6" y="28" width="62" height="32" rx="9" fill="#2E6FD1"/>
 <rect x="10" y="36" width="54" height="4" fill="#5A93E6"/>
 <rect x="60" y="10" width="36" height="50" rx="5" fill="#E63946"/><rect x="56" y="6" width="44" height="7" rx="3" fill="#B52633"/>
 <rect x="66" y="17" width="24" height="20" rx="4" fill="#CDEBFF"/>
 <circle cx="78" cy="30" r="8.5" fill="var(--miam)"/>
 <circle cx="75" cy="28" r="2.6" fill="#fff"/><circle cx="81" cy="28" r="2.6" fill="#fff"/>
 <circle cx="75.4" cy="28.4" r="1.3" fill="#2B1B3A"/><circle cx="81.4" cy="28.4" r="1.3" fill="#2B1B3A"/>
 <path d="M75 33 Q78 35.5 81 33" stroke="#5A1A2C" stroke-width="1.4" fill="none" stroke-linecap="round"/>
 <path d="M6 52 L-2 66 L10 66 Z" fill="#6B7A99"/>
 <circle cx="24" cy="66" r="11" fill="#2B2F45" stroke="#8A93AD" stroke-width="3"/><circle cx="24" cy="66" r="3" fill="#8A93AD"/>
 <circle cx="50" cy="66" r="11" fill="#2B2F45" stroke="#8A93AD" stroke-width="3"/><circle cx="50" cy="66" r="3" fill="#8A93AD"/>
 <circle cx="82" cy="68" r="9" fill="#2B2F45" stroke="#8A93AD" stroke-width="3"/><circle cx="82" cy="68" r="2.5" fill="#8A93AD"/>
 <rect x="20" y="64" width="34" height="3" rx="1.5" fill="#8A93AD"/>
</svg>`;
function startTrain(){T.round=0;T.first=true;nextTrain()}
function nextTrain(){
  const body=$("tBody"),av=availWords().filter(w=>w.s.length>=2&&(!w.bank||w.us.includes("t")));
  if(!av.length) return notEnough(body,"Il faut des mots d'au moins deux syllabes. Ajoutez des sons ou des structures (CVCV…) dans les réglages.");
  if(T.round>=ROUNDS) return party(body,startTrain);
  const lvl=lv("train").lvl,w=pickWord(av,lvl,T.last);
  T.word=w;T.last=w.w;T.next=0;T.locked=false;T.err=0;
  const syls=w.s.map(g=>g.join(""));
  const nDis=CFG.trainPiege==="auto"?(lvl>=2?1:0):CFG.trainPiege==="non"?0:CFG.trainPiege==="oui"?1:+CFG.trainPiege;
  const dis=shuffle(sylPool().filter(g=>!syls.includes(g.join("")))).slice(0,nDis);
  const cars=shuffle(w.s.map((g,si)=>({g,si})).concat(dis.map(g=>({g}))));T.pi=dis.length;

  body.innerHTML="";body.appendChild(head("train",T.round));
  const sc=el("div","tscene");
  const bub=el("button","tbub",`<span class="tpic">${w.e||"🔊"}</span><span>🔊 Le train de quel mot ?${hasVoice?"":`<small>Adulte, dites « ${w.w} »</small>`}</span>`);
  bub.dataset.hint="1";bub.onclick=()=>speak(w.w);sc.appendChild(bub);
  // le train : locomotive + emplacements
  const n=w.s.length,ww=Math.min(26,63/n);
  const train=el("div","ttrain");train.id="trainRow";
  const loco=document.createElement("img");loco.src=TR_LOCO;loco.className="tloco";loco.alt="Locomotive";loco.id="loco";train.appendChild(loco);
  const SC=["#E05A4F","#4A90D9","#E8B931"];
  w.s.forEach((g,i)=>{
    const s_=el("div","twag slot"+(i===0?" next":""),`<img src="${[UI_SLOT_R,UI_SLOT_B,UI_SLOT_Y][i%3]}" alt=""><span class="tw"></span>`);
    s_.dataset.i=i;s_.style.width=ww+"cqw";s_.style.setProperty("--ww",ww+"cqw");s_.style.setProperty("--sc",SC[i%3]);train.appendChild(s_);
  });
  const yard=el("div","tyard");yard.appendChild(train);yard.appendChild(el("div","trails"));sc.appendChild(yard);
  sc.appendChild(el("div","task",`Lis les wagons et glisse-les jusqu'au train <img src="${UI_HAND}" alt="">`));
  // le quai
  const plat=el("div","tplat"),pw=Math.min(27,92/cars.length-2);
  const msg=el("p","msg");msg.id="tMsg";msg.setAttribute("aria-live","polite");
  cars.forEach(c=>{
    const txt=c.g.join(""),b=el("button","twag",`<img src="${TR_WAGON}" alt=""><span class="tw"><span>${c.si!=null?sylHTML(w,c.si):escH(txt)}</span></span>`);
    b.style.width=pw+"cqw";b.style.setProperty("--ww",pw+"cqw");b.setAttribute("aria-label","Wagon "+txt);
    const tryHook=async()=>{
      if(T.locked||b.classList.contains("gone"))return;
      const want=w.s[T.next].join("");
      if(txt===want){
        SFX.clang();b.classList.add("gone");
        const slot=train.querySelector(`.twag[data-i="${T.next}"]`);
        slot.className="twag hooked mz-snap";slot.querySelector("img").src=[TR_WAG_R,TR_WAG_B,TR_WAG_Y][T.next%3];slot.querySelector(".tw").innerHTML="<span>"+sylHTML(w,T.next)+"</span>";
        speak(spoken(c.g));T.next++;
        const nx=train.querySelector(`.twag[data-i="${T.next}"]`);if(nx)nx.classList.add("next");
        if(T.next===w.s.length){T.locked=true;await wait(500);await trainDone(w,train)}
      }else{
        T.err++;SFX.no();b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");
        msg.textContent="Oups ! Ce wagon dit « "+txt+" ».";
        speak(spoken(c.g));
      }
    };
    /* glisser le wagon jusqu'au train (un simple toucher marche aussi) */
    let sx=0,sy=0,moved=false,ghost=null,over=null,down=false;
    b.addEventListener("pointerdown",e=>{if(T.locked||b.classList.contains("gone"))return;e.preventDefault();try{b.setPointerCapture(e.pointerId)}catch(_){}down=true;moved=false;sx=e.clientX;sy=e.clientY});
    b.addEventListener("pointermove",e=>{
      if(!down)return;
      if(!moved&&Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>8){moved=true;ghost=el("div","wghost",b.innerHTML);ghost.style.width=b.offsetWidth+"px";ghost.querySelector(".tw").style.fontSize=getComputedStyle(b.querySelector(".tw")).fontSize;document.body.appendChild(ghost);b.classList.add("lifted")}
      if(moved){ghost.style.left=e.clientX+"px";ghost.style.top=e.clientY+"px";
        const t=document.elementFromPoint(e.clientX,e.clientY),hit=t&&(t.closest(".ttrain")||t.closest(".twag.slot"));
        const nx=train.querySelector(`.twag[data-i="${T.next}"]`);
        if(over&&over!==nx)over.classList.remove("over");if(hit&&nx){nx.classList.add("over");over=nx}else if(over){over.classList.remove("over");over=null}}
    });
    const end=e=>{
      if(!down)return;down=false;
      if(ghost){ghost.remove();ghost=null}b.classList.remove("lifted");
      const wasOver=!!over;if(over){over.classList.remove("over");over=null}
      if(!moved)return;               /* un simple toucher passe par le clic */
      b._skip=true;setTimeout(()=>{b._skip=false},400);
      if(wasOver)tryHook();
    };
    b.onclick=()=>{if(b._skip)return;tryHook()};
    b.addEventListener("pointerup",end);b.addEventListener("pointercancel",end);
    plat.appendChild(b);
  });
  sc.appendChild(plat);body.appendChild(sc);body.appendChild(msg);
  if(!reduced&&train.animate) train.animate([{transform:"translateX(110cqw)"},{transform:"translateX(0)"}],{duration:1100,easing:"cubic-bezier(.2,.8,.3,1)"});
  if(T.first){T.first=false;speak("Tchou tchou ! Lis les wagons pour former le mot : "+w.w)}
  else setTimeout(()=>speak(w.w),400);
}
async function trainDone(w,train){
  const wagons=[...train.querySelectorAll(".twag")],msg=$("tMsg");
  for(let i=0;i<wagons.length;i++){
    wagons.forEach(x=>x.classList.remove("lit"));wagons[i].classList.add("lit");
    speak(spoken(w.s[i]),i>0);await wait(750);
  }
  wagons.forEach(x=>x.classList.add("lit"));speak(w.w,true);
  addStar();progress("train",T.err,{gs:readG(w),word:w.w});logA({g:"train",lv:lv("train").lvl,it:w.w,gs:readG(w),st:struct(w),ns:w.s.length,fu:"S"+w.s.length,pi:T.pi||0,ok:1,f:T.err?0:1,n:T.err+1,src:"assemblage"});SFX.yes();const pr=rnd(PRAISE.filter(p=>!p.startsWith("Miam")));
  msg.textContent=pr+" Le train de « "+w.w+" » !";
  let hold=null;const P=phSeq(w);
  if(P){const sb=el("button","card tsnd","🔊 Les sons");sb.onclick=()=>{if(hold)return;SFX.tap();hold=playPhSeq(P).then(()=>speakAsync(w.w))};msg.appendChild(document.createTextNode(" "));msg.appendChild(sb)}
  await wait(1000);
  SFX.whistle();speak(pr,true);
  const lr=$("loco").getBoundingClientRect();
  if(!reduced)for(let k=0;k<4;k++)setTimeout(()=>{const pf=document.createElement("img");pf.src=UI_CLOUD;pf.className="puff";pf.style.left=(lr.left+lr.width*.2)+"px";pf.style.top=(lr.top+lr.height*.05)+"px";document.body.appendChild(pf);
    pf.animate([{transform:"translate(-50%,-50%) scale(.3)",opacity:.95},{transform:"translate(-10%,-160%) scale(1)",opacity:0}],{duration:1400,easing:"ease-out"}).onfinish=()=>pf.remove()},k*260);
  if(P)await wait(1600);if(hold)await hold;
  if(!reduced&&train.animate){
    await new Promise(res=>{const a=train.animate([{transform:"translateX(0)"},{transform:"translateX(-130cqw)"}],{duration:1600,easing:"ease-in",fill:"forwards"});a.onfinish=res});
  }else await wait(800);
  T.round++;nextTrain();
}

/* ---------- Sons complexes ---------- */
const LESSONS={
 ou:{say:"ou",key:["l[ou]p","🐺"],
  yes:[["p[ou]le","🐔"],["s[ou]pe","🍲"],["r[ou]e","🛞"],["t[ou]r","🗼"],["t[ou]t[ou]","🧸"],["l[ou]pe","🔍"],["f[ou]rmi","🐜"],["m[ou]le","🦪"]],
  no:[["moto","🏍️"],["lune","🌙"],["robe","👗"],["tube","🧪"],["puma","🐆"],["dodo","😴"],["sofa","🛋️"]],
  syl:[["lou","lo","lu"],["mou","mo","mu"],["sou","so","su"],["rou","ro","ru"],["tou","to","tu"]]},
 on:{say:"on",key:["b[on]b[on]","🍬"],
  yes:[["mout[on]","🐑"],["mel[on]","🍈"],["sav[on]","🧼"],["avi[on]","✈️"],["li[on]","🦁"],["drag[on]","🐉"],["coch[on]","🐷"],["ball[on]","🎈"]],
  no:[["moto","🏍️"],["robe","👗"],["lama","🦙"],["sofa","🛋️"],["vélo","🚲"],["dodo","😴"]],
  syl:[["lon","lo","lan"],["mon","mo","man"],["son","so","san"],["ron","ro","ran"],["ton","to","tan"]]},
 an:{say:"an",key:["mam[an]","👩"],
  yes:[["rub[an]","🎀"],["p[an]da","🐼"],["p[an]talon","👖"],["or[an]ge","🍊"],["éléph[an]t","🐘"],["k[an]gourou","🦘"]],
  no:[["lama","🦙"],["papa","👨"],["salade","🥗"],["café","☕"],["tomate","🍅"],["sac","👜"]],
  syl:[["lan","la","lon"],["man","ma","mon"],["san","sa","son"],["ran","ra","ron"],["pan","pa","pon"]]},
 oi:{say:"oie",key:["r[oi]","👑"],
  yes:[["p[oi]re","🍐"],["ét[oi]le","⭐"],["v[oi]ture","🚗"],["p[oi]sson","🐟"],["n[oi]sette","🌰"],["b[oi]sson","🥤"]],
  no:[["robe","👗"],["moto","🏍️"],["pile","🔋"],["vélo","🚲"],["olive","🫒"],["radio","📻"]],
  syl:[["loi","lo","li"],["moi","mo","mi"],["toi","to","ti"],["roi","ro","ri"],["soi","so","si"]]},
 ch:{say:"che",cons:true,key:["[ch]at","🐱"],
  yes:[["[ch]ou","🥬"],["va[ch]e","🐄"],["mou[ch]e","🪰"],["[ch]eval","🐴"],["bou[ch]e","👄"],["dou[ch]e","🚿"],["co[ch]on","🐷"],["[ch]apeau","🎩"]],
  no:[["sac","👜"],["sofa","🛋️"],["soupe","🍲"],["salade","🥗"],["judo","🥋"],["sumo","🤼"]],
  syl:[["cha","sa","ja"],["chou","sou","jou"],["cho","so","jo"],["chi","si","ji"],["chu","su","ju"]]},
 eu:{say:"eu",key:["f[eu]","🔥"],
  yes:[["j[eu]","🎮"],["fl[eu]r","🌸"],["tract[eu]r","🚜"],["chev[eu]","💇"],["n[eu]f","9️⃣"],["f[eu]","🔥"]],
  no:[["moto","🏍️"],["lune","🌙"],["poule","🐔"],["robe","👗"],["roue","🛞"],["tube","🧪"]],
  syl:[["feu","fou","fo"],["jeu","jou","jo"],["peu","pou","po"],["leu","lou","lo"],["deu","dou","do"]]},
 "è":{say:"haie",key:["fl[è]che","🏹"],
  yes:[["ch[è]vre","🐐"],["z[è]bre","🦓"],["vip[è]re","🐍"],["cr[è]me","🍦"],["l[è]vre","👄"],["fl[è]che","🏹"]],
  no:[["moto","🏍️"],["lune","🌙"],["lama","🦙"],["robe","👗"],["tube","🧪"],["sofa","🛋️"]],
  noSee:[["bébé","👶"],["café","☕"],["vélo","🚲"],["fée","🧚"],["purée","🥔"],["dé","🎲"]],
  syl:[["mè","mi","ma"],["lè","li","la"],["rè","ri","ra"],["sè","si","sa"],["pè","pi","pa"]]},
 in:{say:"hein",key:["lap[in]","🐰"],
  yes:[["sap[in]","🌲"],["lut[in]","🧝"],["requ[in]","🦈"],["jard[in]","🏡"],["dauph[in]","🐬"],["lap[in]","🐰"]],
  no:[["lama","🦙"],["pile","🔋"],["mamie","👵"],["olive","🫒"],["piano","🎹"],["lune","🌙"]],
  syl:[["lin","li","lan"],["pin","pi","pan"],["vin","vi","van"],["fin","fi","fan"],["sin","si","son"]]}
};
const STEP_ICONS=["👀","👂","🔎","🔤","📖"];
let sonsDone=load("sonsDone",[]);
const S={k:null,step:0,i:0,items:null,err:0,locked:false};
const hl=x=>x.replace(/\[([^\]]+)\]/g,'<span class="snd">$1</span>');
const plain=x=>x.replace(/[\[\]]/g,"");
const sayStr=x=>SAY[x]||ALONE[x]||x;
const sndSay=k=>(LESSONS[k]&&LESSONS[k].say)||ALONE[k]||k;
const SND_TTS={on:"on",ch:"cheu",oi:"oie",ou:"ou",an:"an",in:"hein",eu:"eu","è":"haie"};
const getOwnRec=k=>{try{return localStorage.getItem("lam_rec_"+k)}catch(e){return null}};
const getRec=k=>getOwnRec(k)||(CFG.voixMiamots==="non"?null:(PH_DEFAULT[k]||null));
const getRecMeta=k=>{if(!getOwnRec(k))return null;try{return JSON.parse(localStorage.getItem("lam_recm_"+k)||"null")}catch(e){return null}};
let curAudio=null,SEQ=0;
function speakAsync(text,slow){
  return new Promise(res=>{
    if(!hasVoice){res();return}
    try{
      const u=new SpeechSynthesisUtterance(String(text).replace(PRON_RE,(m,a,w)=>a+PRON[w]));
      u.lang=curLang();if(frVoice)u.voice=frVoice;u.rate=slow?Math.max(.5,rate*.72):rate;u.pitch=curPitch();
      let done=false;const fin=()=>{if(!done){done=true;res()}};
      u.onend=fin;u.onerror=fin;setTimeout(fin,1500+String(text).length*140);
      speechSynthesis.speak(u);
    }catch(e){res()}
  });
}
/* Joue un son seul : l'enregistrement de l'adulte s'il existe, sinon la voix du téléphone (dans un énoncé séparé, pour éviter « le son on » → « so non ») */
function playSnd(k){
  const rec=getRec(k);
  if(rec){
    return new Promise(res=>{
      try{if(curAudio)curAudio.pause()}catch(e){}
      const a=new Audio(rec);curAudio=a;let done=false;const fin=()=>{if(!done){done=true;res()}};
      const M=getRecMeta(k);
      if(M&&M.e>M.s){a.addEventListener("loadedmetadata",()=>{try{a.currentTime=M.s}catch(e){}},{once:true});
        a.addEventListener("playing",()=>{setTimeout(()=>{try{a.pause()}catch(e){}fin()},(M.e-M.s)*1000+60)},{once:true})}
      a.onended=fin;a.onerror=()=>{speakAsync(SND_TTS[k]||sndSay(k),true).then(fin)};
      const p=a.play();if(p&&p.catch)p.catch(()=>{speakAsync(SND_TTS[k]||sndSay(k),true).then(fin)});
      setTimeout(fin,6000);
    });
  }
  return speakAsync(SND_TTS[k]||sndSay(k),true);
}
async function seq(parts){
  const id=++SEQ;try{speechSynthesis.cancel()}catch(e){}try{if(curAudio)curAudio.pause()}catch(e){}
  for(const p of parts){
    if(id!==SEQ)return;
    if(typeof p==="string"){if(/^[\s?!.,…:;]*$/.test(p))continue;await speakAsync(p)}
    else if(p.snd)await playSnd(p.snd);
    else if(p.t)await speakAsync(p.t,p.slow);
  }
}
/* ===================== Sons enregistrés : phonèmes des mots ===================== */
const PH_MAP={y:"i","ê":"è",ai:"è",ei:"è",au:"o",eau:"o",en:"an",am:"an",em:"an",un:"in",im:"in",ain:"in",ein:"in",om:"on","œu":"eu",qu:"k",c:"k","ç":"s",ph:"f",gu:"g",k:"k"};
const VOWEL_G=new Set(["a","e","i","o","u","y","é","è","ê","ou","on","an","en","in","un","oi","eu","œu","ai","ei","au","eau","am","em","om","im"]);
const hasPh=k=>!!getRec(k);
/* Suite des sons d'un mot : [{g, k, i}] (lettres muettes ignorées) ; null si un son manque */
function phSeq(w){
  const fl=w.s.flat(),out=[];
  for(let i=0;i<fl.length;i++){
    if(isMuteG(w,i))continue;
    const g=fl[i],next=fl[i+1]||"",prev=fl[i-1]||"";
    if(g==="h")continue;
    if(g==="e"&&i===fl.length-1&&i>0)continue;               // e muet final : lune, fée
    let k=PH_MAP[g]||g;
    if(g==="c"&&/^[eiéèêy]/.test(next))k="s";
    if(g==="g"&&/^[eiéèêy]/.test(next))k="j";
    if(g==="s"&&VOWEL_G.has(prev)&&VOWEL_G.has(next))k="z";  // rose
    if(!hasPh(k))return null;
    out.push({g,k,i});
  }
  return out.length?out:null;
}
async function playPhSeq(seqArr,onStep){
  const id=++SEQ;try{speechSynthesis.cancel()}catch(e){}
  for(let j=0;j<seqArr.length;j++){if(id!==SEQ)return;if(onStep)onStep(j);await playSnd(seqArr[j].k)}
  if(onStep)onStep(-1);
}
function audioPool(maxPh){
  const ok=w=>w.e&&!HIDDEN.has(w.w)&&(()=>{const p=phSeq(w);return p&&p.length>=2&&p.length<=(maxPh||4)})();
  let pool=availWords().filter(ok);
  if(pool.length<6)pool=pool.concat(WORDS.filter(w=>ok(w)&&knownW(w)&&!pool.includes(w)));
  if(pool.length<6)pool=pool.concat(WORDS.filter(w=>ok(w)&&!pool.includes(w)));
  return pool;
}

/* ===================== Atelier des sons : 3 activités sans lettres ===================== */
const ACTS={
  fus:{t:"🧩 Quel mot j'ai dit ?",d:"J'écoute les sons et je trouve le mot",stk:10},
  init:{t:"👂 Le premier son",d:"Quel est le premier son ? Quel mot commence par ce son ?",stk:12},
  pd:{t:"⚖️ Pareil ou pas ?",d:"Est-ce que ça rime ? Deux sons qui se ressemblent",stk:4}
};
const A={mode:null,round:0,err:0,locked:false,last:null};
const A_ROUNDS=6;
function startAct(mode){A.mode=mode;A.round=0;A.last=null;renderAct()}
function actTop(box){
  const top=el("div","lesson-top");
  const back=el("button","card back","← Atelier");back.onclick=()=>{SFX.tap();A.mode=null;SEQ++;try{if(curAudio)curAudio.pause()}catch(e){}renderSons()};
  top.append(back,dots(A.round));box.appendChild(top);
}
async function actDone(ok){
  if(ok){addStar();djCheer();A.round++}
  if(ok)await settle(700);if(A.mode)renderAct();
}
function renderAct(){
  document.body.classList.remove("wc-home");
  const body=$("sBody");body.innerHTML="";
  if(A.round>=A_ROUNDS){A.mode=null;return party(body,()=>{renderSons()})}
  actTop(body);
  if(A.mode==="fus")actFusion(body);else if(A.mode==="init")actInitial(body);else actSame(body);
}
/* 1. Quel mot j'ai dit ? — fusion auditive */
/* Fusion de syllabes : « la… pin » → lapin */
function actFusionSyl(body){
  let pool=clearWords().filter(w=>w.s.length>=2&&w.s.length<=3);if(pool.length<6)pool=WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&w.s.length>=2&&w.s.length<=3);
  if(pool.length<3)return false;
  let w;do{w=rnd(pool)}while(pool.length>3&&w.w===A.last);A.last=w.w;A.err=0;A.locked=false;
  const others=shuffle(pool.filter(x=>x.w!==w.w&&x.e!==w.e&&x.s[0].join("")!==w.s[0].join(""))),same=others.filter(x=>x.s.length===w.s.length);
  const opts=shuffle([w,...[...new Set([...same.slice(0,1),...others])].slice(0,2)]);
  body.appendChild(djRow("wink","Écoute les morceaux… Quel mot ça fait ?"));
  const dotsRow=el("div","phdots");w.s.forEach(()=>dotsRow.appendChild(el("span","phd","")));
  const play=async()=>{const id=++SEQ;try{speechSynthesis.cancel()}catch(e){}const d=dotsRow.querySelectorAll(".phd");
    for(let i=0;i<w.s.length;i++){if(id!==SEQ)return;d.forEach((x,j)=>x.classList.toggle("on",j===i));await speakAsync(spoken(w.s[i]),true);await wait(380)}d.forEach(x=>x.classList.remove("on"))};
  const spk=el("button","card btn bigplay","🔊 Écoute");spk.dataset.hint="1";spk.onclick=()=>{SFX.tap();play()};
  body.append(dotsRow,spk);
  const ch=el("div","choices actpics"),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label","Image");
    b.onclick=async()=>{
      if(A.locked||b.disabled)return;
      if(o===w){A.locked=true;SFX.yes();b.classList.add("good");msg.textContent="Oui ! « "+w.w+" »";speak(w.w);
        logA({g:"sons",etape:"fusion-syllabes",nc:opts.length,it:w.w,ns:w.s.length,ok:1,f:A.err?0:1,n:A.err+1,src:"audio"});actDone(true)}
      else{A.err++;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… écoute encore les morceaux.";await wait(400);play()}
    };ch.appendChild(b)});
  body.append(ch,msg);
  setTimeout(()=>{play()},300);
  return true;
}
/* Rimes : « bateau… gâteau : est-ce que ça rime ? » */
/* Images qu'un enfant de 5 ans nomme sans hésiter : pour les jeux d'écoute et le test */
const CLEAR_W=new Set("chat rat lit chou loup roue feu roi fée dé main pain dent os sac bol mur lune vache poule soupe robe pomme ours mouche moto tomate pirate mamie banane bébé café bouche douche cheval mouton bonbon melon savon avion lion maman panda poire étoile livre arbre crabe clé tigre dragon zèbre fleur tracteur tortue porte tarte fourmi bus lapin sapin vélo fusée girafe cerise citron ballon crocodile frite piano dino tutu cœur pantalon caméra".split(" "));
const clearPool=()=>{const c=phPicPool().filter(x=>CLEAR_W.has(x.w));return c.length>=12?c:phPicPool()};
const clearWords=()=>WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&CLEAR_W.has(w.w));
function rimeKey(x){let i=-1;x.ph.forEach((p,j)=>{if(VOWEL_G.has(p.k)||["é","è","ou","on","an","in","oi","eu"].includes(p.k))i=j});return i<0?null:x.ph.slice(i).map(p=>p.k).join("|")}
function rimeGroups(){const g={};clearPool().forEach(x=>{const k=rimeKey(x);if(k)(g[k]=g[k]||[]).push(x)});return g}
function actRime(body){
  const G=rimeGroups(),keys=Object.keys(G).filter(k=>G[k].length>=2);
  if(keys.length<3)return false;
  A.err=0;A.locked=false;
  const k=rnd(keys),[x,t]=shuffle(G[k]),others=shuffle(clearPool().filter(o=>{const r=rimeKey(o);return r&&r!==k&&r.split("|").pop()!==k.split("|").pop()&&o.e!==t.e&&o.e!==x.e})).slice(0,2),opts=shuffle([t,...others]);
  body.appendChild(djRow("wink",`Quel mot rime avec <b>${x.w}</b> ?`));
  const top=el("button","plate",x.e);top.style.margin="0 auto 10px";top.style.display="block";top.onclick=()=>{SEQ++;speak(x.w)};body.appendChild(top);
  const ch=el("div","choices actpics"),msg=el("p","msg");
  const say=()=>{SEQ++;seq(["Quel mot rime avec",x.w+" ?",opts.map(o=>o.w).join(", ")+"."])};
  opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label",o.w);
    b.onclick=async()=>{if(A.locked||b.disabled)return;
      if(o===t){A.locked=true;SFX.yes();b.classList.add("good");msg.textContent="Oui ! « "+x.w+" » et « "+t.w+" » finissent pareil.";
        logA({g:"sons",etape:"rimes",it:x.w+"/"+t.w,ok:1,f:A.err?0:1,n:A.err+1,nc:opts.length,src:"audio"});await speakAsync(x.w+", "+t.w);actDone(true)}
      else{A.err++;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="« "+o.w+" »… écoute bien la fin des mots.";await speakAsync(o.w);await wait(250);speak(x.w)}};
    ch.appendChild(b)});
  const again=el("button","card","🔊 Encore");again.onclick=()=>{SFX.tap();say()};
  body.append(ch,again,msg);
  setTimeout(say,300);
  return true;
}
function actFusion(body){
  if(earI()<6&&actFusionSyl(body))return;
  const fl=fusLevel();
  let pool=AUDIO_WORDS.filter(x=>awOk(x)&&(fl===1?x.ph.length===2:true));
  if(fl===3)pool=pool.concat(audioPool(4).map(w=>({w:w.w,e:w.e,ph:phSeq(w)})));
  if(pool.length<3){body.appendChild(el("p","instr","Il faut encore quelques sons enregistrés pour ce jeu."));return}
  let w;do{w=rnd(pool)}while(pool.length>3&&w.w===A.last);A.last=w.w;A.err=0;A.locked=false;
  const ph=w.ph;
  const others=shuffle(pool.filter(x=>x.w!==w.w&&x.e!==w.e));
  const near=others.filter(x=>x.ph[0].k===ph[0].k||x.ph[x.ph.length-1].k===ph[ph.length-1].k);
  const opts=shuffle([w,...[...new Set([...near.slice(0,1),...others])].slice(0,2)]);
  body.appendChild(djRow("wink","Écoute les sons… Quel mot j'ai dit ?"));
  const dotsRow=el("div","phdots");ph.forEach(()=>dotsRow.appendChild(el("span","phd","")));
  const play=()=>playPhSeq(ph,j=>{dotsRow.querySelectorAll(".phd").forEach((d,i)=>d.classList.toggle("on",i===j))});
  const spk=el("button","card btn bigplay","🔊 Écoute");spk.dataset.hint="1";spk.onclick=()=>{SFX.tap();play()};
  body.append(dotsRow,spk);
  const ch=el("div","choices actpics"),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label","Image");
    b.onclick=async()=>{
      if(A.locked||b.disabled)return;
      if(o.w===w.w){A.locked=true;SFX.yes();b.classList.add("good");msg.textContent="Oui ! « "+w.w+" »";speak(w.w);
        logA({g:"sons",etape:"fusion-auditive",nc:opts.length,it:w.w,ns:ph.length,ok:1,f:A.err?0:1,n:A.err+1,src:"audio"});actDone(true)}
      else{A.err++;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… écoute encore les sons.";
        if(A.err>=2){const m=document.querySelector("#sons .djimg");if(m){m.src=DJ.point;setTimeout(()=>{m.src=DJ.wink},1500)};mzAnim(spk,"mz-pulse")}
        await wait(400);play()}
    };ch.appendChild(b)});
  body.append(ch,msg);
  setTimeout(()=>seq(["Écoute bien."]).then(play),300);
}
/* 2. Quel son au début ? — identification phonémique */
/* Variante : on entend « mmmm », on choisit l'image du mot qui commence par ce son */
function actInitialRev(body){
  const pool=AUDIO_WORDS.filter(awOk).concat(WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&phSeq(w)).map(w=>({w:w.w,e:w.e,ph:phSeq(w)})));
  const byK={};pool.forEach(x=>{const k=x.ph[0].k;(byK[k]=byK[k]||[]).push(x)});
  let keys=Object.keys(byK).filter(k=>byK[k].length&&hasPh(k));
  const pref=keys.filter(k=>sel.has(k)||sel.has(k==="k"?"c":k));if(pref.length>=3)keys=pref;
  if(keys.length<3)return false;
  let k;do{k=rnd(keys)}while(keys.length>3&&k===A.lastK);A.lastK=k;A.err=0;A.locked=false;
  const w=rnd(byK[k]),others=shuffle(keys.filter(x=>x!==k&&soundRank(x)!==soundRank(k))).slice(0,2).map(x=>rnd(byK[x]));
  const opts=shuffle([w,...others]);
  body.appendChild(djRow("point","Quel mot commence par ce son ?"));
  const spk=el("button","sndopt big1","<span>🔊</span>");spk.style.setProperty("--c","#4FC3CF");spk.dataset.hint="1";spk.onclick=()=>{SEQ++;playSnd(k)};
  const r=el("div","sndopts");r.appendChild(spk);body.appendChild(r);
  const ch=el("div","choices actpics"),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label","Image");
    b.onclick=async()=>{
      if(A.locked||b.disabled)return;
      if(o===w){A.locked=true;SFX.yes();b.classList.add("good");msg.textContent="Oui ! « "+w.w+" » commence par ce son.";
        logA({g:"sons",etape:"son-initial",nc:opts.length,it:w.w,tg:k,ok:1,f:A.err?0:1,n:A.err+1,src:"audio"});
        await seq([{snd:k},{t:w.w}]);actDone(true)}
      else{A.err++;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… écoute encore le son.";await speakAsync(o.w);await wait(250);SEQ++;playSnd(k)}
    };ch.appendChild(b)});
  body.append(ch,msg);
  setTimeout(()=>seq(["Quel mot commence par ce son ?",{snd:k},opts.map(o=>o.w).join(", ")+"."]),300);
  return true;
}
function actInitial(body){
  if(A.round%2===1&&actInitialRev(body))return;
  const pool=AUDIO_WORDS.filter(awOk);
  if(pool.length<3){body.appendChild(el("p","instr","Il faut encore quelques sons enregistrés pour ce jeu."));return}
  let w;do{w=rnd(pool)}while(pool.length>3&&w.w===A.last);A.last=w.w;A.err=0;A.locked=false;
  const t=w.ph[0].k;
  const isV=VOWEL_G.has(t)||["a","i","o","u","é","è","e","ou","on","an","in","oi","eu"].includes(t);
  const cand=PHONEMES.map(p=>p.k).filter(k=>k!==t&&hasPh(k)&&(isV?["a","i","o","u","é","ou","on","an"].includes(k):!["a","e","i","o","u","é","è","ou","on","an","in","oi","eu"].includes(k)));
  const pref=cand.filter(k=>sel.has(k)||sel.has(k==="k"?"c":k));
  const opts=shuffle([t,...shuffle(pref.length>=2?pref:cand).slice(0,2)]);
  body.appendChild(djRow("point","Quel est le premier son du mot ?"));
  const pic=el("button","card actword",`<span>${w.e}</span><small>🔊</small>`);pic.onclick=()=>{SFX.tap();speak(w.w,false,true)};
  body.appendChild(pic);
  const row=el("div","sndopts"),msg=el("p","msg");let chosen=null;
  const COLS=["#F4A43A","#4FC3CF","#B07FE0"];
  const ok=el("button","card btn","✅ C'est ce son-là");ok.disabled=true;
  opts.forEach((k,i)=>{const b=el("button","sndopt",`<span>🔊</span>`);b.style.setProperty("--c",COLS[i]);b.setAttribute("aria-label","Son "+(i+1));
    b.onclick=()=>{if(A.locked||b.disabled)return;SFX.tap();chosen=k;row.querySelectorAll(".sndopt").forEach(x=>x.classList.toggle("sel",x===b));ok.disabled=false;ok._b=b;mzAnim(b,"mz-pop");SEQ++;playSnd(k)};
    row.appendChild(b)});
  ok.onclick=async()=>{
    if(A.locked||!chosen)return;
    if(chosen===t){A.locked=true;SFX.yes();ok._b.classList.add("good");msg.textContent="Oui ! « "+w.w+" » commence par ce son.";
      logA({g:"sons",etape:"son-initial",nc:opts.length,it:w.w,tg:t,ok:1,f:A.err?0:1,n:A.err+1,src:"audio"});
      await seq([{snd:t},{t:w.w}]);actDone(true)}
    else{A.err++;SFX.no();ok._b.classList.add("bad");ok._b.disabled=true;chosen=null;ok.disabled=true;msg.textContent="Hmm… écoute le mot encore une fois.";
      await wait(300);speak(w.w,false,true)}
  };
  body.append(row,ok,msg);
  setTimeout(()=>seq([{t:w.w,slow:true},"Quel est le premier son ?"]),300);
}
/* 3. Pareil ou différent ? — discrimination de sons proches */
const PD_PAIRS=[["m","n"],["f","v"],["s","ch"],["s","z"],["ch","j"],["p","b"],["t","d"],["k","g"],["l","r"],["é","è"],["o","ou"],["u","ou"],["an","on"],["in","an"],["i","u"],["e","eu"]];
function actSame(body){
  if((earI()===3||(earI()>3&&A.round%2===0))&&actRime(body))return;
  const pairs=PD_PAIRS.filter(([a,b])=>hasPh(a)&&hasPh(b));
  if(!pairs.length){body.appendChild(el("p","instr","Il faut encore quelques sons enregistrés pour ce jeu."));return}
  A.err=0;A.locked=false;
  const [a,b]=rnd(pairs),same=Math.random()<.45;const x=Math.random()<.5?a:b,y=same?x:(x===a?b:a);
  body.appendChild(djRow("wink","Écoute les deux sons. Pareils ou différents ?"));
  const two=el("div","pdtwo");const b1=el("button","sndopt","<span>🔊</span>"),b2=el("button","sndopt","<span>🔊</span>");
  b1.style.setProperty("--c","#4FC3CF");b2.style.setProperty("--c","#F4A43A");
  b1.onclick=()=>{SEQ++;playSnd(x)};b2.onclick=()=>{SEQ++;playSnd(y)};two.append(b1,two.appendChild(el("span","pdvs","…")),b2);
  const play=async()=>{const id=++SEQ;b1.classList.add("sel");await playSnd(x);b1.classList.remove("sel");if(id!==SEQ)return;await wait(450);b2.classList.add("sel");await playSnd(y);b2.classList.remove("sel")};
  const again=el("button","card","🔊 Encore");again.onclick=()=>{SFX.tap();play()};
  const row=el("div","seg pdbtns"),msg=el("p","msg");
  [["same","😊 Pareil"],["diff","🙃 Différent"]].forEach(([v,lab])=>{const bt=el("button","card btn",lab);
    bt.onclick=async()=>{if(A.locked)return;const good=(v==="same")===same;
      if(good){A.locked=true;SFX.yes();bt.classList.add("good");msg.textContent=same?"Oui, c'était le même son !":"Oui, ces deux sons sont différents !";
        logA({g:"sons",etape:"pareil-different",nc:2,it:x+"/"+y,ok:1,f:A.err?0:1,n:A.err+1,src:"audio"});actDone(true)}
      else{A.err++;SFX.no();mzAnim(bt,"mz-wiggle");msg.textContent="Hmm… écoute encore.";await wait(300);play()}};
    row.appendChild(bt)});
  body.append(two,again,row,msg);
  setTimeout(play,400);
}

/* ===================== Mots courts pour l'écoute et la fusion (sons explicites) ===================== */
/* "graphèmes|séparés", "=" donne le son quand il diffère de la lettre ; dernier champ : lettres muettes à la fin */
const AUDIO_WORDS=[
 ["rat","🐀","r|a","t"],["riz","🍚","r|i","z"],["lit","🛏️","l|i","t"],["nid","🪺","n|i","d"],["chat","🐱","ch|a","t"],["chou","🥬","ch|ou",""],
 ["loup","🐺","l|ou","p"],["roue","🛞","r|ou","e"],["feu","🔥","f|eu",""],["roi","👑","r|oi",""],["fée","🧚","f|é","e"],["dé","🎲","d|é",""],
 ["lait","🥛","l|ai=è","t"],["main","✋","m|ain=in",""],["pain","🍞","p|ain=in",""],["vent","💨","v|en=an","t"],["dent","🦷","d|en=an","t"],["pont","🌉","p|on","t"],
 ["seau","🪣","s|eau=o",""],["os","🦴","o|s",""],
 ["mur","🧱","m|u|r",""],["sac","🎒","s|a|c=k",""],["lac","🏞️","l|a|c=k",""],["bol","🥣","b|o|l",""],["fil","🧵","f|i|l",""],["sel","🧂","s|e=è|l",""],
 ["mer","🌊","m|e=è|r",""],["lune","🌙","l|u|n","e"],["vache","🐄","v|a|ch","e"],["poule","🐔","p|ou|l","e"],["soupe","🍲","s|ou|p","e"],["robe","👗","r|o|b","e"],
 ["pomme","🍎","p|o|mm=m","e"],["pile","🔋","p|i|l","e"],["ours","🐻","ou|r|s",""],["ruche","🐝","r|u|ch","e"],["mouche","🪰","m|ou|ch","e"],["luge","🛷","l|u|g=j","e"]
].map(([w,e,sp,mute])=>{const parts=sp.split("|").map(x=>{const[g,k]=x.split("=");return{g,k:k||(PH_MAP[g]||g)}});return{w,e,parts,mute,ph:parts.map(p=>({g:p.g,k:p.k}))}});
const LONG_PH=new Set(["m","l","s","f","r","v","ch","j","n","z","a","i","o","u","é","è","e","ou","on","an","in","oi","eu"]);
const awOk=x=>x.ph.every(p=>hasPh(p.k));
/* Progression de « Quel mot j'ai dit ? » : 2 sons, puis 3 sons, puis des mots de 2 syllabes */
function fusLevel(){const l=LOG.filter(e=>e.g==="sons"&&e.etape==="fusion-auditive"&&e.f);return l.length>=12?3:l.length>=5?2:1}

/* ===================== Lire (débutant) : « Le chemin des sons » ===================== */
/* La première lettre avance sur un chemin vers la suivante : on l'entend tant qu'elle bouge (iiiiiii…llll) */
function trackWords(){
  const ok=x=>awOk(x)&&LONG_PH.has(x.ph[0].k)&&x.parts.length<=3&&x.mute!=="e";
  const known=x=>x.parts.every(p=>sel.has(p.g)||sel.has(p.k)||(p.g==="mm"&&sel.has("m")));
  let l=AUDIO_WORDS.filter(x=>ok(x)&&known(x));
  if(l.length<4)l=AUDIO_WORDS.filter(ok);
  return l;
}
function renderTrack(x,lvl,body){
  R.word={w:x.w,e:x.e,s:[x.parts.map(p=>p.g)]};R.last=x.w;R.locked=false;
  const lsc=el("div","lscene");body.appendChild(lsc);
  const scene=el("div","scene"),m=makeMiam("lire");
  const bub=el("div","lbub","Fais avancer la lettre sur le chemin : écoute-la chanter !");
  scene.append(m,bub);lsc.appendChild(scene);
  const fr=el("div","lframe trframe"),row=el("div","trrow");fr.appendChild(row);lsc.appendChild(fr);
  const tiles=[],tracks=[];
  x.parts.forEach((p,i)=>{
    if(i>0){const t=el("div","trline","");row.appendChild(t);tracks.push(t)}
    const tl=el("div","trtile"+(i===0?" go":""),p.g);row.appendChild(tl);tiles.push(tl);
  });
  if(x.mute)row.appendChild(el("div","trmute",x.mute));
  const pic=el("div","gpic","");lsc.appendChild(pic);
  const msg=el("p","msg","👉 Pose ton doigt sur la lettre qui brille et fais-la avancer.");lsc.appendChild(msg);
  let step=0,block=[tiles[0]];
  let loopA=null,idleT=0;
  const loopStart=k=>{try{if(!loopA){loopA=new Audio(getRec(k));loopA.loop=true}if(loopA.paused)loopA.play().catch(()=>{})}catch(e){}clearTimeout(idleT);idleT=setTimeout(loopPause,160)};
  const loopPause=()=>{try{loopA&&loopA.pause()}catch(e){}};
  const loopStop=()=>{clearTimeout(idleT);try{if(loopA){loopA.pause();loopA.src=""}}catch(e){}loopA=null};
  function arm(){
    const lead=block[block.length-1],target=tiles[step+1],track=tracks[step];
    block.forEach(t=>t.classList.add("go"));
    let on=false,sx=0,max=0,cur=0;
    const down=e=>{e.preventDefault();try{e.currentTarget.setPointerCapture(e.pointerId)}catch(_){}on=true;sx=e.clientX-cur;
      max=target.getBoundingClientRect().left-lead.getBoundingClientRect().right+cur+2;block.forEach(t=>t.classList.add("drag"))};
    const move=e=>{if(!on)return;const nx=Math.max(0,Math.min(max,e.clientX-sx));if(Math.abs(nx-cur)>1)loopStart(x.ph[step].k);cur=nx;
      block.forEach(t=>t.style.transform=`translateX(${cur}px)`);track.style.setProperty("--p",Math.round(cur/Math.max(1,max)*100)+"%");
      if(cur>=max-1){on=false;done()}};
    const up=()=>{on=false;loopPause();block.forEach(t=>t.classList.remove("drag"))};
    async function done(){
      block.forEach(t=>{t.removeEventListener("pointerdown",down);t.removeEventListener("pointermove",move);t.removeEventListener("pointerup",up);t.removeEventListener("pointercancel",up)});
      loopStop();block.forEach(t=>{t.classList.remove("drag","go");t.style.transform=""});track.classList.add("gone");
      SFX.tap();target.classList.add("joined");block.forEach(t=>t.classList.add("joined"));
      block.push(target);step++;
      if(step<tiles.length-1){msg.textContent="👉 Continue : fais avancer les lettres jusqu'au bout !";arm()}
      else{await playSnd(x.ph[step].k);finish()}
    }
    block.forEach(t=>{t.addEventListener("pointerdown",down);t.addEventListener("pointermove",move);t.addEventListener("pointerup",up);t.addEventListener("pointercancel",up)});
  }
  async function finish(){
    if(R.locked)return;R.locked=true;loopStop();
    row.classList.add("done");
    /* le mot est lu (glissé) : on choisit son image */
    const others=AUDIO_WORDS.filter(o=>o.w!==x.w&&o.e!==x.e);
    const opts=shuffle([x,...similar(x,others,2)]);
    msg.textContent="Tu as lu le mot ! Quelle image va avec ?";if(!R.picSaid){R.picSaid=true;speak("Quelle image va avec ce mot ?")}
    const ch=el("div","choices trpics");let err=0,done=false;
    opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label","Image");
      b.onclick=async()=>{
        if(done||b.disabled)return;
        if(o.w===x.w){done=true;SFX.yes();b.classList.add("good");mood(m,"happy");addStar();const[px,py]=centerOf(b);sparks(px,py);
          msg.textContent="Bravo ! C'était « "+x.w+" » !";await speakAsync(x.w);await speakAsync("Bravo !");
          logA({g:"lire",lv:lvl,it:x.w,nc:opts.length,gs:x.parts.map(p=>p.g),st:x.parts.length===2?"CV":"CVC",ns:1,ok:1,f:err?0:1,n:err+1,h:0,src:"chemin"});
          R.round++;await settle(500);nextRead()}
        else{err++;SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;msg.textContent="Hmm… relis le mot, ou refais le chemin avec ton doigt.";speak(o.w)}
      };ch.appendChild(b)});
    pic.replaceWith(ch);
    /* on peut refaire chanter le mot en touchant les lettres */
    row.style.cursor="pointer";row.onclick=()=>{if(done)return;playPhSeq(x.ph)};
  }
  arm();
  if(!R.trackSaid){R.trackSaid=true;setTimeout(()=>speak("Fais avancer la lettre sur le chemin, et écoute-la chanter jusqu'à l'autre lettre !"),300)}
}

/* Petites découvertes sur le son et la musique (comme les planètes) */
const MUSIC_FACTS={
  miam:[["🗣️","Pose ta main sur ton cou et dis « mmmm » : tu sens ta gorge vibrer ? C'est ta voix !"],["🐝","Dis « zzzz » puis « ssss » avec la main sur ton cou : un son vibre, l'autre pas !"],["👂","On entend avec les oreilles, mais un son, c'est de l'air qui vibre."]],
  speaker:[["🔊","Un haut-parleur bouge très vite d'avant en arrière : il pousse l'air, et ça fait le son !"],["💨","Le son voyage dans l'air jusqu'à tes oreilles, très vite : plus vite qu'une voiture de course !"]],
  disco:[["🪩","La boule disco est couverte de petits miroirs : chacun renvoie la lumière dans une direction."],["✨","Quand la boule tourne, les taches de lumière dansent sur les murs !"]],
  vinyl:[["💿","Sur un disque, la musique est gravée dans un tout petit sillon en spirale."],["🎶","L'aiguille glisse dans le sillon, vibre, et fait renaître la musique."]],
  deck:[["🎧","Un DJ a deux platines : il fait passer une chanson à l'autre sans arrêter la musique."],["🎚️","Les boutons de la table servent à monter ou baisser le son de chaque disque."]],
  waves:[["🎵","Un son aigu vibre très vite. Un son grave vibre lentement."],["🚀","Dans l'espace, il n'y a pas d'air : on n'entend aucun son, même pas une fusée !"]],
  laptop:[["💻","Un ordinateur peut enregistrer ta voix et la garder pour toujours."],["🎙️","Toutes les voix de Miamots ont été enregistrées avec un téléphone !"]],
  headph:[["🎧","Le casque met la musique tout près de tes oreilles, juste pour toi."],["🥁","Dans ton oreille, il y a une toute petite peau qui vibre comme un tambour : le tympan !"]]
};
let factI={};
function showFact(wrap,k,F){
  const L=(F||MUSIC_FACTS)[k],i=(factI[k]||0)%L.length;factI[k]=i+1;const[e,t]=L[i];
  let c=wrap.querySelector(".mfact");if(!c){c=el("div","mfact");wrap.appendChild(c)}
  c.innerHTML=`<span>${e}</span><p>${t}</p>`;c.classList.remove("on");void c.offsetWidth;c.classList.add("on");
  c.onclick=()=>c.classList.remove("on");clearTimeout(c._t);c._t=setTimeout(()=>c.classList.remove("on"),9000);
  SEQ++;try{if(curAudio)curAudio.pause()}catch(_){}speak(t);
}
function renderSonsMenu(){
  const body=$("sBody");body.innerHTML="";document.body.classList.add("wc-home");
  const outer=el("div","wcwrap"),wrap=el("div","wchome");
  const img=document.createElement("img");img.className="wchome-img";img.src=SONS_MENU_IMG;img.alt="L'atelier des sons";img.draggable=false;wrap.appendChild(img);
  const add=(b,label,fn,cls)=>{const h=el("button","wchot"+(cls?" "+cls:""),"");h.type="button";h.setAttribute("aria-label",label);h.style.cssText=`left:${b[0]}%;top:${b[1]}%;width:${b[2]}%;height:${b[3]}%`;h.onclick=e=>{e.preventDefault();SFX.tap();fn(h)};wrap.appendChild(h);return h};
  add([7.3,1.4,25.4,5.1],"Retour à la carte",()=>go("home"));
  add([72.7,1.4,10.3,5.5],"Mon album",()=>openAlbum());
  add([86.4,1,9.3,6.2],"Espace adulte",()=>adultGate(openSettings));
  const go2=(fn)=>h=>{mzAnim(h,"mz-pop");document.body.classList.remove("wc-home");setTimeout(fn,150)};
  add([6.3,49.5,43,19.3],"Quel mot j'ai dit ?",go2(()=>startAct("fus")),"tile");
  add([51,49.5,43,19.3],"Le premier son",go2(()=>startAct("init")),"tile");
  add([6.3,69.9,43,20.2],"Pareil ou pas ?",go2(()=>startAct("pd")),"tile");
  add([51,69.9,43,20.2],"Nouveau son",go2(()=>{S.pick=true;renderSons()}),"tile");
  // découvertes
  add([17,21,33,17.8],"Miam",()=>showFact(wrap,"miam"),"fact");
  add([81.5,11.2,16.5,11.5],"La boule disco",()=>showFact(wrap,"disco"),"fact");
  add([0,23,10,16.5],"Le haut-parleur",()=>showFact(wrap,"speaker"),"fact");
  add([94.6,26.5,5.4,15.5],"Le haut-parleur",()=>showFact(wrap,"speaker"),"fact");
  add([19.5,37.5,20.5,4.6],"Le disque",()=>showFact(wrap,"vinyl"),"fact");
  add([56.5,37.5,19.5,4.6],"L'autre disque",()=>showFact(wrap,"vinyl"),"fact");
  add([39.5,37.2,17,4.8],"La table de mixage",()=>showFact(wrap,"deck"),"fact");
  add([84.5,23.5,10,8],"Les ondes",()=>showFact(wrap,"waves"),"fact");
  add([74,32,19,8],"L'ordinateur",()=>showFact(wrap,"laptop"),"fact");
  add([84,86.5,16,13.5],"Le casque",()=>showFact(wrap,"headph"),"fact");
  add([0,88,21,12],"Les disques",()=>showFact(wrap,"vinyl"),"fact");
  outer.appendChild(wrap);body.appendChild(outer);
  speak("Bienvenue à l'atelier des sons ! Touche les objets pour découvrir des secrets sur la musique.");
}
/* ===== Scènes d'entrée : un décor à explorer + une seule carte « Jouer » ===== */
const GARDEN_FACTS={
  sunflower:[["🌻","Quand il est jeune, le tournesol tourne sa tête pour suivre le soleil !"],["🌰","Un seul tournesol peut porter plus de mille graines."]],
  ladybug:[["🐞","Les points de la coccinelle ne disent pas son âge !"],["🌿","La coccinelle mange les pucerons qui abîment les plantes : c'est l'amie du jardinier."]],
  bee:[["🐝","L'abeille transporte le pollen de fleur en fleur : sans elle, pas de fruits !"],["💃","Les abeilles dansent pour montrer aux autres où sont les fleurs."]],
  worm:[["🪱","Le ver de terre creuse des tunnels : l'air et l'eau peuvent entrer dans la terre."],["👀","Le ver de terre n'a pas d'yeux, mais il sent la lumière."]],
  snail:[["🐌","L'escargot porte sa maison sur son dos !"],["✨","L'escargot laisse une trace brillante pour glisser plus facilement."]],
  seeds:[["🌱","Une graine cache un tout petit bébé plante, qui attend l'eau et la chaleur pour sortir."]],
  can:[["💧","Les plantes boivent l'eau par leurs racines, comme avec une paille !"]],
  sun:[["☀️","Les plantes fabriquent leur nourriture avec la lumière du soleil."]],
  tomato:[["🍅","La tomate est un fruit ! Elle pousse à partir d'une petite fleur jaune."]],
  greenhouse:[["🏡","Dans la serre, les vitres gardent la chaleur du soleil : les plantes ont chaud même au printemps."]],
  birdhouse:[["🐦","Un nichoir, c'est une petite maison où les oiseaux peuvent faire leur nid."]],
  chickadee:[["❄️","La mésange reste chez nous tout l'hiver, même quand il fait très froid !"]],
  strawberry:[["🍓","La fraise porte ses graines à l'extérieur : regarde les petits points !"]],
  lavender:[["💜","La lavande sent très bon… et les abeilles l'adorent."]],
  lantern:[["🔆","Cette lanterne se recharge avec le soleil le jour, et s'allume toute seule la nuit."]],
  miam:[["🌼","Miam plante des graines : dans quelques semaines, elles deviendront des fleurs !"]]
};
const KITCHEN_FACTS={
  cow:[["🐄","Le lait vient de la vache. Avec le lait, on fait aussi le beurre et le fromage !"]],
  milk:[["🥛","Le lait aide à avoir des os solides."]],
  hen:[["🐔","Une poule pond environ un œuf par jour."]],
  eggs:[["🥚","Dans un œuf, le jaune est la réserve de nourriture du poussin."]],
  bee:[["🐝","Les abeilles fabriquent le miel avec le nectar des fleurs."]],
  honey:[["🍯","Pour remplir un pot de miel, les abeilles visitent des millions de fleurs !"]],
  oven:[["🔥","Dans le four, la chaleur fait gonfler la pâte grâce à de toutes petites bulles d'air."]],
  bread:[["🍞","Le pain, c'est de la farine, de l'eau, du sel et de la levure, qui le fait gonfler."]],
  flour:[["🌾","La farine vient du blé : on écrase les grains pour en faire une poudre blanche."]],
  butter:[["🧈","Le beurre se fait en battant très longtemps la crème du lait."]],
  cookies:[["🍪","Le chocolat vient d'une fève qui pousse sur un arbre : le cacaoyer."]],
  strawberry:[["🍓","La fraise porte ses graines à l'extérieur !"]],
  blueberry:[["🫐","Les bleuets poussent beaucoup au Québec, surtout au Lac-Saint-Jean !"]],
  banana:[["🍌","Les bananes poussent en grappes, la tête vers le haut !"]],
  cat:[["🐱","Le chat ronronne quand il est content."]],
  pin:[["🥖","Le rouleau aplatit la pâte pour faire des biscuits bien plats."]],
  miam:[["📜","Une recette, c'est comme un mode d'emploi : on la lit pour savoir quoi faire !"]]
};
const SCENES={
  chenille:{img:()=>JARDIN_SCENE_IMG,body:"cBody",facts:GARDEN_FACTS,play:()=>startCat(),icon:()=>JHEAD.joie,label:"La chenille",hello:"Bienvenue au jardin ! Touche les animaux et les plantes pour découvrir leurs secrets.",
    hot:[["birdhouse",3.4,6.5,14.6,13.7],["chickadee",1,23,12.7,5.6],["sunflower",8.3,25.4,23,16.3],["sun",67.4,5.9,17,11.7],["greenhouse",84,15,16,24],["lantern",72.8,26,8.1,9.1],
         ["tomato",75.2,39,18.5,10.4],["lavender",90.8,45.6,9.2,8.4],["ladybug",4.4,45.2,11.3,5],["bee",60,44.9,12.7,8],["miam",23.4,50.8,23.4,15],["seeds",39,66,19.5,9.5],
         ["worm",20.5,70.6,19.3,8.5],["can",69.3,63.8,28,13],["snail",77,78,17.6,8.6],["strawberry",0,77.5,9.8,7]]},
  ecouter:{img:()=>CUISINE_SCENE_IMG,body:"lBody",facts:KITCHEN_FACTS,play:()=>startListen(),icon:()=>KIT_COOKIE,label:"Les biscuits",hello:"Bienvenue dans la cuisine ! Touche les objets pour découvrir leurs secrets.",
    hot:[["cow",5.3,27.2,25,11.7],["hen",67,27.8,10.6,7.5],["bee",81.8,23,11.7,5.7],["honey",82.9,31.1,13.3,7.8],["oven",72.3,39.5,27.7,18.5],["miam",36,40,38,20],
         ["milk",22.8,50.5,12.3,15.9],["cat",7.4,55,15.3,8.5],["bread",78.6,58,21.4,9],["eggs",0,64.6,25,10.2],["flour",24.4,65.5,22.3,13],["cookies",51,68.2,49,13],
         ["butter",1,78,19,8.6],["pin",29.2,79,35,8.9],["banana",90,75.4,10,8.4],["strawberry",73.3,83.1,17,7.8],["blueberry",87,90.3,13,7.3]]}
};
function renderScene(g){
  const S_=SCENES[g],body=$(S_.body);body.innerHTML="";
  const wrap=el("div","scenewrap");
  const img=document.createElement("img");img.className="sceneimg";img.src=S_.img();img.alt=PLACES[g].n;img.draggable=false;wrap.appendChild(img);
  S_.hot.forEach(([k,l,t,w,h])=>{const b=el("button","wchot fact","");b.type="button";b.setAttribute("aria-label",k);b.style.cssText=`left:${l}%;top:${t}%;width:${w}%;height:${h}%`;
    b.onclick=e=>{e.preventDefault();SFX.tap();showFact(wrap,k,S_.facts)};wrap.appendChild(b)});
  const ic=S_.icon();
  const play=el("button","playcard",`${ic?`<img src="${ic}" alt="">`:""}<span><b>▶️ Jouer</b><small>${S_.label}</small></span>`);
  play.onclick=()=>{SFX.tap();mzAnim(play,"mz-pop");SEQ++;try{speechSynthesis.cancel()}catch(e){}setTimeout(S_.play,180)};
  wrap.appendChild(play);body.appendChild(wrap);
  speak(S_.hello);
}

/* ===================== Étape « Découverte des sons » (début maternelle) ===================== */
const stageSons=()=>progAuto()&&PROG?(curStep().p==="sons"||curStep().p==="oral"):CFG.etape==="sons";
const stageOral=()=>progAuto()&&PROG&&curStep().p==="oral";
const LOCKED_SONS=["train","fusee","lire"];          /* s'ouvrent à l'étape « Lecture » */
const lockedNow=()=>!stageSons()?[]:stageOral()?LOCKED_SONS.concat(["ecouter","musee","ecrire"]):LOCKED_SONS;
const isLocked=g=>lockedNow().includes(g);
/* Lettres simples dont on a le son enregistré, parmi les sons cochés */
function letterPool(){
  const ok=g=>(Array.from(g).length===1||g==="ch")&&!["y","h","q","w","x","k"].includes(g)&&hasPh(PH_MAP[g]||g);
  let L=[...sel].filter(ok);
  if(L.length<(progAuto()&&PROG?2:4))L=["a","i","o","u","m","l","s","f"].filter(ok);
  return L;
}
const lkey=g=>PH_MAP[g]||g;
function pickLetter(pool,last){
  if(progAuto()&&PROG){const fo=focusG(),f=pool.filter(g=>fo.has(g)&&g!==last);if(f.length&&Math.random()<.5)return rnd(f)}
  const easy=pool.filter(g=>LONG_PH.has(lkey(g)));     /* sons qui s'allongent d'abord */
  const P=easy.length>=4&&Math.random()<.75?easy:pool;
  let g;do{g=rnd(P)}while(P.length>1&&g===last);return g;
}
function distinctLetters(t,pool,n){
  const o=shuffle(pool.filter(g=>g!==t&&lkey(g)!==lkey(t)));
  return o.slice(0,n);
}
/* 🍪 Cuisine : Miam dit « mmmm », on lui donne le biscuit « m » */
function nextListenLetter(){
  const body=$("lBody"),pool=letterPool();
  if(L.round>=ROUNDS) return party(body,startListen);
  const lvl=lv("ecouter").lvl,nOpt=cfgN("nourrirN",cuisineN(lvl));
  const t=pickLetter(pool,L.last);L.last=t;L.locked=false;L.err=0;
  const opts=shuffle([t,...distinctLetters(t,pool,nOpt-1)]);
  body.innerHTML="";body.appendChild(head("ecouter",L.round));
  const ksc=el("div","kscene");body.appendChild(ksc);
  const scene=el("div","scene"),m=makeMiam("cuisine");
  const bub=el("button","kbub",'<span class="spk">🔊</span>J\'ai faim de…');bub.dataset.hint="1";
  const say=()=>{mood(m,"open");SEQ++;playSnd(lkey(t))};bub.onclick=say;
  scene.append(m,bub);ksc.appendChild(scene);
  const ch=el("div","choices"+(opts.length===2||opts.length===4?" two":"")),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","cookie lettre",o);
    b.onclick=async()=>{
      if(L.locked||b.disabled)return;
      if(o===t){L.locked=true;SFX.yes();mood(m,"open");b.classList.add("good");
        await wait(200);const p=flyInto(b,m);b.classList.add("gone");await p;mood(m,"chew");SFX.chomp();await wait(800);
        mood(m,"happy");addStar();const[x,y]=centerOf(m);sparks(x,y);
        msg.textContent=rnd(PRAISE)+" C'était le son de « "+t+" »";await playSnd(lkey(t));mzAnim(m,"mz-bounce");await wait(150);await playSnd(lkey(t));
        progress("ecouter",L.err,{gs:[t],keepE:true});
        logA({g:"ecouter",lv:lvl,it:t,tg:t,gs:[t],st:"L",ns:1,nc:opts.length,md:"lettre",fu:"L",ok:1,f:L.err?0:1,n:L.err+1,dg:[[t,L.err?0:1]],dir:"s2g",src:"direct"});
        L.round++;await settle(800);nextListen()}
      else{SFX.no();mood(m,"yuck");b.classList.add("bad");b.disabled=true;L.err++;msg.textContent="Hmm… pas celui-là. Écoute encore !";
        SEQ++;await playSnd(lkey(o));setTimeout(()=>mood(m,"idle"),600)}
    };ch.appendChild(b)});
  ksc.appendChild(ch);const board=el("div","kboard");board.appendChild(msg);ksc.appendChild(board);
  msg.textContent="Écoute le son et donne à Miam le bon biscuit !";
  setTimeout(()=>{mood(m,"open");seq([L.first?"Miam a faim ! Écoute le son :":"J'ai faim de…",{snd:lkey(t)}]);L.first=false},300);
}
/* 🖼️ Musée : la lettre va sur l'image qui commence par son son */
function letterPictures(){
  const out={};
  AUDIO_WORDS.filter(awOk).forEach(x=>{const g=x.parts[0].g;if(Array.from(g).length===1||g==="ch")(out[g]=out[g]||[]).push({w:x.w,e:x.e})});
  WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)).forEach(w=>{const p=phSeq(w);if(!p)return;const g=w.s[0][0];if((Array.from(g).length===1||g==="ch")&&lkey(g)===p[0].k&&!(g==="c"&&p[0].k!=="k"))(out[g]=out[g]||[]).push({w:w.w,e:w.e})});
  return out;
}
function nextMuseeLetter(){
  const body=$("mBody"),lvl=lv("musee").lvl;
  if(MU.round>=MU.boards)return party(body,startMusee,"Le musée est tout rangé !");
  const pics=letterPictures(),pool=letterPool().filter(g=>pics[g]&&pics[g].length);
  const n=Math.min(cfgN("museeN",lvl===1?3:4),pool.length);
  if(n<2)return notEnough(body,"Il faut cocher quelques sons de plus.");
  const letters=[];const easy=shuffle(pool.filter(g=>LONG_PH.has(lkey(g))));
  const foc=progAuto()&&PROG?shuffle(pool.filter(g=>targetG().has(g))):[];
  [...foc,...easy,...shuffle(pool)].forEach(g=>{if(letters.length<n&&!letters.includes(g))letters.push(g)});
  const chosen=letters.map(g=>({g,...rnd(pics[g])}));
  MU.left=chosen.length;MU.err={};MU.sel=null;MU.letterMode=true;MU.lchosen=chosen;
  body.innerHTML="";body.appendChild(dotsN(MU.round,MU.boards));
  const scene=el("div","scene"),m=makeMiam("musee");m.style.width="min(100px,28vw)";MU.m=m;
  scene.append(m,el("div","bubble","Glisse chaque lettre sur l'image qui commence par son son !"));body.appendChild(scene);
  const grid=el("div","musee"),Lb=el("div","mlabels"),Rf=el("div","mframes");
  shuffle(chosen).forEach(c=>{
    const f=el("div","frame",`<span class="pic">${c.e}</span><button class="fspk" aria-label="Écouter le nom de l'image">🔊</button><span class="mslot"></span>`);f.dataset.w=c.g;
    f.querySelector(".fspk").onclick=ev=>{ev.stopPropagation();speak(c.w)};
    f.onclick=()=>{if(MU.sel&&!f.classList.contains("done"))museeCheck(MU.sel,f)};Rf.appendChild(f)});
  shuffle(chosen).forEach(c=>{const lb=el("div","mlabel",`<span class="mw">${c.g}</span>`);lb.dataset.w=c.g;lb.setAttribute("role","button");
    lb.addEventListener("click",()=>{SEQ++;playSnd(lkey(c.g))});setupLabel(lb);Lb.appendChild(lb)});
  grid.append(Lb,Rf);body.appendChild(grid);
  const msg=el("p","msg");msg.id="muMsg";body.appendChild(msg);
  if(MU.first){MU.first=false;speak("Touche une lettre pour entendre son son, puis glisse-la sur l'image qui commence par ce son !")}
}
async function museeCheckLetter(lb,f){
  const g=lb.dataset.w,msg=$("muMsg");MU.sel=null;lb.classList.remove("sel");
  const c=MU.lchosen.find(x=>x.g===g);
  if(f.dataset.w===g){
    const errs=MU.err[g]||0;
    f.classList.add("done");mzAnim(f,"mz-snap");f.querySelector(".mslot").textContent=g;lb.classList.add("gone");
    SFX.yes();const[x,y]=centerOf(f);sparks(x,y,12,["✨","⭐"]);msg.textContent="Oui ! « "+c.w+" » commence par « "+g+" »";
    await playSnd(lkey(g));speak(c.w);
    progress("musee",Math.min(2,errs),{gs:[g],word:g});
    logA({g:"musee",lv:lv("musee").lvl,nc:MU.left,it:g,tg:c.w,gs:[g],st:"L",ns:1,ok:1,f:errs?0:1,n:errs+1,dg:[[g,errs?0:1]],dir:"g2s",src:"lettre-image"});
    MU.left--;
    if(MU.left===0){addStar();mood(MU.m,"happy");SFX.win();msg.textContent="Toutes les lettres sont à leur place !";speak("Bravo, tout est rangé !",true);MU.round++;await settle(1200);nextMusee()}
  }else{
    MU.err[g]=(MU.err[g]||0)+1;SFX.no();mood(MU.m,"yuck");setTimeout(()=>mood(MU.m,"idle"),800);
    f.classList.remove("bad");void f.offsetWidth;f.classList.add("bad");msg.textContent="Pas cette image… Écoute le son de la lettre et le nom de l'image.";
  }
}
/* Carte : les lieux de la lecture restent dans les nuages */
function lockPlaces(wrap){
  if(!stageSons())return;
  const cls={train:"wc-gare",fusee:"wc-fusee",lire:"wc-lire",ecouter:"wc-maison",musee:"wc-musee",ecrire:"wc-ecole"};
  lockedNow().forEach(g=>{const h=wrap.querySelector("."+cls[g]);if(!h)return;
    const c=el("div","cloudlock "+cls[g],"<span>☁️</span><span>☁️</span><span>☁️</span>");
    wrap.insertBefore(c,h);
    h.onclick=e=>{e.preventDefault();SFX.tap();mzAnim(c,"mz-wiggle");speak(stageOral()?"Ce lieu est encore dans les nuages. Joue d'abord à l'atelier des sons et au jardin pour bien écouter les sons !":"Ce lieu est encore dans les nuages. Il s'ouvrira quand tu sauras faire chanter les sons ensemble !")}});
}

function startSons(){S.k=null;S.pick=false;A.mode=null;S.simple=false;
  if(PARC_ACTIVE&&PARC&&!PARC.done&&PARC.steps[PARC.i]==="sons"){
    if(PARC.lesson&&!sonsDone.includes(PARC.lesson)){S.k=PARC.lesson;S.simple=PARC.lesson!=="emuet"&&!LESSONS[PARC.lesson];S.step=0;return renderSons()}
    if(PARC.act)return startAct(PARC.act);
  }
  renderSons()}
const VLAB=["#F4A43A","#4FC3CF","#B07FE0","#F27A95","#9BD36A","#F2D04A"];
function djRow(pose,html){const r=el("div","djrow");const im=document.createElement("img");im.src=DJ[pose];im.className="djimg";im.alt="Miam DJ";im.dataset.pose=pose;r.appendChild(im);r.appendChild(el("p","instr",html));return r}
function djCheer(){const im=document.querySelector("#sons .djimg");if(!im)return;const p0=im.dataset.pose;im.src=DJ.cheer;im.classList.remove("cheer");void im.offsetWidth;im.classList.add("cheer");clearTimeout(im._t);im._t=setTimeout(()=>{im.src=DJ[p0]},1300)}
function renderSons(){
  const body=$("sBody");body.innerHTML="";
  if(!S.k){
    if(A.mode)return renderAct();
    if(!S.pick)return renderSonsMenu();
    {const tp=el("div","lesson-top");const bk=el("button","card back","← Atelier");bk.onclick=()=>{SFX.tap();S.pick=false;renderSons()};tp.appendChild(bk);body.appendChild(tp)}
    const top=djRow("point","Choisis un son à apprendre !");const ball=document.createElement("img");ball.src=DJ.ball;ball.className="djball";ball.alt="";top.appendChild(ball);body.appendChild(top);

    const g=el("div","vgrid small"),fo=progAuto()&&PROG?targetG():new Set(),known=progAuto()&&PROG?progSounds():sel;
    const ORD=[];CURRIC.forEach(s=>s.add.forEach(x=>{if(!ORD.includes(x))ORD.push(x)}));
    const all=PH_SIMPLE.filter(x=>!LESSONS[x]&&hasPh(nk(x))).map(k=>({k,simple:true})).concat(Object.keys(LESSONS).map(k=>({k})));
    const rk=x=>{const r=ORD.indexOf(x.k);return r<0?99:r};
    all.sort((a,b)=>(fo.has(b.k)?1:0)-(fo.has(a.k)?1:0)||rk(a)-rk(b));
    let sepDone=false;
    const items=all;
    if(progAuto()&&PROG){const emk={k:"emuet",em:true};items.push(emk);if(emLessonOpen()&&!sonsDone.includes("emuet"))fo.add("emuet")}
    items.forEach(({k,simple},i)=>{
      if(!sepDone&&!fo.has(k)&&!known.has(k)){sepDone=true;g.appendChild(el("div","sylsep","Plus tard :"))}
      if(k==="emuet"){const ok=sonsDone.includes(k),later=!emLessonOpen();
        const b=el("button","sndvin simple"+(later&&!ok?" later":""),`${fo.has(k)?'<span class="star">⭐</span>':""}${ok?'<span class="ok">✅</span>':""}<span class="vinyl" style="--lab:#CFC8BB"><span>e</span></span><small>e muet</small>`);
        b.onclick=()=>{SFX.tap();if(!ok&&emWords().length<2){SEQ++;speak("Plus tard ! Quand tu sauras lire quelques mots, Miam te montrera ce secret.");return}S.k="emuet";S.step=0;S.simple=false;renderSons()};g.appendChild(b);return}
      const done=sonsDone.includes(k),L=LESSONS[k];
      const ex=simple?phLessonWords(k).yes[0]:null;
      const b=el("button","sndvin"+(simple?" simple":"")+(!fo.has(k)&&!known.has(k)?" later":""),`${fo.has(k)?'<span class="star">⭐</span>':""}${done?'<span class="ok">✅</span>':""}<span class="vinyl" style="--lab:${VLAB[i%VLAB.length]}"><span>${k}</span></span><small>${simple?(ex?ex.e+" "+ex.w:""):hl(L.key[0])+" "+L.key[1]}</small>`);
      b.onclick=()=>{SFX.tap();S.k=k;S.step=0;S.simple=!!simple;renderSons()};
      g.appendChild(b);
    });
    body.appendChild(g);
    return;
  }
  if(S.k==="emuet")return renderEmLesson();
  if(S.simple)return renderPhLesson();
  const L=LESSONS[S.k];
  const top=el("div","lesson-top");
  const back=el("button","card back","← Sons");back.onclick=()=>{SFX.tap();S.k=null;S.pick=true;renderSons()};
  const st=el("div","steps");STEP_ICONS.forEach((ic,i)=>st.appendChild(el("span",i<S.step?"done":i===S.step?"cur":"",i<S.step?"✅":ic)));
  top.append(back,st);body.appendChild(top);
  const box=el("div","");box.id="sStep";body.appendChild(box);
  S.i=0;S.err=0;S.locked=false;S.items=null;
  [stepDiscover,stepEar,stepSee,stepSyl,stepRead][S.step](box,L);
}
function nextStep(){S.step++;if(S.step>=(S.k==="emuet"?2:S.simple?4:5))return lessonDone();renderSons()}
/* ===== Leçon « le e muet final » (Miamots_maitrise_V1-3 › enseignement_orthographique) =====
   1. on montre : lune, robe, tomate… le e ne s'entend pas, mais il s'écrit
   2. on pratique : « Comment s'écrit lune ? » lune / lun / luné (3 choix) */
function emWords(){
  const ok=w=>w.bank&&w.e&&!HIDDEN.has(w.w)&&w.wq&&w.wq.includes("#emf")&&!w.wq.includes("#muet")&&w.rq.every(knownKey)&&/e$/.test(w.w)&&w.mute.has(Array.from(w.w).length-1);
  let L=WORDS.filter(ok);   /* jamais de mot avec un graphème inconnu, même s'il en manque */
  const pref=["lune","robe","tomate","salade","banane","tulipe","cabane","moto"];
  /* d'abord les mots où le e suit une consonne (lune, robe) : c'est le cas le plus clair pour la leçon */
  const cons=w=>!/[aeiouyéèêàâîïôûü]e$/i.test(w.w);
  return L.sort((a,b)=>(cons(b)-cons(a))||((pref.indexOf(b.w)>=0)-(pref.indexOf(a.w)>=0)));
}
function renderEmLesson(){
  const body=$("sBody");body.innerHTML="";
  const top=el("div","lesson-top");
  const back=el("button","card back","← Sons");back.onclick=()=>{SFX.tap();SEQ++;S.k=null;S.pick=true;renderSons()};
  const st=el("div","steps");["👀","✏️"].forEach((ic,i)=>st.appendChild(el("span",i<S.step?"done":i===S.step?"cur":"",i<S.step?"✅":ic)));
  top.append(back,st);body.appendChild(top);
  const box=el("div","");box.id="sStep";body.appendChild(box);
  S.i=0;S.ie=0;S.locked=false;S.items=null;S.EW=emWords();
  (S.step===0?emDiscover:emPractice)(box);
}
function emDiscover(box){
  const W=S.EW.slice(0,3);
  box.appendChild(djRow("turn","Le <b>e</b> qu'on n'entend pas !"));
  const ex=el("div","ex");
  W.forEach(w=>{const b=el("button","card exw",`${w.e} ${wordHTML(w)}`);b.onclick=()=>{SFX.tap();SEQ++;speak(w.w)};ex.appendChild(b)});
  box.appendChild(ex);
  box.appendChild(el("p","instr","À la fin de ces mots, il y a un <b>e</b> : on ne l'entend pas, mais on l'écrit."));
  const go=el("button","card btn","Je suis prêt ! →");go.onclick=()=>{SFX.yes();SEQ++;nextStep()};
  const c=el("div","center");c.appendChild(go);box.appendChild(c);
  const w0=W[0];
  seq(["Écoute :",w0?w0.w:"lune","On n'entend pas le e à la fin du mot. Mais on l'écrit ! Regarde : il est tout pâle."]);
}
function emPractice(box){
  if(!S.items)S.items=shuffle(S.EW.slice(0,8)).slice(0,4);
  if(S.i>=S.items.length||!S.items.length)return nextStep();
  const w=S.items[S.i],base=w.w.slice(0,-1),opts=shuffle([w.w,base,base+"é"]);S.locked=false;
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("point","Comment s'écrit ce mot ?"));
  const pic=el("button","bigpic",w.e);pic.dataset.hint="1";pic.onclick=()=>{SEQ++;speak(w.w)};box.appendChild(pic);
  const ch=el("div","choices"),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","card wordbtn",escH(o));
    b.onclick=async()=>{if(S.locked||b.disabled)return;
      if(o===w.w){S.locked=true;SFX.yes();b.classList.add("good");addStar();
        logA({g:"sons",etape:"e-muet",it:w.w,ok:1,f:S.ie?0:1,n:S.ie+1,nc:3});S.ie=0;
        b.innerHTML=wordHTML(w);msg.textContent="Oui ! « "+w.w+" » s'écrit avec un e qu'on n'entend pas.";SEQ++;await speakAsync(w.w);await settle(500);S.i++;emPractice(box)}
      else{S.ie++;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent=o.endsWith("é")?"Avec é, on entendrait « é » à la fin…":"Il manque le e muet à la fin !";SEQ++;speak(w.w)}};
    ch.appendChild(b)});
  box.append(ch,msg);
  setTimeout(()=>{SEQ++;seq(S.i===0?["Comment s'écrit",w.w+" ?"]:[w.w])},250);
}
/* ===== Leçon d'un son simple (maternelle) : 1. découvrir 2. l'entendre 3. trouver l'image 4. trouver la lettre ===== */
const PH_ICONS=["👀","👂","🖼️","🔤"];
const PH_SIMPLE=["a","o","i","u","e","é","m","l","s","f","r","ch","v","n","j","z","p","t","b","d","c","g"];
function phSimpleList(){
  const known=progAuto()&&PROG?progSounds():sel;
  return PH_SIMPLE.filter(g=>known.has(g)&&!LESSONS[g]&&hasPh(nk(g)));
}
const isVowK=k=>VOWEL_G.has(k);
let _ppp=null;
function phPicPool(){
  if(_ppp)return _ppp;const seen=new Set(),out=[];
  AUDIO_WORDS.filter(awOk).forEach(x=>{if(!seen.has(x.w)){seen.add(x.w);out.push({w:x.w,e:x.e,ph:x.ph})}});
  WORDS.forEach(w=>{if(!w.e||HIDDEN.has(w.w)||seen.has(w.w))return;const p=phSeq(w);if(p){seen.add(w.w);out.push({w:w.w,e:w.e,ph:p})}});
  return _ppp=out;
}
/* Consonnes : le mot commence par le son. Voyelles : on entend le son dans le mot. */
function phLessonWords(g){
  const k=nk(g),P=phPicPool(),vow=isVowK(k);
  const yes=P.filter(x=>vow?x.ph.some(p=>p.k===k):x.ph[0].k===k);
  const no=P.filter(x=>!x.ph.some(p=>p.k===k)&&!(vow?x.ph.some(p=>near(NEAR_V,p.k,k)):near(NEAR_C,x.ph[0].k,k)));
  yes.sort((a,b)=>(a.ph.length-b.ph.length)+(Math.random()-.5)*2);
  return {yes,no:shuffle(no),vow};
}
function phLog(errs,it,mode){try{djCheer()}catch(e){}track({gs:[S.k]},errs);
  logA({g:"sons",lv:0,it,tg:S.k,gs:[S.k],etape:mode,nc:mode==="son-ecoute"?2:3,ok:1,f:errs?0:1,n:errs+1,dg:mode==="lettre"?[[S.k,errs?0:1]]:undefined,src:mode==="lettre"?"direct":"phono"})}
function renderPhLesson(){
  const body=$("sBody");body.innerHTML="";
  const top=el("div","lesson-top");
  const back=el("button","card back","← Sons");back.onclick=()=>{SFX.tap();SEQ++;S.k=null;S.simple=false;S.pick=true;renderSons()};
  const st=el("div","steps");PH_ICONS.forEach((ic,i)=>st.appendChild(el("span",i<S.step?"done":i===S.step?"cur":"",i<S.step?"✅":ic)));
  top.append(back,st);body.appendChild(top);
  const box=el("div","");box.id="sStep";body.appendChild(box);
  S.i=0;S.err=0;S.ie=0;S.locked=false;S.items=null;S.W=phLessonWords(S.k);
  [phDiscover,phEar,phWhich,phLetter][S.step](box);
}
const phQ=W=>W.vow?["Est-ce que tu entends",{snd:nk(S.k)},"dans ce mot ?"]:["Est-ce que ce mot commence par",{snd:nk(S.k)},"?"];
const REPERE={s:["🐍","le serpent"],z:["🐝","l'abeille"],ch:["🤫","chut !"],m:["😋","miam !"],f:["💨","le vent"],r:["🐯","le tigre qui gronde"],u:["🦉","le hibou : hu hu"],o:["😮","oh !"],a:["😄","ah !"],i:["🐭","la souris : hi hi"]};
function phDiscover(box){
  const k=nk(S.k),W=S.W;
  const big=el("button","vinyl bigvin",`<span>${S.k}</span>`);big.style.setProperty("--lab",VLAB[PH_SIMPLE.indexOf(S.k)%VLAB.length]);big.dataset.hint="1";
  big.onclick=async()=>{SEQ++;big.classList.add("spin");await playSnd(k);big.classList.remove("spin")};
  box.appendChild(djRow("turn",`Voici le son <span class="snd">${S.k}</span>`));box.appendChild(big);
  const rp=REPERE[S.k];
  if(rp){const r=el("button","card exw",`<span style="font-size:2rem">${rp[0]}</span> le son de ${rp[1]}`);r.onclick=()=>{SFX.tap();SEQ++;seq(["Le son de "+rp[1],{snd:k}])};const c=el("div","center");c.appendChild(r);box.appendChild(c)}
  box.appendChild(el("p","instr",W.vow?"On l'entend dans ces mots 👇":"Ces mots commencent par ce son 👇"));
  const ex=el("div","ex");
  W.yes.slice(0,4).forEach(x=>{const b=el("button","card exw",x.e+" "+x.w);b.onclick=()=>{SFX.tap();SEQ++;seq([{snd:k},x.w])};ex.appendChild(b)});
  box.appendChild(ex);
  const go=el("button","card btn","Je suis prêt ! →");go.onclick=()=>{SFX.yes();SEQ++;nextStep()};
  const c=el("div","center");c.appendChild(go);box.appendChild(c);
  const w0=W.yes[0];
  seq(["Voici le son",{snd:k},"Écoute encore :",{snd:k}].concat(rp?["C'est le son de "+rp[1]]:[]).concat(w0?[W.vow?"On l'entend dans "+w0.w:"comme au début de "+w0.w]:[]));
}
function phEar(box){
  const W=S.W;
  if(!S.items)S.items=shuffle(W.yes.slice(0,6).sort(()=>Math.random()-.5).slice(0,3).map(x=>({x,y:true})).concat(W.no.slice(0,3).map(x=>({x,y:false}))));
  if(S.i>=S.items.length)return nextStep();
  const it=S.items[S.i];S.locked=false;
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("wink",W.vow?`Est-ce que tu entends <span class="snd">${S.k}</span> ?`:`Ça commence par <span class="snd">${S.k}</span> ?`));
  const pic=el("button","bigpic",it.x.e);pic.setAttribute("aria-label","Réécouter");pic.dataset.hint="1";pic.onclick=()=>{SEQ++;speak(it.x.w)};box.appendChild(pic);
  const yn=el("div","yn"),yes=el("button","card","👂 Oui"),no=el("button","card","🙉 Non"),msg=el("p","msg");
  const answer=async(b,val)=>{
    if(S.locked)return;
    if(val===it.y){S.locked=true;SFX.yes();b.classList.add("good");addStar();phLog(S.ie||0,it.x.w,"son-ecoute");S.ie=0;
      const[x,y]=centerOf(b);sparks(x,y,10,["⭐","✨"]);
      msg.textContent=it.y?"Oui ! « "+it.x.w+" »":"Bravo ! Pas de « "+S.k+" » "+(W.vow?"dans ":"au début de ")+"« "+it.x.w+" ».";
      SEQ++;await (it.y?seq([{snd:nk(S.k)},it.x.w]):seq(["Bravo !"]));
      await settle(500);S.i++;phEar(box);
    }else{S.ie=(S.ie||0)+1;SFX.no();b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500);
      msg.textContent="Écoute encore…";SEQ++;seq([it.x.w,{snd:nk(S.k)}])}
  };
  yes.onclick=()=>answer(yes,true);no.onclick=()=>answer(no,false);
  yn.append(yes,no);box.append(yn,msg);
  setTimeout(()=>{SEQ++;seq(S.i===0?phQ(W).concat([it.x.w]):[it.x.w])},250);
}
function phWhich(box){
  const W=S.W,k=nk(S.k);
  if(!S.items)S.items=shuffle(W.yes.slice(0,8)).slice(0,4);
  if(S.i>=S.items.length||W.no.length<2)return nextStep();
  const t=S.items[S.i];S.locked=false;
  const opts=shuffle([t,...shuffle(W.no).slice(0,2)]);
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("point",W.vow?`Quel mot a le son <span class="snd">${S.k}</span> ?`:`Quel mot commence par <span class="snd">${S.k}</span> ?`));
  const spk=el("button","sndopt big1","<span>🔊</span>");spk.style.setProperty("--c","#4FC3CF");spk.dataset.hint="1";spk.onclick=()=>{SEQ++;playSnd(k)};
  const r=el("div","sndopts");r.appendChild(spk);box.appendChild(r);
  const ch=el("div","choices actpics"),msg=el("p","msg");
  opts.forEach(o=>{const b=el("button","plate",o.e);b.setAttribute("aria-label","Image");
    b.onclick=async()=>{
      if(S.locked||b.disabled)return;
      if(o===t){S.locked=true;SFX.yes();b.classList.add("good");addStar();phLog(S.ie||0,t.w,"son-image");S.ie=0;
        msg.textContent="Oui ! « "+t.w+" »";SEQ++;await seq([{snd:k},t.w]);await settle(400);S.i++;phWhich(box)}
      else{S.ie=(S.ie||0)+1;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="« "+o.w+" »… écoute encore le son.";SEQ++;await seq([o.w,{snd:k}])}
    };ch.appendChild(b)});
  box.append(ch,msg);
  const names=opts.map(o=>o.w).join(", ")+".";
  setTimeout(()=>{SEQ++;seq((S.i===0?[W.vow?"Quel mot a le son":"Quel mot commence par le son",{snd:k},"?"]:[{snd:k}]).concat([names]))},250);
}
function phLetter(box){
  const k=nk(S.k);
  const others=phSimpleList().concat(["a","o","i","u","m","l","s","f","r"]).filter((g,i,a)=>a.indexOf(g)===i&&g!==S.k&&nk(g)!==k);
  if(!S.items)S.items=[0,1,2];
  if(S.i>=S.items.length||others.length<2)return nextStep();
  S.locked=false;
  const opts=shuffle([S.k,...shuffle(others).slice(0,2)]);
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("point","Quelle lettre fait ce son ?"));
  const spk=el("button","sndopt big1","<span>🔊</span>");spk.style.setProperty("--c","#F4A43A");spk.dataset.hint="1";spk.onclick=()=>{SEQ++;playSnd(k)};
  const r=el("div","sndopts");r.appendChild(spk);box.appendChild(r);
  const ch=el("div","choices"),msg=el("p","msg");
  opts.forEach((o,j)=>{const b=el("button","vinyl",`<span>${o}</span>`);b.style.setProperty("--lab",VLAB[(S.i+j)%VLAB.length]);
    b.onclick=async()=>{
      if(S.locked||b.disabled)return;
      if(o===S.k){S.locked=true;SFX.yes();b.classList.add("good");addStar();phLog(S.ie||0,S.k,"lettre");S.ie=0;const[x,y]=centerOf(b);sparks(x,y);
        msg.textContent="Oui ! La lettre « "+S.k+" » fait ce son.";SEQ++;await playSnd(k);await settle(500);S.i++;phLetter(box)}
      else{S.ie=(S.ie||0)+1;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="La lettre « "+o+" » fait ce son-là…";SEQ++;await playSnd(nk(o))}
    };ch.appendChild(b)});
  box.append(ch,msg);
  setTimeout(()=>{SEQ++;seq(S.i===0?["Quelle lettre fait le son",{snd:k},"?"]:[{snd:k}])},250);
}
function lessonDone(){
  const k=S.k;if(!sonsDone.includes(k)){sonsDone.push(k);save("sonsDone",sonsDone)}
  const body=$("sBody");
  const inGames=k==="emuet"||sel.has(k)||progAuto();
  party(body,()=>{S.k=null;renderSons()},k==="emuet"?"Tu connais le e qu'on n'entend pas !":"Tu connais le son « "+k+" » !",k==="emuet"?null:inGames?null:{label:"➕ Ajouter « "+k+" » aux jeux",fn:b=>{sel.add(k);save("sel3",[...sel]);b.textContent="✅ Ajouté aux jeux";b.disabled=true;speak("Super ! Le son "+sndSay(k)+" est maintenant dans tous les jeux.")}});
  const again=body.querySelector(".row button");if(again)again.textContent="🔊 Autres sons";
}
function stepDiscover(box,L){
  const dj=document.createElement("img");dj.src=DJ.turn;dj.className="djimg";dj.dataset.pose="turn";dj.alt="Miam DJ";dj.style.cssText="display:block;margin:0 auto 6px;width:min(150px,40vw)";box.appendChild(dj);
  const big=el("button","vinyl bigvin",`<span>${S.k}</span>`);big.style.setProperty("--lab",VLAB[Object.keys(LESSONS).indexOf(S.k)%VLAB.length]);
  big.onclick=async()=>{big.classList.add("spin");await playSnd(S.k);big.classList.remove("spin")};
  box.appendChild(big);
  const kl=el("p","keyline","comme dans ");
  const kb=el("button","card",hl(L.key[0])+" "+L.key[1]);kb.onclick=()=>speak(plain(L.key[0]));kl.appendChild(kb);box.appendChild(kl);
  box.appendChild(el("p","instr","Écoute ces mots 👇"));
  const ex=el("div","ex");
  shuffle(L.yes).slice(0,4).forEach(([w,e])=>{const b=el("button","card exw",hl(w)+" "+e);b.onclick=()=>{SFX.tap();speak(plain(w))};ex.appendChild(b)});
  box.appendChild(ex);
  const go=el("button","card btn","Je suis prêt ! →");go.onclick=()=>{SFX.yes();nextStep()};
  const c=el("div","center");c.appendChild(go);box.appendChild(c);
  seq(["Voici le son",{snd:S.k},"comme dans "+plain(L.key[0])]);
}
function stepEar(box,L){
  if(!S.items)S.items=shuffle(shuffle(L.yes).slice(0,3).map(x=>({w:x,y:true})).concat(shuffle(L.no).slice(0,3).map(x=>({w:x,y:false}))));
  if(S.i>=S.items.length)return nextStep();
  const it=S.items[S.i],word=plain(it.w[0]);S.locked=false;
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("wink",`Est-ce que tu entends <span class="snd">${S.k}</span> ?`));
  const pic=el("button","bigpic",it.w[1]);pic.setAttribute("aria-label","Réécouter");pic.onclick=()=>speak(word);box.appendChild(pic);
  if(!hasVoice)box.appendChild(el("p","eq",`<small>Adulte, dites « ${word} »</small>`));
  const yn=el("div","yn"),yes=el("button","card","👂 Oui"),no=el("button","card","🙉 Non");
  const msg=el("p","msg");msg.setAttribute("aria-live","polite");
  const answer=async(b,val)=>{
    if(S.locked)return;
    if(val===it.y){
      S.locked=true;SFX.yes();b.classList.add("good");addStar();sonLog(S.ie||0);S.ie=0;
      const[x,y]=centerOf(b);sparks(x,y,10,["⭐","✨"]);
      msg.innerHTML=it.y?`Oui ! ${hl(it.w[0])}`:`Bravo ! Pas de « ${S.k} » dans ${word}.`;
      it.y?speak("Oui ! "+word):seq(["Bravo, il n'y a pas de",{snd:S.k},"dans "+word]);
      await wait(1700);S.i++;stepEar(box,L);
    }else{
      S.ie=(S.ie||0)+1;SFX.no();b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500);
      msg.textContent="Écoute encore…";speak("Écoute bien : "+word);
    }
  };
  yes.onclick=()=>answer(yes,true);no.onclick=()=>answer(no,false);
  yn.append(yes,no);box.appendChild(yn);box.appendChild(msg);
  setTimeout(()=>S.i===0?seq(["Est-ce que tu entends",{snd:S.k},"dans ce mot ?",word]):speak(word),250);
}
function stepSee(box,L){
  const yesW=shuffle(L.yes).slice(0,3),noW=shuffle(L.noSee||L.no).slice(0,3);
  const all=shuffle(yesW.map(w=>({w,y:true})).concat(noW.map(w=>({w,y:false}))));
  let found=0;
  box.innerHTML="";
  box.appendChild(djRow("point",`Touche les 3 mots où tu vois <span class="snd">${S.k}</span>`));
  const g=el("div","seegrid"),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  all.forEach(it=>{
    const b=el("button","card seew",plain(it.w[0]));
    b.onclick=async()=>{
      if(b.classList.contains("found"))return;
      if(it.y){
        b.classList.add("found","good");b.innerHTML=hl(it.w[0])+" "+it.w[1];SFX.yes();addStar();sonLog(S.ie||0);S.ie=0;speak(plain(it.w[0]));found++;
        msg.textContent=found<3?"Bien vu ! Encore "+(3-found)+"…":"Tu les as tous trouvés !";
        if(found===3){await settle(900);nextStep()}
      }else{
        S.ie=(S.ie||0)+1;SFX.no();b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),500);
        msg.textContent="Regarde bien les lettres…";seq([plain(it.w[0])+".","Pas de",{snd:S.k},"ici."]);
      }
    };
    g.appendChild(b);
  });
  box.appendChild(g);box.appendChild(msg);
  seq(["Trouve les mots où tu vois",{snd:S.k}]);
}
function stepSyl(box,L){
  if(!S.items)S.items=shuffle(L.syl);
  if(S.i>=S.items.length)return nextStep();
  const trio=S.items[S.i],t=trio[0];S.locked=false;
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  const djs=document.createElement("img");djs.src=DJ.turn;djs.className="djimg";djs.dataset.pose="turn";djs.alt="Miam DJ";djs.style.cssText="display:block;margin:0 auto 4px;width:min(130px,36vw)";box.appendChild(djs);
  const spk=el("button","card btn",'🔊 Écoute');spk.style.cssText="display:block;margin:0 auto 14px";spk.onclick=()=>speak(sayStr(t));box.appendChild(spk);
  if(!hasVoice)box.appendChild(el("p","eq",`<small>Adulte, dites « ${t} »</small>`));
  const ch=el("div","choices"),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  shuffle(trio).forEach(o=>{
    const b=el("button","vinyl",`<span>${o}</span>`);b.style.setProperty("--lab",VLAB[(S.items.indexOf(trio)+trio.indexOf(o))%VLAB.length]);
    b.onclick=async()=>{
      if(S.locked||b.disabled)return;
      if(o===t){S.locked=true;SFX.yes();b.classList.add("good");addStar();sonLog(S.ie||0);S.ie=0;const[x,y]=centerOf(b);sparks(x,y);
        msg.textContent=rnd(PRAISE.filter(p=>!p.startsWith("Miam")));speak(sayStr(t));
        await wait(1400);S.i++;stepSyl(box,L);if(S.i<S.items.length)setTimeout(()=>speak(sayStr(S.items[S.i][0])),200);}
      else{S.ie=(S.ie||0)+1;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="« "+o+" »… Écoute encore.";speak(sayStr(o))}
    };
    ch.appendChild(b);
  });
  box.appendChild(ch);box.appendChild(msg);
  if(S.i===0)speak("Trouve la syllabe : "+sayStr(t));
}
function stepRead(box,L){
  if(!S.items)S.items=shuffle(L.yes).slice(0,4);
  if(S.i>=S.items.length)return nextStep();
  const w=S.items[S.i];S.locked=false;
  const others=shuffle(L.yes.filter(x=>x!==w)).slice(0,1).concat(shuffle(L.no).slice(0,1));
  box.innerHTML="";box.appendChild(dotsN(S.i,S.items.length));
  box.appendChild(djRow("point","Lis le mot et trouve l'image"));
  box.appendChild(el("div","lessonword",hl(w[0])));
  const help=el("button","card help",hasVoice?"🔊 Écouter le mot":"Mot pour l'adulte : "+plain(w[0]));help.onclick=()=>speak(plain(w[0]));box.appendChild(help);
  const pics=el("div","choices"),msg=el("p","msg");msg.setAttribute("aria-live","polite");
  shuffle([w,...others]).forEach(o=>{
    const b=el("button","plate",o[1]);
    b.onclick=async()=>{
      if(S.locked||b.disabled)return;
      if(o===w){S.locked=true;SFX.yes();b.classList.add("good");addStar();sonLog(S.ie||0);S.ie=0;const[x,y]=centerOf(b);sparks(x,y);
        msg.textContent="Oui ! « "+plain(w[0])+" »";speak(plain(w[0]));await wait(1500);S.i++;stepRead(box,L);}
      else{S.ie=(S.ie||0)+1;SFX.no();b.classList.add("bad");b.disabled=true;msg.textContent="Relis doucement…";speak("Relis doucement.")}
    };
    pics.appendChild(b);
  });
  box.appendChild(pics);box.appendChild(msg);
}
function dotsN(n,total){const d=el("div","dots");for(let i=0;i<total;i++)d.appendChild(el("span",i<n?"done":""));return d}

/* ---------- Chenille : où est le son ? ---------- */
const C={round:0,last:null,locked:false,err:0};
const CAT_HEAD=`<svg viewBox="0 0 70 70" aria-hidden="true">
 <line x1="26" y1="14" x2="18" y2="0" stroke="#4E9E44" stroke-width="4" stroke-linecap="round"/><circle cx="17" cy="0" r="5" fill="#FF8B3D"/>
 <line x1="44" y1="14" x2="52" y2="0" stroke="#4E9E44" stroke-width="4" stroke-linecap="round"/><circle cx="53" cy="0" r="5" fill="#FF8B3D"/>
 <circle cx="35" cy="38" r="30" fill="#7BC96F" stroke="#4E9E44" stroke-width="3"/>
 <circle cx="25" cy="33" r="8" fill="#fff"/><circle cx="45" cy="33" r="8" fill="#fff"/>
 <circle cx="24" cy="35" r="4" fill="#2B1B3A"/><circle cx="44" cy="35" r="4" fill="#2B1B3A"/>
 <circle cx="18" cy="47" r="5" fill="#FF6F91" opacity=".5"/><circle cx="52" cy="47" r="5" fill="#FF6F91" opacity=".5"/>
 <path d="M26 50 Q35 58 44 50" stroke="#2B5E26" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`;
const CAT_V=["a","i","o","u","é","è","ê","ou","on","an","en","oi","eu","in","un","ai","au","eau","ain","oin"];
/* bébés = sons prononcés de chaque syllabe (le e muet après une voyelle ne compte pas) */
function babies(w){return w.s.map(g=>g.filter((x,i)=>!(x==="e"&&i>0&&VOY.includes(g[i-1]))))}
function catOK(w){
  if(w.s.length<2) return false;
  const last=w.s[w.s.length-1];
  if(last[last.length-1]==="e"&&!VOY.includes(last[last.length-2]||"")) return false; // lune, table : e muet final
  return catTargets(w).length>0;
}
function catTargets(w){const f=babies(w).flat();return CAT_V.filter(v=>f.filter(x=>x===v).length===1)}
function startCat(){C.round=0;C.first=true;nextCat()}
function nextCat(){
  const body=$("cBody"),lvl=lv("chenille").lvl;
  let av=availWords().filter(w=>catOK(w)&&(!w.bank||w.us.includes("j")));
  if(progAuto()&&PROG){av=WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&catOK(w)&&(!w.bank||w.us.includes("j"))&&w.s.length<=(lvl===1?2:3));if(earI()>=5){const k=av.filter(knownW);if(k.length>=2)av=k}}
  if(lvl===1){const e=av.filter(w=>babies(w).every(b=>b.length<=2)&&catTargets(w).some(v=>["a","i","o","u","é"].includes(v)));if(e.length>=2)av=e}
  if(!av.length) return notEnough(body,"Il faut des mots d'au moins deux syllabes. Ajoutez des sons ou des structures (CVCV…) dans les réglages.");
  if(C.round>=ROUNDS) return party(body,startCat,"La chenille a retrouvé tous ses bébés !");
  const w=pickWord(av,lvl,C.last);
  let tg=catTargets(w);if(lvl===1){const e=tg.filter(v=>["a","i","o","u","é"].includes(v));if(e.length)tg=e}
  const t=rnd(tg);C.last=w.w;C.locked=false;C.err=0;
  const B=babies(w);
  const sayT=ALONE[t];
  const ask=(intro)=>{
    if(hasVoice){try{speechSynthesis.cancel()}catch(e){}}
    seq([...(intro?[intro]:[]),"Où est le son",{snd:t},"dans le mot",{t:w.w,slow:true}]);
  };
  body.innerHTML="";body.appendChild(head("chenille",C.round));
  const bub=el("button","bubble",`<span class="wordpic">${w.e||"🔊"}</span>🔊 ${hasVoice?"Écoute":"Adulte, lisez la question"}`);
  bub.style.margin="0";bub.classList.add("solo");bub.onclick=()=>ask();
  const jtop=el("div","jtop");const s1=document.createElement("img");s1.src=J_SUN;s1.className="jdeco";s1.alt="";const s2=document.createElement("img");s2.src=J_CAN;s2.className="jdeco can";s2.alt="";
  jtop.append(s1,bub,s2);body.appendChild(jtop);
  body.appendChild(el("p","catq",`Où est <span class="snd">${t}</span> ?`));
  const cat=el("div","cat"),chead=el("div","jhead",`<img src="${JHEAD.joie}" alt="La chenille">`);cat.appendChild(chead);
  const face=(k,back)=>{chead.querySelector("img").src=JHEAD[k];chead.classList.remove("bounce");void chead.offsetWidth;chead.classList.add("bounce");if(back)setTimeout(()=>{chead.querySelector("img").src=JHEAD.joie},back)};
  const nB=B.flat().length,avail=Math.min(body.clientWidth||330,600)-64-B.length*26;
  cat.style.setProperty("--b",Math.max(28,Math.min(52,Math.floor(avail/(nB*1.1))-4))+"px");
  const msg=el("p","msg");msg.setAttribute("aria-live","polite");
  const segs=[],all=[];
  B.forEach((g,si)=>{
    const seg=el("div","cseg");seg.style.setProperty("--segimg",`url(${JSEG[si%JSEG.length]})`);segs.push(seg);
    g.forEach(ph=>{
      const b=el("button","baby","");b.setAttribute("aria-label","Bébé");all.push([b,ph]);
      b.onclick=async()=>{
        if(C.locked||b.classList.contains("hit")||C.phase!=="find")return;
        if(ph===t){
          C.locked=true;SFX.yes();face("rire");b.classList.add("hit","show","t");b.textContent=ph;addStar();progress("chenille",C.err,{gs:[t]});logA({g:"chenille",lv:lv("chenille").lvl,nc:all.length,it:w.w,tg:t,gs:[t],ok:1,f:C.err?0:1,n:C.err+1,src:"phono"});
          const[x,y]=centerOf(b);sparks(x,y,14);
          msg.innerHTML=`Bravo ! « ${t} » est dans le ${["1er","2e","3e","4e"][si]} corps.`;
          speak("Bravo !");
          await wait(700);
          all.forEach(([bb,p])=>{bb.classList.add("show");bb.textContent=p;if(p===t)bb.classList.add("t")});
          {const P=phSeq(w);if(P&&P.length===all.length){for(let j=0;j<P.length;j++){const bb=all[j][0];bb.classList.add("sing");await playSnd(P[j].k);bb.classList.remove("sing")}}}
          for(let i=0;i<segs.length;i++){segs.forEach(sg=>sg.classList.remove("lit"));segs[i].classList.add("lit");speak(spoken(w.s[i]),true,true);await wait(1000)}
          segs.forEach(sg=>sg.classList.remove("lit"));speak(w.w,true,true);
          await settle(800);C.round++;nextCat();
        }else{
          C.err++;SFX.no();face("triste",1400);b.classList.remove("bad");void b.offsetWidth;b.classList.add("bad");setTimeout(()=>b.classList.remove("bad"),450);
          msg.textContent="Pas ce bébé-là… Écoute les syllabes.";
          speak("Écoute bien.");
          for(let i=0;i<segs.length;i++){segs.forEach(sg=>sg.classList.remove("lit"));segs[i].classList.add("lit");speak(spoken(w.s[i]),true,true);await wait(1000)}
          segs.forEach(sg=>sg.classList.remove("lit"));seq(["Où est",{snd:t}]);
        }
      };
      seg.appendChild(b);
    });
    cat.appendChild(seg);
  });
  body.appendChild(cat);
  const again=el("div","rocketbar");
  const bS=el("button","card help",`🔊 Le son <b class="snd">${t}</b>`);bS.style.margin="0";bS.onclick=()=>playSnd(t);
  const bW=el("button","card help","🔊 Le mot");bW.style.margin="0";bW.onclick=()=>speak(w.w,false,true);
  again.append(bS,bW);body.appendChild(again);
  const help=el("button","card help","🧩 Écouter les syllabes");help.dataset.hint="1";
  help.onclick=async()=>{for(let i=0;i<segs.length;i++){segs.forEach(sg=>sg.classList.remove("lit"));segs[i].classList.add("lit");speak(spoken(w.s[i]),i>0,true);await wait(1000)}segs.forEach(sg=>sg.classList.remove("lit"))};
  body.appendChild(help);body.appendChild(msg);
    /* Étape 1 : compter les syllabes ; les corps de la chenille apparaissent ensuite */
  C.phase="count";cat.classList.add("counting");segs.forEach(sg=>sg.classList.add("hid"));help.hidden=true;again.hidden=true;
  const q=body.querySelector(".catq");q.innerHTML="Combien de syllabes ?";
  const nums=el("div","catnums"),nmax=Math.max(4,B.length);let cErr=0;
  for(let k=1;k<=nmax;k++){const nb=el("button","card catnum",String(k));nb.onclick=async()=>{
    if(C.phase!=="count")return;
    if(k===B.length){
      C.phase="reveal";SFX.yes();face("clin",2500);nb.classList.add("good");
      logA({g:"chenille",lv:lv("chenille").lvl,nc:nmax,it:w.w,ns:B.length,etape:"compter",ok:1,f:cErr?0:1,n:cErr+1,src:"syllabes"});
      for(let i=0;i<segs.length;i++){segs[i].classList.remove("hid");segs[i].classList.add("popin");speak(spoken(w.s[i]),i>0,true);await wait(900)}
      if(earI()<5){addStar();progress("chenille",cErr,null);msg.textContent=B.length+" syllabe"+(B.length>1?"s":"")+" : "+B.length+" corps pour la chenille !";speak(w.w,true,true);await settle(900);C.round++;return nextCat()}
      nums.remove();cat.classList.remove("counting");help.hidden=false;again.hidden=false;
      q.innerHTML=`Où est <span class="snd">${t}</span> ?`;C.phase="find";
      msg.textContent=B.length+" syllabes, "+B.length+" corps ! Maintenant, trouve le bébé.";
      setTimeout(()=>ask(),400);
    }else{
      cErr++;SFX.no();face("oh",1500);nb.classList.add("bad");setTimeout(()=>nb.classList.remove("bad"),450);
      msg.textContent="Écoute et tape dans tes mains à chaque syllabe…";
      seq(["Écoute bien :",...w.s.map(g=>({t:spoken(g),slow:true})),"Combien de syllabes ?"]);
    }
  };nums.appendChild(nb)}
  cat.after(nums);
  const askCount=intro=>seq([...(intro?[intro]:[]),"Écoute :",{t:w.w,slow:true},"Combien de syllabes dans ce mot ?"]);
  bub.onclick=()=>C.phase==="count"?askCount():ask();
  if(C.first){C.first=false;askCount("Chaque corps de la chenille est une syllabe du mot, et chaque bébé est un son.")}
  else setTimeout(()=>askCount(),300);
}

/* ---------- Suivi des apprentissages ---------- */
let ST=load("stats",{}),WS=load("wstats",{});
function track(item,errs){
  if(!item)return;const ok=errs===0?1:0,now=Date.now();
  const gs=[...new Set((item.gs||[]).filter(g=>g&&(g!=="e"||item.keepE)))];
  gs.forEach(g=>{const r=ST[g]||(ST[g]={n:0,ok:0,r:[],d:0});r.n++;r.ok+=ok;r.r.push(ok);if(r.r.length>12)r.r.shift();r.d=now});
  if(item.word){const r=WS[item.word]||(WS[item.word]={n:0,ok:0,d:0});r.n++;r.ok+=ok;r.d=now;if(item.help!=null){r.h=r.h||[0,0,0];r.h[item.help]++}}
  save("stats",ST);save("wstats",WS);
}
/* Historique détaillé de chaque essai (sert à toutes les analyses) */
let LOG=load("log",[]);
function logA(e){
  e.t=Date.now();LOG.push(e);
  if(LOG.length>4000)LOG.splice(0,LOG.length-4000);
  save("log",LOG);
  try{if(progAuto()&&PROG)progCheck()}catch(err){errLog(err,"progression")}
  try{earCheck()}catch(err){errLog(err,"oreille")}
}
function sonLog(errs){
  try{djCheer()}catch(e){}
  track({gs:[S.k]},errs);
  const step=S.step,direct=step>=2;
  logA({g:"sons",lv:0,it:S.k,tg:S.k,gs:[S.k],nc:[3,2,3,3,3][step]||3,etape:["","écoute","repérage","syllabe","lecture"][step],ok:1,f:errs?0:1,n:errs+1,dg:direct?[[S.k,errs?0:1]]:undefined,src:direct?"direct":"phono"});
}
/* ----- Maîtrise de chaque son (tous jeux confondus) ----- */
const nk=g=>PH_MAP[g]||g;
function evidence(e){
  if(e.dg&&e.dg.length)return e.dg.map(x=>[x[0],x[1]]);
  const ok=e.f&&!e.h?1:0;
  if(e.gs&&e.gs.length)return [...new Set(e.gs.filter((g,i,a)=>!(g==="e"&&i>0&&i===a.length-1)))].map(g=>[g,ok]);
  if(e.etape==="son-initial"&&e.tg)return [[e.tg,ok]];
  return [];
}
let _ssN=-1,_ss={};
function soundStats(){
  if(_ssN===LOG.length)return _ss;
  const S={};
  const dirOf=e=>["ecouter","ecrire","fusee"].includes(e.g)||(e.g==="sons"&&e.etape==="lettre")?"s2g":["musee","lire","train"].includes(e.g)?"g2s":null;
  LOG.forEach(e=>{if(e.test)return;evidence(e).forEach(([g,ok])=>{const k=nk(g);const r=S[k]||(S[k]={n:0,f:0,r:[],games:new Set(),days:new Set(),dirs:new Set(),last:0});r.n++;
    if(ok){r.f++;r.games.add(e.g+(e.etape||""));r.days.add(DAY(e.t));const d=dirOf(e);if(d)r.dirs.add(d);r.last=e.t}r.r.push(ok?1:0);if(r.r.length>8)r.r.shift()})});
  _ssN=LOG.length;_ss=S;return S;
}
function soundLevel(g){if(RARE_SND.has(g))return {n:0,f:5,acc:1,ok:true,st:"acquis"};const s=compStatus("son",nk(g));
  return {n:s.n,f:s.score,acc:s.rate==null?0:s.rate,last:s.last,days:s.days,dirs:s.ctx,st:s.st,ok:stAtLeast(s.st,"consolide")}}
const isSylEntry=e=>["ecouter","lire","ecrire"].includes(e.g)&&(e.st==="CV"||e.st==="VC");
const isReadEntry=e=>["lire","musee","fusee","train","ecrire"].includes(e.g)&&e.gs&&e.gs.length>=2;
const wordOf=e=>WORDS.find(x=>x.w===e.it);
/* ===== Progression dans la séance ≠ maîtrise à long terme =====
   Trois niveaux : découvert aujourd'hui → accessible pendant la séance → consolidé / acquis avec le temps.
   Le son suivant peut s'ouvrir AUJOURD'HUI dès que chaque son de l'étape a été « suffisamment compris pour continuer » :
   3 réussites autonomes (3 choix ou plus, sans aide) en son-lettre aujourd'hui, avec au moins 75 % de réussite aujourd'hui.
   Ce statut n'est PAS « consolidé » : la grille de maîtrise V1.4 continue séparément (plusieurs jours, rappel différé).
   Un son consolidé compte évidemment comme compris. On ne referme jamais un son déjà découvert. */
const SESS=PEDA.seance;   /* au plus 2 nouvelles étapes par jour : le lendemain, le rappel vérifie avant d'aller plus loin */
const stepsToday=()=>{const d=DAY(Date.now());return ((PROG&&PROG.hist)||[]).filter(h=>h.auto&&DAY(h.t)===d).length};
const todayRecs=(c,k)=>{const d=DAY(Date.now());MST();return (_m[c+"|"+(k||"")]||[]).filter(r=>DAY(r.t)===d)};
/* Preuves de la séance : son-lettre, syllabes ou lecture de mots contenant ce son (au stade « mots », la lecture est la preuve naturelle) */
function sessOK(c,k){const R=c==="son"?["son","fus","lec"].flatMap(x=>todayRecs(x,k)):todayRecs(c,k);if(!R.length)return false;const good=R.filter(r=>r.ok&&r.w>=1).length,rate=R.filter(r=>r.ok).length/R.length;return good>=SESS.n&&rate>=SESS.rate}
/* Fragilité au rappel : un son récent pas encore consolidé, essayé au moins 2 fois aujourd'hui avec moins de 60 % de réussite.
   Tant qu'un son récent est fragile, on n'ouvre pas de nouveau son : on le remet plus souvent dans la séance (focusG). */
function fragileG(){
  const out=[],cur=new Set(curStep().add.map(nk));
  recentKeys().forEach(k=>{if(cur.has(k))return;const c=compStatus("son",k);if(stAtLeast(c.st,"consolide"))return;
    const R=["son","fus","lec"].flatMap(x=>todayRecs(x,k));if(R.length>=PEDA.fragile.essais&&R.filter(r=>r.ok).length/R.length<PEDA.fragile.rate)out.push(k)});
  return out;
}
function stepState(i,infer){
  const st=CURRIC[i],since=infer?0:((PROG&&PROG.since)||0);
  const E=LOG.filter(e=>e.t>=since&&e.f&&!e.h);
  const lots=!infer&&E.length>=60;      /* filet de sécurité : un son sans aucune activité directe ne bloque pas tout */
  const snd=st.add.map(g=>{const l=soundLevel(g),sess=!infer&&!RARE_SND.has(g)&&sessOK("son",nk(g));
    return {g,...l,sess,need:CRIT.son.n,done:l.ok||sess||(lots&&l.n<3)}});
  let need=0,have=0;
  if(st.p==="syl"){const ks=[...progSounds(i)].map(nk);need=1;
    const fusToday=infer?0:ks.reduce((a,k)=>a+todayRecs("fus",k).filter(r=>r.ok&&r.w>=1).length,0);
    have=(ks.some(k=>stAtLeast(compStatus("fus",k).st,"consolide"))||fusToday>=SESS.n)?1:0}
  const frag=infer?[]:fragileG(),capped=!infer&&stepsToday()>=SESS.maxSteps;
  return {snd,need,have,frag,capped,done:snd.every(x=>x.done)&&have>=need&&!frag.length&&!capped};
}
/* ===================== Maîtrise par compétence (Miamots_maitrise_V1-3) =====================
   Compétences par son : son = son-lettre · fus = fusion syllabique · lec = lecture de mots · ecr = écriture.
   À part : ear = l'oreille (7 marches) · emf = e muet final (orthographe).
   Statuts : non_vu → decouverte → en_pratique → consolide → acquis (rappel différé réussi). */
const ST_ORD=["non_vu","decouverte","en_pratique","consolide","acquis"];
const stAtLeast=(s,m)=>ST_ORD.indexOf(s)>=ST_ORD.indexOf(m);
const CRIT=PEDA.maitrise;
const RECALL_MS=PEDA.rappelDiffereJours*864e5;
/* Activités binaires par nature (pareil / différent) : 2 réussites à 2 choix valent une réussite complète */
const BINARY_OK=new Set(["ear|disc"]);
let _rank=null;
function gRank(g){if(!_rank){_rank={};CURRIC.forEach((s,i)=>s.add.forEach(x=>{const k=nk(x);if(_rank[k]==null)_rank[k]=i}))}const r=_rank[nk(g)];return r==null?99:r}
function targetOf(gs){let b=null,r=-1;gs.forEach(g=>{const x=gRank(g);if(x<99&&x>r){r=x;b=g}});return b}
const autoOK=e=>!!(e.f&&!e.h);
const wNC=e=>e.nc==null?1:e.nc>=3?1:e.nc===2?.5:0;          /* hasard : 2 choix = 0,5 ; 1 choix = 0 */
const EAR2={"pareil-different":"disc","fusion-syllabes":"fsyl","rimes":"rime","son-initial":"init","son-ecoute":"init","son-image":"init","fusion-auditive":"fus","écoute":"init","repérage":"init"};
const cleanG=gs=>[...new Set((gs||[]).filter((g,i,a)=>g&&!(g==="e"&&i>0&&i===a.length-1)))];
/* Une entrée du journal → les compétences qu'elle prouve (selon le mode exact de l'activité) */
function classify(e){
  const out=[],ok=autoOK(e)?1:0,w=wNC(e);
  const P=(c,g,o)=>out.push(Object.assign({c,g:g==null?"":(c==="ear"?g:nk(g)),it:e.it,ok,w,t:e.t,game:e.g,ctx:e.g+":"+(e.md||e.src||e.etape||""),direct:true},o||{}));
  /* réussite : tous les graphèmes non muets ; erreur : seulement le graphème ciblé (le plus récent du mot) */
  const credit=(c,gs,o)=>{gs=cleanG(gs);if(!gs.length)return;if(ok)gs.forEach(g=>P(c,g,o));else{const t=targetOf(gs);if(t)P(c,t,o)}};
  const gs=e.gs||[];
  switch(e.g){
    case "ecouter":if(e.st==="L")P("son",gs[0]);else credit("fus",gs);break;
    case "musee":if(e.src==="lettre-image")P("son",gs[0]);else if(e.src==="decode")credit("lec",gs);break;
    case "lire":if(e.src==="phrase")P("phr","");else if(e.src==="decode")credit("lec",gs);else if(["syllabe-entendue","syllabe-initiale","chemin"].includes(e.src))credit("fus",gs);break;
    case "fusee":if(e.src==="decode")credit("lec",gs);break;
    case "train":credit("lec",gs,{direct:false});break;
    case "ecrire":{const md=e.md||(e.src==="encodage"?"mot":(cleanG(gs).length===1&&e.ns===1&&(e.it||"").length<=2&&!VOY.includes(e.it)?"lettre":"syllabe"));
      if(md==="lettre")P("son",gs[0],{ctx:"ecrire:lettre"});
      else if(md==="syllabe"){credit("fus",gs);cleanG(gs).forEach(g=>P("son",g,{ctx:"ecrire:syllabe"}));credit("ecr",gs)}
      else credit("ecr",gs);break}
    case "sons":{const et=e.etape;
      if(et==="lettre")P("son",e.tg||gs[0],{ctx:"sons:lettre"});
      else if(et==="e-muet")P("emf","");
      else if(et==="syllabe")credit("fus",gs.length?gs:[e.tg]);
      else if(et==="lecture")credit("lec",gs.length?gs:[e.tg]);
      else if(EAR2[et])P("ear",EAR2[et]);
      break}
    case "chenille":P("ear",e.etape==="compter"?"syl":"dans");break;
  }
  return out;
}
let _mN=-1,_m={},_stC={};
function MST(){
  if(_mN===LOG.length)return _m;
  const M={};LOG.forEach(e=>{if(e.test)return;try{classify(e).forEach(r=>{const k=r.c+"|"+r.g;(M[k]=M[k]||[]).push(r)})}catch(err){errLog(err,"maîtrise:"+e.g)}});
  _mN=LOG.length;_m=M;_stC={};return M;
}
const KEY_INTRO=k=>{try{const S=progAuto()&&PROG?progSounds():sel;return [...S].some(g=>nk(g)===k)}catch(e){return false}};
function compStatus(c,g){
  const key=c+"|"+(g||"");MST();const ck=key+"@"+progI()+"/"+sonsDone.length;if(_stC[ck])return _stC[ck];
  const R=(_m[key]||[]).slice().sort((a,b)=>a.t-b.t),cr=CRIT[c]||CRIT.ear,bin=BINARY_OK.has(key);
  let seen=R.length>0||(c==="son"&&(KEY_INTRO(g)||sonsDone.some(x=>nk(x)===g)))||(c==="emf"&&sonsDone.includes("emuet"));
  const res={c,g,st:seen?"decouverte":"non_vu",score:0,need:cr.n,days:0,items:0,ctx:0,games:0,rate:null,tc:null,ta:null,last:0,n:R.length,due:false};
  if(!R.length)return _stC[ck]=res;
  let score=0,full=0;const days=new Set(),items=new Set(),ctx=new Set(),games=new Set(),recent=[];
  for(const r of R){
    recent.push(r.ok);if(recent.length>10)recent.shift();
    if(r.ok&&r.w>0){score+=r.w;if(r.w>=1)full++;days.add(DAY(r.t));if(r.it!=null)items.add(r.it);if(r.direct){ctx.add(r.ctx);games.add(r.game)}res.last=r.t}
    if(res.tc==null){
      const rate=recent.length>=5?recent.reduce((a,b)=>a+b,0)/recent.length:null;
      const okN=score>=cr.n&&(bin||full>=Math.ceil(cr.n/2));
      if(okN&&days.size>=(cr.days||1)&&(!cr.items||items.size>=cr.items)&&(!cr.ctx||ctx.size>=cr.ctx)&&(!cr.games||["lire","musee","fusee"].filter(x=>games.has(x)).length>=cr.games)&&(!cr.rate||(rate!=null&&rate>=cr.rate)))res.tc=r.t;
    }
  }
  Object.assign(res,{score:Math.round(score*10)/10,days:days.size,items:items.size,ctx:ctx.size,games:["lire","musee","fusee"].filter(x=>games.has(x)).length});
  const rec=recent.length?recent.reduce((a,b)=>a+b,0)/recent.length:null;res.rate=rec;
  if(res.tc==null){res.st=R.some(r=>r.ok)?"en_pratique":"decouverte";return _stC[ck]=res}
  res.st="consolide";
  /* rappel différé : au moins 3 jours après la consolidation, avec des items différents si possible */
  const RC=R.filter(r=>r.t>=res.tc+RECALL_MS),okR=RC.filter(r=>r.ok);
  const needItems=c==="lec"||c==="fus"?2:1;
  if(okR.length>=2&&new Set(okR.map(r=>r.it)).size>=needItems){res.st="acquis";res.ta=okR[1].t;
    const last3=RC.slice(-3);if(last3.length===3&&last3.filter(r=>!r.ok).length>=2)res.st="consolide";   /* 2 rappels ratés sur 3 */
  }
  if(res.st==="consolide"){
    const autoRecent=R.slice(-10);if(autoRecent.length>=5&&autoRecent.filter(r=>r.ok).length/autoRecent.length<.6)res.st="en_pratique";
    else res.due=Date.now()-res.tc>=RECALL_MS;
  }
  return _stC[ck]=res;
}
/* Profil du lecteur : sert seulement à choisir le parcours du jour */
const ST_ICON={non_vu:["⚪","non vu"],decouverte:["👀","découverte"],en_pratique:["🟡","en pratique"],consolide:["🟢","consolidé"],acquis:["⭐","acquis"]};
const PROF_N={grand_debutant:"Grand débutant",lecteur_debutant:"Lecteur débutant",lecteur_en_developpement:"Lecteur en développement"};
/* Résumé parent : une ligne lisible au-dessus du tableau détaillé */
function domainLabel(sts){
  const seen=sts.filter(s=>s.n>0);if(!seen.length)return "pas encore commencée";
  const f=sts.filter(s=>stAtLeast(s.st,"consolide")).length/sts.length,p=sts.filter(s=>stAtLeast(s.st,"en_pratique")).length/sts.length;
  return f>=.75?"solide":f>=.4?"avance bien":(p>=.3||f>0)?"en développement":"débute";
}
function parentSummary(rows){
  const solid=[],cons=[],rev=[];
  const weak=s=>s.due||(s.rate!=null&&s.n>=5&&s.rate<.6);
  rows.forEach(([g,k])=>{const cs=["son","fus","lec","ecr"].map(c=>compStatus(c,k)),so=cs[0];
    if(cs.some(weak))rev.push(g);else if(stAtLeast(so.st,"consolide"))solid.push(g);else if(so.st==="en_pratique"||(so.st==="decouverte"&&so.n>0))cons.push(g)});
  const pl=(n,a,b)=>n+" "+(n>1?b:a);
  const parts=[pl(solid.length,"son solide","sons solides"),pl(cons.length,"en consolidation","en consolidation")];
  if(rev.length)parts.push(rev.length+" à revoir");
  const phrS=compStatus("phr",""),PHR_LAB={non_vu:"pas encore commencées",decouverte:"débutent",en_pratique:"en développement",consolide:"avancent bien",acquis:"solides"};
  const SI={"solide":"solide","solides":"solide","avance bien":"avance-bien","avancent bien":"avance-bien","en développement":"en-developpement"};
  const ico=l=>SI[l]?`<i class="si si-${SI[l]}"></i>`:"";
  const lec=domainLabel(rows.map(([g,k])=>compStatus("lec",k))),ecr=domainLabel(rows.map(([g,k])=>compStatus("ecr",k))),ear=domainLabel(OREILLE.map(o=>compStatus("ear",o.k)));
  return `<div class="psum"><div class="psum1"><i class="si si-chemin-progression"></i><span class="pv">En ce moment :</span> ${parts.join(" · ")}</div><div class="psum2"><span class="pd">Lecture : ${ico(lec)}<span class="pv">${lec}</span></span> <span class="pd">Écriture : ${ico(ecr)}<span class="pv">${ecr}</span></span> <span class="pd">Oreille : ${ico(ear)}<span class="pv">${ear}</span></span>${phrS.n?` <span class="pd">Phrases : ${ico(PHR_LAB[phrS.st])}<span class="pv">${PHR_LAB[phrS.st]}</span></span>`:""}</div>${rev.length?`<div class="psum3">À revoir : ${rev.map(escH).join(", ")}</div>`:""}</div>`;
}
function masteryCard(){
  const seen=new Set(),rows=[];
  [...(progAuto()&&PROG?progSounds():sel)].forEach(g=>{if(RARE_SND.has(g))return;const k=nk(g);if(seen.has(k))return;seen.add(k);rows.push([g,k])});
  const cell=(c,k)=>{const s=compStatus(c,k);return `<td title="${ST_ICON[s.st][1]}">${ST_ICON[s.st][0]}</td>`};
  let t=`<div class="pcard"><b>🧩 Maîtrise par compétence</b>${parentSummary(rows)}<details class="mdet"><summary>Voir le détail par son</summary><p class="rlegend">Profil : <b>${PROF_N[readerProfile()]}</b>. ⚪ non vu · 👀 découverte · 🟡 en pratique · 🟢 consolidé · ⭐ acquis (rappel réussi après quelques jours). Les réussites avec aide ou à 2 choix comptent moins.</p>
   <table class="mtab"><tr><th>Son</th><th>Son ↔ lettre</th><th>Syllabes</th><th>Lecture de mots</th><th>Écriture</th></tr>`;
  rows.forEach(([g,k])=>{t+=`<tr><td><b>${escH(g)}</b></td>${cell("son",k)}${cell("fus",k)}${cell("lec",k)}${cell("ecr",k)}</tr>`});
  const em=compStatus("emf","");
  const ph=compStatus("phr","");
  t+=`</table><p class="rlegend">✏️ e muet final (écriture) : ${ST_ICON[em.st][0]} ${ST_ICON[em.st][1]}</p>`;
  t+=`<p class="rlegend">📖 Phrases (lire et comprendre) : ${ST_ICON[ph.st][0]} ${ST_ICON[ph.st][1]}${ph.n?"":(()=>{try{return phrOpen()?" — ouvertes":" — s'ouvriront après quelques mots lus seul"}catch(e){return ""}})()}</p>`;
  t+=`<p class="rlegend"><b>👂 L'oreille</b> : `+OREILLE.map(o=>{const s=compStatus("ear",o.k);return ST_ICON[s.st][0]+" "+o.t.replace(/ \(.*\)$/,"")}).join(" · ")+`</p></details></div>`;
  return t;
}
function readerProfile(){
  const keys=[...new Set([...(progAuto()&&PROG?progSounds():sel)].filter(g=>!RARE_SND.has(g)).map(nk))];
  const nSon=keys.filter(k=>stAtLeast(compStatus("son",k).st,"consolide")).length;
  const fusAny=keys.map(k=>compStatus("fus",k).st);
  const fusCons=fusAny.some(s=>stAtLeast(s,"consolide")),fusPr=fusAny.some(s=>stAtLeast(s,"en_pratique"));
  const words=new Set();Object.keys(MST()).filter(k=>k.startsWith("lec|")).forEach(k=>_m[k].forEach(r=>{if(r.ok&&r.direct)words.add(r.it)}));
  const lecCons=keys.filter(k=>stAtLeast(compStatus("lec",k).st,"consolide")).length;
  if(words.size>=10&&lecCons>=2)return "lecteur_en_developpement";
  if(nSon>=5&&(fusPr||fusCons))return "lecteur_debutant";
  return "grand_debutant";
}
/* Leçon du e muet : déclenchée par la compétence, pas par un graphème.
   Il faut quelques mots lus ou écrits seul (4 mots différents), la lecture de mots au moins « en pratique »
   pour un son, et au moins 3 mots en -e entièrement lisibles avec les sons connus. */
const EM_MIN_WORDS=PEDA.emuet.motsLusOuEcrits,EM_MIN_LIST=PEDA.emuet.motsEnE;
function emLessonOpen(){
  if(!(progAuto()&&PROG))return false;
  if(sonsDone.includes("emuet"))return true;
  const M=MST(),words=new Set();
  Object.keys(M).forEach(k=>{if(k.startsWith("lec|")||k.startsWith("ecr|"))M[k].forEach(r=>{if(r.ok&&r.w>0&&r.it)words.add(r.it)})});
  if(words.size<EM_MIN_WORDS)return false;
  const keys=[...new Set([...progSounds()].map(nk))];
  if(!keys.some(k=>stAtLeast(compStatus("lec",k).st,"en_pratique")))return false;
  return emWords().length>=EM_MIN_LIST;
}
/* e muet final : la leçon faite et au moins une réussite autonome ouvrent l'écriture des mots concernés */
const emfReady=()=>sonsDone.includes("emuet")&&stAtLeast(compStatus("emf","").st,"en_pratique");
let PROG_NEW=null;
/* ----- L'oreille : une échelle à part, qui ne bloque jamais le code ----- */
const OREILLE=[
 {k:"disc",t:"Écouter et discriminer (pareil ou différent ?)"},
 {k:"syl",t:"Les syllabes à l'oral (chat ou crocodile : lequel est long ?)"},
 {k:"fsyl",t:"Fusionner des syllabes (la… pin → lapin)"},
 {k:"rime",t:"Les rimes (bateau, gâteau)"},
 {k:"init",t:"Le premier son (sssoleil commence par sss)"},
 {k:"dans",t:"Trouver un son dans le mot (le son a dans lama)"},
 {k:"fus",t:"Fusionner des sons (mmm-ou → mou)"}
];
let EAR=load("ear",null);
/* ancienne échelle (syl, fsyl, rime, init, dans, fus, dec) → nouvelle */
if(EAR&&EAR.i!=null&&EAR.v!==2){EAR.i=[1,2,3,4,5,6,6][Math.min(EAR.i,6)];EAR.v=2;save("ear",EAR)}
const earI=()=>Math.max(0,Math.min(EAR&&EAR.i!=null?EAR.i:0,OREILLE.length-1));
function setEar(i){EAR={i:Math.max(0,Math.min(i,OREILLE.length-1)),since:Date.now(),v:2};save("ear",EAR)}
function earState(){const i=earI(),k=OREILLE[i].k,s=compStatus("ear",k);return {i,k,have:Math.min(s.score,CRIT.ear.n),need:CRIT.ear.n,st:s.st,items:s.items,days:s.days}}
/* une marche est franchie quand sa compétence est consolidée (5 réussites, 4 items, 2 jours) */
function earCheck(){if(!EAR||earI()>=OREILLE.length-1)return;const s=earState();if(stAtLeast(s.st,"consolide"))setEar(s.i+1)}
function progCheck(){
  if(progI()>=CURRIC.length-1)return;
  if(!stepState(progI()).done)return;
  const wasSons=curStep().p==="sons";
  setProgStep(progI()+1);
  try{PROG.hist[PROG.hist.length-1].auto=1;save("prog",PROG)}catch(e){}
  PROG_NEW={st:curStep(),open:wasSons&&curStep().p!=="sons"};
}
/* Première ouverture avec la progression automatique : on trouve l'étape à partir de l'historique */
function progInit(){
  if(!EAR)setEar(PROG&&PROG.i!=null?(PROG.i>=6?4:0):(CFG.etape&&CFG.etape!=="sons"?4:0));
  if(PROG&&PROG.i!=null){applyProg();return}
  let i=0;
  if(LOG.length>=30){while(i<CURRIC.length-1&&stepState(i,true).done)i++}
  else if(CFG.etape==="sons"){i=0;while(i<5&&CURRIC[i].add.every(g=>sel.has(g)))i++}
  if(CFG.etape&&CFG.etape!=="sons"||(!CFG.etape&&LOG.length>=30))i=Math.max(i,6);
  setProgStep(i);
}
function stepAnnounce(p){
  const st=p.st,snd=st.add.filter(g=>hasPh(nk(g))).slice(0,3);
  const box=el("div","newstep",`<b>🌱 ${st.add.length?"Nouveau"+(st.add.length>1?"x sons":" son")+" : "+st.add.slice(0,4).map(g=>"« "+g+" »").join(" "):"Nouvelle étape !"}</b>${p.open?"<small>☁️ Les nuages s'en vont : la gare, la fusée et la bibliothèque sont ouvertes !</small>":""}`);
  const say=async()=>{await waitQuiet(9000);await wait(300);
    speak(st.add.length?"Tu es prêt pour "+(st.add.length>1?"de nouveaux sons !":"un nouveau son !"):"Tu es prêt pour la suite : "+(st.kid||"de nouveaux mots")+" !");
    await waitQuiet(5000);for(const g of snd){await playSnd(nk(g));await wait(250)}
    if(p.open){await wait(300);speak("Et les nuages s'en vont : de nouveaux lieux sont ouverts sur la carte !",true)}};
  box.onclick=()=>{SEQ++;(async()=>{for(const g of snd){await playSnd(nk(g));await wait(200)}})()};
  return {box,say};
}
let ACQ=load("acq",{});
const DAY=t=>new Date(t).toLocaleDateString("fr-CA");
const fmtD=t=>t?new Date(t).toLocaleDateString("fr-CA",{day:"numeric",month:"short"}):"";
const ST3={ok:["⭐","Acquis"],app:["🟡","En consolidation"],none:["⚪","Pas assez observé"]};
/* Évalue une série d'observations {t, ok, w} : plusieurs observations, sur plusieurs jours, en accordant plus de poids au récent */
function evalSeries(key,obs,opt){
  opt=opt||{};obs=obs.slice().sort((a,b)=>a.t-b.t);
  const n=obs.length;
  const r={n,rate:null,days:0,first:n?obs[0].t:0,last:n?obs[n-1].t:0,distinct:0,status:"none",evo:""};
  if(!n)return r;
  const recent=obs.slice(-(opt.win||10));
  if(opt.byWord){
    const per={};recent.forEach(o=>{(per[o.w]=per[o.w]||[]).push(o.ok)});
    const vals=Object.values(per).map(a=>a.reduce((x,y)=>x+y,0)/a.length);
    r.rate=vals.reduce((x,y)=>x+y,0)/vals.length;
    r.distinct=new Set(obs.filter(o=>o.ok).map(o=>o.w)).size;
  }else r.rate=recent.reduce((x,o)=>x+o.ok,0)/recent.length;
  r.days=new Set(obs.filter(o=>o.ok).map(o=>DAY(o.t))).size;
  const minN=opt.minN||6,meets=n>=minN&&r.rate>=.8&&r.days>=2&&(!opt.byWord||r.distinct>=(opt.minWords||4));
  if(meets&&!ACQ[key])ACQ[key]=Date.now();
  if(ACQ[key]&&r.rate<.6&&n>=4)delete ACQ[key];
  r.status=ACQ[key]?"ok":n>=Math.min(4,minN)?"app":"none";
  const now=Date.now();
  if(r.status==="ok")r.evo=now-ACQ[key]>3*864e5&&r.days>=3?"⭐ stable sur plusieurs séances":"✨ vient d'être acquis";
  else if(now-r.first<7*864e5)r.evo="🌱 vient d'apparaître";
  else if(n>=10){const a=obs.slice(-5),b=obs.slice(-10,-5),ra=a.reduce((x,o)=>x+o.ok,0)/5,rb=b.reduce((x,o)=>x+o.ok,0)/5;if(ra>rb+.15)r.evo="📈 en progrès"}
  return r;
}
const pct=x=>x==null?"":Math.round(x*100)+" %";
const SRC_NAMES={musee:"Musée",sons:"Sons",ecouter:"Cuisine",ecrire:"Écrire",lire:"Lire",fusee:"Fusée",train:"Train",chenille:"Chenille"};
/* ===== Analyse ===== */
/* Sens de l'évaluation : son → lettre (entendre puis choisir/écrire) ou lettre → son (lire) */
function dirOf(e){
  if(e.dir)return e.dir;
  if(e.g==="ecouter"||e.g==="ecrire")return "s2g";
  if(e.g==="sons")return e.etape==="syllabe"?"s2g":"g2s";
  return "";
}
function examplesOf(list,n){const out=[];for(let i=list.length-1;i>=0&&out.length<n;i--){const e=list[i];if(e.f&&!out.includes(e.it))out.push(e.it)}return out}
function analyse(){
  const R={};
  /* Sons */
  const gset=new Set([...sel]);LOG.forEach(e=>(e.dg||[]).forEach(([g])=>gset.add(g)));
  R.sons=[...VOY,...CONS].filter(g=>gset.has(g)).map(g=>{
    const obs=[],dirs={s2g:[],g2s:[]};
    LOG.forEach(e=>(e.dg||[]).forEach(([x,ok])=>{if(x===g){obs.push({t:e.t,ok});const d=dirOf(e);if(dirs[d])dirs[d].push({t:e.t,ok})}}));
    const ev=evalSeries("son:"+g,obs);
    const ind=LOG.filter(e=>!(e.dg||[]).length&&e.ok&&(e.gs||[]).includes(g)&&g!=="e").length;
    const srcs=[...new Set(LOG.filter(e=>(e.dg||[]).some(([x])=>x===g)).map(e=>SRC_NAMES[e.g]))].join(", ");
    const sd=k=>dirs[k].length?{n:dirs[k].length,rate:dirs[k].slice(-10).reduce((a,o)=>a+o.ok,0)/Math.min(10,dirs[k].length)}:null;
    return{g,ev,ind,srcs,inGames:sel.has(g),s2g:sd("s2g"),g2s:sd("g2s")};
  });
  R.sonsShown=R.sons.filter(x=>x.inGames||x.ev.n);
  /* Syllabes CV (Nourrir) : reconnaissance des syllabes simples */
  const cv=LOG.filter(e=>e.fu==="CV");
  R.cv={ev:evalSeries("fu:CV",cv.map(e=>({t:e.t,ok:e.f}))),ex:examplesOf(cv,3)};
  const vcl=LOG.filter(e=>e.fu==="VC");R.vc={ev:evalSeries("fu:VC",vcl.map(e=>({t:e.t,ok:e.f}))),ex:examplesOf(vcl,3)};
  const byC={},byV={};cv.forEach(e=>{(byC[e.gs[0]]=byC[e.gs[0]]||[]).push(e);(byV[e.gs[1]]=byV[e.gs[1]]||[]).push(e)});
  R.cvC=Object.keys(byC).sort((a,b)=>CONS.indexOf(a)-CONS.indexOf(b)).map(c=>({c,ev:evalSeries("fuc:"+c,byC[c].map(e=>({t:e.t,ok:e.f})),{minN:5}),ex:examplesOf(byC[c],2)}));
  R.cvV=Object.keys(byV).sort((a,b)=>VOY.indexOf(a)-VOY.indexOf(b)).map(v=>({v,ev:evalSeries("fuv:"+v,byV[v].map(e=>({t:e.t,ok:e.f})),{minN:5}),ex:examplesOf(byV[v],2)}));
  /* Assemblage syllabique (Train) */
  const tr={};LOG.filter(e=>e.g==="train").forEach(e=>{const k=Math.min(e.ns,4);(tr[k]=tr[k]||[]).push(e)});
  R.asm=[2,3,4].filter(k=>tr[k]).map(k=>({k,lab:k===4?"4 syllabes et plus":k+" syllabes",ev:evalSeries("fus:"+k,tr[k].map(e=>({t:e.t,ok:e.f,w:e.it})),{byWord:true,minWords:3}),ex:examplesOf(tr[k],3),pieges:tr[k].filter(e=>e.pi).length,essais:tr[k].reduce((a,e)=>a+(e.n||1),0)}));
  /* Décodage (Lire, Musée, Fusée avec mots réguliers) */
  const dec=LOG.filter(e=>e.g==="lire"||e.g==="musee"||(e.g==="fusee"&&!e.ou));
  const howOf=list=>({premier:list.filter(e=>e.f).length,apres:list.filter(e=>!e.f&&!e.h).length,aide:list.filter(e=>e.h).length});
  const byS={},byN={};
  dec.forEach(e=>{if(e.st)(byS[e.st]=byS[e.st]||[]).push(e);const k=Math.min(e.ns||1,3);(byN[k]=byN[k]||[]).push(e)});
  const mk=(key,list,lab,k)=>({k,lab,ev:evalSeries(key,list.map(e=>({t:e.t,ok:e.f,w:e.it})),{byWord:true}),how:howOf(list),ex:examplesOf(list,3),distinct:new Set(list.map(e=>e.it)).size});
  R.decStruct=STRUCTS.map(x=>x[0]).filter(k=>byS[k]).map(k=>mk("dec:"+k,byS[k],k==="autre"?"Autres structures":k,k));
  R.decLen=[1,2,3].filter(k=>byN[k]).map(k=>mk("len:"+k,byN[k],k===1?"Mots courts (1 syllabe)":k===2?"Mots de 2 syllabes":"Mots de 3 syllabes et plus",k));
  const recentDec=dec.slice(-20);
  R.help=recentDec.length?recentDec.filter(e=>e.h).length/recentDec.length:null;R.decN=dec.length;
  /* Entendre et manipuler les sons (sans lettres) */
  {const ev=et=>{const l=LOG.filter(e=>e.g==="sons"&&e.etape===et);return{ev:evalSeries("aud:"+et,l.map(e=>({t:e.t,ok:e.f,w:e.it}))),ex:examplesOf(l,3)}};
   const sl=LOG.filter(e=>e.src==="syllabe-entendue"),sylH={ev:evalSeries("aud:sylh",sl.map(e=>({t:e.t,ok:e.f,w:e.it}))),ex:examplesOf(sl,3)};
   const fs_=LOG.filter(e=>e.src==="syllabe-initiale"),sylI={ev:evalSeries("aud:syli",fs_.map(e=>({t:e.t,ok:e.f,w:e.tg}))),ex:examplesOf(fs_,3)};
   R.aud=[["Fusionner des sons entendus (« llll… ou » → loup)",ev("fusion-auditive")],["Retrouver à l'écrit une syllabe entendue (« mmm… a » → ma)",sylH],["Trouver la première syllabe d'un mot (moto → mo)",sylI],["Trouver le son du début d'un mot",ev("son-initial")],["Distinguer deux sons proches",ev("pareil-different")]].filter(([,x])=>x.ev.n>0);}
  /* Nos mots : mots de la semaine et mots ajoutés */
  R.our=ourWords();
  /* Mots outils (retirés) */
  R.outils=outilsList().map(w=>{const list=LOG.filter(e=>e.ou&&e.it===w).map(e=>({t:e.t,ok:e.f}));return{w,ev:evalSeries("mo:"+w,list,{minN:5})}});
  save("acq",ACQ);
  /* Ce qui se consolide : 2 à 4 éléments concrets, en langage simple */
  const cons=[];
  R.sons.filter(x=>x.ev.status==="app").forEach(x=>cons.push({lab:"le son « "+x.g+" »",last:x.ev.last,cat:"son"}));
  R.cvC.filter(x=>x.ev.status==="app").forEach(x=>cons.push({lab:"les syllabes qui commencent par « "+x.c+" »",last:x.ev.last,cat:"cv"}));
  R.asm.filter(x=>x.ev.status==="app").forEach(x=>cons.push({lab:"l'assemblage des mots de "+(x.k===4?"4 syllabes et plus":x.k+" syllabes"),last:x.ev.last,cat:"asm"}));
  R.decLen.filter(x=>x.ev.status==="app").forEach(x=>cons.push({lab:"la lecture des "+(x.k===1?"mots courts":x.k===2?"mots de deux syllabes":"mots de trois syllabes"),last:x.ev.last,cat:"dec"}));
  R.our.filter(g=>g.on).forEach(g=>g.words.filter(x=>x.st==="app").forEach(x=>cons.push({lab:"le mot « "+x.w+" »",last:x.last,cat:"mo"})));
  const per={},pick=[];
  cons.sort((a,b)=>b.last-a.last).forEach(x=>{if(pick.length<4&&(per[x.cat]||0)<2){pick.push(x);per[x.cat]=(per[x.cat]||0)+1}});
  R.consol=pick;
  return R;
}
const cnt=(list,s)=>list.filter(x=>x.ev.status===s).length;
const chip=s=>`<span class="stchip st-${s}">${ST3[s][0]} ${ST3[s][1]}</span>`;
function meta(ev,extra){
  if(!ev.n)return "Pas encore observé";
  return [ev.n+" occasion"+(ev.n>1?"s":""),"récent : "+pct(ev.rate),ev.distinct?ev.distinct+" mots différents":"",ev.days?ev.days+" jour"+(ev.days>1?"s":""):"","dernière fois : "+fmtD(ev.last),extra||""].filter(Boolean).join(" · ");
}
function item(k,ev,extra){return `<div class="ritem"><div class="k">${k}</div><div class="rb">${chip(ev.status)}${ev.evo?` <span class="evo">${ev.evo}</span>`:""}<div class="meta">${meta(ev,extra)}</div></div></div>`}
const AVATARS=["🦊","🐼","🦁","🐸","🐰","🐻","🦄","🐯","🐨","🐙","🐧","🦖"];
let PROFILES=load("profiles",null);
if(!PROFILES){PROFILES=[{id:"p1",name:(CFG.kidName||"").trim(),av:"🦊"}];save("profiles",PROFILES)}
const curProfile=()=>PROFILES.find(x=>x.id===CUR_PROF)||PROFILES[0];
{const P=curProfile();if(P&&!P.name&&(CFG.kidName||"").trim()){P.name=CFG.kidName.trim();save("profiles",PROFILES)}}
const kidName=()=>((curProfile()&&curProfile().name)||CFG.kidName||"").trim();
function setKidName(v){v=String(v).slice(0,30);CFG.kidName=v;save("cfg",CFG);const P=curProfile();if(P){P.name=v.trim();save("profiles",PROFILES)}}
function switchProfile(id){
  if(id===CUR_PROF){closeWho();return}
  try{localStorage.setItem("lam_curProfile",JSON.stringify(id));sessionStorage.setItem("lam_chosen","1")}catch(e){}
  location.reload();
}
function closeWho(){const d=$("whoDlg");if(d&&d.open){if(d.close)d.close();else d.removeAttribute("open")}try{sessionStorage.setItem("lam_chosen","1")}catch(e){}}
function openWho(){
  let d=$("whoDlg");if(!d){d=document.createElement("dialog");d.id="whoDlg";document.body.appendChild(d)}
  d.innerHTML=`<div class="dlg"><h2 style="text-align:center">Qui joue ?</h2><div class="whogrid">${PROFILES.map(p=>`<button class="card whoc${p.id===CUR_PROF?" on":""}" data-id="${p.id}"><span class="wav">${p.av}</span><b>${p.name||"Enfant"}</b></button>`).join("")}</div></div>`;
  d.querySelectorAll(".whoc").forEach(b=>b.onclick=()=>{SFX.tap();switchProfile(b.dataset.id)});
  if(!d.open){if(d.showModal)d.showModal();else d.setAttribute("open","")}
}
function renderProfiles(){
  const box=$("profList");if(!box)return;box.innerHTML="";
  PROFILES.forEach(p=>{
    const row=el("div","profrow"+(p.id===CUR_PROF?" on":""));
    const av=el("button","card profav",p.av);av.setAttribute("aria-label","Changer l'avatar");
    av.onclick=()=>{p.av=AVATARS[(AVATARS.indexOf(p.av)+1)%AVATARS.length];save("profiles",PROFILES);renderProfiles()};
    const nm=el("input","bsearch profname");nm.value=p.name||"";nm.placeholder="Prénom";nm.oninput=()=>{p.name=nm.value.slice(0,30);save("profiles",PROFILES);if(p.id===CUR_PROF){CFG.kidName=p.name;save("cfg",CFG);$("kidName").value=p.name}};
    row.append(av,nm);
    if(p.id===CUR_PROF)row.appendChild(el("span","proftag","Joue en ce moment"));
    else{
      const use=el("button","card","Utiliser");use.onclick=()=>switchProfile(p.id);row.appendChild(use);
      const del=el("button","card","🗑️");del.setAttribute("aria-label","Supprimer "+(p.name||"ce profil"));
      del.onclick=()=>{
        if(!del.dataset.armed){del.dataset.armed="1";del.textContent="Supprimer ?";setTimeout(()=>{delete del.dataset.armed;del.textContent="🗑️"},3000);return}
        const pre=p.id==="p1"?null:"lam_"+p.id+"_";
        if(pre){const ks=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith(pre))ks.push(k)}ks.forEach(k=>localStorage.removeItem(k))}
        PROFILES.splice(PROFILES.indexOf(p),1);save("profiles",PROFILES);renderProfiles();
      };
      if(p.id!=="p1")row.appendChild(del);
    }
    box.appendChild(row);
  });
}
function addProfile(){
  let n=2;while(PROFILES.some(p=>p.id==="p"+n))n++;
  const id="p"+n;PROFILES.push({id,name:"",av:AVATARS[(PROFILES.length)%AVATARS.length]});save("profiles",PROFILES);
  switchProfile(id);
}
const joinFr=a=>a.length<2?a.join(""):a.slice(0,-1).join(", ")+" et "+a[a.length-1];
const PLAIN={ok:"bien réussi",app:"en consolidation",none:"pas encore assez observé"};
/* ===== Nos mots (mots de la semaine et mots ajoutés) ===== */
const OUR_ST={ok:["⭐","Bien lu"],app:["🟡","En cours"],none:["⚪","Pas encore rencontré"]};
function wordProgress(w,e){
  const reads=LOG.filter(x=>x.it===w&&(x.g==="lire"||x.g==="musee"||(x.g==="fusee"&&!x.ou)||x.g==="train"));
  const firsts=reads.filter(x=>x.f&&!x.h);
  const days=new Set(firsts.map(x=>DAY(x.t))).size;
  const written=LOG.filter(x=>x.g==="ecrire"&&x.it===w&&x.f).length;
  const st=!reads.length?"none":(firsts.length>=2&&days>=2)||firsts.length>=3?"ok":"app";
  return{w,e,st,n:reads.length,first:firsts.length,days,help:reads.filter(x=>x.h).length,written,last:reads.length?reads[reads.length-1].t:0,
    games:[...new Set(reads.map(x=>SRC_NAMES[x.g]))].join(", ")};
}
function ourWords(){
  const groups=WEEKS.map(wk=>({name:wk.name,on:wk.on,words:wk.words.map(x=>wordProgress(x.w,x.e))}));
  const extra=CUSTOM.filter(c=>!c.outil&&!WEEKS.some(k=>k.words.some(x=>x.w===c.w))).map(c=>wordProgress(c.w,c.e));
  if(extra.length)groups.push({name:"Mots ajoutés",on:true,words:extra});
  groups.forEach(g=>{g.ok=g.words.filter(x=>x.st==="ok").length;g.app=g.words.filter(x=>x.st==="app").length;g.none=g.words.filter(x=>x.st==="none").length});
  return groups;
}
function ourWordsHTML(R){
  if(!R.our.length)return "";
  let h=`<div class="pcard"><b>📅 Nos mots</b><p class="rlegend">⭐ Bien lu : lu du premier coup, sans aide, sur 2 jours différents (ou 3 fois). ✏️ : écrit correctement dans Écrire.</p>`;
  R.our.forEach(g=>{
    const pc=g.words.length?Math.round(g.ok/g.words.length*100):0;
    h+=`<div class="ourg${g.on?"":" off"}"><div class="ourh"><span>${g.name}${g.on?"":" (non utilisée)"}</span><b>${g.ok} / ${g.words.length} bien lus</b></div>
      <div class="ourbar"><i style="width:${pc}%"></i></div>
      <div class="ourw">${g.words.map(x=>`<span class="sndchip s-${x.st}">${x.e?x.e+" ":""}${x.w}${x.written?" ✏️":""}</span>`).join("")}</div></div>`;
  });
  return h+"</div>";
}
/* ===== Le prochain pas : 1 à 3 suggestions concrètes pour l'adulte ===== */
/* Ordre conseillé : voyelles simples, consonnes qui s'allongent (mmm, fff, sss…), puis consonnes brèves (p, t, b…), puis sons complexes */
const SOUND_ORDER=["a","i","u","o","é","e","m","l","s","f","r","v","ch","j","n","z","ou","p","t","b","d","c","g","on","an","in","oi","eu","è","y","ai","au","eau","un","ê","gn","qu","ph","k","oin","ain","ein","en","ill"];
const LONG_C=["m","l","s","f","r","v","ch","j","n","z"];   /* consonnes qui s'allongent */
const VC_C=["l","r","f"];                                  /* syllabes inversées sûres à l'oral : il, ar, of… */
function vcPool(){return selVoy().filter(v=>["a","i","o","u"].includes(v)).flatMap(v=>VC_C.filter(c=>sel.has(c)).map(c=>[v,c]))}
function useVC(lvl){return CFG.vc==="oui"||(CFG.vc!=="non"&&lvl>=2)}
function nextSteps(R){
  const out=[],name=kidName()||"l'enfant";
  const shown=R.sonsShown,okN=cnt(shown,"ok"),selShown=shown.filter(x=>x.inGames);
  // 1. Un nouveau son, si la plupart des sons cochés sont bien connus
  if(okN>=4&&selShown.length&&cnt(selShown,"ok")/selShown.length>=.7){
    const nx=SOUND_ORDER.find(g=>!sel.has(g));
    if(nx)out.push({txt:`La plupart des sons cochés sont bien connus. Prochain son à découvrir : « ${nx} »`+(LESSONS[nx]?" (l'atelier des Sons a une leçon pour lui).":"."),
      action:{label:"➕ Ajouter « "+nx+" » aux jeux",fn:b=>{sel.add(nx);save("sel3",[...sel]);b.textContent="✅ Ajouté";b.disabled=true}}});
  }
  // 2. Le son qui se consolide le plus récemment
  const app=shown.filter(x=>x.ev.status==="app").sort((a,b)=>b.ev.last-a.ev.last)[0];
  if(app)out.push({txt:`Continuer avec le son « ${app.g} », qui se consolide : la cuisine et Écrire le travaillent bien.`});
  // 3. Lecture : passer à l'étape suivante
  const L=k=>R.decLen.find(x=>x.k===k),l1=L(1),l2=L(2),l3=L(3);
  if(R.cv.ev.status==="ok"&&!R.decN)out.push({txt:`Les syllabes simples sont bien reconnues : c'est le moment de lire des mots entiers à la bibliothèque et au musée.`});
  else if(l2&&l2.ev.status==="ok"&&(!l3||l3.ev.status==="none")){
    const on3=structs.has("CVCVC")&&structs.has("CVCVCV");
    out.push({txt:`Les mots de deux syllabes sont bien lus : c'est le moment de passer à des mots plus longs, comme tomate ou salade.`,
      action:on3?null:{label:"➕ Proposer des mots de 3 syllabes",fn:b=>{structs.add("CVCVC");structs.add("CVCVCV");save("structs",[...structs]);b.textContent="✅ C'est fait";b.disabled=true}}});
  }
  else if(l2&&l2.ev.status==="ok"&&!structs.has("CCV"))out.push({txt:"Une prochaine étape possible : les sons doubles comme dans table, livre ou clé.",action:{label:"➕ Proposer ces mots",fn:b=>{structs.add("CCV");save("structs",[...structs]);b.textContent="✅ C'est fait";b.disabled=true}}});
  // 4. Assemblage
  const a2=R.asm.find(x=>x.k===2),a3=R.asm.find(x=>x.k===3);
  if(a2&&a2.ev.status==="ok"&&!a3&&lv("train").lvl<2)out.push({txt:"Le Train est bien réussi avec 2 syllabes : on peut passer aux trains de 3 wagons.",action:{label:"🚂 Monter le Train d'un niveau",fn:b=>{const P=lv("train");P.lvl=2;P.pts=0;save("levels",LV);b.textContent="✅ C'est fait";b.disabled=true}}});
  // 5. Mots de la semaine encore en cours
  const pend=R.our.filter(g=>g.on).flatMap(g=>g.words.filter(x=>x.st!=="ok").map(x=>x.w));
  if(pend.length)out.push({txt:`Revoir les mots de la liste pas encore bien lus : ${joinFr(pend.slice(0,5))}${pend.length>5?"…":""}. Le parcours du jour et la bibliothèque les proposeront.`});
  // 6. Autonomie
  if(R.help!=null&&R.decN>=8&&R.help>=.3)out.push({txt:"Encourager à essayer de lire seul d'abord, avant la tortue 🐢 : l'aide reste là si besoin."});
  if(progAuto()&&PROG){
    for(let i=out.length-1;i>=0;i--)if(/Prochain son à découvrir/.test(out[i].txt))out.splice(i,1);
    const i=progI(),st=curStep(),S=stepState(i),miss=S.snd.filter(x=>!x.done).map(x=>"« "+x.g+" »");
    out.unshift({txt:`Chemin de lecture : étape ${i+1} sur ${CURRIC.length} (${st.t}). `+(S.done?"Elle est réussie : la suite arrive à la prochaine partie.":S.capped?"Deux nouveaux sons découverts aujourd'hui : bravo ! La suite s'ouvrira demain, après le petit rappel du début.":S.frag&&S.frag.length?`Au rappel d'aujourd'hui, ${joinFr(S.frag.map(k=>"« "+gOfKey(k)+" »"))} ${S.frag.length>1?"sont encore fragiles":"est encore fragile"} : Miamots le remet plus souvent dans les jeux avant d'ouvrir un nouveau son (rien n'est refermé).`:miss.length?`Miamots fait travailler ${joinFr(miss)} dans tous les jeux ; le son suivant peut s'ouvrir dès aujourd'hui après 3 réussites seul de suite (sans que ce soit encore « consolidé » : ça, c'est vérifié les jours suivants).`:"Encore quelques réussites et l'étape suivante s'ouvrira d'elle-même.")});
    if(st.p==="oral")out.splice(1,0,{txt:"À cette étape, tout se passe à l'oral : l'atelier des Sons (Quel mot j'ai dit ?, Le premier son, Pareil ou pas ?) et le jardin (compter les syllabes). Les autres lieux s'ouvriront ensuite, un à la fois."});
    if(st.p==="sons")out.splice(1,0,{txt:"À cette étape, on n'apprend pas encore à lire : on écoute chaque son, on trouve les mots qui commencent par ce son et la lettre qui le fait. L'atelier des Sons a une petite leçon pour chaque son (Nouveau son)."});
  }
  else if(stageSons()&&okN>=6)out.unshift({txt:"Beaucoup de sons sont bien connus : c'est peut-être le moment de passer à l'étape « Lecture » pour faire chanter les sons ensemble (ma, li…).",action:{label:"📖 Passer à l'étape Lecture",fn:b=>{CFG.etape="lecture";save("cfg",CFG);b.textContent="✅ C'est fait";b.disabled=true}}});
  if(!out.length)out.push({txt:LOG.length<20?"Jouer quelques minutes par jour : le portrait se précisera après quelques séances.":"Continuer comme ça : tout avance bien ! Le parcours du jour garde une bonne variété."});
  return out.slice(0,3);
}
/* ===== Texte du portrait (langage parent) ===== */
function parentPortrait(R){
  const name=kidName()||"Votre enfant",P={};
  /* Même critère que le résumé parent (grille de maîtrise V1.4) : son ↔ lettre consolidé = bien connu */
  const lvlOf=g=>{if(RARE_SND.has(g))return "none";const c=compStatus("son",nk(g));return stAtLeast(c.st,"consolide")?"ok":(c.st==="en_pratique"||(c.st==="decouverte"&&c.n>0))?"app":"none"};
  const shownG=[...new Set([...R.sonsShown.map(x=>x.g),...(progAuto()&&PROG?[...progSounds()]:[])])];
  const grp=s=>shownG.filter(g=>lvlOf(g)===s);
  P.sons={ok:grp("ok"),app:grp("app"),none:grp("none")};
  // Syllabes
  const sy=[];
  if(R.cv.ev.n<4)sy.push("Pas encore assez observé. Le jeu de la cuisine permet de le voir.");
  else{
    const okC=R.cvC.filter(x=>x.ev.status==="ok"),appC=R.cvC.filter(x=>x.ev.status==="app");
    const ex=[...new Set(okC.flatMap(x=>x.ex))].slice(0,3);
    if(okC.length)sy.push(`Les syllabes simples comme ${joinFr(ex.length?ex:okC.map(x=>x.c+"a"))} sont bien reconnues.`);
    else if(R.cv.ev.status==="ok")sy.push(`Les syllabes simples${R.cv.ex.length?" comme "+joinFr(R.cv.ex):""} sont bien reconnues.`);
    else sy.push(`Les syllabes simples${R.cv.ex.length?" comme "+joinFr(R.cv.ex):""} sont en train de se consolider.`);
    if(appC.length)sy.push(`Les syllabes qui commencent par ${joinFr(appC.map(x=>"« "+x.c+" »"))} sont encore en consolidation.`);
  }
  if(R.vc&&R.vc.ev.n>=3)sy.push(R.vc.ev.status==="ok"?`Les syllabes inversées comme ${joinFr(R.vc.ex.length?R.vc.ex:["il","ar"])} sont bien reconnues.`:`Les syllabes inversées (comme ${joinFr(R.vc.ex.length?R.vc.ex:["il","ar"])}) commencent à être reconnues.`);
  P.syl=sy;
  // Lecture de mots
  const L=k=>R.decLen.find(x=>x.k===k),l2=L(2),l3=L(3),l1=L(1);
  const rd=[];
  if(!R.decN)rd.push("Pas encore assez observé. Les jeux Lire, Musée et Fusée permettent de le voir.");
  else{
    if(l2&&l2.ev.status==="ok")rd.push(`${name} lit maintenant plusieurs mots de deux syllabes de façon autonome.`);
    else if(l2&&l2.ev.status==="app")rd.push(`${name} commence à lire des mots de deux syllabes.`);
    else if(l1&&l1.ev.status!=="none")rd.push(`${name} commence à lire des mots courts.`);
    if(l3&&l3.ev.status==="ok")rd.push("Les mots de trois syllabes sont aussi bien réussis.");
    else if(l3&&l3.ev.status==="app")rd.push("Les mots plus longs commencent à être réussis.");
    if(R.help!=null&&R.decN>=5)rd.push(R.help>=.3?"L'aide (🐢 ou 🔊) est encore utilisée assez souvent, ce qui est normal à cette étape.":R.help>0?"L'aide est utilisée de temps en temps.":"Les mots sont lus sans aide.");
    if(!rd.length)rd.push("Les premières observations sont en cours.");
  }
  P.read=rd;
  return P;
}
const chipList=(arr,cls)=>arr.length?arr.map(x=>`<span class="sndchip s-${cls}">${x}</span>`).join(""):'<span class="rlegend">—</span>';
function rowStatus(lab,ev,ex){return `<div class="prow"><span>${ST3[ev.status][0]}</span><div><b>${lab}</b> : ${PLAIN[ev.status]}${ex&&ex.length&&ev.status!=="none"?` <small>(ex. ${ex.join(", ")})</small>`:""}</div></div>`}
function renderReport(){
  const R=analyse(),P=parentPortrait(R),b=$("reportBody"),name=kidName();
  let h=`<p class="rlegend">${name?"Le portrait de "+name:"Le portrait de votre enfant"}, d'après les jeux. ⚪ « Pas encore assez observé » ne veut pas dire une difficulté : il faut simplement plus d'occasions.</p>`;
  if(R.consol.length)h+=`<div class="pcard consol"><b>🌱 En ce moment, ${name||"votre enfant"} consolide :</b><ul>${R.consol.map(x=>`<li>${x.lab}</li>`).join("")}</ul></div>`;
  try{h+=masteryCard()}catch(e){errLog(e,"rapport")}
  h+=`<div class="pcard next"><b>👣 Le prochain pas</b><div id="nextSteps"></div></div>`;
  h+=`<div class="pcard"><b>🔊 Les sons</b>
    <div class="sline"><span>⭐ Bien connus</span><div>${chipList(P.sons.ok,"ok")}</div></div>
    <div class="sline"><span>🟡 Se consolident</span><div>${chipList(P.sons.app,"app")}</div></div>
    <div class="sline"><span>⚪ Pas encore assez observés</span><div>${chipList(P.sons.none,"none")}</div></div></div>`;
  if(R.aud&&R.aud.length)h+=`<div class="pcard"><b>🎧 Entendre et manipuler les sons</b>${R.aud.map(([lab,x])=>rowStatus(lab,x.ev,x.ex)).join("")}</div>`;
  h+=`<div class="pcard"><b>🍪 Les syllabes</b>${P.syl.map(x=>`<p>${x}</p>`).join("")}</div>`;
  h+=`<div class="pcard"><b>🚂 Assembler les syllabes</b>${R.asm.length?R.asm.map(x=>rowStatus("Mots de "+(x.k===4?"4 syllabes et plus":x.k+" syllabes"),x.ev,x.ex)).join(""):"<p>Pas encore assez observé. Le jeu du Train permet de le voir.</p>"}</div>`;
  h+=`<div class="pcard"><b>📖 Lire des mots</b>${P.read.map(x=>`<p>${x}</p>`).join("")}${R.decLen.map(x=>rowStatus(x.lab,x.ev,x.ex)).join("")}</div>`;
  h+=ourWordsHTML(R);
  h+=`<div class="pcard"><b>🎮 Progression dans les jeux</b><div class="lvgrid">`;
  Object.entries(GAMES).forEach(([g,n])=>{const Lv=lv(g).lvl;h+=`<div class="lvrow2"><span>${n}</span><span class="lvdots">${[1,2,3].map(i=>`<i class="${i<=Lv?"on":""}">${i}</i>`).join("")}</span></div>`});
  h+=`</div><p class="rlegend">Le niveau d'un jeu montre la progression dans l'application, pas directement une compétence en lecture.</p></div>`;
  h+=timeHTML();
  h+=`<div class="rsum"><div>⭐ Étoiles<b>${stars}</b></div><div>📒 Autocollants<b>${album.length}/${STICKERS.length}</b></div><div>🚀 Voyages<b>${mission}</b></div></div>`;
  h+=`<details class="rsec adv"><summary>🔬 Voir le compte rendu avancé</summary>${advancedHTML(R)}</details>`;
  b.innerHTML=h;$("expMsg").textContent="";
  const ns=$("nextSteps");nextSteps(R).forEach(x=>{const d=el("div","nstep",`<span>👉</span><div><p>${x.txt}</p></div>`);if(x.action){const bt=el("button","card nsbtn",x.action.label);bt.onclick=()=>{SFX.tap();x.action.fn(bt)};d.lastChild.appendChild(bt)}ns.appendChild(d)});
}
/* ===== Temps de jeu ===== */
const GNAME=g=>g==="home"?"🗺️ Carte et parcours":g==="sons"?"🔊 Atelier des sons":(GAMES[g]||g);
const fmtMin=sec=>{const m=Math.round(sec/60);return m<1?"moins d'une minute":m<60?m+" min":Math.floor(m/60)+" h "+String(m%60).padStart(2,"0")};
function timeStats(){
  const days=Object.keys(TIME).sort(),today=new Date().toLocaleDateString("fr-CA");
  const last7=days.filter(d=>(Date.now()-new Date(d+"T12:00:00").getTime())<7*864e5);
  const tot7=last7.reduce((a,d)=>a+(TIME[d]._||0),0),played7=last7.filter(d=>(TIME[d]._||0)>=60).length;
  const perGame={};last7.forEach(d=>Object.entries(TIME[d]).forEach(([g,v])=>{if(g[0]!=="_")perGame[g]=(perGame[g]||0)+v}));
  const allTot=days.reduce((a,d)=>a+(TIME[d]._||0),0),sessions=days.reduce((a,d)=>a+(TIME[d]._s||0),0);
  return{today:(TIME[today]&&TIME[today]._)||0,tot7,played7,perGame,days,allTot,sessions};
}
function timeHTML(){
  const T=timeStats();
  const games=Object.entries(T.perGame).sort((a,b)=>b[1]-a[1]);
  return `<div class="pcard"><b>⏱️ Temps de jeu</b><p>Aujourd'hui : <b style="display:inline">${fmtMin(T.today)}</b> · 7 derniers jours : <b style="display:inline">${fmtMin(T.tot7)}</b> sur ${T.played7} jour${T.played7>1?"s":""}${T.played7?" (environ "+fmtMin(T.tot7/T.played7)+" par jour de jeu)":""}.</p>${games.length?`<div class="tgames">${games.map(([g,v])=>`<div class="tg"><span>${GNAME(g)}</span><span>${fmtMin(v)}</span></div>`).join("")}</div>`:""}<p class="rlegend">Le temps compte seulement quand l'app est ouverte et utilisée (les pauses de plus de 2 minutes ne comptent pas).</p></div>`;
}
/* ===== Compte rendu avancé ===== */
function advancedHTML(R){
  let h=`<p class="rlegend">⭐ Acquis : au moins 6 occasions, 80 % de réussite du premier coup sur les plus récentes, des réussites sur au moins 2 jours (et, pour la lecture, sur au moins 4 mots différents). Le statut est conservé tant que la réussite récente reste au-dessus de 60 %. ${LOG.length} essais enregistrés depuis le ${LOG.length?fmtD(LOG[0].t):"—"}.</p>`;
  const dirTxt=x=>[x.s2g?"son → lettre : "+x.s2g.n+" (récent "+pct(x.s2g.rate)+")":"",x.g2s?"lettre → son : "+x.g2s.n+" (récent "+pct(x.g2s.rate)+")":""].filter(Boolean).join(" · ");
  h+=`<div class="rsub">🔊 Sons : correspondances lettre-son</div><p class="rlegend">Évaluation directe : atelier des Sons, la cuisine (seule la lettre qui distingue les biscuits est évaluée) et Écrire (syllabes dictées). Les réussites dans les autres jeux sont des indices complémentaires.</p>`;
  R.sonsShown.forEach(x=>h+=item(x.g,x.ev,[dirTxt(x),x.ind?x.ind+" indices dans d'autres jeux":"",x.srcs?"évalué dans : "+x.srcs:"",x.inGames?"":"non coché"].filter(Boolean).join(" · ")));
  h+=`<div class="rsub">🍪 Syllabes CV (reconnaissance)</div><p class="rlegend">La cuisine : entendre une syllabe et la retrouver à l'écrit. C'est une mesure de reconnaissance et de traitement des syllabes simples, pas une preuve pure de fusion des sons.</p>`;
  h+=item("CV global",R.cv.ev,R.cv.ex.length?"ex. "+R.cv.ex.join(", "):"");
  if(R.vc&&R.vc.ev.n)h+=item("VC (syllabes inversées)",R.vc.ev,R.vc.ex.length?"ex. "+R.vc.ex.join(", "):"");
  if(R.cvC.length){h+=`<div class="rlegend"><b>Selon la consonne</b></div>`;R.cvC.forEach(x=>h+=item(x.c+" + voyelle",x.ev,x.ex.length?"ex. "+x.ex.join(", "):""))}
  if(R.cvV.length){h+=`<div class="rlegend"><b>Selon la voyelle</b></div>`;R.cvV.forEach(x=>h+=item("consonne + "+x.v,x.ev,x.ex.length?"ex. "+x.ex.join(", "):""))}
  h+=`<div class="rsub">🚂 Assemblage syllabique</div><p class="rlegend">Train : remettre les syllabes d'un mot dans l'ordre.</p>`;
  h+=R.asm.length?R.asm.map(x=>item(x.lab,x.ev,`${x.essais} essais · ${x.pieges} avec wagon piège`)).join(""):`<p class="rlegend">Pas encore observé.</p>`;
  const howTxt=hw=>`1er coup : ${hw.premier} · après erreur : ${hw.apres} · avec aide/écoute : ${hw.aide}`;
  h+=`<div class="rsub">📖 Décodage avancé</div><p class="rlegend">Lire, Musée et Fusée (mots réguliers). Chaque mot différent compte autant : un mot souvent revu ne fait pas paraître une structure acquise. Une réussite avec aide ou écoute ne compte pas comme un premier coup.</p>`;
  h+=`<div class="rlegend"><b>Structures</b> (C = consonne, V = voyelle)</div>`+(R.decStruct.length?R.decStruct.map(x=>item(x.lab,x.ev,howTxt(x.how))).join(""):`<p class="rlegend">Pas encore observé.</p>`);
  h+=`<div class="rlegend"><b>Nombre de syllabes</b></div>`+(R.decLen.length?R.decLen.map(x=>item(x.lab,x.ev,howTxt(x.how))).join(""):`<p class="rlegend">Pas encore observé.</p>`);
  if(R.our.length){h+=`<div class="rsub">📅 Nos mots (détail)</div>`;R.our.forEach(g=>{h+=`<div class="rlegend"><b>${g.name}</b></div>`;g.words.forEach(x=>h+=`<div class="ritem"><div class="k">${x.e||""} ${x.w}</div><div class="rb"><span class="stchip st-${x.st==="ok"?"ok":x.st==="app"?"app":"none"}">${OUR_ST[x.st][0]} ${OUR_ST[x.st][1]}</span><div class="meta">${x.n?x.n+" lecture"+(x.n>1?"s":"")+" · "+x.first+" du 1er coup · "+x.days+" jour"+(x.days>1?"s":"")+" · aide : "+x.help+(x.written?" · ✏️ écrit "+x.written+" fois":"")+" · dernière fois : "+fmtD(x.last):"Pas encore rencontré"}${x.games?" · "+x.games:""}</div></div></div>`)})}
  h+=`<div class="rsub">🎮 Niveaux</div>`;Object.entries(GAMES).forEach(([g,n])=>h+=`<div class="rlegend">${n} : niveau ${lv(g).lvl} / 3</div>`);
  return h;
}
/* ----- Export Excel (détaillé) ----- */
function sheets(){
  const R=analyse(),P=parentPortrait(R),stTxt=s=>ST3[s][1];
  const evCols=ev=>[stTxt(ev.status),ev.evo||"",ev.n,ev.rate==null?"":Math.round(ev.rate*100),ev.days,ev.distinct||"",ev.last?DAY(ev.last):""];
  const evHead=["Statut","Évolution","Occasions","Réussite récente (%)","Jours avec réussite","Mots différents réussis","Dernière observation"];
  const resume=[["Compte rendu – Miamots",kidName(),DAY(Date.now())],[],["Portrait"],
    ["Sons bien connus",P.sons.ok.join(" ")],["Sons qui se consolident",P.sons.app.join(" ")],["Sons pas encore assez observés",P.sons.none.join(" ")],
    ["Syllabes",P.syl.join(" ")],["Assembler les syllabes",R.asm.map(x=>x.lab+" : "+PLAIN[x.ev.status]).join(" · ")],["Lire des mots",P.read.join(" ")],
    ["En ce moment, il/elle consolide",R.consol.map(x=>x.lab).join(" · ")],
    ["Le prochain pas",nextSteps(R).map(x=>x.txt).join(" | ")],
    ...R.our.map(g=>["Nos mots : "+g.name,g.ok+" / "+g.words.length+" bien lus",g.app+" en cours",g.none+" pas encore rencontrés"]),
    [],["Niveaux des jeux"],...Object.entries(GAMES).map(([g,n])=>[n.replace(/^\S+\s/,""),lv(g).lvl]),
    [],["Étoiles",stars],["Autocollants",album.length],["Voyages",mission],["Essais enregistrés",LOG.length]];
  const sons=[["Son",...evHead,"Son → lettre (essais)","Son → lettre (récent %)","Lettre → son (essais)","Lettre → son (récent %)","Indices dans d'autres jeux","Évalué dans","Coché dans les réglages"],
    ...R.sons.map(x=>[x.g,...evCols(x.ev),x.s2g?x.s2g.n:"",x.s2g?Math.round(x.s2g.rate*100):"",x.g2s?x.g2s.n:"",x.g2s?Math.round(x.g2s.rate*100):"",x.ind,x.srcs,x.inGames?"Oui":"Non"])];
  const cvS=[["Catégorie","Détail",...evHead,"Exemples"],["CV global","",...evCols(R.cv.ev),R.cv.ex.join(", ")],...R.cvC.map(x=>["Selon la consonne",x.c+" + voyelle",...evCols(x.ev),x.ex.join(", ")]),...R.cvV.map(x=>["Selon la voyelle","consonne + "+x.v,...evCols(x.ev),x.ex.join(", ")])];
  const asm=[["Assemblage",...evHead,"Essais","Avec wagon piège","Exemples"],...R.asm.map(x=>[x.lab,...evCols(x.ev),x.essais,x.pieges,x.ex.join(", ")])];
  const decod=[["Catégorie","Détail",...evHead,"Mots différents vus","Réussi du 1er coup","Après une erreur","Avec aide/écoute"],...R.decStruct.map(x=>["Structure",x.lab,...evCols(x.ev),x.distinct,x.how.premier,x.how.apres,x.how.aide]),...R.decLen.map(x=>["Nombre de syllabes",x.lab,...evCols(x.ev),x.distinct,x.how.premier,x.how.apres,x.how.aide])];
  const ours=[["Liste","Mot","Statut","Lectures","Du 1er coup","Jours","Avec aide","Écrit correctement","Jeux","Dernière fois"],...R.our.flatMap(g=>g.words.map(x=>[g.name,x.w,OUR_ST[x.st][1],x.n,x.first,x.days,x.help,x.written,x.games,x.last?DAY(x.last):""]))];
  const AIDE=["","fusion 🐢","écoute 🔊"];
  const hist=[["Date","Heure","Jeu","Niveau","Cible","Mot ou syllabe","Graphèmes","Structure","Nb syllabes","Catégorie","Réussi","1er coup","Nb d'essais","Aide","Wagons pièges","Sens","Évaluation directe des sons","Type d'observation"],
    ...LOG.map(e=>{const d=new Date(e.t),dir=dirOf(e);return[DAY(e.t),d.toLocaleTimeString("fr-CA",{hour:"2-digit",minute:"2-digit"}),SRC_NAMES[e.g]||e.g,e.lv||"",e.tg||e.it,e.it,(e.gs||[]).join(" "),e.st||"",e.ns||"",e.fu==="CV"?"Syllabe CV":e.g==="train"?"Assemblage "+e.ns+" syllabes":e.ou?"Mot outil":"",e.ok?"Oui":"Non",e.f?"Oui":"Non",e.n||1,AIDE[e.h||0]||"",e.pi||"",dir==="s2g"?"son → lettre":dir==="g2s"?"lettre → son":"",(e.dg||[]).map(([g,o])=>g+(o?" ✓":" ✗")).join(" "),e.etape||e.src||""]})];
  const T=timeStats(),gk=[...new Set(T.days.flatMap(d=>Object.keys(TIME[d]).filter(k=>k[0]!=="_")))];
  const temps=[["Date","Ouvertures de l'app","Temps total (min)",...gk.map(g=>GNAME(g).replace(/^\S+\s/,"")+" (min)")],...T.days.map(d=>[d,TIME[d]._s||0,Math.round((TIME[d]._||0)/60),...gk.map(g=>Math.round((TIME[d][g]||0)/60))])];
  resume.push([],["Temps de jeu – 7 derniers jours (min)",Math.round(T.tot7/60)],["Jours de jeu (7 derniers jours)",T.played7]);
  return [["Résumé",resume],["Temps",temps],["Nos mots",ours],["Sons",sons],["Syllabes CV",cvS],["Assemblage",asm],["Décodage",decod],["Historique des essais",hist]];
}
function csvReport(){
  const q=v=>'"'+String(v==null?"":v).replace(/"/g,'""')+'"';
  return "\ufeff"+sheets().map(([n,rows])=>[q("=== "+n+" ===")].concat(rows.map(r=>r.map(q).join(";"))).join("\r\n")).join("\r\n\r\n");
}
function xlsxReport(){
  const wb=XLSX.utils.book_new();
  sheets().forEach(([n,rows])=>{const ws=XLSX.utils.aoa_to_sheet(rows);ws["!cols"]=(rows[0]||[]).map((_,i)=>({wch:i===0?24:16}));XLSX.utils.book_append_sheet(wb,ws,n.slice(0,31))});
  return XLSX.write(wb,{type:"array",bookType:"xlsx"});
}
/* ----- Page à imprimer : portrait parent, ou portrait détaillé ----- */
/* ===== Portrait à imprimer : mise en page aquarelle ===== */
async function imgData(src){
  if(!src)return "";if(String(src).startsWith("data:"))return src;
  try{const r=await fetch(src);const b=await r.blob();return await new Promise(res=>{const f=new FileReader();f.onload=()=>res(f.result);f.onerror=()=>res("");f.readAsDataURL(b)})}catch(e){return ""}
}
/* ----- PDF : le portrait est dessiné dans une page cachée puis découpé en pages A4 (sans couper les cartes) ----- */
const PDF_LIBS={h2c:"vendor/html2canvas.min.js",jspdf:"vendor/jspdf.umd.min.js"};
function loadScript(src){return new Promise((res,rej)=>{if(document.querySelector(`script[data-src="${src}"]`)){res();return}const sc=document.createElement("script");sc.src=src;sc.dataset.src=src;sc.onload=res;sc.onerror=rej;document.head.appendChild(sc)})}
async function pdfReport(detailed){
  if(!window.html2canvas)await loadScript(PDF_LIBS.h2c);
  if(!(window.jspdf&&window.jspdf.jsPDF))await loadScript(PDF_LIBS.jspdf);
  const html=htmlReport(detailed,await printAssets());
  const fr=document.createElement("iframe");fr.setAttribute("aria-hidden","true");
  fr.style.cssText="position:fixed;left:-10000px;top:0;width:760px;height:1200px;border:0;visibility:hidden";
  document.body.appendChild(fr);
  try{
    await new Promise(r=>{fr.onload=r;fr.srcdoc=html.replace("<body>",'<body style="margin:0;padding:18px;max-width:none;width:760px">')});
    const doc=fr.contentDocument;try{await doc.fonts.ready}catch(e){}
    await Promise.all([...doc.images].map(im=>im.complete?0:new Promise(r=>{im.onload=im.onerror=r})));
    await wait(150);
    const body=doc.body,W=body.scrollWidth,H=body.scrollHeight;fr.style.height=H+"px";
    const canvas=await window.html2canvas(body,{scale:2,backgroundColor:"#FBF8EF",width:W,height:H,windowWidth:W,windowHeight:H,useCORS:true,logging:false});
    const {jsPDF}=window.jspdf,pdf=new jsPDF({unit:"mm",format:"a4",orientation:"portrait"});
    const mm=190,pageMM=277,pxPerMM=W/mm,pageH=pageMM*pxPerMM;
    // points de coupe permis : entre deux blocs
    const cuts=[...body.children].filter(c=>c.tagName!=="H1").map(c=>c.offsetTop+c.offsetHeight+6).concat([...body.querySelectorAll(".two>.card")].map(c=>c.offsetTop+c.offsetHeight)).sort((a,b)=>a-b);
    let y=0,first=true;
    while(y<H-4){
      let end=Math.min(H,y+pageH);
      if(end<H){const ok=cuts.filter(c=>c>y+60&&c<=end);if(ok.length)end=ok[ok.length-1]}
      const sl=document.createElement("canvas");sl.width=canvas.width;sl.height=Math.ceil((end-y)*2);
      const cx=sl.getContext("2d");cx.fillStyle="#FBF8EF";cx.fillRect(0,0,sl.width,sl.height);
      cx.drawImage(canvas,0,Math.floor(y*2),canvas.width,sl.height,0,0,sl.width,sl.height);
      if(!first)pdf.addPage();first=false;
      pdf.setFillColor(251,248,239);pdf.rect(0,0,210,297,"F");
      pdf.addImage(sl.toDataURL("image/jpeg",.9),"JPEG",10,10,mm,(end-y)/pxPerMM);
      y=end;
    }
    return pdf.output("arraybuffer");
  }finally{fr.remove()}
}
async function printAssets(){return{logo:await imgData(LOGO_IMG),cheer:await imgData(MZ.cheer),point:await imgData(MZ.point),hello:await imgData(MZ.encourage)}}
function htmlReport(detailed,A){
  A=A||{};
  const R=analyse(),P=parentPortrait(R),name=kidName(),prof=curProfile(),d=new Date().toLocaleDateString("fr-CA",{day:"numeric",month:"long",year:"numeric"});
  const esc=x=>String(x).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
  const pill=s=>`<span class="pill ${s}">${ST3[s][0]} ${PLAIN[s]}</span>`;
  const chips=(a,cls)=>a.length?a.map(x=>`<span class="chip ${cls}">${esc(x)}</span>`).join(""):`<span class="none-txt">—</span>`;
  const row=(lab,x)=>`<div class="srow"><span class="slab">${esc(lab)}</span>${pill(x.ev.status)}${x.ex&&x.ex.length&&x.ev.status!=="none"?`<span class="ex">ex. ${esc(x.ex.join(", "))}</span>`:""}</div>`;
  const T=timeStats(),games=Object.entries(T.perGame).sort((a,b)=>b[1]-a[1]),gmax=games.length?games[0][1]:1;
  const summary=(P.read[0]&&!/Pas encore/.test(P.read[0]))?P.read[0]:(P.syl[0]||"Les premières observations sont en cours.");
  const card=(cls,icon,title,body)=>`<section class="card ${cls}"><h2><span class="ic">${icon}</span>${title}</h2>${body}</section>`;
  let h=`<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Portrait de lecture${name?" – "+esc(name):""}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Andika:wght@400;700&display=swap" rel="stylesheet">
<style>
@page{size:A4;margin:12mm}
*{box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:"Andika","Trebuchet MS",Arial,sans-serif;color:#1E2A55;max-width:820px;margin:18px auto;padding:0 16px;font-size:14px;line-height:1.45;background:#FBF8EF}
.head{display:flex;align-items:center;gap:16px;padding:14px 18px;border-radius:22px;background:linear-gradient(135deg,#E3F2FF,#FFF4DA 60%,#E9F7E4);border:2px solid #EADCB8}
.head img.logo{height:78px;width:auto}
.head .who{flex:1;text-align:right}
.head .who small{display:block;color:#6B7A99;font-size:12px;letter-spacing:.04em;text-transform:uppercase}
.head .who b{display:block;font-size:26px;line-height:1.1}
.head .who span{color:#6B7A99}
.hero{display:flex;align-items:center;gap:14px;margin:14px 0;padding:12px 16px;border-radius:20px;background:#fff;border:2px dashed #E6D6AE}
.hero img{width:86px;height:auto;flex:none}
.hero p{margin:0;font-size:17px;font-weight:700}
.two{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.card{background:#fff;border-radius:18px;padding:12px 16px 14px;border:2px solid #EEE4CC;break-inside:avoid;page-break-inside:avoid;margin-bottom:12px;position:relative;overflow:hidden}
.card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:7px;background:var(--c,#9FD6B3)}
.card h2{margin:0 0 8px;font-size:17px;display:flex;align-items:center;gap:8px}
.card .ic{display:inline-grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--cb,#E5F4E9);font-size:16px}
.card p{margin:4px 0}
.card ul{margin:4px 0 0;padding-left:20px}
.now{--c:#7CC98F;--cb:#DDF2E1;background:#F3FBF4}.next{--c:#F2C14E;--cb:#FCEDC4;background:#FFF9E8}
.next .pt{float:right;width:64px;margin:-4px -6px 0 6px}
.sons{--c:#5DA9E9;--cb:#DCEBFA}.syl{--c:#F29E4C;--cb:#FCE5CF}.asm{--c:#E86A6A;--cb:#F9DADA}.read{--c:#8E7CC3;--cb:#E6E0F3}.ours{--c:#62B6A8;--cb:#DAF0EC}.time{--c:#5DA9E9;--cb:#DCEBFA}.lvl{--c:#B9A37A;--cb:#EFE8DA}
.line{display:flex;gap:10px;align-items:flex-start;margin:6px 0}
.line>b{flex:none;width:150px;font-size:13px;color:#4C5B80;padding-top:3px}
.chip{display:inline-block;min-width:30px;text-align:center;padding:2px 9px;margin:2px 3px 2px 0;border-radius:10px;font-weight:700;font-size:15px;border:2px solid #D7DFEC;background:#fff}
.chip.ok{border-color:#3FA164;color:#1d7a44;background:#EAF7EE}.chip.app{border-color:#E0A93A;color:#9a6b00;background:#FFF6E0}.chip.no{color:#8a93a8}
.none-txt{color:#9aa3b5}
.srow{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:5px 0;border-bottom:1px dashed #EEE4CC}.srow:last-child{border-bottom:none}
.slab{font-weight:700;min-width:170px}
.pill{display:inline-block;padding:2px 10px;border-radius:999px;font-size:12.5px;font-weight:700}
.pill.ok{background:#E2F5E8;color:#1d7a44}.pill.app{background:#FFF1CC;color:#8a5d00}.pill.none{background:#EEF1F6;color:#6b7590}
.ex{color:#6B7A99;font-size:12.5px}
.wl{margin:8px 0}.wl .top{display:flex;justify-content:space-between;font-size:13.5px}
.bar{height:10px;border-radius:10px;background:#EEF1F6;overflow:hidden;margin:4px 0 6px}.bar i{display:block;height:100%;background:linear-gradient(90deg,#7CC98F,#3FA164)}
.tiles{display:flex;gap:10px;margin:4px 0 8px}.tile{flex:1;background:#F4F8FD;border-radius:14px;padding:8px;text-align:center}.tile b{display:block;font-size:20px}.tile small{color:#6B7A99}
.tg{display:grid;grid-template-columns:150px 1fr 70px;gap:8px;align-items:center;font-size:13px;margin:3px 0}.tg .bar{margin:0}.tg .bar i{background:linear-gradient(90deg,#9CC8F2,#5DA9E9)}
.lv{display:grid;grid-template-columns:repeat(2,1fr);gap:4px 18px}.lv div{display:flex;justify-content:space-between;font-size:13.5px}
.dots i{display:inline-block;width:11px;height:11px;border-radius:50%;background:#E4E8F0;margin-left:3px}.dots i.on{background:#5DA9E9}
.foot{display:flex;align-items:center;gap:10px;margin-top:6px;color:#6B7A99;font-size:12px}.foot img{width:46px}
h1.det{font-size:20px;margin:22px 0 10px}
table{width:100%;border-collapse:collapse;font-size:12.5px}th,td{padding:5px 7px;text-align:left;border-bottom:1px solid #EEE4CC}th{background:#F6F1E3}
@media print{body{background:#fff;margin:0;padding:0;max-width:none}.card,.hero,.head{break-inside:avoid}}
@media (max-width:640px){.two{grid-template-columns:1fr}.line{flex-direction:column}.line>b{width:auto}.slab{min-width:0}.tg{grid-template-columns:110px 1fr 60px}}
</style></head><body>
<div class="head">${A.logo?`<img class="logo" src="${A.logo}" alt="Miamots">`:`<b style="font-size:28px">Miamots</b>`}<div class="who"><small>Portrait de lecture</small><b>${prof?prof.av+" ":""}${esc(name||"Mon enfant")}</b><span>${d}</span></div></div>
<div class="hero">${A.cheer?`<img src="${A.cheer}" alt="">`:""}<p>${esc(summary)}</p></div>
<div class="two">
${card("now","🌱","En ce moment, "+esc(name||"l'enfant")+" consolide",R.consol.length?`<ul>${R.consol.map(x=>"<li>"+esc(x.lab)+"</li>").join("")}</ul>`:"<p>Les observations se poursuivent.</p>")}
${card("next","👣","Le prochain pas",(A.point?`<img class="pt" src="${A.point}" alt="">`:"")+`<ul>${nextSteps(R).map(x=>"<li>"+esc(x.txt)+"</li>").join("")}</ul>`)}
</div>
${card("sons","🔊","Les sons",`<div class="line"><b>⭐ Bien connus</b><div>${chips(P.sons.ok,"ok")}</div></div><div class="line"><b>🟡 Se consolident</b><div>${chips(P.sons.app,"app")}</div></div><div class="line"><b>⚪ Pas encore assez observés</b><div>${chips(P.sons.none,"no")}</div></div>`)}
${R.aud&&R.aud.length?card("sons","🎧","Entendre et manipuler les sons",R.aud.map(([lab,x])=>row(lab,x)).join("")):""}
${card("syl","🍪","Les syllabes",P.syl.map(x=>"<p>"+esc(x)+"</p>").join(""))}
${card("asm","🚂","Assembler les syllabes",R.asm.length?R.asm.map(x=>row("Mots de "+(x.k===4?"4 syllabes et plus":x.k+" syllabes"),x)).join(""):"<p>Pas encore assez observé.</p>")}
${card("read","📖","Lire des mots",P.read.map(x=>"<p>"+esc(x)+"</p>").join("")+R.decLen.map(x=>row(x.lab,x)).join(""))}
${R.our.length?card("ours","📅","Nos mots",R.our.map(g=>{const pc=g.words.length?Math.round(g.ok/g.words.length*100):0;return `<div class="wl"><div class="top"><b>${esc(g.name)}</b><span>${g.ok} / ${g.words.length} bien lus</span></div><div class="bar"><i style="width:${pc}%"></i></div><div>${g.words.map(x=>`<span class="chip ${x.st==="ok"?"ok":x.st==="app"?"app":"no"}">${esc(x.w)}${x.written?" ✏️":""}</span>`).join("")}</div></div>`}).join("")):""}
${card("time","⏱️","Temps de jeu",`<div class="tiles"><div class="tile"><b>${fmtMin(T.today)}</b><small>aujourd'hui</small></div><div class="tile"><b>${fmtMin(T.tot7)}</b><small>7 derniers jours</small></div><div class="tile"><b>${T.played7}</b><small>jour${T.played7>1?"s":""} de jeu</small></div></div>${games.map(([g,v])=>`<div class="tg"><span>${esc(GNAME(g))}</span><div class="bar"><i style="width:${Math.max(4,Math.round(v/gmax*100))}%"></i></div><span>${fmtMin(v)}</span></div>`).join("")}`)}
${card("lvl","🎮","Progression dans les jeux",`<div class="lv">${Object.entries(GAMES).map(([g,n])=>`<div><span>${esc(n)}</span><span class="dots">${[1,2,3].map(i=>`<i class="${i<=lv(g).lvl?"on":""}"></i>`).join("")}</span></div>`).join("")}</div><p class="ex" style="margin-top:8px">Le niveau d'un jeu montre la progression dans l'application, pas directement une compétence. ⚪ « Pas encore assez observé » ne veut pas dire une difficulté.</p>`)}`;
  if(detailed){
    const rows=(arr,lab)=>arr.map(x=>`<tr><td>${esc(lab(x))}</td><td>${pill(x.ev.status)}</td><td>${x.ev.n||""}</td><td>${pct(x.ev.rate)}</td><td>${x.ev.distinct||""}</td><td>${x.ev.days||""}</td><td>${x.ev.evo||""}</td></tr>`).join("")||`<tr><td colspan="7">Pas encore observé</td></tr>`;
    const th=`<tr><th>Catégorie</th><th>Statut</th><th>Occasions</th><th>Réussite récente</th><th>Mots différents</th><th>Jours</th><th>Évolution</th></tr>`;
    const tcard=(icon,title,body)=>card("lvl",icon,title,`<table>${th}${body}</table>`);
    h+=`<h1 class="det">🔬 Portrait détaillé</h1>
${tcard("🔊","Sons (correspondances lettre-son)",rows(R.sonsShown,x=>x.g))}
${tcard("🍪","Syllabes CV (reconnaissance)",rows([R.cv],()=>"CV global")+rows(R.cvC,x=>x.c+" + voyelle")+rows(R.cvV,x=>"consonne + "+x.v))}
${tcard("🚂","Assemblage syllabique",rows(R.asm,x=>x.lab))}
${tcard("🧩","Décodage : structures",rows(R.decStruct,x=>x.lab))}
${tcard("📏","Décodage : nombre de syllabes",rows(R.decLen,x=>x.lab))}
<p class="ex">⭐ Acquis : au moins 6 occasions, 80 % de réussite du premier coup sur les plus récentes, réussites sur au moins 2 jours et, pour le décodage, sur au moins 4 mots différents. ${LOG.length} essais enregistrés.</p>`;
  }
  h+=`<div class="foot">${A.hello?`<img src="${A.hello}" alt="">`:""}<span>Fait avec Miamots 💚 · Les observations viennent des jeux : elles complètent, sans le remplacer, le regard des adultes qui accompagnent l'enfant.</span></div>`;
  return h+"</body></html>";
}
/* Version texte du portrait : se copie ou se partage partout (courriel, notes, texto) */
function plainReport(){
  const R=analyse(),P=parentPortrait(R),name=kidName(),L=[];
  const d=new Date().toLocaleDateString("fr-CA",{day:"numeric",month:"long",year:"numeric"});
  L.push("PORTRAIT DE LECTURE"+(name?" – "+name:"")+" ("+d+")","");
  if(R.consol.length){L.push("🌱 En ce moment, "+(name||"l'enfant")+" consolide :");R.consol.forEach(x=>L.push("  • "+x.lab));L.push("")}
  L.push("👣 Le prochain pas :");nextSteps(R).forEach(x=>L.push("  • "+x.txt));L.push("");
  L.push("🔊 Les sons");L.push("  ⭐ Bien connus : "+(P.sons.ok.join(" · ")||"—"));L.push("  🟡 Se consolident : "+(P.sons.app.join(" · ")||"—"));L.push("  ⚪ Pas encore assez observés : "+(P.sons.none.join(" · ")||"—"));L.push("");
  L.push("🍪 Les syllabes");P.syl.forEach(x=>L.push("  "+x));L.push("");
  L.push("🚂 Assembler les syllabes");if(R.asm.length)R.asm.forEach(x=>L.push("  "+ST3[x.ev.status][0]+" Mots de "+(x.k===4?"4 syllabes et plus":x.k+" syllabes")+" : "+PLAIN[x.ev.status]));else L.push("  Pas encore assez observé.");L.push("");
  L.push("📖 Lire des mots");P.read.forEach(x=>L.push("  "+x));R.decLen.forEach(x=>L.push("  "+ST3[x.ev.status][0]+" "+x.lab+" : "+PLAIN[x.ev.status]));L.push("");
  if(R.our.length){L.push("📅 Nos mots");R.our.forEach(g=>{L.push("  "+g.name+" : "+g.ok+" / "+g.words.length+" bien lus");L.push("    "+g.words.map(x=>OUR_ST[x.st][0]+" "+x.w+(x.written?" ✏️":"")).join(" · "))});L.push("")}
  {const T=timeStats();L.push("⏱️ Temps de jeu : aujourd'hui "+fmtMin(T.today)+" · 7 derniers jours "+fmtMin(T.tot7)+" ("+T.played7+" jours)");L.push("")}
  L.push("🎮 Niveaux dans les jeux");Object.entries(GAMES).forEach(([g,n])=>L.push("  "+n+" : niveau "+lv(g).lvl+" / 3"));
  L.push("","(Miamots)");
  return L.join("\n");
}
function copyUI(text,intro){
  const msg=$("expMsg");msg.textContent=intro;
  let box=$("copyBox");if(box)box.remove();
  box=el("div","");box.id="copyBox";
  const ta=el("textarea","copybox");ta.readOnly=true;ta.value=text;
  const row=el("div","seg");
  const cp=el("button","card btn","📋 Copier");cp.onclick=async()=>{try{await navigator.clipboard.writeText(text);msg.textContent="✅ Copié ! Collez-le dans un courriel, une note ou un texto."}catch(e){ta.focus();ta.select();msg.textContent="Le texte est sélectionné : faites « Copier » avec le téléphone."}};
  row.appendChild(cp);
  if(navigator.share){const sh=el("button","card btn","📤 Partager");sh.onclick=async()=>{try{await navigator.share({title:"Portrait de lecture",text})}catch(e){}};row.appendChild(sh)}
  box.append(ta,row);msg.after(box);
}
/* Quand l'app est ouverte comme fichier (hors de Claude), un téléchargement classique fonctionne */
function classicDownload(filename,data){
  let top=false;try{top=window.top===window.self}catch(e){}
  if(!top)return false;
  try{
    const type=/\.pdf$/.test(filename)?"application/pdf":/\.html$/.test(filename)?"text/html":/\.json$/.test(filename)?"application/json":/\.csv$/.test(filename)?"text/csv":"application/octet-stream";
    const blob=data instanceof ArrayBuffer||ArrayBuffer.isView(data)?new Blob([data],{type}):new Blob([data],{type:type+";charset=utf-8"});
    const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();
    setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},4000);return true;
  }catch(e){return false}
}
let DL=null;
try{if(window.claude&&typeof window.claude.use==="function")window.claude.use("downloads").then(d=>{DL=d}).catch(()=>{})}catch(e){}
async function exportFile(kind){
  const msg=$("expMsg"),date=new Date().toISOString().slice(0,10);
  let data,filename;
  if(kind==="xlsx"&&window.XLSX){data=xlsxReport();filename=`compte-rendu-lecture-${date}.xlsx`}
  else if(kind==="xlsx"){data=csvReport();filename=`compte-rendu-lecture-${date}.csv`}
  else{
    const det=kind==="htmlx";msg.textContent="📄 Préparation du PDF…";
    try{data=await pdfReport(det);filename=(det?"portrait-detaille-":"portrait-lecture-")+(kidName()?kidName().replace(/\s+/g,"-")+"-":"")+date+".pdf"}
    catch(e){data=htmlReport(det,await printAssets());filename=(det?"portrait-detaille-":"portrait-lecture-")+date+".html";msg.textContent="Le PDF n'a pas pu être créé ici (connexion ?) : voici la page à imprimer."}
  }
  if(!DL&&classicDownload(filename,data)){
    msg.textContent="✅ Fichier enregistré dans vos téléchargements.";
    const alt=el("button","link","Ça n'a pas marché ? Copier le texte");alt.onclick=()=>copyUI(kind==="xlsx"?csvReport():plainReport(),"Voici la version texte, à copier ou partager :");
    let c=$("copyBox");if(c)c.remove();const w=el("div","");w.id="copyBox";w.appendChild(alt);msg.after(w);return;
  }
  if(!DL){
    if(kind==="xlsx")copyUI(csvReport(),"Le téléchargement n'est pas offert ici. Voici le tableau en texte : copiez-le et collez-le dans Excel ou Google Sheets.");
    else copyUI(plainReport(),"Le téléchargement n'est pas offert ici. Voici le portrait en texte, à copier ou partager :");
    return;
  }
  try{await DL.save({filename,data});msg.textContent="✅ Fichier enregistré."}
  catch(e){
    if(e&&e.code==="extension_not_enabled"&&kind==="xlsx"){try{await DL.save({filename:filename.replace(/xlsx$/,"csv"),data:csvReport()});msg.textContent="✅ Fichier enregistré (format CSV).";return}catch(_){}}
    if(e&&e.code==="declined"){msg.textContent="Téléchargement annulé.";return}
    if(e&&e.code==="rate_limited"){msg.textContent="Patientez un instant puis réessayez.";return}
    copyUI(kind==="xlsx"?csvReport():plainReport(),"Le téléchargement n'a pas fonctionné ici. Voici la version texte, à copier ou partager :");
  }
}
function openReport(){renderReport();const t=$("copyBox");if(t)t.remove();const d=$("reportDlg");if(d.showModal)d.showModal();else d.setAttribute("open","")}
$("openReport").onclick=()=>{closeSettings();setTimeout(openReport,50)};
$("closeReport").onclick=()=>{const d=$("reportDlg");if(d.close)d.close();else d.removeAttribute("open")};
$("expCsv").onclick=()=>exportFile("xlsx");
$("expHtml").onclick=()=>exportFile("html");
$("expHtmlX").onclick=()=>exportFile("htmlx");
$("expText").onclick=()=>copyUI(plainReport(),"Le portrait en texte, à copier dans un courriel ou à partager :");



/* ---------- Musée : associer les mots aux images ---------- */
const MU={round:0,boards:3};
function startMusee(){MU.round=0;MU.first=true;nextMusee()}
function nextMusee(){
  if(stageSons())return nextMuseeLetter();
  MU.letterMode=false;
  const body=$("mBody"),lvl=lv("musee").lvl;
  if(MU.round>=MU.boards)return party(body,startMusee,"Le musée est tout rangé !");
  const av=availWords().filter(w=>w.e);
  const n=Math.min(cfgN("museeN",[0,3,4,5][lvl]),av.length);
  if(n<2)return notEnough(body,"Il faut au moins 2 mots avec une image. Ajoutez des sons dans les réglages.");
  const chosen=[],used=new Set();
  {const first=pickWord(av,lvl,MU.lastFirst);MU.lastFirst=first.w;chosen.push(first);used.add(first.e);
   const pool=stageFilter(av.filter(w=>w!==first&&!used.has(w.e)),lvl);
   similar(first,pool,n*2).forEach(w=>{if(chosen.length<n&&!used.has(w.e)){chosen.push(w);used.add(w.e)}});
   for(let k=0;k<40&&chosen.length<n;k++){const p2=av.filter(w=>!chosen.includes(w)&&!used.has(w.e));if(!p2.length)break;const w=pickWord(p2,lvl,null);chosen.push(w);used.add(w.e)}}
  MU.left=chosen.length;MU.err={};MU.sel=null;MU.boardErr=0;
  body.innerHTML="";body.appendChild(lvlBadge("musee"));body.appendChild(dotsN(MU.round,MU.boards));
  const scene=el("div","scene"),m=makeMiam("musee");m.style.width="min(100px,28vw)";MU.m=m;
  scene.append(m,el("div","bubble","Oh non ! J'ai mélangé les étiquettes. Glisse chaque mot sur sa bonne image !"));body.appendChild(scene);
  const grid=el("div","musee"),L=el("div","mlabels"),R=el("div","mframes");
  shuffle(chosen).forEach(w=>{
    const f=el("div","frame",`<span class="pic">${w.e}</span>${CFG.museeSon!=="non"?'<button class="fspk" aria-label="Écouter le nom de l\'image">🔊</button>':""}<span class="mslot"></span>`);f.dataset.w=w.w;
    const fs=f.querySelector(".fspk");if(fs)fs.onclick=ev=>{ev.stopPropagation();speak(w.w)};
    f.onclick=()=>{if(MU.sel&&!f.classList.contains("done"))museeCheck(MU.sel,f)};
    R.appendChild(f);
  });
  shuffle(chosen).forEach(w=>{const lb=el("div","mlabel",`<span class="mw">${wordHTML(w)}</span>`);lb.dataset.w=w.w;lb.setAttribute("role","button");setupLabel(lb);L.appendChild(lb)});
  grid.append(L,R);body.appendChild(grid);
  const msg=el("p","msg");msg.id="muMsg";msg.setAttribute("aria-live","polite");body.appendChild(msg);
  if(MU.first){MU.first=false;speak("Oh non ! Miam a mélangé les étiquettes du musée. Lis chaque mot et glisse-le sur la bonne image !")}
}
function setupLabel(lb){
  let ghost=null,sx=0,sy=0,moved=false,over=null;
  lb.addEventListener("pointerdown",e=>{
    if(e.target.closest(".mspk")||lb.classList.contains("gone"))return;
    e.preventDefault();try{lb.setPointerCapture(e.pointerId)}catch(_){}
    sx=e.clientX;sy=e.clientY;moved=false;
  });
  lb.addEventListener("pointermove",e=>{
    if(sx===0&&sy===0)return;
    if(!moved&&Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>8){
      moved=true;ghost=lb.cloneNode(true);ghost.classList.add("ghost");ghost.style.width=lb.offsetWidth+"px";document.body.appendChild(ghost);lb.classList.add("lifted");
      document.querySelectorAll(".mlabel.sel").forEach(x=>x.classList.remove("sel"));MU.sel=null;
    }
    if(moved){ghost.style.left=e.clientX+"px";ghost.style.top=e.clientY+"px";
      const t=document.elementFromPoint(e.clientX,e.clientY),f=t&&t.closest(".frame:not(.done)");
      if(over&&over!==f)over.classList.remove("over");if(f)f.classList.add("over");over=f;}
  });
  const end=e=>{
    if(sx===0&&sy===0)return;
    const wasMoved=moved;sx=sy=0;moved=false;
    if(ghost){ghost.remove();ghost=null}lb.classList.remove("lifted");
    if(over){over.classList.remove("over")}
    if(wasMoved){if(over)museeCheck(lb,over);over=null;return}
    // simple toucher : sélectionner l'étiquette puis toucher une image
    document.querySelectorAll(".mlabel.sel").forEach(x=>x.classList.remove("sel"));
    if(MU.sel===lb){MU.sel=null}else{MU.sel=lb;lb.classList.add("sel");SFX.tap()}
  };
  lb.addEventListener("pointerup",end);lb.addEventListener("pointercancel",end);
}
async function museeCheck(lb,f){
  if(MU.letterMode)return museeCheckLetter(lb,f);
  const w=lb.dataset.w,msg=$("muMsg");MU.sel=null;lb.classList.remove("sel");
  const wo=WORDS.find(x=>x.w===w);
  if(f.dataset.w===w){
    const errs=MU.err[w]||0;
    f.classList.add("done");mzAnim(f,"mz-snap");f.querySelector(".mslot").textContent=w;lb.classList.add("gone");
    SFX.yes();speak(w);const[x,y]=centerOf(f);sparks(x,y,12,["✨","⭐"]);
    msg.textContent=errs?"Oui ! « "+w+" »":rnd(["Bravo !","Bien lu !","Super !"]);
    progress("musee",Math.min(2,errs),{gs:wo?readG(wo):[],word:w});
    logA({g:"musee",lv:lv("musee").lvl,nc:MU.left,it:w,gs:wo?readG(wo):[],st:wo?struct(wo):"",ns:wo?wo.s.length:0,ok:1,f:errs?0:1,n:errs+1,h:MU.help&&MU.help[w]?2:0,src:"decode"});
    MU.left--;
    if(MU.left===0){
      addStar();mood(MU.m,"happy");SFX.win();const[a,b]=centerOf(MU.m);sparks(a,b,24);
      msg.textContent="Toutes les étiquettes sont à leur place !";speak("Bravo, tout est rangé !",true);
      MU.round++;await settle(1200);nextMusee();
    }
  }else{
    MU.err[w]=(MU.err[w]||0)+1;SFX.no();mood(MU.m,"yuck");setTimeout(()=>mood(MU.m,"idle"),800);
    f.classList.remove("bad");void f.offsetWidth;f.classList.add("bad");
    msg.textContent="Pas cette image… Relis bien le mot.";
    if(MU.err[w]>=2&&!lb.querySelector(".mspk")){
      const sp=el("button","mspk","🔊");sp.setAttribute("aria-label","Écouter le mot");
      sp.onclick=ev=>{ev.stopPropagation();(MU.help=MU.help||{})[w]=1;speak(w)};lb.appendChild(sp);
      msg.textContent="Tu peux écouter le mot avec 🔊.";
    }
  }
}

/* ---------- Parcours du jour ---------- */
const PARC_NAMES={sons:"aller à l'atelier des sons",ecouter:"aller à la cuisine",lire:"lire à la bibliothèque",ecrire:"écrire à l'école",fusee:"voyager en fusée",train:"prendre le train",chenille:"aider la chenille",musee:"ranger le musée"};
let PARC=load("parc",null),PARC_ACTIVE=false,PDAYS=load("pdays",0);
const todayKey=()=>DAY(Date.now());
function planParcours(){
  if(progAuto()&&PROG){
    /* Miamots_maitrise_V1-3 › parcours_quotidien : 3 activités selon le profil */
    const st=curStep(),fo=st.add.filter(g=>(PH_SIMPLE.includes(g)&&hasPh(nk(g)))||LESSONS[g]);
    let lesson=fo.find(g=>!sonsDone.includes(g))||null;
    if(!lesson&&!sonsDone.includes("emuet")&&emLessonOpen())lesson="emuet";
    const open=g=>!isLocked(g),pickOne=(a,not)=>{const c=a.filter(g=>open(g)&&!not.includes(g));return c.length?rnd(c):null};
    const ea=earI(),EAR_ACT=["pd","chen","fus","pd","init","chen","fus"],ek=EAR_ACT[ea];
    const act=ek==="chen"?rnd(["fus","init"]):ek;
    const earGame=ek==="chen"?"chenille":"sons";
    const prof=readerProfile();let steps;
    if(prof==="grand_debutant"){
      steps=["sons"];                                            /* 1. découverte ou consolidation d'un son */
      steps.push(pickOne(["chenille","ecouter"],steps)||"ecouter");    /* 2. oreille ou syllabes, sons déjà présentés */
      steps.push(pickOne(["ecouter","chenille","musee"],steps)||"musee"); /* 3. révision espacée */
    }else if(prof==="lecteur_debutant"){
      /* 1. cible du jour : nouveau son OU compétence en consolidation (jamais les deux) */
      let first="sons";
      if(!lesson){const ks=[...targetG()].map(nk),weak=c=>ks.some(k=>!stAtLeast(compStatus(c,k).st,"consolide"));
        first=weak("fus")?"ecouter":weak("lec")?pickOne(["lire","musee"],[])||"ecouter":weak("ecr")?"ecrire":earGame}
      steps=[first];
      steps.push(pickOne(["ecouter","lire","musee","fusee","ecrire"],steps)||"ecouter");   /* 2. application */
      steps.push(pickOne(["ecouter","lire","musee","fusee","ecrire","chenille"],steps)||"musee"); /* 3. révision espacée */
    }else{
      steps=[lesson?"sons":(pickOne(["lire","musee","fusee"],[])||"lire")];           /* 1. lecture */
      steps.push(open("ecrire")&&!steps.includes("ecrire")?"ecrire":pickOne(["musee","lire"],steps)); /* 2. écriture */
      steps.push(pickOne(["train","lire","musee","fusee","ecrire"],steps)||"musee");   /* 3. révision mixte */
    }
    steps=steps.filter(Boolean);
    /* Parcours V1.5 : 1. Hier (rappel court) · 2. Aujourd'hui (cible / découverte) · 3. Je joue avec ce que je sais */
    const rp=rappel();let lab=["Aujourd'hui","Je joue","Je joue"];
    const today=steps[0];
    if(rp.active){
      const hier=prof==="lecteur_en_developpement"?(pickOne(["lire","musee","fusee"],[today])||"musee"):(pickOne(["ecouter","musee"],[today])||"ecouter");
      const mix=pickOne(["ecouter","lire","musee","fusee","ecrire","train","chenille"],[hier,today])||steps[2]||"musee";
      steps=[hier,today,mix];lab=["Hier","Aujourd'hui","Je joue avec ce que je sais"];
    }else lab=["Aujourd'hui","Je joue avec ce que je sais","Je joue avec ce que je sais"];
    return{date:todayKey(),steps,i:0,done:false,lesson,act,prof,lab};
  }
  const want=[];
  if(LOG.length){
    const R=analyse();
    R.consol.forEach(x=>{const g={son:"ecouter",cv:"ecouter",asm:"train",dec:rnd(["lire","musee"]),mo:"fusee"}[x.cat];if(g&&!want.includes(g))want.push(g)});
  }
  if(!want.some(g=>g==="lire"||g==="musee"))want.push(rnd(["lire","musee"]));
  const lastPlay=g=>{for(let i=LOG.length-1;i>=0;i--)if(LOG[i].g===g)return LOG[i].t;return 0};
  const pool=shuffle(["ecouter","ecrire","fusee","train","chenille","lire","musee"].filter(g=>!want.includes(g))).sort((a,b)=>lastPlay(a)-lastPlay(b));
  while(want.length<3&&pool.length)want.push(pool.shift());
  for(let i=want.length-1;i>=0;i--)if(isLocked(want[i]))want.splice(i,1);
  {const more=shuffle(["ecouter","ecrire","chenille","musee","sons"].filter(g=>!want.includes(g)&&!isLocked(g)));while(want.length<3&&more.length)want.push(more.shift())}
  const steps=want.slice(0,3);
  // commencer par un jeu court et rassurant
  steps.sort((a,b)=>(a==="fusee")-(b==="fusee"));
  return{date:todayKey(),steps,i:0,done:false};
}
function curParc(){if(!PARC||PARC.date!==todayKey()||(!PARC.done&&PARC.steps.some(isLocked))){PARC=planParcours();save("parc",PARC)}return PARC}
function renderParcours(){
  document.body.classList.remove("wc-home");
  const P=curParc(),body=$("hBody");body.innerHTML="";
  current="home";$("gamebar").hidden=false;$("gameTitle").textContent="🗓️ Le parcours du jour";
  const card=el("div","parc");
  const sc=el("div","scene"),m=makeMiam("accueil");m.style.width="min(110px,30vw)";
  const names=P.steps.map(g=>PARC_NAMES[g]);
  const talk=P.done?"On a tout fini aujourd'hui ! Bravo !":P.i===0?(P.lab&&P.lab[0]==="Hier"?"D'abord, on se rappelle ce que tu as appris hier : on va "+names[0]+". Ensuite, on va "+names[1]+", et enfin "+names[2]+" !":"Aujourd'hui, on va "+names[0]+", puis "+names[1]+", et enfin "+names[2]+" !"):"On continue ? Prochaine étape : "+names[P.i]+" !";
  sc.append(m,el("div","bubble",talk));card.appendChild(sc);
  const path=el("div","ppath");
  P.steps.forEach((g,i)=>{
    const st=i<P.i||P.done?"done":i===P.i?"cur":"next";
    const n=el("div","pstep "+st,`<span class="pe">${st==="done"?"✅":PLACES[g].e}</span><b>${PLACES[g].n}</b><small>${P.lab&&P.lab[i]?P.lab[i]:"Étape "+(i+1)}</small>`);
    path.appendChild(n);
    if(i<P.steps.length-1)path.appendChild(el("span","parrow","➜"));
  });
  card.appendChild(path);
  if(P.done){card.appendChild(el("p","msg","🏆 Parcours terminé ! Tu peux continuer à jouer si tu veux."));
    if(progAuto()&&PROG){const more=el("button","card btn gobtn","🌟 Encore 3 activités !");more.onclick=()=>{SFX.tap();const N=planParcours();N.bonus=true;N.lab=["Aujourd'hui","Je joue avec ce que je sais","Je joue avec ce que je sais"];
      if(N.steps[0]===P.steps[0]&&N.steps.length>1)N.steps.push(N.steps.shift());PARC=N;save("parc",PARC);PARC_ACTIVE=true;go(PARC.steps[0])};card.appendChild(more)}}
  else{const go_=el("button","card btn gobtn",P.i===0?"▶️ C'est parti !":"▶️ Continuer");go_.onclick=()=>{SFX.tap();PARC_ACTIVE=true;go(P.steps[P.i])};card.appendChild(go_)}
  if(PDAYS)card.appendChild(el("p","rlegend center2","🔥 "+PDAYS+" parcours terminé"+(PDAYS>1?"s":"")+" en tout"));
  body.appendChild(card);
  speak(talk);
}
function parcoursEnd(){
  SECTIONS.forEach(x=>$(x).hidden=x!=="home");current="home";document.body.classList.remove("wc-home");
  const body=$("hBody");body.innerHTML="";$("gamebar").hidden=false;$("gameTitle").textContent="🗓️ Le parcours du jour";
  const p=el("div","party");const m=makeMiam("fete");m.style.margin="0 auto";p.appendChild(m);
  p.appendChild(el("h2","","🏆 Parcours terminé !"));
  p.appendChild(el("p","","Bravo"+(kidName()?" "+kidName():"")+" ! Tu as fait les 3 étapes d'aujourd'hui."));
  p.appendChild(el("div","sticker","🏆"));
  p.appendChild(el("p","","🔥 "+PDAYS+" parcours terminé"+(PDAYS>1?"s":"")+" en tout"));
  const b=el("button","card btn","🗺️ Retour à la carte");b.onclick=()=>{SFX.tap();go("home")};p.appendChild(b);
  body.appendChild(p);SFX.win();setTimeout(()=>{mood(m,"happy");const[x,y]=centerOf(m);sparks(x,y,40)},100);
  speak("Bravo ! Tu as fini le parcours du jour ! Reviens demain pour un nouveau parcours !");
}

/* ---------- Carte d'aventure ---------- */
const PLACES={
  train:{n:"La gare",e:"🚂",bg:"#DCE3EE",t:"🚂 Le train",start:()=>startTrain()},
  fusee:{n:"La base spatiale",e:"🚀",bg:"#C9D3FF",t:"🚀 La fusée",start:()=>startRocket()},
  sons:{n:"L'atelier des sons",e:"🔊",bg:"#F1D9FF",t:"🎧 Les sons",start:()=>startSons()},
  lire:{n:"La bibliothèque",e:"📚",bg:"#F6E1C8",t:"📖 Lire",start:()=>startRead()},
  chenille:{n:"Le jardin",e:"🐛",bg:"#CFF2C2",t:"🐛 Le jardin",start:()=>renderScene("chenille")},
  ecouter:{n:"La cuisine",e:"🍪",bg:"#FFD7BF",t:"🍪 La cuisine",start:()=>renderScene("ecouter")},
  ecrire:{n:"L'école",e:"✏️",bg:"#CFE8FF",t:"✏️ Écrire",start:()=>startWrite()},
  musee:{n:"Le musée",e:"🖼️",bg:"#FFF1C9",t:"🖼️ Le musée",start:()=>startMusee()}
};
const MAP_ORDER=["train","fusee","sons","lire","MIAM","chenille","ecouter","ecrire","musee"];
const SECTIONS=["home","ecouter","lire","ecrire","fusee","train","sons","chenille","musee"];
let current="home";
function parcHowto(id){
  const P=PARC||{},ea=earI(),sons=stageSons();
  if(id==="sons"){
    if(P.lesson&&P.lesson!=="emuet"&&!sonsDone.includes(P.lesson))return "Miam va te faire découvrir un nouveau son : « "+P.lesson+" ». Écoute bien, puis réponds à ses questions !";
    if(P.lesson==="emuet"&&!sonsDone.includes("emuet"))return "Miam va te montrer un secret des mots : le e qu'on n'entend pas, mais qu'on écrit !";
    return P.act==="fus"?(ea<6?"Miam dit un mot en petits morceaux. Écoute bien et trouve le mot !":"Miam dit les petits sons d'un mot. Écoute bien et trouve le mot !"):
           P.act==="pd"?(ea===3?"Miam dit un mot. Trouve le mot qui finit pareil, qui rime !":"Écoute deux sons : sont-ils pareils ou différents ?"):
           "Écoute le son de Miam et trouve le mot qui commence par ce son !";
  }
  return {chenille:ea<5?"Aide la chenille : écoute le mot et compte ses morceaux, ses syllabes !":"Compte les syllabes, puis trouve où se cache le son !",
    ecouter:sons?"Miam a faim ! Écoute le son et donne-lui le biscuit avec la bonne lettre.":"Miam a faim ! Écoute et donne-lui le bon biscuit.",
    musee:sons?"Range le musée : mets chaque lettre sur l'image qui commence par son son.":"Range le musée : mets chaque mot sous la bonne image.",
    ecrire:"À l'école, écoute bien et écris avec les lettres !",lire:"À la bibliothèque, lis et trouve la bonne image !",
    train:"Construis le train du mot avec les wagons-syllabes !",fusee:"Écoute le mot et trouve-le pour faire décoller la fusée !"}[id]||"C'est parti !";
}
function parcIntro(id){
  const t=parcHowto(id),ov=el("div","parcintro"),c=el("div","pic");
  c.innerHTML=`<img src="${MZ.point}" alt="Miam"><div class="pst">${PLACES[id].e} Étape ${PARC.i+1} sur ${PARC.steps.length} · ${PLACES[id].n}</div><p>${t}</p>`;
  const r=el("div","seg"),ok=el("button","card btn","▶ On y va !"),again=el("button","card","🔊 Réécouter");
  ok.onclick=()=>{SFX.tap();SEQ++;try{speechSynthesis.cancel()}catch(e){}ov.remove();go(id)};again.onclick=()=>speak(t);
  r.append(again,ok);c.appendChild(r);ov.appendChild(c);document.body.appendChild(ov);speak(t);
}
function go(id){
  if(PARC_ACTIVE&&PARC&&!PARC.done&&PARC.steps[PARC.i]===id&&id!=="home"){PARC.intro=PARC.intro||{};if(!PARC.intro[PARC.i]){PARC.intro[PARC.i]=1;save("parc",PARC);return parcIntro(id)}}
  if(hasVoice){try{speechSynthesis.cancel()}catch(e){}}
  current=id;SECTIONS.forEach(x=>$(x).hidden=x!==id);
  if(id!=="home")document.body.classList.remove("wc-home");
  document.body.classList.toggle("wc-train",id==="train");
  $("gamebar").hidden=id==="home";
  if(id==="home"){renderHome()}else{
    const inP=PARC_ACTIVE&&PARC&&!PARC.done&&PARC.steps[PARC.i]===id;
    $("gameTitle").textContent=PLACES[id].t+(inP?" · étape "+(PARC.i+1)+"/3":"");PLACES[id].start()}
  window.scrollTo(0,0);
}
/* Points d'arrivée de Miam devant chaque lieu (en % de la carte) */
const MIAM_SPOTS={depart:[56,38],train:[37,31],fusee:[60,30.2],sons:[41,47.4],chenille:[67.4,49.8],ecouter:[73,61.5],lire:[37.5,66.2],ecrire:[41.5,84.6],musee:[65.5,80.3]};
let mapBusy=false;
function renderHome(){
  document.body.classList.add("wc-home");mapBusy=false;
  const body=$("hBody");body.innerHTML="";
  const outer=el("div","wcwrap"),wrap=el("div","wchome");
  const img=document.createElement("img");img.className="wchome-img";img.src=WC_HOME_IMG;img.alt="Le village de Miamots";img.draggable=false;wrap.appendChild(img);
  wrap.appendChild(el("div","wc-score",`<span>${stars}</span>`));
  const P=curParc(),steps=el("div","wc-steps");
  P.steps.forEach((g,i)=>{steps.appendChild(el("div","wc-step",(i<P.i||P.done)?"✅":PLACES[g].e));if(i<P.steps.length-1)steps.appendChild(el("span","wc-arrow","➜"))});
  wrap.appendChild(steps);
  // Miam habite la carte : il est devant le dernier lieu visité
  let at=load("miamAt","depart");if(!MIAM_SPOTS[at])at="depart";
  const mm=el("div","mapmiam",`<img src="${MV.front}" alt="Miam">`);mm.setAttribute("role","button");mm.setAttribute("aria-label","Miam");
  const place=(pt)=>{mm.style.left=pt[0]+"%";mm.style.top=pt[1]+"%"};place(MIAM_SPOTS[at]);mm._pt=MIAM_SPOTS[at].slice();
  mm.onclick=()=>{if(mapBusy)return;speak(rnd(["Miam ! On joue ?","Choisis un endroit !","Où on va ?","Allez, on y va !","Coucou"+(kidName()?" "+kidName():"")+" !"]));
    if(!reduced)mm.querySelector("img").animate([{transform:"translateY(0)"},{transform:"translateY(-30%)"},{transform:"translateY(0) scale(1.08,.9)"},{transform:"none"}],{duration:520,easing:"ease-out"})};
  const hops={};
  const add=(cls,label,fn,hopTo)=>{const b=el("button","wchot "+cls,"");b.type="button";b.setAttribute("aria-label",label);
    b.onclick=e=>{e.preventDefault();if(mapBusy)return;SFX.tap();if(hopTo){mapBusy=true;miamGo(mm,wrap,hopTo,b).then(fn)}else fn()};wrap.appendChild(b);return b};
  add("wc-parc","Le parcours du jour",()=>{
    if(P.done){renderParcours();return}
    PARC_ACTIVE=true;const g=P.steps[P.i];const b=wrap.querySelector(".wc-"+({train:"gare",fusee:"fusee",sons:"sons",lire:"lire",chenille:"jardin",ecouter:"maison",ecrire:"ecole",musee:"musee"}[g]));
    mapBusy=true;speak("C'est parti pour le parcours du jour !");miamGo(mm,wrap,g,b).then(()=>go(g));
  });
  add("wc-album","Mon album",()=>openAlbum());
  add("wc-gear","Espace adulte",()=>adultGate(openSettings));
  add("wc-gare","La gare",()=>go("train"),"train");add("wc-fusee","La base spatiale",()=>go("fusee"),"fusee");add("wc-sons","L'atelier des sons",()=>go("sons"),"sons");
  add("wc-lire","La bibliothèque",()=>go("lire"),"lire");add("wc-jardin","Le jardin",()=>go("chenille"),"chenille");
  add("wc-maison","La cuisine",()=>go("ecouter"),"ecouter");add("wc-ecole","L'école",()=>go("ecrire"),"ecrire");add("wc-musee","Le musée",()=>go("musee"),"musee");
  add("wc-report","Compte rendu (adulte)",()=>adultGate(openReport));
  add("wc-settings","Réglages adulte",()=>adultGate(openSettings));
  wrap.appendChild(mm);
  lockPlaces(wrap);
  outer.appendChild(wrap);
  if(PROFILES.length>1){const P2=curProfile(),ch=el("button","card whochip",`<span>${P2.av}</span> ${P2.name||"Enfant"} <small>· changer</small>`);ch.onclick=()=>{SFX.tap();openWho()};outer.appendChild(ch)}
  if(canOfferInstall()&&Date.now()>load("installLater",0)){
    const ib=el("div","card installbar",`<span class="pe">📲</span><div><b>Installer Miamots</b><small>Sur l'écran d'accueil, comme une vraie app.</small></div>`);
    const go_=el("button","card btn","Installer");go_.onclick=()=>{SFX.tap();openInstall()};
    const x=el("button","ibx","✕");x.setAttribute("aria-label","Plus tard");x.onclick=()=>{save("installLater",Date.now()+3*864e5);ib.remove()};
    ib.append(go_,x);outer.appendChild(ib);
  }
  body.appendChild(outer);
}
/* Miam regarde vers le lieu, fait 1 à 3 bonds jusqu'à lui, atterrit, le lieu fait « pop » */
function miamGo(mm,wrap,key,btn){
  return new Promise(async res=>{
    const to=MIAM_SPOTS[key],from=mm._pt||MIAM_SPOTS.depart,img=mm.querySelector("img");
    save("miamAt",key);
    if(reduced||!mm.animate){mm.style.left=to[0]+"%";mm.style.top=to[1]+"%";mm._pt=to.slice();if(btn)btn.classList.add("pop");setTimeout(res,200);return}
    const W=wrap.clientWidth,H=wrap.clientHeight;
    const dx=(to[0]-from[0])*W/100,dy=(to[1]-from[1])*H/100,dist=Math.hypot(dx,dy);
    img.src=Math.abs(dx)>Math.abs(dy)*.6?(dx>0?MV.r34:MV.l34):(dy<0?MV.back:MV.front);
    mm.classList.add("hopping");
    // petit élan
    await img.animate([{transform:"none"},{transform:"scale(1.06,.88)"},{transform:"none"}],{duration:160,easing:"ease-out"}).finished;
    const n=dist<4?0:Math.max(1,Math.min(3,Math.round(dist/(W*.2))));
    const per=Math.min(300,Math.max(220,780/Math.max(n,1)));
    for(let k=1;k<=n;k++){
      const a=[from[0]+(to[0]-from[0])*(k-1)/n,from[1]+(to[1]-from[1])*(k-1)/n],z=[from[0]+(to[0]-from[0])*k/n,from[1]+(to[1]-from[1])*k/n];
      const pos=mm.animate([{left:a[0]+"%",top:a[1]+"%"},{left:z[0]+"%",top:z[1]+"%"}],{duration:per,easing:"linear",fill:"forwards"});
      img.animate([{transform:"translateY(0)"},{transform:"translateY(-42%)",offset:.5},{transform:"translateY(0)"}],{duration:per,easing:"ease-in-out"});
      SFX.tap();
      await pos.finished;mm.style.left=z[0]+"%";mm.style.top=z[1]+"%";pos.cancel();
    }
    mm._pt=to.slice();
    // atterrissage
    img.src=MV.front;
    await img.animate([{transform:"scale(1.12,.84)"},{transform:"scale(.96,1.05)"},{transform:"none"}],{duration:260,easing:"ease-out"}).finished;
    mm.classList.remove("hopping");
    if(btn){btn.classList.remove("pop");void btn.offsetWidth;btn.classList.add("pop")}
    SFX.pop();
    setTimeout(res,260);
  });
}
/* ---------- Espace adulte : maintenir 2 secondes ---------- */
let gateUntil=0;
function adultGate(fn){
  if(Date.now()<gateUntil){fn();return}
  let d=$("gateDlg");
  if(!d){d=document.createElement("dialog");d.id="gateDlg";document.body.appendChild(d)}
  d.innerHTML=`<div class="dlg"><h2>🔒 Espace adulte</h2><p>Pour entrer, maintenez le bouton enfoncé pendant 2 secondes.</p><button class="card gatebtn" id="gateBtn"><i></i><span>Maintenir ici</span></button><div class="dlg-foot"><span></span><button class="link" id="gateNo">Retour</button></div></div>`;
  const close=()=>{if(d.close)d.close();else d.removeAttribute("open")};
  $("gateNo").onclick=close;
  const btn=$("gateBtn"),bar=btn.querySelector("i");let t0=0,raf=0;
  const stop=()=>{cancelAnimationFrame(raf);t0=0;bar.style.width="0"};
  const tick=()=>{const p=Math.min(1,(Date.now()-t0)/2000);bar.style.width=(p*100)+"%";if(p>=1){gateUntil=Date.now()+10*60*1000;close();setTimeout(fn,60);return}raf=requestAnimationFrame(tick)};
  btn.addEventListener("pointerdown",e=>{e.preventDefault();t0=Date.now();tick()});
  ["pointerup","pointerleave","pointercancel"].forEach(ev=>btn.addEventListener(ev,stop));
  btn.addEventListener("contextmenu",e=>e.preventDefault());
  if(d.showModal)d.showModal();else d.setAttribute("open","");
}
$("homeBtn").onclick=()=>{SFX.tap();go("home")};
$("title").onclick=()=>go("home");
$("title").onkeydown=e=>{if(e.key==="Enter")go("home")};

/* ---------- Onglets ---------- */


/* ---------- Album ---------- */
function renderAlbum(){
  migrateAlbum();
  const tabs=$("albumTabs");tabs.innerHTML="";
  STICKER_PAGES.forEach((pg,i)=>{const have=pg.items.filter(x=>album.includes(x)).length;const b=el("button","card"+(i===albumPage?" on":""),`${pg.e} ${have}/${pg.items.length}`);b.setAttribute("aria-label","Page "+pg.n);b.onclick=()=>{albumPage=i;renderAlbum()};tabs.appendChild(b)});
  {const b=el("button","card"+(albumPage==="photos"?" on":""),`📸 ${MPH.length}/${PHOTOS.length}`);b.setAttribute("aria-label","Photos de Miam");b.onclick=()=>{albumPage="photos";renderAlbum()};tabs.appendChild(b)}
  const g=$("albumGrid");g.innerHTML="";
  if(albumPage==="photos"){
    g.className="album photos";
    PHOTOS.forEach((src,i)=>{const have=MPH.includes(i);const c=el("span",have?"pol have":"pol miss",have?`<img src="${src}" alt="">`:"📷");c.style.setProperty("--r",((i*37)%7-3)+"deg");if(have)c.onclick=()=>{const ov=el("div","photopop",`<div class="polaroid"><img src="${src}" alt="Miam"></div>`);ov.onclick=()=>ov.remove();document.body.appendChild(ov)};g.appendChild(c)});
    $("albumText").textContent=`Les photos de Miam sur la Terre : ${MPH.length} sur ${PHOTOS.length}. Termine un parcours du jour ou une page d'autocollants pour en gagner une !`;
    return;
  }
  g.className="album";
  const pg=STICKER_PAGES[albumPage];
  pg.items.forEach(x=>{const have=album.includes(x);g.appendChild(el("span",have?"have"+(GOLD.includes(x)?" gold":""):"miss",have?stkHTML(x):"?"))});
  const all=STICKER_PAGES.every(p=>p.items.every(x=>album.includes(x)));
  $("albumText").textContent=`${pg.e} ${pg.n}. Tu as ${album.length} autocollants sur ${STICKERS.length}`+(GOLD.length?`, dont ${GOLD.length} dorés ✨`:"")+(medals?` et ${medals} médaille${medals>1?"s":""} 🏅`:"")+". "+(all?"Ton album est complet : chaque nouvelle partie rend un autocollant doré !":"Chaque jeu donne les autocollants de son lieu !");
}

function openAlbum(){
  migrateAlbum();
  const last=album[album.length-1],lp=STICKER_PAGES.findIndex(p=>p.items.includes(last));
  albumPage=lp<0?0:lp;renderAlbum();
  const d=$("albumDlg");if(d.showModal)d.showModal();else d.setAttribute("open","");
}
$("pill").onclick=()=>{SFX.tap();openAlbum()};
$("closeAlbum").onclick=()=>{const d=$("albumDlg");if(d.close)d.close();else d.removeAttribute("open")};

/* ---------- Réglages ---------- */
function cfgRow([k,label,opts]){
  const row=el("div","cfgrow");row.appendChild(el("div","lab",label));
  const sg=el("div","seg");
  opts.forEach(([v,t])=>{const b=el("button","card"+(String(CFG[k])===String(v)?" on":""),t);b.onclick=()=>{CFG[k]=v;save("cfg",CFG);renderSettings()};sg.appendChild(b)});
  row.appendChild(sg);return row;
}
/* Ouvert depuis un jeu : les options de ce jeu arrivent en haut */
const GAME_CFG={ecouter:["nourrirN","vc"],lire:["lireN"],fusee:["fuseeN"],train:["trainPiege"],musee:["museeN","museeSon"],ecrire:["ecrireKb"]};
let SET_FROM=null;
function renderGameOpts(){
  const box=$("gameOpts");if(!box)return;box.innerHTML="";
  const g=SET_FROM,keys=GAME_CFG[g];if(!g||!PLACES[g])return;
  const w=el("div","gameopts");w.appendChild(el("div","rowlab",`<b>⚙️ Réglages de ce jeu : ${PLACES[g].n}</b>`));
  (keys||[]).forEach(k=>{const d=CFG_DEF.find(x=>x[0]===k);if(d)w.appendChild(cfgRow(d))});
  if(GAMES[g]){const P=lv(g),row=el("div","cfgrow");row.appendChild(el("div","lab","Niveau du jeu (forme : nombre de choix, pièges)"));const sg=el("div","seg");
    [1,2,3].forEach(n=>{const b=el("button","card"+(P.lvl===n?" on":""),"Niveau "+n);b.onclick=()=>{P.lvl=n;P.pts=0;P.hard=0;save("levels",LV);renderSettings()};sg.appendChild(b)});row.appendChild(sg);w.appendChild(row)}
  if(!keys&&!GAMES[g])w.appendChild(el("p","rlegend","Ce lieu suit l'échelle de l'oreille (voir Progression ci-dessous)."));
  box.appendChild(w);
}
function renderSettings(){
  const sv=$("setVoy"),sc=$("setCons");sv.innerHTML="";sc.innerHTML="";
  const mk=(g,cls,box)=>{const b=el("button","card chip "+cls+(sel.has(g)?" on":""),g);b.setAttribute("aria-pressed",sel.has(g));
    b.onclick=()=>{sel.has(g)?sel.delete(g):sel.add(g);save("sel3",[...sel]);renderSettings()};box.appendChild(b)};
  VOY.forEach(v=>mk(v,"v",sv));CONS.forEach(c=>mk(c,"c",sc));
  document.querySelectorAll("#rateSeg .card").forEach(b=>b.classList.toggle("on",+b.dataset.rate===rate));
  document.querySelectorAll("#sfxSeg .card").forEach(b=>b.classList.toggle("on",(b.dataset.sfx==="1")===sfxOn));
  const ss=$("setStruct");ss.innerHTML="";const sw=soundWords();
  STRUCTS.forEach(([k,ex])=>{
    const list=sw.filter(w=>struct(w)===k),on=structs.has(k);
    const sample=list.length?list.slice(0,3).map(w=>w.w).join(", "):ex;
    const b=el("button","card schip"+(on?" on":""),`<b>${k==="autre"?"Autres":k}</b><small>${sample} · ${list.length} mot${list.length>1?"s":""}</small>`);
    b.setAttribute("aria-pressed",on);
    b.onclick=()=>{on?structs.delete(k):structs.add(k);save("structs",[...structs]);renderSettings()};
    ss.appendChild(b);
  });
  const cs=$("cfgSet");cs.innerHTML="";
  CFG_DEF.filter(d=>d[0]!=="weeksSounds").forEach(d=>cs.appendChild(cfgRow(d)));
  renderGameOpts();
  document.querySelectorAll("#weeksSeg [data-v]").forEach(b=>{b.classList.toggle("on",(CFG.weeksSounds||"tous")===b.dataset.v);b.onclick=()=>{CFG.weeksSounds=b.dataset.v;save("cfg",CFG);renderSettings()}});
  const ls=$("lvlSet");ls.innerHTML="";
  Object.entries(GAMES).forEach(([g,name])=>{
    const row=el("div","lvlrow");row.appendChild(el("span","name",name));
    const minus=el("button","card","−"),plus=el("button","card","+"),n=el("span","n","Niveau "+lv(g).lvl);
    minus.setAttribute("aria-label","Baisser le niveau de "+name);plus.setAttribute("aria-label","Monter le niveau de "+name);
    minus.onclick=()=>{const P=lv(g);P.lvl=Math.max(1,P.lvl-1);P.pts=0;P.hard=0;save("levels",LV);renderSettings()};
    plus.onclick=()=>{const P=lv(g);P.lvl=Math.min(3,P.lvl+1);P.pts=0;P.hard=0;save("levels",LV);renderSettings()};
    row.append(minus,n,plus);ls.appendChild(row);
  });
  const n=availWords().length;
  $("wordCount").textContent=n+(n>1?" mots peuvent":" mot peut")+" être lus et écrits avec ces sons.";
}
document.querySelectorAll("#rateSeg .card").forEach(b=>b.onclick=()=>{rate=+b.dataset.rate;save("rate",rate);renderSettings();speak("Bonjour, je suis Miam !")});
document.querySelectorAll("#sfxSeg .card").forEach(b=>b.onclick=()=>{sfxOn=b.dataset.sfx==="1";save("sfx",sfxOn);renderSettings();SFX.yes()});
$("cwAdd").onclick=()=>{
  const raw=$("cwWord").value.trim().toLowerCase(),e=$("cwEmoji").value.trim(),outil=false,msg=$("cwMsg");
  if(!raw){msg.textContent="Écrivez un mot.";return}
  if(!/^[a-zàâäçéèêëîïôöûùüÿœæ'’ \-·.]+$/i.test(raw)){msg.textContent="Seulement des lettres et des tirets, s'il vous plaît.";return}
  const syl=raw.split(/[-·.\s]+/).filter(Boolean),w=syl.join("");
  if(WORDS.some(x=>x.w===w)){msg.textContent="« "+w+" » est déjà dans la banque.";return}
  const c={w,syl,e:e||null,outil};CUSTOM.push(c);save("custom",CUSTOM);addCustomToBank(c);
  $("cwWord").value="";$("cwEmoji").value="";
  msg.textContent="✅ « "+w+" » ajouté"+(e?".":" (sans image : il n'apparaîtra pas dans Lire ni le Musée).");
  renderBank();
};
/* ----- Mots de la semaine ----- */
const AI_PROMPT=`Voici la photo d'une liste de mots de lecture pour un enfant de 5 à 7 ans qui apprend à lire en français.
Écris chaque mot sur une ligne, en minuscules, avec les syllabes séparées par des tirets, puis un seul émoji qui représente le mot (aucun émoji si le mot ne peut pas se dessiner).
N'écris rien d'autre que la liste. Exemple :
to-ma-te 🍅
lu-ne 🌙
pa-pa 👨`;
let wkDraft=null;
function cleanItems(arr){
  if(!Array.isArray(arr))return[];
  return arr.map(x=>{
    const w=String(x&&x.w||"").trim().toLowerCase().replace(/[^a-zàâäçéèêëîïôöûùüÿœæ'’-]/g,"");
    if(!w)return null;
    let syl=Array.isArray(x.syl)?x.syl.map(z=>String(z).toLowerCase().trim()).filter(Boolean):[w];
    if(syl.join("")!==w)syl=[w];
    return{w,syl,e:x.e?String(x.e).trim().slice(0,8):null,outil:!!x.outil,keep:true};
  }).filter(Boolean).filter((x,i,a)=>a.findIndex(y=>y.w===x.w)===i);
}
function defaultWeekName(){const d=new Date(),day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return "Semaine du "+d.toLocaleDateString("fr-CA",{day:"numeric",month:"long"})}
function renderReview(){
  const box=$("wkReview");box.innerHTML="";
  if(!wkDraft)return;
  if(wkDraft.loading){box.innerHTML=`<div class="thinking">${wkDraft.loading}</div>`;return}
  if(wkDraft.error){box.innerHTML=`<p class="expmsg">${wkDraft.error}</p>`;return}
  const h=el("div","");
  h.appendChild(el("div","rowlab","Vérifiez les mots ("+wkDraft.items.length+")"));
  const nm=el("input","bsearch");nm.type="text";nm.value=wkDraft.name;nm.oninput=()=>wkDraft.name=nm.value;h.appendChild(nm);
  wkDraft.items.forEach((it,i)=>{
    const r=el("div","rvrow");
    const ck=el("input","");ck.type="checkbox";ck.checked=it.keep;ck.onchange=()=>it.keep=ck.checked;
    const sy=el("input","rvsyl");sy.type="text";sy.value=it.syl.join("-");sy.oninput=()=>{const p=sy.value.toLowerCase().split(/[-·.\s]+/).filter(Boolean);it.syl=p;it.w=p.join("")};
    const em=el("input","rve");em.type="text";em.value=it.e||"";em.placeholder="🖼️";em.oninput=()=>it.e=em.value.trim()||null;
    r.append(ck,sy,em);h.appendChild(r);
  });
  h.appendChild(el("p","rlegend","Syllabes séparées par des tirets. L'émoji est facultatif : sans image, le mot n'apparaît pas dans Lire ni le Musée."));
  const row=el("div","seg");
  const ok=el("button","card btn","✅ Ajouter cette semaine");ok.onclick=()=>{
    const words=wkDraft.items.filter(x=>x.keep&&x.w).map(x=>({w:x.w,syl:x.syl.length?x.syl:[x.w],e:x.e}));
    if(!words.length)return;
    WEEKS.unshift({id:"wk"+Date.now(),name:(wkDraft.name||defaultWeekName()).trim(),on:true,words});
    save("weeks",WEEKS);rebuildWeeks();wkDraft=null;$("wkText").value="";renderBank();
  };
  const no=el("button","card","Annuler");no.onclick=()=>{wkDraft=null;renderReview()};
  row.append(ok,no);h.appendChild(row);box.appendChild(h);
}
function parseLines(txt){
  return txt.split(/\n|;/).map(l=>l.trim().replace(/^[-•*\d.)\s]+(?=\S)/,"")).filter(Boolean).map(l=>{
    let outil=false;
    if(/^⭐\uFE0F?/.test(l)){outil=true;l=l.replace(/^⭐\uFE0F?\s*/,"")}
    const m=l.match(/\p{Extended_Pictographic}[\uFE0F\u200D\p{Extended_Pictographic}]*/u),em=m?m[0]:null;
    const t=(em?l.replace(em,""):l).trim().toLowerCase();
    const syl=t.split(/[-·.\s]+/).filter(Boolean);
    return{w:syl.join(""),syl,e:em,outil};
  });
}
$("wkCheck").onclick=()=>{
  const items=cleanItems(parseLines($("wkText").value));
  if(!items.length){wkDraft={error:"Écrivez au moins un mot."};renderReview();return}
  wkDraft={name:defaultWeekName(),items};renderReview();
};
$("wkPrompt").value=AI_PROMPT;
$("wkCopy").onclick=async()=>{
  const ta=$("wkPrompt"),msg=$("wkCopyMsg");
  try{await navigator.clipboard.writeText(AI_PROMPT);msg.textContent="✅ Copié ! Collez-le dans l'IA avec la photo."}
  catch(e){ta.focus();ta.select();msg.textContent="Le texte est sélectionné : faites « Copier » avec votre téléphone."}
};
$("wkOnly").onchange=()=>{CFG.onlyWeeks=$("wkOnly").checked;save("cfg",CFG);renderBank()};
function renderWeeks(){
  $("wkOnly").checked=!!CFG.onlyWeeks;
  const box=$("wkList");box.innerHTML="";
  if(!WEEKS.length){box.appendChild(el("p","rlegend","Aucune semaine pour l'instant."));return}
  WEEKS.forEach(wk=>{
    const c=el("div","wk"+(wk.on?"":" off"));
    const hd=el("div","wkhead");
    const lab=el("label","");const ck=el("input","");ck.type="checkbox";ck.checked=wk.on;ck.onchange=()=>{wk.on=ck.checked;save("weeks",WEEKS);rebuildWeeks();renderBank()};
    lab.append(ck,document.createTextNode(wk.name+" ("+wk.words.length+")"));
    const del=el("button","","🗑️");del.setAttribute("aria-label","Supprimer "+wk.name);
    del.onclick=()=>{if(!del.dataset.armed){del.dataset.armed="1";del.textContent="Supprimer ?";setTimeout(()=>{delete del.dataset.armed;del.textContent="🗑️"},3000);return}WEEKS.splice(WEEKS.indexOf(wk),1);save("weeks",WEEKS);rebuildWeeks();renderBank()};
    hd.append(lab,del);c.appendChild(hd);
    const ws=el("div","wkwords");
    wk.words.forEach((x,i)=>{const t=el("span","wkw",x.syl.join("·")+(x.e?" "+x.e:""));const r=el("button","","✕");r.setAttribute("aria-label","Retirer "+x.w);r.onclick=()=>{wk.words.splice(i,1);save("weeks",WEEKS);rebuildWeeks();renderBank()};t.appendChild(r);ws.appendChild(t)});
    c.appendChild(ws);box.appendChild(c);
  });
}
let bankTab="tous";
function renderBank(){
  renderWeeks();renderReview();
  const q=($("bankSearch").value||"").trim().toLowerCase(),av=new Set(availWords().map(w=>w.w));
  const tabs=[["tous","Tous"],["dispo","Disponibles"],["ajoutes","Ajoutés"],["semaines","Semaines"],["caches","Retirés"]];
  const tb=$("bankTabs");tb.innerHTML="";
  tabs.forEach(([k,t])=>{const b=el("button","card"+(bankTab===k?" on":""),t);b.onclick=()=>{bankTab=k;renderBank()};tb.appendChild(b)});
  let list=WORDS.slice().sort((a,b)=>a.w.localeCompare(b.w,"fr"));
  if(q)list=list.filter(w=>w.w.includes(q));
  if(bankTab==="dispo")list=list.filter(w=>av.has(w.w));
  if(bankTab==="ajoutes")list=list.filter(w=>w.custom&&!w.weekOnly);
  if(bankTab==="semaines")list=list.filter(w=>(w.weeks||[]).length);
  if(bankTab==="caches")list=list.filter(w=>HIDDEN.has(w.w));
  const bl=$("bankList");bl.innerHTML="";
  list.forEach(w=>{
    const off=HIDDEN.has(w.w),ok=av.has(w.w);
    const row=el("div","brow"+(off?" off":""));
    row.appendChild(el("span","be",w.e||"🔊"));
    const why=off?"retiré des jeux":ok?"✅ dans les jeux":"⚪ sons pas encore cochés";
    const bw=el("button","bw",`${w.s.map(g=>g.join("")).join("·")}<small>${inWeeks(w)?"📅 "+WEEKS.filter(k=>(w.weeks||[]).includes(k.id)).map(k=>k.name).join(", ")+" · ":w.custom?"Ajouté · ":""}${struct(w)==="autre"?"":struct(w)+" · "}niveau ${wordLevel(w)} · ${why}</small>`);
    bw.onclick=()=>speak(w.w);row.appendChild(bw);
    const hid=el("button","bb",off?"👁️":"🙈");hid.setAttribute("aria-label",off?"Remettre dans les jeux":"Retirer des jeux");
    hid.onclick=()=>{off?HIDDEN.delete(w.w):HIDDEN.add(w.w);save("hidden",[...HIDDEN]);renderBank()};row.appendChild(hid);
    if(w.custom){const x=el("button","bb","✕");x.setAttribute("aria-label","Effacer "+w.w);
      x.onclick=()=>{const k=CUSTOM.findIndex(c=>c.w===w.w);if(k>=0)CUSTOM.splice(k,1);save("custom",CUSTOM);const j=WORDS.indexOf(w);if(j>=0)WORDS.splice(j,1);renderBank()};row.appendChild(x)}
    bl.appendChild(row);
  });
  $("bankCount").textContent=`${WORDS.length} mots dans la banque · ${av.size} dans les jeux en ce moment · ${WORDS.filter(w=>w.custom).length} ajoutés`;
}
function openBank(){renderBank();const d=$("bankDlg");if(d.showModal)d.showModal();else d.setAttribute("open","")}
$("openBank").onclick=()=>{closeSettings();setTimeout(openBank,50)};
$("kidName").oninput=()=>{setKidName($("kidName").value);renderProfiles()};
$("addProf").onclick=()=>{closeSettings();setTimeout(addProfile,50)};
$("openWeeks").onclick=()=>{closeSettings();setTimeout(()=>{openBank();const d=document.querySelector("#bankDlg details.addw");if(d)d.open=true;$("bankDlg").querySelector(".dlg").scrollTop=0},50)};
$("closeBank").onclick=()=>{const d=$("bankDlg");if(d.close)d.close();else d.removeAttribute("open");refreshAll()};
$("bankSearch").oninput=renderBank;
let recCur=null,mediaRec=null;
const REC_ORDER=()=>{const first=Object.keys(LESSONS);return first.concat([...VOY,...CONS].filter(g=>!first.includes(g)))};
function renderRec(){
  const box=$("recList");box.innerHTML="";
  REC_ORDER().forEach(k=>{const b=el("button","card recchip"+(getRec(k)?" has":"")+(recCur===k?" cur":""),k);b.onclick=()=>{recCur=recCur===k?null:k;renderRec();if(recCur)setTimeout(()=>$("recPanel").scrollIntoView({block:"nearest",behavior:"smooth"}),30)};box.appendChild(b)});
  const p=$("recPanel");
  if(!recCur){p.hidden=true;return}
  p.hidden=false;const has=!!getRec(recCur),ownR=!!getOwnRec(recCur);
  p.innerHTML=`<div style="font-weight:700;margin-bottom:6px">Son « ${recCur} » ${getOwnRec(recCur)?"· votre voix ✅":has?"· voix Miamots 🎧":"· voix du téléphone"}</div><div class="seg"><button class="card" id="recGo">🎙️ ${has?"Réenregistrer":"Enregistrer"}</button><button class="card" id="recPlay">▶️ Écouter</button>${ownR?'<button class="card" id="recDel">🗑️ Effacer ma voix</button>':""}</div><p class="expmsg" id="recMsg"></p>`;
  $("recPlay").onclick=()=>playSnd(recCur);
  if(ownR)$("recDel").onclick=()=>{try{localStorage.removeItem("lam_rec_"+recCur);localStorage.removeItem("lam_recm_"+recCur)}catch(e){}renderRec()};
  $("recGo").onclick=startRec;
}
function storeRec(k,blob,msg,after){
  if(blob.size>600000){if(msg)msg.textContent="Enregistrement trop long : gardez-le sous 3 secondes.";return}
  const r=new FileReader();
  r.onload=()=>{try{localStorage.setItem("lam_rec_"+k,r.result);if(after)after()}catch(e){if(msg)msg.textContent="Plus de place pour enregistrer : effacez un autre son."}};
  r.readAsDataURL(blob);
}
/* Enregistre un son : micro de la page si possible, sinon l'enregistreur du téléphone */
async function recordInto(k,btn,msg,after){
  if(mediaRec&&mediaRec.state==="recording"){mediaRec.stop();return}
  let stream=null;
  try{if(navigator.mediaDevices&&window.MediaRecorder)stream=await navigator.mediaDevices.getUserMedia({audio:true})}catch(e){stream=null}
  if(!stream){
    const f=$("recFile");f.value="";f.onchange=()=>{if(f.files&&f.files[0])storeRec(k,f.files[0],msg,after)};f.click();
    if(msg)msg.textContent="Enregistrez le son avec l'enregistreur du téléphone, puis validez.";return;
  }
  const chunks=[],label=btn.innerHTML;mediaRec=new MediaRecorder(stream);
  mediaRec.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data)};
  mediaRec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());btn.innerHTML=label;storeRec(k,new Blob(chunks,{type:mediaRec.mimeType||"audio/webm"}),msg,after)};
  mediaRec.start();btn.innerHTML='<span class="recdot"></span>Arrêter';if(msg)msg.textContent="Dites le son, puis touchez « Arrêter ».";
  setTimeout(()=>{if(mediaRec&&mediaRec.state==="recording")mediaRec.stop()},4000);
}
function startRec(){const k=recCur;recordInto(k,$("recGo"),$("recMsg"),()=>{renderRec();const m=$("recMsg");if(m)m.textContent="✅ Enregistré."})}

/* ---------- Banque des sons (phonèmes) enregistrés par l'adulte ---------- */
const PHONEMES=[
 {g:"Voyelles",k:"a",ex:"🐀 rat",tip:"Dites « aaa » d'une voix normale, environ 1 seconde."},
 {g:"Voyelles",k:"i",ex:"🏝️ île",tip:"« iii », environ 1 seconde."},
 {g:"Voyelles",k:"o",ex:"🚲 vélo (le o de la fin)",tip:"« ooo », comme dans moto."},
 {g:"Voyelles",k:"u",ex:"🌙 lune",tip:"« uuu », les lèvres en avant."},
 {g:"Voyelles",k:"é",ex:"☕ café",tip:"« ééé », comme à la fin de café."},
 {g:"Voyelles",k:"è",ex:"👩 mère",tip:"« èèè », ouvert, comme dans mère."},
 {g:"Voyelles",k:"e",ex:"🙂 le petit « e » de cheval",tip:"Un « e » léger et court, comme dans « le »."},
 {g:"Voyelles",k:"ou",ex:"🐺 loup",tip:"« ououou », environ 1 seconde."},
 {g:"Voyelles",k:"on",ex:"🦁 lion",tip:"« on » bien nasal, environ 1 seconde."},
 {g:"Voyelles",k:"an",ex:"🧒 enfant",tip:"« an » bien nasal."},
 {g:"Voyelles",k:"in",ex:"🐰 lapin",tip:"« in » bien nasal."},
 {g:"Voyelles",k:"oi",ex:"👑 roi",tip:"« oi » en un seul son, comme dans roi."},
 {g:"Voyelles",k:"eu",ex:"🔥 feu",tip:"« eu », comme dans feu."},
 {g:"Sons qui s'allongent",k:"m",ex:"🏍️ moto",tip:"Tenez le son « mmmm » environ 2 secondes, sans voyelle à la fin."},
 {g:"Sons qui s'allongent",k:"l",ex:"🦙 lama",tip:"« llll » tenu 2 secondes, la langue derrière les dents."},
 {g:"Sons qui s'allongent",k:"s",ex:"🐍 serpent",tip:"« ssss » tenu 2 secondes, comme un serpent."},
 {g:"Sons qui s'allongent",k:"f",ex:"🔥 feu",tip:"« ffff » tenu 2 secondes, comme un pneu qui se dégonfle."},
 {g:"Sons qui s'allongent",k:"r",ex:"🐀 rat",tip:"« rrrr » tenu 2 secondes, au fond de la gorge."},
 {g:"Sons qui s'allongent",k:"v",ex:"🚲 vélo",tip:"« vvvv » tenu 2 secondes, comme une mouche."},
 {g:"Sons qui s'allongent",k:"ch",ex:"🐱 chat",tip:"« chhhh » tenu 2 secondes, comme pour dire chut."},
 {g:"Sons qui s'allongent",k:"j",ex:"🥋 judo",tip:"« jjjj » tenu 2 secondes."},
 {g:"Sons qui s'allongent",k:"n",ex:"👃 nez",tip:"« nnnn » tenu 2 secondes, par le nez."},
 {g:"Sons qui s'allongent",k:"z",ex:"🦓 zèbre",tip:"« zzzz » tenu 2 secondes, comme une abeille."},
 {g:"Sons brefs",k:"p",ex:"🍐 poire",tip:"Un « p » très court, juste le petit souffle, sans dire « peu »."},
 {g:"Sons brefs",k:"t",ex:"🍅 tomate",tip:"Un « t » très court, sans dire « teu »."},
 {g:"Sons brefs",k:"b",ex:"👶 bébé",tip:"Un « b » très court, sans dire « beu »."},
 {g:"Sons brefs",k:"d",ex:"🎲 dé",tip:"Un « d » très court, sans dire « deu »."},
 {g:"Sons brefs",k:"k",ex:"☕ café (c, k, qu)",tip:"Un « k » très court, sans dire « keu »."},
 {g:"Sons brefs",k:"g",ex:"🍰 gâteau",tip:"Un « g » très court (comme dans gare), sans dire « gueu »."}
];
const PH_LONG=new Set(["m","l","s","f","r","v","ch","j","n","z"]);
let phI=0,phRec=null;
/* Repère le début et la fin du son pour couper les silences */
async function analyseRec(k,blob){
  try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
    const ac=new C(),buf=await ac.decodeAudioData(await blob.arrayBuffer());
    const d=buf.getChannelData(0),sr=buf.sampleRate,win=Math.floor(sr*.01),rms=[];
    for(let i=0;i+win<=d.length;i+=win){let q=0;for(let j=i;j<i+win;j++)q+=d[j]*d[j];rms.push(Math.sqrt(q/win))}
    const peak=Math.max(...rms),th=Math.max(.012,peak*.12);
    let a=rms.findIndex(v=>v>th),b=rms.length-1-[...rms].reverse().findIndex(v=>v>th);
    if(a<0)return;
    const s=Math.max(0,a*.01-.04),e=Math.min(buf.duration,(b+1)*.01+.1);
    localStorage.setItem("lam_recm_"+k,JSON.stringify({s:+s.toFixed(3),e:+e.toFixed(3)}));
    try{ac.close()}catch(_){}
  }catch(e){}
}
function phCount(){return PHONEMES.filter(x=>getRec(x.k)).length}
function phOwnCount(){return PHONEMES.filter(x=>getOwnRec(x.k)).length}
function openPhBank(i){phI=i||0;renderPh();const d=$("phDlg");if(!d.open){if(d.showModal)d.showModal();else d.setAttribute("open","")}}
function closePh(){const d=$("phDlg");if(d.close)d.close();else d.removeAttribute("open");if(phRec&&phRec.state==="recording")phRec.stop()}
function renderPh(){
  const b=$("phBody"),x=PHONEMES[phI],own=!!getOwnRec(x.k),def=!own&&!!getRec(x.k),has=own,n=phCount();
  b.innerHTML=`<h2>🎙️ Banque des sons</h2>
  <div class="phprog"><i style="width:${Math.round(n/PHONEMES.length*100)}%"></i></div><p class="rlegend">${n} / ${PHONEMES.length} sons disponibles (dont ${phOwnCount()} avec votre voix) · ${x.g}</p>
  <div class="seg phshare"><button class="card" id="phExp">📤 Partager ma banque</button><button class="card" id="phImp">📥 Importer</button></div>
  <p class="expmsg" id="phXMsg"></p>
  <div class="phcard${has||def?" has":""}"><div class="phk">${x.k}</div><div class="phex">comme dans ${x.ex}</div><p class="phtip">${x.tip}</p>
    <button class="card btn phrec" id="phGo">🎙️ ${has?"Refaire":"Enregistrer"}</button>
    <div class="phbar" id="phBar"><i></i></div>
    <div class="seg" style="justify-content:center"><button class="card" id="phPlay"${has||def?"":" disabled"}>▶️ Écouter</button>${has?'<button class="card" id="phDel">🗑️</button>':""}</div>
    <p class="expmsg" id="phMsg">${has?"✅ Votre voix est enregistrée pour ce son.":def?"🎧 Voix Miamots incluse. Vous pouvez enregistrer la vôtre si vous voulez.":""}</p></div>
  <div class="seg" style="justify-content:space-between"><button class="card" id="phPrev"${phI?"":" disabled"}>⬅️</button><button class="card" id="phGrid">🔢 Tous les sons</button><button class="card btn" id="phNext">${phI<PHONEMES.length-1?"Suivant ➡️":"Terminer ✅"}</button></div>
  <details class="phhelp"><summary>💡 Conseils pour bien enregistrer</summary><ul>
    <li>Pièce calme, téléphone à 20 cm de la bouche, toujours la même voix.</li>
    <li><b>Sons qui s'allongent</b> (m, l, s, f…) : tenez le son environ 2 secondes, bien régulier.</li>
    <li><b>Sons brefs</b> (p, t, b, d, k, g) : le plus court possible, <b>sans « eu »</b> après.</li>
    <li>L'enregistrement démarre au toucher et s'arrête tout seul. Les silences du début et de la fin sont coupés automatiquement.</li></ul></details>
  <div class="phgrid" id="phAll" hidden></div>
  <div class="dlg-foot"><span></span><button class="card btn" id="phClose">Fermer</button></div>`;
  $("phClose").onclick=closePh;
  $("phPrev").onclick=()=>{phI=Math.max(0,phI-1);renderPh()};
  $("phNext").onclick=()=>{if(phI<PHONEMES.length-1){phI++;renderPh()}else{$("phXMsg").textContent="Bravo ! Touchez « 📤 Partager ma banque » pour garder vos sons dans un fichier.";$("phBody").scrollTop=0;$("phExp").classList.add("mz-pulse")}};
  $("phPlay").onclick=()=>playSnd(x.k);
  if(has)$("phDel").onclick=()=>{try{localStorage.removeItem("lam_rec_"+x.k);localStorage.removeItem("lam_recm_"+x.k)}catch(e){}renderPh()};
  $("phGrid").onclick=()=>{const g=$("phAll");g.hidden=!g.hidden;if(!g.hidden){g.innerHTML="";PHONEMES.forEach((p,i)=>{const c=el("button","card recchip"+(getRec(p.k)?" has":"")+(i===phI?" cur":""),p.k);c.onclick=()=>{phI=i;renderPh()};g.appendChild(c)})}};
  $("phGo").onclick=()=>phRecord(x);
  $("phExp").onclick=()=>phExport();$("phImp").onclick=()=>phImport();
}
async function phRecord(x){
  const msg=$("phMsg"),bar=$("phBar"),btn=$("phGo");
  if(phRec&&phRec.state==="recording"){phRec.stop();return}
  let stream=null;
  try{if(navigator.mediaDevices&&window.MediaRecorder)stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}})}catch(e){stream=null}
  if(!stream){
    const f=$("recFile");f.value="";f.onchange=()=>{if(f.files&&f.files[0]){const bl=f.files[0];storeRec(x.k,bl,msg,()=>{analyseRec(x.k,bl).then(renderPh)})}};f.click();
    msg.textContent="Le micro n'est pas accessible ici : enregistrez avec l'enregistreur du téléphone, puis choisissez le fichier.";return;
  }
  const chunks=[],dur=PH_LONG.has(x.k)?2600:(["p","t","b","d","k","g"].includes(x.k)?1300:1800);
  phRec=new MediaRecorder(stream);
  phRec.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data)};
  phRec.onstop=()=>{stream.getTracks().forEach(t=>t.stop());bar.classList.remove("on");
    const bl=new Blob(chunks,{type:phRec.mimeType||"audio/webm"});
    storeRec(x.k,bl,msg,()=>{analyseRec(x.k,bl).then(()=>{renderPh();setTimeout(()=>playSnd(x.k),150)})})};
  // petit décompte puis enregistrement
  btn.disabled=true;
  for(const c of["3","2","1"]){msg.textContent="Prêt ? "+c;await wait(450)}
  msg.textContent="🔴 Maintenant : « "+x.k+" » !";btn.disabled=false;btn.innerHTML='<span class="recdot"></span>Arrêter';
  bar.style.setProperty("--d",dur+"ms");bar.classList.add("on");
  phRec.start();setTimeout(()=>{if(phRec&&phRec.state==="recording")phRec.stop()},dur);
}
function phExport(msgId){const M=$(msgId||"phXMsg");
  const sons={},meta={};PHONEMES.forEach(p=>{const r=getOwnRec(p.k);if(r){sons[p.k]=r;const m=getRecMeta(p.k);if(m)meta[p.k]=m}});
  Object.keys(LESSONS).forEach(k=>{const r=getOwnRec(k);if(r&&!sons[k]){sons[k]=r;const m=getRecMeta(k);if(m)meta[k]=m}});
  if(!Object.keys(sons).length){M.textContent="Aucun son enregistré pour l'instant.";return}
  const data=JSON.stringify({app:"miamots-sons",version:1,date:new Date().toISOString(),sons,meta}),name="banque-sons-miamots.json";
  if(DL){DL.save({filename:name,data}).then(()=>M.textContent="✅ Banque enregistrée dans vos téléchargements.").catch(()=>M.textContent="Le téléchargement n'a pas fonctionné ici.");return}
  if(classicDownload(name,data)){M.textContent="✅ Banque enregistrée dans vos téléchargements.";return}
  M.textContent="Le téléchargement n'est pas offert ici : ouvrez Miamots dans Chrome ou l'app installée.";
}
function phImport(msgId){const M=()=>$(msgId||"phXMsg");
  const f=$("bkFile");f.value="";
  f.onchange=()=>{const file=f.files[0];if(!file)return;const r=new FileReader();r.onload=()=>{
    let B=null;try{B=JSON.parse(r.result)}catch(e){}
    if(!B||B.app!=="miamots-sons"){M().textContent="Ce fichier n'est pas une banque de sons Miamots.";return}
    let n=0;Object.entries(B.sons||{}).forEach(([k,v])=>{try{localStorage.setItem("lam_rec_"+k,v);if(B.meta&&B.meta[k])localStorage.setItem("lam_recm_"+k,JSON.stringify(B.meta[k]));n++}catch(e){}});
    if($("phDlg").open)renderPh();M().textContent="✅ "+n+" sons importés.";
  };r.readAsText(file)};
  f.click();
}
$("phExpSet").onclick=()=>phExport("phSetMsg");$("phImpSet").onclick=()=>phImport("phSetMsg");
$("openPhBank").onclick=()=>{closeSettings();setTimeout(()=>openPhBank(Math.max(0,PHONEMES.findIndex(p=>!getRec(p.k)))),60)};

/* ---------- Assistant de première ouverture : enregistrer les sons complexes ---------- */
const WZ_TIPS={ch:"Faites le son « chhh », comme pour dire chut, sans voyelle après."};
let wzStep=0;
function openWelcome(start){
  wzStep=start==null?0:start;renderWelcome();
  const d=$("welcomeDlg");if(!d.open){if(d.showModal)d.showModal();else d.setAttribute("open","")}
}
function closeWelcome(){save("welcomed",true);const d=$("welcomeDlg");if(d.close)d.close();else d.removeAttribute("open");if(canOfferInstall())setTimeout(()=>openInstall(true),350)}
const PRESETS=[
 ["🌱","Découvre les sons (début maternelle)","On commence par a et o, puis Miamots ajoute un son à la fois",["a","i","u","o","m","l","s","f"]],
 ["🌿","Connaît les voyelles et quelques consonnes","a, e, i, o, u, é + m, l, s, f, r, v, ch, n",["a","e","i","o","u","y","é","m","l","s","f","r","v","ch","n"]],
 ["🌳","Lit des syllabes et de petits mots","+ j, z, ou + p, t, b, d, c (sons brefs)",["a","e","i","o","u","y","é","m","l","s","f","r","v","ch","n","j","z","ou","p","t","b","d","c"]],
 ["🚀","Lit déjà bien","+ on, an, in, oi, eu, è, g",["a","e","i","o","u","y","é","m","l","s","f","r","v","ch","n","j","z","ou","p","t","b","d","c","g","è","on","an","in","oi","eu"]]
];
let wzPreset=null;
function renderWelcome(){
  const keys=Object.keys(LESSONS),N=keys.length,b=$("welcomeBody");
  if(wzStep===-1){
    b.innerHTML=`<img class="wzlogo" src="${LOGO_IMG}" alt="Miamots"><h2>Bienvenue dans « Miamots » !</h2>
      <p>Deux petites questions pour adapter les jeux. Tout reste modifiable dans ⚙️.</p>
      <div class="rowlab">Prénom de l'enfant (facultatif)</div>
      <input id="wzName" class="bsearch" placeholder="Prénom" autocomplete="off" value="${kidName().replace(/"/g,"")}">
      <div class="rowlab">Où en est votre enfant ?</div>
      <button class="card btn" id="wzTest" style="width:100%;margin-bottom:8px">🔎 Faire le petit test avec l'enfant (recommandé, 3 à 5 min)</button>
      <p class="rlegend">ou choisissez vous-même :</p>
      <div id="wzPresets" class="presets"></div>
      <div class="dlg-foot"><button class="link" id="wzSkip">Passer</button><button class="card btn" id="wzGo">Continuer →</button></div>`;
    const box=$("wzPresets");
    PRESETS.forEach((pr,i)=>{const bt=el("button","card preset"+(wzPreset===i?" on":""),`<span class="pe">${pr[0]}</span><span><b>${pr[1]}</b><small>${pr[2]}</small></span>`);bt.onclick=()=>{wzPreset=i;renderWelcome()};box.appendChild(bt)});
    $("wzName").oninput=()=>{setKidName($("wzName").value)};
    $("wzTest").onclick=()=>{save("setupDone",true);save("welcomed",true);CFG.prog="auto";save("cfg",CFG);const d=$("welcomeDlg");if(d.close)d.close();else d.removeAttribute("open");setTimeout(openTest,120)};
    const next=()=>{if(wzPreset!=null){sel=new Set(PRESETS[wzPreset][3]);save("sel3",[...sel]);CFG.etape=wzPreset===0?"sons":"lecture";save("cfg",CFG);setProgStep([0,6,11,15][wzPreset]);setEar([0,4,5,6][wzPreset])}save("setupDone",true);refreshAll();if(load("welcomed",false)){closeWelcome();return}wzStep=0;renderWelcome()};
    $("wzGo").onclick=next;$("wzSkip").onclick=()=>{wzStep=0;renderWelcome()};
    return;
  }
  if(wzStep===0){
    b.innerHTML=`<div class="wzhero">🎙️</div><h2>Dernière étape (facultative)</h2>
      <p>Enregistrez votre voix pour les ${N} sons complexes (ou, on, an, oi, ch, eu, è, in). La voix du téléphone les prononce parfois mal. Votre voix sera utilisée dans l'atelier des Sons et la Chenille.</p>
      <p>Ça prend environ 2 minutes. Les enregistrements restent sur ce téléphone.</p>
      <div class="dlg-foot"><button class="link" id="wzLater">Plus tard</button><button class="card btn" id="wzStart">🎙️ Commencer</button></div>`;
    $("wzLater").onclick=closeWelcome;$("wzStart").onclick=()=>{wzStep=1;renderWelcome()};return;
  }
  if(wzStep>N){
    const n=keys.filter(k=>getRec(k)).length;
    b.innerHTML=`<div class="wzhero">✅</div><h2>C'est prêt !</h2><p>${n} son${n>1?"s":""} enregistré${n>1?"s":""} sur ${N}. Les sons non enregistrés utiliseront la voix du téléphone.</p><p>Vous pourrez les réécouter ou les refaire dans ⚙️ › Sons enregistrés par l'adulte.</p>
      <div class="dlg-foot"><span></span><button class="card btn" id="wzEnd">C'est parti ! 🚀</button></div>`;
    $("wzEnd").onclick=closeWelcome;return;
  }
  const k=keys[wzStep-1],L=LESSONS[k],has=!!getRec(k);
  b.innerHTML=`<div class="wzprog">Son ${wzStep} / ${N}<span class="lvlbar"><i style="width:${Math.round((wzStep-1)/N*100)}%"></i></span></div>
    <div class="wzsnd${L.cons?" cons":""}">${k}</div>
    <p class="wzkey">comme dans <b>${hl(L.key[0])}</b> ${L.key[1]}</p>
    <p class="wztip">${WZ_TIPS[k]||"Dites seulement le son « "+k+" », sans le mot."}</p>
    <div class="wzbtns"><button class="card btn" id="wzRec">🎙️ ${has?"Refaire":"Enregistrer"}</button><button class="card btn" id="wzPlay" ${has?"":"disabled"}>▶️ Écouter</button></div>
    <p class="expmsg" id="wzMsg">${has?"✅ Enregistré.":""}</p>
    <div class="dlg-foot"><button class="link" id="wzBack">← Retour</button><button class="card btn" id="wzNext">${has?"Suivant →":"Passer →"}</button></div>`;
  $("wzRec").onclick=()=>recordInto(k,$("wzRec"),$("wzMsg"),()=>{renderWelcome()});
  $("wzPlay").onclick=()=>playSnd(k);
  $("wzBack").onclick=()=>{wzStep--;renderWelcome()};
  $("wzNext").onclick=()=>{wzStep++;renderWelcome()};
}
/* ---------- Sauvegarde / restauration ---------- */
function backupJSON(){
  const data={};
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("lam_")&&k!=="lam_lastBackup")data[k]=localStorage.getItem(k)}
  return JSON.stringify({app:"miamots",version:1,date:new Date().toISOString(),data});
}
function bkInfo(){
  const t=load("lastBackup",0),m=$("bkMsg");if(!m)return;
  m.textContent=t?"Dernière sauvegarde : "+new Date(t).toLocaleDateString("fr-CA",{day:"numeric",month:"long"})+(Date.now()-t>14*864e5?" · il serait temps d'en refaire une !":""):"Aucune sauvegarde pour l'instant.";
}
$("bkSave").onclick=async()=>{
  const m=$("bkMsg"),data=backupJSON(),name=(CFG.kidName?CFG.kidName.trim().replace(/\s+/g,"-")+"-":"")+"miamots-"+new Date().toISOString().slice(0,10)+".json";
  if(!DL){
    if(classicDownload("sauvegarde-"+name,data)){save("lastBackup",Date.now());bkInfo();m.textContent="✅ Sauvegarde enregistrée dans vos téléchargements.";return}
    bkCopyFallback(data);return}
  try{await DL.save({filename:"sauvegarde-"+name,data});save("lastBackup",Date.now());bkInfo();m.textContent="✅ Sauvegarde enregistrée dans vos téléchargements."}
  catch(e){m.textContent=e&&e.code==="declined"?"Sauvegarde annulée.":"La sauvegarde n'a pas fonctionné ici."}
};
/* Plan B quand le téléchargement n'est pas offert : copier / coller le texte de la sauvegarde */
function bkCopyFallback(data){
  const m=$("bkMsg"),box=$("bkConfirm");box.innerHTML="";
  m.textContent="Le téléchargement n'est pas offert ici. Copiez plutôt la sauvegarde et collez-la dans une note ou un courriel à vous-même.";
  const ta=el("textarea","wkta");ta.readOnly=true;ta.value=data;ta.style.minHeight="90px";
  const cp=el("button","card btn","📋 Copier la sauvegarde");
  cp.onclick=async()=>{try{await navigator.clipboard.writeText(data);m.textContent="✅ Copiée ! Collez-la dans une note ou un courriel.";save("lastBackup",Date.now())}catch(e){ta.focus();ta.select();m.textContent="Le texte est sélectionné : faites « Copier » avec le téléphone."}};
  box.append(ta,cp);
}
function bkRestoreFrom(text){
  const m=$("bkMsg"),box=$("bkConfirm");box.innerHTML="";
  let B=null;try{B=JSON.parse(text)}catch(e){}
  if(!B||!["lis-avec-moi","miamots"].includes(B.app)||!B.data){m.textContent="Ce n'est pas une sauvegarde de « Miamots ».";return}
  const d=new Date(B.date).toLocaleDateString("fr-CA",{day:"numeric",month:"long",year:"numeric"});
  m.textContent="Sauvegarde du "+d+" trouvée. Tout ce qui est sur ce téléphone sera remplacé.";
  const ok=el("button","card btn","✅ Restaurer cette sauvegarde"),no=el("button","card","Annuler");
  no.onclick=()=>{box.innerHTML="";bkInfo()};
  ok.onclick=()=>{
    try{
      const old=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith("lam_"))old.push(k)}
      old.forEach(k=>localStorage.removeItem(k));
      Object.entries(B.data).forEach(([k,v])=>{if(k.startsWith("lam_"))localStorage.setItem(k,v)});
      localStorage.setItem("lam_welcomed","true");
      m.textContent="✅ Restauré ! L'app redémarre…";setTimeout(()=>location.reload(),800);
    }catch(e){m.textContent="La restauration n'a pas fonctionné (espace insuffisant ?)."}
  };
  const row=el("div","seg");row.append(ok,no);box.appendChild(row);
}
$("bkPaste").onclick=()=>{
  const box=$("bkConfirm");box.innerHTML="";
  const ta=el("textarea","wkta");ta.placeholder="Collez ici le texte de la sauvegarde";ta.style.minHeight="90px";
  const go_=el("button","card btn","Vérifier");go_.onclick=()=>bkRestoreFrom(ta.value.trim());
  box.append(ta,go_);ta.focus();
};
$("bkLoad").onclick=()=>{const f=$("bkFile");f.value="";f.click()};
$("bkFile").onchange=()=>{
  const f=$("bkFile").files[0];if(!f)return;
  const r=new FileReader();r.onload=()=>bkRestoreFrom(r.result);r.readAsText(f);
};
const FLAG={"fr-ca":"🇨🇦","fr-fr":"🇫🇷","fr-be":"🇧🇪","fr-ch":"🇨🇭"};
function renderVoices(){
  const box=$("voiceList");if(!box)return;box.innerHTML="";
  const vs=frVoices();
  if(!vs.length){box.appendChild(el("p","rlegend",hasVoice?"Aucune voix française trouvée sur ce téléphone (voir l'astuce ci-dessous).":"La voix n'est pas disponible ici. Ouvrez l'app dans Chrome."));return}
  vs.forEach((v,i)=>{
    const lang=v.lang.toLowerCase().replace("_","-"),on=frVoice&&frVoice.voiceURI===v.voiceURI;
    const nm=v.name.replace(/Microsoft |Google |\(.*?\)|French|français|Français/gi,"").trim()||("Voix "+(i+1));
    const b=el("button","card vbtn"+(on?" on":""),`<span>${FLAG[lang]||"🗣️"}</span><span><b>${nm}</b><small>${v.lang}${v.localService?"":" · ✨ en ligne"}${v.default?" · par défaut":""}</small></span>`);
    b.onclick=()=>{CFG.voiceURI=v.voiceURI;save("cfg",CFG);frVoice=v;renderVoices();speak("Bonjour, je suis Miam ! On lit ensemble ?")};
    box.appendChild(b);
  });
}
document.querySelectorAll("#pitchSeg .card").forEach(b=>b.onclick=()=>{CFG.pitch=+b.dataset.p;save("cfg",CFG);renderPitch();speak("Bonjour, je suis Miam !")});
function renderPitch(){document.querySelectorAll("#pitchSeg .card").forEach(b=>b.classList.toggle("on",+b.dataset.p===curPitch()))}
/* ===================== Test de départ : « Miam veut te connaître » =====================
   4 parties qui montent par marches : 👂 oral → 🔤 son ↔ lettre → 🎶 syllabes → 📖 mots.
   Chaque partie s'arrête dès que ça devient difficile. Le test ne compte pas dans le suivi des jeux. */
const T0={};
const TST_SND=g=>(Array.from(g).length===1&&!["y","h","q","w","x","k","ê"].includes(g)||["ch","ou","oi","on","an","in"].includes(g))&&hasPh(nk(g));
function openTest(){
  Object.assign(T0,{ph:-1,oral:0,oralN:0,known:[],miss:[],letterStep:null,syl:null,sylOk:0,sylN:0,wordLvl:0,lock:false,first:{}});
  const d=$("testDlg");if(!d.open){if(d.showModal)d.showModal();else d.setAttribute("open","")}
  testIntro();
}
function closeTest(){SEQ++;try{speechSynthesis.cancel()}catch(e){}const d=$("testDlg");if(d.close)d.close();else d.removeAttribute("open");if(current==="home")renderHome()}
function testFrame(msg,pose){
  const b=$("testBody");b.innerHTML="";
  const top=el("div","ttop"),ph=el("div","tph");
  ["👂","🔤","🎶","📖"].forEach((ic,i)=>ph.appendChild(el("span",i<T0.ph?"done":i===T0.ph?"cur":"",i<T0.ph?"✅":ic)));
  const x=el("button","tx","✕");x.setAttribute("aria-label","Quitter le test");x.onclick=closeTest;
  top.append(ph,x);b.appendChild(top);
  const m=el("div","tmiam",`<img src="${MZ[pose||"listen"]}" alt="Miam"><p>${msg}</p>`);b.appendChild(m);
  return b;
}
function testIntro(){
  const b=$("testBody");b.innerHTML="";
  b.appendChild(el("div","tmiam",`<img src="${MZ.happy}" alt="Miam"><p>Miam veut te connaître !</p>`));
  b.appendChild(el("div","tintro",`<p><b>Pour l'adulte :</b> ce petit test dure 3 à 5 minutes. Il sert à trouver où commencer dans Miamots.</p>
    <ul><li>👂 Écouter des mots (à l'oral)</li><li>🔤 Le son des lettres</li><li>🎶 Les syllabes</li><li>📖 Lire de petits mots</li></ul>
    <p>Montez le son. Laissez l'enfant répondre seul, sans l'aider : c'est normal de ne pas tout savoir, le test s'arrête dès que ça devient difficile. Il n'y a pas de « bonne » ou de « mauvaise » réponse affichée.</p>`));
  const go=el("button","card btn","▶ Commencer");go.onclick=()=>{SFX.tap();testOralStart()};
  const r=el("div","tbtns");r.appendChild(go);b.appendChild(r);
}
/* Réponse neutre : on avance sans montrer si c'est juste */
const TST_PRAISE=["Merci !","On continue !","Super, la suite !","D'accord !","Très bien, on continue !"];
async function testAnswer(btn,ok,onDone){
  if(btn.__force!=null)ok=btn.__force;
  if(T0.lock)return;T0.lock=true;SEQ++;try{speechSynthesis.cancel()}catch(e){}
  SFX.tap();btn.classList.add("good");const[x,y]=centerOf(btn);sparks(x,y,8,["⭐","✨"]);
  if(Math.random()<.3)speak(rnd(TST_PRAISE));
  await wait(650);T0.lock=false;onDone(ok);
}
function testNext(){
  if(T0.queue&&T0.queue.length){const it=T0.queue.shift();return it()}
  if(T0.ph===0){T0.ph=1;T0.lsteps=letterSteps();T0.li=0;return testLetterStep()}
  return testResult();
}
/* ----- 1. L'oreille : du plus facile au plus difficile, arrêt dès que ça bloque ----- */
const TST_OL=["syl","fsyl","rime","init","fus"];
const EAR_FROM_TEST=[0,2,3,4,5,6];
function testOralStart(){T0.ph=0;T0.ol=0;T0.earPass=0;testOralDemo()}
function testOralDemo(){
  const b=testFrame("Un mot court, un mot long !","point");
  const ch=el("div","choices two");
  const mk=(e,n)=>{const c=el("div","tpic"),p=el("button","plate",e),d=el("div","sdots"),l=el("div","slab","");for(let k=0;k<n;k++)d.appendChild(el("i"));c.append(p,d,l);ch.appendChild(c);return {p,d:[...d.children],l}};
  const A_=mk("🐱",1),B_=mk("🐊",3);b.appendChild(ch);
  const go=el("button","card btn","▶ À toi !");go.disabled=true;const r=el("div","tbtns");r.appendChild(go);b.appendChild(r);
  const clap=async(X,parts,id)=>{X.d.forEach(x=>x.classList.remove("on"));X.l.textContent="";
    for(let k=0;k<parts.length;k++){if(id!==SEQ)return;X.d.at(k).classList.add("on");mzAnim(X.p,"mz-pop");SFX.tap();await speakAsync(parts.at(k),true);await wait(250)}
    X.l.textContent=parts.length+(parts.length>1?" morceaux = "+parts.length+" syllabes":" morceau = 1 syllabe")};
  const demo=async()=>{const id=++SEQ;await wait(300);
    await speakAsync("Les syllabes, ce sont les morceaux d'un mot. Écoute.");if(id!==SEQ)return;
    await clap(A_,["chat"],id);if(id!==SEQ)return;await speakAsync("Un morceau : une syllabe.");await wait(300);
    await clap(B_,["cro","co","dile"],id);if(id!==SEQ)return;await speakAsync("Trois morceaux : trois syllabes ! Crocodile est plus long.");go.disabled=false};
  A_.p.onclick=()=>{const id=++SEQ;clap(A_,["chat"],id)};B_.p.onclick=()=>{const id=++SEQ;clap(B_,["cro","co","dile"],id)};
  go.onclick=()=>{SFX.tap();SEQ++;testOralLevel()};
  setTimeout(()=>{go.disabled=false},9000);
  demo();
}
function testOralLevel(){
  const kind=TST_OL[T0.ol];if(!kind)return testOralEnd();
  let n=0,ok=0;
  const run=()=>oralItem(kind,r=>{n++;if(r)ok++;
    if(ok>=2){T0.earPass++;T0.ol++;return testOralLevel()}
    if(n-ok>=2||n>=3)return testOralEnd();
    run()});
  run();
}
function testOralEnd(){T0.oral=T0.earPass;T0.oralN=TST_OL.length;T0.ph=1;T0.lsteps=letterSteps();T0.li=0;testLetterStep()}
function oralItem(kind,done){
  const P=clearPool(),AW=AUDIO_WORDS.filter(x=>awOk(x)&&CLEAR_W.has(x.w)).map(x=>({w:x.w,e:x.e,ph:x.ph}));
  const pics=(b,opts,t)=>{const ch=el("div","choices actpics"+(opts.length===2?" two":""));opts.forEach(o=>{const c=el("div","tpic"),x=el("button","plate",o.e);x.setAttribute("aria-label",o.w);x.onclick=()=>testAnswer(x,o===t,done);
    const s=el("button","tsay","🔊");s.setAttribute("aria-label","Écouter le mot");s.onclick=()=>{SEQ++;speak(o.w)};c.append(x,s);ch.appendChild(c)});b.appendChild(ch)};
  const spk=(b,c,fn)=>{const s=el("button","sndopt big1 tspk","<span>🔊</span>");s.style.setProperty("--c",c);s.onclick=fn;b.appendChild(s)};
  if(kind==="syl"){
    const short=rnd(AW.filter(x=>!x.mute&&x.ph.length<=3)),long=rnd(clearWords().filter(w=>w.s.length>=3));
    const t={w:long.w,e:long.e},opts=shuffle([t,{w:short.w,e:short.e}]);
    const b=testFrame("Quel mot est le plus long ?");
    const say=()=>{SEQ++;seq(["Quel mot est le plus long ?",opts.at(0).w,"ou",opts.at(1).w])};spk(b,"#4FC3CF",say);pics(b,opts,t);setTimeout(say,300);return;
  }
  if(kind==="fsyl"){
    const pool=clearWords().filter(w=>w.s.length>=2&&w.s.length<=3),t=rnd(pool);
    const opts=shuffle([t,...shuffle(pool.filter(x=>x.w!==t.w&&x.e!==t.e&&x.s[0].join("")!==t.s[0].join(""))).slice(0,2)]);
    const b=testFrame("Écoute Miam : quel mot ça fait ?");
    const play=async()=>{const id=++SEQ;try{speechSynthesis.cancel()}catch(e){}for(const g of t.s){if(id!==SEQ)return;await speakAsync(spoken(g),true);await wait(380)}};
    spk(b,"#4FC3CF",play);pics(b,opts,t);
    setTimeout(async()=>{const id=++SEQ;if(!T0.first.fsyl){T0.first.fsyl=1;await speakAsync("Écoute Miam dire les morceaux. Quel mot ça fait ?")}if(id===SEQ)play()},300);return;
  }
  if(kind==="rime"){
    const G=rimeGroups(),keys=Object.keys(G).filter(k=>G[k].length>=2);
    if(keys.length<3)return done(true);
    const k=rnd(keys),[x,t]=shuffle(G[k]),others=shuffle(P.filter(o=>{const r=rimeKey(o);return r&&r!==k&&r.split("|").pop()!==k.split("|").pop()&&o.e!==t.e})).slice(0,2),opts=shuffle([t,...others]);
    const b=testFrame("Quel mot rime avec celui-ci ?");
    b.appendChild(el("div","tword",`<span style="font-size:3.4rem">${x.e}</span>`));
    const say=()=>{SEQ++;seq(["Quel mot rime avec",x.w,"?",opts.map(o=>o.w).join(", ")+"."])};spk(b,"#B07FE0",say);pics(b,opts,t);setTimeout(say,300);return;
  }
  if(kind==="init"){
    const starts=["m","s","f","ch","l","r"].filter(k=>P.filter(x=>x.ph[0].k===k).length),k=rnd(starts);
    const t=rnd(P.filter(x=>x.ph[0].k===k)),opts=shuffle([t,...shuffle(P.filter(x=>x.ph[0].k!==k&&!near(NEAR_C,x.ph[0].k,k)&&!x.ph.some(p=>p.k===k))).slice(0,2)]);
    const b=testFrame("Quel mot commence par ce son ?");
    const say=()=>{SEQ++;seq(["Quel mot commence par",{snd:k},"?",opts.map(o=>o.w).join(", ")+"."])};spk(b,"#F4A43A",say);pics(b,opts,t);setTimeout(say,300);return;
  }
  /* fus : fusion de 2 sons */
  const two=AW.filter(x=>x.ph.length===2),t=rnd(two.length>=3?two:AW.filter(x=>x.ph.length<=3));
  const opts=shuffle([t,...shuffle(AW.filter(x=>x.w!==t.w&&x.ph.length<=3&&x.ph[0].k!==t.ph[0].k&&x.e!==t.e)).slice(0,2)]);
  const b=testFrame("Écoute Miam : quel mot ça fait ?");
  spk(b,"#4FC3CF",()=>{SEQ++;playPhSeq(t.ph)});pics(b,opts,t);
  setTimeout(async()=>{const id=++SEQ;if(!T0.first.fus){T0.first.fus=1;await speakAsync("Maintenant, Miam dit les petits sons. Quel mot ça fait ?")}if(id===SEQ)playPhSeq(t.ph)},300);
}
/* ----- 2. Son ↔ lettre, étape par étape du chemin ----- */
function letterSteps(){return CURRIC.map((s,i)=>({i,g:s.add.filter(TST_SND)})).filter(x=>x.g.length)}
function testLetterStep(){
  const S=T0.lsteps[T0.li];
  if(!S){T0.letterStep=CURRIC.length-1;return testSylStart()}
  T0.cur={step:S,todo:shuffle(S.g.slice()),retry:[],fail:false};
  testLetterItem();
}
function testLetterItem(){
  const C=T0.cur;
  let g=C.todo.shift(),again=false;
  if(!g&&C.retry.length){g=C.retry.shift();again=true}
  if(!g){ /* étape finie */
    if(C.fail){T0.letterStep=C.step.i;return testSylStart()}
    T0.li++;return testLetterStep()}
  const k=nk(g);
  const pool=letterSteps().filter(x=>x.i<=C.step.i+4).flatMap(x=>x.g).filter(o=>o!==g&&nk(o)!==k&&!(near(NEAR_C,nk(o),k)&&Math.random()<.5));
  const opts=shuffle([g,...shuffle([...new Set(pool)]).slice(0,2)]);
  const b=testFrame("Touche la lettre qui fait ce son !","point");
  const spk=el("button","sndopt big1 tspk","<span>🔊</span>");spk.style.setProperty("--c","#F4A43A");spk.onclick=()=>{SEQ++;playSnd(k)};b.appendChild(spk);
  const ch=el("div","choices");
  opts.forEach((o,j)=>{const x=el("button","vinyl",`<span>${o}</span>`);x.style.setProperty("--lab",VLAB[j%VLAB.length]);
    x.onclick=()=>testAnswer(x,o===g,ok=>{
      if(ok){if(!T0.known.includes(g))T0.known.push(g)}
      else if(!again)C.retry.push(g);
      else{C.fail=true;T0.miss.push(g)}
      testLetterItem()});ch.appendChild(x)});
  b.appendChild(ch);
  setTimeout(()=>{SEQ++;seq(T0.first.let?[{snd:k}]:["Touche la lettre qui fait ce son :",{snd:k}]);T0.first.let=1},300);
}
/* ----- 3. Syllabes ----- */
function testSylStart(){
  if(T0.letterStep<6){T0.ph=4;return testResult()}      /* les sons du Tome 1 ne sont pas encore connus */
  T0.ph=2;
  const C=["r","l","s","m","j","f","ch","n","v"].filter(c=>T0.known.includes(c)),V=["a","i","o","u","ou","é"].filter(v=>T0.known.includes(v));
  const all=[];C.forEach(c=>V.forEach(v=>all.push([c,v])));
  const items=shuffle(all).slice(0,3);
  const vc=["a","i","o"].filter(v=>T0.known.includes(v)).flatMap(v=>["r","l"].filter(c=>T0.known.includes(c)).map(c=>[v,c]));
  if(vc.length)items.push(rnd(vc));
  T0.queue=items.map(t=>()=>{
    const pool=all.concat(vc).filter(x=>x.join("")!==t.join("")),
      close=pool.filter(x=>x[0]===t[0]||x[1]===t[1]),opts=shuffle([t,...shuffle(close.length>=2?close:pool).slice(0,2)]);
    const b=testFrame("Touche la syllabe que Miam dit !","point");
    const say=()=>{SEQ++;speakAsync(spoken(t),true)};
    const spk=el("button","sndopt big1 tspk","<span>🔊</span>");spk.style.setProperty("--c","#B07FE0");spk.onclick=say;b.appendChild(spk);
    const ch=el("div","choices");
    opts.forEach(o=>{const x=el("button","card tsyl",o.join(""));x.onclick=()=>testAnswer(x,o===t,ok=>{T0.sylN++;if(ok)T0.sylOk++;testNext()});ch.appendChild(x)});
    b.appendChild(ch);
    setTimeout(async()=>{SEQ++;const id=SEQ;if(!T0.first.syl){T0.first.syl=1;await speakAsync("Maintenant, touche la syllabe que je dis.")}if(id===SEQ)speakAsync(spoken(t),true)},300);
  });
  T0.queue.push(()=>{T0.syl=T0.sylOk>=Math.max(1,T0.sylN-1);testWordStart()});
  testNext();
}
/* ----- 4. Lire des mots ----- */
const TST_WLV=[
  {cap:7, ok:w=>ptier(w)<=2&&readableAt(w,5)},
  {cap:10,ok:w=>ptier(w)<=3&&readableAt(w,9)&&w.s.flat().some(g=>["j","f","ch","n","v","é"].includes(g))},
  {cap:11,ok:w=>ptier(w)<=3&&readableAt(w,10)&&w.s.flat().some(g=>["oi","on"].includes(g))},
  {cap:15,ok:w=>readableAt(w,14)&&w.s.flat().some(g=>["p","t","b","d","c","g"].includes(g))&&ptier(w)===4},
  {cap:18,ok:w=>ptier(w)<=4&&readableAt(w,17)&&w.s.flat().some(g=>["an","en","in","au","è"].includes(g))},
  {cap:19,ok:w=>ptier(w)===5}
];
function testWordStart(){
  if(!T0.syl){T0.ph=4;return testResult()}
  T0.ph=3;T0.wl=0;testWordLevel();
}
function testWordLevel(){
  const L=TST_WLV[T0.wl];
  if(L&&T0.letterStep<L.cap-1){T0.ph=4;return testResult()}   /* ces mots ont des sons pas encore connus */
  if(!L){T0.wordCap=CURRIC.length-1;T0.ph=4;return testResult()}
  const pool=WORDS.filter(w=>w.e&&!HIDDEN.has(w.w)&&L.ok(w));
  if(pool.length<3){T0.wordCap=L.cap;T0.wl++;return testWordLevel()}
  const picks=shuffle(pool).slice(0,3);let n=0,ok=0;
  const item=i=>{
    const t=picks[i],cand=WORDS.filter(x=>x.e&&x.e!==t.e&&x.w!==t.w&&!HIDDEN.has(x.w)),opts=shuffle([t,...similar(t,cand,2)]);
    const b=testFrame("Lis le mot, puis touche la bonne image !","point");
    b.appendChild(el("div","tword",wordHTML(t)));
    const ch=el("div","choices actpics");
    opts.forEach(o=>{const x=el("button","plate",o.e);x.setAttribute("aria-label","Image");x.onclick=()=>testAnswer(x,o===t,r=>{n++;if(r)ok++;
      if(ok>=2){T0.wordCap=L.cap;T0.wordLvl=T0.wl+1;T0.wl++;return testWordLevel()}
      if(n-ok>=2||n>=3){T0.ph=4;return testResult()}
      item(n)});ch.appendChild(x)});
    b.appendChild(ch);
    if(!T0.first.word){T0.first.word=1;setTimeout(()=>speak("Maintenant, lis le mot tout seul, puis touche la bonne image."),300)}
  };
  item(0);
}
/* ----- Résultat ----- */
function testPlace(){
  const L=T0.letterStep==null?0:T0.letterStep;let p;
  if(L<6)p=L;
  else p=T0.syl?Math.max(6,Math.min(L,T0.wordCap||6)):6;
  return Math.max(0,Math.min(p,CURRIC.length-1));
}
function testResult(){
  T0.ph=4;SEQ++;
  const place=testPlace(),st=CURRIC[place],name=kidName()||"l'enfant",earP=EAR_FROM_TEST[Math.min(T0.earPass||0,5)];
  const b=testFrame("Bravo ! Merci d'avoir joué avec moi !","happy");
  SFX.win();setTimeout(()=>{sparks(innerWidth/2,innerHeight*.3,26)},150);speak("Bravo ! Merci d'avoir joué avec moi !");
  const allT=letterSteps().flatMap(x=>x.g),todo=allT.filter(g=>!T0.known.includes(g));
  const r=el("div","tres");
  r.appendChild(el("p","rlegend","<b>Pour l'adulte</b>"));
  const ORN=["compter les syllabes","fusionner des syllabes","les rimes","le premier son","fusionner des sons"];
  r.appendChild(el("div","rl",`<b>👂 L'oreille</b>${T0.earPass?"Réussi : "+ORN.slice(0,T0.earPass).join(", "):"Pas encore : on commence par les syllabes"}${T0.earPass<5?"<br>À travailler : "+ORN[T0.earPass]:""}`));
  r.appendChild(el("div","rl",`<b>🔤 Son des lettres</b>${T0.known.length?"Connus : "+T0.known.join(", "):"Pas encore de lettre connue"}${T0.miss.length?"<br>À apprendre : "+T0.miss.join(", "):""}${T0.letterStep!=null&&T0.letterStep<CURRIC.length-1?"<br><small>Les sons suivants n'ont pas été testés.</small>":""}`));
  r.appendChild(el("div","rl",`<b>🎶 Syllabes</b>${T0.syl==null?"Pas testées (les premiers sons d'abord)":T0.syl?`✅ Réussies (${T0.sylOk}/${T0.sylN})`:`À travailler (${T0.sylOk}/${T0.sylN})`}`));
  const WN=["","petits mots simples (lama, rue)","mots avec j, f, ch, n, v, é","mots avec oi, on","mots avec p, t, b, d, c, g et syllabes fermées","mots avec an, in, au, è","sons doubles (table, bravo)"];
  r.appendChild(el("div","rl",`<b>📖 Lecture de mots</b>${T0.syl?(T0.wordLvl?"Lit bien jusqu'aux "+WN[T0.wordLvl]:"Pas encore de mots lus seul"):"Pas testée"}`));
  if((T0.earPass||0)<3&&place>=6)r.appendChild(el("div","rl",`<b>💡 À noter</b>Le code est en avance sur l'oreille : le parcours du jour proposera souvent l'atelier des sons et le jardin.`));
  r.appendChild(el("div","rl place",`<b>➡️ Miamots propose de commencer :</b>👂 Oreille : marche ${earP+1} sur ${OREILLE.length} — ${OREILLE[earP].t}<br>🔤 Code : étape ${place+1} sur ${CURRIC.length} — ${st.t}`));
  b.appendChild(r);
  const bt=el("div","tbtns"),ok=el("button","card btn","✅ Commencer ici"),no=el("button","card","Fermer sans rien changer");
  ok.onclick=()=>{SFX.yes();CFG.prog="auto";save("cfg",CFG);setProgStep(place);setEar(earP);PARC=null;save("parc",null);save("placement",{t:Date.now(),place,oral:[T0.oral,T0.oralN],known:T0.known,miss:T0.miss,syl:T0.syl,words:T0.wordLvl});
    ok.textContent="✅ C'est fait !";ok.disabled=true;setTimeout(()=>{closeTest();try{if($("settings").open){renderProg();renderSettings()}}catch(e){}},900)};
  no.onclick=closeTest;
  bt.append(ok,no);b.appendChild(bt);
}
const PHASE_N={oral:"👂 L'oral",sons:"🌱 Les sons",syl:"🎶 Les syllabes",mots:"📖 Les mots"};
function renderProg(){
  document.querySelectorAll("#progSeg [data-v]").forEach(b=>b.classList.toggle("on",(progAuto()?"auto":"manuel")===b.dataset.v));
  const box=$("progBox"),man=$("manualBox");box.innerHTML="";man.hidden=progAuto();
  if(!progAuto()){box.appendChild(el("p","rlegend","Vous choisissez vous-même les sons et les structures de mots, ci-dessous. Les jeux n'utilisent que ce qui est coché."));return}
  if(!PROG||PROG.i==null)progInit();
  const i=progI(),st=curStep(),S=stepState(i);
  const tb=el("button","card btn","🔎 Faire le test de départ avec l'enfant");tb.style.cssText="width:100%;margin:4px 0 6px";
  tb.onclick=()=>{const d=$("settings");if(d.close)d.close();setTimeout(openTest,120)};box.appendChild(tb);
  const c=el("div","progcard");
  c.innerHTML=`<div class="pst">🔤 Le code · étape ${i+1} sur ${CURRIC.length} · ${PHASE_N[st.p]}</div><h4>${st.t}</h4>`;
  if(S.snd.length){const ps=el("div","psnd");S.snd.forEach(x=>ps.appendChild(el("span",x.done?"ok":"",`${(ST_ICON[x.st]||ST_ICON.decouverte)[0]} ${x.g} <small>${Math.min(x.f,5)}/5</small>`)));c.appendChild(ps)}
  const pct=Math.round(100*(S.snd.length?(S.snd.reduce((a,x)=>a+Math.min(1,x.f/5),0)/S.snd.length)*.6+Math.min(1,S.need?S.have/S.need:1)*.4:Math.min(1,S.have/S.need)));
  c.insertAdjacentHTML("beforeend",`<div class="pbar"><i style="width:${pct}%"></i></div><div class="pst">${S.done?"Prête pour l'étape suivante !":S.need?`Réussites depuis le début de l'étape : ${Math.min(S.have,S.need)}/${S.need}`:"Encore quelques réussites avec ces sons."}</div>`);
  const nav=el("div","pnav"),pv=el("button","card","◀ Étape précédente"),nx=el("button","card","Étape suivante ▶");
  pv.disabled=i===0;nx.disabled=i>=CURRIC.length-1;
  pv.onclick=()=>{setProgStep(i-1);renderProg();renderSettings()};nx.onclick=()=>{setProgStep(i+1);renderProg();renderSettings()};
  nav.append(pv,nx);c.appendChild(nav);box.appendChild(c);
  {const E=earState(),ec=el("div","progcard");
   ec.innerHTML=`<div class="pst">👂 L'oreille · marche ${E.i+1} sur ${OREILLE.length} (atelier et jardin)</div><h4>${OREILLE[E.i].t}</h4><div class="pbar"><i style="width:${Math.round(100*Math.min(1,E.have/E.need))}%"></i></div><div class="pst">${E.i>=OREILLE.length-1?"Dernière marche : tout se mélange.":`Réussites à cette marche : ${Math.min(E.have,E.need)}/${E.need}`}</div>`;
   const nv=el("div","pnav"),a=el("button","card","◀ Marche précédente"),b=el("button","card","Marche suivante ▶");a.disabled=E.i===0;b.disabled=E.i>=OREILLE.length-1;
   a.onclick=()=>{setEar(E.i-1);renderProg()};b.onclick=()=>{setEar(E.i+1);renderProg()};nv.append(a,b);ec.appendChild(nv);box.appendChild(ec)}
  {const mi=el("details","more");mi.appendChild(el("summary","","ℹ️ Plus d'infos"));mi.appendChild(el("p","","Deux échelles avancent chacune à son rythme : l'oreille (atelier, jardin) et le code (les autres lieux). Les sons arrivent dans l'ordre d'Enquête au village des sons : les voyelles, r, l, s, m, ou, puis j, f, ch, n, v, é, oi, on, puis les sons brefs (p, t, b, d, c, g), puis an, in, au, è… Un son est acquis après 5 réussites du premier coup, dans 2 sortes de jeux, sur 2 jours différents ; il est redemandé quelques jours plus tard. Une semaine de mots cochée entre dans les jeux, même avec des sons pas encore vus."));box.appendChild(mi)}
  const d=el("details","more");d.appendChild(el("summary","","📈 Voir les deux échelles (toucher une marche pour y aller)"));
  const L=el("div","ladders"),ea=el("div","lad ear","<h5>👂 L'oreille</h5>"),co=el("div","lad code","<h5>🔤 Le code</h5>");
  const eo=el("ol");OREILLE.forEach((s,j)=>{const li=el("li",j===earI()?"cur":j<earI()?"done":"",`${j<earI()?"✅":j+1+"."} ${s.t.replace(/ \(.*\)$/,"")}`);li.onclick=()=>{setEar(j);renderProg()};eo.appendChild(li)});ea.appendChild(eo);
  const TOME=i=>i<=6?"Tome 1":i<=10?"Tome 2":i<=18?"Tome 3":"Fin";
  const cl=el("ol");CURRIC.forEach((s,j)=>{const tm=j===0||TOME(j)!==TOME(j-1)?`<span class="tome">${TOME(j)}</span>`:"";
    const li=el("li",j===i?"cur":j<i?"done":"",`${tm}${j<i?"✅":j+1+"."} ${s.add.length?s.add.slice(0,4).join(", ")+(s.add.length>4?"…":""):s.p==="syl"?"syllabes":"syllabes fermées"}`);
    li.onclick=()=>{setProgStep(j);renderProg();renderSettings()};cl.appendChild(li)});co.appendChild(cl);
  L.append(ea,co);d.appendChild(L);
  d.appendChild(el("p","rlegend","Les deux échelles avancent chacune à son rythme. L'oreille se travaille à l'atelier et au jardin ; le code dans les autres lieux. Une difficulté sur l'une ne bloque jamais l'autre."));
  box.appendChild(d);
}
document.querySelectorAll("#progSeg [data-v]").forEach(b=>b.onclick=()=>{CFG.prog=b.dataset.v;save("cfg",CFG);
  if(progAuto()){progInit();applyProg()}else sel=new Set(load("sel3",DEFAULT_SEL));
  renderProg();renderSettings();renderEtape()});
function renderEtape(){const v=stageSons()?"sons":"lecture";document.querySelectorAll("#etapeSeg [data-v]").forEach(b=>b.classList.toggle("on",b.dataset.v===v));
  $("etapeTxt").textContent=v==="sons"?"Début de maternelle : on apprend le son de chaque lettre. La gare, la fusée et la bibliothèque restent dans les nuages.":"L'enfant commence à faire chanter les sons ensemble (ma, li…) : tous les lieux sont ouverts."}
document.querySelectorAll("#etapeSeg [data-v]").forEach(b=>b.onclick=()=>{CFG.etape=b.dataset.v;save("cfg",CFG);renderEtape();if(current==="home")renderHome()});
function renderIntroSeg(){document.querySelectorAll("#introSeg [data-v]").forEach(b=>b.classList.toggle("on",(CFG.intro||"oui")===b.dataset.v))}
document.querySelectorAll("#introSeg [data-v]").forEach(b=>b.onclick=()=>{CFG.intro=b.dataset.v;save("cfg",CFG);renderIntroSeg()});
$("introReplay").onclick=()=>{closeSettings();setTimeout(()=>playIntro(true),80)};
function openSettings(){SET_FROM=current&&current!=="home"?current:null;try{renderErrs()}catch(e){}renderIntroSeg();renderProg();renderEtape();renderSettings();renderRec();renderProfiles();renderVoices();renderPitch();bkInfo();$("bkConfirm").innerHTML="";$("kidName").value=kidName();const d=$("settings");if(d.showModal)d.showModal();else d.setAttribute("open","")}
function closeSettings(){const d=$("settings");if(d.close)d.close();else{d.removeAttribute("open");refreshAll()}}
$("settings").addEventListener("close",refreshAll);
$("gear").onclick=()=>adultGate(openSettings);
$("closeSettings").onclick=closeSettings;
$("resetAll").onclick=()=>{
  const b=$("resetAll");
  if(!b.dataset.armed){b.dataset.armed="1";b.textContent="Touchez encore pour tout effacer";setTimeout(()=>{delete b.dataset.armed;b.textContent="Tout remettre à zéro (étoiles, album, niveaux, missions, suivi)"},4000);return}
  delete b.dataset.armed;stars=0;album=[];GOLD=[];medals=0;SOUV=[];save("gold",[]);save("medals",0);save("souv",[]);mission=0;LV={};ST={};WS={};sonsDone=[];LOG=[];ACQ={};save("log",[]);save("acq",{});PARC=null;PDAYS=0;save("parc",null);save("pdays",0);
  ["stars","album","mission","levels","stats","wstats","sonsDone"].forEach(k=>save(k,k==="stars"||k==="mission"?0:k==="levels"||k==="stats"||k==="wstats"?{}:[]));
  renderStars(false);b.textContent="✅ Tout est remis à zéro";
};

/* Recommencer le parcours : efface l'apprentissage (progression, suivi, niveaux, oreille, leçons, test)
   mais garde les récompenses (autocollants, photos, étoiles, médailles, souvenirs) et les réglages de l'adulte
   (prénom, voix, sons enregistrés, mots cachés, mots de la semaine). Le petit test de départ est ensuite reproposé. */
$("resetParcours").onclick=()=>{
  const b=$("resetParcours");
  if(!b.dataset.armed){b.dataset.armed="1";b.textContent="Touchez encore pour recommencer le parcours";setTimeout(()=>{delete b.dataset.armed;b.textContent="🔄 Recommencer le parcours (garde les autocollants, photos et étoiles)"},4000);return}
  ["log","acq","sonsDone","parc","pdays","prog","ear","placement","lireHelp","levels","stats","wstats","structs","time"].forEach(k=>{try{localStorage.removeItem(pkey(k))}catch(e){}});
  save("sel3",DEFAULT_SEL);save("setupDone",false);
  try{sessionStorage.setItem("lam_redoSetup","1")}catch(e){}
  b.textContent="✅ Parcours remis à zéro…";setTimeout(()=>location.reload(),600);
};
function renderErrs(){const L=(()=>{try{return JSON.parse(localStorage.getItem("lam_errlog")||"[]")}catch(e){return []}})();
  $("errBox").querySelector("summary").textContent="🐞 Erreurs récentes ("+L.length+")";
  $("errList").innerHTML=L.length?L.slice().reverse().map(x=>`<div>• ${new Date(x.t).toLocaleString("fr-CA")} — ${escH(x.m)}${x.w?" <small>("+escH(x.w)+")</small>":""}${x.n>1?" ×"+x.n:""}</div>`).join(""):"Aucune erreur enregistrée. 👍"}
$("errCopy").onclick=()=>{const L=localStorage.getItem("lam_errlog")||"[]";const t="Erreurs Miamots ("+navigator.userAgent.slice(0,80)+"):\n"+JSON.parse(L).map(x=>new Date(x.t).toISOString()+" | "+x.m+" | "+x.w+(x.n>1?" ×"+x.n:"")).join("\n");
  try{navigator.clipboard.writeText(t).then(()=>{$("errCopy").textContent="✅ Copié"})}catch(e){prompt("Copiez ce texte :",t)}};
$("errClear").onclick=()=>{try{localStorage.removeItem("lam_errlog")}catch(e){}renderErrs()};
function refreshAll(){
  if(!$("ecouter").hidden)startListen();
  if(!$("lire").hidden)startRead();
  if(!$("ecrire").hidden)startWrite();
  if(!$("fusee").hidden)startRocket();
  if(!$("train").hidden)startTrain();
  if(!$("chenille").hidden)startCat();
  if(!$("musee").hidden)startMusee();
  if(!$("home").hidden)renderHome();
}

/* ---------- Installation sur l'écran d'accueil ---------- */
const UA=navigator.userAgent;
const isIOS=/iphone|ipad|ipod/i.test(UA)||(navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1);
const inAppBrowser=/FBAN|FBAV|FB_IAB|Instagram|Messenger|Line\/|MicroMessenger|; wv\)/i.test(UA);
const isStandalone=()=>(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone===true;
const isTopWin=(()=>{try{return window.top===window.self}catch(e){return false}})();
function canOfferInstall(){return isTopWin&&/^https?:$/.test(location.protocol)&&!isStandalone()}
let installEvt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installEvt=e;try{$("installSet").hidden=false}catch(_){}});
window.addEventListener("appinstalled",()=>{installEvt=null;closeInstall();try{$("installSet").hidden=true;if(current==="home")renderHome()}catch(_){}});
function closeInstall(){const d=$("installDlg");if(d.open){if(d.close)d.close();else d.removeAttribute("open")}}
async function openInstall(afterWelcome){
  // Android / Chrome : installation en un toucher
  if(installEvt&&!afterWelcome){installEvt.prompt();try{await installEvt.userChoice}catch(e){}installEvt=null;if(current==="home")renderHome();return}
  const b=$("installBody");let steps,arrow="";
  if(inAppBrowser){
    steps=[["🌐","Cette page est ouverte à l'intérieur d'une autre app (Facebook, Messenger…). Touchez <b>⋮</b> ou <b>···</b> en haut, puis <b>« Ouvrir dans le navigateur »</b>."],["📲","Une fois dans Chrome ou Safari, revenez ici pour installer Miamots."]];
  }else if(isIOS){
    arrow='<div class="iarrow down">⬇️</div>';
    steps=[["<span class='ios-share'>⬆️</span>","Touchez le bouton <b>Partager</b> de Safari (le carré avec une flèche vers le haut, en bas de l'écran)."],["➕","Faites défiler et touchez <b>« Sur l'écran d'accueil »</b>."],["✅","Touchez <b>« Ajouter »</b> en haut à droite. Miam apparaît sur votre écran d'accueil !"]];
  }else{
    arrow='<div class="iarrow up">⬆️</div>';
    steps=[["⋮","Touchez les <b>3 points ⋮</b> en haut à droite de Chrome."],["📲","Touchez <b>« Installer l'application »</b> ou <b>« Ajouter à l'écran d'accueil »</b>."],["✅","Confirmez avec <b>« Installer »</b>. Miam apparaît sur votre écran d'accueil !"]];
  }
  b.innerHTML=`${arrow}<div class="wzhero">📲</div><h2>${afterWelcome?"Dernière chose : mettre":"Mettre"} Miamots sur l'écran d'accueil</h2>
    <p>Pour l'ouvrir d'un seul toucher, en plein écran, même sans Internet.</p>
    <ol class="isteps">${steps.map(([i,t])=>`<li><span class="ii">${i}</span><span>${t}</span></li>`).join("")}</ol>
    <div class="dlg-foot"><button class="link" id="iLater">Plus tard</button>${installEvt?'<button class="card btn" id="iNow">📲 Installer maintenant</button>':'<button class="card btn" id="iOk">C\'est fait !</button>'}</div>`;
  $("iLater").onclick=()=>{save("installLater",Date.now()+3*864e5);closeInstall();if(current==="home")renderHome()};
  if($("iNow"))$("iNow").onclick=async()=>{closeInstall();installEvt.prompt();try{await installEvt.userChoice}catch(e){}installEvt=null};
  if($("iOk"))$("iOk").onclick=()=>{save("installLater",Date.now()+14*864e5);closeInstall();if(current==="home")renderHome()};
  const d=$("installDlg");if(!d.open){if(d.showModal)d.showModal();else d.setAttribute("open","")}
}
$("installSet").onclick=()=>{closeSettings();setTimeout(()=>openInstall(),60)};
try{if(progAuto()){const had=PROG&&PROG.i!=null;progInit();if(!had&&current==="home")renderHome()}}catch(e){}
if(canOfferInstall())$("installSet").hidden=false;
if("serviceWorker" in navigator&&isTopWin&&/^https?:$/.test(location.protocol)){window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})})}
document.querySelectorAll("img[data-ui]").forEach(i=>{i.src=window[i.dataset.ui]||eval(i.dataset.ui)});
document.documentElement.style.setProperty("--signimg",`url(${UI_SIGN})`);
document.documentElement.style.setProperty("--parchimg",`url(${UI_PARCH})`);
document.documentElement.style.setProperty("--lpillbook",`url(${LIB_PILL_BOOK})`);
document.documentElement.style.setProperty("--lpill",`url(${LIB_PILL})`);
document.documentElement.style.setProperty("--lframe",`url(${LIB_FRAME})`);
document.documentElement.style.setProperty("--kcookie",`url(${KIT_COOKIE})`);
document.documentElement.style.setProperty("--babyimg",`url(${J_BABY})`);
document.documentElement.style.setProperty("--frameimg",`url(${MU_FRAME})`);
/* ----- Temps de jeu : par jour et par jeu (sans compter les pauses de plus de 2 min) ----- */
let TIME=load("time",{}),lastAct=Date.now();
["pointerdown","keydown"].forEach(ev=>document.addEventListener(ev,()=>{lastAct=Date.now()},{passive:true,capture:true}));
{const d=new Date().toLocaleDateString("fr-CA");const T=TIME[d]||(TIME[d]={});T._s=(T._s||0)+1;save("time",TIME)}
/* Temps morts : après 8 s Miam réfléchit avec l'enfant, après 16 s il montre l'aide ; rarement, une petite surprise */
setInterval(()=>{
  if(document.visibilityState!=="visible"||!current||current==="home")return;
  const m=$(current)&&$(current).querySelector(".mz");if(!m||m._mood!=="idle"||m._set==="fete")return;
  if(m._seen!==lastAct){m._seen=lastAct;m._thought=m._hinted=m._sur=false}
  const idle=Date.now()-lastAct;
  if(idle>16000&&!m._hinted){m._hinted=true;miamMood(m,"hint",{ms:2400});pulseHelp()}
  else if(idle>11000&&!m._sur&&!m._hinted){m._sur=true;if(Math.random()<.2){miamMood(m,"surprise",{ms:900});const[x,y]=centerOf(m);sparks(x,y-20,3,["✨"])}}
  else if(idle>8000&&!m._thought){m._thought=true;miamMood(m,"think",{ms:2200})}
},1000);
setInterval(()=>{
  if(document.visibilityState!=="visible"||Date.now()-lastAct>120000)return;
  const d=new Date().toLocaleDateString("fr-CA"),T=TIME[d]||(TIME[d]={}),g=current||"home";
  T._=(T._||0)+15;T[g]=(T[g]||0)+15;save("time",TIME);
},15000);
renderStars(false);go("home");
$("openWizard").onclick=()=>{closeSettings();setTimeout(()=>openWelcome(1),50)};
/* ----- Vidéo d'introduction : Miam arrive sur la Terre ----- */
function playIntro(force){
  return new Promise(res=>{
    let seen=false;try{seen=!!sessionStorage.getItem("lam_intro")}catch(e){}
    if(!force&&(CFG.intro==="non"||seen)){res();return}
    try{sessionStorage.setItem("lam_intro","1")}catch(e){}
    const ov=el("div","intro");ov.id="introOv";
    ov.innerHTML=`<video class="ibg" muted playsinline preload="auto"></video><div class="ivwrap"><video class="ifg" playsinline preload="auto"></video></div>
      <div class="ibar"><button class="ibtn" id="iSound">🔊 Le son</button><button class="ibtn" id="iSkip">Passer ⏭</button></div>`;
    document.body.appendChild(ov);
    const bg=ov.querySelector(".ibg"),fg=ov.querySelector(".ifg");bg.src=INTRO_VID;fg.src=INTRO_VID;
    let done=false;
    const end=()=>{if(done)return;done=true;try{fg.pause();bg.pause()}catch(e){}ov.classList.add("out");setTimeout(()=>{ov.remove();res()},450)};
    $("iSkip").onclick=e=>{e.stopPropagation();end()};
    $("iSound").onclick=e=>{e.stopPropagation();fg.muted=!fg.muted;$("iSound").textContent=fg.muted?"🔊 Le son":"🔇 Couper";if(!fg.muted)fg.play().catch(()=>{})};
    fg.onended=end;fg.onerror=end;
    setTimeout(()=>{if(!done&&(fg.readyState<2||fg.paused))end()},4000);   // si la vidéo ne peut pas démarrer
    setTimeout(end,16000);
    const go_=()=>{bg.play().catch(()=>{});
      fg.muted=false;fg.play().then(()=>{$("iSound").textContent="🔇 Couper"}).catch(()=>{fg.muted=true;fg.play().catch(end)})};
    go_();
  });
}
function startupPopups(){
  let redo=false;try{redo=sessionStorage.getItem("lam_redoSetup")==="1";sessionStorage.removeItem("lam_redoSetup")}catch(e){}
  if(redo)return setTimeout(()=>openWelcome(-1),300);
  if(!load("welcomed",false)||(CUR_PROF!=="p1"&&!load("setupDone",false)))setTimeout(()=>openWelcome(-1),300);
  else if(PROFILES.length>1){let ch=false;try{ch=!!sessionStorage.getItem("lam_chosen")}catch(e){}if(!ch)setTimeout(openWho,250)}
}
playIntro().then(startupPopups);
