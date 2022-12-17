import * as APITypes from '../types/index.js';
import CivilianManager from './managers/CivilianManager.js';
import FetchClient from './fetchClient.js';
import type { ErrorReturn } from '../types/index.js';
import VehicleManager from './managers/VehicleManager.js';

export default class extends FetchClient {
  private readonly civilianManager: CivilianManager;
  private readonly vehicleManager: VehicleManager;
  public constructor({ authKey, guildId }: APITypes.ClientOptions) {
    super({ authKey, guildId });
    this.civilianManager = new CivilianManager({ authKey, guildId });
    this.vehicleManager = new VehicleManager({ authKey, guildId });
  }
  public async getAPIVersion(): Promise<APITypes.VersionReturn | ErrorReturn> {
    return await super.fetch('version');
  }
  public async getCivilian(
    name: string,
  ): Promise<APITypes.GetCivilianReturn | ErrorReturn> {
    return await this.civilianManager.get(name);
  }
  public async getAllCivilians(): Promise<
    APITypes.CivilianListReturn | ErrorReturn
  > {
    return await this.civilianManager.list();
  }
  public async createCivilian(
    body: APITypes.CreateCivilianBody,
  ): Promise<APITypes.CreateCivilianReturn | ErrorReturn> {
    return await this.civilianManager.create(body);
  }
  public async editCivilian(
    body: APITypes.EditCivilianBody,
  ): Promise<APITypes.EditCivilianReturn | ErrorReturn> {
    return await this.civilianManager.edit(body);
  }
  public async toggleBolo(
    body: APITypes.ToggleBoloBody,
  ): Promise<APITypes.ToggleBoloReturn | ErrorReturn> {
    return await this.civilianManager.bolo(body);
  }
  public async toggleDeceased(
    body: APITypes.ToggleDeceasedBody,
  ): Promise<APITypes.ToggleDeceasedReturn | ErrorReturn> {
    return await this.civilianManager.deceased(body);
  }
  public async deleteCivilian(
    name: string,
  ): Promise<APITypes.DeleteCivilianReturn | ErrorReturn> {
    return await this.civilianManager.delete(name);
  }

  public async getVehicle(plate:string) : Promise<APITypes.GetVehicleReturn | ErrorReturn> {
    return await this.vehicleManager.get(plate);
  }
  public async getAllVehicles() : Promise<APITypes.GetAllVehiclesReturn | ErrorReturn> {
    return await this.vehicleManager.list();
  }
  public async createVehicle(body:APITypes.CreateVehicleBody) : Promise<APITypes.CreateVehicleReturn | ErrorReturn> {
    return await this.vehicleManager.create(body);
  }
  public async editVehicle(body:APITypes.EditVehicleBody) : Promise<APITypes.EditVehicleReturn | ErrorReturn> {
    return await this.vehicleManager.edit(body);
  }
  public async deleteVehicle(plate:string) : Promise<APITypes.DeleteVehicleReturn | ErrorReturn> {
    return await this.vehicleManager.delete(plate);
  }
}
