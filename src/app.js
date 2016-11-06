export class App {
    configureRouter(config, router){
        config.title = 'Geonesia';
        config.map([
          { route: '', moduleId: 'welcome', title: 'Geonesia'}
          //,{ route: 'test', moduleId: 'skills', name:'skills' }
        ]);

        this.router = router;
    }
}