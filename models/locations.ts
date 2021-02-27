export interface Locations {
    tripUuid: string;
    locations: Location[];
}

export interface Location {
    locationUuid: string,
    name: string,
    description: string,
    person: any, //TODO: add person model
    mapLink: string,
    attractionLinks: string[],
    locationVotes: LocationVote[],
    isFinal: boolean
}

export interface LocationVote {
    like: boolean,
    person: any //TODO: add person model
}