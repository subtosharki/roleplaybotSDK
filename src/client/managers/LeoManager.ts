import FetchClient from '../fetchClient.js';
import type {
  ArrestCivilianBody,
  CiteCivilianBody,
  ClientOptions,
  FineCivilianBody,
  ToggleImpoundVehicleBody,
} from '../../types/index.js';
import Validation from '../validation/index.js';

export default class extends FetchClient {
  public constructor({ authKey, guildId }: ClientOptions) {
    super({ authKey, guildId });
  }
  public async records(name: string) {
    Validation.Name.parse(name);
    return await super.fetch('leo/records', {
      body: JSON.stringify({ name }),
    });
  }
  public async isImpounded(plate: string) {
    Validation.Plate.parse(plate);
    return await super.fetch('leo/impound', {
      body: JSON.stringify({ plate }),
    });
  }
  public async arrest(body: ArrestCivilianBody) {
    Validation.ArrestCivilian.parse(body);
    return await super.fetch('leo/arrest', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async cite(body: CiteCivilianBody) {
    Validation.CiteCivilian.parse(body);
    return await super.fetch('leo/cite', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async fine(body: FineCivilianBody) {
    Validation.FineCivilian.parse(body);
    return await super.fetch('leo/fine', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
  public async toggleImpound(body: ToggleImpoundVehicleBody) {
    Validation.ToggleImpoundVehicle.parse(body);
    return await super.fetch('leo/impound', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}
