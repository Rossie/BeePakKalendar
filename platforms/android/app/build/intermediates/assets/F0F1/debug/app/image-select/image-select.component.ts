import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'


@Component({
    moduleId: module.id,
    selector: 'ns-image-select',
    templateUrl: './image-select.component.html',
    styleUrls: ['./image-select.component.css']
})
export class ImageSelectComponent implements OnInit {

    @ViewChild('scrollView') scrollView: ElementRef

    private isLoading = true

    constructor(
        private router: RouterExtensions,
    ) { }

    ngOnInit() { }


}
