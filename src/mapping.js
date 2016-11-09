import {inject} from 'aurelia-framework';
import {Internationalization, LangLoaded} from 'internationalization';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Internationalization, EventAggregator)
export class Mapping {

    constructor(internationalization, eventAggregator) {
        this.internationalization = internationalization;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(LangLoaded, msg => this.data = msg.data.mapping);
    }

    attached() {
        this.internationalization.reload();
    }

}