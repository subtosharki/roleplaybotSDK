import type { Admissions } from '../index.js';

export interface GetMedicalRecordReturn {
  guildID: string;
  civilianName: string;
  civilianID: string;
  amount: string;
  admissions: Array<Admissions>;
}

export interface AdmitCivilianReturn {
  guildID: string;
  civilianID: string;
  civilianName: string;
  success: string;
  admission: Array<Admissions>;
}
