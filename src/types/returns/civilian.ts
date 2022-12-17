import type {
  Arrests,
  Citations,
  Civilian,
  Fines,
  HospitalRecords,
} from '../index.js';

export interface GetCivilianReturn {
  guildID: string;
  userID: string;
  userName: string;
  civilian: Array<Civilian>;
  citations: Array<Citations>;
  fines: Array<Fines>;
  arrests: Array<Arrests>;
  hospitalizations: Array<HospitalRecords>;
}

export interface DeleteCivilianReturn {
  guildID: string;
  civilianID: string;
  civilianName: string;
  userName: string;
  userID: string;
  success: string;
  civilian: Array<Civilian>;
}

export interface EditCivilianReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  userName: string;
  userID: string;
  field: string;
  value: string;
  oldValue: string;
  success: string;
  civilian: Array<Civilian>;
}

export interface CreateCivilianReturn {
  guildId: string;
  civilianID: string;
  civilianName: string;
  userName: string;
  userID: string;
  success: string;
  civilian: Array<Civilian>;
}

export interface CivilianListReturn {
  amount: string;
  guildID: string;
  civilians: Array<Civilian>;
}

export interface ToggleBoloReturn1 {
  guildID: string;
  userName: string;
  userID: string;
  civilianName: string;
  civilianID: string;
  success: string;
  civilian: Array<Civilian>;
}

export interface ToggleBoloReturn2 {
  guildID: string;
  userName: string;
  userID: string;
  civilianName: string;
  civilianID: string;
  error: string;
  civilian: Array<Civilian>;
}

export type ToggleBoloReturn = ToggleBoloReturn1 | ToggleBoloReturn2;

export interface ToggleDeceasedReturn1 {
  guildID: string;
  civilianName: string;
  civilianID: string;
  userName: string;
  userID: string;
  success: string;
  civilian: Array<Civilian>;
}

export interface ToggleDeceasedReturn2 {
  guildID: string;
  civilianName: string;
  civilianID: string;
  userName: string;
  userID: string;
  deceased: string;
  error: string;
}

export type ToggleDeceasedReturn =
  | ToggleDeceasedReturn1
  | ToggleDeceasedReturn2;
