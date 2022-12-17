import type { Arrest, Citations, Fines, Vehicle } from '../index.js';

export interface GetRecordsReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  citationAmount: string;
  fineAmount: string;
  arrestAmount: string;
  citations: Array<Citations>;
  fines: Array<Fines>;
  arrests: Array<Arrest>;
}

export interface ArrestCivilianReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  success: string;
  arrest: Array<Arrest>;
}

export interface CiteCivilianReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  success: string;
  citation: Array<Citations>;
}

export interface FineCivilianReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  success: string;
  fine: Array<Fines>;
}

export interface ImpoundVehicleReturn {
  guildID: string;
  plate: string;
  userID: string;
  userName: string;
  civilianName: string;
  civilianID: string;
  impounded: boolean;
  error: string;
  vehicle: Array<Vehicle>;
}
