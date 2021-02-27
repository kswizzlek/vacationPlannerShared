export interface Locations {
    tripUuid: string;
    locations: Location[];
}

export interface Location {
    name: string,
    description: string,
    person: any, //TODO: add person model
    links: string[],
    locationVotes: LocationVote[],
    isFinal: boolean
}

export interface LocationVote {
    like: boolean,
    person: any //TODO: add person model
}

export interface LocationLink {
    link: string,
    linkType: LinkType
}

export enum LinkType {
    MapLink,
    AttractionLink,
}