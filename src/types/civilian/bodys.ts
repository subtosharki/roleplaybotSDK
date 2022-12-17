import { CIV_GENDERS, CivilianFields } from './index.js';

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

export interface EditCivilianBody {
  name: string;
  field: CivilianFields;
  value: string | number;
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
