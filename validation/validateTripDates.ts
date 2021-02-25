import { TripDate, TripDates } from "../models/tripDates";

export const validateTripDates = {
    checkIfDateOverlaps: (tripDate: TripDate, tripDates: TripDates): boolean => {
        if(!tripDates.dates) return false;
        let invalid = false;
        tripDates.dates.filter(d => d.personsUsername === tripDate.personsUsername).forEach(td => {
            if ((new Date(tripDate.startDate) > new Date(td.startDate)) && (new Date(tripDate.startDate) < new Date(td.endDate))){
                invalid = true;
            }
            if(new Date(tripDate.endDate) < new Date(td.endDate) && new Date(tripDate.endDate) > new Date(td.startDate)) {
                invalid = true;
            }
        })
        return invalid;
    }
}