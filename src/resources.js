import {inject} from 'aurelia-framework';
import {Internationalization, LangLoaded} from 'internationalization';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Internationalization, EventAggregator)
export class Resources {

    constructor(internationalization, eventAggregator) {
        this.internationalization = internationalization;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(LangLoaded, msg => this.data = msg.data.resources);
    }

    attached() {
        this.internationalization.reload();
    }

}