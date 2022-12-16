# roleplaybotSDK
A type-safe Javascript SDK for the RoleplayBot API

### Example Usage

ESM
```js
import { RoleplayBotSDK } from 'roleplaybotSDK';

const auth = {
  authKey: 'your api auth key',
  guildId: 'your guild id'
};

const client = new RoleplayBotSDK(auth);

//Get the current API version
const version = await client.getAPIVersion();

//Get all civilians in the guild
const civilians = await client.listCivilians();
```

CJS
```js
const { RoleplayBotSDK } = require('roleplaybotSDK');

const auth = {
  authKey: 'your api auth key',
  guildId: 'your guild id'
};

const client = new RoleplayBotSDK(auth);

(async () => {
  //Get the current API version
  const version = await client.getAPIVersion();

  //Get all civilians in the guild
  const civilians = await client.listCivilians();
})();
```
