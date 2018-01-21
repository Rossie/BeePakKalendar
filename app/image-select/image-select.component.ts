import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { PageRoute } from 'nativescript-angular/router/page-router-outlet';
import * as fs from "file-system";
import "rxjs/add/operator/switchMap";
// 3rd pary libraries
import * as imagepicker from "nativescript-imagepicker"; // https://github.com/NativeScript/nativescript-imagepicker
import * as moment from 'moment';
import { Moment } from 'moment';
// Own libraries
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UrlSegment } from '@angular/router/src/url_tree';
import { CalendarService, IImageCalendar, AGENDA_FORMAT } from '../services/calendar.service';
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import { android } from 'tns-core-modules/application/application';
import { SettingsService } from '../services/settings.service';

@Component({
    moduleId: module.id,
    selector: 'ns-image-select',
    templateUrl: './image-select.component.html',
    styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {
    public isLoading = true
    public images: IImageCalendar[];
    public dayTexts;
    @ViewChild('scrollView') scrollView: ElementRef

    constructor(
        private router: RouterExtensions,
        private imageService: ImageService,
        private pageRoute: PageRoute,
        private calendarService: CalendarService,
        private settings: SettingsService
    ) { }

    ngOnInit() {
        this.isLoading = false;
        this.pageRoute.activatedRoute
            .switchMap((activatedRoute: ActivatedRoute) => activatedRoute.url)
            .subscribe((param: UrlSegment[]) => {
                this.dayTexts = this.settings.getAllDayText(moment());
                // console.log(JSON.stringify(this.dayTexts, null, 2));
            });

        this.images = this.settings.getImageList();
    }

    newImage() {
        const context = imagepicker.create({
            mode: "single" // use "multiple" for multiple selection
        });

        context.authorize()
            .then(() => context.present())
            .then(selection => {
                selection.forEach(selected => {
                    // process the selected image
                    selected.getImage().then((imgSource: ImageSource) => {
                        // save file into app document
                        this.imageService.saveSelectedfile(imgSource);
                        this.router.navigateByUrl('image-crop'); // navigate to next screen
                    });
                });
                // list.items = selection;
            }).catch(function (e) {
                // process error
                console.error(e);
            });
    }

    loadImage(image: IImageCalendar) {
        // store selected image record
        this.calendarService.selectCalendar(image);
        this.router.navigateByUrl('image-calendar');
    }

    next() {
        this.router.navigateByUrl('image-crop');
    }

    getMonthName(image: IImageCalendar) {
        return image.lastMonth ? moment.unix(image.lastMonth).format('MMMM') : '';
    }

    getAgendaDateFormat(date: Moment): string {
        return date.format(AGENDA_FORMAT);
    }
}
