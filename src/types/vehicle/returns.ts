import { InsuranceTypes, RegistrationTypes, Vehicle, VehicleFields } from './index.js';

export interface GetVehicleReturn1 {
  found: boolean;
  guildID: string;
  vehicle: Array<Vehicle>
}

export interface GetVehicleReturn2 {
  found: boolean;
  error: string;
  details: string;
}

export type GetVehicleReturn = GetVehicleReturn1 | GetVehicleReturn2;

export interface GetAllVehiclesReturn {
  amount: string;
  guildID: string;
  vehicles: Array<Vehicle>;
}

export interface CreateVehicleReturn {
  guildID: string;
  plate: string;
  civilianName: string;
  civilianID: string;
  success: string;
  vehicle: Array<Vehicle>;
}

export interface EditVehicleReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  userID: string;
  userName: string;
  plate: string;
  field: VehicleFields
  value: string | InsuranceTypes | RegistrationTypes | boolean;
  oldValue: string | InsuranceTypes | RegistrationTypes | boolean;
  success: string;
  vehicle: Array<Vehicle>;
}

export interface DeleteVehicleReturn {
  guildID: string;
  id: string;
  success: string;
}


