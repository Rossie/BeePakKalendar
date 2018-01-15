import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Image } from 'tns-core-modules/ui/image/image';
import { ImageService } from '../services/image.service';
import { android } from 'tns-core-modules/application/application';
import * as _ from 'lodash';
import * as Toast from 'nativescript-toast';
import { exit } from 'nativescript-exit';
import { SettingsService } from '../services/settings.service';
import * as SocialShare from "nativescript-social-share";
import { CalendarService } from '../services/calendar.service';
import { ImageSource } from 'tns-core-modules/image-source/image-source';

@Component({
    moduleId: module.id,
    selector: 'ns-image-result',
    templateUrl: './image-result.component.html',
    styleUrls: ['./image-result.component.scss']
})
export class ImageResultComponent implements OnInit {
    public imgResult: ImageSource;

    constructor(
        private router: RouterExtensions,
        private imageService: ImageService,
        private settingsService: SettingsService,
        private calendarService: CalendarService,
    ) { }

    ngOnInit() { 
        // let img:Image = this.imgResultRef.nativeElement;
        this.imgResult = this.imageService.calendarImageSource;
        // img.imageSource = this.imageService.getImageSourceFromFile(this.calendarService.imageCalendar.imageFile);

        this.settingsService.notFirstRun();
    }
    
    setWallpaper() {
        if (this.imageService.calendarImageSource.android){
            android.context.setWallpaper(this.imageService.calendarImageSource.android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.');
    }
    
    saveToFile() {
        let file = (new Date()).getTime() + '.png';
        file = this.imageService.getImagePath(file);
        this.imageService.calendarImageSource.saveToFile(file, "png");
        Toast.makeText('Kép elmentve.', 'long').show();
    }

    share() {
        SocialShare.shareImage(this.imageService.calendarImageSource);
    }

    exit() {
        exit();
    }
}
