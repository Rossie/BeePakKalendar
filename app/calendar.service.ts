import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarService {

    private locale = 'hu';
    private monthOffset: number = 0;

    constructor() {
        moment.locale(this.locale);
    }

    stepMonth(monthDelta) {
        this.monthOffset += monthDelta;
    }

    getMonth(): any[] {
        var result: IDayItem[] = [];
        let now = moment().date(1).add(this.monthOffset, 'months'); // first day of month
        let actWeek = now.week();
        let actMonth = now.month();
        let row = 0;
        do {
            // insert result object
            result.push({ row: row, col: this.convertDayOfWeek(now.day()), day: now.date() });
            // next day
            now.add(1, 'day');

            if (actWeek != now.week()) { // increment row if week different (important around dec 31.)
                row++;
                actWeek = now.week();
            }
        } while (actMonth == now.month());

        return result;
    }

    getMonthName(): string {
        return moment().date(1).add(this.monthOffset, 'months').format('MMMM');
    }

    /**
     * Converts JS day of the week where sunday is 0 to sunday = 6 and monday = 0
     * @param day 
     */
    private convertDayOfWeek(day: number): number {
        let cday = day - 1;
        return cday < 0 ? 6 : cday;
    }

}

export interface IDayItem {
    row: number;
    col: number;
    day: number;
    marker?: IDayMarker;
}

export interface IDayMarker {
    icon: string;
    cssClass: string;
}

export var markers: IDayMarker[] = [
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-1' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-2' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-3' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-1' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-2' },
    { icon: String.fromCharCode(0xf1db), cssClass: 'marker-color-3' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-1 small-dot' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-2 small-dot' },
    { icon: String.fromCharCode(0xf111), cssClass: 'marker-color-3 small-dot' },
];

