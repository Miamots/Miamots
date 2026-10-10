/* Miamots : fonctionne aussi sans Internet.
   La page principale est toujours redemandée en ligne d'abord (pour recevoir les mises à jour),
   les autres fichiers sont gardés en cache. */
const VERSION = "miamots-v59";
const FILES = [
  "./", "index.html", "manifest.webmanifest", "xlsx.full.min.js",
  "fonts/andika-latin-400-normal.woff2", "fonts/andika-latin-700-normal.woff2",
  "fonts/andika-latin-ext-400-normal.woff2", "fonts/andika-latin-ext-700-normal.woff2",
  "home.webp", "img/jeux/atelier-menu.webp", "img/jeux/biblio-bouton.webp", "img/jeux/biblio-bulle.webp", "img/jeux/biblio-cadre.webp", "img/jeux/bibliotheque-menu.webp", "img/jeux/cuisine-biscuit.webp", "img/jeux/cuisine-scene.webp", "img/jeux/dj-ball.webp", "img/jeux/dj-cheer.webp", "img/jeux/dj-point.webp", "img/jeux/dj-turn.webp", "img/jeux/dj-wink.webp", "img/jeux/espace-flag.webp", "img/jeux/espace-float.webp", "img/jeux/espace-read.webp", "img/jeux/espace-rocket.webp", "img/jeux/espace-scope.webp", "img/jeux/espace-vrocket.webp", "img/jeux/espace-wave.webp", "img/jeux/fusee-systeme-solaire.webp", "img/jeux/fusee-terre.webp", "img/jeux/jardin-arrosoir.webp", "img/jeux/jardin-bebe.webp", "img/jeux/jardin-corps-1.webp", "img/jeux/jardin-corps-2.webp", "img/jeux/jardin-corps-3.webp", "img/jeux/jardin-corps-4.webp", "img/jeux/jardin-corps-5.webp", "img/jeux/jardin-scene.webp", "img/jeux/jardin-tete-calme.webp", "img/jeux/jardin-tete-clin.webp", "img/jeux/jardin-tete-joie.webp", "img/jeux/jardin-tete-oh.webp", "img/jeux/jardin-tete-rire.webp", "img/jeux/jardin-tete-triste.webp", "img/jeux/jardin-tournesol.webp", "img/jeux/logo-miamots.webp", "img/jeux/miam-carte-back.webp", "img/jeux/miam-carte-front.webp", "img/jeux/miam-carte-l34.webp", "img/jeux/miam-carte-r34.webp", "img/jeux/miam-cheer.webp", "img/jeux/miam-encourage.webp", "img/jeux/miam-happy.webp", "img/jeux/miam-hint.webp", "img/jeux/miam-idle.webp", "img/jeux/miam-listen.webp", "img/jeux/miam-observe.webp", "img/jeux/miam-oops.webp", "img/jeux/miam-point.webp", "img/jeux/miam-sad.webp", "img/jeux/miam-surprise.webp", "img/jeux/miam-think.webp", "img/jeux/musee-cadre.webp", "img/jeux/planete-jupiter.webp", "img/jeux/planete-lune.webp", "img/jeux/planete-mars.webp", "img/jeux/planete-mercure.webp", "img/jeux/planete-neptune.webp", "img/jeux/planete-saturne.webp", "img/jeux/planete-soleil.webp", "img/jeux/planete-terre.webp", "img/jeux/planete-uranus.webp", "img/jeux/planete-venus.webp", "img/jeux/train-loco.webp", "img/jeux/ui-album.webp", "img/jeux/ui-cloud.webp", "img/jeux/ui-gear.webp", "img/jeux/ui-hand.webp", "img/jeux/ui-parch.webp", "img/jeux/ui-pill_map.webp", "img/jeux/ui-pill_spk.webp", "img/jeux/ui-sign.webp", "img/jeux/ui-slot_b.webp", "img/jeux/ui-slot_r.webp", "img/jeux/ui-slot_y.webp", "img/jeux/ui-star.webp", "img/jeux/wagon-bleu.webp", "img/jeux/wagon-jaune.webp", "img/jeux/wagon-rouge.webp", "img/jeux/wagon-vert.webp", "audio/ph-a.mp3", "audio/ph-an.mp3", "audio/ph-b.mp3", "audio/ph-ch.mp3", "audio/ph-d.mp3", "audio/ph-e-aigu.mp3", "audio/ph-e-grave.mp3", "audio/ph-e.mp3", "audio/ph-eu.mp3", "audio/ph-f.mp3", "audio/ph-g.mp3", "audio/ph-i.mp3", "audio/ph-in.mp3", "audio/ph-j.mp3", "audio/ph-k.mp3", "audio/ph-l.mp3", "audio/ph-m.mp3", "audio/ph-n.mp3", "audio/ph-o.mp3", "audio/ph-oi.mp3", "audio/ph-on.mp3", "audio/ph-ou.mp3", "audio/ph-p.mp3", "audio/ph-r.mp3", "audio/ph-s.mp3", "audio/ph-t.mp3", "audio/ph-u.mp3", "audio/ph-v.mp3", "audio/ph-z.mp3", "img/mots-a/abeille.webp", "img/mots-a/agneau.webp", "img/mots-a/ami.webp", "img/mots-a/amie.webp", "img/mots-a/arbre.webp", "img/mots-a/avion.webp", "img/mots-a/ballon.webp", "img/mots-a/banane.webp", "img/mots-a/bebe.webp", "img/mots-a/bec.webp", "img/mots-a/bol.webp", "img/mots-a/bonbon.webp", "img/mots-a/bouche.webp", "img/mots-a/boule.webp", "img/mots-a/bus.webp", "img/mots-a/cabane.webp", "img/mots-a/camera.webp", "img/mots-a/camion.webp", "img/mots-a/carotte.webp", "img/mots-a/chaise.webp", "img/mots-a/char.webp", "img/mots-a/chat.webp", "img/mots-a/chaton.webp", "img/mots-a/chef.webp", "img/mots-a/cheval.webp", "img/mots-a/chien.webp", "img/mots-a/chou.webp", "img/mots-a/cochon.webp", "img/mots-a/crayon.webp", "img/mots-a/cube.webp", "img/mots-a/dent.webp", "img/mots-a/dino.webp", "img/mots-a/domino.webp", "img/mots-a/douche.webp", "img/mots-a/escargot.webp", "img/mots-a/etoile.webp", "img/mots-a/fil.webp", "img/mots-a/fou.webp", "img/mots-a/four.webp", "img/mots-a/fraise.webp", "img/mots-a/gateau.webp", "img/mots-a/girafe.webp", "img/mots-a/grenouille.webp", "img/mots-a/jour.webp", "img/mots-a/judo.webp", "img/mots-a/jupe.webp", "img/mots-a/lac.webp", "img/mots-a/lampe.webp", "img/mots-a/lapin.webp", "img/mots-a/lavabo.webp", "img/mots-a/lion.webp", "img/mots-a/loup.webp", "img/mots-a/loupe.webp", "img/mots-a/lune.webp", "img/mots-b/maison.webp", "img/mots-b/mal.webp", "img/mots-b/maman.webp", "img/mots-b/mari.webp", "img/mots-b/moto.webp", "img/mots-b/mouche.webp", "img/mots-b/mouton.webp", "img/mots-b/niche.webp", "img/mots-b/or.webp", "img/mots-b/os.webp", "img/mots-b/panda.webp", "img/mots-b/papa.webp", "img/mots-b/papillon.webp", "img/mots-b/parachute.webp", "img/mots-b/parapluie.webp", "img/mots-b/patate.webp", "img/mots-b/piano.webp", "img/mots-b/poche.webp", "img/mots-b/poire.webp", "img/mots-b/poisson.webp", "img/mots-b/pont.webp", "img/mots-b/poule.webp", "img/mots-b/poupee.webp", "img/mots-b/robe.webp", "img/mots-b/roche.webp", "img/mots-b/roue.webp", "img/mots-b/route.webp", "img/mots-b/ruban.webp", "img/mots-b/ruche.webp", "img/mots-b/rue.webp", "img/mots-b/sac.webp", "img/mots-b/salade.webp", "img/mots-b/salami.webp", "img/mots-b/sapin.webp", "img/mots-b/savon.webp", "img/mots-b/sel.webp", "img/mots-b/sol.webp", "img/mots-b/soleil.webp", "img/mots-b/soupe.webp", "img/mots-b/souris.webp", "img/mots-b/table.webp", "img/mots-b/toit.webp", "img/mots-b/tomate.webp", "img/mots-b/tortue.webp", "img/mots-b/toutou.webp", "img/mots-b/train.webp", "img/mots-b/tulipe.webp", "img/mots-b/tutu.webp", "img/mots-b/vache.webp", "img/mots-b/velo.webp", "img/mots-b/vis.webp", "img/mots-b/voile.webp", "img/mots-b/voiture.webp", "img/statuts/avance-bien.webp", "img/statuts/chemin-progression.webp", "img/statuts/en-developpement.webp", "img/statuts/solide.webp", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"
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
