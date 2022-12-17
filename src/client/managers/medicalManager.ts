import type { AdmitCivilianBody, ClientOptions } from '../../types/index.js';
import FetchClient from '../fetchClient.js';
import Validation from '../validation/index.js';

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
  public async admit(body: AdmitCivilianBody) {
    Validation.AdmitCivilian.parse(body);
    return await super.fetch('civilian/admit', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
