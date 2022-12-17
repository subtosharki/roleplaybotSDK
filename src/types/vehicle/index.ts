export * from './bodys.js';
export * from './returns.js';

export enum RegistrationTypes {
  Valid,
  Expired,
}

export enum ColorTypes {
  Classic,
  Metallic,
  Matte,
  Metal,
  Pearlescent,
}
export enum InsuranceTypes {
  Valid,
  Expired,
  None,
}

export enum VehicleFields {
  Color,
  Insurance,
  Registration,
  Stole,
}

export interface Vehicle {
  id: string;
  guildID: string;
  userID: string;
  userName: string;
  civilianID: string;
  civilianName: string;
  impounded: boolean;
  impoundFee: string
  stolen: boolean;
  plate: string;
  model: string;
  registration: RegistrationTypes;
  insurance: InsuranceTypes;
  color: string;
  colorType: ColorTypes;
  timestamp: string;
}