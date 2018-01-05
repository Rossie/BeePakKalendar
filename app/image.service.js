"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source/image-source");
var fs = require("file-system");
var _ = require("lodash");
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
    ImageService.prototype.saveSelectedfile = function (imageSource) {
        this.selectedFileImageSource = imageSource;
        // this.selectedFile = this.saveToFile(imageSource);
        // return this.selectedFile;
    };
    ImageService.prototype.saveCroppedFile = function (imageSource) {
        this.croppedFileImageSource = imageSource;
        this.croppedFile = this.saveToFile(imageSource);
        return this.croppedFile;
    };
    ImageService.prototype.saveCalendarImage = function (imageSource) {
        this.calendarImageSource = imageSource;
    };
    ImageService.prototype.getCroppedSource = function () {
        return this.croppedFileImageSource;
    };
    ImageService.prototype.getSelectedSource = function () {
        return this.selectedFileImageSource;
    };
    ImageService.prototype.getCalendarSource = function () {
        return this.calendarImageSource;
    };
    ImageService.prototype.getLastImageSource = function () {
        return new Promise(function (resolve, reject) {
            fs.knownFolders.documents().getEntities()
                .then(function (filelist) {
                var lastImage = _.chain(filelist).orderBy(["lastModified"]).last().value();
                var lastFile = lastImage.parent.getFile(lastImage.name);
                var is = new image_source_1.ImageSource();
                try {
                    is.loadFromFile(lastFile.path) ? resolve(is) : reject("Can't load file: " + lastFile.path);
                }
                catch (error) {
                    reject("Can't load file: " + lastFile.path + " Error: " + error);
                }
            });
        });
    };
    ImageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
