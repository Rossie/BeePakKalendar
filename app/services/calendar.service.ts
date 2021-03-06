import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { SettingsService } from '../services/settings.service'
import { Moment, isMoment } from 'moment';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CalendarService {
    public imageCalendar: IImageCalendar;
    private locale = 'hu';
    public daysObservable: BehaviorSubject<IDayItem[]>;
    public monthObservable: BehaviorSubject<Moment>;
    private actMonth: Moment;

    constructor(
        private settings: SettingsService
    ) {
        moment.locale(this.locale);
        this.actMonth = moment().date(1); // set current month 1st
        this.monthObservable = new BehaviorSubject<Moment>(this.actMonth);
        this.daysObservable = new BehaviorSubject<IDayItem[]>(this.getMonth());
    }

    setMonth(newMonth: Moment | number) {
        if (moment.isMoment(newMonth)) {
            this.actMonth = newMonth.clone().date(1);
        }
        else {
            this.actMonth = moment.unix(newMonth);
        }

        this.monthObservable.next(this.actMonth.clone());
        this.daysObservable.next(this.getMonth());
    }

    stepMonth(monthDelta) {
        this.actMonth.add(monthDelta, 'months');
        this.monthObservable.next(this.actMonth.clone());
        this.daysObservable.next(this.getMonth());
    }

    getMonth(): any[] {
        var result: IDayItem[] = [];
        // let now = moment().date(1).add(this.monthOffset, 'months'); // first day of month
        let now = this.actMonth.clone();
        let actWeek = now.week();
        let actMonth = now.month();
        let row = 0;
        do {
            // get markers for this day from storage
            let marker: IDayMarker = this.settings.getDayMarker(now);
            let dayText: string = this.settings.getDayText(now);
            // insert result object
            result.push({
                row: row,
                col: this.convertDayOfWeek(now.day()),
                day: now.date(),
                date: now.clone(),
                marker: marker,
                text: dayText
            });
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
        return this.actMonth.format('MMMM');
    }

    /**
     * Converts JS day of the week where sunday is 0 to sunday = 6 and monday = 0
     * @param day 
     */
    private convertDayOfWeek(day: number): number {
        let cday = day - 1;
        return cday < 0 ? 6 : cday;
    }

    selectCalendar(imageCalendar: IImageCalendar) {
        this.imageCalendar = imageCalendar;
        if (imageCalendar.lastMonth) {
            this.setMonth(imageCalendar.lastMonth);
        }
    }
}

export const AGENDA_FORMAT: string = 'MMM. DD.(dd)';
export const FULL_DATE_FORMAT: string = 'YYYY. MMMM DD. dddd';

export interface IDayItem {
    row: number;
    col: number;
    day: number;
    date: Moment;
    marker?: IDayMarker;
    text?: string;
}

export interface IDayMarker {
    icon: string;
    cssClass: string;
}

export function compareDayMarkers(m1, m2) {
    return m1 && m2 && m1.icon == m2.icon && m1.cssClass == m2.cssClass;
}

export interface IImageCalendar {
    imageFile: string;
    calendarLeft: number;
    calendarTop: number;
    calendarScale: number;
    createdOn: number;
    lastMonth: number;
    // imageSource?: ImageSource;
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

