/* Miamots — réglages pédagogiques. Modifier seulement les valeurs (chiffres). Chargé avant donnees.js et app.js. */
/* ================== RÉGLAGES PÉDAGOGIQUES (un seul endroit) ==================
   Tous les seuils à ajuster après le test réel sont ici. Ne rien changer ailleurs.
   Référence : Miamots_maitrise_V1-5 (progression dans la séance + maîtrise à long terme). */
const PEDA={
  seance:{n:3,rate:.75,maxSteps:2},            /* son suivant ouvert aujourd'hui : 3 réussites seul (3 choix+), 75 % du jour ; au plus 2 étapes par jour */
  rappel:{sons:3,parSon:2,maxEssais:8,joursRecents:7,focus:.85},   /* « Hier » : 3 derniers sons de la veille, revus 2 fois chacun (max 8 essais) */
  fragile:{essais:2,rate:.6,focus:.45},        /* son récent < 60 % au rappel (2 essais+) : plus de pratique, pas de nouveau son */
  cible:{focus:.55},                           /* sons de l'étape pas encore compris aujourd'hui : reviennent plus souvent */
  maitrise:{son:{n:5,days:2,ctx:2},fus:{n:6,items:4,days:2},lec:{n:6,items:4,days:2,games:2,rate:.8},ecr:{n:5,items:4,days:2,rate:.8},ear:{n:5,items:4,days:2},emf:{n:5,items:4,days:2},phr:{n:5,items:4,days:2}},
  rappelDiffereJours:3,                        /* consolidé → acquis : 2 réussites au moins 3 jours après */
  phrases:{motsLusSeul:6},                     /* ouverture des phrases */
  emuet:{motsLusOuEcrits:4,motsEnE:3}          /* ouverture de la leçon du e muet */
};
