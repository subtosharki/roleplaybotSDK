export * from './civilian/index.js';
export * from './vehicle/index.js';

interface UnauthorizedReturn {
  authentication: false;
  error: string;
  details: string;
}

export type ErrorReturn =
  | {
      error: string;
      details: string;
    }
  | UnauthorizedReturn;

export type VersionReturn =
  | {
      version: string;
    }
  | UnauthorizedReturn;

export interface ClientOptions {
  authKey: string;
  guildId: string;
}
