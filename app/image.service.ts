import { Injectable } from '@angular/core';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import * as application from "application";
import * as fs from "file-system";
import * as _ from "lodash";
import * as utils from "utils/utils";
import { Page } from 'tns-core-modules/ui/frame/frame';
import * as fileSystem from "file-system";

@Injectable()
export class ImageService {

    public selectedFileImageSource: ImageSource;
    public croppedFile: string;
    public croppedFileImageSource: ImageSource;
    // public calendarFile: string;
    public calendarImageSource: ImageSource;

    constructor(
    ) { }
    
    private saveToFile(imageSource:ImageSource){
        const doc = fs.knownFolders.documents();
        const imgFile = fs.path.join(doc.path, (new Date()).getTime() + '.png');
        return imageSource.saveToFile(imgFile, "png") ? imgFile : '';
    }

    private getImageSource(filename:string):ImageSource {
        var is:ImageSource = new ImageSource();
        is.loadFromFile(filename);
        return is;
    }

    saveSelectedfile(imageSource:ImageSource) {
        this.selectedFileImageSource = imageSource;
        // this.selectedFile = this.saveToFile(imageSource);
        // return this.selectedFile;
    }

    saveCroppedFile(imageSource:ImageSource) {
        this.croppedFileImageSource = imageSource;
        this.croppedFile = this.saveToFile(imageSource);
        return this.croppedFile;
    }

    saveCalendarImage(imageSource: ImageSource) {
        this.calendarImageSource = imageSource;
    }

    getCroppedSource() {
        return this.croppedFileImageSource;
    }

    getSelectedSource() {
        return this.selectedFileImageSource;
    }

    getCalendarSource() {
        return this.calendarImageSource;
    }

    getLastImageSource(){
        return new Promise<ImageSource>((resolve, reject) => {
            fs.knownFolders.documents().getEntities()
            .then((filelist: fs.FileSystemEntity[]) => {
                var lastImage: fs.FileSystemEntity = _.chain(filelist).orderBy(["lastModified"]).last().value();
                let lastFile = lastImage.parent.getFile(lastImage.name);
                var is:ImageSource = new ImageSource();
                try {
                    is.loadFromFile(lastFile.path) ? resolve(is) : reject(`Can't load file: ${lastFile.path}`);
                } catch (error) {
                    reject(`Can't load file: ${lastFile.path} Error: ${error}`);
                }
            });
        });
    }

    getImagePath(img:string):string {
        // https://github.com/NickIliev/NativeScript-Cosmos-Databank/blob/master/app/views/helpers/files/file-helpers.ts
        var path;
        if (application.android) {
            var androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(
                android.os.Environment.DIRECTORY_PICTURES).toString();
            path = fileSystem.path.join(androidDownloadsPath, img);
        } else if (application.ios) {
            // TODO :  this works - but where are the images ?
            var iosDownloadPath = fileSystem.knownFolders.documents();
            path = fileSystem.path.join(iosDownloadPath.path, img);
        }  
        return path;
    }    
}
