// Exemples de documents à créer manuellement dans la console Firestore
// pour voir le site passer du mode démo au temps réel.
// (Ce fichier est une référence à copier à la main, pas un script à exécuter.)

// Collection: expeditions — document id: CMR-2026-08841
{
  "status": "En route",
  "position": "40.03N · 3.92W",
  "eta": "2j 04h",
  "driver": "M. Traoré",
  "trailer": "TL-4471-BX"
}

// Sous-collection: expeditions/CMR-2026-08841/messages — un document par message
{
  "author": "Admin",
  "role": "admin",
  "text": "document e-CMR signé, envoi en cours",
  "createdAt": "(utiliser l'horodatage serveur Firestore)"
}

// Collection: fret — un document par offre
{
  "trajet": "Madrid → Dakar",
  "poids": "14 t",
  "depart": "2026-09-17",
  "prix": "840 €"
}

// Collection: missions — un document par mission
{
  "status": "active"
}

// Collection: flotte — un document par camion
{
  "immatriculation": "TL-4471-BX",
  "status": "en_mission"
}
