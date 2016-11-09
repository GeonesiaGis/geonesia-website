import {inject} from 'aurelia-framework';
import {Internationalization, LangLoaded, LangChanged} from 'internationalization';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Internationalization, EventAggregator)
export class Navbar {

    constructor(internationalization, eventAggregator) {
        this.internationalization = internationalization;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(LangLoaded, msg => this.data = msg.data.navbar);
    }

    changeLang(lang) {
        this.eventAggregator.publish(new LangChanged(lang));
    }
}