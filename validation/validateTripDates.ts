import { TripDate, TripDates } from "../models/tripDates";

export const validateTripDates = {
    checkIfDateOverlaps: (tripDate: TripDate, tripDates: TripDates): boolean => {
        tripDates.tripDates.forEach(td => {
            if (tripDate.startDate > td.startDate && tripDate.startDate < td.endDate){
                return true;
            }
            if(tripDates.endDate < td.endDate && tripDate.endDate > td.startDate) {
                return true;
            }
            return false;
        })
    }
}