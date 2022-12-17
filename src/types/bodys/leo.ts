export interface ArrestCivilianBody {
  name: string;
  officerName: string;
  officerID: string;
  charges: string;
  time: number;
}

export interface CiteCivilianBody {
  name: string;
  officerName: string;
  officerID: string;
  charges: string;
  amount: number;
}

export interface FineCivilianBody {
  name: string;
  officerName: string;
  officerID: string;
  charges: string;
  amount: number;
}

export interface ToggleImpoundVehicleBody {
  plate: string;
  impound: boolean;
  fee?: number;
}
