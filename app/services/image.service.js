"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source/image-source");
var application = require("application");
var fs = require("file-system");
var fileSystem = require("file-system");
var ImageService = (function () {
    function ImageService() {
    }
    ImageService.prototype.saveToFile = function (imageSource) {
        var doc = fs.knownFolders.documents();
        var imgFile = fs.path.join(doc.path, (new Date()).getTime() + '.png');
        return imageSource.saveToFile(imgFile, "png") ? imgFile : '';
    };
    ImageService.prototype.getImageSource = function (filename) {
        var is = new image_source_1.ImageSource();
        is.loadFromFile(filename);
        return is;
    };
    ImageService.prototype.getImageSourceFromFile = function (file) {
        var result = new image_source_1.ImageSource();
        result.loadFromFile(file);
        return result;
    };
    ImageService.prototype.saveSelectedfile = function (imageSource) {
        this.selectedFileImageSource = imageSource;
        // this.selectedFile = this.saveToFile(imageSource);
        // return this.selectedFile;
    };
    ImageService.prototype.saveCroppedFile = function (imageSource) {
        // this.croppedFileImageSource = imageSource;
        this.croppedFile = this.saveToFile(imageSource);
        return this.croppedFile;
    };
    ImageService.prototype.saveCalendarImage = function (imageSource) {
        this.calendarImageSource = imageSource;
    };
    /* getCroppedSource() {
        return this.croppedFileImageSource;
    } */
    ImageService.prototype.getSelectedSource = function () {
        return this.selectedFileImageSource;
    };
    /*  getCalendarSource() {
         return this.calendarImageSource;
     } */
    /* getLastImageSource(){
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
    } */
    ImageService.prototype.getImagePath = function (img) {
        // https://github.com/NickIliev/NativeScript-Cosmos-Databank/blob/master/app/views/helpers/files/file-helpers.ts
        var path;
        if (application.android) {
            var androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_PICTURES).toString();
            path = fileSystem.path.join(androidDownloadsPath, img);
        }
        else if (application.ios) {
            // TODO :  this works - but where are the images ?
            var iosDownloadPath = fileSystem.knownFolders.documents();
            path = fileSystem.path.join(iosDownloadPath.path, img);
        }
        return path;
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
