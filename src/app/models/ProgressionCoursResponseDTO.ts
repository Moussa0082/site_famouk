export interface ProgressionCoursResponseDTO {
  id: number;
  coursId: number;
  coursTitre: string;
  vu: boolean;
  dateVu: string | Date | null;
  tempsPasse: number;
  tempsEnMinutes: number;
}
