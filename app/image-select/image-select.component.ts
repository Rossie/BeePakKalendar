import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { PageRoute } from 'nativescript-angular/router/page-router-outlet';
import * as fs from "file-system";
import "rxjs/add/operator/switchMap";
// 3rd pary libraries
import * as imagepicker from "nativescript-imagepicker"; // https://github.com/NativeScript/nativescript-imagepicker
// Own libraries
import { ImageService } from '../services/image.service';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UrlSegment } from '@angular/router/src/url_tree';
import { CalendarService } from '../services/calendar.service';
import { GridLayout } from "ui/layouts/grid-layout";
import { Label } from "ui/label";
import { android } from 'tns-core-modules/application/application';

@Component({
    moduleId: module.id,
    selector: 'ns-image-select',
    templateUrl: './image-select.component.html',
    styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {
    @ViewChild('scrollView') scrollView: ElementRef

    private isLoading = true

    constructor(
        private router: RouterExtensions,
        private imageService: ImageService,
        private pageRoute: PageRoute,
        private calendarService: CalendarService
    ) {
    }

    ngOnInit() {
        this.isLoading = false;
        this.pageRoute.activatedRoute
        .switchMap((activatedRoute: ActivatedRoute) => activatedRoute.url)
        .subscribe((param: UrlSegment[]) => {
        });

        // let folderPath = android.context.getExternalStoragePublicDirectory;
        // console.dir("folderPath", folderPath);
    }

    selectImage() {
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

    next() {
        this.router.navigateByUrl('image-crop');
    }
}
