import FetchClient from '../fetchClient.js';
import type {
  ClientOptions,
  CreateFirearmBody,
  EditFirearmBody,
} from '../../types/index.js';
import Validation from '../validation/index.js';

export default class extends FetchClient {
  public constructor({ authKey, guildId }: ClientOptions) {
    super({ authKey, guildId });
  }
  public async get(serialNumber: string) {
    Validation.SerialNumber.parse(serialNumber);
    return await super.fetch('firearm/info', {
      body: JSON.stringify({ serialNumber }),
    });
  }
  public async list() {
    return await super.fetch('firearm/list');
  }
  public async create(body: CreateFirearmBody) {
    Validation.CreateFirearm.parse(body);
    return await super.fetch('firearm/create', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async edit(body: EditFirearmBody) {
    Validation.EditFirearm.parse(body);
    return await super.fetch('firearm/edit', {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
  public async delete(serialNumber: string) {
    Validation.SerialNumber.parse(serialNumber);
    return await super.fetch('firearm/delete', {
      method: 'DELETE',
      body: JSON.stringify({ serialNumber }),
    });
  }
}
