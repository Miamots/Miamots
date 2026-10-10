# Miamots – mettre l'app en ligne et l'installer

Ce dossier contient tout ce qu'il faut. Il ne faut rien modifier : déposez simplement **tout le contenu du dossier** (les fichiers ET les dossiers `fonts` et `icons`) chez un hébergeur.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | L'application Miamots |
| `manifest.webmanifest` | Nom, icône et couleurs de l'app installée |
| `sw.js` | Permet à l'app de fonctionner sans Internet |
| `xlsx.full.min.js` | Sert à l'export Excel (hors ligne) |
| `fonts/` | La police Andika (hors ligne) |
| `icons/` | Les icônes de Miam |
| `home.webp`, `img/` | Les images aquarelle (accueil, jeux, mots, rapport) |

## ⚠️ Envoyer les fichiers sur GitHub (limite de 100 fichiers à la fois)

GitHub accepte au plus 100 fichiers par envoi. Les images sont donc rangées en dossiers de moins de 100 fichiers :

| Dossier | Fichiers |
|---|---|
| (racine) : index.html, sw.js, manifest.webmanifest, home.webp, intro.mp4, xlsx.full.min.js, verifier.html, LISEZ-MOI.md | 8 |
| `img/jeux` | 77 |
| `img/autocollants-a` | 58 |
| `img/autocollants-b` | 60 |
| `img/photos` | 75 |
| `img/mots` | 81 |
| `img/statuts` | 4 |
| `audio` | 29 |
| `icons`, `fonts`, `vendor` | 10 |

**La règle d'or : toujours glisser le DOSSIER lui-même, jamais les fichiers qu'il contient.** Si on glisse le dossier `photos`, GitHub crée `img/photos/...`. Si on glisse seulement les images, elles tombent à la racine et l'app ne les trouve plus.

Faites 7 envois, chacun avec **Add file › Upload files** puis **Commit changes** :

1. Les **fichiers de la racine** (sélectionnez-les, sans les dossiers) + les dossiers **`icons`, `fonts`, `vendor`, `audio`**.
2. Ouvrez le dossier `img` du dépôt sur GitHub (ou créez-le en envoyant le premier dossier), puis glissez le dossier **`jeux`**.
3. Toujours dans `img` : glissez **`autocollants-a`**.
4. Glissez **`autocollants-b`**.
5. Glissez **`photos`**.
6. Glissez **`mots`** (les images aquarelle des mots).
7. Glissez **`statuts`** (les petites images du rapport).

Pour les envois 2 à 5, une autre façon simple : depuis la racine du dépôt, glissez le dossier `img` lui-même… mais seulement s'il contient un seul sous-dossier à la fois. Le plus sûr reste d'ouvrir `img` dans GitHub d'abord, puis d'y glisser chaque sous-dossier.

### Vérifier que tout est au bon endroit

Une fois en ligne, ouvrez : **https://miamots.github.io/miamots/verifier.html**

La page vérifie chaque fichier et affiche ✅ si tout est bon, ou la liste des dossiers où il manque quelque chose.

### Si des images ont été envoyées au mauvais endroit

Le plus simple est souvent de repartir d'un dépôt propre : **Settings › General › Delete this repository** (tout en bas), recréez `miamots`, refaites les envois ci-dessus, puis réactivez **Settings › Pages**. L'adresse reste la même et les données des enfants (gardées sur les téléphones) ne sont pas touchées.

## Option A – GitHub Pages (gratuit, adresse permanente)

1. Créez un compte sur **github.com**.
2. Bouton **+** › **New repository**. Nom : `miamots`. Cochez **Public**. Touchez **Create repository**.
3. Touchez **uploading an existing file**, puis glissez tout le contenu du dossier (avec `fonts` et `icons`). Touchez **Commit changes**.
4. Allez dans **Settings › Pages**. Sous « Branch », choisissez **main** et **/ (root)**, puis **Save**.
5. Après 1 à 2 minutes, l'adresse apparaît en haut de la page, par exemple :
   `https://votre-nom.github.io/miamots/`

## Option B – Netlify (encore plus simple)

1. Créez un compte gratuit sur **netlify.com**.
2. Allez sur **app.netlify.com/drop** et glissez le dossier `miamots` entier dans la zone.
3. Netlify donne une adresse du genre `https://miamots-123.netlify.app`. Vous pouvez la renommer dans **Site configuration › Change site name**.

Ces deux options se font plus facilement depuis un ordinateur.

## Installer Miamots sur le téléphone

- **Android (Chrome)** : ouvrez l'adresse, puis ⋮ › **Installer l'application** (ou ⚙️ dans Miamots › **📲 Installer Miamots**).
- **iPhone (Safari)** : ouvrez l'adresse, bouton **Partager** › **Sur l'écran d'accueil**.

Miam apparaît sur l'écran d'accueil. L'app s'ouvre en plein écran et fonctionne même sans Internet.

## Transférer les progrès de votre enfant

Chaque version de l'app garde ses propres données. Pour garder les étoiles, les listes de mots et vos sons enregistrés :

1. Dans l'ancienne version : ⚙️ › **💾 Sauvegarder** (ou **📋 Copier la sauvegarde**).
2. Dans Miamots installé : ⚙️ › **📂 Restaurer un fichier** (ou **📋 Coller une sauvegarde**).

## Mettre à jour l'app plus tard

Remplacez simplement `index.html` chez l'hébergeur par la nouvelle version (GitHub : « Add file › Upload files » ; Netlify : glissez à nouveau le dossier). Les téléphones reçoivent la mise à jour à la prochaine ouverture avec Internet. **Les données de l'enfant sont conservées**, tant que l'adresse ne change pas.

Si vous remplacez aussi d'autres fichiers (icônes, police, images…), augmentez le numéro `miamots-vXX` au début de `sw.js` (par exemple v52 → v53).

## Partager avec des amis

Envoyez-leur simplement l'adresse. Chaque téléphone a ses propres données : leurs enfants ont leurs propres étoiles et leur propre portrait.
