import { MediaResponseDTO } from './Media';

export enum Niveau {
  DEBUTANT = 'DEBUTANT',
  INTERMEDIAIRE = 'INTERMEDIAIRE',
  AVANCE = 'AVANCE',
}

export interface FormationResponse {
  id: number;
  titre: string;
  description: string;
  imageUrl: string;
  categorie: string;
  dureeEstimee: number;
  niveau: Niveau;
  active: boolean;
  dateCreation: string;
  nombreModules: number;
}
