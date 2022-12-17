export * from './bodys.js';
export * from './returns.js';

export interface Civilian {
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
export interface Citations {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
export interface Fines {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
export interface Arrests {
  officerName: string;
  officerID: string;
  amount: string;
  charges: string;
  timestamp: string;
}
export interface HospitalRecords {
  medicName: string;
  medicID: string;
  injuries: string;
  time: string;
  timestamp: string;
}

export enum CIV_GENDERS {
  Male,
  Female,
  Other,
}

export enum CivilianFields {
  Hair,
  Name,
  Age,
  Height,
  Weight,
  Address,
  Occupation,
}
