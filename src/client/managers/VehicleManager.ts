import FetchClient from '../fetchClient.js';
import type {
  ClientOptions,
  CreateVehicleBody,
  EditVehicleBody,
} from '../../types/index.js';
import Validation from '../validation/index.js';

export default class extends FetchClient {
  public constructor({ authKey, guildId }: ClientOptions) {
    super({ authKey, guildId });
  }
  public async get(plate: string) {
    Validation.Plate.parse(plate);
    return await super.fetch('vehicle/plate', {
      body: JSON.stringify({ plate }),
    });
  }
  public async list() {
    return await super.fetch('vehicle/list');
  }
  public async create(body: CreateVehicleBody) {
    Validation.CreateVehicle.parse(body);
    return await super.fetch('vehicle/create', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async edit(body: EditVehicleBody) {
    Validation.EditVehicle.parse(body);
    return await super.fetch('vehicle/edit', {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
  public async delete(plate: string) {
    Validation.Plate.parse(plate);
    return await super.fetch('vehicle/delete', {
      method: 'DELETE',
      body: JSON.stringify({ plate }),
    });
  }
}
