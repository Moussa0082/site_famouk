import { CategorieResponse } from './Categorie';
import { MediaResponseDTO } from './Media';

export interface Blog {
  id: string;
  titre: string;
  description: string;
  image: string;
  dateCreation: string;
  datePublication: string;
  auteur: string;
  categorie: string;
  active: boolean;
}

export interface BlogResponse {
  id: string;
  titre: string;
  description: string;
  auteur: string;
  categorie?: CategorieResponse;
  dateCreation: string; // Format ISO string (ex: "2026-02-09T10:00:00")
  datePublication: string;
  media: MediaResponseDTO[];
}

export interface blogRequest {
  titre: String;
  description: String;
  categorieId: String;
  auteur: String;
}
