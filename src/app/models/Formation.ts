import { MediaResponseDTO } from "./Media";

export enum Niveau {
  DEBUTANT = "DEBUTANT",
  INTERMEDIAIRE = "INTERMEDIAIRE",
  AVANCE = "AVANCE",
}

export interface FormationResponse {
  id: string;
  nom: string;
  description: string;
  Duree: string; // Attention : 'Duree' en Java devient 'duree' (camelCase standard)
  niveau: Niveau;
  media: MediaResponseDTO[];
}

export interface FormationRequest {
  nom: string;
  description: string;
  Duree: string; // On garde la majuscule si ton backend l'attend ainsi dans le JSON
  niveau: Niveau;
}
