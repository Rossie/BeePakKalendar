import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { PageRoute } from 'nativescript-angular/router/page-router-outlet';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UrlSegment } from '@angular/router/src/url_tree';
import * as platformModule from "tns-core-modules/platform";
// 3rd pary libraries
import { ImageCropper } from "nativescript-imagecropper"; // https://github.com/bthurlow/nativescript-imagecropper
import { OptionsCommon, Result } from 'nativescript-imagecropper/interfaces';
// Own libraries
import { ImageService } from '../image.service';
import { ImageSource } from 'tns-core-modules/image-source/image-source';

@Component({
    moduleId: module.id,
    selector: 'ns-image-crop',
    templateUrl: './image-crop.component.html',
    styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef

    private imageCropper: ImageCropper = new ImageCropper();

    constructor(
        private router: RouterExtensions,
        private pageRoute: PageRoute,
        private imageService: ImageService,
    ) { 
        this.pageRoute.activatedRoute
        .switchMap((activatedRoute: ActivatedRoute) => activatedRoute.url)
        .subscribe((param: UrlSegment[]) => {
            this.cropImage();
        });   
    }

    ngOnInit() { 
    }

    cropImage(){        
        const imgSrc = this.imageService.getSelectedSource();
        const options:OptionsCommon = {
            width: platformModule.screen.mainScreen.widthPixels,
            height: platformModule.screen.mainScreen.heightPixels
        };
        this.imageCropper.show(imgSrc, options)
        .then(result => {
            this.imageService.saveCroppedFile(result.image);
            this.router.navigateByUrl('image-calendar');
        })
        .catch(error => {
            console.error('Image Cropper Error:');
            this.router.navigateByUrl('image-select');
        });
    }

}
