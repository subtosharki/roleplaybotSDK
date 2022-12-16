import * as APITypes from "../types/index.js";
import CivilianManager from "./managers/CivilianManager.js";
import FetchClient from "./fetchClient.js";

export default class extends FetchClient {
    private civilianManager: CivilianManager;
    public constructor({authKey, guildId}) {
        super({authKey, guildId});
        this.civilianManager = new CivilianManager({authKey, guildId});
    }
    public async getAPIVersion(): Promise<APITypes.VersionReturn> {
        return await super.fetch('version');
    }
    public async getCivilianInfo({name}): Promise<APITypes.CivilianInfoReturn> {
        return await this.civilianManager.get({name});
    }
    public async deleteCivilian({name}): Promise<APITypes.CivilianReturn> {
        return await this.civilianManager.delete({name});
    }
    public async editCivilian({name, field, value}): Promise<APITypes.CivilianEditReturn> {
        return await this.civilianManager.edit({name, field, value});
    }
    public async createCivilian(body: APITypes.CreateCivilianBody): Promise<APITypes.CivilianReturn> {
        return await this.civilianManager.create(body);
    }
    public async listCivilians(): Promise<APITypes.CivilianListReturn> {
        return await this.civilianManager.list();
    }

}