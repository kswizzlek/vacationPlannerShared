export interface TripDate{
    personsUsername: string;
    dateMode: string;
    startDate: Date;
    endDate: Date;
}

export interface TripDates {
    tripUuid: string;
    tripDates: TripDate[];
}