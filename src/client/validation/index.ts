import { z } from 'zod';
import {
  CIV_GENDERS,
  ColorTypes,
  CivilianFields,
  InsuranceTypes,
  RegistrationTypes,
  VehicleFields,
  FirearmFields,
} from '../../types/index.js';

export default class {
  static Name = z.string();
  static CreateCivilian = z.object({
    userID: z.string(),
    userName: z.string(),
    name: z.string(),
    age: z.number(),
    dob: z.string(),
    gender: z.nativeEnum(CIV_GENDERS),
    hair: z.string(),
    height: z.string(),
    weight: z.string(),
    address: z.string(),
    occupation: z.string(),
  });
  static EditCivilian = z.object({
    name: z.string(),
    field: z.nativeEnum(CivilianFields),
    value: z.string() || z.number(),
  });
  static ToggleBolo = z.object({
    name: z.string(),
    bolo: z.boolean(),
    reason: z.string().optional(),
  });
  static ToggleDeceased = z.object({
    name: z.string(),
    deceased: z.boolean(),
  });
  static DeleteCivilian = z.object({
    name: z.string(),
  });
  static Plate = z.string();
  static CreateVehicle = z.object({
    name: z.string(),
    plate: z.string(),
    model: z.string(),
    color: z.string(),
    colorType: z.nativeEnum(ColorTypes),
    insurance: z.nativeEnum(InsuranceTypes),
    registration: z.nativeEnum(RegistrationTypes),
  });
  static EditVehicle = z.object({
    name: z.string(),
    field: z.nativeEnum(VehicleFields),
    value: z.string() || z.boolean(),
  });
  static SerialNumber = z.string();
  static CreateFirearm = z.object({
    name: z.string(),
    serialNumber: z.string(),
    model: z.string(),
  });
  static EditFirearm = z.object({
    name: z.string(),
    field: z.nativeEnum(FirearmFields),
    value: z.string() || z.boolean(),
  });
  static AdmitCivilian = z.object({
    name: z.string(),
    time: z.string(),
    injuries: z.string(),
    unitName: z.string(),
    unitID: z.string(),
  });
  static ArrestCivilian = z.object({
    name: z.string(),
    officerName: z.string(),
    officerID: z.string(),
    charges: z.string(),
    time: z.number(),
  });
  static CiteCivilian = z.object({
    name: z.string(),
    officerName: z.string(),
    officerID: z.string(),
    charges: z.string(),
    amount: z.number(),
  });
  static FineCivilian = z.object({
    name: z.string(),
    officerName: z.string(),
    officerID: z.string(),
    charges: z.string(),
    amount: z.number(),
  });
  static ToggleImpoundVehicle = z.object({
    plate: z.string(),
    impound: z.boolean(),
    fee: z.number().optional(),
  });
}
