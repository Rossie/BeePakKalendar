import * as imageSource from 'tns-core-modules/image-source';
import { OptionsCommon } from './interfaces';
import { Result } from './interfaces';
export declare class ImageCropper {
    show(image: imageSource.ImageSource, options?: OptionsCommon): Promise<Result>;
    private _gcd(width, height);
    private _storeImageSource(image);
    private _cleanFiles();
    private _getContext();
}
