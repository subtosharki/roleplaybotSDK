import { z } from 'zod';
import { CIV_GENDERS, Fields } from '../../types/index.js';

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
    field: z.nativeEnum(Fields),
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
}
