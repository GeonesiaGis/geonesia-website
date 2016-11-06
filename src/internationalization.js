import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'whatwg-fetch'; // fetch polyfill

@inject (HttpClient)
export class Internationalization {

    constructor(httpClient) {
        this.httpClient = httpClient;
        this.load();
    }

    lang = "fr";
    data = {};

    load() {
        let _ = this;
        this.httpClient.fetch(`../src/assets/${this.lang}.json`)
            .then(response => response.json())
            .then(data => { _.data = data; });
    }

}