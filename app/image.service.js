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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkVBQXlFO0FBQ3pFLGdDQUFrQztBQUNsQywwQkFBNEI7QUFLNUI7SUFRSTtJQUNJLENBQUM7SUFFRyxpQ0FBVSxHQUFsQixVQUFtQixXQUF1QjtRQUN0QyxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVPLHFDQUFjLEdBQXRCLFVBQXVCLFFBQWU7UUFDbEMsSUFBSSxFQUFFLEdBQWUsSUFBSSwwQkFBVyxFQUFFLENBQUM7UUFDdkMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixXQUF1QjtRQUNwQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsV0FBVyxDQUFDO1FBQzNDLG9EQUFvRDtRQUNwRCw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsV0FBdUI7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELHdDQUFpQixHQUFqQixVQUFrQixXQUF3QjtRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hDLENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUM1QyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRTtpQkFDeEMsSUFBSSxDQUFDLFVBQUMsUUFBK0I7Z0JBQ2xDLElBQUksU0FBUyxHQUF3QixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hHLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxFQUFFLEdBQWUsSUFBSSwwQkFBVyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQztvQkFDRCxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLHNCQUFvQixRQUFRLENBQUMsSUFBTSxDQUFDLENBQUM7Z0JBQy9GLENBQUM7Z0JBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDYixNQUFNLENBQUMsc0JBQW9CLFFBQVEsQ0FBQyxJQUFJLGdCQUFXLEtBQU8sQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqRVEsWUFBWTtRQUR4QixpQkFBVSxFQUFFOztPQUNBLFlBQVksQ0FtRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlU291cmNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2UvaW1hZ2Utc291cmNlJztcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEltYWdlU2VydmljZSB7XG5cbiAgICBwdWJsaWMgc2VsZWN0ZWRGaWxlSW1hZ2VTb3VyY2U6IEltYWdlU291cmNlO1xuICAgIHB1YmxpYyBjcm9wcGVkRmlsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjcm9wcGVkRmlsZUltYWdlU291cmNlOiBJbWFnZVNvdXJjZTtcbiAgICBwdWJsaWMgY2FsZW5kYXJGaWxlOiBzdHJpbmc7XG4gICAgcHVibGljIGNhbGVuZGFySW1hZ2VTb3VyY2U6IEltYWdlU291cmNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgKSB7IH1cbiAgICBcbiAgICBwcml2YXRlIHNhdmVUb0ZpbGUoaW1hZ2VTb3VyY2U6SW1hZ2VTb3VyY2Upe1xuICAgICAgICBjb25zdCBkb2MgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIGNvbnN0IGltZ0ZpbGUgPSBmcy5wYXRoLmpvaW4oZG9jLnBhdGgsIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnLnBuZycpO1xuICAgICAgICByZXR1cm4gaW1hZ2VTb3VyY2Uuc2F2ZVRvRmlsZShpbWdGaWxlLCBcInBuZ1wiKSA/IGltZ0ZpbGUgOiAnJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlU291cmNlKGZpbGVuYW1lOnN0cmluZyk6SW1hZ2VTb3VyY2Uge1xuICAgICAgICB2YXIgaXM6SW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgaXMubG9hZEZyb21GaWxlKGZpbGVuYW1lKTtcbiAgICAgICAgcmV0dXJuIGlzO1xuICAgIH1cblxuICAgIHNhdmVTZWxlY3RlZGZpbGUoaW1hZ2VTb3VyY2U6SW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZpbGVJbWFnZVNvdXJjZSA9IGltYWdlU291cmNlO1xuICAgICAgICAvLyB0aGlzLnNlbGVjdGVkRmlsZSA9IHRoaXMuc2F2ZVRvRmlsZShpbWFnZVNvdXJjZSk7XG4gICAgICAgIC8vIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZTtcbiAgICB9XG5cbiAgICBzYXZlQ3JvcHBlZEZpbGUoaW1hZ2VTb3VyY2U6SW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgdGhpcy5jcm9wcGVkRmlsZUltYWdlU291cmNlID0gaW1hZ2VTb3VyY2U7XG4gICAgICAgIHRoaXMuY3JvcHBlZEZpbGUgPSB0aGlzLnNhdmVUb0ZpbGUoaW1hZ2VTb3VyY2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcm9wcGVkRmlsZTtcbiAgICB9XG5cbiAgICBzYXZlQ2FsZW5kYXJJbWFnZShpbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhckltYWdlU291cmNlID0gaW1hZ2VTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0Q3JvcHBlZFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvcHBlZEZpbGVJbWFnZVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRGaWxlSW1hZ2VTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0Q2FsZW5kYXJTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGVuZGFySW1hZ2VTb3VyY2U7XG4gICAgfVxuXG4gICAgZ2V0TGFzdEltYWdlU291cmNlKCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJbWFnZVNvdXJjZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLmdldEVudGl0aWVzKClcbiAgICAgICAgICAgIC50aGVuKChmaWxlbGlzdDogZnMuRmlsZVN5c3RlbUVudGl0eVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGxhc3RJbWFnZTogZnMuRmlsZVN5c3RlbUVudGl0eSA9IF8uY2hhaW4oZmlsZWxpc3QpLm9yZGVyQnkoW1wibGFzdE1vZGlmaWVkXCJdKS5sYXN0KCkudmFsdWUoKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdEZpbGUgPSBsYXN0SW1hZ2UucGFyZW50LmdldEZpbGUobGFzdEltYWdlLm5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBpczpJbWFnZVNvdXJjZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlzLmxvYWRGcm9tRmlsZShsYXN0RmlsZS5wYXRoKSA/IHJlc29sdmUoaXMpIDogcmVqZWN0KGBDYW4ndCBsb2FkIGZpbGU6ICR7bGFzdEZpbGUucGF0aH1gKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYENhbid0IGxvYWQgZmlsZTogJHtsYXN0RmlsZS5wYXRofSBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=