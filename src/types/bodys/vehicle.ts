import {
  ColorTypes,
  InsuranceTypes,
  RegistrationTypes,
  VehicleFields,
} from '../index.js';

export interface CreateVehicleBody {
  name: string;
  plate: string;
  model: string;
  color: string;
  colorType: ColorTypes;
  insurance: InsuranceTypes;
  registration: RegistrationTypes;
}

export interface EditVehicleBody {
  name: string;
  field: VehicleFields;
  value: string | InsuranceTypes | RegistrationTypes | boolean;
}
