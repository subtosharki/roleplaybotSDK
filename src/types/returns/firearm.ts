import type { Firearm } from '../index.js';

export interface GetFirearmReturn {
  found: boolean;
  guildID: string;
  firearm: Array<Firearm>;
}

export interface GetAllFirearmsReturn {
  amount: string;
  guildID: string;
  firearms: Array<Firearm>;
}

export interface CreateFirearmReturn {
  guildID: string;
  civilianID: string;
  civilianName: string;
  userName: string;
  userID: string;
  success: string;
  firearm: Array<Firearm>;
}
