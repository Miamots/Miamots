/* Miamots : fonctionne aussi sans Internet.
   La page principale est toujours redemandée en ligne d'abord (pour recevoir les mises à jour),
   les autres fichiers sont gardés en cache. */
const VERSION = "miamots-v58";
const FILES = [
  "./", "index.html", "manifest.webmanifest", "xlsx.full.min.js",
  "fonts/andika-latin-400-normal.woff2", "fonts/andika-latin-700-normal.woff2",
  "fonts/andika-latin-ext-400-normal.woff2", "fonts/andika-latin-ext-700-normal.woff2",
  "home.webp", "img/jeux/atelier-menu.webp", "img/jeux/biblio-bouton.webp", "img/jeux/biblio-bulle.webp", "img/jeux/biblio-cadre.webp", "img/jeux/bibliotheque-menu.webp", "img/jeux/cuisine-biscuit.webp", "img/jeux/cuisine-scene.webp", "img/jeux/dj-ball.webp", "img/jeux/dj-cheer.webp", "img/jeux/dj-point.webp", "img/jeux/dj-turn.webp", "img/jeux/dj-wink.webp", "img/jeux/espace-flag.webp", "img/jeux/espace-float.webp", "img/jeux/espace-read.webp", "img/jeux/espace-rocket.webp", "img/jeux/espace-scope.webp", "img/jeux/espace-vrocket.webp", "img/jeux/espace-wave.webp", "img/jeux/fusee-systeme-solaire.webp", "img/jeux/fusee-terre.webp", "img/jeux/jardin-arrosoir.webp", "img/jeux/jardin-bebe.webp", "img/jeux/jardin-corps-1.webp", "img/jeux/jardin-corps-2.webp", "img/jeux/jardin-corps-3.webp", "img/jeux/jardin-corps-4.webp", "img/jeux/jardin-corps-5.webp", "img/jeux/jardin-scene.webp", "img/jeux/jardin-tete-calme.webp", "img/jeux/jardin-tete-clin.webp", "img/jeux/jardin-tete-joie.webp", "img/jeux/jardin-tete-oh.webp", "img/jeux/jardin-tete-rire.webp", "img/jeux/jardin-tete-triste.webp", "img/jeux/jardin-tournesol.webp", "img/jeux/logo-miamots.webp", "img/jeux/miam-carte-back.webp", "img/jeux/miam-carte-front.webp", "img/jeux/miam-carte-l34.webp", "img/jeux/miam-carte-r34.webp", "img/jeux/miam-cheer.webp", "img/jeux/miam-encourage.webp", "img/jeux/miam-happy.webp", "img/jeux/miam-hint.webp", "img/jeux/miam-idle.webp", "img/jeux/miam-listen.webp", "img/jeux/miam-observe.webp", "img/jeux/miam-oops.webp", "img/jeux/miam-point.webp", "img/jeux/miam-sad.webp", "img/jeux/miam-surprise.webp", "img/jeux/miam-think.webp", "img/jeux/musee-cadre.webp", "img/jeux/planete-jupiter.webp", "img/jeux/planete-lune.webp", "img/jeux/planete-mars.webp", "img/jeux/planete-mercure.webp", "img/jeux/planete-neptune.webp", "img/jeux/planete-saturne.webp", "img/jeux/planete-soleil.webp", "img/jeux/planete-terre.webp", "img/jeux/planete-uranus.webp", "img/jeux/planete-venus.webp", "img/jeux/train-loco.webp", "img/jeux/ui-album.webp", "img/jeux/ui-cloud.webp", "img/jeux/ui-gear.webp", "img/jeux/ui-hand.webp", "img/jeux/ui-parch.webp", "img/jeux/ui-pill_map.webp", "img/jeux/ui-pill_spk.webp", "img/jeux/ui-sign.webp", "img/jeux/ui-slot_b.webp", "img/jeux/ui-slot_r.webp", "img/jeux/ui-slot_y.webp", "img/jeux/ui-star.webp", "img/jeux/wagon-bleu.webp", "img/jeux/wagon-jaune.webp", "img/jeux/wagon-rouge.webp", "img/jeux/wagon-vert.webp", "audio/ph-a.mp3", "audio/ph-an.mp3", "audio/ph-b.mp3", "audio/ph-ch.mp3", "audio/ph-d.mp3", "audio/ph-e-aigu.mp3", "audio/ph-e-grave.mp3", "audio/ph-e.mp3", "audio/ph-eu.mp3", "audio/ph-f.mp3", "audio/ph-g.mp3", "audio/ph-i.mp3", "audio/ph-in.mp3", "audio/ph-j.mp3", "audio/ph-k.mp3", "audio/ph-l.mp3", "audio/ph-m.mp3", "audio/ph-n.mp3", "audio/ph-o.mp3", "audio/ph-oi.mp3", "audio/ph-on.mp3", "audio/ph-ou.mp3", "audio/ph-p.mp3", "audio/ph-r.mp3", "audio/ph-s.mp3", "audio/ph-t.mp3", "audio/ph-u.mp3", "audio/ph-v.mp3", "audio/ph-z.mp3", "img/mots/abeille.webp", "img/mots/agneau.webp", "img/mots/ami.webp", "img/mots/amie.webp", "img/mots/arbre.webp", "img/mots/avion.webp", "img/mots/ballon.webp", "img/mots/banane.webp", "img/mots/bebe.webp", "img/mots/bec.webp", "img/mots/bol.webp", "img/mots/bonbon.webp", "img/mots/bouche.webp", "img/mots/boule.webp", "img/mots/bus.webp", "img/mots/cabane.webp", "img/mots/camera.webp", "img/mots/camion.webp", "img/mots/carotte.webp", "img/mots/chaise.webp", "img/mots/char.webp", "img/mots/chat.webp", "img/mots/chaton.webp", "img/mots/chef.webp", "img/mots/cheval.webp", "img/mots/chien.webp", "img/mots/chou.webp", "img/mots/cochon.webp", "img/mots/crayon.webp", "img/mots/cube.webp", "img/mots/dent.webp", "img/mots/dino.webp", "img/mots/domino.webp", "img/mots/douche.webp", "img/mots/escargot.webp", "img/mots/etoile.webp", "img/mots/fil.webp", "img/mots/fou.webp", "img/mots/four.webp", "img/mots/fraise.webp", "img/mots/gateau.webp", "img/mots/girafe.webp", "img/mots/grenouille.webp", "img/mots/jour.webp", "img/mots/judo.webp", "img/mots/jupe.webp", "img/mots/lac.webp", "img/mots/lampe.webp", "img/mots/lapin.webp", "img/mots/lavabo.webp", "img/mots/lion.webp", "img/mots/loup.webp", "img/mots/loupe.webp", "img/mots/lune.webp", "img/mots/maison.webp", "img/mots/mal.webp", "img/mots/maman.webp", "img/mots/mari.webp", "img/mots/moto.webp", "img/mots/mouche.webp", "img/mots/mouton.webp", "img/mots/niche.webp", "img/mots/or.webp", "img/mots/os.webp", "img/mots/panda.webp", "img/mots/papa.webp", "img/mots/papillon.webp", "img/mots/parachute.webp", "img/mots/parapluie.webp", "img/mots/patate.webp", "img/mots/piano.webp", "img/mots/poche.webp", "img/mots/poire.webp", "img/mots/poisson.webp", "img/mots/pont.webp", "img/mots/poule.webp", "img/mots/poupee.webp", "img/mots/robe.webp", "img/mots/roche.webp", "img/mots/roue.webp", "img/mots/route.webp", "img/mots/ruban.webp", "img/mots/ruche.webp", "img/mots/rue.webp", "img/mots/sac.webp", "img/mots/salade.webp", "img/mots/salami.webp", "img/mots/sapin.webp", "img/mots/savon.webp", "img/mots/sel.webp", "img/mots/sol.webp", "img/mots/soleil.webp", "img/mots/soupe.webp", "img/mots/souris.webp", "img/mots/table.webp", "img/mots/toit.webp", "img/mots/tomate.webp", "img/mots/tortue.webp", "img/mots/toutou.webp", "img/mots/train.webp", "img/mots/tulipe.webp", "img/mots/tutu.webp", "img/mots/vache.webp", "img/mots/velo.webp", "img/mots/vis.webp", "img/mots/voile.webp", "img/mots/voiture.webp", "img/statuts/avance-bien.webp", "img/statuts/chemin-progression.webp", "img/statuts/en-developpement.webp", "img/statuts/solide.webp", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("index.html", copy)); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok && new URL(req.url).origin === location.origin) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
