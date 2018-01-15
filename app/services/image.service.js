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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkVBQXlFO0FBQ3pFLHlDQUEyQztBQUMzQyxnQ0FBa0M7QUFJbEMsd0NBQTBDO0FBRzFDO0lBUUk7SUFDSSxDQUFDO0lBRUcsaUNBQVUsR0FBbEIsVUFBbUIsV0FBdUI7UUFDdEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFTyxxQ0FBYyxHQUF0QixVQUF1QixRQUFlO1FBQ2xDLElBQUksRUFBRSxHQUFlLElBQUksMEJBQVcsRUFBRSxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUIsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCw2Q0FBc0IsR0FBdEIsVUFBdUIsSUFBVztRQUM5QixJQUFJLE1BQU0sR0FBZSxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUMzQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixXQUF1QjtRQUNwQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsV0FBVyxDQUFDO1FBQzNDLG9EQUFvRDtRQUNwRCw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsV0FBdUI7UUFDbkMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLFdBQXdCO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVEOztRQUVJO0lBRUosd0NBQWlCLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN4QyxDQUFDO0lBRUY7O1NBRUs7SUFFSjs7Ozs7Ozs7Ozs7Ozs7UUFjSTtJQUVKLG1DQUFZLEdBQVosVUFBYSxHQUFVO1FBQ25CLGdIQUFnSDtRQUNoSCxJQUFJLElBQUksQ0FBQztRQUNULEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLENBQy9FLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsa0RBQWtEO1lBQ2xELElBQUksZUFBZSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQXRGUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQXVGeEI7SUFBRCxtQkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBzZWxlY3RlZEZpbGVJbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2U7XG4gICAgcHVibGljIGNyb3BwZWRGaWxlOiBzdHJpbmc7XG4gICAgLy8gcHVibGljIGNyb3BwZWRGaWxlSW1hZ2VTb3VyY2U6IEltYWdlU291cmNlO1xuICAgIC8vIHB1YmxpYyBjYWxlbmRhckZpbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY2FsZW5kYXJJbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHsgfVxuXG4gICAgcHJpdmF0ZSBzYXZlVG9GaWxlKGltYWdlU291cmNlOkltYWdlU291cmNlKXtcbiAgICAgICAgY29uc3QgZG9jID0gZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgICBjb25zdCBpbWdGaWxlID0gZnMucGF0aC5qb2luKGRvYy5wYXRoLCAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgJy5wbmcnKTtcbiAgICAgICAgcmV0dXJuIGltYWdlU291cmNlLnNhdmVUb0ZpbGUoaW1nRmlsZSwgXCJwbmdcIikgPyBpbWdGaWxlIDogJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbWFnZVNvdXJjZShmaWxlbmFtZTpzdHJpbmcpOkltYWdlU291cmNlIHtcbiAgICAgICAgdmFyIGlzOkltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgIGlzLmxvYWRGcm9tRmlsZShmaWxlbmFtZSk7XG4gICAgICAgIHJldHVybiBpcztcbiAgICB9XG5cbiAgICBnZXRJbWFnZVNvdXJjZUZyb21GaWxlKGZpbGU6c3RyaW5nKSB7XG4gICAgICAgIGxldCByZXN1bHQ6SW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgcmVzdWx0LmxvYWRGcm9tRmlsZShmaWxlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzYXZlU2VsZWN0ZWRmaWxlKGltYWdlU291cmNlOkltYWdlU291cmNlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlSW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgLy8gdGhpcy5zZWxlY3RlZEZpbGUgPSB0aGlzLnNhdmVUb0ZpbGUoaW1hZ2VTb3VyY2UpO1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5zZWxlY3RlZEZpbGU7XG4gICAgfVxuXG4gICAgc2F2ZUNyb3BwZWRGaWxlKGltYWdlU291cmNlOkltYWdlU291cmNlKSB7XG4gICAgICAgIC8vIHRoaXMuY3JvcHBlZEZpbGVJbWFnZVNvdXJjZSA9IGltYWdlU291cmNlO1xuICAgICAgICB0aGlzLmNyb3BwZWRGaWxlID0gdGhpcy5zYXZlVG9GaWxlKGltYWdlU291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvcHBlZEZpbGU7XG4gICAgfVxuXG4gICAgc2F2ZUNhbGVuZGFySW1hZ2UoaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJJbWFnZVNvdXJjZSA9IGltYWdlU291cmNlO1xuICAgIH1cblxuICAgIC8qIGdldENyb3BwZWRTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyb3BwZWRGaWxlSW1hZ2VTb3VyY2U7XG4gICAgfSAqL1xuXG4gICAgZ2V0U2VsZWN0ZWRTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkRmlsZUltYWdlU291cmNlO1xuICAgIH1cblxuICAgLyogIGdldENhbGVuZGFyU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxlbmRhckltYWdlU291cmNlO1xuICAgIH0gKi9cblxuICAgIC8qIGdldExhc3RJbWFnZVNvdXJjZSgpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SW1hZ2VTb3VyY2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKS5nZXRFbnRpdGllcygpXG4gICAgICAgICAgICAudGhlbigoZmlsZWxpc3Q6IGZzLkZpbGVTeXN0ZW1FbnRpdHlbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBsYXN0SW1hZ2U6IGZzLkZpbGVTeXN0ZW1FbnRpdHkgPSBfLmNoYWluKGZpbGVsaXN0KS5vcmRlckJ5KFtcImxhc3RNb2RpZmllZFwiXSkubGFzdCgpLnZhbHVlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RGaWxlID0gbGFzdEltYWdlLnBhcmVudC5nZXRGaWxlKGxhc3RJbWFnZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgaXM6SW1hZ2VTb3VyY2UgPSBuZXcgSW1hZ2VTb3VyY2UoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpcy5sb2FkRnJvbUZpbGUobGFzdEZpbGUucGF0aCkgPyByZXNvbHZlKGlzKSA6IHJlamVjdChgQ2FuJ3QgbG9hZCBmaWxlOiAke2xhc3RGaWxlLnBhdGh9YCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBDYW4ndCBsb2FkIGZpbGU6ICR7bGFzdEZpbGUucGF0aH0gRXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0gKi9cblxuICAgIGdldEltYWdlUGF0aChpbWc6c3RyaW5nKTpzdHJpbmcge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTmlja0lsaWV2L05hdGl2ZVNjcmlwdC1Db3Ntb3MtRGF0YWJhbmsvYmxvYi9tYXN0ZXIvYXBwL3ZpZXdzL2hlbHBlcnMvZmlsZXMvZmlsZS1oZWxwZXJzLnRzXG4gICAgICAgIHZhciBwYXRoO1xuICAgICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xuICAgICAgICAgICAgdmFyIGFuZHJvaWREb3dubG9hZHNQYXRoID0gYW5kcm9pZC5vcy5FbnZpcm9ubWVudC5nZXRFeHRlcm5hbFN0b3JhZ2VQdWJsaWNEaXJlY3RvcnkoXG4gICAgICAgICAgICAgICAgYW5kcm9pZC5vcy5FbnZpcm9ubWVudC5ESVJFQ1RPUllfUElDVFVSRVMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBwYXRoID0gZmlsZVN5c3RlbS5wYXRoLmpvaW4oYW5kcm9pZERvd25sb2Fkc1BhdGgsIGltZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgICAgICAgICAvLyBUT0RPIDogIHRoaXMgd29ya3MgLSBidXQgd2hlcmUgYXJlIHRoZSBpbWFnZXMgP1xuICAgICAgICAgICAgdmFyIGlvc0Rvd25sb2FkUGF0aCA9IGZpbGVTeXN0ZW0ua25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgICAgICAgcGF0aCA9IGZpbGVTeXN0ZW0ucGF0aC5qb2luKGlvc0Rvd25sb2FkUGF0aC5wYXRoLCBpbWcpO1xuICAgICAgICB9ICBcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSAgICBcbn1cbiJdfQ==