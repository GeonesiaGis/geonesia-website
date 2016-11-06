import {inject} from 'aurelia-framework';
import {Internationalization} from 'internationalization';

@inject(Internationalization)
export class Welcome {

    constructor(internationalization) {
        this.internationalization = internationalization;
    }

    attached() {
        this.data = this.internationalization.data;
    }


}