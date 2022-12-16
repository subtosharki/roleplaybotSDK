import FetchClient from "../fetchClient.js";
import {CreateCivilianBody} from "../../types/index.js";

export default class extends FetchClient {
    public constructor({authKey, guildId}) {
        super({authKey, guildId});
    }
    public async get({name}) {
        return await super.fetch(`civilian/info`, {
        body: JSON.stringify({name}),
    });
    }
    public async delete({name}) {
        return await super.fetch(`civilian/delete`, {
        body: JSON.stringify({name}),
            method: 'DELETE'
    });
    }
    //plan to add vod validation later
    public async edit({name, field, value}) {
        return await super.fetch(`civilian/edit`, {
        body: JSON.stringify({name, field, value}),
            method: 'PATCH'
        })
    }
    public async create(body: CreateCivilianBody) {
        return await super.fetch(`civilian/create`, {
            body: JSON.stringify(body),
            method: 'POST'
        })
    }
    public async list() {
        return await super.fetch(`civilian/list`);
    }
}