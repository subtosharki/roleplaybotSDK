export * from './bodys/index.js';
export * from './returns/index.js';

interface UnauthorizedReturn {
  authentication: false;
  error: string;
  details: string;
}

export type ErrorReturn =
  | {
      error: string;
      details: string;
    }
  | UnauthorizedReturn;

export type VersionReturn =
  | {
      version: string;
    }
  | UnauthorizedReturn;

export interface ClientOptions {
  authKey: string;
  guildId: string;
}

export enum RegistrationTypes {
  Valid,
  Expired,
}

export enum ColorTypes {
  Classic = 'classic',
  Metallic = 'metallic',
  Matte = 'matte',
  Metal = 'metal',
  Pearlescent = 'pearlescent',
}
export enum InsuranceTypes {
  Valid = 'valid',
  Expired = 'expired',
  None = 'None',
}

export enum VehicleFields {
  Color = 'color',
  Insurance = 'insurance',
  Registration = 'registration',
  Stole = 'stole',
}

export interface Vehicle {
  id: string;
  guildID: string;
  userID: string;
  userName: string;
  civilianID: string;
  civilianName: string;
  impounded: boolean;
  impoundFee: string;
  stolen: boolean;
  plate: string;
  model: string;
  registration: RegistrationTypes;
  insurance: InsuranceTypes;
  color: string;
  colorType: ColorTypes;
  timestamp: string;
}

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
  arrests: Array<Arrest>;
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
export interface Arrest {
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
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export enum CivilianFields {
  Hair = 'hair_color',
  Name = 'name',
  Age = 'age',
  Height = 'height',
  Weight = 'weight',
  Address = 'address',
  Occupation = 'occupation',
}

export enum FirearmFields {
  Color = 'color',
  Stolen = 'stole',
}

export interface Firearm {
  id: string;
  serialNumber: string;
  guildID: string;
  userID: string;
  userName: string;
  civilianID: string;
  civilianName: string;
  stolen: boolean;
  model: string;
  color: string;
  timestamp: string;
}

export interface EditFirearmReturn {
  guildID: string;
  serialNumber: string;
  civilianName: string;
  civilianID: string;
  userID: string;
  userName: string;
  plate: string;
  success: string;
  firearm: Array<Firearm>;
}

export interface DeleteFirearmReturn {
  guildID: string;
  id: string;
  success: string;
}

export interface Admissions {
  count: string;
  unitsName: string;
  unitsID: string;
  time: string;
  injuries: string;
  timestamp: string;
}
