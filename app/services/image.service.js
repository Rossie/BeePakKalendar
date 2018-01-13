"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source/image-source");
var application = require("application");
var fs = require("file-system");
var _ = require("lodash");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkVBQXlFO0FBQ3pFLHlDQUEyQztBQUMzQyxnQ0FBa0M7QUFDbEMsMEJBQTRCO0FBRzVCLHdDQUEwQztBQUcxQztJQVFJO0lBQ0ksQ0FBQztJQUVHLGlDQUFVLEdBQWxCLFVBQW1CLFdBQXVCO1FBQ3RDLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEMsSUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqRSxDQUFDO0lBRU8scUNBQWMsR0FBdEIsVUFBdUIsUUFBZTtRQUNsQyxJQUFJLEVBQUUsR0FBZSxJQUFJLDBCQUFXLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCLFVBQWlCLFdBQXVCO1FBQ3BDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxXQUFXLENBQUM7UUFDM0Msb0RBQW9EO1FBQ3BELDRCQUE0QjtJQUNoQyxDQUFDO0lBRUQsc0NBQWUsR0FBZixVQUFnQixXQUF1QjtRQUNuQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLFdBQXdCO1FBQ3RDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxXQUFXLENBQUM7SUFDM0MsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDdkMsQ0FBQztJQUVELHdDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDeEMsQ0FBQztJQUVELHdDQUFpQixHQUFqQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEMsQ0FBQztJQUVELHlDQUFrQixHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBYyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzVDLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFO2lCQUN4QyxJQUFJLENBQUMsVUFBQyxRQUErQjtnQkFDbEMsSUFBSSxTQUFTLEdBQXdCLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEcsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLEVBQUUsR0FBZSxJQUFJLDBCQUFXLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDO29CQUNELEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsc0JBQW9CLFFBQVEsQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDL0YsQ0FBQztnQkFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNiLE1BQU0sQ0FBQyxzQkFBb0IsUUFBUSxDQUFDLElBQUksZ0JBQVcsS0FBTyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxHQUFVO1FBQ25CLGdIQUFnSDtRQUNoSCxJQUFJLElBQUksQ0FBQztRQUNULEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsaUNBQWlDLENBQy9FLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsa0RBQWtEO1lBQ2xELElBQUksZUFBZSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUQsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQWhGUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7O09BQ0EsWUFBWSxDQWlGeEI7SUFBRCxtQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2VTb3VyY2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZS9pbWFnZS1zb3VyY2UnO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcInV0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZSc7XG5pbXBvcnQgKiBhcyBmaWxlU3lzdGVtIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBzZWxlY3RlZEZpbGVJbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2U7XG4gICAgcHVibGljIGNyb3BwZWRGaWxlOiBzdHJpbmc7XG4gICAgcHVibGljIGNyb3BwZWRGaWxlSW1hZ2VTb3VyY2U6IEltYWdlU291cmNlO1xuICAgIC8vIHB1YmxpYyBjYWxlbmRhckZpbGU6IHN0cmluZztcbiAgICBwdWJsaWMgY2FsZW5kYXJJbWFnZVNvdXJjZTogSW1hZ2VTb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICApIHsgfVxuICAgIFxuICAgIHByaXZhdGUgc2F2ZVRvRmlsZShpbWFnZVNvdXJjZTpJbWFnZVNvdXJjZSl7XG4gICAgICAgIGNvbnN0IGRvYyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgY29uc3QgaW1nRmlsZSA9IGZzLnBhdGguam9pbihkb2MucGF0aCwgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSArICcucG5nJyk7XG4gICAgICAgIHJldHVybiBpbWFnZVNvdXJjZS5zYXZlVG9GaWxlKGltZ0ZpbGUsIFwicG5nXCIpID8gaW1nRmlsZSA6ICcnO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW1hZ2VTb3VyY2UoZmlsZW5hbWU6c3RyaW5nKTpJbWFnZVNvdXJjZSB7XG4gICAgICAgIHZhciBpczpJbWFnZVNvdXJjZSA9IG5ldyBJbWFnZVNvdXJjZSgpO1xuICAgICAgICBpcy5sb2FkRnJvbUZpbGUoZmlsZW5hbWUpO1xuICAgICAgICByZXR1cm4gaXM7XG4gICAgfVxuXG4gICAgc2F2ZVNlbGVjdGVkZmlsZShpbWFnZVNvdXJjZTpJbWFnZVNvdXJjZSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRmlsZUltYWdlU291cmNlID0gaW1hZ2VTb3VyY2U7XG4gICAgICAgIC8vIHRoaXMuc2VsZWN0ZWRGaWxlID0gdGhpcy5zYXZlVG9GaWxlKGltYWdlU291cmNlKTtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2VsZWN0ZWRGaWxlO1xuICAgIH1cblxuICAgIHNhdmVDcm9wcGVkRmlsZShpbWFnZVNvdXJjZTpJbWFnZVNvdXJjZSkge1xuICAgICAgICB0aGlzLmNyb3BwZWRGaWxlSW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgdGhpcy5jcm9wcGVkRmlsZSA9IHRoaXMuc2F2ZVRvRmlsZShpbWFnZVNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNyb3BwZWRGaWxlO1xuICAgIH1cblxuICAgIHNhdmVDYWxlbmRhckltYWdlKGltYWdlU291cmNlOiBJbWFnZVNvdXJjZSkge1xuICAgICAgICB0aGlzLmNhbGVuZGFySW1hZ2VTb3VyY2UgPSBpbWFnZVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXRDcm9wcGVkU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcm9wcGVkRmlsZUltYWdlU291cmNlO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkU291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEZpbGVJbWFnZVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXRDYWxlbmRhclNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsZW5kYXJJbWFnZVNvdXJjZTtcbiAgICB9XG5cbiAgICBnZXRMYXN0SW1hZ2VTb3VyY2UoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEltYWdlU291cmNlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCkuZ2V0RW50aXRpZXMoKVxuICAgICAgICAgICAgLnRoZW4oKGZpbGVsaXN0OiBmcy5GaWxlU3lzdGVtRW50aXR5W10pID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgbGFzdEltYWdlOiBmcy5GaWxlU3lzdGVtRW50aXR5ID0gXy5jaGFpbihmaWxlbGlzdCkub3JkZXJCeShbXCJsYXN0TW9kaWZpZWRcIl0pLmxhc3QoKS52YWx1ZSgpO1xuICAgICAgICAgICAgICAgIGxldCBsYXN0RmlsZSA9IGxhc3RJbWFnZS5wYXJlbnQuZ2V0RmlsZShsYXN0SW1hZ2UubmFtZSk7XG4gICAgICAgICAgICAgICAgdmFyIGlzOkltYWdlU291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaXMubG9hZEZyb21GaWxlKGxhc3RGaWxlLnBhdGgpID8gcmVzb2x2ZShpcykgOiByZWplY3QoYENhbid0IGxvYWQgZmlsZTogJHtsYXN0RmlsZS5wYXRofWApO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgQ2FuJ3QgbG9hZCBmaWxlOiAke2xhc3RGaWxlLnBhdGh9IEVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbWFnZVBhdGgoaW1nOnN0cmluZyk6c3RyaW5nIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL05pY2tJbGlldi9OYXRpdmVTY3JpcHQtQ29zbW9zLURhdGFiYW5rL2Jsb2IvbWFzdGVyL2FwcC92aWV3cy9oZWxwZXJzL2ZpbGVzL2ZpbGUtaGVscGVycy50c1xuICAgICAgICB2YXIgcGF0aDtcbiAgICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIHZhciBhbmRyb2lkRG93bmxvYWRzUGF0aCA9IGFuZHJvaWQub3MuRW52aXJvbm1lbnQuZ2V0RXh0ZXJuYWxTdG9yYWdlUHVibGljRGlyZWN0b3J5KFxuICAgICAgICAgICAgICAgIGFuZHJvaWQub3MuRW52aXJvbm1lbnQuRElSRUNUT1JZX1BJQ1RVUkVTKS50b1N0cmluZygpO1xuICAgICAgICAgICAgcGF0aCA9IGZpbGVTeXN0ZW0ucGF0aC5qb2luKGFuZHJvaWREb3dubG9hZHNQYXRoLCBpbWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGFwcGxpY2F0aW9uLmlvcykge1xuICAgICAgICAgICAgLy8gVE9ETyA6ICB0aGlzIHdvcmtzIC0gYnV0IHdoZXJlIGFyZSB0aGUgaW1hZ2VzID9cbiAgICAgICAgICAgIHZhciBpb3NEb3dubG9hZFBhdGggPSBmaWxlU3lzdGVtLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgICAgIHBhdGggPSBmaWxlU3lzdGVtLnBhdGguam9pbihpb3NEb3dubG9hZFBhdGgucGF0aCwgaW1nKTtcbiAgICAgICAgfSAgXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH0gICAgXG59XG4iXX0=