﻿import {inject} from 'aurelia-framework';
import {Internationalization, LangLoaded} from 'internationalization';
import {EventAggregator} from 'aurelia-event-aggregator';
import 'bootstrap';

@inject(Internationalization, EventAggregator)
export class Services {

    constructor(internationalization, eventAggregator) {
        this.internationalization = internationalization;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(LangLoaded, msg => this.data = msg.data.services);
    }

    attached() {
        this.internationalization.reload();
    }
}