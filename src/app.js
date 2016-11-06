export class App {

    configureRouter(config, router){
        config.title = 'Geonesia';
        config.map([
          { route: ['', 'home'], moduleId: 'home',   name: 'home' },
          { route: 'skills',     moduleId: 'skills', name: 'skills' }
        ]);

        this.router = router;
    }
}