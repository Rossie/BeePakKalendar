import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Image } from 'tns-core-modules/ui/image/image';
import { ImageService } from '../image.service';
import { android } from 'tns-core-modules/application/application';
import * as _ from 'lodash';
import * as Toast from 'nativescript-toast';
import { exit } from 'nativescript-exit';
import { SettingsService } from '../settings.service';

@Component({
    moduleId: module.id,
    selector: 'ns-image-result',
    templateUrl: './image-result.component.html',
    styleUrls: ['./image-result.component.css']
})
export class ImageResultComponent implements OnInit {

    @ViewChild('imgResult') imgResultRef: ElementRef;

    private imgResult: Image;

    constructor(
        private router: RouterExtensions,
        private imageService: ImageService,
        private settingsService: SettingsService
    ) { }

    ngOnInit() { 
        let img:Image = this.imgResultRef.nativeElement;
        img.imageSource = this.imageService.getCalendarSource();

        this.settingsService.notFirstRun();
    }
    
    setWallpaper() {
        if (this.imgResultRef.nativeElement.android){
            android.context.setWallpaper(this.imageService.getCalendarSource().android);
            Toast.makeText('Háttérkép beállítva.', 'long').show();
        }
        else
            console.error('setWallpaper: Not implemented for IOS.')
    }
    
    saveToFile() {
        // let folderPath = android.context.getExternalStoragePublicDirectory(android.context.Environment.DIRECTORY_PICTURES);
        // console.dir(img.android);
        console.dir(android.context.getExternalStoragePublicDirectory());
        Toast.makeText('Kép elmentve.', 'long').show();     
    }

    share() {

    }

    exit() {
        exit();
    }
}
