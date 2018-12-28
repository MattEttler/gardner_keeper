import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ANNOTATION_MODES } from './models/annotation-modes.model';

@Injectable({
    providedIn: 'root'
})
export class ModeService {
    private _mode: BehaviorSubject<ANNOTATION_MODES>;
    public $mode: Observable<ANNOTATION_MODES>;
    constructor() {
        this._mode = new BehaviorSubject(undefined);
        this.$mode = this._mode.asObservable();
    }

    changeMode(mode: ANNOTATION_MODES) {
        this._mode.next(mode);
    }
}
