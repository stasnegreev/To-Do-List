import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class SettingService {
    isGreenTheme = new EventEmitter<any>();
    onGreenTheme() {
        this.isGreenTheme.emit(true)
    }
    onBlueTheme() {
        this.isGreenTheme.emit(false)
    }
}
