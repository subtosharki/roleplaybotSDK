import { FirearmFields } from '../index.js';

export interface CreateFirearmBody {
  name: string;
  model: string;
  color: string;
}

export interface EditFirearmBody {
  name: string;
  field: FirearmFields;
  value: string | boolean;
}
