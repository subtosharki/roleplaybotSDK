interface UnauthorizedReturn {
  authentication: false;
  error: string;
  details: string;
}

export interface ErrorReturn {
  error: string;
  details: string;
}

interface Civilian {
  id: string;
  guildID: string;
  userID: string;
  userName: string;
  deceased: boolean;
  bolo: boolean;
  boloReason: string;
  civilianName: string;
  civilianAge: number;
  civilianDOB: string;
  civilianGender: string;
  civilianHairColor: string;
  civilianHeight: string;
  civilianWeight: string;
  civilianAddress: string;
  civilianOccupation: string;
  registrationTimestamp: string;
  citations: Array<Citations>;
  fines: Array<Fines>;
  arrests: Array<Arrests>;
  hospitalizations: Array<HospitalRecords>;
}
interface Citations {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
interface Fines {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
interface Arrests {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
interface HospitalRecords {
  medicName: string;
  medicID: string;
  injuries: string;
  time: string;
  timestamp: string;
}

export type VersionReturn =
  | {
      version: string;
    }
  | UnauthorizedReturn;

export interface ClientOptions {
  authKey: string;
  guildId: string;
}

export enum CIV_GENDERS {
  Male,
  Female,
Other
}

export interface CreateCivilianBody {
  userID: string;
  userName: string;
  name: string;
  age: number;
  dob: string;
  gender: CIV_GENDERS;
  hair: string;
  height: string;
  weight: string;
  address: string;
  occupation: string;
}

export enum Fields {
  Hair,
  Name,
  Age,
  Height,
  Weight,
  Address,
  Occupation,
}

export interface EditCivilianBody {
  name: string;
  field: Fields;
  value: string;
}

export interface ToggleBoloBody {
  name: string;
  bolo: boolean;
  reason?: string;
}

export interface ToggleDeceasedBody {
  name: string;
  deceased: boolean;
}

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

export type ToggleDeceasedReturn = ToggleDeceasedReturn1 | ToggleDeceasedReturn2;