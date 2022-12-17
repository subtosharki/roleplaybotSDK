# roleplaybotSDK
A type-safe Javascript SDK for the RoleplayBot API

### Example Usage

ESM
```js
import { RoleplayBotSDK } from 'roleplaybot-sdk';

const auth = {
  authKey: 'your api auth key',
  guildId: 'your guild id'
};

const client = new RoleplayBotSDK(auth);

//Get the current API version
const version = await client.getAPIVersion();

//Get all civilians in the guild
const civilians = await client.getAllCivilians();
```

CJS
```js
const { RoleplayBotSDK } = require('roleplaybot-sdk');

const auth = {
  authKey: 'your api auth key',
  guildId: 'your guild id'
};

const client = new RoleplayBotSDK(auth);

(async () => {
  //Get the current API version
  const version = await client.getAPIVersion();

  //Get all civilians in the guild
  const civilians = await client.getAllCivilians();
})();
```
