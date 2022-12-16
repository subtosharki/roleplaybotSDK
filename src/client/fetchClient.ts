export default class {
    private credentials: { authKey: string; guildId: string };
    protected readonly URL = 'https://roleplaybot.xyz/api'
    public constructor({authKey, guildId}) {
        this.credentials = {authKey, guildId};
    }
    public set setAuthKey(authKey: string) {
        this.credentials.authKey = authKey;
    }
    public set setGuildId(guildId: string) {
        this.credentials.guildId = guildId;
    }
    public get getGuildId() {
        return this.credentials.guildId;
    }
    public get getAuthKey() {
        return this.credentials.authKey;
    }
    public async fetch(path: string, options?: any) {
        options.headers = {
            'Authorization': this.credentials.authKey,
            'Guild': this.credentials.guildId,
        }
        return await fetch(`${this.URL}/${path}`, options).then(res => res.json());
    }
}