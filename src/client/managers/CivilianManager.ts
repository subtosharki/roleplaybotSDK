import FetchClient from '../fetchClient.js';
import type {
  ClientOptions,
  CreateCivilianBody,
  EditCivilianBody,
  ToggleBoloBody,
  ToggleDeceasedBody,
} from '../../types/index.js';
import Validation from '../validation/index.js';
import validation from '../validation/index.js';

export default class extends FetchClient {
  public constructor({ authKey, guildId }: ClientOptions) {
    super({ authKey, guildId });
  }
  public async get(name: string) {
    Validation.Name.parse(name);
    return await super.fetch('civilian/info', {
      body: JSON.stringify({ name }),
    });
  }
  public async list() {
    return await super.fetch('civilian/list');
  }
  public async create(body: CreateCivilianBody) {
    Validation.CreateCivilian.parse(body);
    return await super.fetch('civilian/create', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async edit(body: EditCivilianBody) {
    Validation.EditCivilian.parse(body);
    return await super.fetch('civilian/edit', {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
  public async bolo(body: ToggleBoloBody) {
    Validation.ToggleBolo.parse(body);
    if ('reason' in body) {
      return await super.fetch('civilian/bolo', {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
    }
    body.reason = 'No reason provided';
    return await super.fetch('civilian/bolo', {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
  public async deceased(body: ToggleDeceasedBody) {
    validation.ToggleDeceased.parse(body);
    return await super.fetch('civilian/deceased', {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }
  public async delete(name: string) {
    Validation.DeleteCivilian.parse(name);
    return await super.fetch('civilian/delete', {
      method: 'DELETE',
      body: JSON.stringify({ name }),
    });
  }
}
