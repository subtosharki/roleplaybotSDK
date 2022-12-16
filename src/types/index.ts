type UnauthorizedReturn = {
    authentication: false
    error: string
    details: string
}

type ErrorReturn = {
    error: string
    details: string
}

type BasicError = {
    error: string
}

//finish later
type Civilian = {
    deceased: boolean
    bolo: boolean
    boloReason: string
    civilianAge: number

}
type Citations = any
type Fines = any
type Arrests = any
type HospitalRecords = any


export type VersionReturn = {
    version: string;
} | UnauthorizedReturn;

export type CivilianInfoReturn = {
    guildID: string;
    userID: string;
    userName: string;
    civilian: Array<Civilian>
    citations: Array<Citations>
    fines: Array<Fines>
    arrests: Array<Arrests>
    hospitalRecords: Array<HospitalRecords>
} | ErrorReturn;

export type CivilianReturn = {
    guildID: string;
    civilianID: string;
    civilianName: string;
    userName: string;
    userID: string;
    success: string;
    civilian: Array<Civilian>
} | ErrorReturn;

export type CivilianEditReturn = {
    guildID: string;
    civilianName: string;
    civilianID: string;
    userName: string;
    userID: string;
    field: string;
    value: string;
    oldValue: string;
    success: string;
    civilian: Array<any>
} | BasicError | ErrorReturn;

export type CreateCivilianBody = {
    userID: string;
    userName: string;
    name: string;
    age: number;
    dob: string;
    gender: string;
    hair: string;
    height: number
    weight: number;
    address: string;
    occupation: string;
}

export type CivilianListReturn = {
    amount: number;
    guildID: string;
    civilians: Array<Civilian>
}