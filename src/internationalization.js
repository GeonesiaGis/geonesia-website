import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'whatwg-fetch'; // fetch polyfill
import {EventAggregator} from 'aurelia-event-aggregator';

@inject (HttpClient, EventAggregator)
export class Internationalization {

    constructor(httpClient, eventAggregator) {
        this.httpClient = httpClient;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(LangChanged, msg => this.load(msg.lang));
        this.eventAggregator.publish(new LangChanged('fr'));
    }

    load(lang) {
        let _ = this;
        this.httpClient.fetch(`../src/assets/${lang}.json`)
            .then(response => response.json())
            .then(data => _.data = data)
            .then(data => { this.eventAggregator.publish(new LangLoaded(data)) });
    }

    reload() {
        this.eventAggregator.publish(new LangLoaded(this.data));
    }

}

export class LangChanged {
    constructor(lang) {
        this.lang = lang;
    }
}

export class LangLoaded {
    constructor(data) {
        this.data = data;
    }
}